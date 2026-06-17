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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
background: '#050505',
neutral: {
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'float-delayed': 'float 8s ease-in-out infinite reverse',
'spin-slow': 'spin 8s linear infinite',
'pulse-glow': 'pulse-glow 4s ease-in-out infinite',
},
keyframes: {
'float': {
'0%, 100%': { transform: 'translateY(0px)' },
'50%': { transform: 'translateY(-20px)' },
},
'pulse-glow': {
'0%, 100%': { opacity: '0.4' },
'50%': { opacity: '0.8' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Scroll Animation Logic
        (function () {
            if (!window.__inViewIO) {
                window.__inViewIO = new IntersectionObserver((entries) => {
                    entries.forEach((entry) => {
                        if (entry.isIntersecting) {
                            entry.target.classList.add("animate");
                        }
                    });
                }, { threshold: 0.1 });
            }

            window.initInViewAnimations = function (selector = ".animate-on-scroll") {
                document.querySelectorAll(selector).forEach((el) => {
                    window.__inViewIO.observe(el);
                });
            };

            document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
        })();

        // Scroll Navigation and Dot State
        const scrollContainer = document.getElementById('main-scroll');
        const dots = document.querySelectorAll('.nav-dot');

        function scrollToIndex(index) {
            const section = document.getElementById(`section-${index}`);
            section.scrollIntoView({ behavior: 'smooth' });
        }

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const id = entry.target.id;
                    const index = parseInt(id.split('-')[1]);

                    dots.forEach((dot, i) => {
                        if (i === index) {
                            dot.classList.add('active');
                            dot.classList.remove('bg-white/20');
                        } else {
                            dot.classList.remove('active');
                            dot.classList.add('bg-white/20');
                        }
                    });
                }
            });
        }, { threshold: 0.5 });

        document.querySelectorAll('section').forEach(section => {
            observer.observe(section);
        });

        // Mouse Parallax for Hero
        document.addEventListener('mousemove', (e) => {
            const x = (e.clientX / window.innerWidth - 0.5) * 10;
            const y = (e.clientY / window.innerHeight - 0.5) * 10;
            
            // Only apply to hero content for subtle effect
            const heroContent = document.querySelector('#section-0 .max-w-7xl');
            if(heroContent) {
                heroContent.style.transform = `translate(${x}px, ${y}px)`;
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
      

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 flex items-center justify-between pointer-events-none">
<div className="pointer-events-auto">
<div className="h-10 w-10 bg-white/5 backdrop-blur-md rounded-xl border border-white/10 flex items-center justify-center group cursor-pointer hover:bg-white/10 transition">
<span className="text-lg font-bold tracking-tighter text-white">A</span>
</div>
</div>
<nav className="pointer-events-auto hidden md:flex items-center gap-8 bg-black/40 backdrop-blur-xl px-8 py-3 rounded-full border border-white/5 shadow-2xl">
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest" href="#section-1">Experience</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest" href="#section-2">Technology</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest" href="#section-3">Design</a>
<a className="text-xs font-medium text-white/60 hover:text-white transition-colors uppercase tracking-widest" href="#section-4">Future</a>
</nav>
<div className="pointer-events-auto">

<button className="inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 h-9 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-slate-950/80 text-xs font-medium text-white bg-slate-950 w-full h-full rounded-full px-4 backdrop-blur-3xl">
                    Pre-order
                </span>
</button>
</div>
</header>

<div className="fixed right-6 top-1/2 -translate-y-1/2 z-50 flex flex-col gap-4 pointer-events-auto">
<button aria-label="Hero" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(0)"></button>
<button aria-label="Experience" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(1)"></button>
<button aria-label="Technology" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(2)"></button>
<button aria-label="Design" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(3)"></button>
<button aria-label="Future" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(4)"></button>
<button aria-label="Footer" className="nav-dot w-1.5 h-1.5 bg-white/20 hover:bg-white/40 rounded-full transition-all duration-500" onclick="scrollToIndex(5)"></button>
</div>

<main className="scroll-container no-scrollbar relative z-10" id="main-scroll">

<section className="h-screen w-full relative snap-center overflow-hidden flex items-center justify-center" id="section-0">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-[#050505]/50 to-transparent z-10"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#050505] via-transparent to-transparent z-10"></div>
<img alt="Trendy woman in yellow-green streetwear" className="w-full h-full object-cover opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7762d37c-9e5c-470e-a613-764b5f8f7c48_1600w.webp"/>
</div>
<div className="relative z-20 max-w-7xl mx-auto px-6 w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
<div className="space-y-8 animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-300 backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span>New Release: AURA One</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter leading-[0.9] text-white">
                        Sound that <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-200 via-white to-indigo-200">Moves You.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-lg font-light leading-relaxed">
                        Studio-grade fidelity meets streetwear aesthetics. Experience the silence of precision noise cancellation in a design that speaks volumes.
                    </p>
<div className="flex flex-wrap gap-4 pt-4">

<div className="inline-block bg-transparent">
<button className="shiny-cta focus:outline-none">
<span>Experience AURA</span>
</button>
</div>
<button className="group relative inline-flex items-center justify-center px-6 py-4 text-white/70 tracking-tight font-medium transition-all hover:text-white">
<span className="mr-2">Watch Film</span>
<div className="relative flex items-center justify-center w-6 h-6 rounded-full border border-white/20 group-hover:border-white transition-colors">
<i className="w-2.5 h-2.5 fill-current" data-lucide="play"></i>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="h-screen w-full relative snap-center flex items-center bg-[#050505] overflow-hidden" id="section-1">
<div className="max-w-7xl mx-auto px-6 w-full grid md:grid-cols-2 gap-20 items-center">
<div className="order-2 md:order-1 relative animate-on-scroll">
<div className="relative rounded-2xl overflow-hidden border-gradient before:rounded-2xl">
<img alt="Silhouette profile with neon orange sunglasses" className="w-full h-[500px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/5 backdrop-blur-xl border border-white/10 p-4 rounded-xl">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-orange-500/20 flex items-center justify-center text-orange-400">
<i className="w-5 h-5" data-lucide="music"></i>
</div>
<div>
<p className="text-sm font-medium text-white">Neon Drift</p>
<p className="text-xs text-white/40">Now Playing</p>
</div>
</div>
<div className="flex gap-1">
<span className="block w-0.5 h-3 bg-orange-500 animate-[pulse_1s_ease-in-out_infinite]"></span>
<span className="block w-0.5 h-5 bg-orange-500 animate-[pulse_1.2s_ease-in-out_infinite]"></span>
<span className="block w-0.5 h-2 bg-orange-500 animate-[pulse_0.8s_ease-in-out_infinite]"></span>
<span className="block w-0.5 h-4 bg-orange-500 animate-[pulse_1.5s_ease-in-out_infinite]"></span>
</div>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-8 animate-on-scroll">
<div className="inline-flex items-center gap-2 text-orange-400 text-xs uppercase tracking-widest font-semibold">
<i className="w-4 h-4" data-lucide="zap"></i>
<span>Bold Design</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
                        Silence the Noise. <br/>
<span className="text-white/40">Amplify the Vibe.</span>
</h2>
<p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                        Designed for the city that never sleeps. Our adaptive transparency mode filters out the chaos while keeping you connected to your rhythm.
                    </p>
<ul className="space-y-4 pt-4">
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle-2"></i>
<span>Adaptive Active Noise Cancellation</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle-2"></i>
<span>40-Hour Battery Life</span>
</li>
<li className="flex items-center gap-3 text-sm text-white/80">
<i className="w-5 h-5 text-orange-500" data-lucide="check-circle-2"></i>
<span>Aerospace-grade Aluminum</span>
</li>
</ul>
</div>
</div>
</section>

<section className="h-screen w-full relative snap-center flex items-center justify-center bg-[#050505] overflow-hidden" id="section-2">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-indigo-500/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 w-full flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-8 animate-on-scroll z-10">
<div className="inline-flex items-center gap-2 text-indigo-400 text-xs uppercase tracking-widest font-semibold">
<i className="w-4 h-4" data-lucide="smartphone"></i>
<span>Total Control</span>
</div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tighter text-white">
                        Your Sound. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-300 to-purple-400">Your Rules.</span>
</h2>
<p className="text-lg text-neutral-400 leading-relaxed max-w-md">
                        Fine-tune every frequency with the AURA App. Create custom EQ profiles, manage devices, and locate your headphones instantly.
                    </p>
<div className="grid grid-cols-2 gap-4 pt-6">
<div className="p-4 rounded-xl bg-white/5 border border-white/10 border-gradient before:rounded-xl">
<i className="w-6 h-6 text-indigo-400 mb-3" data-lucide="sliders-horizontal"></i>
<h4 className="text-sm font-medium text-white">Custom EQ</h4>
<p className="text-xs text-neutral-500 mt-1">5-band equalizer</p>
</div>
<div className="p-4 rounded-xl bg-white/5 border border-white/10 border-gradient before:rounded-xl">
<i className="w-6 h-6 text-purple-400 mb-3" data-lucide="waves"></i>
<h4 className="text-sm font-medium text-white">Spatial Audio</h4>
<p className="text-xs text-neutral-500 mt-1">Head tracking</p>
</div>
</div>
</div>
<div className="flex-1 relative flex justify-center animate-on-scroll delay-100">
<div className="relative w-[300px] h-[600px] rounded-[3rem] border-8 border-neutral-900 overflow-hidden shadow-2xl shadow-indigo-500/20 rotate-[-6deg] hover:rotate-0 transition-transform duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
<img alt="Smartphone with vibrant gradient screen" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/abe6309a-283e-40d6-9cb0-b1ccf86a9f2b_1600w.jpg"/>

<div className="absolute bottom-10 left-4 right-4 bg-black/60 backdrop-blur-md p-4 rounded-2xl border border-white/10">
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-white">Bass Boost</span>
<span className="text-xs text-indigo-300">Active</span>
</div>
<div className="h-1 w-full bg-white/20 rounded-full overflow-hidden">
<div className="h-full w-[70%] bg-indigo-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="h-screen w-full relative snap-center flex items-center justify-center bg-[#050505] overflow-hidden" id="section-3">
<div className="max-w-6xl mx-auto px-6 w-full text-center relative z-10 animate-on-scroll">
<div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-xs font-medium text-yellow-300 mb-8 backdrop-blur-md">
<i className="w-3.5 h-3.5" data-lucide="coins"></i>
<span>Web3 Enabled</span>
</div>
<h2 className="text-5xl md:text-7xl font-semibold tracking-tighter mb-6">
                    Future-Proof <br/>
<span className="text-white/40">Technology</span>
</h2>
<p className="text-lg text-neutral-400 max-w-xl mx-auto mb-12">
                    Join the decentralized audio network. Token-gated exclusive drops and payment flexibility with Bitcoin &amp; Ethereum.
                </p>

<div className="relative w-full h-[400px] max-w-3xl mx-auto rounded-2xl overflow-hidden border border-white/10 group">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/80 z-10"></div>
<img alt="Floating Bitcoin and Ethereum coins" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-1000 ease-out opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5607922-3e3a-4da8-958a-13f3bb19c07c_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-8 z-20 flex flex-col md:flex-row justify-between items-end gap-6">
<div className="text-left">
<h3 className="text-2xl font-semibold text-white mb-2">Exclusive Drops</h3>
<p className="text-sm text-neutral-400">Pay with crypto to unlock limited edition colorways.</p>
</div>

<button className="inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-yellow-400 focus:ring-offset-2 focus:ring-offset-slate-950 btn-magnetic h-12 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#FCD34D_0%,#F59E0B_50%,#FCD34D_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-neutral-900 text-sm font-medium text-white bg-black w-full h-full rounded-full px-8 backdrop-blur-3xl gap-2">
<i className="w-4 h-4" data-lucide="wallet"></i>
                                Connect Wallet
                            </span>
</button>
</div>
</div>
</div>
</section>

<section className="w-full relative snap-start bg-[#050505] pt-20" id="section-4">
<div className="max-w-7xl mx-auto px-6 mb-20 text-center animate-on-scroll">
<h2 className="text-5xl md:text-8xl font-semibold tracking-tighter text-white mb-8">
                    Ready to Listen?
                </h2>

<button className="inline-flex overflow-hidden focus:outline-none focus:ring-2 focus:ring-slate-400 focus:ring-offset-2 focus:ring-offset-slate-50 btn-magnetic h-14 rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative hover:scale-105 transition-transform duration-300">
<span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]"></span>
<span className="inline-flex cursor-pointer items-center justify-center transition-colors hover:bg-slate-950/80 text-base font-medium text-white bg-slate-950 w-full h-full rounded-full px-10 backdrop-blur-3xl">
                      Join the Waitlist
                    </span>
</button>
</div>

<footer className="w-full sm:px-6 md:px-10 max-w-7xl mr-auto ml-auto pb-10 pl-4 pr-4">
<div className="relative overflow-hidden bg-neutral-900 rounded-3xl border border-white/5">
<div className="relative z-10 sm:p-12 md:p-16 pt-12 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 lg:grid-cols-4 gap-8 pb-12 border-b border-white/10">
<div className="lg:col-span-4">
<div className="flex items-center gap-2 mb-4">
<div className="h-8 w-8 bg-white/10 rounded-lg flex items-center justify-center text-white font-bold">A</div>
<h3 className="text-2xl font-semibold text-white tracking-tight">AURA Audio</h3>
</div>
<p className="text-white/70 max-w-3xl">We build audio products for the modern creator. Immerse yourself in high-fidelity sound, wherever you go.</p>
<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-5 sm:p-6 md:p-8" id="contact">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="space-y-4">
<div className="inline-flex items-center gap-2 rounded-full bg-emerald-400/10 text-emerald-300 ring-1 ring-emerald-300/20 px-2.5 py-1 text-xs">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse"></span>
                                  In Stock
                                </div>
<h4 className="text-white font-semibold tracking-tight">Support &amp; Sales</h4>
<ul className="space-y-2 text-sm text-neutral-300">
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="">2-Year Global Warranty</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="">30-Day Money Back Guarantee</span>
</li>
<li className="flex items-start gap-2">
<i className="w-4 h-4 text-emerald-400 mt-0.5" data-lucide="check"></i>
<span className="">24/7 Premium Support</span>
</li>
</ul>
<div className="flex items-center gap-3 pt-2 text-sm">
<a className="inline-flex items-center gap-2 text-white hover:text-indigo-300 transition" href="mailto:support@aura.audio">
<i className="w-4 h-4" data-lucide="mail"></i>
                                    support@aura.audio
                                  </a>
</div>
</div>
<form className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4" id="contact-form">
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="email">Email for updates</label>
<input className="w-full placeholder-white/40 outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="email" name="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="sm:col-span-1">
<label className="block text-xs font-medium text-white/80 mb-1" htmlFor="model">Interested Model</label>
<select className="w-full appearance-none outline-none focus:ring-2 focus:ring-indigo-400/60 focus:border-indigo-300 transition text-sm text-white bg-white/10 border-white/10 border rounded-xl pt-2.5 pr-3 pb-2.5 pl-3" id="model" name="model">
<option className="bg-neutral-900" value="aura-one">AURA One</option>
<option className="bg-neutral-900" value="aura-pro">AURA Pro</option>
</select>
</div>
<div className="sm:col-span-2 flex items-center justify-end gap-2 mt-2">
<button className="inline-flex gap-2 ring-1 ring-indigo-300 hover:bg-indigo-300 transition text-sm font-medium text-neutral-900 bg-indigo-400 rounded-xl pt-2.5 pr-4 pb-2.5 pl-4 shadow items-center" type="submit">
<i className="w-4 h-4" data-lucide="send"></i>
                                      Subscribe
                                    </button>
</div>
</form>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-8 pt-12">
<div className="">
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Product</h4>
<ul className="mt-3 space-y-2 text-sm">
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#"> AURA One</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#"> AURA Pro</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition inline-flex items-center gap-2" href="#"> Accessories</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Technology</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white transition" href="#">Drivers</a></li>
<li className=""><a className="text-neutral-300 hover:text-white transition" href="#">Software</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">App</a></li>
</ul>
</div>
<div className="">
<h4 className="text-white/80 text-xs uppercase tracking-[0.2em]">Company</h4>
<ul className="mt-3 space-y-2 text-sm">
<li><a className="text-neutral-300 hover:text-white transition" href="#">About</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-neutral-300 hover:text-white transition" href="#">Careers</a></li>
</ul>
</div>
<div className="">
<h4 className="uppercase text-xs text-white/80 tracking-[0.2em]">Follow Us</h4>
<div className="mt-4 flex items-center gap-3">
<a aria-label="Instagram" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a aria-label="X" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="twitter"></i>
</a>
<a aria-label="YouTube" className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-white/5 ring-1 ring-white/10 text-white/80 hover:text-white hover:bg-white/10 transition" href="#">
<i className="w-4 h-4" data-lucide="youtube"></i>
</a>
</div>
</div>
</div>
<div className="mt-10 pt-6 border-t border-white/10 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
<p className="text-white/60 text-sm">© <span id="year">2025</span> AURA Audio. All rights reserved.</p>
<div className="flex items-center gap-4 text-white/60 text-sm">
<a className="hover:text-white transition" href="#">Privacy</a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition" href="#">Terms</a>
<span className="hidden sm:block text-white/20">•</span>
<a className="hover:text-white transition inline-flex items-center gap-1" href="#section-0" onclick="scrollToIndex(0)">
<i className="w-4 h-4" data-lucide="arrow-up"></i> Back to top
                        </a>
</div>
</div>
</div>

<div aria-hidden="true" className="pointer-events-none absolute -top-16 -right-10 h-72 w-72 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div aria-hidden="true" className="pointer-events-none absolute -bottom-20 -left-10 h-80 w-80 rounded-full bg-purple-500/10 blur-3xl"></div>
</div>
</footer>
</section>
</main>



    </>
  );
}
