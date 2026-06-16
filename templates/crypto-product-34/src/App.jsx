import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Icons
        lucide.createIcons();

        // Hero Text Animation
        const words = ["prediction market", "DEX", "lending platform", "dashboard", "explorer", "super app"];
        const el = document.getElementById('dynamic-text');
        let index = 0;

        async function cycleText() {
            while (true) {
                await new Promise(r => setTimeout(r, 2000));
                
                // Fade out
                el.style.transition = 'opacity 0.3s ease, transform 0.3s ease';
                el.style.opacity = '0';
                el.style.transform = 'translateY(10px)';

                await new Promise(r => setTimeout(r, 300));
                
                // Change text
                index = (index + 1) % words.length;
                el.innerText = words[index];
                el.style.transform = 'translateY(-10px)';

                await new Promise(r => setTimeout(r, 50));

                // Fade in
                el.style.opacity = '1';
                el.style.transform = 'translateY(0)';
            }
        }

        cycleText();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-2xl mx-auto px-6 py-20 md:py-28">

<div className="mb-12">
<svg className="text-white" fill="none" height="40" viewbox="0 0 40 40" width="40" xmlns="http://www.w3.org/2000/svg">
<path d="M10 10H30V16H23V24H17V16H10V10Z" fill="currentColor"></path>
<path d="M17 24H23V30H17V24Z" fill="currentColor"></path>
<path d="M10 28H14V32H10V28Z" fill="white" fillOpacity="0.5"></path>
<path d="M26 28H30V32H26V28Z" fill="white" fillOpacity="0.5"></path>
</svg>
</div>

<section className="mb-20">
<h1 className="text-3xl md:text-5xl font-semibold text-white tracking-tight mb-8 leading-[1.1]">
                The next <span className="text-neutral-500 inline-block min-w-[200px]" id="dynamic-text">prediction market</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 leading-relaxed mb-6 max-w-xl">
                We’re a crypto product studio crafting high-quality experiences across DeFi, infrastructure, and frontier tech.
            </p>
<p className="text-base text-neutral-500 leading-relaxed mb-10 max-w-xl">
                A cross-functional team that designs, builds, and ships <span className="text-neutral-300">from idea to launch</span> with the precision of engineers and the eye of designers.
            </p>
<a className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors group" href="#">
                Get in touch
                <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</section>

<hr className="border-t border-dashed border-neutral-800 my-16"/>

<section className="space-y-6">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600 block mb-2">About</span>
<h2 className="text-2xl font-semibold text-white tracking-tight">
                We don’t just build products. We build the standard.
            </h2>
<p className="text-base leading-relaxed text-neutral-400">
                TNT Labs merges engineering, product, and design into one cohesive workflow.
            </p>
<p className="text-base leading-relaxed text-neutral-400">
                We obsess over usability, consistency, and detail – so every interaction feels intentional, every feature inevitable.
            </p>
<p className="text-base leading-relaxed text-neutral-400">
                Our mission is simple: make decentralised technology feel world-class.
            </p>
</section>

<hr className="border-t border-dashed border-neutral-800 my-16"/>

<section>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600 block mb-10">What we build</span>
<div className="space-y-12">

<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-blue-500 w-5 h-5" data-lucide="layers"></i>
<h3 className="text-xl font-semibold text-white tracking-tight">DeFi &amp; Cross-chain Apps</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">DEXs</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Vaults</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Staking</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Lending Products</span>
</div>
</div>

<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-orange-500 w-5 h-5" data-lucide="layout-grid"></i>
<h3 className="text-xl font-semibold text-white tracking-tight">Infrastructure &amp; Tooling</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Validator Dashboards</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Explorers</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Oracle Interfaces</span>
</div>
</div>

<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-red-500 w-5 h-5" data-lucide="flask-conical"></i>
<h3 className="text-xl font-semibold text-white tracking-tight">Experimental Ventures</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">AI Agents</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Prediction Markets</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Telegram Bots</span>
</div>
</div>

<div className="group">
<div className="flex items-center gap-3 mb-3">
<i className="text-green-500 w-5 h-5" data-lucide="sparkles"></i>
<h3 className="text-xl font-semibold text-white tracking-tight">Brand &amp; Design</h3>
</div>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">UI/UX Services</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Design Language</span>
<span className="px-2 py-1 rounded bg-neutral-900 border border-neutral-800 text-xs text-neutral-400">Social Content</span>
</div>
</div>
</div>
</section>

<hr className="border-t border-dashed border-neutral-800 my-16"/>

<section className="space-y-6">
<span className="text-xs font-medium uppercase tracking-widest text-neutral-600 block mb-2">Our Process</span>
<h2 className="text-2xl font-semibold text-white tracking-tight">
                Zero to one, end to end.
            </h2>
<p className="text-base leading-relaxed text-neutral-400">
                Each project runs as its own product company - with dedicated design, product, and engineering inside one squad.
            </p>
<p className="text-base leading-relaxed text-neutral-400">
                We prototype fast, iterate with intent, and polish relentlessly until it feels right. Good crypto software isn’t just functional. It’s crafted.
            </p>
</section>

<hr className="border-t border-dashed border-neutral-800 my-16"/>

<section className="space-y-6">
<h2 className="text-2xl font-semibold text-white tracking-tight">
                Why Work With Us
            </h2>
<p className="text-base leading-relaxed text-neutral-400">
                Because shipping code is easy. <br/>
                But shipping an experience is hard. <br/>
                That’s what we do best.
            </p>
</section>

<hr className="border-t border-dashed border-neutral-800 my-16"/>

<section className="pb-20">
<h2 className="text-3xl md:text-4xl font-semibold text-neutral-500 tracking-tight mb-2">
                Building something <span className="text-white">ambitious?</span>
</h2>
<h2 className="text-3xl md:text-4xl font-semibold text-white tracking-tight mb-10">
                Let’s make it happen.
            </h2>
<a className="inline-flex items-center gap-2 bg-white text-black px-5 py-2.5 rounded-full text-sm font-medium hover:bg-neutral-200 transition-colors group" href="#">
                Get in touch
                <i className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" data-lucide="arrow-up-right"></i>
</a>
</section>
</div>


    </>
  );
}
