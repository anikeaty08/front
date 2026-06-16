import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



  // Mobile menu toggle logic
  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    if (!toggleBtn || !menu) return;

    const icon = toggleBtn.querySelector('iconify-icon');

    function openMenu() {
      menu.classList.remove('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'false');
      if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
      document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
      menu.classList.add('opacity-0', 'pointer-events-none');
      menu.setAttribute('aria-hidden', 'true');
      if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
      document.body.style.overflow = '';
    }

    function isOpen() {
      return !menu.classList.contains('opacity-0');
    }

    toggleBtn.addEventListener('click', () => {
      if (isOpen()) {
        closeMenu();
      } else {
        openMenu();
      }
    });

    document.addEventListener('keydown', (e) => {
      if (e.key === 'Escape' && isOpen()) closeMenu();
    });
  })();



        // Simple Carousel Logic
        const cards = document.querySelectorAll('.slider-card');
        const prevBtn = document.getElementById('prevBtn');
        const nextBtn = document.getElementById('nextBtn');
        let currentIndex = 0;
        const totalCards = cards.length;

        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }

        function nextCard() {
            currentIndex = (currentIndex + 1) % totalCards;
            showCard(currentIndex);
        }

        function prevCard() {
            currentIndex = (currentIndex - 1 + totalCards) % totalCards;
            showCard(currentIndex);
        }

        nextBtn.addEventListener('click', () => {
            nextCard();
            resetInterval();
        });

        prevBtn.addEventListener('click', () => {
            prevCard();
            resetInterval();
        });

        let autoSlide = setInterval(nextCard, 4000);

        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 4000);
        }
    


    // Tool 1: Engagement Calculator
    function calculateEngagement() {
        const followers = parseFloat(document.getElementById('calc-followers').value);
        const interactions = parseFloat(document.getElementById('calc-interactions').value);
        const resultDisplay = document.getElementById('calc-result');
        
        if (followers > 0 && interactions >= 0) {
            const rate = (interactions / followers) * 100;
            resultDisplay.innerText = rate.toFixed(2) + '%';
        } else {
            resultDisplay.innerText = '0.00%';
        }
    }

    // Tool 2: Hook Generator
    const hooks = [
        "Stop scrolling if you want to fix [Problem]",
        "The secret nobody tells you about [Topic]",
        "I tried [Trend] so you don't have to...",
        "3 signs you are doing [Topic] wrong",
        "If you want [Benefit], watch this.",
        "Unpopular opinion: [Topic] is overrated.",
        "How I went from [State A] to [State B] in 30 days.",
        "This one simple hack saved me hours on [Task].",
        "Why 99% of people fail at [Goal].",
        "You need to hear this if you're a [Persona]."
    ];

    function generateHook() {
        const output = document.getElementById('hook-output');
        const randomHook = hooks[Math.floor(Math.random() * hooks.length)];
        output.style.opacity = '0';
        setTimeout(() => {
            output.innerText = `"${randomHook}"`;
            output.style.opacity = '1';
        }, 200);
        output.style.transition = 'opacity 0.2s ease';
    }

    // Tool 3: Reach Estimator
    function updateReach() {
        const budget = parseInt(document.getElementById('budget-slider').value);
        const budgetDisplay = document.getElementById('budget-display');
        const viewsDisplay = document.getElementById('views-display');
        const clicksDisplay = document.getElementById('clicks-display');

        // Format Budget
        budgetDisplay.innerText = '$' + budget.toLocaleString();

        // Simple Math (Assumptions: CPM $20, CPC $1.20)
        const minViews = Math.floor((budget / 22) * 1000);
        const maxViews = Math.floor((budget / 16) * 1000);
        
        const minClicks = Math.floor(budget / 1.5);
        const maxClicks = Math.floor(budget / 0.8);

        // Format Views (K/M)
        const formatNum = (num) => {
            return num >= 1000000 ? (num/1000000).toFixed(1) + 'M' : (num/1000).toFixed(0) + 'K';
        };

        viewsDisplay.innerText = `${formatNum(minViews)} - ${formatNum(maxViews)}`;
        clicksDisplay.innerText = `${minClicks.toLocaleString()}+`;
    }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">ES</div>
<span className="font-medium text-l tracking-tight">Eddie Solutions</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/pricing">Prijzen</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/services">Diensten</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/about">Over ons</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" href="/contact">
        Plan een gesprek
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/about">Over ons</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/services">Diensten</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/pricing">Prijzen</a>
</div>


<main className="md:px-12 lg:py-20 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-12 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="flex -space-x-2 hidden">

</div>
<span className="bg-white/60 px-4 py-2 rounded-full text-sm font-semibold text-gray-800 tracking-wide uppercase shadow-sm">Jouw bedrijf verdient die groei.</span>
</div>

<h1 className="animate-enter delay-200 text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Jouw bedrijf verdient <br/>
<span className="font-playfair italic font-medium">die groei.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    Eddie Solutions helpt kleine bedrijven groeien met websites die wél werken. Geen standaard templates — maar slimme, moderne oplossingen die klanten aantrekken en resultaat opleveren.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200">
                        Plan een gratis gesprek
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                        Bekijk ons werk
                    </button>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-gray-200 flex gap-12">
<div>
<p className="text-3xl font-bold tracking-tight">100+</p>
<p className="text-sm text-gray-500 mt-1">Projecten Voltooid</p>
</div>
<div>
<p className="text-3xl font-bold tracking-tight">100%</p>
<p className="text-sm text-gray-500 mt-1">Klanttevredenheid</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] rounded-full blur-3xl pointer-events-none bg-gradient-to-br from-orange-400 to-orange-600"></div>

<button className="absolute left-0 md:left-12 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-12 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden transform rotate-0 hover:rotate-0 transition-transform duration-500 mr-auto ml-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

<div className="absolute top-2 w-full px-5 flex justify-between text-[10px] font-semibold text-white/90 z-30 mix-blend-difference">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:wifi-linear"></iconify-icon>
<iconify-icon className="" icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20">
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer">

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Fashion Post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">Webdesign</span>
<span className="text-white/60 text-xs">Nieuw</span>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-white rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        Bekijk Website
                                        <iconify-icon icon="solar:link-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Tech Post" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="simple-icons:sony"></iconify-icon>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">Conversie</span>
<span className="text-white/60 text-xs">Strategie</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-blue-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        Lees Meer
                                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Food Post" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">Optimalisatie</span>
<span className="text-white/60 text-xs">SEO</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-green-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        Resultaten
                                        <iconify-icon icon="solar:chart-up-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="absolute right-4 bottom-32 flex flex-col gap-4 z-20">
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-bold" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center text-white cursor-pointer hover:scale-110 transition-transform">
<iconify-icon icon="solar:share-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Bedrijven die we hebben geholpen</p>
<div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon height="26" icon="simple-icons:nike" width="72"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:shopify" width="96"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:netflix" width="86"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:spotify" width="96"></iconify-icon>
<iconify-icon height="30" icon="simple-icons:airbnb" width="96"></iconify-icon>
<iconify-icon height="26" icon="simple-icons:uber" width="72"></iconify-icon>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Onze 
            <span className="font-playfair italic font-medium">diensten.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-gray-900 transition-colors" href="#">
            Bekijk alle diensten
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Ultra-Moderne Websites</h3>
<p className="text-gray-600 leading-relaxed text-sm">Geen sjablonen uit 2018, maar websites gebouwd met de nieuwste technologie. Snel, mobiel-vriendelijk, en ontworpen om bezoekers om te zetten in klanten.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:graph-up-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Groei-Strategie</h3>
<p className="text-gray-600 leading-relaxed text-sm">Een mooie site is pas het begin. Samen kijken we naar vindbaarheid, conversie en structuur — zodat je online aanwezigheid écht bijdraagt aan je omzet.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:refresh-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Doorlopende Optimalisatie</h3>
<p className="text-gray-600 leading-relaxed text-sm">Het web staat niet stil en jouw website ook niet. Doorlopende verbeteringen op basis van data, zodat je resultaten alleen maar beter worden.</p>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Klant Resultaten</span>
<h2 className="" leading-[0.95]="" mb-6"="">
                Scaling a beauty  brand with <span className="font-playfair italic font-medium">reels</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Beauty brand Glowhaus came to us with great products but low engagement. We developed a UGC-driven content strategy focused on short-form video, optimized for Reels.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">128K</div>
<div className="text-sm font-medium text-gray-900">Reel Views</div>
<div className="text-xs text-gray-500 mt-1">In the first 30 days</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">245%</div>
<div className="text-sm font-medium text-gray-900">Engagement</div>
<div className="text-xs text-gray-500 mt-1">Compared to previous month</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Glowhaus Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl">Glowhaus</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 lg:gap-24 animate-enter delay-300 gap-x-12 gap-y-12 items-center">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Theo Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-serif text-6xl md:text-7xl italic tracking-tighter opacity-90 drop-shadow-xl" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Theo</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Klant Resultaten</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                Growing a clothing  brand with <span className="font-playfair italic font-medium">video</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Theo came to us ahead of a new collection launch, looking to grow their reach and build anticipation. We combined UGC with light influencer seeding and short-form video.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div className="">
<div className="md:text-5xl text-4xl font-medium text-gray-900 tracking-tight mb-1">18K</div>
<div className="text-sm font-medium text-gray-900">Followers</div>
<div className="text-xs text-gray-500 mt-1">In six weeks</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">156%</div>
<div className="text-sm font-medium text-gray-900">Engagement</div>
<div className="text-xs text-gray-500 mt-1">Compared to previous month</div>
</div>
</div>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
<div className="flex flex-col items-center text-center mb-20 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Werkwijze</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
            Onze werkwijze is 
            <span className="font-playfair italic font-medium">simpel</span> en helder
        </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 md:gap-8 lg:gap-8 animate-enter delay-100">

<svg className="hidden lg:block absolute top-12 left-0 w-full h-24 text-gray-900/10 pointer-events-none z-0" preserveaspectratio="none">
<path d="M150,20 C300,80 500,-40 650,20 C800,80 1000,-40 1150,20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:cup-hot-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">01 — Kennismaking</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Een goed gesprek zonder verplichtingen. Ik leer jouw bedrijf kennen, begrijp je doelen, en kijk waar de kansen liggen.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:map-arrow-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">02 — Strategie</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Op basis van jouw situatie stel ik een plan op. Geen overkill — precies wat nodig is om de grootste impact te maken.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:code-square-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">03 — Bouwen</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Ik ga aan de slag. Je wordt op de hoogte gehouden en ziet je website stap voor stap tot leven komen.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:rocket-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">04 — Lanceren &amp; Groeien</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Live gaan is pas het startpunt. Ik blijf betrokken om te meten, bij te sturen en te zorgen dat de groei doorzet.</p>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight mb-8 relative z-10">
                "Eindelijk een website die voelt alsof-ie bij ons past — en die ook echt klanten <span className="font-playfair italic font-medium">oplevert.</span>"
            </h3>
<div className="flex items-center gap-3 mt-auto">
<div>
<p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Elena Chen</p>
<p className="text-sm text-gray-500">Bloom Skincare</p>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden min-h-[400px] relative group">
<img alt="Testimonial Visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-6xl italic tracking-tight opacity-90 drop-shadow-lg transform -rotate-6">Bloom</span>
</div>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Waarom Eddie Solutions</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Waarom kleine bedrijven 
            voor <span className="font-playfair italic font-medium">ons</span> kiezen.
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-900 mb-6 flex items-center gap-3">
                De uitdaging
            </h3>
<p className="text-gray-600 leading-relaxed text-lg">
                Kleine bedrijven zijn de ruggengraat van onze economie. Maar online? Daar vallen ze te vaak weg tussen de grote jongens. Niet door gebrek aan kwaliteit — maar door een website die niet meewerkt.
            </p>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-3">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
                Eddie Solutions
            </h3>
<p className="text-gray-600 leading-relaxed text-lg">
                Dat is precies waar Eddie Solutions het verschil maakt. Als freelance webspecialist werk ik één-op-één met ondernemers die klaar zijn voor de volgende stap. Geen ingewikkelde trajecten, geen opgeblazen bureau-tarieven. Gewoon scherpe, moderne weboplossingen die gebouwd zijn om te groeien.
            </p>
</div>
</div>

<div className="mt-16 max-w-3xl mx-auto text-center">
<div className="inline-block text-gray-900 text-2xl md:text-3xl font-playfair italic font-medium leading-relaxed px-4">
            "Ik geloof dat elk klein bedrijf dezelfde online kracht verdient als de grote spelers. Mijn werk is om dat mogelijk te maken."
        </div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 hidden">

<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Our team</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Meet the team 
            behind your <span className="font-playfair italic font-medium">success.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Sofia Little" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Sofia Little</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Creative Lead</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="James Cohen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">James Cohen</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Founder &amp; CEO</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Maya Rodriguez" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Maya Rodriguez</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Growth Specialist</p>
</div>
</div>

<div className="mt-12 bg-[#efeae5] rounded-full px-6 py-4 flex flex-col md:flex-row items-center justify-between gap-4 max-w-2xl mx-auto animate-enter delay-200">
<div className="text-center md:text-left">
<p className="font-bold text-gray-900 text-sm">Want to be part of the team?</p>
<p className="text-xs text-gray-500 mt-0.5">We're always looking for talented strategists and growth experts.</p>
</div>
<button className="bg-black text-white text-xs font-bold px-6 py-3 rounded-full hover:scale-105 transition-transform whitespace-nowrap">
            Apply now
        </button>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 bg-white/50 backdrop-blur-sm rounded-[3rem] my-24 border border-white">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Gratis Tools</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Handige 
            <span className="font-playfair italic font-medium">Tools</span>
</h2>
<p className="text-gray-500 mt-4 max-w-md">Simple, free tools to help you plan your content and measure success.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 animate-enter delay-100">

<div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:calculator-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Engagement Calculator</h3>
<p className="text-xs text-gray-500 mb-6">Calculate engagement rate based on interactions.</p>
<div className="flex flex-col gap-4 mb-6">
<div>
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 block">Followers</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" id="calc-followers" placeholder="e.g. 5000" type="number"/>
</div>
<div>
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide mb-1 block">Total Likes + Comments</label>
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-2 text-sm focus:outline-none focus:border-black focus:ring-1 focus:ring-black" id="calc-interactions" placeholder="e.g. 350" type="number"/>
</div>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-gray-500">Result:</span>
<span className="text-2xl font-bold text-gray-900" id="calc-result">0.00%</span>
</div>
<button className="w-full bg-black text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors" onclick="calculateEngagement()">Calculate Rate</button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:magic-stick-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Viral Hook Generator</h3>
<p className="text-xs text-gray-500 mb-6">Generate scroll-stopping hooks for your next video.</p>
<div className="flex-grow flex items-center justify-center bg-gray-50 rounded-2xl p-6 mb-6 border border-gray-100 min-h-[140px]">
<p className="text-center text-lg font-serif italic text-gray-800 leading-snug" id="hook-output">"Click generate to get a hook..."</p>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<button className="w-full bg-black text-white py-3 rounded-xl text-sm font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" onclick="generateHook()">
<iconify-icon icon="solar:refresh-linear"></iconify-icon>
                    Generate New Hook
                </button>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-xl shadow-gray-200/50 border border-gray-100 flex flex-col">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-gray-900 mb-2">Reach Estimator</h3>
<p className="text-xs text-gray-500 mb-6">Estimate potential reach based on monthly budget.</p>
<div className="flex flex-col gap-6 mb-6">
<div>
<div className="flex justify-between mb-2">
<label className="text-xs font-semibold text-gray-700 uppercase tracking-wide">Monthly Budget</label>
<span className="text-xs font-bold text-gray-900" id="budget-display">$1,000</span>
</div>
<input className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer" id="budget-slider" max="10000" min="500" oninput="updateReach()" step="100" type="range" value="1000"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
<p className="text-[10px] uppercase tracking-wide text-gray-500 mb-1">Est. Views</p>
<p className="text-lg font-bold text-gray-900" id="views-display">45K - 60K</p>
</div>
<div className="bg-gray-50 p-4 rounded-xl border border-gray-100 text-center">
<p className="text-[10px] uppercase tracking-wide text-gray-500 mb-1">Est. Clicks</p>
<p className="text-lg font-bold text-gray-900" id="clicks-display">850+</p>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-gray-100">
<p className="text-[10px] text-gray-400 text-center leading-tight">Estimates based on average industry CPMs for Meta &amp; TikTok. Actual results may vary.</p>
</div>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 relative">
<div className="absolute -top-12 right-0 md:-right-12 w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white rotate-12 shadow-xl z-10 hidden md:flex">
<iconify-icon icon="solar:chat-square-like-bold" width="32"></iconify-icon>
</div>
<div className="mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Veelgestelde vragen</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mt-6">
            Veelgestelde 
            <span className="font-playfair italic font-medium">Vragen</span>
</h2>
</div>
<div className="flex flex-col gap-4 animate-enter delay-100">

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                How quickly will we see results?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                While every brand is different, most of our clients see a significant uptake in engagement and reach within the first 30 days. Revenue impact typically scales from month 2 onwards.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                What platforms do you manage?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                We specialize in short-form video platforms: TikTok, Instagram (Reels), and YouTube Shorts. We also manage paid acquisition across Meta and TikTok Ads.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                Do you work with our industry?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                We have deep experience in DTC E-commerce, Fashion, Beauty, Tech, and Lifestyle brands. If you have a visual product, we can help it grow.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                What if we want to cancel?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                We offer flexible month-to-month contracts. We believe in earning your business every single month through results, not locking you in with paperwork.
            </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                How involved do we need to be?
                <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                As involved as you like. We have a streamlined approval process, but we're fully capable of running the show autonomously once we align on the initial strategy.
            </div>
</details>
</div>
</section><footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">

<div className="absolute top-12 left-12 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon icon="solar:stars-minimalistic-bold" width="32"></iconify-icon>
</div>
<div className="mt-20">
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Start vandaag</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                    Klaar om online te <span className="font-playfair italic font-medium">groeien?</span>
</h2>
<p className="text-gray-500 mb-10 max-w-sm">Plan een gratis, vrijblijvend kennismakingsgesprek. Samen kijken we wat jouw bedrijf nodig heeft om online het verschil te maken.</p>
<button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl">
                    Plan een gratis gesprek
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>

<div className="relative w-[280px] rotate-[-12deg] group-hover:rotate-0 transition-all duration-700 ease-out transform group-hover:scale-105">
<div className="bg-gray-900 rounded-[3rem] p-3 shadow-2xl ring-1 ring-white/20">
<div className="bg-white rounded-[2.5rem] overflow-hidden relative aspect-[9/19] border border-gray-100">

<div className="p-6 flex flex-col gap-4">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-gray-200"></div>
<div className="h-3 w-24 bg-gray-100 rounded-full"></div>
</div>
<div className="w-full aspect-square bg-gray-100 rounded-2xl mb-2"></div>
<div className="flex gap-2 mb-2">
<div className="w-8 h-8 rounded-full bg-red-100 text-red-500 flex items-center justify-center"><iconify-icon icon="solar:heart-bold"></iconify-icon></div>
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
<div className="w-8 h-8 rounded-full bg-gray-100"></div>
</div>
<div className="h-2 w-full bg-gray-100 rounded-full"></div>
<div className="h-2 w-3/4 bg-gray-100 rounded-full"></div>
</div>

<div className="absolute bottom-12 left-1/2 -translate-x-1/2 bg-white/90 backdrop-blur-md border border-gray-100 shadow-lg rounded-2xl p-3 flex items-center gap-3 w-[90%] animate-pulse">
<div className="w-10 h-10 bg-black rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="">
<div className="text-[10px] text-gray-500 font-semibold uppercase">Growth Alert</div>
<div className="text-xs font-bold text-gray-900">+128% Engagement</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6 cursor-pointer">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:laptop-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight">Eddie Solutions</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Eddie Solutions — Moderne weboplossingen voor <span className="font-playfair italic font-medium">groeiende</span> bedrijven.
            </h4>
<div className="flex gap-3 mt-6">
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Navigatie</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Home</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Over ons</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Projecten</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Contact</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Plan een gesprek</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Instagram</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Contact</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium">
<span>© 2025 Eddie Solutions. All rights reserved.</span>
<span>Designed with intention.</span>
</div>
</footer>
    </>
  );
}
