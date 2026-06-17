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
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
900: '#0F172A', // Deep Navy
800: '#1E293B',
},
gold: {
light: '#F8E3A5', // Champagne
DEFAULT: '#DEBC57', // Classic Gold
dark: '#B89635', // Shadow Gold
accent: '#D4AF37', // Metallic
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out forwards',
'slide-up': 'slideUp 0.6s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // --- Data for Modals ---
        const serviceData = {
            metal: {
                title: "Extensive Metal Supply",
                category: "Manufacturing",
                icon: "lucide:layers",
                desc: "We maintain one of the region's largest inventories of ferrous and non-ferrous metals. Our supply chain is optimized for Just-In-Time (JIT) delivery, ensuring your production lines never stop.",
                features: ["Aluminum, Steel, Copper & Alloys", "Custom cut-to-length service", "Mill test reports provided", "Bulk volume discounts"]
            },
            transport: {
                title: "Transportation Solutions",
                category: "Logistics",
                icon: "lucide:truck",
                desc: "Our fleet and partner network handle everything from local sprinter van deliveries to cross-country heavy haulage. We specialize in oversized loads and critical time-sensitive freight.",
                features: ["Flatbed & Step-deck hauling", "Oversized load permits", "GPS real-time tracking", "Dedicated fleet options"]
            },
            sprinkler: {
                title: "Sprinkler Solutions",
                category: "Safety Systems",
                icon: "lucide:droplets",
                desc: "Protect your assets with state-of-the-art fire suppression systems. Our certified engineers design NFPA-compliant solutions tailored to your facility's unique layout and hazard classification.",
                features: ["Wet & Dry pipe systems", "Annual compliance inspections", "24/7 Emergency repair", "Hydraulic flow analysis"]
            },
            branding: {
                title: "Promotional Branding",
                category: "Design",
                icon: "lucide:megaphone",
                desc: "Turn your industrial products into brand ambassadors. We offer industrial-grade marking solutions that withstand harsh environments while maintaining visual fidelity.",
                features: ["Laser engraving/etching", "Pad printing", "UV flatbed printing", "Custom metal nameplates"]
            },
            hardware: {
                title: "Industrial Hardware",
                category: "Supply",
                icon: "lucide:wrench",
                desc: "We are the single source for your assembly needs. From Grade 8 bolts to complex hydraulic fittings, we stock the components that keep your machinery running.",
                features: ["Fasteners & Anchors", "Hydraulic & Pneumatic fittings", "Structural support systems", "Inventory management (VMI)"]
            },
            metalworking: {
                title: "Metalworking Services",
                category: "Fabrication",
                icon: "lucide:hammer",
                desc: "Our machine shop is equipped with multi-axis CNC centers and expert welders. We take your CAD files and produce high-tolerance parts with exceptional surface finishes.",
                features: ["CNC Milling & Turning", "MIG/TIG Welding", "Sheet metal bending", "Prototype to Production"]
            },
            recycling: {
                title: "Metal Recycling",
                category: "Sustainability",
                icon: "lucide:recycle",
                desc: "Maximize the value of your scrap. We provide container service and competitive pricing for industrial scrap, processing it responsibly to close the manufacturing loop.",
                features: ["Ferrous & Non-ferrous pickup", "On-site container service", "Hazardous material screening", "Certificate of Destruction"]
            },
            robotics: {
                title: "Robotics",
                category: "Automation",
                icon: "lucide:bot",
                desc: "Future-proof your operations with custom automation. We integrate robotic cells for welding, palletizing, and assembly to reduce cycle times and improve consistency.",
                features: ["Fanuc & ABB integration", "Custom End-of-Arm Tooling", "PLC Programming", "Safety cell fencing"]
            },
            shipping: {
                title: "Shipping Solutions",
                category: "Logistics",
                icon: "lucide:package-check",
                desc: "We ensure your finished goods arrive safely. Our team creates custom crates and manages all export documentation for seamless international trade.",
                features: ["ISPM-15 Certified Crating", "Export documentation", "Freight forwarding", "Fragile goods packaging"]
            }
        };

        // --- Interaction Logic ---

        // Accordion Toggle
        function toggleCard(header) {
            const card = header.closest('.service-card');
            const content = card.querySelector('.accordion-wrapper');
            const chevron = card.querySelector('.chevron');
            
            const isOpen = content.classList.contains('open');

            // Close others (optional, keeping for cleaner UI)
            document.querySelectorAll('.accordion-wrapper').forEach(el => {
                el.classList.remove('open');
                el.closest('.service-card').querySelector('.chevron').style.transform = 'rotate(0deg)';
            });

            if (!isOpen) {
                content.classList.add('open');
                chevron.style.transform = 'rotate(180deg)';
            }
        }

        // Modal Logic
        function openModal(key) {
            const data = serviceData[key];
            if(!data) return;

            // Populate Data
            document.getElementById('modalTitle').textContent = data.title;
            document.getElementById('modalCategory').textContent = data.category;
            document.getElementById('modalDescription').textContent = data.desc;
            document.getElementById('modalIcon').setAttribute('icon', data.icon);
            
            const featuresList = document.getElementById('modalFeatures');
            featuresList.innerHTML = '';
            data.features.forEach(feat => {
                featuresList.innerHTML += `
                    <li class="flex items-center gap-2 text-sm text-navy-900/70">
                        <iconify-icon icon="lucide:check-circle" class="text-gold-DEFAULT"></iconify-icon>
                        ${feat}
                    </li>
                `;
            });

            // Show Modal
            const modal = document.getElementById('serviceModal');
            modal.classList.remove('hidden');
            // Trigger reflow
            void modal.offsetWidth; 
            modal.classList.remove('opacity-0');
            modal.querySelector('div').classList.remove('scale-95');
            modal.querySelector('div').classList.add('scale-100');
            
            document.body.style.overflow = 'hidden'; // Prevent body scroll
        }

        function closeModal() {
            const modal = document.getElementById('serviceModal');
            modal.classList.add('opacity-0');
            modal.querySelector('div').classList.remove('scale-100');
            modal.querySelector('div').classList.add('scale-95');
            
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        // Close modal on click outside
        document.getElementById('serviceModal').addEventListener('click', function(e) {
            if(e.target === this) closeModal();
        });

        // Search & Filter Logic
        function filterServices(category, btn) {
            // Update buttons
            document.querySelectorAll('.filter-btn').forEach(b => {
                b.classList.remove('bg-gold-light/20', 'border-gold-DEFAULT/30');
                b.classList.add('bg-transparent', 'border-gray-200');
            });
            btn.classList.remove('bg-transparent', 'border-gray-200');
            btn.classList.add('bg-gold-light/20', 'border-gold-DEFAULT/30');

            const searchTerm = document.getElementById('searchInput').value.toLowerCase();
            const cards = document.querySelectorAll('.service-card');

            cards.forEach(card => {
                const cardCat = card.getAttribute('data-category');
                const cardTitle = card.getAttribute('data-title').toLowerCase();
                
                const matchesCategory = category === 'all' || cardCat === category;
                const matchesSearch = cardTitle.includes(searchTerm);

                if (matchesCategory && matchesSearch) {
                    card.style.display = 'block';
                    // Add slight animation for re-appearing
                    card.classList.add('animate-fade-in');
                } else {
                    card.style.display = 'none';
                    card.classList.remove('animate-fade-in');
                }
            });
        }

        // Bind Search Input
        document.getElementById('searchInput').addEventListener('input', () => {
            const activeBtn = document.querySelector('.filter-btn.active') || document.querySelector('.filter-btn');
            // We need to know which category is active. For simplicity, let's assume 'all' if script is complex, 
            // but here we can just trigger the click on the currently styled button or reset to all.
            // Simplified: Just re-run filter logic based on current input
            const cards = document.querySelectorAll('.service-card');
            const term = document.getElementById('searchInput').value.toLowerCase();
            
            cards.forEach(card => {
                if(card.getAttribute('data-title').toLowerCase().includes(term)) {
                     card.style.display = 'block';
                } else {
                     card.style.display = 'none';
                }
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
      

<header className="relative pt-24 pb-12 px-6 overflow-hidden">

<div className="absolute inset-0 z-0 opacity-40">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-gradient-to-b from-gray-200/50 to-transparent rounded-full blur-3xl"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto text-center animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-navy-900/10 bg-white/50 backdrop-blur-sm mb-6">
<span className="w-2 h-2 rounded-full bg-gold-DEFAULT animate-pulse"></span>
<span className="text-xs font-semibold tracking-widest uppercase text-navy-900/60">Capabilities &amp; Expertise</span>
</div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-navy-900 mb-6">
                Our Services
            </h1>
<p className="text-lg md:text-xl text-navy-900/60 font-light max-w-2xl mx-auto leading-relaxed">
                Precision engineering meets comprehensive logistics. We deliver premium industrial solutions tailored to scale.
            </p>
</div>
</header>

<div className="sticky top-4 z-40 px-6 mb-16 animate-slide-up" style={{animationDelay: '100ms'}}>
<div className="max-w-4xl mx-auto">
<div className="bg-white/90 backdrop-blur-md rounded-2xl shadow-xl shadow-navy-900/5 border border-white/50 p-2 md:p-3 flex flex-col md:flex-row items-center gap-3">

<div className="relative w-full md:w-1/3">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-navy-900/40 text-lg" icon="lucide:search"></iconify-icon>
<input className="w-full bg-gray-50/50 hover:bg-gray-100/50 focus:bg-white border-0 rounded-xl py-3 pl-12 pr-4 text-sm text-navy-900 placeholder:text-navy-900/40 focus:ring-2 focus:ring-gold-DEFAULT/50 transition-all outline-none" id="searchInput" placeholder="Search capabilities..." type="text"/>
</div>

<div className="flex items-center gap-2 overflow-x-auto w-full md:w-2/3 pb-2 md:pb-0 scrollbar-hide px-1">
<button className="filter-btn active px-4 py-2.5 rounded-xl border border-gold-DEFAULT/30 bg-gold-light/20 text-navy-900 text-sm font-medium hover:bg-gold-DEFAULT hover:text-navy-900 transition-all whitespace-nowrap" onclick="filterServices('all', this)">All</button>
<button className="filter-btn px-4 py-2.5 rounded-xl border border-gray-200 bg-transparent text-navy-900/70 text-sm font-medium hover:border-gold-DEFAULT hover:text-navy-900 transition-all whitespace-nowrap" onclick="filterServices('logistics', this)">Logistics</button>
<button className="filter-btn px-4 py-2.5 rounded-xl border border-gray-200 bg-transparent text-navy-900/70 text-sm font-medium hover:border-gold-DEFAULT hover:text-navy-900 transition-all whitespace-nowrap" onclick="filterServices('manufacturing', this)">Manufacturing</button>
<button className="filter-btn px-4 py-2.5 rounded-xl border border-gray-200 bg-transparent text-navy-900/70 text-sm font-medium hover:border-gold-DEFAULT hover:text-navy-900 transition-all whitespace-nowrap" onclick="filterServices('tech', this)">Technology</button>
</div>
</div>
</div>
</div>

<main className="max-w-7xl mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 auto-rows-min" id="servicesGrid">


<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="manufacturing" data-title="Extensive Metal Supply">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">

<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:layers" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Extensive Metal Supply</h3>
</div>

<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                High-grade aluminum, stainless steel, and specialty alloys sourced for reliability and scale.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('metal')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="logistics" data-title="Transportation Solutions">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:truck" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Transportation Solutions</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Integrated logistics network ensuring timely delivery of heavy freight and specialized loads.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('transport')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="manufacturing" data-title="Sprinkler Solutions">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:droplets" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Sprinkler Solutions</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Comprehensive industrial fire protection and advanced irrigation system design.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('sprinkler')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="tech" data-title="Promotional Branding">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:megaphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Promotional Branding</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Custom laser etching and industrial signage to elevate corporate identity on hardware.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('branding')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="manufacturing" data-title="Industrial Hardware">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:wrench" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Industrial Hardware</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Sourcing hard-to-find components and heavy-duty fasteners for complex machinery.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('hardware')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="manufacturing" data-title="Metalworking Services">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:hammer" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Metalworking Services</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Precision CNC machining, welding, and fabrication to exact engineering specs.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('metalworking')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="manufacturing" data-title="Metal Recycling">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:recycle" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Metal Recycling</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Sustainable scrap management programs optimizing value recovery and eco-friendly disposal.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('recycling')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="tech" data-title="Robotics">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:bot" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Robotics</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                Advanced automation and robotic arms to increase throughput and safety in operations.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('robotics')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>

<div className="service-card group relative rounded-3xl transition-all duration-500 hover:-translate-y-2" data-category="logistics" data-title="Shipping Solutions">
<div className="gold-card rounded-3xl h-full border border-white/20 overflow-hidden relative z-10">
<div className="p-8 cursor-pointer flex flex-col justify-between min-h-[140px]" onclick="toggleCard(this)">
<div className="flex justify-between items-start">
<div className="w-12 h-12 rounded-2xl bg-navy-900/5 border border-navy-900/10 flex items-center justify-center transition-transform group-hover:scale-110 duration-500">
<iconify-icon className="text-navy-900" icon="lucide:package-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-navy-900/5 group-hover:bg-navy-900/10 transition-colors">
<iconify-icon className="chevron text-navy-900 transition-transform duration-300" icon="lucide:chevron-down"></iconify-icon>
</button>
</div>
<h3 className="text-xl font-bold tracking-tight text-navy-900 mt-4 group-hover:translate-x-1 transition-transform">Shipping Solutions</h3>
</div>
<div className="accordion-wrapper px-8">
<div className="accordion-inner pb-8">
<p className="text-navy-900/80 text-sm leading-relaxed mb-6 font-medium">
                                End-to-end global freight forwarding, secure crating, and efficient documentation.
                            </p>
<div className="h-px w-full bg-navy-900/10 mb-6"></div>
<button className="flex items-center gap-2 text-sm font-semibold text-navy-900 hover:text-navy-900/70 transition-colors group/btn" onclick="openModal('shipping')">
                                Learn more
                                <iconify-icon className="group-hover/btn:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-50 hidden modal-backdrop bg-navy-900/20 flex items-center justify-center p-4 transition-opacity duration-300 opacity-0" id="serviceModal">
<div className="bg-white border-2 border-gold-DEFAULT rounded-3xl shadow-2xl w-full max-w-2xl transform scale-95 transition-transform duration-300 relative overflow-hidden flex flex-col max-h-[90vh]">

<div className="absolute top-0 right-0 w-32 h-32 bg-gold-light/20 rounded-bl-full -mr-8 -mt-8 pointer-events-none"></div>

<div className="p-8 pb-4 relative z-10 border-b border-gray-100 flex justify-between items-start">
<div>
<div className="inline-flex items-center gap-2 mb-2">
<iconify-icon className="text-gold-dark text-xl" icon="lucide:box" id="modalIcon"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-widest text-gold-dark" id="modalCategory">Category</span>
</div>
<h2 className="text-3xl font-bold text-navy-900 tracking-tight" id="modalTitle">Service Title</h2>
</div>
<button className="w-10 h-10 rounded-full bg-gray-50 hover:bg-gray-100 flex items-center justify-center transition-colors" onclick="closeModal()">
<iconify-icon className="text-navy-900 text-lg" icon="lucide:x"></iconify-icon>
</button>
</div>

<div className="p-8 pt-6 overflow-y-auto">
<p className="text-lg text-navy-900/80 leading-relaxed mb-8" id="modalDescription">
                    Detailed description goes here.
                </p>
<h4 className="text-sm font-semibold uppercase tracking-wider text-navy-900 mb-4">Key Capabilities</h4>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-3" id="modalFeatures">

</ul>
<div className="mt-8 p-6 bg-gold-light/20 rounded-2xl border border-gold-DEFAULT/20 flex items-center justify-between">
<div>
<p className="text-navy-900 font-semibold">Need this service?</p>
<p className="text-navy-900/60 text-sm">Contact our engineering team.</p>
</div>
<button className="bg-navy-900 text-white px-6 py-2.5 rounded-xl font-medium text-sm hover:bg-navy-800 transition-all shadow-lg shadow-navy-900/20">
                        Get a Quote
                    </button>
</div>
</div>
</div>
</div>


    </>
  );
}
