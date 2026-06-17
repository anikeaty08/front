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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Base sizing hint: keep text comfortable
    document.documentElement.style.fontSize = "16px";

    // Progress bar
    const progressBar = document.getElementById('progressBar');
    const updateProgress = () => {
      const scrollTop = window.scrollY || document.documentElement.scrollTop;
      const docHeight = document.documentElement.scrollHeight - window.innerHeight;
      const p = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
      progressBar.style.width = Math.min(100, Math.max(0, p)) + '%';
    };
    window.addEventListener('scroll', updateProgress, { passive: true });
    updateProgress();

    // Message reveal on scroll (fade-in + subtle bounce)
    const messages = Array.from(document.querySelectorAll('.msg'));
    const io = new IntersectionObserver((entries) => {
      entries.forEach((e) => {
        if (!e.isIntersecting) return;
        const el = e.target;
        el.classList.remove('opacity-0', 'translate-y-3');
        el.classList.add('opacity-100');
        el.style.transition = 'opacity 520ms cubic-bezier(.2,.8,.2,1), transform 520ms cubic-bezier(.2,.8,.2,1)';
        el.style.transform = 'translateY(0)';
        // bounce micro-effect
        el.animate(
          [{ transform: 'translateY(0.35rem)' }, { transform: 'translateY(0)' }],
          { duration: 420, easing: 'cubic-bezier(.2,1.25,.2,1)', fill: 'both' }
        );
        io.unobserve(el);
      });
    }, { threshold: 0.18, rootMargin: '0px 0px -10% 0px' });

    messages.forEach(m => io.observe(m));

    // Typing animation dots
    const typingDots = document.querySelectorAll('.typing .dot');
    typingDots.forEach((d, i) => {
      d.animate(
        [
          { transform: 'translateY(0)', opacity: 0.5 },
          { transform: 'translateY(-0.2rem)', opacity: 1 },
          { transform: 'translateY(0)', opacity: 0.5 }
        ],
        { duration: 900, iterations: Infinity, delay: i * 140 }
      );
    });

    // Waveform bars preset heights
    document.querySelectorAll('.wave .bar').forEach((bar) => {
      const h = Number(bar.getAttribute('data-h') || 40);
      bar.style.height = Math.max(10, Math.min(90, h)) + '%';
    });

    // Audio demo: play/pause toggles + animated waveform + progress
    const audioButtons = Array.from(document.querySelectorAll('.audioBtn'));
    const audioState = new Map();

    function setAudioUI(btn, playing) {
      const icon = btn.querySelector('.audioIcon');
      icon.setAttribute('icon', playing ? 'solar:pause-linear' : 'solar:play-linear');
    }

    function startWave(waveEl) {
      const bars = Array.from(waveEl.querySelectorAll('.bar'));
      const anims = bars.map((b, idx) => {
        const base = Number(b.getAttribute('data-h') || 40);
        const a = b.animate(
          [
            { opacity: 0.45, transform: 'scaleY(0.6)' },
            { opacity: 0.8, transform: 'scaleY(1.05)' },
            { opacity: 0.55, transform: 'scaleY(0.75)' }
          ],
          { duration: 680 + (idx % 6) * 35, iterations: Infinity, direction: 'alternate', easing: 'ease-in-out' }
        );
        b.style.height = base + '%';
        return a;
      });
      return anims;
    }

    function stopWave(anims) {
      (anims || []).forEach(a => a.cancel());
    }

    audioButtons.forEach((btn) => {
      const card = btn.closest('.bubble').querySelector('.wave')?.parentElement?.parentElement;
      const wave = btn.closest('.bubble').querySelector('.wave');
      const prog = btn.closest('.bubble').querySelector('.audioProg');

      audioState.set(btn, { playing: false, waveAnims: null, t: 0, timer: null });

      btn.addEventListener('click', () => {
        // stop others
        audioButtons.forEach((other) => {
          if (other === btn) return;
          const st = audioState.get(other);
          if (!st || !st.playing) return;
          st.playing = false;
          setAudioUI(other, false);
          stopWave(st.waveAnims);
          st.waveAnims = null;
          if (st.timer) clearInterval(st.timer);
          st.timer = null;
        });

        const st = audioState.get(btn);
        st.playing = !st.playing;
        setAudioUI(btn, st.playing);

        if (st.playing) {
          st.waveAnims = startWave(wave);
          const duration = 18; // seconds demo
          if (st.timer) clearInterval(st.timer);
          st.timer = setInterval(() => {
            st.t += 0.15;
            const p = Math.min(1, st.t / duration);
            prog.style.width = (p * 100) + '%';
            if (p >= 1) {
              st.playing = false;
              setAudioUI(btn, false);
              stopWave(st.waveAnims);
              st.waveAnims = null;
              clearInterval(st.timer);
              st.timer = null;
              st.t = 0;
              setTimeout(() => prog.style.width = '0%', 400);
            }
          }, 150);
        } else {
          stopWave(st.waveAnims);
          st.waveAnims = null;
          if (st.timer) clearInterval(st.timer);
          st.timer = null;
        }
      });
    });

    // Video demo click
    document.querySelectorAll('[data-video]').forEach((b) => {
      b.addEventListener('click', () => {
        const toast = document.getElementById('toast');
        toast.querySelector('span').textContent = 'Lecture vidéo (démo)';
        toast.classList.remove('opacity-0', 'translate-y-2');
        toast.classList.add('opacity-100');
        toast.style.transform = 'translate(-50%, 0)';
        setTimeout(() => {
          toast.classList.add('opacity-0', 'translate-y-2');
          toast.classList.remove('opacity-100');
          toast.style.transform = 'translate(-50%, 0.5rem)';
          toast.querySelector('span').textContent = 'startwithlove.example/inscription';
        }, 1200);
      });
    });

    // CTA: copy link demo
    const cta = document.getElementById('cta');
    const toast = document.getElementById('toast');
    const ctaHint = document.getElementById('ctaHint');

    function showToast(text) {
      toast.querySelector('span').textContent = text;
      toast.classList.remove('opacity-0', 'translate-y-2');
      toast.classList.add('opacity-100');
      toast.style.transform = 'translate(-50%, 0)';
      setTimeout(() => {
        toast.classList.add('opacity-0', 'translate-y-2');
        toast.classList.remove('opacity-100');
        toast.style.transform = 'translate(-50%, 0.5rem)';
      }, 1400);
    }

    cta.addEventListener('click', async () => {
      const link = 'startwithlove.example/inscription';
      try {
        await navigator.clipboard.writeText('https://' + link);
        showToast(link);
        ctaHint.textContent = 'Lien copié dans le presse-papiers.';
      } catch (e) {
        showToast('Copie non disponible (démo).');
        ctaHint.textContent = 'Copie non disponible, mais le bouton est interactif.';
      }
    });
  
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
      

<div className="fixed top-0 left-0 right-0 z-50 h-1 bg-black/5">
<div className="h-full w-0 bg-emerald-400/90 transition-[width] duration-150" id="progressBar"></div>
</div>

<header className="sticky top-0 z-40 border-b border-black/5 backdrop-blur bg-white/35">
<div className="mx-auto w-full max-w-[42.5rem] px-4 sm:px-6">
<div className="flex items-center justify-between py-3">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 grid place-items-center">
<span className="text-sm font-semibold tracking-tight text-emerald-700">SL</span>
</div>
<div className="leading-tight">
<div className="flex items-center gap-2">
<h1 className="text-base sm:text-lg font-semibold tracking-tight text-slate-900">#StartWithLove</h1>
<span className="text-xs text-slate-500">•</span>
<span className="text-xs sm:text-sm font-medium text-slate-600">5-11 octobre 2026</span>
</div>
<p className="text-xs text-slate-600">Conversation avec <span className="font-medium text-slate-700">Claire &amp; Jean-Luc</span> · <span className="text-slate-500">Durée : ~10 minutes de lecture</span></p>
</div>
</div>
<div className="hidden sm:flex items-center gap-2">
<span className="inline-flex items-center gap-2 rounded-full bg-emerald-500/10 text-emerald-800 ring-1 ring-emerald-500/20 px-3 py-1 text-xs font-medium">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-500"></span>
            10 min read
          </span>
</div>
</div>
</div>
</header>

<main className="mx-auto w-full max-w-[42.5rem] px-4 sm:px-6 pb-28 pt-6">

<section className="mb-5">
<div className="flex items-start justify-between gap-4">
<div>
<h2 className="text-lg sm:text-xl font-semibold tracking-tight text-slate-900">Conversation avec Claire &amp; Jean-Luc</h2>
<p className="mt-1 text-sm text-slate-600">Durée : ~10 minutes de lecture</p>
</div>
<div className="shrink-0 flex items-center gap-2 text-slate-600">
<button className="rounded-xl bg-white/60 ring-1 ring-black/5 px-3 py-2 text-xs font-medium hover:bg-white/80 transition shadow-sm" title="Infos" type="button">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-slate-700" height="18" icon="solar:info-circle-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
              Détails
            </span>
</button>
</div>
</div>
</section>

<section className="space-y-5" id="chat">


<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white text-slate-800 shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Salut ! J'ai entendu parler de <span className="font-medium">#StartWithLove</span>... c'est quoi exactement ?
              </p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:12</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Salut ! 👋</p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:13</span>
<span className="ml-1 inline-flex items-center gap-1 text-slate-500/90">
<span className="tracking-tight">✓✓</span>
</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>
<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Alors <span className="font-medium">#StartWithLove</span>, c'est pas un énième événement de développement personnel.
                <br/><br/>
                C'est un mouvement.
                <br/><br/>
                Un mouvement qui pose une question simple mais révolutionnaire : <span className="font-medium">Et si on réussissait sa vie en partant de l'Amour ?</span>
<br/><br/>
                Pas l'amour bisounours, hein. L'amour exigeant, responsable, celui qui structure tes choix, ton couple, ton business, ton rapport à l'argent.
                <br/><br/>
                On veut montrer qu'on peut réussir sans sacrifier l'essentiel.
              </p>

<div className="mt-3 flex justify-end">
<div className="inline-flex items-center gap-1 rounded-full bg-white/65 ring-1 ring-black/5 px-2.5 py-1 text-xs text-slate-700 shadow-sm">
<span>💚</span><span className="text-slate-500">2</span>
<span className="ml-2">✨</span><span className="text-slate-500">1</span>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:13</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white text-slate-800 shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Ok mais concrètement, ça donne quoi ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:14</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Le projet en 3 points :
                <br/><br/>
                ✨ <span className="font-medium">Un sommet de 3 semaines</span> (5-11 octobre 2026)
                <br/>→ 5 grandes soirées live avec nous
                <br/>→ Des dizaines de conférences d'experts (couple, famille, business, finances, développement personnel)
                <br/>→ Des ateliers pratiques pour passer à l'action
                <br/><br/>
                🎯 <span className="font-medium">Une communauté qui grandit</span>
<br/>→ 10 000 participants dès 2026
                <br/>→ 500 000 dans 10 ans
                <br/>→ Un mouvement intergénérationnel
                <br/><br/>
                🌍 <span className="font-medium">Un impact culturel</span>
<br/>→ Réorienter ce que "réussir" veut dire
                <br/>→ Mettre l'amour au centre des décisions
                <br/>→ Sortir du mode survie, passer en mode VIE
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:15</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="inline-flex items-center gap-2 rounded-2xl rounded-br-lg px-4 py-3 shadow-sm ring-1 ring-black/5 bg-white/55">
<span className="text-xs text-slate-600">Claire est en train d'écrire</span>
<span className="typing inline-flex items-center gap-1">
<span className="dot h-1.5 w-1.5 rounded-full bg-slate-400/80"></span>
<span className="dot h-1.5 w-1.5 rounded-full bg-slate-400/80"></span>
<span className="dot h-1.5 w-1.5 rounded-full bg-slate-400/80"></span>
</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Pourquoi maintenant ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:17</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[90%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<div className="p-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm font-medium" style={{color: '#303030'}}>
<iconify-icon height="18" icon="solar:videocamera-record-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<span>VIDEO SELFIE</span>
</div>
<span className="text-xs rounded-full bg-white/70 ring-1 ring-black/5 px-2.5 py-1 text-slate-700">1min</span>
</div>
<div className="mt-3 rounded-xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-rose-100 to-rose-200/70">
<div className="relative aspect-video">
<div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10"></div>
<div className="absolute left-3 top-3 inline-flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs text-slate-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Claire · lumière naturelle
                    </div>
<button aria-label="Lire la vidéo (démo)" className="absolute inset-0 grid place-items-center" data-video="claire-1" type="button">
<span className="grid place-items-center h-14 w-14 rounded-full bg-white/75 ring-1 ring-black/10 shadow-md transition group-hover:scale-[1.02]">
<iconify-icon className="text-slate-900" height="22" icon="solar:play-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
</button>
<div className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white/90">
                      1:00
                    </div>
</div>
</div>
<div className="mt-3 text-left">
<p className="text-xs text-slate-600">"Parce qu'on n'en peut plus... On veut créer un espace où les gens se rappellent qu'ils peuvent réussir AVEC eux-mêmes, pas CONTRE eux-mêmes."</p>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:18</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Et ça s'adresse à qui ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:20</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                À toutes celles et ceux qui sentent qu'ils ne peuvent plus continuer comme avant.
                <br/><br/>
                Qui veulent prendre leur vie en main.
                <br/><br/>
                Sortir du mode victime.
                <br/><br/>
                Réussir leur couple, leur famille, leur carrière, leurs finances... mais sans sacrifier leur âme.
                <br/><br/>
                On parle à des gens responsables, engagés, qui cherchent la cohérence, pas des recettes miracles.
                <br/><br/>
                Des gens qui savent que la vraie transformation demande du courage, de l'honnêteté, et du temps.
              </p>
<div className="mt-3 flex justify-end">
<div className="inline-flex items-center gap-1 rounded-full bg-white/70 ring-1 ring-black/5 px-2.5 py-1 text-xs text-slate-700 shadow-sm">
<span>🙌</span><span className="text-slate-500">1</span>
<span className="ml-2">💬</span><span className="text-slate-500">1</span>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:21</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>C'est quoi le programme exactement ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:22</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                📅 Les 3 semaines du mouvement :
                <br/><br/>
                🔥 <span className="font-medium">SEMAINE 1 — Les 5 Grandes Soirées</span> (en direct)
                <br/><br/>
                Claire &amp; Jean-Luc lancent le mouvement :
                <br/>→ Lundi : Couple &amp; Sexualité
                <br/>→ Mardi : Famille &amp; Parentalité
                <br/>→ Mercredi : Business &amp; Carrière
                <br/>→ Jeudi : Finances &amp; Argent
                <br/>→ Vendredi : Croissance Personnelle &amp; Spiritualité
                <br/><br/>
                Des lives puissants pour créer l'élan, poser les vraies questions, mettre en mouvement.
                <br/><br/>
                On y pose la vision, on secoue, on éveille, on donne envie d'aller plus loin.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:23</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                🎓 <span className="font-medium">SEMAINE 2 — Les Conférences d'Experts</span> (accès libre limité)
                <br/><br/>
                Des dizaines d'intervenants de haut niveau partagent leur expertise :
                <br/>→ Thérapeutes, coachs, entrepreneurs, leaders d'opinion
                <br/>→ Conférences complètes, approfondies, concrètes
                <br/>→ Accessibles gratuitement pendant une semaine
                <br/><br/>
                C'est là que tu reçois les outils, les perspectives, les clés pour transformer ta vie dans chacune des 5 dimensions.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:24</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                💪 <span className="font-medium">SEMAINE 3 — Les Ateliers Pratiques</span>
<br/><br/>
                On passe à l'action :
                <br/>→ Exercices guidés
                <br/>→ Outils concrets
                <br/>→ Plans d'action personnalisés
                <br/>→ Accompagnement pour transformer l'inspiration en résultats
                <br/><br/>
                Objectif : que chacun reparte avec des décisions claires et des premiers pas concrets.
                <br/><br/>
                Pas juste inspiré. Activé.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:25</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Et après les 3 semaines ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:27</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[90%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed text-right" style={{color: '#303030'}}>
                🌱 Le mouvement continue :
                <br/><br/>
                👤 <span className="font-medium">Membre</span>
<br/>→ Newsletter + replays
                <br/>Le premier niveau d'entrée dans le mouvement.
                <br/><br/>
                🔥 <span className="font-medium">Membre Actif</span>
<br/>→ Communauté + événements live réguliers + accès illimité aux contenus
                <br/>C'est un refuge où respirer, se relever, retrouver foi en soi et dans la vie.
                <br/><br/>
                ⭐ <span className="font-medium">Membre Pilier</span> (50 places seulement)
                <br/>→ Cercle fondateur + rôle de référent régional + journée privilégiée avec nous
                <br/>Tu deviens un pilier du mouvement, tu contribues directement à son développement.
              </p>
<div className="mt-4 rounded-xl bg-white/60 ring-1 ring-black/5 px-3 py-3">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-xs font-medium text-slate-700">
<iconify-icon height="18" icon="solar:microphone-3-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
                    Message audio
                  </div>
<span className="text-xs text-slate-500">0:18</span>
</div>
<div className="mt-2 flex items-center gap-3">
<button aria-label="Lire / Pause" className="audioBtn grid place-items-center h-10 w-10 rounded-full bg-emerald-500/15 ring-1 ring-emerald-500/25 hover:bg-emerald-500/20 transition" data-audio="jl-1" type="button">
<iconify-icon className="audioIcon text-emerald-800" height="18" icon="solar:play-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
</button>
<div className="flex-1">
<div aria-hidden="true" className="wave flex items-end justify-between gap-1 h-10 select-none">
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="35"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="55"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="28"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="70"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="42"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="62"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="34"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="80"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="38"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="60"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="30"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="74"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="44"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="58"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="36"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="66"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="32"></span>
<span className="bar w-1 rounded-full bg-slate-400/55" data-h="52"></span>
</div>
<div className="mt-1 h-1 rounded-full bg-black/5 overflow-hidden">
<div className="audioProg h-full w-0 bg-emerald-500/70 transition-[width] duration-150"></div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:28</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                C'est pas un coffret VIP.
                <br/><br/>
                C'est une famille. Un mouvement qui t'accompagne sur le temps long.
                <br/><br/>
                Un espace où tu n'es plus seul·e à porter tes questions, tes doutes, tes élans.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:29</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Qui sont les intervenants ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:30</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                On invite une centaine d'experts, de personnalités, de leaders d'opinion.
                <br/><br/>
                Pas pour faire du name-dropping.
                <br/><br/>
                Mais parce qu'on a besoin de voix multiples, incarnées, responsables.
                <br/><br/>
                Des gens qui ont de l'autorité, de l'expérience, du courage.
                <br/><br/>
                Des gens qui transmettent ce qu'ils vivent vraiment, pas des théories apprises dans des livres.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:31</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Beaucoup vont dire oui. D'autres non. Et c'est normal.
                <br/><br/>
                On construit pas avec tout le monde, mais avec ceux qui se reconnaissent dans cette vision.
                <br/><br/>
                Ceux qui sentent qu'ils ont un rôle à jouer, une parole à offrir, une présence à poser.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:32</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>C'est gratuit ou payant ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:33</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                💰 Le modèle :
                <br/><br/>
                ✅ <span className="font-medium">Gratuit</span> : Les 5 soirées live + accès temporaire aux conférences pendant 1 semaine
                <br/><br/>
                💎 <span className="font-medium">Payant</span> : Accès illimité aux replays + communauté + ateliers + événements réguliers
                <br/><br/>
                On veut que l'accès soit large, que tout le monde puisse découvrir le mouvement.
                <br/><br/>
                Mais qu'il y ait aussi un engagement pour ceux qui veulent aller plus loin, s'ancrer, transformer vraiment.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:34</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Pourquoi je devrais vous faire confiance ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:36</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[90%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 overflow-hidden transition hover:-translate-y-0.5 hover:shadow-md" style={{background: 'linear-gradient(135deg, rgba(255,232,236,1) 0%, rgba(227,242,253,1) 100%)'}}>
<div className="p-4">
<div className="flex items-center justify-between gap-3">
<div className="flex items-center gap-2 text-sm font-medium" style={{color: '#303030'}}>
<iconify-icon height="18" icon="solar:videocamera-record-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<span>VIDEO SELFIE — Ensemble</span>
</div>
<span className="text-xs rounded-full bg-white/70 ring-1 ring-black/5 px-2.5 py-1 text-slate-700">1min30</span>
</div>
<div className="mt-3 rounded-xl overflow-hidden ring-1 ring-black/5 bg-gradient-to-br from-rose-100 via-white/40 to-sky-100">
<div className="relative aspect-video">
<div className="absolute inset-0 bg-gradient-to-tr from-black/15 via-transparent to-white/10"></div>
<div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-white/70 ring-1 ring-black/5 px-3 py-1 text-xs text-slate-700">
<span className="h-2 w-2 rounded-full bg-emerald-500"></span>
                      Lumière douce · ton sincère
                    </div>
<button aria-label="Lire la vidéo (démo)" className="absolute inset-0 grid place-items-center" data-video="joint-1" type="button">
<span className="grid place-items-center h-14 w-14 rounded-full bg-white/75 ring-1 ring-black/10 shadow-md transition group-hover:scale-[1.02]">
<iconify-icon className="text-slate-900" height="22" icon="solar:play-linear" style={{'--iconify-stroke-width': '1.5'}} width="22"></iconify-icon>
</span>
</button>
<div className="absolute bottom-3 right-3 rounded-full bg-black/55 px-2.5 py-1 text-xs text-white/90">
                      1:30
                    </div>
</div>
</div>
<div className="mt-3 text-left">
<p className="text-xs text-slate-700/90">
                    CLAIRE: "On construit pas un business. On construit un héritage..."
                    <br/>
                    JEAN-LUC: "On te propose un espace..."
                  </p>
</div>
<div className="mt-3 flex justify-end">
<div className="inline-flex items-center gap-1 rounded-full bg-white/70 ring-1 ring-black/5 px-2.5 py-1 text-xs text-slate-700 shadow-sm">
<span>🎯</span><span className="text-slate-500">3</span>
<span className="ml-2">💚</span><span className="text-slate-500">4</span>
</div>
</div>
</div>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE &amp; JEAN-LUC</span>
<span>·</span>
<span>09:37</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="flex -space-x-2">
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/25 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/25 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Quelle est votre vision à long terme ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:40</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                📈 La trajectoire sur 10 ans :
                <br/><br/>
                2026 → 10 000 participants en ligne
                <br/>
                2027 → 50 en présentiel + 10 000 en ligne
                <br/>
                2028 → 500 en salle + 10 000 en ligne
                <br/>
                Année 5 → 50 000 participants
                <br/>
                Année 10 → 500 000 participants
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:41</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Notre ambition : devenir <span className="font-medium">LE mouvement francophone de référence</span> sur la réussite humaine saine.
                <br/><br/>
                Pas pour faire du chiffre.
                <br/><br/>
                Mais pour installer une nouvelle norme culturelle.
                <br/><br/>
                Montrer qu'il est possible de réussir sans renier l'amour, l'alignement, la dignité, l'humanité.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:42</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                On veut créer un mouvement intergénérationnel, à croissance lente mais irréversible.
                <br/><br/>
                Un mouvement capable d'influencer durablement la manière dont les humains aiment, éduquent, entreprennent, dirigent, investissent, décident et transmettent.
                <br/><br/>
                On construit un héritage, pas un événement.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:43</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Comment je m'inscris ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:45</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Simple : tu t'inscris sur notre site, tu reçois les infos pour les lives, et tu te laisses porter.
                <br/><br/>
                Pas de pression, pas de vente forcée.
                <br/><br/>
                Juste une invitation à rejoindre un mouvement qui commence.
                <br/><br/>
                👉 Inscription : <span className="underline decoration-emerald-400/60 underline-offset-4">[lien d'inscription]</span>
</p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:46</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="left">
<div className="flex items-end gap-3">
<div className="h-10 w-10 rounded-full bg-white/70 ring-1 ring-black/10 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-slate-700">VO</span>
</div>
<div className="max-w-[85%] sm:max-w-[78%]">
<div className="bubble group rounded-2xl rounded-bl-lg bg-white shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md">
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>Une dernière chose... pourquoi "StartWithLove" ?</p>
</div>
<div className="mt-1 flex items-center gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">VISITOR</span>
<span>·</span>
<span>09:47</span>
</div>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Parce que tout ce qui ne part pas de l'amour finit par créer de la violence.
                <br/><br/>
                Dans ton couple. Dans ton business. Dans ta relation à l'argent. Dans ton corps.
                <br/><br/>
                StartWithLove, c'est pas un slogan. C'est un principe fondateur.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:48</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                Avant chaque décision, chaque action, chaque choix... tu te poses une question simple :
                <br/><br/>
<span className="font-medium">"Est-ce que ça part de l'amour ?"</span>
<br/><br/>
                Si oui, tu avances.
                <br/>
                Si non, tu ajustes.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:49</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[85%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                C'est simple.
                <br/>
                C'est exigeant.
                <br/>
                C'est révolutionnaire.
                <br/><br/>
                Et ça change tout.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:50</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[88%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#FFE8EC'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                💬 Un dernier mot :
                <br/><br/>
                On t'attend. Pas pour te convaincre.
                <br/><br/>
                Mais parce qu'on sent que ta place est peut-être ici.
                <br/><br/>
                Avec nous. Avec toutes celles et ceux qui veulent construire une vie qui fonctionne parce qu'elle est enracinée dans l'amour.
                <br/><br/>
                Bienvenue dans le mouvement. 💚
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">CLAIRE</span>
<span>·</span>
<span>09:51</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-rose-500/15 ring-1 ring-rose-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-rose-800">CL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3" data-side="right">
<div className="flex items-end justify-end gap-3">
<div className="max-w-[90%] sm:max-w-[78%] text-right">
<div className="bubble group rounded-2xl rounded-br-lg shadow-sm ring-1 ring-black/5 px-4 py-3 transition hover:-translate-y-0.5 hover:shadow-md" style={{background: '#E3F2FD'}}>
<p className="text-sm sm:text-base leading-relaxed" style={{color: '#303030'}}>
                ✨ <span className="font-medium">#StartWithLove — Réussir Avec Amour</span>
<br/>
                📅 5-11 octobre 2026
                <br/>
                🌍 Le mouvement commence maintenant.
              </p>
</div>
<div className="mt-1 flex items-center justify-end gap-2 text-xs" style={{color: '#8696A0'}}>
<span className="font-medium">JEAN-LUC</span>
<span>·</span>
<span>09:52</span>
<span className="ml-1 tracking-tight text-slate-500/90">✓✓</span>
</div>
</div>
<div className="h-10 w-10 rounded-full bg-sky-500/15 ring-1 ring-sky-500/20 shadow-sm grid place-items-center overflow-hidden">
<span className="text-xs font-semibold tracking-tight text-sky-900">JL</span>
</div>
</div>
</article>

<article className="msg opacity-0 translate-y-3 pt-2">
<div className="flex justify-center">
<div className="w-full max-w-md text-center">
<button className="w-full rounded-full px-6 py-4 text-sm sm:text-base font-semibold tracking-tight text-white shadow-md hover:shadow-lg transition active:translate-y-[0.05rem]" id="cta" style={{background: 'linear-gradient(90deg, rgba(255,106,162,1) 0%, rgba(168,85,247,1) 100%)'}} type="button">
              S'inscrire maintenant
            </button>
<p className="mt-3 text-xs text-slate-600" id="ctaHint">Clique pour copier un lien d'inscription (démo).</p>
</div>
</div>
</article>
</section>
</main>

<footer className="fixed bottom-0 left-0 right-0 z-40 border-t border-black/5 backdrop-blur bg-white/35">
<div className="mx-auto w-full max-w-[42.5rem] px-4 sm:px-6 py-3">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-xl bg-emerald-500/10 ring-1 ring-emerald-500/20 grid place-items-center">
<iconify-icon className="text-emerald-800" height="20" icon="solar:chat-round-dots-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</div>
<div className="flex-1">
<div className="flex items-center gap-2 rounded-2xl bg-white/70 ring-1 ring-black/5 px-4 py-3 shadow-sm">
<iconify-icon className="text-slate-600" height="18" icon="solar:pen-new-square-linear" style={{'--iconify-stroke-width': '1.5'}} width="18"></iconify-icon>
<input className="w-full bg-transparent text-sm sm:text-base text-slate-700 placeholder:text-slate-500 focus:outline-none" disabled="" value="Le mouvement commence maintenant..."/>
</div>
<p className="mt-2 text-xs" style={{color: '#8696A0'}}>Champ désactivé — visuel uniquement</p>
</div>
<button className="hidden sm:inline-flex items-center justify-center h-12 w-12 rounded-2xl bg-white/70 ring-1 ring-black/5 shadow-sm hover:bg-white/85 transition" title="Envoyer (désactivé)" type="button">
<iconify-icon className="text-slate-700" height="20" icon="solar:paper-plane-linear" style={{'--iconify-stroke-width': '1.5'}} width="20"></iconify-icon>
</button>
</div>
</div>
</footer>

<div className="fixed left-1/2 -translate-x-1/2 bottom-24 sm:bottom-28 z-50 pointer-events-none opacity-0 translate-y-2 transition duration-200" id="toast">
<div className="rounded-full bg-slate-900/90 text-white px-4 py-2 text-xs shadow-lg ring-1 ring-white/10">
      Lien copié : <span className="font-medium">startwithlove.example/inscription</span>
</div>
</div>


    </>
  );
}
