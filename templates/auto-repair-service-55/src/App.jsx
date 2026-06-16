import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple Router to switch sections without page reload
        function router(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('fade-in'); // Reset animation
            });

            // Show selected section
            const target = document.getElementById(pageId);
            if(target) {
                target.classList.remove('hidden');
                // Trigger reflow to restart animation
                void target.offsetWidth; 
                target.classList.add('fade-in');
                window.scrollTo(0, 0);
            }
        }

        // Mobile Menu Toggle
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('translate-x-full');
            
            if(isOpen) {
                menu.classList.add('translate-x-full');
            } else {
                menu.classList.remove('translate-x-full');
            }
        }

        // Accordion for FAQ
        function toggleFaq(button) {
            const content = button.nextElementSibling;
            const icon = button.querySelector('span:last-child');
            
            // Close others
            document.querySelectorAll('#faq .hidden.px-6').forEach(el => {
                if(el !== content) {
                    el.classList.add('hidden');
                    el.parentElement.querySelector('span:last-child').classList.remove('rotate-180');
                }
            });

            // Toggle current
            if (content.classList.contains('hidden')) {
                content.classList.remove('hidden');
                icon.classList.add('rotate-180');
            } else {
                content.classList.add('hidden');
                icon.classList.remove('rotate-180');
            }
        }

        // Form Simulation
        function handleFormSubmit(e) {
            e.preventDefault();
            const form = document.getElementById('appointmentForm');
            const btn = form.querySelector('button[type="submit"]');
            const originalText = btn.innerText;

            btn.innerText = "Sending...";
            btn.disabled = true;

            setTimeout(() => {
                btn.innerText = originalText;
                btn.disabled = false;
                form.reset();
                document.getElementById('formSuccess').classList.remove('hidden');
                
                setTimeout(() => {
                     document.getElementById('formSuccess').classList.add('hidden');
                }, 5000);
            }, 1500);
        }

        // Initialize
        document.addEventListener('DOMContentLoaded', () => {
            router('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 border-b border-white/5 glass">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#" onclick="router('home')">
<span className="icon-[lucide--gauge] w-6 h-6 text-blue-500 group-hover:rotate-180 transition-transform duration-700"></span>
<span className="text-white font-medium tracking-tight text-lg">AUTOBAHN</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<button className="hover:text-white transition-colors" onclick="router('home')">Home</button>
<button className="hover:text-white transition-colors" onclick="router('about')">About</button>
<button className="hover:text-white transition-colors" onclick="router('services')">Services</button>
<button className="hover:text-white transition-colors" onclick="router('reviews')">Reviews</button>
<button className="hover:text-white transition-colors" onclick="router('faq')">FAQ</button>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-white text-slate-950 px-4 py-2 rounded text-xs font-medium hover:bg-blue-50 transition-colors shadow-[0_0_15px_-5px_rgba(255,255,255,0.3)]" onclick="router('contact')">
<span>Book Appointment</span>
<span className="icon-[lucide--arrow-right] w-3 h-3"></span>
</button>
<button className="md:hidden text-white" onclick="toggleMobileMenu()">
<span className="icon-[lucide--menu] w-6 h-6"></span>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-slate-950 transform translate-x-full transition-transform duration-300 md:hidden flex flex-col pt-24 px-6 gap-6" id="mobile-menu">
<button className="text-xl font-medium text-white" onclick="toggleMobileMenu(); router('home')">Home</button>
<button className="text-xl font-medium text-white" onclick="toggleMobileMenu(); router('about')">About</button>
<button className="text-xl font-medium text-white" onclick="toggleMobileMenu(); router('services')">Services</button>
<button className="text-xl font-medium text-white" onclick="toggleMobileMenu(); router('reviews')">Reviews</button>
<button className="text-xl font-medium text-white" onclick="toggleMobileMenu(); router('faq')">FAQ</button>
<button className="text-xl font-medium text-blue-400" onclick="toggleMobileMenu(); router('contact')">Book Appointment</button>
<button className="absolute top-5 right-6 text-white" onclick="toggleMobileMenu()">
<span className="icon-[lucide--x] w-6 h-6"></span>
</button>
</div>

<main className="pt-16 min-h-screen" id="app-content">

<section className="page-section fade-in" id="home">
<div className="relative w-full h-[85vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-30"></div>
<div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/50 to-transparent"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-500/30 bg-blue-500/10 text-blue-400 text-xs tracking-wide uppercase font-medium">
<span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>
                        Serving Plano, Dallas &amp; Collin County
                    </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-gradient leading-tight">
                        Precision care for your <br className="hidden md:block"/> European machine.
                    </h1>
<p className="text-lg md:text-xl text-slate-400 max-w-2xl mx-auto font-light">
                        The premier owner-operated service center for Mercedes-Benz, BMW, Porsche, Audi, and Jaguar. Dealership quality without the dealership premium.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
<button className="w-full sm:w-auto bg-blue-600 text-white px-8 py-3 rounded text-sm font-medium hover:bg-blue-500 transition-all shadow-[0_0_20px_-5px_rgba(37,99,235,0.5)]" onclick="router('contact')">
                            Book Appointment
                        </button>
<a className="w-full sm:w-auto px-8 py-3 rounded text-sm font-medium text-white border border-white/10 hover:bg-white/5 transition-colors flex items-center justify-center gap-2" href="tel:9725990999">
<span className="icon-[lucide--phone] w-4 h-4"></span>
                            (972) 599-0999
                        </a>
</div>
<div className="pt-12 flex items-center justify-center gap-8 opacity-50 grayscale">

<span className="text-xl font-bold tracking-tighter text-white">BMW</span>
<span className="text-xl font-bold tracking-tighter text-white">MERCEDES</span>
<span className="text-xl font-bold tracking-tighter text-white">AUDI</span>
<span className="text-xl font-bold tracking-tighter text-white">PORSCHE</span>
<span className="text-xl font-bold tracking-tighter text-white">VOLVO</span>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-20 px-6" id="about">
<div className="max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="space-y-6">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Owner-operated. <br/> obsessed with quality.</h2>
<div className="w-12 h-0.5 bg-blue-600"></div>
<p className="font-light leading-relaxed">
                            At Autobahn Service Center, we don't just repair cars; we maintain the performance heritage of your vehicle. With over 50 years of combined experience, our team brings factory-level expertise to an independent setting.
                        </p>
<p className="font-light leading-relaxed">
                            We believe in transparency. Unlike large chains, you'll speak directly with people who understand your car. We are committed to honesty, quality workmanship, and treating every vehicle as if it were our own.
                        </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="p-4 border border-white/10 rounded bg-white/5">
<span className="icon-[lucide--award] w-8 h-8 text-blue-500 mb-3"></span>
<h3 className="text-white font-medium mb-1">ASE Certified</h3>
<p className="text-xs text-slate-500">Factory-trained staff utilizing latest protocols.</p>
</div>
<div className="p-4 border border-white/10 rounded bg-white/5">
<span className="icon-[lucide--shield-check] w-8 h-8 text-blue-500 mb-3"></span>
<h3 className="text-white font-medium mb-1">AAA Approved</h3>
<p className="text-xs text-slate-500">Highest standards for customer satisfaction.</p>
</div>
</div>
</div>
<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-blue-600 to-purple-600 rounded opacity-20 blur-xl"></div>
<img alt="Shop Interior" className="relative rounded border border-white/10 shadow-2xl grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&amp;w=2072&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-20 px-6" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Comprehensive Care</h2>
<p className="text-slate-400 font-light">Using state-of-the-art diagnostic tools like Autologic and x-431 scanners to pinpoint issues with surgical precision.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-blue-500/10 flex items-center justify-center mb-6 group-hover:bg-blue-500/20 transition-colors">
<span className="icon-[lucide--activity] w-6 h-6 text-blue-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Advanced Diagnostics</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            We utilize factory-grade Autologic and Launch x-431 scanners to communicate with your vehicle's onboard computers, ensuring accurate troubleshooting.
                        </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-emerald-500/10 flex items-center justify-center mb-6 group-hover:bg-emerald-500/20 transition-colors">
<span className="icon-[lucide--wrench] w-6 h-6 text-emerald-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Maintenance &amp; Repair</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            From oil changes and brake services to complex engine overhauls and transmission repair. We follow manufacturer service intervals strictly.
                        </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-purple-500/10 flex items-center justify-center mb-6 group-hover:bg-purple-500/20 transition-colors">
<span className="icon-[lucide--snowflake] w-6 h-6 text-purple-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">A/C &amp; Cooling</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            Expert diagnosis of climate control systems, radiator replacements, and coolant flushes to keep your engine running at optimal temperatures.
                        </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-orange-500/10 flex items-center justify-center mb-6 group-hover:bg-orange-500/20 transition-colors">
<span className="icon-[lucide--zap] w-6 h-6 text-orange-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Electrical Systems</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            Solving complex wiring issues, battery drain problems, alternator replacements, and sensor faults common in modern European luxury cars.
                        </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-rose-500/10 flex items-center justify-center mb-6 group-hover:bg-rose-500/20 transition-colors">
<span className="icon-[lucide--car] w-6 h-6 text-rose-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Concierge Services</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            We value your time. Ask about our shuttle service, towing coordination, and complimentary car wash/valet options with major services.
                        </p>
</div>

<div className="group p-8 rounded border border-white/10 bg-white/5 hover:bg-white/[0.07] transition-all hover:border-white/20">
<div className="w-12 h-12 rounded bg-cyan-500/10 flex items-center justify-center mb-6 group-hover:bg-cyan-500/20 transition-colors">
<span className="icon-[lucide--check-circle] w-6 h-6 text-cyan-400"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Pre-Purchase Inspections</h3>
<p className="text-sm font-light text-slate-400 leading-relaxed">
                            Don't buy a used luxury car blind. We provide comprehensive inspections to identify hidden issues before you sign the paperwork.
                        </p>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-20 px-6" id="reviews">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Client Experiences</h2>
<div className="flex justify-center gap-1 mt-4 text-yellow-500">
<span className="icon-[lucide--star] w-5 h-5 fill-current"></span>
<span className="icon-[lucide--star] w-5 h-5 fill-current"></span>
<span className="icon-[lucide--star] w-5 h-5 fill-current"></span>
<span className="icon-[lucide--star] w-5 h-5 fill-current"></span>
<span className="icon-[lucide--star] w-5 h-5 fill-current"></span>
</div>
<p className="mt-2 text-sm text-slate-500">Based on 500+ verified reviews</p>
</div>
<div className="grid md:grid-cols-2 gap-6" id="reviews-grid">

<div className="p-8 rounded bg-slate-900 border border-white/5 relative">
<span className="absolute top-6 left-6 text-6xl text-white/5 font-serif">"</span>
<p className="relative z-10 text-slate-300 font-light italic mb-6">
                            "I've taken my BMW 5-series here for years. The pricing is significantly better than the dealership, but the work is arguably better. They even washed my car before returning it. The waiting area is clean and comfortable."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-900/50 flex items-center justify-center text-blue-200 font-medium text-sm">JD</div>
<div>
<h4 className="text-white text-sm font-medium">James D.</h4>
<p className="text-xs text-slate-500">Plano, TX</p>
</div>
</div>
</div>

<div className="p-8 rounded bg-slate-900 border border-white/5 relative">
<span className="absolute top-6 left-6 text-6xl text-white/5 font-serif">"</span>
<p className="relative z-10 text-slate-300 font-light italic mb-6">
                            "Finally found an honest mechanic for my Range Rover. They diagnosed an issue the dealership quoted $3k for and fixed it for a fraction of that. The shuttle service to my office was a lifesaver."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-900/50 flex items-center justify-center text-purple-200 font-medium text-sm">SL</div>
<div>
<h4 className="text-white text-sm font-medium">Sarah L.</h4>
<p className="text-xs text-slate-500">Frisco, TX</p>
</div>
</div>
</div>

<div className="p-8 rounded bg-slate-900 border border-white/5 relative">
<span className="absolute top-6 left-6 text-6xl text-white/5 font-serif">"</span>
<p className="relative z-10 text-slate-300 font-light italic mb-6">
                            "Knowledgeable about vintage Porsches. It's rare to find a shop that handles both modern and classic imports with such care. Owner is very hands-on."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-emerald-900/50 flex items-center justify-center text-emerald-200 font-medium text-sm">MR</div>
<div>
<h4 className="text-white text-sm font-medium">Michael R.</h4>
<p className="text-xs text-slate-500">Dallas, TX</p>
</div>
</div>
</div>

<div className="p-8 rounded bg-slate-900 border border-white/5 relative">
<span className="absolute top-6 left-6 text-6xl text-white/5 font-serif">"</span>
<p className="relative z-10 text-slate-300 font-light italic mb-6">
                            "Friendly staff, extremely professional. They explained everything clearly and didn't try to upsell me on things I didn't need for my Audi. Highly recommend."
                        </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-orange-900/50 flex items-center justify-center text-orange-200 font-medium text-sm">BK</div>
<div>
<h4 className="text-white text-sm font-medium">Brian K.</h4>
<p className="text-xs text-slate-500">Richardson, TX</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-20 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight text-center mb-12">Common Questions</h2>
<div className="space-y-4">

<div className="border border-white/10 rounded overflow-hidden bg-white/5">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white">Which car brands do you service?</span>
<span className="icon-[lucide--chevron-down] w-5 h-5 text-slate-500 transform transition-transform duration-300"></span>
</button>
<div className="hidden px-6 pb-6 text-sm font-light text-slate-400">
                            We specialize in European and Import vehicles including Mercedes-Benz, BMW, Porsche, Jaguar, Range Rover, Audi, Volvo, Lexus, and Infiniti. We also service Mini, Volkswagen, and select exotic models.
                        </div>
</div>

<div className="border border-white/10 rounded overflow-hidden bg-white/5">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white">Do you offer towing or shuttle services?</span>
<span className="icon-[lucide--chevron-down] w-5 h-5 text-slate-500 transform transition-transform duration-300"></span>
</button>
<div className="hidden px-6 pb-6 text-sm font-light text-slate-400">
                            Yes, we can coordinate towing for non-running vehicles. We also offer a complimentary local shuttle service to get you to work or home while your car is being serviced. Car wash/valet services are included with most major repairs.
                        </div>
</div>

<div className="border border-white/10 rounded overflow-hidden bg-white/5">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white">What are your hours of operation?</span>
<span className="icon-[lucide--chevron-down] w-5 h-5 text-slate-500 transform transition-transform duration-300"></span>
</button>
<div className="hidden px-6 pb-6 text-sm font-light text-slate-400">
                            We are open Monday through Friday from 7:30 a.m. to 6:00 p.m. We are closed on weekends to allow our staff to recharge.
                        </div>
</div>

<div className="border border-white/10 rounded overflow-hidden bg-white/5">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white">Do you provide warranties on your work?</span>
<span className="icon-[lucide--chevron-down] w-5 h-5 text-slate-500 transform transition-transform duration-300"></span>
</button>
<div className="hidden px-6 pb-6 text-sm font-light text-slate-400">
                            Absolutely. We stand behind our quality workmanship. Most repairs come with a 12-month or 12,000-mile warranty on parts and labor. Please ask your service advisor for specific details regarding your repair.
                        </div>
</div>

<div className="border border-white/10 rounded overflow-hidden bg-white/5">
<button className="w-full flex items-center justify-between p-6 text-left hover:bg-white/5 transition-colors focus:outline-none" onclick="toggleFaq(this)">
<span className="font-medium text-white">How do I book an appointment?</span>
<span className="icon-[lucide--chevron-down] w-5 h-5 text-slate-500 transform transition-transform duration-300"></span>
</button>
<div className="hidden px-6 pb-6 text-sm font-light text-slate-400">
                            You can call us directly at (972) 599-0999 during business hours, or use the "Book Appointment" form on our Contact page to request a time slot online.
                        </div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in py-20 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 lg:gap-24">

<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-2">Schedule Service</h2>
<p className="text-slate-400 font-light mb-8">Fill out the form below and we'll confirm your appointment shortly.</p>
<form className="space-y-6" id="appointmentForm" onsubmit="handleFormSubmit(event)">
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Name</label>
<input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Phone</label>
<input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="(972) 555-0123" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Email</label>
<input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Car Make</label>
<input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. BMW" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Model / Year</label>
<input className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="e.g. X5 2019" required="" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-medium text-slate-500 uppercase tracking-wider">Services Needed</label>
<textarea className="w-full bg-slate-900 border border-white/10 rounded px-4 py-3 text-white focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all placeholder:text-slate-600" placeholder="Describe the issue or service needed..." rows="4"></textarea>
</div>
<button className="w-full bg-blue-600 text-white font-medium py-3 rounded hover:bg-blue-500 transition-colors shadow-lg shadow-blue-900/20" type="submit">
                                Send Request
                            </button>
</form>

<div className="hidden mt-6 p-4 bg-emerald-900/20 border border-emerald-500/30 rounded text-emerald-400 text-sm" id="formSuccess">
<div className="flex items-center gap-2">
<span className="icon-[lucide--check-circle] w-5 h-5"></span>
<span className="font-medium">Request Sent!</span>
</div>
<p className="mt-1 ml-7 opacity-80">We'll contact you shortly to confirm your appointment.</p>
</div>
</div>

<div className="space-y-8">
<div className="p-8 rounded border border-white/10 bg-white/5 space-y-6">
<h3 className="text-lg font-medium text-white">Contact Info</h3>
<div className="flex items-start gap-4">
<span className="icon-[lucide--map-pin] w-5 h-5 text-blue-500 mt-1"></span>
<div>
<p className="text-white font-medium text-sm">Autobahn Service Center</p>
<p className="text-slate-400 text-sm font-light">123 Plano Parkway (Example)<br/>Plano, TX 75075</p>
</div>
</div>
<div className="flex items-start gap-4">
<span className="icon-[lucide--phone] w-5 h-5 text-blue-500 mt-1"></span>
<div>
<p className="text-white font-medium text-sm">Phone</p>
<a className="text-slate-400 text-sm font-light hover:text-white transition-colors" href="tel:9725990999">(972) 599-0999</a>
</div>
</div>
<div className="flex items-start gap-4">
<span className="icon-[lucide--mail] w-5 h-5 text-blue-500 mt-1"></span>
<div>
<p className="text-white font-medium text-sm">Email</p>
<a className="text-slate-400 text-sm font-light hover:text-white transition-colors" href="mailto:service@autobahnplano.com">service@autobahnplano.com</a>
</div>
</div>
</div>
<div className="p-8 rounded border border-white/10 bg-white/5 space-y-6">
<h3 className="text-lg font-medium text-white">Business Hours</h3>
<ul className="space-y-3 text-sm font-light text-slate-400">
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Monday - Friday</span>
<span className="text-white">7:30 AM – 6:00 PM</span>
</li>
<li className="flex justify-between border-b border-white/5 pb-2">
<span>Saturday</span>
<span className="text-slate-600">Closed</span>
</li>
<li className="flex justify-between">
<span>Sunday</span>
<span className="text-slate-600">Closed</span>
</li>
</ul>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 mt-20 bg-slate-950">
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2 space-y-4">
<div className="flex items-center gap-2">
<span className="icon-[lucide--gauge] w-5 h-5 text-blue-500"></span>
<span className="text-white font-medium tracking-tight">AUTOBAHN</span>
</div>
<p className="text-sm text-slate-500 font-light max-w-sm">
                        Plano's trusted independent service center for European imports. We combine passion with precision to keep your vehicle performing at its peak.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Navigation</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><button className="hover:text-blue-400 transition-colors" onclick="router('home')">Home</button></li>
<li><button className="hover:text-blue-400 transition-colors" onclick="router('services')">Services</button></li>
<li><button className="hover:text-blue-400 transition-colors" onclick="router('reviews')">Reviews</button></li>
<li><button className="hover:text-blue-400 transition-colors" onclick="router('contact')">Contact</button></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-slate-500 font-light">
<li><a className="hover:text-blue-400 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-blue-400 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-600">© 2023 Autobahn Service Center. All rights reserved.</p>
<div className="flex gap-4">
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="icon-[lucide--facebook] w-4 h-4"></span></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="icon-[lucide--instagram] w-4 h-4"></span></a>
<a className="text-slate-600 hover:text-white transition-colors" href="#"><span className="icon-[lucide--twitter] w-4 h-4"></span></a>
</div>
</div>
</div>
</footer>



    </>
  );
}
