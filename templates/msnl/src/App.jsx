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

      // Simple Single Page Router
      function router(pageId) {
        // Hide all pages
        const pages = document.querySelectorAll('.page-content');
        pages.forEach((page) => {
          page.classList.add('hidden');
        });

        // Show selected page
        const selectedPage = document.getElementById(pageId);
        if (selectedPage) {
          selectedPage.classList.remove('hidden');
        } else {
          // Fallback for sub-pages that use templates
          if (pageId === 'service_detail') document.getElementById('service_detail').classList.remove('hidden');
        }

        // Scroll to top
        window.scrollTo(0, 0);

        // Re-render icons just in case
        lucide.createIcons();
      }

      // Initialize Home
      router('home');
    
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
      

<nav className="fixed top-0 w-full bg-white/80 backdrop-blur-md z-50 border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 lg:px-12 h-20 flex justify-between items-center">
<a className="flex items-center gap-1 group cursor-pointer" href="#" onclick="router('home')">
<div className="font-display font-bold text-xl tracking-tight italic group-hover:opacity-80 transition">
            MARKETING
          </div>
<div className="text-[#ff5d2b]">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<div className="font-display font-bold text-xl tracking-tight text-[#ff5d2b] italic group-hover:opacity-80 transition">
            SHIFT
          </div>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium text-zinc-500">
<button className="nav-link hover:text-black transition" onclick="router('cases')">
            Cases
          </button>
<button className="nav-link hover:text-black transition" onclick="router('services')">
            Diensten
          </button>
<button className="nav-link hover:text-black transition" onclick="router('about')">
            Over ons
          </button>
<button className="nav-link hover:text-black transition" onclick="router('blog')">
            Tips
          </button>
<button className="nav-link hover:text-black transition" onclick="router('vacancies')">
            Vacatures
          </button>
</div>
<div className="flex items-center gap-4">
<button className="bg-black text-white px-5 py-2.5 rounded-full text-xs font-bold uppercase tracking-wider hover:bg-zinc-800 transition" onclick="router('contact')">
            Contact
          </button>
</div>
</div>
</nav>

<div className="pt-20 flex-grow" id="app">



<main className="page-content" id="home">

<section className="bg-[#ffece5] py-20 px-6 lg:px-12 rounded-b-[3rem] relative overflow-hidden">
<div className="max-w-4xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 bg-white/60 backdrop-blur-sm px-4 py-1.5 rounded-full border border-white/50 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-bold uppercase tracking-wider text-zinc-600">
                Nieuw tijdperk marketing
              </span>
</div>
<h1 className="font-display font-extrabold text-5xl md:text-7xl lg:text-8xl tracking-tight uppercase leading-[0.9] mb-8">
              Garantie op
              <br/>
<span className="text-[#ff5d2b]">Resultaat</span>
</h1>
<p className="text-xl text-zinc-700 max-w-2xl mx-auto leading-relaxed font-medium mb-10">
              Wij combineren persoonlijk contact met AI-kracht. Binnen 60 dagen betere resultaten uit je website, of wij werken gratis.
            </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition flex items-center justify-center gap-2" onclick="router('contact')">
                Start de 60-dagen challenge
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white text-black px-8 py-4 rounded-full font-bold hover:bg-zinc-50 transition border border-zinc-200" onclick="router('services')">
                Bekijk onze diensten
              </button>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="bg-zinc-900 text-white rounded-[2rem] p-8 lg:p-12 shadow-2xl overflow-hidden relative">
<div className="absolute top-0 right-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-16 relative z-10">
<div>
<h2 className="font-display font-bold text-3xl md:text-5xl mb-6">
                  Reken je
                  <br/>
<span className="text-[#ff5d2b]">winst</span>
                  uit.
                </h2>
<p className="text-zinc-400 mb-8 leading-relaxed">
                  Veel bedrijven laten geld liggen. Vul je cijfers in en zie direct wat optimalisatie (CRO) en slimme strategie voor jouw bottom-line kan betekenen.
                </p>
<div className="space-y-6">

<div>
<label className="text-xs font-bold uppercase text-zinc-500 mb-2 block">
                      1. Type Business
                    </label>
<div className="flex gap-4">
<button className="flex-1 bg-zinc-800 border-2 border-[#ff5d2b] p-3 rounded-lg text-sm font-semibold flex items-center justify-center gap-2">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="globe"></i>
                        Website (Leads)
                      </button>
<button className="flex-1 bg-zinc-800 border border-zinc-700 p-3 rounded-lg text-sm font-medium text-zinc-400 hover:bg-zinc-700">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
                        Webshop
                      </button>
</div>
</div>

<div className="grid grid-cols-2 gap-4">
<div>
<label className="text-xs font-bold uppercase text-zinc-500 mb-2 block">
                        Ad Spend p/m
                      </label>
<div className="bg-zinc-800 rounded px-3 py-2 text-sm border border-zinc-700">
                        € 2.500
                      </div>
</div>
<div>
<label className="text-xs font-bold uppercase text-zinc-500 mb-2 block">
                        Leads p/m
                      </label>
<div className="bg-zinc-800 rounded px-3 py-2 text-sm border border-zinc-700">
                        140
                      </div>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-xl p-6 mt-8">
<div className="flex justify-between items-end mb-2">
<span className="text-sm text-zinc-400">
                        Potentiële extra omzet (jaarbasis)
                      </span>
<span className="text-2xl font-display font-bold text-[#ff5d2b]">
                        + € 124.000
                      </span>
</div>
<div className="w-full bg-zinc-800 h-2 rounded-full overflow-hidden">
<div className="bg-[#ff5d2b] w-[65%] h-full"></div>
</div>
<div className="flex justify-between mt-4 text-xs font-medium">
<button className="text-zinc-500 hover:text-white transition">
                        15% Groei
                      </button>
<button className="text-white border-b border-[#ff5d2b] pb-0.5">
                        30% Groei
                      </button>
<button className="text-zinc-500 hover:text-white transition">
                        45% Groei
                      </button>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-center">

<div className="relative w-full aspect-square max-w-sm">
<div className="absolute inset-0 bg-gradient-to-tr from-[#ff5d2b] to-purple-600 rounded-full blur-[80px] opacity-20"></div>
<div className="relative bg-zinc-800 border border-zinc-700 rounded-2xl p-6 shadow-2xl transform rotate-3 hover:rotate-0 transition duration-500">
<div className="flex items-center justify-between mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<div className="text-[10px] text-zinc-500 font-mono">
                        DASHBOARD.EXE
                      </div>
</div>
<div className="space-y-4">
<div className="h-20 bg-zinc-900 rounded-lg w-full flex items-end p-2 gap-1">
<div className="bg-zinc-700 w-1/5 h-[40%] rounded-sm"></div>
<div className="bg-zinc-700 w-1/5 h-[60%] rounded-sm"></div>
<div className="bg-zinc-700 w-1/5 h-[50%] rounded-sm"></div>
<div className="bg-zinc-700 w-1/5 h-[80%] rounded-sm"></div>
<div className="bg-[#ff5d2b] w-1/5 h-[95%] rounded-sm shadow-[0_0_15px_rgba(255,93,43,0.5)]"></div>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-400">Conversie</span>
<span className="text-green-400 font-bold">+ 32.5%</span>
</div>
<div className="h-px bg-zinc-700 w-full"></div>
<div className="flex justify-between items-center text-sm">
<span className="text-zinc-400">CPA</span>
<span className="text-green-400 font-bold">- 18.2%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-4xl mb-4">
                Onze Expertise
              </h2>
<p className="text-zinc-500">
                Alles wat je nodig hebt om te schalen.
              </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="cursor-pointer group border border-zinc-100 p-8 rounded-3xl bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition duration-300" onclick="router('service_detail')">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="layout"></i>
</div>
<h3 className="font-bold text-xl mb-2">Websites &amp; Shops</h3>
<p className="text-sm text-zinc-500 mb-4">
                  Conversie-gedreven design dat niet alleen mooi is, maar verkoopt.
                </p>
<span className="text-xs font-bold underline decoration-[#ff5d2b] underline-offset-4">
                  Ontdek meer
                </span>
</div>
<div className="cursor-pointer group border border-zinc-100 p-8 rounded-3xl bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition duration-300" onclick="router('service_detail')">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="trending-up"></i>
</div>
<h3 className="font-bold text-xl mb-2">CRO &amp; Strategie</h3>
<p className="text-sm text-zinc-500 mb-4">
                  Data-gedreven optimalisaties om meer uit je huidige verkeer te halen.
                </p>
<span className="text-xs font-bold underline decoration-[#ff5d2b] underline-offset-4">
                  Ontdek meer
                </span>
</div>
<div className="cursor-pointer group border border-zinc-100 p-8 rounded-3xl bg-zinc-50 hover:bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition duration-300" onclick="router('service_detail')">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 group-hover:scale-110 transition text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="font-bold text-xl mb-2">AI &amp; Automation</h3>
<p className="text-sm text-zinc-500 mb-4">
                  Bespaar tijd en geld door slimme automatiseringen en AI tools.
                </p>
<span className="text-xs font-bold underline decoration-[#ff5d2b] underline-offset-4">
                  Ontdek meer
                </span>
</div>
</div>
</div>
</section>

<section className="bg-[#ff5d2b] text-white py-20 px-6 lg:px-12 mx-4 lg:mx-8 rounded-[2.5rem] relative overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-12 relative z-10">
<div className="md:w-1/2">
<div className="bg-white/20 backdrop-blur-md inline-block px-3 py-1 rounded-full text-xs font-bold mb-4">
                GRATIS SCAN
              </div>
<h2 className="font-display font-bold text-4xl md:text-5xl mb-4 leading-tight">
                Waar laat jij
                <br/>
                geld liggen?
              </h2>
<p className="text-white/80 text-lg mb-8 max-w-md">
                Ontvang een gratis CRO-scan rapport. Wij analyseren je site en sturen je 3 directe verbeterpunten.
              </p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md">
<input className="flex-1 px-5 py-3 rounded-full text-zinc-900 focus:outline-none focus:ring-2 focus:ring-white" placeholder="Jouw emailadres" type="email"/>
<button className="bg-black text-white px-6 py-3 rounded-full font-bold hover:bg-zinc-900 transition">
                  Aanvragen
                </button>
</form>
</div>
<div className="md:w-1/2 flex justify-center">
<div className="bg-white text-zinc-900 p-6 rounded-xl shadow-2xl rotate-3 max-w-xs">
<div className="flex items-center gap-3 border-b border-zinc-100 pb-4 mb-4">
<div className="bg-red-100 p-2 rounded-full text-red-600">
<i className="w-5 h-5" data-lucide="alert-circle"></i>
</div>
<div>
<div className="font-bold text-sm">Checkout Probleem</div>
<div className="text-xs text-zinc-500">Hoge uitval mobiel</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="bg-green-100 p-2 rounded-full text-green-600">
<i className="w-5 h-5" data-lucide="check-circle"></i>
</div>
<div>
<div className="font-bold text-sm">Oplossing</div>
<div className="text-xs text-zinc-500">
                      Vereenvoudig formulieren
                    </div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="services">
<section className="bg-zinc-50 py-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="mb-16">
<h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
                Onze Diensten
              </h1>
<p className="text-xl text-zinc-500 max-w-2xl">
                Van strategie tot uitvoering. Wij bouwen het fundament voor jouw digitale groei.
              </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 bg-black text-white rounded-3xl p-8 relative overflow-hidden group cursor-pointer" onclick="router('service_detail')">
<div className="relative z-10 h-full flex flex-col justify-between">
<div>
<h3 className="font-display font-bold text-3xl mb-2">
                      Websites &amp; Webshops
                    </h3>
<p className="text-zinc-400">Design dat converteert.</p>
</div>
<div className="flex items-center gap-2 text-sm font-bold mt-auto group-hover:translate-x-2 transition">
                    Meer info
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</div>
</div>
<img alt="" className="absolute right-0 top-0 h-full w-1/2 object-cover opacity-50 group-hover:scale-105 transition duration-700" src="https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition" onclick="router('service_detail')">
<div className="bg-[#ff5d2b]/10 w-12 h-12 rounded-full flex items-center justify-center text-[#ff5d2b] mb-4">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<div>
<h3 className="font-bold text-xl mb-2">SEO &amp; Audit</h3>
<p className="text-sm text-zinc-500">
                    Word gevonden door klanten die al naar je zoeken.
                  </p>
</div>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition" onclick="router('service_detail')">
<div className="bg-blue-50 w-12 h-12 rounded-full flex items-center justify-center text-blue-600 mb-4">
<i className="w-6 h-6" data-lucide="mouse-pointer-2"></i>
</div>
<div>
<h3 className="font-bold text-xl mb-2">Google Ads</h3>
<p className="text-sm text-zinc-500">
                    Maximale ROI op je advertentie budget.
                  </p>
</div>
</div>

<div className="md:row-span-2 bg-[#ffece5] rounded-3xl p-8 relative overflow-hidden group cursor-pointer" onclick="router('service_detail')">
<div className="relative z-10">
<h3 className="font-display font-bold text-3xl mb-4 text-[#ff5d2b]">
                    Strategie &amp;
                    <br/>
                    CRO
                  </h3>
<p className="text-zinc-800 font-medium mb-8">
                    Stop met gissen. Start met meten en verbeteren.
                  </p>
<ul className="space-y-3">
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="check"></i>
                      Data analyse
                    </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="check"></i>
                      A/B Testing
                    </li>
<li className="flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="check"></i>
                      User research
                    </li>
</ul>
</div>
<div className="absolute bottom-0 right-0 w-32 h-32 bg-[#ff5d2b] blur-[60px] opacity-40"></div>
</div>

<div className="bg-white border border-zinc-200 rounded-3xl p-8 flex flex-col justify-between group cursor-pointer hover:shadow-lg transition" onclick="router('service_detail')">
<div className="bg-purple-50 w-12 h-12 rounded-full flex items-center justify-center text-purple-600 mb-4">
<i className="w-6 h-6" data-lucide="bot"></i>
</div>
<div>
<h3 className="font-bold text-xl mb-2">Software &amp; AI</h3>
<p className="text-sm text-zinc-500">
                    Maatwerk oplossingen die je processen automatiseren.
                  </p>
</div>
</div>
</div>

<div className="mt-16 border-t border-zinc-200 pt-16">
<h3 className="font-bold text-xl mb-8">
                Ook voor deze specialismen:
              </h3>
<div className="flex flex-wrap gap-4">
<span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium">
                  Linkbuilding
                </span>
<span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium">
                  Bedrijfsvideo's
                </span>
<span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium">
                  Branding
                </span>
<span className="px-4 py-2 bg-white border border-zinc-200 rounded-full text-sm font-medium">
                  Content Creatie
                </span>
</div>
</div>
</div>
</section>
<section className="py-24 px-6 lg:px-12 bg-white border-t border-zinc-100">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="font-display font-bold text-4xl mb-6">
                  Van audit naar
                  <br/>
<span className="text-[#ff5d2b]">market leader</span>
                  .
                </h2>
<p className="text-zinc-600 text-lg leading-relaxed mb-8">
                  Onze werkwijze is bewezen en effectief. We slaan geen stappen over, maar versnellen waar het kan.
                </p>
<button className="text-sm font-bold border-b border-black pb-1 hover:text-[#ff5d2b] hover:border-[#ff5d2b] transition" onclick="router('contact')">
                  Start een project
                </button>
</div>
<div className="space-y-8">
<div className="flex gap-6 group">
<div className="font-display font-bold text-4xl text-zinc-200 group-hover:text-[#ff5d2b] transition">
                    01
                  </div>
<div>
<h3 className="font-bold text-xl mb-2">
                      Audit &amp; Strategie
                    </h3>
<p className="text-zinc-500 text-sm">
                      We duiken in je data. Waar zitten de knelpunten? Waar ligt het goud? We maken een strijdplan.
                    </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="font-display font-bold text-4xl text-zinc-200 group-hover:text-[#ff5d2b] transition">
                    02
                  </div>
<div>
<h3 className="font-bold text-xl mb-2">Setup &amp; Bouw</h3>
<p className="text-zinc-500 text-sm">
                      Of het nu een nieuwe site is of een Ads structuur: we zetten het fundament neer volgens best practices.
                    </p>
</div>
</div>
<div className="flex gap-6 group">
<div className="font-display font-bold text-4xl text-zinc-200 group-hover:text-[#ff5d2b] transition">
                    03
                  </div>
<div>
<h3 className="font-bold text-xl mb-2">Scale &amp; Optimize</h3>
<p className="text-zinc-500 text-sm">
                      Livegang is pas het begin. We sturen bij op basis van data en schalen op wat werkt.
                    </p>
</div>
</div>
</div>
</div>
<div className="bg-zinc-50 rounded-[2.5rem] p-8 lg:p-12">
<h2 className="font-display font-bold text-3xl mb-12 text-center">
                Veelgestelde vragen
              </h2>
<div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
<div>
<h4 className="font-bold mb-2">Werken jullie met contracten?</h4>
<p className="text-sm text-zinc-500">
                    We werken met maandelijkse opzegbaarheid na een initiële periode van 3 maanden. We geloven dat je moet blijven omdat we resultaat leveren, niet omdat het moet.
                  </p>
</div>
<div>
<h4 className="font-bold mb-2">
                    Voor welke branches werken jullie?
                  </h4>
<p className="text-sm text-zinc-500">
                    Onze expertise ligt voornamelijk bij E-commerce, SaaS en High-ticket Leadgen. Twijfel je? Neem contact op.
                  </p>
</div>
<div>
<h4 className="font-bold mb-2">Hoe snel zie ik resultaat?</h4>
<p className="text-sm text-zinc-500">
                    Bij Ads vaak binnen enkele weken. SEO en strategische trajecten hebben een langere adem nodig (3-6 maanden).
                  </p>
</div>
<div>
<h4 className="font-bold mb-2">
                    Doen jullie ook losse projecten?
                  </h4>
<p className="text-sm text-zinc-500">
                    Ja, voor websites en audits doen we projectprijzen. Marketing support is meestal op retainer basis.
                  </p>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="service_detail">
<div className="max-w-7xl mx-auto px-6 lg:px-12 mt-8 mb-8">
<button className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black flex items-center gap-1" onclick="router('services')">
<i className="w-3 h-3" data-lucide="arrow-left"></i>
            Terug naar diensten
          </button>
</div>

<section className="pb-16 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h1 className="font-display font-extrabold text-5xl md:text-6xl mb-6">
                Websites die
                <br/>
<span className="text-[#ff5d2b]">verkopen</span>
                .
              </h1>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Een mooie website is leuk, maar een website die bezoekers omzet in klanten is essentieel. Wij bouwen razendsnelle, vindbare websites met focus op conversie.
              </p>
<div className="space-y-4 mb-8">
<div className="flex items-start gap-3">
<div className="bg-[#ff5d2b]/10 p-1 rounded mt-1">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="check"></i>
</div>
<div>
<div className="font-bold">Conversiegericht Design</div>
<div className="text-sm text-zinc-500">
                      Elke pixel heeft een doel.
                    </div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="bg-[#ff5d2b]/10 p-1 rounded mt-1">
<i className="w-4 h-4 text-[#ff5d2b]" data-lucide="check"></i>
</div>
<div>
<div className="font-bold">SEO Geoptimaliseerd</div>
<div className="text-sm text-zinc-500">
                      Klaar voor Google &amp; AI Search.
                    </div>
</div>
</div>
</div>
<button className="bg-black text-white px-8 py-4 rounded-full font-bold hover:bg-zinc-800 transition" onclick="router('contact')">
                Website aanvragen
              </button>
</div>
<div className="bg-zinc-100 rounded-[2.5rem] p-8 h-[500px] flex items-center justify-center relative overflow-hidden">
<img alt="Web design" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1559028012-481c04fa702d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 lg:px-12 my-12">
<div className="max-w-7xl mx-auto grid md:grid-cols-3 gap-12">
<div>
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="font-bold text-xl mb-3">Bliksemsnel</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Geen laadtijden die conversie doden. Wij bouwen performance-first voor maximale retentie.
              </p>
</div>
<div>
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="smartphone"></i>
</div>
<h3 className="font-bold text-xl mb-3">Mobile First</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Ontworpen voor de duim. Een perfecte ervaring op elk schermformaat is onze standaard.
              </p>
</div>
<div>
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center shadow-sm mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="font-bold text-xl mb-3">SEO Ready</h3>
<p className="text-zinc-500 text-sm leading-relaxed">
                Technisch perfect geoptimaliseerd voor Google, zodat je organisch groeit zonder advertentiekosten.
              </p>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
<h2 className="font-display font-bold text-3xl mb-12 text-center">
            Hoe we te werk gaan
          </h2>
<div className="grid md:grid-cols-4 gap-8">
<div className="relative">
<div className="text-4xl font-display font-bold text-zinc-200 mb-4">
                01
              </div>
<h3 className="font-bold text-lg mb-2">Strategie</h3>
<p className="text-sm text-zinc-500">
                We bepalen de doelen en doelgroep.
              </p>
</div>
<div className="relative">
<div className="text-4xl font-display font-bold text-zinc-200 mb-4">
                02
              </div>
<h3 className="font-bold text-lg mb-2">Design</h3>
<p className="text-sm text-zinc-500">
                UX/UI ontwerp dat past bij je merk.
              </p>
</div>
<div className="relative">
<div className="text-4xl font-display font-bold text-zinc-200 mb-4">
                03
              </div>
<h3 className="font-bold text-lg mb-2">Bouw</h3>
<p className="text-sm text-zinc-500">
                Ontwikkeling in moderne frameworks.
              </p>
</div>
<div className="relative">
<div className="text-4xl font-display font-bold text-zinc-200 mb-4">
                04
              </div>
<h3 className="font-bold text-lg mb-2">Live</h3>
<p className="text-sm text-zinc-500">
                Lancering en doorlopende optimalisatie.
              </p>
</div>
</div>
</section>

<section className="py-16 px-6 lg:px-12 max-w-7xl mx-auto">
<h2 className="font-display font-bold text-3xl mb-8">
            Recente projecten
          </h2>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-96">
<div className="col-span-2 row-span-2 bg-zinc-200 rounded-xl overflow-hidden relative group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1522542550221-31fd19575a2d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-white/90 px-3 py-1 rounded text-xs font-bold">
                Project X
              </div>
</div>
<div className="bg-zinc-200 rounded-xl overflow-hidden relative group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="bg-zinc-200 rounded-xl overflow-hidden relative group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1519389950473-47ba0277781c?auto=format&amp;fit=crop&amp;w=400&amp;q=80"/>
</div>
<div className="col-span-2 bg-zinc-200 rounded-xl overflow-hidden relative group">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1531403009284-440f080d1e12?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="bg-black text-white rounded-[2.5rem] p-12 lg:p-24 text-center relative overflow-hidden">
<div className="relative z-10 max-w-3xl mx-auto">
<div className="flex justify-center gap-1 mb-8 text-[#ff5d2b]">
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
<i className="w-5 h-5 fill-current" data-lucide="star"></i>
</div>
<h2 className="font-display font-bold text-2xl md:text-4xl leading-relaxed mb-8">
                "Sinds de nieuwe website live is, zijn onze aanvragen verdubbeld. De investering was het dubbel en dwars waard."
              </h2>
<div>
<div className="font-bold text-lg">Mark de Vries</div>
<div className="text-zinc-400 text-sm">CEO, TechFlow</div>
</div>
</div>
<div className="absolute top-0 left-0 w-full h-full bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
</div>
</section>
</main>



<main className="page-content hidden" id="cases">
<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="mb-16">
<h1 className="font-display font-bold text-5xl md:text-6xl mb-6">
              Resultaat telt.
            </h1>
<p className="text-xl text-zinc-500 max-w-2xl">
              Ontdek hoe we bedrijven helpen groeien met slimme marketing.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-12">

<div className="group cursor-pointer" onclick="router('case_detail')">
<div className="bg-zinc-100 rounded-3xl overflow-hidden mb-6 aspect-[4/3] relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Webshop &amp; CRO
                </div>
</div>
<h3 className="font-bold text-2xl mb-2 group-hover:text-[#ff5d2b] transition">
                STFU Shop
              </h3>
<p className="text-zinc-500 mb-4 line-clamp-2">
                Een verdubbeling van de conversieratio door een herontwerp van de checkout flow.
              </p>
<div className="flex gap-4 border-t border-zinc-100 pt-4">
<div>
<div className="text-[#ff5d2b] font-bold text-lg">+283%</div>
<div className="text-xs text-zinc-400">Conversie</div>
</div>
<div>
<div className="text-[#ff5d2b] font-bold text-lg">60K</div>
<div className="text-xs text-zinc-400">Bezoekers</div>
</div>
</div>
</div>

<div className="group cursor-pointer" onclick="router('case_detail')">
<div className="bg-zinc-100 rounded-3xl overflow-hidden mb-6 aspect-[4/3] relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                  Google Ads
                </div>
</div>
<h3 className="font-bold text-2xl mb-2 group-hover:text-[#ff5d2b] transition">
                Friettruck Huren
              </h3>
<p className="text-zinc-500 mb-4 line-clamp-2">
                Van lokale speler naar landelijke dekking door slimme geotargeting en campagnes.
              </p>
<div className="flex gap-4 border-t border-zinc-100 pt-4">
<div>
<div className="text-[#ff5d2b] font-bold text-lg">-40%</div>
<div className="text-xs text-zinc-400">CPA</div>
</div>
<div>
<div className="text-[#ff5d2b] font-bold text-lg">x3</div>
<div className="text-xs text-zinc-400">Leads</div>
</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="case_detail">

<div className="bg-zinc-900 text-white pt-24 pb-32 px-6 lg:px-12 relative overflow-hidden">
<div className="max-w-7xl mx-auto relative z-10">
<button className="text-zinc-400 text-sm mb-8 flex items-center gap-1 hover:text-white" onclick="router('cases')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
              Terug naar cases
            </button>
<div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-16">
<h1 className="font-display font-extrabold text-5xl md:text-7xl">
                STFU Shop
              </h1>
<div className="flex gap-8 text-right">
<div>
<div className="text-[#ff5d2b] font-bold text-3xl">+283%</div>
<div className="text-sm text-zinc-400">Conversie</div>
</div>
<div>
<div className="text-[#ff5d2b] font-bold text-3xl">ROAS</div>
<div className="text-sm text-zinc-400">12.5</div>
</div>
</div>
</div>
<img alt="" className="w-full h-[500px] object-cover rounded-2xl opacity-90" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
</div>
</div>

<section className="max-w-7xl mx-auto px-6 lg:px-12 py-24">
<div className="grid lg:grid-cols-3 gap-16">

<div className="lg:col-span-2">

<div className="mb-16">
<h3 className="font-display font-bold text-3xl mb-6">
                  De Uitdaging
                </h3>
<p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  De klant had veel verkeer maar weinig conversies. De checkout flow was onduidelijk en niet mobielvriendelijk. Er was geen duidelijke merkstrategie.
                </p>
<p className="text-zinc-600 text-lg leading-relaxed">
                  Het doel was duidelijk: verhoog de conversieratio zonder het advertentiebudget te verhogen.
                </p>
</div>

<div className="grid grid-cols-2 gap-4 mb-16">
<div className="bg-zinc-100 rounded-2xl overflow-hidden aspect-square">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1586880244406-556ebe35f282?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="bg-zinc-100 rounded-2xl overflow-hidden aspect-square translate-y-8">
<img alt="" className="w-full h-full object-cover hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>

<div className="mb-16">
<h3 className="font-display font-bold text-3xl mb-6">
                  Onze Oplossing
                </h3>
<p className="text-zinc-600 text-lg leading-relaxed mb-6">
                  We zijn begonnen met een diepgaande CRO audit. Vervolgens hebben we:
                </p>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<div className="bg-[#ff5d2b]/10 p-1.5 rounded mt-0.5 text-[#ff5d2b]">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-zinc-600">
                      De checkout volledig opnieuw ontworpen.
                    </span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#ff5d2b]/10 p-1.5 rounded mt-0.5 text-[#ff5d2b]">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-zinc-600">
                      Trust-elements toegevoegd op productpagina's.
                    </span>
</li>
<li className="flex items-start gap-3">
<div className="bg-[#ff5d2b]/10 p-1.5 rounded mt-0.5 text-[#ff5d2b]">
<i className="w-4 h-4" data-lucide="check"></i>
</div>
<span className="text-zinc-600">
                      Google Ads campagnes geherstructureerd op ROAS.
                    </span>
</li>
</ul>
</div>

<div className="bg-[#ff5d2b]/5 border-l-4 border-[#ff5d2b] p-8 rounded-r-xl">
<p className="text-xl font-display font-bold italic text-zinc-900 mb-4">
                  "Marketing Shift heeft onze business getransformeerd. We schalen nu harder dan ooit."
                </p>
<div className="text-sm font-bold text-[#ff5d2b] uppercase tracking-wider">
                  Founder, STFU Shop
                </div>
</div>
</div>

<div className="relative">
<div className="bg-zinc-50 p-8 rounded-3xl h-fit sticky top-24 border border-zinc-100">
<h4 className="font-bold mb-6 text-xl">Project Info</h4>
<div className="space-y-6 text-sm">
<div className="flex justify-between border-b border-zinc-200 pb-4">
<span className="text-zinc-500">Klant</span>
<span className="font-bold">STFU</span>
</div>
<div className="flex justify-between border-b border-zinc-200 pb-4">
<span className="text-zinc-500">Services</span>
<span className="font-bold text-right">
                      Webshop, CRO,
                      <br/>
                      Ads
                    </span>
</div>
<div className="flex justify-between border-b border-zinc-200 pb-4">
<span className="text-zinc-500">Duur</span>
<span className="font-bold">4 Maanden</span>
</div>
</div>
<button className="w-full mt-8 bg-[#ff5d2b] text-white py-4 rounded-full font-bold hover:bg-[#e04e20] transition shadow-lg shadow-[#ff5d2b]/20" onclick="router('contact')">
                  Ook zulke resultaten?
                </button>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 py-24 px-6 lg:px-12 border-t border-zinc-200">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<h2 className="font-display font-bold text-3xl">Andere cases</h2>
<button className="text-sm font-bold border-b border-black pb-1 hover:text-[#ff5d2b] hover:border-[#ff5d2b] transition" onclick="router('cases')">
                Bekijk alle cases
              </button>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="group cursor-pointer bg-white p-4 rounded-3xl border border-zinc-100 hover:shadow-xl transition duration-300" onclick="router('case_detail')">
<div className="bg-zinc-100 rounded-2xl overflow-hidden mb-4 aspect-video relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Google Ads
                  </div>
</div>
<h3 className="font-bold text-xl px-2 mb-1 group-hover:text-[#ff5d2b] transition">
                  Friettruck Huren
                </h3>
<p className="text-zinc-500 text-sm px-2">Leadgeneratie</p>
</div>
<div className="group cursor-pointer bg-white p-4 rounded-3xl border border-zinc-100 hover:shadow-xl transition duration-300" onclick="router('case_detail')">
<div className="bg-zinc-100 rounded-2xl overflow-hidden mb-4 aspect-video relative">
<img alt="" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute top-4 left-4 bg-white px-3 py-1 rounded-full text-xs font-bold shadow-sm">
                    Dashboard
                  </div>
</div>
<h3 className="font-bold text-xl px-2 mb-1 group-hover:text-[#ff5d2b] transition">
                  SaaS Dashboard
                </h3>
<p className="text-zinc-500 text-sm px-2">UX/UI Redesign</p>
</div>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="about">
<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-[#ff5d2b] font-bold tracking-widest uppercase mb-4 text-xs">
                Over Marketing Shift
              </div>
<h1 className="font-display font-bold text-5xl mb-8">
                Wij zijn de groeimotor
                <br/>
                voor jouw merk.
              </h1>
<p className="text-lg text-zinc-600 mb-6 leading-relaxed">
                Marketing is veranderd. Het gaat niet meer om 'zomaar wat doen', maar om data, AI en snelheid.
              </p>
<p className="text-lg text-zinc-600 mb-8 leading-relaxed">
                Onze missie is simpel: ambitieuze bedrijven helpen winnen in het digitale tijdperk. Zonder gedoe, met resultaat.
              </p>
</div>
<div className="grid grid-cols-2 gap-4">
<img alt="Team" className="rounded-2xl w-full h-64 object-cover translate-y-8" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Meeting" className="rounded-2xl w-full h-64 object-cover" src="https://images.unsplash.com/photo-1531545514256-b1400bc00f31?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
</div>
</section>
<section className="bg-zinc-900 text-white py-24 px-6 lg:px-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#ff5d2b] rounded-full blur-[120px] opacity-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto relative z-10">
<div className="grid md:grid-cols-2 gap-16 mb-16">
<div>
<h2 className="font-display font-bold text-3xl md:text-4xl mb-4">
                  Wij meten ons succes aan dat van jou.
                </h2>
<p className="text-zinc-400 leading-relaxed">
                  Geen vanity metrics, maar cijfers die onder aan de streep tellen. Dit is de impact die we de afgelopen 12 maanden hebben gemaakt voor onze partners.
                </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t border-zinc-800 pt-12">
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-[#ff5d2b] mb-2">
                  €12M+
                </div>
<div className="text-sm font-medium text-zinc-400">
                  Gegenereerde Omzet
                </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  150k
                </div>
<div className="text-sm font-medium text-zinc-400">
                  Leads Verzameld
                </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  45%
                </div>
<div className="text-sm font-medium text-zinc-400">
                  Gem. Conversie Stijging
                </div>
</div>
<div>
<div className="text-4xl md:text-5xl font-display font-bold text-white mb-2">
                  24/7
                </div>
<div className="text-sm font-medium text-zinc-400">
                  System Uptime
                </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl mb-4">Ons DNA</h2>
<p className="text-zinc-500">
              Waar wij voor staan in alles wat we doen.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:border-[#ff5d2b]/30 transition">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<h3 className="font-bold text-xl mb-3">Snelheid &amp; Executie</h3>
<p className="text-zinc-600 text-sm leading-relaxed">
                De markt wacht niet. Wij geloven in snel testen, leren en opschalen. Geen ellenlange rapporten, maar actie.
              </p>
</div>
<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:border-[#ff5d2b]/30 transition">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="search"></i>
</div>
<h3 className="font-bold text-xl mb-3">Radicale Transparantie</h3>
<p className="text-zinc-600 text-sm leading-relaxed">
                Je weet altijd wat we doen en waarom. We delen successen, maar zijn ook eerlijk als iets niet werkt.
              </p>
</div>
<div className="bg-zinc-50 p-8 rounded-3xl border border-zinc-100 hover:border-[#ff5d2b]/30 transition">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-[#ff5d2b]">
<i className="w-6 h-6" data-lucide="heart"></i>
</div>
<h3 className="font-bold text-xl mb-3">Partnership</h3>
<p className="text-zinc-600 text-sm leading-relaxed">
                Wij zijn geen extern bureau, maar een verlengstuk van je team. We denken mee over je hele bedrijf.
              </p>
</div>
</div>
</section>
<section className="bg-zinc-50 py-24 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<h2 className="font-display font-bold text-3xl mb-12">
              Ontmoet het team
            </h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="group">
<div className="bg-zinc-200 rounded-2xl h-80 mb-4 overflow-hidden">
<img alt="Roy" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-bold text-lg">Roy</h3>
<div className="text-sm text-zinc-500">Founder &amp; Strategy</div>
</div>
<div className="group">
<div className="bg-zinc-200 rounded-2xl h-80 mb-4 overflow-hidden">
<img alt="Britte" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-bold text-lg">Britte</h3>
<div className="text-sm text-zinc-500">Merk Strateeg</div>
</div>
<div className="group">
<div className="bg-zinc-200 rounded-2xl h-80 mb-4 overflow-hidden">
<img alt="Dev" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition duration-500" src="https://images.unsplash.com/photo-1519345182560-3f2917c472ef?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<h3 className="font-bold text-lg">Mark</h3>
<div className="text-sm text-zinc-500">Lead Developer</div>
</div>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="contact">
<section className="py-12 lg:py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16">
<div>
<h1 className="font-display font-bold text-5xl mb-6">Let's talk.</h1>
<p className="text-lg text-zinc-600 mb-12">
                Klaar voor de volgende stap? Vul het formulier in of bel ons direct.
              </p>
<div className="space-y-8">
<div>
<h4 className="font-bold mb-1">Bezoek ons</h4>
<p className="text-zinc-600">
                    Stationsplein 99 - 276
                    <br/>
                    1703WE Heerhugowaard
                  </p>
</div>
<div>
<h4 className="font-bold mb-1">Contact</h4>
<p className="text-zinc-600">
<a className="underline decoration-zinc-300" href="mailto:info@marketingshift.nl">
                      Info@marketingshift.nl
                    </a>
</p>
<p className="text-zinc-600">072 234 29 55</p>
</div>
</div>

<div className="mt-12 bg-zinc-100 rounded-2xl h-64 w-full flex items-center justify-center text-zinc-400 font-mono text-sm">
<i className="w-4 h-4 mr-2" data-lucide="map-pin"></i>
                MAP INTEGRATION
              </div>
</div>
<div className="bg-zinc-50 p-8 md:p-12 rounded-3xl border border-zinc-100">
<form className="space-y-6">
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">
                    Naam
                  </label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#ff5d2b]/20 focus:border-[#ff5d2b] transition" placeholder="Jouw naam" type="text"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">
                    Email
                  </label>
<input className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#ff5d2b]/20 focus:border-[#ff5d2b] transition" placeholder="jouw@email.nl" type="email"/>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">
                    Onderwerp
                  </label>
<select className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#ff5d2b]/20 focus:border-[#ff5d2b] bg-white">
<option>Ik wil een website</option>
<option>CRO Scan aanvragen</option>
<option>Strategie gesprek</option>
<option>Anders</option>
</select>
</div>
<div>
<label className="block text-xs font-bold uppercase text-zinc-500 mb-2">
                    Bericht
                  </label>
<textarea className="w-full px-4 py-3 rounded-lg border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-[#ff5d2b]/20 focus:border-[#ff5d2b] transition" placeholder="Vertel ons over je doelen..." rows="4"></textarea>
</div>
<button className="w-full bg-black text-white px-8 py-4 rounded-lg font-bold hover:bg-zinc-800 transition" type="button">
                  Verstuur bericht
                </button>
</form>
</div>
</div>
</section>
</main>



<main className="page-content hidden" id="vacancies">
<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h1 className="font-display font-bold text-5xl mb-6">
              Join the shift.
            </h1>
<p className="text-lg text-zinc-600">
              Wij zoeken mensen die niet tevreden zijn met 'gemiddeld'. Bouw mee aan de bureaus van de toekomst.
            </p>
</div>
<div className="space-y-4 max-w-4xl mx-auto">

<div className="group border border-zinc-200 p-6 rounded-2xl hover:border-black transition cursor-pointer bg-white">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="font-bold text-xl mb-1">Performance Marketeer</h3>
<div className="flex gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                      32-40 uur
                    </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                      Heerhugowaard
                    </span>
</div>
</div>
<button className="bg-zinc-100 text-black px-6 py-2 rounded-full text-sm font-bold group-hover:bg-black group-hover:text-white transition" onclick="router('vacancy_detail')">
                  Bekijk vacature
                </button>
</div>
</div>

<div className="group border border-zinc-200 p-6 rounded-2xl hover:border-black transition cursor-pointer bg-white">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="font-bold text-xl mb-1">
                    Medior Frontend Developer
                  </h3>
<div className="flex gap-4 text-sm text-zinc-500">
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="clock"></i>
                      40 uur
                    </span>
<span className="flex items-center gap-1">
<i className="w-3 h-3" data-lucide="map-pin"></i>
                      Heerhugowaard
                    </span>
</div>
</div>
<button className="bg-zinc-100 text-black px-6 py-2 rounded-full text-sm font-bold group-hover:bg-black group-hover:text-white transition">
                  Bekijk vacature
                </button>
</div>
</div>

<div className="group border-dashed border-2 border-zinc-300 p-6 rounded-2xl hover:border-[#ff5d2b] transition cursor-pointer bg-zinc-50">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
<div>
<h3 className="font-bold text-xl mb-1">Open Sollicitatie</h3>
<p className="text-sm text-zinc-500">
                    Denk jij dat je iets toevoegt dat we missen?
                  </p>
</div>
<button className="text-[#ff5d2b] font-bold text-sm flex items-center gap-1 group-hover:translate-x-1 transition">
                  Mail ons
                  <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</section>
</main>
<main className="page-content hidden" id="vacancy_detail">
<div className="max-w-4xl mx-auto px-6 lg:px-12 py-12">
<button className="text-xs font-bold uppercase tracking-wider text-zinc-500 hover:text-black flex items-center gap-1 mb-8" onclick="router('vacancies')">
<i className="w-3 h-3" data-lucide="arrow-left"></i>
            Terug naar vacatures
          </button>
<div className="grid md:grid-cols-3 gap-12">
<div className="md:col-span-2">
<span className="bg-[#ff5d2b]/10 text-[#ff5d2b] px-3 py-1 rounded-full text-xs font-bold uppercase mb-4 inline-block">
                Full-time
              </span>
<h1 className="font-display font-bold text-4xl md:text-5xl mb-6">
                Performance Marketeer
              </h1>
<div className="flex items-center gap-6 text-sm text-zinc-500 mb-8 border-b border-zinc-100 pb-8">
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="map-pin"></i>
                  Heerhugowaard
                </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="clock"></i>
                  32-40 uur
                </span>
<span className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="euro"></i>
                  Marktconform
                </span>
</div>
<div className="prose prose-zinc mb-12">
<h3 className="font-bold text-xl text-zinc-900 mb-4">
                  Over de rol
                </h3>
<p className="text-zinc-600 mb-6">
                  Als Performance Marketeer ben jij de motor achter de groei van onze klanten. Je beheert campagnes in Google Ads en Meta, analyseert data en spot kansen waar anderen ze missen. Je werkt nauw samen met het strategie- en designteam om maximale ROI te behalen.
                </p>
<h3 className="font-bold text-xl text-zinc-900 mb-4">
                  Wat je gaat doen
                </h3>
<ul className="space-y-2 text-zinc-600 list-disc pl-5 mb-6">
<li>
                    Opzetten en optimaliseren van SEA en Social campagnes.
                  </li>
<li>
                    Analyseren van campagneresultaten en rapporteren aan klanten.
                  </li>
<li>A/B testen van ad copies en landingspagina's.</li>
<li>Meedenken over de bredere groeistrategie.</li>
</ul>
<h3 className="font-bold text-xl text-zinc-900 mb-4">
                  Wie jij bent
                </h3>
<ul className="space-y-2 text-zinc-600 list-disc pl-5 mb-6">
<li>Minimaal 2 jaar ervaring in performance marketing.</li>
<li>Je droomt in ROAS, CPA en CTR.</li>
<li>Analytisch sterk, maar ook creatief in oplossingen.</li>
<li>Je spreekt en schrijft vloeiend Nederlands.</li>
</ul>
</div>
</div>
<div className="relative">
<div className="sticky top-24 bg-zinc-50 border border-zinc-200 p-6 rounded-2xl">
<h3 className="font-bold text-lg mb-4">Interesse?</h3>
<p className="text-sm text-zinc-500 mb-6">
                  Stuur ons je CV en motivatie. We reageren binnen 2 werkdagen.
                </p>
<button className="w-full bg-black text-white py-3 rounded-full font-bold hover:bg-zinc-800 transition mb-3" onclick="router('contact')">
                  Solliciteer direct
                </button>
<button className="w-full bg-white border border-zinc-200 text-black py-3 rounded-full font-bold hover:bg-zinc-50 transition text-sm">
                  Deel vacature
                </button>
<div className="mt-8 pt-6 border-t border-zinc-200">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-zinc-200 rounded-full overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div>
<div className="text-xs font-bold">Vragen?</div>
<div className="text-xs text-zinc-500">
                        Bel Roy: 072 234 29 55
                      </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>



<main className="page-content hidden" id="blog">
<section className="py-24 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="mb-16">
<h1 className="font-display font-bold text-5xl mb-6">Marketing Tips</h1>
<p className="text-xl text-zinc-500">
              Kennis is macht. Deel in onze inzichten.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<article className="group cursor-pointer" onclick="router('blog_detail')">
<div className="bg-zinc-100 rounded-2xl h-64 overflow-hidden mb-4">
<img alt="AI" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="text-xs font-bold text-[#ff5d2b] mb-2 uppercase tracking-wide">
                AI Trends
              </div>
<h2 className="font-bold text-xl mb-3 leading-snug group-hover:underline decoration-2 underline-offset-4">
                Waarom ChatGPT je marketing team niet vervangt (maar wel verbetert).
              </h2>
<p className="text-zinc-500 text-sm line-clamp-3">
                AI is een tool, geen tovenaar. Lees hoe wij AI inzetten voor efficiëntie zonder de menselijke touch te verliezen.
              </p>
</article>

<article className="group cursor-pointer" onclick="router('blog_detail')">
<div className="bg-zinc-100 rounded-2xl h-64 overflow-hidden mb-4">
<img alt="Analytics" className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="text-xs font-bold text-[#ff5d2b] mb-2 uppercase tracking-wide">
                CRO
              </div>
<h2 className="font-bold text-xl mb-3 leading-snug group-hover:underline decoration-2 underline-offset-4">
                5 Conversie killers op je mobiele website.
              </h2>
<p className="text-zinc-500 text-sm line-clamp-3">
                Mobiel verkeer is dominant, maar converteert vaak slechter. Hier zijn de grootste valkuilen.
              </p>
</article>
</div>
</section>
</main>



<main className="page-content hidden" id="blog_detail">
<div className="max-w-3xl mx-auto px-6 py-24">
<button className="text-zinc-500 mb-8 flex items-center gap-1 hover:text-black text-sm font-bold" onclick="router('blog')">
<i className="w-4 h-4" data-lucide="arrow-left"></i>
            Terug naar tips
          </button>
<div className="text-xs font-bold text-[#ff5d2b] mb-4 uppercase tracking-wide">
            AI Trends • 5 min leestijd
          </div>
<h1 className="font-display font-bold text-4xl md:text-5xl mb-8 leading-tight">
            Waarom ChatGPT je marketing team niet vervangt.
          </h1>
<div className="flex items-center gap-3 mb-12 border-b border-zinc-100 pb-8">
<div className="w-10 h-10 bg-zinc-200 rounded-full"></div>
<div className="text-sm">
<div className="font-bold">Britte</div>
<div className="text-zinc-500">Merk Strateeg</div>
</div>
</div>
<div className="prose prose-zinc prose-lg">
<p className="text-xl text-zinc-600 mb-8 font-medium">
              Iedereen heeft het erover: AI gaat onze banen overnemen. Maar is dat wel zo? Bij Marketing Shift zien we AI als de ultieme assistent, niet de directeur.
            </p>
<h2 className="font-bold text-2xl mb-4 text-zinc-900">
              De menselijke touch
            </h2>
<p className="mb-6 text-zinc-600">
              AI kan razendsnel data analyseren en teksten genereren, maar emotie, nuance en merkidentiteit blijven mensenwerk. Een goede strategie combineert de rekenkracht van AI met de creativiteit van ons team.
            </p>
<h2 className="font-bold text-2xl mb-4 text-zinc-900">
              Hoe wij het gebruiken
            </h2>
<ul className="list-disc pl-5 space-y-2 mb-8 text-zinc-600">
<li>Voor het genereren van content ideeën.</li>
<li>Voor het analyseren van grote datasets.</li>
<li>Voor het automatiseren van saaie taken.</li>
</ul>
</div>

<div className="bg-zinc-100 p-8 rounded-2xl mt-16">
<h3 className="font-bold text-xl mb-2">Blijf op de hoogte</h3>
<p className="text-zinc-600 mb-4 text-sm">
              Elke maand de beste tips in je inbox.
            </p>
<div className="flex gap-2">
<input className="flex-1 px-4 py-2 rounded-lg border border-zinc-200" placeholder="Email adres" type="email"/>
<button className="bg-black text-white px-6 py-2 rounded-lg font-bold text-sm">
                Aanmelden
              </button>
</div>
</div>
</div>
</main>
</div>

<footer className="bg-[#ffece5] pt-24 pb-12 px-6 lg:px-12 relative mt-auto border-t border-white">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12">
<div className="lg:w-1/3">
<div className="flex items-center gap-1 mb-6">
<div className="font-display font-bold text-xl italic">MARKETING</div>
<div className="text-[#ff5d2b]">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<div className="font-display font-bold text-xl italic text-[#ff5d2b]">
                SHIFT
              </div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed mb-6">
              Wij versterken bedrijven met strategie, AI en design.
            </p>
<div className="flex gap-4 opacity-50 grayscale">
<i className="w-5 h-5" data-lucide="box"></i>
<i className="w-5 h-5" data-lucide="infinity"></i>
</div>
</div>
<div className="lg:w-1/3 flex gap-12 text-sm text-zinc-600">
<ul className="space-y-2">
<li>
<button className="hover:text-black" onclick="router('services')">
                  Diensten
                </button>
</li>
<li>
<button className="hover:text-black" onclick="router('cases')">
                  Cases
                </button>
</li>
<li>
<button className="hover:text-black" onclick="router('about')">
                  Over ons
                </button>
</li>
</ul>
<ul className="space-y-2">
<li>
<button className="hover:text-black" onclick="router('vacancies')">
                  Vacatures
                </button>
</li>
<li>
<button className="hover:text-black" onclick="router('blog')">
                  Tips
                </button>
</li>
<li>
<button className="hover:text-black" onclick="router('contact')">
                  Contact
                </button>
</li>
</ul>
</div>
<div className="lg:w-1/3 text-right">
<h2 className="font-display font-bold text-2xl mb-4">
              Klaar om te groeien?
            </h2>
<button className="bg-[#ff5d2b] text-white px-6 py-3 rounded-full font-bold text-sm hover:bg-[#e04e20] transition" onclick="router('contact')">
              Start vandaag
            </button>
</div>
</div>
<div className="mt-16 pt-8 border-t border-black/5 flex justify-between text-xs text-zinc-500">
<span>© 2024 Marketing Shift.</span>
<div className="space-x-4">
<a href="#">Privacy</a>
<a href="#">Voorwaarden</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
