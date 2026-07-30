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
      
    lucide.createIcons({attrs:{'aria-hidden':'true'}});

    document.getElementById('year').textContent=new Date().getFullYear();

    const wheelLabels=['T-Shirts','Stickers','Coupons','Mugs','Keychains','Hats'];
    const wheelColors=['#ef4444','#3b82f6','#f59e0b','#10b981','#6366f1','#ec4899'];

    const wheel=new Chart(document.getElementById('wheelCanvas'),{
      type:'doughnut',
      data:{labels:wheelLabels,datasets:[{data:Array(wheelLabels.length).fill(1),backgroundColor:wheelColors,borderWidth:0}]},
      plugins:[ChartDataLabels],
      options:{
        rotation:-90,
        responsive:true,
        maintainAspectRatio:false,
        cutout:'40%',
        plugins:{
          tooltip:{enabled:false},
          legend:{display:false},
          datalabels:{
            color:'#fff',
            font:{family:'Inter',weight:'600',size:12},
            formatter:(_,ctx)=>ctx.chart.data.labels[ctx.dataIndex],
            clamp:true
          }
        }
      }
    });

    const spinBtn=document.getElementById('spinButton');
    const resultLive=document.getElementById('result');
    let spinning=false;

    spinBtn.addEventListener('click',()=>{
      if(spinning)return;
      spinning=true;
      spinBtn.setAttribute('aria-disabled','true');

      const turns=Math.floor(Math.random()*3)+4;
      const offset=Math.random()*360;
      const target=(turns*360)+offset;
      wheel.options.rotation=-90;
      wheel.update();

      let start=null,duration=4000;
      const ease=t=>1-Math.pow(1-t,3);

      function animate(ts){
        if(!start)start=ts;
        const progress=(ts-start)/duration;
        const eased=ease(Math.min(progress,1));
        wheel.options.rotation=-90+(target*eased);
        wheel.update('none');
        if(progress<1)requestAnimationFrame(animate);
        else{announcePrize();spinning=false;spinBtn.removeAttribute('aria-disabled');}
      }
      requestAnimationFrame(animate);
    });

    function announcePrize(){
      const slice=360/wheelLabels.length;
      const current=(wheel.options.rotation+90)%360;
      const index=(wheelLabels.length-Math.floor(current/slice))%wheelLabels.length;
      resultLive.textContent=`🎉 You won ${wheelLabels[index]}!`;
    }

    /* Mobile menu */
    const menuBtn=document.getElementById('menuButton');
    const mobileMenu=document.getElementById('mobileMenu');
    let open=false;
    menuBtn.addEventListener('click',()=>{
      open=!open;
      mobileMenu.style.opacity=open?'1':'0';
      mobileMenu.style.transform=open?'scaleY(1)':'scaleY(0)';
      menuBtn.setAttribute('aria-expanded',open);
      menuBtn.innerHTML=open?'<i data-lucide="x" class="w-6 h-6"></i>':'<i data-lucide="menu" class="w-6 h-6"></i>';
      lucide.createIcons({attrs:{'aria-hidden':'true'}});
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
      
<a className="sr-only focus:not-sr-only focus:absolute focus:top-4 focus:left-4 rounded bg-indigo-600 px-3 py-2 text-white text-sm" href="#main">Skip to content</a>

<header className="sticky top-0 z-40 bg-white/60 backdrop-blur-4 border-b">
<div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-4">
<a className="flex items-center gap-2 font-semibold text-gray-900 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#">
<i aria-hidden="true" className="w-6 h-6 text-indigo-600" data-lucide="disc-3"></i>
        SpinWheel
      </a>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#benefits">Benefits</a>
<a className="hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#download">Download</a>
<a className="hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#support">Support</a>
</nav>
<a className="hidden md:inline-flex items-center gap-2 rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-indigo-700 hover:scale-[1.02] transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500" href="#download">Get the App</a>
<button aria-expanded="false" className="md:hidden inline-flex items-center justify-center w-10 h-10 text-gray-700 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" id="menuButton">
<i aria-hidden="true" className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>

<nav className="md:hidden transition-all duration-300 origin-top scale-y-0 opacity-0" id="mobileMenu">
<div className="px-6 pb-6 flex flex-col gap-4 text-sm">
<a className="py-2 border-t border-gray-100 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#benefits">Benefits</a>
<a className="py-2 border-t border-gray-100 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#download">Download</a>
<a className="py-2 border-t border-b border-gray-100 hover:text-indigo-600 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#support">Support</a>
<a className="inline-flex justify-center rounded-lg bg-indigo-600 px-4 py-2 text-white text-sm font-medium shadow hover:bg-indigo-700 transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500" href="#download">Get the App</a>
</div>
</nav>
</header>

<main id="main">

<section className="relative overflow-hidden pt-24">
<div className="absolute inset-0 -z-10">
<img alt="" className="w-full h-full object-cover opacity-10" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=2160&q=80&auto=format&fit=crop" />
</div>
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12 items-center">
<div className="animate-fade">
<h1 className="text-4xl sm:text-6xl font-semibold tracking-tight">Run epic giveaways <span className="text-indigo-600">free forever</span>—just grab the app.</h1>
<p className="mt-6 text-lg text-gray-600 max-w-xl">No laptops, no browsers, no fuss. SpinWheel now lives on your iPhone, iPad, and Android devices so you can launch engaging spins in seconds, save unlimited wheels, and manage multiple giveaways at once—free forever.</p>
<div className="mt-10 flex flex-col sm:flex-row gap-4" id="download">
<figure className="w-44 h-14 overflow-hidden">
<a aria-label="Download on App Store" className="group block w-full h-full focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="https://apps.apple.com">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
</a>
</figure>
<figure className="w-44 h-14 overflow-hidden">
<a aria-label="Get it on Google Play" className="group block w-full h-full focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="https://play.google.com/store">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
</a>
</figure>
</div>
</div>

<div className="relative">
<div className="w-full max-w-md mx-auto aspect-square rounded-full border-8 border-indigo-100 shadow-lg animate-fade animate-delay-400 flex items-center justify-center">
<div className="relative w-full h-full">
<canvas aria-label="Prize wheel" className="w-full h-full" id="wheelCanvas" role="img"></canvas>
<button aria-label="Spin the wheel" className="absolute inset-0 m-auto w-24 h-24 rounded-full bg-white text-indigo-600 font-medium shadow flex items-center justify-center hover:scale-105 transition focus-visible:ring-2 focus-visible:ring-indigo-500" id="spinButton">SPIN</button>
</div>
</div>
<p aria-live="polite" className="sr-only" id="result" role="status"></p>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24" id="benefits">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-center">Because event day should be <span className="text-indigo-600">stress-free</span>.</h2>
<p className="mt-4 max-w-2xl mx-auto text-center text-gray-600">Everything you loved—now on mobile. No subscriptions, no catches; we keep things free with a small in-app ad banner and <a className="underline hover:text-indigo-600" href="https://coff.ee/saudaapp">Buy Me a Coffee</a>.</p>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-12">
<div className="animate-fade animate-delay-200">
<i aria-hidden="true" className="w-10 h-10 text-indigo-600 mb-4" data-lucide="sliders"></i>
<h3 className="text-lg font-medium">Fully Customizable</h3>
<p className="mt-2 text-sm text-gray-600">Pick colors, fonts, segment labels & weights—preview live.</p>
</div>
<div className="animate-fade animate-delay-300">
<i aria-hidden="true" className="w-10 h-10 text-indigo-600 mb-4" data-lucide="layers"></i>
<h3 className="text-lg font-medium">Multiple Wheels at Once</h3>
<p className="mt-2 text-sm text-gray-600">Switch between concurrent giveaways without losing progress.</p>
</div>
<div className="animate-fade animate-delay-400">
<i aria-hidden="true" className="w-10 h-10 text-indigo-600 mb-4" data-lucide="activity"></i>
<h3 className="text-lg font-medium">Live Inventory Logic</h3>
<p className="mt-2 text-sm text-gray-600">Inventory auto-adjusts after every spin—no spreadsheets.</p>
</div>
<div className="animate-fade animate-delay-500">
<i aria-hidden="true" className="w-10 h-10 text-indigo-600 mb-4" data-lucide="dollar-sign"></i>
<h3 className="text-lg font-medium">Free Forever</h3>
<p className="mt-2 text-sm text-gray-600">Supported by a subtle ad banner and community coffees—zero fees.</p>
</div>
</div>
</section>

<section className="bg-gray-50" id="support">
<div className="max-w-7xl mx-auto px-6 py-24 text-center">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight">Love SpinWheel?</h2>
<p className="mt-4 max-w-2xl mx-auto text-gray-600">Help keep it free forever. Grab a coffee for the dev or share feedback—every bit fuels the next feature.</p>
<p className="mt-2 text-sm text-gray-500">No selling of your email ID. Just a developer who wants to make the world a little better.</p>
<div className="mt-8 flex justify-center gap-4">
<a className="inline-flex items-center gap-2 rounded-lg bg-yellow-500 px-5 py-3 text-white text-sm font-medium shadow hover:bg-yellow-600 hover:scale-[1.02] transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-yellow-600" href="https://coff.ee/saudaapp">
<i aria-hidden="true" className="w-5 h-5" data-lucide="coffee"></i>
            Buy Me a Coffee
          </a>
<a className="inline-flex items-center gap-2 rounded-lg border border-gray-300 px-5 py-3 text-sm font-medium hover:border-indigo-600 hover:text-indigo-600 hover:scale-[1.02] transition focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-indigo-500" href="mailto:hello@spinwheel.app">
<i aria-hidden="true" className="w-4 h-4" data-lucide="mail"></i>
            Send Feedback
          </a>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 py-24">
<div className="rounded-3xl bg-indigo-600 text-white p-12 text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-tr from-white/10 via-white/0 to-white/10 pointer-events-none"></div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Get the app & start spinning today.</h2>
<p className="mt-4 max-w-2xl mx-auto text-indigo-100">It’s free, it’s fast, and it’s built for event pros like you.</p>
<div className="mt-10 flex flex-col sm:flex-row justify-center gap-4">
<figure className="w-44 h-14 overflow-hidden">
<a aria-label="Download on App Store" className="group block w-full h-full focus-visible:ring-2 focus-visible:ring-white rounded-sm" href="https://apps.apple.com">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg" />
</a>
</figure>
<figure className="w-44 h-14 overflow-hidden">
<a aria-label="Get it on Google Play" className="group block w-full h-full focus-visible:ring-2 focus-visible:ring-white rounded-sm" href="https://play.google.com/store">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition" src="https://play.google.com/intl/en_us/badges/static/images/badges/en_badge_web_generic.png" />
</a>
</figure>
</div>
</div>
</section>
</main>

<footer className="border-t pt-10 pb-16">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6 text-sm text-gray-500">
<p>© <span id="year"></span> SpinWheel. All rights reserved.</p>
<nav className="flex gap-6">
<a className="hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#support">Support</a>
<a className="hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#">Privacy</a>
<a className="hover:text-gray-700 focus-visible:ring-2 focus-visible:ring-indigo-500 rounded-sm" href="#">Terms</a>
</nav>
</div>
</footer>






    </>
  );
}
