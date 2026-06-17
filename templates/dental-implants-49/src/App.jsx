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
      

<nav className="fixed w-full z-50 top-0 start-0 border-b border-gray-200 bg-white/95 backdrop-blur supports-[backdrop-filter]:bg-white/60">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-4 py-3 lg:px-8">
<a className="flex items-center space-x-2 rtl:space-x-reverse" href="#">
<div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:shield-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="self-center text-sm font-semibold tracking-tight whitespace-nowrap text-gray-900 uppercase font-geist" style={{}}>Implant<span className="text-blue-600 font-geist" style={{}}>Care</span></span>
</a>
<div className="flex space-x-3 md:space-x-4">
<a className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-gray-900 text-gray-50 hover:bg-gray-900/90 h-9 px-4 py-2 font-geist" href="#book" style={{}}>
                    Book Consultation
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-24 overflow-hidden bg-white">

<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[linear-gradient(to_right,#f0f0f0_1px,transparent_1px),linear-gradient(to_bottom,#f0f0f0_1px,transparent_1px)] bg-[size:6rem_4rem]"></div>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="max-w-7xl mx-auto px-4 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

<div className="lg:col-span-7 space-y-8">
<div className="inline-flex items-center rounded-full border border-blue-200 bg-blue-50 px-2.5 py-0.5 text-xs font-semibold text-blue-900 transition-colors focus:outline-none focus:ring-2 focus:ring-blue-400 focus:ring-offset-2 font-geist" style={{}}>
                        Accepting New Patients for 2024
                    </div>
<h1 className="scroll-m-20 text-4xl tracking-tight lg:text-6xl text-gray-950 leading-[1.1] font-geist font-semibold" style={{}}>
                        Permanent teeth, <br/>
<span className="font-semibold text-blue-600 font-geist" style={{}}>restored confidence.</span>
</h1>
<p className="leading-relaxed text-xl font-light text-gray-500 font-geist max-w-2xl">
                        Experience the gold standard in dental reconstruction. Minimally invasive implant procedures for a lifetime of comfort and functionality.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<div className="flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="flex items-center justify-center w-10 h-10 text-xs font-medium text-white bg-gray-900 border-2 border-white rounded-full font-geist" style={{}}>5k+</div>
</div>
<div className="flex flex-col">
<div className="flex text-purple-400 text-sm">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<span className="text-xs text-gray-500 font-medium font-geist" style={{}}>Trusted by 2,000+ patients</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 w-full" id="book">
<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm">
<div className="flex flex-col space-y-1.5 p-6">
<h3 className="font-semibold tracking-tight text-lg font-geist" style={{}}>Book Free Consultation</h3>
<p className="text-sm text-gray-500 font-geist" style={{}}>Secure your spot with Dr. Harrison today.</p>
</div>
<div className="p-6 pt-0">
<form className="space-y-4">
<div className="space-y-2">
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-geist" htmlFor="name" style={{}}>Full Name</label>
<input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-geist" htmlFor="phone" style={{}}>Phone Number</label>
<input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="phone" placeholder="(555) 123-4567" required="" type="tel"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70 font-geist" htmlFor="email" style={{}}>Email Address</label>
<input className="flex h-10 w-full rounded-md border border-gray-200 bg-white px-3 py-2 text-sm ring-offset-white file:border-0 file:bg-transparent file:text-sm file:font-medium placeholder:text-gray-500 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:cursor-not-allowed disabled:opacity-50" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<button className="inline-flex items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-gray-50 hover:bg-blue-600/90 h-10 px-4 py-2 w-full mt-2 font-geist" style={{}} type="submit">
                                    Request Appointment
                                    <iconify-icon className="ml-2" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<p className="text-center text-[10px] text-gray-400 mt-4 flex items-center justify-center gap-1 font-geist" style={{}}>
<iconify-icon icon="solar:lock-linear" width="12"></iconify-icon>
                                    Your information is secure and private.
                                </p>
</form>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-gray-100 bg-white">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 divide-y md:divide-y-0 md:divide-x divide-gray-100">

<div className="flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50/50 transition-colors">
<div className="mb-3 text-blue-600">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-3xl tracking-tight text-gray-900 mb-1 font-geist font-semibold" style={{}}>98%</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest font-geist" style={{}}>Success Rate</div>
</div>

<div className="flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50/50 transition-colors">
<div className="mb-3 text-blue-600">
<iconify-icon icon="solar:medal-ribbon-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-3xl tracking-tight text-gray-900 mb-1 font-geist font-semibold" style={{}}>15+</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest font-geist" style={{}}>Years Exp.</div>
</div>

<div className="flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50/50 transition-colors">
<div className="mb-3 text-blue-600">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="text-2xl tracking-tight text-gray-900 mb-1 mt-1 font-geist font-semibold">Lifetime</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest font-geist" style={{}}>Warranty</div>
</div>

<div className="flex flex-col items-center justify-center p-8 text-center group hover:bg-gray-50/50 transition-colors">
<div className="mb-3">
<iconify-icon icon="logos:google-icon" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-1 mb-1 mt-1">
<span className="text-2xl tracking-tight text-gray-900 font-geist font-semibold">5.0</span>
<div className="flex text-purple-400 text-xs">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
<div className="text-xs font-medium text-gray-500 uppercase tracking-widest font-geist" style={{}}>On Google</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50 border-b border-gray-200">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 block font-geist" style={{}}>The Difference</span>
<h2 className="text-3xl tracking-tight text-gray-950 sm:text-4xl font-geist font-semibold">Why patients trust us</h2>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:scanner-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>3D Precision Mapping</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        State-of-the-art CBCT scanning to map your nerve pathways and bone structure for 100% accurate placement.
                    </p>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>Sedation &amp; Comfort</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Anxiety-free dentistry. We offer multiple sedation options to ensure you sleep through the procedure without pain.
                    </p>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:medal-star-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>Specialist Expertise</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Treatment is performed by board-certified implantologists, not general dentists, ensuring higher success rates.
                    </p>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>Transparent Pricing</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        All-inclusive quotes with no hidden fees. We offer flexible 0% interest financing plans to make care accessible.
                    </p>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>Teeth in a Day</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Walk out with a new smile. For eligible patients, we can place implants and temporary crowns in a single visit.
                    </p>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6">
<div className="w-10 h-10 bg-blue-50 rounded-md flex items-center justify-center text-blue-600 mb-4 border border-blue-100">
<iconify-icon icon="solar:chat-round-check-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-2 font-geist" style={{}}>Ongoing Support</h3>
<p className="text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        We don't just treat you and leave. We provide comprehensive post-op care and regular check-ups.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-blue-600 font-semibold text-xs tracking-widest uppercase mb-3 block font-geist" style={{}}>Real Results</span>
<h2 className="text-3xl tracking-tight text-gray-950 mb-6 sm:text-4xl font-geist font-semibold">Transforming lives, one smile at a time.</h2>
<p className="text-lg text-gray-500 mb-8 leading-relaxed font-light font-geist" style={{}}>
                        See the difference dental implants can make. Unlike dentures, implants preserve your bone structure and provide the bite force of natural teeth.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
<iconify-icon className="text-blue-600 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="font-geist" style={{}}>Natural look and feel</span>
</li>
<li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
<iconify-icon className="text-blue-600 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="font-geist" style={{}}>Eat your favorite foods again</span>
</li>
<li className="flex items-center gap-3 text-gray-700 text-sm font-medium">
<iconify-icon className="text-blue-600 flex-shrink-0" icon="solar:check-circle-bold" width="20"></iconify-icon>
<span className="font-geist" style={{}}>Preserve facial structure</span>
</li>
</ul>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors font-geist" href="#book" style={{}}>
                        See more success stories 
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>

<div className="relative group">
<div className="grid grid-cols-2 gap-2 h-80 lg:h-96 rounded-xl overflow-hidden border border-gray-200 shadow-sm">
<div className="relative h-full">
<img alt="Before Implants" className="absolute inset-0 w-full h-full object-cover filter grayscale contrast-125" src="https://images.unsplash.com/photo-1555436169-20e93ea9a7ff?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div className="absolute bottom-4 left-4 bg-black/70 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-geist" style={{}}>Before</div>
</div>
<div className="relative h-full">
<img alt="After Implants" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-4 right-4 bg-blue-600/90 backdrop-blur-sm text-white text-[10px] font-medium px-2.5 py-1 rounded-md uppercase tracking-wide font-geist" style={{}}>After</div>
</div>
</div>
<div className="absolute -bottom-6 right-8 bg-white p-4 rounded-lg shadow-md border border-gray-100 max-w-xs hidden md:block">
<p className="text-xs text-gray-500 italic font-geist" style={{}}>"I can finally eat apples again. The procedure changed my life completely."</p>
<p className="text-xs font-semibold text-gray-900 mt-2 font-geist" style={{}}>— Sarah M.</p>
</div>
</div>
</div>
</div>
</section>

<section className="text-gray-50 bg-gray-950 pt-24 pb-24">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="order-2 lg:order-1">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-t from-gray-950 to-transparent opacity-40 z-10 rounded-xl"></div>
<img alt="Dr. Harrison" className="rounded-xl shadow-2xl grayscale hover:grayscale-0 transition-all duration-700 border border-gray-800" src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</div>
<div className="order-1 lg:order-2 space-y-6">
<h2 className="text-3xl tracking-tight font-geist font-semibold" style={{}}>Meet Dr. James Harrison</h2>
<p className="text-gray-400 text-lg leading-relaxed font-light font-geist" style={{}}>
                        "My philosophy is simple: treat every patient like family. I believe in combining precision technology with a compassionate touch to restore not just teeth, but quality of life."
                    </p>
<div className="grid grid-cols-2 gap-6 pt-4">
<div className="">
<h4 className="text-white font-medium mb-1 flex items-center gap-2 text-sm font-geist" style={{}}>
<iconify-icon className="text-blue-500" icon="solar:diploma-linear"></iconify-icon>
                                Education
                            </h4>
<p className="text-sm text-gray-400 font-geist" style={{}}>DDS, University of PennsylvaniaFellow, ICOI</p>
</div>
<div>
<h4 className="text-white font-medium mb-1 flex items-center gap-2 text-sm font-geist" style={{}}>
<iconify-icon className="text-blue-500" icon="solar:case-round-linear"></iconify-icon>
                                Expertise
                            </h4>
<p className="text-sm text-gray-400 font-geist" style={{}}>Full Arch Restoration,Bone Grafting</p>
</div>
</div>
<div className="pt-6">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-md bg-gray-900 border border-gray-800">
<iconify-icon className="text-purple-400" icon="solar:star-circle-linear" width="16"></iconify-icon>
<span className="text-xs font-medium tracking-wide font-geist" style={{}}>Top Rated Implantologist 2023</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50/50">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<h2 className="text-3xl tracking-tight text-gray-950 text-center mb-12 sm:text-4xl font-geist font-semibold">Stories from our patients</h2>
<div className="grid md:grid-cols-3 gap-6">

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6 flex flex-col justify-between">
<div>
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed font-geist" style={{}}>"I was terrified of the dentist, but the team made me feel so comfortable. The implant procedure was surprisingly easy and the results are incredible."</p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-500 font-geist" style={{}}>RC</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-none font-geist" style={{}}>Robert Chen</p>
<p className="text-xs text-gray-500 mt-1 font-geist" style={{}}>Full Arch Patient</p>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6 flex flex-col justify-between">
<div className="">
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed font-geist" style={{}}>"Dr. Harrison is a true artist. My new tooth matches my natural ones perfectly. You literally cannot tell the difference."</p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-500 font-geist" style={{}}>EW</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-none font-geist" style={{}}>Emily Walters</p>
<p className="text-xs text-gray-500 mt-1 font-geist" style={{}}>Single Implant</p>
</div>
</div>
</div>

<div className="rounded-xl border border-gray-200 bg-white text-gray-950 shadow-sm p-6 flex flex-col justify-between">
<div>
<div className="flex text-purple-400 mb-4">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 text-sm leading-relaxed font-geist" style={{}}>"Worth every penny. The financing options made it manageable, and having a full smile again is priceless."</p>
</div>
<div className="flex items-center gap-3">
<div className="h-8 w-8 bg-gray-100 rounded-full flex items-center justify-center text-xs font-semibold text-gray-500 font-geist" style={{}}>MR</div>
<div>
<p className="text-sm font-medium text-gray-900 leading-none font-geist" style={{}}>Michael Ross</p>
<p className="text-xs text-gray-500 mt-1 font-geist" style={{}}>Implant Bridge</p>
</div>
</div>
</div>
</div>
<div className="text-center mt-12">
<div className="inline-flex items-center gap-2 bg-white px-3 py-1.5 rounded-full border border-gray-200 shadow-sm">
<iconify-icon icon="logos:google-icon" width="14"></iconify-icon>
<span className="text-xs font-medium text-gray-700 font-geist" style={{}}>4.9/5 Average Rating across 300+ Reviews</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-3xl mx-auto px-4 lg:px-8">
<h2 className="text-3xl tracking-tight text-gray-950 text-center mb-12 sm:text-4xl font-geist font-semibold">Common Questions</h2>
<div className="divide-y divide-gray-200 border-y border-gray-200">

<details className="group">
<summary className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer text-gray-900 font-geist" style={{}}>
                        Is the dental implant procedure painful?
                        <span className="transform transition-transform duration-200 group-open:rotate-180 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="pb-4 pt-0 text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Most patients report that the procedure is much less painful than they expected, often less than a tooth extraction. We use local anesthesia and offer sedation options to ensure you are completely comfortable and relaxed throughout the treatment.
                    </div>
</details>

<details className="group">
<summary className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer text-gray-900 font-geist" style={{}}>
                        How long do dental implants last?
                        <span className="transform transition-transform duration-200 group-open:rotate-180 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="pb-4 pt-0 text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        With proper care and maintenance, such as regular brushing, flossing, and dental check-ups, dental implants are designed to be a permanent solution and can last a lifetime.
                    </div>
</details>

<details className="group">
<summary className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer text-gray-900 font-geist" style={{}}>
                        Am I a candidate for dental implants?
                        <span className="transform transition-transform duration-200 group-open:rotate-180 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="pb-4 pt-0 text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Most adults with good general health and sufficient jawbone density are candidates. If you have bone loss, we can often perform bone grafting prior to placement. A consultation is the best way to determine your eligibility.
                    </div>
</details>

<details className="group">
<summary className="flex w-full items-center justify-between py-4 font-medium transition-all hover:underline cursor-pointer text-gray-900 font-geist" style={{}}>
                        Do you offer financing?
                        <span className="transform transition-transform duration-200 group-open:rotate-180 text-gray-500">
<iconify-icon icon="solar:alt-arrow-down-linear" width="18"></iconify-icon>
</span>
</summary>
<div className="pb-4 pt-0 text-sm text-gray-500 leading-relaxed font-geist" style={{}}>
                        Yes! We believe financial constraints shouldn't prevent you from getting the care you need. We work with third-party lenders to offer flexible monthly payment plans, some with 0% interest.
                    </div>
</details>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 lg:px-8">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="md:col-span-1">
<a className="flex items-center space-x-2 mb-4" href="#">
<div className="h-8 w-8 bg-blue-600 rounded-md flex items-center justify-center text-white shadow-sm">
<iconify-icon icon="solar:shield-star-linear" width="20"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900 uppercase font-geist" style={{}}>Implant<span className="text-blue-600 font-geist" style={{}}>Care</span></span>
</a>
<p className="text-sm text-gray-500 mb-4 leading-relaxed font-geist" style={{}}>Restoring smiles with precision and care in the heart of the city.</p>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 font-geist" style={{}}>Contact</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex items-center gap-2 font-geist" style={{}}>
<iconify-icon icon="solar:phone-linear" width="16"></iconify-icon>
                            (555) 123-4567
                        </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<iconify-icon icon="solar:letter-linear" width="16"></iconify-icon>
                            hello@implantcare.com
                        </li>
<li className="flex items-center gap-2 font-geist" style={{}}>
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon>
                            123 Medical Plaza, Ste 400
                        </li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 font-geist" style={{}}>Treatment</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#" style={{}}>Single Implants</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#" style={{}}>All-on-4</a></li>
<li><a className="hover:text-blue-600 transition-colors font-geist" href="#" style={{}}>Bone Grafting</a></li>
</ul>
</div>
<div>
<h5 className="text-sm font-semibold text-gray-900 mb-4 font-geist" style={{}}>Hours</h5>
<ul className="space-y-3 text-sm text-gray-500">
<li className="flex justify-between"><span className="font-geist" style={{}}>Mon - Fri</span> <span className="font-geist" style={{}}>9:00 - 6:00</span></li>
<li className="flex justify-between"><span className="font-geist" style={{}}>Saturday</span> <span className="font-geist" style={{}}>10:00 - 2:00</span></li>
<li className="flex justify-between"><span className="font-geist" style={{}}>Sunday</span> <span className="font-geist" style={{}}>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400 font-geist" style={{}}>© 2024 ImplantCare Dental. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-geist" href="#" style={{}}>Privacy Policy</a>
<a className="text-xs text-gray-400 hover:text-gray-600 transition-colors font-geist" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-4 left-4 right-4 z-40 md:hidden">
<a className="inline-flex w-full items-center justify-center whitespace-nowrap rounded-md text-sm font-medium ring-offset-white transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-950 focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-blue-600 text-gray-50 hover:bg-blue-600/90 h-12 px-4 py-2 shadow-lg font-geist" href="#book" style={{}}>
<iconify-icon className="mr-2" icon="solar:calendar-linear" width="18"></iconify-icon>
            Book Free Consultation
        </a>
</div>
<grammarly-desktop-integration data-grammarly-shadow-root="true"></grammarly-desktop-integration>
    </>
  );
}
