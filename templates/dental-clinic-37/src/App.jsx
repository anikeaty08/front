import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        lucide.createIcons();

        // Data for Services
        const servicesData = {
            1: {
                title: "General Dentistry",
                image: "https://images.unsplash.com/photo-1609840114035-3c981b782dfe?auto=format&fit=crop&q=80&w=1000",
                descMain: "Our general dentistry services are the foundation of your oral health. We focus on preventive care to stop problems before they start, ensuring your smile stays healthy for a lifetime. From routine checkups to comprehensive oral exams, we provide thorough care tailored to your unique needs.",
                list: ["Comprehensive Oral Exams & X-Rays", "Professional Teeth Cleaning", "Cavity Fillings (Composite/Amalgam)", "Root Canal Treatments", "Gum Disease Treatment"],
                descSec: "Regular visits are essential for early detection of issues. We recommend a checkup every 6 months."
            },
            2: {
                title: "Cosmetic Dentistry",
                image: "https://images.unsplash.com/photo-1606811971618-4486d14f3f99?auto=format&fit=crop&q=80&w=1000",
                descMain: "Transform your smile with our advanced cosmetic treatments. Whether you want to brighten your teeth or reshape them entirely, our cosmetic specialists use the latest technology to design a smile that boosts your confidence. <br><br> <img src='https://images.unsplash.com/photo-1552196563-55cd4e45efb3?auto=format&fit=crop&q=80&w=800' class='w-full h-48 object-cover rounded-xl mt-4 mb-2 shadow-sm' alt='Smile Shade Guide'>",
                list: ["Professional Teeth Whitening", "Porcelain Veneers & Laminates", "Composite Bonding", "Smile Makeovers", "Gum Contouring"],
                descSec: "A beautiful smile is just an appointment away. Ask us about our digital smile design simulation."
            },
            3: {
                title: "Oral Surgery",
                image: "https://images.unsplash.com/photo-1600170311833-c2cf5280ce49?auto=format&fit=crop&q=80&w=1000",
                descMain: "When surgical intervention is necessary, you can trust our experienced oral surgeons. We handle complex procedures with precision and care, minimizing discomfort and ensuring a smooth recovery. Our facility is equipped for safe surgical procedures ranging from extractions to reconstruction.",
                list: ["Wisdom Teeth Extraction", "Dental Implants Placement", "Bone Grafting", "Jaw Surgery", "Biopsies & Pathology"],
                descSec: "We prioritize your comfort with modern pain management and post-op care protocols."
            },
            4: {
                title: "Pediatric Dentistry",
                image: "https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&fit=crop&q=80&w=1000",
                descMain: "We love kids! Our pediatric department creates a fun, safe, and positive environment for children. We focus on education and prevention, teaching good habits early to ensure a lifetime of healthy smiles. Our team is trained to handle the unique behavioral and dental needs of children.",
                list: ["First Dental Visit & Exams", "Fluoride Treatments & Sealants", "Space Maintainers", "Habit Counseling (Thumb Sucking)", "Pediatric Emergency Care"],
                descSec: "Making the dentist a fun place to visit is our #1 goal for our little patients."
            },
            5: {
                title: "Orthodontics",
                image: "https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&fit=crop&q=80&w=1000",
                descMain: "Straight teeth are healthier teeth. Our orthodontic solutions correct misalignment, bite issues, and overcrowding. Whether you prefer traditional braces or invisible aligners, we create customized treatment plans to give you the perfectly aligned smile you deserve.",
                list: ["Traditional Metal Braces", "Clear Aligners (Invisalign)", "Ceramic Braces", "Retainers & Post-Treatment Care", "Jaw Alignment Correction"],
                descSec: "It's never too late to straighten your smile. We offer options for teens and adults."
            },
            6: {
                title: "Sedation Dentistry",
                image: "https://images.unsplash.com/photo-1579154204601-01588f351e67?auto=format&fit=crop&q=80&w=1000",
                descMain: "Dental anxiety should not prevent you from getting the care you need. Our sedation dentistry options allow you to relax completely during your visit. From mild sedation to sleep dentistry, we ensure your experience is stress-free and comfortable.",
                list: ["Nitrous Oxide (Laughing Gas)", "Oral Conscious Sedation", "IV Sedation", "Anxiety-Free Cleanings", "Long-Procedure Comfort"],
                descSec: "Your safety is paramount. All sedation is administered by certified professionals."
            }
        };

        function openServiceModal(id) {
            const data = servicesData[id];
            if (!data) return;

            // Populate Data
            document.getElementById('modalId').innerText = '0' + id;
            document.getElementById('modalTitle').innerText = data.title;
            document.getElementById('modalImage').src = data.image;
            // Changed from innerText to innerHTML to support images in description
            document.getElementById('modalDescMain').innerHTML = data.descMain;
            document.getElementById('modalDescSecondary').innerHTML = data.descSec;

            // Populate List
            const listContainer = document.getElementById('modalList');
            listContainer.innerHTML = ''; // Clear previous
            data.list.forEach(item => {
                const li = document.createElement('li');
                li.className = "flex items-start gap-2 text-sm text-neutral-600";
                li.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" class="mt-1 text-emerald-500 shrink-0"><polyline points="20 6 9 17 4 12"/></svg> ${item}`;
                listContainer.appendChild(li);
            });

            // Show Modal
            const modal = document.getElementById('serviceModal');
            const content = document.getElementById('serviceModalContent');
            
            modal.classList.remove('hidden');
            // Small delay to allow display:block to apply before opacity transition
            setTimeout(() => {
                modal.classList.remove('opacity-0');
                content.classList.remove('scale-95');
                content.classList.add('scale-100');
            }, 10);
            
            // Prevent body scroll
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

        // Close on Escape key
        document.addEventListener('keydown', function(event) {
            if (event.key === "Escape") {
                closeServiceModal();
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="ILgOO23w4wEyPQOKyLO4"></div>

</div></div>

<header className="fixed md:p-6 w-full z-50 pt-4 pr-4 pb-4 pl-4 top-0 right-0 left-0">
<nav className="mx-auto max-w-7xl rounded-full backdrop-blur-xl border shadow-lg px-6 py-3 flex items-center justify-between transition-all duration-300 bg-white/80 border-white/20 shadow-neutral-200/50">

<a className="flex items-center gap-2 group" href="#">
<div className="group-hover:bg-indigo-600 transition-colors text-white bg-blue-500 rounded-xl px-1.5 py-1.5">
<svg className="lucide lucide-codesandbox stroke-[1.5]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="codesandbox" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path><polyline points="7.5 4.21 12 6.81 16.5 4.21"></polyline><polyline points="7.5 19.79 7.5 14.6 3 12"></polyline><polyline points="21 12 16.5 14.6 16.5 19.79"></polyline><polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline><line x1="12" x2="12" y1="22.08" y2="12"></line></svg>
</div>
<span className="text-xl font-semibold text-neutral-900 tracking-tight">Dental</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium transition-colors text-neutral-600 hover:text-indigo-600" href="#">Home</a>
<a className="text-sm font-medium transition-colors text-neutral-600 hover:text-indigo-600" href="#about">About Us</a>
<a className="text-sm font-medium transition-colors text-neutral-600 hover:text-indigo-600" href="#team">Team</a>
<a className="transition-colors hover:text-indigo-600 text-sm font-medium text-neutral-600" href="#services">Services</a>
<a className="transition-colors hover:text-indigo-600 text-sm font-medium text-neutral-600" href="#contact">Contact</a>
</div>

<a className="hidden items-center gap-2 transition-all shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:bg-indigo-600 md:inline-flex text-sm font-medium text-white bg-blue-500 rounded-full px-5 py-2.5 shadow-lg" href="#book">
                Book Appointment
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>

<button className="md:hidden text-neutral-900">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</nav>
</header>

<section className="lg:pt-40 lg:pb-32 overflow-hidden pt-32 pb-20 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 gap-x-12 gap-y-12 items-center">

<div className="space-y-8">
<h1 className="leading-[1.1] lg:text-7xl text-5xl font-semibold text-purple-700 tracking-tighter">
                        Your Path to a <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r to-cyan-500 from-indigo-600">Confident Smile</span> Starts Here.
                    </h1>
<p className="leading-relaxed md:text-xl text-lg font-medium text-neutral-100 max-w-lg">
                        Experience world-class dental care designed for your comfort. We combine advanced technology with a gentle touch to bring out your best smile.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex justify-center items-center gap-2 bg-indigo-500 text-base font-medium px-8 py-3.5 rounded-full transition-all shadow-xl shadow-indigo-500/20 hover:shadow-indigo-500/40 hover:-translate-y-1 hover:bg-indigo-600 text-white" href="#book">
                            Book Appointment
                            <svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</a>
<a className="inline-flex justify-center items-center gap-2 border text-base font-medium px-8 py-3.5 rounded-full transition-all bg-white hover:bg-neutral-50 text-neutral-700 border-neutral-200 hover:border-indigo-200 hover:text-indigo-600" href="#services">
                            Learn More
                            <svg className="lucide lucide-arrow-down-right w-4 h-4" data-lucide="arrow-down-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m7 7 10 10"></path><path d="M17 7v10H7"></path></svg>
</a>
</div>

<div className="flex items-center gap-4 pt-4">
<div className="flex -space-x-3">
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
<img alt="" className="w-10 h-10 rounded-full border-2 object-cover border-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&amp;fit=crop&amp;w=64&amp;h=64"/>
</div>
<div className="">
<div className="flex gap-0.5 text-yellow-400">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-sm font-medium text-gray-100 mt-1">Trusted by <span className="font-semibold text-slate-200">20k+ Patients</span></p>
</div>
</div>
</div>

<div className="relative">
<div className="relative rounded-[2.5rem] overflow-hidden shadow-2xl group shadow-indigo-900/10">
<img alt="Dental Treatment" className="w-full h-[600px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>

<div className="absolute inset-0 bg-gradient-to-t via-transparent to-transparent from-indigo-950/60"></div>

<div className="absolute top-8 left-8 flex flex-col gap-3">
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-indigo-800">
<svg className="lucide lucide-check-circle-2 w-3.5 h-3.5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg> Quality Care
                            </span>
<span className="inline-flex items-center gap-1.5 backdrop-blur-md px-3 py-1.5 rounded-full text-xs font-semibold shadow-lg bg-white/90 text-indigo-800">
<svg className="lucide lucide-zap w-3.5 h-3.5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg> Modern Tech
                            </span>
</div>

<div className="absolute bottom-8 left-8 right-8 backdrop-blur-xl p-6 rounded-2xl shadow-xl flex items-center justify-between bg-white/95">
<div className="">
<p className="text-xs font-bold uppercase tracking-wider mb-1 text-indigo-600">Our Promise</p>
<p className="font-medium text-neutral-900">Your Comfort, Our Priority.</p>
</div>
<div className="p-3 rounded-full bg-indigo-100 text-indigo-600">
<svg className="lucide lucide-heart-handshake w-6 h-6" data-lucide="heart-handshake" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19.414 14.414C21 12.828 22 11.5 22 9.5a5.5 5.5 0 0 0-9.591-3.676.6.6 0 0 1-.818.001A5.5 5.5 0 0 0 2 9.5c0 2.3 1.5 4 3 5.5l5.535 5.362a2 2 0 0 0 2.879.052 2.12 2.12 0 0 0-.004-3 2.124 2.124 0 1 0 3-3 2.124 2.124 0 0 0 3.004 0 2 2 0 0 0 0-2.828l-1.881-1.882a2.41 2.41 0 0 0-3.409 0l-1.71 1.71a2 2 0 0 1-2.828 0 2 2 0 0 1 0-2.828l2.823-2.762"></path></svg>
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

<div className="bg-indigo-500 rounded-3xl p-8 shadow-xl shadow-indigo-500/10 transform md:-translate-y-8 text-white">
<h3 className="text-4xl font-semibold tracking-tight mb-2">#1</h3>
<p className="text-xl font-medium mb-4">Patient Choice</p>
<p className="text-sm leading-relaxed text-indigo-100">We are dedicated to your comfort and health, making us a top choice in the region.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">25K+</h3>
<p className="font-medium mb-2 text-indigo-400">Happy Patients</p>
<p className="text-sm text-indigo-100/60">Achieving healthier, brighter smiles every single day.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">15K+</h3>
<p className="font-medium mb-2 text-indigo-400">Successful Treatments</p>
<p className="text-sm text-indigo-100/60">Completed with advanced techniques and care.</p>
</div>

<div className="p-6 md:p-8">
<h3 className="text-4xl md:text-5xl font-semibold tracking-tight mb-2 text-white">20Y+</h3>
<p className="font-medium mb-2 text-indigo-400">Years Experience</p>
<p className="text-sm text-indigo-100/60">Years of expert and compassionate dental service.</p>
</div>
</div>
</div>
</section>

<section className="py-24 mx-auto max-w-5xl px-4" id="about">
<div className="flex sm:mb-8 mb-6 items-end justify-between">
<div className="">
<p className="text-[11px] sm:text-xs uppercase text-neutral-500 tracking-widest font-geist">About Us</p>
<h3 className="sm:text-3xl text-2xl font-medium text-purple-700 tracking-tight font-geist mt-2">Creating smiles with purpose and
            passion.</h3>
</div>
<a className="hidden sm:inline-flex items-center gap-2 ring-1 ring-neutral-200 hover:shadow text-sm text-neutral-700 font-geist bg-white rounded-full pt-2 pr-4 pb-2 pl-4" href="#team">
          Meet Our Doctors
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="flex flex-col gap-4">
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-3xl shadow-sm">
<img alt="Dental Office" className="w-full h-80 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dc93292f-4771-41e0-8e83-4f6bafe1dc2d_1600w.webp"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-2xl shadow-sm">
<img alt="Modern Equipment" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="relative overflow-hidden ring-1 ring-neutral-200 bg-white rounded-2xl shadow-sm">
<img alt="Consultation" className="h-40 w-full object-cover" src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>

<div className="flex flex-col">
<div className="space-y-6">
<div className="">
<h4 className="text-lg font-medium text-neutral-100 font-geist mb-3">Welcome to Swarnim</h4>
<p className="leading-relaxed text-neutral-100 font-geist">
                We are a passionate team of dental professionals based in Los Angeles with over 20 years of experience creating healthy, confident smiles. I believe great dentistry is not just about treating teeth—it's about
                caring for people and improving their overall quality of life.
              </p>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-100 font-geist mb-3">Our Approach</h5>
<p className="leading-relaxed text-neutral-100 font-geist">
                We combine advanced medical technology with a gentle, patient-first philosophy. Every
                treatment plan starts with understanding your needs, your goals, and ensuring you feel comfortable every step of the way.
              </p>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-100 font-geist mb-3">Services &amp; Expertise</h5>
<div className="grid grid-cols-2 gap-3 text-neutral-100 gap-x-3 gap-y-3">
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">General Dentistry</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">Oral Surgery</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">Cosmetic Care</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">Orthodontics</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">Pediatric Care</span>
</div>
<div className="flex items-center gap-2">
<div className="h-2 w-2 rounded-full bg-indigo-600"></div>
<span className="text-sm text-neutral-100 font-geist">Sedation</span>
</div>
</div>
</div>
<div className="">
<h5 className="text-base font-medium text-neutral-100 font-geist mb-3">Beyond the Clinic</h5>
<p className="leading-relaxed text-neutral-100 font-geist">
                We are deeply rooted in our community, organizing free dental camps and educational seminars. We are always researching emerging dental technologies to ensure our patients receive the best care possible.
              </p>
</div>
<div className="pt-4">
<div className="flex flex-wrap gap-3">
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">20+ Years Experience</span>
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">15k+ Patients</span>
<span className="inline-flex items-center rounded-full bg-neutral-100 text-neutral-700 text-xs px-3 py-1.5 font-geist">Top Rated</span>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 sm:mt-10 flex justify-center">
<a className="inline-flex items-center gap-2 rounded-full bg-white ring-1 ring-neutral-200 px-5 py-3 text-sm text-neutral-700 hover:shadow font-geist" href="#contact">
          Book Your Visit
          <svg className="lucide lucide-arrow-up-right w-[24px] h-[16px]" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '16px', color: 'rgb(64, 64, 64)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>
</section>

<section className="lg:py-32 bg-neutral-50 pt-24 pb-24" id="services">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="text-center max-w-2xl mx-auto mb-20">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight mb-6 text-neutral-900">
                    Our Comprehensive <span className="text-indigo-600">Services</span>
</h2>
<p className="text-lg text-neutral-500 font-medium">
                    We offer a full range of modern dental solutions. Click on any service to learn more.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(1)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="General Dentistry" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">01</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-plus text-stone-950 w-[24px] h-[24px]" data-icon-replaced="true" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path className="" d="M5 12h14"></path><path className="" d="M12 5v14"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">General Dentistry</h3>
<p className="leading-relaxed text-base text-neutral-500">We offer cleanings, fillings, &amp; preventive care for a healthy smile.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(2)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Cosmetic Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">02</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-sparkles w-6 h-6" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Cosmetic Dentistry</h3>
<p className="leading-relaxed text-base text-neutral-500">Achieve your dream smile with professional whitening and veneers.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(3)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Oral Surgery" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1b4971f8-4a75-4777-9b6d-3b2892459fea_800w.webp"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">03</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-activity w-6 h-6" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Oral Surgery</h3>
<p className="text-neutral-500 leading-relaxed text-base">Our team provides gentle care for all complex oral surgical needs.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(4)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Pediatric Dentistry" className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1576765608622-067973a79f53?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">04</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-baby w-6 h-6" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Pediatric Dentistry</h3>
<p className="text-neutral-500 leading-relaxed text-base">We provide gentle and fun dental care for children to ensure healthy smiles.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(5)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Orthodontics" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1598256989800-fe5f95da9787?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">05</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-smile-plus w-6 h-6" data-lucide="smile-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 11v1a10 10 0 1 1-9-10"></path><path d="M8 14s1.5 2 4 2 4-2 4-2"></path><line x1="9" x2="9.01" y1="9" y2="9"></line><line x1="15" x2="15.01" y1="9" y2="9"></line><path d="M16 5h6"></path><path d="M19 2v6"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Orthodontics</h3>
<p className="text-neutral-500 leading-relaxed text-base">Achieve a perfectly aligned smile with our modern orthodontic solutions.</p>
</div>
</div>

<div className="group p-2 rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300 border relative overflow-hidden bg-white hover:shadow-indigo-900/5 border-neutral-100 cursor-pointer" onclick="openServiceModal(6)">
<div className="relative h-56 rounded-2xl overflow-hidden bg-neutral-100">
<img alt="Sedation Dentistry" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1516549655169-df83a0774514?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold shadow-sm text-neutral-900">06</div>
</div>
<div className="p-6 relative">
<div className="absolute -top-10 right-6 w-12 h-12 rounded-xl flex items-center justify-center shadow-lg group-hover:bg-indigo-600 group-hover:text-white transition-colors bg-white text-indigo-600">
<svg className="lucide lucide-moon w-6 h-6" data-lucide="moon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20.985 12.486a9 9 0 1 1-9.473-9.472c.405-.022.617.46.402.803a6 6 0 0 0 8.268 8.268c.344-.215.825-.004.803.401"></path></svg>
</div>
<h3 className="text-2xl font-semibold mb-3 tracking-tight text-neutral-900 mt-2">Sedation Dentistry</h3>
<p className="text-neutral-500 leading-relaxed text-base">Experience a stress-free visit with our safe and effective sedation options.</p>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white pt-24 pb-24 relative" id="team">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="">
<span className="inline-block px-3 py-1 rounded-full text-xs font-semibold mb-4 uppercase tracking-wider bg-neutral-100 text-neutral-600">The Team</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4 text-neutral-900">
                        Our Professional <span className="text-indigo-500">Team</span>
</h2>
<p className="text-lg text-neutral-500 font-medium max-w-xl">
                        Our team is dedicated to providing the highest quality of care in a comfortable environment.
                    </p>
</div>
<div className="flex gap-3">
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all border-neutral-200 text-neutral-400 hover:text-white">
<svg className="lucide lucide-arrow-left w-5 h-5" data-lucide="arrow-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="w-12 h-12 rounded-full border flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all border-neutral-200 text-neutral-400 hover:text-white">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6">

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-indigo-50/50 hover:bg-indigo-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Alex Chen" className="absolute inset-0 w-full h-full object-cover" src="https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-emerald-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-neutral-900">Dr. Alex Chen</h4>
<p className="text-sm font-medium text-indigo-600">General Dentist</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-indigo-50/50 hover:bg-indigo-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. James Carter" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-emerald-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-neutral-900">Dr. James Carter</h4>
<p className="text-sm font-medium text-indigo-600">Oral Surgeon</p>
</div>
</div>

<div className="lg:col-span-1 lg:-mt-12 group relative rounded-3xl overflow-hidden bg-indigo-500 shadow-xl shadow-indigo-500/20 cursor-pointer">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Sofia Rodriguez" className="opacity-90 mix-blend-normal w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&amp;fit=crop&amp;q=80&amp;w=600"/>
<div className="absolute top-4 right-4 p-2 rounded-full bg-white">
<svg className="lucide lucide-star w-4 h-4 text-emerald-600 fill-emerald-600" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-6 text-center text-white">
<span className="inline-block px-2 py-0.5 rounded-md backdrop-blur-md text-[10px] font-bold uppercase tracking-widest mb-2 bg-white/20">Head Doctor</span>
<h4 className="text-xl font-semibold">Dr. Sofia Rodriguez</h4>
<p className="text-sm font-medium text-indigo-100">Cosmetic Dentist</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-indigo-50/50 hover:bg-indigo-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Maria Lopez" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/25d7c944-fb0c-4075-ab3b-25e1ae075781_800w.jpg"/>
<div className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-emerald-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-neutral-900">Dr. Maria Lopez</h4>
<p className="text-sm font-medium text-indigo-600">Orthodontist</p>
</div>
</div>

<div className="group relative rounded-3xl overflow-hidden transition-colors cursor-pointer bg-indigo-50/50 hover:bg-indigo-100/50">
<div className="aspect-[4/5] w-full relative">
<img alt="Dr. Olivia Carter" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9f023d8e-7464-4eea-9789-18f1b0227cc8_800w.webp"/>
<div className="absolute top-4 right-4 p-2 rounded-full opacity-0 group-hover:opacity-100 transition-opacity bg-white">
<svg className="lucide lucide-arrow-up-right w-4 h-4 text-emerald-600" data-lucide="arrow-up-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</div>
</div>
<div className="p-4 text-center">
<h4 className="text-lg font-semibold text-neutral-900">Dr. Olivia Carter</h4>
<p className="text-sm font-medium text-indigo-600">Pediatric Dentist</p>
</div>
</div>
</div>
</div>
</section>


<section className="py-24 rounded-t-[3rem] lg:rounded-t-[4rem] overflow-hidden relative bg-indigo-950 text-white" id="book">

<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 2px 2px, white 1px, transparent 0)', backgroundSize: '40px 40px'}}>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative hidden lg:block">
<div className="absolute top-0 right-0 w-2/3 h-2/3 bg-indigo-500/20 rounded-full blur-3xl"></div>
<img alt="Medical Staff" className="transform hover:rotate-0 transition-transform duration-500 object-cover border-indigo-900/50 border-4 rounded-[2.5rem] shadow-2xl rotate-2" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dffa605b-827b-4d7b-b8e4-8064e681b9f8_1600w.webp"/>
<div className="absolute -bottom-8 -left-8 p-6 rounded-2xl shadow-xl max-w-xs bg-white text-neutral-900">
<div className="flex items-center gap-3 mb-3">
<div className="p-2 rounded-lg bg-indigo-100 text-indigo-600">
<svg className="lucide lucide-clock w-6 h-6" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
</div>
<span className="font-bold text-lg">Fast Booking</span>
</div>
<p className="text-sm text-neutral-500 font-medium">Get your appointment confirmed in less than 2 minutes.</p>
</div>
</div>

<div className="">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-4">
                        Let's Start Your Smile  Journey With Us.
                    </h2>
<p className="font-medium mb-10 text-lg text-indigo-200/80">
                        Booking your next visit is simple. Fill out the form below and we'll confirm your appointment shortly.
                    </p>
<form className="space-y-4">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div>
<label className="sr-only">Name</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-indigo-900/50 border-indigo-800 text-white" placeholder="Full Name" type="text"/>
</div>
<div>
<label className="sr-only">Phone</label>
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all bg-indigo-900/50 border-indigo-800 text-white" placeholder="Phone Number" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer bg-indigo-900/50 border-indigo-800 text-white">
<option className="text-neutral-900">Select Service</option>
<option className="text-neutral-900">General Checkup</option>
<option className="text-neutral-900">Cleaning</option>
<option className="text-neutral-900">Whitening</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-emerald-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
<div className="relative">
<select className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 appearance-none cursor-pointer bg-indigo-900/50 border-indigo-800 text-white">
<option className="text-neutral-900">Any Doctor</option>
<option className="text-neutral-900">Dr. Alex Chen</option>
<option className="text-neutral-900">Dr. Sofia Rodriguez</option>
</select>
<svg className="lucide lucide-chevron-down absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-emerald-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>

<div className="relative">
<input className="w-full border rounded-xl px-5 py-4 placeholder-indigo-400/60 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all [color-scheme:dark] bg-indigo-900/50 border-indigo-800 text-white" onfocus="(this.type='datetime-local')" placeholder="Preferred Date &amp; Time" type="text"/>
<svg className="lucide lucide-calendar-clock absolute right-5 top-1/2 -translate-y-1/2 w-5 h-5 pointer-events-none text-emerald-400" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<button className="transition-all shadow-indigo-500/20 hover:shadow-indigo-500/40 flex hover:bg-indigo-400 text-lg font-semibold text-white bg-indigo-500 w-full rounded-xl mt-4 pt-4 pb-4 shadow-lg gap-x-2 gap-y-2 items-center justify-center" onclick="window.location.href='/mountpark24@gmail.com'" role="button" type="button">
                            Book Now
                            <svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
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
<div className="text-white bg-blue-500 rounded-lg px-1.5 py-1.5">
<svg className="lucide lucide-atom stroke-[1.5]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="atom" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><path d="M20.2 20.2c2.04-2.03.02-7.36-4.5-11.9-4.54-4.52-9.87-6.54-11.9-4.5-2.04 2.03-.02 7.36 4.5 11.9 4.54 4.52 9.87 6.54 11.9 4.5Z"></path><path d="M15.7 15.7c4.52-4.54 6.54-9.87 4.5-11.9-2.03-2.04-7.36-.02-11.9 4.5-4.52 4.54-6.54 9.87-4.5 11.9 2.03 2.04 7.36.02 11.9-4.5Z"></path></svg>
</div>
<span className="text-xl font-semibold text-neutral-900 tracking-tight">Dental</span>
</a>
<p className="text-neutral-500 font-medium leading-relaxed">
                        Your destination for a healthy, confident smile. We are committed to providing exceptional care in a modern environment.
                    </p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all bg-white border-neutral-200 text-indigo-600 hover:text-white" href="#">
<svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all bg-white border-neutral-200 text-indigo-600 hover:text-white" href="#">
<svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a className="w-10 h-10 rounded-full border flex items-center justify-center hover:bg-indigo-500 hover:border-indigo-500 transition-all bg-white border-neutral-200 text-indigo-600 hover:text-white" href="#">
<svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>

<div className="">
<h4 className="font-bold mb-6 text-neutral-900">Contact Us</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-neutral-500 font-medium">
<svg className="lucide lucide-map-pin w-5 h-5 text-emerald-500 shrink-0" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span className="">186 Dental Way, Los Angeles, CA 90024</span>
</li>
<li className="flex items-center gap-3 text-neutral-500 font-medium">
<svg className="lucide lucide-phone w-5 h-5 text-emerald-500 shrink-0" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span>(310) 555-0187</span>
</li>
<li className="flex items-center gap-3 text-neutral-500 font-medium">
<svg className="lucide lucide-mail w-5 h-5 text-emerald-500 shrink-0" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
<span>info@swarnim.com</span>
</li>
</ul>
</div>

<div className="">
<h4 className="font-bold mb-6 text-neutral-900">Open Hour</h4>
<ul className="space-y-3 text-neutral-500 font-medium">
<li className="flex justify-between">
<span className="">Mon - Tue</span>
<span className="text-neutral-900">9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Wed - Thu</span>
<span className="text-neutral-900">9:00 AM - 5:00 PM</span>
</li>
<li className="flex justify-between">
<span>Friday</span>
<span className="text-neutral-900">9:00 AM - 3:00 PM</span>
</li>
</ul>
</div>

<div>
<h4 className="font-bold mb-6 text-neutral-900">Services</h4>
<ul className="space-y-3 text-neutral-500 font-medium">
<li><a className="hover:text-indigo-500 transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">Cosmetic Dentistry</a></li>
<li><a className="hover:text-indigo-500 transition-colors" href="#">Oral Surgery</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col md:flex-row justify-between items-center gap-4 border-neutral-200">
<p className="text-neutral-500 font-medium text-sm">© 2024 Swarnim Dental Care. All Rights Reserved.</p>
<div className="flex gap-8 text-sm font-medium text-neutral-500">
<a className="hover:text-indigo-600" href="#">Privacy Policy</a>
<a className="hover:text-indigo-600" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] flex items-center justify-center hidden opacity-0 transition-opacity duration-300" id="serviceModal">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onclick="closeServiceModal()"></div>

<div className="relative bg-white rounded-3xl shadow-2xl max-w-5xl w-full mx-4 overflow-hidden transform scale-95 transition-transform duration-300 flex flex-col lg:flex-row h-[85vh] lg:h-auto" id="serviceModalContent">

<button className="absolute top-4 right-4 z-10 p-2 bg-white/50 backdrop-blur-md rounded-full hover:bg-white text-neutral-600 transition-colors" onclick="closeServiceModal()">
<svg className="w-6 h-6" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
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
<div className="bg-slate-50 p-6 rounded-2xl border border-slate-100">
<h4 className="font-semibold text-neutral-900 mb-3 text-sm uppercase tracking-wide">What We Offer</h4>
<ul className="space-y-3" id="modalList">

</ul>
</div>
<p className="text-sm italic text-neutral-400" id="modalDescSecondary"></p>
</div>
</div>
<div className="mt-10 pt-6 border-t border-slate-100">
<a className="flex items-center justify-center gap-2 w-full bg-indigo-600 hover:bg-indigo-700 text-white font-medium py-4 rounded-xl transition-all shadow-lg shadow-indigo-200" href="#book" onclick="closeServiceModal()">
                        Book This Service
                        <svg className="ml-1" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</div>
</div>



    </>
  );
}
