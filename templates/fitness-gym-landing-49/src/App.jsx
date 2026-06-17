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



        // Navbar Blur & Style on Scroll
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 20) {
                navbar.classList.add('shadow-lg', 'bg-[#111827]/90');
                navbar.classList.remove('bg-[#111827]/70', 'border-white/5');
                navbar.classList.add('border-white/10');
            } else {
                navbar.classList.remove('shadow-lg', 'bg-[#111827]/90', 'border-white/10');
                navbar.classList.add('bg-[#111827]/70', 'border-white/5');
            }
        });

        // Gym Slider Logic
        const slider = document.getElementById('gym-slider');
        const slides = slider.children;
        const totalSlides = slides.length;
        const prevBtn = document.getElementById('slider-prev');
        const nextBtn = document.getElementById('slider-next');
        let currentSlide = 0;
        let slideInterval;

        function updateSlider() {
            slider.style.transform = `translateX(-${currentSlide * 100}%)`;
        }

        function nextSlide() {
            currentSlide = (currentSlide + 1) % totalSlides;
            updateSlider();
        }

        function prevSlide() {
            currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
            updateSlider();
        }

        nextBtn.addEventListener('click', () => {
            nextSlide();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevSlide();
            resetInterval();
        });

        function startInterval() {
            slideInterval = setInterval(nextSlide, 5000);
        }

        function resetInterval() {
            clearInterval(slideInterval);
            startInterval();
        }

        // Initialize auto-play
        startInterval();

        // Scroll Reveal Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-8', 'translate-y-12');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.scroll-anim').forEach((element) => {
            observer.observe(element);
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
      

<div className="fixed top-[-10%] left-[-10%] w-1/2 h-1/2 bg-[#3B82F6] rounded-full blur-[12rem] opacity-20 pointer-events-none z-0"></div>
<div className="fixed bottom-[-10%] right-[-10%] w-1/2 h-1/2 rounded-full blur-[12rem] opacity-10 pointer-events-none z-0 bg-blue-500"></div>

<nav className="fixed z-50 transition-all duration-300 w-full border-black/5 border-b top-0 backdrop-blur-2xl" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-base font-semibold tracking-[0.3em] uppercase text-black" href="#">Aura</a>

<div className="hidden md:flex items-center gap-8 text-xs text-[#E5E7EB]/70 font-medium">
<a className="transition-colors hover:text-black" href="#spaces">Spaces</a>
<a className="transition-colors hover:text-black" href="#memberships">Memberships</a>
<a className="transition-colors hover:text-black" href="#trainers">Trainers</a>
</div>

<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-xs font-semibold bg-[#3B82F6] rounded-full shadow-[0_0_15px_rgba(59,130,246,0.4)] transition-all hover:shadow-[0_0_25px_rgba(59,130,246,0.6)] text-black hover:bg-indigo-500" href="#memberships">
                Join Now
            </a>

<button className="md:hidden flex items-center text-black">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20 bg-indigo-500">

<div className="absolute inset-0 w-full h-full overflow-hidden">
<img alt="Premium Gym" className="absolute inset-0 w-full h-full object-cover opacity-30 mix-blend-overlay scale-105 animate-[pulse_20s_ease-in-out_infinite] duration-1000" src="https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&amp;w=2075&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#111827]/40 via-[#111827]/80 to-[#0A2540]"></div>
</div>
<div className="flex flex-col scroll-anim transition-all duration-1000 ease-out text-center max-w-5xl z-50 mr-auto ml-auto pr-6 pl-6 relative items-center">
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-r via-[#E5E7EB] to-[#3B82F6] mb-6 leading-tight drop-shadow-2xl from-black">
                Stronger Every Second.
            </h1>
<p className="md:text-2xl text-lg font-medium text-[#E5E7EB]/80 tracking-tight max-w-3xl mr-auto mb-12 ml-auto">
                The future of fitness starts here.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-6">
<a className="w-full sm:w-auto px-8 py-4 rounded-full bg-[#3B82F6] text-sm font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_30px_rgba(59,130,246,0.5)] text-black hover:bg-indigo-500" href="#memberships">
                    Join the Gym
                </a>
<a className="w-full sm:w-auto px-8 py-4 rounded-full border text-sm font-semibold backdrop-blur-xl transition-colors flex items-center justify-center gap-2 group bg-black/5 border-black/10 text-black hover:bg-black/10" href="#spaces">
                    Explore Gym
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="md:py-40 overflow-hidden z-10 pt-24 pb-24 relative" id="spaces">
<div className="max-w-7xl mx-auto px-6 space-y-8 md:space-y-12">
<div className="text-center mb-24 scroll-anim transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-black">Engineered for Performance.</h2>
<p className="text-lg text-[#3B82F6] font-medium tracking-tight">Precision built. Uncompromising luxury.</p>
</div>

<div className="relative backdrop-blur-2xl rounded-[2rem] overflow-hidden shadow-[0_8px_32px_rgba(0,0,0,0.5)] border scroll-anim transition-all duration-1000 ease-out group bg-black/5 border-black/10">
<div className="absolute inset-0 bg-gradient-to-b to-transparent from-black/5"></div>
<div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-black">High-End Machinery</h3>
<p className="text-sm md:text-base text-[#E5E7EB]/70 max-w-xl mx-auto mb-12">Next-generation 3D-mapped treadmills and frictionless cable systems with interactive panoramic metrics.</p>
<div className="relative w-full max-w-4xl h-[450px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-black/10">
<img alt="High End Equipment" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-125 saturate-150" src="https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-transparent to-transparent"></div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="relative rounded-[2rem] overflow-hidden shadow-2xl border border-[#3B82F6]/30 scroll-anim transition-all duration-1000 ease-out delay-100 group bg-indigo-500">
<div className="absolute inset-0 bg-gradient-to-br from-[#3B82F6]/10 to-transparent"></div>
<div className="p-12 text-center flex flex-col items-center z-10 relative">
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter mb-4 text-black">The Arena</h3>
<p className="text-sm text-[#E5E7EB]/80 mb-10">A massive, neon-lit metabolic conditioning zone. Rigs, turf, and limitless potential.</p>
<div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-[0_0_20px_rgba(59,130,246,0.3)]">
<img alt="CrossFit Arena" className="absolute inset-0 w-full h-full object-cover group-hover:scale-110 transition-transform duration-[1.5s] ease-out filter contrast-125" src="https://images.unsplash.com/photo-1556817411-31ae72fa3ea0?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#3B82F6] mix-blend-overlay opacity-20 group-hover:opacity-40 transition-opacity duration-700"></div>
</div>
</div>
</div>

<div className="relative bg-[#0A2540] rounded-[2rem] overflow-hidden border scroll-anim transition-all duration-1000 ease-out delay-200 group border-black/5">
<div className="p-12 text-center flex flex-col items-center z-10 relative">
<h3 className="text-2xl md:text-4xl font-semibold tracking-tighter mb-4 text-black">Pure Strength</h3>
<p className="text-sm text-[#E5E7EB]/70 mb-10">Dedicated weightlifting platforms. Precision-milled plates and competition-grade racks.</p>
<div className="relative w-full h-[350px] rounded-xl overflow-hidden shadow-lg">
<img alt="Strength Training" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out filter contrast-150 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>

<div className="relative bg-[#E5E7EB] rounded-[2rem] overflow-hidden shadow-[0_8px_30px_rgba(255,255,255,0.1)] border scroll-anim transition-all duration-1000 ease-out group mt-12 border-black/20">
<div className="relative z-10 p-12 md:p-20 text-center flex flex-col items-center">
<h3 className="text-3xl md:text-5xl font-semibold tracking-tighter text-[#111827] mb-4">Luxury Recovery</h3>
<p className="text-sm md:text-base text-[#111827]/70 max-w-xl mx-auto mb-12 font-medium">Unwind in our exclusive lounge featuring designer furniture, hyperbaric oxygen therapy, and premium recovery saunas.</p>
<div className="relative w-full max-w-5xl h-[400px] rounded-2xl overflow-hidden shadow-2xl ring-1 ring-[#111827]/10">
<img alt="Luxury Lounge Furniture" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1616486029423-aaa4789e8c9a?q=80&amp;w=2064&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full h-[80vh] min-h-[600px] overflow-hidden border-y border-black/5 bg-indigo-500">

<div className="flex w-full h-full transition-transform duration-[1.2s] ease-[cubic-bezier(0.25,1,0.5,1)]" id="gym-slider" style={{transform: 'translateX(0%)'}}>
<div className="flex-none w-full h-full relative">
<img alt="Modern Gym Floor" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1598971639058-fab3c3109a00?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#0A2540] via-[#111827]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex-none w-full h-full relative">
<img alt="Neon CrossFit Workout" className="absolute inset-0 w-full h-full object-cover opacity-60 filter contrast-125" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#111827]/40 to-transparent"></div>
</div>
<div className="flex-none w-full h-full relative">
<img alt="Heavy Weights" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1638202993928-7267aad84c31?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#111827]/40 to-transparent"></div>
</div>
<div className="flex-none w-full h-full relative">
<img alt="Luxury Lounge" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1606902965551-dce093cda6e7?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#111827]/40 to-transparent"></div>
</div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center pointer-events-none z-10 px-6">
<h2 className="text-4xl md:text-7xl font-semibold tracking-tighter mb-4 drop-shadow-2xl text-black">
                Space to perform.
            </h2>
</div>

<div className="absolute bottom-12 left-0 right-0 flex justify-center gap-6 z-20">
<button className="w-12 h-12 rounded-full backdrop-blur-2xl border flex items-center justify-center hover:text-[#111827] transition-all duration-300 bg-black/10 border-black/20 text-black hover:bg-black" id="slider-prev">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full backdrop-blur-2xl border flex items-center justify-center hover:text-[#111827] transition-all duration-300 bg-black/10 border-black/20 text-black hover:bg-black" id="slider-next">
<iconify-icon icon="solar:alt-arrow-right-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</section>

<section className="py-24 md:py-40 relative z-10" id="memberships">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 scroll-anim transition-all duration-1000 ease-out">
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter mb-4 text-black">Choose your tier.</h2>
<p className="text-lg text-[#E5E7EB]/70 tracking-tight">Flexible plans designed for your commitment level.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-5xl mx-auto">

<div className="backdrop-blur-xl rounded-[2rem] p-10 border scroll-anim transition-all duration-1000 ease-out text-center transition-colors bg-black/5 border-black/10 hover:bg-black/10">
<h3 className="text-xl font-semibold tracking-tight mb-2 text-black">Starter</h3>
<div className="text-4xl font-semibold tracking-tighter mb-8 text-black">$49<span className="text-sm text-[#E5E7EB]/50 font-medium">/mo</span></div>
<ul className="space-y-4 text-sm text-[#E5E7EB]/80 mb-10 text-left font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> Strength &amp; Cardio access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> CrossFit Arena (Off-peak)</li>
<li className="flex items-center gap-3 text-black/30"><iconify-icon className="text-xl text-black/20" icon="solar:close-circle-linear"></iconify-icon> Luxury Lounge access</li>
<li className="flex items-center gap-3 text-black/30"><iconify-icon className="text-xl text-black/20" icon="solar:close-circle-linear"></iconify-icon> Group classes</li>
</ul>
<button className="w-full py-3 rounded-full border text-sm font-semibold transition-colors bg-black/10 border-black/20 text-black hover:bg-black/20">Select Starter</button>
</div>

<div className="rounded-[2rem] p-12 border border-[#3B82F6]/50 shadow-[0_0_40px_rgba(59,130,246,0.2)] scroll-anim transition-all duration-1000 ease-out delay-100 text-center relative scale-105 group hover:shadow-[0_0_60px_rgba(59,130,246,0.4)] bg-indigo-500">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-[#3B82F6] shadow-[0_0_15px_rgba(59,130,246,0.8)] text-[10px] font-bold px-4 py-1.5 rounded-full uppercase tracking-widest text-black">Most Popular</div>
<h3 className="text-xl font-semibold tracking-tight text-[#3B82F6] mb-2">Pro</h3>
<div className="text-5xl font-semibold tracking-tighter mb-8 text-black">$89<span className="text-sm text-[#E5E7EB]/50 font-medium">/mo</span></div>
<ul className="space-y-4 text-sm text-[#E5E7EB] mb-10 text-left font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:check-circle-bold"></iconify-icon> 24/7 All-Area Access</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:check-circle-bold"></iconify-icon> Unlimited CrossFit Arena</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:check-circle-bold"></iconify-icon> Luxury Lounge &amp; Sauna</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl drop-shadow-[0_0_8px_rgba(59,130,246,0.8)]" icon="solar:check-circle-bold"></iconify-icon> Guest pass (1/mo)</li>
</ul>
<button className="w-full py-4 rounded-full bg-[#3B82F6] text-sm font-semibold transition-colors shadow-[0_0_20px_rgba(59,130,246,0.5)] text-black hover:bg-indigo-600">Select Pro</button>
</div>

<div className="backdrop-blur-xl rounded-[2rem] p-10 border scroll-anim transition-all duration-1000 ease-out delay-200 text-center transition-colors bg-black/5 border-black/10 hover:bg-black/10">
<h3 className="text-xl font-semibold tracking-tight mb-2 text-black">Elite</h3>
<div className="text-4xl font-semibold tracking-tighter mb-8 text-black">$149<span className="text-sm text-[#E5E7EB]/50 font-medium">/mo</span></div>
<ul className="space-y-4 text-sm text-[#E5E7EB]/80 mb-10 text-left font-medium">
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> All Pro features</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> 2 PT Sessions / month</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> Dedicated VIP locker</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#3B82F6] text-xl" icon="solar:check-circle-linear"></iconify-icon> Unlimited guest passes</li>
</ul>
<button className="w-full py-3 rounded-full border text-sm font-semibold transition-colors bg-black/10 border-black/20 text-black hover:bg-black/20">Select Elite</button>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 border-y relative z-10 border-black/5 bg-indigo-500" id="trainers">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 scroll-anim transition-all duration-1000 ease-out">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter mb-4 text-black">Meet the Strength Behind Your Success.</h2>
<p className="text-lg text-[#E5E7EB]/70 tracking-tight">World-class coaching to push your limits safely.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative overflow-hidden rounded-[2rem] bg-[#0A2540] scroll-anim transition-all duration-1000 ease-out border hover:border-[#3B82F6]/50 border-black/5">
<img alt="Trainer" className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-125 saturate-50 group-hover:saturate-100" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent flex flex-col justify-end p-8">
<h4 className="text-2xl font-semibold tracking-tight mb-1 text-black">Marcus Thorne</h4>
<p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest drop-shadow-md">Strength &amp; Power</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] bg-[#0A2540] scroll-anim transition-all duration-1000 ease-out delay-100 border hover:border-[#3B82F6]/50 border-black/5">
<img alt="Trainer" className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-125 saturate-50 group-hover:saturate-100" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent flex flex-col justify-end p-8">
<h4 className="text-2xl font-semibold tracking-tight mb-1 text-black">Elena Rostova</h4>
<p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest drop-shadow-md">CrossFit Elite</p>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2rem] bg-[#0A2540] scroll-anim transition-all duration-1000 ease-out delay-200 border hover:border-[#3B82F6]/50 border-black/5">
<img alt="Trainer" className="w-full h-[450px] object-cover transition-transform duration-1000 group-hover:scale-110 filter contrast-125 saturate-50 group-hover:saturate-100" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A2540] via-[#0A2540]/40 to-transparent flex flex-col justify-end p-8">
<h4 className="text-2xl font-semibold tracking-tight mb-1 text-black">David Kim</h4>
<p className="text-xs font-semibold text-[#3B82F6] uppercase tracking-widest drop-shadow-md">Hypertrophy Specialist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0A2540] relative z-10">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tighter text-center mb-16 scroll-anim transition-all duration-1000 ease-out text-black">Real Results. Real Athletes.</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="backdrop-blur-md p-10 rounded-[2rem] border scroll-anim transition-all duration-1000 ease-out transition-colors bg-black/5 border-black/10 hover:bg-black/10">
<div className="flex gap-1 text-[#3B82F6] mb-6 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-[#E5E7EB]/90 mb-8 leading-relaxed font-medium">"The strength training area is pristine. It feels like training in a private facility designed for pro athletes. The attention to detail is unmatched."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-semibold border-black/20 text-black bg-indigo-500">JR</div>
<div>
<h5 className="text-sm font-semibold text-black">James R.</h5>
<p className="text-xs text-[#E5E7EB]/60">Pro Member</p>
</div>
</div>
</div>
<div className="backdrop-blur-md p-10 rounded-[2rem] border scroll-anim transition-all duration-1000 ease-out delay-100 transition-colors bg-black/5 border-black/10 hover:bg-black/10">
<div className="flex gap-1 text-[#3B82F6] mb-6 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-[#E5E7EB]/90 mb-8 leading-relaxed font-medium">"Joining Elite was the best decision. The CrossFit arena is huge and energetic, and the luxury recovery lounge after a heavy session is phenomenal."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-semibold border-black/20 text-black bg-indigo-500">SC</div>
<div>
<h5 className="text-sm font-semibold text-black">Sarah C.</h5>
<p className="text-xs text-[#E5E7EB]/60">Elite Member</p>
</div>
</div>
</div>
<div className="backdrop-blur-md p-10 rounded-[2rem] border scroll-anim transition-all duration-1000 ease-out delay-200 transition-colors bg-black/5 border-black/10 hover:bg-black/10">
<div className="flex gap-1 text-[#3B82F6] mb-6 drop-shadow-[0_0_5px_rgba(59,130,246,0.8)]">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-base text-[#E5E7EB]/90 mb-8 leading-relaxed font-medium">"Cleanest gym I've ever been to. The contrasting vibes from the intense neon CrossFit zone to the peaceful luxury lounge is just brilliant."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full border flex items-center justify-center text-xs font-semibold border-black/20 text-black bg-indigo-500">MW</div>
<div>
<h5 className="text-sm font-semibold text-black">Mike W.</h5>
<p className="text-xs text-[#E5E7EB]/60">Pro Member</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-40 overflow-hidden text-center z-10 border-t border-black/5 bg-indigo-500">
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-3xl mx-auto px-6 scroll-anim transition-all duration-1000 ease-out">
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6 drop-shadow-xl text-black">Your Strongest Self Starts Today.</h2>
<p className="text-lg text-[#E5E7EB]/70 mb-10 font-medium">Step into the future of fitness. Experience unparalleled performance and luxury.</p>
<a className="inline-flex items-center justify-center px-10 py-5 rounded-full bg-[#3B82F6] text-base font-semibold transition-all hover:scale-105 active:scale-95 shadow-[0_0_40px_rgba(59,130,246,0.6)] text-black hover:bg-indigo-600" href="#memberships">
                Join the Gym
            </a>
</div>
</section>

<footer className="bg-[#0A2540] z-50 border-black/10 border-t pt-20 pb-10 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<span className="text-xl font-semibold tracking-[0.3em] uppercase mb-4 block text-black">Aura</span>
<p className="text-sm text-[#E5E7EB]/60 max-w-xs mb-8 leading-relaxed font-medium">Premium fitness facilities engineered for modern performance. Elevate your baseline.</p>
<div className="flex gap-5 text-black/50">
<a className="hover:text-[#3B82F6] transition-colors" href="#"><iconify-icon icon="solar:twitter-linear" strokeWidth="1.5" width="24"></iconify-icon></a>
<a className="hover:text-[#3B82F6] transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" strokeWidth="1.5" width="24"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-black">Membership</h4>
<ul className="space-y-4 text-sm text-[#E5E7EB]/60 font-medium">
<li><a className="transition-colors hover:text-black" href="#">Plans</a></li>
<li><a className="transition-colors hover:text-black" href="#">Corporate Rates</a></li>
<li><a className="transition-colors hover:text-black" href="#">Guest Passes</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-black">Trainers &amp; Classes</h4>
<ul className="space-y-4 text-sm text-[#E5E7EB]/60 font-medium">
<li><a className="transition-colors hover:text-black" href="#">Our Team</a></li>
<li><a className="transition-colors hover:text-black" href="#">CrossFit Arena</a></li>
<li><a className="transition-colors hover:text-black" href="#">Personal Training</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-wider uppercase mb-4 text-black">Contact</h4>
<ul className="space-y-4 text-sm text-[#E5E7EB]/60 font-medium">
<li><a className="transition-colors hover:text-black" href="#">Locations</a></li>
<li><a className="transition-colors hover:text-black" href="#">Support</a></li>
<li><a className="transition-colors hover:text-black" href="#">Careers</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t text-xs text-[#E5E7EB]/50 font-medium border-black/10">
<p>© 2024 Aura Fitness. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="transition-colors hover:text-black" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-black" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
