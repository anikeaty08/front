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
      

<nav className="fixed w-full z-50 top-0 bg-[#F3F0E6]/95 backdrop-blur-sm border-b border-[#DCCFB8]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="font-['Lora'] text-2xl tracking-tighter text-[#3F3A33] font-semibold uppercase" href="#">
                FemSalon
            </a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium hover:text-[#C49A5A] transition-colors" href="#services">Services</a>
<a className="text-sm font-medium hover:text-[#C49A5A] transition-colors" href="#about">About</a>
<a className="text-sm font-medium hover:text-[#C49A5A] transition-colors" href="#contact">Contact</a>
<div className="relative group cursor-pointer flex items-center gap-1 text-sm font-medium hover:text-[#C49A5A] transition-colors">
                    More <iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:block px-5 py-2 border border-[#DCCFB8] rounded text-xs font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#E7DFC6]/30 transition-all text-[#3F3A33]">
                    Sign In
                </button>
<a className="px-5 py-2 bg-[#3F3A33] text-[#F3F0E6] rounded text-xs font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#2A2621] transition-all" href="#booking">
                    Book
                </a>
</div>
</div>
</nav>

<section className="relative h-screen min-h-[700px] flex items-center justify-center px-6 mt-20">

<div className="absolute inset-0 z-0">
<img alt="Salon Background" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600948836101-f9ffda59d250?auto=format&amp;fit=crop&amp;q=80&amp;w=2000"/>
<div className="absolute inset-0 bg-[#3F3A33]/40"></div>
</div>
<div className="relative z-10 max-w-3xl mx-auto text-center text-[#F3F0E6]">
<h1 className="font-['Lora'] text-5xl md:text-7xl leading-[1.1] tracking-tight mb-6">
                Transform your look with expert care
            </h1>
<p className="text-lg md:text-xl text-[#F3F0E6]/90 mb-10 max-w-xl mx-auto leading-relaxed">
                Step into our salon and discover the art of beautiful hair. We craft styles that make you feel confident and radiant.
            </p>
<div className="flex items-center justify-center gap-4">
<a className="px-8 py-3 bg-[#F3F0E6] text-[#3F3A33] rounded text-sm font-medium hover:bg-white transition-all" href="#booking">
                    Book Appointment
                </a>
<a className="px-8 py-3 bg-transparent border border-[#F3F0E6] text-[#F3F0E6] rounded text-sm font-medium hover:bg-[#F3F0E6]/10 transition-all" href="#about">
                    Learn More
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="services">
<div className="text-center mb-16">
<span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#C49A5A] mb-3 block">Services</span>
<h2 className="font-['Lora'] text-4xl md:text-5xl tracking-tight text-[#3F3A33] mb-4">What we do best</h2>
<p className="text-[#6A6456] max-w-2xl mx-auto">Every service is tailored to bring out your best self. We listen, we create, we deliver results.</p>
</div>
<div className="grid md:grid-cols-3 gap-x-8 gap-y-12">

<div className="group">
<div className="bg-[#E7DFC6] aspect-[4/3] rounded-lg overflow-hidden mb-6">
<img alt="Haircut" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1562322140-8baeececf3df?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-['Lora'] text-2xl text-[#3F3A33] mb-3 tracking-tight">Haircuts and Styling</h3>
<p className="text-sm text-[#6A6456] leading-relaxed">Precision cuts and timeless styles that suit your face and personality.</p>
</div>

<div className="group">
<div className="bg-[#E7DFC6] aspect-[4/3] rounded-lg overflow-hidden mb-6">
<img alt="Color" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<h3 className="font-['Lora'] text-2xl text-[#3F3A33] mb-3 tracking-tight">Color and Highlights</h3>
<p className="text-sm text-[#6A6456] leading-relaxed">Rich, vibrant color that enhances your natural beauty and lasts.</p>
</div>

<div className="group">
<div className="bg-[#E7DFC6] aspect-[4/3] rounded-lg overflow-hidden mb-6">
<img alt="Treatments" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<h3 className="font-['Lora'] text-2xl text-[#3F3A33] mb-3 tracking-tight">Treatments and Care</h3>
<p className="text-sm text-[#6A6456] leading-relaxed">Restore health and shine to your hair with our premium treatments.</p>
</div>
</div>
<div className="mt-16 text-center flex items-center justify-center gap-4">
<button className="px-6 py-2 border border-[#3F3A33] rounded text-xs font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#3F3A33] hover:text-[#F3F0E6] transition-all">
                Explore
            </button>
<a className="flex items-center gap-2 text-sm font-medium hover:text-[#C49A5A] transition-colors" href="#">
                More <iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</a>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto border-t border-[#DCCFB8]">
<div className="text-center mb-16">
<h2 className="font-['Lora'] text-4xl tracking-tight text-[#3F3A33] mb-4">Real voices</h2>
<p className="text-[#6A6456]">Hear what our clients have to say about their experience.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">

<div className="h-64 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] p-8 hover:border-[#C49A5A] transition-colors">
<div className="flex items-center gap-2 text-[#3F3A33] opacity-60">
<iconify-icon icon="lucide:gem" width="32"></iconify-icon>
<span className="font-['Lora'] text-xl font-medium">Vogue</span>
</div>
</div>

<div className="h-64 border border-[#DCCFB8] rounded-lg bg-[#FCFBF5] p-8 flex flex-col justify-between hover:border-[#C49A5A] transition-colors shadow-sm">
<div className="flex gap-1 text-[#C49A5A]">
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
<iconify-icon icon="lucide:star" width="16"></iconify-icon>
</div>
<p className="text-[#3F3A33] text-lg leading-relaxed font-medium">
                    "The best salon in town. They understood exactly what I wanted and executed it perfectly."
                </p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#DCCFB8] rounded-full flex items-center justify-center text-[#3F3A33] font-['Lora']">SM</div>
<div>
<p className="text-sm font-medium text-[#3F3A33]">Sarah Mitchell</p>
<p className="text-xs text-[#6A6456]">Regular Client</p>
</div>
</div>
</div>

<div className="h-64 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] p-8 hover:border-[#C49A5A] transition-colors">
<div className="flex items-center gap-2 text-[#3F3A33] opacity-60">
<iconify-icon icon="lucide:crown" width="32"></iconify-icon>
<span className="font-['Lora'] text-xl font-medium">Harper's</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div className="h-40 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] hover:border-[#C49A5A] transition-colors">
<iconify-icon className="text-[#3F3A33]/60" icon="lucide:sparkles" width="24"></iconify-icon>
</div>
<div className="h-40 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] hover:border-[#C49A5A] transition-colors">
<iconify-icon className="text-[#3F3A33]/60" icon="lucide:feather" width="24"></iconify-icon>
</div>
<div className="h-40 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] hover:border-[#C49A5A] transition-colors">
<iconify-icon className="text-[#3F3A33]/60" icon="lucide:flower" width="24"></iconify-icon>
</div>
<div className="h-40 border border-[#DCCFB8] rounded-lg flex items-center justify-center bg-[#FCFBF5] hover:border-[#C49A5A] transition-colors">
<iconify-icon className="text-[#3F3A33]/60" icon="lucide:droplet" width="24"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="booking">
<div className="text-center mb-16">
<span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#C49A5A] mb-3 block">Process</span>
<h2 className="font-['Lora'] text-4xl tracking-tight text-[#3F3A33] mb-4">Book your appointment in three<br/>simple steps</h2>
<p className="text-[#6A6456]">Getting in is easy. Choose your service, pick your time, and we'll take care of the rest.</p>
</div>
<div className="grid md:grid-cols-2 gap-6 h-auto md:h-[600px]">

<div className="flex flex-col gap-6 h-full">

<div className="flex-1 border border-[#DCCFB8] p-8 rounded-lg bg-[#FCFBF5] flex flex-col justify-center hover:border-[#C49A5A] transition-colors">
<div className="w-10 h-10 bg-[#E7DFC6] rounded flex items-center justify-center mb-6">
<iconify-icon className="text-[#3F3A33]" icon="lucide:layout-grid" width="20"></iconify-icon>
</div>
<h3 className="font-['Lora'] text-2xl text-[#3F3A33] mb-2">Select your service</h3>
<p className="text-sm text-[#6A6456] mb-6">Browse our offerings and find what suits you best.</p>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-[#DCCFB8] rounded text-xs font-medium hover:bg-[#E7DFC6] transition-colors">Schedule</button>
<button className="flex items-center gap-1 text-xs font-medium hover:text-[#C49A5A]">Details <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon></button>
</div>
</div>

<div className="flex-1 border border-[#DCCFB8] p-8 rounded-lg bg-[#FCFBF5] flex flex-col justify-center hover:border-[#C49A5A] transition-colors">
<div className="w-10 h-10 bg-[#E7DFC6] rounded flex items-center justify-center mb-6">
<iconify-icon className="text-[#3F3A33]" icon="lucide:pen-tool" width="20"></iconify-icon>
</div>
<h3 className="font-['Lora'] text-2xl text-[#3F3A33] mb-2">Pick your stylist</h3>
<p className="text-sm text-[#6A6456] mb-6">Choose from our talented team or let us recommend the perfect match.</p>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-[#DCCFB8] rounded text-xs font-medium hover:bg-[#E7DFC6] transition-colors">Reserve</button>
<button className="flex items-center gap-1 text-xs font-medium hover:text-[#C49A5A]">Info <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon></button>
</div>
</div>
</div>

<div className="border border-[#DCCFB8] rounded-lg bg-[#FCFBF5] overflow-hidden flex flex-col h-full hover:border-[#C49A5A] transition-colors">
<div className="p-8">
<span className="text-xs font-bold uppercase tracking-wider text-[#6A6456] mb-2 block">Booking</span>
<h3 className="font-['Lora'] text-3xl tracking-tight text-[#3F3A33] mb-3">Confirm and arrive</h3>
<p className="text-sm text-[#6A6456] mb-6">Lock in your time and walk through our doors ready to transform.</p>
<div className="flex items-center gap-4">
<button className="px-4 py-2 border border-[#DCCFB8] rounded text-xs font-medium hover:bg-[#E7DFC6] transition-colors">Confirm</button>
<button className="flex items-center gap-1 text-xs font-medium hover:text-[#C49A5A]">Help <iconify-icon icon="lucide:chevron-right" width="12"></iconify-icon></button>
</div>
</div>
<div className="flex-1 bg-[#E7DFC6] relative mt-4">
<img alt="Salon Interior" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?auto=format&amp;fit=crop&amp;q=80&amp;w=1200"/>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="mb-12">
<span className="font-['IBM_Plex_Mono'] text-xs uppercase tracking-widest text-[#C49A5A] mb-3 block">Stylists</span>
<h2 className="font-['Lora'] text-4xl tracking-tight text-[#3F3A33] mb-4">Meet our team</h2>
<p className="text-[#6A6456]">Each stylist brings skill, passion, and years of experience.</p>
</div>
<div className="grid md:grid-cols-4 gap-6">

<div className="group">
<div className="aspect-square bg-[#E7DFC6] rounded-lg mb-4 overflow-hidden">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="font-['Lora'] text-lg font-medium text-[#3F3A33]">Marcus Chen</h3>
<p className="text-xs text-[#6A6456] mb-2 font-mono">Lead Stylist</p>
<p className="text-xs text-[#6A6456]/80 leading-relaxed mb-4">Fifteen years cutting hair with precision and vision.</p>
<div className="flex gap-3 text-[#3F3A33]">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
</div>
</div>

<div className="group">
<div className="aspect-square bg-[#E7DFC6] rounded-lg mb-4 overflow-hidden">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="font-['Lora'] text-lg font-medium text-[#3F3A33]">Lisa Fontaine</h3>
<p className="text-xs text-[#6A6456] mb-2 font-mono">Color Specialist</p>
<p className="text-xs text-[#6A6456]/80 leading-relaxed mb-4">Expert in rich tones and vibrant hues. Lisa transforms hair with artistry.</p>
<div className="flex gap-3 text-[#3F3A33]">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
</div>
</div>

<div className="group">
<div className="aspect-square bg-[#E7DFC6] rounded-lg mb-4 overflow-hidden">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="font-['Lora'] text-lg font-medium text-[#3F3A33]">David Park</h3>
<p className="text-xs text-[#6A6456] mb-2 font-mono">Master Stylist</p>
<p className="text-xs text-[#6A6456]/80 leading-relaxed mb-4">Specializes in modern cuts and classic styles. David listens and delivers.</p>
<div className="flex gap-3 text-[#3F3A33]">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
</div>
</div>

<div className="group hidden md:block">
<div className="aspect-square bg-[#E7DFC6] rounded-lg mb-4 overflow-hidden">
<img alt="Team" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;q=80&amp;w=400"/>
</div>
<h3 className="font-['Lora'] text-lg font-medium text-[#3F3A33]">Rachel Green</h3>
<p className="text-xs text-[#6A6456] mb-2 font-mono">Esthetician</p>
<p className="text-xs text-[#6A6456]/80 leading-relaxed mb-4">Focused on skin health and relaxation rituals.</p>
<div className="flex gap-3 text-[#3F3A33]">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
<iconify-icon icon="lucide:globe" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="flex gap-2 mt-8 md:hidden justify-center">
<span className="w-2 h-2 rounded-full bg-[#3F3A33]"></span>
<span className="w-2 h-2 rounded-full bg-[#DCCFB8]"></span>
<span className="w-2 h-2 rounded-full bg-[#DCCFB8]"></span>
</div>
<div className="flex justify-end gap-4 mt-8">
<button className="p-2 border border-[#DCCFB8] rounded-full hover:bg-[#E7DFC6] transition-colors"><iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon></button>
<button className="p-2 border border-[#DCCFB8] rounded-full hover:bg-[#E7DFC6] transition-colors"><iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon></button>
</div>

<div className="mt-20">
<h3 className="font-['Lora'] text-2xl font-medium text-[#3F3A33] mb-2">We're hiring</h3>
<p className="text-[#6A6456] mb-6 text-sm">Join our growing team of talented stylists.</p>
<button className="px-6 py-2 border border-[#3F3A33] rounded text-xs uppercase tracking-wider hover:bg-[#3F3A33] hover:text-[#F3F0E6] transition-all">Apply now</button>
</div>
</section>

<section className="py-24 bg-[#FCFBF5] border-y border-[#DCCFB8]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="font-['Lora'] text-4xl tracking-tight text-[#3F3A33] mb-4">Our work</h2>
<p className="text-[#6A6456]">See the transformations we create every day.</p>
</div>
<div className="relative">
<button className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-4 md:-translate-x-12 p-3 border border-[#DCCFB8] bg-[#F3F0E6] rounded-full z-10 hover:border-[#C49A5A] transition-colors">
<iconify-icon icon="lucide:arrow-left" width="20"></iconify-icon>
</button>
<div className="flex gap-6 overflow-x-auto no-scrollbar pb-8">
<div className="min-w-[300px] md:min-w-[400px] aspect-square bg-[#E7DFC6] rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="min-w-[300px] md:min-w-[400px] aspect-square bg-[#E7DFC6] rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
<div className="min-w-[300px] md:min-w-[400px] aspect-square bg-[#E7DFC6] rounded-lg overflow-hidden">
<img className="w-full h-full object-cover hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522337360788-8b13dee7a37e?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
</div>
</div>
<button className="absolute right-0 top-1/2 -translate-y-1/2 translate-x-4 md:translate-x-12 p-3 border border-[#DCCFB8] bg-[#F3F0E6] rounded-full z-10 hover:border-[#C49A5A] transition-colors">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</button>
</div>
<div className="flex gap-2 justify-center mt-4">
<span className="w-2 h-2 rounded-full bg-[#3F3A33]"></span>
<span className="w-2 h-2 rounded-full bg-[#DCCFB8]"></span>
<span className="w-2 h-2 rounded-full bg-[#DCCFB8]"></span>
<span className="w-2 h-2 rounded-full bg-[#DCCFB8]"></span>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="font-['Lora'] text-4xl md:text-5xl tracking-tight text-[#3F3A33] mb-6">Ready to feel your best</h2>
<p className="text-[#6A6456] mb-8">Book now and discover what great hair care feels like.</p>
<div className="flex justify-center gap-4">
<button className="px-8 py-3 bg-[#3F3A33] text-[#F3F0E6] rounded text-sm font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#2A2621] transition-all">Book</button>
<button className="px-8 py-3 border border-[#3F3A33] text-[#3F3A33] rounded text-sm font-['IBM_Plex_Mono'] uppercase tracking-wider hover:bg-[#E7DFC6]/30 transition-all">Consult</button>
</div>
</div>
<div className="w-full h-[400px] md:h-[600px] bg-[#E7DFC6] rounded-xl overflow-hidden">
<img alt="Salon Atmosphere" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
</section>

<section className="py-24 px-6 max-w-3xl mx-auto">
<h2 className="font-['Lora'] text-4xl tracking-tight text-[#3F3A33] mb-4">FAQ</h2>
<p className="text-[#6A6456] mb-12">Find answers to the questions our clients ask most.</p>
<div className="space-y-0 divide-y divide-[#DCCFB8] border-y border-[#DCCFB8]">
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-[#3F3A33] hover:text-[#C49A5A] transition-colors">
                    How long are appointments?
                    <iconify-icon className="group-open:hidden" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="lucide:x" width="20"></iconify-icon>
</summary>
<p className="text-sm text-[#6A6456] mt-4 leading-relaxed pr-8">
                    Most appointments run between 45 minutes and two hours depending on the service. We build in time to discuss what you want and make sure the work is done right. Your time matters to us.
                </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-[#3F3A33] hover:text-[#C49A5A] transition-colors">
                    Do you take walk-ins?
                    <iconify-icon className="group-open:hidden" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="lucide:x" width="20"></iconify-icon>
</summary>
<p className="text-sm text-[#6A6456] mt-4 leading-relaxed pr-8">
                    We welcome walk-ins when our stylists have availability, but booking ahead guarantees your spot. Call or use our online scheduler to secure your preferred time and stylist.
                </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-[#3F3A33] hover:text-[#C49A5A] transition-colors">
                    What if I'm not happy?
                    <iconify-icon className="group-open:hidden" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="lucide:x" width="20"></iconify-icon>
</summary>
<p className="text-sm text-[#6A6456] mt-4 leading-relaxed pr-8">
                    Your satisfaction is everything. If something isn't right, we'll fix it at no extra charge. Come back in within a week and we'll make it perfect.
                </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-[#3F3A33] hover:text-[#C49A5A] transition-colors">
                    Can I request a specific stylist?
                    <iconify-icon className="group-open:hidden" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="lucide:x" width="20"></iconify-icon>
</summary>
<p className="text-sm text-[#6A6456] mt-4 leading-relaxed pr-8">
                    Yes. Request your stylist when you book online or call us directly. If they're booked, we'll find someone whose work matches what you're looking for.
                </p>
</details>
<details className="group py-6 cursor-pointer">
<summary className="flex items-center justify-between font-medium text-[#3F3A33] hover:text-[#C49A5A] transition-colors">
                    What's your cancellation policy?
                    <iconify-icon className="group-open:hidden" icon="lucide:plus" width="20"></iconify-icon>
<iconify-icon className="hidden group-open:block" icon="lucide:x" width="20"></iconify-icon>
</summary>
<p className="text-sm text-[#6A6456] mt-4 leading-relaxed pr-8">
                    Cancel or reschedule up to 24 hours before your appointment with no penalty. Less notice and we may charge a portion of your service fee. Life happens—just give us a heads up when you can.
                </p>
</details>
</div>
<div className="mt-16">
<h3 className="font-['Lora'] text-2xl font-medium text-[#3F3A33] mb-2">Still have questions?</h3>
<p className="text-[#6A6456] mb-6 text-sm">Do you offer gift cards?</p>
<button className="px-6 py-2 border border-[#3F3A33] rounded text-xs uppercase tracking-wider hover:bg-[#3F3A33] hover:text-[#F3F0E6] transition-all">Contact</button>
</div>
</section>

<footer className="bg-[#FCFBF5] border-t border-[#DCCFB8] pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">

<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-16 gap-6">
<div>
<h4 className="font-medium text-[#3F3A33] mb-2">Stay in touch</h4>
<p className="text-sm text-[#6A6456]">Get updates on new services and special offers.</p>
</div>
<div className="flex gap-4 w-full md:w-auto">
<input className="flex-1 md:w-64 px-4 py-2 border border-[#DCCFB8] bg-transparent rounded text-sm focus:outline-none focus:border-[#C49A5A]" placeholder="Your email" type="email"/>
<button className="px-6 py-2 border border-[#3F3A33] rounded text-xs uppercase tracking-wider hover:bg-[#3F3A33] hover:text-[#F3F0E6] transition-all">Sign Up</button>
</div>
</div>
<hr className="border-[#DCCFB8] mb-16"/>

<div className="grid grid-cols-2 md:grid-cols-6 gap-8 mb-20">
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">Services</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Haircuts</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Coloring</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Treatments</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Styling</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Extensions</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">About us</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Our story</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">The team</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Careers</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Press</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Contact</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">Support</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Help center</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Booking</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Pricing</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">FAQ</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Feedback</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">Legal</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Privacy policy</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Terms of service</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Cookie policy</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Accessibility</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Sitemap</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">Connect</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Follow on Instagram</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Follow on Facebook</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Follow on Twitter</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Follow on LinkedIn</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Follow on TikTok</a></li>
</ul>
</div>
<div className="col-span-1">
<h5 className="font-bold text-xs uppercase tracking-wider text-[#3F3A33] mb-4">Locations</h5>
<ul className="space-y-3 text-sm text-[#6A6456]">
<li><a className="hover:text-[#C49A5A]" href="#">Downtown salon</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Uptown location</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Westside studio</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Eastside branch</a></li>
<li><a className="hover:text-[#C49A5A]" href="#">Book now</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center border-t border-[#DCCFB8] pt-8">
<a className="font-['Lora'] text-2xl tracking-tighter text-[#3F3A33] uppercase font-bold mb-4 md:mb-0" href="#">
                    FemSalon
                </a>
<p className="text-xs text-[#6A6456]/60">© 2025 FemSalon. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
