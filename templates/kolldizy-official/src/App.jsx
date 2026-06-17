import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
heading: ['Geist', 'Inter', 'sans-serif'],
}
}
}
}



    (function () {
      // icon stroke width
      const icons = document.querySelectorAll('.iconify');
      icons.forEach(i => i.setAttribute('data-stroke-width', '1.5'));
      document.getElementById('year').textContent = new Date().getFullYear();
    })();

    (function () {
      // ultra-smooth scrolling
      document.documentElement.style.scrollBehavior = 'smooth';
    })();

    (function () {
      // reveal (fade + scale), linear easing, once, normal direction
      const els = document.querySelectorAll('.reveal');
      els.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'scale(0.985)';
        el.style.willChange = 'transform, opacity';
      });

      const io = new IntersectionObserver((entries, obs) => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          const el = entry.target;
          el.style.transition = 'transform 900ms linear, opacity 900ms linear';
          requestAnimationFrame(() => {
            el.style.opacity = '1';
            el.style.transform = 'scale(1)';
          });
          obs.unobserve(el);
        });
      }, { threshold: 0.12 });

      els.forEach(el => io.observe(el));
    })();

    (function () {
      // gentle parallax drift + fog motion + streak drift (linear)
      const glow = document.getElementById('glow');
      const neonA = document.getElementById('neonA');
      const neonB = document.getElementById('neonB');
      const grain = document.getElementById('grain');
      const s1 = document.getElementById('streak1');
      const s2 = document.getElementById('streak2');
      const s3 = document.getElementById('streak3');

      let t0 = performance.now();

      function tick(t) {
        const y = window.scrollY || 0;
        const dt = (t - t0) / 1000;
        t0 = t;

        const p = t / 1000;

        if (glow) glow.style.transform = `translate3d(${(y * 0.012)}rem, ${(y * 0.02)}rem, 0) scale(${1 + Math.sin(p * 0.22) * 0.01})`;
        if (neonA) neonA.style.transform = `translate3d(0, ${(y * -0.015)}rem, 0) scale(${1 + Math.sin(p * 0.18) * 0.01})`;
        if (neonB) neonB.style.transform = `translate3d(${(y * -0.01)}rem, ${(y * 0.012)}rem, 0) scale(${1 + Math.sin(p * 0.16) * 0.01})`;

        if (grain) grain.style.transform = `translate3d(${Math.sin(p * 0.6) * 0.4}rem, ${Math.cos(p * 0.55) * 0.4}rem, 0)`;

        if (s1) s1.style.transform = `translate3d(${Math.sin(p * 0.35) * 1.2}rem, 0, 0)`;
        if (s2) s2.style.transform = `translate3d(${Math.cos(p * 0.3) * 1.4}rem, 0, 0)`;
        if (s3) s3.style.transform = `translate3d(${Math.sin(p * 0.28) * 1.1}rem, 0, 0)`;

        // subtle opacity pulse
        if (neonA) neonA.style.opacity = String(0.22 + (Math.sin(p * 0.35) * 0.03));
        if (neonB) neonB.style.opacity = String(0.18 + (Math.cos(p * 0.33) * 0.03));

        requestAnimationFrame(tick);
      }

      requestAnimationFrame(tick);
    })();

    (function () {
      // featured audio + waveform reacting
      const audio = document.getElementById('featuredAudio');
      const btn = document.getElementById('playBtn');
      const iconWrap = document.getElementById('playIcon');
      const bars = Array.from(document.querySelectorAll('.bar'));
      const pulseFill = document.getElementById('pulseFill');

      let raf = null;
      let ctx = null;
      let analyser = null;
      let data = null;

      function setIcon(playing) {
        iconWrap.innerHTML = playing
          ? '<span class="iconify" data-icon="lucide:pause" data-width="18" data-height="18" data-stroke-width="1.5"></span>'
          : '<span class="iconify" data-icon="lucide:play" data-width="18" data-height="18" data-stroke-width="1.5"></span>';
      }

      function startViz() {
        if (!audio) return;

        try {
          if (!ctx) {
            const AC = window.AudioContext || window.webkitAudioContext;
            ctx = new AC();
            analyser = ctx.createAnalyser();
            analyser.fftSize = 256;
            data = new Uint8Array(analyser.frequencyBinCount);

            const src = ctx.createMediaElementSource(audio);
            src.connect(analyser);
            analyser.connect(ctx.destination);
          }

          const tick = () => {
            analyser.getByteFrequencyData(data);

            let sum = 0;
            for (let i = 0; i < data.length; i++) sum += data[i];
            const avg = sum / data.length;
            const norm = Math.max(0, Math.min(1, avg / 110));

            bars.forEach((b, idx) => {
              const wobble = (Math.sin((Date.now() / 200) + idx) + 1) / 2;
              const h = audio.paused ? 0.25 : (0.28 + norm * 0.65 * (0.55 + wobble * 0.65));
              b.style.height = `${Math.round(10 + h * 26)}px`;
              b.style.opacity = audio.paused ? '0.35' : '0.75';
              b.style.transition = 'height 140ms linear, opacity 260ms linear';
            });

            if (pulseFill) {
              const w = 25 + norm * 65;
              pulseFill.style.width = `${w}%`;
              pulseFill.style.transition = 'width 220ms linear';
            }

            raf = requestAnimationFrame(tick);
          };

          if (ctx.state === 'suspended') ctx.resume();
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        } catch (e) {
          const tick = () => {
            bars.forEach((b, i) => {
              const wobble = (Math.sin((Date.now() / 240) + i) + 1) / 2;
              const h = audio.paused ? 0.25 : (0.35 + wobble * 0.55);
              b.style.height = `${Math.round(10 + h * 26)}px`;
              b.style.opacity = audio.paused ? '0.35' : '0.75';
              b.style.transition = 'height 160ms linear, opacity 260ms linear';
            });
            raf = requestAnimationFrame(tick);
          };
          cancelAnimationFrame(raf);
          raf = requestAnimationFrame(tick);
        }
      }

      function toggle() {
        if (!audio) return;
        if (audio.paused) {
          audio.play().then(() => {
            setIcon(true);
            startViz();
          }).catch(() => {});
        } else {
          audio.pause();
          setIcon(false);
        }
      }

      if (btn) btn.addEventListener('click', toggle, { passive: true });

      if (audio) {
        audio.addEventListener('play', () => setIcon(true));
        audio.addEventListener('pause', () => setIcon(false));
        audio.addEventListener('ended', () => setIcon(false));
      }

      setIcon(false);
      startViz();
    })();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none z-0">

<div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/35 to-black/70"></div>

<div className="absolute -top-40 -left-20 h-[44rem] w-[44rem] rounded-full blur-3xl opacity-35" id="glow" style={{background: 'radial-gradient(circle at 30% 30%, rgba(255,255,255,0.12), rgba(255,255,255,0.00) 62%)'}}></div>
<div className="absolute top-1/4 -right-24 h-[32rem] w-[32rem] rounded-full blur-3xl opacity-25" id="neonA" style={{background: 'radial-gradient(circle at 40% 40%, rgba(99,102,241,0.20), rgba(99,102,241,0.00) 64%)'}}></div>
<div className="absolute bottom-1/4 left-1/3 h-[30rem] w-[30rem] rounded-full blur-3xl opacity-20" id="neonB" style={{background: 'radial-gradient(circle at 60% 50%, rgba(244,63,94,0.14), rgba(244,63,94,0.00) 66%)'}}></div>

<div aria-hidden="true" className="absolute inset-0 opacity-35">
<div className="absolute left-8 top-28 h-px w-56 bg-white/10" id="streak1"></div>
<div className="absolute right-10 top-48 h-px w-72 bg-white/10" id="streak2"></div>
<div className="absolute left-20 bottom-36 h-px w-64 bg-white/10" id="streak3"></div>
</div>

<div className="absolute inset-0 opacity-[0.07]" id="grain" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.85%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23n)%22/%3E%3C/svg%3E\')'}}></div>
</div>

<nav className="fixed top-0 w-full z-40 bg-zinc-900/65 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="font-heading font-semibold text-base tracking-tight text-white uppercase hover:text-zinc-200 transition-colors" href="#home">
        KOLLDIZY
      </a>
<div className="hidden md:flex items-center gap-6">
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#music">Music</a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#merch">Merch</a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#about">About</a>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
</div>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#platforms">
        Platforms
      </a>
</div>
</nav>
<main className="relative z-10">

<section className="min-h-screen w-full flex items-center justify-center px-6 pt-24 pb-14" id="home">
<div className="max-w-6xl w-full grid grid-cols-1 lg:grid-cols-2 gap-10 items-center">
<div className="reveal">
<p className="text-xs text-zinc-400 font-medium tracking-[0.25em] uppercase mb-5">
            A night journey through sound and emotion
          </p>
<h1 className="font-heading text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-white leading-none select-none">
            Kolldizy
          </h1>
<p className="mt-5 max-w-xl text-sm md:text-base text-zinc-300/90 leading-relaxed">
            Dark, introspective trap-soul and cinematic R&amp;B—late-night thoughts, quiet chaos, and a glow that lingers.
          </p>
<div className="mt-8 flex flex-col sm:flex-row gap-3">
<button className="group relative inline-flex items-center justify-center gap-3 rounded-full bg-white text-zinc-900 px-6 py-3 shadow-sm hover:bg-zinc-100 transition-all" id="playBtn">
<span className="inline-flex items-center justify-center" id="playIcon">
<span className="iconify" data-height="18" data-icon="lucide:play" data-inline="false" data-width="18"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-widest">Play Featured</span>
<span className="absolute inset-0 rounded-full ring-1 ring-white/15 group-hover:ring-white/30 transition-all"></span>
</button>
<a className="inline-flex items-center justify-center gap-3 rounded-full bg-zinc-900/50 px-6 py-3 text-zinc-200 shadow-sm hover:bg-zinc-900/70 transition-colors" href="#music">
<span className="text-xs font-medium uppercase tracking-widest">Explore Music</span>
<span className="iconify text-zinc-300" data-height="18" data-icon="lucide:arrow-right" data-width="18"></span>
</a>
</div>

<div className="mt-8 rounded-2xl bg-zinc-900/50 shadow-sm p-4 max-w-xl">
<div className="flex items-start justify-between gap-4">
<div className="min-w-0">
<p className="text-xs uppercase tracking-widest text-zinc-400">Now Playing</p>
<p className="mt-1 font-heading text-xl md:text-2xl font-medium tracking-tight text-white truncate" id="nowTitle">
                  Featured Track
                </p>
<p className="mt-1 text-xs text-zinc-400 truncate" id="nowSub">Kolldizy • Midnight Cut</p>
</div>
<div aria-hidden="true" className="flex items-end gap-1 h-10 select-none">
<div className="bar w-1 rounded-full bg-white/55 h-4"></div>
<div className="bar w-1 rounded-full bg-white/55 h-7"></div>
<div className="bar w-1 rounded-full bg-white/55 h-3"></div>
<div className="bar w-1 rounded-full bg-white/55 h-9"></div>
<div className="bar w-1 rounded-full bg-white/55 h-5"></div>
<div className="bar w-1 rounded-full bg-white/55 h-8"></div>
<div className="bar w-1 rounded-full bg-white/55 h-4"></div>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-white/5 overflow-hidden">
<div className="h-full w-1/3 bg-white/20" id="pulseFill"></div>
</div>
</div>
<audio crossorigin="anonymous" id="featuredAudio" preload="auto">
<source src="https://cdn.pixabay.com/download/audio/2022/03/15/audio_2c4a0d2f1b.mp3?filename=dark-ambient-logo-11275.mp3" type="audio/mpeg"/>
</audio>
</div>

<div className="reveal">
<div className="relative rounded-3xl bg-zinc-900/40 shadow-sm overflow-hidden">
<div className="absolute inset-0 opacity-70" style={{background: 'radial-gradient(circle at 30% 20%, rgba(255,255,255,0.10), rgba(255,255,255,0.00) 58%)'}}></div>
<div className="absolute inset-0 opacity-50" style={{background: 'radial-gradient(circle at 70% 60%, rgba(99,102,241,0.18), rgba(99,102,241,0.00) 62%)'}}></div>
<div className="absolute inset-0 opacity-35" style={{background: 'radial-gradient(circle at 45% 70%, rgba(244,63,94,0.10), rgba(244,63,94,0.00) 66%)'}}></div>
<div className="p-7">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="font-heading font-semibold tracking-tight text-white text-sm">K</span>
</div>
<div>
<p className="text-xs uppercase tracking-widest text-zinc-400">Visual Identity</p>
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Midnight Aesthetic</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2 text-xs text-zinc-400">
<span className="inline-flex items-center gap-2">
<span className="h-1.5 w-1.5 rounded-full bg-white/60"></span>
                    Live
                  </span>
</div>
</div>
<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="rounded-2xl bg-zinc-900/45 shadow-sm p-4">
<p className="text-xs uppercase tracking-widest text-zinc-400">Mood</p>
<p className="mt-1 text-sm text-zinc-200">Nocturnal • Emotional • Cinematic</p>
</div>
<div className="rounded-2xl bg-zinc-900/45 shadow-sm p-4">
<p className="text-xs uppercase tracking-widest text-zinc-400">Accent</p>
<p className="mt-1 text-sm text-zinc-200">White • Electric blue • Violet • Muted red</p>
</div>
</div>
<div className="mt-6 rounded-2xl bg-black/20 shadow-sm p-4">
<div className="flex items-center justify-between gap-4">
<p className="text-xs uppercase tracking-widest text-zinc-400">Ambient Pulse</p>
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-white/40"></span>
<span className="h-2 w-2 rounded-full bg-white/20"></span>
<span className="h-2 w-2 rounded-full bg-white/10"></span>
</div>
</div>
<p className="mt-3 text-xs text-zinc-400 leading-relaxed">
                  Subtle glow, soft motion, and quiet depth—built for late nights.
                </p>
</div>
</div>
</div>
<div className="mt-4 flex items-center gap-4 text-xs text-zinc-500">
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:scroll-text" data-width="16"></span>
              Ultra-smooth scroll
            </span>
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:sparkles" data-width="16"></span>
              Soft glow
            </span>
<span className="inline-flex items-center gap-2">
<span className="iconify" data-height="16" data-icon="lucide:activity" data-width="16"></span>
              Waveform
            </span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full px-6 py-20 bg-zinc-900" id="features">
<div className="max-w-5xl mx-auto">
<div className="reveal">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-white">Features</h2>
<p className="mt-3 text-sm text-zinc-400 max-w-2xl">
            Minimal, cinematic, and built to convert listeners into fans—without clutter.
          </p>
</div>
<div className="mt-10 flex flex-col gap-3">
<div className="reveal rounded-2xl bg-zinc-900/45 shadow-sm p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="iconify text-white" data-height="18" data-icon="lucide:play" data-width="18"></span>
</div>
<div className="min-w-0">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Instant Play Hero</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  One tap starts the featured track instantly. Audio can continue while you explore.
                </p>
</div>
</div>
</div>
<div className="reveal rounded-2xl bg-zinc-900/45 shadow-sm p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="iconify text-white" data-height="18" data-icon="lucide:music" data-width="18"></span>
</div>
<div className="min-w-0">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Clean Listening Grid</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Spotify for streaming, YouTube for visuals—kept calm, spacious, and easy to scan.
                </p>
</div>
</div>
</div>
<div className="reveal rounded-2xl bg-zinc-900/45 shadow-sm p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="iconify text-white" data-height="18" data-icon="lucide:shopping-bag" data-width="18"></span>
</div>
<div className="min-w-0">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Merch Storefront</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Dark product cards with subtle neon glow on hover and clear “Buy Now” actions.
                </p>
</div>
</div>
</div>
<div className="reveal rounded-2xl bg-zinc-900/45 shadow-sm p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="iconify text-white" data-height="18" data-icon="lucide:sparkles" data-width="18"></span>
</div>
<div className="min-w-0">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Cinematic Motion</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  Linear easing, subtle fades, gentle parallax, and soft light pulses—calm and premium.
                </p>
</div>
</div>
</div>
<div className="reveal rounded-2xl bg-zinc-900/45 shadow-sm p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="iconify text-white" data-height="18" data-icon="lucide:share-2" data-width="18"></span>
</div>
<div className="min-w-0">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Platform Links</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                  A clean icon row with hover glow to push fans toward follow + stream.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full px-6 py-20 bg-zinc-900" id="music">
<div className="max-w-6xl mx-auto">
<div className="reveal">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-white">Music</h2>
<p className="mt-3 text-sm text-zinc-400 max-w-2xl">
            Stream the latest. Watch the visuals. Keep the night moving.
          </p>
</div>
<div className="mt-10 grid grid-cols-1 lg:grid-cols-2 gap-6">
<div className="reveal rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="p-5 flex items-center justify-between">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Spotify</p>
<span className="text-xs uppercase tracking-widest text-zinc-400">Latest releases</span>
</div>
<div className="p-5 pt-0">
<iframe allow="autoplay; clipboard-write; encrypted-media; fullscreen; picture-in-picture" className="w-full rounded-2xl bg-black/20 shadow-sm" loading="lazy" src="https://open.spotify.com/embed/artist/1Xyo4u8uXC1ZmMpatF05PJ?utm_source=generator&amp;theme=0" style={{height: '22rem'}} title="Spotify player">
</iframe>
<p className="mt-3 text-xs text-zinc-500">
                Swap this embed for Kolldizy’s official Spotify artist/album link.
              </p>
</div>
</div>
<div className="reveal rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="p-5 flex items-center justify-between">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">YouTube</p>
<span className="text-xs uppercase tracking-widest text-zinc-400">Visuals</span>
</div>
<div className="p-5 pt-0 grid grid-cols-1 gap-4">
<div className="group rounded-2xl bg-black/20 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/ScMzIvxBSi4" title="YouTube video"></iframe>
</div>
<div className="p-4 flex items-center justify-between">
<p className="text-sm text-zinc-200">Official Visual</p>
<span className="text-xs text-zinc-400 group-hover:text-white transition-colors" style={{transitionTimingFunction: 'linear'}}>Watch</span>
</div>
</div>
<div className="group rounded-2xl bg-black/20 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-video">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="w-full h-full" frameborder="0" loading="lazy" src="https://www.youtube.com/embed/jfKfPfyJRdk" title="YouTube video"></iframe>
</div>
<div className="p-4 flex items-center justify-between">
<p className="text-sm text-zinc-200">Late Night Session</p>
<span className="text-xs text-zinc-400 group-hover:text-white transition-colors" style={{transitionTimingFunction: 'linear'}}>Watch</span>
</div>
</div>
<p className="text-xs text-zinc-500">
                Replace these with Kolldizy’s music videos/visualizers.
              </p>
</div>
</div>
</div>
<div className="mt-6 reveal rounded-2xl bg-zinc-900/40 shadow-sm p-5">
<div className="flex items-start gap-3">
<span className="iconify text-white/80 mt-0.5" data-height="18" data-icon="lucide:info" data-width="18"></span>
<div>
<p className="text-xs uppercase tracking-widest text-zinc-400">Playback note</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
                Use “Play Featured” for uninterrupted site playback. Embedded players may take audio focus when interacted with.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full px-6 py-20 bg-zinc-900" id="merch">
<div className="max-w-6xl mx-auto">
<div className="reveal flex items-end justify-between gap-6 flex-wrap">
<div>
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-white">Merch</h2>
<p className="mt-3 text-sm text-zinc-400 max-w-2xl">Essentials for the dark hours. Minimal. Premium.</p>
</div>
<a className="text-xs font-medium uppercase tracking-widest text-zinc-400 hover:text-white transition-colors" href="#platforms" style={{transitionTimingFunction: 'linear'}}>
            Link checkout
          </a>
</div>
<div className="mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
<div className="reveal group rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-[4/5] bg-black/20 relative">
<div className="absolute inset-0 opacity-60" style={{background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08), rgba(255,255,255,0.00) 62%)'}}></div>
<div className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity" style={{transitionTimingFunction: 'linear', background: 'radial-gradient(circle at 70% 70%, rgba(99,102,241,0.18), rgba(99,102,241,0.00) 64%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-heading text-5xl font-semibold tracking-tight text-white/10">HOODIE</p>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm text-white font-medium truncate">Void Hoodie</p>
<p className="mt-1 text-xs text-zinc-400">Heavyweight • Night fit</p>
</div>
<p className="text-sm text-zinc-200 font-medium">$85</p>
</div>
<button className="mt-4 w-full rounded-2xl bg-white text-zinc-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm hover:bg-zinc-100 transition-colors" style={{transitionTimingFunction: 'linear'}}>
                Buy Now
              </button>
</div>
</div>
<div className="reveal group rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-[4/5] bg-black/20 relative">
<div className="absolute inset-0 opacity-60" style={{background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08), rgba(255,255,255,0.00) 62%)'}}></div>
<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{transitionTimingFunction: 'linear', background: 'radial-gradient(circle at 55% 70%, rgba(244,63,94,0.14), rgba(244,63,94,0.00) 66%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-heading text-5xl font-semibold tracking-tight text-white/10">TEE</p>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm text-white font-medium truncate">Midnight Tee</p>
<p className="mt-1 text-xs text-zinc-400">Soft cotton • Minimal mark</p>
</div>
<p className="text-sm text-zinc-200 font-medium">$35</p>
</div>
<button className="mt-4 w-full rounded-2xl bg-white text-zinc-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm hover:bg-zinc-100 transition-colors" style={{transitionTimingFunction: 'linear'}}>
                Buy Now
              </button>
</div>
</div>
<div className="reveal group rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-[4/5] bg-black/20 relative">
<div className="absolute inset-0 opacity-60" style={{background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08), rgba(255,255,255,0.00) 62%)'}}></div>
<div className="absolute inset-0 opacity-25 group-hover:opacity-45 transition-opacity" style={{transitionTimingFunction: 'linear', background: 'radial-gradient(circle at 35% 70%, rgba(99,102,241,0.18), rgba(99,102,241,0.00) 66%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-heading text-5xl font-semibold tracking-tight text-white/10">CAP</p>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm text-white font-medium truncate">Signal Cap</p>
<p className="mt-1 text-xs text-zinc-400">Embroidered • Low profile</p>
</div>
<p className="text-sm text-zinc-200 font-medium">$28</p>
</div>
<button className="mt-4 w-full rounded-2xl bg-white text-zinc-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm hover:bg-zinc-100 transition-colors" style={{transitionTimingFunction: 'linear'}}>
                Buy Now
              </button>
</div>
</div>
<div className="reveal group rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden hover:scale-[1.01] transition-transform" style={{transitionTimingFunction: 'linear'}}>
<div className="aspect-[4/5] bg-black/20 relative">
<div className="absolute inset-0 opacity-60" style={{background: 'radial-gradient(circle at 40% 35%, rgba(255,255,255,0.08), rgba(255,255,255,0.00) 62%)'}}></div>
<div className="absolute inset-0 opacity-20 group-hover:opacity-40 transition-opacity" style={{transitionTimingFunction: 'linear', background: 'radial-gradient(circle at 60% 50%, rgba(167,139,250,0.18), rgba(167,139,250,0.00) 66%)'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<p className="font-heading text-5xl font-semibold tracking-tight text-white/10">DIGITAL</p>
</div>
</div>
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div className="min-w-0">
<p className="text-sm text-white font-medium truncate">Digital Pack</p>
<p className="mt-1 text-xs text-zinc-400">Stems • Wallpapers • Extras</p>
</div>
<p className="text-sm text-zinc-200 font-medium">$12</p>
</div>
<button className="mt-4 w-full rounded-2xl bg-white text-zinc-900 py-3 text-xs font-semibold uppercase tracking-widest shadow-sm hover:bg-zinc-100 transition-colors" style={{transitionTimingFunction: 'linear'}}>
                Buy Now
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full px-6 py-20 bg-zinc-900" id="about">
<div className="max-w-5xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
<div className="reveal">
<h2 className="font-heading text-3xl md:text-4xl font-semibold tracking-tight text-white">About</h2>
<p className="mt-3 text-sm text-zinc-400 max-w-xl">
            A quiet voice in a loud city.
          </p>
<div className="mt-8 rounded-3xl bg-zinc-900/45 shadow-sm p-6">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Noise that feels like memory.</p>
<p className="mt-4 text-sm text-zinc-300/90 leading-relaxed">
              Kolldizy writes from the edge of the night—where the streetlights flicker and the mind stops pretending.
              The songs are cinematic and close, built from shadow, distortion, and honesty that arrives after midnight.
            </p>
<p className="mt-4 text-sm text-zinc-300/90 leading-relaxed">
              It’s dark R&amp;B and trap-soul tension with soft neon in the distance—music for long drives, empty rooms,
              and the moments you can’t name.
            </p>
<div className="mt-6 flex items-center gap-4">
<div className="h-px w-12 bg-white/20"></div>
<p className="text-xs uppercase tracking-widest text-zinc-400">Nocturnal. Emotional. Real.</p>
</div>
</div>
</div>
<div className="reveal">
<div className="rounded-3xl bg-zinc-900/45 shadow-sm overflow-hidden">
<div className="p-5 flex items-center justify-between">
<p className="font-heading text-xl md:text-2xl font-medium tracking-tight text-white">Platforms</p>
<p className="text-xs uppercase tracking-widest text-zinc-400">Follow + stream</p>
</div>
<div className="p-5 pt-0" id="platforms">
<div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:music-2" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">Spotify</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>Stream releases</p>
</a>
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:youtube" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">YouTube</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>Watch visuals</p>
</a>
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:instagram" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">Instagram</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>Behind the night</p>
</a>
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:video" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">TikTok</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>Clips + edits</p>
</a>
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:apple" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">Apple Music</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>Add to library</p>
</a>
<a className="group rounded-2xl bg-black/20 shadow-sm p-4 hover:scale-[1.01] transition-transform" href="mailto:booking@kolldizy.com" style={{transitionTimingFunction: 'linear'}}>
<div className="flex items-center gap-3">
<span className="iconify text-white/90" data-height="18" data-icon="lucide:mail" data-width="18"></span>
<span className="text-xs font-medium uppercase tracking-widest text-zinc-200">Booking</span>
</div>
<p className="mt-3 text-xs text-zinc-400 group-hover:text-zinc-200 transition-colors" style={{transitionTimingFunction: 'linear'}}>booking@kolldizy.com</p>
</a>
</div>
<div className="mt-6 flex items-center justify-between gap-4 flex-wrap">
<p className="text-xs uppercase tracking-widest text-zinc-400">Quick icons</p>
<div className="flex items-center gap-3">
<a className="group h-10 w-10 rounded-full bg-black/20 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<span className="iconify text-white/85 group-hover:text-white transition-colors" data-height="18" data-icon="lucide:music-2" data-width="18" style={{transitionTimingFunction: 'linear'}}></span>
</a>
<a className="group h-10 w-10 rounded-full bg-black/20 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<span className="iconify text-white/85 group-hover:text-white transition-colors" data-height="18" data-icon="lucide:youtube" data-width="18" style={{transitionTimingFunction: 'linear'}}></span>
</a>
<a className="group h-10 w-10 rounded-full bg-black/20 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<span className="iconify text-white/85 group-hover:text-white transition-colors" data-height="18" data-icon="lucide:instagram" data-width="18" style={{transitionTimingFunction: 'linear'}}></span>
</a>
<a className="group h-10 w-10 rounded-full bg-black/20 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<span className="iconify text-white/85 group-hover:text-white transition-colors" data-height="18" data-icon="lucide:video" data-width="18" style={{transitionTimingFunction: 'linear'}}></span>
</a>
<a className="group h-10 w-10 rounded-full bg-black/20 shadow-sm flex items-center justify-center hover:scale-[1.02] transition-transform" href="#" style={{transitionTimingFunction: 'linear'}}>
<span className="iconify text-white/85 group-hover:text-white transition-colors" data-height="18" data-icon="lucide:apple" data-width="18" style={{transitionTimingFunction: 'linear'}}></span>
</a>
</div>
</div>
<p className="mt-6 text-xs text-zinc-500">
                Replace “#” with Kolldizy’s official links.
              </p>
</div>
</div>
<div className="mt-4 rounded-3xl bg-zinc-900/40 shadow-sm p-5">
<p className="font-heading text-xl font-medium tracking-tight text-white">Uninterrupted mood</p>
<p className="mt-2 text-sm text-zinc-400 leading-relaxed">
              Keep the featured track running while scrolling—built to feel like one continuous night scene.
            </p>
</div>
</div>
</div>
</section>

<footer className="px-6 py-10 bg-zinc-900">
<div className="max-w-7xl mx-auto flex flex-col sm:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-black/25 flex items-center justify-center shadow-sm">
<span className="font-heading font-semibold tracking-tight text-white text-sm">K</span>
</div>
<div>
<p className="font-heading text-xl font-medium tracking-tight text-white">Kolldizy</p>
<a className="text-xs text-zinc-400 hover:text-white transition-colors" href="mailto:booking@kolldizy.com" style={{transitionTimingFunction: 'linear'}}>booking@kolldizy.com</a>
</div>
</div>
<p className="text-xs text-zinc-500">© <span id="year"></span> Kolldizy. All rights reserved.</p>
</div>
</footer>
</main>


    </>
  );
}
