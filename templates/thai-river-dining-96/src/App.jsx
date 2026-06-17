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



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // Intersection Observer for Fade-in on Scroll
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.15
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('active');
                        // Optional: Stop observing once revealed
                        // observer.unobserve(entry.target); 
                    }
                });
            }, observerOptions);

            const revealElements = document.querySelectorAll('.reveal');
            revealElements.forEach(el => observer.observe(el));
            
            // Navbar Transition on Scroll
            const navbar = document.getElementById('navbar');
            window.addEventListener('scroll', () => {
                if (window.scrollY > 50) {
                    navbar.classList.add('py-2');
                    navbar.classList.remove('py-4');
                } else {
                    navbar.classList.add('py-4');
                    navbar.classList.remove('py-2');
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
      

<nav className="fixed top-0 w-full z-50 px-6 flex justify-between items-center transition-all duration-300" id="navbar">
<div className="glass-panel px-4 py-2 rounded-full flex items-center gap-3 shadow-sm">
<span className="text-sm font-semibold tracking-tighter uppercase text-stone-800">NAVA</span>
<div className="w-px h-3 bg-stone-300"></div>
<span className="text-xs font-light text-stone-500">The River Legacy</span>
</div>
<button className="glass-panel px-4 py-2 rounded-full group flex items-center gap-2 text-xs font-medium text-stone-600 hover:text-orange-700 transition-colors shadow-sm">
<span>สำรองที่นั่ง</span>
<iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" strokeWidth="2" width="14"></iconify-icon>
</button>
</nav>

<header className="relative h-[110vh] flex flex-col justify-center items-center text-center px-6 overflow-hidden">

<div className="absolute inset-0 z-0">
<img alt="Thai Canal Boat" className="w-full h-full object-cover object-center brightness-[0.85] scale-105 animate-[kenburns_20s_ease-out_infinite_alternate]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/27ca6c35-6c71-4a8b-8721-46232ed821b1_3840w.jpg" style={{animation: '30s linear 0s infinite alternate none running pulse-scale'}}/>
<div className="absolute inset-0 bg-gradient-to-b from-black/10 via-transparent to-[#FAFAF9]"></div>
<div className="bg-stone-900/10 mix-blend-overlay absolute top-0 right-0 bottom-0 left-0"></div>
</div>
<div className="relative z-10 max-w-5xl mx-auto space-y-8 mt-12">
<div className="reveal overflow-hidden">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/20 bg-white/10 backdrop-blur-md text-xs font-medium text-white tracking-wide uppercase shadow-lg">
<iconify-icon icon="solar:compass-linear" width="14"></iconify-icon>
                    Storytelling Journey
                </div>
</div>
<h1 className="reveal reveal-delay-100 text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-white leading-[0.85] drop-shadow-sm">
                ล่องนาวา<br/>
<span className="font-thin italic opacity-90 text-4xl md:text-7xl block mt-2 font-serif">The Lost Taste</span>
</h1>
<p className="reveal reveal-delay-200 max-w-lg mx-auto text-stone-100 text-lg md:text-xl font-light leading-relaxed text-balance drop-shadow-md">
                ย้อนรอยความทรงจำผ่านสายน้ำ ๓ คลองสำคัญ<br/>สู่ตำรับอาหารที่ถูกปรุงด้วยกาลเวลา
            </p>
</div>
<div className="absolute bottom-12 left-1/2 -translate-x-1/2 z-10 reveal reveal-delay-300">
<div className="flex flex-col items-center gap-3 text-stone-400">
<span className="text-[10px] uppercase tracking-[0.2em]">Scroll to Explore</span>
<div className="w-px h-12 bg-gradient-to-b from-stone-400 to-transparent"></div>
</div>
</div>
</header>

<section className="z-20 -mt-20 pt-20 pr-6 pb-20 pl-6 relative">
<div className="max-w-4xl mx-auto bg-white rounded-[2rem] shadow-2xl shadow-stone-200/50 border border-stone-100 p-8 md:p-12 reveal relative overflow-hidden">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 grid md:grid-cols-3 gap-8 items-center mb-8">
<div className="md:col-span-1 space-y-4">
<div className="inline-flex items-center gap-2 text-orange-600 bg-orange-50 px-3 py-1 rounded-full text-[10px] font-bold tracking-wider uppercase">
<iconify-icon icon="solar:map-point-linear" width="14"></iconify-icon>
                        Route Map
                    </div>
<h2 className="text-3xl font-medium tracking-tight text-stone-800">เส้นทาง ๓ คลอง</h2>
<p className="text-sm text-stone-500 font-light leading-relaxed">
                        จากคลองบางบัว สู่คลองลาดพร้าว และเชื่อมต่อบางเขน เส้นทางสัญจรหลักที่หล่อเลี้ยงชีวิตชาวพระนครมาช้านาน
                    </p>

<div className="space-y-3 pt-4 border-t border-stone-100">
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-orange-500 pulse-marker"></div>
<span className="text-xs font-medium text-stone-700">จุดเริ่มต้น: ท่าเรือวัดบางบัว</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-stone-300"></div>
<span className="text-xs text-stone-500">จุดแวะพัก: บ้านป้าเช็ง</span>
</div>
</div>
</div>

<div className="md:col-span-2 relative h-[300px] bg-stone-50 rounded-2xl border border-stone-100 overflow-hidden">

<svg className="w-full h-full absolute inset-0 text-stone-300" viewbox="0 0 400 200">

<path className="" d="M0,150 Q100,120 200,150 T400,140 V200 H0 Z" fill="#E7E5E4" opacity="0.2"></path>

<path d="M-10,80 Q80,60 150,100 T300,90 T410,120" fill="none" stroke="#A8A29E" strokeLinecap="round" stroke-opacity="0.2" strokeWidth="8"></path>
<path className="dash-draw" d="M-10,80 Q80,60 150,100 T300,90 T410,120" fill="none" stroke="#F97316" strokeLinecap="round" strokeWidth="2"></path>

<path d="M150,100 Q150,150 120,210" fill="none" stroke="#A8A29E" strokeLinecap="round" stroke-opacity="0.2" strokeWidth="6"></path>
<path d="M150,100 Q150,150 120,210" fill="none" opacity="0.6" stroke="#38BDF8" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<path className="" d="M300,90 Q320,40 380,20" fill="none" stroke="#A8A29E" strokeLinecap="round" stroke-opacity="0.2" strokeWidth="6"></path>
<path d="M300,90 Q320,40 380,20" fill="none" opacity="0.6" stroke="#38BDF8" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<circle className="animate-ping origin-center" cx="50" cy="75" fill="#F97316" r="3" style={{animationDuration: '3s'}}></circle>
<circle cx="50" cy="75" fill="white" r="2" stroke="#F97316" strokeWidth="1"></circle>
<circle cx="150" cy="100" fill="white" r="2" stroke="#57534E" strokeWidth="1.5"></circle>
<circle cx="300" cy="90" fill="white" r="2" stroke="#57534E" strokeWidth="1.5"></circle>

<text fill="#57534E" fontFamily="sans-serif" fontSize="8" font-weight="600" x="60" y="70">คลองบางบัว</text>
<text fill="#A8A29E" fontFamily="sans-serif" fontSize="8" x="160" y="160">คลองลาดพร้าว</text>
<text fill="#A8A29E" fontFamily="sans-serif" fontSize="8" x="320" y="50">คลองบางเขน</text>
</svg>

<div className="absolute bottom-4 right-4 flex gap-2">
<button className="w-8 h-8 rounded-full bg-white shadow-sm border border-stone-200 flex items-center justify-center text-stone-500 hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:add-linear" width="16"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-white shadow-sm border border-stone-200 flex items-center justify-center text-stone-500 hover:text-orange-600 transition-colors">
<iconify-icon icon="solar:minus-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<main className="relative max-w-5xl mx-auto px-6 pb-32">
<div className="absolute left-6 md:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-stone-200 via-stone-300 to-transparent -translate-x-1/2 hidden md:block z-0"></div>

<section className="relative z-10 py-24 grid md:grid-cols-2 gap-16 items-center reveal">

<div className="md:text-right space-y-6 md:pr-12">
<div className="inline-flex items-center gap-2 text-stone-400 font-medium tracking-tight text-xs uppercase mb-2 border border-stone-200 px-3 py-1 rounded-full">
<iconify-icon icon="solar:water-sun-linear" width="14"></iconify-icon>
                    Chapter 01
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-800 text-balance">วิถีริมน้ำ<br/><span className="text-stone-400 serif italic font-normal">และเรือกสวน</span></h2>
<p className="text-stone-500 leading-relaxed font-light text-balance">
                    ในอดีต คลองคือเส้นเลือดใหญ่ ชาวบ้านใช้เรือสัญจร ขนส่งผลไม้จากสวนเมืองนนท์ ทั้งทุเรียน มะม่วง กระท้อน น้ำใสไหลเย็นสะท้อนภาพชีวิตที่ผูกพันกับสายน้ำอย่างแยกไม่ออก
                </p>
<div className="flex md:justify-end">
<button className="text-orange-700 text-sm font-medium hover:tracking-wide transition-all duration-300 flex items-center gap-2">
                        อ่านตำนานคลอง
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="md:pl-12 relative group perspective-1000">
<div className="absolute top-1/2 -left-16 -translate-y-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-orange-500 rounded-full hidden md:block z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
<div className="relative rounded-2xl overflow-hidden bg-stone-200 aspect-[4/5] shadow-2xl shadow-stone-200/50 transform transition-transform duration-700 hover:rotate-y-2 hover:scale-[1.02]">
<img alt="Thai House" className="absolute inset-0 w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92d9e5cd-526b-4299-9d67-30ecd4a7ea39_1600w.jpg" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-stone-900/60 to-transparent flex flex-col justify-end p-8">
<span className="text-white font-medium text-xl tracking-tight">บ้านริมคลอง</span>
<p className="text-white/80 text-sm font-light mt-1">สถาปัตยกรรมแห่งสายน้ำ</p>
</div>
</div>
</div>
</section>

<section className="relative z-10 py-24 grid md:grid-cols-2 gap-16 items-center reveal">

<div className="order-2 md:order-1 md:pr-12 relative">
<div className="absolute top-1/2 -right-16 -translate-y-1/2 translate-x-1/2 w-3 h-3 bg-white border-2 border-stone-400 rounded-full hidden md:block z-20 shadow-[0_0_0_4px_rgba(255,255,255,1)]"></div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-4 translate-y-8">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 relative group">
<img alt="Ingredients" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1565557623262-b51c2513a641?q=80&amp;w=2571&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
<div className="space-y-4">
<div className="aspect-[3/4] rounded-2xl overflow-hidden bg-stone-100 relative group">
<img alt="Cooking" className="object-cover w-full h-full group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1559314809-0d155014e29e?q=80&amp;w=1970&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
<div className="p-4 bg-white border border-stone-200 rounded-2xl shadow-sm">
<iconify-icon className="text-orange-500 mb-2" icon="solar:chef-hat-heart-linear" width="24"></iconify-icon>
<p className="text-[10px] text-stone-500 leading-tight">ปรุงด้วยใจ ใส่ความพิถีพิถันในทุกขั้นตอน</p>
</div>
</div>
</div>
</div>

<div className="order-1 md:order-2 space-y-6 md:pl-12">
<div className="inline-flex items-center gap-2 text-stone-400 font-medium tracking-tight text-xs uppercase mb-2 border border-stone-200 px-3 py-1 rounded-full">
<iconify-icon icon="solar:pot-linear" width="14"></iconify-icon>
                    Chapter 02
                </div>
<h2 className="text-3xl md:text-5xl font-medium tracking-tight text-stone-800 text-balance">ครัวหลังบ้าน<br/><span className="text-stone-400 serif italic font-normal">ภูมิปัญญาก้นครัว</span></h2>
<p className="text-stone-500 leading-relaxed font-light">
                    กลิ่นหอมของควันไฟจากเตาถ่าน การโขลกเครื่องแกงด้วยครกหิน และความใส่ใจในการคัดสรรวัตถุดิบข้างรั้ว คือหัวใจสำคัญที่ทำให้อาหารไทยมีเสน่ห์ไม่เสื่อมคลาย
                </p>
<ul className="space-y-3 pt-4">
<li className="flex items-start gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>วัตถุดิบสดใหม่จากสวนท้องถิ่น</span>
</li>
<li className="flex items-start gap-3 text-sm text-stone-600 font-light">
<iconify-icon className="text-orange-500 mt-0.5 shrink-0" icon="solar:check-circle-linear"></iconify-icon>
<span>ตำรับเครื่องแกงทำเองสูตรคุณยาย</span>
</li>
</ul>
</div>
</section>

<section className="relative z-10 py-24 reveal">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-3 h-3 bg-white border-2 border-stone-300 rounded-full hidden md:block z-20"></div>
<div className="text-center max-w-2xl mx-auto mb-16 space-y-4">
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-stone-900">สำรับหาทานยาก</h2>
<p className="text-stone-500 font-light">รสชาติแห่งความทรงจำที่เราตั้งใจนำกลับมา</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group bg-white p-2 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden relative">
<img alt="Curry" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fb8782f-0a64-4560-8744-206932d672bb_800w.jpg" style={{}}/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2 py-1 rounded text-[10px] font-bold tracking-wider uppercase">Signature</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-stone-900 mb-1">แกงกระท้อนหมูย่าง</h3>
<p className="text-xs text-stone-400 font-light mb-4">รสเปรี้ยวหวานละมุน ลิ้นจี่แห่งฤดูกาล</p>
<div className="w-full h-px bg-stone-100 mb-4"></div>
<div className="flex justify-between items-center text-sm">
<span className="font-medium text-orange-600">280.-</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white p-2 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden relative">
<img alt="Dessert" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fb8782f-0a64-4560-8744-206932d672bb_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-stone-900 mb-1">ขนมวงน้ำอ้อย</h3>
<p className="text-xs text-stone-400 font-light mb-4">แป้งโม่สด ทอดกรอบ ราดน้ำตาลอ้อย</p>
<div className="w-full h-px bg-stone-100 mb-4"></div>
<div className="flex justify-between items-center text-sm">
<span className="font-medium text-orange-600">85.-</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="group bg-white p-2 rounded-3xl border border-stone-100 shadow-sm hover:shadow-xl hover:shadow-stone-200/50 transition-all duration-500 hover:-translate-y-2">
<div className="aspect-square rounded-2xl bg-stone-100 overflow-hidden relative">
<img alt="Appetizer" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4fb8782f-0a64-4560-8744-206932d672bb_800w.jpg" style={{}}/>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-stone-900 mb-1">ปลาแนม</h3>
<p className="text-xs text-stone-400 font-light mb-4">เครื่องว่างโบราณ รสสัมผัสหลากหลาย</p>
<div className="w-full h-px bg-stone-100 mb-4"></div>
<div className="flex justify-between items-center text-sm">
<span className="font-medium text-orange-600">150.-</span>
<button className="w-8 h-8 rounded-full bg-stone-50 flex items-center justify-center text-stone-400 group-hover:bg-stone-900 group-hover:text-white transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>
</main>

<div className="sticky bottom-6 z-40 px-6 pointer-events-none">
<div className="max-w-xl mx-auto pointer-events-auto">
<div className="glass-panel p-2 pl-6 rounded-full flex items-center justify-between shadow-2xl shadow-stone-900/10 hover:scale-[1.01] transition-transform duration-300">
<div className="flex flex-col">
<span className="text-xs font-semibold text-stone-800 uppercase tracking-wide">จองโต๊ะริมน้ำ</span>
<span className="text-[10px] text-stone-500">สัมผัสบรรยากาศย้อนยุค</span>
</div>
<button className="bg-stone-900 hover:bg-orange-600 text-white px-6 py-3 rounded-full font-medium text-xs tracking-wider transition-colors flex items-center gap-2">
                    Book Now
                    <iconify-icon icon="solar:calendar-linear" width="14"></iconify-icon>
</button>
</div>
</div>
</div>
<footer className="py-16 bg-stone-100 border-t border-stone-200 mt-20 text-center">
<div className="max-w-4xl mx-auto px-6">
<h2 className="text-2xl font-serif italic text-stone-400 mb-8">NAVA</h2>
<div className="flex justify-center gap-8 mb-8">
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="solar:instagram-linear" width="20"></iconify-icon></a>
<a className="text-stone-400 hover:text-stone-800 transition-colors" href="#"><iconify-icon icon="solar:phone-linear" width="20"></iconify-icon></a>
</div>
<p className="text-[10px] text-stone-400 tracking-widest uppercase">© 2024 NAVA - Journey to the Past</p>
</div>
</footer>



    </>
  );
}
