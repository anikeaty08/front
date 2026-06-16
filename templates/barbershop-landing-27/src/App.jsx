import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        // Parallax effect for hero text
        document.addEventListener('mousemove', (e) => {
            const heroContent = document.getElementById('hero-content');
            if (heroContent) {
                const moveX = (e.clientX - window.innerWidth / 2) * 0.015;
                const moveY = (e.clientY - window.innerHeight / 2) * 0.015;
                heroContent.style.transform = `translate(${moveX}px, ${moveY}px)`;
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen -z-10 bg-cover bg-center" data-alpha-mask="80" style={{backgroundImage: 'url("https://images.unsplash.com/photo-1642669182728-924fb10a2302?w=3840&amp', maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}></div>


<nav className="fixed top-0 w-full z-50 backdrop-blur-md border-b bg-black/80 border-neutral-800">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a className="text-xl tracking-tight font-medium uppercase text-white" href="#">Clips &amp; Snips</a>
<div className="hidden md:flex space-x-8 text-sm font-medium">
<a className="transition-colors hover:text-white" href="#about">About</a>
<a className="transition-colors hover:text-white" href="#services">Services</a>
<a className="transition-colors hover:text-white" href="#pricing">Pricing</a>
<a className="transition-colors hover:text-white" href="#barbers">Team</a>
</div>
<a className="px-5 py-2 text-sm font-medium transition-colors bg-white text-black hover:bg-neutral-200" href="https://www.fresha.com/a/clips-snips-barbershop-melbourne-754-north-road-ztvj6wac?pId=1308411" target="_blank">
                Book with Fresha
            </a>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden group">

<div className="absolute inset-0 z-0">
<img alt="Barber styling hair" className="w-full h-full object-cover opacity-50 grayscale" src="https://images.unsplash.com/photo-1503951914875-befbb647e84c?q=80&amp;w=2000&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-b from-black/80 via-black/50 to-black absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 w-full max-w-7xl mx-auto px-6 flex flex-col items-center text-center md:items-start md:text-left">

<div className="transition-transform duration-100 ease-out will-change-transform" id="hero-content" style={{transform: 'translate(14.535px, -5.775px)'}}>
<p className="text-sm font-medium tracking-widest uppercase mb-4 text-neutral-400">Making You Look Awesome</p>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight leading-none mb-6 text-white">
                    PRECISION FADES <br/>
                    BEARD SCULPTING <br/>
                    CLASSIC CUTS
                </h1>
<p className="text-xl max-w-2xl font-light mb-12 text-neutral-300">
                    Melbourne’s premier barbershop for modern fades and grooming. Experience the art of the perfect cut.
                </p>
</div>

<div className="w-full max-w-4xl backdrop-blur-sm border p-6 md:p-8 mt-4 relative z-20 bg-black/80 border-neutral-800">
<p className="text-sm uppercase tracking-wider mb-6 font-bold text-white">Premier Destination for Grooming</p>
<form className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="space-y-1">
<label className="sr-only">Name</label>
<input className="w-full bg-transparent border-b py-2 focus:outline-none focus:border-red-600 text-sm font-light placeholder-neutral-500 transition-colors border-neutral-700 text-white" placeholder="Your Name" type="text"/>
</div>
<div className="space-y-1">
<label className="sr-only">Phone</label>
<input className="w-full bg-transparent border-b py-2 focus:outline-none focus:border-red-600 text-sm font-light placeholder-neutral-500 transition-colors border-neutral-700 text-white" placeholder="Your Phone" type="tel"/>
</div>
<div className="space-y-1">
<label className="sr-only">Service</label>
<div className="relative">
<select className="w-full bg-transparent border-b py-2 focus:outline-none focus:border-red-600 text-sm font-light appearance-none transition-colors border-neutral-700 text-neutral-300">
<option className="bg-black">Skin Fade</option>
<option className="bg-black">Beard Trim</option>
<option className="bg-black">Hot Towel Shave</option>
<option className="bg-black">Full Service</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-0 top-2 w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div>
<a className="glow-red flex items-center justify-center w-full h-full border hover:border-red-500 transition-all duration-300 text-sm font-medium px-4 py-2 uppercase tracking-wide bg-red-600 border-red-600 text-white hover:bg-red-600" href="https://www.fresha.com/a/clips-snips-barbershop-melbourne-754-north-road-ztvj6wac?pId=1308411">
                            Book Appointment
                        </a>
</div>
</form>
<p className="text-xs mt-4 font-light text-neutral-600">
                    Walk-ins welcome based on availability. Booking recommended.
                </p>
</div>
</div>
</section>

<section className="border-b py-16 border-neutral-900 bg-black">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<svg className="lucide lucide-scissors w-8 h-8 stroke-[1.5] text-white" data-lucide="scissors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="6" r="3"></circle><path d="M8.12 8.12 12 12"></path><path d="M20 4 8.12 15.88"></path><circle cx="6" cy="18" r="3"></circle><path d="M14.8 14.8 20 20"></path></svg>
<h3 className="font-medium text-lg text-white">Fade Specialists</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Masters of the skin fade, taper fade, and modern texturizing techniques.</p>
</div>
<div className="space-y-4">
<svg className="lucide lucide-sparkles w-8 h-8 stroke-[1.5] text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<h3 className="font-medium text-lg text-white">Premium Products</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Using only top-tier pomades and grooming essentials for a perfect finish.</p>
</div>
<div className="space-y-4">
<svg className="lucide lucide-shield-check w-8 h-8 stroke-[1.5] text-white" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="font-medium text-lg text-white">Hygienic Space</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Strict sanitation protocols ensuring a clean and safe environment.</p>
</div>
<div className="space-y-4">
<svg className="lucide lucide-zap w-8 h-8 stroke-[1.5] text-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h3 className="font-medium text-lg text-white">Sharp Details</h3>
<p className="text-neutral-500 text-sm font-light leading-relaxed">Precision lining and razor work for the sharpest look possible.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="about">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="grid grid-cols-2 gap-4">
<img alt="Fresh Fade" className="w-full h-80 object-cover opacity-90 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1622286342621-4bd786c2447c?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<img alt="Barber Fade" className="w-full h-80 object-cover mt-8 opacity-90 grayscale hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1605497788044-5a32c7078486?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<p className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-4">Who We Are</p>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-8 text-white">
                    MASTERS OF THE MODERN FADE SINCE 2018
                </h2>
<p className="text-lg font-light leading-relaxed mb-6 text-neutral-400">
                    Clips &amp; Snips is a modern Melbourne barbershop specializing in precision fades and bespoke grooming. From zero fades to textured crops, we define the modern standard.
                </p>
<p className="text-lg font-light leading-relaxed mb-10 text-neutral-400">
                    Our team of expert barbers understands head shape and hair texture, ensuring every cut is tailored perfectly to your style.
                </p>
<a className="inline-block border px-8 py-3 text-sm font-medium transition-colors uppercase tracking-wider border-neutral-700 text-white hover:border-white" href="#services">
                    Our Services
                </a>
</div>
</div>
</section>

<section className="py-24 bg-black" id="pricing">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<p className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-2">Pricing Tariff</p>
<h2 className="text-4xl font-medium tracking-tight text-white">VIEW OUR BARBER PRICING LIST</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-x-16 gap-y-12">

<div className="space-y-8">
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Standard Cut</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Consultation, wash, cut &amp; style</p>
</div>
<span className="text-xl font-normal text-white">$40.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Skin Fade</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Zero or foil fade finish</p>
</div>
<span className="text-xl font-normal text-white">$45.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div className="">
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Children's Cut</h4>
<p className="text-sm font-light mt-1 text-neutral-600">For ages under 12</p>
</div>
<span className="text-xl font-normal text-white">$30.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Buzz Cut</h4>
<p className="text-sm font-light mt-1 text-neutral-600">One grade all over</p>
</div>
<span className="text-xl font-normal text-white">$25.00</span>
</div>
</div>

<div className="space-y-8">
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Beard Trim</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Shape up with clippers</p>
</div>
<span className="text-xl font-normal text-white">$25.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Hot Towel Shave</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Traditional straight razor shave</p>
</div>
<span className="text-xl font-normal text-white">$50.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Facial Cleansing</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Cleanse, scrub &amp; mask</p>
</div>
<span className="text-xl font-normal text-white">$35.00</span>
</div>
<div className="flex justify-between items-baseline border-b pb-4 group border-neutral-900">
<div>
<h4 className="text-xl font-normal group-hover:text-red-500 transition-colors text-white">Full Service</h4>
<p className="text-sm font-light mt-1 text-neutral-600">Haircut + Beard + Facial</p>
</div>
<span className="text-xl font-normal text-white">$90.00</span>
</div>
</div>
</div>
<div className="mt-16 text-center">
<a className="glow-red inline-block px-8 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wider bg-red-600 text-white hover:bg-red-600" href="https://www.fresha.com/a/clips-snips-barbershop-melbourne-754-north-road-ztvj6wac?pId=1308411">
                    Book Now
                </a>
</div>
</div>
</section>

<section className="grid grid-cols-1 md:grid-cols-2" id="services">
<div className="relative h-[400px] md:h-[600px] group overflow-hidden">
<img alt="Fade Styling" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors bg-black/40"></div>
<div className="absolute bottom-10 left-10">
<h3 className="text-3xl font-medium tracking-tight mb-2 text-white">PRECISION FADES</h3>
<p className="font-light max-w-sm text-neutral-300">Flawless gradients and sharp lineups that define the modern gentleman.</p>
</div>
</div>
<div className="relative h-[400px] md:h-[600px] group overflow-hidden">
<img alt="Beard Grooming" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
<div className="absolute inset-0 group-hover:bg-black/20 transition-colors bg-black/40"></div>
<div className="absolute bottom-10 left-10">
<h3 className="text-3xl font-medium tracking-tight mb-2 text-white">BEARD SCULPTING</h3>
<p className="font-light max-w-sm text-neutral-300">Hot towel shaves, beard fades, and premium facial treatments.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950" id="barbers">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="text-center mb-16">
<p className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-2">Our Barbers</p>
<h2 className="text-4xl font-medium tracking-tight text-white">MEET OUR FADE AND <br/> CUTTING EXPERTS</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-24">

<div className="group">
<div className="relative overflow-hidden mb-6 h-96">
<img alt="Barber Alex" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1580618672591-eb180b1a973f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l-2 pl-4 border-neutral-700">
<p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Senior Barber</p>
<h3 className="text-2xl font-medium mb-3 text-white">Alex Mitchell</h3>
<p className="text-sm font-light leading-relaxed pr-2 text-neutral-400">
                            With over 10 years of experience, Alex specializes in classic cuts and intricate skin fades. His attention to detail ensures a perfect finish every time.
                        </p>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden mb-6 h-96">
<img alt="Barber David" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1635273051937-93c457debabf?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l-2 pl-4 border-neutral-700">
<p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Master Barber</p>
<h3 className="text-2xl font-medium mb-3 text-white">David Chen</h3>
<p className="text-sm font-light leading-relaxed pr-2 text-neutral-400">
                            David is our beard sculpting expert. From hot towel shaves to perfectly blended beard fades, he transforms facial hair into a masterpiece.
                        </p>
</div>
</div>

<div className="group">
<div className="relative overflow-hidden mb-6 h-96">
<img alt="Barber Marcus" className="w-full h-full object-cover filter grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="border-l-2 pl-4 border-neutral-700">
<p className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-1">Stylist</p>
<h3 className="text-2xl font-medium mb-3 text-white">Marcus James</h3>
<p className="text-sm font-light leading-relaxed pr-2 text-neutral-400">
                            Known for his creative vision, Marcus excels in modern textured crops and trend-setting styles. He brings a fresh perspective to traditional barbering.
                        </p>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 border-t pt-16 border-neutral-900">
<div>
<span className="block text-5xl font-medium tracking-tighter mb-2 text-white">25</span>
<span className="text-sm text-neutral-500 font-normal">Years of  Experience</span>
</div>
<div>
<span className="block text-5xl font-medium tracking-tighter mb-2 text-white">8K+</span>
<span className="text-sm text-neutral-500 font-normal">Fresh  Fades</span>
</div>
<div className="">
<span className="block text-5xl font-medium tracking-tighter mb-2 text-white">12</span>
<span className="text-sm text-neutral-500 font-normal">Professional  Awards</span>
</div>
<div>
<span className="block text-5xl font-medium tracking-tighter mb-2 text-white">99%</span>
<span className="text-sm text-neutral-500 font-normal">Customer  Satisfaction</span>
</div>
</div>
</div>
</section>

<section className="bg-black">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6">
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1599351431202-6e0c051ddfa0?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1517832606299-7ae9b720a186?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1621605815971-fbc98d665033?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1503951914875-befbb647e84c?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden hidden lg:block">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1532710093739-9470acff878f?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square relative group overflow-hidden hidden lg:block">
<img className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110 opacity-70 group-hover:opacity-100 grayscale hover:grayscale-0" src="https://images.unsplash.com/photo-1593702295094-aea22597af65?q=80&amp;w=500&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</section>

<section className="py-32 text-center px-6 bg-neutral-900">
<div className="max-w-3xl mx-auto">
<p className="text-sm font-medium uppercase tracking-widest text-neutral-500 mb-8">Testimonial</p>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-12 text-white">WHAT PEOPLE SAY</h2>
<div className="relative">
<svg className="lucide lucide-quote w-12 h-12 mx-auto mb-8 opacity-50 fill-current text-neutral-700" data-lucide="quote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path><path d="M5 3a2 2 0 0 0-2 2v6a2 2 0 0 0 2 2 1 1 0 0 1 1 1v1a2 2 0 0 1-2 2 1 1 0 0 0-1 1v2a1 1 0 0 0 1 1 6 6 0 0 0 6-6V5a2 2 0 0 0-2-2z"></path></svg>
<blockquote className="text-xl md:text-2xl font-light leading-relaxed mb-8 text-neutral-300">
                    "Finally found a barber who understands how to do a proper skin fade. The attention to detail is unmatched and the hot towel shave is an absolute must."
                </blockquote>
<cite className="not-italic font-medium text-lg tracking-wide text-white">— Mark Johnson, Client</cite>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-black border-neutral-900">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="text-xl tracking-tight font-medium uppercase block mb-6 text-white" href="#">Clips &amp; Snips</a>
<div className="flex space-x-4">
<a className="transition-colors text-neutral-400 hover:text-white" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-white" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="transition-colors text-neutral-400 hover:text-white" href="#">
<svg className="lucide lucide-mail w-5 h-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div>
<h4 className="font-medium uppercase tracking-wider text-sm mb-6 text-white">Contact Us</h4>
<p className="text-neutral-500 font-light text-sm mb-2">Clips &amp; Snips Barbershop</p>
<p className="text-neutral-500 font-light text-sm mb-2">754 North Rd, Melbourne VIC 3163</p>
<p className="text-neutral-500 font-light text-sm mb-2">Australia</p>
<p className="text-neutral-500 font-light text-sm mt-4">+61 (0) 412 345 678</p>
</div>
<div>
<h4 className="font-medium uppercase tracking-wider text-sm mb-6 text-white">Working Hours</h4>
<div className="grid grid-cols-2 gap-x-4 text-sm font-light text-neutral-500">
<span className="mb-2">Mon - Fri:</span>
<span className="text-neutral-400">9:00 - 19:00</span>
<span className="mb-2">Saturday:</span>
<span className="text-neutral-400">9:00 - 18:00</span>
<span className="mb-2">Sunday:</span>
<span className="text-neutral-400">10:00 - 16:00</span>
</div>
</div>
<div>
<h4 className="font-medium uppercase tracking-wider text-sm mb-6 text-white">Book an Appointment</h4>
<p className="text-neutral-500 font-light text-sm mb-6">Skip the queue and book your slot online.</p>
<a className="glow-red inline-block w-full text-center px-6 py-3 text-sm font-medium transition-all duration-300 uppercase tracking-wide bg-red-600 text-white hover:bg-red-600" href="https://www.fresha.com/a/clips-snips-barbershop-melbourne-754-north-road-ztvj6wac?pId=1308411">
                    Book Now
                </a>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t flex flex-col md:flex-row justify-between items-center text-xs font-light border-neutral-900 text-neutral-600">
<p>© 2024 Clips &amp; Snips Barbershop. All rights reserved.</p>
<div className="space-x-6 mt-4 md:mt-0">
<a className="hover:text-neutral-400" href="#">Privacy Policy</a>
<a className="hover:text-neutral-400" href="#">Terms of Service</a>
</div>
</div>
</footer>


    </>
  );
}
