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
darkMode: 'media',
theme: {
extend: {
colors: {
neutral: {
100: '#F5F5F5',
800: '#262626',
900: '#171717',
},
blue: {
500: '#3B82F6',
600: '#2563EB',
}
},
boxShadow: {
'md': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Tab switching logic
        function switchTab(tabId) {
            // Hide all contents
            document.querySelectorAll('.tab-content').forEach(el => {
                el.classList.remove('active');
            });
            // Reset all buttons
            document.querySelectorAll('.tab-btn').forEach(el => {
                el.classList.remove('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-blue-600', 'dark:text-blue-400');
                el.classList.add('text-neutral-500');
            });
            
            // Show selected content
            document.getElementById(tabId).classList.add('active');
            
            // Highlight selected button
            const activeBtnId = 'btn-' + tabId.split('-')[1];
            const activeBtn = document.getElementById(activeBtnId);
            activeBtn.classList.remove('text-neutral-500');
            activeBtn.classList.add('bg-white', 'dark:bg-neutral-700', 'shadow-sm', 'text-blue-600', 'dark:text-blue-400');
        }

        // Modal toggle logic
        function toggleOrderModal() {
            const modal = document.getElementById('order-modal');
            const content = document.getElementById('modal-content');
            
            if (modal.classList.contains('hidden')) {
                // Open
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                // Small delay for transition
                setTimeout(() => {
                    content.classList.remove('scale-95', 'opacity-0');
                    content.classList.add('scale-100', 'opacity-100');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent background scrolling
            } else {
                // Close
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    modal.classList.add('hidden');
                    modal.classList.remove('flex');
                    document.body.style.overflow = '';
                }, 200);
            }
        }
    
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
      

<div className="fixed inset-0 -z-20 parallax-bg opacity-10 dark:opacity-5"></div>
<div className="fixed inset-0 -z-10 bg-gradient-to-b from-neutral-100/50 to-neutral-100 dark:from-neutral-900/50 dark:to-neutral-900"></div>

<header className="fixed top-0 inset-x-0 z-50 glass-card rounded-b-3xl shadow-sm mx-auto max-w-7xl border-t-0">
<div className="container mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<span className="font-heading text-2xl tracking-tight text-blue-500 group-hover:opacity-80 transition-opacity">Sky.</span>
<span className="text-xs font-medium text-neutral-500 dark:text-neutral-400 hidden sm:block tracking-wide mt-1">poke &amp; bubble tea</span>
</a>
<nav className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="text-neutral-600 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors" href="#menu">Menu</a>
<a className="text-neutral-600 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors" href="#recensioni">Recensioni</a>
<a className="text-neutral-600 hover:text-blue-500 dark:text-neutral-300 dark:hover:text-blue-400 transition-colors" href="#location">Dove Siamo</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden sm:flex items-center gap-2 bg-blue-500 hover:bg-blue-600 text-white px-5 py-2 rounded-full text-sm font-medium transition-all shadow-md hover:shadow-lg focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 dark:focus:ring-offset-neutral-900" onclick="toggleOrderModal()">
                    Ordina Online
                </button>
<button className="md:hidden text-neutral-600 dark:text-neutral-300">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</header>
<main className="container mx-auto px-4 sm:px-6 pt-28 pb-20 max-w-7xl flex flex-col gap-8">

<section className="glass-card rounded-[2rem] shadow-md p-8 sm:p-12 animate-blur-seq overflow-hidden relative">

<div className="absolute -top-32 -right-32 w-96 h-96 bg-blue-500/10 dark:bg-blue-500/20 rounded-full blur-3xl pointer-events-none"></div>
<div className="grid lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="flex flex-col gap-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 dark:bg-blue-500/20 text-blue-600 dark:text-blue-400 rounded-full w-fit text-xs font-medium">
<iconify-icon icon="solar:map-point-bold-duotone" width="16"></iconify-icon>
                        Via Italia 16, Seriate
                    </div>
<h1 className="text-5xl sm:text-6xl lg:text-[4rem] tracking-tight leading-[1.1] text-neutral-900 dark:text-white">
                        Poké abbondanti <br/>
<span className="text-neutral-400 dark:text-neutral-500">&amp;</span> Bubble Tea.
                    </h1>
<p className="text-lg sm:text-xl text-neutral-600 dark:text-neutral-300 max-w-md leading-relaxed">
                        Freschi, generosi e pronti in un attimo. Delivery e asporto tutti i giorni dalle 11:00 alle 22:00.
                    </p>
<div className="flex flex-wrap items-center gap-4 mt-2">
<button className="animate-sonar bg-blue-500 hover:bg-blue-600 text-white px-8 py-3.5 rounded-full text-base font-medium transition-all shadow-md hover:shadow-lg flex items-center gap-2" onclick="toggleOrderModal()">
<iconify-icon icon="solar:bag-3-bold-duotone" width="20"></iconify-icon>
                            Ordina Subito
                        </button>
<a className="px-8 py-3.5 rounded-full text-base font-medium border border-slate-200 dark:border-slate-700 hover:bg-neutral-50 dark:hover:bg-neutral-800 transition-colors flex items-center gap-2" href="#location">
                            Indicazioni
                        </a>
</div>
<div className="flex items-center gap-6 mt-6 pt-6 border-t border-slate-200 dark:border-slate-700 text-sm text-neutral-500 dark:text-neutral-400">
<div className="flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear" width="18"></iconify-icon> 11:00–22:00</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:routing-2-linear" width="18"></iconify-icon> Asporto &amp; Delivery</div>
<div className="flex items-center gap-2"><iconify-icon icon="solar:card-linear" width="18"></iconify-icon> Carte OK</div>
</div>
</div>
<div className="relative h-[400px] sm:h-[500px] rounded-2xl overflow-hidden shadow-inner group">
<img alt="Poke Bowl" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-out" src="https://images.unsplash.com/photo-1546069901-ba9599a7e63c?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent pointer-events-none"></div>

<div className="absolute bottom-6 right-6 bg-white dark:bg-neutral-800 rounded-2xl p-4 shadow-lg backdrop-blur-sm border border-slate-100 dark:border-slate-700 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-red-100 dark:bg-red-900/30 flex items-center justify-center text-red-500">
<iconify-icon icon="solar:star-fall-bold-duotone" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-neutral-500 dark:text-neutral-400">Apprezzato per</p>
<p className="text-sm font-semibold text-neutral-900 dark:text-white">Portate abbondanti</p>
</div>
</div>
</div>
</div>
</section>

<section className="grid md:grid-cols-3 gap-6 animate-blur-seq delay-100">

<div className="glass-card rounded-[1.5rem] shadow-md p-6 sm:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:bowl-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading tracking-tight mt-2">Componi la tua bowl</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Scegli la base, le proteine fresche, i condimenti colorati, le salse e il tocco croccante finale.</p>
</div>

<div className="glass-card rounded-[1.5rem] shadow-md p-6 sm:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:sushi-roll-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading tracking-tight mt-2">Sushi &amp; Ravioli</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Non solo poké. Scopri i nostri uramaki preparati al momento e i classici dim sum al vapore.</p>
</div>

<div className="glass-card rounded-[1.5rem] shadow-md p-6 sm:p-8 flex flex-col gap-4 hover:-translate-y-1 transition-transform">
<div className="w-12 h-12 rounded-2xl bg-blue-100 dark:bg-blue-900/30 text-blue-500 flex items-center justify-center">
<iconify-icon icon="solar:cup-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading tracking-tight mt-2">Bubble Tea &amp; Sweet</h3>
<p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">Il perfetto comfort food. Milk tea autentici, fruit tea rinfrescanti e golosi egg waffle.</p>
</div>
</section>

<section className="glass-card rounded-[2rem] shadow-md p-6 sm:p-10 animate-blur-seq delay-200 scroll-mt-24" id="menu">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 border-b border-slate-200 dark:border-slate-700 pb-6 mb-8">
<div>
<h2 className="text-3xl sm:text-4xl font-heading tracking-tight">Il Nostro Menu</h2>
<p className="text-sm text-neutral-500 dark:text-neutral-400 mt-2">Allergeni e dettagli disponibili sulle piattaforme di ordine.</p>
</div>

<div className="flex overflow-x-auto w-full sm:w-auto bg-neutral-100/50 dark:bg-neutral-800/50 p-1.5 rounded-full hide-scrollbar border border-slate-200/50 dark:border-slate-700/50 shadow-inner">
<button className="tab-btn px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all bg-white dark:bg-neutral-700 shadow-sm text-blue-600 dark:text-blue-400" id="btn-componi" onclick="switchTab('tab-componi')">Su Misura</button>
<button className="tab-btn px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all text-neutral-500 hover:text-neutral-900 dark:hover:text-white" id="btn-pronte" onclick="switchTab('tab-pronte')">Poké Pronte</button>
<button className="tab-btn px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all text-neutral-500 hover:text-neutral-900 dark:hover:text-white" id="btn-sushi" onclick="switchTab('tab-sushi')">Uramaki &amp; Ravioli</button>
<button className="tab-btn px-5 py-2 rounded-full text-sm font-medium whitespace-nowrap transition-all text-neutral-500 hover:text-neutral-900 dark:hover:text-white" id="btn-drinks" onclick="switchTab('tab-drinks')">Drinks &amp; Dolci</button>
</div>
</div>

<div className="tab-content active" id="tab-componi">
<div className="bg-blue-50 dark:bg-blue-900/10 rounded-2xl p-6 sm:p-8 border border-blue-100 dark:border-blue-900/30 mb-8">
<div className="flex items-center gap-3 mb-6">
<iconify-icon className="text-blue-500" icon="solar:magic-stick-3-bold-duotone" width="24"></iconify-icon>
<h3 className="text-xl font-heading tracking-tight">La Signature Experience</h3>
</div>

<div className="flex flex-wrap items-center gap-2 sm:gap-4 mb-8 text-sm font-medium text-neutral-600 dark:text-neutral-300">
<span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">1. Base</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">2. Proteine</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">3. Condimenti</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">4. Salse</span>
<iconify-icon className="text-neutral-400" icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="px-4 py-2 bg-white dark:bg-neutral-800 rounded-full shadow-sm border border-slate-100 dark:border-slate-700">5. Crunch</span>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div className="bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center group cursor-pointer hover:border-blue-300 transition-colors" onclick="toggleOrderModal()">
<div>
<h4 className="font-semibold text-lg">Regular</h4>
<p className="text-xs text-neutral-500 mt-1">1 base, 2 proteine, 4 condimenti, 2 salse, 2 croccantini</p>
</div>
<div className="text-xl font-heading tracking-tight text-blue-600 dark:text-blue-400">€11,90</div>
</div>
<div className="bg-white dark:bg-neutral-800 p-5 rounded-xl shadow-sm border border-slate-200 dark:border-slate-700 flex justify-between items-center group cursor-pointer hover:border-blue-300 transition-colors relative overflow-hidden" onclick="toggleOrderModal()">

<div className="absolute top-0 right-0 bg-red-400 text-white text-[10px] uppercase font-bold px-2 py-0.5 rounded-bl-lg">Più scelta</div>
<div>
<h4 className="font-semibold text-lg">Large</h4>
<p className="text-xs text-neutral-500 mt-1">1 base, 3 proteine, 5 condimenti, 2 salse, 2 croccantini</p>
</div>
<div className="text-xl font-heading tracking-tight text-blue-600 dark:text-blue-400">€14,00</div>
</div>
</div>
</div>
</div>

<div className="tab-content" id="tab-pronte">
<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg flex items-center gap-2">
                                2. Poke Misto
                                <span className="bg-red-100 text-red-600 dark:bg-red-900/30 dark:text-red-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Best Seller</span>
</h4>
<span className="font-heading text-lg">€14,00</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Riso, tonno, salmone, gambero crudo, goma wakame, edamame, avocado, cipolla fritta, teriyaki, sesamo.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Ordina <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg">1. Poke Sake</h4>
<span className="font-heading text-lg">€11,90</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Riso, salmone, polpa di granchio, avocado, edamame, pomodoro, maionese, salsa di soia, sesamo.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Ordina <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg">3. Poke Cotto</h4>
<span className="font-heading text-lg">€11,90</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Riso, uova, tofu, ceci, zucchine, cavolo rosso, pomodorini, cipolla fritta, teriyaki, sesamo.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Ordina <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg flex items-center gap-2">
                                4. Poke Vegetarian
                                <span className="bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-400 text-[10px] px-2 py-0.5 rounded-full uppercase tracking-wider font-bold">Veg</span>
</h4>
<span className="font-heading text-lg">€10,50</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Riso, mais, pomodoro, avocado, edamame, mandorle, teriyaki, sesamo.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Ordina <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>

<div className="tab-content" id="tab-sushi">
<div className="grid md:grid-cols-2 gap-x-12 gap-y-6">
<div>
<h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Uramaki (8 pz)</h4>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Uramaki Miura</span>
<span className="font-heading">€7,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Uramaki Sake</span>
<span className="font-heading">€7,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Uramaki Ebi</span>
<span className="font-heading">€7,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium flex items-center gap-2">Uramaki Maguro <span className="w-1.5 h-1.5 rounded-full bg-red-400"></span></span>
<span className="font-heading">€8,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Uramaki California</span>
<span className="font-heading">€7,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Uramaki Vege</span>
<span className="font-heading">€6,50</span>
</div>
</div>
</div>
<div>
<h4 className="text-sm font-bold text-neutral-400 uppercase tracking-widest mb-4">Dim Sum &amp; Fritti</h4>
<div className="space-y-4">
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Ravioli carne (4 pz)</span>
<span className="font-heading">€4,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Ravioli verdure (4 pz)</span>
<span className="font-heading">€4,50</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Shaomai (4 pz)</span>
<span className="font-heading">€5,00</span>
</div>
<div className="flex justify-between items-center border-b border-slate-100 dark:border-slate-800 pb-2">
<span className="font-medium">Pane coniglio (3 pz)</span>
<span className="font-heading">€5,00</span>
</div>
</div>
<button className="w-full mt-6 py-3 rounded-xl border border-blue-200 dark:border-blue-900 text-blue-600 dark:text-blue-400 font-medium hover:bg-blue-50 dark:hover:bg-blue-900/20 transition-colors" onclick="toggleOrderModal()">
                            Ordina Sushi &amp; Fritti
                        </button>
</div>
</div>
</div>

<div className="tab-content" id="tab-drinks">
<div className="grid md:grid-cols-2 gap-6">

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg">Milk Tea</h4>
<span className="font-heading text-lg">€5,00</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Varianti: classico, matcha, black sugar, oreo, fragola, litchi, mango.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Scegli gusto <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg">Fruit Tea</h4>
<span className="font-heading text-lg">€5,00</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Tè alla frutta fresco e dissetante.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Aggiungi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>

<div className="flex flex-col p-4 rounded-2xl hover:bg-neutral-50 dark:hover:bg-neutral-800/50 transition-colors border border-transparent hover:border-slate-200 dark:hover:border-slate-700 group">
<div className="flex justify-between items-start mb-2">
<h4 className="font-semibold text-lg">Egg Waffle</h4>
<span className="font-heading text-lg">€4,00</span>
</div>
<p className="text-sm text-neutral-500 dark:text-neutral-400 leading-relaxed flex-grow">Il tipico dolce street food, soffice e croccante.</p>
<button className="mt-4 text-sm font-medium text-blue-500 hover:text-blue-600 flex items-center gap-1 w-fit group-hover:translate-x-1 transition-transform" onclick="toggleOrderModal()">Aggiungi <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
</section>

<section className="glass-card rounded-[2rem] shadow-md p-6 sm:p-10 animate-blur-seq delay-300 scroll-mt-24" id="recensioni">
<div className="flex flex-col md:flex-row justify-between items-center gap-8 mb-8">
<div>
<h2 className="text-2xl sm:text-3xl font-heading tracking-tight">Dicono di noi</h2>
<p className="text-sm text-neutral-500 mt-2">Valutato eccellente sulle piattaforme delivery.</p>
</div>
<div className="flex items-center gap-1 text-blue-500 bg-blue-50 dark:bg-blue-900/20 px-4 py-2 rounded-full">
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative">
<iconify-icon className="absolute top-4 right-4 text-neutral-100 dark:text-neutral-700" icon="solar:chat-round-dots-bold-duotone" width="40"></iconify-icon>
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-4">"Poke molto buono, ma soprattutto ABBONDANTE! Super consigliato."</p>
<p className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">— Giulia B.</p>
</div>

<div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative">
<iconify-icon className="absolute top-4 right-4 text-neutral-100 dark:text-neutral-700" icon="solar:chat-round-dots-bold-duotone" width="40"></iconify-icon>
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-4">"La poke è SPETTACOLARE… ingredienti freschi… vasta scelta."</p>
<p className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">— Marco T.</p>
</div>

<div className="bg-white dark:bg-neutral-800 p-6 rounded-2xl border border-slate-100 dark:border-slate-700 shadow-sm relative">
<iconify-icon className="absolute top-4 right-4 text-neutral-100 dark:text-neutral-700" icon="solar:chat-round-dots-bold-duotone" width="40"></iconify-icon>
<div className="flex gap-1 text-blue-500 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm text-neutral-700 dark:text-neutral-300 leading-relaxed italic mb-4">"Poke large… veramente grande e saziante. Ottimo rapporto qualità prezzo."</p>
<p className="text-xs font-semibold text-neutral-900 dark:text-white uppercase tracking-wider">— Elena R.</p>
</div>
</div>
</section>

<section className="glass-card rounded-[2rem] shadow-md p-6 sm:p-10 animate-blur-seq delay-400 scroll-mt-24 mb-10" id="location">
<div className="grid lg:grid-cols-2 gap-10 items-stretch">
<div className="flex flex-col justify-center">
<h2 className="text-3xl font-heading tracking-tight mb-6">Passa a trovarci</h2>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">
<iconify-icon icon="solar:map-point-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 dark:text-white">Sky Poke and Bubble Tea</h4>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Via Italia 16, 24068<br/>Seriate (BG), Italia</p>
<a className="inline-block mt-2 text-sm text-blue-500 font-medium hover:underline" href="https://www.google.com/maps/place/Sky+poke+and+bubble+tea/@45.6849555,9.7200268,17z" target="_blank">Apri su Maps →</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">
<iconify-icon icon="solar:phone-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 dark:text-white">Contattaci</h4>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">+39 334 205 8395</p>
<a className="inline-block mt-2 text-sm text-blue-500 font-medium hover:underline" href="tel:+393342058395">Chiama ora →</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-blue-50 dark:bg-blue-900/20 text-blue-500 flex items-center justify-center shrink-0 mt-1">
<iconify-icon icon="solar:clock-circle-bold-duotone" width="20"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-neutral-900 dark:text-white">Orari</h4>
<p className="text-neutral-600 dark:text-neutral-400 text-sm mt-1">Lunedì – Domenica<br/>11:00 – 22:00</p>
</div>
</div>
</div>
</div>

<div className="bg-neutral-200 dark:bg-neutral-800 rounded-2xl h-[300px] lg:h-auto min-h-[300px] relative overflow-hidden border border-slate-200 dark:border-slate-700 flex items-center justify-center">
<img alt="Seriate Map Area" className="absolute inset-0 w-full h-full object-cover opacity-50 dark:opacity-30 mix-blend-luminosity" src="https://images.unsplash.com/photo-1524661135-423995f22d0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-blue-500/10 mix-blend-multiply"></div>
<div className="relative z-10 flex flex-col items-center">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center shadow-lg text-blue-500 animate-bounce">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<a className="mt-4 bg-white/90 backdrop-blur px-4 py-2 rounded-full text-sm font-medium shadow-sm hover:bg-white transition-colors text-neutral-900" href="https://www.google.com/maps/place/Sky+poke+and+bubble+tea/@45.6849555,9.7200268,17z" target="_blank">
                            Vedi mappa interattiva
                        </a>
</div>
</div>
</div>

<div className="mt-12 pt-8 border-t border-slate-200 dark:border-slate-700 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-neutral-500">
<p>© 2023 Sky Poke and Bubble Tea. P.IVA: 01234567890 (Placeholder)</p>
<div className="flex gap-4">
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:info-circle-linear" width="20"></iconify-icon></a>
<a className="hover:text-blue-500 transition-colors" href="#"><iconify-icon icon="solar:shield-warning-linear" width="20"></iconify-icon></a>
</div>
</div>
</section>
</main>

<div className="md:hidden fixed bottom-0 inset-x-0 bg-white/90 dark:bg-neutral-900/90 backdrop-blur-md border-t border-slate-200 dark:border-slate-800 p-3 flex justify-around items-center z-40 pb-safe">
<a className="flex flex-col items-center gap-1 text-neutral-600 dark:text-neutral-400" href="tel:+393342058395">
<iconify-icon icon="solar:phone-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Chiama</span>
</a>
<button className="flex items-center justify-center bg-blue-500 text-white w-14 h-14 rounded-full shadow-lg -mt-8 border-4 border-neutral-100 dark:border-neutral-900" onclick="toggleOrderModal()">
<iconify-icon icon="solar:bag-3-bold" width="24"></iconify-icon>
</button>
<a className="flex flex-col items-center gap-1 text-neutral-600 dark:text-neutral-400" href="https://www.google.com/maps/place/Sky+poke+and+bubble+tea/@45.6849555,9.7200268,17z">
<iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon>
<span className="text-[10px] font-medium">Mappa</span>
</a>
</div>

<div className="fixed inset-0 z-[100] hidden items-center justify-center px-4" id="order-modal">

<div className="absolute inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity" onclick="toggleOrderModal()"></div>

<div className="bg-white dark:bg-neutral-800 rounded-3xl w-full max-w-sm relative z-10 shadow-2xl border border-slate-200 dark:border-slate-700 overflow-hidden transform transition-all scale-95 opacity-0" id="modal-content">
<div className="p-6 text-center border-b border-slate-100 dark:border-slate-700">
<button className="absolute top-4 right-4 w-8 h-8 flex items-center justify-center bg-neutral-100 dark:bg-neutral-700 rounded-full text-neutral-500 hover:text-neutral-900 dark:hover:text-white transition-colors" onclick="toggleOrderModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="w-12 h-12 bg-blue-100 dark:bg-blue-900/30 text-blue-500 rounded-2xl flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:scooter-bold-duotone" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-heading tracking-tight text-neutral-900 dark:text-white">Scegli la piattaforma</h3>
<p className="text-sm text-neutral-500 mt-1">Consegna a domicilio a Seriate e dintorni.</p>
</div>
<div className="p-2 bg-neutral-50 dark:bg-neutral-800/50">
<a className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-neutral-700 rounded-2xl transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-600" href="https://deliveroo.it/en/menu/bergamo/seriate/sky-poke-and-bubble-tea" target="_blank">
<div className="w-10 h-10 rounded-full bg-[#00CCBC] flex items-center justify-center text-white font-bold text-xl shrink-0">D</div>
<div className="flex-grow text-left">
<div className="font-semibold text-neutral-900 dark:text-white">Deliveroo</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-neutral-700 rounded-2xl transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-600" href="https://www.justeat.it/restaurants-sky-poke-and-bubble-tea-seriate/menu" target="_blank">
<div className="w-10 h-10 rounded-full bg-[#FF8000] flex items-center justify-center text-white font-bold text-xl shrink-0">J</div>
<div className="flex-grow text-left">
<div className="font-semibold text-neutral-900 dark:text-white">Just Eat</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center gap-4 p-4 hover:bg-white dark:hover:bg-neutral-700 rounded-2xl transition-colors group border border-transparent hover:border-slate-200 dark:hover:border-slate-600" href="https://glovoapp.com/en/it/bergamo/stores/sky-poke-bubble-tea-bgy" target="_blank">
<div className="w-10 h-10 rounded-full bg-[#FFC244] flex items-center justify-center text-white font-bold text-xl shrink-0">G</div>
<div className="flex-grow text-left">
<div className="font-semibold text-neutral-900 dark:text-white">Glovo</div>
</div>
<iconify-icon className="text-neutral-400 group-hover:text-neutral-900 dark:group-hover:text-white group-hover:translate-x-1 transition-all" icon="solar:alt-arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>



    </>
  );
}
