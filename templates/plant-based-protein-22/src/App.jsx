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
gtag('config', 'G-YPYC8D4EXF');



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
950: '#09090b',
900: '#18181b',
800: '#27272a',
400: '#a1a1aa',
50: '#fafafa',
},
emerald: {
400: '#34d399',
500: '#10b981',
600: '#059669',
900: '#064e3b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Set your target launch date here
  const launchDate = new Date();
  launchDate.setDate(launchDate.getDate() + 30); // 30 days from now

  function updateCountdown() {
    const now = new Date().getTime();
    const distance = launchDate.getTime() - now;

    if (distance <= 0) {
      document.getElementById("hero-days").textContent = "00";
      document.getElementById("hero-hours").textContent = "00";
      document.getElementById("hero-mins").textContent = "00";
      document.getElementById("hero-secs").textContent = "00";
      return;
    }

    const days  = Math.floor(distance / (1000 * 60 * 60 * 24));
    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const mins  = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
    const secs  = Math.floor((distance % (1000 * 60)) / 1000);

    document.getElementById("hero-days").textContent  = String(days).padStart(2, "0");
    document.getElementById("hero-hours").textContent = String(hours).padStart(2, "0");
    document.getElementById("hero-mins").textContent  = String(mins).padStart(2, "0");
    document.getElementById("hero-secs").textContent  = String(secs).padStart(2, "0");
  }

  updateCountdown(); // run immediately to avoid 1s flicker
  setInterval(updateCountdown, 1000);



            (function() {
                const launchDate = new Date();
                launchDate.setDate(launchDate.getDate() + 30);
                launchDate.setHours(0, 0, 0, 0);
                function updateCountdown() {
                    const now = new Date().getTime();
                    const distance = launchDate - now;
                    if (distance < 0) {
                        document.getElementById('days').innerText = '00';
                        document.getElementById('hours').innerText = '00';
                        document.getElementById('minutes').innerText = '00';
                        document.getElementById('seconds').innerText = '00';
                        return;
                    }
                    const days = Math.floor(distance / (1000 * 60 * 60 * 24));
                    const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
                    const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
                    const seconds = Math.floor((distance % (1000 * 60)) / 1000);
                    document.getElementById('days').innerText = days.toString().padStart(2, '0');
                    document.getElementById('hours').innerText = hours.toString().padStart(2, '0');
                    document.getElementById('minutes').innerText = minutes.toString().padStart(2, '0');
                    document.getElementById('seconds').innerText = seconds.toString().padStart(2, '0');
                }
                updateCountdown();
                setInterval(updateCountdown, 1000);
            })();
        


            async function handleWaitlistSubmit() {
                const nameInput  = document.getElementById('waitlist-name');
                const emailInput = document.getElementById('waitlist-email');
                const errorEl    = document.getElementById('waitlist-error');
                const submitBtn  = document.getElementById('waitlist-submit-btn');
                const btnText    = document.getElementById('waitlist-btn-text');
                const spinner    = document.getElementById('waitlist-spinner');

                const name  = nameInput.value.trim();
                const email = emailInput.value.trim();

                // Validation
                const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
                if (!name || !emailRegex.test(email)) {
                    errorEl.classList.remove('hidden');
                    return;
                }
                errorEl.classList.add('hidden');

                // Loading state
                submitBtn.disabled = true;
                btnText.textContent = 'Joining...';
                spinner.classList.remove('hidden');

                try {
                    const response = await fetch(
                        'https://api.sheetbest.com/sheets/195c93c8-6027-4ecb-89f2-e2e96b2bd126',
                        {
                            method: 'POST',
                            headers: { 'Content-Type': 'application/json' },
                            body: JSON.stringify({
                                Name: name,
                                Email: email,
                                Timestamp: new Date().toLocaleString()
                            })
                        }
                    );

                    if (!response.ok) throw new Error('API error: ' + response.status);

                    // Show success
                    document.getElementById('waitlist-form-container').classList.add('hidden');
                    const successEl = document.getElementById('waitlist-success');
                    successEl.classList.remove('hidden');
                    successEl.classList.add('flex');

                } catch (err) {
                    console.error('Waitlist submission failed:', err);
                    btnText.textContent = 'Something went wrong. Try again.';
                    spinner.classList.add('hidden');
                    submitBtn.disabled = false;
                    submitBtn.classList.add('bg-red-600');
                    submitBtn.classList.remove('bg-green-600');
                    setTimeout(() => {
                        btnText.textContent = 'Join the Waitlist';
                        submitBtn.classList.remove('bg-red-600');
                        submitBtn.classList.add('bg-green-600');
                    }, 3000);
                }
            }
        


        const initFAQ = () => {
            const faqItems = document.querySelectorAll('.faq-btn');
            faqItems.forEach(btn => {
                btn.addEventListener('click', function(e) {
                    e.preventDefault();
                    const content = this.nextElementSibling;
                    const icon = this.querySelector('iconify-icon');
                    
                    // Check if this content is currently open
                    const isOpen = content.style.maxHeight && content.style.maxHeight !== '0px';
                    
                    // Close all other FAQs first
                    document.querySelectorAll('.faq-content').forEach(item => {
                        if (item !== content) {
                            item.style.maxHeight = '0px';
                            item.style.opacity = '0';
                            const otherBtn = item.previousElementSibling;
                            if (otherBtn && otherBtn.classList.contains('faq-btn')) {
                                const otherIcon = otherBtn.querySelector('iconify-icon');
                                if (otherIcon) otherIcon.style.transform = 'rotate(0deg)';
                            }
                        }
                    });
                    
                    // Toggle the clicked one
                    if (!isOpen) {
                        content.style.maxHeight = content.scrollHeight + 'px';
                        content.style.opacity = '1';
                        if (icon) icon.style.transform = 'rotate(180deg)';
                    } else {
                        content.style.maxHeight = '0px';
                        content.style.opacity = '0';
                        if (icon) icon.style.transform = 'rotate(0deg)';
                    }
                });
            });
        };

        const initScrollAnim = () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.animate-on-scroll').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'translateY(24px)';
                el.style.transition = 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)';
                observer.observe(el);
            });
        };

        document.addEventListener('DOMContentLoaded', () => {
            initFAQ();
            initScrollAnim();
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
      

<div className="fixed inset-0 z-[-1] flex justify-center overflow-hidden pointer-events-none" style={{opacity: '0.4'}}>
<div className="w-[80vw] h-[80vw] bg-emerald-900/20 rounded-full blur-[120px] mix-blend-screen transform -translate-y-1/2"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/80" style={{backdropFilter: 'blur(12px)'}}>
<div className="flex h-16 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="tracking-tighter font-medium text-xl text-white">PROGULP</div>
<a className="text-base font-normal bg-white text-zinc-950 px-4 py-2 rounded-full hover:bg-zinc-200 transition-colors" href="#waitlist">
                Join Waitlist
            </a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 overflow-hidden">
<div className="max-w-5xl mx-auto text-center flex flex-col items-center animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm font-normal mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Pre-launch Access
            </div>
<h1 className="md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tighter mb-6">
                30g Plant Protein.<br/>
<span className="text-zinc-500">Zero Added Sugar.</span><br/>
                Ready to Drink.
            </h1>
<p className="text-xl md:text-2xl text-zinc-400 max-w-2xl mb-10 font-normal">
                Meet ProGulp, a clean plant-based protein drink made from soya, almond, and pea protein, designed for people who want convenient, healthy post-workout nutrition.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<a className="w-full sm:w-auto px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-lg font-medium rounded-full transition-colors flex items-center justify-center gap-2" href="#waitlist">
                    Join Early Access
                    <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-4 bg-zinc-900 border border-white/10 hover:bg-zinc-800 text-white text-lg font-normal rounded-full transition-colors" href="#waitlist">
                    Get 20% Launch Discount
                </a>
</div>

<div className="mt-12 flex flex-col items-center gap-3">
<span className="text-sm text-zinc-500 font-normal tracking-tight uppercase">Launching in</span>
<div className="flex items-center gap-4 text-center">
<div className="flex flex-col"><span className="text-3xl font-medium tracking-tighter text-white" id="hero-days">30</span><span className="text-sm text-zinc-500">Days</span></div>
<span className="text-2xl text-zinc-700 pb-4">:</span>
<div className="flex flex-col"><span className="text-3xl font-medium tracking-tighter text-white" id="hero-hours">00</span><span className="text-sm text-zinc-500">Hrs</span></div>
<span className="text-2xl text-zinc-700 pb-4">:</span>
<div className="flex flex-col"><span className="text-3xl font-medium tracking-tighter text-white" id="hero-mins">00</span><span className="text-sm text-zinc-500">Min</span></div>
<span className="text-2xl text-zinc-700 pb-4">:</span>
<div className="flex flex-col"><span className="text-3xl font-medium tracking-tighter text-white" id="hero-secs">00</span><span className="text-sm text-zinc-500">Sec</span></div>
</div>
</div>
</div>
</section>


<section className="max-w-6xl mx-auto px-6 mb-32 animate-on-scroll">
<div className="relative w-full aspect-[4/3] md:aspect-[21/9] bg-zinc-900 rounded-3xl overflow-hidden border border-white/5 shadow-2xl flex items-center justify-center group cursor-pointer">

<img alt="Fitness workout" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-1000 ease-in-out" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 z-10 bg-zinc-950/60 transition-opacity duration-500 group-hover:bg-zinc-950/70"></div>

<div className="absolute inset-0 z-20 flex items-center justify-center pointer-events-none">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-1">30g Plant Protein</h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-2 opacity-0">Zero Added Sugar</h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-3 opacity-0">Ready to Drink</h2>
<h2 className="text-4xl md:text-6xl font-medium tracking-tight text-white absolute video-text-4 opacity-0">Plant-Based Nutrition</h2>
</div>

<div className="absolute bottom-6 left-6 z-20 flex items-center gap-3 pointer-events-none">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center border border-white/30 text-white">
<iconify-icon className="text-xl translate-x-[1px]" icon="solar:play-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<span className="text-sm font-medium text-white tracking-wide uppercase">Watch Teaser</span>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-8">
                    Why Most Protein Drinks <span className="text-zinc-500">Aren't Ideal</span>
</h2>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<p className="text-lg text-zinc-300 font-normal">Many protein drinks contain hidden sugar</p>
<p className="text-base text-zinc-500 mt-1">Leading to unwanted calorie spikes.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<p className="text-lg text-zinc-300 font-normal">Dairy protein causes bloating</p>
<p className="text-base text-zinc-500 mt-1">A struggle for lactose-intolerant people.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<p className="text-lg text-zinc-300 font-normal">Powders require preparation</p>
<p className="text-base text-zinc-500 mt-1">Messy shakers and clumpy mixing.</p>
</div>
</li>
<li className="flex items-start gap-4">
<iconify-icon className="text-2xl text-zinc-600 mt-1 flex-shrink-0" icon="solar:close-circle-linear"></iconify-icon>
<div>
<p className="text-lg text-zinc-300 font-normal">Artificial fillers &amp; thickeners</p>
<p className="text-base text-zinc-500 mt-1">Compromising clean nutrition goals.</p>
</div>
</li>
</ul>
</div>

<div className="bg-emerald-900/10 border border-emerald-500/20 rounded-3xl p-10 animate-on-scroll relative overflow-hidden" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="absolute top-0 right-0 w-64 h-64 bg-emerald-500/10 blur-[80px] rounded-full"></div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-6 relative z-10">
                    Introducing <span className="text-emerald-400">ProGulp</span>
</h2>
<p className="text-xl text-zinc-300 font-normal leading-relaxed relative z-10">
                    ProGulp is a ready-to-drink vegan protein shake delivering <span className="text-white">30g of plant protein</span> per bottle, designed for people who want clean nutrition without sugar, dairy, or complicated preparation.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-6xl mx-auto">
<div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">High Protein</h3>
<p className="text-base text-zinc-400 font-normal">30g protein per bottle for maximum recovery.</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 animate-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:leaf-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Lactose Free</h3>
<p className="text-base text-zinc-400 font-normal">100% plant-based. No digestion issues.</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 animate-on-scroll" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:cup-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Ready to Drink</h3>
<p className="text-base text-zinc-400 font-normal">No shaker, no water, no mixing required.</p>
</div>
<div className="bg-zinc-900/50 border border-white/5 rounded-2xl p-6 animate-on-scroll" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-emerald-400" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-2">Clean Ingredients</h3>
<p className="text-base text-zinc-400 font-normal">Zero added sugar and no artificial fillers.</p>
</div>
</div>
</section>

<section className="py-24 overflow-hidden border-t border-white/5">
<div className="max-w-6xl mx-auto px-6 mb-12 text-center animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-white mb-4">Choose Your Flavor</h2>
<p className="text-lg text-zinc-400 font-normal max-w-xl mx-auto">Premium 250ml ready-to-drink tetra packs. Crafted with a blend of Soya, Almond, and Pea protein.</p>
</div>
<div className="w-full overflow-x-auto pb-12 pt-4 px-6 snap-x snap-mandatory flex justify-start md:justify-center gap-8 md:gap-12" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="snap-center shrink-0 w-[280px] animate-on-scroll relative group" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-full h-[420px] bg-zinc-100 rounded-[1.5rem] shadow-2xl flex flex-col justify-end overflow-hidden border border-black/10 relative transition-transform duration-500 group-hover:-translate-y-4">
<div className="absolute top-0 right-10 w-12 h-6 bg-emerald-500 rounded-t-lg z-20 border-b-2 border-emerald-600"></div>
<div className="absolute top-6 right-10 w-14 h-2 bg-emerald-400 -translate-x-1 rounded-sm z-20"></div>
<div className="absolute top-0 left-0 w-full h-20 bg-zinc-200 z-10" style={{clipPath: 'polygon(0 100%, 100% 60%, 100% 0, 0 0)'}}></div>
<div className="absolute top-4 left-4 z-20"><iconify-icon className="text-zinc-400 text-xl" icon="solar:leaf-linear"></iconify-icon></div>
<div className="w-full h-[80%] bg-white z-20 flex flex-col p-6 pt-8 relative">
<div className="tracking-tighter font-medium text-3xl text-zinc-950 mb-1">PROGULP</div>
<div className="text-sm font-medium text-zinc-500 uppercase tracking-tight mb-4">Soya • Almond • Pea</div>
<div className="absolute right-[-20px] top-[20%] text-zinc-100 opacity-50 pointer-events-none" style={{transform: 'rotate(15deg)'}}>
<svg fill="currentColor" height="120" viewbox="0 0 24 24" width="120"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-1 17.93c-3.95-.49-7-3.85-7-7.93 0-.62.08-1.21.21-1.79L9 15v1c0 1.1.9 2 2 2v1.93zm6.9-2.54c-.26-.81-1-1.39-1.9-1.39h-1v-3c0-.55-.45-1-1-1H8v-2h2c.55 0 1-.45 1-1V7h2c1.1 0 2-.9 2-2v-.41c2.93 1.19 5 4.06 5 7.41 0 2.08-.8 3.97-2.1 5.39z"></path></svg>
</div>
<div className="mt-auto w-[120%] -ml-[10%] h-48 bg-[#3E2723] p-8 flex flex-col justify-end text-white rounded-t-[3rem] relative overflow-hidden">
<div className="absolute top-4 right-8 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
<span className="text-emerald-400 text-sm font-medium uppercase tracking-tight mb-1">Chocolate Flavor</span>
<span className="text-3xl tracking-tighter font-medium leading-none mb-1">30g</span>
<span className="text-base font-normal opacity-90">Plant Protein</span>
<div className="absolute top-4 right-12 flex gap-1 text-white/20">
<iconify-icon className="text-xl" icon="solar:water-drop-linear"></iconify-icon>
</div>
<span className="absolute bottom-4 right-8 text-sm font-normal opacity-50">250ml</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] animate-on-scroll relative group" style={{transitionDelay: '100ms'}}>
<div className="w-full h-[420px] bg-zinc-100 rounded-[1.5rem] shadow-2xl flex flex-col justify-end overflow-hidden border border-black/10 relative transition-transform duration-500 group-hover:-translate-y-4">
<div className="absolute top-0 right-10 w-12 h-6 bg-emerald-500 rounded-t-lg z-20 border-b-2 border-emerald-600"></div>
<div className="absolute top-6 right-10 w-14 h-2 bg-emerald-400 -translate-x-1 rounded-sm z-20"></div>
<div className="absolute top-0 left-0 w-full h-20 bg-zinc-200 z-10" style={{clipPath: 'polygon(0 100%, 100% 60%, 100% 0, 0 0)'}}></div>
<div className="absolute top-4 left-4 z-20"><iconify-icon className="text-zinc-400 text-xl" icon="solar:leaf-linear"></iconify-icon></div>
<div className="w-full h-[80%] bg-white z-20 flex flex-col p-6 pt-8 relative">
<div className="tracking-tighter font-medium text-3xl text-zinc-950 mb-1">PROGULP</div>
<div className="text-sm font-medium text-zinc-500 uppercase tracking-tight mb-4">Soya • Almond • Pea</div>
<div className="absolute right-[-20px] top-[20%] text-zinc-100 opacity-50 pointer-events-none" style={{transform: 'rotate(-15deg)'}}>
<svg fill="currentColor" height="120" viewbox="0 0 24 24" width="120"><path d="M12 22C6.477 22 2 17.523 2 12S6.477 2 12 2s10 4.477 10 10-4.477 10-10 10zm-1-11v6h2v-6h-2zm0-4v2h2V7h-2z"></path></svg>
</div>
<div className="mt-auto w-[120%] -ml-[10%] h-48 bg-[#F5F5DC] p-8 flex flex-col justify-end text-zinc-900 rounded-t-[3rem] relative overflow-hidden">
<div className="absolute top-4 right-8 w-16 h-16 bg-black/5 rounded-full blur-xl"></div>
<span className="text-emerald-600 text-sm font-medium uppercase tracking-tight mb-1">Vanilla Flavor</span>
<span className="text-3xl tracking-tighter font-medium leading-none mb-1 text-zinc-950">30g</span>
<span className="text-base font-normal text-zinc-700">Plant Protein</span>
<span className="absolute bottom-4 right-8 text-sm font-normal text-zinc-500">250ml</span>
</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[280px] animate-on-scroll relative group" style={{transitionDelay: '200ms'}}>
<div className="w-full h-[420px] bg-zinc-100 rounded-[1.5rem] shadow-2xl flex flex-col justify-end overflow-hidden border border-black/10 relative transition-transform duration-500 group-hover:-translate-y-4">
<div className="absolute top-0 right-10 w-12 h-6 bg-emerald-500 rounded-t-lg z-20 border-b-2 border-emerald-600"></div>
<div className="absolute top-6 right-10 w-14 h-2 bg-emerald-400 -translate-x-1 rounded-sm z-20"></div>
<div className="absolute top-0 left-0 w-full h-20 bg-zinc-200 z-10" style={{clipPath: 'polygon(0 100%, 100% 60%, 100% 0, 0 0)'}}></div>
<div className="absolute top-4 left-4 z-20"><iconify-icon className="text-zinc-400 text-xl" icon="solar:leaf-linear"></iconify-icon></div>
<div className="w-full h-[80%] bg-white z-20 flex flex-col p-6 pt-8 relative">
<div className="tracking-tighter font-medium text-3xl text-zinc-950 mb-1">PROGULP</div>
<div className="text-sm font-medium text-zinc-500 uppercase tracking-tight mb-4">Soya • Almond • Pea</div>
<div className="absolute right-[-20px] top-[20%] text-zinc-100 opacity-50 pointer-events-none" style={{transform: 'rotate(45deg)'}}>
<svg fill="currentColor" height="120" viewbox="0 0 24 24" width="120"><circle cx="12" cy="12" r="10"></circle><path d="M12 6v12M6 12h12" stroke="white" strokeWidth="2"></path></svg>
</div>
<div className="mt-auto w-[120%] -ml-[10%] h-48 bg-[#5D4037] p-8 flex flex-col justify-end text-white rounded-t-[3rem] relative overflow-hidden">
<div className="absolute top-4 right-8 w-16 h-16 bg-white/5 rounded-full blur-xl"></div>
<span className="text-emerald-400 text-sm font-medium uppercase tracking-tight mb-1">Coffee Flavor</span>
<span className="text-3xl tracking-tighter font-medium leading-none mb-1">30g</span>
<span className="text-base font-normal opacity-90">Plant Protein</span>
<span className="absolute bottom-4 right-8 text-sm font-normal opacity-50">250ml</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Simple, Transparent Pricing</h2>
<p className="text-zinc-400 max-w-xl mx-auto mb-12">Choose the pack that fits your lifestyle. All flavors available.</p>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto items-stretch">

<div className="bg-zinc-900 rounded-2xl border border-white/5 p-8 shadow-sm hover:shadow-md transition flex flex-col h-full">
<h3 className="text-lg font-medium text-white mb-2">Single Bottle</h3>
<p className="text-4xl font-medium text-white mb-4">₹89</p>
<p className="text-sm text-zinc-400 mb-6">Perfect for trying one flavor.</p>
<ul className="text-sm text-zinc-300 space-y-2 mb-8 flex-1 text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 250ml ready‑to‑drink</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 30g plant protein</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Zero added sugar</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition text-center font-medium" href="#waitlist">Join Waitlist</a>
</div>

<div className="bg-zinc-900 rounded-2xl border-2 border-emerald-500 p-8 shadow-lg relative flex flex-col h-full">
<span className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-emerald-600 text-white text-xs font-semibold px-3 py-1 rounded-full whitespace-nowrap">Most Popular</span>
<h3 className="text-lg font-medium text-white mb-2">12‑Pack</h3>
<p className="text-4xl font-medium text-white mb-4">₹999</p>
<p className="text-sm text-zinc-400 mb-6">Just ₹83.25 per bottle.</p>
<ul className="text-sm text-zinc-300 space-y-2 mb-8 flex-1 text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 12 bottles, your choice of flavors</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Free shipping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Best value</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition text-center font-medium" href="#waitlist">Join Waitlist</a>
</div>

<div className="bg-zinc-900 rounded-2xl border border-white/5 p-8 shadow-sm hover:shadow-md transition flex flex-col h-full">
<h3 className="text-lg font-medium text-white mb-2">24‑Pack</h3>
<p className="text-4xl font-medium text-white mb-4">₹1799</p>
<p className="text-sm text-zinc-400 mb-6">Just ₹74.96 per bottle.</p>
<ul className="text-sm text-zinc-300 space-y-2 mb-8 flex-1 text-left">
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> 24 bottles, mix &amp; match</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Free shipping</li>
<li className="flex items-center gap-2"><iconify-icon className="text-emerald-400 text-lg" icon="solar:check-circle-linear"></iconify-icon> Bulk savings</li>
</ul>
<a className="block w-full py-2.5 px-4 bg-emerald-600 hover:bg-emerald-500 text-white rounded-full transition text-center font-medium" href="#waitlist">Join Waitlist</a>
</div>
</div>
<p className="text-sm text-zinc-500 mt-8">*Launch pricing subject to change. Join the waitlist for early‑access discounts.</p>
</div>
</section>


<section className="py-24 bg-zinc-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 text-center animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-16">Why This Matters</h2>
<div className="grid md:grid-cols-3 gap-12">
<div>
<div className="text-5xl md:text-6xl font-medium tracking-tighter text-emerald-400 mb-4">70%</div>
<p className="text-lg text-zinc-300 font-normal">of Indians are lactose intolerant, making dairy-based proteins unsuitable.</p>
</div>
<div>
<div className="text-5xl md:text-6xl font-medium tracking-tighter text-emerald-400 mb-4">73%</div>
<p className="text-lg text-zinc-300 font-normal">Urban Indians are protein deficient. A convenient solution is needed.</p>
</div>
<div>
<div className="text-5xl md:text-6xl font-medium tracking-tighter text-emerald-400 mb-4">Rapid</div>
<p className="text-lg text-zinc-300 font-normal">Growth in the ready-to-drink nutrition market as lifestyles get busier.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-5xl mx-auto">
<div className="md:p-12 flex flex-col md:flex-row gap-12 animate-on-scroll bg-zinc-900 border-white/5 border rounded-3xl pt-8 pr-8 pb-8 pl-8 gap-x-12 gap-y-12 items-center" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="w-32 h-32 md:w-48 md:h-48 shrink-0 rounded-2xl border border-emerald-500/30 shadow-[0_0_20px_rgba(16,185,129,0.15)] flex items-center justify-center overflow-hidden bg-zinc-800 relative">
<img alt="Mrs. Prishita Girdhar" className="w-full h-full object-cover" src="https://i.ibb.co/N6rK0y6m/Screenshot-2026-03-13-193150.png"/>
<div className="absolute inset-0 ring-1 ring-inset ring-white/10 rounded-2xl pointer-events-none"></div>
</div>
<div className="">
<h2 className="text-2xl md:text-3xl font-medium tracking-tight text-white mb-4">Why We Built ProGulp</h2>
<p className="text-xl text-zinc-400 font-normal leading-relaxed mb-6">
                    "I struggled to find convenient protein drinks that were clean and dairy-free. Most products on the market contained hidden sugar or caused digestive issues. I created ProGulp to deliver clean, plant-based protein in a format that fits into a busy lifestyle without compromising on ingredients."
                </p>
<div className="uppercase text-base font-medium text-emerald-400 tracking-tight">Ms. Prishita Girdhar<span className="text-zinc-500 font-normal normal-case">— Founder</span></div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-gray-900 pt-24 pb-24 relative" id="waitlist">
<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-[20%] -right-[10%] w-[70%] h-[70%] bg-green-900/30 rounded-full blur-[120px]"></div>
<div className="absolute -bottom-[20%] -left-[10%] w-[50%] h-[50%] bg-green-800/20 rounded-full blur-[100px]"></div>
</div>
<div className="z-10 text-center max-w-4xl mr-auto ml-auto pr-6 pl-6 relative">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4">Get Early Access to ProGulp</h2>
<p className="text-lg text-gray-400 mb-12">Join the waitlist to receive a 20% launch discount, early access to our
            first batch, and entry into our free sample draw.</p>

<div className="flex items-center justify-center gap-2 md:gap-4 mb-16" id="countdown-timer">
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="days">29</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Days</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="hours">12</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Hours</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="minutes">32</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Mins</span>
</div>
<div className="text-2xl text-gray-500 pb-6">:</div>
<div className="flex flex-col items-center">
<div className="w-16 h-16 md:w-20 md:h-20 bg-white/10 backdrop-blur-md rounded-2xl flex items-center justify-center text-2xl md:text-3xl font-medium tracking-tight border border-white/10 mb-2" id="seconds">07</div>
<span className="text-xs text-gray-400 uppercase tracking-widest">Secs</span>
</div>
</div>


<div className="md:p-8 text-left bg-white/5 max-w-md border-white/10 border rounded-3xl mr-auto ml-auto pt-6 pr-6 pb-6 pl-6 backdrop-blur-xl">

<div className="hidden flex-col items-center justify-center text-center py-8 gap-4" id="waitlist-success">
<div className="w-16 h-16 rounded-full bg-green-500/20 border border-green-500/30 flex items-center justify-center mb-2">
<iconify-icon className="text-4xl text-green-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white">You're on the list!</h3>
<p className="text-sm text-gray-400">We'll send your 20% launch discount and early access details to your
                    email.</p>
</div>

<div className="space-y-4" id="waitlist-form-container">
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Full Name</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" id="waitlist-name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-300 mb-1.5">Email Address</label>
<input className="w-full bg-white/5 border border-white/10 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-green-500 focus:ring-1 focus:ring-green-500 transition-colors" id="waitlist-email" placeholder="john@example.com" type="email"/>
</div>

<p className="hidden text-xs text-red-400 pt-1" id="waitlist-error">Please fill in both your name and a
                    valid email address.</p>
<button className="hover:bg-green-500 transition-all shadow-green-900/20 font-medium text-white bg-green-600 w-full rounded-xl pt-3.5 pr-4 pb-3.5 pl-4 shadow-lg flex items-center justify-center gap-2 mt-2 disabled:opacity-60 disabled:cursor-not-allowed" id="waitlist-submit-btn" onclick="handleWaitlistSubmit()" type="button">
<span id="waitlist-btn-text">Join the Waitlist</span>
<svg className="hidden animate-spin h-4 w-4 text-white" fill="none" id="waitlist-spinner" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
<path className="opacity-75" d="M4 12a8 8 0 018-8v8H4z" fill="currentColor"></path>
</svg>
</button>
</div>
</div>

</div>
</section>


<section className="py-24 max-w-3xl mx-auto px-6">
<div className="text-center mb-16 animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-white mb-4">Frequently Asked Questions</h2>
</div>
<div className="space-y-2 animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">What is ProGulp?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        ProGulp is a ready-to-drink vegan protein shake that delivers 30g of plant-based protein per bottle. It is designed for people who want convenient, clean nutrition without dairy or added sugar.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">How much protein does one bottle contain?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        Each 250 ml bottle of ProGulp contains 30g of plant protein, making it an ideal drink for post-workout recovery or daily protein intake.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">Is ProGulp lactose-free?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        Yes. ProGulp is 100% plant-based and contains no dairy, making it suitable for people who are lactose intolerant.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">Does ProGulp contain added sugar?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        No. ProGulp contains zero added sugar, so you can enjoy a high-protein drink without unnecessary sugar intake.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">What ingredients are used to make ProGulp protein?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        ProGulp uses a blend of soy protein, almond protein, and pea protein to deliver a balanced plant-based protein profile.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">Do I need to mix the drink before consuming?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        No mixing is required. ProGulp is a ready-to-drink protein beverage, so you can simply open the pack and enjoy it anytime.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">When is the best time to drink ProGulp?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        ProGulp can be consumed after workouts for muscle recovery, as a protein boost during the day, or as a quick nutritious drink when you're on the go.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">What flavors are available?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        ProGulp currently comes in three delicious flavors: Chocolate, Vanilla, and Coffee.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">When will ProGulp officially launch?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        ProGulp is currently in pre-launch stage. Join the early access waitlist to be notified when the product launches.
                    </p>
</div>
</div>
<div className="border border-white/5 bg-zinc-900/30 rounded-2xl overflow-hidden">
<button className="faq-btn w-full text-left px-6 py-5 flex items-center justify-between focus:outline-none">
<span className="text-lg font-medium text-zinc-200">Will there be a launch discount?</span>
<iconify-icon className="text-zinc-500 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="faq-content overflow-hidden transition-all duration-300 opacity-0" style={{maxHeight: '0'}}>
<p className="px-6 pb-5 text-base text-zinc-400 font-normal leading-relaxed">
                        Yes. Early subscribers will receive exclusive launch discounts and early product access.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 text-center border-t border-white/5 bg-zinc-900/20">
<div className="max-w-2xl mx-auto animate-on-scroll" style={{transition: 'opacity 0.7s cubic-bezier(0.16, 1, 0.3, 1), transform 0.7s cubic-bezier(0.16, 1, 0.3, 1)'}}>
<h2 className="text-4xl md:text-6xl font-medium tracking-tighter text-white mb-8">Be the First to Experience ProGulp</h2>
<a className="inline-flex px-8 py-4 bg-emerald-500 hover:bg-emerald-400 text-zinc-950 text-lg font-medium rounded-full transition-colors items-center justify-center gap-2" href="#waitlist">
                Join Early Access
                <iconify-icon className="text-xl" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</section>

<footer className="border-t border-white/5 bg-zinc-950 py-12 px-6">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-between gap-6">
<div className="tracking-tighter font-medium text-xl text-white">PROGULP</div>
<p className="text-base text-zinc-500 font-normal">© 2024 ProGulp. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="sr-only">Instagram</span>
<iconify-icon className="text-2xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="sr-only">LinkedIn</span>
<iconify-icon className="text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</a>
<a className="text-zinc-500 hover:text-white transition-colors" href="#">
<span className="sr-only">YouTube</span>
<iconify-icon className="text-2xl" icon="solar:play-circle-linear"></iconify-icon>
</a>
</div>
</div>
</footer>



    </>
  );
}
