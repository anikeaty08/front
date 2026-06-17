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



        // Scroll Reveal Observer
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('in-view');
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));
        });

        // Navbar blur effect on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm', 'bg-white/90');
                nav.classList.remove('bg-[#FAF7F5]/80');
            } else {
                nav.classList.remove('shadow-sm', 'bg-white/90');
                nav.classList.add('bg-[#FAF7F5]/80');
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-500 border-b border-transparent bg-[#FAF7F5]/80 backdrop-blur-md" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="font-serif text-xl font-medium tracking-tight hover:opacity-70 transition-opacity" href="#">
                Kadeřnictví <span className="italic text-stone-500">Karolína Tomšů</span>
</a>
<div className="hidden md:flex gap-8 text-sm font-medium tracking-wide text-stone-600">
<a className="hover:text-black transition-colors" href="#about">O nás</a>
<a className="hover:text-black transition-colors" href="#pricing">Ceník</a>
<a className="hover:text-black transition-colors" href="#contact">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-stone-900 text-white px-5 py-2 rounded-full text-xs font-medium hover:bg-stone-700 transition-colors" href="tel:+420723348638">
<iconify-icon icon="solar:phone-calling-linear" width="16"></iconify-icon>
                +420 723 348 638
            </a>

<button className="md:hidden text-stone-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center px-6 pt-24 pb-12 overflow-hidden">
<div className="max-w-7xl mx-auto w-full grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="order-2 md:order-1 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-stone-200 text-[10px] uppercase tracking-widest font-medium mb-6 animate-drift">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                    Daniel System Studio
                </div>
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl leading-[1.1] tracking-tight mb-6 animate-drift delay-100 text-stone-900">
                    Váš styl,<br/>
<span className="italic text-stone-500">vaše krása.</span>
</h1>
<p className="max-w-md text-stone-600 text-base leading-relaxed mb-8 animate-drift delay-200">
                    Ahoj, jmenuji se Karolína, a celý svůj život jsem věnovala své vášni - kadeřnictví. Přijďte si odpočinout a nechte o sebe pečovat.
                </p>
<div className="flex flex-wrap gap-4 animate-drift delay-300">
<a className="px-8 py-3.5 rounded-full bg-stone-900 text-white text-sm font-medium hover:scale-105 transition-transform duration-300" href="#pricing">
                        Zobrazit ceník
                    </a>
<a className="px-8 py-3.5 rounded-full bg-white border border-stone-200 text-stone-900 text-sm font-medium hover:bg-stone-50 transition-colors" href="#contact">
                        Kde nás najdete
                    </a>
</div>
</div>
<div className="order-1 md:order-2 relative h-[50vh] md:h-[80vh] w-full animate-drift delay-200 group">
<div className="absolute inset-0 bg-stone-200 rounded-[2rem] overflow-hidden">
<img alt="Kadeřnictví interiér" className="w-full h-full object-cover transition-transform duration-[2000ms] group-hover:scale-105 opacity-90" src="https://images.unsplash.com/photo-1633681926022-84c23e8cb2d6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-sm p-6 rounded-xl border border-white/50 shadow-sm hidden md:block">
<div className="flex justify-between items-center">
<div>
<p className="font-serif text-lg text-stone-900">Otevírací doba</p>
<p className="text-xs text-stone-500 uppercase tracking-wide">Pondělí - Pátek</p>
</div>
<div className="text-right">
<p className="font-medium text-stone-900">7:30 - 20:00</p>
<p className="text-[10px] text-stone-400">Víkendy zavřeno</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">

<div className="md:col-span-5 grid gap-4 reveal-element">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100">
<img alt="Karolína Tomšů" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/310a9fe6-8bcf-4cc8-b451-dd9631478acb_800w.webp"/>
</div>
</div>

<div className="md:col-span-7 md:pl-12 pt-8 reveal-element delay-100">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-stone-400" icon="solar:star-fall-linear" width="24"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-widest text-stone-500">Můj příběh</span>
</div>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 mb-8 tracking-tight">
                        Karolína Tomšů
                    </h2>
<div className="space-y-6 text-stone-600 leading-relaxed font-light text-base md:text-lg">
<p>
                            Mou bohatou zkušeností a dlouholetou praxí jsem si vybudovala pevné místo ve světě kadeřnictví. Moje práce je pro mě nejen povoláním, ale také způsobem života. Vždy se snažím být o krok před ostatními a sledovat nejnovější trendy a techniky.
                        </p>
<p>
                            Jsem velmi komunikativní a ráda navazuji přátelský vztah se svými zákazníky. Vytvářím v salonu příjemnou atmosféru, ve které se lidé cítí pohodlně a mohou se mi svěřit se svými představami a přáními.
                        </p>
<div className="p-6 bg-[#FAF7F5] rounded-xl border border-stone-100">
<p className="italic text-stone-800 font-serif">
                                "Věřím, že kromě umění vytvářet úchvatné účesy je také důležité pečovat o zdraví vlasů. Proto ráda sdílím své znalosti a doporučuji správnou péči."
                            </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAF7F5]" id="pricing">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal-element">
<span className="text-xs font-medium uppercase tracking-widest text-stone-500 mb-3 block">Služby</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 tracking-tight">Ceník služeb</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 reveal-element delay-100 hover:border-stone-300 transition-colors duration-300">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:user-hand-up-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-900">Dámské</h3>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Mytí + Foukaná <span className="text-xs text-stone-400 block mt-1">0,5 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 450,-</span>
</li>
<div className="h-px bg-stone-100 w-full"></div>
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Střih + Barvení <span className="text-xs text-stone-400 block mt-1">2,5 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 1 100,-</span>
</li>
<div className="h-px bg-stone-100 w-full"></div>
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Střih + Melír <span className="text-xs text-stone-400 block mt-1">3 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 1 300,-</span>
</li>
<div className="h-px bg-stone-100 w-full"></div>
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Společenský účes <span className="text-xs text-stone-400 block mt-1">2 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 550,-</span>
</li>
<div className="h-px bg-stone-100 w-full"></div>
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Malibu C čištění <span className="text-xs text-stone-400 block mt-1">Hloubkové čištění vlasu, 2 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 800,-</span>
</li>
</ul>
</div>

<div className="bg-white p-8 md:p-10 rounded-2xl shadow-sm border border-stone-100 reveal-element delay-200 hover:border-stone-300 transition-colors duration-300">
<div className="flex items-center gap-3 mb-8">
<div className="w-10 h-10 rounded-full bg-[#FAF7F5] flex items-center justify-center text-stone-900">
<iconify-icon icon="solar:scissors-square-linear" width="20"></iconify-icon>
</div>
<h3 className="font-serif text-2xl text-stone-900">Pánské &amp; Dětské</h3>
</div>
<ul className="space-y-6">
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Střih Základ <span className="text-xs text-stone-400 block mt-1">0,5 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 290,-</span>
</li>
<div className="h-px bg-stone-100 w-full"></div>
<li className="flex justify-between items-baseline group">
<span className="text-stone-600 group-hover:text-stone-900 transition-colors">Střih Komplet <span className="text-xs text-stone-400 block mt-1">1 hod</span></span>
<span className="font-medium text-stone-900 shrink-0 ml-4">od 350,-</span>
</li>
</ul>

<div className="mt-12 p-6 rounded-xl bg-stone-900 text-white text-center">
<h4 className="font-serif text-lg mb-2">Chcete se objednat?</h4>
<p className="text-stone-400 text-sm mb-4">Zavolejte nám a domluvte si termín, který vám vyhovuje.</p>
<a className="inline-flex items-center gap-2 text-sm font-medium hover:text-stone-300 transition-colors" href="tel:+420723348638">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon> +420 723 348 638
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white border-t border-stone-100" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-12 reveal-element">
<div>
<h2 className="font-serif text-4xl text-stone-900 mb-6">Navštivte nás</h2>
<p className="text-stone-600 text-lg font-light">
                            Najdete nás v Praze 4 v Daniel System Studiu. Těším se na vaši návštěvu.
                        </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-2">
<div className="flex items-center gap-2 text-stone-900 font-medium mb-1">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
                                Adresa
                            </div>
<p className="text-stone-600">Daniel System Studio</p>
<p className="text-stone-600">Táborská 25</p>
<p className="text-stone-600">140 00 Praha 4</p>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-stone-900 font-medium mb-1">
<iconify-icon icon="solar:clock-circle-linear" width="20"></iconify-icon>
                                Otevírací doba
                            </div>
<div className="flex justify-between max-w-[200px]">
<span className="text-stone-600">Po - Pá</span>
<span className="text-stone-900 font-medium">7:30 - 20:00</span>
</div>
<div className="flex justify-between max-w-[200px]">
<span className="text-stone-600">So - Ne</span>
<span className="text-stone-400">Zavřeno</span>
</div>
</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-stone-900 font-medium mb-1">
<iconify-icon icon="solar:smartphone-linear" width="20"></iconify-icon>
                                Kontakt
                            </div>
<p className="text-stone-600">Karolína Tomšů</p>
<a className="text-stone-900 border-b border-stone-300 hover:border-stone-900 transition-colors inline-block pt-1" href="tel:+420723348638">
                                +420 723 348 638
                            </a>
</div>
</div>
</div>

<div className="h-[400px] w-full rounded-2xl overflow-hidden bg-stone-100 reveal-element delay-200 shadow-sm border border-stone-100 relative group">

<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2561.428784745814!2d14.43851537686776!3d50.05948311542456!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x470b947c6e64303d%3A0xe549079927d6056b!2sT%C3%A1borsk%C3%A1%2025%2C%20140%2000%20Praha%204-Nusle!5e0!3m2!1scs!2scz!4v1686600000000!5m2!1scs!2scz" style={{border: '0', filter: 'grayscale(100%) contrast(0.9)'}} width="100%"></iframe>
<div className="absolute inset-0 pointer-events-none border border-black/5 rounded-2xl"></div>
</div>
</div>
</div>
</section>

<footer className="bg-stone-900 text-stone-400 py-12 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<p className="text-white font-serif text-lg tracking-wide">Kadeřnictví Karolína Tomšů</p>
<p className="text-xs mt-1 opacity-60">© 2023 Všechna práva vyhrazena.</p>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="hover:text-white transition-colors" href="#">Cookies</a>
<span className="w-1 h-1 bg-stone-700 rounded-full"></span>
<span className="hover:text-white transition-colors cursor-default">Praha 4</span>
</div>
</div>
</footer>



    </>
  );
}
