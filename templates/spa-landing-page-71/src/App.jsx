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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



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
      

<nav className="absolute top-0 w-full z-50 px-6 py-6 lg:px-12 flex justify-between items-center text-white">
<div className="text-2xl font-serif font-semibold tracking-tight">Pure Harmony</div>
<div className="hidden md:flex space-x-8 text-sm font-medium tracking-wide">
<a className="hover:text-[#d4c5b0] transition-colors" href="#about">About</a>
<a className="hover:text-[#d4c5b0] transition-colors" href="#services">Services</a>
<a className="hover:text-[#d4c5b0] transition-colors" href="#gallery">Gallery</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-6 py-2.5 border border-white/30 rounded-full text-sm font-medium hover:bg-white hover:text-black transition-all" href="#booking">
            Contact
        </a>
<button className="md:hidden text-white">
<i className="w-6 h-6" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</nav>

<section className="relative w-full min-h-[90vh] flex flex-col justify-end pb-12 md:pb-24 px-6 lg:px-12">

<div className="absolute inset-0 z-[-1]">
<img alt="Relaxing Spa Massage" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1544161515-4ab6ce6db874?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/40"></div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
</div>
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 md:gap-12 w-full max-w-7xl mx-auto">
<div className="max-w-3xl">
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif font-semibold text-white tracking-tight leading-[1.1]">
                    Relax, Recharge <br className="hidden md:block"/>
<span className="italic font-light text-[#d4c5b0]">And Feel Your Best</span><br/>
                    in Tangier
                </h1>
</div>
<div className="flex flex-col gap-6 max-w-sm md:pb-4">
<p className="text-white/80 text-lg font-light leading-relaxed">
                    Premium spa &amp; beauty treatments designed for your comfort and well-being.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center px-8 py-4 bg-white text-black rounded-full font-medium text-base hover:bg-gray-100 transition-colors gap-2" href="https://wa.me/1234567890" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="1.5"></i>
                        Book on WhatsApp
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="about">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 md:gap-24">
<div className="md:col-span-5 flex flex-col justify-between">
<div>
<h2 className="text-3xl md:text-4xl font-serif font-semibold tracking-tight text-gray-900 mb-6">
                        About <span className="italic font-light text-[#8b7d6b]">Us</span>
</h2>
<p className="text-sm text-gray-500 uppercase tracking-widest font-medium mb-4">Welcome to Tranquility</p>
<p className="text-base text-gray-600 leading-relaxed max-w-sm">
                        Treat yourself to the gift of wellness with soothing treatments that quiet your mind and nurture your body.
                    </p>
</div>
</div>
<div className="md:col-span-7">
<p className="text-2xl md:text-3xl lg:text-4xl font-light text-gray-900 leading-snug">
                    At Pure Harmony Beauty Center, we offer a calm, clean, and professional environment where every detail is designed for your relaxation. Our expert team ensures high-quality treatments tailored to your needs.
                </p>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 bg-white" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-8 mb-16 md:mb-24">
<h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-gray-900">
                    Our Top <span className="italic font-light text-[#8b7d6b]">Services</span>
</h2>
<p className="max-w-md text-lg text-gray-600 font-light leading-relaxed">
                    Whether you're recovering from tension or simply need a wellness escape, we offer a curated selection of therapies.
                </p>
</div>

<div className="flex overflow-x-auto hide-scrollbar gap-8 md:gap-12 pb-12 snap-x">

<div className="flex-none w-[280px] md:w-[320px] snap-center group cursor-pointer">
<div className="w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden mb-6 relative">
<img alt="Relaxing Massage" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-center text-gray-900 mb-2">Relaxing Massage</h3>
<p className="text-base text-gray-600 text-center font-light">Release stress and tension</p>
</div>

<div className="flex-none w-[280px] md:w-[320px] snap-center group cursor-pointer pt-8 md:pt-16">
<div className="w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden mb-6 relative">
<img alt="Facial Treatments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-center text-gray-900 mb-2">Facial Treatments</h3>
<p className="text-base text-gray-600 text-center font-light">Glow and rejuvenate your skin</p>
</div>

<div className="flex-none w-[280px] md:w-[320px] snap-center group cursor-pointer">
<div className="w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden mb-6 relative">
<img alt="Nails &amp; Pedicure" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-center text-gray-900 mb-2">Nails &amp; Pedicure</h3>
<p className="text-base text-gray-600 text-center font-light">Perfect care for hands and feet</p>
</div>

<div className="flex-none w-[280px] md:w-[320px] snap-center group cursor-pointer pt-8 md:pt-16 pr-6 md:pr-0">
<div className="w-full aspect-[4/5] rounded-t-full rounded-b-3xl overflow-hidden mb-6 relative">
<img alt="Hair &amp; Beauty" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560066984-138dadb4c035?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-500"></div>
</div>
<h3 className="text-2xl font-serif font-semibold tracking-tight text-center text-gray-900 mb-2">Hair &amp; Beauty</h3>
<p className="text-base text-gray-600 text-center font-light">Professional styling and care</p>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 lg:px-12 max-w-7xl mx-auto border-t border-gray-200">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<p className="text-lg text-gray-600 font-light leading-relaxed max-w-md">
                Take a break from stress and enter a space of peace. Our expert massage therapists and spa professionals provide a personalized experience.
            </p>
<p className="text-2xl md:text-3xl font-serif font-medium text-gray-900 leading-snug tracking-tight">
                Give Yourself The Gift Of Calm And Wellness With Our Expert Spa Treatments
            </p>
</div>
</section>

<section className="bg-[#2a2c24] py-20 md:py-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-12 md:gap-8 divide-x divide-white/10">
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-tight mb-2">100<span className="text-3xl md:text-5xl">%</span></div>
<div className="text-sm md:text-base text-gray-400 font-light">Client Satisfaction</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4">
<div className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-tight mb-2">10<span className="text-3xl md:text-5xl">+</span></div>
<div className="text-sm md:text-base text-gray-400 font-light">Years Experience</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 border-t border-white/10 md:border-t-0 pt-12 md:pt-0">
<div className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-tight mb-2">30<span className="text-3xl md:text-5xl">+</span></div>
<div className="text-sm md:text-base text-gray-400 font-light">Treatments Offered</div>
</div>
<div className="flex flex-col items-center justify-center text-center px-4 border-t border-white/10 md:border-t-0 pt-12 md:pt-0">
<div className="text-4xl md:text-6xl font-serif font-semibold text-white tracking-tight mb-2">7/7</div>
<div className="text-sm md:text-base text-gray-400 font-light">Open Daily</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="gallery">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8 md:gap-16">

<div className="lg:col-span-4 flex flex-col gap-12">
<div>
<p className="text-lg text-gray-600 font-light leading-relaxed">
                        Healing starts from the inside. Our holistic approach to wellness ensures you leave feeling refreshed, rebalanced, and radiant—every time you visit.
                    </p>
</div>
<div className="flex flex-col gap-6">
<img alt="Spa Detail" className="w-full aspect-[4/5] object-cover rounded-3xl" src="https://images.unsplash.com/photo-1540555700478-4be289fbecef?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Towels" className="w-full aspect-video object-cover rounded-3xl" src="https://images.unsplash.com/photo-1620916297397-a4a5402a3c6c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 lg:mt-24">
<img alt="Massage Scene" className="w-full aspect-square object-cover rounded-3xl" src="https://images.unsplash.com/photo-1519823551278-64ac92734fb1?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<img alt="Facial" className="w-full aspect-[4/5] object-cover rounded-3xl" src="https://images.unsplash.com/photo-1552693673-1bf958298935?q=80&amp;w=2073&amp;auto=format&amp;fit=crop"/>
<p className="text-lg text-gray-600 font-light leading-relaxed mt-6">
                    We combine traditional techniques with modern wellness therapies to create a spa experience that soothes the body and nurtures the mind.
                </p>
</div>

<div className="lg:col-span-4 flex flex-col gap-6 lg:-mt-12">
<img alt="Spa Room" className="w-full aspect-video object-cover rounded-3xl" src="https://images.unsplash.com/photo-1596178065887-1198b6148b2b?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<img alt="Oils" className="w-full aspect-square object-cover rounded-3xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="mt-8">
<h3 className="text-3xl md:text-5xl font-serif font-semibold tracking-tight text-gray-900 leading-[1.1]">
                        Our Spa Creates A Sanctuary Of Calm With Every Soothing <br/>
<span className="italic font-light text-[#8b7d6b]">Treatment You Receive</span>
</h3>
</div>
</div>
</div>
</section>

<section className="bg-white py-24 md:py-32 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 md:gap-20 items-center mb-32">

<div className="lg:col-span-5 h-[600px]">
<img alt="Spa Candles" className="w-full h-full object-cover rounded-[2.5rem]" src="https://images.unsplash.com/photo-1583416750470-965b2707b355?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>

<div className="lg:col-span-7 flex flex-col justify-center">
<h2 className="text-4xl md:text-6xl font-serif font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                        Your Trusted <br/> Partner In <span className="italic font-light text-[#8b7d6b]">Holistic Wellness Care</span>
</h2>
<div className="space-y-10 mt-8">
<div>
<h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3 tracking-tight">
<i className="w-5 h-5 text-[#8b7d6b]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Professional and caring staff
                            </h4>
<p className="text-lg text-gray-600 font-light pl-8">Target sore muscles, joint pain, and chronic discomfort with focused techniques that naturally ease your body.</p>
</div>
<div>
<h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3 tracking-tight">
<i className="w-5 h-5 text-[#8b7d6b]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Clean and relaxing environment
                            </h4>
<p className="text-lg text-gray-600 font-light pl-8">Slow your mind, calm your nervous system, and enjoy a peaceful escape from life's busy pace.</p>
</div>
<div>
<h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3 tracking-tight">
<i className="w-5 h-5 text-[#8b7d6b]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                High-quality products
                            </h4>
<p className="text-lg text-gray-600 font-light pl-8">We use only premium, skin-safe products to ensure the best results and care for your body.</p>
</div>
<div>
<h4 className="text-xl font-semibold text-gray-900 mb-3 flex items-center gap-3 tracking-tight">
<i className="w-5 h-5 text-[#8b7d6b]" data-lucide="check-circle-2" strokeWidth="1.5"></i>
                                Transparent pricing
                            </h4>
<p className="text-lg text-gray-600 font-light pl-8">No hidden fees. Experience luxury treatments with clear and upfront pricing for peace of mind.</p>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-12 gap-y-16">
<div>
<h4 className="text-2xl font-serif font-semibold text-gray-900 mb-4 tracking-tight">Better Sleep</h4>
<p className="text-base text-gray-600 font-light leading-relaxed">Spa massages regulate sleep hormones, helping you fall asleep faster and enjoy deeper, more restorative sleep naturally.</p>
</div>
<div>
<h4 className="text-2xl font-serif font-semibold text-gray-900 mb-4 tracking-tight">Mental Clarity</h4>
<p className="text-base text-gray-600 font-light leading-relaxed">Releasing physical tension helps clear mental fog, improving focus, productivity, and emotional balance throughout your day.</p>
</div>
<div>
<h4 className="text-2xl font-serif font-semibold text-gray-900 mb-4 tracking-tight">Boost Immunity</h4>
<p className="text-base text-gray-600 font-light leading-relaxed">Massage stimulates the lymphatic system, boosting your body's ability to fight illness and reducing inflammation naturally.</p>
</div>
<div>
<h4 className="text-2xl font-serif font-semibold text-gray-900 mb-4 tracking-tight">Improved Circulation</h4>
<p className="text-base text-gray-600 font-light leading-relaxed">Enhances blood flow to your muscles and skin, aiding healing, detoxification, and a radiant, refreshed complexion.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1 h-[500px] lg:h-[700px] w-full">
<img alt="Spa Treatment" className="w-full h-full object-cover rounded-[2.5rem]" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=2120&amp;auto=format&amp;fit=crop"/>
</div>

<div className="order-1 lg:order-2 flex flex-col justify-center">
<h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-gray-900 mb-10 leading-tight">
                    Calm Your Senses <br/> With <span className="italic font-light text-[#8b7d6b]">Therapeutic Care</span>
</h2>
<div className="flex flex-col border-t border-gray-200">
<details className="group py-6 border-b border-gray-200" open="">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl text-gray-900 tracking-tight">
<span>Is booking required?</span>
<span className="transition group-open:rotate-180 text-gray-400">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-gray-600 mt-4 text-lg font-light leading-relaxed pr-8">
                            Yes, to ensure you receive the best experience and minimize wait times, we highly recommend booking your appointment in advance via WhatsApp.
                        </div>
</details>
<details className="group py-6 border-b border-gray-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl text-gray-900 tracking-tight">
<span>What services do you offer?</span>
<span className="transition group-open:rotate-180 text-gray-400">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-gray-600 mt-4 text-lg font-light leading-relaxed pr-8">
                            We offer a comprehensive range of services including relaxing massages, deep tissue therapies, rejuvenating facials, manicure/pedicure, and professional hair styling.
                        </div>
</details>
<details className="group py-6 border-b border-gray-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl text-gray-900 tracking-tight">
<span>Do you accept walk-ins?</span>
<span className="transition group-open:rotate-180 text-gray-400">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-gray-600 mt-4 text-lg font-light leading-relaxed pr-8">
                            While we do accommodate walk-ins if we have availability, we prioritize scheduled appointments. Booking ahead guarantees your preferred time and therapist.
                        </div>
</details>
<details className="group py-6 border-b border-gray-200">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-xl text-gray-900 tracking-tight">
<span>How can I book?</span>
<span className="transition group-open:rotate-180 text-gray-400">
<i className="w-6 h-6" data-lucide="plus" strokeWidth="1.5"></i>
</span>
</summary>
<div className="text-gray-600 mt-4 text-lg font-light leading-relaxed pr-8">
                            The fastest and easiest way to book is by clicking the WhatsApp button on our website. Our team will respond promptly to confirm your schedule.
                        </div>
</details>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 bg-white">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl md:text-5xl font-serif font-semibold tracking-tight text-gray-900 mb-16 text-center md:text-left">
                Our Client <span className="italic font-light text-[#8b7d6b]">Testimonial</span>
</h2>
<div className="flex overflow-x-auto hide-scrollbar gap-6 pb-8 snap-x">

<div className="flex-none w-[320px] md:w-[400px] snap-center bg-[#FAFAF8] p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<i className="w-10 h-10 text-gray-300 mb-6 fill-current" data-lucide="quote" strokeWidth="0"></i>
<p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                            "Very clean and relaxing place, amazing experience. The therapist was attentive and I felt completely renewed after my session. I will definitely be coming back."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-medium text-gray-900">Sarah M.</h5>
<div className="flex gap-1 text-[#8b7d6b] mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
</div>

<div className="flex-none w-[320px] md:w-[400px] snap-center bg-[#FAFAF8] p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<i className="w-10 h-10 text-gray-300 mb-6 fill-current" data-lucide="quote" strokeWidth="0"></i>
<p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                            "Professional team and welcoming atmosphere. From the warm welcome to the expert massage, everything was perfect. This place truly stands out in Tangier."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=1964&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-medium text-gray-900">Amina K.</h5>
<div className="flex gap-1 text-[#8b7d6b] mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
</div>

<div className="flex-none w-[320px] md:w-[400px] snap-center bg-[#FAFAF8] p-8 rounded-[2rem] flex flex-col justify-between">
<div>
<i className="w-10 h-10 text-gray-300 mb-6 fill-current" data-lucide="quote" strokeWidth="0"></i>
<p className="text-lg text-gray-700 font-light leading-relaxed mb-8">
                            "Perfect results, highly recommended. Every visit here feels like a complete reset for my mind and body. Nothing beats the authentic healing energy here."
                        </p>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200 overflow-hidden">
<img alt="User" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<h5 className="font-medium text-gray-900">Youssef B.</h5>
<div className="flex gap-1 text-[#8b7d6b] mt-1">
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
<i className="w-4 h-4 fill-current" data-lucide="star" strokeWidth="1"></i>
</div>
</div>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-8">
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-800"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
<div className="w-2 h-2 rounded-full bg-gray-300"></div>
</div>
</div>
</section>

<section className="py-24 md:py-32 px-6 lg:px-12 max-w-7xl mx-auto" id="booking">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div>
<h2 className="text-5xl md:text-6xl font-serif font-semibold tracking-tight text-gray-900 mb-2 leading-tight">
                    Book Your <br/> <span className="italic font-light text-[#8b7d6b]">Appointment Today</span>
</h2>
<p className="text-lg text-gray-600 font-light mb-10">Fill out the form below or message us directly on WhatsApp for faster booking.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-gray-900 transition-colors placeholder:font-light" placeholder="First name" type="text"/>
<input className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-gray-900 transition-colors placeholder:font-light" placeholder="Last name" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<input className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-gray-900 transition-colors placeholder:font-light" placeholder="Email (optional)" type="email"/>
<input className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-gray-900 transition-colors placeholder:font-light" placeholder="Phone Number" type="tel"/>
</div>

<div className="relative">
<select className="w-full bg-transparent border border-gray-200 rounded-xl px-4 py-4 text-base focus:outline-none focus:border-gray-900 transition-colors appearance-none font-light text-gray-500">
<option disabled="" selected="" value="">Select Service</option>
<option value="massage">Relaxing Massage</option>
<option value="facial">Facial Treatment</option>
<option value="nails">Nails &amp; Pedicure</option>
</select>
<i className="absolute right-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400 pointer-events-none" data-lucide="chevron-down" strokeWidth="1.5"></i>
</div>
<button className="w-full bg-[#2a2c24] text-white rounded-xl py-4 text-lg font-medium hover:bg-[#1f211a] transition-colors mt-4" type="button">
                        Book Appointment
                    </button>
<div className="relative flex items-center py-4">
<div className="flex-grow border-t border-gray-200"></div>
<span className="flex-shrink-0 mx-4 text-gray-400 text-sm font-light">OR</span>
<div className="flex-grow border-t border-gray-200"></div>
</div>
<a className="w-full flex items-center justify-center gap-2 bg-[#25D366] text-white rounded-xl py-4 text-lg font-medium hover:bg-[#20bd5a] transition-colors" href="https://wa.me/1234567890" target="_blank">
<i className="w-5 h-5" data-lucide="message-circle" strokeWidth="2"></i>
                        Continue on WhatsApp
                    </a>
</form>
</div>

<div className="h-[600px] lg:h-[800px] w-full hidden md:block">
<img alt="Spa Booking" className="w-full h-full object-cover rounded-[2.5rem] rounded-tr-[8rem]" src="https://images.unsplash.com/photo-1515377905703-c4788e51af15?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" />
</img></div>
</div>
</section>

<footer className="bg-[#1a1c17] text-white pt-20 pb-10 px-6 lg:px-12">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16 border-b border-white/10 pb-16">
<div className="md:col-span-1">
<div className="text-3xl font-serif font-semibold tracking-tight mb-6">Pure Harmony</div>
<p className="text-gray-400 text-sm font-light leading-relaxed mb-6 pr-4">
                        Taking time for yourself isn't selfish—it's essential. Regular massage helps maintain your physical and emotional well-being over time.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="twitter" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full border border-white/20 flex items-center justify-center hover:bg-white hover:text-black transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram" strokeWidth="1.5"></i>
</a>
</div>
</div>
<div>
<h5 className="font-medium text-lg mb-6">Company</h5>
<ul className="space-y-4 text-gray-400 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Treatment</a></li>
<li><a className="hover:text-white transition-colors" href="#">Booking</a></li>
<li><a className="hover:text-white transition-colors" href="#">Therapist</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Career</a></li>
</ul>
</div>
<div>
<h5 className="font-medium text-lg mb-6">Contact</h5>
<ul className="space-y-4 text-gray-400 text-sm font-light">
<li>Phone: +212 555 000 000</li>
<li>WhatsApp: +212 666 000 000</li>
<li>Email: hello@pureharmony.com</li>
<li className="pt-2">123 Wellness Street,<br/>Tangier, Morocco</li>
</ul>
</div>
<div>
<h5 className="font-medium text-lg mb-6">Policy</h5>
<ul className="space-y-4 text-gray-400 text-sm font-light">
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="text-center text-gray-500 text-sm font-light">
                © Copyright 2025, All Rights Reserved by Pure Harmony
            </div>
</div>
</footer>

<a className="fixed bottom-6 right-6 z-50 bg-[#25D366] text-white p-4 rounded-full shadow-2xl hover:bg-[#20bd5a] hover:-translate-y-1 transition-all duration-300 flex items-center justify-center group" href="https://wa.me/1234567890" target="_blank">
<i className="w-7 h-7" data-lucide="message-circle" strokeWidth="2"></i>

<span className="absolute right-full mr-4 bg-white text-gray-900 text-sm px-3 py-1.5 rounded-lg shadow-sm opacity-0 group-hover:opacity-100 transition-opacity whitespace-nowrap font-medium pointer-events-none">
            Book via WhatsApp
        </span>
</a>



    </>
  );
}
