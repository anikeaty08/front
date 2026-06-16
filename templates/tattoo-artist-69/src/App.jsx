import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Intersection Observer
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    entry.target.classList.remove('opacity-0', 'translate-y-10');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('section h2, section p, .group').forEach(el => {
            el.classList.add('transition-all', 'duration-1000', 'opacity-0', 'translate-y-10');
            observer.observe(el);
        });

        // Tab Switching Logic
        function switchTab(tab) {
            const viewInquiry = document.getElementById('view-inquiry');
            const viewCalendar = document.getElementById('view-calendar');
            const btnInquiry = document.getElementById('tab-inquiry');
            const btnCalendar = document.getElementById('tab-calendar');

            if (tab === 'inquiry') {
                viewInquiry.classList.remove('hidden');
                viewCalendar.classList.add('hidden');
                
                // Style Active
                btnInquiry.classList.add('bg-white', 'text-black', 'shadow-sm');
                btnInquiry.classList.remove('text-gray-500');
                
                // Style Inactive
                btnCalendar.classList.remove('bg-white', 'text-black', 'shadow-sm');
                btnCalendar.classList.add('text-gray-500');
            } else {
                viewInquiry.classList.add('hidden');
                viewCalendar.classList.remove('hidden');

                // Style Active
                btnCalendar.classList.add('bg-white', 'text-black', 'shadow-sm');
                btnCalendar.classList.remove('text-gray-500');

                // Style Inactive
                btnInquiry.classList.remove('bg-white', 'text-black', 'shadow-sm');
                btnInquiry.classList.add('text-gray-500');
            }
        }

        // Calendar Logic
        function selectDate(element, day) {
            // Remove selected class from all days
            document.querySelectorAll('.calendar-day').forEach(el => {
                el.classList.remove('selected');
                el.querySelector('span') ? el.querySelector('span').classList.remove('bg-white') : null;
                el.querySelector('span') ? el.querySelector('span').classList.add('bg-[#D1B6A1]') : null;
            });

            // Add selected class
            element.classList.add('selected');
            const dot = element.querySelector('span');
            if(dot) {
                dot.classList.remove('bg-[#D1B6A1]');
                dot.classList.add('bg-white');
            }

            // Show time slots
            const timeSlots = document.getElementById('time-slots');
            timeSlots.classList.remove('hidden');
            document.getElementById('selected-date-display').innerText = day + '. November';
            
            // Reset time selection
            document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('selected'));
        }

        function selectTime(element) {
            document.querySelectorAll('.time-slot').forEach(t => t.classList.remove('selected'));
            element.classList.add('selected');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-0 z-40 w-full bg-black">

<nav className="w-full mix-blend-difference text-white px-6 py-6 flex justify-between items-center transition-all duration-300">
<a className="text-xl tracking-[0.2em] font-light uppercase z-50" href="#">
                MARK<span className="font-semibold">KLAVS</span>
</a>
<div className="hidden md:flex space-x-12 text-xs tracking-widest uppercase font-medium">
<a className="hover:text-[#D1B6A1] transition-colors" href="#process">Proces</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#gallery">Galerija</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#artist">Umetnik</a>
<a className="hover:text-[#D1B6A1] transition-colors" href="#contact">Kontakt</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs tracking-widest uppercase border border-white/30 px-6 py-2 rounded-full hover:bg-white hover:text-black transition-all duration-300 group duration-1000 opacity-100 translate-y-0" href="https://wa.me/?text=Pozdravljeni,%20želim%20rezervirati%20termin.">
                Rezerviraj
                <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden z-50">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>

<div className="text-[10px] md:text-xs uppercase flex font-bold text-[#0E0E0E] tracking-[0.2em] text-center bg-[#D1B6A1] z-50 pt-3 pr-6 pb-3 pl-6 relative gap-x-4 gap-y-4 items-center justify-center">
<span className=""><span className="bg-black text-white px-2 py-0.5 rounded mr-2">INFO</span> ODPRTE REZERVACIJE ZA NOVEMBER</span>
<a className="underline decoration-1 underline-offset-2 hover:no-underline" href="#contact">Rezerviraj termin</a>
<button className="absolute right-4 md:right-6 hover:opacity-50" onclick="this.parentElement.style.display='none'">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<header className="relative w-full h-screen flex flex-col justify-end pb-12 md:pb-24 overflow-hidden">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Tattoo Model Back" className="image-cover opacity-60 grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="bg-gradient-to-t from-[#0E0E0E] via-[#0E0E0E]/40 to-transparent absolute top-0 right-0 bottom-0 left-0">
</div>
</div>
<div className="container z-10 mr-auto ml-auto px-6 relative top-24">
<div className="flex flex-col md:flex-row items-end justify-between gap-8 border-t border-white/20 pt-8">
<div className="max-w-4xl">
<p className="text-[#D1B6A1] text-sm tracking-[0.3em] uppercase mb-4 animate-fade-in">Permanentna Umetnost • Lasten Dizajn</p>
<h1 className="font-serif text-5xl md:text-7xl lg:text-9xl leading-[0.9] md:leading-[0.8] tracking-tighter font-light mb-2">
                        TATOOJI, KI <br/>
<span className="italic text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400">PRIPOVEDUJEJO TVOJO ZGODBO.</span>
</h1>
</div>
<div className="w-full md:w-auto flex flex-col items-start md:items-end gap-6">
<p className="text-gray-400 text-sm md:text-base max-w-xs font-light leading-relaxed md:text-right">
                        Mark Klavs Studio. Minimalizem in natančnost. Osebni pristop k vsakemu projektu.
                    </p>
<a className="bg-white text-black px-8 py-4 rounded-none md:rounded-full w-full md:w-auto text-center text-sm tracking-widest uppercase font-bold hover:bg-[#D1B6A1] transition-all duration-300 flex items-center justify-center gap-3 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#contact">
<svg className="lucide lucide-calendar w-4 h-4 stroke-[2]" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                        Rezerviraj Termin
                    </a>
</div>
</div>
</div>
</header>

<section className="py-16 border-b border-white/5 bg-[#0E0E0E]" id="process">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">01</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Kontakt &amp; Ideja</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Pošlji mi svoje želje, reference in mesto tetoviranja. Ocenim izvedljivost in časovni okvir.</p>
</div>

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">02</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Unikaten Dizajn</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Vsak motiv rišem sam. Pripravim osnutek, ki ga skupaj dodelava do popolnosti.</p>
</div>

<div className="group transition-all duration-1000 opacity-0 translate-y-10">
<span className="block text-4xl font-serif text-[#D1B6A1] mb-2 opacity-50 group-hover:opacity-100 transition-opacity">03</span>
<h3 className="text-sm font-bold uppercase tracking-widest mb-2">Termin</h3>
<p className="text-xs text-gray-400 leading-relaxed transition-all duration-1000 opacity-0 translate-y-10">Po potrditvi dizajna rezerviramo termin. Zagotovilo s pologom.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E]" id="gallery">
<div className="container mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="font-serif text-5xl md:text-7xl font-light tracking-tight transition-all duration-1000 opacity-0 translate-y-10">GALERIJA</h2>
</div>
<a className="hidden md:block mt-6 md:mt-0 text-[#D1B6A1] text-xs tracking-[0.2em] uppercase border border-[#D1B6A1]/30 px-6 py-3 rounded-full hover:bg-[#D1B6A1] hover:text-black transition-all" href="#contact">
                    Poglej Celoten Portfolio
                </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 h-auto">

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] md:translate-y-12 transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Arm Tattoo" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
</div>

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Back Piece" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1611558709798-e009c8fd7706?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
</div>

<div className="group relative overflow-hidden aspect-[3/4] md:aspect-[2/3] md:translate-y-24 transition-all duration-1000 opacity-0 translate-y-10">
<img alt="Detailed Tattoo" className="image-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700 ease-out" src="https://images.unsplash.com/photo-1598371839696-5c5bb00bdc28?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-all duration-500"></div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24" id="artist">
<div className="container mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16 items-center lg:items-start">

<div className="w-full lg:w-1/2 relative group">
<div className="aspect-[3/4] overflow-hidden bg-gray-100 relative">
<img className="image-cover grayscale contrast-125 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1598133894008-61f7fdb8cc3a?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="w-full lg:w-1/2 flex flex-col justify-center h-full pt-8">
<span className="block text-[#D1B6A1] text-xs font-bold tracking-[0.2em] uppercase mb-4">Umetnik</span>
<h2 className="font-serif text-5xl md:text-7xl leading-none tracking-tighter mb-8 transition-all duration-1000 opacity-0 translate-y-10">
                        MARK <br/>KLAVS
                    </h2>
<div className="flex flex-wrap gap-4 mb-8 transition-all duration-1000 opacity-0 translate-y-10">
<span className="border border-black px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">Blackwork</span>
<span className="border border-black px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">Fine Line</span>
<span className="border border-black px-4 py-1.5 rounded-full text-[10px] uppercase font-bold tracking-widest">Realizem</span>
</div>
<p className="text-gray-600 font-light text-lg leading-relaxed mb-8 transition-all duration-1000 opacity-0 translate-y-10">
                        Z več kot 8 leti izkušenj se posvečam ustvarjanju trajne umetnosti, ki presega zgolj estetiko. Vsak tatoo je sodelovanje med menoj in stranko. Moje delo temelji na natančnosti, čistoči in ustvarjanju dizajnov, ki se naravno prilegajo telesu.
                    </p>
<div className="space-y-4 mb-10 text-sm font-medium text-gray-800 transition-all duration-1000 opacity-0 translate-y-10">
<p className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#D1B6A1]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Individualen pristop in unikatni dizajni
                        </p>
<p className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#D1B6A1]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Najvišji higienski standardi
                        </p>
<p className="flex items-center gap-3">
<svg className="lucide lucide-check w-4 h-4 text-[#D1B6A1]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                            Uporaba premium veganskih črnil
                        </p>
</div>
<div className="flex gap-4">
<a className="w-12 h-12 border border-gray-200 rounded-full flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="https://instagram.com">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="bg-black text-white px-8 rounded-full text-xs uppercase font-bold tracking-widest flex items-center justify-center gap-3 hover:bg-[#D1B6A1] hover:text-black transition-all duration-300 shadow-xl" href="#contact">
                            Rezerviraj Posvet <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0E0E0E] border-t border-white/10">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="flex flex-col justify-center">
<div className="grid grid-cols-2 gap-8 mb-12">
<div className="border-l border-[#D1B6A1] pl-6">
<h4 className="text-4xl font-serif">+1.5k</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 transition-all duration-1000 opacity-0 translate-y-10">Izdelanih Tatoojev</p>
</div>
<div className="border-l border-[#D1B6A1] pl-6">
<h4 className="text-4xl font-serif">8+</h4>
<p className="text-xs uppercase tracking-widest text-gray-500 mt-1 transition-all duration-1000 opacity-0 translate-y-10">Let Izkušenj</p>
</div>
</div>
<p className="font-serif text-2xl italic leading-snug text-gray-300 transition-all duration-1000 opacity-0 translate-y-10">"Markova pozornost do detajlov je neprimerljiva. Celotna izkušnja je bila profesionalna in sproščena, rezultat pa presegel vsa pričakovanja."</p>
<div className="flex items-center gap-4 mt-6">
<div className="w-10 h-10 bg-gray-800 rounded-full overflow-hidden">
<img className="w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-white">Ana Hribar</span>
<span className="text-[10px] text-gray-500">Floral · Zaceljeno</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white text-black py-24" id="contact">
<div className="container mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">

<div className="space-y-8">
<h2 className="font-serif text-5xl tracking-tighter transition-all duration-1000 opacity-0 translate-y-10">LOKACIJA <br/> &amp; TERMINI</h2>
<div className="space-y-4 text-sm font-light text-gray-600">
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-map-pin w-4 h-4 text-black" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Slovenska cesta 1, Ljubljana, Slovenija
                        </p>
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-mail w-4 h-4 text-black" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                            info@markklavs.com
                        </p>
<p className="flex items-center gap-3 transition-all duration-1000 opacity-0 translate-y-10">
<svg className="lucide lucide-calendar w-4 h-4 text-black" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                            Odprto za rezervacije: Nov - Dec
                        </p>
</div>

<div className="w-full h-64 bg-gray-100 grayscale relative overflow-hidden border border-gray-200">
<iframe allowfullscreen="" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2769.752391696956!2d14.5037!3d46.0523!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x476531f59698c1d9%3A0x62955940c618c760!2sSlovenska%20cesta%2C%201000%20Ljubljana%2C%20Slovenia!5e0!3m2!1sen!2ssi!4v1700000000000!5m2!1sen!2ssi" style={{border: '0'}} width="100%"></iframe>
</div>
<a className="inline-block text-xs uppercase font-bold tracking-widest border-b border-black pb-1 hover:text-[#D1B6A1] hover:border-[#D1B6A1] transition-colors" href="https://maps.google.com" target="_blank">
                        Odpri v Google Maps
                    </a>
</div>

<div className="bg-gray-50 p-6 md:p-12 relative h-fit min-h-[600px] flex flex-col">

<div className="flex p-1 bg-gray-200 rounded-lg mb-8 w-fit mx-auto md:mx-0">
<button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-md bg-white shadow-sm transition-all text-black" id="tab-inquiry" onclick="switchTab('inquiry')">
                            Pošlji Povpraševanje
                        </button>
<button className="px-6 py-2 text-[10px] font-bold uppercase tracking-widest rounded-md text-gray-500 hover:text-black transition-all" id="tab-calendar" onclick="switchTab('calendar')">
                            Rezerviraj Termin
                        </button>
</div>

<div className="transition-opacity duration-300" id="view-inquiry">
<h3 className="text-xl font-serif font-bold mb-6">Piši mi</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Ime</label>
<input className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors" placeholder="Tvoje ime" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Email</label>
<input className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors" placeholder="email@naslov.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Želen Stil</label>
<select className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors text-gray-700">
<option>Izberi Stil...</option>
<option>Blackwork</option>
<option>Fine Line</option>
<option>Realizem</option>
<option>Drugo</option>
</select>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-gray-500">Ideja / Mesto</label>
<textarea className="w-full bg-white border-b border-gray-300 p-2 focus:outline-none focus:border-black transition-colors h-24 resize-none" placeholder="Na kratko opiši svojo idejo in mesto na telesu..."></textarea>
</div>
<button className="w-full bg-[#0E0E0E] text-white py-4 text-xs uppercase font-bold tracking-widest hover:bg-[#D1B6A1] hover:text-black transition-all duration-300" type="button">
                                Pošlji Povpraševanje
                            </button>
<p className="text-center text-[10px] text-gray-400 mt-4">Odgovorim ponavadi v 24 urah.</p>
</form>
</div>

<div className="hidden transition-opacity duration-300" id="view-calendar">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-serif font-bold">November 2024</h3>
<div className="flex gap-2">
<button className="p-2 hover:bg-gray-200 rounded-full"><svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<button className="p-2 hover:bg-gray-200 rounded-full"><svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
</div>

<div className="grid grid-cols-7 gap-1 mb-2 text-center">
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Pon</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Tor</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Sre</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Čet</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Pet</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Sob</span>
<span className="text-[10px] font-bold text-gray-400 uppercase tracking-widest py-2">Ned</span>
</div>
<div className="grid grid-cols-7 gap-1 text-sm font-medium text-gray-700" id="calendar-grid">

<div className="aspect-square flex items-center justify-center"></div>
<div className="aspect-square flex items-center justify-center"></div>


<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">1</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">2</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">3</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">4</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 5)">
                                5
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 6)">
                                6
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">7</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 8)">
                                8
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">9</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">10</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 11)">
                                11
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 12)">
                                12
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">13</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">14</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 15)">
                                15
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>

<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">16</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">17</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 18)">
                                18
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 19)">
                                19
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">20</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">21</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">22</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">23</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">24</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 25)">
                                25
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">26</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full hover:bg-gray-200 transition-all group relative" onclick="selectDate(this, 27)">
                                27
                                <span className="w-1 h-1 bg-[#D1B6A1] rounded-full absolute bottom-2"></span>
</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">28</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">29</button>
<button className="calendar-day aspect-square flex flex-col items-center justify-center rounded-full disabled transition-all">30</button>
</div>
<div className="mt-2 flex items-center justify-center gap-4 text-[10px] uppercase font-bold tracking-widest text-gray-400 mb-6">
<span className="flex items-center gap-1"><span className="w-2 h-2 bg-[#D1B6A1] rounded-full"></span>Prosto</span>
<span className="flex items-center gap-1"><span className="w-2 h-2 bg-gray-300 rounded-full"></span>Zasedeno</span>
</div>

<div className="hidden border-t border-gray-100 pt-6 animate-fade-in" id="time-slots">
<p className="text-[10px] uppercase font-bold tracking-widest text-gray-500 mb-4">Razpoložljivi termini za <span className="text-black" id="selected-date-display">...</span></p>
<div className="grid grid-cols-3 gap-2 mb-6">
<button className="time-slot border border-gray-200 py-2 rounded text-xs font-medium hover:border-black hover:bg-gray-50 transition-all" onclick="selectTime(this)">10:00</button>
<button className="time-slot border border-gray-200 py-2 rounded text-xs font-medium hover:border-black hover:bg-gray-50 transition-all" onclick="selectTime(this)">13:00</button>
<button className="time-slot border border-gray-200 py-2 rounded text-xs font-medium hover:border-black hover:bg-gray-50 transition-all" onclick="selectTime(this)">16:00</button>
</div>
<button className="w-full bg-[#0E0E0E] text-white py-4 text-xs uppercase font-bold tracking-widest hover:bg-[#D1B6A1] hover:text-black transition-all duration-300">
                                Potrdi Termin
                            </button>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 bg-[#0E0E0E] border-t border-white/10 text-center">
<div className="container mx-auto px-6">
<h2 className="font-serif text-3xl md:text-5xl tracking-tighter mb-8 text-white uppercase">
                Mark Klavs<span className="font-bold">Studio</span>
</h2>
<div className="flex flex-col md:flex-row justify-center items-center gap-8 text-xs text-gray-500 uppercase tracking-widest">
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">TikTok</a>
<a className="hover:text-white transition-colors" href="#">Email</a>
</div>
<p className="text-[10px] text-gray-700 mt-8 uppercase tracking-widest">© 2024 Mark Klavs. Vse pravice pridržane.</p>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group transition-all duration-1000 opacity-100 translate-y-0" href="https://wa.me/?text=Pozdravljeni,%20imam%20vprašanje." target="_blank">
<span className="hidden md:block bg-white text-black text-xs font-bold py-2 px-4 rounded-full shadow-lg opacity-0 group-hover:opacity-100 transition-opacity duration-300">
            Imaš vprašanje? Piši mi
        </span>
<div className="w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-lg hover:scale-110 transition-transform whatsapp-pulse">
<svg className="lucide lucide-message-circle w-8 h-8 text-white fill-white stroke-none" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
</a>


    </>
  );
}
