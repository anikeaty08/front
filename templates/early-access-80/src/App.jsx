import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize lucide icons with 1.5 stroke width
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) {
        window.lucide.createIcons({ attrs: { strokeWidth: 1.5 } });
      }
    });

    // Countdown: start from 91d 05h 36m 09s
    (function initCountdown() {
      const dd = document.getElementById('dd');
      const hh = document.getElementById('hh');
      const mm = document.getElementById('mm');
      const ss = document.getElementById('ss');

      const days = 91, hours = 5, minutes = 36, seconds = 9;
      const target = Date.now() + (((days * 24 + hours) * 60 + minutes) * 60 + seconds) * 1000;

      function pad(n) { return n.toString().padStart(2, '0'); }

      function tick() {
        const now = Date.now();
        let diff = Math.max(0, Math.floor((target - now) / 1000));

        const d = Math.floor(diff / (24 * 3600));
        diff %= (24 * 3600);
        const h = Math.floor(diff / 3600);
        diff %= 3600;
        const m = Math.floor(diff / 60);
        const s = diff % 60;

        if (dd) dd.textContent = d;
        if (hh) hh.textContent = pad(h);
        if (mm) mm.textContent = pad(m);
        if (ss) ss.textContent = pad(s);
      }

      tick();
      setInterval(tick, 1000);
    })();

    // Form handling
    (function handleForm() {
      const form = document.getElementById('waitlist-form');
      const email = document.getElementById('email');
      const btn = document.getElementById('join-btn');
      const msg = document.getElementById('form-message');

      if (!form) return;

      form.addEventListener('submit', async (e) => {
        e.preventDefault();
        msg.textContent = '';
        msg.className = 'mt-3 text-sm';

        if (!email.value || !email.validity.valid) {
          msg.textContent = 'Please enter a valid email address.';
          msg.classList.add('text-red-400');
          email.focus();
          return;
        }

        btn.disabled = true;
        btn.classList.add('opacity-70', 'cursor-not-allowed');

        // Simulate request
        await new Promise(r => setTimeout(r, 900));

        msg.innerHTML = '<span class="inline-flex items-center gap-2 text-[#DFFF00]"><svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M20 6L9 17l-5-5"/></svg> You’re in. Check your inbox to confirm your email.</span>';
        msg.classList.remove('text-red-400');
        email.value = '';
        btn.disabled = false;
        btn.classList.remove('opacity-70', 'cursor-not-allowed');
      });
    })();

    // Video modal (fixed initialization)
    document.addEventListener('DOMContentLoaded', () => {
      const playBtn = document.getElementById('play');
      const modal = document.getElementById('video-modal');
      const closeBtn = document.getElementById('close-modal');
      const player = document.getElementById('player');

      if (!playBtn || !modal || !closeBtn || !player) return;

      function openModal() {
        modal.classList.remove('hidden');
        playBtn.setAttribute('aria-expanded', 'true');
        player.innerHTML = '<iframe class="h-full w-full" src="https://player.vimeo.com/video/76979871?autoplay=1&muted=1&title=0&byline=0&portrait=0" frameborder="0" allow="autoplay; fullscreen; picture-in-picture" allowfullscreen></iframe>';
      }
      function closeModal() {
        modal.classList.add('hidden');
        playBtn.setAttribute('aria-expanded', 'false');
        player.innerHTML = '';
      }

      playBtn.addEventListener('click', (e) => { e.preventDefault(); openModal(); });
      closeBtn.addEventListener('click', closeModal);
      modal.addEventListener('click', (e) => { if (e.target === modal) closeModal(); });
      document.addEventListener('keydown', (e) => { if (e.key === 'Escape' && !modal.classList.contains('hidden')) closeModal(); });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none absolute inset-0 [mask-image:radial-gradient(60%_60%_at_50%_20%,black,transparent)]">
<div className="absolute -top-24 left-1/2 -translate-x-1/2 h-64 w-[40rem] rounded-full blur-3xl opacity-30" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(223,255,0,0.18), rgba(223,255,0,0.04) 60%, transparent 70%)'}}>
</div>
</div>
<div className="absolute inset-0 -z-10">
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 h-72 w-[50rem] rounded-full blur-3xl opacity-20" style={{background: 'radial-gradient(60% 60% at 50% 50%, rgba(223,255,0,0.12), rgba(223,255,0,0.04) 60%, transparent 70%)'}}>
</div>
</div>

<header className="relative z-10">
<div className="mx-auto max-w-7xl px-6 pt-7 md:px-8">
</div>
</header>

<main className="z-10 relative">
<section className="md:px-8 md:pt-10 max-w-7xl mr-auto ml-auto pt-20 pr-6 pb-8 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto">

<div className="inline-flex gap-2 text-[11px] xl:text-xl font-medium text-zinc-300 bg-zinc-900 border-zinc-800 border rounded-full mr-auto mb-4 ml-auto pt-1.5 pr-3 pb-1.5 pl-3 gap-x-2 gap-y-2 items-center">Gratuito!</div>

<h1 className="md:text-7xl text-5xl font-semibold text-white tracking-tight max-w-2xl mr-auto ml-auto">Dashboards do Zé</h1>

<p className="md:text-lg text-base text-zinc-300 max-w-2xl mt-4 mr-auto ml-auto">Modelo 01</p>

<form className="mx-auto mt-8 max-w-xl" id="waitlist-form" novalidate="">
<div className="flex flex-col gap-3 sm:flex-row sm:items-center">
<div className="flex-1 relative">
<label className="sr-only" htmlFor="email">Email address</label>
<div className="pointer-events-none flex absolute top-0 bottom-0 left-3 items-center">
<svg className="lucide lucide-mail h-4 w-4 text-zinc-500" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<input autocomplete="email" className="placeholder-zinc-500 outline-none ring-inset focus:ring-[#DFFF00] focus:ring-2 transition text-sm text-zinc-100 bg-zinc-900/70 w-full ring-zinc-800 ring-1 rounded-md pt-3 pr-4 pb-3 pl-10" id="email" placeholder="you@domain.com" required="" type="email"/>
</div>
<button className="group inline-flex gap-2 whitespace-nowrap transition hover:bg-[#e9ff3a] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#DFFF00] hover:shadow-[0_0_24px_4px_rgba(223,255,0,0.45)] text-sm font-medium text-black bg-[#DFFF00] rounded-md pt-3 pr-5 pb-3 pl-5 shadow-[0_0_0_0_rgba(223,255,0,0)] gap-x-2 gap-y-2 items-center justify-center" id="join-btn" type="submit">Enviar a planilha para meu email!</button>
</div>
<div className="mt-3 flex flex-col items-center justify-between gap-3 sm:flex-row">
<div className="flex items-center gap-2 text-xs text-zinc-400">
<svg className="lucide lucide-triangle-alert lucide-shield w-[14px] h-[14px]" data-icon-replaced="true" data-lucide="triangle-alert" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" style={{width: '14px', height: '14px', color: 'rgb(113, 113, 122)'}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="">É necessário um e-mail válido, pois enviaremos a planilha no e-mail.</span>
</div>

<div className="flex items-center gap-3"></div>
</div>

<div className="mt-3 text-sm" id="form-message"></div>
</form>

<div className="mx-auto mt-12 max-w-3xl">
<div className="bg-zinc-900/50 border-zinc-800 border rounded-xl pt-2 pr-2 pb-2 pl-2 relative">
<div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-950 ring-1 ring-inset ring-zinc-800">
<div className="absolute inset-0 opacity-[0.08]" style={{backgroundImage: 'radial-gradient(#fff 1px, transparent 1px)', backgroundSize: '16px 16px'}}></div>
<img alt="Product preview" className="opacity-20 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1542751371-adc38448a05e?q=80&amp;w=2400&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.0.3&amp;ixid=Mnwx"/>
<button aria-controls="video-modal" aria-expanded="false" className="group -translate-x-1/2 -translate-y-1/2 inline-flex gap-3 transition hover:border-[#DFFF00]/60 text-sm font-medium text-zinc-100 bg-zinc-900/70 border-[#DFFF00]/40 border rounded-full pt-3 pr-5 pb-3 pl-5 absolute top-1/2 left-1/2 backdrop-blur gap-x-3 gap-y-3 items-center z-10" id="play" type="button">
<span className="relative inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#DFFF00] text-black shadow-[0_0_24px_6px_rgba(223,255,0,0.45)]">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</span>
<span className="group-hover:text-white transition text-zinc-300">Ver Vídeo</span>
</button>
</div>
<p className="text-sm text-zinc-400 text-center mt-3">Veja como utilizar a planilha </p>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-7xl px-6 pb-16 md:px-8">
<div className="mx-auto max-w-3xl">
<div className="flex flex-col gap-3 sm:flex-row text-xs text-zinc-400 text-center bg-zinc-900/40 border-zinc-800 border rounded-lg mt-6 pt-3 pr-4 pb-3 pl-4 gap-x-3 gap-y-3 items-center justify-between">
<div className="inline-flex items-center gap-2">
<span className="">Zé Planilha - Planilhas Profissionais</span>
</div>
<div className="inline-flex items-center gap-2"></div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 z-50 hidden flex items-center justify-center bg-black/80 p-6" id="video-modal">
<div className="relative w-full max-w-3xl rounded-xl border border-zinc-800 bg-zinc-950 p-2">
<div className="relative aspect-video w-full overflow-hidden rounded-lg bg-zinc-900 ring-1 ring-inset ring-zinc-800">
<div className="h-full w-full" id="player"></div>
</div>
<button className="absolute -right-2 -top-2 inline-flex h-9 w-9 items-center justify-center rounded-full bg-zinc-900 text-zinc-300 ring-1 ring-zinc-800 hover:text-white hover:ring-zinc-700 transition" id="close-modal">
<svg className="lucide lucide-x h-4 w-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" strokewidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>



    </>
  );
}
