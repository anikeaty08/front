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



      lucide.createIcons();
    
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
      

<header bis_size='{"x":0,"y":5107,"w":1056,"h":81,"abs_x":440,"abs_y":5150}' className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div bis_size='{"x":0,"y":5107,"w":1056,"h":80,"abs_x":440,"abs_y":5150}' className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<div bis_size='{"x":24,"y":5127,"w":180,"h":40,"abs_x":464,"abs_y":5170}' className="flex items-center gap-2 group cursor-pointer">
<div bis_size='{"x":24,"y":5127,"w":40,"h":40,"abs_x":464,"abs_y":5170}' className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#D4FD52] to-[#a3d600] flex items-center justify-center shadow-[0_0_15px_rgba(212,253,82,0.3)] transition-transform group-hover:scale-105">
<svg bis_size='{"x":32,"y":5135,"w":24,"h":24,"abs_x":472,"abs_y":5178}' className="lucide lucide-activity text-slate-900 w-6 h-6 stroke-[2.5]" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span bis_size='{"x":72,"y":5133,"w":132,"h":28,"abs_x":512,"abs_y":5176}' className="text-white font-semibold text-xl tracking-wide font-heading">
            CourtMaster
          </span>
</div>

<nav bis_size='{"x":334,"y":5135,"w":396,"h":22,"abs_x":774,"abs_y":5178}' className="hidden md:flex items-center gap-10">
<a bis_size='{"x":334,"y":5135,"w":68,"h":22,"abs_x":774,"abs_y":5178}' className="text-[15px] font-medium text-slate-300 hover:text-[#D4FD52] transition-colors" href="#features">
            Tính năng
          </a>
<a bis_size='{"x":442,"y":5135,"w":75,"h":22,"abs_x":882,"abs_y":5178}' className="text-[15px] font-medium text-slate-300 hover:text-[#D4FD52] transition-colors" href="#guide">
            Hướng dẫn
          </a>
<a bis_size='{"x":557,"y":5135,"w":79,"h":22,"abs_x":997,"abs_y":5178}' className="text-[15px] font-medium text-slate-300 hover:text-[#D4FD52] transition-colors" href="#testimonials">
            Khách hàng
          </a>
<a bis_size='{"x":677,"y":5135,"w":52,"h":22,"abs_x":1117,"abs_y":5178}' className="text-[15px] font-medium text-slate-300 hover:text-[#D4FD52] transition-colors" href="#faq">
            Hỏi đáp
          </a>
</nav>

<div bis_size='{"x":859,"y":5125,"w":172,"h":42,"abs_x":1299,"abs_y":5168}' className="flex items-center gap-4">
<button bis_size='{"x":859,"y":5125,"w":172,"h":42,"abs_x":1299,"abs_y":5168}' className="hidden md:flex bg-[#D4FD52] hover:bg-[#bce336] text-slate-900 px-6 py-2.5 rounded-full font-bold text-[15px] transition-all shadow-[0_4px_20px_rgba(212,253,82,0.25)] hover:shadow-[0_4px_25px_rgba(212,253,82,0.4)] hover:-translate-y-0.5">
            Đăng ký dùng thử
          </button>

<button bis_size='{"x":0,"y":5107,"w":0,"h":0,"abs_x":440,"abs_y":5150}' className="md:hidden text-white p-2">
<svg bis_size='{"x":0,"y":5107,"w":0,"h":0,"abs_x":440,"abs_y":5150}' className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</header>
<main bis_size='{"x":0,"y":0,"w":1056,"h":5771,"abs_x":440,"abs_y":43}' className="relative">

<div bis_size='{"x":0,"y":5107,"w":1056,"h":816,"abs_x":440,"abs_y":5150}' className="fixed top-0 left-0 w-full h-full overflow-hidden -z-10 pointer-events-none">
<div bis_size='{"x":-105,"y":5025,"w":500,"h":500,"abs_x":335,"abs_y":5068}' className="absolute top-[-10%] left-[-10%] w-[500px] h-[500px] bg-[#3B82F6] rounded-full mix-blend-screen filter blur-[120px] opacity-10"></div>
<div bis_size='{"x":508,"y":5241,"w":600,"h":600,"abs_x":948,"abs_y":5284}' className="absolute bottom-[10%] right-[-5%] w-[600px] h-[600px] bg-[#D4FD52] rounded-full mix-blend-screen filter blur-[130px] opacity-[0.08]"></div>
</div>

<section bis_size='{"x":0,"y":0,"w":1056,"h":1335,"abs_x":440,"abs_y":43}' className="pt-32 pb-20 lg:pt-40 lg:pb-32 px-6 relative">
<div bis_size='{"x":24,"y":160,"w":1008,"h":1047,"abs_x":464,"abs_y":203}' className="max-w-7xl mx-auto flex flex-col items-center text-center">

<div bis_size='{"x":357,"y":160,"w":340,"h":34,"abs_x":797,"abs_y":203}' className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-slate-800/50 border border-slate-700 backdrop-blur-sm mb-8 animate-fade-in-up">
<span bis_size='{"x":374,"y":172,"w":10,"h":10,"abs_x":814,"abs_y":215}' className="relative flex h-2.5 w-2.5">
<span bis_size='{"x":374,"y":172,"w":10,"h":10,"abs_x":814,"abs_y":215}' className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#D4FD52] opacity-75"></span>
<span bis_size='{"x":374,"y":172,"w":10,"h":10,"abs_x":814,"abs_y":215}' className="relative inline-flex rounded-full h-2.5 w-2.5 bg-[#D4FD52]"></span>
</span>
<span bis_size='{"x":392,"y":167,"w":288,"h":20,"abs_x":832,"abs_y":210}' className="text-sm font-semibold text-slate-200">
              Giải pháp quản lý sân thể thao số 1 Việt Nam
            </span>
</div>

<h1 bis_size='{"x":84,"y":226,"w":886,"h":152,"abs_x":524,"abs_y":269}' className="text-5xl md:text-6xl lg:text-[76px] leading-[1.1] font-bold text-white max-w-5xl mb-6 drop-shadow-2xl">
            Tối Ưu Hóa Lịch Sân
            <br bis_size='{"x":895,"y":216,"w":0,"h":96,"abs_x":1335,"abs_y":259}'/>
<span bis_size='{"x":84,"y":292,"w":886,"h":96,"abs_x":524,"abs_y":335}' className="text-transparent bg-clip-text bg-gradient-to-r from-[#D4FD52] to-[#3B82F6]">
              Tự Động Hóa Doanh Thu
            </span>
</h1>

<p bis_size='{"x":192,"y":402,"w":672,"h":56,"abs_x":632,"abs_y":445}' className="text-lg md:text-xl text-slate-400 max-w-2xl mb-10 leading-relaxed font-normal">
            Nền tảng quản lý toàn diện dành cho chủ sân: Quản lý lịch trống,
            Booking online không cần đăng nhập và Báo cáo doanh thu tức thì.
          </p>

<div bis_size='{"x":227,"y":498,"w":601,"h":62,"abs_x":667,"abs_y":541}' className="flex flex-col sm:flex-row items-center gap-4 mb-20">
<button bis_size='{"x":227,"y":499,"w":318,"h":60,"abs_x":667,"abs_y":542}' className="w-full sm:w-auto bg-[#D4FD52] text-slate-900 px-8 py-4 rounded-2xl font-bold text-lg transition-all shadow-[0_10px_30px_-10px_rgba(212,253,82,0.4)] hover:shadow-[0_20px_40px_-10px_rgba(212,253,82,0.5)] hover:-translate-y-1 flex items-center justify-center gap-2">
              Dùng thử miễn phí 14 ngày
              <svg bis_size='{"x":494,"y":519,"w":20,"h":20,"abs_x":934,"abs_y":562}' className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button bis_size='{"x":562,"y":498,"w":266,"h":62,"abs_x":1002,"abs_y":541}' className="w-full sm:w-auto bg-slate-800/50 hover:bg-slate-800 text-white border border-slate-700 px-8 py-4 rounded-2xl font-semibold text-lg transition-all flex items-center justify-center gap-2">
<svg bis_size='{"x":595,"y":519,"w":20,"h":20,"abs_x":1035,"abs_y":562}' className="lucide lucide-play-circle w-5 h-5 text-[#3B82F6]" data-lucide="play-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9 9.003a1 1 0 0 1 1.517-.859l4.997 2.997a1 1 0 0 1 0 1.718l-4.997 2.997A1 1 0 0 1 9 14.996z"></path><circle cx="12" cy="12" r="10"></circle></svg>
              Xem demo sản phẩm
            </button>
</div>

<div bis_size='{"x":24,"y":640,"w":1008,"h":567,"abs_x":464,"abs_y":683}' className="relative w-full max-w-6xl mx-auto perspective-[2000px] group">

<div bis_size='{"x":24,"y":640,"w":1008,"h":567,"abs_x":464,"abs_y":683}' className="absolute inset-0 bg-gradient-to-t from-[#D4FD52]/20 via-[#3B82F6]/10 to-transparent rounded-[3rem] blur-3xl -z-10 opacity-30 group-hover:opacity-40 transition-opacity duration-700"></div>

<div bis_size='{"x":24,"y":640,"w":1008,"h":567,"abs_x":464,"abs_y":683}' className="relative z-10 bg-[#1E293B] border border-slate-700 rounded-[24px] shadow-2xl overflow-hidden aspect-[16/9] transform rotate-x-6 group-hover:rotate-x-2 transition-transform duration-700 ease-out">

<div bis_size='{"x":25,"y":641,"w":1006,"h":48,"abs_x":465,"abs_y":684}' className="h-12 bg-[#0F172A] border-b border-slate-700 flex items-center px-4 gap-2">
<div bis_size='{"x":41,"y":658,"w":52,"h":12,"abs_x":481,"abs_y":701}' className="flex gap-2">
<div bis_size='{"x":41,"y":658,"w":12,"h":12,"abs_x":481,"abs_y":701}' className="w-3 h-3 rounded-full bg-red-500/80"></div>
<div bis_size='{"x":61,"y":658,"w":12,"h":12,"abs_x":501,"abs_y":701}' className="w-3 h-3 rounded-full bg-yellow-500/80"></div>
<div bis_size='{"x":81,"y":658,"w":12,"h":12,"abs_x":521,"abs_y":701}' className="w-3 h-3 rounded-full bg-green-500/80"></div>
</div>
<div bis_size='{"x":117,"y":652,"w":256,"h":24,"abs_x":557,"abs_y":695}' className="ml-4 w-64 h-6 rounded-full bg-slate-800/50 border border-slate-700/50"></div>
</div>

<div bis_size='{"x":25,"y":689,"w":1006,"h":565,"abs_x":465,"abs_y":732}' className="w-full h-full bg-slate-900 relative">
<img alt="Dashboard Background" bis_size='{"x":25,"y":689,"w":1006,"h":565,"abs_x":465,"abs_y":732}' className="w-full h-full object-cover opacity-20" src="https://images.unsplash.com/photo-1626244422533-5c4d05908e06?q=80&amp;w=2576&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":25,"y":689,"w":1006,"h":565,"abs_x":465,"abs_y":732}' className="absolute inset-0 p-8 grid grid-cols-12 gap-6">

<div bis_size='{"x":57,"y":721,"w":137,"h":501,"abs_x":497,"abs_y":764}' className="col-span-2 hidden lg:block space-y-4">
<div bis_size='{"x":57,"y":721,"w":102,"h":32,"abs_x":497,"abs_y":764}' className="h-8 w-3/4 bg-slate-800 rounded-lg"></div>
<div bis_size='{"x":57,"y":769,"w":137,"h":32,"abs_x":497,"abs_y":812}' className="h-8 w-full bg-slate-800/50 rounded-lg"></div>
<div bis_size='{"x":57,"y":817,"w":114,"h":32,"abs_x":497,"abs_y":860}' className="h-8 w-5/6 bg-slate-800/50 rounded-lg"></div>
<div bis_size='{"x":57,"y":865,"w":109,"h":32,"abs_x":497,"abs_y":908}' className="h-8 w-4/5 bg-slate-800/50 rounded-lg"></div>
</div>

<div bis_size='{"x":218,"y":721,"w":781,"h":501,"abs_x":658,"abs_y":764}' className="col-span-12 lg:col-span-10 grid grid-cols-3 gap-6">

<div bis_size='{"x":218,"y":721,"w":244,"h":157,"abs_x":658,"abs_y":764}' className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4">
<div bis_size='{"x":235,"y":738,"w":210,"h":20,"abs_x":675,"abs_y":781}' className="text-sm text-slate-400 mb-2">
                        Doanh thu hôm nay
                      </div>
<div bis_size='{"x":235,"y":766,"w":210,"h":32,"abs_x":675,"abs_y":809}' className="text-2xl font-bold text-white">
                        4.200.000₫
                      </div>
</div>
<div bis_size='{"x":486,"y":721,"w":244,"h":157,"abs_x":926,"abs_y":764}' className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4">
<div bis_size='{"x":503,"y":738,"w":210,"h":20,"abs_x":943,"abs_y":781}' className="text-sm text-slate-400 mb-2">
                        Lịch đặt mới
                      </div>
<div bis_size='{"x":503,"y":766,"w":210,"h":32,"abs_x":943,"abs_y":809}' className="text-2xl font-bold text-[#D4FD52]">18</div>
</div>
<div bis_size='{"x":754,"y":721,"w":244,"h":157,"abs_x":1194,"abs_y":764}' className="bg-slate-800/80 backdrop-blur border border-slate-700 rounded-xl p-4">
<div bis_size='{"x":771,"y":738,"w":210,"h":20,"abs_x":1211,"abs_y":781}' className="text-sm text-slate-400 mb-2">
                        Tỷ lệ lấp đầy
                      </div>
<div bis_size='{"x":771,"y":766,"w":210,"h":32,"abs_x":1211,"abs_y":809}' className="text-2xl font-bold text-[#3B82F6]">85%</div>
</div>

<div bis_size='{"x":218,"y":902,"w":780,"h":256,"abs_x":658,"abs_y":945}' className="col-span-3 bg-slate-800/60 border border-slate-700 rounded-xl h-64 relative overflow-hidden flex flex-col p-4">
<div bis_size='{"x":235,"y":919,"w":746,"h":41,"abs_x":675,"abs_y":962}' className="flex justify-between items-center mb-4 border-b border-slate-700 pb-2">
<div bis_size='{"x":235,"y":923,"w":128,"h":24,"abs_x":675,"abs_y":966}' className="w-32 h-6 bg-slate-700 rounded"></div>
<div bis_size='{"x":901,"y":919,"w":80,"h":32,"abs_x":1341,"abs_y":962}' className="flex gap-2">
<div bis_size='{"x":901,"y":919,"w":80,"h":32,"abs_x":1341,"abs_y":962}' className="w-20 h-8 bg-[#D4FD52] rounded text-slate-900 flex items-center justify-center font-bold text-xs">
                            Đặt sân +
                          </div>
</div>
</div>
<div bis_size='{"x":235,"y":976,"w":746,"h":165,"abs_x":675,"abs_y":1019}' className="flex-1 grid grid-cols-7 gap-px bg-slate-700/50 border border-slate-700">
<div bis_size='{"x":236,"y":977,"w":105,"h":163,"abs_x":676,"abs_y":1020}' className="bg-slate-900/90 relative group/cell p-2">
<div bis_size='{"x":240,"y":981,"w":97,"h":155,"abs_x":680,"abs_y":1024}' className="absolute inset-1 bg-[#3B82F6]/20 border border-[#3B82F6]/50 rounded text-[10px] text-[#3B82F6] font-bold p-1">
                            Sân 1 - Đã đặt
                          </div>
</div>
<div bis_size='{"x":342,"y":977,"w":105,"h":163,"abs_x":782,"abs_y":1020}' className="bg-slate-900/90"></div>
<div bis_size='{"x":449,"y":977,"w":105,"h":163,"abs_x":889,"abs_y":1020}' className="bg-slate-900/90 relative p-2">
<div bis_size='{"x":453,"y":981,"w":97,"h":155,"abs_x":893,"abs_y":1024}' className="absolute inset-1 bg-[#D4FD52]/20 border border-[#D4FD52]/50 rounded text-[10px] text-[#D4FD52] font-bold p-1">
                            Sân 2 - Khách lẻ
                          </div>
</div>
<div bis_size='{"x":555,"y":977,"w":105,"h":163,"abs_x":995,"abs_y":1020}' className="bg-slate-900/90"></div>
<div bis_size='{"x":662,"y":977,"w":105,"h":163,"abs_x":1102,"abs_y":1020}' className="bg-slate-900/90"></div>
<div bis_size='{"x":768,"y":977,"w":105,"h":163,"abs_x":1208,"abs_y":1020}' className="bg-slate-900/90"></div>
<div bis_size='{"x":875,"y":977,"w":105,"h":163,"abs_x":1315,"abs_y":1020}' className="bg-slate-900/90"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":815,"y":755,"w":288,"h":502,"abs_x":1255,"abs_y":798}' className="absolute -bottom-10 -right-4 lg:-right-12 w-[180px] sm:w-[240px] bg-black rounded-[3rem] border-[8px] border-slate-800 shadow-2xl z-20 aspect-[1/2] overflow-hidden transform rotate-[-6deg] hover:rotate-0 transition-transform duration-500">
<div bis_size='{"x":895,"y":772,"w":82,"h":32,"abs_x":1335,"abs_y":815}' className="absolute top-0 left-1/2 -translate-x-1/2 w-20 h-6 bg-black rounded-b-xl z-30"></div>
<div bis_size='{"x":824,"y":764,"w":271,"h":484,"abs_x":1264,"abs_y":807}' className="w-full h-full bg-[#0F172A] flex flex-col items-center justify-center p-6 text-center">
<div bis_size='{"x":913,"y":868,"w":70,"h":70,"abs_x":1353,"abs_y":911}' className="w-16 h-16 rounded-full bg-[#D4FD52] flex items-center justify-center mb-4">
<svg bis_size='{"x":927,"y":881,"w":43,"h":43,"abs_x":1367,"abs_y":924}' className="lucide lucide-check w-10 h-10 text-slate-900 stroke-[3]" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h3 bis_size='{"x":900,"y":945,"w":111,"h":39,"abs_x":1340,"abs_y":988}' className="text-white font-bold text-lg mb-1">Thành công!</h3>
<p bis_size='{"x":877,"y":974,"w":162,"h":48,"abs_x":1317,"abs_y":1017}' className="text-xs text-slate-400 mb-6">
                  Bạn đã đặt sân Badminton 02
                  
                  18:00 - 20:00
                </p>
<div bis_size='{"x":875,"y":1029,"w":180,"h":66,"abs_x":1315,"abs_y":1072}' className="w-full h-12 bg-slate-800 rounded-xl mb-2 animate-pulse"></div>
<div bis_size='{"x":881,"y":1085,"w":180,"h":66,"abs_x":1321,"abs_y":1128}' className="w-full h-12 bg-slate-800 rounded-xl animate-pulse delay-75"></div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1335,"w":1056,"h":162,"abs_x":440,"abs_y":1378}' className="py-10 border-y border-slate-800/50 bg-slate-900/30">
<div bis_size='{"x":0,"y":1376,"w":1056,"h":80,"abs_x":440,"abs_y":1419}' className="max-w-7xl mx-auto px-6 text-center">
<p bis_size='{"x":24,"y":1376,"w":1008,"h":20,"abs_x":464,"abs_y":1419}' className="text-sm font-semibold uppercase tracking-widest text-slate-500 mb-8">
            Được tin dùng bởi các cụm sân hàng đầu
          </p>
<div bis_size='{"x":24,"y":1428,"w":1008,"h":28,"abs_x":464,"abs_y":1471}' className="flex flex-wrap justify-center items-center gap-12 md:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<div bis_size='{"x":125,"y":1428,"w":130,"h":28,"abs_x":565,"abs_y":1471}' className="flex items-center gap-2 text-xl font-bold text-white">
<svg bis_size='{"x":125,"y":1430,"w":24,"h":24,"abs_x":565,"abs_y":1473}' className="lucide lucide-zap fill-white" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
              SportZone
            </div>
<div bis_size='{"x":335,"y":1428,"w":131,"h":28,"abs_x":775,"abs_y":1471}' className="flex items-center gap-2 text-xl font-bold text-white">
<svg bis_size='{"x":335,"y":1430,"w":24,"h":24,"abs_x":775,"abs_y":1473}' className="lucide lucide-triangle fill-white" data-lucide="triangle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.73 4a2 2 0 0 0-3.46 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3Z"></path></svg>
              PRO Court
            </div>
<div bis_size='{"x":547,"y":1428,"w":140,"h":28,"abs_x":987,"abs_y":1471}' className="flex items-center gap-2 text-xl font-bold text-white">
<svg bis_size='{"x":547,"y":1430,"w":24,"h":24,"abs_x":987,"abs_y":1473}' className="lucide lucide-circle-dashed fill-white" data-lucide="circle-dashed" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.1 2.182a10 10 0 0 1 3.8 0"></path><path d="M13.9 21.818a10 10 0 0 1-3.8 0"></path><path d="M17.609 3.721a10 10 0 0 1 2.69 2.7"></path><path d="M2.182 13.9a10 10 0 0 1 0-3.8"></path><path d="M20.279 17.609a10 10 0 0 1-2.7 2.69"></path><path d="M21.818 10.1a10 10 0 0 1 0 3.8"></path><path d="M3.721 6.391a10 10 0 0 1 2.7-2.69"></path><path d="M6.391 20.279a10 10 0 0 1-2.69-2.7"></path></svg>
              Elite Center
            </div>
<div bis_size='{"x":768,"y":1428,"w":161,"h":28,"abs_x":1208,"abs_y":1471}' className="flex items-center gap-2 text-xl font-bold text-white">
<svg bis_size='{"x":768,"y":1430,"w":24,"h":24,"abs_x":1208,"abs_y":1473}' className="lucide lucide-hexagon fill-white" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
              Victory Arena
            </div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":1497,"w":1056,"h":1785,"abs_x":440,"abs_y":1540}' className="py-24 px-6" id="features">
<div bis_size='{"x":24,"y":1593,"w":1008,"h":1593,"abs_x":464,"abs_y":1636}' className="max-w-7xl mx-auto space-y-32">

<div bis_size='{"x":24,"y":1593,"w":1008,"h":363,"abs_x":464,"abs_y":1636}' className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div bis_size='{"x":24,"y":1593,"w":464,"h":363,"abs_x":464,"abs_y":1636}' className="w-full md:w-1/2 space-y-6">
<div bis_size='{"x":24,"y":1593,"w":48,"h":48,"abs_x":464,"abs_y":1636}' className="w-12 h-12 rounded-2xl bg-blue-500/10 flex items-center justify-center border border-blue-500/20 text-[#3B82F6]">
<svg bis_size='{"x":36,"y":1605,"w":24,"h":24,"abs_x":476,"abs_y":1648}' className="lucide lucide-calendar-clock w-6 h-6" data-lucide="calendar-clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 14v2.2l1.6 1"></path><path d="M16 2v4"></path><path d="M21 7.5V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h3.5"></path><path d="M3 10h5"></path><path d="M8 2v4"></path><circle cx="16" cy="16" r="6"></circle></svg>
</div>
<h2 bis_size='{"x":24,"y":1665,"w":464,"h":96,"abs_x":464,"abs_y":1708}' className="text-4xl lg:text-5xl font-bold text-white">
                Quản lý thông tin
                <br bis_size='{"x":416,"y":1658,"w":0,"h":60,"abs_x":856,"abs_y":1701}'/>
                &amp; Lịch thuê
              </h2>
<p bis_size='{"x":24,"y":1785,"w":464,"h":87,"abs_x":464,"abs_y":1828}' className="text-lg text-slate-400 leading-relaxed">
                Thay thế hoàn toàn sổ sách thủ công. Hệ thống hiển thị trực quan
                lịch thuê cố định và khách vãng lai trên một giao diện duy nhất.
                Dễ dàng kéo thả để thay đổi giờ chơi.
              </p>
<ul bis_size='{"x":24,"y":1896,"w":464,"h":60,"abs_x":464,"abs_y":1939}' className="space-y-3 text-slate-300">
<li bis_size='{"x":24,"y":1896,"w":464,"h":24,"abs_x":464,"abs_y":1939}' className="flex items-center gap-3">
<svg bis_size='{"x":24,"y":1898,"w":20,"h":20,"abs_x":464,"abs_y":1941}' className="lucide lucide-check-circle-2 w-5 h-5 text-[#D4FD52]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Tự động cảnh báo trùng lịch
                </li>
<li bis_size='{"x":24,"y":1932,"w":464,"h":24,"abs_x":464,"abs_y":1975}' className="flex items-center gap-3">
<svg bis_size='{"x":24,"y":1934,"w":20,"h":20,"abs_x":464,"abs_y":1977}' className="lucide lucide-check-circle-2 w-5 h-5 text-[#D4FD52]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Quản lý danh sách hội viên
                </li>
</ul>
</div>
<div bis_size='{"x":568,"y":1617,"w":464,"h":315,"abs_x":1008,"abs_y":1660}' className="w-full md:w-1/2 relative">
<div bis_size='{"x":568,"y":1617,"w":464,"h":315,"abs_x":1008,"abs_y":1660}' className="absolute inset-0 bg-blue-500/20 blur-[80px] rounded-full"></div>
<div bis_size='{"x":568,"y":1617,"w":464,"h":315,"abs_x":1008,"abs_y":1660}' className="relative glass-panel rounded-3xl p-2 border border-slate-700 shadow-2xl">
<img alt="Feature 1" bis_size='{"x":577,"y":1626,"w":446,"h":297,"abs_x":1017,"abs_y":1669}' className="rounded-2xl w-full h-auto object-cover opacity-80 hover:opacity-100 transition-opacity" src="https://images.unsplash.com/photo-1551288049-bebda4e38f71?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>

<div bis_size='{"x":592,"y":1681,"w":415,"h":186,"abs_x":1032,"abs_y":1724}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[90%] bg-[#0F172A] rounded-xl border border-slate-700 shadow-xl p-4">
<div bis_size='{"x":609,"y":1698,"w":381,"h":24,"abs_x":1049,"abs_y":1741}' className="flex justify-between mb-4">
<span bis_size='{"x":609,"y":1698,"w":95,"h":24,"abs_x":1049,"abs_y":1741}' className="text-white font-bold">Thứ 2, 14/10</span>
<svg bis_size='{"x":966,"y":1698,"w":24,"h":24,"abs_x":1406,"abs_y":1741}' className="lucide lucide-more-horizontal text-slate-500" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="1"></circle><circle cx="19" cy="12" r="1"></circle><circle cx="5" cy="12" r="1"></circle></svg>
</div>
<div bis_size='{"x":609,"y":1738,"w":381,"h":112,"abs_x":1049,"abs_y":1781}' className="space-y-2">
<div bis_size='{"x":609,"y":1738,"w":381,"h":52,"abs_x":1049,"abs_y":1781}' className="flex items-center bg-blue-500/10 border-l-4 border-blue-500 p-2 rounded">
<div bis_size='{"x":621,"y":1746,"w":361,"h":36,"abs_x":1061,"abs_y":1789}' className="flex-1">
<div bis_size='{"x":621,"y":1746,"w":361,"h":16,"abs_x":1061,"abs_y":1789}' className="text-xs text-blue-300">17:00 - 18:30</div>
<div bis_size='{"x":621,"y":1762,"w":361,"h":20,"abs_x":1061,"abs_y":1805}' className="text-sm font-bold text-blue-100">
                          CLB Cầu Lông ABC
                        </div>
</div>
</div>
<div bis_size='{"x":609,"y":1798,"w":381,"h":52,"abs_x":1049,"abs_y":1841}' className="flex items-center bg-[#D4FD52]/10 border-l-4 border-[#D4FD52] p-2 rounded">
<div bis_size='{"x":621,"y":1806,"w":361,"h":36,"abs_x":1061,"abs_y":1849}' className="flex-1">
<div bis_size='{"x":621,"y":1806,"w":361,"h":16,"abs_x":1061,"abs_y":1849}' className="text-xs text-[#D4FD52]">19:00 - 20:00</div>
<div bis_size='{"x":621,"y":1822,"w":361,"h":20,"abs_x":1061,"abs_y":1865}' className="text-sm font-bold text-white">
                          Nguyễn Văn A
                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":2084,"w":1008,"h":580,"abs_x":464,"abs_y":2127}' className="flex flex-col md:flex-row-reverse items-center gap-12 lg:gap-20">
<div bis_size='{"x":568,"y":2192,"w":464,"h":363,"abs_x":1008,"abs_y":2235}' className="w-full md:w-1/2 space-y-6">
<div bis_size='{"x":568,"y":2192,"w":48,"h":48,"abs_x":1008,"abs_y":2235}' className="w-12 h-12 rounded-2xl bg-[#D4FD52]/10 flex items-center justify-center border border-[#D4FD52]/20 text-[#D4FD52]">
<svg bis_size='{"x":580,"y":2204,"w":24,"h":24,"abs_x":1020,"abs_y":2247}' className="lucide lucide-smartphone w-6 h-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h2 bis_size='{"x":568,"y":2264,"w":464,"h":96,"abs_x":1008,"abs_y":2307}' className="text-4xl lg:text-5xl font-bold text-white">
                Booking &amp;
                <br bis_size='{"x":806,"y":2258,"w":0,"h":60,"abs_x":1246,"abs_y":2301}'/>
                Thanh toán Online
              </h2>
<p bis_size='{"x":568,"y":2384,"w":464,"h":87,"abs_x":1008,"abs_y":2427}' className="text-lg text-slate-400 leading-relaxed">
                Khách hàng tự tra cứu giờ trống và đặt sân ngay trên điện thoại
                thông qua mã QR hoặc Link chia sẻ. Hỗ trợ thanh toán chuyển
                khoản với nội dung tự động.
              </p>
<ul bis_size='{"x":568,"y":2496,"w":464,"h":60,"abs_x":1008,"abs_y":2539}' className="space-y-3 text-slate-300">
<li bis_size='{"x":568,"y":2496,"w":464,"h":24,"abs_x":1008,"abs_y":2539}' className="flex items-center gap-3">
<svg bis_size='{"x":568,"y":2498,"w":20,"h":20,"abs_x":1008,"abs_y":2541}' className="lucide lucide-check-circle-2 w-5 h-5 text-[#3B82F6]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Không cần tạo tài khoản/đăng nhập
                </li>
<li bis_size='{"x":568,"y":2532,"w":464,"h":24,"abs_x":1008,"abs_y":2575}' className="flex items-center gap-3">
<svg bis_size='{"x":568,"y":2534,"w":20,"h":20,"abs_x":1008,"abs_y":2577}' className="lucide lucide-check-circle-2 w-5 h-5 text-[#3B82F6]" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
                  Tự động gửi xác nhận qua Zalo/SMS
                </li>
</ul>
</div>
<div bis_size='{"x":24,"y":2084,"w":464,"h":580,"abs_x":464,"abs_y":2127}' className="w-full md:w-1/2 flex justify-center relative">
<div bis_size='{"x":106,"y":2224,"w":300,"h":300,"abs_x":546,"abs_y":2267}' className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[300px] h-[300px] bg-[#D4FD52]/20 blur-[90px] rounded-full"></div>

<div bis_size='{"x":116,"y":2084,"w":280,"h":580,"abs_x":556,"abs_y":2127}' className="relative w-[280px] h-[580px] bg-[#0F172A] rounded-[40px] border-4 border-slate-800 shadow-2xl overflow-hidden">

<div bis_size='{"x":120,"y":2088,"w":272,"h":572,"abs_x":560,"abs_y":2131}' className="w-full h-full bg-slate-900 flex flex-col">
<div bis_size='{"x":120,"y":2088,"w":272,"h":84,"abs_x":560,"abs_y":2131}' className="bg-[#1E293B] p-4 pt-10 pb-4">
<div bis_size='{"x":136,"y":2128,"w":240,"h":28,"abs_x":576,"abs_y":2171}' className="text-center font-bold text-white text-lg">
                      Đặt sân nhanh
                    </div>
</div>
<div bis_size='{"x":120,"y":2172,"w":272,"h":373,"abs_x":560,"abs_y":2215}' className="p-4 space-y-4">
<div bis_size='{"x":136,"y":2188,"w":240,"h":72,"abs_x":576,"abs_y":2231}' className="bg-slate-800 rounded-xl p-3">
<div bis_size='{"x":148,"y":2200,"w":216,"h":16,"abs_x":588,"abs_y":2243}' className="text-xs text-slate-400 mb-1">
                        Chọn giờ chơi
                      </div>
<div bis_size='{"x":148,"y":2220,"w":216,"h":28,"abs_x":588,"abs_y":2263}' className="flex gap-2">
<div bis_size='{"x":148,"y":2220,"w":61,"h":28,"abs_x":588,"abs_y":2263}' className="bg-[#D4FD52] text-slate-900 px-3 py-1 rounded-lg text-sm font-bold">
                          17:00
                        </div>
<div bis_size='{"x":217,"y":2220,"w":60,"h":28,"abs_x":657,"abs_y":2263}' className="bg-slate-700 text-white px-3 py-1 rounded-lg text-sm">
                          18:00
                        </div>
<div bis_size='{"x":285,"y":2220,"w":60,"h":28,"abs_x":725,"abs_y":2263}' className="bg-slate-700 text-white px-3 py-1 rounded-lg text-sm">
                          19:00
                        </div>
</div>
</div>
<div bis_size='{"x":136,"y":2276,"w":240,"h":117,"abs_x":576,"abs_y":2319}' className="bg-slate-800 rounded-xl p-3">
<div bis_size='{"x":148,"y":2288,"w":216,"h":16,"abs_x":588,"abs_y":2331}' className="text-xs text-slate-400 mb-1">
                        Dịch vụ thêm
                      </div>
<div bis_size='{"x":148,"y":2308,"w":216,"h":37,"abs_x":588,"abs_y":2351}' className="flex justify-between items-center py-2 border-b border-slate-700/50">
<span bis_size='{"x":148,"y":2316,"w":91,"h":20,"abs_x":588,"abs_y":2359}' className="text-sm text-white">Thuê vợt (50k)</span>
<div bis_size='{"x":344,"y":2316,"w":20,"h":20,"abs_x":784,"abs_y":2359}' className="w-5 h-5 rounded border border-slate-500"></div>
</div>
<div bis_size='{"x":148,"y":2345,"w":216,"h":36,"abs_x":588,"abs_y":2388}' className="flex justify-between items-center py-2">
<span bis_size='{"x":148,"y":2353,"w":104,"h":20,"abs_x":588,"abs_y":2396}' className="text-sm text-white">Nước uống (10k)</span>
<svg bis_size='{"x":344,"y":2353,"w":20,"h":20,"abs_x":784,"abs_y":2396}' className="lucide lucide-check-square w-5 h-5 text-[#D4FD52] fill-[#D4FD52]/20" data-lucide="check-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 10.656V19a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h12.344"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<div bis_size='{"x":136,"y":2409,"w":240,"h":120,"abs_x":576,"abs_y":2452}' className="mt-auto pt-8">
<div bis_size='{"x":136,"y":2441,"w":240,"h":24,"abs_x":576,"abs_y":2484}' className="flex justify-between text-white font-bold mb-4">
<span bis_size='{"x":136,"y":2441,"w":78,"h":24,"abs_x":576,"abs_y":2484}'>Tổng cộng</span>
<span bis_size='{"x":304,"y":2441,"w":71,"h":24,"abs_x":744,"abs_y":2484}' className="text-[#D4FD52]">260.000đ</span>
</div>
<button bis_size='{"x":136,"y":2481,"w":240,"h":48,"abs_x":576,"abs_y":2524}' className="w-full bg-[#D4FD52] text-slate-900 font-bold py-3 rounded-xl shadow-lg shadow-[#D4FD52]/20">
                        Thanh toán ngay
                      </button>
</div>
</div>
</div>

<div bis_size='{"x":192,"y":2088,"w":128,"h":24,"abs_x":632,"abs_y":2131}' className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-slate-800 rounded-b-xl"></div>
</div>
</div>
</div>

<div bis_size='{"x":24,"y":2792,"w":1008,"h":393,"abs_x":464,"abs_y":2835}' className="flex flex-col md:flex-row items-center gap-12 lg:gap-20">
<div bis_size='{"x":24,"y":2792,"w":464,"h":393,"abs_x":464,"abs_y":2835}' className="w-full md:w-1/2 space-y-6">
<div bis_size='{"x":24,"y":2792,"w":48,"h":48,"abs_x":464,"abs_y":2835}' className="w-12 h-12 rounded-2xl bg-purple-500/10 flex items-center justify-center border border-purple-500/20 text-purple-400">
<svg bis_size='{"x":36,"y":2804,"w":24,"h":24,"abs_x":476,"abs_y":2847}' className="lucide lucide-bar-chart-2 w-6 h-6" data-lucide="bar-chart-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 21v-6"></path><path d="M12 21V3"></path><path d="M19 21V9"></path></svg>
</div>
<h2 bis_size='{"x":24,"y":2864,"w":464,"h":96,"abs_x":464,"abs_y":2907}' className="text-4xl lg:text-5xl font-bold text-white">
                Báo cáo hiệu suất
                <br bis_size='{"x":440,"y":2858,"w":0,"h":60,"abs_x":880,"abs_y":2901}'/>
                Real-time
              </h2>
<p bis_size='{"x":24,"y":2984,"w":464,"h":87,"abs_x":464,"abs_y":3027}' className="text-lg text-slate-400 leading-relaxed">
                Dashboard thông minh giúp chủ sân nắm bắt tình hình kinh doanh
                mọi lúc mọi nơi. Theo dõi doanh thu theo ngày/tháng, tỷ lệ lấp
                đầy sân và nguồn khách hàng.
              </p>
<div bis_size='{"x":24,"y":3096,"w":464,"h":90,"abs_x":464,"abs_y":3139}' className="flex gap-4">
<div bis_size='{"x":24,"y":3096,"w":224,"h":90,"abs_x":464,"abs_y":3139}' className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex-1">
<div bis_size='{"x":41,"y":3113,"w":190,"h":32,"abs_x":481,"abs_y":3156}' className="text-2xl font-bold text-white mb-1">+24%</div>
<div bis_size='{"x":41,"y":3149,"w":190,"h":20,"abs_x":481,"abs_y":3192}' className="text-sm text-slate-400">
                    Tăng trưởng tháng này
                  </div>
</div>
<div bis_size='{"x":264,"y":3096,"w":224,"h":90,"abs_x":704,"abs_y":3139}' className="bg-slate-800/50 p-4 rounded-xl border border-slate-700 flex-1">
<div bis_size='{"x":281,"y":3113,"w":190,"h":32,"abs_x":721,"abs_y":3156}' className="text-2xl font-bold text-white mb-1">100%</div>
<div bis_size='{"x":281,"y":3149,"w":190,"h":20,"abs_x":721,"abs_y":3192}' className="text-sm text-slate-400">Chính xác số liệu</div>
</div>
</div>
</div>
<div bis_size='{"x":568,"y":2818,"w":464,"h":342,"abs_x":1008,"abs_y":2861}' className="w-full md:w-1/2">
<div bis_size='{"x":568,"y":2818,"w":464,"h":342,"abs_x":1008,"abs_y":2861}' className="glass-panel border border-slate-700 rounded-3xl p-6 relative overflow-hidden group">
<div bis_size='{"x":593,"y":2843,"w":414,"h":28,"abs_x":1033,"abs_y":2886}' className="flex items-center justify-between mb-8">
<h4 bis_size='{"x":593,"y":2843,"w":184,"h":28,"abs_x":1033,"abs_y":2886}' className="text-white font-bold text-lg">
                    Tổng quan doanh thu
                  </h4>
<div bis_size='{"x":926,"y":2845,"w":81,"h":24,"abs_x":1366,"abs_y":2888}' className="bg-slate-800 px-3 py-1 rounded-lg text-xs text-slate-300">
                    Tháng này
                  </div>
</div>

<div bis_size='{"x":593,"y":2903,"w":414,"h":192,"abs_x":1033,"abs_y":2946}' className="flex items-end justify-between h-48 gap-2 mb-6">
<div bis_size='{"x":593,"y":3018,"w":52,"h":76,"abs_x":1033,"abs_y":3061}' className="w-full bg-slate-800 rounded-t-sm h-[40%] group-hover:h-[45%] transition-all duration-500 relative"></div>
<div bis_size='{"x":653,"y":2980,"w":52,"h":115,"abs_x":1093,"abs_y":3023}' className="w-full bg-slate-800 rounded-t-sm h-[60%] group-hover:h-[55%] transition-all duration-500 relative"></div>
<div bis_size='{"x":713,"y":3038,"w":52,"h":57,"abs_x":1153,"abs_y":3081}' className="w-full bg-slate-800 rounded-t-sm h-[30%] group-hover:h-[40%] transition-all duration-500 relative"></div>
<div bis_size='{"x":773,"y":2951,"w":52,"h":144,"abs_x":1213,"abs_y":2994}' className="w-full bg-[#3B82F6] rounded-t-sm h-[75%] shadow-[0_0_15px_rgba(59,130,246,0.4)] relative">
<div bis_size='{"x":778,"y":2919,"w":43,"h":23,"abs_x":1218,"abs_y":2962}' className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      12.5tr
                    </div>
</div>
<div bis_size='{"x":834,"y":2922,"w":52,"h":172,"abs_x":1274,"abs_y":2965}' className="w-full bg-[#D4FD52] rounded-t-sm h-[90%] shadow-[0_0_15px_rgba(212,253,82,0.4)] relative">
<div bis_size='{"x":838,"y":2890,"w":43,"h":23,"abs_x":1278,"abs_y":2933}' className="absolute -top-8 left-1/2 -translate-x-1/2 bg-slate-800 text-white text-[10px] py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity">
                      15.2tr
                    </div>
</div>
<div bis_size='{"x":894,"y":2999,"w":52,"h":96,"abs_x":1334,"abs_y":3042}' className="w-full bg-slate-800 rounded-t-sm h-[50%] group-hover:h-[60%] transition-all duration-500 relative"></div>
<div bis_size='{"x":954,"y":2970,"w":52,"h":124,"abs_x":1394,"abs_y":3013}' className="w-full bg-slate-800 rounded-t-sm h-[65%] group-hover:h-[70%] transition-all duration-500 relative"></div>
</div>

<div bis_size='{"x":593,"y":3119,"w":414,"h":16,"abs_x":1033,"abs_y":3162}' className="flex justify-between text-xs text-slate-500">
<span bis_size='{"x":593,"y":3119,"w":14,"h":16,"abs_x":1033,"abs_y":3162}'>T2</span>
<span bis_size='{"x":659,"y":3119,"w":14,"h":16,"abs_x":1099,"abs_y":3162}'>T3</span>
<span bis_size='{"x":725,"y":3119,"w":14,"h":16,"abs_x":1165,"abs_y":3162}'>T4</span>
<span bis_size='{"x":791,"y":3119,"w":14,"h":16,"abs_x":1231,"abs_y":3162}'>T5</span>
<span bis_size='{"x":857,"y":3119,"w":14,"h":16,"abs_x":1297,"abs_y":3162}'>T6</span>
<span bis_size='{"x":923,"y":3119,"w":14,"h":16,"abs_x":1363,"abs_y":3162}'>T7</span>
<span bis_size='{"x":990,"y":3119,"w":16,"h":16,"abs_x":1430,"abs_y":3162}'>CN</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3282,"w":1056,"h":656,"abs_x":440,"abs_y":3325}' className="py-24 bg-slate-900/50 relative overflow-hidden" id="guide">

<div bis_size='{"x":0,"y":3282,"w":1056,"h":656,"abs_x":440,"abs_y":3325}' className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_60%_at_50%_50%,black,transparent)]"></div>
<div bis_size='{"x":0,"y":3378,"w":1056,"h":464,"abs_x":440,"abs_y":3421}' className="max-w-7xl mx-auto px-6 relative z-10">
<div bis_size='{"x":24,"y":3378,"w":1008,"h":144,"abs_x":464,"abs_y":3421}' className="text-center mb-20">
<h2 bis_size='{"x":24,"y":3378,"w":1008,"h":96,"abs_x":464,"abs_y":3421}' className="text-4xl lg:text-5xl font-bold text-white mb-6">
              Vận hành đơn giản
              <br bis_size='{"x":744,"y":3372,"w":0,"h":60,"abs_x":1184,"abs_y":3415}'/>
              chỉ trong 3 bước
            </h2>
<p bis_size='{"x":24,"y":3498,"w":1008,"h":24,"abs_x":464,"abs_y":3541}' className="text-slate-400">
              Bắt đầu quản lý chuyên nghiệp ngay hôm nay mà không cần kiến thức
              kỹ thuật.
            </p>
</div>
<div bis_size='{"x":24,"y":3602,"w":1008,"h":240,"abs_x":464,"abs_y":3645}' className="grid grid-cols-1 md:grid-cols-3 gap-12 relative">

<div bis_size='{"x":185,"y":3650,"w":685,"h":2,"abs_x":625,"abs_y":3693}' className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-slate-700 via-[#D4FD52] to-slate-700 z-0 opacity-30"></div>

<div bis_size='{"x":24,"y":3602,"w":304,"h":240,"abs_x":464,"abs_y":3645}' className="relative z-10 flex flex-col items-center text-center group">
<div bis_size='{"x":128,"y":3602,"w":96,"h":96,"abs_x":568,"abs_y":3645}' className="w-24 h-24 rounded-3xl bg-[#0F172A] border-2 border-slate-700 group-hover:border-[#D4FD52] transition-colors flex items-center justify-center mb-8 shadow-xl">
<svg bis_size='{"x":156,"y":3630,"w":40,"h":40,"abs_x":596,"abs_y":3673}' className="lucide lucide-settings w-10 h-10 text-slate-400 group-hover:text-[#D4FD52] transition-colors" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 bis_size='{"x":89,"y":3730,"w":172,"h":32,"abs_x":529,"abs_y":3773}' className="text-2xl font-bold text-white mb-3">
                1. Thiết lập sân
              </h3>
<p bis_size='{"x":24,"y":3774,"w":304,"h":68,"abs_x":464,"abs_y":3817}' className="text-slate-400 text-sm leading-relaxed px-4">
                Đăng ký tài khoản, nhập thông tin số lượng sân, bảng giá theo
                khung giờ và các tiện ích đi kèm.
              </p>
</div>

<div bis_size='{"x":376,"y":3602,"w":304,"h":240,"abs_x":816,"abs_y":3645}' className="relative z-10 flex flex-col items-center text-center group">
<div bis_size='{"x":480,"y":3602,"w":96,"h":96,"abs_x":920,"abs_y":3645}' className="w-24 h-24 rounded-3xl bg-[#0F172A] border-2 border-slate-700 group-hover:border-[#3B82F6] transition-colors flex items-center justify-center mb-8 shadow-xl">
<svg bis_size='{"x":508,"y":3630,"w":40,"h":40,"abs_x":948,"abs_y":3673}' className="lucide lucide-share-2 w-10 h-10 text-slate-400 group-hover:text-[#3B82F6] transition-colors" data-lucide="share-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<h3 bis_size='{"x":443,"y":3730,"w":168,"h":32,"abs_x":883,"abs_y":3773}' className="text-2xl font-bold text-white mb-3">
                2. Chia sẻ Link
              </h3>
<p bis_size='{"x":376,"y":3774,"w":304,"h":68,"abs_x":816,"abs_y":3817}' className="text-slate-400 text-sm leading-relaxed px-4">
                Hệ thống tạo tự động 1 trang đặt sân riêng. Bạn chỉ cần gửi link
                cho khách hoặc in mã QR dán tại sân.
              </p>
</div>

<div bis_size='{"x":728,"y":3602,"w":304,"h":240,"abs_x":1168,"abs_y":3645}' className="relative z-10 flex flex-col items-center text-center group">
<div bis_size='{"x":832,"y":3602,"w":96,"h":96,"abs_x":1272,"abs_y":3645}' className="w-24 h-24 rounded-3xl bg-[#0F172A] border-2 border-slate-700 group-hover:border-[#D4FD52] transition-colors flex items-center justify-center mb-8 shadow-xl">
<svg bis_size='{"x":860,"y":3630,"w":40,"h":40,"abs_x":1300,"abs_y":3673}' className="lucide lucide-rocket w-10 h-10 text-slate-400 group-hover:text-[#D4FD52] transition-colors" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 bis_size='{"x":762,"y":3730,"w":234,"h":32,"abs_x":1202,"abs_y":3773}' className="text-2xl font-bold text-white mb-3">
                3. Tự động vận hành
              </h3>
<p bis_size='{"x":728,"y":3774,"w":304,"h":68,"abs_x":1168,"abs_y":3817}' className="text-slate-400 text-sm leading-relaxed px-4">
                Lịch đặt đổ về tự động. Bạn chỉ cần mở app xem báo cáo doanh thu
                và xác nhận check-in khi khách đến.
              </p>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":3938,"w":1056,"h":668,"abs_x":440,"abs_y":3981}' className="py-24 px-6" id="testimonials">
<div bis_size='{"x":24,"y":4034,"w":1008,"h":476,"abs_x":464,"abs_y":4077}' className="max-w-7xl mx-auto">
<h2 bis_size='{"x":24,"y":4034,"w":1008,"h":96,"abs_x":464,"abs_y":4077}' className="text-4xl lg:text-5xl font-bold text-white text-center mb-16">
            Khách hàng nói gì
            <br bis_size='{"x":734,"y":4028,"w":0,"h":60,"abs_x":1174,"abs_y":4071}'/>
            về chúng tôi?
          </h2>
<div bis_size='{"x":24,"y":4194,"w":1008,"h":316,"abs_x":464,"abs_y":4237}' className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div bis_size='{"x":24,"y":4194,"w":320,"h":316,"abs_x":464,"abs_y":4237}' className="glass-panel p-8 rounded-3xl hover:border-[#D4FD52]/50 transition-colors cursor-default">
<div bis_size='{"x":57,"y":4227,"w":254,"h":16,"abs_x":497,"abs_y":4270}' className="flex items-center gap-1 mb-6 text-[#D4FD52]">
<svg bis_size='{"x":57,"y":4227,"w":16,"h":16,"abs_x":497,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":77,"y":4227,"w":16,"h":16,"abs_x":517,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":97,"y":4227,"w":16,"h":16,"abs_x":537,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":117,"y":4227,"w":16,"h":16,"abs_x":557,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":137,"y":4227,"w":16,"h":16,"abs_x":577,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":57,"y":4267,"w":254,"h":130,"abs_x":497,"abs_y":4310}' className="text-slate-300 mb-8 leading-relaxed">
                "Trước đây tôi mất 2 tiếng mỗi ngày để chốt lịch qua tin nhắn.
                Từ khi dùng CourtMaster, khách tự đặt hết, tôi chỉ việc thu
                tiền. Quá tiện lợi!"
              </p>
<div bis_size='{"x":57,"y":4429,"w":254,"h":48,"abs_x":497,"abs_y":4472}' className="flex items-center gap-4">
<img alt="User" bis_size='{"x":57,"y":4429,"w":48,"h":48,"abs_x":497,"abs_y":4472}' className="w-12 h-12 rounded-full border-2 border-[#D4FD52]" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":121,"y":4433,"w":159,"h":40,"abs_x":561,"abs_y":4476}'>
<h5 bis_size='{"x":121,"y":4433,"w":159,"h":24,"abs_x":561,"abs_y":4476}' className="text-white font-bold">Anh Tuấn</h5>
<p bis_size='{"x":121,"y":4457,"w":159,"h":16,"abs_x":561,"abs_y":4500}' className="text-xs text-slate-500 font-semibold">
                    Chủ sân Cầu Lông Tuấn Minh
                  </p>
</div>
</div>
</div>

<div bis_size='{"x":368,"y":4178,"w":320,"h":316,"abs_x":808,"abs_y":4221}' className="glass-panel p-8 rounded-3xl hover:border-[#D4FD52]/50 transition-colors cursor-default transform md:-translate-y-4">
<div bis_size='{"x":401,"y":4211,"w":254,"h":16,"abs_x":841,"abs_y":4254}' className="flex items-center gap-1 mb-6 text-[#D4FD52]">
<svg bis_size='{"x":401,"y":4211,"w":16,"h":16,"abs_x":841,"abs_y":4254}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":421,"y":4211,"w":16,"h":16,"abs_x":861,"abs_y":4254}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":441,"y":4211,"w":16,"h":16,"abs_x":881,"abs_y":4254}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":461,"y":4211,"w":16,"h":16,"abs_x":901,"abs_y":4254}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":481,"y":4211,"w":16,"h":16,"abs_x":921,"abs_y":4254}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":401,"y":4251,"w":254,"h":104,"abs_x":841,"abs_y":4294}' className="text-slate-300 mb-8 leading-relaxed">
                "Giao diện rất dễ dùng, kể cả người không rành công nghệ như tôi
                cũng thao tác được. Thích nhất tính năng báo cáo doanh thu theo
                ngày."
              </p>
<div bis_size='{"x":401,"y":4387,"w":254,"h":48,"abs_x":841,"abs_y":4430}' className="flex items-center gap-4">
<img alt="User" bis_size='{"x":401,"y":4387,"w":48,"h":48,"abs_x":841,"abs_y":4430}' className="w-12 h-12 rounded-full border-2 border-[#D4FD52]" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":465,"y":4391,"w":165,"h":40,"abs_x":905,"abs_y":4434}'>
<h5 bis_size='{"x":465,"y":4391,"w":165,"h":24,"abs_x":905,"abs_y":4434}' className="text-white font-bold">Chú Hùng</h5>
<p bis_size='{"x":465,"y":4415,"w":165,"h":16,"abs_x":905,"abs_y":4458}' className="text-xs text-slate-500 font-semibold">
                    Quản lý cụm sân Tennis Green
                  </p>
</div>
</div>
</div>

<div bis_size='{"x":712,"y":4194,"w":320,"h":316,"abs_x":1152,"abs_y":4237}' className="glass-panel p-8 rounded-3xl hover:border-[#D4FD52]/50 transition-colors cursor-default">
<div bis_size='{"x":745,"y":4227,"w":254,"h":16,"abs_x":1185,"abs_y":4270}' className="flex items-center gap-1 mb-6 text-[#D4FD52]">
<svg bis_size='{"x":745,"y":4227,"w":16,"h":16,"abs_x":1185,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":765,"y":4227,"w":16,"h":16,"abs_x":1205,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":785,"y":4227,"w":16,"h":16,"abs_x":1225,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":805,"y":4227,"w":16,"h":16,"abs_x":1245,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg bis_size='{"x":825,"y":4227,"w":16,"h":16,"abs_x":1265,"abs_y":4270}' className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p bis_size='{"x":745,"y":4267,"w":254,"h":104,"abs_x":1185,"abs_y":4310}' className="text-slate-300 mb-8 leading-relaxed">
                "Phần mềm giúp tôi giảm 30% tình trạng hủy sân phút chót nhờ
                tính năng đặt cọc online. Đội ngũ hỗ trợ rất nhiệt tình."
              </p>
<div bis_size='{"x":745,"y":4403,"w":254,"h":48,"abs_x":1185,"abs_y":4446}' className="flex items-center gap-4">
<img alt="User" bis_size='{"x":745,"y":4403,"w":48,"h":48,"abs_x":1185,"abs_y":4446}' className="w-12 h-12 rounded-full border-2 border-[#D4FD52]" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":809,"y":4407,"w":131,"h":40,"abs_x":1249,"abs_y":4450}'>
<h5 bis_size='{"x":809,"y":4407,"w":131,"h":24,"abs_x":1249,"abs_y":4450}' className="text-white font-bold">Chị Lan</h5>
<p bis_size='{"x":809,"y":4431,"w":131,"h":16,"abs_x":1249,"abs_y":4474}' className="text-xs text-slate-500 font-semibold">
                    Sân bóng đá Mini HAGL
                  </p>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":4606,"w":1056,"h":534,"abs_x":440,"abs_y":4649}' className="py-24 px-6 bg-slate-900/50" id="faq">
<div bis_size='{"x":144,"y":4702,"w":768,"h":342,"abs_x":584,"abs_y":4745}' className="max-w-3xl mx-auto">
<h2 bis_size='{"x":144,"y":4702,"w":768,"h":40,"abs_x":584,"abs_y":4745}' className="text-4xl font-bold text-white text-center mb-12">
            Câu hỏi thường gặp
          </h2>
<div bis_size='{"x":144,"y":4790,"w":768,"h":254,"abs_x":584,"abs_y":4833}' className="space-y-4">

<details bis_size='{"x":144,"y":4790,"w":768,"h":74,"abs_x":584,"abs_y":4833}' className="group bg-[#1E293B] rounded-2xl border border-slate-700 open:border-[#D4FD52] transition-colors">
<summary bis_size='{"x":145,"y":4791,"w":766,"h":72,"abs_x":585,"abs_y":4834}' className="flex justify-between items-center font-bold text-white cursor-pointer list-none p-6">
<span bis_size='{"x":169,"y":4815,"w":218,"h":24,"abs_x":609,"abs_y":4858}'>Phần mềm có tính phí không?</span>
<span bis_size='{"x":863,"y":4815,"w":24,"h":24,"abs_x":1303,"abs_y":4858}' className="transition group-open:rotate-180">
<svg bis_size='{"x":863,"y":4815,"w":24,"h":24,"abs_x":1303,"abs_y":4858}' className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div bis_size='{"x":145,"y":4863,"w":0,"h":0,"abs_x":585,"abs_y":4906}' className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                Chúng tôi cung cấp gói dùng thử miễn phí 14 ngày full tính năng.
                Sau đó bạn có thể chọn gói trả phí linh hoạt theo tháng hoặc
                theo năm với chi phí chỉ từ 3.000đ/ngày.
              </div>
</details>

<details bis_size='{"x":144,"y":4880,"w":768,"h":74,"abs_x":584,"abs_y":4923}' className="group bg-[#1E293B] rounded-2xl border border-slate-700 open:border-[#D4FD52] transition-colors">
<summary bis_size='{"x":145,"y":4881,"w":766,"h":72,"abs_x":585,"abs_y":4924}' className="flex justify-between items-center font-bold text-white cursor-pointer list-none p-6">
<span bis_size='{"x":169,"y":4905,"w":216,"h":24,"abs_x":609,"abs_y":4948}'>Tôi có cần cài đặt app không?</span>
<span bis_size='{"x":863,"y":4905,"w":24,"h":24,"abs_x":1303,"abs_y":4948}' className="transition group-open:rotate-180">
<svg bis_size='{"x":863,"y":4905,"w":24,"h":24,"abs_x":1303,"abs_y":4948}' className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div bis_size='{"x":145,"y":4953,"w":0,"h":0,"abs_x":585,"abs_y":4996}' className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                Không cần cài đặt. CourtMaster là nền tảng Web-app, hoạt động
                mượt mà trên trình duyệt của cả Máy tính, iPhone và Android.
              </div>
</details>

<details bis_size='{"x":144,"y":4970,"w":768,"h":74,"abs_x":584,"abs_y":5013}' className="group bg-[#1E293B] rounded-2xl border border-slate-700 open:border-[#D4FD52] transition-colors">
<summary bis_size='{"x":145,"y":4971,"w":766,"h":72,"abs_x":585,"abs_y":5014}' className="flex justify-between items-center font-bold text-white cursor-pointer list-none p-6">
<span bis_size='{"x":169,"y":4995,"w":315,"h":24,"abs_x":609,"abs_y":5038}'>Khách đặt sân có cần tạo tài khoản không?</span>
<span bis_size='{"x":863,"y":4995,"w":24,"h":24,"abs_x":1303,"abs_y":5038}' className="transition group-open:rotate-180">
<svg bis_size='{"x":863,"y":4995,"w":24,"h":24,"abs_x":1303,"abs_y":5038}' className="lucide lucide-chevron-down text-slate-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</span>
</summary>
<div bis_size='{"x":145,"y":5043,"w":0,"h":0,"abs_x":585,"abs_y":5086}' className="text-slate-400 px-6 pb-6 pt-0 leading-relaxed text-sm">
                Không. Chúng tôi tối ưu trải nghiệm để khách hàng đặt nhanh nhất
                có thể chỉ với Số điện thoại và Tên.
              </div>
</details>
</div>
</div>
</section>

<section bis_size='{"x":0,"y":5140,"w":1056,"h":631,"abs_x":440,"abs_y":5183}' className="pt-24 pr-6 pb-24 pl-6 relative">
<div bis_size='{"x":24,"y":5236,"w":1008,"h":439,"abs_x":464,"abs_y":5279}' className="max-w-6xl mx-auto rounded-[3rem] overflow-hidden relative border border-slate-700 shadow-2xl">

<div bis_size='{"x":25,"y":5237,"w":1006,"h":437,"abs_x":465,"abs_y":5280}' className="absolute inset-0">
<img alt="Tennis court background" bis_size='{"x":25,"y":5237,"w":1006,"h":437,"abs_x":465,"abs_y":5280}' className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1554068865-24cecd4e34b8?q=80&amp;w=2670&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":25,"y":5237,"w":1006,"h":437,"abs_x":465,"abs_y":5280}' className="absolute inset-0 bg-[#0F172A]/90 mix-blend-multiply"></div>
<div bis_size='{"x":25,"y":5237,"w":1006,"h":437,"abs_x":465,"abs_y":5280}' className="absolute inset-0 bg-gradient-to-r from-[#0F172A] via-[#0F172A]/80 to-transparent"></div>
</div>
<div bis_size='{"x":25,"y":5237,"w":1006,"h":437,"abs_x":465,"abs_y":5280}' className="relative z-10 p-12 md:p-20 flex flex-col md:flex-row items-center justify-between gap-12">
<div bis_size='{"x":105,"y":5317,"w":558,"h":277,"abs_x":545,"abs_y":5360}' className="max-w-3xl">
<h2 bis_size='{"x":105,"y":5317,"w":558,"h":180,"abs_x":545,"abs_y":5360}' className="text-5xl md:text-6xl font-bold text-white mb-8 tracking-tight">
                Đừng để sân trống
                
                làm lãng phí doanh thu
              </h2>
<p bis_size='{"x":105,"y":5529,"w":558,"h":65,"abs_x":545,"abs_y":5572}' className="text-xl text-slate-300 leading-relaxed max-w-2xl">
                Tham gia cùng 500+ chủ sân thông minh đang tăng doanh thu mỗi
                ngày với CourtMaster.
              </p>
</div>
<div bis_size='{"x":711,"y":5406,"w":240,"h":100,"abs_x":1151,"abs_y":5449}' className="shrink-0">
<div className="flex flex-col items-center gap-3">
<button className="group relative bg-[#D4FD52] hover:bg-[#c6f03e] text-slate-900 px-8 py-4 rounded-full transition-all duration-300 shadow-[0_0_50px_-10px_rgba(212,253,82,0.4)] hover:shadow-[0_0_70px_-10px_rgba(212,253,82,0.6)] hover:-translate-y-1 transform text-lg font-bold tracking-tight">
        Đăng ký ngay
    </button>
<span className="text-sm font-medium text-slate-300 opacity-90">Miễn phí 14 ngày</span>
</div>
</div>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":5771,"w":1056,"h":381,"abs_x":440,"abs_y":5814}' className="bg-[#020617] border-t border-slate-800 pt-20 pb-10 px-6">
<div bis_size='{"x":24,"y":5852,"w":1008,"h":260,"abs_x":464,"abs_y":5895}' className="max-w-7xl mx-auto">
<div bis_size='{"x":24,"y":5852,"w":1008,"h":147,"abs_x":464,"abs_y":5895}' className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">

<div bis_size='{"x":24,"y":5852,"w":216,"h":147,"abs_x":464,"abs_y":5895}' className="md:col-span-1">
<div bis_size='{"x":24,"y":5852,"w":216,"h":32,"abs_x":464,"abs_y":5895}' className="flex items-center gap-2 mb-6">
<div bis_size='{"x":24,"y":5852,"w":32,"h":32,"abs_x":464,"abs_y":5895}' className="w-8 h-8 rounded-lg bg-[#D4FD52] flex items-center justify-center">
<svg bis_size='{"x":30,"y":5858,"w":20,"h":20,"abs_x":470,"abs_y":5901}' className="lucide lucide-activity text-slate-900 w-5 h-5" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
<span bis_size='{"x":64,"y":5854,"w":110,"h":28,"abs_x":504,"abs_y":5897}' className="text-white font-semibold text-lg font-heading">
                CourtMaster
              </span>
</div>
<p bis_size='{"x":24,"y":5908,"w":216,"h":91,"abs_x":464,"abs_y":5951}' className="text-slate-500 text-sm leading-relaxed">
              Giải pháp công nghệ giúp vận hành sân thể thao hiệu quả, tiết kiệm
              chi phí và tối đa hóa lợi nhuận.
            </p>
</div>

<div bis_size='{"x":288,"y":5852,"w":216,"h":147,"abs_x":728,"abs_y":5895}'>
<h4 bis_size='{"x":288,"y":5852,"w":216,"h":24,"abs_x":728,"abs_y":5895}' className="text-white font-bold mb-6">Về chúng tôi</h4>
<ul bis_size='{"x":288,"y":5900,"w":216,"h":56,"abs_x":728,"abs_y":5943}' className="space-y-4 text-sm text-slate-400">
<li bis_size='{"x":288,"y":5900,"w":216,"h":20,"abs_x":728,"abs_y":5943}'>
<a bis_size='{"x":288,"y":5901,"w":59,"h":19,"abs_x":728,"abs_y":5944}' className="hover:text-[#D4FD52] transition-colors" href="#">
                  Giới thiệu
                </a>
</li>
<li bis_size='{"x":288,"y":5936,"w":216,"h":20,"abs_x":728,"abs_y":5979}'>
<a bis_size='{"x":288,"y":5937,"w":73,"h":19,"abs_x":728,"abs_y":5980}' className="hover:text-[#D4FD52] transition-colors" href="#">
                  Tuyển dụng
                </a>
</li>
</ul>
</div>

<div bis_size='{"x":552,"y":5852,"w":216,"h":147,"abs_x":992,"abs_y":5895}'>
<h4 bis_size='{"x":552,"y":5852,"w":216,"h":24,"abs_x":992,"abs_y":5895}' className="text-white font-bold mb-6">Liên hệ</h4>
<ul bis_size='{"x":552,"y":5900,"w":216,"h":56,"abs_x":992,"abs_y":5943}' className="space-y-4 text-sm text-slate-400">
<li bis_size='{"x":552,"y":5900,"w":216,"h":20,"abs_x":992,"abs_y":5943}' className="flex items-center gap-2">
<svg bis_size='{"x":552,"y":5902,"w":16,"h":16,"abs_x":992,"abs_y":5945}' className="lucide lucide-phone w-4 h-4 text-[#D4FD52]" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
                0912 345 678
              </li>
<li bis_size='{"x":552,"y":5936,"w":216,"h":20,"abs_x":992,"abs_y":5979}' className="flex items-center gap-2">
<svg bis_size='{"x":552,"y":5938,"w":16,"h":16,"abs_x":992,"abs_y":5981}' className="lucide lucide-mail w-4 h-4 text-[#D4FD52]" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
                hello@courtmaster.vn
              </li>
</ul>
</div>

<div bis_size='{"x":816,"y":5852,"w":216,"h":147,"abs_x":1256,"abs_y":5895}'>
<h4 bis_size='{"x":816,"y":5852,"w":216,"h":24,"abs_x":1256,"abs_y":5895}' className="text-white font-bold mb-6">Kết nối</h4>
<div bis_size='{"x":816,"y":5900,"w":216,"h":40,"abs_x":1256,"abs_y":5943}' className="flex gap-4">
<a bis_size='{"x":816,"y":5900,"w":40,"h":40,"abs_x":1256,"abs_y":5943}' className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-[#1877F2] hover:text-white transition-all" href="#">
<svg bis_size='{"x":826,"y":5910,"w":20,"h":20,"abs_x":1266,"abs_y":5953}' className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a bis_size='{"x":872,"y":5900,"w":40,"h":40,"abs_x":1312,"abs_y":5943}' className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-slate-400 hover:bg-black hover:text-white transition-all" href="#">
<svg bis_size='{"x":882,"y":5910,"w":20,"h":20,"abs_x":1322,"abs_y":5953}' className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24">
<path bis_size='{"x":884,"y":5912,"w":14,"h":16,"abs_x":1324,"abs_y":5955}' d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z"></path>
</svg>
</a>
</div>
</div>
</div>
<div bis_size='{"x":24,"y":6063,"w":1008,"h":49,"abs_x":464,"abs_y":6106}' className="border-t border-slate-800/50 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-600">
<p bis_size='{"x":24,"y":6096,"w":219,"h":16,"abs_x":464,"abs_y":6139}'>© 2024 CourtMaster. All rights reserved.</p>
<div bis_size='{"x":924,"y":6096,"w":107,"h":16,"abs_x":1364,"abs_y":6139}' className="flex gap-2 mt-4 md:mt-0">
<span bis_size='{"x":924,"y":6096,"w":107,"h":16,"abs_x":1364,"abs_y":6139}'>Designed for Sports</span>
</div>
</div>
</div>
</footer>


    </>
  );
}
