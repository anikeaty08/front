import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
serif: ['"Playfair Display"', 'serif'],
sans: ['"Inter"', 'sans-serif'],
},
colors: {
stone: {
50: '#FAF9F6', /* Off-white / Paper */
100: '#F5F5F4',
200: '#E7E5E4',
300: '#D6D3D1',
400: '#A8A29E',
500: '#78716C',
600: '#57534E',
800: '#292524',
900: '#1C1917', /* Deep Charcoal */
}
}
}
}
}



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
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-stone-50/90 backdrop-blur-sm transition-all duration-500 py-6 md:py-8 px-6 md:px-12 lg:px-24 flex justify-between items-center">
<a className="hover:opacity-70 transition-opacity text-xl tracking-tighter font-serif" href="#">IV STUDIO</a>
<div className="hidden md:flex items-center gap-12 text-sm font-light tracking-wide text-stone-600">
<a className="hover:text-stone-900 transition-colors" href="#services">Services</a>
<a className="hover:text-stone-900 transition-colors" href="#work">Selected Work</a>
<a className="hover:text-stone-900 transition-colors" href="#process">Process</a>
<a className="hover:text-stone-900 transition-colors" href="#contact">Contact</a>
</div>
<button className="md:hidden">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</nav>

<header className="md:pt-48 md:pb-24 md:px-12 lg:px-24 min-h-screen flex flex-col pt-32 pr-6 pb-16 pl-6 relative justify-between">
<div className="max-w-4xl reveal-on-scroll reveal-visible">
<h1 className="md:text-7xl lg:text-8xl leading-[1.1] text-5xl text-stone-900 tracking-tight font-serif mb-8">
                Visual narratives for <br/> spaces and products.
            </h1>
<p className="font-light text-stone-600 text-lg md:text-xl max-w-xl leading-relaxed mb-12">
                A boutique visual studio creating photorealistic imagery for interior design, real estate and product brands.
            </p>
<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center">
<a className="group inline-flex items-center gap-2 border-b border-stone-900 pb-1 text-sm tracking-wide uppercase hover:opacity-60 transition-all duration-300" href="#work">
                    View selected work
                    <iconify-icon className="transform group-hover:translate-x-1 transition-transform duration-300" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="hover:text-stone-900 transition-colors text-sm text-stone-500 tracking-wide" href="#contact">Start a project</a>
</div>
</div>

<div className="w-full h-[50vh] md:h-[60vh] mt-16 md:mt-24 overflow-hidden reveal-on-scroll reveal-visible">
<img alt="Minimalist Interior Space" className="w-full h-full object-cover object-center grayscale-[20%] hover:scale-105 transition-transform duration-[2000ms] ease-out" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24 bg-stone-50">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4 hidden md:block">
<span className="text-xs uppercase tracking-widest text-stone-400">About IV Studio</span>
</div>
<div className="md:col-span-8 reveal-on-scroll">
<p className="font-serif text-2xl md:text-4xl leading-relaxed text-stone-800 tracking-tight">
                    IV Studio collaborates with designers, brands and property professionals to create refined, realistic visuals that help communicate ideas, reveal potential and elevate products. Our work blends creative direction with AI-powered production to deliver high-end imagery without traditional limitations.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 border-t border-stone-200" id="services">
<div className="grid grid-cols-1 md:grid-cols-3 gap-16 md:gap-8 lg:gap-16">

<div className="flex flex-col gap-4 reveal-on-scroll delay-100">
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Interior Visualization</h3>
<p className="font-light text-stone-500 leading-relaxed text-sm md:text-base">
                    Concept-driven interior scenes that communicate atmosphere, materials and spatial intent. We focus on light and texture to evoke emotion.
                </p>
</div>

<div className="flex flex-col gap-4 reveal-on-scroll delay-200">
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Real Estate Before / After</h3>
<p className="font-light text-stone-500 leading-relaxed text-sm md:text-base">
                    Visual transformations that help buyers imagine the potential of a space without physical renovation. Staging the unbuilt with precision.
                </p>
</div>

<div className="flex flex-col gap-4 reveal-on-scroll delay-300">
<h3 className="font-serif text-2xl tracking-tight text-stone-900">Product Integration</h3>
<p className="font-light text-stone-500 leading-relaxed text-sm md:text-base">
                    Thoughtful placement of furniture, lighting and decor into curated environments. We create the perfect context for your brand narratives.
                </p>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24" id="work">
<div className="flex justify-between items-end mb-16 md:mb-24">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight">Selected Work</h2>
<div className="hidden md:flex gap-6 text-sm text-stone-400">
<span className="text-stone-900 cursor-pointer">All</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Interior</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Real Estate</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Product</span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-y-24 gap-x-12">

<div className="group cursor-pointer reveal-on-scroll">
<div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
<img alt="Copenhagen Penthouse" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h4 className="font-serif text-xl tracking-tight group-hover:opacity-70 transition-opacity">Copenhagen Penthouse</h4>
<span className="text-xs text-stone-500 mt-1 font-light tracking-wide">Interior Visualization</span>
</div>
</div>

<div className="group cursor-pointer md:mt-32 reveal-on-scroll">
<div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
<img alt="Form &amp; Light Study" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex flex-col">
<h4 className="font-serif text-xl tracking-tight group-hover:opacity-70 transition-opacity">Form &amp; Light Study</h4>
<span className="text-xs text-stone-500 mt-1 font-light tracking-wide">Product Integration</span>
</div>
</div>

<div className="group cursor-pointer reveal-on-scroll">
<div className="w-full aspect-square overflow-hidden mb-6 bg-stone-200">
<img alt="Villa renovation concept" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1556228453-efd6c1ff04f6?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h4 className="font-serif text-xl tracking-tight group-hover:opacity-70 transition-opacity">Villa Renovation Concept</h4>
<span className="text-xs text-stone-500 mt-1 font-light tracking-wide">Real Estate Before / After</span>
</div>
</div>

<div className="group cursor-pointer md:mt-32 reveal-on-scroll">
<div className="w-full aspect-[4/5] overflow-hidden mb-6 bg-stone-200">
<img alt="Textural Narratives" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1507089947368-19c1da9775ae?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex flex-col">
<h4 className="font-serif text-xl tracking-tight group-hover:opacity-70 transition-opacity">Textural Narratives</h4>
<span className="text-xs text-stone-500 mt-1 font-light tracking-wide">Editorial Campaign</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 bg-stone-100" id="process">
<div className="max-w-6xl mx-auto">
<div className="mb-16 reveal-on-scroll">
<h2 className="font-serif text-3xl md:text-4xl tracking-tight mb-6">Our Process</h2>
<p className="font-light text-stone-500 max-w-xl">We keep the process collaborative, flexible and focused on quality.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-5 gap-8 border-t border-stone-300 pt-8 reveal-on-scroll">
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-mono">01</span>
<span className="text-sm font-medium text-stone-800">Visual direction &amp; brief</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-mono">02</span>
<span className="text-sm font-medium text-stone-800">Concept development</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-mono">03</span>
<span className="text-sm font-medium text-stone-800">Image creation</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-mono">04</span>
<span className="text-sm font-medium text-stone-800">Refinement</span>
</div>
<div className="flex flex-col gap-2">
<span className="text-xs text-stone-400 font-mono">05</span>
<span className="text-sm font-medium text-stone-800">Delivery</span>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 lg:px-24" id="contact">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 md:gap-24">
<div className="reveal-on-scroll">
<h2 className="font-serif text-4xl md:text-5xl tracking-tight mb-6">Let’s talk about your project.</h2>
<p className="font-light text-stone-500 max-w-sm leading-relaxed mb-8">
                    We are currently accepting new commissions for the upcoming quarter. Tell us a bit about your vision.
                </p>
<div className="flex flex-col gap-1 text-sm text-stone-800">
<a className="hover:opacity-60 transition-opacity" href="mailto:hello@ivstudio.com">hello@ivstudio.com</a>
<span>London, UK</span>
</div>
</div>
<form className="flex flex-col gap-8 reveal-on-scroll delay-100">
<div>
<input className="editorial-input" placeholder="Name" required="" type="text"/>
</div>
<div>
<input className="editorial-input" placeholder="Email" required="" type="email"/>
</div>
<div>
<div className="relative">
<select className="editorial-input appearance-none bg-transparent cursor-pointer" style={{color: '#A8A29E'}}>
<option>Project Type</option>
<option>Interior Visualization</option>
<option>Real Estate Marketing</option>
<option>Product Imagery</option>
<option>Other</option>
</select>
<iconify-icon className="absolute right-0 top-1/2 -translate-y-1/2 text-stone-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div>
<textarea className="editorial-input resize-none" oninput="this.style.height = ''; this.style.height = this.scrollHeight + 'px'" placeholder="Message" rows="1"></textarea>
</div>
<button className="self-start mt-4 px-8 py-3 border border-stone-200 text-stone-900 text-sm tracking-wide hover:bg-stone-900 hover:text-stone-50 transition-all duration-500" type="submit">
                    Send Inquiry
                </button>
</form>
</div>
</section>

<footer className="py-12 px-6 md:px-12 lg:px-24 border-t border-stone-100 mt-12">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6">
<div className="flex flex-col gap-1">
<span className="font-serif text-lg tracking-tighter text-stone-900">IV STUDIO</span>
<span className="text-xs text-stone-400 tracking-wide">Boutique interior visualization studio</span>
</div>
<div className="flex gap-6 items-center">
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
<a className="text-stone-400 hover:text-stone-900 transition-colors" href="#">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</div>
<div className="mt-12 text-[10px] text-stone-300 uppercase tracking-widest text-center md:text-left">
            © 2024 IV Studio. All rights reserved.
        </div>
</footer>



    </>
  );
}
