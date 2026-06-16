import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



function switchTab(tab) {
const backendCode = document.getElementById('code-backend');
const frontendCode = document.getElementById('code-frontend');
const backendTab = document.getElementById('tab-backend');
const frontendTab = document.getElementById('tab-frontend');
const filename = document.getElementById('filename-display');
if (tab === 'backend') {
backendCode.classList.remove('hidden');
frontendCode.classList.add('hidden');
backendTab.classList.add('text-white', 'border-b', 'border-white');
backendTab.classList.remove('text-neutral-500', 'border-transparent');
frontendTab.classList.remove('text-white', 'border-b', 'border-white');
frontendTab.classList.add('text-neutral-500', 'border-transparent');
filename.textContent = 'app/api/agent/route.ts';
} else {
backendCode.classList.add('hidden');
frontendCode.classList.remove('hidden');
frontendTab.classList.add('text-white', 'border-b', 'border-white');
frontendTab.classList.remove('text-neutral-500', 'border-transparent');
backendTab.classList.remove('text-white', 'border-b', 'border-white');
backendTab.classList.add('text-neutral-500', 'border-transparent');
filename.textContent = 'components/VoiceAgent.tsx';
}
}
// Initialize Lucide icons
window.onload = function() {
if (window.lucide) {
lucide.createIcons();
}
};

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] crt-line opacity-20 pointer-events-none mix-blend-overlay"></div>


<main className="md:pt-48 md:pb-24 border-white/10 border-b pt-32 pr-6 pb-20 pl-6 relative">
<div className="absolute inset-0 grid-bg -z-10"></div>
<div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">
<div className="flex mb-8 justify-center">
<a className="flex items-center gap-2 group" href="/">
<div className="relative w-8 h-8 text-[#FF4F30]">
<svg className="w-full h-full" fill="currentColor" viewbox="0 0 24 24">
<path d="M2 2h5v15a5 5 0 0 1-5 5V2z"></path>
<path d="M9.5 7a5 5 0 0 1 5-5h0a5 5 0 0 1 5 5v15h-5V7z"></path>
<path d="M22 2h-5v15a5 5 0 0 0 5 5V2z"></path>
</svg>
</div>
<span className="mono group-hover:text-neutral-300 text-lg text-white tracking-tight ml-1">
              Layercode
            </span>
</a>
</div>

<h1 className="md:text-7xl serif leading-[0.9] retro-glow text-5xl font-medium text-white tracking-tight">
          Build production-ready voice AI
          <br/>
          agents with
          <span className="italic text-neutral-400">TypeScript</span>
          and
          <span className="italic text-neutral-400">Next.js</span>
</h1>

<p className="md:text-xl leading-relaxed text-lg font-light text-neutral-400 max-w-2xl mr-auto ml-auto" style={{}}>Layercode is voice AI infrastructure for developers. We handle WebSockets, voice activity detection, and deployment. You focus on your agent's logic.</p>

<div className="inline-flex items-center gap-3 bg-[#111] border border-white/10 rounded px-4 py-2 mono text-sm text-neutral-300">
<span className="text-green-400">$</span>
<span className="">npx @layercode/cli init</span>
<button aria-label="Copy" className="ml-2 text-neutral-500 hover:text-white transition-colors group relative">
<svg className="lucide lucide-copy w-3.5 h-3.5" data-lucide="copy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>

<div className="flex flex-col md:flex-row items-center justify-center gap-4 pt-4">
<a className="w-full md:w-auto h-12 px-6 bg-white text-black mono text-sm font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2" href="https://dash.layercode.com/sign-up">
<span>Start Building</span>
<svg className="lucide lucide-arrow-right w-3.5 h-3.5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="w-full md:w-auto h-12 px-6 border border-white/20 text-white mono text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2" href="https://docs.layercode.com">
<svg className="lucide lucide-book w-3.5 h-3.5" data-lucide="book" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H19a1 1 0 0 1 1 1v18a1 1 0 0 1-1 1H6.5a1 1 0 0 1 0-5H20"></path></svg>
<span>Read the docs</span>
</a>
</div>

<p className="mono text-xs text-neutral-500 pt-2">
          $100 free credits. No credit card required.
        </p>

<div className="max-w-xl mx-auto mt-12 text-left">
<div className="border border-white/10 bg-black shadow-2xl rounded-sm overflow-hidden">
<div className="h-6 border-b border-white/10 flex items-center px-3 bg-[#0A0A0A] gap-2">
<div className="w-2 h-2 rounded-full bg-red-500/50"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500/50"></div>
<div className="w-2 h-2 rounded-full bg-green-500/50"></div>
</div>
<div className="p-4 mono text-xs md:text-sm text-neutral-400 font-light leading-relaxed">
<div className="flex gap-2">
<span className="text-green-400">$</span>
<span className="text-white">npx @layercode/cli init</span>
</div>
<div className="text-neutral-500 mt-2">
                Initializing project configuration...
              </div>
<div className="flex items-center gap-2 mt-1">
<span className="text-green-400">✓</span>
                Created pipeline configuration
              </div>
<div className="flex items-center gap-2">
<span className="text-green-400">✓</span>
                Generated API route template
              </div>
<div className="flex items-center gap-2">
<span className="text-green-400">✓</span>
                Installed dependencies
              </div>
<div className="mt-4 text-white">
                Your voice agent is ready. Run
                <span className="text-blue-400">npm run dev</span>
                to start.
              </div>
</div>
</div>
</div>
</div>
</main>

<section className="bg-[#080808] border-white/10 border-b pt-10 pb-10">
<div className="flex flex-col md:flex-row md:gap-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 gap-x-8 gap-y-8 items-center justify-center">

<div className="text-white opacity-80 hover:opacity-100 transition-opacity flex flex-col items-center md:items-start gap-4">
<svg aria-hidden="true" className="iconify iconify--logos" data-icon="logos:cloudflare-icon" data-width="40" height="18.29" role="img" viewbox="0 0 256 117" width="40" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M205.52 50.813c-.858 0-1.705.03-2.551.058q-.207.012-.398.094a1.42 1.42 0 0 0-.92.994l-3.628 12.672c-1.565 5.449-.983 10.48 1.646 14.174c2.41 3.416 6.42 5.421 11.289 5.655l19.679 1.194c.585.03 1.092.312 1.4.776a1.92 1.92 0 0 1 .2 1.692a2.5 2.5 0 0 1-2.134 1.662l-20.448 1.193c-11.11.515-23.062 9.58-27.255 20.633l-1.474 3.9a1.092 1.092 0 0 0 .967 1.49h70.425a1.87 1.87 0 0 0 1.81-1.365A51.2 51.2 0 0 0 256 101.828c0-28.16-22.582-50.984-50.449-50.984" fill="#FBAD41"></path>
<path className="" d="m174.782 115.362l1.303-4.583c1.568-5.449.987-10.48-1.639-14.173c-2.418-3.417-6.424-5.422-11.296-5.656l-92.312-1.193a1.82 1.82 0 0 1-1.459-.776a1.92 1.92 0 0 1-.203-1.693a2.5 2.5 0 0 1 2.154-1.662l93.173-1.193c11.063-.511 23.015-9.58 27.208-20.633l5.313-14.04c.214-.596.27-1.238.156-1.86C191.126 20.51 166.91 0 137.96 0C111.269 0 88.626 17.403 80.5 41.596a27 27 0 0 0-19.156-5.359C48.549 37.524 38.25 47.946 36.979 60.88a27.9 27.9 0 0 0 .702 9.642C16.773 71.145 0 88.454 0 109.726c0 1.923.137 3.818.413 5.667c.115.897.879 1.57 1.783 1.568h170.48a2.22 2.22 0 0 0 2.106-1.63" fill="#F6821F"></path>
</svg>
</div>
<div className="flex flex-col md:flex-row items-center gap-4 text-center md:text-left">
<p className="serif text-xl italic text-neutral-300 leading-snug max-w-2xl">
            "Voice AI has unique infrastructure demands that traditional cloud
            architectures aren't built for. By leveraging Cloudflare, the
            Layercode team delivers the most performant and low-latency voice AI
            platform that scales."
          </p>
<div className="flex items-center gap-3 pl-4 border-l border-white/10">
<div className="rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center mono text-white shrink-0">
              DK
            </div>
<div className="">
<div className="mono text-lg font-normal text-white">Dane Knecht</div>
<div className="mono text-sm text-neutral-500">CTO at Cloudflare</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#050505] border-white/10 border-b pt-32 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(249,115,22,0.15),transparent_70%)] opacity-80"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:16px_16px] [mask-image:radial-gradient(ellipse_at_top,black_40%,transparent_80%)]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10">

<div className="text-center mb-10 space-y-1">
<h2 className="text-4xl md:text-6xl font-semibold text-white tracking-tight leading-tight">
            Voice AI demos are easy.
          </h2>
<h2 className="text-4xl md:text-6xl font-semibold text-white/20 tracking-tight leading-tight">
            Production is hard.
          </h2>
</div>
<p className="text-neutral-400 text-center text-lg mb-16 font-light max-w-2xl mx-auto leading-relaxed">
          You built a working prototype in a weekend. But when real users start
          talking to your agent, everything breaks:
        </p>

<div className="space-y-4 max-w-2xl mx-auto">

<div className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-colors">
<div className="shrink-0 w-8 h-8 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30]">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-neutral-300 font-normal">
              The agent lags and users talk over it
            </span>
</div>

<div className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-colors">
<div className="shrink-0 w-8 h-8 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30]">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-neutral-300 font-normal">
              Turn-taking feels robotic
            </span>
</div>

<div className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-colors">
<div className="shrink-0 w-8 h-8 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30]">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-neutral-300 font-normal">
              It mispronounces your customer's brand
            </span>
</div>

<div className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-colors">
<div className="shrink-0 w-8 h-8 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30]">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-neutral-300 font-normal">
              Calls fail and you have no idea why
            </span>
</div>

<div className="group flex items-center gap-5 p-5 rounded-xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.03] transition-colors">
<div className="shrink-0 w-8 h-8 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30]">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</div>
<span className="text-neutral-300 font-normal">
              Scaling means rewriting your entire infrastructure
            </span>
</div>
</div>

<div className="mt-16 text-center space-y-6">
<p className="text-neutral-400 font-light leading-relaxed max-w-2xl mx-auto text-sm md:text-base">
            The gap between "cool demo" and production-ready voice AI is months
            of work: WebSocket connection management, voice activity detection
            tuning, global edge deployment, session recording, and observability
            tooling.
          </p>
<p className="text-white font-semibold text-lg tracking-tight">
            Layercode closes that gap.
          </p>
</div>
</div>
</section>

<section className="bg-[#050505] border-white/10 border-b pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-4">
            Not a visual builder. Not a framework. Just infrastructure.
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-6 border border-white/5 bg-white/[0.02] rounded-lg">
<div className="w-10 h-10 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30] mb-4">
<svg className="lucide lucide-code-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m18 16 4-4-4-4"></path>
<path d="m6 8-4 4 4 4"></path>
<path d="m14.5 4-5 16"></path>
</svg>
</div>
<h4 className="text-white font-medium mb-3 text-lg">
              More control than Vapi or Retell
            </h4>
<p className="text-neutral-400 text-sm leading-relaxed">
              Visual workflow builders work until your logic gets complex. Then
              you're fighting the platform instead of building your product.
              Layercode gives you a webhook. Write TypeScript. Ship.
            </p>
</div>

<div className="p-6 border border-white/5 bg-white/[0.02] rounded-lg">
<div className="w-10 h-10 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30] mb-4">
<svg className="lucide lucide-server w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect>
<rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect>
<line x1="6" x2="6.01" y1="6" y2="6"></line>
<line x1="6" x2="6.01" y1="18" y2="18"></line>
</svg>
</div>
<h4 className="text-white font-medium mb-3 text-lg">
              Simpler than LiveKit or Pipecat
            </h4>
<p className="text-neutral-400 text-sm leading-relaxed">
              Open-source frameworks give you control, but you're signing up for
              months of WebRTC, TURN servers, and audio pipeline debugging.
              Layercode handles the infrastructure. You handle the intelligence.
            </p>
</div>

<div className="p-6 border border-white/5 bg-white/[0.02] rounded-lg">
<div className="w-10 h-10 rounded bg-[#2A1515] flex items-center justify-center text-[#FF4F30] mb-4">
<svg className="lucide lucide-settings-2 w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M20 7h-9"></path>
<path d="M14 17H5"></path>
<circle cx="17" cy="17" r="3"></circle>
<circle cx="7" cy="7" r="3"></circle>
</svg>
</div>
<h4 className="text-white font-medium mb-3 text-lg">
              More flexible than OpenAI Realtime
            </h4>
<p className="text-neutral-400 text-sm leading-relaxed">
              Realtime LLM APIs are black boxes. You can't swap models
              mid-conversation, control prompts dynamically, or use your own
              fine-tuned LLM. Layercode calls YOUR backend. You control
              everything.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/10 relative">
<div className="absolute inset-0 grid-bg opacity-10"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-4">
            Your backend. Our infrastructure.
          </h2>
<p className="text-neutral-400 font-light">
            Layercode handles real-time audio streaming. You handle the
            conversation.
          </p>
</div>

<div className="max-w-4xl mx-auto mb-16">
<div className="flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4 text-center md:text-left">

<div className="flex-1 flex flex-col items-center p-6 border border-white/5 bg-[#050505] rounded-lg h-full">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-[#FF4F30]">
<svg className="lucide lucide-mic w-6 h-6" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>
<h3 className="text-white font-medium mb-2">User speaks</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                Your user talks into their browser, phone, or mobile app.
                Layercode captures the audio stream at the nearest edge location
                and runs speech-to-text in real-time.
              </p>
</div>

<div className="hidden md:block text-neutral-600">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="md:hidden text-neutral-600 rotate-90">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="flex-1 flex flex-col items-center p-6 border border-white/10 bg-[#050505] rounded-lg shadow-[0_0_30px_rgba(255,255,255,0.05)] ring-1 ring-white/20 h-full">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center mb-4 text-white">
<svg className="lucide lucide-server w-6 h-6" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<h3 className="text-white font-medium mb-2">Your backend responds</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                We send transcribed text to your webhook. You process it with
                any LLM: OpenAI, Anthropic, Google, open-source models, etc.
                Stream your response back using our SDK.
              </p>
</div>

<div className="hidden md:block text-neutral-600">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
<div className="md:hidden text-neutral-600 rotate-90">
<svg className="lucide lucide-arrow-right w-6 h-6" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>

<div className="flex-1 flex flex-col items-center p-6 border border-white/5 bg-[#050505] rounded-lg h-full">
<div className="w-12 h-12 bg-white/5 rounded-full flex items-center justify-center mb-4 text-[#FF4F30]">
<svg className="lucide lucide-volume-2 w-6 h-6" data-lucide="volume-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 4.702a.705.705 0 0 0-1.203-.498L6.413 7.587A1.4 1.4 0 0 1 5.416 8H3a1 1 0 0 0-1 1v6a1 1 0 0 0 1 1h2.416a1.4 1.4 0 0 1 .997.413l3.383 3.384A.705.705 0 0 0 11 19.298z"></path><path d="M16 9a5 5 0 0 1 0 6"></path><path d="M19.364 18.364a9 9 0 0 0 0-12.728"></path></svg>
</div>
<h3 className="text-white font-medium mb-2">User hears response</h3>
<p className="text-neutral-500 text-xs leading-relaxed">
                Layercode converts your text to speech and streams audio back to
                the user. The entire round-trip happens in under a second.
              </p>
</div>
</div>
</div>

<div className="max-w-2xl mx-auto space-y-4 mb-12">
<div className="flex gap-4 items-start">
<span className="text-[#FF4F30] mt-1 shrink-0">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<p className="text-neutral-400 text-sm leading-relaxed">
              You receive text, you send text. No audio processing, no WebSocket
              management, no VAD tuning.
            </p>
</div>
<div className="flex gap-4 items-start">
<span className="text-[#FF4F30] mt-1 shrink-0">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<p className="text-neutral-400 text-sm leading-relaxed">
              OpenAI, Claude, Gemini, Llama, Mistral, etc. Use whatever model
              fits your use case.
            </p>
</div>
<div className="flex gap-4 items-start">
<span className="text-[#FF4F30] mt-1 shrink-0">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</span>
<p className="text-neutral-400 text-sm leading-relaxed">
              Vercel, AWS, Railway, your own servers. Layercode connects to it
              via webhook.
            </p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center gap-2 text-white mono text-sm hover:text-[#FF4F30] transition-colors" href="#code-section">
            See the code
            <svg className="lucide lucide-arrow-down w-3.5 h-3.5" data-lucide="arrow-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="m19 12-7 7-7-7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/10" id="code-section">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-4">
            Add voice to your Next.js app in under 50 lines
          </h2>
<p className="text-neutral-400 font-light max-w-2xl mx-auto">
            Layercode's Node.js SDK integrates with the tools you already use.
            Here's a complete voice agent backend using the Vercel AI SDK:
          </p>
</div>

<div className="border border-white/10 bg-[#0A0A0A] rounded-lg shadow-2xl overflow-hidden">

<div className="flex items-center border-b border-white/10 bg-[#050505] px-4">
<div className="flex gap-2 py-3 mr-6">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<button className="px-4 py-3 text-xs mono text-white border-b border-white hover:text-white transition-colors" id="tab-backend" onclick="switchTab('backend')">
              Server
            </button>
<button className="px-4 py-3 text-xs mono text-neutral-500 border-transparent hover:text-white transition-colors" id="tab-frontend" onclick="switchTab('frontend')">
              Client
            </button>
<div className="ml-auto mono text-[10px] text-neutral-600 hidden md:block" id="filename-display">
              app/api/agent/route.ts
            </div>
</div>

<div className="p-6 overflow-x-auto bg-[#0A0A0A]">

<pre className="mono text-xs md:text-sm leading-relaxed text-neutral-300" id="code-backend"><span className="text-purple-400">import</span> { createOpenAI } <span className="text-purple-400">from</span> <span className="text-green-400">"@ai-sdk/openai"</span>;
<span className="text-purple-400">import</span> { streamText } <span className="text-purple-400">from</span> <span className="text-green-400">"ai"</span>;
<span className="text-purple-400">import</span> { streamResponse, verifySignature } <span className="text-purple-400">from</span> <span className="text-green-400">"@layercode/node-server-sdk"</span>;

<span className="text-purple-400">const</span> openai = <span className="text-blue-400">createOpenAI</span>({ apiKey: process.env.OPENAI_API_KEY! });

<span className="text-purple-400">export const</span> <span className="text-blue-400">POST</span> = <span className="text-purple-400">async</span> (request: Request) =&gt; {
  <span className="text-purple-400">const</span> body = <span className="text-purple-400">await</span> request.<span className="text-blue-400">json</span>();

  <span className="text-purple-400">return</span> <span className="text-blue-400">streamResponse</span>(body, <span className="text-purple-400">async</span> ({ stream }) =&gt; {
    <span className="text-purple-400">if</span> (body.type === <span className="text-green-400">"message"</span>) {
      <span className="text-purple-400">const</span> { textStream } = <span className="text-blue-400">streamText</span>({
        model: <span className="text-blue-400">openai</span>(<span className="text-green-400">"gpt-4o-mini"</span>),
        system: <span className="text-green-400">"You are a helpful voice assistant."</span>,
        messages: [{ role: <span className="text-green-400">"user"</span>, content: body.text }],
        onFinish: () =&gt; stream.<span className="text-blue-400">end</span>(),
      });
      
      <span className="text-purple-400">await</span> stream.<span className="text-blue-400">ttsTextStream</span>(textStream);
    }
  });
};</pre>

<pre className="mono text-xs md:text-sm leading-relaxed text-neutral-300 hidden" id="code-frontend"><span className="text-green-400">"use client"</span>;
<span className="text-purple-400">import</span> { useLayercodeAgent } <span className="text-purple-400">from</span> <span className="text-green-400">"@layercode/react-sdk"</span>;

<span className="text-purple-400">export default function</span> <span className="text-blue-400">VoiceAgent</span>() {
  <span className="text-purple-400">const</span> { status, agentAudioAmplitude } = <span className="text-blue-400">useLayercodeAgent</span>({
    agentId: process.env.NEXT_PUBLIC_LAYERCODE_AGENT_ID!,
    authorizeSessionEndpoint: <span className="text-green-400">"/api/authorize"</span>,
  });

  <span className="text-purple-400">return</span> (
    &lt;<span className="text-blue-400">div</span> <span className="text-purple-400">className</span>=<span className="text-green-400">"flex flex-col items-center gap-4"</span>&gt;
      &lt;<span className="text-blue-400">AudioVisualizer</span> <span className="text-purple-400">amplitude</span>={agentAudioAmplitude} /&gt;
      &lt;<span className="text-blue-400">p</span> <span className="text-purple-400">className</span>=<span className="text-green-400">"text-sm text-gray-500"</span>&gt;
        {status === <span className="text-green-400">"connected"</span> ? <span className="text-green-400">"Connected"</span> : <span className="text-green-400">"Disconnected"</span>}
      &lt;/<span className="text-blue-400">p</span>&gt;
    &lt;/<span className="text-blue-400">div</span>&gt;
  );
}</pre>
</div>
</div>

<div className="mt-8 flex flex-col items-center">
<p className="mono text-xs text-neutral-500 mb-6">
            Works with the LLM libraries you already use:
          </p>
<div className="flex flex-wrap justify-center gap-x-8 gap-y-6 grayscale opacity-60">

<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:vercel" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="m12 1.608l12 20.784H0Z" fill="currentColor"></path>
</svg>
              Vercel AI SDK
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:langchain" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6.099 5.918C2.736 5.918 0 8.646 0 12s2.736 6.083 6.099 6.083H17.9c3.364 0 6.1-2.73 6.1-6.083s-2.736-6.082-6.099-6.082ZM5.977 7.85c.493.012 1.02.25 1.273.623c.368.459.478 1.067.895 1.493c.56.612 1.199 1.15 1.716 1.802c.49.595.839 1.294 1.144 1.998c.124.233.125.52.31.72c.09.12.534.448.438.564c.055.12.47.286.326.402c-.194.04-.413.048-.562-.107c-.054.126-.182.06-.281.043l-.025.074c-.33.022-.576-.313-.732-.565c-.311-.168-.665-.27-.982-.446c-.019.29.045.648-.231.835c-.014.557.843.066.922.48c-.061.007-.129-.009-.178.038c-.223.217-.48-.165-.738-.007c-.346.174-.38.316-.81.352c-.023-.036-.014-.06.006-.081c.12-.14.13-.305.336-.365c-.212-.033-.39.084-.569.176c-.232.095-.23-.214-.588.017c-.04-.033-.02-.062.002-.087c.091-.11.21-.127.345-.12c-.663-.37-.975.45-1.281.043c-.092.024-.127.106-.185.165c-.05-.055-.012-.121-.01-.186c-.06-.028-.135-.041-.117-.137c-.117-.04-.2.03-.286.096c-.08-.061.053-.15.077-.213c.07-.121.23-.025.311-.112c.23-.131.552.08.816.045c.203.026.454-.182.352-.39c-.217-.277-.179-.639-.183-.97c-.027-.192-.491-.438-.626-.646c-.166-.187-.295-.404-.424-.618c-.467-.9-.32-2.058-.908-2.895c-.266.147-.612.078-.841-.119c-.124.113-.13.26-.14.417c-.296-.297-.259-.856-.021-1.186c.096-.13.212-.237.342-.332c.029-.02.039-.041.038-.074c.117-.527.576-.74 1.07-.727m12.407.46c.557 0 1.08.216 1.473.608s.61.915.61 1.47a2.06 2.06 0 0 1-.61 1.47v.001l-.902.9a2.1 2.1 0 0 1-.86.516l-.016.005l-.005.016a2.05 2.05 0 0 1-.474.731l-.902.9c-.394.392-.917.608-1.475.608s-1.08-.216-1.474-.608a2.077 2.077 0 0 1 0-2.94l.902-.9a2.06 2.06 0 0 1 .858-.514l.017-.006l.006-.016a2.1 2.1 0 0 1 .475-.733l.902-.9a2.07 2.07 0 0 1 1.474-.608m0 .897a1.18 1.18 0 0 0-.84.346l-.901.9a1.18 1.18 0 0 0-.343.924l.005.058c.033.265.15.504.338.691c.13.13.273.212.447.269a1 1 0 0 1 .014.158a.88.88 0 0 1-.26.63l-.056.056a1.96 1.96 0 0 1-.78-.48a2.06 2.06 0 0 1-.576-1.096l-.01-.058l-.046.037a1 1 0 0 0-.087.08l-.903.899a1.182 1.182 0 0 0 .84 2.019c.304 0 .607-.116.838-.346l.902-.9a1.18 1.18 0 0 0 0-1.673a1.2 1.2 0 0 0-.436-.275a1 1 0 0 1-.014-.16a.97.97 0 0 1 .29-.693a2.06 2.06 0 0 1 1.372 1.592l.01.058l.046-.038a1 1 0 0 0 .088-.08l.902-.899a1.183 1.183 0 0 0 0-1.673a1.18 1.18 0 0 0-.84-.346M8.41 14.364c-.08.309-.105.833-.506.848c-.033.177.123.244.265.187c.141-.064.208.051.256.166c.218.032.54-.073.552-.33c-.325-.187-.426-.542-.567-.87" fill="currentColor"></path>
</svg>
              LangChain
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:openai" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22.282 9.821a6 6 0 0 0-.516-4.91a6.05 6.05 0 0 0-6.51-2.9A6.065 6.065 0 0 0 4.981 4.18a6 6 0 0 0-3.998 2.9a6.05 6.05 0 0 0 .743 7.097a5.98 5.98 0 0 0 .51 4.911a6.05 6.05 0 0 0 6.515 2.9A6 6 0 0 0 13.26 24a6.06 6.06 0 0 0 5.772-4.206a6 6 0 0 0 3.997-2.9a6.06 6.06 0 0 0-.747-7.073M13.26 22.43a4.48 4.48 0 0 1-2.876-1.04l.141-.081l4.779-2.758a.8.8 0 0 0 .392-.681v-6.737l2.02 1.168a.07.07 0 0 1 .038.052v5.583a4.504 4.504 0 0 1-4.494 4.494M3.6 18.304a4.47 4.47 0 0 1-.535-3.014l.142.085l4.783 2.759a.77.77 0 0 0 .78 0l5.843-3.369v2.332a.08.08 0 0 1-.033.062L9.74 19.95a4.5 4.5 0 0 1-6.14-1.646M2.34 7.896a4.5 4.5 0 0 1 2.366-1.973V11.6a.77.77 0 0 0 .388.677l5.815 3.354l-2.02 1.168a.08.08 0 0 1-.071 0l-4.83-2.786A4.504 4.504 0 0 1 2.34 7.872zm16.597 3.855l-5.833-3.387L15.119 7.2a.08.08 0 0 1 .071 0l4.83 2.791a4.494 4.494 0 0 1-.676 8.105v-5.678a.79.79 0 0 0-.407-.667m2.01-3.023l-.141-.085l-4.774-2.782a.78.78 0 0 0-.785 0L9.409 9.23V6.897a.07.07 0 0 1 .028-.061l4.83-2.787a4.5 4.5 0 0 1 6.68 4.66zm-12.64 4.135l-2.02-1.164a.08.08 0 0 1-.038-.057V6.075a4.5 4.5 0 0 1 7.375-3.453l-.142.08L8.704 5.46a.8.8 0 0 0-.393.681zm1.097-2.365l2.602-1.5l2.607 1.5v2.999l-2.597 1.5l-2.607-1.5Z" fill="currentColor"></path>
</svg>
              OpenAI
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:anthropic" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M17.304 3.541h-3.672l6.696 16.918H24Zm-10.608 0L0 20.459h3.744l1.37-3.553h7.005l1.369 3.553h3.744L10.536 3.541Zm-.371 10.223L8.616 7.82l2.291 5.945Z" fill="currentColor"></path>
</svg>
              Anthropic
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:google" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" fill="currentColor"></path>
</svg>
              Google AI
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg aria-hidden="true" className="iconify iconify--simple-icons" data-icon="simple-icons:meta" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6.915 4.03c-1.968 0-3.683 1.28-4.871 3.113C.704 9.208 0 11.883 0 14.449c0 .706.07 1.369.21 1.973a7 7 0 0 0 .265.86a5.3 5.3 0 0 0 .371.761c.696 1.159 1.818 1.927 3.593 1.927c1.497 0 2.633-.671 3.965-2.444c.76-1.012 1.144-1.626 2.663-4.32l.756-1.339l.186-.325c.061.1.121.196.183.3l2.152 3.595c.724 1.21 1.665 2.556 2.47 3.314c1.046.987 1.992 1.22 3.06 1.22c1.075 0 1.876-.355 2.455-.843a3.7 3.7 0 0 0 .81-.973c.542-.939.861-2.127.861-3.745c0-2.72-.681-5.357-2.084-7.45c-1.282-1.912-2.957-2.93-4.716-2.93c-1.047 0-2.088.467-3.053 1.308c-.652.57-1.257 1.29-1.82 2.05c-.69-.875-1.335-1.547-1.958-2.056c-1.182-.966-2.315-1.303-3.454-1.303zm10.16 2.053c1.147 0 2.188.758 2.992 1.999c1.132 1.748 1.647 4.195 1.647 6.4c0 1.548-.368 2.9-1.839 2.9c-.58 0-1.027-.23-1.664-1.004c-.496-.601-1.343-1.878-2.832-4.358l-.617-1.028a45 45 0 0 0-1.255-1.98c.07-.109.141-.224.211-.327c1.12-1.667 2.118-2.602 3.358-2.602zm-10.201.553c1.265 0 2.058.791 2.675 1.446c.307.327.737.871 1.234 1.579l-1.02 1.566c-.757 1.163-1.882 3.017-2.837 4.338c-1.191 1.649-1.81 1.817-2.486 1.817c-.524 0-1.038-.237-1.383-.794c-.263-.426-.464-1.13-.464-2.046c0-2.221.63-4.535 1.66-6.088c.454-.687.964-1.226 1.533-1.533a2.26 2.26 0 0 1 1.088-.285" fill="currentColor"></path>
</svg>
              LlamaIndex
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
              Ollama
            </div>
<div className="flex items-center gap-2 text-white font-semibold">
<svg className="lucide lucide-cpu w-4 h-4" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
              Groq
            </div>
</div>
</div>

<div className="text-center mt-12">
<a className="text-sm mono text-white hover:text-[#FF4F30] transition-colors flex items-center justify-center gap-2 group" href="https://docs.layercode.com/quickstart">
            View the full quickstart guide
            <svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-b border-white/10">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-4 text-lg">
            Everything you need to ship voice AI
          </h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-px bg-white/10 border border-white/10">

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4 text-sm">
<svg className="lucide lucide-arrow-left-right w-6 h-6" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Hot-swap voice providers
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Avoid vendor lock-in: Switch between Deepgram, ElevenLabs,
              Cartesia and Rime with a single config change. Test different
              models, optimize for cost or quality.
            </p>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Analytics &amp; Observability
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Replay any conversation. Inspect latency breakdowns, and view
              transcripts to debug production issues.
            </p>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4">
<svg className="lucide lucide-disc w-6 h-6" data-lucide="disc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="2"></circle></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Session recording
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Every call is recorded automatically. Download audio files, export
              transcripts, build training datasets. All stored securely.
            </p>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Per-second billing
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Pay only for active conversation time. Silence is always free. No
              minimum commitments.
            </p>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4">
<svg className="lucide lucide-smartphone w-6 h-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Web, mobile, and phone
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              Connect users via browser, iOS, Android, or phone. Same backend,
              same pipeline, multiple channels.
            </p>
</div>

<div className="bg-[#050505] p-8 hover:bg-[#0A0A0A] transition-colors group">
<div className="text-neutral-500 group-hover:text-white mb-4">
<svg className="lucide lucide-receipt w-6 h-6" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
</div>
<h3 className="mono text-sm font-bold text-white mb-2">
              Unified billing
            </h3>
<p className="text-neutral-400 text-sm leading-relaxed">
              One invoice for speech-to-text, text-to-speech, and
              infrastructure.
            </p>
</div>
</div>
<div className="mt-16 text-center max-w-2xl mx-auto">
<p className="serif text-xl text-neutral-200 italic leading-snug mb-4">
            "Layercode made it very easy to build and prototype low-latency
            voice features for our text-based agents built with NextJS and
            React."
          </p>
<div className="flex items-center justify-center gap-3">
<div className="rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center mono">
              LJ
            </div>
<div className="text-left">
<div className="mono text-white font-medium">Lance Jones</div>
<div className="mono text-neutral-500">AI Agent Developer</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/10">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start"> 

<div className="space-y-12">
<div className="space-y-6">
<h2 className="text-4xl md:text-5xl lg:text-6xl serif font-medium text-white tracking-tight leading-[1.1]">
                330+ edge locations. Sub-50ms audio processing.
              </h2>
<p className="text-xl font-light text-neutral-400 leading-relaxed">
                The first voice AI infrastructure built for low-latency
                conversations at global scale.
              </p>
<p className="text-base text-neutral-400 font-light leading-relaxed">
                Traditional voice AI platforms run on centralized cloud
                infrastructure. When your user is in Tokyo and your servers are in
                Virginia, latency kills the conversation. Pauses feel unnatural.
                Users talk over the agent. The experience falls apart. Layercode
                is built on Cloudflare's global edge network. We process audio at
                the location nearest to your user—not in a distant data center.
              </p>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 gap-x-8 gap-y-10">

<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-clock w-5 h-5 text-white stroke-[1.5]" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Low-latency by default</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                     Users connect to the nearest edge location. Speech-to-text, voice activity detection, and audio streaming happen locally.
                   </p>
</div>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-zap w-5 h-5 text-white stroke-[1.5]" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Instant, automatic scaling</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                     No capacity planning. No provisioning. Every conversation runs in its own isolated environment.
                   </p>
</div>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-lock w-5 h-5 text-white stroke-[1.5]" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">No noisy neighbors</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                     Platform traffic spikes don't affect your users. Each session runs in complete isolation.
                   </p>
</div>
</div>

<div className="space-y-3">
<div className="w-10 h-10 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center">
<svg className="lucide lucide-globe w-5 h-5 text-white stroke-[1.5]" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
<div>
<h4 className="text-white font-medium mb-1">Global without configuration</h4>
<p className="text-sm text-neutral-500 font-light leading-relaxed">
                     Deploy once, serve users everywhere. No multi-region setup, no latency-based routing rules.
                   </p>
</div>
</div>
</div>
</div>

<div className="lg:sticky lg:top-8">
<div className="grid grid-cols-2 bg-white/10 border border-white/10 gap-px overflow-hidden rounded-sm">
<div className="bg-[#080808] p-10 flex flex-col items-center justify-center text-center aspect-square">
<span className="text-5xl font-light text-white tracking-tight mb-2">330+</span>
<span className="text-sm text-neutral-500 font-light">Edge locations worldwide</span>
</div>
<div className="bg-[#080808] p-10 flex flex-col items-center justify-center text-center aspect-square">
<span className="text-5xl font-light text-white tracking-tight mb-2">&lt;50ms</span>
<span className="text-sm text-neutral-500 font-light">Audio processing at edge</span>
</div>
<div className="bg-[#080808] p-10 flex flex-col items-center justify-center text-center aspect-square">
<span className="text-5xl font-light text-white tracking-tight mb-2">Zero</span>
<span className="text-sm text-neutral-500 font-light">Cold starts</span>
</div>
<div className="bg-[#080808] p-10 flex flex-col items-center justify-center text-center aspect-square">
<span className="text-5xl font-light text-white tracking-tight mb-2">100%</span>
<span className="text-sm text-neutral-500 font-light">Session isolation</span>
</div>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 bg-[#050505] border-b border-white/10">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-8">
          Enterprise-ready security
        </h2>
<div className="flex flex-wrap justify-center gap-4 mb-8">
<div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
<svg className="lucide lucide-shield-check w-4 h-4 text-green-400" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="mono text-xs text-white">SOC 2 Type II</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
<svg className="lucide lucide-lock w-4 h-4 text-green-400" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="mono text-xs text-white">GDPR Compliant</span>
</div>
<div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
<svg className="lucide lucide-file-lock-2 w-4 h-4 text-green-400" data-lucide="file-lock-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 9.8V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.706.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2h-3"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M9 17v-2a2 2 0 0 0-4 0v2"></path><rect height="5" rx="1" width="8" x="3" y="17"></rect></svg>
<span className="mono text-xs text-white">
              Data encrypted in transit (TLS 1.3)
            </span>
</div>
<div className="flex items-center gap-2 px-4 py-2 border border-white/10 rounded-full bg-white/5">
<svg className="lucide lucide-database w-4 h-4 text-green-400" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
<span className="mono text-xs text-white">
              Data encrypted at rest (AES-256)
            </span>
</div>
</div>
<p className="text-neutral-400 font-light max-w-2xl mx-auto mb-8">
          Layercode is built for production workloads with enterprise security
          requirements. Your data is encrypted in transit and at rest. Session
          recordings are stored securely in SOC 2 compliant infrastructure and
          accessible only to your team.
        </p>
<a className="text-white mono text-sm hover:text-neutral-300 underline underline-offset-4" href="mailto:hello@layercode.com">
          Talk to us →
        </a>
</div>
</section>

<section className="py-24 bg-[#080808] border-b border-white/10 text-center">
<div className="max-w-3xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl serif font-medium text-white mb-6">
          Simple, predictable pricing
        </h2>
<p className="text-neutral-400 text-lg mb-8 max-w-xl mx-auto">
          Per-second billing for active conversation time. Silence is free. STT,
          TTS, and infrastructure costs consolidated into one simple rate. Start
          with $100 in free credits—no credit card required.
        </p>
<a className="text-white mono text-sm hover:text-neutral-300 flex items-center justify-center gap-2 group" href="/pricing">
          View pricing details
          <svg className="lucide lucide-arrow-right w-3.5 h-3.5 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</section>

    </>
  );
}
