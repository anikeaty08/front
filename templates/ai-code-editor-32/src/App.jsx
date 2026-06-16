import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide Icons
        lucide.createIcons();

        // Simple scroll reveal animation script
        document.addEventListener('DOMContentLoaded', () => {
            const reveals = document.querySelectorAll('.reveal');

            const revealOnScroll = () => {
                const windowHeight = window.innerHeight;
                const elementVisible = 100;

                reveals.forEach((reveal) => {
                    const elementTop = reveal.getBoundingClientRect().top;
                    if (elementTop < windowHeight - elementVisible) {
                        reveal.classList.add('active');
                    }
                });
            };

            window.addEventListener('scroll', revealOnScroll);
            // Trigger once on load
            setTimeout(revealOnScroll, 100);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky top-0 z-50 bg-[#FAFAFA]/80 backdrop-blur-md border-b border-zinc-200/50">
<div className="max-w-[1200px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="text-zinc-900" fill="none" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 4L20 12L4 20V4Z" fill="currentColor"></path>
</svg>
<span className="font-medium text-lg tracking-tight">Cursor</span>
</div>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Product</a>
<a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Enterprise</a>
<a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
<a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Resources</a>
</nav>
<div className="flex items-center gap-6">
<a className="hidden md:block text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Sign in</a>
<a className="hidden md:block text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Contact sales</a>
<a className="bg-zinc-900 text-white px-4 py-2 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2" href="#">
                    Download
                </a>
</div>
</div>
</header>
<main>

<section className="pt-24 md:pt-32 pb-16 px-6 max-w-[1200px] mx-auto">
<div className="max-w-3xl reveal active">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.1]">
                    Built to make you extraordinarily productive, Cursor is the best way to code with AI.
                </h1>
<div className="flex items-center gap-4 mt-8">
<button className="bg-zinc-900 text-white px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-800 transition-colors flex items-center gap-2">
                        Get started <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
<button className="bg-zinc-100 text-zinc-900 px-5 py-2.5 rounded-full text-base font-medium hover:bg-zinc-200 transition-colors flex items-center gap-2">
                        Request a demo <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</div>

<div className="mt-16 rounded-xl border border-zinc-200/80 bg-zinc-50 mockup-shadow-lg overflow-hidden reveal active delay-200">

<div className="h-10 bg-zinc-100/80 border-b border-zinc-200 flex items-center px-4 justify-between relative">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="absolute left-1/2 -translate-x-1/2 text-sm text-zinc-500 font-medium">Cursor</div>
<div className="flex items-center gap-4 text-zinc-400">
<i className="w-4 h-4" data-lucide="layout-panel-left" strokeWidth="1.5"></i>
<i className="w-4 h-4" data-lucide="search" strokeWidth="1.5"></i>
</div>
</div>

<div className="flex h-[500px]">

<div className="w-64 border-r border-zinc-200 bg-zinc-50/50 p-4 flex flex-col gap-6 mockup-scroll overflow-y-auto">
<div>
<div className="text-xs font-semibold text-zinc-500 tracking-tight mb-2 uppercase">Ready for Review</div>
<div className="space-y-1">
<div className="flex items-center gap-2 p-1.5 rounded bg-zinc-200/50 text-sm text-zinc-700 font-medium">
<i className="w-4 h-4 text-blue-500" data-lucide="file-code" strokeWidth="1.5"></i> Build Landing Page
                                </div>
<div className="flex items-center gap-2 p-1.5 rounded text-sm text-zinc-600 hover:bg-zinc-200/30 transition-colors">
<i className="w-4 h-4 text-green-500" data-lucide="file-text" strokeWidth="1.5"></i> Analyze Tab vs Agent
                                </div>
<div className="flex items-center gap-2 p-1.5 rounded text-sm text-zinc-600 hover:bg-zinc-200/30 transition-colors">
<i className="w-4 h-4 text-blue-500" data-lucide="file-code" strokeWidth="1.5"></i> Plan Mission Control
                                </div>
</div>
</div>
</div>

<div className="flex-1 bg-white p-6 relative flex flex-col">

<div className="absolute top-6 left-1/2 -translate-x-1/2 w-3/4 max-w-2xl bg-white rounded-lg border border-zinc-200 mockup-shadow z-10 overflow-hidden">
<div className="p-4 border-b border-zinc-100 flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-orange-100 flex items-center justify-center shrink-0">
<i className="w-4 h-4 text-orange-600" data-lucide="sparkles" strokeWidth="1.5"></i>
</div>
<div className="flex-1">
<div className="text-base text-zinc-800 font-medium mb-1">Build Landing Page</div>
<div className="text-sm text-zinc-500 mb-4">Make a landing page based on attached docs explaining what we do.</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-2">
<i className="w-3 h-3" data-lucide="file-text" strokeWidth="1.5"></i> Read <span className="bg-zinc-100 px-1 rounded text-zinc-600">about-acme.md</span>
</div>
<div className="flex items-center gap-2 text-xs text-zinc-400 mb-4">
<i className="w-3 h-3" data-lucide="file-text" strokeWidth="1.5"></i> Read <span className="bg-zinc-100 px-1 rounded text-zinc-600">brand-guidelines.pdf</span>
</div>
<div className="text-base text-zinc-800 font-medium mb-2">I'll create a minimal, serif-based landing page that matches your brand voice.</div>
<div className="space-y-2">
<div className="flex items-center justify-between p-2 rounded border border-zinc-100 bg-zinc-50">
<div className="flex items-center gap-2 text-sm text-zinc-700">
<i className="w-4 h-4 text-blue-500" data-lucide="file-code" strokeWidth="1.5"></i> app/page.tsx
                                            </div>
<div className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+52 -0</div>
</div>
<div className="flex items-center justify-between p-2 rounded border border-zinc-100 bg-zinc-50">
<div className="flex items-center gap-2 text-sm text-zinc-700">
<i className="w-4 h-4 text-blue-500" data-lucide="file-code" strokeWidth="1.5"></i> app/globals.css
                                            </div>
<div className="text-xs text-green-600 bg-green-50 px-1.5 py-0.5 rounded">+18 -0</div>
</div>
</div>
</div>
</div>
<div className="p-3 bg-zinc-50 flex items-center justify-between">
<div className="flex items-center gap-2 text-sm text-zinc-500 bg-white px-3 py-1.5 rounded-full border border-zinc-200">
<span className="w-2 h-2 rounded-full bg-zinc-300"></span> Agent <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i> Composer 2
                                </div>
<div className="text-xs text-zinc-400">Plan, search, build anything...</div>
</div>
</div>

<div className="opacity-30 blur-[2px] mt-24">
<h2 className="text-4xl font-serif text-zinc-800 mb-6 tracking-tight">Acme Labs</h2>
<p className="text-lg text-zinc-600 max-w-2xl leading-relaxed mb-6">
                                Software creation is changing. We are a group of researchers, engineers, and technologists inventing at the edge of what's useful and possible.
                            </p>
<div className="flex gap-4">
<button className="px-4 py-2 bg-zinc-200 text-zinc-800 rounded">See projects</button>
<button className="px-4 py-2 text-zinc-600">Join our team -&gt;</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-zinc-200 bg-[#FAFAFA] py-12 reveal">
<div className="max-w-[1200px] mx-auto px-6">
<p className="text-center text-base text-zinc-500 font-medium mb-8">Trusted every day by teams that build world-class software</p>
<div className="flex flex-wrap justify-center items-center gap-x-12 gap-y-8 opacity-60 grayscale">
<span className="text-2xl font-semibold tracking-tight">stripe</span>
<span className="text-2xl font-semibold tracking-tight">OpenAI</span>
<div className="flex items-center gap-2"><div className="w-6 h-6 rounded-full border-[3px] border-zinc-900"></div><span className="text-2xl font-semibold tracking-tight">Linear</span></div>
<span className="text-2xl font-semibold tracking-tight">DATADOG</span>
<span className="text-2xl font-semibold tracking-tight">NVIDIA</span>
<span className="text-2xl font-semibold tracking-tight">Figma</span>
<span className="text-2xl font-semibold tracking-tight">ramp</span>
<span className="text-2xl font-semibold tracking-tight text-red-600">Adobe</span>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F5] overflow-hidden reveal">
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Agents turn ideas into code</h2>
<p className="text-lg text-zinc-600 mb-6">Accelerate development by handing off tasks to Cursor, while you focus on making decisions.</p>
<a className="text-lg text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors" href="#">
                        Learn about agentic development <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">
<div className="absolute top-0 right-[-10%] w-[120%] h-full rounded-xl border border-zinc-200 bg-white mockup-shadow flex flex-col overflow-hidden">
<div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="mx-auto text-sm text-zinc-500">Cursor</div>
</div>
<div className="flex-1 flex">

<div className="w-1/3 border-r border-zinc-200 p-4 flex flex-col">
<div className="text-sm font-semibold tracking-tight text-zinc-800 mb-4">Plan Mission Control</div>
<div className="bg-zinc-50 p-3 rounded border border-zinc-100 text-sm text-zinc-600 mb-4">
                                    Let's build a mission control interface, similar to the expose-style window manager on macOS.
                                </div>
<div className="text-xs text-zinc-400 font-medium mb-2 uppercase tracking-wide">Planning next moves</div>
<div className="mt-auto border border-zinc-200 rounded p-2 flex items-center justify-between bg-zinc-50">
<span className="text-sm text-zinc-400">Add follow-up...</span>
<div className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm border border-zinc-200 text-xs text-zinc-500">
                                        Plan <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>

<div className="flex-1 p-6 bg-zinc-50/30">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Mission Control Interface</h3>
<p className="text-sm text-zinc-600 mb-6">A grid view of all open windows as scaled previews, allowing quick selection to bring any window to front.</p>
<div className="text-sm font-medium text-zinc-900 mb-1">Trigger</div>
<p className="text-sm text-zinc-600 mb-4">Menu item in MenuBar.tsx (View &gt; Mission Control), hotkey F3, or double tap desktop.</p>
<div className="text-sm font-medium text-zinc-900 mb-1">View Behavior</div>
<p className="text-sm text-zinc-600 mb-6">Overlay existing windows into a grid of live previews with spring-based animations and shared element transitions.</p>
<div className="text-xs font-semibold text-zinc-400 uppercase tracking-tight mb-3">3 Tasks</div>
<div className="space-y-2">
<label className="flex items-start gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 mt-0.5 group-hover:border-orange-400 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-zinc-700">Add multiplayer mode to useAppState.ts</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 mt-0.5 group-hover:border-orange-400 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-zinc-700">Create a new MissionControlView.tsx component</span>
</label>
<label className="flex items-start gap-3 cursor-pointer group">
<div className="w-4 h-4 rounded-full border border-zinc-300 mt-0.5 group-hover:border-orange-400 flex items-center justify-center transition-colors"></div>
<span className="text-sm text-zinc-700">Update AppManager.tsx to apply expose modes.</span>
</label>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden reveal">
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px] order-2 md:order-1">
<div className="absolute top-0 left-[-10%] w-[120%] h-full rounded-xl border border-zinc-200 bg-white mockup-shadow flex flex-col overflow-hidden">
<div className="h-10 bg-zinc-50 border-b border-zinc-200 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="w-3 h-3 rounded-full bg-zinc-300"></div>
<div className="mx-auto text-sm text-zinc-500">Cursor</div>
</div>
<div className="flex-1 flex">

<div className="w-48 border-r border-zinc-200 p-4 bg-zinc-50/50">
<div className="text-xs font-semibold text-zinc-400 uppercase tracking-tight mb-3">This Week</div>
<div className="space-y-1 mb-6">
<div className="text-sm text-zinc-800 bg-white border border-zinc-200 shadow-sm rounded px-2 py-1 flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div> Acme Research Dashboard
                                    </div>
<div className="text-sm text-zinc-600 hover:bg-zinc-100 rounded px-2 py-1">Live Telemetry Pipeline</div>
<div className="text-sm text-zinc-600 hover:bg-zinc-100 rounded px-2 py-1">Zero-Downtime Deploys</div>
</div>
</div>

<div className="flex-1 p-6 relative">
<div className="absolute top-6 right-6 flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-zinc-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-zinc-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-orange-100 border-2 border-white flex items-center justify-center text-xs font-medium text-orange-700">+2</div>
</div>
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-1">Acme Research Dashboard</h3>
<p className="text-sm text-zinc-500 mb-6">Explored 12 files, 4 searches</p>
<p className="text-base text-zinc-800 mb-4">On it. I'll build the dashboard using your theme config, wire up the research data, and add interactive charts with public access controls.</p>
<div className="text-xs text-zinc-400 mb-2">Worked for 14m 22s</div>
<div className="bg-zinc-50 border border-zinc-200 rounded-lg p-4 mb-4">
<div className="flex items-center gap-2 mb-3">
<div className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="text-sm font-medium text-zinc-700">Done! Here's a walkthrough of the dashboard.</span>
</div>

<div className="aspect-video bg-zinc-900 rounded border border-zinc-800 flex items-center justify-center relative overflow-hidden group cursor-pointer">
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="w-12 h-12 rounded-full bg-white/20 backdrop-blur-sm flex items-center justify-center group-hover:scale-110 transition-transform">
<svg fill="white" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5V19L19 12L8 5Z"></path>
</svg>
</div>
</div>
</div>
<div className="text-sm font-medium text-zinc-900 mb-1">Summary</div>
<p className="text-sm text-zinc-600 mb-6">Built the interactive dashboard with realtime charts, data from Snowflake, and shadcn components. Deployed to staging via Vercel.</p>
<div className="flex items-center gap-2 bg-zinc-50 border border-zinc-200 rounded p-2">
<span className="text-sm text-zinc-400 flex-1">Add a follow up...</span>
<div className="flex items-center gap-1 bg-white px-2 py-1 rounded shadow-sm border border-zinc-200 text-xs text-zinc-500">
                                        Agent <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="max-w-md order-1 md:order-2 md:pl-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Works autonomously, runs in parallel</h2>
<p className="text-lg text-zinc-600 mb-6">Agents use their own computers to build, test, and demo features end to end for you to review.</p>
<a className="text-lg text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors" href="#">
                        Learn about cloud agents <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F5F5F5] overflow-hidden reveal">
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="max-w-md">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">In every tool, at every step</h2>
<p className="text-lg text-zinc-600 mb-6">Cursor reviews your PRs in GitHub, collaborates in Slack, and runs in your terminal.</p>
<a className="text-lg text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors" href="#">
                        Learn about Cursor's surfaces <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px]">

<div className="absolute top-[10%] left-[5%] w-[80%] bg-white rounded-xl border border-zinc-200 mockup-shadow-lg p-4 z-10">
<div className="flex items-center gap-2 border-b border-zinc-100 pb-3 mb-3">
<i className="w-4 h-4 text-zinc-400" data-lucide="hash" strokeWidth="1.5"></i>
<span className="text-base font-semibold text-zinc-900 tracking-tight">feature-realtime-sync</span>
<span className="text-xs text-zinc-400 ml-auto">8 members</span>
</div>
<div className="space-y-4">
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-blue-100 flex items-center justify-center font-medium text-blue-700 shrink-0">S</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-zinc-900">swiftmore</span>
<span className="text-xs text-zinc-400">5m</span>
</div>
<p className="text-sm text-zinc-700 mt-0.5">I wanna be able to go to cursor.com/changelog#1.0 to see 1.0 changelog</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-green-100 flex items-center justify-center font-medium text-green-700 shrink-0">E</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-zinc-900">eric</span>
<span className="text-xs text-zinc-400">4m</span>
</div>
<p className="text-sm text-zinc-700 mt-0.5">checks out</p>
<p className="text-sm text-zinc-700 mt-1"><span className="text-blue-600 bg-blue-50 px-1 rounded">@cursor</span> can you implement this?</p>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded bg-zinc-900 flex items-center justify-center shrink-0">
<svg className="text-white" fill="none" height="16" viewbox="0 0 24 24" width="16"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"></path></svg>
</div>
<div>
<div className="flex items-baseline gap-2">
<span className="text-sm font-semibold text-zinc-900">Cursor</span> <span className="text-[10px] bg-zinc-100 text-zinc-500 px-1 rounded">APP</span>
<span className="text-xs text-zinc-400">2m</span>
</div>
<p className="text-sm text-zinc-700 mt-0.5 mb-2">I added direct hash linking to the changelog component and updated the scroll constraints across the app.</p>
<button className="bg-green-600 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-green-700 transition-colors">View PR</button>
</div>
</div>
</div>
</div>

<div className="absolute bottom-[5%] right-[-5%] w-[85%] bg-white rounded-xl border border-zinc-200 mockup-shadow-lg p-5 z-20">
<div className="text-sm font-medium text-zinc-500 mb-4 flex items-center justify-between border-b border-zinc-100 pb-3">
<span>GitHub Pull Request</span>
<i className="w-4 h-4" data-lucide="more-horizontal" strokeWidth="1.5"></i>
</div>
<div className="flex gap-3 mb-4">
<div className="w-6 h-6 rounded-full bg-purple-100 flex items-center justify-center text-purple-700 text-xs shrink-0">L</div>
<div className="flex-1 bg-zinc-50 border border-zinc-200 rounded-lg p-3">
<div className="flex items-baseline gap-2 mb-1">
<span className="text-sm font-medium text-zinc-900">leeob</span>
<span className="text-xs text-zinc-500">5m ago</span>
</div>
<p className="text-sm text-zinc-700"><span className="font-medium">@cursor</span> can you review this PR?</p>
</div>
</div>
<div className="flex gap-3 ml-4 border-l-2 border-zinc-100 pl-4">
<div className="w-6 h-6 rounded-full bg-zinc-900 flex items-center justify-center shrink-0">
<svg className="text-white" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"></path></svg>
</div>
<div className="flex-1 border border-zinc-200 rounded-lg overflow-hidden">
<div className="bg-zinc-50 px-3 py-2 border-b border-zinc-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-zinc-900">cursor</span>
<span className="text-[10px] bg-zinc-200 text-zinc-600 px-1 rounded">bot</span>
<span className="text-xs text-zinc-500">reviewed 2m ago</span>
</div>
</div>
<div className="p-3 bg-white">
<div className="text-xs text-zinc-500 font-mono bg-zinc-50 p-2 rounded mb-3 border border-zinc-100">
                                        src/ui/workbench/composer/browser/components/ComposerUnifiedBru...
                                        <br/>
<span className="text-red-500 bg-red-50 px-1 rounded inline-block mt-1">- 3292   [selectedMode()]: keybinding()</span><br/>
<span className="text-green-600 bg-green-50 px-1 rounded inline-block mt-1">+ 3293   [composerOpenModeToggleKeybinding()]: ...</span>
</div>
<p className="text-sm text-zinc-800 font-medium mb-1">Bug: Function Returns Object instead of String (Logic bug)</p>
<p className="text-sm text-zinc-600 mb-3">The <code className="text-xs bg-zinc-100 px-1 rounded text-pink-600">composerOpenModeToggleKeybinding</code> is a function that needs to be called to get its value. This makes the condition always truthy.</p>
<div className="flex gap-2">
<button className="bg-zinc-900 text-white text-xs font-medium px-3 py-1.5 rounded hover:bg-zinc-800 transition-colors flex items-center gap-1">
<i className="w-3 h-3" data-lucide="wrench" strokeWidth="1.5"></i> Fix in Cursor
                                        </button>
<button className="bg-white border border-zinc-200 text-zinc-700 text-xs font-medium px-3 py-1.5 rounded hover:bg-zinc-50 transition-colors">
                                            Fix in Web
                                        </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden reveal">
<div className="max-w-[1200px] mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="relative w-full aspect-square md:aspect-auto md:h-[500px] order-2 md:order-1">
<div className="absolute top-0 left-[-10%] w-[110%] h-full rounded-xl border border-zinc-200 bg-zinc-50 mockup-shadow flex flex-col overflow-hidden">
<div className="flex items-center gap-2 px-4 h-10 border-b border-zinc-200 bg-zinc-100/50">
<div className="text-sm font-medium text-zinc-800 bg-white px-3 py-1 rounded-t border-t border-l border-r border-zinc-200 -mb-[1px]">Dashboard.tsx</div>
<div className="text-sm text-zinc-500 px-3 py-1">SupportChat.tsx</div>
</div>
<div className="p-6 font-mono text-sm leading-relaxed overflow-hidden text-zinc-800">
<div className="text-zinc-400 mb-4">"use client";</div>
<div><span className="text-purple-600">import</span> React, { useState } <span className="text-purple-600">from</span> <span className="text-green-600">'react'</span>;</div>
<div><span className="text-purple-600">import</span> Navigation <span className="text-purple-600">from</span> <span className="text-green-600">'./Navigation'</span>;</div>
<div className="mb-4"><span className="text-purple-600">import</span> SupportChat <span className="text-purple-600">from</span> <span className="text-green-600">'./SupportChat'</span>;</div>
<div><span className="text-purple-600">export default function</span> <span className="text-blue-600">Dashboard</span>() {</div>
<div className="ml-4 flex items-center">
<span className="text-blue-600">const</span> [activeTab, setActiveTab] = <span className="text-blue-600">useState</span>(<span className="text-green-600">'support'</span>);
                                <div className="w-[2px] h-4 bg-zinc-900 ml-[1px] animate-pulse"></div>
</div>
<br/>
<div className="ml-4"><span className="text-purple-600">return</span> (</div>
<div className="ml-8 opacity-40">
<div>&lt;<span className="text-blue-600">div</span> <span className="text-orange-600">className</span>=<span className="text-green-600">"flex h-[600px] border rounded-lg overflow-hidden"</span>&gt;</div>
<div className="ml-4">&lt;<span className="text-blue-600">div</span> <span className="text-orange-600">className</span>=<span className="text-green-600">"w-64 border-r"</span>&gt; <span className="bg-zinc-200 text-zinc-500 px-1 rounded text-xs ml-2">Tab to jump here</span></div>
<div className="ml-8">&lt;<span className="text-blue-600">Navigation</span> activeTab={activeTab} setActiveTab={setActiveTab} /&gt;</div>
<div className="ml-4">&lt;/<span className="text-blue-600">div</span>&gt;</div>
<div className="ml-4">&lt;<span className="text-blue-600">div</span> <span className="text-orange-600">className</span>=<span className="text-green-600">"flex-1 relative"</span>&gt;</div>
<div className="ml-8">{activeTab === 'support' ? &lt;<span className="text-blue-600">SupportChat</span> /&gt; : null}</div>
<div className="ml-4">&lt;/<span className="text-blue-600">div</span>&gt;</div>
<div>&lt;/<span className="text-blue-600">div</span>&gt;</div>
</div>
<div className="ml-4">);</div>
<div>}</div>
</div>
</div>
</div>
<div className="max-w-md order-1 md:order-2 md:pl-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-zinc-900 mb-4">Magically accurate autocomplete</h2>
<p className="text-lg text-zinc-600 mb-6">Our specialized Tab model predicts your next action with striking speed and precision.</p>
<a className="text-lg text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors" href="#">
                        Learn about Tab <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#FAFAFA] reveal">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight text-center text-zinc-900 mb-16">The new way to build software.</h2>
<div className="grid md:grid-cols-3 gap-6 items-start">

<div className="space-y-6">
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"It was night and day from one batch to another, adoption went from single digits to over 80%. It just spread like wildfire, all the best builders were using Cursor."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-200 flex items-center justify-center font-bold text-orange-800">DH</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Diana Hu</div>
<div className="text-xs text-zinc-500">General Partner, Y Combinator</div>
</div>
</div>
</div>
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"Cursor quickly grew from hundreds to thousands of extremely enthusiastic Stripe employees. We spend more on R&amp;D and software creation than any other undertaking, and there's significant economic outcomes when making that process more efficient."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-200 flex items-center justify-center font-bold text-blue-800">PC</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Patrick Collison</div>
<div className="text-xs text-zinc-500">Co-Founder &amp; CEO, Stripe</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"My favorite enterprise AI service is Cursor. Every one of our engineers, some 40,000, are now assisted by AI and our productivity has gone up incredibly."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-green-200 flex items-center justify-center font-bold text-green-800">JH</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Jensen Huang</div>
<div className="text-xs text-zinc-500">President &amp; CEO, NVIDIA</div>
</div>
</div>
</div>
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"The most useful AI tool that I currently pay for, hands down, is Cursor. It's fast, autocompletes when and where you need it to, handles brackets properly, sensible keyboard shortcuts, bring-your-own-model... everything is well put together."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-800 flex items-center justify-center font-bold text-white">S</div>
<div>
<div className="text-sm font-semibold text-zinc-900">shadcn</div>
<div className="text-xs text-zinc-500">Creator of shadcn/ui</div>
</div>
</div>
</div>
</div>

<div className="space-y-6">
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"The best LLM applications have an autonomy slider: you control how much independence to give the AI. In Cursor, you can do Tab completion, Cmd+K for targeted edits, or you can let it rip with the full autonomy agentic version."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-200 flex items-center justify-center font-bold text-purple-800">AK</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Andrej Karpathy</div>
<div className="text-xs text-zinc-500">CEO, Eureka Labs</div>
</div>
</div>
</div>
<div className="bg-[#F5F5F5] rounded-xl p-6 border border-zinc-100">
<p className="text-base text-zinc-800 leading-relaxed mb-6">"It's definitely becoming more fun to be a programmer. We are at the 1% of what's possible, and it's in interactive experiences like Cursor where models like GPT-5 shine brightest."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-300 flex items-center justify-center font-bold text-zinc-800">GB</div>
<div>
<div className="text-sm font-semibold text-zinc-900">Greg Brockman</div>
<div className="text-xs text-zinc-500">President, OpenAI</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#FAFAFA] reveal">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-8">Stay on the frontier</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-[#F5F5F5] rounded-2xl p-8 border border-zinc-100 flex flex-col h-[450px]">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Use the best model for every task</h3>
<p className="text-base text-zinc-600 mb-4">Choose between every cutting-edge model from OpenAI, Anthropic, Gemini, xAI, and Cursor.</p>
<a className="text-base text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors mb-8" href="#">
                            Explore models <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<div className="mt-auto bg-zinc-100/50 rounded-xl border border-zinc-200/80 p-4 mockup-shadow">
<div className="flex items-center justify-between bg-white border border-zinc-200 rounded-lg p-2 mb-2 shadow-sm relative">
<div className="flex items-center gap-2 text-sm text-zinc-600">
                                    Agent <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i> Opus 4.6 <i className="w-3 h-3" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<div className="w-6 h-6 rounded bg-zinc-900 flex items-center justify-center">
<svg className="text-white" fill="none" height="12" viewbox="0 0 24 24" width="12"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"></path></svg>
</div>

<div className="absolute top-full left-0 mt-1 w-[200px] bg-white border border-zinc-200 rounded-lg shadow-lg py-1 z-10">
<div className="px-3 py-1.5 text-sm text-zinc-800 flex justify-between items-center bg-zinc-50">Auto <span className="text-xs text-zinc-400">Supported</span></div>
<div className="px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50">Composer 2</div>
<div className="px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50">GPT-4o</div>
<div className="px-3 py-1.5 text-sm text-zinc-800 bg-orange-50 flex justify-between items-center">Opus 4.6 <i className="w-3 h-3 text-orange-600" data-lucide="check" strokeWidth="2"></i></div>
<div className="px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50">Gemini 1.5 Pro</div>
<div className="px-3 py-1.5 text-sm text-zinc-800 hover:bg-zinc-50">Grok Code</div>
</div>
</div>
</div>
</div>

<div className="bg-[#F5F5F5] rounded-2xl p-8 border border-zinc-100 flex flex-col h-[450px]">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Complete codebase understanding</h3>
<p className="text-base text-zinc-600 mb-4">Cursor learns how your codebase works, no matter the scale or complexity.</p>
<a className="text-base text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors mb-8" href="#">
                            Learn about codebase indexing <i className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
<div className="mt-auto bg-zinc-200 rounded-xl p-4 flex flex-col items-center justify-center h-48 relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-transparent to-zinc-300/50"></div>
<div className="bg-white px-4 py-2 rounded-lg shadow-sm border border-zinc-200 text-sm text-zinc-700 w-full mb-4 z-10">
                                Where are these menu label colors defined?
                            </div>
<div className="flex items-center gap-2 text-xs text-zinc-500 self-start z-10">
<i className="w-3 h-3 animate-spin" data-lucide="loader-2" strokeWidth="1.5"></i> Grepping
                            </div>
</div>
</div>

<div className="bg-[#F5F5F5] rounded-2xl p-8 border border-zinc-100 flex flex-col h-[450px]">
<h3 className="text-xl font-semibold tracking-tight text-zinc-900 mb-2">Develop enduring software</h3>
<p className="text-base text-zinc-600 mb-4">Trusted by over half of the Fortune 500 to accelerate development, securely and at scale.</p>
<a className="text-base text-orange-600 hover:text-orange-700 font-medium flex items-center gap-1 group transition-colors mb-8" href="#">
                            Explore enterprise <i className="w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<div className="mt-auto bg-[#0A0A0A] rounded-xl h-48 p-4 font-mono text-[10px] leading-relaxed text-green-500/70 overflow-hidden relative border border-zinc-800">
<div className="absolute inset-0 bg-gradient-to-t from-[#0A0A0A] via-transparent to-transparent z-10"></div>
<div>01010111 01100101 01101100 01100011 01101111 01101101 01100101</div>
<div>01110100 01101111 01110100 01101000 01100101 01100110 01110101</div>
<div>01110100 01110101 01110010 01100101 01101111 01100110 01100011</div>
<div className="text-green-400">CONNECTING TO SECURE ENTERPRISE ENCLAVE...</div>
<div>01101111 01100100 01101001 01101110 01100111 00101110 00100000</div>
<div>01000011 01110101 01110010 01110011 01101111 01110010 00100000</div>
<div className="text-green-400">INDEXING REPOSITORIES... [||||||||||  ] 84%</div>
<div>01101001 01110011 00100000 01110100 01101000 01100101 00100000</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#FAFAFA] reveal">
<div className="max-w-[1200px] mx-auto px-6">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Changelog</h2>
<div className="flex overflow-x-auto gap-4 pb-8 mockup-scroll -mx-6 px-6 md:mx-0 md:px-0">
<div className="min-w-[280px] flex-1 bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6">
<div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
<span className="px-2 py-0.5 rounded-full border border-zinc-200 bg-white text-xs">3.0</span>
                            Apr 2, 2026
                        </div>
<h4 className="text-base font-semibold text-zinc-900">New Cursor Interface</h4>
</div>
<div className="min-w-[280px] flex-1 bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6">
<div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
                            Mar 25, 2026
                        </div>
<h4 className="text-base font-semibold text-zinc-900">Self-hosted Cloud Agents</h4>
</div>
<div className="min-w-[280px] flex-1 bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6">
<div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
                            Mar 19, 2026
                        </div>
<h4 className="text-base font-semibold text-zinc-900">Composer 2</h4>
</div>
<div className="min-w-[280px] flex-1 bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6">
<div className="flex items-center gap-2 mb-3 text-sm text-zinc-500">
                            Mar 11, 2026
                        </div>
<h4 className="text-base font-semibold text-zinc-900">New Plugins on the Cursor Marketplace</h4>
</div>
</div>
<a className="inline-block text-base text-orange-600 hover:text-orange-700 font-medium mb-16" href="#">
                    See what's new in Cursor <i className="w-4 h-4 inline" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>

<div className="rounded-3xl overflow-hidden relative h-[400px] mb-16 bg-zinc-200 border border-zinc-200 flex items-center">

<div className="absolute inset-0 bg-gradient-to-r from-zinc-800 to-zinc-600">
<div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white via-transparent to-transparent"></div>

<div className="absolute right-20 top-10 w-64 h-64 border-2 border-white/20 rounded-full"></div>
<div className="absolute right-40 bottom-10 w-48 h-48 border-2 border-white/10 rounded-lg rotate-12"></div>
</div>
<div className="relative z-10 p-12 max-w-lg">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-6 leading-tight">Cursor is an applied research team focused on building the future of software development.</h2>
<a className="text-lg text-orange-400 hover:text-orange-300 font-medium flex items-center gap-1 transition-colors" href="#">
                            Join us <i className="w-4 h-4" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900 mb-6">Recent highlights</h2>
<div className="grid md:grid-cols-4 gap-6 mb-8">

<div className="bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6 flex flex-col h-full cursor-pointer hover:bg-zinc-100 transition-colors">
<div className="text-sm text-zinc-500 mb-2">Mar 27, 2026 · Research</div>
<h4 className="text-base font-semibold text-zinc-900 mb-6 flex-1">A technical report on Composer 2</h4>
<div className="flex items-center gap-2 mt-auto">
<div className="w-6 h-6 rounded-full bg-blue-200"></div>
<span className="text-sm text-zinc-600">Sasha Rush · 3 min read</span>
</div>
</div>

<div className="bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6 flex flex-col h-full cursor-pointer hover:bg-zinc-100 transition-colors">
<div className="text-sm text-zinc-500 mb-2">Apr 2, 2026 · Product</div>
<h4 className="text-base font-semibold text-zinc-900 mb-6 flex-1">Meet the new Cursor</h4>
<div className="flex items-center gap-2 mt-auto">
<div className="flex -space-x-1">
<div className="w-6 h-6 rounded-full bg-orange-200 border border-white"></div>
<div className="w-6 h-6 rounded-full bg-green-200 border border-white"></div>
</div>
<span className="text-sm text-zinc-600">Michael &amp; Sualeh · 10 min read</span>
</div>
</div>

<div className="bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6 flex flex-col h-full cursor-pointer hover:bg-zinc-100 transition-colors">
<div className="text-sm text-zinc-500 mb-2">Mar 19, 2026 · Research</div>
<h4 className="text-base font-semibold text-zinc-900 mb-6 flex-1">Introducing Composer 2</h4>
<div className="flex items-center gap-2 mt-auto">
<div className="w-6 h-6 rounded-full bg-zinc-800 flex items-center justify-center"><svg className="text-white" fill="none" height="10" viewbox="0 0 24 24" width="10"><path d="M4 4L20 12L4 20V4Z" fill="currentColor"></path></svg></div>
<span className="text-sm text-zinc-600">Cursor Team · 3 min read</span>
</div>
</div>

<div className="bg-[#F5F5F5] border border-zinc-100 rounded-xl p-6 flex flex-col h-full cursor-pointer hover:bg-zinc-100 transition-colors">
<div className="text-sm text-zinc-500 mb-2">Mar 11, 2026 · Research</div>
<h4 className="text-base font-semibold text-zinc-900 mb-6 flex-1">How we compare model quality in Cursor</h4>
<div className="flex items-center gap-2 mt-auto">
<div className="w-6 h-6 rounded-full bg-red-200"></div>
<span className="text-sm text-zinc-600">Naman Jain · 7 min read</span>
</div>
</div>
</div>
<a className="inline-block text-base text-orange-600 hover:text-orange-700 font-medium" href="#">
                    View all blog posts <i className="w-4 h-4 inline" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</section>

<section className="py-32 bg-[#FAFAFA] reveal">
<div className="max-w-[1200px] mx-auto px-6 text-center">
<h2 className="text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-8">Try Cursor now.</h2>
<button className="bg-zinc-900 text-white px-6 py-3 rounded-full text-lg font-medium hover:bg-zinc-800 transition-colors inline-flex items-center gap-2">
                    Download for Windows <i className="w-5 h-5" data-lucide="download" strokeWidth="1.5"></i>
</button>
</div>
</section>
</main>

<footer className="bg-[#FAFAFA] border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-[1200px] mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-5 gap-8 mb-16">

<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4">Product</h5>
<ul className="space-y-3">
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Agents</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Enterprise</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Code Review</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Tab</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">CLI</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Cloud Agents</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Marketplace</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4">Resources</h5>
<ul className="space-y-3">
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Download</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Changelog</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Docs</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Learn</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Forum</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Help</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Workshops</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Status</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4">Company</h5>
<ul className="space-y-3">
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Careers</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Community</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Students</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Brand</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Future</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Anysphere</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4">Legal</h5>
<ul className="space-y-3">
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Data Use</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">Security</a></li>
</ul>
</div>

<div>
<h5 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h5>
<ul className="space-y-3">
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">X</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">LinkedIn</a></li>
<li><a className="text-base text-zinc-600 hover:text-zinc-900 transition-colors" href="#">YouTube</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-zinc-200">
<div className="flex items-center gap-4 text-sm text-zinc-500 mb-4 md:mb-0">
<span>© 2026 Anysphere, Inc.</span>
<span className="flex items-center gap-1"><i className="w-4 h-4" data-lucide="shield-check" strokeWidth="1.5"></i> SOC 2 Certified</span>
</div>
<div className="flex items-center gap-4">

<div className="flex bg-zinc-100 rounded-full p-1 border border-zinc-200">
<button className="w-7 h-7 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-900">
<i className="w-4 h-4" data-lucide="monitor" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="sun" strokeWidth="1.5"></i>
</button>
<button className="w-7 h-7 rounded-full flex items-center justify-center text-zinc-500 hover:text-zinc-900 transition-colors">
<i className="w-4 h-4" data-lucide="moon" strokeWidth="1.5"></i>
</button>
</div>

<button className="flex items-center gap-1 bg-zinc-100 px-3 py-1.5 rounded-full border border-zinc-200 text-sm text-zinc-700 hover:bg-zinc-200 transition-colors">
<i className="w-4 h-4" data-lucide="globe" strokeWidth="1.5"></i> English <i className="w-3 h-3 ml-1" data-lucide="chevron-down" strokeWidth="1.5"></i>
</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
