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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'Noto Sans Thai', 'sans-serif'],
serif: ['Noto Serif Thai', 'serif'],
},
letterSpacing: {
'cinematic': '0.2em',
'editorial': '0.1em',
'tighter': '-0.04em',
},
colors: {
gold: {
50: '#F9F5EC',
100: '#F5EBD4',
200: '#EAD4A6',
300: '#D9B56F',
400: '#C49F58',
500: '#A6823C',
},
obsidian: '#050505',
charcoal: '#0A0A0A',
},
backgroundImage: {
'noise': "url('data:image/svg+xml,%3Csvg viewBox=\"0 0 200 200\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cfilter id=\"noiseFilter\"%3E%3CfeTurbulence type=\"fractalNoise\" baseFrequency=\"0.8\" numOctaves=\"3\" stitchTiles=\"stitch\"/%3E%3C/filter%3E%3Crect width=\"100%25\" height=\"100%25\" filter=\"url(%23noiseFilter)\"/%3E%3C/svg%3E')",
},
animation: {
'slow-pan': 'pan 60s linear infinite alternate',
'reveal-up': 'revealUp 1s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'hero-enter': 'heroEnter 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'pulse-slow': 'pulse 8s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'marquee': 'marquee 40s linear infinite',
'beam-spin': 'beamSpin 3s linear infinite',
},
keyframes: {
pan: { '0%': { transform: 'scale(1.1)' }, '100%': { transform: 'scale(1.15) translate(-1%, -1%)' } },
revealUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
heroEnter: { '0%': { opacity: '0', transform: 'translateY(20px) scale(0.99)' }, '100%': { opacity: '1', transform: 'translateY(0) scale(1)' } },
marquee: { '0%': { transform: 'translateX(0%)' }, '100%': { transform: 'translateX(-100%)' } },
beamSpin: { to: { transform: 'rotate(360deg)' } }
}
}
}
}



document.addEventListener("DOMContentLoaded", () => {
// Navbar Scroll Effect
const navWrapper = document.getElementById('nav-wrapper');
const navContainer = document.getElementById('nav-container');
window.addEventListener('scroll', () => {
if(window.scrollY > 20) {
navWrapper.classList.remove('pt-6');
navWrapper.classList.add('pt-3');
navContainer.classList.add('bg-white/[0.03]', 'backdrop-blur-md', 'border-white/[0.08]', 'rounded-full', 'py-3', 'px-6');
navContainer.classList.remove('w-full', 'py-6', 'px-12', 'border-transparent');
} else {
navWrapper.classList.add('pt-6');
navWrapper.classList.remove('pt-3');
navContainer.classList.remove('bg-white/[0.03]', 'backdrop-blur-md', 'border-white/[0.08]', 'rounded-full', 'py-3', 'px-6');
navContainer.classList.add('w-full', 'py-6', 'px-12', 'border-transparent');
}
});
// Reveal Animation
const observer = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate-reveal-up");
entry.target.classList.remove("opacity-0", "translate-y-8");
observer.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
document.querySelectorAll(".reveal-on-scroll").forEach((el) => {
el.classList.add("opacity-0", "translate-y-8", "will-change-transform");
observer.observe(el);
});
// Service Image Hover
window.setServiceImage = (id) => {
document.querySelectorAll('.service-bg-img').forEach(img => {
img.classList.remove('opacity-100', 'scale-105');
img.classList.add('opacity-0', 'scale-100');
});
const active = document.getElementById(`service-img-${id}`);
if(active) {
active.classList.remove('opacity-0', 'scale-100');
active.classList.add('opacity-100', 'scale-105');
}
};
// Gallery Filter
window.filterGallery = (category, btn) => {
document.querySelectorAll('.filter-btn').forEach(b => {
b.classList.remove('text-black', 'bg-gold-300', 'border-gold-300');
b.classList.add('text-neutral-400', 'border-white/10');
});
btn.classList.remove('text-neutral-400', 'border-white/10');
btn.classList.add('text-black', 'bg-gold-300', 'border-gold-300');
const items = document.querySelectorAll('.gallery-item-wrapper');
items.forEach(item => {
if (category === 'all' || item.dataset.category.includes(category)) {
item.classList.remove('hidden');
setTimeout(() => item.classList.remove('opacity-0', 'scale-95'), 50);
} else {
item.classList.add('opacity-0', 'scale-95');
setTimeout(() => item.classList.add('hidden'), 300);
}
});
};
// Lightbox Logic
const lightbox = document.getElementById('lightbox');
const lightboxImg = document.getElementById('lightbox-img');
let currentImgIndex = 0;
const galleryImages = [];
document.querySelectorAll('.gallery-img').forEach((img, index) => {
galleryImages.push(img.src);
img.parentElement.setAttribute('onclick', `openLightbox(${index})`);
});
window.openLightbox = (index) => {
currentImgIndex = index;
lightboxImg.src = galleryImages[index];
lightbox.classList.remove('hidden');
setTimeout(() => lightbox.classList.remove('opacity-0'), 10);
document.body.style.overflow = 'hidden';
};
window.closeLightbox = () => {
lightbox.classList.add('opacity-0');
setTimeout(() => lightbox.classList.add('hidden'), 300);
document.body.style.overflow = 'auto';
};
window.changeSlide = (dir) => {
currentImgIndex += dir;
if (currentImgIndex >= galleryImages.length) currentImgIndex = 0;
if (currentImgIndex < 0) currentImgIndex = galleryImages.length - 1;
lightboxImg.style.opacity = '0';
setTimeout(() => {
lightboxImg.src = galleryImages[currentImgIndex];
lightboxImg.style.opacity = '1';
}, 200);
};
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
      
<div className="cinema-grain"></div>

<nav className="fixed top-0 inset-x-0 z-[60] flex justify-center pt-6 pointer-events-none transition-all duration-500" id="nav-wrapper">
<div className="pointer-events-auto flex items-center justify-between w-full max-w-[1600px] px-12 py-6 border border-transparent transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="nav-container">

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#services">บริการ</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#gallery">ผลงาน</a>
</div>

<div className="flex items-center">
<span className="font-serif font-semibold text-xl text-white tracking-widest uppercase">JUNOHAIR</span>
</div>

<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#team">ทีมงาน</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide" href="#prices">ราคา</a>
<a className="group relative px-4 py-1.5 rounded-full bg-white/5 border border-white/10 hover:bg-white/10 hover:border-white/20 transition-all overflow-hidden" href="#booking">
<span className="relative z-10 text-[11px] font-semibold text-white tracking-wide uppercase">จองคิว</span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-700"></div>
</a>
</div>

<button className="md:hidden text-white p-2">
<span className="iconify" data-icon="lucide:menu" data-width="20"></span>
</button>
</div>
</nav>

<main className="relative h-screen w-full flex flex-col items-center justify-center overflow-hidden">

<div className="absolute inset-0 z-0 bg-[#020202]">
<div className="absolute inset-0 animate-slow-pan opacity-60">
<img className="w-full h-full object-cover filter brightness-[0.4] grayscale-[20%]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>

<div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-[#020202] z-10"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,#020202_90%)] z-10"></div>
</div>

<div className="relative z-20 flex flex-col items-center text-center px-6 max-w-4xl">
<div className="animate-hero-enter opacity-0" style={{animationDelay: '0.1s'}}>
<div className="inline-flex items-center gap-3 px-3 py-1 rounded-full border border-white/10 bg-black/30 backdrop-blur-md mb-8">
<span className="w-1.5 h-1.5 rounded-full bg-gold-300 shadow-[0_0_8px_rgba(217,181,111,0.8)]"></span>
<span className="text-[10px] uppercase tracking-editorial text-gold-100 font-medium">Black Label Aesthetics</span>
</div>
</div>
<h1 className="font-serif text-6xl md:text-8xl lg:text-9xl text-white tracking-tight leading-none mb-6 animate-hero-enter opacity-0" style={{animationDelay: '0.2s'}}>
<span className="block bg-clip-text text-transparent bg-gradient-to-b from-white via-neutral-200 to-neutral-500">JUNOHAIR</span>
</h1>
<p className="font-sans font-light text-sm md:text-lg text-neutral-400 max-w-lg leading-relaxed animate-hero-enter opacity-0 mb-10" style={{animationDelay: '0.3s'}}>
                ที่สุดแห่งความงามใจกลางกรุงเทพ <br className="hidden md:block"/>
                ศิลปะแห่งการดูแลเส้นผม บาลายาจ และการต่อผมระดับพรีเมียม
            </p>
<div className="animate-hero-enter opacity-0" style={{animationDelay: '0.4s'}}>
<a className="group relative flex items-center gap-2 px-8 py-4 bg-white text-black rounded-full overflow-hidden transition-all hover:scale-[1.02] shadow-[0_0_40px_-10px_rgba(255,255,255,0.3)]" href="#booking">
<span className="text-xs font-semibold tracking-widest uppercase z-10 relative">จองนัดหมาย</span>
<span className="iconify z-10 relative transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-width="14"></span>
<div className="absolute inset-0 bg-gradient-to-r from-neutral-100 to-white z-0"></div>
</a>
</div>
</div>
</main>

<div className="relative z-20 bg-[#020202] border-y border-white/5 py-10 overflow-hidden">
<div className="flex gap-24 items-center animate-marquee whitespace-nowrap opacity-30 hover:opacity-80 transition-opacity duration-500 marquee-mask">
<span className="text-2xl font-serif text-white">OLAPLEX</span>
<span className="text-xl font-sans font-light tracking-widest text-white">KERASTASE</span>
<span className="text-2xl font-serif italic text-white">GHD Professional</span>
<span className="text-xl font-sans font-semibold text-white">DYSON</span>
<span className="text-2xl font-serif text-white">L'OREAL</span>
<span className="text-xl font-sans tracking-widest text-white">SCHWARZKOPF</span>

<span className="text-2xl font-serif text-white">OLAPLEX</span>
<span className="text-xl font-sans font-light tracking-widest text-white">KERASTASE</span>
<span className="text-2xl font-serif italic text-white">GHD Professional</span>
<span className="text-xl font-sans font-semibold text-white">DYSON</span>
<span className="text-2xl font-serif text-white">L'OREAL</span>
<span className="text-xl font-sans tracking-widest text-white">SCHWARZKOPF</span>
</div>
</div>

<section className="relative z-20 py-32 bg-[#020202]" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-20 text-center reveal-on-scroll">
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">บริการ <span className="text-gold-300 italic">สุดพิเศษ</span></h2>
<p className="text-neutral-500 text-sm font-light">ความงามที่ออกแบบเฉพาะบุคคล ด้วยเทคนิคชั้นสูง</p>
</div>
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">

<div className="hidden lg:block sticky top-32 h-[600px] w-full rounded-2xl overflow-hidden border border-white/10 reveal-on-scroll">
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-100 scale-105" id="service-img-1" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100" id="service-img-2" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=1200"/>
<img className="service-bg-img absolute inset-0 w-full h-full object-cover transition-all duration-700 ease-out opacity-0 scale-100" id="service-img-3" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1200"/>
<div className="absolute inset-0 bg-black/20"></div>
</div>

<div className="space-y-4">

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer reveal-on-scroll" onmouseenter="setServiceImage(1)">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-gold-300 font-semibold uppercase tracking-widest">Precision</span>
<span className="text-white font-serif">3,500 ฿</span>
</div>
<h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-200 transition-colors">Calligraphy Cut</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed mb-4">
                            เทคนิคการตัดผมที่ได้รับการจดสิทธิบัตร เพิ่มวอลลุ่มได้ถึง 270% และลดปัญหาผมแตกปลาย เพื่อผมสวยสุขภาพดี
                        </p>
<div className="flex items-center text-[10px] text-neutral-400 gap-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 60 นาที</span>
</div>
<div className="absolute bottom-0 left-0 h-[1px] bg-gold-300 service-line rounded-b-2xl"></div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer reveal-on-scroll" onmouseenter="setServiceImage(2)">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-gold-300 font-semibold uppercase tracking-widest">Structure</span>
<span className="text-white font-serif">เริ่มต้น 5,500 ฿</span>
</div>
<h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-200 transition-colors">Keratin Infusion</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed mb-4">
                            ทรีทเมนท์ฟื้นฟูโครงสร้างเส้นผมล้ำลึก ขจัดผมชี้ฟูและมอบความเงางามดุจแพรไหม ยาวนานถึง 4 เดือน
                        </p>
<div className="flex items-center text-[10px] text-neutral-400 gap-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 120-180 นาที</span>
</div>
<div className="absolute bottom-0 left-0 h-[1px] bg-gold-300 service-line rounded-b-2xl"></div>
</div>

<div className="group relative p-8 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all duration-300 cursor-pointer reveal-on-scroll" onmouseenter="setServiceImage(3)">
<div className="flex justify-between items-start mb-2">
<span className="text-[10px] text-gold-300 font-semibold uppercase tracking-widest">Color</span>
<span className="text-white font-serif">เริ่มต้น 6,500 ฿</span>
</div>
<h3 className="text-xl font-serif text-white mb-2 group-hover:text-gold-200 transition-colors">Balayage Deluxe</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed mb-4">
                            บริการซิกเนเจอร์ของเรา เทคนิคเพ้นท์สีผมด้วยมือเพื่อไฮไลท์ที่ดูเป็นธรรมชาติที่สุด รวม Glossing และ Olaplex
                        </p>
<div className="flex items-center text-[10px] text-neutral-400 gap-4">
<span className="flex items-center gap-1"><span className="iconify" data-icon="lucide:clock" data-width="12"></span> 3-5 ชั่วโมง</span>
</div>
<div className="absolute bottom-0 left-0 h-[1px] bg-gold-300 service-line rounded-b-2xl"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-[#050505]">
<div className="max-w-5xl mx-auto px-6">
<div className="text-center mb-16 reveal-on-scroll">
<h2 className="text-2xl md:text-4xl font-serif text-white tracking-tight">ขั้นตอนการ <span className="text-gold-300 italic">ปรนนิบัติ</span></h2>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-10 left-0 w-full h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="relative flex flex-col items-center text-center reveal-on-scroll">
<div className="w-20 h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-serif text-2xl text-white">I</span>
</div>
<h3 className="text-lg font-serif text-white mb-2">ให้คำปรึกษา</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed px-4">วิเคราะห์โครงสร้างเส้นผมและรูปหน้า เพื่อออกแบบสีและทรงผมที่เหมาะสมที่สุดสำหรับคุณ</p>
</div>
<div className="relative flex flex-col items-center text-center reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<div className="w-20 h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-serif text-2xl text-white">II</span>
</div>
<h3 className="text-lg font-serif text-white mb-2">สร้างสรรค์งานศิลป์</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed px-4">ใช้เทคนิคเฉพาะทางด้วยความประณีตและแม่นยำ ในบรรยากาศที่ผ่อนคลาย</p>
</div>
<div className="relative flex flex-col items-center text-center reveal-on-scroll" style={{animationDelay: '0.4s'}}>
<div className="w-20 h-20 rounded-full bg-[#050505] border border-white/10 flex items-center justify-center mb-6 z-10 shadow-[0_0_20px_rgba(0,0,0,1)]">
<span className="font-serif text-2xl text-white">III</span>
</div>
<h3 className="text-lg font-serif text-white mb-2">เปล่งประกาย</h3>
<p className="text-neutral-500 text-xs font-light leading-relaxed px-4">ปิดท้ายด้วย Glossing เพื่อล็อคสีผม และจัดแต่งทรงเพื่อดึงความงามของคุณออกมา</p>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202]" id="gallery">
<div className="max-w-[1600px] mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-8 reveal-on-scroll">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight mb-4">ภาพ <span className="text-gold-300 italic">ผลงานจริง</span></h2>
<p className="text-neutral-500 text-sm font-light">รวมผลงานจากซาลอนและการถ่ายทำ Editorial</p>
</div>
<div className="flex flex-wrap gap-2">
<button className="filter-btn px-4 py-2 text-[10px] font-medium uppercase tracking-widest rounded-full border border-gold-300 bg-gold-300 text-black transition-all" onclick="filterGallery('all', this)">ทั้งหมด</button>
<button className="filter-btn px-4 py-2 text-[10px] font-medium uppercase tracking-widest rounded-full border border-white/10 text-neutral-400 hover:text-white transition-all" onclick="filterGallery('balayage', this)">#Balayage</button>
<button className="filter-btn px-4 py-2 text-[10px] font-medium uppercase tracking-widest rounded-full border border-white/10 text-neutral-400 hover:text-white transition-all" onclick="filterGallery('blond', this)">#BlondExpert</button>
<button className="filter-btn px-4 py-2 text-[10px] font-medium uppercase tracking-widest rounded-full border border-white/10 text-neutral-400 hover:text-white transition-all" onclick="filterGallery('extensions', this)">#Extensions</button>
</div>
</div>

<div className="columns-1 md:columns-2 lg:columns-3 gap-6 space-y-6">

<div className="gallery-item-wrapper break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in reveal-on-scroll" data-category="balayage blond">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1595476108010-b4d1f102b1b1?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<span className="block text-[10px] text-gold-300 uppercase tracking-widest mb-1">Color Correction</span>
<span className="block text-white font-serif text-lg">Ice Platinum</span>
</div>
</div>
</div>

<div className="gallery-item-wrapper break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in reveal-on-scroll" data-category="extensions">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://images.unsplash.com/photo-1560869713-7d0a29430803?q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<span className="block text-[10px] text-gold-300 uppercase tracking-widest mb-1">Transformation</span>
<span className="block text-white font-serif text-lg">Invisible Extensions</span>
</div>
</div>
</div>

<div className="gallery-item-wrapper break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in reveal-on-scroll" data-category="balayage">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<span className="block text-[10px] text-gold-300 uppercase tracking-widest mb-1">Color Melt</span>
<span className="block text-white font-serif text-lg">Soft Caramel</span>
</div>
</div>
</div>

<div className="gallery-item-wrapper break-inside-avoid relative group rounded-lg overflow-hidden cursor-zoom-in reveal-on-scroll" data-category="blond">
<img className="gallery-img w-full h-auto object-cover transition-transform duration-700 group-hover:scale-105 filter sepia-[0.1]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-6">
<div>
<span className="block text-[10px] text-gold-300 uppercase tracking-widest mb-1">Texture</span>
<span className="block text-white font-serif text-lg">Beach Waves</span>
</div>
</div>
</div>
</div>
<div className="mt-16 text-center">
<button className="px-8 py-3 border border-white/10 rounded-full text-xs uppercase tracking-widest text-neutral-400 hover:text-white hover:border-gold-300 transition-all duration-300">โหลดเพิ่มเติม</button>
</div>
</div>
</section>

<section className="py-32 bg-[#020202]" id="team">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 reveal-on-scroll">
<div>
<span className="text-[10px] text-gold-300 font-semibold uppercase tracking-widest block mb-2">Expertise</span>
<h2 className="text-3xl md:text-5xl font-serif text-white tracking-tight">ทีม <span className="italic text-neutral-600">ผู้เชี่ยวชาญ</span></h2>
</div>
<p className="text-neutral-500 text-xs font-light max-w-xs mt-4 md:mt-0 text-right">
                    รวมตัวเฉพาะสไตล์ลิสต์ที่มีความชำนาญเฉพาะด้าน เพื่อผลลัพธ์ที่สมบูรณ์แบบ
                </p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer reveal-on-scroll">
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-2 py-1 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider">Master Colorist</span>
</div>
<h3 className="text-2xl font-serif text-white">Shery</h3>
<p className="text-[10px] text-gold-300 uppercase tracking-widest mt-1">Founder &amp; Creative Director</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer reveal-on-scroll" style={{animationDelay: '0.1s'}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-2 py-1 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider">Top Stylist</span>
</div>
<h3 className="text-2xl font-serif text-white">Daniel</h3>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Cut &amp; Men's Expert</p>
</div>
</div>

<div className="group relative aspect-[3/4] rounded-xl overflow-hidden cursor-pointer reveal-on-scroll" style={{animationDelay: '0.2s'}}>
<img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1595152772835-219674b2a8a6?q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/90 via-transparent to-transparent opacity-90"></div>
<div className="absolute bottom-6 left-6 translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<div className="mb-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
<span className="px-2 py-1 border border-white/20 rounded text-[9px] text-white uppercase tracking-wider">Extensions</span>
</div>
<h3 className="text-2xl font-serif text-white">Elena</h3>
<p className="text-[10px] text-neutral-400 uppercase tracking-widest mt-1">Balayage Specialist</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#050505] border-t border-white/5">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-serif text-white text-center mb-16">เสียงจาก <span className="italic text-neutral-600">ลูกค้า</span></h2>
<div className="grid md:grid-cols-2 gap-8">
<div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative reveal-on-scroll">
<span className="text-4xl text-gold-300 opacity-20 font-serif absolute top-6 left-6">"</span>
<p className="text-neutral-300 font-serif italic text-base leading-relaxed mb-6 relative z-10 pt-4">
                        ในที่สุดก็เจอคนที่เข้าใจเรื่องผมบลอนด์จริงๆ ไม่มีสีเหลืองกวนใจ ผมไม่เสีย ทีมงานทำงานละเอียดมาก ไม่เคยเจอที่ไหนในกรุงเทพมาก่อน
                    </p>
<div className="flex items-center gap-4">
<div className="w-px h-6 bg-gold-300"></div>
<div>
<span className="block text-white text-[11px] uppercase tracking-widest font-semibold">Sarah M.</span>
<span className="block text-neutral-500 text-[10px]">Balayage &amp; Cut</span>
</div>
</div>
</div>
<div className="p-8 rounded-2xl bg-white/5 border border-white/5 relative reveal-on-scroll" style={{animationDelay: '0.1s'}}>
<span className="text-4xl text-gold-300 opacity-20 font-serif absolute top-6 left-6">"</span>
<p className="text-neutral-300 font-serif italic text-base leading-relaxed mb-6 relative z-10 pt-4">
                        การต่อผมที่นี่เนียนมาก เชอรี่ให้คำปรึกษาอย่างละเอียด บรรยากาศในร้านผ่อนคลายสุดๆ รู้สึกเหมือนได้รับการดูแลอย่างแท้จริง
                    </p>
<div className="flex items-center gap-4">
<div className="w-px h-6 bg-gold-300"></div>
<div>
<span className="block text-white text-[11px] uppercase tracking-widest font-semibold">Julia K.</span>
<span className="block text-neutral-500 text-[10px]">Hair Extensions</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#020202]" id="prices">
<div className="max-w-4xl mx-auto px-6 reveal-on-scroll">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">อัตรา <span className="italic text-neutral-600">ค่าบริการ</span></h2>
<div className="w-px h-10 bg-gradient-to-b from-gold-300/50 to-transparent mx-auto"></div>
</div>
<div className="grid md:grid-cols-2 gap-16">
<div className="space-y-8">
<h3 className="text-xs text-gold-300 uppercase tracking-widest border-b border-white/10 pb-2">Styling</h3>
<div className="flex justify-between items-baseline">
<div>
<span className="text-neutral-200 font-light text-sm block">ตัดผมสตรี</span>
<span className="text-[10px] text-neutral-500">ปรึกษา, สระ &amp; เซ็ตทรง</span>
</div>
<span className="text-white font-medium text-sm">เริ่มต้น 1,500 ฿</span>
</div>
<div className="flex justify-between items-baseline">
<div>
<span className="text-neutral-200 font-light text-sm block">Calligraphy Cut</span>
<span className="text-[10px] text-neutral-500">เทคนิคเพิ่มวอลลุ่ม</span>
</div>
<span className="text-white font-medium text-sm">3,500 ฿</span>
</div>
</div>
<div className="space-y-8">
<h3 className="text-xs text-gold-300 uppercase tracking-widest border-b border-white/10 pb-2">Color</h3>
<div className="flex justify-between items-baseline">
<div>
<span className="text-neutral-200 font-light text-sm block">Balayage Signature</span>
<span className="text-[10px] text-neutral-500">รวม Glossing &amp; Olaplex</span>
</div>
<span className="text-white font-medium text-sm">เริ่มต้น 6,500 ฿</span>
</div>
<div className="flex justify-between items-baseline">
<div>
<span className="text-neutral-200 font-light text-sm block">Face Framing</span>
<span className="text-[10px] text-neutral-500">Contouring Highlights</span>
</div>
<span className="text-white font-medium text-sm">2,500 ฿</span>
</div>
</div>
</div>
</div>
</section>

<footer className="relative bg-[#050505] border-t border-white/5 pt-24 pb-12 overflow-hidden" id="booking">
<div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-white/10 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 mb-20">

<div className="flex flex-col justify-center">
<span className="text-[10px] text-gold-300 font-semibold uppercase tracking-widest block mb-4">Contact</span>
<h2 className="text-4xl md:text-5xl font-serif text-white mb-8">พร้อมสำหรับการ <br/><span className="text-neutral-500 italic">เปลี่ยนแปลง?</span></h2>
<div className="space-y-6">
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-300 shrink-0">
<span className="iconify" data-icon="lucide:map-pin" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-serif text-base mb-1">ที่ตั้งร้าน</h4>
<p className="text-neutral-400 text-xs font-light">ชั้น 3 เซ็นทรัลเวิร์ล</p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-8 h-8 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-gold-300 shrink-0">
<span className="iconify" data-icon="lucide:phone" data-width="14"></span>
</div>
<div>
<h4 className="text-white font-serif text-base mb-1">ติดต่อเรา</h4>
<a className="text-neutral-400 text-xs font-light hover:text-white transition-colors" href="tel:023120637127">0231 20637127</a>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/5 rounded-2xl p-8 backdrop-blur-sm">
<h3 className="text-xl font-serif text-white mb-6">จองคิวออนไลน์</h3>
<form className="space-y-5" onsubmit="event.preventDefault();">
<div className="grid grid-cols-2 gap-5">
<div className="space-y-1">
<label className="text-[10px] text-neutral-500 uppercase tracking-wider">ชื่อ</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-300 transition-colors placeholder-white/10" placeholder="ชื่อจริง" type="text"/>
</div>
<div className="space-y-1">
<label className="text-[10px] text-neutral-500 uppercase tracking-wider">นามสกุล</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-300 transition-colors placeholder-white/10" placeholder="นามสกุล" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-[10px] text-neutral-500 uppercase tracking-wider">อีเมล</label>
<input className="w-full bg-transparent border-b border-white/10 py-2 text-sm text-white focus:outline-none focus:border-gold-300 transition-colors placeholder-white/10" placeholder="hello@example.com" type="email"/>
</div>
<button className="w-full mt-4 py-3 bg-white text-black text-xs font-semibold uppercase tracking-widest rounded hover:bg-gold-100 transition-colors">ส่งคำขอจอง</button>
</form>
</div>
</div>

<div className="border-t border-white/5 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-6">
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram" data-width="16"></span></a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:facebook" data-width="16"></span></a>
</div>
<p className="text-[10px] text-neutral-600 uppercase tracking-widest">© 2024 JUNOHAIR. All rights reserved.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50">
<button className="w-12 h-12 bg-white text-black rounded-full flex items-center justify-center shadow-lg hover:scale-105 transition-transform">
<span className="iconify" data-icon="lucide:message-square" data-width="20"></span>
</button>
</div>

<div className="fixed inset-0 z-[100] bg-black/95 backdrop-blur-md hidden opacity-0 transition-opacity duration-300 flex items-center justify-center" id="lightbox">
<button className="absolute top-6 right-6 text-white hover:text-gold-300" onclick="closeLightbox()">
<span className="iconify" data-icon="lucide:x" data-width="32"></span>
</button>
<button className="absolute left-6 text-white hover:text-gold-300 p-4" onclick="changeSlide(-1)">
<span className="iconify" data-icon="lucide:chevron-left" data-width="40"></span>
</button>
<img className="max-h-[85vh] max-w-[90vw] object-contain shadow-2xl transition-opacity duration-200" id="lightbox-img" src=""/>
<button className="absolute right-6 text-white hover:text-gold-300 p-4" onclick="changeSlide(1)">
<span className="iconify" data-icon="lucide:chevron-right" data-width="40"></span>
</button>
</div>

    </>
  );
}
