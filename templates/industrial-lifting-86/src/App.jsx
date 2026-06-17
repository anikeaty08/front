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



        // Smooth horizontal scrolling for buttons
        function scrollContainer(id, amount) {
            const container = document.getElementById(id);
            container.scrollBy({
                left: amount,
                behavior: 'smooth'
            });
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
      

<header className="relative w-full h-[85vh] min-h-[600px] rounded-[32px] md:rounded-[40px] overflow-hidden bg-slate-900 flex flex-col items-center justify-center text-center isolate shadow-2xl">

<div className="absolute inset-0 -z-10 img-loading">

<img alt="Industrial Background" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://images.unsplash.com/photo-1535732759880-bbd5c7265e3f?q=80&amp;w=2600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-slate-900/60 via-slate-900/50 to-slate-900/90"></div>
</div>

<nav className="absolute top-0 left-0 right-0 z-50 p-6 md:p-8">
<div className="max-w-7xl mx-auto flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="bg-amber-400 text-slate-900 w-10 h-10 rounded-full flex items-center justify-center text-lg font-extrabold tracking-tighter shadow-lg group-hover:scale-110 transition-transform">CL</div>
<span className="text-white font-extrabold text-lg tracking-tight hidden sm:block shadow-black drop-shadow-md">Chrysanthopoulos</span>
</a>

<div className="hidden lg:flex items-center gap-1 bg-slate-900/40 backdrop-blur-xl rounded-full px-2 py-1.5 border border-white/10 shadow-2xl">
<a className="px-5 py-2 text-sm font-semibold text-slate-900 bg-white rounded-full shadow-sm" href="#">Αρχική</a>
<a className="px-5 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#services">Υπηρεσίες</a>
<a className="px-5 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#equipment">Εξοπλισμός</a>
<a className="px-5 py-2 text-sm font-semibold text-white/90 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#projects">Έργα</a>
</div>

<a className="hidden sm:flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-slate-900 text-sm font-extrabold px-6 py-3 rounded-full transition-all shadow-lg hover:shadow-amber-400/20 hover:-translate-y-0.5" href="#contact">
<span>Προσφορά</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2.5" width="18"></iconify-icon>
</a>

<button className="lg:hidden text-white bg-white/10 p-2 rounded-full backdrop-blur-md">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="max-w-5xl mx-auto px-4 relative z-10 mt-10">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-amber-400/10 border border-amber-400/20 text-amber-400 text-xs font-bold uppercase tracking-widest backdrop-blur-md mb-8 shadow-sm">
<iconify-icon icon="solar:shield-check-linear" width="16"></iconify-icon>
                Safety Above All
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight leading-[0.9] mb-8 text-shadow-sm">
                ΑΝΥΨΩΤΙΚΗ <br/>
<span className="text-slate-400">ΕΜΠΕΙΡΙΑ</span>
</h1>
<p className="text-lg md:text-xl text-slate-200 font-medium max-w-2xl mx-auto leading-relaxed mb-10 drop-shadow-md">
                76 χρόνια εξειδίκευσης σε βαριά έργα και ειδικές μεταφορές. Ορίζουμε τα πρότυπα ασφαλείας στην ελληνική βιομηχανία.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-amber-400 hover:bg-amber-300 text-slate-900 text-base font-extrabold px-8 py-4 rounded-full transition-all hover:scale-105 hover:shadow-xl hover:shadow-amber-400/20 flex items-center justify-center gap-2" href="#services">
                    Οι Υπηρεσίες μας
                    <iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
<button className="w-full sm:w-auto bg-white/10 hover:bg-white/20 border border-white/20 text-white text-base font-semibold px-8 py-4 rounded-full transition-all backdrop-blur-md flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                    Δείτε το Video
                </button>
</div>
</div>
</header>

<section className="py-24 px-2 md:px-0" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 px-4 gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Υπηρεσίες</h2>
<p className="text-slate-500 font-medium max-w-md text-lg">Ολοκληρωμένες λύσεις ανύψωσης και μεταφοράς για κάθε βιομηχανική ανάγκη.</p>
</div>
<a className="inline-flex text-slate-900 font-bold items-center gap-2 hover:gap-4 transition-all group" href="#">
<span className="border-b-2 border-slate-200 group-hover:border-amber-400 pb-0.5 transition-colors">Προβολή όλων</span>
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="2"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-4 h-auto md:h-[650px] px-2 md:px-0">

<div className="md:col-span-2 md:row-span-2 bg-slate-900 rounded-[32px] overflow-hidden relative group h-[400px] md:h-auto border border-slate-800">
<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-between z-10">
<div className="flex justify-between items-start">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:text-slate-900 group-hover:border-amber-400 transition-all">
<iconify-icon icon="solar:crane-linear" strokeWidth="2" width="24"></iconify-icon>
</span>
</div>
<div>
<h3 className="text-3xl font-extrabold text-white mb-3">Ανυψωτικές Εργασίες</h3>
<p className="text-slate-300 font-medium max-w-sm mb-4">Εξειδικευμένες ανυψώσεις σε διυλιστήρια, λιμάνια και αιολικά πάρκα.</p>
<div className="flex items-center gap-2 text-amber-400 text-sm font-bold uppercase tracking-wider group-hover:gap-4 transition-all">
                                Μάθετε περισσότερα <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="md:col-span-1 md:row-span-2 bg-slate-800 rounded-[32px] overflow-hidden relative group h-[400px] md:h-auto border border-slate-700">
<img className="absolute inset-0 w-full h-full object-cover opacity-50 group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
<div className="absolute inset-0 p-8 flex flex-col justify-end z-10">
<div className="mb-auto">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-white group-hover:bg-amber-400 group-hover:text-slate-900 transition-all">
<iconify-icon icon="solar:truck-linear" strokeWidth="2" width="24"></iconify-icon>
</span>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Ειδικές Μεταφορές</h3>
<p className="text-slate-300 text-sm font-medium mb-4">Μεταφορά βαρέων φορτίων και ανεμογεννητριών.</p>
<span className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center text-white group-hover:bg-white group-hover:text-slate-900 transition-all">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</span>
</div>
</div>

<div className="md:col-span-1 bg-slate-100 rounded-[32px] p-8 flex flex-col justify-between group hover:bg-white hover:shadow-xl transition-all border border-slate-200">
<div className="w-12 h-12 rounded-full bg-slate-200 text-slate-900 flex items-center justify-center group-hover:bg-amber-400 transition-colors">
<iconify-icon icon="solar:user-hand-up-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-bold text-slate-900 mb-1">Ενοικίαση</h3>
<p className="text-sm text-slate-500 font-medium leading-tight">Μακροχρόνια μίσθωση μηχανημάτων.</p>
</div>
</div>

<div className="md:col-span-1 bg-amber-400 rounded-[32px] p-8 flex flex-col justify-between group hover:bg-amber-300 transition-colors cursor-pointer">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-full bg-slate-900/10 flex items-center justify-center text-slate-900">
<iconify-icon icon="solar:chat-line-linear" strokeWidth="2" width="24"></iconify-icon>
</div>
<iconify-icon className="text-slate-900" icon="solar:arrow-right-up-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl font-extrabold text-slate-900 mb-1">Μελέτη Έργου</h3>
<p className="text-slate-900/70 text-sm font-bold">Ζητήστε τεχνική συμβουλή σήμερα.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-blueprint py-28 relative overflow-hidden" id="equipment">

<div className="absolute left-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-r from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-12 md:w-32 bg-gradient-to-l from-[#0f172a] to-transparent z-10 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 mb-12 relative z-20 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-white tracking-tight mb-2">Ο Στόλος Μας</h2>
<p className="text-slate-400 font-medium">Σύρετε για να εξερευνήσετε τον τεχνολογικό μας εξοπλισμό.</p>
</div>

<div className="hidden md:flex gap-2">
<button className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition-all flex items-center justify-center" onclick="scrollContainer('equip-scroll', -400)">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-slate-700 bg-slate-800/50 text-white hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition-all flex items-center justify-center" onclick="scrollContainer('equip-scroll', 400)">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="flex overflow-x-auto gap-6 px-6 md:px-[15vw] hide-scroll scroll-smooth snap-x snap-mandatory py-4" id="equip-scroll">

<div className="min-w-[85vw] md:min-w-[500px] snap-center bg-slate-800/50 border border-slate-700 rounded-3xl p-2 backdrop-blur-sm group hover:border-amber-400/50 transition-colors">
<div className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-slate-900">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">LIEBHERR</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-white mb-2">LTM 11200-9.1</h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-2">Ο ισχυρότερος τηλεσκοπικός γερανός στην αγορά. Ιδανικός για εγκατάσταση ανεμογεννητριών.</p>
<div className="flex gap-4 border-t border-slate-700 pt-4">
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Max Load</span>
<span className="text-white font-mono">1200 t</span>
</div>
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Max Hoist</span>
<span className="text-white font-mono">188 m</span>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[500px] snap-center bg-slate-800/50 border border-slate-700 rounded-3xl p-2 backdrop-blur-sm group hover:border-amber-400/50 transition-colors">
<div className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-slate-900">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">FAYMONVILLE</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-white mb-2">Modular Axle Lines</h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-2">Αρθρωτοί άξονες για μεταφορά υπέρβαρων και ογκωδών φορτίων με υδραυλική ανάρτηση.</p>
<div className="flex gap-4 border-t border-slate-700 pt-4">
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Payload per line</span>
<span className="text-white font-mono">45 t</span>
</div>
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Configuration</span>
<span className="text-white font-mono">Unlimited</span>
</div>
</div>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[500px] snap-center bg-slate-800/50 border border-slate-700 rounded-3xl p-2 backdrop-blur-sm group hover:border-amber-400/50 transition-colors">
<div className="relative h-[280px] w-full rounded-2xl overflow-hidden bg-slate-900">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-amber-400 text-slate-900 text-xs font-bold px-3 py-1 rounded-full">HYSTER</div>
</div>
<div className="p-6">
<h3 className="text-2xl font-bold text-white mb-2">Heavy Forklifts</h3>
<p className="text-slate-400 text-sm mb-4 line-clamp-2">Περονοφόρα βαρέως τύπου για βιομηχανική χρήση και διαχείριση εμπορευματοκιβωτίων.</p>
<div className="flex gap-4 border-t border-slate-700 pt-4">
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Capacity</span>
<span className="text-white font-mono">16 - 48 t</span>
</div>
<div>
<span className="block text-slate-500 text-xs font-bold uppercase">Power</span>
<span className="text-white font-mono">Diesel</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="projects">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row items-end justify-between gap-6">
<div>
<h2 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-4">Πρόσφατα Έργα</h2>
<p className="text-slate-500 font-medium text-lg">Στιγμιότυπα από το πεδίο δράσης.</p>
</div>

<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="scrollContainer('project-scroll', -380)">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-slate-200 flex items-center justify-center text-slate-600 hover:bg-slate-900 hover:text-white hover:border-slate-900 transition-colors" onclick="scrollContainer('project-scroll', 380)">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto gap-6 px-6 md:px-[10vw] pb-10 hide-scroll snap-x snap-mandatory scroll-smooth" id="project-scroll">

<div className="min-w-[320px] md:min-w-[380px] snap-center group relative cursor-pointer">
<div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-slate-100 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full mb-4">Λιμάνι Πάτρας</span>
<h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:-translate-y-2 transition-transform">Ανέλκυση Σκάφους</h3>
<p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                            Χρήση γερανού 500t με ειδικά εξαρτήματα ανύψωσης για μέγιστη ασφάλεια.
                        </p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[380px] snap-center group relative cursor-pointer">
<div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-slate-100 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1504917595217-d4dc5ebe6122?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full mb-4">ΒΙ.ΠΕ.</span>
<h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:-translate-y-2 transition-transform">Εγκατάσταση Σιλό</h3>
<p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                            Διπλή ανύψωση (Tandem lift) σε εξαιρετικά περιορισμένο χώρο.
                        </p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[380px] snap-center group relative cursor-pointer">
<div className="aspect-[3/4] rounded-[32px] overflow-hidden bg-slate-100 relative shadow-lg">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="inline-block px-3 py-1 bg-amber-400 text-slate-900 text-xs font-bold rounded-full mb-4">Αιολικό Πάρκο</span>
<h3 className="text-2xl font-bold text-white leading-tight mb-2 group-hover:-translate-y-2 transition-transform">Μεταφορά Πτερυγίου</h3>
<p className="text-slate-300 text-sm leading-relaxed opacity-0 max-h-0 group-hover:opacity-100 group-hover:max-h-20 transition-all duration-500">
                            Ειδική μεταφορά πτερυγίου ανεμογεννήτριας μήκους 65 μέτρων.
                        </p>
</div>
</div>
</div>

<div className="min-w-[320px] md:min-w-[380px] snap-center flex items-center justify-center">
<a className="group flex flex-col items-center gap-4 p-8 rounded-[32px] hover:bg-slate-100 transition-colors w-full h-full justify-center border border-dashed border-slate-300" href="#">
<div className="w-16 h-16 rounded-full bg-white text-slate-900 flex items-center justify-center shadow-md group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:arrow-right-linear" width="32"></iconify-icon>
</div>
<span className="font-bold text-lg text-slate-900">Δείτε όλα τα έργα</span>
</a>
</div>
</div>
</section>

<footer className="bg-slate-950 text-slate-300 pt-20 pb-10 rounded-[40px] mb-4 mx-auto max-w-[98%] shadow-2xl" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="md:col-span-5">
<div className="flex items-center gap-2 mb-6">
<div className="bg-white text-slate-900 w-8 h-8 rounded-full flex items-center justify-center text-sm font-extrabold">CL</div>
<span className="text-white font-extrabold text-xl tracking-tight">Chrysanthopoulos</span>
</div>
<p className="text-slate-400 text-base leading-relaxed mb-8 max-w-sm">
                        Από το 1948, παρέχουμε κορυφαίες υπηρεσίες ανύψωσης και μεταφοράς. Επενδύουμε στην τεχνολογία και την ασφάλεια για να φέρουμε εις πέρας κάθε πρόκληση.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center text-white hover:bg-amber-400 hover:text-slate-900 hover:border-amber-400 transition-all" href="#">
<iconify-icon icon="solar:videocamera-record-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-bold text-lg mb-6">Εταιρεία</h4>
<ul className="space-y-4 text-sm font-medium text-slate-400">
<li><a className="hover:text-amber-400 transition-colors" href="#">Προφίλ</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Υπηρεσίες</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Εξοπλισμός</a></li>
<li><a className="hover:text-amber-400 transition-colors" href="#">Καριέρα</a></li>
</ul>
</div>

<div className="md:col-span-3">
<h4 className="text-white font-bold text-lg mb-6">Επικοινωνία</h4>
<ul className="space-y-4 text-sm font-medium text-slate-400">
<li className="flex items-start gap-3 group cursor-pointer">
<iconify-icon className="text-amber-400 mt-0.5 group-hover:scale-110 transition-transform" icon="solar:map-point-linear"></iconify-icon>
<span className="group-hover:text-white transition-colors">Θράκης, Ρίο Πατρών 26504</span>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="text-amber-400 group-hover:scale-110 transition-transform" icon="solar:phone-calling-linear"></iconify-icon>
<a className="group-hover:text-white transition-colors" href="tel:2610990500">2610 990 500</a>
</li>
<li className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="text-amber-400 group-hover:scale-110 transition-transform" icon="solar:letter-linear"></iconify-icon>
<a className="group-hover:text-white transition-colors" href="mailto:info@chrysanthopoulos.gr">info@chrysanthopoulos.gr</a>
</li>
</ul>
</div>

<div className="md:col-span-2">
<h4 className="text-white font-bold text-lg mb-6">Πιστοποίηση</h4>
<div className="flex flex-col gap-2">
<div className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-xs font-semibold text-slate-400 flex justify-between items-center">
                            ISO 9001:2015 <iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
<div className="bg-slate-900 border border-slate-800 rounded px-3 py-2 text-xs font-semibold text-slate-400 flex justify-between items-center">
                            ISO 45001:2018 <iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="border-t border-slate-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs font-medium text-slate-600">
<p>© 2024 Chrysanthopoulos Lifting. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Cookies</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
