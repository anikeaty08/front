import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Custom Cursor Logic
        const cursor = document.getElementById('cursor');
        const hoverElements = document.querySelectorAll('.cursor-hover');

        document.addEventListener('mousemove', (e) => {
            cursor.style.left = e.clientX + 'px';
            cursor.style.top = e.clientY + 'px';
        });

        hoverElements.forEach(el => {
            el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
            el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
        });

        // Preloader
        window.addEventListener('load', () => {
            setTimeout(() => {
                document.getElementById('preloader').classList.add('loaded');
                initAnimations();
            }, 1000);
        });

        // Reveal Animations
        function initAnimations() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                    }
                });
            }, { threshold: 0.1 });

            document.querySelectorAll('.reveal-text').forEach(el => observer.observe(el));
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="hidden md:block" id="cursor"></div>

<div id="preloader">
<div className="flex flex-col items-center gap-4 text-white">
<span className="font-mono text-xs uppercase tracking-widest">Loading Interface</span>
<div className="w-48 h-[1px] bg-white/20 relative overflow-hidden">
<div className="absolute inset-0 bg-white w-full animate-[shimmer_1s_infinite]"></div>
</div>
</div>
</div>

<nav className="fixed w-full z-50 top-0 bg-white border-b border-black mix-blend-normal">
<div className="flex justify-between items-center h-16 px-6">
<a className="cursor-hover font-heading font-bold text-xl tracking-tight uppercase flex items-center gap-2" href="#">
<span className="w-3 h-3 bg-black"></span>
                CustomClothing.PK
            </a>
<div className="hidden md:flex items-center h-full">
<a className="cursor-hover h-full flex items-center px-6 text-sm font-medium border-l border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide" href="#services">Services</a>
<a className="cursor-hover h-full flex items-center px-6 text-sm font-medium border-l border-black hover:bg-black hover:text-white transition-colors uppercase tracking-wide" href="#process">Process</a>
<a className="cursor-hover h-full flex items-center px-8 text-sm font-medium border-l border-black bg-black text-white hover:bg-white hover:text-black transition-colors uppercase tracking-wide" href="#contact">Start Project</a>
</div>
<button className="md:hidden cursor-hover">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>
<main className="pt-16">

<header className="min-h-[90vh] flex flex-col justify-between relative border-b border-black">
<div className="flex-1 flex flex-col justify-center px-6 py-20">
<div className="max-w-[1600px] mx-auto w-full">
<div className="flex items-center gap-4 mb-8">
<span className="font-mono text-xs border border-black px-2 py-1 uppercase rounded-full">Est. 2024</span>
<span className="font-mono text-xs border border-black px-2 py-1 uppercase rounded-full">Islamabad, PK</span>
</div>
<div className="reveal-text overflow-hidden mb-2">
<h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium tracking-tighter uppercase">
                            Premium
                        </h1>
</div>
<div className="reveal-text overflow-hidden mb-2">
<h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium tracking-tighter uppercase ml-0 md:ml-24">
                            Apparel
                        </h1>
</div>
<div className="reveal-text overflow-hidden">
<h1 className="font-heading text-6xl md:text-8xl lg:text-[9rem] leading-[0.85] font-medium tracking-tighter uppercase text-gray-400">
                            Manufacturing
                        </h1>
</div>
</div>
</div>

<div className="border-t border-black py-4 bg-black text-white">
<div className="marquee-container">
<div className="marquee-content font-mono text-sm uppercase tracking-widest">
                        Organic Cotton • No MOQs • Made in Pakistan • Worldwide Shipping • Custom Tech Packs • Screen Printing • Embroidery • Cut &amp; Sew • Organic Cotton • No MOQs • Made in Pakistan • Worldwide Shipping • Custom Tech Packs • Screen Printing • Embroidery • Cut &amp; Sew •
                    </div>
</div>
</div>
</header>

<section className="grid grid-cols-1 lg:grid-cols-12 border-b border-black">
<div className="lg:col-span-8 border-b lg:border-b-0 lg:border-r border-black p-0">
<img alt="Factory Floor" className="w-full h-[600px] object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1617137968427-b2968458d95e?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="lg:col-span-4 flex flex-col justify-between p-8 lg:p-12 bg-[#F5F5F5]">
<div>
<span className="block w-3 h-3 bg-black mb-8"></span>
<h3 className="font-heading text-3xl font-medium leading-tight mb-6">WE BUILD BRANDS FROM THE FIBER UP.</h3>
<p className="font-mono text-sm text-gray-600 leading-relaxed text-justify">
                        We don't just manufacture clothing; we engineer it. Utilizing state-of-the-art machinery and sustainable organic materials, we provide an end-to-end supply chain solution for modern fashion labels.
                    </p>
</div>
<div className="mt-12">
<a className="cursor-hover inline-flex items-center gap-4 font-mono text-xs uppercase border-b border-black pb-1 hover:pl-4 transition-all" href="#contact">
                        Explore Capability
                        <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>
</section>

<section id="services">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 grid-border bg-white">

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 cursor-hover">
<div className="flex justify-between items-start">
<span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">01</span>
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h3 className="font-heading text-2xl uppercase tracking-tight mb-2">Screen Printing</h3>
<p className="font-mono text-xs opacity-60 max-w-[200px]">High-fidelity plastisol &amp; water-based prints for bulk production.</p>
</div>
</div>

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 cursor-hover">
<div className="flex justify-between items-start">
<span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">02</span>
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h3 className="font-heading text-2xl uppercase tracking-tight mb-2">Technical Embroidery</h3>
<p className="font-mono text-xs opacity-60 max-w-[200px]">3D Puff, flat stitch, and chenille embroidery with Tajima machines.</p>
</div>
</div>

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 cursor-hover">
<div className="flex justify-between items-start">
<span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">03</span>
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h3 className="font-heading text-2xl uppercase tracking-tight mb-2">Cut &amp; Sew</h3>
<p className="font-mono text-xs opacity-60 max-w-[200px]">Full garment construction. Pattern making to final stitching.</p>
</div>
</div>

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 cursor-hover">
<div className="flex justify-between items-start">
<span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">04</span>
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h3 className="font-heading text-2xl uppercase tracking-tight mb-2">Fabric Dyeing</h3>
<p className="font-mono text-xs opacity-60 max-w-[200px]">Custom Pantone matching. Acid wash, pigment dye, and enzyme wash.</p>
</div>
</div>

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-between hover:bg-black hover:text-white transition-colors duration-300 cursor-hover">
<div className="flex justify-between items-start">
<span className="font-mono text-xs border border-current px-2 py-0.5 rounded-full">05</span>
<span className="iconify opacity-0 group-hover:opacity-100 transition-opacity" data-icon="lucide:arrow-up-right" data-width="20"></span>
</div>
<div>
<h3 className="font-heading text-2xl uppercase tracking-tight mb-2">DTF &amp; Sublimation</h3>
<p className="font-mono text-xs opacity-60 max-w-[200px]">Photorealistic prints on any fabric. Durable and vibrant.</p>
</div>
</div>

<div className="group border-black p-8 lg:p-12 min-h-[300px] flex flex-col justify-center items-center bg-black text-white hover:bg-[#FF4D00] transition-colors duration-300 cursor-hover">
<a className="text-center" href="#contact">
<span className="iconify mx-auto mb-4" data-icon="lucide:plus" data-width="32"></span>
<h3 className="font-heading text-xl uppercase tracking-tight">View Full Catalog</h3>
</a>
</div>
</div>
</section>

<section className="relative" id="process">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="hidden lg:flex flex-col justify-between h-screen sticky top-0 p-12 border-r border-black">
<div>
<span className="font-mono text-xs uppercase tracking-widest text-gray-400">The Workflow</span>
<h2 className="font-heading text-6xl mt-6 uppercase tracking-tighter leading-[0.9]">
                            Streamlined<br/>Production<br/>Cycle
                        </h2>
</div>
<div>
<p className="font-mono text-sm max-w-sm text-gray-500 mb-8">
                            We have optimized the manufacturing process to minimize lead times while maximizing quality control checkpoints.
                        </p>
<a className="cursor-hover px-8 py-4 bg-black text-white text-sm font-mono uppercase tracking-wide inline-flex items-center gap-3 hover:bg-[#FF4D00] transition-colors" href="#contact">
                            Start Order <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</div>

<div className="flex flex-col">

<div className="min-h-[50vh] border-b border-black p-8 lg:p-16 flex flex-col justify-center bg-white">
<div className="flex items-baseline gap-4 mb-6">
<span className="font-heading text-6xl font-bold text-gray-200">01</span>
<h3 className="font-heading text-3xl uppercase">Design &amp; Tech Pack</h3>
</div>
<p className="font-mono text-sm text-gray-600 max-w-md leading-relaxed">
                            Submit your designs. We convert your vision into a professional technical packet containing fabric specs, measurements, and trim details.
                        </p>
</div>

<div className="min-h-[50vh] border-b border-black p-8 lg:p-16 flex flex-col justify-center bg-[#FAFAFA]">
<div className="flex items-baseline gap-4 mb-6">
<span className="font-heading text-6xl font-bold text-gray-200">02</span>
<h3 className="font-heading text-3xl uppercase">Sampling</h3>
</div>
<p className="font-mono text-sm text-gray-600 max-w-md leading-relaxed">
                            We create a physical prototype for your approval. Check the fit, feel, and print quality before committing to bulk production.
                        </p>
</div>

<div className="min-h-[50vh] border-b border-black p-8 lg:p-16 flex flex-col justify-center bg-white">
<div className="flex items-baseline gap-4 mb-6">
<span className="font-heading text-6xl font-bold text-gray-200">03</span>
<h3 className="font-heading text-3xl uppercase">Production</h3>
</div>
<p className="font-mono text-sm text-gray-600 max-w-md leading-relaxed">
                            Fabric cutting, sewing, and finishing. Our QC team inspects every single garment during line production.
                        </p>
</div>

<div className="min-h-[50vh] border-b border-black p-8 lg:p-16 flex flex-col justify-center bg-[#FAFAFA]">
<div className="flex items-baseline gap-4 mb-6">
<span className="font-heading text-6xl font-bold text-gray-200">04</span>
<h3 className="font-heading text-3xl uppercase">Global Logistics</h3>
</div>
<p className="font-mono text-sm text-gray-600 max-w-md leading-relaxed">
                            We handle customs and shipping. Your order arrives at your doorstep, individually bagged and ready for retail.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-b border-black overflow-hidden">
<div className="px-6 mb-16 flex items-end justify-between">
<h2 className="font-heading text-5xl uppercase tracking-tighter">Essential<br/>Blanks</h2>
<a className="font-mono text-xs uppercase border-b border-black pb-1 hidden md:block" href="#">Download Catalog (PDF)</a>
</div>
<div className="flex overflow-x-auto snap-x gap-6 px-6 pb-8 no-scrollbar">

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-hover">
<div className="h-[500px] overflow-hidden border border-black relative mb-4">
<img alt="T-Shirt" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?q=80&amp;w=1780&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-heading text-lg uppercase">Heavyweight Tee</h4>
<p className="font-mono text-xs text-gray-500">240GSM • 100% Cotton</p>
</div>
<span className="font-mono text-xs border border-black px-2 rounded-full">New</span>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-hover">
<div className="h-[500px] overflow-hidden border border-black relative mb-4">
<img alt="Hoodie" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1556906781-9a412961d28c?q=80&amp;w=1887&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-heading text-lg uppercase">Oversized Hoodie</h4>
<p className="font-mono text-xs text-gray-500">450GSM • French Terry</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-hover">
<div className="h-[500px] overflow-hidden border border-black relative mb-4">
<img alt="Jacket" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1591047139829-d91aecb6caea?q=80&amp;w=1936&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-heading text-lg uppercase">Coach Jacket</h4>
<p className="font-mono text-xs text-gray-500">Nylon Shell • Mesh Lining</p>
</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] snap-center group cursor-hover">
<div className="h-[500px] overflow-hidden border border-black relative mb-4 flex items-center justify-center bg-gray-50">
<span className="font-heading text-4xl text-gray-300 uppercase">Custom<br/>Fit</span>
</div>
<div className="flex justify-between items-start">
<div>
<h4 className="font-heading text-lg uppercase">Your Tech Pack</h4>
<p className="font-mono text-xs text-gray-500">Fully Custom Dimensions</p>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-black text-white pt-24 pb-8 px-6">
<div className="max-w-[1600px] mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 border-b border-white/20 pb-24">
<div>
<h2 className="font-heading text-5xl md:text-7xl uppercase tracking-tighter leading-none mb-8">
                            Let's Build<br/>Your Brand
                        </h2>
<p className="font-mono text-sm text-gray-400 max-w-md">
                            Ready to scale? Our team is ready to analyze your requirements and provide a detailed production plan.
                        </p>
</div>
<div className="flex flex-col justify-end items-start lg:items-end">
<a className="cursor-hover group relative overflow-hidden bg-white text-black px-12 py-6 rounded-full font-mono text-sm uppercase tracking-wide font-bold" href="#">
<span className="relative z-10">Get a Quote</span>
<div className="absolute inset-0 bg-[#FF4D00] transform translate-y-full transition-transform duration-300 group-hover:translate-y-0"></div>
</a>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12">
<div>
<h5 className="font-mono text-xs text-gray-500 uppercase mb-4">Socials</h5>
<ul className="space-y-2 font-heading text-lg">
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">Instagram</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">LinkedIn</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs text-gray-500 uppercase mb-4">Company</h5>
<ul className="space-y-2 font-heading text-lg">
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">About</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">Careers</a></li>
</ul>
</div>
<div>
<h5 className="font-mono text-xs text-gray-500 uppercase mb-4">Legal</h5>
<ul className="space-y-2 font-heading text-lg">
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">Terms</a></li>
<li><a className="hover:text-[#FF4D00] transition-colors cursor-hover" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="flex justify-between items-end pt-8 font-mono text-[10px] text-gray-600 uppercase">
<span>©2026 CustomClothing.PK</span>
<span>Designed for Excellence</span>
</div>
</div>
</footer>
</main>


    </>
  );
}
