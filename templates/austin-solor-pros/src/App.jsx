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
primary: '#8CC63F', // Lime green
secondary: '#0B3B42', // Dark teal
surface: '#F0F5F4', // Light mint bg
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



      (function () {
        const container = document.querySelector('.karaoke-container');
        if (!container || container.dataset.processed) return;

        const wrapWords = (node) => {
          if (node.nodeType === 3) {
            const words = node.textContent.match(/\S+|\s+/g) || [];
            const fragment = document.createDocumentFragment();

            words.forEach((word) => {
              if (word.trim().length > 0) {
                const span = document.createElement('span');
                span.textContent = word;
                span.className = 'k-word';
                fragment.appendChild(span);
              } else {
                fragment.appendChild(document.createTextNode(word));
              }
            });

            node.replaceWith(fragment);
          } else if (node.nodeType === 1) {
            Array.from(node.childNodes).forEach(wrapWords);
          }
        };

        Array.from(container.childNodes).forEach(wrapWords);
        container.dataset.processed = 'true';

        const observer = new IntersectionObserver(
          (entries) => {
            entries.forEach((entry) => {
              if (entry.isIntersecting) {
                const words = container.querySelectorAll('.k-word');

                words.forEach((word, index) => {
                  setTimeout(() => {
                    word.classList.add('active');
                  }, index * 40); // speed of the karaoke effect
                });

                observer.unobserve(container);
              }
            });
          },
          { threshold: 0.2 }
        );

        observer.observe(container);
      })();
    


    function updateCalc() {
      const bill = parseFloat(document.getElementById('calc-bill').value) || 0;
      document.getElementById('calc-range').value = bill;

      // Austin Energy avg rate ~$0.11/kWh
      const rate = 0.11;
      const monthlyKwh = bill / rate;
      // 85% offset target
      const annualKwh = monthlyKwh * 12 * 0.85;
      // Austin avg 5.5 peak sun hours, system factor 0.80
      const systemKw = annualKwh / (5.5 * 365 * 0.80);
      const panels = Math.ceil(systemKw / 0.4); // 400W panels
      const costPerWatt = 2.80;
      const grossCost = systemKw * 1000 * costPerWatt;
      const netCost = grossCost * 0.70; // 30% ITC
      const year1Savings = monthlyKwh * 12 * 0.85 * rate;
      const monthlySavings = year1Savings / 12;
      const payback = netCost / year1Savings;

      // 25-year with 2.5% escalator
      let lifetime = 0;
      for (let y = 0; y < 25; y++) lifetime += year1Savings * Math.pow(1.025, y);

      document.getElementById('res-size').textContent = systemKw.toFixed(1);
      document.getElementById('res-panels').textContent = panels;
      document.getElementById('res-year1').textContent = Math.round(year1Savings).toLocaleString();
      document.getElementById('res-monthly').textContent = '$' + Math.round(monthlySavings);
      document.getElementById('res-lifetime').textContent = Math.round(lifetime).toLocaleString();
      document.getElementById('res-payback').textContent = payback.toFixed(1);
    }
    // init on load
    document.addEventListener('DOMContentLoaded', updateCalc);
  


      (function() {
        var s = document.currentScript;
        if (s && s.parentElement) {
            s.parentElement.classList.add('flex', 'flex-col', 'justify-center', 'h-full');
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
      

<nav className="z-50 text-sm font-medium text-white pt-6 pb-6 absolute top-0 right-0 left-0">
<div className="flex max-w-7xl mr-auto ml-auto items-center justify-between">
<div className="grid grid-flow-col place-content-center text-center gap-x-2 items-center">
<svg className="bg-center w-[28px] h-[28px]" data-icon-replaced="true" height="100%" strokeWidth="2" style={{fillRule: 'evenodd', clipRule: 'evenodd', strokeLinejoin: 'round', strokeMiterlimit: '2', color: 'rgb(255, 255, 255)', width: '28px', height: '28px'}} version="1.1" viewbox="0 0 483 491" width="100%" xml:space="preserve" xmlns="http://www.w3.org/2000/svg" xmlns:serif="http://www.serif.com/" xmlns:xlink="http://www.w3.org/1999/xlink">
<g className="" transform="matrix(1,0,0,1,-558.833088,-4.844197)">
<g transform="matrix(1.110397,0,0,1.110397,503.032391,-45.888055)">
<path d="M482.464,364.645C478.063,361.405 465.865,352.651 464.418,351.613C406.686,310.181 406.452,310.575 348.839,269.011C315.178,244.727 326.274,200.49 358.638,188.869C361.901,187.697 363.808,187.013 401.56,182.891C456.712,176.87 456.678,176.57 461.5,176.532C464.888,176.506 464.518,181.541 464.723,183.483C468.301,217.411 469.105,218.522 467.385,219.298C467.047,219.45 443.551,222.066 441.478,222.297C389.002,228.141 389.046,227.903 384.498,228.487C372.67,230.004 372.488,229.183 371.639,229.773C369.089,231.541 376.824,235.353 387.225,242.878C400.519,252.496 400.438,252.542 413.822,262.047C444.615,283.915 444.71,283.745 447.296,285.766C469.938,303.455 478.351,305.73 478.889,311.467C480.943,333.33 481.771,335.544 482.151,340.536C483.638,360.082 484.702,359.965 484.629,363.534C484.623,363.828 484.264,364.039 484.258,364.333L482.464,364.645Z" style={{fill: 'rgb(248,118,84)'}}></path>
</g>
<g transform="matrix(1.110397,0,0,1.110397,503.032391,-45.888055)">
<path d="M446.129,86.759C446.144,88.258 445.696,88.483 445.562,88.55C442.881,89.897 404.56,119.994 397.771,124.877C393.673,127.824 323.828,181.879 315.165,188.027C286.672,208.244 256.968,189.759 248.99,173.267C244.014,162.982 244.222,159.291 243.914,154.478C243.65,150.35 243.485,147.771 252.094,103.419C254.951,88.699 254.88,88.705 255.151,87.431C255.49,85.835 258.675,70.855 259.188,67.436C261.68,50.807 262.314,50.546 263.645,49.997C265.554,49.211 302.525,57.162 302.637,57.201C305.685,58.273 304.589,61.688 297.629,96.52C296.879,100.273 287.514,150.463 287.148,151.463C285.7,155.428 288.718,154.435 289.512,153.516C291.355,151.379 291.701,151.541 293.808,149.933C322.532,128.014 322.298,127.813 324.833,125.967C334.176,119.16 355.877,102.177 360.131,99.023C388.655,77.874 389.242,75.512 392.488,75.801C393.046,75.851 396.437,76.152 399.4,76.969C402.736,77.89 444.456,86.135 446.129,86.759Z" style={{fill: 'rgb(248,118,84)'}}></path>
</g>
<g className="" transform="matrix(1.110397,0,0,1.110397,503.032391,-45.888055)">
<path className="" d="M245.785,454.575C246.627,451.369 277.304,343.049 280.05,333.353C282.963,323.068 285.439,315.109 295.673,306.694C312.027,293.246 331.06,296.29 340.31,299.943C357.014,306.538 363.87,323.002 369.144,333.708C386.7,369.341 403.841,401.66 403.584,403.519C403.489,404.202 403.414,404.749 396.367,408.236C368.171,422.188 368.172,422.428 367.534,422.217C365.514,421.549 363.431,416.55 362.842,415.354C361.592,412.816 352.231,393.807 347.129,383.674C346.147,381.725 337.162,363.882 334.732,359.379C324.048,339.586 325.337,337.608 323.524,338.227C322.374,338.62 322.19,338.467 321.87,339.642C320.657,344.093 320.996,344.131 319.76,348.581C318.357,353.632 305.305,400.605 301.878,411.616C293.385,438.906 294.313,439.156 293.449,441.484C288.347,455.248 290.79,461.151 283.675,464.858C281.741,465.866 270.377,471.788 259.287,477.041C239.235,486.539 239.337,487.882 237.623,487.041C235.756,486.126 238.451,481.417 239.427,477.479C242.55,464.879 243.428,465.151 245.785,454.575Z" style={{fill: 'rgb(248,118,84)'}}></path>
</g>
<g transform="matrix(1.110397,0,0,1.110397,503.032391,-45.888055)">
<path d="M50.509,276.504C50.811,276.174 50.257,275.548 51.484,275.441C56.098,275.037 157.299,275.017 166.5,275.016C220.56,275.005 223.041,271.705 241.209,284.851C247.304,289.261 268.041,314.72 248.039,344.176C244.036,350.07 214.388,375.092 197.674,390.69C189.008,398.778 177.66,408.471 175.89,409.983C175.202,410.571 174.036,412.165 172.531,412.291C171.376,412.388 164.67,404.041 159.445,398.551C144.635,382.988 144.718,382.149 145.741,380.665C146.295,379.862 175.713,353.631 178.333,351.295C185.719,344.709 185.51,344.569 192.942,337.987C203.917,328.268 203.824,328.281 214.843,318.652C217.359,316.452 213.673,316.605 213.477,316.613C188.966,317.63 112.675,317.148 91.501,317.565C84.212,317.708 84.832,315.079 80.377,310.617C71.299,301.526 68.056,296.23 50.253,277.607L50.509,276.504Z" style={{fill: 'rgb(248,118,84)'}}></path>
</g>
<g transform="matrix(1.110397,0,0,1.110397,503.032391,-45.888055)">
<path d="M160.802,118.403C157.359,109.363 153.277,98.208 152.633,96.448C150.924,91.78 151.828,91.652 154.111,87.286C162.226,71.765 169.261,60.479 175.879,47.751C176.074,47.375 177.916,42.759 180.023,48.701C182.128,54.639 188.308,72.072 207.377,122.547C220.981,158.555 220.937,158.522 234.022,194.684C245.15,225.437 221.559,252.976 192.493,252.932C174.937,252.906 150.881,235.444 129.548,225.405C122.948,222.299 114.86,217.983 113.597,217.309C92.005,205.786 91.542,206.022 91.211,204.575C90.741,202.515 103.815,179.426 107.933,170.714C110.213,165.889 114.696,170.518 121.729,174.031C124.033,175.182 144.137,185.223 150.386,188.711C151.088,189.103 190.739,209.806 191.577,210.319C195.843,212.933 195.207,209.813 195.101,209.545C193.458,205.372 193.23,205.476 182.186,175.607C180.492,171.025 164.105,126.708 160.802,118.403Z" style={{fill: 'rgb(248,118,84)'}}></path>
</g>
</g>
</svg>
<div className="leading-none text-base text-slate-950 font-manrope font-semibold">Austin Solor Pros</div>
</div>
<div className="hidden md:flex space-x-8">
<a className="hover:text-primary transition-colors text-slate-950 font-manrope font-semibold" href="#">How it Works</a>
<a className="hover:text-primary transition-colors text-slate-950 font-manrope font-semibold" href="#">Cost &amp; Savings</a>
<a className="hover:text-primary transition-colors text-slate-950 font-manrope font-semibold" href="#">Incentives</a>
<a className="hover:text-primary transition-colors text-slate-950 font-manrope font-semibold" href="#">Blog</a>
<a className="hover:text-primary transition-colors text-slate-950 font-manrope font-semibold" href="#">Resources</a>
</div>

<button className="md:hidden">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>


<div className="manrope selection:bg-orange-200 selection:text-black overflow-x-hidden" style={{backgroundColor: '#f2f2f2ff', color: '#1e1e1eff', backgroundImage: 'radial-gradient(#CCCCCC 1px, transparent 1px)', backgroundSize: '24px 24px', minHeight: '80vh'}}>

<style>
    @import url('https://fonts.googleapis.com/css2?family=DM+Serif+Display&family=Manrope:wght@300;400;500;600;700&display=swap');

    .serif {
      font-family: 'DM Serif Display', serif;
    }

    .manrope {
      font-family: 'Manrope', sans-serif;
    }

    .fade-in-up {
      animation: fadeInUp 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards;
      opacity: 0;
    }

    @keyframes fadeInUp {
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }

    .btn-glow:hover {
      box-shadow: 0 0 30px rgba(255, 159, 28, 0.2);
      transition: all 0.4s ease;
    }
  </style>

<header className="flex flex-col md:p-12 overflow-hidden w-full h-[80vh] pt-6 pr-6 pb-6 pl-6 relative justify-center">
<div className="relative z-10 w-full max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 items-end pb-12 md:pb-24">
<div className="md:col-span-9 fade-in-up">
<div className="mb-8 inline-flex items-center gap-4">
<div className="relative flex h-3 w-3">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-3 w-3 bg-orange-500"></span>
</div>
<span className="text-[12px] text-orange-500 tracking-[0.4em] uppercase font-bold">228 Sunny Days a Year in Austin</span>
</div>
<h1 className="serif text-black mb-10" style={{fontSize: 'clamp(3.5rem, 12vw, 10rem)', lineHeight: '0.85', letterSpacing: '-0.04em'}}>
          Solar,<br/><span className="" style={{color: 'transparent', WebkitTextStroke: '1px rgba(31, 31, 31, 0.4)'}}>simplified.</span>
</h1>
<div className="flex flex-col md:flex-row gap-10 items-start md:items-center">
<button className="btn-glow bg-orange-600" onmouseout="this.style.transform='scale(1)'" onmouseover="this.style.transform='scale(1.02)'" style={{color: 'rgb(0, 0, 0)', padding: '20px 48px', fontWeight: '800', borderRadius: '9999px', fontSize: '0.9rem', letterSpacing: '0.02em'}}>
            GET A FREE ESTIMATE
          </button>
<div className="flex items-center gap-6">
<div className="h-12 w-[1px] bg-white/10 hidden md:block"></div>
<div className="flex flex-col">
<span className="text-[10px] text-gray-500 font-bold tracking-[0.2em] uppercase mb-1">Federal Tax Credit</span>
<span className="text-sm text-gray-400 font-medium">30% — No Cap</span>
</div>
</div>
</div>
</div>
<div className="md:col-span-3 fade-in-up" style={{animationDelay: '0.4s'}}>
<div className="border-neutral-700 border rounded-3xl pt-8 pr-8 pb-8 pl-8" style={{background: 'rgba(255, 255, 255, 0.5)', border: '1px solid rgba(255, 255, 255, 0.05)', backdropFilter: 'blur(12px)'}}>
<p className="text-gray-400 text-lg leading-relaxed font-light">
            An independent resource for Austin homeowners — real costs, real incentives, and what to actually expect
            from going solar.
          </p>
<div className="mt-6 flex gap-2">
<div className="h-1 w-8 rounded-full bg-orange-500/40"></div>
<div className="h-1 w-2 rounded-full bg-white/10"></div>
<div className="h-1 w-2 rounded-full bg-white/10"></div>
</div>
</div>
</div>
</div>
</header>
</div>

<section className="overflow-hidden bg-white relative" id="how-it-works">
<section className="md:px-12 bg-transparent pt-32 pr-6 pb-32 pl-6">
<div className="text-center max-w-5xl mr-auto ml-auto">
<style>
      .k-word {
        opacity: 0.2;
        transition: opacity 0.25s ease;
        display: inline-block;
      }

      .k-word.active {
        opacity: 1;
      }
    </style>
<h2 className="karaoke-container md:text-4xl leading-tight text-2xl font-normal text-neutral-800 tracking-tight mb-10" data-processed="true">
<span className="k-word font-manrope font-semibold">We're</span>
<span className="k-word font-manrope font-semibold">an</span>
<span className="k-word font-manrope font-semibold">independent</span>
<span className="k-word font-manrope font-semibold">solar</span>
<span className="k-word font-manrope font-semibold">resource</span>
<span className="k-word font-manrope font-semibold">for</span>
<span className="k-word font-manrope font-semibold">Austin</span>
<span className="k-word font-manrope font-semibold">homeowners.</span>
<span className="k-word font-manrope font-semibold">No</span>
<span className="k-word font-manrope font-semibold">sales</span>
<span className="k-word font-manrope font-semibold">pitch,</span>
<span className="k-word font-manrope font-semibold">no</span>
<span className="k-word font-manrope font-semibold">pressure.</span>
<span className="k-word font-manrope font-semibold">Just</span>
<span className="k-word font-manrope font-semibold">clear</span>
<span className="k-word font-manrope font-semibold">information</span>
<span className="k-word font-manrope font-semibold">about</span>
<span className="k-word font-manrope font-semibold">how</span>
<span className="k-word font-manrope font-semibold">solar</span>
<span className="k-word font-manrope font-semibold">works</span>
<span className="k-word font-manrope font-semibold">in</span>
<span className="k-word font-manrope font-semibold">Austin,</span>
<span className="k-word font-manrope font-semibold">what</span>
<span className="k-word font-manrope font-semibold">it</span>
<span className="k-word font-manrope font-semibold">actually</span>
<span className="k-word font-manrope font-semibold">costs,</span>
<span className="k-word font-manrope font-semibold">and</span>
<span className="k-word font-manrope font-semibold">whether</span>
<span className="k-word font-manrope font-semibold">it</span>
<span className="k-word font-manrope font-semibold">makes</span>
<span className="k-word font-manrope font-semibold">sense</span>
<span className="k-word font-manrope font-semibold">for</span>
<span className="k-word font-manrope font-semibold">your</span>
<span className="k-word font-manrope font-semibold">home.</span>
<span className="k-word font-manrope font-semibold">If</span>
<span className="k-word font-manrope font-semibold">you</span>
<span className="k-word font-manrope font-semibold">want</span>
<span className="k-word font-manrope font-semibold">to</span>
<span className="k-word font-manrope font-semibold">talk</span>
<span className="k-word font-manrope font-semibold">to</span>
<span className="k-word font-manrope font-semibold">someone,</span>
<span className="k-word font-manrope font-semibold">we'll</span>
<span className="k-word font-manrope font-semibold">connect</span>
<span className="k-word font-manrope font-semibold">you</span>
<span className="k-word font-manrope font-semibold">with</span>
<span className="k-word font-manrope font-semibold">a</span>
<span className="k-word font-manrope font-semibold">local</span>
<span className="k-word font-manrope font-semibold">solar</span>
<span className="k-word font-manrope font-semibold">pro</span>
<span className="k-word font-manrope font-semibold">who</span>
<span className="k-word font-manrope font-semibold">can</span>
<span className="k-word font-manrope font-semibold">answer</span>
<span className="k-word font-manrope font-semibold">your</span>
<span className="k-word font-manrope font-semibold">specific</span>
<span className="k-word font-manrope font-semibold">questions.</span>
<span className="italic text-neutral-400"><span className="k-word font-manrope font-semibold">But</span>
<span className="k-word font-manrope font-semibold">start</span>
<span className="k-word font-manrope font-semibold">here</span>
<span className="k-word font-manrope font-semibold">first</span>
<span className="k-word font-manrope font-semibold">—</span>
<span className="k-word font-manrope font-semibold">you'll</span>
<span className="k-word font-manrope font-semibold">be</span>
<span className="k-word font-manrope font-semibold">glad</span>
<span className="k-word font-manrope font-semibold">you</span>
<span className="k-word font-manrope font-semibold">did.</span></span><span className="k-word font-manrope font-semibold">.</span>
</h2>

</div>
</section><section className="md:px-12 overflow-hidden bg-white pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2">
</div>
<div className="absolute bottom-0 left-0 w-72 h-72 bg-orange-500/5 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2">
</div>
<div className="z-10 max-w-5xl mr-auto ml-auto relative">

<div className="text-center mb-14">
<h2 className="serif md:text-4xl text-3xl font-semibold text-slate-900 tracking-tight font-manrope">See what solar could
  save you</h2>
<p className="text-slate-500 mt-3 max-w-lg mx-auto text-base">Enter your average monthly electric bill and we'll
        estimate your system size, savings, and payback period.</p>
</div>
<div className="grid lg:grid-cols-5 gap-0 shadow-slate-200/50 overflow-hidden bg-white border-slate-200 border rounded-3xl shadow-xl">

<div className="lg:col-span-2 md:p-10 flex flex-col text-white bg-gradient-to-br from-cyan-950 to-cyan-900 pt-8 pr-8 pb-8 pl-8 justify-center">
<label className="text-xs font-bold tracking-[0.15em] uppercase text-cyan-300/70 mb-3 block" htmlFor="calc-bill">Your Monthly Electric Bill</label>
<div className="relative mb-6">
<span className="absolute left-4 top-1/2 -translate-y-1/2 text-2xl font-semibold text-white/60 pointer-events-none">$</span>
<input className="w-full bg-white/10 border border-white/15 rounded-xl pl-10 pr-4 py-4 text-3xl font-semibold text-white placeholder-white/30 focus:outline-none focus:ring-2 focus:ring-primary/60 transition" id="calc-bill" max="1000" min="50" oninput="updateCalc()" type="number" value="200"/>
</div>
<input className="accent-primary cursor-pointer w-full mb-4" id="calc-range" max="800" min="50" oninput="document.getElementById('calc-bill').value=this.value; updateCalc()" step="10" type="range" value="200"/>
<div className="flex justify-between text-xs text-cyan-400/50 font-medium">
<span>$50</span>
<span className="">$800</span>
</div>
<div className="mt-8 pt-6 border-t border-white/10">
<div className="flex items-center gap-2 text-xs text-cyan-300/60">
<svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 16h-1v-4h-1m1-4h.01M12 2a10 10 0 100 20 10 10 0 000-20z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
            Based on Austin Energy avg rates &amp; 5.5 peak sun hours/day
          </div>
</div>
</div>

<div className="lg:col-span-3 md:p-10 pt-8 pr-8 pb-8 pl-8">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">

<div className="bg-slate-50 rounded-2xl p-5 group hover:bg-primary/5 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
<svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m15.36-6.36l-1.42 1.42M7.05 16.95l-1.42 1.42m12.73 0l-1.42-1.42M7.05 7.05L5.63 5.63M16 12a4 4 0 11-8 0 4 4 0 018 0z" strokeLinecap="round" strokeLinejoin="round">
</path>
</svg>
</div>
<span className="text-xs font-bold tracking-wider uppercase text-slate-400">System Size</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 font-manrope" id="res-size">11.5</span>
<span className="text-sm font-medium text-slate-400">kW</span>
</div>
<p className="text-xs text-slate-400 mt-1">~<span id="res-panels">29</span> panels on your roof</p>
</div>

<div className="bg-slate-50 rounded-2xl p-5 group hover:bg-primary/5 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-primary/15 flex items-center justify-center">
<svg className="w-4 h-4 text-primary" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1" strokeLinecap="round" strokeLinejoin="round">
</path>
</svg>
</div>
<span className="text-xs font-bold tracking-wider uppercase text-slate-400">Year 1 Savings</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-medium text-slate-400">$</span>
<span className="text-3xl font-bold text-slate-900 font-manrope" id="res-year1">2,040</span>
</div>
<p className="text-xs text-slate-400 mt-1">Avg <span id="res-monthly">$170</span>/mo back in your pocket</p>
</div>

<div className="bg-slate-50 rounded-2xl p-5 group hover:bg-primary/5 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
<span className="text-xs font-bold tracking-wider uppercase text-slate-400">25-Year Savings</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-sm font-medium text-slate-400">$</span>
<span className="text-3xl font-bold text-slate-900 font-manrope" id="res-lifetime">69,682</span>
</div>
<p className="text-xs text-slate-400 mt-1">With 2.5% annual rate increase</p>
</div>

<div className="bg-slate-50 rounded-2xl p-5 group hover:bg-primary/5 transition-colors">
<div className="flex items-center gap-2 mb-2">
<div className="w-8 h-8 rounded-lg bg-orange-500/15 flex items-center justify-center">
<svg className="w-4 h-4 text-orange-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" strokeLinecap="round" strokeLinejoin="round">
</path>
</svg>
</div>
<span className="text-xs font-bold tracking-wider uppercase text-slate-400">Payback Period</span>
</div>
<div className="flex items-baseline gap-1">
<span className="text-3xl font-bold text-slate-900 font-manrope" id="res-payback">11.1</span>
<span className="text-sm font-medium text-slate-400">years</span>
</div>
<p className="text-xs text-slate-400 mt-1">After 30% federal tax credit</p>
</div>
</div>

<div className="mt-8 flex flex-col sm:flex-row items-center gap-4">
<a className="sm:w-auto hover:bg-orange-500/90 transition shadow-primary/20 text-sm font-semibold text-white text-center bg-orange-500 w-full rounded-xl px-8 py-3.5 shadow-lg" href="#estimate">
            Connect with a solar pro →
          </a>
<span className="text-xs text-slate-400">Free · No commitment · Takes 2 min</span>
</div>
</div>
</div>
</div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]">
</div></section>
<section className="border-t-stone-100 grid gri-cols-1 place-content-center border mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="max-w-7xl">
<p className="uppercase text-sm text-cyan-900 tracking-widest mb-8 font-manrope font-semibold">Costs &amp; Incentives
    </p>
<h2 className="md:text-5xl leading-[1.1] text-4xl text-slate-900 tracking-tight font-manrope mb-6 font-semibold">What
  Does Solar
  Actually<br/>Cost in Austin?
</h2>
<p className="text-neutral-500 text-lg leading-relaxed mb-6 font-manrope font-semibold">The average residential solar
      install in Austin runs
      between
      <span className="text-neutral-900 font-manrope font-semibold">$18,000 and $28,000</span> before incentives. That's a
      wide range
      because it depends on your roof size, the panels you choose, and how much energy you use.
    </p>
<p className="text-neutral-500 text-lg leading-relaxed mb-16 font-manrope font-semibold">The good news: incentives bring
      that number down
      significantly.</p>

<div className="grid grid-cols-1 md:grid-cols-3 gap-x-12 gap-y-14 mb-20">
<div className="">
<p className="text-5xl tracking-tight text-neutral-900 mb-3 font-manrope font-semibold">30%</p>
<p className="uppercase text-sm text-cyan-800 tracking-widest mb-3 font-manrope font-semibold">Federal Tax Credit
        </p>
<p className="text-neutral-500 text-[15px] leading-relaxed font-manrope font-semibold">The federal Investment Tax
          Credit lets you deduct 30% of
          your total solar cost from your federal taxes. On a $22,000 system, that's
          <span className="text-neutral-900 font-manrope font-semibold">$6,600 back</span>.
        </p>
</div>
<div className="">
<p className="text-5xl tracking-tight text-neutral-900 mb-3 font-manrope font-semibold">$$$</p>
<p className="uppercase text-sm text-cyan-800 tracking-widest mb-3 font-manrope font-semibold">Austin Energy Rebate
        </p>
<p className="text-[15px] leading-relaxed text-neutral-500 font-manrope font-semibold">Austin Energy offers a rebate
          for residential solar
          installations. The amount varies by year and system size — check current rates on their site.</p>
</div>
<div className="">
<p className="text-5xl text-neutral-900 tracking-tight mb-3 font-manrope font-semibold">$0</p>
<p className="uppercase text-sm text-sky-900 tracking-widest mb-3 font-manrope font-semibold">Property Tax Increase
        </p>
<p className="text-[15px] leading-relaxed text-neutral-500 font-manrope font-semibold">Solar panels increase your
          home's value, but Texas law
          says that increase is exempt from property taxes. Your home is worth more. Your tax bill stays the same.</p>
</div>
</div>

<div className="border-t border-neutral-200 mb-12"></div>

<div className="flex flex-col md:flex-row md:items-baseline gap-4 md:gap-8 mb-4 gap-x-4 gap-y-4">
<p className="uppercase shrink-0 md:pt-1 text-sm text-neutral-400 tracking-widest font-manrope font-semibold">
        Realistic Payback</p>
<div className="">
<p className="md:text-3xl leading-snug text-2xl text-neutral-900 tracking-tight font-manrope font-semibold">Most
          Austin
          homeowners
          break even in 7–9 years.</p>
<p className="leading-relaxed text-base text-neutral-500 mt-3 font-manrope font-semibold">After that, it's
          essentially free electricity for the
          remaining 15–20 years of your panel warranty.</p>
</div>
</div>
</div>
</section>
<div className="grid-background h-full pt-24 pb-24" style="background-image: linear-gradient(to right, #e5e7eb 1px, transparent 1px), linear-gradient(to bottom, #e5e7eb 1px, transparent 1px);
  background-size: 24px 24px;">
<div className="grid lg:grid-cols-1 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center">
<div className="z-10 relative space-y-4">
<h2 className="md:text-4xl text-secondary text-3xl font-semibold tracking-tight font-manrope">Go Deeper</h2>
<div className="text-base font-light text-slate-500 space-y-6">
</div>
</div>
<div className="grid grid-cols-3 gap-3">
<article className="overflow-hidden min-h-[380px] flex flex-col sm:rounded-3xl sm:min-h-[440px] md:min-h-[500px] sm:p-6 md:p-7 text-white bg-[#f87654] max-w-xl border-0 rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between text-white/90">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
<span className="text-3xl sm:text-4xl tracking-tight font-manrope font-semibold">01</span>
</div>
<h3 className="sm:mt-5 sm:text-3xl text-2xl tracking-tight mt-4 font-manrope font-semibold">How Solar Works in
          Austin</h3>
<p className="sm:text-base text-sm text-white/90 mt-2 font-manrope font-semibold">Panels, inverters, grid connection
          — explained in plain
          English. Plus Austin-specific details like buyback rates and system sizing.</p>
<div className="sm:mt-6 sm:rounded-2xl overflow-hidden bg-white/10 ring-white/20 ring-1 rounded-xl mt-5">
<img alt="3D industrial render showcasing precision components" className="sm:h-56 md:h-64 w-full h-44 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7c81dc6c-677b-458c-9c27-a3d6ff08395d_1600w.png"/>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-white/90">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="sun" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="4"></circle>
<path d="M12 2v2"></path>
<path d="M12 20v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="m17.66 17.66 1.41 1.41"></path>
<path d="M2 12h2"></path>
<path d="M20 12h2"></path>
<path d="m6.34 17.66-1.41 1.41"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
</svg>
<span className="text-sm font-manrope font-semibold">Read the Guide</span>
</div>
</article>
<article className="overflow-hidden sm:rounded-3xl min-h-[380px] sm:min-h-[440px] md:min-h-[500px] sm:p-6 md:p-7 flex flex-col text-white bg-amber-400 max-w-xl border-0 rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex items-center justify-between text-white/90">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
<span className="sm:text-4xl text-3xl tracking-tight font-manrope font-semibold">02</span>
</div>
<h3 className="sm:mt-5 sm:text-3xl text-2xl tracking-tight mt-4 font-manrope font-semibold">Costs &amp; Savings</h3>
<p className="sm:text-base text-sm text-white/90 mt-2 font-manrope font-semibold">Real numbers on what solar costs
          in Austin, how financing
          works, and when you'll break even.</p>
<div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden bg-white/10 ring-1 ring-white/20">
<img alt="3D industrial render showcasing precision components" className="w-full h-44 sm:h-56 md:h-64 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1619b254-4925-4861-ae23-ae515f16291f_1600w.png"/>
</div>
<div className="flex gap-2 text-white/90 mt-auto pt-6 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-waves w-[16px] h-[16px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="cloud-sun" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2v2"></path>
<path d="m4.93 4.93 1.41 1.41"></path>
<path d="M20 12h2"></path>
<path d="m19.07 4.93-1.41 1.41"></path>
<path d="M15.947 12.65a4 4 0 0 0-5.925-4.128"></path>
<path d="M13 22H7a5 5 0 1 1 4.9-6H13a3 3 0 0 1 0 6Z"></path>
</svg>
<span className="text-sm font-manrope font-semibold">Read the Guide  </span>
</div>
</article>
<article className="overflow-hidden sm:rounded-3xl min-h-[380px] sm:min-h-[440px] md:min-h-[500px] sm:p-6 md:p-7 flex flex-col text-white bg-blue-400 max-w-xl border-0 rounded-2xl pt-5 pr-5 pb-5 pl-5 relative">
<div className="flex text-white/90 items-center justify-between">
<svg className="lucide lucide-arrow-up-right w-5 h-5" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 7h10v10"></path>
<path className="" d="M7 17 17 7"></path>
</svg>
<span className="text-3xl sm:text-4xl tracking-tight font-manrope font-semibold">01</span>
</div>
<h3 className="sm:mt-5 sm:text-3xl text-2xl tracking-tight mt-4 font-manrope font-semibold">Austin Solar Incentives
        </h3>
<p className="sm:text-base text-sm text-white/90 mt-2 font-manrope font-semibold">Federal tax credit, Austin Energy
          rebates, property tax
          exemptions — and how to stack them all.</p>
<div className="mt-5 sm:mt-6 rounded-xl sm:rounded-2xl overflow-hidden bg-white/10 ring-1 ring-white/20">
<img alt="Tax documents and financial paperwork" className="sm:h-56 md:h-64 w-full h-44 object-cover" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="mt-auto pt-6 flex items-center gap-2 text-white/90">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="thermometer-sun" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M12 9a4 4 0 0 0-2 7.5"></path>
<path d="M12 3v2"></path>
<path d="m6.6 18.4-1.4 1.4"></path>
<path d="M20 4v10.54a4 4 0 1 1-4 0V4a2 2 0 0 1 4 0Z"></path>
<path d="M4 13H2"></path>
<path d="M6.34 7.34 4.93 5.93"></path>
</svg>
<span className="text-sm font-manrope font-semibold">Read the Guide  </span>
</div>
</article>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-cyan-950 pt-24 pb-24 relative">

<div className="pointer-events-none opacity-10 w-full h-full absolute top-0 left-0">
<svg className="text-[400px] w-[400px] h-[400px] absolute top-10 left-10" data-icon-set="solar" data-solar="sun-linear" height="400" viewbox="0 0 24 24" width="400" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="6"></circle>
<path d="M12 2v1m0 18v1m10-10h-1M3 12H2m17.07-7.07l-.392.393M5.322 18.678l-.393.393m14.141-.001l-.392-.393M5.322 5.322l-.393-.393" strokeLinecap="round">
</path>
</g>
</svg>
</div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-3xl tracking-tight font-manrope mb-4 font-semibold">Cost &amp; Real Savings</h2>
<p className="text-base text-white/70 font-manrope font-semibold">
        Let's talk numbers. Solar is a major investment, but local incentives make Austin one of the best places in the
        country to go solar. Most of our neighbors hit their
        .
      </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="text-3xl mb-2 tracking-tight font-manrope font-semibold">$18k-$28k</div>
<div className="text-sm text-white/60 font-manrope font-semibold">Average install cost before applied incentives</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<iconify-icon className="text-xl" icon="solar:chart-square-linear"></iconify-icon>
</div>
<div className="text-3xl mb-2 tracking-tight font-manrope font-semibold">30%</div>
<div className="text-sm text-white/60 font-manrope font-semibold">Federal Investment Tax Credit (ITC) savings</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<iconify-icon className="text-xl" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="text-3xl mb-2 tracking-tight font-manrope font-semibold">$2,500</div>
<div className="text-sm text-white/60 font-manrope font-semibold">Austin Energy local solar education course rebate</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-8 hover:bg-white/10 transition-colors">
<div className="bg-primary/20 w-10 h-10 rounded-full flex items-center justify-center text-primary mb-6">
<iconify-icon className="text-xl" icon="solar:history-linear"></iconify-icon>
</div>
<div className="text-3xl mb-2 tracking-tight font-manrope font-semibold">7-9 Yrs</div>
<div className="text-sm text-white/60 font-manrope font-semibold">Average return on investment timeline for Austinites
        </div>
</div>
</div>
<div className="mt-12 text-center">
</div>
</div>
</section>

<section className="z-2 bg-slate-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 order-last lg:order-first">
<h2 className="md:text-4xl text-secondary text-3xl tracking-tight font-manrope font-semibold">
        Maximizing Your Local Incentives
      </h2>
<div className="text-base font-light text-slate-500 space-y-6">
<p className="font-manrope font-semibold">
          Beyond the , Texas offers some
          amazing perks. Did you know the state offers a
          ? Your home value goes up
          when you add solar, but you won't pay extra property taxes on that added value.
        </p>
<p className="font-manrope font-semibold">
          Plus, navigating the  and
          net metering paperwork can be confusing. Our local team handles the entire permit and application process for
          you step-by-step.
        </p>
</div>
<button className="transition-colors hover:bg-amber-600 text-sm text-slate-950 bg-amber-500 rounded-full mt-4 pt-3 pr-8 pb-3 pl-8 font-manrope font-semibold">
                    See how to claim incentives
                </button>
</div>
<div className="relative order-first lg:order-last">
<div className="rounded-3xl overflow-hidden h-[400px] w-full">
<img alt="Austin Neighborhood" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1613665813446-82a78c468a1d?q=80&amp;w=2058&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>


<section className="bg-zinc-50 pt-24 pb-24 bg-[linear-gradient(to_right,#e5e7eb_1px,transparent_1px),linear-gradient(to_bottom,#e5e7eb_1px,transparent_1px)] bg-[size:24px_24px]">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="md:text-4xl text-secondary text-3xl tracking-tight font-manrope mb-6 font-semibold">Austin Solar
        Incentives</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="group overflow-hidden aspect-[4/3] rounded-3xl relative">
<img alt="Austin Skyline" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1673140511598-2f23d9fec5dd?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="text-white pt-8 pr-8 pb-8 pl-8 absolute bottom-0 left-0">
<div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<iconify-icon className="text-lg text-white" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="text-3xl tracking-tight font-manrope font-semibold">Austin Energy solar rebate program</div>
<div className="text-sm text-white/70 mt-1 font-manrope font-semibold">Current amounts and eligibility</div>
</div>
</div>

<div className="group overflow-hidden aspect-[4/3] rounded-3xl relative">
<img alt="Solar Panels Close Up" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1668097613572-40b7c11c8727?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<iconify-icon className="text-lg text-white" icon="solar:home-linear"></iconify-icon>
</div>
<div className="text-3xl tracking-tight font-manrope font-semibold">Federal Investment Tax Credit </div>
<div className="text-sm text-white/70 mt-1 font-manrope font-semibold">What it is, who qualifies, how to claim
          </div>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden aspect-[4/3]">
<img alt="Happy Family" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1604177420682-0c840feb01de?w=800&amp;q=80"/>
<div className="bg-gradient-to-t from-secondary/90 via-secondary/20 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
<div className="absolute bottom-0 left-0 p-8 text-white">
<div className="bg-white/20 w-10 h-10 rounded-full flex items-center justify-center backdrop-blur-sm mb-4">
<iconify-icon className="text-lg text-white" icon="solar:wad-of-money-linear"></iconify-icon>
</div>
<div className="text-3xl tracking-tight font-manrope font-semibold">Net metering in Austin</div>
<div className="text-sm text-white/70 mt-1 font-manrope font-semibold">How credits work on your bill</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gradient-to-r from-[#bec3cb]/10 via-blue-500/0 to-[#f7be22]/10 pt-24 pb-24 relative" id="estimate">
<div className="pointer-events-none overflow-hidden opacity-5 w-1/2 h-full absolute top-0 right-0">

<div className="w-[800px] h-[800px] border border-secondary rounded-full absolute -right-20 top-20"></div>
<div className="w-[600px] h-[600px] border border-secondary rounded-full absolute -right-10 top-40"></div>
</div>
<div className="grid lg:grid-cols-2 gap-16 flex flex-col h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 justify-center">

<div className="grid grid-cols-1 place-content-center space-y-12">
<div className="">
<h2 className="text-secondary md:text-6xl serif text-3xl font-medium tracking-tight mb-4">Talk to an<br/> Austin Solar Pro</h2>
<p className="text-base font-semibold text-slate-500 font-manrope max-w-md">Have questions about your specific home? Want to know if solar makes sense for your situation? Get a free, no-pressure consultation with a local solar expert.</p>
</div>
</div>


<div className="md:p-12 z-10 bg-white border-neutral-300 border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-sm">
<form className="space-y-6">
<div className="">
<label className="block text-xs text-slate-500 mb-2 font-manrope font-semibold">Full Name</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="e.g. Jane Doe" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 gap-x-6 gap-y-6">
<div className="">
<label className="block text-xs text-slate-500 mb-2 font-manrope font-semibold">Email Address</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="jane@example.com" type="email"/>
</div>
<div className="">
<label className="block text-xs text-slate-500 mb-2 font-manrope font-semibold">Phone Number</label>
<input className="w-full border-b border-slate-200 py-2 text-slate-900 focus:outline-none focus:border-primary transition-colors placeholder:text-slate-300 text-sm" placeholder="(512) 000-0000" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 gap-x-6 gap-y-6">
</div>
<div className="flex gap-3 pt-2 gap-x-3 gap-y-3 items-start">
<input className="mt-1 w-4 h-4 rounded border-slate-300 text-primary focus:ring-primary accent-primary" id="privacy" type="checkbox"/>
<label className="text-xs font-semibold text-slate-500 font-manrope" htmlFor="privacy">I agree to be contacted by Austin Solar Pros regarding my inquiry. We will never share your information.</label>
</div><button className="transition-colors hover:bg-amber-600 text-sm font-semibold text-slate-950 font-manrope bg-yellow-500 w-full rounded-xl mt-4 pt-4 pb-4 shadow-sm" type="button">Get My Free Consultation</button>
</form>
</div>
</div>
</section>

<footer className="text-xs font-medium text-white/60 bg-teal-950 pt-8 pb-8">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex flex-col md:flex-row gap-2 md:gap-4 text-center md:text-left">
<span className="font-manrope font-semibold">Copyright © Austin Solar Pros 2025</span>
<span className="hidden md:inline text-white/20 font-manrope font-semibold">|</span>
<span className="font-manrope font-semibold">Designed for Austin, TX</span>
</div>
<div className="flex space-x-6">
<a className="hover:text-white transition-colors font-manrope font-semibold" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-manrope font-semibold" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors font-manrope font-semibold" href="#">Licenses</a>
</div>
</div>
</footer>

    </>
  );
}
