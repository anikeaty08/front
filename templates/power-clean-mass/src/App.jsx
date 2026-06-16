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
50: '#eff6ff',
100: '#dbeafe',
200: '#bfdbfe',
300: '#93c5fd',
400: '#60a5fa',
500: '#2563eb', // Royal Blue updated to modern hex
600: '#1d4ed8',
700: '#1e40af',
800: '#1e3a8a',
900: '#172554',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'cta-attention': 'ctaAttention 3s infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
ctaAttention: {
'0%, 80%, 100%': { transform: 'scale(1)' },
'85%': { transform: 'scale(1.02)' },
'90%': { transform: 'scale(1.02)' },
'95%': { transform: 'scale(1.02)' },
}
}
}
}
}



      function openQuoteForm(serviceType = '') {
        const modal = document.getElementById('quote-modal');
        const select = document.getElementById('service-select');
        if (serviceType) { select.value = serviceType; }
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
          btn.innerText = 'Request Sent!';
          btn.classList.remove('bg-brand-600');
          btn.classList.add('bg-green-600');
          setTimeout(() => {
            closeQuoteForm();
            event.target.reset();
            btn.disabled = false;
            btn.innerText = originalText;
            btn.classList.add('bg-brand-600');
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

      // Scroll Reveal Observer
      document.addEventListener('DOMContentLoaded', () => {
        const observer = new IntersectionObserver((entries) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
            }
          });
        }, { threshold: 0.1 });
        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 transition-all duration-300 backdrop-blur-xl border-b border-gray-200/50 bg-white/80" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex-shrink-0 flex items-center gap-2">
<div className="w-9 h-9 rounded-lg bg-brand-600 flex items-center justify-center text-white shadow-lg shadow-brand-500/30">
<iconify-icon height="20" icon="solar:water-drops-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="font-bold text-lg tracking-tight text-gray-900 leading-tight">
            Power Clean
            <span className="block text-xs font-medium text-brand-600 uppercase tracking-wider">Mass</span>
</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#projects">Projects</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-600 transition-colors" href="#service-area">Service Area</a>
<div className="flex items-center gap-4 ml-2">
<a className="flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-brand-600 transition-colors tracking-tight" href="tel:5087898980">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
              508-789-8980
            </a>
<button className="bg-gray-900 hover:bg-black text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md transform hover:-translate-y-0.5 active:translate-y-0 animate-cta-attention hover:animate-none" onclick="openQuoteForm()">
              Free Quote
            </button>
</div>
</div>

<div className="flex items-center gap-4 md:hidden">
<a className="w-10 h-10 bg-brand-50 rounded-full flex items-center justify-center text-brand-700 border border-brand-100" href="tel:5087898980">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</a>
<button className="w-10 h-10 flex items-center justify-center text-gray-700 hover:text-brand-600" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="menu-closed flex flex-col bg-white border-b border-gray-100 md:hidden absolute top-20 w-full left-0 shadow-xl z-40" id="mobile-menu">
<div className="flex flex-col p-6 space-y-4">
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#services" onclick="closeMobileMenu()">Services</a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#about" onclick="closeMobileMenu()">About Us</a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#projects" onclick="closeMobileMenu()">Projects</a>
<a className="text-base font-medium text-gray-600 py-2 border-b border-gray-50" href="#service-area" onclick="closeMobileMenu()">Service Area</a>
<button className="w-full bg-brand-600 text-white text-base font-medium py-3 rounded-lg shadow-sm" onclick="openQuoteForm(); closeMobileMenu()">
            Get a Free Quote
          </button>
</div>
</div>
</nav>

<section className="relative min-h-[90vh] flex flex-col items-center justify-center overflow-hidden bg-gray-900">

<div className="absolute inset-0 z-0">
<img alt="Pressure Washing House Siding" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900 via-gray-900/40 to-transparent"></div>
</div>

<div className="relative z-10 w-full px-6 flex flex-col items-center justify-center pt-16">
<div className="max-w-4xl w-full mx-auto text-center animate-fade-in">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-brand-500/10 border border-brand-500/20 backdrop-blur-md mb-8 shadow-sm ring-1 ring-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-brand-400 animate-pulse"></span>
<span className="text-brand-100 text-xs font-medium tracking-wide uppercase">
              Serving Wrentham &amp; Surrounding Areas
            </span>
</div>
<h1 className="text-5xl md:text-7xl font-bold text-white tracking-tighter leading-none drop-shadow-2xl text-center mb-6">
            Restoring the Sparkle to
            <span className="text-brand-400 block mt-2">
              Your Home Since 2000
            </span>
</h1>
<p className="text-lg md:text-xl text-gray-300 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
            Power Clean Mass provides professional exterior pressure washing for residential and commercial properties. Safe, reliable, and family-owned.
          </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-brand-600 hover:bg-brand-500 hover:-translate-y-0.5 text-white text-lg font-medium px-8 py-3.5 rounded-xl shadow-lg hover:shadow-brand-500/25 transition-all duration-300 border border-transparent" onclick="openQuoteForm()">
              Get a Free Quote
            </button>
<a className="w-full sm:w-auto bg-white/5 hover:bg-white/10 backdrop-blur-md border border-white/10 text-white text-lg font-medium px-8 py-3.5 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" href="#services">
              Our Services
            </a>
</div>
</div>

<div className="mt-16 flex flex-wrap items-center justify-center gap-x-12 gap-y-6 opacity-90 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center gap-3">
<div className="bg-brand-500/20 p-2 rounded-full text-brand-300">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-sm font-semibold">Fully Insured</span>
<span className="text-gray-400 text-xs">Liability &amp; Workers Comp</span>
</div>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="bg-brand-500/20 p-2 rounded-full text-brand-300">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-sm font-semibold">Family Owned</span>
<span className="text-gray-400 text-xs">Operating since 2000</span>
</div>
</div>
<div className="h-8 w-px bg-white/10 hidden sm:block"></div>
<div className="flex items-center gap-3">
<div className="bg-brand-500/20 p-2 rounded-full text-brand-300">
<iconify-icon icon="solar:leaf-linear" width="24"></iconify-icon>
</div>
<div className="flex flex-col text-left">
<span className="text-white text-sm font-semibold">Eco-Friendly</span>
<span className="text-gray-400 text-xs">Safe for plants</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-gray-50 py-24 border-b border-gray-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl md:text-5xl font-semibold text-gray-900 mb-4 tracking-tight">
            Our Services
          </h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto font-light">
            From vinyl siding to painted surfaces, we handle projects of all sizes for both residential and commercial clients.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal bg-white border border-gray-100">
<div className="h-56 overflow-hidden">
<img alt="Vinyl Siding Cleaning" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1628624747186-a941c476b7ef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-600">
<iconify-icon icon="solar:home-smile-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">House Washing</h3>
<p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Safe removal of mold, algae, and dirt from vinyl siding, stucco, and wood. Restore your curb appeal instantly.
                </p>
<button className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openQuoteForm('House Washing')">
                  Get a Quote <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal delay-100 bg-white border border-gray-100">
<div className="h-56 overflow-hidden">
<img alt="Deck Pressure Washing" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1632759145351-1d592919f522?q=80&amp;w=2065&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-600">
<iconify-icon icon="solar:sun-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Decks &amp; Patios</h3>
<p className="text-gray-600 mb-6 leading-relaxed text-sm">
                  Revitalize wood decks, pool areas, and stone patios. We remove slippery grime and weather stains.
                </p>
<button className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openQuoteForm('Deck/Patio Cleaning')">
                  Get a Quote <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal delay-200 bg-white border border-gray-100">
<div className="h-56 overflow-hidden">
<img alt="Driveway Cleaning" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-600">
<iconify-icon icon="solar:wheel-angle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Concrete &amp; Driveways</h3>
<p className="text-gray-600 mb-6 leading-relaxed text-sm">
                   We clean concrete walkways, driveways, and brick pavers, removing oil spots and years of buildup.
                </p>
<button className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openQuoteForm('Driveway Cleaning')">
                  Get a Quote <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 reveal bg-white border border-gray-100">
<div className="h-56 overflow-hidden">
<img alt="Commercial Building" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8">
<div className="w-12 h-12 bg-brand-50 rounded-xl flex items-center justify-center mb-6 text-brand-600">
<iconify-icon icon="solar:buildings-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Commercial Services</h3>
<p className="text-gray-600 mb-6 leading-relaxed text-sm">
                   Condos, apartments, restaurants, and office buildings. Maintain a professional appearance for your business.
                </p>
<button className="text-sm font-semibold text-brand-600 flex items-center gap-1 group-hover:gap-2 transition-all" onclick="openQuoteForm('Commercial Services')">
                  Get a Quote <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-brand-50 rounded-full text-brand-600 text-xs font-bold uppercase tracking-wide mb-6">
              About Power Clean Mass
            </div>
<h2 className="text-4xl font-bold text-gray-900 mb-6 tracking-tight">
              Family Owned &amp; Operated <br/>
<span className="text-brand-600">Since 2000</span>
</h2>
<div className="space-y-6 text-gray-600 text-lg leading-relaxed font-light">
<p>
                Let the experts from our family-owned pressure-washing contractor in Wrentham, Massachusetts deliver the residential or commercial service you seek.
              </p>
<p>
                At Power Clean, we use the best equipment available to restore your property's exteriors, including apartments, condos, and restaurants. As an added bonus, our environmentally-friendly products are safe for plants and vegetation.
              </p>
<div className="bg-brand-50/50 p-6 rounded-xl border border-brand-100 mt-6">
<h4 className="font-bold text-gray-900 mb-2 flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:verified-check-linear"></iconify-icon>
                    Fully Insured
                 </h4>
<p className="text-sm">We carry full Liability &amp; Workers Comp Insurance for your peace of mind.</p>
</div>
</div>
</div>
<div className="relative reveal delay-100">
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Clean House Exterior" className="w-full h-full object-cover aspect-[4/3]" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-xl shadow-lg border border-gray-200">
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 font-bold text-lg">
                        25+
                     </div>
<div>
<div className="font-bold text-gray-900">Years of Experience</div>
<div className="text-sm text-gray-500">Serving Norfolk &amp; Bristol County</div>
</div>
</div>
</div>
</div>

<div className="absolute -z-10 -top-6 -right-6 text-brand-100">
<svg fill="currentColor" height="100" viewbox="0 0 100 100" width="100"><pattern height="20" id="dots" patternunits="userSpaceOnUse" width="20" x="0" y="0"><circle cx="2" cy="2" r="2"></circle></pattern><rect fill="url(#dots)" height="100" width="100"></rect></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white relative" id="service-area">

<div className="absolute inset-0 bg-brand-900 opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-bold mb-6">Proudly Serving Our Community</h2>
<p className="text-gray-300 max-w-2xl mx-auto">
                Based in Wrentham, MA, we travel throughout Norfolk and Bristol counties to bring the best pressure washing service to your doorstep.
             </p>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 text-sm font-medium text-gray-300 reveal delay-100">
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Wrentham</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Norfolk</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Walpole</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Foxboro</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Sharon</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Mansfield</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Norwood</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Holliston</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Franklin</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Plainville</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">North Attleboro</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Attleboro</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Bellingham</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Medway</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Milford</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Medfield</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Hopkinton</div>
<div className="p-3 bg-white/5 rounded-lg border border-white/10 text-center hover:bg-white/10 transition-colors">Cumberland, RI</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50/50" id="reviews">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl font-bold text-gray-900 mb-4">What Our Clients Say</h2>
<p className="text-gray-600">Local homeowners trust Power Clean Mass.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 italic mb-6">"Power Clean did an amazing job on our vinyl siding. It looks brand new! Highly recommend them for their professionalism and fair pricing."</p>
<div className="font-bold text-gray-900 text-sm">Sarah J.</div>
<div className="text-xs text-gray-500">Wrentham, MA</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal delay-100">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 italic mb-6">"We've used them for years for our deck and patio. They are careful with our plants and always show up on time."</p>
<div className="font-bold text-gray-900 text-sm">Mike T.</div>
<div className="text-xs text-gray-500">Foxboro, MA</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 reveal delay-200">
<div className="flex text-yellow-400 mb-4 gap-1">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-gray-700 italic mb-6">"Great communication and excellent results on our commercial property. A reliable local business."</p>
<div className="font-bold text-gray-900 text-sm">David R.</div>
<div className="text-xs text-gray-500">Norwood, MA</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden">
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal">
<h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6 tracking-tight">
          Ready to Clean Up Your Property?
        </h2>
<p className="text-xl text-gray-600 mb-10 font-light">
          Get a free, no-obligation quote today. We respond quickly!
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-brand-600 hover:bg-brand-700 hover:scale-105 transition-all duration-300 text-lg font-medium text-white rounded-xl px-10 py-4 shadow-xl shadow-brand-500/30" onclick="openQuoteForm()">
            Request Free Quote
          </button>
<a className="bg-gray-100 text-gray-900 border border-gray-200 hover:bg-gray-200 text-lg font-medium px-10 py-4 rounded-xl transition-all duration-300 flex items-center justify-center gap-2" href="tel:5087898980">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
            Call 508-789-8980
          </a>
</div>
</div>
</section>

<footer className="bg-gray-50 pt-16 pb-8 border-t border-gray-200 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 rounded bg-brand-600 flex items-center justify-center text-white">
<iconify-icon icon="solar:water-drops-linear" width="14"></iconify-icon>
</div>
<span className="font-bold text-gray-900">Power Clean Mass</span>
</div>
<p className="text-gray-500 leading-relaxed mb-6 max-w-sm">
              Professional pressure washing services for Wrentham, MA and surrounding communities in Norfolk &amp; Bristol County. Family owned since 2000.
            </p>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Services</h3>
<ul className="space-y-3 text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">House Washing</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Driveway Cleaning</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Deck Restoration</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Commercial Cleaning</a></li>
</ul>
</div>
<div>
<h3 className="font-bold text-gray-900 mb-4 uppercase tracking-wider text-xs">Contact</h3>
<ul className="space-y-4 text-gray-500">
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<div className="flex flex-col">
<a className="hover:text-brand-600 transition-colors" href="tel:5087898980">508-789-8980</a>
</div>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="mt-0.5" icon="solar:map-point-linear" width="16"></iconify-icon>
<span>Wrentham, MA</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-gray-200 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2025 Power Clean Mass. All Rights Reserved.</p>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 bg-gray-900/60 backdrop-blur-sm transition-opacity" onclick="closeQuoteForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-xl max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in ring-1 ring-gray-200">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-2xl font-bold text-gray-900 tracking-tight">Request a Quote</h3>
<p className="text-sm text-gray-500 mt-1">Tell us about your project. We'll reply fast.</p>
</div>
<button className="p-2 hover:bg-gray-100 rounded-full transition-colors text-gray-400 hover:text-gray-600" onclick="closeQuoteForm()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-5" onsubmit="handleQuoteSubmit(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-600">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400" placeholder="Your Name" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-600">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400" placeholder="Your Phone Number" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-600">Location</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm placeholder-gray-400" placeholder="Address or Town" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-600">Service Needed</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-white text-gray-700" id="service-select">
<option value="">Select a service...</option>
<option value="House Washing">House Washing</option>
<option value="Driveway Cleaning">Driveway/Concrete</option>
<option value="Deck/Patio Cleaning">Deck &amp; Patio</option>
<option value="Commercial Services">Commercial Services</option>
<option value="Other">Other</option>
</select>
</div>
<div className="space-y-1.5">
<label className="block text-xs font-bold uppercase tracking-wide text-gray-600">Details</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm resize-none placeholder-gray-400" placeholder="Describe your project..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-500 text-white font-bold py-3.5 rounded-lg transition-all shadow-md mt-2 flex items-center justify-center gap-2 transform active:scale-[0.98]" type="submit">
              Send Request
            </button>
<p className="text-xs text-center text-gray-400 mt-4">We respect your privacy. No spam.</p>
</form>
</div>
</div>
</div>



    </>
  );
}
