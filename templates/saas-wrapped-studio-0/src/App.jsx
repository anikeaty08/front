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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['SF Mono', 'Monaco', 'Menlo', 'monospace'],
},
animation: {
'blob': 'blob 7s infinite',
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



        // Init Icons
        lucide.createIcons();

        // Constants
        const root = document.documentElement;
        const totalSlides = 5;
        let currentSlide = 1;

        // Elements
        const slides = document.querySelectorAll('.slide');
        const progressBars = [];
        for(let i=1; i<=5; i++) progressBars.push(document.getElementById(`prog-${i}`));
        
        // Inputs
        const inputs = {
            company: document.getElementById('input-company'),
            users: document.getElementById('input-users'),
            growth: document.getElementById('input-growth'),
            highlight: document.getElementById('input-highlight'),
            color: document.getElementById('brand-color-picker'),
            logo: document.getElementById('logo-upload')
        };

        // Outputs
        const outputs = {
            company: document.getElementById('preview-company'),
            users: document.getElementById('preview-users'),
            summaryUsers: document.getElementById('summary-users'),
            growth: document.getElementById('preview-growth'),
            summaryGrowth: document.getElementById('summary-growth'),
            highlight: document.getElementById('preview-highlight')
        };

        // --- NAVIGATION ---
        function updateSlides() {
            // Hide all
            slides.forEach(s => {
                s.classList.add('hidden');
                s.classList.remove('slide-enter');
            });

            // Show current
            const active = document.getElementById(`slide-${currentSlide}`);
            active.classList.remove('hidden');
            active.classList.add('slide-enter');

            // Update Progress
            progressBars.forEach((bar, idx) => {
                if (idx + 1 < currentSlide) {
                    bar.style.width = '100%';
                    bar.style.opacity = '0.5';
                } else if (idx + 1 === currentSlide) {
                    bar.style.width = '100%';
                    bar.style.opacity = '1';
                } else {
                    bar.style.width = '0%';
                }
            });
            
            document.getElementById('slide-counter').textContent = `${currentSlide} / ${totalSlides}`;
        }

        document.getElementById('next-btn').addEventListener('click', () => {
            if(currentSlide < totalSlides) { currentSlide++; updateSlides(); }
        });
        document.getElementById('prev-btn').addEventListener('click', () => {
            if(currentSlide > 1) { currentSlide--; updateSlides(); }
        });

        // --- LIVE DATA UPDATES ---
        inputs.company.addEventListener('input', (e) => {
            outputs.company.textContent = e.target.value || 'Acme Corp';
            document.getElementById('avatar-initial').textContent = (e.target.value || 'A').charAt(0).toUpperCase();
        });
        
        inputs.users.addEventListener('input', (e) => {
            const val = e.target.value ? (e.target.value >= 1000 ? (e.target.value/1000).toFixed(1) + 'k' : e.target.value) : '0';
            outputs.users.textContent = val;
            outputs.summaryUsers.textContent = val;
        });

        inputs.growth.addEventListener('input', (e) => {
            const val = (e.target.value || '0') + '%';
            outputs.growth.textContent = val;
            outputs.summaryGrowth.textContent = val;
        });

        inputs.highlight.addEventListener('input', (e) => {
            outputs.highlight.textContent = `"${e.target.value || '...'}"`;
        });

        // --- COLOR SYSTEM ---
        function updateColor(hex) {
            inputs.color.value = hex;
            document.getElementById('color-hex-text').textContent = hex;
            document.getElementById('color-preview-dot').style.backgroundColor = hex;
            
            // Set CSS Variable
            root.style.setProperty('--brand-color', hex);
            
            // Calculate Dim Version for gradients
            // Simple hex to rgba approximation for simplicity
            const r = parseInt(hex.slice(1, 3), 16);
            const g = parseInt(hex.slice(3, 5), 16);
            const b = parseInt(hex.slice(5, 7), 16);
            root.style.setProperty('--brand-color-dim', `rgba(${r},${g},${b},0.15)`);
        }

        inputs.color.addEventListener('input', (e) => updateColor(e.target.value));

        function setPreset(color) {
            updateColor(color);
        }

        // --- LOGO UPLOAD ---
        const dropZone = document.getElementById('drop-zone');
        
        inputs.logo.addEventListener('change', handleFile);

        function handleFile(e) {
            const file = e.target.files[0];
            if (file) {
                const reader = new FileReader();
                reader.onload = function(e) {
                    // Update Left Panel Thumb
                    const thumb = document.getElementById('logo-preview-thumb');
                    thumb.src = e.target.result;
                    thumb.classList.remove('opacity-0');
                    document.getElementById('upload-placeholder').classList.add('opacity-0');
                    dropZone.style.borderColor = 'var(--brand-color)';

                    // Update Phone Preview
                    const displayLogo = document.getElementById('display-logo');
                    displayLogo.src = e.target.result;
                    displayLogo.classList.remove('hidden');
                    document.getElementById('display-icon').classList.add('hidden');

                    // Update Mini Avatar in Slide 4
                    const miniAvatar = document.getElementById('avatar-preview-mini');
                    miniAvatar.src = e.target.result;
                    miniAvatar.classList.remove('hidden');
                    document.getElementById('avatar-initial').classList.add('hidden');
                }
                reader.readAsDataURL(file);
            }
        }

        // --- ICON SELECTOR ---
        function setIcon(iconName) {
            // Update UI buttons
            document.querySelectorAll('.icon-btn').forEach(btn => {
                btn.classList.remove('bg-white/5', 'text-white', 'border-white/10');
                btn.classList.add('border-transparent', 'text-neutral-400');
                if(btn.innerHTML.includes(iconName)) {
                    btn.classList.add('bg-white/5', 'text-white', 'border-white/10');
                    btn.classList.remove('border-transparent', 'text-neutral-400');
                }
            });

            // Update Phone Icon (if no logo uploaded)
            if(document.getElementById('display-logo').classList.contains('hidden')) {
                const iconEl = document.getElementById('display-icon');
                // We need to fetch the SVG string from Lucide
                // Simple hack: recreate the i tag and run createIcons
                iconEl.setAttribute('data-lucide', iconName);
                lucide.createIcons();
            } else {
                // If logo is present, we might want to let user switch back? 
                // For now, let's hide logo and show icon to indicate selection worked
                document.getElementById('display-logo').classList.add('hidden');
                document.getElementById('display-icon').classList.remove('hidden');
                document.getElementById('display-icon').setAttribute('data-lucide', iconName);
                lucide.createIcons();
                
                // Reset upload thumbnail visual state slightly to indicate override
                document.getElementById('logo-preview-thumb').classList.add('opacity-0');
                document.getElementById('upload-placeholder').classList.remove('opacity-0');
            }
        }

        // --- VIBE SELECTOR ---
        function setVibe(vibeClass) {
            const screen = document.getElementById('phone-screen');
            screen.classList.remove('vibe-mesh', 'vibe-grid', 'vibe-solid');
            screen.classList.add(vibeClass);
            
            document.querySelectorAll('.vibe-btn').forEach(btn => {
                btn.classList.remove('border-brand', 'bg-white/5', 'text-white');
                btn.classList.add('border-white/10', 'text-neutral-400');
                if(btn.getAttribute('onclick').includes(vibeClass)) {
                    btn.classList.add('border-brand', 'bg-white/5', 'text-white');
                    btn.classList.remove('border-white/10', 'text-neutral-400');
                }
            });
        }

        // Initial render
        updateSlides();

    
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
      

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] rounded-full bg-white/5 blur-[100px] opacity-20"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[500px] h-[500px] rounded-full bg-brand blur-[100px] opacity-10" id="ambient-glow"></div>
</div>

<nav className="sticky top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-[1600px] mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-white/10 to-transparent border border-white/10 flex items-center justify-center">
<i className="w-4 h-4 text-brand" data-lucide="layers"></i>
</div>
<span className="text-sm font-semibold tracking-tight text-white">Wrapped Studio <span className="text-neutral-500 font-normal">by Dzyen</span></span>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-2 text-[10px] font-medium uppercase tracking-wider text-neutral-500 bg-white/5 px-3 py-1.5 rounded-full border border-white/5">
<div className="w-1.5 h-1.5 rounded-full bg-brand animate-pulse"></div>
                    Editor Active
                </div>
<button className="bg-white text-black hover:bg-neutral-200 transition-colors px-4 py-2 rounded-lg text-xs font-semibold tracking-wide">
                    Export Assets
                </button>
</div>
</div>
</nav>

<main className="flex-grow flex flex-col lg:flex-row h-[calc(100vh-64px)] overflow-hidden relative z-10">

<section className="w-full lg:w-[400px] xl:w-[450px] glass-panel flex flex-col h-full z-20">

<div className="flex border-b border-white/5">
<button className="flex-1 py-4 text-xs font-medium uppercase tracking-widest text-white border-b-2 border-brand bg-white/5">Identity</button>
<button className="flex-1 py-4 text-xs font-medium uppercase tracking-widest text-neutral-500 hover:text-white transition-colors">Data</button>
</div>

<div className="flex-1 overflow-y-auto custom-scrollbar p-6 space-y-8">

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">Brand Visuals</h3>
<span className="text-[10px] text-neutral-500 bg-white/5 px-2 py-0.5 rounded">Required</span>
</div>

<div className="group relative">
<label className="block text-xs text-neutral-500 mb-2">Company Logo</label>
<div className="relative w-full h-24 border border-dashed border-white/10 rounded-xl hover:border-brand hover:bg-white/5 transition-all flex flex-col items-center justify-center cursor-pointer overflow-hidden" id="drop-zone">
<input accept="image/*" className="absolute inset-0 w-full h-full opacity-0 cursor-pointer z-20" id="logo-upload" type="file"/>
<div className="text-center z-10 pointer-events-none transition-opacity duration-300" id="upload-placeholder">
<i className="w-5 h-5 text-neutral-400 mx-auto mb-2" data-lucide="upload-cloud"></i>
<span className="text-xs text-neutral-500">Drop logo or click to upload</span>
</div>
<img className="absolute inset-0 w-full h-full object-contain p-4 opacity-0 transition-opacity duration-300 z-10 pointer-events-none" id="logo-preview-thumb" src=""/>
</div>
</div>

<div>
<label className="block text-xs text-neutral-500 mb-2">Primary Brand Color</label>
<div className="flex gap-3">
<div className="color-input-wrapper border border-white/10 hover:border-white/30 transition-colors">
<input id="brand-color-picker" type="color" value="#d4ff00"/>
<div className="absolute inset-0 pointer-events-none flex items-center justify-center gap-2 bg-[#111]">
<div className="w-4 h-4 rounded-full bg-[#d4ff00] shadow-[0_0_10px_rgba(212,255,0,0.3)]" id="color-preview-dot"></div>
<span className="text-xs font-mono text-neutral-300 uppercase" id="color-hex-text">#d4ff00</span>
</div>
</div>
</div>
<div className="flex gap-2 mt-3">
<button className="w-6 h-6 rounded-full bg-[#d4ff00] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#d4ff00')"></button>
<button className="w-6 h-6 rounded-full bg-[#3b82f6] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#3b82f6')"></button>
<button className="w-6 h-6 rounded-full bg-[#ec4899] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#ec4899')"></button>
<button className="w-6 h-6 rounded-full bg-[#f97316] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#f97316')"></button>
<button className="w-6 h-6 rounded-full bg-[#10b981] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#10b981')"></button>
<button className="w-6 h-6 rounded-full bg-[#8b5cf6] ring-1 ring-white/10 hover:scale-110 transition-transform" onclick="setPreset('#8b5cf6')"></button>
</div>
</div>

<div>
<label className="block text-xs text-neutral-500 mb-2">Brand Iconography</label>
<div className="grid grid-cols-5 gap-2">
<button className="icon-btn active p-2.5 rounded-lg border border-white/10 bg-white/5 hover:bg-white/10 text-white flex items-center justify-center transition-all" onclick="setIcon('zap')">
<i className="w-4 h-4" data-lucide="zap"></i>
</button>
<button className="icon-btn p-2.5 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all" onclick="setIcon('rocket')">
<i className="w-4 h-4" data-lucide="rocket"></i>
</button>
<button className="icon-btn p-2.5 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all" onclick="setIcon('globe')">
<i className="w-4 h-4" data-lucide="globe"></i>
</button>
<button className="icon-btn p-2.5 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all" onclick="setIcon('sparkles')">
<i className="w-4 h-4" data-lucide="sparkles"></i>
</button>
<button className="icon-btn p-2.5 rounded-lg border border-transparent hover:bg-white/5 text-neutral-400 hover:text-white flex items-center justify-center transition-all" onclick="setIcon('box')">
<i className="w-4 h-4" data-lucide="box"></i>
</button>
</div>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>

<div className="space-y-6">
<div className="flex items-center justify-between">
<h3 className="text-sm font-medium text-white">2025 Metrics</h3>
</div>
<div className="space-y-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">Company Name</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none transition-colors placeholder-neutral-700" id="input-company" type="text" value="Acme Corp"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">New Users</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none transition-colors font-mono" id="input-users" type="number" value="12500"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">MRR Growth %</label>
<input className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none transition-colors font-mono" id="input-growth" type="number" value="214"/>
</div>
</div>
<div>
<label className="block text-[10px] uppercase tracking-wider text-neutral-500 mb-1">The Highlight</label>
<textarea className="w-full bg-black border border-white/10 rounded-lg px-3 py-2 text-sm text-white focus:border-brand focus:outline-none transition-colors resize-none placeholder-neutral-700" id="input-highlight" maxlength="80" rows="3">Shipped v2.0 and hit #1 on Product Hunt.</textarea>
<div className="text-right text-[10px] text-neutral-600 mt-1">Max 80 chars</div>
</div>
</div>
</div>

<div className="space-y-4 pt-2">
<label className="block text-xs text-neutral-500">Preview Background</label>
<div className="grid grid-cols-3 gap-2">
<button className="vibe-btn active border border-brand bg-white/5 rounded-lg py-2 text-[10px] text-white uppercase tracking-wider" onclick="setVibe('vibe-mesh')">Mesh</button>
<button className="vibe-btn border border-white/10 hover:bg-white/5 rounded-lg py-2 text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider" onclick="setVibe('vibe-grid')">Grid</button>
<button className="vibe-btn border border-white/10 hover:bg-white/5 rounded-lg py-2 text-[10px] text-neutral-400 hover:text-white uppercase tracking-wider" onclick="setVibe('vibe-solid')">Solid</button>
</div>
</div>
</div>
</section>

<section className="flex-grow bg-[#050505] relative flex items-center justify-center p-8 overflow-hidden">

<div className="absolute inset-0 opacity-20 bg-[radial-gradient(#ffffff1a_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="relative flex flex-col items-center gap-8 w-full max-w-md z-10">

<div className="relative w-[340px] h-[680px] bg-black rounded-[45px] border-[8px] border-[#1a1a1a] ring-1 ring-white/10 shadow-[0_0_50px_-10px_rgba(0,0,0,0.5)] overflow-hidden transform transition-all duration-500 ease-out hover:scale-[1.02]" id="phone-container">

<div className="absolute -inset-[1px] rounded-[45px] bg-brand opacity-20 blur-xl -z-10 transition-colors duration-500"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-7 w-32 bg-[#1a1a1a] rounded-b-2xl z-50"></div>

<div className="w-full h-full relative bg-[#0a0a0a] vibe-mesh transition-all duration-500" id="phone-screen">

<div className="slide absolute inset-0 flex flex-col items-center justify-center p-8 text-center" id="slide-1">

<div className="relative mb-10 group">
<div className="absolute inset-0 bg-brand blur-[40px] opacity-20 rounded-full animate-blob"></div>
<div className="w-28 h-28 rounded-3xl bg-black/40 backdrop-blur-md border border-white/10 flex items-center justify-center relative z-10 shadow-2xl overflow-hidden ring-1 ring-white/5">
<img className="w-full h-full object-cover hidden" id="display-logo" src=""/>
<i className="w-12 h-12 text-brand transition-colors duration-300" data-lucide="zap" id="display-icon"></i>
</div>
</div>
<h1 className="text-3xl font-bold text-white tracking-tight mb-2" id="preview-company">Acme Corp</h1>
<div className="flex items-center gap-2 mb-8">
<span className="h-px w-8 bg-brand opacity-50"></span>
<span className="text-xs font-mono text-brand uppercase tracking-[0.2em]">Wrapped 2025</span>
<span className="h-px w-8 bg-brand opacity-50"></span>
</div>
<p className="text-neutral-400 text-sm max-w-[200px] leading-relaxed">Your year in review, visualized.</p>
</div>

<div className="slide hidden absolute inset-0 flex flex-col p-8" id="slide-2">
<div className="mt-16 flex-1">
<div className="w-12 h-12 rounded-full bg-brand/10 flex items-center justify-center mb-6 border border-brand/20">
<i className="w-5 h-5 text-brand" data-lucide="users"></i>
</div>
<h2 className="text-sm font-medium text-neutral-400 uppercase tracking-widest mb-2">Total Users</h2>
<div className="text-6xl font-bold text-white tracking-tighter mb-4" id="preview-users">12.5k</div>
<p className="text-lg text-white/80 font-light leading-snug">People trusted your platform to get things done.</p>
</div>
<div className="h-32 bg-gradient-to-t from-black via-black/80 to-transparent absolute bottom-0 left-0 w-full z-10"></div>
<div className="absolute bottom-0 left-0 w-full p-8 z-20 border-t border-white/5 bg-black/40 backdrop-blur-md">
<div className="flex justify-between items-center text-xs">
<span className="text-neutral-500">2024 vs 2025</span>
<span className="text-brand font-mono">+124%</span>
</div>
</div>
</div>

<div className="slide hidden absolute inset-0 flex flex-col p-8 bg-brand text-black transition-colors duration-500" id="slide-3">

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay"></div>
<div className="relative z-10 flex flex-col h-full justify-between pt-12 pb-8">
<div>
<div className="flex items-center gap-2 mb-2 opacity-60">
<i className="w-4 h-4" data-lucide="trending-up"></i>
<span className="text-xs font-bold uppercase tracking-widest">Growth</span>
</div>
<h2 className="text-[5rem] font-bold leading-none tracking-tighter mb-2" id="preview-growth">214%</h2>
<p className="text-xl font-medium opacity-80">Increase in MRR</p>
</div>
<div className="space-y-4">
<div className="w-full h-48 bg-black/10 rounded-2xl p-4 flex items-end gap-2 relative overflow-hidden">

<div className="w-1/6 bg-black/20 h-[30%] rounded-t-sm"></div>
<div className="w-1/6 bg-black/20 h-[45%] rounded-t-sm"></div>
<div className="w-1/6 bg-black/20 h-[40%] rounded-t-sm"></div>
<div className="w-1/6 bg-black/30 h-[60%] rounded-t-sm"></div>
<div className="w-1/6 bg-black/40 h-[75%] rounded-t-sm"></div>
<div className="w-1/6 bg-black h-[90%] rounded-t-sm relative shadow-xl">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-black text-white text-[10px] font-bold py-1 px-2 rounded">NOW</div>
</div>
</div>
<p className="text-xs font-medium opacity-60 text-center uppercase tracking-wider">Monthly Recurring Revenue</p>
</div>
</div>
</div>

<div className="slide hidden absolute inset-0 flex flex-col justify-center p-10 bg-[#080808]" id="slide-4">
<div className="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent opacity-50 transition-colors duration-500"></div>
<div className="relative z-10">
<div className="w-10 h-10 mb-6 text-brand">
<i className="w-8 h-8 fill-current opacity-50" data-lucide="quote"></i>
</div>
<h2 className="text-2xl md:text-3xl font-medium text-white leading-relaxed tracking-tight" id="preview-highlight">
                                    "Shipped v2.0 and hit #1 on Product Hunt."
                                </h2>
<div className="mt-8 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center text-xs text-white overflow-hidden">
<img className="w-full h-full object-cover hidden" id="avatar-preview-mini" src=""/>
<span className="font-bold" id="avatar-initial">A</span>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-white uppercase tracking-wider">The Highlight</span>
<span className="text-[10px] text-neutral-500 font-mono">2025 MILESTONE</span>
</div>
</div>
</div>
</div>

<div className="slide hidden absolute inset-0 flex flex-col items-center justify-center p-8 bg-black" id="slide-5">
<div className="absolute inset-0 bg-brand/10 blur-[60px] transition-colors duration-500"></div>
<div className="relative z-10 w-full bg-neutral-900/50 backdrop-blur-xl border border-white/10 p-6 rounded-2xl shadow-2xl rotate-1 hover:rotate-0 transition-transform duration-300 group cursor-default">
<div className="flex justify-between items-start mb-8">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-brand flex items-center justify-center text-black">
<i className="w-3 h-3" data-lucide="layers"></i>
</div>
<span className="text-xs font-bold text-white tracking-widest uppercase">Wrapped</span>
</div>
<span className="text-[10px] text-neutral-500 font-mono">2025</span>
</div>
<div className="space-y-4 mb-6">
<div className="flex justify-between items-end border-b border-white/5 pb-2">
<span className="text-xs text-neutral-400">Users</span>
<span className="text-lg font-mono text-white" id="summary-users">12.5k</span>
</div>
<div className="flex justify-between items-end border-b border-white/5 pb-2">
<span className="text-xs text-neutral-400">Growth</span>
<span className="text-lg font-mono text-brand" id="summary-growth">214%</span>
</div>
</div>
<div className="flex items-center gap-2 text-[10px] text-neutral-500">
<i className="w-3 h-3 text-brand" data-lucide="check-circle-2"></i>
                                    Verified 2025 Statistics
                                </div>
</div>
<button className="mt-8 bg-white hover:bg-neutral-200 text-black font-semibold py-3 px-6 rounded-full w-full max-w-[200px] transition-all transform hover:scale-105 active:scale-95 flex items-center justify-center gap-2 relative z-10 shadow-[0_0_20px_rgba(255,255,255,0.2)]">
                                Share <i className="w-4 h-4" data-lucide="share-2"></i>
</button>
</div>

<div className="absolute top-3 left-4 right-4 flex gap-1.5 z-50">
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden"><div className="h-full bg-white w-full transition-all duration-300" id="prog-1"></div></div>
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden"><div className="h-full bg-white w-0 transition-all duration-300" id="prog-2"></div></div>
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden"><div className="h-full bg-white w-0 transition-all duration-300" id="prog-3"></div></div>
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden"><div className="h-full bg-white w-0 transition-all duration-300" id="prog-4"></div></div>
<div className="h-1 bg-white/20 rounded-full flex-1 overflow-hidden"><div className="h-full bg-white w-0 transition-all duration-300" id="prog-5"></div></div>
</div>
</div>
</div>

<div className="flex items-center gap-4 bg-black/50 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
<button className="text-neutral-400 hover:text-white transition-colors p-1" id="prev-btn"><i className="w-5 h-5" data-lucide="chevron-left"></i></button>
<span className="text-xs font-mono text-neutral-500 w-12 text-center" id="slide-counter">1 / 5</span>
<button className="text-white hover:text-brand transition-colors p-1" id="next-btn"><i className="w-5 h-5" data-lucide="chevron-right"></i></button>
</div>
</div>
</section>
</main>


    </>
  );
}
