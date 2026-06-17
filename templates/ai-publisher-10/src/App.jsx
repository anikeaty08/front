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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-16 transition-all duration-300">
<div className="flex h-full max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="text-2xl font-semibold tracking-tighter uppercase flex items-center gap-2 z-50 font-space-grotesk" href="#" style={{}}>
                Cashmere
            </a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors font-space-grotesk" href="#product" style={{}}>Product</a>
<a className="hover:text-zinc-900 transition-colors font-space-grotesk" href="#how-it-works" style={{}}>How it works</a>
<a className="hover:text-zinc-900 transition-colors font-space-grotesk" href="#publishers" style={{}}>Publishers</a>
<a className="hover:text-zinc-900 transition-colors font-space-grotesk" href="#manifesto" style={{}}>Manifesto</a>
<a className="hover:text-zinc-900 transition-colors font-space-grotesk" href="#blog" style={{}}>Blog</a>
</div>

<div className="hidden md:flex items-center gap-4">
<a className="text-sm font-medium text-zinc-600 hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Log in</a>
<a className="group flex items-center gap-2 bg-[#0f392b] text-white text-xs font-medium px-4 py-2.5 rounded-full hover:bg-zinc-800 transition-all font-space-grotesk" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="14" height="14" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                    Book a Demo
                </a>
</div>

<button className="md:hidden z-50 p-2 text-zinc-600">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:menu" data-width="24" height="24" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16M4 12h16M4 19h16" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</nav>

<section className="md:pt-48 md:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="grid lg:grid-cols-2 gap-12 max-w-7xl mr-auto ml-auto pr-6 pl-6 gap-x-12 gap-y-12 items-center">
<div className="max-w-2xl relative z-10">
<h1 className="text-5xl md:text-7xl font-semibold leading-[1.1] mb-6 text-zinc-900 font-space-grotesk" style={{}}>
                    The AI Infrastructure for Premium Content
                </h1>
<p className="text-lg md:text-xl text-zinc-500 font-light leading-relaxed mb-8 max-w-lg font-space-grotesk" style={{}}>
                    Cashmere helps publishers safely deploy, control and monetize their content across any AI case.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-[#0f392b] text-white px-6 py-3 rounded-full font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-emerald-900/10 font-space-grotesk" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="16" height="16" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                        Book a Demo
                    </a>
</div>
</div>
<div className="relative w-full h-[300px] md:h-[500px] lg:h-[600px] rounded-2xl overflow-hidden shadow-2xl bg-zinc-100">
<img alt="Cashmere Hero" className="absolute inset-0 w-full h-full object-cover" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/6954df40267f5920faa92fbd_cashmere-hero.avif"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/10 to-transparent"></div>
</div>
</div>
</section>

<section className="py-12 border-y border-zinc-100 bg-zinc-50/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium uppercase tracking-widest text-zinc-400 mb-8 font-space-grotesk" style={{}}>Trusted by the Premium Content Industry</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="Wiley" className="h-6 md:h-8 w-auto" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cf7277e0127a891542_Wiley_logo.svg"/>
<img alt="Statista" className="h-6 md:h-8 w-auto" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cfcb45fe3fb181fb5b_Statista_logo.svg"/>
<img alt="Perplexity" className="h-6 md:h-8 w-auto" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cf6b79d21444504e5e_Perplexity_AI_logo.svg"/>
<img alt="Logo" className="h-5 md:h-6 w-auto" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cf4681dac4f9eddb59_logo%20(3).png"/>
</div>
</div>
</section>

<section className="py-24 md:py-32">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="relative rounded-2xl overflow-hidden shadow-2xl bg-black aspect-video lg:aspect-square group">
<video autoplay="" className="absolute inset-0 w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700 ease-out" loop="" muted="" playsinline="">
<source src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85%2F68373dbe1e567e1399b5ce5a_The_man_sits_202505281042-transcode.mp4" type="video/mp4"/>
</video>
<div className="absolute inset-0 bg-black/10"></div>
</div>

<div>
<div className="w-12 h-[1px] bg-zinc-300 mb-8"></div>
<h2 className="text-3xl md:text-5xl font-semibold mb-8 tracking-tight text-zinc-900 font-space-grotesk" style={{}}>
                    AI has changed how people interact with content.
                </h2>
<div className="space-y-6 text-lg text-zinc-600 font-light">
<p className="font-space-grotesk" style={{}}>Consumers now turn to AI assistants for answers, summaries, insights, and guidance.</p>
<p className="font-space-grotesk" style={{}}>They expect accuracy, trust, and authoritative sources behind every response.</p>
<p className="text-zinc-900 font-medium font-space-grotesk" style={{}}>Publishers need a safe, controlled way to power these experiences without risking content ownership or losing visibility.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 border-y border-zinc-200">
<div className="max-w-5xl mx-auto px-6 text-center">
<h3 className="text-2xl md:text-4xl font-normal leading-tight text-zinc-800 font-space-grotesk" style={{}}>
                Cashmere makes your premium content accessible to AI—<span className="text-[#0f392b] font-medium font-space-grotesk" style={{}}>safely, transparently, and on your terms.</span>
</h3>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight max-w-2xl font-space-grotesk" style={{}}>Everything publishers need to succeed in the AI economy.</h2>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-start">
<div className="sticky top-24 rounded-2xl overflow-hidden aspect-[4/3] bg-zinc-100 shadow-lg">
<img alt="Office" className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/682f69d4d4df4bf431644c2a_Office.avif"/>
</div>
<div className="space-y-4">

<details className="group bg-zinc-50 rounded-xl overflow-hidden border border-transparent open:border-zinc-200 transition-all duration-300" open="">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Complete AI infrastructure, managed for you</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-600 font-light leading-relaxed font-space-grotesk" style={{}}>
                            Distributed retrieval, access control, delivery, and SLAs—so you can stay focused on creating world-class content.
                        </div>
</details>

<details className="group bg-zinc-50 rounded-xl overflow-hidden border border-transparent open:border-zinc-200 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Full control over access, rights, and licensing</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-600 font-light leading-relaxed font-space-grotesk" style={{}}>
                            Grant access on your terms. Integrate existing entitlement systems. Configure license rights, usage rules, and pricing models with confidence.
                        </div>
</details>

<details className="group bg-zinc-50 rounded-xl overflow-hidden border border-transparent open:border-zinc-200 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>One integration. Endless AI opportunities.</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-600 font-light leading-relaxed font-space-grotesk" style={{}}>
                            Connect once and pursue any AI licensing channel—consumer apps, enterprise copilots, MCP apps, platform integrations—knowing delivery, governance, and monetization are fully handled.
                        </div>
</details>

<details className="group bg-zinc-50 rounded-xl overflow-hidden border border-transparent open:border-zinc-200 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Make your content AI-native</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-zinc-400">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:chevron-down" data-width="20" height="20" role="img" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m6 9l6 6l6-6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
</summary>
<div className="px-6 pb-6 pt-0 text-zinc-600 font-light leading-relaxed font-space-grotesk" style={{}}>
                            Your content stays the same—Cashmere simply represents it in an AI-friendly structure called the Omnipub, improving retrieval, accuracy, attribution, and context.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-50 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="w-12 h-[1px] bg-zinc-700 mb-8"></div>
<h2 className="text-3xl md:text-5xl font-semibold mb-20 tracking-tight font-space-grotesk" style={{}}>How Publishers are Using Cashmere</h2>
<div className="space-y-12">

<div className="bg-zinc-800/50 rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="">
<div className="w-8 h-[1px] bg-zinc-500 mb-6"></div>
<h3 className="text-3xl font-normal mb-8 font-space-grotesk" style={{}}>Build AI Powered Applications</h3>
<p className="text-zinc-400 text-lg font-light mb-8 font-space-grotesk" style={{}}>Create AI-powered tools using your content—either for internal teams or for the market.</p>
<div className="space-y-6 border-t border-zinc-700 pt-6">
<div className="flex gap-4">
<div className="text-emerald-400 text-sm font-mono whitespace-nowrap pt-1 font-space-grotesk" style={{}}>Internal tools:</div>
<div className="text-zinc-300 text-sm font-space-grotesk" style={{}}>AI-powered keyword generation, metadata assistance, research bots, internal knowledge copilots</div>
</div>
<div className="flex gap-4">
<div className="text-emerald-400 text-sm font-mono whitespace-nowrap pt-1 font-space-grotesk" style={{}}>Consumer products:</div>
<div className="text-zinc-300 text-sm font-space-grotesk" style={{}}>AI study tools, tutors, reference assistants, professional research aides</div>
</div>
</div>
<div className="mt-8">
<a className="inline-flex items-center gap-2 text-white bg-zinc-700 hover:bg-zinc-600 px-5 py-2.5 rounded-full text-sm font-medium transition-colors font-space-grotesk" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
                                Book a Demo
                            </a>
</div>
</div>
<div className="rounded-xl overflow-hidden h-[300px] lg:h-auto">
<img alt="AI Apps" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/6954dff1349ac47e6b1c996e_publishers-image.avif"/>
</div>
</div>

<div className="bg-zinc-800/50 rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="lg:order-last">
<div className="w-8 h-[1px] bg-zinc-500 mb-6"></div>
<h3 className="text-3xl font-normal mb-8 font-space-grotesk" style={{}}>Connect with AI Assistants and Agents</h3>
<p className="text-zinc-400 text-lg font-light mb-6 font-space-grotesk" style={{}}>AI is the new operating system—and an MCP app is your “native app” for this new environment.</p>
<p className="text-zinc-400 text-lg font-light font-space-grotesk" style={{}}>Cashmere’s turnkey MCP App integrates your content, authentication, and entitlements in one place.</p>
</div>
<div className="rounded-xl overflow-hidden h-[300px] lg:h-auto">
<img alt="Agents" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/694036bbf6849a0d96c5605b_connect-agents.avif"/>
</div>
</div>

<div className="bg-zinc-800/50 rounded-3xl p-8 md:p-12 grid lg:grid-cols-2 gap-12 border border-zinc-700/50 hover:border-zinc-600 transition-colors">
<div className="">
<div className="w-8 h-[1px] bg-zinc-500 mb-6"></div>
<h3 className="text-3xl font-normal mb-8 font-space-grotesk" style={{}}>Authorize "AI Content Licenses" for 3rd Party Apps</h3>
<p className="text-zinc-400 text-lg font-light mb-6 font-space-grotesk" style={{}}>Your customers, partners, and AI companies are already asking for ways to use your content in AI.</p>
<p className="text-zinc-400 text-lg font-light font-space-grotesk" style={{}}>Cashmere gives you everything you need out of the box to offer those partnerships.</p>
</div>
<div className="rounded-xl overflow-hidden h-[300px] lg:h-auto">
<img alt="Third Party" className="w-full h-full object-cover opacity-80 mix-blend-overlay" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/694036bb2ac29716944420b4_third-party.avif"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="w-12 h-[1px] bg-zinc-300 mb-8"></div>
<h2 className="text-3xl md:text-5xl font-semibold mb-20 tracking-tight font-space-grotesk" style={{}}>How Cashmere powers your AI ecosystem.</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="group border-t border-zinc-200 pt-8 hover:border-zinc-900 transition-colors duration-500">
<div className="text-6xl font-light text-zinc-200 mb-6 group-hover:text-[#0f392b] transition-colors font-space-grotesk" style={{}}>01</div>
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Connect your content</h3>
</div>
<div className="group border-t border-zinc-200 pt-8 hover:border-zinc-900 transition-colors duration-500">
<div className="text-6xl font-light text-zinc-200 mb-6 group-hover:text-[#0f392b] transition-colors font-space-grotesk" style={{}}>02</div>
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Define rights and permissions</h3>
</div>
<div className="group border-t border-zinc-200 pt-8 hover:border-zinc-900 transition-colors duration-500">
<div className="text-6xl font-light text-zinc-200 mb-6 group-hover:text-[#0f392b] transition-colors font-space-grotesk" style={{}}>03</div>
<h3 className="text-xl font-medium text-zinc-900 font-space-grotesk" style={{}}>Deliver and monitor usage</h3>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex justify-center items-center px-8 py-3 rounded-full border border-zinc-200 hover:border-zinc-900 hover:bg-zinc-50 transition-all font-medium text-sm font-space-grotesk" href="#" style={{}}>
                    See How It Works
                </a>
</div>
</div>
</section>

<section className="py-20 bg-zinc-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 pb-8 hide-scrollbar">

<div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 snap-center flex flex-col justify-between">
<blockquote className="text-xl font-light text-zinc-700 mb-8 font-space-grotesk" style={{}}>
                        “Cashmere has been a transformational partner. They made it possible for Wiley to safely deliver our content into AI products with full control and confidence.”
                    </blockquote>
<div className="flex items-center justify-between mt-auto">
<div className="text-sm font-medium text-zinc-900 font-space-grotesk" style={{}}>Simon Allen, <span className="text-emerald-700 font-space-grotesk" style={{}}>Wiley</span></div>
<img className="h-5 w-auto grayscale opacity-50" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cf7277e0127a891542_Wiley_logo.svg"/>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 snap-center flex flex-col justify-between">
<blockquote className="text-xl font-light text-zinc-700 mb-8 font-space-grotesk" style={{}}>
                        “Every answer we generate needs trusted sources. Cashmere gave us seamless access to licensed content with clear governance.”
                    </blockquote>
<div className="flex items-center justify-between mt-auto">
<div className="text-sm font-medium text-zinc-900 font-space-grotesk" style={{}}>Team, <span className="text-emerald-700 font-space-grotesk" style={{}}>Perplexity</span></div>
<img className="h-5 w-auto grayscale opacity-50" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/692e97cf6b79d21444504e5e_Perplexity_AI_logo.svg"/>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[450px] bg-white p-8 rounded-2xl shadow-sm border border-zinc-100 snap-center flex flex-col justify-between">
<blockquote className="text-xl font-light text-zinc-700 mb-8 font-space-grotesk" style={{}}>
                        “We needed a way to bring premium veterinary research into our AI tools responsibly. Cashmere got us there instantly.”
                    </blockquote>
<div className="flex items-center justify-between mt-auto">
<div className="text-sm font-medium text-zinc-900 font-space-grotesk" style={{}}>Chris, <span className="text-emerald-700 font-space-grotesk" style={{}}>VetGeni</span></div>
<div className="text-xs text-zinc-400 font-bold uppercase tracking-wider font-space-grotesk" style={{}}>VetGeni</div>
</div>
</div>
</div>

<div className="flex justify-end gap-2 mt-4 pr-6 md:pr-0">
<button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-left" data-width="16" height="16" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m12 19l-7-7l7-7m7 7H5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="w-10 h-10 rounded-full border border-zinc-300 flex items-center justify-center hover:bg-zinc-100">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="16" height="16" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
</div>
</div>
</section>

<section className="relative h-[400px] md:h-[600px] bg-black">
<div className="absolute inset-0 grid grid-cols-2">
<img className="w-full h-full object-cover opacity-60" src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85/682f69d37c378919e50ef226_Library.avif"/>
<div className="relative overflow-hidden">
<video autoplay="" className="w-full h-full object-cover opacity-60" loop="" muted="" playsinline="">
<source src="https://cdn.prod.website-files.com/682f5e56cd5abce28b8acd85%2F683776573e0c2185345d47c3_Have_the_light_202505281027-transcode.mp4" type="video/mp4"/>
</video>
</div>
</div>
<div className="bg-black/20 absolute top-0 right-0 bottom-0 left-0"></div>
</section>

<section className="py-32 bg-white text-center">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-4xl md:text-6xl font-semibold tracking-tight text-zinc-900 mb-8 font-space-grotesk" style={{}}>Just Book a Demo</h3>
<p className="text-xl text-zinc-500 font-light mb-12 font-space-grotesk" style={{}}>See how Cashmere can help you navigate the intersection of publishing and AI.</p>
<a className="inline-flex justify-center items-center gap-2 bg-[#0f392b] text-white px-8 py-4 rounded-full font-medium text-lg hover:bg-zinc-800 transition-all shadow-xl shadow-emerald-900/10 font-space-grotesk" href="#" style={{}}>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:calendar" data-width="18" height="18" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M8 2v4m8-4v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></g></svg>
                Book a Demo
            </a>
</div>
</section>

<footer className="bg-zinc-50 pt-16 pb-8 border-t border-zinc-200">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-8">
<div className="flex flex-wrap justify-center md:justify-start gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Publishers</a>
<a className="hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Manifesto</a>
<a className="hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Blog</a>
<a className="hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Privacy Policy</a>
<a className="hover:text-zinc-900 font-space-grotesk" href="#" style={{}}>Terms of Use</a>
</div>
<div className="flex gap-4">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path><circle cx="4" cy="4" r="2"></circle></g></svg>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" data-width="20" height="20" role="img" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-xs text-zinc-400 font-medium pt-8 border-t border-zinc-200">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<span className="uppercase tracking-widest text-zinc-900 font-bold font-space-grotesk" style={{}}>Cashmere</span>
<span className="font-space-grotesk" style={{}}>© 2026</span>
</div>
<div className="font-space-grotesk" style={{}}>All Rights Reserved</div>
</div>
</div>
</footer>

    </>
  );
}
