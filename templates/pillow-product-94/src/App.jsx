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
      

<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex-shrink-0 flex items-center">
<span className="text-base font-semibold tracking-tighter text-slate-900 uppercase">ΜΑΞΙΛΑΡΙ</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#composition">Σύνθεση</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#ergonomics">Εργονομία</a>
<a className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#specs">Χαρακτηριστικά</a>
</div>
<div className="flex items-center gap-4">
<a className="inline-flex items-center justify-center px-4 py-2 border border-slate-200 text-xs font-medium rounded-full text-slate-900 bg-white hover:bg-slate-50 hover:border-slate-300 transition-all focus:outline-none focus:ring-2 focus:ring-offset-1 focus:ring-slate-200" href="#buy">
                        Αγορά 44.40€
                    </a>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-16 sm:pt-40 sm:pb-24 overflow-hidden">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-[10px] font-medium text-slate-600 tracking-wide uppercase">Limited Edition 95/5</span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.05] text-balance">
                        Ύπνος σε <span className="text-slate-400">έλλειψη</span> βαρύτητας.
                    </h1>
<p className="text-base sm:text-lg text-slate-500 mb-10 max-w-lg mx-auto lg:mx-0 font-light leading-relaxed text-balance">
                        Το απόλυτο φυσικό μαξιλάρι. 95% πούπουλο πάπιας για ασύγκριτη απαλότητα, σχεδιασμένο να προσαρμόζεται στην ανατομία του αυχένα σας.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mb-12">
<a className="group inline-flex items-center justify-center px-8 py-3 bg-slate-900 text-white text-sm font-medium rounded-lg hover:bg-slate-800 transition-all duration-200 shadow-lg shadow-slate-200" href="#buy">
                            Απόκτηση Τώρα
                            <iconify-icon className="ml-2 group-hover:translate-x-0.5 transition-transform" height="16" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</a>
<div className="flex items-center gap-3 px-4 py-2 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-sm font-semibold text-slate-900">44.40€</span>
<span className="text-xs text-slate-400 line-through">60.00€</span>
<span className="text-[10px] text-emerald-600 font-medium bg-emerald-50 px-1.5 py-0.5 rounded ml-1">-26%</span>
</div>
</div>
<div className="flex items-center justify-center lg:justify-start gap-6 text-slate-400">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">Υποαλλεργικό</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-300" height="16" icon="lucide:check-circle" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs">100% Βαμβάκι</span>
</div>
</div>
</div>

<div className="lg:col-span-6 mt-16 lg:mt-0 relative">
<div className="relative rounded-2xl overflow-hidden aspect-[1/1] bg-slate-100 border border-slate-200 subtle-shadow group">

<img alt="Soft Pillow Texture" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/90 backdrop-blur-sm p-5 rounded-xl border border-white/40 shadow-sm">
<div className="grid grid-cols-2 gap-4 divide-x divide-slate-200/60">
<div className="pr-4">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" height="14" icon="lucide:feather" strokeWidth="1.5" width="14"></iconify-icon>
<p className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider">Συνθεση</p>
</div>
<p className="text-xs text-slate-600">95% Πούπουλο / 5% Φτερό</p>
</div>
<div className="pl-4">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-slate-400" height="14" icon="lucide:ruler" strokeWidth="1.5" width="14"></iconify-icon>
<p className="text-[10px] font-semibold text-slate-900 uppercase tracking-wider">Διασταση</p>
</div>
<p className="text-xs text-slate-600">50 x 70 εκ.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200" id="composition">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-4">Η Χρυσή Τομή της Άνεσης</h2>
<p className="text-sm text-slate-500 font-light leading-relaxed">
                    Δεν είναι όλα τα μαξιλάρια ίδια. Η αναλογία των υλικών καθορίζει την ποιότητα του ύπνου. Επιλέξαμε το 95/5 για την απόλυτη ισορροπία.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 subtle-shadow hover:shadow-md group">
<div className="flex items-start justify-between mb-8">
<div>
<span className="block text-4xl font-semibold tracking-tighter text-slate-900 group-hover:text-slate-700 transition-colors">95%</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Πουπουλο Παπιας</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-600">
<iconify-icon height="20" icon="lucide:cloud" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Αίσθηση Αιώρησης</h3>
<p className="text-xs text-slate-500 leading-6">
                        Το πούπουλο παγιδεύει τον αέρα δημιουργώντας θερμική μόνωση και απίστευτη απαλότητα. Είναι το υλικό που δίνει την αίσθηση ότι "βυθίζεστε" αργά και γλυκά.
                    </p>
</div>

<div className="bg-white p-8 rounded-xl border border-slate-200 hover:border-slate-300 transition-all duration-300 subtle-shadow hover:shadow-md group">
<div className="flex items-start justify-between mb-8">
<div>
<span className="block text-4xl font-semibold tracking-tighter text-slate-900 group-hover:text-slate-700 transition-colors">5%</span>
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">Φτερο Παπιας</span>
</div>
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center border border-slate-100 text-slate-600">
<iconify-icon height="20" icon="lucide:anchor" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-sm font-medium text-slate-900 mb-3">Δομική Στήριξη</h3>
<p className="text-xs text-slate-500 leading-6">
                        Το μικρό αυτό ποσοστό είναι κρίσιμο. Λειτουργεί ως ο "σκελετός" του μαξιλαριού, αποτρέποντας το πλήρες ξεφούσκωμα και διατηρώντας το ύψος που χρειάζεται ο αυχένας.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="ergonomics">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1">
<div className="inline-flex items-center gap-2 mb-6">
<iconify-icon className="text-rose-500" height="18" icon="lucide:activity" strokeWidth="1.5" width="18"></iconify-icon>
<span className="text-xs font-semibold text-rose-500 uppercase tracking-wide">Αναλυση Εργονομιας</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Εξαλείψτε τους πόνους στον αυχένα</h2>
<p className="text-sm text-slate-500 mb-8 leading-relaxed font-light">
                        Η λάθος κλίση του κεφαλιού κατά τον ύπνο είναι η #1 αιτία για αυχενικό σύνδρομο. Το ΜΑΞΙΛΑΡΙ σχεδιάστηκε για να ευθυγραμμίζει τη σπονδυλική στήλη.
                    </p>
<div className="space-y-6">

<div className="flex gap-4 p-4 rounded-lg bg-slate-50 border border-slate-100 hover:border-slate-200 transition-colors">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-slate-400" height="18" icon="lucide:x-circle" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-1">Πρόβλημα: Σκληρά Υλικά</h4>
<p className="text-[11px] text-slate-500 leading-relaxed">Τα σκληρά μαξιλάρια κρατούν το κεφάλι ψηλά, δημιουργώντας πίεση στους σπονδύλους.</p>
</div>
</div>

<div className="flex gap-4 p-4 rounded-lg bg-emerald-50/50 border border-emerald-100 hover:border-emerald-200 transition-colors">
<div className="flex-shrink-0 mt-0.5">
<iconify-icon className="text-emerald-500" height="18" icon="lucide:check-circle" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-semibold text-slate-900 mb-1">Λύση: Προσαρμοστική Βύθιση</h4>
<p className="text-[11px] text-slate-500 leading-relaxed">Το πούπουλο επιτρέπει στο κεφάλι να βυθιστεί ακριβώς στο σημείο μηδενικής πίεσης (Neutral Spine Position).</p>
</div>
</div>
</div>
</div>

<div className="order-1 lg:order-2 bg-slate-50 rounded-2xl p-8 border border-slate-200 relative">
<h3 className="text-sm font-medium text-slate-900 mb-8">Metrics Άνεσης</h3>
<div className="space-y-8">

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-600">Μαλακότητα</span>
<span className="text-xs text-slate-400">9.5/10</span>
</div>
<div className="w-full bg-white rounded-full h-2 border border-slate-100 overflow-hidden">
<div className="bg-slate-900 h-full rounded-full w-[95%]"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-600">Επαναφορά (Bounce)</span>
<span className="text-xs text-slate-400">8.0/10</span>
</div>
<div className="w-full bg-white rounded-full h-2 border border-slate-100 overflow-hidden">
<div className="bg-slate-900 h-full rounded-full w-[80%]"></div>
</div>
</div>

<div>
<div className="flex justify-between items-center mb-2">
<span className="text-xs font-medium text-slate-600">Διαπνοή</span>
<span className="text-xs text-slate-400">10/10 (Άριστη)</span>
</div>
<div className="w-full bg-white rounded-full h-2 border border-slate-100 overflow-hidden">
<div className="bg-slate-900 h-full rounded-full w-[100%]"></div>
</div>
</div>
</div>
<div className="mt-10 pt-8 border-t border-slate-200 flex items-center justify-between">
<div>
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Διαστασεις</p>
<p className="text-sm font-semibold text-slate-900">50 x 70 εκ.</p>
</div>
<div className="text-right">
<p className="text-[10px] text-slate-400 uppercase tracking-wider font-medium">Υψος</p>
<p className="text-sm font-semibold text-slate-900">Μεσαίο / Χαμηλό</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-950 text-white" id="specs">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12 border-b border-slate-800 pb-6">
<h2 className="text-xl font-medium tracking-tight text-white">Τεχνικά Χαρακτηριστικά</h2>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12">

<div className="group">
<iconify-icon className="text-slate-500 mb-4 group-hover:text-white transition-colors" height="24" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Ύφασμα</h4>
<p className="text-xs text-slate-400">100% Βαμβάκι Περκάλι</p>
<p className="text-[10px] text-slate-600 mt-1">Down Proof Επεξεργασία</p>
</div>

<div className="group">
<iconify-icon className="text-slate-500 mb-4 group-hover:text-white transition-colors" height="24" icon="lucide:hash" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Πυκνότητα</h4>
<p className="text-xs text-slate-400">230 Κλωστές (TC)</p>
<p className="text-[10px] text-slate-600 mt-1">Υψηλή αντοχή</p>
</div>

<div className="group">
<iconify-icon className="text-slate-500 mb-4 group-hover:text-white transition-colors" height="24" icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Πιστοποίηση</h4>
<p className="text-xs text-slate-400">Oeko-Tex Standard</p>
<p className="text-[10px] text-slate-600 mt-1">Χωρίς επιβλαβείς ουσίες</p>
</div>

<div className="group">
<iconify-icon className="text-slate-500 mb-4 group-hover:text-white transition-colors" height="24" icon="lucide:sparkles" strokeWidth="1.5" width="24"></iconify-icon>
<h4 className="text-sm font-medium text-white mb-1">Φροντίδα</h4>
<p className="text-xs text-slate-400">Πλενόμενο στους 40°C</p>
<p className="text-[10px] text-slate-600 mt-1">Απαραίτητο καλό στέγνωμα</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200" id="buy">
<div className="max-w-xl mx-auto px-4">
<div className="text-center mb-10">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900 mb-2">Αναβαθμίστε τον ύπνο σας</h2>
<p className="text-sm text-slate-500 font-light">Περιορισμένο απόθεμα σε αυτή την τιμή.</p>
</div>
<div className="bg-white rounded-2xl border border-slate-200 subtle-shadow p-2">
<div className="p-6 pb-8">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-semibold text-slate-900">ΜΑΞΙΛΑΡΙ Down 95/5</h3>
<p className="text-xs text-slate-500 mt-1">Premium Συλλογή • 50x70 εκ.</p>
</div>
<div className="text-right">
<div className="text-xl font-semibold text-slate-900">44.40€</div>
<div className="text-xs text-slate-400 line-through">60.00€</div>
</div>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Το προϊόν προστέθηκε στο καλάθι!');">

<div className="space-y-1.5">
<label className="text-[10px] font-semibold text-slate-500 uppercase tracking-wide">Ποσοτητα</label>
<div className="relative group">
<select className="appearance-none w-full bg-slate-50 border border-slate-200 text-slate-900 text-sm rounded-lg focus:ring-2 focus:ring-slate-900 focus:border-slate-900 block p-3 pr-8 transition-shadow cursor-pointer hover:bg-slate-100">
<option value="1">1 Τεμάχιο</option>
<option value="2">2 Τεμάχια (Ζεύγος)</option>
<option value="4">4 Τεμάχια (Οικογενειακό)</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-3 text-slate-500 group-hover:text-slate-900">
<iconify-icon height="16" icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full flex items-center justify-center px-5 py-3.5 border border-transparent text-sm font-medium rounded-lg text-white bg-slate-900 hover:bg-black focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900 transition-all shadow-lg shadow-slate-200 active:scale-[0.98]" type="submit">
<iconify-icon className="mr-2" height="18" icon="lucide:shopping-bag" strokeWidth="1.5" width="18"></iconify-icon>
                            Προσθήκη στο Καλάθι
                        </button>
</form>
<div className="mt-6 flex items-center justify-center gap-4 border-t border-slate-100 pt-4">
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon height="12" icon="lucide:truck" width="12"></iconify-icon>
<span>Παράδοση 1-3 ημέρες</span>
</div>
<div className="w-px h-3 bg-slate-200"></div>
<div className="flex items-center gap-1.5 text-[10px] text-slate-500">
<iconify-icon height="12" icon="lucide:lock" width="12"></iconify-icon>
<span>Ασφαλείς Συναλλαγές</span>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-sm font-semibold tracking-tighter text-slate-900 uppercase">ΜΑΞΙΛΑΡΙ</span>
</div>
<div className="flex gap-6">
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Όροι Χρήσης</a>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Πολιτική Απορρήτου</a>
<a className="text-xs text-slate-500 hover:text-slate-900 transition-colors" href="#">Επικοινωνία</a>
</div>
<p className="text-[10px] text-slate-400">© 2024 Premium Sleep Collection.</p>
</div>
</footer>

    </>
  );
}
