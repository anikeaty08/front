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



        // Data Models
        const data = {
            fintech: {
                mission: "To decentralize financial complexity by building transparent infrastructures that empower the next generation of global creators.",
                vision: "A world where value transfer is as frictionless as information exchange, removing barriers and fostering a borderless economy.",
                headline: "The Future of Finance"
            },
            health: {
                mission: "To extend human potential through accessible, data-driven biological interfaces and advanced diagnostics.",
                vision: "A future where healthcare is proactive, personalized, and universally accessible through intelligent technology.",
                headline: "Redefining Wellness"
            },
            saas: {
                mission: "To streamline global workflows, allowing teams to focus on creativity while we handle the complexity of scale.",
                vision: "Every company, regardless of size, running on an intelligent operating system that learns and adapts.",
                headline: "Workflow Evolved"
            },
            fashion: {
                mission: "To merge sustainable aesthetics with digital utility, creating a new paradigm for modern expression.",
                vision: "A culture where style meets substance, ensuring every piece tells a story of ethical craftsmanship.",
                headline: "Wear the Future"
            }
        };

        const vibes = {
            modern: {
                font: "Inter",
                colors: [
                    { name: "Canvas White", hex: "#F4F4F5" },
                    { name: "Electric Indigo", hex: "#4F46E5" },
                    { name: "Obsidian", hex: "#18181B" },
                    { name: "Signal Green", hex: "#10B981" }
                ],
                logoShape: "path", // Simplified logic for demo
                textColor: "text-indigo-400"
            },
            playful: {
                font: "Poppins",
                colors: [
                    { name: "Cream", hex: "#FFFBEB" },
                    { name: "Berry Pop", hex: "#EC4899" },
                    { name: "Deep Purple", hex: "#5B21B6" },
                    { name: "Sunshine", hex: "#F59E0B" }
                ],
                textColor: "text-pink-400"
            },
            luxury: {
                font: "Playfair Display",
                colors: [
                    { name: "Pearl", hex: "#FAFAF9" },
                    { name: "Gold Leaf", hex: "#CA8A04" },
                    { name: "Charcoal", hex: "#1C1917" },
                    { name: "Slate", hex: "#44403C" }
                ],
                textColor: "text-amber-500"
            },
            minimal: {
                font: "Roboto Mono",
                colors: [
                    { name: "Pure White", hex: "#FFFFFF" },
                    { name: "Stone", hex: "#57534E" },
                    { name: "Black", hex: "#000000" },
                    { name: "Mist", hex: "#E5E5E5" }
                ],
                textColor: "text-zinc-500"
            }
        };

        let currentVibe = 'modern';
        let currentScale = 1.0;

        // Elements
        const brandInput = document.getElementById('brand-name-input');
        const previewName = document.getElementById('preview-brand-name');
        const previewBodyName = document.querySelector('.brand-name-text');
        const industrySelect = document.getElementById('industry-select');
        const frame = document.getElementById('preview-frame');
        
        // Live Type Listeners
        brandInput.addEventListener('keyup', (e) => {
            const val = e.target.value || 'Untitled';
            previewName.innerText = val;
            previewBodyName.innerText = val;
        });

        // Vibe Selection
        function selectVibe(btn, vibe) {
            // UI Update
            document.querySelectorAll('.vibe-btn').forEach(b => {
                b.classList.remove('bg-indigo-500/10', 'border-indigo-500/50', 'text-indigo-200');
                b.classList.add('bg-zinc-900/50', 'border-zinc-800', 'text-zinc-500');
            });
            btn.classList.remove('bg-zinc-900/50', 'border-zinc-800', 'text-zinc-500');
            btn.classList.add('bg-indigo-500/10', 'border-indigo-500/50', 'text-indigo-200');
            
            currentVibe = vibe;
        }

        // Regenerate Function
        function regenerateBrand() {
            const btn = document.getElementById('regenerate-btn');
            const icon = document.getElementById('btn-icon');
            const text = document.getElementById('btn-text');
            const statusDot = document.getElementById('status-dot');
            const statusText = document.getElementById('status-text');

            // Loading State
            btn.disabled = true;
            text.innerText = "Generating...";
            icon.setAttribute('data-icon', 'lucide:loader-2');
            icon.classList.add('animate-spin');
            
            statusDot.classList.replace('bg-emerald-500', 'bg-amber-500');
            statusText.innerText = "Processing...";

            // Simulate Network Delay
            setTimeout(() => {
                applyChanges();
                
                // Reset State
                btn.disabled = false;
                text.innerText = "Regenerate Brand";
                icon.setAttribute('data-icon', 'lucide:sparkles');
                icon.classList.remove('animate-spin');
                
                statusDot.classList.replace('bg-amber-500', 'bg-emerald-500');
                statusText.innerText = "System Active";
                
                // Flash effect
                frame.classList.add('animate-pulse');
                setTimeout(() => frame.classList.remove('animate-pulse'), 500);

            }, 1200);
        }

        function applyChanges() {
            const industry = industrySelect.value;
            const content = data[industry];
            const style = vibes[currentVibe];

            // 1. Update Content
            document.getElementById('preview-mission').innerHTML = content.mission.replace('transparent', `<span class="${style.textColor}">transparent</span>`);
            document.getElementById('preview-vision').innerText = content.vision;
            document.getElementById('preview-headline').innerText = content.headline;
            
            // 2. Update Colors
            style.colors.forEach((col, idx) => {
                const i = idx + 1;
                document.getElementById(`swatch-${i}`).style.backgroundColor = col.hex;
                document.getElementById(`swatch-name-${i}`).innerText = col.name;
                document.getElementById(`swatch-hex-${i}`).innerText = col.hex;
                
                // Specific update for the logo box color
                if(i === 1) document.getElementById('logo-container').style.backgroundColor = col.hex;
            });

            // 3. Update Fonts & Styling
            document.getElementById('font-name').innerText = style.font;
            
            // Update highlight colors in text
            document.querySelectorAll('.highlight-text').forEach(el => {
                el.className = `text-[10px] ${style.textColor} font-medium flex items-center gap-1 hover:opacity-80 mt-2 highlight-text`;
            });
            document.querySelectorAll('.highlight-color').forEach(el => {
                el.className = `${style.textColor} highlight-color`;
            });

            // 4. Update Logo Style (Rotation & Color)
            const logo = document.getElementById('brand-logo');
            logo.style.transform = `rotate(${Math.floor(Math.random() * 4) * 90}deg)`;
            logo.querySelectorAll('path').forEach(p => {
                p.setAttribute('stroke', style.colors[2].hex); // Set to "Obsidian" equivalent
            });
        }

        // Zoom Logic
        function updateZoom(delta) {
            currentScale += delta;
            if(currentScale < 0.5) currentScale = 0.5;
            if(currentScale > 2.0) currentScale = 2.0;
            
            const wrapper = document.getElementById('preview-frame');
            wrapper.style.transform = `scale(${currentScale})`;
            document.getElementById('zoom-value').innerText = `${Math.round(currentScale * 100)}%`;
            document.getElementById('zoom-level-display').innerText = `${Math.round(currentScale * 100)}%`;
        }

        // Initialize first state
        // (Optional: can run applyChanges() here if we want to sync on load, 
        // but default HTML matches default JS state mostly)
    
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
      

<header className="h-14 border-b border-white/10 flex items-center justify-between px-4 bg-zinc-950/80 backdrop-blur-md z-50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-purple-600 rounded-lg flex items-center justify-center shadow-lg shadow-indigo-500/20">
<span className="iconify text-white" data-icon="lucide:sparkles" data-width="16" style={{strokeWidth: '1.5'}}></span>
</div>
<span className="text-zinc-100 font-medium tracking-tight text-sm">BrandGen.ai</span>
<span className="mx-2 text-zinc-700 text-xs">/</span>
<span className="text-zinc-400 text-sm hover:text-zinc-200 cursor-pointer transition-colors">Untitled Project</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1 px-2 py-1 bg-zinc-900 rounded-md border border-white/5" id="status-badge">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" id="status-dot"></span>
<span className="text-xs text-zinc-400 font-medium" id="status-text">System Active</span>
</div>
<button className="flex items-center gap-2 px-3 py-1.5 bg-zinc-100 text-zinc-950 rounded-md text-xs font-medium hover:bg-white transition-all shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="alert('Export functionality would generate a .fig file here.')">
<span className="iconify" data-icon="lucide:figma" data-width="14"></span>
                Export to Figma
            </button>
</div>
</header>
<main className="flex-1 flex overflow-hidden">

<aside className="w-96 border-r border-white/10 bg-zinc-950 flex flex-col overflow-y-auto z-20 shrink-0">
<div className="p-6 border-b border-white/5">
<h2 className="text-sm font-medium text-zinc-200 mb-1 tracking-tight">Project Context</h2>
<p className="text-xs text-zinc-500">Define the core parameters for the AI model.</p>
</div>
<div className="p-6 space-y-8">

<div className="space-y-3">
<div className="flex justify-between items-center">
<label className="text-xs font-medium text-zinc-300">References &amp; Assets</label>
<span className="text-[10px] text-zinc-600 uppercase tracking-wider font-semibold">Optional</span>
</div>
<div className="border border-dashed border-zinc-800 rounded-xl bg-zinc-900/30 hover:bg-zinc-900/50 hover:border-zinc-700 transition-all p-8 flex flex-col items-center justify-center gap-3 group cursor-pointer" onclick="document.getElementById('fileInput').click()">
<div className="w-10 h-10 rounded-full bg-zinc-900 border border-zinc-800 flex items-center justify-center group-hover:scale-110 transition-transform">
<span className="iconify text-zinc-500 group-hover:text-indigo-400 transition-colors" data-icon="lucide:upload-cloud" data-width="18" style={{strokeWidth: '1.5'}}></span>
</div>
<div className="text-center">
<p className="text-xs text-zinc-300 font-medium">Click to upload</p>
<p className="text-[10px] text-zinc-600 mt-1">PDF, PNG, JPG (Max 10MB)</p>
</div>
<input className="hidden" id="fileInput" onchange="alert('File uploaded to context window.')" type="file"/>
</div>
</div>

<div className="space-y-4">
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300">Brand Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 focus:ring-1 focus:ring-indigo-500/20 transition-all" id="brand-name-input" type="text" value="Novatrix"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300">Industry</label>
<div className="relative">
<select className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 appearance-none focus:outline-none focus:border-indigo-500/50 cursor-pointer" id="industry-select">
<option value="fintech">Fintech &amp; Blockchain</option>
<option value="health">Healthcare &amp; Biotech</option>
<option value="saas">SaaS &amp; Productivity</option>
<option value="fashion">Fashion &amp; Lifestyle</option>
</select>
<span className="absolute right-3 top-2.5 pointer-events-none">
<span className="iconify text-zinc-600" data-icon="lucide:chevron-down" data-width="12"></span>
</span>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-zinc-300">Core Values</label>
<textarea className="w-full bg-zinc-900/50 border border-zinc-800 rounded-lg px-3 py-2 text-xs text-zinc-100 placeholder-zinc-700 focus:outline-none focus:border-indigo-500/50 resize-none" id="values-input" rows="3">Innovation, Transparency, Speed, and User-Centric Design.</textarea>
</div>
<div className="space-y-3 pt-2">
<label className="text-xs font-medium text-zinc-300 block">Vibe &amp; Tone</label>
<div className="grid grid-cols-2 gap-2" id="vibe-container">
<button className="vibe-btn active flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-indigo-500/50 bg-indigo-500/10 text-indigo-200 text-xs font-medium transition-all" data-vibe="modern" onclick="selectVibe(this, 'modern')">
<span>Modern</span>
</button>
<button className="vibe-btn flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-xs hover:border-zinc-700 transition-all" data-vibe="playful" onclick="selectVibe(this, 'playful')">
<span>Playful</span>
</button>
<button className="vibe-btn flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-xs hover:border-zinc-700 transition-all" data-vibe="luxury" onclick="selectVibe(this, 'luxury')">
<span>Luxury</span>
</button>
<button className="vibe-btn flex items-center justify-center gap-2 px-3 py-2 rounded-lg border border-zinc-800 bg-zinc-900/50 text-zinc-500 text-xs hover:border-zinc-700 transition-all" data-vibe="minimal" onclick="selectVibe(this, 'minimal')">
<span>Minimal</span>
</button>
</div>
</div>
</div>
</div>
<div className="mt-auto p-6 border-t border-white/5 bg-zinc-950/50 backdrop-blur-sm sticky bottom-0">
<button className="w-full group relative flex items-center justify-center gap-2 bg-zinc-100 text-zinc-950 px-4 py-2.5 rounded-lg text-sm font-medium hover:bg-white transition-all overflow-hidden disabled:opacity-50 disabled:cursor-not-allowed" id="regenerate-btn" onclick="regenerateBrand()">
<div className="absolute inset-0 bg-gradient-to-r from-indigo-500 via-purple-500 to-indigo-500 opacity-0 group-hover:opacity-10 transition-opacity"></div>
<span className="iconify" data-icon="lucide:sparkles" data-width="16" id="btn-icon"></span>
<span id="btn-text">Regenerate Brand</span>
</button>
<div className="flex justify-between items-center mt-3 text-[10px] text-zinc-600">
<span>Model: Branding-v4.0</span>
<span id="credit-cost">Cost: ~45 credits</span>
</div>
</div>
</aside>

<section className="flex-1 bg-neutral-950 relative flex flex-col min-w-0 overflow-hidden">

<div className="absolute top-4 left-1/2 -translate-x-1/2 flex items-center gap-1 bg-zinc-900/90 border border-white/10 p-1 rounded-lg backdrop-blur shadow-xl z-30">
<button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-zinc-100"><span className="iconify" data-icon="lucide:mouse-pointer-2" data-width="16"></span></button>
<button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-zinc-100"><span className="iconify" data-icon="lucide:hand" data-width="16"></span></button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-zinc-100"><span className="iconify" data-icon="lucide:type" data-width="16"></span></button>
<button className="p-1.5 rounded hover:bg-white/10 text-zinc-400 hover:text-zinc-100"><span className="iconify" data-icon="lucide:layout-template" data-width="16"></span></button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<span className="text-[10px] text-zinc-500 font-mono px-2" id="zoom-level-display">100%</span>
</div>

<div className="absolute inset-0 grid-bg opacity-20 pointer-events-none"></div>

<div className="flex-1 overflow-auto p-12 lg:p-20 flex items-center justify-center transition-transform duration-200 ease-out origin-center" id="canvas-wrapper">

<div className="bg-zinc-950 border border-zinc-800 shadow-2xl shadow-black rounded-sm w-[896px] relative group transition-all duration-500" id="preview-frame">

<div className="absolute -top-6 left-0 text-xs text-zinc-500 font-medium group-hover:text-indigo-400 transition-colors">Brand Identity System 1.0</div>
<div className="p-12 space-y-12">

<div className="flex justify-between items-start border-b border-zinc-800 pb-10">
<div className="space-y-6">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Primary Logo</h3>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-zinc-100 rounded-lg flex items-center justify-center transition-colors duration-500" id="logo-container">
<svg className="transition-transform duration-500" fill="none" height="24" id="brand-logo" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L2 7L12 12L22 7L12 2Z" stroke="#09090b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 17L12 22L22 17" stroke="#09090b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
<path d="M2 12L12 17L22 12" stroke="#09090b" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<h1 className="text-4xl text-white font-semibold tracking-tighter transition-all" id="preview-brand-name">Novatrix</h1>
</div>
</div>
</div>
<div className="text-right">
<span className="inline-block px-2 py-1 rounded border border-emerald-500/20 bg-emerald-500/10 text-emerald-400 text-[10px] font-medium tracking-wide">APPROVED</span>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8">
<div className="space-y-3">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold flex items-center gap-2">
<span className="iconify" data-icon="lucide:target" data-width="12"></span> Mission
                                </h3>
<p className="text-lg text-zinc-200 font-light leading-relaxed" id="preview-mission">
                                    To decentralize financial complexity by building <span className="text-indigo-400 highlight-color">transparent</span> infrastructures that empower the next generation of global creators.
                                </p>
</div>
<div className="space-y-3">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold flex items-center gap-2">
<span className="iconify" data-icon="lucide:telescope" data-width="12"></span> Vision
                                </h3>
<p className="text-sm text-zinc-400 leading-relaxed" id="preview-vision">
                                    A world where value transfer is as frictionless as information exchange, removing barriers and fostering a borderless economy through secure technology.
                                </p>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Color System</h3>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">

<div className="space-y-2 group/color">
<div className="h-24 w-full rounded-lg bg-zinc-100 shadow-sm transition-colors duration-500 relative overflow-hidden" id="swatch-1"></div>
<div className="flex justify-between items-center text-[10px]">
<span className="text-zinc-300 font-medium" id="swatch-name-1">Canvas White</span>
<span className="text-zinc-500 font-mono" id="swatch-hex-1">#F4F4F5</span>
</div>
</div>

<div className="space-y-2 group/color">
<div className="h-24 w-full rounded-lg bg-indigo-600 shadow-lg shadow-indigo-900/20 transition-colors duration-500" id="swatch-2"></div>
<div className="flex justify-between items-center text-[10px]">
<span className="text-zinc-300 font-medium" id="swatch-name-2">Electric Indigo</span>
<span className="text-zinc-500 font-mono" id="swatch-hex-2">#4F46E5</span>
</div>
</div>

<div className="space-y-2 group/color">
<div className="h-24 w-full rounded-lg bg-zinc-900 border border-zinc-800 transition-colors duration-500" id="swatch-3"></div>
<div className="flex justify-between items-center text-[10px]">
<span className="text-zinc-300 font-medium" id="swatch-name-3">Obsidian</span>
<span className="text-zinc-500 font-mono" id="swatch-hex-3">#18181B</span>
</div>
</div>

<div className="space-y-2 group/color">
<div className="h-24 w-full rounded-lg bg-emerald-500/90 shadow-lg shadow-emerald-900/20 transition-colors duration-500" id="swatch-4"></div>
<div className="flex justify-between items-center text-[10px]">
<span className="text-zinc-300 font-medium" id="swatch-name-4">Signal Green</span>
<span className="text-zinc-500 font-mono" id="swatch-hex-4">#10B981</span>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-8 border-t border-zinc-800 pt-10">
<div className="space-y-4">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Primary Typeface</h3>
<div className="flex items-baseline justify-between border-b border-zinc-800 pb-2">
<span className="text-4xl text-zinc-100 font-medium tracking-tight font-sans" id="font-name">Inter</span>
<span className="text-xs text-zinc-500 font-mono">Variable</span>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-3xl font-semibold text-zinc-300">Aa</p>
<p className="text-[10px] text-zinc-500 mt-1">Semibold 600</p>
</div>
<div>
<p className="text-3xl font-normal text-zinc-300">Aa</p>
<p className="text-[10px] text-zinc-500 mt-1">Regular 400</p>
</div>
</div>
</div>
<div className="space-y-4">
<h3 className="text-[10px] uppercase tracking-widest text-zinc-500 font-semibold">Hierarchy Preview</h3>
<div className="space-y-3 p-4 bg-zinc-900/50 rounded-lg border border-zinc-800">
<h4 className="text-lg text-white font-medium tracking-tight" id="preview-headline">The Future of Finance</h4>
<p className="text-xs text-zinc-400 leading-relaxed" id="preview-body">
                                        We are building the rails for a new economy. Through cutting-edge cryptography and intuitive design, <span className="brand-name-text">Novatrix</span> simplifies the complex world of blockchain assets.
                                    </p>
<button className="text-[10px] text-indigo-400 highlight-text font-medium flex items-center gap-1 hover:text-indigo-300 mt-2">
                                        Read Documentation <span className="iconify" data-icon="lucide:arrow-right" data-width="10"></span>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-3 bg-zinc-950 border border-white/10 px-4 py-2 rounded-full shadow-2xl z-30">
<button className="text-zinc-400 hover:text-white transition-colors" onclick="updateZoom(-0.1)" title="Zoom Out">
<span className="iconify" data-icon="lucide:minus" data-width="14"></span>
</button>
<span className="text-xs text-zinc-500 font-mono w-8 text-center" id="zoom-value">100%</span>
<button className="text-zinc-400 hover:text-white transition-colors" onclick="updateZoom(0.1)" title="Zoom In">
<span className="iconify" data-icon="lucide:plus" data-width="14"></span>
</button>
</div>
</section>
</main>


    </>
  );
}
