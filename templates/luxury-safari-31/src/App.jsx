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



        // Initialize Lucide icons
        lucide.createIcons();
    
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
      

<div className="bg-cyan-950 text-cyan-50 py-3 text-sm border-b border-cyan-900">
<div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
<div className="hidden md:flex items-center space-x-6 opacity-80">
<span className="flex items-center gap-2"><i className="w-4 h-4 text-amber-200" data-lucide="shield-check"></i> BBB Accredited A+</span>
<span className="flex items-center gap-2"><i className="w-4 h-4 text-amber-200" data-lucide="newspaper"></i> As seen in The Globe and Mail</span>
</div>
<div className="flex items-center gap-4 ml-auto">
<span className="flex items-center gap-1 text-amber-200 font-medium"><i className="w-3 h-3 fill-current" data-lucide="star"></i> 4.9/5 Reviews</span>
<a className="hover:text-white transition-colors" href="#">Client Login</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="relative w-10 h-10 bg-cyan-900 rounded-lg flex items-center justify-center overflow-hidden">
<div className="absolute bottom-0 w-full h-1/2 bg-amber-200/20 skew-y-12"></div>
<span className="text-white font-serif text-xl font-medium relative z-10">W</span>
</div>
<span className="text-xl tracking-tight font-medium text-cyan-950">Waterviews</span>
</a>

<div className="hidden md:flex items-center space-x-10">
<a className="text-lg text-slate-600 hover:text-cyan-900 transition-colors" href="#">Destinations</a>
<a className="text-lg text-slate-600 hover:text-cyan-900 transition-colors" href="#">Experiences</a>
<a className="text-lg text-slate-600 hover:text-cyan-900 transition-colors" href="#">The Concept</a>
<a className="text-lg text-slate-600 hover:text-cyan-900 transition-colors" href="#">Journal</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex bg-cyan-950 text-white px-6 py-2.5 rounded-full text-base font-medium hover:bg-cyan-900 hover:shadow-lg hover:shadow-cyan-900/20 transition-all duration-300 items-center gap-2">
                    Plan Your Journey
                    <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden p-2 text-slate-600">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>

<header className="relative w-full h-[90vh] overflow-hidden flex items-center">

<div className="absolute inset-0 z-0">
<img alt="Elephant in water" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1575550959106-5a7defe28b56?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-r from-cyan-950/90 via-cyan-950/40 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2">
<div className="space-y-8">
<span className="inline-block px-4 py-1.5 rounded-full bg-amber-100/10 border border-amber-200/30 text-amber-100 backdrop-blur-sm text-sm tracking-wide font-medium uppercase">
                    Beyond the Savannah
                </span>
<h1 className="text-5xl md:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Where the Bush <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-cyan-100 font-serif italic pr-2">Meets the Blue.</span>
</h1>
<p className="text-xl md:text-2xl text-slate-200 font-light max-w-lg leading-relaxed">
                    Exclusive water-based safaris. Experience the majestic collision of wildlife and water, from the Okavango Delta to the Skeleton Coast.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-4">
<button className="bg-amber-100 text-cyan-950 px-8 py-4 rounded-full text-lg font-medium hover:bg-white transition-colors duration-300">
                        Explore Itineraries
                    </button>
<button className="px-8 py-4 rounded-full text-lg font-medium text-white border border-white/30 hover:bg-white/10 backdrop-blur-sm transition-colors duration-300 flex items-center gap-2">
<i className="w-5 h-5" data-lucide="play-circle"></i>
                        Watch the Film
                    </button>
</div>
</div>
</div>
</header>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
<div className="max-w-2xl">
<h2 className="text-4xl md:text-5xl font-medium text-cyan-950 tracking-tight mb-6">Redefining the Safari Experience</h2>
<p className="text-xl text-slate-500 leading-relaxed">
                        Most imagine safaris in dry deserts. We believe life gathers at the water's edge. Our curated journeys focus on "Blue Safaris"—offering a cooler, more serene perspective on the wild.
                    </p>
</div>
<a className="text-lg font-medium text-cyan-700 hover:text-cyan-900 flex items-center gap-2 group pb-2" href="#">
                    Why Waterviews? 
                    <i className="w-5 h-5 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 bg-slate-50 rounded-2xl group hover:bg-cyan-50 transition-colors duration-500">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-800 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="waves"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Water-Based Access</h3>
<p className="text-lg text-slate-500">Trade dusty jeeps for silent luxury boats and mokoros. Get closer to elephants crossing rivers and hippos in their element.</p>
</div>

<div className="p-8 bg-slate-50 rounded-2xl group hover:bg-cyan-50 transition-colors duration-500">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-800 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="sunset"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Bush to Beach</h3>
<p className="text-lg text-slate-500">Seamlessly combine the thrill of the hunt with the relaxation of the coast. Breakfast with lions, dinner by the ocean.</p>
</div>

<div className="p-8 bg-slate-50 rounded-2xl group hover:bg-cyan-50 transition-colors duration-500">
<div className="w-14 h-14 bg-white rounded-xl shadow-sm flex items-center justify-center text-cyan-800 mb-6 group-hover:scale-110 transition-transform">
<i className="w-7 h-7" data-lucide="camera"></i>
</div>
<h3 className="text-2xl font-medium text-slate-900 mb-3 tracking-tight">Unique Photography</h3>
<p className="text-lg text-slate-500">Capture the reflection of wildlife in still waters. Our guides position you for the perfect, once-in-a-lifetime shot.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-100">
<div className="max-w-7xl mx-auto px-6">
<h2 className="text-3xl md:text-4xl font-medium text-cyan-950 tracking-tight mb-12">Curated Water Expeditions</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Gorilla in Uganda" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-amber-200 text-sm font-medium tracking-wider uppercase mb-2 block">Uganda</span>
<h3 className="text-3xl text-white font-medium mb-2">Primate &amp; River Safaris</h3>
<p className="text-lg text-slate-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Trek gorillas in the mist and cruise the Nile to see Murchison Falls.</p>
<div className="flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 w-fit">
                            View Itinerary <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer lg:col-span-2">
<img alt="Okavango Delta" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516426122078-c23e76319801?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-amber-200 text-sm font-medium tracking-wider uppercase mb-2 block">Botswana</span>
<h3 className="text-3xl text-white font-medium mb-2">The Okavango Delta</h3>
<p className="text-lg text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">Navigate the world's premier inland delta by mokoro canoe amidst herds of elephants.</p>
<div className="flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 w-fit">
                            View Itinerary <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer lg:col-span-2">
<img alt="South Africa Coast" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-amber-200 text-sm font-medium tracking-wider uppercase mb-2 block">South Africa</span>
<h3 className="text-3xl text-white font-medium mb-2">Cape Coast &amp; Kruger</h3>
<p className="text-lg text-slate-300 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">From the penguin colonies of Boulder's Beach to the riverbeds of Kruger.</p>
<div className="flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 w-fit">
                            View Itinerary <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>

<div className="group relative h-[500px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Zanzibar Beach" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1534759846116-5799c33ce22a?q=80&amp;w=1950&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-90"></div>
<div className="absolute bottom-0 left-0 p-8 w-full">
<span className="text-amber-200 text-sm font-medium tracking-wider uppercase mb-2 block">Tanzania</span>
<h3 className="text-3xl text-white font-medium mb-2">Serengeti &amp; Zanzibar</h3>
<p className="text-lg text-slate-300 line-clamp-2 mb-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 transform translate-y-4 group-hover:translate-y-0">The ultimate bush-to-beach combination. Lions in the morning, coral reefs by noon.</p>
<div className="flex items-center gap-2 text-white font-medium border-b border-white/30 pb-1 w-fit">
                            View Itinerary <i className="w-4 h-4" data-lucide="arrow-up-right"></i>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-cyan-950 text-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 text-center md:text-left">
<div className="border-l border-cyan-800 pl-6">
<div className="text-5xl font-serif italic text-amber-200 mb-2">20+</div>
<p className="text-lg text-cyan-200">Years of crafting luxury safaris</p>
</div>
<div className="border-l border-cyan-800 pl-6">
<div className="text-5xl font-serif italic text-amber-200 mb-2">500+</div>
<p className="text-lg text-cyan-200">Tailor-made itineraries</p>
</div>
<div className="border-l border-cyan-800 pl-6">
<div className="text-5xl font-serif italic text-amber-200 mb-2">100%</div>
<p className="text-lg text-cyan-200">Financial protection guaranteed</p>
</div>
<div className="flex flex-col justify-center gap-4 pl-6">
<p className="text-lg text-white font-medium">Ready to start planning?</p>
<button className="bg-amber-200 text-cyan-950 px-6 py-3 rounded-full text-base font-medium hover:bg-white transition-colors text-center w-full">
                    Book Consultation
                 </button>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 border-b border-slate-800 pb-12 mb-12">
<div className="md:col-span-4 space-y-6">
<a className="flex items-center gap-2" href="#">
<span className="text-2xl font-serif font-medium text-white">Waterviews</span>
</a>
<p className="text-lg max-w-sm">
                        Curating the world's finest water-centric safari experiences. Where luxury meets the wild.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="instagram"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="facebook"></i></a>
<a className="hover:text-white transition-colors" href="#"><i className="w-6 h-6" data-lucide="twitter"></i></a>
</div>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Destinations</h4>
<ul className="space-y-4 text-lg">
<li><a className="hover:text-cyan-400 transition-colors" href="#">Botswana</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Uganda</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">South Africa</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Tanzania</a></li>
</ul>
</div>
<div className="md:col-span-2">
<h4 className="text-white font-medium mb-6">Company</h4>
<ul className="space-y-4 text-lg">
<li><a className="hover:text-cyan-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Sustainability</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Journal</a></li>
<li><a className="hover:text-cyan-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div className="md:col-span-4 bg-slate-800 rounded-2xl p-6">
<h4 className="text-white font-medium mb-2">Subscribe to the newsletter</h4>
<p className="mb-4 text-base">Get inspired for your next journey.</p>
<form className="flex gap-2">
<input className="bg-slate-700 text-white px-4 py-2 rounded-lg w-full focus:outline-none focus:ring-1 focus:ring-cyan-500" placeholder="Email address" type="email"/>
<button className="bg-cyan-600 text-white px-4 py-2 rounded-lg hover:bg-cyan-500 transition-colors">Send</button>
</form>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm">
<p>© 2024 Waterviews Travel. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
