import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



                    setTimeout(() => {
                        const ctx = document.getElementById('heroChart');
                        if(ctx && typeof Chart !== 'undefined') {
                            new Chart(ctx, {
                                type: 'line',
                                data: {
                                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun'],
                                    datasets: [{
                                        data: [1200, 1450, 1600, 1850, 2000, 2140],
                                        borderColor: '#8B5CFF',
                                        borderWidth: 2,
                                        tension: 0.4,
                                        pointRadius: 0,
                                        pointHoverRadius: 0,
                                        fill: true,
                                        backgroundColor: (context) => {
                                            const ctx = context.chart.ctx;
                                            const gradient = ctx.createLinearGradient(0, 0, 0, 100);
                                            gradient.addColorStop(0, 'rgba(139, 92, 255, 0.2)');
                                            gradient.addColorStop(1, 'rgba(139, 92, 255, 0)');
                                            return gradient;
                                        }
                                    }]
                                },
                                options: {
                                    responsive: true,
                                    maintainAspectRatio: false,
                                    plugins: { legend: { display: false }, tooltip: { enabled: false } },
                                    scales: { x: { display: false }, y: { display: false, min: 1000 } },
                                    layout: { padding: 0 },
                                    elements: { line: { tension: 0.4 } }
                                }
                            });
                        }
                    }, 500);
                


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/10 bg-[#07070A]/80 backdrop-blur-xl transition-all duration-300">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<img alt="Kaba Dance Logo" className="md:h-14 transition-transform hover:scale-105 w-auto h-10 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e8fec4af-79b4-4f76-a469-bd34c06b9ee4_320w.png"/>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-gray-400">
<a className="hover:text-white transition-colors" href="#kurzy">Kurzy</a>
<a className="hover:text-white transition-colors" href="#workshopy">
            Workshopy
          </a>
<a className="hover:text-white transition-colors" href="#tym">Náš tým</a>
<a className="hover:text-white transition-colors" href="#partneri">
            Partneři
          </a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-white transition-colors" href="#kontakt">
            Kontakt
          </a>
<a className="group relative px-6 py-2.5 bg-[#FF2D2D] text-white text-sm font-semibold rounded-full overflow-hidden transition-all hover:scale-105 hover:shadow-[0_0_20px_rgba(255,45,45,0.4)] btn-glow" href="#register">
<span className="relative flex items-center gap-2">
              Přihlásit se
              <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</span>
</a>
</div>
</div>
</nav>

<header className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Shuffle Dance Background" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1547153760-18fc86324498?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 z-40 bg-[#07070A] font-geist overflow-hidden flex flex-col">



<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none mix-blend-overlay"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-[#07070A]/80 via-transparent to-[#07070A] pointer-events-none z-10"></div>
<div className="absolute -top-[20%] left-[20%] w-[800px] h-[800px] bg-[#FF2D2D] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.15] animate-pulse"></div>
<div className="absolute -bottom-[20%] right-[10%] w-[600px] h-[600px] bg-[#8B5CFF] rounded-full mix-blend-screen filter blur-[180px] opacity-[0.15]"></div>

<div className="relative z-20 w-full h-full max-w-7xl mx-auto px-6 pt-24 pb-12 flex flex-col justify-center">
<div className="grid grid-cols-1 md:grid-cols-12 md:grid-rows-12 gap-4 h-full min-h-[750px]">

<div className="md:col-span-8 md:row-span-8 flex flex-col justify-between p-8 md:p-12 bg-[#0B0B12]/60 backdrop-blur-2xl border border-white/5 rounded-[32px] relative group overflow-hidden hover:border-white/10 transition-colors duration-500">
<div className="absolute inset-0 bg-gradient-to-br from-white/[0.03] to-transparent opacity-100 pointer-events-none"></div>

<div className="absolute top-0 right-10 w-[1px] h-full bg-gradient-to-b from-transparent via-white/5 to-transparent"></div>
<div className="relative z-10 flex flex-col justify-center h-full">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#FF2D2D]/10 border border-[#FF2D2D]/20 text-[#FF2D2D] text-xs font-semibold uppercase tracking-wider mb-6 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D2D] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D2D]"></span>
</span>
            Nábor 2025 Otevřen
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white tracking-tight leading-[0.95] mb-6">
            KABA <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] to-[#8B5CFF]">DANCE</span><br/>
<span className="text-white/40 font-medium tracking-tighter">SHUFFLE SCHOOL</span>
</h1>
<p className="text-base md:text-lg text-gray-400 max-w-xl font-light leading-relaxed border-l-2 border-[#FF2D2D] pl-6 mb-10">
            Vstupte do světa moderního tance s první školou shuffle v Česku. Profesionální lektoři, jedinečná komunita a progres, který uvidíte už po první lekci.
        </p>
<div className="flex flex-wrap gap-4">
<a className="px-8 py-3.5 bg-white text-black font-semibold rounded-full hover:scale-105 transition-all shadow-[0_0_40px_rgba(255,255,255,0.3)] flex items-center gap-2 group/btn" href="#kurzy">
<span>Začít tančit</span>
<svg className="lucide lucide-arrow-right group-hover/btn:translate-x-1 transition-transform" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="px-8 py-3.5 bg-white/5 border border-white/10 text-white font-semibold rounded-full hover:bg-white/10 transition-all backdrop-blur-md flex items-center gap-2 group/play" href="#workshopy">
<div className="w-6 h-6 rounded-full bg-[#FF2D2D] flex items-center justify-center">
<svg className="text-white ml-0.5" fill="currentColor" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
<span>Přehrát video</span>
</a>
</div>
</div>
</div>

<div className="md:col-span-4 md:row-span-8 bg-[#121217] rounded-[32px] overflow-hidden relative border border-white/5 group">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-[2s] group-hover:scale-110 opacity-70 group-hover:opacity-90 grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#07070A] via-transparent to-transparent"></div>
<div className="absolute inset-0 bg-gradient-to-b from-[#07070A]/50 to-transparent"></div>
<div className="absolute top-6 right-6 z-20">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center animate-[spin_10s_linear_infinite]">
<svg className="lucide lucide-disc text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle><path d="M12 2a10 10 0 0 1 10 10"></path></svg>
</div>
</div>
<div className="absolute bottom-8 left-8 right-8 z-20">
<div className="flex items-center gap-2 mb-3 text-[#23D5FF] text-xs font-bold uppercase tracking-widest">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#23D5FF] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#23D5FF]"></span>
</span>
                        Trenér Měsíce
                    </div>
<h3 className="text-3xl font-bold text-white mb-1">Matyáš</h3>
<p className="text-gray-400 text-sm flex items-center gap-2">
<svg className="lucide lucide-award" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="8" r="7"></circle><polyline points="8.21 13.89 7 23 12 20 17 23 15.79 13.88"></polyline></svg>
                        Head Coach • Praha
                    </p>
</div>
</div>

<div className="md:col-span-4 md:row-span-4 bg-[#0B0B12]/60 backdrop-blur-2xl border border-white/5 rounded-[32px] p-6 flex flex-col justify-between relative overflow-hidden group hover:border-[#8B5CFF]/30 transition-colors duration-300">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#8B5CFF] rounded-full blur-[80px] opacity-10 pointer-events-none transition-opacity group-hover:opacity-20"></div>
<div className="flex justify-between items-start mb-2">
<div>
<div className="text-gray-400 text-sm font-medium mb-1">Aktivní studenti</div>
<div className="text-4xl font-bold text-white tracking-tight">2,140</div>
</div>
<div className="px-2 py-1 bg-[#8B5CFF]/10 rounded-lg border border-[#8B5CFF]/20 text-[#8B5CFF] text-xs font-bold flex items-center gap-1">
<svg className="lucide lucide-trending-up" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline><polyline points="16 7 22 7 22 13"></polyline></svg>
                        +24%
                    </div>
</div>

<div className="w-full h-28 relative -mx-2 -mb-2">
<canvas className="w-full h-full" height="224" id="heroChart" style={{display: 'block', boxSizing: 'border-box', height: '112px', width: '278px'}} width="556"></canvas>
</div>

</div>

<div className="md:col-span-5 md:row-span-4 bg-[#0B0B12]/60 backdrop-blur-2xl border border-white/5 rounded-[32px] p-8 flex items-center justify-between relative group overflow-hidden hover:border-[#FF2D2D]/30 transition-colors duration-300 cursor-pointer">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 mix-blend-overlay"></div>
<div className="absolute right-0 top-0 w-32 h-full bg-gradient-to-l from-[#FF2D2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="relative z-10 flex-1">
<div className="text-[#FF2D2D] font-bold text-xs uppercase tracking-widest mb-3 flex items-center gap-2">
<svg className="lucide lucide-sparkles" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 17v4"></path><path d="M3 21h4"></path></svg>
                        Nadcházející Akce
                     </div>
<h3 className="text-2xl font-bold text-white mb-3">Summer Shuffle Camp</h3>
<div className="flex items-center gap-4 text-gray-400 text-sm">
<div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
<svg className="lucide lucide-calendar text-[#FF2D2D]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect><line x1="16" x2="16" y1="2" y2="6"></line><line x1="8" x2="8" y1="2" y2="6"></line><line x1="3" x2="21" y1="10" y2="10"></line></svg>
                            15. - 17. Srpen
                        </div>
<div className="flex items-center gap-2 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
<svg className="lucide lucide-map-pin text-[#FF2D2D]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
                            Lipno
                        </div>
</div>
</div>
<div className="relative z-10 w-14 h-14 rounded-2xl bg-[#FF2D2D] flex items-center justify-center shrink-0 shadow-[0_0_20px_rgba(255,45,45,0.4)] group-hover:scale-110 group-hover:rotate-12 transition-all duration-300">
<svg className="lucide lucide-arrow-up-right text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>

<div className="md:col-span-3 md:row-span-4 bg-gradient-to-br from-[#1A1A20] to-[#07070A] border border-white/5 rounded-[32px] p-6 flex flex-col items-center justify-center text-center relative overflow-hidden group cursor-pointer hover:border-[#23D5FF]/30 transition-colors duration-300">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay"></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#23D5FF]/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10">
<div className="flex -space-x-3 justify-center mb-4 pl-3">
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#1A1A20]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#1A1A20]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=100&amp;h=100&amp;fit=crop"/>
<img alt="" className="w-10 h-10 rounded-full border-2 border-[#1A1A20]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop"/>
<div className="w-10 h-10 rounded-full border-2 border-[#1A1A20] bg-[#23D5FF] text-black font-bold text-xs flex items-center justify-center shadow-[0_0_15px_rgba(35,213,255,0.4)]">
                            +2k
                        </div>
</div>
<div className="text-white font-bold text-lg mb-1 group-hover:text-[#23D5FF] transition-colors">Přidej se k nám</div>
<div className="text-gray-400 text-sm font-medium flex items-center gap-1 justify-center">
                        Komunita
                        <svg className="lucide lucide-heart text-[#23D5FF] fill-[#23D5FF]/20" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-0 right-0 bottom-0 left-0 overflow-hidden pointer-events-none">

<div className="absolute inset-0 opacity-20 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff08_1px,transparent_1px),linear-gradient(to_bottom,#ffffff08_1px,transparent_1px)] bg-[size:64px_64px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-[0.03] select-none overflow-hidden">
<span className="text-[25vw] font-bold text-white tracking-tighter leading-none whitespace-nowrap blur-sm transform scale-150">SHUFFLE</span>
</div>

<div className="absolute inset-0">

<div className="absolute top-[20%] left-[15%] animate-[bounce_4s_infinite] opacity-30 text-[#FF2D2D]">
<svg className="lucide lucide-music-2 transform -rotate-12" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="18" r="4"></circle><path d="M12 18V2l7 4"></path></svg>
</div>

<div className="absolute top-[30%] right-[10%] animate-[bounce_5s_infinite_1s] opacity-20 text-[#23D5FF]">
<svg className="lucide lucide-zap transform rotate-12" fill="none" height="64" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="64" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>

<div className="absolute bottom-[40%] left-[8%] animate-[pulse_3s_ease-in-out_infinite] opacity-25 text-[#8B5CFF]">
<svg className="lucide lucide-sparkles" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"></path><path d="M5 3v4"></path><path d="M9 17v4"></path><path d="M3 21h4"></path></svg>
</div>

<div className="absolute bottom-[25%] right-[20%] animate-[bounce_6s_infinite_2s] opacity-20 text-white">
<svg className="lucide lucide-activity transform rotate-6" fill="none" height="56" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="56" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#07070A]/20 to-[#07070A]/80"></div>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
<div className="w-[1px] h-16 bg-gradient-to-b from-transparent via-[#FF2D2D] to-transparent"></div>
</div>
</header>

<section className="py-20 relative bg-[#0B0B12]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-[#FF2D2D]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF2D2D] transition-colors duration-300">
<i className="w-6 h-6 text-[#FF2D2D] group-hover:text-white" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Pro každého</h3>
<p className="text-sm text-gray-400">
              Ať už jste začátečník nebo pokročilý, najdete u nás program na
              míru.
            </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-[#23D5FF]/10 flex items-center justify-center mb-4 group-hover:bg-[#23D5FF] transition-colors duration-300">
<i className="w-6 h-6 text-[#23D5FF] group-hover:text-white" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Komunita</h3>
<p className="text-sm text-gray-400">
              Staňte se součástí silné a uznávané taneční rodiny.
            </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-[#8B5CFF]/10 flex items-center justify-center mb-4 group-hover:bg-[#8B5CFF] transition-colors duration-300">
<i className="w-6 h-6 text-[#8B5CFF] group-hover:text-white" data-lucide="trending-up" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Rychlý progres
            </h3>
<p className="text-sm text-gray-400">
              Propracovaný systém výuky, který eliminuje překážky.
            </p>
</div>

<div className="glass-panel p-6 rounded-2xl hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-[#FF2D2D]/10 flex items-center justify-center mb-4 group-hover:bg-[#FF2D2D] transition-colors duration-300">
<i className="w-6 h-6 text-[#FF2D2D] group-hover:text-white" data-lucide="activity" strokeWidth="1.5"></i>
</div>
<h3 className="text-lg font-semibold text-white mb-2">
              Energie &amp; Vibe
            </h3>
<p className="text-sm text-gray-400">
              Nejen kroky, ale životní styl plný radosti a hudby.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden" id="o-skole">

<div className="absolute top-1/4 left-0 w-[500px] h-[500px] bg-[#23D5FF] rounded-full mix-blend-screen filter blur-[128px] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-6 relative">
<div className="relative z-10 grid grid-cols-2 gap-4">
<img className="rounded-2xl w-full h-80 object-cover border border-white/10 shadow-2xl translate-y-12 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1535525153412-5a42439a210d?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<img className="rounded-2xl w-full h-80 object-cover border border-white/10 shadow-2xl -translate-y-4 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1524594152303-9fd13543fe6e?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 border border-[#FF2D2D]/20 rounded-3xl transform rotate-6 scale-105 -z-0"></div>
</div>

<div className="lg:col-span-6">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-[1px] bg-[#FF2D2D]"></div>
<span className="uppercase tracking-widest text-xs font-medium text-[#FF2D2D]">
              Vítejte v Shuffle
            </span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-8 leading-tight">
            Kalafa &amp; Batela
            <br/>
<span className="text-gray-400">
              první škola shuffle dance v České republice
            </span>
</h2>
<div className="glass-panel border-l-4 border-l-[#FF2D2D] p-6 mb-8 rounded-r-xl">
<p className="text-lg text-white font-medium">
              "Jsme hrdí na to, že jsme průkopníky a přinášíme to nejlepší ze
              světa shuffle tance přímo k vám."
            </p>
</div>
<p className="text-gray-400 leading-relaxed mb-6">
            Jako jediní se zaměřujeme čistě na tento taneční styl a zakládáme si
            na velmi propracovaném a praxí ověřeném systému výuky, který je
            nastaven tak, aby eliminoval co největší množství překážek.
          </p>
<p className="text-gray-400 leading-relaxed mb-10">
            S více než 7 lety zkušeností jsme vybudovali silnou a uznávanou
            taneční komunitu, která neustále roste. Naše škola nabízí širokou
            škálu kurzů, které jsou k dispozici ve čtyřech městech po celé České
            republice.
          </p>
<a className="text-white font-semibold border-b border-[#FF2D2D] pb-1 hover:text-[#FF2D2D] transition-colors inline-flex items-center gap-2" href="#tym">
            Poznejte zakladatele
            <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 relative bg-black overflow-hidden flex items-center">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&amp;w=2574&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full">
<div className="max-w-2xl">
<span className="uppercase tracking-widest text-xs font-medium text-[#23D5FF] mb-4 block animate-pulse">
            Přidejte se k nám
          </span>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tighter mb-6">
            Připrav se na
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#FF2D2D] to-[#8B5CFF]">
              nezapomenutelnou jízdu
            </span>
            do světa rytmu.
          </h2>
<p className="text-xl text-gray-300 font-light mb-8">
            Naše vášnivé lekce tance ti umožní propustit každodenní stres a
            vstoupit do světa, kde se tvé nohy stanou orchestrálními nástroji a
            hudba tvůj společník.
          </p>
</div>
</div>
</section>

<section className="relative py-32 bg-[#0B0B12] overflow-hidden">

<div className="absolute top-1/2 left-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#FF2D2D] rounded-full mix-blend-screen filter blur-[150px] opacity-10 -translate-x-1/2 pointer-events-none"></div>
<div className="absolute top-1/2 right-0 -translate-y-1/2 w-[600px] h-[600px] bg-[#23D5FF] rounded-full mix-blend-screen filter blur-[150px] opacity-10 translate-x-1/2 pointer-events-none"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-24 relative">
<div className="inline-flex items-center justify-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-6">
<span className="flex h-2 w-2 relative mr-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF2D2D] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF2D2D]"></span>
</span>
<span className="text-xs font-medium tracking-wide text-white uppercase">Začni svou cestu</span>
</div>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Jak to u nás <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-gray-500">probíhá?</span>
</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Je to jednodušší, než si myslíš. Stačí udělat první krok a my tě provedeme zbytkem cesty až na taneční parket.
          </p>
</div>

<div className="grid md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-[88px] left-0 w-full h-[2px] z-0 pointer-events-none">

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>

<div className="absolute inset-0 bg-gradient-to-r from-transparent via-[#FF2D2D] to-transparent w-1/2 animate-[shimmer_3s_infinite] opacity-50 blur-[2px]"></div>
</div>

<div className="relative group">
<div className="h-full p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#FF2D2D]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(255,45,45,0.15)] flex flex-col items-center text-center relative overflow-hidden">

<div className="absolute inset-0 bg-gradient-to-b from-[#FF2D2D]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-[#FF2D2D]/50 transition-all duration-300">
<span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 group-hover:from-[#FF2D2D] group-hover:to-[#ff8080] transition-all duration-300">01</span>

<div className="absolute inset-0 bg-[#FF2D2D] filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
<h3 className="relative z-10 text-xl font-semibold text-white mb-4 group-hover:text-[#FF2D2D] transition-colors">Vyber si kurz</h3>
<p className="relative z-10 text-gray-400 leading-relaxed text-sm">
                  Prohlédni si náš rozvrh, zvol město a úroveň, která ti sedne. Registrace ti zabere sotva minutu.
                </p>
</div>
</div>

<div className="relative group mt-8 md:mt-0">
<div className="h-full p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#23D5FF]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(35,213,255,0.15)] flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#23D5FF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-[#23D5FF]/50 transition-all duration-300">
<span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 group-hover:from-[#23D5FF] group-hover:to-[#80eaff] transition-all duration-300">02</span>
<div className="absolute inset-0 bg-[#23D5FF] filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
<h3 className="relative z-10 text-xl font-semibold text-white mb-4 group-hover:text-[#23D5FF] transition-colors">První lekce</h3>
<p className="relative z-10 text-gray-400 leading-relaxed text-sm">
                  Doraz na sál, poznej skvělou partu lidí a nech se vtáhnout do rytmu hudby. Žádný stres, jen pohyb.
                </p>
</div>
</div>

<div className="relative group mt-16 md:mt-0">
<div className="h-full p-8 rounded-3xl bg-[#121217] border border-white/5 hover:border-[#8B5CFF]/30 transition-all duration-500 hover:shadow-[0_0_40px_-10px_rgba(139,92,255,0.15)] flex flex-col items-center text-center relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#8B5CFF]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 w-24 h-24 rounded-2xl bg-[#0B0B12] border border-white/10 flex items-center justify-center mb-8 shadow-2xl group-hover:scale-110 group-hover:border-[#8B5CFF]/50 transition-all duration-300">
<span className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-br from-white to-gray-600 group-hover:from-[#8B5CFF] group-hover:to-[#c4a6ff] transition-all duration-300">03</span>
<div className="absolute inset-0 bg-[#8B5CFF] filter blur-xl opacity-0 group-hover:opacity-20 transition-opacity duration-300"></div>
</div>
<h3 className="relative z-10 text-xl font-semibold text-white mb-4 group-hover:text-[#8B5CFF] transition-colors">Progres</h3>
<p className="relative z-10 text-gray-400 leading-relaxed text-sm">
                  Zlepšuj se každou lekcí, získej nové skills a staň se součástí naší taneční rodiny.
                </p>
</div>
</div>
</div>

<div className="mt-16 text-center opacity-0 animate-[fadeIn_1s_ease-out_0.5s_forwards]">
<a className="inline-flex items-center gap-2 text-sm font-medium text-gray-500 hover:text-white transition-colors duration-300 group" href="#kurzy">
<span>Vybrat termín</span>
<svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#07070A] relative" id="kurzy">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-4">
              Otevřené kurzy
            </h2>
<p className="text-gray-400">
              Shuffle učíme ve 4 českých městech, tady se můžeš podívat, která
              to jsou!
            </p>
</div>

<div className="flex flex-wrap gap-2">
<button className="px-4 py-1.5 rounded-full bg-[#FF2D2D] text-white text-xs font-semibold">
              Vše
            </button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs font-medium hover:border-white hover:text-white transition-all">
              Praha
            </button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs font-medium hover:border-white hover:text-white transition-all">
              Ostrava
            </button>
<button className="px-4 py-1.5 rounded-full border border-white/10 text-gray-400 text-xs font-medium hover:border-white hover:text-white transition-all">
              Začátečníci
            </button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1541963463532-d68292c34b19?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="mb-3 flex gap-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase font-bold tracking-wider text-white">
                  Úterý
                </span>
</div>
<h3 className="text-2xl font-bold text-white mb-1">PRAHA</h3>
<p className="text-gray-300 text-sm mb-4">Centrum tance</p>
<button className="w-full py-3 bg-[#FF2D2D] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-[#FF2D2D]/30 btn-glow">
                Otevřít kurz
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="mb-3 flex gap-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase font-bold tracking-wider text-white">
                  Středa
                </span>
</div>
<h3 className="text-2xl font-bold text-white mb-1">OSTRAVA</h3>
<p className="text-gray-300 text-sm mb-4">Studio Rhythm</p>
<button className="w-full py-3 bg-[#FF2D2D] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-[#FF2D2D]/30 btn-glow">
                Otevřít kurz
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="mb-3 flex gap-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase font-bold tracking-wider text-white">
                  Čtvrtek
                </span>
</div>
<h3 className="text-2xl font-bold text-white mb-1">
                ČESKÉ BUDĚJOVICE
              </h3>
<p className="text-gray-300 text-sm mb-4">Kulturní dům</p>
<button className="w-full py-3 bg-[#FF2D2D] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-[#FF2D2D]/30 btn-glow">
                Otevřít kurz
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer h-[400px]">
<img className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/50 to-transparent opacity-80 group-hover:opacity-90 transition-opacity"></div>
<div className="absolute bottom-0 left-0 right-0 p-6 translate-y-2 group-hover:translate-y-0 transition-transform">
<div className="mb-3 flex gap-2">
<span className="px-2 py-1 bg-white/10 backdrop-blur-md rounded border border-white/10 text-[10px] uppercase font-bold tracking-wider text-white">
                  Pondělí
                </span>
</div>
<h3 className="text-2xl font-bold text-white mb-1">PLZEŇ</h3>
<p className="text-gray-300 text-sm mb-4">Gymnázium</p>
<button className="w-full py-3 bg-[#FF2D2D] text-white text-sm font-semibold rounded-lg flex items-center justify-center gap-2 opacity-0 group-hover:opacity-100 transition-all duration-300 transform translate-y-4 group-hover:translate-y-0 shadow-lg shadow-[#FF2D2D]/30 btn-glow">
                Otevřít kurz
                <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6">
<div className="max-w-7xl mx-auto rounded-3xl overflow-hidden relative border border-white/10">

<div className="absolute inset-0 bg-gradient-to-br from-[#1E0B36] via-[#2D0F15] to-[#07070A] z-0"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-30 mix-blend-overlay z-0"></div>

<div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent skew-x-12 translate-x-[-150%] animate-[shimmer_5s_infinite]"></div>
<div className="relative z-10 py-20 px-6 text-center">
<p className="text-gray-300 font-medium mb-4">Tak na co ještě čekáš?</p>
<h2 className="text-4xl md:text-6xl font-bold text-white tracking-tight mb-8 max-w-4xl mx-auto">
            Otevři naše brány a přidej se k tanečnímu fenoménu!
          </h2>
<p className="text-gray-400 max-w-2xl mx-auto mb-10 text-lg">
            Našimi bránami prošlo už mnoho vášnivých tanečníků. Tak na co čekáš?
            Připoj se k nám a objev sílu rytmu, svobodu pohybu a nekonečné
            možnosti.
          </p>
<a className="inline-flex items-center gap-3 px-10 py-5 bg-[#FF2D2D] text-white rounded-full shadow-[0_0_40px_rgba(255,45,45,0.4)] hover:shadow-[0_0_60px_rgba(255,45,45,0.6)] hover:scale-105 transition-all text-lg btn-glow font-semibold" href="#register">
            Prohlédnout kurzy
            <i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#07070A]">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative order-2 lg:order-1">
<div className="absolute -inset-1 bg-gradient-to-r from-[#FF2D2D] to-[#8B5CFF] rounded-2xl blur opacity-30"></div>
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#0B0B12] aspect-square lg:aspect-video shadow-2xl">
<img className="w-full h-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
<div className="absolute inset-0 flex items-center justify-center">
<button className="w-20 h-20 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer group btn-glow">
<i className="w-8 h-8 text-white fill-white ml-1 group-hover:text-[#FF2D2D] transition-colors" data-lucide="play" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<div className="inline-block px-3 py-1 rounded-md bg-white/5 border border-white/10 text-xs font-semibold text-gray-300 mb-6">
            Komunita
          </div>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Staň se součástí naší
            <br/>
            taneční komunity
          </h2>
<p className="text-gray-400 mb-8 leading-relaxed">
            Navštěvovat naše kurzy neznamená pouze tančení, je to i vstupenka do
            skvělé komunity! Pro naše tanečníky organizujeme menší i větší akce,
            workshopy se špičkovými lektory a vánoční večírky.
          </p>
<ul className="space-y-4">
<li className="flex items-center gap-3 text-gray-300">
<div className="w-6 h-6 rounded-full bg-[#23D5FF]/20 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#23D5FF]" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span className="">Shuffle víkendy a workshopy</span>
</li>
<li className="flex items-center gap-3 text-gray-300">
<div className="w-6 h-6 rounded-full bg-[#23D5FF]/20 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#23D5FF]" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span>Mezinárodní lektoři</span>
</li>
<li className="flex items-center gap-3 text-gray-300">
<div className="w-6 h-6 rounded-full bg-[#23D5FF]/20 flex items-center justify-center">
<i className="w-3.5 h-3.5 text-[#23D5FF]" data-lucide="check" strokeWidth="1.5"></i>
</div>
<span>Tituly mistrů Evropy</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0B12] overflow-hidden relative">

<style>
    @keyframes vertical-scroll {
      0% { transform: translateY(calc(-50% - 8px)); }
      100% { transform: translateY(0); }
    }
    .animate-vertical-scroll {
      animation: vertical-scroll 40s linear infinite;
    }
    .animate-vertical-scroll:hover {
      animation-play-state: paused;
    }
  </style>

<div className="absolute top-1/4 left-0 w-[600px] h-[600px] bg-[#FF2D2D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] pointer-events-none"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-[#8B5CFF] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.07] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div className="">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF2D2D] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D] animate-pulse"></span>
          Co o nás říkají
        </div>
<h2 className="text-4xl md:text-5xl font-semibold text-white tracking-tight">
          Příběhy našich studentů
        </h2>
</div>

<div className="flex items-center gap-4 bg-white/5 border border-white/10 px-4 py-2 rounded-full backdrop-blur-md">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full border-2 border-[#0B0B12] bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="w-8 h-8 rounded-full border-2 border-[#0B0B12] bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="w-8 h-8 rounded-full border-2 border-[#0B0B12] bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
</div>
<div className="text-xs text-gray-300 font-medium">
<span className="text-white">4.9/5</span> hodnocení
        </div>
</div>
</div>

<div className="grid lg:grid-cols-12 gap-6 h-[650px] md:h-[600px]">

<div className="lg:col-span-7 h-full">
<div className="h-full relative bg-[#121217] border border-white/10 rounded-3xl p-8 md:p-12 flex flex-col justify-between overflow-hidden group transition-all duration-500 hover:border-[#FF2D2D]/30 hover:shadow-[0_0_50px_rgba(255,45,45,0.1)]">

<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-gradient-to-br from-[#FF2D2D]/20 via-[#8B5CFF]/10 to-transparent rounded-full blur-3xl -translate-y-1/2 translate-x-1/3 pointer-events-none opacity-40 group-hover:opacity-60 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="flex gap-1 text-[#FFCB45] mb-8">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<svg className="w-20 h-20 text-white/5 absolute top-0 left-0 -translate-x-4 -translate-y-4 -z-10" fill="currentColor" viewbox="0 0 24 24"><path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V5H13.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
<blockquote className="text-2xl md:text-4xl font-medium text-white leading-tight tracking-tight mb-8">
              "Kluci mi splnili sen. Lekce jsou na jedničku s hvězdičkou a 3x podtrženo. Skvělý přístup, energie a profi vedení. Nikdy jsem nezažila lepší atmosféru."
            </blockquote>
</div>
<div className="flex items-center gap-5 border-t border-white/10 pt-8">
<div className="relative w-16 h-16">
<div className="absolute inset-0 rounded-full bg-gradient-to-tr from-[#FF2D2D] to-[#8B5CFF] animate-pulse opacity-50 blur-sm"></div>
<div className="relative w-full h-full rounded-full bg-[#121217] p-0.5">
<img className="w-full h-full rounded-full object-cover" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&amp;q=80"/>
</div>
</div>
<div className="">
<div className="text-white font-semibold text-lg">Veronika Radová</div>
<div className="text-gray-400 text-sm">Absolventka kurzu pokročilých</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-full rounded-3xl overflow-hidden bg-[#121217]/30 border border-white/5 backdrop-blur-sm">

<div className="absolute top-0 left-0 right-0 h-32 bg-gradient-to-b from-[#0B0B12] via-[#0B0B12]/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-[#0B0B12] via-[#0B0B12]/80 to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-0 overflow-hidden py-4 px-4">

<div className="animate-vertical-scroll flex flex-col gap-4 w-full">

<div className="flex flex-col gap-4">
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#23D5FF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">12.03.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Prostě TOP! Skvělé vyučovací metody a osobní přístup, doporučuji všem."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Hana Michelová</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#8B5CFF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">28.02.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Nejvíc cením osobní přístup i k pomalejším jedincům. Je to zábava!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Karol Bartáková</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#FF2D2D]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">15.01.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Doporučuji všem, kdo chtějí začít s tancem. Super energie!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Petr Novák</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#23D5FF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">10.01.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Skvělá lokalita a výborní lektoři. Určitě budu pokračovat."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">David Horák</div>
</div>
</div>
</div>

<div className="flex flex-col gap-4">
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#23D5FF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">12.03.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Prostě TOP! Skvělé vyučovací metody a osobní přístup, doporučuji všem."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Hana Michelová</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#8B5CFF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">28.02.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Nejvíc cením osobní přístup i k pomalejším jedincům. Je to zábava!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Karol Bartáková</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#FF2D2D]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">15.01.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Doporučuji všem, kdo chtějí začít s tancem. Super energie!"</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">Petr Novák</div>
</div>
</div>
<div className="p-6 rounded-2xl bg-[#1A1A20] border border-white/5 hover:border-[#23D5FF]/40 hover:bg-[#1A1A20]/80 transition-all duration-300 group">
<div className="flex justify-between items-start mb-3">
<div className="flex gap-0.5 text-[#FFCB45]">
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
<svg className="w-3.5 h-3.5 fill-current" viewbox="0 0 24 24"><path d="M12 2l2.4 7.2h7.6l-6 4.8 2.4 7.2-6-4.8-6 4.8 2.4-7.2-6-4.8h7.6z"></path></svg>
</div>
<span className="text-[10px] text-gray-500 font-mono">10.01.2024</span>
</div>
<p className="text-gray-300 text-sm mb-4 leading-relaxed group-hover:text-white transition-colors">"Skvělá lokalita a výborní lektoři. Určitě budu pokračovat."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-700 overflow-hidden"><img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/></div>
<div className="text-xs font-semibold text-white">David Horák</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#07070A]" id="tym">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white tracking-tight mb-4">
            Náš tým
          </h2>
<p className="text-gray-400">Jedna velká shuffle rodina</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-white font-bold text-lg group-hover:text-[#FF2D2D] transition-colors">
                Dan
              </h3>
<p className="text-gray-400 text-xs">Praha</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-white font-bold text-lg group-hover:text-[#FF2D2D] transition-colors">
                Matyáš
              </h3>
<p className="text-gray-400 text-xs">Praha</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=2864&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-white font-bold text-lg group-hover:text-[#FF2D2D] transition-colors">
                Eliška
              </h3>
<p className="text-gray-400 text-xs">Praha</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-2xl overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?q=80&amp;w=2628&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-4 left-4">
<h3 className="text-white font-bold text-lg group-hover:text-[#FF2D2D] transition-colors">
                Týna
              </h3>
<p className="text-gray-400 text-xs">České Budějovice</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0B0B12] relative overflow-hidden">

<div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-[#FF2D2D] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08] pointer-events-none animate-pulse"></div>
<div className="absolute bottom-0 right-1/4 w-[500px] h-[500px] bg-[#8B5CFF] rounded-full mix-blend-screen filter blur-[150px] opacity-[0.08] pointer-events-none"></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#FF2D2D] text-xs font-semibold uppercase tracking-wider mb-4 backdrop-blur-md">
<span className="w-1.5 h-1.5 rounded-full bg-[#FF2D2D] animate-pulse"></span>
            Podpora &amp; Info
          </div>
<h2 className="text-4xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Často kladené otázky
          </h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto leading-relaxed">
            Máte otázky ohledně kurzů, vybavení nebo registrace? Zde najdete odpovědi na ty nejčastější dotazy našich studentů.
          </p>
</div>
<div className="grid lg:grid-cols-12 gap-12 items-start">

<div className="lg:col-span-7 space-y-4">

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  Co je Shuffle Kalafa &amp; Batela?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Jsme první škola shuffle dance v České republice, založená na letitých zkušenostech a vášni pro tanec. Naším cílem je vybudovat komunitu tanečníků, kteří sdílejí lásku k hudbě a pohybu, a poskytnout jim profesionální zázemí pro rozvoj.
              </div>
</details>

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  V jakých městech škola působí?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Aktuálně působíme ve 4 hlavních lokalitách: . Kurzy probíhají v profesionálních tanečních sálech s kvalitním zázemím.
              </div>
</details>

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  Jsou kurzy vhodné i pro začátečníky?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Ano, absolutně! Náš systém výuky je navržen tak, aby se chytil i naprostý začátečník. Začínáme od úplných základů (Running Man, T-Step) a postupně přidáváme složitější variace a kombinace.
              </div>
</details>

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  Co si mám vzít na sebe na první lekci?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Doporučujeme pohodlné sportovní oblečení (legíny, tepláky, volné tričko) a především  s hladší podrážkou, která vám umožní snadný skluz po parketu. Nezapomeňte na láhev s vodou a ručník.
              </div>
</details>

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  Jak probíhá platba za kurz?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Po vyplnění registračního formuláře vám na e-mail zašleme údaje k platbě. Platbu je možné provést bankovním převodem nebo pomocí QR kódu. Kurz je nutné uhradit před zahájením první lekce.
              </div>
</details>

<details className="group glass-panel rounded-2xl overflow-hidden border border-white/5 open:border-[#FF2D2D]/30 open:bg-[#1A1A20] transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none hover:bg-white/5 transition-colors">
<span className="font-medium text-white text-lg group-hover:text-[#FF2D2D] transition-colors pr-8">
                  Mohu se na lekci přijít jen podívat?
                </span>
<span className="flex-shrink-0 text-gray-500 transition-transform duration-300 group-open:rotate-180 group-open:text-[#FF2D2D]">
<svg className="lucide lucide-chevron-down w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 text-gray-400 leading-relaxed border-t border-white/5 pt-4 text-sm animate-[fadeIn_0.3s_ease-out]">
                Samozřejmě! Nabízíme možnost ukázkové lekce zdarma na začátku každého semestru. Sledujte naše sociální sítě nebo sekci Novinky pro termíny otevřených dveří.
              </div>
</details>
</div>

<div className="lg:col-span-5 relative">
<div className="sticky top-24">
<div className="relative rounded-3xl overflow-hidden border border-white/10 bg-[#121217]/60 backdrop-blur-xl shadow-2xl group">

<div className="absolute -inset-1 bg-gradient-to-r from-[#FF2D2D]/20 to-[#8B5CFF]/20 opacity-0 group-hover:opacity-100 blur-xl transition-opacity duration-700 pointer-events-none"></div>
<div className="relative z-10 p-8">
<div className="flex items-center gap-3 mb-6">
<div className="p-2.5 rounded-lg bg-[#FF2D2D]/10 border border-[#FF2D2D]/20">
<svg className="lucide lucide-message-circle w-6 h-6 text-[#FF2D2D]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
</div>
<div>
<h3 className="text-xl font-bold text-white">Máte jiný dotaz?</h3>
<p className="text-xs text-gray-400">Odpovídáme do 24 hodin</p>
</div>
</div>
<form className="space-y-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-300 ml-1">Jméno</label>
<input className="w-full bg-[#0B0B12]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF2D2D]/50 focus:ring-1 focus:ring-[#FF2D2D]/50 transition-all" placeholder="Jan Novák" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-300 ml-1">Email</label>
<input className="w-full bg-[#0B0B12]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF2D2D]/50 focus:ring-1 focus:ring-[#FF2D2D]/50 transition-all" placeholder="jan@example.com" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-gray-300 ml-1">Zpráva</label>
<textarea className="w-full bg-[#0B0B12]/50 border border-white/10 rounded-xl px-4 py-3 text-sm text-white placeholder-gray-600 focus:outline-none focus:border-[#FF2D2D]/50 focus:ring-1 focus:ring-[#FF2D2D]/50 transition-all resize-none" placeholder="Na co se chcete zeptat?" rows="4"></textarea>
</div>
<button className="w-full py-3.5 bg-gradient-to-r from-[#FF2D2D] to-[#FF4D4D] text-white font-semibold rounded-xl shadow-lg shadow-[#FF2D2D]/20 hover:shadow-[#FF2D2D]/40 hover:scale-[1.02] active:scale-[0.98] transition-all duration-300 flex items-center justify-center gap-2 group/btn btn-glow mt-2" type="button">
<span>Odeslat dotaz</span>
<svg className="lucide lucide-send w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 2-7 20-4-9-9-4Z"></path><path d="M22 2 11 13"></path></svg>
</button>
</form>
<div className="mt-6 pt-6 border-t border-white/5 flex items-center justify-between text-xs text-gray-500">
<span className="flex items-center gap-1.5">
<svg className="lucide lucide-shield-check text-[#23D5FF]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                      Vaše data jsou v bezpečí
                    </span>
<a className="hover:text-white transition-colors" href="mailto:info@shuffleschool.cz">info@shuffleschool.cz</a>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-24 px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
<div className="absolute inset-0 bg-[#07070A]/90"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center glass-panel p-12 rounded-3xl border border-white/10 shadow-2xl">
<div className="flex justify-center -space-x-4 mb-6">
<img alt="" className="w-12 h-12 rounded-full border-2 border-[#07070A]" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-[#07070A]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<img alt="" className="w-12 h-12 rounded-full border-2 border-[#07070A]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;h=100"/>
<div className="w-12 h-12 rounded-full border-2 border-[#07070A] bg-[#FF2D2D] text-white flex items-center justify-center text-xs font-bold">
            +2k
          </div>
</div>
<h2 className="text-3xl font-bold text-white mb-4">
          Nenašli jste svou odpověď?
        </h2>
<p className="text-gray-400 mb-8">
          Napište nám e-mail, a my se vám ozveme do 24 hodin.
        </p>
<form className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
<input className="flex-1 px-5 py-3 rounded-lg bg-black/40 border border-white/10 text-white placeholder-gray-500 focus:outline-none focus:border-[#FF2D2D] transition-colors" placeholder="Zadejte svůj e-mail" type="email"/>
<button className="px-8 py-3 bg-white text-black font-semibold rounded-lg hover:bg-gray-200 transition-colors btn-glow">
            Odeslat
          </button>
</form>
</div>
</section>

<footer className="bg-black border-t border-white/10 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-[#FF2D2D] to-[#8B5CFF] flex items-center justify-center text-white text-sm font-bold">
                KB
              </div>
<span className="font-semibold text-white tracking-tight">
                SHUFFLE SCHOOL
              </span>
</a>
<p className="text-gray-500 text-sm mb-4">shufflekalafa@gmail.com</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Kurzy</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Praha
                </a>
</li>
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Ostrava
                </a>
</li>
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Plzeň
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Menu</h4>
<ul className="space-y-2 text-sm text-gray-500">
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Kurzy
                </a>
</li>
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Workshopy
                </a>
</li>
<li>
<a className="hover:text-[#FF2D2D] transition-colors" href="#">
                  Náš tým
                </a>
</li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Socials</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF2D2D] hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF2D2D] hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-gray-400 hover:bg-[#FF2D2D] hover:text-white transition-all" href="#">
<i className="w-5 h-5" data-lucide="youtube" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-600 text-xs">
            © 2025 Shuffle Kalafa. Všechna práva vyhrazena.
          </p>
<div className="text-[100px] md:text-[150px] font-bold text-white/5 leading-none select-none absolute bottom-0 left-1/2 -translate-x-1/2 pointer-events-none -z-0">
            SHUFFLE
          </div>
<div className="px-3 py-1 rounded border border-white/10 text-[10px] text-gray-500 flex items-center gap-2">
            Proudly crafted in
            <i className="w-3 h-3 text-[#FF2D2D]" data-lucide="zap" strokeWidth="1.5"></i>
</div>
</div>
</div>
</footer>


    </>
  );
}
