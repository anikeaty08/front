import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



                function playVideo(num, videoId, title) {
                    document.getElementById('main-iframe').src =
                        'https://www.youtube.com/embed/' + videoId + '?rel=0&modestbranding=1&autoplay=1&playsinline=1';
                    document.getElementById('main-title').innerHTML = title;
                    document.getElementById('progress-display').innerHTML =
                        num + ' <span class="text-gray-400">/ 10</span>';
                    
                    document.querySelectorAll('.vid-btn').forEach(function(btn) {
                        btn.classList.remove('bg-gray-100');
                        btn.classList.add('hover:bg-gray-50');
                    });
                    
                    var activeBtn = document.getElementById('btn-' + num);
                    if(activeBtn) {
                        activeBtn.classList.add('bg-gray-100');
                        activeBtn.classList.remove('hover:bg-gray-50');
                    }
                }
            


        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-[#F3F2EA] border-gray-200/50 border-b">

<nav className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-5 md:py-6 flex items-center justify-between">
<div className="flex items-center gap-2 text-gray-900">
<svg className="text-gray-900" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L10 6H14L8 18H4Z" fill="currentColor"></path>
<path d="M10 18L16 6H20L14 18H10Z" fill="currentColor"></path>
</svg>
<span className="text-xl font-medium tracking-tight uppercase">Salca</span>
</div>
<div className="hidden lg:flex items-center gap-8 text-lg font-normal text-gray-600">
<a className="hover:text-gray-900 transition-colors" href="#beneficios">Benefits</a>
<a className="hover:text-gray-900 transition-colors" href="#programa">Program</a>
<a className="hover:text-gray-900 transition-colors" href="#modulos">Modules</a>
<a className="hover:text-gray-900 transition-colors" href="#uso">User Guide</a>
</div>
<div>
<a className="inline-flex items-center justify-center rounded-md bg-gray-900 px-4 md:px-5 py-2 md:py-2.5 text-sm md:text-base font-normal text-white hover:bg-gray-800 transition-colors" href="https://www.amazon.com/dp/B0G1Q4RS95" rel="noopener noreferrer" target="_blank">
                    Store
                </a>
</div>
</nav>

<header className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 py-12 md:py-16 lg:py-24 grid grid-cols-1 lg:grid-cols-2 gap-10 md:gap-14 lg:gap-20 items-center">
<div className="max-w-xl mx-auto lg:mx-0 text-center lg:text-left">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight uppercase text-gray-900 leading-[1.1] mb-4 md:mb-6">
                    Master your balance.<br/>Unlock your potential.
                </h1>
<p className="text-lg md:text-xl lg:text-2xl text-gray-600 mb-8 leading-relaxed">
                    Welcome to your exclusive training hub. Expert-guided videos to maximize the results of your SALCA Single Leg.
                </p>
<a className="inline-flex items-center justify-center rounded-md bg-gray-900 px-6 py-3.5 text-base md:text-lg font-normal text-white hover:bg-gray-800 transition-colors gap-2" href="#programa">
                    Start Training
                    <i className="w-5 h-5" data-lucide="arrow-right"></i>
</a>
</div>

<div className="w-full relative aspect-video rounded-2xl overflow-hidden shadow-2xl ring-1 ring-gray-900/5 bg-gray-900">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/HZp8uXOv7Wc?rel=0&amp;modestbranding=1&amp;playsinline=1" title="Salca Demo Video">
</iframe>
</div>
</header>
</div>
<section className="py-16 md:py-20 lg:py-32 max-w-7xl mx-auto px-4 md:px-6 lg:px-8 border-b border-gray-100" id="beneficios">
<div className="grid lg:grid-cols-3 gap-10 lg:gap-8">
<div className="lg:col-span-1">
<h2 className="text-2xl font-normal tracking-tight uppercase text-gray-900 mb-4">
                    Designed for your progression
                </h2>
<p className="text-lg lg:text-xl text-gray-600">
                    A compact, portable, and durable system designed to seamlessly integrate into physical therapy, rehabilitation, yoga, and injury prevention routines.
                </p>
</div>
<div className="lg:col-span-2 grid sm:grid-cols-2 gap-x-8 gap-y-10">
<div className="flex gap-4">
<div className="mt-1 shrink-0 text-gray-900">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight text-gray-900 mb-1">Balance and Stability</h3>
<p className="text-base md:text-lg text-gray-600">Improve your proprioception and overall body control with constant micro-adjustment exercises.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 shrink-0 text-gray-900">
<i className="w-6 h-6" data-lucide="zap"></i>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight text-gray-900 mb-1">Targeted Strengthening</h3>
<p className="text-base md:text-lg text-gray-600">Activate and strengthen the stabilizing muscles of the ankle and the entire lower body chain.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 shrink-0 text-gray-900">
<i className="w-6 h-6" data-lucide="heart-pulse"></i>
</div>
<div>
<h3 className="text-xl font-normal tracking-tight text-gray-900 mb-1">Recovery and Prevention</h3>
<p className="text-base md:text-lg text-gray-600">Fundamental support in post-injury recovery and a key tool for sprain prevention.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 shrink-0 text-gray-900">
<i className="w-6 h-6" data-lucide="align-center"></i>
</div>
<div className="">
<h3 className="text-xl font-normal tracking-tight text-gray-900 mb-1">Posture Correction</h3>
<p className="text-base md:text-lg text-gray-600">Align your base of support, improving your static and dynamic posture in your daily life.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50/50 py-16 md:py-20 lg:py-24" id="programa">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<style>
                .playlist-scroll::-webkit-scrollbar { width: 6px; }
                .playlist-scroll::-webkit-scrollbar-track { background: transparent; }
                .playlist-scroll::-webkit-scrollbar-thumb { background: #e5e7eb; border-radius: 9999px; }
                .playlist-scroll::-webkit-scrollbar-thumb:hover { background: #d1d5db; }
            </style>

<div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6 mb-8 md:mb-10">
<div>
<h2 className="text-2xl md:text-3xl font-normal tracking-tight uppercase text-gray-900">
                        Core Training Program
                    </h2>
<p className="mt-3 text-lg lg:text-xl text-gray-600 max-w-2xl">
                        Follow these 10 foundational lessons to setup your board correctly, master your balance, and execute the complete 8-week program.
                    </p>
</div>
<div className="text-left md:text-right flex flex-col md:items-end">
<span className="text-sm font-medium text-gray-500 uppercase tracking-tight">Course Progress</span>
<span className="text-xl font-normal text-gray-900 tracking-tight mt-1" id="progress-display">
                        1 <span className="text-gray-400">/ 10</span>
</span>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-[1fr_380px] xl:grid-cols-[1fr_420px] gap-8 lg:gap-8 items-start">

<div className="flex flex-col rounded-2xl bg-white border border-gray-200/60 shadow-sm overflow-hidden">
<div className="w-full aspect-video bg-gray-900 relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" id="main-iframe" src="https://www.youtube.com/embed/MnhVZFVHPBQ?rel=0&amp;modestbranding=1&amp;playsinline=1" title="Welcome &amp; Setup">
</iframe>
</div>
<div className="p-5 md:p-6 lg:p-8 flex justify-between items-start gap-4">
<div className="">
<div className="flex items-center gap-2 mb-3">
<span className="inline-flex items-center gap-1.5 uppercase text-xs font-medium text-gray-900 tracking-tight bg-gray-100 px-2.5 py-1 rounded-md">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gray-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-gray-600"></span>
</span>
                                    Now Playing
                                </span>
</div>
<h3 className="text-xl md:text-2xl lg:text-3xl font-normal text-gray-900 tracking-tight" id="main-title">
                                1. Welcome &amp; Setup
                            </h3>
</div>
<button className="shrink-0 flex items-center justify-center w-10 h-10 text-gray-400 hover:text-gray-900 transition-colors rounded-full hover:bg-gray-100">
<i className="w-5 h-5" data-lucide="share-2"></i>
</button>
</div>
</div>

<div className="flex flex-col rounded-2xl bg-white border border-gray-200/60 shadow-sm overflow-hidden h-[400px] md:h-[450px] lg:h-[444px] xl:h-[565px]">
<div className="p-4 md:p-5 border-b border-gray-100 bg-gray-50/50 shrink-0">
<h4 className="text-sm font-medium uppercase tracking-tight text-gray-900">Course Modules</h4>
</div>
<div className="flex-1 overflow-y-auto p-2 space-y-1 min-h-0 playlist-scroll pr-1">

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl bg-gray-100 text-left transition-colors group" id="btn-1" onclick="playVideo(1, 'MnhVZFVHPBQ', '1. Welcome &amp; Setup')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Welcome &amp; Setup" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/MnhVZFVHPBQ/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-medium text-gray-900 truncate tracking-tight mb-0.5">1. Welcome &amp; Setup</h5>
<p className="text-xs md:text-sm text-gray-500">Video 01</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-2" onclick="playVideo(2, 'KqzwLQ_QeDg', '2. Warm-Up Oficial')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Warm-Up Oficial" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/KqzwLQ_QeDg/mqdefault.jpg"/>
<div className="group-hover:bg-black/20 transition-colors flex bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">2. Warm-Up Oficial</h5>
<p className="text-xs md:text-sm text-gray-500">Video 02</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-3" onclick="playVideo(3, 'xlBqTd6x-H4', '3. Getting On And Off The Board')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Getting On And Off The Board" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/xlBqTd6x-H4/mqdefault.jpg"/>
<div className="group-hover:bg-black/20 transition-colors flex bg-black/10 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">3. Getting On And Off The Board</h5>
<p className="text-xs md:text-sm text-gray-500">Video 03</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-4" onclick="playVideo(4, 'LzuCKH1jZIE', '4. Posture Base &amp; Alignment')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Posture Base &amp; Alignment" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/LzuCKH1jZIE/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">4. Posture Base &amp; Alignment</h5>
<p className="text-xs md:text-sm text-gray-500">Video 04</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-5" onclick="playVideo(5, 'p2hdA-YKuGU', '5. The Science Of Balance')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="The Science Of Balance" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/p2hdA-YKuGU/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">5. The Science Of Balance</h5>
<p className="text-xs md:text-sm text-gray-500">Video 05</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-6" onclick="playVideo(6, 'rIwiv6_OndI', '6. E1 Big Toe Extension')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="E1 Big Toe Extension" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/rIwiv6_OndI/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">6. E1 Big Toe Extension</h5>
<p className="text-xs md:text-sm text-gray-500">Video 06</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-7" onclick="playVideo(7, 'PbllYAUXidg', '7. E2 Pronation Training')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="E2 Pronation Training" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/PbllYAUXidg/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">7. E2 Pronation Training</h5>
<p className="text-xs md:text-sm text-gray-500">Video 07</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-8" onclick="playVideo(8, '0s3kC35sNiM', '8. Mobility Flow E3-E6')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Mobility Flow E3-E6" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/0s3kC35sNiM/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">8. Mobility Flow E3-E6</h5>
<p className="text-xs md:text-sm text-gray-500">Video 08</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-9" onclick="playVideo(9, '8DLQp3hdock', '9. Progress Tests (SLS + SEBT)')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Progress Tests (SLS + SEBT)" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/8DLQp3hdock/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">9. Progress Tests (SLS + SEBT)</h5>
<p className="text-xs md:text-sm text-gray-500">Video 09</p>
</div>
</button>

<button className="vid-btn w-full flex items-center gap-4 p-3 rounded-xl hover:bg-gray-50 text-left transition-colors group" id="btn-10" onclick="playVideo(10, 'mbjjVHZAW2c', '10. Your 8-Week Program')">
<div className="relative shrink-0 w-24 md:w-28 aspect-video bg-gray-200 rounded-lg overflow-hidden ring-1 ring-black/5">
<img alt="Your 8-Week Program" className="absolute inset-0 w-full h-full object-cover" src="https://img.youtube.com/vi/mbjjVHZAW2c/mqdefault.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-black/20 transition-colors flex items-center justify-center">
<div className="w-8 h-8 flex items-center justify-center rounded-full bg-white/90 shadow-sm backdrop-blur-sm opacity-0 group-hover:opacity-100 transition-all scale-90 group-hover:scale-100">
<i className="w-4 h-4 ml-0.5 text-gray-900 fill-current" data-lucide="play"></i>
</div>
</div>
</div>
<div className="flex-1 min-w-0 py-1">
<h5 className="text-sm md:text-base font-normal text-gray-600 group-hover:text-gray-900 truncate tracking-tight mb-0.5">10. Your 8-Week Program</h5>
<p className="text-xs md:text-sm text-gray-500">Video 10</p>
</div>
</button>
</div>
</div>
</div>

</div>
</section>

<section className="py-16 md:py-20 lg:py-24 bg-white" id="modulos">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<div className="mb-10 md:mb-12">
<h2 className="uppercase text-2xl font-normal text-gray-900 tracking-tight">Select the routine that's right for you</h2>
<p className="mt-3 text-lg md:text-xl text-gray-600 max-w-2xl">
                    Select the routine that best fits your current profile and goals.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 md:gap-10">

<div className="group flex flex-col gap-4">
<div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200/60 shadow-sm relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/pyRKYSPmFcY?rel=0&amp;modestbranding=1&amp;playsinline=1" title="El atleta preventivo">
</iframe>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1.5 text-xs md:text-sm font-normal uppercase tracking-tight text-gray-500">
<span className="">Module 01</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="">5:05 Min</span>
</div>
<h3 className="text-xl font-normal text-gray-900 tracking-tight">The Preventive Athlete</h3>
<p className="mt-1 text-base md:text-lg text-gray-600 line-clamp-2">Routine designed to strengthen the structure and prevent common injuries during sports practice.</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200/60 shadow-sm relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/-fA4D_hL5H4?rel=0&amp;modestbranding=1&amp;playsinline=1" title="El lesionado en recuperación">
</iframe>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1.5 text-xs md:text-sm font-normal uppercase tracking-tight text-gray-500">
<span className="">Module 02</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="">4:45 Min</span>
</div>
<h3 className="text-xl font-normal text-gray-900 tracking-tight">Guided Recovery</h3>
<p className="mt-1 text-base md:text-lg text-gray-600 line-clamp-2">Low-impact exercises focused on restoring mobility and stability after ankle injuries.</p>
</div>
</div>

<div className="group flex flex-col gap-4">
<div className="w-full aspect-video bg-gray-100 rounded-lg overflow-hidden border border-gray-200/60 shadow-sm relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen="" className="absolute inset-0 w-full h-full" frameborder="0" src="https://www.youtube.com/embed/kKDHVRsVhPY?rel=0&amp;modestbranding=1&amp;playsinline=1" title="El adulto mayor activo">
</iframe>
</div>
<div className="">
<div className="flex items-center gap-2 mb-1.5 text-xs md:text-sm font-normal uppercase tracking-tight text-gray-500">
<span>Module 03</span>
<span className="w-1 h-1 rounded-full bg-gray-300"></span>
<span className="">5:05 Min</span>
</div>
<h3 className="text-xl font-normal text-gray-900 tracking-tight">Active Senior</h3>
<p className="mt-1 text-base md:text-lg text-gray-600 line-clamp-2">Maintenance of proprioception, balance, and safety in everyday movements.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 lg:py-32 bg-gray-50 border-gray-100 border-t border-b" id="uso">
<div className="max-w-4xl mx-auto px-4 md:px-6 lg:px-8 text-center flex flex-col items-center">
<div className="inline-flex items-center justify-center w-14 h-14 md:w-16 md:h-16 rounded-2xl bg-white shadow-sm ring-1 ring-gray-900/5 mb-6 text-gray-900">
<i className="w-7 h-7 md:w-8 md:h-8" data-lucide="book-open"></i>
</div>
<h2 className="text-2xl md:text-3xl lg:text-4xl font-medium tracking-tight uppercase text-gray-900 mb-4">
                User Manual
            </h2>
<p className="text-base md:text-lg lg:text-xl text-gray-600 max-w-2xl mb-8 md:mb-10">
                Discover step by step how to assemble, adjust, and correctly use your Single Leg. Maximize your results and ensure a safe workout.
            </p>
<a className="inline-flex items-center justify-center w-full sm:w-auto rounded-md bg-gray-900 px-8 py-4 text-base md:text-lg font-normal text-white hover:bg-gray-800 transition-colors gap-3" href="https://drive.google.com/file/d/1AN2ttrBFb4KHDoZebAKLivcJEdRMdlYH/view?usp=sharing" rel="noopener noreferrer" target="_blank">
<i className="w-5 h-5" data-lucide="download"></i>
                Download PDF Manual
            </a>
</div>
</section>

<section className="py-16 md:py-24 lg:py-32 bg-[#111111] text-white overflow-hidden">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="flex flex-col items-start text-left">
<span className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 border border-white/10 text-xs md:text-sm font-normal tracking-tight uppercase mb-6 md:mb-8">
<i className="w-4 h-4" data-lucide="gift"></i>
                        Exclusive Offer For You
                    </span>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-medium tracking-tight mb-4 md:mb-6 leading-[1.15]">
                        Complete your mobility routine
                    </h2>
<p className="text-base md:text-lg lg:text-xl text-gray-400 mb-8 md:mb-10 max-w-xl leading-relaxed">
                        We want your training to be comprehensive. That's why we're giving you a special discount. Get the <span className="text-white font-normal">Salca Stretching Board</span> and maximize your results today.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex items-center justify-center rounded-md bg-white px-8 py-3.5 md:py-4 text-base md:text-lg font-normal text-gray-900 hover:bg-gray-100 transition-colors w-full sm:w-auto" href="https://www.amazon.com/promocode/A3NA7SOCTX5XDX" rel="noopener noreferrer" target="_blank">
                            Get 10% Off
                        </a>
<a className="inline-flex items-center justify-center rounded-md bg-transparent border border-white/20 px-8 py-3.5 md:py-4 text-base md:text-lg font-normal text-white hover:bg-white/5 transition-colors w-full sm:w-auto" href="#">
                            View Details
                        </a>
</div>
</div>

<div className="relative w-full aspect-square bg-white rounded-3xl overflow-hidden shadow-2xl flex items-center justify-center p-6 md:p-8 lg:p-12 group border border-white/10">
<img alt="Salca Stretching Board" className="transition-transform duration-700 group-hover:scale-105 w-full h-full object-contain z-10 relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/176c1b95-1cfc-4f45-8ed2-b417f99f02e4_1600w.png"/>
<div className="flex flex-col z-0 text-gray-400 bg-gray-50 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<i className="w-10 h-10 md:w-12 md:h-12 mb-4 opacity-40" data-lucide="image"></i>
<span className="font-normal text-base md:text-lg text-center px-4 tracking-tight">Insert Stretching Board<br/>image here</span>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-10 md:py-12">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
<div className="flex items-center gap-2 text-gray-900">
<svg className="text-gray-400" fill="none" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M4 18L10 6H14L8 18H4Z" fill="currentColor"></path>
<path d="M10 18L16 6H20L14 18H10Z" fill="currentColor"></path>
</svg>
<span className="text-base font-medium tracking-tight uppercase text-gray-500">Salca</span>
</div>
<div className="flex flex-wrap justify-center md:justify-start gap-4 md:gap-6 text-sm md:text-base text-gray-500 font-normal">
<a className="hover:text-gray-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-900 transition-colors" href="#">Terms of Service</a>
<a className="hover:text-gray-900 transition-colors" href="#">Contact</a>
</div>
<div className="flex items-center gap-4 text-gray-400">
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="twitter"></i></a>
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="instagram"></i></a>
<a className="hover:text-gray-900 transition-colors" href="#"><i className="w-5 h-5" data-lucide="youtube"></i></a>
</div>
</div>
</footer>


    </>
  );
}
