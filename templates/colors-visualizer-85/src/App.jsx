import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function playDing() {
            const sound = document.getElementById('ding-sound');
            sound.currentTime = 0;
            sound.volume = 0.15; // Kept subtle
            sound.play().catch(() => {}); // Catch browsers blocking autoplay
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<audio id="ding-sound" preload="auto" src="https://assets.mixkit.co/active_storage/sfx/2568/2568-preview.mp3"></audio>


<div className="fixed inset-0 z-0 pointer-events-none flex justify-center">
<div className="absolute inset-0 bg-[linear-gradient(to_right,#00000006_1px,transparent_1px),linear-gradient(to_bottom,#00000006_1px,transparent_1px)] bg-[size:32px_32px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-[60%] h-[40%] bg-[#EB4A26]/10 blur-[120px] rounded-full"></div>
</div>

<nav className="w-full max-w-6xl mx-auto px-6 py-6 flex justify-between items-center relative z-10">
<div className="flex items-center gap-2 cursor-pointer group">
<img alt="Colors Visualizer Logo" className="h-7 w-7 drop-shadow-sm transition-transform group-hover:scale-105" src="https://colors-visualizer.vercel.app/_next/static/media/colors-visualizer-logo.917d1e25.svg"/>
<span className="font-medium text-sm tracking-tight text-zinc-700 group-hover:text-zinc-900 transition-colors">Colors Visualizer</span>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors hidden sm:block" href="#">Log in</a>
<button className="text-xs font-medium text-zinc-700 bg-white hover:bg-zinc-50 transition-colors border border-zinc-200 px-4 py-2 rounded-full shadow-sm flex items-center gap-2 group">
                Start building
                <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</button>
</div>
</nav>

<header className="flex flex-col text-center w-full max-w-5xl z-10 mr-auto ml-auto pt-20 pr-6 pb-16 pl-6 relative items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-[#EB4A26]/20 bg-[#EB4A26]/5 mb-8 text-xs font-medium text-[#EB4A26]">
<span className="w-2 h-2 rounded-full bg-[#EB4A26] animate-pulse"></span>
            From guessing to confident decisions
        </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tighter text-transparent bg-clip-text bg-gradient-to-b from-zinc-900 to-zinc-600 mb-6 leading-[1.1] max-w-3xl">
            From abstract colors to real design instantly.
        </h1>
<p className="text-base sm:text-lg text-zinc-500 max-w-xl mx-auto font-normal leading-relaxed mb-10">
            Stop guessing if a palette works. Apply your color combinations directly to real UI layouts, branding, and assets before writing a line of code.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 mb-16">
<button className="sm:w-auto hover:bg-[#EB4A26]/90 shadow-[#EB4A26]/20 transition-all hover:-translate-y-0.5 flex gap-2 group text-sm font-medium text-white bg-[#EB4A26] w-full rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
                Try Visualizer Free
                <iconify-icon className="group-hover:scale-110 transition-transform" icon="solar:play-circle-linear" width="18"></iconify-icon>
</button>

<a className="flex items-center gap-3 bg-white border border-zinc-200/80 px-4 py-2.5 rounded-full shadow-sm hover:shadow-md hover:border-zinc-300 transition-all hover:-translate-y-0.5 group" href="https://www.producthunt.com/products/colors-visualizer" target="_blank">
<div className="w-6 h-6 rounded-full bg-[#DA552F] flex items-center justify-center text-white font-bold text-xs group-hover:scale-110 transition-transform">P</div>
<div className="flex flex-col text-left">
<span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider leading-none">Featured on</span>
<span className="text-sm font-bold text-zinc-800 leading-none mt-0.5">Product Hunt</span>
</div>
</a>
</div>

<div className="w-full relative rounded-2xl p-2 bg-white/40 border border-zinc-200/60 shadow-[0_20px_60px_-15px_rgba(0,0,0,0.05)] backdrop-blur-md">
<div className="absolute inset-0 bg-gradient-to-t from-[#F3F4EF] via-transparent to-transparent z-10 top-2/3 rounded-b-2xl pointer-events-none"></div>
<img alt="Colors Palette Visualizer UI Mockup" className="w-full h-auto rounded-xl border border-zinc-200/50 object-cover shadow-sm relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/054a9483-57b1-4764-b82f-055bd7c6f5b4_1600w.png"/>
</div>
</header>

<main className="w-full max-w-6xl mx-auto px-6 pb-32 mt-12 relative z-10">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-fr">

<div className="md:col-span-2 row-span-1 flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 group relative overflow-hidden h-full" onmouseenter="playDing()">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#EB4A26]/5 blur-3xl rounded-full translate-x-1/3 -translate-y-1/3 transition-all duration-500 group-hover:bg-[#EB4A26]/10"></div>
<div className="flex items-center gap-3 mb-3 relative z-10">
<div className="w-8 h-8 rounded-lg bg-[#F3F4EF] border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:pallete-2-linear" width="18"></iconify-icon>
</div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900">Color Visualization on Real Designs</h3>
</div>
<p className="text-sm text-zinc-500 mb-8 max-w-md font-normal relative z-10">Apply your color palette directly to real UI layouts. See exactly how primary, secondary, and accent colors interact in a website context.</p>

<div className="flex-grow w-full bg-[#F3F4EF] rounded-2xl border border-zinc-200 p-4 flex gap-4 overflow-hidden relative shadow-inner group-hover:border-zinc-300 transition-colors">
<div className="w-1/4 h-full bg-white rounded-xl border border-zinc-200 p-3 space-y-3 shadow-sm transform group-hover:translate-x-1 transition-transform duration-500">
<div className="h-3 w-1/2 bg-zinc-200 rounded-md"></div>
<div className="space-y-2 pt-2">
<div className="h-2 w-full bg-[#EB4A26]/20 rounded-md"></div>
<div className="h-2 w-5/6 bg-[#F3F4EF] rounded-md"></div>
<div className="h-2 w-4/6 bg-[#F3F4EF] rounded-md"></div>
</div>
</div>
<div className="w-3/4 h-full flex flex-col gap-3 transform group-hover:-translate-x-1 transition-transform duration-500">
<div className="w-full h-24 bg-gradient-to-br from-[#EB4A26]/10 to-[#FFDAD1]/30 rounded-xl border border-[#EB4A26]/10 flex items-end p-4 shadow-sm">
<div className="h-6 w-8 rounded-md bg-[#EB4A26] shadow-[0_0_15px_rgba(235,74,38,0.2)]"></div>
</div>
<div className="flex gap-3 h-full">
<div className="flex-1 h-full min-h-[4rem] bg-white rounded-xl border border-zinc-200 p-3 flex flex-col justify-between shadow-sm">
<div className="h-2 w-8 bg-zinc-200 rounded-sm"></div>
<div className="h-1.5 w-12 bg-zinc-100 rounded-sm"></div>
</div>
<div className="flex-1 h-full min-h-[4rem] bg-white rounded-xl border border-zinc-200 p-3 flex flex-col justify-between shadow-sm">
<div className="h-2 w-10 bg-[#FFDAD1] rounded-sm"></div>
<div className="h-1.5 w-16 bg-zinc-100 rounded-sm"></div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 group h-full" onmouseenter="playDing()">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#F3F4EF] border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900">Instant Testing</h3>
</div>
<p className="text-sm text-zinc-500 mb-6 font-normal">Quickly generate, shuffle, and preview combinations.</p>
<div className="flex-grow flex items-center justify-center">
<div className="flex items-center gap-1.5 bg-[#F3F4EF] p-2 rounded-2xl border border-zinc-200 shadow-inner group-hover:scale-105 transition-transform duration-300">
<div className="w-8 h-10 rounded-xl bg-[#EB4A26] border border-black/5 shadow-sm"></div>
<div className="w-8 h-10 rounded-xl bg-[#FFDAD1] border border-black/5 shadow-sm"></div>
<div className="w-8 h-10 rounded-xl bg-zinc-800 border border-black/5 shadow-sm"></div>
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center cursor-pointer hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-500 group-hover:rotate-180 transition-transform duration-500" icon="solar:refresh-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 group h-full" onmouseenter="playDing()">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#F3F4EF] border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:devices-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900">Multiple Contexts</h3>
</div>
<p className="text-sm text-zinc-500 mb-6 font-normal">Test colors across different use cases.</p>
<div className="flex-grow flex flex-col gap-2 justify-center">
<div className="w-full bg-white border border-zinc-200 shadow-sm rounded-xl p-3 flex justify-between items-center group-hover:border-[#EB4A26]/40 transition-colors group-hover:translate-x-1 duration-300">
<div className="flex items-center gap-2 text-sm text-zinc-700 font-medium">
<iconify-icon icon="solar:monitor-smartphone-linear" width="16"></iconify-icon>
                            Website UI
                        </div>
<iconify-icon className="text-[#EB4A26]" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
<div className="w-full bg-[#F3F4EF] border border-zinc-200/60 rounded-xl p-3 flex justify-between items-center group-hover:-translate-x-1 duration-300 transition-transform">
<div className="flex items-center gap-2 text-sm text-zinc-400 font-medium">
<iconify-icon icon="solar:box-linear" width="16"></iconify-icon>
                            Brand Assets
                        </div>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 group h-full" onmouseenter="playDing()">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#F3F4EF] border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:infinity-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900">Rapid Iteration</h3>
</div>
<p className="text-sm text-zinc-500 mb-6 font-normal">Explore variations instantly with intuitive browse history features.</p>
<div className="flex-grow relative overflow-hidden flex items-center justify-center">
<div className="flex gap-2 items-center group-hover:scale-105 transition-transform duration-500">
<div className="w-10 h-14 rounded-xl bg-[#F3F4EF] border border-zinc-200 shadow-sm shrink-0 opacity-60"></div>
<div className="w-14 h-18 rounded-xl bg-[#FFDAD1]/20 border border-[#EB4A26]/20 shrink-0 flex items-center justify-center relative shadow-sm z-10 scale-110">
<div className="absolute -top-1 -right-1 w-3 h-3 bg-[#EB4A26] rounded-full border-2 border-white shadow-sm"></div>
</div>
<div className="w-10 h-14 rounded-xl bg-[#F3F4EF] border border-zinc-200 shadow-sm shrink-0 opacity-60"></div>
</div>
</div>
</div>

<div className="flex flex-col p-8 rounded-3xl bg-white border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 group h-full" onmouseenter="playDing()">
<div className="flex items-center gap-3 mb-3">
<div className="w-8 h-8 rounded-lg bg-[#F3F4EF] border border-zinc-200 flex items-center justify-center shadow-sm group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:export-linear" width="18"></iconify-icon>
</div>
<h3 className="text-lg tracking-tight font-medium text-zinc-900">Export &amp; Share</h3>
</div>
<p className="text-sm text-zinc-500 mb-6 font-normal">Export palettes as CSS or Tailwind natively.</p>
<div className="flex-grow flex items-center justify-center">
<div className="w-full bg-[#F3F4EF] rounded-xl border border-zinc-200 p-4 font-mono text-xs text-zinc-500 leading-relaxed shadow-inner group-hover:border-zinc-300 transition-colors">
<div className="flex gap-2"><span className="text-[#EB4A26]">:root</span> {</div>
<div className="pl-4 flex gap-2"><span className="text-zinc-600">--primary:</span> <span className="text-zinc-900 group-hover:text-[#EB4A26] transition-colors">#eb4a26;</span></div>
<div className="pl-4 flex gap-2"><span className="text-zinc-600">--bg:</span> <span className="text-zinc-900">#f3f4ef;</span></div>
<div>}</div>
</div>
</div>
</div>

<div className="md:col-span-3 flex flex-col md:flex-row gap-8 p-8 md:p-10 rounded-3xl bg-gradient-to-br from-white to-[#F3F4EF]/50 border border-zinc-200 shadow-sm hover:shadow-xl hover:shadow-[#EB4A26]/5 hover:-translate-y-1 hover:border-[#EB4A26]/30 transition-all duration-300 items-center overflow-hidden relative group h-full" onmouseenter="playDing()">
<div className="flex-1 z-10">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-xl bg-white border border-zinc-200 shadow-sm flex items-center justify-center group-hover:border-[#EB4A26]/30 transition-colors">
<iconify-icon className="text-[#EB4A26]" icon="solar:smile-circle-linear" width="22"></iconify-icon>
</div>
<h3 className="text-2xl tracking-tight font-medium text-zinc-900">Beginner-Friendly Interface</h3>
</div>
<p className="text-base text-zinc-500 mb-6 font-normal max-w-lg">
                        Simple UI tailored for everyone. You don't need a degree in color theory to make beautiful interfaces. Just toggle, tweak, and see the results instantly.
                    </p>
<div className="inline-flex items-center gap-2 text-xs text-zinc-600 font-medium px-3 py-1.5 rounded-md bg-white border border-zinc-200 shadow-sm group-hover:border-emerald-200 transition-colors">
<iconify-icon className="text-emerald-500" icon="solar:check-circle-linear" width="14"></iconify-icon>
                        Solves: "Beginners struggling with application"
                    </div>
</div>
<div className="flex-1 w-full flex justify-center md:justify-end z-10 relative">

<div className="bg-white p-6 rounded-2xl border border-zinc-200 shadow-xl w-full max-w-sm flex flex-col gap-6 group-hover:scale-[1.02] transition-transform duration-500">
<div className="flex justify-between items-center">
<span className="text-sm font-medium text-zinc-700">Interface Mode</span>

<div className="flex items-center bg-[#F3F4EF] p-1 rounded-lg border border-zinc-200/50">
<div className="text-xs font-medium px-4 py-1.5 text-zinc-500 hover:text-zinc-700 cursor-pointer transition-colors rounded-md">Pro</div>
<div className="text-xs font-medium px-4 py-1.5 text-zinc-900 bg-white shadow-sm border border-zinc-200/50 rounded-md cursor-default text-[#EB4A26]">Simple</div>
</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between p-3 rounded-xl bg-[#F3F4EF]/50 border border-zinc-100 group-hover:border-[#EB4A26]/10 transition-colors">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-[#EB4A26] shadow-sm border border-black/5 flex items-center justify-center">
<div className="w-2 h-2 rounded-full bg-white opacity-80"></div>
</div>
<span className="text-sm text-zinc-700 font-medium">Auto-generate contrast</span>
</div>

<div className="w-9 h-5 rounded-full bg-[#EB4A26] flex items-center px-0.5 shadow-inner">
<div className="w-4 h-4 rounded-full bg-white transform translate-x-4 shadow-sm"></div>
</div>
</div>
<div className="h-2 w-full bg-[#F3F4EF] rounded-full overflow-hidden flex shadow-inner">
<div className="w-1/3 bg-[#EB4A26]/40 group-hover:w-1/2 transition-all duration-700 ease-in-out"></div>
<div className="w-1/3 bg-[#FFDAD1] group-hover:w-1/4 transition-all duration-700 ease-in-out"></div>
</div>
</div>
</div>
</div>

<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-[#EB4A26]/5 rounded-full blur-3xl pointer-events-none group-hover:bg-[#EB4A26]/10 transition-colors duration-700"></div>
</div>
</div>
</main>

<footer className="w-full border-t border-zinc-200 mt-auto bg-[#F3F4EF]/80 backdrop-blur-md relative z-10">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-2">
<img alt="CV" className="w-5 h-5 opacity-80 saturate-0 grayscale" src="https://colors-visualizer.vercel.app/_next/static/media/colors-visualizer-logo.917d1e25.svg"/>
<span className="text-xs text-zinc-500 font-medium">© Colors Visualizer. All rights reserved.</span>
</div>
<div className="flex items-center gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Twitter</a>
</div>
</div>
</footer>

    </>
  );
}
