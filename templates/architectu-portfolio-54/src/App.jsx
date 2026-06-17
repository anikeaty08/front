import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple script to handle radio button visual state changes if needed beyond CSS
        const radioLabels = document.querySelectorAll('.custom-checkbox');
        radioLabels.forEach(label => {
            label.addEventListener('click', () => {
                // Reset all
                document.querySelectorAll('.custom-checkbox div').forEach(div => {
                    div.classList.remove('bg-white', 'border-white', 'text-slate-900');
                    div.classList.add('border-slate-700', 'text-slate-400');
                    div.querySelector('.iconify').classList.add('hidden');
                });
                
                // Set active
                const div = label.querySelector('div');
                div.classList.remove('border-slate-700', 'text-slate-400');
                div.classList.add('bg-white', 'border-white', 'text-slate-900');
                div.querySelector('.iconify').classList.remove('hidden');
            });
        });
        
        // Initialize first radio
        radioLabels[0].click();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 mix-blend-difference text-white w-full px-6 py-6 md:px-12 flex justify-between items-center transition-all duration-300">
<a className="text-lg tracking-tighter font-medium uppercase z-50" href="#">Sørensen.</a>
<div className="hidden md:flex gap-8 text-sm font-light tracking-wide">
<a className="hover:opacity-60 transition-opacity" href="#work">Selected Work</a>
<a className="hover:opacity-60 transition-opacity" href="#studio">Studio</a>
<a className="hover:opacity-60 transition-opacity" href="#contact">Contact</a>
</div>
<button className="md:hidden z-50">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24"></span>
</button>
</nav>

<header className="relative h-screen w-full flex flex-col justify-end pb-12 px-6 md:px-12 md:pb-24 overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="Modern Concrete Architecture" className="w-full h-full object-cover opacity-60" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2700&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-4xl">
<p className="text-slate-300 text-xs md:text-sm tracking-widest uppercase mb-4 md:mb-6 border-l border-slate-500 pl-4">Est. 2018 — Copenhagen</p>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-normal text-white tracking-tighter leading-[0.9]">
                Form follows <br/> <span className="text-slate-400">narrative.</span>
</h1>
</div>
<div className="absolute bottom-12 right-6 md:right-12 hidden md:block">
<a className="group flex items-center gap-3 text-white text-sm tracking-tight hover:text-slate-300 transition-colors" href="#work">
<span className="border rounded-full p-3 border-white/20 group-hover:border-white transition-colors">
<span className="iconify" data-icon="lucide:arrow-down" data-width="20"></span>
</span>
<span className="opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300">Explore Projects</span>
</a>
</div>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 bg-white" id="studio">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
<div className="lg:col-span-5 relative">
<div className="aspect-[3/4] overflow-hidden bg-slate-100">
<img alt="Architect Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700 ease-in-out" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="absolute -bottom-6 -right-6 bg-slate-100 p-6 max-w-xs hidden md:block">
<p className="text-xs text-slate-500 uppercase tracking-wider mb-2">The Architect</p>
<p className="font-medium text-slate-900 text-sm">Erik Sørensen</p>
<p className="text-slate-500 text-sm mt-1">Lead Principal &amp; Founder</p>
</div>
</div>
<div className="lg:col-span-7 flex flex-col justify-center h-full">
<h2 className="text-3xl md:text-5xl font-light tracking-tighter text-slate-900 mb-8 md:mb-12 leading-tight">
                    We build spaces that <br/> breathe and endure.
                </h2>
<div className="space-y-6 text-slate-600 font-light text-base md:text-lg leading-relaxed max-w-2xl">
<p>
                        Architecture is not merely about shelter; it is about the poetry of living. My approach is rooted in the Scandinavian tradition of functional minimalism, where every line serves a purpose and every material tells a story.
                    </p>
<p>
                        Since founding the studio, I have focused on residential and cultural projects that respect their environment. We strip away the non-essential to reveal the essence of the structure, creating silent backdrops for life's loudest moments.
                    </p>
</div>
<div className="mt-12 flex gap-8 border-t border-slate-200 pt-8">
<div>
<span className="block text-3xl font-light text-slate-900 tracking-tight">24</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Projects Completed</span>
</div>
<div>
<span className="block text-3xl font-light text-slate-900 tracking-tight">08</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Awards Won</span>
</div>
<div>
<span className="block text-3xl font-light text-slate-900 tracking-tight">04</span>
<span className="text-xs text-slate-500 uppercase tracking-widest mt-1 block">Countries</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-slate-50" id="work">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 md:mb-24 border-b border-slate-200 pb-8">
<h2 className="text-4xl md:text-6xl font-light tracking-tighter text-slate-900">Selected Works</h2>
<a className="hidden md:flex items-center gap-2 text-sm font-medium hover:text-slate-600 transition-colors mt-4 md:mt-0" href="#">
                View All Projects <span className="iconify" data-icon="lucide:arrow-up-right"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-8 gap-y-16 md:gap-y-24">

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 mb-6 relative">
<img alt="The Glass Pavilion" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-slate-300 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900">The Glass Pavilion</h3>
<p className="text-slate-500 text-sm mt-1 font-light">Oslo, Norway</p>
</div>
<span className="text-slate-400 text-xs font-mono mt-1">2023</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 mb-6 relative">
<img alt="Concrete House" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-slate-300 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900">Concrete House</h3>
<p className="text-slate-500 text-sm mt-1 font-light">Kyoto, Japan</p>
</div>
<span className="text-slate-400 text-xs font-mono mt-1">2022</span>
</div>
</div>

<div className="group cursor-pointer">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 mb-6 relative">
<img alt="Nordic Museum" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-slate-300 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900">Nordic Museum Extension</h3>
<p className="text-slate-500 text-sm mt-1 font-light">Stockholm, Sweden</p>
</div>
<span className="text-slate-400 text-xs font-mono mt-1">2021</span>
</div>
</div>

<div className="group cursor-pointer md:mt-24">
<div className="aspect-[4/3] overflow-hidden bg-slate-200 mb-6 relative">
<img alt="Hillside Retreat" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/0 group-hover:bg-slate-900/5 transition-colors duration-500"></div>
</div>
<div className="flex justify-between items-start border-t border-slate-300 pt-4">
<div>
<h3 className="text-xl md:text-2xl font-normal tracking-tight text-slate-900">Hillside Retreat</h3>
<p className="text-slate-500 text-sm mt-1 font-light">California, USA</p>
</div>
<span className="text-slate-400 text-xs font-mono mt-1">2020</span>
</div>
</div>
</div>
<div className="mt-16 md:hidden text-center">
<a className="inline-flex items-center gap-2 text-sm font-medium border-b border-slate-900 pb-1" href="#">
                View All Projects <span className="iconify" data-icon="lucide:arrow-right"></span>
</a>
</div>
</section>

<section className="bg-slate-900 text-slate-50 py-24 px-6 md:px-12" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32">

<div className="flex flex-col justify-between h-full">
<div>
<h2 className="text-4xl md:text-6xl font-light tracking-tighter mb-8">Start a project</h2>
<p className="text-slate-400 text-lg font-light max-w-md leading-relaxed">
                        We are currently accepting new residential and commercial commissions for 2024. Reach out to discuss your vision.
                    </p>
</div>
<div className="space-y-12 mt-16 lg:mt-0">
<div>
<p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Visit</p>
<p className="text-xl font-light">Bredgade 45, 2nd Floor</p>
<p className="text-xl font-light text-slate-400">1260 Copenhagen, Denmark</p>
</div>
<div>
<p className="text-xs text-slate-500 uppercase tracking-widest mb-4">Contact</p>
<a className="block text-xl font-light hover:text-slate-300 transition-colors" href="mailto:hello@sorensen.arch">hello@sorensen.arch</a>
<a className="block text-xl font-light text-slate-400 mt-1 hover:text-slate-300 transition-colors" href="tel:+4512345678">+45 12 34 56 78</a>
</div>
</div>
</div>

<form className="space-y-10 mt-8 lg:mt-0">
<div className="relative group">
<input className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" id="name" placeholder=" " required="" type="text"/>
<label className="peer-focus:font-medium absolute text-lg text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="name">Your Name</label>
</div>
<div className="relative group">
<input className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors" id="email" placeholder=" " required="" type="email"/>
<label className="peer-focus:font-medium absolute text-lg text-slate-500 duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="email">Email Address</label>
</div>
<div className="pt-4">
<p className="text-sm text-slate-500 uppercase tracking-widest mb-6">Project Type</p>
<div className="grid grid-cols-2 gap-4">
<label className="custom-checkbox cursor-pointer">
<input checked="" className="hidden" name="project_type" type="radio"/>
<div className="border border-slate-700 text-slate-400 py-3 px-4 rounded-sm flex items-center justify-between hover:border-slate-500 transition-colors">
<span className="text-sm font-medium">Residential</span>
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="16"></span>
</div>
</label>
<label className="custom-checkbox cursor-pointer">
<input className="hidden" name="project_type" type="radio"/>
<div className="border border-slate-700 text-slate-400 py-3 px-4 rounded-sm flex items-center justify-between hover:border-slate-500 transition-colors">
<span className="text-sm font-medium">Commercial</span>
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="16"></span>
</div>
</label>
<label className="custom-checkbox cursor-pointer">
<input className="hidden" name="project_type" type="radio"/>
<div className="border border-slate-700 text-slate-400 py-3 px-4 rounded-sm flex items-center justify-between hover:border-slate-500 transition-colors">
<span className="text-sm font-medium">Cultural</span>
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="16"></span>
</div>
</label>
<label className="custom-checkbox cursor-pointer">
<input className="hidden" name="project_type" type="radio"/>
<div className="border border-slate-700 text-slate-400 py-3 px-4 rounded-sm flex items-center justify-between hover:border-slate-500 transition-colors">
<span className="text-sm font-medium">Restoration</span>
<span className="iconify text-white hidden" data-icon="lucide:check" data-width="16"></span>
</div>
</label>
</div>
</div>
<div className="relative group pt-4">
<textarea className="block py-4 px-0 w-full text-lg text-white bg-transparent border-0 border-b border-slate-700 appearance-none focus:outline-none focus:ring-0 focus:border-white peer transition-colors resize-none" id="message" placeholder=" " rows="3"></textarea>
<label className="peer-focus:font-medium absolute text-lg text-slate-500 duration-300 transform -translate-y-6 scale-75 top-7 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-white peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6" htmlFor="message">Tell us about the project</label>
</div>
<div className="pt-6">
<button className="group flex items-center gap-4 text-white hover:text-slate-300 transition-colors" type="button">
<span className="text-lg font-medium tracking-tight">Send Request</span>
<span className="border border-white/30 rounded-full p-2 group-hover:bg-white group-hover:text-slate-900 group-hover:border-white transition-all duration-300">
<span className="iconify" data-icon="lucide:arrow-right" data-width="20"></span>
</span>
</button>
</div>
</form>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 px-6 md:px-12 border-t border-slate-800">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<p className="text-sm font-light tracking-wide">© 2024 Sørensen Architects. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:instagram" data-width="20"></span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:linkedin" data-width="20"></span>
</a>
<a className="hover:text-white transition-colors" href="#">
<span className="iconify" data-icon="lucide:twitter" data-width="20"></span>
</a>
</div>
</div>
</footer>


    </>
  );
}
