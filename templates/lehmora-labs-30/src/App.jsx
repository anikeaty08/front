import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
}
}
}



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
      

<nav className="w-full max-w-6xl mx-auto px-6 py-8 flex justify-between items-center relative z-10">
<div className="tracking-tighter text-lg font-medium select-none">
            Lehmora Labs
        </div>
<div className="hidden sm:flex gap-8 text-sm text-neutral-500 font-medium">
<a className="hover:text-neutral-900 transition-colors duration-200" href="#about">About</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#products">Products</a>
<a className="hover:text-neutral-900 transition-colors duration-200" href="#contact">Contact</a>
</div>
<button className="sm:hidden text-neutral-600">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</nav>

<header className="relative pt-20 pb-32 md:pt-32 md:pb-48 overflow-hidden flex-grow flex items-center justify-center">

<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-neutral-100 via-white to-white opacity-80"></div>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-[400px] bg-neutral-50 rounded-full blur-[100px] -z-10 opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-neutral-900 mb-6 leading-[1.1] max-w-3xl mx-auto">
                Building modern software products for everyday users and developers.
            </h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                We design, build, and scale digital platforms used by real people.
            </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
<a className="bg-neutral-900 text-white px-7 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-800 transition-all duration-200 flex items-center gap-2 shadow-sm shadow-neutral-200" href="#products">
                    Explore our products
                    <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white border border-neutral-200 text-neutral-700 px-7 py-3.5 rounded-full text-sm font-medium hover:bg-neutral-50 hover:text-neutral-900 transition-all duration-200 flex items-center gap-2 shadow-sm shadow-transparent hover:shadow-neutral-100" href="#products">
                    Visit Famsub
                    <iconify-icon icon="solar:global-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</header>

<section className="py-24 bg-white border-t border-neutral-100 relative" id="about">
<div className="max-w-5xl mx-auto px-6">
<div className="flex flex-col md:flex-row gap-12 md:gap-24 items-start">
<div className="md:w-1/3 flex flex-col gap-4">
<div className="w-10 h-10 rounded-full bg-neutral-100 flex items-center justify-center text-neutral-600 mb-2">
<iconify-icon icon="solar:layers-linear" width="20"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-neutral-900">The Studio</h2>
</div>
<div className="md:w-2/3">
<p className="text-lg md:text-xl text-neutral-600 leading-relaxed font-normal">
                        Lehmora Labs is a product-focused tech studio. We operate on a simple principle: build digital products that solve real problems elegantly. By focusing on simplicity in design and scalability in architecture, we create tools that withstand real-world usage and deliver immediate value to users and communities.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-50/50 border-t border-neutral-100" id="products">
<div className="max-w-5xl mx-auto px-6">
<div className="mb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
<div>
<h2 className="text-3xl font-semibold tracking-tight text-neutral-900 mb-3">Our Ecosystem</h2>
<p className="text-base text-neutral-500 max-w-xl">Platforms designed to simplify shared experiences and empower creators.</p>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-white border border-neutral-200 rounded-3xl p-8 hover:shadow-md hover:shadow-neutral-200/50 transition-all duration-300 group flex flex-col h-full relative overflow-hidden">
<div className="w-14 h-14 bg-neutral-50 border border-neutral-100 rounded-2xl flex items-center justify-center text-neutral-900 mb-8 group-hover:scale-105 transition-transform duration-300">
<iconify-icon icon="solar:users-group-two-rounded-linear" width="28"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-neutral-900 mb-3">Famsub</h3>
<p className="text-base text-neutral-500 mb-10 flex-grow leading-relaxed">
                        A seamless platform that helps people share subscriptions easily and securely. Centralize billing, manage group access, and handle split payments without the friction.
                    </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-900 group/link mt-auto w-fit" href="#">
<span className="relative after:absolute after:bottom-0 after:left-0 after:w-full after:h-[1px] after:bg-neutral-900 after:origin-bottom-right after:scale-x-0 group-hover/link:after:origin-bottom-left group-hover/link:after:scale-x-100 after:transition-transform after:duration-300">Visit Famsub</span>
<iconify-icon className="text-neutral-400 group-hover/link:text-neutral-900 transition-colors" icon="solar:arrow-right-up-linear" width="16"></iconify-icon>
</a>
</div>

<div className="bg-transparent border border-dashed border-neutral-300 rounded-3xl p-8 flex flex-col h-full relative">
<div className="w-14 h-14 bg-neutral-50/50 rounded-2xl flex items-center justify-center text-neutral-400 mb-8">
<iconify-icon icon="solar:code-square-linear" width="28"></iconify-icon>
</div>
<div className="flex items-center gap-3 mb-3">
<h3 className="text-2xl font-medium tracking-tight text-neutral-700">Developer Tools</h3>
<span className="px-2.5 py-1 rounded-full bg-neutral-100 text-neutral-500 text-xs font-medium tracking-wide">Building</span>
</div>
<p className="text-base text-neutral-500 mb-10 flex-grow leading-relaxed">
                        We are currently architecting robust infrastructure and internal tools aimed at streamlining workflows for developers and digital community managers.
                    </p>
<div className="inline-flex items-center gap-2 text-sm font-medium text-neutral-400 mt-auto cursor-default">
                        Coming soon
                        <iconify-icon icon="solar:clock-circle-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 md:py-48 bg-white text-center px-6 border-t border-neutral-100">
<div className="max-w-4xl mx-auto flex flex-col items-center">
<iconify-icon className="text-neutral-300 mb-8" icon="solar:stars-linear" width="32"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-neutral-900 leading-[1.2] max-w-3xl">
                We are building the next generation of simple, scalable digital tools.
            </h2>
</div>
</section>

<footer className="py-12 border-t border-neutral-100 bg-white mt-auto" id="contact">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col items-center md:items-start gap-1">
<div className="tracking-tighter text-base font-medium text-neutral-900">Lehmora Labs</div>
<div className="text-xs text-neutral-400 font-normal">
                    © 2024. All rights reserved.
                </div>
</div>
<div className="flex gap-8 text-sm font-medium">
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Famsub</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Twitter</a>
<a className="text-neutral-500 hover:text-neutral-900 transition-colors" href="#">Contact</a>
</div>
</div>
</footer>

    </>
  );
}
