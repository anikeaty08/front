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


document.write(new Date().getFullYear())


        document.addEventListener('DOMContentLoaded', () => {
            const mobileMenuBtn = document.getElementById('mobile-menu-btn');
            const mobileMenu = document.getElementById('mobile-menu');
            const mobileMenuIcon = document.getElementById('mobile-menu-icon');
            const mobileLinks = document.querySelectorAll('.mobile-link');

            // Toggle mobile menu
            mobileMenuBtn.addEventListener('click', () => {
                mobileMenu.classList.toggle('hidden');
                
                // Switch icon between hamburger and close
                if (mobileMenu.classList.contains('hidden')) {
                    mobileMenuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                } else {
                    mobileMenuIcon.setAttribute('icon', 'solar:close-circle-linear');
                }
            });

            // Close menu when a link is clicked
            mobileLinks.forEach(link => {
                link.addEventListener('click', () => {
                    mobileMenu.classList.add('hidden');
                    mobileMenuIcon.setAttribute('icon', 'solar:hamburger-menu-linear');
                });
            });
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
      

<header className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-1 text-2xl font-bold tracking-tighter text-slate-900 hover:opacity-80 transition-opacity" href="#home">
                VAISHNAV<span className="text-[#b69440]">CANS</span>
</a>
<nav className="hidden md:flex items-center gap-8">
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#home">Home</a>
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#about">About</a>
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#products">Products</a>
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#manufacturing">Manufacturing</a>
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#quality">Quality</a>
<a className="text-base font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#contact">Contact</a>
</nav>
<div className="md:hidden flex items-center">
<button className="text-slate-900 hover:text-[#b69440] transition-colors focus:outline-none p-2 -mr-2" id="mobile-menu-btn">
<iconify-icon height="28" icon="solar:hamburger-menu-linear" id="mobile-menu-icon" width="28"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-20 left-0 w-full bg-white border-b border-slate-100 shadow-lg px-6 py-4 transition-all duration-300 origin-top" id="mobile-menu">
<nav className="flex flex-col gap-2">
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] border-b border-slate-50 transition-colors" href="#home">
                    Home
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] border-b border-slate-50 transition-colors" href="#about">
                    About
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] border-b border-slate-50 transition-colors" href="#products">
                    Products
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] border-b border-slate-50 transition-colors" href="#manufacturing">
                    Manufacturing
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] border-b border-slate-50 transition-colors" href="#quality">
                    Quality
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="mobile-link flex items-center justify-between py-3 text-lg font-medium text-slate-600 hover:text-[#b69440] transition-colors" href="#contact">
                    Contact
                    <iconify-icon className="text-slate-400" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</nav>
</div>
</header>
<main>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden bg-white" id="home">
<div className="absolute inset-0 -z-10 h-full w-full bg-white bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] [background-size:16px_16px] opacity-30"></div>
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 mb-8 hover:border-[#b69440] transition-colors cursor-default">
<span className="w-2 h-2 rounded-full bg-[#b69440]"></span>
<span className="text-sm font-medium text-slate-700 uppercase tracking-widest">I Can . You Can . We Can</span>
</div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 max-w-4xl mx-auto leading-tight mb-6">
                    Manufacturer of Tin Cans &amp; <br className="hidden sm:block"/>Metal Packaging Solutions
                </h1>
<p className="text-lg md:text-xl text-slate-600 max-w-2xl mx-auto mb-10 font-light">
                    Professionally managed manufacturing, delivering precision, reliability, and consistent quality for a wide array of industrial and commercial applications.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-6 py-3 bg-slate-900 text-white font-medium rounded-md hover:bg-[#b69440] hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300 flex items-center justify-center gap-2 text-lg" href="#products">
                        Explore Products
                        <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center mb-24">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-6">Company Overview</h2>
<div className="w-12 h-1 bg-[#b69440] mb-6"></div>
<p className="text-lg text-slate-600 leading-relaxed mb-6 hover:text-slate-900 transition-colors">
                            Vaishnav Cans Pvt. Ltd. is a professionally managed private limited manufacturing company. We specialize in the production of tin cans and metal packaging solutions designed for a wide array of industrial and commercial applications.
                        </p>
<p className="text-lg text-slate-600 leading-relaxed hover:text-slate-900 transition-colors">
                            Our operations are centered in the industrial hub of MIDC Tarapur, Boisar. By combining modern manufacturing facilities with a highly skilled workforce, we ensure that every product delivers precision, reliability, and consistent quality.
                        </p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:eye-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#b69440] transition-colors">Our Vision</h3>
<p className="text-base text-slate-600 leading-relaxed">
                                To become a trusted leader in metal packaging by delivering high-quality products, adopting advanced manufacturing practices, and building long-term customer relationships.
                            </p>
</div>
<div className="bg-white p-8 rounded-xl border border-slate-100 shadow-sm mt-0 sm:mt-12 hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center mb-6 text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white transition-colors">
<iconify-icon height="24" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#b69440] transition-colors">Our Mission</h3>
<p className="text-base text-slate-600 leading-relaxed">
                                Manufacture containers that meet industry standards, ensure timely delivery, continuously improve processes, and build strong relationships through trust.
                            </p>
</div>
</div>
</div>

<div className="border-t border-slate-100 pt-20">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900">Core Values</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-10">
<div className="text-center group hover:-translate-y-1 transition-transform duration-300 cursor-default">
<div className="mx-auto w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#b69440] mb-6 group-hover:border-[#b69440] group-hover:bg-[#b69440] group-hover:text-white transition-all duration-300">
<iconify-icon height="32" icon="solar:medal-ribbon-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#b69440] transition-colors">Quality</h3>
<p className="text-lg text-slate-600">Delivering superior products with consistency.</p>
</div>
<div className="text-center group hover:-translate-y-1 transition-transform duration-300 cursor-default">
<div className="mx-auto w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#b69440] mb-6 group-hover:border-[#b69440] group-hover:bg-[#b69440] group-hover:text-white transition-all duration-300">
<iconify-icon height="32" icon="solar:lightbulb-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#b69440] transition-colors">Innovation</h3>
<p className="text-lg text-slate-600">Continuously improving processes and designs.</p>
</div>
<div className="text-center group hover:-translate-y-1 transition-transform duration-300 cursor-default">
<div className="mx-auto w-16 h-16 rounded-2xl bg-white border border-slate-100 shadow-sm flex items-center justify-center text-[#b69440] mb-6 group-hover:border-[#b69440] group-hover:bg-[#b69440] group-hover:text-white transition-all duration-300">
<iconify-icon height="32" icon="solar:handshake-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 group-hover:text-[#b69440] transition-colors">Trust</h3>
<p className="text-lg text-slate-600">Building long-term relationships with clients.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="products">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-3xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Our Products</h2>
<p className="text-lg text-slate-600">We manufacture a wide range of metal cans and containers used across different industries, ensuring precision and durability for every application.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#b69440] group-hover:text-white transition-colors mb-6">
<iconify-icon height="24" icon="solar:buildings-2-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900 group-hover:text-[#b69440] transition-colors">Industrial Tin Cans</h3>
<p className="text-lg text-slate-600">Precision-engineered for demanding industrial applications.</p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#b69440] group-hover:text-white transition-colors mb-6">
<iconify-icon height="24" icon="solar:drop-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900 group-hover:text-[#b69440] transition-colors">Lubricant &amp; Oil Cans</h3>
<p className="text-lg text-slate-600">Durable and leak-proof containers for oil and lubricants.</p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#b69440] group-hover:text-white transition-colors mb-6">
<iconify-icon height="24" icon="solar:paint-roller-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900 group-hover:text-[#b69440] transition-colors">Paint &amp; Chemical Cans</h3>
<p className="text-lg text-slate-600">Corrosion-resistant packaging solutions for harsh chemicals.</p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 cursor-pointer lg:col-span-2">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#b69440] group-hover:text-white transition-colors mb-6">
<iconify-icon height="24" icon="solar:chef-hat-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900 group-hover:text-[#b69440] transition-colors">Food Grade Metal Containers</h3>
<p className="text-lg text-slate-600">Safe, certified packaging for food with brand customization options available.</p>
</div>
<div className="group p-8 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 cursor-pointer">
<div className="w-12 h-12 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-700 group-hover:bg-[#b69440] group-hover:text-white transition-colors mb-6">
<iconify-icon height="24" icon="solar:box-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-3 text-slate-900 group-hover:text-[#b69440] transition-colors">Printed &amp; Plain Containers</h3>
<p className="text-lg text-slate-600">Versatile plain or custom printed tin containers.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="manufacturing">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6 text-slate-900">Our Manufacturing Facility</h2>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                            We operate with strong in-house manufacturing capabilities, ensuring complete control over the production process, resulting in consistent quality, faster turnaround times, and reliable output.
                        </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
<div className="mt-1 bg-slate-50 border border-slate-200 p-1 rounded text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white group-hover:border-[#b69440] transition-colors">
<iconify-icon height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors">Modern can manufacturing machinery</span>
</li>
<li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
<div className="mt-1 bg-slate-50 border border-slate-200 p-1 rounded text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white group-hover:border-[#b69440] transition-colors">
<iconify-icon height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors">Skilled and experienced workforce</span>
</li>
<li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
<div className="mt-1 bg-slate-50 border border-slate-200 p-1 rounded text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white group-hover:border-[#b69440] transition-colors">
<iconify-icon height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors">Efficient production monitoring systems</span>
</li>
<li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
<div className="mt-1 bg-slate-50 border border-slate-200 p-1 rounded text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white group-hover:border-[#b69440] transition-colors">
<iconify-icon height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors">Quality inspection at every stage</span>
</li>
<li className="flex items-start gap-4 group hover:translate-x-2 transition-transform duration-300">
<div className="mt-1 bg-slate-50 border border-slate-200 p-1 rounded text-[#b69440] group-hover:bg-[#b69440] group-hover:text-white group-hover:border-[#b69440] transition-colors">
<iconify-icon height="20" icon="solar:check-read-linear" width="20"></iconify-icon>
</div>
<span className="text-lg text-slate-700 group-hover:text-slate-900 transition-colors">Organized dispatch and logistics management</span>
</li>
</ul>
</div>
<div className="relative bg-white rounded-2xl p-8 lg:p-12 border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] transition-all duration-300 flex flex-col justify-center group">
<div className="absolute top-0 right-0 p-8 text-slate-100 group-hover:text-[#b69440]/10 transition-colors">
<iconify-icon height="120" icon="solar:map-linear" width="120"></iconify-icon>
</div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 text-[#b69440] font-medium mb-4">
<iconify-icon height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-lg tracking-wide uppercase">Location Advantage</span>
</div>
<h3 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 group-hover:text-[#b69440] transition-colors">MIDC Tarapur, Boisar</h3>
<p className="text-lg text-slate-600 leading-relaxed mb-6 group-hover:text-slate-800 transition-colors">
                                Located in an industrial hub, our infrastructure supports precision manufacturing, streamlined operations, and timely delivery commitments.
                            </p>
<p className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-800 transition-colors">
                                This strategic position allows us to maintain high productivity while ensuring strict quality control across all our product lines.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100" id="quality">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Quality Assurance</h2>
<p className="text-lg text-slate-600">Quality is the core of our manufacturing process. We follow systematic quality checks at each stage of production to ensure excellence in every product we deliver.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-24">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-[#b69440] mb-4 group-hover:scale-110 transition-transform origin-left"><iconify-icon height="32" icon="solar:ruler-linear" width="32"></iconify-icon></div>
<h4 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-[#b69440] transition-colors">Accurate Dimensions</h4>
<p className="text-base text-slate-600">Precision engineering ensures consistent sizing across all batches.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-[#b69440] mb-4 group-hover:scale-110 transition-transform origin-left"><iconify-icon height="32" icon="solar:shield-check-linear" width="32"></iconify-icon></div>
<h4 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-[#b69440] transition-colors">Leak-Proof Construction</h4>
<p className="text-base text-slate-600">Robust sealing processes guarantee reliable containment.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-[#b69440] mb-4 group-hover:scale-110 transition-transform origin-left"><iconify-icon height="32" icon="solar:paint-roller-linear" width="32"></iconify-icon></div>
<h4 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-[#b69440] transition-colors">Proper Coating &amp; Finishing</h4>
<p className="text-base text-slate-600">Superior surface treatment for durability and appearance.</p>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm hover:shadow-lg hover:border-[#b69440] hover:-translate-y-1 transition-all duration-300 group cursor-default">
<div className="text-[#b69440] mb-4 group-hover:scale-110 transition-transform origin-left"><iconify-icon height="32" icon="solar:layers-linear" width="32"></iconify-icon></div>
<h4 className="text-lg font-medium text-slate-900 mb-2 group-hover:text-[#b69440] transition-colors">Consistency in Every Batch</h4>
<p className="text-base text-slate-600">Rigorous batch testing ensures uniform quality standards.</p>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 bg-white rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:border-[#b69440] transition-all duration-300 overflow-hidden group">
<div className="p-10 lg:p-12 border-b lg:border-b-0 lg:border-r border-slate-200 bg-white">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 flex items-center gap-3 group-hover:text-[#b69440] transition-colors">
<iconify-icon className="text-[#b69440]" height="32" icon="solar:hand-hearts-linear" width="32"></iconify-icon>
                            Our Commitment
                        </h3>
<ul className="space-y-5">
<li className="flex items-center gap-3 text-lg text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Consistent Product Quality
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Meeting Client Requirements Efficiently
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Ensuring On-Time Delivery
                            </li>
<li className="flex items-center gap-3 text-lg text-slate-700 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<span className="w-1.5 h-1.5 rounded-full bg-slate-300"></span>
                                Building Long-Term Business Relationships
                            </li>
</ul>
</div>
<div className="p-10 lg:p-12 bg-white">
<h3 className="text-2xl font-semibold tracking-tight text-slate-900 mb-8 flex items-center gap-3 group-hover:text-[#b69440] transition-colors">
<iconify-icon className="text-[#b69440]" height="32" icon="solar:like-linear" width="32"></iconify-icon>
                            Why Choose Us
                        </h3>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-y-5 gap-x-4">
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Consistent Quality
                            </div>
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Professional Practices
                            </div>
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Competitive Pricing
                            </div>
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Timely Delivery
                            </div>
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Flexible Production
                            </div>
<div className="flex items-center gap-2 text-lg text-slate-600 hover:text-slate-900 hover:translate-x-1 transition-all cursor-default">
<iconify-icon className="text-green-500" height="24" icon="solar:check-circle-linear" width="24"></iconify-icon>
                                Dedicated Support
                            </div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white text-slate-900 pt-20 pb-10 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 mb-16">
<div className="lg:col-span-5">
<a className="inline-flex items-center gap-1 text-2xl font-bold tracking-tighter text-slate-900 mb-6 hover:opacity-80 transition-opacity" href="#home">
                        VAISHNAV<span className="text-[#b69440]">CANS</span>
</a>
<p className="text-lg text-slate-600 max-w-sm mb-6">
                        Manufacturer of Tin Cans &amp; Metal Packaging Solutions. Precision, reliability, and consistent quality for industrial and commercial needs.
                    </p>
<div className="text-[#b69440] font-medium tracking-wide">I Can . You Can . We Can</div>
</div>
<div className="lg:col-span-3">
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-lg text-slate-600 hover:text-[#b69440] hover:translate-x-1 transition-all inline-block" href="#about">Company Overview</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#b69440] hover:translate-x-1 transition-all inline-block" href="#products">Our Products</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#b69440] hover:translate-x-1 transition-all inline-block" href="#manufacturing">Manufacturing Facility</a></li>
<li><a className="text-lg text-slate-600 hover:text-[#b69440] hover:translate-x-1 transition-all inline-block" href="#quality">Quality Assurance</a></li>
</ul>
</div>
<div className="lg:col-span-4">
<h4 className="text-lg font-semibold tracking-tight text-slate-900 mb-6">Contact Information</h4>
<ul className="space-y-5">
<li className="flex items-start gap-4 group">
<iconify-icon className="text-[#b69440] shrink-0 mt-0.5 group-hover:scale-110 transition-transform" height="24" icon="solar:map-point-linear" width="24"></iconify-icon>
<span className="text-lg text-slate-600 leading-relaxed group-hover:text-slate-900 transition-colors cursor-default">
                                Vaishnav Cans Pvt. Ltd.<br/>
                                Plot No. W-87 D<br/>
                                MIDC Tarapur<br/>
                                Boisar - 401506<br/>
                                Maharashtra, India
                            </span>
</li>
<li className="flex items-center gap-4 group">
<iconify-icon className="text-[#b69440] shrink-0 group-hover:scale-110 transition-transform" height="24" icon="solar:phone-linear" width="24"></iconify-icon>
<a className="text-lg text-slate-600 hover:text-[#b69440] transition-colors" href="tel:+919309938189">+91 9309938189</a>
</li>
<li className="flex items-center gap-4 group">
<iconify-icon className="text-[#b69440] shrink-0 group-hover:scale-110 transition-transform" height="24" icon="solar:letter-linear" width="24"></iconify-icon>
<a className="text-lg text-slate-600 hover:text-[#b69440] transition-colors" href="mailto:vaishnavcans@gmail.com">vaishnavcans@gmail.com</a>
</li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-base text-slate-500">
                    ©  Vaishnav Cans Pvt. Ltd. All rights reserved.
                </p>
</div>
</div>
</footer>


    </>
  );
}
