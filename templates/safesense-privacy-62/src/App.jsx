import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });

        // Simple Scroll Reveal Animation
        const observerOptions = {
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.remove('opacity-0', 'translate-y-4');
                    entry.target.classList.add('opacity-100', 'translate-y-0');
                    observer.unobserve(entry.target); // Only animate once
                }
            });
        }, observerOptions);

        document.querySelectorAll('.animate-reveal').forEach((el) => {
            observer.observe(el);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full blur-[180px] opacity-10 bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="absolute bottom-[10%] right-[-5%] w-[30%] h-[30%] bg-blue-900 rounded-full blur-[150px] opacity-10" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-1 group" href="#">
<div className="relative w-6 h-6 border border-white/80 rounded flex items-center justify-center group-hover:border-[#FF7085] transition-colors duration-300">
<div className="absolute top-1 right-1 w-1.5 h-1.5 rounded-full bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="ml-2 text-xl tracking-tight">
<span className="font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>SAFE</span><span className="font-light text-white/70">SENSE</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-white/60">
<a className="hover:text-white transition-colors" href="#features" style={{transition: 'outline 0.1s ease-in-out'}}>Features</a>
<a className="hover:text-white transition-colors" href="#how-it-works" style={{transition: 'outline 0.1s ease-in-out'}}>How it Works</a>
<a className="hover:text-white transition-colors" href="#reviews" style={{transition: 'outline 0.1s ease-in-out'}}>Reviews</a>
</div>

<a className="hidden md:flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-[#FF7085] hover:text-white transition-all duration-300" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>
                Secure Your Space
                <svg className="lucide lucide-shield-check w-4 h-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</a>

<button className="md:hidden text-white/80">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden z-10 max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">

<div className="max-w-2xl">
<div className="inline-flex animate-reveal text-xs font-medium text-red-600 tracking-wide bg-[#FF7085]/5 opacity-100 border-[#FF7085]/30 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 translate-y-0 gap-x-2 gap-y-2 items-center" style={{transition: 'outline 0.1s ease-in-out'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></span>
</span>
                    MILITARY-GRADE PRIVACY SHIELD
                </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6 leading-[1.1] animate-reveal delay-100 opacity-100 translate-y-0" style={{transition: 'outline 0.1s ease-in-out'}}>
                    Scan. Detect. <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-br from-[#E42910] to-[#000000]/5">Neutralize.</span>
</h1>
<p className="text-lg md:text-xl text-white/60 font-light mb-10 max-w-lg leading-relaxed animate-reveal delay-200 opacity-100 translate-y-0">
                    The SafeSense™ T66 empowers travelers to instantly detect hidden cameras, GPS trackers, and bugs. Elite tactical protection in a pocket-sized design.
                </p>
<div className="flex flex-col sm:flex-row gap-4 animate-reveal delay-300 opacity-100 translate-y-0">
<a className="flex items-center justify-center gap-2 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-[#ff5670] transition-colors shadow-[0_0_20px_rgba(255,112,133,0.3)] bg-[#E42910]" href="#pricing" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Get Protected - 53% OFF
                        <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="flex items-center justify-center gap-2 bg-white/5 border border-white/10 text-white px-8 py-4 rounded-full text-base font-medium hover:bg-white/10 transition-colors" href="#how-it-works" style={{transition: 'outline 0.1s ease-in-out'}}>
                        See How It Works
                    </a>
</div>
<div className="mt-8 flex items-center gap-4 text-sm text-white/40 font-light animate-reveal delay-300 opacity-100 translate-y-0" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-800 border border-black flex items-center justify-center text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>A</div>
<div className="w-8 h-8 rounded-full bg-zinc-700 border border-black flex items-center justify-center text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>M</div>
<div className="w-8 h-8 rounded-full bg-zinc-600 border border-black flex items-center justify-center text-xs" style={{transition: 'outline 0.1s ease-in-out'}}>J</div>
</div>
<p className="">Trusted by 10,000+ travelers worldwide</p>
</div>
</div>

<div className="relative flex items-center justify-center animate-reveal delay-200 opacity-100 translate-y-0 min-h-[500px]">

<div className="radar-grid opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[400px] h-[400px] bg-gradient-to-tr from-[#FF7085]/10 to-[#E42910]/20 rounded-full blur-[80px] -z-10 animate-pulse"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[340px] h-[340px] border border-white/5 rounded-full z-0">
<div className="absolute inset-0 rounded-full radar-sweep opacity-30 blur-md"></div>
</div>

<div className="relative z-10 animate-float">


<img alt="SafeSense T66 Detector" className="transform transition-transform duration-500 hover:scale-105 mask-image: linear-gradient(to bottom, black 90%, transparent 100%); bg-center w-auto h-[480px] object-cover relative drop-shadow-[0_20px_50px_rgba(0,0,0,0.5)]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b8b8d1e-e136-46bc-a00d-90c9bd194c0e_3840w.png"/>

<div className="absolute top-[10%] right-[20%] w-[1px] h-[100px] bg-gradient-to-b from-transparent via-white/20 to-transparent rotate-12 blur-[1px]"></div>
</div>

<div className="absolute top-20 right-0 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg z-20 backdrop-blur-xl bg-black/40 border-white/10" style={{animationDuration: '3s'}}>
<div className="bg-red-500/20 p-2 rounded-lg text-red-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-video w-5 h-5" data-lucide="video" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 13 5.223 3.482a.5.5 0 0 0 .777-.416V7.87a.5.5 0 0 0-.752-.432L16 10.5"></path><rect height="12" rx="2" width="14" x="2" y="6"></rect></svg>
</div>
<div>
<div className="text-[10px] tracking-wider text-white/50 uppercase font-semibold">Alert</div>
<div className="text-sm font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Camera Detected</div>
</div>
</div>
<div className="absolute bottom-10 left-0 glass-panel p-4 rounded-xl flex items-center gap-3 animate-bounce shadow-lg z-20 backdrop-blur-xl bg-black/40 border-white/10" style={{animationDuration: '4s'}}>
<div className="bg-blue-500/20 p-2 rounded-lg text-blue-400" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<div className="">
<div className="text-[10px] tracking-wider text-white/50 uppercase font-semibold">Scan</div>
<div className="text-sm font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>GPS Tracker Found</div>
</div>
</div>

<svg className="absolute inset-0 pointer-events-none z-10 opacity-30" height="100%" width="100%">
<line stroke="url(#grad1)" stroke-dasharray="4 4" strokeWidth="1" x1="70%" x2="50%" y1="20%" y2="40%"></line>
<line stroke="url(#grad1)" stroke-dasharray="4 4" strokeWidth="1" x1="30%" x2="45%" y1="80%" y2="60%"></line>
<defs>
<lineargradient id="grad1" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: '0'}}></stop>
<stop offset="50%" style={{stopColor: 'rgba(255,112,133,0.5)', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: 'rgba(255,255,255,0)', stopOpacity: '0'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
</header>

<section className="overflow-hidden bg-[#050505] border-white/5 border-t pt-24 pb-24 relative" id="how-it-works">
<style>
        @keyframes equalizer {
            0%, 100% { height: 20%; }
            50% { height: 90%; }
        }
        @keyframes radar-spin {
            from { transform: rotate(0deg); }
            to { transform: rotate(360deg); }
        }
        @keyframes blink {
            0%, 100% { opacity: 0.3; }
            50% { opacity: 1; }
        }
        @keyframes scan-line {
            0% { top: 0%; opacity: 0; }
            10% { opacity: 1; }
            90% { opacity: 1; }
            100% { top: 100%; opacity: 0; }
        }
        .eq-bar { animation: equalizer 1s ease-in-out infinite; }
        .radar-sweep { background: conic-gradient(from 0deg, transparent 0deg, rgba(228, 41, 16, 0.1) 60deg, rgba(228, 41, 16, 0.4) 360deg); animation: radar-spin 4s linear infinite; }
    </style>
<div className="max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6">Military-Grade Defense</h2>
<p className="text-xl text-white/60 font-light leading-relaxed">
                Comprehensive surveillance detection technology engineered for personal security.
            </p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">Advanced Threat Detection</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Detects cameras, GPS, &amp; wireless bugs
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            98% accuracy up to 30ft range
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Wide-band 1MHz–8GHz scanning
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-between group-hover:border-white/20 transition-colors">
<div className="flex justify-between items-center mb-4">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#E42910] animate-pulse"></div>
<span className="text-xs font-mono text-white/40 uppercase tracking-widest">RF Spectrum</span>
</div>
<span className="text-xs font-mono text-[#E42910]">ACTIVE</span>
</div>
<div className="flex gap-1 h-32 mb-2 gap-x-1 gap-y-1 items-end justify-between">

<div className="eq-bar bg-[#E42910]/20 w-full rounded-t-sm" style={{animationDuration: '0.8s', animationDelay: '0.1s'}}></div>
<div className="w-full bg-[#E42910]/40 rounded-t-sm eq-bar" style={{animationDuration: '1.2s', animationDelay: '0.2s'}}></div>
<div className="w-full bg-[#E42910]/60 rounded-t-sm eq-bar" style={{animationDuration: '0.9s', animationDelay: '0.05s'}}></div>
<div className="w-full bg-[#E42910] rounded-t-sm eq-bar" style={{animationDuration: '0.6s', animationDelay: '0.3s'}}></div>
<div className="w-full bg-[#E42910]/70 rounded-t-sm eq-bar" style={{animationDuration: '1.1s', animationDelay: '0.15s'}}></div>
<div className="w-full bg-[#E42910]/30 rounded-t-sm eq-bar" style={{animationDuration: '1.3s', animationDelay: '0.4s'}}></div>
<div className="w-full bg-[#E42910]/50 rounded-t-sm eq-bar" style={{animationDuration: '0.7s', animationDelay: '0.2s'}}></div>
<div className="w-full bg-[#E42910]/20 rounded-t-sm eq-bar" style={{animationDuration: '1.0s', animationDelay: '0.1s'}}></div>
</div>
<div className="flex justify-between text-[10px] font-mono text-white/30 pt-4 border-t border-white/5">
<span>1MHz</span>
<span>2.4GHz</span>
<span>5.8GHz</span>
<span>8GHz</span>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4">Fast, Full-Space Scanning</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Complete 360° room coverage
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Scans spaces in under 60 seconds
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Ideal for Airbnbs &amp; hotels
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex items-center justify-center group-hover:border-white/20 transition-colors">

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:20px_20px]"></div>
<div className="relative w-40 h-40">

<div className="absolute inset-0 border border-[#E42910]/20 rounded-full"></div>
<div className="absolute inset-8 border border-[#E42910]/20 rounded-full"></div>
<div className="absolute inset-16 border border-[#E42910]/40 rounded-full"></div>

<div className="absolute inset-0 rounded-full radar-sweep origin-center"></div>

<div className="absolute top-8 right-10 w-1.5 h-1.5 bg-white rounded-full shadow-[0_0_8px_white] animate-[blink_2s_infinite]"></div>
<div className="absolute bottom-12 left-10 w-1.5 h-1.5 bg-[#E42910] rounded-full shadow-[0_0_8px_#E42910] animate-[blink_3s_infinite]"></div>
</div>
<div className="absolute bottom-4 left-6 text-xs font-mono text-white/40">
                        RANGE: 10M
                        STATUS: SCANNING
                    </div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4" style={{}}>Zero Setup, One-Button Use</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Instant one-button operation
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Vibration, Beep &amp; LED alerts
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Silent mode for discreet use
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center items-center group-hover:border-white/20 transition-colors">
<div className="relative w-full max-w-[200px]">

<div className="flex items-center justify-between mb-8 px-4">
<div className="flex flex-col items-center gap-2 text-[#E42910]">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M6 9H4.5a2.5 2.5 0 0 1 0-5H6"></path><path d="M18 9h1.5a2.5 2.5 0 0 0 0-5H18"></path><path d="M4 22h16"></path><path d="M10 14.66V17c0 .55-.47.98-.97 1.21C7.85 18.75 7 20.24 7 22"></path><path d="M14 14.66V17c0 .55.47.98.97 1.21C16.15 18.75 17 20.24 17 22"></path><path d="M18 2h-6"></path></svg>
<span className="text-[10px] font-mono tracking-wider opacity-100 font-bold">VIBE</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col items-center gap-2 text-white/40">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-[10px] font-mono tracking-wider">VISUAL</span>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="flex flex-col items-center gap-2 text-white/40">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
<span className="text-[10px] font-mono tracking-wider">AUDIO</span>
</div>
</div>

<div className="w-full bg-white/5 h-14 rounded-full p-1 relative border border-white/10 cursor-pointer">
<div className="absolute top-1 left-1 bottom-1 w-[45%] bg-[#E42910] rounded-full shadow-[0_0_15px_rgba(228,41,16,0.4)] flex items-center justify-center">
<div className="w-1.5 h-6 bg-white/20 rounded-full"></div>
</div>
<div className="w-full h-full flex items-center justify-end px-6">
<span className="text-[10px] font-mono font-bold text-white/30">MODE</span>
</div>
</div>
</div>
</div>
</div>

<div className="group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:bg-white/[0.02] transition-colors overflow-hidden flex flex-col">
<div className="mb-8">
<h3 className="text-2xl font-medium text-white tracking-tight mb-4" style={{}}>Portable, Tactical Build</h3>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Pocket-sized tactical shell
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            Up to 8-hour battery life
                        </li>
<li className="flex items-start gap-3 text-white/60 font-light text-lg">
<svg className="w-5 h-5 mt-1 text-[#E42910]" fill="none" stroke="currentColor" viewbox="0 0 24 24"><path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                            TSA-approved for travel
                        </li>
</ul>
</div>

<div className="mt-auto bg-black rounded-xl border border-white/10 p-6 relative overflow-hidden h-64 flex flex-col justify-center gap-6 group-hover:border-white/20 transition-colors">

<div>
<div className="flex justify-between items-center mb-2">
<div className="flex items-center gap-2 text-white/70">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="10" rx="2" ry="2" width="16" x="2" y="7"></rect><line x1="22" x2="22" y1="11" y2="13"></line></svg>
<span className="text-xs font-mono font-medium">BATTERY</span>
</div>
<span className="text-xs font-mono text-[#E42910]">8 HRS</span>
</div>
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-[#E42910] w-[85%] shadow-[0_0_10px_#E42910]"></div>
</div>
</div>

<div className="flex items-center justify-between p-3 rounded-lg border border-white/5 bg-white/[0.02]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-white/5 flex items-center justify-center text-white/60">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Rechargeable</span>
<span className="text-[10px] text-white/40 font-mono">USB-C FAST CHARGE</span>
</div>
</div>
<div className="w-1.5 h-1.5 rounded-full bg-green-500 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>

<div className="flex items-center gap-2 text-white/30 text-[10px] font-mono justify-end">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
                        TSA APPROVED
                    </div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#0a0a0a] pt-24 pb-24" id="features" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="relative rounded-2xl overflow-hidden border border-white/10 bg-[#121212] aspect-square flex items-center justify-center">

<div className="opacity-20 bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 w-full px-12">

<div className="flex items-end justify-between h-48 gap-2">
<div className="w-full h-[80%] rounded-t opacity-90 relative group bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-bold text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>98%</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-black font-bold rotate-90 whitespace-nowrap">SafeSense T66</div>
</div>
<div className="bg-white/10 w-full h-[40%] rounded-t relative" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>60%</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-90 whitespace-nowrap" style={{transition: 'outline 0.1s ease-in-out'}}>Generic</div>
</div>
<div className="w-full bg-white/10 h-[20%] rounded-t relative" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>35%</div>
<div className="absolute bottom-4 left-1/2 -translate-x-1/2 text-[10px] text-white/40 font-bold rotate-90 whitespace-nowrap" style={{transition: 'outline 0.1s ease-in-out'}}>Apps</div>
</div>
</div>
<div className="mt-6 border-t border-white/10 pt-4 flex justify-between text-xs text-white/40 uppercase tracking-widest" style={{transition: 'outline 0.1s ease-in-out'}}>
<span>Detection Accuracy</span>
<span>Range Test</span>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-white mb-6" style={{transition: 'outline 0.1s ease-in-out'}}>Not all detectors are created equal.</h2>
<p className="text-lg text-white/60 font-light mb-8">
                        Stop relying on flimsy plastic knockoffs or unreliable phone apps. The T66 is engineered for elite tactical performance.
                    </p>
<ul className="space-y-6">
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#FF7085]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>Wideband RF Scanning</h4>
<p className="text-white/50 font-light text-sm mt-1">Detects frequencies from 1MHz to 8GHz, covering GSM, WIFI, BT, FM, VHF, UHF, and wireless audio/video transmission.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#FF7085]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<h4 className="text-white font-medium text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>Magnetic Field Detection</h4>
<p className="text-white/50 font-light text-sm mt-1">High-sensitivity magnetic sensor specifically designed for standby GPS trackers that don't transmit signals constantly.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-[#FF7085]/20 flex items-center justify-center mt-1 shrink-0">
<svg className="lucide lucide-check w-3.5 h-3.5 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-white font-medium text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>30ft Detection Range</h4>
<p className="text-white/50 font-light text-sm mt-1">Superior range compared to standard 10ft devices, allowing you to sweep entire rooms quickly.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white mb-12 tracking-tight text-center" style={{transition: 'outline 0.1s ease-in-out'}}>Peace of mind delivered.</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"Found a tracker on my rental car during a trip to Miami. It was tucked way up in the wheel well. This thing started beeping like crazy. Worth every penny."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>JD</div>
<div className="text-sm">
<div className="text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>James D.</div>
<div className="text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"As a flight attendant, I stay in random hotels constantly. The T66 is part of my uniform now. It's small, premium feeling, and incredibly accurate."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>SL</div>
<div className="text-sm">
<div className="text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Sarah L.</div>
<div className="text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>Verified Buyer</div>
</div>
</div>
</div>

<div className="bg-[#121212] p-6 rounded-2xl border border-white/5">
<div className="flex mb-4 text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-white/80 font-light text-lg mb-6">"Design is sleek, feels like an Apple product or something from a sci-fi movie. Detected a wifi camera I set up to test it instantly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>MR</div>
<div className="text-sm">
<div className="text-white font-medium" style={{transition: 'outline 0.1s ease-in-out'}}>Mike R.</div>
<div className="text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>Verified Buyer</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="pricing">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] rounded-full blur-[180px] opacity-[0.05] pointer-events-none bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<span className="font-medium tracking-wide text-sm uppercase mb-3 block text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>Q4 Flash Sale Ends Soon</span>
<h2 className="text-4xl md:text-5xl font-medium text-white tracking-tight mb-4" style={{transition: 'outline 0.1s ease-in-out'}}>Secure your privacy today.</h2>
<p className="text-white/50 text-lg">Free 5-7 Day Worldwide Shipping Included.</p>
</div>
<div className="grid lg:grid-cols-3 gap-8 items-start max-w-5xl mx-auto">

<div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h3 className="text-xl font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Starter</h3>
<p className="text-white/50 text-sm mt-1">For personal travel safety.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white" style={{transition: 'outline 0.1s ease-in-out'}}>$69.99</span>
<span className="text-white/40 line-through text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>$149.99</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 1x SafeSense™ T66
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Charging Cable
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> User Manual
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Buy Now
                    </button>
<div className="mt-4 text-center text-xs font-medium text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>Save 53%</div>
</div>

<div className="flex flex-col z-10 bg-[#121212] border-[#E42910] border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_0_30px_rgba(255,112,133,0.1)] scale-105" style={{transition: 'outline 0.1s ease-in-out'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide shadow-lg bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Most Popular
                    </div>
<div className="mb-4">
<h3 className="text-xl font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Partner Bundle</h3>
<p className="text-white/50 text-sm mt-1">Keep one, gift one.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white" style={{transition: 'outline 0.1s ease-in-out'}}>$119</span>
<span className="text-white/40 text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>/ bundle</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>  SafeSense™ T66 Devices
                        </li>
<li className="flex items-center gap-3 text-sm text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Free Priority Shipping
                        </li>
<li className="flex items-center gap-3 text-sm text-white" style={{transition: 'outline 0.1s ease-in-out'}}>
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 24/7 Support
                        </li>
</ul>
<button className="w-full py-3 rounded-lg text-white font-medium hover:bg-[#ff5670] transition-colors shadow-lg shadow-red-900/20 bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Add to Cart
                    </button>
<div className="mt-4 text-center text-xs text-white/50">Save additional 20%</div>
</div>

<div className="glass-panel p-8 rounded-2xl border border-white/10 flex flex-col hover:border-white/20 transition-all">
<div className="mb-4">
<h3 className="text-xl font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>Family Pack</h3>
<p className="text-white/50 text-sm mt-1">Total home &amp; car coverage.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-4xl font-semibold text-white" style={{transition: 'outline 0.1s ease-in-out'}}>$159</span>
<span className="text-white/40 text-lg" style={{transition: 'outline 0.1s ease-in-out'}}>/ bundle</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>  SafeSense™ T66 Devices
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Express 2-3 Day Shipping
                        </li>
<li className="flex items-center gap-3 text-sm text-white/70">
<svg className="lucide lucide-check w-4 h-4 text-red-600" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{transition: 'outline 0.1s ease-in-out'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Best Value
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/20 text-white font-medium hover:bg-white hover:text-black transition-colors" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Buy Now
                    </button>
<div className="mt-4 text-center text-xs font-medium text-red-600" style={{transition: 'outline 0.1s ease-in-out'}}>Save 30%</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-black pt-16 pb-8">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row justify-between items-start mb-12">
<div className="mb-8 md:mb-0">
<div className="flex items-center gap-1 mb-4">
<div className="w-5 h-5 border border-white/80 rounded flex items-center justify-center">
<div className="w-1 h-1 rounded-full bg-[#E42910]" style={{transition: 'outline 0.1s ease-in-out'}}></div>
</div>
<div className="ml-2 text-lg tracking-tight">
<span className="font-medium text-white" style={{transition: 'outline 0.1s ease-in-out'}}>SAFE</span><span className="font-light text-white/70">SENSE</span>
</div>
</div>
<p className="text-white/40 text-sm max-w-xs" style={{transition: 'outline 0.1s ease-in-out'}}>
                        Defining the future of personal privacy protection with military-grade technology.
                    </p>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-white font-medium mb-4 text-sm" style={{transition: 'outline 0.1s ease-in-out'}}>Product</h4>
<ul className="space-y-2 text-sm text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Features</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Technology</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4 text-sm" style={{transition: 'outline 0.1s ease-in-out'}}>Company</h4>
<ul className="space-y-2 text-sm text-white/40" style={{transition: 'outline 0.1s ease-in-out'}}>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>About</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#" style={{transition: 'outline 0.1s ease-in-out'}}>Privacy Policy</a></li>
</ul>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-white/30 text-xs">© 2024 SafeSense Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<svg className="lucide lucide-credit-card w-5 h-5 text-white/30" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<svg className="lucide lucide-lock w-4 h-4 text-white/30" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>
</footer>


    </>
  );
}
