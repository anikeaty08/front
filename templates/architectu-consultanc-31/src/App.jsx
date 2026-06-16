import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-1" href="#">
                ARC.
            </a>

<div className="hidden md:flex items-center space-x-8 text-sm font-medium text-zinc-500">
<a className="hover:text-black transition-colors" href="#work">Selected Work</a>
<a className="hover:text-black transition-colors" href="#services">Expertise</a>
<a className="hover:text-black transition-colors" href="#studio">The Studio</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium bg-zinc-900 text-white px-4 py-2 rounded-full hover:bg-zinc-800 transition-all hover:scale-[1.02]" href="#contact">
<span>Inquire</span>
<iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>

<button className="md:hidden text-zinc-900">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto">
<div className="max-w-4xl">
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight leading-[1.1] mb-8 text-zinc-900">
                Defining space through<br/>
<span className="text-zinc-400">precision and light.</span>
</h1>
<p className="text-lg md:text-xl text-zinc-500 max-w-2xl font-light leading-relaxed mb-10">
                ARC. is a global architectural consultancy crafting sustainable, visionary environments that harmonize function with aesthetic purity.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 bg-zinc-900 text-white rounded-md text-sm font-medium hover:bg-zinc-800 transition-colors" href="#work">
                    View Projects
                    <iconify-icon height="18" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 px-6 py-3 border border-zinc-200 text-zinc-700 rounded-md text-sm font-medium hover:bg-zinc-50 transition-colors" href="#studio">
                    Our Philosophy
                </a>
</div>
</div>
</header>

<section className="w-full overflow-hidden px-6 pb-24">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-4 h-[500px] md:h-[600px]">

<div className="md:col-span-8 h-full rounded-lg overflow-hidden relative group">
<img alt="Modern Concrete Architecture" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 text-white">
<span className="text-xs uppercase tracking-widest opacity-80 mb-1 block">Tokyo, Japan</span>
<h3 className="text-xl font-medium tracking-tight">The Stone House</h3>
</div>
</div>

<div className="md:col-span-4 flex flex-col gap-4 h-full">
<div className="h-1/2 rounded-lg overflow-hidden relative group">
<img alt="Minimalist Interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1486718448742-163732cd1544?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="h-1/2 rounded-lg bg-zinc-50 border border-zinc-100 p-8 flex flex-col justify-between">
<iconify-icon className="text-zinc-900" height="32" icon="solar:compass-big-linear" strokeWidth="1.5" width="32"></iconify-icon>
<div>
<div className="text-3xl font-medium tracking-tight mb-1">140+</div>
<div className="text-sm text-zinc-500">Global Projects Completed</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/50 border-t border-zinc-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div className="max-w-lg">
<h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-3">Expertise</h2>
<h3 className="text-3xl font-medium tracking-tight text-zinc-900">Comprehensive design solutions from concept to construction.</h3>
</div>
<a className="text-sm font-medium text-zinc-900 flex items-center gap-1 hover:text-zinc-600 transition-colors" href="#">
                    All Services <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white border border-zinc-100 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:buildings-2-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-3">Architectural Design</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Full-scale building design focusing on structural integrity, environmental integration, and modernist aesthetics.
                    </p>
</div>

<div className="group p-8 bg-white border border-zinc-100 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-3">Interior Planning</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Curating internal spaces that maximize flow, light, and material tactility for residential and commercial use.
                    </p>
</div>

<div className="group p-8 bg-white border border-zinc-100 rounded-lg hover:border-zinc-300 hover:shadow-sm transition-all duration-300">
<div className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center mb-6 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:leaf-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-medium tracking-tight mb-3">Sustainable Urbanism</h4>
<p className="text-sm text-zinc-500 leading-relaxed">
                        Eco-centric planning and consulting to reduce carbon footprints and enhance community well-being.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="work">
<h2 className="text-sm font-semibold uppercase tracking-widest text-zinc-400 mb-12">Selected Projects</h2>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16">

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-6 aspect-[4/3]">
<img alt="Project 1" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-zinc-600 transition-colors">Vertex Tower</h3>
<p className="text-sm text-zinc-400">Commercial / London</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="overflow-hidden rounded-lg mb-6 aspect-[4/3]">
<img alt="Project 2" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1628744448840-55bdb2497bd4?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-zinc-600 transition-colors">Olema Residence</h3>
<p className="text-sm text-zinc-400">Residential / California</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer">
<div className="overflow-hidden rounded-lg mb-6 aspect-[4/3]">
<img alt="Project 3" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-zinc-600 transition-colors">Nordic Museum</h3>
<p className="text-sm text-zinc-400">Cultural / Oslo</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="overflow-hidden rounded-lg mb-6 aspect-[4/3]">
<img alt="Project 4" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1487958449943-2429e8be8625?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex justify-between items-start">
<div>
<h3 className="text-xl font-medium tracking-tight mb-1 group-hover:text-zinc-600 transition-colors">The Void</h3>
<p className="text-sm text-zinc-400">Installation / Berlin</p>
</div>
<iconify-icon className="text-zinc-300 group-hover:text-zinc-900 transition-colors" height="20" icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-950 text-white" id="studio">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-6 leading-snug">
                    Architecture is not just about shelter. It is about the <span className="text-zinc-500">choreography of life</span>.
                </h2>
<div className="flex flex-col gap-6 text-zinc-400 text-sm leading-relaxed max-w-md">
<p>
                        We believe in a reductive approach—removing the non-essential to reveal the essence of a structure. Our practice is rooted in a deep understanding of materials, context, and the human condition.
                    </p>
<p>
                        From private residences to public institutions, we apply the same rigour: calculating light paths, testing material longevity, and ensuring every line serves a purpose.
                    </p>
</div>
<div className="mt-10 grid grid-cols-2 gap-6">
<div>
<div className="text-2xl font-medium tracking-tight text-white">2008</div>
<div className="text-xs text-zinc-500 mt-1">Year Established</div>
</div>
<div>
<div className="text-2xl font-medium tracking-tight text-white">4</div>
<div className="text-xs text-zinc-500 mt-1">Global Offices</div>
</div>
</div>
</div>
<div className="h-full min-h-[400px] relative rounded-lg overflow-hidden border border-zinc-800">
<img alt="Studio Meeting" className="absolute inset-0 w-full h-full object-cover opacity-60 grayscale" src="https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto" id="contact">
<div className="text-center mb-12">
<h2 className="text-3xl font-medium tracking-tight mb-4">Start a Project</h2>
<p className="text-zinc-500">Tell us about your vision. We'll build the foundation.</p>
</div>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wide" htmlFor="name">Name</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 focus:border-zinc-900 transition-colors placeholder:text-zinc-300" id="name" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wide" htmlFor="email">Email</label>
<input className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 focus:border-zinc-900 transition-colors placeholder:text-zinc-300" id="email" placeholder="jane@company.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wide" htmlFor="interest">Project Type</label>
<div className="relative">
<select className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 focus:border-zinc-900 transition-colors appearance-none text-zinc-700" id="interest">
<option>Residential Architecture</option>
<option>Commercial Development</option>
<option>Interior Design</option>
<option>Urban Planning</option>
</select>
<div className="absolute right-4 top-1/2 -translate-y-1/2 pointer-events-none text-zinc-400">
<iconify-icon height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase text-zinc-500 tracking-wide" htmlFor="message">Message</label>
<textarea className="w-full bg-zinc-50 border border-zinc-200 rounded-md px-4 py-3 text-sm focus:outline-none focus:ring-0 focus:border-zinc-900 transition-colors placeholder:text-zinc-300 resize-none" id="message" placeholder="Briefly describe your project needs..." rows="4"></textarea>
</div>
<div className="pt-4 flex items-center justify-between">
<div className="flex items-center gap-2">

<label className="inline-flex items-center cursor-pointer group">
<input className="peer sr-only" type="checkbox"/>
<span className="w-4 h-4 border border-zinc-300 rounded-sm peer-checked:bg-zinc-900 peer-checked:border-zinc-900 transition-all flex items-center justify-center">
<iconify-icon className="text-white opacity-0 peer-checked:opacity-100" icon="solar:check-read-linear" width="12"></iconify-icon>
</span>
<span className="ml-2 text-xs text-zinc-500 group-hover:text-zinc-800">Subscribe to newsletter</span>
</label>
</div>
<button className="bg-zinc-900 text-white px-8 py-3 rounded-md text-sm font-medium hover:bg-zinc-800 transition-all hover:scale-[1.01] shadow-sm" type="button">
                    Send Inquiry
                </button>
</div>
</form>
</section>

<footer className="border-t border-zinc-100 py-12 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-2">
<span className="text-lg font-semibold tracking-tighter uppercase">ARC.</span>
<span className="text-xs text-zinc-400">© 2024 ARC Consultancy. All rights reserved.</span>
</div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-instagram-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-twitter-linear" width="20"></iconify-icon>
</a>
<a className="text-zinc-400 hover:text-zinc-900 transition-colors" href="#">
<iconify-icon height="20" icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
</div>
<div className="flex gap-6 text-xs font-medium text-zinc-500">
<a className="hover:text-zinc-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Terms</a>
<a className="hover:text-zinc-900 transition-colors" href="#">Sitemap</a>
</div>
</div>
</footer>

    </>
  );
}
