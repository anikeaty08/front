import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // 1. Technical Parallax & Data Nodes Animation
        const gridBg = document.getElementById('grid-bg');
        const dataNodes = document.querySelectorAll('.data-node');
        
        let lastScrollY = 0;
        let ticking = false;

        function updateParallax() {
            const scrollY = window.scrollY;
            
            // Grid Moves at 0.3 ratio
            if (gridBg) {
                // translate3d for GPU acceleration
                gridBg.style.transform = `translate3d(0, ${scrollY * 0.3}px, 0)`;
            }

            // Data Nodes Move at 0.8 ratio (faster/closer)
            dataNodes.forEach((node, index) => {
                // Adding a slight offset per node for organic feel
                const speed = 0.8 + (index * 0.05); 
                node.style.transform = `translate3d(0, ${scrollY * speed}px, 0)`;
            });

            ticking = false;
        }

        window.addEventListener('scroll', () => {
            if (!ticking) {
                window.requestAnimationFrame(updateParallax);
                ticking = true;
            }
        });

        // 2. Staggered Scroll Reveal
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px 0px -50px 0px"
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry, index) => {
                if (entry.isIntersecting) {
                    // Stagger effect based on index isn't easy with single observer, 
                    // so we use a timeout or CSS transition delay if they are siblings. 
                    // Here we just toggle the class.
                    entry.target.classList.add('is-visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-node').forEach((el) => {
            observer.observe(el);
        });

        // 3. Typewriter Logic (Preserved)
        (function() {
            const input = document.getElementById('delta-input');
            if(!input) return;
            
            const prompts = [
              "Why is my traffic not converting?",
              "What should I fix first on my website?",
              "My ad spend is up but revenue is flat.",
              "Where am I losing leads?"
            ];
            let pIndex = 0;
            let cIndex = 0;
            let isDel = false;
            let typingTimeout;

            function type() {
               if (document.activeElement === input && input.value !== '') return;
               const cur = prompts[pIndex];
               if (isDel) {
                 input.setAttribute('placeholder', cur.substring(0, cIndex - 1));
                 cIndex--;
               } else {
                 input.setAttribute('placeholder', cur.substring(0, cIndex + 1));
                 cIndex++;
               }

               let speed = 50;
               if (isDel) speed = 30;
               if (!isDel && cIndex === cur.length) {
                 isDel = true;
                 speed = 2000;
               } else if (isDel && cIndex === 0) {
                 isDel = false;
                 pIndex = (pIndex + 1) % prompts.length;
                 speed = 500;
               }

               if (document.activeElement !== input || input.value === '') {
                  typingTimeout = setTimeout(type, speed);
               }
            }
            type();
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="parallax-grid-layer" id="grid-bg"></div>

<div className="data-nodes-layer" id="nodes-container">

<div className="data-node" style={{top: '15%', left: '15%'}}></div>
<div className="data-node" style={{top: '35%', right: '10%'}}></div>
<div className="data-node" style={{top: '55%', left: '25%'}}></div>
<div className="data-node" style={{top: '75%', right: '20%'}}></div>
<div className="data-node" style={{top: '90%', left: '40%'}}></div>
</div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-[92%] max-w-4xl border border-white/10 bg-[#050505]/70 backdrop-blur-xl rounded-full px-6 h-14 flex items-center justify-between shadow-2xl transition-all duration-300">
<a className="hover:opacity-80 transition-opacity flex items-center gap-2 text-sm font-semibold text-white tracking-wide" href="#">
<div className="w-2 h-2 rounded-full bg-[#CCFF00]"></div>
        AiContentfy
      </a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium text-zinc-400">
<a className="hover:text-white transition-colors" href="#">About</a>
<div className="relative group cursor-pointer h-14 flex items-center">
<span className="hover:text-white transition-colors flex items-center gap-1 group-hover:text-white">
            Services
            <svg className="lucide lucide-chevron-down w-3 h-3 opacity-50 group-hover:rotate-180 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>

<div className="absolute top-12 left-1/2 -translate-x-1/2 w-64 bg-[#0a0a0a] border border-white/10 rounded-xl p-1.5 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 shadow-2xl overflow-hidden grid gap-0.5 transform origin-top group-hover:translate-y-0 translate-y-2 backdrop-blur-3xl">
<a className="block px-3 py-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white transition-colors text-left" href="#">SEO</a>
<a className="block px-3 py-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white transition-colors text-left" href="#">Media Buying</a>
<a className="block px-3 py-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white transition-colors text-left" href="#">PR</a>
<a className="block px-3 py-2 hover:bg-white/5 rounded-lg text-zinc-400 hover:text-white transition-colors text-left" href="#">Content Writing</a>
</div>
</div>
<a className="hover:text-white transition-colors" href="#">Industries</a>
<a className="hover:text-white transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-zinc-500 hover:text-white transition-colors" href="#">Log in</a>
<a className="bg-white text-black px-5 py-2 rounded-full text-xs font-semibold hover:bg-[#CCFF00] transition-colors duration-300" href="#delta">Get in touch</a>
</div>
</nav>

<main className="relative z-10 pt-20">

<section className="min-h-screen flex items-center justify-center relative overflow-hidden pb-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-[#6E44FF] opacity-[0.15] blur-[120px] rounded-full pointer-events-none mix-blend-screen animate-pulse"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 flex flex-col items-center">
<div className="reveal-node mb-8">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-[10px] uppercase tracking-wider text-zinc-400 backdrop-blur-sm shadow-lg">
<span className="w-1.5 h-1.5 rounded-full bg-[#CCFF00] animate-pulse"></span>
              Revenue Diagnostics
            </span>
</div>
<h1 className="reveal-node text-6xl md:text-8xl font-medium tracking-tighter text-white mb-8 leading-[0.95] drop-shadow-2xl">
            Results over
            <br/>
<span className="text-zinc-600">noise.</span>
</h1>
<p className="reveal-node text-lg md:text-xl text-zinc-400 font-light max-w-lg mx-auto mb-12 leading-relaxed text-balance">
            We diagnose growth problems, then execute what moves revenue.
          </p>
<div className="reveal-node flex flex-col md:flex-row items-center gap-4">
<button className="group relative px-8 py-3.5 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#CCFF00] transition-colors duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.15)]">
              Find what’s blocking growth
              <svg className="lucide lucide-arrow-right group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<a className="text-sm text-zinc-500 hover:text-white transition-colors px-4 py-2" href="#">
              View case studies
            </a>
</div>
</div>
</section>

<section className="py-12 border-y border-white/5 bg-[#050505]/40 backdrop-blur-sm relative overflow-hidden">
<div className="text-center mb-8 reveal-node">
<p className="text-[10px] uppercase tracking-[0.2em] font-medium text-zinc-600">Mentioned on</p>
</div>
<div className="relative flex w-full max-w-6xl mx-auto overflow-hidden mask-gradient-x reveal-node">
<div className="flex items-center gap-24 whitespace-nowrap animate-marquee px-12">

<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:forbes" width="80"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="simple-icons:hackernoon" width="100"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:techcrunch" width="100"></iconify-icon></div>

<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:forbes" width="80"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="simple-icons:hackernoon" width="100"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:techcrunch" width="100"></iconify-icon></div>
</div>
<div aria-hidden="true" className="flex items-center gap-24 whitespace-nowrap animate-marquee px-12">
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:forbes" width="80"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="simple-icons:hackernoon" width="100"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:techcrunch" width="100"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:forbes" width="80"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="simple-icons:hackernoon" width="100"></iconify-icon></div>
<div className="opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-300"><iconify-icon icon="logos:techcrunch" width="100"></iconify-icon></div>
</div>
</div>
</section>

<section className="min-h-[90vh] flex flex-col items-center justify-center relative py-24" id="delta">
<div className="max-w-3xl w-full px-6 text-center z-10 relative">
<div className="mb-8 reveal-node">
<span className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium uppercase tracking-wider text-zinc-400 backdrop-blur-md">
              Free diagnostic tool
            </span>
</div>
<h2 className="reveal-node text-5xl md:text-7xl font-medium tracking-tighter text-white mb-6">
            Delta
          </h2>
<p className="reveal-node text-lg text-zinc-400 font-light mb-12">
            Type your situation. Delta will ask a few questions and return a
            diagnosis summary.
          </p>
<div className="reveal-node relative w-full max-w-2xl mx-auto group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-[#6E44FF] to-[#CCFF00] rounded-2xl opacity-20 group-hover:opacity-40 blur transition duration-500"></div>
<div className="relative bg-[#0A0A0A] border border-white/10 rounded-2xl flex items-center shadow-2xl overflow-hidden backdrop-blur-xl">
<div className="pl-5 pr-3 text-zinc-500">
<svg className="lucide lucide-terminal w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
</div>
<input autocomplete="off" className="w-full bg-transparent border-none text-white text-lg px-2 py-5 focus:ring-0 placeholder:text-zinc-600 focus:outline-none font-light" id="delta-input" placeholder="W" type="text"/>
<button className="mr-2 p-2.5 rounded-xl text-zinc-400 hover:text-white hover:bg-white/10 transition-all" id="delta-submit">
<svg className="lucide lucide-arrow-right w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505]/40 backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-6">
<h3 className="reveal-node text-xl font-medium text-white mb-12 tracking-tight">
            Where execution actually worked
          </h3>
<div className="grid md:grid-cols-3 gap-6">

<div className="reveal-node group relative h-80 border border-white/10 bg-[#080808]/80 backdrop-blur-md p-8 hover:bg-white/5 transition-all duration-500 cursor-default rounded-2xl overflow-hidden hover:border-white/20">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="group-hover:translate-y-[-10px] transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
<svg className="lucide lucide-filter w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">Fixed conversion leakage</h4>
</div>
<div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 space-y-4">
<div><span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">The Problem</span><p className="text-sm text-zinc-300 mt-1">High traffic, low demo requests.</p></div>
<div><span className="text-[10px] text-[#CCFF00] uppercase tracking-wider font-semibold">The Outcome</span><p className="text-sm text-white mt-1">Qualified pipeline density increased.</p></div>
</div>
</div>
</div>

<div className="reveal-node group relative h-80 border border-white/10 bg-[#080808]/80 backdrop-blur-md p-8 hover:bg-white/5 transition-all duration-500 cursor-default rounded-2xl overflow-hidden hover:border-white/20">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="group-hover:translate-y-[-10px] transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
<svg className="lucide lucide-wallet w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">Reduced wasted ad spend</h4>
</div>
<div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 space-y-4">
<div><span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">The Problem</span><p className="text-sm text-zinc-300 mt-1">Broad targeting bleeding budget.</p></div>
<div><span className="text-[10px] text-[#CCFF00] uppercase tracking-wider font-semibold">The Outcome</span><p className="text-sm text-white mt-1">CAC stabilized immediately.</p></div>
</div>
</div>
</div>

<div className="reveal-node group relative h-80 border border-white/10 bg-[#080808]/80 backdrop-blur-md p-8 hover:bg-white/5 transition-all duration-500 cursor-default rounded-2xl overflow-hidden hover:border-white/20">
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="group-hover:translate-y-[-10px] transition-transform duration-500">
<div className="w-12 h-12 rounded-full bg-white/5 flex items-center justify-center mb-6 text-zinc-400 group-hover:text-[#CCFF00] group-hover:bg-[#CCFF00]/10 transition-colors">
<svg className="lucide lucide-map-pin w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h4 className="text-xl font-medium text-white tracking-tight">Turned chaos into a roadmap</h4>
</div>
<div className="opacity-0 translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500 space-y-4">
<div><span className="text-[10px] text-zinc-500 uppercase tracking-wider font-semibold">The Problem</span><p className="text-sm text-zinc-300 mt-1">Team shipping features, not value.</p></div>
<div><span className="text-[10px] text-[#CCFF00] uppercase tracking-wider font-semibold">The Outcome</span><p className="text-sm text-white mt-1">Launch velocity aligned with sales.</p></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 relative overflow-hidden">
<div className="max-w-3xl mx-auto px-6 text-center space-y-16 relative z-10">
<div className="reveal-node space-y-4">
<p className="text-sm text-[#6E44FF] font-medium tracking-widest uppercase">Patterns</p>
<h2 className="text-2xl md:text-3xl font-medium leading-snug text-white">Most teams overspend before fixing conversion.</h2>
</div>
<div className="reveal-node w-px h-16 bg-gradient-to-b from-white/0 via-zinc-700 to-white/0 mx-auto"></div>
<div className="reveal-node space-y-4">
<h2 className="text-2xl md:text-3xl font-medium leading-snug text-zinc-300">Growth stalls at handoff points, not channels.</h2>
</div>
<div className="reveal-node w-px h-16 bg-gradient-to-b from-white/0 via-zinc-700 to-white/0 mx-auto"></div>
<div className="reveal-node space-y-4">
<h2 className="text-2xl md:text-3xl font-medium leading-snug text-zinc-500">Execution fails when priorities are unclear.</h2>
</div>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505]/40 backdrop-blur-sm">
<div className="max-w-5xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">

<div className="reveal-node relative h-96 w-full border border-white/10 rounded-2xl p-8 bg-[#080808]/80 backdrop-blur-md flex flex-col justify-end overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-tr from-purple-900/10 to-transparent opacity-50"></div>

<div className="absolute inset-0 p-8 grid grid-cols-4 gap-6 items-end opacity-20">
<div className="w-full bg-zinc-600 h-[30%] rounded-t-sm group-hover:h-[40%] transition-all duration-700 ease-in-out"></div>
<div className="w-full bg-zinc-600 h-[50%] rounded-t-sm group-hover:h-[55%] transition-all duration-700 ease-in-out delay-75"></div>
<div className="w-full bg-zinc-600 h-[40%] rounded-t-sm group-hover:h-[60%] transition-all duration-700 ease-in-out delay-100"></div>
<div className="w-full bg-zinc-600 h-[70%] rounded-t-sm group-hover:h-[85%] transition-all duration-700 ease-in-out delay-150"></div>
</div>

<svg className="absolute inset-0 w-full h-full p-8 z-10 overflow-visible" preserveaspectratio="none">
<path className="drop-shadow-[0_0_8px_rgba(110,68,255,0.5)]" d="M 30 250 C 100 230, 200 200, 350 100" fill="none" stroke="#6E44FF" strokeWidth="2"></path>
<circle className="animate-pulse" cx="350" cy="100" fill="#fff" r="4"></circle>
</svg>
<div className="relative z-20">
<div className="text-xs font-mono text-zinc-500 uppercase tracking-widest">System reliability</div>
<div className="text-lg text-white mt-1 font-medium">Variance reduction</div>
</div>
</div>

<div className="space-y-10 reveal-node">
<h3 className="text-3xl font-medium text-white tracking-tight leading-tight">Process over predictions.</h3>
<div className="space-y-8">
<div className="flex gap-5">
<div className="mt-1 text-zinc-500 bg-white/5 p-2 rounded-full border border-white/5">
<svg className="lucide lucide-trending-up w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<p className="text-sm text-zinc-400 leading-relaxed pt-1">We don't promise arbitrary percentage growth. We promise a system that tightens your funnel efficiency quarter over quarter.</p>
</div>
<div className="flex gap-5">
<div className="mt-1 text-zinc-500 bg-white/5 p-2 rounded-full border border-white/5">
<svg className="lucide lucide-list-filter w-5 h-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 5h20"></path><path d="M6 12h12"></path><path d="M9 19h6"></path></svg>
</div>
<p className="text-sm text-zinc-400 leading-relaxed pt-1">Priorities are ranked by revenue impact, not by what’s easiest to ship or what’s trending on social media.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5">
<div className="max-w-2xl mx-auto px-6 text-center reveal-node">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-zinc-400 mb-8 backdrop-blur-sm">
<svg className="lucide lucide-user-check w-3 h-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span>Verification</span>
</div>
<h3 className="text-xl text-white font-medium mb-4">You’re not handed a PDF and left alone.</h3>
<p className="text-sm text-zinc-400 leading-relaxed">After diagnosis, a strategist reviews your case. Execution plans are adjusted by humans who understand nuance that algorithms miss.</p>
</div>
</section>

<section className="py-32 border-t border-white/5 bg-[#050505]/40 backdrop-blur-sm">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="reveal-node text-3xl md:text-5xl font-medium tracking-tighter text-white mb-8">Clarity before execution changes everything.</h2>
<div className="reveal-node flex justify-center">
<button className="px-8 py-4 bg-white text-black text-sm font-semibold rounded-full hover:bg-[#CCFF00] hover:scale-105 transition-all duration-300 flex items-center gap-2 shadow-[0_0_20px_rgba(255,255,255,0.1)]">
              Find what’s blocking growth
            </button>
</div>
<div className="mt-24 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6 text-xs text-zinc-600 reveal-node">
<div>© AiContentfy. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-zinc-400 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-400 transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
</section>
</main>



    </>
  );
}
