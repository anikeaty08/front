import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function showPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.remove('active');
            });
            
            // Show requested section
            document.getElementById(pageId).classList.add('active');
            
            // Update Nav state
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('active');
                if(link.innerText.toLowerCase() === pageId) {
                    link.classList.add('active');
                }
            });

            // Scroll to top
            window.scrollTo(0, 0);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-[100] glass border-b border-slate-100">
<div className="max-w-[1440px] mx-auto px-6 md:px-12 h-20 flex items-center justify-between">
<div className="text-xl font-semibold tracking-tighter uppercase flex items-center gap-2">
<span className="text-sky-700">STHA</span>POTI
            </div>
<div className="hidden lg:flex items-center gap-8 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
<button className="nav-link active py-2 hover:text-sky-700 transition-all" onclick="showPage('home')">Home</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('about')">About</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('services')">Services</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('projects')">Projects</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('gallery')">Gallery</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('blog')">Blog</button>
<button className="nav-link py-2 hover:text-sky-700 transition-all" onclick="showPage('contact')">Contact</button>
</div>
<button className="bg-sky-700 text-white px-6 py-2.5 rounded-full text-[10px] font-semibold uppercase tracking-widest hover:bg-sky-800 transition-all hidden md:block">
                Get Your Design
            </button>
<button className="lg:hidden text-2xl">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</nav>

<main className="page-section active" id="home">

<section className="relative min-h-screen flex items-center pt-20 overflow-hidden">
<div className="absolute inset-0 -z-10">
<img alt="Modern Architecture" className="w-full h-full object-cover grayscale-[0.2]" src="https://images.unsplash.com/photo-1600607687940-4e524cb35297?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-gradient-to-r from-white via-white/80 to-transparent"></div>
</div>
<div className="max-w-[1440px] mx-auto px-6 md:px-12 w-full">
<div className="max-w-2xl space-y-8">
<span className="text-xs font-semibold text-sky-700 tracking-widest uppercase">Award Winning Studio</span>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tight leading-[0.9] text-slate-900">
                        Crafting Space, <br/><span className="text-sky-700 serif italic font-light">Shaping Light.</span>
</h1>
<p className="text-lg text-slate-600 font-light max-w-lg leading-relaxed">
                        Redefining the Bangladeshi landscape through sustainable, modern architecture that honors tropical heritage and contemporary living.
                    </p>
<div className="flex items-center gap-6 pt-4">
<button className="bg-slate-900 text-white px-8 py-4 rounded-full text-xs font-medium uppercase tracking-widest hover:bg-sky-700 transition-all" onclick="showPage('projects')">View Our Work</button>
<button className="flex items-center gap-2 text-xs font-semibold uppercase tracking-widest group">
                            Play Film <iconify-icon className="text-2xl group-hover:text-sky-700 transition-colors" icon="solar:play-circle-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-32 bg-slate-50">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-24 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
<img alt="Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1481277542470-605612bd2d61?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
<div className="absolute -bottom-10 -right-10 bg-white p-8 rounded-2xl shadow-xl hidden md:block border border-slate-100">
<p className="text-4xl font-semibold text-sky-700 tracking-tighter">15+</p>
<p className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Years of Excellence</p>
</div>
</div>
<div className="space-y-8">
<span className="text-xs font-semibold text-sky-700 tracking-widest uppercase">Introduction</span>
<h2 className="text-4xl font-semibold tracking-tight">Modern Living Rooted in Tradition</h2>
<p className="text-slate-500 font-light leading-relaxed">STHAPOTI is a multidisciplinary architecture firm based in Dhaka. We believe that architecture is not just about buildings, but about the experiences they create. Our designs integrate the tropical climate of Bangladesh with minimalist aesthetics.</p>
<div className="grid grid-cols-2 gap-8 pt-4">
<div className="space-y-2">
<iconify-icon className="text-3xl text-sky-700" icon="solar:leaf-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-tight">Sustainable</h4>
<p className="text-xs text-slate-400">Eco-conscious material selection.</p>
</div>
<div className="space-y-2">
<iconify-icon className="text-3xl text-sky-700" icon="solar:minimalistic-magnifer-linear"></iconify-icon>
<h4 className="text-sm font-semibold uppercase tracking-tight">Minimalist</h4>
<p className="text-xs text-slate-400">Functionality meets pure form.</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<main className="page-section pt-32 pb-20" id="about">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="text-center max-w-3xl mx-auto mb-20 space-y-4">
<span className="text-xs font-semibold text-sky-700 tracking-widest uppercase">Our Story</span>
<h2 className="text-5xl font-semibold tracking-tight">Architecture of Purpose</h2>
<p className="text-slate-500 font-light">From a small studio in Dhaka to an international award-winning firm, our journey has been driven by the pursuit of architectural truth.</p>
</div>
<div className="grid md:grid-cols-3 gap-12 mb-32">
<div className="space-y-4 text-center">
<div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto text-3xl text-sky-700">
<iconify-icon icon="solar:target-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Our Mission</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">To create architectural solutions that enhance human connection while preserving the natural environment.</p>
</div>
<div className="space-y-4 text-center">
<div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto text-3xl text-sky-700">
<iconify-icon icon="solar:eye-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Our Vision</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">To lead the global dialogue on tropical modernism and sustainable urban density in South Asia.</p>
</div>
<div className="space-y-4 text-center">
<div className="w-20 h-20 bg-sky-50 rounded-full flex items-center justify-center mx-auto text-3xl text-sky-700">
<iconify-icon icon="solar:medal-ribbon-linear"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight">Achievements</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Recipient of the Aga Khan Award for Architecture (Nomination) and National Design Excellence 2023.</p>
</div>
</div>
<div className="space-y-12">
<h3 className="text-2xl font-semibold tracking-tight border-b pb-4">Principal Architects</h3>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6">
<img alt="Team" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h4 className="font-semibold text-lg">Ar. Naveed Ahmed</h4>
<p className="text-xs text-sky-700 font-medium uppercase tracking-widest">Lead Design Principal</p>
</div>
<div className="group cursor-pointer">
<div className="aspect-[3/4] rounded-2xl overflow-hidden mb-6 grayscale hover:grayscale-0 transition-all">
<img alt="Team" className="w-full h-full object-cover transition-transform group-hover:scale-105" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<h4 className="font-semibold text-lg">Ar. Sarah Chowdhury</h4>
<p className="text-xs text-sky-700 font-medium uppercase tracking-widest">Structural Lead</p>
</div>
</div>
</div>
</div>
</main>

<main className="page-section pt-32 pb-20" id="services">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-end mb-20 gap-8">
<div className="max-w-xl space-y-4">
<span className="text-xs font-semibold text-sky-700 tracking-widest uppercase">What We Do</span>
<h2 className="text-5xl font-semibold tracking-tight">Holistic Design Solutions</h2>
</div>
<div className="text-slate-500 text-sm max-w-sm">From residential havens to commercial benchmarks, we offer a full spectrum of design services.</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-px bg-slate-100 border border-slate-100">

<div className="bg-white p-12 space-y-6 hover:bg-sky-50/30 transition-colors">
<iconify-icon className="text-4xl text-sky-700" icon="solar:home-2-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight">House Design</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Bespoke residential architecture ranging from modern duplexes to tropical villas, focusing on airflow and natural light.</p>
</div>

<div className="bg-white p-12 space-y-6 hover:bg-sky-50/30 transition-colors">
<iconify-icon className="text-4xl text-sky-700" icon="solar:ruler-cross-pen-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight">Building Planning</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Comprehensive urban planning and site feasibility studies for apartment complexes and commercial towers.</p>
</div>

<div className="bg-white p-12 space-y-6 hover:bg-sky-50/30 transition-colors">
<iconify-icon className="text-4xl text-sky-700" icon="solar:3d-cube-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight">3D Visualization</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Ultra-realistic architectural renders and walkthroughs to help you visualize your future space before it's built.</p>
</div>

<div className="bg-white p-12 space-y-6 hover:bg-sky-50/30 transition-colors">
<iconify-icon className="text-4xl text-sky-700" icon="solar:armchair-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight">Interior Design</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">Custom furniture and spatial arrangements that harmonize with the building's structural soul.</p>
</div>

<div className="bg-white p-12 space-y-6 hover:bg-sky-50/30 transition-colors">
<iconify-icon className="text-4xl text-sky-700" icon="solar:buildings-linear"></iconify-icon>
<h4 className="text-xl font-semibold tracking-tight">Construction Management</h4>
<p className="text-sm text-slate-500 font-light leading-relaxed">On-site supervision and consultation to ensure structural integrity and material quality control.</p>
</div>
</div>
</div>
</main>

<main className="page-section pt-32 pb-20" id="projects">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="flex flex-col md:flex-row justify-between items-center mb-16 gap-6">
<h2 className="text-4xl font-semibold tracking-tight">Portfolio</h2>
<div className="flex gap-4 text-[10px] font-semibold uppercase tracking-widest text-slate-400">
<button className="text-sky-700 border-b-2 border-sky-700 pb-1">All Projects</button>
<button className="hover:text-slate-900 transition-colors pb-1">Residential</button>
<button className="hover:text-slate-900 transition-colors pb-1">Commercial</button>
<button className="hover:text-slate-900 transition-colors pb-1">Cultural</button>
</div>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-6">
<img alt="Duplex House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-semibold text-sky-700 uppercase tracking-widest">Duplex House • Banani</span>
<h3 className="text-xl font-semibold tracking-tight mt-2">The Terracotta Pavilion</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-6">
<img alt="HQ" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-semibold text-sky-700 uppercase tracking-widest">Commercial • Gulshan</span>
<h3 className="text-xl font-semibold tracking-tight mt-2">Prism Tower HQ</h3>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/5] rounded-3xl overflow-hidden bg-slate-100 mb-6">
<img alt="Apartment" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607687940-4e524cb35297?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<span className="text-[10px] font-semibold text-sky-700 uppercase tracking-widest">Residential • Dhanmondi</span>
<h3 className="text-xl font-semibold tracking-tight mt-2">The Silent Concrete</h3>
</div>
</div>
</div>
</main>

<main className="page-section pt-32 pb-20" id="gallery">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<h2 className="text-4xl font-semibold tracking-tight mb-16 text-center">Visual Gallery</h2>
<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1449156006070-eb598327ab6e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1497366811353-6870744d04b2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1518005020473-1f1915612180?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<img alt="Gallery" className="w-full rounded-2xl cursor-zoom-in hover:opacity-90 transition-opacity" src="https://images.unsplash.com/photo-1431540015161-0bf868a2d407?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</main>

<main className="page-section pt-32 pb-20" id="blog">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="max-w-xl mb-16">
<span className="text-xs font-semibold text-sky-700 tracking-widest uppercase">Journal</span>
<h2 className="text-4xl font-semibold tracking-tight">Design Thoughts</h2>
</div>
<div className="grid md:grid-cols-3 gap-12">
<article className="space-y-6 group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Architecture • 12 May 2024</span>
<h3 className="text-xl font-semibold tracking-tight group-hover:text-sky-700 transition-colors leading-tight">Modern Trends in Dhaka's Duplex House Design</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">How natural ventilation is changing the way we look at residential luxury in the capital.</p>
</div>
</article>
<article className="space-y-6 group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Interior • 05 May 2024</span>
<h3 className="text-xl font-semibold tracking-tight group-hover:text-sky-700 transition-colors leading-tight">Minimalist Interiors for Small Apartment Living</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">Creative ways to maximize space without sacrificing aesthetic purity in urban flats.</p>
</div>
</article>
<article className="space-y-6 group cursor-pointer">
<div className="aspect-video rounded-2xl overflow-hidden">
<img alt="Blog" className="w-full h-full object-cover group-hover:scale-105 transition-transform" src="https://images.unsplash.com/photo-1448375240586-882707db888b?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="space-y-3">
<span className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Heritage • 28 Apr 2024</span>
<h3 className="text-xl font-semibold tracking-tight group-hover:text-sky-700 transition-colors leading-tight">Reimagining the Traditional Bengal Courtyard</h3>
<p className="text-sm text-slate-500 font-light line-clamp-2">Blending the ancient 'Uthan' concept with contemporary structural glass.</p>
</div>
</article>
</div>
</div>
</main>

<main className="page-section pt-32 pb-20" id="contact">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="grid lg:grid-cols-2 gap-24">
<div className="space-y-12">
<div className="space-y-4">
<h2 className="text-5xl font-semibold tracking-tight">Let's Build <br/><span className="text-sky-700">Together.</span></h2>
<p className="text-slate-500 font-light text-lg">Have a vision for your dream home? Drop us a line and let's start the conversation.</p>
</div>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-xl text-sky-700">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Call Us</p>
<p className="text-sm font-semibold">+880 1711 000 000</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-xl text-sky-700">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Email</p>
<p className="text-sm font-semibold">hello@sthapoti.com.bd</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-sky-50 rounded-full flex items-center justify-center text-xl text-sky-700">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-slate-400 uppercase font-bold tracking-widest">Studio</p>
<p className="text-sm font-semibold">Suite 4B, Banani Avenue, Dhaka 1213</p>
</div>
</div>
</div>
</div>
<div className="bg-slate-50 p-10 rounded-3xl border border-slate-100">
<form className="space-y-8">
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Full Name</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-sky-700 outline-none transition-all" placeholder="E.g. Tanvir Rahman" type="text"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Email Address</label>
<input className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-sky-700 outline-none transition-all" placeholder="tanvir@example.com" type="email"/>
</div>
<div className="space-y-2">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest">Your Message</label>
<textarea className="w-full bg-white border border-slate-200 rounded-xl px-4 py-4 text-sm focus:ring-2 focus:ring-sky-700 outline-none transition-all resize-none" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-sky-700 text-white py-5 rounded-xl text-xs font-semibold uppercase tracking-widest hover:bg-sky-800 transition-all">
                            Send Inquiry
                        </button>
</form>
</div>
</div>
<div className="mt-20 h-[400px] rounded-3xl overflow-hidden grayscale border border-slate-100 shadow-sm relative">
<img alt="Map" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1526778548025-fa2f459cd5c1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-sky-900/10 mix-blend-multiply"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-4 h-4 bg-sky-700 rounded-full animate-ping"></div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3 h-3 bg-sky-700 rounded-full"></div>
</div>
</div>
</main>

<footer className="bg-slate-900 text-white py-20">
<div className="max-w-[1440px] mx-auto px-6 md:px-12">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2 space-y-8">
<div className="text-xl font-semibold tracking-tighter uppercase">STHAPOTI</div>
<p className="text-slate-400 font-light max-w-sm text-sm">Design is not what it looks like and feels like. Design is how it works. We build for the future of Bangladesh.</p>
<div className="flex gap-4">
<a className="text-xl hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="text-xl hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:basketball-linear"></iconify-icon></a>
<a className="text-xl hover:text-sky-500 transition-colors" href="#"><iconify-icon icon="solar:square-share-line-linear"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest mb-6">Explore</h5>
<ul className="space-y-4 text-xs text-slate-400 font-medium">
<li><a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="showPage('projects')">Our Portfolio</a></li>
<li><a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="showPage('about')">The Team</a></li>
<li><a className="hover:text-white transition-colors" href="javascript:void(0)" onclick="showPage('blog')">Latest News</a></li>
</ul>
</div>
<div>
<h5 className="text-xs font-semibold uppercase tracking-widest mb-6">Newsletter</h5>
<div className="relative">
<input className="w-full bg-slate-800 border-none rounded-lg px-4 py-3 text-xs focus:ring-1 focus:ring-sky-700" placeholder="Email Address" type="email"/>
<button className="absolute right-2 top-1.5 p-1.5 text-sky-500 hover:text-white transition-colors"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-[10px] text-slate-500 uppercase tracking-widest">© 2024 STHAPOTI Studio. All rights reserved.</p>
<p className="text-[10px] text-slate-500 uppercase tracking-widest">Designed for Architectural Excellence</p>
</div>
</div>
</footer>


    </>
  );
}
