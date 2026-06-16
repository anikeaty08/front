import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  // Mobile menu toggle logic (unchanged, just references the button by id)
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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">SG</div>
<span className="font-medium text-l tracking-tight">Social Grow</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/pricing">Pricing</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/about">About</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" href="/contact">
        Start Growing
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/about">About</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/services">Services</a>
<a className="text-3xl font-medium tracking-tight text-gray-900 hover:text-gray-600 transition-colors" href="/pricing">Pricing</a>
</div>


<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-30">
<iconify-icon icon="logos:pinterest" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-20">
<iconify-icon icon="logos:instagram-icon" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-10">
<iconify-icon icon="logos:tiktok-icon" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium text-gray-500 tracking-wide uppercase">Trusted by 500+ brands</span>
</div>

<h1 className="animate-enter delay-200 text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Content that <br/>
<span className="font-serif italic font-medium">converts.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    We combine data-driven strategy, creative production, and paid media to help brands explode their reach and turn followers into revenue.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200">
                        Book a Strategy Call
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                        View Showreel
                    </button>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-gray-200 flex gap-12">
<div>
<p className="text-3xl font-bold tracking-tight">250M+</p>
<p className="text-sm text-gray-500 mt-1">Views Generated</p>
</div>
<div>
<p className="text-3xl font-bold tracking-tight">3.5x</p>
<p className="text-sm text-gray-500 mt-1">Avg. ROAS</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

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
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/20 via-transparent to-black/60 pointer-events-none z-20">
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer" style={{}}>

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Fashion Post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">jessica_style</span>
<span className="text-white/60 text-xs">2h</span>
</div>

<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-white rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-white text-black px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        View Shop
                                        <iconify-icon icon="solar:bag-3-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Tech Post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden bg-black flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="simple-icons:sony"></iconify-icon>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">tech_daily</span>
<span className="text-white/60 text-xs">Sponsored</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-blue-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-blue-600 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        Learn More
                                        <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Food Post" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-12 left-4 flex items-center gap-2 z-20">
<div className="w-8 h-8 rounded-full border-2 border-white overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<span className="text-white text-sm font-medium drop-shadow-md">tasty_bites</span>
<span className="text-white/60 text-xs">5h</span>
</div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-green-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg">
                                        Get Recipe
                                        <iconify-icon icon="solar:chef-hat-linear" width="14"></iconify-icon>
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
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Brands we've helped grow on social</p>
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
            Full-service 
            <span className="font-playfair italic font-medium">social growth.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-gray-900 transition-colors" href="#">
            View all services
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:camera-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Content Production</h3>
<p className="text-gray-600 leading-relaxed text-sm">High-fidelity video and static assets tailored for the algorithm and your audience's attention span.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:chart-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Paid Strategy</h3>
<p className="text-gray-600 leading-relaxed text-sm">Data-driven paid media management to scale reach and convert viewers into customers efficiently.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Creator Network</h3>
<p className="text-gray-600 leading-relaxed text-sm">Access to 500+ vetted creators for authentic UGC and influencer campaigns that actually convert.</p>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Client results</span>
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
<img alt="Glowhaus Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl">Glowhaus</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-enter delay-300">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Theo Campaign" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-serif text-6xl md:text-7xl italic tracking-tighter opacity-90 drop-shadow-xl" style={{fontFamily: '\'Brush Script MT\', cursive'}}>Theo</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Client results</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                Growing a clothing  brand with <span className="font-playfair italic font-medium">video</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                Theo came to us ahead of a new collection launch, looking to grow their reach and build anticipation. We combined UGC with light influencer seeding and short-form video.
            </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">18K</div>
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
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">How we work</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
            We like to keep things 
            <span className="font-playfair italic font-medium">nice</span> and simple
        </h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">

<svg className="hidden md:block absolute top-12 left-0 w-full h-24 text-gray-900/10 pointer-events-none z-0" preserveaspectratio="none">
<path d="M150,20 C300,80 500,-40 650,20 C800,80 1000,-40 1150,20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:target-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Strategy First</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">We align on goals, audience, and content direction before anything goes live.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Create &amp; Manage</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">We handle the production, scheduling, and posting across all key platforms.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:graph-new-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Review &amp; Refine</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">We track performance, learn what's working, and adjust as needed.</p>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight mb-8 relative z-10">
                They took social media off our plate completely and our audience has never been <span className="font-playfair italic font-medium">more engaged.</span>
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
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">The difference</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
            Why choose Social Grow 
            over <span className="font-playfair italic font-medium">everyone</span> else?
        </h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
                Other Agencies
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Generic content templates</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Monthly reporting only</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Separate teams for different platforms</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Long-term contracts required</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>One-size-fits-all approach</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
                Social Grow
            </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Custom content for your brand</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Real-time performance tracking</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Integrated cross-platform strategy</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Flexible month-to-month options</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Tailored to your specific goals</span>
</li>
</ul>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-[10px] text-gray-400 font-semibold uppercase tracking-widest mb-6">Brands we've helped grow on social</p>
<div className="flex justify-center items-center gap-8 md:gap-16 opacity-40 grayscale">
<iconify-icon icon="simple-icons:sony" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:samsung" width="80"></iconify-icon>
<iconify-icon icon="simple-icons:canon" width="60"></iconify-icon>
<iconify-icon icon="simple-icons:braun" width="60"></iconify-icon>
</div>
</div>
</section><section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24">
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
<img alt="Sofia Little" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">Sofia Little</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Creative Lead</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="James Cohen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="text-xl font-bold tracking-tight text-gray-900">James Cohen</h3>
<p className="text-xs font-semibold text-gray-500 uppercase tracking-wide mt-1">Founder &amp; CEO</p>
</div>

<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-[2rem] overflow-hidden mb-6 relative">
<img alt="Maya Rodriguez" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
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
</section><section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 relative">
<div className="absolute -top-12 right-0 md:-right-12 w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white rotate-12 shadow-xl z-10 hidden md:flex">
<iconify-icon icon="solar:chat-square-like-bold" width="32"></iconify-icon>
</div>
<div className="mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Questions</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mt-6">
            Frequently 
            Asked <span className="font-playfair italic font-medium">Questions</span>
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
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Get started</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                    Your viral journey 
                    starts <span className="font-playfair italic font-medium">right here.</span>
</h2>
<p className="text-gray-500 mb-10 max-w-sm">Book a free 30 min strategy call and we'll show you how to turn followers into customers.</p>
<button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl">
                    Book a call
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
<div>
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
<iconify-icon icon="solar:graph-up-linear" width="14"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight">Social Grow</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                Social media that drives <span className="font-playfair italic font-medium">real</span> results.
            </h4>
<p className="text-xs text-gray-500 mb-6">Built for creators, businesses, and brands.</p>
<div className="flex gap-3">
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
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Navigate</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Home</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Case Studies</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Blog</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Connect</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Book a call</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Instagram</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">LinkedIn</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Twitter</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Legal</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Terms of Service</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Contact</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">404</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium">
<span>© 2025 Social Grow. All rights reserved.</span>
<span>Designed with intention.</span>
</div>
</footer>
    </>
  );
}
