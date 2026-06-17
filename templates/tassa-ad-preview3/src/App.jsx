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
      

<nav className="w-full pt-8 pb-4 px-6 md:px-12 max-w-screen-2xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">

<div className="bg-[#C86536] p-1.5 rounded-lg text-white">
<i className="w-5 h-5" data-lucide="coffee" strokeWidth="1.5"></i>
</div>
<span className="text-xl font-medium tracking-tight text-[#4A3B32]">tassa.ad</span>
</div>
<div className="hidden md:flex items-center gap-8 text-base font-normal text-[#5D4E46]">
<a className="flex items-center gap-1 hover:text-[#C86536] transition-colors" href="#">Cafeteries <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="flex items-center gap-1 hover:text-[#C86536] transition-colors" href="#">Índex del Cafè <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
<a className="hover:text-[#C86536] transition-colors" href="#">Ofertes de Treball</a>
<a className="flex items-center gap-1 hover:text-[#C86536] transition-colors" href="#">Blog <i className="w-4 h-4" data-lucide="chevron-down" strokeWidth="1.5"></i></a>
</div>
<a className="bg-[#C05D32] hover:bg-[#A84F28] text-white text-sm font-medium px-5 py-2.5 rounded-lg shadow-sm transition-all shadow-[#C05D32]/20" href="#">
            Suggereix un local
        </a>
</nav>

<header className="relative max-w-screen-2xl mx-auto px-6 md:px-12 py-12 lg:py-20 grid lg:grid-cols-2 gap-12 items-center">

<div className="relative w-full aspect-[4/3] lg:aspect-square rounded-2xl overflow-hidden shadow-xl shadow-[#4A3B32]/5 group">
<img alt="Coffee cup with view" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent"></div>
</div>

<div className="flex flex-col gap-8">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-[#3E2C24] leading-[1.1]">
                Descobreix les millors <br/> cafeteries d'Andorra
            </h1>
<p className="text-xl text-[#786358] font-light max-w-lg leading-relaxed">
                Troba el lloc ideal per prendre un cafè o treballar.
            </p>

<div className="flex flex-wrap gap-3">
<button className="bg-white border border-[#E6DDD6] px-4 py-2 rounded-lg text-base text-[#5D4E46] flex items-center gap-2 hover:border-[#C05D32] hover:text-[#C05D32] transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="wifi" strokeWidth="1.5"></i> Amb WiFi
                </button>
<button className="bg-white border border-[#E6DDD6] px-4 py-2 rounded-lg text-base text-[#5D4E46] flex items-center gap-2 hover:border-[#C05D32] hover:text-[#C05D32] transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i> Terrassa
                </button>
<button className="bg-white border border-[#E6DDD6] px-4 py-2 rounded-lg text-base text-[#5D4E46] flex items-center gap-2 hover:border-[#C05D32] hover:text-[#C05D32] transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="monitor" strokeWidth="1.5"></i> Specialty
                </button>
<button className="bg-white border border-[#E6DDD6] px-4 py-2 rounded-lg text-base text-[#5D4E46] flex items-center gap-2 hover:border-[#C05D32] hover:text-[#C05D32] transition-colors shadow-sm">
<i className="w-4 h-4" data-lucide="coins" strokeWidth="1.5"></i> Economic
                </button>
</div>

<div className="bg-white p-2 rounded-xl shadow-md shadow-[#4A3B32]/5 border border-[#E6DDD6] flex flex-col sm:flex-row items-center gap-2 max-w-xl">
<div className="relative w-full sm:w-1/2">
<select className="w-full bg-[#F9F4EF] appearance-none pl-4 pr-10 py-3 rounded-lg text-[#4A3B32] font-medium outline-none focus:ring-1 focus:ring-[#C05D32]/50 border-transparent cursor-pointer">
<option>Escaldes-Engordany</option>
<option>Andorra la Vella</option>
<option>Encamp</option>
</select>
<i className="absolute right-3 top-1/2 -translate-y-1/2 w-4 h-4 text-[#786358]" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="w-px h-8 bg-[#E6DDD6] hidden sm:block"></div>
<div className="relative w-full sm:flex-1 flex items-center">
<input className="w-full bg-transparent pl-2 pr-2 py-3 outline-none text-[#4A3B32] placeholder-[#9CA3AF]" placeholder="" type="text"/>
<i className="w-5 h-5 text-[#9CA3AF] mr-2" data-lucide="search" strokeWidth="1.5"></i>
</div>
<button className="w-full sm:w-auto bg-[#C05D32] hover:bg-[#A84F28] text-white px-6 py-3 rounded-lg font-medium flex items-center justify-center gap-2 transition-colors">
                    Cerca <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</header>

<section className="bg-[#F2EAE4] py-8 border-y border-[#E6DDD6]">
<div className="max-w-screen-xl mx-auto px-6 flex flex-col md:flex-row justify-around items-center gap-8 md:gap-4">
<div className="flex items-center gap-3 text-[#4A3B32] font-medium text-lg">
<i className="w-6 h-6 text-[#5D4E46]" data-lucide="wifi" strokeWidth="1.5"></i>
                Amb WiFi i endolls
            </div>
<div className="flex items-center gap-3 text-[#4A3B32] font-medium text-lg">
<i className="w-6 h-6 text-[#5D4E46]" data-lucide="users" strokeWidth="1.5"></i>
                Perfectes per treballar
            </div>
<div className="flex items-center gap-3 text-[#4A3B32] font-medium text-lg">
<i className="w-6 h-6 text-[#5D4E46]" data-lucide="coins" strokeWidth="1.5"></i>
                Preus actualitzats
            </div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 py-20">
<h2 className="text-3xl font-semibold tracking-tight text-[#3E2C24] mb-8">Índex del Cafè d'Andorra</h2>
<div className="grid lg:grid-cols-5 gap-8">

<div className="lg:col-span-2 bg-[#FDFBF9] border border-[#E6DDD6] rounded-xl p-8 relative overflow-hidden flex flex-col justify-between h-[340px] shadow-sm">

<div className="absolute bottom-0 left-0 right-0 h-40 opacity-20 pointer-events-none">
<svg className="w-full h-full fill-[#4A3B32]" preserveaspectratio="none" viewbox="0 0 100 100">
<path d="M0 100 L0 80 Q20 40 40 70 T80 60 L100 80 L100 100 Z"></path>
</svg>
</div>
<div>
<div className="text-[#786358] text-base font-medium mb-4">Preu Mitjà <span className="text-[#9CA3AF] font-normal">Març 2024</span></div>
<div className="text-7xl font-semibold text-[#3E2C24] tracking-tighter mb-4">1,75 €</div>
<div className="flex items-center gap-2 text-green-700 text-lg font-medium">
<i className="w-5 h-5" data-lucide="arrow-up" strokeWidth="2"></i>
                        +2,3% aquest mes
                    </div>
</div>
<button className="w-full bg-[#C05D32] hover:bg-[#A84F28] text-white py-3 rounded-lg font-medium text-base z-10 shadow-md shadow-[#C05D32]/10 transition-colors mt-auto">
                    Veure informe complet
                </button>
</div>

<div className="lg:col-span-3 bg-[#FDFBF9] border border-[#E6DDD6] rounded-xl p-8 h-[340px] shadow-sm flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-[#3E2C24]">Evolució del Preu del Cafè</h3>
</div>

<div className="flex-1 w-full relative pt-4">

<div className="absolute left-0 top-0 bottom-8 w-12 flex flex-col justify-between text-xs text-[#9CA3AF] text-right pr-2">
<span>1,76 €</span>
<span>1,55 €</span>
<span>1,55 €</span>
</div>

<div className="absolute left-12 right-0 top-2 bottom-8 border-l border-b border-[#E6DDD6]">

<div className="absolute top-1/3 w-full border-t border-dashed border-[#E6DDD6]/60"></div>
<div className="absolute top-2/3 w-full border-t border-dashed border-[#E6DDD6]/60"></div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none">
<defs>
<lineargradient id="chartGradient" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C05D32" stop-opacity="0.1"></stop>
<stop offset="100%" stop-color="#C05D32" stop-opacity="0"></stop>
</lineargradient>
</defs>
<path d="M0,80 L50,60 L100,70 L200,30 L250,40 L300,20 L350,15 L400,5" fill="none" stroke="#C05D32" strokeWidth="2" vector-effect="non-scaling-stroke"></path>
<path d="M0,80 L50,60 L100,70 L200,30 L250,40 L300,20 L350,15 L400,5 V150 H0 Z" fill="url(#chartGradient)" opacity="0.5" vector-effect="non-scaling-stroke"></path>

<circle cx="0%" cy="75%" fill="#C05D32" r="4"></circle>
<circle cx="14%" cy="65%" fill="#C05D32" r="4"></circle>
<circle cx="28%" cy="72%" fill="#C05D32" r="4"></circle>
<circle cx="42%" cy="40%" fill="#C05D32" r="4"></circle>
<circle cx="56%" cy="48%" fill="#C05D32" r="4"></circle>
<circle cx="70%" cy="28%" fill="#C05D32" r="4"></circle>
<circle cx="84%" cy="22%" fill="#C05D32" r="4"></circle>
<circle cx="100%" cy="10%" fill="#C05D32" r="4"></circle>
</svg>

<div className="absolute -right-2 top-[0%] transform -translate-y-full pb-2 text-sm font-bold text-[#3E2C24]">1,75 €</div>
</div>

<div className="absolute left-12 right-0 bottom-0 flex justify-between text-xs text-[#9CA3AF] pt-2">
<span>Sep</span>
<span>Oct</span>
<span>Nov</span>
<span>Dec</span>
<span>Gen</span>
<span>Mar</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<p className="text-xl text-[#5D4E46]">Mitjors llocs per treballar amb una tassa de cafè <span className="text-[#C05D32]">❤</span></p>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 pb-24">
<h2 className="text-3xl font-semibold tracking-tight text-[#3E2C24] mb-10">Cafeteries Destacades</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-[#FDFBF9] rounded-xl overflow-hidden border border-[#E6DDD6] hover:shadow-lg transition-shadow duration-300 group">
<div className="h-56 overflow-hidden">
<img alt="Cafe interior" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1497935586351-b67a49e012bf?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-xl font-semibold text-[#3E2C24]">Cafè Central</h3>
<span className="text-2xl font-semibold text-[#3E2C24]">1,40 €</span>
</div>
<p className="text-[#786358] text-base font-light mb-6">Ideal per treballar</p>
<button className="w-full py-3 bg-[#F5EFEA] hover:bg-[#EBE2DB] text-[#5D4E46] font-medium rounded-lg border border-[#E6DDD6] transition-colors">
                        Veure el mapa
                    </button>
</div>
</div>

<div className="bg-[#FDFBF9] rounded-xl overflow-hidden border border-[#E6DDD6] hover:shadow-lg transition-shadow duration-300 group">
<div className="h-56 overflow-hidden">
<img alt="View from cafe" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1554118811-1e0d58224f24?q=80&amp;w=2047&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-xl font-semibold text-[#3E2C24]">BonDia Cafè</h3>
<span className="text-2xl font-semibold text-[#3E2C24]">1,60 €</span>
</div>
<p className="text-[#786358] text-base font-light mb-6">Terrassa amb vistes</p>
<button className="w-full py-3 bg-[#F5EFEA] hover:bg-[#EBE2DB] text-[#5D4E46] font-medium rounded-lg border border-[#E6DDD6] transition-colors">
                        Veure el mapa
                    </button>
</div>
</div>

<div className="bg-[#FDFBF9] rounded-xl overflow-hidden border border-[#E6DDD6] hover:shadow-lg transition-shadow duration-300 group">
<div className="h-56 overflow-hidden">
<img alt="Barista pouring coffee" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1514432324607-a09d9b4aefdd?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-6">
<div className="flex justify-between items-baseline mb-1">
<h3 className="text-xl font-semibold text-[#3E2C24]">Espresso 42</h3>
<span className="text-2xl font-semibold text-[#3E2C24]">1,80 €</span>
</div>
<p className="text-[#786358] text-base font-light mb-6">Especialitat "Third Wave"</p>
<button className="w-full py-3 bg-[#F5EFEA] hover:bg-[#EBE2DB] text-[#5D4E46] font-medium rounded-lg border border-[#E6DDD6] transition-colors">
                        Veure el mapa
                    </button>
</div>
</div>
</div>
</section>

<section className="max-w-screen-xl mx-auto px-6 pb-20">
<div className="relative w-full rounded-2xl overflow-hidden h-64 shadow-xl">

<div className="absolute inset-0">
<img alt="Coffee beans texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511920170033-f8396924c348?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-[#C05D32]/90 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-[#C05D32] to-transparent opacity-90"></div>
</div>

<div className="relative h-full flex flex-col items-center justify-center text-center px-4">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-8 shadow-sm">Publica les teves ofertes de feina en hostaleria</h2>
<button className="bg-[#F9F4EF] hover:bg-white text-[#C05D32] px-8 py-3 rounded-lg font-semibold text-lg shadow-lg transition-all">
                    Publica la teva oferta
                </button>
</div>

<div className="absolute -bottom-8 -right-8 w-48 h-48 rounded-full bg-white shadow-2xl flex items-center justify-center p-2 hidden md:flex">
<div className="w-full h-full rounded-full overflow-hidden border-4 border-[#F2EAE4]">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1509042239860-f550ce710b93?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>


    </>
  );
}
