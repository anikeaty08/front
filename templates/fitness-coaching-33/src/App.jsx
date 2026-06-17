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



        // Initialize Lucide Icons
        lucide.createIcons();
    
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
      

<main className="max-w-[1440px] mx-auto bg-white rounded-[2rem] md:rounded-[3rem] overflow-hidden shadow-sm relative">

<header className="absolute top-0 left-0 right-0 z-50 flex items-center justify-between px-6 py-6 md:px-10 md:py-8 text-white">
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:opacity-70 transition-opacity" href="#">Home</a>
<a className="hover:opacity-70 transition-opacity" href="#">Coaching</a>
<a className="hover:opacity-70 transition-opacity" href="#">Results</a>
<a className="hover:opacity-70 transition-opacity" href="#">Pricing</a>
</nav>
<a className="text-2xl font-semibold tracking-tight absolute left-1/2 -translate-x-1/2" href="#">Purpose Built</a>
<button className="bg-white text-slate-900 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors hidden sm:flex items-center gap-2 group">
                Start Transformation
                <i className="w-4 h-4 text-slate-400 group-hover:text-slate-900 transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</header>

<section className="relative w-full h-[90vh] min-h-[650px] p-3 md:p-5">
<div className="relative w-full h-full rounded-[1.5rem] md:rounded-[2.5rem] overflow-hidden">
<img alt="Athlete training" className="absolute inset-0 w-full h-full object-cover object-top" src="https://images.unsplash.com/photo-1581009146145-b5ef050c2e1e?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-black/40 via-black/20 to-black/60"></div>
<div className="absolute inset-0 flex flex-col justify-between p-6 md:p-12 lg:p-16 text-white pt-24 md:pt-32">

<div className="flex items-center gap-4 bg-white/10 backdrop-blur-md border border-white/20 rounded-full py-1.5 pr-6 pl-1.5 w-max">
<div className="flex -space-x-2">
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="Client" className="w-8 h-8 rounded-full border-2 border-slate-900 object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-8 h-8 rounded-full border-2 border-slate-900 bg-slate-800 flex items-center justify-center text-[10px] font-medium">100+</div>
</div>
<span className="text-sm font-medium">Real Results From Real Clients</span>
</div>

<div className="max-w-3xl space-y-6">
<p className="text-lg md:text-xl font-medium text-white/90 max-w-xl leading-relaxed">
                            Online coaching designed to help you lose fat, build muscle, and stay consistent without extreme diets.
                        </p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[0.95]">
                            Transform Your <br/>Body Without <br/><span className="text-slate-300">Guesswork.</span>
</h1>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-8 px-6 py-24 md:py-32 lg:px-16 bg-white">

<div className="lg:col-span-4 flex flex-col justify-between h-full space-y-16 lg:space-y-0">
<div className="space-y-6">
<span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-widest text-slate-500">
                        Solution
                    </span>
<p className="text-lg text-slate-600 font-medium leading-relaxed">
                        Online &amp; In-Person Coaching. Proven Systems.
                    </p>
</div>

<div className="space-y-4">
<div className="flex -space-x-3">
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1521119989659-a83eee488004?w=150&amp;h=150&amp;fit=crop"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=150&amp;h=150&amp;fit=crop"/>
<img alt="Avatar" className="w-12 h-12 rounded-full border-2 border-white object-cover shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;h=150&amp;fit=crop"/>
<div className="w-12 h-12 rounded-full border-2 border-white bg-slate-900 text-white flex items-center justify-center text-xs font-medium shadow-sm">100+</div>
</div>
<p className="text-2xl font-medium tracking-tight text-slate-900 leading-tight">
                        100+ lives transformed <br/>worldwide
                    </p>
</div>
</div>

<div className="lg:col-span-8 space-y-12">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] max-w-2xl">
                    The Purpose Built <br/><span className="italic text-slate-500 font-normal">Coaching System</span>
</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:gap-6">

<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[300px] cursor-pointer">
<img alt="Custom Training" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<h3 className="text-xl font-semibold mb-2 tracking-tight">Custom Training Plan</h3>
<p className="text-sm text-slate-200 leading-relaxed font-medium">Hypertrophy and strength cycles built for your body.</p>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden aspect-[4/3] md:aspect-auto md:h-[300px] cursor-pointer">
<img alt="Nutrition Guidance" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1490645935967-10de6ba17061?q=80&amp;w=2053&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute top-4 right-4 bg-white/90 backdrop-blur rounded-full p-2 text-slate-900 opacity-0 group-hover:opacity-100 transition-opacity">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-6 left-6 right-6 text-white">
<h3 className="text-xl font-semibold mb-2 tracking-tight">Nutrition Guidance</h3>
<p className="text-sm text-slate-200 leading-relaxed font-medium">Sustainable diet strategies without restriction.</p>
</div>
</div>

<div className="relative group rounded-3xl overflow-hidden md:col-span-2 aspect-[16/9] md:aspect-[21/9] cursor-pointer">
<img alt="Accountability" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/30 to-transparent"></div>
<div className="absolute top-6 right-6 bg-white/90 backdrop-blur rounded-full p-2.5 text-slate-900 transition-transform group-hover:scale-110">
<i className="w-6 h-6" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</div>
<div className="absolute bottom-8 left-8 right-8 text-white">
<h3 className="text-3xl font-semibold mb-3 tracking-tight">Accountability &amp; Support</h3>
<p className="text-base text-slate-200 max-w-md leading-relaxed font-medium">Weekly check-ins, form reviews, and direct access to ensure you stay on track.</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2 gap-16 px-6 py-24 md:py-32 lg:px-16 bg-slate-50">

<div className="flex flex-col gap-4 md:gap-6">
<div className="w-full rounded-[2rem] overflow-hidden aspect-[4/3] bg-slate-200 relative">
<img alt="Training" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1581009137042-c552e485697a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex gap-4 md:gap-6">
<div className="w-1/2 rounded-[2rem] overflow-hidden aspect-square bg-slate-200 relative">
<img alt="Gym" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="w-1/2 rounded-[2rem] overflow-hidden aspect-square bg-slate-200 relative">
<img alt="Focus" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1599058917212-d750089bc07e?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col justify-center max-w-xl">
<span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-widest text-slate-500 bg-white w-max mb-8 md:mb-10">
                    How It Works
                </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-8">
                    Struggling to stay <br/><span className="italic text-slate-500 font-normal">Consistent?</span>
</h2>
<div className="space-y-6 text-lg text-slate-600 font-medium leading-relaxed mb-12">
<p>Not seeing results despite training? Confused about workouts and nutrition?</p>
<p>You don't need more motivation, you need a proven system. Apply, get your custom plan, and start transforming your physique.</p>
</div>
<div className="flex items-center gap-6 mb-16">
<button className="bg-slate-900 text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-800 transition-colors flex items-center gap-3 group">
                        Apply Now
                        <i className="w-4 h-4 text-white/70 group-hover:text-white transition-colors" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="flex items-center gap-6 text-sm font-medium text-slate-400 mt-auto">
<span className="text-slate-900 text-xl tracking-tight">01<span className="text-sm text-slate-400">/03</span></span>
<div className="h-[2px] w-24 bg-slate-900 rounded-full"></div>
<div className="flex-1 flex flex-col">
<span className="text-slate-900 text-base">Submit Application</span>
<span className="text-xs mt-1 leading-relaxed">Fill out the form to see if we're a good fit.</span>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:py-32 lg:px-16 bg-white overflow-hidden">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16 md:mb-24">
<div className="max-w-xl">
<span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
                        Meet Your Coach
                    </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                        The Team Behind <br/>Your <span className="italic text-slate-500 font-normal">Progress</span>
</h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed">
                        I'm Zeke, an online body transformation coach helping people build strong, sustainable physiques without burnout.
                    </p>
</div>
<div className="flex flex-wrap gap-3">
<button className="px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">Head Coach</button>
<button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Transformations</button>
<button className="px-5 py-2 rounded-full border border-slate-200 text-slate-600 hover:bg-slate-50 text-sm font-medium transition-colors">Lifestyle</button>
</div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="flex flex-col gap-6 mt-0">
<div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100 group">
<img alt="Zeke Varley" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-center text-white">
<h4 className="text-lg font-semibold tracking-tight">Zeke Varley</h4>
<p className="text-sm text-slate-300 mt-1 font-medium">Head Coach</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-12 lg:mt-24">
<div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100 group">
<img alt="Client transformation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1605296867304-46d5465a13f1?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-center text-white">
<h4 className="text-lg font-semibold tracking-tight">-10kg in 12 Weeks</h4>
<p className="text-sm text-slate-300 mt-1 font-medium">Online Client</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-6 lg:mt-12">
<div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100 group">
<img alt="Client transformation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-center text-white">
<h4 className="text-lg font-semibold tracking-tight">Built Muscle</h4>
<p className="text-sm text-slate-300 mt-1 font-medium">Busy Professional</p>
</div>
</div>
</div>

<div className="flex flex-col gap-6 mt-16 lg:mt-32">
<div className="relative rounded-3xl overflow-hidden aspect-[3/4] bg-slate-100 group">
<img alt="Client transformation" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/10 to-transparent"></div>
<div className="absolute bottom-6 left-6 right-6 text-center text-white">
<h4 className="text-lg font-semibold tracking-tight">Fat Loss Phase</h4>
<p className="text-sm text-slate-300 mt-1 font-medium">1:1 Coaching</p>
</div>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:py-32 lg:px-16 bg-slate-50 flex flex-col items-center text-center">
<span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-widest text-slate-500 mb-6 bg-white">
                Pricing
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
                Choose Your Coaching <span className="italic text-slate-500 font-normal">Plan</span>
</h2>
<p className="text-lg text-slate-600 font-medium leading-relaxed max-w-2xl mb-16">
                Find the right program for your goals — whether you need remote guidance or face-to-Face support.
            </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-5xl">

<div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_var(--tw-gradient-stops))] from-slate-800/50 via-slate-900 to-slate-900 pointer-events-none"></div>
<div className="relative z-10 w-full flex flex-col items-center">
<div className="flex -space-x-2 mb-8">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center"><i className="w-4 h-4 text-slate-300" data-lucide="smartphone"></i></div>
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center"><i className="w-4 h-4 text-slate-300" data-lucide="activity"></i></div>
</div>
<div className="text-sm font-medium text-slate-400 mb-4 tracking-wide uppercase">Online Coaching</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">Transformation<br/>Plan</h3>
<button className="bg-white text-slate-900 px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-100 transition-colors flex items-center gap-3 w-max mx-auto mb-12">
                            Apply Now
                            <i className="w-4 h-4 text-slate-400" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
<p className="text-sm text-slate-300 leading-relaxed font-medium max-w-xs">
                            Start your fitness journey the right way. Custom training, nutrition strategy, and weekly check-ins.
                        </p>
</div>
</div>

<div className="bg-slate-900 text-white rounded-[2.5rem] p-8 md:p-12 relative overflow-hidden flex flex-col items-center text-center group">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-slate-700/40 via-slate-900 to-slate-900 pointer-events-none"></div>
<div className="relative z-10 w-full flex flex-col items-center">
<div className="flex -space-x-2 mb-8">
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center"><i className="w-4 h-4 text-slate-300" data-lucide="users"></i></div>
<div className="w-10 h-10 rounded-full bg-slate-800 border-2 border-slate-900 flex items-center justify-center"><i className="w-4 h-4 text-slate-300" data-lucide="dumbbell"></i></div>
</div>
<div className="text-sm font-medium text-slate-400 mb-4 tracking-wide uppercase">In-Person PT</div>
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-8">1:1 Pro<br/>Coaching</h3>
<button className="bg-white text-slate-900 px-8 py-3.5 rounded-full text-base font-medium hover:bg-slate-100 transition-colors flex items-center gap-3 w-max mx-auto mb-12">
                            Apply Now
                            <i className="w-4 h-4 text-slate-400" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
<p className="text-sm text-slate-300 leading-relaxed font-medium max-w-xs">
                            Perfect for local clients needing hands-on guidance. Form correction, accountability, and direct support.
                        </p>
</div>
</div>
</div>
</section>

<section className="px-6 py-24 md:py-32 lg:px-16 bg-white flex flex-col items-center">
<span className="inline-block px-3 py-1 rounded-full border border-slate-200 text-xs font-medium uppercase tracking-widest text-slate-500 mb-6">
                Testimonial
            </span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6 text-center">
                What our clients <span className="italic text-slate-500 font-normal">say</span>
</h2>
<p className="text-lg text-slate-600 font-medium text-center mb-16">Trusted by beginners, loved by professionals.</p>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full mt-8">

<div className="flex flex-col justify-center relative">
<div className="flex gap-3 absolute -top-16 right-0 lg:right-auto lg:-top-24 lg:left-0">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</button>
<button className="w-12 h-12 rounded-full bg-slate-900 flex items-center justify-center text-white hover:bg-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<i className="w-24 h-24 text-slate-100 mb-8 transform rotate-180" data-lucide="quote" fill="currentColor" stroke="none"></i>
<p className="text-2xl md:text-3xl font-medium leading-relaxed text-slate-900 mb-12 max-w-xl">
                        "The coaching here completely changed my approach to fitness. I feel faster, stronger, and more confident. I used to skip workouts, but Zeke made consistency something I actually enjoy."
                    </p>
<div className="flex items-center gap-4">
<img alt="Emily Carter" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=150&amp;auto=format&amp;fit=crop"/>
<div>
<div className="font-semibold text-slate-900 tracking-tight">Emily Carter</div>
<div className="text-sm text-slate-500 font-medium">Online Coaching Client</div>
</div>
</div>
</div>

<div className="w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-slate-100">
<img alt="Client Testimonial" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<footer className="bg-slate-50 pt-24 pb-12 px-6 lg:px-16 rounded-b-[2rem] md:rounded-b-[3rem]">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16 md:gap-8 mb-24">

<div className="md:col-span-5 space-y-8">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-slate-900 leading-[1.1] max-w-sm">
                        Ready to transform your body?
                    </h2>
<div className="flex items-center bg-white rounded-full p-1.5 border border-slate-200 max-w-sm shadow-sm">
<input className="bg-transparent px-5 py-2 outline-none flex-1 text-sm font-medium text-slate-900 placeholder-slate-400" placeholder="Enter Email" type="email"/>
<button className="bg-slate-900 text-white rounded-full p-3 hover:bg-slate-800 transition-colors">
<i className="w-5 h-5" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="text-2xl font-semibold tracking-tight text-slate-900 mt-12 hidden md:block">
                        Purpose Built
                    </div>
</div>

<div className="md:col-span-7 grid grid-cols-2 sm:grid-cols-4 gap-8">
<div className="space-y-4">
<h4 className="font-semibold text-slate-900 tracking-tight mb-6">Menu</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Coaching</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Results</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div className="space-y-4 sm:col-span-3 lg:col-span-2">
<h4 className="font-semibold text-slate-900 tracking-tight mb-6">Contact us</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li>Purpose Built Coaching</li>
<li>Online &amp; In-Person</li>
<li>Sydney, Australia</li>
</ul>
<h4 className="font-semibold text-slate-900 tracking-tight mt-8 mb-6">Inquiries</h4>
<ul className="space-y-3 text-sm font-medium text-slate-500">
<li>hello@purposebuilt.com</li>
</ul>
</div>
<div className="space-y-4 flex flex-col justify-end h-full">
<div className="flex gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="facebook"></i></a>
<a className="hover:text-slate-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
</div>
</div>
</div>
</div>

<div className="w-full text-center overflow-hidden flex justify-center border-t border-slate-200 pt-12">
<h1 className="text-[12vw] md:text-[14vw] font-bold tracking-tighter text-slate-900 leading-none uppercase select-none">
                    Purpose Built
                </h1>
</div>
</footer>
</main>


    </>
  );
}
