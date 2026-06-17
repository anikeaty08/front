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
serif: ['Playfair Display', 'serif'],
},
colors: {
brand: {
DEFAULT: '#91181a',
light: '#f4e8e8',
},
neutral: {
50: '#fcfaf8',
100: '#f5f5f5',
200: '#e5e5e5',
800: '#2d2d2d',
900: '#1a1a1a',
}
},
fontSize: {
'xs': ['0.75rem', { lineHeight: '1rem' }],
'sm': ['0.875rem', { lineHeight: '1.25rem' }],
'base': ['1rem', { lineHeight: '1.5rem' }],
'lg': ['1.125rem', { lineHeight: '1.75rem' }],
'xl': ['1.25rem', { lineHeight: '1.75rem' }],
'2xl': ['1.5rem', { lineHeight: '2rem' }],
'3xl': ['1.875rem', { lineHeight: '2.25rem' }],
'4xl': ['2.25rem', { lineHeight: '2.5rem' }],
'5xl': ['3rem', { lineHeight: '1.16' }],
'6xl': ['3.75rem', { lineHeight: '1.1' }],
'7xl': ['4.5rem', { lineHeight: '1.05' }],
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons
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
      

<nav className="w-full px-6 py-6 md:px-12 flex items-center justify-between z-50 relative bg-white/80 backdrop-blur-md sticky top-0 border-b border-neutral-100">
<div className="flex items-center gap-2">
<i className="w-6 h-6 text-brand stroke-1-5" data-lucide="activity"></i>
<span className="font-serif font-medium text-xl tracking-tight">KTC Events</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-600">
<a className="hover:text-brand transition-colors" href="#services">Services</a>
<a className="hover:text-brand transition-colors" href="#programs">Programs</a>
<a className="hover:text-brand transition-colors" href="#about">About</a>
<a className="hover:text-brand transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden lg:block text-sm font-medium text-neutral-600 hover:text-brand transition-colors" href="#">Sign in</a>
<a className="bg-white border border-neutral-200 text-neutral-800 px-5 py-2.5 rounded-full text-sm font-medium hover:border-neutral-300 transition-all flex items-center gap-2 shadow-sm" href="#enquire">
                Enquire Now
            </a>
</div>
</nav>

<header className="pt-20 pb-16 md:pt-32 md:pb-24 px-6 md:px-12 text-center max-w-5xl mx-auto flex flex-col items-center">
<h1 className="font-serif text-5xl md:text-7xl font-medium tracking-tight text-neutral-900 leading-tight mb-6 max-w-4xl">
            Building Stronger Teams, Active Schools &amp; High-Performance Individuals
        </h1>
<p className="text-neutral-600 text-lg md:text-xl mb-10 max-w-2xl font-medium">
            Corporate wellness <span className="mx-2 opacity-50">•</span> School fitness programs <span className="mx-2 opacity-50">•</span> Performance coaching
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="bg-brand text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-brand/90 transition-all shadow-md w-full sm:w-auto" href="#enquire">
                Enquire Now
            </a>
<a className="bg-neutral-50 text-neutral-800 border border-neutral-200 px-8 py-3.5 rounded-full text-base font-medium hover:bg-neutral-100 transition-all flex items-center justify-center gap-2 w-full sm:w-auto" href="#programs">
                View Programs
            </a>
</div>

<div className="w-full flex justify-center items-end gap-2 md:gap-4 overflow-hidden relative pt-10">

<div className="w-1/5 md:w-48 aspect-[3/4] rounded-t-[40px] rounded-b-xl overflow-hidden translate-y-12 opacity-80 shadow-sm border border-neutral-100">
<img alt="Fitness" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-1/5 md:w-56 aspect-[3/4] rounded-t-[50px] rounded-b-xl overflow-hidden translate-y-6 opacity-90 shadow-md border border-neutral-100">
<img alt="Team building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-1/4 md:w-64 aspect-[3/4] rounded-t-[60px] rounded-b-xl overflow-hidden z-10 shadow-lg border-2 border-white relative">
<img alt="Active individual" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-brand/10"></div>
</div>

<div className="w-1/5 md:w-56 aspect-[3/4] rounded-t-[50px] rounded-b-xl overflow-hidden translate-y-6 opacity-90 shadow-md border border-neutral-100">
<img alt="Corporate team" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>

<div className="w-1/5 md:w-48 aspect-[3/4] rounded-t-[40px] rounded-b-xl overflow-hidden translate-y-12 opacity-80 shadow-sm border border-neutral-100">
<img alt="Running" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1594882645126-14020914d58d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</header>

<section className="py-24 md:py-32 px-6 overflow-hidden relative bg-neutral-50/50">
<div className="max-w-4xl mx-auto relative h-[500px] flex items-center justify-center">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-[300px] h-[300px] rounded-full border border-brand/20 absolute translate-x-10 translate-y-10"></div>
<div className="w-[450px] h-[450px] rounded-full border border-neutral-200 absolute -translate-x-12 -translate-y-4"></div>
<div className="w-[600px] h-[600px] rounded-full border border-brand/10 absolute"></div>
</div>
<div className="text-center z-10 max-w-lg">
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight">
                    We turn inactivity into energy, structure and performance
                </h2>
</div>

<div className="absolute top-10 left-0 md:left-20 bg-white/90 backdrop-blur-sm shadow-sm border border-neutral-100 rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium z-20">
<div className="w-6 h-6 rounded-full bg-brand/10 flex items-center justify-center text-brand">
<i className="w-3.5 h-3.5 stroke-1-5" data-lucide="layers"></i>
</div>
                System-driven programs
            </div>
<div className="absolute bottom-20 left-4 md:left-10 bg-white/90 backdrop-blur-sm shadow-sm border border-neutral-100 rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium z-20">
<div className="w-6 h-6 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-3.5 h-3.5 stroke-1-5" data-lucide="zap"></i>
</div>
                Inclusive &amp; high-energy
            </div>
<div className="absolute top-24 right-0 md:right-10 bg-white/90 backdrop-blur-sm shadow-sm border border-neutral-100 rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium z-20">
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600">
<i className="w-3.5 h-3.5 stroke-1-5" data-lucide="users"></i>
</div>
                Designed for real teams
            </div>
<div className="absolute bottom-32 right-4 md:right-20 bg-white/90 backdrop-blur-sm shadow-sm border border-neutral-100 rounded-full px-5 py-2.5 flex items-center gap-3 text-sm font-medium z-20">
<div className="w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-blue-600">
<i className="w-3.5 h-3.5 stroke-1-5" data-lucide="target"></i>
</div>
                Performance under pressure
            </div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[280px]">

<div className="md:col-span-1 rounded-[2rem] relative overflow-hidden group">
<img alt="Corporate" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1528629297340-d1d466945dc5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
<h3 className="font-serif text-2xl tracking-tight leading-snug w-3/4">Corporate Wellness &amp; Team Building</h3>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm self-end">
<i className="w-5 h-5 stroke-1-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-neutral-50 border border-neutral-100 p-8 flex flex-col items-center justify-center text-center">
<span className="text-xs font-medium tracking-wider uppercase text-neutral-500 mb-4 border border-neutral-200 rounded-full px-4 py-1.5 bg-white">Who It's For</span>
<h3 className="font-serif text-3xl md:text-4xl tracking-tight font-medium text-neutral-900 leading-tight mb-4">
                    Built for teams that need performance
                </h3>
<p className="text-sm text-neutral-600">Programs designed to meet organizations and individuals where they are, building structure for real life.</p>
<div className="mt-8 flex gap-4 text-brand/40">
<i className="w-8 h-8 stroke-1-5" data-lucide="activity"></i>
<i className="w-8 h-8 stroke-1-5" data-lucide="users"></i>
<i className="w-8 h-8 stroke-1-5" data-lucide="clipboard-list"></i>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] relative overflow-hidden group">
<img alt="School Fitness" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between text-white">
<h3 className="font-serif text-2xl tracking-tight leading-snug w-3/4">School Fitness Programs (Gr 11-12)</h3>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center backdrop-blur-sm self-end">
<i className="w-5 h-5 stroke-1-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-[#e6b17e] p-8 flex flex-col justify-between group cursor-pointer transition-all hover:bg-[#dfa773]">
<h3 className="font-serif text-2xl tracking-tight text-white leading-snug">Community &amp; Fitness Events</h3>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white self-end transition-transform group-hover:translate-x-1">
<i className="w-5 h-5 stroke-1-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-[#9ba492] p-8 flex flex-col justify-between group cursor-pointer transition-all hover:bg-[#8f9886]">
<h3 className="font-serif text-2xl tracking-tight text-white leading-snug w-2/3">Performance Coaching</h3>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white self-end transition-transform group-hover:translate-x-1">
<i className="w-5 h-5 stroke-1-5" data-lucide="arrow-right"></i>
</div>
</div>

<div className="md:col-span-1 rounded-[2rem] bg-[#a9b5c2] p-8 flex flex-col justify-between group cursor-pointer transition-all hover:bg-[#9ca9b8]">
<h3 className="font-serif text-2xl tracking-tight text-white leading-snug">Personal Training Systems</h3>
<div className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white self-end transition-transform group-hover:translate-x-1">
<i className="w-5 h-5 stroke-1-5" data-lucide="arrow-right"></i>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-6xl mx-auto">
<div className="bg-[#eaf1eb] rounded-[3rem] p-10 md:p-16">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-12">
<div className="max-w-2xl">
<span className="inline-block border border-neutral-300 text-neutral-600 rounded-full px-4 py-1 text-sm font-medium mb-6">Our Approach</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-6">
                        Structure that doesn't add more weight to what your team is already carrying
                    </h2>
<p className="text-neutral-700">
                        You shouldn't have to feel confused or overwhelmed when trying to build team cohesion. We know how hard it can be to recognize what your team needs. KTC Events removes that uncertainty — so seeking performance feels clear, structured, and human.
                    </p>
</div>

<div className="hidden md:block w-32 h-32 relative">
<svg className="w-full h-full text-neutral-800" viewbox="0 0 100 100">
<path d="M10 50 Q 50 10 90 50" fill="none" stroke="currentColor" strokeWidth="2"></path>
<circle cx="25" cy="40" fill="currentColor" r="4"></circle>
<circle cx="75" cy="40" fill="#d9a05b" r="4"></circle>
<path d="M10 50 L 90 50" fill="none" stroke="currentColor" strokeWidth="2"></path>
<path d="M50 50 L 50 90" fill="none" stroke="currentColor" strokeWidth="2"></path>
</svg>
</div>
</div>

<div className="flex flex-wrap gap-3">
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-purple-400"></span> Will this feel inclusive for everyone?
                </div>
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-red-400"></span> What if my team is unfit?
                </div>
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-yellow-400"></span> Where do we even start?
                </div>
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-green-400"></span> Do you cater to schools?
                </div>
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-blue-400"></span> Can we customize the event?
                </div>
<div className="bg-white px-5 py-2.5 rounded-full text-sm font-medium text-neutral-700 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-neutral-800"></span> How long are the programs?
                </div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-5xl mx-auto flex flex-col items-center" id="about">
<span className="inline-block border border-neutral-200 text-neutral-600 rounded-full px-4 py-1 text-sm font-medium mb-10">Leadership</span>
<h2 className="font-serif text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-16 text-center max-w-2xl">
            Led by experience, driven by performance
        </h2>
<div className="flex flex-col md:flex-row items-center gap-12 md:gap-20 w-full">

<div className="w-full md:w-5/12 flex flex-col gap-4">
<div className="rounded-3xl overflow-hidden aspect-[4/3] w-full border border-neutral-100 shadow-sm relative">
<img alt="Kgwahla Masipa Training" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 border-2 border-white rounded-3xl mix-blend-overlay"></div>
</div>
<div className="flex gap-4">
<div className="rounded-3xl overflow-hidden aspect-[4/3] w-1/2 border border-neutral-100 shadow-sm">
<img alt="Team engagement" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1552664730-d307ca884978?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="rounded-3xl overflow-hidden aspect-[4/3] w-1/2 border border-neutral-100 shadow-sm">
<img alt="Coaching" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1574680096145-d05b474e2155?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>

<div className="w-full md:w-7/12">
<i className="w-10 h-10 text-neutral-200 mb-6 fill-current" data-lucide="quote"></i>
<p className="text-xl md:text-2xl font-serif text-neutral-800 leading-relaxed mb-8">
                    "We build environments where inactivity is replaced by energy, and individuals realize they are capable of more. Whether it's a corporate team or a school group, performance comes from structured movement and shared goals."
                </p>
<div className="flex items-center justify-between border-t border-neutral-100 pt-6">
<div>
<h4 className="font-medium text-neutral-900 text-base">Kgwahla Masipa</h4>
<p className="text-sm text-neutral-500">Founder &amp; Performance Coach</p>
</div>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-400 hover:text-neutral-900 transition-colors">
<i className="w-4 h-4 stroke-1-5" data-lucide="arrow-left"></i>
</button>
<button className="w-10 h-10 rounded-full border border-neutral-200 flex items-center justify-center text-neutral-800 hover:bg-neutral-50 transition-colors">
<i className="w-4 h-4 stroke-1-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-6xl mx-auto border-t border-neutral-100">
<div className="flex flex-col md:flex-row gap-16 justify-between">
<div className="w-full md:w-1/3">
<span className="inline-block border border-neutral-200 text-neutral-600 rounded-full px-4 py-1 text-sm font-medium mb-6">Proven Experience</span>
<h2 className="font-serif text-3xl md:text-4xl font-medium tracking-tight text-neutral-900 leading-tight mb-8">
                    A decade of building active communities
                </h2>

<svg className="text-neutral-300" fill="none" height="60" stroke="currentColor" strokeWidth="2" viewbox="0 0 100 100" width="60">
<path d="M10 90 L 30 50 L 50 70 L 90 20"></path>
<circle cx="90" cy="20" fill="currentColor" r="4"></circle>
</svg>
</div>
<div className="w-full md:w-3/5 flex flex-col gap-12">
<div className="flex items-start gap-8 border-b border-neutral-100 pb-8">
<div className="font-serif text-5xl md:text-6xl text-brand w-32 shrink-0">10+</div>
<div>
<p className="text-sm text-neutral-900 font-medium mb-1">Years of coaching experience</p>
<p className="text-base text-neutral-600">Delivering performance-focused facilitation across personal training, group settings, and corporate environments.</p>
</div>
</div>
<div className="flex items-start gap-8 border-b border-neutral-100 pb-8">
<div className="font-serif text-5xl md:text-6xl text-neutral-800 w-32 shrink-0">50+</div>
<div>
<p className="text-sm text-neutral-900 font-medium mb-1">Corporate &amp; school programs</p>
<p className="text-base text-neutral-600">Successfully designed and executed team building and fitness initiatives tailored for specific organizational goals.</p>
</div>
</div>
<div className="flex items-start gap-8">
<div className="font-serif text-5xl md:text-6xl text-neutral-800 w-32 shrink-0">100%</div>
<div>
<p className="text-sm text-neutral-900 font-medium mb-1">System-driven approach</p>
<p className="text-base text-neutral-600">Every program is built on structural frameworks ensuring measurable improvement and sustainable energy.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 max-w-7xl mx-auto" id="enquire">
<div className="rounded-[3rem] overflow-hidden flex flex-col md:flex-row shadow-sm border border-neutral-100">

<div className="w-full md:w-1/2 bg-[#d7bd3e] p-12 md:p-20 flex flex-col justify-center">
<h2 className="font-serif text-4xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-tight mb-6">
                    Stop struggling with engagement.<br/>Start building active teams.
                </h2>
<p className="text-neutral-800 text-lg mb-10 max-w-md">
                    You don't have to wait until energy levels are depleted. KTC Events helps you take a structured first step toward team cohesion, fitness, and high performance.
                </p>
<div>
<a className="inline-flex items-center justify-center bg-neutral-900 text-white px-8 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">
                        Book a Consultation
                    </a>
</div>
</div>

<div className="w-full md:w-1/2 bg-[#e8cd54] p-12 relative flex items-center justify-center min-h-[400px]">


<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-80 bg-white/90 backdrop-blur-md rounded-2xl p-6 shadow-xl border border-white z-20">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-full bg-brand/10 flex items-center justify-center text-brand">
<i className="w-4 h-4 stroke-1-5" data-lucide="zap"></i>
</div>
<span className="text-sm font-medium text-neutral-800">Performance Focus</span>
</div>
<p className="text-lg font-medium text-neutral-900 leading-tight mb-2">Programs work best when structured early</p>
<p className="text-sm text-neutral-500">You deserve a team that feels energetic and connected, meeting goals consistently.</p>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-[40%] -translate-y-[80%] w-72 bg-white/60 backdrop-blur-sm rounded-2xl p-6 shadow-sm border border-white/50 z-10 scale-95 opacity-70">
<div className="h-4 w-24 bg-neutral-200 rounded mb-4"></div>
<div className="h-10 w-full bg-neutral-100 rounded"></div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-[60%] translate-y-[30%] w-64 bg-white/80 backdrop-blur-sm rounded-xl p-4 shadow-md border border-white z-30 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center text-orange-600">
<i className="w-4 h-4 stroke-1-5" data-lucide="target"></i>
</div>
<span className="text-sm font-medium text-neutral-800">Set team goals</span>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-50 border-t border-neutral-200 pt-20 pb-10 px-6 md:px-12 mt-12">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between gap-16 md:gap-8 mb-20">
<div className="max-w-xs">
<div className="flex gap-4 mb-8">
<a className="bg-neutral-900 text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-colors" href="#">Start a program</a>
<a className="bg-white border border-neutral-200 text-neutral-800 px-6 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-50 transition-colors shadow-sm" href="#">Sign in</a>
</div>
<div className="flex items-center gap-2 mb-6">
<i className="w-6 h-6 text-brand stroke-1-5" data-lucide="activity"></i>
<span className="font-serif font-medium text-xl tracking-tight">KTC Events</span>
</div>
<p className="text-neutral-600 text-base leading-relaxed">
                    You don't have to carry the load alone. Team building shouldn't feel overwhelming or hard to begin.
                </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-8 md:gap-16">
<div>
<h5 className="text-xs font-medium text-neutral-500 mb-6 tracking-wider uppercase">What We Offer</h5>
<ul className="space-y-4 text-sm font-medium text-neutral-700">
<li><a className="hover:text-brand transition-colors" href="#">Corporate Wellness</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Team Building</a></li>
<li><a className="hover:text-brand transition-colors" href="#">School Fitness</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Performance Coaching</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-medium text-neutral-500 mb-6 tracking-wider uppercase">Who It's For</h5>
<ul className="space-y-4 text-sm font-medium text-neutral-700">
<li><a className="hover:text-brand transition-colors" href="#">Corporates</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Schools (Gr 11-12)</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Individuals</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Communities</a></li>
</ul>
</div>
<div className="col-span-2 md:col-span-1">
<h5 className="text-xs font-medium text-neutral-500 mb-6 tracking-wider uppercase">About KTC</h5>
<ul className="space-y-4 text-sm font-medium text-neutral-700">
<li><a className="hover:text-brand transition-colors" href="#">Our approach</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Kgwahla Masipa</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand transition-colors" href="#">Contact us</a></li>
</ul>

<div className="flex gap-4 mt-8">
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5 stroke-1-5" data-lucide="instagram"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><i className="w-5 h-5 stroke-1-5" data-lucide="youtube"></i></a>
<a className="text-neutral-400 hover:text-neutral-900 transition-colors" href="#"><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path></svg></a>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-neutral-200 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-neutral-500">
<div className="flex gap-6">
<a className="hover:text-neutral-800 transition-colors" href="#">Terms &amp; conditions</a>
<a className="hover:text-neutral-800 transition-colors" href="#">Privacy policy</a>
</div>
<p>© 2024 All rights reserved - KTC Events</p>
</div>
</footer>


    </>
  );
}
