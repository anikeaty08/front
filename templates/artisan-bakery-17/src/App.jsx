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
      

<nav className="md:px-12 flex z-50 w-full border-white/5 border-b pt-8 pr-6 pb-8 pl-6 absolute top-0 left-0 items-center justify-center">
<div className="hidden md:flex text-sm font-medium text-gray-300 tracking-wide gap-x-8 gap-y-8">
<a className="hover:text-[#cba762] transition-colors duration-300" href="#" style={{}}>Heritage</a>
<a className="hover:text-[#cba762] transition-colors duration-300" href="#" style={{}}>Products</a>
<div className="uppercase text-xl font-medium text-white tracking-widest font-serif">Feinbäckerei Ogoralek</div><a className="hover:text-[#cba762] transition-colors duration-300" href="#" style={{}}>Partners</a>
<a className="hover:text-[#cba762] transition-colors duration-300" href="#" style={{}}>Contact</a>
</div>
<button className="md:hidden text-white" style={{}}>
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden bg-[#1F1A18] bg-grain" style={{}}>

<div className="absolute inset-0 z-0">
<img alt="Artisan baker kneading dough" className="w-full h-full object-cover opacity-60 scale-105 motion-safe:animate-[pulse_10s_ease-in-out_infinite]" src="https://images.unsplash.com/photo-1509440159596-0249088772ff?q=80&amp;w=2672&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/40 to-[#231f1e]" style={{}}></div>
<div className="bg-gradient-to-r from-black/50 via-transparent to-black/50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 w-full max-w-7xl px-6 md:px-12 flex flex-col items-center text-center mt-10">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-white tracking-tight font-playfair mb-8">Bewährte Qualität,, <br/> <span className="xl:bg-clip-text xl:text-transparent italic font-playfair bg-gradient-to-br from-[#C3A03A] to-[#F5D687]">die man von früher kennt</span></h1>
<p className="md:text-lg lg:text-xl leading-relaxed text-base font-normal text-orange-100 tracking-wide opacity-90 max-w-2xl mb-12">
                We are bringing back genuine culinary culture. Handcrafted according to traditional recipes, using only the finest ingredients. For those who appreciate authenticity over standardization.
            </p>
<div className="flex flex-col md:flex-row gap-5 w-full md:w-auto">

<button className="group relative px-8 py-4 bg-[#cba762] text-white font-sans text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#8f723b]" style={{}}>
<span className="relative z-10 flex items-center gap-3">
                        Open Catalog
                        <iconify-icon className="" height="18" icon="solar:book-2-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>

<button className="group px-8 py-4 bg-transparent border border-gray-500 text-white font-sans text-sm tracking-widest uppercase transition-all duration-300 hover:border-[#cba762] hover:text-[#cba762]" style={{}}>
<span className="flex items-center gap-3">
                        Discover Craftsmanship
                        <iconify-icon className="transition-transform duration-300 group-hover:translate-x-1" height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-gray-400" style={{}}>Scroll</span>
<iconify-icon className="text-gray-400" height="20" icon="solar:arrow-down-linear" style={{}} width="20"></iconify-icon>
</div>
</header>

<section className="md:px-12 -mt-20 md:-mt-32 w-full z-20 pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">

<div className="group relative bg-[#231f1e] border border-white/10 p-8 flex flex-col items-start justify-between h-full min-h-[280px] transition-all duration-500 hover:border-[#cba762]/50 hover:-translate-y-1" style={{}}>

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1556742049-09329e637dcb?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] opacity-0 group-hover:opacity-10 bg-cover bg-center transition-opacity duration-700 mix-blend-overlay"></div>
<div className="z-10 relative">
<div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-[#cba762] mb-6 group-hover:bg-[#cba762] group-hover:text-white transition-colors duration-300" style={{}}>
<iconify-icon className="" height="24" icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-medium" style={{}}>Retail &amp; Grocery</h3>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>
                            Differentiation on the shelf through genuine tradition. High-quality staples for discerning customers.
                        </p>
</div>
<div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-[#cba762]/30 transition-colors duration-300" style={{}}></div>
</div>

<div className="group relative bg-[#231f1e] border border-white/10 p-8 flex flex-col items-start justify-between h-full min-h-[280px] transition-all duration-500 hover:border-[#cba762]/50 hover:-translate-y-1" style={{}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1488459716781-31db52582fe9?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] opacity-0 group-hover:opacity-10 bg-cover bg-center transition-opacity duration-700 mix-blend-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-[#cba762] mb-6 group-hover:bg-[#cba762] group-hover:text-white transition-colors duration-300" style={{}}>
<iconify-icon height="24" icon="solar:shop-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-medium" style={{}}>Markets &amp; Catering</h3>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>
                            Crowd magnets with high recognition value. Perfect for seasonal markets and exclusive events.
                        </p>
</div>
<div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-[#cba762]/30 transition-colors duration-300" style={{}}></div>
</div>

<div className="group relative bg-[#231f1e] border border-white/10 p-8 flex flex-col items-start justify-between h-full min-h-[280px] transition-all duration-500 hover:border-[#cba762]/50 hover:-translate-y-1" style={{}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514362545857-3bc16c4c7d1b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] opacity-0 group-hover:opacity-10 bg-cover bg-center transition-opacity duration-700 mix-blend-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-[#cba762] mb-6 group-hover:bg-[#cba762] group-hover:text-white transition-colors duration-300" style={{}}>
<iconify-icon height="24" icon="solar:chef-hat-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-medium" style={{}}>Gastronomy</h3>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>
                            Pâtisserie quality without the effort. Elevate your dessert menu with consistent excellence.
                        </p>
</div>
<div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-[#cba762]/30 transition-colors duration-300" style={{}}></div>
</div>

<div className="group relative bg-[#231f1e] border border-white/10 p-8 flex flex-col items-start justify-between h-full min-h-[280px] transition-all duration-500 hover:border-[#cba762]/50 hover:-translate-y-1" style={{}}>
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1586810724476-c294fb7ac01b?q=80&amp;w=2670&amp;auto=format&amp;fit=crop')] opacity-0 group-hover:opacity-10 bg-cover bg-center transition-opacity duration-700 mix-blend-overlay"></div>
<div className="relative z-10">
<div className="w-12 h-12 flex items-center justify-center rounded-full border border-white/10 text-[#cba762] mb-6 group-hover:bg-[#cba762] group-hover:text-white transition-colors duration-300" style={{}}>
<iconify-icon height="24" icon="solar:box-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-2xl text-white mb-3 tracking-tight font-playfair font-medium" style={{}}>Distribution</h3>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>
                            Efficient distribution network for premium partners. Reliable logistics and supply chain.
                        </p>
</div>
<div className="w-full h-[1px] bg-white/10 mt-6 group-hover:bg-[#cba762]/30 transition-colors duration-300" style={{}}></div>
</div>
</div>
</div>
</section>

<section className="relative w-full py-24 px-6 md:px-12 bg-[#1F1A18] bg-grain z-20 border-t border-white/5" style={{}}>
<div className="max-w-7xl mx-auto flex flex-col items-center">

<div className="text-center mb-16 max-w-4xl mx-auto">
<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair font-medium tracking-tight mb-6" style={{}}>
                    Ehrliches Handwerk. 
                    <span className="italic font-medium text-transparent bg-clip-text bg-gradient-to-r from-[#C3A03A] to-[#F5D687] pr-2" style={{}}>Faire Preise</span>
</h2>
<p className="text-gray-300 text-lg font-light leading-relaxed mb-10 max-w-2xl mx-auto opacity-80" style={{}}>
                    Bevor wir über Sortimente sprechen, lassen Sie uns über das Wichtigste reden: Die Qualität. Wir produzieren nicht industriell, sondern mit Herz, Hand und Verstand. Sehen Sie selbst, wie unsere Butter-Schaumrollen entstehen.
                </p>
<a className="group inline-flex items-center gap-2 text-[#cba762] uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 pb-1 border-b border-[#cba762]/30 hover:border-white/50" href="#" style={{}}>
<span className="mr-1 group-hover:-translate-x-1 transition-transform duration-300">&gt;</span> 
                    Sortiment &amp; Handelskonditionen anfragen 
                    <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&lt;</span>
</a>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 w-full">

<div className="lg:col-span-6 xl:col-span-6 group relative h-[600px] lg:h-[500px] bg-[#231f1e] border border-white/10 overflow-hidden" style={{}}>
<img alt="Baker rolling dough" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/20 to-transparent" style={{}}></div>

<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-20 h-20 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#cba762] group-hover:border-[#cba762] group-hover:text-black text-white transition-all duration-300 hover:scale-110" style={{}}>
<iconify-icon height="32" icon="solar:play-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>

<div className="absolute bottom-0 left-0 p-8 md:p-10 w-full">
<h3 className="text-2xl md:text-3xl text-white font-playfair font-medium mb-3" style={{}}>Die Kunst der Butter-Schaumrolle</h3>
<p className="text-gray-300 text-sm md:text-base leading-relaxed max-w-md" style={{}}>
                            140 Jahre altes Rezept, reine Butter, kein Palmöl. Sehen Sie, wie jede Rolle von Hand gewickelt wird. Das ist Qualität, die man schmeckt.
                        </p>
</div>
</div>

<div className="lg:col-span-3 xl:col-span-3 group relative h-[500px] bg-[#231f1e] border border-white/10 overflow-hidden" style={{}}>
<img alt="Customer Feedback" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent"></div>
<button className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-16 h-16 rounded-full border border-white/20 flex items-center justify-center backdrop-blur-sm group-hover:bg-[#cba762] group-hover:border-[#cba762] group-hover:text-black text-white transition-all duration-300 hover:scale-110" style={{}}>
<iconify-icon height="28" icon="solar:play-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
<div className="absolute bottom-0 left-0 p-8 w-full text-center">
<h3 className="text-2xl text-white font-playfair font-medium mb-2" style={{}}>Customer Feedback</h3>
</div>
</div>

<div className="lg:col-span-3 xl:col-span-3 bg-[#231f1e] border border-white/10 p-8 flex flex-col justify-center h-full min-h-[500px]" style={{}}>
<h3 className="text-2xl text-white font-playfair font-medium mb-10 leading-tight" style={{}}>Warum Kunden Ogoralek lieben</h3>
<div className="space-y-8">

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#cba762] mt-1" style={{}}>
<iconify-icon height="22" icon="solar:star-linear" width="22"></iconify-icon>
</div>
<div>
<p className="text-white text-base font-normal leading-tight" style={{}}>Unser Bestseller: Die Butter-Rahm Schaumrolle</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#cba762] mt-1" style={{}}>
<iconify-icon height="22" icon="solar:verified-check-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-[#cba762] text-sm font-normal mb-1" style={{}}>Hochwertige Zutaten</h4>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>Echte Butter, frische Äpfel, feinste Nüsse. Wir sparen nicht am Geschmack.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#cba762] mt-1" style={{}}>
<iconify-icon height="22" icon="solar:wallet-money-linear" width="22"></iconify-icon>
</div>
<div>
<h4 className="text-[#cba762] text-sm font-normal mb-1" style={{}}>Fairer Preis</h4>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>Premium-Qualität muss nicht unbezahlbar sein. Wir bieten Top-Leistung für Ihr Geld.</p>
</div>
</div>

<div className="flex gap-4 items-start">
<div className="shrink-0 text-[#cba762] mt-1" style={{}}>
<iconify-icon height="22" icon="solar:hand-stars-linear" width="22"></iconify-icon>
</div>
<div className="">
<h4 className="text-[#cba762] text-sm font-normal mb-1" style={{}}>Echte Handarbeit</h4>
<p className="text-gray-400 text-sm leading-relaxed" style={{}}>Jedes Stück ein Unikat, kein Industrie-Standard.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative w-full bg-[#1F1A18] border-t border-white/5 overflow-hidden" id="retail" style={{}}>

<div className="absolute inset-0 opacity-40">
<img alt="Bakery Display" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-r from-[#170e06] via-[#1F1A18]/95 to-[#1F1A18]/80 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 md:px-12 pt-24 pb-20">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

<div className="flex flex-col justify-start">

<div className="flex items-center gap-4 mb-8">
<div className="w-10 h-10 rounded-full border border-[#cba762] flex items-center justify-center text-[#cba762]" style={{}}>
<iconify-icon height="20" icon="solar:cart-large-linear" width="20"></iconify-icon>
</div>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-[#cba762] to-[#F5D687] text-lg uppercase tracking-widest font-sans font-medium" style={{}}>Lebensmittelhandel &amp; Großhandel</span>
</div>

<h2 className="text-4xl md:text-5xl lg:text-6xl text-white font-playfair mb-8 leading-[1.1]" style={{}}>
                        Tradition im Regal: <br/>
<span className="italic text-gray-300 font-medium" style={{}}>Der Unterschied zur Industrie</span>
</h2>

<p className="text-lg text-gray-300 font-light leading-relaxed mb-10 max-w-xl opacity-90" style={{}}>
                        Ihre Kunden suchen im Regal nach Produkten, denen sie vertrauen können. Wir bringen echte österreichische Mehlspeiskultur in den modernen Handel – skalierbar, zuverlässig, aber im Kern immer noch Handwerk.
                    </p>

<div className="bg-white/5 border-l-2 border-[#cba762] p-6 mb-10 backdrop-blur-sm" style={{}}>
<div className="flex items-start gap-4">
<iconify-icon className="text-[#cba762] shrink-0 mt-1" icon="solar:star-bold" style={{}} width="20"></iconify-icon>
<div>
<h4 className="text-[#cba762] font-medium text-lg mb-2" style={{}}>Unser Bestseller: Die Butter-Rahm Schaumrolle</h4>
<p className="text-gray-300 text-sm leading-relaxed" style={{}}>
                                    Ohne Palmöl. 100% echte Butter &amp; Rahm. Handgewickelt.
                                </p>
</div>
</div>
</div>

<div>
<button className="group relative px-8 py-4 bg-[#cba762] text-white font-sans text-sm tracking-widest uppercase overflow-hidden transition-all duration-300 hover:bg-[#8f723b]" style={{}}>
<span className="relative z-10 flex items-center gap-3">
                                Handelskonditionen anfragen
                                <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</span>
</button>
</div>
</div>

<div className="hidden lg:flex items-center justify-center relative">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-3/4 aspect-[4/5] border border-white/10 bg-[#231f1e] p-2 rotate-3 hover:rotate-0 transition-transform duration-700" style={{}}>
<img alt="Schaumrolle Closeup" className="opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5e4fc246-4022-4c0d-b196-615c63cebd76_1600w.png"/>
</div>
</div>
</div>

<div className="w-full border-t border-white/10 pt-10" style={{}}>
<div className="flex flex-col md:flex-row md:items-center justify-between mb-8">
<h3 className="text-3xl text-white font-playfair font-medium" style={{}}>Bestseller für das Regal</h3>
<span className="text-gray-400 text-sm uppercase tracking-widest mt-2 md:mt-0" style={{}}>Top 5 Auswahl</span>
</div>

<div className="w-full overflow-x-auto pb-8 no-scrollbar">
<div className="min-w-max flex border-t border-b border-white/10 divide-x divide-white/10" style={{}}>

<div className="w-[260px] p-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6" style={{}}>
<div className="h-40 w-full overflow-hidden bg-[#1F1A18] relative" style={{}}>
<img alt="Sachertorte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1571115177098-24ec42ed204d?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-xl text-white font-bold mb-1 group-hover:text-[#cba762] transition-colors" style={{}}>Sachertorte</h4>
<p className="text-sm text-gray-400 font-light" style={{}}>Nach Wiener Originalart</p>
</div>
</div>

<div className="w-[260px] p-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6" style={{}}>
<div className="h-40 w-full overflow-hidden bg-[#1F1A18] relative" style={{}}>
<img alt="Malakofftorte" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div>
<h4 className="text-xl text-white font-bold mb-1 group-hover:text-[#cba762] transition-colors" style={{}}>Malakofftorte</h4>
<p className="text-sm text-gray-400 font-light" style={{}}>Cremig &amp; Fein</p>
</div>
</div>

<div className="w-[260px] p-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6" style={{}}>
<div className="h-40 w-full overflow-hidden bg-[#1F1A18] relative" style={{}}>
<img alt="Apfelstrudel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1627308595229-7830a5c91f9f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-xl text-white font-bold mb-1 group-hover:text-[#cba762] transition-colors" style={{}}>Apfelstrudel</h4>
<p className="text-sm text-gray-400 font-light" style={{}}>Handgezogener Teig</p>
</div>
</div>

<div className="w-[260px] p-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6" style={{}}>
<div className="h-40 w-full overflow-hidden bg-[#1F1A18] relative" style={{}}>
<img alt="Kokosbusserl" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://images.unsplash.com/photo-1600093463592-8e36ae95ef56?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h4 className="text-xl text-white font-bold mb-1 group-hover:text-[#cba762] transition-colors" style={{}}>Kokosbusserl</h4>
<p className="text-sm text-gray-400 font-light" style={{}}>Saftig &amp; süß</p>
</div>
</div>

<div className="w-[260px] p-6 group cursor-pointer hover:bg-white/5 transition-colors duration-300 flex flex-col gap-6" style={{}}>
<div className="h-40 w-full overflow-hidden bg-[#1F1A18] relative" style={{}}>
<img alt="Topfenstrudel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div>
<h4 className="text-xl text-white font-bold mb-1 group-hover:text-[#cba762] transition-colors" style={{}}>Topfenstrudel</h4>
<p className="text-sm text-gray-400 font-light" style={{}}>Mit frischem Topfen</p>
</div>
</div>
</div>
</div>

<div className="mt-8 text-center">
<a className="group inline-flex items-center gap-2 text-[#cba762] uppercase tracking-widest text-sm hover:text-white transition-colors duration-300 pb-1 border-b border-[#cba762]/30 hover:border-white/50" href="#" style={{}}>
<span className="mr-1 group-hover:-translate-x-1 transition-transform duration-300">&gt;</span> 
                        Zur Produktübersicht 
                        <span className="ml-1 group-hover:translate-x-1 transition-transform duration-300">&lt;</span>
</a>
</div>
</div>
</div>
</section>

    </>
  );
}
