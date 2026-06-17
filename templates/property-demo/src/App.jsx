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
sans: ['Montserrat', 'sans-serif'],
serif: ['Cormorant Garamond', 'serif'],
},
colors: {
heritage: {
900: '#0B1C18', // Deep Green
800: '#132A24',
700: '#1C3A32',
},
alabaster: {
50: '#FAF9F6', // Off White
100: '#F5F2EB', // Warm Paper
200: '#E6E0D4',
},
bronze: {
400: '#D4AF37',
500: '#B59452', // Gold
600: '#8C7036',
}
},
letterSpacing: {
'widest-xl': '.2em',
}
}
}
}



        // Data for Projects with Unique Images
        const projects = [
            {
                title: "Kings Road Extension",
                category: "Renovation",
                img: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=1600&auto=format&fit=crop",
                desc: "A complete overhaul of a Victorian terrace, adding a modern glass-box extension to the rear. This project involved complex structural steelwork and delicate restoration of heritage features.",
                stats: { budget: "£145k", timeline: "6 Months", service: "Design & Build" }
            },
            {
                title: "Marine Parade Penthouse",
                category: "Lettings",
                img: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&w=1600&auto=format&fit=crop",
                desc: "Marketing and management of a premium seafront penthouse. Achieved record rental yield for the area through targeted digital marketing and high-end staging.",
                stats: { budget: "N/A", timeline: "2 Weeks to Let", service: "Full Management" }
            },
            {
                title: "West End Gardens",
                category: "Maintenance",
                img: "https://images.unsplash.com/photo-1600596542815-2a14729816e8?q=80&w=1600&auto=format&fit=crop",
                desc: "Ongoing landscape and exterior maintenance for a private gated community. Includes seasonal planting, hard landscaping repairs, and weekly groundskeeping.",
                stats: { budget: "Annual Contract", timeline: "Ongoing", service: "Maintenance" }
            },
            {
                title: "The Old Rectory",
                category: "Development",
                img: "https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&w=1600&auto=format&fit=crop",
                desc: "Sensitive conversion of a Grade II listed building into 4 luxury apartments. We navigated complex planning restrictions to deliver high-spec modern living spaces.",
                stats: { budget: "£850k", timeline: "14 Months", service: "Development" }
            },
            {
                title: "Harbour View Flats",
                category: "Sales",
                img: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&w=1600&auto=format&fit=crop",
                desc: "Successful sale of a block of 12 apartments. Our team handled the valuation, marketing, and conveyancing progression, ensuring a seamless transaction for the investor.",
                stats: { budget: "Sold Over Asking", timeline: "3 Months", service: "Sales Agency" }
            },
            {
                title: "Unit 4 Refurbishment",
                category: "Commercial",
                img: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&w=1600&auto=format&fit=crop",
                desc: "Fit-out and refurbishment of a 2000sq ft commercial office space. Included partition walls, new HVAC systems, and bespoke joinery for the reception area.",
                stats: { budget: "£220k", timeline: "12 Weeks", service: "Commercial Refurb" }
            }
        ];

        // Mobile Menu Logic
        function openMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.remove('translate-x-full');
            menu.classList.add('translate-x-0');
        }

        function closeMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.remove('translate-x-0');
            menu.classList.add('translate-x-full');
        }

        // Helper to handle link clicks inside mobile menu
        function handleMobileLink(viewName, sectionId = null) {
            closeMobileMenu();
            setTimeout(() => {
                switchView(viewName, sectionId);
            }, 300); // Wait for transition
        }

        // View Switching Logic
        function switchView(viewName, sectionId = null) {
            const views = ['view-home', 'view-booking', 'view-projects', 'view-case-study'];
            
            // Hide all views
            views.forEach(id => {
                const el = document.getElementById(id);
                if(el) el.classList.add('hidden');
            });
            
            // Show target view
            const target = document.getElementById(`view-${viewName}`);
            if(target) target.classList.remove('hidden');

            // Scroll to top of window immediately
            window.scrollTo(0, 0);
            
            // If specific section requested (e.g., #contact), scroll to it after small delay to allow DOM render
            if (sectionId) {
                setTimeout(() => {
                    const element = document.getElementById(sectionId);
                    if(element) element.scrollIntoView({behavior: 'smooth'});
                }, 100);
            }
        }

        // Open Case Study
        function openCaseStudy(index) {
            const project = projects[index];
            const container = document.getElementById('case-study-content');
            
            container.innerHTML = `
                <!-- Top Breadcrumb -->
                <div class="max-w-7xl mx-auto px-6 py-8">
                     <button onclick="switchView('projects')" class="flex items-center gap-2 text-xs uppercase tracking-widest font-bold text-heritage-600 hover:text-heritage-900 transition-colors">
                        <iconify-icon icon="lucide:arrow-left" width="16"></iconify-icon> All Projects
                    </button>
                </div>

                <!-- Hero Image -->
                <div class="h-[60vh] w-full relative">
                    <img src="${project.img}" class="w-full h-full object-cover" alt="${project.title}">
                    <div class="absolute inset-0 bg-heritage-900/30"></div>
                    <div class="absolute inset-0 flex flex-col justify-center items-center text-center p-6">
                        <span class="bg-bronze-500 text-heritage-900 px-4 py-1.5 text-[10px] uppercase font-bold tracking-widest mb-4 inline-block backdrop-blur-sm bg-opacity-90">${project.category}</span>
                        <h1 class="text-4xl md:text-6xl font-serif text-white max-w-4xl leading-tight fade-in">${project.title}</h1>
                    </div>
                </div>

                <div class="max-w-4xl mx-auto px-6 py-20">
                    <!-- Stats Grid -->
                    <div class="grid grid-cols-1 md:grid-cols-3 gap-8 border-b border-heritage-100 pb-12 mb-12 fade-in">
                        <div>
                            <span class="text-[10px] uppercase tracking-widest text-heritage-400 block mb-1">Timeline</span>
                            <span class="text-xl font-serif text-heritage-900">${project.stats.timeline}</span>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase tracking-widest text-heritage-400 block mb-1">Budget/Yield</span>
                            <span class="text-xl font-serif text-heritage-900">${project.stats.budget}</span>
                        </div>
                        <div>
                            <span class="text-[10px] uppercase tracking-widest text-heritage-400 block mb-1">Service</span>
                            <span class="text-xl font-serif text-heritage-900">${project.stats.service}</span>
                        </div>
                    </div>

                    <!-- Content -->
                    <div class="prose prose-lg text-heritage-600 font-light fade-in">
                        <h3 class="font-serif text-3xl text-heritage-900 mb-6">The Project</h3>
                        <p class="mb-8 leading-relaxed">${project.desc}</p>
                        <p class="mb-8 leading-relaxed">
                            At Marina Group, we approached this with our signature attention to detail. 
                            Understanding the client's vision was paramount. We coordinated with local authorities, 
                            managed the supply chain, and ensured every finish met our exacting standards.
                        </p>
                    </div>

                    <!-- Navigation -->
                    <div class="mt-16 pt-12 border-t border-heritage-100 flex justify-center">
                        <button onclick="switchView('booking')" class="bg-heritage-900 text-white px-8 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze-500 transition-colors">
                            Start Your Project With Us
                        </button>
                    </div>
                </div>
            `;
            
            switchView('case-study');
        }

        // Scroll Animation
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('reveal-visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-on-scroll');
            elements.forEach(el => observer.observe(el));
        });

        // Booking Logic
        function nextStep() {
            document.getElementById('booking-step-1').classList.add('hidden');
            document.getElementById('booking-step-2').classList.remove('hidden');
            
            document.getElementById('dot-1').classList.replace('bg-heritage-900', 'bg-heritage-200');
            document.getElementById('dot-2').classList.replace('bg-heritage-200', 'bg-heritage-900');
            
            document.getElementById('step-indicator').innerText = "Step 2 of 2: Time";
        }

        function prevStep() {
            document.getElementById('booking-step-2').classList.add('hidden');
            document.getElementById('booking-step-1').classList.remove('hidden');
            
            document.getElementById('dot-1').classList.replace('bg-heritage-200', 'bg-heritage-900');
            document.getElementById('dot-2').classList.replace('bg-heritage-900', 'bg-heritage-200');
            
            document.getElementById('step-indicator').innerText = "Step 1 of 2: Details";
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
      

<nav className="fixed top-0 w-full z-50 bg-heritage-900/95 backdrop-blur-md border-b border-white/5 transition-all duration-300 text-alabaster-50">
<div className="max-w-7xl mx-auto px-6 h-20 md:h-24 flex items-center justify-between">

<a className="flex flex-col group cursor-pointer relative z-50" href="javascript:void(0)" onclick="switchView('home')">
<span className="font-serif text-2xl md:text-3xl tracking-tight font-medium text-white group-hover:text-bronze-500 transition-colors">Marina Group</span>
<span className="text-[10px] tracking-[0.2em] uppercase text-bronze-500 mt-1">Property Agents</span>
</a>

<div className="hidden md:flex items-center gap-8 text-[11px] font-medium tracking-widest-xl uppercase">
<a className="hover:text-bronze-500 transition-colors duration-300" href="javascript:void(0)" onclick="switchView('home', 'about')">About</a>
<a className="hover:text-bronze-500 transition-colors duration-300" href="javascript:void(0)" onclick="switchView('home', 'services')">Services</a>
<a className="hover:text-bronze-500 transition-colors duration-300" href="javascript:void(0)" onclick="switchView('projects')">Portfolio</a>
<a className="hover:text-bronze-500 transition-colors duration-300" href="javascript:void(0)" onclick="switchView('home', 'contact')">Contact</a>
</div>

<div className="hidden md:block">
<button className="bg-bronze-500 text-heritage-900 px-6 py-2.5 text-[10px] font-semibold uppercase tracking-widest hover:bg-white hover:text-heritage-900 transition-all duration-300 inline-block" onclick="switchView('booking')">
                    Book Consultation
                </button>
</div>

<button className="md:hidden text-white hover:text-bronze-500 transition-colors z-50 relative p-2" onclick="openMobileMenu()">
<iconify-icon icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[60] bg-heritage-900 text-white flex flex-col justify-center items-center translate-x-full md:hidden" id="mobile-menu">

<button className="absolute top-6 right-6 text-white hover:text-bronze-500 p-2" onclick="closeMobileMenu()">
<iconify-icon icon="lucide:x" strokeWidth="1.5" width="32"></iconify-icon>
</button>
<div className="flex flex-col gap-8 text-center">
<a className="text-3xl font-serif hover:text-bronze-500 transition-colors" href="javascript:void(0)" onclick="handleMobileLink('home')">Home</a>
<a className="text-3xl font-serif hover:text-bronze-500 transition-colors" href="javascript:void(0)" onclick="handleMobileLink('home', 'about')">About</a>
<a className="text-3xl font-serif hover:text-bronze-500 transition-colors" href="javascript:void(0)" onclick="handleMobileLink('home', 'services')">Services</a>
<a className="text-3xl font-serif hover:text-bronze-500 transition-colors" href="javascript:void(0)" onclick="handleMobileLink('projects')">Portfolio</a>
<a className="text-3xl font-serif hover:text-bronze-500 transition-colors" href="javascript:void(0)" onclick="handleMobileLink('home', 'contact')">Contact</a>
<a className="text-[10px] uppercase tracking-widest border border-bronze-500 text-bronze-500 px-8 py-3 mt-4" href="javascript:void(0)" onclick="handleMobileLink('booking')">Book Consultation</a>
</div>
</div>

<main className="flex-grow" id="view-home">

<header className="relative h-[85vh] flex items-center justify-center overflow-hidden bg-heritage-900">
<div className="absolute inset-0 z-0">
<img alt="Modern Coastal Interior" className="w-full h-full object-cover brightness-[0.6]" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-heritage-900/90 via-heritage-900/40 to-heritage-900/30"></div>
</div>
<div className="relative z-10 text-center max-w-3xl px-6 pt-10">
<div className="mb-6">
<span className="inline-block bg-bronze-500/10 border border-bronze-500/30 text-bronze-400 px-4 py-1.5 rounded-full text-[10px] md:text-xs font-semibold tracking-widest uppercase backdrop-blur-sm">
                        Established 1982
                    </span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-serif text-white mb-6 leading-tight tracking-tight font-medium">
                    Your trusted local <br/>
                    property experts.
                </h1>
<p className="text-alabaster-100 font-light text-base md:text-lg leading-relaxed max-w-xl mx-auto mb-10">
                    Professional property management, sales, and maintenance services in Worthing. We make property ownership simple, profitable, and stress-free.
                </p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center">
<button className="bg-bronze-500 text-heritage-900 px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white transition-all duration-300 w-full md:w-auto inline-block" onclick="switchView('booking')">
                        Book Consultation
                    </button>
<a className="border border-white text-white px-8 py-3 text-xs uppercase tracking-widest font-semibold hover:bg-white hover:text-heritage-900 transition-all duration-300 w-full md:w-auto inline-block" href="#services" onclick="switchView('home', 'services'); return false;">
                        Explore Services
                    </a>
</div>
</div>
</header>

<section className="py-24 bg-alabaster-100 relative" id="about">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative reveal-on-scroll">
<div className="aspect-[4/5] bg-heritage-200 rounded-sm overflow-hidden">
<img alt="Our Office Interior" className="w-full h-full object-cover hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="reveal-on-scroll">
<h2 className="text-3xl md:text-4xl font-serif text-heritage-900 mb-6 leading-tight">
                            Serving the community for over 40 years.
                        </h2>
<div className="space-y-4 text-heritage-800/80 font-normal leading-relaxed text-base">
<p>
                                At Marina Group, we pride ourselves on being a cornerstone of the Worthing property market. Unlike online-only agents, we have a physical presence and a team of local experts.
                            </p>
<p>
                                Whether you are a landlord looking for reliable tenants, a homeowner planning a renovation, or an investor building a portfolio, we offer the practical advice and hands-on support you need.
                            </p>
</div>
<div className="mt-8 pt-8 border-t border-heritage-900/10 grid grid-cols-2 gap-8">
<div>
<span className="block text-2xl font-serif text-heritage-900 font-semibold">2,000+</span>
<span className="text-[10px] uppercase tracking-wider text-heritage-600">Happy Clients</span>
</div>
<div>
<span className="block text-2xl font-serif text-heritage-900 font-semibold">24/7</span>
<span className="text-[10px] uppercase tracking-wider text-heritage-600">Support Team</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-bronze-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">What We Do</span>
<h2 className="text-3xl md:text-5xl font-serif text-heritage-900">Comprehensive Property Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hammer" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Property Development</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            From planning permission to final build. We manage renovations and extensions to maximize your property's value.
                        </p>
</div>
<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:clipboard-check" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Property Management</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            Complete peace of mind for landlords. We handle rent collection, inspections, and tenant relations.
                        </p>
</div>
<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:wrench" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Property Maintenance</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            Quick response repairs. Our in-house team ensures issues are resolved rapidly to keep tenants happy.
                        </p>
</div>
<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:key" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Lettings</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            Finding the right tenants fast. We offer comprehensive marketing and rigorous referencing.
                        </p>
</div>
<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:hard-hat" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Trusted Subcontractors</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            Access our vetted network of specialist trades. We manage the contractors so you don't have to.
                        </p>
</div>
<div className="group p-8 border border-heritage-100 hover:border-heritage-900/30 hover:shadow-lg transition-all duration-300 reveal-on-scroll bg-alabaster-50">
<div className="w-12 h-12 bg-heritage-900/5 text-heritage-900 flex items-center justify-center rounded-full mb-6 group-hover:bg-heritage-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:trending-up" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-serif font-semibold text-heritage-900 mb-3">Sales &amp; Valuations</h3>
<p className="text-heritage-600 text-sm leading-relaxed mb-4">
                            Honest, data-driven valuations. We help you sell your property for the best price.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-alabaster-50" id="gallery">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 reveal-on-scroll">
<div>
<span className="text-bronze-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Our Work</span>
<h2 className="text-3xl md:text-5xl font-serif text-heritage-900">Featured Properties</h2>
</div>
<button className="block text-xs uppercase tracking-widest font-semibold text-heritage-900 hover:text-bronze-500 transition-colors mt-6 md:mt-0 text-left md:text-right" onclick="switchView('projects')">
                        View All Projects →
                    </button>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 reveal-on-scroll">

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden cursor-pointer" onclick="openCaseStudy(0)">
<img alt="Modern Kitchen" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/20 group-hover:bg-heritage-900/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] uppercase tracking-widest text-white mb-2 block">Renovation</span>
<h4 className="text-xl font-serif text-white">Kings Road Extension</h4>
</div>
</div>
<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden cursor-pointer" onclick="openCaseStudy(1)">
<img alt="Bright Living Room" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/20 group-hover:bg-heritage-900/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] uppercase tracking-widest text-white mb-2 block">Lettings</span>
<h4 className="text-xl font-serif text-white">Marine Parade Penthouse</h4>
</div>
</div>
<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden cursor-pointer md:col-span-2 lg:col-span-1" onclick="openCaseStudy(2)">
<img alt="Garden Landscape" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-2a14729816e8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/20 group-hover:bg-heritage-900/40 transition-colors duration-300"></div>
<div className="absolute bottom-0 left-0 p-8 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<span className="text-[10px] uppercase tracking-widest text-white mb-2 block">Maintenance</span>
<h4 className="text-xl font-serif text-white">West End Gardens</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="faq">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<span className="text-bronze-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Common Questions</span>
<h2 className="text-3xl md:text-5xl font-serif text-heritage-900 mb-6">How can we help?</h2>
</div>
<div className="space-y-4 reveal-on-scroll">
<details className="group bg-alabaster-50 border border-heritage-100 rounded-sm open:bg-alabaster-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-base md:text-lg font-medium pr-4 text-heritage-900">What areas do you cover?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-bronze-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-heritage-600 text-sm leading-relaxed">
                            We primarily serve Worthing, Lancing, Shoreham, and the surrounding West Sussex coastal areas. Our local office is based in the heart of Worthing.
                        </div>
</details>
<details className="group bg-alabaster-50 border border-heritage-100 rounded-sm open:bg-alabaster-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-base md:text-lg font-medium pr-4 text-heritage-900">Do you handle emergency maintenance?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-bronze-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-heritage-600 text-sm leading-relaxed">
                            Yes. For our fully managed properties, we provide a 24/7 emergency contact line. Our in-house maintenance team is ready to handle urgent repairs.
                        </div>
</details>
<details className="group bg-alabaster-50 border border-heritage-100 rounded-sm open:bg-alabaster-100 transition-all duration-300">
<summary className="flex items-center justify-between p-6 cursor-pointer select-none">
<h3 className="text-base md:text-lg font-medium pr-4 text-heritage-900">Are you members of a redress scheme?</h3>
<span className="transform group-open:rotate-180 transition-transform duration-300 text-bronze-500">
<iconify-icon icon="lucide:chevron-down" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-heritage-600 text-sm leading-relaxed">
                            Absolutely. We are members of the Property Ombudsman and adhere to strict codes of practice.
                        </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-heritage-900 text-alabaster-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div className="reveal-on-scroll">
<span className="text-bronze-500 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Get in Touch</span>
<h2 className="text-3xl md:text-5xl font-serif mb-6 leading-tight">Start the conversation.</h2>
<p className="text-alabaster-50/70 font-light text-base leading-relaxed mb-10 max-w-md">
                            Whether you have a question about our services or need urgent assistance with a property, our team is here to help.
                        </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-sm text-bronze-500">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Visit Us</h4>
<p className="text-sm text-alabaster-50/60 font-light">14 Marine Parade, Worthing, BN11 3QA</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-sm text-bronze-500">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Call Us</h4>
<p className="text-sm text-alabaster-50/60 font-light">01903 123 456</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white/10 p-3 rounded-sm text-bronze-500">
<iconify-icon icon="lucide:mail" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-white uppercase tracking-wide mb-1">Email Us</h4>
<p className="text-sm text-alabaster-50/60 font-light">info@marinagroup.com</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-sm text-heritage-900 reveal-on-scroll">
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Name</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 transition-all text-heritage-900" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Phone</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 transition-all text-heritage-900" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Email</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 transition-all text-heritage-900" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Message</label>
<textarea className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 transition-all text-heritage-900" rows="4"></textarea>
</div>
<button className="w-full bg-heritage-900 text-white py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze-500 transition-colors duration-300">
                                Send Message
                            </button>
</form>
</div>
</div>
</div>
</section>
</main>

<main className="hidden flex-grow bg-alabaster-50 pt-32 pb-24" id="view-projects">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12 fade-in">
<button className="text-[10px] font-bold uppercase tracking-widest text-heritage-400 hover:text-heritage-900 transition-colors flex items-center gap-2" onclick="switchView('home')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back to Home
                </button>
</div>
<div className="text-center mb-16 fade-in">
<span className="text-bronze-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-3">Our Portfolio</span>
<h2 className="text-4xl md:text-5xl font-serif text-heritage-900">Selected Works</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 fade-in">

<div className="group cursor-pointer" onclick="openCaseStudy(0)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Kings Road House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Renovation</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">Kings Road Extension</h3>
</div>

<div className="group cursor-pointer" onclick="openCaseStudy(1)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Penthouse Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Lettings</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">Marine Parade Penthouse</h3>
</div>

<div className="group cursor-pointer" onclick="openCaseStudy(2)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Garden Maintenance" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600596542815-2a14729816e8?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Maintenance</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">West End Gardens</h3>
</div>

<div className="group cursor-pointer" onclick="openCaseStudy(3)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Heritage Building" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600047509807-ba8f99d2cdde?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Development</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">The Old Rectory</h3>
</div>

<div className="group cursor-pointer" onclick="openCaseStudy(4)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Modern Apartment Block" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Sales</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">Harbour View Flats</h3>
</div>

<div className="group cursor-pointer" onclick="openCaseStudy(5)">
<div className="relative aspect-[4/3] overflow-hidden mb-4 rounded-sm">
<img alt="Office Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-heritage-900/0 group-hover:bg-heritage-900/20 transition-colors duration-300"></div>
</div>
<span className="text-[10px] uppercase tracking-widest text-bronze-600 block mb-1">Commercial</span>
<h3 className="text-xl font-serif text-heritage-900 group-hover:text-bronze-600 transition-colors">Unit 4 Refurbishment</h3>
</div>
</div>
</div>
</main>

<main className="hidden flex-grow bg-white pt-24" id="view-case-study">

<div id="case-study-content"></div>
</main>

<main className="hidden flex-grow bg-alabaster-50 pt-32 pb-24" id="view-booking">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-12 fade-in">
<button className="text-[10px] font-bold uppercase tracking-widest text-heritage-400 hover:text-heritage-900 transition-colors flex items-center gap-2" onclick="switchView('home')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon> Back to Home
                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 fade-in">

<div>
<span className="text-bronze-600 text-[10px] font-bold tracking-[0.2em] uppercase block mb-4">Start your journey</span>
<h2 className="text-4xl md:text-5xl font-serif text-heritage-900 mb-6 leading-tight">
                        Book your complimentary property consultation.
                    </h2>
<p className="text-heritage-600 font-light text-base leading-relaxed mb-8 max-w-md">
                        Whether you are looking to sell, let, or renovate, our experts are ready to provide data-driven insights tailored to your property goals. Select a time that suits you, and we'll take care of the rest.
                    </p>
<div className="space-y-6 pt-6 border-t border-heritage-900/10">
<div className="flex items-start gap-4">
<div className="bg-white p-2 border border-heritage-100 rounded-sm text-bronze-500">
<iconify-icon icon="lucide:map-pin" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-heritage-900 uppercase tracking-wide mb-1">Visit Us</h4>
<p className="text-sm text-heritage-600 font-light">14 Marine Parade, Worthing, BN11 3QA</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="bg-white p-2 border border-heritage-100 rounded-sm text-bronze-500">
<iconify-icon icon="lucide:phone" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-heritage-900 uppercase tracking-wide mb-1">Call Us</h4>
<p className="text-sm text-heritage-600 font-light">01903 123 456</p>
</div>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 shadow-xl shadow-heritage-900/5 border border-heritage-100 relative h-fit">

<div className="flex items-center justify-between mb-8 pb-4 border-b border-heritage-50">
<span className="text-xs font-bold uppercase tracking-widest text-bronze-500" id="step-indicator">Step 1 of 2: Details</span>
<div className="flex gap-1">
<div className="w-1.5 h-1.5 rounded-full bg-heritage-900" id="dot-1"></div>
<div className="w-1.5 h-1.5 rounded-full bg-heritage-200" id="dot-2"></div>
</div>
</div>

<div className="fade-in" id="booking-step-1">
<form className="space-y-5" onsubmit="event.preventDefault(); nextStep();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">First Name</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 focus:bg-white transition-all text-heritage-900" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Last Name</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 focus:bg-white transition-all text-heritage-900" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Email Address</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 focus:bg-white transition-all text-heritage-900" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Phone Number</label>
<input className="w-full bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 focus:bg-white transition-all text-heritage-900" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-[10px] uppercase font-bold tracking-widest text-heritage-400">Consultation Type</label>
<div className="relative">
<select className="w-full appearance-none bg-alabaster-50 border border-heritage-100 px-4 py-3 text-sm focus:outline-none focus:border-heritage-900 focus:bg-white transition-all text-heritage-900">
<option>Property Valuation (Sales)</option>
<option>Rental Appraisal</option>
<option>Development Consultation</option>
<option>General Advice</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-0 flex items-center px-4 text-heritage-400">
<iconify-icon icon="lucide:chevron-down" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="pt-4">
<button className="w-full bg-heritage-900 text-white py-4 text-xs uppercase tracking-widest font-semibold hover:bg-bronze-500 transition-colors duration-300" type="submit">
                                    Continue to Calendar
                                </button>
</div>
</form>
</div>

<div className="hidden fade-in" id="booking-step-2">
<div className="bg-white">
<div className="flex justify-between items-center mb-6">
<h3 className="font-serif text-lg text-heritage-900 font-medium">November 2023</h3>
<div className="flex gap-1">
<button className="p-1.5 border border-heritage-100 hover:border-bronze-500 hover:text-bronze-500 transition-colors"><iconify-icon icon="lucide:chevron-left"></iconify-icon></button>
<button className="p-1.5 border border-heritage-100 hover:border-bronze-500 hover:text-bronze-500 transition-colors"><iconify-icon icon="lucide:chevron-right"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-7 gap-1 mb-2 text-center">
<div className="text-[10px] uppercase font-bold text-heritage-300">M</div>
<div className="text-[10px] uppercase font-bold text-heritage-300">T</div>
<div className="text-[10px] uppercase font-bold text-heritage-300">W</div>
<div className="text-[10px] uppercase font-bold text-heritage-300">T</div>
<div className="text-[10px] uppercase font-bold text-heritage-300">F</div>
<div className="text-[10px] uppercase font-bold text-bronze-400">S</div>
<div className="text-[10px] uppercase font-bold text-bronze-400">S</div>
</div>
<div className="grid grid-cols-7 gap-1 mb-6 text-center text-xs font-medium">
<div className="p-2"></div><div className="p-2"></div>
<button className="p-2 text-heritage-200 cursor-not-allowed">1</button>
<button className="p-2 text-heritage-200 cursor-not-allowed">2</button>
<button className="p-2 text-heritage-200 cursor-not-allowed">3</button>
<button className="p-2 text-heritage-200 cursor-not-allowed">4</button>
<button className="p-2 text-heritage-200 cursor-not-allowed">5</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">6</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">7</button>
<button className="p-2 bg-heritage-900 text-white shadow-sm">8</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">9</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">10</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">11</button>
<button className="p-2 hover:bg-heritage-50 transition-colors">12</button>
</div>
<div className="border-t border-heritage-100 pt-5">
<h4 className="text-[10px] uppercase font-bold tracking-widest text-heritage-400 mb-4">Wednesday, Nov 8</h4>
<div className="grid grid-cols-2 gap-3 mb-6">
<button className="border border-heritage-200 py-2.5 text-xs font-medium text-heritage-700 hover:border-heritage-900 hover:bg-heritage-900 hover:text-white transition-all">09:00 AM</button>
<button className="border border-heritage-200 py-2.5 text-xs font-medium text-heritage-700 hover:border-heritage-900 hover:bg-heritage-900 hover:text-white transition-all">11:30 AM</button>
<button className="border border-heritage-200 py-2.5 text-xs font-medium text-heritage-700 hover:border-heritage-900 hover:bg-heritage-900 hover:text-white transition-all">02:00 PM</button>
<button className="border border-heritage-200 py-2.5 text-xs font-medium text-heritage-700 hover:border-heritage-900 hover:bg-heritage-900 hover:text-white transition-all">04:30 PM</button>
</div>
</div>
</div>
<div className="flex gap-4">
<button className="w-1/3 border border-heritage-200 text-heritage-900 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-heritage-50 transition-colors" onclick="prevStep()">
                                Back
                            </button>
<button className="w-2/3 bg-bronze-500 text-heritage-900 py-4 text-xs uppercase tracking-widest font-semibold hover:bg-heritage-900 hover:text-white transition-colors">
                                Confirm
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-heritage-900 text-alabaster-50 py-16 border-t border-white/5">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<span className="font-serif text-2xl text-white font-medium block mb-4">Marina Group</span>
<p className="text-alabaster-50/60 font-light text-sm max-w-xs leading-relaxed">
                        Your local property partners. Dedicated to delivering high-quality service since 1982.
                    </p>
</div>
<div>
<h4 className="text-bronze-500 text-[10px] uppercase tracking-widest mb-6 font-bold">Office</h4>
<div className="space-y-3 text-sm text-alabaster-50/70 font-light">
<p>14 Marine Parade<br/>Worthing, BN11 3QA</p>
<p><a className="hover:text-white transition-colors" href="mailto:info@marinagroup.com">info@marinagroup.com</a></p>
<p>01903 123 456</p>
</div>
</div>
<div>
<h4 className="text-bronze-500 text-[10px] uppercase tracking-widest mb-6 font-bold">Company</h4>
<div className="space-y-3 text-sm text-alabaster-50/70 font-light flex flex-col">
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="switchView('home', 'about')">About Us</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="switchView('home', 'services')">Services</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="switchView('projects')">Portfolio</a>
<a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="switchView('home', 'contact')">Contact</a>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-alabaster-50/40">
<p className="text-[10px] uppercase tracking-widest">© 2023 Marina Group Ltd.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" width="16"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="16"></iconify-icon></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
