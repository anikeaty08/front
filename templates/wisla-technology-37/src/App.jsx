import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');


document.write(new Date().getFullYear())
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden lg:flex justify-center items-center gap-16 py-4 bg-white text-base border-b border-neutral-100 w-full px-6">
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<span className="block font-medium text-neutral-900">Headquarters</span>
<span className="text-sm">Tech Hub, Innovation Park</span>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<span className="block font-medium text-neutral-900">Email Address</span>
<span className="text-sm">info@wislatech.com</span>
</div>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600" icon="solar:clock-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div>
<span className="block font-medium text-neutral-900">Support Hours</span>
<span className="text-sm">Mon-Sun: 24/7 Monitoring</span>
</div>
</div>
</div>

<nav className="bg-neutral-900 w-full sticky top-0 z-50">
<div className="max-w-7xl mx-auto flex h-20 items-center justify-between pl-0 pr-6 lg:px-0">
<div className="bg-blue-600 h-full flex items-center px-8 lg:px-12 shrink-0">
<a className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white" href="#">
<iconify-icon className="text-3xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    Wisla Tech
                </a>
</div>

<button className="lg:hidden text-white p-2">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>

<div className="hidden lg:flex flex-1 justify-end items-center gap-8 px-8 text-base font-medium text-white">
<a className="text-blue-400 transition-colors" href="#">HOME</a>
<a className="hover:text-blue-400 transition-colors" href="#">ABOUT</a>
<a className="hover:text-blue-400 transition-colors" href="#">SOLUTIONS</a>
<a className="hover:text-blue-400 transition-colors" href="#">CASE STUDIES</a>
<a className="hover:text-blue-400 transition-colors" href="#">UPDATES</a>
<a className="hover:text-blue-400 transition-colors" href="#">CONTACT</a>
<button className="hover:text-blue-400 transition-colors ml-4">
<iconify-icon className="text-xl" icon="solar:magnifer-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</button>
</div>
</div>
</nav>

<section className="relative bg-white pt-20 pb-32 lg:pt-0 lg:pb-0 overflow-hidden flex items-center min-h-[600px]">
<div className="absolute right-0 top-0 w-full lg:w-1/2 h-full hidden lg:block">

<img alt="Fleet moving securely at night" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1511527661048-7fe73d85e9a4?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/30"></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10 w-full flex">
<div className="w-full lg:w-1/2 lg:pr-16 lg:py-24">
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-neutral-900 leading-tight mb-8">
                    State-of-the-Art Security Solutions
                </h1>
<p className="text-lg text-neutral-600 mb-10 leading-relaxed max-w-lg">
                    We specialize in empowering businesses and individuals with state-of-the-art technology to protect what matters most. Experience reliability, visibility, and total control.
                </p>
<div className="flex flex-wrap gap-4">
<a className="inline-flex items-center justify-center bg-blue-600 text-white text-base font-medium px-8 py-4 transition-transform hover:-translate-y-0.5 shadow-lg shadow-blue-600/20" href="#">
                        GET SECURED
                    </a>
<a className="inline-flex items-center justify-center bg-white border border-neutral-300 text-neutral-900 text-base font-medium px-8 py-4 transition-all hover:bg-neutral-50 hover:-translate-y-0.5" href="#">
                        OUR SERVICES
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-neutral-100">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:-translate-y-2 shadow-lg shadow-blue-600/20">
<iconify-icon className="text-3xl" icon="solar:routing-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">Vehicle Tracking</h3>
<p className="text-lg text-neutral-600 leading-relaxed px-4">Real-time GPS tracking and fleet management designed to give you complete visibility and control over your vehicles.</p>
</div>
<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:-translate-y-2 shadow-lg shadow-blue-600/20">
<iconify-icon className="text-3xl" icon="solar:gas-station-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">Fuel Monitoring</h3>
<p className="text-lg text-neutral-600 leading-relaxed px-4">High-accuracy monitoring systems crafted to eliminate fuel theft, reduce waste, and optimize overall fuel consumption.</p>
</div>
<div className="flex flex-col items-center group">
<div className="w-20 h-20 bg-blue-600 rounded-full flex items-center justify-center mb-6 text-white transition-transform duration-300 group-hover:-translate-y-2 shadow-lg shadow-blue-600/20">
<iconify-icon className="text-3xl" icon="solar:videocamera-record-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-neutral-900 mb-4">CCTV Surveillance</h3>
<p className="text-lg text-neutral-600 leading-relaxed px-4">High-definition dash cams and premises surveillance ensuring constant vigilance and ultimate peace of mind.</p>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative grid grid-cols-2 gap-4 h-[500px]">
<img alt="Map Location Tracking" className="w-full h-64 object-cover mt-12 rounded-sm shadow-sm" src="https://images.unsplash.com/photo-1508269785890-a7d1a580667d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="High Definition CCTV" className="w-full h-full object-cover row-span-2 rounded-sm shadow-sm" src="https://images.unsplash.com/photo-1557597774-9d273605dfa9?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<img alt="Fleet Car Interior" className="w-full h-64 object-cover rounded-sm shadow-sm" src="https://images.unsplash.com/photo-1514316454349-750a7fd3da3a?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div>
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600">About Wisla Technology</h2>
<div className="space-y-6 text-lg text-neutral-600 leading-relaxed">
<p>Wisla Technology Limited is a premier provider of comprehensive, high-tech security and monitoring solutions. We specialize in bringing next-generation security infrastructure to businesses and individuals, ensuring your most valuable assets are consistently protected.</p>
<p>Our integrated solutions encompass everything from advanced car alarm systems and electric fences to detailed vehicle tracking. We don't just sell technology—we provide peace of mind through unwavering innovation, continuous monitoring, and unmatched reliability.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">

<img alt="Security Control and Monitoring Room" className="w-full h-[600px] object-cover rounded-sm shadow-md" src="https://images.unsplash.com/photo-1621905251918-48416bd8575a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-10 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600">Core Services Integrated</h2>
<div className="space-y-8">
<div className="flex gap-6">
<div className="shrink-0 w-14 h-14 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-xl font-semibold text-blue-600 shadow-sm">01</div>
<div>
<p className="text-lg text-neutral-600 leading-relaxed"><strong className="font-medium text-neutral-900">Vehicle Tracking:</strong> Real-time GPS tracking and detailed fleet management systems designed to give you complete visibility over every vehicle you own.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-14 h-14 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-xl font-semibold text-blue-600 shadow-sm">02</div>
<div>
<p className="text-lg text-neutral-600 leading-relaxed"><strong className="font-medium text-neutral-900">Car Alarm &amp; Anti-Theft:</strong> Advanced car alarm systems that provide uncompromising anti-theft measures for premium vehicle protection.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-14 h-14 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-xl font-semibold text-blue-600 shadow-sm">03</div>
<div>
<p className="text-lg text-neutral-600 leading-relaxed"><strong className="font-medium text-neutral-900">Dash Cams &amp; CCTV:</strong> High-definition surveillance deployed within vehicles and across premises, guaranteeing total and constant vigilance.</p>
</div>
</div>
<div className="flex gap-6">
<div className="shrink-0 w-14 h-14 rounded-full border border-neutral-300 bg-white flex items-center justify-center text-xl font-semibold text-blue-600 shadow-sm">04</div>
<div>
<p className="text-lg text-neutral-600 leading-relaxed"><strong className="font-medium text-neutral-900">Electric Fences &amp; Perimeter:</strong> Robust electric fencing and integrated general security solutions to deter threats and ensure maximum protection.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white text-center pb-40">
<div className="max-w-3xl mx-auto px-6 mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">Meet Our Security Experts</h2>
<p className="text-lg text-neutral-600 leading-relaxed">Our certified technicians and integrators work around the clock to provide robust perimeter security and technical excellence for all your specific needs.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 text-left">

<div className="relative group mt-8">
<div className="absolute top-0 bottom-12 left-0 w-16 bg-neutral-900 flex flex-col items-center justify-center gap-6 text-white z-10 transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-facebook"></iconify-icon></a>
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-twitter"></iconify-icon></a>
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-linkedin"></iconify-icon></a>
</div>
<div className="relative h-[400px] overflow-hidden ml-0 group-hover:ml-16 transition-all duration-300">
<img alt="Robita Folen" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581092795360-fd1ca04f0952?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative bg-white border border-neutral-100 p-6 mx-4 -mt-10 shadow-lg text-center z-20 transition-transform duration-300 group-hover:-translate-y-2">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">Robita Folen</h3>
<p className="text-base text-neutral-500">Fleet Tracking Specialist</p>
</div>
</div>

<div className="relative group mt-8">
<div className="absolute top-0 bottom-12 left-0 w-16 bg-blue-600 flex flex-col items-center justify-center gap-6 text-white z-10 transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100 shadow-md">
<a className="hover:text-blue-200" href="#"><iconify-icon className="text-xl" icon="bx:bxl-facebook"></iconify-icon></a>
<a className="hover:text-blue-200" href="#"><iconify-icon className="text-xl" icon="bx:bxl-twitter"></iconify-icon></a>
<a className="hover:text-blue-200" href="#"><iconify-icon className="text-xl" icon="bx:bxl-linkedin"></iconify-icon></a>
</div>
<div className="relative h-[400px] overflow-hidden ml-0 group-hover:ml-16 transition-all duration-300">
<img alt="Maktek Moo" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative bg-white border border-neutral-100 p-6 mx-4 -mt-10 shadow-lg text-center z-20 transition-transform duration-300 group-hover:-translate-y-2 border-b-2 border-b-blue-600">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">Maktek Moo</h3>
<p className="text-base text-neutral-500">CCTV &amp; Surveillance Lead</p>
</div>
</div>

<div className="relative group mt-8">
<div className="absolute top-0 bottom-12 left-0 w-16 bg-neutral-900 flex flex-col items-center justify-center gap-6 text-white z-10 transition-transform duration-300 -translate-x-full opacity-0 group-hover:translate-x-0 group-hover:opacity-100">
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-facebook"></iconify-icon></a>
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-twitter"></iconify-icon></a>
<a className="hover:text-blue-400" href="#"><iconify-icon className="text-xl" icon="bx:bxl-linkedin"></iconify-icon></a>
</div>
<div className="relative h-[400px] overflow-hidden ml-0 group-hover:ml-16 transition-all duration-300">
<img alt="David James" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<div className="relative bg-white border border-neutral-100 p-6 mx-4 -mt-10 shadow-lg text-center z-20 transition-transform duration-300 group-hover:-translate-y-2">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 mb-1">David James</h3>
<p className="text-base text-neutral-500">Perimeter Systems Integrator</p>
</div>
</div>
</div>
</section>

<div className="relative">

<section className="bg-blue-600 pt-24 pb-48 text-center text-white">
<div className="max-w-3xl mx-auto px-6 mb-16">
<h2 className="text-4xl font-semibold tracking-tight mb-6 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-white">Proven Reliability</h2>
<p className="text-lg leading-relaxed font-medium text-blue-100">Our integrated tracking and security systems provide actionable data and complete visibility, delivering uncompromised uptime and safety for all our clients.</p>
</div>

<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10 translate-y-24">
<div className="bg-white p-12 shadow-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300 rounded-sm">
<iconify-icon className="text-6xl text-blue-200 mb-6" icon="solar:bus-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-5xl font-semibold tracking-tight text-neutral-900 mb-2">500+</h3>
<p className="text-lg font-medium text-neutral-600">Vehicles Tracked</p>
</div>
<div className="bg-white p-12 shadow-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300 rounded-sm">
<iconify-icon className="text-6xl text-blue-200 mb-6" icon="solar:videocamera-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-5xl font-semibold tracking-tight text-neutral-900 mb-2">50K</h3>
<p className="text-lg font-medium text-neutral-600">Cameras Active</p>
</div>
<div className="bg-white p-12 shadow-xl flex flex-col items-center justify-center transition-transform hover:-translate-y-2 duration-300 rounded-sm">
<iconify-icon className="text-6xl text-blue-200 mb-6" icon="solar:server-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-5xl font-semibold tracking-tight text-neutral-900 mb-2">99.9%</h3>
<p className="text-lg font-medium text-neutral-600">System Uptime</p>
</div>
</div>
</section>

<section className="bg-gray-50 pt-48 pb-24 text-center">
<div className="max-w-3xl mx-auto px-6 mb-16">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">Featured Packages</h2>
<p className="text-lg text-neutral-600 leading-relaxed">Choose from our tailored security packages that meet specific commercial or residential needs perfectly.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 rounded-sm">
<div className="bg-blue-600 py-10 flex flex-col items-center text-white relative">
<div className="absolute bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-600 translate-y-full z-10"></div>
<iconify-icon className="text-5xl mb-4" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight">Fleet Tracking</h3>
</div>
<div className="py-16 text-center text-neutral-900 flex items-baseline justify-center">
<span className="text-3xl font-medium text-neutral-400">$</span>
<span className="text-6xl font-semibold tracking-tight mx-1">29</span>
<span className="text-xl font-medium text-neutral-400">/mo</span>
</div>
</div>

<div className="bg-white shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 rounded-sm relative scale-105 z-10 shadow-blue-900/10">
<div className="bg-blue-700 py-10 flex flex-col items-center text-white relative">
<div className="absolute bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-blue-700 translate-y-full z-10"></div>
<iconify-icon className="text-5xl mb-4 text-blue-100" icon="solar:gas-station-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight text-white">Fuel Monitoring</h3>
</div>
<div className="py-16 text-center text-neutral-900 flex items-baseline justify-center">
<span className="text-3xl font-medium text-neutral-400">$</span>
<span className="text-6xl font-semibold tracking-tight mx-1 text-blue-600">49</span>
<span className="text-xl font-medium text-neutral-400">/mo</span>
</div>
</div>

<div className="bg-white shadow-lg overflow-hidden transition-transform hover:-translate-y-2 duration-300 border border-neutral-200 rounded-sm">
<div className="bg-white py-10 flex flex-col items-center text-neutral-900 relative border-b border-neutral-100">
<div className="absolute bottom-0 w-0 h-0 border-l-[20px] border-l-transparent border-r-[20px] border-r-transparent border-t-[20px] border-t-white translate-y-full z-10"></div>
<iconify-icon className="text-5xl text-blue-600 mb-4" icon="solar:camera-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<h3 className="text-2xl font-semibold tracking-tight">CCTV System</h3>
</div>
<div className="py-16 text-center text-neutral-900 flex items-baseline justify-center">
<span className="text-3xl font-medium text-neutral-400">$</span>
<span className="text-6xl font-semibold tracking-tight mx-1">99</span>
<span className="text-xl font-medium text-neutral-400">/mo</span>
</div>
</div>
</div>
</section>
</div>

<section className="py-24 bg-white border-y border-neutral-200">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative">
<img alt="Leadership" className="w-full h-[500px] object-cover rounded-sm shadow-xl" src="https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div>
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600">Voice Of Leadership</h2>
<p className="text-lg text-neutral-600 leading-relaxed italic mb-8">
                    "At Wisla Technology, we don’t just sell systems; we provide peace of mind through innovation and reliability. Our goal is to ensure your assets are meticulously protected with the highest caliber of tracking, anti-theft algorithms, and perimeter monitoring available in the world today."
                </p>
<div className="mb-4">

<span className="text-4xl font-medium text-blue-600" style={{fontFamily: '\'Brush Script MT\', cursive', opacity: '0.8'}}>Marcus Wisla</span>
</div>
<h4 className="text-xl font-semibold text-neutral-900">Marcus Wisla</h4>
<p className="text-base text-neutral-500 uppercase tracking-wide mt-1">Founder &amp; CEO</p>
</div>
</div>
</section>

<section className="grid grid-cols-1 lg:grid-cols-2">

<div className="bg-blue-600 text-white p-12 md:p-24 flex flex-col justify-center order-1 lg:order-1">
<h2 className="text-4xl font-semibold tracking-tight mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-white">Our Mission</h2>
<p className="text-lg text-blue-100 font-medium leading-relaxed mb-8">
                To empower businesses and individuals with state-of-the-art security technology to protect what matters most. We continually integrate next-generation dash cams, GPS tracking systems, and automated monitoring arrays to build an unbreakable shield around your valuable assets.
            </p>
<ul className="space-y-3 text-lg font-medium text-white">
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-none"></span> Provide unrivaled tracking visibility</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-none"></span> Prevent unauthorized fuel loss</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-white rounded-none"></span> Ensure 24/7 premises security</li>
</ul>
</div>

<div className="order-2 lg:order-2 h-[400px] lg:h-auto">
<img alt="Electric Fencing Security Perimeter" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1496368077930-c1e31b4e5b44?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="order-3 lg:order-3 h-[400px] lg:h-auto">
<img alt="High Tech Control Server Room" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1550751827-4bd374c3f58b?auto=format&amp;fit=crop&amp;w=1000&amp;q=80"/>
</div>

<div className="bg-neutral-900 text-white p-12 md:p-24 flex flex-col justify-center order-4 lg:order-4">
<h2 className="text-4xl font-semibold tracking-tight mb-8 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-16 after:h-1 after:bg-blue-600">Our Vision</h2>
<p className="text-lg text-neutral-300 leading-relaxed mb-8">
                To be the foremost provider of highly integrated, tailored security systems, driving peace of mind and operational efficiency. By leveraging robust electric fences, cutting-edge car alarms, and high-accuracy software, we establish total control over environments and fleets globally.
            </p>
<ul className="space-y-3 text-lg text-neutral-200">
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-none"></span> Innovation in fleet management</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-none"></span> Absolute operational reliability</li>
<li className="flex items-center gap-3"><span className="w-2 h-2 bg-blue-600 rounded-none"></span> Creating secure environments</li>
</ul>
</div>
</section>

<section className="py-24 bg-gray-50 relative pb-32">

<div className="absolute top-0 w-full h-1/2 bg-white"></div>
<div className="relative max-w-4xl mx-auto px-6 mt-12 z-10">
<div className="bg-neutral-900 rounded-md text-center pt-20 px-8 md:px-16 pb-16 relative border-t-4 border-blue-600 shadow-2xl">

<div className="absolute -top-12 left-1/2 -translate-x-1/2">
<img alt="Client Testimonial" className="w-24 h-24 rounded-full border-4 border-white object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=150&amp;q=80"/>
</div>
<iconify-icon className="absolute top-10 left-10 text-4xl text-neutral-700/50 rotate-180" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<p className="text-xl md:text-2xl font-medium text-neutral-300 leading-relaxed italic mb-8 relative z-10">
                    "Wisla Technology completely overhauled our fleet management. Their real-time GPS tracking and fuel monitoring systems eradicated theft instantly. We have unparalleled visibility over our entire logistics operation now."
                </p>
<iconify-icon className="absolute bottom-20 right-10 text-4xl text-neutral-700/50" icon="solar:chat-square-quote-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>

<div className="flex justify-center text-amber-400 mb-2 gap-1">
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
<iconify-icon className="text-xl" icon="solar:star-bold"></iconify-icon>
</div>
<h4 className="text-xl font-semibold text-white">James Arison</h4>
<p className="text-sm text-neutral-400 mt-1">Logistics Director</p>

<div className="flex justify-center gap-2 mt-8 absolute -bottom-4 left-1/2 -translate-x-1/2">
<button className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-blue-600 transition-colors"></button>
<button className="w-4 h-2 rounded-full bg-blue-600"></button>
<button className="w-2 h-2 rounded-full bg-neutral-300 hover:bg-blue-600 transition-colors"></button>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gray-50 border-t border-neutral-200">
<div className="max-w-3xl mx-auto px-6 mb-16 text-center">
<h2 className="text-4xl font-semibold tracking-tight text-neutral-900 mb-6 relative inline-block pb-4 after:content-[''] after:absolute after:bottom-0 after:left-1/2 after:-translate-x-1/2 after:w-16 after:h-1 after:bg-blue-600">Security Insights &amp; Updates</h2>
<p className="text-lg text-neutral-600 leading-relaxed">Follow us for security tips, industry insights, product updates, and client success stories to stay ahead of potential threats.</p>
</div>
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="bg-white shadow-sm border border-neutral-100 p-6 flex flex-col group hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-center mb-4">
<span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm">TECHNOLOGY</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 text-center mb-6 px-4 group-hover:text-blue-600 transition-colors">
<a href="#">The Impact of Real-time Fleet GPS Tracking</a>
</h3>
<div className="overflow-hidden mb-6 h-48 relative">

<img alt="GPS Map Interface" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1565043589221-1a6fd9ae45c7?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<p className="text-base text-neutral-600 text-center mb-6 flex-1">Explore our latest case study detailing how high-accuracy tracking reduces operating costs entirely.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 12 Nov, 2023</span>
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 14 Comments</span>
</div>
</article>

<article className="bg-white shadow-sm border border-neutral-100 p-6 flex flex-col group hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-center mb-4">
<span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm">SECURITY TIPS</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 text-center mb-6 px-4 group-hover:text-blue-600 transition-colors">
<a href="#">Maximizing Perimeter Defense Effectiveness</a>
</h3>
<div className="overflow-hidden mb-6 h-48 relative">

<img alt="Security Camera Focus" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1584433144859-1fc3ab64a957?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<p className="text-base text-neutral-600 text-center mb-6 flex-1">Industry insights on integrating robust electric fences with HD CCTV for maximum deterrence.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 28 Oct, 2023</span>
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 08 Comments</span>
</div>
</article>

<article className="bg-white shadow-sm border border-neutral-100 p-6 flex flex-col group hover:shadow-xl transition-shadow duration-300">
<div className="flex justify-center mb-4">
<span className="bg-blue-600 text-white text-xs font-semibold px-3 py-1 uppercase tracking-wider rounded-sm">PRODUCT UPDATES</span>
</div>
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 text-center mb-6 px-4 group-hover:text-blue-600 transition-colors">
<a href="#">New Anti-Theft Alarm Features Released</a>
</h3>
<div className="overflow-hidden mb-6 h-48 relative">

<img alt="Car Alarm Remotes" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1554744512-d6c603f27c54?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
</div>
<p className="text-base text-neutral-600 text-center mb-6 flex-1">Discover the exclusive features added to our car alarm systems allowing advanced mobile control.</p>
<div className="flex items-center justify-between pt-4 border-t border-neutral-100 text-sm text-neutral-500 font-medium">
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 15 Sep, 2023</span>
<span className="flex items-center gap-2"><iconify-icon className="text-base" icon="solar:chat-round-line-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> 22 Comments</span>
</div>
</article>
</div>
</section>

<footer className="bg-[#1A1A1A] pt-20 pb-10 text-neutral-400">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16 border-b border-neutral-800 pb-16">

<div>
<a className="flex items-center gap-2 text-2xl font-semibold tracking-tight text-white mb-6" href="#">
<iconify-icon className="text-3xl text-blue-600" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
                    Wisla Tech
                </a>
<p className="text-base leading-relaxed mb-6">
                    A leading provider of comprehensive, high-tech security and monitoring solutions, ensuring absolute peace of mind.
                </p>
<div className="flex gap-3">
<a className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="bx:bxl-facebook"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="bx:bxl-twitter"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="bx:bxl-linkedin"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-blue-600 text-white flex items-center justify-center hover:bg-white hover:text-blue-600 transition-colors" href="#"><iconify-icon className="text-xl" icon="bx:bxl-youtube"></iconify-icon></a>
</div>
</div>

<div>
<h4 className="text-xl font-semibold text-white mb-6">Get In Touch</h4>
<ul className="space-y-4 text-base">
<li className="flex items-start gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0 mt-0.5" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>Tech Hub Innovation Park<br/>Global Headquarters</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:phone-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>+1 (800) 555-WISLA</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:letter-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>info@wislatech.com</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-xl text-blue-600 shrink-0" icon="solar:global-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<span>www.wislatech.com</span>
</li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold text-white mb-6">Useful Links</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Security Tips</a></li>
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Product Updates</a></li>
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Case Studies</a></li>
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> About Us</a></li>
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Core Services</a></li>
<li><a className="hover:text-blue-500 transition-colors flex items-center gap-2" href="#"><iconify-icon className="text-sm" icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Terms &amp; Privacy</a></li>
</ul>
</div>

<div>
<h4 className="text-xl font-semibold text-white mb-6">Our Solutions</h4>
<ul className="space-y-3 text-base">
<li><a className="hover:text-blue-500 transition-colors" href="#">Vehicle Tracking</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Fuel Monitoring</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Car Alarm Systems</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Dash Cams &amp; CCTV</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">Electric Fences</a></li>
<li><a className="hover:text-blue-500 transition-colors" href="#">General Security</a></li>
</ul>
</div>
</div>
<div className="text-center text-sm font-medium">
            Copyright ©  Wisla Technology Limited. All rights reserved.
        </div>
</footer>

    </>
  );
}
