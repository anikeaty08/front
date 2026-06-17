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
      

<header className="fixed w-full z-50">

<div className="bg-[#00550D] text-white py-3 px-6 md:px-12 border-b border-white/10">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-4 md:gap-0">
<div className="flex items-center gap-6">
<a className="flex items-center gap-2 text-xs font-semibold tracking-wide hover:text-[#F4B81A] transition-colors" href="tel:6315820100">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                        Call Us (631) 582-0100
                    </a>
<div className="hidden md:flex items-center gap-3 border-l border-white/20 pl-6">
<a className="hover:text-[#F4B81A] transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="16"></iconify-icon></a>
<a className="hover:text-[#F4B81A] transition-colors" href="#"><iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="16"></iconify-icon></a>
<a className="hover:text-[#F4B81A] transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="16"></iconify-icon></a>
</div>
</div>
<a className="bg-[#F4B81A] text-[#00550D] px-6 py-2 text-xs font-bold uppercase tracking-wider hover:bg-white transition-colors duration-300" href="#contact">
                    Schedule A Consultation
                </a>
</div>
</div>

<div className="bg-white/95 backdrop-blur-md border-b border-stone-200 shadow-sm transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 md:px-12 h-20 flex items-center justify-between">

<a className="flex flex-col group" href="#">
<span className="font-serif text-2xl font-bold tracking-tight text-[#00550D] uppercase group-hover:opacity-80 transition-opacity">Cascella</span>
<span className="text-[0.6rem] tracking-[0.4em] uppercase text-[#F4B81A] translate-x-1">&amp; Sons</span>
</a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#">Home</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#services">Services</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#">HFS Financing</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#">Referral Program</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#">Careers</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#">About Us</a>
<a className="text-xs font-medium uppercase tracking-wide text-stone-600 hover:text-[#00550D] transition-colors" href="#contact">Contact Us</a>
</nav>

<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-6 py-2 border border-[#00550D] text-[#00550D] text-xs font-bold uppercase tracking-wider hover:bg-[#00550D] hover:text-white transition-all duration-300" href="#quote">
                        Get Instant Quote
                    </a>
<button className="lg:hidden text-[#00550D]">
<iconify-icon height="24" icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
</header>

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden">
<div className="absolute inset-0 z-0">
<img alt="Luxury Home Long Island" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600607687920-4e2a868742b9?q=80&amp;w=2069&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#00550D]/90 to-black/40 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center reveal">
<h1 className="font-serif text-5xl md:text-7xl lg:text-8xl text-white font-light tracking-tight leading-[1.1] mb-10">
                Trusted Dormers &amp; <br/>
<span className="italic text-[#F4B81A]">Home Extension Contractors</span> <br/>
                on Long Island
            </h1>
<a className="group relative inline-flex items-center gap-3 px-10 py-5 bg-[#F4B81A] text-[#00550D] text-sm font-bold tracking-[0.2em] uppercase overflow-hidden hover:bg-white transition-all duration-300" href="#contact">
                Schedule A Consultation
                <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</a>
</div>
</section>

<section className="py-16 bg-stone-50 border-b border-stone-200">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="md:w-2/3">
<h2 className="font-serif text-3xl text-[#00550D] mb-4">Flexible financing options</h2>
<p className="text-stone-600 text-sm md:text-base leading-relaxed max-w-2xl">
                    Ready to transform your home but need financial flexibility? We offer financing options to make your renovation dreams a reality.
                </p>
</div>
<div className="md:w-1/3 flex justify-start md:justify-end">
<a className="px-8 py-4 border border-[#00550D] text-[#00550D] text-xs tracking-widest uppercase font-bold hover:bg-[#00550D] hover:text-white transition-colors duration-300" href="#">
                    Apply Now
                </a>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 bg-white">
<div className="max-w-4xl mx-auto text-center space-y-6">
<span className="text-[#F4B81A] text-xs font-bold tracking-[0.2em] uppercase">Cascella and Sons Construction Corp.</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#00550D] leading-tight">
                Long Island Home Remodeling &amp; Renovation
            </h2>
<p className="text-stone-500 font-medium italic text-lg">Serving Suffolk &amp; Nassau County</p>
<div className="w-20 h-px bg-[#F4B81A] mx-auto my-6"></div>
<p className="text-stone-600 leading-loose text-sm md:text-base">
                We are Certified Andersen Window Installers offering a wide range of options to help you revitalize and renovate your home. As a leading Long Island home remodeling company, we specialize in bathroom remodeling, kitchen remodeling, custom decking, new home builds and more. We can’t wait to bring your home renovation project to life!
            </p>
<div className="pt-8">
<a className="inline-block px-8 py-3 bg-[#00550D] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#003300] transition-colors" href="#contact">
                    Schedule A Consultation
                </a>
</div>
</div>
</section>

<section className="py-24 bg-stone-100 px-6">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8">
<span className="block text-[#00550D] text-xs font-bold tracking-[0.2em] uppercase">Long Island Home Remodeling &amp; Dormer Contractors</span>
<h2 className="font-serif text-4xl md:text-5xl text-stone-900 leading-tight">
                    Your Premier Contractors, Renovators, And Home Remodelers Build Your Dream Home
                </h2>
<div className="space-y-4">
<h3 className="font-serif text-2xl text-[#00550D]">Build Your Dream Home.</h3>
<h4 className="text-stone-500 uppercase text-xs tracking-widest">Serving Suffolk and Nassau County Long Island.</h4>
</div>
<p className="text-stone-600 text-sm leading-relaxed">
                    Cascella and Sons Construction is your premier Long Island home remodeling company. With over 30 years of experience serving Long Island homeowners, we are the best choice for your next exterior remodeling project, window installation, or renovation.
                    <br/><br/>
                    At Cascella and Sons Construction, we strive to excel at everything we do, ensuring that our customers get a high-value return no matter the service. We are committed to providing professional workmanship from concept to completion.
                    <br/><br/>
                    At the end of the day, we pride ourselves on being able to keep your home improvement projects under one roof, on time, and on budget—all while ensuring top-quality workmanship.
                </p>
<a className="inline-flex items-center gap-2 text-[#00550D] font-bold text-xs uppercase tracking-widest border-b border-[#00550D] pb-1 hover:text-[#F4B81A] hover:border-[#F4B81A] transition-colors" href="#">
                    Learn More <iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
<div className="relative h-full min-h-[500px]">
<img alt="Construction" className="w-full h-full object-cover shadow-2xl" src="https://images.unsplash.com/photo-1503387762-592deb58ef4e?q=80&amp;w=2031&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-6 -left-6 bg-[#F4B81A] p-8 hidden md:block">
<p className="text-[#00550D] font-serif text-4xl font-bold">30+</p>
<p className="text-[#00550D] text-xs uppercase tracking-widest mt-1">Years Experience</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white px-6">
<div className="max-w-7xl mx-auto">
<h2 className="font-serif text-4xl text-[#00550D] text-center mb-16">Recent Project Videos</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative aspect-video bg-stone-900 cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#F4B81A] rounded-full flex items-center justify-center text-[#00550D]">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-video bg-stone-900 cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1595846519845-68e298c2edd8?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#F4B81A] rounded-full flex items-center justify-center text-[#00550D]">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-video bg-stone-900 cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1484154218962-a1c002085d2f?q=80&amp;w=2071&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#F4B81A] rounded-full flex items-center justify-center text-[#00550D]">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group relative aspect-video bg-stone-900 cursor-pointer overflow-hidden">
<img className="w-full h-full object-cover opacity-60 group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1628744876497-eb30460be9f6?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 bg-[#F4B81A] rounded-full flex items-center justify-center text-[#00550D]">
<iconify-icon className="ml-1" icon="lucide:play" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-stone-100 bg-stone-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-wrap justify-center items-center gap-12 md:gap-20 grayscale opacity-50">
<iconify-icon icon="lucide:home" width="40"></iconify-icon>
<iconify-icon icon="lucide:hammer" width="40"></iconify-icon>
<iconify-icon icon="lucide:shield-check" width="40"></iconify-icon>
<iconify-icon icon="lucide:award" width="40"></iconify-icon>
<iconify-icon icon="lucide:building-2" width="40"></iconify-icon>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-[#F4B81A] text-xs font-bold tracking-[0.2em] uppercase block mb-4">Services We Offer</span>
<h2 className="font-serif text-4xl md:text-5xl text-[#00550D] mb-6">Your Premier Contractors, Renovators, And Home Remodelers Build Your Dream Home</h2>
<h3 className="text-stone-900 font-medium mb-6">High Quality, Professional, Experienced</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-6">
                    At Cascella and Sons Construction, we pride ourselves on delivering top-quality Long Island home improvement, renovation and remodeling services coupled with paralleled customer service. No matter the type or scale of the project, we empower our clients to make informed decisions based on accurate information and thoughtful advice.
                    <br/><br/>
                    We’ve been in the Long Island home remodeling game for 30+ years, but it’s our dedication to our clients and exceptional craftsmanship that really defines us. So, whether you’ve just purchased your home or are making space for your growing family, we can guide you through the remodeling process from start to finish.
                </p>
<p className="font-serif text-xl italic text-[#00550D]">We know you’ll enjoy working with us as much as you’ll love living in your dream home.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-12">

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1552321903-17aa25804311?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Bathroom Renovation Services</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        Whether you’re expanding with a new half or full bath or upgrading your master bathroom, our expertise in bathroom remodeling, design, and renovation ensures we can assist you.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1591825729269-caeb344f6df2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Custom Decking</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        We can design, plan, and construct your new custom deck tailored to your needs. From traditional wood decks to modern composite decking, we offer a wide range of deck designs.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1600607686527-6fb886090705?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Dormers, Additions &amp; Extensions</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        Looking to add some extra space to your Long Island home with a home addition, dormer, or extension? We have the knowledge to maximize every inch.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1516455590571-18256e5bb9ff?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Entry Doors</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        From installing a single exterior storm door to installing an entire set of entry doors with custom glass panels, we do it all.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1556912173-3db9963eecc4?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Kitchen Remodeling</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        Your kitchen is the heart of your home, and we can help you maximize its value with a custom remodel or renovation.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">New Home Builds</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        If you’re starting from scratch, you need an experienced contractor on your side. Contact Cascella and Sons to make sure your project goes off without a hitch.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1632759238356-d621b1912444?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Roofing</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        As a homeowner, your roof is what separates you from the elements. Keep it in the best shape with comprehensive services from Cascella and Sons.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1623956897258-29471131922c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Siding</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        When that Long Island weather takes a turn for the worse, we can help repair and replace all types of siding. We are James Hardie Certified Installers.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>

<div className="flex flex-col group">
<div className="aspect-[4/3] overflow-hidden mb-6 bg-stone-100">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1503708928676-1cb796a0891e?q=80&amp;w=2074&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="font-serif text-2xl text-[#00550D] mb-3">Window Replacement</h3>
<p className="text-stone-600 text-sm leading-relaxed mb-4 flex-grow">
                        We are your Andersen Certified Installer on Long Island, which means we can provide you with the best windows on the market.
                    </p>
<a className="text-xs font-bold text-[#F4B81A] uppercase tracking-wider hover:text-[#00550D] transition-colors" href="#">Learn More</a>
</div>
</div>
</div>
</section>

<section className="pt-24 pb-12 px-6 bg-[#00550D] text-white">
<div className="max-w-4xl mx-auto text-center">
<h2 className="font-serif text-4xl md:text-5xl mb-6">Ensuring Excellent and Seamless Service in Every Project</h2>
<p className="text-white/80 text-sm leading-relaxed">
                As general contractors in Long Island, Cascella &amp; Sons Construction Corp understands that embarking on a construction project can be a significant decision, and we are committed to ensuring a seamless and enjoyable experience for our clients from start to finish. Our service process is designed to be thorough, transparent, and customer-centric.
            </p>
</div>
</section>

<section className="pb-24 pt-12 px-6 bg-[#00550D]">
<div className="max-w-7xl mx-auto">

<div className="flex overflow-x-auto gap-6 pb-8 snap-x snap-mandatory no-scrollbar">

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
<span className="text-[#F4B81A] text-4xl font-serif font-bold mb-4 block">01</span>
<h3 className="text-white text-xl font-serif mb-4">Initial Contact</h3>
<p className="text-white/70 text-sm leading-relaxed">
                        Our service process begins with your initial contact with our team. Whether you reach out via phone, email, or through our website, we are ready to listen to your needs and provide prompt assistance.
                    </p>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
<span className="text-[#F4B81A] text-4xl font-serif font-bold mb-4 block">02</span>
<h3 className="text-white text-xl font-serif mb-4">Screening</h3>
<p className="text-white/70 text-sm leading-relaxed">
                        After the initial contact, we conduct a brief screening to gather essential information about your project, including its scope, budget, and timeline to determine the best approach.
                    </p>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
<span className="text-[#F4B81A] text-4xl font-serif font-bold mb-4 block">03</span>
<h3 className="text-white text-xl font-serif mb-4">Estimator Dispatch</h3>
<p className="text-white/70 text-sm leading-relaxed">
                        We dispatch one of our experienced estimators to assess the project in person. Our estimator will conduct a thorough inspection of the site, taking into account various factors.
                    </p>
</div>

<div className="snap-center shrink-0 w-[300px] md:w-[350px] bg-white/5 border border-white/10 p-8 hover:bg-white/10 transition-colors">
<span className="text-[#F4B81A] text-4xl font-serif font-bold mb-4 block">04</span>
<h3 className="text-white text-xl font-serif mb-4">Meeting With The Customer</h3>
<p className="text-white/70 text-sm leading-relaxed">
                        Following the estimator’s assessment, we schedule a meeting with you to discuss the findings and further refine the project details. This is an opportunity for you to ask questions.
                    </p>
</div>
</div>

<div className="flex justify-center gap-2 mt-4">
<div className="w-12 h-1 bg-[#F4B81A]"></div>
<div className="w-2 h-1 bg-white/20"></div>
<div className="w-2 h-1 bg-white/20"></div>
<div className="w-2 h-1 bg-white/20"></div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-stone-50">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="h-full min-h-[400px]">
<img className="w-full h-full object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1541888946425-d81bb19240f5?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div className="space-y-6">
<h3 className="font-serif text-3xl text-[#00550D]">Dedication to Satisfaction</h3>
<p className="text-stone-600 text-sm leading-loose">
                    At Cascella &amp; Sons Construction Corp, we strive to make every step of your construction journey as smooth and stress-free as possible. With our comprehensive service process and dedication to customer satisfaction, you can trust us to bring your vision to life with excellence and integrity.
                </p>
<a className="inline-block px-8 py-3 bg-[#00550D] text-white text-xs tracking-[0.15em] uppercase hover:bg-[#F4B81A] hover:text-[#00550D] transition-colors" href="#contact">
                    Contact us today!
                </a>
</div>
</div>
</section>

<section className="py-20 px-6 bg-[#F4B81A] text-[#00550D] text-center">
<div className="max-w-4xl mx-auto space-y-4">
<span className="text-xs font-bold uppercase tracking-[0.2em] block">If you live in it, you should love it.</span>
<h2 className="font-serif text-4xl md:text-5xl font-bold leading-tight">Give Us A Call Today To Start Your Next Dormer Or Home Extension Project!</h2>
<p className="text-sm font-medium uppercase tracking-wide pt-4">Consult with our professional staff today about your next project.</p>
<div className="pt-8">
<a className="inline-block px-10 py-4 bg-[#00550D] text-white text-xs font-bold tracking-[0.2em] uppercase hover:bg-white hover:text-[#00550D] transition-colors shadow-lg" href="#contact">
                    Contact Us
                </a>
</div>
</div>
</section>

<footer className="bg-[#0b1f10] text-stone-400 pt-24 pb-12 border-t border-white/5" id="contact">
<div className="max-w-7xl mx-auto px-6">

<div className="mb-16 border-b border-white/10 pb-12">
<a className="flex flex-col group w-fit" href="#">
<span className="font-serif text-3xl font-bold tracking-tight text-white uppercase">Cascella</span>
<span className="text-[0.7rem] tracking-[0.4em] uppercase text-[#F4B81A] translate-x-1">&amp; Sons</span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-24 mb-16">

<div className="space-y-8">
<h4 className="text-white text-xs uppercase tracking-[0.15em]">Address</h4>
<div className="space-y-4 text-xs leading-relaxed">
<div>
<p className="text-[#F4B81A] mb-1 font-bold">Suffolk County</p>
<p>70 Carleton Avenue<br/>Central Islip, NY 11722</p>
</div>
<div>
<p className="text-[#F4B81A] mb-1 font-bold">Hamptons</p>
<p>53 Hill St, Suite 80<br/>Southampton, NY 11968</p>
</div>
<p className="italic text-white/60">Serving Suffolk &amp; Nassau County, Long Island</p>
</div>
<div>
<a className="text-white hover:text-[#F4B81A] transition-colors text-sm block mb-4" href="tel:6315820100">Call Us (631) 582-0100</a>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:instagram" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:facebook" strokeWidth="1.5" width="18"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:twitter" strokeWidth="1.5" width="18"></iconify-icon></a>
</div>
</div>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">Services</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Bathroom Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#">Custom Decking</a></li>
<li><a className="hover:text-white transition-colors" href="#">Dormers, Additions &amp; Extensions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Entry Doors</a></li>
<li><a className="hover:text-white transition-colors" href="#">Kitchen Remodeling</a></li>
<li><a className="hover:text-white transition-colors" href="#">New Home Builds</a></li>
<li><a className="hover:text-white transition-colors" href="#">Roofing</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">More Services &amp; Info</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors" href="#">Siding</a></li>
<li><a className="hover:text-white transition-colors" href="#">Window Replacement</a></li>
<li><a className="hover:text-white transition-colors" href="#">Skylight</a></li>
<li><a className="hover:text-white transition-colors" href="#">Financing – HFS</a></li>
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Service Areas</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
</ul>
</div>

<div>
<h4 className="text-white text-xs uppercase tracking-[0.15em] mb-6">Company</h4>
<ul className="space-y-3 text-xs">
<li><a className="hover:text-white transition-colors font-bold text-[#F4B81A]" href="#">We’re Hiring!</a></li>
<li><a className="hover:text-white transition-colors" href="#">Referral Program</a></li>
<li><a className="hover:text-white transition-colors" href="#">Join Our Team</a></li>
<li><a className="hover:text-white transition-colors" href="#">Website Accessibility</a></li>
<li><a className="hover:text-white transition-colors" href="#">LI Home Show Event</a></li>
<li><a className="inline-block mt-4 px-4 py-2 border border-white/20 hover:bg-white hover:text-[#00550D] transition-colors" href="#">Get A Quote</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 text-[0.6rem] uppercase tracking-wider flex flex-col md:flex-row justify-between items-center gap-4 text-stone-500">
<p>© 2024 Cascella &amp; Sons. All Rights Reserved.</p>
<p>Website Design Long Island Noizey Graphics | SEO</p>
</div>
</div>
</footer>

    </>
  );
}
