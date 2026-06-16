import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Ny Fullscreen Mobile Menu Logic
        const openBtn = document.getElementById('mobile-menu-btn');
        const closeBtn = document.getElementById('mobile-close-btn');
        const overlay = document.getElementById('mobile-menu-overlay');
        const mobileLinks = document.querySelectorAll('.mobile-link');

        function openMenu() {
            overlay.classList.add('is-active');
            // Förhindra skrollning i bakgrunden när menyn är öppen
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            overlay.classList.remove('is-active');
            // Återställ skrollning
            document.body.style.overflow = '';
        }

        openBtn.addEventListener('click', openMenu);
        closeBtn.addEventListener('click', closeMenu);

        // Stäng menyn automatiskt när en länk klickas
        mobileLinks.forEach(link => {
            link.addEventListener('click', () => {
                closeMenu();
            });
        });

        // Intersection Observer for scroll reveal animations
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('is-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal-on-scroll');
            revealElements.forEach(el => observer.observe(el));
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 border-b border-white/5 bg-[#020408]/90 backdrop-blur-md">
<div className="flex h-[72px] max-w-[1200px] mx-auto px-4 md:px-6 items-center justify-between">

<div className="logo-container bg-transparent flex-shrink-0 relative z-50">
<a className="block hover:opacity-80 transition-opacity bg-transparent header-logo" href="/">
<img alt="UnitParking" className="block md:h-[52px] border-none bg-transparent w-auto h-[40px] object-contain shadow-none" onclick="window.location.href='/home'" role="button" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3299a3be-0e03-4a58-b23b-2b711e0a540b_800w.png?w=800&amp;q=80"/>
</a>
</div>

<div className="hidden md:flex text-[13px] uppercase font-medium text-slate-400 tracking-wider gap-x-8 gap-y-8 items-center">
<a className="transition-colors text-white border-cyan-500 border-b pb-1" href="/home">Start</a>
<a className="hover:text-white transition-colors pb-1" href="/teknik">Teknik</a>
<a className="hover:text-white transition-colors pb-1" href="/om-oss">Om oss</a>
<a className="transition-all hover:bg-white/[0.12] text-white border-white/20 border rounded-sm ml-2 pt-2 pr-5 pb-2 pl-5" href="/investerare">
                    Investerare
                </a>
</div>

<button className="md:hidden text-white p-2 focus:outline-none flex items-center justify-center relative z-50" id="mobile-menu-btn">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-[#0B0F14] z-[9999] md:hidden flex flex-col h-[100dvh]" id="mobile-menu-overlay">

<div className="flex h-[72px] px-4 items-center justify-between border-b border-white/5 shrink-0">
<a className="block" href="/">
<img alt="UnitParking" className="block h-[40px] w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3299a3be-0e03-4a58-b23b-2b711e0a540b_800w.png?w=800&amp;q=80"/>
</a>
<button className="text-white p-2 focus:outline-none flex items-center justify-center" id="mobile-close-btn">
<iconify-icon className="text-3xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center gap-[24px] px-6 pb-20">

<a className="mobile-link text-[22px] font-medium text-white flex flex-col items-center gap-2" href="/">
                Start
                <div className="w-1.5 h-1.5 rounded-full bg-cyan-500 shadow-[0_0_8px_rgba(34,211,238,0.8)]"></div>
</a>
<a className="mobile-link text-[22px] font-medium text-slate-400 hover:text-white transition-colors" href="/teknik">
                Teknik
            </a>
<a className="mobile-link text-[22px] font-medium text-slate-400 hover:text-white transition-colors" href="/om-oss">
                Om oss
            </a>
<a className="mobile-link text-[22px] font-medium text-slate-400 hover:text-white transition-colors" href="/investerare">
                Investerare
            </a>
</div>
</div>
<main className="relative pt-0">

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden bg-[#020408]">

<div className="absolute inset-0 z-0">
<div className="bg-cover bg-[position:75%_center] md:bg-center absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/20fafbda-b951-4065-bd3a-241567ef1bc5_1600w.png\')', filter: 'brightness(1.15) contrast(0.95) saturate(0.9)'}}>
</div>
</div>

<div className="absolute inset-0 z-0 pointer-events-none" style={{background: 'linear-gradient(to right, rgba(5, 15, 25, 0.85) 0%, rgba(5, 15, 25, 0.65) 40%, rgba(5, 15, 25, 0.4) 70%, rgba(5, 15, 25, 0.25) 100%)'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#020408] via-transparent to-transparent z-0 pointer-events-none"></div>
<div className="absolute inset-0 z-0 bg-grid-pattern opacity-10 pointer-events-none mix-blend-overlay"></div>

<div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10 w-full">
<div className="max-w-3xl fade-in-up mt-10 md:mt-0">

<h1 className="text-[40px] leading-[1.1] md:text-6xl lg:text-[76px] lg:leading-[1.05] font-semibold text-white tracking-tight mb-6 md:mb-8 drop-shadow-2xl">
                        Dubbelt så många bilar. <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-600 filter drop-shadow-lg">På samma yta.</span>
</h1>
<p className="text-[16px] md:text-[18px] text-slate-300 font-light leading-relaxed mb-10 md:mb-12 max-w-[32ch] md:max-w-xl border-l-2 border-white/10 pl-4 md:pl-6 drop-shadow-md">
                        Ett helautomatiserat parkeringssystem som fördubblar kapaciteten och omvandlar parkering till en skalbar, datadriven intäktsmodell.
                    </p>

<div className="flex flex-col md:flex-row gap-[12px]">
<button className="group flex md:w-auto uppercase hover:bg-cyan-50 transition-colors text-xs font-semibold text-[#020408] tracking-widest bg-white w-full h-[48px] rounded-[12px] pr-8 pl-8 shadow-[0_0_20px_-5px_rgba(255,255,255,0.4)] gap-x-[12px] gap-y-[12px] items-center justify-center" onclick="window.location.href='/teknik'" role="button">
                            Så fungerar det
                            <svg className="transition-transform group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="group flex items-center justify-center gap-[12px] md:w-auto uppercase hover:border-cyan-500/50 hover:text-cyan-400 hover:bg-cyan-950/20 transition-all text-xs font-semibold text-white tracking-widest w-full h-[48px] border-white/10 border rounded-[12px] pr-8 pl-8 backdrop-blur-sm" href="/investerare">
                            För investerare
                        </a>
</div>
</div>
</div>

<div className="absolute bottom-10 right-10 hidden lg:block opacity-30 z-10">
<div className="text-[10px] font-mono text-cyan-500 text-right">
<div>SYSTEM STATUS: ACTIVE</div>
<div>GRID: 40x40 PX</div>
<div>LATENCY: 12ms</div>
</div>
</div>
</section>

<section className="py-[56px] md:py-[88px] bg-[#020408] border-t border-white/5 relative overflow-hidden reveal-on-scroll scroll-mt-[100px]" id="system">
<div className="max-w-[1200px] mx-auto px-4 md:px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center">
<div>
<div className="border-l-2 border-cyan-500 pl-6 md:pl-8 mb-8 md:mb-12">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight leading-[1.15]">
                                Parkering är ett <br/>
<span className="bg-gradient-to-r from-sky-200 to-cyan-500 bg-clip-text text-transparent font-semibold">logistikproblem.</span>
</h2>
</div>
<p className="text-slate-400 font-light text-[16px] md:text-[18px] leading-relaxed mb-10 md:mb-12 max-w-md">
                            Traditionella garage slösar upp till 50 % av ytan på ramper och körfält. UnitParking eliminerar döyta genom industriell automation. Vi flyttar bilen – inte föraren.
                        </p>
<div className="space-y-6 md:space-y-8">
<div className="group/item relative pb-4 border-b border-white/5 cursor-pointer">
<div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-500 ease-out group-hover/item:w-full opacity-60"></div>
<div className="flex flex-col gap-1 transition-all duration-500 group-hover/item:translate-x-2">
<span className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 group-hover/item:text-cyan-400 transition-colors">Volymeffektivitet</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-1 group-hover/item:text-cyan-50 transition-colors">+80–120 % fler platser</h3>
<p className="text-slate-500 text-[15px] md:text-[16px] font-light group-hover/item:text-slate-300 transition-colors">
                                        Genom att stapla bilar och ta bort körfält optimeras volymen maximalt.
                                    </p>
</div>
</div>
<div className="group/item relative pb-4 border-b border-white/5 cursor-pointer">
<div className="absolute bottom-0 left-0 h-px w-0 bg-cyan-500 transition-all duration-500 ease-out group-hover/item:w-full opacity-60"></div>
<div className="flex flex-col gap-1 transition-all duration-500 group-hover/item:translate-x-2">
<span className="text-[10px] font-mono uppercase tracking-widest text-cyan-600 group-hover/item:text-cyan-400 transition-colors">Konstruktion</span>
<h3 className="text-2xl md:text-3xl font-light tracking-tight text-white mb-1 group-hover/item:text-cyan-50 transition-colors">Inga ramper</h3>
<p className="text-slate-500 text-[15px] md:text-[16px] font-light group-hover/item:text-slate-300 transition-colors">
                                        Minskad byggkomplexitet och lägre ventilationskrav.
                                    </p>
</div>
</div>
</div>
</div>
<div className="relative h-[350px] sm:h-[450px] md:h-[600px] w-full border border-white/10 bg-[#050A15] overflow-hidden group rounded-2xl select-none">
<div className="absolute inset-0 overflow-hidden">
<img alt="Industrial Structure" className="w-full h-full object-cover transition-all duration-[600ms] ease-out grayscale-[0.9] brightness-[0.7] contrast-[1.2] group-hover:grayscale-0 group-hover:brightness-105 group-hover:contrast-100 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e86054b-5f02-4391-94d0-125379dd7080_1600w.png?w=800&amp;q=80"/>
</div>
<div className="absolute inset-0 bg-gradient-to-r from-[#020408] via-[#020408]/60 to-transparent pointer-events-none transition-opacity duration-[600ms] group-hover:opacity-60"></div>
<div className="absolute inset-0 bg-grid-pattern-small opacity-10 mix-blend-overlay pointer-events-none"></div>
<div className="absolute -top-[20%] -right-[20%] w-[80%] h-[80%] bg-[radial-gradient(circle,rgba(255,255,255,0.15)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] mix-blend-soft-light pointer-events-none"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-cyan-500/10 blur-[80px] rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-[600ms] mix-blend-screen pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 md:p-8 border-t border-white/5 bg-[#020408]/90 backdrop-blur-md z-10">
<div className="flex justify-between items-end">
<div>
<div className="text-[10px] font-mono text-cyan-500 mb-2 opacity-50 group-hover:opacity-100 transition-opacity">UNITPARKING OS v2.4</div>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-[10px] md:text-xs font-mono text-white tracking-widest">SYSTEM ONLINE</span>
</div>
</div>
<div className="text-right hidden sm:block">
<div className="text-[10px] font-mono text-slate-500 uppercase">Load Balance</div>
<div className="text-xs font-mono text-white">98.4% EFFICIENCY</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[56px] md:py-[88px] bg-[#070B14] relative overflow-hidden reveal-on-scroll scroll-mt-[100px]" id="affarsnytta">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[radial-gradient(circle_at_center,rgba(16,185,129,0.06),transparent_70%)] pointer-events-none -z-10"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.02] pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-16 md:mb-24">
<div className="mb-6 md:mb-8">
<span className="inline-flex items-center px-4 py-1.5 rounded-full bg-emerald-950/20 border border-emerald-500/20 text-[10px] font-mono font-medium tracking-[0.1em] text-emerald-400 uppercase shadow-[0_0_15px_-4px_rgba(16,185,129,0.2)] backdrop-blur-sm">
                            $ Affärsnytta
                        </span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 md:mb-8 leading-[1.1]">
                        Från kostnad till <br className="hidden sm:block"/>
<span className="bg-gradient-to-r from-emerald-400 via-cyan-400 to-blue-500 bg-clip-text text-transparent">intäktsmotor</span>
</h2>
<p className="text-slate-400 text-[16px] md:text-[18px] font-light max-w-[700px] mx-auto leading-relaxed">
                        Ett traditionellt parkeringshus är ofta en nödvändig kostnad. Unit Parking förvandlar parkering till en skalbar, datadriven investering.
                    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-5xl mx-auto">

<div className="relative p-6 md:p-8 min-h-auto rounded-[20px] bg-[#0A1020] border border-white/5 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear"></iconify-icon>
</div>
<div className="mt-auto">
<div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-hover:text-emerald-400/80 transition-colors">Investering</div>
<div className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-2 group-hover:text-emerald-50 transition-colors">Lägre</div>
<div className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Byggkostnad per plats
                                </div>
</div>
</div>
</div>

<div className="relative p-6 md:p-8 min-h-auto rounded-[20px] bg-[#0A1020] border border-white/5 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:graph-up-linear"></iconify-icon>
</div>
<div className="mt-auto">
<div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-hover:text-emerald-400/80 transition-colors">Avkastning</div>
<div className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-2 group-hover:text-emerald-50 transition-colors">Högre</div>
<div className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Intäkt per m²
                                </div>
</div>
</div>
</div>

<div className="relative p-6 md:p-8 min-h-auto rounded-[20px] bg-[#0A1020] border border-white/5 overflow-hidden group transition-all duration-300 hover:-translate-y-1.5 hover:border-emerald-500/30 hover:shadow-[0_10px_40px_-10px_rgba(0,0,0,0.5)]">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center mb-6 text-slate-400 group-hover:bg-emerald-500/10 group-hover:text-emerald-400 group-hover:border-emerald-500/20 transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:stopwatch-linear"></iconify-icon>
</div>
<div className="mt-auto">
<div className="text-[10px] font-mono text-slate-500 uppercase tracking-widest mb-2 group-hover:text-emerald-400/80 transition-colors">ROI</div>
<div className="text-2xl md:text-3xl text-white font-medium tracking-tight mb-2 group-hover:text-emerald-50 transition-colors">Snabbare</div>
<div className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed group-hover:text-slate-300 transition-colors">
                                    Återbetalningstid
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-[56px] md:py-[88px] bg-[#020408] relative border-t border-white/5 overflow-hidden reveal-on-scroll scroll-mt-[100px]" id="hallbarhet">
<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] opacity-20 pointer-events-none"></div>
<div className="max-w-[800px] mx-auto px-4 md:px-6 relative z-10 flex flex-col items-center">
<div className="text-center flex flex-col items-center mb-10 md:mb-12">
<div className="inline-flex items-center px-3 py-1 rounded-full border border-cyan-500/20 bg-cyan-950/10 backdrop-blur-md mb-6 md:mb-8">
<span className="text-[10px] font-mono font-medium tracking-[0.2em] uppercase text-cyan-400">HÅLLBARHET &amp; FLYTTBARHET</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 leading-[1.1]">
                        Bygg för idag. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-600">Flytta</span> för imorgon.
                    </h2>
<div className="h-px w-16 md:w-24 bg-gradient-to-r from-transparent via-cyan-500 to-transparent opacity-50 mb-8 mx-auto"></div>
<p className="text-[16px] md:text-[18px] text-slate-400 font-light leading-relaxed max-w-lg text-center">
                        Infrastruktur som kan uppgraderas, skalas och flyttas – utan att låsa mark eller kapital.
                    </p>
</div>
<div className="space-y-8 md:space-y-10 w-full max-w-xl">
<div className="flex gap-4 md:gap-5">
<div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:layers-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 md:mb-2 text-[16px] md:text-lg">Mindre material, mer kapacitet</h4>
<p className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed max-w-md">
                                Högre platsdensitet betyder mindre betong, mindre markyta och lägre klimatavtryck per parkeringsplats.
                            </p>
</div>
</div>
<div className="flex gap-4 md:gap-5">
<div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:transfer-horizontal-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 md:mb-2 text-[16px] md:text-lg">Flyttbart och återanvändbart</h4>
<p className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed max-w-md">
                                Systemet kan demonteras och flyttas till nya lägen när behovet förändras — en investering som inte blir inlåst.
                            </p>
</div>
</div>
<div className="flex gap-4 md:gap-5">
<div className="mt-1 h-10 w-10 rounded-lg bg-white/5 border border-white/5 flex items-center justify-center text-cyan-400 shrink-0">
<iconify-icon className="text-xl" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium mb-1 md:mb-2 text-[16px] md:text-lg">Redo för elektrifiering</h4>
<p className="text-[15px] md:text-[16px] text-slate-400 font-light leading-relaxed max-w-md">
                                Modulär el- och laddinfrastruktur som kan byggas ut stegvis och följa efterfrågan.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-[40px] md:py-[64px] bg-[#050A15] relative border-t border-white/5 overflow-hidden reveal-on-scroll scroll-mt-[100px]" id="implementering">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0IiBoZWlnaHQ9IjQiPgo8cmVjdCB3aWR0aD0iNCIgaGVpZ2h0PSI0IiBmaWxsPSIjMDUwQTE1Ii8+CjxyZWN0IHdpZHRoPSIxIiBoZWlnaHQ9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wMykiLz4KPC9zdmc+')] opacity-20 pointer-events-none"></div>
<div className="max-w-[1200px] mx-auto px-4 md:px-6 relative z-10">
<div className="mb-16 md:mb-24 text-center lg:text-left">
<h2 className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-2 md:mb-4">
                        Implementering
                    </h2>
<p className="text-slate-500 text-[11px] md:text-sm font-mono uppercase tracking-widest">Från kalkyl till drift</p>
</div>
<div className="relative">
<div className="absolute top-0 left-0 w-full h-[1px] bg-white/10 hidden lg:block"></div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-0">

<div className="relative group lg:pr-12 lg:pt-16">
<div className="hidden lg:block absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-cyan-500 transition-all duration-700 ease-in-out"></div>
<div className="absolute -top-6 md:-top-10 left-0 text-[100px] md:text-[140px] leading-none font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-500">01</div>
<div className="relative pl-6 lg:pl-0 border-l border-white/10 lg:border-none pt-4 lg:pt-0">
<h3 className="text-lg md:text-xl text-white font-medium tracking-tight mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">Analys &amp; Geometri</h3>
<div className="w-8 group-hover:w-16 h-[1px] bg-white/20 group-hover:bg-cyan-500/50 transition-all duration-500 mb-4 md:mb-6"></div>
<p className="text-slate-400 text-[15px] md:text-[16px] font-light leading-relaxed max-w-xs group-hover:text-slate-300">
                                    Vi utvärderar fastighetens struktur och trafikflöden. En digital tvilling skapas för att simulera kapacitet.
                                </p>
</div>
</div>

<div className="relative group lg:px-6 lg:pt-16 lg:border-l border-white/5">
<div className="hidden lg:block absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-cyan-500 transition-all duration-700 ease-in-out delay-75"></div>
<div className="absolute -top-6 md:-top-10 left-6 text-[100px] md:text-[140px] leading-none font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-500">02</div>
<div className="relative pl-6 lg:pl-0 border-l border-white/10 lg:border-none pt-4 lg:pt-0">
<h3 className="text-lg md:text-xl text-white font-medium tracking-tight mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">Systemdesign</h3>
<div className="w-8 group-hover:w-16 h-[1px] bg-white/20 group-hover:bg-cyan-500/50 transition-all duration-500 mb-4 md:mb-6"></div>
<p className="text-slate-400 text-[15px] md:text-[16px] font-light leading-relaxed max-w-xs group-hover:text-slate-300">
                                    Detaljerad projektering och integration med byggnadens styrsystem. Hårdvara och mjukvara optimeras.
                                </p>
</div>
</div>

<div className="relative group lg:px-6 lg:pt-16 lg:border-l border-white/5">
<div className="hidden lg:block absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-cyan-500 transition-all duration-700 ease-in-out delay-150"></div>
<div className="absolute -top-6 md:-top-10 left-6 text-[100px] md:text-[140px] leading-none font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-500">03</div>
<div className="relative pl-6 lg:pl-0 border-l border-white/10 lg:border-none pt-4 lg:pt-0">
<h3 className="text-lg md:text-xl text-white font-medium tracking-tight mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">Installation</h3>
<div className="w-8 group-hover:w-16 h-[1px] bg-white/20 group-hover:bg-cyan-500/50 transition-all duration-500 mb-4 md:mb-6"></div>
<p className="text-slate-400 text-[15px] md:text-[16px] font-light leading-relaxed max-w-xs group-hover:text-slate-300">
                                    Prefabricerade moduler monteras på plats. Rigorösa säkerhetstester enligt ISO-standard.
                                </p>
</div>
</div>

<div className="relative group lg:pl-12 lg:pt-16 lg:border-l border-white/5">
<div className="hidden lg:block absolute top-0 left-0 w-0 group-hover:w-full h-[2px] bg-cyan-500 transition-all duration-700 ease-in-out delay-200"></div>
<div className="absolute -top-6 md:-top-12 left-12 text-[100px] md:text-[140px] leading-none font-bold text-white/[0.03] select-none pointer-events-none group-hover:text-cyan-500/[0.05] transition-colors duration-500">04</div>
<div className="relative pl-6 lg:pl-0 border-l border-white/10 lg:border-none pt-4 lg:pt-0">
<h3 className="text-lg md:text-xl text-white font-medium tracking-tight mb-3 md:mb-4 group-hover:text-cyan-400 transition-colors duration-300">Drift &amp; Optimering</h3>
<div className="w-8 group-hover:w-16 h-[1px] bg-white/20 group-hover:bg-cyan-500/50 transition-all duration-500 mb-4 md:mb-6"></div>
<p className="text-slate-400 text-[15px] md:text-[16px] font-light leading-relaxed max-w-xs group-hover:text-slate-300">
                                    Löpande prediktivt underhåll och mjukvaruuppdateringar säkerställer 99.9% tillgänglighet.
                                </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-[40px] md:py-[64px] bg-[#020408] overflow-hidden border-t border-white/5 reveal-on-scroll">
<div className="absolute inset-0 bg-gradient-to-b from-[#050A15] to-[#020408] -z-20"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-[0.03] pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-[radial-gradient(circle_at_top,rgba(14,165,233,0.06),transparent_60%)] pointer-events-none -z-10"></div>
<div className="max-w-[800px] mx-auto px-4 md:px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/[0.02] backdrop-blur-sm mb-6 md:mb-10 shadow-[0_0_15px_-5px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-cyan-400/80 text-[10px]" icon="solar:star-fall-linear"></iconify-icon>
<span className="text-[10px] font-mono uppercase tracking-[0.2em] text-slate-300 font-medium">Expertis</span>
</div>
<h2 className="text-3xl md:text-5xl lg:text-6xl font-medium text-white tracking-tight mb-6 md:mb-8 max-w-4xl leading-[1.1]">
                        En garanti för att det <br className="hidden md:block"/> fungerar – hela vägen.
                    </h2>
<p className="text-slate-400 text-[16px] md:text-[18px] font-light leading-relaxed max-w-[700px] text-center">
                        Vi kombinerar ingenjörsmässig precision med industriell säkerhetsstandard och långsiktigt partnerskap.
                    </p>
</div>
</div>
</section>

<section className="py-[56px] md:py-[88px] bg-[#020408] relative reveal-on-scroll scroll-mt-[100px]" id="kontakt">
<div className="max-w-[1200px] mx-auto px-4 md:px-6">
<div className="relative">
<div className="absolute inset-0 bg-blue-600/10 blur-[100px] -z-10 rounded-full opacity-40"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 bg-gradient-to-br from-[#0B1220] to-[#111A2E] rounded-[24px] border border-white/5 overflow-hidden shadow-[0_20px_60px_-15px_rgba(0,0,0,0.5)] relative">

<div className="p-8 md:p-10 lg:p-16 flex flex-col justify-between relative z-10 text-center lg:text-left">
<div>
<span className="block text-cyan-400 font-mono font-medium tracking-[0.2em] text-[10px] uppercase mb-4 drop-shadow-[0_0_8px_rgba(34,211,238,0.4)]">
                                    Kontakta oss
                                </span>
<h2 className="text-3xl md:text-4xl text-white font-medium mb-8 md:mb-12 tracking-tight leading-tight">
                                    Ta steget in i <br className="hidden sm:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-200 to-blue-500">framtiden</span>
</h2>
<div className="space-y-1 mb-10 text-slate-400 text-[15px] md:text-[16px] font-light leading-relaxed">
<p className="text-white font-medium mb-2">UnitParking Sweden AB</p>
<p>Stora Åvägen 21</p>
<p>436 34 Askim</p>
<p>Sweden</p>
</div>
<div className="mb-8 md:mb-10">
<p className="text-xs font-mono uppercase tracking-widest text-slate-500 mb-2 md:mb-4">Kontaktperson</p>
<h4 className="text-white text-[16px] md:text-lg font-medium tracking-wide">HENRIK VON BAHR</h4>
</div>
<div className="flex flex-col gap-4 items-center lg:items-start">
<a className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group w-fit" href="tel:+46704529442">
<div className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-cyan-500/70 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
<iconify-icon className="text-lg" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<span className="text-[15px] md:text-[16px] font-light">+46 (0)704 52 94 42</span>
</a>
<a className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group w-fit" href="mailto:henrik.vonbahr@unitparking.com">
<div className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-cyan-500/70 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
<iconify-icon className="text-lg" icon="solar:letter-linear"></iconify-icon>
</div>
<span className="text-[15px] md:text-[16px] font-light">henrik.vonbahr@unitparking.com</span>
</a>
<a className="flex items-center gap-4 text-slate-400 hover:text-cyan-400 transition-colors group w-fit" href="#">
<div className="h-10 w-10 rounded-full bg-white/5 border border-white/5 flex items-center justify-center text-cyan-500/70 group-hover:text-cyan-400 group-hover:bg-cyan-500/10 transition-all">
<iconify-icon className="text-sm" icon="brandico:linkedin-rect"></iconify-icon>
</div>
<span className="text-[15px] md:text-[16px] font-light">LinkedIn</span>
</a>
</div>
</div>
<div className="mt-10 md:mt-12 h-px w-24 bg-gradient-to-r from-cyan-500 to-transparent opacity-60 mx-auto lg:mx-0"></div>
</div>

<div className="p-8 md:p-10 lg:p-16 bg-white/[0.02] border-t lg:border-t-0 lg:border-l border-white/5 flex flex-col justify-center backdrop-blur-sm">
<form className="space-y-5 md:space-y-6">
<div className="space-y-2">
<label className="text-[13px] md:text-xs text-slate-400 font-medium ml-1">Namn</label>
<input className="w-full bg-[#080C14] border border-white/10 rounded-lg px-4 py-3.5 text-white text-[15px] md:text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all hover:bg-[#0B101B]" placeholder="Ditt namn" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[13px] md:text-xs text-slate-400 font-medium ml-1">Företagsmail</label>
<input className="w-full bg-[#080C14] border border-white/10 rounded-lg px-4 py-3.5 text-white text-[15px] md:text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all hover:bg-[#0B101B]" placeholder="namn@foretag.se" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[13px] md:text-xs text-slate-400 font-medium ml-1">Meddelande</label>
<textarea className="w-full bg-[#080C14] border border-white/10 rounded-lg px-4 py-3 text-white text-[15px] md:text-sm placeholder-slate-600 focus:outline-none focus:border-cyan-500/50 focus:ring-1 focus:ring-cyan-500/50 transition-all resize-none hover:bg-[#0B101B]" placeholder="Berätta om ert projekt..." rows="4"></textarea>
</div>
<button className="group w-full h-[48px] bg-slate-200 hover:bg-white text-[#0B1220] font-semibold text-[13px] md:text-xs uppercase tracking-wider rounded-[12px] mt-4 md:mt-6 transition-all duration-300 hover:shadow-[0_0_20px_rgba(34,211,238,0.4)] flex items-center justify-center gap-2" type="button">
                                    Skicka Förfrågan
                                    <iconify-icon className="transition-transform group-hover:translate-x-1 text-base" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="py-[56px] md:py-[88px] max-w-[1200px] mx-auto px-4 md:px-6 border-t border-white/5 bg-[#020408]">
<div className="flex flex-col md:flex-row justify-between items-start gap-10 md:gap-12 mb-12 md:mb-16">
<div>
<a className="block mb-6 hover:opacity-80 transition-opacity w-fit" href="/">
<img alt="UnitParking" className="block opacity-90 h-[40px] md:h-[52px] w-auto object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ae36c00d-01e3-4e3c-b5ee-7b43a0450973_800w.png?w=800&amp;q=80"/>
</a>
<p className="text-slate-600 text-[13px] md:text-xs leading-relaxed max-w-xs">
                        Industrialiserad parkeringsteknik för den moderna staden.
                    </p>
</div>
<div className="flex gap-16 text-[13px] md:text-xs text-slate-500 w-full md:w-auto">
<div className="flex flex-col gap-3">
<h4 className="text-white uppercase tracking-widest font-medium text-[10px]">Bolaget</h4>
<a className="hover:text-cyan-400 transition-colors" href="/om-oss">Om oss</a>
<a className="hover:text-cyan-400 transition-colors" href="#kontakt">Kontakt</a>
<a className="hover:text-cyan-400 transition-colors" href="/investerare">Investerare</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-white uppercase tracking-widest font-medium text-[10px]">Socialt</h4>
<a className="hover:text-cyan-400 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-center md:text-left">
<span className="text-[10px] md:text-[11px] text-slate-700 font-mono">© 2024 UNITPARKING SYSTEMS AB</span>
</div>
</footer>
</main>


    </>
  );
}
