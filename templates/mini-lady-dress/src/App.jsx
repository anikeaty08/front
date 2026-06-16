import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        const statImages = [
            "https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&q=80",
            "https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=800&q=80",
            "https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&q=80",
            "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&q=80"
        ];
        
        function changeImage(index) {
            const img = document.getElementById('dynamic-stat-image');
            const items = document.querySelectorAll('.stat-item');
            
            // Fade out effect
            img.style.opacity = '0.7';
            img.style.transform = 'scale(1.05)';
            
            setTimeout(() => {
                img.src = statImages[index];
                // Fade in effect
                img.style.opacity = '0.9';
                img.style.transform = 'scale(1.1)';
            }, 200);

            // Active class handling
            items.forEach(item => {
                item.classList.remove('active');
                item.querySelector('.stat-number').classList.remove('text-pink-500');
            });
            items[index].classList.add('active');
            items[index].querySelector('.stat-number').classList.add('text-pink-500');
        }

        // Intersection Observer for Number Animation
        const statObserver = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    const counters = entry.target.querySelectorAll('.stat-number');
                    counters.forEach(counter => {
                        const target = parseFloat(counter.getAttribute('data-target'));
                        const duration = 2000;
                        const frameDuration = 1000 / 60;
                        const totalFrames = Math.round(duration / frameDuration);
                        let frame = 0;
                        const easeOutQuad = t => t * (2 - t);
                        
                        const animate = () => {
                            frame++;
                            const progress = easeOutQuad(frame / totalFrames);
                            const current = target * progress;
                            
                            let suffix = "";
                            if (target === 25 || target === 500) suffix = "+";
                            
                            if(Number.isInteger(target)) {
                                counter.textContent = Math.floor(current) + suffix;
                            } else {
                                counter.textContent = current.toFixed(1) + suffix;
                            }

                            if (frame < totalFrames) {
                                requestAnimationFrame(animate);
                            } else {
                                counter.textContent = target + suffix;
                            }
                        };
                        animate();
                    });
                    observer.unobserve(entry.target);
                }
            });
        }, { threshold: 0.3 });

        setTimeout(() => {
            const section = document.querySelector('[data-element-id="aura-emkau9tvk17tc8oh"]');
            if(section) statObserver.observe(section);
        }, 100);
    


    function openGalleryLightbox(src) {
      const lb = document.getElementById('gallery-lightbox');
      const img = document.getElementById('lightbox-img');
      img.src = src;
      lb.classList.remove('hidden');
      lb.classList.add('flex');
      // Force reflow for animation
      void lb.offsetWidth;
      lb.classList.remove('opacity-0');
      img.classList.remove('scale-95');
      img.classList.add('scale-100');
      document.body.style.overflow = 'hidden';
    }
    function closeGalleryLightbox() {
      const lb = document.getElementById('gallery-lightbox');
      const img = document.getElementById('lightbox-img');
      lb.classList.add('opacity-0');
      img.classList.remove('scale-100');
      img.classList.add('scale-95');
      setTimeout(() => {
        lb.classList.add('hidden');
        lb.classList.remove('flex');
        img.src = '';
      }, 300);
      document.body.style.overflow = '';
    }
    
    // Scroll handling script
    function scrollContainer(id, direction) {
        const container = document.getElementById(id);
        const scrollAmount = direction === 'left' ? -400 : 400;
        container.scrollBy({ left: scrollAmount, behavior: 'smooth' });
    }
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" data-alpha-mask="80" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ef9dfc30-1257-414b-8704-9fc3930674e2_3840w.jpg")', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>

<div className="bg-slate-900 text-white py-2 px-4 text-center">
<p className="text-xs font-medium tracking-wide">
            🚚 Free Shipping to UAE, KSA &amp; Qatar on orders over 300 AED   •   ⚡️ 5-Day Production Lead Time
        </p>
</div>

<nav className="sticky top-0 z-50 w-full backdrop-blur-xl bg-white/80 border-b border-slate-200/60">

<div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-50 mt-3 group/nav">
<style>
        .gradient-border-btn { position: relative; isolation: isolate; overflow: hidden; }
        .gradient-border-btn .cp-border { position: absolute; top: 0px; left: 0px; height: 100%; width: 400%; background: linear-gradient(115deg, rgb(244, 114, 182), rgb(192, 132, 252), rgb(236, 72, 153), rgb(244, 114, 182), rgb(192, 132, 252)) 0% 0% / 25% 100%; transform: translateX(-5%); z-index: 0; transition: transform .25s ease-out; }
        .gradient-border-btn:hover .cp-border { transition: transform .75s linear; }
    </style>

<div className="hidden fixed inset-0 z-[100] bg-gradient-to-br from-pink-50 via-white to-purple-50 overflow-y-auto" id="mobile-menu-overlay">
<div className="min-h-full w-full flex flex-col items-center justify-center p-6 relative">
<button className="absolute top-6 right-6 p-3 bg-white rounded-full text-slate-400 hover:text-pink-500 hover:rotate-90 hover:shadow-md transition-all duration-300 z-50 shadow-sm border border-slate-100" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<nav className="flex flex-col items-center gap-8 w-full max-w-sm text-center py-10">
<div className="mb-4 transform hover:scale-105 transition-transform duration-300">
<span className="text-3xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-pink-500 to-purple-600 tracking-tight">MINI LADY</span>
</div>
<a className="text-2xl font-medium text-slate-600 hover:text-pink-600 hover:scale-105 transition-all" href="#gallery-collection" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Collections</a>
<a className="text-2xl font-medium text-slate-600 hover:text-pink-600 hover:scale-105 transition-all" href="#process" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Process</a>
<a className="text-2xl font-medium text-slate-600 hover:text-pink-600 hover:scale-105 transition-all" href="#wholesale" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Wholesale</a>
<a className="text-2xl font-medium text-slate-600 hover:text-pink-600 hover:scale-105 transition-all" href="#testimonials" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Reviews</a>
<a className="text-2xl font-medium text-slate-600 hover:text-pink-600 hover:scale-105 transition-all" href="#contact" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Contact</a>
<div className="grid grid-cols-2 gap-4 w-full mt-8">
<a className="flex items-center justify-center py-4 px-6 rounded-2xl bg-white border border-pink-100 text-pink-600 font-semibold shadow-sm hover:shadow-md transition-all active:scale-95" href="#contact" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Log In</a>
<a className="flex items-center justify-center py-4 px-6 rounded-2xl bg-pink-500 text-white font-semibold shadow-lg shadow-pink-500/25 hover:bg-pink-600 hover:shadow-pink-500/40 transition-all active:scale-95" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">Get Quote</a>
</div>
</nav>
</div>
</div>

<div className="rounded-2xl border border-white/40 bg-white/70 backdrop-blur-md shadow-sm transition-all duration-300 hover:shadow-md hover:bg-white/80 hover:border-white/50">
<div className="flex pt-2 pr-3 pb-2 pl-4 items-center justify-between">

<div className="hidden fixed inset-0 z-[100] flex justify-end" id="mobile-menu-overlay">

<div className="absolute inset-0 bg-slate-900/20 backdrop-blur-sm transition-opacity" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';"></div>

<div className="relative w-full max-w-[320px] h-full bg-white shadow-2xl flex flex-col overflow-hidden animate-in slide-in-from-right duration-300">

<div className="flex items-center justify-between p-6 border-b border-slate-100 bg-white z-10">
<div className="flex items-center gap-3">
<span className="w-8 h-8 rounded-lg bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white shadow-md shadow-pink-500/20">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m2 4 3 12h14l3-12-6 7-4-7-4 7-6-7zm3 16h14"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight text-slate-800">MINI LADY</span>
</div>
<button onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';" type="button hover:text-slate-600 transition-colors">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<nav className="flex-1 overflow-y-auto p-4 space-y-2 bg-white">
<div className="px-2 py-2 text-xs font-semibold text-slate-400 uppercase tracking-wider">Menu</div>
<a className="group flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all active:scale-[0.98]" href="#gallery-collection" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors border border-slate-100 group-hover:border-pink-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="20" x="2" y="7"></rect><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path></svg>
</div>
<div>
<div className="font-medium text-slate-700 group-hover:text-pink-600 transition-colors text-base">Collections</div>
<div className="text-xs text-slate-400 font-normal group-hover:text-pink-400/80">Browse latest arrivals</div>
</div>
</a>
<a className="group flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all active:scale-[0.98]" href="#process" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors border border-slate-100 group-hover:border-pink-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.77-3.77a6 6 0 0 1-7.94 7.94l-6.91 6.91a2.12 2.12 0 0 1-3-3l6.91-6.91a6 6 0 0 1 7.94-7.94l-3.76 3.76z"></path></svg>
</div>
<div>
<div className="font-medium text-slate-700 group-hover:text-pink-600 transition-colors text-base">Process</div>
<div className="text-xs text-slate-400 font-normal group-hover:text-pink-400/80">How we work</div>
</div>
</a>
<a className="group flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all active:scale-[0.98]" href="#wholesale" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors border border-slate-100 group-hover:border-pink-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<div>
<div className="font-medium text-slate-700 group-hover:text-pink-600 transition-colors text-base">Wholesale</div>
<div className="text-xs text-slate-400 font-normal group-hover:text-pink-400/80">Bulk ordering</div>
</div>
</a>
<a className="group flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all active:scale-[0.98]" href="#testimonials" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors border border-slate-100 group-hover:border-pink-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div>
<div className="font-medium text-slate-700 group-hover:text-pink-600 transition-colors text-base">Reviews</div>
<div className="text-xs text-slate-400 font-normal group-hover:text-pink-400/80">Client testimonials</div>
</div>
</a>
<a className="group flex items-center gap-4 p-3 rounded-xl hover:bg-pink-50 transition-all active:scale-[0.98]" href="#contact" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
<div className="w-10 h-10 rounded-lg bg-slate-50 text-slate-500 flex items-center justify-center group-hover:bg-pink-100 group-hover:text-pink-600 transition-colors border border-slate-100 group-hover:border-pink-200">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div>
<div className="font-medium text-slate-700 group-hover:text-pink-600 transition-colors text-base">Contact</div>
<div className="text-xs text-slate-400 font-normal group-hover:text-pink-400/80">Get in touch</div>
</div>
</a>
</nav>

<div className="p-6 border-t border-slate-100 bg-slate-50/50 space-y-3">
<a className="flex items-center justify-center w-full py-3 px-4 bg-white border border-slate-200 text-slate-600 font-medium rounded-lg shadow-sm hover:bg-slate-50 hover:text-slate-900 transition-all active:scale-[0.98]" href="#contact" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
                            Log In
                        </a>
<a className="flex items-center justify-center w-full py-3 px-4 bg-slate-900 text-white font-medium rounded-lg shadow-lg shadow-slate-900/10 hover:bg-slate-800 transition-all active:scale-[0.98]" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" onclick="document.getElementById('mobile-menu-overlay').classList.add('hidden'); document.body.style.overflow='';">
                            Get Quote
                        </a>
<div className="flex justify-center gap-6 pt-4 border-t border-slate-200/50 mt-2">
<a className="text-slate-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-50 rounded-full" href="#"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-slate-400 hover:text-pink-500 transition-colors p-2 hover:bg-pink-50 rounded-full" href="#"><svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg></a>
</div>
</div>
</div>
</div>

<a className="flex items-center gap-2.5 group/logo relative hover:scale-105 transition-transform duration-300" href="#">
<span className="w-9 h-9 rounded-xl bg-gradient-to-br from-pink-400 to-rose-600 flex items-center justify-center text-white shadow-lg shadow-pink-500/30 ring-2 ring-white/50 transition-all duration-300 group-hover/logo:shadow-pink-500/50">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:crown" height="1em" role="img" style={{width: '18px', height: '18px'}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294zM5 21h14" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</span>
<span className="text-lg font-semibold tracking-tight text-slate-800 group-hover/logo:text-pink-600 transition-colors">MINI LADY</span>
</a>

<nav className="flex items-center gap-6">

<div className="hidden md:flex gap-6 text-sm font-medium text-slate-600 items-center">
<a className="hover:text-pink-600 transition-colors" href="#gallery-collection">Collections</a>
<a className="hover:text-pink-600 transition-colors" href="#process">Process</a>
<a className="hover:text-pink-600 transition-colors" href="#wholesale">Wholesale</a>
<a className="hover:text-pink-600 transition-colors" href="#testimonials">Reviews</a>
</div>

<button aria-label="Open Menu" className="md:hidden p-2 -mr-2 text-slate-600 hover:text-slate-900 transition-colors relative z-50" onclick="document.getElementById('aura-mobile-menu-drawer').classList.remove('hidden'); document.body.style.overflow='hidden';">
</button>

<div className="hidden fixed inset-0 z-[999] bg-white/95 backdrop-blur-2xl transition-all duration-300 animate-fade-in flex flex-col">

<div className="flex items-center justify-between p-6 border-b border-slate-100/50">
<span className="text-lg font-semibold tracking-tight text-slate-900">Menu</span>
<button className="p-2 -mr-2 text-slate-500 hover:text-pink-600 transition-colors rounded-full hover:bg-slate-100" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">
<svg fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<div className="flex-1 flex flex-col items-center justify-center gap-8 p-6 overflow-y-auto">
<a className="text-3xl font-medium tracking-tight text-slate-900 hover:text-pink-600 transition-colors" href="#gallery-collection" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Collections</a>
<a className="text-3xl font-medium tracking-tight text-slate-900 hover:text-pink-600 transition-colors" href="#process" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Process</a>
<a className="text-3xl font-medium tracking-tight text-slate-900 hover:text-pink-600 transition-colors" href="#wholesale" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Wholesale</a>
<a className="text-3xl font-medium tracking-tight text-slate-900 hover:text-pink-600 transition-colors" href="#testimonials" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Reviews</a>
</div>

<div className="p-8 pb-12 flex flex-col gap-4 border-t border-slate-100/50">
<a className="w-full py-4 rounded-2xl bg-slate-50 text-slate-900 font-semibold text-center hover:bg-slate-100 transition-colors border border-slate-200" href="#contact" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Log In</a>
<a className="w-full py-4 rounded-2xl bg-slate-900 text-white font-semibold text-center hover:bg-slate-800 transition-colors shadow-xl shadow-slate-900/10" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" onclick="document.getElementById('aura-mobile-menu-drawer').classList.add('hidden'); document.body.style.overflow='';">Get Quote</a>
</div>
</div>
</nav>

<div className="flex items-center gap-3">

<a className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium text-slate-600 hover:text-pink-600 transition-colors" href="#contact">
                    Log in
                </a>

<a className="hidden sm:inline-flex items-center justify-center relative rounded-lg gradient-border-btn group/btn p-[1px]" data-h="0" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" onmouseenter="this.dataset.h='1'; const g=this.querySelector('.cp-border'); if(!g) return; g.style.transition='transform .75s linear'; let dir=0; (function loop(){ if (this.dataset.h!=='1') return; dir = dir===0 ? -25 : 0; g.style.transform='translateX('+dir+'%)'; setTimeout(loop.bind(this),750); }).call(this);" onmouseleave="this.dataset.h='0'; const g=this.querySelector('.cp-border'); if(!g) return; g.style.transition='transform .25s ease-out'; g.style.transform='translateX(-5%)';">
<div aria-hidden="true" className="cp-border" style={{transition: 'transform 0.25s ease-out', transform: 'translateX(-5%)'}}></div>
<span className="relative block px-4 py-2 text-sm font-medium text-white bg-slate-900 rounded-[7px] z-10 transition-colors group-hover/btn:bg-slate-800">
                        Get Quote
                    </span>
</a>

<button className="md:hidden flex flex-col items-center justify-center gap-0.5 text-pink-400 hover:text-pink-600 transition-transform active:scale-95 group/menu ml-2 p-1" onclick="document.getElementById('mobile-menu-overlay').classList.remove('hidden'); document.body.style.overflow='hidden';" type="button">
<svg className="w-8 h-8 drop-shadow-sm transition-all duration-300 group-hover/menu:drop-shadow-md group-hover/menu:-translate-y-0.5" fill="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2L13.5 6H16.5L14 8L15 11L12 9L9 11L10 8L7.5 6H10.5L12 2Z" fill="#F472B6" opacity="0.6"></path>
<path className="" d="M7 11V22H17V11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M10 11V8L12 4L14 8V11" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path className="" d="M4 14V22H7V14L4 14ZM4 14L5.5 10L7 14H4Z" fill="currentColor" opacity="0.8"></path>
<path className="" d="M17 14V22H20V14L17 14ZM17 14L18.5 10L20 14H17Z" fill="currentColor" opacity="0.8"></path>
<path className="" d="M10.5 22V17C10.5 16.1716 11.1716 15.5 12 15.5C12.8284 15.5 13.5 16.1716 13.5 17V22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<path d="M12 2L12 4" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path>
</svg>
<span className="text-[9px] font-bold uppercase tracking-widest leading-none text-pink-400">Menu</span>
</button>
</div>
</div>
</div>
</div>
</nav>

<section className="overflow-hidden pt-24 pb-32 relative">

<style>
            @keyframes aura-fade-in-up {
                0% { opacity: 0; transform: translateY(30px); }
                100% { opacity: 1; transform: translateY(0); }
            }
            @keyframes aura-slow-zoom {
                0% { transform: scale(1); }
                100% { transform: scale(1.05); }
            }
            .aura-animate-fade-up {
                animation: aura-fade-in-up 1s cubic-bezier(0.22, 1, 0.36, 1) forwards;
            }
            .aura-animate-zoom {
                animation: aura-slow-zoom 20s linear infinite alternate;
            }
        </style>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[500px] bg-brand-500/5 rounded-full blur-3xl -z-10 pointer-events-none aura-animate-zoom origin-center will-change-transform"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="text-center lg:text-left flex flex-col items-center lg:items-start order-2 lg:order-1">
<div className="inline-flex gap-2 border-brand-100 text-brand-700 aura-animate-fade-up text-xs font-normal opacity-0 border rounded-full mb-8 pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center" style={{animationDelay: '0.1s'}}>New Collection: Summer GCC 2026<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span></div>
<h1 className="md:text-7xl leading-[1.1] aura-animate-fade-up text-5xl font-normal text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 tracking-tighter opacity-0 mb-6" style={{animationDelay: '0.2s', fontFamily: '\'Henny Penny\', cursive'}}>
                Exquisite dresses for 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-500 to-purple-600">little princesses.</span>
</h1>
<p className="leading-relaxed aura-animate-fade-up text-lg font-nunito font-semibold text-pink-400 max-w-lg mb-10 min-h-[5rem]" style={{animationDelay: '0.3s'}}>
                Premium manufacturing for boutiques and retailers in UAE, KSA &amp; Qatar. From sketch to shelf in 7 days.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 opacity-0 aura-animate-fade-up w-full sm:w-auto" style={{animationDelay: '0.5s'}}>
<a className="group relative inline-flex items-center justify-center sm:w-auto w-full h-12 px-8 text-sm font-semibold text-white bg-pink-500 rounded-full hover:bg-pink-600 hover:shadow-lg hover:shadow-pink-500/30 transition-all duration-300" href="#gallery-collection">
                    View Collections
                </a>
<a className="group sm:w-auto inline-flex items-center justify-center hover:bg-slate-50 hover:border-slate-300 transition-all duration-300 hover:scale-[1.03] text-sm font-normal text-slate-700 bg-white w-full h-12 border-slate-200 border rounded-full pr-8 pl-8" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady">Write on Whatsapp</a>
</div>
</div>

<div className="relative order-1 lg:order-2 opacity-0 aura-animate-fade-up" style={{animationDelay: '0.4s'}}>
<div className="relative mx-auto w-full max-w-md lg:max-w-full">
<div className="absolute -top-10 -right-10 w-64 h-64 bg-purple-200/50 rounded-full blur-3xl -z-10 animate-pulse"></div>
<div className="absolute -bottom-10 -left-10 w-64 h-64 bg-brand-200/50 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDelay: '1s'}}></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-brand-900/10 border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out group">
<img alt="Hero Image" className="w-full h-auto object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f90e9d4-de61-434c-82f2-eada5f3ca206_800w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y overflow-hidden bg-white border-slate-100 pt-24 pb-24 relative" id="wholesale">

<a className="fixed md:hidden inline-flex items-center gap-2.5 shadow-pink-500/40 hover:bg-pink-600 transition-transform duration-300 hover:scale-105 active:scale-95 group text-white bg-pink-500 z-[100] border-white/20 border rounded-full pt-3 pr-5 pb-3 pl-5 right-6 bottom-6 shadow-2xl backdrop-blur-sm" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-message-circle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg>
<span className="text-sm font-semibold tracking-wide">Chat on WhatsApp</span>
</a>

<div className="z-10 max-w-7xl mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<style>
            .pink-scrollbar {
                -ms-overflow-style: none; /* IE and Edge */
                scrollbar-width: thin; /* Firefox */
                scrollbar-color: #ec4899 transparent;
            }
            .pink-scrollbar::-webkit-scrollbar {
                height: 6px;
                display: block;
            }
            .pink-scrollbar::-webkit-scrollbar-track {
                background: transparent;
            }
            .pink-scrollbar::-webkit-scrollbar-thumb {
                background-color: #ec4899;
                border-radius: 20px;
            }
            @keyframes swipe-hint-animation {
                0% { transform: translateX(10px); opacity: 0; }
                20% { opacity: 1; }
                50% { transform: translateX(-20px); opacity: 1; }
                80% { opacity: 0; }
                100% { transform: translateX(-20px); opacity: 0; }
            }
            .animate-swipe-hand {
                animation: swipe-hint-animation 2.5s cubic-bezier(0.4, 0, 0.2, 1) infinite;
            }
        </style>
<div className="text-center mb-12">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-3">Campaign Highlights</h2>
<p className="text-slate-500">See our latest collection in motion.</p>
</div>
<div className="relative group/carousel">

<div className="md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-30 pointer-events-none mix-blend-difference text-pink-500 animate-swipe-hand flex flex-col items-center gap-2 filter drop-shadow-md">
<svg className="drop-shadow-sm" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><path d="M18 11V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v0"></path><path d="M14 10V4a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v2"></path><path d="M10 10.5V6a2 2 0 0 0-2-2v0a2 2 0 0 0-2 2v8"></path><path d="M18 8a2 2 0 1 1 4 0v6a8 8 0 0 1-8 8h-2c-2.8 0-4.5-.86-5.99-2.34l-3.6-3.6a2 2 0 0 1 2.83-2.82L7 15"></path></svg>
</div>

<div className="flex flex-col gap-16">

<section className="bg-white py-20 md:py-32 px-6 rounded-3xl">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-16 py-8 md:py-16">
<style>
    @keyframes marquee {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee {
      animation: marquee 40s linear infinite;
    }
    .pause-on-hover:hover {
      animation-play-state: paused;
    }
  </style>

<div className="overflow-hidden md:py-20 md:px-12 text-white bg-slate-950 w-full rounded-3xl pt-12 pr-6 pb-12 pl-6 relative">

<style>
        /* Button Animation Styles */
        .btn-wrapper::after { content: ""; position: absolute; top: 0; left: 0; width: 100%; height: 100%; border-radius: inherit; pointer-events: none; background-color: #0000; background-image: repeating-linear-gradient(45deg, rgba(255,255,255,0.1) 0 1px, transparent 2px 5px); opacity: 0; z-index: -1; }
        .btn-wrapper:hover::after { animation: opacity-anim 1.4s ease-in-out forwards; }
        @keyframes opacity-anim { 80% { opacity: 0; } 100% { opacity: 1; } }
        .btn-wrapper .btn { position: relative; display: flex; justify-content: center; align-items: center; padding: 1rem 2rem; background-color: transparent; border: 1px solid rgba(255,255,255,0.2); color: white; font-family: inherit; font-size: 0.875rem; font-weight: 600; text-transform: uppercase; letter-spacing: 0.05em; cursor: pointer; transition: all 0.3s ease; }
        .btn-wrapper:hover .btn { background-color: #db2777; border-color: #db2777; color: white; transform: scale(1.02); }
        .btn-wrapper .dot { position: absolute; width: 6px; height: 6px; background-color: #db2777; transition: all 0.3s ease; opacity: 0; }
        .btn-wrapper:hover .dot.top.left { top: 50%; left: 20%; animation: move-tl 0.4s ease-in-out forwards; }
        .btn-wrapper:hover .dot.top.right { top: 50%; right: 20%; animation: move-tr 0.4s ease-in-out forwards 0.1s; }
        .btn-wrapper:hover .dot.bottom.right { bottom: 50%; right: 20%; animation: move-br 0.4s ease-in-out forwards 0.2s; }
        .btn-wrapper:hover .dot.bottom.left { bottom: 50%; left: 20%; animation: move-bl 0.4s ease-in-out forwards 0.3s; }
        @keyframes move-tl { 100% { top: -3px; left: -3px; opacity: 1; } }
        @keyframes move-tr { 100% { top: -3px; right: -3px; opacity: 1; } }
        @keyframes move-br { 100% { bottom: -3px; right: -3px; opacity: 1; } }
        @keyframes move-bl { 100% { bottom: -3px; left: -3px; opacity: 1; } }
        
        /* Grid Background & Layout */
        .grid-bg {
            background-size: 40px 40px;
            background-image: linear-gradient(to right, rgba(255, 255, 255, 0.03) 1px, transparent 1px),
                              linear-gradient(to bottom, rgba(255, 255, 255, 0.03) 1px, transparent 1px);
        }
        .stat-item { transition: all 0.3s ease; cursor: pointer; }
        .stat-item:hover .stat-value, .stat-item.active .stat-value { color: #db2777; }
        .beam-border-v { position: absolute; top: 0; bottom: 0; left: 0; width: 1px; background: linear-gradient(to bottom, transparent, rgba(255,255,255,0.2), transparent); }
    </style>

<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>
<div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">

<div className="lg:col-span-5 flex flex-col justify-center">
<div className="flex items-center gap-3 mb-8 text-xs font-medium uppercase tracking-[0.2em] text-pink-500">
<span className="w-2 h-2 rounded-full bg-pink-500 animate-pulse"></span>
                About Us
            </div>
<h2 className="text-5xl md:text-7xl font-light tracking-tighter text-white uppercase leading-[0.9] mb-8">
                Premium
                <span className="text-slate-500">Quality</span>
                Garment
                Factory
            </h2>
<p className="text-lg text-slate-400 font-light leading-relaxed mb-12 max-w-md">
                100% natural fabrics. European hardware. Double quality control. We create dresses that people love to wear.
            </p>
<div className="flex flex-col items-start gap-4">
<a className="btn-wrapper relative inline-flex" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady" target="_blank">
<div className="dot top left"></div>
<div className="dot top right"></div>
<div className="dot bottom right"></div>
<div className="dot bottom left"></div>
<button className="btn gap-3">
                        Get Price List
                        <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</a>
<span className="text-xs text-slate-600 uppercase tracking-widest pl-1">Response in 5 mins</span>
</div>
</div>

<div className="lg:col-span-4 relative flex items-center justify-center h-[400px] md:h-[500px]">

<div className="absolute top-0 right-0 text-slate-700 text-2xl font-light z-10 select-none">+</div>
<div className="absolute bottom-0 left-0 text-slate-700 text-2xl font-light z-10 select-none">+</div>

<div className="relative w-full h-full rounded-[100px] overflow-hidden border border-white/10 shadow-2xl group transition-all duration-500">
<img alt="Factory Detail" className="w-full h-full object-cover transition-transform duration-700 scale-110 group-hover:scale-100 grayscale group-hover:grayscale-0 opacity-90" id="dynamic-stat-image" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=800&amp;q=80" style={{opacity: '0.9', transform: 'scale(1.1)'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950/60 to-transparent"></div>
</div>
</div>

<div className="lg:col-span-3 flex flex-col relative pl-0 lg:pl-8 h-full justify-center">
<div className="beam-border-v hidden lg:block"></div>
<div className="flex flex-col gap-10">

<div className="stat-item group" onmouseover="changeImage(0)">
<span className="md:text-7xl block transition-colors tabular-nums group-hover:text-pink-500 text-6xl font-thin text-slate-400 tracking-tighter">25</span>
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] mt-2 block pl-1 group-hover:text-white transition-colors">Partners in GCC</span>
</div>

<div className="stat-item group border-t border-dashed border-white/10 pt-10" onmouseover="changeImage(1)">
<span className="stat-number md:text-7xl block transition-colors tabular-nums group-hover:text-pink-500 text-6xl font-thin text-slate-400 tracking-tighter" data-target="500">8000+</span>
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] mt-2 block pl-1 group-hover:text-white transition-colors">Units Per Month</span>
</div>

<div className="stat-item group border-t border-dashed border-white/10 pt-10" onmouseover="changeImage(2)">
<div className="flex items-baseline gap-1">
<span className="stat-number md:text-7xl block transition-colors tabular-nums group-hover:text-pink-500 text-6xl font-thin text-slate-400 tracking-tighter" data-target="100">98</span>
<span className="text-3xl font-thin text-slate-500 group-hover:text-pink-500 transition-colors">%</span>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] mt-2 block pl-1 group-hover:text-white transition-colors">Natural Fabrics</span>
</div>

<div className="stat-item group border-t border-dashed border-white/10 pt-10" onmouseover="changeImage(3)">
<div className="flex items-baseline gap-2">
<span className="stat-number md:text-7xl block transition-colors tabular-nums group-hover:text-pink-500 text-6xl font-thin text-slate-400 tracking-tighter" data-target="4.9" style={{}}>4,9</span>
<svg className="text-pink-500 w-6 h-6" fill="currentColor" height="24" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<span className="text-xs text-slate-500 uppercase tracking-[0.15em] mt-2 block pl-1 group-hover:text-white transition-colors">Rating on Noon</span>
</div>
</div>
</div>
</div>


</div>

<div className="w-full relative overflow-hidden group">

<div className="absolute left-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-r from-slate-50 to-transparent pointer-events-none"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 md:w-48 z-10 bg-gradient-to-l from-slate-50 to-transparent pointer-events-none"></div>
<div className="flex gap-6 md:gap-8 animate-marquee pause-on-hover w-max px-4 items-center">


<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2">
<div className="relative w-28 h-28 mb-6 transform group-hover/card:scale-105 transition-transform duration-500">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="50" stroke="#eff6ff" strokeWidth="8"></circle>
<circle cx="60" cy="60" fill="none" r="50" stroke="url(#gradient-blue)" stroke-dasharray="235" stroke-dashoffset="59" strokeLinecap="round" strokeWidth="8"></circle>
<defs>
<lineargradient id="gradient-blue" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-4xl font-bold text-blue-600 tracking-tighter">85%</span>
</div>
</div>
<h3 className="text-slate-900 font-bold text-xl mb-1">Production</h3>
<p className="text-slate-500 text-sm font-medium">Monthly capacity utilization</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center h-full">
<div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg className="" fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path className="" d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle className="" cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">25+</h3>
<p className="text-pink-600 font-bold text-sm mb-1 uppercase tracking-wider">Trusted Partners</p>
<p className="text-slate-500 text-sm">Across the GCC region</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center">
<div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg fill="currentColor" height="36" stroke="none" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-4xl font-bold text-slate-900 tracking-tight">4.9</h3>
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border border-green-200">Verified</span>
</div>
<p className="text-amber-600 font-bold text-sm mb-1 uppercase tracking-wider">Top Rated</p>
<p className="text-slate-500 text-sm">On Noon &amp; Amazon</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center">
<div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">5-7 Days</h3>
<p className="text-purple-600 font-bold text-sm mb-1 uppercase tracking-wider">Fast Delivery</p>
<p className="text-slate-500 text-sm">Direct to your warehouse</p>
</div>
</div>


<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-blue-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2">
<div className="relative w-28 h-28 mb-6 transform group-hover/card:scale-105 transition-transform duration-500">
<svg className="w-full h-full transform -rotate-90" viewbox="0 0 120 120">
<circle cx="60" cy="60" fill="none" r="50" stroke="#eff6ff" strokeWidth="8"></circle>
<circle cx="60" cy="60" fill="none" r="50" stroke="url(#gradient-blue-2)" stroke-dasharray="235" stroke-dashoffset="59" strokeLinecap="round" strokeWidth="8"></circle>
<defs>
<lineargradient id="gradient-blue-2" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: '#3b82f6', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#60a5fa', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
<div className="absolute inset-0 flex items-center justify-center">
<span className="text-4xl font-bold text-blue-600 tracking-tighter">85%</span>
</div>
</div>
<h3 className="text-slate-900 font-bold text-xl mb-1">Production</h3>
<p className="text-slate-500 text-sm font-medium">Monthly capacity utilization</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-pink-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center h-full">
<div className="w-20 h-20 bg-pink-50 rounded-2xl flex items-center justify-center text-pink-600 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><path d="M16 3.13a4 4 0 0 1 0 7.75"></path></svg>
</div>
<h3 className="text-4xl font-bold text-slate-900 mb-2 tracking-tight">25+</h3>
<p className="text-pink-600 font-bold text-sm mb-1 uppercase tracking-wider">Trusted Partners</p>
<p className="text-slate-500 text-sm">Across the GCC region</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-amber-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center">
<div className="w-20 h-20 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-500 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg fill="currentColor" height="36" stroke="none" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
<div className="flex items-center gap-3 mb-2">
<h3 className="text-4xl font-bold text-slate-900 tracking-tight">4.9</h3>
<span className="bg-green-100 text-green-700 text-[10px] font-bold px-2.5 py-1 rounded-full uppercase tracking-wide border border-green-200">Verified</span>
</div>
<p className="text-amber-600 font-bold text-sm mb-1 uppercase tracking-wider">Top Rated</p>
<p className="text-slate-500 text-sm">On Noon &amp; Amazon</p>
</div>
</div>

<div className="w-[300px] md:w-[340px] bg-white rounded-3xl p-8 border border-purple-100 shadow-sm hover:shadow-xl transition-all duration-300 hover:-translate-y-1 group/card">
<div className="flex flex-col items-center justify-center py-2 text-center">
<div className="w-20 h-20 bg-purple-50 rounded-2xl flex items-center justify-center text-purple-600 mb-6 transform group-hover/card:rotate-6 transition-transform duration-300">
<svg fill="none" height="36" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="36" xmlns="http://www.w3.org/2000/svg"><polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon></svg>
</div>
<h3 className="text-3xl font-bold text-slate-900 mb-2 tracking-tight">5-7 Days</h3>
<p className="text-purple-600 font-bold text-sm mb-1 uppercase tracking-wider">Fast Delivery</p>
<p className="text-slate-500 text-sm">Direct to your warehouse</p>
</div>
</div>

</div>
</div>
</div>
</div>
</section>

<div className="flex md:grid md:grid-cols-3 gap-6 md:gap-8 overflow-x-auto snap-x snap-mandatory pink-scrollbar md:pb-0 -mx-6 md:mx-0 md:px-0 scroll-smooth pr-6 pb-8 pl-6 gap-x-6 gap-y-6">

<div className="shrink-0 w-[85vw] md:w-full snap-center group relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 cursor-pointer">
<img alt="Summer Collection" className="transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f540c67-890e-4ffb-ad09-552505eee1c2_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

<div className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer group/play" onclick="this.style.display='none'">
</div>

<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 flex items-center justify-center rounded-2xl overflow-hidden">
<div className="w-full max-w-[400px] mx-auto h-full relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full pointer-events-auto" frameborder="0" src="https://www.youtube.com/embed/YRtD-n1LkdY?autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;playlist=YRtD-n1LkdY&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;disablekb=1" title="YouTube Shorts video"></iframe>
</div>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-full snap-center group relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 cursor-pointer">
<img alt="Evening Wear" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

<div className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer group/play" onclick="this.style.display='none'">
</div>
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 flex items-center justify-center">
<div className="w-full max-w-[400px] mx-auto h-full relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full border-0 pointer-events-auto" frameborder="0" src="https://www.youtube.com/embed/j79q8SRa5Ls?autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;playlist=j79q8SRa5Ls&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;disablekb=1" title="YouTube Shorts video"></iframe>
</div>
</div>
</div>

<div className="shrink-0 w-[85vw] md:w-full snap-center group relative aspect-[9/16] overflow-hidden rounded-2xl bg-slate-100 shadow-xl shadow-slate-900/5 ring-1 ring-slate-900/5 cursor-pointer">
<img alt="Party Essentials" className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105 will-change-transform" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-transparent to-transparent opacity-60 transition-opacity duration-300 group-hover:opacity-70"></div>

<div className="absolute inset-0 z-50 flex items-center justify-center cursor-pointer group/play" onclick="this.style.display='none'">
</div>
<div className="absolute top-0 right-0 bottom-0 left-0 w-full h-full z-10 flex items-center justify-center">
<div className="w-full max-w-[400px] mx-auto h-full relative">
<iframe allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen="" className="absolute top-0 left-0 w-full h-full border-0 pointer-events-auto" frameborder="0" src="https://www.youtube.com/embed/t35TlbTaDxo?autoplay=1&amp;mute=1&amp;playsinline=1&amp;loop=1&amp;playlist=t35TlbTaDxo&amp;controls=0&amp;showinfo=0&amp;rel=0&amp;disablekb=1" title="YouTube Shorts video"></iframe>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight mb-4">Choose your partnership model</h2>
<p className="text-slate-500">Tailored solutions for individual buyers and large scale retailers.</p>
</div>

<div className="flex flex-col gap-8 max-w-6xl mx-auto pb-12 relative">

<div className="sticky top-28 z-10 w-full group relative p-6 sm:p-8 rounded-2xl border border-pink-100 bg-white/95 backdrop-blur-sm shadow-xl shadow-pink-900/5 transition-all duration-300 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center ring-1 ring-slate-900/5 overflow-hidden">

<div className="xl:col-span-2 flex items-center justify-center order-1">
<span className="text-[80px] sm:text-[100px] leading-none font-bold tracking-tighter text-pink-100/80 select-none font-variant-numeric tabular-nums group-hover:text-pink-200 transition-colors">01</span>
</div>

<div className="xl:col-span-5 flex flex-col gap-6 order-2">
<div className="">
<h3 className="text-2xl font-semibold text-slate-900 tracking-tight">Retail &amp; Samples</h3>
<p className="text-sm text-slate-500 mt-2 leading-relaxed">Perfect for parents or testing quality
                            before bulk orders. Immediate dispatch.</p>
</div>
<div className="text-3xl font-semibold text-slate-900 tracking-tight">
                        150 <span className="text-base font-normal text-slate-500">AED / piece</span>
</div>
<a className="mt-2 inline-flex w-full items-center justify-center py-3 px-4 bg-white border border-slate-200 text-slate-700 font-medium text-sm text-center rounded-lg hover:border-pink-300 hover:text-pink-600 hover:bg-pink-50 transition-colors shadow-sm" href="#gallery-collection">
                        Shop Retail Collection
                    </a>
</div>

<div className="xl:col-span-5 relative h-full min-h-[340px] order-3">
<div className="relative w-full h-full overflow-hidden rounded-2xl border border-pink-100 shadow-lg shadow-pink-900/5 group-hover:shadow-pink-900/10 transition-all duration-500">
<img alt="Retail Collection" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c528ab43-3a51-4e5a-b673-e00e367aaa12_1600w.jpg" style={{}}/>
</div>
</div>
</div>

<div className="sticky top-40 z-20 w-full group relative p-6 sm:p-8 rounded-2xl border border-pink-100 bg-white/95 backdrop-blur-sm shadow-xl shadow-pink-900/5 transition-all duration-300 ring-1 ring-slate-900/5 grid grid-cols-1 xl:grid-cols-12 gap-8 items-center overflow-hidden">
<div className="xl:col-span-2 flex items-center justify-center order-1">
<span className="text-[80px] sm:text-[100px] leading-none font-bold tracking-tighter text-pink-100/80 select-none font-variant-numeric tabular-nums group-hover:text-pink-200 transition-colors">02</span>
</div>
<div className="xl:col-span-5 flex flex-col gap-6 order-2">
<div className="">
<h3 className="text-xl font-semibold text-slate-900 tracking-tight mb-2">Wholesale B2B</h3>
<p className="text-sm text-slate-500">For boutiques, resellers, and private label brands looking for
                            volume.</p>
</div>
<div className="flex items-baseline gap-2">
<span className="text-3xl font-semibold text-slate-900 tracking-tight">45</span>
<span className="text-base font-normal text-slate-500">AED / piece</span>
</div>
<a className="block w-full py-3 px-4 bg-slate-900 text-white font-medium text-sm text-center rounded-lg hover:bg-slate-800 transition-colors shadow-lg shadow-slate-900/10" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady">
                        Request Wholesale Account
                    </a>
</div>
<div className="xl:col-span-5 relative h-full min-h-[340px] order-3">
<div className="relative w-full h-full overflow-hidden rounded-2xl border border-pink-100 shadow-lg shadow-pink-900/5 group-hover:shadow-pink-900/10 transition-all duration-500 bg-slate-100">
<img alt="Wholesale Manufacturing" className="absolute inset-0 w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105 opacity-90 mix-blend-multiply" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af613e02-7d6f-4f3a-8eac-941eb030c65a_1600w.jpg" style={{}}/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative" id="gallery-collection">

<div className="fixed inset-0 z-[100] bg-slate-950/95 hidden items-center justify-center p-4 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="gallery-lightbox" onclick="closeGalleryLightbox()">
<div className="relative w-full h-full flex items-center justify-center pointer-events-none">
<img className="pointer-events-auto object-contain rounded-lg shadow-2xl transform scale-95 transition-transform duration-300 select-none max-w-[90vw] md:max-w-[70vw] max-h-[80vh]" id="lightbox-img" onclick="event.stopPropagation()" src=""/>
<button className="pointer-events-auto absolute top-6 right-6 text-white/70 hover:text-white p-2 transition-all duration-300 hover:rotate-90 hover:scale-110 bg-white/10 rounded-full backdrop-blur-md" onclick="closeGalleryLightbox()">
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
</div>

<style className="">
    @keyframes fadeInUp {
      from { opacity: 0; transform: translateY(20px); }
      to { opacity: 1; transform: translateY(0); }
    }
    .gallery-item-animate {
      animation: fadeInUp 0.8s cubic-bezier(0.2, 0.8, 0.2, 1) forwards;
      opacity: 0;
    }
    /* Hide scrollbar for layout but allow scroll */
    .snap-x::-webkit-scrollbar {
        display: none;
    }
    .snap-x {
        -ms-overflow-style: none;  /* IE and Edge */
        scrollbar-width: none;  /* Firefox */
    }
  </style>
<div className="text-center mb-20">
<h2 className="text-3xl sm:text-4xl font-semibold text-slate-900 tracking-tight mb-3">Our Collections</h2>
<p className="text-slate-500 max-w-2xl mx-auto text-lg">Exquisite designs for every special moment in childhood.</p>
</div>

<div className="mt-8 mb-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4 flex-1">
<h3 className="whitespace-nowrap text-2xl font-semibold text-slate-800 tracking-tight">Elegant Wear</h3>
<div className="h-px w-24 bg-gradient-to-r from-slate-200 to-transparent"></div>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200" onclick="scrollContainer('carousel-elegant', 'left')">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200" onclick="scrollContainer('carousel-elegant', 'right')">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(15, 23, 42)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth" id="carousel-elegant">

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.1s'}}>
<img alt="Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b5da874d-da7d-4d15-b3a1-f3d4aeed2222_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.2s'}}>
<img alt="Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 cursor-pointer w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f90e9d4-de61-434c-82f2-eada5f3ca206_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 flex z-20 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.3s'}}>
<img alt="Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9d297840-fa40-4680-a367-0d8dff039517_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.4s'}}>
<img alt="Dress" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc15bcea-f121-4522-b2d1-a772d58c96f8_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.5s'}}>
<img alt="Dress" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70ed37e2-fcd0-453b-87f7-684aabafa9e9_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.6s'}}>
<img alt="Dress" className="h-full w-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dd7f8507-64dd-4483-a01b-850aa13daf99_800w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end justify-center pb-6">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>
</div>
</div>

<div className="w-full h-px bg-gradient-to-r from-transparent via-amber-200 to-transparent my-10 opacity-60"></div>

<div className="mb-8">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4 flex-1">
<h3 className="text-2xl font-semibold text-slate-800 tracking-tight whitespace-nowrap">Cocktail Dresses</h3>
<div className="h-px w-24 bg-gradient-to-r from-slate-200 to-transparent"></div>
</div>
<div className="hidden md:flex gap-2">
<button className="p-2 rounded-full border border-slate-200 text-slate-500 hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200" onclick="scrollContainer('carousel-cocktail', 'left')">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="hover:bg-slate-50 hover:text-slate-900 transition-colors focus:outline-none focus:ring-2 focus:ring-slate-200 text-slate-500 border-slate-200 border rounded-full pt-2 pr-2 pb-2 pl-2" onclick="scrollContainer('carousel-cocktail', 'right')">
<svg className="" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="flex gap-6 overflow-x-auto snap-x snap-mandatory pb-8 -mx-6 px-6 md:mx-0 md:px-0 scroll-smooth" id="carousel-cocktail">

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.1s'}}>
<img alt="Cocktail Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c528ab43-3a51-4e5a-b673-e00e367aaa12_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.2s'}}>
<img alt="Cocktail Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/af613e02-7d6f-4f3a-8eac-941eb030c65a_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.3s'}}>
<img alt="Cocktail Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] sm:w-[45vw] md:w-[300px] lg:w-[350px] group relative aspect-[3/4] overflow-hidden rounded-xl bg-slate-100 cursor-pointer gallery-item-animate shadow-sm border border-slate-100 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-500" onclick="openGalleryLightbox(this.querySelector('img').src)" style={{animationDelay: '0.4s'}}>
<img alt="Cocktail Dress" className="transition-transform duration-700 ease-out group-hover:scale-105 w-full h-full object-cover z-20" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5f540c67-890e-4ffb-ad09-552505eee1c2_800w.jpg"/>
<div className="group-hover:opacity-100 transition-opacity duration-300 z-20 flex bg-gradient-to-t from-slate-900/40 via-transparent to-transparent opacity-0 pb-6 absolute top-0 right-0 bottom-0 left-0 items-end justify-center">
<span className="bg-white/90 backdrop-blur text-slate-900 text-xs font-medium px-4 py-2 rounded-full transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">View Details</span>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<a className="inline-flex items-center gap-2 border-b border-slate-900 pb-0.5 text-slate-900 font-medium hover:text-pink-600 hover:border-pink-600 transition-colors" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady">
          Download Full Catalog PDF
          <svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><polyline points="7 10 12 15 17 10"></polyline><line x1="12" x2="12" y1="15" y2="3"></line></svg>
</a>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-200 relative overflow-hidden" id="process">

<div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[radial-gradient(#000_1px,transparent_1px)] [background-size:24px_24px]"></div>
<div className="max-w-7xl mx-auto px-6 relative">
<div className="text-center mb-16">
<span className="text-pink-500 font-semibold tracking-wider uppercase text-xs mb-3 block">From sketch to shelf</span>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 mb-4">How We Work</h2>
<p className="text-slate-500 max-w-2xl mx-auto">Seamless production process designed for boutique owners and retailers.</p>
</div>
<div className="grid md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-8 left-0 w-full h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent z-0"></div>

<div className="relative z-10 text-center group">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
<svg className="text-slate-400 group-hover:text-pink-500 transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><polyline points="10 9 9 9 8 9"></polyline></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">1. Select Styles</h3>
<p className="text-sm text-slate-500 leading-relaxed">Browse our collection or send your custom designs for manufacturing.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
<svg className="text-slate-400 group-hover:text-pink-500 transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M20.42 4.58a5.4 5.4 0 0 0-7.65 0l-.77.78-.77-.78a5.4 5.4 0 0 0-7.65 0C1.46 6.7 1.33 10.28 4 13l8 8 8-8c2.67-2.72 2.54-6.3.42-8.42z"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">2. Place Order</h3>
<p className="text-sm text-slate-500 leading-relaxed">Low MOQ of 5 pieces per model. Mix sizes as needed.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
<svg className="text-slate-400 group-hover:text-pink-500 transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 2 3 6v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6l-3-4Z"></path><path d="M3 6h18"></path><path d="M16 10a4 4 0 0 1-8 0"></path></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">3. Production</h3>
<p className="text-sm text-slate-500 leading-relaxed">Fast 5-7 day turnaround time with triple quality checks.</p>
</div>

<div className="relative z-10 text-center group">
<div className="w-16 h-16 mx-auto bg-white rounded-2xl border border-slate-100 shadow-lg shadow-slate-200/50 flex items-center justify-center mb-6 group-hover:scale-110 group-hover:border-pink-200 transition-all duration-300">
<svg className="text-slate-400 group-hover:text-pink-500 transition-colors" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><rect height="13" width="15" x="1" y="3"></rect><polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon><circle cx="5.5" cy="18.5" r="2.5"></circle><circle cx="18.5" cy="18.5" r="2.5"></circle></svg>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">4. Free Shipping</h3>
<p className="text-sm text-slate-500 leading-relaxed">Direct delivery to your doorstep in UAE, KSA &amp; Qatar.</p>
</div>
</div>
<div className="mt-16 text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-slate-900 rounded-full hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-slate-900" href="https://wa.me/996773799028?text=Hello%2C%20I%20want%20to%20order%20wholesale%20kids%20clothing%20from%20Mini%20Lady">
                    Start Your Order Now
                </a>
</div>
</div>
</section>

<section className="py-24 bg-white" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl font-semibold text-center text-slate-900 mb-16 tracking-tight">Trusted by boutiques across GCC</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl relative">
<div className="flex gap-1 mb-4 text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"The quality of the fabric is unmatched in this price range. My customers in Riyadh absolutely love the detailed stitching. Sold out the first batch in 3 days!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-pink-100 flex items-center justify-center text-pink-600 font-bold">FA</div>
<div>
<div className="font-semibold text-slate-900">Fatima Al-Sayed</div>
<div className="text-xs text-slate-500">Boutique Owner, Riyadh</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<div className="flex gap-1 mb-4 text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Ordering was so simple via WhatsApp. The team sent me a sample video before shipping. Very professional service and fast delivery to Dubai."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">SK</div>
<div>
<div className="font-semibold text-slate-900">Sarah K.</div>
<div className="text-xs text-slate-500">Retail Manager, Dubai</div>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<div className="flex gap-1 mb-4 text-amber-400">
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
<svg className="w-4 h-4 fill-current" viewbox="0 0 20 20"><path d="M10 15l-5.878 3.09 1.123-6.545L.489 6.91l6.572-.955L10 0l2.939 5.955 6.572.955-4.756 4.635 1.123 6.545z"></path></svg>
</div>
<p className="text-slate-600 mb-6 leading-relaxed">"Finally found a supplier who understands GCC tastes. Modest yet elegant designs. The packaging was also retail-ready which saved me time."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">MJ</div>
<div>
<div className="font-semibold text-slate-900">Maryam Jameel</div>
<div className="text-xs text-slate-500">Online Reseller, Qatar</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<span className="text-2xl font-bold text-white mb-6 block tracking-tight">MINI LADY</span>
<p className="text-sm text-slate-400 mb-6">Premium manufacturing partner for children's wear in the GCC region. Quality, speed, and reliability.</p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook"></span></a>
<a className="text-slate-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
</div>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Quick Links</h4>
<ul className="space-y-2 text-sm">
<li><a className="hover:text-pink-400 transition-colors" href="#gallery-collection">Collections</a></li>
<li><a className="hover:text-pink-400 transition-colors" href="#wholesale">Wholesale Info</a></li>
<li><a className="hover:text-pink-400 transition-colors" href="#process">How it Works</a></li>
<li><a className="hover:text-pink-400 transition-colors" href="#testimonials">Reviews</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Contact</h4>
<ul className="space-y-2 text-sm">
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:phone"></span> +996 773 799 028</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:mail"></span> sales@minilady.com</li>
<li className="flex items-center gap-2"><span className="iconify" data-icon="lucide:map-pin"></span> Bishkek, Kyrgyzstan (Factory)</li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Newsletter</h4>
<p className="text-xs text-slate-400 mb-4">Get the latest catalog updates.</p>
<form className="flex gap-2">
<input className="bg-slate-800 border-none rounded-lg px-3 py-2 text-sm w-full focus:ring-1 focus:ring-pink-500 text-white placeholder-slate-500" placeholder="Email" type="email"/>
<button className="bg-pink-600 hover:bg-pink-700 text-white px-3 py-2 rounded-lg text-sm font-medium transition-colors" type="submit">Join</button>
</form>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<p>© 2024 Mini Lady Kids Wear. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
