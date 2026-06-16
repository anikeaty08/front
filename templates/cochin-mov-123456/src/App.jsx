import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            // 1. Custom Cursor Logic
            const cursorDot = document.getElementById('cursor-dot');
            const cursorOutline = document.getElementById('cursor-outline');
            
            // Only enable custom cursor on non-touch devices
            if (window.matchMedia("(pointer: fine)").matches) {
                window.addEventListener('mousemove', (e) => {
                    const posX = e.clientX;
                    const posY = e.clientY;
                    
                    cursorDot.style.left = `${posX}px`;
                    cursorDot.style.top = `${posY}px`;
                    
                    // Add slight delay to outline for smooth trailing effect
                    setTimeout(() => {
                        cursorOutline.style.left = `${posX}px`;
                        cursorOutline.style.top = `${posY}px`;
                    }, 50);
                });
            } else {
                cursorDot.style.display = 'none';
                cursorOutline.style.display = 'none';
                document.body.style.cursor = 'auto';
            }

            // 2. Magnetic Button Effect
            const magneticElements = document.querySelectorAll('.magnetic');
            magneticElements.forEach(elem => {
                elem.addEventListener('mousemove', (e) => {
                    const rect = elem.getBoundingClientRect();
                    const x = e.clientX - rect.left - rect.width / 2;
                    const y = e.clientY - rect.top - rect.height / 2;
                    
                    // Subtly move the button towards the cursor
                    elem.style.transform = `translate(${x * 0.2}px, ${y * 0.2}px)`;
                });

                elem.addEventListener('mouseleave', () => {
                    // Reset position smoothly
                    elem.style.transform = 'translate(0px, 0px)';
                });
            });

            // 3. Scroll Reveal Animation using Intersection Observer
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: unobserve after revealing once
                        // observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });

            // 4. Navbar blur on scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm');
                    navbar.classList.replace('bg-white/40', 'bg-white/80');
                } else {
                    navbar.classList.remove('shadow-sm');
                    navbar.classList.replace('bg-white/80', 'bg-white/40');
                }
            });

            // 5. Horizontal Scroll Drag (Reviews)
            const slider = document.querySelector('.snap-x');
            let isDown = false;
            let startX;
            let scrollLeft;

            slider.addEventListener('mousedown', (e) => {
                isDown = true;
                slider.classList.add('active:cursor-grabbing');
                startX = e.pageX - slider.offsetLeft;
                scrollLeft = slider.scrollLeft;
            });
            slider.addEventListener('mouseleave', () => {
                isDown = false;
                slider.classList.remove('active:cursor-grabbing');
            });
            slider.addEventListener('mouseup', () => {
                isDown = false;
                slider.classList.remove('active:cursor-grabbing');
            });
            slider.addEventListener('mousemove', (e) => {
                if (!isDown) return;
                e.preventDefault();
                const x = e.pageX - slider.offsetLeft;
                const walk = (x - startX) * 2; // Scroll speed
                slider.scrollLeft = scrollLeft - walk;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div id="cursor-dot"></div>
<div id="cursor-outline"></div>

<nav className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-white/40 border-b border-slate-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-medium tracking-tighter uppercase text-slate-900 flex items-center gap-2 hover-target" href="#">
<iconify-icon className="text-2xl text-blue-600" icon="solar:box-minimalistic-linear"></iconify-icon>
                M V X
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors relative group hover-target" href="#services">Services
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-slate-900 transition-colors relative group hover-target" href="#about">Company
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="hover:text-slate-900 transition-colors relative group hover-target" href="#gallery">Network
                    <span className="absolute -bottom-1 left-0 w-0 h-[1px] bg-slate-900 transition-all duration-300 group-hover:w-full"></span>
</a>
<a className="px-5 py-2.5 bg-slate-900 text-white rounded-full hover:bg-slate-800 transition-colors magnetic hover-target tracking-tight" href="#quote">Get Quote</a>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 w-full h-full overflow-hidden z-0 pointer-events-none">
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-blue-400/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-indigo-300/20 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-32 left-1/2 w-96 h-96 bg-slate-300/30 rounded-full mix-blend-multiply filter blur-[80px] opacity-70 animate-blob animation-delay-4000"></div>

<svg className="absolute top-1/2 left-0 w-full h-full -translate-y-1/2 opacity-20" fill="none" viewbox="0 0 1440 400" xmlns="http://www.w3.org/2000/svg">
<path className="animate-route" d="M-100 200 C 200 200, 300 100, 500 150 C 700 200, 800 300, 1000 250 C 1200 200, 1300 150, 1500 200" stroke="#2563eb" stroke-dasharray="10 10" strokeLinecap="round" strokeWidth="2"></path>
<circle className="animate-float" cx="500" cy="150" fill="#2563eb" r="4"></circle>
<circle className="animate-float" cx="1000" cy="250" fill="#2563eb" r="4" style={{animationDelay: '1s'}}></circle>
</svg>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-slate-200 bg-white/50 backdrop-blur-sm text-xs font-medium text-slate-600 mb-8 reveal hover-target">
<span className="w-2 h-2 rounded-full bg-blue-500 animate-pulse"></span>
                Next-Gen Relocation Logistics
            </div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter text-slate-900 mb-6 leading-[1.1]">
<span className="block overflow-hidden"><span className="block reveal">Fluid motion.</span></span>
<span className="block overflow-hidden"><span className="block reveal reveal-delay-1 text-slate-400">Zero friction.</span></span>
</h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 reveal reveal-delay-2 font-normal leading-relaxed">
                Experience seamless transitions across cities and borders. We engineer every move with precision, leveraging advanced routing and premium care.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 reveal reveal-delay-3">
<a className="px-8 py-4 bg-slate-900 text-white rounded-full font-medium tracking-tight hover:bg-slate-800 transition-all shadow-lg shadow-slate-900/20 magnetic hover-target flex items-center gap-2" href="#quote">
                    Start Your Move <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="px-8 py-4 bg-white text-slate-900 rounded-full font-medium tracking-tight border border-slate-200 hover:border-slate-300 transition-colors hover-target" href="#services">
                    Explore Services
                </a>
</div>
</div>

<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50 reveal reveal-delay-3">
<span className="text-xs tracking-tighter font-medium uppercase">Scroll</span>
<div className="w-[1px] h-12 bg-gradient-to-b from-slate-900 to-transparent"></div>
</div>
</section>

<section className="py-24 relative overflow-hidden" id="quote">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNDAiIGhlaWdodD0iNDAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMCwwLDAsMC4wNSkiLz48L3N2Zz4=')] z-0"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 reveal">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Calculate Your Route</h2>
<p className="text-sm text-slate-500">Intelligent logistics estimation in seconds.</p>
</div>

<form className="bg-white/60 backdrop-blur-xl border border-white/40 shadow-[0_8px_30px_rgb(0,0,0,0.04)] rounded-[2rem] p-8 md:p-12 hover-target group">

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="relative">
<input className="peer w-full bg-transparent border-b border-slate-200 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent" id="name" placeholder="Name" type="text"/>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm" htmlFor="name">Full Name</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-slate-200 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent" id="email" placeholder="Email" type="email"/>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm" htmlFor="email">Email Address</label>
</div>
<div className="relative">
<input className="peer w-full bg-transparent border-b border-slate-200 py-3 text-sm text-slate-900 focus:outline-none focus:border-blue-500 transition-colors placeholder-transparent" id="phone" placeholder="Phone" type="tel"/>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-500 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm" htmlFor="phone">Phone Number</label>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-12 mb-10 relative">

<div className="hidden md:block absolute top-6 left-[45%] right-[45%] border-t border-dashed border-slate-300 z-0"></div>

<div className="relative z-10 bg-white/50 rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-xl text-slate-400" icon="solar:map-point-linear"></iconify-icon>
<h3 className="text-sm font-medium tracking-tight">Origin</h3>
</div>
<div className="space-y-4" id="origin-fields">
<input className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Address Line 1" type="text"/>
<input className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" placeholder="City, Postcode" type="text"/>
</div>
<button className="mt-4 flex items-center gap-1 text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors hover-target group" type="button">
<iconify-icon className="text-sm group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon> Add detail
                        </button>
</div>

<div className="relative z-10 bg-white/50 rounded-2xl p-6 border border-slate-100 shadow-sm transition-all hover:shadow-md">
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-xl text-blue-500" icon="solar:routing-2-linear"></iconify-icon>
<h3 className="text-sm font-medium tracking-tight">Destination</h3>
</div>
<div className="space-y-4" id="dest-fields">
<input className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" placeholder="Address Line 1" type="text"/>
<input className="w-full bg-slate-50 border border-slate-100 rounded-lg px-4 py-2.5 text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 transition-all" placeholder="City, Postcode" type="text"/>
</div>
<button className="mt-4 flex items-center gap-1 text-xs text-blue-600 font-medium hover:text-blue-700 transition-colors hover-target group" type="button">
<iconify-icon className="text-sm group-hover:rotate-90 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon> Add detail
                        </button>
</div>
</div>

<div className="border-t border-slate-100 pt-8 grid grid-cols-1 md:grid-cols-2 gap-8 mb-10">

<div className="space-y-4">
<h3 className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-4">Access Requirements</h3>
<label className="flex items-center justify-between cursor-pointer group hover-target">
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">Flat floor / Elevator access</span>
<div className="relative">
<input className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</div>
</label>
<label className="flex items-center justify-between cursor-pointer group hover-target">
<span className="text-sm text-slate-700 group-hover:text-slate-900 transition-colors">5.5m+ Parking Space Available</span>
<div className="relative">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-10 h-5 bg-slate-200 rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-slate-300 after:border after:rounded-full after:h-4 after:w-4 after:transition-all peer-checked:bg-slate-900"></div>
</div>
</label>
</div>

<div>
<h3 className="text-xs font-medium tracking-tight text-slate-500 uppercase mb-4">Estimated Volume</h3>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer hover-target">
<input checked="" className="peer sr-only" name="volume" type="radio"/>
<div className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all">Studio / 1 Bed</div>
</label>
<label className="cursor-pointer hover-target">
<input className="peer sr-only" name="volume" type="radio"/>
<div className="px-4 py-3 rounded-xl border border-slate-200 text-sm text-center text-slate-500 peer-checked:border-slate-900 peer-checked:bg-slate-900 peer-checked:text-white transition-all">2-3 Bedrooms</div>
</label>
</div>
</div>
</div>

<div className="flex justify-center">
<button className="group relative px-8 py-4 bg-blue-600 text-white rounded-full font-medium tracking-tight overflow-hidden hover-target magnetic shadow-lg shadow-blue-500/20" type="submit">
<span className="relative z-10 flex items-center gap-2">
                            Generate Estimate
                            <iconify-icon className="text-lg group-hover:rotate-12 transition-transform" icon="solar:calculator-linear"></iconify-icon>
</span>

<div className="absolute inset-0 bg-blue-700 translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-in-out z-0"></div>
</button>
</div>
</form>
</div>
</section>

<section className="py-24 bg-slate-900 text-slate-50 relative overflow-hidden" id="about">

<div className="absolute inset-0 opacity-10 pointer-events-none">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="grid" patternunits="userSpaceOnUse" width="40">
<path d="M 40 0 L 0 0 0 40" fill="none" stroke="white" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect fill="url(#grid)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter mb-6">Redefining the <br/><span className="text-blue-400">logistics of life.</span></h2>
<p className="text-slate-400 text-sm md:text-base leading-relaxed mb-8 font-normal">
                        We don't just move boxes; we transition lives. Founded on principles of precision engineering and premium service, MVX utilizes advanced routing algorithms and a specialized fleet to ensure your assets arrive untouched, on time, every time.
                    </p>

<div className="grid grid-cols-3 gap-6 pt-8 border-t border-slate-800">
<div>
<div className="text-3xl font-medium tracking-tighter mb-1">12<span className="text-blue-500">+</span></div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Years Active</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tighter mb-1">45<span className="text-blue-500">k</span></div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Moves Done</div>
</div>
<div>
<div className="text-3xl font-medium tracking-tighter mb-1">99<span className="text-blue-500">%</span></div>
<div className="text-xs text-slate-500 uppercase tracking-wide">Safe Rate</div>
</div>
</div>
</div>

<div className="relative h-[500px] rounded-3xl overflow-hidden reveal reveal-delay-2 group hover-target">
<div className="absolute inset-0 bg-slate-800 transition-transform duration-700 group-hover:scale-105">

<div className="w-full h-full bg-gradient-to-tr from-slate-900 to-blue-900/40 relative">

<div className="absolute top-1/4 left-1/4 w-32 h-32 border border-white/10 rounded-full animate-float"></div>
<div className="absolute bottom-1/4 right-1/4 w-48 h-48 border border-blue-400/20 rounded-full animate-float animation-delay-2000"></div>
<iconify-icon className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-8xl text-white/10" icon="solar:box-linear"></iconify-icon>
</div>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/10 backdrop-blur-md border border-white/10 p-6 rounded-2xl transform translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center">
<iconify-icon className="text-white text-xl" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium">Fully Insured Transit</div>
<div className="text-xs text-slate-300">Premium coverage standard.</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#fafafa]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 reveal">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Core Capabilities</h2>
<p className="text-sm text-slate-500 max-w-md">Tailored logistics solutions designed for minimal disruption and maximum efficiency.</p>
</div>
<a className="mt-6 md:mt-0 text-sm font-medium text-blue-600 hover:text-blue-700 flex items-center gap-1 hover-target group" href="#">
                    View full catalog <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" style={{perspective: '1000px'}}>

<div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:[transform:rotateX(2deg)_rotateY(-2deg)] hover-target reveal">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:home-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Residential Relocation</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">White-glove service for your home. We handle fragile items, complex furniture assembly, and full packing.</p>
<div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-blue-600" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none"></div>
</div>

<div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:[transform:rotateX(2deg)_rotateY(2deg)] hover-target reveal reveal-delay-1">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors" icon="solar:buildings-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">Corporate Migration</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">Zero-downtime office moves. IT infrastructure handling, secure document transport, and ergonomic setup.</p>
<div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-blue-600" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none"></div>
</div>

<div className="group relative bg-white p-8 rounded-3xl border border-slate-100 shadow-sm hover:shadow-2xl transition-all duration-500 ease-out hover:-translate-y-2 hover:[transform:rotateX(-2deg)_rotateY(-2deg)] hover-target reveal reveal-delay-2">
<div className="w-14 h-14 rounded-2xl bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 group-hover:bg-blue-50 transition-colors">
<iconify-icon className="text-2xl text-slate-700 group-hover:text-blue-600 transition-colors flex items-center justify-center group-hover:animate-[spin_4s_linear_infinite]" icon="solar:global-linear"></iconify-icon>
</div>
<h3 className="text-xl font-medium tracking-tight mb-3">International Transit</h3>
<p className="text-sm text-slate-500 font-normal leading-relaxed mb-6">Cross-border logistics made simple. Customs clearance, freight forwarding, and multi-modal transport.</p>
<div className="absolute bottom-8 right-8 opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">
<iconify-icon className="text-xl text-blue-600" icon="solar:arrow-right-linear"></iconify-icon>
</div>
<div className="absolute inset-0 rounded-3xl border-2 border-transparent group-hover:border-blue-500/10 transition-colors pointer-events-none"></div>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden" id="gallery">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Operational Excellence</h2>
<p className="text-sm text-slate-500">A glimpse into our daily logistics network.</p>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6 reveal reveal-delay-1">

<div className="break-inside-avoid relative rounded-2xl overflow-hidden group hover-target cursor-none">
<div className="aspect-[4/3] bg-slate-200 w-full transition-transform duration-700 group-hover:scale-105 relative">

<div className="absolute inset-0 bg-gradient-to-br from-slate-200 to-slate-300 flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400 opacity-50" icon="solar:box-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
<p className="text-xs font-medium uppercase tracking-wider mb-1">Packaging</p>
<p className="text-sm">Custom crating solutions</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden group hover-target cursor-none">
<div className="aspect-[3/4] bg-slate-200 w-full transition-transform duration-700 group-hover:scale-105 relative">
<div className="absolute inset-0 bg-gradient-to-tr from-slate-300 to-slate-100 flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400 opacity-50" icon="solar:bus-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
<p className="text-xs font-medium uppercase tracking-wider mb-1">Fleet</p>
<p className="text-sm">Modern low-emission vehicles</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden group hover-target cursor-none">
<div className="aspect-square bg-slate-200 w-full transition-transform duration-700 group-hover:scale-105 relative">
<div className="absolute inset-0 bg-gradient-to-bl from-blue-100 to-slate-200 flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400 opacity-50" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
<p className="text-xs font-medium uppercase tracking-wider mb-1">Team</p>
<p className="text-sm">Certified handling specialists</p>
</div>
</div>
</div>

<div className="break-inside-avoid relative rounded-2xl overflow-hidden group hover-target cursor-none">
<div className="aspect-[16/9] bg-slate-200 w-full transition-transform duration-700 group-hover:scale-105 relative">
<div className="absolute inset-0 bg-gradient-to-t from-slate-200 to-slate-50 flex items-center justify-center">
<iconify-icon className="text-4xl text-slate-400 opacity-50" icon="solar:ruler-cross-pen-linear"></iconify-icon>
</div>
</div>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/40 transition-colors duration-300 flex flex-col justify-end p-6">
<div className="translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-300 text-white">
<p className="text-xs font-medium uppercase tracking-wider mb-1">Planning</p>
<p className="text-sm">Precision spatial mapping</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-slate-100 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 reveal">
<h2 className="text-3xl font-medium tracking-tight text-slate-900">Client Feedback</h2>
</div>
<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-12 no-scrollbar w-full max-w-7xl mx-auto cursor-grab active:cursor-grabbing hover-target">

<div className="snap-center shrink-0 w-[320px] sm:w-[400px] bg-[#fafafa] border border-slate-100 rounded-3xl p-8 reveal">
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8">"Flawless execution. Moving a 50-person office across the city seemed daunting, but the MVX team handled the IT infrastructure and furniture with zero downtime."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">JD</div>
<div>
<div className="text-sm font-medium text-slate-900">James D.</div>
<div className="text-xs text-slate-500">Operations Director</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[320px] sm:w-[400px] bg-[#fafafa] border border-slate-100 rounded-3xl p-8 reveal reveal-delay-1">
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8">"The white-glove service is exactly as advertised. They custom-crated my artwork and the entire team was professional, quiet, and extremely efficient."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">SA</div>
<div>
<div className="text-sm font-medium text-slate-900">Sarah A.</div>
<div className="text-xs text-slate-500">Residential Client</div>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[320px] sm:w-[400px] bg-[#fafafa] border border-slate-100 rounded-3xl p-8 reveal reveal-delay-2">
<div className="flex items-center gap-1 mb-6">
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-blue-500 fill-blue-500" icon="solar:star-fall-linear"></iconify-icon>
<iconify-icon className="text-lg text-slate-300" icon="solar:star-fall-linear"></iconify-icon>
</div>
<p className="text-sm text-slate-600 leading-relaxed mb-8">"Great communication throughout the international transit process. Customs clearance was handled smoothly. Highly recommend for complex moves."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium">MR</div>
<div>
<div className="text-sm font-medium text-slate-900">Marcus R.</div>
<div className="text-xs text-slate-500">Expat</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-24 pb-10 rounded-t-[3rem] mt-[-2rem] relative z-20 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-blue-900/10 to-transparent pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20">

<div className="reveal">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter mb-6">Ready to initiate<br/>your move?</h2>
<p className="text-slate-400 text-sm mb-10 max-w-sm">Reach out to our logistics planners. We respond within 2 hours during business operations.</p>
<div className="space-y-4">
<a className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors hover-target group" href="mailto:hello@mvx.co">
<div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-400 transition-colors">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
                            operations@mvx.logistics
                        </a>
<a className="flex items-center gap-4 text-lg hover:text-blue-400 transition-colors hover-target group" href="tel:+123456789">
<div className="w-12 h-12 rounded-full border border-slate-700 flex items-center justify-center group-hover:border-blue-400 transition-colors">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
                            +1 (800) 555-0199
                        </a>
</div>
</div>

<div className="bg-slate-800/50 p-8 rounded-3xl border border-slate-700/50 reveal reveal-delay-1 hover-target backdrop-blur-sm">
<form className="space-y-6">
<div className="relative group">
<input className="w-full bg-transparent border-b border-slate-600 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors peer" placeholder=" " type="text"/>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">Name</label>
</div>
<div className="relative group">
<input className="w-full bg-transparent border-b border-slate-600 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors peer" placeholder=" " type="email"/>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">Email</label>
</div>
<div className="relative group">
<textarea className="w-full bg-transparent border-b border-slate-600 py-3 text-sm text-white focus:outline-none focus:border-blue-400 transition-colors peer resize-none" placeholder=" " rows="3"></textarea>
<label className="absolute left-0 top-3 text-sm text-slate-400 transition-all peer-focus:-top-3 peer-focus:text-xs peer-focus:text-blue-400 peer-placeholder-shown:top-3 peer-placeholder-shown:text-sm cursor-text">Message details</label>
</div>
<button className="w-full py-4 bg-white text-slate-900 rounded-xl font-medium text-sm hover:bg-blue-50 transition-colors hover-target flex justify-center items-center gap-2 group">
                            Send Enquiry <iconify-icon className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>

<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-slate-500 reveal">
<div className="font-medium tracking-tighter uppercase text-slate-300 text-base flex items-center gap-2">
<iconify-icon className="text-xl" icon="solar:box-minimalistic-linear"></iconify-icon> M V X
                </div>
<div className="flex gap-6">
<a className="hover:text-white transition-colors hover-target" href="#">Privacy</a>
<a className="hover:text-white transition-colors hover-target" href="#">Terms</a>
<a className="hover:text-white transition-colors hover-target" href="#">Legal</a>
</div>
<p>© 2024 MVX Logistics. All rights reserved.</p>
</div>
</div>
</footer>



    </>
  );
}
