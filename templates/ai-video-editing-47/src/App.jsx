import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Logic for Mobile Menu
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        
        toggleBtn.addEventListener('click', () => {
            const isClosed = menu.classList.contains('opacity-0');
            const icon = toggleBtn.querySelector('iconify-icon');
            
            if (isClosed) {
                menu.classList.remove('opacity-0', 'pointer-events-none');
                icon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('opacity-0', 'pointer-events-none');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = '';
            }
        });

        // Logic for Phone Slider
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

        nextBtn.addEventListener('click', () => { nextCard(); resetInterval(); });
        prevBtn.addEventListener('click', () => { prevCard(); resetInterval(); });

        let autoSlide = setInterval(nextCard, 5000);
        function resetInterval() {
            clearInterval(autoSlide);
            autoSlide = setInterval(nextCard, 5000);
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
<div className="w-8 h-8 bg-black rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:videocamera-record-bold" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">monteer.ai</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#showcase">Showcase</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="hidden md:block text-sm font-medium text-gray-900 mr-2" href="#">Log in</a>
<a className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group shadow-lg shadow-black/10" href="#">
                    Try for free
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#E3DDD7] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#features">Features</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#showcase">Showcase</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#pricing">Pricing</a>
</div>

<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="px-3 py-1 bg-white/50 border border-white/60 rounded-full flex items-center gap-2 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">AI Engine v2.0 Live</span>
</div>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Edit videos on <br/>
<span className="font-playfair italic font-medium">autopilot.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    Upload raw footage and let Monteer chop, caption, and style it in seconds. The fastest workflow for modern creators.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200">
                        Start Editing
                        <iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                        Watch Demo
                    </button>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-gray-900/10 flex gap-12">
<div>
<p className="text-3xl font-bold tracking-tight">10x</p>
<p className="text-sm text-gray-500 mt-1">Faster Editing</p>
</div>
<div>
<p className="text-3xl font-bold tracking-tight">1M+</p>
<p className="text-sm text-gray-500 mt-1">Clips Generated</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<button className="absolute left-0 md:left-12 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-12 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden transform rotate-0 transition-transform duration-500 mr-auto ml-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

<div className="absolute top-2 w-full px-5 flex justify-between text-[10px] font-semibold text-white/90 z-30 mix-blend-difference">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:wifi-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer">

<div className="slider-card card-active w-full h-full absolute inset-0">
<img alt="Creator" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center z-20">
<span className="bg-black/40 backdrop-blur-md text-white text-xl font-bold px-3 py-1 rounded-lg leading-relaxed shadow-lg box-decoration-clone">
                                    Stop editing <span className="text-yellow-400">manually</span>
</span>
<div className="mt-2">
<span className="bg-black/40 backdrop-blur-md text-white text-xl font-bold px-3 py-1 rounded-lg leading-relaxed shadow-lg">
                                        start creating.
                                    </span>
</div>
</div>

<div className="absolute bottom-12 w-full px-6 flex flex-col gap-3 z-20">
<div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-yellow-400"></div>
</div>
<div className="flex justify-between items-center text-white">
<iconify-icon icon="solar:play-bold" width="24"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:text-square-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:menu-dots-bold" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="slider-card card-hidden w-full h-full absolute inset-0">
<img alt="Podcast" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute inset-0 bg-green-500/10 z-10"></div>
<div className="absolute top-1/3 w-full h-[2px] bg-green-400 shadow-[0_0_15px_rgba(74,222,128,0.8)] z-20 animate-[slideUpBlur_2s_infinite]"></div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-green-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-green-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg whitespace-nowrap">
                                        Silence Removed
                                        <iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden w-full h-full absolute inset-0 bg-gray-900 flex flex-col items-center justify-center">
<div className="w-20 h-20 rounded-full border-4 border-white/20 border-t-white animate-spin mb-6"></div>
<h3 className="text-white text-2xl font-bold mb-1">Exporting...</h3>
<p className="text-white/60 text-sm">Applying AI polish</p>
<div className="absolute bottom-20 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-orange-500 rounded-lg"></div>
<div>
<div className="text-white text-sm font-semibold">viral_clip_01.mp4</div>
<div className="text-white/50 text-xs">Ready to post</div>
</div>
<iconify-icon className="ml-auto text-white" icon="solar:upload-minimalistic-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Trusted by creators from</p>
<div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:tiktok" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:youtube" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:instagram" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:twitch" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:spotify" width="32"></iconify-icon>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10" id="features">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
                Everything you need <br/>
<span className="font-playfair italic font-medium">to go viral.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-gray-900 transition-colors" href="#">
                View all features
                <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:scissors-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Smart Cuts</h3>
<p className="text-gray-600 leading-relaxed text-sm">Our AI detects silence, filler words, and boring parts, removing them instantly to keep retention high.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:text-square-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Auto Captions</h3>
<p className="text-gray-600 leading-relaxed text-sm">Generate 99% accurate subtitles in 30+ languages. Style them with one click to match your brand.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">AI B-Roll</h3>
<p className="text-gray-600 leading-relaxed text-sm">Context-aware B-roll insertion. Monteer listens to your video and suggests relevant stock footage.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32" id="showcase">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Use Case</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                    Turn long podcasts into <span className="font-playfair italic font-medium">Shorts</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                    Upload a 2-hour episode. Monteer identifies the most viral moments, frames the active speaker, and exports vertical clips ready for TikTok.
                </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">10+</div>
<div className="text-sm font-medium text-gray-900">Clips per hour</div>
<div className="text-xs text-gray-500 mt-1">Automatically generated</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">Face</div>
<div className="text-sm font-medium text-gray-900">Auto-tracking</div>
<div className="text-xs text-gray-500 mt-1">Keeps speaker centered</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Podcast Editing" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1590602847861-f357a9332bbc?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl">Podcasts</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-enter delay-300">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Real Estate Video" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-6xl md:text-7xl italic tracking-tighter opacity-90 drop-shadow-xl">Tours</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Use Case</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                    Professional tours in <span className="font-playfair italic font-medium">minutes</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                    Agents can simply walk through a property recording on their phone. Monteer stabilizes footage, adds ambient music, and generates a luxury listing video.
                </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">4K</div>
<div className="text-sm font-medium text-gray-900">Export Quality</div>
<div className="text-xs text-gray-500 mt-1">Crystal clear assets</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">0</div>
<div className="text-sm font-medium text-gray-900">Skills Needed</div>
<div className="text-xs text-gray-500 mt-1">Just hit record</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32">
<div className="flex flex-col items-center text-center mb-20 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">How it works</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
                Complex editing, made 
                <span className="font-playfair italic font-medium">simple.</span>
</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">

<svg className="hidden md:block absolute top-12 left-0 w-full h-24 text-gray-900/10 pointer-events-none z-0" preserveaspectratio="none">
<path d="M150,20 C300,80 500,-40 650,20 C800,80 1000,-40 1150,20" fill="none" stroke="currentColor" stroke-dasharray="8 8" strokeWidth="2"></path>
</svg>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:cloud-upload-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">1. Upload Footage</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Drop your raw files. We support all major video formats.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">2. AI Enhancement</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Monteer analyzes the video, adds captions, zooms, and music.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:export-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">3. Review &amp; Export</h3>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Make quick tweaks if needed, then export in 4K quality instantly.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-stretch animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-10 md:p-16 flex flex-col justify-center relative overflow-hidden">
<div className="w-12 h-12 bg-black text-white rounded-xl flex items-center justify-center mb-10">
<iconify-icon icon="solar:quote-up-bold" width="24"></iconify-icon>
</div>
<h3 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 leading-tight mb-8 relative z-10">
                    I used to spend 10 hours a week editing. With Monteer, it takes <span className="font-playfair italic font-medium">15 minutes.</span>
</h3>
<div className="flex items-center gap-3 mt-auto">
<div>
<p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Alex Rivers</p>
<p className="text-sm text-gray-500">Content Creator, 500k Subs</p>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden min-h-[400px] relative group">
<img alt="Testimonial Visual" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1611162617474-5b21e879e113?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-16 h-16 bg-white/20 backdrop-blur-md rounded-full flex items-center justify-center">
<iconify-icon className="text-white text-3xl ml-1" icon="solar:play-bold"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">The difference</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
                Manual Editing vs. <br/>
<span className="font-playfair italic font-medium">Monteer AI</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
                    Traditional Software
                </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Steep learning curve</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Manual caption transcription</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Requires expensive hardware</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Hours of timeline scrubbing</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
                    Monteer.ai
                </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>One-click magic edits</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Auto-generated, styled captions</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Works in your browser</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Viral hooks library included</span>
</li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-3xl mx-auto px-6 md:px-12 py-24 relative">
<div className="absolute -top-12 right-0 md:-right-12 w-16 h-16 bg-black rounded-2xl flex items-center justify-center text-white rotate-12 shadow-xl z-10 hidden md:flex">
<iconify-icon icon="solar:question-circle-bold" width="32"></iconify-icon>
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
                    Does it work for long-form video?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Yes! Monteer is designed to take long-form content (podcasts, webinars, interviews) and intelligently chop them into viral short-form clips.
                </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                    Can I customize the captions?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Absolutely. While our AI suggests styles based on your video vibe, you have full control over fonts, colors, animations, and positioning.
                </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                    Is there a free trial?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Yes, you can edit up to 15 minutes of video per month for free, with watermarked exports. Upgrade anytime to remove limits.
                </div>
</details>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">
<div className="absolute top-12 left-12 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon icon="solar:clapperboard-edit-linear" width="32"></iconify-icon>
</div>
<div className="mt-20">
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Get started</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                        Ready to edit <br/>
<span className="font-playfair italic font-medium">smarter?</span>
</h2>
<p className="text-gray-500 mb-10 max-w-sm">Join 10,000+ creators saving hours every week with Monteer.ai.</p>
<button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl">
                        Start Editing Free
                    </button>
</div>
</div>

<div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>

<div className="relative w-[80%] bg-white rounded-xl shadow-2xl p-4 transform rotate-6 group-hover:rotate-0 transition-all duration-700">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-[10px] font-mono text-gray-400">Monteer v2.0</div>
</div>

<div className="space-y-2">
<div className="h-12 bg-blue-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-0 w-[40%] h-full bg-blue-500/20 border-r-2 border-blue-500"></div>
<span className="text-[10px] text-blue-500 font-bold z-10">Video Track</span>
</div>
<div className="h-8 bg-purple-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-10 w-[30%] h-full bg-purple-500/20 rounded-md"></div>
<div className="absolute left-50 w-[20%] h-full bg-purple-500/20 rounded-md"></div>
<span className="text-[10px] text-purple-500 font-bold z-10">AI Captions</span>
</div>
<div className="h-8 bg-orange-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-0 w-full h-full bg-orange-500/10"></div>
<span className="text-[10px] text-orange-500 font-bold z-10">Background Music</span>
</div>
</div>

<div className="absolute top-10 bottom-4 left-1/3 w-[2px] bg-red-500 z-20">
<div className="absolute -top-1 -left-[5px] w-3 h-3 bg-red-500 transform rotate-45"></div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:videocamera-record-bold" width="14"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight">monteer.ai</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                    The AI video editor for <span className="font-playfair italic font-medium">creators.</span>
</h4>
<div className="flex gap-3 mt-6">
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:discord" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Features</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Pricing</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Enterprise</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Changelog</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Resources</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Blog</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Community</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Help Center</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">API</a>
</div>
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Company</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">About</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Legal</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Terms</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Privacy</a>
</div>
</div>
</div>
<div className="mt-16 pt-8 border-t border-gray-900/5 flex justify-between text-[10px] text-gray-400 font-medium">
<span>© 2025 Monteer AI Inc. All rights reserved.</span>
<span>Designed with intention.</span>
</div>
</footer>


    </>
  );
}
