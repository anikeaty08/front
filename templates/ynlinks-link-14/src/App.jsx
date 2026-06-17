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
colors: {
brand: {
DEFAULT: '#00D66F',
dark: '#00B35D',
light: '#E5FBF1',
},
stone: {
50: '#FAF9F6',
900: '#1c1917',
},
surface: {
light: '#FFFFFF',
dim: '#F3F4F6',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Plus Jakarta Sans', 'sans-serif'],
},
letterSpacing: {
tightest: '-0.04em',
tighter: '-0.02em',
},
animation: {
'blob': 'blob 7s infinite',
'scroll': 'scroll 30s linear infinite',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
},
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



      // Scroll Reveal Logic
      const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.1
      };

      const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
              if (entry.isIntersecting) {
                  entry.target.classList.add('visible');
                  observer.unobserve(entry.target);
              }
          });
      }, observerOptions);

      document.querySelectorAll('.reveal-on-scroll').forEach(el => {
          observer.observe(el);
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
      

<nav className="fixed top-4 left-0 right-0 z-50 px-4 md:px-6">
<div className="max-w-6xl mx-auto glass rounded-full px-6 h-14 flex items-center justify-between shadow-sm transition-all duration-300">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-7 h-7 flex items-center justify-center">
<span className="iconify text-stone-900 absolute transform transition-all group-hover:scale-110" data-icon="lucide:command" data-strokeWidth="1.5" data-width="24"></span>
</div>
<span className="font-display font-semibold text-lg tracking-tightest">
            YNLinks
          </span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#features">
            How It Works
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#earnings">
            Earnings
          </a>
<a className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors" href="#creators">
            Creators
          </a>
</div>

<div className="flex items-center gap-3">
<a className="hidden sm:block text-sm font-medium text-stone-600 hover:text-stone-900 px-3 py-2" href="#">
            Login
          </a>
<a className="bg-stone-900 text-white px-5 py-2 rounded-full text-sm font-medium hover:bg-stone-800 transition-transform active:scale-95 shadow-lg shadow-stone-900/10" href="#">
            Start Free
          </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 inset-x-0 h-[800px] overflow-hidden -z-10 pointer-events-none">
<div className="absolute top-0 left-1/4 w-[600px] h-[600px] bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 right-1/4 w-[600px] h-[600px] bg-brand rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/3 w-[600px] h-[600px] bg-yellow-100 rounded-full mix-blend-multiply filter blur-3xl opacity-40 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 brightness-100 contrast-150"></div>
</div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left reveal-on-scroll visible">
<h1 className="font-display text-6xl md:text-7xl lg:text-8xl font-bold tracking-tightest leading-[0.95] text-stone-900 mb-8">
            Earn money from your link in bio —
            <br/>
<span className="text-stone-400">every click.</span>
</h1>
<p className="text-lg md:text-xl text-stone-600 mb-10 leading-relaxed font-medium tracking-tight max-w-lg mx-auto lg:mx-0">
            Turn your bio into a smart earning page. We place premium ads from
            global ad networks inside your bio — you earn automatically when
            your audience clicks.
          </p>

<form className="flex flex-col sm:flex-row items-center gap-3 max-w-md mx-auto lg:mx-0 p-2 bg-white rounded-2xl border border-stone-200 shadow-xl shadow-stone-200/50 hover:border-stone-300 transition-colors duration-300 focus-within:ring-2 focus-within:ring-brand/50 focus-within:border-brand">
<div className="flex items-center pl-4 text-stone-400 font-medium whitespace-nowrap">
<span className="iconify mr-2" data-icon="lucide:link" data-width="16"></span>
              linkspace.bio/
            </div>
<input className="w-full bg-transparent border-none focus:ring-0 text-stone-900 font-semibold placeholder:text-stone-300 py-3 outline-none" placeholder="yourname" type="text"/>
<button className="w-full sm:w-auto bg-brand hover:bg-brand-dark text-stone-900 font-semibold px-6 py-3 rounded-xl transition-all whitespace-nowrap" type="button">
              Create Your Earning Bio
            </button>
</form>
<p className="mt-4 text-xs text-stone-500 font-medium flex items-center justify-center lg:justify-start gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
            Free to get started. No credit card needed.
          </p>
</div>

<div className="relative flex justify-center lg:justify-end reveal-on-scroll visible delay-100">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-stone-200 to-white rounded-full opacity-50 blur-3xl -z-10"></div>

<div className="relative w-[320px] h-[640px] bg-stone-900 rounded-[3rem] p-3 shadow-[0_50px_100px_-20px_rgba(50,50,93,0.25),0_30px_60px_-30px_rgba(0,0,0,0.3)] border-4 border-stone-800 rotate-[-6deg] hover:rotate-0 transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)] animate-float">

<div className="w-full h-full bg-[#f3f3f1] rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="h-8 w-full absolute top-0 z-20 flex justify-between px-6 items-center">
<span className="text-[10px] font-bold">9:41</span>
<div className="flex gap-1.5">
<div className="w-4 h-2.5 bg-black rounded-[2px]"></div>
</div>
</div>

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>

<div className="flex-1 overflow-y-auto pt-14 px-6 pb-8 no-scrollbar">
<div className="flex flex-col items-center mb-6">
<div className="w-20 h-20 rounded-full border-4 border-white shadow-sm overflow-hidden mb-3 relative">
<img alt="Jenny" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=200&amp;h=200"/>
</div>
<h3 className="font-display font-bold text-lg text-stone-900">
                    Jenny
                  </h3>
<p className="text-xs text-stone-500">Digital Creator</p>
<div className="mt-4 w-full grid grid-cols-2 gap-2">
<div className="bg-white p-2 rounded-lg text-center border border-stone-200 shadow-sm">
<p className="text-[10px] text-stone-400 font-bold uppercase">
                        Daily Earn
                      </p>
<p className="text-brand font-bold text-sm">$124.50</p>
</div>
<div className="bg-white p-2 rounded-lg text-center border border-stone-200 shadow-sm">
<p className="text-[10px] text-stone-400 font-bold uppercase">
                        Fill Rate
                      </p>
<p className="text-stone-900 font-bold text-sm">100%</p>
</div>
</div>
</div>
<div className="space-y-3">
<div className="relative overflow-hidden group cursor-pointer">
<div className="relative bg-stone-50 border border-stone-200 rounded-xl p-3 flex items-center justify-between transition-all shadow-sm">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-stone-200 rounded-lg flex items-center justify-center text-xs font-bold text-stone-400">
                          AD
                        </div>
<div className="flex flex-col text-left">
<span className="font-bold text-sm text-stone-900">
                            Premium Ad Space
                          </span>
<span className="text-[10px] text-stone-400">
                            Sponsored • 100% Fill
                          </span>
</div>
</div>
<span className="iconify text-stone-300" data-icon="lucide:external-link" data-width="14"></span>
</div>
</div>
<div className="w-full bg-white border border-stone-200 rounded-xl p-3 text-center font-medium text-sm shadow-sm hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-between px-4">
<span>Join Channel</span>
<span className="iconify text-stone-400" data-icon="lucide:message-circle" data-width="16"></span>
</div>
<div className="w-full bg-white border border-stone-200 rounded-xl p-3 text-center font-medium text-sm shadow-sm hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-between px-4">
<span>Instagram</span>
<span className="iconify text-stone-400" data-icon="lucide:instagram" data-width="16"></span>
</div>
<div className="w-full bg-white border border-stone-200 rounded-xl p-3 text-center font-medium text-sm shadow-sm hover:scale-[1.02] transition-all cursor-pointer flex items-center justify-between px-4">
<span>Latest Video</span>
<span className="iconify text-stone-400" data-icon="lucide:youtube" data-width="16"></span>
</div>
</div>
</div>

<div className="h-12 flex items-center justify-center pb-2 opacity-30">
<span className="iconify" data-icon="lucide:command" data-width="16"></span>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full py-12 border-y border-stone-200 bg-white overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex w-max animate-scroll gap-12 items-center">
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Google Ads
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Meta
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Amazon
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Taboola
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          AppLovin
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Unity
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Google Ads
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Meta
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Amazon
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Taboola
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          AppLovin
        </span>
<span className="text-2xl font-display font-bold text-stone-300 tracking-tighter uppercase">
          Unity
        </span>
</div>
</div>

<section className="py-24 px-6 bg-stone-50" id="features">
<div className="max-w-7xl mx-auto">
<div className="mb-16 text-center max-w-3xl mx-auto reveal-on-scroll">
<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tightest mb-4">
            Built for Creators
          </h2>
<p className="text-lg text-stone-500 font-medium">
            Everything you need to grow your audience and your income.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[280px]">

<div className="group md:col-span-2 row-span-2 bg-white rounded-3xl p-8 border border-stone-200 shadow-sm overflow-hidden relative transition-all hover:shadow-xl hover:border-brand/30 reveal-on-scroll">
<div className="relative z-10">
<div className="w-12 h-12 rounded-full bg-purple-100 text-purple-600 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-2xl mb-2">
                Earnings-Enabled Bio
              </h3>
<p className="text-stone-500 max-w-xs">
                Your bio link is monetized automatically from day one. We handle
                the ads, you handle the content.
              </p>
</div>

<div className="absolute right-[-40px] bottom-[-40px] w-[300px] h-[300px] md:w-[400px] md:h-[400px] bg-stone-50 rounded-tl-3xl border-t border-l border-stone-100 p-6 flex gap-4 rotate-[-6deg] group-hover:rotate-0 transition-transform duration-500">
<div className="flex-1 bg-black rounded-xl h-full shadow-lg"></div>
<div className="flex-1 bg-[#F5F5F0] rounded-xl h-full shadow-lg"></div>
<div className="flex-1 bg-brand rounded-xl h-full shadow-lg"></div>
</div>
</div>

<div className="bg-stone-900 text-white md:col-span-1 rounded-3xl p-6 border border-stone-800 shadow-sm relative overflow-hidden group hover:shadow-xl transition-all reveal-on-scroll delay-75">
<div className="flex justify-between items-start mb-12">
<h3 className="font-display font-bold text-xl">Live Analytics</h3>
<span className="iconify text-stone-500" data-icon="lucide:bar-chart-2" data-width="24"></span>
</div>

<div className="flex items-end gap-1 h-24 w-full">
<div className="flex-1 bg-stone-700 rounded-t h-[40%] group-hover:bg-brand transition-colors duration-300"></div>
<div className="flex-1 bg-stone-700 rounded-t h-[60%] group-hover:bg-brand transition-colors duration-300 delay-75"></div>
<div className="flex-1 bg-stone-700 rounded-t h-[30%] group-hover:bg-brand transition-colors duration-300 delay-100"></div>
<div className="flex-1 bg-stone-700 rounded-t h-[80%] group-hover:bg-brand transition-colors duration-300 delay-150"></div>
<div className="flex-1 bg-stone-700 rounded-t h-[55%] group-hover:bg-brand transition-colors duration-300 delay-200"></div>
</div>
<p className="mt-4 text-3xl font-display font-bold">
              $3,240.50
              <span className="text-sm font-normal text-stone-400">revenue</span>
</p>
</div>

<div className="md:col-span-1 rounded-3xl p-6 border border-stone-200 bg-white shadow-sm flex flex-col justify-between group hover:border-blue-200 transition-all reveal-on-scroll delay-100">
<div>
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-500 flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:globe" data-width="20"></span>
</div>
<h3 className="font-display font-bold text-lg">
                Global Monetization
              </h3>
<p className="text-sm text-stone-500 mt-2">
                Earn from visitors anywhere in the world.
              </p>
</div>
</div>

<div className="md:col-span-1 rounded-3xl p-0 border border-stone-200 bg-black overflow-hidden relative group reveal-on-scroll">
<img className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 flex flex-col justify-end p-6">
<div className="w-10 h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white mb-4 group-hover:scale-110 transition-transform">
<span className="iconify" data-fill="white" data-icon="lucide:play" data-width="16"></span>
</div>
<h3 className="font-display font-bold text-lg text-white">
                Smart Ad Placement
              </h3>
<p className="text-sm text-stone-300">
                Ads blend naturally with your links, never spammy.
              </p>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 bg-[#F2FCE2] rounded-3xl p-8 border border-[#e2f0d9] shadow-sm relative overflow-hidden group reveal-on-scroll delay-75">
<div className="relative z-10 max-w-xs">
<div className="w-12 h-12 rounded-full bg-green-900 text-white flex items-center justify-center mb-4">
<span className="iconify" data-icon="lucide:dollar-sign" data-width="24"></span>
</div>
<h3 className="font-display font-bold text-2xl text-green-900 mb-2">
                Fast Payouts
              </h3>
<p className="text-green-800/80">
                Withdraw earnings easily once threshold is reached. Daily
                payments available.
              </p>
<button className="mt-6 bg-green-900 text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-green-800 transition-colors">
                View Options
              </button>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 hidden md:block">
<div className="w-48 h-32 bg-white rounded-xl shadow-lg border border-green-100 p-4 rotate-3 group-hover:rotate-6 transition-transform">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-bold text-stone-400">BALANCE</span>
<span className="text-green-600">
<span className="iconify" data-icon="lucide:trending-up"></span>
</span>
</div>
<div className="text-3xl font-display font-bold text-stone-900">
                  $4,290.00
                </div>
</div>
</div>
</div>

<div className="md:col-span-1 rounded-3xl p-6 border border-stone-200 bg-white shadow-sm flex flex-col items-center justify-center text-center group hover:border-brand/50 transition-all reveal-on-scroll delay-100">
<div className="w-32 h-32 bg-stone-50 rounded-xl mb-4 p-2 group-hover:scale-105 transition-transform">
<span className="iconify w-full h-full text-stone-800" data-icon="lucide:link"></span>
</div>
<h3 className="font-display font-bold text-lg">Short Links</h3>
<p className="text-sm text-stone-500">
              Share branded short links that also earn revenue.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-900 text-white relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand rounded-full filter blur-[120px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="reveal-on-scroll">
<span className="inline-block px-3 py-1 rounded-full border border-stone-700 bg-stone-800/50 text-xs font-semibold tracking-wide text-brand mb-6">
            ANALYTICS
          </span>
<h2 className="font-display text-4xl lg:text-5xl font-bold tracking-tightest mb-6 leading-tight">
            Real-time Data
            <br/>
<span className="text-brand">Track earnings.</span>
</h2>
<div className="grid grid-cols-2 gap-8 mt-12">
<div>
<div className="text-4xl font-display font-bold text-white mb-1">
                142k
              </div>
<div className="text-stone-400 text-sm">Total Clicks</div>
</div>
<div>
<div className="text-4xl font-display font-bold text-white mb-1">
                28k
              </div>
<div className="text-stone-400 text-sm">Ad Clicks</div>
</div>
<div>
<div className="text-4xl font-display font-bold text-white mb-1">
                $3.2k
              </div>
<div className="text-stone-400 text-sm">Est. Revenue</div>
</div>
<div>
<div className="text-4xl font-display font-bold text-white mb-1">
                $458
              </div>
<div className="text-stone-400 text-sm">Weekly Earnings</div>
</div>
</div>
</div>

<div className="relative h-[400px] reveal-on-scroll delay-100">
<div className="absolute inset-0 bg-gradient-to-t from-stone-900 via-transparent to-transparent z-10"></div>

<div className="grid grid-cols-4 gap-4 animate-float">

<div className="col-span-1 aspect-square rounded-2xl bg-stone-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1517841905240-472988babdf9?w=300"/>
</div>
<div className="col-span-2 aspect-video rounded-2xl bg-stone-800 overflow-hidden translate-y-8">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1522075469751-3a3694fb60ed?w=500"/>
</div>
<div className="col-span-1 aspect-square rounded-2xl bg-stone-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300"/>
</div>

<div className="col-span-2 aspect-video rounded-2xl bg-stone-800 overflow-hidden -translate-y-4">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?w=500"/>
</div>
<div className="col-span-1 aspect-square rounded-2xl bg-stone-800 overflow-hidden translate-y-4">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300"/>
</div>
<div className="col-span-1 aspect-square rounded-2xl bg-stone-800 overflow-hidden">
<img className="w-full h-full object-cover opacity-70" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="font-display text-4xl md:text-5xl font-bold tracking-tightest mb-4">
            How it works
          </h2>
<p className="text-lg text-stone-500">
            Four simple steps to turn traffic into revenue.
          </p>
</div>
<div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto items-start">
<div className="p-8 rounded-[2rem] border border-stone-200 bg-white hover:border-brand transition-colors reveal-on-scroll">
<h3 className="font-display font-bold text-xl mb-4">1. Create Bio</h3>
<p className="text-sm text-stone-500 mb-6">
              Create your earning bio link in seconds. Customize it to match
              your brand identity.
            </p>
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 font-bold text-lg">
              1
            </div>
</div>
<div className="p-8 rounded-[2rem] border border-stone-200 bg-white hover:border-brand transition-colors reveal-on-scroll delay-75">
<h3 className="font-display font-bold text-xl mb-4">2. Share Link</h3>
<p className="text-sm text-stone-500 mb-6">
              Share it on Instagram, YouTube, X, WhatsApp, or anywhere you have
              an audience.
            </p>
<div className="w-12 h-12 bg-stone-100 rounded-full flex items-center justify-center text-stone-900 font-bold text-lg">
              2
            </div>
</div>
<div className="p-8 rounded-[2rem] bg-stone-900 text-white shadow-xl reveal-on-scroll delay-100 relative overflow-hidden">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-brand to-green-400"></div>
<h3 className="font-display font-bold text-xl mb-4 text-brand">
              3. Get Paid
            </h3>
<p className="text-sm text-stone-300 mb-6">
              Premium ads appear naturally. You earn revenue every time a
              visitor clicks an ad.
            </p>
<div className="w-12 h-12 bg-stone-800 rounded-full flex items-center justify-center text-white font-bold text-lg">
              3
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative overflow-hidden">
<div className="max-w-5xl mx-auto bg-brand rounded-[3rem] p-12 md:p-20 text-center relative overflow-hidden shadow-2xl reveal-on-scroll">

<div className="absolute top-0 left-0 w-64 h-64 bg-white opacity-20 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 right-0 w-64 h-64 bg-blue-500 opacity-20 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>
<h2 className="relative font-display text-4xl md:text-6xl font-bold text-stone-900 mb-8 tracking-tightest">
          Start earning with YNLinks.
        </h2>
<div className="relative flex flex-col sm:flex-row gap-4 justify-center items-center">
<form className="flex-1 max-w-md w-full bg-white p-2 rounded-full shadow-lg flex items-center">
<span className="pl-6 font-semibold text-stone-400 whitespace-nowrap">
              linkspace.bio/
            </span>
<input className="w-full bg-transparent border-none focus:ring-0 py-2 font-bold text-stone-900 placeholder:text-stone-300 outline-none" placeholder="username" type="text"/>
<button className="bg-stone-900 text-white rounded-full px-6 py-3 font-semibold hover:bg-black transition-colors">
              Start Free
            </button>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-20 pb-10 border-t border-stone-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-10 mb-20">
<div className="col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 flex items-center justify-center bg-stone-900 text-white rounded-lg">
<span className="iconify" data-icon="lucide:command" data-width="20"></span>
</div>
<span className="font-display font-bold text-xl tracking-tighter">
                YNLinks
              </span>
</a>
<p className="text-stone-500 text-sm max-w-xs leading-relaxed">
              The only link you'll ever need. Connect your audience to all of
              your content and earn from every click.
            </p>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-stone-900">Company</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              About LinkSpace
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Careers
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Press
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Social Good
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-stone-900">Community</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              LinkSpace Blog
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Creator Report
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Charities
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Help Center
            </a>
</div>
<div className="flex flex-col gap-4">
<h4 className="font-bold text-stone-900">Legal</h4>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Privacy Policy
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Terms &amp; Conditions
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Cookie Notice
            </a>
<a className="text-sm text-stone-500 hover:text-stone-900 transition-colors" href="#">
              Trust Center
            </a>
</div>
</div>

<div className="w-full overflow-hidden">
<h1 className="font-display font-black text-[12vw] leading-none text-stone-100 text-center tracking-tighter select-none">
            YNLINKS
          </h1>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-8 pt-8 border-t border-stone-100 text-xs text-stone-400">
<p>© 2024 LinkSpace Inc. All rights reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-stone-900" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="18"></span>
</a>
<a className="hover:text-stone-900" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="18"></span>
</a>
<a className="hover:text-stone-900" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="18"></span>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
