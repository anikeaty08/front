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



        // Smooth scroll reveal animations - unified to subtle zoom and fade
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'scale(1)';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal-element').forEach(el => {
                el.style.opacity = '0';
                el.style.transform = 'scale(0.97)';
                el.style.transition = 'opacity 0.6s ease-out, transform 0.6s ease-out';
                observer.observe(el);
            });
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
      

<header className="fixed top-0 left-0 right-0 z-50 px-6 py-4 lg:py-6 flex items-center justify-between bg-[#F8F7F3]/80 backdrop-blur-md border-b border-[#E8E6DF]/50 transition-colors duration-300">
<div className="flex items-center gap-2">
<span className="lg:text-2xl text-2xl font-normal text-[#141414] tracking-tighter font-manrope">Jana Spáčilová</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-xl font-light hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-noto-serif font-manrope" href="#o-mne">O mně</a>
<a className="text-xl font-light hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-noto-serif font-manrope" href="#prostory">Prostory</a>
<a className="text-xl font-light hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-noto-serif font-manrope" href="#sluzby">Služby</a>
<a className="text-xl font-light hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-noto-serif font-manrope" href="#faq">Časté dotazy</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center bg-transparent border border-[#D4D2C9] px-6 py-3 rounded-full text-base font-normal hover:border-[#BE7C64] hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-inter" href="#rezervace">
                Objednat se
            </a>
<button className="md:hidden p-1 text-[#141414] hover:text-[#BE7C64] transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</header>
<main className="flex-grow">

<section className="lg:pt-48 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-24 mb-16 lg:mb-24">
<h1 className="reveal-element leading-[1.02] sm:text-7xl lg:text-[5.5rem] lg:w-3/5 text-6xl font-medium text-[#141414] tracking-tighter font-manrope" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
                    Uvolněte tělo, zklidněte mysl.
                </h1>
<div className="reveal-element lg:w-2/5 flex flex-col items-start lg:pt-6" style={{transitionDelay: '100ms'}}>
<p className="leading-relaxed lg:text-2xl text-2xl font-medium text-[#141414] tracking-tight font-manrope mb-10">
                        Profesionální masáže pro vaši regeneraci a odpočinek v příjemném a bezpečném prostředí.
                    </p>
<a className="inline-flex items-center justify-center bg-[#83907F] text-white px-8 py-4 rounded-full text-xl font-normal hover:bg-[#BE7C64] transition-colors duration-300 w-full sm:w-auto shadow-sm hover:shadow-lg hover:shadow-[#BE7C64]/20 font-inter font-manrope" href="#rezervace">
                        Rezervovat termín
                    </a>

<div className="flex flex-wrap items-center gap-3 mt-8">
<div className="inline-flex items-center gap-2.5 px-4 py-2 rounded-full bg-white border border-[#E8E6DF] shadow-sm cursor-default">
<div className="flex gap-0.5 text-[#BE7C64]">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-sm font-medium text-[#141414] font-inter">Spokojenost u 150+ klientů</span>
</div>
<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white border border-[#E8E6DF] shadow-sm cursor-default">
<iconify-icon className="text-[#83907F]" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
<span className="text-sm font-medium text-[#141414] font-inter">Zrušení zdarma do 24h</span>
</div>
</div>
</div>
</div>
<div className="reveal-element relative w-full group" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 bg-[#BE7C64]/15 rounded-[2rem] translate-x-4 translate-y-4 sm:translate-x-6 sm:translate-y-6"></div>
<div className="aspect-[4/3] md:aspect-[21/9] overflow-hidden flex w-full border-[#E8E6DF] border rounded-[2rem] relative items-center justify-center bg-[#f0eee6] z-10">
<img alt="Prostor pro uklidňující vizuál prostředí" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fdbf4ae8-9e26-4cdc-bfae-f0f8e9dbdf8d_1600w.jpg"/>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#f0eee6] pt-24 pr-6 pb-24 pl-6" id="o-mne">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-24 items-center">
<div className="lg:col-span-5 order-2 lg:order-1 reveal-element" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<div className="relative group">
<div className="absolute inset-0 bg-[#83907F]/15 rounded-[2rem] -translate-x-4 -translate-y-4 sm:-translate-x-6 sm:-translate-y-6"></div>
<div className="aspect-[4/5] rounded-[2rem] relative overflow-hidden flex items-center justify-center border border-[#E8E6DF] bg-white z-10">
<img alt="Portrét Jany Spáčilové" className="grayscale-[20%] w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1d0cb83d-785a-4863-a42f-92b9e246c459_1600w.png"/>
</div>
</div>
</div>
<div className="lg:col-span-7 order-1 lg:order-2 flex flex-col justify-center reveal-element" style={{transitionDelay: '100ms'}}>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight mb-8 text-[#141414] font-manrope">Kdo se o vás postará?</h2>
<div className="space-y-6 text-2xl leading-relaxed font-light text-[#141414]">
<p className="text-xl font-normal font-manrope">
                            Dobrý den, jmenuji se Jana Spáčilová. Věřím, že kvalitní masáž není luxus, ale nezbytná součást péče o vaše fyzické i duševní zdraví.
                        </p>
<p className="text-xl font-normal font-manrope">
                            Ke každému klientovi přistupuji individuálně s ohledem na jeho potřeby – ať už vás trápí ztuhlá záda z kanceláře, potřebujete sportovní regeneraci, nebo jen hledáte chvíli absolutního klidu.
                        </p>
<p className="text-xl font-normal font-manrope">
                            U mě v salonu jste v bezpečných a profesionálních rukou. Těším se na vaši návštěvu.
                        </p>
</div>

<div className="flex flex-wrap gap-3 mt-10">
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E8E6DF] text-sm font-medium text-[#141414] shadow-sm font-inter">
<iconify-icon className="text-[#83907F]" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon>
                            Certifikovaná terapeutka
                        </span>
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E8E6DF] text-sm font-medium text-[#141414] shadow-sm font-inter">
<iconify-icon className="text-[#83907F]" height="18" icon="solar:users-group-two-rounded-linear" width="18"></iconify-icon>
                            Individuální přístup
                        </span>
<span className="inline-flex items-center gap-1.5 px-4 py-2 rounded-full bg-white border border-[#E8E6DF] text-sm font-medium text-[#141414] shadow-sm font-inter">
<iconify-icon className="text-[#83907F]" height="18" icon="solar:health-linear" width="18"></iconify-icon>
                            Prokazatelná úleva
                        </span>
</div>
</div>
</div>
</section>

<section className="lg:py-32 py-24 px-6" id="prostory">
<div className="max-w-7xl mx-auto">
<div className="reveal-element flex flex-col md:flex-row mb-16 gap-x-6 gap-y-6 justify-between" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>
<h2 className="text-4xl sm:text-5xl font-normal tracking-tight text-[#141414] font-manrope">Prostředí stvořené pro relaxaci</h2>
<p className="text-xl text-[#8C877D] font-inter max-w-md font-manrope">Klidná oáza uprostřed města, kde můžete nechat starosti za dveřmi.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
<div className="reveal-element relative group" style={{transitionDelay: '0ms'}}>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-[#E8E6DF] bg-white">
<img alt="Masérské lehátko" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="reveal-element relative group" style={{transitionDelay: '100ms'}}>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-[#E8E6DF] bg-white">
<img alt="Detail prostředí" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="reveal-element relative group" style={{transitionDelay: '200ms'}}>
<div className="aspect-[4/5] rounded-[2rem] overflow-hidden relative z-10 border border-[#E8E6DF] bg-white">
<img alt="Relaxační zóna" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-[1.03]" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#f0eee6] pt-24 pr-6 pb-24 pl-6 border-y border-[#E8E6DF]/50" id="sluzby">
<div className="max-w-4xl mx-auto">
<h2 className="reveal-element text-4xl sm:text-5xl font-normal tracking-tight mb-16 lg:mb-20 text-center text-[#141414] font-manrope" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>Vyberte si svou péči</h2>
<div className="flex flex-col gap-10 lg:gap-14">

<div className="reveal-element flex flex-col group cursor-default" style={{transitionDelay: '0ms'}}>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2 sm:gap-4">
<h3 className="text-3xl font-medium text-[#141414] group-hover:text-[#BE7C64] transition-colors duration-300 tracking-tight font-manrope">Relaxační masáž</h3>
<div className="flex-grow border-b-2 border-dotted border-[#D4D2C9] mx-4 relative top-[-6px] hidden sm:block opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#BE7C64]/50"></div>
<span className="text-2xl whitespace-nowrap text-[#141414] font-manrope">900 Kč</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
<p className="text-xl font-light text-[#141414] font-noto-serif font-manrope">Celkové uvolnění stresu a napětí</p>
<span className="text-base font-normal bg-white transition-colors duration-300 px-5 py-2 rounded-full border border-[#E8E6DF] group-hover:border-[#BE7C64]/20 group-hover:text-[#BE7C64] text-[#141414] font-inter">60 min</span>
</div>
</div>

<div className="reveal-element flex flex-col group cursor-default" style={{transitionDelay: '50ms'}}>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2 sm:gap-4">
<h3 className="text-3xl font-medium text-[#141414] group-hover:text-[#BE7C64] transition-colors duration-300 tracking-tight font-manrope flex items-center flex-wrap gap-3">
                                Sportovní a hloubková masáž
                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-medium bg-[#BE7C64]/10 text-[#BE7C64] border border-[#BE7C64]/20 font-inter tracking-normal uppercase">Nejčastější volba</span>
</h3>
<div className="flex-grow border-b-2 border-dotted border-[#D4D2C9] mx-4 relative top-[-6px] hidden sm:block opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#BE7C64]/50"></div>
<span className="text-2xl whitespace-nowrap text-[#141414] font-manrope">1 000 Kč</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
<p className="text-xl font-light text-[#141414] font-noto-serif font-manrope">Pro aktivní lidi a ztuhlé svaly</p>
<span className="text-base font-normal bg-white transition-colors duration-300 px-5 py-2 rounded-full border border-[#E8E6DF] group-hover:border-[#BE7C64]/20 group-hover:text-[#BE7C64] text-[#141414] font-inter">60 min</span>
</div>
</div>

<div className="reveal-element flex flex-col group cursor-default" style={{transitionDelay: '100ms'}}>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2 sm:gap-4">
<h3 className="text-3xl font-medium text-[#141414] group-hover:text-[#BE7C64] transition-colors duration-300 tracking-tight font-manrope">Masáž zad a šíje</h3>
<div className="flex-grow border-b-2 border-dotted border-[#D4D2C9] mx-4 relative top-[-6px] hidden sm:block opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#BE7C64]/50"></div>
<span className="text-2xl whitespace-nowrap text-[#141414] font-manrope">550 Kč</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
<p className="text-xl font-light text-[#141414] font-noto-serif font-manrope">Rychlá úleva od bolesti</p>
<span className="text-base font-normal bg-white transition-colors duration-300 px-5 py-2 rounded-full border border-[#E8E6DF] group-hover:border-[#BE7C64]/20 group-hover:text-[#BE7C64] text-[#141414] font-inter">30 min</span>
</div>
</div>

<div className="reveal-element flex flex-col group cursor-default" style={{transitionDelay: '150ms'}}>
<div className="flex flex-col sm:flex-row sm:justify-between sm:items-baseline mb-3 gap-2 sm:gap-4">
<h3 className="text-3xl font-medium text-[#141414] group-hover:text-[#BE7C64] transition-colors duration-300 tracking-tight font-manrope">Královská masáž</h3>
<div className="flex-grow border-b-2 border-dotted border-[#D4D2C9] mx-4 relative top-[-6px] hidden sm:block opacity-40 transition-all duration-300 group-hover:opacity-100 group-hover:border-[#BE7C64]/50"></div>
<span className="text-2xl whitespace-nowrap text-[#141414] font-manrope">1 300 Kč</span>
</div>
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-3">
<p className="text-xl font-light text-[#141414] font-noto-serif font-manrope">Celotělová péče včetně chodidel a hlavy</p>
<span className="text-base font-normal bg-white transition-colors duration-300 px-5 py-2 rounded-full border border-[#E8E6DF] group-hover:border-[#BE7C64]/20 group-hover:text-[#BE7C64] text-[#141414] font-inter">90 min</span>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="reveal-element text-4xl sm:text-5xl font-normal tracking-tight mb-16 text-center text-[#141414] font-manrope" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>Co říkají moji klienti</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="reveal-element bg-white p-10 rounded-[2rem] border border-[#E8E6DF] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-8 h-full" style={{transitionDelay: '0ms'}}>
<div className="flex gap-1.5 text-[#BE7C64]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl text-[#141414] font-noto-serif leading-relaxed italic flex-grow font-manrope">"Nejlepší masáž, jakou jsem kdy zažila. Jana má opravdu zlaté ruce, naprosto přesně pozná, kde je problém. Prostředí je navíc úžasně uklidňující."</p>
<div className="pt-6 border-t border-[#E8E6DF]/80 flex items-center gap-4">
<img alt="Klára Novotná" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<p className="text-lg font-normal text-[#141414] font-inter">Klára Novotná</p>
<p className="text-base text-[#8C877D] font-inter mt-1">Pravidelná klientka</p>
</div>
</div>
</div>

<div className="reveal-element bg-white p-10 rounded-[2rem] border border-[#E8E6DF] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-8 h-full" style={{transitionDelay: '100ms'}}>
<div className="flex gap-1.5 text-[#BE7C64]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl text-[#141414] font-noto-serif leading-relaxed italic flex-grow font-manrope">"Měl jsem dlouhodobé problémy se ztuhlými zády z kanceláře. Po pár návštěvách u Jany se cítím jako nový člověk. Velmi profesionální přístup."</p>
<div className="pt-6 border-t border-[#E8E6DF]/80 flex items-center gap-4">
<img alt="Tomáš Dvořák" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<p className="text-lg font-normal text-[#141414] font-inter">Tomáš Dvořák</p>
<p className="text-base text-[#8C877D] font-inter mt-1">Sportovní masáž</p>
</div>
</div>
</div>

<div className="reveal-element bg-white p-10 rounded-[2rem] border border-[#E8E6DF] shadow-sm hover:shadow-lg transition-shadow duration-300 flex flex-col gap-8 h-full" style={{transitionDelay: '200ms'}}>
<div className="flex gap-1.5 text-[#BE7C64]">
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon height="20" icon="solar:star-bold" width="20"></iconify-icon>
</div>
<p className="text-xl text-[#141414] font-noto-serif leading-relaxed italic flex-grow font-manrope">"Královská masáž byla opravdovým zážitkem. Hodina a půl naprostého úniku od reality. Vřele doporučuji všem, kdo si chtějí odpočinout."</p>
<div className="pt-6 border-t border-[#E8E6DF]/80 flex items-center gap-4">
<img alt="Petra Svobodová" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=150&amp;h=150"/>
<div>
<p className="text-lg font-normal text-[#141414] font-inter">Petra Svobodová</p>
<p className="text-base text-[#8C877D] font-inter mt-1">Relaxační masáž</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-[#f0eee6] px-6 py-24" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="reveal-element text-4xl sm:text-5xl font-normal tracking-tight mb-12 text-center text-[#141414] font-manrope" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>Na co se často ptáte</h2>
<div className="flex flex-col">

<div className="reveal-element group border-b border-[#E8E6DF] py-8 cursor-pointer" onclick="const content = this.querySelector('.faq-content'); const icon = this.querySelector('.faq-icon'); const isActive = content.style.gridTemplateRows === '1fr'; content.style.gridTemplateRows = isActive ? '0fr' : '1fr'; content.style.opacity = isActive ? '0' : '1'; icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';" style={{transitionDelay: '0ms'}}>
<div className="flex justify-between items-center text-2xl sm:text-3xl font-normal tracking-tight text-[#141414] font-manrope">
                            Co si mám vzít na sebe?
                            <span className="text-[#A3A09A] group-hover:text-[#BE7C64] transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="faq-icon transition-transform duration-300 ease-out" height="32" icon="solar:alt-arrow-down-linear" style={{transform: 'rotate(180deg)'}} width="32"></iconify-icon>
</span>
</div>
<div className="faq-content grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '1fr', opacity: '1'}}>
<div className="overflow-hidden">
<p className="pt-8 text-xl leading-relaxed font-light sm:pr-12 text-[#141414] font-noto-serif font-manrope">
                                    Nemusíte se nijak speciálně oblékat. Při masáži budete přikryti dekou a odkrývá se vždy jen ta část těla, která se zrovna masíruje. Vaše soukromí a komfort jsou prioritou.
                                </p>
</div>
</div>
</div>

<div className="reveal-element group border-b border-[#E8E6DF] py-8 cursor-pointer" onclick="const content = this.querySelector('.faq-content'); const icon = this.querySelector('.faq-icon'); const isActive = content.style.gridTemplateRows === '1fr'; content.style.gridTemplateRows = isActive ? '0fr' : '1fr'; content.style.opacity = isActive ? '0' : '1'; icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';" style={{transitionDelay: '100ms'}}>
<div className="flex justify-between items-center text-2xl sm:text-3xl font-normal tracking-tight text-[#141414] font-manrope">
                            Bude masáž bolet?
                            <span className="text-[#A3A09A] group-hover:text-[#BE7C64] transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="faq-icon transition-transform duration-300 ease-out" height="32" icon="solar:alt-arrow-down-linear" style={{transform: 'rotate(0deg)'}} width="32"></iconify-icon>
</span>
</div>
<div className="faq-content grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr', opacity: '0'}}>
<div className="overflow-hidden">
<p className="pt-8 text-xl leading-relaxed font-light sm:pr-12 text-[#141414] font-noto-serif font-manrope">
                                    U relaxační masáže rozhodně ne. U sportovní a hloubkové masáže můžeme narazit na ztuhlá místa, ale tlak vždy přizpůsobuji vaší toleranci. Neustále s vámi během terapie komunikuji.
                                </p>
</div>
</div>
</div>

<div className="reveal-element group py-8 cursor-pointer" onclick="const content = this.querySelector('.faq-content'); const icon = this.querySelector('.faq-icon'); const isActive = content.style.gridTemplateRows === '1fr'; content.style.gridTemplateRows = isActive ? '0fr' : '1fr'; content.style.opacity = isActive ? '0' : '1'; icon.style.transform = isActive ? 'rotate(0deg)' : 'rotate(180deg)';" style={{transitionDelay: '200ms'}}>
<div className="flex justify-between items-center text-2xl sm:text-3xl font-normal tracking-tight text-[#141414] font-manrope">
                            Kde vás najdu a kde zaparkuji?
                            <span className="text-[#A3A09A] group-hover:text-[#BE7C64] transition-colors duration-300 flex items-center justify-center">
<iconify-icon className="faq-icon transition-transform duration-300 ease-out" height="32" icon="solar:alt-arrow-down-linear" style={{transform: 'rotate(0deg)'}} width="32"></iconify-icon>
</span>
</div>
<div className="faq-content grid transition-all duration-300 ease-in-out" style={{gridTemplateRows: '0fr', opacity: '0'}}>
<div className="overflow-hidden">
<p className="pt-8 text-xl leading-relaxed font-light sm:pr-12 text-[#141414] font-noto-serif font-manrope">
                                    Můj salon se nachází v klidné části města. Přímo před budovou je vyhrazené parkovací místo speciálně pro klienty.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 px-6 py-24" id="rezervace">
<div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24">
<div className="flex flex-col justify-center">

<h2 className="reveal-element sm:text-5xl lg:text-6xl leading-[1.1] text-4xl font-normal text-[#141414] tracking-tight font-manrope mb-4" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>Zastavte se na chvíli a objednejte se.</h2>
<p className="reveal-element text-xl text-[#8C877D] font-inter mb-10" style={{transition: 'opacity 0.6s ease-out, transform 0.6s ease-out'}}>Rezervace vám zabere jen minutu. Neplatíte nic předem.</p>
<div className="mt-8 space-y-10">
<div className="reveal-element flex items-start gap-5 group" style={{transitionDelay: '0ms'}}>
<div className="p-4 flex items-center justify-center rounded-full bg-white text-[#83907F] shadow-sm group-hover:bg-[#BE7C64] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:phone-linear" width="24"></iconify-icon>
</div>
<div className="pt-1">
<p className="text-base font-normal text-[#A3A09A] mb-1 uppercase tracking-widest font-inter">Telefon</p>
<a className="text-2xl hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-manrope inline-block" href="tel:+420123456789">+420 123 456 789</a>
</div>
</div>
<div className="reveal-element flex items-start gap-5 group" style={{transitionDelay: '100ms'}}>
<div className="p-4 flex items-center justify-center rounded-full bg-white text-[#83907F] shadow-sm group-hover:bg-[#BE7C64] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div className="pt-1">
<p className="text-base font-normal text-[#A3A09A] mb-1 uppercase tracking-widest font-inter">E-mail</p>
<a className="text-2xl hover:text-[#BE7C64] transition-colors duration-300 text-[#141414] font-manrope inline-block" href="mailto:info@janaspacilova.cz">info@janaspacilova.cz</a>
</div>
</div>
<div className="reveal-element flex items-start gap-5 group" style={{transitionDelay: '200ms'}}>
<div className="p-4 flex items-center justify-center rounded-full bg-white text-[#83907F] shadow-sm group-hover:bg-[#BE7C64] group-hover:text-white transition-colors duration-300">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
<div className="pt-1">
<p className="text-base font-normal text-[#A3A09A] mb-1 uppercase tracking-widest font-inter">Adresa</p>
<p className="text-2xl leading-relaxed text-[#141414] font-manrope">
                                    Klidná ulice 42, Praha<br/>
<span className="text-base text-[#8C877D] font-inter mt-2 block">(přesnou adresu vám zašlu po rezervaci)</span>
</p>
</div>
</div>
</div>
</div>

<div className="reveal-element lg:p-4 min-h-[600px] w-full flex flex-col overflow-hidden bg-white border-[#E8E6DF] border rounded-[2rem] p-2 relative shadow-sm hover:shadow-xl transition-shadow duration-500" style={{transitionDelay: '300ms'}}>
<div className="cal-inline-container relative z-10 rounded-[1.5rem]" id="my-cal-inline-mock-test" style={{width: '100%', height: '100%', minHeight: '600px', overflow: 'hidden'}}>
<iframe frameborder="0" height="100%" src="https://cal.com/cal/30min" style={{minHeight: '600px', borderRadius: '1.5rem'}} title="Rezervace termínu" width="100%"></iframe>
</div>
</div>
</div>
</section>
</main>

<footer className="pt-24 pb-10 px-6 bg-[#141414] text-[#E8E6DF]">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-16 lg:gap-8 mb-20">
<div className="md:col-span-5 flex flex-col items-start">
<span className="text-3xl font-medium tracking-tight text-white mb-8 block font-manrope">Jana Spáčilová</span>
<p className="text-xl font-light text-[#A3A09A] max-w-sm leading-relaxed font-noto-serif font-manrope">
                    Profesionální péče o vaše tělo i mysl. Zastavte se, nadechněte a dopřejte si zasloužený odpočinek.
                </p>
</div>
<div className="md:col-span-3 flex flex-col gap-6">
<h4 className="font-normal text-white uppercase tracking-widest text-base font-inter">Rychlé odkazy</h4>
<nav className="flex flex-col gap-4">
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="#o-mne">O mně</a>
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="#prostory">Prostory</a>
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="#sluzby">Služby a ceník</a>
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="#faq">Časté dotazy</a>
</nav>
</div>
<div className="md:col-span-4 flex flex-col gap-6">
<h4 className="font-normal text-white uppercase tracking-widest text-base font-inter">Kontakt &amp; Otevírací doba</h4>
<div className="flex flex-col gap-4">
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="tel:+420123456789">+420 123 456 789</a>
<a className="text-[#A3A09A] hover:text-[#BE7C64] transition-colors duration-300 text-lg font-inter w-fit" href="mailto:info@janaspacilova.cz">info@janaspacilova.cz</a>
<div className="mt-4 text-[#A3A09A] text-lg font-inter flex flex-col gap-2">
<p className="flex justify-between w-48"><span>Po - Pá:</span> <span className="text-white">9:00 - 18:00</span></p>
<p className="flex justify-between w-48"><span>So - Ne:</span> <span className="text-[#BE7C64]">Zavřeno</span></p>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-white/10 flex flex-col sm:flex-row justify-between items-center gap-6 text-center sm:text-left text-base font-normal text-[#A3A09A]">
<p className="font-inter">Copyright ©2026 Jana Spáčilová. Všechna práva vyhrazena.</p>
<p className="flex items-center gap-2 justify-center font-inter">
                Vytvořeno s <iconify-icon className="text-[#BE7C64]" height="16" icon="solar:heart-linear" width="16"></iconify-icon> pro váš odpočinek
            </p>
</div>
</footer>


    </>
  );
}
