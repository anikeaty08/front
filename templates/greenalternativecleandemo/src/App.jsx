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
},
colors: {
brand: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981', // Emerald Green Primary
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out',
'marquee': 'marquee 40s linear infinite',
'cta-attention': 'ctaAttention 4s infinite',
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
'0%, 80%, 100%': { transform: 'scale(1)' },
'90%': { transform: 'scale(1.02)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      function openQuoteForm() {
        const modal = document.getElementById('quote-modal');
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
        btn.innerHTML = `<iconify-icon icon="solar:refresh-linear" class="animate-spin"></iconify-icon> Sending...`;

        // Simulate API call
        setTimeout(() => {
          btn.innerHTML = `<iconify-icon icon="solar:check-circle-linear"></iconify-icon> Sent!`;
          btn.classList.remove('bg-brand-600', 'hover:bg-brand-500');
          btn.classList.add('bg-gray-900', 'hover:bg-black');

          setTimeout(() => {
            closeQuoteForm();
            event.target.reset();
            btn.disabled = false;
            btn.innerText = originalText;
            btn.classList.add('bg-brand-600', 'hover:bg-brand-500');
            btn.classList.remove('bg-gray-900', 'hover:bg-black');
          }, 1500);
        }, 800);
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

      // Scroll Reveal Logic
      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = {
          root: null,
          rootMargin: '0px',
          threshold: 0.15
        };

        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target); // Run once
            }
          });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Navbar blur effect on scroll
        const nav = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('bg-white/90', 'shadow-sm');
                nav.classList.remove('bg-white/80', 'border-transparent');
            } else {
                nav.classList.remove('bg-white/90', 'shadow-sm');
                nav.classList.add('bg-white/80', 'border-transparent');
            }
        });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-200/50 bg-white/80" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-9 h-9 rounded-xl bg-brand-500 flex items-center justify-center text-white shadow-sm shadow-brand-500/30">
<iconify-icon height="22" icon="solar:leaf-line-duotone" width="22"></iconify-icon>
</div>
<span className="font-semibold text-lg tracking-tight text-gray-900">
            Green Alternative
            <span className="text-gray-400 font-normal hidden sm:inline ml-1">
              Cleaning
            </span>
</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#about">
            About Us
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#approach">
            Our Approach
          </a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">
            Services
          </a>
<div className="flex items-center gap-5 ml-4 border-l border-gray-200 pl-6">
<a className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:9193954270">
<iconify-icon height="18" icon="solar:phone-calling-linear" width="18"></iconify-icon>
              (919) 395-4270
            </a>
<button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Free Estimate
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-gray-900 border border-gray-200" href="tel:9193954270">
<iconify-icon height="20" icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-600" onclick="toggleMobileMenu()">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white border-b border-gray-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#about" onclick="closeMobileMenu()">
            About Us
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#approach" onclick="closeMobileMenu()">
            Our Approach
          </a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#services" onclick="closeMobileMenu()">
            Services
          </a>
<button className="w-full bg-brand-600 text-white text-base font-medium py-3 rounded-lg shadow-sm mt-4" onclick="openQuoteForm(); closeMobileMenu()">
            Get a Free Estimate
          </button>
</div>
</div>
</nav>

<section className="relative h-[90vh] min-h-[600px] flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Spotless clean bedroom" className="w-full h-full object-cover object-center opacity-40" src="https://static.wixstatic.com/media/7e3f59f4d58ffc0e7d9c4c8ed2053d2f.jpg/v1/fill/w_1920,h_1080,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/7e3f59f4d58ffc0e7d9c4c8ed2053d2f.jpg"/>
<div className="absolute inset-0 bg-gradient-to-b from-gray-900/80 via-gray-900/60 to-gray-900/90 mix-blend-multiply"></div>
</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-20">
<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-100 text-xs font-medium tracking-wide uppercase">
              Serving Raleigh, NC &amp; Surrounding Areas
            </span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold text-white tracking-tighter leading-[1.05] mb-6 drop-shadow-lg">
            Make the <span className="text-brand-400">Green Alternative</span> Choice
          </h1>
<p className="text-lg md:text-xl text-gray-200 mb-10 max-w-2xl mx-auto leading-relaxed font-light drop-shadow">
            We don't rely on harsh, smelly chemicals to get the grime off. We use completely safe products and good old-fashioned scrubbing to protect your home.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-400 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent" onclick="openQuoteForm()">
              Request a Free Estimate
            </button>
<a className="w-full sm:w-auto bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" href="tel:9193954270">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
              Call (919) 395-4270
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="w-12 h-12 rounded-xl bg-brand-50 flex items-center justify-center text-brand-600 mb-6 border border-brand-100">
<iconify-icon height="24" icon="solar:star-fall-linear" width="24"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-medium text-gray-900 mb-6 tracking-tighter leading-tight">
              Welcome to Green Alternative Cleaning Services
            </h2>
<div className="space-y-5 text-lg text-gray-600 font-light leading-relaxed">
<p>
                Green Alternative is a proud woman-owned company located right here in Raleigh, NC. Our absolute priority is to provide professional, reliable cleaning services to our community.
              </p>
<p>
                While there are countless cleaning services available, we stand out from the crowd. From the moment our fully-trained crew arrives at your door, you will know that we know exactly what we are doing.
              </p>
<p className="font-medium text-gray-800">
                Satisfaction is guaranteed—we are the team you can trust and rely on. Now you relax, and we'll take care of the rest.
              </p>
</div>
</div>
<div className="relative reveal delay-100 feature-card rounded-2xl overflow-hidden shadow-lg border border-gray-100 aspect-[4/3] lg:aspect-auto lg:h-[500px]">
<img alt="Green Alternative Team" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/e6efbc_ae0443d60dda4fe4b7955851d21225d6~mv2_d_3109_2543_s_4_2.jpg/v1/fill/w_800,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/e6efbc_ae0443d60dda4fe4b7955851d21225d6~mv2_d_3109_2543_s_4_2.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/60 to-transparent pointer-events-none"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="bg-white/95 backdrop-blur px-5 py-3 rounded-xl inline-block shadow-sm">
<span className="text-sm font-semibold text-gray-900 tracking-wide uppercase block">Locally Owned</span>
<span className="text-xs text-gray-500">Raleigh, North Carolina</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100" id="approach">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium text-gray-900 mb-4 tracking-tighter">
            Why Choose Our Green Approach?
          </h2>
<p className="text-lg text-gray-500 max-w-2xl mx-auto font-light">
            We prioritize the health of your home and family without compromising on cleanliness.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group feature-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 reveal flex flex-col sm:flex-row h-auto sm:h-64">
<div className="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
<img alt="Safe Cleaning Products" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/fe42c46e27b745ad8d007f01c5e495b1.jpg/v1/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/Cleaning%20Products.jpg"/>
</div>
<div className="p-8 sm:w-3/5 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">No Harsh Chemicals</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Please do not risk your possessions to inexperienced cleaners using harsh liquids. Our products are completely safe, gentle, and non-toxic to touch or inhale.
              </p>
</div>
</div>

<div className="group feature-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 reveal delay-100 flex flex-col sm:flex-row h-auto sm:h-64">
<div className="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
<img alt="HEPA Vacuuming" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/e6efbc_4fb59aa4ab4b40439e38137d9382306d~mv2_d_2964_3024_s_4_2.jpg/v1/crop/x_0,y_806,w_2366,h_1639/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E4907%20(1)_JPG.jpg"/>
</div>
<div className="p-8 sm:w-3/5 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:wind-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">HEPA Filtration</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Our vacuums are equipped with HEPA filtration, clearing up to 99% of bacteria and allergens from your carpet and furniture to help you breathe easier.
              </p>
</div>
</div>

<div className="group feature-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 reveal flex flex-col sm:flex-row h-auto sm:h-64">
<div className="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
<img alt="Professional Staff" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/e6efbc_2310d1b3d05b4ca19479d5fe3f28474f~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_64,y_610,w_2960,h_2330/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/IMG_E4923_JPG.jpg"/>
</div>
<div className="p-8 sm:w-3/5 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Trained Professionals</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Our staff is always friendly and highly professional. Their extensive training ensures they take maximum precautions to prevent any damage to your home.
              </p>
</div>
</div>

<div className="group feature-card bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-md transition-all duration-300 border border-gray-100 reveal delay-100 flex flex-col sm:flex-row h-auto sm:h-64">
<div className="w-full sm:w-2/5 h-48 sm:h-full relative overflow-hidden">
<img alt="Company Vehicles" className="w-full h-full object-cover" src="https://static.wixstatic.com/media/e6efbc_e11c3b0374bb456598b692725d29ecae~mv2_d_3024_4032_s_4_2.jpg/v1/crop/x_0,y_891,w_3024,h_2251/fill/w_600,h_600,al_c,q_85,usm_0.66_1.00_0.01,enc_avif,quality_auto/second%20company%20car.jpg"/>
</div>
<div className="p-8 sm:w-3/5 flex flex-col justify-center">
<div className="w-10 h-10 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4">
<iconify-icon height="20" icon="solar:clipboard-list-linear" width="20"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2 tracking-tight">Consistent Results</h3>
<p className="text-sm text-gray-500 leading-relaxed">
                Our cleaning packages are highly detailed and organized. We rely on good old-fashioned scrubbing to provide you with consistent, spotless results every time.
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 bg-emerald-900 text-center relative overflow-hidden">

<div className="absolute inset-0 opacity-10">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="1"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-3xl mx-auto px-6 relative z-10 reveal">
<div className="w-16 h-16 mx-auto bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 border border-white/20 backdrop-blur-sm shadow-inner">
<iconify-icon height="32" icon="solar:sparkles-linear" width="32"></iconify-icon>
</div>
<h2 className="text-4xl md:text-5xl font-medium text-white mb-6 tracking-tighter leading-tight">
          It turns out the grass <em className="font-light italic text-emerald-300">is</em> greener on this side.
        </h2>
<p className="text-xl text-emerald-100 mb-10 font-light max-w-xl mx-auto leading-relaxed">
          Satisfaction is guaranteed. We are the team you can trust. Now you relax, and we'll take care of the rest.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-white text-emerald-900 hover:bg-gray-50 text-lg font-medium px-8 py-4 rounded-xl shadow-xl transition-all duration-300 transform active:scale-95" onclick="openQuoteForm()">
            Book an Appointment
          </button>
<a className="bg-white/10 text-white border border-white/20 hover:bg-white/20 text-lg font-medium px-8 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2 backdrop-blur-sm" href="tel:9193954270">
<iconify-icon height="20" icon="solar:phone-linear" width="20"></iconify-icon>
            Call Us Today
          </a>
</div>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 mb-12">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4">
<div className="w-7 h-7 rounded bg-brand-500 flex items-center justify-center text-white shadow-sm">
<iconify-icon height="16" icon="solar:leaf-line-duotone" width="16"></iconify-icon>
</div>
<span className="font-semibold text-gray-900 tracking-tight">Green Alternative</span>
</div>
<p className="text-gray-500 leading-relaxed mb-6 text-sm">
              Providing professional, safe, and eco-friendly cleaning services to residential and commercial clients in Raleigh, NC.
            </p>
<div className="flex items-center gap-4">

<a className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-500 hover:border-brand-200 transition-colors" href="#">
<iconify-icon height="18" icon="solar:round-alt-arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-brand-500 hover:border-brand-200 transition-colors" href="#">
<iconify-icon height="18" icon="solar:round-alt-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Quick Links
            </h3>
<ul className="space-y-3 text-sm">
<li><a className="text-gray-600 hover:text-brand-600 transition-colors" href="#">Home</a></li>
<li><a className="text-gray-600 hover:text-brand-600 transition-colors" href="#about">About Us</a></li>
<li><a className="text-gray-600 hover:text-brand-600 transition-colors" href="#">Our Services</a></li>
<li><a className="text-gray-600 hover:text-brand-600 transition-colors" href="#">Cleaning Packages</a></li>
<li><a className="text-gray-600 hover:text-brand-600 transition-colors" href="#">Copy of Policies</a></li>
</ul>
</div>
<div>
<h3 className="text-xs font-semibold uppercase tracking-widest text-gray-400 mb-5">
              Contact Info
            </h3>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-0.5" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="text-gray-600">
                  4924 Windy Hill Drive,<br/>Raleigh, NC 27609
                </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-0.5" height="18" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="text-gray-600 hover:text-brand-600 transition-colors" href="tel:9193954270">
                  (919) 395-4270
                </a>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-gray-400 mt-0.5" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="text-gray-600 hover:text-brand-600 transition-colors break-all" href="mailto:info@greenalternativeclean.com">
                  info@greenalternativeclean.com
                </a>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-gray-400 text-xs">
            © 2025 Green Alternative Cleaning Services, LLC. All rights reserved.
          </p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 bg-gray-900/40 backdrop-blur-sm transition-opacity" onclick="closeQuoteForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-md max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in ring-1 ring-gray-200 p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl font-medium text-gray-900 tracking-tight">
              Get an Estimate
            </h3>
<p className="text-sm text-gray-500 mt-1">
              Leave your details and we'll reach out shortly.
            </p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600 -mr-2" onclick="closeQuoteForm()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="handleQuoteSubmit(event)">
<div className="space-y-1.5">
<label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Full Name
            </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Phone Number
            </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white" placeholder="(919) 000-0000" required="" type="tel"/>
</div>
<div className="space-y-1.5">
<label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Email Address
            </label>
<input className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400 hover:border-gray-300 bg-gray-50/50 focus:bg-white" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="block text-[11px] font-semibold uppercase tracking-wider text-gray-500">
              Service Requested
            </label>
<div className="relative">
<select className="w-full px-4 py-2.5 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 focus:bg-white hover:border-gray-300 text-gray-700 appearance-none cursor-pointer">
<option value="">Select a package...</option>
<option value="Standard">Standard Cleaning</option>
<option value="Deep">Deep Cleaning</option>
<option value="Move">Move In / Move Out</option>
<option value="Commercial">Commercial Cleaning</option>
</select>
<div className="absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none text-gray-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-medium py-3 rounded-lg transition-all shadow-sm mt-4 flex items-center justify-center gap-2" type="submit">
            Send Request
          </button>
</form>
</div>
</div>



    </>
  );
}
