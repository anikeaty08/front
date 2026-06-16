import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Render Lucide icons
      lucide.createIcons();

      // Text animation for third screen
      const fullText = "Design a sleek modern workspace with floating holographic displays. Include ambient blue and purple lighting with minimalist furniture and advanced technology interfaces seamlessly integrated into the environment.";
      const animatedTextEl = document.getElementById('animated-text');
      let currentIndex = 0;

      function typeText() {
        if (currentIndex < fullText.length) {
          animatedTextEl.textContent = fullText.substring(0, currentIndex + 1);
          currentIndex++;
          setTimeout(typeText, 50); // Typing speed
        } else {
          // Reset after a delay
          setTimeout(() => {
            currentIndex = 0;
            animatedTextEl.textContent = '';
            setTimeout(typeText, 500);
          }, 2000);
        }
      }

      // Start the animation
      typeText();

      // Simple listening toggle for hero mic
      const heroBtn = document.getElementById('mic-hero');
      if (heroBtn) {
        heroBtn.addEventListener('click', () => {
          heroBtn.classList.toggle('animate-pulse');
        });
      }

      // CTA mic toggles quick subtle glow
      const ctaBtn = document.getElementById('mic-cta');
      if (ctaBtn) {
        ctaBtn.addEventListener('click', () => {
          ctaBtn.classList.add('ring-2','ring-cyan-400/40');
          setTimeout(() => ctaBtn.classList.remove('ring-2','ring-cyan-400/40'), 600);
        });
      }

      // Live mic toggles listening state and ring animation
      const liveBtn = document.getElementById('mic-live');
      const listenState = document.getElementById('listen-state');
      const ring1 = document.getElementById('ring-1');
      const ring2 = document.getElementById('ring-2');
      const ring3 = document.getElementById('ring-3');
      let listening = true;

      const setListening = (on) => {
        listening = on;
        if (on) {
          ring1 && ring1.classList.add('animate-ping');
          ring2 && ring2.classList.add('animate-pulse');
          ring3 && ring3.classList.add('animate-pulse');
          listenState.textContent = 'Listening...';
        } else {
          ring1 && ring1.classList.remove('animate-ping');
          ring2 && ring2.classList.remove('animate-pulse');
          ring3 && ring3.classList.remove('animate-pulse');
          listenState.textContent = 'Paused';
        }
      };

      setListening(true);

      if (liveBtn) {
        liveBtn.addEventListener('click', () => setListening(!listening));
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="min-h-screen w-full flex items-center justify-center">

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[900px] h-[900px] bg-gradient-to-br from-cyan-400/20 via-blue-500/10 to-cyan-500/20 blur-3xl rounded-full"></div>
</div>


<section className="mx-auto max-w-[1400px] px-4 sm:px-8 py-8">
<div className="grid gap-8 xl:gap-10 grid-cols-1 lg:grid-cols-3 place-items-center">

<div className="w-[390px] max-w-full entrance-animation-1">
<div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]">
<div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative neon-border">

<div className="flex items-center justify-between px-8 pt-4 pb-2">
<div className="text-white text-sm font-sans" style={{}}>9:41</div>
<div className="w-6 h-5 rounded-full bg-neutral-800/70"></div>
<div className="flex items-center gap-1 text-white">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-6 h-3 rounded-sm border border-white/60 relative">
<div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
<div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm"></div>
</div>
</div>
</div>
<div className="relative flex flex-col h-full pt-12 pr-8 pb-8 pl-8">

<div className="relative mx-auto mt-12 w-72 h-72 rounded-full overflow-hidden">
<span className="absolute inset-0 ring-[40px] ring-cyan-400/20 z-10 rounded-full"></span>
<video autoplay="" className="w-full h-full object-cover rounded-full" loop="" muted="" playsinline="" style={{filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'}}>
<source src="https://cdn.midjourney.com/video/6f26b771-e923-4933-b969-0ea6f7611832/0.mp4" type="video/mp4"/>
</video>
</div>


<div className="flex-1 flex flex-col justify-center mt-6">
<h2 className="text-[38px] leading-[1.05] text-white/90 tracking-tight font-manrope" style={{}}>
      Experience the future with Aura
    </h2>
<p className="text-[16px] leading-6 text-neutral-400 mt-4 font-sans" style={{}}>
  Transform your workflow with intelligent voice commands and seamless AI integration.
</p>

<div className="mt-8 flex items-center gap-2">
<span className="w-8 h-1.5 rounded-full bg-cyan-400/80"></span>
<span className="w-2 h-1.5 rounded-full bg-neutral-700"></span>
<span className="w-2 h-1.5 rounded-full bg-neutral-700"></span>
<span className="w-2 h-1.5 rounded-full bg-neutral-700"></span>
</div>
</div>

<div className="space-y-3 mb-8">
<button className="w-full h-14 rounded-2xl font-sans" style={{-Cyan: '#00D4FF', fontSize: '15px', padding: '0.7em 2.7em', letterSpacing: '0.06em', position: 'relative', fontFamily: 'inherit', borderRadius: '0.6em', overflow: 'hidden', lineHeight: '1.4em', border: '2px solid var(--cyan)', background: 'linear-gradient(to right, rgba(0, 212, 255, 0.4) 1%, rgba(0, 212, 255, 0.6) 40%, rgba(0, 212, 255, 0.6) 60%, rgba(0, 212, 255, 0.4) 100%)', color: 'white', boxShadow: 'rgba(0, 212, 255, 0.4) 0px 0px 10px inset, rgba(0, 212, 255, 0.1) 0px 0px 9px 3px'}}>Sign Up</button>
<button className="w-full h-14 rounded-2xl font-sans" onmouseout="this.style.background='linear-gradient(to right, rgba(0, 180, 255, 0.1) 1%, transparent 40%,transparent 60% , rgba(0, 180, 255, 0.1) 100%)'; this.style.boxShadow='inset 0 0 10px rgba(0, 180, 255, 0.4), 0 0 9px 3px rgba(0, 180, 255, 0.1)'; this.style.transform='scale(1)'" onmouseover="this.style.background='linear-gradient(to right, rgba(0, 180, 255, 0.2) 1%, rgba(0, 180, 255, 0.1) 40%, rgba(0, 180, 255, 0.1) 60%, rgba(0, 180, 255, 0.2) 100%)'; this.style.boxShadow='inset 0 0 15px rgba(0, 180, 255, 0.6), 0 0 15px 5px rgba(0, 180, 255, 0.2)'; this.style.transform='scale(1.02)'" style={{-Blue: '#00B4FF', fontSize: '15px', padding: '0.7em 2.7em', letterSpacing: '0.06em', position: 'relative', fontFamily: 'inherit', borderRadius: '0.6em', overflow: 'hidden', lineHeight: '1.4em', border: '2px solid var(--blue)', background: 'linear-gradient(to right, rgba(0, 180, 255, 0.1) 1%, transparent 40%, transparent 60%, rgba(0, 180, 255, 0.1) 100%)', color: 'var(--blue)', boxShadow: 'rgba(0, 180, 255, 0.4) 0px 0px 10px inset, rgba(0, 180, 255, 0.1) 0px 0px 9px 3px', cursor: 'pointer'}}>
Sign in
</button>
</div>

<div className="w-36 h-1 bg-white/30 rounded-full mx-auto"></div>
</div>
</div>
</div>
</div>

<div className="w-[390px] max-w-full entrance-animation-2">
<div className="relative shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 rounded-[3rem] pt-[2px] pr-[2px] pb-[2px] pl-[2px]">
<div className="overflow-hidden h-[844px] relative bg-black rounded-[2.9rem] neon-border">

<div className="flex items-center justify-between px-8 pt-4 pb-2">
<div className="text-white text-sm font-sans" style={{}}>9:41</div>
<div className="w-6 h-5 rounded-full bg-neutral-800/70"></div>
<div className="flex items-center gap-1 text-white">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-6 h-3 rounded-sm border border-white/60 relative">
<div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
<div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm"></div>
</div>
</div>
</div>
<div className="relative flex flex-col h-full pt-4 pr-6 pb-6 pl-6">

<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-3">
<div className="relative p-[2px] rounded-full bg-gradient-to-tr from-cyan-400 to-blue-500">
<img alt="Profile" className="h-8 w-8 rounded-full object-cover" src="https://images.unsplash.com/photo-1548142813-c348350df52b?q=80&amp;w=300&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h2 className="text-[18px] text-white tracking-tight font-sans" style={{}}>Syncra AI</h2>
<p className="text-xs text-neutral-400 font-sans" style={{}}>Your AI Assistant</p>
</div>
</div>
<button className="size-8 rounded-full bg-neutral-900/60 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-plus w-4 h-4 text-neutral-300" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>

<div className="flex-1 space-y-4 mb-6 overflow-y-auto">
<div className="flex items-center justify-between">
<h3 className="text-sm text-neutral-300 font-sans" style={{}}>Recent Conversations</h3>
<button className="text-xs text-cyan-400 font-sans" style={{}}>See All</button>
</div>

<div className="space-y-3">

<div className="text-xs text-neutral-500 px-1 font-sans" style={{}}>Today</div>
<div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors">
<div className="flex items-start gap-3">
<div className="size-2 rounded-full bg-cyan-400 mt-2 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-neutral-200 line-clamp-1 font-sans" style={{}}>Create marketing campaign for new product</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-2 font-sans" style={{}}>I need help creating a comprehensive marketing strategy for our upcoming AI-powered productivity tool...</p>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-neutral-600 font-sans" style={{}}>2 hours ago</span>
<span className="text-xs text-cyan-400 font-sans" style={{}}>23 messages</span>
</div>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors">
<div className="flex items-start gap-3">
<div className="size-2 rounded-full bg-blue-500 mt-2 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-neutral-200 line-clamp-1 font-sans" style={{}}>Code review and optimization</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-2 font-sans" style={{}}>Can you help me review this React component and suggest performance improvements?</p>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-neutral-600 font-sans" style={{}}>4 hours ago</span>
<span className="text-xs text-blue-400 font-sans" style={{}}>18 messages</span>
</div>
</div>
</div>
</div>

<div className="text-xs text-neutral-500 px-1 pt-2 font-sans" style={{}}>Yesterday</div>
<div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors">
<div className="flex items-start gap-3">
<div className="size-2 rounded-full bg-sky-400 mt-2 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-neutral-200 line-clamp-1 font-sans" style={{}}>Design system documentation</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-2 font-sans" style={{}}>Help me write comprehensive documentation for our design system components...</p>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-neutral-600 font-sans" style={{}}>Yesterday</span>
<span className="text-xs text-sky-400 font-sans" style={{}}>31 messages</span>
</div>
</div>
</div>
</div>
<div className="p-3 rounded-xl bg-neutral-900/40 border border-white/5 hover:border-cyan-400/20 transition-colors">
<div className="flex items-start gap-3">
<div className="size-2 rounded-full bg-indigo-400 mt-2 flex-shrink-0"></div>
<div className="flex-1 min-w-0">
<p className="text-[13px] text-neutral-200 line-clamp-1 font-sans" style={{}}>Business plan draft</p>
<p className="text-xs text-neutral-500 mt-1 line-clamp-2 font-sans" style={{}}>I need assistance drafting a business plan for my startup idea in the fintech space...</p>
<div className="flex items-center justify-between mt-2">
<span className="text-xs text-neutral-600 font-sans" style={{}}>Yesterday</span>
<span className="text-xs text-indigo-400 font-sans" style={{}}>45 messages</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mb-4 p-4 rounded-xl border border-white/10 bg-neutral-900/30">
<h4 className="text-xs text-neutral-400 mb-3 px-1 font-sans" style={{}}>Quick Actions</h4>
<div className="grid grid-cols-4 gap-2">
<button className="p-3 rounded-xl bg-gradient-to-b from-cyan-400/10 to-cyan-400/5 border border-cyan-400/20 flex flex-col items-center gap-1.5 hover:border-cyan-400/30 transition-colors">
<svg className="lucide lucide-image w-4 h-4 text-cyan-400" data-lucide="image" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><circle cx="9" cy="9" r="2"></circle><path d="m21 15-3.086-3.086a2 2 0 0 0-2.828 0L6 21"></path></svg>
<span className="text-xs text-cyan-400 font-sans" style={{}}>Image</span>
</button>
<button className="p-3 rounded-xl bg-gradient-to-b from-blue-400/10 to-blue-400/5 border border-blue-400/20 flex flex-col items-center gap-1.5 hover:border-blue-400/30 transition-colors">
<svg className="lucide lucide-file-text w-4 h-4 text-blue-400" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-xs text-blue-400 font-sans" style={{}}>Text</span>
</button>
<button className="p-3 rounded-xl bg-gradient-to-b from-sky-400/10 to-sky-400/5 border border-sky-400/20 flex flex-col items-center gap-1.5 hover:border-sky-400/30 transition-colors">
<svg className="lucide lucide-code w-4 h-4 text-sky-400" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<span className="text-xs text-sky-400 font-sans" style={{}}>Code</span>
</button>
<button className="p-3 rounded-xl bg-gradient-to-b from-indigo-400/10 to-indigo-400/5 border border-indigo-400/20 flex flex-col items-center gap-1.5 hover:border-indigo-400/30 transition-colors">
<svg className="lucide lucide-lightbulb w-4 h-4 text-indigo-400" data-lucide="lightbulb" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 14c.2-1 .7-1.7 1.5-2.5 1-.9 1.5-2.2 1.5-3.5A6 6 0 0 0 6 8c0 1 .2 2.2 1.5 3.5.7.7 1.3 1.5 1.5 2.5"></path><path d="M9 18h6"></path><path d="M10 22h4"></path></svg>
<span className="text-xs text-indigo-400 font-sans" style={{}}>Ideas</span>
</button>
</div>
</div>

<div className="relative mb-6">

<div className="absolute inset-0 -z-10 blur-xl bg-gradient-to-r from-blue-400/30 via-cyan-400/25 to-sky-500/30 rounded-2xl scale-110"></div>
<div className="absolute inset-0 -z-10 blur-sm bg-gradient-to-r from-cyan-400/20 via-blue-400/15 to-sky-400/20 rounded-2xl"></div>
<button className="group relative w-full h-14 rounded-2xl bg-gradient-to-r from-neutral-900/90 via-neutral-800/80 to-neutral-900/90 border-2 border-cyan-400/40 text-white font-semibold text-[15px] flex items-center justify-center gap-3 hover:border-cyan-400/70 hover:bg-gradient-to-r hover:from-neutral-800/95 hover:via-neutral-700/85 hover:to-neutral-800/95 transition-all duration-300 overflow-hidden shadow-lg shadow-cyan-400/20" style={{backdropFilter: 'blur(12px)'}}>

<div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-gradient-to-r from-cyan-400/8 via-blue-400/12 to-sky-400/8"></div>

<div className="relative z-10 p-1.5 rounded-full bg-gradient-to-br from-cyan-400 to-blue-500 group-hover:scale-110 transition-transform duration-300">
<svg className="lucide lucide-mic w-4 h-4 text-white" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<span className="relative z-10 group-hover:text-cyan-100 transition-colors duration-300 font-sans" style={{}}>Tap here to start with Aura</span>

<div className="absolute inset-0 rounded-2xl bg-gradient-to-r from-transparent via-white/8 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-1000 ease-out"></div>
</button>
</div>

<div className="flex items-center justify-center gap-2 mb-8">
<div className="w-2 h-2 bg-cyan-400 rounded-full animate-pulse"></div>
<span className="text-xs text-neutral-400 font-sans" style={{}}>Ready to assist</span>
</div>

<div className="w-36 h-1 bg-white/30 rounded-full mx-auto"></div>
</div>
</div>
</div>
</div>

<div className="w-[390px] max-w-full entrance-animation-3">
<div className="relative rounded-[3rem] p-[2px] bg-gradient-to-b from-cyan-400/60 via-blue-500/40 to-cyan-500/60 shadow-[0_20px_80px_-12px_rgba(6,182,212,0.4)]">
<div className="rounded-[2.9rem] bg-black overflow-hidden h-[844px] relative neon-border">

<div className="flex items-center justify-between px-8 pt-4 pb-2">
<div className="text-white text-sm font-sans" style={{}}>9:41</div>
<div className="w-6 h-5 rounded-full bg-neutral-800/70"></div>
<div className="flex items-center gap-1 text-white">
<svg className="lucide lucide-signal w-4 h-4" data-lucide="signal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 20h.01"></path><path d="M7 20v-4"></path><path d="M12 20v-8"></path><path d="M17 20V8"></path><path d="M22 4v16"></path></svg>
<svg className="lucide lucide-wifi w-4 h-4" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
<div className="w-6 h-3 rounded-sm border border-white/60 relative">
<div className="absolute inset-0.5 bg-white rounded-[1px]"></div>
<div className="absolute -right-0.5 top-1 w-0.5 h-1 bg-white/60 rounded-r-sm"></div>
</div>
</div>
</div>
<div className="relative px-8 pb-8 pt-6 flex flex-col h-full">

<div className="flex items-center justify-between">
<button className="size-10 rounded-full bg-neutral-900/70 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-chevron-left w-5 h-5 text-neutral-300" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="size-10 rounded-full bg-gradient-to-b from-cyan-400 to-blue-500 flex items-center justify-center">
<svg className="lucide lucide-sparkles w-5 h-5 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</button>
</div>

<div className="mt-8 min-h-[128px]">
<div className="text-[19px] leading-7 tracking-tight">
<span className="block bg-gradient-to-r from-neutral-200 via-neutral-100 to-neutral-300 bg-clip-text text-transparent font-sans" id="animated-text" style={{}}>D</span>
</div>
</div>

<div className="flex-1 flex items-center justify-center">
<div className="relative z-10 flex items-center justify-center w-56 h-56 rounded-full overflow-hidden">
<video autoplay="" className="w-full h-full object-cover rounded-full" loop="" muted="" playsinline="" style={{filter: 'brightness(1.1) contrast(1.2) saturate(1.1)'}}>
<source src="https://cdn.midjourney.com/video/5029e61e-010a-4f9f-8daf-ef0a0ff34af6/3.mp4" type="video/mp4"/>
</video>
</div>
</div>
<div className="text-center mb-8">
<p className="animate-pulse text-sm text-neutral-400 font-sans" id="listen-state" style={{animation: '1.5s ease-in-out 0s infinite normal none running listening-pulse'}}>Listening...</p>
</div>

<div className="w-36 h-1 bg-white/30 rounded-full mx-auto"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>




    </>
  );
}
