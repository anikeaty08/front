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
50: '#f0f9ff',
100: '#e0f2fe',
200: '#bae6fd',
300: '#7dd3fc',
400: '#38bdf8',
500: '#0ea5e9',
600: '#0284c7',
700: '#0369a1',
800: '#075985',
900: '#0c4a6e',
}
},
animation: {
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 1s ease-out forwards',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        // Quote Modal
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

        function handleQuoteSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const originalText = btn.innerText;
            
            btn.disabled = true;
            btn.innerHTML = '<iconify-icon icon="solar:spinner-linear" class="animate-spin" width="20"></iconify-icon> Sending...';
            
            setTimeout(() => {
                btn.innerHTML = '<iconify-icon icon="solar:check-circle-bold" width="20"></iconify-icon> Sent!';
                btn.classList.replace('bg-brand-600', 'bg-green-600');
                
                setTimeout(() => {
                    closeQuoteForm();
                    e.target.reset();
                    btn.disabled = false;
                    btn.innerText = "Send Request";
                    btn.classList.replace('bg-green-600', 'bg-brand-600');
                }, 1500);
            }, 1200);
        }

        // Intersection Observer for Reveal Animations
        document.addEventListener('DOMContentLoaded', () => {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

            // Navbar shadow logic
            const nav = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 20) {
                    nav.classList.add('shadow-sm');
                } else {
                    nav.classList.remove('shadow-sm');
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass-nav h-24 flex items-center transition-all duration-300" id="navbar">
<div className="max-w-7xl w-full mx-auto px-6 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Water Works Logo" className="h-16 w-auto object-contain" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/db040642-8138-4503-874d-c0da40655901/Water-Works-Logo.png?format=1500w"/>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" href="#work">Our Work</a>
<a className="text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" href="#service-areas">Service Areas</a>
<a className="text-sm font-medium text-gray-500 hover:text-brand-600 transition-colors" href="#faq">FAQs</a>
</div>

<div className="hidden md:flex items-center gap-6">
<a className="flex items-center gap-2 text-sm font-medium text-gray-900 hover:text-brand-600 transition-colors" href="tel:6178162700">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                    (617) 816-2700
                </a>
<button className="bg-gray-900 hover:bg-gray-800 text-white text-sm font-medium px-5 py-2.5 rounded-lg transition-all shadow-sm hover:shadow-md ring-1 ring-gray-900 ring-offset-2 ring-offset-white" onclick="openQuoteForm()">
                    Get a Quote
                </button>
</div>

<button className="lg:hidden p-2 text-gray-600 hover:bg-gray-50 rounded-lg" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-24 left-0 w-full bg-white border-b border-gray-100 shadow-xl flex-col p-6 space-y-4 lg:hidden" id="mobile-menu">
<a className="text-base font-medium text-gray-900 py-2 border-b border-gray-50" href="#services" onclick="toggleMobileMenu()">Services</a>
<a className="text-base font-medium text-gray-900 py-2 border-b border-gray-50" href="#work" onclick="toggleMobileMenu()">Our Work</a>
<a className="text-base font-medium text-gray-900 py-2 border-b border-gray-50" href="#about" onclick="toggleMobileMenu()">About</a>
<a className="text-base font-medium text-gray-900 py-2 border-b border-gray-50" href="#service-areas" onclick="toggleMobileMenu()">Service Areas</a>
<a className="flex items-center gap-2 text-base font-medium text-gray-900 py-2" href="tel:6178162700">(617) 816-2700</a>
<button className="w-full bg-brand-600 text-white font-medium py-3 rounded-lg mt-4 shadow-lg shadow-brand-500/20" onclick="openQuoteForm(); toggleMobileMenu()">Get a Quote</button>
</div>
</nav>

<section className="relative pt-36 pb-24 lg:pt-48 lg:pb-36 overflow-hidden bg-slate-50/50">
<div className="absolute inset-0 z-0 opacity-40">

<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-brand-100/50 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/4"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[600px] bg-blue-50/70 rounded-full blur-[100px] translate-y-1/4 -translate-x-1/4"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-gray-200 text-brand-700 text-xs font-semibold uppercase tracking-wide mb-8 shadow-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
                        Serving Greater Boston &amp; MetroWest
                    </div>
<h1 className="text-5xl lg:text-6xl font-semibold text-gray-900 tracking-tight mb-6 leading-[1.1]">
                        Pressure Washing &amp; <br/>
<span className="text-brand-600">Interior Painting</span>
</h1>
<p className="text-lg text-gray-500 mb-10 max-w-lg leading-relaxed font-normal">
                        Water Works refreshes your home inside and out. We provide professional exterior cleaning and detailed interior painting with care, precision, and reliability.
                    </p>
<div className="flex flex-col sm:flex-row items-center gap-4">
<button className="w-full sm:w-auto bg-gray-900 hover:bg-gray-800 text-white text-base font-medium px-8 py-3.5 rounded-xl transition-all shadow-lg shadow-gray-900/10 hover:shadow-gray-900/20 hover:-translate-y-0.5" onclick="openQuoteForm()">
                            Request Free Estimate
                        </button>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-xl border border-gray-200 text-gray-600 hover:bg-white hover:border-gray-300 hover:text-gray-900 transition-all flex items-center justify-center gap-2 bg-white/50 backdrop-blur-sm" href="#services">
                            View Services
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="mt-12 flex items-center gap-8 text-sm text-gray-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:shield-check-linear" width="20"></iconify-icon>
                            Fully Insured
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-600" icon="solar:shop-linear" width="20"></iconify-icon>
                            Locally Owned
                        </div>
</div>
</div>

<div className="relative rounded-3xl overflow-hidden shadow-2xl border border-gray-200/50 animate-fade-in lg:h-[600px] h-[400px]">
<img alt="Residential Power Soft Wash Water Works Massachusetts" className="w-full h-full object-cover" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/479ac54b-a7ff-47e7-a918-7ddf61a07819/Residential-Power-Soft-Wash-Water-Works.png?format=1500w"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/50 via-transparent to-transparent flex items-end p-8">
<div className="bg-white/90 backdrop-blur-md px-4 py-3 rounded-xl border border-white/20 shadow-lg">
<p className="text-gray-900 text-sm font-semibold">Quality Service. Lasting Results.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row items-end justify-between mb-16 gap-6 reveal">
<div>
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight mb-3">Comprehensive Services</h2>
<p className="text-gray-500 max-w-xl">From detailed interior painting to power washing hardscapes, we protect and enhance your property's value.</p>
</div>
<button className="text-brand-600 font-medium hover:text-brand-700 inline-flex items-center gap-1 transition-colors group" onclick="openQuoteForm()">
                    Get a quote for any service 
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal">
<div className="h-48 overflow-hidden">
<img alt="Interior Painting" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/21329874-38bd-4508-8e85-a10e7773dfaa/Interior-Painting-Water-Works.png?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:paint-roller-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Interior Painting</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Professional painting for walls, ceilings, and trim. We handle prep to cleanup, ensuring clean lines and even coverage.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 font-medium"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Walls &amp; Ceilings</li>
<li className="flex items-center gap-2 text-xs text-gray-500 font-medium"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Trim &amp; Molding</li>
</ul>
</div>
</div>

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal transition-delay-100">
<div className="h-48 overflow-hidden">
<img alt="Soft Washing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/2a66fda6-3653-41f3-b019-309e495ac328/unsplash-image-Z2WiPyxywQ0.jpg?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:home-smile-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Soft Washing</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Safe low-pressure cleaning to remove mold, mildew, and dirt from siding, roofs, and gutters without damage.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 font-medium"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Vinyl &amp; Stucco</li>
<li className="flex items-center gap-2 text-xs text-gray-500 font-medium"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Roof Cleaning</li>
</ul>
</div>
</div>

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal transition-delay-200">
<div className="h-48 overflow-hidden">
<img alt="Window Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/862462a4-668f-4177-8cca-7ea34c7b518c/Window-Cleaning-Services.png?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Window Cleaning</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Streak-free windows that brighten your home inside and out. We remove dirt and water spots for clear views.
                        </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-gray-500 font-medium"><iconify-icon className="text-brand-500" icon="solar:check-circle-linear"></iconify-icon> Interior &amp; Exterior</li>
</ul>
</div>
</div>

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal">
<div className="h-48 overflow-hidden">
<img alt="Driveway Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/a04ef6f4-89cf-4aef-b642-b3843f3634f9/unsplash-image-_lfGDMDIJq0.jpg?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:road-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Driveways &amp; Hardscapes</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Pressure washing for concrete, brick, asphalt, and stone. Remove oil stains, grime, and organic buildup.
                        </p>
</div>
</div>

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal transition-delay-100">
<div className="h-48 overflow-hidden">
<img alt="Deck Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/1761922644252-DGOOF8OZ6SF46ABVKR68/unsplash-image-OavkaTBcT-0.jpg?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:ranking-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Decks &amp; Fencing</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Restore wood and composite surfaces. We use methods tailored to the material to safely clean and renew.
                        </p>
</div>
</div>

<div className="service-card rounded-2xl bg-white border border-gray-100 overflow-hidden group reveal transition-delay-200">
<div className="h-48 overflow-hidden">
<img alt="Commercial Cleaning" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/1761922765671-71POQMMJE9MHW71AHONA/unsplash-image-gBpHJdbIT-c.jpg?format=750w"/>
</div>
<div className="p-8">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-brand-50 flex items-center justify-center text-brand-600">
<iconify-icon icon="solar:buildings-bold-duotone"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900">Commercial</h3>
</div>
<p className="text-gray-500 text-sm leading-relaxed mb-6">
                            Maintain a professional appearance. Storefronts, sidewalks, and building facades for businesses in MA.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<span className="text-brand-400 font-semibold text-xs uppercase tracking-wider">See the Difference</span>
<h2 className="text-3xl lg:text-4xl font-semibold mt-3 mb-4 tracking-tight">Real Results in Massachusetts</h2>
<p className="text-gray-400">See how we restore properties across Greater Boston and MetroWest.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12">

<div className="reveal">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="relative group overflow-hidden rounded-xl">
<div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider z-10">Before</div>
<img alt="Vinyl Siding Before" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/ebde957c-b5a2-4618-98e7-4e68d62356a7/IMG_0027.jpeg?format=750w"/>
</div>
<div className="relative group overflow-hidden rounded-xl">
<div className="absolute top-3 left-3 bg-brand-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider z-10">After</div>
<img alt="Vinyl Siding After" className="w-full h-48 object-cover" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/8a520f60-3bda-49a2-abd9-3e92c6e7b5ae/IMG_0033.jpg?format=750w"/>
</div>
</div>
<h3 className="font-medium text-lg mb-1">Vinyl Siding Soft Wash</h3>
<p className="text-gray-500 text-sm">Framingham, MA — Mildew removal.</p>
</div>

<div className="reveal transition-delay-100">
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="relative group overflow-hidden rounded-xl">
<div className="absolute top-3 left-3 bg-black/50 backdrop-blur-md px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider z-10">Before</div>
<img alt="Walkway Before" className="w-full h-48 object-cover opacity-90 group-hover:opacity-100 transition-opacity" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/2864d1ba-d032-4957-b1cd-3d92b589be7d/IMG_1343.jpeg?format=750w"/>
</div>
<div className="relative group overflow-hidden rounded-xl">
<div className="absolute top-3 left-3 bg-brand-600 px-2 py-1 rounded text-[10px] font-medium uppercase tracking-wider z-10">After</div>
<img alt="Walkway After" className="w-full h-48 object-cover" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/5843f7e8-6d08-4f64-b002-8d51cf3f5710/IMG_1346.jpeg?format=750w"/>
</div>
</div>
<h3 className="font-medium text-lg mb-1">Brick Walkway Renewal</h3>
<p className="text-gray-500 text-sm">Wayland, MA — Moss and debris removal.</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="bg-white text-gray-900 hover:bg-gray-100 font-medium px-8 py-3 rounded-xl transition-colors shadow-xl" onclick="openQuoteForm()">
                    Transform Your Property
                </button>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center reveal">
<div className="p-6">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:users-group-rounded-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Independently Owned</h3>
<p className="text-sm text-gray-500 leading-relaxed">Based in MA, proudly serving our neighbors honestly and reliably.</p>
</div>
<div className="p-6">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:shield-check-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Fully Insured</h3>
<p className="text-sm text-gray-500 leading-relaxed">Professional service and peace of mind on every job.</p>
</div>
<div className="p-6">
<div className="w-12 h-12 bg-brand-50 text-brand-600 rounded-2xl flex items-center justify-center mx-auto mb-4">
<iconify-icon icon="solar:stars-minimalistic-bold-duotone" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">Customized Approach</h3>
<p className="text-sm text-gray-500 leading-relaxed">Each surface is different — we choose the right tools and techniques.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="service-areas">
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<h2 className="text-2xl font-semibold text-gray-900 mb-6 tracking-tight">Serving Greater Boston &amp; MetroWest</h2>
<p className="text-gray-500 mb-10 leading-relaxed">
                We proudly serve our neighbors in Framingham, Weston, Wayland, Wellesley, Concord, Sudbury, Newton, Brookline, Needham, Dover, Dedham, Westwood, Natick, Southborough, Quincy, Milton, Braintree, Weymouth, Hingham, Cohasset, Norwell, Hanover, Scituate, Duxbury, and beyond.
            </p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Framingham</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Newton</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Wellesley</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Natick</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Quincy</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Hingham</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Braintree</span>
<span className="px-4 py-2 bg-white rounded-full text-xs font-medium text-gray-600 border border-gray-100 shadow-sm">Scituate</span>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-2">
<a className="flex items-center gap-3 mb-4" href="#">
<img alt="Water Works Logo" className="h-10 w-auto" src="https://images.squarespace-cdn.com/content/v1/68eedf5f436a303c7c995cc5/db040642-8138-4503-874d-c0da40655901/Water-Works-Logo.png?format=1500w"/>
</a>
<p className="text-gray-500 text-sm max-w-sm mb-6 leading-relaxed">
                        Locally owned and fully insured. Providing professional exterior washing, painting, and window cleaning for homes and businesses.
                    </p>
<div className="flex gap-4">
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:bg-brand-50 transition-colors" href="https://www.facebook.com/profile.php?id=61583549829039" target="_blank">
<iconify-icon icon="brandico:facebook-rect" width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-gray-400 hover:text-brand-600 hover:bg-brand-50 transition-colors" href="https://www.instagram.com/waterworksma/" target="_blank">
<iconify-icon icon="brandico:instagram" width="16"></iconify-icon>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Services</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-brand-600 transition-colors" href="#">Pressure Washing</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Soft Washing</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Interior Painting</a></li>
<li><a className="hover:text-brand-600 transition-colors" href="#">Window Cleaning</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-gray-900 mb-4 text-sm">Contact</h4>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:phone-calling-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="tel:6178162700">(617) 816-2700</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:letter-linear"></iconify-icon>
<a className="hover:text-brand-600 transition-colors" href="mailto:info@waterworksma.com">info@waterworksma.com</a>
</li>
<li className="flex items-center gap-2">
<iconify-icon className="text-gray-400" icon="solar:map-point-linear"></iconify-icon>
                            Framingham, MA
                        </li>
</ul>
</div>
</div>
<div className="border-t border-gray-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-400">
<p>© 2026 Water Works LLC. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-gray-600 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-gray-600 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[60] hidden items-center justify-center p-4" id="quote-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeQuoteForm()"></div>
<div className="bg-white rounded-2xl w-full max-w-lg max-h-[90vh] overflow-y-auto relative z-10 shadow-2xl animate-fade-in-up">
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-xl font-semibold text-gray-900">Request a Free Estimate</h3>
<p className="text-sm text-gray-500 mt-1">Tell us about your project in Framingham or surrounding areas.</p>
</div>
<button className="p-2 hover:bg-gray-50 rounded-full text-gray-400 hover:text-gray-600 transition-colors" onclick="closeQuoteForm()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>
<form className="space-y-4" onsubmit="handleQuoteSubmit(event)">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Name</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white placeholder:text-gray-400" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Phone</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white placeholder:text-gray-400" placeholder="(617) 000-0000" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Email</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white placeholder:text-gray-400" placeholder="jane@example.com" required="" type="email"/>
</div>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Town/City</label>
<input className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white placeholder:text-gray-400" placeholder="e.g. Framingham" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Service Type</label>
<select className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white text-gray-600">
<option value="">Select a service...</option>
<option value="Interior Painting">Interior Painting</option>
<option value="Soft Washing">Soft Washing (House/Roof)</option>
<option value="Pressure Washing">Pressure Washing (Hardscapes)</option>
<option value="Window Cleaning">Window Cleaning</option>
<option value="Commercial">Commercial Services</option>
</select>
</div>
<div>
<label className="block text-xs font-semibold uppercase tracking-wide text-gray-500 mb-1.5">Message</label>
<textarea className="w-full px-4 py-3 rounded-lg border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-500/20 focus:border-brand-500 transition-all text-sm bg-gray-50/50 hover:bg-white resize-none placeholder:text-gray-400" placeholder="Tell us about your project..." rows="3"></textarea>
</div>
<button className="w-full bg-brand-600 hover:bg-brand-700 text-white font-medium py-3.5 rounded-lg shadow-lg shadow-brand-500/20 transition-all mt-2 flex items-center justify-center gap-2" type="submit">
                        Send Request
                    </button>
</form>
</div>
</div>
</div>


    </>
  );
}
