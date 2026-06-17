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



    // --- Mobile Menu Logic (Existing) ---
    (function () {
        const toggleBtn = document.getElementById('mobile-menu-toggle');
        const menu = document.getElementById('mobile-menu');
        if (!toggleBtn || !menu) return;

        const icon = toggleBtn.querySelector('iconify-icon');

        function openMenu() {
            menu.classList.remove('opacity-0', 'pointer-events-none');
            menu.setAttribute('aria-hidden', 'false');
            if (icon) icon.setAttribute('icon', 'solar:close-circle-linear');
            document.body.style.overflow = 'hidden';
        }

        function closeMenu() {
            menu.classList.add('opacity-0', 'pointer-events-none');
            menu.setAttribute('aria-hidden', 'true');
            if (icon) icon.setAttribute('icon', 'solar:hamburger-menu-linear');
            document.body.style.overflow = '';
        }

        function isOpen() { return !menu.classList.contains('opacity-0'); }

        toggleBtn.addEventListener('click', () => { isOpen() ? closeMenu() : openMenu(); });
    })();

    // --- Slider Logic (Existing) ---
    const cards = document.querySelectorAll('.slider-card');
    const prevBtn = document.getElementById('prevBtn');
    const nextBtn = document.getElementById('nextBtn');
    let currentIndex = 0;
    
    if(cards.length > 0 && prevBtn && nextBtn) {
        const totalCards = cards.length;
        function showCard(index) {
            cards.forEach((card, i) => {
                if (i === index) {
                    card.classList.remove('card-hidden');
                    card.classList.add('card-active');
                } else {
                    card.classList.add('card-hidden');
                    card.classList.remove('card-active');
                }
            });
        }
        function nextCard() { currentIndex = (currentIndex + 1) % totalCards; showCard(currentIndex); }
        function prevCard() { currentIndex = (currentIndex - 1 + totalCards) % totalCards; showCard(currentIndex); }
        nextBtn.addEventListener('click', () => { nextCard(); resetInterval(); });
        prevBtn.addEventListener('click', () => { prevCard(); resetInterval(); });
        let autoSlide = setInterval(nextCard, 4000);
        function resetInterval() { clearInterval(autoSlide); autoSlide = setInterval(nextCard, 4000); }
    }

    // --- VIEW SWITCHER LOGIC (New) ---
    function toggleView(viewName) {
        const landing = document.getElementById('landing-view');
        const dashboard = document.getElementById('dashboard-view');
        
        if (viewName === 'dashboard') {
            landing.style.opacity = '0';
            setTimeout(() => {
                landing.style.display = 'none';
                dashboard.style.display = 'flex';
                // Trigger reflow
                void dashboard.offsetWidth; 
                dashboard.style.opacity = '1';
                
                // Close mobile menu if open
                const menu = document.getElementById('mobile-menu');
                if(!menu.classList.contains('opacity-0')) {
                    menu.classList.add('opacity-0', 'pointer-events-none');
                    document.body.style.overflow = '';
                }
            }, 500);
        } else {
            dashboard.style.opacity = '0';
            setTimeout(() => {
                dashboard.style.display = 'none';
                landing.style.display = 'block';
                // Trigger reflow
                void landing.offsetWidth;
                landing.style.opacity = '1';
            }, 300);
        }
    }

    // --- PREVIEWER LOGIC (New) ---
    function updatePreview() {
        const imgUrl = document.getElementById('image-url-input').value;
        const username = document.getElementById('username-input').value;
        const location = document.getElementById('location-input').value;
        const caption = document.getElementById('caption-input').value;

        // Update Elements
        if(imgUrl) {
            document.getElementById('preview-image').src = imgUrl;
            document.getElementById('upload-preview').src = imgUrl;
        }
        
        if(username) {
            document.getElementById('preview-username').innerText = username;
            document.getElementById('preview-username-caption').innerText = username;
        }

        if(location) {
            document.getElementById('preview-location').innerText = location;
            document.getElementById('preview-location').parentElement.style.display = 'flex';
        } else {
            document.getElementById('preview-location').parentElement.style.display = 'none';
        }

        if(caption) document.getElementById('preview-caption').innerText = caption;
    }

    function toggleLikes() {
        const container = document.getElementById('likes-container');
        if (container.style.display === 'none') {
            container.style.display = 'block';
        } else {
            container.style.display = 'none';
        }
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
      



<div className="transition-opacity duration-500" id="landing-view">

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<a className="flex items-center gap-2" href="/">
<span className="font-jakarta font-extrabold text-3xl tracking-tighter text-black">amplfy.</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#">Pricing</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="#">About</a>

<button className="text-sm font-medium text-gray-600 hover:text-black transition-colors" onclick="toggleView('dashboard')">Log in</button>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<button className="flex items-center gap-2 bg-black text-white px-4 py-2 md:px-5 md:py-2.5 rounded-full text-xs md:text-sm font-medium hover:bg-gray-800 transition-all hover:pr-6 duration-300 group" onclick="toggleView('dashboard')">
            Start Growing
            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 transition-colors" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-white opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#">About</a>
<a className="text-3xl font-medium tracking-tight text-gray-900" href="#">Services</a>
<button className="text-3xl font-medium tracking-tight text-gray-900" onclick="toggleView('dashboard')">Login</button>
</div>

<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-30">
<iconify-icon icon="logos:pinterest" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-20">
<iconify-icon icon="logos:instagram-icon" width="14"></iconify-icon>
</div>
<div className="w-8 h-8 rounded-full bg-white border border-gray-100 flex items-center justify-center shadow-sm z-10">
<iconify-icon icon="logos:tiktok-icon" width="14"></iconify-icon>
</div>
</div>
<span className="text-sm font-medium text-gray-500 tracking-wide uppercase">Trusted by 500+ brands</span>
</div>

<h1 className="animate-enter delay-200 text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-gray-900">
                    Content that <br/>
<span className="font-serif italic font-medium">converts.</span>
</h1>

<p className="animate-enter delay-300 text-lg md:text-xl text-gray-500 leading-relaxed max-w-md">
                    We combine data-driven strategy, creative production, and paid media to help brands explode their reach and turn followers into revenue.
                </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-black text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-200" onclick="toggleView('dashboard')">
                        Book a Strategy Call
                        <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-gray-600 font-medium hover:text-black flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                        View Showreel
                    </button>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-orange-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<button className="absolute left-0 md:left-12 lg:-left-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-white rounded-full shadow-lg border border-gray-100 flex items-center justify-center text-gray-800 hover:scale-110 transition-transform cursor-pointer" id="prevBtn">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
</button>
<button className="absolute right-0 md:right-12 lg:-right-4 top-1/2 -translate-y-1/2 z-20 w-12 h-12 bg-black text-white rounded-full shadow-lg border border-gray-900 flex items-center justify-center hover:scale-110 transition-transform cursor-pointer" id="nextBtn">
<iconify-icon icon="solar:arrow-right-linear" width="24"></iconify-icon>
</button>

<div className="relative w-[300px] h-[600px] bg-white rounded-[2.5rem] shadow-2xl border-[8px] border-white ring-1 ring-gray-900/5 overflow-hidden transform rotate-0 hover:rotate-0 transition-transform duration-500 mr-auto ml-auto">

<div className="absolute top-0 left-1/2 -translate-x-1/2 h-6 w-28 bg-black rounded-b-xl z-30"></div>

<div className="absolute top-2 w-full px-5 flex justify-between text-[10px] font-semibold text-white/90 z-30 mix-blend-difference">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-linear"></iconify-icon>
<iconify-icon icon="solar:wifi-linear"></iconify-icon>
<iconify-icon icon="solar:battery-full-linear"></iconify-icon>
</div>
</div>

<div className="w-full h-full relative bg-gray-900" id="sliderContainer" style={{}}>

<div className="slider-card card-active w-full h-full absolute top-0 right-0 bottom-0 left-0">
<img alt="Fashion Post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515886657613-9f3515b0c78f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>

<div className="slider-card card-hidden absolute inset-0 w-full h-full">
<img alt="Tech Post" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550009158-9ebf69173e03?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>

<div className="mt-24 lg:mt-32 animate-enter delay-500">
<p className="text-xs text-gray-400 font-semibold uppercase tracking-widest mb-8">Brands we've helped grow on social</p>
<div className="flex flex-wrap items-center gap-x-12 gap-y-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon height="26" icon="simple-icons:nike" width="72"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:shopify" width="96"></iconify-icon>
<iconify-icon height="24" icon="simple-icons:netflix" width="86"></iconify-icon>
<iconify-icon height="28" icon="simple-icons:spotify" width="96"></iconify-icon>
</div>
</div>
</main>
</div>



<div className="fixed inset-0 z-[1000] bg-[#E3DDD7] hidden flex flex-col md:flex-row overflow-hidden transition-opacity duration-300 opacity-0" id="dashboard-view">

<aside className="w-full md:w-64 bg-[#E3DDD7] md:border-r border-gray-900/10 flex flex-col justify-between shrink-0 h-16 md:h-full z-50">
<div className="px-6 py-4 md:py-8 flex items-center justify-between md:block">
<div className="flex items-center gap-2 mb-0 md:mb-10 cursor-pointer" onclick="toggleView('landing')">
<span className="font-jakarta font-extrabold text-2xl tracking-tighter text-black">amplfy.</span>
</div>

<button className="md:hidden text-2xl" onclick="document.getElementById('dash-nav').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>

<nav className="hidden md:flex flex-col gap-2 absolute md:relative top-16 left-0 w-full bg-[#E3DDD7] p-6 md:p-0 border-b md:border-none border-gray-900/10 shadow-xl md:shadow-none" id="dash-nav">
<a className="flex items-center gap-3 px-4 py-3 bg-white/60 text-black rounded-xl font-medium shadow-sm" href="#">
<iconify-icon icon="solar:iphone-linear" width="20"></iconify-icon>
                    Previewer
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/40 hover:text-black rounded-xl font-medium transition-colors" href="#">
<iconify-icon icon="solar:folder-open-linear" width="20"></iconify-icon>
                    Projects
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/40 hover:text-black rounded-xl font-medium transition-colors" href="#">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
                    Team
                </a>
<a className="flex items-center gap-3 px-4 py-3 text-gray-600 hover:bg-white/40 hover:text-black rounded-xl font-medium transition-colors" href="#">
<iconify-icon icon="solar:chart-2-linear" width="20"></iconify-icon>
                    Analytics
                </a>
</nav>
</div>
<div className="hidden md:flex flex-col gap-4 px-6 py-6 border-t border-gray-900/10">
<div className="flex items-center gap-3 px-2">
<div className="w-8 h-8 rounded-full bg-gray-900 text-white flex items-center justify-center text-xs font-bold">JD</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-gray-900">John Doe</span>
<span className="text-[10px] text-gray-500">Pro Plan</span>
</div>
</div>
<button className="flex items-center gap-2 text-xs font-semibold text-gray-500 hover:text-black px-2 transition-colors" onclick="toggleView('landing')">
<iconify-icon icon="solar:logout-2-linear" width="16"></iconify-icon>
                Log out
            </button>
</div>
</aside>

<main className="flex-1 flex flex-col md:flex-row overflow-hidden relative">

<div className="w-full md:w-[450px] lg:w-[500px] overflow-y-auto p-6 md:p-10 shrink-0 no-scrollbar pb-32 md:pb-10">
<div className="mb-8">
<div className="flex items-center gap-2 text-gray-500 text-xs font-bold uppercase tracking-wider mb-2">
<span className="bg-white/50 px-2 py-1 rounded">Editor</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span>New Post</span>
</div>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">Customize Content</h2>
</div>
<div className="space-y-8">

<div className="bg-white/40 backdrop-blur-sm border border-white/40 p-6 rounded-[2rem]">
<h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
                        Media
                    </h3>
<div className="relative group cursor-pointer">
<div className="aspect-video w-full rounded-2xl bg-white border-2 border-dashed border-gray-300 flex flex-col items-center justify-center gap-2 hover:border-black transition-colors overflow-hidden">

<img className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" id="upload-preview" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="relative z-10 flex flex-col items-center">
<div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center mb-2 shadow-lg">
<iconify-icon icon="solar:upload-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-900 bg-white/80 px-2 py-1 rounded-md">Change Image</span>
</div>
</div>
</div>
<div className="mt-4">
<label className="text-xs font-semibold text-gray-500 mb-1.5 block">Image URL</label>
<input className="input-field" id="image-url-input" oninput="updatePreview()" type="text" value="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="bg-white/40 backdrop-blur-sm border border-white/40 p-6 rounded-[2rem]">
<h3 className="text-sm font-bold text-gray-900 mb-4 flex items-center gap-2">
<iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
                        Details
                    </h3>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="text-xs font-semibold text-gray-500 mb-1.5 block">Username</label>
<input className="input-field" id="username-input" oninput="updatePreview()" type="text" value="glowhaus.co"/>
</div>
<div>
<label className="text-xs font-semibold text-gray-500 mb-1.5 block">Location</label>
<input className="input-field" id="location-input" oninput="updatePreview()" type="text" value="Los Angeles, CA"/>
</div>
</div>
<div className="mb-4">
<label className="text-xs font-semibold text-gray-500 mb-1.5 block">Caption</label>
<textarea className="input-field resize-none" id="caption-input" oninput="updatePreview()" rows="3">Glow up your routine ✨ The new summer collection is finally here. #skincare #summer</textarea>
</div>
<div className="flex items-center justify-between bg-white/50 p-3 rounded-xl">
<div className="flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:heart-angle-linear"></iconify-icon>
<span className="text-sm font-medium text-gray-700">Show Like Count</span>
</div>
<input checked="" className="w-5 h-5 text-black rounded focus:ring-black accent-black" onchange="toggleLikes()" type="checkbox"/>
</div>
</div>

<button className="w-full bg-black text-white py-4 rounded-xl font-bold hover:bg-gray-800 transition-transform active:scale-95 flex items-center justify-center gap-2">
<iconify-icon icon="solar:download-linear" width="20"></iconify-icon>
                    Export Preview
                </button>
</div>
</div>

<div className="flex-1 bg-gray-50/50 relative flex items-center justify-center p-8 md:p-12 overflow-hidden border-l border-gray-900/5">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>


<div className="relative bg-gray-900 rounded-[3rem] shadow-2xl p-3 max-w-[360px] w-full mx-auto select-none border-[6px] border-gray-800 ring-1 ring-gray-900/50 transform transition-transform duration-500 hover:scale-[1.02]">

<div className="absolute top-3 left-1/2 -translate-x-1/2 z-20">
<div className="bg-black rounded-full w-28 h-7 flex items-center justify-end px-3 gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-green-500/20"></div>
<div className="w-1.5 h-1.5 rounded-full bg-blue-500/20"></div>
</div>
</div>

<div className="relative bg-white rounded-[2.5rem] overflow-hidden h-[680px] w-full flex flex-col">

<div className="h-12 w-full flex justify-between items-end px-6 pb-2 text-[10px] font-semibold z-10">
<span>9:41</span>
<div className="flex gap-1">
<iconify-icon icon="solar:signal-bold"></iconify-icon>
<iconify-icon icon="solar:wifi-bold"></iconify-icon>
<iconify-icon icon="solar:battery-full-bold"></iconify-icon>
</div>
</div>

<div className="h-12 w-full flex justify-between items-center px-4 border-b border-gray-50 z-10 bg-white">
<iconify-icon icon="solar:arrow-left-linear" width="24"></iconify-icon>
<span className="font-bold text-xs uppercase tracking-wide text-gray-400">Posts</span>
<iconify-icon icon="solar:menu-dots-bold" width="24"></iconify-icon>
</div>

<div className="flex-1 overflow-y-auto no-scrollbar bg-white">

<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-yellow-400 to-purple-600 p-[2px]">
<div className="w-full h-full bg-white rounded-full p-[2px]">
<img className="w-full h-full object-cover rounded-full" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
<div className="flex flex-col">
<span className="text-xs font-bold text-gray-900 leading-none" id="preview-username">glowhaus.co</span>
<span className="text-[10px] text-gray-500 leading-tight mt-0.5" id="preview-location">Los Angeles, CA</span>
</div>
</div>
<iconify-icon icon="solar:menu-dots-linear" width="20"></iconify-icon>
</div>

<div className="w-full aspect-[4/5] bg-gray-100 relative">
<img className="w-full h-full object-cover" id="preview-image" src="https://images.unsplash.com/photo-1616683693504-3ea7e9ad6fec?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>

<div className="px-4 py-3">
<div className="flex justify-between items-center mb-3">
<div className="flex gap-4">
<iconify-icon className="hover:text-red-500 transition-colors" icon="solar:heart-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:chat-round-linear" width="24"></iconify-icon>
<iconify-icon icon="solar:paper-plane-linear" width="24"></iconify-icon>
</div>
<iconify-icon icon="solar:bookmark-linear" width="24"></iconify-icon>
</div>

<div className="mb-2" id="likes-container">
<span className="text-xs font-bold text-gray-900">1,284 likes</span>
</div>

<div className="text-xs text-gray-900 leading-relaxed">
<span className="font-bold mr-1" id="preview-username-caption">glowhaus.co</span>
<span id="preview-caption">Glow up your routine ✨ The new summer collection is finally here. #skincare #summer</span>
</div>
<div className="mt-2 text-[10px] text-gray-400 uppercase">2 hours ago</div>
</div>
</div>

<div className="h-12 w-full border-t border-gray-100 flex justify-between items-center px-6 bg-white z-10">
<iconify-icon className="text-black" icon="solar:home-2-bold" width="24"></iconify-icon>
<iconify-icon className="text-gray-400" icon="solar:magnifer-linear" width="24"></iconify-icon>
<iconify-icon className="text-gray-400" icon="solar:videocamera-record-linear" width="24"></iconify-icon>
<iconify-icon className="text-gray-400" icon="solar:bag-linear" width="24"></iconify-icon>
<div className="w-6 h-6 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 pointer-events-none z-30">
<div className="bg-gray-700/50 rounded-full w-32 h-1"></div>
</div>
</div>
</div>
</main>
</div>





    </>
  );
}
