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



        tailwind.config = {
            darkMode: 'class',
            theme: {
                extend: {
                    fontFamily: {
                        sans: ['Inter', 'sans-serif'],
                        display: ['Space Grotesk', 'sans-serif'],
                        mono: ['Space Mono', 'monospace'],
                    },
                    colors: {
                        brand: {
                            50: '#effef8',
                            400: '#34d399',
                            500: '#22c55e', // Vibrant Green (Electric)
                            600: '#16a34a',
                            900: '#064e3b',
                        },
                        accent: {
                            400: '#fb923c',
                            500: '#f97316', // Vivid Orange
                            600: '#ea580c',
                        }
                    },
                    screens: {
                        'xs': '475px',
                    }
                }
            }
        }
    


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
      
<meta charset="utf-8"/>
<meta content="width=device-width, initial-scale=1.0, maximum-scale=1.0, user-scalable=no" name="viewport"/>
<title>Ihsan Amplify - AI Front Desk</title>







<link href="https://fonts.googleapis.com" rel="preconnect"/>
<link crossorigin="" href="https://fonts.gstatic.com" rel="preconnect"/>
<link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600&amp;family=Space+Grotesk:wght@300;400;500;600;700&amp;family=Space+Mono:wght@400;700&amp;display=swap" rel="stylesheet"/>
<style>
        /* Base Settings */
        html, body {
            background-color: #030303;
            color: #ffffff;
            -webkit-font-smoothing: antialiased;
            overflow-x: hidden;
            width: 100%;
            height: 100%;
            display: flex;
            flex-direction: column;
        }

        /* Custom Scrollbar */
        ::-webkit-scrollbar { width: 6px; }
        ::-webkit-scrollbar-track { background: #0a0a0a; }
        ::-webkit-scrollbar-thumb { background: #333; border-radius: 3px; }
        ::-webkit-scrollbar-thumb:hover { background: #444; }

        /* Background Grid */
        .bg-grid-pattern {
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
            background-size: 40px 40px;
            mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
            -webkit-mask-image: radial-gradient(circle at center, black 40%, transparent 100%);
        }

        /* Glassmorphism Utilities */
        .glass-panel {
            background: rgba(255, 255, 255, 0.02);
            backdrop-filter: blur(12px);
            border: 1px solid rgba(255, 255, 255, 0.08);
            box-shadow: 0 4px 30px rgba(0, 0, 0, 0.1);
        }

        /* Animations */
        @keyframes slideUpFade {
            0% { opacity: 0; transform: translateY(20px); }
            100% { opacity: 1; transform: translateY(0); }
        }
        
        .animate-enter {
            animation: slideUpFade 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards;
            opacity: 0;
        }

        .delay-100 { animation-delay: 0.1s; }
        .delay-200 { animation-delay: 0.2s; }
        .delay-300 { animation-delay: 0.3s; }

        /* Chat Bubbles Animation */
        @keyframes chatPop {
            0% { opacity: 0; transform: scale(0.95) translateY(10px); }
            100% { opacity: 1; transform: scale(1) translateY(0); }
        }

        .chat-anim {
            opacity: 0;
            animation: chatPop 0.5s cubic-bezier(0.34, 1.56, 0.64, 1) forwards;
        }

        .chat-delay-1 { animation-delay: 0.8s; }
        .chat-delay-2 { animation-delay: 1.8s; }
        .chat-delay-3 { animation-delay: 3.0s; }
        .chat-delay-4 { animation-delay: 4.2s; }

        /* Neon Glows */
        .glow-text { text-shadow: 0 0 25px rgba(34, 197, 94, 0.4); } /* Green Glow for Instantly */
        .glow-box { box-shadow: 0 0 40px -10px rgba(34, 197, 94, 0.2); } /* Green Glow for Chat */
        
        /* Card Hover Glow */
        .card-glow:hover {
            box-shadow: 0 0 30px -5px rgba(255, 255, 255, 0.05);
            border-color: rgba(255,255,255,0.15);
        }

        /* FAQ Accordion Styles */
        details > summary {
            list-style: none;
        }
        details > summary::-webkit-details-marker {
            display: none;
        }
    </style>

<div className="fixed inset-0 z-0 pointer-events-none w-full h-full overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-40"></div>
<div className="absolute top-0 right-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-brand-500/10 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen animate-pulse duration-[4000ms]"></div>
<div className="absolute bottom-0 left-0 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-accent-500/10 rounded-full blur-[80px] md:blur-[100px] mix-blend-screen"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/5 bg-[#030303]/80 backdrop-blur-md w-full">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<div className="flex items-center gap-3">
<span className="font-display font-semibold text-lg tracking-tight whitespace-nowrap">Ihsan Amplify</span>
</div>
<div className="hidden md:flex items-center gap-8 text-xs font-mono text-neutral-400">
<a className="hover:text-white transition-colors" href="#">FEATURES</a>
<a className="hover:text-white transition-colors" href="#">INTEGRATIONS</a>
<a className="hover:text-white transition-colors" href="#">PRICING</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-neutral-300 hover:text-white transition-colors" href="#">Sign in</a>
<button className="bg-white text-black text-xs font-semibold px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors whitespace-nowrap">
                    Get Started
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col w-full z-10 pt-32 relative">

<div className="px-6 max-w-7xl mx-auto w-full grid lg:grid-cols-12 gap-16 lg:gap-8 mb-16 lg:mb-20">

<div className="lg:col-span-7 flex flex-col items-start pt-4 lg:pt-0 justify-center">
<div className="animate-enter inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent-500"></span>
</span>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">AI Front Desk for Combat Sports Gyms</span>
</div>
<h1 className="animate-enter delay-100 font-display text-4xl xs:text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tighter leading-[1.1] mb-6 text-transparent bg-clip-text bg-gradient-to-r from-white via-white to-neutral-500">
                    The 24/7 <span className="text-brand-500 glow-text">Enrollment Engine</span><br/>
                    for Combat Sports Gyms.
                </h1>
<p className="animate-enter delay-200 text-neutral-400 text-base sm:text-lg leading-relaxed max-w-xl mb-10 font-light">
                    Elite brand visuals meet 24/7 AI precision: we design the high-converting campaigns that stop the scroll, while our AI agents answer, qualify, and book your trials 24/7. Never miss a membership opportunity again.
                </p>
<div className="animate-enter delay-300 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<button className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all bg-accent-500 rounded-full hover:bg-accent-400 hover:shadow-[0_0_20px_-5px_rgba(249,115,22,0.5)]">
                        Book a quick call
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 ml-2 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="animate-enter delay-300 mt-12 pt-8 border-t border-white/5 w-full max-w-md flex flex-wrap gap-y-3 justify-between text-neutral-500">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-mono">24/7 AVAILABILITY</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-mono">INSTANT SYNC</span>
</div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="lucide lucide-check-circle-2 w-4 h-4 text-accent-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-xs font-mono">NO SETUP FEES</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 w-full max-w-md mx-auto lg:max-w-none flex items-center">
<div className="absolute inset-0 bg-gradient-to-tr from-brand-500/20 to-neutral-500/10 rounded-full blur-[60px] transform rotate-12 scale-90 -z-10"></div>
<div className="glass-panel rounded-2xl p-1 glow-box animate-enter delay-200 transform lg:rotate-[-2deg] lg:hover:rotate-0 transition-transform duration-500 w-full">
<div className="bg-[#050505] rounded-xl overflow-hidden border border-white/5">

<div className="px-4 py-3 border-b border-white/5 bg-white/[0.02] flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-8 h-8 rounded-full bg-brand-500/10 border border-brand-500/20 flex items-center justify-center">
<svg aria-hidden="true" className="lucide lucide-bot w-4 h-4 text-brand-500" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div className="absolute -bottom-0.5 -right-0.5 w-2.5 h-2.5 bg-brand-500 border-2 border-black rounded-full"></div>
</div>
<div className="">
<div className="text-xs font-medium text-white">Amplify Assistant</div>
<div className="text-[10px] text-brand-500 font-mono">Active Now</div>
</div>
</div>
<svg aria-hidden="true" className="lucide lucide-more-horizontal w-4 h-4 text-neutral-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>

<div className="p-4 sm:p-5 h-[350px] sm:h-[400px] flex flex-col justify-end space-y-4 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-100 overflow-y-auto">

<div className="chat-anim chat-delay-1 flex justify-end">
<div className="bg-neutral-800 text-neutral-200 text-xs px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
                                    Hey, do you have Muay Thai classes for beginners tonight?
                                </div>
</div>

<div className="chat-anim chat-delay-2 flex justify-start items-end gap-2">
<div className="w-6 h-6 rounded-full bg-brand-500/10 flex items-center justify-center flex-shrink-0">
<svg aria-hidden="true" className="lucide lucide-zap w-3 h-3 text-brand-500" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div className="bg-brand-900/20 text-brand-50 text-xs px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-brand-500/20">
                                    Yes! We have "Fundamentals Muay Thai" at 6:00 PM. It's perfect for first-timers.
                                </div>
</div>

<div className="chat-anim chat-delay-3 flex justify-start items-end gap-2">
<div className="w-6 h-6 opacity-0 flex-shrink-0"></div> 
<div className="bg-brand-900/20 text-brand-50 text-xs px-4 py-2.5 rounded-2xl rounded-tl-sm max-w-[90%] border border-brand-500/20">
                                    Want me to save you a spot for a free trial?
                                </div>
</div>

<div className="chat-anim chat-delay-4 flex justify-end">
<div className="bg-neutral-800 text-neutral-200 text-xs px-4 py-2.5 rounded-2xl rounded-tr-sm max-w-[85%] border border-white/5">
                                    That would be great.
                                </div>
</div>
</div>

<div className="p-3 border-t border-white/5 bg-white/[0.01]">
<div className="flex items-center gap-3 bg-black/50 border border-white/10 rounded-lg px-3 py-2">
<svg aria-hidden="true" className="lucide lucide-plus w-4 h-4 text-neutral-500 flex-shrink-0" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
<div className="h-4 w-[1px] bg-white/10 flex-shrink-0"></div>
<input className="bg-transparent border-none outline-none text-xs text-white w-full placeholder-neutral-600 font-mono" disabled="" placeholder="Type a message..." type="text"/>
<svg aria-hidden="true" className="lucide lucide-send w-3.5 h-3.5 text-brand-500 flex-shrink-0" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>

<section className="animate-enter delay-300 w-full px-6 mb-24 lg:mb-32 flex justify-center">

<div className="relative group w-full max-w-[400px] aspect-[4/5]">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-500/10 via-white/5 to-accent-500/10 rounded-2xl blur opacity-20 group-hover:opacity-40 transition duration-1000 group-hover:duration-200"></div>
<div className="overflow-hidden transition-all duration-300 hover:bg-white/[0.02] flex flex-col text-center bg-[#050505]/80 w-full h-full rounded-2xl pt-8 pr-8 pb-8 pl-8 relative backdrop-blur-sm items-center justify-center"><img alt="Container background" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2e9a6748-3c9f-4720-885d-9a764797676d_800w.png"/>
<div className="flex flex-col gap-4 items-center justify-center">
<span className="text-neutral-500 text-[10px] font-mono uppercase tracking-widest">1080x1350 • Portrait</span>
</div>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 py-24 border-t border-white/5 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-brand-500/5 blur-[100px] rounded-full pointer-events-none"></div>
<div className="relative z-10 text-center mb-16">
<h3 className="text-accent-500 font-mono text-xs tracking-widest uppercase mb-4 inline-flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
                    Omni-Channel Precision
                </h3>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-display tracking-tighter text-white max-w-3xl mx-auto leading-[1.15]">
<span className="block font-bold text-white mb-2">Your New AI Employee: Always On.</span>
<span className="block font-medium text-transparent bg-clip-text bg-gradient-to-r from-white/90 via-white/80 to-white/40">Never Misses a Lead.</span>
</h2>
<p className="mt-6 text-neutral-400 max-w-2xl mx-auto text-base font-light">
                    Capture leads from every angle. Whether they see your high-impact brand visuals, slide into your DMs, text your number, or visit your site, Ihsan Amplify handles the entire conversation. Powered by Newo.ai, our system moves prospects from 'just looking' to 'booked trial' with sub-1-second precision—ensuring no opportunity is ever missed.
                </p>
</div>

<div className="grid md:grid-cols-3 gap-6 relative z-10">

<div className="group relative overflow-hidden rounded-2xl border border-brand-500/20 bg-white/[0.02] p-8 shadow-[0_0_20px_-5px_rgba(34,197,94,0.1)] transition-all duration-300 hover:border-brand-500/40 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.2)]">
<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative z-10">
<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-500 transition-transform duration-300 group-hover:scale-110">
<svg aria-hidden="true" className="lucide lucide-message-square h-6 w-6" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</div>
<h4 className="mb-2 font-sans text-lg font-semibold text-white tracking-tight">24/7 Virtual Closer</h4>
<p className="text-sm leading-relaxed text-white/70">
                            Embed an intelligent agent on your site to turn visitors into booked trials instantly. Powered by Newo.ai, it responds in under 1 second and is fully fluent in combat sports terminology.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/30 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)]">

<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>

<div className="absolute top-4 right-4 px-2.5 py-1 bg-brand-500/10 border border-brand-500/20 rounded-full flex items-center gap-1.5">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-500 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-brand-500"></span>
</span>
<span className="text-[10px] font-mono text-brand-400 uppercase tracking-wider font-medium">Lead Recovery</span>
</div>
<div className="relative z-10">

<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-500 transition-transform duration-300 group-hover:scale-110">
<svg aria-hidden="true" className="lucide lucide-smartphone h-6 w-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>

<h4 className="mb-2 font-sans text-lg font-semibold text-white tracking-tight">Instant Lead Recovery</h4>

<p className="text-sm leading-relaxed text-white/70">
                            Missed calls are missed memberships. Ihsan Amplify texts back in under 1 second, answering questions and booking trials while you stay focused on the mats. Powered by <span className="text-white font-medium">Newo.ai</span>.
                        </p>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/30 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.15)]">

<div className="absolute inset-0 bg-gradient-to-b from-brand-500/5 to-transparent opacity-0 transition-opacity duration-500 group-hover:opacity-100"></div>
<div className="relative z-10">

<div className="mb-6 flex h-12 w-12 items-center justify-center rounded-lg bg-brand-500/10 border border-brand-500/20 text-brand-500 transition-transform duration-300 group-hover:scale-110">
<svg aria-hidden="true" className="lucide lucide-instagram h-6 w-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</div>

<h4 className="mb-2 font-sans text-lg font-semibold text-white tracking-tight">Social DM Closer</h4>

<p className="text-sm leading-relaxed text-white/70">
                            Stop letting inquiries sit in your inbox. Ihsan Amplify syncs with Instagram and Facebook to answer DMs 24/7, moving followers from your feed directly into your gym. Powered by <span className="text-white font-medium">Newo.ai</span>.
                        </p>
</div>
</div>
</div>
</section>

<section className="w-full relative py-24 border-t border-white/5 bg-[#030303]">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-accent-500/5 rounded-full blur-[120px] pointer-events-none opacity-50"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center relative z-10">

<div className="flex flex-col items-start">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-accent-500/10 border border-accent-500/20 mb-6">
<span className="w-1.5 h-1.5 rounded-full bg-accent-500 animate-pulse"></span>
<span className="font-mono text-[10px] text-accent-500 uppercase tracking-widest font-semibold">Creative &amp; Tech Fusion</span>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-display font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                        Art Direction That Fuels 
                        <span className="text-transparent bg-clip-text bg-gradient-to-r from-accent-400 to-accent-600">Your AI Engine.</span>
</h2>
<p className="text-neutral-400 text-base md:text-lg font-light leading-relaxed mb-8 max-w-xl">
                        We don’t just provide the tech; we provide the visual authority that drives the leads. Our marketing campaigns and elite art direction work hand-in-hand with your 24/7 AI agents to convert more students.
                    </p>
<button className="bg-accent-500 text-white font-semibold text-sm px-8 py-4 rounded-full hover:bg-accent-400 transition-all hover:-translate-y-1 hover:shadow-[0_10px_40px_-10px_rgba(249,115,22,0.4)] flex items-center gap-2 group">
                        Book Your Call Instantly
                        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="space-y-4 w-full">

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-500/30 transition-all duration-300 group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-scan-eye w-6 h-6 text-accent-500" data-lucide="scan-eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2"></path><path d="M17 3h2a2 2 0 0 1 2 2v2"></path><path d="M21 17v2a2 2 0 0 1-2 2h-2"></path><path d="M7 21H5a2 2 0 0 1-2-2v-2"></path><circle cx="12" cy="12" r="1"></circle><path d="M18.944 12.33a1 1 0 0 0 0-.66 7.5 7.5 0 0 0-13.888 0 1 1 0 0 0 0 .66 7.5 7.5 0 0 0 13.888 0"></path></svg>
</div>
<div>
<h3 className="text-white font-display font-semibold text-lg mb-2">Visual Design Audit</h3>
<p className="text-neutral-400 text-sm leading-relaxed">A deep dive into your current brand to ensure it matches the premium performance of your AI employee.</p>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-500/30 transition-all duration-300 group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-layers w-6 h-6 text-accent-500" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
</div>
<div>
<h3 className="text-white font-display font-semibold text-lg mb-2">End-to-End Campaigns</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Integrated photography, videography, and graphic design built to stop the scroll and trigger the AI conversation.</p>
</div>
</div>
</div>

<div className="p-6 md:p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] hover:border-accent-500/30 transition-all duration-300 group">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-xl bg-accent-500/10 border border-accent-500/20 flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-transform duration-300">
<svg aria-hidden="true" className="lucide lucide-package w-6 h-6 text-accent-500" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div>
<h3 className="text-white font-display font-semibold text-lg mb-2">Custom Creative Packages</h3>
<p className="text-neutral-400 text-sm leading-relaxed">Tailored marketing assets specifically designed for the combat sports industry.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full border-t border-white/5 bg-[#030303] relative py-24 overflow-hidden">

<div className="absolute inset-0 bg-grid-pattern opacity-30 pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-brand-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-accent-500/5 rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/[0.03] border border-white/10 mb-4">
<span className="w-1.5 h-1.5 rounded-full bg-brand-500"></span>
<span className="font-mono text-[10px] text-neutral-400 uppercase tracking-widest">Client Success</span>
</div>
<h2 className="text-3xl md:text-5xl font-display font-medium tracking-tighter text-white">
                        Proven on the Mats
                    </h2>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/30 hover:bg-white/[0.03]">
<div>
<div className="mb-6 text-brand-500">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 fill-brand-500/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-lg font-sans font-medium text-white mb-4 tracking-tight">The Revenue Recovery</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-8">
<span className="text-brand-500">"</span>I used to lose 5-10 leads a week because I was mid-roll when the phone rang. Now, the AI agent answers every call instantly and books them before I even step off the mats. It turned my missed calls into actual memberships.<span className="text-brand-500">"</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="font-mono text-xs text-brand-500 font-bold">B</span>
</div>
<span className="text-xs font-mono text-white/80">BJJ Black Belt &amp; Gym Owner</span>
</div>

<span className="absolute bottom-3 right-4 text-[9px] text-white/5 font-mono uppercase tracking-widest pointer-events-none group-hover:text-white/10 transition-colors">Revenue-Driven Creative</span>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-2xl border border-brand-500/20 bg-white/[0.03] p-8 shadow-[0_0_20px_-5px_rgba(34,197,94,0.05)] transition-all duration-300 hover:border-brand-500/40 hover:shadow-[0_0_30px_-5px_rgba(34,197,94,0.1)]">
<div className="">
<div className="mb-6 text-brand-500">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 fill-brand-500/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-lg font-sans font-medium text-white mb-4 tracking-tight">The Speed Advantage</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-8">
<span className="text-brand-500">"</span>In this industry, if you don't answer in minutes, they call the gym down the street. Ihsan Amplify's sub-1-second response time ensures we are the first to talk to every lead. No more cold leads or 48-hour wait times.<span className="text-brand-500">"</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="font-mono text-xs text-brand-500 font-bold">M</span>
</div>
<span className="text-xs font-mono text-white/80">Muay Thai Head Coach</span>
</div>

<span className="absolute bottom-3 right-4 text-[9px] text-white/5 font-mono uppercase tracking-widest pointer-events-none group-hover:text-white/10 transition-colors">Revenue-Driven Creative</span>
</div>
</div>

<div className="group relative flex flex-col justify-between rounded-2xl border border-white/10 bg-white/[0.02] p-8 transition-all duration-300 hover:border-brand-500/30 hover:bg-white/[0.03]">
<div>
<div className="mb-6 text-brand-500">
<svg aria-hidden="true" className="lucide lucide-quote w-8 h-8 fill-brand-500/10" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
</div>
<h3 className="text-lg font-sans font-medium text-white mb-4 tracking-tight">The Staff Freedom</h3>
<p className="text-neutral-400 font-light leading-relaxed mb-8">
<span className="text-brand-500">"</span>My front desk staff was buried in manual scheduling and follow-ups. Now, the AI handles the entire booking flow into our CRM. My team can finally focus on what they do best: coaching and building community.<span className="text-brand-500">"</span>
</p>
</div>
<div className="flex items-center justify-between border-t border-white/5 pt-6 mt-auto">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="font-mono text-xs text-brand-500 font-bold">G</span>
</div>
<span className="text-xs font-mono text-white/80">MMA Gym Manager</span>
</div>

<span className="absolute bottom-3 right-4 text-[9px] text-white/5 font-mono uppercase tracking-widest pointer-events-none group-hover:text-white/10 transition-colors">Revenue-Driven Creative</span>
</div>
</div>
</div>
</div>
</section>

<section className="text-neutral-900 bg-white w-full border-neutral-200 border-t pt-24 pb-24 relative">
<div className="max-w-4xl mx-auto px-6">

<h2 className="text-3xl font-sans font-bold text-neutral-900 mb-12 tracking-tight">Common Questions</h2>

<div className="space-y-3 mb-24">

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>How long does setup take?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Setup is incredibly fast. We can have your AI front desk configured, trained on your specific schedule, and live handling calls within 24-48 hours.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>Does this replace my front desk staff?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            No, it empowers them. Instead of being tied to the phone handling repetitive questions, your staff can focus on building relationships with members in the gym and closing high-value sales. The AI handles the volume; your team handles the connection.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>Does it integrate with my gym software?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Yes. We integrate seamlessly with major gym management platforms and CRMs to ensure leads are booked directly into your calendar and synced with your database in real-time.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>What if it doesn't know the answer?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Our AI is trained to handle complex scenarios, but if it encounters a question it can't answer, it politely gathers the caller's information and escalates the inquiry to a human staff member immediately.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span className="">Can it handle multiple calls at once?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Yes. Unlike a human receptionist who can only take one call at a time, our system has unlimited concurrency. It can handle 10, 50, or 100 simultaneous calls without missing a beat.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>Does it speak other languages?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Absolutely. The system is multilingual and can converse fluently in over 30 languages, allowing you to serve a diverse community without language barriers.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span className="">How much is the AI Agent setup?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            We offer out of the box AI Agent setup completely FREE.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>What subscription should I choose?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Our experts will help you choose the optimal subscription based on your call/ text volume.
                        </div>
</details>

<details className="group bg-neutral-50 border border-neutral-200 rounded-lg open:bg-neutral-100 open:border-brand-500/30 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer list-none text-neutral-900 font-medium hover:text-brand-600 transition-colors">
<span>Is there a free trial?</span>
<svg aria-hidden="true" className="lucide lucide-chevron-down w-5 h-5 text-neutral-400 group-open:rotate-180 group-open:text-brand-500 transition-transform duration-300" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<div className="px-6 pb-6 text-neutral-600 text-sm leading-relaxed">
                            Yes, you try out the system completely FREE during the trial period.
                        </div>
</details>
</div>

<div className="flex w-full mb-16 justify-center">
<div className="group relative w-full max-w-[400px] aspect-[1080/1350] rounded-3xl bg-neutral-50 hover:bg-neutral-100 transition-all duration-300 flex flex-col items-center justify-center gap-4 cursor-pointer overflow-hidden shadow-lg shadow-neutral-100"><img alt="Container background" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cc130897-f661-4977-9cd8-2e68c17ef4c5_3840w.png"/>
<input className="cursor-pointer z-10 opacity-0 w-full h-full absolute top-0 right-0 bottom-0 left-0" type="file"/>
</div>
</div>

<div className="relative overflow-hidden rounded-3xl border border-white/10 bg-[#050505] p-8 md:p-16 text-center shadow-[0_20px_60px_-10px_rgba(0,0,0,0.3)]">

<div className="absolute top-0 right-0 w-64 h-64 bg-accent-500/10 rounded-full blur-[80px] pointer-events-none"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-500/5 rounded-full blur-[80px] pointer-events-none"></div>
<div className="relative z-10 flex flex-col items-center">

<h2 className="font-display text-3xl md:text-5xl font-bold tracking-tighter text-white mb-6">
                            Art Direction &amp; <span className="text-accent-500">AI Precision:</span> Managed.
                        </h2>

<p className="text-neutral-300 mb-8 max-w-2xl mx-auto text-base md:text-lg leading-relaxed font-light">
                            Elite branding isn't just a look—it's a system. From professional art direction to AI-driven enrollment, we keep your gym organized and growing. <span className="text-white font-medium">No forms. Just results.</span>
</p>

<a className="text-accent-500 font-mono text-lg font-medium mb-10 hover:text-accent-400 transition-colors border-b border-accent-500/30 hover:border-accent-500 pb-0.5" href="mailto:contact@ihsanamplify.com">
                            contact@ihsanamplify.com
                        </a>

<a className="bg-white text-black px-10 py-4 rounded-full font-bold text-sm md:text-base hover:bg-neutral-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-2 shadow-lg shadow-white/5" href="https://books.zoho.com" target="_blank">
                            Book a Strategy Call
                            <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>
</main>

<footer className="w-full relative z-10 pt-8 pb-24 md:py-12 px-6 border-t border-white/5 bg-[#030303]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">

<div className="flex flex-col md:flex-row items-center gap-3 md:gap-6">
<span className="font-display font-semibold text-lg text-white tracking-tight">Ihsan Amplify</span>
<span className="hidden md:block w-px h-4 bg-white/10"></span>
<div className="flex items-center gap-2 text-neutral-500 text-xs font-mono">
<span>Powered by</span>
<span className="text-white font-medium">Newo.ai</span>
</div>
</div>

<div className="flex items-center gap-4">
<a className="text-neutral-400 hover:text-brand-500 transition-colors" href="#">
<iconify-icon height="20" icon="ri:instagram-line" width="20"></iconify-icon>
</a>
<a className="text-neutral-400 hover:text-accent-500 transition-colors" href="#">
<iconify-icon height="20" icon="ri:facebook-box-line" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>


    </>
  );
}
