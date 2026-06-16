import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Reveal on Scroll
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Lightbox Logic
        const lightbox = document.getElementById('lightbox');
        const lightboxImg = document.getElementById('lightbox-img');
        const lightboxCaption = document.getElementById('lightbox-caption');

        function openLightbox(src, caption) {
            lightboxImg.src = src;
            lightboxCaption.innerText = caption;
            lightbox.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
        }

        function closeLightbox() {
            lightbox.classList.add('hidden');
            document.body.style.overflow = 'auto';
            lightboxImg.src = '';
        }

        // Close lightbox on background click
        lightbox.addEventListener('click', (e) => {
            if (e.target === lightbox) closeLightbox();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#E65F1A] rounded-tr-xl rounded-bl-xl flex items-center justify-center text-white">
<span className="font-serif text-xl italic">D</span>
</div>
<div className="flex flex-col">
<span className="font-serif text-lg font-bold leading-none tracking-tight text-gray-900">Deladem’s</span>
<span className="text-[10px] uppercase tracking-[0.2em] text-[#2DD4BF] font-semibold">Art Deco</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#E65F1A] transition-colors" href="#home">Home</a>
<a className="hover:text-[#E65F1A] transition-colors" href="#about">About Us</a>
<a className="hover:text-[#E65F1A] transition-colors" href="#gallery">Gallery</a>
<a className="hover:text-[#E65F1A] transition-colors" href="#services">Services</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 bg-gray-900 text-white text-xs uppercase tracking-widest hover:bg-[#E65F1A] transition-colors rounded-full duration-300" href="#contact">
                    Order Now
                </a>
<button className="md:hidden text-2xl text-gray-800">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative w-full h-screen min-h-[700px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">
<img alt="Resin River Table" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577140917170-285929dfe55c?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-black/80 via-black/40 to-transparent"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full pt-20">
<div className="max-w-3xl reveal active">
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-[2px] bg-[#E65F1A]"></div>
<span className="text-[#2DD4BF] uppercase tracking-[0.3em] text-xs font-semibold">Premium Wood Art</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl text-white font-medium leading-[1.1] mb-8">
                    Deladem’s <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-400 italic font-serif">Art Deco</span>
</h1>
<p className="text-gray-200 text-lg md:text-xl font-light max-w-lg leading-relaxed mb-10 border-l-2 border-[#E65F1A] pl-6">
                    High-Quality Artistic Furniture for Your Home &amp; Office. Where nature meets luxury craftsmanship.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="px-8 py-4 bg-[#E65F1A] text-white text-sm uppercase tracking-widest hover:bg-[#c74e12] transition-colors rounded-sm flex items-center gap-2 justify-center" href="#gallery">
                        View Gallery
                        <iconify-icon icon="solar:gallery-wide-linear" width="18"></iconify-icon>
</a>
<a className="px-8 py-4 border border-white/30 backdrop-blur-sm text-white text-sm uppercase tracking-widest hover:bg-white hover:text-black transition-all rounded-sm flex items-center gap-2 justify-center" href="#contact">
                        Order Custom
                        <iconify-icon icon="solar:pen-new-square-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white">
<div className="max-w-4xl mx-auto text-center reveal">
<iconify-icon className="text-[#E65F1A] mb-6 inline-block" icon="solar:stars-minimalistic-linear" width="40"></iconify-icon>
<h2 className="text-3xl md:text-4xl leading-tight font-serif text-gray-900">
                "We provide you with the best artwork at a very high quality."
            </h2>
<div className="w-24 h-1 bg-gradient-to-r from-[#E65F1A] to-[#2DD4BF] mx-auto mt-8 rounded-full"></div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAFA] border-t border-gray-100" id="about">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

<div className="grid grid-cols-2 gap-4 reveal">
<div className="space-y-4 mt-8">
<div className="h-64 rounded-2xl overflow-hidden img-zoom-container shadow-lg">
<img alt="Wood Detail" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1615873968403-89e068629265?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-48 rounded-2xl overflow-hidden img-zoom-container shadow-lg">
<img alt="Home Decor" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1513694203232-719a280e022f?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<div className="space-y-4">
<div className="h-48 rounded-2xl overflow-hidden img-zoom-container shadow-lg">
<img alt="Resin Texture" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1611269154421-4e27c4131631?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-64 rounded-2xl overflow-hidden img-zoom-container shadow-lg">
<img alt="Craftsmanship" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1549488344-c705c34e851d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="reveal delay-100">
<span className="text-[#E65F1A] font-bold tracking-widest text-xs uppercase mb-2 block">Our Story</span>
<h2 className="text-4xl md:text-5xl font-serif mb-8 text-gray-900">Crafting Soul into <span className="italic text-gray-500">Wood &amp; Resin</span></h2>
<p className="text-gray-600 mb-6 leading-relaxed">
                    At <span className="font-semibold text-gray-900">Deladem’s Art Deco</span>, we don't just build furniture; we curate artistic experiences. We are creators of hand-crafted artistic furniture made from natural wood, premium resin, and custom designs that tell a story.
                </p>
<p className="text-gray-600 mb-8 leading-relaxed">
                    Our mission is simple: to elevate your home and office with unique art décor that blends durability with high-end aesthetics. Whether it's a river table or a sculpted centerpiece, every inch is finished to perfection.
                </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-[#2DD4BF] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Premium Hardwoods &amp; Non-Toxic Resins
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-[#2DD4BF] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        100% Hand-Crafted &amp; Custom Finished
                    </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<iconify-icon className="text-[#2DD4BF] text-xl" icon="solar:check-circle-linear"></iconify-icon>
                        Unique Designs for Modern Spaces
                    </li>
</ul>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white relative overflow-hidden" id="services">

<div className="absolute top-0 right-0 w-64 h-64 bg-[#2DD4BF]/5 rounded-bl-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-4xl font-serif mb-4">Our Expertise</h2>
<p className="text-gray-500">Tailored solutions for residential and corporate spaces.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 reveal">
<div className="w-14 h-14 rounded-full bg-[#FFE8DC] text-[#E65F1A] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3">Custom Furniture</h3>
<p className="text-sm text-gray-500 leading-relaxed">Bespoke tables and chairs designed specifically to fit your space and style requirements.</p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 reveal delay-100">
<div className="w-14 h-14 rounded-full bg-[#E0F2FE] text-[#0EA5E9] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:waterdrops-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3">Resin Art Tables</h3>
<p className="text-sm text-gray-500 leading-relaxed">Stunning river tables mixing live-edge wood with translucent or colored epoxy resin.</p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 reveal delay-200">
<div className="w-14 h-14 rounded-full bg-[#DCFCE7] text-[#22C55E] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:armchair-2-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3">Office Décor</h3>
<p className="text-sm text-gray-500 leading-relaxed">Elevate your workspace with professional artistic desks and statement reception pieces.</p>
</div>

<div className="p-8 rounded-3xl bg-gray-50 hover:bg-white hover:shadow-xl transition-all duration-300 group border border-gray-100 reveal delay-300">
<div className="w-14 h-14 rounded-full bg-[#F3E8FF] text-[#A855F7] flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:star-fall-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold mb-3">Personalized Art</h3>
<p className="text-sm text-gray-500 leading-relaxed">Sculpted wood art pieces and circular wood-slice wall décor made to order.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#111827] text-white" id="gallery">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 border-b border-gray-800 pb-6 reveal">
<div>
<span className="text-[#E65F1A] uppercase tracking-widest text-xs font-bold">Portfolio</span>
<h2 className="text-4xl md:text-5xl font-serif mt-2">The Collection</h2>
</div>
<div className="flex gap-2 mt-6 md:mt-0">
<button className="px-4 py-2 rounded-full border border-gray-700 text-sm hover:bg-[#E65F1A] hover:border-[#E65F1A] transition-colors">All</button>
<button className="px-4 py-2 rounded-full border border-gray-700 text-sm hover:bg-[#E65F1A] hover:border-[#E65F1A] transition-colors">Tables</button>
<button className="px-4 py-2 rounded-full border border-gray-700 text-sm hover:bg-[#E65F1A] hover:border-[#E65F1A] transition-colors">Art</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px] reveal delay-100">

<div className="group relative rounded-2xl overflow-hidden md:col-span-2 md:row-span-2 cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop', 'Resin River Conference Table')">
<img alt="Resin Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1604578762246-41134e37f9cc?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-8">
<div>
<h3 className="text-2xl font-serif">Resin River Table</h3>
<p className="text-gray-300 text-sm">Walnut &amp; Blue Epoxy</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1574971842014-4c281df6890d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop', 'Tree Stump Coffee Table')">
<img alt="Tree Stump" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1574971842014-4c281df6890d?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-serif">Stump Glass Table</h3>
<p className="text-gray-300 text-sm">Natural Root Base</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop', 'Circular Wood Slice')">
<img alt="Wood Slice" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1622372738946-62e02505feb3?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-serif">Circular Wood Art</h3>
<p className="text-gray-300 text-sm">Center Piece</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer" onclick="openLightbox('https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop', 'Sculpted Wood Stand')">
<img alt="Sculpture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1533090481720-856c6e3c1fdc?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-serif">Sculpted Stand</h3>
<p className="text-gray-300 text-sm">Hand Carved</p>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden cursor-pointer md:col-span-2" onclick="openLightbox('https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop', 'Natural Wood Center Table')">
<img alt="Center Table" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<h3 className="text-xl font-serif">Natural Center Table</h3>
<p className="text-gray-300 text-sm">Minimalist Design</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#FAFAFA] relative" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-5 gap-12 bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100">

<div className="lg:col-span-2 bg-[#1f2937] text-white p-12 relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-[#E65F1A]/20 rounded-bl-full pointer-events-none filter blur-2xl"></div>
<h2 className="text-3xl font-serif mb-8">Contact Us</h2>
<p className="text-gray-300 mb-12 text-sm leading-relaxed">
                    Ready to elevate your space? Reach out to discuss a custom project or place an order from our collection.
                </p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-[#E65F1A] flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Call / WhatsApp</span>
<p className="font-medium">0269930909</p>
<p className="font-medium">0200220693</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="brandico:instagram" width="18"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">Instagram</span>
<a className="hover:text-[#E65F1A] transition-colors" href="#">@deladem_gustavo</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white/10 flex items-center justify-center shrink-0">
<iconify-icon icon="brandico:tiktok" width="18"></iconify-icon>
</div>
<div>
<span className="block text-xs uppercase tracking-widest text-gray-400 mb-1">TikTok</span>
<a className="hover:text-[#E65F1A] transition-colors" href="#">@deladem707</a>
</div>
</div>
</div>
<div className="mt-16">
<a className="w-full py-4 bg-[#25D366] hover:bg-[#20bd5a] text-white rounded-lg font-medium flex items-center justify-center gap-2 transition-all" href="https://wa.me/233269930909" target="_blank">
<iconify-icon icon="brandico:whatsapp" width="20"></iconify-icon>
                        Chat on WhatsApp
                    </a>
</div>
</div>

<div className="lg:col-span-3 p-12">
<h3 className="text-2xl font-serif mb-6 text-gray-900">Request Custom Order</h3>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider font-bold text-gray-500">Full Name</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#E65F1A] focus:ring-1 focus:ring-[#E65F1A] transition-all" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider font-bold text-gray-500">Phone Number</label>
<input className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#E65F1A] focus:ring-1 focus:ring-[#E65F1A] transition-all" placeholder="020..." type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider font-bold text-gray-500">Product Type</label>
<select className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#E65F1A] transition-all text-gray-600">
<option>Resin River Table</option>
<option>Circle Wood Art</option>
<option>Sculpted Piece</option>
<option>Office Desk</option>
<option>Other (Describe below)</option>
</select>
</div>
<div className="space-y-2">
<label className="text-xs uppercase tracking-wider font-bold text-gray-500">Custom Details / Size</label>
<textarea className="w-full bg-gray-50 border border-gray-200 p-3 rounded-lg focus:outline-none focus:border-[#E65F1A] focus:ring-1 focus:ring-[#E65F1A] transition-all" placeholder="Describe your vision (e.g. 6-seater dining table, blue ocean resin...)" rows="4"></textarea>
</div>

<div className="border-2 border-dashed border-gray-200 rounded-xl p-8 text-center hover:bg-gray-50 transition-colors cursor-pointer group">
<iconify-icon className="text-4xl text-gray-300 group-hover:text-[#E65F1A] transition-colors mb-2" icon="solar:cloud-upload-linear"></iconify-icon>
<p className="text-sm text-gray-500">Click to upload reference images (Optional)</p>
</div>
<button className="w-full py-4 bg-[#E65F1A] text-white font-bold tracking-widest uppercase rounded-lg hover:bg-[#c74e12] shadow-lg shadow-orange-500/30 transition-all transform hover:-translate-y-1" type="button">
                        Submit Request
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-gray-900 text-white border-t border-gray-800">
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-[#E65F1A] rounded-tr-lg rounded-bl-lg flex items-center justify-center">
<span className="font-serif italic text-sm">D</span>
</div>
<span className="font-serif text-lg">Deladem’s Art Deco</span>
</div>
<p className="text-xs text-gray-500">© 2024 Deladem’s Art Deco. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="solar:camera-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:tiktok" width="20"></iconify-icon></a>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden bg-black/80 flex items-center justify-center p-4" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-[#E65F1A] transition-colors" onclick="closeLightbox()">
<iconify-icon icon="solar:close-circle-linear" width="48"></iconify-icon>
</button>
<div className="max-w-5xl w-full max-h-[90vh] flex flex-col items-center">
<img alt="Lightbox" className="max-w-full max-h-[80vh] object-contain rounded-sm shadow-2xl mb-4" id="lightbox-img" src=""/>
<h3 className="text-white text-xl font-serif" id="lightbox-caption"></h3>
</div>
</div>



    </>
  );
}
