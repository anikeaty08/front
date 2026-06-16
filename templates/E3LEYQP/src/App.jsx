import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Load lucide icons
    lucide.createIcons();

    // Color logic from stored selection
    (function () {
      const qp = new URLSearchParams(location.search);
      const stored = localStorage.getItem('colors') || '';
      const chosen = (qp.get('colors') || stored).split(',').filter(Boolean);
      let [c1,c2] = ['#1c1523','#16121d'];
      if (chosen.length === 1) {
        c1 = chosen[0];
        c2 = tinycolor(chosen[0]).lighten(8).toString();
      } else if (chosen.length >= 2) { [c1,c2] = chosen; }
      document.documentElement.style.setProperty('--c1', c1);
      document.documentElement.style.setProperty('--c2', c2);
      document.documentElement.style.setProperty('--ringOffset', c1);
      const accent = tinycolor.mix(c1, c2, 25).lighten(20).toString();
      document.documentElement.style.setProperty('--accent', accent);
      document.documentElement.style.setProperty('--fg',
        tinycolor.mix('#ffffff', tinycolor.average([c1,c2])).isLight() ? '#1a151d' : '#f5f3fb');
    })();

    // TinyColor loader
    (function(){const s=document.createElement('script');s.src='https://cdnjs.cloudflare.com/ajax/libs/tinycolor/1.4.2/tinycolor.min.js';document.head.appendChild(s)})();

    // Staggered fade-in
    document.querySelectorAll('main > *').forEach((el,i)=>{
      el.style.opacity=0;el.style.transform='translateY(12px)';
      setTimeout(()=>{el.style.transition='all .7s';el.style.opacity=1;el.style.transform='none';},150+i*120);
    });

    // CTA pulse
    setInterval(()=>document.getElementById('finishBtn').classList.toggle('animate-pulse'),3200);

    // Fake submit
    document.getElementById('finishBtn').addEventListener('click',()=>alert('Thank you for sharing!'));
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="pointer-events-none fixed inset-0 -z-20 opacity-40" style={{backgroundImage: 'url(\'data:image/svg+xml', svg xmlns=%22http: '//www.w3.org/2000/svg%22 width=%22128%22 height=%22128%22 viewBox=%220 0 128 128%22&gt'}}></div>

<div className="pointer-events-none absolute -z-10 inset-0">
<div className="absolute -top-10 left-1/3 w-60 h-60 bg-white/5 blur-3xl rounded-full animate-pulse"></div>
<div className="absolute bottom-0 right-6 w-40 h-40 bg-white/10 blur-2xl rounded-full animate-ping delay-1000"></div>
</div>

<main className="relative w-full max-w-md mx-auto px-5 sm:px-8 py-12 space-y-10 backdrop-blur-xl bg-white/5/10 rounded-3xl shadow-xl border border-white/10">

<div className="flex items-center gap-3">
<div className="flex-1 h-1 rounded-full bg-white/10 overflow-hidden">
<div className="h-full bg-amber-200 animate-[progress_1.5s_ease-out_forwards]"></div>
</div>
<span className="text-xs tracking-tight text-amber-100 whitespace-nowrap">Step 4 of 4</span>
</div>

<header className="text-center space-y-3">
<h1 className="text-[28px] sm:text-3xl font-semibold tracking-tight" style={{color: 'var(--accent,#fde68a)'}}>Help us understand the real you.</h1>
<p className="text-sm leading-relaxed text-white/80">
        You can share a life experience, a challenge you’ve overcome, a recurring feeling, or a moment that
        shaped you. This helps TrulyYou offer insights that feel deeply personal and emotionally aligned.
      </p>
</header>

<div className="relative">
<textarea className="w-full h-64 sm:h-72 resize-none rounded-2xl bg-white/5 p-5 leading-relaxed text-[15px] placeholder-white/40 focus:outline-none focus:ring-2 focus:ring-amber-200/60 focus:ring-offset-[color:var(--ringOffset,#1c1523)]" id="story" placeholder="I’ve always struggled to trust myself…"></textarea>
<button aria-label="Record voice" className="absolute bottom-4 right-4 h-12 w-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white hover:bg-white/15 active:scale-95 transition" type="button">
<i className="h-5 w-5" data-lucide="mic"></i>
</button>
</div>

<button className="group relative w-full py-3 rounded-2xl bg-amber-200 text-[#18120f] font-medium tracking-tight shadow-lg focus:outline-none active:scale-95" id="finishBtn" type="button">
      Finish Onboarding
      <span className="absolute inset-0 rounded-2xl border border-amber-200/40 opacity-0 group-hover:opacity-100 transition"></span>
</button>
</main>



<style>
    @keyframes progress{from{width:0}to{width:100%}}
  </style>

    </>
  );
}
