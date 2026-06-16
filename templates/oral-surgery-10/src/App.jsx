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
pine: {
50: '#f4f7f5',
100: '#e3ebe5',
200: '#c5d9cb',
300: '#9abba5',
400: '#6d957b',
500: '#4a755a',
600: '#385c46',
700: '#2f4b3a',
800: '#283e31',
900: '#223329',
},
river: {
50: '#f0f6fa',
100: '#e0ecf4',
200: '#c0dceb',
300: '#90c2de',
400: '#5ba3cd',
500: '#3686b2',
600: '#276a92',
700: '#215577',
800: '#1f4863',
900: '#1d3d53',
},
sun: {
50: '#fffbeb',
100: '#fef3c7',
200: '#fde68a',
300: '#fcd34d',
400: '#fbbf24',
500: '#f59e0b',
600: '#d97706',
700: '#b45309',
800: '#92400e',
900: '#78350f',
}
}
}
}
}



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6">
<div className="flex justify-between items-center h-24">

<a className="flex items-center gap-2 group" href="#">
<div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-pine-600 to-pine-800 text-white shadow-sm ring-1 ring-black/5">
<svg className="h-5 w-5" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m8 3 4 8 5-5 5 15H2L8 3z"></path>
</svg>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-zinc-500 hover:text-pine-700 transition-colors" href="#">
              Patient Info
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-pine-700 transition-colors" href="#">
              Procedures
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-pine-700 transition-colors" href="#">
              Meet Us
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-pine-700 transition-colors" href="#">
              Surgical Instructions
            </a>
<a className="text-sm font-medium text-zinc-500 hover:text-pine-700 transition-colors" href="#">
              Contact
            </a>
</div>

<div className="flex items-center gap-5">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-zinc-600 hover:text-river-600 transition-colors" href="tel:6032987557">
<i className="w-4 h-4 text-river-500" data-lucide="phone"></i>
<span>(603) 298-7557</span>
</a>
<a className="hidden md:inline-flex h-10 items-center justify-center rounded-lg bg-pine-700 px-6 text-sm font-medium text-white shadow-sm transition-all hover:bg-pine-800 hover:shadow-md focus:outline-none focus:ring-2 focus:ring-pine-500 focus:ring-offset-2" href="#">
              Register Online
            </a>
<button className="lg:hidden p-2 text-zinc-900">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-52 lg:pb-36 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Oral Surgery Office" className="w-full h-full object-cover" src="https://www.pbhshosting.com/wp-content/client-mu-plugins/rw-assets/_public/media/photo263_w2000_h900.jpg"/>
<div className="absolute inset-0 bg-gradient-to-r from-pine-900/95 via-river-900/70 to-pine-900/40"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-6">
<div className="max-w-3xl">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/10 text-white/90 text-xs font-medium mb-8">
<span className="flex h-2 w-2 rounded-full bg-sun-400 shadow-[0_0_8px_rgba(251,191,36,0.5)]"></span>
            Serving West Lebanon, Claremont &amp; New London
          </div>
<h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-white mb-6">
            Oral Surgery &amp;
            <br className="hidden lg:block"/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-river-200 to-sun-200">
              Dental Implants.
            </span>
</h1>
<p className="text-lg lg:text-xl text-zinc-200 font-light max-w-xl mb-10 leading-relaxed">
            Specializing in complex implant-based oral reconstruction and single
            tooth implant replacements. Experience and expertise you can trust.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex h-12 items-center justify-center rounded-lg bg-white px-8 text-sm font-medium text-pine-900 transition-all hover:bg-pine-50 hover:text-pine-950 shadow-lg shadow-black/5" href="#">
              Patient Registration
            </a>
<a className="inline-flex h-12 items-center justify-center rounded-lg border border-white/20 bg-white/5 px-8 text-sm font-medium text-white transition-all hover:bg-white/10 hover:border-white/30 backdrop-blur-sm" href="#">
              Meet the Doctors
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-b border-zinc-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">
<div>
<h2 className="text-3xl lg:text-4xl font-medium text-zinc-900 tracking-tight mb-6">
              Upper Valley Oral Surgery
            </h2>
<div className="space-y-6 text-lg text-zinc-500 font-light leading-relaxed">
<p>
<span className="font-medium text-pine-700">
                  Jill L. Brinkman, DDS, MD
                </span>
                and
                <span className="font-medium text-river-700">
                  Keith C. Kealey, DMD
                </span>
                , practice a full scope of oral and maxillofacial surgery with
                expertise ranging from complete jaw &amp; implant rehabilitation
                to wisdom tooth removal all of which can be performed while you
                comfortably sleep under deep or light IV anesthesia/sedation.
              </p>
<p>
                We perform a full range of extractions, dental implant and bone
                grafting procedures. We provide extensive “in office” facial
                rejuvenation and enhancement procedures along with full body
                contouring utilizing Dual CoolSculpting.
              </p>
</div>
</div>
<div className="bg-river-50/50 p-10 rounded-2xl border border-river-100 relative overflow-hidden">
<div className="absolute top-0 right-0 -mt-4 -mr-4 w-32 h-32 bg-sun-100/50 rounded-full blur-3xl"></div>
<i className="text-river-400 mb-6 opacity-80 w-10 h-10" data-lucide="quote"></i>
<h3 className="text-xl font-medium text-zinc-900 tracking-tight mb-4">
              Our Mission Statement
            </h3>
<p className="text-sm leading-relaxed text-zinc-600 font-light mb-8">
              Established in 1972, our mission is to develop and maintain a
              highly regarded role in our local dental community by providing
              essential oral surgery care on an outstanding level to our
              patients. The heart of our practice is based on a pledge to our
              patients of honesty, integrity, and open communication.
            </p>
<div className="flex items-center gap-2 text-xs font-semibold text-pine-600 uppercase tracking-widest">
              — Patient First Philosophy
            </div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-zinc-50/30">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-14">
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight">
            Procedures &amp; Care
          </h2>
<p className="text-zinc-500 mt-3 font-light text-lg">
            Comprehensive oral and maxillofacial solutions.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-river-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-river-50 flex items-center justify-center text-river-600 mb-6 group-hover:scale-110 group-hover:bg-river-100 transition-all duration-300">
<i className="w-6 h-6" data-lucide="shield-check"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">
              Dental Implants
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
              Implants are made of titanium and function like natural teeth.
              When you lose a tooth, you lose both the root and the crown.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-river-700 hover:text-river-900 transition-colors" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-pine-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-pine-50 flex items-center justify-center text-pine-600 mb-6 group-hover:scale-110 group-hover:bg-pine-100 transition-all duration-300">
<i className="w-6 h-6" data-lucide="activity"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">
              Wisdom Teeth
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
              Impacted wisdom teeth should be removed before root structure is
              fully developed. We ensure comfort through anesthesia.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-pine-700 hover:text-pine-900 transition-colors" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<div className="group p-8 bg-white rounded-2xl border border-zinc-200 hover:border-sun-200 hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300">
<div className="h-12 w-12 rounded-xl bg-sun-50 flex items-center justify-center text-sun-600 mb-6 group-hover:scale-110 group-hover:bg-sun-100 transition-all duration-300">
<i className="w-6 h-6" data-lucide="sparkles"></i>
</div>
<h3 className="text-lg font-medium text-zinc-900 tracking-tight mb-3">
              Facial Rejuvenation
            </h3>
<p className="text-sm text-zinc-500 font-light leading-relaxed mb-8">
              Featuring CoolSculpting fat-freezing technology and other
              rejuvenation procedures. Proven science for body contouring.
            </p>
<a className="inline-flex items-center gap-2 text-sm font-medium text-sun-700 hover:text-sun-900 transition-colors" href="#">
              Learn more
              <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-zinc-900 tracking-tight">
              Meet the Doctors
            </h2>
<p className="text-zinc-500 mt-2 font-light text-lg">
              Highly trained experts in oral and maxillofacial surgery.
            </p>
</div>
<a className="group flex items-center gap-2 text-sm font-medium text-zinc-900 hover:text-pine-700 transition-colors" href="#">
            Meet the full staff
            <i className="w-4 h-4 transition-transform group-hover:translate-x-1" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100">
<img alt="Jill L. Brinkman, DDS, MD" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://www.uvos.org/wp-content/uploads/sites/3805/2020/06/dr_jill_brinkman.jpg"/>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium text-zinc-900">
                  Jill L. Brinkman
                </h3>
<span className="inline-flex items-center rounded-full bg-pine-50 px-2.5 py-0.5 text-xs font-medium text-pine-700">
                  DDS, MD
                </span>
</div>
<p className="text-sm text-zinc-500 font-light mb-6 line-clamp-2">
                Originally from Baltimore, Maryland, Dr. Brinkman earned her
                Master’s degree in Advanced Head &amp; Neck Anatomy /
                Craniofacial Anatomy.
              </p>
<a className="text-sm font-medium text-pine-700 hover:text-pine-900 underline decoration-pine-200 underline-offset-4 hover:decoration-pine-500 transition-all" href="#">
                View Biography
              </a>
</div>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-zinc-200 bg-white hover:border-zinc-300 transition-all">
<div className="aspect-[4/3] w-full overflow-hidden bg-zinc-100">
<img alt="Keith C. Kealey, DMD" className="h-full w-full object-cover object-top transition-transform duration-700 group-hover:scale-105" src="https://www.uvos.org/wp-content/uploads/sites/3805/2020/06/kealy-e1591796666879.jpg"/>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-2">
<h3 className="text-xl font-medium text-zinc-900">
                  Keith C. Kealey
                </h3>
<span className="inline-flex items-center rounded-full bg-river-50 px-2.5 py-0.5 text-xs font-medium text-river-700">
                  DMD
                </span>
</div>
<p className="text-sm text-zinc-500 font-light mb-6 line-clamp-2">
                Dr. Keith C. Kealey joined Upper Valley Oral Surgery in 2011,
                bringing extensive expertise in oral and maxillofacial
                procedures.
              </p>
<a className="text-sm font-medium text-river-700 hover:text-river-900 underline decoration-river-200 underline-offset-4 hover:decoration-river-500 transition-all" href="#">
                View Biography
              </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-pine-900 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-river-500/20 rounded-full blur-[100px]"></div>
<div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-96 h-96 bg-sun-500/10 rounded-full blur-[100px]"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 border-b border-white/10 pb-16">

<div className="space-y-4">
<div className="flex items-center gap-3 text-pine-200 mb-2">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="text-xs font-medium uppercase tracking-wider text-sun-300">
                West Lebanon
              </span>
</div>
<p className="text-lg font-light text-zinc-100">
              16 Airport Road
              <br/>
              West Lebanon, NH 03784
            </p>
<a className="inline-flex items-center gap-2 text-river-200 hover:text-white transition-colors" href="tel:6032987557">
              (603) 298-7557
              <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 text-pine-200 mb-2">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="text-xs font-medium uppercase tracking-wider text-sun-300">
                Claremont
              </span>
</div>
<p className="text-lg font-light text-zinc-100">
              110 Charlestown Road
              <br/>
              Claremont, NH 03743
            </p>
<a className="inline-flex items-center gap-2 text-river-200 hover:text-white transition-colors" href="tel:6035428797">
              (603) 542-8797
              <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>

<div className="space-y-4">
<div className="flex items-center gap-3 text-pine-200 mb-2">
<i className="w-5 h-5" data-lucide="map-pin"></i>
<span className="text-xs font-medium uppercase tracking-wider text-sun-300">
                New London
              </span>
</div>
<p className="text-lg font-light text-zinc-100">
              299 Main Street
              <br/>
              New London, NH 03257
            </p>
<a className="inline-flex items-center gap-2 text-river-200 hover:text-white transition-colors" href="tel:6035264433">
              (603) 526-4433
              <i className="w-3 h-3" data-lucide="arrow-up-right"></i>
</a>
</div>
</div>
<div className="pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row gap-4 md:gap-8 items-center text-zinc-400 text-xs font-light">
<span>© 2025 Upper Valley Oral Surgery. All Rights Reserved.</span>
<span className="hidden md:inline text-zinc-700">|</span>
<a className="hover:text-white transition-colors" href="#">
              Privacy Policy
            </a>
<a className="hover:text-white transition-colors" href="#">
              Disclaimer
            </a>
<a className="hover:text-white transition-colors" href="#">Sitemap</a>
</div>
<div className="flex gap-4">
<a className="p-2 rounded-full bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="facebook"></i>
</a>
<a className="p-2 rounded-full bg-white/5 text-zinc-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
</div>
</div>
</div>
</section>


    </>
  );
}
