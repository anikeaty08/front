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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Navbar background on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-white/80', 'bg-white/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-white/95', 'bg-white/80');
            }
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
      

<nav className="fixed w-full z-50 backdrop-blur-md border-b border-slate-200/50 transition-all duration-300 bg-white/80">
<div className="md:h-28 flex h-24 max-w-7xl mr-auto ml-auto pr-6 pl-6 items-center justify-between">

<a className="flex items-center" href="#">
<img alt="Ispahani Kindergarten &amp; Primary School" className="md:h-20 w-auto h-16 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/594805fb-a555-4ed4-b04b-bfd75520596e_800w.jpg"/>
</a>
<div className="hidden md:flex items-center gap-10">
<a className="text-base font-normal text-slate-600 hover:text-[#276b38] transition-colors" href="#">About</a>
<a className="text-base font-normal text-slate-600 hover:text-[#276b38] transition-colors" href="#">Curriculum</a>
<a className="text-base font-normal text-slate-600 hover:text-[#276b38] transition-colors" href="#">Campus</a>
<a className="text-base font-normal text-slate-600 hover:text-[#276b38] transition-colors" href="#">Admissions</a>
</div>
<div className="flex items-center gap-6">
<button className="hidden md:inline-flex items-center justify-center px-6 py-3 text-base font-normal text-white bg-[#ef8621] rounded-full hover:bg-[#d9771b] transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Apply Now
                </button>
<button className="md:hidden text-slate-800">
<i className="w-7 h-7" data-lucide="menu" strokeWidth="1.5"></i>
</button>
</div>
</div>
</nav>

<section className="relative min-h-[95vh] flex items-center justify-center pt-28 overflow-hidden bg-slate-50">

<div className="absolute inset-0 z-0">
<video autoplay="" className="w-full h-full object-cover opacity-30" loop="" muted="" playsinline="" poster="https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&amp;w=2073&amp;auto=format&amp;fit=crop">
<source src="https://assets.mixkit.co/videos/preview/mixkit-kids-in-a-classroom-playing-with-blocks-4254-large.mp4" type="video/mp4"/>
</video>

<div className="absolute inset-0 bg-slate-50/80 backdrop-blur-[2px]"></div>
</div>

<div className="absolute top-0 right-0 w-[800px] h-[800px] bg-[#44a651]/20 rounded-full blur-[120px] -translate-y-1/3 translate-x-1/4 pointer-events-none z-0"></div>
<div className="absolute bottom-0 left-0 w-[700px] h-[700px] bg-[#ef8621]/20 rounded-full blur-[120px] translate-y-1/3 -translate-x-1/4 pointer-events-none z-0"></div>
<div className="absolute top-1/2 left-1/2 w-[600px] h-[600px] bg-[#214c72]/10 rounded-full blur-[100px] -translate-y-1/2 -translate-x-1/2 pointer-events-none z-0"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 w-full flex flex-col items-center text-center">
<div className="inline-flex items-center gap-3 px-5 py-2.5 rounded-full bg-white/60 backdrop-blur-md border border-slate-200 shadow-sm mb-10">
<span className="w-2.5 h-2.5 rounded-full bg-[#44a651] animate-pulse"></span>
<span className="text-sm font-normal text-slate-700 tracking-wide uppercase">Opening July 15, 2026</span>
</div>
<h1 className="font-display font-medium text-6xl md:text-7xl lg:text-8xl tracking-tight text-[#214c72] max-w-5xl leading-[1.05] mb-8">
        Foundation for
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#276b38] to-[#44a651]">Life</span>
</h1>
<p className="text-xl md:text-2xl font-light text-slate-700 max-w-3xl mb-12 leading-relaxed">
        A nurturing environment for young minds to grow, explore, and succeed within a premium framework of global
        education.
    </p>
<div className="flex flex-col sm:flex-row items-center gap-5">
<button className="w-full sm:w-auto px-9 py-4 text-base font-normal text-white bg-[#ef8621] rounded-full hover:bg-[#d9771b] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5">
                    Admissions Enquiry
                </button>
<button className="w-full sm:w-auto px-9 py-4 text-base font-normal text-slate-700 bg-white/90 backdrop-blur-sm border border-slate-200 rounded-full hover:bg-white transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5">
                    Explore Curriculum
                </button>
</div>
</div>
<div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-60 z-10">
<span className="text-sm text-slate-600 font-normal uppercase tracking-widest">Scroll</span>
<i className="w-6 h-6 text-slate-600 animate-bounce" data-lucide="arrow-down" strokeWidth="1.5"></i>
</div>
</section>

<section className="md:py-36 overflow-hidden bg-white pt-28 pb-28 relative">
<div className="absolute top-0 right-0 w-[600px] h-[600px] bg-[#44a651]/5 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
<div className="">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-[#214c72] mb-8">
                        Rooted in Heritage, <br/>Focused on the Future.
                    </h2>
<p className="text-lg text-slate-600 mb-8 leading-relaxed">
                        Ispahani Kindergarten School &amp; Primary School (IKPS) is a premier educational institution dedicated to providing a transformative early learning experience. 
                    </p>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Founded by visionary Mirza Salman Ispahani and proudly backed by the esteemed Ispahani Group, we blend rich heritage with modern pedagogical approaches to create an environment where children truly thrive.
                    </p>
<div className="flex flex-col gap-8">
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#276b38]/10 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-6 h-6 text-[#276b38]" data-lucide="star" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-slate-800 mb-2">Legacy of Excellence</h3>
<p className="text-base text-slate-500 leading-relaxed">Built on the core values and enduring trust of the Ispahani Group.</p>
</div>
</div>
<div className="flex items-start gap-5">
<div className="w-12 h-12 rounded-full bg-[#ef8621]/10 flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-6 h-6 text-[#ef8621]" data-lucide="users" strokeWidth="1.5"></i>
</div>
<div className="">
<h3 className="text-xl font-medium tracking-tight text-slate-800 mb-2">Child-Centric Philosophy</h3>
<p className="text-base text-slate-500 leading-relaxed">Every decision, space, and lesson is designed around the needs of the child.</p>
</div>
</div>
</div>
</div>
<div className="relative">
<div className="aspect-square rounded-[2.5rem] overflow-hidden relative shadow-xl">
<img alt="Campus environment" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1577896851231-70ef18881754?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="bg-gradient-to-t from-[#214c72]/50 to-transparent absolute top-0 right-0 bottom-0 left-0"></div>
</div>

<div className="absolute -bottom-8 -left-8 bg-white p-6 rounded-3xl shadow-2xl border border-slate-100 flex items-center gap-5">
<div className="w-14 h-14 rounded-full bg-[#276b38] flex items-center justify-center">
<i className="w-7 h-7 text-white" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<div>
<p className="text-sm text-slate-500 font-normal uppercase tracking-wider mb-1">Founded By</p>
<p className="text-lg font-medium tracking-tight text-slate-800">Mirza Salman Ispahani</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-28 md:py-36 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-3xl mx-auto mb-20">
<span className="text-sm font-normal text-[#276b38] tracking-wider uppercase mb-4 block">Academic Pathways</span>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-[#214c72] mb-6">A World-Class Foundation</h2>
<p className="text-lg text-slate-600 leading-relaxed">Our structured progression ensures a seamless transition from exploratory early years to rigorous primary education.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-[#44a651]/10 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>
<div className="w-16 h-16 rounded-2xl bg-[#44a651]/10 flex items-center justify-center mb-8">
<i className="w-8 h-8 text-[#44a651]" data-lucide="sun" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-3xl tracking-tight text-slate-800 mb-3">Kindergarten</h3>
<p className="text-base font-normal text-[#44a651] mb-6">Montessori Inspired Learning</p>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Our early years program focuses on self-directed activity, hands-on learning, and collaborative play. We cultivate independence and a natural curiosity for the world.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#44a651]" data-lucide="check-circle" strokeWidth="1.5"></i> Sensorial exploration
                        </li>
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#44a651]" data-lucide="check-circle" strokeWidth="1.5"></i> Practical life skills
                        </li>
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#44a651]" data-lucide="check-circle" strokeWidth="1.5"></i> Creative expression
                        </li>
</ul>
<a className="inline-flex items-center gap-3 text-base font-normal text-[#276b38] group-hover:text-[#44a651] transition-colors" href="#">
                        Explore Kindergarten <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>

<div className="group relative bg-white rounded-[2.5rem] p-10 border border-slate-200/60 shadow-sm hover:shadow-xl transition-all duration-500 overflow-hidden">
<div className="absolute top-0 right-0 w-40 h-40 bg-[#214c72]/5 rounded-bl-full -z-10 transition-transform duration-500 group-hover:scale-125"></div>
<div className="w-16 h-16 rounded-2xl bg-[#214c72]/10 flex items-center justify-center mb-8">
<i className="w-8 h-8 text-[#214c72]" data-lucide="globe" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-3xl tracking-tight text-slate-800 mb-3">Primary School</h3>
<p className="text-base font-normal text-[#214c72] mb-6">Cambridge Curriculum</p>
<p className="text-lg text-slate-600 mb-10 leading-relaxed">
                        Providing a robust academic framework that develops critical thinking, problem-solving, and deep subject knowledge, preparing students for global success.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#214c72]" data-lucide="check-circle" strokeWidth="1.5"></i> Internationally benchmarked
                        </li>
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#214c72]" data-lucide="check-circle" strokeWidth="1.5"></i> Strong literacy &amp; numeracy
                        </li>
<li className="flex items-center gap-4 text-base text-slate-700">
<i className="w-6 h-6 text-[#214c72]" data-lucide="check-circle" strokeWidth="1.5"></i> Technology integrated learning
                        </li>
</ul>
<a className="inline-flex items-center gap-3 text-base font-normal text-[#214c72] group-hover:text-[#276b38] transition-colors" href="#">
                        Explore Primary <i className="w-5 h-5" data-lucide="arrow-right" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</section>

<section className="py-28 md:py-36 bg-white">
<div className="max-w-7xl mx-auto px-6">
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-[#214c72] mb-16 text-center">The IKPS Advantage</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 auto-rows-[320px]">

<div className="md:col-span-2 bg-gradient-to-br from-slate-50 to-slate-100 rounded-[2.5rem] p-10 border border-slate-200 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute right-0 bottom-0 opacity-10 translate-x-1/4 translate-y-1/4 transition-transform duration-700 group-hover:scale-110">
<i className="w-64 h-64 text-[#44a651]" data-lucide="leaf" strokeWidth="1.5"></i>
</div>
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-8">
<i className="w-7 h-7 text-[#ef8621]" data-lucide="heart" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-3xl tracking-tight text-slate-800 mb-4">Holistic Learning</h3>
<p className="text-base text-slate-600 max-w-lg leading-relaxed">We focus on the emotional, social, physical, and academic development of every child, ensuring they grow into well-rounded individuals.</p>
</div>
</div>

<div className="bg-[#214c72] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiNmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSIvPjwvc3ZnPg==')] opacity-20"></div>
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10">
<i className="w-7 h-7 text-white" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-2xl tracking-tight text-white mb-3">Experienced Educators</h3>
<p className="text-base text-slate-200 leading-relaxed">Passionate, highly trained teachers dedicated to nurturing young minds.</p>
</div>
</div>

<div className="bg-[#276b38] rounded-[2.5rem] p-10 flex flex-col justify-between relative overflow-hidden group">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center mb-8 border border-white/10">
<i className="w-7 h-7 text-white" data-lucide="shield-check" strokeWidth="1.5"></i>
</div>
<div className="relative z-10">
<h3 className="font-display font-medium text-2xl tracking-tight text-white mb-3">Safe Environment</h3>
<p className="text-base text-slate-200 leading-relaxed">A secure, purpose-built campus designed specifically for young learners.</p>
</div>
</div>

<div className="md:col-span-2 bg-[#f8fafc] rounded-[2.5rem] p-10 border border-slate-200 flex items-center gap-10 relative overflow-hidden group">
<div className="flex-1">
<div className="w-14 h-14 rounded-full bg-white shadow-sm flex items-center justify-center mb-8">
<i className="w-7 h-7 text-[#214c72]" data-lucide="book" strokeWidth="1.5"></i>
</div>
<h3 className="font-display font-medium text-3xl tracking-tight text-slate-800 mb-4">Global Curriculum</h3>
<p className="text-base text-slate-600 max-w-md leading-relaxed">Integrating local values with global standards through the Cambridge framework, ensuring students are ready for the world.</p>
</div>
<div className="hidden md:block w-56 h-56 rounded-[2rem] overflow-hidden shadow-lg shrink-0">
<img alt="Learning materials" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp;w=2022&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-[3rem] bg-gradient-to-r from-[#214c72] to-[#276b38] p-10 md:p-14 flex flex-col md:flex-row items-center justify-between gap-10 relative overflow-hidden shadow-2xl">

<div className="absolute top-0 right-0 w-80 h-80 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-80 h-80 bg-[#ef8621]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
<div className="relative z-10 flex items-center gap-8">
<div className="hidden sm:flex w-20 h-20 rounded-3xl bg-white/10 backdrop-blur-md items-center justify-center shrink-0 border border-white/20">
<i className="w-10 h-10 text-white" data-lucide="calendar" strokeWidth="1.5"></i>
</div>
<div>
<span className="text-base font-normal text-[#44a651] tracking-wider uppercase mb-2 block">A New Chapter Begins</span>
<h2 className="font-display font-medium text-4xl md:text-5xl tracking-tight text-white">Opening July 15, 2026</h2>
</div>
</div>
<div className="relative z-10 w-full md:w-auto text-center md:text-right">
<p className="text-base text-slate-200 mb-6 max-w-sm mx-auto md:ml-auto md:mr-0 leading-relaxed">Join us in shaping the future. Campus tours and early registrations will commence soon.</p>
<button className="px-8 py-3.5 text-base font-normal text-[#214c72] bg-white rounded-full hover:bg-slate-50 transition-colors shadow-sm w-full md:w-auto">
                        Join Waitlist
                    </button>
</div>
</div>
</div>
</section>

<section className="md:py-36 overflow-hidden bg-slate-50 pt-28 pb-28 relative">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full max-w-4xl h-[500px] bg-gradient-to-b from-[#ef8621]/10 to-transparent rounded-full blur-[100px] pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<div className="w-20 h-20 mx-auto bg-white rounded-3xl shadow-sm border border-slate-100 flex items-center justify-center mb-10">
<i className="w-9 h-9 text-[#ef8621]" data-lucide="pen-square" strokeWidth="1.5"></i>
</div>
<h2 className="font-display font-medium text-5xl md:text-6xl tracking-tight text-slate-800 mb-8">Admissions Open Soon</h2>
<p className="text-lg text-slate-600 mb-12 max-w-2xl mx-auto leading-relaxed">
                Be part of an extraordinary educational journey. Register your interest to receive comprehensive details about our admissions process and curriculum.
            </p>
<button className="px-10 py-4 text-base font-normal text-white bg-[#ef8621] rounded-full hover:bg-[#d9771b] transition-all shadow-md hover:shadow-lg hover:-translate-y-0.5 inline-flex items-center gap-3">
                Register Interest <i className="w-6 h-6" data-lucide="arrow-right" strokeWidth="1.5"></i>
</button>
</div>
</section>

<footer className="bg-[#214c72] pt-24 pb-12 border-t border-[#276b38]/20 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-[#276b38] via-[#44a651] to-[#ef8621]"></div>
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-14 lg:gap-10 mb-20">

<div className="lg:col-span-4">

<div className="bg-white p-5 rounded-3xl inline-block mb-8 shadow-sm">
<img alt="Ispahani Kindergarten &amp; Primary School" className="md:h-24 w-auto h-20 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/594805fb-a555-4ed4-b04b-bfd75520596e_800w.jpg"/>
</div>
<p className="text-base text-slate-300 mb-8 max-w-sm leading-relaxed">
                        Ispahani Kindergarten School &amp; Ispahani Primary School. A premium nurturing environment for young minds to grow, explore, and succeed.
                    </p>
<div className="flex items-center gap-5">
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="facebook" strokeWidth="1.5"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-slate-300 hover:bg-white/10 hover:text-white transition-colors" href="#">
<i className="w-5 h-5" data-lucide="link" strokeWidth="1.5"></i>
</a>
</div>
</div>

<div className="lg:col-span-2 lg:col-start-6 mt-4 lg:mt-0">
<h4 className="font-display font-medium text-xl text-white mb-8 tracking-wide">Academics</h4>
<ul className="space-y-4">
<li className=""><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Kindergarten</a></li>
<li className=""><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Primary School</a></li>
<li className=""><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Curriculum</a></li>
</ul>
</div>
<div className="lg:col-span-2 mt-4 lg:mt-0">
<h4 className="font-display font-medium text-xl text-white mb-8 tracking-wide">About</h4>
<ul className="space-y-4">
<li><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Our Story</a></li>
<li className=""><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Ispahani Group</a></li>
<li><a className="text-base text-slate-400 hover:text-white transition-colors" href="#">Campus</a></li>
</ul>
</div>

<div className="lg:col-span-3 mt-4 lg:mt-0">
<h4 className="font-display font-medium text-xl text-white mb-8 tracking-wide">Contact Us</h4>
<ul className="space-y-5">
<li className="flex items-start gap-4">
<i className="text-slate-400 w-6 h-6 shrink-0 mt-0.5" data-lucide="map-pin" strokeWidth="1.5"></i>
<span className="text-base text-slate-400 leading-relaxed">
                                Holding No. 55 &amp; 58, <br/>
                                Ispahani Colony, Moghbazar, <br/>
                                Dhaka–1217, Bangladesh
                            </span>
</li>
<li className="flex items-center gap-4">
<i className="text-slate-400 w-6 h-6 shrink-0" data-lucide="mail" strokeWidth="1.5"></i>
<a className="text-base text-slate-400 hover:text-white transition-colors" href="mailto:admissions@ikps.edu.bd">admissions@ikps.edu.bd</a>
</li>
<li className="flex items-center gap-4">
<i className="text-slate-400 w-6 h-6 shrink-0" data-lucide="phone" strokeWidth="1.5"></i>
<span className="text-base text-slate-400">+880 (0) XXX XXXX</span>
</li>
</ul>
</div>
</div>
<div className="pt-10 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-6">
<p className="text-sm text-slate-500 font-normal">
                    © 2024 Ispahani Kindergarten &amp; Primary School. All rights reserved.
                </p>
<div className="flex items-center gap-8">
<a className="text-sm text-slate-500 font-normal hover:text-slate-300 transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-slate-500 font-normal hover:text-slate-300 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
