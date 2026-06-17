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
      

<nav bis_size='{"x":0,"y":0,"w":1440,"h":73,"abs_x":480,"abs_y":43}' className="absolute top-0 w-full z-50 text-white border-b border-white/10 bg-zinc-950/10 backdrop-blur-md">
<div bis_size='{"x":80,"y":0,"w":1280,"h":72,"abs_x":560,"abs_y":43}' className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<div bis_size='{"x":104,"y":22,"w":95,"h":28,"abs_x":584,"abs_y":65}' className="flex items-center gap-2 cursor-pointer group">
<iconify-icon bis_size='{"x":104,"y":24,"w":24,"h":24,"abs_x":584,"abs_y":67}' className="text-2xl text-emerald-400 group-hover:scale-110 transition-transform" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
<span bis_size='{"x":136,"y":22,"w":63,"h":28,"abs_x":616,"abs_y":65}' className="text-xl font-semibold tracking-tight text-white uppercase">Cetro</span>
</div>

<div bis_size='{"x":396,"y":26,"w":392,"h":20,"abs_x":876,"abs_y":69}' className="hidden lg:flex items-center gap-8 text-sm font-medium">
<a bis_size='{"x":396,"y":26,"w":39,"h":20,"abs_x":876,"abs_y":69}' className="text-white hover:text-emerald-400 transition-colors" href="#">Home</a>
<a bis_size='{"x":467,"y":26,"w":56,"h":20,"abs_x":947,"abs_y":69}' className="text-zinc-300 hover:text-emerald-400 transition-colors" href="#">Services</a>
<a bis_size='{"x":555,"y":26,"w":54,"h":20,"abs_x":1035,"abs_y":69}' className="text-zinc-300 hover:text-emerald-400 transition-colors" href="#">Projects</a>
<a bis_size='{"x":642,"y":26,"w":40,"h":20,"abs_x":1122,"abs_y":69}' className="text-zinc-300 hover:text-emerald-400 transition-colors" href="#">Pages</a>
<a bis_size='{"x":714,"y":26,"w":73,"h":20,"abs_x":1194,"abs_y":69}' className="text-zinc-300 hover:text-emerald-400 transition-colors" href="#">Contact Us</a>
</div>

<div bis_size='{"x":984,"y":16,"w":351,"h":40,"abs_x":1464,"abs_y":59}' className="hidden lg:flex items-center gap-6">
<div bis_size='{"x":984,"y":16,"w":182,"h":40,"abs_x":1464,"abs_y":59}' className="flex items-center gap-3">
<div bis_size='{"x":984,"y":16,"w":40,"h":40,"abs_x":1464,"abs_y":59}' className="w-10 h-10 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
<iconify-icon bis_size='{"x":994,"y":26,"w":20,"h":20,"abs_x":1474,"abs_y":69}' className="text-xl text-emerald-400" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":1036,"y":18,"w":130,"h":36,"abs_x":1516,"abs_y":61}' className="flex flex-col">
<span bis_size='{"x":1036,"y":18,"w":130,"h":16,"abs_x":1516,"abs_y":61}' className="text-xs text-zinc-400 font-medium">Need Help?</span>
<span bis_size='{"x":1036,"y":34,"w":130,"h":20,"abs_x":1516,"abs_y":77}' className="text-sm font-semibold tracking-tight text-white">(+480) 123 678 900</span>
</div>
</div>
<button bis_size='{"x":1191,"y":16,"w":144,"h":40,"abs_x":1671,"abs_y":59}' className="bg-white text-zinc-900 hover:bg-emerald-400 hover:text-zinc-900 px-5 py-2.5 rounded-full flex items-center gap-2 transition-all text-sm font-semibold tracking-tight">
                    Get A Quote
                    <iconify-icon bis_size='{"x":1298,"y":27,"w":18,"h":18,"abs_x":1778,"abs_y":70}' className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<button bis_size='{"x":0,"y":401,"w":0,"h":0,"abs_x":480,"abs_y":444}' className="lg:hidden text-white flex items-center justify-center">
<iconify-icon bis_size='{"x":0,"y":401,"w":0,"h":0,"abs_x":480,"abs_y":444}' className="text-3xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1440,"h":777,"abs_x":480,"abs_y":43}' className="relative pt-32 pb-20 md:pt-48 md:pb-40 flex items-center min-h-[85vh] overflow-hidden bg-zinc-950">

<div bis_size='{"x":0,"y":0,"w":1440,"h":777,"abs_x":480,"abs_y":43}' className="absolute inset-0 z-0 opacity-40 mix-blend-luminosity">
<img alt="Cleaning team" bis_size='{"x":-35,"y":-19,"w":1512,"h":816,"abs_x":445,"abs_y":24}' className="w-full h-full object-cover object-center scale-105" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":0,"y":0,"w":1440,"h":777,"abs_x":480,"abs_y":43}' className="bg-gradient-to-b from-transparent via-zinc-950/80 to-zinc-950 z-0 absolute top-0 right-0 bottom-0 left-0"></div>
<div bis_size='{"x":420,"y":88,"w":600,"h":600,"abs_x":900,"abs_y":131}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/20 rounded-full blur-[120px] pointer-events-none z-0"></div>
<div bis_size='{"x":80,"y":196,"w":1280,"h":416,"abs_x":560,"abs_y":239}' className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
<div bis_size='{"x":616,"y":196,"w":206,"h":30,"abs_x":1096,"abs_y":239}' className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-emerald-300 mb-8 font-medium text-xs tracking-wide">
<iconify-icon bis_size='{"x":629,"y":204,"w":14,"h":14,"abs_x":1109,"abs_y":247}' className="text-sm" icon="solar:stars-linear" strokeWidth="1.5"></iconify-icon>
                Premium Cleaning Agency
            </div>
<h1 bis_size='{"x":272,"y":258,"w":896,"h":176,"abs_x":752,"abs_y":301}' className="text-5xl md:text-7xl lg:text-[5.5rem] font-semibold tracking-tight text-white leading-[1.05] max-w-4xl">
                Redefining the standard of <span bis_size='{"x":524,"y":338,"w":481,"h":104,"abs_x":1004,"abs_y":381}' className="text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-emerald-500">clean spaces</span>
</h1>
<p bis_size='{"x":384,"y":466,"w":672,"h":56,"abs_x":864,"abs_y":509}' className="mt-8 text-base sm:text-lg text-zinc-400 max-w-2xl leading-relaxed font-normal">
                Professional cleaning services for modern offices, homes, and commercial spaces. Meticulous attention to detail, every single time.
            </p>
<div bis_size='{"x":540,"y":562,"w":358,"h":50,"abs_x":1020,"abs_y":605}' className="mt-10 flex flex-col sm:flex-row items-center gap-4">
<button bis_size='{"x":540,"y":563,"w":196,"h":48,"abs_x":1020,"abs_y":606}' className="bg-emerald-500 hover:bg-emerald-400 text-zinc-950 px-8 py-3.5 rounded-full flex items-center gap-2 transition-all shadow-lg shadow-emerald-500/20 text-sm font-semibold tracking-tight group">
                    Explore Services
                    <iconify-icon bis_size='{"x":687,"y":578,"w":18,"h":18,"abs_x":1167,"abs_y":621}' className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button bis_size='{"x":753,"y":562,"w":145,"h":50,"abs_x":1233,"abs_y":605}' className="bg-white/5 hover:bg-white/10 text-white border border-white/10 px-8 py-3.5 rounded-full flex items-center gap-2 transition-all text-sm font-semibold tracking-tight">
                    View Pricing
                </button>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":777,"w":1440,"h":914,"abs_x":480,"abs_y":820}' className="py-24 md:py-32 bg-white relative overflow-hidden">
<div bis_size='{"x":80,"y":905,"w":1280,"h":658,"abs_x":560,"abs_y":948}' className="max-w-7xl mx-auto px-6">
<div bis_size='{"x":104,"y":905,"w":1232,"h":658,"abs_x":584,"abs_y":948}' className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">

<div bis_size='{"x":104,"y":905,"w":568,"h":658,"abs_x":584,"abs_y":948}' className="">
<h2 bis_size='{"x":104,"y":905,"w":568,"h":96,"abs_x":584,"abs_y":948}' className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                        Exceptional quality <br bis_size='{"x":488,"y":901,"w":0,"h":56,"abs_x":968,"abs_y":944}'/>
<span bis_size='{"x":104,"y":949,"w":453,"h":56,"abs_x":584,"abs_y":992}' className="text-zinc-400">for every environment.</span>
</h2>
<p bis_size='{"x":104,"y":1025,"w":512,"h":84,"abs_x":584,"abs_y":1068}' className="mt-6 text-base md:text-lg text-zinc-500 leading-relaxed max-w-lg font-normal">
                        We leverage eco-friendly products and meticulous processes to ensure your space isn't just visually clean, but fundamentally healthy.
                    </p>
<div bis_size='{"x":104,"y":1157,"w":568,"h":406,"abs_x":584,"abs_y":1200}' className="mt-12 space-y-6">

<div bis_size='{"x":104,"y":1157,"w":568,"h":119,"abs_x":584,"abs_y":1200}' className="flex gap-5 p-5 rounded-[1.5rem] border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div bis_size='{"x":125,"y":1178,"w":48,"h":48,"abs_x":605,"abs_y":1221}' className="flex-shrink-0 w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-700 shadow-sm group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors">
<iconify-icon bis_size='{"x":137,"y":1190,"w":24,"h":24,"abs_x":617,"abs_y":1233}' className="text-2xl" icon="solar:home-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":193,"y":1178,"w":458,"h":77,"abs_x":673,"abs_y":1221}' className="">
<h3 bis_size='{"x":193,"y":1178,"w":458,"h":28,"abs_x":673,"abs_y":1221}' className="text-lg font-semibold tracking-tight text-zinc-900">Residential Sanity</h3>
<p bis_size='{"x":193,"y":1210,"w":458,"h":45,"abs_x":673,"abs_y":1253}' className="mt-1 text-sm text-zinc-500 leading-relaxed">Apartments and houses transformed into fresh, stress-free sanctuaries.</p>
</div>
</div>

<div bis_size='{"x":104,"y":1301,"w":568,"h":119,"abs_x":584,"abs_y":1344}' className="flex gap-5 p-5 rounded-[1.5rem] border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div bis_size='{"x":125,"y":1322,"w":48,"h":48,"abs_x":605,"abs_y":1365}' className="flex-shrink-0 w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-700 shadow-sm group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors">
<iconify-icon bis_size='{"x":137,"y":1334,"w":24,"h":24,"abs_x":617,"abs_y":1377}' className="text-2xl" icon="solar:case-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":193,"y":1322,"w":458,"h":77,"abs_x":673,"abs_y":1365}' className="">
<h3 bis_size='{"x":193,"y":1322,"w":458,"h":28,"abs_x":673,"abs_y":1365}' className="text-lg font-semibold tracking-tight text-zinc-900">Corporate Spaces</h3>
<p bis_size='{"x":193,"y":1354,"w":458,"h":45,"abs_x":673,"abs_y":1397}' className="mt-1 text-sm text-zinc-500 leading-relaxed">Maintain a healthy workspace that supports productivity and professionalism.</p>
</div>
</div>

<div bis_size='{"x":104,"y":1444,"w":568,"h":119,"abs_x":584,"abs_y":1487}' className="flex gap-5 p-5 rounded-[1.5rem] border border-zinc-100 bg-zinc-50/50 hover:bg-zinc-50 transition-colors group">
<div bis_size='{"x":125,"y":1465,"w":48,"h":48,"abs_x":605,"abs_y":1508}' className="flex-shrink-0 w-12 h-12 bg-white border border-zinc-200 rounded-xl flex items-center justify-center text-zinc-700 shadow-sm group-hover:border-emerald-200 group-hover:text-emerald-500 transition-colors">
<iconify-icon bis_size='{"x":137,"y":1477,"w":24,"h":24,"abs_x":617,"abs_y":1520}' className="text-2xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":193,"y":1465,"w":458,"h":77,"abs_x":673,"abs_y":1508}' className="">
<h3 bis_size='{"x":193,"y":1465,"w":458,"h":28,"abs_x":673,"abs_y":1508}' className="text-lg font-semibold tracking-tight text-zinc-900">Retail &amp; Studios</h3>
<p bis_size='{"x":193,"y":1497,"w":458,"h":45,"abs_x":673,"abs_y":1540}' className="mt-1 text-sm text-zinc-500 leading-relaxed">Spotless showrooms that make a perfect first impression on your customers.</p>
</div>
</div>
</div>
</div>

<div bis_size='{"x":768,"y":951,"w":568,"h":568,"abs_x":1248,"abs_y":994}' className="relative w-full aspect-square md:aspect-[4/3] lg:aspect-square">
<div bis_size='{"x":768,"y":951,"w":567,"h":567,"abs_x":1248,"abs_y":994}' className="absolute inset-0 bg-zinc-100 rounded-[2.5rem] transform rotate-3 scale-[0.95] opacity-50"></div>
<img alt="Cleaning supplies" bis_size='{"x":768,"y":951,"w":568,"h":568,"abs_x":1248,"abs_y":994}' className="absolute inset-0 w-full h-full object-cover rounded-[2.5rem] shadow-xl shadow-zinc-200/50" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div bis_size='{"x":720,"y":1397,"w":255,"h":90,"abs_x":1200,"abs_y":1440}' className="absolute -bottom-6 -left-6 md:bottom-8 md:-left-12 bg-white/90 backdrop-blur-md border border-white/40 p-5 rounded-3xl shadow-2xl shadow-zinc-900/10 flex items-center gap-4">
<div bis_size='{"x":741,"y":1418,"w":48,"h":48,"abs_x":1221,"abs_y":1461}' className="w-12 h-12 bg-emerald-500 rounded-full flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":753,"y":1430,"w":24,"h":24,"abs_x":1233,"abs_y":1473}' className="text-2xl" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":805,"y":1424,"w":149,"h":36,"abs_x":1285,"abs_y":1467}'>
<p bis_size='{"x":805,"y":1424,"w":149,"h":20,"abs_x":1285,"abs_y":1467}' className="text-sm font-semibold tracking-tight text-zinc-900">100% Guaranteed</p>
<p bis_size='{"x":805,"y":1444,"w":149,"h":16,"abs_x":1285,"abs_y":1487}' className="text-xs text-zinc-500">Satisfaction in every detail</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1692,"w":1440,"h":1216,"abs_x":480,"abs_y":1735}' className="py-24 md:py-32 bg-zinc-50 border-t border-zinc-200/50 relative">
<div bis_size='{"x":80,"y":1821,"w":1280,"h":959,"abs_x":560,"abs_y":1864}' className="max-w-7xl mx-auto px-6">

<div bis_size='{"x":104,"y":1821,"w":1232,"h":96,"abs_x":584,"abs_y":1864}' className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-16">
<div bis_size='{"x":104,"y":1821,"w":429,"h":96,"abs_x":584,"abs_y":1864}' className="max-w-2xl">
<h2 bis_size='{"x":104,"y":1821,"w":429,"h":96,"abs_x":584,"abs_y":1864}' className="text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                        Specialized solutions <br bis_size='{"x":533,"y":1817,"w":0,"h":56,"abs_x":1013,"abs_y":1860}'/>
<span bis_size='{"x":104,"y":1865,"w":398,"h":56,"abs_x":584,"abs_y":1908}' className="text-emerald-500">for your every need.</span>
</h2>
</div>
<button bis_size='{"x":1150,"y":1875,"w":185,"h":42,"abs_x":1630,"abs_y":1918}' className="flex-shrink-0 bg-white border border-zinc-200 hover:border-zinc-300 text-zinc-900 px-6 py-2.5 rounded-full flex items-center gap-2 transition-all text-sm font-semibold tracking-tight group shadow-sm">
                    View All Services
                    <iconify-icon bis_size='{"x":1293,"y":1887,"w":18,"h":18,"abs_x":1773,"abs_y":1930}' className="text-lg group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div bis_size='{"x":104,"y":1981,"w":1232,"h":799,"abs_x":584,"abs_y":2024}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 lg:grid-rows-2 gap-4 lg:gap-6">

<div bis_size='{"x":104,"y":1981,"w":604,"h":799,"abs_x":584,"abs_y":2024}' className="lg:col-span-2 lg:row-span-2 rounded-[2rem] bg-white border border-zinc-200/60 shadow-sm overflow-hidden flex flex-col group relative">
<div bis_size='{"x":105,"y":1982,"w":602,"h":438,"abs_x":585,"abs_y":2025}' className="h-64 lg:h-[55%] w-full relative overflow-hidden">
<img alt="Residential Service" bis_size='{"x":105,"y":1982,"w":602,"h":438,"abs_x":585,"abs_y":2025}' className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1527515637462-cff94eecc1ac?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":105,"y":2420,"w":602,"h":358,"abs_x":585,"abs_y":2463}' className="p-8 lg:p-10 flex flex-col flex-1 justify-between bg-white relative z-10">
<div bis_size='{"x":145,"y":2460,"w":522,"h":194,"abs_x":625,"abs_y":2503}'>
<div bis_size='{"x":145,"y":2460,"w":40,"h":40,"abs_x":625,"abs_y":2503}' className="w-10 h-10 rounded-xl bg-zinc-100 flex items-center justify-center text-zinc-900 mb-6">
<iconify-icon bis_size='{"x":155,"y":2470,"w":20,"h":20,"abs_x":635,"abs_y":2513}' className="text-xl" icon="solar:home-smile-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 bis_size='{"x":145,"y":2524,"w":522,"h":36,"abs_x":625,"abs_y":2567}' className="text-3xl font-semibold tracking-tight text-zinc-900">Residential Services</h3>
<p bis_size='{"x":145,"y":2576,"w":448,"h":78,"abs_x":625,"abs_y":2619}' className="mt-4 text-base text-zinc-500 leading-relaxed max-w-md font-normal">Our residential cleaning services are uniquely tailored to meet the exacting standards of modern homes, ensuring a flawless living environment.</p>
</div>
<div bis_size='{"x":145,"y":2699,"w":522,"h":40,"abs_x":625,"abs_y":2742}' className="mt-8 flex items-center justify-between cursor-pointer">
<span bis_size='{"x":145,"y":2709,"w":118,"h":20,"abs_x":625,"abs_y":2752}' className="text-sm font-semibold tracking-tight text-emerald-600 group-hover:text-emerald-700 transition-colors">Explore residential</span>
<div bis_size='{"x":627,"y":2699,"w":40,"h":40,"abs_x":1107,"abs_y":2742}' className="w-10 h-10 rounded-full bg-zinc-50 border border-zinc-100 flex items-center justify-center group-hover:bg-emerald-500 group-hover:border-emerald-500 group-hover:text-white transition-all text-zinc-400">
<iconify-icon bis_size='{"x":637,"y":2709,"w":20,"h":20,"abs_x":1117,"abs_y":2752}' className="text-xl" icon="solar:arrow-right-up-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
</div>

<div bis_size='{"x":732,"y":1981,"w":290,"h":799,"abs_x":1212,"abs_y":2024}' className="lg:col-span-1 lg:row-span-2 rounded-[2rem] relative overflow-hidden group shadow-sm min-h-[400px] lg:min-h-0 border border-zinc-200/60">
<img alt="Specialized Cleaning" bis_size='{"x":733,"y":1982,"w":288,"h":797,"abs_x":1213,"abs_y":2025}' className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":733,"y":1982,"w":288,"h":797,"abs_x":1213,"abs_y":2025}' className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-900/40 to-transparent opacity-90"></div>
<div bis_size='{"x":733,"y":1982,"w":288,"h":797,"abs_x":1213,"abs_y":2025}' className="absolute inset-x-0 bottom-0 p-6 lg:p-8 flex flex-col justify-end h-full">
<div bis_size='{"x":765,"y":2022,"w":40,"h":40,"abs_x":1245,"abs_y":2065}' className="w-10 h-10 rounded-xl bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center text-white mb-auto mt-2">
<iconify-icon bis_size='{"x":775,"y":2032,"w":20,"h":20,"abs_x":1255,"abs_y":2075}' className="text-xl" icon="solar:magic-stick-3-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 bis_size='{"x":765,"y":2595,"w":224,"h":32,"abs_x":1245,"abs_y":2638}' className="text-2xl font-semibold tracking-tight text-white mt-8">Specialized Focus</h3>
<p bis_size='{"x":765,"y":2639,"w":224,"h":68,"abs_x":1245,"abs_y":2682}' className="mt-3 text-sm text-zinc-300 leading-relaxed font-normal">Professionals who take pride in executing detailed work that exceeds standard expectations.</p>
<div bis_size='{"x":765,"y":2731,"w":224,"h":16,"abs_x":1245,"abs_y":2774}' className="mt-6 flex items-center gap-2 text-white text-xs font-semibold tracking-wide uppercase cursor-pointer group/link">
                            Learn more
                            <iconify-icon bis_size='{"x":855,"y":2732,"w":14,"h":14,"abs_x":1335,"abs_y":2775}' className="text-sm group-hover/link:translate-x-1 transition-transform" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>

<div bis_size='{"x":1046,"y":1981,"w":290,"h":387,"abs_x":1526,"abs_y":2024}' className="lg:col-span-1 lg:row-span-1 rounded-[2rem] bg-white border border-zinc-200/60 p-6 flex flex-col justify-between group shadow-sm hover:shadow-md transition-shadow">
<div bis_size='{"x":1071,"y":2006,"w":40,"h":40,"abs_x":1551,"abs_y":2049}' className="w-10 h-10 rounded-xl bg-emerald-50 border border-emerald-100 flex items-center justify-center text-emerald-500 mb-6 group-hover:scale-110 transition-transform origin-left">
<iconify-icon bis_size='{"x":1081,"y":2016,"w":20,"h":20,"abs_x":1561,"abs_y":2059}' className="text-xl" icon="solar:star-fall-minimalistic-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":1071,"y":2262,"w":240,"h":81,"abs_x":1551,"abs_y":2305}'>
<h3 bis_size='{"x":1071,"y":2262,"w":240,"h":28,"abs_x":1551,"abs_y":2305}' className="text-xl font-semibold tracking-tight text-zinc-900">Skilled Service</h3>
<p bis_size='{"x":1071,"y":2298,"w":240,"h":45,"abs_x":1551,"abs_y":2341}' className="mt-2 text-sm text-zinc-500 leading-relaxed font-normal">A thorough, deep-cleaning approach for spaces that need a total refresh.</p>
</div>
</div>

<div bis_size='{"x":1046,"y":2393,"w":290,"h":387,"abs_x":1526,"abs_y":2436}' className="lg:col-span-1 lg:row-span-1 rounded-[2rem] bg-zinc-900 p-6 flex flex-col justify-between group shadow-sm relative overflow-hidden">
<div bis_size='{"x":1256,"y":2345,"w":128,"h":128,"abs_x":1736,"abs_y":2388}' className="absolute -top-12 -right-12 w-32 h-32 bg-emerald-500 rounded-full blur-[50px] opacity-40 group-hover:opacity-60 transition-opacity duration-500"></div>
<div bis_size='{"x":1070,"y":2417,"w":40,"h":40,"abs_x":1550,"abs_y":2460}' className="relative z-10 w-10 h-10 rounded-xl bg-white/10 border border-white/10 flex items-center justify-center text-white mb-6 group-hover:scale-110 transition-transform origin-left">
<iconify-icon bis_size='{"x":1080,"y":2427,"w":20,"h":20,"abs_x":1560,"abs_y":2470}' className="text-xl" icon="solar:calendar-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div bis_size='{"x":1070,"y":2675,"w":242,"h":81,"abs_x":1550,"abs_y":2718}' className="relative z-10">
<h3 bis_size='{"x":1070,"y":2675,"w":242,"h":28,"abs_x":1550,"abs_y":2718}' className="text-xl font-semibold tracking-tight text-white">Regular Care</h3>
<p bis_size='{"x":1070,"y":2711,"w":242,"h":45,"abs_x":1550,"abs_y":2754}' className="mt-2 text-sm text-zinc-400 leading-relaxed font-normal">Keep your environment immaculate on a predictable schedule.</p>
</div>
</div>
</div>
</div>
</section>

    </>
  );
}
