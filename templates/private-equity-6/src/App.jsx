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



document.addEventListener('DOMContentLoaded', () => {
// Initialize Lenis Smooth Scroll
const lenis = new Lenis({
duration: 1.2,
easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
direction: 'vertical',
gestureDirection: 'vertical',
smooth: true,
mouseMultiplier: 1,
smoothTouch: false,
touchMultiplier: 2,
});
function raf(time) {
lenis.raf(time);
requestAnimationFrame(raf);
}
requestAnimationFrame(raf);
// Handle Anchor Links with Lenis
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
anchor.addEventListener('click', function (e) {
e.preventDefault();
const targetId = this.getAttribute('href');
if (targetId === '#') return;
const targetElem = document.querySelector(targetId);
if (targetElem) {
lenis.scrollTo(targetElem, {
offset: -100, // Offset for fixed header
duration: 1.5
});
// Close mobile menu if open
const mobileMenu = document.getElementById('mobile-menu');
if (mobileMenu && !mobileMenu.classList.contains('invisible')) {
const btn = document.getElementById('mobile-menu-btn');
if(btn) btn.click();
}
}
});
});
// Mobile Menu Logic
const mobileBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = document.getElementById('menu-icon');
const closeIcon = document.getElementById('close-icon');
const toggleMenu = (forceClose = false) => {
const isHidden = mobileMenu.classList.contains('invisible');
if (isHidden && !forceClose) {
mobileMenu.classList.remove('invisible', 'opacity-0');
mobileMenu.classList.add('visible', 'opacity-100');
document.body.classList.add('overflow-hidden');
lenis.stop(); // Stop scroll when menu is open
menuIcon.classList.add('hidden');
closeIcon.classList.remove('hidden');
} else {
mobileMenu.classList.remove('visible', 'opacity-100');
mobileMenu.classList.add('invisible', 'opacity-0');
document.body.classList.remove('overflow-hidden');
lenis.start(); // Resume scroll
menuIcon.classList.remove('hidden');
closeIcon.classList.add('hidden');
}
};
if (mobileBtn && mobileMenu) {
mobileBtn.addEventListener('click', () => toggleMenu());
}
// Carousel Logic
const setupCarousel = (containerId, dotsContainerId, arrowId) => {
const container = document.getElementById(containerId);
const dotsContainer = document.getElementById(dotsContainerId);
const arrow = document.getElementById(arrowId);
if (!container) return;
if (dotsContainer) {
const dots = dotsContainer.querySelectorAll('.carousel-dot');
const updateDots = () => {
const scrollLeft = container.scrollLeft;
const width = container.offsetWidth;
const index = Math.round(scrollLeft / width);
dots.forEach((dot, i) => {
if (i === index) {
dot.classList.remove('bg-stone-300');
dot.classList.add('bg-stone-900');
} else {
dot.classList.add('bg-stone-300');
dot.classList.remove('bg-stone-900');
}
});
};
container.addEventListener('scroll', () => window.requestAnimationFrame(updateDots));
}
if (arrow) {
const handleScrollHint = () => {
arrow.classList.toggle('opacity-0', container.scrollLeft > 20);
};
container.addEventListener('scroll', () => window.requestAnimationFrame(handleScrollHint));
}
};
setupCarousel('team-container', 'team-dots', 'team-arrow');
setupCarousel('services-container', 'services-dots', 'services-arrow');
// Intersection Observer for Reveal
const observerOptions = {
root: null,
rootMargin: '0px 0px -10% 0px',
threshold: 0
};
const observer = new IntersectionObserver((entries, observer) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
requestAnimationFrame(() => {
entry.target.classList.add('is-visible');
});
observer.unobserve(entry.target);
}
});
}, observerOptions);
document.querySelectorAll('.reveal-on-scroll').forEach((element) => {
observer.observe(element);
});
// Navigation Active State
const sections = document.querySelectorAll('section');
const navLinks = document.querySelectorAll('.nav-link');
const sideDots = document.querySelectorAll('.side-nav-dot');
const updateActiveLink = () => {
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
if (window.scrollY >= (sectionTop - 350)) {
current = section.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('font-semibold', 'text-black', 'opacity-100');
link.classList.add('font-normal', 'text-stone-600', 'opacity-80');
if (link.getAttribute('href') === `#${current}`) {
link.classList.remove('font-normal', 'text-stone-600', 'opacity-80');
link.classList.add('font-semibold', 'text-black', 'opacity-100');
}
});
sideDots.forEach(dot => {
dot.classList.remove('border-stone-900', 'border-[3px]', 'scale-110');
dot.classList.add('border-stone-300', 'border-2', 'scale-100');
if (dot.getAttribute('href') === `#${current}`) {
dot.classList.remove('border-stone-300', 'border-2', 'scale-100');
dot.classList.add('border-stone-900', 'border-[3px]', 'scale-110');
}
});
};
let isScrolling = false;
window.addEventListener('scroll', () => {
if (!isScrolling) {
window.requestAnimationFrame(() => {
updateActiveLink();
isScrolling = false;
});
isScrolling = true;
}
});
updateActiveLink();
// Number Counter
const counterObserver = new IntersectionObserver((entries) => {
entries.forEach(entry => {
if (entry.isIntersecting) {
const counter = entry.target;
const target = parseInt(counter.getAttribute('data-target'));
const prefix = counter.getAttribute('data-prefix') || '';
const suffix = counter.getAttribute('data-suffix') || '';
const duration = 1500;
const startTime = performance.now();
const updateCount = (currentTime) => {
const elapsed = currentTime - startTime;
const progress = Math.min(elapsed / duration, 1);
const ease = 1 - Math.pow(1 - progress, 4);
const currentVal = Math.floor(ease * target);
counter.innerText = `${prefix}${currentVal}${suffix}`;
if (progress < 1) {
requestAnimationFrame(updateCount);
} else {
counter.innerText = `${prefix}${target}${suffix}`;
}
};
requestAnimationFrame(updateCount);
counterObserver.unobserve(counter);
}
});
}, { threshold: 0.5 });
document.querySelectorAll('.counter-animate').forEach(counter => {
counterObserver.observe(counter);
});
// Contact Form
const contactForm = document.getElementById('contact-form');
const contactFormContainer = document.getElementById('contact-form-container');
const contactSuccess = document.getElementById('contact-success');
if (contactForm) {
contactForm.addEventListener('submit', (e) => {
e.preventDefault();
const btn = contactForm.querySelector('button[type="submit"]');
const originalText = btn.innerHTML;
btn.innerHTML = `<span class="animate-pulse">Sending...</span>`;
btn.disabled = true;
const formData = new FormData(contactForm);
formData.append('name', `${formData.get('first-name')} ${formData.get('last-name')}`);
fetch("https://formsubmit.co/ajax/info@buxtoncapital.ie", {
method: "POST",
body: formData
})
.then(response => response.ok ? response.json() : Promise.reject())
.then(() => {
contactFormContainer.style.opacity = '0';
setTimeout(() => {
contactFormContainer.classList.add('hidden');
contactSuccess.classList.remove('hidden');
void contactSuccess.offsetWidth;
contactSuccess.classList.remove('opacity-0');
contactSuccess.classList.add('opacity-100');
}, 500);
})
.catch(() => {
btn.innerHTML = originalText;
btn.disabled = false;
alert("Message failed. Please email info@buxtoncapital.ie directly.");
});
});
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
      

<nav className="fixed md:px-12 flex transition-all duration-300 z-50 text-stone-900 bg-white/95 w-full h-24 border-stone-100 border-b pr-6 pl-6 top-0 left-0 backdrop-blur-md items-center justify-between gpu-accelerate">
<div className="z-10 text-left">

<a className="group flex items-center gap-3 hover:opacity-80 transition-opacity duration-300" href="#hero">
<span className="font-playfair text-xl md:text-2xl uppercase tracking-widest text-stone-900 font-medium">Buxton</span>
<img alt="Buxton Tree" className="h-8 md:h-9 w-auto object-contain translate-y-[1px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/126183c7-d8d3-4525-ae46-3dcb5751e356_320w.png"/>
<span className="font-playfair text-xl md:text-2xl uppercase tracking-widest text-stone-900 font-medium">Capital</span>
</a>
</div>
<div className="flex items-center gap-8 z-20">
<div className="hidden md:flex items-center gap-8">
<a className="nav-link text-[10px] uppercase hover:opacity-60 transition-all duration-300 tracking-[0.2em]" href="#about">About us</a>
<a className="nav-link text-[10px] uppercase hover:opacity-60 transition-all duration-300 tracking-[0.2em]" href="#team">Team</a>
<a className="nav-link text-[10px] uppercase hover:opacity-60 transition-all duration-300 tracking-[0.2em]" href="#services">Services</a>
<a className="nav-link text-[10px] uppercase hover:opacity-60 transition-all duration-300 tracking-[0.2em] font-normal text-stone-600 opacity-80" href="#contact">Contact</a>
</div>
<a className="hover:text-stone-600 transition-colors duration-300 text-stone-900 hidden md:block" href="https://www.linkedin.com/company/buxtoncapital/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin w-[26px] h-[26px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '26px', height: '26px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>

<button className="md:hidden flex items-center justify-center w-10 h-10 -mr-2 text-stone-900 hover:bg-stone-100 rounded-sm transition-colors relative z-50" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6 transition-transform duration-300" fill="none" height="24" id="menu-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="4" x2="20" y1="12" y2="12"></line><line x1="4" x2="20" y1="6" y2="6"></line><line x1="4" x2="20" y1="18" y2="18"></line></svg>
<svg className="lucide lucide-x w-6 h-6 hidden transition-transform duration-300" fill="none" height="24" id="close-icon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 18 18"></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 bg-white z-40 invisible opacity-0 md:hidden flex flex-col items-center justify-center space-y-8 pt-12 overflow-y-auto" id="mobile-menu">
<a className="mobile-nav-link text-3xl font-playfair font-medium text-stone-900 hover:text-stone-500 transition-colors" href="#hero">Home</a>
<a className="mobile-nav-link text-3xl font-playfair font-medium text-stone-900 hover:text-stone-500 transition-colors" href="#about">About Us</a>
<a className="mobile-nav-link text-3xl font-playfair font-medium text-stone-900 hover:text-stone-500 transition-colors" href="#team">Team</a>
<a className="mobile-nav-link text-3xl font-playfair font-medium text-stone-900 hover:text-stone-500 transition-colors" href="#services">Services</a>
<a className="mobile-nav-link text-3xl font-playfair font-medium text-stone-900 hover:text-stone-500 transition-colors" href="#contact">Contact</a>
<div className="w-12 h-px bg-stone-200 my-4"></div>
<a className="flex items-center gap-2 text-stone-600 hover:text-stone-900 transition-colors" href="https://www.linkedin.com/company/buxtoncapital/" rel="noopener noreferrer" target="_blank">
<span className="text-sm uppercase tracking-widest">LinkedIn</span>
<svg className="lucide lucide-arrow-up-right w-4 h-4" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 7h10v10"></path><path d="M7 17 17 7"></path></svg>
</a>
</div>

<div className="fixed right-6 lg:right-10 top-1/2 -translate-y-1/2 z-40 hidden md:flex flex-col gap-6 items-center mix-blend-multiply pointer-events-none">
<a aria-label="Home" className="side-nav-dot pointer-events-auto group relative block w-3 h-3 rounded-full transition-all duration-300 hover:border-stone-500 bg-transparent" href="#hero">
<span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm border border-stone-100 rounded-sm">Home</span>
</a>
<a aria-label="About" className="side-nav-dot pointer-events-auto group relative block w-3 h-3 rounded-full transition-all duration-300 hover:border-stone-500" href="#about">
<span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm border border-stone-100 rounded-sm">About</span>
</a>
<a aria-label="Team" className="side-nav-dot pointer-events-auto group relative block w-3 h-3 rounded-full transition-all duration-300 hover:border-stone-500" href="#team">
<span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm border border-stone-100 rounded-sm">Team</span>
</a>
<a aria-label="Services" className="side-nav-dot pointer-events-auto group relative block w-3 h-3 rounded-full transition-all duration-300 hover:border-stone-500 bg-transparent" href="#services">
<span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm border border-stone-100 rounded-sm">Services</span>
</a>
<a aria-label="Contact" className="side-nav-dot pointer-events-auto group relative block w-3 h-3 rounded-full transition-all duration-300 hover:border-stone-500 border-stone-300 border-2 scale-100" href="#contact">
<span className="absolute right-6 top-1/2 -translate-y-1/2 px-2 py-1 text-[9px] font-semibold uppercase tracking-[0.2em] text-stone-900 opacity-0 -translate-x-2 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-300 pointer-events-none whitespace-nowrap bg-white/90 backdrop-blur-sm shadow-sm border border-stone-100 rounded-sm">Contact</span>
</a>
</div>

<section className="flex flex-col overflow-hidden bg-white w-full h-screen relative items-center justify-center" id="hero">
<div className="fade-in-up flex flex-col text-center w-full max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 items-center mt-20 md:mt-0">
<span className="hidden md:block -translate-x-1 text-2xl font-normal text-stone-900 tracking-normal font-playfair mt-12 mb-5 md:text-5xl">Welcome to</span>
<div className="flex flex-col md:flex-row items-center justify-center gap-8 md:gap-16 mb-20 w-full">
<h1 className="uppercase md:text-7xl lg:text-7xl text-5xl font-medium text-stone-950 tracking-normal font-playfair">Buxton</h1>
<div className="md:w-64 md:h-64 flex bg-center -translate-y-1 opacity-100 w-56 h-56 bg-no-repeat bg-contain max-w-2xl grayscale translate-x-1 translate-y-3 scale-110 items-center justify-center">
<img alt="Buxton Symbol" className="w-full h-full object-contain" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/126183c7-d8d3-4525-ae46-3dcb5751e356_320w.png"/>
</div>
<h1 className="uppercase text-5xl font-medium text-stone-950 tracking-normal font-playfair md:text-7xl lg:text-7xl">Capital</h1>
</div>
<a className="group px-10 py-4 bg-transparent border border-stone-200 rounded-sm hover:border-stone-900 transition-colors duration-500 ease-out" href="#about">
<span className="uppercase group-hover:text-black text-xs font-medium text-stone-900 tracking-[0.25em]">The Firm</span>
</a>
</div>
<div className="absolute bottom-12 left-1/2 transform -translate-x-1/2 animate-bounce opacity-30 text-stone-900 pointer-events-none"></div>
</section>

<div className="w-full h-px bg-stone-100"></div>

<section className="md:pt-30 text-stone-800 bg-stone-50 pt-32 pb-20 gpu-accelerate" id="about">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-24 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-900">About <span className="font-normal italic text-stone-500">Us</span></h2>
</div>
<div className="flex flex-col lg:flex-row gap-16 lg:gap-24 gap-x-16 gap-y-16 items-center">
<div className="w-full lg:w-1/2 reveal-on-scroll bg-stone-200 rounded-sm" style={{minHeight: '400px'}}>
<img alt="Buxton Capital Location Aerial" className="shadow-stone-300/60 contrast-125 w-full h-[650px] object-cover ring-black/5 ring-1 rounded-sm shadow-2xl grayscale brightness-95" fetchpriority="high" loading="eager" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/86a64d85-4a20-48f9-a9c2-0bca16685056_1600w.webp"/>
</div>
<div className="w-full lg:w-1/2 reveal-on-scroll">
<h2 className="text-4xl md:text-6xl font-medium mb-8 leading-tight tracking-tight">Who We <span className="italic text-stone-400">Are</span></h2>
<div className="leading-relaxed text-lg font-light text-stone-900 mb-8 space-y-6">
<p>Buxton is the largest mid-market commercial real estate brokerage firm in Ireland, having closed over 100 transactions since inception in 2021 and delivered over €250m in funding for our clients.</p>
<p>Buxton specialises in capital advisory services (debt and / or equity) for real estate investors and developers active across Ireland and the UK, covering all asset classes from residential, offices, student accommodation, logistics, hospitality and retail. Deal sizes range from €500k up to €100MM+ and structuring comprising of bridge and short-term financings to medium and long-term tenors.</p>
<p>Our un-paralleled network of lenders and investors ensures we obtain the most favourable and advantageous financings available in the market. We represent our clients throughout the deal lifecycle from cradle to grave. Think of us as your external Financial Director.</p>
</div>
<ul className="space-y-6 border-l border-stone-300 pl-6">
<li className="flex flex-col">
<span className="text-3xl font-serif counter-animate" data-prefix="€" data-suffix="M+" data-target="250">€250M+</span>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Funding Delivered</span>
</li>
<li className="flex flex-col">
<span className="text-3xl font-serif counter-animate" data-prefix="" data-suffix="+" data-target="100">100+</span>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Transactions Closed</span>
</li>
<li className="flex flex-col">
<span className="text-3xl font-serif counter-animate" data-prefix="" data-suffix="+ Years" data-target="40">40+ Years</span>
<span className="text-xs uppercase tracking-widest text-stone-500 mt-1">Combined Experience</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<div className="w-full h-px bg-stone-200"></div>

<section className="md:py-40 bg-stone-100 pt-32 pb-32 gpu-accelerate" id="team">
<div className="max-w-5xl mx-auto px-6 md:px-12 relative">
<div className="text-center mb-20 reveal-on-scroll">
<span className="text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Meet The Team</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">The <span className="italic text-stone-500">Partners</span></h2>
<p className="text-stone-500 font-light mt-6 max-w-lg mx-auto">Decades of combined experience in finance and real estate.</p>
</div>
<div className="relative">

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide md:grid md:grid-cols-2 md:gap-12 md:overflow-visible md:pb-0" id="team-container">

<div className="min-w-full snap-center md:min-w-0 bg-white p-0 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full reveal-on-scroll">
<div className="w-full h-80 overflow-hidden relative shrink-0 bg-stone-200">
<img alt="Conor Larkin" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/480549dd-5785-4ae3-979f-9e9c4e48098c_1600w.png"/>
</div>
<div className="p-8 flex flex-col grow">
<div className="flex justify-between items-start mb-1">
<h3 className="text-xl font-serif font-medium text-stone-900">Conor Larkin</h3>
<a aria-label="LinkedIn Profile" className="text-stone-400 hover:text-[#0077b5] transition-colors" href="https://www.linkedin.com/in/conor-larkin-89721a22/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin w-[24px] h-[24px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Founder &amp; Managing Partner</p>
<div className="w-8 h-px bg-stone-300 mb-6"></div>
<div className="leading-relaxed text-sm font-light text-stone-800 space-y-4">
<p className="">Conor founded Buxton in 2021. Having started his career in Bank of Ireland Corporate Banking in 2005, Conor has 20 years’ experience in financial services.</p>
<p className="">Having moved from Bank of Ireland to Deloitte Corporate Finance in 2009, Conor then moved to London to join Deutsche Bank.</p>
<p className="">Conor graduated from Commerce in UCD in 2004 before completing a Masters in International Finance in DIT in 2005.</p>
</div>
</div>
</div>

<div className="min-w-full snap-center md:min-w-0 bg-white p-0 rounded-sm shadow-sm hover:shadow-xl transition-all duration-500 group overflow-hidden flex flex-col h-full reveal-on-scroll" style={{transitionDelay: '100ms'}}>
<div className="w-full h-80 overflow-hidden relative shrink-0 bg-stone-200">
<img alt="Richard Feighery" className="w-full h-full object-cover grayscale group-hover:scale-105 transition-transform duration-700" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c924aced-ab9b-4873-9a4c-a3ba6981b4e4_1600w.png"/>
</div>
<div className="flex flex-col grow pt-8 pr-8 pb-8 pl-8">
<div className="flex justify-between items-start mb-1">
<h3 className="text-xl font-serif font-medium text-stone-900">Richard Feighery</h3>
<a aria-label="LinkedIn Profile" className="text-stone-400 hover:text-[#0077b5] transition-colors" href="https://www.linkedin.com/in/richardfeigheryassetmgmt/" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-linkedin w-[24px] h-[24px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" style={{width: '24px', height: '24px'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
</div>
<p className="text-xs uppercase tracking-widest text-stone-500 mb-4">Partner</p>
<div className="w-8 h-px bg-stone-300 mb-6"></div>
<div className="leading-relaxed text-sm font-light text-stone-800 space-y-4">
<p>Richard is a seasoned real estate finance professional. With over 20 years' experience, Richard has originated, structured, executed and asset managed over €6.0Bn in real estate transactions.</p>
<p>Prior to moving into advisory, Richard held senior positions with Wells Fargo, National Asset Management Agency (NAMA) and Bank of Scotland (Ireland).</p>
<p>Richard is a Chartered Accountant (ACCA), a Qualified Financial Advisor and holds a Bachelor of Business Studies.</p>
</div>
</div>
</div>
</div>

<div className="pointer-events-none md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300" id="team-arrow">
<div className="bg-white/80 backdrop-blur-sm border border-stone-200 shadow-lg rounded-full p-2 flex items-center justify-center animate-pulse">
<iconify-icon className="text-stone-900" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-4 md:hidden" id="team-dots">
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-900 transition-colors duration-300"></div>
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-300 transition-colors duration-300"></div>
</div>
</div>
</section>

<div className="w-full h-px bg-stone-200"></div>

<section className="gpu-accelerate md:pt-30 md:pb-40 text-stone-800 bg-white pt-40 pb-44" id="services">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6 md:pl-12 relative">
<div className="mb-20 text-center reveal-on-scroll">
<span className="text-stone-900 text-xs font-semibold tracking-[0.2em] uppercase block mb-4">Services</span>
<h2 className="text-4xl md:text-5xl font-medium leading-tight tracking-tight">Market <span className="italic font-light">Coverage</span></h2>
</div>
<div className="relative">

<div className="flex overflow-x-auto snap-x snap-mandatory gap-4 pb-8 scrollbar-hide md:grid md:grid-cols-2 lg:grid-cols-4 md:gap-x-16 md:gap-y-16 md:overflow-visible md:pb-0 items-start md:items-start text-center md:text-left" id="services-container">

<div className="min-w-full snap-center md:min-w-0 reveal-on-scroll border-stone-100 border-t pt-8 flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 hover:scale-[1.02] hover:bg-stone-50 hover:shadow-sm rounded-sm p-6 md:-mx-6 md:-mt-6 group">
<h3 className="text-xl text-stone-900 font-serif mb-6 pb-2 w-full text-center md:text-left">Capital Stack</h3>
<ul className="space-y-3 text-stone-600 font-light text-sm w-full flex flex-col items-center md:items-start group-hover:text-stone-800 transition-colors">
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Senior Debt</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Whole loan</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Mezzanine Debt</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Preferred Equity</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Sponsor Equity</li>
</ul>
</div>

<div className="min-w-full snap-center md:min-w-0 border-t border-stone-100 pt-8 reveal-on-scroll flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 hover:scale-[1.02] hover:bg-stone-50 hover:shadow-sm rounded-sm p-6 md:-mx-6 md:-mt-6 group" style={{transitionDelay: '100ms'}}>
<h3 className="text-xl font-serif text-stone-900 mb-6 pb-2 w-full text-center md:text-left">Products</h3>
<ul className="space-y-3 text-stone-600 font-light text-sm w-full flex flex-col items-center md:items-start group-hover:text-stone-800 transition-colors">
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Investment finance</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Development finance</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Bridge finance</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Syndication</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Loan-on-loan</li>
</ul>
</div>

<div className="min-w-full snap-center md:min-w-0 reveal-on-scroll flex flex-col transition-all duration-300 hover:scale-[1.02] hover:bg-stone-50 hover:shadow-sm md:-mx-6 md:-mt-6 group border-stone-100 rounded-sm border-t pt-8 pr-6 pb-6 pl-6 items-center md:items-start text-center md:text-left" style={{transitionDelay: '200ms'}}>
<h3 className="text-xl font-serif text-stone-900 mb-6 pb-2 w-full text-center md:text-left">Sources of Capital</h3>
<ul className="space-y-3 text-stone-600 font-light text-sm w-full flex flex-col items-center md:items-start group-hover:text-stone-800 transition-colors">
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Clearing banks</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Challenger banks</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Funds / Non-bank lenders</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Investment banks</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Family offices</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>International banks</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Mutuals</li>
</ul>
</div>

<div className="min-w-full snap-center md:min-w-0 border-t border-stone-100 pt-8 reveal-on-scroll flex flex-col items-center md:items-start text-center md:text-left transition-all duration-300 hover:scale-[1.02] hover:bg-stone-50 hover:shadow-sm rounded-sm p-6 md:-mx-6 md:-mt-6 group" style={{transitionDelay: '300ms'}}>
<h3 className="text-xl font-serif text-stone-900 mb-6 pb-2 w-full text-center md:text-left">Asset Classes</h3>
<ul className="space-y-3 text-stone-600 font-light text-sm w-full flex flex-col items-center md:items-start group-hover:text-stone-800 transition-colors">
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Residential</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>PBSA</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Hotels</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Offices</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Industrial / logistics</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Retail</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Land (pre-planning)</li>
<li className="flex gap-2 text-stone-900 gap-x-2 gap-y-2 items-start justify-center md:justify-start"><span className="block w-1 h-1 bg-stone-300 rounded-full mt-2 shrink-0 group-hover:bg-stone-400"></span>Land (with planning)</li>
</ul>
</div>
</div>

<div className="pointer-events-none md:hidden absolute right-4 top-1/2 -translate-y-1/2 z-20 transition-opacity duration-300" id="services-arrow">
<div className="bg-white/80 backdrop-blur-sm border border-stone-200 shadow-lg rounded-full p-2 flex items-center justify-center animate-pulse">
<iconify-icon className="text-stone-900" height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="flex justify-center gap-2 mt-4 md:hidden" id="services-dots">
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-900 transition-colors duration-300"></div>
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-300 transition-colors duration-300"></div>
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-300 transition-colors duration-300"></div>
<div className="carousel-dot w-2 h-2 rounded-full bg-stone-300 transition-colors duration-300"></div>
</div>
</div>
</section>

<div className="w-full h-px bg-stone-200"></div>

<section className="md:py-40 gpu-accelerate bg-stone-50 pt-32 pb-32 relative" id="contact">
<div className="max-w-2xl mx-auto px-6 md:px-12 text-center reveal-on-scroll">
<div className="mb-12">
<svg className="lucide lucide-mail-open w-8 h-8 text-stone-900 mx-auto mb-6 stroke-[1]" data-lucide="mail-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.2 8.4c.5.38.8.97.8 1.6v10a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V10a2 2 0 0 1 .8-1.6l8-6a2 2 0 0 1 2.4 0l8 6Z"></path><path d="m22 10-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 10"></path></svg>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight mb-4 text-stone-900">Get in touch</h2>
<p className="text-lg text-stone-500 font-light max-w-lg mx-auto">
                    Contact us for partnership inquiries or to request our investor prospectus.
                </p>
</div>
<div className="transition-all duration-500 ease-in-out" id="contact-form-container">
<form className="space-y-10 max-w-md mx-auto text-left" id="contact-form">
<input name="_subject" type="hidden" value="New Contact Form Submission - Buxton Capital"/>
<input name="_captcha" type="hidden" value="false"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-6">
<div className="relative group form-group">
<input className="block w-full px-0 py-3 text-stone-900 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-0 peer placeholder-transparent transition-colors" id="first-name" name="first-name" placeholder="First Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-stone-400 text-sm duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-stone-900" htmlFor="first-name">First Name</label>
</div>
<div className="relative group form-group">
<input className="block w-full px-0 py-3 text-stone-900 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-0 peer placeholder-transparent transition-colors" id="last-name" name="last-name" placeholder="Last Name" required="" type="text"/>
<label className="absolute left-0 top-3 text-stone-400 text-sm duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-stone-900" htmlFor="last-name">Last Name</label>
</div>
</div>
<div className="relative group form-group">
<input className="block w-full px-0 py-3 text-stone-900 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-0 peer placeholder-transparent transition-colors" id="email" name="email" placeholder="Email" required="" type="email"/>
<label className="absolute left-0 top-3 text-stone-400 text-sm duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-stone-900" htmlFor="email">Your email</label>
</div>
<div className="relative group form-group">
<textarea className="block w-full px-0 py-3 text-stone-900 bg-transparent border-b border-stone-300 focus:border-stone-900 focus:outline-none focus:ring-0 peer placeholder-transparent transition-colors resize-none" id="message" name="message" placeholder="Message" required="" rows="4"></textarea>
<label className="absolute left-0 top-3 text-stone-400 text-sm duration-300 transform -translate-y-6 scale-75 origin-[0] peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6 peer-focus:text-stone-900" htmlFor="message">Your message</label>
</div>
<button className="uppercase hover:bg-stone-700 transition-colors duration-500 flex text-xs font-medium text-white tracking-[0.2em] bg-[#1c1917] w-full mt-8 pt-4 pb-4 gap-x-3 gap-y-3 items-center justify-center" type="submit">
                        Get in touch
                    </button>
</form>
</div>
<div className="hidden opacity-0 transition-opacity duration-700 ease-out flex flex-col items-center justify-center py-12 space-y-6" id="contact-success">
<div className="w-16 h-16 rounded-full bg-stone-100 flex items-center justify-center text-stone-900 mb-2">
<svg className="lucide lucide-check" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 className="text-3xl font-serif text-stone-900">Message Sent</h3>
<p className="text-stone-500 font-light text-lg">Thank you for your inquiry. We will be in touch shortly.</p>
</div>
</div>
</section>

<footer className="reveal-on-scroll text-[#F5F5F0] bg-stone-900 pt-28 pb-12 gpu-accelerate">
<div className="md:px-12 max-w-7xl mr-auto ml-auto pr-6 pl-6">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
<div className="space-y-6 lg:col-span-2">

<div className="flex items-center gap-3">
<span className="font-playfair text-xl md:text-2xl uppercase tracking-widest text-white font-medium">Buxton</span>

<img alt="Buxton Tree" className="h-8 md:h-9 w-auto object-contain translate-y-[1px]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/126183c7-d8d3-4525-ae46-3dcb5751e356_320w.png" style={{filter: 'invert(1)'}}/>
<span className="font-playfair text-xl md:text-2xl uppercase tracking-widest text-white font-medium">Capital</span>
</div>
</div>
<div className="space-y-6">
<h4 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Navigate</h4>
<ul className="space-y-4 text-sm font-light opacity-90">
<li className=""><a className="hover:text-white transition-colors" href="#about">About Us</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#team">Team</a></li>
<li className=""><a className="hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div className="space-y-6">
<h4 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Contact</h4>
<div className="space-y-4 text-sm font-light opacity-80 leading-relaxed">
<p className="">No. 9 Pembroke Street Upper, Dublin 2</p>
<p className="">Eircode: D02KR83</p>
<a className="hover:text-white transition-colors block mt-2 text-white/90" href="mailto:Info@buxtoncapital.ie">Info@buxtoncapital.ie</a>
</div>
</div>
<div className="space-y-6">
<h4 className="text-xs uppercase tracking-[0.2em] font-medium text-stone-500 mb-6">Location</h4>
<div className="w-full h-48 rounded-sm overflow-hidden bg-stone-800 relative">
<iframe allowfullscreen="" className="map-filter absolute inset-0 w-full h-full" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2382.374665184643!2d-6.254648923067886!3d53.33663677583626!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x48670e90c8c0e6e7%3A0x3f62252602736565!2s9%20Pembroke%20St%20Upper%2C%20Dublin%202%2C%20D02%20KR83!5e0!3m2!1sen!2sie!4v1709228812345!5m2!1sen!2sie" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</div>
<div className="border-t border-stone-800 pt-8 flex flex-col md:flex-row justify-between items-center opacity-40 text-xs font-light">
<p>© 2021 Buxton Capital. All rights reserved.</p>
</div>
</div>
</footer>

    </>
  );
}
