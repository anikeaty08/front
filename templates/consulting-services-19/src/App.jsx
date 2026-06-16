import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            gsap.registerPlugin(ScrollTrigger);

            const navbar = document.getElementById('navbar');
            
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('shadow-sm', 'bg-white/95');
                    navbar.classList.remove('bg-white/80');
                } else {
                    navbar.classList.remove('shadow-sm', 'bg-white/95');
                    navbar.classList.add('bg-white/80');
                }
            });

            const heroTimeline = gsap.timeline();
            heroTimeline.from(".hero-content h1", {
                y: 40,
                opacity: 0,
                duration: 1,
                ease: "power3.out",
                delay: 0.2
            })
            .from(".hero-content div", {
                scaleX: 0,
                opacity: 0,
                duration: 0.8,
                ease: "power3.out"
            }, "-=0.4");

            const revealElements = gsap.utils.toArray('.gs-reveal');
            
            revealElements.forEach((elem) => {
                gsap.from(elem, {
                    scrollTrigger: {
                        trigger: elem,
                        start: "top 85%",
                        toggleActions: "play none none none"
                    },
                    y: 30,
                    opacity: 0,
                    duration: 0.8,
                    ease: "power2.out",
                    clearProps: "all"
                });
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<nav className="fixed w-full top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-['DM_Sans',sans-serif] font-semibold text-xl tracking-tight text-[#962d00] flex items-center gap-2" href="#">
<iconify-icon className="text-2xl" icon="solar:planet-3-linear"></iconify-icon>
                JCO
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-normal">
<a className="text-gray-900 transition-colors relative after:absolute after:w-full after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300" href="#">Home</a>
<a className="hover:text-gray-900 transition-colors relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" href="#">About us</a>
<a className="hover:text-gray-900 transition-colors flex items-center gap-1 relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" href="#">
                    Programs <iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</a>
<a className="hover:text-gray-900 transition-colors relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" href="#">Events</a>
<a className="hover:text-gray-900 transition-colors relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" href="#">Clients</a>
<a className="hover:text-gray-900 transition-colors relative after:absolute after:w-0 after:h-px after:-bottom-1 after:left-0 after:bg-current after:transition-all after:duration-300 hover:after:w-full" href="#">Resources</a>
</div>
<div className="hidden md:flex items-center gap-4">
<button className="text-sm font-normal hover:text-gray-900 transition-colors">EN</button>
<a className="bg-[#962d00] text-white px-5 py-2.5 rounded-md text-sm font-medium hover:bg-[#7a2400] transition-colors" href="#">
                    Register Now
                </a>
</div>
<button aria-label="Open menu" className="md:hidden text-2xl text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>
<header className="relative w-full h-screen min-h-[600px] flex items-center justify-center overflow-hidden pt-20">
<div className="absolute inset-0 z-0">
<img alt="Tokyo cityscape" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1577415124269-fc1140a69e91?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/50 to-transparent"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center hero-content">
<h1 className="font-['DM_Sans',sans-serif] font-semibold text-4xl md:text-5xl lg:text-7xl text-white uppercase tracking-tight leading-tight">
                Empowering Global Success Through Cultural Excellence
            </h1>
<div className="mt-10 h-1.5 w-64 bg-[#962d00] mx-auto rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-full animate-pulse"></div>
</div>
</div>
</header>
<section className="py-24 lg:py-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24">
<div className="w-full lg:w-5/12 relative gs-reveal">
<div className="relative rounded-2xl overflow-hidden aspect-[4/5] bg-gray-100">
<img alt="Team meeting" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 -right-6 w-32 h-32 bg-gray-50 rounded-full border border-gray-200 -z-10"></div>
</div>
<div className="w-full lg:w-7/12 flex flex-col items-start gap-6 gs-reveal">
<span className="text-[#962d00] text-sm font-medium uppercase tracking-[0.2em]">Who We Are</span>
<h2 className="font-['DM_Sans',sans-serif] font-semibold text-3xl md:text-4xl lg:text-5xl text-gray-900 tracking-tight leading-tight">
                    Empowering Global Workplaces with Expertise and Cultural Insight
                </h2>
<p className="text-base md:text-lg leading-relaxed text-gray-500 max-w-2xl">
                    Japan Consulting Office (JCO) specializes in enhancing workplace efficiency and cross-cultural communication through public courses and tailored training programs. With offices in Europe, Asia, and the United States, since 2006, we've earned acclaim for our practical approach and have been recognized as a top training institute globally.
                </p>
<a className="group mt-4 inline-flex items-center gap-3 text-[#962d00] font-medium text-base transition-colors hover:text-[#7a2400]" href="#">
<span>Learn More</span>
<div className="flex items-center">
<div className="h-px bg-current w-0 transition-all duration-500 ease-out group-hover:w-8"></div>
<div className="w-8 h-8 rounded-full border border-current flex items-center justify-center transition-transform duration-500 group-hover:translate-x-1">
<iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</div>
</div>
</a>
</div>
</div>
</section>
<section className="py-24 lg:py-32 bg-gray-50 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-3 mb-16 gs-reveal">
<span className="text-[#962d00] text-sm font-medium uppercase tracking-[0.2em]">Shaping Tomorrow's Workforce</span>
<h2 className="font-['DM_Sans',sans-serif] font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">Our Programs</h2>
<p className="max-w-2xl text-base text-gray-500 mt-2">
                    Discover JCO's tailored solutions for cultural competency, leadership development, and specialized integration, ensuring enhanced workplace dynamics and organizational success.
                </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col gs-reveal hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500">
<div className="aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Cultural Training" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 mb-3 tracking-tight">Cultural Competency Training</h3>
<p className="text-gray-500 flex-grow mb-6">
                            Enhance workplace harmony and productivity with our tailored cultural competency training programs. Addressing cultural nuances directly...
                        </p>
<a className="inline-flex items-center gap-2 text-[#962d00] font-medium text-sm group/btn w-fit" href="#">
                            Learn More
                            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
<div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col gs-reveal hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500" style={{transitionDelay: '100ms'}}>
<div className="aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Leadership" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1552664730-d307ca884978?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 mb-3 tracking-tight">Leadership and Management</h3>
<p className="text-gray-500 flex-grow mb-6">
                            Equip your leaders with the skills they need to excel. Our programs cover essential leadership and management strategies, empowering teams...
                        </p>
<a className="inline-flex items-center gap-2 text-[#962d00] font-medium text-sm group/btn w-fit" href="#">
                            Learn More
                            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
<div className="group bg-white rounded-2xl overflow-hidden border border-gray-100 flex flex-col gs-reveal hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-500" style={{transitionDelay: '200ms'}}>
<div className="aspect-[16/9] overflow-hidden bg-gray-100">
<img alt="Integration" className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover:scale-105" src="https://images.unsplash.com/photo-1600880292089-90a7e086ee0c?q=80&amp;w=2940&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 flex flex-col flex-grow">
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 mb-3 tracking-tight">Specialized Integration Solutions</h3>
<p className="text-gray-500 flex-grow mb-6">
                            Navigate post-merger and acquisition challenges seamlessly with our specialized integration solutions. From strategic alignment to execution...
                        </p>
<a className="inline-flex items-center gap-2 text-[#962d00] font-medium text-sm group/btn w-fit" href="#">
                            Learn More
                            <div className="w-6 h-6 rounded-full border border-current flex items-center justify-center transition-transform duration-300 group-hover/btn:translate-x-1">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</div>
</a>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 border-b border-gray-100 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-2 mb-12 gs-reveal text-center md:text-left">
<span className="text-[#962d00] text-sm font-medium uppercase tracking-[0.2em]">Measuring Our Achievements</span>
<h2 className="font-['DM_Sans',sans-serif] font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">Our Success</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-10 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-gray-200">
<div className="pt-6 sm:pt-0 sm:px-8 first:pl-0 flex flex-col items-center sm:items-start text-center sm:text-left gs-reveal">
<div className="font-['DM_Sans',sans-serif] font-semibold text-5xl md:text-6xl tracking-tight text-[#962d00] mb-2">5+</div>
<div className="text-gray-500">Companies Accelerated</div>
</div>
<div className="pt-6 sm:pt-0 sm:px-8 flex flex-col items-center sm:items-start text-center sm:text-left gs-reveal" style={{transitionDelay: '100ms'}}>
<div className="font-['DM_Sans',sans-serif] font-semibold text-5xl md:text-6xl tracking-tight text-[#962d00] mb-2">10+</div>
<div className="text-gray-500">Industries Innovated</div>
</div>
<div className="pt-6 sm:pt-0 sm:px-8 flex flex-col items-center sm:items-start text-center sm:text-left gs-reveal" style={{transitionDelay: '200ms'}}>
<div className="font-['DM_Sans',sans-serif] font-semibold text-5xl md:text-6xl tracking-tight text-[#962d00] mb-2">20+</div>
<div className="text-gray-500">Technical Professionals on Platform</div>
</div>
</div>
</div>
</section>
<section className="py-24 lg:py-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col lg:flex-row gap-12 lg:gap-24">
<div className="w-full lg:w-4/12 flex flex-col gap-6 gs-reveal lg:sticky lg:top-32 h-fit">
<span className="text-[#962d00] text-sm font-medium uppercase tracking-[0.2em]">Mark Your Calendar</span>
<h2 className="font-['DM_Sans',sans-serif] font-semibold text-3xl md:text-4xl text-gray-900 tracking-tight">Upcoming Events</h2>
<p className="text-gray-500 text-base">
                        Join us at our events, courses, and workshops to stay informed and engaged with the latest trends and best practices in the industry.
                    </p>
</div>
<div className="w-full lg:w-8/12 flex flex-col gap-6">
<div className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 gs-reveal cursor-pointer">
<div className="flex-shrink-0 bg-gray-50 rounded-xl p-4 min-w-[120px] text-center border border-gray-100 flex flex-col items-center justify-center">
<span className="text-gray-400 text-xs font-medium uppercase mb-1">Feb 2024</span>
<span className="font-['DM_Sans',sans-serif] font-semibold text-4xl tracking-tight text-gray-900 leading-none mb-1">09</span>
<span className="text-gray-900 font-medium text-sm">Thu</span>
</div>
<div className="flex-grow flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-3">
<span className="px-3 py-1 bg-orange-50 text-[#962d00] text-xs font-medium rounded-full">Event</span>
<span className="flex items-center gap-1 text-xs text-gray-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Osaka, Japan
                                </span>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 tracking-tight group-hover:text-[#962d00] transition-colors">Effective Leadership Workshop</h3>
</div>
<div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-auto">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#962d00] group-hover:text-white group-hover:border-[#962d00] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 gs-reveal cursor-pointer">
<div className="flex-shrink-0 bg-gray-50 rounded-xl p-4 min-w-[120px] text-center border border-gray-100 flex flex-col items-center justify-center">
<span className="text-gray-400 text-xs font-medium uppercase mb-1">Feb 2024</span>
<span className="font-['DM_Sans',sans-serif] font-semibold text-4xl tracking-tight text-gray-900 leading-none mb-1">10</span>
<span className="text-gray-900 font-medium text-sm">Fri</span>
</div>
<div className="flex-grow flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-3">
<span className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-medium rounded-full">Training</span>
<span className="flex items-center gap-1 text-xs text-gray-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Kyoto, Japan
                                </span>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 tracking-tight group-hover:text-[#962d00] transition-colors">Business Etiquette Training</h3>
</div>
<div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-auto">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#962d00] group-hover:text-white group-hover:border-[#962d00] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
<div className="group bg-white border border-gray-100 rounded-2xl p-6 sm:p-8 flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center hover:border-gray-300 hover:shadow-lg transition-all duration-300 gs-reveal cursor-pointer">
<div className="flex-shrink-0 bg-gray-50 rounded-xl p-4 min-w-[120px] text-center border border-gray-100 flex flex-col items-center justify-center">
<span className="text-gray-400 text-xs font-medium uppercase mb-1">Feb 2024</span>
<span className="font-['DM_Sans',sans-serif] font-semibold text-4xl tracking-tight text-gray-900 leading-none mb-1">11</span>
<span className="text-gray-900 font-medium text-sm">Sat</span>
</div>
<div className="flex-grow flex flex-col gap-3">
<div className="flex flex-wrap items-center gap-3">
<span className="px-3 py-1 bg-green-50 text-green-700 text-xs font-medium rounded-full">Course</span>
<span className="flex items-center gap-1 text-xs text-gray-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon> Tokyo, Japan
                                </span>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl md:text-2xl text-gray-900 tracking-tight group-hover:text-[#962d00] transition-colors">Intercultural Communication</h3>
</div>
<div className="flex-shrink-0 mt-4 sm:mt-0 sm:ml-auto">
<div className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-400 group-hover:bg-[#962d00] group-hover:text-white group-hover:border-[#962d00] transition-all duration-300">
<iconify-icon className="text-xl" icon="solar:arrow-right-up-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-gray-900 text-white px-6">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col gap-2 mb-16 text-center md:text-left gs-reveal">
<span className="text-white/60 text-sm font-medium uppercase tracking-[0.2em]">Connecting Cultures Worldwide</span>
<h2 className="font-['DM_Sans',sans-serif] font-semibold text-3xl md:text-4xl text-white tracking-tight">Global Presence</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-16">
<div className="flex flex-col gap-4 gs-reveal">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-2">
<iconify-icon className="text-2xl" icon="solar:map-bold-duotone"></iconify-icon>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl tracking-tight">California</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        680A Berkeley Ave<br/>
                        Menlo Park, CA 94025
                    </p>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-white/70 transition-colors mt-2" href="#">
                        Call Us Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4 gs-reveal" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-2">
<iconify-icon className="text-2xl" icon="solar:map-bold-duotone"></iconify-icon>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl tracking-tight">Tokyo</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        Link Global Solution<br/>
                        3-7-3 Ginza Omibiru<br/>
                        104-0061 Tokyo, Japan
                    </p>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-white/70 transition-colors mt-2" href="#">
                        Call Us Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4 gs-reveal" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-2">
<iconify-icon className="text-2xl" icon="solar:map-bold-duotone"></iconify-icon>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl tracking-tight">Singapore</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        20 Maxwell Road #09-11<br/>
                        Maxwell House<br/>
                        Singapore 069113
                    </p>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-white/70 transition-colors mt-2" href="#">
                        Call Us Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="flex flex-col gap-4 gs-reveal" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center text-white mb-2">
<iconify-icon className="text-2xl" icon="solar:map-bold-duotone"></iconify-icon>
</div>
<h3 className="font-['DM_Sans',sans-serif] font-medium text-xl tracking-tight">London</h3>
<p className="text-white/60 text-sm leading-relaxed">
                        8 Knoll Drive<br/>
                        London N14 5LT, UK
                    </p>
<a className="inline-flex items-center gap-2 text-white font-medium text-sm hover:text-white/70 transition-colors mt-2" href="#">
                        Call Us Now
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>
<section className="py-20 bg-gray-50 border-b border-gray-200 px-6">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-10">
<div className="w-full md:w-1/2 gs-reveal">
<span className="text-[#962d00] text-sm font-medium uppercase tracking-[0.2em] mb-2 block">Get News &amp; Updates</span>
<h2 className="font-['DM_Sans',sans-serif] font-medium text-2xl md:text-3xl text-gray-900 tracking-tight">
                    Subscribe for the Latest Insights and Updates
                </h2>
</div>
<div className="w-full md:w-1/2 max-w-md gs-reveal">
<form className="flex flex-col sm:flex-row gap-3">
<input aria-label="Email Address" className="flex-grow bg-white border border-gray-300 rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[#962d00]/20 focus:border-[#962d00] transition-all placeholder:text-gray-400 text-gray-900" placeholder="Enter Your Email Address" required="" type="email"/>
<button className="bg-[#962d00] text-white px-6 py-3 rounded-lg text-sm font-medium hover:bg-[#7a2400] transition-colors whitespace-nowrap flex items-center justify-center gap-2" type="submit">
                        Subscribe <iconify-icon icon="solar:plain-2-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>
<footer className="bg-white pt-20 pb-10 px-6">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10 lg:gap-6 mb-16 gs-reveal">
<div className="lg:col-span-2 flex flex-col gap-6 pr-0 lg:pr-10">
<a className="font-['DM_Sans',sans-serif] font-semibold text-2xl tracking-tight text-[#962d00] flex items-center gap-2" href="#">
<iconify-icon className="text-3xl" icon="solar:planet-3-linear"></iconify-icon>
                        JCO
                    </a>
<p className="text-sm text-gray-500 leading-relaxed max-w-md">
                        At Japan Consulting Office (JCO), we are dedicated to delivering exceptional results and fostering growth in your organization. Our unique approach and commitment to excellence set us apart as a trusted partner for businesses worldwide.
                    </p>
<div className="flex items-center gap-4 mt-2">
<a aria-label="LinkedIn" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#962d00] hover:border-[#962d00] transition-all" href="#">
<iconify-icon className="text-lg" icon="mdi:linkedin"></iconify-icon>
</a>
<a aria-label="Instagram" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#962d00] hover:border-[#962d00] transition-all" href="#">
<iconify-icon className="text-lg" icon="uil:instagram"></iconify-icon>
</a>
<a aria-label="X (Twitter)" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#962d00] hover:border-[#962d00] transition-all" href="#">
<iconify-icon className="text-lg" icon="ant-design:x-outlined"></iconify-icon>
</a>
<a aria-label="Facebook" className="w-10 h-10 rounded-full bg-gray-50 border border-gray-200 flex items-center justify-center text-gray-500 hover:text-[#962d00] hover:border-[#962d00] transition-all" href="#">
<iconify-icon className="text-lg" icon="ri:facebook-fill"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-['DM_Sans',sans-serif] font-medium text-gray-900 text-lg">Quick Links</h4>
<nav className="flex flex-col gap-3 text-sm text-gray-500">
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">About Us</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Contact Us</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Our Teams</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Our Clients</a>
</nav>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-['DM_Sans',sans-serif] font-medium text-gray-900 text-lg">Programs</h4>
<nav className="flex flex-col gap-3 text-sm text-gray-500">
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Open workshops</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">In-House Training</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">E-Learning</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Customised Services</a>
</nav>
</div>
<div className="flex flex-col gap-5">
<h4 className="font-['DM_Sans',sans-serif] font-medium text-gray-900 text-lg">Resource</h4>
<nav className="flex flex-col gap-3 text-sm text-gray-500">
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Blogs</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Success Stories</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Downloads</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Privacy Policy</a>
<a className="hover:text-[#962d00] transition-colors w-fit" href="#">Terms &amp; Conditions</a>
</nav>
</div>
</div>
<div className="pt-8 border-t border-gray-100 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-400 gs-reveal">
<p>© 2024 Japan Consulting Office (JCO). All rights reserved.</p>
<div className="flex items-center gap-4">
<button className="hover:text-gray-900 transition-colors">English</button>
<button className="hover:text-gray-900 transition-colors">Japanese</button>
<button className="hover:text-gray-900 transition-colors">German</button>
<button className="hover:text-gray-900 transition-colors">French</button>
</div>
</div>
</div>
</footer>


    </>
  );
}
