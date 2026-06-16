import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="sticky top-0 z-50 w-full border-b border-gray-200 bg-white/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-gray-900 flex items-center justify-center">
<span className="text-white text-xs font-semibold tracking-tighter">PCS</span>
</div>
<span className="text-sm font-semibold tracking-tight text-gray-900">Pioneer Convent School</span>
</div>
<a className="text-sm font-medium text-gray-600 hover:text-gray-900 transition-colors" href="#contact">Contact</a>
</div>
</nav>

<main className="flex-1 w-full max-w-6xl mx-auto px-6 py-20 md:py-32">

<div className="max-w-3xl mb-20 animate-fade-in-up">
<div className="inline-flex items-center gap-2 rounded-full border border-gray-200 bg-white px-3 py-1.5 text-xs font-medium text-gray-600 shadow-sm mb-8">
<iconify-icon className="text-gray-400 text-sm" icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon>
                Admissions Open 2026 &amp; 2027
            </div>
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight text-gray-900 mb-6 leading-tight">
                Empowering the next generation of thinkers and leaders.
            </h1>
<p className="text-lg text-gray-600 max-w-xl leading-relaxed">
                Welcome to Pioneer Convent School. We are dedicated to providing academic excellence and fostering a nurturing environment for holistic student development.
            </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="group rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-100">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 mb-8 group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700 text-xl" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-3">From the Principal</h2>
<p className="text-sm md:text-base text-gray-600 mb-8 leading-relaxed">
                    "Our mission is to cultivate a learning space where curiosity is encouraged, discipline is instilled, and every child is empowered to reach their highest potential."
                </p>
<div className="flex items-center gap-4 mt-auto">
<div className="h-10 w-10 rounded-full bg-gray-100 border border-gray-200 flex items-center justify-center">
<span className="text-gray-600 text-xs font-semibold tracking-tighter">AP</span>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Archna Pandey</p>
<p className="text-xs text-gray-500 mt-0.5">School Principal</p>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-200 bg-white p-8 md:p-10 shadow-sm hover:shadow-md transition-shadow duration-300 animate-fade-in-up delay-200" id="contact">
<div className="flex h-12 w-12 items-center justify-center rounded-xl border border-gray-200 bg-gray-50 mb-8 group-hover:bg-gray-100 transition-colors">
<iconify-icon className="text-gray-700 text-xl" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-8">Visit &amp; Contact Us</h2>
<div className="space-y-6">

<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Campus Address</p>
<p className="text-sm text-gray-600 mt-1.5 leading-relaxed">
                                6VRQ+G8R, Kashipur Jagardeopur<br/>
                                Varanasi, Uttar Pradesh 221311
                            </p>
</div>
</div>
<div className="h-px w-full bg-gray-100"></div>

<div className="flex items-start gap-4">
<div className="mt-1 flex-shrink-0">
<iconify-icon className="text-gray-400 text-lg" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Phone Number</p>
<a className="text-sm text-gray-600 mt-1.5 inline-block hover:text-gray-900 transition-colors" href="tel:07054335808">
                                070543 35808
                            </a>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-gray-200 bg-white mt-auto">
<div className="max-w-6xl mx-auto px-6 py-8 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-gray-500">
<p>© Pioneer Convent School. All rights reserved.</p>
<p>Admissions Open 2026 &amp; 2027</p>
</div>
</footer>

    </>
  );
}
