import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
<iconify-icon icon="solar:palette-bold" width="18"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight">LoveArt.ai</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#features">Style Explorer</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#gallery">Gallery</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="hidden md:block text-sm font-medium text-gray-900 mr-2" href="#">Log in</a>
<a className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group shadow-lg shadow-black/10" href="#">
                    Launch Studio
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#E3DDD7] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#home">Home</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#features">Style Explorer</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#gallery">Gallery</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#pricing">Pricing</a>
</div>

<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20" id="home">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="px-3 py-1 bg-white/50 border border-white/60 rounded-full flex items-center gap-2 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
<span className="text-xs font-semibold text-gray-600 tracking-wide uppercase">v3.0 Generation Engine Live</span>
</div>
</div>

<h1 className="animate-enter delay-200 text-5xl md:text-6xl lg:text-7xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Gallery-quality art. <br/>
<span className="font-playfair italic font-medium">No Prompts Required.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    Turn your ideas into breathtaking masterpieces in seconds. The most intuitive AI art studio for creators and dreamers.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200">
                        Start Creating for Free
                        <iconify-icon icon="solar:stars-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:gallery-bold" width="24"></iconify-icon>
                        View Gallery
                    </button>
</div>

<div className="animate-enter delay-500 mt-8 pt-8 border-t border-gray-900/10 flex gap-12">
<div>
<p className="text-3xl font-bold tracking-tight">10x</p>
<p className="text-sm text-gray-500 mt-1">Faster Ideation</p>
</div>
<div>
<p className="text-3xl font-bold tracking-tight">5M+</p>
<p className="text-sm text-gray-500 mt-1">Artworks Generated</p>
</div>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-pink-200/30 via-purple-200/20 to-transparent rounded-full blur-3xl pointer-events-none"></div>

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
<img alt="Abstract AI Art" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1541961017774-22349e4a1262?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full px-6 text-center z-20">
<span className="bg-black/40 backdrop-blur-md text-white text-xl font-bold px-3 py-1 rounded-lg leading-relaxed shadow-lg box-decoration-clone">
                                    Stop prompting <span className="text-pink-400">endlessly</span>
</span>
<div className="mt-2">
<span className="bg-black/40 backdrop-blur-md text-white text-xl font-bold px-3 py-1 rounded-lg leading-relaxed shadow-lg">
                                        start creating.
                                    </span>
</div>
</div>

<div className="absolute bottom-12 w-full px-6 flex flex-col gap-3 z-20">
<div className="w-full h-1 bg-white/20 rounded-full overflow-hidden">
<div className="w-2/3 h-full bg-pink-400"></div>
</div>
<div className="flex justify-between items-center text-white">
<iconify-icon icon="solar:gallery-bold" width="24"></iconify-icon>
<iconify-icon className="text-pink-400" icon="solar:magic-stick-3-bold" width="24"></iconify-icon>
<iconify-icon icon="solar:menu-dots-bold" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="slider-card card-hidden w-full h-full absolute inset-0">
<img alt="Digital Painting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1604871000636-074fa5117945?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-pink-500/10 z-10"></div>
<div className="absolute top-1/3 w-full h-[2px] bg-pink-400 shadow-[0_0_15px_rgba(244,114,182,0.8)] z-20 animate-[slideUpBlur_2s_infinite]"></div>
<div className="absolute bottom-20 left-1/2 -translate-x-1/2 z-30">
<div className="relative">
<div className="absolute inset-0 bg-pink-500 rounded-full sonar-ring opacity-50"></div>
<button className="relative bg-pink-500 text-white px-6 py-2 rounded-full text-xs font-bold uppercase tracking-wide flex items-center gap-2 shadow-lg whitespace-nowrap">
                                        Style Applied
                                        <iconify-icon icon="solar:check-circle-bold" width="14"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="slider-card card-hidden w-full h-full absolute inset-0 bg-gray-900 flex flex-col items-center justify-center">
<div className="w-20 h-20 rounded-full border-4 border-white/20 border-t-white animate-spin mb-6"></div>
<h3 className="text-white text-2xl font-bold mb-1">Rendering...</h3>
<p className="text-white/60 text-sm">Upscaling to 4K</p>
<div className="absolute bottom-20 left-6 right-6 bg-white/10 backdrop-blur-md rounded-xl p-4 border border-white/10">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gradient-to-br from-pink-500 to-purple-500 rounded-lg"></div>
<div>
<div className="text-white text-sm font-semibold">masterpiece_01.png</div>
<div className="text-white/50 text-xs">Ready to download</div>
</div>
<iconify-icon className="ml-auto text-white" icon="solar:download-square-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Trusted by artists from</p>
<div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="simple-icons:adobe" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:figma" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:canva" width="36"></iconify-icon>
<iconify-icon icon="simple-icons:pinterest" width="32"></iconify-icon>
<iconify-icon icon="simple-icons:instagram" width="32"></iconify-icon>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32 relative z-10" id="features">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
                From idea to <br/>
<span className="font-playfair italic font-medium">masterpiece.</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-gray-900 border-b border-gray-900/20 pb-1 hover:border-gray-900 transition-colors" href="#">
                Explore all tools
                <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8 animate-enter delay-100">

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:ruler-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Choose Canvas</h3>
<p className="text-gray-600 leading-relaxed text-sm">Select your aspect ratio and resolution. From a perfect Instagram square to 8K cinematic widescreen frames.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:magic-stick-3-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Select Vibe</h3>
<p className="text-gray-600 leading-relaxed text-sm">Pick from hundreds of curated styles—cyberpunk, oil painting, anime, studio photography, and more.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:keyboard-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Human Prompts</h3>
<p className="text-gray-600 leading-relaxed text-sm">No complex prompt engineering required. Just type what you want in plain English and let our engine translate.</p>
</div>

<div className="group bg-white/40 backdrop-blur-sm border border-white/40 p-8 rounded-[2rem] hover:bg-white transition-colors duration-500 cursor-default">
<div className="w-12 h-12 bg-gray-900 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 shadow-lg shadow-gray-900/10">
<iconify-icon icon="solar:gallery-download-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Masterpiece Output</h3>
<p className="text-gray-600 leading-relaxed text-sm">Generate flawless, gallery-ready artwork in seconds with zero artifacts. Ready for print or digital publishing.</p>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-32" id="gallery">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center mb-32 animate-enter delay-200">
<div className="order-2 lg:order-1 flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Hall of Fame</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                    Create breathtaking environments in <span className="font-playfair italic font-medium">seconds</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                    Design entire worlds from a single sentence. Our v3.0 engine perfectly captures depth, lighting, and surrealism for concept artists and world-builders.
                </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">8K</div>
<div className="text-sm font-medium text-gray-900">Resolution</div>
<div className="text-xs text-gray-500 mt-1">Perfect for large prints</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">0</div>
<div className="text-sm font-medium text-gray-900">Watermarks</div>
<div className="text-xs text-gray-500 mt-1">Full commercial rights</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2 relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Abstract Landscape Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-5xl md:text-6xl italic tracking-tight opacity-90 drop-shadow-xl">Landscapes</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center animate-enter delay-300">
<div className="relative group cursor-pointer">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden relative shadow-2xl">
<img alt="Cinematic Portrait Art" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1549490349-8643362247b5?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<span className="text-white font-playfair text-6xl md:text-7xl italic tracking-tighter opacity-90 drop-shadow-xl">Portraits</span>
</div>
</div>
</div>
<div className="flex flex-col items-start">
<span className="inline-block bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-8">Hall of Fame</span>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-6">
                    Studio lighting, <span className="font-playfair italic font-medium">perfected</span>
</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-10 max-w-md">
                    Generate highly detailed characters with hyper-realistic textures, perfect eyes, and cinematic color grading without ever stepping into a studio.
                </p>
<div className="grid grid-cols-2 gap-12 border-t border-gray-900/10 pt-8 w-full max-w-md">
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">True</div>
<div className="text-sm font-medium text-gray-900">Photorealism</div>
<div className="text-xs text-gray-500 mt-1">Unmatched skin textures</div>
</div>
<div>
<div className="text-4xl md:text-5xl font-medium tracking-tight text-gray-900 mb-1">100+</div>
<div className="text-sm font-medium text-gray-900">Lighting Setups</div>
<div className="text-xs text-gray-500 mt-1">From neon to golden hour</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 md:py-32" id="pricing">
<div className="flex flex-col items-center text-center mb-20 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">Pricing</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95] max-w-2xl">
                Simple pricing for 
                <span className="font-playfair italic font-medium">every artist.</span>
</h2>
</div>
<div className="relative grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 lg:gap-12 animate-enter delay-100">

<div className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:star-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Free Tier</h3>
<p className="text-gray-900 font-bold mb-2">$0 / month</p>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">50 high-quality generations per month. Personal use only. Standard queue speed.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
<div className="w-20 h-20 bg-black text-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/20 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Pro</h3>
<p className="text-gray-900 font-bold mb-2">$15 / month</p>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">1,000 fast generations, 4K upscaling, priority queue, and commercial rights.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center group cursor-pointer">
<div className="w-20 h-20 bg-white rounded-[2rem] flex items-center justify-center shadow-lg shadow-gray-900/5 mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon className="text-gray-900" icon="solar:crown-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900 mb-3">Plus</h3>
<p className="text-gray-900 font-bold mb-2">$30 / month</p>
<p className="text-gray-600 text-sm leading-relaxed max-w-xs">Unlimited generations, 8K ultra-upscaling, private mode, and API access.</p>
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
                    I used to spend hours searching for the right stock photo. With LoveArt.ai, I generate exact, gallery-quality images in <span className="font-playfair italic font-medium">15 seconds.</span>
</h3>
<div className="flex items-center gap-3 mt-auto">
<div>
<p className="text-sm font-semibold text-gray-900 uppercase tracking-wide">Sarah Jenkins</p>
<p className="text-sm text-gray-500">Digital Artist &amp; Art Director</p>
</div>
</div>
</div>

<div className="rounded-[2.5rem] overflow-hidden min-h-[400px] relative group">
<img alt="Artist Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-[#d1c8c0] text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6">The difference</span>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 leading-[0.95]">
                Manual Design vs. <br/>
<span className="font-playfair italic font-medium">LoveArt.ai</span>
</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-12 animate-enter delay-100">

<div className="bg-gray-100/50 rounded-[2rem] p-8 md:p-12">
<h3 className="text-2xl font-semibold text-gray-400 mb-8 flex items-center gap-3">
                    Traditional Workflows
                </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Steep learning curve for software</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Expensive stock photo subscriptions</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Hours spent tweaking and editing</span>
</li>
<li className="flex items-start gap-4 text-gray-500">
<iconify-icon className="mt-0.5 text-gray-300" icon="solar:close-circle-bold" width="20"></iconify-icon>
<span>Requires expensive graphics hardware</span>
</li>
</ul>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-12 shadow-xl shadow-gray-900/5 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-black"></div>
<h3 className="text-2xl font-bold text-gray-900 mb-8 flex items-center gap-3">
<iconify-icon icon="solar:star-bold" width="24"></iconify-icon>
                    LoveArt.ai
                </h3>
<ul className="space-y-5">
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Stunning output instantly</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Zero prompt engineering needed</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Works entirely in your browser</span>
</li>
<li className="flex items-start gap-4 text-gray-900 font-medium">
<iconify-icon className="mt-0.5 text-black" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span>Full commercial rights included</span>
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
                    Can I use the images commercially?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Yes! Pro and Plus users retain full commercial rights to all generated artwork. You can sell them as prints, use them in ads, or publish them anywhere.
                </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                    Do I need to be good at prompting?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Not at all. LoveArt.ai translates simple English into rich, detailed parameters automatically. Just tell us what you want to see.
                </div>
</details>

<details className="group bg-[#efeae5] rounded-2xl overflow-hidden transition-all duration-300 open:pb-4">
<summary className="flex justify-between items-center p-6 cursor-pointer list-none font-medium text-gray-900 hover:text-black">
                    What resolution are the exports?
                    <div className="w-8 h-8 rounded-full bg-black/5 flex items-center justify-center group-open:rotate-45 transition-transform duration-300">
<iconify-icon icon="solar:add-linear" width="20"></iconify-icon>
</div>
</summary>
<div className="px-6 text-sm text-gray-600 leading-relaxed max-w-xl">
                    Standard generations are 1024x1024 (or equivalent ratios). Pro users get 4K upscaling, and Plus users can export up to 8K resolution.
                </div>
</details>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6 mb-24 animate-enter">

<div className="bg-[#efeae5] rounded-[2.5rem] p-12 md:p-20 flex flex-col justify-center items-start text-left relative overflow-hidden">
<div className="absolute top-12 left-12 w-16 h-16 bg-black text-white rounded-2xl flex items-center justify-center mb-8 rotate-3">
<iconify-icon icon="solar:magic-stick-3-bold" width="32"></iconify-icon>
</div>
<div className="mt-20">
<span className="bg-white/50 border border-white/50 text-gray-900 px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 inline-block">Get started</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-[0.95] mb-8">
                        Ready to create your <br/>
<span className="font-playfair italic font-medium">masterpiece?</span>
</h2>
<p className="text-gray-500 mb-10 max-w-sm">Join millions of creators transforming their ideas into reality with LoveArt.ai.</p>
<button className="bg-black text-white px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl">
                        Start Creating Free
                    </button>
</div>
</div>

<div className="bg-[#efeae5] rounded-[2.5rem] relative overflow-hidden flex items-center justify-center min-h-[500px] group">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white/80 via-transparent to-transparent opacity-60"></div>

<div className="relative w-[80%] bg-white rounded-xl shadow-2xl p-4 transform rotate-6 group-hover:rotate-0 transition-all duration-700">
<div className="flex items-center justify-between mb-4 border-b border-gray-100 pb-2">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-pink-400"></div>
<div className="w-3 h-3 rounded-full bg-purple-400"></div>
<div className="w-3 h-3 rounded-full bg-blue-400"></div>
</div>
<div className="text-[10px] font-mono text-gray-400">LoveArt v3.0</div>
</div>

<div className="space-y-2">
<div className="h-12 bg-pink-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-0 w-full h-full bg-pink-500/20 border-r-2 border-pink-500"></div>
<span className="text-[10px] text-pink-500 font-bold z-10">Canvas Layer</span>
</div>
<div className="h-8 bg-purple-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-0 w-[80%] h-full bg-purple-500/20 rounded-md"></div>
<span className="text-[10px] text-purple-500 font-bold z-10">Style Transfer: Oil Painting</span>
</div>
<div className="h-8 bg-blue-50 rounded-lg w-full flex items-center px-2 relative overflow-hidden">
<div className="absolute left-0 w-[60%] h-full bg-blue-500/10"></div>
<span className="text-[10px] text-blue-500 font-bold z-10">Lighting FX: Cinematic</span>
</div>
</div>
</div>
</div>
</div>

<div className="border-t border-gray-900/10 pt-16 flex flex-col md:flex-row justify-between gap-12 md:gap-24 animate-enter delay-200">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-6">
<div className="w-6 h-6 bg-black rounded flex items-center justify-center text-white">
<iconify-icon icon="solar:palette-bold" width="14"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight">LoveArt.ai</span>
</div>
<h4 className="text-xl font-semibold tracking-tight text-gray-900 leading-tight mb-4">
                    The intuitive AI art studio for <span className="font-playfair italic font-medium">creators.</span>
</h4>
<div className="flex gap-3 mt-6">
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:x" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-black text-white flex items-center justify-center hover:bg-gray-800 transition-colors" href="#">
<iconify-icon icon="simple-icons:behance" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-12 md:gap-24 w-full md:w-auto">
<div className="flex flex-col gap-4">
<span className="text-xs font-bold text-gray-900 uppercase tracking-wider">Product</span>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Style Explorer</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Pricing</a>
<a className="text-sm text-gray-500 hover:text-black transition-colors" href="#">Gallery</a>
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
<span>© 2026 LoveArt.ai Inc. All rights reserved.</span>
<span>Designed with intention.</span>
</div>
</footer>


    </>
  );
}
