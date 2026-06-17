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



tailwind.config = {
theme: {
extend: {
colors: {
primary: {
DEFAULT: '#0D5A38',
50: '#e6f2ec',
100: '#cce6d9',
200: '#99ccb3',
300: '#66b38c',
400: '#339966',
500: '#0D5A38',
600: '#0a482d',
700: '#083622',
800: '#052416',
900: '#03120b',
},
secondary: {
DEFAULT: '#A58228',
50: '#f8f4e9',
100: '#f0e8d4',
200: '#e2d1a8',
300: '#d3ba7d',
400: '#c5a351',
500: '#A58228',
600: '#846820',
700: '#634e18',
800: '#423410',
900: '#211a08',
},
themebg: '#EAF7EB',
},
fontFamily: {
poppins: ['Poppins', 'sans-serif'],
amiri: ['Amiri', 'serif'],
hind: ['Hind Siliguri', 'sans-serif'],
noto: ['Noto Sans Bengali', 'sans-serif'],
serif: ['ui-serif', 'Georgia', 'Cambria', '"Times New Roman"', 'Times', 'serif'],
},
animation: {
'blob': 'blob 7s infinite',
},
keyframes: {
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Intersection Observer for Scroll Animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach((element) => {
            observer.observe(element);
        });

        // Navbar blur effect optimization
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.remove('bg-themebg/90');
                nav.classList.add('bg-white/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.remove('bg-white/95');
                nav.classList.add('bg-themebg/90');
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
      

<nav className="fixed w-full z-50 top-0 left-0 bg-themebg/90 backdrop-blur-md border-b border-primary/10 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<div className="w-10 h-10 rounded-full bg-primary flex items-center justify-center text-white group-hover:scale-105 transition-transform duration-300 shadow-md shadow-primary/20">
<iconify-icon className="stroke-[1.5]" height="22" icon="solar:book-bookmark-linear" width="22"></iconify-icon>
</div>
<span className="font-semibold text-primary font-serif tracking-tight text-xl">Ittela Academy</span>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#">Home</a>
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#courses">Course</a>
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#charity">Charity</a>
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#">Activities</a>
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#">About</a>
<a className="text-sm font-medium text-primary hover:text-secondary transition-colors" href="#contact">Contact</a>
</div>

<div className="hidden lg:flex items-center gap-4">
<a className="px-5 py-2.5 rounded-full border border-primary text-primary text-sm font-medium hover:bg-primary/5 transition-all active:scale-95" href="#">
                    My Account
                </a>
<a className="px-6 py-2.5 rounded-full bg-primary text-white text-sm font-medium hover:bg-primary-600 transition-all shadow-md hover:shadow-lg hover:shadow-primary/20 active:scale-95" href="#">
                    Enroll Now
                </a>
</div>

<button className="lg:hidden text-primary p-2">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 overflow-hidden">
<div className="max-w-7xl mx-auto">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="reveal active order-2 lg:order-1 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-primary/20 shadow-sm mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary/80 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
<span className="text-xs font-medium text-primary tracking-wide uppercase">Admission Open for 2024</span>
</div>
<div className="mb-8 relative">

<div className="absolute -top-8 -left-6 text-primary/10">
<iconify-icon height="80" icon="solar:quote-left-linear" width="80"></iconify-icon>
</div>
<p className="font-amiri text-4xl md:text-5xl text-primary leading-[1.6] mb-6 tracking-tight z-10 relative" dir="rtl">
                            إِنَّا أَنْزَلْنَاهُ قُرْآنًا عَرَبِيًّا لَعَلَّكُمْ تَعْقِلُونَ
                        </p>
<p className="font-hind text-lg md:text-xl text-gray-600 leading-relaxed max-w-xl mx-auto lg:mx-0 font-light border-l-4 border-secondary pl-4">
                            নিঃসন্দেহে আমি একে নাজিল করেছি আরবি কুর'আন রূপে, যেন তোমরা তা বুঝতে পারো।
                        </p>
</div>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 mt-10 reveal delay-200">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-primary text-white text-base font-medium hover:bg-primary-600 transition-all shadow-xl shadow-primary/20 flex items-center justify-center gap-2 hover:-translate-y-1" href="#courses">
                            Start Journey
                            <iconify-icon className="stroke-[1.5]" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</div>

<div className="order-1 lg:order-2 relative reveal delay-300 animate-float flex justify-center lg:justify-end">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-gradient-to-tr from-primary/20 to-secondary/20 rounded-full blur-3xl opacity-50 z-0"></div>

<div className="relative z-10 w-full max-w-md aspect-square rounded-[3rem] bg-white border border-primary/10 shadow-2xl shadow-primary/10 p-8 flex flex-col items-center justify-center overflow-hidden group">

<div className="absolute inset-0 opacity-5">
<svg height="100%" width="100%" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="40" id="islamic-pattern" patternunits="userSpaceOnUse" width="40" x="0" y="0">
<path d="M20 0 L40 20 L20 40 L0 20 Z" fill="none" stroke="currentColor" strokeWidth="1"></path>
<circle cx="20" cy="20" fill="none" r="10" stroke="currentColor" strokeWidth="1"></circle>
</pattern>
</defs>
<rect className="text-primary" fill="url(#islamic-pattern)" height="100%" width="100%"></rect>
</svg>
</div>
<div className="w-32 h-32 rounded-2xl bg-gradient-to-br from-primary-50 to-themebg border border-primary/20 flex items-center justify-center mb-6 shadow-inner group-hover:scale-105 transition-transform duration-700">
<iconify-icon className="text-primary stroke-[1.5]" height="64" icon="solar:book-2-linear" width="64"></iconify-icon>
</div>
<div className="h-1.5 w-16 bg-secondary/30 rounded-full mb-3"></div>
<div className="h-1.5 w-24 bg-primary/20 rounded-full"></div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 bg-white relative z-20" id="courses">
<div className="max-w-7xl mx-auto">
<div className="text-center md:text-left mb-16 reveal">
<h2 className="font-noto text-3xl md:text-4xl font-semibold text-primary tracking-tight mb-4">জনপ্রিয় কোর্স সমূহ</h2>
<p className="font-hind text-gray-500 text-lg max-w-2xl">Transform your spiritual journey with our expertly crafted courses designed for all ages.</p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-themebg/50 border border-primary/10 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group reveal delay-100 flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:diploma-linear" width="24"></iconify-icon>
</div>
<h3 className="font-noto text-lg font-semibold text-gray-900 mb-3 flex-grow">মাদানী নেসাব প্রথম বর্ষ</h3>
<div className="mt-4 pt-4 border-t border-primary/10">
<button className="w-full py-2.5 rounded-xl bg-secondary/10 text-secondary font-medium text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                            Learn More
                        </button>
</div>
</div>

<div className="bg-themebg/50 border border-primary/10 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group reveal delay-200 flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:letter-opened-linear" width="24"></iconify-icon>
</div>
<h3 className="font-noto text-lg font-semibold text-gray-900 mb-3 flex-grow">বড়দের জন্য আরবী ভাষা শিক্ষা</h3>
<div className="mt-4 pt-4 border-t border-primary/10">
<button className="w-full py-2.5 rounded-xl bg-secondary/10 text-secondary font-medium text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                            Learn More
                        </button>
</div>
</div>

<div className="bg-themebg/50 border border-primary/10 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group reveal delay-300 flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:smile-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="font-noto text-lg font-semibold text-gray-900 mb-3 flex-grow">কুর'আন রিডিং ফর কিডস</h3>
<div className="mt-4 pt-4 border-t border-primary/10">
<button className="w-full py-2.5 rounded-xl bg-secondary/10 text-secondary font-medium text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                            Learn More
                        </button>
</div>
</div>

<div className="bg-themebg/50 border border-primary/10 p-6 rounded-3xl hover:bg-white hover:shadow-xl hover:shadow-primary/5 hover:-translate-y-2 transition-all duration-500 group reveal delay-400 flex flex-col h-full">
<div className="w-12 h-12 rounded-2xl bg-primary/10 text-primary flex items-center justify-center mb-6 group-hover:bg-primary group-hover:text-white transition-colors duration-300">
<iconify-icon className="stroke-[1.5]" height="24" icon="solar:star-fall-minimalistic-linear" width="24"></iconify-icon>
</div>
<h3 className="font-noto text-lg font-semibold text-gray-900 mb-3 flex-grow">এডভান্স তাজভীদ</h3>
<div className="mt-4 pt-4 border-t border-primary/10">
<button className="w-full py-2.5 rounded-xl bg-secondary/10 text-secondary font-medium text-sm hover:bg-secondary hover:text-white transition-colors flex items-center justify-center gap-2">
                            Learn More
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-primary-50 relative overflow-hidden" id="charity">

<div className="absolute top-0 right-0 w-64 h-64 bg-secondary/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/10 rounded-full blur-3xl translate-y-1/2 -translate-x-1/2"></div>
<div className="max-w-4xl mx-auto relative z-10 text-center reveal">
<div className="inline-flex p-4 rounded-full bg-white shadow-sm mb-6 text-secondary">
<iconify-icon className="stroke-[1.5]" height="32" icon="solar:hand-money-linear" width="32"></iconify-icon>
</div>
<p className="font-hind text-xl md:text-2xl text-gray-700 leading-relaxed font-light mb-10">
                আলহামদুলিল্লাহ ইতিমধ্যে আমাদের অনলাইনে ও অস্থায়ী ক্যাম্পাসে শতাধিক শিক্ষার্থী উপকৃত হয়েছেন, আরো গুছানো ও ফলপ্রসূ শিক্ষাব্যবস্থা নিশ্চিত করতে আমাদের স্থায়ী ক্যাম্পাসের কাজ শুরু হয়েছে, আপনার মূল্যবান অনুদান আমাদের স্থায়ী ক্যাম্পাসের জন্য বিনিয়োগ করতে পারেন, ইনশাআল্লাহ সারা জীবন সদকায়ে জারিয়া হিসাবে তা গণ্য হবে।
            </p>
<a className="inline-flex items-center gap-2 px-8 py-3.5 rounded-full bg-secondary text-white text-base font-medium hover:bg-secondary-600 transition-all shadow-lg shadow-secondary/20 hover:-translate-y-1 font-noto" href="#">
                বিস্তারিত বিবরণ
                <iconify-icon className="stroke-[1.5]" height="20" icon="solar:alt-arrow-right-linear" width="20"></iconify-icon>
</a>
</div>
</section>

<footer className="bg-themebg border-t border-primary/10 pt-20 pb-10 px-6" id="contact">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16 border-b border-primary/10 pb-16">

<div className="md:col-span-5 reveal">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-8 h-8 rounded-full bg-primary flex items-center justify-center text-white">
<iconify-icon className="stroke-[1.5]" height="18" icon="solar:book-bookmark-linear" width="18"></iconify-icon>
</div>
<span className="font-semibold text-primary font-serif tracking-tight text-xl">Ittela Academy</span>
</a>
<p className="text-sm text-gray-500 mb-6 max-w-sm leading-relaxed">
                        Join our newsletter to receive updates on new courses, campus developments, and Islamic insights.
                    </p>
<form className="flex gap-2 max-w-sm">
<input className="w-full px-4 py-2.5 rounded-xl border border-primary/20 bg-white text-sm focus:outline-none focus:border-primary focus:ring-1 focus:ring-primary transition-all" placeholder="Enter your email" type="email"/>
<button className="px-5 py-2.5 rounded-xl bg-primary text-white text-sm font-medium hover:bg-primary-600 transition-colors" type="submit">
                            Subscribe
                        </button>
</form>
</div>

<div className="md:col-span-4 reveal delay-100">
<h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Contact Info</h4>
<ul className="space-y-4 text-sm text-gray-600 font-medium">
<li className="flex items-start gap-3">
<iconify-icon className="text-primary shrink-0 mt-0.5 stroke-[1.5]" height="20" icon="solar:map-point-linear" width="20"></iconify-icon>
<span>Uttara Sector 11, Dhaka, Bangladesh<br/>Mirpur-1, Dhaka, Bangladesh</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-primary shrink-0 stroke-[1.5]" height="20" icon="solar:phone-linear" width="20"></iconify-icon>
<div className="flex flex-col">
<span>01407783533</span>
<span>+880 1718-030898</span>
<span>+2015 57662427</span>
</div>
</li>
</ul>
</div>

<div className="md:col-span-3 reveal delay-200">
<h4 className="font-semibold text-gray-900 mb-6 text-sm uppercase tracking-wider">Connect With Us</h4>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:instagram-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white border border-primary/20 flex items-center justify-center text-primary hover:bg-primary hover:text-white transition-all shadow-sm" href="#">
<iconify-icon className="stroke-[1.5]" height="20" icon="solar:chat-round-line-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-gray-500 reveal delay-300">
<p>© 2024 Ittela Academy. All rights reserved.</p>
<div className="flex gap-6 font-medium">
<span className="text-primary">Follow Us &amp; Subscribe</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
