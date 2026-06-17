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
const leadModal = document.getElementById('leadFormModal');
const leadFormBackdrop = document.getElementById('leadFormBackdrop');
const leadFormContent = document.getElementById('leadFormContent');
const closeLeadBtn = document.getElementById('closeLeadForm');
const leadForm = document.getElementById('leadCaptureForm');
const resultModal = document.getElementById('resultModal');
function openLead(e) {
if(e) e.preventDefault();
const btn = e.currentTarget;
const rect = btn.getBoundingClientRect();
leadModal.classList.remove('hidden');
// Popover Positioning Logic
const formWidth = 320;
const formHeight = 380;
const screenW = window.innerWidth;
const screenH = window.innerHeight;
let top, left;
if (screenW < 640) {
// Mobile: Bottom Sheet
leadFormContent.style.top = 'auto';
leadFormContent.style.bottom = '0';
leadFormContent.style.left = '0';
leadFormContent.style.width = '100%';
leadFormContent.style.borderRadius = '20px 20px 0 0';
leadFormContent.classList.remove('origin-top', 'origin-bottom');
} else {
// Desktop: Stick to button
leadFormContent.style.bottom = 'auto';
leadFormContent.style.width = '320px';
leadFormContent.style.borderRadius = '16px';
// Horizontal Center
left = rect.left + (rect.width / 2) - (formWidth / 2);
if (left < 20) left = 20;
if (left + formWidth > screenW - 20) left = screenW - formWidth - 20;
// Vertical Placement
if (rect.bottom + formHeight > screenH - 20 && rect.top > formHeight) {
// Place Above
leadFormContent.style.top = 'auto';
leadFormContent.style.bottom = (screenH - rect.top + 10) + 'px';
leadFormContent.classList.add('origin-bottom');
leadFormContent.classList.remove('origin-top');
} else {
// Place Below
leadFormContent.style.top = (rect.bottom + 10) + 'px';
leadFormContent.style.bottom = 'auto';
leadFormContent.classList.add('origin-top');
leadFormContent.classList.remove('origin-bottom');
}
leadFormContent.style.left = left + 'px';
}
requestAnimationFrame(() => {
leadFormContent.classList.remove('opacity-0', 'scale-95');
leadFormContent.classList.add('opacity-100', 'scale-100');
});
}
function closeLead() {
leadFormContent.classList.remove('opacity-100', 'scale-100');
leadFormContent.classList.add('opacity-0', 'scale-95');
setTimeout(() => {
leadModal.classList.add('hidden');
}, 200);
}
// Updated Selectors to include the specific class for the table buttons
const ctaSelectors = [
'nav a.shadow-lg',
'.group a[href="#compare"]',
'.open-lead-form', // Targeted class for table buttons
'section button.shadow-xl',
'#resultModal a'
];
ctaSelectors.forEach(selector => {
document.querySelectorAll(selector).forEach(el => {
el.addEventListener('click', openLead);
});
});
if(closeLeadBtn) closeLeadBtn.addEventListener('click', closeLead);
if(leadFormBackdrop) leadFormBackdrop.addEventListener('click', closeLead);
if(leadForm) {
leadForm.addEventListener('submit', (e) => {
e.preventDefault();
const btn = leadForm.querySelector('button[type="submit"]');
const originalText = btn.innerHTML;
// Add loading state
btn.innerHTML = `
<span class="flex items-center gap-2 justify-center">
<iconify-icon icon="svg-spinners:ring-resize" width="16"></iconify-icon>
Đang xử lý...
</span>
`;
btn.disabled = true;
setTimeout(() => {
btn.innerHTML = originalText;
btn.disabled = false;
closeLead();
// UPDATED LINK HERE: Redirect to fast registration page
window.location.href = 'https://www.vib.com.vn/vn/the-tin-dung/dang-ky-nhanh';
}, 1500);
});
}
document.getElementById('closeModal')?.addEventListener('click', () => resultModal.classList.add('hidden'));
document.getElementById('modalBackdrop')?.addEventListener('click', () => resultModal.classList.add('hidden'));
document.getElementById('secondaryClose')?.addEventListener('click', () => resultModal.classList.add('hidden'));
});



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



      const modal = document.getElementById('resultModal');
      const modalContent = document.getElementById('modalContent');
      const submitBtn = document.getElementById('submitQuizBtn');
      const lifestyleCards = document.querySelectorAll('.lifestyle-card');
      const closeBtns = [document.getElementById('closeModal'), document.getElementById('secondaryClose'), document.getElementById('modalBackdrop')];

      // Function to open Modal
      const openModal = (e) => {
          if(e) e.preventDefault();
          modal.classList.remove('hidden');
          // Small delay to allow display block to render before opacity transition
          setTimeout(() => {
              modalContent.classList.add('modal-enter-active');
          }, 10);
      };

      // Function to close Modal
      const closeModal = () => {
          modalContent.classList.remove('modal-enter-active');
          setTimeout(() => {
              modal.classList.add('hidden');
          }, 300); // Wait for transition
      };

      // Attach listeners
      submitBtn.addEventListener('click', openModal);

      lifestyleCards.forEach(card => {
          card.addEventListener('click', openModal);
      });

      closeBtns.forEach(el => el?.addEventListener('click', closeModal));
    
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
      

<nav className="fixed top-0 w-full z-50 bg-white/90 backdrop-blur-md border-b border-slate-200 shadow-sm">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2" href="#"></a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-600">
<a className="hover:text-[#004A98] transition-colors" href="#lifestyle">
            Chọn theo phong cách
          </a>
<a className="hover:text-[#004A98] transition-colors" href="#compare">
            So sánh thẻ
          </a>
<a className="hover:text-[#004A98] transition-colors" href="#quiz">
            Trắc nghiệm
          </a>
</div>
<div className="flex items-center gap-4">
<a className="text-sm bg-[#F68D2E] text-white px-5 py-2.5 rounded-full font-semibold hover:bg-orange-600 transition shadow-lg shadow-orange-200" href="#compare">
            Mở thẻ ngay
          </a>
</div>
</div>
</nav>

<main className="pt-32 pb-16 overflow-hidden bg-white">
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">

<div className="max-w-xl relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-[11px] font-semibold text-[#004A98] mb-6 uppercase tracking-wider">
<span className="w-1.5 h-1.5 rounded-full bg-[#F68D2E] animate-pulse"></span>
            Ưu đãi mở thẻ mới 2026
          </div>
<h1 className="text-5xl sm:text-6xl text-slate-900 tracking-tight leading-[1.1] mb-6 font-semibold">
            Tìm chiếc thẻ tín dụng
            <br/>
<span className="vib-text-gradient">dành riêng cho bạn.</span>
</h1>
<p className="text-lg text-slate-500 font-normal leading-relaxed mb-8 max-w-md">
            So sánh hạn mức, hoàn tiền và đặc quyền chỉ trong 30 giây. Trải
            nghiệm phong cách sống đẳng cấp ngay hôm nay.
          </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-[#004A98] hover:bg-[#003875] text-white font-semibold text-base py-3.5 px-8 rounded-full transition-all shadow-xl shadow-blue-900/10 flex items-center justify-center gap-2" href="#compare">
              So sánh ngay
              <iconify-icon icon="solar:arrow-right-linear" width="18"></iconify-icon>
</a>
<a className="bg-white hover:bg-slate-50 text-slate-700 border border-slate-200 font-medium text-base py-3.5 px-8 rounded-full transition-all flex items-center justify-center gap-2" href="#quiz">
<iconify-icon className="text-[#F68D2E]" icon="solar:magic-stick-3-linear" width="18"></iconify-icon>
              Gợi ý cho tôi
            </a>
</div>
<div className="mt-8 flex items-center gap-6 text-sm text-slate-500 font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
              Duyệt nhanh 30 phút
            </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon>
              Hoàn phí thường niên
            </div>
</div>
</div>

<div className="relative lg:h-[500px] flex items-center justify-center">

<div className="absolute w-[400px] h-[400px] bg-teal-100/50 rounded-full blur-3xl -top-10 -right-10 mix-blend-multiply"></div>
<div className="absolute w-[300px] h-[300px] bg-orange-100/50 rounded-full blur-3xl bottom-0 left-10 mix-blend-multiply"></div>

<div className="relative w-full max-w-md mx-auto perspective-1000">

<div className="absolute top-0 right-0 w-[340px] h-[215px] bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl shadow-2xl transform rotate-6 translate-x-12 opacity-80 border border-white/20"></div>

<div className="relative w-[340px] h-[215px] bg-gradient-to-br from-[#1e293b] via-[#334155] to-[#0f172a] rounded-2xl shadow-[0_20px_60px_-15px_rgba(30,41,59,0.5)] p-6 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out border-t border-white/10 overflow-hidden">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(255,255,255,0.1),transparent_50%)]"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(135deg, #ffffff 1px, transparent 1px), linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between">

<div className="flex justify-between items-start">
<div>
<div className="text-lg font-bold tracking-wide text-slate-100 drop-shadow-md font-sans">
                      Travel Élite
                    </div>
<div className="text-[9px] uppercase tracking-[0.25em] text-slate-400 mt-1 font-semibold">
                      World
                    </div>
</div>
<div className="font-bold text-2xl italic tracking-tighter drop-shadow-md text-white">
                    VIB
                  </div>
</div>

<div className="flex items-center gap-4 pl-1">

<div className="w-11 h-9 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-md border border-yellow-300/50 shadow-sm flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 border-[0.5px] border-black/20 rounded-md"></div>

<div className="absolute w-full h-[1px] bg-black/20 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-full w-[1px] bg-black/20 left-1/2 -translate-x-1/2"></div>
<div className="absolute w-5 h-3 border border-black/20 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<iconify-icon className="rotate-90 opacity-70 text-slate-300" icon="solar:wifi-router-minimal-linear" width="24"></iconify-icon>
</div>

<div className="flex justify-between items-end">
<div className="font-mono text-base tracking-[0.15em] text-slate-300 drop-shadow-md">
                    5138 •••• •••• 9988
                  </div>

<div className="flex -space-x-3 relative">
<div className="w-10 h-10 rounded-full bg-[#EB001B] shadow-sm z-10"></div>
<div className="w-10 h-10 rounded-full bg-[#F79E1B] opacity-90 shadow-sm z-0"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<div className="max-w-7xl mx-auto px-6 relative z-20 -mt-6 mb-16">
<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/60 border border-slate-100 p-1">
<div className="bg-gradient-to-r from-slate-50 via-white to-blue-50/30 rounded-xl p-6 md:p-8 relative overflow-hidden flex flex-col md:flex-row items-center gap-8 group">

<div className="absolute top-0 right-0 w-64 h-64 bg-orange-100/40 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2"></div>

<div className="flex-shrink-0 w-20 h-20 bg-gradient-to-br from-slate-800 to-slate-900 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-slate-900/10 relative transform group-hover:scale-105 transition-transform duration-500">
<iconify-icon icon="solar:speaker-minimalistic-linear" width="40"></iconify-icon>
<div className="absolute -top-3 -right-3 w-8 h-8 bg-[#F68D2E] rounded-full flex items-center justify-center shadow-md border-2 border-white">
<iconify-icon icon="solar:gift-linear" width="16"></iconify-icon>
</div>
</div>

<div className="flex-grow text-center md:text-left z-10">
<div className="flex flex-col md:flex-row md:items-center gap-2 mb-1 justify-center md:justify-start">
<h3 className="text-lg font-semibold text-slate-900 tracking-tight">
                Quà tặng đặc biệt
              </h3>
<span className="inline-flex items-center px-2 py-0.5 rounded text-[10px] font-bold bg-[#F68D2E]/10 text-[#F68D2E] uppercase tracking-wide">
                Limited Offer
              </span>
</div>
<p className="text-slate-500 text-sm leading-relaxed">
              Nhận ngay
              <span className="text-[#004A98] font-semibold">
                01 Loa Bluetooth Anker SoundCore Nano 3W A3104
              </span>
              sành điệu khi đăng ký mở thẻ tín dụng thành công.
            </p>
</div>

<div className="flex-shrink-0 z-10 flex flex-col items-center gap-2">
<a className="inline-flex items-center gap-2 px-6 py-3 bg-white border border-slate-200 hover:border-[#F68D2E]/50 hover:text-[#F68D2E] rounded-lg text-slate-700 text-sm font-semibold transition-all shadow-sm" href="#compare">
              Đăng ký nhận quà
              <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
<span className="text-[10px] text-slate-400 font-medium">
              Số lượng có hạn
            </span>
</div>
</div>
</div>
</div>

<section className="py-20 bg-slate-50" id="lifestyle">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl text-slate-900 tracking-tight mb-4 font-semibold">
            Phong cách chi tiêu của bạn?
          </h2>
<p className="text-slate-500 max-w-xl mx-auto">
            Chọn nhóm phù hợp nhất để xem thẻ được đề xuất cho bạn.
          </p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="lifestyle-card group bg-white p-8 rounded-[32px] border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start h-full">
<div className="w-14 h-14 rounded-full bg-slate-100 text-slate-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:plane-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg text-slate-900 mb-2 font-semibold">
              Travel Lover
            </h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-2">
              Đam mê du lịch, tích dặm bay và phòng chờ đẳng cấp.
            </p>
<div className="mt-auto text-[11px] font-bold text-[#F68D2E] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
              Xem thẻ
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="lifestyle-card group bg-white p-8 rounded-[32px] border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start h-full">
<div className="w-14 h-14 rounded-full bg-orange-50 text-orange-400 flex items-center justify-center mb-6">
<iconify-icon icon="solar:wallet-money-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg text-slate-900 mb-2 font-semibold">Cashback</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-2">
              Thích được hoàn tiền cho mọi chi tiêu hàng ngày.
            </p>
<div className="mt-auto text-[11px] font-bold text-[#F68D2E] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
              Xem thẻ
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="lifestyle-card group bg-white p-8 rounded-[32px] border border-orange-200 shadow-[0_8px_30px_rgb(0,0,0,0.04)] ring-1 ring-orange-100 cursor-pointer flex flex-col items-start h-full transform lg:-translate-y-2 lg:scale-105 hover:shadow-xl transition-all duration-300 relative z-10">
<div className="w-14 h-14 rounded-full bg-purple-600 text-white flex items-center justify-center mb-6 shadow-lg shadow-purple-200">
<iconify-icon icon="solar:cart-large-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg text-slate-900 mb-2 font-semibold">Shopping</h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-2">
              Nghiện mua sắm online trên Shopee, Lazada, Tiki.
            </p>
<div className="mt-auto text-[11px] font-bold text-[#F68D2E] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
              Xem thẻ
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>

<div className="lifestyle-card group bg-white p-8 rounded-[32px] border border-slate-200 hover:border-orange-200 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 cursor-pointer flex flex-col items-start h-full opacity-0 animate-[fadeIn_0.5s_ease-out_forwards]">
<div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">
              Gen Z First
            </h3>
<p className="text-sm text-slate-500 mb-8 leading-relaxed line-clamp-2">
              Thẻ đầu tiên cho giới trẻ, không cần chứng minh thu nhập.
            </p>
<div className="mt-auto text-[11px] font-bold text-[#F68D2E] uppercase tracking-wider flex items-center gap-1 group-hover:gap-2 transition-all">
              Xem thẻ
              <iconify-icon icon="solar:arrow-right-linear" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="quiz">
<div className="absolute inset-0 bg-gradient-to-b from-white to-orange-50/30"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl shadow-xl border border-slate-100 p-8 md:p-12">
<div className="flex flex-col md:flex-row gap-12">

<div className="md:w-1/3">
<div className="inline-block p-3 bg-orange-100 rounded-xl mb-6 text-[#F68D2E]">
<iconify-icon icon="solar:question-circle-linear" width="32"></iconify-icon>
</div>
<h2 className="text-2xl text-slate-900 mb-4 font-semibold">
                Bạn chưa chắc chắn?
              </h2>
<p className="text-slate-500 text-sm leading-relaxed mb-6">
                Trả lời 3 câu hỏi nhanh để AI của chúng tôi gợi ý chiếc thẻ hoàn
                hảo nhất cho nhu cầu tài chính của bạn.
              </p>
<div className="flex items-center gap-2 text-xs font-semibold text-[#004A98]">
<span>Chỉ mất 1 phút</span>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>
<span>Không cần đăng nhập</span>
</div>
</div>

<div className="md:w-2/3 border-l border-slate-100 md:pl-12 pt-8 md:pt-0">
<form className="space-y-8" id="cardQuiz">

<div className="quiz-step">
<label className="block text-sm font-semibold text-slate-900 mb-4">
                    1. Thu nhập hàng tháng của bạn?
                  </label>
<div className="grid grid-cols-3 gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio sr-only" name="income" type="radio"/>
<div className="text-center p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 relative overflow-hidden">
<div className="check-icon absolute top-1 right-1 text-[#F68D2E] opacity-0 transition-all scale-50">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
                        &lt; 15 Triệu
                      </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="income" type="radio"/>
<div className="text-center p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 relative overflow-hidden">
<div className="check-icon absolute top-1 right-1 text-[#F68D2E] opacity-0 transition-all scale-50">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
                        15-30 Triệu
                      </div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="income" type="radio"/>
<div className="text-center p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 relative overflow-hidden">
<div className="check-icon absolute top-1 right-1 text-[#F68D2E] opacity-0 transition-all scale-50">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
                        &gt; 30 Triệu
                      </div>
</label>
</div>
</div>

<div className="quiz-step">
<label className="block text-sm font-semibold text-slate-900 mb-4">
                    2. Bạn chi tiêu nhiều nhất vào đâu?
                  </label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer">
<input checked="" className="custom-radio sr-only" name="spending" type="radio"/>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 relative">
<iconify-icon className="text-slate-400" icon="solar:bag-3-linear"></iconify-icon>
                        Mua sắm &amp; Ăn uống
                        <div className="check-icon absolute top-1 right-1 text-[#F68D2E] opacity-0 transition-all scale-50">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
<label className="cursor-pointer">
<input className="custom-radio sr-only" name="spending" type="radio"/>
<div className="flex items-center gap-3 p-3 rounded-xl border border-slate-200 text-sm font-medium text-slate-600 transition-all hover:bg-slate-50 relative">
<iconify-icon className="text-slate-400" icon="solar:plane-linear"></iconify-icon>
                        Du lịch &amp; Đi lại
                        <div className="check-icon absolute top-1 right-1 text-[#F68D2E] opacity-0 transition-all scale-50">
<iconify-icon icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
</div>
<button className="w-full bg-[#004A98] hover:bg-[#003875] text-white font-semibold py-4 rounded-xl shadow-lg shadow-blue-900/10 transition-all flex items-center justify-center gap-2 group mt-2" id="submitQuizBtn" type="button">
                  Xem kết quả gợi ý
                  <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50" id="compare">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center">
<h2 className="text-3xl text-slate-900 tracking-tight mb-4 font-semibold">
            Bảng so sánh thẻ nổi bật
          </h2>
<p className="text-slate-500">
            Thông tin minh bạch giúp bạn ra quyết định chính xác.
          </p>
</div>

<div className="overflow-x-auto rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 bg-white">
<table className="w-full text-left border-collapse">
<thead>
<tr className="bg-slate-50/50 text-xs font-semibold text-slate-500 uppercase tracking-wider border-b border-slate-100">
<th className="p-6 min-w-[200px]">Tên Thẻ</th>
<th className="p-6 min-w-[140px]">Phí Thường Niên</th>
<th className="p-6 min-w-[160px]">Hoàn tiền / Dặm</th>
<th className="p-6 min-w-[200px]">Lợi ích chính</th>
<th className="p-6 min-w-[140px]">Phù hợp nhất</th>
<th className="p-6 min-w-[140px]"></th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-sm">

<tr className="group hover:bg-orange-50/30 transition-colors relative">
<td className="p-6">
<div className="flex items-center gap-4">

<div className="w-12 h-8 rounded bg-[linear-gradient(90deg,#2ecbc1_50%,#005f59_50%)] shadow-md relative overflow-hidden flex-shrink-0 border border-black/5">
<div className="absolute inset-0 bg-white/10"></div>

<div className="absolute left-[2px] top-1 text-[3px] text-white font-bold">
                        2in1
                      </div>
</div>
<div>
<div className="font-semibold text-slate-900">
                        Online Plus 2in1
                      </div>
<div className="text-[10px] text-[#F68D2E] font-bold bg-orange-100 px-1.5 py-0.5 rounded inline-block mt-1">
                        PHỔ BIẾN NHẤT
                      </div>
</div>
</div>
</td>
<td className="p-6 font-medium text-slate-600">599.000 VNĐ</td>
<td className="p-6">
<div className="font-semibold text-slate-900">Đến 6%</div>
<div className="text-slate-500 text-xs">Chi tiêu Online</div>
</td>
<td className="p-6 text-slate-600 leading-snug">
<ul className="list-disc list-inside marker:text-[#F68D2E]">
<li>Tặng 300K khi kích hoạt</li>
<li>Bảo hiểm giao dịch</li>
</ul>
</td>
<td className="p-6">
<div className="flex items-center gap-1.5 text-slate-600">
<iconify-icon icon="solar:cart-large-linear"></iconify-icon>
                    Mua sắm
                  </div>
</td>
<td className="p-6 text-right">
<button className="open-lead-form bg-[#F68D2E] hover:bg-orange-600 hover:scale-105 active:scale-95 text-white font-semibold text-sm py-2.5 px-6 rounded-full shadow-lg shadow-orange-200 transition-all duration-200">
                    Đăng ký
                  </button>
<button className="block mt-2 ml-auto text-xs font-medium text-slate-500 hover:text-[#004A98] hover:underline decoration-slate-300 underline-offset-2 transition-all" type="button">
                    Xem chi tiết
                  </button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="p-6">
<div className="flex items-center gap-4">

<div className="w-14 h-[36px] rounded-lg bg-[#252850] shadow-md border border-indigo-900/50 relative overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/5 to-transparent opacity-30"></div>

<div className="absolute top-[4px] left-[4px] text-[4px] font-semibold text-white tracking-wide leading-none">
                        Cash Back
                      </div>

<div className="absolute top-[3px] right-[4px] text-[6px] font-bold text-white/90 leading-none tracking-tighter italic">
                        VIB
                      </div>

<div className="absolute top-[14px] left-[4px] w-[9px] h-[7px] rounded-[1px] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400 border-[0.5px] border-slate-400"></div>

<div className="absolute top-[16px] left-[16px] text-[3.5px] text-white/90 tracking-wide font-normal">
                        platinum
                      </div>

<iconify-icon className="absolute top-[15px] right-[4px] text-white/90 rotate-90" icon="solar:wifi-router-minimal-linear" width="6"></iconify-icon>

<div className="absolute bottom-[3px] right-[4px] flex -space-x-[3px]">
<div className="w-[9px] h-[9px] rounded-full bg-[#EB001B]"></div>
<div className="w-[9px] h-[9px] rounded-full bg-[#F79E1B] opacity-90"></div>
</div>
</div>
<div className="font-semibold text-slate-900">Cash Back</div>
</div>
</td>
<td className="p-6 font-medium text-slate-600">899.000 VNĐ</td>
<td className="p-6">
<div className="font-semibold text-slate-900">Đến 10%</div>
<div className="text-slate-500 text-xs">Nhóm danh mục</div>
</td>
<td className="p-6 text-slate-600 leading-snug">
<ul className="list-disc list-inside marker:text-slate-300">
<li>Hoàn tiền không giới hạn</li>
<li>Miễn lãi 55 ngày</li>
</ul>
</td>
<td className="p-6">
<div className="flex items-center gap-1.5 text-slate-600">
<iconify-icon icon="solar:wallet-money-linear"></iconify-icon>
                    Gia đình
                  </div>
</td>
<td className="p-6 text-right">
<button className="open-lead-form bg-white border border-slate-200 hover:bg-slate-50 hover:scale-105 active:scale-95 text-slate-900 font-semibold text-sm py-2.5 px-6 rounded-full transition-all duration-200">
                    Đăng ký
                  </button>
<button className="block mt-2 ml-auto text-xs font-medium text-slate-500 hover:text-[#004A98] hover:underline decoration-slate-300 underline-offset-2 transition-all" type="button">
                    Xem chi tiết
                  </button>
</td>
</tr>

<tr className="group hover:bg-slate-50 transition-colors">
<td className="p-6">
<div className="flex items-center gap-4">

<div className="w-14 h-[36px] rounded-lg bg-[#111] shadow-md border border-gray-700 relative overflow-hidden flex-shrink-0 group-hover:scale-105 transition-transform duration-300">

<div className="absolute inset-0 bg-gradient-to-b from-white/5 to-transparent opacity-50"></div>

<div className="absolute top-[3px] right-[4px] text-[5px] font-bold text-gray-300 tracking-wide">
                        VIB
                      </div>

<div className="absolute top-[3px] left-[4px] text-[3.5px] font-sans font-medium text-white/90 tracking-wide">
                        Travel Élite
                      </div>

<div className="absolute top-[14px] left-[4px] w-[9px] h-[7px] rounded-[1px] bg-gradient-to-br from-slate-200 via-slate-300 to-slate-400">
<div className="w-full h-full border-[0.5px] border-slate-400/50 rounded-[1px]"></div>
</div>

<div className="absolute top-[15px] left-[16px] text-[3px] text-white/80 font-medium">
                        world
                      </div>

<iconify-icon className="absolute top-[15px] right-[4px] text-white/90 rotate-90" icon="solar:wifi-router-minimal-linear" width="6"></iconify-icon>

<div className="absolute bottom-[3px] right-[4px] flex -space-x-[3px]">
<div className="w-[9px] h-[9px] rounded-full bg-[#EB001B]"></div>
<div className="w-[9px] h-[9px] rounded-full bg-[#F79E1B] opacity-90"></div>
</div>
</div>
<div className="font-semibold text-slate-900">Travel Élite</div>
</div>
</td>
<td className="p-6 font-medium text-slate-600">1.299.000 VNĐ</td>
<td className="p-6">
<div className="font-semibold text-slate-900">Dặm thưởng</div>
<div className="text-slate-500 text-xs">Cho mọi chi tiêu</div>
</td>
<td className="p-6 text-slate-600 leading-snug">
<ul className="list-disc list-inside marker:text-slate-300">
<li>Phí ngoại tệ thấp nhất 1%</li>
<li>Sử dụng phòng chờ</li>
</ul>
</td>
<td className="p-6">
<div className="flex items-center gap-1.5 text-slate-600">
<iconify-icon icon="solar:plane-linear"></iconify-icon>
                    Du lịch
                  </div>
</td>
<td className="p-6 text-right">
<button className="open-lead-form bg-white border border-slate-200 hover:bg-slate-50 hover:scale-105 active:scale-95 text-slate-900 font-semibold text-sm py-2.5 px-6 rounded-full transition-all duration-200">
                    Đăng ký
                  </button>
<button className="block mt-2 ml-auto text-xs font-medium text-slate-500 hover:text-[#004A98] hover:underline decoration-slate-300 underline-offset-2 transition-all" type="button">
                    Xem chi tiết
                  </button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-slate-100">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-8">
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-blue-50 text-[#004A98] rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:stopwatch-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Duyệt hồ sơ nhanh</h4>
<p className="text-xs text-slate-500">
              Quy trình số hóa 100%, biết kết quả trong 30 phút.
            </p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-blue-50 text-[#004A98] rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Bảo mật tuyệt đối</h4>
<p className="text-xs text-slate-500">
              Công nghệ 3D Secure và quản lý thẻ ngay trên ứng dụng.
            </p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-blue-50 text-[#004A98] rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:percent-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Trả góp 0%</h4>
<p className="text-xs text-slate-500">
              Liên kết với hàng ngàn đối tác điện máy, giáo dục.
            </p>
</div>
<div className="flex flex-col items-center text-center p-4">
<div className="w-12 h-12 bg-blue-50 text-[#004A98] rounded-full flex items-center justify-center mb-4">
<iconify-icon icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h4 className="font-bold text-slate-900 mb-2">Chấp nhận quốc tế</h4>
<p className="text-xs text-slate-500">
              Thanh toán dễ dàng tại hàng triệu điểm trên toàn cầu.
            </p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#004A98] relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-white/5 rounded-full blur-3xl translate-x-1/2 -translate-y-1/2"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-[#F68D2E]/20 rounded-full blur-3xl -translate-x-1/2 translate-y-1/2"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-4xl text-white tracking-tight mb-6 font-semibold">
          Sẵn sàng tận hưởng ưu đãi?
        </h2>
<p className="text-blue-100 text-lg mb-10">
          Đăng ký ngay hôm nay để nhận quà tặng chào mừng và miễn phí thường
          niên năm đầu.
        </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<button className="bg-[#F68D2E] hover:bg-orange-500 text-white font-semibold py-4 px-10 rounded-full shadow-xl shadow-orange-900/20 transition-all text-sm md:text-base">
            Đăng ký ngay - Chỉ 3 phút
          </button>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 py-12 text-slate-500 text-sm">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-center items-center gap-6">
<div className="flex gap-6 text-xs">
<a className="hover:text-[#004A98]" href="#">Điều khoản</a>
<a className="hover:text-[#004A98]" href="#">Bảo mật</a>
<a className="hover:text-[#004A98]" href="#">Biểu phí</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[100] hidden" id="resultModal">

<div className="absolute inset-0 bg-slate-900/60 backdrop-blur-sm transition-opacity" id="modalBackdrop"></div>

<div className="absolute inset-0 flex items-center justify-center p-4">
<div className="bg-white w-full max-w-md rounded-3xl p-8 relative shadow-2xl modal-enter" id="modalContent">

<button className="absolute top-4 right-4 w-8 h-8 rounded-full bg-slate-100 flex items-center justify-center text-slate-400 hover:bg-slate-200 hover:text-slate-600 transition-colors" id="closeModal">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="text-center mb-6">
<div className="text-xs font-bold text-[#F68D2E] uppercase tracking-wider mb-2">
              Kết quả phân tích AI
            </div>
<h3 className="text-2xl font-bold text-slate-900">
              Chiếc thẻ hoàn hảo cho bạn
            </h3>
</div>

<div className="relative w-[280px] h-[178px] mx-auto mb-8 perspective-1000 group">
<div className="w-full h-full bg-[linear-gradient(90deg,#2ecbc1_50%,#005f59_50%)] rounded-xl shadow-2xl p-5 text-white transform hover:scale-105 transition-transform duration-500 relative overflow-hidden flex flex-col justify-between">
<div className="absolute inset-0 card-shine"></div>

<div className="flex justify-between items-start relative z-10">
<div className="text-[10px] font-bold tracking-wider uppercase">
                  Online Plus 2
                  <sup className="text-[8px]">in</sup>
                  1
                </div>
<div className="font-bold text-sm italic tracking-tighter">VIB</div>
</div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none">
<div className="w-full flex justify-between px-4">
<div className="text-[10px] font-bold opacity-80">credit</div>
<div className="text-[10px] font-bold opacity-80">debit</div>
</div>
</div>
<div className="relative z-10 flex justify-between items-end">
<div className="font-mono text-xs tracking-widest text-white/90">
                  4234 •••• •••• 8888
                </div>
<div className="flex -space-x-1.5">
<div className="w-6 h-6 rounded-full bg-[#EB001B]"></div>
<div className="w-6 h-6 rounded-full bg-[#F79E1B] opacity-90"></div>
</div>
</div>
</div>

<div className="relative w-[340px] h-[215px] bg-[linear-gradient(90deg,#2ecbc1_50%,#005f59_50%)] rounded-2xl shadow-[0_20px_60px_-15px_rgba(0,95,89,0.4)] p-6 text-white transform -rotate-3 hover:rotate-0 transition-transform duration-700 ease-out border-t border-white/10 overflow-hidden">
<div className="absolute inset-0 card-shine opacity-30"></div>
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(135deg, #ffffff 1px, transparent 1px), linear-gradient(45deg, #ffffff 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 h-full flex flex-col justify-between">
<div className="flex justify-between items-start">
<div>
<div className="text-xl font-semibold tracking-wide text-white drop-shadow-md font-sans">
                      Online Plus 2
                      <sup className="text-xs">in</sup>
                      1
                    </div>
</div>
<div className="font-semibold text-2xl italic tracking-tighter drop-shadow-md text-white">
                    VIB
                  </div>
</div>
<div className="flex items-center gap-4 pl-1">
<div className="w-11 h-9 bg-gradient-to-br from-yellow-200 via-yellow-400 to-yellow-600 rounded-md border border-yellow-300/50 shadow-sm flex items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 border-[0.5px] border-black/20 rounded-md"></div>
<div className="absolute w-full h-[1px] bg-black/20 top-1/2 -translate-y-1/2"></div>
<div className="absolute h-full w-[1px] bg-black/20 left-1/2 -translate-x-1/2"></div>
<div className="absolute w-5 h-3 border border-black/20 rounded-sm top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2"></div>
</div>
<iconify-icon className="rotate-90 opacity-80 text-white" icon="solar:wifi-router-minimal-linear" width="24"></iconify-icon>
</div>
<div className="absolute inset-0 flex items-center justify-between px-8 pointer-events-none mt-8">
<div className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                    Credit
                  </div>
<div className="text-[10px] font-semibold uppercase tracking-widest opacity-80">
                    Debit
                  </div>
</div>
<div className="flex justify-between items-end">
<div className="font-mono text-lg tracking-[0.15em] text-white/90 drop-shadow-md">
                    5138 •••• •••• 9988
                  </div>
<div className="flex -space-x-3 relative">
<div className="w-10 h-10 rounded-full bg-[#EB001B] shadow-sm z-10"></div>
<div className="w-10 h-10 rounded-full bg-[#F79E1B] opacity-90 shadow-sm z-0"></div>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-4 mb-8">
<div className="flex items-center justify-between p-3 rounded-xl bg-blue-50 border border-blue-100">
<span className="text-sm font-medium text-slate-600">
                Hoàn tiền Online
              </span>
<span className="text-sm font-bold text-[#004A98]">Lên đến 6%</span>
</div>
<div className="flex items-center justify-between p-3 rounded-xl bg-orange-50 border border-orange-100">
<span className="text-sm font-medium text-slate-600">
                Phí thường niên
              </span>
<span className="text-sm font-bold text-[#F68D2E]">
                Miễn phí trọn đời*
              </span>
</div>
</div>

<a className="block w-full bg-[#004A98] hover:bg-[#003875] text-white font-semibold py-3.5 rounded-xl shadow-lg shadow-blue-900/10 text-center transition-all" href="#compare">
            Đăng ký mở thẻ này
          </a>
<div className="mt-4 text-center">
<button className="text-xs text-slate-400 hover:text-slate-600 font-medium" id="secondaryClose">
              Làm lại trắc nghiệm
            </button>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[110] hidden" id="leadFormModal">
<div className="absolute inset-0 bg-transparent" id="leadFormBackdrop"></div>
<div className="absolute w-[320px] bg-white rounded-2xl p-5 shadow-2xl ring-1 ring-slate-900/5 opacity-0 scale-95 transition-all duration-200 origin-top" id="leadFormContent">
<button className="absolute top-3 right-3 w-8 h-8 rounded-full bg-slate-50 flex items-center justify-center text-slate-400 hover:bg-slate-100 hover:text-slate-600 transition-colors" id="closeLeadForm">
<iconify-icon icon="solar:close-circle-linear" width="20"></iconify-icon>
</button>
<div className="mb-4 pr-6">
<h3 className="text-lg font-semibold text-slate-900">Đăng ký tư vấn</h3>
<p className="text-slate-500 text-xs mt-1">
            Để lại thông tin, chúng tôi sẽ liên hệ ngay.
          </p>
</div>
<form className="space-y-3" id="leadCaptureForm">
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#004A98] focus:ring-2 focus:ring-blue-50 outline-none" placeholder="Họ và tên" required="" type="text"/>
<input className="w-full px-4 py-2.5 rounded-lg border border-slate-200 text-sm focus:border-[#004A98] focus:ring-2 focus:ring-blue-50 outline-none" placeholder="Số điện thoại" required="" type="tel"/>
<div className="grid grid-cols-2 gap-3">
<select className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs bg-white outline-none focus:border-[#004A98]">
<option>Thu nhập?</option>
<option>&lt; 15 Triệu</option>
<option>15-30 Triệu</option>
<option>&gt; 30 Triệu</option>
</select>
<select className="w-full px-3 py-2.5 rounded-lg border border-slate-200 text-xs bg-white outline-none focus:border-[#004A98]">
<option>Công việc?</option>
<option>Văn phòng</option>
<option>Kinh doanh</option>
<option>Tự do</option>
</select>
</div>
<button className="w-full bg-[#004A98] hover:bg-[#003875] text-white font-semibold py-3 rounded-xl shadow-lg shadow-blue-900/10 flex items-center justify-center gap-2 text-sm transition-all" type="submit">
            Gửi yêu cầu
            <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</form>
</div>
</div>

    </>
  );
}
