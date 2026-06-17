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
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="spline-container absolute top-0 left-0 w-full h-full -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/herolightcopy-HWuYMA6IdNGk0VGuyvrItNGB" width="100%"></iframe></div></div>

<nav bis_size='{"x":0,"y":0,"w":753,"h":65,"abs_x":1740,"abs_y":250}' className="fixed top-0 left-0 right-0 z-50 backdrop-blur-md border-b bg-white/80 border-slate-200">
<div bis_size='{"x":0,"y":0,"w":753,"h":64,"abs_x":1740,"abs_y":250}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":24,"y":0,"w":705,"h":64,"abs_x":1764,"abs_y":250}' className="flex items-center justify-between h-16">
<div bis_size='{"x":24,"y":18,"w":70,"h":28,"abs_x":1764,"abs_y":268}' className="flex items-center">
<span bis_size='{"x":24,"y":18,"w":70,"h":28,"abs_x":1764,"abs_y":268}' className="text-xl font-semibold tracking-tight font-geist">VERNIS</span>
</div>
<div bis_size='{"x":206,"y":22,"w":247,"h":20,"abs_x":1946,"abs_y":272}' className="hidden md:flex items-center gap-8">
<a bis_size='{"x":206,"y":22,"w":56,"h":20,"abs_x":1946,"abs_y":272}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#features">Features</a>
<a bis_size='{"x":294,"y":22,"w":83,"h":20,"abs_x":2034,"abs_y":272}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#how-it-works">How it works</a>
<a bis_size='{"x":409,"y":22,"w":44,"h":20,"abs_x":2149,"abs_y":272}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#pricing">Pricing</a>
</div>
<div bis_size='{"x":566,"y":14,"w":162,"h":36,"abs_x":2306,"abs_y":264}' className="flex items-center gap-3">
<button bis_size='{"x":566,"y":22,"w":44,"h":20,"abs_x":2306,"abs_y":272}' className="text-sm font-medium transition-colors text-slate-600 hover:text-slate-900 font-geist">Sign in</button>
<button bis_size='{"x":622,"y":14,"w":106,"h":36,"abs_x":2362,"abs_y":264}' className="px-4 py-2 text-sm font-medium rounded-lg transition-colors bg-slate-900 text-white hover:bg-slate-800 font-geist">Get started</button>
</div>
</div>
</div>
</nav>

<section bis_size='{"x":0,"y":0,"w":753,"h":1455,"abs_x":1740,"abs_y":250}' className="sm:px-6 lg:px-8 pt-32 pr-4 pb-20 pl-4">
<div bis_size='{"x":24,"y":128,"w":705,"h":1247,"abs_x":1764,"abs_y":378}' className="max-w-7xl mr-auto ml-auto">
<div bis_size='{"x":24,"y":128,"w":705,"h":318,"abs_x":1764,"abs_y":378}' className="max-w-3xl mx-auto text-center">
<h1 bis_size='{"x":24,"y":128,"w":705,"h":120,"abs_x":1764,"abs_y":378}' className="text-5xl sm:text-6xl lg:text-7xl tracking-tight mb-6 font-playfair font-medium">
          Salon booking that works for everyone
        </h1>
<p bis_size='{"x":40,"y":272,"w":672,"h":84,"abs_x":1780,"abs_y":522}' className="text-lg sm:text-xl mb-10 max-w-2xl mx-auto text-slate-600 font-geist">
          A multi-tenant platform designed for salon owners, staff, and clients. Manage appointments, track capacity, and grow your business—all in one place.
        </p>
<div bis_size='{"x":24,"y":396,"w":705,"h":50,"abs_x":1764,"abs_y":646}' className="flex flex-col sm:flex-row gap-x-4 gap-y-4 items-center justify-center">
<button bis_size='{"x":167,"y":397,"w":191,"h":48,"abs_x":1907,"abs_y":647}' className="w-full sm:w-auto px-6 py-3 text-base font-medium rounded-lg transition-colors inline-flex items-center justify-center gap-2 bg-slate-900 text-white hover:bg-slate-800 font-geist">
            Start your salon
            <svg bis_size='{"x":318,"y":413,"w":16,"h":16,"abs_x":2058,"abs_y":663}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button bis_size='{"x":374,"y":396,"w":210,"h":50,"abs_x":2114,"abs_y":646}' className="sm:w-auto transition-colors hover:bg-slate-50 text-base font-medium text-slate-900 bg-gradient-to-r from-white/50 via-white/95 to-white/50 w-full border-slate-300 border rounded-lg pt-3 pr-6 pb-3 pl-6 font-geist">
            Book an appointment
          </button>
</div>
</div>

<div bis_size='{"x":24,"y":526,"w":705,"h":849,"abs_x":1764,"abs_y":776}' className="mt-20 relative">
<div bis_size='{"x":24,"y":526,"w":705,"h":849,"abs_x":1764,"abs_y":776}' className="absolute inset-0 bg-gradient-to-b to-transparent rounded-2xl from-slate-100/50"></div>
<div bis_size='{"x":24,"y":526,"w":705,"h":849,"abs_x":1764,"abs_y":776}' className="relative border rounded-2xl shadow-xl overflow-hidden bg-white border-slate-200">
<div bis_size='{"x":25,"y":527,"w":703,"h":51,"abs_x":1765,"abs_y":777}' className="border-b px-4 py-3 flex items-center gap-2 bg-slate-50 border-slate-200">
<div bis_size='{"x":41,"y":546,"w":48,"h":12,"abs_x":1781,"abs_y":796}' className="flex gap-1.5">
<div bis_size='{"x":41,"y":546,"w":12,"h":12,"abs_x":1781,"abs_y":796}' className="w-3 h-3 rounded-full bg-slate-300"></div>
<div bis_size='{"x":59,"y":546,"w":12,"h":12,"abs_x":1799,"abs_y":796}' className="w-3 h-3 rounded-full bg-slate-300"></div>
<div bis_size='{"x":77,"y":546,"w":12,"h":12,"abs_x":1817,"abs_y":796}' className="w-3 h-3 rounded-full bg-slate-300"></div>
</div>
<div bis_size='{"x":97,"y":539,"w":615,"h":26,"abs_x":1837,"abs_y":789}' className="flex-1 flex justify-center">
<div bis_size='{"x":315,"y":539,"w":177,"h":26,"abs_x":2055,"abs_y":789}' className="text-xs text-slate-600 bg-white border-slate-200 border rounded-md pt-1 pr-3 pb-1 pl-3 font-geist">salon.vernis.app/your-salon</div>
</div>
</div>
<div bis_size='{"x":25,"y":578,"w":703,"h":796,"abs_x":1765,"abs_y":828}' className="p-8 sm:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8">
<div bis_size='{"x":73,"y":626,"w":607,"h":298,"abs_x":1813,"abs_y":876}' className="space-y-4">
<div bis_size='{"x":73,"y":626,"w":607,"h":40,"abs_x":1813,"abs_y":876}' className="flex items-center gap-3">
<div bis_size='{"x":73,"y":626,"w":40,"h":40,"abs_x":1813,"abs_y":876}' className="w-10 h-10 rounded-full bg-gradient-to-br from-green-400 to-green-600"></div>
<div bis_size='{"x":125,"y":628,"w":173,"h":36,"abs_x":1865,"abs_y":878}'>
<div bis_size='{"x":125,"y":628,"w":173,"h":20,"abs_x":1865,"abs_y":878}' className="text-sm font-medium font-geist">Beauty Studio</div>
<div bis_size='{"x":125,"y":648,"w":173,"h":16,"abs_x":1865,"abs_y":898}' className="text-xs text-slate-500 font-geist">Open today 9:00 AM - 6:00 PM</div>
</div>
</div>
<div bis_size='{"x":73,"y":682,"w":607,"h":242,"abs_x":1813,"abs_y":932}' className="space-y-2 pt-4">
<div bis_size='{"x":73,"y":698,"w":607,"h":16,"abs_x":1813,"abs_y":948}' className="text-xs font-medium text-slate-500 uppercase tracking-wide font-geist">Services</div>
<div bis_size='{"x":73,"y":722,"w":607,"h":202,"abs_x":1813,"abs_y":972}' className="space-y-2">
<div bis_size='{"x":73,"y":722,"w":607,"h":62,"abs_x":1813,"abs_y":972}' className="flex items-center justify-between p-3 border rounded-lg transition-colors cursor-pointer border-slate-200 hover:border-slate-300">
<div bis_size='{"x":86,"y":735,"w":97,"h":36,"abs_x":1826,"abs_y":985}'>
<div bis_size='{"x":86,"y":735,"w":97,"h":20,"abs_x":1826,"abs_y":985}' className="text-sm font-medium font-geist">Haircut &amp; Style</div>
<div bis_size='{"x":86,"y":755,"w":97,"h":16,"abs_x":1826,"abs_y":1005}' className="text-xs text-slate-500 font-geist">60 min</div>
</div>
<div bis_size='{"x":641,"y":743,"w":25,"h":20,"abs_x":2381,"abs_y":993}' className="text-sm font-medium font-geist">$75</div>
</div>
<div bis_size='{"x":73,"y":792,"w":607,"h":62,"abs_x":1813,"abs_y":1042}' className="flex items-center justify-between p-3 border rounded-lg transition-colors cursor-pointer border-slate-200 hover:border-slate-300">
<div bis_size='{"x":86,"y":805,"w":60,"h":36,"abs_x":1826,"abs_y":1055}'>
<div bis_size='{"x":86,"y":805,"w":60,"h":20,"abs_x":1826,"abs_y":1055}' className="text-sm font-medium font-geist">Manicure</div>
<div bis_size='{"x":86,"y":825,"w":60,"h":16,"abs_x":1826,"abs_y":1075}' className="text-xs text-slate-500 font-geist">45 min</div>
</div>
<div bis_size='{"x":640,"y":813,"w":26,"h":20,"abs_x":2380,"abs_y":1063}' className="text-sm font-medium font-geist">$45</div>
</div>
<div bis_size='{"x":73,"y":862,"w":607,"h":62,"abs_x":1813,"abs_y":1112}' className="flex items-center justify-between p-3 border rounded-lg transition-colors cursor-pointer border-slate-200 hover:border-slate-300">
<div bis_size='{"x":86,"y":875,"w":106,"h":36,"abs_x":1826,"abs_y":1125}'>
<div bis_size='{"x":86,"y":875,"w":106,"h":20,"abs_x":1826,"abs_y":1125}' className="text-sm font-medium font-geist">Color Treatment</div>
<div bis_size='{"x":86,"y":895,"w":106,"h":16,"abs_x":1826,"abs_y":1145}' className="text-xs text-slate-500 font-geist">120 min</div>
</div>
<div bis_size='{"x":633,"y":883,"w":33,"h":20,"abs_x":2373,"abs_y":1133}' className="text-sm font-medium font-geist">$150</div>
</div>
</div>
</div>
</div>
<div bis_size='{"x":73,"y":956,"w":607,"h":370,"abs_x":1813,"abs_y":1206}' className="space-y-4">
<div bis_size='{"x":73,"y":956,"w":607,"h":16,"abs_x":1813,"abs_y":1206}' className="text-xs font-medium text-slate-500 uppercase tracking-wide font-geist">Select date &amp; time</div>
<div bis_size='{"x":73,"y":988,"w":607,"h":222,"abs_x":1813,"abs_y":1238}' className="border rounded-lg p-4 border-slate-200">
<div bis_size='{"x":90,"y":1005,"w":573,"h":16,"abs_x":1830,"abs_y":1255}' className="grid grid-cols-7 gap-1 mb-3">
<div bis_size='{"x":90,"y":1005,"w":78,"h":16,"abs_x":1830,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">S</div>
<div bis_size='{"x":172,"y":1005,"w":78,"h":16,"abs_x":1912,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">M</div>
<div bis_size='{"x":254,"y":1005,"w":78,"h":16,"abs_x":1994,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">T</div>
<div bis_size='{"x":337,"y":1005,"w":78,"h":16,"abs_x":2077,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">W</div>
<div bis_size='{"x":419,"y":1005,"w":78,"h":16,"abs_x":2159,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">T</div>
<div bis_size='{"x":502,"y":1005,"w":78,"h":16,"abs_x":2242,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">F</div>
<div bis_size='{"x":584,"y":1005,"w":78,"h":16,"abs_x":2324,"abs_y":1255}' className="text-center text-xs text-slate-500 font-medium font-geist">S</div>
</div>
<div bis_size='{"x":90,"y":1033,"w":573,"h":160,"abs_x":1830,"abs_y":1283}' className="grid grid-cols-7 gap-1">
<div bis_size='{"x":90,"y":1033,"w":78,"h":78,"abs_x":1830,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs text-slate-400"></div>
<div bis_size='{"x":172,"y":1033,"w":78,"h":78,"abs_x":1912,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs text-slate-400"></div>
<div bis_size='{"x":254,"y":1033,"w":78,"h":78,"abs_x":1994,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">1</div>
<div bis_size='{"x":337,"y":1033,"w":78,"h":78,"abs_x":2077,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">2</div>
<div bis_size='{"x":419,"y":1033,"w":78,"h":78,"abs_x":2159,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">3</div>
<div bis_size='{"x":502,"y":1033,"w":78,"h":78,"abs_x":2242,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">4</div>
<div bis_size='{"x":584,"y":1033,"w":78,"h":78,"abs_x":2324,"abs_y":1283}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">5</div>
<div bis_size='{"x":90,"y":1115,"w":78,"h":78,"abs_x":1830,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">6</div>
<div bis_size='{"x":172,"y":1115,"w":78,"h":78,"abs_x":1912,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">7</div>
<div bis_size='{"x":254,"y":1115,"w":78,"h":78,"abs_x":1994,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">8</div>
<div bis_size='{"x":337,"y":1115,"w":78,"h":78,"abs_x":2077,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">9</div>
<div bis_size='{"x":419,"y":1115,"w":78,"h":78,"abs_x":2159,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">10</div>
<div bis_size='{"x":502,"y":1115,"w":78,"h":78,"abs_x":2242,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer text-slate-600 hover:bg-slate-100 font-geist">11</div>
<div bis_size='{"x":584,"y":1115,"w":78,"h":78,"abs_x":2324,"abs_y":1365}' className="aspect-square flex items-center justify-center text-xs rounded cursor-pointer bg-slate-900 text-white font-geist">12</div>
</div>
</div>
<div bis_size='{"x":73,"y":1226,"w":607,"h":100,"abs_x":1813,"abs_y":1476}' className="space-y-2">
<div bis_size='{"x":73,"y":1226,"w":607,"h":16,"abs_x":1813,"abs_y":1476}' className="text-xs font-medium text-slate-500 font-geist">Available times</div>
<div bis_size='{"x":73,"y":1250,"w":607,"h":76,"abs_x":1813,"abs_y":1500}' className="grid grid-cols-3 gap-2">
<button bis_size='{"x":73,"y":1250,"w":197,"h":34,"abs_x":1813,"abs_y":1500}' className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors border-slate-200 hover:border-slate-300 font-geist">9:00 AM</button>
<button bis_size='{"x":278,"y":1250,"w":197,"h":34,"abs_x":2018,"abs_y":1500}' className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors border-slate-200 hover:border-slate-300 font-geist">10:00 AM</button>
<button bis_size='{"x":483,"y":1250,"w":197,"h":34,"abs_x":2223,"abs_y":1500}' className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors border-slate-200 hover:border-slate-300 font-geist">11:00 AM</button>
<button bis_size='{"x":73,"y":1292,"w":197,"h":34,"abs_x":1813,"abs_y":1542}' className="px-3 py-2 text-xs font-medium rounded-lg bg-slate-900 text-white font-geist">1:00 PM</button>
<button bis_size='{"x":278,"y":1292,"w":197,"h":34,"abs_x":2018,"abs_y":1542}' className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors border-slate-200 hover:border-slate-300 font-geist">2:00 PM</button>
<button bis_size='{"x":483,"y":1292,"w":197,"h":34,"abs_x":2223,"abs_y":1542}' className="px-3 py-2 text-xs font-medium border rounded-lg transition-colors border-slate-200 hover:border-slate-300 font-geist">3:00 PM</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1455,"w":753,"h":710,"abs_x":1740,"abs_y":1705}' className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50">
<div bis_size='{"x":24,"y":1535,"w":705,"h":550,"abs_x":1764,"abs_y":1785}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":1535,"w":705,"h":120,"abs_x":1764,"abs_y":1785}' className="text-center mb-16">
<h2 bis_size='{"x":24,"y":1535,"w":705,"h":48,"abs_x":1764,"abs_y":1785}' className="text-4xl sm:text-5xl tracking-tight mb-4 font-playfair font-medium">Built for every role</h2>
<p bis_size='{"x":40,"y":1599,"w":672,"h":56,"abs_x":1780,"abs_y":1849}' className="text-lg max-w-2xl mx-auto text-slate-600 font-geist">Whether you own a salon, work there, or want to book services—Vernis adapts to your needs.</p>
</div>
<div bis_size='{"x":24,"y":1719,"w":705,"h":366,"abs_x":1764,"abs_y":1969}' className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div bis_size='{"x":24,"y":1719,"w":219,"h":366,"abs_x":1764,"abs_y":1969}' className="border rounded-xl p-8 hover:shadow-lg transition-shadow bg-white border-slate-200">
<div bis_size='{"x":57,"y":1752,"w":48,"h":48,"abs_x":1797,"abs_y":2002}' className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-900">
<svg bis_size='{"x":69,"y":1764,"w":24,"h":24,"abs_x":1809,"abs_y":2014}' className="lucide lucide-store w-6 h-6 text-white" data-lucide="store" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<h3 bis_size='{"x":57,"y":1824,"w":153,"h":28,"abs_x":1797,"abs_y":2074}' className="text-xl font-semibold mb-3 font-geist">Salon Owners</h3>
<p bis_size='{"x":57,"y":1864,"w":153,"h":120,"abs_x":1797,"abs_y":2114}' className="text-sm mb-6 text-slate-600 font-geist">Manage your salon's catalog, staff, appointments, and settings. Get real-time insights into bookings and capacity.</p>
<button bis_size='{"x":57,"y":2011,"w":140,"h":20,"abs_x":1797,"abs_y":2261}' className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-slate-900 font-geist">
            Owner dashboard
            <svg bis_size='{"x":181,"y":2013,"w":16,"h":16,"abs_x":1921,"abs_y":2263}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div bis_size='{"x":267,"y":1719,"w":219,"h":366,"abs_x":2007,"abs_y":1969}' className="border rounded-xl p-8 hover:shadow-lg transition-shadow bg-white border-slate-200">
<div bis_size='{"x":300,"y":1752,"w":48,"h":48,"abs_x":2040,"abs_y":2002}' className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-900">
<svg bis_size='{"x":312,"y":1764,"w":24,"h":24,"abs_x":2052,"abs_y":2014}' className="lucide lucide-users w-6 h-6 text-white" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 bis_size='{"x":300,"y":1824,"w":153,"h":28,"abs_x":2040,"abs_y":2074}' className="text-xl font-semibold mb-3 font-geist">Staff Members</h3>
<p bis_size='{"x":300,"y":1864,"w":153,"h":140,"abs_x":2040,"abs_y":2114}' className="text-sm mb-6 text-slate-600 font-geist">View your assigned appointments with color-coded organization. Stay on top of your schedule without managing the full system.</p>
<button bis_size='{"x":300,"y":2031,"w":105,"h":20,"abs_x":2040,"abs_y":2281}' className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-slate-900 font-geist">
            Staff access
            <svg bis_size='{"x":389,"y":2033,"w":16,"h":16,"abs_x":2129,"abs_y":2283}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div bis_size='{"x":510,"y":1719,"w":219,"h":366,"abs_x":2250,"abs_y":1969}' className="border rounded-xl p-8 hover:shadow-lg transition-shadow bg-white border-slate-200">
<div bis_size='{"x":543,"y":1752,"w":48,"h":48,"abs_x":2283,"abs_y":2002}' className="w-12 h-12 rounded-lg flex items-center justify-center mb-6 bg-slate-900">
<svg bis_size='{"x":555,"y":1764,"w":24,"h":24,"abs_x":2295,"abs_y":2014}' className="lucide lucide-calendar w-6 h-6 text-white" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<h3 bis_size='{"x":543,"y":1824,"w":153,"h":28,"abs_x":2283,"abs_y":2074}' className="text-xl font-semibold mb-3 font-geist">Customers</h3>
<p bis_size='{"x":543,"y":1864,"w":153,"h":120,"abs_x":2283,"abs_y":2114}' className="text-sm mb-6 text-slate-600 font-geist">Browse services, see real-time availability, and book instantly. Get confirmations and manage your appointments easily.</p>
<button bis_size='{"x":543,"y":2011,"w":89,"h":20,"abs_x":2283,"abs_y":2261}' className="text-sm font-medium inline-flex items-center gap-2 hover:gap-3 transition-all text-slate-900 font-geist">
            Book now
            <svg bis_size='{"x":616,"y":2013,"w":16,"h":16,"abs_x":2356,"abs_y":2263}' className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2165,"w":753,"h":2096,"abs_x":1740,"abs_y":2415}' className="py-20 px-4 sm:px-6 lg:px-8" id="features">
<div bis_size='{"x":24,"y":2245,"w":705,"h":1936,"abs_x":1764,"abs_y":2495}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":2245,"w":705,"h":168,"abs_x":1764,"abs_y":2495}' className="text-center mb-16">
<h2 bis_size='{"x":24,"y":2245,"w":705,"h":96,"abs_x":1764,"abs_y":2495}' className="text-4xl sm:text-5xl tracking-tight mb-4 font-playfair font-medium">Everything you need to run a salon</h2>
<p bis_size='{"x":40,"y":2357,"w":672,"h":56,"abs_x":1780,"abs_y":2607}' className="text-lg max-w-2xl mx-auto text-slate-600 font-geist">Powerful features that scale with your business, from single-chair studios to multi-staff operations.</p>
</div>
<div bis_size='{"x":24,"y":2477,"w":705,"h":684,"abs_x":1764,"abs_y":2727}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20">
<div bis_size='{"x":24,"y":2477,"w":705,"h":254,"abs_x":1764,"abs_y":2727}'>
<div bis_size='{"x":24,"y":2477,"w":146,"h":24,"abs_x":1764,"abs_y":2727}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-slate-100 text-slate-700 font-geist">
<svg bis_size='{"x":36,"y":2482,"w":14,"h":14,"abs_x":1776,"abs_y":2732}' className="lucide lucide-calendar-check w-3.5 h-3.5" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
            Smart Scheduling
          </div>
<h3 bis_size='{"x":24,"y":2517,"w":705,"h":36,"abs_x":1764,"abs_y":2767}' className="text-3xl tracking-tight mb-4 font-playfair font-medium">Capacity-aware availability</h3>
<p bis_size='{"x":24,"y":2569,"w":705,"h":48,"abs_x":1764,"abs_y":2819}' className="text-base mb-6 text-slate-600 font-geist">Our sweep-line algorithm considers business hours, closures, existing appointments, and salon capacity to show accurate availability in real-time.</p>
<ul bis_size='{"x":24,"y":2641,"w":705,"h":90,"abs_x":1764,"abs_y":2891}' className="space-y-3">
<li bis_size='{"x":24,"y":2641,"w":705,"h":22,"abs_x":1764,"abs_y":2891}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":2643,"w":20,"h":20,"abs_x":1764,"abs_y":2893}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":2646,"w":14,"h":14,"abs_x":1767,"abs_y":2896}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":2641,"w":374,"h":20,"abs_x":1796,"abs_y":2891}' className="text-sm text-slate-600 font-geist">Prevents double-booking with intelligent slot management</span>
</li>
<li bis_size='{"x":24,"y":2675,"w":705,"h":22,"abs_x":1764,"abs_y":2925}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":2677,"w":20,"h":20,"abs_x":1764,"abs_y":2927}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":2680,"w":14,"h":14,"abs_x":1767,"abs_y":2930}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":2675,"w":296,"h":20,"abs_x":1796,"abs_y":2925}' className="text-sm text-slate-600 font-geist">Respects business hours and custom closures</span>
</li>
<li bis_size='{"x":24,"y":2709,"w":705,"h":22,"abs_x":1764,"abs_y":2959}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":2711,"w":20,"h":20,"abs_x":1764,"abs_y":2961}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":2714,"w":14,"h":14,"abs_x":1767,"abs_y":2964}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":2709,"w":277,"h":20,"abs_x":1796,"abs_y":2959}' className="text-sm text-slate-600 font-geist">Shows capacity feedback when slots fill up</span>
</li>
</ul>
</div>
<div bis_size='{"x":24,"y":2779,"w":705,"h":382,"abs_x":1764,"abs_y":3029}' className="border rounded-xl p-8 bg-slate-50 border-slate-200">
<div bis_size='{"x":57,"y":2812,"w":639,"h":316,"abs_x":1797,"abs_y":3062}' className="space-y-3">
<div bis_size='{"x":57,"y":2812,"w":639,"h":70,"abs_x":1797,"abs_y":3062}' className="flex items-center justify-between p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":2829,"w":152,"h":36,"abs_x":1814,"abs_y":3079}' className="flex items-center gap-3">
<div bis_size='{"x":74,"y":2843,"w":8,"h":8,"abs_x":1814,"abs_y":3093}' className="w-2 h-2 rounded-full bg-amber-500"></div>
<div bis_size='{"x":94,"y":2829,"w":132,"h":36,"abs_x":1834,"abs_y":3079}'>
<div bis_size='{"x":94,"y":2829,"w":132,"h":20,"abs_x":1834,"abs_y":3079}' className="text-sm font-medium font-geist">9:00 AM - 10:00 AM</div>
<div bis_size='{"x":94,"y":2849,"w":132,"h":16,"abs_x":1834,"abs_y":3099}' className="text-xs text-slate-500 font-geist">2 slots available</div>
</div>
</div>
<svg bis_size='{"x":659,"y":2837,"w":20,"h":20,"abs_x":2399,"abs_y":3087}' className="lucide lucide-check-circle w-5 h-5 text-cyan-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
<div bis_size='{"x":57,"y":2894,"w":639,"h":70,"abs_x":1797,"abs_y":3144}' className="flex items-center justify-between p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":2911,"w":154,"h":36,"abs_x":1814,"abs_y":3161}' className="flex items-center gap-3">
<div bis_size='{"x":74,"y":2925,"w":8,"h":8,"abs_x":1814,"abs_y":3175}' className="w-2 h-2 rounded-full bg-green-500"></div>
<div bis_size='{"x":94,"y":2911,"w":134,"h":36,"abs_x":1834,"abs_y":3161}'>
<div bis_size='{"x":94,"y":2911,"w":134,"h":20,"abs_x":1834,"abs_y":3161}' className="text-sm font-medium font-geist">10:00 AM - 11:00 AM</div>
<div bis_size='{"x":94,"y":2931,"w":134,"h":16,"abs_x":1834,"abs_y":3181}' className="text-xs text-slate-500 font-geist">1 slot available</div>
</div>
</div>
<svg bis_size='{"x":659,"y":2919,"w":20,"h":20,"abs_x":2399,"abs_y":3169}' className="lucide lucide-alert-circle w-5 h-5 text-green-600" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
</div>
<div bis_size='{"x":57,"y":2976,"w":639,"h":70,"abs_x":1797,"abs_y":3226}' className="flex items-center justify-between p-4 border rounded-lg opacity-50 bg-white border-slate-200">
<div bis_size='{"x":74,"y":2993,"w":153,"h":36,"abs_x":1814,"abs_y":3243}' className="flex items-center gap-3">
<div bis_size='{"x":74,"y":3007,"w":8,"h":8,"abs_x":1814,"abs_y":3257}' className="w-2 h-2 rounded-full bg-slate-400"></div>
<div bis_size='{"x":94,"y":2993,"w":133,"h":36,"abs_x":1834,"abs_y":3243}'>
<div bis_size='{"x":94,"y":2993,"w":133,"h":20,"abs_x":1834,"abs_y":3243}' className="text-sm font-medium font-geist">11:00 AM - 12:00 PM</div>
<div bis_size='{"x":94,"y":3013,"w":133,"h":16,"abs_x":1834,"abs_y":3263}' className="text-xs text-slate-500 font-geist">Fully booked</div>
</div>
</div>
<svg bis_size='{"x":659,"y":3001,"w":20,"h":20,"abs_x":2399,"abs_y":3251}' className="lucide lucide-x-circle w-5 h-5 text-blue-400" data-lucide="x-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m15 9-6 6"></path><path d="m9 9 6 6"></path></svg>
</div>
<div bis_size='{"x":57,"y":3058,"w":639,"h":70,"abs_x":1797,"abs_y":3308}' className="flex items-center justify-between p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":3075,"w":142,"h":36,"abs_x":1814,"abs_y":3325}' className="flex items-center gap-3">
<div bis_size='{"x":74,"y":3089,"w":8,"h":8,"abs_x":1814,"abs_y":3339}' className="w-2 h-2 rounded-full bg-amber-500"></div>
<div bis_size='{"x":94,"y":3075,"w":122,"h":36,"abs_x":1834,"abs_y":3325}'>
<div bis_size='{"x":94,"y":3075,"w":122,"h":20,"abs_x":1834,"abs_y":3325}' className="text-sm font-medium font-geist">1:00 PM - 2:00 PM</div>
<div bis_size='{"x":94,"y":3095,"w":122,"h":16,"abs_x":1834,"abs_y":3345}' className="text-xs text-slate-500 font-geist">3 slots available</div>
</div>
</div>
<svg bis_size='{"x":659,"y":3083,"w":20,"h":20,"abs_x":2399,"abs_y":3333}' className="lucide lucide-check-circle w-5 h-5 text-cyan-600" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
</div>
</div>
<div bis_size='{"x":24,"y":3241,"w":705,"h":622,"abs_x":1764,"abs_y":3491}' className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center mb-20 lg:flex-row-reverse">
<div bis_size='{"x":24,"y":3543,"w":705,"h":320,"abs_x":1764,"abs_y":3793}' className="order-2 lg:order-1 border rounded-xl p-8 bg-slate-50 border-slate-200">
<div bis_size='{"x":57,"y":3576,"w":639,"h":254,"abs_x":1797,"abs_y":3826}' className="space-y-4">
<div bis_size='{"x":57,"y":3576,"w":639,"h":74,"abs_x":1797,"abs_y":3826}' className="flex items-center gap-4 p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":3593,"w":40,"h":40,"abs_x":1814,"abs_y":3843}' className="w-10 h-10 rounded-full" style={{backgroundColor: '#8B5CF6'}}></div>
<div bis_size='{"x":130,"y":3595,"w":465,"h":36,"abs_x":1870,"abs_y":3845}' className="flex-1">
<div bis_size='{"x":130,"y":3595,"w":465,"h":20,"abs_x":1870,"abs_y":3845}' className="text-sm font-medium font-geist">Sarah Johnson</div>
<div bis_size='{"x":130,"y":3615,"w":465,"h":16,"abs_x":1870,"abs_y":3865}' className="text-xs text-slate-500 font-geist">Senior Stylist • Active</div>
</div>
<div bis_size='{"x":611,"y":3605,"w":67,"h":16,"abs_x":2351,"abs_y":3855}' className="text-xs text-slate-500 font-geist">24 bookings</div>
</div>
<div bis_size='{"x":57,"y":3666,"w":639,"h":74,"abs_x":1797,"abs_y":3916}' className="flex items-center gap-4 p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":3683,"w":40,"h":40,"abs_x":1814,"abs_y":3933}' className="w-10 h-10 rounded-full" style={{backgroundColor: '#EC4899'}}></div>
<div bis_size='{"x":130,"y":3685,"w":468,"h":36,"abs_x":1870,"abs_y":3935}' className="flex-1">
<div bis_size='{"x":130,"y":3685,"w":468,"h":20,"abs_x":1870,"abs_y":3935}' className="text-sm font-medium font-geist">Mike Chen</div>
<div bis_size='{"x":130,"y":3705,"w":468,"h":16,"abs_x":1870,"abs_y":3955}' className="text-xs text-slate-500 font-geist">Colorist • Active</div>
</div>
<div bis_size='{"x":614,"y":3695,"w":64,"h":16,"abs_x":2354,"abs_y":3945}' className="text-xs text-slate-500 font-geist">18 bookings</div>
</div>
<div bis_size='{"x":57,"y":3756,"w":639,"h":74,"abs_x":1797,"abs_y":4006}' className="flex items-center gap-4 p-4 border rounded-lg bg-white border-slate-200">
<div bis_size='{"x":74,"y":3773,"w":40,"h":40,"abs_x":1814,"abs_y":4023}' className="w-10 h-10 rounded-full" style={{backgroundColor: '#10B981'}}></div>
<div bis_size='{"x":130,"y":3775,"w":467,"h":36,"abs_x":1870,"abs_y":4025}' className="flex-1">
<div bis_size='{"x":130,"y":3775,"w":467,"h":20,"abs_x":1870,"abs_y":4025}' className="text-sm font-medium font-geist">Emma Davis</div>
<div bis_size='{"x":130,"y":3795,"w":467,"h":16,"abs_x":1870,"abs_y":4045}' className="text-xs text-slate-500 font-geist">Nail Technician • Active</div>
</div>
<div bis_size='{"x":613,"y":3785,"w":65,"h":16,"abs_x":2353,"abs_y":4035}' className="text-xs text-slate-500 font-geist">31 bookings</div>
</div>
</div>
</div>
<div bis_size='{"x":24,"y":3241,"w":705,"h":254,"abs_x":1764,"abs_y":3491}' className="order-1 lg:order-2">
<div bis_size='{"x":24,"y":3241,"w":150,"h":24,"abs_x":1764,"abs_y":3491}' className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-medium mb-4 bg-slate-100 text-slate-700 font-geist">
<svg bis_size='{"x":36,"y":3246,"w":14,"h":14,"abs_x":1776,"abs_y":3496}' className="lucide lucide-users w-3.5 h-3.5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
            Staff Management
          </div>
<h3 bis_size='{"x":24,"y":3281,"w":705,"h":36,"abs_x":1764,"abs_y":3531}' className="text-3xl tracking-tight mb-4 font-playfair font-medium">Color-coded staff assignments</h3>
<p bis_size='{"x":24,"y":3333,"w":705,"h":48,"abs_x":1764,"abs_y":3583}' className="text-base mb-6 text-slate-600 font-geist">Add staff members, assign them colors, and track appointments without duplicating accounts. Each staff member gets their own view while owners maintain full control.</p>
<ul bis_size='{"x":24,"y":3405,"w":705,"h":90,"abs_x":1764,"abs_y":3655}' className="space-y-3">
<li bis_size='{"x":24,"y":3405,"w":705,"h":22,"abs_x":1764,"abs_y":3655}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":3407,"w":20,"h":20,"abs_x":1764,"abs_y":3657}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":3410,"w":14,"h":14,"abs_x":1767,"abs_y":3660}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":3405,"w":289,"h":20,"abs_x":1796,"abs_y":3655}' className="text-sm text-slate-600 font-geist">Link existing user accounts as staff members</span>
</li>
<li bis_size='{"x":24,"y":3439,"w":705,"h":22,"abs_x":1764,"abs_y":3689}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":3441,"w":20,"h":20,"abs_x":1764,"abs_y":3691}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":3444,"w":14,"h":14,"abs_x":1767,"abs_y":3694}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":3439,"w":327,"h":20,"abs_x":1796,"abs_y":3689}' className="text-sm text-slate-600 font-geist">Auto-generate unique colors for visual organization</span>
</li>
<li bis_size='{"x":24,"y":3473,"w":705,"h":22,"abs_x":1764,"abs_y":3723}' className="flex items-start gap-3">
<div bis_size='{"x":24,"y":3475,"w":20,"h":20,"abs_x":1764,"abs_y":3725}' className="w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5 bg-slate-100">
<svg bis_size='{"x":27,"y":3478,"w":14,"h":14,"abs_x":1767,"abs_y":3728}' className="lucide lucide-check w-3.5 h-3.5 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span bis_size='{"x":56,"y":3473,"w":289,"h":20,"abs_x":1796,"abs_y":3723}' className="text-sm text-slate-600 font-geist">Track active/inactive status and performance</span>
</li>
</ul>
</div>
</div>
<div bis_size='{"x":24,"y":3943,"w":705,"h":238,"abs_x":1764,"abs_y":4193}' className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div bis_size='{"x":24,"y":3943,"w":219,"h":238,"abs_x":1764,"abs_y":4193}' className="border rounded-xl p-6 border-slate-200">
<div bis_size='{"x":49,"y":3968,"w":40,"h":40,"abs_x":1789,"abs_y":4218}' className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-slate-100">
<svg bis_size='{"x":59,"y":3978,"w":20,"h":20,"abs_x":1799,"abs_y":4228}' className="lucide lucide-layout-grid w-5 h-5 text-blue-700" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
</div>
<h4 bis_size='{"x":49,"y":4024,"w":169,"h":24,"abs_x":1789,"abs_y":4274}' className="text-base font-semibold mb-2 font-geist">Service Catalog</h4>
<p bis_size='{"x":49,"y":4056,"w":169,"h":100,"abs_x":1789,"abs_y":4306}' className="text-sm text-slate-600 font-geist">Organize services by category, set pricing and duration, and control visibility for public booking.</p>
</div>
<div bis_size='{"x":267,"y":3943,"w":219,"h":238,"abs_x":2007,"abs_y":4193}' className="border rounded-xl p-6 border-slate-200">
<div bis_size='{"x":292,"y":3968,"w":40,"h":40,"abs_x":2032,"abs_y":4218}' className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-slate-100">
<svg bis_size='{"x":302,"y":3978,"w":20,"h":20,"abs_x":2042,"abs_y":4228}' className="lucide lucide-user-check w-5 h-5 text-blue-700" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h4 bis_size='{"x":292,"y":4024,"w":169,"h":24,"abs_x":2032,"abs_y":4274}' className="text-base font-semibold mb-2 font-geist">Client Management</h4>
<p bis_size='{"x":292,"y":4056,"w":169,"h":100,"abs_x":2032,"abs_y":4306}' className="text-sm text-slate-600 font-geist">Automatic deduplication keeps your CRM clean. Track contact info, booking history, and preferences.</p>
</div>
<div bis_size='{"x":510,"y":3943,"w":219,"h":238,"abs_x":2250,"abs_y":4193}' className="border rounded-xl p-6 border-slate-200">
<div bis_size='{"x":535,"y":3968,"w":40,"h":40,"abs_x":2275,"abs_y":4218}' className="w-10 h-10 rounded-lg flex items-center justify-center mb-4 bg-slate-100">
<svg bis_size='{"x":545,"y":3978,"w":20,"h":20,"abs_x":2285,"abs_y":4228}' className="lucide lucide-clock w-5 h-5 text-blue-700" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h4 bis_size='{"x":535,"y":4024,"w":169,"h":24,"abs_x":2275,"abs_y":4274}' className="text-base font-semibold mb-2 font-geist">Business Hours</h4>
<p bis_size='{"x":535,"y":4056,"w":169,"h":100,"abs_x":2275,"abs_y":4306}' className="text-sm text-slate-600 font-geist">Set weekly schedules, handle closures, and respect time zones automatically for accurate availability.</p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4261,"w":753,"h":1018,"abs_x":1740,"abs_y":4511}' className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-50" id="how-it-works">
<div bis_size='{"x":24,"y":4341,"w":705,"h":858,"abs_x":1764,"abs_y":4591}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":4341,"w":705,"h":140,"abs_x":1764,"abs_y":4591}' className="text-center mb-16">
<h2 bis_size='{"x":24,"y":4341,"w":705,"h":96,"abs_x":1764,"abs_y":4591}' className="text-4xl sm:text-5xl tracking-tight mb-4 font-playfair font-medium">Simple onboarding, powerful results</h2>
<p bis_size='{"x":40,"y":4453,"w":672,"h":28,"abs_x":1780,"abs_y":4703}' className="text-lg max-w-2xl mx-auto text-slate-600 font-geist">Get your salon online in minutes with our guided setup process.</p>
</div>
<div bis_size='{"x":24,"y":4545,"w":705,"h":248,"abs_x":1764,"abs_y":4795}' className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div bis_size='{"x":24,"y":4545,"w":152,"h":248,"abs_x":1764,"abs_y":4795}' className="relative">
<div bis_size='{"x":24,"y":4545,"w":48,"h":48,"abs_x":1764,"abs_y":4795}' className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg mb-4 bg-slate-900 text-white font-geist">1</div>
<h4 bis_size='{"x":24,"y":4609,"w":152,"h":56,"abs_x":1764,"abs_y":4859}' className="text-lg font-semibold mb-2 font-geist">Create your account</h4>
<p bis_size='{"x":24,"y":4673,"w":152,"h":120,"abs_x":1764,"abs_y":4923}' className="text-sm text-slate-600 font-geist">Sign up with email and password. Our concierge team may pre-create your account and guide you through setup.</p>
<div bis_size='{"x":72,"y":4569,"w":184,"h":2,"abs_x":1812,"abs_y":4819}' className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-slate-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div bis_size='{"x":208,"y":4545,"w":152,"h":248,"abs_x":1948,"abs_y":4795}' className="relative">
<div bis_size='{"x":208,"y":4545,"w":48,"h":48,"abs_x":1948,"abs_y":4795}' className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg mb-4 bg-slate-900 text-white font-geist">2</div>
<h4 bis_size='{"x":208,"y":4609,"w":152,"h":56,"abs_x":1948,"abs_y":4859}' className="text-lg font-semibold mb-2 font-geist">Configure your salon</h4>
<p bis_size='{"x":208,"y":4673,"w":152,"h":100,"abs_x":1948,"abs_y":4923}' className="text-sm text-slate-600 font-geist">Set your branding, booking URL, time zone, capacity, and business hours in a single guided form.</p>
<div bis_size='{"x":256,"y":4569,"w":184,"h":2,"abs_x":1996,"abs_y":4819}' className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-slate-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div bis_size='{"x":392,"y":4545,"w":152,"h":248,"abs_x":2132,"abs_y":4795}' className="relative">
<div bis_size='{"x":392,"y":4545,"w":48,"h":48,"abs_x":2132,"abs_y":4795}' className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg mb-4 bg-slate-900 text-white font-geist">3</div>
<h4 bis_size='{"x":392,"y":4609,"w":152,"h":56,"abs_x":2132,"abs_y":4859}' className="text-lg font-semibold mb-2 font-geist">Add services &amp; staff</h4>
<p bis_size='{"x":392,"y":4673,"w":152,"h":100,"abs_x":2132,"abs_y":4923}' className="text-sm text-slate-600 font-geist">Build your catalog with categories and services. Add your team members and assign them colors.</p>
<div bis_size='{"x":440,"y":4569,"w":184,"h":2,"abs_x":2180,"abs_y":4819}' className="hidden md:block absolute top-6 left-12 right-0 h-0.5 bg-slate-200" style={{width: 'calc(100% + 2rem)'}}></div>
</div>
<div bis_size='{"x":576,"y":4545,"w":152,"h":248,"abs_x":2316,"abs_y":4795}'>
<div bis_size='{"x":576,"y":4545,"w":48,"h":48,"abs_x":2316,"abs_y":4795}' className="flex items-center justify-center w-12 h-12 rounded-full font-semibold text-lg mb-4 bg-slate-900 text-white font-geist">4</div>
<h4 bis_size='{"x":576,"y":4609,"w":152,"h":28,"abs_x":2316,"abs_y":4859}' className="text-lg font-semibold mb-2 font-geist">Go live</h4>
<p bis_size='{"x":576,"y":4645,"w":152,"h":100,"abs_x":2316,"abs_y":4895}' className="text-sm text-slate-600 font-geist">Share your booking link and start accepting appointments. Manage everything from your dashboard.</p>
</div>
</div>
<div bis_size='{"x":24,"y":4857,"w":705,"h":342,"abs_x":1764,"abs_y":5107}' className="mt-16 border rounded-xl p-8 md:p-12 bg-white border-slate-200">
<div bis_size='{"x":73,"y":4906,"w":607,"h":244,"abs_x":1813,"abs_y":5156}' className="max-w-3xl mx-auto text-center">
<svg bis_size='{"x":352,"y":4906,"w":48,"h":48,"abs_x":2092,"abs_y":5156}' className="lucide lucide-sparkles w-12 h-12 mx-auto mb-6 text-blue-900" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 bis_size='{"x":73,"y":4978,"w":607,"h":32,"abs_x":1813,"abs_y":5228}' className="text-2xl tracking-tight mb-4 font-playfair font-medium">Multi-tenant by design</h3>
<p bis_size='{"x":73,"y":5026,"w":607,"h":72,"abs_x":1813,"abs_y":5276}' className="text-base mb-8 text-slate-600 font-geist">Each salon gets its own isolated workspace with unique branding, staff, services, and booking URL. Scale from one location to many without changing how you work.</p>
<div bis_size='{"x":73,"y":5130,"w":607,"h":20,"abs_x":1813,"abs_y":5380}' className="flex flex-wrap items-center justify-center gap-4 text-sm text-slate-600">
<div bis_size='{"x":141,"y":5130,"w":146,"h":20,"abs_x":1881,"abs_y":5380}' className="flex items-center gap-2">
<svg bis_size='{"x":141,"y":5132,"w":16,"h":16,"abs_x":1881,"abs_y":5382}' className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span bis_size='{"x":165,"y":5130,"w":122,"h":20,"abs_x":1905,"abs_y":5380}' className="font-geist">Role-based access</span>
</div>
<div bis_size='{"x":304,"y":5130,"w":124,"h":20,"abs_x":2044,"abs_y":5380}' className="flex items-center gap-2">
<svg bis_size='{"x":304,"y":5132,"w":16,"h":16,"abs_x":2044,"abs_y":5382}' className="lucide lucide-lock w-4 h-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span bis_size='{"x":328,"y":5130,"w":100,"h":20,"abs_x":2068,"abs_y":5380}' className="font-geist">Tenant isolation</span>
</div>
<div bis_size='{"x":444,"y":5130,"w":166,"h":20,"abs_x":2184,"abs_y":5380}' className="flex items-center gap-2">
<svg bis_size='{"x":444,"y":5132,"w":16,"h":16,"abs_x":2184,"abs_y":5382}' className="lucide lucide-link w-4 h-4" data-lucide="link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 13a5 5 0 0 0 7.54.54l3-3a5 5 0 0 0-7.07-7.07l-1.72 1.71"></path><path d="M14 11a5 5 0 0 0-7.54-.54l-3 3a5 5 0 0 0 7.07 7.07l1.71-1.71"></path></svg>
<span bis_size='{"x":468,"y":5130,"w":142,"h":20,"abs_x":2208,"abs_y":5380}' className="font-geist">Custom booking URLs</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5279,"w":753,"h":1424,"abs_x":1740,"abs_y":5529}' className="py-20 px-4 sm:px-6 lg:px-8" id="pricing">
<div bis_size='{"x":24,"y":5359,"w":705,"h":1264,"abs_x":1764,"abs_y":5609}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":5359,"w":705,"h":92,"abs_x":1764,"abs_y":5609}' className="text-center mb-16">
<h2 bis_size='{"x":24,"y":5359,"w":705,"h":48,"abs_x":1764,"abs_y":5609}' className="text-4xl sm:text-5xl tracking-tight mb-4 font-playfair font-medium">Simple, transparent pricing</h2>
<p bis_size='{"x":40,"y":5423,"w":672,"h":28,"abs_x":1780,"abs_y":5673}' className="text-lg max-w-2xl mx-auto text-slate-600 font-geist">Start free and scale as you grow. No hidden fees.</p>
</div>
<div bis_size='{"x":24,"y":5515,"w":705,"h":1108,"abs_x":1764,"abs_y":5765}' className="grid grid-cols-1 lg:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div bis_size='{"x":24,"y":5515,"w":705,"h":348,"abs_x":1764,"abs_y":5765}' className="border rounded-xl p-8 border-slate-200">
<div bis_size='{"x":57,"y":5548,"w":639,"h":20,"abs_x":1797,"abs_y":5798}' className="text-sm font-medium mb-2 text-slate-600 font-geist">Starter</div>
<div bis_size='{"x":57,"y":5576,"w":639,"h":40,"abs_x":1797,"abs_y":5826}' className="flex items-baseline gap-2 mb-6">
<span bis_size='{"x":57,"y":5576,"w":39,"h":40,"abs_x":1797,"abs_y":5826}' className="text-4xl tracking-tight font-playfair font-medium">$0</span>
<span bis_size='{"x":104,"y":5596,"w":47,"h":20,"abs_x":1844,"abs_y":5846}' className="text-sm text-slate-600 font-geist">/month</span>
</div>
<p bis_size='{"x":57,"y":5640,"w":639,"h":20,"abs_x":1797,"abs_y":5890}' className="text-sm mb-6 text-slate-600 font-geist">Perfect for solo practitioners testing the waters.</p>
<button bis_size='{"x":57,"y":5684,"w":639,"h":38,"abs_x":1797,"abs_y":5934}' className="w-full px-4 py-2 border text-sm font-medium rounded-lg transition-colors mb-6 border-slate-300 text-slate-900 hover:bg-slate-50 font-geist">Get started</button>
<ul bis_size='{"x":57,"y":5746,"w":639,"h":84,"abs_x":1797,"abs_y":5996}' className="space-y-3">
<li bis_size='{"x":57,"y":5746,"w":639,"h":20,"abs_x":1797,"abs_y":5996}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":5746,"w":20,"h":20,"abs_x":1797,"abs_y":5996}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":5746,"w":94,"h":20,"abs_x":1829,"abs_y":5996}' className="text-sm text-slate-600 font-geist">1 staff member</span>
</li>
<li bis_size='{"x":57,"y":5778,"w":639,"h":20,"abs_x":1797,"abs_y":6028}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":5778,"w":20,"h":20,"abs_x":1797,"abs_y":6028}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":5778,"w":165,"h":20,"abs_x":1829,"abs_y":6028}' className="text-sm text-slate-600 font-geist">Up to 50 bookings/month</span>
</li>
<li bis_size='{"x":57,"y":5810,"w":639,"h":20,"abs_x":1797,"abs_y":6060}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":5810,"w":20,"h":20,"abs_x":1797,"abs_y":6060}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":5810,"w":129,"h":20,"abs_x":1829,"abs_y":6060}' className="text-sm text-slate-600 font-geist">Public booking page</span>
</li>
</ul>
</div>
<div bis_size='{"x":24,"y":5895,"w":705,"h":348,"abs_x":1764,"abs_y":6145}' className="border-2 rounded-xl p-8 relative border-slate-900">
<div bis_size='{"x":342,"y":5885,"w":67,"h":24,"abs_x":2082,"abs_y":6135}' className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-1 text-xs font-medium rounded-full bg-slate-900 text-white font-geist">Popular</div>
<div bis_size='{"x":58,"y":5929,"w":637,"h":20,"abs_x":1798,"abs_y":6179}' className="text-sm font-medium mb-2 text-slate-600 font-geist">Professional</div>
<div bis_size='{"x":58,"y":5957,"w":637,"h":40,"abs_x":1798,"abs_y":6207}' className="flex items-baseline gap-2 mb-6">
<span bis_size='{"x":58,"y":5957,"w":53,"h":40,"abs_x":1798,"abs_y":6207}' className="text-4xl tracking-tight font-playfair font-medium">$49</span>
<span bis_size='{"x":119,"y":5977,"w":47,"h":20,"abs_x":1859,"abs_y":6227}' className="text-sm text-slate-600 font-geist">/month</span>
</div>
<p bis_size='{"x":58,"y":6021,"w":637,"h":20,"abs_x":1798,"abs_y":6271}' className="text-sm mb-6 text-slate-600 font-geist">For growing salons with multiple staff members.</p>
<button bis_size='{"x":58,"y":6065,"w":637,"h":36,"abs_x":1798,"abs_y":6315}' className="w-full px-4 py-2 text-sm font-medium rounded-lg transition-colors mb-6 bg-slate-900 text-white hover:bg-slate-800 font-geist">Get started</button>
<ul bis_size='{"x":58,"y":6125,"w":637,"h":84,"abs_x":1798,"abs_y":6375}' className="space-y-3">
<li bis_size='{"x":58,"y":6125,"w":637,"h":20,"abs_x":1798,"abs_y":6375}' className="flex items-start gap-3">
<svg bis_size='{"x":58,"y":6125,"w":20,"h":20,"abs_x":1798,"abs_y":6375}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":90,"y":6125,"w":143,"h":20,"abs_x":1830,"abs_y":6375}' className="text-sm text-slate-600 font-geist">Up to 5 staff members</span>
</li>
<li bis_size='{"x":58,"y":6157,"w":637,"h":20,"abs_x":1798,"abs_y":6407}' className="flex items-start gap-3">
<svg bis_size='{"x":58,"y":6157,"w":20,"h":20,"abs_x":1798,"abs_y":6407}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":90,"y":6157,"w":123,"h":20,"abs_x":1830,"abs_y":6407}' className="text-sm text-slate-600 font-geist">Unlimited bookings</span>
</li>
<li bis_size='{"x":58,"y":6189,"w":637,"h":20,"abs_x":1798,"abs_y":6439}' className="flex items-start gap-3">
<svg bis_size='{"x":58,"y":6189,"w":20,"h":20,"abs_x":1798,"abs_y":6439}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":90,"y":6189,"w":109,"h":20,"abs_x":1830,"abs_y":6439}' className="text-sm text-slate-600 font-geist">Custom branding</span>
</li>
</ul>
</div>
<div bis_size='{"x":24,"y":6275,"w":705,"h":348,"abs_x":1764,"abs_y":6525}' className="border rounded-xl p-8 border-slate-200">
<div bis_size='{"x":57,"y":6308,"w":639,"h":20,"abs_x":1797,"abs_y":6558}' className="text-sm font-medium mb-2 text-slate-600 font-geist">Enterprise</div>
<div bis_size='{"x":57,"y":6336,"w":639,"h":40,"abs_x":1797,"abs_y":6586}' className="flex items-baseline gap-2 mb-6">
<span bis_size='{"x":57,"y":6336,"w":121,"h":40,"abs_x":1797,"abs_y":6586}' className="text-4xl tracking-tight font-playfair font-medium">Custom</span>
</div>
<p bis_size='{"x":57,"y":6400,"w":639,"h":20,"abs_x":1797,"abs_y":6650}' className="text-sm mb-6 text-slate-600 font-geist">For multi-location salons and chains.</p>
<button bis_size='{"x":57,"y":6444,"w":639,"h":38,"abs_x":1797,"abs_y":6694}' className="w-full px-4 py-2 border text-sm font-medium rounded-lg transition-colors mb-6 border-slate-300 text-slate-900 hover:bg-slate-50 font-geist">Contact sales</button>
<ul bis_size='{"x":57,"y":6506,"w":639,"h":84,"abs_x":1797,"abs_y":6756}' className="space-y-3">
<li bis_size='{"x":57,"y":6506,"w":639,"h":20,"abs_x":1797,"abs_y":6756}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":6506,"w":20,"h":20,"abs_x":1797,"abs_y":6756}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":6506,"w":93,"h":20,"abs_x":1829,"abs_y":6756}' className="text-sm text-slate-600 font-geist">Unlimited staff</span>
</li>
<li bis_size='{"x":57,"y":6538,"w":639,"h":20,"abs_x":1797,"abs_y":6788}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":6538,"w":20,"h":20,"abs_x":1797,"abs_y":6788}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":6538,"w":114,"h":20,"abs_x":1829,"abs_y":6788}' className="text-sm text-slate-600 font-geist">Multiple locations</span>
</li>
<li bis_size='{"x":57,"y":6570,"w":639,"h":20,"abs_x":1797,"abs_y":6820}' className="flex items-start gap-3">
<svg bis_size='{"x":57,"y":6570,"w":20,"h":20,"abs_x":1797,"abs_y":6820}' className="lucide lucide-check w-5 h-5 flex-shrink-0 text-blue-700" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
<span bis_size='{"x":89,"y":6570,"w":70,"h":20,"abs_x":1829,"abs_y":6820}' className="text-sm text-slate-600 font-geist">API access</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":6703,"w":753,"h":378,"abs_x":1740,"abs_y":6953}' className="py-20 px-4 sm:px-6 lg:px-8 bg-slate-900 text-white">
<div bis_size='{"x":24,"y":6783,"w":705,"h":218,"abs_x":1764,"abs_y":7033}' className="max-w-4xl mx-auto text-center">
<h2 bis_size='{"x":24,"y":6783,"w":705,"h":48,"abs_x":1764,"abs_y":7033}' className="text-4xl sm:text-5xl tracking-tight mb-6 font-playfair font-medium">Ready to modernize your salon?</h2>
<p bis_size='{"x":40,"y":6855,"w":672,"h":56,"abs_x":1780,"abs_y":7105}' className="text-lg mb-10 max-w-2xl mx-auto text-slate-300 font-geist">Join salon owners who've simplified their booking process and grown their business with Vernis.</p>
<div bis_size='{"x":24,"y":6951,"w":705,"h":50,"abs_x":1764,"abs_y":7201}' className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button bis_size='{"x":202,"y":6952,"w":153,"h":48,"abs_x":1942,"abs_y":7202}' className="w-full sm:w-auto px-6 py-3 text-base font-medium rounded-lg transition-colors bg-white text-slate-900 hover:bg-slate-100 font-geist">Start free trial</button>
<button bis_size='{"x":371,"y":6951,"w":179,"h":50,"abs_x":2111,"abs_y":7201}' className="w-full sm:w-auto px-6 py-3 border text-base font-medium rounded-lg transition-colors border-slate-700 text-white hover:bg-slate-800 font-geist">Schedule a demo</button>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":7081,"w":753,"h":338,"abs_x":1740,"abs_y":7331}' className="py-12 px-4 sm:px-6 lg:px-8 border-t border-slate-200">
<div bis_size='{"x":24,"y":7130,"w":705,"h":241,"abs_x":1764,"abs_y":7380}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":7130,"w":705,"h":132,"abs_x":1764,"abs_y":7380}' className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div bis_size='{"x":24,"y":7130,"w":152,"h":132,"abs_x":1764,"abs_y":7380}'>
<div bis_size='{"x":24,"y":7130,"w":152,"h":20,"abs_x":1764,"abs_y":7380}' className="text-sm font-semibold mb-4 font-geist">Product</div>
<ul bis_size='{"x":24,"y":7166,"w":152,"h":96,"abs_x":1764,"abs_y":7416}' className="space-y-3">
<li bis_size='{"x":24,"y":7166,"w":152,"h":24,"abs_x":1764,"abs_y":7416}'><a bis_size='{"x":24,"y":7170,"w":56,"h":18,"abs_x":1764,"abs_y":7420}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Features</a></li>
<li bis_size='{"x":24,"y":7202,"w":152,"h":24,"abs_x":1764,"abs_y":7452}'><a bis_size='{"x":24,"y":7206,"w":44,"h":18,"abs_x":1764,"abs_y":7456}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Pricing</a></li>
<li bis_size='{"x":24,"y":7238,"w":152,"h":24,"abs_x":1764,"abs_y":7488}'><a bis_size='{"x":24,"y":7242,"w":53,"h":18,"abs_x":1764,"abs_y":7492}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Security</a></li>
</ul>
</div>
<div bis_size='{"x":208,"y":7130,"w":152,"h":132,"abs_x":1948,"abs_y":7380}'>
<div bis_size='{"x":208,"y":7130,"w":152,"h":20,"abs_x":1948,"abs_y":7380}' className="text-sm font-semibold mb-4 font-geist">Company</div>
<ul bis_size='{"x":208,"y":7166,"w":152,"h":96,"abs_x":1948,"abs_y":7416}' className="space-y-3">
<li bis_size='{"x":208,"y":7166,"w":152,"h":24,"abs_x":1948,"abs_y":7416}'><a bis_size='{"x":208,"y":7170,"w":38,"h":18,"abs_x":1948,"abs_y":7420}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">About</a></li>
<li bis_size='{"x":208,"y":7202,"w":152,"h":24,"abs_x":1948,"abs_y":7452}'><a bis_size='{"x":208,"y":7206,"w":29,"h":18,"abs_x":1948,"abs_y":7456}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Blog</a></li>
<li bis_size='{"x":208,"y":7238,"w":152,"h":24,"abs_x":1948,"abs_y":7488}'><a bis_size='{"x":208,"y":7242,"w":49,"h":18,"abs_x":1948,"abs_y":7492}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Careers</a></li>
</ul>
</div>
<div bis_size='{"x":392,"y":7130,"w":152,"h":132,"abs_x":2132,"abs_y":7380}'>
<div bis_size='{"x":392,"y":7130,"w":152,"h":20,"abs_x":2132,"abs_y":7380}' className="text-sm font-semibold mb-4 font-geist">Resources</div>
<ul bis_size='{"x":392,"y":7166,"w":152,"h":96,"abs_x":2132,"abs_y":7416}' className="space-y-3">
<li bis_size='{"x":392,"y":7166,"w":152,"h":24,"abs_x":2132,"abs_y":7416}'><a bis_size='{"x":392,"y":7170,"w":98,"h":18,"abs_x":2132,"abs_y":7420}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Documentation</a></li>
<li bis_size='{"x":392,"y":7202,"w":152,"h":24,"abs_x":2132,"abs_y":7452}'><a bis_size='{"x":392,"y":7206,"w":76,"h":18,"abs_x":2132,"abs_y":7456}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Help Center</a></li>
<li bis_size='{"x":392,"y":7238,"w":152,"h":24,"abs_x":2132,"abs_y":7488}'><a bis_size='{"x":392,"y":7242,"w":73,"h":18,"abs_x":2132,"abs_y":7492}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Community</a></li>
</ul>
</div>
<div bis_size='{"x":576,"y":7130,"w":152,"h":132,"abs_x":2316,"abs_y":7380}'>
<div bis_size='{"x":576,"y":7130,"w":152,"h":20,"abs_x":2316,"abs_y":7380}' className="text-sm font-semibold mb-4 font-geist">Legal</div>
<ul bis_size='{"x":576,"y":7166,"w":152,"h":96,"abs_x":2316,"abs_y":7416}' className="space-y-3">
<li bis_size='{"x":576,"y":7166,"w":152,"h":24,"abs_x":2316,"abs_y":7416}'><a bis_size='{"x":576,"y":7170,"w":46,"h":18,"abs_x":2316,"abs_y":7420}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Privacy</a></li>
<li bis_size='{"x":576,"y":7202,"w":152,"h":24,"abs_x":2316,"abs_y":7452}'><a bis_size='{"x":576,"y":7206,"w":38,"h":18,"abs_x":2316,"abs_y":7456}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">Terms</a></li>
<li bis_size='{"x":576,"y":7238,"w":152,"h":24,"abs_x":2316,"abs_y":7488}'><a bis_size='{"x":576,"y":7242,"w":48,"h":18,"abs_x":2316,"abs_y":7492}' className="text-sm transition-colors text-slate-600 hover:text-slate-900 font-geist" href="#">License</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":24,"y":7310,"w":705,"h":61,"abs_x":1764,"abs_y":7560}' className="pt-8 border-t flex flex-col sm:flex-row items-center justify-between gap-4 border-slate-200">
<div bis_size='{"x":24,"y":7343,"w":70,"h":28,"abs_x":1764,"abs_y":7593}' className="text-xl font-semibold tracking-tight font-geist">VERNIS</div>
<div bis_size='{"x":511,"y":7347,"w":217,"h":20,"abs_x":2251,"abs_y":7597}' className="text-sm text-slate-600 font-geist">© 2024 Vernis. All rights reserved.</div>
</div>
</div>
</footer>

<div bis_size='{"x":0,"y":7419,"w":753,"h":0,"abs_x":1740,"abs_y":7669}' id="envidictionary"><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-search-mobile" style={{top: '0px', left: '0px', display: 'none'}}><img alt="ENVI" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="object-cover w-full h-auto" height="27" src="default" style={{width: '27px', height: '27px'}} width="27"/></div><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-popup-tag o-bg-white o-border o-rounded o-shadow" style={{width: '400px', top: '0px', left: '0px', display: 'none'}}><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}'><button aria-label="Close" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-btn-close o-position-absolute o-top-0 o-end-0 o-mt-1 o-me-1" type="button"></button><ul bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-nav o-nav-tabs o-pop-nav" role="tablist"><span bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}'><svg aria-hidden="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-pop-speak o-link-secondary o-svg-inline--fa" data-icon="volume-high" focusable="false" role="img" viewbox="0 0 640 512" xmlns="http://www.w3.org/2000/svg"><path bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' d="M533.6 32.5C598.5 85.3 640 165.8 640 256s-41.5 170.8-106.4 223.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C557.5 398.2 592 331.2 592 256s-34.5-142.2-88.7-186.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM473.1 107c43.2 35.2 70.9 88.9 70.9 149s-27.7 113.8-70.9 149c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C475.3 341.3 496 301.1 496 256s-20.7-85.3-53.2-111.8c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zm-60.5 74.5C434.1 199.1 448 225.9 448 256s-13.9 56.9-35.4 74.5c-10.3 8.4-25.4 6.8-33.8-3.5s-6.8-25.4 3.5-33.8C393.1 284.4 400 271 400 256s-6.9-28.4-17.7-37.3c-10.3-8.4-11.8-23.5-3.5-33.8s23.5-11.8 33.8-3.5zM301.1 34.8C312.6 40 320 51.4 320 64V448c0 12.6-7.4 24-18.9 29.2s-25 3.1-34.4-5.3L131.8 352H64c-35.3 0-64-28.7-64-64V224c0-35.3 28.7-64 64-64h67.8L266.7 40.1c9.4-8.4 22.9-10.4 34.4-5.3z" fill="currentColor"></path></svg></span><li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-nav-item" role="presentation"><div aria-selected="true" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-nav-link o-active font-geist" data-bs-toggle="tab">Tra cứu</div></li><li bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-nav-item" role="presentation"><div aria-selected="false" bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-nav-link font-geist" data-bs-toggle="tab">Dịch</div></li></ul><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="o-selected-result o-pt-1"><div bis_size='{"x":0,"y":0,"w":0,"h":0,"abs_x":1740,"abs_y":250}' className="font-geist"> Đang tìm kiếm ... </div></div></div></div></div><div bis_size='{"x":0,"y":7419,"w":753,"h":0,"abs_x":1740,"abs_y":7669}' id="envidictionarySetting" url="https://envi.jpdictionary.com/setting/"></div><div bis_size='{"x":0,"y":7419,"w":753,"h":0,"abs_x":1740,"abs_y":7669}' id="envidictionaryOff"></div>
    </>
  );
}
