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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function navigateTo(view) {
            document.getElementById('view-login').classList.add('hidden');
            document.getElementById('view-reset').classList.add('hidden');
            document.getElementById('view-admin').classList.add('hidden');
            
            document.getElementById(`view-${view}`).classList.remove('hidden');
        }

        function switchTab(tabId) {
            // Hide all tabs
            ['quotes', 'gallery', 'reviews'].forEach(id => {
                document.getElementById(`tab-${id}`).classList.add('hidden');
                
                // Reset Nav styles
                const navBtn = document.getElementById(`nav-${id}`);
                navBtn.classList.remove('bg-zinc-50', 'text-zinc-900');
                navBtn.classList.add('text-zinc-500');
            });

            // Show selected tab
            document.getElementById(`tab-${tabId}`).classList.remove('hidden');
            
            // Set active Nav style
            const activeNav = document.getElementById(`nav-${tabId}`);
            activeNav.classList.remove('text-zinc-500');
            activeNav.classList.add('bg-zinc-50', 'text-zinc-900');
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
      

<div className="flex-grow flex items-center justify-center p-6 relative" id="view-login">

<div className="absolute top-0 right-0 w-full h-full bg-gradient-to-bl from-zinc-200/40 to-transparent -z-10 rounded-bl-[100px] blur-3xl opacity-50"></div>
<div className="w-full max-w-sm">
<div className="flex flex-col items-center mb-8">
<span className="text-xl tracking-tighter font-medium text-zinc-900 uppercase">A U R A</span>
<span className="text-xs font-light text-zinc-500 mt-2 tracking-widest uppercase">Workspace</span>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
<h1 className="text-lg font-medium text-zinc-900 mb-6 tracking-tight">Sign In</h1>
<form className="flex flex-col gap-6" id="login-form" onsubmit="event.preventDefault(); navigateTo('admin');">
<div className="relative pt-4">
<input className="peer w-full border-b border-zinc-200 bg-transparent py-2 text-sm text-zinc-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300" id="login-email" placeholder="Email Address" required="" type="email" value="admin@auramoving.com"/>
<label className="absolute left-0 top-1 text-xs text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#D4AF37]" htmlFor="login-email">Email Address</label>
</div>
<div className="relative pt-4 mb-2">
<input className="peer w-full border-b border-zinc-200 bg-transparent py-2 text-sm text-zinc-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300" id="login-password" placeholder="Password" required="" type="password" value="password"/>
<label className="absolute left-0 top-1 text-xs text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#D4AF37]" htmlFor="login-password">Password</label>
</div>
<button className="w-full py-3 bg-zinc-900 text-[#FAF9F6] text-xs font-medium rounded-xl hover:bg-zinc-800 transition-all duration-300" type="submit">
                        Authenticate
                    </button>
</form>
<div className="mt-6 text-center">
<button className="text-xs text-zinc-500 hover:text-[#D4AF37] transition-colors" onclick="navigateTo('reset')">Forgot your password?</button>
</div>
</div>
</div>
</div>

<div className="flex-grow flex items-center justify-center p-6 hidden relative" id="view-reset">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-zinc-200/40 to-transparent -z-10 rounded-br-[100px] blur-3xl opacity-50"></div>
<div className="w-full max-w-sm">
<div className="flex flex-col items-center mb-8">
<span className="text-xl tracking-tighter font-medium text-zinc-900 uppercase">A U R A</span>
</div>
<div className="bg-white rounded-2xl p-8 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-zinc-100">
<button className="mb-6 text-zinc-400 hover:text-zinc-900 transition-colors flex items-center gap-1 text-xs" onclick="navigateTo('login')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to login
                </button>
<h1 className="text-lg font-medium text-zinc-900 mb-2 tracking-tight">Reset Password</h1>
<p className="text-xs font-light text-zinc-500 mb-6 leading-relaxed">Enter your email and we'll send you instructions to reset your password.</p>
<form className="flex flex-col gap-6" onsubmit="event.preventDefault(); alert('Reset link sent!'); navigateTo('login');">
<div className="relative pt-4 mb-2">
<input className="peer w-full border-b border-zinc-200 bg-transparent py-2 text-sm text-zinc-900 placeholder-transparent focus:border-[#D4AF37] focus:outline-none transition-colors duration-300" id="reset-email" placeholder="Email Address" required="" type="email"/>
<label className="absolute left-0 top-1 text-xs text-zinc-400 transition-all duration-300 peer-placeholder-shown:top-6 peer-placeholder-shown:text-sm peer-focus:top-1 peer-focus:text-xs peer-focus:text-[#D4AF37]" htmlFor="reset-email">Email Address</label>
</div>
<button className="w-full py-3 bg-zinc-900 text-[#FAF9F6] text-xs font-medium rounded-xl hover:bg-zinc-800 transition-all duration-300" type="submit">
                        Send Instructions
                    </button>
</form>
</div>
</div>
</div>

<div className="flex-grow flex flex-col hidden h-screen overflow-hidden" id="view-admin">

<header className="bg-white border-b border-zinc-100 flex-shrink-0 z-20">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<span className="text-lg tracking-tighter font-medium text-zinc-900 uppercase">A U R A</span>

<nav className="hidden md:flex items-center gap-1">
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-900 bg-zinc-50 transition-colors" id="nav-quotes" onclick="switchTab('quotes')">
                            Quotes
                        </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" id="nav-gallery" onclick="switchTab('gallery')">
                            Gallery
                        </button>
<button className="px-4 py-2 rounded-lg text-sm font-medium text-zinc-500 hover:text-zinc-900 hover:bg-zinc-50 transition-colors" id="nav-reviews" onclick="switchTab('reviews')">
                            Reviews
                        </button>
</nav>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex items-center gap-3 pr-4 border-r border-zinc-100">
<div className="text-right">
<p className="text-xs font-medium text-zinc-900">Admin User</p>
<p className="text-[10px] text-zinc-400">Workspace</p>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-[#D4AF37]">
<iconify-icon icon="solar:user-rounded-linear"></iconify-icon>
</div>
</div>
<button className="text-zinc-400 hover:text-zinc-900 transition-colors p-2 rounded-lg hover:bg-zinc-50" onclick="navigateTo('login')" title="Sign Out">
<iconify-icon icon="solar:logout-2-linear" width="20"></iconify-icon>
</button>

<button className="md:hidden text-zinc-600 p-2" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t border-zinc-100 bg-white px-4 py-2" id="mobile-menu">
<div className="flex flex-col gap-1 pb-4">
<button className="text-left px-4 py-3 rounded-lg text-sm font-medium text-zinc-900 bg-zinc-50" onclick="switchTab('quotes'); document.getElementById('mobile-menu').classList.add('hidden')">Quotes</button>
<button className="text-left px-4 py-3 rounded-lg text-sm font-medium text-zinc-500" onclick="switchTab('gallery'); document.getElementById('mobile-menu').classList.add('hidden')">Gallery</button>
<button className="text-left px-4 py-3 rounded-lg text-sm font-medium text-zinc-500" onclick="switchTab('reviews'); document.getElementById('mobile-menu').classList.add('hidden')">Reviews</button>
</div>
</div>
</header>

<main className="flex-grow overflow-y-auto p-6 scroll-smooth">
<div className="max-w-7xl mx-auto w-full">

<div className="fade-in block" id="tab-quotes">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Quote Requests</h2>
<p className="text-xs font-light text-zinc-500 mt-1">Manage and respond to client inquiries.</p>
</div>
<div className="flex items-center gap-2 bg-white border border-zinc-200 rounded-lg p-1">
<button className="px-3 py-1.5 rounded bg-zinc-100 text-xs font-medium text-zinc-900 shadow-sm">All</button>
<button className="px-3 py-1.5 rounded text-xs font-medium text-zinc-500 hover:text-zinc-900">New</button>
<button className="px-3 py-1.5 rounded text-xs font-medium text-zinc-500 hover:text-zinc-900">Archived</button>
</div>
</div>

<div className="bg-white rounded-2xl border border-zinc-100 shadow-[0_4px_20px_rgb(0,0,0,0.02)] overflow-hidden">

<div className="hidden md:grid grid-cols-12 gap-4 p-4 border-b border-zinc-100 bg-zinc-50/50 text-xs font-medium text-zinc-500 uppercase tracking-wider">
<div className="col-span-3">Client</div>
<div className="col-span-4">Route Details</div>
<div className="col-span-2">Date</div>
<div className="col-span-2">Status</div>
<div className="col-span-1 text-right">Actions</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50/50 transition-colors group">
<div className="md:col-span-3 flex flex-col">
<span className="text-sm font-medium text-zinc-900">Eleanor Roosevelt</span>
<span className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 555-0198</span>
<span className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5"><iconify-icon icon="solar:letter-linear"></iconify-icon> eleanor@example.com</span>
</div>
<div className="md:col-span-4 flex flex-col gap-2">
<div className="flex items-start gap-2">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs text-zinc-600">124 Manhattan Ave, NY (2nd Fl)</span>
</div>
<div className="w-px h-3 bg-zinc-200 ml-1.5"></div>
<div className="flex items-start gap-2">
<iconify-icon className="text-[#D4AF37] mt-0.5" icon="solar:routing-2-linear"></iconify-icon>
<span className="text-xs text-zinc-600">890 Beverly Blvd, LA (House)</span>
</div>
</div>
<div className="md:col-span-2 text-xs text-zinc-500">
                                Oct 24, 2023<br/><span className="text-[10px] text-zinc-400">2 hours ago</span>
</div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-[#D4AF37]/10 text-[#B8942E] border border-[#D4AF37]/20">
<span className="w-1.5 h-1.5 rounded-full bg-[#D4AF37]"></span> New
                                </span>
</div>
<div className="md:col-span-1 flex items-center justify-end gap-2">
<button className="p-2 text-zinc-400 hover:text-[#D4AF37] bg-white rounded-lg border border-zinc-100 hover:border-[#D4AF37]/30 transition-all shadow-sm" title="View Details">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-12 gap-4 p-4 border-b border-zinc-100 items-center hover:bg-zinc-50/50 transition-colors group">
<div className="md:col-span-3 flex flex-col">
<span className="text-sm font-medium text-zinc-900">Marcus Thorne</span>
<span className="text-xs text-zinc-500 flex items-center gap-1 mt-0.5"><iconify-icon icon="solar:phone-linear"></iconify-icon> +1 555-8821</span>
</div>
<div className="md:col-span-4 flex flex-col gap-2">
<div className="flex items-start gap-2">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:map-point-linear"></iconify-icon>
<span className="text-xs text-zinc-600">Corporate HQ, Chicago</span>
</div>
<div className="w-px h-3 bg-zinc-200 ml-1.5"></div>
<div className="flex items-start gap-2">
<iconify-icon className="text-zinc-400 mt-0.5" icon="solar:routing-2-linear"></iconify-icon>
<span className="text-xs text-zinc-600">New Branch, Austin</span>
</div>
</div>
<div className="md:col-span-2 text-xs text-zinc-500">
                                Oct 23, 2023
                            </div>
<div className="md:col-span-2 flex items-center">
<span className="inline-flex items-center gap-1.5 px-2.5 py-1 rounded-full text-[10px] font-medium bg-zinc-100 text-zinc-600 border border-zinc-200">
<span className="w-1.5 h-1.5 rounded-full bg-zinc-400"></span> Reviewed
                                </span>
</div>
<div className="md:col-span-1 flex items-center justify-end gap-2">
<button className="p-2 text-zinc-400 hover:text-zinc-900 bg-white rounded-lg border border-zinc-100 hover:border-zinc-300 transition-all shadow-sm" title="View Details">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="hidden fade-in" id="tab-gallery">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Media Gallery</h2>
<p className="text-xs font-light text-zinc-500 mt-1">Manage website images and video content.</p>
</div>
<button className="px-4 py-2 bg-zinc-900 text-white text-xs font-medium rounded-lg flex items-center gap-2 hover:bg-zinc-800 transition-colors shadow-sm hover:shadow-md">
<iconify-icon icon="solar:upload-linear"></iconify-icon> Upload Media
                        </button>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">

<div className="aspect-square rounded-2xl border-2 border-dashed border-zinc-200 bg-zinc-50/50 flex flex-col items-center justify-center gap-2 cursor-pointer hover:border-[#D4AF37]/50 hover:bg-[#D4AF37]/5 transition-all group">
<div className="w-10 h-10 rounded-full bg-white shadow-sm flex items-center justify-center text-zinc-400 group-hover:text-[#D4AF37] transition-colors">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-zinc-500 group-hover:text-zinc-900">Drop files here</span>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-between items-start">
<span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] rounded uppercase tracking-wider">Hero</span>
<button className="text-white hover:text-red-400 transition-colors bg-black/20 p-1.5 rounded-lg backdrop-blur-md">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 text-white text-xs">
<iconify-icon icon="solar:gallery-linear"></iconify-icon> Minimalist Interior
                                </div>
</div>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1581578731548-c64695cc6952?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4">
<div className="flex justify-between items-start">
<span className="px-2 py-1 bg-black/50 backdrop-blur-sm text-white text-[10px] rounded uppercase tracking-wider">Gallery</span>
<button className="text-white hover:text-red-400 transition-colors bg-black/20 p-1.5 rounded-lg backdrop-blur-md">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 text-white text-xs">
<iconify-icon icon="solar:gallery-linear"></iconify-icon> Living Space
                                </div>
</div>
</div>

<div className="aspect-square rounded-2xl overflow-hidden relative group shadow-[0_4px_20px_rgb(0,0,0,0.04)]">
<img alt="Gallery" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1577705998148-6da4f3963bc8?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center z-10 pointer-events-none">
<div className="w-10 h-10 rounded-full bg-white/90 backdrop-blur-sm flex items-center justify-center text-zinc-900 shadow-lg">
<iconify-icon icon="solar:play-linear" width="20"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-zinc-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-between p-4 z-20">
<div className="flex justify-end items-start">
<button className="text-white hover:text-red-400 transition-colors bg-black/20 p-1.5 rounded-lg backdrop-blur-md">
<iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-2 text-white text-xs">
<iconify-icon icon="solar:video-frame-linear"></iconify-icon> Packing Process
                                </div>
</div>
</div>
</div>
</div>

<div className="hidden fade-in" id="tab-reviews">
<div className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-4 mb-8">
<div>
<h2 className="text-2xl font-medium tracking-tight text-zinc-900">Client Reviews</h2>
<p className="text-xs font-light text-zinc-500 mt-1">Curate testimonials displayed on the homepage.</p>
</div>
<button className="px-4 py-2 bg-white border border-zinc-200 text-zinc-900 text-xs font-medium rounded-lg flex items-center gap-2 hover:bg-zinc-50 transition-colors shadow-sm">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon> Add Manual Review
                        </button>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative group">

<div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors" title="Edit"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-zinc-400 hover:text-red-500 transition-colors" title="Delete"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1 text-[#D4AF37]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>

<label className="flex items-center cursor-pointer gap-2" title="Toggle visibility">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider">Visible</span>
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="block h-4 w-7 rounded-full bg-zinc-200 transition-colors duration-300 peer-checked:bg-[#D4AF37]"></div>
<div className="absolute left-[2px] top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-300 ease-out peer-checked:translate-x-3 shadow-sm"></div>
</div>
</label>
</div>
<p className="text-xs font-light text-zinc-600 leading-relaxed italic flex-grow">"Flawless execution from start to finish. The team handled our antique furniture with incredible respect."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">E</div>
<div>
<p className="text-xs font-medium text-zinc-900">Eleanor R.</p>
<p className="text-[10px] text-zinc-400">Residential Move</p>
</div>
</div>
</div>

<div className="bg-white p-6 rounded-2xl border border-zinc-100 flex flex-col gap-4 shadow-[0_4px_20px_rgb(0,0,0,0.02)] relative group">

<div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors" title="Edit"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-zinc-400 hover:text-red-500 transition-colors" title="Delete"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1 text-[#D4AF37]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>

<label className="flex items-center cursor-pointer gap-2" title="Toggle visibility">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider">Visible</span>
<div className="relative">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="block h-4 w-7 rounded-full bg-zinc-200 transition-colors duration-300 peer-checked:bg-[#D4AF37]"></div>
<div className="absolute left-[2px] top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-300 ease-out peer-checked:translate-x-3 shadow-sm"></div>
</div>
</label>
</div>
<p className="text-xs font-light text-zinc-600 leading-relaxed italic flex-grow">"Relocating our entire corporate office seemed daunting, but Aura made it invisible. Zero downtime."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-50">
<div className="w-8 h-8 rounded-full bg-zinc-100 flex items-center justify-center text-xs font-medium text-zinc-500">M</div>
<div>
<p className="text-xs font-medium text-zinc-900">Marcus T.</p>
<p className="text-[10px] text-zinc-400">Corporate Relocation</p>
</div>
</div>
</div>

<div className="bg-zinc-50 p-6 rounded-2xl border border-zinc-200 flex flex-col gap-4 shadow-sm relative group opacity-80">

<div className="absolute top-4 right-4 flex items-center gap-2 opacity-0 group-hover:opacity-100 transition-opacity">
<button className="text-zinc-400 hover:text-zinc-900 transition-colors" title="Edit"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<button className="text-zinc-400 hover:text-red-500 transition-colors" title="Delete"><iconify-icon icon="solar:trash-bin-trash-linear"></iconify-icon></button>
</div>
<div className="flex items-center justify-between mt-2">
<div className="flex items-center gap-1 text-[#D4AF37]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-linear" width="14"></iconify-icon>
</div>

<label className="flex items-center cursor-pointer gap-2" title="Toggle visibility">
<span className="text-[10px] text-zinc-400 uppercase tracking-wider">Hidden</span>
<div className="relative">
<input className="peer sr-only" type="checkbox"/>
<div className="block h-4 w-7 rounded-full bg-zinc-200 transition-colors duration-300 peer-checked:bg-[#D4AF37]"></div>
<div className="absolute left-[2px] top-[2px] h-3 w-3 rounded-full bg-white transition-transform duration-300 ease-out peer-checked:translate-x-3 shadow-sm"></div>
</div>
</label>
</div>
<p className="text-xs font-light text-zinc-500 leading-relaxed italic flex-grow">"Good service overall, packing was quick. A bit pricey but worth the peace of mind."</p>
<div className="flex items-center gap-3 pt-4 border-t border-zinc-200">
<div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-xs font-medium text-zinc-400">J</div>
<div>
<p className="text-xs font-medium text-zinc-600">James K.</p>
<p className="text-[10px] text-zinc-400">Local Move</p>
</div>
</div>
</div>
</div>
</div>
</div>
</main>
</div>

<style>
        .fade-in {
            animation: fadeIn 0.4s ease-out forwards;
        }
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(5px); }
            to { opacity: 1; transform: translateY(0); }
        }
    </style>



    </>
  );
}
