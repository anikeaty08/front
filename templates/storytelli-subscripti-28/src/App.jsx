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



        // Sample Letter Toggle
        function toggleLetter() {
            const letter = document.getElementById('sample-letter');
            const section = document.getElementById('how-it-works');
            const triggerText = document.querySelector('#envelope-trigger p');
            
            section.scrollIntoView({ behavior: 'smooth', block: 'center' });

            if (letter.classList.contains('open')) {
                letter.classList.remove('open');
                triggerText.textContent = "Click to Unseal Sample";
            } else {
                letter.classList.add('open');
                triggerText.textContent = "Close Dispatch";
            }
        }

        // Map Data Logic
        const mapData = [
            {
                title: "Letter IV: The Ascent",
                coords: "47.34° N, 12.56° E",
                desc: "\"The mountain does not yield to the climber who waits for perfect weather.\" Written from the high pass, this letter explores themes of resilience and the necessity of struggle.",
                link: "#membership"
            },
            {
                title: "Letter VII: Salt & Iron",
                coords: "32.11° N, 15.09° W",
                desc: "Dispatched from the western coast. A reflection on endurance, the tides of change, and remaining grounded when the world shifts beneath your feet.",
                link: "#membership"
            },
            {
                title: "Letter IX: The Foundry",
                coords: "51.50° N, 0.12° W",
                desc: "Sent from the heart of the industrial expanse. This dispatch focuses on building something that lasts in a disposable world.",
                link: "#membership"
            }
        ];

        function updateMapDetails(index, element) {
            // Update UI
            document.querySelectorAll('.map-marker .center-dot').forEach(el => {
                el.classList.remove('bg-[#b8a88a]', 'shadow-[0_0_10px_#b8a88a]');
                el.classList.add('bg-stone-500');
            });
            document.querySelectorAll('.map-marker').forEach(el => el.classList.remove('active-marker'));

            const dot = element.querySelector('.center-dot');
            dot.classList.remove('bg-stone-500');
            dot.classList.add('bg-[#b8a88a]', 'shadow-[0_0_10px_#b8a88a]');
            element.classList.add('active-marker');

            // Update Content
            const data = mapData[index];
            document.getElementById('map-title').innerText = data.title;
            document.getElementById('map-coords').innerText = data.coords;
            document.getElementById('map-desc').innerText = data.desc;
            
            // Subtle animation for text update
            const panel = document.getElementById('map-details');
            panel.classList.add('opacity-50');
            setTimeout(() => {
                panel.classList.remove('opacity-50');
            }, 200);
        }

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-lg');
                nav.classList.replace('bg-[#0c0a09]/90', 'bg-[#0c0a09]');
            } else {
                nav.classList.remove('shadow-lg');
                nav.classList.replace('bg-[#0c0a09]', 'bg-[#0c0a09]/90');
            }
        });
    
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
      

<div className="bg-grain"></div>

<nav className="fixed top-0 w-full z-40 border-b border-white/5 bg-[#0c0a09]/90 backdrop-blur-md transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-3 cursor-pointer group">
<span className="iconify text-[#b8a88a] group-hover:text-white transition-colors" data-icon="lucide:feather" data-width="24"></span>
<span className="font-heading font-bold text-lg tracking-widest text-[#d6d3d1] group-hover:text-white transition-colors uppercase">Letters of the Ages</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-[#b8a88a] transition-colors" href="#how-it-works">How It Works</a>
<a className="text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-[#b8a88a] transition-colors" href="#letters">The Letters</a>
<a className="text-xs font-medium uppercase tracking-widest text-stone-400 hover:text-[#b8a88a] transition-colors" href="#membership">Membership</a>
</div>
<div className="flex items-center gap-6">
<a className="px-6 py-2 bg-[#b8a88a] text-[#0c0a09] text-xs font-bold uppercase tracking-widest rounded-sm hover:bg-[#dcd0b9] transition-colors shadow-lg shadow-[#b8a88a]/20" href="#membership">
                    Begin
                </a>
</div>
</div>
</nav>

<main className="relative h-screen min-h-[700px] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<div className="absolute inset-0 bg-gradient-to-b from-[#0c0a09]/80 via-[#0c0a09]/60 to-[#0c0a09] z-10"></div>

<img alt="Vintage desk with maps" className="w-full h-full object-cover opacity-60 scale-105 animate-[pulse_10s_ease-in-out_infinite]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="relative z-20 max-w-5xl mx-auto px-6 text-center">
<div className="fade-in-up">
<div className="inline-flex items-center gap-3 px-4 py-1.5 rounded-full bg-[#b8a88a]/10 border border-[#b8a88a]/20 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#b8a88a] animate-pulse"></span>
<span className="text-[10px] font-bold uppercase tracking-[0.2em] text-[#b8a88a]">Transmission Received</span>
</div>
</div>
<h1 className="fade-in-up delay-100 text-5xl md:text-7xl font-bold text-[#e7e5e4] tracking-tight mb-6 leading-none text-shadow-sm font-heading uppercase">
                Letters of the Ages
            </h1>
<p className="fade-in-up delay-200 text-lg md:text-xl text-stone-400 font-light italic max-w-xl mx-auto mb-12 font-serif tracking-wide">
                "Only the forged will understand."
            </p>
<div className="fade-in-up delay-300 flex flex-col sm:flex-row items-center justify-center gap-6">
<a className="btn-pop w-full sm:w-auto tracking-widest text-xs" href="#membership">
                    Start Your Collection
                </a>
<button className="btn-ghost w-full sm:w-auto group" onclick="toggleLetter()">
<span className="iconify group-hover:rotate-12 transition-transform" data-icon="lucide:mail-open" data-width="16"></span>
                    Open a Sample Letter
                </button>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 animate-bounce">
<span className="text-[10px] uppercase tracking-widest text-stone-500">Scroll</span>
<span className="iconify text-stone-500" data-icon="lucide:chevron-down" data-width="16"></span>
</div>
</main>

<section className="py-24 bg-[#0c0a09] relative border-b border-stone-800" id="letters">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<span className="text-[#b8a88a] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">Digital Keepsake Map</span>
<h2 className="text-3xl font-heading font-semibold text-[#e7e5e4]">The War Room</h2>
<p className="text-stone-400 text-sm mt-2 max-w-md">Track the origins of every dispatch. Select a coordinate to reveal the letter's history.</p>
</div>
<div className="flex items-center gap-2 px-3 py-1 bg-stone-900 border border-stone-800 rounded text-[10px] uppercase tracking-widest text-[#b8a88a]">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                System Online
            </div>
</div>

<div className="max-w-7xl mx-auto px-6 h-[600px] md:h-[500px]">
<div className="grid md:grid-cols-3 h-full border border-stone-800 rounded-lg overflow-hidden bg-[#1c1917]">

<div className="md:col-span-2 relative bg-stone-900 overflow-hidden group">

<img alt="Topographic Map" className="absolute inset-0 w-full h-full object-cover opacity-30 grayscale contrast-125 transition-transform duration-[10s] ease-linear group-hover:scale-105" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.03)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[size:40px_40px]"></div>

<div className="map-marker active-marker" onclick="updateMapDetails(0, this)" style={{top: '30%', left: '45%'}}>
<div className="ring-pulse"></div>
<div className="center-dot w-3 h-3 bg-[#b8a88a] rounded-full shadow-[0_0_10px_#b8a88a]"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity bg-black/80 text-[10px] text-white px-2 py-1 rounded">Letter IV</div>
</div>

<div className="map-marker" onclick="updateMapDetails(1, this)" style={{top: '65%', left: '25%'}}>
<div className="ring-pulse"></div>
<div className="center-dot w-3 h-3 bg-stone-500 hover:bg-[#b8a88a] rounded-full transition-colors"></div>
</div>

<div className="map-marker" onclick="updateMapDetails(2, this)" style={{top: '40%', left: '75%'}}>
<div className="ring-pulse"></div>
<div className="center-dot w-3 h-3 bg-stone-500 hover:bg-[#b8a88a] rounded-full transition-colors"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-20" xmlns="http://www.w3.org/2000/svg">
<line stroke="#b8a88a" stroke-dasharray="5,5" strokeWidth="1" x1="45%" x2="25%" y1="30%" y2="65%"></line>
<line stroke="#b8a88a" stroke-dasharray="5,5" strokeWidth="1" x1="45%" x2="75%" y1="30%" y2="40%"></line>
</svg>
</div>

<div className="md:col-span-1 bg-[#0c0a09] p-8 flex flex-col border-l border-stone-800 relative">

<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/dark-matter.png')] opacity-50 pointer-events-none"></div>
<div className="relative z-10 h-full flex flex-col justify-between" id="map-details">

<div>
<div className="flex items-center justify-between mb-6 border-b border-stone-800 pb-4">
<div>
<h3 className="text-xs font-mono text-[#b8a88a] uppercase tracking-widest mb-1">Target ID</h3>
<p className="text-xl font-heading font-bold text-white" id="map-title">Letter IV: The Ascent</p>
</div>
<span className="iconify text-stone-600" data-icon="lucide:radar" data-width="24"></span>
</div>
<div className="space-y-6">
<div>
<h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Coordinates</h4>
<p className="font-mono text-sm text-stone-300 bg-stone-900/50 p-2 rounded border border-stone-800 inline-block" id="map-coords">47.34° N, 12.56° E</p>
</div>
<div>
<h4 className="text-[10px] font-bold text-stone-500 uppercase tracking-widest mb-2">Briefing</h4>
<p className="text-sm text-stone-400 leading-relaxed font-serif italic" id="map-desc">
                                        "The mountain does not yield to the climber who waits for perfect weather." Written from the high pass, this letter explores themes of resilience and the necessity of struggle.
                                    </p>
</div>
</div>
</div>
<div className="mt-8">
<a className="flex items-center justify-between w-full p-4 border border-[#b8a88a]/30 rounded bg-[#b8a88a]/5 hover:bg-[#b8a88a]/10 transition-colors group" href="#membership" id="map-link">
<span className="text-xs font-bold uppercase tracking-widest text-[#b8a88a]">Acquire Dispatch</span>
<span className="iconify text-[#b8a88a] group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-[#0c0a09] border-b border-stone-800" id="how-it-works">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-10">
<span className="text-[#b8a88a] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">How It Works</span>
<div className="cursor-pointer inline-block group" id="envelope-trigger" onclick="toggleLetter()">
<div className="relative w-24 h-24 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 bg-[#b8a88a]/5 rounded-full blur-xl group-hover:bg-[#b8a88a]/10 transition-colors"></div>
<span className="iconify text-[#78350f] wax-seal drop-shadow-2xl" data-icon="lucide:stamp" data-width="64"></span>
</div>
<p className="text-xs uppercase tracking-widest text-[#b8a88a] group-hover:text-white transition-colors">Click to Unseal Sample</p>
</div>
</div>

<div className="letter-content relative mx-auto" id="sample-letter">
<div className="bg-parchment text-stone-900 p-8 md:p-16 rounded-sm shadow-2xl relative rotate-1 max-w-2xl mx-auto">

<div className="absolute top-0 left-0 w-full h-full border-[12px] border-white/20 pointer-events-none"></div>
<div className="absolute top-4 right-8 opacity-40">
<span className="iconify text-[#78350f]" data-icon="lucide:compass" data-width="48"></span>
</div>

<div className="flex justify-between items-end mb-12 border-b border-stone-800/10 pb-4">
<div>
<p className="font-heading font-bold text-lg uppercase tracking-widest text-stone-800">Letter IV</p>
<p className="text-xs font-mono text-stone-600 mt-1">Location: The High Pass</p>
</div>
<div className="text-right">
<p className="font-heading font-bold text-lg text-stone-800">MMXXV</p>
</div>
</div>

<div className="font-serif text-lg leading-relaxed space-y-6 text-stone-800">
<blockquote className="italic text-xl pl-4 border-l-2 border-[#78350f] my-8">
                            "The mountain does not yield to the climber who waits for perfect weather. Rise, son. The storm is your teacher."
                        </blockquote>
<p>This is not a path for the idle. It is a path of ascent. When you read this, know that the air is thin here, but the view is clear.</p>
</div>

<div className="mt-16 pt-8 border-t border-stone-800/10 flex items-center justify-between">
<div className="font-heading font-bold text-[#78350f] text-sm tracking-widest uppercase">
                            The Architect
                        </div>
<div className="h-12 w-32 bg-[url('https://upload.wikimedia.org/wikipedia/commons/e/e4/Signature_sample.svg')] bg-contain bg-no-repeat bg-center opacity-70"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-950 relative border-y border-stone-900" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<span className="text-[#b8a88a] text-xs font-bold uppercase tracking-[0.2em] mb-3 block">The Armory</span>
<h2 className="text-3xl md:text-4xl font-heading font-semibold text-white">Tools for the Journey</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-8 bg-[#1c1917] border border-stone-800 rounded-lg hover:border-[#b8a88a]/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-stone-900 rounded-md border border-stone-800 flex items-center justify-center mb-6 group-hover:bg-[#b8a88a]/10 group-hover:border-[#b8a88a]/30 transition-colors">
<span className="iconify text-stone-400 group-hover:text-[#b8a88a]" data-icon="lucide:scroll-text" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-200 mb-3">Monthly Story Letters</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Heroic, gritty, and mythic narratives delivered to your inbox. Stories of ancients that mirror the struggles of modern men.
                    </p>
</div>

<div className="group p-8 bg-[#1c1917] border border-stone-800 rounded-lg hover:border-[#b8a88a]/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-stone-900 rounded-md border border-stone-800 flex items-center justify-center mb-6 group-hover:bg-[#b8a88a]/10 group-hover:border-[#b8a88a]/30 transition-colors">
<span className="iconify text-stone-400 group-hover:text-[#b8a88a]" data-icon="lucide:map-pin" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-200 mb-3">Digital Keepsakes</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        High-resolution maps, coordinates, and symbol keys included with every dispatch. Build your own archive of the frontier.
                    </p>
</div>

<div className="group p-8 bg-[#1c1917] border border-stone-800 rounded-lg hover:border-[#b8a88a]/30 transition-all duration-300 hover:-translate-y-1">
<div className="w-12 h-12 bg-stone-900 rounded-md border border-stone-800 flex items-center justify-center mb-6 group-hover:bg-[#b8a88a]/10 group-hover:border-[#b8a88a]/30 transition-colors">
<span className="iconify text-stone-400 group-hover:text-[#b8a88a]" data-icon="lucide:sword" data-width="24"></span>
</div>
<h3 className="font-heading text-lg font-semibold text-stone-200 mb-3">Rites of Passage</h3>
<p className="text-sm text-stone-500 leading-relaxed">
                        Practical challenges, journaling prompts, and missions designed to test your resolve and ground your spirit.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#0c0a09] border-t border-stone-800" id="membership">
<div className="max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-8 max-w-5xl mx-auto">

<div className="relative p-10 bg-[#1c1917] border border-stone-800 rounded-sm flex flex-col items-center text-center group transition-transform duration-300 hover:-translate-y-1">
<span className="text-[#b8a88a] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-heading">The Warrior's Path</span>
<h3 className="font-heading text-4xl text-[#e7e5e4] mb-3">Monthly</h3>
<div className="flex items-baseline justify-center gap-1 mb-4">
<span className="font-heading text-6xl text-[#b8a88a]">$15</span>
<span className="text-stone-500 text-lg font-heading">/month</span>
</div>
<p className="text-stone-400 text-sm mb-10 font-serif italic">Begin your journey one letter at a time.</p>
<ul className="space-y-4 mb-10 w-full text-left pl-6">
<li className="flex items-start gap-3 text-sm text-[#d6d3d1]">
<span className="iconify text-[#b8a88a] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>One handcrafted letter monthly</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#d6d3d1]">
<span className="iconify text-[#b8a88a] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Wax-sealed envelope</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#d6d3d1]">
<span className="iconify text-[#b8a88a] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Access to digital archive</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#d6d3d1]">
<span className="iconify text-[#b8a88a] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Cancel anytime</span>
</li>
</ul>
<button className="btn-pop w-full mt-auto">Start the Letters</button>
</div>

<div className="relative p-10 bg-[#422e1b] border border-[#d4af37]/40 rounded-sm flex flex-col items-center text-center shadow-[0_0_50px_-20px_rgba(212,175,55,0.15)] ring-1 ring-[#d4af37]/20 transition-transform duration-300 hover:-translate-y-1">

<div className="absolute -top-4 bg-[#d4af37] text-[#0c0a09] text-[10px] font-bold uppercase tracking-widest px-4 py-1.5 rounded-sm shadow-lg flex items-center gap-2">
<span className="iconify" data-icon="lucide:star" data-width="10"></span>
                        Most Chosen
                        <span className="iconify" data-icon="lucide:star" data-width="10"></span>
</div>
<span className="text-[#d4af37] text-[10px] font-bold uppercase tracking-[0.2em] mb-4 font-heading mt-2">The Warrior's Commitment</span>
<h3 className="font-heading text-4xl text-[#fff] mb-3">Annual</h3>
<div className="flex items-baseline justify-center gap-1 mb-2">
<span className="font-heading text-6xl text-[#fff]">$144</span>
<span className="text-[#dcd0b9] text-lg font-heading">/year</span>
</div>
<div className="inline-block bg-[#2a1d11]/50 border border-[#d4af37]/30 px-3 py-1 rounded text-[10px] font-bold uppercase tracking-widest text-[#d4af37] mb-4">
                        Save $36
                    </div>
<p className="text-[#dcd0b9] text-sm mb-10 font-serif italic max-w-xs">Commit to the full initiation. Twelve months of transformation.</p>
<ul className="space-y-4 mb-10 w-full text-left pl-6">
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Twelve handcrafted letters</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Premium wax-sealed packaging</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Exclusive collector's box</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Bonus: Founder's Letter</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Digital archive access</span>
</li>
<li className="flex items-start gap-3 text-sm text-[#fff]">
<span className="iconify text-[#d4af37] mt-0.5 shrink-0" data-icon="lucide:check"></span>
<span>Priority correspondence</span>
</li>
</ul>
<button className="btn-pop w-full mt-auto bg-[#d4af37] hover:bg-[#ffe17d] border-none">Join the Vanguard</button>
</div>
</div>
<p className="text-center text-stone-600 text-xs mt-12">Secure payment via Stripe. Cancel anytime from your dashboard.</p>
</div>
</section>

<footer className="bg-[#0c0a09] pt-16 pb-8 border-t border-stone-900 relative" id="contact">

<div className="absolute inset-0 bg-[#b8a88a] opacity-[0.02] pointer-events-none"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-start gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-4 group cursor-default">
<span className="iconify text-[#b8a88a]" data-icon="lucide:feather" data-width="20"></span>
<span className="font-heading font-bold text-lg text-stone-300 uppercase">Letters of the Ages</span>
</div>
<p className="text-xs text-stone-600 max-w-xs leading-relaxed mb-4">
                        Forging men through myth, memory, and the written word.
                    </p>
<a className="text-xs font-bold text-[#b8a88a] hover:text-white transition-colors flex items-center gap-2" href="mailto:contact@lettersoftheages.com">
<span className="iconify" data-icon="lucide:mail" data-width="14"></span>
                        Contact Comms
                    </a>
</div>
<div className="flex gap-16">
<div>
<h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Sectors</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-600 hover:text-[#b8a88a] transition-colors" href="#letters">The Letters</a></li>
<li><a className="text-xs text-stone-600 hover:text-[#b8a88a] transition-colors" href="#how-it-works">How It Works</a></li>
<li><a className="text-xs text-stone-600 hover:text-[#b8a88a] transition-colors" href="#membership">Membership</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold text-stone-400 uppercase tracking-widest mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="text-xs text-stone-600 hover:text-[#b8a88a] transition-colors" href="#">Privacy</a></li>
<li><a className="text-xs text-stone-600 hover:text-[#b8a88a] transition-colors" href="#">Terms</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-stone-800">
<div className="flex items-center gap-4">
<span className="text-[10px] font-bold uppercase tracking-widest text-stone-700 border border-stone-800 px-2 py-1 rounded">Est. MMXXV</span>
<p className="text-[10px] text-stone-600">© 2025 Letters of the Ages. All rights reserved.</p>
</div>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="text-stone-600 hover:text-[#b8a88a] transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="16"></span></a>
<a className="text-stone-600 hover:text-[#b8a88a] transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
