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
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
zinc: {
50: '#fafafa',
100: '#f4f4f5',
200: '#e4e4e7',
300: '#d4d4d8',
400: '#a1a1aa',
500: '#71717a',
600: '#52525b',
700: '#3f3f46',
800: '#27272a',
900: '#18181b',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Custom Toast Notification System
        function showToast(message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-zinc-900 text-white text-sm px-4 py-3 rounded-xl shadow-xl transform transition-all duration-300 translate-y-4 opacity-0 flex items-center gap-3 min-w-[200px] pointer-events-auto border border-zinc-800';
            toast.innerHTML = `<iconify-icon icon="solar:info-circle-linear" width="18" class="text-zinc-400"></iconify-icon> <span>${message}</span>`;
            
            container.appendChild(toast);
            
            // Animate in
            requestAnimationFrame(() => {
                toast.classList.remove('translate-y-4', 'opacity-0');
            });

            // Remove after 3 seconds
            setTimeout(() => {
                toast.classList.add('opacity-0', 'scale-95');
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        // Filter Button Interactivity
        const filterBtns = document.querySelectorAll('.filter-btn');
        filterBtns.forEach(btn => {
            btn.addEventListener('click', () => {
                // Reset all to inactive styling
                filterBtns.forEach(b => {
                    b.className = 'filter-btn shrink-0 px-4 py-1.5 bg-white text-zinc-600 text-sm rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors';
                });
                // Set clicked to active styling
                btn.className = 'filter-btn shrink-0 px-4 py-1.5 bg-zinc-100 text-zinc-900 text-sm rounded-full border border-transparent';
                
                // Show mock toast
                showToast(`Filtered by: ${btn.innerText}`);
            });
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
      

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-lg tracking-tighter font-medium text-zinc-900" href="#">RBLXWORK</a>
<nav className="hidden md:flex items-center gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#search-section">Find Talent</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#feature-section">How it works</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing-section">Pricing</a>
</nav>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:block text-sm text-zinc-500 hover:text-zinc-900 transition-colors" onclick="showToast('Opening login modal...')">Log in</button>
<button className="text-sm bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-colors shadow-sm" onclick="showToast('Redirecting to dashboard...')">
                    Developer Portal
                </button>
</div>
</div>
</header>

<section className="max-w-4xl mx-auto px-6 pt-24 pb-20 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-zinc-100 border border-zinc-200 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
<span className="text-xs text-zinc-600 font-medium">Over 500+ developers available</span>
</div>
<h1 className="text-5xl md:text-6xl tracking-tighter font-medium text-zinc-900 mb-6 leading-tight">
            Build your next front-page game with world-class talent.
        </h1>
<p className="text-lg text-zinc-500 mb-10 max-w-2xl leading-relaxed">
            The premier marketplace to hire expert scripters, builders, and UI designers. Create a developer account to showcase your portfolio and get hired by top studios.
        </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<button className="w-full sm:w-auto px-6 py-3 bg-zinc-900 text-white rounded-full text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="document.getElementById('search-section').scrollIntoView({behavior: 'smooth'})">
<iconify-icon icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                Hire Developers
            </button>
<button className="w-full sm:w-auto px-6 py-3 bg-white text-zinc-900 border border-zinc-200 rounded-full text-sm font-medium hover:bg-zinc-50 transition-colors shadow-sm flex items-center justify-center gap-2" onclick="document.getElementById('feature-section').scrollIntoView({behavior: 'smooth'})">
<iconify-icon icon="solar:user-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                Create Dev Profile
            </button>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 mb-12 scroll-mt-24" id="search-section">
<div className="bg-white border border-zinc-200 rounded-2xl p-2 flex flex-col md:flex-row items-center gap-2 shadow-sm">
<div className="flex-1 flex items-center gap-3 px-4 py-2 w-full border-b md:border-b-0 md:border-r border-zinc-100">
<iconify-icon className="text-zinc-400" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}} width="20"></iconify-icon>
<input className="w-full text-sm outline-none text-zinc-900 placeholder:text-zinc-400 bg-transparent" onkeyup="if(event.key === 'Enter') showToast('Searching for: ' + this.value)" placeholder="Search by skill, name, or specialty..." type="text"/>
</div>
<div className="flex items-center gap-2 w-full md:w-auto overflow-x-auto px-2 py-2 no-scrollbar" id="filter-container">
<button className="filter-btn shrink-0 px-4 py-1.5 bg-zinc-100 text-zinc-900 text-sm rounded-full border border-transparent">All</button>
<button className="filter-btn shrink-0 px-4 py-1.5 bg-white text-zinc-600 text-sm rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors">Scripter</button>
<button className="filter-btn shrink-0 px-4 py-1.5 bg-white text-zinc-600 text-sm rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors">Builder</button>
<button className="filter-btn shrink-0 px-4 py-1.5 bg-white text-zinc-600 text-sm rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors">3D Modeler</button>
<button className="filter-btn shrink-0 px-4 py-1.5 bg-white text-zinc-600 text-sm rounded-full border border-zinc-200 hover:border-zinc-300 transition-colors">UI/UX</button>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl border border-blue-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative ring-1 ring-blue-50/50" onclick="showToast('Loading Alex Rivera\'s profile...')">
<div className="absolute top-6 right-6 flex items-center gap-1 text-sm font-medium text-zinc-900">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                    5.0
                </div>
<div className="flex items-center gap-4 mb-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-blue-100 to-indigo-50 border border-blue-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-blue-500" icon="solar:code-square-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 group-hover:text-blue-600 transition-colors flex items-center gap-2">
                            Alex Rivera
                            <span className="px-1.5 py-0.5 bg-blue-50 text-blue-600 border border-blue-100 rounded text-[10px] uppercase tracking-wider font-medium">Pro</span>
</h3>
<p className="text-sm text-zinc-500">Lead Luau Scripter</p>
</div>
</div>
<p className="text-sm text-zinc-600 mb-6 flex-1 line-clamp-2">
                    Specializing in advanced datastores, combat systems, and optimized server architectures for high-concurrency games.
                </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Luau</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Rojo</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Knit</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Hourly Rate</span>
<span className="text-sm font-medium text-zinc-900">R$ 5,000 / hr</span>
</div>
<button className="px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors pointer-events-none">View Profile</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative" onclick="showToast('Loading Sarah Chen\'s profile...')">
<div className="absolute top-6 right-6 flex items-center gap-1 text-sm font-medium text-zinc-900">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                    4.9
                </div>
<div className="flex items-center gap-4 mb-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-emerald-100 to-teal-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-emerald-500" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 group-hover:text-emerald-600 transition-colors">Sarah Chen</h3>
<p className="text-sm text-zinc-500">Environment Builder</p>
</div>
</div>
<p className="text-sm text-zinc-600 mb-6 flex-1 line-clamp-2">
                    Creating immersive, low-poly and realistic environments. Expert in lighting setups and terrain generation.
                </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Roblox Studio</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Blender</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">PBR Textures</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Project Based</span>
<span className="text-sm font-medium text-zinc-900">From R$ 50k</span>
</div>
<button className="px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors pointer-events-none">View Profile</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-200 p-6 flex flex-col shadow-sm hover:shadow-md transition-shadow group cursor-pointer relative" onclick="showToast('Loading Marcus Doe\'s profile...')">
<div className="absolute top-6 right-6 flex items-center gap-1 text-sm font-medium text-zinc-900">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
                    5.0
                </div>
<div className="flex items-center gap-4 mb-4">
<div className="w-14 h-14 rounded-full bg-gradient-to-tr from-purple-100 to-pink-50 border border-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-purple-500" icon="solar:pen-new-square-linear" style={{strokeWidth: '1.5px'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-xl tracking-tight font-medium text-zinc-900 group-hover:text-purple-600 transition-colors">Marcus Doe</h3>
<p className="text-sm text-zinc-500">UI/UX Designer</p>
</div>
</div>
<p className="text-sm text-zinc-600 mb-6 flex-1 line-clamp-2">
                    Designing clean, intuitive, and modern user interfaces that scale perfectly across all devices.
                </p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Figma</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">Photoshop</span>
<span className="px-2 py-1 bg-zinc-50 border border-zinc-200 rounded text-xs text-zinc-600">UI Scripting</span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-zinc-100 mt-auto">
<div className="flex flex-col">
<span className="text-xs text-zinc-500">Hourly Rate</span>
<span className="text-sm font-medium text-zinc-900">$25 / hr</span>
</div>
<button className="px-4 py-2 bg-zinc-900 text-white text-sm rounded-lg hover:bg-zinc-800 transition-colors pointer-events-none">View Profile</button>
</div>
</div>
</div>
<div className="mt-10 flex justify-center">
<button className="px-6 py-2.5 bg-white border border-zinc-200 text-zinc-600 text-sm rounded-full hover:bg-zinc-50 hover:text-zinc-900 transition-colors shadow-sm" onclick="showToast('Fetching more developers...')">
                Load more developers
            </button>
</div>
</section>

<section className="border-t border-zinc-200 bg-white pt-24 pb-24 scroll-mt-16" id="feature-section">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 mb-6 text-blue-600">
<iconify-icon icon="solar:widget-linear" style={{strokeWidth: '1.5px'}} width="14"></iconify-icon>
<span className="text-xs font-medium">For Developers</span>
</div>
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-6">
                    Manage your freelance career from one dashboard.
                </h2>
<p className="text-base text-zinc-500 mb-8 leading-relaxed">
                    Create a comprehensive portfolio, set your availability, manage incoming requests, and get paid securely. Your developer account is your digital resume in the metaverse.
                </p>
<div className="flex flex-col gap-6">
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-medium text-zinc-900 mb-1">Showcase your work</h4>
<p className="text-sm text-zinc-500">Upload images, link directly to Roblox experiences, and highlight your technical stack.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:wallet-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-medium text-zinc-900 mb-1">Set your rates &amp; get paid</h4>
<p className="text-sm text-zinc-500">Process payments securely through our escrow system. Withdraw directly to your bank or Roblox account.</p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center shrink-0">
<iconify-icon className="text-zinc-600" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}} width="16"></iconify-icon>
</div>
<div>
<h4 className="text-base tracking-tight font-medium text-zinc-900 mb-1">Manage availability</h4>
<p className="text-sm text-zinc-500">Toggle your status to 'Available for hire' or hide your profile when fully booked.</p>
</div>
</div>
</div>
<button className="mt-10 px-6 py-3 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-colors shadow-sm" onclick="showToast('Redirecting to registration page...')">
                    Create Developer Account
                </button>
</div>

<div className="bg-zinc-50 border border-zinc-200 rounded-2xl p-6 shadow-sm relative overflow-hidden">
<div className="flex items-center justify-between mb-8 border-b border-zinc-200 pb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-zinc-200 border border-zinc-300"></div>
<div>
<div className="w-24 h-4 bg-zinc-200 rounded mb-2"></div>
<div className="w-16 h-3 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="px-3 py-1 bg-green-50 border border-green-100 text-green-600 text-xs rounded-full">Available</div>
</div>
<div className="grid grid-cols-2 gap-4 mb-8">
<div className="bg-white border border-zinc-200 p-4 rounded-xl">
<div className="w-20 h-3 bg-zinc-100 rounded mb-3"></div>
<div className="w-12 h-6 bg-zinc-200 rounded"></div>
</div>
<div className="bg-white border border-zinc-200 p-4 rounded-xl">
<div className="w-24 h-3 bg-zinc-100 rounded mb-3"></div>
<div className="w-16 h-6 bg-zinc-200 rounded"></div>
</div>
</div>
<div className="w-32 h-4 bg-zinc-200 rounded mb-4"></div>
<div className="space-y-3">
<div className="bg-white border border-zinc-200 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-100 rounded-lg"></div>
<div>
<div className="w-32 h-3 bg-zinc-200 rounded mb-1.5"></div>
<div className="w-20 h-2 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="w-16 h-6 bg-zinc-100 rounded-full"></div>
</div>
<div className="bg-white border border-zinc-200 p-4 rounded-xl flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-zinc-100 rounded-lg"></div>
<div>
<div className="w-24 h-3 bg-zinc-200 rounded mb-1.5"></div>
<div className="w-16 h-2 bg-zinc-100 rounded"></div>
</div>
</div>
<div className="w-16 h-6 bg-zinc-100 rounded-full"></div>
</div>
</div>
<div className="absolute -bottom-24 -right-24 w-64 h-64 bg-blue-500/10 blur-3xl rounded-full pointer-events-none"></div>
</div>
</div>
</section>

<section className="border-t border-zinc-200 bg-zinc-50 pt-24 pb-24 scroll-mt-16" id="pricing-section">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl tracking-tight font-medium text-zinc-900 mb-4">
                    Simple, transparent platform fees
                </h2>
<p className="text-base text-zinc-500 max-w-xl mx-auto">
                    Start for free and let our platform find your next client. Upgrade to Pro when you're ready to maximize your freelance revenue.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="bg-white border border-zinc-200 rounded-2xl p-8 flex flex-col shadow-sm">
<h3 className="text-lg font-medium text-zinc-900 mb-2">Basic Profile</h3>
<p className="text-sm text-zinc-500 mb-6 flex-1">Perfect for new developers building their initial client base and portfolio.</p>
<div className="mb-8">
<span className="text-4xl tracking-tight font-medium text-zinc-900">Free</span>
<p className="text-sm text-zinc-500 mt-2">10% commission on completed jobs</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Standard marketplace listing
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Up to 3 portfolio projects
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Secure escrow payments
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-600">
<iconify-icon className="text-zinc-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Basic analytics
                        </li>
</ul>
<button className="w-full py-2.5 px-4 bg-zinc-100 text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-200 transition-colors mt-auto" onclick="showToast('Starting registration...')">
                        Get Started
                    </button>
</div>

<div className="bg-zinc-900 border border-zinc-800 rounded-2xl p-8 flex flex-col shadow-md relative overflow-hidden">
<div className="absolute top-0 right-0 px-3 py-1 bg-blue-500 text-white text-xs font-medium rounded-bl-lg">Recommended</div>
<h3 className="text-lg font-medium text-white mb-2">Developer Pro</h3>
<p className="text-sm text-zinc-400 mb-6 flex-1">For top-tier talent looking to increase visibility and keep 100% of their earnings.</p>
<div className="mb-8 flex flex-col">
<div className="flex items-baseline gap-1">
<span className="text-4xl tracking-tight font-medium text-white">$15</span>
<span className="text-sm text-zinc-400">/month</span>
</div>
<p className="text-sm text-zinc-400 mt-2">0% commission (Keep 100% of earnings)</p>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Featured top-placement in search
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            "Verified Pro" profile badge
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Unlimited portfolio projects
                        </li>
<li className="flex items-center gap-3 text-sm text-zinc-300">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}} width="18"></iconify-icon>
                            Advanced profile analytics
                        </li>
</ul>
<button className="w-full py-2.5 px-4 bg-white text-zinc-900 rounded-lg text-sm font-medium hover:bg-zinc-100 transition-colors mt-auto" onclick="showToast('Redirecting to checkout...')">
                        Upgrade to Pro
                    </button>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-zinc-200 pt-16 pb-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col items-center text-center">
<a className="text-lg tracking-tighter font-medium text-zinc-900 mb-6" href="#">RBLXWORK</a>
<div className="flex flex-wrap justify-center gap-6 mb-10">
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#search-section">Find Developers</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Post a Job</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#pricing-section">Pricing</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#feature-section">Create Profile</a>
<a className="text-sm text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Terms of Service</a>
</div>
<p className="text-xs text-zinc-400">
                © 2024 RBLXWORK. Not affiliated with Roblox Corporation.
            </p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3 pointer-events-none" id="toast-container"></div>


    </>
  );
}
