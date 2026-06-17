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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();

        // Data for Services based on Pocono Endodontics website content
        const servicesData = {
            1: {
                title: "Root Canal Therapy",
                image: "https://www.poconorootcanal.com/wp-content/themes/2051-template-r/_media/assets/featuredImage1.jpg",
                descMain: "A root canal is one of the most common dental procedures with well over 14 million performed every year. This simple treatment can save your natural teeth and prevent the need for dental implants or bridges. We remove the injured pulp tissue to relieve pain and preserve the tooth structure."
            },
            2: {
                title: "Endodontic Retreatment",
                image: "https://www.poconorootcanal.com/wp-content/themes/2051-template-r/_media/assets/featuredImage2.jpg",
                descMain: "With the appropriate care, your teeth that have had endodontic treatment will last as long as other natural teeth. However, a tooth that has received treatment may fail to heal or continue to have pain. In these cases, Endodontic Retreatment may be necessary to save the tooth."
            },
            3: {
                title: "Apicoectomy",
                image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=1000",
                descMain: "Endodontic (root canal) surgery can be used to locate fractures or hidden canals that do not appear on x-rays but still manifest pain in the tooth. Damaged root surfaces or the surrounding bone may also be treated with this procedure. The most common surgery used to save damaged teeth is an apicoectomy or root-end resection."
            },
            4: {
                title: "Cracked Teeth",
                image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=1000",
                descMain: "Cracked teeth display a variety of symptoms, including erratic pain when chewing, temperature sensitivities, or the release of biting pressure. Early diagnosis and treatment are essential. If left untreated, a crack can progress and result in the loss of the tooth."
            },
            5: {
                title: "Traumatic Injuries",
                image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000",
                descMain: "Traumatic dental injuries often occur as a result of an accident or sports injury. The majority of these injuries are minor chipped teeth. It is less common to dislodge your tooth or knock it completely out, but these injuries are more severe. Treatment depends on the type, location, and severity of each injury."
            }
        };

        function openServiceModal(id) {
            const data = servicesData[id];
            if (!data) return;

            document.getElementById('modalId').innerText = '0' + id;
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalImage').src = data.image;
            document.getElementById('modalDescMain').innerHTML = data.descMain;

            const modal = document.getElementById('serviceModal');
            const content = document.getElementById('serviceModalContent');
            
            modal.classList.remove('hidden');
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
            
            document.body.style.overflow = 'hidden';
        }

        function closeServiceModal() {
            const modal = document.getElementById('serviceModal');
            const content = document.getElementById('serviceModalContent');

            modal.classList.add('opacity-0');
            content.classList.remove('scale-100');
            content.classList.add('scale-95');

            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = '';
            }, 300);
        }

        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeServiceModal();
            }
        });
    
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
      

<div className="fixed top-0 w-full h-screen -z-10" style={{background: 'radial-gradient(circle at 50% 0%, #e0e7ff 0%, #f8fafc 50%)'}}></div>

<header className="fixed md:p-6 w-full z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-neutral-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="group-hover:bg-indigo-600 transition-colors text-white bg-indigo-500 rounded-xl px-1.5 py-1.5">
<iconify-icon height="24" icon="solar:tooth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-lg font-bold text-neutral-900 leading-none tracking-tight">Pocono Endodontics</span>
<span className="text-[10px] font-medium text-indigo-600 uppercase tracking-wider leading-none mt-0.5">Drs. Gonsky &amp; Olen</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-neutral-600 hover:text-indigo-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-neutral-600 hover:text-indigo-600" href="#about">Meet Us</a>
<a className="transition-colors hover:text-indigo-600 text-sm font-medium text-neutral-600" href="#procedures">Procedures</a>
<a className="transition-colors hover:text-indigo-600 text-sm font-medium text-neutral-600" href="#info">Patient Info</a>
<a className="transition-colors hover:text-indigo-600 text-sm font-medium text-neutral-600" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex flex-col items-end mr-2" href="tel:15704213443">
<span className="text-[10px] font-semibold uppercase text-neutral-400">Call Us</span>
<span className="text-sm font-bold text-neutral-900">(570) 421-3443</span>
</a>
<a className="hidden items-center gap-2 transition-all shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:bg-indigo-600 md:inline-flex text-sm font-medium text-white bg-indigo-500 rounded-full px-5 py-2.5 shadow-lg" href="#contact">
                    Request Visit
                    <iconify-icon icon="solar:calendar-add-linear" width="18"></iconify-icon>
</a>
</div>

<button className="lg:hidden text-neutral-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-xs font-semibold tracking-wide uppercase">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                        Stroudsburg's Premier Specialists
                    </div>
<h1 className="leading-[1.1] lg:text-7xl text-5xl font-semibold text-neutral-900 tracking-tighter">
                        Dedicated Exclusively to <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-indigo-500 from-purple-600">Saving Your Teeth</span>
</h1>
<p className="leading-relaxed md:text-xl text-lg font-medium text-neutral-500 max-w-lg">
                        We provide unsurpassed quality in a compassionate environment. Our expert team specializes in Root Canal Therapy and Endodontic Surgery.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-indigo-600 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 hover:bg-indigo-700 text-white" href="#contact">
                            Schedule Appointment
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-indigo-200 hover:text-indigo-600" href="#procedures">
                            Our Procedures
                        </a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-indigo-100 flex items-center justify-center text-indigo-600 text-xs font-bold">AG</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-purple-100 flex items-center justify-center text-purple-600 text-xs font-bold">MG</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-blue-100 flex items-center justify-center text-blue-600 text-xs font-bold">MG</div>
</div>
<div className="">
<div className="flex gap-0.5 text-yellow-400">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-sm font-medium text-neutral-500 mt-1">Exceeding Expectations</p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-indigo-900/10">

<img alt="Microscope Dentistry" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-indigo-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-indigo-800">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> Specialized Care
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-indigo-800">
<iconify-icon icon="solar:monitor-camera-linear"></iconify-icon> Advanced Technology
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-indigo-600">Our Promise</p>
<p className="font-medium text-neutral-900">Your comfort is our priority.</p>
</div>
<div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
<iconify-icon icon="solar:heart-angle-linear" width="24"></iconify-icon>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 right-0 translate-x-1/3 -translate-y-1/2 w-96 h-96 rounded-full blur-3xl bg-indigo-400/20"></div>
</div>
</div>
</div>
</section>

<section className="py-16 lg:py-24 rounded-t-[3rem] lg:rounded-t-[4rem] bg-indigo-950">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-indigo-600 rounded-3xl p-8 shadow-xl shadow-indigo-500/10 transform md:-translate-y-8 text-white">
<h3 className="text-4xl font-semibold tracking-tight mb-2">3</h3>
<p className="text-xl font-medium mb-4">Endodontic Specialists</p>
<p className="text-sm leading-relaxed text-indigo-100">Our doctors are dedicated exclusively to endodontic care, ensuring the best outcome.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">14M+</h3>
<p className="font-medium mb-2 text-indigo-400">Root Canals Annually</p>
<p className="text-sm text-indigo-100/60">A common procedure nationwide that we have perfected.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">100%</h3>
<p className="font-medium mb-2 text-indigo-400">Specialist Focus</p>
<p className="text-sm text-indigo-100/60">We focus solely on saving your natural teeth.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">24/7</h3>
<p className="font-medium mb-2 text-indigo-400">Patient Care</p>
<p className="text-sm text-indigo-100/60">Compassionate environment for all our patients.</p>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-6xl px-4" id="about">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-indigo-600 tracking-widest font-jakarta font-bold">Who We Are</p>
<h3 className="sm:text-3xl text-2xl font-medium text-neutral-900 tracking-tight font-jakarta mt-2">Professionalism &amp; Clinical Excellence</h3>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

<div className="flex flex-col space-y-6">
<h4 className="text-xl font-semibold text-neutral-800 font-jakarta">Welcome to Pocono Endodontics</h4>
<p className="leading-relaxed text-neutral-500 font-jakarta">
                Dr. Ashley Gonsky Olen, Dr. Michael T Gonsky &amp; Dr. Michael E Gonsky along with their experienced endodontic staff, specialize in root canal therapy. Our team of experts provide the highest standard of professional care in a friendly, comfortable environment.
            </p>
<p className="leading-relaxed text-neutral-500 font-jakarta">
                By referring you to our office, your dentist has shown their concern that you receive the finest endodontic care possible. Our goal is to provide unsurpassed quality in a compassionate environment of professionalism and clinical excellence. We strive to exceed your expectations.
            </p>
<div className="pt-4 flex gap-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-bold text-neutral-900 text-sm">Expert Staff</p>
<p className="text-xs text-neutral-500">Highly Trained</p>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-indigo-50 flex items-center justify-center text-indigo-600">
<iconify-icon icon="solar:hospital-linear" width="20"></iconify-icon>
</div>
<div>
<p className="font-bold text-neutral-900 text-sm">Modern Facility</p>
<p className="text-xs text-neutral-500">Advanced Equip.</p>
</div>
</div>
</div>
</div>

<div className="relative">
<div className="absolute -inset-4 bg-gradient-to-r from-indigo-500 to-purple-500 rounded-3xl opacity-20 blur-lg transform rotate-2"></div>
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-xl">

<img alt="Drs. Gonsky and Staff" className="w-full h-auto object-cover" src="https://www.poconorootcanal.com/files/2021/08/Gonsky-Klan-.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-white/90 backdrop-blur-sm p-4 text-center">
<p className="text-sm font-semibold text-neutral-800">The Pocono Endodontics Team</p>
</div>
</div>
</div>
</div>
</section>

<section className="lg:py-32 bg-slate-50 pt-24 pb-24" id="procedures">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">
                    Our Specialized <span className="text-indigo-600">Procedures</span>
</h2>
<p className="text-lg text-neutral-500 font-medium">
                    We are dedicated exclusively to endodontic care. Click to learn more.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(1)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Root Canal" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://www.poconorootcanal.com/wp-content/themes/2051-template-r/_media/assets/featuredImage1.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Root Canal Therapy</h3>
<p className="leading-relaxed text-base text-neutral-500">A simple treatment that can save your natural teeth and prevent the need for implants.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(2)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Retreatment" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://www.poconorootcanal.com/wp-content/themes/2051-template-r/_media/assets/featuredImage2.jpg"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<iconify-icon icon="solar:restart-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Endodontic Retreatment</h3>
<p className="leading-relaxed text-base text-neutral-500">Giving teeth a second chance. Proper care can make treated teeth last a lifetime.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(3)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Apicoectomy" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<iconify-icon icon="solar:scalpel-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Apicoectomy</h3>
<p className="text-neutral-500 leading-relaxed text-base">Root canal surgery used to locate fractures or hidden canals not visible on x-rays.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(4)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Cracked Teeth" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">04</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<iconify-icon icon="solar:danger-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Cracked Teeth</h3>
<p className="text-neutral-500 leading-relaxed text-base">Early diagnosis and treatment of cracked teeth are essential to saving the tooth.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(5)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Traumatic Injuries" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">05</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Traumatic Injuries</h3>
<p className="text-neutral-500 leading-relaxed text-base">Specialized management of dental injuries including dislodged or knocked-out teeth.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-indigo-50 text-indigo-600">Our Doctors</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-neutral-900">
                    Meet The <span className="text-indigo-600">Specialists</span>
</h2>
<p className="text-lg text-neutral-500 font-medium max-w-xl mx-auto">
                    Dedicated to providing the highest standard of professional care.
                </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group relative rounded-3xl overflow-hidden transition-all hover:shadow-xl border border-neutral-100 bg-white">
<div className="aspect-[4/4] w-full relative bg-indigo-50">
<div className="absolute inset-0 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:user-circle-bold" width="120"></iconify-icon>
</div>

<div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:medal-star-linear"></iconify-icon>
</div>
</div>
<div className="p-6 text-center">
<h4 className="text-xl font-bold text-neutral-900">Dr. Ashley Gonsky Olen</h4>
<p className="text-sm font-medium text-indigo-600 mt-1">Endodontist</p>
<p className="text-sm text-neutral-500 mt-4 px-4">Providing expert root canal therapy with a gentle touch.</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-all hover:shadow-xl border border-neutral-100 bg-white">
<div className="aspect-[4/4] w-full relative bg-indigo-50">
<div className="absolute inset-0 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:user-circle-bold" width="120"></iconify-icon>
</div>
<div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:medal-star-linear"></iconify-icon>
</div>
</div>
<div className="p-6 text-center">
<h4 className="text-xl font-bold text-neutral-900">Dr. Michael T Gonsky</h4>
<p className="text-sm font-medium text-indigo-600 mt-1">Endodontist</p>
<p className="text-sm text-neutral-500 mt-4 px-4">Decades of experience in saving natural dentition.</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-all hover:shadow-xl border border-neutral-100 bg-white">
<div className="aspect-[4/4] w-full relative bg-indigo-50">
<div className="absolute inset-0 flex items-center justify-center text-indigo-200">
<iconify-icon icon="solar:user-circle-bold" width="120"></iconify-icon>
</div>
<div className="absolute top-4 right-4 p-2 rounded-full bg-white shadow-sm">
<iconify-icon className="text-indigo-600" icon="solar:medal-star-linear"></iconify-icon>
</div>
</div>
<div className="p-6 text-center">
<h4 className="text-xl font-bold text-neutral-900">Dr. Michael E Gonsky</h4>
<p className="text-sm font-medium text-indigo-600 mt-1">Endodontist</p>
<p className="text-sm text-neutral-500 mt-4 px-4">Specialized in complex endodontic cases and surgery.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-indigo-950 text-white" id="contact">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="relative">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-6">
                        Contact Us Today
                    </h2>
<p className="font-medium mb-10 text-lg text-indigo-200/80">
                        The first step towards a healthy smile is to schedule an appointment. Please contact our office by phone or complete the appointment request form.
                    </p>
<div className="space-y-6">
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
<div className="p-3 bg-indigo-600 rounded-lg">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Our Location</h4>
<p className="text-indigo-200">1029 Fairview Avenue<br/>Stroudsburg, PA 18360</p>
</div>
</div>
<div className="flex items-start gap-4 p-6 rounded-2xl bg-white/5 border border-white/10">
<div className="p-3 bg-indigo-600 rounded-lg">
<iconify-icon icon="solar:phone-calling-bold" width="24"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-lg mb-1">Phone</h4>
<a className="text-indigo-200 hover:text-white transition-colors text-lg" href="tel:15704213443">(570) 421-3443</a>
<p className="text-sm text-indigo-300 mt-1">Fax: (570) 421-8442</p>
</div>
</div>
</div>
</div>

<div className="bg-white/5 backdrop-blur-sm p-8 rounded-3xl border border-white/10">
<form className="space-y-4">
<div>
<label className="block text-sm font-medium mb-2 text-indigo-200">Your Name *</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all bg-indigo-900/50 border-indigo-700 text-white" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium mb-2 text-indigo-200">Email Address *</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all bg-indigo-900/50 border-indigo-700 text-white" type="email"/>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-indigo-200">Phone Number</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all bg-indigo-900/50 border-indigo-700 text-white" type="tel"/>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-indigo-200">I am interested in</label>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 appearance-none cursor-pointer bg-indigo-900/50 border-indigo-700 text-white">
<option className="text-neutral-900">Scheduling Appointment</option>
<option className="text-neutral-900">Root Canal Consultation</option>
<option className="text-neutral-900">General Inquiry</option>
</select>
<iconify-icon className="absolute right-5 top-1/2 -translate-y-1/2 pointer-events-none text-indigo-400" icon="solar:alt-arrow-down-linear" width="20"></iconify-icon>
</div>
</div>
<div>
<label className="block text-sm font-medium mb-2 text-indigo-200">Comments / Questions</label>
<textarea className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-400 focus:ring-1 focus:ring-indigo-400 transition-all bg-indigo-900/50 border-indigo-700 text-white" rows="4"></textarea>
</div>
<button className="transition-all shadow-indigo-500/20 hover:shadow-indigo-500/40 flex hover:bg-indigo-400 text-lg font-bold text-white bg-indigo-600 w-full rounded-xl mt-4 pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" type="button">
                            Submit Request
                            <iconify-icon icon="solar:plain-2-linear" width="20"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>

<footer className="pt-20 pb-10 border-t bg-neutral-50 border-neutral-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="space-y-6">
<a className="flex items-center gap-2" href="#">
<div className="text-white bg-indigo-600 rounded-lg px-1.5 py-1.5">
<iconify-icon icon="solar:tooth-bold" width="24"></iconify-icon>
</div>
<span className="text-xl font-bold text-neutral-900 tracking-tight">Pocono Endodontics</span>
</a>
<p className="text-neutral-500 font-medium leading-relaxed">
                        Dedicated exclusively to endodontic care. We strive to save your natural teeth in a comfortable environment.
                    </p>
</div>

<div className="">
<h4 className="font-bold mb-6 text-neutral-900">Contact Info</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-500 font-medium">
<iconify-icon className="text-indigo-600 shrink-0 mt-1" icon="solar:map-point-linear" width="20"></iconify-icon>
<span className="">1029 Fairview Avenue<br/>Stroudsburg, PA 18360</span>
</li>
<li className="flex items-center gap-3 text-neutral-500 font-medium">
<iconify-icon className="text-indigo-600 shrink-0" icon="solar:phone-calling-linear" width="20"></iconify-icon>
<a className="hover:text-indigo-600 transition-colors" href="tel:15704213443">(570) 421-3443</a>
</li>
<li className="flex items-center gap-3 text-neutral-500 font-medium">
<iconify-icon className="text-indigo-600 shrink-0" icon="solar:printer-linear" width="20"></iconify-icon>
<span>(570) 421-8442</span>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-neutral-900">Quick Links</h4>
<ul className="space-y-3 text-neutral-500 font-medium">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Home</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#about">Meet Us</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#info">Patient Registration</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#contact">Contact Us</a></li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-neutral-900">Procedures</h4>
<ul className="space-y-3 text-neutral-500 font-medium">
<li><a className="hover:text-indigo-600 transition-colors" href="#">Root Canal Therapy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Endodontic Retreatment</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Apicoectomy</a></li>
<li><a className="hover:text-indigo-600 transition-colors" href="#">Cracked Teeth</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-200">
<p className="text-neutral-500 font-medium text-sm">© 2024 Pocono Endodontics. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-indigo-600" href="#">Privacy Policy</a>
<a className="hover:text-indigo-600" href="#">Disclaimer</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="serviceModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeServiceModal()"></div>

<div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col lg:flex-row h-[85vh] lg:h-auto" id="serviceModalContent">

<button className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-neutral-600 transition-colors" onclick="closeServiceModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div className="lg:w-1/2 h-64 lg:h-auto relative overflow-hidden">
<img alt="Service Detail" className="w-full h-full object-cover" id="modalImage" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent lg:bg-gradient-to-r lg:from-transparent lg:to-black/10"></div>
</div>

<div className="lg:w-1/2 p-8 lg:p-12 overflow-y-auto no-scrollbar flex flex-col justify-between">
<div>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs font-bold bg-indigo-50 text-indigo-600 px-3 py-1 rounded-full uppercase tracking-wider" id="modalId">01</span>
<div className="h-px bg-indigo-100 flex-1"></div>
</div>
<h3 className="text-3xl lg:text-4xl font-semibold text-neutral-900 mb-6 tracking-tight" id="modalTitle"></h3>
<div className="space-y-6 text-neutral-500 leading-relaxed">
<p id="modalDescMain"></p>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-100">
<a className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-indigo-200" href="#contact" onclick="closeServiceModal()">
                        Schedule Consultation
                        <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</div>



    </>
  );
}
