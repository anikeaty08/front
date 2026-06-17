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



        // Modal Logic
        const servicesData = {
            1: { title: "General Dentistry", image: "https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&fit=crop&q=80&w=800", descMain: "Comprehensive care to maintain your oral health.", list: ["Exams & Cleanings", "Fillings", "Root Canals", "Gum Care"] },
            2: { title: "Cosmetic Dentistry", image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800", descMain: "Enhance your smile aesthetics.", list: ["Whitening", "Veneers", "Bonding", "Makeovers"] },
            3: { title: "Implants & Surgery", image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=800", descMain: "Restoring function and appearance.", list: ["Dental Implants", "Extractions", "Bone Grafting", "Sedation"] },
            4: { title: "Pediatric Care", image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&q=80&w=800", descMain: "Gentle care for your little ones.", list: ["First Visits", "Sealants", "Fluoride", "Education"] },
            5: { title: "Orthodontics", image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=800", descMain: "Straighten your teeth with confidence.", list: ["Invisalign", "Traditional Braces", "Retainers", "Consultations"] },
            6: { title: "Emergency Dentistry", image: "https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&fit=crop&q=80&w=800", descMain: "We are here when you need us most.", list: ["Toothaches", "Broken Teeth", "Lost Fillings", "Infections"] }
        };

        function openServiceModal(id) {
            const data = servicesData[id];
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalDescMain').innerText = data.descMain;
            const list = document.getElementById('modalList');
            list.innerHTML = '';
            data.list.forEach(item => {
                list.innerHTML += `<li class="flex items-center gap-2 text-sm text-slate-600"><iconify-icon icon="solar:check-circle-linear" class="text-emerald-500"></iconify-icon> ${item}</li>`;
            });
            const modal = document.getElementById('serviceModal');
            modal.classList.remove('hidden');
            setTimeout(() => { modal.classList.remove('opacity-0'); document.getElementById('serviceModalContent').classList.replace('scale-95', 'scale-100'); }, 10);
            document.body.style.overflow = 'hidden';
        }

        function closeServiceModal() {
            const modal = document.getElementById('serviceModal');
            modal.classList.add('opacity-0');
            document.getElementById('serviceModalContent').classList.replace('scale-100', 'scale-95');
            setTimeout(() => { modal.classList.add('hidden'); document.body.style.overflow = ''; }, 300);
        }
    
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
      

<div className="fixed top-0 w-full h-screen -z-10 bg-white">
<div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] [mask-image:radial-gradient(ellipse_50%_50%_at_50%_50%,#000_70%,transparent_100%)] opacity-50"></div>
<div className="absolute top-0 right-0 -translate-y-12 translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-blue-400 rounded-full pointer-events-none"></div>
<div className="absolute bottom-0 left-0 translate-y-12 -translate-x-12 blur-3xl opacity-20 w-96 h-96 bg-emerald-400 rounded-full pointer-events-none"></div>
</div>

<header className="fixed md:p-6 z-50 w-full pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-sm px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/90 border-white/40 shadow-slate-200/40">

<a className="flex items-center gap-2.5 group" href="#">
<div className="group-hover:bg-blue-700 transition-colors text-white bg-blue-600 rounded-xl px-2 py-2 flex items-center justify-center shadow-lg shadow-blue-500/20">
<iconify-icon height="22" icon="solar:tooth-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<span className="text-lg font-semibold text-slate-800 tracking-tight">Central Square<span className="text-blue-600">Dental</span></span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-[15px] font-medium transition-colors text-slate-500 hover:text-blue-600" href="#">Home</a>
<a className="text-[15px] font-medium transition-colors text-slate-500 hover:text-blue-600" href="#about">Practice</a>
<a className="text-[15px] transition-colors hover:text-blue-600 font-medium text-slate-500" href="#team">Doctors</a>
<a className="transition-colors hover:text-blue-600 text-[15px] font-medium text-slate-500" href="#services">Services</a>
<a className="transition-colors hover:text-blue-600 text-[15px] font-medium text-slate-500" href="#contact">Contact</a>
</div>

<a className="hidden items-center gap-2 transition-all shadow-blue-500/10 hover:shadow-blue-500/30 hover:bg-blue-700 md:inline-flex text-[14px] font-medium text-white bg-blue-600 rounded-full px-6 py-2.5 shadow-lg" href="#book">
                Book Visit
                <iconify-icon height="18" icon="solar:arrow-right-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>

<button className="md:hidden text-slate-800 flex items-center">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</nav>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="space-y-8 relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-sm font-medium animate-fade-in">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Accepting New Patients in Central Square
                    </div>
<h1 className="leading-[1.05] lg:text-[4.5rem] text-5xl font-semibold text-slate-900 tracking-tight">
                        Modern Dentistry in the <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-cyan-500">Heart of the Square</span>
</h1>
<p className="leading-relaxed md:text-[1.15rem] text-lg font-normal text-slate-500 max-w-lg">
                        We combine state-of-the-art technology with compassionate care to provide a dental experience that centers around you.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="inline-flex justify-center items-center gap-2 bg-slate-900 text-[15px] font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-slate-900/10 hover:shadow-slate-900/20 hover:-translate-y-0.5 hover:bg-slate-800 text-white" href="#book">
                            Schedule Appointment
                            <iconify-icon height="18" icon="solar:calendar-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-[15px] font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-slate-50 text-slate-600 border-slate-200 hover:border-slate-300" href="#services">
                            Our Services
                            <iconify-icon height="18" icon="solar:alt-arrow-down-linear" strokeWidth="1.5" width="18"></iconify-icon>
</a>
</div>

<div className="flex items-center gap-5 pt-6 border-t border-slate-100">
<div className="flex -space-x-3">
<img alt="" className="w-11 h-11 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-11 h-11 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-11 h-11 rounded-full border-[3px] object-cover border-white shadow-sm" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div>
<div className="flex gap-0.5 text-yellow-400 mb-0.5">
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon height="16" icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-[13px] font-medium text-slate-500">Rated 4.9/5 by our community</p>
</div>
</div>
</div>

<div className="relative lg:h-[700px] flex items-center">
<div className="relative w-full rounded-[2rem] overflow-hidden shadow-2xl shadow-blue-900/10 group h-[500px] lg:h-[600px]">
<img alt="Central Square Dental Interior" className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/640b153d-e344-4684-80a1-572100499dd4_1600w.png"/>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-2 backdrop-blur-xl px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm bg-white/90 text-blue-900 border border-white/50">
<iconify-icon className="text-blue-600" height="18" icon="solar:shield-check-linear" width="18"></iconify-icon> Trusted Care
                            </span>
<span className="inline-flex items-center gap-2 backdrop-blur-xl px-4 py-2 rounded-full text-[13px] font-semibold shadow-sm bg-white/90 text-blue-900 border border-white/50">
<iconify-icon className="text-blue-600" height="18" icon="solar:bolt-linear" width="18"></iconify-icon> Advanced Tech
                            </span>
</div>

<div className="absolute bottom-8 right-8 left-8 backdrop-blur-xl p-5 rounded-2xl shadow-lg border border-white/40 bg-white/95 flex items-center justify-between">
<div>
<p className="text-[11px] font-bold uppercase tracking-widest mb-1 text-blue-600">Our Promise</p>
<p className="font-medium text-slate-800">Gentle dentistry for the whole family.</p>
</div>
<div className="p-2.5 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center">
<iconify-icon height="24" icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/4 -translate-y-1/2 w-[500px] h-[500px] rounded-full blur-[100px] bg-blue-100/50"></div>
</div>
</div>
</div>
</section>

<section className="py-12 bg-white border-y border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="text-center px-4">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">25+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Years Serving</p>
</div>
<div className="text-center px-4">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">12k+</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Happy Patients</p>
</div>
<div className="text-center px-4">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">24/7</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Emergency Care</p>
</div>
<div className="text-center px-4">
<p className="text-4xl font-semibold tracking-tight text-slate-900 mb-1">100%</p>
<p className="text-sm font-medium text-slate-500 uppercase tracking-wide">Satisfaction</p>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-6xl px-4" id="about">
<div className="flex flex-col md:flex-row mb-12 items-end justify-between gap-6">
<div className="max-w-2xl">
<p className="text-xs uppercase text-blue-600 tracking-widest font-semibold mb-3">About Central Square Dental</p>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight leading-tight">
            We believe that a visit to the dentist should be as <span className="text-blue-600 font-semibold">comfortable</span> as it is essential.
          </h3>
</div>
<a className="inline-flex items-center gap-2 px-5 py-2.5 rounded-full border border-slate-200 hover:border-blue-600 hover:text-blue-600 text-sm font-medium text-slate-600 transition-colors bg-white" href="#team">
          Meet The Team
          <iconify-icon height="18" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-12 gap-10">

<div className="md:col-span-5 flex flex-col gap-5">
<div className="relative overflow-hidden rounded-[2rem] shadow-lg h-80 group">
<div className="transition-opacity group-hover:opacity-0 bg-slate-900/10 z-10 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Office Interior" className="w-full h-full object-cover transform transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/42d25e61-f1cb-4428-b886-9647570b57bb_800w.jpg?w=800&amp;q=80"/>
</div>
<div className="grid grid-cols-2 gap-5">
<div className="relative overflow-hidden rounded-[1.5rem] shadow-md h-40">
<img alt="Consultation" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden rounded-[1.5rem] shadow-md h-40 bg-blue-600 flex items-center justify-center p-6 text-white text-center">
<div className="">
<h4 className="text-3xl font-bold mb-1">15+</h4>
<p className="text-xs font-medium opacity-80">Specialists</p>
</div>
</div>
</div>
</div>

<div className="md:col-span-7 flex flex-col justify-center">
<div className="space-y-8 pl-0 md:pl-8">
<div className="">
<h4 className="text-lg font-semibold text-slate-900 mb-3 flex items-center gap-2">
<iconify-icon className="text-blue-600" icon="solar:flag-linear"></iconify-icon> Our Mission
              </h4>
<p className="leading-relaxed text-slate-500 text-[1.05rem]">
                Located in the vibrant Central Square neighborhood, we have been a pillar of community health for over two decades. Our philosophy is simple: treat every patient like family. We utilize the latest digital imaging and minimally invasive techniques to ensure your oral health is managed with precision.
              </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-6 gap-x-4">
<div className="">
<h5 className="text-[15px] font-semibold text-slate-900 mb-2">Comprehensive Care</h5>
<p className="text-sm text-slate-500 leading-relaxed">From routine cleanings to complex restorative work, we handle it all under one roof.</p>
</div>
<div className="">
<h5 className="text-[15px] font-semibold text-slate-900 mb-2">Patient-Centric</h5>
<p className="text-sm text-slate-500 leading-relaxed">We listen to your concerns and tailor treatment plans to your specific goals.</p>
</div>
<div className="">
<h5 className="text-[15px] font-semibold text-slate-900 mb-2">Flexible Scheduling</h5>
<p className="text-sm text-slate-500 leading-relaxed">Early morning and evening appointments available to fit your busy lifestyle.</p>
</div>
<div>
<h5 className="text-[15px] font-semibold text-slate-900 mb-2">Insurance Friendly</h5>
<p className="text-sm text-slate-500 leading-relaxed">We accept most major insurance plans and offer financing options.</p>
</div>
</div>
<div className="pt-4 border-t border-slate-100">
<div className="flex flex-wrap gap-2">
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">General</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">Cosmetic</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">Surgical</span>
<span className="px-3 py-1 bg-slate-100 text-slate-600 rounded-lg text-xs font-medium">Pediatric</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-slate-50 pt-24 pb-24" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-semibold tracking-wider text-xs uppercase mb-2 block">Clinical Excellence</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6 text-slate-900">
                    Comprehensive <span className="text-blue-600">Dental Services</span>
</h2>
<p className="text-lg text-slate-500 font-normal">
                    Cutting-edge procedures delivered with a gentle touch.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(1)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="General Dentistry" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            PREVENTIVE
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">General Dentistry</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Routine exams, cleanings, and maintenance to keep your smile healthy year-round.</p>
</div>
</div>

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(2)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="Cosmetic" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            AESTHETIC
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">Cosmetic Dentistry</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="" height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Whitening, veneers, and bonding to design the perfect smile you've always wanted.</p>
</div>
</div>

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(3)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="Implants" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            RESTORATIVE
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">Implants &amp; Surgery</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Advanced solutions for replacing missing teeth and complex oral surgical needs.</p>
</div>
</div>

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(4)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="Pediatric" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            FAMILY
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">Pediatric Care</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Gentle, fun, and educational dental visits tailored specifically for children.</p>
</div>
</div>

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(5)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="Orthodontics" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            ALIGNMENT
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">Orthodontics</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Invisalign and traditional braces to correct alignment and bite issues effectively.</p>
</div>
</div>

<div className="group bg-white p-2 rounded-[2rem] border border-slate-200 hover:border-blue-300 hover:shadow-xl hover:shadow-blue-900/5 transition-all duration-300 cursor-pointer" onclick="openServiceModal(6)">
<div className="relative h-60 rounded-[1.5rem] overflow-hidden">
<img alt="Emergency" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/95 backdrop-blur px-3 py-1.5 rounded-lg text-xs font-bold text-slate-900 shadow-sm">
                            URGENT
                        </div>
</div>
<div className="p-6">
<div className="flex items-center justify-between mb-3">
<h3 className="text-xl font-semibold text-slate-900">Emergency Dentistry</h3>
<div className="w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon height="18" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</div>
</div>
<p className="text-slate-500 text-sm leading-relaxed">Same-day appointments for toothaches, trauma, and urgent dental concerns.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col md:flex-row mb-12 gap-x-6 gap-y-6 items-end justify-between">
<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-slate-900">
                        Meet Our <span className="text-blue-600">Specialists</span>
</h2>
<p className="text-lg text-slate-500 font-medium max-w-xl">
                        Expertise you can trust. Our team is board-certified and dedicated to your well-being.
                    </p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="group">
<div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[3/4] mb-4">
<img alt="Dr. Thomas Miller" className="transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0 w-full h-full object-cover grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/285c30b3-21ec-4186-a4ac-113d801961c3_800w.jpg"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-blue-600" height="20" icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900">Dr. Ernest Yazigi</h3>
</div>

<div className="group">
<div className="relative overflow-hidden rounded-[2rem] bg-slate-100 aspect-[3/4] mb-4">
<img alt="Dr. Sarah Jenkins" className="transition-transform duration-500 group-hover:scale-105 group-hover:grayscale-0 text-center w-full h-full object-cover relative grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5d2f583e-feaa-465f-a77d-a77e89e04a81_800w.jpg?w=800&amp;q=80"/>
<div className="absolute bottom-4 right-4 bg-white/90 backdrop-blur p-2.5 rounded-full shadow-sm opacity-0 group-hover:opacity-100 transition-all translate-y-2 group-hover:translate-y-0">
<iconify-icon className="text-blue-600" height="20" icon="solar:arrow-right-up-linear" style={{color: 'rgb(37, 99, 235)'}} width="20"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-bold text-slate-900">Dr. Shuo Yang</h3>
</div>

<div className="group">
</div>

<div className="group">
</div>
</div>
</div>
</section>

<section className="py-24 relative bg-slate-900 text-white overflow-hidden rounded-t-[3rem]" id="book">

<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/30 blur-[120px] rounded-full pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="space-y-6">
<span className="inline-block px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-xs font-semibold tracking-wide uppercase border border-blue-500/30">Online Booking</span>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight">
                        Ready for your <br/> <span className="text-blue-400">new smile?</span>
</h2>
<p className="font-medium text-lg text-slate-400 max-w-md">
                        Booking with Central Square Dental is easy. Select your preferred time and we'll confirm within minutes.
                    </p>
<div className="pt-8 space-y-4">
<div className="flex items-center gap-4 p-4 rounded-xl bg-slate-800/50 border border-slate-700">
<div className="p-3 bg-blue-500/10 text-blue-400 rounded-full">
<iconify-icon height="24" icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div className="">
<p className="text-xs text-slate-400 uppercase tracking-wider font-semibold">Call Us Direct</p>
<p className="text-xl font-bold">(617) 876-7900</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-2xl shadow-blue-900/20 text-slate-900">
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">First Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium" type="text"/>
</div>
<div className="">
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Last Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium" type="text"/>
</div>
</div>
<div className="">
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="">
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Service</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium appearance-none">
<option>Checkup &amp; Clean</option>
<option>Emergency</option>
<option>Whitening</option>
<option>Consultation</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" height="16" icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
<div>
<label className="block text-xs font-bold text-slate-500 uppercase mb-2">Preferred Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-all text-sm font-medium text-slate-500" type="date"/>
</div>
</div>
<button className="w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-4 rounded-xl shadow-lg shadow-blue-500/20 transition-all mt-4 flex items-center justify-center gap-2" type="button">
                            Confirm Appointment
                            <iconify-icon height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-white border-slate-200 border-t pt-20 pb-10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="text-blue-600 flex items-center">
<iconify-icon height="32" icon="solar:tooth-square-bold" width="32"></iconify-icon>
</div>
<span className="text-lg font-bold text-slate-900 tracking-tight">Central Square</span>
</a>
<p className="leading-relaxed text-sm font-medium text-slate-500">Providing top-tier dental care to the Central Square community since 2018.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon height="16" icon="brandico:facebook" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon height="16" icon="brandico:instagram" width="16"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-blue-600 hover:text-white transition-all" href="#">
<iconify-icon height="16" icon="brandico:twitter-bird" width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wide">Visit Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-slate-500 text-sm font-medium">
<iconify-icon className="text-blue-500 shrink-0 mt-0.5" height="18" icon="solar:map-point-linear" width="18"></iconify-icon>
<span className="">14 Pleasant St, Cambridge, MA 02139</span>
</li>
<li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
<iconify-icon className="text-blue-500 shrink-0" height="18" icon="solar:phone-linear" width="18"></iconify-icon>
<span className="">(617) 876-7900</span>
</li>
<li className="flex items-center gap-3 text-slate-500 text-sm font-medium">
<iconify-icon className="text-blue-500 shrink-0" height="18" icon="solar:letter-linear" width="18"></iconify-icon>
<span className="">info@centralsquaredds.com</span>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wide">Opening Hours</h4>
<ul className="space-y-3 text-slate-500 text-sm font-medium">
<li className="flex justify-between border-b border-slate-100 pb-2">
<span className="">Mon - Tue</span>
<span className="text-slate-900">8:00 AM - 6:00 PM</span>
</li>
<li className="flex justify-between border-b border-slate-100 pb-2">
<span className="">Wed - Fri</span>
<span className="text-slate-900">8:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span className="">Saturday</span>
<span className="text-slate-900">8:00 AM - 2:00 PM</span>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-slate-900 text-sm uppercase tracking-wide">Quick Links</h4>
<ul className="space-y-3 text-slate-500 text-sm font-medium">
<li className=""><a className="hover:text-blue-600 transition-colors" href="#">Patient Portal</a></li>
<li className=""><a className="hover:text-blue-600 transition-colors" href="#">Pay Bill Online</a></li>
<li className=""><a className="hover:text-blue-600 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row gap-4 border-slate-100 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="text-slate-400 font-medium text-xs">© 2024 Central Square Dental. All Rights Reserved.</p>
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
<span className="text-xs font-medium text-slate-500">System Operational</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="serviceModal">
<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm" onclick="closeServiceModal()"></div>
<div className="relative bg-white rounded-[2rem] shadow-2xl max-w-5xl w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col lg:flex-row h-[80vh] lg:h-auto border border-white/20" id="serviceModalContent">
<button className="absolute top-4 right-4 z-10 p-2 bg-white/80 backdrop-blur rounded-full hover:bg-white text-slate-600 transition-colors shadow-sm" onclick="closeServiceModal()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden bg-slate-100">
<img alt="Service" className="w-full h-full object-cover" id="modalImage" src=""/>
</div>
<div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto no-scrollbar flex flex-col">
<span className="text-[10px] font-bold bg-blue-50 text-blue-600 px-2 py-1 rounded w-fit mb-4 uppercase tracking-widest border border-blue-100" id="modalId">Service Detail</span>
<h3 className="text-3xl font-bold text-slate-900 mb-4 tracking-tight" id="modalTitle"></h3>
<p className="text-slate-500 leading-relaxed mb-6" id="modalDescMain"></p>
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100 mb-6">
<h4 className="font-bold text-slate-900 mb-3 text-xs uppercase tracking-wide flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:list-check-linear"></iconify-icon> Key Features
                    </h4>
<ul className="space-y-3" id="modalList"></ul>
</div>
<div className="mt-auto">
<a className="flex items-center justify-center gap-2 w-full bg-blue-600 hover:bg-blue-700 text-white font-bold py-3.5 rounded-xl transition-all shadow-lg shadow-blue-500/20" href="#book" onclick="closeServiceModal()">
                        Book Appointment
                    </a>
</div>
</div>
</div>
</div>


    </>
  );
}
