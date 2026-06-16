import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function showPage(pageId) {
            // Hide all sections
            const sections = document.querySelectorAll('.page-section');
            sections.forEach(section => {
                section.classList.add('hidden');
            });

            // Remove active class from all nav links
            const navLinks = document.querySelectorAll('.nav-link');
            navLinks.forEach(link => {
                link.classList.remove('active', 'text-black', 'font-semibold');
                link.classList.add('text-gray-500');
            });

            // Show target section
            const targetSection = document.getElementById(pageId);
            if (targetSection) {
                targetSection.classList.remove('hidden');
                // Scroll to top
                window.scrollTo(0, 0);
            }

            // Set active nav state (handle sub-pages like blog-post mapping to blog nav)
            let navTarget = pageId;
            if (pageId === 'blog-post') navTarget = 'blog';
            
            const activeLink = document.querySelector(`.nav-link[data-target="${navTarget}"]`);
            if (activeLink) {
                activeLink.classList.add('active', 'text-black', 'font-semibold');
                activeLink.classList.remove('text-gray-500');
            }
        }

        // Initialize Home
        document.addEventListener('DOMContentLoaded', () => {
            showPage('home');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 bg-white/90 backdrop-blur-md border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="showPage('home')">
<div className="w-9 h-9 bg-black rounded-full flex items-center justify-center text-white transition-transform group-hover:scale-110">
<span className="font-bold text-lg">N</span>
</div>
<span className="text-xl font-bold tracking-tight">NovaPersona</span>
</a>
<div className="hidden lg:flex items-center bg-gray-50/50 px-1 p-1 rounded-full border border-gray-100">
<button className="nav-link active px-5 py-2 rounded-full text-sm text-gray-500 hover:text-black transition-all" data-target="home" onclick="showPage('home')">Home</button>
<button className="nav-link px-5 py-2 rounded-full text-sm text-gray-500 hover:text-black transition-all" data-target="about" onclick="showPage('about')">About</button>
<button className="nav-link px-5 py-2 rounded-full text-sm text-gray-500 hover:text-black transition-all" data-target="services" onclick="showPage('services')">Services</button>
<button className="nav-link px-5 py-2 rounded-full text-sm text-gray-500 hover:text-black transition-all" data-target="work" onclick="showPage('work')">Work</button>
<button className="nav-link px-5 py-2 rounded-full text-sm text-gray-500 hover:text-black transition-all" data-target="blog" onclick="showPage('blog')">Blog</button>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-[#1F1F1F] text-white pl-5 pr-1 py-1.5 rounded-full text-sm font-medium hover:bg-black transition-all group" onclick="showPage('contact')">
                    Let's Talk
                    <span className="w-8 h-8 rounded-full bg-[#D4F063] text-black flex items-center justify-center group-hover:rotate-45 transition-transform">
<iconify-icon icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</span>
</button>
<button className="lg:hidden p-2 text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="pt-20 flex-grow" id="main-content">

<section className="page-section fade-in" id="home">

<div className="max-w-7xl mx-auto px-6 pt-20 pb-24">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-gray-200 bg-gray-50 text-xs font-semibold uppercase tracking-wide mb-8 text-gray-600">
<span className="w-2 h-2 rounded-full bg-[#D4F063]"></span> Available for work
                        </div>
<h1 className="text-6xl lg:text-[5.5rem] font-bold leading-[0.95] tracking-tight text-gray-900 mb-8">
                            Designing <span className="text-gray-400">Digital</span> Experiences.
                        </h1>
<p className="text-xl text-gray-500 max-w-lg leading-relaxed mb-10 font-normal">
                            I am Zaur, a digital designer focusing on creating functional and aesthetically pleasing interfaces for brands globally.
                        </p>
<div className="flex flex-wrap gap-4">
<button className="bg-[#D4F063] text-black px-8 py-4 rounded-full font-semibold hover:bg-[#c6e34a] transition-colors flex items-center gap-2" onclick="showPage('work')">
                                View Case Studies
                                <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
<button className="px-8 py-4 rounded-full border border-gray-200 font-semibold hover:bg-gray-50 transition-colors">
                                Download CV
                            </button>
</div>
</div>
<div className="relative">
<div className="aspect-[4/5] rounded-[2.5rem] overflow-hidden bg-gray-100 relative group">
<img alt="Portrait" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>

<div className="absolute bottom-8 left-8 right-8 bg-white/90 backdrop-blur-md p-5 rounded-3xl border border-white/20 shadow-lg">
<div className="flex justify-between items-end">
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-1">Current Position</p>
<p className="font-bold text-lg">Senior Product Designer</p>
</div>
<div className="w-10 h-10 bg-black text-white rounded-full flex items-center justify-center">
<iconify-icon icon="solar:star-bold-duotone" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gray-50 py-24 px-6 border-y border-gray-100">
<div className="max-w-7xl mx-auto">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-4xl font-bold tracking-tight mb-4">My Expertise</h2>
<p className="text-gray-500 text-lg">Comprehensive design solutions for every stage.</p>
</div>
<button className="hidden md:flex items-center gap-2 font-semibold border-b-2 border-black pb-1 hover:text-gray-600 transition-colors" onclick="showPage('services')">
                            View All Services <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-[#F2F4E6] rounded-2xl flex items-center justify-center mb-6 text-[#7DA008] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:figma-file-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3">UI/UX Design</h3>
<p className="text-gray-500 leading-relaxed">Creating intuitive and engaging user experiences through research-driven design methodologies.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-[#E6F0F4] rounded-2xl flex items-center justify-center mb-6 text-[#087DA0] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:devices-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3">Development</h3>
<p className="text-gray-500 leading-relaxed">Translating designs into pixel-perfect, responsive websites using Webflow and Tailwind.</p>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 hover:shadow-xl transition-all duration-300 group">
<div className="w-14 h-14 bg-[#F4E6F0] rounded-2xl flex items-center justify-center mb-6 text-[#A0087D] group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:palette-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-bold mb-3">Branding</h3>
<p className="text-gray-500 leading-relaxed">Building cohesive brand identities that resonate with audiences and stand the test of time.</p>
</div>
</div>
</div>
</div>

<div className="py-24 px-6">
<div className="max-w-7xl mx-auto">
<h2 className="text-4xl font-bold tracking-tight mb-16">Selected Works</h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="group cursor-pointer">
<div className="aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full text-sm font-semibold">Fintech App</div>
</div>
<h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">Nova Financial</h3>
<p className="text-gray-500">Product Design, Branding</p>
</div>
<div className="group cursor-pointer md:mt-16">
<div className="aspect-[4/3] bg-gray-100 rounded-[2rem] overflow-hidden mb-6 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
<div className="absolute top-6 right-6 bg-white px-4 py-2 rounded-full text-sm font-semibold">E-Commerce</div>
</div>
<h3 className="text-2xl font-bold mb-2 group-hover:text-gray-600 transition-colors">Urban Store</h3>
<p className="text-gray-500">Web Design, Development</p>
</div>
</div>
<div className="mt-16 text-center">
<button className="inline-flex items-center gap-2 px-8 py-4 rounded-full border border-gray-200 text-sm font-bold hover:bg-black hover:text-white transition-all" onclick="showPage('work')">
                            View All Projects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="about">
<div className="max-w-7xl mx-auto px-6 py-20">
<div className="grid lg:grid-cols-12 gap-12">
<div className="lg:col-span-5">
<div className="sticky top-32">
<div className="aspect-[3/4] rounded-[2.5rem] overflow-hidden bg-gray-100 mb-8">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="flex justify-between items-center px-2">
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-black hover:text-white transition-colors" href="#"><iconify-icon icon="solar:plain-linear"></iconify-icon></a> 
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-blue-600 hover:text-white transition-colors hover:border-blue-600" href="#"><iconify-icon icon="solar:link-circle-linear"></iconify-icon></a> 
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-pink-600 hover:text-white transition-colors hover:border-pink-600" href="#"><iconify-icon icon="solar:camera-linear"></iconify-icon></a> 
</div>
<span className="font-bold text-lg">@zaur.design</span>
</div>
</div>
</div>
<div className="lg:col-span-7 lg:pl-10 pt-10">
<h1 className="text-5xl font-bold tracking-tight mb-8">Driven by passion, defined by <span className="text-gray-400">precision.</span></h1>
<p className="text-lg text-gray-500 mb-6 leading-relaxed">
                            I'm a multidisciplinary designer with over 7 years of experience in digital product design. My journey began in graphic design, but I quickly fell in love with the logical yet creative nature of UI/UX.
                        </p>
<p className="text-lg text-gray-500 mb-12 leading-relaxed">
                            I believe that good design is invisible. It should facilitate the user's goals without drawing attention to itself. My approach is rooted in user-centric design thinking, ensuring that every pixel serves a purpose.
                        </p>
<div className="border-t border-gray-100 py-10">
<h3 className="text-xl font-bold mb-8">Experience</h3>
<div className="space-y-8">
<div className="flex justify-between items-start group">
<div>
<h4 className="text-xl font-bold group-hover:text-[#7DA008] transition-colors">Senior Product Designer</h4>
<p className="text-gray-500 mt-1">Stripe Inc.</p>
</div>
<span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">2021 - Present</span>
</div>
<div className="flex justify-between items-start group">
<div>
<h4 className="text-xl font-bold group-hover:text-[#7DA008] transition-colors">UI Designer</h4>
<p className="text-gray-500 mt-1">Linear</p>
</div>
<span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">2019 - 2021</span>
</div>
<div className="flex justify-between items-start group">
<div>
<h4 className="text-xl font-bold group-hover:text-[#7DA008] transition-colors">Freelance Designer</h4>
<p className="text-gray-500 mt-1">Self-Employed</p>
</div>
<span className="text-sm font-medium bg-gray-100 px-3 py-1 rounded-full">2017 - 2019</span>
</div>
</div>
</div>
<div className="bg-[#1F1F1F] text-white p-10 rounded-[2rem] mt-4">
<div className="grid grid-cols-2 gap-8">
<div>
<h4 className="text-4xl font-bold mb-1 text-[#D4F063]">7+</h4>
<p className="text-gray-400 text-sm">Years Experience</p>
</div>
<div>
<h4 className="text-4xl font-bold mb-1 text-[#D4F063]">50+</h4>
<p className="text-gray-400 text-sm">Projects Completed</p>
</div>
<div>
<h4 className="text-4xl font-bold mb-1 text-[#D4F063]">12</h4>
<p className="text-gray-400 text-sm">Design Awards</p>
</div>
<div>
<h4 className="text-4xl font-bold mb-1 text-[#D4F063]">100%</h4>
<p className="text-gray-400 text-sm">Client Satisfaction</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="services">
<div className="bg-gray-50 py-24 px-6 min-h-screen">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-20">
<h1 className="text-5xl font-bold tracking-tight mb-6">Services &amp; Pricing</h1>
<p className="text-lg text-gray-500">Transparent packages tailored to your business needs. No hidden fees, just quality work.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="bg-white p-10 rounded-[2.5rem] flex flex-col h-full border border-gray-200">
<div className="mb-6">
<h3 className="text-2xl font-bold mb-2">Design Audit</h3>
<p className="text-gray-500 text-sm">For existing products</p>
</div>
<div className="text-4xl font-bold mb-8">$2,500<span className="text-lg text-gray-400 font-normal">/fixed</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    UX/UI Heuristic Evaluation
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Accessibility Check
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Performance Report
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Actionable Improvements List
                                </li>
</ul>
<button className="w-full py-4 rounded-xl border border-gray-200 font-bold hover:bg-black hover:text-white transition-colors">Get Started</button>
</div>

<div className="bg-[#1F1F1F] text-white p-10 rounded-[2.5rem] flex flex-col h-full relative transform lg:-translate-y-4 shadow-2xl">
<div className="absolute top-6 right-6 bg-[#D4F063] text-black text-xs font-bold px-3 py-1 rounded-full uppercase">Popular</div>
<div className="mb-6">
<h3 className="text-2xl font-bold mb-2">Product Design</h3>
<p className="text-gray-400 text-sm">For new or scaling products</p>
</div>
<div className="text-4xl font-bold mb-8">$8,000<span className="text-lg text-gray-500 font-normal">/mo</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#D4F063] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Full UI/UX Design Process
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#D4F063] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Design System Creation
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#D4F063] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Interactive Prototyping
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#D4F063] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Developer Handoff
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-300">
<iconify-icon className="text-[#D4F063] mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Unlimited Revisions
                                </li>
</ul>
<button className="w-full py-4 rounded-xl bg-[#D4F063] text-black font-bold hover:bg-white transition-colors">Subscribe Now</button>
</div>

<div className="bg-white p-10 rounded-[2.5rem] flex flex-col h-full border border-gray-200">
<div className="mb-6">
<h3 className="text-2xl font-bold mb-2">Website Build</h3>
<p className="text-gray-500 text-sm">Marketing sites</p>
</div>
<div className="text-4xl font-bold mb-8">$5,000<span className="text-lg text-gray-400 font-normal">/project</span></div>
<ul className="space-y-4 mb-10 flex-grow">
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Figma to Webflow/Tailwind
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    CMS Setup
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    Advanced Animations
                                </li>
<li className="flex items-start gap-3 text-sm text-gray-600">
<iconify-icon className="text-green-500 mt-0.5 text-lg" icon="solar:check-circle-bold"></iconify-icon>
                                    SEO Optimization
                                </li>
</ul>
<button className="w-full py-4 rounded-xl border border-gray-200 font-bold hover:bg-black hover:text-white transition-colors">Inquire</button>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="work">
<div className="max-w-7xl mx-auto px-6 py-20">
<h1 className="text-5xl font-bold tracking-tight mb-6">Recent Projects</h1>
<p className="text-xl text-gray-500 mb-20 max-w-2xl">A selection of projects that define my approach to digital product design.</p>
<div className="space-y-24">

<div className="grid lg:grid-cols-2 gap-12 items-center group">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-bold mb-4 group-hover:text-blue-600 transition-colors">Nova Financial App</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-8">Redesigning the mobile banking experience for a fintech startup focused on Gen Z. The goal was to make finance approachable and fun through gamification.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Fintech</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Mobile App</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">UX Research</span>
</div>
<button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:text-blue-600 hover:border-blue-600 transition-colors">
                                View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-[4/3] bg-blue-50 rounded-[2.5rem] overflow-hidden p-8 hover:p-6 transition-all duration-500">
<img className="w-full h-full object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center group">
<div className="order-1">
<div className="aspect-[4/3] bg-orange-50 rounded-[2.5rem] overflow-hidden p-8 hover:p-6 transition-all duration-500">
<img className="w-full h-full object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
<div className="order-2">
<h2 className="text-3xl font-bold mb-4 group-hover:text-orange-600 transition-colors">Analytix Dashboard</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-8">A comprehensive SaaS analytics dashboard for enterprise users. Focused on data visualization clarity and customizable widget systems.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">SaaS</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Web App</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Design System</span>
</div>
<button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors">
                                View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-12 items-center group">
<div className="order-2 lg:order-1">
<h2 className="text-3xl font-bold mb-4 group-hover:text-purple-600 transition-colors">Vogue Portfolio</h2>
<p className="text-gray-500 text-lg leading-relaxed mb-8">An immersive portfolio website for a high-end fashion photographer. Utilizing WebGL interactions and smooth transitions to showcase imagery.</p>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Portfolio</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Interaction</span>
<span className="px-4 py-1.5 rounded-full border border-gray-200 text-sm font-medium">Webflow</span>
</div>
<button className="flex items-center gap-2 font-bold border-b-2 border-black pb-1 hover:text-purple-600 hover:border-purple-600 transition-colors">
                                View Case Study <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
<div className="order-1 lg:order-2">
<div className="aspect-[4/3] bg-purple-50 rounded-[2.5rem] overflow-hidden p-8 hover:p-6 transition-all duration-500">
<img className="w-full h-full object-cover rounded-2xl shadow-xl" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="blog">
<div className="max-w-7xl mx-auto px-6 py-20">
<h1 className="text-5xl font-bold tracking-tight mb-6">Thoughts &amp; Insights</h1>
<p className="text-xl text-gray-500 mb-20 max-w-2xl">Sharing my knowledge on design, development, and the creative process.</p>

<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="cursor-pointer group" onclick="showPage('blog-post')">
<div className="aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
<span>Oct 12, 2024</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>Design</span>
</div>
<h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">How to create a stunning digital portfolio with NovaPersona</h2>
<p className="text-gray-500 line-clamp-2">Tips and tricks for organizing your work and presenting it in a way that attracts high-quality clients.</p>
</article>

<article className="cursor-pointer group">
<div className="aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
<span>Sep 28, 2024</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>Career</span>
</div>
<h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">The state of Product Design in 2025</h2>
<p className="text-gray-500 line-clamp-2">Analyzing trends, tools, and the shifting role of AI in the everyday life of a product designer.</p>
</article>

<article className="cursor-pointer group">
<div className="aspect-[16/10] bg-gray-100 rounded-[2rem] overflow-hidden mb-6">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="flex items-center gap-3 mb-3 text-xs font-semibold uppercase tracking-wide text-gray-400">
<span>Sep 15, 2024</span>
<span className="w-1 h-1 bg-gray-300 rounded-full"></span>
<span>Development</span>
</div>
<h2 className="text-2xl font-bold mb-3 group-hover:text-blue-600 transition-colors">Tailwind CSS vs Vanilla CSS: A honest comparison</h2>
<p className="text-gray-500 line-clamp-2">Why I switched to utility-first CSS and how it improved my development speed by 200%.</p>
</article>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="blog-post">
<div className="max-w-4xl mx-auto px-6 py-20">
<button className="flex items-center gap-2 text-sm font-semibold text-gray-500 hover:text-black mb-8 transition-colors" onclick="showPage('blog')">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon> Back to Blog
                </button>
<h1 className="text-4xl md:text-5xl font-bold leading-tight mb-8">How to create a stunning digital portfolio with NovaPersona</h1>
<div className="flex items-center justify-between border-y border-gray-100 py-6 mb-12">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div>
<p className="font-bold text-sm">Zaur Arshiev</p>
<p className="text-xs text-gray-500">Oct 12, 2024 · 5 min read</p>
</div>
</div>
<div className="flex gap-2">
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><iconify-icon icon="solar:share-linear"></iconify-icon></button>
<button className="w-8 h-8 flex items-center justify-center rounded-full hover:bg-gray-100"><iconify-icon icon="solar:bookmark-linear"></iconify-icon></button>
</div>
</div>
<div className="aspect-[16/9] rounded-[2rem] overflow-hidden mb-12">
<img className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="prose prose-lg prose-neutral max-w-none">
<p className="lead text-xl text-gray-600 mb-8">
                        In today's competitive digital landscape, a portfolio is more than just a collection of work—it's your personal brand's digital handshake. Here is how to make it count.
                    </p>
<h2 className="text-2xl font-bold mt-10 mb-4">1. Curate Ruthlessly</h2>
<p className="text-gray-500 mb-6">
                        Quality over quantity is the golden rule. It is better to show 3 stellar projects that demonstrate your full range of skills than 10 mediocre ones. Select works that tell a story about who you are as a designer.
                    </p>
<h2 className="text-2xl font-bold mt-10 mb-4">2. The Case Study Format</h2>
<p className="text-gray-500 mb-6">
                        Don't just post screenshots. Explain the problem, your role, the process, and the solution. Use the "STAR" method: Situation, Task, Action, Result. Potential clients want to see how you think, not just what you can make using Figma.
                    </p>
<blockquote className="border-l-4 border-[#D4F063] pl-6 italic text-xl text-gray-800 my-10 font-medium">
                        "Design is not just what it looks like and feels like. Design is how it works." — Steve Jobs
                    </blockquote>
<h2 className="text-2xl font-bold mt-10 mb-4">3. Inject Personality</h2>
<p className="text-gray-500 mb-6">
                        Your portfolio should reflect you. Use typography, color (like our signature #D4F063), and copy to convey your unique voice. Don't be afraid to be a little bold.
                    </p>
</div>
</div>
</section>

<section className="page-section hidden fade-in" id="contact">
<div className="max-w-7xl mx-auto px-6 py-20 min-h-[80vh] flex items-center">
<div className="grid lg:grid-cols-2 gap-16 w-full">
<div>
<h1 className="text-5xl lg:text-6xl font-bold tracking-tight mb-8">Let's build something <br/><span className="text-gray-300">great together.</span></h1>
<p className="text-xl text-gray-500 mb-12">
                            Have a project in mind? I'm always open to discussing new opportunities, whether it's a full-time role or freelance project.
                        </p>
<div className="space-y-8">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500">Email Me</p>
<p className="text-lg font-bold">hello@novapersona.com</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gray-50 rounded-full flex items-center justify-center text-xl">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-sm text-gray-500">Location</p>
<p className="text-lg font-bold">San Francisco, CA</p>
</div>
</div>
</div>
<div className="mt-16">
<p className="font-bold mb-4">Follow Me</p>
<div className="flex gap-4">
<a className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl hover:scale-110 transition-transform" href="#"><iconify-icon icon="solar:basketball-linear"></iconify-icon></a>
<a className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl hover:scale-110 transition-transform" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
<a className="w-12 h-12 rounded-full bg-black text-white flex items-center justify-center text-xl hover:scale-110 transition-transform" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
</div>
</div>
</div>
<div className="bg-gray-50 p-10 rounded-[2.5rem] border border-gray-100">
<form className="space-y-6">
<div className="grid grid-cols-2 gap-6">
<div>
<label className="block text-sm font-semibold mb-2">Name</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Email</label>
<input className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white" placeholder="john@example.com" type="email"/>
</div>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Subject</label>
<select className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white appearance-none">
<option>Project Inquiry</option>
<option>Job Opportunity</option>
<option>Other</option>
</select>
</div>
<div>
<label className="block text-sm font-semibold mb-2">Message</label>
<textarea className="w-full px-4 py-3 rounded-xl border border-gray-200 focus:outline-none focus:ring-2 focus:ring-black bg-white resize-none" placeholder="Tell me about your project..." rows="4"></textarea>
</div>
<button className="w-full py-4 bg-black text-white rounded-xl font-bold hover:bg-gray-800 transition-colors flex items-center justify-center gap-2" type="button">
                                Send Message <iconify-icon icon="solar:plain-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-gray-100 py-12 px-6 mt-auto">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-black rounded-full flex items-center justify-center text-white text-sm">
<span className="font-bold">N</span>
</div>
<span className="font-bold tracking-tight">NovaPersona</span>
</div>
<div className="text-sm text-gray-500">
                © 2024 NovaPersona Template. All rights reserved.
            </div>
<div className="flex gap-6 text-sm font-medium text-gray-600">
<a className="hover:text-black" href="#">Style Guide</a>
<a className="hover:text-black" href="#">Licensing</a>
<a className="hover:text-black" href="#">Changelog</a>
</div>
</div>
</footer>



    </>
  );
}
