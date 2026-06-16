import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
script: ['Great Vibes', 'cursive'],
},
colors: {
brand: {
50: '#FAFAF5',
100: '#F5F0DA',
200: '#EADCA6',
300: '#DFC272',
400: '#D4AF37', // Main Gold
500: '#B39226', // Darker Gold for text/buttons
600: '#917418',
700: '#705710',
800: '#523E08',
900: '#332604',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'marquee': 'marquee 60s linear infinite',
'cta-attention': 'ctaAttention 3s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
marquee: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
},
ctaAttention: {
'0%, 80%, 100%': { transform: 'scale(1) rotate(0deg)' },
'85%': { transform: 'scale(1.05) rotate(-1deg)' },
'90%': { transform: 'scale(1.05) rotate(1deg)' },
'95%': { transform: 'scale(1.05) rotate(-1deg)' },
}
}
}
}
}



      function openQuoteForm(serviceType = '') {
        const modal = document.getElementById('quote-modal');
        const select = document.getElementById('service-select');

        if (serviceType) {
            select.value = serviceType;
        }

        modal.classList.remove('hidden');
        modal.classList.add('flex');
        document.body.style.overflow = 'hidden';
      }

      function closeQuoteForm() {
        const modal = document.getElementById('quote-modal');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        document.body.style.overflow = '';
      }

      function handleQuoteSubmit(event) {
        event.preventDefault();
        const btn = event.target.querySelector('button[type="submit"]');
        const originalText = btn.innerText;

        btn.disabled = true;
        btn.innerText = 'Sending...';

        setTimeout(() => {
          btn.innerText = 'Sent Successfully!';
          btn.classList.remove('bg-brand-500');
          btn.classList.add('bg-green-600');

          setTimeout(() => {
            closeQuoteForm();
            event.target.reset();
            btn.disabled = false;
            btn.innerText = originalText;
            btn.classList.add('bg-brand-500');
            btn.classList.remove('bg-green-600');
          }, 1500);
        }, 1000);
      }

      function toggleMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        if (menu.classList.contains('menu-closed')) {
          menu.classList.remove('menu-closed');
          menu.classList.add('menu-open');
        } else {
          menu.classList.add('menu-closed');
          menu.classList.remove('menu-open');
        }
      }

      function closeMobileMenu() {
        const menu = document.getElementById('mobile-menu');
        menu.classList.add('menu-closed');
        menu.classList.remove('menu-open');
      }

      // Scroll Reveal
      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, { threshold: 0.1 });

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar bg change on scroll
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('bg-white/95', 'shadow-sm');
                nav.classList.remove('bg-white/90');
            } else {
                nav.classList.remove('bg-white/95', 'shadow-sm');
                nav.classList.add('bg-white/90');
            }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed z-50 transition-all duration-300 bg-black/90 border-gray-800/50 border-b top-0 right-0 left-0 backdrop-blur-xl" id="navbar" style={{}}>
<div className="flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex-shrink-0" href="#">
<img alt="A&amp;G Luxury Home" className="bg-center w-40 max-w-xl object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4f524b97-a450-4faa-b634-16725fffe328_1600w.png"/>
</a>

<div className="hidden md:flex gap-8 items-center">
<a className="text-base font-medium transition-colors text-gray-400 hover:text-brand-400" href="#services" style={{}}>
            Services
          </a>
<a className="text-base font-medium transition-colors text-gray-400 hover:text-brand-400" href="#process" style={{}}>
            Process
          </a>
<a className="text-base font-medium transition-colors text-gray-400 hover:text-brand-400" href="#results" style={{}}>
            Projects
          </a>
<a className="text-base font-medium transition-colors text-gray-400 hover:text-brand-400" href="#about" style={{}}>
            About
          </a>
<div className="flex items-center gap-4 ml-4">
<a className="flex items-center gap-2 text-base font-medium transition-colors tracking-tight text-gray-100 hover:text-brand-400" href="tel:0400000000" style={{}}>
<svg className="lucide lucide-phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
              (555) 000-0000
            </a>
<button className="text-sm font-medium px-6 py-3 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none border bg-gray-100 hover:bg-white text-black border-gray-200" onclick="openQuoteForm()" style={{}}>
              Get Free Estimate
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 rounded-full flex items-center justify-center border bg-brand-950 text-brand-400 border-brand-800" href="tel:0400000000">
<svg className="lucide lucide-phone" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-300 hover:text-brand-400" onclick="toggleMobileMenu()" style={{}}>
<svg className="lucide lucide-menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
</div>

<div className="menu-closed flex flex-col border-b md:hidden absolute top-24 w-full left-0 shadow-xl z-40 bg-black border-gray-900" id="mobile-menu" style={{}}>
<div className="flex flex-col p-6 space-y-4">
<a className="text-lg font-medium py-2 border-b text-gray-400 border-gray-950" href="#services" onclick="closeMobileMenu()" style={{}}>
            Services
          </a>
<a className="text-lg font-medium py-2 border-b text-gray-400 border-gray-950" href="#process" onclick="closeMobileMenu()" style={{}}>
            Process
          </a>
<a className="text-lg font-medium py-2 border-b text-gray-400 border-gray-950" href="#results" onclick="closeMobileMenu()" style={{}}>
            Projects
          </a>
<button className="w-full bg-brand-500 text-lg font-medium py-3 rounded-lg shadow-sm text-black" onclick="openQuoteForm(); closeMobileMenu()">
            Get Free Estimate
          </button>
</div>
</div>
</nav>

<section className="relative min-h-screen flex flex-col items-center justify-center overflow-hidden pt-24 bg-gray-100" style={{}}>

<div className="bg-[url(https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover bg-center z-0 absolute top-0 right-0 bottom-0 left-0">
<div className="absolute inset-0 mix-blend-multiply bg-gray-100/70" style={{}}></div>
<div className="bg-gradient-to-br absolute top-0 right-0 bottom-0 left-0 from-slate-400/10 to-slate-600" style={{}}></div>
</div>

<div className="flex flex-col z-10 w-full pt-10 pr-6 pl-6 relative items-center justify-center" style={{maskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)', WebkitMaskImage: 'linear-gradient(170deg, transparent, black 0%, black 100%, transparent)'}}>
<div className="max-w-5xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-brand-500/20 border backdrop-blur-md mb-10 shadow-lg ring-1 border-brand-600/30 ring-black/10">
<span className="w-2 h-2 rounded-full animate-pulse shadow-[0_0_10px_rgba(212,175,55,0.8)] bg-brand-600"></span>
<span className="text-sm font-semibold tracking-wide uppercase text-brand-800">
              Fast Approval &amp; Low Monthly Payments
            </span>
</div>
<div className="flex flex-col items-center justify-center gap-8 mb-10">
<h1 className="md:text-7xl lg:text-8xl leading-none text-5xl font-semibold text-black tracking-tight font-serif text-center drop-shadow-2xl">
        A&amp;G Luxury Home <span className="text-gold-gradient block mt-2">
                Remodeling
              </span></h1>
<h2 className="text-2xl md:text-3xl font-medium tracking-tight leading-snug max-w-3xl text-center text-slate-50" style={{}}>
        Kitchens, Bathrooms, Roofing &amp; More
      </h2>
</div>
<p className="md:text-2xl leading-relaxed text-xl font-light max-w-2xl mr-auto mb-12 ml-auto text-slate-50" style={{}}>
      Transform your living space with our expert remodeling services.
      We offer fast &amp; easy approval with low monthly payments to make your
      dream home a reality.
    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-5">
<button className="w-full sm:w-auto bg-brand-500 hover:-translate-y-0.5 text-lg font-medium px-10 py-4 rounded-xl shadow-lg hover:shadow-brand-500/40 transition-all duration-300 border border-transparent animate-cta-attention hover:animate-none hover:bg-brand-600 text-black" onclick="openQuoteForm()">
              Get Free Estimate
            </button>
<a className="sm:w-auto transition-all duration-300 flex items-center justify-center gap-2 hover:bg-black/10 text-lg font-medium text-black bg-black/5 w-full border-black/20 border rounded-xl pt-4 pr-10 pb-4 pl-10 backdrop-blur-md" href="#services">
        View Services
      </a>
</div>
</div>

<div className="mt-20 flex flex-wrap items-center justify-center gap-x-12 gap-y-8 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2.5 rounded-full border border-brand-500/30">
<svg className="lucide lucide-check-circle text-brand-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path>
<path d="M22 4L12 14.01l-3-3"></path>
</svg>
</div>
<span className="text-base font-medium tracking-wide text-slate-50/90" style={{}}>
              Fast &amp; Easy Approval
            </span>
</div>
<div className="h-8 w-px hidden sm:block bg-black/10"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2.5 rounded-full border border-brand-500/30">
<svg className="lucide lucide-badge-dollar-sign text-brand-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z">
</path>
<path d="M12 7v10"></path>
<path d="M16 8h-2a2 2 0 0 0-2 2v2a2 2 0 0 0 2 2h2v2h-4"></path>
</svg>
</div>
<span className="text-base font-medium tracking-wide text-slate-50/90" style={{}}>
              Low Monthly Payments
            </span>
</div>
<div className="h-8 w-px hidden sm:block bg-black/10"></div>
<div className="flex items-center gap-3 group">
<div className="bg-brand-500/20 p-2.5 rounded-full border border-brand-500/30">
<svg className="lucide lucide-hammer text-brand-700" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 12-8.5 8.5c-.83.83-2.17.83-3 0 0 0 0 0 0 0a2.12 2.12 0 0 1 0-3L12 9"></path>
<path d="M17.64 15 22 10.64"></path>
<path d="m20.91 11.7-1.25-1.25c-.6-.6-.93-1.4-.93-2.25V7.86c0-.55-.45-1-1-1H16.5c-.85 0-1.65-.33-2.25-.93L13 4.64">
</path>
</svg>
</div>
<span className="text-base font-medium tracking-wide text-slate-50/90" style={{}}>
              Quality Craftsmanship
            </span>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-black border-gray-900 border-b pt-16 pb-16" style={{}}>
<div className="max-w-7xl mx-auto px-6 mb-10 flex flex-col sm:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-4">
<div className="flex -space-x-1">
<div className="w-12 h-12 rounded-full flex items-center justify-center border-2 z-10 shadow-sm bg-brand-950 text-brand-400 border-black">
<span className="font-bold text-base">5.0</span>
</div>
<div className="w-12 h-12 rounded-full border-2 flex items-center justify-center shadow-sm bg-gray-900 border-black" style={{}}>
<svg className="w-6 h-6 text-gray-600" fill="currentColor" style={{}} viewbox="0 0 24 24">
<path d="M12 12c2.21 0 4-1.79 4-4s-1.79-4-4-4-4 1.79-4 4 1.79 4 4 4zm0 2c-2.67 0-8 1.34-8 4v2h16v-2c0-2.66-5.33-4-8-4z"></path>
</svg>
</div>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-1.5">
<span className="font-bold text-lg text-gray-100" style={{}}>Excellent</span>
<div className="flex text-brand-500">

<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
</div>
<span className="text-sm text-gray-500 font-medium" style={{}}>
              Trusted by Homeowners
            </span>
</div>
</div>
<div className="flex items-center gap-2 text-base text-gray-500 font-medium px-4 py-2 rounded-full border bg-gray-950 border-gray-900" style={{}}>
<svg className="w-5 h-5 text-gray-100" fill="currentColor" style={{}} viewbox="0 0 24 24">
<path d="M21.35 11.1h-9.17v2.73h6.51c-.33 3.81-3.5 5.44-6.5 5.44C8.36 19.27 5 16.25 5 12c0-4.1 3.2-7.27 7.2-7.27 3.09 0 4.9 1.97 4.9 1.97L19 4.72S16.56 2 12.1 2C6.42 2 2.03 6.8 2.03 12c0 5.05 4.13 10 10.22 10 5.35 0 9.25-3.67 9.25-9.09 0-1.15-.15-1.81-.15-1.81z"></path>
</svg>
          Top Rated Reviews
        </div>
</div>
<div className="w-full relative">
<div className="absolute left-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-r to-transparent z-10 pointer-events-none from-black"></div>
<div className="absolute right-0 top-0 bottom-0 w-8 sm:w-20 bg-gradient-to-l to-transparent z-10 pointer-events-none from-black"></div>
<div className="flex animate-marquee hover:[animation-play-state:paused] w-max">

<div className="flex items-center">

<div className="w-96 flex-shrink-0 p-6 border rounded-2xl mx-4 hover:shadow-lg transition-all duration-300 group bg-gray-950 border-gray-900 hover:bg-black" style={{}}>
<div className="flex gap-0.5 mb-4 group-hover:text-brand-500 transition-colors text-brand-600">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base mb-5 leading-relaxed font-light italic text-gray-300" style={{}}>
                 "Our kitchen remodel turned out better than we imagined! The team was professional and the financing options were great."
               </p>
<div className="flex items-center justify-between">
<span className="font-bold text-sm uppercase tracking-wide text-gray-100" style={{}}>Maria S.</span>
<span className="text-xs uppercase font-medium text-brand-400">Kitchen Remodel</span>
</div>
</div>

<div className="w-96 flex-shrink-0 p-6 border rounded-2xl mx-4 hover:shadow-lg transition-all duration-300 group bg-gray-950 border-gray-900 hover:bg-black" style={{}}>
<div className="flex gap-0.5 mb-4 group-hover:text-brand-500 transition-colors text-brand-600">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base mb-5 leading-relaxed font-light italic text-gray-300" style={{}}>
                 "Transformed our old bathroom into a modern spa. The monthly payments are so affordable. Highly recommend!"
               </p>
<div className="flex items-center justify-between">
<span className="font-bold text-sm uppercase tracking-wide text-gray-100" style={{}}>John D.</span>
<span className="text-xs uppercase font-medium text-brand-400">Bathroom Renovation</span>
</div>
</div>

<div className="w-96 flex-shrink-0 p-6 border rounded-2xl mx-4 hover:shadow-lg transition-all duration-300 group bg-gray-950 border-gray-900 hover:bg-black" style={{}}>
<div className="flex gap-0.5 mb-4 group-hover:text-brand-500 transition-colors text-brand-600">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base mb-5 leading-relaxed font-light italic text-gray-300" style={{}}>
                 "We needed a new roof ASAP. A&amp;G got us approved quickly and the job was done in two days. Excellent service."
               </p>
<div className="flex items-center justify-between">
<span className="font-bold text-sm uppercase tracking-wide text-gray-100" style={{}}>Robert T.</span>
<span className="text-xs uppercase font-medium text-brand-400">Roof Replacement</span>
</div>
</div>
</div>

<div aria-hidden="true" className="flex items-center">
<div className="w-96 flex-shrink-0 p-6 border rounded-2xl mx-4 hover:shadow-lg transition-all duration-300 group bg-gray-950 border-gray-900 hover:bg-black" style={{}}>
<div className="flex gap-0.5 mb-4 group-hover:text-brand-500 transition-colors text-brand-600">
<svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg><svg className="w-5 h-5 fill-current" viewbox="0 0 24 24"><path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z"></path></svg>
</div>
<p className="text-base mb-5 leading-relaxed font-light italic text-gray-300" style={{}}>
                 "Our kitchen remodel turned out better than we imagined! The team was professional and the financing options were great."
               </p>
<div className="flex items-center justify-between">
<span className="font-bold text-sm uppercase tracking-wide text-gray-100" style={{}}>Maria S.</span>
<span className="text-xs uppercase font-medium text-brand-400">Kitchen Remodel</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-950 border-gray-800 border-b pt-28 pb-28" id="services" style={{}}>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-20 reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-tight text-gray-100" style={{}}>
            Home Improvement Services
          </h2>
<p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-gray-400" style={{}}>
            From complete home remodels to flexible financing, we provide everything you need to upgrade your home.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal h-96 border border-gray-800/40" style={{}}>
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1556911220-e15b29be8c8f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 group-hover:bg-gray-900/60 transition-colors duration-300 bg-gray-100/50" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1602028915047-37269d1a73f7?w=800&amp;q=80)] bg-cover bg-center pt-10 pr-10 pb-10 pl-10 relative items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/10 border-black/20 text-brand-700">
<svg className="lucide lucide-chef-hat w-[28px] h-[28px] text-yellow-300" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M12 13v7"></path><path className="" d="M13.5 7h5a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2h-13a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h5"></path><path d="M6 17v-4a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v4"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold text-black tracking-tight font-serif mb-3">
                  Kitchen Remodeling
                </h3>
<p className="text-base mb-6 leading-relaxed font-light text-gray-900" style={{}}>
                  Upgrade your kitchen with modern cabinets, countertops, and appliances.
                </p>
</div>
<button className="text-base font-medium flex items-center gap-2 transition-colors text-black hover:text-brand-700" onclick="openQuoteForm('Kitchen Remodeling')">
                Get Estimate
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-100 h-96 border border-gray-800/40" style={{}}>
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1552321554-5fefe8c9ef14?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 group-hover:bg-gray-900/60 transition-colors duration-300 bg-gray-100/50" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1629079447777-1e605162dc8d?w=800&amp;q=80)] bg-cover bg-center pt-10 pr-10 pb-10 pl-10 relative items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/10 border-black/20 text-brand-700">
<svg className="lucide lucide-droplets w-[28px] h-[28px] text-yellow-300" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M7 16.3c2.2 0 4-1.83 4-4.05c0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05"></path><path className="" d="M12.56 6.6A11 11 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path>
</svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3 tracking-tight text-black">
                  Bathroom Renovations
                </h3>
<p className="text-base mb-6 leading-relaxed font-light text-gray-900" style={{}}>
                  Create a spa-like retreat with new tiling, showers, vanities and fixtures.
                </p>
</div>
<button className="text-base font-medium flex items-center gap-2 transition-colors text-black hover:text-brand-700" onclick="openQuoteForm('Bathroom Renovation')">
                Get Estimate
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-200 h-96 border border-gray-800/40" style={{}}>
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 group-hover:bg-gray-900/60 transition-colors duration-300 bg-gray-100/50" style={{}}></div>
<div className="flex flex-col bg-center h-full bg-[url(https://images.unsplash.com/photo-1635424709870-cdc6e64f0e20?w=800&amp;q=80)] bg-cover pt-10 pr-10 pb-10 pl-10 relative items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/10 border-black/20 text-brand-700">
<svg className="lucide lucide-home w-[28px] h-[28px] text-yellow-500" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
</svg>
</div>
<h3 className="xl:text-slate-950 text-2xl font-semibold tracking-tight font-serif bg-gradient-to-br from-white/10 to-white/0 mb-3" style={{}}>
                  Roofing Services
                </h3>
<p className="leading-relaxed text-base font-light text-gray-900 mb-6" style={{}}>
                  Complete roof replacements and repairs. Durable materials that protect your home.
                </p>
</div>
<button className="text-base font-medium flex items-center gap-2 transition-colors text-black hover:text-brand-700" onclick="openQuoteForm('Roofing Services')">
                Get Estimate
                <svg className="" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal h-96 border border-brand-700/40">
<div className="absolute inset-0 bg-brand-500 transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 bg-gradient-to-br opacity-90 from-brand-600 to-brand-300"></div>
<div className="relative p-10 h-full flex flex-col items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/20 border-black/30 text-black">
<svg className="lucide lucide-badge-percent" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{color: 'rgb(0, 0, 0)', width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path className="" d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path>
</svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3 tracking-tight text-black">
                  Easy Financing
                </h3>
<p className="text-base mb-6 leading-relaxed font-light text-gray-950" style={{}}>
                  Fast &amp; easy approval with low monthly payments tailored to your budget.
                </p>
</div>
<button className="text-base font-bold px-6 py-3 rounded-xl flex items-center gap-2 transition-colors shadow-lg bg-black text-brand-300 hover:bg-gray-950" onclick="openQuoteForm('Financing Inquiry')" style={{}}>
                Check Eligibility
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-100 h-96 border border-gray-800/40" style={{}}>
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?q=80&amp;w=2053&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 group-hover:bg-gray-900/60 transition-colors duration-300 bg-gray-100/50" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1768321917806-b4b6fbbef837?w=800&amp;q=80)] bg-cover bg-center pt-10 pr-10 pb-10 pl-10 relative items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/10 border-black/20 text-brand-700">
<svg className="lucide lucide-layout-template w-[28px] h-[28px] text-yellow-400" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="7" rx="1" width="18" x="3" y="3"></rect><rect className="" height="7" rx="1" width="9" x="3" y="14"></rect><rect className="" height="7" rx="1" width="5" x="16" y="14"></rect>
</svg>
</div>
<h3 className="text-2xl font-semibold text-black tracking-tight font-serif mb-3">
                  Full Home Remodel
                </h3>
<p className="text-base mb-6 leading-relaxed font-light text-gray-900" style={{}}>
                  Complete interior renovations including living areas, basements, and open layouts.
                </p>
</div>
<button className="text-base font-medium flex items-center gap-2 transition-colors text-black hover:text-brand-700" onclick="openQuoteForm('Full Home Remodel')">
                Get Estimate
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-500 reveal delay-200 h-96 border border-gray-800/40" style={{}}>
<div className="absolute inset-0 bg-[url(https://images.unsplash.com/photo-1581141849291-1125c7b692b5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop)] bg-cover bg-center transition-transform duration-700 group-hover:scale-105"></div>
<div className="absolute inset-0 group-hover:bg-gray-900/60 transition-colors duration-300 bg-gray-100/50" style={{}}></div>
<div className="flex flex-col h-full bg-[url(https://images.unsplash.com/photo-1722603931789-aea8bd4f5d01?w=800&amp;q=80)] bg-cover pt-10 pr-10 pb-10 pl-10 relative items-start justify-between">
<div className="">
<div className="w-14 h-14 backdrop-blur-md border rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform bg-black/10 border-black/20 text-brand-700">
<svg className="lucide lucide-paint-roller w-[28px] h-[28px] text-yellow-400" data-icon-replaced="true" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '28px', height: '28px'}} viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="6" rx="2" width="16" x="2" y="2"></rect><path d="M10 16v2a2 2 0 0 1-2 2v0a2 2 0 0 1-2-2v-5"></path><path className="" d="M9 12h12l-3-3.75L18 2"></path>
</svg>
</div>
<h3 className="font-serif text-2xl font-semibold mb-3 tracking-tight text-black">
                  Flooring &amp; Painting
                </h3>
<p className="text-base mb-6 leading-relaxed font-light text-gray-900" style={{}}>
                  Hardwood, laminate, tile installation and professional interior/exterior painting.
                </p>
</div>
<button className="text-base font-medium flex items-center gap-2 transition-colors text-black hover:text-brand-700" onclick="openQuoteForm('Flooring &amp; Painting')">
                Get Estimate
                <svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="bg-black pt-28 pb-28" id="results">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 reveal">
<div className="">
<h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-tight text-gray-100" style={{}}>
              Featured Projects
            </h2>
<p className="text-xl font-light max-w-2xl text-gray-400" style={{}}>
              See the difference professional remodeling makes.
            </p>
</div>
<button className="hidden md:block border px-8 py-4 rounded-xl text-base font-medium transition-colors bg-gray-950 hover:bg-gray-900 border-gray-800 text-gray-100" onclick="openQuoteForm()" style={{}}>
            Start Your Project
          </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group relative h-96 rounded-3xl overflow-hidden shadow-md reveal">
<img alt="Kitchen Remodel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1556910103-1c02745a30bf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-[url(https://images.unsplash.com/photo-1610276173132-c47d148ab626?w=1600&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="text-black absolute bottom-8 left-8">
<div className="bg-brand-500 text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3 tracking-wide text-black">COMPLETED PROJECT</div>
<h3 className="text-2xl font-bold font-serif text-left h-5 mb-2">Modern Kitchen Renovation</h3>
<p className="text-base text-slate-50" style={{}}>Full cabinet replacement and island installation.</p>
</div>
</div>

<div className="group relative h-96 rounded-3xl overflow-hidden shadow-md reveal delay-100">
<img alt="Bathroom Remodel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1507652313519-d4e9174996dd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-center bg-[url(https://images.unsplash.com/photo-1638799869566-b17fa794c4de?w=1600&amp;q=80)] bg-cover absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-8 left-8 text-black">
<div className="bg-brand-500 text-xs font-bold px-3 py-1.5 rounded-lg inline-block mb-3 tracking-wide text-black">COMPLETED PROJECT</div>
<h3 className="text-2xl font-bold font-serif h-5 mb-2">Luxury Master Bath</h3>
<p className="text-base text-slate-50" style={{}}>Walk-in shower upgrade and vanity remodel.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-brand-950/30 border-gray-900 border-t pt-28 pb-28" id="process" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20 reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium mb-6 tracking-tight text-gray-100" style={{}}>
            Our Process
          </h2>
<p className="text-xl max-w-2xl mx-auto font-light leading-relaxed text-gray-400" style={{}}>
            We make home improvement simple with fast approvals and expert work.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 relative">

<div className="hidden md:block absolute top-14 left-0 w-full h-0.5 -z-10 bg-brand-900"></div>

<div className="relative p-8 rounded-3xl border shadow-sm reveal h-full bg-black border-gray-900" style={{}}>
<div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-xl shadow-brand-500/20 text-black">
              1
            </div>
<h3 className="font-serif text-xl font-medium mb-3 text-gray-100" style={{}}>
              Get an Estimate
            </h3>
<p className="text-base text-gray-500 leading-relaxed font-light" style={{}}>
              Contact us for a free consultation. We'll discuss your vision and budget.
            </p>
</div>

<div className="relative p-8 rounded-3xl border shadow-sm reveal delay-100 h-full bg-black border-gray-900" style={{}}>
<div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-xl shadow-brand-500/20 text-black">
              2
            </div>
<h3 className="font-serif text-xl font-medium mb-3 text-gray-100" style={{}}>Fast Approval</h3>
<p className="text-base text-gray-500 leading-relaxed font-light" style={{}}>
              We secure fast &amp; easy financing approval with low monthly payments suited to you.
            </p>
</div>

<div className="relative p-8 rounded-3xl border shadow-sm reveal delay-200 h-full bg-black border-gray-900" style={{}}>
<div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-xl shadow-brand-500/20 text-black">
              3
            </div>
<h3 className="font-serif text-xl font-medium mb-3 text-gray-100" style={{}}>Construction</h3>
<p className="text-base text-gray-500 leading-relaxed font-light" style={{}}>
              Our expert team works efficiently to remodel your home with minimal disruption.
            </p>
</div>

<div className="relative p-8 rounded-3xl border shadow-sm reveal delay-300 h-full bg-black border-gray-900" style={{}}>
<div className="w-12 h-12 bg-brand-500 rounded-full flex items-center justify-center text-lg font-bold mb-6 shadow-xl shadow-brand-500/20 text-black">
              4
            </div>
<h3 className="font-serif text-xl font-medium mb-3 text-gray-100" style={{}}>Walkthrough</h3>
<p className="text-base text-gray-500 leading-relaxed font-light" style={{}}>
              We review the completed project with you to ensure 100% satisfaction.
            </p>
</div>
</div>
</div>
</section>

<section className="py-28 border-t bg-black border-gray-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="font-serif text-4xl md:text-5xl font-medium mb-8 tracking-tight text-gray-100" style={{}}>
              Why Choose A&amp;G?
            </h2>
<p className="text-xl mb-8 leading-relaxed font-light text-gray-400" style={{}}>
              We are dedicated to providing high-quality home improvements that add value and comfort to your life. Our streamlined financing process ensures you don't have to wait to build the home of your dreams.
            </p>
<div className="space-y-5">
<div className="flex items-center gap-4">
<svg className="lucide lucide-check-circle-2 text-brand-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-lg font-medium text-gray-300" style={{}}>
                  Licensed &amp; Insured Professionals
                </span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-check-circle-2 text-brand-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-lg font-medium text-gray-300" style={{}}>Low Monthly Payment Options</span>
</div>
<div className="flex items-center gap-4">
<svg className="lucide lucide-check-circle-2 text-brand-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path>
</svg>
<span className="text-lg font-medium text-gray-300" style={{}}>
                  High-End Materials &amp; Finishes
                </span>
</div>
</div>
</div>

<div className="p-10 rounded-3xl border relative reveal delay-100 shadow-sm bg-brand-950 border-brand-900">
<svg className="lucide lucide-quote absolute top-8 right-8 text-brand-800" fill="none" height="48" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg">
<path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path>
</svg>
<div className="flex text-brand-500 mb-6">
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
<svg fill="currentColor" height="20" stroke="none" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"></path></svg>
</div>
<p className="text-xl leading-relaxed mb-8 italic font-serif text-gray-200" style={{}}>
              "We postponed our renovations for years thinking it was too expensive. A&amp;G's financing plan made it possible for us to get a new roof and kitchen. The quality of work is outstanding."
            </p>
<div>
<div className="font-bold text-lg text-gray-100" style={{}}>James &amp; Emily P.</div>
<div className="text-sm uppercase tracking-wide font-medium text-brand-400">
                Satisfied Homeowners
              </div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 text-center relative overflow-hidden bg-gray-100" style={{}}>

<div className="absolute inset-0 bg-gradient-to-br opacity-60 from-brand-100/40 to-gray-100" style={{}}></div>
<div className="absolute -top-40 -right-40 w-96 h-96 bg-brand-500/10 rounded-full blur-3xl"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
<h2 className="font-serif text-4xl md:text-6xl font-medium mb-8 tracking-tight text-black">
          Ready to Build Your Dream Home?
        </h2>
<p className="text-2xl mb-12 font-light max-w-2xl mx-auto text-slate-50" style={{}}>
          Get fast approval and start your remodeling project today.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-5">
<button className="bg-brand-500 hover:scale-105 transition-all duration-300 text-xl font-medium rounded-xl py-4 px-12 shadow-2xl shadow-brand-500/20 hover:bg-brand-600 text-black" onclick="openQuoteForm()">
            Get Free Estimate
          </button>
<a className="border text-xl font-medium px-12 py-4 rounded-xl shadow-sm transition-all duration-300 flex items-center justify-center gap-3 backdrop-blur-sm bg-black/5 text-black border-black/10 hover:bg-black/10" href="tel:0400000000">
<svg className="lucide lucide-phone" fill="none" height="22" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="22" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
            Call Us
          </a>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-black border-gray-900" style={{}}>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-2">
<div className="flex flex-col items-start gap-1 mb-6">

<div className="flex items-center gap-1">
<svg className="text-brand-500" fill="currentColor" height="12" viewbox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 0L2 10H5L12 3L19 10H22L12 0Z"></path>
<rect fill="white" height="3" rx="0.5" width="3" x="10.5" y="4"></rect>
</svg>
<span className="font-serif text-2xl font-bold text-brand-500 tracking-tight">A&amp;G</span>
</div>
<span className="font-script text-xl -mt-2 ml-1 text-brand-400">Luxury Home</span>
</div>
<p className="text-gray-500 leading-relaxed mb-6 text-base max-w-sm font-light" style={{}}>
              Professional home improvement services specializing in kitchens, bathrooms, and roofing. Committed to quality craftsmanship and affordable financing solutions.
            </p>
</div>
<div>
<h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-100" style={{}}>
              Services
            </h3>
<ul className="space-y-4 text-base">
<li>
<a className="text-gray-500 transition-colors hover:text-brand-400" href="#services" style={{}}>
                  Kitchen Remodeling
                </a>
</li>
<li>
<a className="text-gray-500 transition-colors hover:text-brand-400" href="#services" style={{}}>
                  Bathroom Renovations
                </a>
</li>
<li>
<a className="text-gray-500 transition-colors hover:text-brand-400" href="#services" style={{}}>
                  Roofing
                </a>
</li>
<li>
<a className="text-gray-500 transition-colors hover:text-brand-400" href="#services" style={{}}>
                  Financing Options
                </a>
</li>
</ul>
</div>
<div>
<h3 className="text-sm font-bold uppercase tracking-wider mb-6 text-gray-100" style={{}}>
              Contact
            </h3>
<ul className="space-y-4 text-base">
<li className="flex items-start gap-3">
<svg className="lucide lucide-phone text-brand-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
</svg>
<a className="transition-colors text-gray-400 hover:text-brand-400" href="tel:0400000000" style={{}}>
                  (555) 000-0000
                </a>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-mail text-brand-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<rect height="16" rx="2" width="20" x="2" y="4"></rect><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path>
</svg>
<a className="transition-colors text-gray-400 hover:text-brand-400" href="mailto:info@ag-luxuryhome.com" style={{}}>
                  info@ag-luxuryhome.com
                </a>
</li>
<li className="flex items-start gap-3">
<svg className="lucide lucide-map-pin text-brand-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle>
</svg>
<span className="text-gray-400" style={{}}>
                  Serving Your Local Area
                </span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-gray-900" style={{}}>
<p className="text-sm text-gray-600" style={{}}>
            © 2025 A&amp;G Luxury Home. All rights reserved.
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 backdrop-blur-sm transition-opacity bg-gray-100/60" onclick="closeQuoteForm()" style={{}}></div>
<div className="rounded-3xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in ring-1 bg-black ring-gray-800" style={{}}>
<div className="p-10">
<div className="flex items-center justify-between mb-8">
<div>
<h3 className="font-serif text-3xl font-medium tracking-tight text-gray-100" style={{}}>
                Request Free Estimate
              </h3>
<p className="text-base text-gray-500 mt-2" style={{}}>
                Tell us about your project. Financing options available.
              </p>
</div>
<button className="p-2 rounded-full transition-colors hover:bg-gray-900 text-gray-600 hover:text-gray-400" onclick="closeQuoteForm()" style={{}}>
<svg className="lucide lucide-x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path><path d="m6 6 12 12"></path>
</svg>
</button>
</div>
<form className="space-y-6" onsubmit="handleQuoteSubmit(event)">
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                Name
              </label>
<input className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base placeholder-gray-400 border-gray-800 hover:border-brand-800" placeholder="Your Name" required="" style={{}} type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                  Phone
                </label>
<input className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base placeholder-gray-400 border-gray-800 hover:border-brand-800" placeholder="(555) 000-0000" required="" style={{}} type="tel"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                  Location
                </label>
<input className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base placeholder-gray-400 border-gray-800 hover:border-brand-800" placeholder="Zip Code or City" required="" style={{}} type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                Project Type
              </label>
<div className="relative">
<select className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base appearance-none border-gray-800 bg-black hover:border-brand-800 text-gray-300" id="service-select" style={{}}>
<option value="">Select a service...</option>
<option value="Kitchen Remodeling">Kitchen Remodeling</option>
<option value="Bathroom Renovation">Bathroom Renovation</option>
<option value="Roofing Services">Roofing</option>
<option value="Full Home Remodel">Full Home Remodel</option>
<option value="Flooring &amp; Painting">Flooring &amp; Painting</option>
<option value="Financing Inquiry">Financing Inquiry</option>
</select>
<svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                Interested in Financing?
              </label>
<div className="relative">
<select className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base appearance-none border-gray-800 bg-black hover:border-brand-800 text-gray-300" style={{}}>
<option value="Yes">Yes, I'm interested in low monthly payments</option>
<option value="No">No, paying cash</option>
<option value="Maybe">Maybe, tell me more</option>
</select>
<svg className="absolute right-5 top-1/2 -translate-y-1/2 w-4 h-4 pointer-events-none text-gray-600" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-500" style={{}}>
                Project Details
              </label>
<textarea className="w-full px-5 py-3.5 rounded-xl border focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-base resize-none placeholder-gray-400 border-gray-800 hover:border-brand-800" placeholder="Tell us about what you want to achieve..." rows="3" style={{}}></textarea>
</div>
<button className="w-full bg-brand-500 text-lg font-medium py-4 rounded-xl transition-all shadow-md mt-4 flex items-center justify-center gap-3 transform active:scale-[0.98] hover:bg-brand-400 text-black" type="submit">
              Request Estimate
            </button>
<p className="text-xs text-center mt-4 text-gray-600" style={{}}>
              Your information is secure.
            </p>
</form>
</div>
</div>
</div>



    </>
  );
}
