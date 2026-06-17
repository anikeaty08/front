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
      

<div className="bg-[#002367] text-white/90 text-xs py-2.5 px-6 border-b border-white/10">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<span className="hidden md:block opacity-70">Reach International Center of Education</span>
<div className="flex items-center gap-6 ml-auto">
<a className="flex items-center gap-2 hover:text-white transition-colors" href="tel:+251946007777">
<iconify-icon icon="solar:phone-linear" width="14"></iconify-icon>
<span>+251-946 00 77 77</span>
</a>
<a className="flex items-center gap-2 hover:text-white transition-colors" href="mailto:office@riceethiopia.com">
<iconify-icon icon="solar:letter-linear" width="14"></iconify-icon>
<span>office@riceethiopia.com</span>
</a>
</div>
</div>
</div>

<nav className="sticky top-0 z-50 bg-white/95 backdrop-blur-md border-b border-slate-200">
<div className="flex h-20 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex-shrink-0" href="/">
<img alt="RICE Logo" className="h-12 w-auto object-contain" src="https://www.riceethiopia.com/images/logo.png"/>
</a>

<div className="hidden lg:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#002367] rounded-md hover:bg-slate-50 transition-all" href="#">Home</a>
<a className="hover:text-[#002367] hover:bg-slate-50 transition-all text-sm font-medium text-slate-600 rounded-md pt-2 pr-4 pb-2 pl-4" href="#about" style={{}}>About Us</a>
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#002367] rounded-md hover:bg-slate-50 transition-all" href="#admission">Admission</a>
<a className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-[#002367] rounded-md hover:bg-slate-50 transition-all" href="#contact">Contact</a>
<div className="w-px h-6 bg-slate-200 mx-3"></div>
<button className="p-2 text-slate-400 hover:text-[#002367] transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</div>

<button className="lg:hidden p-2 text-slate-600" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-40 bg-white transform translate-x-full transition-transform duration-300 lg:hidden flex flex-col p-8" id="mobile-menu">
<div className="flex justify-end mb-8">
<button className="p-2 text-slate-600" id="close-menu-btn">
<iconify-icon icon="solar:close-circle-linear" width="32"></iconify-icon>
</button>
</div>
<div className="flex flex-col gap-6 text-xl font-serif text-[#002367]">
<a className="border-b border-slate-100 pb-4" href="#">Home</a>
<a className="border-b border-slate-100 pb-4" href="#about">About Us</a>
<a className="border-b border-slate-100 pb-4" href="#admission">Admission</a>
<a className="border-b border-slate-100 pb-4" href="#employment">Employment</a>
<a className="pb-4" href="#contact">Contact</a>
</div>
</div>

<section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-slate-900">

<div className="absolute inset-0 z-0">
<img alt="RICE Students" className="w-full h-full object-cover opacity-60" src="https://www.riceethiopia.com/images/2025/10/20/2g9a7977-min.jpg"/>
<div className="bg-gradient-to-t from-[#002367]/90 via-[#002367]/40 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="relative z-10 max-w-7xl mx-auto px-6 w-full text-center md:text-left">
<div className="md:max-w-2xl fade-in-up">
<span className="inline-block py-1 px-3 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 text-white text-xs font-medium tracking-wide mb-6 uppercase">Since 2014 in Addis Ababa</span>
<h1 className="md:text-7xl lg:text-8xl leading-[0.95] text-5xl text-white tracking-tight font-serif mb-6">
                    Building the <br/><i className="font-serif w-[24px] h-[24px]" data-icon-replaced="true" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}}>Whole Child</i>
</h1>
<p className="text-lg md:text-xl text-slate-200 mb-10 font-light leading-relaxed max-w-lg">
                    RICE is an international school primarily serving the Ethiopian community using Ethiopian teachers, dedicated to enriching lives through quality education.
                </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-white text-[#002367] rounded-lg font-semibold hover:bg-slate-50 transition-all hover:scale-[1.02]" href="#admission">
<span>Admission Info</span>
<iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-2 px-8 py-3.5 bg-transparent border border-white/30 text-white rounded-lg font-medium hover:bg-white/10 transition-all" href="#contact">
                        Contact Us
                    </a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">

<div className="group hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white border-slate-200 border rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-sm">
<div className="w-12 h-12 bg-blue-50 rounded-xl flex items-center justify-center text-[#002367] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:book-bookmark-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#002367] mb-3 tracking-tight">Curriculum &amp; Character</h3>
<p className="text-slate-600 leading-relaxed">
                        Enriching the lives of children through learning, by providing quality education that develops the whole child through the Cambridge International curriculum.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-teal-50 rounded-xl flex items-center justify-center text-[#43615e] mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:test-tube-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-[#43615e] mb-3 tracking-tight">Modern Laboratories</h3>
<p className="text-slate-600 leading-relaxed">
                        Students from Year 7 to Year 13 at our Agona Campus use dedicated, modern laboratories for hands-on scientific learning and engagement.
                    </p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300">
<div className="w-12 h-12 bg-indigo-50 rounded-xl flex items-center justify-center text-indigo-900 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<h3 className="text-2xl font-serif text-indigo-900 mb-3 tracking-tight">Ethiopian Educators</h3>
<p className="text-slate-600 leading-relaxed">
                        Our ethos is to purposely employ Ethiopian teachers, developing their skills to become educators who skillfully deliver an international curriculum.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="about">

<div className="absolute top-0 right-0 w-1/3 h-full bg-slate-50 -skew-x-12 translate-x-32 hidden lg:block z-0"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-8">
<h2 className="text-4xl md:text-5xl font-serif text-[#002367] mb-8 tracking-tight">Welcome to <span className="italic">RICE</span></h2>
<div className="prose prose-lg text-slate-600 text-balance">
<p className="mb-6">
                            At Reach International Center of Education, we believe that every child is a person full of potential waiting to be developed. Since 2014, we have been nurturing young minds through the Cambridge International curriculum, empowering students from Year 1 to Year 13 with knowledge, character, and community values.
                        </p>
<p className="mb-8">
                            Our school is more than a place of learning. It’s a vibrant community where curiosity is celebrated, innovation is encouraged, and lifelong skills are built. Whether in the classroom, through our yearly Science Fair, or in community activities, we are committed to inspiring students to dream big and achieve even more.
                        </p>
<p className="text-xl font-medium text-[#002367] font-serif italic border-l-4 border-[#002367] pl-6">
                            "Welcome to a journey of excellence, creativity, and growth. Welcome to RICE."
                        </p>
</div>
</div>

<div className="lg:col-span-4 sticky top-24">
<div className="bg-gradient-to-br from-[#eaebf0] to-white p-8 rounded-2xl border border-[#aac0d5]/30 shadow-lg">
<div className="flex items-center gap-3 mb-4 text-[#002367]">
<iconify-icon icon="solar:bell-bing-linear" width="24"></iconify-icon>
<span className="text-xs font-semibold uppercase tracking-wider">Admissions Update</span>
</div>
<h3 className="text-3xl font-serif text-[#002367] mb-4">New Parents...</h3>
<p className="text-slate-600 mb-8">
                            We offer Year 1 to Year 13 (Preparatory to Grade 12). Registration for the 2026/2027 school year is now open.
                        </p>
<a className="flex w-full items-center justify-center gap-2 px-6 py-3 bg-[#002367] text-white rounded-lg font-semibold hover:bg-blue-900 transition-colors shadow-lg shadow-blue-900/20" href="#admission">
                            Learn More
                        </a>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">

<div className="relative order-2 md:order-1">
<div className="absolute -inset-4 bg-slate-100 rounded-2xl transform -rotate-2 z-0"></div>
<img alt="Student Studying" className="relative z-10 w-full rounded-xl shadow-xl border border-slate-200" src="https://www.riceethiopia.com/images/2025/10/25/sil08087-min-1.jpg"/>
</div>

<div className="order-1 md:order-2">
<h2 className="text-3xl md:text-4xl font-serif text-[#002367] mb-8 tracking-tight leading-tight">
                        We are a Cambridge International School
                    </h2>
<ul className="space-y-6">
<li className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#002367] mt-1">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">World-Class Curriculum</h4>
<p className="text-slate-600 text-sm leading-relaxed">Using frameworks designed to be flexible and culturally sensitive, developing deep subject knowledge and higher-order thinking.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#002367] mt-1">
<iconify-icon icon="solar:diploma-verified-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Global Qualifications</h4>
<p className="text-slate-600 text-sm leading-relaxed">Students work towards Cambridge IGCSEs and International A Levels, recognized by universities and employers worldwide.</p>
</div>
</li>
<li className="flex gap-4">
<div className="flex-shrink-0 w-6 h-6 rounded-full bg-blue-100 flex items-center justify-center text-[#002367] mt-1">
<iconify-icon icon="solar:chart-square-linear" width="14"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-1">Rigorous Standards</h4>
<p className="text-slate-600 text-sm leading-relaxed">Adhering to quality standards and pedagogical approaches that emphasize student-centered learning.</p>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="relative py-32 bg-fixed bg-center bg-cover" style={{backgroundImage: 'url(\'https://www.riceethiopia.com/images/2025/11/20/photo_2025-11-20-13.38.00.jpeg\')'}}>
<div className="absolute inset-0 bg-black/50"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6 drop-shadow-lg tracking-tight">
                Standard football courts available on both campuses
            </h2>
<div className="w-24 h-1 bg-white mx-auto rounded-full"></div>
</div>
</section>

<section className="py-0">

<div className="grid lg:grid-cols-2">
<div className="bg-[#43615e] text-white p-12 lg:p-24 flex flex-col justify-center">
<div className="max-w-lg mx-auto lg:mx-0">
<span className="text-[#aac0d5] font-medium tracking-wide uppercase text-sm mb-2 block">Preparatory to Grade 5</span>
<h2 className="text-4xl md:text-5xl font-serif mb-6 tracking-tight">Year 1-6</h2>
<h3 className="text-xl font-medium mb-4 text-white/90">Meskel Flower Campus</h3>
<p className="text-white/70 mb-8 leading-relaxed">
                        The Meskel Flower Campus caters to students in Year 1 through Year 6. Dedicated to providing quality education for younger students aligned with our mission.
                    </p>
<div className="flex items-center gap-2 text-white/90 mb-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Meskel Flower Area</span>
</div>
<div className="flex items-center gap-2 text-white/90">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>+251-946 00 77 77</span>
</div>
</div>
</div>
<div className="h-96 lg:h-auto relative">
<img alt="Meskel Flower Campus" className="absolute inset-0 w-full h-full object-cover" src="https://www.riceethiopia.com/images/2025/10/20/freepik__background__51769-min1.png"/>
</div>
</div>

<div className="h-16 w-full bg-[#c4d6eb] relative overflow-hidden">
<svg className="absolute bottom-0 w-full h-full text-[#c4d6eb] fill-current" preserveaspectratio="none" viewbox="0 0 1200 120">
<path d="M321.39,56.44c58-10.79,114.16-30.13,172-41.86,82.39-16.72,168.19-17.73,250.45-.39C823.78,31,906.67,72,985.66,92.83c70.05,18.48,146.53,26.09,214.34,3V0H0V27.35A600.21,600.21,0,0,0,321.39,56.44Z"></path>
</svg>
</div>

<div className="grid lg:grid-cols-2">
<div className="h-96 lg:h-auto relative order-2 lg:order-1">
<img alt="Agona Campus" className="absolute inset-0 w-full h-full object-cover" src="https://www.riceethiopia.com/images/2025/11/24/freepik__background__59845-min-min.png"/>
</div>
<div className="bg-[#c4d6eb] text-slate-900 p-12 lg:p-24 flex flex-col justify-center order-1 lg:order-2">
<div className="max-w-lg mx-auto lg:mx-0">
<span className="text-[#002367] font-medium tracking-wide uppercase text-sm mb-2 block">Grade 6 to 12</span>
<h2 className="text-4xl md:text-5xl font-serif text-[#002367] mb-6 tracking-tight">Year 7-13</h2>
<h3 className="text-xl font-medium mb-4">Agona Campus</h3>
<p className="text-slate-700 mb-8 leading-relaxed">
                        Located in the Agona Cinema area. This campus focuses on providing education for older students, continuing RICE's commitment to quality learning and holistic development.
                    </p>
<div className="flex items-center gap-2 text-slate-800 mb-2">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Agona Cinema Area</span>
</div>
<div className="flex items-center gap-2 text-slate-800">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
<span>+251-946 77 77 78</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-blue-50 border-t border-white">
<div className="max-w-7xl mx-auto px-6 text-center">
<div className="max-w-3xl mx-auto mb-12">
<h2 className="text-3xl md:text-4xl font-serif text-[#002367] mb-4">RICE Leadership Team</h2>
<p className="text-slate-600">Focused on upholding the school's core purpose: "Enriching the lives of children through learning, by providing quality education that develops the whole child"</p>
</div>
<div className="rounded-2xl overflow-hidden shadow-2xl border border-white">
<img alt="Leadership Team" className="w-full h-auto" src="https://www.riceethiopia.com/images/2025/11/20/freepik__background__24777-min-1.jpg"/>
</div>
</div>
</section>

<footer className="bg-[#002367] text-white py-16 border-t border-white/10" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-12 mb-16">

<div>
<img alt="SAT Logo" className="w-32 mb-6 opacity-90 brightness-0 invert" src="https://www.riceethiopia.com/images/sat-logo-500x281-1.png"/>
<img alt="RICE Branding" className="w-full max-w-xs opacity-90 brightness-0 invert" src="https://www.riceethiopia.com/images/2025/10/25/2734-min.png"/>
</div>

<div>
<h5 className="text-lg font-serif italic font-bold mb-6 text-blue-200">Explore RICE</h5>
<ul className="space-y-3">
<li><a className="text-slate-300 hover:text-white transition-colors flex items-center gap-2" href="#admission"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Admission</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors flex items-center gap-2" href="#employment"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Employment</a></li>
<li><a className="text-slate-300 hover:text-white transition-colors flex items-center gap-2" href="#contact"><iconify-icon icon="solar:alt-arrow-right-linear"></iconify-icon> Contact</a></li>
</ul>
</div>

<div>
<h5 className="text-lg font-serif italic font-bold mb-6 text-blue-200">Contact Us</h5>
<div className="space-y-4 text-slate-300">
<div>
<p className="text-sm">Meskel Flower area</p>
<a className="hover:text-white transition-colors text-sm underline decoration-white/30" href="tel:+251946007777">+251-946 00 77 77</a>
</div>
<div className="pt-2 border-t border-white/10">
<p className="text-sm">Agona Cinema area</p>
<a className="hover:text-white transition-colors text-sm underline decoration-white/30" href="tel:+251946777778">+251-946 77 77 78</a>
</div>
</div>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center text-sm text-slate-400">
<p>© 2026 Reach International Center of Education. All Rights Reserved.</p>
<div className="flex gap-4 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a></div></div></div></footer>
    </>
  );
}
