import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide Icons
        lucide.createIcons();

        // Reveal Animation Observer
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('in-view');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-element').forEach((el) => {
            observer.observe(el);
        });

        // Before/After Slider Logic
        const slider = document.getElementById('slider-range');
        const beforeLayer = document.getElementById('before-layer');
        const sliderLine = document.getElementById('slider-line');

        if(slider && beforeLayer && sliderLine) {
            slider.addEventListener('input', (e) => {
                const value = e.target.value;
                beforeLayer.style.width = `${value}%`;
                sliderLine.style.left = `${value}%`;
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 top-0 left-0 border-b border-white/10 bg-zinc-950/80 backdrop-blur-md transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-layout-grid text-white w-6 h-6 stroke-[1.5]" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-white font-medium text-lg tracking-tight">T&amp;T Pergola</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-zinc-300 hover:text-white text-sm transition-colors" href="#about">About Us</a>
<a className="text-zinc-300 hover:text-white text-sm transition-colors" href="#services">Services</a>
<a className="text-zinc-300 hover:text-white text-sm transition-colors" href="#transformations">Our Work</a>
<a className="text-zinc-300 hover:text-white text-sm transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:block px-5 py-2.5 bg-white text-zinc-950 text-sm font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                Get Quote
            </a>

<button className="md:hidden text-white">
<svg className="lucide lucide-menu w-6 h-6 stroke-[1.5]" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</nav>

<header className="relative w-full h-[95vh] flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Luxury Pergola in Sydney" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6b238b05-d3fb-4842-b4e0-6a1fd47838ea_3840w.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-zinc-950/40"></div>
<div className="bg-gradient-to-t from-zinc-950 via-transparent to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl">
<p className="reveal-element text-zinc-200 text-sm font-medium tracking-wide mb-6 uppercase">Sydney's Premier Outdoor Builders</p>
<h1 className="reveal-element delay-100 text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1] mb-8">
                    Crafting Shade &amp; <br/>
                    Shelter for Life.
                </h1>
<div className="reveal-element delay-200 flex flex-wrap gap-4">
<a className="px-8 py-4 bg-white text-zinc-950 font-medium text-lg hover:bg-zinc-100 transition-colors" href="#contact">
                        Start Your Project
                    </a>
<a className="px-8 py-4 bg-zinc-900/50 backdrop-blur-sm border border-white/10 text-white font-medium text-lg hover:bg-zinc-900/70 transition-colors" href="#transformations">
                        View Gallery
                    </a>
</div>
</div>
<div className="absolute bottom-12 right-6 md:right-12 flex gap-12 reveal-element delay-300">
<div>
<span className="block text-3xl font-medium text-white tracking-tight">15+</span>
<span className="text-zinc-400 text-sm">Years in Sydney</span>
</div>
<div className="">
<span className="block text-3xl font-medium text-white tracking-tight">850+</span>
<span className="text-zinc-400 text-sm">Completed Projects</span>
</div>
</div>
</div>
</header>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-8">

<div className="md:col-span-4 reveal-element">
<span className="inline-block px-3 py-1 border border-zinc-200 text-xs font-medium uppercase tracking-wide text-zinc-500 mb-6">Who We Are</span>
<h2 className="text-4xl md:text-5xl font-medium text-zinc-900 tracking-tight leading-tight mb-6">
                        Expert craftsmanship for residential outdoor living spaces.
                    </h2>
</div>

<div className="hidden md:block md:col-span-3 md:col-start-6 reveal-element delay-100">
<div className="w-full h-full border-l border-zinc-100 pl-8 flex flex-col justify-end pb-8">
<svg className="w-24 h-24 stroke-zinc-300 fill-none stroke-1" viewbox="0 0 100 100">
<path d="M10,90 L10,50 L50,10 L90,50 L90,90"></path>
<path d="M10,50 L90,50"></path>
<path d="M30,90 L30,50"></path>
<path d="M70,90 L70,50"></path>
</svg>
</div>
</div>

<div className="md:col-span-4 reveal-element delay-200 space-y-12">
<div>
<svg className="lucide lucide-hammer w-6 h-6 text-zinc-900 stroke-[1.5] mb-4" data-lucide="hammer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 12-9.373 9.373a1 1 0 0 1-3.001-3L12 9"></path><path d="m18 15 4-4"></path><path d="m21.5 11.5-1.914-1.914A2 2 0 0 1 19 8.172v-.344a2 2 0 0 0-.586-1.414l-1.657-1.657A6 6 0 0 0 12.516 3H9l1.243 1.243A6 6 0 0 1 12 8.485V10l2 2h1.172a2 2 0 0 1 1.414.586L18.5 14.5"></path></svg>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Our History</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                            Founded in Sydney, T&amp;T Pergola began with a passion for transforming backyards into functional living areas.
                        </p>
</div>
<div>
<svg className="lucide lucide-award w-6 h-6 text-zinc-900 stroke-[1.5] mb-4" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<h3 className="text-xl font-medium text-zinc-900 mb-3">Quality Assurance</h3>
<p className="text-lg text-zinc-500 leading-relaxed">
                            We use only premium Australian timber and high-grade aluminum to withstand the Sydney climate.
                        </p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-950 pt-24 pb-24" id="transformations">
<div className="max-w-7xl mx-auto px-6 mb-16 flex justify-between items-end reveal-element">
<div>
<span className="inline-block px-3 py-1 border border-zinc-800 text-xs font-medium uppercase tracking-wide text-zinc-400 mb-6">Selected Transformations</span>
<h2 className="text-4xl font-medium tracking-tight">Witness the Difference.</h2>
</div>
<div className="hidden md:block text-zinc-500 text-lg max-w-md text-right">
                Drag the slider to see how we transform simple yards into stunning outdoor retreats.
            </div>
</div>
<div className="max-w-7xl mx-auto px-6 reveal-element delay-200">

<div className="relative w-full h-[60vh] md:h-[700px] bg-zinc-900 overflow-hidden group select-none">

<div className="absolute inset-0">
<img alt="After Renovation" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<span className="absolute top-8 right-8 bg-zinc-950/80 px-4 py-2 text-sm font-medium text-white backdrop-blur-md border border-white/10">AFTER</span>
</div>

<div className="absolute inset-0 w-[50%] overflow-hidden border-r border-white/50" id="before-layer">

<div className="w-[100vw] max-w-7xl h-full relative">
<img alt="Before Renovation" className="absolute top-0 left-0 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
</div>
<span className="absolute top-8 left-8 bg-white/90 px-4 py-2 text-sm font-medium text-zinc-950 backdrop-blur-md">BEFORE</span>
</div>

<input className="absolute inset-0 w-full h-full opacity-0 cursor-ew-resize z-30" id="slider-range" max="100" min="0" type="range" value="50"/>

<div className="absolute inset-y-0 left-[50%] w-1 bg-white z-20 pointer-events-none flex items-center justify-center shadow-[0_0_20px_rgba(0,0,0,0.5)]" id="slider-line">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center shadow-lg">
<svg className="lucide lucide-arrow-left-right w-5 h-5 text-zinc-900 stroke-[2]" data-lucide="arrow-left-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 3 4 7l4 4"></path><path d="M4 7h16"></path><path d="m16 21 4-4-4-4"></path><path d="M20 17H4"></path></svg>
</div>
</div>
</div>
<div className="mt-8 flex justify-between items-center border-t border-zinc-800 pt-6">
<div className="">
<h3 className="text-xl font-medium">Bondi Junction Residence</h3>
<p className="text-zinc-400 mt-1 text-lg">Timber Decking &amp; Insulated Flyover Roof</p>
</div>
<button className="flex items-center gap-2 text-sm hover:text-zinc-300 transition-colors">
                    View More Projects <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="reveal-element">
<span className="inline-block px-3 py-1 border border-zinc-200 text-xs font-medium uppercase tracking-wide text-zinc-500 mb-6">Our Commitment</span>
<h2 className="text-4xl font-medium tracking-tight mb-8">Why T&amp;T Pergola?</h2>
<p className="text-lg text-zinc-500 mb-10 leading-relaxed">
                        We don't just build; we engineer lifestyle improvements. From the initial council approval to the final coat of varnish, we handle every detail with precision.
                    </p>
<div className="grid grid-cols-2 gap-y-6 gap-x-8 mb-12">
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-zinc-700">Council Approval Handling</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-zinc-700">On-Time Completion</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-zinc-700">Licensed &amp; Insured</span>
</div>
<div className="flex items-center gap-3">
<div className="w-5 h-5 rounded-full bg-zinc-100 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3 text-zinc-900" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-base text-zinc-700">Premium Materials</span>
</div>
</div>
<div className="grid grid-cols-2 gap-12 border-t border-zinc-100 pt-8">
<div className="">
<span className="block text-4xl font-medium text-zinc-900 tracking-tight">100%</span>
<span className="text-xs uppercase tracking-wider text-zinc-400 mt-2 block">Client Satisfaction</span>
</div>
<div>
<span className="block text-4xl font-medium text-zinc-900 tracking-tight">10yr</span>
<span className="text-xs uppercase tracking-wider text-zinc-400 mt-2 block">Structural Warranty</span>
</div>
</div>
</div>
<div className="relative h-[600px] reveal-element delay-200">
<img alt="Carpenter" className="filter w-full h-full brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/470bf003-74cb-4123-a23a-8c53ab84c19a_1600w.jpg"/>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50 border-y border-zinc-200" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-5 reveal-element">
<span className="inline-block px-3 py-1 border border-zinc-300 text-xs font-medium uppercase tracking-wide text-zinc-500 mb-6">Capabilities</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-zinc-900">Comprehensive <br/>Outdoor Services</h2>
<p className="text-lg text-zinc-500 mb-8 leading-relaxed">
                        At T&amp;T Pergola, we offer a wide range of construction services tailored to the Australian lifestyle. From modern roofing to traditional timber decks.
                    </p>
<a className="inline-flex items-center gap-2 text-zinc-900 font-medium text-lg hover:gap-4 transition-all" href="#contact">
                        Get a Free Quote <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="md:col-span-7 space-y-0 reveal-element delay-200">

<div className="group flex items-start gap-8 py-8 border-b border-zinc-200 hover:bg-white transition-colors px-4 -mx-4">
<span className="text-sm font-mono text-zinc-400 mt-1">01</span>
<div className="">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Custom Pergolas</h3>
<p className="text-lg text-zinc-500 max-w-md">Tailored designs including flat, pitched, and gabled roofs using timber or aluminum.</p>
</div>
</div>

<div className="group flex items-start gap-8 py-8 border-b border-zinc-200 hover:bg-white transition-colors px-4 -mx-4">
<span className="text-sm font-mono text-zinc-400 mt-1">02</span>
<div className="">
<h3 className="text-xl font-medium text-zinc-900 mb-2">Decks &amp; Patios</h3>
<p className="text-lg text-zinc-500 max-w-md">Hardwood, composite, and treated pine decking solutions built to last.</p>
</div>
</div>

<div className="group flex items-start gap-8 py-8 border-b border-zinc-200 hover:bg-white transition-colors px-4 -mx-4">
<span className="text-sm font-mono text-zinc-400 mt-1">03</span>
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Carports &amp; Awnings</h3>
<p className="text-lg text-zinc-500 max-w-md">Protect your vehicles and windows with stylish, durable cantilever or post-supported structures.</p>
</div>
</div>

<div className="group flex items-start gap-8 py-8 border-b border-zinc-200 hover:bg-white transition-colors px-4 -mx-4">
<span className="text-sm font-mono text-zinc-400 mt-1">04</span>
<div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Roofing Solutions</h3>
<p className="text-lg text-zinc-500 max-w-md">Polycarbonate, insulated panels, and Colorbond roofing for ultimate weather protection.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white border-t border-white/10">
<div className="max-w-4xl mx-auto px-6 text-center reveal-element">
<div className="flex justify-center -space-x-3 mb-8">
<img alt="User" className="w-12 h-12 rounded-full border-2 border-zinc-950" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<img alt="User" className="w-12 h-12 rounded-full border-2 border-zinc-950" src="https://randomuser.me/api/portraits/women/44.jpg"/>
<div className="w-12 h-12 rounded-full bg-white text-zinc-950 flex items-center justify-center font-medium text-xs border-2 border-zinc-950">+99</div>
</div>
<p className="text-xs font-medium uppercase tracking-widest text-zinc-400 mb-6">Trusted by Sydney Homeowners</p>
<blockquote className="text-2xl md:text-3xl font-medium leading-relaxed mb-8">
                "T&amp;T Pergola exceeded our expectations. The team transformed our unused backyard into a stunning entertainment area. The attention to detail on the decking and roof pitch was impeccable."
            </blockquote>
</div>
</section>



<section className="bg-zinc-50 py-24" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-16">

<div className="md:col-span-7 reveal-element">
<div className="bg-white p-8 md:p-12 shadow-sm border border-zinc-100">
<span className="inline-block px-3 py-1 border border-zinc-200 text-xs font-medium uppercase tracking-wide text-zinc-500 mb-6">Let's Work Together</span>
<h2 className="text-3xl font-medium mb-2 tracking-tight">Ready to Build Your Dream?</h2>
<p className="text-lg text-zinc-500 mb-8">Fill out the form below for a free consultation and quote.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">First Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" placeholder="John" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Last Name</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" placeholder="Doe" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Email Address</label>
<input className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" placeholder="john@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Interested In</label>
<select className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm">
<option>Pergola</option>
<option>Decking</option>
<option>Carport</option>
<option>Awning</option>
<option>Roofing</option>
</select>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-zinc-700">Message</label>
<textarea className="w-full px-4 py-3 bg-zinc-50 border border-zinc-200 focus:outline-none focus:ring-2 focus:ring-zinc-900 focus:bg-white transition-all text-sm" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full md:w-auto px-8 py-3 bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-colors flex items-center justify-center gap-2" type="submit">
                                Send Message <svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
</button>
</form>
</div>
</div>

<div className="md:col-span-5 reveal-element delay-200 pt-8">
<span className="inline-block px-3 py-1 border border-zinc-300 text-xs font-medium uppercase tracking-wide text-zinc-500 mb-6">FAQ</span>
<h2 className="text-3xl font-medium mb-8 tracking-tight">Frequently Asked Questions</h2>
<div className="space-y-6">
<div className="pb-6 border-b border-zinc-200">
<h4 className="text-lg font-medium mb-2">Do you handle council approvals?</h4>
<p className="text-lg text-zinc-500">Yes, we handle the entire drafting and approval process with your local council to ensure compliance.</p>
</div>
<div className="pb-6 border-b border-zinc-200">
<h4 className="text-lg font-medium mb-2">How long does a project take?</h4>
<p className="text-lg text-zinc-500">Typical pergolas take 1-2 weeks for installation, depending on complexity and weather.</p>
</div>
<div className="pb-6 border-b border-zinc-200">
<h4 className="text-lg font-medium mb-2">What materials do you use?</h4>
<p className="text-lg text-zinc-500">We work with Australian hardwoods, treated pine, aluminium, and insulated roofing panels.</p>
</div>
<div className="mt-8">
<p className="text-lg font-medium text-zinc-900">Have different questions?</p>
<p className="text-lg text-zinc-500 mt-1 mb-4">Our team will answer all your questions.</p>
<p className="text-lg text-zinc-900">Call us: +61 (02) 1234 5678</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-900 text-white border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 relative overflow-hidden">
<div className="md:w-1/2 relative z-10 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-6">Looking to expand yourliving space?</h2>
<a className="inline-flex items-center gap-2 bg-white text-zinc-950 px-6 py-3 font-medium hover:bg-zinc-200 transition-colors" href="#contact">
                    Get a Quote <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="absolute right-0 bottom-0 opacity-10">
<svg fill="none" height="200" stroke="currentColor" strokeWidth="1" viewbox="0 0 300 200" width="300">
<path d="M50,200 L50,100 L150,50 L250,100 L250,200"></path>
<path d="M70,200 L70,120 M90,200 L90,120 M110,200 L110,120"></path>
<rect height="80" width="80" x="150" y="120"></rect>
</svg>
</div>
</div>
</section>

<footer className="bg-zinc-950 text-zinc-400 py-16 text-sm">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<svg className="lucide lucide-layout-grid text-white w-5 h-5" data-lucide="layout-grid" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="3" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="3"></rect><rect height="7" rx="1" width="7" x="14" y="14"></rect><rect height="7" rx="1" width="7" x="3" y="14"></rect></svg>
<span className="text-white font-medium text-base tracking-tight">T&amp;T Pergola</span>
</div>
<p className="mb-6 leading-relaxed">
                    Expert Construction Services for Residential, Commercial, and Industrial Projects in Sydney.
                </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="hover:text-white transition-colors" href="#"><svg className="lucide lucide-linkedin w-5 h-5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Contact Info</h4>
<p className="mb-2">123 George Street,Sydney, NSW 2000</p>
<p className="mb-2 text-white">hello@tandtpergola.com.au</p>
<p className="text-white font-medium">(02) 1234 5678</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Pages</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#transformations">Our Work</a></li>
<li><a className="hover:text-white transition-colors" href="#contact">Get Quote</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a></li>
</ul>
<p className="mt-8 text-xs text-zinc-600">© 2024 T&amp;T Pergola. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
