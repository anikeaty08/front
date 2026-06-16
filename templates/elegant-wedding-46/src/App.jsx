import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
serif: ['Cormorant Garamond', 'serif'],
sans: ['Inter', 'system-ui', 'sans-serif'],
},
colors: {
ivory: '#FAF6F0',
champagne: '#DECDB5',
rosegold: '#C27770',
gold: '#B8844D',
camel: '#78491F',
espresso: '#341508',
richblack: '#0A0806',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Theme Toggle Logic
        function toggleTheme() {
            const html = document.documentElement;
            if (html.classList.contains('dark')) {
                html.classList.remove('dark');
                localStorage.setItem('theme', 'light');
            } else {
                html.classList.add('dark');
                localStorage.setItem('theme', 'dark');
            }
        }

        // Check system preference on load
        if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
            document.documentElement.classList.add('dark');
        }

        // Mobile Menu Logic
        const menuBtn = document.getElementById('mobile-menu-btn');
        const closeMenuBtn = document.getElementById('close-menu-btn');
        const drawer = document.getElementById('mobile-drawer');
        const drawerContent = drawer.querySelector('div');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMenu() {
            drawer.classList.remove('opacity-0', 'pointer-events-none');
            drawerContent.classList.remove('-translate-x-full');
        }

        function closeMenu() {
            drawerContent.classList.add('-translate-x-full');
            setTimeout(() => {
                drawer.classList.add('opacity-0', 'pointer-events-none');
            }, 300);
        }

        menuBtn.addEventListener('click', openMenu);
        closeMenuBtn.addEventListener('click', closeMenu);
        
        mobileLinks.forEach(link => {
            link.addEventListener('click', closeMenu);
        });

        // RSVP Wizard Logic
        function nextStep() {
            const step1 = document.getElementById('rsvp-step-1');
            const step2 = document.getElementById('rsvp-step-2');
            
            // Simple fade switch
            step1.style.opacity = '0';
            setTimeout(() => {
                step1.classList.add('hidden');
                step2.classList.remove('hidden');
                // Trigger reflow
                void step2.offsetWidth;
                step2.classList.add('opacity-100');
            }, 300);
        }

        // Countdown Timer
        const weddingDate = new Date('July 4, 2026 14:00:00').getTime();

        const timer = setInterval(function() {
            const now = new Date().getTime();
            const distance = weddingDate - now;

            const days = Math.floor(distance / (1000 * 60 * 60 * 24));
            const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
            const seconds = Math.floor((distance % (1000 * 60)) / 1000);

            document.getElementById("days").innerText = days;
            document.getElementById("hours").innerText = hours;
            document.getElementById("minutes").innerText = minutes;
            document.getElementById("seconds").innerText = seconds;

            if (distance < 0) {
                clearInterval(timer);
                document.getElementById("days").innerText = "00";
            }
        }, 1000);

        // Intersection Observer for Fade-ins
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in-section').forEach(section => {
            observer.observe(section);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main>

<section className="relative h-screen flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Wedding Background" className="w-full h-full object-cover opacity-80 dark:opacity-30 filter sepia-[0.15] contrast-[0.9]" src="https://images.unsplash.com/photo-1519741497674-611481863552?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-ivory/60 via-ivory/20 to-ivory dark:from-richblack/60 dark:via-richblack/20 dark:to-richblack"></div>
</div>
<div className="relative z-10 text-center px-6 max-w-5xl mx-auto fade-in-section">
<div className="mb-8 inline-flex flex-col items-center">
<span className="text-gold text-xs tracking-[0.3em] font-sans uppercase mb-4">Save the Date</span>
<div className="w-px h-16 bg-rosegold/60 mb-2"></div>
</div>
<h1 className="text-7xl md:text-9xl tracking-tight font-light text-espresso dark:text-ivory mb-4 leading-none">
                    Hervé <span className="text-rosegold font-light italic text-6xl md:text-8xl align-middle mx-4 opacity-80">&amp;</span> Raissa
                </h1>
<p className="text-2xl md:text-3xl text-camel dark:text-champagne mt-8 font-light italic tracking-wide">
                    July 4, 2026 <span className="text-rosegold mx-3 text-sm align-middle">◆</span> Ghent, Belgium
                </p>

<div className="mt-16 grid grid-cols-4 gap-6 md:gap-16 max-w-2xl mx-auto text-espresso dark:text-ivory border-t border-b border-camel/10 dark:border-ivory/10 py-8">
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-light tabular-nums" id="days">--</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-camel dark:text-champagne font-sans mt-2">Days</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-light tabular-nums" id="hours">--</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-camel dark:text-champagne font-sans mt-2">Hours</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-light tabular-nums" id="minutes">--</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-camel dark:text-champagne font-sans mt-2">Mins</span>
</div>
<div className="flex flex-col items-center">
<span className="text-3xl md:text-5xl font-light tabular-nums" id="seconds">--</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-camel dark:text-champagne font-sans mt-2">Secs</span>
</div>
</div>
<div className="mt-16">
<a className="inline-block px-10 py-4 bg-espresso dark:bg-ivory text-ivory dark:text-espresso hover:bg-gold dark:hover:bg-gold hover:text-white dark:hover:text-white transition-all duration-500 tracking-[0.2em] text-xs font-sans uppercase rounded-full shadow-sm hover:shadow-lg" href="#rsvp">
                        Respond Kindly
                    </a>
</div>
</div>
</section>

<nav className="sticky top-0 w-full z-50 border-b border-camel/5 dark:border-ivory/5 bg-ivory/90 dark:bg-richblack/90 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<button className="lg:hidden text-espresso dark:text-ivory hover:text-rosegold transition-colors" id="mobile-menu-btn">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>

<a className="text-3xl tracking-tight flex items-center gap-3 group mx-auto lg:mx-0 font-medium" href="#home">
<span className="text-espresso dark:text-ivory group-hover:text-gold transition-colors duration-300">H</span>
<span className="text-rosegold font-light text-2xl relative top-[1px]">|</span>
<span className="text-espresso dark:text-ivory group-hover:text-gold transition-colors duration-300">R</span>
</a>

<div className="hidden lg:flex items-center gap-10 text-xs tracking-widest uppercase font-sans font-medium text-camel dark:text-champagne">
<a className="hover:text-gold transition-colors" href="#home">Home</a>
<a className="hover:text-gold transition-colors" href="#events">Events</a>
<a className="hover:text-gold transition-colors" href="#story">Story</a>
<a className="hover:text-gold transition-colors" href="#party">Party</a>
<a className="hover:text-gold transition-colors" href="#gifts">Gifts</a>
</div>

<div className="flex items-center gap-4">
<button aria-label="Toggle Theme" className="p-2 rounded-full hover:bg-camel/5 transition-colors text-espresso dark:text-ivory flex items-center justify-center" onclick="toggleTheme()">
<iconify-icon className="text-lg hidden dark:block" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
<iconify-icon className="text-lg block dark:hidden" icon="solar:sun-linear" strokeWidth="1.5"></iconify-icon>
</button>

<div className="hidden sm:flex text-[10px] font-sans border border-camel/20 dark:border-champagne/20 rounded-full p-1">
<button className="px-3 py-1 rounded-full bg-gold text-white font-medium transition-colors">EN</button>
<button className="px-3 py-1 rounded-full text-camel dark:text-champagne hover:text-gold transition-colors">FR</button>
</div>
<a className="hidden lg:inline-flex items-center justify-center px-8 py-2 border border-gold text-gold hover:bg-gold hover:text-white transition-all duration-300 text-[10px] tracking-widest uppercase font-sans rounded-full" href="#rsvp">
                        RSVP
                    </a>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-richblack/50 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="mobile-drawer">
<div className="absolute top-0 left-0 w-3/4 h-full bg-ivory dark:bg-richblack border-r border-rosegold/20 transform -translate-x-full transition-transform duration-300 flex flex-col p-8">
<button className="self-end mb-8 text-espresso dark:text-ivory hover:text-rosegold" id="close-menu-btn">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="flex flex-col gap-8 text-2xl tracking-tight text-espresso dark:text-ivory font-serif italic">
<a className="mobile-link hover:text-gold transition-colors" href="#home">Home</a>
<a className="mobile-link hover:text-gold transition-colors" href="#events">Events</a>
<a className="mobile-link hover:text-gold transition-colors" href="#story">Our Story</a>
<a className="mobile-link hover:text-gold transition-colors" href="#party">Wedding Party</a>
<a className="mobile-link hover:text-gold transition-colors" href="#gifts">Gifts</a>
<a className="mobile-link text-gold not-italic font-sans text-sm tracking-widest uppercase mt-4" href="#rsvp">RSVP Now</a>
</div>
</div>
</div>

<section className="py-32 px-6 md:px-12 max-w-6xl mx-auto" id="story">
<div className="grid md:grid-cols-2 gap-20 items-center fade-in-section">
<div className="relative group">

<div className="absolute -inset-4 border border-rosegold/20 rounded-3xl transition-transform duration-700 group-hover:inset-0"></div>
<img alt="Couple" className="relative z-10 w-full rounded-3xl h-[600px] object-cover filter sepia-[0.1] hover:sepia-0 transition-all duration-700 shadow-sm" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="md:pl-10">
<div className="flex items-center gap-4 mb-8">
<div className="h-px w-12 bg-rosegold"></div>
<span className="text-gold font-sans text-[10px] tracking-[0.25em] uppercase">Our Story</span>
</div>
<h2 className="text-5xl md:text-6xl tracking-tight mb-8 text-espresso dark:text-ivory font-light">A journey that started with a simple hello.</h2>
<p className="text-xl text-camel dark:text-champagne leading-relaxed font-light mb-8 italic">
                        "From our first meeting in Brussels to our engagement under the stars, every moment has led us to this day."
                    </p>
<p className="text-base text-espresso/80 dark:text-ivory/80 leading-loose font-sans font-light mb-10">
                        We invite you to share in our joy as we celebrate the beginning of our new life together. We have chosen Ghent for its timeless beauty, mirroring the eternal promise we are about to make to one another.
                    </p>
<img alt="Signature" className="h-16 opacity-40 dark:invert filter sepia" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</section>

<section className="py-32 bg-ivory dark:bg-richblack" id="events">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 fade-in-section">
<h2 className="text-5xl tracking-tight text-espresso dark:text-ivory mb-6 font-light">Celebration Timeline</h2>
<div className="flex items-center justify-center gap-4 text-camel dark:text-champagne">
<span className="h-px w-8 bg-rosegold/40"></span>
<p className="font-light italic text-xl">Saturday, July 4th, 2026</p>
<span className="h-px w-8 bg-rosegold/40"></span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="group fade-in-section">
<div className="bg-champagne/20 dark:bg-white/5 p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-500 relative h-full">
<div className="absolute top-8 right-8 text-gold opacity-60">
<iconify-icon className="text-3xl" icon="solar:buildings-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-0 py-1 text-gold text-xs font-sans tracking-[0.2em] font-medium uppercase mb-4 border-b border-gold/20">11:00 AM</span>
<h3 className="text-3xl text-espresso dark:text-ivory tracking-tight mb-2 font-normal">Civil Wedding</h3>
<p className="text-camel dark:text-champagne mb-8 italic">City Hall, Ghent</p>
<p className="text-sm text-espresso/70 dark:text-ivory/70 leading-relaxed mb-8 font-sans font-light">
                                An intimate gathering for the legal union. Dress code: Smart Casual.
                            </p>
<a className="inline-flex items-center gap-2 text-gold text-[10px] font-sans uppercase tracking-[0.2em] hover:text-rosegold transition-colors" href="#">
                                View Map <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group fade-in-section transition-delay-100">
<div className="bg-champagne/20 dark:bg-white/5 p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-500 relative h-full">
<div className="absolute top-8 right-8 text-gold opacity-60">
<iconify-icon className="text-3xl" icon="solar:bell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-0 py-1 text-gold text-xs font-sans tracking-[0.2em] font-medium uppercase mb-4 border-b border-gold/20">02:00 PM</span>
<h3 className="text-3xl text-espresso dark:text-ivory tracking-tight mb-2 font-normal">Religious Ceremony</h3>
<p className="text-camel dark:text-champagne mb-8 italic">Saint Nicholas' Church</p>
<p className="text-sm text-espresso/70 dark:text-ivory/70 leading-relaxed mb-8 font-sans font-light">
                                The blessing of our marriage. Please arrive by 1:30 PM.
                            </p>
<a className="inline-flex items-center gap-2 text-gold text-[10px] font-sans uppercase tracking-[0.2em] hover:text-rosegold transition-colors" href="#">
                                View Map <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group fade-in-section transition-delay-200">
<div className="bg-champagne/20 dark:bg-white/5 p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-500 relative h-full">
<div className="absolute top-8 right-8 text-gold opacity-60">
<iconify-icon className="text-3xl" icon="solar:wineglass-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-0 py-1 text-gold text-xs font-sans tracking-[0.2em] font-medium uppercase mb-4 border-b border-gold/20">05:00 PM</span>
<h3 className="text-3xl text-espresso dark:text-ivory tracking-tight mb-2 font-normal">Cocktail Hour</h3>
<p className="text-camel dark:text-champagne mb-8 italic">Opera Ballet Vlaanderen</p>
<p className="text-sm text-espresso/70 dark:text-ivory/70 leading-relaxed mb-8 font-sans font-light">
                                Drinks, hors d'oeuvres, and live jazz in the garden.
                            </p>
<a className="inline-flex items-center gap-2 text-gold text-[10px] font-sans uppercase tracking-[0.2em] hover:text-rosegold transition-colors" href="#">
                                View Map <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group fade-in-section transition-delay-300">
<div className="bg-champagne/20 dark:bg-white/5 p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-500 relative h-full">
<div className="absolute top-8 right-8 text-gold opacity-60">
<iconify-icon className="text-3xl" icon="solar:music-notes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="inline-block px-0 py-1 text-gold text-xs font-sans tracking-[0.2em] font-medium uppercase mb-4 border-b border-gold/20">07:00 PM</span>
<h3 className="text-3xl text-espresso dark:text-ivory tracking-tight mb-2 font-normal">Dinner &amp; Party</h3>
<p className="text-camel dark:text-champagne mb-8 italic">Opera Grand Hall</p>
<p className="text-sm text-espresso/70 dark:text-ivory/70 leading-relaxed mb-8 font-sans font-light">
                                Seated dinner followed by dancing until dawn. Black Tie.
                            </p>
<a className="inline-flex items-center gap-2 text-gold text-[10px] font-sans uppercase tracking-[0.2em] hover:text-rosegold transition-colors" href="#">
                                View Map <iconify-icon className="text-sm" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-7xl mx-auto" id="party">
<div className="text-center mb-20 fade-in-section">
<span className="text-gold font-sans text-xs tracking-[0.3em] uppercase block mb-6">By Our Side</span>
<h2 className="text-5xl tracking-tight text-espresso dark:text-ivory font-light">Wedding Party</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">

<div className="group fade-in-section text-center">
<div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-champagne/30 rounded-3xl relative">
<div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Best Man" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-2xl text-espresso dark:text-ivory mb-2 font-normal">Marc Dubois</h4>
<p className="text-rosegold font-sans text-[10px] tracking-[0.2em] uppercase">Best Man</p>
</div>

<div className="group fade-in-section transition-delay-100 text-center">
<div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-champagne/30 rounded-3xl relative">
<div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Maid of Honor" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-2xl text-espresso dark:text-ivory mb-2 font-normal">Sophie Laurent</h4>
<p className="text-rosegold font-sans text-[10px] tracking-[0.2em] uppercase">Maid of Honor</p>
</div>

<div className="group fade-in-section transition-delay-200 text-center">
<div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-champagne/30 rounded-3xl relative">
<div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Groomsman" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-2xl text-espresso dark:text-ivory mb-2 font-normal">Jean Michel</h4>
<p className="text-rosegold font-sans text-[10px] tracking-[0.2em] uppercase">Groomsman</p>
</div>

<div className="group fade-in-section transition-delay-300 text-center">
<div className="w-full aspect-[4/5] overflow-hidden mb-8 bg-champagne/30 rounded-3xl relative">
<div className="absolute inset-0 bg-espresso/10 group-hover:bg-transparent transition-colors duration-500 z-10"></div>
<img alt="Bridesmaid" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-1000 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
</div>
<h4 className="text-2xl text-espresso dark:text-ivory mb-2 font-normal">Marie Claire</h4>
<p className="text-rosegold font-sans text-[10px] tracking-[0.2em] uppercase">Bridesmaid</p>
</div>
</div>
</section>

<section className="py-12 px-4 md:px-8">
<div className="columns-2 md:columns-3 lg:columns-4 gap-4 space-y-4 max-w-screen-2xl mx-auto">
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://images.unsplash.com/photo-1515934751635-c81c6bc9a2d8?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://images.unsplash.com/photo-1529636798458-92182e662485?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://images.unsplash.com/photo-1606800052052-a08af7148866?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<img className="w-full rounded-2xl fade-in-section hover:opacity-80 transition-opacity grayscale hover:grayscale-0 duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</section>

<section className="py-32 px-6 bg-champagne/10 dark:bg-white/5" id="gifts">
<div className="max-w-4xl mx-auto text-center fade-in-section">
<div className="w-12 h-12 rounded-full border border-rosegold flex items-center justify-center mx-auto mb-8 text-rosegold">
<iconify-icon className="text-xl" icon="solar:gift-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-5xl tracking-tight text-espresso dark:text-ivory mb-6 font-light">Registry &amp; Gifts</h2>
<p className="text-lg text-camel dark:text-champagne font-light mb-16 max-w-2xl mx-auto leading-relaxed">
                    Your presence at our wedding is the greatest gift of all. However, if you wish to honor us with a gift, a cash contribution towards our honeymoon would be very welcome.
                </p>
<div className="grid md:grid-cols-2 gap-8 text-left">
<div className="bg-ivory dark:bg-richblack p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-300 shadow-sm">
<h4 className="text-xl text-espresso dark:text-ivory mb-6 flex items-center gap-3 font-normal">
<iconify-icon className="text-xl text-gold" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon> Bank Transfer
                        </h4>
<div className="space-y-3 font-sans text-sm text-espresso/70 dark:text-ivory/70 tracking-wide">
<p className="flex justify-between"><span className="text-camel dark:text-champagne">Account Name</span> <span>Herssa Wedding</span></p>
<div className="h-px bg-camel/10 dark:bg-ivory/10"></div>
<p className="flex justify-between"><span className="text-camel dark:text-champagne">IBAN</span> <span>BE45 0000 1111 2222</span></p>
<div className="h-px bg-camel/10 dark:bg-ivory/10"></div>
<p className="flex justify-between"><span className="text-camel dark:text-champagne">BIC</span> <span>GEBA BE BB</span></p>
</div>
</div>
<div className="bg-ivory dark:bg-richblack p-10 border border-transparent hover:border-rosegold/30 rounded-3xl transition-all duration-300 shadow-sm flex items-center gap-8">
<div className="bg-white p-2 w-28 h-28 shrink-0 rounded-2xl border border-camel/10">

<img alt="Payment QR" className="w-full h-full opacity-80 mix-blend-multiply rounded-xl" src="https://api.qrserver.com/v1/create-qr-code/?size=150x150&amp;data=Herveraissa"/>
</div>
<div>
<h4 className="text-xl text-espresso dark:text-ivory mb-3 font-normal">Scan to Contribute</h4>
<p className="text-sm text-camel dark:text-champagne font-light leading-relaxed">Use your banking app or Payconiq to send a gift directly.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 max-w-3xl mx-auto" id="rsvp">
<div className="border border-rosegold/30 bg-ivory dark:bg-richblack p-8 md:p-16 rounded-3xl shadow-[0_20px_50px_-12px_rgba(0,0,0,0.05)] fade-in-section relative">
<div className="text-center mb-12">
<span className="text-gold font-sans text-[10px] tracking-[0.3em] uppercase">Répondez s'il vous plaît</span>
<h2 className="text-5xl tracking-tight text-espresso dark:text-ivory mt-4 font-light">Join Us</h2>
</div>

<div className="space-y-8" id="rsvp-step-1">
<div>
<label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-camel dark:text-champagne mb-3 ml-2">Full Name</label>
<input className="w-full bg-camel/5 dark:bg-ivory/5 border border-transparent px-6 py-4 rounded-xl text-espresso dark:text-ivory focus:border-rosegold focus:outline-none transition-colors placeholder:text-camel/30 dark:placeholder:text-ivory/20 text-lg font-serif" placeholder="As it appears on invitation" type="text"/>
</div>
<div>
<label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-camel dark:text-champagne mb-3 ml-2">Phone Number</label>
<input className="w-full bg-camel/5 dark:bg-ivory/5 border border-transparent px-6 py-4 rounded-xl text-espresso dark:text-ivory focus:border-rosegold focus:outline-none transition-colors placeholder:text-camel/30 dark:placeholder:text-ivory/20 text-lg font-serif" placeholder="+32 ..." type="tel"/>
</div>
<button className="w-full py-5 rounded-full bg-espresso dark:bg-ivory text-ivory dark:text-espresso mt-8 font-sans uppercase text-[10px] tracking-[0.25em] hover:bg-gold dark:hover:bg-gold hover:text-white transition-all duration-500" onclick="nextStep()">
                        Find Invitation
                    </button>
</div>

<div className="hidden space-y-8 animate-fade-in" id="rsvp-step-2">
<p className="text-center text-rosegold italic mb-8 text-xl">Welcome, Hervé &amp; Guest</p>
<div className="space-y-4">
<label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-camel dark:text-champagne ml-2">Will you attend?</label>
<div className="flex flex-col sm:flex-row gap-6 bg-camel/5 dark:bg-ivory/5 p-6 rounded-xl">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-gold rounded-full flex items-center justify-center group-hover:border-rosegold transition-colors">
<div className="w-2 h-2 rounded-full bg-rosegold opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<input className="hidden" name="attendance" type="radio"/>
<span className="text-espresso dark:text-ivory italic">Joyfully Accept</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="w-4 h-4 border border-gold rounded-full flex items-center justify-center group-hover:border-rosegold transition-colors">
<div className="w-2 h-2 rounded-full bg-rosegold opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
<input className="hidden" name="attendance" type="radio"/>
<span className="text-espresso dark:text-ivory italic">Regretfully Decline</span>
</label>
</div>
</div>
<div className="space-y-4 pt-4 border-t border-camel/10 dark:border-ivory/10">
<label className="block text-[10px] font-sans uppercase tracking-[0.2em] text-camel dark:text-champagne ml-2">Dietary Requirements</label>
<select className="w-full bg-camel/5 dark:bg-ivory/5 border border-transparent px-6 py-4 text-espresso dark:text-ivory focus:border-rosegold focus:outline-none rounded-xl font-serif">
<option className="bg-ivory dark:bg-richblack">None</option>
<option className="bg-ivory dark:bg-richblack">Vegetarian</option>
<option className="bg-ivory dark:bg-richblack">Vegan</option>
<option className="bg-ivory dark:bg-richblack">Gluten Free</option>
</select>
</div>
<button className="w-full py-5 rounded-full bg-gold text-white mt-8 font-sans uppercase text-[10px] tracking-[0.25em] hover:bg-espresso dark:hover:bg-ivory dark:hover:text-espresso transition-all duration-500">
                        Confirm RSVP
                    </button>
</div>
</div>
</section>
</main>

<footer className="bg-espresso text-ivory/80 pt-20 overflow-hidden border-t border-white/5 flex flex-col items-center">
<div className="w-full max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-10">
<div className="text-center md:text-left">
<h3 className="text-3xl font-serif text-ivory mb-2 font-light">Hervé <span className="text-rosegold">|</span> Raissa</h3>
<p className="text-[10px] font-sans uppercase tracking-[0.2em] text-gold">July 4, 2026 • Ghent</p>
</div>
<div className="flex gap-8 text-[10px] font-sans tracking-[0.2em] uppercase">
<a className="hover:text-gold transition-colors" href="#">Instagram</a>
<a className="hover:text-gold transition-colors" href="#">Spotify</a>
<a className="hover:text-gold transition-colors" href="#">Contact</a>
</div>
<div className="text-[10px] font-sans opacity-40 uppercase tracking-wider">
                © 2026 Herssa. Designed with Love.
            </div>
</div>

<div className="mt-20 w-full flex justify-center items-end leading-none select-none">
<h2 className="text-[16vw] font-serif font-light tracking-tighter text-ivory/10 m-0 p-0 leading-[0.75] whitespace-nowrap">
                HERVÉ &amp; RAISSA
            </h2>
</div>
</footer>



    </>
  );
}
