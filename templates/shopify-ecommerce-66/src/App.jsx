import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      // Mobile Menu Toggle
      const btn = document.getElementById('mobile-menu-btn');
      const menu = document.getElementById('mobile-menu');
      const links = document.querySelectorAll('.mobile-link');
      let isOpen = false;

      function toggleMenu() {
          isOpen = !isOpen;
          if (isOpen) {
              menu.classList.remove('hidden');
              menu.classList.add('flex');
              document.body.style.overflow = 'hidden';
          } else {
              menu.classList.add('hidden');
              menu.classList.remove('flex');
              document.body.style.overflow = 'auto';
          }
      }

      btn.addEventListener('click', toggleMenu);
      links.forEach(link => {
          link.addEventListener('click', () => {
              if(isOpen) toggleMenu();
          });
      });

      // Navbar scroll effect
      const nav = document.querySelector('nav');
      window.addEventListener('scroll', () => {
          if (window.scrollY > 20) {
              nav.classList.add('shadow-sm');
          } else {
              nav.classList.remove('shadow-sm');
          }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-md border-b border-slate-200/60 transition-all duration-300">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tighter text-slate-900 flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-blue-600 flex items-center justify-center text-white text-[10px] font-bold">
            DV
          </div>
          Data Vault
        </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-slate-900 transition-colors" href="#about">
            About
          </a>
<a className="hover:text-slate-900 transition-colors" href="#services">
            Services
          </a>
<a className="hover:text-slate-900 transition-colors" href="#portfolio">
            Portfolio
          </a>
<a className="hover:text-slate-900 transition-colors" href="#pricing">
            Pricing
          </a>
<a className="hover:text-slate-900 transition-colors" href="#contact">
            Contact
          </a>
</div>
<a className="hidden md:inline-flex h-9 items-center justify-center px-4 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm" href="#contact">
          Get in touch
        </a>
<button className="md:hidden text-slate-600 p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white pt-24 px-6 hidden flex-col gap-6 text-lg font-medium text-slate-600 border-b border-slate-100" id="mobile-menu">
<a className="hover:text-blue-600 transition-colors mobile-link" href="#about">
        About
      </a>
<a className="hover:text-blue-600 transition-colors mobile-link" href="#services">
        Services
      </a>
<a className="hover:text-blue-600 transition-colors mobile-link" href="#portfolio">
        Portfolio
      </a>
<a className="hover:text-blue-600 transition-colors mobile-link" href="#pricing">
        Pricing
      </a>
<a className="hover:text-blue-600 transition-colors mobile-link" href="#contact">
        Contact
      </a>
</div>

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden flex items-center justify-center text-center px-6" style={{}}>
<div className="absolute inset-0 z-0 opacity-[0.4]" style={{backgroundImage: 'radial-gradient(#e2e8f0 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 max-w-3xl mx-auto flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
          Available for new projects
        </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-slate-900 leading-[1.1] mb-6">
          Build a Shopify store
          <br className="hidden md:block"/>
          that
          <span className="text-blue-600">converts</span>
          .
        </h1>
<p className="text-base md:text-lg text-slate-500 max-w-xl mb-10 leading-relaxed font-normal">
          Premium eCommerce development, custom theme design, and speed
          optimization for brands ready to scale.
        </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-blue-600 text-white text-sm font-medium hover:bg-blue-700 transition-all shadow-[0_4px_14px_0_rgb(37,99,235,0.39)] hover:shadow-[0_6px_20px_rgba(37,99,235,0.23)] hover:-translate-y-0.5" href="#contact">
            Start Your Project
          </a>
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-all hover:-translate-y-0.5" href="#portfolio">
            View Portfolio
          </a>
</div>
</div>
</section>

<div className="max-w-5xl mx-auto px-6 relative z-10 -mt-10 md:-mt-16 mb-24">
<div className="rounded-2xl border border-slate-200/80 bg-white/50 backdrop-blur-xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden">

<div className="h-12 border-b border-slate-100 bg-slate-50/50 flex items-center px-4 gap-2">
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="w-3 h-3 rounded-full bg-slate-200"></div>
<div className="mx-auto w-1/3 h-6 bg-white rounded-md border border-slate-100"></div>
</div>

<div className="p-8 md:p-12 grid grid-cols-1 md:grid-cols-2 gap-8 items-center bg-white">
<div className="space-y-4">
<div className="w-16 h-16 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600 mb-6">
<iconify-icon icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<div className="h-8 w-3/4 bg-slate-100 rounded-lg"></div>
<div className="h-4 w-full bg-slate-50 rounded"></div>
<div className="h-4 w-5/6 bg-slate-50 rounded"></div>
<div className="flex gap-3 pt-4">
<div className="h-10 w-28 bg-blue-600 rounded-full"></div>
<div className="h-10 w-28 bg-slate-100 rounded-full"></div>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="aspect-[4/5] bg-slate-100 rounded-xl"></div>
<div className="space-y-4">
<div className="aspect-square bg-slate-100 rounded-xl"></div>
<div className="aspect-square bg-slate-100 rounded-xl"></div>
</div>
</div>
</div>
</div>
</div>

<section className="py-20 md:py-32 bg-white" id="about">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="w-20 h-20 md:w-24 md:h-24 rounded-full border-4 border-white shadow-lg overflow-hidden mb-6 bg-slate-100 flex items-center justify-center">
<img alt="Data Vault" className="w-full h-full object-cover" src="https://ui-avatars.com/api/?name=Data+Vault&amp;background=2563eb&amp;color=fff&amp;size=96"/>
</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-6">
            Crafting digital storefronts that stand out.
          </h2>
<p className="text-base text-slate-500 mb-6 leading-relaxed">
            I am a dedicated Shopify Developer with years of experience
            building, optimizing, and scaling eCommerce businesses. I don't just
            build websites; I engineer shopping experiences designed to maximize
            conversions and reflect your brand's unique identity.
          </p>
<div className="flex items-center gap-4 text-sm font-medium text-slate-900">
<div className="flex -space-x-3">
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:star-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center">
<iconify-icon className="text-slate-400" icon="solar:star-linear"></iconify-icon>
</div>
<div className="w-10 h-10 rounded-full border-2 border-white bg-blue-50 flex items-center justify-center text-blue-600 text-xs">
                +50
              </div>
</div>
<span>Stores Launched Successfully</span>
</div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<iconify-icon className="text-blue-600 mb-4" icon="solar:code-square-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">
              Custom Liquid
            </h3>
<p className="text-xs text-slate-500">Bespoke theme development.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 mt-0 md:mt-8">
<iconify-icon className="text-blue-600 mb-4" icon="solar:rocket-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">
              Speed Opt.
            </h3>
<p className="text-xs text-slate-500">Lightning fast load times.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<iconify-icon className="text-blue-600 mb-4" icon="solar:smartphone-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">
              Responsive
            </h3>
<p className="text-xs text-slate-500">Flawless mobile experience.</p>
</div>
<div className="p-6 rounded-2xl border border-slate-100 bg-slate-50/50 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 mt-0 md:mt-8">
<iconify-icon className="text-blue-600 mb-4" icon="solar:magnifer-linear" width="24"></iconify-icon>
<h3 className="text-sm font-semibold text-slate-900 mb-1">
              Technical SEO
            </h3>
<p className="text-xs text-slate-500">
              Built to rank on search engines.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#fafafa]" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Comprehensive Shopify Solutions
          </h2>
<p className="text-base text-slate-500">
            Everything you need to build, run, and scale your eCommerce business
            efficiently.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(37,99,235,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:shop-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Store Setup
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Complete A-Z setup of your Shopify store, including domain
              configuration, payment gateways, and shipping zones.
            </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(37,99,235,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:pen-new-round-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              Custom Themes
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Pixel-perfect, custom-designed themes tailored to your brand
              guidelines using Shopify OS 2.0.
            </p>
</div>

<div className="p-8 rounded-2xl bg-white border border-slate-200/60 hover:border-blue-200 hover:shadow-[0_8px_30px_rgb(37,99,235,0.06)] transition-all duration-300 group">
<div className="w-12 h-12 rounded-xl bg-blue-50/50 flex items-center justify-center text-blue-600 mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chart-square-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900 mb-2">
              CRO &amp; Redesign
            </h3>
<p className="text-sm text-slate-500 leading-relaxed">
              Data-driven revamps to existing stores to improve user experience,
              reduce bounce rates, and boost sales.
            </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-white" id="portfolio">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
              Selected Works
            </h2>
<p className="text-base text-slate-500 max-w-md">
              A glimpse into recent eCommerce projects crafted with precision.
            </p>
</div>
<a className="inline-flex items-center gap-2 text-sm font-medium text-blue-600 hover:text-blue-700 transition-colors" href="#contact">
            Start a project together
            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group cursor-pointer">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-slate-100 to-slate-200 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-8">

<div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
<div className="h-8 border-b border-slate-50 flex items-center px-3 gap-1.5 bg-slate-50/50">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 p-6 flex flex-col gap-4">
<div className="h-4 w-1/3 bg-slate-100 rounded"></div>
<div className="flex-1 bg-slate-50 rounded-lg"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Aura Cosmetics
                </h3>
<p className="text-sm text-slate-500">Beauty &amp; Skincare</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="group cursor-pointer md:mt-16">
<div className="w-full aspect-[4/3] rounded-2xl overflow-hidden bg-slate-100 mb-6 relative">
<div className="absolute inset-0 bg-gradient-to-br from-blue-50 to-slate-100 transition-transform duration-700 group-hover:scale-105 flex items-center justify-center p-8">

<div className="w-full h-full bg-white rounded-xl shadow-sm border border-slate-100 overflow-hidden flex flex-col">
<div className="h-8 border-b border-slate-50 flex items-center px-3 gap-1.5 bg-slate-50/50">
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
<div className="w-2 h-2 rounded-full bg-slate-200"></div>
</div>
<div className="flex-1 p-6 grid grid-cols-2 gap-4">
<div className="bg-slate-50 rounded-lg"></div>
<div className="bg-slate-50 rounded-lg"></div>
</div>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<div>
<h3 className="text-lg font-semibold tracking-tight text-slate-900">
                  Lumina Apparel
                </h3>
<p className="text-sm text-slate-500">Fashion &amp; Lifestyle</p>
</div>
<div className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 group-hover:bg-slate-900 group-hover:border-slate-900 group-hover:text-white transition-all duration-300">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-20 md:py-32 bg-[#fafafa]" id="pricing">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-slate-900 mb-4">
            Transparent Pricing
          </h2>
<p className="text-base text-slate-500">
            Choose the right plan to elevate your Shopify store.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Setup</h3>
<p className="text-sm text-slate-500 mb-6">Perfect for new brands.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-slate-900">
                $999
              </span>
<span className="text-slate-500 text-sm">/store</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                Standard Theme Setup
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                Up to 20 Products
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                Basic App Integration
              </li>
</ul>
<a className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors" href="#contact">
              Choose Setup
            </a>
</div>
<div className="p-8 rounded-3xl bg-blue-600 border border-blue-600 shadow-lg flex flex-col relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-blue-100 text-blue-700 text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
              Most Popular
            </div>
<h3 className="text-xl font-semibold text-white mb-2">Custom</h3>
<p className="text-sm text-blue-100 mb-6">For growing businesses.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-white">
                $2,499
              </span>
<span className="text-blue-200 text-sm">/store</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-300" icon="solar:check-circle-bold"></iconify-icon>
                Custom Theme Development
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-300" icon="solar:check-circle-bold"></iconify-icon>
                Unlimited Products
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-300" icon="solar:check-circle-bold"></iconify-icon>
                Advanced CRO Features
              </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-blue-300" icon="solar:check-circle-bold"></iconify-icon>
                Speed Optimization
              </li>
</ul>
<a className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-white text-blue-600 font-medium hover:bg-blue-50 transition-colors" href="#contact">
              Choose Custom
            </a>
</div>
<div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm flex flex-col">
<h3 className="text-xl font-semibold text-slate-900 mb-2">Retainer</h3>
<p className="text-sm text-slate-500 mb-6">Ongoing support.</p>
<div className="mb-8">
<span className="text-4xl font-bold tracking-tight text-slate-900">
                $1,500
              </span>
<span className="text-slate-500 text-sm">/mo</span>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                20 Hours of Dev/Month
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                A/B Testing
              </li>
<li className="flex items-center gap-3 text-sm text-slate-600">
<iconify-icon className="text-blue-600" icon="solar:check-circle-bold"></iconify-icon>
                Priority Support
              </li>
</ul>
<a className="w-full h-11 inline-flex items-center justify-center rounded-xl bg-slate-100 text-slate-900 font-medium hover:bg-slate-200 transition-colors" href="#contact">
              Choose Retainer
            </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-900 text-white overflow-hidden relative">
<div className="absolute top-0 left-0 w-full h-full opacity-10" style={{backgroundImage: 'radial-gradient(circle at 50% 0%, #3b82f6 0%, transparent 70%)'}}></div>
<div className="max-w-6xl mx-auto px-6 relative z-10 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">
            Why work with me?
          </h2>
<p className="text-base text-slate-400 mb-8 leading-relaxed">
            I treat every project as if it were my own business. No shortcuts,
            clean code, and a focus on what actually matters: your conversion
            rate and customer experience.
          </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-blue-400" icon="solar:check-circle-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold mb-1">
                  Pixel-Perfect Implementation
                </h4>
<p className="text-sm text-slate-400">
                  Translating designs into exact, responsive, and functional
                  stores.
                </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-blue-400" icon="solar:bolt-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold mb-1">Fast Turnaround</h4>
<p className="text-sm text-slate-400">
                  Clear communication and strict adherence to deadlines.
                </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/10 flex items-center justify-center shrink-0 mt-1">
<iconify-icon className="text-blue-400" icon="solar:shield-check-linear" width="18"></iconify-icon>
</div>
<div>
<h4 className="text-base font-semibold mb-1">
                  Post-Launch Support
                </h4>
<p className="text-sm text-slate-400">
                  I ensure you know how to manage your store after handover.
                </p>
</div>
</div>
</div>
</div>

<div className="p-8 rounded-2xl bg-white/5 border border-white/10 backdrop-blur-sm">
<iconify-icon className="text-white/20 mb-6" icon="solar:quote-left-linear" width="32"></iconify-icon>
<p className="text-lg font-medium leading-relaxed mb-8">
            "Working with them completely transformed our online presence. Our
            conversion rate doubled in the first month after the redesign, and
            the site speed is incredible."
          </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-tr from-slate-600 to-slate-400"></div>
<div>
<h5 className="text-sm font-semibold">Sarah Jenkins</h5>
<p className="text-xs text-slate-400">Founder, Aura Cosmetics</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-32 bg-[#fafafa]" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="bg-white rounded-3xl border border-slate-200/60 p-8 md:p-12 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">
              Let's build something great.
            </h2>
<p className="text-sm text-slate-500">
              Fill out the form below or reach out via WhatsApp for a faster
              response.
            </p>
</div>
<form className="space-y-6" onsubmit="event.preventDefault();">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">
                  Full Name
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="Jane Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">
                  Email Address
                </label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all" placeholder="jane@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold text-slate-700 ml-1">
                Project Details
              </label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-3 text-sm text-slate-900 placeholder:text-slate-400 focus:border-blue-500 focus:bg-white focus:outline-none focus:ring-4 focus:ring-blue-500/10 transition-all resize-none" placeholder="Tell me about your brand and what you need..." rows="4"></textarea>
</div>
<button className="w-full h-12 inline-flex items-center justify-center px-8 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors shadow-sm gap-2" type="submit">
              Send Message
              <iconify-icon icon="solar:plain-linear" width="18"></iconify-icon>
</button>
</form>
</div>
</div>
</section>

<section className="py-16 bg-blue-600 text-white">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight mb-4">
          Join the Data Vault Community
        </h2>
<p className="text-blue-100 mb-8 max-w-xl mx-auto">
          Connect with us to access exclusive freelance resources, join our
          network, and build the best eCommerce experiences together.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full bg-white text-blue-600 text-sm font-semibold hover:bg-blue-50 transition-colors w-full sm:w-auto shadow-sm" href="#contact">
            Join Us Now
          </a>
<a className="inline-flex h-12 items-center justify-center px-8 rounded-full border border-blue-400 text-white text-sm font-medium hover:bg-blue-500 transition-colors w-full sm:w-auto" href="#contact">
            Hire Our Experts
          </a>
</div>
</div>
</section>
<footer className="bg-white border-t border-slate-100 py-8">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-4">
<a className="text-lg font-semibold tracking-tighter text-slate-900" href="#">
          Data Vault
        </a>
<p className="text-xs text-slate-500">
          © 2024 Data Vault. All rights reserved.
        </p>
<div className="flex items-center gap-4 text-slate-400">
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</a>
<a className="hover:text-slate-900 transition-colors" href="#">
<iconify-icon icon="solar:link-circle-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</footer>

<a aria-label="Chat on WhatsApp" className="fixed bottom-6 right-6 z-50 w-14 h-14 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-[0_8px_30px_rgb(37,211,102,0.3)] hover:scale-110 transition-transform duration-300" href="https://wa.me/1234567890" target="_blank">
<iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5" width="28"></iconify-icon>
</a>


    </>
  );
}
