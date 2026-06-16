import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('mousemove', (e) => {
            const cards = document.querySelectorAll('.flashlight-card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });
    


        lucide.createIcons();
        
        // Add subtle parallax effect on scroll
        const scrollContainer = document.querySelector('main');
        scrollContainer.addEventListener('scroll', () => {
            const scrollPos = scrollContainer.scrollTop;
            const height = window.innerHeight;
            // Calculations for parallax could go here if needed
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<main className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scrollbar-hide">

<section className="h-screen w-full snap-start flex items-center justify-center relative overflow-hidden bg-neutral-950">

<div className="absolute inset-0 grid grid-cols-6 pointer-events-none opacity-20">
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.1s'}}></div>
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.2s'}}></div>
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.3s'}}></div>
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.4s'}}></div>
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.5s'}}></div>
<div className="bg-strip bg-neutral-900 h-full w-px mx-auto" style={{animationDelay: '0.6s'}}></div>
</div>

<div className="flashlight-card aspect-[3/4] md:max-w-md md:p-8 flex flex-col animate-enter bg-neutral-950 w-full bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9aba7e5b-6f16-4d9d-8ad5-63a77f18acee_1600w.webp)] max-w-sm bg-cover bg-center z-10 border-neutral-800 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl justify-between" style={{-MouseX: '412.5572814941406px', -MouseY: '341.0520782470703px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 tracking-wider">
<span className="animate-enter delay-200">01 / 10</span>
<span className="animate-enter delay-200">@meldahmad</span>
</div>
<div className="flex flex-col gap-4 relative">

<div className="absolute -top-20 left-0 w-full opacity-10 pointer-events-none marquee-container overflow-hidden">
<div className="flex gap-8 marquee-content whitespace-nowrap text-4xl font-bold uppercase tracking-tighter">
<span>Freelance</span><span>Cost</span><span>Reality</span><span>Money</span><span>Freelance</span><span>Cost</span>
</div>
</div>
<div className="inline-flex animate-enter delay-300 bg-neutral-900/50 w-fit border-0 rounded-full pt-1 pr-0 pb-1 pl-0 gap-x-2 gap-y-2 items-center">
<svg className="lucide lucide-alert-triangle w-3 h-3 text-amber-500" data-lucide="alert-triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<span className="text-xs font-medium text-amber-500 uppercase tracking-widest">Real Talk</span>
</div>
<h1 className="text-4xl md:text-5xl font-medium text-white tracking-tight leading-[1.1] letter-clip">
<span style={{animationDelay: '0.1s'}}>A</span><span style={{animationDelay: '0.15s'}}>S</span><span className="" style={{animationDelay: '0.2s'}}>S</span><span className="" style={{animationDelay: '0.25s'}}>E</span><span className="" style={{animationDelay: '0.3s'}}>T</span>
<span className="" style={{animationDelay: '0.35s'}}>C</span><span className="" style={{animationDelay: '0.4s'}}>O</span><span className="" style={{animationDelay: '0.45s'}}>S</span><span className="" style={{animationDelay: '0.5s'}}>T</span>
</h1>
<p className="text-neutral-400 text-sm md:text-base leading-relaxed animate-enter delay-500">
                        Kos modal yang kau pakai hari-hari. Dia bukan "phone aku dah ada, so free". Kalau benda tu rosak, kau tak boleh deliver kan?
                    </p>
</div>
<div className="mt-auto animate-enter delay-700">
<div className="flex items-center justify-between border-t border-neutral-800 pt-4">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-neutral-950 flex items-center justify-center text-xs">RM</div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border border-neutral-950 flex items-center justify-center text-xs">$$</div>
</div>
<svg className="lucide lucide-arrow-down w-5 h-5 text-neutral-500 animate-bounce" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</div>
</div>
</div>

<div className="fixed right-4 md:right-8 top-1/2 -translate-y-1/2 flex flex-col gap-2 z-50 mix-blend-difference">
<div className="w-1 h-2 bg-white rounded-full"></div>
<div className="w-1 h-2 bg-neutral-700 rounded-full"></div>
<div className="w-1 h-2 bg-neutral-700 rounded-full"></div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-456.170166015625px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>02 / 10</span>
<span>HARDWARE</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">Pengiraan Aset</h2>
<div className="space-y-4 flex-1">

<div className="group p-3 border border-neutral-800 rounded-xl bg-neutral-900/30 hover:bg-neutral-900 transition-colors duration-300">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<svg className="lucide lucide-smartphone w-4 h-4 text-neutral-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<span className="text-sm font-medium text-white">Phone Editing</span>
</div>
<span className="text-xs text-neutral-500">24 bulan</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs text-neutral-500">RM4,000 cost</span>
<span className="text-sm font-semibold text-emerald-400">RM167/bulan</span>
</div>
</div>

<div className="group p-3 border border-neutral-800 rounded-xl bg-neutral-900/30 hover:bg-neutral-900 transition-colors duration-300">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<svg className="lucide lucide-laptop w-4 h-4 text-neutral-400" data-lucide="laptop" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 5a2 2 0 0 1 2 2v8.526a2 2 0 0 0 .212.897l1.068 2.127a1 1 0 0 1-.9 1.45H3.62a1 1 0 0 1-.9-1.45l1.068-2.127A2 2 0 0 0 4 15.526V7a2 2 0 0 1 2-2z"></path><path d="M20.054 15.987H3.946"></path></svg>
<span className="text-sm font-medium text-white">Laptop</span>
</div>
<span className="text-xs text-neutral-500">36 bulan</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs text-neutral-500">RM3,500 cost</span>
<span className="text-sm font-semibold text-emerald-400">RM97/bulan</span>
</div>
</div>

<div className="group p-3 border border-neutral-800 rounded-xl bg-neutral-900/30 hover:bg-neutral-900 transition-colors duration-300">
<div className="flex justify-between items-start mb-1">
<div className="flex items-center gap-2">
<svg className="lucide lucide-cable w-4 h-4 text-neutral-400" data-lucide="cable" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17 19a1 1 0 0 1-1-1v-2a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v2a1 1 0 0 1-1 1z"></path><path d="M17 21v-2"></path><path d="M19 14V6.5a1 1 0 0 0-7 0v11a1 1 0 0 1-7 0V10"></path><path d="M21 21v-2"></path><path d="M3 5V3"></path><path d="M4 10a2 2 0 0 1-2-2V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2a2 2 0 0 1-2 2z"></path><path d="M7 5V3"></path></svg>
<span className="text-sm font-medium text-white">Aksesori</span>
</div>
<span className="text-xs text-neutral-500">SSD, Tripod</span>
</div>
<div className="flex justify-between items-end">
<span className="text-xs text-neutral-500">Utilities</span>
<span className="text-sm font-semibold text-emerald-400">~RM30/bulan</span>
</div>
</div>
</div>
<div className="mt-6 pt-6 border-t border-neutral-800">
<div className="flex justify-between items-center">
<span className="text-sm text-neutral-400">Total Asset Cost</span>
<span className="text-xl font-semibold tracking-tight text-white">RM294 <span className="text-sm font-normal text-neutral-500">~ RM300</span></span>
</div>
<p className="text-xs text-neutral-600 mt-2 text-right">Kos minimum kekalkan kerja</p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950 overflow-hidden" style={{-MouseX: '412.5572814941406px', -MouseY: '-1253.3924560546875px'}}>

<div className="absolute top-0 left-0 right-0 h-16 flex items-center justify-center border-b border-neutral-800/50 bg-neutral-900/20 backdrop-blur-sm marquee-container">
<div className="flex gap-8 marquee-content items-center opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="font-bold text-lg tracking-tight">Canva</span>
<span className="font-bold text-lg tracking-tight">CapCut</span>
<span className="font-bold text-lg tracking-tight">Adobe</span>
<span className="font-bold text-lg tracking-tight">Google</span>
<span className="font-bold text-lg tracking-tight">OpenAI</span>
<span className="font-bold text-lg tracking-tight">Canva</span>
<span className="font-bold text-lg tracking-tight">CapCut</span>
</div>
</div>
<div className="mt-20 flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>03 / 10</span>
<span>SOFTWARE</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-2">Tools Bukan Free</h2>
<p className="text-xs text-neutral-500 mb-6">Subscription monthly yang wajib.</p>
<div className="grid grid-cols-2 gap-3 mb-6">
<div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
<div className="text-xs text-neutral-400 mb-1">Canva Pro</div>
<div className="text-sm font-medium">RM23</div>
</div>
<div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
<div className="text-xs text-neutral-400 mb-1">CapCut Pro</div>
<div className="text-sm font-medium">RM25</div>
</div>
<div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
<div className="text-xs text-neutral-400 mb-1">Drive 200GB</div>
<div className="text-sm font-medium">RM12</div>
</div>
<div className="bg-neutral-900/50 p-3 rounded-lg border border-neutral-800">
<div className="text-xs text-neutral-400 mb-1">AI Tools</div>
<div className="text-sm font-medium">RM20</div>
</div>
</div>
<div className="bg-neutral-100 text-neutral-950 p-4 rounded-xl mb-4">
<div className="flex justify-between items-center mb-1">
<span className="font-medium text-sm">Total Software</span>
<span className="font-bold">RM80/bulan</span>
</div>
</div>
<p className="text-sm text-neutral-400 leading-relaxed border-l-2 border-red-500 pl-3">
                    Kalau kau cas RM20 satu job, 3 job pun <span className="text-white">tak lepas bayar software</span> je. Belum masuk kos lain. 🫠
                </p>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-2050.61474609375px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>04 / 10</span>
<span>OPEX</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">Operating Cost</h2>
<div className="relative pl-6 space-y-6 before:absolute before:left-2 before:top-2 before:bottom-2 before:w-px before:bg-gradient-to-b before:from-neutral-800 before:to-transparent">
<div className="relative">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600"></div>
<div className="flex justify-between">
<span className="text-sm text-neutral-300">Internet Rumah</span>
<span className="text-sm font-mono text-neutral-500">RM100</span>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600"></div>
<div className="flex justify-between">
<span className="text-sm text-neutral-300">Mobile Data</span>
<span className="text-sm font-mono text-neutral-500">RM40</span>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600"></div>
<div className="flex justify-between">
<span className="text-sm text-neutral-300">Elektrik</span>
<span className="text-sm font-mono text-neutral-500">RM15</span>
</div>
</div>
<div className="relative">
<div className="absolute -left-6 top-1 w-3 h-3 rounded-full bg-neutral-800 border border-neutral-600"></div>
<div className="flex justify-between">
<span className="text-sm text-neutral-300">Coffee / Workspace</span>
<span className="text-sm font-mono text-neutral-500">RM20</span>
</div>
</div>
</div>
<div className="mt-auto pt-6 border-t border-neutral-800">
<div className="flex justify-between items-baseline">
<span className="text-sm font-medium text-neutral-400">Total Operating</span>
<span className="text-2xl font-semibold text-white">RM175<span className="text-sm font-normal text-neutral-600">/mo</span></span>
</div>
<p className="text-xs text-neutral-600 mt-2">Benda harian yang orang office tak fikir.</p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-2847.8369140625px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>05 / 10</span>
<span>RISK</span>
</div>
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center border border-red-500/20">
<svg className="lucide lucide-shield-alert w-5 h-5 text-red-500" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
</div>
<h2 className="text-xl font-medium tracking-tight text-white">Freelancer Tak Ada Safety Net</h2>
</div>
<div className="grid grid-cols-2 gap-2 mb-6 text-sm text-neutral-400">
<div className="flex items-center gap-2"><svg className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Tak ada EPF</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Tak ada Socso</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Tak ada MC</div>
<div className="flex items-center gap-2"><svg className="lucide lucide-x w-3 h-3" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Phone Rosak</div>
</div>
<div className="bg-neutral-900/50 rounded-xl p-4 border border-neutral-800 mb-4">
<p className="text-sm text-neutral-300 mb-3">Tambah <span className="text-white font-semibold">10–15%</span> dari total kos sebagai buffer.</p>
<div className="flex justify-between text-xs text-neutral-500 border-t border-neutral-800 pt-2">
<span>Total Kos Tadi: RM555</span>
<span className="text-white">+ RM84 (Buffer)</span>
</div>
</div>
<div className="mt-auto bg-gradient-to-br from-neutral-800 to-neutral-900 p-4 rounded-xl border border-neutral-700">
<div className="flex items-center justify-between">
<span className="text-xs font-mono uppercase tracking-widest text-neutral-400">Survival Cost</span>
<svg className="lucide lucide-umbrella w-4 h-4 text-neutral-400" data-lucide="umbrella" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 13v7a2 2 0 0 0 4 0"></path><path d="M12 2v2"></path><path d="M20.992 13a1 1 0 0 0 .97-1.274 10.284 10.284 0 0 0-19.923 0A1 1 0 0 0 3 13z"></path></svg>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center shadow-2xl bg-neutral-950 text-center" style={{-MouseX: '412.5572814941406px', -MouseY: '-3645.059326171875px'}}>
<h3 className="text-xs font-mono uppercase tracking-[0.2em] text-neutral-500 mb-4">Total Kos Wajib</h3>
<div className="relative inline-block mx-auto">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter text-white mb-2">
                        RM640
                    </h1>
<span className="absolute -right-8 top-0 text-xs text-neutral-500">/bulan</span>
</div>
<p className="text-sm text-neutral-400 mb-8">(Ini baru kos. Belum masuk gaji kau.)</p>
<div className="bg-neutral-900 rounded-2xl p-5 border border-neutral-800 text-left space-y-4">
<div className="flex items-start gap-3">
<div className="w-1 h-12 bg-red-500 rounded-full mt-1"></div>
<div>
<p className="text-sm font-medium text-white">Cas RM20 / video?</p>
<p className="text-xs text-neutral-500">Kena buat 33 job baru break-even.</p>
</div>
</div>
<div className="flex items-start gap-3">
<div className="w-1 h-12 bg-amber-500 rounded-full mt-1"></div>
<div>
<p className="text-sm font-medium text-white">Cas RM50 / video?</p>
<p className="text-xs text-neutral-500">Kena buat 13-14 job baru break-even.</p>
</div>
</div>
</div>
<div className="mt-6 flex justify-center">
<span className="px-3 py-1 bg-neutral-800 rounded-full text-[10px] uppercase tracking-wide text-neutral-400">Belum ada gaji lagi 😑</span>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-4442.28125px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>07 / 10</span>
<span>FORMULA</span>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-6">Kira Rate Sebenar</h2>
<div className="space-y-3 mb-6 font-mono text-sm">
<div className="flex justify-between items-center p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
<span className="text-neutral-400">Kos Wajib (Tadi)</span>
<span className="text-red-400">RM640</span>
</div>
<div className="flex justify-center text-neutral-600">
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</div>
<div className="flex justify-between items-center p-3 bg-neutral-900/50 rounded-lg border border-neutral-800">
<span className="text-neutral-400">Target Gaji Bersih</span>
<span className="text-emerald-400">RM2,500</span>
</div>
<div className="h-px bg-neutral-800 my-2"></div>
<div className="flex justify-between items-center p-4 bg-neutral-100 text-black rounded-lg font-bold shadow-lg shadow-white/5">
<span>Target Sales</span>
<span>RM3,140</span>
</div>
</div>
<div className="bg-neutral-800/30 p-4 rounded-xl border border-neutral-800">
<p className="text-xs text-neutral-400 mb-2">Kalau kapasiti kau 20 video sebulan:</p>
<div className="flex items-center gap-2">
<span className="text-lg text-white font-medium">RM3,140 ÷ 20 =</span>
<span className="text-2xl text-emerald-400 font-bold tracking-tight">RM157</span>
<span className="text-xs text-neutral-500 self-end mb-1">/video</span>
</div>
<p className="text-[10px] text-red-400 mt-2">*Ini harga MINIMUM. Belum profit margin.</p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-5239.50390625px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>08 / 10</span>
<span>REALITY</span>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center space-y-8">
<div className="relative w-full">
<div className="absolute inset-0 bg-red-500 blur-3xl opacity-10"></div>
<svg className="lucide lucide-trending-down w-16 h-16 text-red-500 mx-auto mb-4" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
<h2 className="text-3xl font-bold text-white tracking-tight">Jangan Buang Harga</h2>
</div>
<p className="text-neutral-400 leading-relaxed">
                        Kalau kau cas <span className="text-white font-semibold">RM50</span> sebab "takut client lari", kau sebenarnya kena buat:
                    </p>
<div className="w-full bg-neutral-900 border border-neutral-800 p-6 rounded-2xl relative overflow-hidden group">
<div className="absolute top-0 left-0 w-1 h-full bg-red-500"></div>
<span className="text-5xl font-bold text-white tracking-tighter group-hover:scale-110 transition-transform duration-300 block">63</span>
<span className="text-sm text-neutral-500 uppercase tracking-widest mt-2 block">Video Sebulan</span>
</div>
<p className="text-xs text-neutral-500">
                        Baru dapat gaji RM2,500. Mampus dikerjakan client. 💀
                    </p>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col shadow-2xl bg-neutral-950" style={{-MouseX: '412.5572814941406px', -MouseY: '-6016.72607421875px'}}>
<div className="flex justify-between items-center text-xs font-mono text-neutral-500 mb-6">
<span>09 / 10</span>
<span>MINDSET</span>
</div>
<div className="flex flex-col h-full justify-between">
<div>
<h2 className="text-4xl font-medium text-white mb-6 leading-tight">Client bayar untuk <span className="text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600">Result</span>.</h2>
<div className="w-12 h-1 bg-white rounded-full mb-6"></div>
<p className="text-neutral-400 text-lg">Bukan sekadar masa edit.</p>
</div>
<div className="space-y-4">
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">1</div>
<p className="text-sm text-neutral-300">Kau cover kos software mahal.</p>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">2</div>
<p className="text-sm text-neutral-300">Kau jimatkan masa dorang.</p>
</div>
<div className="flex items-center gap-4 group">
<div className="w-8 h-8 rounded-full bg-neutral-800 flex items-center justify-center group-hover:bg-white group-hover:text-black transition-colors">3</div>
<p className="text-sm text-neutral-300">Kau ada skill yang dorang tak ada.</p>
</div>
</div>
<div className="p-4 bg-blue-900/20 border border-blue-500/30 rounded-xl mt-6">
<p className="text-xs text-blue-200 text-center">"Mahal lah bro" = Bukan client kau.</p>
</div>
</div>
</div>
</section>

<section className="h-screen w-full snap-start flex items-center justify-center bg-neutral-950 relative">

<div className="absolute inset-0 flex items-center justify-center opacity-30 pointer-events-none">
<div className="w-[500px] h-[500px] bg-gradient-to-r from-neutral-800 to-neutral-900 rounded-full blur-3xl animate-pulse"></div>
</div>
<div className="flashlight-card aspect-[3/4] w-full max-w-sm md:max-w-md border border-neutral-800 rounded-3xl p-6 md:p-8 flex flex-col justify-center items-center text-center shadow-2xl bg-neutral-950 z-10" style={{-MouseX: '412.5572814941406px', -MouseY: '-6833.9482421875px'}}>
<div className="w-24 h-24 rounded-full bg-neutral-800 border-2 border-neutral-700 overflow-hidden mb-6 relative group cursor-pointer">

<div className="w-full h-full bg-gradient-to-tr from-neutral-700 to-neutral-600 flex items-center justify-center text-2xl font-bold text-neutral-400">MA</div>
<div className="absolute inset-0 bg-black/50 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
<svg className="lucide lucide-instagram w-6 h-6 text-white" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>
</div>
<h2 className="text-2xl font-bold text-white mb-2">Melda Ahmad</h2>
<p className="text-sm text-neutral-500 mb-8">Helping freelancers survive &amp; thrive.</p>
<div className="flex flex-col w-full gap-3">
<button className="beam-btn w-full py-4 bg-white text-black font-semibold rounded-xl hover:scale-[1.02] transition-transform active:scale-[0.98]">
                        Follow for More Tips
                    </button>
<button className="w-full py-4 bg-neutral-900 border border-neutral-800 text-white font-medium rounded-xl hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2 group">
<svg className="lucide lucide-share-2 w-4 h-4 group-hover:rotate-12 transition-transform" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
                        Share dengan Client
                    </button>
</div>
<p className="mt-8 text-[10px] text-neutral-600 uppercase tracking-widest">Freelance Reality Check © 2024</p>
</div>
</section>
</main>



    </>
  );
}
