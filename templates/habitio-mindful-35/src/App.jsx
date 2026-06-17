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



        // Initialize Lucide icons
        lucide.createIcons({
            strokeWidth: 1.5
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
      

<nav className="absolute top-0 left-0 right-0 z-50 px-6 py-6 lg:px-12 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="w-8 h-8 text-[#3AB5E5]" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m12 2 3 7h7l-5.5 4 2 7-6-4.5L6.5 20l2-7L3 9h7z"></path>
</svg>
<span className="font-serif text-2xl tracking-tight text-slate-900 font-medium lowercase">habitio</span>
</div>
<div className="hidden md:flex items-center gap-8 text-lg font-medium text-slate-700">
<a className="hover:text-slate-900 transition-colors" href="#">Philosophy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Method</a>
<a className="hover:text-slate-900 transition-colors" href="#">Stories</a>
</div>
<button className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-slate-800 transition-all focus:ring-4 focus:ring-slate-200">
            Get the App
        </button>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 lg:px-12 bg-[#84D6F5] overflow-hidden min-h-[90vh] flex items-center">

<div className="absolute top-0 right-0 w-full h-full pointer-events-none opacity-50 z-0">
<div className="absolute top-1/4 right-[10%] w-64 h-64 bg-white/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-1/4 left-[20%] w-96 h-96 bg-[#3AB5E5]/20 rounded-full blur-3xl"></div>
</div>
<div className="max-w-7xl mx-auto w-full grid lg:grid-cols-2 gap-16 lg:gap-8 items-center relative z-10">

<div className="max-w-2xl">
<h1 className="font-serif text-6xl lg:text-8xl leading-[1.05] tracking-tight font-medium text-slate-900 mb-8">
                    Build habits,<br/>
                    without<br/>
                    pressure.
                </h1>
<div className="space-y-2 mb-10 text-lg lg:text-xl text-slate-800 font-medium">
<p>No streaks. No punishment.</p>
<p className="opacity-80">Just space to build habits that fit your life.</p>
</div>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-slate-900 text-white px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-800 transition-all shadow-lg hover:shadow-xl flex items-center justify-center gap-2">
                        Start your journey
                        <i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="relative h-[500px] lg:h-[600px] w-full flex items-center justify-center">

<div className="absolute inset-4 lg:inset-y-0 lg:left-12 lg:right-0 rounded-[3rem] overflow-hidden shadow-2xl z-0">
<img alt="Mindful journaling setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>

<div className="absolute inset-0 bg-[#84D6F5]/20 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent opacity-60"></div>
</div>

<div className="absolute z-20 top-[15%] left-[5%] rotate-[-12deg] bg-[#E2F0CB] text-[#557A3A] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#E2F0CB]/50 backdrop-blur-sm">
                    Focused
                </div>
<div className="absolute z-20 top-[30%] left-[25%] rotate-[5deg] bg-[#FDF0AA] text-[#8C7A20] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#FDF0AA]/50 backdrop-blur-sm">
                    Overwhelmed
                </div>
<div className="absolute z-20 top-[45%] left-[45%] rotate-[-5deg] bg-[#A9E3F8] text-[#1E6787] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#A9E3F8]/50 backdrop-blur-sm">
                    Restarting
                </div>
<div className="absolute z-20 top-[60%] left-[20%] rotate-[10deg] bg-[#FFC4E1] text-[#9D366A] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#FFC4E1]/50 backdrop-blur-sm">
                    Tired
                </div>
<div className="absolute z-20 top-[70%] left-[55%] rotate-[-8deg] bg-[#C1F0D0] text-[#317349] px-5 py-2 rounded-full text-base font-medium shadow-sm border border-[#C1F0D0]/50 backdrop-blur-sm">
                    Calm
                </div>

<div className="relative z-10 bg-white/95 backdrop-blur-md rounded-[2.5rem] p-8 shadow-2xl shadow-slate-900/20 w-full max-w-sm ml-auto mr-8 border border-white/50">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-medium text-slate-800">Gentle Progress</h3>
<i className="w-5 h-5 text-slate-400" data-lucide="more-horizontal"></i>
</div>
<div className="space-y-6">

<div className="relative">
<div className="flex justify-between text-sm text-slate-500 mb-2">
<span>Drink water</span>
</div>
<div className="h-[60px] w-full border-b border-dashed border-slate-200 relative flex items-end pb-2">
<svg className="absolute top-0 left-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,80 Q25,80 50,40 T100,10" fill="none" stroke="#B485E4" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="100" cy="10" fill="white" r="4" stroke="#B485E4" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="relative">
<div className="flex justify-between text-sm text-slate-500 mb-2">
<span>Walking</span>
</div>
<div className="h-[60px] w-full border-b border-dashed border-slate-200 relative flex items-end pb-2">
<svg className="absolute top-0 left-0 w-full h-full" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0,90 Q30,90 60,60 T100,50" fill="none" stroke="#84D6F5" strokeLinecap="round" strokeWidth="3"></path>
<circle cx="100" cy="50" fill="white" r="4" stroke="#84D6F5" strokeWidth="2"></circle>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-slate-900 mb-6">A method designed for real life</h2>
<p className="text-xl text-slate-600">Life fluctuates. Your habit tracker should too. We focus on noticing patterns rather than maintaining perfect streaks.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="relative bg-[#3AB5E5] rounded-[2rem] p-10 text-white flex flex-col h-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-sm overflow-hidden z-10 group">

<img alt="Mindful stretching" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-60 -z-10 transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="text-2xl font-medium opacity-90 mb-6 font-serif">01</div>
<div className="flex-grow flex items-center justify-center">
<i className="w-20 h-20 opacity-80 backdrop-blur-sm bg-white/10 p-4 rounded-3xl" data-lucide="blocks" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-serif tracking-tight font-medium mb-3 text-white">Start with one habit</h3>
<p className="text-lg opacity-90 leading-relaxed font-light text-white">Choose a habit that feels realistic for your current routine.</p>
</div>
</div>

<div className="relative bg-[#B485E4] rounded-[2rem] p-10 text-white flex flex-col h-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-sm overflow-hidden z-10 group">

<img alt="Walking in nature" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-50 -z-10 transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="text-2xl font-medium opacity-90 mb-6 font-serif">02</div>
<div className="flex-grow flex items-center justify-center">
<i className="w-20 h-20 opacity-80 backdrop-blur-sm bg-white/10 p-4 rounded-3xl" data-lucide="bar-chart-3" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<h3 className="text-3xl font-serif tracking-tight font-medium mb-3 text-white">Notice patterns</h3>
<p className="text-lg opacity-90 leading-relaxed font-light text-white">As days pass, you'll feel more natural rhythms emerge.</p>
</div>
</div>

<div className="bg-white border border-slate-100 rounded-[2rem] p-10 text-slate-800 flex flex-col h-[420px] transition-transform hover:-translate-y-1 duration-300 shadow-sm lg:col-span-1 md:col-span-2 lg:col-auto relative overflow-hidden">
<div className="text-2xl font-medium text-slate-400 mb-6 font-serif">03</div>
<div className="flex-grow flex flex-col justify-center gap-4 relative z-10">
<div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm shadow-sm p-4 rounded-2xl border border-slate-50">
<div className="w-12 h-12 rounded-full bg-[#84D6F5]/20 flex items-center justify-center text-[#3AB5E5]">
<i className="w-6 h-6" data-lucide="droplet"></i>
</div>
<div>
<div className="text-base font-medium">Drink water</div>
<div className="text-sm text-slate-500">3/6 days</div>
</div>
</div>
<div className="flex items-center gap-4 bg-white/80 backdrop-blur-sm shadow-sm p-4 rounded-2xl border border-slate-50">
<div className="w-12 h-12 rounded-full bg-[#B485E4]/20 flex items-center justify-center text-[#B485E4]">
<i className="w-6 h-6" data-lucide="book-open"></i>
</div>
<div>
<div className="text-base font-medium">Reading</div>
<div className="text-sm text-slate-500">2/10 min</div>
</div>
</div>
</div>
<div className="relative z-10 mt-6">
<h3 className="text-3xl font-serif tracking-tight font-medium mb-3">Adjust gently</h3>
<p className="text-lg text-slate-600 leading-relaxed font-light">Missed a day? The app understands. Just pick up when you're ready.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 lg:py-32 px-6 lg:px-12 bg-white overflow-hidden">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl order-2 lg:order-1">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#B485E4]/10 text-[#B485E4] text-sm font-medium mb-8">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                    A mindful approach
                </div>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium text-slate-900 mb-6 leading-[1.1]">
                    Track rhythms, not streaks.
                </h2>
<p className="text-xl text-slate-600 mb-8 leading-relaxed">
                    Our interface visualizes your habits as gentle waves and rhythms. It's designed to help you zoom out and see the bigger picture, removing the guilt of a broken chain.
                </p>

<div className="mb-8 rounded-3xl overflow-hidden h-40 w-full shadow-sm relative">
<img alt="Minimal workspace setup" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
<ul className="space-y-6 text-lg text-slate-700">
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#84D6F5]/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#3AB5E5]" data-lucide="check"></i>
</div>
<span>See your week at a glance with soothing, non-judgmental visualizations.</span>
</li>
<li className="flex items-start gap-4">
<div className="mt-1 w-6 h-6 rounded-full bg-[#B485E4]/20 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-[#B485E4]" data-lucide="check"></i>
</div>
<span>Set realistic intentions instead of rigid daily targets.</span>
</li>
</ul>
</div>

<div className="order-1 lg:order-2 flex justify-center lg:justify-end relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-[#84D6F5]/30 to-[#B485E4]/30 rounded-full blur-3xl -z-10"></div>

<div className="w-[320px] h-[650px] bg-slate-900 rounded-[3rem] p-3 shadow-2xl relative border-4 border-slate-800">

<div className="w-full h-full bg-gradient-to-b from-[#7AC6E7] to-white rounded-[2.5rem] overflow-hidden relative flex flex-col">

<div className="absolute top-0 inset-x-0 h-7 flex justify-center z-20">
<div className="w-32 h-6 bg-slate-900 rounded-b-3xl"></div>
</div>

<div className="pt-12 px-6 pb-6 text-white text-center relative z-10">
<p className="text-xs font-medium uppercase tracking-wider mb-1 opacity-80">Habit Rhythm</p>
<h3 className="font-serif text-2xl font-medium tracking-tight">A Mindful Week</h3>

<div className="mt-8 relative h-24 flex items-end justify-center">
<svg className="absolute bottom-0 w-full h-[150%] left-0" preserveaspectratio="none" viewbox="0 0 100 50">
<path d="M0,50 Q50,0 100,50" fill="none" stroke="rgba(255,255,255,0.3)" stroke-dasharray="4 4" strokeWidth="2"></path>
<path d="M0,50 Q50,10 80,30" fill="none" stroke="white" strokeLinecap="round" strokeWidth="3"></path>

<circle cx="80" cy="30" fill="#FDF0AA" r="4" shadow="0 0 10px #FDF0AA"></circle>
</svg>
<div className="w-full flex justify-between text-xs font-medium opacity-80 px-4 pb-1">
<span>Mon</span>
<span>Tue</span>
<span>Wed</span>
<span>Thu</span>
</div>
</div>
</div>

<div className="flex-grow bg-white rounded-t-3xl p-6 relative z-10 flex flex-col gap-6">

<div className="grid grid-cols-3 gap-3">
<div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
<div className="text-[10px] text-slate-400 mb-1">Drink water</div>
<div className="text-sm font-medium text-slate-800">3/6</div>
</div>
<div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
<div className="text-[10px] text-slate-400 mb-1">Walking</div>
<div className="text-sm font-medium text-slate-800">20 min</div>
</div>
<div className="bg-slate-50 rounded-xl p-3 text-center border border-slate-100">
<div className="text-[10px] text-slate-400 mb-1">Reading</div>
<div className="text-sm font-medium text-slate-800">10 min</div>
</div>
</div>
<div>
<div className="flex justify-between items-center mb-4">
<h4 className="text-sm font-medium text-slate-800">Today's Progress</h4>
<span className="text-lg font-serif font-medium text-slate-800">3/6</span>
</div>
<div className="h-2 w-full bg-slate-100 rounded-full overflow-hidden">
<div className="h-full bg-gradient-to-r from-[#84D6F5] to-[#B485E4] w-1/2 rounded-full"></div>
</div>
</div>
</div>

<div className="h-20 bg-slate-900 absolute bottom-0 w-full rounded-b-[2.5rem] flex justify-around items-center px-6 text-slate-400">
<i className="w-6 h-6 text-white" data-lucide="home"></i>
<i className="w-6 h-6" data-lucide="bar-chart-2"></i>
<i className="w-8 h-8 text-[#B485E4]" data-lucide="plus-circle"></i>
<i className="w-6 h-6" data-lucide="award"></i>
<i className="w-6 h-6" data-lucide="user"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-slate-900 text-white py-24 px-6 text-center border-t border-slate-800 overflow-hidden z-10">

<img alt="Calming forest nature" className="absolute inset-0 w-full h-full object-cover mix-blend-overlay opacity-20 -z-10" src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="max-w-3xl mx-auto flex flex-col items-center relative z-10">
<svg className="w-12 h-12 text-[#B485E4] mb-8" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24">
<path d="m12 2 3 7h7l-5.5 4 2 7-6-4.5L6.5 20l2-7L3 9h7z"></path>
</svg>
<h2 className="font-serif text-4xl lg:text-5xl tracking-tight font-medium mb-6 text-white">Ready for a gentle start?</h2>
<p className="text-xl text-slate-300 mb-10 font-light">Join thousands building sustainable habits without the guilt.</p>
<button className="bg-white text-slate-900 px-8 py-4 rounded-full text-lg font-medium hover:bg-slate-100 transition-colors shadow-lg hover:shadow-xl">
                Download Habitio Free
            </button>
<div className="mt-20 flex gap-6 text-sm text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>


    </>
  );
}
