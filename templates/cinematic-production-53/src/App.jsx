import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            const elements = document.querySelectorAll('.reveal-element');
            elements.forEach(el => observer.observe(el));

            // Auto resize textarea
            const tx = document.getElementsByTagName("textarea");
            for (let i = 0; i < tx.length; i++) {
                tx[i].setAttribute("style", "height:" + (tx[i].scrollHeight) + "px;overflow-y:hidden;");
                tx[i].addEventListener("input", OnInput, false);
            }
            function OnInput() {
                this.style.height = "auto";
                this.style.height = (this.scrollHeight) + "px";
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-[#f5f5f7]/80 backdrop-blur-md border-b border-neutral-200/50 transition-all duration-500">
<div className="flex h-14 max-w-screen-xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">
<a className="text-lg font-medium tracking-tighter z-50 relative group" href="#">
                A29<span className="text-neutral-400">MEDIA</span>
</a>
<div className="hidden md:flex space-x-8 text-xs font-medium tracking-wide text-neutral-500">
<a className="hover:text-black transition-colors duration-300" href="#work">Work</a>
<a className="hover:text-black transition-colors duration-300" href="#services">Services</a>
<a className="hover:text-black transition-colors duration-300" href="#contact">Contact</a>
</div>
<button className="md:hidden text-neutral-800">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<section className="min-h-screen flex flex-col overflow-hidden pt-32 pr-6 pl-6 relative items-center justify-center">
<div className="z-10 text-center max-w-5xl mr-auto ml-auto">

<div className="reveal-element flex justify-center mb-8">
<a className="group inline-flex items-center gap-x-2 transition-colors hover:border-neutral-300 hover:text-neutral-900 hover:bg-white hover:shadow text-xs font-medium text-neutral-600 bg-white/50 border-neutral-200 border rounded-full pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm backdrop-blur-sm" href="/#contact">
<span className="flex h-1.5 w-1.5 rounded-full bg-neutral-400 group-hover:bg-[#1d1d1f] transition-colors"></span>
<span className="">Now booking for Q1 2026</span>
<iconify-icon className="ml-1 transition-transform group-hover:translate-x-0.5" height="12" icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<h1 className="reveal-element delay-100 md:text-7xl lg:text-8xl leading-[1.1] text-5xl font-medium text-[#1d1d1f] tracking-tighter mb-6">Your Cinematic Partner</h1>
<p className="reveal-element delay-200 md:text-2xl leading-relaxed text-lg font-light text-neutral-500 tracking-tight max-w-2xl mr-auto mb-12 ml-auto">We craft high-end commercial films for brands that value clarity and precision</p>
<div className="reveal-element delay-300">
<a className="inline-flex items-center gap-2 bg-[#1d1d1f] text-white px-6 py-3 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300 transform hover:scale-[1.02]" href="#work">
<span className="">View Showreel</span>
<iconify-icon height="18" icon="solar:play-circle-linear" width="18"></iconify-icon>
</a>
</div>
</div>

<div className="reveal-element delay-300 mt-16 w-full max-w-6xl aspect-video rounded-2xl overflow-hidden shadow-2xl relative group">
<div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors duration-700 z-10"></div>
<img alt="Cinematic production set" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-[1.5s] ease-out grayscale-[20%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 z-20 text-white">
<p className="text-xs uppercase tracking-widest font-medium opacity-80 mb-1">Latest Film</p>
<p className="text-xl tracking-tight font-medium">Lumina / The Future of Light</p>
</div>
</div>
</section>

<section className="bg-white pt-32 pr-6 pb-32 pl-6" id="work">
<div className="max-w-screen-xl mr-auto ml-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-element">
<h2 className="text-4xl md:text-5xl font-medium tracking-tighter text-[#1d1d1f]">Selected Work.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer reveal-element">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 mb-6 relative">
<img alt="Fashion Commercial" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1616469829941-c7200edec809?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-[#1d1d1f]">Aesop / Ethereal</h3>
<p className="text-sm text-neutral-500">Brand Campaign</p>
</div>
<span className="text-xs border border-neutral-200 px-2 py-1 rounded text-neutral-500 group-hover:border-neutral-900 group-hover:text-black transition-colors">2023</span>
</div>
</div>

<div className="group cursor-pointer reveal-element delay-100 md:mt-24">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 mb-6 relative">
<img alt="Tech Product" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div className="">
<h3 className="text-xl font-medium tracking-tight mb-1 text-[#1d1d1f]">Apex / Unbox</h3>
<p className="text-sm text-neutral-500">Product Commercial</p>
</div>
<span className="text-xs border border-neutral-200 px-2 py-1 rounded text-neutral-500 group-hover:border-neutral-900 group-hover:text-black transition-colors">2024</span>
</div>
</div>

<div className="group cursor-pointer reveal-element">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 mb-6 relative">
<img alt="Automotive" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0" src="https://images.unsplash.com/photo-1533750516457-a7f992034fec?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-[#1d1d1f]">Polestar / Motion</h3>
<p className="text-sm text-neutral-500">TV Spot</p>
</div>
<span className="text-xs border border-neutral-200 px-2 py-1 rounded text-neutral-500 group-hover:border-neutral-900 group-hover:text-black transition-colors">2023</span>
</div>
</div>

<div className="group cursor-pointer reveal-element delay-100 md:mt-24">
<div className="aspect-[4/3] w-full overflow-hidden rounded-lg bg-neutral-100 mb-6 relative">
<img alt="Lifestyle" className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-700 ease-out grayscale-[10%] group-hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 text-[#1d1d1f]">Oura / Balance</h3>
<p className="text-sm text-neutral-500">Social Campaign</p>
</div>
<span className="text-xs border border-neutral-200 px-2 py-1 rounded text-neutral-500 group-hover:border-neutral-900 group-hover:text-black transition-colors">2024</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#f5f5f7] pt-32 pr-6 pb-32 pl-6" id="services">
<div className="max-w-screen-xl mx-auto">
<div className="max-w-xl mb-24 reveal-element">
<span className="text-xs font-semibold tracking-widest text-neutral-500 uppercase mb-4 block">Expertise</span>
<h2 className="md:text-5xl leading-tight text-3xl font-medium text-[#1d1d1f] tracking-tighter" style={{}}>End-to-End Production</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-12">

<div className="reveal-element group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-neutral-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:videocamera-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1d1d1f] tracking-tight mb-3" style={{}}>Brand Films</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        High-fidelity films that define identity. We handle everything from creative direction to final master, ensuring the brand voice resonates.
                    </p>
</div>

<div className="reveal-element delay-100 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-neutral-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="" height="24" icon="solar:clapperboard-edit-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1d1d1f] tracking-tight mb-3" style={{}}>Campaign Ads</h3>
<p className="leading-relaxed text-sm text-neutral-500">
                        Strategic visual assets designed for performance. Short-form, impactful content tailored for digital and broadcast ecosystems.
                    </p>
</div>

<div className="reveal-element delay-200 group">
<div className="w-12 h-12 bg-white rounded-xl flex items-center justify-center mb-6 shadow-sm text-neutral-900 group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:box-minimalistic-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-[#1d1d1f] tracking-tight mb-3" style={{}}>Product Films</h3>
<p className="text-sm text-neutral-500 leading-relaxed">
                        Cinematic macro-videography and technical motion control to showcase product design with absolute precision and elegance.
                    </p>
</div>
</div>
</div>
</section>


<section className="bg-[#f5f5f7] pt-32 pr-6 pb-32 pl-6" id="contact">
<div className="max-w-lg mx-auto">
<div className="text-center mb-16 reveal-element">
<h2 className="text-3xl md:text-5xl font-medium tracking-tighter text-[#1d1d1f] mb-4">Start a conversation.</h2>
<p className="text-neutral-500 font-light">Tell us about your next project.</p>
</div>
<form className="space-y-8 reveal-element delay-100">
<div className="relative group">
<input className="peer block w-full bg-transparent border-0 border-b border-neutral-300 py-3 text-[#1d1d1f] focus:ring-0 text-lg placeholder-transparent custom-focus transition-colors duration-300" id="name" required="" type="text"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-600" htmlFor="name">
                        Name
                    </label>
<div className="h-px w-full bg-[#1d1d1f] origin-left transform scale-x-0 transition-transform duration-300"></div>
</div>
<div className="relative group">
<input className="peer block w-full bg-transparent border-0 border-b border-neutral-300 py-3 text-[#1d1d1f] focus:ring-0 text-lg placeholder-transparent custom-focus transition-colors duration-300" id="email" required="" type="email"/>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-600" htmlFor="email">
                        Email Address
                    </label>
<div className="h-px w-full bg-[#1d1d1f] origin-left transform scale-x-0 transition-transform duration-300"></div>
</div>
<div className="relative group">
<textarea className="peer block w-full bg-transparent border-0 border-b border-neutral-300 py-3 text-[#1d1d1f] focus:ring-0 text-lg placeholder-transparent custom-focus resize-none transition-colors duration-300" id="message" required="" rows="1" style={{height: '52px', overflowY: 'hidden'}}></textarea>
<label className="absolute left-0 -top-3.5 text-xs text-neutral-400 transition-all peer-placeholder-shown:text-lg peer-placeholder-shown:text-neutral-400 peer-placeholder-shown:top-3 peer-focus:-top-3.5 peer-focus:text-xs peer-focus:text-neutral-600" htmlFor="message">
                        Project Details
                    </label>
<div className="h-px w-full bg-[#1d1d1f] origin-left transform scale-x-0 transition-transform duration-300"></div>
</div>
<div className="pt-8 text-center">
<button className="bg-[#1d1d1f] text-white px-10 py-4 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-300 shadow-lg hover:shadow-xl hover:-translate-y-1" type="button">
                        Send Inquiry
                    </button>
</div>
</form>
</div>
</section>

<footer className="bg-white py-12 px-6 border-t border-neutral-100">
<div className="max-w-screen-xl mx-auto flex flex-col md:flex-row justify-between items-center text-xs text-neutral-400 font-medium">
<div className="md:mb-0 mb-4" style={{}}>© 2026 A29 Media Inc. All rights reserved.</div>
<div className="flex space-x-6">
<a className="hover:text-neutral-900 transition-colors" href="#">Instagram</a>
<a className="hover:text-neutral-900 transition-colors" href="#">Vimeo</a>
<a className="hover:text-neutral-900 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>



    </>
  );
}
