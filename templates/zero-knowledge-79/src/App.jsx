import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
background: '#020408',
surface: '#0B0F17',
'surface-highlight': '#151B29',
border: '#1E293B',
primary: '#E2E8F0',
secondary: '#94A3B8',
accent: '#14F195', // Solana Green
'accent-purple': '#9945FF', // Solana Purple
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Space Grotesk', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'blob': 'blob 10s infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        // Animations
        gsap.registerPlugin(ScrollTrigger);

        // Title Sequence
        gsap.from(".animate-title", {
            y: 50,
            opacity: 0,
            duration: 1.2,
            ease: "power4.out"
        });

        gsap.utils.toArray('.animate-fade-in').forEach((element, i) => {
            gsap.from(element, {
                y: 20,
                opacity: 0,
                duration: 1,
                delay: i * 0.1,
                ease: "power2.out"
            });
        });

        // Cards Scroll Animation
        gsap.utils.toArray('.card').forEach((card, i) => {
            gsap.from(card, {
                scrollTrigger: {
                    trigger: card,
                    start: "top 90%",
                },
                y: 30,
                opacity: 0,
                duration: 0.8,
                ease: "power2.out"
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="vTTCp5g4cVl9nwjlT56Z"></div>

</div></div>
<div className="bg-grid"></div>
<div className="bg-stars"></div>

<div className="glow-spot top-[-10%] left-[-10%]"></div>
<div className="glow-spot bottom-[20%] right-[-10%] !bg-accent-purple/10 delay-1000"></div>

<nav className="fixed z-50 w-full border-white/5 border-b top-0 backdrop-blur-xl">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<div className="flex group cursor-pointer gap-x-3 gap-y-3 items-center">

<div className="flex group-hover:border-accent/50 transition-colors overflow-hidden bg-white w-10 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/91721ff8-a15d-48b3-86e2-27f87ad06eb3_320w.png)] bg-cover bg-center border-white/10 border rounded-lg pt-0.5 pr-0.5 pb-0.5 pl-0.5 shadow-[0_0_20px_-10px_rgba(20,241,149,0.5)] items-center justify-center"></div>
<div className="flex flex-col leading-none">
<span className="text-base font-semibold text-white tracking-tight font-display">Seal<span className="text-secondary">Safe</span></span>
<span className="text-[10px] text-accent uppercase tracking-wider font-mono" style={{}}>Solana Privacy Pools</span>
</div>
</div>
<div className="hidden md:flex gap-1 border-white/5 border rounded-full pt-1 pr-1 pb-1 pl-1 backdrop-blur-md items-center">
<a className="text-secondary hover:text-white hover:bg-white/5 transition-all text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#features" style={{}}>Beta Access</a>
<a className="text-secondary hover:text-white hover:bg-white/5 transition-all text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#how" style={{}}>Documentation</a>
<a className="text-secondary hover:text-white hover:bg-white/5 transition-all text-xs font-medium rounded-full pt-1.5 pr-4 pb-1.5 pl-4" href="#security" style={{}}>App</a>
</div>

<button className="group relative overflow-hidden flex items-center gap-2 px-6 py-2.5 rounded-lg text-xs font-bold text-black bg-white transition-all hover:scale-105 active:scale-95">
<div className="absolute inset-0 bg-gradient-to-r from-accent to-accent-purple opacity-0 group-hover:opacity-100 transition-opacity"></div>
<div className="group-hover:bg-opacity-95 transition-all bg-slate-50 rounded-[7px] absolute top-[1px] right-[1px] bottom-[1px] left-[1px]"></div>
<span className="group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-accent-purple group-hover:to-accent transition-all z-50 relative">Beta Access</span>
<svg aria-hidden="true" className="z-50" data-icon="lucide:arrow-right" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>
<main className="overflow-hidden z-10 pt-44 relative">

<section className="z-10 text-center max-w-7xl mr-auto mb-20 ml-auto pr-4 pl-4 relative">

<div className="inline-flex gap-2 animate-fade-in border border-accent/20 bg-accent/5 rounded-full mb-10 pt-1.5 pr-4 pb-1.5 pl-4 items-center shadow-[0_0_30px_-10px_rgba(20,241,149,0.3)] backdrop-blur-md" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</div>
<span className="text-[11px] text-accent uppercase font-semibold tracking-wide font-display">Beta on Solana</span>
<span className="text-[11px] text-white/30">|</span>
<span className="text-[11px] text-secondary font-mono">v1.0.1 (Turbine)</span>
</div>
<h1 className="md:text-8xl lg:text-9xl leading-[0.9] animate-title text-6xl font-medium text-white tracking-tighter font-display mb-10 relative" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0.0024px)'}}>
                Private. Simple. <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-br from-white via-white to-white/50">Unlink.</span>
</h1>
<p className="text-secondary text-lg md:text-xl font-light max-w-2xl mx-auto mb-12 leading-relaxed animate-fade-in delay-100 px-6" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.9997', transform: 'translate(0px, 0.0052px)'}}>
                Break the link between your wallets on Solana. <br className="hidden md:block"/>
                Sub-second ZK proofs powered by <span className="font-medium text-white">Seal Key</span> compression.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 animate-fade-in delay-200 px-6 mb-24" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.9953', transform: 'translate(0px, 0.0952px)'}}>
<button className="h-12 px-8 bg-white text-black rounded-lg text-sm font-bold hover:bg-gray-100 transition-all w-full sm:w-auto shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)] flex items-center justify-center gap-2">
<span className="iconify" data-icon="logos:solana" data-width="16"></span>
                    Start Anonymizing
                </button>
<button className="h-12 px-8 border border-white/10 bg-white/5 text-secondary rounded-lg text-sm font-medium hover:text-white hover:bg-white/10 hover:border-white/20 transition-all w-full sm:w-auto flex items-center justify-center gap-2 backdrop-blur-sm">
<svg aria-hidden="true" data-icon="lucide:terminal" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8M4 17l6-6l-6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                    Read Docs
                </button>
</div>

<div className="max-w-4xl mx-auto px-4 animate-fade-in delay-300" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.9747', transform: 'translate(0px, 0.5071px)'}}>
<div className="card rounded-xl overflow-hidden shine-border relative group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent via-accent-purple to-accent opacity-50"></div>
<div className="bg-surface/80 px-4 py-3 border-b border-white/5 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="font-mono text-[10px] text-secondary ml-2 bg-white/5 px-2 py-0.5 rounded border border-white/5 flex items-center gap-2">
<svg aria-hidden="true" data-icon="lucide:lock" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></g></svg>
                                solana_zk_program.so
                            </div>
</div>
<div className="text-[10px] font-mono text-secondary/50">ID: 882...9c1</div>
</div>
<div className="p-6 md:p-8 bg-[#030508] font-mono text-xs md:text-sm text-left relative overflow-hidden">
<div className="space-y-2 relative z-10">
<div className="flex items-center gap-2 text-secondary">
<span className="text-accent">➜</span>
<span className="">initializing_proof_generation...</span>
</div>
<div className="flex items-center gap-2 text-secondary">
<span className="text-accent">➜</span>
<span className="">fetching_merkle_root <span className="text-white/40">[OK]</span></span>
</div>
<div className="flex items-center gap-2 text-secondary mb-6">
<span className="text-accent">➜</span>
<span className="">zk_snark_generated: <span className="text-accent font-bold">0x7f...3a2b</span></span>
</div>
<div className="border border-dashed border-accent/20 bg-accent/5 rounded p-5 flex flex-col md:flex-row items-center justify-between group/key gap-4">
<div className="w-full">
<div className="flex justify-between items-center mb-2">
<div className="text-[10px] uppercase tracking-widest text-accent mb-1">Generated Note</div>
<div className="text-[10px] text-accent/50">Save this immediately</div>
</div>
<div className="text-white text-base md:text-lg tracking-wider secret-reveal font-bold break-all">
                                        sol_zk_8829_a7b2_9c1d_f4e2
                                    </div>
</div>
<button className="flex-shrink-0 p-2 hover:bg-white/10 rounded transition-colors text-secondary hover:text-white" title="Copy to clipboard">
<svg aria-hidden="true" className="" data-icon="lucide:copy" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect className="" height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></g></svg>
</button>
</div>
<div className="mt-4 flex gap-2 items-center text-[10px] text-red-400/80 bg-red-900/10 p-2 rounded border border-red-500/10">
<svg aria-hidden="true" data-icon="lucide:alert-triangle" height="12" role="img" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18l-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3M12 9v4m0 4h.01" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Warning: This key is stored in volatile memory. It will vanish on refresh.
                            </div>
</div>
</div>
</div>
</div>
</section>

<div className="w-full border-y border-white/5 bg-black/20 backdrop-blur-sm mb-32 animate-fade-in delay-300" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '0.9217', transform: 'translate(0px, 1.5672px)'}}>
<div className="max-w-7xl mx-auto px-6 py-6 flex flex-wrap justify-center md:justify-between items-center gap-8 md:gap-4">
<div className="flex flex-col text-left">
<span className="text-[10px] uppercase text-secondary/50 text-slate-50 tracking-widest font-mono mb-1">Total Volume</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium text-white font-display" style={{}}>800</span>
<span className="text-xs font-bold text-accent">SOL</span>
</div>
</div>
<div className="h-8 w-px bg-white/5 hidden md:block"></div>
<div className="flex flex-col text-left">
<span className="text-[10px] uppercase text-secondary/50 text-slate-50 tracking-widest font-mono mb-1">Anonymity Set</span>
<div className="flex items-baseline gap-1">
<span className="text-xl font-medium text-white font-display" style={{}}>58</span>
<span className="text-secondary text-xs font-bold text-green-500">Deposits</span>
</div>
</div>
<div className="h-8 w-px bg-white/5 hidden md:block"></div>
<div className="flex hover:grayscale-0 transition-all duration-500 opacity-40 grayscale gap-x-6 gap-y-6 items-center">
<svg aria-hidden="true" data-icon="simple-icons:solana" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m23.876 18.031l-3.962 4.14a.9.9 0 0 1-.306.21a.9.9 0 0 1-.367.074H.46a.47.47 0 0 1-.252-.073a.45.45 0 0 1-.17-.196a.44.44 0 0 1-.031-.255a.44.44 0 0 1 .117-.23l3.965-4.139a.9.9 0 0 1 .305-.21a.9.9 0 0 1 .366-.075h18.78a.47.47 0 0 1 .252.074a.45.45 0 0 1 .17.196a.44.44 0 0 1 .031.255a.44.44 0 0 1-.117.23m-3.962-8.335a.9.9 0 0 0-.306-.21a.9.9 0 0 0-.367-.075H.46a.47.47 0 0 0-.252.073a.45.45 0 0 0-.17.197a.44.44 0 0 0-.031.254a.44.44 0 0 0 .117.23l3.965 4.14a.9.9 0 0 0 .305.21a.9.9 0 0 0 .366.074h18.78a.47.47 0 0 0 .252-.073a.45.45 0 0 0 .17-.196a.44.44 0 0 0 .031-.255a.44.44 0 0 0-.117-.23zM.46 6.723h18.782a.9.9 0 0 0 .367-.075a.9.9 0 0 0 .306-.21l3.962-4.14a.44.44 0 0 0 .117-.23a.44.44 0 0 0-.032-.254a.45.45 0 0 0-.17-.196a.47.47 0 0 0-.252-.073H4.76a.9.9 0 0 0-.366.074a.9.9 0 0 0-.305.21L.125 5.97a.44.44 0 0 0-.117.23a.44.44 0 0 0 .03.254a.45.45 0 0 0 .17.196a.47.47 0 0 0 .252.074z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="w-[24px] h-[24px]" data-icon="simple-icons:rust" data-icon-replaced="true" height="24" role="img" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(212, 212, 212)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="m23.835 11.703l-1.008-.623l-.028-.294l.866-.807a.348.348 0 0 0-.116-.578l-1.106-.414a9 9 0 0 0-.087-.285l.69-.96a.346.346 0 0 0-.226-.544l-1.166-.19a9 9 0 0 0-.14-.261l.49-1.076a.34.34 0 0 0-.028-.336a.35.35 0 0 0-.3-.154l-1.185.041a7 7 0 0 0-.188-.227l.273-1.153a.347.347 0 0 0-.417-.417l-1.153.273l-.228-.188l.041-1.184a.344.344 0 0 0-.49-.328l-1.076.49l-.262-.14l-.19-1.167a.348.348 0 0 0-.545-.226l-.96.69a9 9 0 0 0-.285-.086L14.597.453a.348.348 0 0 0-.578-.116l-.807.867a9 9 0 0 0-.294-.028L12.295.168a.346.346 0 0 0-.59 0l-.623 1.008l-.294.028L9.98.337a.346.346 0 0 0-.578.116l-.414 1.106l-.285.086l-.959-.69a.348.348 0 0 0-.545.226l-.19 1.167a9 9 0 0 0-.262.14l-1.076-.49a.346.346 0 0 0-.49.328l.041 1.184a8 8 0 0 0-.228.187l-1.153-.272a.347.347 0 0 0-.417.417l.271 1.153l-.186.227l-1.184-.042a.346.346 0 0 0-.328.49l.49 1.077a9 9 0 0 0-.14.262l-1.166.19a.348.348 0 0 0-.226.544l.69.958l-.087.286l-1.106.414a.348.348 0 0 0-.116.578l.866.807a9 9 0 0 0-.028.294l-1.008.623a.344.344 0 0 0 0 .59l1.008.623q.012.147.028.294l-.866.807a.346.346 0 0 0 .116.578l1.106.415q.042.144.087.285l-.69.959a.345.345 0 0 0 .227.544l1.166.19q.069.132.14.262l-.49 1.076a.346.346 0 0 0 .328.49l1.183-.041q.093.115.187.227l-.27 1.154a.346.346 0 0 0 .416.417l1.153-.272q.113.096.228.187l-.041 1.184a.344.344 0 0 0 .49.327l1.076-.49q.13.073.262.14l.19 1.167a.348.348 0 0 0 .545.227l.959-.69a9 9 0 0 0 .285.086l.414 1.107a.345.345 0 0 0 .578.115l.808-.865l.294.03l.623 1.006a.347.347 0 0 0 .59 0l.623-1.007q.148-.013.294-.03l.807.866a.348.348 0 0 0 .578-.115l.414-1.107a9 9 0 0 0 .285-.087l.959.69a.345.345 0 0 0 .545-.226l.19-1.166l.262-.14l1.076.49a.347.347 0 0 0 .49-.328l-.041-1.184a7 7 0 0 0 .227-.187l1.153.272a.347.347 0 0 0 .417-.416l-.272-1.155q.095-.112.187-.227l1.184.041a.344.344 0 0 0 .328-.49l-.49-1.076q.072-.13.141-.262l1.166-.19a.348.348 0 0 0 .226-.544l-.69-.959l.087-.285l1.106-.414a.346.346 0 0 0 .116-.579l-.866-.807q.016-.147.028-.294l1.008-.624a.344.344 0 0 0 0-.589zm-6.742 8.355a.714.714 0 0 1 .299-1.396a.714.714 0 1 1-.3 1.396zm-.342-2.314a.65.65 0 0 0-.771.5l-.358 1.669a8.7 8.7 0 0 1-3.619.78a8.7 8.7 0 0 1-3.695-.815L7.95 18.21a.65.65 0 0 0-.772-.5l-1.473.317a9 9 0 0 1-.761-.898h7.167c.081 0 .136-.014.136-.088v-2.536c0-.074-.054-.088-.136-.088h-2.096v-1.608h2.268c.206 0 1.106.059 1.393 1.209c.09.353.288 1.504.424 1.873c.134.413.683 1.238 1.268 1.238h3.572a1 1 0 0 0 .13-.013a9 9 0 0 1-.813.952zm-9.914 2.28a.714.714 0 1 1-.3-1.396a.714.714 0 0 1 .3 1.396M4.117 8.997a.714.714 0 1 1-1.303.58a.714.714 0 0 1 1.304-.58m-.834 1.981l1.534-.682a.65.65 0 0 0 .33-.858l-.316-.715h1.244v5.602H3.567a8.8 8.8 0 0 1-.284-3.348zm6.734-.543V8.784h2.96c.153 0 1.08.177 1.08.87c0 .574-.712.78-1.296.78zm10.757 1.486q0 .329-.024.651h-.9c-.09 0-.127.059-.127.148v.413c0 .973-.548 1.184-1.03 1.238c-.457.052-.964-.191-1.027-.472c-.27-1.518-.72-1.843-1.43-2.403c.882-.56 1.799-1.386 1.799-2.492c0-1.193-.82-1.945-1.377-2.315c-.783-.516-1.65-.62-1.883-.62H5.468a8.77 8.77 0 0 1 4.907-2.77l1.098 1.152a.65.65 0 0 0 .918.02l1.227-1.173a8.78 8.78 0 0 1 6.004 4.276l-.84 1.898a.65.65 0 0 0 .33.859l1.618.718q.042.43.042.872zm-9.3-9.6a.713.713 0 1 1 .984 1.032a.714.714 0 0 1-.984-1.031m8.339 6.71a.71.71 0 0 1 .939-.362a.714.714 0 1 1-.94.364z" fill="currentColor"></path></svg>
<svg aria-hidden="true" data-icon="lucide:shield-check" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
</div>
</div>
</div>

<section className="max-w-7xl mx-auto mb-32 px-6" id="features">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-6 mb-16">
<div className="">
<h2 className="text-white font-display text-4xl font-medium tracking-tight mb-4">Protocol Features</h2>
<p className="text-secondary font-light max-w-xl text-lg">
                        Built for speed, security, and true on-chain privacy.
                    </p>
</div>
<div className="flex gap-2">
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 card p-10 rounded-3xl relative overflow-hidden group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-accent/10 via-background to-background opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-accent/10 border border-accent/20 flex items-center justify-center mb-6 text-accent">
<svg aria-hidden="true" data-icon="lucide:cpu" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12 20v2m0-20v2m5 16v2m0-20v2M2 12h2m-2 5h2M2 7h2m16 5h2m-2 5h2M20 7h2M7 20v2M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></g></svg>
</div>
<h3 className="font-display font-medium text-2xl text-white mb-3">ZK Compression Engine</h3>
<p className="text-secondary text-sm font-light leading-relaxed max-w-md">
                            Utilizing zk-SNARKs (Groth16) for constant-size proofs regardless of transaction volume. Seal Safe ensures validation times under 400ms on Solana Mainnet-Beta.
                        </p>

<div className="mt-8 grid grid-cols-3 gap-4 border-t border-white/5 pt-6">
<div>
<div className="text-[10px] uppercase tracking-wider text-secondary/50 font-mono mb-1">Proof Size</div>
<div className="text-white font-mono text-sm">128 bytes</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-secondary/50 font-mono mb-1">Verify Cost</div>
<div className="text-white font-mono text-sm">~5k CU</div>
</div>
<div>
<div className="text-[10px] uppercase tracking-wider text-secondary/50 font-mono mb-1">Curve</div>
<div className="text-white font-mono text-sm">BN254</div>
</div>
</div>
</div>
</div>

<div className="md:row-span-2 card p-8 rounded-3xl relative overflow-hidden group flex flex-col" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-12 h-12 rounded-xl bg-blue-500/10 border border-blue-500/20 flex items-center justify-center mb-6 text-blue-400">
<svg aria-hidden="true" className="" data-icon="lucide:file-key-2" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M4 22h14a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v6"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><circle className="" cx="4" cy="16" r="2"></circle><path d="m10 10l-4.5 4.5M9 11l1 1"></path></g></svg>
</div>
<h3 className="font-display font-medium text-2xl text-white mb-3">Selective Disclosure</h3>
<p className="text-secondary text-sm font-light leading-relaxed mb-6">
                        Generate "View Keys" to reveal transaction history to auditors or regulators without exposing your private note to the public.
                    </p>
<div className="mt-auto bg-surface border border-white/5 rounded-xl p-4 relative overflow-hidden">
<div className="flex gap-3 border-white/5 border-b mb-3 pb-3 gap-x-3 gap-y-3 items-center">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-400">
<svg aria-hidden="true" data-icon="lucide:check" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="text-xs text-white">
<div className="font-medium">Transaction Processed</div>
<div className="text-white/40">Verifed (2025)</div>
</div>
</div>
<div className="space-y-2">
<div className="h-1.5 w-full bg-white/10 rounded-full overflow-hidden">
<div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
<div className="h-1.5 w-2/3 bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="card p-8 rounded-3xl relative overflow-hidden group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-12 h-12 rounded-xl bg-purple-500/10 border border-purple-500/20 flex items-center justify-center mb-6 text-purple-400">
<svg aria-hidden="true" data-icon="lucide:network" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3m-7-4V8"></path></g></svg>
</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Relayer Network</h3>
<p className="text-secondary text-sm font-light leading-relaxed">
                        Withdraw to brand new wallets with 0 SOL balance. Relayers pay the gas fees in exchange for a small service fee.
                    </p>
</div>

<div className="card p-8 rounded-3xl relative overflow-hidden group" style={{translate: 'none', rotate: 'none', scale: 'none', opacity: '1', transform: 'translate(0px, 0px)'}}>
<div className="w-12 h-12 rounded-xl bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-6 text-orange-400">
<svg aria-hidden="true" data-icon="lucide:coins" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="8" r="6"></circle><path d="M18.09 10.37A6 6 0 1 1 10.34 18M7 6h1v4"></path><path d="m16.71 13.88l.7.71l-2.82 2.82"></path></g></svg>
</div>
<h3 className="font-display font-medium text-xl text-white mb-2">Token Agnostic</h3>
<p className="text-secondary leading-relaxed text-sm font-light">Privacy for more than just SOL. Anonymize USDC too and any standard SPL token with the same anonymity set.</p>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto py-20 border-t border-white/5 px-6" id="how">
<h2 className="font-display font-medium text-4xl text-white mb-20 text-center tracking-tight">How it works</h2>
<div className="relative pl-8 md:pl-0">

<div className="absolute left-8 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-transparent via-white/10 to-transparent -translate-x-1/2 hidden md:block"></div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 relative group">
<div className="md:w-1/2 text-left md:text-right order-2 md:order-1">
<h3 className="text-white font-medium text-xl mb-3 group-hover:text-accent transition-colors">1. The Deposit</h3>
<p className="text-secondary text-sm font-light leading-relaxed">
                            Connect your wallet (Phantom/Solflare). Deposit SOL into the Seal Program. A cryptographic "Note" is generated locally.
                        </p>
</div>
<div className="md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
<div className="w-12 h-12 rounded-full bg-surface border border-white/10 group-hover:border-accent group-hover:shadow-[0_0_20px_rgba(20,241,149,0.4)] transition-all flex items-center justify-center z-10 relative">
<span className="text-sm font-mono text-white group-hover:text-accent">01</span>
</div>
</div>
<div className="md:w-1/2 order-3"></div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 mb-24 relative group">
<div className="md:w-1/2 order-3 md:order-1"></div>
<div className="md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
<div className="w-12 h-12 rounded-full bg-surface border border-white/10 group-hover:border-accent-purple group-hover:shadow-[0_0_20px_rgba(153,69,255,0.4)] transition-all flex items-center justify-center z-10 relative">
<span className="text-sm font-mono text-white group-hover:text-accent-purple">02</span>
</div>
</div>
<div className="md:w-1/2 text-left order-2 md:order-3">
<h3 className="text-white font-medium text-xl mb-3 group-hover:text-accent-purple transition-colors">2. The Mix</h3>
<p className="text-secondary text-sm font-light leading-relaxed">
                            Your funds are pooled in a Program Derived Address (PDA). Mixed with other SOL, the origin becomes mathematically obscure.
                        </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-8 md:gap-16 relative group">
<div className="md:w-1/2 text-left md:text-right order-2 md:order-1">
<h3 className="text-white font-medium text-xl mb-3 group-hover:text-accent transition-colors">3. The Withdrawal</h3>
<p className="text-secondary text-sm font-light leading-relaxed">
                            Submit your Zero-Knowledge proof to the chain. The program verifies it and releases funds to any destination address you choose.
                        </p>
</div>
<div className="md:absolute md:left-1/2 md:-translate-x-1/2 order-1 md:order-2">
<div className="w-12 h-12 rounded-full bg-surface border border-white/10 group-hover:border-accent group-hover:bg-accent group-hover:text-black transition-all flex items-center justify-center z-10 relative shadow-[0_0_15px_rgba(20,241,149,0.3)]">
<svg aria-hidden="true" data-icon="lucide:check" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="md:w-1/2 order-3"></div>
</div>
</div>
</section>

<section className="max-w-3xl mx-auto mt-20 px-6" id="security">
<div className="border border-red-500/20 bg-red-500/[0.02] rounded-xl p-8 flex gap-6 backdrop-blur-sm">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-red-500/10 flex items-center justify-center text-red-500">
<svg aria-hidden="true" className="" data-icon="lucide:alert-octagon" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12 16h.01M12 8v4m3.312-10a2 2 0 0 1 1.414.586l4.688 4.688A2 2 0 0 1 22 8.688v6.624a2 2 0 0 1-.586 1.414l-4.688 4.688a2 2 0 0 1-1.414.586H8.688a2 2 0 0 1-1.414-.586l-4.688-4.688A2 2 0 0 1 2 15.312V8.688a2 2 0 0 1 .586-1.414l4.688-4.688A2 2 0 0 1 8.688 2z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
</div>
<div className="">
<h4 className="text-white text-base font-bold mb-2">Self-Custodial Protocol</h4>
<p className="text-secondary text-sm leading-relaxed mb-4">
                        Seal Safe has no admin keys and cannot freeze funds. However, if you lose your Note (secret key), your funds are mathematically irretrievable.
                    </p>
<div className="flex flex-wrap gap-4 text-[10px] font-mono uppercase tracking-wider text-red-400/80">
<span className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:x" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No Backdoors
                        </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" className="" data-icon="lucide:x" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No Logs
                        </span>
<span className="flex items-center gap-1">
<svg aria-hidden="true" data-icon="lucide:x" height="10" role="img" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M18 6L6 18M6 6l12 12" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg> No KYC
                        </span>
</div>
</div>
</div>
</section>

<footer className="max-w-7xl mx-auto pt-20 pb-10 border-t border-white/5 mt-32 px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4 text-white">
<span className="font-bold">Seal Safe</span>
</div>
<p className="text-xs text-secondary leading-relaxed">
                        The privacy layer for Solana.<br/>
                        Break the link. Stay safe.
                    </p>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Product</h5>
<ul className="space-y-2 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">App</a></li>
<li><a className="hover:text-white transition-colors" href="#">Statistics</a></li>
<li><a className="hover:text-white transition-colors" href="#">Compliance</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Developers</h5>
<ul className="space-y-2 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Github</a></li>
<li><a className="hover:text-white transition-colors" href="#">Audits</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Socials</h5>
<ul className="space-y-2 text-xs text-secondary">
<li><a className="hover:text-white transition-colors" href="#">Twitter (X)</a></li>
<li><a className="hover:text-white transition-colors" href="#">Discord</a></li>
<li><a className="hover:text-white transition-colors" href="#">Telegram</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-6 pt-8 border-t border-white/5">
<span className="text-[10px] text-secondary/50 font-mono">SEAL SAFE PROTOCOL © 2025</span>
<div className="flex items-center gap-2 bg-white/5 px-3 py-1 rounded-full border border-white/5">
<span className="w-2 h-2 rounded-full bg-accent animate-pulse"></span>
<span className="text-[10px] text-white font-mono">Solana Mainnet: Operational</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
