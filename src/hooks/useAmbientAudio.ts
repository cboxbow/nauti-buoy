// ─── Tropical Ambient Audio — Web Audio API ───────────────────────────────────
// Ocean waves + steel-pan melody, no external file needed.

import { useCallback, useRef } from 'react';

const BPM   = 76;
const BEAT  = 60 / BPM; // seconds per beat

// C major pentatonic (C4 – C6)
const N = {
  C4: 261.63, D4: 293.66, E4: 329.63, G4: 392.00, A4: 440.00,
  C5: 523.25, D5: 587.33, E5: 659.25, G5: 783.99, A5: 880.00,
  C6: 1046.50,
};

// [freq, beats, velocity 0-1]  —  0 = rest
const MELODY: [number, number, number][] = [
  // ── Bar 1 ──
  [N.E4, 0.5, 0.75], [N.G4, 0.5, 0.70], [N.A4, 0.5, 0.80], [N.C5, 0.5, 0.85],
  // ── Bar 2 ──
  [N.C5, 0.75, 0.90], [0,    0.25, 0],   [N.A4, 0.5, 0.75], [N.G4, 0.5, 0.70],
  // ── Bar 3 ──
  [N.E4, 0.5, 0.80], [N.G4, 0.5, 0.75], [N.A4, 0.5, 0.80], [N.G4, 0.5, 0.70],
  // ── Bar 4 ──
  [N.E4, 0.5, 0.75], [N.C4, 1.00, 0.85], [0,   0.50, 0],
  // ── Bar 5 ──
  [N.G4, 0.5, 0.75], [N.A4, 0.5, 0.80], [N.C5, 0.5, 0.85], [N.E5, 0.5, 0.80],
  // ── Bar 6 ──
  [N.E5, 0.75, 0.90], [0,    0.25, 0],   [N.C5, 0.5, 0.75], [N.A4, 0.5, 0.70],
  // ── Bar 7 ──
  [N.G4, 0.5, 0.80], [N.A4, 0.5, 0.75], [N.C5, 0.5, 0.80], [N.A4, 0.5, 0.70],
  // ── Bar 8 ──
  [N.G4, 0.5, 0.75], [N.E4, 0.5, 0.70], [N.C4, 1.00, 0.80], [0,   0.00, 0],
];

// Bass pattern: root C2, one per bar on beat 1 + 3
const BASS: [number, number, number][] = [
  [N.C4 / 4, 1.5, 0.40], [0, 0.5, 0],
  [N.C4 / 4, 1.5, 0.35], [0, 0.5, 0],
  [N.G4 / 4, 1.5, 0.38], [0, 0.5, 0],
  [N.G4 / 4, 1.5, 0.35], [0, 0.5, 0],
];

export function useAmbientAudio() {
  const ctxRef        = useRef<AudioContext | null>(null);
  const masterRef     = useRef<GainNode | null>(null);
  const schedulerRef  = useRef<number | null>(null);
  const melodyIdxRef  = useRef(0);
  const bassIdxRef    = useRef(0);
  const nextTimeRef   = useRef(0);
  const nextBassRef   = useRef(0);
  const playingRef    = useRef(false);

  // ── Helpers ──────────────────────────────────────────────────────────────────

  function ensureCtx() {
    if (!ctxRef.current) {
      const ctx = new AudioContext();
      const master = ctx.createGain();
      master.gain.value = 0;
      master.connect(ctx.destination);
      ctxRef.current = ctx;
      masterRef.current = master;
    }
    return ctxRef.current;
  }

  function playSteel(ctx: AudioContext, freq: number, time: number, vel: number) {
    if (freq === 0 || vel === 0) return;
    // Two detuned oscillators for richness
    const gain = ctx.createGain();
    gain.connect(masterRef.current!);
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vel * 0.22, time + 0.012);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 0.65);

    [1, 1.004].forEach((detune) => {
      const osc = ctx.createOscillator();
      osc.type = 'triangle';
      osc.frequency.value = freq * detune;
      osc.connect(gain);
      osc.start(time);
      osc.stop(time + 0.7);
    });
  }

  function playBass(ctx: AudioContext, freq: number, time: number, vel: number) {
    if (freq === 0 || vel === 0) return;
    const gain = ctx.createGain();
    gain.connect(masterRef.current!);
    gain.gain.setValueAtTime(0, time);
    gain.gain.linearRampToValueAtTime(vel * 0.3, time + 0.02);
    gain.gain.exponentialRampToValueAtTime(0.001, time + 1.2);

    const osc = ctx.createOscillator();
    osc.type = 'sine';
    osc.frequency.value = freq;
    osc.connect(gain);
    osc.start(time);
    osc.stop(time + 1.3);
  }

  function addOceanWaves(ctx: AudioContext) {
    // White noise source
    const bufLen = ctx.sampleRate * 3;
    const buf    = ctx.createBuffer(2, bufLen, ctx.sampleRate);
    for (let ch = 0; ch < 2; ch++) {
      const data = buf.getChannelData(ch);
      for (let i = 0; i < bufLen; i++) data[i] = Math.random() * 2 - 1;
    }
    const noise = ctx.createBufferSource();
    noise.buffer = buf;
    noise.loop   = true;

    // Low-pass for ocean colour
    const lpf = ctx.createBiquadFilter();
    lpf.type            = 'lowpass';
    lpf.frequency.value = 280;
    lpf.Q.value         = 0.8;

    // LFO → modulate filter frequency (creates wave rhythm)
    const lfo     = ctx.createOscillator();
    const lfoGain = ctx.createGain();
    lfo.frequency.value = 0.10;   // ~10-second wave cycle
    lfoGain.gain.value  = 120;
    lfo.connect(lfoGain);
    lfoGain.connect(lpf.frequency);
    lfo.start();

    const waveGain = ctx.createGain();
    waveGain.gain.value = 0.055;

    noise.connect(lpf);
    lpf.connect(waveGain);
    waveGain.connect(masterRef.current!);
    noise.start();
  }

  // ── Scheduler (look-ahead pattern)  ──────────────────────────────────────────

  function schedule(ctx: AudioContext) {
    const LOOK = 0.12; // look-ahead window in seconds

    // Melody
    while (nextTimeRef.current < ctx.currentTime + LOOK) {
      const [freq, dur, vel] = MELODY[melodyIdxRef.current % MELODY.length];
      playSteel(ctx, freq, nextTimeRef.current, vel);
      nextTimeRef.current += dur * BEAT;
      melodyIdxRef.current++;
    }

    // Bass
    while (nextBassRef.current < ctx.currentTime + LOOK) {
      const [freq, dur, vel] = BASS[bassIdxRef.current % BASS.length];
      playBass(ctx, freq, nextBassRef.current, vel);
      nextBassRef.current += dur * BEAT;
      bassIdxRef.current++;
    }

    schedulerRef.current = window.setTimeout(() => schedule(ctx), 30);
  }

  // ── Public API ────────────────────────────────────────────────────────────────

  const start = useCallback(() => {
    const ctx = ensureCtx();
    if (ctx.state === 'suspended') ctx.resume();

    if (!playingRef.current) {
      playingRef.current       = true;
      const t0                 = ctx.currentTime + 0.05;
      nextTimeRef.current      = t0;
      nextBassRef.current      = t0;
      melodyIdxRef.current     = 0;
      bassIdxRef.current       = 0;
      addOceanWaves(ctx);
      schedule(ctx);
    }

    // Fade in
    masterRef.current!.gain.cancelScheduledValues(ctx.currentTime);
    masterRef.current!.gain.setValueAtTime(masterRef.current!.gain.value, ctx.currentTime);
    masterRef.current!.gain.linearRampToValueAtTime(1, ctx.currentTime + 2.0);
  }, []);

  const stop = useCallback(() => {
    const ctx = ctxRef.current;
    if (!ctx || !masterRef.current) return;
    masterRef.current.gain.cancelScheduledValues(ctx.currentTime);
    masterRef.current.gain.setValueAtTime(masterRef.current.gain.value, ctx.currentTime);
    masterRef.current.gain.linearRampToValueAtTime(0, ctx.currentTime + 1.5);
  }, []);

  const destroy = useCallback(() => {
    if (schedulerRef.current) clearTimeout(schedulerRef.current);
    ctxRef.current?.close();
    ctxRef.current    = null;
    masterRef.current = null;
    playingRef.current = false;
  }, []);

  return { start, stop, destroy };
}
