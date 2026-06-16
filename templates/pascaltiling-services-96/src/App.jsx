import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Lightbox Logic
        function openLightbox(element) {
            const imgSrc = element.querySelector('img').src;
            const lightbox = document.getElementById('lightbox');
            const lightboxImg = document.getElementById('lightbox-img');
            
            lightboxImg.src = imgSrc;
            lightbox.classList.remove('hidden');
            // Small delay to allow display:flex to apply before opacity transition
            setTimeout(() => {
                lightbox.classList.remove('opacity-0');
            }, 10);
        }

        function closeLightbox() {
            const lightbox = document.getElementById('lightbox');
            lightbox.classList.add('opacity-0');
            setTimeout(() => {
                lightbox.classList.add('hidden');
            }, 300);
        }

        // Close lightbox on background click
        document.getElementById('lightbox').addEventListener('click', (e) => {
            if (e.target.id === 'lightbox') closeLightbox();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-lg hover:bg-[#128C7E] transition-all hover:-translate-y-1 group flex items-center gap-2" href="https://wa.me/233245626315" target="_blank">
<iconify-icon height="24" icon="solar:chat-round-dots-bold" width="24"></iconify-icon>
<span className="font-bold hidden group-hover:inline-block transition-all">Chat on WhatsApp</span>
</a>

<nav className="fixed w-full top-0 z-40 bg-white/95 backdrop-blur-md border-b border-slate-100 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="bg-[#8B0000] text-white p-2 rounded-lg">
<iconify-icon height="24" icon="solar:layers-minimalistic-bold" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-xl font-extrabold text-slate-900 leading-none tracking-tight group-hover:text-[#8B0000] transition-colors">Pascal Tiles Works</span>
<span className="text-xs font-semibold text-slate-500 tracking-wider uppercase">Tiles &amp; Tombs</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-bold text-slate-600">
<a className="hover:text-[#8B0000] transition-colors" href="#home">Home</a>
<a className="hover:text-[#8B0000] transition-colors" href="#about">About Us</a>
<a className="hover:text-[#8B0000] transition-colors" href="#services">Services</a>
<a className="hover:text-[#8B0000] transition-colors" href="#projects">Projects</a>
<a className="hover:text-[#8B0000] transition-colors" href="#contact">Contact</a>
</div>
<a className="hidden md:flex items-center gap-2 bg-[#8B0000] text-white px-5 py-2.5 rounded-full text-sm font-bold hover:bg-[#660000] transition-colors" href="tel:0209930670">
<iconify-icon icon="solar:phone-calling-bold" width="18"></iconify-icon>
<span>Call Now</span>
</a>

<button className="md:hidden text-slate-800" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>

<div className="hidden absolute top-full left-0 w-full bg-white border-b border-slate-100 p-6 flex-col gap-4 shadow-xl md:hidden" id="mobile-menu">
<a className="font-bold text-slate-800" href="#home">Home</a>
<a className="font-bold text-slate-800" href="#about">About Us</a>
<a className="font-bold text-slate-800" href="#services">Services</a>
<a className="font-bold text-slate-800" href="#projects">Projects</a>
<a className="font-bold text-slate-800" href="#contact">Contact</a>
</div>
</nav>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden bg-slate-900" id="home">

<div className="absolute inset-0 z-0">
<img alt="Premium Tiling Work" className="w-full h-full object-cover opacity-40" src="https://images.unsplash.com/photo-1620626012053-93f7c85e1b5b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center md:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#8B0000]/20 border border-[#8B0000]/40 text-red-200 text-xs font-bold uppercase tracking-wider mb-6">
<span className="w-2 h-2 rounded-full bg-[#8B0000]"></span>
                New Amakom, Afful Nkwanta – Kumasi
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-extrabold text-white tracking-tight mb-6">
                Pascal Tiles <span className="text-[#8B0000]">Works</span>
</h1>
<p className="text-xl md:text-3xl text-slate-300 font-medium mb-10 max-w-2xl">
                Experts in Tiles &amp; Tombs Work. delivering precision, durability, and elegance in every stone we lay.
            </p>
<div className="flex flex-col md:flex-row gap-4 justify-center md:justify-start">
<a className="bg-[#8B0000] text-white px-8 py-4 rounded-lg font-bold hover:bg-[#a00000] transition-all flex items-center justify-center gap-2" href="#contact">
                    Request a Quote
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-white text-slate-900 px-8 py-4 rounded-lg font-bold hover:bg-slate-100 transition-all flex items-center justify-center gap-2" href="#services">
                    View Services
                </a>
</div>
</div>

<div className="relative z-20 max-w-7xl mx-auto px-6 mt-20">
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-white hover:bg-white/20 transition-all">
<iconify-icon className="text-[#8B0000] mb-3" icon="solar:wallpaper-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg">Wall Tiles</h3>
<p className="text-sm text-slate-300">Exterior &amp; Interior</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-white hover:bg-white/20 transition-all">
<iconify-icon className="text-[#8B0000] mb-3" icon="solar:bath-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg">Bathroom</h3>
<p className="text-sm text-slate-300">Waterproofing</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-white hover:bg-white/20 transition-all">
<iconify-icon className="text-[#8B0000] mb-3" icon="solar:chef-hat-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg">Kitchen</h3>
<p className="text-sm text-slate-300">Countertops &amp; Floors</p>
</div>
<div className="bg-white/10 backdrop-blur-sm border border-white/10 p-6 rounded-xl text-white hover:bg-white/20 transition-all">
<iconify-icon className="text-[#8B0000] mb-3" icon="solar:widget-add-linear" width="32"></iconify-icon>
<h3 className="font-bold text-lg">Tombs</h3>
<p className="text-sm text-slate-300">Custom Finishing</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="absolute -top-4 -left-4 w-24 h-24 bg-[#8B0000]/10 rounded-full blur-2xl"></div>
<div className="relative rounded-2xl overflow-hidden shadow-2xl">
<img alt="Worker Tiling" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581094794329-c8112a89af12?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-slate-900 text-white p-6 rounded-xl shadow-xl max-w-xs">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-[#8B0000]" icon="solar:medal-star-bold" width="32"></iconify-icon>
<span className="font-bold text-lg">Top Rated</span>
</div>
<p className="text-sm text-slate-400">Recognized for superior craftsmanship in Kumasi.</p>
</div>
</div>
<div>
<h2 className="text-[#8B0000] font-bold uppercase tracking-wider text-sm mb-2">About Us</h2>
<h3 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-6 leading-tight">Master Craftsmanship in <span className="text-[#8B0000]">Every Tile.</span></h3>
<p className="text-slate-600 text-lg mb-6 leading-relaxed">
                    Pascal Tiles Works is a premier tiling and stone finishing service provider based in New Amakom. We specialize in transforming spaces with high-quality tiling for residential and commercial properties.
                </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                    Beyond interiors, we are experts in tomb construction and finishing, ensuring dignified and durable resting places using the finest stone and tile materials. Our commitment to quality, speed, and precision makes us the trusted choice in Kumasi.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-bold text-slate-800">Experienced Professionals</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-bold text-slate-800">Quality Materials Guaranteed</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-[#8B0000]" icon="solar:check-circle-bold"></iconify-icon>
<span className="font-bold text-slate-800">Timely Project Completion</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-[#8B0000] font-bold border-b-2 border-[#8B0000] pb-1 hover:text-[#660000] transition-colors" href="#contact">
                    Get in Touch <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-[#8B0000] font-bold uppercase tracking-wider text-sm mb-2">Our Expertise</h2>
<h3 className="text-4xl font-extrabold text-slate-900">Professional Services</h3>
<p className="text-slate-600 mt-4 max-w-2xl mx-auto">From modern home interiors to respectful tomb finishing, we handle every project with care.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-red-50 text-[#8B0000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
<iconify-icon icon="solar:home-2-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Wall Tiling</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Expert installation for interior and exterior walls. We create stunning feature walls and durable exterior facades using decorative patterns.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-red-50 text-[#8B0000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
<iconify-icon icon="solar:bath-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Bathroom Tiling</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Modern finishing with full waterproofing. We install anti-slip floor tiles and elegant wall tiles to create a spa-like atmosphere.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-red-50 text-[#8B0000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
<iconify-icon icon="solar:chef-hat-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Kitchen Tiling</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        High-end kitchen transformations including backsplashes, countertops, and heavy-duty floor tiling for easy maintenance.
                    </p>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm hover:shadow-xl transition-all duration-300 group border border-slate-100">
<div className="w-14 h-14 bg-red-50 text-[#8B0000] rounded-xl flex items-center justify-center mb-6 group-hover:bg-[#8B0000] group-hover:text-white transition-colors">
<iconify-icon icon="solar:box-minimalistic-bold" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-3">Tomb Tiling</h4>
<p className="text-slate-500 text-sm leading-relaxed mb-4">
                        Custom-designed tombstone finishing and stone layering. We build durable, respectful, and beautifully crafted final resting places.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="projects">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-[#8B0000] font-bold uppercase tracking-wider text-sm mb-2">Our Portfolio</h2>
<h3 className="text-4xl font-extrabold text-slate-900">Recent Projects</h3>
</div>
<div className="hidden md:block">
<a className="text-slate-500 hover:text-[#8B0000] font-bold text-sm flex items-center gap-1 transition-colors" href="#contact">
                        View all works <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Kitchen Backsplash" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Kitchen</span>
<h4 className="text-white font-bold text-lg">Modern Backsplash</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Bathroom Tiling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1620626012053-93f7c85e1b5b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Bathroom</span>
<h4 className="text-white font-bold text-lg">Luxury Marble Finish</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Living Room Floor" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://plus.unsplash.com/premium_photo-1678829596328-1b228b37118d?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Living Area</span>
<h4 className="text-white font-bold text-lg">Polished Porcelain Floor</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Stone Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1596634991219-c89b35b67113?q=80&amp;w=1968&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Tomb Finishing</span>
<h4 className="text-white font-bold text-lg">Granite Stone Laying</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Exterior Wall" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1584622650111-993a426fbf0a?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Exterior</span>
<h4 className="text-white font-bold text-lg">Decorative Wall Cladding</h4>
</div>
</div>

<div className="group relative overflow-hidden rounded-xl aspect-[4/3] cursor-pointer" onclick="openLightbox(this)">
<img alt="Patio Tiling" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex flex-col justify-end p-6">
<span className="text-[#8B0000] font-bold text-xs uppercase">Outdoor</span>
<h4 className="text-white font-bold text-lg">Patio Stone Installation</h4>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="contact">

<div className="absolute top-0 right-0 w-1/2 h-full bg-[#8B0000]/5 skew-x-12 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<h2 className="text-[#8B0000] font-bold uppercase tracking-wider text-sm mb-2">Get In Touch</h2>
<h3 className="text-4xl md:text-5xl font-extrabold mb-8">Ready to start your project?</h3>
<p className="text-slate-400 mb-12 text-lg">
                        Contact Pascal Tiles Works today for a free quote. We are ready to bring your vision to life with expert precision.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#8B0000]/20 rounded-lg flex items-center justify-center text-[#8B0000] shrink-0">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Location</h4>
<p className="text-slate-400">New Amakom, Afful Nkwanta<br/>Kumasi, Ghana</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#8B0000]/20 rounded-lg flex items-center justify-center text-[#8B0000] shrink-0">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">Call Us</h4>
<p className="text-slate-400 hover:text-white transition-colors"><a href="tel:0209930670">020 993 0670</a></p>
<p className="text-slate-400 hover:text-white transition-colors"><a href="tel:0266768626">026 676 8626</a></p>
<p className="text-slate-400 hover:text-white transition-colors"><a href="tel:0270775387">027 077 5387</a></p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-12 h-12 bg-[#8B0000]/20 rounded-lg flex items-center justify-center text-[#8B0000] shrink-0">
<iconify-icon icon="solar:chat-square-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg">WhatsApp</h4>
<p className="text-slate-400 hover:text-white transition-colors"><a href="https://wa.me/233245626315">024 562 6315</a></p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-8 text-slate-800 shadow-2xl">
<h4 className="text-2xl font-bold mb-6">Send us a message</h4>
<form className="space-y-4" onsubmit="event.preventDefault(); alert('Thank you for your message! We will contact you shortly.');">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors" placeholder="John Doe" required="" type="text"/>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Phone</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors" placeholder="020..." required="" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Service Type</label>
<select className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors">
<option>Wall Tiling</option>
<option>Bathroom Renovation</option>
<option>Kitchen Tiling</option>
<option>Tomb Construction/Finishing</option>
<option>General Inquiry</option>
</select>
</div>
<div>
<label className="block text-sm font-bold text-slate-700 mb-1">Message</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-lg px-4 py-3 focus:outline-none focus:border-[#8B0000] transition-colors" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-[#8B0000] text-white font-bold py-4 rounded-lg hover:bg-[#660000] transition-all shadow-lg hover:shadow-xl" type="submit">
                            Send Message
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-black text-slate-500 py-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="flex items-center justify-center gap-2 mb-6">
<div className="bg-[#8B0000] text-white p-1 rounded">
<iconify-icon icon="solar:layers-minimalistic-bold" width="20"></iconify-icon>
</div>
<span className="text-xl font-bold text-white tracking-tight">Pascal Tiles Works</span>
</div>
<p className="mb-8 max-w-lg mx-auto text-sm">Providing exceptional tiling and stone finishing services in Kumasi and beyond. Quality you can stand on.</p>
<div className="flex justify-center gap-8 mb-8 text-sm font-bold text-slate-400">
<a className="hover:text-white transition-colors" href="#home">Home</a>
<a className="hover:text-white transition-colors" href="#about">About</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>
<div className="text-xs text-slate-600">
                © 2024 Pascal Tiles Works. All rights reserved.
            </div>
</div>
</footer>

<div className="fixed inset-0 z-50 bg-black/95 hidden items-center justify-center opacity-0 transition-opacity duration-300" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-[#8B0000]" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-bold" width="48"></iconify-icon>
</button>
<img className="max-w-[90vw] max-h-[80vh] object-contain rounded-lg shadow-2xl" id="lightbox-img" src=""/>
</div>


    </>
  );
}
