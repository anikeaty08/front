import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-40 bg-[#F9F8F4]/90 backdrop-blur-md border-b border-[#4A5D4E]/10 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex justify-between items-center">

<a className="font-serif text-2xl tracking-[0.2em] text-[#4A5D4E] uppercase hover:opacity-70 transition-opacity" href="#">
                Yuj.
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#B66D58] transition-colors" href="#ecosystem">Πρακτική</a>
<a className="hover:text-[#B66D58] transition-colors" href="#teacher-training">Εκπαίδευση</a>
<a className="hover:text-[#B66D58] transition-colors" href="#sanctuary">Στούντιο</a>
<a className="hover:text-[#B66D58] transition-colors" href="#teachers">Δάσκαλοι</a>
</div>

<div className="flex items-center gap-4">
<label className="cursor-pointer hidden md:flex items-center gap-2 bg-[#4A5D4E] text-[#F9F8F4] px-6 py-2.5 rounded-full text-xs tracking-wider uppercase hover:bg-[#3A4A3E] transition-colors duration-300" htmlFor="schedule-toggle">
<span>Κράτηση</span>
</label>

<button className="md:hidden text-[#4A5D4E]">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<input className="hidden" id="schedule-toggle" type="checkbox"/>
<label className="fixed inset-0 bg-[#4A5D4E]/40 backdrop-blur-sm z-40 opacity-0 pointer-events-none transition-opacity duration-500" htmlFor="schedule-toggle" id="overlay"></label>
<aside className="fixed top-0 right-0 h-full w-full md:w-[450px] bg-[#F9F8F4] z-50 transform translate-x-full transition-transform duration-500 shadow-2xl flex flex-col" id="schedule-drawer">
<div className="p-8 flex justify-between items-center border-b border-[#4A5D4E]/10">
<h3 className="font-serif text-2xl text-[#4A5D4E]">Πρόγραμμα</h3>
<label className="cursor-pointer p-2 hover:bg-[#4A5D4E]/5 rounded-full transition-colors" htmlFor="schedule-toggle">
<iconify-icon height="28" icon="solar:close-circle-linear" width="28"></iconify-icon>
</label>
</div>
<div className="flex-1 overflow-y-auto p-8 space-y-6">

<div className="text-sm uppercase tracking-widest text-[#B66D58] mb-4">Σήμερα</div>

<div className="group flex justify-between items-center border-b border-[#4A5D4E]/10 pb-4">
<div>
<div className="text-xs font-medium opacity-60">17:00 - 18:15</div>
<div className="font-serif text-xl mt-1">Vinyasa Flow</div>
<div className="text-xs mt-1 text-[#4A5D4E]/70">με την Ελένη</div>
</div>
<button className="bg-transparent border border-[#4A5D4E] text-[#4A5D4E] px-4 py-1.5 rounded-full text-xs uppercase hover:bg-[#4A5D4E] hover:text-[#F9F8F4] transition-all">
                    Book
                </button>
</div>

<div className="group flex justify-between items-center border-b border-[#4A5D4E]/10 pb-4">
<div>
<div className="text-xs font-medium opacity-60">18:30 - 19:45</div>
<div className="font-serif text-xl mt-1">Hatha Alignment</div>
<div className="text-xs mt-1 text-[#4A5D4E]/70">με την Μαρία</div>
</div>
<button className="bg-transparent border border-[#4A5D4E] text-[#4A5D4E] px-4 py-1.5 rounded-full text-xs uppercase hover:bg-[#4A5D4E] hover:text-[#F9F8F4] transition-all">
                    Book
                </button>
</div>

<div className="group flex justify-between items-center border-b border-[#4A5D4E]/10 pb-4">
<div>
<div className="text-xs font-medium opacity-60">20:00 - 21:00</div>
<div className="font-serif text-xl mt-1">Yin &amp; Sound</div>
<div className="text-xs mt-1 text-[#4A5D4E]/70">με τον Αλέξανδρο</div>
</div>
<button className="bg-transparent border border-[#4A5D4E] text-[#4A5D4E] px-4 py-1.5 rounded-full text-xs uppercase hover:bg-[#4A5D4E] hover:text-[#F9F8F4] transition-all">
                    Book
                </button>
</div>
</div>
</aside>

<header className="relative pt-20 min-h-screen flex flex-col md:flex-row overflow-hidden">

<div className="w-full md:w-1/2 flex items-center justify-center p-8 md:p-16 lg:p-24 z-10 bg-[#F9F8F4]">
<div className="max-w-lg fade-up">
<span className="block text-[#B66D58] text-xs font-medium tracking-[0.2em] uppercase mb-6">Νέα Σμύρνη • Αθήνα</span>
<h1 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-[1.1] tracking-tight text-[#4A5D4E] mb-8">
                    Το Ταξίδι προς την <br/> <i className="font-light italic">Ενότητα</i> Ξεκινά Εδώ.
                </h1>
<p className="text-[#4A5D4E]/80 text-lg leading-relaxed mb-10 font-light max-w-md">
                    Επανασυνδεθείτε με τον εσωτερικό σας ρυθμό μέσω της συνειδητής κίνησης και της αναπνοής. Ένα αστικό καταφύγιο σχεδιασμένο για τη σύγχρονη ψυχή.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-[#4A5D4E] text-[#F9F8F4] px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-[#3A4A3E] transition-all shadow-lg shadow-[#4A5D4E]/20 flex items-center justify-center gap-2 group">
                        Προσφορά Γνωριμίας
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
<a className="border border-[#B66D58] text-[#B66D58] px-8 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-[#B66D58] hover:text-white transition-all flex items-center justify-center gap-2" href="#teacher-training">
                        Εκπαίδευση Δασκάλων
                    </a>
</div>
</div>
</div>

<div className="w-full md:w-1/2 h-[50vh] md:h-auto relative">
<img alt="Meditative Yoga Pose" className="absolute inset-0 w-full h-full object-cover object-center fade-up delay-200" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-[#4A5D4E]/10 mix-blend-multiply"></div>
</div>

<div className="absolute bottom-8 left-1/2 -translate-x-1/2 hidden md:flex flex-col items-center gap-2 opacity-60 animate-bounce">
<span className="text-[10px] tracking-widest uppercase">Αναπνεύστε</span>
<iconify-icon icon="solar:arrow-down-linear" width="20"></iconify-icon>
</div>
</header>

<section className="py-24 px-6 md:px-12 bg-white" id="ecosystem">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16">
<div>
<h2 className="font-serif text-4xl md:text-5xl text-[#4A5D4E] tracking-tight mb-2">Η Πρακτική</h2>
<p className="text-[#4A5D4E]/60 text-sm tracking-wide">ΕΠΙΛΕΓΜΕΝΕΣ ΜΕΘΟΔΟΙ ΓΙΑ ΣΩΜΑ &amp; ΠΝΕΥΜΑ</p>
</div>
<a className="hidden md:inline-flex items-center gap-2 text-[#B66D58] text-sm uppercase tracking-widest hover:opacity-80 mt-4 md:mt-0" href="#">
                    Δείτε το Πρόγραμμα <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 h-auto md:h-[500px]">

<div className="group relative overflow-hidden h-[400px] md:h-full rounded-sm cursor-pointer">
<img alt="Hatha" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#4A5D4E]/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="font-serif text-3xl text-[#F9F8F4] mb-2">Hatha</h3>
<div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
<p className="text-[#F9F8F4]/80 text-sm font-light">Θεμέλια ευθυγράμμισης &amp; αναπνοή.</p>
</div>
<div className="w-full h-[1px] bg-[#F9F8F4]/30 mt-4"></div>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] md:h-full rounded-sm cursor-pointer">
<img alt="Vinyasa" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#4A5D4E]/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="font-serif text-3xl text-[#F9F8F4] mb-2">Vinyasa</h3>
<div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
<p className="text-[#F9F8F4]/80 text-sm font-light">Δυναμική ροή, θέρμη &amp; ρυθμός.</p>
</div>
<div className="w-full h-[1px] bg-[#F9F8F4]/30 mt-4"></div>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] md:h-full rounded-sm cursor-pointer">
<img alt="Yin" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#4A5D4E]/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="font-serif text-3xl text-[#F9F8F4] mb-2">Yin</h3>
<div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
<p className="text-[#F9F8F4]/80 text-sm font-light">Βαθιά χαλάρωση &amp; διαλογισμός.</p>
</div>
<div className="w-full h-[1px] bg-[#F9F8F4]/30 mt-4"></div>
</div>
</div>

<div className="group relative overflow-hidden h-[400px] md:h-full rounded-sm cursor-pointer">
<img alt="Pilates" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1518310383802-640c2de311b2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#4A5D4E]/90 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<h3 className="font-serif text-3xl text-[#F9F8F4] mb-2">Pilates</h3>
<div className="h-0 overflow-hidden group-hover:h-12 transition-all duration-500">
<p className="text-[#F9F8F4]/80 text-sm font-light">Μυϊκή ενδυνάμωση &amp; σταθερότητα.</p>
</div>
<div className="w-full h-[1px] bg-[#F9F8F4]/30 mt-4"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 bg-[#4A5D4E] text-[#F9F8F4] relative overflow-hidden" id="teacher-training">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#F9F8F4]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 md:gap-24 relative z-10">
<div className="w-full lg:w-1/2">
<div className="inline-flex items-center gap-2 border border-[#B66D58] rounded-full px-4 py-1 text-[#B66D58] text-[10px] tracking-[0.2em] uppercase mb-8">
<iconify-icon icon="solar:star-linear"></iconify-icon> Πιστοποίηση 200 HR YTT
                </div>
<h2 className="font-serif text-5xl md:text-6xl lg:text-7xl leading-none mb-8 tracking-tight">
                    Ανέλθετε στην <br/> <span className="text-[#B66D58] italic font-light">Αριστεία.</span>
</h2>
<p className="text-[#F9F8F4]/80 text-lg font-light leading-relaxed mb-10 max-w-lg">
                    Κάτι περισσότερο από μια πιστοποίηση, αυτό είναι ένα μεταμορφωτικό ταξίδι στη φιλοσοφία, την ανατομία και την τέχνη της διδασκαλίας της Γιόγκα.
                </p>
<div className="grid grid-cols-2 gap-8 mb-12 border-t border-[#F9F8F4]/10 pt-8">
<div>
<div className="text-3xl font-serif text-[#B66D58]">12 Οκτ</div>
<div className="text-xs uppercase tracking-widest opacity-60 mt-1">Έναρξη</div>
</div>
<div>
<div className="text-3xl font-serif text-[#B66D58]">12</div>
<div className="text-xs uppercase tracking-widest opacity-60 mt-1">Θέσεις</div>
</div>
</div>
<button className="bg-[#B66D58] text-[#F9F8F4] px-10 py-4 rounded-full text-sm tracking-wider uppercase hover:bg-[#a05a46] transition-all w-full md:w-auto">
                    Λήψη Προγράμματος
                </button>
</div>
<div className="w-full lg:w-1/2 relative">
<div className="relative z-10 p-2 border border-[#F9F8F4]/10 rounded-t-[200px] rounded-b-lg backdrop-blur-sm">
<img alt="Teacher Training" className="rounded-t-[190px] rounded-b-sm w-full shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1591228127791-8e2eaef098d3?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-10 -left-10 z-20 bg-[#F9F8F4] text-[#4A5D4E] p-8 max-w-sm shadow-xl rounded-sm hidden md:block">
<iconify-icon className="text-[#B66D58] text-4xl mb-4" icon="solar:quote-up-linear"></iconify-icon>
<p className="font-serif text-lg italic leading-snug mb-4">"Η εκπαίδευση στο Yuj δεν με δίδαξε απλά πώς να καθοδηγώ μια πρακτική, με έμαθε πώς να κρατώ χώρο για τον εαυτό μου και τους άλλους."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#4A5D4E] rounded-full"></div>
<div className="text-xs">
<span className="block font-semibold">Σοφία Κ.</span>
<span className="opacity-60">Απόφοιτη, Τάξη '23</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F9F8F4] overflow-hidden" id="teachers">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<h2 className="font-serif text-4xl md:text-5xl text-[#4A5D4E] tracking-tight">Καθοδήγηση</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-[#4A5D4E]/20 flex items-center justify-center hover:bg-[#4A5D4E] hover:text-white transition-all"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-[#4A5D4E]/20 flex items-center justify-center hover:bg-[#4A5D4E] hover:text-white transition-all"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex overflow-x-auto gap-8 px-6 md:px-[max(24px,calc(50vw-40rem))] no-scrollbar pb-10 snap-x snap-mandatory">

<div className="min-w-[280px] md:min-w-[350px] snap-center group cursor-pointer">
<div className="h-[450px] overflow-hidden rounded-sm mb-6 relative">
<img alt="Instructor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1588286840104-8957b019727f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#4A5D4E] mb-1">Ελένη Παπαδοπούλου</h3>
<p className="text-[#B66D58] text-xs uppercase tracking-widest mb-3">Senior Vinyasa Teacher</p>
<p className="text-[#4A5D4E]/60 text-sm leading-relaxed line-clamp-2">Με ειδίκευση στη βιομηχανική και τη δημιουργική αλληλουχία, η Ελένη φέρνει 15 χρόνια εμπειρίας από το Mysore.</p>
</div>

<div className="min-w-[280px] md:min-w-[350px] snap-center group cursor-pointer">
<div className="h-[450px] overflow-hidden rounded-sm mb-6 relative">
<img alt="Instructor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#4A5D4E] mb-1">Αλέξανδρος Δημητρίου</h3>
<p className="text-[#B66D58] text-xs uppercase tracking-widest mb-3">Hatha &amp; Breathwork</p>
<p className="text-[#4A5D4E]/60 text-sm leading-relaxed line-clamp-2">Ο Αλέξανδρος καθοδηγεί τους μαθητές να βρουν ηρεμία, εστιάζοντας στις παραδοσιακές τεχνικές pranayama.</p>
</div>

<div className="min-w-[280px] md:min-w-[350px] snap-center group cursor-pointer">
<div className="h-[450px] overflow-hidden rounded-sm mb-6 relative">
<img alt="Instructor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1569516449771-41c89ee14ca3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#4A5D4E] mb-1">Μαρία Βλάχου</h3>
<p className="text-[#B66D58] text-xs uppercase tracking-widest mb-3">Yin &amp; Sound Healing</p>
<p className="text-[#4A5D4E]/60 text-sm leading-relaxed line-clamp-2">Ενσωμάτωση κρυσταλλικών κυπέλλων με βαθιά χαλάρωση για πλήρη επαναφορά του νευρικού συστήματος.</p>
</div>

<div className="min-w-[280px] md:min-w-[350px] snap-center group cursor-pointer">
<div className="h-[450px] overflow-hidden rounded-sm mb-6 relative">
<img alt="Instructor" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="font-serif text-2xl text-[#4A5D4E] mb-1">Νίκος Άρης</h3>
<p className="text-[#B66D58] text-xs uppercase tracking-widest mb-3">Pilates &amp; Mobility</p>
<p className="text-[#4A5D4E]/60 text-sm leading-relaxed line-clamp-2">Χτίζοντας ανθεκτικά σώματα μέσω της ακριβούς κίνησης και της λειτουργικής προπόνησης.</p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white" id="sanctuary">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<span className="text-[#B66D58] text-xs font-medium tracking-[0.2em] uppercase">Ο Χώρος</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#4A5D4E] mt-4 mb-6">Ένα Καταφύγιο για την Ψυχή</h2>
<p className="max-w-xl mx-auto text-[#4A5D4E]/60 text-sm leading-relaxed">
                    Οργανικές υφές, άπλετο φυσικό φως και οικολογικά υλικά δημιουργούν ένα περιβάλλον που αναπνέει μαζί σας.
                </p>
</div>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<div className="break-inside-avoid">
<img alt="Studio Detail" className="w-full rounded-sm" src="https://images.unsplash.com/photo-1545205597-3d9d02c29597?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid">
<img alt="Studio Plants" className="w-full rounded-sm" src="https://images.unsplash.com/photo-1600618528240-fb9fc964b853?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid">
<div className="bg-[#F9F8F4] p-8 rounded-sm h-full flex flex-col justify-center items-center text-center">
<iconify-icon className="text-4xl text-[#4A5D4E] mb-4" icon="solar:leaf-linear"></iconify-icon>
<h4 className="font-serif text-xl mb-2">Οικολογική Συνείδηση</h4>
<p className="text-xs text-[#4A5D4E]/60">Δάπεδα φελλού &amp; μη τοξικά χρώματα.</p>
</div>
</div>
<div className="break-inside-avoid">
<img alt="Yoga Props" className="w-full rounded-sm" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid">
<img alt="Meditation Corner" className="w-full rounded-sm" src="https://images.unsplash.com/photo-1552196563-55cd4e45efb3?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="break-inside-avoid">
<img alt="Reception" className="w-full rounded-sm" src="https://images.unsplash.com/photo-1575052814086-f385e2e2ad1b?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<footer className="bg-[#4A5D4E] text-[#F9F8F4] pt-24 pb-12 px-6">
<div className="max-w-7xl mx-auto border-b border-[#F9F8F4]/20 pb-16 mb-12">
<div className="flex flex-col md:flex-row justify-between items-start gap-12">
<div className="max-w-sm">
<a className="font-serif text-3xl tracking-[0.2em] uppercase block mb-6" href="#">Yuj.</a>
<p className="text-[#F9F8F4]/60 text-sm leading-relaxed mb-6">
                        Ανυψώνοντας τη συλλογική συνείδηση μέσω της πρακτικής της γιόγκα. Ελάτε μαζί μας στη Νέα Σμύρνη.
                    </p>
<div className="flex gap-4">
<a className="opacity-60 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="opacity-60 hover:opacity-100 transition-opacity" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24">
<div>
<h4 className="font-serif text-lg mb-4 text-[#B66D58]">Εξερευνήστε</h4>
<ul className="space-y-3 text-sm text-[#F9F8F4]/70">
<li><a className="hover:text-white transition-colors" href="#">Πρόγραμμα</a></li>
<li><a className="hover:text-white transition-colors" href="#">Τιμές</a></li>
<li><a className="hover:text-white transition-colors" href="#">Δάσκαλοι</a></li>
<li><a className="hover:text-white transition-colors" href="#">Retreats</a></li>
</ul>
</div>
<div>
<h4 className="font-serif text-lg mb-4 text-[#B66D58]">Επίσκεψη</h4>
<ul className="space-y-3 text-sm text-[#F9F8F4]/70">
<li>Ελ. Βενιζέλου 25</li>
<li>Νέα Σμύρνη, 171 21</li>
<li>Αθήνα, Ελλάδα</li>
<li><a className="hover:text-white transition-colors border-b border-[#F9F8F4]/30 pb-1" href="mailto:hello@yuj.gr">hello@yuj.gr</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-[#F9F8F4]/40">
<p>© 2024 Yuj Yoga Center. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Πολιτική Απορρήτου</a>
<a className="hover:text-white" href="#">Όροι Χρήσης</a>
</div>
</div>
</footer>

    </>
  );
}
