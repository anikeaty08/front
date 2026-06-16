import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full z-50 flex justify-center py-6 pointer-events-none">
<nav className="flex items-center gap-3 pointer-events-auto">

<div className="bg-neutral-800/80 backdrop-blur-md border border-white/10 px-1 py-1.5 rounded-full shadow-2xl">
<ul className="flex items-center gap-1">
<li><a className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#">Home</a></li>
<li><a className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#works">Works</a></li>
<li><a className="px-5 py-2 text-sm font-medium text-gray-300 hover:text-white hover:bg-white/10 rounded-full transition-all" href="#about">About</a></li>
</ul>
</div>

<a className="bg-neutral-800/80 backdrop-blur-md border border-white/10 px-6 py-3.5 rounded-full text-sm font-medium text-white hover:bg-neutral-700 transition-all shadow-2xl" href="#contact">
                Contact
            </a>
</nav>
</div>

<header className="relative min-h-screen flex flex-col justify-end overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Sky" className="w-full h-full object-cover animate-pan opacity-60" src="https://images.unsplash.com/photo-1504608524841-42fe6f032b4b?q=80&amp;w=2565&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/20 to-black"></div>
</div>

<div className="relative z-10 w-full px-6 pb-6 md:px-12 md:pb-12">
<h1 className="text-[13vw] leading-[0.8] tracking-tighter font-medium text-center md:text-left text-white mix-blend-overlay opacity-90">
                Andrew Smith
            </h1>
<p className="mt-4 text-base md:text-xl text-gray-300 md:ml-2 max-w-xl font-light tracking-wide">
                Digital Designer &amp; Art Director crafting immersive experiences.
            </p>
</div>
</header>

<section className="relative w-full bg-white pt-20 pb-4" id="works">

<div className="absolute left-1/2 -top-6 -translate-x-1/2 z-20">
<a className="bg-white text-black px-6 py-3 rounded-full text-sm font-medium shadow-xl hover:scale-105 transition-transform border border-gray-100 flex items-center gap-2" href="#">
                See all works
            </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 bg-white">

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-100 rounded-2xl">
<img alt="Mobile App Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-xs font-medium bg-white/90 px-3 py-1 rounded-full text-black">Mobile App</span>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-900 rounded-2xl">
<img alt="Laptop Dashboard" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0 opacity-90" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2400&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-xs font-medium bg-white/90 px-3 py-1 rounded-full text-black">Dashboard</span>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-100 rounded-2xl">
<img alt="Abstract Product" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&amp;w=2564&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-xs font-medium bg-white/90 px-3 py-1 rounded-full text-black">Art Direction</span>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square overflow-hidden bg-gray-100 rounded-2xl">
<img alt="Web Design" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 grayscale hover:grayscale-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute bottom-6 left-6 opacity-0 group-hover:opacity-100 transition-opacity duration-500">
<span className="text-xs font-medium bg-white/90 px-3 py-1 rounded-full text-black">Web Design</span>
</div>
</div>
</div>
</section>

<section className="bg-white text-black pb-20" id="about">

<div className="grid grid-cols-1 md:grid-cols-2 gap-4 px-4 h-full">

<div className="bg-gray-50 rounded-2xl p-8 md:p-16 flex flex-col justify-center h-full">
<div className="mb-12">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">About me</h2>
<p className="text-base md:text-lg text-gray-600 leading-relaxed mb-6 font-normal">
                        My journey into design began with a fascination for how colors, shapes, and interactions can evoke emotions and tell stories. I'm passionate about understanding the unique needs of each project and crafting solutions that resonate with users on a personal level.
                    </p>
<p className="text-base md:text-lg text-gray-600 leading-relaxed font-normal">
                        When I'm not designing, you'll find me exploring nature, capturing moments through photography, or indulging in a good book.
                    </p>
</div>
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">Design Skills</h2>
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Branding</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Strategy</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Mobile App</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">UI Design</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">UX Research</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Webflow</span>
<span className="px-3 py-1.5 bg-white border border-gray-200 rounded-lg text-sm font-medium text-gray-700 shadow-sm">Frontend</span>
</div>
</div>
</div>

<div className="relative h-full min-h-[500px] md:min-h-full rounded-2xl overflow-hidden">
<img alt="Portrait" className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=2574&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 border border-black/5 rounded-2xl pointer-events-none"></div>
</div>
</div>
</section>

<section className="bg-black text-white px-6 py-20 md:px-20 md:py-32 border-t border-white/20" id="contact">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-20">

<div className="flex flex-col justify-between h-full">
<div>
<div className="flex items-center gap-4 mb-8">
<i className="w-8 h-8 md:w-10 md:h-10 text-white" data-lucide="arrow-right" strokeWidth="1.5"></i>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight">Let's get in touch</h2>
</div>
<div className="mb-12">
<p className="text-xs text-neutral-500 mb-2 uppercase tracking-wider">Email</p>
<a className="text-lg md:text-xl hover:text-gray-300 transition-colors" href="mailto:hi@andrew.com">hi@andrew.com</a>
</div>
<div>
<p className="text-xs text-neutral-500 mb-4 uppercase tracking-wider">Channels</p>
<ul className="flex flex-col gap-3">
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2" href="#">X.com <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2" href="#">Threads <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2" href="#">LinkedIn <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a></li>
<li><a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2" href="#">YouTube <i className="w-3 h-3" data-lucide="arrow-up-right"></i></a></li>
</ul>
</div>
</div>
<div className="mt-20 md:mt-0">
<p className="text-xs text-neutral-600">© 2026 Andrew Smith</p>
</div>
</div>

<div className="w-full">
<form className="flex flex-col gap-6">
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium" htmlFor="name">Name</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white focus:bg-neutral-800 transition-all" id="name" placeholder="Enter your name" type="text"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium" htmlFor="email">Email</label>
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white focus:bg-neutral-800 transition-all" id="email" placeholder="Enter your email" type="email"/>
</div>
<div className="flex flex-col gap-2">
<label className="text-xs text-neutral-500 font-medium" htmlFor="message">Message</label>
<textarea className="w-full bg-neutral-900 border border-neutral-800 rounded-lg px-4 py-3 text-sm text-white placeholder-neutral-600 focus:outline-none focus:ring-1 focus:ring-white focus:bg-neutral-800 transition-all resize-none" id="message" placeholder="Type your message" rows="6"></textarea>
</div>
<button className="w-full bg-white hover:bg-gray-200 text-black font-medium text-sm py-3 rounded-lg transition-colors mt-2 shadow-lg" type="submit">
                        Submit
                    </button>
</form>
</div>
</div>
</section>


    </>
  );
}
