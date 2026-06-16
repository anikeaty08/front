import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



            document.write(new Date().getFullYear())
          


      lucide.createIcons();
    


      document.addEventListener('DOMContentLoaded', () => {
        const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
        const observer = new IntersectionObserver((entries, observer) => {
          entries.forEach(entry => {
            if (entry.isIntersecting) {
              entry.target.classList.add('active');
              observer.unobserve(entry.target);
            }
          });
        }, observerOptions);
        const revealElements = document.querySelectorAll('.reveal');
        revealElements.forEach(el => observer.observe(el));
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 transition-all duration-300 backdrop-blur-md bg-[#14261C]/40 border-b border-white/10">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div className="flex items-center gap-3">
<iconify-icon className="text-[#C5B378]" height="28" icon="lucide:sparkles" width="28"></iconify-icon>
<div className="flex flex-col">
<span className="text-[#C5B378] text-xl font-medium tracking-tight leading-none font-serif-text italic">
              EXCLUSIVE
            </span>
<span className="text-[#C5B378] text-[0.65rem] font-medium tracking-[0.2em] leading-none mt-1 uppercase font-sans">
              Cleaning
            </span>
</div>
</div>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-gray-200 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors" href="#home">
            Home
          </a>
<a className="text-gray-200 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors" href="#services">
            Services
          </a>
<a className="text-gray-200 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors" href="#about">
            About Us
          </a>
<a className="text-gray-200 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors" href="#portfolio">
            Portfolio
          </a>
<a className="text-gray-200 hover:text-white text-xs font-medium uppercase tracking-widest transition-colors" href="#testimonials">
            Testimonials
          </a>
</nav>

<div className="hidden lg:block">
<a className="bg-white hover:bg-gray-100 text-[#14261C] px-6 py-2.5 rounded-full text-xs font-bold uppercase tracking-wide transition-colors shadow-lg" href="#quote">
            Get a Quote
          </a>
</div>

<button className="lg:hidden text-[#C5B378]">
<iconify-icon height="24" icon="lucide:menu" width="24"></iconify-icon>
</button>
</div>
</header>

<section className="relative h-screen w-full overflow-hidden flex flex-col justify-center items-center text-center py-8 z-10" id="home">
<div className="absolute inset-0 -z-10 bg-[#14261C]">
<img alt="Pristine Living Room" className="w-full h-full object-cover opacity-60 animate-ken-burns" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6e900613-1c4d-4abc-8ea4-87e160617976_3840w.png" style={{}}/>
<div className="bg-gradient-to-b from-[#14261C]/60 via-transparent to-[#14261C]/90 absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="flex flex-col max-w-5xl mt-16 px-6 items-center justify-center">
<span className="text-[#C5B378] text-xs tracking-[0.2em] uppercase font-medium mb-8 reveal active border border-[#C5B378]/30 px-4 py-1.5 rounded-full backdrop-blur-md shadow-sm bg-[#14261C]/30">
          Gold Coast's Finest
        </span>
<h1 className="md:text-8xl leading-[0.9] reveal delay-100 active text-6xl font-medium italic text-white tracking-tighter font-serif-text drop-shadow-2xl mb-8">
          Premium Cleaning
          <br className="hidden md:block"/>
          for Premium Spaces
        </h1>
<p className="text-gray-200 text-lg md:text-xl font-light tracking-wide max-w-2xl reveal delay-200 mb-12 leading-relaxed active drop-shadow-md">
          Reliable. Detailed. Fully Insured. Tailored to Your Space.
          <br className="hidden md:block"/>
          Experience the
          <span className="text-[#C5B378] font-serif-display italic">
            Exclusive
          </span>
          standard.
        </p>
<div className="flex gap-5 flex-col sm:flex-row reveal delay-300 active">
<a className="group relative inline-flex items-center justify-center px-10 py-4 bg-[#C5B378] text-[#14261C] rounded-full overflow-hidden transition-transform hover:scale-105 shadow-[0_0_40px_-10px_#C5B378]" href="#quote">
<span className="relative text-sm font-bold tracking-widest z-10 uppercase">
              Get a Free Quote
            </span>
<div className="absolute inset-0 bg-white/30 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</a>
<a className="group relative inline-flex items-center justify-center px-10 py-4 bg-transparent border border-white/20 text-white rounded-full overflow-hidden transition-transform hover:scale-105 hover:bg-white/10" href="#services">
<span className="relative text-sm font-bold tracking-widest z-10 uppercase">
              Our Services
            </span>
</a>
</div>

<div className="mt-20 reveal delay-500 active w-full overflow-hidden">
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-[#14261C] text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Our Premium Services
          </h2>
<p className="text-lg text-gray-500">
            Tailored cleaning solutions for every need, delivered with
            precision.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C5B378]/50 hover:shadow-lg hover:shadow-[#C5B378]/5 transition-all duration-300 hover:shadow-2xl hover:shadow-[#C5B378]/10 hover:-translate-y-1 bg-white">
<div className="w-12 h-12 bg-[#14261C] rounded-lg flex items-center justify-center mb-6 text-[#C5B378]">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#14261C] mb-3 tracking-tight group-hover:text-[#C5B378] transition-colors">
              Regular Residential
            </h3>
<p className="text-gray-600 mb-6 leading-relaxed">
              Keep your home pristine with our scheduled weekly or fortnightly
              maintenance cleans.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Consistent team
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Detailed surface polishing
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Final aroma touch
              </li>
</ul>
<a className="inline-flex items-center text-[#14261C] font-medium text-sm border-b border-[#C5B378] pb-0.5 hover:opacity-70 transition-opacity" href="#quote">
              Get a Quote
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C5B378]/50 hover:shadow-lg hover:shadow-[#C5B378]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#14261C] rounded-lg flex items-center justify-center mb-6 text-[#C5B378]">
<svg className="lucide lucide-droplets w-6 h-6" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#14261C] mb-3 tracking-tight">
              Deep / Spring Cleaning
            </h3>
<p className="text-gray-600 mb-6 leading-relaxed">
              A comprehensive top-to-bottom clean to refresh your space
              completely.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Behind furniture
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Skirting boards &amp; tracks
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Intensive kitchen/bath scrub
              </li>
</ul>
<a className="inline-flex items-center text-[#14261C] font-medium text-sm border-b border-[#C5B378] pb-0.5 hover:opacity-70 transition-opacity" href="#quote">
              Get a Quote
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C5B378]/50 hover:shadow-lg hover:shadow-[#C5B378]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#14261C] rounded-lg flex items-center justify-center mb-6 text-[#C5B378]">
<svg className="lucide lucide-key w-6 h-6" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
</div>
<h3 className="text-xl font-medium text-[#14261C] mb-3 tracking-tight">
              Bond / End of Lease
            </h3>
<p className="text-gray-600 mb-6 leading-relaxed">
              100% Bond Back Guarantee cleaning to satisfy the strictest
              property managers.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Agency approved checklist
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Oven &amp; windows included
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Receipt provided
              </li>
</ul>
<a className="inline-flex items-center text-[#14261C] font-medium text-sm border-b border-[#C5B378] pb-0.5 hover:opacity-70 transition-opacity" href="#quote">
              Get a Quote
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C5B378]/50 hover:shadow-lg hover:shadow-[#C5B378]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#14261C] rounded-lg flex items-center justify-center mb-6 text-[#C5B378]">
<svg className="lucide lucide-hotel w-6 h-6" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<h3 className="text-xl font-medium text-[#14261C] mb-3 tracking-tight">
              Airbnb / Holiday Rental
            </h3>
<p className="text-gray-600 mb-6 leading-relaxed">
              Fast turnovers with 5-star hotel quality standards for your
              guests.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Linen changing
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Re-stocking amenities
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Photo reporting
              </li>
</ul>
<a className="inline-flex items-center text-[#14261C] font-medium text-sm border-b border-[#C5B378] pb-0.5 hover:opacity-70 transition-opacity" href="#quote">
              Get a Quote
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>

<div className="group p-8 rounded-2xl bg-gray-50 border border-gray-100 hover:border-[#C5B378]/50 hover:shadow-lg hover:shadow-[#C5B378]/5 transition-all duration-300">
<div className="w-12 h-12 bg-[#14261C] rounded-lg flex items-center justify-center mb-6 text-[#C5B378]">
<svg className="lucide lucide-building-2 w-6 h-6" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
</div>
<h3 className="text-xl font-medium text-[#14261C] mb-3 tracking-tight">
              Commercial Cleaning
            </h3>
<p className="text-gray-600 mb-6 leading-relaxed">
              Professional office and commercial space cleaning to impress your
              clients.
            </p>
<ul className="space-y-3 mb-8">
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                After-hours service
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Desk &amp; electronics sanitizing
              </li>
<li className="flex items-center gap-3 text-sm text-gray-700">
<svg className="lucide lucide-check w-4 h-4 text-[#C5B378]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Common area maintenance
              </li>
</ul>
<a className="inline-flex items-center text-[#14261C] font-medium text-sm border-b border-[#C5B378] pb-0.5 hover:opacity-70 transition-opacity" href="#quote">
              Get a Quote
              <svg className="lucide lucide-arrow-right w-4 h-4 ml-1" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#14261C] text-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-8">
            The Exclusive Standard
          </h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="mt-1 bg-[#C5B378] rounded-full p-1 h-fit w-fit">
<svg className="lucide lucide-check w-4 h-4 text-[#14261C]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Trained &amp; Uniformed Team
                </h4>
<p className="text-gray-400">
                  Our cleaners are professionals, not contractors. They are
                  trained in our specific detailed checklists.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-[#C5B378] rounded-full p-1 h-fit w-fit">
<svg className="lucide lucide-check w-4 h-4 text-[#14261C]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Public Liability Insurance
                </h4>
<p className="text-gray-400">
                  Peace of mind for your home and business. We are fully
                  covered.
                </p>
</div>
</div>
<div className="flex gap-4">
<div className="mt-1 bg-[#C5B378] rounded-full p-1 h-fit w-fit">
<svg className="lucide lucide-check w-4 h-4 text-[#14261C]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<h4 className="text-lg font-medium text-white mb-1">
                  Exclusive Finishing Touches
                </h4>
<p className="text-gray-400">
                  From our signature aroma finish to our precision in
                  organization.
                </p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-block bg-[#C5B378] hover:bg-[#b0a068] text-[#14261C] px-8 py-3 rounded-md text-base font-medium transition-colors" href="#quote">
              Request a Quote
            </a>
</div>
</div>
<div className="relative">
<img alt="Cleaning Detail" className="rounded-2xl shadow-2xl border border-white/10 opacity-90" src="https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&amp;w=1936&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="about">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<img className="rounded-xl shadow-lg mt-12 object-cover h-64 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg" style={{}}/>
<img className="rounded-xl shadow-lg object-cover h-64 w-full" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg" style={{}}/>
</div>
</div>
<div className="order-1 lg:order-2">
<span className="text-[#14261C] font-semibold text-sm tracking-wider uppercase mb-2 block">
            Our Story
          </span>
<h2 className="text-[#14261C] text-3xl md:text-4xl font-medium tracking-tight mb-6">
            Built on Trust &amp; Perfectionism
          </h2>
<div className="space-y-6 text-lg text-gray-600 leading-relaxed">
<p>
              Exclusive Cleaning didn't start as a corporation; it started with
              passion. It began with our founder's wife working solo, attending
              to homes with such meticulous care that news of her service spread
              purely by word of mouth.
            </p>
<p className="">
              Her standard was simple: clean it as if it were her own home, pay
              attention to the smallest details, and always be reliable.
            </p>
<p>
              As demand outgrew one person, we formally established . Today, we
              bring that same "owner's mindset" to every job, with a fully
              trained team that honors our humble beginnings and high standards.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="portfolio">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-[#14261C] text-3xl md:text-4xl font-medium tracking-tight mb-4">
            Real Results
          </h2>
<p className="text-lg text-gray-500">
            See the difference an Exclusive clean makes.
          </p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-2 gap-8">

<div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
<div className="relative flex h-64">
<div className="w-1/2 relative border-r border-white">
<span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm">
                  BEFORE
                </span>
<img className="w-full h-full object-cover grayscale brightness-75" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
<div className="w-1/2 relative">
<span className="absolute top-3 right-3 bg-[#C5B378] text-[#14261C] text-xs font-semibold px-2 py-1 rounded">
                  AFTER
                </span>
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp" style={{}}/>
</div>
</div>
<div className="p-4">
<p className="font-medium text-[#14261C]">Bond Clean - Kitchen</p>
</div>
</div>

<div className="bg-gray-50 rounded-xl overflow-hidden border border-gray-100">
<div className="relative flex h-64">
<div className="w-1/2 relative border-r border-white">
<span className="absolute top-3 left-3 bg-black/50 text-white text-xs font-semibold px-2 py-1 rounded backdrop-blur-sm">
                  BEFORE
                </span>
<img className="w-full h-full object-cover grayscale brightness-75" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="w-1/2 relative">
<span className="absolute top-3 right-3 bg-[#C5B378] text-[#14261C] text-xs font-semibold px-2 py-1 rounded">
                  AFTER
                </span>
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1595515106969-1ce29566ff1c?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
<div className="p-4">
<p className="font-medium text-[#14261C]">
                Deep Clean - Bathroom Tiles
              </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">
<div className="flex items-center justify-center gap-2 mb-4">
<svg className="lucide lucide-star w-5 h-5 fill-[#C5B378] text-[#C5B378]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#C5B378] text-[#C5B378]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#C5B378] text-[#C5B378]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#C5B378] text-[#C5B378]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-5 h-5 fill-[#C5B378] text-[#C5B378]" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<h2 className="text-center text-[#14261C] text-3xl md:text-4xl font-medium tracking-tight mb-16">
          Hundreds of happy clients
          <br/>
          across Gold Coast
        </h2>
<div className="grid md:grid-cols-3 gap-6">
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4 text-[#C5B378]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-lg italic">
              "We needed a bond clean on very short notice. Exclusive Cleaning
              was punctual, professional, and we got our full bond back without
              question. The smell was amazing!"
            </p>
<p className="font-medium text-[#14261C]">
              — Sarah Jenkins,
              <span className="text-gray-400 font-normal">Burleigh Heads</span>
</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4 text-[#C5B378]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-lg italic">
              "I've tried three different companies for my Airbnb, but these
              guys are on another level. The photo updates give me such peace of
              mind."
            </p>
<p className="font-medium text-[#14261C]">
              — Mike T,
              <span className="text-gray-400 font-normal">Surfers Paradise</span>
</p>
</div>
<div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100">
<div className="flex gap-1 mb-4 text-[#C5B378]">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-600 mb-6 text-lg italic">
              "Attention to detail is their strength. My house feels brand new
              after their spring clean service. Highly recommended."
            </p>
<p className="font-medium text-[#14261C]">
              — Emma R,
              <span className="text-gray-400 font-normal">Southport</span>
</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#14261C]" id="quote">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-10">
<h2 className="text-[#14261C] text-3xl font-medium tracking-tight mb-2">
              Get a Free Quote
            </h2>
<p className="text-gray-500">
              Tell us about your space. We'll get back to you quickly.
            </p>
</div>
<form action="#" className="space-y-6" method="POST">
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="name">
                  Full Name
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="phone">
                  Phone Number
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="phone" placeholder="0400 000 000" type="tel"/>
</div>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="email">
                  Email Address
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="email" placeholder="john@example.com" type="email"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="suburb">
                  Suburb
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="suburb" placeholder="e.g. Broadbeach" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="service">
                Service Type
              </label>
<div className="relative">
<select className="w-full appearance-none rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="service">
<option>Regular Residential Cleaning</option>
<option>Bond Clean / End of Lease</option>
<option>Deep / Spring Cleaning</option>
<option>Airbnb Cleaning</option>
<option>Commercial Cleaning</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-4 top-3.5 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="bedrooms">
                  Bedrooms
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="bedrooms" min="0" placeholder="e.g. 3" type="number"/>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="bathrooms">
                  Bathrooms
                </label>
<input className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="bathrooms" min="0" placeholder="e.g. 2" type="number"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-gray-700 mb-2" htmlFor="notes">
                Additional Notes
              </label>
<textarea className="w-full rounded-lg border-gray-200 bg-gray-50 px-4 py-3 text-gray-900 outline-none ring-1 ring-gray-200 focus:ring-2 focus:ring-[#C5B378] transition-all" id="notes" placeholder="Any specific requirements or access details?" rows="3"></textarea>
</div>
<button className="w-full bg-gradient-to-r from-[#14261C] to-[#1f382a] hover:from-[#1f382a] hover:to-[#2a4a35] text-white font-semibold text-lg py-4 rounded-lg shadow-xl shadow-[#14261C]/20 transition-all transform hover:-translate-y-0.5" type="submit">
              Submit Request
            </button>
</form>
<div className="mt-8 pt-8 border-t border-gray-100">
<p className="text-center text-sm text-gray-500 mb-4">
              Need an immediate response?
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="flex items-center justify-center gap-2 text-[#14261C] border border-gray-200 hover:border-[#C5B378] hover:bg-gray-50 px-6 py-3 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto" href="sms:+61400000000">
<svg className="lucide lucide-message-square w-4 h-4" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
                Send SMS Instead
              </a>
<a className="flex items-center justify-center gap-2 text-[#14261C] border border-gray-200 hover:border-[#C5B378] hover:bg-gray-50 px-6 py-3 rounded-lg text-sm font-medium transition-colors w-full sm:w-auto" href="mailto:contact@exclusivecleaning.com.au">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                Email Us
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-gray-100 border-b pt-16 pb-16">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8 text-center">
<div>
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#14261C]">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<h3 className="font-medium text-[#14261C] mb-2">Service Areas</h3>
<p className="text-gray-500">Gold Coast &amp; Surrounding Areas</p>
</div>
<div className="">
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#14261C]">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<h3 className="font-medium text-[#14261C] mb-2">Working Hours</h3>
<p className="text-gray-500">Mon - Sat: 7:00 AM - 6:00 PM</p>
</div>
<div className="">
<div className="w-12 h-12 bg-[#F5F5F0] rounded-full flex items-center justify-center mx-auto mb-4 text-[#14261C]">
<svg className="lucide lucide-phone w-5 h-5" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
</div>
<h3 className="font-medium text-[#14261C] mb-2">Direct Contact</h3>
<p className="text-gray-500">0400 000 000</p>
</div>
</div>
</div>
</section>

<footer className="text-white bg-[#14261C] border-white/5 border-t pt-16 pb-16">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row md:items-center gap-8 mb-12 gap-x-8 gap-y-8 items-start justify-between">
<div className="flex items-center gap-3">
<svg className="lucide lucide-sparkles text-[#C5B378] w-8 h-8" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<div className="flex flex-col">
<span className="text-[#C5B378] text-xl font-semibold tracking-tight leading-none">
                EXCLUSIVE
              </span>
<span className="text-[#C5B378] text-xs font-medium tracking-widest leading-none mt-1">
                CLEANING
              </span>
</div>
</div>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-[#C5B378] transition-colors" href="#">
<svg className="lucide lucide-instagram w-6 h-6" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="text-gray-400 hover:text-[#C5B378] transition-colors" href="#">
<svg className="lucide lucide-facebook w-6 h-6" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
</div>
</div>
<div className="grid md:grid-cols-4 gap-8 border-t border-white/10 pt-12">
<div className="col-span-2">
<p className="text-gray-400 max-w-sm">
              Premium cleaning services for residential and commercial spaces in
              Gold Coast. Built on a foundation of trust, quality, and attention
              to detail.
            </p>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white">Menu</h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#home">
                  Home
                </a>
</li>
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#services">
                  Services
                </a>
</li>
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#about">
                  About
                </a>
</li>
</ul>
</div>
<div className="">
<h4 className="font-medium mb-4 text-white">Legal</h4>
<ul className="space-y-3">
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                  Privacy Policy
                </a>
</li>
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors" href="#">
                  Terms of Service
                </a>
</li>
</ul>
</div>
</div>
<div className="text-sm text-gray-600 text-center mt-16" style={{}}>©  Exclusive Cleaning. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
