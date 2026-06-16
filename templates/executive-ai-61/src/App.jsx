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
serif: ['Newsreader', 'serif'],
},
letterSpacing: {
'tighter-plus': '-0.05em',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


  // Initialize Lucide Icons
  lucide.createIcons();

  // GSAP Animations
  document.addEventListener("DOMContentLoaded", () => {
      gsap.to(".nav-item", { y: 0, opacity: 1, duration: 1, stagger: 0.2, ease: "power3.out", delay: 0.5 });
      gsap.fromTo(".hero-reveal", 
          { y: 50, opacity: 0 }, 
          { y: 0, opacity: 1, duration: 1.2, stagger: 0.15, ease: "power4.out", delay: 0.8 }
      );
  });

  // Separate Page Logic
  function openAssistantPage() {
      const page = document.getElementById('assistant-details-page');
      page.classList.remove('hidden');
      
      // Allow display:block to apply before animating opacity
      setTimeout(() => {
          page.classList.remove('opacity-0');
          document.body.style.overflow = 'hidden'; // Lock background scrolling
          window.scrollTo({ top: 0, behavior: 'instant' });
      }, 10);
  }

  function closeAssistantPage() {
      const page = document.getElementById('assistant-details-page');
      page.classList.add('opacity-0');
      
      setTimeout(() => {
          page.classList.add('hidden');
          document.body.style.overflow = ''; // Restore scrolling
      }, 500); // Matches the Tailwind transition duration
  }

  // Mobile Menu Logic
  function openMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.remove('hidden');
      
      setTimeout(() => {
          menu.classList.remove('opacity-0');
          document.body.style.overflow = 'hidden'; // Lock background scrolling
      }, 10);
  }

  function closeMobileMenu() {
      const menu = document.getElementById('mobile-menu');
      menu.classList.add('opacity-0');
      
      setTimeout(() => {
          menu.classList.add('hidden');
          document.body.style.overflow = ''; // Restore scrolling
      }, 300);
  }

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-black transition-opacity duration-1000" id="loader" style={{display: 'none'}}>
<div className="flex flex-col items-center gap-4">
<div className="h-px w-24 bg-purple-800 overflow-hidden relative">
<div className="absolute inset-0 bg-gray-400 w-full -translate-x-full animate-[shimmer_1.5s_infinite]"></div>
</div>
<p className="text-base uppercase tracking-[0.2em] text-purple-500 font-mono">
            Initializing AI
        </p>
</div>
<style>
        @keyframes shimmer { 100% { transform: translateX(100%); } }
    </style>
</div>

<div className="overflow-hidden w-full h-screen relative">

<div className="relative z-10 flex flex-col h-full pointer-events-none">

<header className="w-full px-6 py-6 flex justify-between items-center pointer-events-auto opacity-0 nav-item">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-gray-400/50 transition-colors duration-300">
<i className="text-gray-400 transition-transform group-hover:rotate-90 w-5 h-5" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
</div>
<span className="group-hover:text-gray-400 transition-colors glitch-target text-xl font-light text-white tracking-tight">Portago AI</span>
</div>
<nav className="hidden md:flex items-center gap-1 glass-panel p-1 rounded-full">
<a className="hover:bg-white/5 hover:text-white transition-colors uppercase text-base font-light text-blue-400 tracking-wider rounded-full pt-2 pr-5 pb-2 pl-5" href="/what-can-it-do">Features</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-blue-400 hover:text-white transition-colors text-base font-light uppercase tracking-wider" href="#solutions">Solutions</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-blue-400 hover:text-white transition-colors text-base font-light uppercase tracking-wider" href="#integrations">Integrations</a>
<a className="px-5 py-2 rounded-full hover:bg-white/5 text-blue-400 hover:text-white transition-colors text-base font-light uppercase tracking-wider" href="#pricing">Pricing</a>
</nav>
<div className="flex items-center gap-4">
<button className="hidden md:flex group items-center gap-2 px-5 py-2.5 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm hover:border-gray-400/30 hover:bg-gray-400/10 transition-all duration-300">
<span className="text-base font-light text-white group-hover:text-gray-300">Login</span>
<i className="text-gray-400 group-hover:translate-x-0.5 transition-transform w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>

<button className="md:hidden flex items-center justify-center w-10 h-10 border border-white/10 rounded-full bg-black/20 backdrop-blur-sm hover:border-gray-400/30 hover:bg-gray-400/10 transition-all duration-300" onclick="openMobileMenu()">
<i className="text-gray-400 w-5 h-5" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</header>

<main className="flex-grow flex flex-col justify-center px-6 md:px-12 lg:px-24 pointer-events-none">
<div className="max-w-5xl space-y-8">

<div className="overflow-hidden">
<div className="hero-reveal flex items-center gap-3">
<span className="flex h-2.5 w-2.5 rounded-full bg-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.6)] transition-colors duration-300" id="status-light"></span>
<p className="text-base md:text-lg uppercase tracking-[0.2em] text-blue-400 font-light font-mono transition-colors duration-300" id="status-text">
                            Beta Access: Open
                        </p>
</div>
</div>

<div className="space-y-2">
<div className="overflow-hidden">
<h1 className="hero-reveal text-5xl md:text-7xl lg:text-8xl font-light tracking-tight leading-[0.95] text-white glitch-target mix-blend-difference">
                            Your AI Executive Assistant
                        </h1>
</div>
<div className="overflow-hidden">
<h1 className="hero-reveal text-4xl md:text-6xl lg:text-7xl font-serif italic font-extralight tracking-tight leading-[0.95] text-blue-400 glitch-target mt-2">
                            That Actually Gets Things Done.
                        </h1>
</div>
</div>

<div className="overflow-hidden max-w-3xl mt-8">
<p className="hero-reveal text-lg md:text-2xl text-blue-400 leading-relaxed font-extralight">
                        From emails to scheduling, research to team management — your AI handles the busywork so you can focus on what matters.
                    </p>
</div>

<div className="overflow-hidden pt-8">
<div className="hero-reveal flex flex-col pointer-events-auto gap-x-4 gap-y-4 items-start">
<style>
                            .btn-wrapper{position:relative;display:inline-block}.btn{--border-radius:9999px;--padding:4px;--transition:0.4s;--button-color:#000;--highlight-color-hue:217deg;user-select:none;display:flex;align-items:center;justify-content:center;background-color:var(--button-color);box-shadow:inset 0px 1px 1px rgba(255,255,255,0.2),inset 0px 2px 2px rgba(255,255,255,0.15),inset 0px 4px 4px rgba(255,255,255,0.1),inset 0px 8px 8px rgba(255,255,255,0.05),0px -1px 1px rgba(0,0,0,0.02),0px -2px 2px rgba(0,0,0,0.03);border:solid 1px rgba(255,255,255,0.2);border-radius:var(--border-radius);cursor:pointer;transition:box-shadow var(--transition),border var(--transition),background-color var(--transition);padding:1.25rem 3rem}.btn::before{content:"";position:absolute;top:calc(0px - var(--padding));left:calc(0px - var(--padding));width:calc(100% + var(--padding)*2);height:calc(100% + var(--padding)*2);border-radius:calc(var(--border-radius) + var(--padding));pointer-events:none;background-image:linear-gradient(0deg,#0004,#000a);z-index:-1;transition:box-shadow var(--transition),filter var(--transition);box-shadow:0 -8px 8px -6px #0000 inset,0 -16px 16px -8px #00000000 inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn::after{content:"";position:absolute;inset:0;border-radius:inherit;pointer-events:none;background-image:linear-gradient(0deg,#fff,hsl(var(--highlight-color-hue),100%,70%),hsla(var(--highlight-color-hue),100%,70%,50%),8%,transparent);background-position:0 0;opacity:0;transition:opacity var(--transition),filter var(--transition)}.btn-letter{position:relative;display:inline-block;color:#ffffff90;font-family:'Inter',sans-serif;font-weight:300;letter-spacing:-0.025em;animation:letter-anim 2s ease-in-out infinite;transition:color var(--transition),text-shadow var(--transition),opacity var(--transition)}@keyframes letter-anim{50%{text-shadow:0 0 3px #ffffff88;color:#fff}}.txt-wrapper{position:relative;display:flex;align-items:center;height:24px}.txt-1{display:flex;align-items:center;gap:1px}.btn:hover{border:solid 1px hsla(var(--highlight-color-hue),100%,80%,0.4)}.btn:hover::before{box-shadow:0 -8px 8px -6px #fffa inset,0 -16px 16px -8px hsla(var(--highlight-color-hue),100%,70%,0.3) inset,1px 1px 1px #fff2,2px 2px 2px #fff1,-1px -1px 1px #0002,-2px -2px 2px #0001}.btn:hover::after{opacity:1}.btn:hover .btn-svg{stroke:#fff;filter:drop-shadow(0 0 3px hsl(var(--highlight-color-hue),100%,70%)) drop-shadow(0 -4px 6px #0009);animation:none}.btn-letter:nth-child(1){animation-delay:0s}.btn-letter:nth-child(2){animation-delay:0.05s}.btn-letter:nth-child(3){animation-delay:0.1s}.btn-letter:nth-child(4){animation-delay:0.15s}.btn-letter:nth-child(5){animation-delay:0.2s}.btn-letter:nth-child(6){animation-delay:0.25s}.btn-letter:nth-child(7){animation-delay:0.3s}.btn-letter:nth-child(8){animation-delay:0.35s}.btn-letter:nth-child(9){animation-delay:0.4s}.btn-letter:nth-child(10){animation-delay:0.45s}.btn-letter:nth-child(11){animation-delay:0.5s}.btn-letter:nth-child(12){animation-delay:0.55s}.btn-letter:nth-child(13){animation-delay:0.6s}.btn-letter:nth-child(14){animation-delay:0.65s}
                        </style>

<div className="btn-wrapper group">
<button aria-label="Join the Waitlist" className="btn" type="button">
<div className="txt-wrapper">
<div className="txt-1 text-lg">
<span className="btn-letter">J</span><span className="btn-letter">o</span><span className="btn-letter">i</span><span className="btn-letter">n</span>
<span className="btn-letter" style={{width: '6px'}}></span>
<span className="btn-letter">t</span><span className="btn-letter">h</span><span className="btn-letter">e</span>
<span className="btn-letter" style={{width: '6px'}}></span>
<span className="btn-letter">W</span><span className="btn-letter">a</span><span className="btn-letter">i</span><span className="btn-letter">t</span><span className="btn-letter">l</span><span className="btn-letter">i</span><span className="btn-letter">s</span><span className="btn-letter">t</span>
</div>
</div>
<i className="text-blue-400 ml-3 group-hover:text-white transition-colors relative z-10 w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex items-center gap-2 mt-4 opacity-80 pl-2">
<i className="text-blue-400 w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i>
<span className="text-base font-extralight text-blue-400 tracking-wide">Trusted by executives across Europe</span>
</div>
</div>
</div>
</div>
</main>

<footer className="pointer-events-auto nav-item flex justify-between items-end w-full px-6 pb-8 opacity-0">
<div className="flex flex-col gap-1">
<span className="text-sm uppercase tracking-widest text-blue-600 font-normal">Neural Coords</span>
<span className="text-base font-mono text-gray-400 font-extralight" id="coords">0.29.0.76.00</span>
</div>
</footer>
</div>

<div className="absolute bottom-0 left-0 w-full h-40 bg-gradient-to-t from-black via-black/80 to-transparent z-[5] pointer-events-none"></div>
</div>

<section className="overflow-hidden bg-black border-white/5 border-t pt-32 pb-32 relative" id="features">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-20">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight mb-6">
                Your complete AI assistant, <br/><span className="font-serif italic text-gray-300 font-extralight">built to run your day</span>
</h2>
<p className="text-xl md:text-2xl text-blue-400 max-w-4xl mx-auto font-extralight leading-relaxed">
                From intelligent automation to proactive management, every feature is designed to give you back your most valuable asset — time.
            </p>

<div className="mt-14 flex flex-col items-center justify-center">
<p className="text-sm font-normal text-blue-600 uppercase tracking-widest mb-6">Operates entirely via</p>
<div className="flex flex-wrap items-center justify-center gap-6 md:gap-10 px-8 py-5 rounded-full border border-white/5 bg-white/[0.02] backdrop-blur-md">

<div className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" icon="logos:whatsapp-icon" width="24"></iconify-icon>
<span className="text-base text-blue-300/60 group-hover:text-white font-light tracking-wide transition-colors">WhatsApp</span>
</div>

<div className="hidden sm:block w-px h-6 bg-white/10"></div>

<div className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" icon="logos:telegram" width="24"></iconify-icon>
<span className="text-base text-blue-300/60 group-hover:text-white font-light tracking-wide transition-colors">Telegram</span>
</div>

<div className="hidden sm:block w-px h-6 bg-white/10"></div>

<div className="flex items-center gap-3 group cursor-pointer">
<iconify-icon className="grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300" icon="logos:google-gmail" width="24"></iconify-icon>
<span className="text-base text-blue-300/60 group-hover:text-white font-light tracking-wide transition-colors">Email</span>
</div>
</div>
</div>

<div className="mt-12 flex justify-center w-full relative z-20">
<button className="group flex items-center gap-3 px-8 py-3.5 border border-white/10 rounded-full bg-blue-900/20 backdrop-blur-md hover:border-blue-400/30 hover:bg-blue-900/40 transition-all duration-300" onclick="openAssistantPage()">
<span className="text-base font-light text-white tracking-wide group-hover:text-blue-200">Explore Assistant Features</span>
<i className="text-blue-400 group-hover:translate-x-1 transition-transform w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="glass-panel p-10 rounded-3xl bg-blue-900/40 hover:bg-blue-900/80 transition-all duration-500 border border-white/5 hover:border-gray-400/20 group">
<div className="w-14 h-14 rounded-2xl bg-blue-800/50 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-gray-400/10 group-hover:border-gray-400/30 transition-colors">
<i className="text-blue-400 group-hover:text-gray-400 transition-colors w-6 h-6" data-lucide="mail" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white font-light tracking-tight mb-4">Smart Email Management</h3>
<p className="text-lg text-blue-400 font-extralight leading-relaxed">Drafts, triages, and responds to emails on your behalf with your tone and style.</p>
</div>

<div className="glass-panel p-10 rounded-3xl bg-blue-900/40 hover:bg-blue-900/80 transition-all duration-500 border border-white/5 hover:border-gray-400/20 group">
<div className="w-14 h-14 rounded-2xl bg-blue-800/50 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-gray-400/10 group-hover:border-gray-400/30 transition-colors">
<i className="text-blue-400 group-hover:text-gray-400 transition-colors w-6 h-6" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white font-light tracking-tight mb-4">Automated Scheduling</h3>
<p className="text-lg text-blue-400 font-extralight leading-relaxed">Manages your calendar, books meetings, and handles conflicts — before you even notice them.</p>
</div>

<div className="glass-panel p-10 rounded-3xl bg-blue-900/40 hover:bg-blue-900/80 transition-all duration-500 border border-white/5 hover:border-gray-400/20 group">
<div className="w-14 h-14 rounded-2xl bg-blue-800/50 border border-white/5 flex items-center justify-center mb-8 group-hover:bg-gray-400/10 group-hover:border-gray-400/30 transition-colors">
<i className="text-blue-400 group-hover:text-gray-400 transition-colors w-6 h-6" data-lucide="check-circle" strokeWidth="1.5"></i>
</div>
<h3 className="text-2xl text-white font-light tracking-tight mb-4">Real-Time Task Tracking</h3>
<p className="text-lg text-blue-400 font-extralight leading-relaxed">Creates, assigns, and follows up on tasks across your team with zero manual input.</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 relative overflow-hidden flex flex-col items-center justify-center px-6">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-900/20 rounded-full blur-[120px] pointer-events-none"></div>

<div className="text-center z-10 mb-16 max-w-3xl">
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
            Action at the speed of <span className="font-serif italic text-blue-400 font-extralight">thought</span>
</h2>
<p className="text-xl md:text-2xl text-gray-400 font-extralight leading-relaxed">
            Message your assistant exactly like you would a real person. It handles complex multi-step workflows across your apps seamlessly.
        </p>
</div>

<div className="relative w-full max-w-[320px] h-[650px] bg-black rounded-[3rem] border-[10px] border-gray-900 shadow-[0_0_60px_rgba(59,130,246,0.1)] overflow-hidden flex flex-col z-10 mx-auto">

<div className="absolute top-3 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20 shadow-[0_0_0_1px_rgba(255,255,255,0.05)]"></div>

<div className="w-full pt-14 pb-4 px-6 flex items-center justify-between bg-black/90 backdrop-blur-md border-b border-white/5 z-10 shrink-0">
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center">
<i className="text-white w-4 h-4" data-lucide="bot" strokeWidth="1.5"></i>
</div>
<div className="flex flex-col">
<h4 className="text-sm font-medium text-white tracking-tight leading-none mb-1">Portago AI</h4>
<p className="text-[10px] uppercase tracking-wider text-blue-400 font-light leading-none">Online</p>
</div>
</div>
<i className="text-gray-500 w-5 h-5" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>

<div className="flex-1 overflow-hidden relative bg-[#0a0a0a]">

<div className="absolute top-0 w-full h-12 bg-gradient-to-b from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>
<div className="absolute bottom-0 w-full h-16 bg-gradient-to-t from-[#0a0a0a] to-transparent z-10 pointer-events-none"></div>

<div className="animate-chat-scroll absolute w-full pb-6">

<div className="flex flex-col gap-6 p-5">


<div className="flex w-full justify-end">
<div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Morning! Can you clear my inbox, ping Sarah about the Q3 report, and add a lunch meeting with David tomorrow at 12:30 PM?
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Good morning! I've archived 14 newsletters and drafted 3 high-priority replies for your review.
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            I've also sent Sarah a reminder on Slack regarding the Q3 report.
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
<div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
<i className="w-4 h-4 text-blue-400" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium text-white text-xs tracking-tight">Event Scheduled</span>
</div>
                            The lunch with David at 12:30 PM tomorrow is added to your calendar. I booked a table at The Ivy. Anything else?
                        </div>
</div>

<div className="flex w-full justify-end">
<div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Perfect, thanks. That's all for now.
                        </div>
</div>

<div className="h-12"></div>


<div className="flex w-full justify-end">
<div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Morning! Can you clear my inbox, ping Sarah about the Q3 report, and add a lunch meeting with David tomorrow at 12:30 PM?
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Good morning! I've archived 14 newsletters and drafted 3 high-priority replies for your review.
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            I've also sent Sarah a reminder on Slack regarding the Q3 report.
                        </div>
</div>

<div className="flex w-full justify-start">
<div className="bg-gray-800 text-gray-200 rounded-2xl rounded-tl-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
<div className="flex items-center gap-2 mb-2 pb-2 border-b border-gray-700">
<i className="w-4 h-4 text-blue-400" data-lucide="calendar" strokeWidth="1.5"></i>
<span className="font-medium text-white text-xs tracking-tight">Event Scheduled</span>
</div>
                            The lunch with David at 12:30 PM tomorrow is added to your calendar. I booked a table at The Ivy. Anything else?
                        </div>
</div>

<div className="flex w-full justify-end">
<div className="bg-blue-600 text-white rounded-2xl rounded-tr-sm px-4 py-3 text-sm font-light max-w-[85%] leading-relaxed shadow-sm">
                            Perfect, thanks. That's all for now.
                        </div>
</div>
</div>
</div>
</div>

<div className="p-4 bg-[#0a0a0a] border-t border-white/5 z-10 shrink-0">
<div className="w-full bg-gray-900 rounded-full h-11 flex items-center px-4 gap-3 border border-gray-800/50">
<i className="text-gray-500 w-5 h-5" data-lucide="plus" strokeWidth="1.5"></i>
<div className="flex-1 text-gray-500 text-sm font-light">Message Portago...</div>
<i className="text-gray-500 w-5 h-5" data-lucide="mic" strokeWidth="1.5"></i>
</div>
</div>
</div>
</section>

<section className="text-center bg-black py-40 px-6 border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-30"></div>
<div className="max-w-5xl mx-auto relative z-10">
<i className="text-gray-400/30 mx-auto mb-12 w-16 h-16" data-lucide="message-square-quote" strokeWidth="1.5"></i>
<p className="text-3xl md:text-5xl lg:text-6xl font-serif italic font-extralight text-white leading-[1.2] tracking-tight">
            "It's like having a chief of staff who works 24/7, never forgets anything, and costs less than a coffee run."
        </p>
<div className="mt-16 flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-blue-900 border border-white/10 flex items-center justify-center">
<i className="text-blue-500 w-5 h-5" data-lucide="user" strokeWidth="1.5"></i>
</div>
<p className="text-xl font-light text-blue-400 tracking-tight">— Francois C.</p>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-24 text-center md:text-left">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-light text-white tracking-tight leading-tight max-w-4xl">
                Automate, delegate, and scale — <br/><span className="font-serif italic text-blue-500 font-extralight">all from one AI assistant.</span>
</h2>
</div>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 md:gap-12">

<div className="group relative rounded-[2rem] overflow-hidden bg-blue-900/30 border border-white/5 p-12 hover:border-gray-400/30 transition-colors duration-500">
<div className="absolute top-0 right-0 w-96 h-96 bg-gray-400/5 rounded-full blur-[100px] -mr-32 -mt-32 pointer-events-none group-hover:bg-gray-400/10 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
<i className="text-gray-400 w-6 h-6" data-lucide="zap" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl text-white font-light tracking-tight mb-5">Personal Productivity</h3>
<p className="text-xl text-blue-400 font-extralight leading-relaxed">
                         Morning briefings, email summaries, task lists, calendar prep — your AI starts your day before you do.
                     </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-blue-900/30 border border-white/5 p-12 hover:border-gray-400/30 transition-colors duration-500">
<div className="absolute bottom-0 left-0 w-96 h-96 bg-pink-400/5 rounded-full blur-[100px] -ml-32 -mb-32 pointer-events-none group-hover:bg-pink-400/10 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
<i className="text-gray-400 w-6 h-6" data-lucide="users" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl text-white font-light tracking-tight mb-5">Team Management</h3>
<p className="text-xl text-blue-400 font-extralight leading-relaxed">
                         Weekly check-ins, task reminders, progress tracking — keep your team aligned without micromanaging.
                     </p>
</div>
</div>

<div className="group relative rounded-[2rem] overflow-hidden bg-blue-900/30 border border-white/5 p-12 hover:border-gray-400/30 transition-colors duration-500 md:col-span-2 lg:col-span-1">
<div className="absolute top-0 left-0 w-96 h-96 bg-purple-400/5 rounded-full blur-[100px] -ml-32 -mt-32 pointer-events-none group-hover:bg-purple-400/10 transition-colors duration-700"></div>
<div className="relative z-10">
<div className="w-14 h-14 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-8">
<i className="text-gray-400 w-6 h-6" data-lucide="wand-2" strokeWidth="1.5"></i>
</div>
<h3 className="text-3xl text-white font-light tracking-tight mb-5">Research &amp; Intelligence</h3>
<p className="text-xl text-blue-400 font-extralight leading-relaxed">
                         Market research, competitor analysis, document summaries — get insights in minutes, not hours.
                     </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden" id="integrations">
<div className="max-w-7xl mx-auto px-6 mb-16 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight mb-6">
            Connects with your <span className="font-serif italic text-gray-300 font-extralight">entire stack</span>
</h2>
<p className="text-xl text-blue-400 max-w-2xl mx-auto font-extralight">
            NexusAI works seamlessly with the tools you already use, pulling context and taking action directly where it matters.
        </p>
</div>
<div className="relative flex overflow-hidden w-full group py-8 border-y border-white/5 bg-blue-900/10">

<div className="absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-black to-transparent z-10 pointer-events-none"></div>
<div className="absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-black to-transparent z-10 pointer-events-none"></div>

<div className="flex w-max animate-infinite-scroll group-hover:[animation-play-state:paused]">

<div className="flex w-max items-center justify-around gap-20 px-10">
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:slack-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Slack</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:google-gmail" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Gmail</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:notion-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Notion</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:microsoft-teams" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Teams</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:linear-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Linear</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:jira" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Jira</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:salesforce" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Salesforce</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:zoom-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Zoom</span>
</div>
</div>

<div className="flex w-max items-center justify-around gap-20 px-10">
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:slack-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Slack</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:google-gmail" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Gmail</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:notion-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Notion</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:microsoft-teams" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Teams</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:linear-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Linear</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:jira" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Jira</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:salesforce" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Salesforce</span>
</div>
<div className="flex items-center gap-3 grayscale opacity-40 hover:grayscale-0 hover:opacity-100 transition-all duration-300 cursor-pointer">
<iconify-icon icon="logos:zoom-icon" width="32"></iconify-icon>
<span className="text-2xl text-white font-light tracking-tight">Zoom</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5 relative overflow-hidden">
<div className="absolute inset-0 bg-noise opacity-30"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10 text-center">
<div className="flex flex-col items-center justify-center">
<div className="w-16 h-16 rounded-full bg-white/5 border border-white/10 flex items-center justify-center mb-6">
<i className="text-gray-400 w-8 h-8" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-light text-white tracking-tight">
                Enterprise-grade security you can trust
            </h2>
</div>
</div>
</section>

<section className="py-32 bg-black border-t border-white/5 pb-40 relative overflow-hidden" id="pricing">
<div className="opacity-30 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">

<div className="text-center mb-32">
<h2 className="text-4xl md:text-5xl font-light text-white tracking-tight mb-6">
                The bottom line:
            </h2>
<p className="text-xl md:text-2xl text-blue-400 max-w-4xl mx-auto font-extralight leading-relaxed">
                Portago AI doesn't just answer questions — it runs your day. It reads your emails, manages your team, tracks your projects, handles your scheduling, does your research, and keeps everything organised. You communicate via WhatsApp, approve what matters, and focus on the work only you can do.
            </p>
</div>

<div className="text-center mb-20">
<h2 className="text-5xl md:text-6xl lg:text-7xl font-light text-white tracking-tight mb-6">
                Simple, transparent <span className="font-serif italic text-gray-300 font-extralight">pricing</span>
</h2>
<p className="text-xl md:text-2xl text-blue-400 max-w-2xl mx-auto font-extralight leading-relaxed">
                Start automating your day immediately. Scale as your team grows.
            </p>
</div>
<div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8 w-full">

<div className="glass-panel p-10 rounded-[2rem] bg-blue-900/40 border border-white/5 hover:border-gray-400/30 transition-all duration-500 relative flex flex-col group">
<div className="mb-8">
<h3 className="text-2xl text-white font-light tracking-tight mb-2">Starter</h3>
<p className="text-lg text-blue-400 font-extralight">For individuals getting started.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-5xl text-white font-light tracking-tight">$99</span>
<span className="text-lg text-blue-500 font-extralight">/month</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-lg text-blue-300 font-extralight">
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> 500k tokens</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Email triage</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Calendar view</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> WhatsApp</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Basic tasks</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> 3 integrations</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gray-400/30 transition-all duration-300 font-light">
                    Start Free Trial
                </button>
</div>

<div className="glass-panel p-10 rounded-[2rem] bg-gray-400/5 border border-gray-400/20 hover:border-gray-400/40 transition-all duration-500 relative flex flex-col group">
<div className="absolute top-0 right-0 px-4 py-1.5 bg-gray-400 text-black text-sm font-normal uppercase tracking-widest rounded-bl-xl rounded-tr-[1.8rem]">
                    Most Popular
                </div>
<div className="mb-8 mt-2">
<h3 className="text-2xl text-white font-light tracking-tight mb-2">Pro</h3>
<p className="text-lg text-blue-400 font-extralight">For power users and professionals.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-5xl text-white font-light tracking-tight">$249</span>
<span className="text-lg text-blue-500 font-extralight">/month</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-lg text-blue-300 font-extralight">
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> 2M tokens</li>
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Daily briefings</li>
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Meeting prep</li>
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Research</li>
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Auto-send</li>
<li className="flex items-center gap-3"><i className="text-gray-400 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> 10 integrations</li>
</ul>
<button className="w-full py-4 rounded-xl bg-gray-400 text-black hover:bg-gray-300 transition-colors duration-300 font-normal">
                    Upgrade to Pro
                </button>
</div>

<div className="glass-panel p-10 rounded-[2rem] bg-blue-900/40 border border-white/5 hover:border-gray-400/30 transition-all duration-500 relative flex flex-col group md:col-span-2 lg:col-span-1">
<div className="mb-8">
<h3 className="text-2xl text-white font-light tracking-tight mb-2">Executive</h3>
<p className="text-lg text-blue-400 font-extralight">For teams and organizations.</p>
</div>
<div className="mb-8 flex items-baseline gap-2">
<span className="text-5xl text-white font-light tracking-tight">$499</span>
<span className="text-lg text-blue-500 font-extralight">/month</span>
</div>
<ul className="space-y-4 mb-10 flex-grow text-lg text-blue-300 font-extralight">
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> 5M tokens</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Full autonomy</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Deep research</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Team access</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Unlimited integrations</li>
<li className="flex items-center gap-3"><i className="text-gray-400/80 w-5 h-5" data-lucide="check-circle" strokeWidth="1.5"></i> Dedicated onboarding</li>
</ul>
<button className="w-full py-4 rounded-xl bg-white/5 border border-white/10 text-white hover:bg-white/10 hover:border-gray-400/30 transition-all duration-300 font-light">
                    Upgrade to Executive
                </button>
</div>
</div>
</div>
</section>

<footer className="bg-black pt-20 pb-10 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 border-b border-white/10 pb-16">
<div className="md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<i className="text-gray-400 w-6 h-6" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-2xl font-light text-white tracking-tight">Portago AI</span>
</div>
<h3 className="text-3xl text-white font-light mb-6 tracking-tight">Your AI Executive Assistant.</h3>
<div className="flex gap-2 max-w-sm">
<input className="bg-white/5 border border-white/10 rounded-lg px-4 py-3 text-lg font-extralight text-white w-full focus:outline-none focus:border-gray-400 transition-colors" placeholder="Enter your email" type="email"/>
<button className="bg-white/10 border border-white/10 rounded-lg px-4 text-white hover:bg-white/20 transition-colors flex items-center justify-center">
<i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>
<div className="md:col-start-3">
<h4 className="text-white font-light mb-6 text-lg tracking-wide">Platform</h4>
<ul className="space-y-4 text-lg text-blue-500 font-extralight">
<li><a className="hover:text-gray-400 transition-colors" href="#features">Features</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#solutions">Solutions</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#pricing">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-light mb-6 text-lg tracking-wide">Company</h4>
<ul className="space-y-4 text-lg text-blue-500 font-extralight">
<li><a className="hover:text-gray-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-gray-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 text-base text-blue-600 font-extralight gap-4">
<p>© 2024 NexusAI. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[150] bg-black overflow-y-auto hidden opacity-0 transition-opacity duration-500" id="assistant-details-page">

<div className="fixed top-0 w-full h-screen -z-10 bg-noise opacity-30 pointer-events-none"></div>
<div className="fixed top-0 left-0 w-full h-full bg-gradient-to-b from-blue-900/10 to-black -z-10 pointer-events-none"></div>

<header className="w-full px-6 py-6 flex justify-between items-center sticky top-0 z-20 bg-black/60 backdrop-blur-xl border-b border-white/5">
<button className="flex items-center gap-3 group cursor-pointer" onclick="closeAssistantPage()">
<div className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-black/50 backdrop-blur-md group-hover:border-gray-400/50 transition-colors duration-300">
<i className="text-gray-400 group-hover:-translate-x-0.5 transition-transform w-5 h-5" data-lucide="arrow-left" strokeWidth="1.5"></i>
</div>
<span className="text-gray-400 group-hover:text-white transition-colors text-base font-light tracking-tight">Return to Home</span>
</button>
<div className="flex items-center gap-3">
<i className="text-gray-400 w-5 h-5" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-xl font-light text-white tracking-tight">Portago AI</span>
</div>
<div className="w-24 hidden md:block"></div> 
</header>

<main className="max-w-6xl mx-auto px-6 pt-24 pb-40 relative z-10">
<div className="text-center mb-24">
<h1 className="text-5xl md:text-7xl font-light text-white tracking-tight mb-6">
                Inside the <span className="font-serif italic text-blue-400 font-extralight">Engine</span>
</h1>
<p className="text-xl md:text-2xl text-blue-400 max-w-3xl mx-auto font-extralight leading-relaxed">
                Explore exactly how your AI executive assistant manages your communications, optimizes your schedule, and connects context across your entire workflow.
            </p>
</div>
<div className="space-y-16">

<div className="glass-panel p-10 md:p-14 rounded-[2rem] bg-blue-900/20 border border-white/5 flex flex-col md:flex-row gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="w-14 h-14 rounded-2xl bg-blue-800/30 border border-white/5 flex items-center justify-center">
<i className="text-blue-400 w-6 h-6" data-lucide="brain-circuit" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Contextual Memory</h2>
<p className="text-lg text-blue-300 font-extralight leading-relaxed">
                        Portago actively remembers previous conversations, project details, and your unique communication preferences. It doesn't just act on immediate prompts; it draws on months of context to make informed decisions, draft highly accurate emails, and connect dots across different stakeholders.
                    </p>
<ul className="space-y-4 text-gray-400 font-extralight mt-6">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-500" data-lucide="check"></i> Infinite historical context window</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-500" data-lucide="check"></i> Automatically adapts to your tone of voice</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-blue-500" data-lucide="check"></i> Entity and relationship tracking</li>
</ul>
</div>
<div className="w-full md:w-[45%] h-80 rounded-2xl bg-black/50 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-900/20 to-transparent"></div>
<i className="w-32 h-32 text-blue-500/20" data-lucide="database" strokeWidth="1"></i>
</div>
</div>

<div className="glass-panel p-10 md:p-14 rounded-[2rem] bg-gray-400/5 border border-white/5 flex flex-col md:flex-row-reverse gap-12 items-center">
<div className="flex-1 space-y-6">
<div className="w-14 h-14 rounded-2xl bg-gray-800/50 border border-white/5 flex items-center justify-center">
<i className="text-gray-300 w-6 h-6" data-lucide="workflow" strokeWidth="1.5"></i>
</div>
<h2 className="text-3xl md:text-4xl font-light text-white tracking-tight">Multi-Step Workflows</h2>
<p className="text-lg text-gray-400 font-extralight leading-relaxed">
                        Execute complex sequences with a single voice note or message. Simply say "Prepare for the board meeting," and the AI will extract metrics from your dashboards, draft a summary document, and automatically schedule prep calls with key team members based on their availability.
                    </p>
<ul className="space-y-4 text-gray-400 font-extralight mt-6">
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-400" data-lucide="check"></i> Cross-platform action execution</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-400" data-lucide="check"></i> Natural language workflow creation</li>
<li className="flex items-center gap-3"><i className="w-5 h-5 text-gray-400" data-lucide="check"></i> Autonomous conflict resolution</li>
</ul>
</div>
<div className="w-full md:w-[45%] h-80 rounded-2xl bg-black/50 border border-white/5 relative overflow-hidden flex items-center justify-center">
<div className="absolute inset-0 bg-gradient-to-bl from-gray-500/10 to-transparent"></div>
<i className="w-32 h-32 text-gray-500/20" data-lucide="git-merge" strokeWidth="1"></i>
</div>
</div>
</div>
</main>
</div>

<div className="fixed inset-0 z-[200] bg-black/95 backdrop-blur-2xl hidden opacity-0 transition-opacity duration-300 flex flex-col" id="mobile-menu">
<div className="px-6 py-6 flex justify-between items-center border-b border-white/5">
<div className="flex items-center gap-3">
<i className="text-gray-400 w-5 h-5" data-lucide="arrow-right-left" strokeWidth="1.5"></i>
<span className="text-xl font-light text-white tracking-tight">Portago AI</span>
</div>
<button className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center bg-white/5 backdrop-blur-md hover:border-gray-400/50 transition-colors duration-300" onclick="closeMobileMenu()">
<i className="text-gray-400 w-5 h-5" data-lucide="x" strokeWidth="1.5"></i>
</button>
</div>
<div className="flex-1 flex flex-col justify-center items-center gap-10 px-6 pb-20">
<a className="text-3xl font-light text-white hover:text-blue-400 transition-colors tracking-tight" href="/what-can-it-do" onclick="closeMobileMenu()">Features</a>
<a className="text-3xl font-light text-white hover:text-blue-400 transition-colors tracking-tight" href="#solutions" onclick="closeMobileMenu()">Solutions</a>
<a className="text-3xl font-light text-white hover:text-blue-400 transition-colors tracking-tight" href="#integrations" onclick="closeMobileMenu()">Integrations</a>
<a className="text-3xl font-light text-white hover:text-blue-400 transition-colors tracking-tight" href="#pricing" onclick="closeMobileMenu()">Pricing</a>
<div className="w-16 h-px bg-white/10 my-2"></div>
<button className="text-3xl font-light text-blue-400 hover:text-white transition-colors tracking-tight flex items-center gap-3" onclick="closeMobileMenu()">
            Login <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>


    </>
  );
}
