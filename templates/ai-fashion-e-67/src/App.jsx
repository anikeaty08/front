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
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
zinc: {
850: '#1f2023', // Custom deep charcoal
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'shimmer': 'shimmer 2s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
shimmer: {
'from': { backgroundPosition: '0 0' },
'to': { backgroundPosition: '-200% 0' }
}
}
}
}
}



        // Scroll Animation Observer
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Design Studio Interactions
        const tshirtPath = document.getElementById('tshirt-path');
        const garmentContainer = document.getElementById('garment-container');
        
        function changeColor(color) {
            tshirtPath.style.fill = color;
            // Add a subtle bounce effect
            garmentContainer.style.transform = 'scale(0.98)';
            setTimeout(() => {
                garmentContainer.style.transform = 'scale(1)';
            }, 150);
        }

        // AI Generation Simulation
        function generateDesign() {
            const input = document.getElementById('ai-prompt');
            const loader = document.getElementById('ai-loader');
            const chatContainer = document.getElementById('chat-container');
            const overlay = document.getElementById('ai-overlay');
            
            if(!input.value) return;

            // 1. Show User Message
            const userMsg = document.createElement('div');
            userMsg.className = 'flex gap-3 flex-row-reverse';
            userMsg.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-zinc-900 flex items-center justify-center text-white shrink-0">
                    <iconify-icon icon="solar:user-linear" width="16"></iconify-icon>
                </div>
                <div class="bg-zinc-900 text-white p-3 rounded-2xl rounded-tr-none text-xs leading-relaxed">
                    ${input.value}
                </div>
            `;
            chatContainer.appendChild(userMsg);
            
            // 2. Show Loader
            loader.classList.remove('hidden');
            loader.classList.add('flex');
            
            // 3. Simulate API Delay
            setTimeout(() => {
                loader.classList.add('hidden');
                loader.classList.remove('flex');

                // 4. Show AI Response
                const aiMsg = document.createElement('div');
                aiMsg.className = 'flex gap-3';
                aiMsg.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
                        <iconify-icon icon="solar:smart-home-angle-linear" width="16"></iconify-icon>
                    </div>
                    <div class="bg-zinc-100 p-3 rounded-2xl rounded-tl-none text-xs text-zinc-600 leading-relaxed">
                        I've generated a unique pattern based on "${input.value}". Applying it to your garment now.
                    </div>
                `;
                chatContainer.appendChild(aiMsg);
                chatContainer.scrollTop = chatContainer.scrollHeight;

                // 5. Apply "Design" (Show hidden overlay)
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                    overlay.classList.add('opacity-80');
                }, 50);

                input.value = '';

            }, 2000);
        }

        // Enter key for AI
        document.getElementById('ai-prompt').addEventListener('keypress', function (e) {
            if (e.key === 'Enter') {
                generateDesign();
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
      

<nav className="fixed top-0 left-0 right-0 z-50 glass border-b border-zinc-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-12">
<a className="text-xl tracking-tighter font-semibold text-zinc-950 flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-zinc-950 rounded-full flex items-center justify-center text-white text-[10px]">A</span>
                    ATELIER.
                </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#studio">Studio</a>
<a className="hover:text-zinc-900 transition-colors" href="#collections">Collections</a>
<a className="hover:text-zinc-900 transition-colors" href="#ai-tech">AI Tech</a>
<a className="hover:text-zinc-900 transition-colors" href="#business">Business</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-zinc-900">
<iconify-icon icon="solar:user-linear" width="20"></iconify-icon>
<span>Sign In</span>
</button>
<button className="bg-zinc-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200">
<span>Cart</span>
<span className="w-4 h-4 bg-zinc-700 rounded-full flex items-center justify-center text-[10px]">0</span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-24 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-zinc-100 rounded-full blur-3xl opacity-50 -z-10 animate-pulse-slow"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-slate-100 rounded-full blur-3xl opacity-50 -z-10"></div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-zinc-50/50 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600 tracking-wide">AI-POWERED DESIGN ENGINE 2.0</span>
</div>
<h1 className="text-5xl lg:text-7xl font-medium tracking-tight text-zinc-950 leading-[1.1]">
                    Fabricating <br/>
<span className="text-zinc-400">Digital Dreams.</span>
</h1>
<p className="text-lg text-zinc-500 max-w-md leading-relaxed">
                    The world's first intelligent fashion studio. Generate bespoke prints, customize fabrics, and order premium garments instantly using generative AI.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="bg-zinc-950 text-white px-8 py-3.5 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 group" href="#studio">
                        Start Designing
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-3.5 rounded-xl text-sm font-medium text-zinc-600 border border-zinc-200 hover:bg-zinc-50 transition-all" href="#how-it-works">
                        Request Samples
                    </a>
</div>
<div className="pt-8 flex items-center gap-6 border-t border-zinc-100">
<div className="flex -space-x-3">
<img alt="user" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="user" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5"/>
<img alt="user" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=8"/>
</div>
<div>
<p className="text-xs font-semibold text-zinc-900">Trusted by 2,000+ Brands</p>
<div className="flex items-center gap-1 text-yellow-500 text-xs mt-0.5">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
</div>
</div>
</div>

<div className="relative h-[600px] w-full bg-zinc-50 rounded-3xl border border-zinc-100 overflow-hidden shadow-2xl shadow-zinc-200/50 reveal">

<div className="absolute inset-0 flex items-center justify-center">
<img alt="Fashion Model" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-8 left-8 right-8 p-4 bg-white/90 backdrop-blur-md rounded-2xl border border-white/50 shadow-lg animate-float">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-600 shrink-0">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<div className="flex-1">
<p className="text-xs font-semibold text-zinc-400 mb-1">AI GENERATOR</p>
<p className="text-sm font-medium text-zinc-900">"Silk summer dress with abstract botanical print in pastel sage and cream..."</p>
<div className="mt-3 flex gap-2">
<span className="h-1.5 w-16 bg-zinc-200 rounded-full overflow-hidden">
<div className="h-full bg-purple-500 w-[70%]"></div>
</span>
<span className="text-[10px] text-zinc-400">Processing...</span>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white relative" id="studio">
<div className="max-w-7xl mx-auto px-6 mb-12 flex flex-col md:flex-row justify-between items-end gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900 mb-4">Atelier Studio</h2>
<p className="text-zinc-500 max-w-lg">Customize your garment. Use AI to generate patterns or upload your brand logo. Real-time 3D visualization.</p>
</div>
<div className="flex gap-2 p-1 bg-zinc-100 rounded-lg">
<button className="px-4 py-2 text-xs font-medium bg-white shadow-sm rounded-md text-zinc-900 transition-all">Apparel</button>
<button className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-all">Fabrics</button>
<button className="px-4 py-2 text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-all">Bulk</button>
</div>
</div>

<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-0 border border-zinc-200 rounded-3xl overflow-hidden shadow-2xl shadow-zinc-200/40 h-auto lg:h-[700px]">

<div className="lg:col-span-3 bg-white border-r border-zinc-100 p-6 flex flex-col h-full">
<p className="text-xs font-semibold text-zinc-400 mb-6 uppercase tracking-wider">Configuration</p>
<div className="space-y-8 flex-1 overflow-y-auto pr-2">

<div className="space-y-3">
<label className="text-sm font-medium text-zinc-900">Garment Type</label>
<div className="grid grid-cols-2 gap-3">
<button className="p-3 border border-zinc-900 bg-zinc-900 text-white rounded-xl flex flex-col items-center justify-center gap-2 transition-all">
<iconify-icon icon="solar:t-shirt-linear" width="24"></iconify-icon>
<span className="text-xs">T-Shirt</span>
</button>
<button className="p-3 border border-zinc-200 text-zinc-500 rounded-xl flex flex-col items-center justify-center gap-2 hover:border-zinc-300 transition-all">
<iconify-icon icon="solar:hoodie-linear" width="24"></iconify-icon>
<span className="text-xs">Hoodie</span>
</button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-zinc-900">Base Color</label>
<div className="flex gap-3 flex-wrap">
<button className="w-8 h-8 rounded-full bg-white border border-zinc-200 shadow-sm focus:ring-2 ring-zinc-400 ring-offset-2" onclick="changeColor('#ffffff')"></button>
<button className="w-8 h-8 rounded-full bg-zinc-900 border border-zinc-900 focus:ring-2 ring-zinc-400 ring-offset-2" onclick="changeColor('#18181b')"></button>
<button className="w-8 h-8 rounded-full bg-amber-500 border border-amber-500 focus:ring-2 ring-zinc-400 ring-offset-2" onclick="changeColor('#f59e0b')"></button>
<button className="w-8 h-8 rounded-full bg-blue-500 border border-blue-500 focus:ring-2 ring-zinc-400 ring-offset-2" onclick="changeColor('#3b82f6')"></button>
<button className="w-8 h-8 rounded-full bg-pink-500 border border-pink-500 focus:ring-2 ring-zinc-400 ring-offset-2" onclick="changeColor('#ec4899')"></button>
</div>
</div>

<div className="space-y-3">
<label className="text-sm font-medium text-zinc-900">Branding</label>
<div className="border-2 border-dashed border-zinc-200 rounded-xl p-6 flex flex-col items-center justify-center text-center cursor-pointer hover:bg-zinc-50 transition-colors">
<iconify-icon className="text-zinc-400 mb-2" icon="solar:upload-linear" width="24"></iconify-icon>
<span className="text-xs text-zinc-500">Drop logo or artwork</span>
</div>
</div>
</div>
<div className="pt-6 border-t border-zinc-100">
<div className="flex justify-between items-center mb-4">
<span className="text-sm text-zinc-500">Estimated</span>
<span className="text-lg font-semibold text-zinc-900">$24.00</span>
</div>
<button className="w-full bg-zinc-900 text-white py-3 rounded-xl text-sm font-medium hover:bg-zinc-800 transition-colors">Add to Quote</button>
</div>
</div>

<div className="lg:col-span-6 bg-zinc-50 relative flex items-center justify-center overflow-hidden p-8">
<div className="absolute inset-0 grid grid-cols-[repeat(20,minmax(0,1fr))] grid-rows-[repeat(20,minmax(0,1fr))] opacity-[0.03] pointer-events-none">

<div className="col-span-20 row-span-20 border border-zinc-900"></div>
</div>

<div className="relative w-80 md:w-96 transition-all duration-500" id="garment-container">

<svg className="w-full h-full drop-shadow-2xl" viewbox="0 0 512 512" xmlns="http://www.w3.org/2000/svg">
<path d="M378.5,64.5c-15.6,22.4-40.4,26.6-58.9,26.6c-17.7,0-46.7-5.9-63.6-26.6l-20.3,0l-20.3,0 c-16.9,20.7-45.9,26.6-63.6,26.6c-18.5,0-43.3-4.1-58.9-26.6L16,114.8l63.5,74.5l0,258.2l176.5,0l176.5,0l0-258.2l63.5-74.5 L378.5,64.5z" fill="#ffffff" id="tshirt-path" stroke="#e4e4e7" strokeWidth="2"></path>

<rect fill="none" height="250" id="print-area" stroke="#e4e4e7" stroke-dasharray="5,5" width="200" x="156" y="160"></rect>

<g id="mock-logo" style={{display: 'none', transform: 'translate(220px, 200px)'}}>
<circle cx="36" cy="36" fill="#18181b" r="30"></circle>
<text fill="white" fontFamily="sans-serif" fontSize="14" font-weight="bold" text-anchor="middle" x="36" y="42">AI</text>
</g>
</svg>

<div className="absolute top-[160px] left-[156px] w-[200px] h-[250px] overflow-hidden hidden opacity-0 transition-opacity duration-500" id="ai-overlay">
<img alt="AI Print" className="w-full h-full object-cover mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1550684848-fac1c5b4e853?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="absolute bottom-6 flex gap-4">
<button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 tooltip" data-tip="Front View">
<iconify-icon icon="solar:refresh-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 bg-white rounded-full shadow-md flex items-center justify-center text-zinc-600 hover:text-zinc-900 tooltip" data-tip="Zoom">
<iconify-icon icon="solar:magnifer-zoom-in-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="lg:col-span-3 bg-white border-l border-zinc-100 flex flex-col h-full relative">
<div className="p-6 border-b border-zinc-100 bg-zinc-50/50">
<div className="flex items-center gap-2 mb-1">
<iconify-icon className="text-purple-600" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-sm font-semibold text-zinc-900">AI Designer</span>
</div>
<p className="text-xs text-zinc-500">Describe what you want, and I'll design the print.</p>
</div>
<div className="flex-1 p-6 overflow-y-auto space-y-4" id="chat-container">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 shrink-0">
<iconify-icon icon="solar:smart-home-angle-linear" width="16"></iconify-icon>
</div>
<div className="bg-zinc-100 p-3 rounded-2xl rounded-tl-none text-xs text-zinc-600 leading-relaxed">
                                Hello! I can generate custom patterns or suggest fabrics. Try typing "Japanese wave pattern in indigo".
                            </div>
</div>
</div>
<div className="p-4 border-t border-zinc-100">
<div className="relative">
<input className="w-full pl-4 pr-10 py-3 bg-zinc-50 border border-zinc-200 rounded-xl text-sm focus:outline-none focus:ring-1 focus:ring-zinc-900 focus:bg-white transition-all" id="ai-prompt" placeholder="Describe your design..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 bg-zinc-900 rounded-lg text-white hover:bg-zinc-700 transition-colors" onclick="generateDesign()">
<iconify-icon icon="solar:magic-stick-3-bold" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="absolute inset-0 bg-white/80 backdrop-blur-sm flex flex-col items-center justify-center z-10 hidden" id="ai-loader">
<div className="w-12 h-12 border-4 border-purple-100 border-t-purple-600 rounded-full animate-spin mb-4"></div>
<p className="text-xs font-medium text-purple-600 animate-pulse">Generating Masterpiece...</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-t border-zinc-200" id="ai-tech">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold text-purple-600 tracking-wider uppercase mb-2 block">Powered by Neural Networks</span>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-zinc-900">Automation meets Artistry.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:ruler-pen-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Smart Sizing AI</h3>
<p className="text-sm text-zinc-500 leading-relaxed">No more returns. Our computer vision algorithm calculates your perfect fit from a single photo or height/weight data.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:gallery-wide-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">Generative Textures</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Describe a feeling or era, and our engine generates unique, royalty-free high-res prints for your fabrics instantly.</p>
</div>

<div className="bg-white p-8 rounded-3xl border border-zinc-100 shadow-sm hover:shadow-xl transition-shadow duration-300 group">
<div className="w-12 h-12 bg-emerald-50 rounded-2xl flex items-center justify-center text-emerald-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chat-round-line-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-zinc-900 mb-2">24/7 Styling Bot</h3>
<p className="text-sm text-zinc-500 leading-relaxed">Need advice for a corporate event? Our LLM-powered assistant suggests combinations based on current trends.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="collections">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-end mb-12">
<h2 className="text-3xl font-medium tracking-tight text-zinc-900">Ready to Wear</h2>
<a className="text-sm font-medium text-zinc-900 border-b border-zinc-900 pb-0.5 hover:opacity-70 transition-opacity" href="#">View All</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-6 gap-y-10">

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 mb-4 aspect-[3/4]">
<img alt="Item" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur-md px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">New In</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Minimalist Cotton Tee</h3>
<p className="text-xs text-zinc-500 mt-1">100% Organic Cotton</p>
</div>
<span className="text-sm font-semibold text-zinc-900">$35</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 mb-4 aspect-[3/4]">
<img alt="Item" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503342394128-c104d54dba01?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Oversized Hoodie</h3>
<p className="text-xs text-zinc-500 mt-1">Heavyweight Fleece</p>
</div>
<span className="text-sm font-semibold text-zinc-900">$85</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 mb-4 aspect-[3/4]">
<img alt="Item" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-3 left-3 bg-zinc-900 text-white px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">Best Seller</div>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Linen Kurti Set</h3>
<p className="text-xs text-zinc-500 mt-1">Sustainable Blend</p>
</div>
<span className="text-sm font-semibold text-zinc-900">$120</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="relative overflow-hidden rounded-xl bg-zinc-100 mb-4 aspect-[3/4]">
<img alt="Item" className="object-cover w-full h-full group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1618354691373-d851c5c3a990?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button className="absolute bottom-4 right-4 w-10 h-10 bg-white rounded-full flex items-center justify-center text-zinc-900 translate-y-12 group-hover:translate-y-0 transition-transform duration-300 shadow-lg">
<iconify-icon icon="solar:bag-plus-linear" width="20"></iconify-icon>
</button>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-sm font-medium text-zinc-900">Structure Tee</h3>
<p className="text-xs text-zinc-500 mt-1">Tech Fabric</p>
</div>
<span className="text-sm font-semibold text-zinc-900">$45</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white relative overflow-hidden" id="business">
<div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-zinc-800 to-transparent opacity-20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="space-y-6">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Corporate &amp; <br/>Bulk Orders</h2>
<p className="text-zinc-400 text-lg max-w-md">Outfit your team or launch your own brand. We handle everything from design to manufacturing and logistics.</p>
<ul className="space-y-4 mt-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-300">Automatic Wholesale Pricing</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-300">Priority Production Queue</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-linear" width="24"></iconify-icon>
<span className="text-sm text-zinc-300">White-label Shipping</span>
</li>
</ul>
<button className="mt-8 bg-white text-zinc-900 px-8 py-3 rounded-xl text-sm font-semibold hover:bg-zinc-100 transition-colors">
                    Get Enterprise Quote
                </button>
</div>

<div className="bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-8 rounded-3xl">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-zinc-400">Company Name</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:border-white transition-colors outline-none" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Email</label>
<input className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:border-white transition-colors outline-none" type="email"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Project Type</label>
<select className="w-full bg-zinc-900/50 border border-zinc-700 rounded-lg p-3 text-sm text-white focus:border-white transition-colors outline-none appearance-none">
<option>Corporate Uniforms</option>
<option>Event Merchandise</option>
<option>School Apparel</option>
</select>
</div>
<div className="space-y-1">
<label className="text-xs text-zinc-400">Quantity Estimate</label>
<input className="w-full accent-white h-1 bg-zinc-700 rounded-lg appearance-none cursor-pointer" max="1000" min="50" type="range"/>
<div className="flex justify-between text-xs text-zinc-500 mt-1">
<span>50</span>
<span>1000+</span>
</div>
</div>
<button className="w-full bg-purple-600 text-white py-3 rounded-lg text-sm font-medium hover:bg-purple-500 transition-colors mt-4" type="submit">
                        Download PDF Estimation
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-1">
<a className="text-xl tracking-tighter font-semibold text-zinc-950 flex items-center gap-2 mb-6" href="#">
<span className="w-6 h-6 bg-zinc-950 rounded-full flex items-center justify-center text-white text-[10px]">A</span>
                        ATELIER.
                    </a>
<p className="text-xs text-zinc-500 leading-relaxed">
                        Redefining fashion retail with artificial intelligence and premium craftsmanship.
                    </p>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Shop</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Men</a></li>
<li><a className="hover:text-zinc-900" href="#">Women</a></li>
<li><a className="hover:text-zinc-900" href="#">Kids</a></li>
<li><a className="hover:text-zinc-900" href="#">Accessories</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About Us</a></li>
<li><a className="hover:text-zinc-900" href="#">Sustainability</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold text-zinc-900 mb-4">Connect</h4>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:camera-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all" href="#">
<iconify-icon icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-600 hover:bg-zinc-900 hover:text-white transition-all" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-zinc-100 gap-4">
<p className="text-xs text-zinc-400">© 2024 Atelier Inc. All rights reserved.</p>
<div className="flex gap-6 text-xs text-zinc-400">
<a className="hover:text-zinc-900" href="#">Privacy Policy</a>
<a className="hover:text-zinc-900" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-14 h-14 bg-[#25D366] rounded-full shadow-2xl flex items-center justify-center text-white hover:scale-110 transition-transform z-50" href="#">
<iconify-icon icon="brandico:whatsapp" width="28"></iconify-icon>
</a>



    </>
  );
}
