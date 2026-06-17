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
      

<nav className="fixed w-full z-50 top-0 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-xl font-semibold tracking-tight text-gray-900 flex items-center gap-2" href="#">
<span className="w-8 h-8 bg-gray-900 text-white flex items-center justify-center rounded-lg text-xs font-bold">SP</span>
                SPPC digital
            </a>
<div className="hidden lg:flex items-center gap-8 text-sm font-medium text-gray-500">
<a className="hover:text-gray-900 transition-colors" href="#seo">SEO</a>
<a className="hover:text-gray-900 transition-colors" href="#ppc">PPC</a>
<a className="hover:text-gray-900 transition-colors" href="#tracking">Tracking &amp; Analytics</a>
<a className="hover:text-gray-900 transition-colors" href="#cro">CRO</a>
<a className="hover:text-gray-900 transition-colors" href="#cases">Case Study</a>
<a className="hover:text-gray-900 transition-colors" href="#about">About</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex items-center justify-center px-5 py-2.5 text-sm font-medium text-white transition-all duration-200 bg-gray-900 border border-transparent rounded-full hover:bg-gray-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900" href="#contact">
                    Let’s Talk
                </a>
<button className="lg:hidden text-gray-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-blue-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-purple-50 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 mb-8">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                Welcome to SPPC digital
            </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tighter text-gray-900 mb-6 max-w-4xl mx-auto leading-[1.1]">
                A Leading SEO &amp; PPC Advertising Agency <span className="text-gray-400">on The Planet</span>
</h1>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed">
                SPPC Digital amplifies brands with targeted SEO &amp; PPC. Drive organic and paid traffic, improve search rankings, and maximize ROI.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-800 transition-all hover:shadow-lg hover:-translate-y-1" href="#contact">
                    Let’s Talk
                    <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-gray-600 bg-white border border-gray-200 rounded-full hover:bg-gray-50 transition-all" href="#services">
                    View Services
                </a>
</div>

<div className="mt-20 pt-10 border-t border-gray-100 flex flex-wrap justify-center gap-12 lg:gap-24 opacity-80">
<div className="text-center">
<p className="text-3xl font-semibold text-gray-900 tracking-tight">1,245 +</p>
<p className="text-sm text-gray-500 mt-1">Happy Clients</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-gray-900 tracking-tight">3,452 +</p>
<p className="text-sm text-gray-500 mt-1">Projects Completed</p>
</div>
<div className="text-center">
<p className="text-3xl font-semibold text-gray-900 tracking-tight">98%</p>
<p className="text-sm text-gray-500 mt-1">Satisfaction Rate</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col items-start gap-4 mb-16">
<div className="flex items-center gap-2 text-sm text-gray-400">
<span>Home</span>
<iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon>
<span className="text-gray-900">About</span>
</div>
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase">About SPPC Digital</span>
</div>
<div className="grid lg:grid-cols-2 gap-16 items-start">

<div className="space-y-8">
<div className="relative rounded-3xl overflow-hidden bg-gray-100 aspect-[4/3] group">
<div className="absolute inset-0 bg-gray-200 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">

<iconify-icon className="text-gray-300" icon="solar:users-group-rounded-linear" width="120"></iconify-icon>
</div>

<div className="absolute bottom-6 left-6 right-6 bg-white/95 backdrop-blur-sm p-6 rounded-2xl border border-gray-100 shadow-xl">
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-full bg-gray-900 flex items-center justify-center text-white shrink-0">
<span className="text-xl font-bold">25</span>
</div>
<div>
<p className="text-lg font-bold text-gray-900 leading-tight">Years Of<br/>Experience</p>
</div>
</div>
</div>
</div>

<div className="p-8 bg-gray-50 rounded-2xl border border-gray-100">
<p className="text-gray-500 italic mb-6 leading-relaxed">"Accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gray-200"></div>
<div>
<h4 className="text-sm font-bold text-gray-900">Darrell Donovan</h4>
<p className="text-xs text-gray-500">CEO SPPC Digital</p>
</div>
</div>
</div>
</div>

<div className="lg:pt-4">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                        We Have 25 Years Of Experience On Creative Digital Agency
                    </h2>
<p className="text-gray-500 mb-8 leading-relaxed text-lg">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam.
                    </p>

<div className="grid grid-cols-2 gap-8 mb-12 border-y border-gray-100 py-8">
<div>
<span className="block text-3xl font-bold text-gray-900 mb-1">1,245 +</span>
<span className="text-sm text-gray-500">Happy Clients</span>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">Accusamus et iusto odio dignissimos ducimus qui blanditiis</p>
</div>
<div>
<span className="block text-3xl font-bold text-gray-900 mb-1">3,452 +</span>
<span className="text-sm text-gray-500">Projects Completed</span>
<p className="text-xs text-gray-400 mt-2 leading-relaxed">Perspiciatis unde omnis iste natus error volupta accusantium</p>
</div>
</div>

<div className="space-y-6 mb-10">
<h3 className="text-xl font-semibold text-gray-900 mb-4">Our Expertise</h3>
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-gray-900">Digital Marketing</span>
<span className="text-sm font-medium text-gray-900">91%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '91%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-gray-900">Branding Identity</span>
<span className="text-sm font-medium text-gray-900">92%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '92%'}}></div>
</div>
</div>
<div>
<div className="flex justify-between mb-2">
<span className="text-sm font-medium text-gray-900">Business Planning</span>
<span className="text-sm font-medium text-gray-900">88%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2">
<div className="bg-gray-900 h-2 rounded-full" style={{width: '88%'}}></div>
</div>
</div>
</div>
<a className="inline-flex items-center justify-center px-8 py-4 text-sm font-medium text-white bg-gray-900 rounded-full hover:bg-gray-700 transition-all" href="#services">
                        View Services
                    </a>
</div>
</div>

<div className="mt-24">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">Who We Are</span>
<h3 className="text-3xl font-semibold text-gray-900 mb-6 tracking-tight">We Are The Best Creative Digital Agency Helping Brands Worldwide</h3>
<p className="text-gray-500 mb-8 leading-relaxed">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud xercitation ullamco.
                        </p>
<a className="inline-flex items-center gap-2 text-sm font-semibold text-gray-900 hover:text-blue-600 transition-colors" href="#projects">
                            View Projects <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="w-12 h-12 rounded-full bg-white text-blue-600 flex items-center justify-center mb-4 shadow-sm border border-gray-100">
<span className="text-sm font-bold">92%</span>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Smart Solution</h4>
<p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
</div>

<div className="p-6 bg-gray-50 rounded-2xl border border-gray-100">
<div className="w-12 h-12 rounded-full bg-white text-green-600 flex items-center justify-center mb-4 shadow-sm border border-gray-100">
<span className="text-sm font-bold">90%</span>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-2">Efective Strategy</h4>
<p className="text-sm text-gray-500">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-xl">
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">Our Services</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">What Service We Offer</h2>
<p className="text-gray-500">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua</p>
</div>
<a className="inline-flex items-center justify-center px-6 py-3 text-sm font-medium text-gray-900 bg-white border border-gray-200 rounded-lg hover:bg-gray-50 transition-all" href="#">
                    All Services
                </a>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">PPC Advertising</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-blue-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-purple-50 text-purple-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pie-chart-2-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Web Analytics</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-purple-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:magnifer-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">SEO</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-orange-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:graph-up-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">CRO</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-green-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-pink-50 text-pink-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:share-circle-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Social Media Marketing</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-pink-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 hover:border-blue-100 hover:shadow-lg transition-all duration-300 group">
<div className="w-14 h-14 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:monitor-smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-gray-900 mb-3">Web Design &amp; Development</h3>
<p className="text-gray-500 text-sm mb-6 leading-relaxed">Lorem ipsum dolor sit amet, consectet adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore</p>
<a className="inline-flex items-center text-sm font-medium text-gray-900 group-hover:text-indigo-600 transition-colors" href="#">
                        Learn More <iconify-icon className="ml-1" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-900 text-white overflow-hidden relative">
<div className="absolute inset-0 opacity-10 bg-[url('https://grainy-gradients.vercel.app/noise.svg')]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-3xl lg:text-5xl font-semibold tracking-tight mb-6">Still Confused About Our Features? Get A Consultation</h2>
<p className="text-gray-400 mb-10 text-lg">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat</p>
<a className="inline-flex items-center gap-2 px-8 py-4 text-sm font-medium text-gray-900 bg-white rounded-full hover:bg-gray-100 transition-all" href="#contact">
                Let’s Talk
            </a>
</div>
</section>

<section className="py-24">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">Our Team</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Meet With Professional Team</h2>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-6 gap-y-12">

<div className="group col-span-2 md:col-span-1 lg:col-span-1">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Md. Ershad Hossain</h3>
<p className="text-xs text-gray-500 mb-2">Web Design &amp; Developmet Specialist</p>
<p className="text-xs text-gray-400 italic">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden relative">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Asad</h3>
<p className="text-xs text-gray-500">Advertising &amp; Analytics Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Saeed</h3>
<p className="text-xs text-gray-500">Senior Google Ads Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Jubair</h3>
<p className="text-xs text-gray-500">Facebook Ads Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Hanif</h3>
<p className="text-xs text-gray-500">Senior Web Analytics Expert</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Imran Ahmed</h3>
<p className="text-xs text-gray-500">CRO &amp; Data Visualization Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Jubair</h3>
<p className="text-xs text-gray-500">Google Shopping &amp; Merchant Center Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Md. Ershad Hossain</h3>
<p className="text-xs text-gray-500">Web Design &amp; Developmet Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Ibrahim</h3>
<p className="text-xs text-gray-500">Paid Social Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Alexa Mcleod</h3>
<p className="text-xs text-gray-500">Paid Social Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Samad</h3>
<p className="text-xs text-gray-500">Senior Google Ads Expert</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Alamin</h3>
<p className="text-xs text-gray-500">Organic Social Media Specialist</p>
</div>

<div className="group">
<div className="aspect-[4/5] bg-gray-100 rounded-2xl mb-4 overflow-hidden">
<div className="w-full h-full bg-gray-200 group-hover:bg-gray-300 transition-colors flex items-end justify-center">
<iconify-icon className="text-gray-400 opacity-50 translate-y-4" icon="solar:user-linear" width="100"></iconify-icon>
</div>
</div>
<h3 className="text-lg font-semibold text-gray-900">Firoj</h3>
<p className="text-xs text-gray-500">Senior SEO Specialist</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 overflow-hidden">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">Testimonials</span>
<h2 className="text-3xl lg:text-4xl font-semibold tracking-tight text-gray-900">What They Say About Us</h2>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:bg-white transition"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>

<div className="flex overflow-x-auto snap-x snap-mandatory gap-6 px-6 pb-8 no-scrollbar max-w-[100vw]">

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua uis nostrud exercitation"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<h4 className="text-sm font-bold text-gray-900">Betsy Schultz</h4>
<p className="text-xs text-gray-500">CEO Brand</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua uis nostrud exercitation"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<h4 className="text-sm font-bold text-gray-900">Beverley Allan</h4>
<p className="text-xs text-gray-500">Blogger</p>
</div>
</div>
</div>

<div className="snap-center shrink-0 w-[85vw] md:w-[400px] p-8 bg-white rounded-2xl border border-gray-100 shadow-sm">
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="16"></iconify-icon>
</div>
<p className="text-gray-600 mb-6 italic leading-relaxed">"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incidid ut labore et dolore magna aliqua uis nostrud exercitation"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200"></div>
<div>
<h4 className="text-sm font-bold text-gray-900">Myla Mcmanus</h4>
<p className="text-xs text-gray-500">Entrepreneur</p>
</div>
</div>
</div>
</div>

<div className="max-w-7xl mx-auto px-6 mt-16 border-t border-gray-200 pt-10 text-center">
<span className="text-xs font-semibold text-gray-400 uppercase tracking-widest mb-4 block">Trusted Partners</span>
<div className="flex justify-center items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all flex-wrap">
<span className="text-xl font-bold flex items-center gap-2 text-gray-900">
<div className="w-6 h-6 bg-gray-900 rounded"></div> Stape Partner
               </span>
<span className="text-xl font-bold flex items-center gap-2 text-gray-900">
<div className="w-6 h-6 bg-blue-500 rounded flex items-center justify-center text-white text-[10px]">G</div> Google Partner
               </span>
</div>
</div>
</section>

<section className="py-24">
<div className="max-w-3xl mx-auto px-6">
<div className="text-center mb-12">
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">FAQ</span>
<h2 className="text-3xl font-semibold tracking-tight text-gray-900">General Questions</h2>
<p className="text-gray-500 mt-2">Lorem ipsum dolor sit amet, consectetur adipiscing elit</p>
</div>
<div className="space-y-4">
<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-medium hover:bg-gray-50 transition">
                        Where Can I Find More Information?
                        <span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
</details>
<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-medium hover:bg-gray-50 transition">
                        What Are Your Terms and Conditions?
                         <span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
</details>
<details className="group bg-white border border-gray-100 rounded-xl overflow-hidden [&amp;_summary::-webkit-details-marker]:hidden">
<summary className="flex cursor-pointer items-center justify-between gap-1.5 p-6 text-gray-900 font-medium hover:bg-gray-50 transition">
                        What Kinds of Payment Do You Accept?
                         <span className="relative size-5 shrink-0">
<iconify-icon className="absolute inset-0 size-5 opacity-100 group-open:opacity-0 transition-opacity" icon="solar:add-circle-linear" width="20"></iconify-icon>
<iconify-icon className="absolute inset-0 size-5 opacity-0 group-open:opacity-100 transition-opacity" icon="solar:minus-circle-linear" width="20"></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-gray-500 text-sm leading-relaxed">
                         Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16">

<div>
<span className="text-sm font-semibold text-blue-600 tracking-wide uppercase mb-2 block">Get More Information</span>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">Ready to Take Your Business to the Next Level?</h2>
<p className="text-gray-500 mb-10 leading-relaxed">
                        We help ambitious businesses unlock their full digital potential. From modern web design to smart WordPress solutions, our team delivers strategies that drive growth and lasting impact. Let’s collaborate to transform your vision into reality reach out today and take the next step toward success.
                    </p>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-900 shrink-0 shadow-sm">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Email Address</h4>
<p className="text-gray-500">info@dev-sppcdigital</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-12 h-12 rounded-lg bg-white border border-gray-100 flex items-center justify-center text-gray-900 shrink-0 shadow-sm">
<iconify-icon icon="solar:phone-calling-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium text-gray-900">Whatsapp</h4>
<p className="text-gray-500">+8801521473869</p>
</div>
</div>
</div>
<div className="mt-10">
<p className="text-sm text-gray-400 mb-4">Stay connected with us on social media for updates, insights, and more.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:facebook-rect"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:linkedin-rect"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:twitter-bird"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-gray-900 hover:text-white transition-colors" href="#"><iconify-icon icon="brandico:youtube"></iconify-icon></a>
</div>
</div>
</div>

<div className="bg-white p-8 md:p-10 rounded-3xl border border-gray-100 shadow-xl shadow-gray-200/50">
<form className="space-y-5">
<div className="grid md:grid-cols-2 gap-5">
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Your Name</label>
<input className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="John Doe" type="text"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Add Email</label>
<input className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="john@example.com" type="email"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Enter your website</label>
<input className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none" placeholder="https://yoursite.com" type="url"/>
</div>
<div className="space-y-2">
<label className="text-sm font-medium text-gray-700">Your Massage</label>
<textarea className="w-full bg-gray-50 border-0 rounded-lg px-4 py-3 text-sm focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all outline-none resize-none" placeholder="How can we help you?" rows="4"></textarea>
</div>
<button className="w-full py-4 bg-gray-900 text-white rounded-lg font-medium hover:bg-gray-800 transition-all hover:shadow-lg" type="button">
                            Let's Talk
                        </button>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-gray-950 text-gray-400 pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

<div>
<a className="text-xl font-semibold tracking-tight text-white flex items-center gap-2 mb-6" href="#">
<span className="w-8 h-8 bg-white text-gray-900 flex items-center justify-center rounded-lg text-xs font-bold">SP</span>
                        SPPC digital
                    </a>
<p className="text-sm leading-relaxed mb-6">
                        We Are The Best Creative SPPC Digital Agency Helping Brands Worldwide.
                    </p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:globe-linear" width="20"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:letter-linear" width="20"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-white font-medium mb-6">Quick Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Useful Links</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms and Conditions</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">FAQ</a></li>
</ul>
</div>

<div>
<h4 className="text-white font-medium mb-6">Contacts Us</h4>
<ul className="space-y-3 text-sm">
<li>Mail Us: info@dev-sppcdigital</li>
<li>WhatsApp Us: +8801521473869</li>
<li>Telegram Us: @sppc</li>
<li className="pt-4 text-xs uppercase tracking-widest text-gray-600">Work Hours</li>
<li>9 AM - 10 PM , Saturday- Friday</li>
</ul>
</div>
</div>
<div className="border-t border-gray-900 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs">
<p>Copyright © 2026. All rights reserved.</p>
<p>Creative SPPC Digital Agency Design by <span className="text-white">Ershad</span></p>
</div>
</div>
</footer>

    </>
  );
}
