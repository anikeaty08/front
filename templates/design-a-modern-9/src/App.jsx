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
},
colors: {
slate: {
50: '#f8fafc',
100: '#f1f5f9',
200: '#e2e8f0',
300: '#cbd5e1',
400: '#94a3b8',
500: '#64748b',
600: '#475569',
800: '#1e293b',
900: '#0f172a',
}
}
}
}
}



        // Set future date for trial
        const date = new Date();
        date.setDate(date.getDate() + 3);
        const options = { month: 'short', day: 'numeric' };
        document.getElementById('future-date').innerText = date.toLocaleDateString('en-US', options);

        function startFlow() {
            const backdrop = document.getElementById('modal-backdrop');
            backdrop.classList.remove('hidden');
            // Trigger reflow
            void backdrop.offsetWidth;
            backdrop.classList.remove('opacity-0');
            
            showStep(1);
        }

        function openAuth() {
            const backdrop = document.getElementById('modal-backdrop');
            backdrop.classList.remove('hidden');
            // Trigger reflow
            void backdrop.offsetWidth;
            backdrop.classList.remove('opacity-0');
            showStep('auth');
        }

        function closeModal() {
            const backdrop = document.getElementById('modal-backdrop');
            backdrop.classList.add('opacity-0');
            setTimeout(() => {
                backdrop.classList.add('hidden');
                hideAllSteps();
            }, 300);
        }

        function hideAllSteps() {
            const steps = [1, 'auth', 2, 3, 4];
            steps.forEach(id => {
                const el = document.getElementById(`step-${id}`);
                if (el) {
                    el.classList.add('hidden-step');
                    el.classList.remove('fade-enter-active');
                }
            });
        }

        function showStep(stepId) {
            hideAllSteps();
            const el = document.getElementById(`step-${stepId}`);
            if(!el) return;

            el.classList.remove('hidden-step');
            el.classList.add('fade-enter');
            
            // Small delay to allow display:block to apply before adding opacity transition class
            requestAnimationFrame(() => {
                el.classList.add('fade-enter-active');
                el.classList.remove('fade-enter');
            });

            if (stepId === 4) {
                // Simulate processing and redirect to result
                setTimeout(() => {
                    closeModal();
                    showResult();
                }, 2500);
            }
        }

        function nextStep(stepId) {
            const current = document.querySelector('.fade-enter-active') || document.querySelector(':not(.hidden-step)');
            if(current) {
                current.classList.add('fade-exit');
                requestAnimationFrame(() => {
                    current.classList.add('fade-exit-active');
                });
                setTimeout(() => {
                    showStep(stepId);
                }, 200);
            } else {
                showStep(stepId);
            }
        }

        function showResult() {
            document.getElementById('hero-section').classList.add('hidden');
            const result = document.getElementById('result-section');
            result.classList.remove('hidden');
            window.scrollTo({ top: 0, behavior: 'smooth' });
            
            // Add logged in state to nav
            const nav = document.querySelector('nav');
            nav.innerHTML = `
                <div class="flex items-center gap-4">
                    <span class="text-xs font-semibold bg-green-100 text-green-700 px-2 py-1 rounded">PRO TRIAL</span>
                    <div class="w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center text-xs font-medium cursor-pointer">
                        JD
                    </div>
                </div>
            `;
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
      

<header className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<div className="flex items-center gap-2 cursor-pointer" onclick="window.location.reload()">
<div className="w-6 h-6 bg-slate-900 rounded-md flex items-center justify-center text-white">
<iconify-icon icon="lucide:layout-grid" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight">INTERIOR.AI</span>
</div>

<div className="hidden md:flex flex-1 max-w-md mx-8 relative group">
<iconify-icon className="absolute left-3 top-2.5 text-slate-400 group-focus-within:text-slate-600 transition-colors" icon="lucide:search" strokeWidth="1.5" width="18"></iconify-icon>
<input className="w-full bg-slate-100 border border-transparent focus:bg-white focus:border-slate-300 focus:ring-2 focus:ring-slate-100 rounded-full py-2 pl-10 pr-4 text-sm outline-none transition-all placeholder:text-slate-400" placeholder="Search interior inspirations..." type="text"/>
</div>

<nav className="flex items-center gap-6 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors hidden sm:block" href="#">Explore</a>
<a className="hover:text-slate-900 transition-colors hidden sm:block" href="#">Styles</a>
<button className="text-slate-900 hover:opacity-70 transition-opacity" onclick="openAuth()">Login</button>
<button className="bg-slate-900 text-white px-4 py-2 rounded-lg hover:bg-slate-800 transition-colors shadow-sm shadow-slate-200" onclick="openAuth()">Sign Up</button>
</nav>
</div>
</header>
<main className="pt-24 min-h-screen pb-20 relative">

<section className="max-w-4xl mx-auto px-6 text-center mb-20 transition-all duration-500" id="hero-section">
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-slate-900 mb-6 leading-[1.1]">
                Design your space with AI.
            </h1>
<p className="text-lg text-slate-500 mb-10 max-w-xl mx-auto leading-relaxed">
                Browse interior inspirations freely, then transform your own room in seconds.
            </p>

<div className="relative w-full max-w-2xl mx-auto bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 overflow-hidden group focus-within:ring-2 focus-within:ring-slate-900/5 transition-all">
<div className="p-4 pb-2">
<textarea className="w-full resize-none outline-none text-base text-slate-700 placeholder:text-slate-300 bg-transparent" id="prompt-input" placeholder="Describe how you want to redesign your room (e.g., 'Modern minimalist living room with warm lighting')..." rows="2"></textarea>
</div>

<div className="px-4 pb-4 pt-2 flex items-center justify-between border-t border-slate-50 mt-2 bg-slate-50/50">
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 text-xs font-medium text-slate-500 bg-white border border-slate-200 px-3 py-1.5 rounded-full hover:border-slate-300 transition-colors">
<iconify-icon icon="lucide:image-plus" strokeWidth="1.5" width="14"></iconify-icon>
                            Upload Room
                        </button>
<div className="h-4 w-px bg-slate-200"></div>
<select className="text-xs font-medium text-slate-500 bg-transparent outline-none cursor-pointer hover:text-slate-700">
<option>Modern</option>
<option>Scandinavian</option>
<option>Industrial</option>
<option>Boho</option>
</select>
</div>
<button className="flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-4 py-2 rounded-lg transition-all transform active:scale-95 shadow-lg shadow-slate-900/20" onclick="startFlow()">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
                        Generate with AI
                    </button>
</div>
</div>
<p className="text-xs text-slate-400 mt-4 font-medium tracking-wide">AI TOOLS REQUIRE SIGNUP</p>
</section>

<section className="hidden max-w-6xl mx-auto px-6 mb-20 fade-enter" id="result-section">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Your Redesign</h2>
<p className="text-sm text-slate-500">Generated based on "Modern minimalist living room"</p>
</div>
<div className="flex gap-3">
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-slate-600 bg-white border border-slate-200 rounded-lg hover:bg-slate-50">
<iconify-icon icon="lucide:pencil" strokeWidth="1.5" width="16"></iconify-icon>
                        Edit Prompt
                    </button>
<button className="flex items-center gap-2 px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-lg hover:bg-slate-800 shadow-sm">
<iconify-icon icon="lucide:download" strokeWidth="1.5" width="16"></iconify-icon>
                        Download
                    </button>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-6">

<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3]">
<div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md text-white text-xs font-medium px-3 py-1 rounded-full">Original</div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>

<div className="relative group rounded-2xl overflow-hidden shadow-lg border border-slate-100 aspect-[4/3]">
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md text-slate-900 text-xs font-medium px-3 py-1 rounded-full flex items-center gap-1">
<iconify-icon icon="lucide:sparkles" width="12"></iconify-icon> AI Generated
                    </div>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
</div>
</div>
</section>

<section className="max-w-[1600px] mx-auto px-6">
<div className="flex items-center justify-between mb-8">
<h3 className="text-lg font-semibold tracking-tight text-slate-900">Explore Inspirations</h3>
<div className="flex gap-2">
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="lucide:grid" strokeWidth="1.5" width="20"></iconify-icon></button>
<button className="p-2 text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="lucide:layout-list" strokeWidth="1.5" width="20"></iconify-icon></button>
</div>
</div>
<div className="columns-1 sm:columns-2 lg:columns-3 xl:columns-4 masonry-grid">

<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Modern Living</span>
</div>
</div>
<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Scandinavian</span>
</div>
</div>
<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1598928506311-c55ded91a20c?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Minimalist</span>
</div>
</div>
<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1616137466211-f939a420be84?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Boho Chic</span>
</div>
</div>
<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1615529182904-14819c35db37?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Japandi</span>
</div>
</div>
<div className="masonry-item group relative cursor-zoom-in">
<img className="w-full rounded-xl shadow-sm group-hover:shadow-md transition-shadow duration-300 bg-slate-200" src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors rounded-xl"></div>
<div className="absolute bottom-4 left-4 opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-2.5 py-1 rounded-full">Office</span>
</div>
</div>
</div>
</section>
</main>

<div className="fixed inset-0 bg-slate-900/30 backdrop-blur-sm z-50 hidden flex items-center justify-center transition-opacity duration-300 opacity-0" id="modal-backdrop">

<div className="hidden-step bg-white w-full max-w-3xl rounded-2xl shadow-2xl overflow-hidden flex flex-col md:flex-row h-auto md:h-[500px] transform scale-95 transition-all duration-300" id="step-1">
<div className="w-full md:w-1/2 h-64 md:h-full relative bg-slate-100">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600585154526-990dced4db0d?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent flex items-end p-8">
<div className="text-white">
<div className="flex items-center gap-2 mb-2">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Premium AI</span>
</div>
<p className="text-sm opacity-90 font-light">"Transformed my empty room into a masterpiece in seconds."</p>
</div>
</div>
</div>
<div className="w-full md:w-1/2 p-10 flex flex-col justify-center">
<h2 className="text-2xl font-semibold text-slate-900 mb-2 tracking-tight">Start your 3-day AI trial</h2>
<p className="text-slate-500 mb-8 leading-relaxed">Get full access to professional interior design AI tools for 3 days. No charge today.</p>
<div className="space-y-3">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-slate-900/20 flex items-center justify-center gap-2" onclick="nextStep('auth')">
                        Continue
                        <iconify-icon icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="w-full bg-white border border-slate-200 text-slate-600 hover:bg-slate-50 font-medium py-3 rounded-xl transition-colors" onclick="closeModal()">
                        Continue browsing
                    </button>
</div>
<p className="text-center text-xs text-slate-400 mt-6">Cancel anytime.</p>
</div>
</div>

<div className="hidden-step bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 transform scale-95 transition-all duration-300 relative" id="step-auth">
<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900" onclick="closeModal()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-center mb-8">
<div className="w-12 h-12 bg-slate-100 rounded-xl flex items-center justify-center mx-auto mb-4 text-slate-900">
<iconify-icon icon="lucide:user-plus" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight">Create your account</h2>
<p className="text-slate-500 text-sm mt-1">Sign up to save your generations and access pro tools.</p>
</div>
<div className="space-y-4">
<button className="w-full flex items-center justify-center gap-3 bg-white border border-slate-200 text-slate-700 font-medium py-2.5 rounded-lg hover:bg-slate-50 transition-colors">
<iconify-icon icon="lucide:github" width="18"></iconify-icon>
                    Continue with GitHub
                </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-slate-200"></div>
<span className="flex-shrink-0 mx-4 text-slate-400 text-xs uppercase tracking-wide">Or using email</span>
<div className="flex-grow border-t border-slate-200"></div>
</div>
<form className="space-y-3" onsubmit="event.preventDefault(); nextStep(2);">
<div>
<label className="sr-only">Email</label>
<input className="w-full bg-white border border-slate-300 rounded-lg py-2.5 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400" placeholder="name@example.com" type="email"/>
</div>
<div>
<label className="sr-only">Password</label>
<input className="w-full bg-white border border-slate-300 rounded-lg py-2.5 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-all placeholder:text-slate-400" placeholder="Create a password" type="password"/>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-2.5 rounded-lg transition-all shadow-md mt-1" type="submit">
                        Sign Up
                    </button>
</form>
</div>
<div className="mt-6 pt-5 border-t border-slate-100 text-center">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors flex items-center justify-center gap-2 mx-auto w-full py-2 hover:bg-slate-50 rounded-lg border border-transparent hover:border-slate-200 dashed-border" onclick="nextStep(2)">
<iconify-icon className="text-slate-400" icon="lucide:ghost" width="16"></iconify-icon>
                    Skip &amp; Use Demo Account
                </button>
<p className="text-xs text-slate-400 mt-4">
                    Already have an account? <a className="text-slate-900 underline underline-offset-2" href="#">Log in</a>
</p>
</div>
</div>

<div className="hidden-step bg-white w-full max-w-5xl rounded-2xl shadow-2xl p-8 transform scale-95 transition-all duration-300 relative" id="step-2">
<button className="absolute top-6 right-6 text-slate-400 hover:text-slate-900" onclick="closeModal()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="24"></iconify-icon>
</button>
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-2">Choose your plan</h2>
<p className="text-slate-500">Your trial starts now. You'll be charged only after 3 days.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="font-semibold text-lg text-slate-900">Explore</h3>
<div className="text-3xl font-bold text-slate-900 mt-2 mb-1">$0</div>
<div className="text-sm text-slate-400 mb-6">Forever free</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon> Browse inspirations
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon> Save collections
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-slate-200 text-slate-700 font-medium text-sm hover:bg-slate-50" onclick="closeModal()">Stay on Free</button>
</div>

<div className="border-2 border-slate-900 bg-slate-900/5 rounded-2xl p-6 relative flex flex-col">
<div className="absolute top-0 right-0 bg-slate-900 text-white text-[10px] uppercase font-bold px-3 py-1 rounded-bl-xl rounded-tr-lg">Most Popular</div>
<h3 className="font-semibold text-lg text-slate-900">Create Basic</h3>
<div className="text-3xl font-bold text-slate-900 mt-2 mb-1">$15</div>
<div className="text-sm text-slate-500 mb-6">per month</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-700 font-medium">
<iconify-icon className="text-slate-900 mt-0.5" icon="lucide:check" width="16"></iconify-icon> 50 AI redesigns/mo
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-900 mt-0.5" icon="lucide:check" width="16"></iconify-icon> Standard quality
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-700">
<iconify-icon className="text-slate-900 mt-0.5" icon="lucide:check" width="16"></iconify-icon> 3-day free trial
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-slate-900 text-white font-medium text-sm hover:bg-slate-800 shadow-md" onclick="nextStep(3)">Start free trial</button>
</div>

<div className="border border-slate-200 rounded-2xl p-6 hover:border-slate-300 transition-colors flex flex-col">
<h3 className="font-semibold text-lg text-slate-900">Create Pro</h3>
<div className="text-3xl font-bold text-slate-900 mt-2 mb-1">$29</div>
<div className="text-sm text-slate-400 mb-6">per month</div>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon> Unlimited AI redesigns
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon> HD Rendering
                        </li>
<li className="flex items-start gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-600 mt-0.5" icon="lucide:check" width="16"></iconify-icon> Priority Processing
                        </li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-slate-100 text-slate-900 font-medium text-sm hover:bg-slate-200" onclick="nextStep(3)">Start free trial</button>
</div>
</div>
<p className="text-center text-xs text-slate-400">You won’t be charged today. Your selected plan will start automatically after the trial unless you cancel.</p>
</div>

<div className="hidden-step bg-white w-full max-w-md rounded-2xl shadow-2xl p-8 transform scale-95 transition-all duration-300" id="step-3">
<button className="text-slate-400 hover:text-slate-900 mb-4 flex items-center gap-1 text-xs font-medium" onclick="nextStep(2)">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back to plans
            </button>
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight mb-2">Activate your free trial</h2>
<div className="bg-slate-50 border border-slate-100 p-4 rounded-lg mb-6 flex items-start gap-3">
<iconify-icon className="text-slate-900 mt-0.5" icon="lucide:shield-check" width="18"></iconify-icon>
<p className="text-xs text-slate-600 leading-relaxed">
<strong>No charge today.</strong><br/>
                    You'll be charged $15.00 on <span id="future-date"></span> (in 3 days) unless you cancel before then.
                </p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault(); nextStep(4);">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Card Information</label>
<div className="relative">
<input className="w-full bg-white border border-slate-300 rounded-lg py-2.5 pl-10 pr-4 text-sm outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="0000 0000 0000 0000" type="text"/>
<iconify-icon className="absolute left-3 top-3 text-slate-400" icon="lucide:credit-card" width="16"></iconify-icon>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">Expiry</label>
<input className="w-full bg-white border border-slate-300 rounded-lg py-2.5 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="MM / YY" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-700 mb-1.5">CVC</label>
<div className="relative">
<input className="w-full bg-white border border-slate-300 rounded-lg py-2.5 px-3 text-sm outline-none focus:ring-2 focus:ring-slate-900/20 focus:border-slate-900 transition-all placeholder:text-slate-300" placeholder="123" type="text"/>
<iconify-icon className="absolute right-3 top-3 text-slate-400" icon="lucide:lock" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-start gap-2 pt-2">
<input className="mt-1 rounded border-slate-300 text-slate-900 focus:ring-slate-900 cursor-pointer" id="terms" required="" type="checkbox"/>
<label className="text-xs text-slate-500 cursor-pointer select-none" htmlFor="terms">I understand I’ll be charged after the 3-day trial unless I cancel.</label>
</div>
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl transition-all shadow-lg shadow-slate-900/20 mt-4 flex items-center justify-center gap-2" type="submit">
                    Start free trial
                </button>
</form>
</div>

<div className="hidden-step bg-white w-full max-w-sm rounded-2xl shadow-2xl p-8 text-center transform scale-95 transition-all duration-300" id="step-4">
<div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:check" strokeWidth="2.5" width="32"></iconify-icon>
</div>
<h2 className="text-xl font-semibold text-slate-900 mb-2">Trial Activated</h2>
<p className="text-sm text-slate-500 mb-6">Your 3-day trial has started. Check your email for details.</p>
<div className="flex justify-center">
<div className="loader"></div>
</div>
<p className="text-xs text-slate-400 mt-4">Generating your design...</p>
</div>
</div>


    </>
  );
}
