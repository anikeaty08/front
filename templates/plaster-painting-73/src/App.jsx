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



document.addEventListener("DOMContentLoaded", () => {
// Intersection Observer for Scroll Animations
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
// Inject styles for animation trigger
const style = document.createElement("style");
style.textContent = `
.animate-on-scroll { opacity: 0; transform: translateY(20px); filter: blur(5px); transition: all 0.8s cubic-bezier(0.2, 0.8, 0.2, 1); }
.animate-on-scroll.animate { opacity: 1; transform: translateY(0); filter: blur(0); }
`;
document.head.appendChild(style);
document.querySelectorAll(".animate-on-scroll").forEach((el) => observer.observe(el));
// Mobile Menu Logic
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const menuIcon = menuBtn.querySelector('iconify-icon');
let isMenuOpen = false;
menuBtn.addEventListener('click', () => {
isMenuOpen = !isMenuOpen;
if (isMenuOpen) {
mobileMenu.classList.remove('closed');
mobileMenu.classList.add('open');
menuIcon.setAttribute('icon', 'lucide:x');
document.body.style.overflow = 'hidden';
} else {
mobileMenu.classList.remove('open');
mobileMenu.classList.add('closed');
menuIcon.setAttribute('icon', 'lucide:menu');
document.body.style.overflow = '';
}
});
// Testimonial Slider Logic
const track = document.getElementById('testimonial-track');
const prevBtn = document.getElementById('prev-voice');
const nextBtn = document.getElementById('next-voice');
const slides = document.querySelectorAll('.testimonial-slide');
let currentIndex = 0;
function updateSlider() {
track.style.transform = `translateX(-${currentIndex * 100}%)`;
slides.forEach((slide, index) => {
if(index === currentIndex) {
slide.style.opacity = '1';
} else {
slide.style.opacity = '0.3';
}
});
}
updateSlider();
nextBtn.addEventListener('click', () => {
if (currentIndex < slides.length - 1) {
currentIndex++;
updateSlider();
} else {
currentIndex = 0;
updateSlider();
}
});
prevBtn.addEventListener('click', () => {
if (currentIndex > 0) {
currentIndex--;
updateSlider();
} else {
currentIndex = slides.length - 1;
updateSlider();
}
});
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
      

<nav bis_size='{"x":0,"y":1862,"w":1088,"h":81,"abs_x":440,"abs_y":1905}' className="fixed top-0 w-full z-50 border-b border-white/5 bg-zinc-950/90 backdrop-blur-md text-white">
<div bis_size='{"x":0,"y":1862,"w":1088,"h":80,"abs_x":440,"abs_y":1905}' className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between relative z-50">

<div bis_size='{"x":24,"y":1886,"w":202,"h":32,"abs_x":464,"abs_y":1929}' className="flex items-center gap-3">
<div bis_size='{"x":24,"y":1886,"w":32,"h":32,"abs_x":464,"abs_y":1929}' className="w-8 h-8 bg-white text-zinc-950 rounded-sm flex items-center justify-center">
<iconify-icon bis_size='{"x":31,"y":1893,"w":18,"h":18,"abs_x":471,"abs_y":1936}' icon="lucide:paint-roller" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span bis_size='{"x":68,"y":1890,"w":158,"h":24,"abs_x":508,"abs_y":1933}' className="text-base font-medium tracking-tight">Thuy Plaster &amp; Painting</span>
</div>

<div bis_size='{"x":417,"y":1894,"w":328,"h":16,"abs_x":857,"abs_y":1937}' className="hidden md:flex items-center gap-10 text-xs font-medium tracking-wide text-zinc-400">
<a bis_size='{"x":417,"y":1894,"w":48,"h":16,"abs_x":857,"abs_y":1937}' className="hover:text-white transition-colors" href="#services">Services</a>
<a bis_size='{"x":505,"y":1894,"w":43,"h":16,"abs_x":945,"abs_y":1937}' className="hover:text-white transition-colors" href="#about">Why Us</a>
<a bis_size='{"x":589,"y":1894,"w":72,"h":16,"abs_x":1029,"abs_y":1937}' className="hover:text-white transition-colors" href="#gallery">Recent Work</a>
<a bis_size='{"x":701,"y":1894,"w":43,"h":16,"abs_x":1141,"abs_y":1937}' className="hover:text-white transition-colors" href="#contact">Contact</a>
</div>

<div bis_size='{"x":936,"y":1886,"w":127,"h":32,"abs_x":1376,"abs_y":1929}' className="flex items-center gap-4">
<a bis_size='{"x":936,"y":1886,"w":127,"h":32,"abs_x":1376,"abs_y":1929}' className="hidden md:flex items-center gap-2 bg-white text-zinc-950 px-4 py-2 rounded-sm text-xs font-semibold hover:bg-zinc-200 transition-colors" href="tel:0434798198">
<iconify-icon bis_size='{"x":952,"y":1895,"w":14,"h":14,"abs_x":1392,"abs_y":1938}' icon="lucide:phone" strokeWidth="1.5" width="14"></iconify-icon>
                    0434 798 198
                </a>

<button bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="md:hidden text-zinc-400 hover:text-white transition-colors z-50" id="menu-btn">
<iconify-icon bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' icon="lucide:menu" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="fixed inset-0 bg-zinc-950 z-40 flex flex-col pt-32 px-6 closed md:hidden h-screen" id="mobile-menu">
<div bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="flex flex-col gap-8 text-2xl font-light tracking-tight text-white/90">
<a bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#services">
<span bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}'>Services</span>
<iconify-icon bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#about">
<span bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}'>Why Choose Us</span>
<iconify-icon bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#gallery">
<span bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}'>Gallery</span>
<iconify-icon bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
<a bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="border-b border-white/10 pb-4 flex justify-between items-center group" href="#contact">
<span bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}'>Contact</span>
<iconify-icon bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="opacity-0 group-hover:opacity-100 transition-opacity text-blue-500" icon="lucide:arrow-right" width="24"></iconify-icon>
</a>
</div>
<div bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="mt-auto mb-12 flex flex-col gap-4">
<a bis_size='{"x":0,"y":1862,"w":0,"h":0,"abs_x":440,"abs_y":1905}' className="w-full py-4 bg-blue-600 text-white text-center uppercase text-xs font-semibold tracking-widest rounded-sm" href="tel:0434798198">
                    Call 0434 798 198
                </a>
</div>
</div>
</nav>

<header bis_size='{"x":0,"y":0,"w":1088,"h":850,"abs_x":440,"abs_y":43}' className="relative w-full h-[850px] bg-zinc-900 overflow-hidden">

<img alt="Plastering and Painting" bis_size='{"x":0,"y":0,"w":1088,"h":850,"abs_x":440,"abs_y":43}' className="opacity-40 w-full h-full object-cover z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92bad968-bd99-4d0f-8b23-3e9ffc455334_3840w.jpg"/>
<div bis_size='{"x":0,"y":0,"w":1088,"h":850,"abs_x":440,"abs_y":43}' className="absolute inset-0 bg-gradient-to-b from-black/60 via-black/20 to-black/90"></div>
<div bis_size='{"x":0,"y":0,"w":1088,"h":850,"abs_x":440,"abs_y":43}' className="z-10 flex flex-col h-full max-w-screen-2xl mr-auto ml-auto pr-6 pl-6 relative justify-center">
<div bis_size='{"x":24,"y":202,"w":896,"h":444,"abs_x":464,"abs_y":245}' className="max-w-4xl pt-20">
<div bis_size='{"x":24,"y":302,"w":896,"h":16,"abs_x":464,"abs_y":345}' className="flex items-center gap-3 text-blue-400 mb-6 animate-on-scroll">
<span bis_size='{"x":24,"y":310,"w":32,"h":1,"abs_x":464,"abs_y":353}' className="w-8 h-[1px] bg-blue-400"></span>
<span bis_size='{"x":68,"y":302,"w":268,"h":16,"abs_x":508,"abs_y":345}' className="text-xs font-medium tracking-widest uppercase">Serving Sunshine &amp; Morisset, NSW</span>
</div>
<h1 bis_size='{"x":24,"y":342,"w":896,"h":144,"abs_x":464,"abs_y":385}' className="text-4xl md:text-7xl font-medium text-white tracking-tight leading-[1.05] mb-8 animate-on-scroll">
                    Professional Plasterboard, <br bis_size='{"x":821,"y":337,"w":0,"h":83,"abs_x":1261,"abs_y":380}'/>
<span bis_size='{"x":24,"y":409,"w":785,"h":83,"abs_x":464,"abs_y":452}' className="text-white/60">Tiling &amp; Painting Services.</span>
</h1>
<p bis_size='{"x":24,"y":518,"w":576,"h":58,"abs_x":464,"abs_y":561}' className="text-lg text-zinc-300 max-w-xl font-light leading-relaxed animate-on-scroll">
                    Reliable workmanship and affordable pricing for your home or business. We treat your property with the respect it deserves.
                </p>
<div bis_size='{"x":24,"y":617,"w":896,"h":50,"abs_x":464,"abs_y":660}' className="flex flex-col sm:flex-row gap-4 mt-10 animate-on-scroll">
<a bis_size='{"x":24,"y":617,"w":260,"h":50,"abs_x":464,"abs_y":660}' className="bg-blue-600 text-white px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-blue-500 transition-colors shadow-[0_0_30px_rgba(37,99,235,0.2)]" href="tel:0434798198">
<iconify-icon bis_size='{"x":56,"y":634,"w":16,"h":16,"abs_x":496,"abs_y":677}' icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
                        Call Now: 0434 798 198
                    </a>
<a bis_size='{"x":300,"y":617,"w":201,"h":50,"abs_x":740,"abs_y":660}' className="bg-white/10 backdrop-blur-sm border border-white/20 text-white px-8 py-4 rounded-full font-medium text-xs tracking-widest uppercase flex items-center justify-center gap-3 hover:bg-white hover:text-zinc-900 transition-colors" href="#contact">
                        Get a Free Quote
                    </a>
</div>
</div>

<div bis_size='{"x":48,"y":780,"w":524,"h":42,"abs_x":488,"abs_y":823}' className="absolute bottom-12 left-6 md:left-12 flex flex-wrap gap-6 animate-on-scroll hidden md:flex">
<div bis_size='{"x":48,"y":780,"w":126,"h":42,"abs_x":488,"abs_y":823}' className="flex items-center gap-3 bg-zinc-950/50 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full">
<div bis_size='{"x":65,"y":797,"w":8,"h":8,"abs_x":505,"abs_y":840}' className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span bis_size='{"x":85,"y":793,"w":72,"h":16,"abs_x":525,"abs_y":836}' className="text-xs font-medium text-white tracking-wide">Fully Insured</span>
</div>
<div bis_size='{"x":198,"y":780,"w":177,"h":42,"abs_x":638,"abs_y":823}' className="flex items-center gap-3 bg-zinc-950/50 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full">
<iconify-icon bis_size='{"x":215,"y":794,"w":14,"h":14,"abs_x":655,"abs_y":837}' className="text-blue-400" icon="lucide:map-pin" width="14"></iconify-icon>
<span bis_size='{"x":241,"y":793,"w":117,"h":16,"abs_x":681,"abs_y":836}' className="text-xs font-medium text-white tracking-wide">Local NSW Business</span>
</div>
<div bis_size='{"x":400,"y":780,"w":172,"h":42,"abs_x":840,"abs_y":823}' className="flex items-center gap-3 bg-zinc-950/50 backdrop-blur-md border border-white/10 px-4 py-3 rounded-full">
<iconify-icon bis_size='{"x":417,"y":794,"w":14,"h":14,"abs_x":857,"abs_y":837}' className="text-blue-400" icon="lucide:award" width="14"></iconify-icon>
<span bis_size='{"x":443,"y":793,"w":112,"h":16,"abs_x":883,"abs_y":836}' className="text-xs font-medium text-white tracking-wide">Years of Experience</span>
</div>
</div>
</div>
</header>

<section bis_size='{"x":0,"y":850,"w":1088,"h":1019,"abs_x":440,"abs_y":893}' className="py-24 md:py-32 bg-white" id="services">
<div bis_size='{"x":0,"y":978,"w":1088,"h":763,"abs_x":440,"abs_y":1021}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":978,"w":1040,"h":763,"abs_x":464,"abs_y":1021}' className="grid grid-cols-1 lg:grid-cols-12 gap-16">

<div bis_size='{"x":24,"y":998,"w":672,"h":338,"abs_x":464,"abs_y":1041}' className="lg:col-span-8 animate-on-scroll">
<div bis_size='{"x":24,"y":998,"w":672,"h":18,"abs_x":464,"abs_y":1041}' className="flex items-center gap-2 mb-8">
<iconify-icon bis_size='{"x":24,"y":998,"w":18,"h":18,"abs_x":464,"abs_y":1041}' className="text-blue-600" icon="lucide:layers" strokeWidth="1.5" width="18"></iconify-icon>
<span bis_size='{"x":50,"y":999,"w":112,"h":16,"abs_x":490,"abs_y":1042}' className="text-xs text-zinc-500 font-medium uppercase tracking-widest">Our Expertise</span>
</div>
<h2 bis_size='{"x":24,"y":1048,"w":672,"h":288,"abs_x":464,"abs_y":1091}' className="text-3xl md:text-5xl font-medium tracking-tight text-zinc-900 leading-[1.1]">
                        We provide high-quality finishing services for renovations and new builds. From 
                        <span bis_size='{"x":24,"y":1140,"w":412,"h":103,"abs_x":464,"abs_y":1183}' className="text-zinc-400">smooth plasterboard</span> 
                        to precise tiling and clean painting, we ensure 
                        <span bis_size='{"x":24,"y":1288,"w":417,"h":48,"abs_x":464,"abs_y":1331}' className="text-blue-700 bg-blue-50 px-2 rounded-sm inline-block">professional results.</span>
</h2>
</div>

<div bis_size='{"x":24,"y":1460,"w":1040,"h":281,"abs_x":464,"abs_y":1503}' className="lg:col-span-12 grid grid-cols-1 md:grid-cols-3 gap-12 mt-20 border-t border-zinc-100 pt-20">

<div bis_size='{"x":24,"y":1561,"w":314,"h":200,"abs_x":464,"abs_y":1604}' className="group animate-on-scroll">
<div bis_size='{"x":24,"y":1561,"w":48,"h":48,"abs_x":464,"abs_y":1604}' className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon bis_size='{"x":38,"y":1575,"w":20,"h":20,"abs_x":478,"abs_y":1618}' icon="lucide:hammer" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":24,"y":1633,"w":314,"h":28,"abs_x":464,"abs_y":1676}' className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Plasterboard Services</h3>
<ul bis_size='{"x":24,"y":1677,"w":314,"h":84,"abs_x":464,"abs_y":1720}' className="space-y-3">
<li bis_size='{"x":24,"y":1677,"w":314,"h":20,"abs_x":464,"abs_y":1720}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":24,"y":1679,"w":16,"h":16,"abs_x":464,"abs_y":1722}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                New installations
                            </li>
<li bis_size='{"x":24,"y":1709,"w":314,"h":20,"abs_x":464,"abs_y":1752}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":24,"y":1711,"w":16,"h":16,"abs_x":464,"abs_y":1754}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Repairs &amp; patching
                            </li>
<li bis_size='{"x":24,"y":1741,"w":314,"h":20,"abs_x":464,"abs_y":1784}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":24,"y":1743,"w":16,"h":16,"abs_x":464,"abs_y":1786}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Ceiling &amp; wall finishing
                            </li>
</ul>
</div>

<div bis_size='{"x":386,"y":1561,"w":314,"h":200,"abs_x":826,"abs_y":1604}' className="group animate-on-scroll">
<div bis_size='{"x":386,"y":1561,"w":48,"h":48,"abs_x":826,"abs_y":1604}' className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon bis_size='{"x":400,"y":1575,"w":20,"h":20,"abs_x":840,"abs_y":1618}' icon="lucide:grid" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":386,"y":1633,"w":314,"h":28,"abs_x":826,"abs_y":1676}' className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">Bathroom Tiling</h3>
<ul bis_size='{"x":386,"y":1677,"w":314,"h":84,"abs_x":826,"abs_y":1720}' className="space-y-3">
<li bis_size='{"x":386,"y":1677,"w":314,"h":20,"abs_x":826,"abs_y":1720}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":386,"y":1679,"w":16,"h":16,"abs_x":826,"abs_y":1722}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Wall &amp; floor tiling
                            </li>
<li bis_size='{"x":386,"y":1709,"w":314,"h":20,"abs_x":826,"abs_y":1752}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":386,"y":1711,"w":16,"h":16,"abs_x":826,"abs_y":1754}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Waterproofing preparation
                            </li>
<li bis_size='{"x":386,"y":1741,"w":314,"h":20,"abs_x":826,"abs_y":1784}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":386,"y":1743,"w":16,"h":16,"abs_x":826,"abs_y":1786}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Renovations &amp; new builds
                            </li>
</ul>
</div>

<div bis_size='{"x":749,"y":1561,"w":314,"h":200,"abs_x":1189,"abs_y":1604}' className="group animate-on-scroll">
<div bis_size='{"x":749,"y":1561,"w":48,"h":48,"abs_x":1189,"abs_y":1604}' className="w-12 h-12 bg-zinc-50 rounded-full flex items-center justify-center border border-zinc-100 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors duration-300">
<iconify-icon bis_size='{"x":763,"y":1575,"w":20,"h":20,"abs_x":1203,"abs_y":1618}' icon="lucide:paint-bucket" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":749,"y":1633,"w":314,"h":28,"abs_x":1189,"abs_y":1676}' className="text-lg font-semibold text-zinc-900 mb-4 tracking-tight">House Painting</h3>
<ul bis_size='{"x":749,"y":1677,"w":314,"h":84,"abs_x":1189,"abs_y":1720}' className="space-y-3">
<li bis_size='{"x":749,"y":1677,"w":314,"h":20,"abs_x":1189,"abs_y":1720}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":749,"y":1679,"w":16,"h":16,"abs_x":1189,"abs_y":1722}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Interior &amp; Exterior
                            </li>
<li bis_size='{"x":749,"y":1709,"w":314,"h":20,"abs_x":1189,"abs_y":1752}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":749,"y":1711,"w":16,"h":16,"abs_x":1189,"abs_y":1754}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Residential &amp; Commercial
                            </li>
<li bis_size='{"x":749,"y":1741,"w":314,"h":20,"abs_x":1189,"abs_y":1784}' className="flex items-start gap-3 text-sm text-zinc-600 font-light">
<iconify-icon bis_size='{"x":749,"y":1743,"w":16,"h":16,"abs_x":1189,"abs_y":1786}' className="text-blue-600 mt-0.5 shrink-0" icon="lucide:check" width="16"></iconify-icon>
                                Quality paints &amp; neat work
                            </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1869,"w":1088,"h":894,"abs_x":440,"abs_y":1912}' className="py-20 bg-zinc-50 border-y border-zinc-200" id="about">
<div bis_size='{"x":0,"y":1950,"w":1088,"h":732,"abs_x":440,"abs_y":1993}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":1970,"w":1040,"h":108,"abs_x":464,"abs_y":2013}' className="flex flex-col md:flex-row justify-between items-end mb-12 animate-on-scroll">
<div bis_size='{"x":24,"y":1970,"w":265,"h":108,"abs_x":464,"abs_y":2013}'>
<span bis_size='{"x":24,"y":1976,"w":118,"h":14,"abs_x":464,"abs_y":2019}' className="text-xs font-medium text-blue-600 uppercase tracking-widest">Why Choose Us</span>
<h2 bis_size='{"x":24,"y":2006,"w":265,"h":72,"abs_x":464,"abs_y":2049}' className="text-3xl font-medium text-zinc-900 mt-3 tracking-tight">Committed to Quality <br bis_size='{"x":289,"y":2006,"w":0,"h":34,"abs_x":729,"abs_y":2049}'/>&amp; Cleanliness</h2>
</div>
</div>
<div bis_size='{"x":24,"y":2106,"w":1040,"h":576,"abs_x":464,"abs_y":2149}' className="grid grid-cols-1 lg:grid-cols-2 gap-8">

<div bis_size='{"x":24,"y":2126,"w":504,"h":576,"abs_x":464,"abs_y":2169}' className="overflow-hidden group animate-on-scroll order-2 lg:order-1 bg-rose-600 rounded-sm relative">
<img alt="Clean Room Painting" bis_size='{"x":24,"y":2126,"w":504,"h":500,"abs_x":464,"abs_y":2169}' className="transition duration-1000 group-hover:scale-105 filter w-full h-[500px] object-cover brightness-95" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e2b8cb07-8567-4cc2-a7f9-4d7c31698b16_1600w.jpg"/>
<div bis_size='{"x":48,"y":2621,"w":277,"h":57,"abs_x":488,"abs_y":2664}' className="absolute bottom-6 left-6 text-white">
<div bis_size='{"x":48,"y":2622,"w":95,"h":24,"abs_x":488,"abs_y":2665}' className="text-xs font-mono text-white/90 mb-1 bg-black/30 backdrop-blur-sm px-2 py-1 inline-block rounded-sm">NSW SERVICE</div>
<div bis_size='{"x":48,"y":2650,"w":277,"h":28,"abs_x":488,"abs_y":2693}' className="text-xl font-medium tracking-tight drop-shadow-md">We treat your home like our own.</div>
</div>
</div>

<div bis_size='{"x":560,"y":2126,"w":504,"h":576,"abs_x":1000,"abs_y":2169}' className="bg-white p-12 md:p-16 flex flex-col justify-center border border-zinc-200 rounded-sm animate-on-scroll order-1 lg:order-2">
<div bis_size='{"x":625,"y":2191,"w":374,"h":25,"abs_x":1065,"abs_y":2234}' className="flex items-center justify-between mb-10">
<span bis_size='{"x":625,"y":2193,"w":198,"h":20,"abs_x":1065,"abs_y":2236}' className="text-sm font-semibold text-zinc-900 tracking-wide">THUY PLASTER &amp; PAINTING</span>
<span bis_size='{"x":877,"y":2191,"w":121,"h":25,"abs_x":1317,"abs_y":2234}' className="px-3 py-1 bg-green-50 text-green-700 text-[10px] uppercase tracking-wider font-bold rounded-sm border border-green-100">Local Business</span>
</div>
<div bis_size='{"x":625,"y":2256,"w":374,"h":284,"abs_x":1065,"abs_y":2299}' className="space-y-8">
<div bis_size='{"x":625,"y":2256,"w":374,"h":73,"abs_x":1065,"abs_y":2299}' className="flex gap-4">
<div bis_size='{"x":625,"y":2256,"w":32,"h":32,"abs_x":1065,"abs_y":2299}' className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":633,"y":2264,"w":16,"h":16,"abs_x":1073,"abs_y":2307}' icon="lucide:clock" width="16"></iconify-icon>
</div>
<div bis_size='{"x":673,"y":2256,"w":326,"h":73,"abs_x":1113,"abs_y":2299}' className="">
<h4 bis_size='{"x":673,"y":2256,"w":326,"h":24,"abs_x":1113,"abs_y":2299}' className="text-base font-semibold text-zinc-900">Reliable &amp; On Time</h4>
<p bis_size='{"x":673,"y":2284,"w":326,"h":45,"abs_x":1113,"abs_y":2327}' className="text-sm text-zinc-500 mt-1 leading-relaxed">We respect your schedule and complete jobs within the agreed timeframe.</p>
</div>
</div>
<div bis_size='{"x":625,"y":2361,"w":374,"h":73,"abs_x":1065,"abs_y":2404}' className="flex gap-4">
<div bis_size='{"x":625,"y":2361,"w":32,"h":32,"abs_x":1065,"abs_y":2404}' className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":633,"y":2369,"w":16,"h":16,"abs_x":1073,"abs_y":2412}' icon="lucide:wallet" width="16"></iconify-icon>
</div>
<div bis_size='{"x":673,"y":2361,"w":326,"h":73,"abs_x":1113,"abs_y":2404}' className="">
<h4 bis_size='{"x":673,"y":2361,"w":326,"h":24,"abs_x":1113,"abs_y":2404}' className="text-base font-semibold text-zinc-900">Transparent Pricing</h4>
<p bis_size='{"x":673,"y":2389,"w":326,"h":45,"abs_x":1113,"abs_y":2432}' className="text-sm text-zinc-500 mt-1 leading-relaxed">Affordable quotes with no hidden fees. We work within your budget.</p>
</div>
</div>
<div bis_size='{"x":625,"y":2467,"w":374,"h":73,"abs_x":1065,"abs_y":2510}' className="flex gap-4">
<div bis_size='{"x":625,"y":2467,"w":32,"h":32,"abs_x":1065,"abs_y":2510}' className="w-8 h-8 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
<iconify-icon bis_size='{"x":633,"y":2475,"w":16,"h":16,"abs_x":1073,"abs_y":2518}' icon="lucide:shield-check" width="16"></iconify-icon>
</div>
<div bis_size='{"x":673,"y":2467,"w":326,"h":73,"abs_x":1113,"abs_y":2510}' className="">
<h4 bis_size='{"x":673,"y":2467,"w":326,"h":24,"abs_x":1113,"abs_y":2510}' className="text-base font-semibold text-zinc-900">Attention to Detail</h4>
<p bis_size='{"x":673,"y":2495,"w":326,"h":45,"abs_x":1113,"abs_y":2538}' className="text-sm text-zinc-500 mt-1 leading-relaxed">Clean, respectful on-site conduct and a high-quality finish every time.</p>
</div>
</div>
</div>
<div bis_size='{"x":625,"y":2588,"w":374,"h":49,"abs_x":1065,"abs_y":2631}' className="mt-12 pt-8 border-t border-zinc-100">
<a bis_size='{"x":625,"y":2621,"w":374,"h":16,"abs_x":1065,"abs_y":2664}' className="flex items-center gap-2 text-xs font-bold text-zinc-900 uppercase tracking-widest hover:text-blue-600 transition-colors" href="#contact">
                            Request Quote <iconify-icon bis_size='{"x":752,"y":2621,"w":16,"h":16,"abs_x":1192,"abs_y":2664}' icon="lucide:arrow-right" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":2763,"w":1088,"h":462,"abs_x":440,"abs_y":2806}' className="py-24 bg-zinc-900 text-white overflow-hidden">
<div bis_size='{"x":0,"y":2859,"w":1088,"h":270,"abs_x":440,"abs_y":2902}' className="max-w-screen-2xl mx-auto px-6 text-center">
<span bis_size='{"x":24,"y":2879,"w":1040,"h":16,"abs_x":464,"abs_y":2922}' className="text-xs text-blue-400 font-bold uppercase tracking-widest mb-4 block animate-on-scroll">Local Coverage</span>
<h2 bis_size='{"x":24,"y":2911,"w":1040,"h":48,"abs_x":464,"abs_y":2954}' className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-16 animate-on-scroll">Service Areas</h2>
<div bis_size='{"x":96,"y":3023,"w":896,"h":62,"abs_x":536,"abs_y":3066}' className="flex flex-wrap justify-center gap-4 md:gap-8 max-w-4xl mx-auto animate-on-scroll">
<div bis_size='{"x":236,"y":3023,"w":143,"h":62,"abs_x":676,"abs_y":3066}' className="px-8 py-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
<span bis_size='{"x":269,"y":3044,"w":77,"h":20,"abs_x":709,"abs_y":3087}' className="text-lg font-light tracking-wide">Sunshine</span>
</div>
<div bis_size='{"x":411,"y":3023,"w":137,"h":62,"abs_x":851,"abs_y":3066}' className="px-8 py-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
<span bis_size='{"x":444,"y":3044,"w":71,"h":20,"abs_x":884,"abs_y":3087}' className="text-lg font-light tracking-wide">Morisset</span>
</div>
<div bis_size='{"x":581,"y":3023,"w":270,"h":62,"abs_x":1021,"abs_y":3066}' className="px-8 py-4 bg-white/5 border border-white/10 rounded-sm backdrop-blur-sm">
<span bis_size='{"x":614,"y":3044,"w":204,"h":20,"abs_x":1054,"abs_y":3087}' className="text-lg font-light tracking-wide">Surrounding NSW Areas</span>
</div>
</div>
<p bis_size='{"x":24,"y":3125,"w":1040,"h":24,"abs_x":464,"abs_y":3168}' className="mt-10 text-zinc-400 font-light animate-on-scroll">
                Not sure if we service your area? <a bis_size='{"x":602,"y":3128,"w":119,"h":19,"abs_x":1042,"abs_y":3171}' className="text-white border-b border-white/30 hover:border-white transition-colors" href="tel:0434798198">Call us to check.</a>
</p>
</div>
</section>

<section bis_size='{"x":0,"y":3225,"w":1088,"h":660,"abs_x":440,"abs_y":3268}' className="py-24 bg-white" id="gallery">
<div bis_size='{"x":0,"y":3321,"w":1088,"h":468,"abs_x":440,"abs_y":3364}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":3341,"w":1040,"h":72,"abs_x":464,"abs_y":3384}' className="flex flex-col md:flex-row md:items-end justify-between mb-20 gap-8 animate-on-scroll">
<div bis_size='{"x":24,"y":3341,"w":240,"h":72,"abs_x":464,"abs_y":3384}' className="max-w-xl">
<div bis_size='{"x":24,"y":3341,"w":240,"h":16,"abs_x":464,"abs_y":3384}' className="flex items-center gap-2 mb-4">
<span bis_size='{"x":24,"y":3346,"w":6,"h":6,"abs_x":464,"abs_y":3389}' className="w-1.5 h-1.5 bg-blue-600 rounded-full"></span>
<span bis_size='{"x":38,"y":3341,"w":115,"h":16,"abs_x":478,"abs_y":3384}' className="text-xs font-bold text-zinc-400 uppercase tracking-widest">Our Portfolio</span>
</div>
<h2 bis_size='{"x":24,"y":3373,"w":240,"h":40,"abs_x":464,"abs_y":3416}' className="text-4xl font-medium text-zinc-900 tracking-tight">Recent Projects</h2>
</div>
</div>
<div bis_size='{"x":24,"y":3473,"w":1040,"h":316,"abs_x":464,"abs_y":3516}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-x-8 gap-y-16">

<div bis_size='{"x":24,"y":3493,"w":325,"h":316,"abs_x":464,"abs_y":3536}' className="group cursor-pointer animate-on-scroll">
<div bis_size='{"x":24,"y":3493,"w":325,"h":243,"abs_x":464,"abs_y":3536}' className="relative bg-zinc-100 aspect-[4/3] rounded-sm mb-6 overflow-hidden">
<div bis_size='{"x":40,"y":3509,"w":98,"h":24,"abs_x":480,"abs_y":3552}' className="absolute top-4 left-4 z-10">
<span bis_size='{"x":40,"y":3512,"w":98,"h":23,"abs_x":480,"abs_y":3555}' className="text-[10px] font-bold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest">Plastering</span>
</div>
<img alt="Plastering" bis_size='{"x":24,"y":3493,"w":325,"h":243,"abs_x":464,"abs_y":3536}' className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b59f3086-f7ff-4bc7-b336-47ebebbc293d_800w.jpg"/>
</div>
<div bis_size='{"x":24,"y":3761,"w":325,"h":48,"abs_x":464,"abs_y":3804}'>
<h3 bis_size='{"x":24,"y":3761,"w":325,"h":28,"abs_x":464,"abs_y":3804}' className="text-lg font-medium text-zinc-900">Ceiling Repair &amp; Finish</h3>
<p bis_size='{"x":24,"y":3793,"w":325,"h":16,"abs_x":464,"abs_y":3836}' className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Sunshine, NSW</p>
</div>
</div>

<div bis_size='{"x":381,"y":3493,"w":325,"h":316,"abs_x":821,"abs_y":3536}' className="group cursor-pointer animate-on-scroll">
<div bis_size='{"x":381,"y":3493,"w":325,"h":244,"abs_x":821,"abs_y":3536}' className="relative bg-zinc-100 aspect-[4/3] rounded-sm mb-6 overflow-hidden">
<div bis_size='{"x":397,"y":3509,"w":62,"h":24,"abs_x":837,"abs_y":3552}' className="absolute top-4 left-4 z-10">
<span bis_size='{"x":397,"y":3512,"w":62,"h":23,"abs_x":837,"abs_y":3555}' className="text-[10px] font-bold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest">Tiling</span>
</div>
<img alt="Tiling" bis_size='{"x":381,"y":3493,"w":325,"h":244,"abs_x":821,"abs_y":3536}' className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e737cde-8e7c-4f70-83f5-5c0df30de623_800w.jpg"/>
</div>
<div bis_size='{"x":381,"y":3761,"w":325,"h":48,"abs_x":821,"abs_y":3804}'>
<h3 bis_size='{"x":381,"y":3761,"w":325,"h":28,"abs_x":821,"abs_y":3804}' className="text-lg font-medium text-zinc-900">Bathroom Renovation</h3>
<p bis_size='{"x":381,"y":3793,"w":325,"h":16,"abs_x":821,"abs_y":3836}' className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Morisset, NSW</p>
</div>
</div>

<div bis_size='{"x":738,"y":3493,"w":325,"h":316,"abs_x":1178,"abs_y":3536}' className="group cursor-pointer animate-on-scroll">
<div bis_size='{"x":738,"y":3493,"w":325,"h":244,"abs_x":1178,"abs_y":3536}' className="relative bg-zinc-100 aspect-[4/3] rounded-sm mb-6 overflow-hidden">
<div bis_size='{"x":754,"y":3509,"w":79,"h":24,"abs_x":1194,"abs_y":3552}' className="absolute top-4 left-4 z-10">
<span bis_size='{"x":754,"y":3512,"w":79,"h":23,"abs_x":1194,"abs_y":3555}' className="text-[10px] font-bold text-zinc-900 bg-white/90 backdrop-blur px-3 py-1.5 rounded-sm uppercase tracking-widest">Painting</span>
</div>
<img alt="Painting" bis_size='{"x":738,"y":3493,"w":325,"h":244,"abs_x":1178,"abs_y":3536}' className="transition duration-700 group-hover:scale-105 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7d669b1c-c409-4688-b6a4-b01c343a8401_800w.jpg"/>
</div>
<div bis_size='{"x":738,"y":3761,"w":325,"h":48,"abs_x":1178,"abs_y":3804}'>
<h3 bis_size='{"x":738,"y":3761,"w":325,"h":28,"abs_x":1178,"abs_y":3804}' className="text-lg font-medium text-zinc-900">Interior Repaint</h3>
<p bis_size='{"x":738,"y":3793,"w":325,"h":16,"abs_x":1178,"abs_y":3836}' className="text-xs text-zinc-500 mt-1 uppercase tracking-wide">Residential</p>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3885,"w":1088,"h":592,"abs_x":440,"abs_y":3928}' className="py-24 bg-zinc-50 border-t border-zinc-200 overflow-hidden">
<div bis_size='{"x":0,"y":3982,"w":1088,"h":399,"abs_x":440,"abs_y":4025}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":4002,"w":1040,"h":40,"abs_x":464,"abs_y":4045}' className="flex justify-between items-start mb-12 animate-on-scroll">
<h2 bis_size='{"x":24,"y":4002,"w":256,"h":40,"abs_x":464,"abs_y":4045}' className="text-3xl md:text-4xl font-medium text-zinc-900 tracking-tight">What Locals Say</h2>
<div bis_size='{"x":976,"y":4002,"w":88,"h":40,"abs_x":1416,"abs_y":4045}' className="flex gap-2">
<button bis_size='{"x":976,"y":4002,"w":40,"h":40,"abs_x":1416,"abs_y":4045}' className="w-10 h-10 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-600 transition duration-300" id="prev-voice">
<iconify-icon bis_size='{"x":986,"y":4012,"w":20,"h":20,"abs_x":1426,"abs_y":4055}' icon="lucide:arrow-left" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button bis_size='{"x":1024,"y":4002,"w":40,"h":40,"abs_x":1464,"abs_y":4045}' className="w-10 h-10 border border-zinc-300 bg-white rounded-full flex items-center justify-center text-zinc-500 hover:text-blue-600 hover:border-blue-600 transition duration-300" id="next-voice">
<iconify-icon bis_size='{"x":1034,"y":4012,"w":20,"h":20,"abs_x":1474,"abs_y":4055}' icon="lucide:arrow-right" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>

<div bis_size='{"x":24,"y":4070,"w":1040,"h":311,"abs_x":464,"abs_y":4113}' className="relative w-full overflow-hidden">
<div bis_size='{"x":24,"y":4070,"w":1040,"h":311,"abs_x":464,"abs_y":4113}' className="slider-track flex w-full" id="testimonial-track" style={{transform: 'translateX(0%)'}}>

<div bis_size='{"x":24,"y":4070,"w":1040,"h":311,"abs_x":464,"abs_y":4113}' className="testimonial-slide min-w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center" style={{opacity: '1'}}>
<div bis_size='{"x":24,"y":4070,"w":1040,"h":311,"abs_x":464,"abs_y":4113}' className="md:col-span-12 bg-white p-12 md:p-16 border border-zinc-200 rounded-sm shadow-sm">
<div bis_size='{"x":89,"y":4135,"w":910,"h":20,"abs_x":529,"abs_y":4178}' className="flex gap-1 text-blue-500 mb-6">
<iconify-icon bis_size='{"x":89,"y":4135,"w":20,"h":20,"abs_x":529,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":113,"y":4135,"w":20,"h":20,"abs_x":553,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":137,"y":4135,"w":20,"h":20,"abs_x":577,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":161,"y":4135,"w":20,"h":20,"abs_x":601,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":185,"y":4135,"w":20,"h":20,"abs_x":625,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<p bis_size='{"x":89,"y":4179,"w":910,"h":60,"abs_x":529,"abs_y":4222}' className="text-2xl text-zinc-800 leading-tight font-light tracking-tight mb-8">
                                "Thuy's team was very professional and finished on time. The plastering work was seamless. Highly recommended for anyone in Sunshine."
                            </p>
<div bis_size='{"x":89,"y":4271,"w":910,"h":45,"abs_x":529,"abs_y":4314}' className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div bis_size='{"x":89,"y":4296,"w":68,"h":20,"abs_x":529,"abs_y":4339}' className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">Sarah J.</div>
<div bis_size='{"x":173,"y":4298,"w":92,"h":16,"abs_x":613,"abs_y":4341}' className="text-xs text-zinc-500 uppercase tracking-widest">Homeowner</div>
</div>
</div>
</div>

<div bis_size='{"x":1064,"y":4070,"w":1040,"h":311,"abs_x":1504,"abs_y":4113}' className="testimonial-slide min-w-full grid grid-cols-1 md:grid-cols-12 gap-8 items-center" style={{opacity: '0.3'}}>
<div bis_size='{"x":1064,"y":4070,"w":1040,"h":311,"abs_x":1504,"abs_y":4113}' className="md:col-span-12 bg-white p-12 md:p-16 border border-zinc-200 rounded-sm shadow-sm">
<div bis_size='{"x":1129,"y":4135,"w":910,"h":20,"abs_x":1569,"abs_y":4178}' className="flex gap-1 text-blue-500 mb-6">
<iconify-icon bis_size='{"x":1129,"y":4135,"w":20,"h":20,"abs_x":1569,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":1153,"y":4135,"w":20,"h":20,"abs_x":1593,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":1177,"y":4135,"w":20,"h":20,"abs_x":1617,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":1201,"y":4135,"w":20,"h":20,"abs_x":1641,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
<iconify-icon bis_size='{"x":1225,"y":4135,"w":20,"h":20,"abs_x":1665,"abs_y":4178}' fill="currentColor" icon="lucide:star" width="20"></iconify-icon>
</div>
<p bis_size='{"x":1129,"y":4179,"w":910,"h":60,"abs_x":1569,"abs_y":4222}' className="text-2xl text-zinc-800 leading-tight font-light tracking-tight mb-8">
                                "Great price and excellent workmanship on our bathroom tiling. They left the place spotless afterwards."
                            </p>
<div bis_size='{"x":1129,"y":4271,"w":910,"h":45,"abs_x":1569,"abs_y":4314}' className="flex items-center gap-4 border-t border-zinc-100 pt-6">
<div bis_size='{"x":1129,"y":4296,"w":81,"h":20,"abs_x":1569,"abs_y":4339}' className="text-sm font-semibold text-zinc-900 uppercase tracking-wide">Michael T.</div>
<div bis_size='{"x":1226,"y":4298,"w":143,"h":16,"abs_x":1666,"abs_y":4341}' className="text-xs text-zinc-500 uppercase tracking-widest">Renovation Client</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":24,"y":4497,"w":1040,"h":472,"abs_x":464,"abs_y":4540}' className="flex shadow-blue-900/20 animate-on-scroll md:mx-6 text-center bg-teal-800 rounded-sm mb-12 py-24 shadow-2xl items-center justify-center" id="contact">
<div bis_size='{"x":208,"y":4593,"w":672,"h":280,"abs_x":648,"abs_y":4636}' className="max-w-2xl px-4">
<h2 bis_size='{"x":224,"y":4593,"w":640,"h":96,"abs_x":664,"abs_y":4636}' className="text-3xl md:text-5xl font-medium text-white tracking-tight mb-6">
                Need Plasterboard, Tiling or Painting done right?
            </h2>
<p bis_size='{"x":320,"y":4713,"w":448,"h":56,"abs_x":760,"abs_y":4756}' className="text-blue-100 mb-10 max-w-md mx-auto font-light text-lg">
                Contact Thuy Plaster and Painting Service today for a free, no-obligation quote.
            </p>
<div bis_size='{"x":224,"y":4809,"w":640,"h":64,"abs_x":664,"abs_y":4852}' className="flex flex-col md:flex-row justify-center gap-4">
<a bis_size='{"x":331,"y":4809,"w":193,"h":64,"abs_x":771,"abs_y":4852}' className="flex items-center justify-center gap-3 bg-white text-blue-600 px-8 py-4 rounded-sm hover:bg-zinc-100 transition shadow-xl" href="tel:0434798198">
<iconify-icon bis_size='{"x":363,"y":4831,"w":20,"h":20,"abs_x":803,"abs_y":4874}' icon="lucide:phone" strokeWidth="2" width="20"></iconify-icon>
<div bis_size='{"x":395,"y":4826,"w":97,"h":30,"abs_x":835,"abs_y":4869}' className="text-left">
<div bis_size='{"x":395,"y":4826,"w":97,"h":10,"abs_x":835,"abs_y":4869}' className="text-[10px] uppercase tracking-widest leading-none text-blue-400 mb-1">Call Us</div>
<div bis_size='{"x":395,"y":4840,"w":97,"h":16,"abs_x":835,"abs_y":4883}' className="text-base font-bold leading-none">0434 798 198</div>
</div>
</a>
<button bis_size='{"x":541,"y":4809,"w":215,"h":64,"abs_x":981,"abs_y":4852}' className="flex items-center justify-center gap-3 bg-blue-700 text-white border border-blue-500 px-8 py-4 rounded-sm hover:bg-blue-800 transition">
<iconify-icon bis_size='{"x":574,"y":4831,"w":20,"h":20,"abs_x":1014,"abs_y":4874}' icon="lucide:mail" strokeWidth="2" width="20"></iconify-icon>
<div bis_size='{"x":606,"y":4826,"w":117,"h":30,"abs_x":1046,"abs_y":4869}' className="text-left">
<div bis_size='{"x":606,"y":4826,"w":117,"h":10,"abs_x":1046,"abs_y":4869}' className="text-[10px] uppercase tracking-widest leading-none text-blue-300 mb-1">Email Quote</div>
<div bis_size='{"x":606,"y":4840,"w":117,"h":16,"abs_x":1046,"abs_y":4883}' className="text-base font-bold leading-none">Request Online</div>
</div>
</button>
</div>
</div>
</section>

<footer bis_size='{"x":0,"y":4997,"w":1088,"h":752,"abs_x":440,"abs_y":5040}' className="bg-zinc-950 text-white pt-24 pb-12 border-t border-white/5">
<div bis_size='{"x":0,"y":5094,"w":1088,"h":607,"abs_x":440,"abs_y":5137}' className="max-w-screen-2xl mx-auto px-6">
<div bis_size='{"x":24,"y":5094,"w":1040,"h":142,"abs_x":464,"abs_y":5137}' className="flex flex-col md:flex-row justify-between mb-20">
<div bis_size='{"x":24,"y":5094,"w":448,"h":142,"abs_x":464,"abs_y":5137}' className="max-w-md mb-12 md:mb-0">
<div bis_size='{"x":24,"y":5094,"w":448,"h":40,"abs_x":464,"abs_y":5137}' className="flex items-center gap-3 mb-6">
<div bis_size='{"x":24,"y":5094,"w":40,"h":40,"abs_x":464,"abs_y":5137}' className="w-10 h-10 bg-blue-600 rounded-sm flex items-center justify-center text-white">
<iconify-icon bis_size='{"x":34,"y":5104,"w":20,"h":20,"abs_x":474,"abs_y":5147}' icon="lucide:paint-roller" width="20"></iconify-icon>
</div>
<h3 bis_size='{"x":76,"y":5100,"w":209,"h":28,"abs_x":516,"abs_y":5143}' className="text-xl font-medium">Thuy Plaster &amp; Painting</h3>
</div>
<p bis_size='{"x":24,"y":5158,"w":448,"h":78,"abs_x":464,"abs_y":5201}' className="text-zinc-400 font-light leading-relaxed">
                        Professional plasterboard, bathroom tiling and house painting services in NSW. <br bis_size='{"x":143,"y":5188,"w":0,"h":18,"abs_x":583,"abs_y":5231}'/>
                        Serving Sunshine, Morisset and surrounds.
                    </p>
</div>
<div bis_size='{"x":871,"y":5094,"w":192,"h":142,"abs_x":1311,"abs_y":5137}'>
<a bis_size='{"x":871,"y":5094,"w":192,"h":40,"abs_x":1311,"abs_y":5137}' className="inline-block bg-white text-zinc-950 px-8 py-3 rounded-full text-xs font-bold uppercase tracking-widest hover:bg-blue-50 transition transform hover:-translate-y-1" href="tel:0434798198">
                        Call 0434 798 198
                     </a>
</div>
</div>
<div bis_size='{"x":24,"y":5316,"w":1040,"h":249,"abs_x":464,"abs_y":5359}' className="grid grid-cols-2 md:grid-cols-4 gap-12 text-xs text-zinc-500 mb-20 border-t border-white/10 pt-16 uppercase tracking-widest font-medium">
<div bis_size='{"x":24,"y":5381,"w":224,"h":184,"abs_x":464,"abs_y":5424}' className="flex flex-col gap-6">
<span bis_size='{"x":24,"y":5381,"w":224,"h":16,"abs_x":464,"abs_y":5424}' className="text-white mb-2">Services</span>
<a bis_size='{"x":24,"y":5429,"w":224,"h":16,"abs_x":464,"abs_y":5472}' className="hover:text-blue-400 transition" href="#">Plastering</a>
<a bis_size='{"x":24,"y":5469,"w":224,"h":16,"abs_x":464,"abs_y":5512}' className="hover:text-blue-400 transition" href="#">Tiling</a>
<a bis_size='{"x":24,"y":5509,"w":224,"h":16,"abs_x":464,"abs_y":5552}' className="hover:text-blue-400 transition" href="#">Painting</a>
<a bis_size='{"x":24,"y":5549,"w":224,"h":16,"abs_x":464,"abs_y":5592}' className="hover:text-blue-400 transition" href="#">Repairs</a>
</div>
<div bis_size='{"x":296,"y":5381,"w":224,"h":184,"abs_x":736,"abs_y":5424}' className="flex flex-col gap-6">
<span bis_size='{"x":296,"y":5381,"w":224,"h":16,"abs_x":736,"abs_y":5424}' className="text-white mb-2">Areas</span>
<a bis_size='{"x":296,"y":5429,"w":224,"h":16,"abs_x":736,"abs_y":5472}' className="hover:text-blue-400 transition" href="#">Sunshine</a>
<a bis_size='{"x":296,"y":5469,"w":224,"h":16,"abs_x":736,"abs_y":5512}' className="hover:text-blue-400 transition" href="#">Morisset</a>
<a bis_size='{"x":296,"y":5509,"w":224,"h":16,"abs_x":736,"abs_y":5552}' className="hover:text-blue-400 transition" href="#">NSW</a>
</div>
<div bis_size='{"x":568,"y":5381,"w":224,"h":184,"abs_x":1008,"abs_y":5424}' className="flex flex-col gap-6">
<span bis_size='{"x":568,"y":5381,"w":224,"h":16,"abs_x":1008,"abs_y":5424}' className="text-white mb-2">Company</span>
<a bis_size='{"x":568,"y":5429,"w":224,"h":16,"abs_x":1008,"abs_y":5472}' className="hover:text-blue-400 transition" href="#about">About Us</a>
<a bis_size='{"x":568,"y":5469,"w":224,"h":16,"abs_x":1008,"abs_y":5512}' className="hover:text-blue-400 transition" href="#gallery">Recent Work</a>
<a bis_size='{"x":568,"y":5509,"w":224,"h":16,"abs_x":1008,"abs_y":5552}' className="hover:text-blue-400 transition" href="#contact">Contact</a>
</div>
<div bis_size='{"x":840,"y":5381,"w":224,"h":184,"abs_x":1280,"abs_y":5424}' className="flex flex-col gap-6">
<span bis_size='{"x":840,"y":5381,"w":224,"h":16,"abs_x":1280,"abs_y":5424}' className="text-white mb-2">Contact</span>
<span bis_size='{"x":840,"y":5429,"w":224,"h":16,"abs_x":1280,"abs_y":5472}' className="text-white">0434 798 198</span>
<span bis_size='{"x":840,"y":5469,"w":224,"h":16,"abs_x":1280,"abs_y":5512}' className="text-zinc-500">Sunshine, NSW</span>
<span bis_size='{"x":840,"y":5509,"w":224,"h":16,"abs_x":1280,"abs_y":5552}' className="text-zinc-500">Residential &amp; Commercial</span>
</div>
</div>
<div bis_size='{"x":24,"y":5645,"w":1040,"h":56,"abs_x":464,"abs_y":5688}' className="border-t border-white/5 pt-10 flex flex-col md:flex-row justify-between items-center text-[10px] text-zinc-600 uppercase tracking-widest">
<div bis_size='{"x":24,"y":5686,"w":414,"h":15,"abs_x":464,"abs_y":5729}'>© 2024 Thuy Plaster and Painting Service. All Rights Reserved.</div>
</div>
</div>
</footer>

    </>
  );
}
