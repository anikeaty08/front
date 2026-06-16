import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
heading: ['Oswald', 'sans-serif'],
body: ['Inter', 'sans-serif'],
},
colors: {
primary: '#d92026',
dark: '#000000',
surface: '#0a0a0a',
surface2: '#111111',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 bg-dark/95 backdrop-blur-md border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center">
<a href="#">
<img alt="JC Gutters Logo" className="h-12 w-auto object-contain" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/01/jc.png"/>
</a>
</div>

<div className="hidden md:flex items-center space-x-8">
<div className="flex space-x-6 font-heading text-sm tracking-wide text-gray-300">
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#">Home</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#about">About</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#services">Gutters</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#services">Roofing</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#services">Siding</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#faq">FAQ</a>
<a className="hover:text-primary transition-colors duration-200 font-sans" href="#contact">Contact</a>
</div>
<div className="flex items-center space-x-4 border-l border-white/10 pl-6">
<div className="flex space-x-3 text-gray-400">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:facebook-linear" strokeWidth="1.5"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" height="20" icon="solar:phone-outline" strokeWidth="1.5" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"></a>
</div>
<a className="bg-primary hover:bg-[#b81b20] text-white font-heading tracking-wide text-sm px-6 py-2.5 rounded transition-all duration-200 uppercase font-sans" href="#contact">
                            Get Free Estimate
                        </a>
</div>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-300 hover:text-white focus:outline-none" type="button">
<iconify-icon className="text-3xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<section className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="House Exterior" className="w-full h-full object-cover object-center scale-105 transform" src="https://jcguttersandconstruction.com/wp-content/uploads/2023/12/6876-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-dark/90 via-dark/70 to-dark/40"></div>
<div className="absolute inset-0 bg-gradient-to-t from-dark via-transparent to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full flex flex-col items-start mt-12">
<div className="max-w-3xl reveal active">
<h1 className="sm:text-6xl lg:text-7xl leading-[1.1] text-5xl font-semibold text-white tracking-tight font-bricolage mb-6">
    New Jersey's Premier <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-[#ff4d52] font-bricolage font-semibold">Exterior Construction</span>
    Experts
</h1>
<p className="text-lg sm:text-xl text-gray-300 mb-10 max-w-2xl leading-relaxed font-bricolage font-semibold">
                    Gutters. Roofing. Siding. Precision-built to protect and elevate your property.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mb-16">
<a className="bg-primary hover:bg-[#b81b20] text-white font-heading tracking-wide text-base px-8 py-4 rounded text-center transition-all duration-200 flex items-center justify-center gap-2 group font-sans" href="#contact">
                        Get a Free Estimate
                        <iconify-icon className="text-xl group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="border border-white/30 hover:border-white hover:bg-white hover:text-dark text-white font-heading tracking-wide text-base px-8 py-4 rounded text-center transition-all duration-200 font-sans" href="#work">
                        View Our Work
                    </a>
</div>

<div className="flex flex-wrap items-center gap-x-8 gap-y-4 pt-8 border-t border-white/10">
<div className="flex items-center gap-2">
<iconify-icon className="text-primary text-xl" icon="solar:calendar-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-gray-200 uppercase font-heading font-sans">Established 2015</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary text-xl" icon="solar:shield-check-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-gray-200 uppercase font-heading font-sans">Fully Insured</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-primary text-xl" icon="solar:calculator-linear"></iconify-icon>
<span className="text-sm font-medium tracking-wide text-gray-200 uppercase font-heading font-sans">Free Estimates</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-16 reveal">
<h2 className="text-4xl sm:text-5xl tracking-tight text-white font-bricolage font-semibold">What We Do</h2>
<div className="h-1 w-16 bg-primary mt-4 rounded-full"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group bg-surface2 rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 reveal flex flex-col h-full">
<div className="relative h-64 overflow-hidden">
<img alt="Gutters" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://jcguttersandconstruction.com/wp-content/uploads/2023/12/gutters.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface2 to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">Gutters</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-sans">
                            European, Radius, Copper, K-Style and Box Gutter systems installed with precision across New Jersey.
                        </p>
<a className="inline-flex items-center gap-2 text-primary hover:text-white font-heading tracking-wide text-sm transition-colors uppercase font-sans" href="#contact">
                            Learn More <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface2 rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 reveal flex flex-col h-full delay-[100ms]">
<div className="relative h-64 overflow-hidden">
<img alt="Roofing" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://jcguttersandconstruction.com/wp-content/uploads/2023/12/roof-showing-gutters-aluminum-soffit-back-wooden-house-1.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface2 to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">Roofing</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-sans">
                            Metal, Asphalt, and Cedar Wood roofing built to withstand every season and enhance your property's value.
                        </p>
<a className="inline-flex items-center gap-2 text-primary hover:text-white font-heading tracking-wide text-sm transition-colors uppercase font-sans" href="#contact">
                            Learn More <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="group bg-surface2 rounded-lg overflow-hidden border border-white/5 hover:border-primary/50 transition-all duration-300 reveal flex flex-col h-full delay-[200ms]">
<div className="relative h-64 overflow-hidden">
<img alt="Siding" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://jcguttersandconstruction.com/wp-content/uploads/2023/12/2736.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-surface2 to-transparent"></div>
</div>
<div className="p-8 flex flex-col flex-grow relative z-10 -mt-12">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">Siding</h3>
<p className="text-gray-400 text-sm leading-relaxed mb-6 flex-grow font-sans">
                            Hardie Board Plank, Cedar Impression, and Vinyl siding solutions crafted for durability and curb appeal.
                        </p>
<a className="inline-flex items-center gap-2 text-primary hover:text-white font-heading tracking-wide text-sm transition-colors uppercase font-sans" href="#contact">
                            Learn More <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark relative border-t border-white/5" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative reveal">
<div className="absolute inset-0 bg-primary/20 translate-x-4 translate-y-4 rounded-lg"></div>
<img alt="Construction Work" className="relative z-10 w-full h-[500px] object-cover rounded-lg shadow-2xl grayscale-[20%]" src="https://jcguttersandconstruction.com/wp-content/uploads/2023/12/14382-1.jpg"/>
</div>

<div className="reveal delay-[100ms]">
<span className="text-primary font-heading text-sm tracking-widest uppercase font-semibold mb-4 block font-sans">About Us</span>
<h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-6 leading-tight font-bricolage font-semibold">We Do the Work. <br/>We Produce Results.</h2>
<p className="text-gray-400 text-base leading-relaxed mb-8 font-sans">
                        Welcome to JC Gutters and Construction, your trusted partner in comprehensive exterior construction solutions. Established in 2015, we have become a cornerstone in the industry, bringing expertise, craftsmanship, and a commitment to excellence to every project. Serving Monmouth County, Ocean County, and beyond.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<iconify-icon className="text-primary text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-300 text-sm font-sans">Expert team with decades of combined experience</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-300 text-sm font-sans">Customer-centric approach with transparent communication</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-300 text-sm font-sans">Comprehensive solutions tailored to every property</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-primary text-xl flex-shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
<span className="text-gray-300 text-sm font-sans">Fully licensed and insured</span>
</li>
</ul>
<a className="inline-block bg-primary hover:bg-[#b81b20] text-white font-heading tracking-wide text-sm px-8 py-3.5 rounded transition-all duration-200 uppercase font-sans" href="#contact">
                        Learn More About Us
                    </a>
</div>
</div>
</div>
</section>

<section className="relative py-20 bg-surface2 overflow-hidden border-y border-white/5">
<div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-primary/20 via-surface2 to-surface2 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10 max-w-4xl mx-auto px-4 text-center reveal">
<h2 className="text-4xl sm:text-5xl tracking-tight text-white mb-4 font-bricolage font-semibold">Ready to Protect Your Home?</h2>
<p className="text-gray-400 text-lg mb-10 font-sans">Serving all of New Jersey. Get your free, no-obligation estimate today.</p>
<a className="inline-flex items-center justify-center gap-3 bg-primary hover:bg-[#b81b20] text-white font-heading tracking-wide text-lg px-10 py-4 rounded transition-all duration-200 uppercase shadow-[0_0_30px_rgba(217,32,38,0.3)] font-sans" href="tel:732-768-5985">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
                Call Us: 732-768-5985
            </a>
</div>
</section>

<section className="pt-24 pb-24 relative" id="work">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex justify-between items-end mb-16 reveal">
<div className="">
<h2 className="text-4xl sm:text-5xl tracking-tight text-white font-bricolage font-semibold">Our Work</h2>
<div className="h-1 w-16 bg-primary mt-4 rounded-full"></div>
</div>
<div className="hidden md:block">
<a className="text-gray-400 hover:text-white font-heading text-sm tracking-wide uppercase transition-colors flex items-center gap-2 font-sans" href="#">
                    View All Projects <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-6">

<a className="group relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-lg block reveal" href="#">
<img alt="Copper Works" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/01/IMG_2839.jpg"/>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/70 transition-colors duration-500"></div>
<div className="flex flex-col group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 translate-y-4 items-start justify-end">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">COPPER WORKS</h3>
<span className="bg-primary text-white font-heading text-xs tracking-widest px-6 py-2.5 rounded uppercase font-sans">VIEW GALLERY</span>
</div>
</a>

<a className="group relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-lg block reveal delay-[100ms]" href="#">
<img alt="European Box Gutters" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/01/IMG_2839_1.jpg"/>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/70 transition-colors duration-500"></div>
<div className="flex flex-col group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 translate-y-4 items-start justify-end">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">EUROPEAN BOX GUTTERS
                    </h3>
<span className="bg-primary text-white font-heading text-xs tracking-widest px-6 py-2.5 rounded uppercase font-sans">VIEW GALLERY</span>
</div>
</a>

<a className="group relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-lg block reveal" href="#">
<img alt="Lead Coated Copper Works" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/01/led.jpg"/>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/70 transition-colors duration-500"></div>
<div className="flex flex-col group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 translate-y-4 items-start justify-end">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">ELEAD COATED COPPER
                        WORKS</h3>
<span className="bg-primary text-white font-heading text-xs tracking-widest px-6 py-2.5 rounded uppercase font-sans">VIEW GALLERY</span>
</div>
</a>

<a className="group relative aspect-[4/3] sm:aspect-square md:aspect-[4/3] overflow-hidden rounded-lg block reveal delay-[100ms]" href="#">
<img alt="Metal Works" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/02/IMG_7240.jpg"/>
<div className="absolute inset-0 bg-dark/20 group-hover:bg-dark/70 transition-colors duration-500"></div>
<div className="flex flex-col group-hover:opacity-100 transition-all duration-500 group-hover:translate-y-0 bg-gradient-to-t from-dark/90 via-dark/40 to-transparent opacity-0 pt-6 pr-6 pb-6 pl-6 absolute top-0 right-0 bottom-0 left-0 translate-y-4 items-start justify-end">
<h3 className="text-2xl tracking-tight text-white mb-3 font-bricolage font-semibold">EMETAL WORKS</h3>
<span className="bg-primary text-white font-heading text-xs tracking-widest px-6 py-2.5 rounded uppercase font-sans">VIEW GALLERY</span>
</div>
</a>
</div>
<div className="mt-8 text-center md:hidden reveal">
<a className="inline-block border border-white/30 hover:border-white text-white font-heading tracking-wide text-sm px-8 py-3 rounded transition-all duration-200 uppercase font-sans" href="#">
                View All Projects
            </a>
</div>
</div>
</section>

<section className="py-24 bg-surface border-t border-white/5" id="faq">
<div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16 reveal">
<h2 className="text-4xl sm:text-5xl tracking-tight text-white inline-block relative font-bricolage font-semibold">
                    Frequently Asked Questions
                    <div className="h-1 w-16 bg-primary absolute -bottom-4 left-1/2 -translate-x-1/2 rounded-full"></div>
</h2>
</div>
<div className="space-y-4 reveal delay-[100ms]">

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">How do I request a quote?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        Simply call us at <a className="text-white hover:text-primary transition-colors font-sans" href="tel:732-768-5985">732-768-5985</a> or email <a className="text-white hover:text-primary transition-colors font-sans" href="mailto:jcguttersconstr@icloud.com">jcguttersconstr@icloud.com</a>. Our team will discuss your project and provide a comprehensive, no-obligation quote.
                    </div>
</details>

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">Do you offer maintenance and repair services after installation?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        Yes. Our commitment doesn't end at installation. We offer full maintenance and repair services for roofing, gutters, and siding to preserve your property long-term.
                    </div>
</details>

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">What is the typical project timeline?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        Timelines vary by scope and complexity. We provide clear timelines during consultation and work efficiently to meet every agreed-upon deadline.
                    </div>
</details>

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">Do you provide warranties?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        Yes. We stand behind our workmanship and offer warranties on our services. Details are provided during the project consultation.
                    </div>
</details>

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">Can you assist with insurance claims for storm damage?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        Absolutely. Our experienced team can help assess damage, document it thoroughly, and assist you through the insurance claims process.
                    </div>
</details>

<details className="group rounded-lg bg-surface2 border border-white/5 overflow-hidden open:border-white/10 transition-colors">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6 text-white hover:text-primary transition-colors">
<span className="text-base sm:text-lg pr-4 font-sans">Can I schedule a project in any season?</span>
<span className="transition group-open:rotate-180">
<iconify-icon className="faq-icon text-2xl text-gray-500 transition-transform duration-300" icon="solar:add-circle-linear"></iconify-icon>
</span>
</summary>
<div className="text-gray-400 text-sm leading-relaxed px-6 pb-6 border-t border-white/5 pt-4 font-sans">
                        We work year-round. If weather conditions affect scheduling, we communicate proactively and adjust timelines to ensure safety and quality.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-dark relative flex flex-col lg:flex-row border-t border-white/5" id="contact">

<div className="w-full lg:w-1/2 py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-primary/10 via-dark to-dark"></div>
<div className="max-w-xl w-full relative z-10 reveal">
<span className="text-primary font-heading text-sm tracking-widest uppercase font-semibold mb-4 block font-sans">Get Started</span>
<h2 className="text-4xl sm:text-5xl lg:text-6xl tracking-tight text-white mb-6 leading-[1.1] font-bricolage font-semibold">Let's Talk About <br/>Your Project</h2>
<p className="text-gray-400 text-lg mb-12 font-light font-sans">
                    Get a free estimate from New Jersey's most trusted exterior construction team. Fully insured. No obligation.
                </p>
<div className="space-y-6">
<a className="flex items-center gap-4 group" href="tel:732-768-5985">
<div className="w-12 h-12 rounded-full bg-surface2 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:phone-calling-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5 font-sans">Call Us Direct</p>
<p className="text-white font-medium text-lg tracking-wide group-hover:text-primary transition-colors duration-300 font-sans">732-768-5985</p>
</div>
</a>
<a className="flex items-center gap-4 group" href="mailto:jcguttersconstr@icloud.com">
<div className="w-12 h-12 rounded-full bg-surface2 border border-white/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-2xl" icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5 font-sans">Email Us</p>
<p className="text-white font-medium text-lg tracking-wide group-hover:text-primary transition-colors duration-300 font-sans">jcguttersconstr@icloud.com</p>
</div>
</a>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-surface2 border border-white/10 flex items-center justify-center text-primary">
<iconify-icon className="text-2xl" icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<p className="text-xs text-gray-500 uppercase tracking-wider mb-0.5 font-sans">Service Area</p>
<p className="text-white font-medium text-lg tracking-wide font-sans">Serving all New Jersey</p>
</div>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 bg-[#a8181d] py-20 lg:py-32 px-4 sm:px-8 lg:px-16 xl:px-24 flex items-center justify-center relative">
<div className="max-w-xl w-full reveal delay-[100ms]">
<form action="#" className="space-y-5" method="POST">
<div>
<label className="sr-only font-sans" htmlFor="name">Full Name</label>
<input className="w-full bg-black/20 border border-transparent focus:border-white focus:bg-black/30 text-white placeholder-white/60 rounded px-5 py-4 text-base transition-all duration-200 outline-none ring-0" id="name" name="name" placeholder="Full Name" required="" type="text"/>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="sr-only font-sans" htmlFor="phone">Phone Number</label>
<input className="w-full bg-black/20 border border-transparent focus:border-white focus:bg-black/30 text-white placeholder-white/60 rounded px-5 py-4 text-base transition-all duration-200 outline-none ring-0" id="phone" name="phone" placeholder="Phone Number" required="" type="tel"/>
</div>
<div>
<label className="sr-only font-sans" htmlFor="email">Email Address</label>
<input className="w-full bg-black/20 border border-transparent focus:border-white focus:bg-black/30 text-white placeholder-white/60 rounded px-5 py-4 text-base transition-all duration-200 outline-none ring-0" id="email" name="email" placeholder="Email Address" required="" type="email"/>
</div>
</div>
<div className="relative">
<label className="sr-only font-sans" htmlFor="service">Service Needed</label>
<select className="w-full bg-black/20 border border-transparent focus:border-white focus:bg-black/30 text-white placeholder-white/60 rounded px-5 py-4 text-base transition-all duration-200 outline-none ring-0 cursor-pointer" id="service" name="service" required="">
<option className="text-dark bg-white font-sans" disabled="" selected="" value="">Select Service Needed</option>
<option className="text-dark bg-white font-sans" value="gutters">Gutters</option>
<option className="text-dark bg-white font-sans" value="roofing">Roofing</option>
<option className="text-dark bg-white font-sans" value="siding">Siding</option>
<option className="text-dark bg-white font-sans" value="other">Other</option>
</select>
</div>
<div>
<label className="sr-only font-sans" htmlFor="message">Message / Project Details</label>
<textarea className="w-full bg-black/20 border border-transparent focus:border-white focus:bg-black/30 text-white placeholder-white/60 rounded px-5 py-4 text-base transition-all duration-200 outline-none ring-0 resize-none" id="message" name="message" placeholder="Message / Project Details" required="" rows="4"></textarea>
</div>
<button className="w-full bg-white text-[#a8181d] hover:bg-gray-100 font-heading font-medium tracking-wide text-lg px-8 py-4 rounded transition-colors duration-200 uppercase mt-2 shadow-lg flex justify-center items-center gap-2 group font-sans" type="submit">
                        Send My Request
                        <iconify-icon className="text-xl group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform" icon="solar:plain-3-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<footer className="bg-surface pt-20 pb-8 border-t border-white/10">
<div className="sm:px-6 lg:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-2">
<a className="inline-block mb-6" href="#">
<img alt="JC Gutters Logo" className="h-14 w-auto object-contain grayscale brightness-200" src="https://jcguttersandconstruction.com/wp-content/uploads/2024/01/jc-1.png"/>
</a>
<p className="text-gray-400 text-sm mb-6 font-heading tracking-widest uppercase font-sans">Precision. Durability. Aesthetics.</p>
<div className="flex space-x-4 mb-8">
<a className="flex items-center justify-center hover:bg-primary hover:text-white hover:border-primary transition-all duration-300 text-gray-400 w-10 h-10 border-white/5 border rounded-full" href="#">
<iconify-icon className="text-xl" icon="solar:facebook-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-surface2 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-surface2 border border-white/5 flex items-center justify-center text-gray-400 hover:bg-primary hover:text-white hover:border-primary transition-all duration-300" href="#">
<iconify-icon className="text-xl" icon="solar:video-frame-linear"></iconify-icon>
</a>
</div>
<div className="inline-flex items-center gap-4 border border-white/10 px-4 py-2 rounded bg-surface2">
<span className="text-xs font-heading tracking-widest text-white uppercase flex items-center gap-1.5 font-sans">
<iconify-icon className="text-primary" icon="solar:shield-check-linear"></iconify-icon> Fully Insured
                        </span>
<span className="w-px h-3 bg-white/20 block"></span>
<span className="text-xs font-heading tracking-widest text-white uppercase flex items-center gap-1.5 font-sans">
<iconify-icon className="text-primary" icon="solar:calculator-linear"></iconify-icon> Free Estimate
                        </span>
</div>
</div>

<div>
<h4 className="font-heading text-lg font-semibold tracking-wide text-white mb-6 font-sans">Quick Links</h4>
<ul className="space-y-3">
<li><a className="text-gray-400 hover:text-primary text-sm transition-colors font-sans" href="#">Home</a></li>
<li><a className="text-gray-400 hover:text-primary text-sm transition-colors font-sans" href="#about">About</a></li>
<li><a className="text-gray-400 hover:text-primary text-sm transition-colors font-sans" href="#services">Gutters</a></li>
<li><a className="text-gray-400 hover:text-primary text-sm transition-colors font-sans" href="#services">Roofing</a></li>
</ul>
</div>

<div>
<h4 className="font-heading text-lg font-semibold tracking-wide text-white mb-6 font-sans">Contact Us</h4>
<ul className="space-y-4">
<li className="text-gray-400 text-sm font-sans">
<strong className="text-white font-medium block mb-1 font-sans">JC GUTTERS AND CONSTRUCTION</strong>
                            Serving all New Jersey
                        </li>
<li>
<a className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 font-sans" href="tel:732-768-5985">
<iconify-icon className="text-base" icon="solar:phone-linear"></iconify-icon> 732-768-5985
                            </a>
</li>
<li>
<a className="text-gray-400 hover:text-primary text-sm transition-colors flex items-center gap-2 break-all font-sans" href="mailto:jcguttersconstr@icloud.com">
<iconify-icon className="text-base flex-shrink-0" icon="solar:letter-linear"></iconify-icon> jcguttersconstr@icloud.com
                            </a>
</li>
</ul>
<div className="mt-6 flex gap-4">
<a className="text-gray-500 hover:text-white text-xs underline underline-offset-4 font-sans" href="#">Privacy Policy</a>
<a className="text-gray-500 hover:text-white text-xs underline underline-offset-4 font-sans" href="#faq">FAQs</a>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-8 text-center">
<p className="text-gray-500 text-xs tracking-wide font-sans">
                    Copyright © 2026 JC Gutters and Construction. All Rights Reserved.
                </p>
</div>
</div>
</footer>



    </>
  );
}
