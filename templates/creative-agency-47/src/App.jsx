import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
300: '#D1D5DB',
400: '#9CA3AF',
500: '#6B7280',
600: '#4B5563',
700: '#374151',
800: '#1F2937',
900: '#111827',
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple function to handle page switching
        function switchPage(pageId) {
            // Hide all sections
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('fade-in'); // Reset animation
            });

            // Show selected section
            const target = document.getElementById(pageId);
            target.classList.remove('hidden');
            
            // Trigger reflow to restart animation
            void target.offsetWidth; 
            target.classList.add('fade-in');

            // Update nav active states
            document.querySelectorAll('.nav-link').forEach(link => {
                if (link.dataset.target === pageId) {
                    link.classList.add('text-gray-900');
                    link.classList.remove('text-gray-500');
                } else {
                    link.classList.remove('text-gray-900');
                    link.classList.add('text-gray-500');
                }
            });

            // Scroll to top
            window.scrollTo(0,0);
        }

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        function toggleMobileMenu() {
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }

        btn.addEventListener('click', toggleMobileMenu);

        // Init default page
        switchPage('home');
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="text-lg font-semibold tracking-tighter text-gray-900 flex items-center gap-2 group" href="#" onclick="switchPage('home')">
<div className="w-6 h-6 bg-gray-900 text-white rounded flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
<span className="text-xs font-bold">L</span>
</div>
                LUMINA
            </a>

<nav className="hidden md:flex items-center gap-8">
<button className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" data-target="home" onclick="switchPage('home')">Home</button>
<button className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" data-target="about" onclick="switchPage('about')">About</button>
<button className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" data-target="services" onclick="switchPage('services')">Services</button>
<button className="nav-link text-sm font-medium text-gray-500 hover:text-gray-900 transition-colors" data-target="contact" onclick="switchPage('contact')">Contact</button>
</nav>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 bg-gray-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-gray-700 hover:shadow-lg transition-all active:scale-95 duration-200" onclick="switchPage('contact')">
                    Get Started
                    <iconify-icon height="16" icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<button className="md:hidden text-gray-900 focus:outline-none p-1" id="mobile-menu-btn">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-100 p-6 flex-col gap-4 shadow-xl" id="mobile-menu">
<button className="text-left text-sm font-medium text-gray-600 hover:text-gray-900" onclick="switchPage('home'); toggleMobileMenu()">Home</button>
<button className="text-left text-sm font-medium text-gray-600 hover:text-gray-900" onclick="switchPage('about'); toggleMobileMenu()">About</button>
<button className="text-left text-sm font-medium text-gray-600 hover:text-gray-900" onclick="switchPage('services'); toggleMobileMenu()">Services</button>
<button className="text-left text-sm font-medium text-gray-600 hover:text-gray-900" onclick="switchPage('contact'); toggleMobileMenu()">Contact</button>
</div>
</header>

<main className="flex-grow pt-24 pb-12 px-6">

<section className="page-section max-w-7xl mx-auto min-h-[80vh] flex flex-col justify-center items-center text-center fade-in" id="home">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8 animate-pulse">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                Accepting new clients for Q4
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-medium tracking-tight text-gray-900 mb-8 max-w-4xl mx-auto leading-[1.1]">
                Crafting digital <br className="hidden md:block"/> narratives that resonate.
            </h1>
<p className="text-lg md:text-xl text-gray-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                We are a creative marketing agency focused on clarity, aesthetics, and measurable impact. We help brands find their voice in a noisy world.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full sm:w-auto">
<button className="w-full sm:w-auto bg-gray-900 text-white px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-800 hover:-translate-y-1 transition-all duration-300 shadow-xl shadow-gray-200 flex items-center justify-center gap-2 group" onclick="switchPage('services')">
                    View Services
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-up-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto bg-white text-gray-900 border border-gray-200 px-8 py-3.5 rounded-full text-sm font-medium hover:bg-gray-50 hover:border-gray-300 transition-all duration-300 flex items-center justify-center gap-2" onclick="switchPage('about')">
                    Our Philosophy
                </button>
</div>

<div className="mt-20 flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale hover:grayscale-0 transition-all duration-500">
<iconify-icon icon="solar:chart-2-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:pie-chart-2-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:presentation-graph-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:users-group-rounded-linear" width="32"></iconify-icon>
<iconify-icon icon="solar:global-linear" width="32"></iconify-icon>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto fade-in" id="about">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center min-h-[60vh]">
<div className="relative group">
<div className="absolute inset-0 bg-gray-900 rounded-2xl rotate-3 opacity-5 group-hover:rotate-2 transition-transform duration-500"></div>
<img alt="Team meeting" className="relative rounded-2xl shadow-sm border border-gray-100 w-full object-cover h-[500px] grayscale hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=1632&amp;q=80"/>
</div>
<div className="flex flex-col justify-center">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-6">Thinking beyond the pixel.</h2>
<p className="text-gray-500 mb-6 leading-relaxed">
                        Founded in 2024, Lumina was born from a simple idea: marketing shouldn't be complicated. We strip away the jargon and focus on what matters—connecting your product with the people who need it.
                    </p>
<p className="text-gray-500 mb-8 leading-relaxed">
                        Our team is a diverse collective of strategists, designers, and writers who believe that good design is good business. We work with data-driven insights but lead with intuition and creativity.
                    </p>
<div className="grid grid-cols-2 gap-6 pt-6 border-t border-gray-100">
<div>
<span className="block text-3xl font-medium text-gray-900 tracking-tight">50+</span>
<span className="text-sm text-gray-400">Projects Delivered</span>
</div>
<div>
<span className="block text-3xl font-medium text-gray-900 tracking-tight">400%</span>
<span className="text-sm text-gray-400">Avg ROI</span>
</div>
</div>
</div>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto fade-in" id="services">
<div className="mb-12 md:mb-20 text-center max-w-2xl mx-auto">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-gray-900 mb-4">Our Expertise</h2>
<p className="text-gray-500">Comprehensive marketing solutions tailored to scale your digital presence.</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<article className="group relative bg-gray-50 rounded-xl p-8 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300">
<div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pen-new-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Strategy</span>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Brand Identity Design</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        We build cohesive visual systems that tell your story across every touchpoint, from logo design to comprehensive brand guidelines.
                    </p>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</article>

<article className="group relative bg-gray-50 rounded-xl p-8 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 delay-100">
<div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Growth</span>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">SEO &amp; Content Marketing</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Driving organic traffic through data-backed content strategies and technical optimization to ensure you rank where it matters.
                    </p>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</article>

<article className="group relative bg-gray-50 rounded-xl p-8 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 delay-200">
<div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-camera-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Social</span>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Social Media Management</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Curating your feed with high-quality visuals and engaging copy to build a loyal community around your brand.
                    </p>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</article>

<article className="group relative bg-gray-50 rounded-xl p-8 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300">
<div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Outreach</span>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Email Marketing Campaigns</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Designing high-conversion newsletters and automated flows that nurture leads and retain customers.
                    </p>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</article>

<article className="group relative bg-gray-50 rounded-xl p-8 border border-transparent hover:bg-white hover:border-gray-200 hover:shadow-xl hover:shadow-gray-100 transition-all duration-300 delay-100">
<div className="w-10 h-10 bg-white border border-gray-100 rounded-lg flex items-center justify-center mb-6 text-gray-900 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:chart-square-linear" width="20"></iconify-icon>
</div>
<span className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 block">Analytics</span>
<h3 className="text-xl font-medium text-gray-900 mb-3 tracking-tight">Performance Analytics</h3>
<p className="text-sm text-gray-500 leading-relaxed mb-4">
                        Deep dive reporting into your marketing channels to understand user behavior and optimize ad spend efficiency.
                    </p>
<a className="text-xs font-medium text-gray-900 flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</article>
</div>
</section>

<section className="page-section hidden max-w-7xl mx-auto fade-in" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-gray-900 mb-4">Start a Project</h2>
<p className="text-gray-500">Tell us about your goals. We'll get back to you within 24 hours.</p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault(); alert('Thank you for your message!');">
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 ml-1" htmlFor="name">Name</label>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all placeholder:text-gray-400" id="name" placeholder="Jane Doe" type="text"/>
<iconify-icon className="absolute right-4 top-3.5 text-gray-400" icon="solar:user-circle-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 ml-1" htmlFor="email">Email</label>
<div className="relative">
<input className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all placeholder:text-gray-400" id="email" placeholder="jane@company.com" type="email"/>
<iconify-icon className="absolute right-4 top-3.5 text-gray-400" icon="solar:letter-linear" width="18"></iconify-icon>
</div>
</div>
<div className="space-y-1">
<label className="text-xs font-semibold text-gray-700 ml-1" htmlFor="message">Message</label>
<textarea className="w-full bg-gray-50 border border-gray-200 rounded-lg px-4 py-3 text-sm focus:ring-1 focus:ring-gray-900 focus:border-gray-900 outline-none transition-all placeholder:text-gray-400 resize-none" id="message" placeholder="Tell us about your project..." rows="4"></textarea>
</div>
<button className="w-full bg-gray-900 text-white font-medium py-3.5 rounded-lg hover:bg-gray-800 transition-all active:scale-[0.99] shadow-lg shadow-gray-200/50 flex items-center justify-center gap-2" type="submit">
                        Send Message
                        <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
<div className="mt-12 flex justify-center gap-8 border-t border-gray-100 pt-8">
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        +1 (555) 000-0000
                    </div>
<div className="flex items-center gap-2 text-sm text-gray-500">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
                        New York, NY
                    </div>
</div>
</div>
</section>
</main>

<footer className="border-t border-gray-100 py-8 bg-white">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-400">© 2024 Lumina Creative. All rights reserved.</p>
<div className="flex gap-6">
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="solar:brand-instagram-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="solar:brand-twitter-linear" width="20"></iconify-icon></a>
<a className="text-gray-400 hover:text-gray-900 transition-colors" href="#"><iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon></a>
</div>
</div>
</footer>



    </>
  );
}
