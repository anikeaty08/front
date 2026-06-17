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



        function switchView(viewName, scrollTargetId = null) {
            document.querySelectorAll('.view-section').forEach(el => {
                el.classList.remove('active');
            });
            const target = document.getElementById(`view-${viewName}`);
            if (target) {
                target.classList.add('active');
                window.scrollTo({ top: 0, behavior: 'instant' });
            }
            if (scrollTargetId) {
                setTimeout(() => {
                    const el = document.getElementById(scrollTargetId);
                    if(el) el.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            }
        }
        
        // Sticky Nav Style Change on Scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.remove('top-8');
                nav.classList.add('top-0');
            } else {
                nav.classList.add('top-8');
                nav.classList.remove('top-0');
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
      

<div className="bg-[#12392C] text-[#FDFCF8] text-xs text-center py-2 tracking-wide z-50 relative">
<span className="">Bezmaksas piegāde pasūtījumiem virs €75. Ētiski ievākts savvaļā.</span>
</div>

<nav className="fixed w-full z-40 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-[#FDFCF8]/80 backdrop-blur-md border border-[#FDFCF8]/20 shadow-sm rounded-full h-16 flex items-center justify-between px-6 md:px-8">

<button className="md:hidden text-[#4E6A5E]">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>

<a className="md:text-2xl text-xl font-medium text-[#12392C] tracking-tighter font-merriweather relative top-[1px]" href="#" onclick="switchView('home')">DABAS SPĒKS</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-[#4E6A5E]">
<a className="hover:text-[#12392C] transition-colors" href="#shop" onclick="switchView('home', 'shop')">Veikals</a>
<a className="hover:text-[#12392C] transition-colors" href="#difference">Atšķirība</a>
<a className="hover:text-[#12392C] transition-colors" href="#process">Process</a>
<a className="hover:text-[#12392C] transition-colors" href="#journal">Žurnāls</a>
</div>

<div className="flex items-center gap-5 text-[#4E6A5E]">
<button className="hover:text-[#12392C] transition-colors hidden sm:block">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="hover:text-[#12392C] transition-colors relative">
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
<span className="absolute -top-1 -right-1 w-2 h-2 bg-[#3A7649] rounded-full"></span>
</button>
</div>
</div>
</div>
</nav>

<main className="view-section active" id="view-home">

<header className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden bg-[#12392C]">

<div className="absolute inset-0 z-0 video-docker overflow-hidden">
<video autoplay="" className="min-w-full min-h-full absolute object-cover opacity-60" loop="" muted="" playsinline="" src="https://videos.pexels.com/video-files/5501308/5501308-uhd_2560_1440_25fps.mp4" type="video/mp4"></video>

<div className="absolute inset-0 bg-gradient-to-b from-[#12392C]/30 via-transparent to-[#12392C]/90 mix-blend-multiply"></div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-4xl mx-auto px-6 text-center text-[#FDFCF8] mt-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#FDFCF8]/30 bg-[#FDFCF8]/10 backdrop-blur-sm mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-[#A8C4B8] animate-pulse"></span>
<span className="text-[10px] uppercase font-medium tracking-[0.2em]">Pieejams pasūtīšanai</span>
</div>
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-light tracking-tight font-serif mb-8 drop-shadow-lg">Dabas spēks,<br/><span className="italic text-[#A8C4B8]">iepildīts svaigs.</span></h1>
<p className="md:text-xl leading-relaxed text-shadow text-lg font-light text-[#FDFCF8]/90 max-w-2xl mr-auto mb-10 ml-auto">100% dabīgas, pilna auga formulas. Gatavots ar rokām pēc pasūtījuma maksimālai biopieejamībai, izvairoties no masveida ražošanas kompromisiem.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-10 py-4 bg-[#FDFCF8] text-[#12392C] text-sm font-medium tracking-wide hover:bg-[#A8C4B8] transition-colors shadow-xl" href="#shop">
                        Skatīt Kolekciju
                    </a>
<a className="w-full sm:w-auto px-10 py-4 border border-[#FDFCF8]/30 backdrop-blur-sm text-[#FDFCF8] text-sm font-medium hover:bg-[#FDFCF8] hover:text-[#12392C] transition-all" href="#difference">
                        Kāpēc Mēs Atšķiramies
                    </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 text-[#FDFCF8]/50 animate-bounce">
<iconify-icon className="" icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>
</header>

<div className="overflow-hidden bg-[#FDFCF8] border-[#355E44]/10 border-b py-6 relative flex items-center z-10 select-none">
<style>
        @keyframes marquee {
            0% { transform: translateX(0); }
            100% { transform: translateX(-50%); }
        }
        .animate-marquee {
            animation: marquee 60s linear infinite;
        }
    </style>

<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-[#FDFCF8] to-transparent z-20 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-[#FDFCF8] to-transparent z-20 pointer-events-none"></div>

<div className="flex w-fit animate-marquee hover:[animation-play-state:paused]">

<div className="flex gap-16 shrink-0 pr-8 pl-8 gap-x-16 gap-y-16 items-center">
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:leaf-linear" width="18"></iconify-icon> Organisks un Savvaļā Ievākts
    </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:stopwatch-linear" width="18"></iconify-icon> Gatavots Pēc Pasūtījuma
    </div>
<div className="flex md:text-sm uppercase whitespace-nowrap text-xs font-medium text-[#4E6A5E] tracking-widest gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-[#3A7649]" icon="solar:heart-linear" width="18"></iconify-icon> Nav Testēts Uz Dzīvniekiem
    </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:earth-linear" width="18"></iconify-icon> Ilgtspējīgi Iegūts
    </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:test-tube-linear" width="18"></iconify-icon> Laboratoriski Pārbaudīts
    </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:sun-2-linear" width="18"></iconify-icon> 100% Dabīgs
    </div>
</div>

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:leaf-linear" width="18"></iconify-icon> Organisks un Savvaļā Ievākts
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:stopwatch-linear" width="18"></iconify-icon> Gatavots Pēc Pasūtījuma
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:water-drop-linear" width="18"></iconify-icon> Bez Pildvielām
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:jar-logo-linear" width="18"></iconify-icon> Bez Plastmasas
            </div>
</div>

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:leaf-linear" width="18"></iconify-icon> Organisks un Savvaļā Ievākts
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:stopwatch-linear" width="18"></iconify-icon> Gatavots Pēc Pasūtījuma
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:water-drop-linear" width="18"></iconify-icon> Bez Pildvielām
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:jar-logo-linear" width="18"></iconify-icon> Bez Plastmasas
            </div>
</div>

<div className="flex items-center gap-16 px-8 shrink-0">
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:leaf-linear" width="18"></iconify-icon> Organisks un Savvaļā Ievākts
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:stopwatch-linear" width="18"></iconify-icon> Gatavots Pēc Pasūtījuma
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:water-drop-linear" width="18"></iconify-icon> Bez Pildvielām
            </div>
<div className="flex items-center gap-3 text-xs md:text-sm font-medium uppercase tracking-widest text-[#4E6A5E] whitespace-nowrap">
<iconify-icon className="text-[#3A7649]" icon="solar:jar-logo-linear" width="18"></iconify-icon> Bez Plastmasas
            </div>
</div>
</div>
</div>

<section className="max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6" id="difference">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="">
<span className="text-xs font-medium tracking-[0.2em] text-[#355E44] uppercase mb-4 block">Nozares Problēma</span>
<h2 className="text-3xl md:text-5xl font-serif text-[#12392C] mb-6 tracking-tight">Derīguma termiņa kompromiss.</h2>
<p className="leading-relaxed text-lg font-light text-[#4E6A5E] mb-8">Lielākā daļa uztura bagātinātāju tiek ražoti mēnešiem vai pat gadiem pirms tie nonāk pie jums. Lai izturētu laiku veikalu plauktos, tie tiek termiski apstrādāti, apstaroti un piepildīti ar sintētiskiem stabilizatoriem – procesiem, kas iznīcina smalkās fitouzturvielas, kas padara augus dziedinošus.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F0F5F2] flex items-center justify-center shrink-0 text-[#12392C]">
<iconify-icon className="" icon="solar:danger-triangle-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="font-serif text-lg text-[#12392C]">Oksidācija un Degradācija</h4>
<p className="text-sm text-[#4E6A5E]">Masveidā ražoti augi zaudē līdz pat 60% savas potences 6 mēnešu laikā pēc malšanas.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#F0F5F2] flex items-center justify-center shrink-0 text-[#12392C]">
<iconify-icon className="" icon="solar:filters-linear" width="20"></iconify-icon>
</div>
<div className="">
<h4 className="text-lg text-[#12392C] font-serif">Slēptās Piedevas</h4>
<p className="text-sm text-[#4E6A5E]">Stearāti, silīcija dioksīds un glazūras tiek izmantoti, lai paātrinātu ražošanas iekārtas, nevis jūsu veselību.</p>
</div>
</div>
</div>
</div>
<div className="bg-[#F0F5F2] p-8 md:p-12 rounded-lg border border-[#355E44]/10 relative">
<div className="-top-4 -right-4 uppercase text-xs text-[#FDFCF8] tracking-wide bg-[#355E44] pt-2 pr-4 pb-2 pl-4 absolute">"Dabas Spēks" Standarts</div>
<h3 className="font-serif text-2xl text-[#12392C] mb-8">Kāpēc Svaigumam ir Nozīme</h3>
<ul className="space-y-6">
<li className="flex items-center justify-between border-b border-[#355E44]/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#3A7649]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-[#12392C]">Ražošanas Laiks</span>
</div>
<span className="text-sm text-[#4E6A5E] text-right">Gatavots ik nedēļu mazās partijās</span>
</li>
<li className="flex items-center justify-between border-b border-[#355E44]/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#3A7649]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-[#12392C]">Sastāvdaļu Forma</span>
</div>
<span className="text-sm text-[#4E6A5E] text-right">Pilns augs (Bez izolātiem)</span>
</li>
<li className="flex items-center justify-between border-b border-[#355E44]/10 pb-4">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#3A7649]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-[#12392C]">Biopieejamība</span>
</div>
<span className="text-sm text-[#4E6A5E] text-right">Maksimāla (Šķidrums/Pulveris)</span>
</li>
<li className="flex items-center justify-between pb-2">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#3A7649]" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="font-medium text-[#12392C]">Piedevas</span>
</div>
<span className="text-sm text-[#4E6A5E] text-right">Nulle. Nekad.</span>
</li>
</ul>
<div className="mt-8 pt-6 border-t border-[#355E44]/10 text-center">
<p className="text-lg italic text-[#3A7649] font-serif">"Jūs varat sajust vitalitāti."</p>
</div>
</div>
</div>
</section>

<section className="bg-[#12392C] py-24 text-[#FDFCF8] relative overflow-hidden" id="process">
<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(#FDFCF8 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="md:text-5xl text-3xl text-[#FDFCF8] tracking-tight font-serif mb-6">No Dabas, Formulā</h2>
<p className="leading-relaxed font-light text-[#A8C4B8]">Mēs esam lēnas labsajūtas uzņēmums. Tas nozīmē, ka mēs nesteidzinām dabu. Mūsu ekstrakti tiek izturēti vismaz 6 nedēļas, lai nodrošinātu pilna spektra ekstrakciju.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group">
<div className="aspect-video overflow-hidden mb-6 border border-[#FDFCF8]/10 relative">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ab541c82-bd56-4ed7-862b-f9f9ec9a222b_800w.jpg"/>
<div className="text-[10px] uppercase font-bold text-[#12392C] bg-[#FDFCF8] pt-1 pr-2 pb-1 pl-2 absolute top-2 left-2">Solis 01</div>
</div>
<h3 className="text-xl font-serif mb-2">Savvaļas Ievākšana</h3>
<p className="leading-relaxed text-sm font-light text-[#A8C4B8]">Mēs ievācam augus to dabiskajās ekosistēmās to cikla pilnbriedā - saknes rudenī, lapas pavasarī - nodrošinot augstāko ārstniecisko savienojumu koncentrāciju.</p>
</div>

<div className="group">
<div className="aspect-video overflow-hidden mb-6 border border-[#FDFCF8]/10 relative">
<img className="group-hover:scale-105 transition-transform duration-700 opacity-80 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b9f7315b-4b00-4bd2-b4cc-bcd531e1a7fc_800w.jpg"/>
<div className="absolute top-2 left-2 bg-[#FDFCF8] text-[#12392C] text-[10px] font-bold px-2 py-1 uppercase">Solis 02</div>
</div>
<h3 className="text-xl font-serif mb-2">Precīza Sajaukšana</h3>
<p className="leading-relaxed text-sm font-light text-[#A8C4B8]">Mēs rūpīgi izpētām katru sastāvdaļu pirms to apvienošanas sabalansētos, mērķtiecīgos maisījumos. Katra formula ir izstrādāta, lai nodrošinātu kvalitāti, saderību un dabisko sinerģiju.</p>
</div>

<div className="group">
<div className="aspect-video overflow-hidden mb-6 border border-[#FDFCF8]/10 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/83f3b1bd-ec5a-4819-adff-3dd93b11cf89_800w.jpg"/>
<div className="absolute top-2 left-2 bg-[#FDFCF8] text-[#12392C] text-[10px] font-bold px-2 py-1 uppercase">Solis 03</div>
</div>
<h3 className="text-xl font-serif mb-2">Iekapsulēts Pēc Pieprasījuma</h3>
<p className="leading-relaxed text-sm font-light text-[#A8C4B8]">Mēs neuzglabājam preces noliktavās. Kad jūs pasūtāt, mēs iepildam produktu 24 stundu laikā, marķējam ar rokām un nosūtām pa tiešo jums.</p>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-7xl mx-auto px-6" id="shop">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<h2 className="md:text-4xl text-3xl text-[#12392C] tracking-tight font-serif mb-3">Pieprasītākie Produkti</h2>
<p className="font-light text-[#4E6A5E] max-w-md">Formulas, kas sakņojas tradicionālajā ārstniecības augu zinātnē, pielāgotas mūsdienu efektivitātei. (iepakojums var atšķirties)</p>
</div>
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-2">
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-x-8 gap-y-16">

<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-6 overflow-hidden">
<img alt="Calm Tincture" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover hue-rotate-15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7a8fa4f6-b144-4c5b-9e3c-f5f0a0beebf7_800w.png"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur px-3 py-1 text-xs uppercase tracking-wide text-[#12392C] border border-[#355E44]/10">Pirktākais</div>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:underline decoration-[#355E44] underline-offset-4 text-lg text-[#12392C] font-serif mb-1">Dabīgs Hlorofils - 500ml</h3>
<p className="text-xs text-[#4E6A5E] mb-2">Nātrija-Vara Hlorofilīns, Glicerīns, Ūdens</p>
</div>
<span className="text-sm font-medium text-[#355E44]">€16.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-6 overflow-hidden">
<img alt="Digestive Tea" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover hue-rotate-15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/08ae1232-3a79-4e2d-81df-6d6f47c51bd7_800w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:underline decoration-[#355E44] underline-offset-4 text-lg text-[#12392C] font-serif mb-1">Magnēzijs - 375mg (101 Kapsula)</h3>
<p className="text-xs text-[#4E6A5E] mb-2">Magnija oksīds, magnija bisglicināts</p>
</div>
<span className="text-sm font-medium text-[#355E44]">$22.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-6 overflow-hidden">
<img alt="Skin Salve" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover hue-rotate-15" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0d3abf0e-b3b0-4464-b79d-e07c2e7c9af0_800w.png"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="group-hover:underline decoration-[#355E44] underline-offset-4 text-lg text-[#12392C] font-serif mb-1">Egļu Skuju Hlorofila Ekstrakts - 500ml</h3>
<p className="text-xs text-[#4E6A5E] mb-2">Kliņģerīte, Bišu Vasks un Lavanda</p>
</div>
<span className="text-sm font-medium text-[#355E44]">$28.00</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-6 overflow-hidden">
<img alt="Focus Mushroom" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1595981267035-7b04ca84a82d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-lg font-serif text-[#12392C] mb-1 group-hover:underline decoration-[#355E44] underline-offset-4">Skaidrības Eliksīrs</h3>
<p className="text-xs text-[#4E6A5E] mb-2">Lauvas Krēpes Sēne un Ginks</p>
</div>
<span className="text-sm font-medium text-[#355E44]">$38.00</span>
</div>
</div>
</div>
</section>

<section className="bg-[#F0F5F2] py-24 text-[#12392C] relative overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center relative z-10">
<div className="relative order-2 md:order-1">
<img alt="Herbal processing" className="w-full aspect-square object-cover opacity-90 grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eca4a901-ffb7-4996-aea8-ee3ef5979849_1600w.jpg"/>
<div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#D1E0D9] -z-10"></div>
</div>
<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-5xl font-serif text-[#12392C] mb-6 tracking-tight">Sakņojas Tradīcijās.<br/>Balstīts Godīgumā.</h2>
<p className="text-[#4E6A5E] mb-6 leading-relaxed font-light">
                        Aetheris radās no vēlmes atjaunot saikni ar augu dziedinošo valodu. Mēs uzskatām, ka patiesa labsajūta nav saistīta ar salauztā labošanu, bet gan ar ķermeņa dabisko ritmu harmonizēšanu.
                    </p>
<p className="text-[#4E6A5E] mb-8 leading-relaxed font-light">
                        Katra pudele ir gatavota mazās partijās mūsu ar saules enerģiju darbināmajā studijā, izmantojot bioloģiski audzētus vai ētiski savvaļā ievāktus augus. Bez pildvielām, bez sintētiskiem konservantiem — tikai tīra augu gudrība.
                    </p>
<a className="inline-flex items-center gap-2 text-[#12392C] border-b border-[#12392C]/50 pb-1 text-sm hover:text-[#3A7649] hover:border-[#3A7649] transition-colors" href="#">
                        Lasīt Pilnu Stāstu <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#1F574A] text-[#FDFCF8]">
<div className="max-w-xl mx-auto px-6 text-center">
<iconify-icon className="mb-6 opacity-80 text-[#A8C4B8]" icon="solar:letter-linear" width="32"></iconify-icon>
<h2 className="text-3xl font-serif mb-4">Pievienojies Iekšējam Lokam</h2>
<p className="text-[#A8C4B8] font-light mb-8">Saņemiet holistiskus labsajūtas padomus, agrīnu piekļuvi mazajām partijām un 10% atlaidi pirmajam pasūtījumam.</p>
<form className="flex flex-col sm:flex-row gap-4">
<input className="flex-1 bg-transparent border-b border-[#A8C4B8] py-3 px-2 text-[#FDFCF8] placeholder-[#4E6A5E] focus:outline-none focus:border-[#FDFCF8] transition-colors" placeholder="Jūsu e-pasta adrese" type="email"/>
<button className="px-8 py-3 bg-[#12392C] text-[#FDFCF8] text-sm font-medium hover:bg-[#355E44] transition-colors border border-[#12392C] hover:border-[#FDFCF8]" type="button">Abonēt</button>
</form>
<p className="text-[10px] text-[#A8C4B8] mt-4">Abonējot, jūs piekrītat mūsu Privātuma Politikai. Nekāda surogātpasta, nekad.</p>
</div>
</section>
</main>

<main className="view-section pt-32 pb-24" id="view-product">
<div className="max-w-7xl mx-auto px-6">

<div className="flex items-center gap-2 text-xs text-[#4E6A5E] mb-8">
<a className="hover:text-[#12392C]" href="#" onclick="switchView('home')">Sākums</a>
<span className="opacity-50">/</span>
<a className="hover:text-[#12392C]" href="#" onclick="switchView('home', 'shop')">Tinktūras</a>
<span className="opacity-50">/</span>
<span className="text-[#12392C]">Dziļa Miera Tinktūra</span>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">

<div className="lg:col-span-7 space-y-4">
<div className="w-full bg-[#F0F5F2] aspect-[4/5] relative overflow-hidden group">
<img alt="Deep Rest Tincture" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-[#F0F5F2] aspect-square">
<img alt="Texture" className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="bg-[#F0F5F2] aspect-square flex items-center justify-center text-center p-6 border border-[#355E44]/10">
<div>
<h4 className="font-serif text-lg mb-2 text-[#12392C]">Lietošana</h4>
<p className="text-xs text-[#4E6A5E]">Lietojiet 1 pilnu pipeti zem mēles 30 min pirms miega.</p>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 flex flex-col h-full">
<div className="border-b border-[#355E44]/10 pb-6 mb-6">
<div className="flex items-center justify-between mb-2">
<h1 className="text-3xl md:text-4xl font-serif text-[#12392C] tracking-tight">Dziļa Miera Tinktūra</h1>
</div>
<div className="flex items-center gap-4 mb-4">
<span className="text-xl font-medium text-[#355E44]">$34.00</span>
<div className="flex items-center gap-1 text-[#3A7649] text-xs">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<span className="text-[#4E6A5E] ml-1">(42 Atsauksmes)</span>
</div>
</div>
<p className="text-[#4E6A5E] font-light leading-relaxed">
                            Maigs augu maisījums, kas nerada pierašanu, tradicionāli izmantots nervu sistēmas atbalstam un dziļa, atjaunojoša miega veicināšanai. Satur baldriāna sakni, kas ievākta rudenī tās potences pilnbriedā.
                        </p>
</div>

<div className="space-y-4 mb-8">

<label className="block cursor-pointer group">
<input checked="" className="custom-radio hidden peer" name="purchase_type" type="radio"/>
<div className="border border-[#355E44]/20 p-4 flex items-center justify-between group-hover:border-[#355E44] transition-all peer-checked:border-[#12392C] peer-checked:bg-[#F0F5F2]">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-[#355E44]/50 flex items-center justify-center peer-checked:border-[#12392C]">
<div className="radio-dot w-2 h-2 rounded-full bg-[#12392C] transform scale-0 transition-transform"></div>
</div>
<span className="text-sm font-medium text-[#12392C]">Vienreizējs pirkums</span>
</div>
<span className="text-sm text-[#12392C]">$34.00</span>
</div>
</label>

<label className="block cursor-pointer group">
<input className="custom-radio hidden peer" name="purchase_type" type="radio"/>
<div className="border border-[#355E44]/20 p-4 flex items-center justify-between group-hover:border-[#355E44] transition-all peer-checked:border-[#12392C] peer-checked:bg-[#F0F5F2]">
<div className="flex items-center gap-3">
<div className="w-4 h-4 rounded-full border border-[#355E44]/50 flex items-center justify-center peer-checked:border-[#12392C]">
<div className="radio-dot w-2 h-2 rounded-full bg-[#12392C] transform scale-0 transition-transform"></div>
</div>
<div>
<span className="text-sm font-medium block text-[#12392C]">Abonēt un Ietaupīt 15%</span>
<span className="text-xs text-[#4E6A5E]">Piegāde ik pēc 30 dienām. Atceliet jebkurā laikā.</span>
</div>
</div>
<span className="text-sm text-[#355E44]">$28.90</span>
</div>
</label>
</div>

<div className="flex gap-4 mb-8">
<div className="w-24 border border-[#355E44]/20 flex items-center justify-between px-3 text-[#12392C]">
<button className="text-[#4E6A5E] hover:text-[#12392C]">-</button>
<span className="text-sm">1</span>
<button className="text-[#4E6A5E] hover:text-[#12392C]">+</button>
</div>
<button className="flex-1 bg-[#355E44] text-[#FDFCF8] py-3 text-sm font-medium tracking-wide hover:bg-[#12392C] transition-colors shadow-lg shadow-[#355E44]/20">
                            Pievienot Grozam — $34.00
                        </button>
</div>

<div className="border-t border-[#355E44]/10">

<details className="group py-4 border-b border-[#355E44]/10 cursor-pointer">
<summary className="flex items-center justify-between font-serif text-lg list-none text-[#12392C]">
                                Sastāvdaļas
                                <iconify-icon className="group-open:hidden transition-all text-[#355E44]" icon="solar:add-linear"></iconify-icon>
<iconify-icon className="hidden group-open:block transition-all text-[#355E44]" icon="solar:minus-linear"></iconify-icon>
</summary>
<div className="pt-4 text-sm text-[#4E6A5E] font-light leading-relaxed">
<p className="mb-2"> Bioloģiska Baldriāna Sakne (Valeriana officinalis), Bioloģiski Kumelīšu Ziedi (Matricaria recutita), Bioloģiska Ķiverene (Scutellaria lateriflora).</p>
<p> Bioloģisks Cukurniedru Alkohols (45-50%), Destilēts Ūdens.</p>
</div>
</details>
</div>
</div>
</div>

<div className="mt-24 border-t border-[#355E44]/10 pt-16">
<h3 className="text-2xl font-serif mb-8 text-center text-[#12392C]">Pabeidziet Savu Rituālu</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="group cursor-pointer" onclick="switchView('product')">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-4 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h4 className="font-serif text-[#12392C] text-sm">Gremošanas Tēja</h4>
<p className="text-[#355E44] text-xs">$22.00</p>
</div>
<div className="group cursor-pointer">
<div className="relative bg-[#F0F5F2] aspect-[4/5] mb-4 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h4 className="font-serif text-[#12392C] text-sm">Kliņģerīšu Ziede</h4>
<p className="text-[#355E44] text-xs">$28.00</p>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-[#12392C] border-t border-[#355E44]/30 pt-20 pb-10 text-[#FDFCF8]">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-xl font-serif tracking-tighter text-[#FDFCF8] block mb-6" href="#">AETHERIS</a>
<p className="text-[#A8C4B8] text-sm font-light leading-relaxed mb-6">
                    Ar rokām gatavoti augu labsajūtas produkti, lai atbalstītu jūsu ikdienas ritmu. Dabas sakņoti, zinātnes pamatoti.
                </p>
<div className="flex gap-4 text-[#4E6A5E]">
<iconify-icon className="hover:text-[#FDFCF8] cursor-pointer transition-colors" icon="solar:instagram-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-[#FDFCF8] cursor-pointer transition-colors" icon="solar:facebook-linear" width="20"></iconify-icon>
<iconify-icon className="hover:text-[#FDFCF8] cursor-pointer transition-colors" icon="solar:pinterest-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-serif text-[#FDFCF8] mb-6">Veikals</h4>
<ul className="space-y-3 text-sm text-[#A8C4B8] font-light">
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Visi Produkti</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Tinktūras</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Tējas</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Ārīgi Lietojami</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-[#FDFCF8] mb-6">Atbalsts</h4>
<ul className="space-y-3 text-sm text-[#A8C4B8] font-light">
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Sazināties</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Piegāde un Atgriešana</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">BUJ</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-[#FDFCF8] mb-6">Juridiskā Info</h4>
<ul className="space-y-3 text-sm text-[#A8C4B8] font-light">
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Privātuma Politika</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Lietošanas Noteikumi</a></li>
<li><a className="hover:text-[#3A7649] transition-colors" href="#">Atruna</a></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 border-t border-[#355E44]/30 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#4E6A5E] font-light">© 2023 Aetheris Wellness. Visas tiesības aizsargātas.</p>
</div>
</footer>



    </>
  );
}
