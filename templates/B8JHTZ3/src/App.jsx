import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    import createGlobe from 'https://cdn.skypack.dev/cobe'
    let phi = 0
    const canvas = document.getElementById('cobe')
    createGlobe(canvas, {
      devicePixelRatio: 2, width: 1000, height: 1000,
      phi: 0, theta: 0, dark: 0, diffuse: 1.2, scale: 1,
      mapSamples: 16000, mapBrightness: 6,
      baseColor: [0.4,0.6,0.9], markerColor: [0.3,0.5,0.9], glowColor: [0.5,0.7,0.95],
      markers: [
        { location: [37.7595, -122.4367], size: 0.04 },
        { location: [40.7128, -74.006], size: 0.1 },
        { location: [51.5074, -0.1278], size: 0.06 }
      ],
      onRender: s => { s.phi = phi; phi += 0.005 }
    })
  


    lucide.createIcons({strokeWidth:1.5});
    document.getElementById('year').textContent = new Date().getFullYear()
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="container mx-auto px-6 py-6">
<div className="flex items-center justify-between">

<div className="flex items-center">
<svg className="h-8 w-8 text-sky-600" fill="currentColor" viewbox="0 0 24 24">
<path d="M12 2a10 10 0 100 20 10 10 0 000-20zm0 18.2A8.2 8.2 0 113.8 12 8.21 8.21 0 0112 20.2z"></path>
</svg>
<span className="ml-3 text-xl tracking-tight">Pollux</span>
</div>

<div className="hidden md:flex items-center space-x-10 text-sm text-gray-600">

<div className="relative group">
<button className="hover:text-sky-600 transition-colors flex items-center gap-1">
            Solutions
            <svg className="h-4 w-4" data-lucide="chevron-down"></svg>
</button>
<div className="absolute left-0 mt-2 w-44 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 transform scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Retail</a>
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Wholesale</a>
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Startups</a>
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Services</a>
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Government</a>
</div>
</div>
<a className="hover:text-sky-600 transition-colors" href="#">Early Access</a>
<a className="hover:text-sky-600 transition-colors" href="#">Pricing</a>
<a className="hover:text-sky-600 transition-colors" href="#">Support &amp; Implementation</a>

<div className="relative group">
<button className="hover:text-sky-600 transition-colors flex items-center gap-1">
            Company
            <svg className="h-4 w-4" data-lucide="chevron-down"></svg>
</button>
<div className="absolute left-0 mt-2 w-40 bg-white border border-gray-200 rounded-md shadow-lg opacity-0 transform scale-95 translate-y-1 group-hover:opacity-100 group-hover:scale-100 group-hover:translate-y-0 pointer-events-none group-hover:pointer-events-auto transition-all duration-200">
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">About Us</a>
<a className="block px-4 py-2 text-gray-600 hover:bg-gray-50" href="#">Careers</a>
</div>
</div>
<a className="hover:text-sky-600 transition-colors" href="#">Blog</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden md:block bg-sky-600 text-white rounded-md px-4 py-2 hover:bg-sky-700 transition-all text-sm">
          Schedule a Demo
        </button>
<button className="text-sm border border-gray-300 rounded-md px-4 py-2 hover:bg-sky-50 transition-all">
          Log In
        </button>
</div>
</div>
</nav>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-sky-100/50 via-white to-white"></div>
<div className="container mx-auto px-6 py-16 md:py-24 relative z-10">
<div className="flex flex-col md:flex-row items-center">

<div className="md:w-1/2 mb-12 md:mb-0 md:pr-12">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-light tracking-tighter mb-6 leading-tight" style={{fontFamily: '\'Poppins\',sans-serif'}}>
            Simplicity is power
          </h1>
<p className="text-gray-600 text-xl md:text-2xl mb-8 max-w-lg font-extralight tracking-wide">
            Your business deserves better. You’re growing, but your tools aren’t keeping up.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="bg-sky-600 text-white rounded-md px-6 py-3 hover:bg-sky-700 transition-all">
              Schedule a Demo
            </button>
<button className="bg-transparent border border-gray-300 text-gray-700 rounded-md px-6 py-3 hover:bg-sky-50 transition-all">
              Get Started Today
            </button>
</div>
</div>

<div className="md:w-1/2 relative">
<div className="relative h-[500px] w-[500px] mx-auto">
<div className="absolute inset-0 bg-gradient-to-r from-sky-300/20 to-cyan-300/20 rounded-full blur-3xl"></div>
<canvas className="relative z-10" height="1000" id="cobe" style={{width: '500px', height: '500px'}} width="1000"></canvas>
</div>
</div>
</div>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent my-16"></div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-6">
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-gray-800">93%</p>
<p className="text-gray-500 font-extralight">Faster workflow</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-gray-800">10k+</p>
<p className="text-gray-500 font-extralight">Global users</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-gray-800">24/7</p>
<p className="text-gray-500 font-extralight">World-class support</p>
</div>
<div>
<p className="text-4xl font-light mb-1 tracking-tight text-gray-800">99.9%</p>
<p className="text-gray-500 font-extralight">Uptime guarantee</p>
</div>
</div>
</div>
</section>

<section className="container mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-14 text-center" style={{fontFamily: '\'Poppins\',sans-serif'}}>
      We’ve been there. That’s why we built Pollux
    </h2>
<div className="flex flex-col md:flex-row gap-12">
<ul className="md:w-1/2 space-y-6">
<li className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="alert-circle"></svg>
<span className="text-gray-700">Too many systems that don’t talk to each other</span>
</li>
<li className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="credit-card"></svg>
<span className="text-gray-700">Paying for tools you don’t understand</span>
</li>
<li className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="shield-off"></svg>
<span className="text-gray-700">Worried about losing control or overspending</span>
</li>
<li className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="slash"></svg>
<span className="text-gray-700">Nothing works the way it should</span>
</li>
</ul>
<div className="md:w-1/2">
<p className="text-gray-600 text-lg leading-relaxed">
          We built a better platform – simple, modern, and actually helpful. Pollux unifies your data, processes, and teams, so you can stay focused on growth instead of wrestling with technology.
        </p>
</div>
</div>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<section className="container mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-14 text-center" style={{fontFamily: '\'Poppins\',sans-serif'}}>
      Getting started with Pollux is this easy
    </h2>
<div className="grid md:grid-cols-3 gap-12">
<div className="text-center">
<div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-sky-50">
<svg className="h-6 w-6 text-sky-600" data-lucide="phone"></svg>
</div>
<h3 className="text-xl font-medium mb-2" style={{fontFamily: '\'Poppins\',sans-serif'}}>1. Schedule a call</h3>
<p className="text-gray-600">Tell us about your goals and challenges.</p>
</div>
<div className="text-center">
<div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-sky-50">
<svg className="h-6 w-6 text-sky-600" data-lucide="target"></svg>
</div>
<h3 className="text-xl font-medium mb-2" style={{fontFamily: '\'Poppins\',sans-serif'}}>2. Set goals together</h3>
<p className="text-gray-600">We map out clear milestones you care about.</p>
</div>
<div className="text-center">
<div className="mx-auto mb-4 h-12 w-12 flex items-center justify-center rounded-full bg-sky-50">
<svg className="h-6 w-6 text-sky-600" data-lucide="rocket"></svg>
</div>
<h3 className="text-xl font-medium mb-2" style={{fontFamily: '\'Poppins\',sans-serif'}}>3. Launch quickly</h3>
<p className="text-gray-600">Go live with dedicated onboarding and support.</p>
</div>
</div>
<p className="text-center text-gray-700 mt-16 text-lg">
      One platform. No headaches. No complexity.
    </p>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<section className="container mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-14 text-center" style={{fontFamily: '\'Poppins\',sans-serif'}}>
      Run your entire business from one platform
    </h2>
<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-10">
<div className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="link-2"></svg>
<span className="text-gray-700">Finances, sales, inventory all connected</span>
</div>
<div className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="zap"></svg>
<span className="text-gray-700">Fast implementation</span>
</div>
<div className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="badge-dollar-sign"></svg>
<span className="text-gray-700">Transparent pricing</span>
</div>
<div className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="users"></svg>
<span className="text-gray-700">Real support from real people</span>
</div>
<div className="flex items-start gap-4">
<svg className="h-6 w-6 text-sky-600" data-lucide="smile"></svg>
<span className="text-gray-700">Easy to understand</span>
</div>
</div>
<div className="text-center mt-16">
<button className="bg-sky-600 text-white rounded-md px-8 py-3 hover:bg-sky-700 transition-all">
        Manage your business with clarity and ease
      </button>
</div>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<section className="container mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-14 text-center" style={{fontFamily: '\'Poppins\',sans-serif'}}>
      Simple, transparent pricing
    </h2>
<div className="grid md:grid-cols-3 gap-10">

<div className="border border-gray-200 rounded-lg p-8 flex flex-col transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
<h3 className="text-xl font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Starter</h3>
<p className="text-4xl font-light mb-2 text-gray-800 tracking-tight">$29<span className="text-base text-gray-500">/mo</span></p>
<p className="text-gray-600 mb-6">Best for small teams starting out.</p>
<ul className="space-y-3 text-gray-700 mb-8">
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Core modules</li>
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Email support</li>
</ul>
<button className="mt-auto bg-sky-600 text-white rounded-md px-5 py-3 hover:bg-sky-700 transition-all">
          Choose Starter
        </button>
</div>

<div className="border-2 border-sky-600 rounded-lg p-8 flex flex-col transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
<h3 className="text-xl font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Growth</h3>
<p className="text-4xl font-light mb-2 text-gray-800 tracking-tight">$99<span className="text-base text-gray-500">/mo</span></p>
<p className="text-gray-600 mb-6">For growing businesses that need more.</p>
<ul className="space-y-3 text-gray-700 mb-8">
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Everything in Starter</li>
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Advanced reporting</li>
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Priority support</li>
</ul>
<button className="mt-auto bg-sky-600 text-white rounded-md px-5 py-3 hover:bg-sky-700 transition-all">
          Choose Growth
        </button>
</div>

<div className="border border-gray-200 rounded-lg p-8 flex flex-col transform transition-all duration-200 hover:shadow-xl hover:-translate-y-1 hover:scale-105">
<h3 className="text-xl font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Enterprise</h3>
<p className="text-4xl font-light mb-2 text-gray-800 tracking-tight">Custom</p>
<p className="text-gray-600 mb-6">Tailored for complex needs.</p>
<ul className="space-y-3 text-gray-700 mb-8">
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Dedicated manager</li>
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> 24/7 premium support</li>
<li className="flex items-center gap-2"><svg className="h-5 w-5 text-sky-600" data-lucide="check"></svg> Custom integrations</li>
</ul>
<button className="mt-auto bg-sky-600 text-white rounded-md px-5 py-3 hover:bg-sky-700 transition-all">
          Talk to Sales
        </button>
</div>
</div>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<section className="container mx-auto px-6 py-20">
<h2 className="text-3xl md:text-4xl tracking-tight font-light mb-14 text-center" style={{fontFamily: '\'Poppins\',sans-serif'}}>
      Get in touch
    </h2>
<form className="max-w-2xl mx-auto space-y-6">
<div className="flex flex-col md:flex-row gap-6">
<input className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Full name" required="" type="text"/>
<input className="flex-1 border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Email address" required="" type="email"/>
</div>
<input className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="Company" type="text"/>
<textarea className="w-full border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-sky-600" placeholder="How can we help?" rows="5"></textarea>
<button className="bg-sky-600 text-white rounded-md px-8 py-3 hover:bg-sky-700 transition-all" type="submit">
        Submit
      </button>
</form>
</section>
<div className="h-px bg-gradient-to-r from-transparent via-gray-200 to-transparent"></div>

<footer className="container mx-auto px-6 py-16">
<div className="grid md:grid-cols-4 gap-10 text-sm text-gray-600">
<div>
<h4 className="font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Sitemap</h4>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#">Solutions</a></li>
<li><a className="hover:text-sky-600" href="#">Pricing</a></li>
<li><a className="hover:text-sky-600" href="#">Blog</a></li>
<li><a className="hover:text-sky-600" href="#">Support</a></li>
<li><a className="hover:text-sky-600" href="#">About Us</a></li>
<li><a className="hover:text-sky-600" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-sky-600" href="#">Privacy Policy</a></li>
<li><a className="hover:text-sky-600" href="#">Terms of Use</a></li>
</ul>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Contact</h4>
<p className="mb-2">hello@pollux.io</p>
<p>+1 (555) 123-4567</p>
</div>
<div>
<h4 className="font-medium mb-4 text-gray-800" style={{fontFamily: '\'Poppins\',sans-serif'}}>Follow Us</h4>
<div className="flex gap-4">
<a aria-label="Twitter" href="#"><svg className="h-5 w-5 text-gray-500 hover:text-sky-600" data-lucide="twitter"></svg></a>
<a aria-label="LinkedIn" href="#"><svg className="h-5 w-5 text-gray-500 hover:text-sky-600" data-lucide="linkedin"></svg></a>
<a aria-label="GitHub" href="#"><svg className="h-5 w-5 text-gray-500 hover:text-sky-600" data-lucide="github"></svg></a>
</div>
</div>
</div>
<p className="text-xs text-gray-400 mt-12 text-center">© <span id="year"></span> Pollux, Inc. All rights reserved.</p>
</footer>






    </>
  );
}
