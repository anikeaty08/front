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



        // State Management
        const views = {
            auth: document.getElementById('view-auth'),
            prompt: document.getElementById('view-prompt'),
            generating: document.getElementById('view-generating'),
            preview: document.getElementById('view-preview'),
            success: document.getElementById('view-success')
        };

        function switchView(viewId) {
            Object.values(views).forEach(el => el.classList.add('hidden-step'));
            views[viewId].classList.remove('hidden-step');
            views[viewId].classList.add('fade-in');
        }

        function handleLogin() {
            // Simulate Google Auth
            const btn = event.currentTarget;
            btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="18"></iconify-icon> Authenticating...';
            setTimeout(() => {
                document.getElementById('user-profile').classList.remove('hidden');
                document.getElementById('user-profile').classList.add('flex');
                switchView('prompt');
            }, 1000);
        }

        function fillPrompt(type) {
            const input = document.getElementById('prompt-input');
            if (type === 'Nike') {
                input.value = "Design a fully immersive, luxury brand website exactly like Nike’s. Use bold, deep color schemes, premium typography, and dynamic layouts. It should be a high-end, e-commerce-ready design showcasing sportswear, innovation, and performance. Ensure the user interface is sleek, intuitive, and includes large hero imagery with bold 'JUST DO IT' style messaging.";
            }
        }

        function startGeneration() {
            const input = document.getElementById('prompt-input');
            if (!input.value.trim()) {
                input.classList.add('ring-1', 'ring-red-500');
                setTimeout(() => input.classList.remove('ring-1', 'ring-red-500'), 2000);
                return;
            }

            switchView('generating');

            // Simulate Steps
            const steps = [
                { el: 'step-1', delay: 800 },
                { el: 'step-2', delay: 1800 },
                { el: 'step-3', delay: 2800 },
                { el: 'step-4', delay: 3800 }
            ];

            steps.forEach(step => {
                setTimeout(() => {
                    const el = document.getElementById(step.el);
                    el.classList.remove('opacity-50');
                    el.querySelector('iconify-icon').setAttribute('icon', 'solar:check-circle-bold');
                    el.querySelector('iconify-icon').classList.add('text-green-500');
                    el.querySelector('span').classList.add('text-zinc-200');
                }, step.delay);
            });

            setTimeout(() => {
                switchView('preview');
            }, 5000);
        }

        function publishSite() {
            const btn = event.currentTarget;
            const originalText = btn.innerText;
            btn.innerHTML = '<iconify-icon icon="line-md:loading-loop" width="14"></iconify-icon>';
            
            setTimeout(() => {
                document.getElementById('view-success').classList.remove('hidden-step');
                // Trigger animation for modal
                setTimeout(() => {
                    const modal = document.getElementById('success-modal');
                    modal.classList.remove('scale-95', 'opacity-0');
                    modal.classList.add('scale-100', 'opacity-100');
                }, 50);
                btn.innerText = originalText;
            }, 1500);
        }
    
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
      

<nav className="border-b border-zinc-800 bg-zinc-950/80 backdrop-blur-md fixed top-0 w-full z-50">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center">
<div className="w-3 h-3 bg-zinc-950 rounded-full"></div>
</div>
<span className="font-semibold tracking-tight text-lg">Lumina</span>
</div>
<div className="flex items-center gap-4 text-xs font-medium text-zinc-400">
<span className="hidden sm:block hover:text-white cursor-pointer transition">Templates</span>
<span className="hidden sm:block hover:text-white cursor-pointer transition">Pricing</span>
<div className="hidden flex items-center gap-2 text-zinc-300 bg-zinc-900 py-1.5 px-3 rounded-full border border-zinc-800" id="user-profile">
<img alt="User" className="w-4 h-4 rounded-full" src="https://api.dicebear.com/7.x/avataaars/svg?seed=Felix"/>
<span>felix@example.com</span>
</div>
</div>
</div>
</nav>

<main className="flex-grow pt-14 relative flex items-center justify-center w-full">

<div className="w-full max-w-md p-6 fade-in" id="view-auth">
<div className="text-center mb-8">
<h1 className="text-3xl font-semibold tracking-tight mb-2">Build the web, instantly.</h1>
<p className="text-zinc-400 text-sm">Sign up to generate luxury, high-performance websites in seconds.</p>
</div>
<div className="space-y-3">
<button className="w-full h-11 bg-white hover:bg-zinc-200 text-black font-medium rounded-lg transition flex items-center justify-center gap-2 group" onclick="handleLogin()">
<iconify-icon icon="logos:google-icon" width="18"></iconify-icon>
<span>Continue with Google</span>
</button>
<div className="relative py-2">
<div className="absolute inset-0 flex items-center"><div className="w-full border-t border-zinc-800"></div></div>
<div className="relative flex justify-center text-xs uppercase"><span className="bg-zinc-950 px-2 text-zinc-500">Or continue with email</span></div>
</div>
<input className="w-full h-11 bg-zinc-900 border border-zinc-800 rounded-lg px-3 text-sm focus:outline-none focus:ring-1 focus:ring-white transition placeholder:text-zinc-600" placeholder="name@company.com" type="email"/>
<button className="w-full h-11 bg-zinc-900 hover:bg-zinc-800 border border-zinc-800 text-zinc-300 font-medium rounded-lg transition text-sm">Sign In</button>
</div>
<p className="text-center mt-6 text-xs text-zinc-500">By clicking continue, you agree to our <span className="underline decoration-zinc-700 underline-offset-2">Terms of Service</span>.</p>
</div>

<div className="w-full max-w-2xl p-6 hidden-step" id="view-prompt">
<div className="mb-6">
<div className="inline-flex items-center gap-2 px-2 py-1 bg-zinc-900 border border-zinc-800 rounded-md text-xs font-medium text-zinc-400 mb-4">
<iconify-icon className="text-indigo-400" icon="solar:magic-stick-3-linear" width="16"></iconify-icon>
                    AI Site Generator
                </div>
<h2 className="text-2xl font-semibold tracking-tight">Describe your dream website.</h2>
<p className="text-zinc-400 text-sm mt-1">Be specific about style, functionality, and brand vision.</p>
</div>
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-xl opacity-20 group-hover:opacity-40 transition blur"></div>
<div className="relative bg-zinc-950 rounded-xl border border-zinc-800 p-1">
<textarea className="w-full bg-transparent p-4 text-sm text-zinc-200 focus:outline-none min-h-[160px] resize-none leading-relaxed placeholder:text-zinc-700" id="prompt-input" placeholder="e.g. Create a minimalist portfolio for a photographer with a dark theme..."></textarea>
<div className="flex items-center justify-between px-3 py-2 border-t border-zinc-900">
<div className="flex gap-2">
<button className="p-2 hover:bg-zinc-900 rounded-md text-zinc-500 hover:text-zinc-300 transition" title="Add Image">
<iconify-icon icon="solar:gallery-add-linear" width="18"></iconify-icon>
</button>
<button className="p-2 hover:bg-zinc-900 rounded-md text-zinc-500 hover:text-zinc-300 transition" title="Voice Input">
<iconify-icon icon="solar:microphone-linear" width="18"></iconify-icon>
</button>
</div>
<button className="bg-white text-black text-sm px-4 py-1.5 rounded-lg font-medium hover:bg-zinc-200 transition shadow-[0_0_15px_rgba(255,255,255,0.1)]" onclick="startGeneration()">
                            Generate Site
                        </button>
</div>
</div>
</div>
<div className="mt-6 flex flex-wrap gap-2">
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition cursor-pointer" onclick="fillPrompt('Nike')">
                    Luxury Sportswear Brand
                </button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition cursor-pointer">
                    SaaS Landing Page
                </button>
<button className="px-3 py-1.5 bg-zinc-900 border border-zinc-800 rounded-full text-xs text-zinc-400 hover:text-white hover:border-zinc-600 transition cursor-pointer">
                    3D Portfolio
                </button>
</div>
</div>

<div className="w-full max-w-lg p-6 hidden-step text-center" id="view-generating">
<div className="relative w-16 h-16 mx-auto mb-6 flex items-center justify-center">
<div className="absolute inset-0 border-t-2 border-r-2 border-white rounded-full animate-spin"></div>
<div className="absolute inset-2 border-b-2 border-l-2 border-zinc-700 rounded-full animate-spin" style={{animationDirection: 'reverse'}}></div>
<iconify-icon className="text-zinc-500" icon="solar:cpu-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-6" id="gen-status">Analyzing design principles...</h3>
<div className="w-full space-y-3 text-left max-w-sm mx-auto">
<div className="flex items-center gap-3 text-sm text-zinc-500 transition-all duration-300" id="step-1">
<iconify-icon icon="solar:pallete-2-linear" width="18"></iconify-icon>
<span>Extracting luxury color palette</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 transition-all duration-300 opacity-50" id="step-2">
<iconify-icon icon="solar:text-square-linear" width="18"></iconify-icon>
<span>Generating premium typography</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 transition-all duration-300 opacity-50" id="step-3">
<iconify-icon icon="solar:cart-large-linear" width="18"></iconify-icon>
<span>Building e-commerce infrastructure</span>
</div>
<div className="flex items-center gap-3 text-sm text-zinc-500 transition-all duration-300 opacity-50" id="step-4">
<iconify-icon icon="solar:layers-linear" width="18"></iconify-icon>
<span>Assembling responsive layouts</span>
</div>
</div>
</div>

<div className="w-full h-full pt-4 px-4 pb-4 hidden-step flex flex-col md:flex-row gap-4" id="view-preview">

<aside className="w-full md:w-64 flex flex-col gap-4 shrink-0">
<div className="bg-zinc-900 border border-zinc-800 rounded-xl p-4 flex-1">
<h3 className="text-xs font-semibold uppercase tracking-wider text-zinc-500 mb-4">Properties</h3>
<div className="space-y-4">
<div>
<label className="text-xs text-zinc-400 block mb-1.5">Theme</label>
<div className="flex gap-2">
<div className="w-6 h-6 rounded-full bg-black border border-white cursor-pointer ring-2 ring-offset-2 ring-offset-zinc-900 ring-indigo-500"></div>
<div className="w-6 h-6 rounded-full bg-white border border-zinc-600 cursor-pointer"></div>
<div className="w-6 h-6 rounded-full bg-zinc-800 border border-zinc-600 cursor-pointer"></div>
</div>
</div>
<div>
<label className="text-xs text-zinc-400 block mb-1.5">Typography</label>
<select className="w-full bg-zinc-950 border border-zinc-800 rounded text-xs p-2 text-zinc-300 focus:outline-none">
<option>Satoshi &amp; Inter</option>
<option>Helvetica Now</option>
<option>Futura</option>
</select>
</div>
<div>
<label className="text-xs text-zinc-400 block mb-1.5">Layout Density</label>
<input className="w-full accent-white h-1 bg-zinc-800 rounded appearance-none" type="range"/>
</div>
</div>
<div className="mt-8 pt-6 border-t border-zinc-800">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-zinc-400">AI Suggestions</span>
<iconify-icon className="text-indigo-400" icon="solar:stars-minimalistic-linear" width="14"></iconify-icon>
</div>
<div className="text-xs text-zinc-500 leading-relaxed">
                            Based on "Nike", I recommend a <strong>Volt Green</strong> accent and bold, condensed headings.
                        </div>
<button className="mt-3 w-full py-1.5 border border-zinc-700 rounded text-xs text-zinc-300 hover:bg-zinc-800 transition">Apply Suggestion</button>
</div>
</div>
</aside>

<section className="flex-1 bg-zinc-900 rounded-xl border border-zinc-800 overflow-hidden flex flex-col relative group">

<div className="bg-zinc-950 border-b border-zinc-800 px-4 h-10 flex items-center gap-2">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="ml-4 flex-1 bg-zinc-900 h-6 rounded border border-zinc-800 flex items-center px-3 text-[10px] text-zinc-500 font-mono">
<iconify-icon className="mr-1.5" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
                        preview.lumina.ai/p/nike-concept-v1
                    </div>
<button className="bg-white text-black text-xs font-semibold px-3 py-1 rounded hover:bg-zinc-200 transition ml-2" onclick="publishSite()">Publish</button>
</div>

<div className="flex-1 overflow-y-auto bg-black relative scroll-smooth">

<div className="absolute top-0 w-full p-6 flex justify-between items-center z-10 mix-blend-difference text-white">
<svg className="h-6 w-auto fill-current" viewbox="0 0 24 24"><path d="M21.75 3.375c-.415 0-.75.336-.75.75v12.559l-6.864-3.957a.75.75 0 0 0-.77.014l-9.15 5.719A.75.75 0 0 1 3 17.824V4.125c0-.414-.336-.75-.75-.75S1.5 3.711 1.5 4.125v13.699c0 .604.481 1.156 1.082 1.173.61.018 1.153-.424 1.286-1.016l.245-1.09 8.387-5.242 6.639 3.827c.227.13.483.199.743.199.828 0 1.5-.672 1.5-1.5V4.125c0-.414-.336-.75-.75-.75z"></path></svg>
<div className="hidden md:flex gap-6 text-xs font-bold uppercase tracking-widest">
<a className="hover:underline" href="#">New Releases</a>
<a className="hover:underline" href="#">Men</a>
<a className="hover:underline" href="#">Women</a>
<a className="hover:underline" href="#">Collections</a>
</div>
<div className="flex gap-4">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
<iconify-icon icon="solar:bag-3-linear" width="20"></iconify-icon>
</div>
</div>

<div className="relative min-h-[600px] h-[80vh] flex items-center px-6 md:px-12 overflow-hidden">
<img alt="Shoe" className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40"></div>
<div className="relative z-10 max-w-4xl pt-20">
<span className="text-[#D3FF34] font-bold tracking-widest uppercase text-xs mb-4 block animate-pulse">Just Dropped</span>
<h1 className="font-display text-5xl md:text-8xl font-bold uppercase leading-[0.9] tracking-tighter text-white mb-6">
                                Beyond<br/>Gravity
                            </h1>
<p className="text-zinc-300 max-w-md text-sm md:text-base leading-relaxed mb-8">
                                Engineered for the ones who refuse to land. The new Air Max Pulse combines ultra-responsive cushioning with a lightweight structure.
                            </p>
<div className="flex gap-4">
<button className="bg-white text-black px-8 py-3 rounded-full font-bold text-sm hover:bg-[#D3FF34] transition duration-300">Shop Now</button>
<button className="border border-white/30 backdrop-blur-sm text-white px-8 py-3 rounded-full font-bold text-sm hover:bg-white/10 transition">Watch Film</button>
</div>
</div>
</div>

<div className="px-6 md:px-12 py-20 bg-black">
<div className="flex justify-between items-end mb-10">
<h2 className="text-2xl font-display font-bold uppercase text-white tracking-tight">Trending Now</h2>
<div className="flex gap-2">
<button className="p-2 border border-zinc-800 rounded-full hover:bg-zinc-900 text-white"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="p-2 border border-zinc-800 rounded-full hover:bg-zinc-900 text-white"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">

<div className="group cursor-pointer">
<div className="bg-zinc-900 aspect-[4/5] relative overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1606107557195-0e29a4b5b4aa?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white text-black text-[10px] font-bold px-2 py-1 uppercase">Best Seller</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Air Zoom Alphafly</h3>
<p className="text-zinc-500 text-xs mt-1">Men's Racing Shoe</p>
</div>
<span className="text-white font-medium text-sm">$285</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-900 aspect-[4/5] relative overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://images.unsplash.com/photo-1605348532760-6753d2c43329?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Pegasus 40</h3>
<p className="text-zinc-500 text-xs mt-1">Women's Road Running</p>
</div>
<span className="text-white font-medium text-sm">$135</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="bg-zinc-900 aspect-[4/5] relative overflow-hidden mb-4">
<img className="w-full h-full object-cover group-hover:scale-105 transition duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute top-4 left-4 bg-[#D3FF34] text-black text-[10px] font-bold px-2 py-1 uppercase">New</div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-white font-medium text-sm">Tech Fleece Hoodie</h3>
<p className="text-zinc-500 text-xs mt-1">Sportswear</p>
</div>
<span className="text-white font-medium text-sm">$110</span>
</div>
</div>
</div>
</div>
</div>

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 bg-indigo-500/5 mix-blend-overlay" id="edit-overlay">
<div className="scan-line"></div>
</div>
</section>
</div>

<div className="fixed inset-0 bg-black/80 backdrop-blur-sm z-50 flex items-center justify-center hidden-step" id="view-success">
<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 max-w-sm w-full text-center shadow-2xl scale-95 opacity-0 transition-all duration-500 transform" id="success-modal">
<div className="w-16 h-16 bg-green-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon className="text-green-500" icon="solar:check-circle-bold" width="32"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">You're Live!</h2>
<p className="text-zinc-400 text-sm mb-6">Your luxury brand site has been successfully deployed to the edge.</p>
<div className="bg-zinc-950 border border-zinc-800 rounded-lg p-3 flex items-center justify-between mb-6 group cursor-pointer hover:border-zinc-700 transition">
<div className="flex items-center gap-3 overflow-hidden">
<div className="w-8 h-8 rounded bg-zinc-800 flex items-center justify-center text-zinc-400">
<iconify-icon icon="solar:globe-linear" width="16"></iconify-icon>
</div>
<span className="text-sm text-zinc-200 truncate font-mono">lumina.site/nike-v1</span>
</div>
<iconify-icon className="text-zinc-500 group-hover:text-white transition" icon="solar:copy-linear" width="16"></iconify-icon>
</div>
<div className="flex gap-3">
<button className="flex-1 bg-zinc-800 hover:bg-zinc-700 text-white py-2.5 rounded-lg text-sm font-medium transition" onclick="location.reload()">Back to Editor</button>
<a className="flex-1 bg-white hover:bg-zinc-200 text-black py-2.5 rounded-lg text-sm font-medium transition flex items-center justify-center gap-2" href="#">
                        Visit Site <iconify-icon icon="solar:arrow-right-up-linear" width="14"></iconify-icon>
</a>
</div>
</div>
</div>
</main>


    </>
  );
}
