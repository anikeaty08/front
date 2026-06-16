import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialize Lucide icons with specific stroke width
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 bg-white/80 backdrop-blur-md border-b border-slate-200/60">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="flex h-20 items-center justify-between">

<div className="flex lg:flex-1">
<a className="-m-1.5 p-1.5 flex items-center gap-3" href="#">
<div className="h-10 w-10 bg-[#0B192C] rounded-lg flex items-center justify-center border border-[#cda145]/30">
<i className="text-[#cda145] h-5 w-5" data-lucide="book-open"></i>
</div>
<div className="flex flex-col">
<span className="text-lg font-semibold tracking-tight text-[#0B192C] leading-none">KENT</span>
<span className="text-xs font-medium tracking-widest text-slate-500 mt-1">PUBLIC SCHOOL</span>
</div>
</a>
</div>

<nav className="hidden lg:flex lg:gap-x-10">
<a className="text-base font-medium text-slate-600 hover:text-[#0B192C] transition-colors" href="#">About Us</a>
<a className="text-base font-medium text-slate-600 hover:text-[#0B192C] transition-colors" href="#">Academics</a>
<a className="text-base font-medium text-slate-600 hover:text-[#0B192C] transition-colors" href="#">Admissions</a>
<a className="text-base font-medium text-slate-600 hover:text-[#0B192C] transition-colors" href="#">Campus Life</a>
</nav>

<div className="hidden lg:flex lg:flex-1 lg:justify-end">
<a className="text-base font-medium bg-[#0B192C] text-white px-5 py-2.5 rounded-full hover:bg-slate-800 transition-all shadow-sm flex items-center gap-2" href="#">
                        Apply Now
                        <i className="h-4 w-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="flex lg:hidden">
<button className="-m-2.5 inline-flex items-center justify-center rounded-md p-2.5 text-slate-700" type="button">
<i className="h-6 w-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</header>
<main className="flex-grow pt-20">

<section className="relative overflow-hidden bg-[#0B192C] text-white py-24 sm:py-32">

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#cda145 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="mx-auto max-w-7xl px-6 lg:px-8 relative z-10 flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 border border-white/20 mb-8 backdrop-blur-sm">
<i className="h-4 w-4 text-[#cda145]" data-lucide="award"></i>
<span className="text-sm font-medium text-slate-200">Established 1994</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tight max-w-4xl text-white mb-6 leading-[1.1]">
                    Learning Today, <span className="text-[#cda145]">Leading Tomorrow.</span>
</h1>
<p className="text-lg sm:text-xl text-slate-300 max-w-2xl mb-10 leading-relaxed">
                    A tradition of excellence fostering global perspectives, holistic development, and the leaders of the future through innovative education.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center gap-2 bg-[#cda145] text-[#0B192C] text-base font-semibold px-8 py-3.5 rounded-full hover:bg-[#b88f3a] transition-colors" href="#">
                        Explore Admissions
                    </a>
<a className="inline-flex justify-center items-center gap-2 bg-white/5 text-white border border-white/20 text-base font-medium px-8 py-3.5 rounded-full hover:bg-white/10 transition-colors" href="#">
                        Take a Virtual Tour
                        <i className="h-5 w-5" data-lucide="play-circle"></i>
</a>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="mb-16 md:text-center">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-[#0B192C] mb-4">The Kent Advantage</h2>
<p className="text-lg text-slate-500 max-w-2xl md:mx-auto">Our holistic approach ensures every student discovers their potential in a nurturing and technologically advanced environment.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-12">

<div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-blue-50 flex items-center justify-center mb-6 text-[#0B192C] border border-blue-100 group-hover:bg-[#0B192C] group-hover:text-white transition-colors">
<i className="h-6 w-6" data-lucide="globe"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Global Curriculum</h3>
<p className="text-base text-slate-600 leading-relaxed">Integrating international standards with local values to prepare students for a rapidly evolving global landscape.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-amber-50 flex items-center justify-center mb-6 text-[#cda145] border border-amber-100 group-hover:bg-[#cda145] group-hover:text-white transition-colors">
<i className="h-6 w-6" data-lucide="sprout"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Holistic Growth</h3>
<p className="text-base text-slate-600 leading-relaxed">Beyond academics, we focus on arts, sports, and character building to develop well-rounded individuals.</p>
</div>

<div className="group rounded-2xl border border-slate-200 bg-slate-50 p-8 hover:bg-white hover:shadow-xl hover:shadow-slate-200/50 hover:border-slate-300 transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-indigo-50 flex items-center justify-center mb-6 text-indigo-600 border border-indigo-100 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<i className="h-6 w-6" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-slate-900 mb-3">Expert Faculty</h3>
<p className="text-base text-slate-600 leading-relaxed">Our educators are passionate mentors dedicated to inspiring curiosity and fostering a lifelong love for learning.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-y border-slate-200 bg-slate-50">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 text-center divide-x divide-slate-200/50">
<div className="flex flex-col items-center justify-center">
<dt className="text-base font-medium text-slate-500 mb-2">Established</dt>
<dd className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B192C]">1994</dd>
</div>
<div className="flex flex-col items-center justify-center">
<dt className="text-base font-medium text-slate-500 mb-2">Student to Teacher</dt>
<dd className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B192C]">15:1</dd>
</div>
<div className="flex flex-col items-center justify-center">
<dt className="text-base font-medium text-slate-500 mb-2">Alumni Worldwide</dt>
<dd className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B192C]">10k+</dd>
</div>
<div className="flex flex-col items-center justify-center">
<dt className="text-base font-medium text-slate-500 mb-2">Campus Area</dt>
<dd className="text-4xl md:text-5xl font-semibold tracking-tight text-[#0B192C]">25 Ac</dd>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="mx-auto max-w-5xl px-6 lg:px-8">
<div className="bg-[#0B192C] rounded-3xl overflow-hidden relative">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 rounded-full bg-[#cda145]/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-64 h-64 rounded-full bg-blue-500/10 blur-3xl"></div>
<div className="px-8 py-16 md:p-16 relative z-10 flex flex-col md:flex-row items-center justify-between gap-10 text-center md:text-left">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Begin Your Journey With Us</h2>
<p className="text-lg text-slate-300">Join a community dedicated to excellence. Admissions for the upcoming academic year are now open.</p>
</div>
<div className="flex-shrink-0">
<a className="inline-flex justify-center items-center bg-white text-[#0B192C] text-base font-semibold px-8 py-4 rounded-full hover:bg-slate-50 transition-colors shadow-lg" href="#">
                                Start Application
                            </a>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 border-t border-slate-800 pt-16 pb-8 text-slate-400">
<div className="mx-auto max-w-7xl px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a className="flex items-center gap-3 mb-6" href="#">
<i className="text-[#cda145] h-6 w-6" data-lucide="book-open"></i>
<span className="text-lg font-semibold tracking-tight text-white">KENT PUBLIC SCHOOL</span>
</a>
<p className="text-base text-slate-400 mb-6">Learning Today, Leading Tomorrow. Fostering excellence since 1994.</p>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-6 tracking-tight">Academics</h4>
<ul className="space-y-4">
<li><a className="text-base hover:text-white transition-colors" href="#">Primary School</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Middle School</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">High School</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Curriculum Details</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-6 tracking-tight">Admissions</h4>
<ul className="space-y-4">
<li><a className="text-base hover:text-white transition-colors" href="#">How to Apply</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Fee Structure</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">Scholarships</a></li>
<li><a className="text-base hover:text-white transition-colors" href="#">FAQs</a></li>
</ul>
</div>
<div>
<h4 className="text-base font-semibold text-white mb-6 tracking-tight">Contact</h4>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<i className="h-5 w-5 mt-0.5 text-slate-500" data-lucide="map-pin"></i>
<span className="text-base">123 Education Lane,<br/>Knowledge Park, 110001</span>
</li>
<li className="flex items-center gap-3">
<i className="h-5 w-5 text-slate-500" data-lucide="phone"></i>
<span className="text-base">+91 123 456 7890</span>
</li>
<li className="flex items-center gap-3">
<i className="h-5 w-5 text-slate-500" data-lucide="mail"></i>
<span className="text-base">info@kentpublicschool.in</span>
</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-800 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-sm text-slate-500">© 1994-2024 Kent Public School. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="facebook"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="twitter"></i></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><i className="h-5 w-5" data-lucide="instagram"></i></a>
</div>
</div>
</div>
</footer>


    </>
  );
}
