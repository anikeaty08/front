import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



/* Sequence animation on scroll when visible */
(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();
/* Simple Tab Switcher for Code Block */
function switchTab(tabId) {
const tabs = ['tab-backend', 'tab-frontend'];
const contents = ['content-backend', 'content-frontend'];
tabs.forEach(t => {
const el = document.getElementById(t);
if(t === tabId) {
el.classList.add('bg-white/10', 'text-white');
el.classList.remove('text-neutral-500', 'hover:text-neutral-300');
} else {
el.classList.remove('bg-white/10', 'text-white');
el.classList.add('text-neutral-500', 'hover:text-neutral-300');
}
});
contents.forEach(c => {
const el = document.getElementById(c);
if(c === 'content-' + tabId.split('-')[1]) {
el.classList.remove('hidden');
} else {
el.classList.add('hidden');
}
});
}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full h-screen mix-blend-screen -z-20 absolute" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="7WRlj4TRuUxuldc6GVDM"></div>

</div></div>

<div className="fixed inset-0 pointer-events-none z-0 mx-auto max-w-7xl grid-lines hidden md:block border-r border-l border-white/[0.03]"></div>

<div className="fixed z-50 flex animate-on-scroll [animation:animationIn_0.8s_ease-out_0s_both] animate pr-4 pl-4 top-6 right-0 left-0 justify-center">
<nav className="flex bg-neutral-950/80 w-auto h-12 border-white/10 border rounded-full pr-6 pl-6 shadow-lg backdrop-blur-xl items-center justify-center">
<span className="text-lg font-semibold text-white tracking-tight">Layercode</span>
</nav>
</div>

<main className="z-10 relative">

<div className="max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-24 pl-6 relative">
<div className="text-center max-w-4xl mx-auto">
<h1 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] md:text-7xl leading-[1.1] text-5xl font-medium text-white tracking-tight mb-8 animate">
                    Build production-ready voice AI agents <br className="hidden md:block"/>
                    with TypeScript and Next.js
                </h1>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] md:text-xl leading-relaxed text-lg font-light text-neutral-400 tracking-tight max-w-2xl mx-auto mb-10 animate">
                    Layercode is voice AI infrastructure for developers. We handle WebSockets, voice activity detection, and global edge deployment—you focus on your agent's logic.
                </p>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] flex flex-col items-center gap-6 animate">
<div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">

<div className="group relative flex items-center bg-[#111] border border-white/10 rounded-full h-[52px] pl-6 pr-2 shadow-lg hover:border-white/20 transition-colors w-full sm:w-auto min-w-[280px]">
<span className="font-mono text-sm text-neutral-300 mr-auto select-all">npx @layercode/cli init</span>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-500 hover:text-white" title="Copy to clipboard">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>

<button className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Start Building
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex flex-col sm:flex-row items-center gap-6 text-sm">
<span className="text-neutral-500">$100 free credits. No credit card required.</span>
<a className="text-neutral-300 hover:text-white flex items-center gap-1 transition-colors" href="https://docs.layercode.com">
                            Read the docs 
                            <svg fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M7 17l9.2-9.2M17 17V7H7"></path></svg>
</a>
</div>
</div>
</div>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] border-y border-white/5 bg-white/[0.01] animate">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 text-center md:text-left">
<svg className="grayscale opacity-70 hover:opacity-100 hover:grayscale-0 transition-all duration-300" data-icon-set="logos" data-logos="cloudflare" height="32" style={{}} viewbox="0 0 512 76" width="216" xmlns="http://www.w3.org/2000/svg"><path d="M214.633 47.4h7.505v20.704h13.096v6.643h-20.6zm28.361 13.751v-.08c0-7.856 6.257-14.218 14.61-14.218c8.35 0 14.529 6.295 14.529 14.138v.08c0 7.853-6.257 14.218-14.61 14.218s-14.531-6.287-14.531-14.138zm21.49 0v-.08c0-3.948-2.82-7.384-6.96-7.384c-4.142 0-6.84 3.356-6.84 7.304v.08c0 3.945 2.816 7.384 6.92 7.384c4.1 0 6.88-3.358 6.88-7.304m16.827 1.602V47.41h7.613v15.197c0 3.945 1.965 5.815 4.982 5.815c3.014 0 4.982-1.8 4.982-5.627V47.4h7.61v15.157c0 8.832-4.983 12.69-12.673 12.69s-12.524-3.948-12.524-12.5m36.674-15.34h10.438c9.658 0 15.262 5.625 15.262 13.508v.08c0 7.882-5.685 13.747-15.42 13.747h-10.28V47.4v.01zm10.546 20.621c4.487 0 7.454-2.497 7.454-6.912v-.08c0-4.377-2.974-6.915-7.454-6.915h-3.055v13.907zM354.575 47.4h21.637v6.646h-14.145v4.643h12.79v6.287h-12.79v9.771h-7.492zm32.068 0h7.502v20.704h13.098v6.643h-20.6zm40.19-.193h7.223l11.517 27.535h-8.036l-1.978-4.884H425.12l-1.928 4.884h-7.888l11.517-27.535zm6.572 16.755l-3.016-7.773l-3.055 7.773zm21.828-16.554h12.79c4.134 0 7 1.099 8.807 2.966c1.594 1.559 2.394 3.677 2.394 6.365v.08c0 4.177-2.206 6.953-5.566 8.393l6.455 9.53h-8.659l-5.446-8.282h-3.283v8.282h-7.502V47.4l.01.01zm12.446 13.126c2.55 0 4.021-1.247 4.021-3.238v-.077c0-2.149-1.54-3.238-4.06-3.238h-4.905v6.566h4.952l-.008-.01zM490.044 47.4h21.758v6.445h-14.334v4.136h12.988v5.984h-12.988v4.337H512v6.445h-21.956zM198.212 64.356c-1.05 2.4-3.263 4.099-6.2 4.099c-4.09 0-6.916-3.439-6.916-7.384v-.083c0-3.948 2.745-7.303 6.839-7.303c3.084 0 5.436 1.917 6.435 4.535h7.898c-1.267-6.503-6.92-11.37-14.263-11.37c-8.343 0-14.61 6.365-14.61 14.219v.08c0 7.853 6.177 14.138 14.532 14.138c7.136 0 12.72-4.679 14.193-10.943h-7.918l.01.01z"></path><path d="M132.234 32.698c-.552 0-1.097.02-1.641.037a.8.8 0 0 0-.256.06a.92.92 0 0 0-.593.64l-2.334 8.155c-1.006 3.506-.632 6.744 1.06 9.12c1.55 2.2 4.13 3.49 7.263 3.64l12.662.768c.376.02.702.2.9.5c.211.322.258.725.129 1.089a1.61 1.61 0 0 1-1.373 1.069l-13.157.768c-7.147.331-14.838 6.164-17.536 13.277l-.948 2.51a.703.703 0 0 0 .622.958h45.312a1.205 1.205 0 0 0 1.165-.878a33 33 0 0 0 1.204-8.885c0-18.12-14.529-32.808-32.459-32.808" fill="#FBAD41"></path><path d="m112.457 74.235l.838-2.949c1.009-3.506.635-6.744-1.054-9.12c-1.556-2.2-4.134-3.49-7.268-3.64l-59.395-.768a1.17 1.17 0 0 1-.939-.5a1.24 1.24 0 0 1-.13-1.089a1.61 1.61 0 0 1 1.385-1.069l59.95-.768c7.117-.329 14.807-6.164 17.505-13.277l3.419-9.035a2.3 2.3 0 0 0 .1-1.197C122.973 13.199 107.392 0 88.764 0c-17.172 0-31.741 11.199-36.97 26.767A17.37 17.37 0 0 0 39.47 23.32c-8.232.828-14.858 7.534-15.676 15.857a18 18 0 0 0 .452 6.204C10.792 45.78 0 56.92 0 70.608c0 1.238.088 2.457.266 3.647c.073.577.565 1.01 1.147 1.009h109.688a1.43 1.43 0 0 0 1.356-1.05" fill="#F6821F"></path></svg>
<div className="max-w-2xl">
<p className="text-lg text-neutral-300 leading-relaxed font-light mb-3">
                            "Voice AI has unique infrastructure demands that traditional cloud architectures aren't built for. By leveraging Cloudflare, the Layercode team delivers the most performant and low-latency voice AI platform that scales."
                        </p>
<p className="uppercase text-sm font-semibold text-neutral-500 tracking-wide">— Dane Knecht, CTO at Cloudflare</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mr-auto ml-auto pt-32 pr-6 pb-32 pl-6 relative">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-5xl font-medium text-white tracking-tight mb-6 animate">
                    Voice AI demos are easy. 
                    <span className="text-neutral-500">Production is hard.</span>
</h2>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-neutral-400 font-light leading-relaxed animate">
                    You built a working prototype in a weekend. But when real users start talking to your agent, everything breaks:
                </p>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] max-w-2xl mx-auto space-y-4 mb-16">
<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="mt-1 text-red-500 bg-red-500/10 p-1 rounded-md"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg></div>
<span className="text-neutral-300">The agent lags and users talk over it</span>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="mt-1 text-red-500 bg-red-500/10 p-1 rounded-md"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg></div>
<span className="text-neutral-300">Turn-taking feels robotic</span>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="mt-1 text-red-500 bg-red-500/10 p-1 rounded-md"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg></div>
<span className="text-neutral-300">It mispronounces your customer's brand</span>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="mt-1 text-red-500 bg-red-500/10 p-1 rounded-md"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg></div>
<span className="text-neutral-300">Calls fail and you have no idea why</span>
</div>
<div className="flex items-start gap-4 p-4 rounded-xl border border-white/5 bg-white/[0.02]">
<div className="mt-1 text-red-500 bg-red-500/10 p-1 rounded-md"><svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg></div>
<span className="text-neutral-300">Scaling means rewriting your entire infrastructure</span>
</div>
</div>
<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] text-center max-w-2xl mx-auto">
<p className="leading-relaxed text-lg font-light text-neutral-400">The gap between "cool demo" and production-ready voice AI is months of work: WebSocket connection management, voice activity detection tuning, global edge deployment, session recording, and observability tooling. <span className="text-white font-medium">Layercode closes that gap.</span></p>
</div>
</div>

<div className="border-y bg-[#080808] border-white/5 pt-32 pb-32">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-3xl md:text-4xl font-medium text-white tracking-tight">
                        Not a visual builder. Not a framework. <span className="text-neutral-500">Just infrastructure.</span>
</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:workflow"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4">More control than Vapi or Retell</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Visual workflow builders work until your logic gets complex. Then you're fighting the platform instead of building your product.
                            
                            <span className="text-neutral-200">Layercode gives you a webhook. Write TypeScript. Ship.</span>
</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both] p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:code-2"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4">Simpler than LiveKit or Pipecat</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Open-source frameworks give you control, but you're signing up for months of WebRTC, TURN servers, and audio pipeline debugging.
                            
                            <span className="text-neutral-200">Layercode handles the infrastructure. You handle the intelligence.</span>
</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both] p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-colors">
<div className="mb-6 w-10 h-10 rounded-lg bg-neutral-900 border border-white/10 flex items-center justify-center">
<iconify-icon className="text-white" icon="lucide:cpu"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-4">More flexible than OpenAI Realtime</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                            Realtime LLM APIs are black boxes. You can't swap models mid-conversation, control prompts dynamically, or use your own fine-tuned LLM.
                            
                            <span className="text-neutral-200">Layercode calls YOUR backend. You control everything.</span>
</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-32 relative">
<div className="text-center max-w-3xl mx-auto mb-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-neutral-300 text-xs font-medium mb-6">
                    Workflow
                </div>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-5xl font-medium text-white tracking-tight mb-6">
                    Your backend. Our infrastructure.
                </h2>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-lg text-neutral-400 font-light leading-relaxed">
                    Layercode handles real-time audio streaming. You handle the conversation.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div className="group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both]">
<div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Step 01</div>
<div className="h-48 bg-[#0F0F0F] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
<iconify-icon className="text-4xl text-white" icon="solar:user-speak-linear"></iconify-icon>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-blue-500/0 via-blue-500/50 to-blue-500/0"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">User speaks</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Your user talks into their browser, phone, or mobile app. Layercode captures the audio stream at the nearest edge location and runs speech-to-text in real-time.
                    </p>
</div>

<div className="group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.5s_both]">
<div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Step 02</div>
<div className="h-48 bg-[#0F0F0F] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
<iconify-icon className="text-4xl text-white" icon="solar:server-linear"></iconify-icon>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-purple-500/0 via-purple-500/50 to-purple-500/0"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">Your backend responds</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        We send transcribed text to your webhook. You process it with any LLM: OpenAI, Anthropic, Google, open-source models, etc. Stream your response back using our SDK.
                    </p>
</div>

<div className="group relative animate-on-scroll [animation:animationIn_0.8s_ease-out_0.6s_both]">
<div className="text-[10px] font-mono text-neutral-500 uppercase tracking-widest mb-6">Step 03</div>
<div className="h-48 bg-[#0F0F0F] rounded-2xl border border-white/5 flex items-center justify-center mb-6 relative overflow-hidden">
<iconify-icon className="text-4xl text-white" icon="solar:headphones-round-sound-linear"></iconify-icon>
<div className="absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r from-green-500/0 via-green-500/50 to-green-500/0"></div>
</div>
<h3 className="text-xl font-semibold text-white mb-3">User hears the response</h3>
<p className="text-sm text-neutral-400 leading-relaxed">
                        Layercode converts your text to speech and streams audio back to the user. The entire round-trip happens in under a second.
                    </p>
</div>
</div>
<div className="mt-20 pt-10 border-t border-white/5">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1 flex-shrink-0" icon="lucide:arrow-right"></iconify-icon>
<p className="text-sm text-neutral-400">You receive text, you send text. No audio processing, no WebSocket management, no VAD tuning.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1 flex-shrink-0" icon="lucide:arrow-right"></iconify-icon>
<p className="text-sm text-neutral-400">Works with any LLM. OpenAI, Claude, Gemini, Llama, Mistral, etc. Use whatever model fits your use case.</p>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-neutral-500 mt-1 flex-shrink-0" icon="lucide:arrow-right"></iconify-icon>
<p className="text-sm text-neutral-400">Deploy your backend anywhere. Vercel, AWS, Railway, your own servers. Layercode connects to it via webhook.</p>
</div>
</div>
<div className="mt-10 text-center">
<a className="text-white border-b border-white/30 hover:border-white transition-colors pb-0.5 text-sm font-medium" href="#code">See the code →</a>
</div>
</div>
</div>

<div className="bg-[#050505] border-y border-white/5 py-32 relative overflow-hidden" id="code">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-blue-500/[0.03] rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-3xl md:text-4xl font-medium text-white tracking-tight mb-4">
                        Add voice to your Next.js app in under 50 lines
                    </h2>
<p className="text-neutral-400">Layercode's Node.js SDK integrates with the tools you already use. Here's a complete voice agent backend using the Vercel AI SDK:</p>
</div>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] rounded-2xl overflow-hidden border border-white/10 bg-[#0C0D0F] shadow-2xl">

<div className="flex items-center justify-between px-4 py-3 bg-[#111] border-b border-white/5">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-[#2D2D2D]"></div>
<div className="w-3 h-3 rounded-full bg-[#2D2D2D]"></div>
<div className="w-3 h-3 rounded-full bg-[#2D2D2D]"></div>
</div>
<div className="flex gap-1 bg-black/20 p-1 rounded-lg overflow-x-auto">
<button className="px-3 py-1 text-xs font-medium text-white bg-white/10 rounded-md transition-colors whitespace-nowrap" id="tab-backend" onclick="switchTab('tab-backend')">app/api/voice/route.ts</button>
<button className="px-3 py-1 text-xs font-medium text-neutral-500 hover:text-neutral-300 rounded-md transition-colors whitespace-nowrap" id="tab-frontend" onclick="switchTab('tab-frontend')">components/VoiceAgent.tsx</button>
</div>
<div className="w-12 hidden md:block"></div> 
</div>

<div className="p-6 md:p-8 overflow-x-auto">

<pre className="font-mono text-sm leading-relaxed text-neutral-300" id="content-backend"><span className="token keyword">import</span> { createGoogleGenerativeAI } <span className="token keyword">from</span> <span className="token string">"@ai-sdk/google"</span>;
<span className="token keyword">import</span> { streamText } <span className="token keyword">from</span> <span className="token string">"ai"</span>;
<span className="token keyword">import</span> { streamResponse } <span className="token keyword">from</span> <span className="token string">"@layercode/node-server-sdk"</span>;

<span className="token keyword">export</span> <span className="token keyword">const</span> <span className="token function">POST</span> = <span className="token keyword">async</span> (request: <span className="token keyword">Request</span>) =&gt; {
  <span className="token keyword">const</span> google = <span className="token function">createGoogleGenerativeAI</span>();
  <span className="token keyword">const</span> body = <span className="token keyword">await</span> request.<span className="token function">json</span>();

  <span className="token keyword">return</span> <span className="token function">streamResponse</span>(body, <span className="token keyword">async</span> ({ stream }) =&gt; {
    <span className="token keyword">if</span> (body.type === <span className="token string">"message"</span>) {
      <span className="token keyword">const</span> { textStream } = <span className="token function">streamText</span>({
        model: <span className="token function">google</span>(<span className="token string">"gemini-2.0-flash-001"</span>),
        system: <span className="token string">"You are a helpful voice assistant for Acme Corp."</span>,
        messages: [{ role: <span className="token string">"user"</span>, content: body.text }],
        onFinish: () =&gt; stream.<span className="token function">end</span>(),
      });
      
      <span className="token keyword">await</span> stream.<span className="token function">ttsTextStream</span>(textStream);
    }
  });
};</pre>

<pre className="font-mono text-sm leading-relaxed text-neutral-300 hidden" id="content-frontend"><span className="token keyword">import</span> { useLayercodePipeline } <span className="token keyword">from</span> <span className="token string">"@layercode/react-sdk"</span>;

<span className="token keyword">export</span> <span className="token keyword">function</span> <span className="token function">VoiceAgent</span>() {
  <span className="token keyword">const</span> { 
    status, 
    start, 
    stop, 
    agentAudioAmplitude 
  } = <span className="token function">useLayercodePipeline</span>({ 
    pipelineId: process.env.NEXT_PUBLIC_PIPELINE_ID 
  });

  <span className="token keyword">return</span> (
    <span className="token operator">&lt;</span>div className=<span className="token string">"flex flex-col items-center gap-4"</span><span className="token operator">&gt;</span>
      <span className="token operator">&lt;</span>AudioVisualizer amplitude={agentAudioAmplitude} /<span className="token operator">&gt;</span>
      
      <span className="token operator">&lt;</span>button 
        onClick={status === <span className="token string">"connected"</span> ? stop : start}
        className=<span className="token string">"px-6 py-3 bg-blue-600 text-white rounded-lg"</span>
      <span className="token operator">&gt;</span>
        {status === <span className="token string">"connected"</span> ? <span className="token string">"End Call"</span> : <span className="token string">"Start Call"</span>}
      <span className="token operator">&lt;</span>/button<span className="token operator">&gt;</span>
      
      <span className="token operator">&lt;</span>p className=<span className="token string">"text-sm text-gray-500"</span><span className="token operator">&gt;</span>Status: {status}<span className="token operator">&lt;</span>/p<span className="token operator">&gt;</span>
    <span className="token operator">&lt;</span>/div<span className="token operator">&gt;</span>
  );
}</pre>
</div>
</div>

<div className="mt-16 text-center">
<p className="text-xs font-bold uppercase tracking-widest text-neutral-600 mb-8">Works with the LLM libraries you already use</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-40 hover:opacity-100 transition-opacity duration-300 grayscale hover:grayscale-0">
<div className="flex items-center gap-2"><iconify-icon icon="logos:vercel-icon" width="24"></iconify-icon><span className="font-bold text-lg text-white font-mono">Vercel AI SDK</span></div>
<span className="font-bold text-lg text-white font-mono">LangChain</span>
<iconify-icon icon="logos:openai-icon" width="24"></iconify-icon>
<iconify-icon icon="logos:anthropic-icon" width="24"></iconify-icon>
<iconify-icon icon="logos:google-icon" width="24"></iconify-icon>
<span className="font-bold text-lg text-white font-mono">LlamaIndex</span>
<span className="font-bold text-lg text-white font-mono">Ollama</span>
<span className="font-bold text-lg text-white font-mono">Groq</span>
</div>
<div className="mt-12">
<a className="text-white border-b border-white/30 hover:border-white transition-colors pb-0.5 text-sm font-medium" href="https://docs.layercode.com/quickstart">View the full quickstart guide →</a>
</div>
</div>
</div>
</div>

<div className="bg-[#050505] border-y border-white/5 py-32">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-3xl md:text-5xl font-medium text-white tracking-tight mb-4">
                        Everything you need to ship voice AI
                    </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:arrow-left-right"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Hot-swap voice providers</h3>
<p className="text-sm text-neutral-400">Avoid vendor lock-in: Switch between Deepgram, ElevenLabs, Cartesia and Rime with a single config change. Test different models, optimize for cost or quality.</p>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:activity"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Analytics &amp; Observability</h3>
<p className="text-sm text-neutral-400">Replay any conversation. Inspect latency breakdowns, and view transcripts to debug production issues.</p>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:mic"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Session recording</h3>
<p className="text-sm text-neutral-400">Every call is recorded automatically. Download audio files, export transcripts, build training datasets. All stored securely.</p>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:zap"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Per-second billing</h3>
<p className="text-sm text-neutral-400">Pay only for active conversation time. Silence is always free. No minimum commitments.</p>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:smartphone"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Web, mobile, and phone</h3>
<p className="text-sm text-neutral-400">Connect users via browser, iOS, Android, or phone. Same backend, same pipeline, multiple channels.</p>
</div>

<div className="p-8 rounded-2xl bg-[#0A0A0A] border border-white/5 hover:border-white/10 transition-colors">
<iconify-icon className="text-2xl text-white mb-4" icon="lucide:receipt"></iconify-icon>
<h3 className="text-lg font-semibold text-white mb-2">Unified billing</h3>
<p className="text-sm text-neutral-400">One invoice for speech-to-text, text-to-speech, and infrastructure.</p>
</div>
</div>
<div className="mt-16 text-center">
<p className="text-lg text-neutral-300 italic max-w-2xl mx-auto font-light">
                        "Layercode made it very easy to build and prototype low-latency voice features for our text-based agents built with NextJS and React."
                    </p>
<p className="mt-4 text-xs font-bold text-neutral-500 uppercase tracking-wide">— Lance Jones, AI Agent Developer</p>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-32 relative">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-20 text-[10px] md:text-xs font-mono text-neutral-500 uppercase tracking-[0.2em] gap-4">
<div className="flex items-center gap-2">
<span className="text-white">Global Edge</span>
<span className="w-12 h-px bg-white/10"></span>
</div>
<div className="text-right">INFRASTRUCTURE</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-4xl md:text-6xl font-medium text-white tracking-tight mb-4">
                        330+ edge locations. 
                        Sub-50ms audio processing.
                    </h2>
<p className="text-lg text-neutral-400 mb-8">The first voice AI infrastructure built for low-latency conversations at global scale.</p>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-neutral-400 font-light leading-relaxed mb-8">
                        Traditional voice AI platforms run on centralized cloud infrastructure. When your user is in Tokyo and your servers are in Virginia, latency kills the conversation. Pauses feel unnatural. Users talk over the agent. The experience falls apart.
                        
                        Layercode is built on Cloudflare's global edge network. We process audio at the location nearest to your user—not in a distant data center.
                    </p>
<div className="grid grid-cols-2 gap-8 mb-10">
<div className="border-l border-white/10 pl-6">
<div className="text-3xl font-bold text-white mb-1">330+</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Edge locations worldwide</div>
</div>
<div className="border-l border-white/10 pl-6">
<div className="text-3xl font-bold text-white mb-1">&lt;50ms</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Audio processing at edge</div>
</div>
<div className="border-l border-white/10 pl-6">
<div className="text-3xl font-bold text-white mb-1">Zero</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Cold starts</div>
</div>
<div className="border-l border-white/10 pl-6">
<div className="text-3xl font-bold text-white mb-1">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-wide">Session isolation</div>
</div>
</div>
</div>
<div className="bg-[#0A0A0A] rounded-3xl border border-white/10 p-8 relative overflow-hidden h-full min-h-[400px] flex flex-col justify-center">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent"></div>
<div className="relative z-10 space-y-6 pl-4">
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<div>
<h4 className="text-white font-semibold mb-1">Low-latency by default</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Users connect to the nearest edge location. Speech-to-text, voice activity detection, and audio streaming happen locally—in milliseconds, not hundreds of milliseconds.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<div>
<h4 className="text-white font-semibold mb-1">Instant, automatic scaling</h4>
<p className="text-sm text-neutral-400 leading-relaxed">No capacity planning. No provisioning. Every conversation runs in its own isolated environment that scales automatically with demand.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<div>
<h4 className="text-white font-semibold mb-1">No noisy neighbors</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Platform traffic spikes don't affect your users. Each session runs in complete isolation with dedicated resources.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-1 w-2 h-2 rounded-full bg-green-500 shadow-[0_0_10px_rgba(34,197,94,0.5)]"></div>
<div>
<h4 className="text-white font-semibold mb-1">Global without configuration</h4>
<p className="text-sm text-neutral-400 leading-relaxed">Deploy once, serve users everywhere. No multi-region setup, no latency-based routing rules, no infrastructure headaches.</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-y border-white/5 bg-[#080808] py-20">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl font-medium text-white mb-4">Enterprise-ready security</h2>
<p className="text-neutral-400 mb-8 max-w-2xl mx-auto">
                    Layercode is built for production workloads with enterprise security requirements. Your data is encrypted in transit and at rest. Session recordings are stored securely in SOC 2 compliant infrastructure and accessible only to your team.
                </p>
<div className="flex flex-wrap justify-center gap-4">
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 font-medium flex items-center gap-2"><iconify-icon icon="lucide:shield-check"></iconify-icon> SOC 2 Type II</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 font-medium flex items-center gap-2"><iconify-icon icon="lucide:lock"></iconify-icon> GDPR Compliant</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 font-medium flex items-center gap-2"><iconify-icon icon="lucide:arrow-right-left"></iconify-icon> Data encrypted in transit (TLS 1.3)</span>
<span className="px-4 py-2 rounded-full border border-white/10 bg-white/5 text-xs text-neutral-300 font-medium flex items-center gap-2"><iconify-icon icon="lucide:server"></iconify-icon> Data encrypted at rest (AES-256)</span>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 py-24 text-center">
<h2 className="text-3xl font-medium text-white mb-4">Simple, predictable pricing</h2>
<p className="text-neutral-400 max-w-xl mx-auto mb-8">
                Per-second billing for active conversation time. Silence is free. STT, TTS, and infrastructure costs consolidated into one simple rate.
                
                Start with <span className="text-white">$100 in free credits</span>—no credit card required.
             </p>
<a className="text-white border-b border-white/30 hover:border-white transition-colors pb-0.5 text-sm font-medium" href="https://layercode.com/pricing">View pricing details →</a>
</div>

<div className="relative py-32 bg-[#050505] overflow-hidden border-t border-white/5">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-white/[0.03] rounded-full blur-[120px] pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.2s_both] text-5xl md:text-7xl font-medium text-white tracking-tight mb-8">
                    Ship your first voice agent today
                </h2>
<p className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.3s_both] text-xl text-neutral-400 font-light max-w-2xl mx-auto mb-12">
                    From zero to production-ready in under 5 minutes. $100 in free credits to get started.
                </p>

<div className="animate-on-scroll [animation:animationIn_0.8s_ease-out_0.4s_both] flex flex-col items-center gap-6 mb-16">
<div className="flex flex-col sm:flex-row gap-4 items-center w-full justify-center">
<div className="group relative flex items-center bg-[#111] border border-white/10 rounded-full h-[52px] pl-6 pr-2 shadow-lg w-full sm:w-auto min-w-[280px]">
<span className="font-mono text-sm text-neutral-300 mr-auto select-all">npx @layercode/cli init</span>
<button className="p-2 hover:bg-white/10 rounded-full transition-colors text-neutral-500 hover:text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
<button className="w-full sm:w-auto h-[52px] px-8 rounded-full bg-white text-black font-semibold hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
                            Start Building
                            <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
<div className="flex gap-6 text-sm text-neutral-400">
<a className="hover:text-white transition-colors" href="https://docs.layercode.com">Read the docs</a>
<span className="text-white/20">|</span>
<a className="hover:text-white transition-colors" href="https://layercode.com/contact">Talk to us</a>
</div>
</div>
<div className="max-w-2xl mx-auto p-6 bg-white/[0.02] border border-white/5 rounded-2xl text-left">
<p className="text-neutral-300 italic mb-4">
                        "Layercode unlocks a huge world of integrated voice-based interactions for apps now that LLMs can handle real-time understanding and response. Having a pre-built, scalable infrastructure ready in minutes means you can focus on crafting the actual experience rather than wrangling webhook APIs, latency, and security issues. Worth experimenting with if you're exploring next-gen conversational products."
                    </p>
<p className="text-xs font-bold text-neutral-500 uppercase tracking-wide">— Josh Lannin, VP Accelerate AI, Workday</p>
</div>
</div>
</div>
</main>

<footer className="bg-[#050505] border-t border-white/5 pt-24 pb-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-12 gap-12 md:gap-8 mb-20">

<div className="col-span-2 md:col-span-4">
<div className="flex items-center gap-2 mb-6">
<span className="text-xl font-bold tracking-tight text-white">Layercode</span>
</div>
<form className="flex flex-col gap-2 max-w-xs">
<p className="text-sm text-neutral-500 mb-2">Get product updates</p>
<div className="flex gap-2">
<input className="bg-[#111] border border-white/10 rounded-md px-3 py-2 text-sm text-white w-full outline-none focus:border-white/30" placeholder="email@example.com" type="email"/>
<button className="bg-white/10 text-white px-3 py-2 rounded-md text-sm font-medium hover:bg-white/20 transition-colors">Subscribe</button>
</div>
</form>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-white mb-6">Product</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-white mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Quickstart Guide</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">GitHub</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-white mb-6">Company</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Startup Program</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-sm font-semibold text-white mb-6">Legal</h4>
<ul className="space-y-4 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
<p className="text-xs text-neutral-600 font-medium">© 2024 Layercode Inc. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" width="18"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:github" width="18"></iconify-icon></a>
<a className="text-neutral-600 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="18"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
