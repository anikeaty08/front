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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const observerOptions = {
          threshold: 0.1,
          rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  // Once animated, no need to observe anymore
                  // observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-item').forEach(el => {
          observer.observe(el);
      });
    


      (function() {
        const testimonials = [
          {
            quote: "fitlux has completely changed my training. The form correction is like having a private coach in my pocket 24/7.",
            name: "Sarah Jenkins",
            role: "Elite Marathon Runner",
            img: "https://images.unsplash.com/photo-1594381898411-c46ed8a2ad75?q=80&w=1000&auto=format&fit=crop"
          },
          {
            quote: "The real-time feedback is incredible. I've corrected my squat form and seen a 20% increase in power output.",
            name: "James Chen",
            role: "Professional Athlete",
            img: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=1000&auto=format&fit=crop"
          },
          {
            quote: "Finally, a fitness app that actually understands mobility. My recovery has never been better and I feel stronger.",
            name: "Amara Okafor",
            role: "Yoga & Mobility Instructor",
            img: "https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&w=1000&auto=format&fit=crop"
          }
        ];
        let currentIndex = 0;
        const imgEl = document.getElementById('testimonial-img');
        const quoteEl = document.getElementById('testimonial-quote');
        const nameEl = document.getElementById('testimonial-name');
        const roleEl = document.getElementById('testimonial-role');

        function update(index) {
          const t = testimonials[index];
          if(imgEl && quoteEl && nameEl && roleEl) {
            imgEl.style.opacity = '0';
            imgEl.style.transform = 'scale(0.95) blur(4px)';
            quoteEl.style.opacity = '0';
            quoteEl.style.transform = 'translateY(10px)';

            setTimeout(() => {
              imgEl.src = t.img;
              quoteEl.innerText = '"' + t.quote + '"';
              nameEl.innerText = t.name;
              roleEl.innerText = t.role;

              imgEl.style.opacity = '1';
              imgEl.style.transform = 'scale(1) blur(0)';
              quoteEl.style.opacity = '1';
              quoteEl.style.transform = 'translateY(0)';
            }, 300);
          }
        }

        window.nextTestimonial = function() {
          currentIndex = (currentIndex + 1) % testimonials.length;
          update(currentIndex);
        };
        window.prevTestimonial = function() {
          currentIndex = (currentIndex - 1 + testimonials.length) % testimonials.length;
          update(currentIndex);
        };
      })();
    


      (function() {
        const btn = document.getElementById('mobile-menu-btn');
        const close = document.getElementById('mobile-menu-close');
        const menu = document.getElementById('mobile-menu');

        if (btn && close && menu) {
          btn.addEventListener('click', () => {
            menu.classList.remove('translate-x-full');
            document.body.style.overflow = 'hidden';
          });

          close.addEventListener('click', () => {
            menu.classList.add('translate-x-full');
            document.body.style.overflow = '';
          });

          // Close menu on link click
          menu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
              menu.classList.add('translate-x-full');
              document.body.style.overflow = '';
            });
          });
        }
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
      

<nav className="sticky top-0 z-50 w-full bg-[#fdfbf7]/80 backdrop-blur-md border-b border-slate-200/40 transition-all duration-300">
<div className="sm:px-6 lg:px-8 flex reveal-item max-w-screen-2xl mr-auto ml-auto pt-4 pr-4 pb-4 pl-4 items-center justify-between visible">
<div className="flex items-center">
<a className="text-xl font-medium tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="text-[#7ca982]" icon="solar:star-ring-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
            fitlux
          </a>
</div>
<div className="hidden md:flex gap-1 bg-white/50 border-slate-100 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-md gap-x-1 gap-y-1 items-center">
<a className="px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-medium hover:bg-slate-50 transition-colors" href="#">
            Home
          </a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            About
          </a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Programs
          </a>
<a className="px-4 py-1.5 rounded-full text-xs font-medium text-slate-600 hover:text-slate-900 transition-colors" href="#">
            Community
          </a>
</div>
<div className="flex items-center gap-2">
<button aria-label="Open menu" className="md:hidden flex items-center text-slate-900 p-1.5 focus:outline-none transition-colors hover:bg-slate-100 rounded-full" id="mobile-menu-btn">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
<button className="group flex transition-all duration-300 text-white bg-[#7ca982] hover:bg-[#6b9671] rounded-full pt-2.5 pr-5 pb-2.5 pl-5 relative shadow-[0_8px_30px_rgba(124,169,130,0.2),0_0_0_1px_rgba(124,169,130,0.1)] hover:shadow-[0_8px_30px_rgba(124,169,130,0.35),0_0_0_1px_rgba(124,169,130,0.2)] gap-x-2 items-center hidden sm:flex">
<span className="text-xs font-medium tracking-tight">
              Start Free Trial
            </span>
<iconify-icon className="w-4 h-4 text-white/90 group-hover:translate-x-1 transition-transform duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</nav>
<div className="fixed inset-0 z-[60] bg-[#fdfbf7] transform translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] md:hidden" id="mobile-menu">
<div className="flex flex-col h-full p-6">
<div className="flex justify-between items-center mb-16">
<a className="text-xl font-medium tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="text-[#7ca982]" icon="solar:star-ring-linear" style={{fontSize: '1.5rem'}}></iconify-icon>
            fitlux
          </a>
<button className="p-2 text-slate-900 hover:bg-slate-100 rounded-full transition-colors" id="mobile-menu-close">
<iconify-icon height="24" icon="lucide:x" width="24"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-8">
<a className="text-3xl font-normal text-slate-900 hover:text-[#7ca982] transition-colors tracking-tight" href="#">
            Home
          </a>
<a className="text-3xl font-normal text-slate-900 hover:text-[#7ca982] transition-colors tracking-tight" href="#">
            About
          </a>
<a className="text-3xl font-normal text-slate-900 hover:text-[#7ca982] transition-colors tracking-tight" href="#">
            Programs
          </a>
<a className="text-3xl font-normal text-slate-900 hover:text-[#7ca982] transition-colors tracking-tight" href="#">
            Community
          </a>
</div>
<div className="mt-auto pb-8">
<button className="w-full flex justify-center items-center transition-all duration-300 text-white bg-[#7ca982] hover:bg-[#6b9671] rounded-full py-4 shadow-[0_8px_30px_rgba(124,169,130,0.2)] gap-3">
<span className="text-sm font-medium tracking-tight">
              Start Free Trial
            </span>
<iconify-icon className="w-5 h-5" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="max-w-[98%] mx-auto px-2 reveal-item visible" style={{animationDelay: '0.2s'}}>
<div className="relative w-full h-[600px] md:h-[780px] rounded-[2.5rem] overflow-hidden shadow-2xl shadow-slate-200/50">
<img alt="Athletes" className="absolute inset-0 w-full h-full object-cover" src="https://glorioussport.com/wp-content/uploads/2024/11/Investigative-Run-Clubs-Web-Assets9.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/30 to-black/80"></div>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-4 pt-20">
<span className="reveal-item visible bg-white/10 backdrop-blur-md border border-white/20 text-white px-4 py-1 rounded-full text-[10px] uppercase tracking-widest mb-6" style={{animationDelay: '0.4s'}}>
            Real-time Motion Intelligence
          </span>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-normal text-white tracking-tight leading-[1.05] mb-6 max-w-4xl mx-auto">
<span className="animate-word" style={{animationDelay: '0.5s'}}>
              Real-Time
            </span>
<span className="animate-word" style={{animationDelay: '0.6s'}}>
              Coaching.
            </span>
<br/>
<span className="animate-word" style={{animationDelay: '0.7s'}}>Real</span>
<span className="animate-word italic" style={{animationDelay: '0.8s'}}>
              Progress.
            </span>
</h1>
<p className="text-sm md:text-lg text-white/90 max-w-xl mx-auto leading-relaxed mb-10 font-light reveal-item visible" style={{animationDelay: '1.1s'}}>
            The only digital coach that watches you move. Get instant
            biomechanical feedback and plans that adapt to your progress daily.
          </p>
<div className="flex flex-col sm:flex-row gap-4 items-center sm:justify-center w-full px-4 reveal-item visible" style={{animationDelay: '1.2s'}}>
<button className="group flex gap-4 hover:shadow-[0_8px_30px_rgba(124,169,130,0.35),0_0_0_1px_rgba(124,169,130,0.2)] transition-all duration-300 text-white bg-[#7ca982] hover:bg-[#6b9671] rounded-full pt-3.5 pr-8 pb-3.5 pl-8 relative shadow-[0_8px_30px_rgba(124,169,130,0.2),0_0_0_1px_rgba(124,169,130,0.1)] gap-x-4 gap-y-4 items-center">
<span className="text-sm font-medium text-white tracking-tight">
                Start Free Trial
              </span>
<iconify-icon className="w-5 h-5 text-white/90 group-hover:translate-x-1 transition-transform duration-300" icon="lucide:arrow-right"></iconify-icon>
</button>
<a className="hover:bg-white/20 transition-colors flex items-center gap-2 text-xs font-medium text-white bg-white/10 border-white/30 border rounded-full pt-3.5 pr-8 pb-3.5 pl-8 backdrop-blur-md" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
              Watch how it works
            </a>
</div>
</div>

<div className="absolute bottom-10 left-10 hidden md:flex items-center gap-4 bg-white/10 backdrop-blur-xl p-2 pr-6 rounded-full border border-white/10 reveal-item visible" style={{animationDelay: '1.4s'}}>
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#7ca982] object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#7ca982] object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-[#7ca982] bg-slate-800 flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:play-linear"></iconify-icon>
</div>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-[10px] font-medium leading-tight">
              14k+ Sessions active now
            </span>
<span className="text-white/70 text-[10px] leading-tight">
              Global AI network
            </span>
</div>
</div>
</div>
</div>

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32 reveal-item">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start stagger-container">
<div className="lg:col-span-3">
<span className="inline-block text-[10px] uppercase font-medium text-[#0369a1] tracking-wider bg-[#e0f2fe] rounded-full pt-1.5 pr-4 pb-1.5 pl-4">
            Our Philosophy
          </span>
</div>
<div className="lg:col-span-9">
<h2 className="text-2xl md:text-4xl font-normal leading-tight tracking-tight text-slate-900 max-w-4xl">
            Fitness isn't one-size-fits-all. fitlux uses
            <span className="text-[#7ca982]">computer vision</span>
            to analyze your unique mobility, strength levels, and fatigue in
            real-time to build the ultimate athletic version of yourself.
          </h2>
</div>
</div>
</section>

<section className="max-w-screen-xl mr-auto ml-auto pr-6 pb-24 pl-6 reveal-item">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 stagger-container">

<div className="group relative bg-[#0f172a] rounded-[2.5rem] p-8 h-[520px] flex flex-col justify-between overflow-hidden shadow-xl reveal-item">
<div className="relative z-10">
<div className="flex items-center gap-2.5 mb-5 bg-white/[0.03] border border-white/[0.08] w-fit px-3 py-1.5 rounded-full backdrop-blur-md">
<div className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ca982] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#7ca982]"></span>
</div>
<span className="text-[10px] font-medium text-white/50 uppercase tracking-[0.15em]">
                Neural Engine Active
              </span>
</div>
<h3 className="text-white text-xl md:text-2xl font-normal leading-snug tracking-tight mb-4">
              Real-time pose tracking ensures
              <span className="text-[#7ca982]">zero injury risk.</span>
              Our AI identifies deviations in your form instantly.
            </h3>
</div>
<div className="relative z-10 flex items-center gap-4 bg-white/5 p-4 rounded-3xl border border-white/10 backdrop-blur-md">
<div className="w-10 h-6 bg-[#7ca982] rounded-full p-1 cursor-pointer flex items-center">
<div className="bg-white w-4 h-4 rounded-full shadow-lg translate-x-4"></div>
</div>
<div className="flex flex-col">
<span className="text-white text-xs font-medium">
                Auto-Correction
              </span>
<span className="text-slate-400 text-[10px]">
                Enabled via Neural Engine
              </span>
</div>
</div>
<div className="opacity-20 absolute inset-0" style={{backgroundImage: 'radial-gradient(#7ca982 0.5px, transparent 0.5px)', backgroundSize: '20px 20px'}}></div>
</div>

<div className="relative rounded-[2.5rem] overflow-hidden h-[520px] group shadow-xl reveal-item">
<img alt="Mindful AI" className="absolute inset-0 w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent"></div>
<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="backdrop-blur-xl bg-white/10 border border-white/20 text-white px-6 py-3 rounded-full text-xs font-medium tracking-wide">
              Adaptive Intensity Sync
            </div>
</div>
<div className="absolute bottom-8 left-8 right-8">
<p className="text-white/80 text-xs font-light">
              fitlux syncs with your heart rate to adjust rep counts in the
              middle of a set.
            </p>
</div>
</div>

<div className="flex flex-col reveal-item bg-white h-[520px] border-slate-100 border rounded-[2.5rem] pt-8 pr-8 pb-8 pl-8 shadow-sm justify-between">
<div className="">
<h3 className="text-5xl md:text-6xl font-medium tracking-tight text-slate-900 mb-2">
              99.4%
            </h3>
<p className="text-[#7ca982] font-medium text-sm mb-4">
              Precision Accuracy
            </p>
<p className="text-slate-500 text-xs leading-relaxed mb-10 max-w-[200px]">
              Benchmarked against elite Olympic physiotherapists.
            </p>
</div>
<div className="space-y-6">
<div className="flex flex-col gap-2">
<div className="flex text-[10px] uppercase font-normal text-slate-500 tracking-widest items-center justify-between">
<span>Mobility</span>
<span className="text-slate-900">88%</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-1 rounded-full bg-[#7ca982]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#7ca982]"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-100"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-[10px] font-normal text-slate-500 uppercase tracking-widest">
<span>Symmetry</span>
<span className="text-slate-900">92%</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-1 rounded-full bg-[#e0f2fe]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#e0f2fe]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#e0f2fe]"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-[10px] font-normal text-slate-500 uppercase tracking-widest">
<span>Stability</span>
<span className="text-slate-900">95%</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-1 rounded-full bg-[#7ca982]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#7ca982]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#7ca982]"></div>
</div>
</div>
<div className="flex flex-col gap-2">
<div className="flex justify-between items-center text-[10px] font-normal text-slate-500 uppercase tracking-widest">
<span>Power</span>
<span className="text-slate-900">74%</span>
</div>
<div className="flex gap-1">
<div className="h-1.5 flex-1 rounded-full bg-[#e0f2fe]"></div>
<div className="h-1.5 flex-1 rounded-full bg-[#e0f2fe]"></div>
<div className="h-1.5 flex-1 rounded-full bg-slate-100"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-24 md:py-32 reveal-item">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center stagger-container">
<div className="lg:col-span-4 flex flex-col justify-between items-center lg:items-start text-center lg:text-left reveal-item">
<div className="">
<span className="inline-block bg-[#f1f5f2] border border-slate-100 rounded-full px-4 py-1.5 text-[10px] font-medium text-[#5d7e62] mb-8 tracking-widest uppercase mx-auto lg:mx-0">
              AI Programs
            </span>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight text-slate-900 leading-snug mb-8">
              From high-intensity metabolic conditioning to mindful restorative
              yoga.
            </h2>
</div>
<a className="inline-flex items-center gap-2 bg-slate-900 text-white px-6 py-3 rounded-full text-xs font-medium hover:bg-slate-800 transition-colors" href="#">
            View all programs
            <iconify-icon className="text-slate-400" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-2 gap-6 reveal-item">
<div className="relative h-[440px] rounded-[2.5rem] overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2669&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<p className="text-lg font-medium leading-tight mb-2">
                Hyper-personalized HIIT that hits your target every time.
              </p>
</div>
</div>
<div className="relative h-[440px] rounded-[2.5rem] overflow-hidden group shadow-lg">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019613454-1cb2f99b2d8b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#7ca982]/60 to-transparent"></div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<p className="text-lg font-medium leading-tight mb-2">
                Core Intelligence and stability redefined by AI.
              </p>
</div>
</div>
</div>
</div>
</section>
<section className="md:py-32 reveal-item max-w-screen-xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="flex flex-col md:p-16 overflow-hidden bg-[#0f172a] border-white/10 border rounded-[3rem] pt-8 pr-8 pb-8 pl-8 relative shadow-2xl gap-x-y-16 gap-y-16">

<div className="pointer-events-none bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-[#1e293b] via-[#0f172a] to-[#0f172a] absolute top-0 right-0 bottom-0 left-0 z-0"></div>
<div className="z-0 opacity-20 absolute inset-0 pointer-events-none" style={{backgroundImage: 'radial-gradient(circle, rgba(255, 255, 255, 0.15) 1px, transparent 1px)', backgroundSize: 'clamp(24px, 3vw, 40px) clamp(24px, 3vw, 40px)', WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)', maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)'}}></div>

<div className="relative z-10 flex flex-col md:flex-row md:items-end gap-8 w-full justify-between stagger-container">
<div className="flex flex-col gap-6 max-w-2xl reveal-item">
<div className="flex gap-3 border-white/[0.08] w-fit border rounded-full pt-1.5 pr-4 pb-1.5 pl-4 backdrop-blur-md gap-x-3 gap-y-3 items-center">
<span className="uppercase text-[10px] font-medium text-slate-400 tracking-widest">
                Community
              </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-normal text-white tracking-tight leading-[1.1] reveal-item">
              Loved by athletes.
              <span className="text-slate-500">Trusted by coaches.</span>
</h2>
<p className="text-base md:text-lg text-slate-400 font-light max-w-xl leading-relaxed reveal-item">
              Join thousands of athletes and fitness professionals who are
              pushing the boundaries of human performance with fitlux.
            </p>
</div>
<button className="reveal-item group flex items-center gap-2 px-6 py-3 bg-white text-slate-900 rounded-full text-xs font-medium hover:bg-slate-100 transition-all duration-300 shadow-lg">
<span>Read Success Stories</span>
<iconify-icon className="w-4 h-4 transition-transform group-hover:translate-x-1" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>

<div className="relative z-10 flex flex-col lg:flex-row lg:gap-20 items-center reveal-item">

<div className="lg:w-[45%] flex w-full relative items-center justify-center mb-12 lg:mb-0">

<div className="absolute -top-4 -left-4 z-20">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#7ca982] opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-[#7ca982]"></span>
</div>
</div>
<div className="w-full aspect-square md:max-w-[440px] group cursor-pointer overflow-hidden bg-white/5 border border-white/10 rounded-[2.5rem] p-1.5 shadow-2xl relative">
<img alt="User Profile" className="transition-all duration-700 group-hover:scale-105 w-full h-full object-cover rounded-[2.2rem]" id="testimonial-img" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>

<div className="lg:w-[55%] flex flex-col w-full text-white">
<div className="mb-8 text-[#7ca982] opacity-50">
<iconify-icon className="" icon="ri:double-quotes-l" style={{fontSize: '3rem'}}></iconify-icon>
</div>
<blockquote className="text-2xl md:text-4xl font-light leading-tight mb-10 transition-all duration-300" id="testimonial-quote">
              "fitlux has completely changed my training. The form correction is
              like having a private coach in my pocket 24/7."
            </blockquote>
<div className="flex flex-row items-center justify-between gap-4 border-t border-white/10 pt-8">
<div>
<h4 className="text-xl font-medium" id="testimonial-name">
                  Sarah Jenkins
                </h4>
<p className="text-sm text-slate-500 mt-1 font-light tracking-wide uppercase" id="testimonial-role">
                  Elite Marathon Runner
                </p>
</div>
<div className="flex items-center gap-3">
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#7ca982] hover:border-[#7ca982] transition-all duration-300" onclick="window.prevTestimonial()">
<iconify-icon className="text-xl" icon="lucide:chevron-left"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/10 bg-white/5 flex items-center justify-center hover:bg-[#7ca982] hover:border-[#7ca982] transition-all duration-300" onclick="window.nextTestimonial()">
<iconify-icon className="text-xl" icon="lucide:chevron-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</section>
<footer className="max-w-screen-xl mx-auto px-6 py-12 border-t border-slate-100 flex flex-col md:flex-row justify-between items-center gap-8 reveal-item">
<div className="flex items-center gap-2 text-slate-400 text-[10px] font-medium uppercase tracking-widest">
<iconify-icon className="text-[#7ca982] text-lg" icon="solar:star-ring-linear"></iconify-icon>
        © 2024 fitlux Motion Intelligence
      </div>
<div className="flex gap-8 text-[10px] font-medium uppercase tracking-widest text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<a className="hover:text-slate-900 transition-colors" href="#">Safety</a>
</div>
</footer>




    </>
  );
}
