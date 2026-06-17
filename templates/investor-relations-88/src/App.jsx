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



                (function() {
                const triggerBtn = document.getElementById('nav-trigger-btn');
                const dropdown = document.getElementById('nav-dropdown-card');
                const icon = document.getElementById('nav-icon');
                let isOpen = false;

                function toggleMenu(event) {
                    if(event) event.stopPropagation();
                    isOpen = !isOpen;

                    if (isOpen) {
                        // Show Menu
                        dropdown.classList.remove('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.add('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        
                        // Active Button State
                        triggerBtn.classList.add('bg-white', 'text-black', 'border-white');
                        triggerBtn.classList.remove('text-white', 'border-white/10', 'bg-black/20');
                        
                        // Icon Switch to Close
                        if(icon) {
                            icon.innerHTML = '<line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line>';
                        }
                    } else {
                        // Hide Menu
                        dropdown.classList.add('opacity-0', 'invisible', 'scale-95', 'translate-y-2');
                        dropdown.classList.remove('opacity-100', 'visible', 'scale-100', 'translate-y-0');
                        
                        // Inactive Button State
                        triggerBtn.classList.remove('bg-white', 'text-black', 'border-white');
                        triggerBtn.classList.add('text-white', 'border-white/10', 'bg-black/20');
                        
                        // Icon Switch to Hamburger
                        if(icon) {
                            icon.innerHTML = '<line x1="4" x2="20" y1="12" y2="12"/><line x1="4" x2="20" y1="6" y2="6"/><line x1="4" x2="20" y1="18" y2="18"/>';
                        }
                    }
                }

                // Click Event
                if(triggerBtn) triggerBtn.addEventListener('click', toggleMenu);

                // Close on outside click
                document.addEventListener('click', function(event) {
                    if (isOpen && dropdown && triggerBtn && !dropdown.contains(event.target) && !triggerBtn.contains(event.target)) {
                        toggleMenu();
                    }
                });
            })();
            


            (function() {
            const navRoot = document.getElementById('smart-nav-root');
            const navItems = navRoot.querySelectorAll('.js-nav-item');
            let isHovering = false;
            
            // Function to toggle between Glass and Transparent modes
            const setAppearance = (isTransparent) => {
                navItems.forEach(el => {
                    if (isTransparent) {
                        // Remove Glass Styles
                        el.classList.remove('bg-black/40', 'border-white/10', 'shadow-2xl', 'backdrop-blur-xl');
                        // Add Transparent Styles
                        el.classList.add('bg-transparent', 'border-transparent', 'shadow-none', 'backdrop-blur-none');
                    } else {
                        // Restore Glass Styles
                        el.classList.add('bg-black/40', 'border-white/10', 'shadow-2xl', 'backdrop-blur-xl');
                        el.classList.remove('bg-transparent', 'border-transparent', 'shadow-none', 'backdrop-blur-none');
                    }
                });
            };

            const handleScroll = () => {
                const currentScrollY = window.scrollY;
                
                // Sticky Behavior: Always ensure translateY is 0 to keep it visible/fixed
                navRoot.style.transform = 'translateY(0)';

                // Transparency Logic
                if (currentScrollY < 10 && !isHovering) {
                    setAppearance(true); // Transparent at top
                } else {
                    setAppearance(false); // Glass otherwise
                }
            };

            // Event Listeners
            window.addEventListener('scroll', handleScroll, { passive: true });
            
            // Hover Interactions
            navRoot.addEventListener('mouseenter', () => {
                isHovering = true;
                setAppearance(false); // Instantly show glass on hover
            });
            
            navRoot.addEventListener('mouseleave', () => {
                isHovering = false;
                if (window.scrollY < 10) {
                    setAppearance(true); // Revert to transparent if at top
                }
            });

            // Initial State Check
            handleScroll();
        })();
        


        // Header Scroll Effect (MSCI Style)
        document.addEventListener('scroll', () => {
            const nav = document.getElementById('global-nav');
            if (window.scrollY > 10) {
                // Scrolled State: Black with blur
                nav.classList.remove('bg-transparent', 'border-transparent');
                nav.classList.add('bg-black/80', 'backdrop-blur-md', 'border-white/10');
            } else {
                // Top State: Transparent
                nav.classList.add('bg-transparent', 'border-transparent');
                nav.classList.remove('bg-black/80', 'backdrop-blur-md', 'border-white/10');
            }
        });

        // Drawer Toggle Logic
        function toggleDrawer(open) {
            const drawer = document.getElementById('nav-drawer-menu');
            const overlay = document.getElementById('nav-overlay-backdrop');
            
            if (open) {
                drawer.classList.remove('translate-x-full');
                overlay.classList.remove('opacity-0', 'pointer-events-none');
            } else {
                drawer.classList.add('translate-x-full');
                overlay.classList.add('opacity-0', 'pointer-events-none');
            }
        }
    


            // Mini Carousel Logic
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.card-dot');
            let currentSlide = 0;

            function updateCarousel(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'translate-x-full', '-translate-x-full');
                        slide.classList.add('opacity-100', 'translate-x-0');
                        dots[i].classList.remove('bg-white/20');
                        dots[i].classList.add('bg-white');
                    } else if (i < index) {
                        slide.classList.add('opacity-0', '-translate-x-full');
                        slide.classList.remove('opacity-100', 'translate-x-0', 'translate-x-full');
                        dots[i].classList.add('bg-white/20');
                        dots[i].classList.remove('bg-white');
                    } else {
                        slide.classList.add('opacity-0', 'translate-x-full');
                        slide.classList.remove('opacity-100', 'translate-x-0', '-translate-x-full');
                        dots[i].classList.add('bg-white/20');
                        dots[i].classList.remove('bg-white');
                    }
                });
                currentSlide = index;
            }

            document.getElementById('card-next-btn').addEventListener('click', () => {
                const next = (currentSlide + 1) % slides.length;
                updateCarousel(next);
            });

            document.getElementById('card-prev-btn').addEventListener('click', () => {
                const prev = (currentSlide - 1 + slides.length) % slides.length;
                updateCarousel(prev);
            });
        


            function switchTab(index) {
                // Reset Buttons
                document.querySelectorAll('.tab-btn').forEach(btn => {
                    btn.classList.remove('text-white', 'bg-white/5', 'border-white/10', 'ring-1', 'ring-blue-500/50');
                    btn.classList.add('text-slate-500', 'border-transparent');
                });
                
                // Activate Button
                const activeBtn = document.getElementById(`tab-${index}`);
                activeBtn.classList.remove('text-slate-500', 'border-transparent');
                activeBtn.classList.add('text-white', 'bg-white/5', 'border-white/10', 'ring-1', 'ring-blue-500/50');

                // Hide All Content
                document.querySelectorAll('.tab-content').forEach(content => {
                    content.classList.add('hidden');
                });

                // Show Content
                document.getElementById(`content-${index}`).classList.remove('hidden');
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
      

<nav className="z-50 pointer-events-none w-full absolute top-0 left-0" id="global-nav">

<a className="pointer-events-auto z-10 hover:opacity-80 transition-opacity absolute top-8 left-8" href="#">
</a>
<div className="z-10 absolute top-8 left-8"><a className="pointer-events-auto z-10 hover:opacity-80 transition-opacity absolute top-8 left-8" href="#">
</a><a className="block group" href="#">
<img alt="TDB Logo" className="group-hover:opacity-80 transition-opacity w-auto h-12 object-contain z-10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/101e00f6-a6c0-44c6-aad1-49e6c01fa8a8_320w.png"/>
</a>
</div>

<div className="fixed pointer-events-auto z-50 transition-transform duration-500 ease-in-out top-6 right-6" id="smart-nav-root" style={{transform: 'translateY(0px)'}}>
<div className="flex gap-3 relative gap-x-6 gap-y-6 items-center">

<div className="js-nav-item hidden md:flex gap-6 transition-all duration-300 hover:bg-black/50 hover:border-white/20 h-12 border rounded-full pr-6 pl-6 gap-x-6 gap-y-6 items-center bg-black/20 backdrop-blur-sm">
<div className="flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-blue-400 transition-colors text-base font-medium text-white/90" href="#">Home</a>
<a className="hover:text-blue-400 transition-colors text-base font-medium text-white/90" href="#">Who We
                        Are</a>
<a className="hover:text-blue-400 transition-colors text-base font-medium text-white/90" href="#">Financials</a>
</div>
<div className="w-px h-4 bg-white/20"></div>
<button className="hover:text-blue-400 transition-colors text-base font-medium text-white gap-x-6 gap-y-6">EN</button>
</div>

<button className="z-50 js-nav-item flex hover:bg-black/50 hover:border-white/20 transition-all duration-300 active:scale-95 text-white bg-black/20 w-12 h-12 border rounded-full relative backdrop-blur-sm items-center justify-center" id="nav-trigger-btn">
<svg className="transition-transform duration-300" data-icon-replaced="true" fill="none" height="24" id="nav-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line className="" x1="4" x2="20" y1="12" y2="12"></line><line className="" x1="4" x2="20" y1="6" y2="6"></line><line className="" x1="4" x2="20" y1="18" y2="18"></line></svg>
</button>

<div className="flex flex-col transform transition-all duration-300 origin-top-right bg-[#050510]/80 opacity-0 w-[470px] max-w-lg border-white/10 border rounded-[32px] mt-4 pt-4 pr-4 pb-4 pl-4 absolute top-full right-0 shadow-2xl backdrop-blur-2xl translate-y-2 scale-95" id="nav-dropdown-card">

<div className="flex flex-col">

<a className="md:hidden group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#">
<span className="group-hover:text-blue-400 transition-colors text-xl font-medium text-white/90 font-google-sans-flex">Who We Are</span>
<svg className="-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 opacity-0 w-[22px] h-[22px] text-blue-400" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="md:hidden group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#">
<span className="group-hover:text-blue-400 transition-colors text-xl font-medium text-white/90 font-google-sans-flex">Financials</span>
<svg className="-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 opacity-0 w-[22px] h-[22px] text-blue-400" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between hover:bg-white/5 transition-colors border-b border-white/5 py-3 px-5 rounded-xl" href="#">
<span className="group-hover:text-blue-400 transition-colors text-xl font-medium text-white/90 font-google-sans-flex">Sustainability</span>
<svg className="-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 opacity-0 w-[22px] h-[22px] text-blue-400" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</a>

<a className="group flex items-center justify-between hover:bg-white/5 transition-colors py-3 px-5 rounded-xl" href="#">
<span className="group-hover:text-blue-400 transition-colors text-xl font-medium text-white/90 font-google-sans-flex">Newsroom</span>
<svg className="-translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 opacity-0 w-[22px] h-[22px] text-blue-400" data-icon-replaced="true" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</a>
</div>

<div className="flex flex-row gap-3 w-full border-white/10 border-t mt-2 pt-4 gap-x-3 gap-y-3 items-center">

<button className="flex-[2] flex hover:bg-slate-200 transition-colors group active:scale-95 font-semibold text-black bg-white h-12 rounded-full shadow-lg gap-x-3 gap-y-3 items-center justify-center">
<span>Contact Us</span>
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><line x1="22" x2="11" y1="2" y2="13"></line><polygon points="22 2 15 22 11 13 2 9 22 2"></polygon></svg>
</button><a className="flex-[1] flex items-center justify-center hover:bg-white/10 transition-colors gap-2 text-sm font-medium text-white h-12 border-white/20 border rounded-full" href="https://www.tdbm.mn" target="_blank">
<span className="">www.tdbm.mn</span>
<svg className="opacity-70" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M7 17L17 7"></path>
<path className="" d="M7 7h10v10"></path>
</svg>
</a>

</div>
</div>


</div>

</div>
</nav>


<div className="fixed h-[100dvh] md:w-[480px] z-[100] transform transition-transform duration-500 flex flex-col bg-[#0A0A0A] w-full border-white/10 border-l top-0 right-0 shadow-2xl translate-x-full gap-x-6 gap-y-6" id="nav-drawer-menu">

<div className="flex justify-between items-center p-8 border-b border-white/5">
<div className="flex items-center gap-3 text-white">
<span className="text-xs uppercase tracking-widest text-slate-500">Menu</span>
</div>
<button className="text-white hover:text-blue-300 transition-colors" onclick="toggleDrawer(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<nav className="flex flex-col flex-1 p-8 overflow-y-auto">
<ul className="flex flex-col gap-6">
<li><a className="text-3xl font-serif text-white hover:text-blue-400 transition-colors" href="#about" onclick="toggleDrawer(false)">About Us</a></li>
<li><a className="text-3xl font-serif text-white hover:text-blue-400 transition-colors" href="#finance" onclick="toggleDrawer(false)">Financial Data</a></li>
<li><a className="text-3xl font-serif text-white hover:text-blue-400 transition-colors" href="#esg" onclick="toggleDrawer(false)">Sustainability</a></li>
<li><a className="text-3xl font-serif text-white hover:text-blue-400 transition-colors" href="#governance" onclick="toggleDrawer(false)">Governance</a></li>
<li><a className="text-3xl font-serif text-white hover:text-blue-400 transition-colors" href="#" onclick="toggleDrawer(false)">Press Room</a></li>
</ul>
</nav>

<div className="mt-auto p-8 border-t border-white/10 bg-[#050505]">
<button className="w-full bg-blue-600 text-white h-12 rounded-lg font-medium hover:bg-blue-500 transition-colors mb-6 flex items-center justify-center gap-2 text-sm">
<span>Investor Contact</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>



<header className="relative w-full h-screen flex flex-col justify-end pb-24 overflow-hidden bg-slate-950">

<div className="absolute inset-0 z-0">

<img alt="Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute inset-0 z-10 bg-black/50"></div>
<div className="bg-gradient-to-t from-slate-950 via-transparent to-transparent z-10 absolute top-0 right-0 bottom-0 left-0"></div>

<div className="z-20 text-white w-full max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">
<div className="max-w-4xl animate-fade-in">

<div className="inline-flex items-center gap-2 mb-6">
<span className="w-2 h-2 rounded-full bg-blue-500"></span>
<span className="text-xs uppercase tracking-widest font-semibold text-white">Annual Report 2024</span>
</div>

<div className="w-full h-px bg-white/30 my-8"></div>

<div className="flex flex-col md:flex-row gap-8 md:items-end justify-between">

<p className="max-w-md text-lg text-white/90 font-light leading-relaxed">
                        As the oldest and largest commercial bank in Mongolia, we architect the financial infrastructure that connects local potential to international opportunity.
                    </p>

<div className="flex items-center gap-16">
<div className="">
<div className="text-4xl font-semibold text-white tracking-tight">30+</div>
<div className="text-xs text-white/70 uppercase tracking-widest mt-1 font-medium">Years Legacy</div>
</div>
<div className="">
<div className="text-4xl font-semibold text-white tracking-tight">$4.2B</div>
<div className="text-xs text-white/70 uppercase tracking-widest mt-1 font-medium">Total Assets</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="md:py-32 overflow-hidden bg-slate-950 pt-24 pr-6 pb-24 pl-6 relative" id="about">
<div className="max-w-7xl mx-auto h-full">
<div className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-16 items-end">
<div className="md:col-span-8">
<span className="uppercase text-xs font-semibold text-blue-500 tracking-wider mb-4 block">Who We Are</span>
<h2 className="text-4xl md:text-6xl font-serif text-white leading-[1.1]">
                        We are the bridge connecting <br/> <span className="text-slate-500">Mongolia to global markets.</span>
</h2>
</div>
<div className="md:col-span-4 flex justify-end">
<p className="text-slate-400 text-sm leading-relaxed max-w-xs text-right">
                        Trade and Development Bank of Mongolia is a leading financial institution commanding 31.8% of the total market share in corporate lending.
                    </p>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 gap-6 h-[600px] lg:h-[500px]">

<div className="lg:col-span-8 relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5">
<div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 to-purple-500/10 opacity-0 group-hover:opacity-100 transition-opacity duration-700"></div>
<img alt="Office" className="absolute inset-0 w-full h-full object-cover opacity-40 grayscale group-hover:grayscale-0 transition-all duration-700 scale-100 group-hover:scale-105" src="https://images.unsplash.com/photo-1554224155-8d04cb21cd6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent"></div>
<div className="relative z-10 p-8 h-full flex flex-col justify-end">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:star-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium text-white mb-2">A Legacy of Firsts</h3>
<p className="text-slate-300 font-light max-w-lg">
                            From issuing the first international bond to introducing digital banking, we have pioneered the modernization of Mongolia’s financial landscape.
                        </p>
</div>
</div>

<div className="lg:col-span-4 relative group rounded-3xl overflow-hidden bg-slate-900 border border-white/5 flex flex-col">
<div className="p-6 border-b border-white/5 flex justify-between items-center bg-white/[0.02]">
<span className="text-xs uppercase tracking-widest text-slate-500 font-medium">Key Sectors</span>
<div className="flex gap-2">
<button className="hover:text-white text-slate-500 transition-colors" id="card-prev-btn"><iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon></button>
<button className="hover:text-white text-slate-500 transition-colors" id="card-next-btn"><iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon></button>
</div>
</div>
<div className="relative flex-1 overflow-hidden" id="mini-carousel">

<div className="carousel-slide absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 opacity-100 translate-x-0" data-index="0">
<div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-400 flex items-center justify-center mb-6 border border-orange-500/20">
<iconify-icon className="" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-white mb-2">Mining &amp; Resources</h4>
<p className="text-slate-400 text-sm font-light">Supporting the backbone of the economy with tailored financing solutions for extraction and processing.</p>
</div>

<div className="carousel-slide absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 opacity-0 translate-x-full" data-index="1">
<div className="w-12 h-12 rounded-xl bg-emerald-500/10 text-emerald-400 flex items-center justify-center mb-6 border border-emerald-500/20">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-white mb-2">Green Energy</h4>
<p className="text-slate-400 text-sm font-light">Leading the transition to renewables with dedicated green bond frameworks and ESG initiatives.</p>
</div>

<div className="carousel-slide absolute inset-0 p-8 flex flex-col justify-center transition-all duration-500 opacity-0 translate-x-full" data-index="2">
<div className="w-12 h-12 rounded-xl bg-blue-500/10 text-blue-400 flex items-center justify-center mb-6 border border-blue-500/20">
<iconify-icon icon="solar:globus-linear" width="24"></iconify-icon>
</div>
<h4 className="text-2xl font-medium text-white mb-2">Foreign Trade</h4>
<p className="text-slate-400 text-sm font-light">Facilitating cross-border transactions with the largest correspondent banking network in the region.</p>
</div>
</div>
<div className="p-6 border-t border-white/5 flex gap-1 justify-center">
<div className="w-1.5 h-1.5 rounded-full bg-white transition-all card-dot"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-all card-dot"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/20 transition-all card-dot"></div>
</div>
</div>
</div>
</div>

</section>

<section className="font-google-sans bg-black w-full relative" id="finance">

<div className="sticky z-10 bg-black flex flex-col overflow-hidden w-full h-screen border-white/5 border-b top-0 items-start justify-end mb-[100vh] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]">

<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Foundation Era" className="opacity-60 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/a30994c9-2229-4442-ae2a-a042564904d7_3840w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/90 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0">
</div>
</div>

<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col gap-10">
<div className="flex flex-col md:flex-row items-end justify-between w-full pb-8">
<div className="w-full max-w-4xl">
<span className="uppercase block text-xl font-medium text-white tracking-widest mb-3">1990 – 2007</span>
<h2 className="leading-[1.1] md:text-5xl text-5xl font-normal text-blue-300 tracking-tight">
                            Pioneering the Market &amp; Foundation</h2>
</div>
<div className="flex gap-4 shrink-0 mb-2 hidden md:flex">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-1').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-1').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex overflow-x-auto no-scrollbar scroll-smooth mask-fade-right w-full pb-4 gap-x-16 gap-y-16 items-start" id="timeline-1">
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="group-hover:text-[#D2FF00] transition-colors text-3xl font-medium text-white">1990</span>
<p className="text-white text-base leading-relaxed font-light">Established as first state-owned commercial bank.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="group-hover:text-[#D2FF00] transition-colors text-3xl font-medium text-white">1992</span>
<p className="text-white text-base leading-relaxed font-light">First to adopt IFRS &amp; Reuters platform.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="group-hover:text-[#D2FF00] transition-colors text-3xl font-medium text-white">1993</span>
<p className="text-white text-base leading-relaxed font-light">Pioneered intl payments (AmEx, Visa, MasterCard).</p>
</div>
<div className="min-w-[300px] flex flex-col gap-4 group hover:border-[#D2FF00] transition-colors w-[300px] border-white/20 border-t pt-6 gap-x-4 gap-y-4">
<span className="group-hover:text-[#D2FF00] transition-colors text-3xl font-medium text-white">1996</span>
<p className="leading-relaxed text-base font-light text-white">First Mongolian member of SWIFT.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2001</span>
<p className="text-white text-base leading-relaxed font-light">Launched first ATM services.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2007</span>
<p className="text-white text-base leading-relaxed font-light">Issued US$75M Senior Notes (First in Mongolia).</p>
</div>
</div>
</div>
</div>

<div className="sticky z-20 bg-black flex flex-col overflow-hidden w-full h-screen border-white/5 border-b top-0 items-start justify-end mb-[100vh] shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="Global Expansion" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e3e1300d-7ac0-4b24-899c-2ef5f7d01f9f_3840w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/90 to-transparent opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col gap-10">
<div className="flex flex-col md:flex-row items-end justify-between w-full pb-8">
<div className="w-full max-w-4xl">
<span className="uppercase block text-xl font-medium text-white tracking-widest mb-3">2008 – 2019</span>
<h2 className="leading-[1.1] md:text-5xl text-5xl font-normal text-blue-300 tracking-tight">
                            Global Expansion &amp; Technology</h2>
</div>
<div className="flex gap-4 shrink-0 mb-2 hidden md:flex">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-2').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-2').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16 overflow-x-auto pb-4 no-scrollbar scroll-smooth w-full items-start mask-fade-right" id="timeline-2">
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2008</span>
<p className="text-white text-base leading-relaxed font-light">First to launch MasterCard &amp; Euro MasterCard.</p>
</div>
<div className="min-w-[300px] flex flex-col gap-4 group hover:border-[#D2FF00] transition-colors w-[300px] border-white/20 border-t pt-6 gap-x-4 gap-y-4">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2010</span>
<p className="text-white text-base leading-relaxed font-light">Repaid US$75M notes, upsized to US$300M.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2013</span>
<p className="text-white text-base leading-relaxed font-light">Established TDB Leasing &amp; Launched "TDB Online".</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2016</span>
<p className="text-white text-base leading-relaxed font-light">Clearing bank for IATA &amp; KYC/AML systems.</p>
</div>
</div>
</div>
</div>

<div className="sticky z-30 bg-black flex flex-col overflow-hidden w-full h-screen border-white/5 border-b top-0 items-start justify-end shadow-[0_-20px_60px_-15px_rgba(0,0,0,0.8)]">
<div className="z-0 absolute top-0 right-0 bottom-0 left-0">
<img alt="ESG Future" className="opacity-70 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f91e177f-8f14-4824-b2e3-d97068f8e17a_3840w.jpg"/>
<div className="bg-gradient-to-t from-black via-black/90 to-transparent absolute inset-0 opacity-50"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 pb-20 flex flex-col gap-10">
<div className="flex flex-col md:flex-row items-end justify-between w-full pb-8">
<div className="w-full max-w-4xl">
<span className="uppercase block text-xl font-medium text-white tracking-widest mb-3">2020 – 2025</span>
<h2 className="leading-[1.1] md:text-5xl text-5xl font-normal text-blue-300 tracking-tight">
                            Public Listing &amp; ESG Leadership</h2>
</div>
<div className="flex gap-4 shrink-0 mb-2 hidden md:flex">
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-3').scrollBy({left: -320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-12 h-12 rounded-full border border-white/20 flex items-center justify-center text-white hover:bg-[#D2FF00] hover:text-black hover:border-[#D2FF00] transition-all duration-300" onclick="document.getElementById('timeline-3').scrollBy({left: 320, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="flex gap-16 overflow-x-auto pb-4 no-scrollbar scroll-smooth w-full items-start mask-fade-right" id="timeline-3">
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2020</span>
<p className="text-white text-base leading-relaxed font-light">Accredited by Green Climate Fund &amp; Merged with Ulaanbaatar City Bank.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2023</span>
<p className="text-white text-base leading-relaxed font-light">IPO Success on Mongolian Stock Exchange.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2024</span>
<p className="text-white text-base leading-relaxed font-light">Partnered with BNY Mellon &amp; S&amp;P upgraded rating to B+.</p>
</div>
<div className="min-w-[300px] w-[300px] flex flex-col gap-4 border-t border-white/20 pt-6 group hover:border-[#D2FF00] transition-colors">
<span className="text-3xl font-medium text-white group-hover:text-[#D2FF00] transition-colors">2025</span>
<p className="text-white text-base leading-relaxed font-light">Moody's upgraded rating to B1.</p>
</div>
</div>
</div>
</div>
</section>

<section className="text-white bg-slate-950 pt-32 pb-32 relative" id="esg">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/2">
<div className="sticky top-32">
<span className="inline-block px-3 py-1 border border-blue-500/30 rounded-full text-[10px] uppercase tracking-widest text-blue-400 mb-6 bg-blue-500/10 backdrop-blur-sm">Our Strategy</span>
<h2 className="font-serif text-5xl md:text-7xl mb-8 leading-[0.9]">Strategic <span className="text-slate-500">Pillars</span></h2>
<p className="text-xl text-slate-400 font-light leading-relaxed mb-12">
                            To become the leading financial institution in Mongolia's development, we focus on three core anchors that drive sustainable value.
                        </p>

<div className="flex flex-col gap-4 border-l border-white/10 pl-6">
<div className="text-sm font-medium text-white transition-colors cursor-pointer hover:text-blue-400">01. Customer Centric</div>
<div className="text-sm font-medium text-slate-500 transition-colors cursor-pointer hover:text-blue-400">02. International Standard</div>
<div className="text-sm font-medium text-slate-500 transition-colors cursor-pointer hover:text-blue-400">03. Digital Platform</div>
</div>
</div>
</div>

<div className="lg:w-1/2 flex flex-col gap-12 lg:pt-32">

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-blue-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 border border-blue-500/20">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium mb-4">Customer-Centric Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Positioning customers at the heart of our operations with fair pricing, transparent conditions, and seamless distribution channels.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="Customer" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?q=80&amp;w=1932&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-emerald-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 border border-emerald-500/20">
<iconify-icon icon="solar:earth-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium mb-4">International Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Setting the benchmark for green banking and partnering with global financial institutions to bring world-class standards to Mongolia.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="International" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="group bg-slate-900 border border-white/10 rounded-[2rem] p-8 md:p-12 hover:border-purple-500/30 transition-all duration-500">
<div className="w-12 h-12 rounded-full bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 border border-purple-500/20">
<iconify-icon icon="solar:devices-linear" width="24"></iconify-icon>
</div>
<h3 className="text-3xl font-medium mb-4">Platform Bank</h3>
<p className="text-slate-400 font-light leading-relaxed mb-6">
                            Building an integrated digital ecosystem connecting banks, fintechs, and customers through open collaboration and API innovation.
                        </p>
<div className="h-48 w-full rounded-xl bg-slate-800 overflow-hidden relative">
<img alt="Platform" className="object-cover w-full h-full opacity-60 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-900 relative" id="governance">
<div className="absolute inset-0 bg-white/[0.02]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-white/10 pb-8">
<div>
<h2 className="font-serif text-5xl text-white mb-2">Corporate <span className="text-slate-600">Governance</span></h2>
<p className="text-slate-400">Leading with transparency and integrity.</p>
</div>
<button className="flex items-center gap-2 text-sm font-medium text-white hover:text-blue-400 transition-colors mt-4 md:mt-0">
                    Download Charter
                    <iconify-icon icon="solar:download-linear" width="16"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-4 flex flex-col gap-2">
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-white bg-white/5 border border-white/10 transition-all hover:bg-white/10 ring-1 ring-blue-500/50" id="tab-0" onclick="switchTab(0)">Board of Directors</button>
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-slate-500 hover:text-white transition-all hover:bg-white/5 border border-transparent" id="tab-1" onclick="switchTab(1)">Executive Management</button>
<button className="tab-btn text-left px-6 py-4 rounded-xl text-lg font-medium text-slate-500 hover:text-white transition-all hover:bg-white/5 border border-transparent" id="tab-2" onclick="switchTab(2)">Committees</button>
</div>

<div className="lg:col-span-8">
<div className="tab-content animate-fade-in block" id="content-0">
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=1"/>
</div>
<div>
<h4 className="text-white font-medium">Bat-Erdene B.</h4>
<p className="text-slate-500 text-sm">Chairman of the Board</p>
</div>
</div>

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=2"/>
</div>
<div>
<h4 className="text-white font-medium">Sarangerel G.</h4>
<p className="text-slate-500 text-sm">Independent Member</p>
</div>
</div>

<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4 group hover:border-white/30 transition-colors">
<div className="w-16 h-16 rounded-full bg-slate-800 overflow-hidden">
<img alt="Member" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://i.pravatar.cc/150?u=3"/>
</div>
<div>
<h4 className="text-white font-medium">Robert M.</h4>
<p className="text-slate-500 text-sm">Non-Executive Member</p>
</div>
</div>
</div>
<div className="mt-8 p-6 bg-blue-900/10 border border-blue-500/20 rounded-2xl">
<h4 className="text-blue-400 font-medium mb-2 flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear"></iconify-icon>
                                Board Structure
                            </h4>
<p className="text-slate-400 text-sm leading-relaxed">
                                The Board consists of 9 members, including 3 independent directors, ensuring objective oversight and alignment with international governance standards.
                            </p>
</div>
</div>
<div className="tab-content hidden" id="content-1">
<div className="grid md:grid-cols-2 gap-6">
<div className="bg-black border border-white/10 p-6 rounded-2xl flex items-center gap-4">
<div className="w-16 h-16 rounded-full bg-slate-800 flex items-center justify-center text-white font-serif italic text-xl">C</div>
<div>
<h4 className="text-white font-medium">CEO Office</h4>
<p className="text-slate-500 text-sm">Executive Leadership</p>
</div>
</div>
</div>
<p className="text-slate-500 mt-6">Executive management team details go here...</p>
</div>
<div className="tab-content hidden" id="content-2">
<p className="text-slate-500">Audit, Risk, and Nomination committees oversight details...</p>
</div>
</div>
</div>
</div>

</section>

<footer className="bg-slate-950 border-t border-white/10 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 bg-white text-black flex items-center justify-center rounded-sm font-serif font-bold italic text-sm">T</div>
<span className="text-sm font-medium tracking-tight text-white">TDB INVESTOR</span>
</a>
<p className="text-slate-500 text-xs leading-relaxed max-w-xs">
                        Trade and Development Bank of Mongolia.<br/>
                        Juulchin Avenue-7, Ulaanbaatar 14210.
                    </p>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Company</h5>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors" href="#">Sustainability</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Resources</h5>
<ul className="space-y-3 text-xs text-slate-500">
<li><a className="hover:text-white transition-colors" href="#">Annual Reports</a></li>
<li><a className="hover:text-white transition-colors" href="#">Presentations</a></li>
<li><a className="hover:text-white transition-colors" href="#">Bond Prospectus</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact IR</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-medium text-sm mb-4">Stay Updated</h5>
<div className="flex gap-2 mb-4">
<input className="bg-white/5 border border-white/10 rounded-lg px-3 py-2 text-xs text-white focus:outline-none focus:border-white/30 w-full" placeholder="Email address" type="email"/>
<button className="bg-white text-black px-3 py-2 rounded-lg text-xs font-medium hover:bg-slate-200 transition-colors">
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-white/5">
<p className="text-slate-600 text-[10px] uppercase tracking-wider">© 2024 Trade and Development Bank. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:chat-round-dots-linear" width="16"></iconify-icon></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>

    </>
  );
}
