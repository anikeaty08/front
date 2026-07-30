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



    document.addEventListener("DOMContentLoaded", () => {
      const reveals = document.querySelectorAll("[data-reveal]");
      const io = new IntersectionObserver(
        entries => entries.forEach(e => e.isIntersecting && e.target.classList.remove("opacity-0","translate-y-6")),
        { threshold: 0.2 }
      );
      reveals.forEach(el => io.observe(el));
    });
  


    lucide.createIcons({ strokeWidth: 1.5 });
  
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
      


<section className="relative overflow-hidden">

<img alt="Man relaxing on a beach, sipping a cocktail" className="absolute inset-0 w-full h-full object-cover opacity-60 -z-10" src="https://images.unsplash.com/photo-1528581913401-e266a0fe12ca?w=2560&q=80" style={{}} />
<div className="absolute inset-0 bg-gradient-to-br from-[#1b1f27] via-transparent to-transparent"></div>
<div className="relative max-w-5xl text-center mr-auto ml-auto pt-28 pr-6 pb-32 pl-6">
<span className="inline-block mb-6 px-4 py-1.5 rounded-full bg-[#1f2937]/60 backdrop-blur-sm ring-1 ring-white/10 text-sm font-medium tracking-tight transition duration-700" data-reveal="">Earn up to 4 % APY</span>
<h1 className="text-4xl md:text-6xl font-semibold md:leading-[1.1] tracking-tight space-y-2 transition duration-700 delay-100" data-reveal="">
<span className="block">More you chill.</span>
<span className="block text-transparent bg-clip-text bg-gradient-to-r from-[#4f9cff] to-[#9b7bff]">More you earn.</span>
</h1>
<p className="mt-8 text-gray-300 max-w-xl mx-auto transition duration-700 delay-200" data-reveal="">
        Presenting Zolve’s zero-fee checking account that earns you 4 % interest<span className="align-super text-xs">*</span>
</p>
<button className="mt-12 inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-white text-black font-medium shadow hover:ring-2 hover:ring-white/40 transition duration-700 delay-300" data-reveal="">
<svg className="lucide lucide-arrow-right-circle w-5 h-5" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
        Get Started
      </button>
</div>
</section>

<div className="mx-auto max-w-6xl px-6">
</div>

<section className="max-w-6xl grid md:grid-cols-2 gap-16 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="space-y-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight transition duration-700" data-reveal="">Why make the switch?</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 transition duration-700 delay-100" data-reveal="">
<svg className="lucide lucide-badge-check w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">No joining fee. No minimum balance.</span>
</li>
<li className="flex items-start gap-4 transition duration-700 delay-150" data-reveal="">
<svg className="lucide lucide-globe w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="">Transfer money internationally</span>
</li>
<li className="flex items-start gap-4 transition duration-700 delay-200" data-reveal="">
<svg className="lucide lucide-shopping-bag w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="">Up to 10 % cashback at 7 k merchants</span>
</li>
<li className="flex items-start gap-4 transition duration-700 delay-300" data-reveal="">
<i className="w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="atm"></i>
<span>Withdraw fee-free at 60 k+ Allpoint ATMs</span>
</li>
</ul>
<button className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-white text-black font-medium shadow hover:ring-2 hover:ring-white/40 transition duration-700 delay-400" data-reveal="">
<svg className="lucide lucide-credit-card w-5 h-5" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
        Apply Now
      </button>
</div>

<div className="transition duration-700 delay-200" data-reveal="">
<img alt="Credit card mockup" className="rounded-xl shadow-lg ring-1 ring-white/10 object-cover w-full h-96 md:h-full" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" style={{}} />
</div>
</section>

<div className="mx-auto max-w-6xl px-6">
</div>

<section className="max-w-6xl mx-auto px-6 py-24">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-center mb-16 transition duration-700" data-reveal="">What users say</h2>
<div className="grid gap-12 md:grid-cols-3">
<div className="transition duration-700 delay-100 flex flex-col" data-reveal="">
<img alt="User 1" className="w-20 h-20 rounded-full mb-6 self-center object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&fit=crop&w=600&q=80" style={{}} />
<p className="text-gray-300 flex-1">“Switching was seamless. My money now works for me and the cashback is icing on the cake.”</p>
<span className="mt-4 font-medium">Olivia R.</span>
</div>
<div className="transition duration-700 delay-200 flex flex-col" data-reveal="">
<img alt="User 2" className="w-20 h-20 rounded-full mb-6 self-center object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?auto=format&fit=crop&w=600&q=80" style={{}} />
<p className="text-gray-300 flex-1">“No fees, high interest, and I can freeze my card instantly. Exactly what banking should be.”</p>
<span className="mt-4 font-medium">Marcus W.</span>
</div>
<div className="transition duration-700 delay-300 flex flex-col" data-reveal="">
<img alt="User 3" className="w-20 h-20 rounded-full mb-6 self-center object-cover" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&fit=crop&w=600&q=80" style={{}} />
<p className="text-gray-300 flex-1">“International transfers land in minutes, not days. Huge quality-of-life upgrade for me.”</p>
<span className="mt-4 font-medium">Sofia H.</span>
</div>
</div>
</section>

<div className="mx-auto max-w-6xl px-6">
</div>

<section className="max-w-6xl mx-auto px-6 py-24 grid md:grid-cols-2 gap-16">
<div className="space-y-10">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight transition duration-700" data-reveal="">Bank with confidence</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4 transition duration-700 delay-100" data-reveal="">
<svg className="lucide lucide-shield-check w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="">Up to $250,000 FDIC insurance on deposits</span>
</li>
<li className="flex items-start gap-4 transition duration-700 delay-150" data-reveal="">
<i className="w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="freeze"></i>
<span className="">Freeze & unfreeze your card with a tap</span>
</li>
<li className="flex items-start gap-4 transition duration-700 delay-200" data-reveal="">
<svg className="lucide lucide-users w-6 h-6 stroke-1.5 text-[#4f9cff]" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Trusted by 300,000+ users</span>
</li>
</ul>
<button className="inline-flex items-center gap-2 mt-6 px-6 py-3 rounded-lg bg-white text-black font-medium shadow hover:ring-2 hover:ring-white/40 transition duration-700 delay-300" data-reveal="">
<svg className="lucide lucide-rocket w-5 h-5" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
        Apply Now
      </button>
</div>

<div className="transition duration-700 delay-200" data-reveal="">
<img alt="Trust illustration" className="rounded-xl shadow-lg ring-1 ring-white/10 object-cover w-full h-96 md:h-full" src="https://images.unsplash.com/photo-1537724326059-2ea20251b9c8?w=1600&q=80" style={{}} />
</div>
</section>


    </>
  );
}
