import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
bg: '#f0fdf4',
icon: '#bef264',
arrow: '#d9f99d',
dark: '#022c22', // Deep emerald for Hero
accent: '#84cc16', // Lime for buttons
}
},
backgroundImage: {
'hero-grid': "linear-gradient(to right, rgba(255,255,255,0.05) 1px, transparent 1px), linear-gradient(to bottom, rgba(255,255,255,0.05) 1px, transparent 1px)",
}
}
}
}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Carousel Logic
        document.addEventListener('DOMContentLoaded', () => {
            const track = document.getElementById('track');
            const items = track.children;
            const prevBtn = document.getElementById('prevBtn');
            const nextBtn = document.getElementById('nextBtn');
            const prevBtnMobile = document.getElementById('prevBtnMobile');
            const nextBtnMobile = document.getElementById('nextBtnMobile');

            let currentIndex = 0;
            const totalItems = items.length;

            function getVisibleItems() {
                if (window.innerWidth >= 1024) return 3;
                if (window.innerWidth >= 768) return 2;
                return 1;
            }

            function updateCarousel() {
                const visibleItems = getVisibleItems();
                const itemWidth = 100 / visibleItems;
                
                // Ensure index is within bounds
                const maxIndex = totalItems - visibleItems;
                if (currentIndex < 0) currentIndex = 0;
                if (currentIndex > maxIndex) currentIndex = maxIndex;

                const translateX = -(currentIndex * itemWidth);
                track.style.transform = `translateX(${translateX}%)`;

                // Update Button States
                const isStart = currentIndex === 0;
                const isEnd = currentIndex === maxIndex;

                [prevBtn, prevBtnMobile].forEach(btn => {
                    btn.disabled = isStart;
                    btn.style.opacity = isStart ? '0.3' : '1';
                });
                
                [nextBtn, nextBtnMobile].forEach(btn => {
                    btn.disabled = isEnd;
                    btn.style.opacity = isEnd ? '0.5' : '1';
                });
            }

            function moveNext() {
                const visibleItems = getVisibleItems();
                const maxIndex = totalItems - visibleItems;
                if (currentIndex < maxIndex) {
                    currentIndex++;
                    updateCarousel();
                }
            }

            function movePrev() {
                if (currentIndex > 0) {
                    currentIndex--;
                    updateCarousel();
                }
            }

            // Event Listeners
            prevBtn.addEventListener('click', movePrev);
            nextBtn.addEventListener('click', moveNext);
            prevBtnMobile.addEventListener('click', movePrev);
            nextBtnMobile.addEventListener('click', moveNext);

            // Handle Resize
            window.addEventListener('resize', () => {
                updateCarousel();
            });

            // Initial call
            updateCarousel();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="absolute top-0 left-0 w-full z-50 px-6 py-6">
<div className="max-w-[1400px] mx-auto flex items-center justify-between">

<div className="flex items-center gap-2">
<span className="text-[#bef264] text-2xl font-bold tracking-tight">Meco</span>
</div>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Product</a>
<a className="hover:text-white transition-colors" href="#">Company</a>
<a className="hover:text-white transition-colors" href="#">Insight</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-white text-sm font-medium border border-slate-600 px-5 py-2 rounded-full hover:border-slate-400 transition-colors" href="#">Login</a>
<a className="bg-[#bef264] text-emerald-950 text-sm font-semibold px-5 py-2 rounded-full hover:bg-[#a3e635] transition-colors shadow-lg shadow-lime-900/20" href="#">Sign Up</a>
</div>
</div>
</nav>

<header className="overflow-hidden bg-[#022c22] pt-32 pb-24 relative">

<div className="absolute inset-0 bg-hero-grid bg-[size:50px_50px] opacity-20 pointer-events-none"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-[#022c22]/90 pointer-events-none"></div>
<div className="flex flex-col z-10 text-center max-w-[1400px] mr-auto ml-auto pr-4 pl-4 relative items-center">

<h1 className="md:text-6xl lg:text-7xl leading-[1.1] text-4xl font-semibold bg-gradient-to-br from-white to-[#bef264] bg-clip-text text-transparent tracking-tight max-w-4xl mb-6 pb-2" style={{animation: 'fade-out-scroll linear forwards', animationTimeline: 'scroll()', animationRange: '0 500px'}}>
<style>@keyframes fade-out-scroll { to { opacity: 0; transform: translateY(-20px); filter: blur(8px); } }</style>
    Shaping Financial futures with expertise and care.
</h1>
<p className="text-slate-400 text-base md:text-lg max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                We offer a comprehensive suite of services, from personal banking to business solutions, all delivered with unmatched precision and excellence.
            </p>

<div className="flex items-center gap-4 mb-20">
<button className="bg-[#bef264] text-emerald-950 px-8 py-3.5 rounded-full text-sm font-semibold hover:bg-[#a3e635] transition-transform hover:scale-105">
                    Get Started
                </button>
<button className="flex items-center gap-2 text-white border border-slate-600 px-6 py-3.5 rounded-full text-sm font-medium hover:bg-white/5 transition-colors group">
                    Watch Demo
                    <i className="w-4 h-4 text-white group-hover:text-[#bef264] transition-colors" data-lucide="play-circle"></i>
</button>
</div>

<div className="relative w-full max-w-5xl h-[400px] md:h-[550px] flex justify-center">

<div className="relative w-[280px] md:w-[300px] bg-slate-900 rounded-[3rem] border-[8px] border-slate-800 shadow-2xl overflow-hidden z-20">

<div className="flex justify-between items-center px-6 pt-4 pb-2 text-white text-[10px]">
<span>9:41</span>
<div className="flex gap-1.5">
<i className="w-3 h-3" data-lucide="signal"></i>
<i className="w-3 h-3" data-lucide="wifi"></i>
<i className="w-3 h-3" data-lucide="battery-full"></i>
</div>
</div>

<div className="px-6 py-4 flex justify-between items-center">
<span className="text-slate-300 text-sm font-medium">Statistic</span>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400">
<i className="w-4 h-4" data-lucide="search"></i>
</div>
<div className="w-8 h-8 rounded-full border border-slate-700 flex items-center justify-center text-slate-400">
<i className="w-4 h-4" data-lucide="bell"></i>
</div>
</div>
</div>

<div className="px-6 flex justify-between text-[11px] text-slate-500 mb-6">
<span className="py-1">Day</span>
<span className="bg-[#bef264] text-emerald-950 font-semibold px-3 py-1 rounded-full">Week</span>
<span className="py-1">Month</span>
<span className="py-1">Year</span>
</div>

<div className="px-6 text-center mb-4">
<p className="text-slate-400 text-xs mb-1">Total Spendings</p>
<h3 className="text-white text-2xl font-semibold tracking-tight">$6,340.00</h3>
</div>

<div className="relative h-32 w-full px-2 mt-4">

<div className="absolute left-1/2 -translate-x-1/2 top-0 bg-[#bef264] px-2 py-0.5 rounded-full text-[10px] font-bold text-emerald-900 shadow-lg z-10">$ 69.00</div>
<div className="absolute left-1/2 -translate-x-1/2 top-5 w-0.5 h-16 bg-slate-700/50 border-l border-dashed border-slate-500"></div>
<svg className="w-full h-full overflow-visible" preserveaspectratio="none">
<path d="M0,80 C20,80 40,60 60,70 C80,80 100,50 120,60 C140,70 150,20 150,20 C150,20 160,60 180,50 C200,40 220,70 240,60 C260,50 280,80 300,70" fill="none" stroke="#bef264" strokeWidth="2"></path>
<path d="M0,80 C20,80 40,60 60,70 C80,80 100,50 120,60 C140,70 150,20 150,20 C150,20 160,60 180,50 C200,40 220,70 240,60 C260,50 280,80 300,70 L300,150 L0,150 Z" fill="url(#gradient)" opacity="0.2"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#bef264', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#bef264', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>

<circle cx="150" cy="20" fill="#022c22" r="4" stroke="#bef264" strokeWidth="2"></circle>
</svg>
</div>
</div>

<div className="absolute right-0 md:right-[5%] lg:right-[15%] top-1/4 bg-white p-5 rounded-3xl shadow-2xl animate-[float_4s_ease-in-out_infinite] hidden sm:block z-30 max-w-[220px]">
<p className="text-slate-500 text-xs font-medium mb-1">Balance</p>
<div className="flex items-center gap-2">
<h4 className="text-slate-900 text-2xl font-bold tracking-tight">64,573.00</h4>
<span className="bg-[#bef264] text-[10px] font-bold px-1.5 py-0.5 rounded text-emerald-900">+57%</span>
</div>
</div>

<div className="absolute left-0 md:left-[5%] lg:left-[15%] top-[10%] bg-white p-4 rounded-2xl shadow-xl animate-[float_5s_ease-in-out_infinite_1s] hidden sm:block z-20">
<div className="flex items-center gap-3 mb-1">
<h4 className="text-slate-900 text-lg font-bold">+374.00</h4>
<span className="bg-[#bef264] text-[10px] font-bold px-1.5 py-0.5 rounded text-emerald-900">+3.4%</span>
</div>
<p className="text-slate-400 text-[10px]">Income this month</p>
</div>

<div className="absolute left-[2%] md:left-[8%] lg:left-[18%] bottom-[15%] bg-white p-5 rounded-[2rem] shadow-2xl animate-[float_6s_ease-in-out_infinite_0.5s] hidden sm:flex flex-col gap-3 z-30 w-[200px]">

<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="" src="https://i.pravatar.cc/100?img=33"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="" src="https://i.pravatar.cc/100?img=47"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-slate-200 overflow-hidden"><img alt="" src="https://i.pravatar.cc/100?img=12"/></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-white flex items-center justify-center text-[10px] font-bold text-slate-600 shadow-sm">50+</div>
</div>
<div>
<p className="text-slate-500 text-[10px] font-medium">BTC/USDT</p>
<h4 className="text-slate-900 text-xl font-bold tracking-tight">$41,984.00</h4>
<p className="text-emerald-500 text-[10px] font-bold">+18.25%</p>
</div>
<button className="w-full py-2 bg-[#bef264] hover:bg-[#a3e635] rounded-xl text-xs font-bold text-emerald-950 transition-colors">Sell</button>
</div>

<div className="absolute right-[5%] bottom-[20%] bg-white pr-4 pl-2 py-2 rounded-full shadow-lg animate-[float_4s_ease-in-out_infinite_1.5s] hidden md:flex items-center gap-3 z-10">
<div className="w-8 h-8 rounded-full bg-slate-100 overflow-hidden">
<img alt="User" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div className="flex flex-col">
<span className="text-slate-900 text-xs font-bold">Devil Ron</span>
<span className="text-slate-400 text-[9px]">02-11-2024</span>
</div>
<div className="h-4 w-12 ml-2">
<svg className="w-full h-full stroke-red-400 fill-none" strokeWidth="2" viewbox="0 0 50 20">
<path d="M0,10 L10,5 L20,15 L30,5 L40,15 L50,10"></path>
</svg>
</div>
<div className="flex flex-col items-end ml-1">
<span className="text-slate-900 text-xs font-bold">-18,985.00</span>
<span className="text-slate-400 text-[9px]">02-11-2024</span>
</div>
</div>
</div>
</div>
</header>

<section className="bg-white py-16 border-b border-slate-100">
<div className="max-w-[1400px] mx-auto px-4 text-center">
<h2 className="text-xl md:text-2xl font-medium text-slate-900 mb-12 tracking-tight">Our Recent Clients &amp; Partners</h2>
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-12 px-4 md:px-20 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 group cursor-default">
<div className="bg-slate-900 text-white p-1.5 rounded-lg group-hover:bg-[#bef264] group-hover:text-slate-900 transition-colors">
<i className="w-5 h-5 fill-current" data-lucide="zap"></i>
</div>
<span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">Boltshift</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<div className="border-2 border-slate-700 p-1 rounded group-hover:border-[#bef264] transition-colors">
<i className="w-5 h-5 text-slate-700 group-hover:text-slate-900" data-lucide="box"></i>
</div>
<span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">Lightbox</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<div className="text-slate-700 group-hover:text-[#84cc16]">
<i className="w-6 h-6" data-lucide="feather"></i>
</div>
<span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">FeatherDev</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<div className="text-slate-700 group-hover:text-blue-600">
<i className="w-6 h-6 fill-slate-300 group-hover:fill-blue-100" data-lucide="hexagon"></i>
</div>
<span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">GlobalBank</span>
</div>

<div className="flex items-center gap-2 group cursor-default">
<div className="text-slate-700 group-hover:text-orange-500">
<i className="w-6 h-6" data-lucide="sun"></i>
</div>
<span className="text-lg font-bold text-slate-700 group-hover:text-slate-900">Nietzsche</span>
</div>
</div>
</div>
</section>

<section className="md:py-28 w-full max-w-[1400px] mr-auto ml-auto pt-20 pr-4 pb-20 pl-4 relative">

<div className="max-w-3xl mx-auto text-center mb-16 md:mb-20">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight leading-[1.1] mb-6 text-slate-900">
                Browse our set of banking<br className="hidden md:block"/> services and offering
            </h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed font-normal max-w-2xl mx-auto">
                Lorem ipsum dolor sit amet consectetur massa arcu enim vestibulum nisl massa dolor feugiat m risus sed lacus nec aliquam nec a elementum est donec morbi praesent lacus viverra quis.
            </p>
</div>

<div className="relative w-full overflow-hidden" id="slider-container">
<div className="flex transition-transform duration-500 ease-[cubic-bezier(0.25,1,0.5,1)]" id="track">

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div className="">
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Checking accounts</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="user" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="flex flex-col hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default bg-[#f2fde9] h-[340px] rounded-[32px] pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight mb-3">Credit cards</h3><p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="credit-card" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Investments</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="circle-dollar-sign" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Savings</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="piggy-bank" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Business Loans</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Mortgages</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="home" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Digital Wallet</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="smartphone" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="w-full md:w-1/2 lg:w-1/3 flex-shrink-0 px-3">
<div className="bg-[#f2fde9] rounded-[32px] p-8 h-[340px] flex flex-col justify-between hover:scale-[1.02] transition-transform duration-300 ease-out cursor-default">
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-3 text-slate-900">Global Support</h3>
<p className="text-base text-slate-500 leading-relaxed font-normal">
                                Lorem ipsum dolor sit amet consectetur ac lectus sit arcu dictum aliquet in.
                            </p>
</div>
<div className="w-14 h-14 bg-[#bef264] rounded-2xl flex items-center justify-center text-slate-900">
<i className="w-7 h-7" data-lucide="globe" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row items-center justify-between mt-12 md:mt-16 px-3">

<button className="hidden md:flex group items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-transparent hover:bg-slate-50 transition-colors disabled:opacity-30 disabled:cursor-not-allowed" disabled="" id="prevBtn">
<i className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" data-lucide="arrow-left"></i>
</button>

<div className="flex items-center gap-3 order-1 md:order-none mb-8 md:mb-0">
<a className="px-7 py-3.5 bg-slate-900 text-white rounded-full text-sm font-medium hover:bg-slate-800 transition-colors" href="#">
                    Get started
                </a>
<a className="px-7 py-3.5 bg-white text-slate-900 border border-slate-200 rounded-full text-sm font-medium hover:bg-slate-50 transition-colors" href="#">
                    Learn more
                </a>
</div>

<button className="hidden md:flex group items-center justify-center w-12 h-12 rounded-full bg-[#bef264] hover:bg-[#a3e635] transition-colors disabled:opacity-50 disabled:cursor-not-allowed" id="nextBtn">
<i className="w-5 h-5 text-slate-900" data-lucide="arrow-right"></i>
</button>

<div className="flex md:hidden items-center justify-between w-full max-w-[200px] order-2">
<button className="flex items-center justify-center w-12 h-12 rounded-full border border-slate-200 bg-transparent hover:bg-slate-50 transition-colors disabled:opacity-30" disabled="" id="prevBtnMobile">
<i className="w-5 h-5 text-slate-600 group-hover:text-slate-900 transition-colors" data-lucide="arrow-left"></i>
</button>
<button className="flex items-center justify-center w-12 h-12 rounded-full bg-[#bef264] hover:bg-[#a3e635] transition-colors disabled:opacity-50" id="nextBtnMobile">
<i className="w-5 h-5 text-slate-900" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<style className="">
        @keyframes float {
            0%, 100% { transform: translateY(0px); }
            50% { transform: translateY(-10px); }
        }
    </style>

    </>
  );
}
