import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="relative w-full h-screen flex flex-col justify-center items-center bg-[#1C1814] overflow-hidden p-6 text-[#F4F1E8]" id="hero">

<div className="absolute inset-0 z-0">
<img alt="CBC Team" className="w-full h-full object-cover object-center opacity-40" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/edited.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#1C1814]/80 via-transparent to-[#1C1814]/90"></div>
</div>

<div className="absolute top-8 left-8 z-10 flex flex-col opacity-0 animate-fade-in-up">
<span className="font-playfair text-[#C8995A] text-2xl tracking-tighter">CBC</span>
<span className="text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/70 mt-1">City By City · Property</span>
</div>

<div className="relative z-10 text-center max-w-5xl mx-auto w-full">
<div className="w-12 h-[1px] bg-[#C8995A]/50 mx-auto mb-8 opacity-0 animate-fade-in-up delay-100"></div>
<p className="text-xs md:text-sm uppercase tracking-widest text-[#F4F1E8]/80 mb-4 opacity-0 animate-fade-in-up delay-100">Hồ Sơ Năng Lực</p>
<h1 className="font-playfair text-5xl md:text-7xl lg:text-8xl text-[#C8995A] tracking-tighter mb-6 opacity-0 animate-clip-slide delay-200">
                COMPANY PROFILE <span className="font-light italic text-[#F4F1E8]">2026</span>
</h1>
<p className="font-playfair italic text-lg md:text-2xl text-[#F4F1E8]/90 mb-12 opacity-0 animate-fade-in-up delay-300">
                Kiến tạo những cộng đồng dân cư bền vững<br/>
<span className="text-sm not-italic font-inter font-light text-[#C8995A] tracking-wider mt-4 block uppercase">Where Trust Builds Communities</span>
</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center items-center opacity-0 animate-fade-in-up delay-400">
<a className="group relative px-8 py-3 rounded-full border border-[#C8995A] text-[#C8995A] text-xs uppercase tracking-widest hover-gold-beam bg-[#1C1814]/50 backdrop-blur-sm transition-transform hover:scale-105 duration-300" href="#cta">
                    Partnership
                </a>
<a className="group relative px-8 py-3 rounded-full bg-[#C8995A] text-[#1C1814] text-xs uppercase tracking-widest hover-gold-beam hover:bg-[#D4A86A] transition-all hover:scale-105 duration-300" href="#cta">
                    Careers
                </a>
</div>
<div className="w-12 h-[1px] bg-[#C8995A]/50 mx-auto mt-12 opacity-0 animate-fade-in-up delay-400"></div>
</div>
</section>

<section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="about">
<div className="flex flex-col mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Về Chúng Tôi</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight">About CBC</h2>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-20 items-center">
<div className="text-base md:text-lg leading-relaxed text-[#1C1814]/80 font-light">
                Công ty Cổ phần Địa ốc City by City là đại lý phân phối bất động sản cao cấp tại phía Nam, đại lý chiến lược Gamuda Land. Từ 10 thành viên năm 2024 → 72 chuyên viên năm 2025 → mục tiêu 120 năm 2026.
            </div>
<div className="relative rounded-lg overflow-hidden border border-[#1C1814]/10 shadow-sm aspect-video group">
<img alt="CBC Event" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/123.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/40 to-transparent mix-blend-multiply"></div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-16">
<div className="border border-[#C8995A]/30 p-8 rounded-lg bg-white/50 backdrop-blur-sm relative overflow-hidden group hover:border-[#C8995A] transition-colors duration-500">
<p className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-4">Tầm Nhìn · Vision</p>
<p className="font-playfair italic text-xl md:text-2xl text-[#1C1814]">"Trở thành đơn vị tư vấn và phân phối bất động sản cao cấp minh bạch và đáng tin cậy nhất phía Nam."</p>
</div>
<div className="border border-[#C8995A]/30 p-8 rounded-lg bg-white/50 backdrop-blur-sm relative overflow-hidden group hover:border-[#C8995A] transition-colors duration-500">
<p className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-4">Sứ Mệnh · Mission</p>
<p className="font-playfair italic text-xl md:text-2xl text-[#1C1814]">"Mang đến giải pháp an cư và đầu tư bền vững, song hành cùng sự phát triển của cộng đồng."</p>
</div>
</div>
<div className="text-center mb-12">
<p className="text-xs uppercase tracking-widest text-[#C8995A]">Giá Trị Cốt Lõi · Core Values</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-xl border border-[#1C1814]/5 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#C8995A]/40 transition-all duration-300 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center mb-6 group-hover:bg-[#C8995A] group-hover:text-[#1C1814] transition-colors">
<iconify-icon icon="solar:scale-bold" width="28"></iconify-icon>
</div>
<h3 className="font-playfair text-2xl text-[#1C1814] mb-1">TỬ TẾ</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-4">Integrity</p>
<p className="text-sm text-[#1C1814]/70">Sự chính trực là nền tảng. Mỗi giao dịch phải đứng vững trước sự kiểm chứng của thời gian.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-[#1C1814]/5 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#C8995A]/40 transition-all duration-300 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center mb-6 group-hover:bg-[#C8995A] group-hover:text-[#1C1814] transition-colors">
<iconify-icon icon="solar:hand-heart-bold" width="28"></iconify-icon>
</div>
<h3 className="font-playfair text-2xl text-[#1C1814] mb-1">TẬN TÂM</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-4">Dedication</p>
<p className="text-sm text-[#1C1814]/70">Đồng hành cùng khách hàng từ bước tư vấn ban đầu cho đến khi nhận nhà hoàn thiện.</p>
</div>

<div className="bg-white p-8 rounded-xl border border-[#1C1814]/5 shadow-sm hover:shadow-md hover:scale-[1.02] hover:border-[#C8995A]/40 transition-all duration-300 flex flex-col items-center text-center group">
<div className="w-16 h-16 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center mb-6 group-hover:bg-[#C8995A] group-hover:text-[#1C1814] transition-colors">
<iconify-icon icon="solar:diamond-bold" width="28"></iconify-icon>
</div>
<h3 className="font-playfair text-2xl text-[#1C1814] mb-1">TINH HOA</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-4">Excellence</p>
<p className="text-sm text-[#1C1814]/70">Chuẩn mực cao nhất từ kiến thức sản phẩm chuyên sâu đến kỹ năng tư vấn chuyên nghiệp.</p>
</div>
</div>
</section>

<section className="hidden" style={{display: 'none'}}></section>

<section className="py-24 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto" id="stats">
<div className="text-center mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Hành Trình Phát Triển</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#1C1814] tracking-tight">Our Growth Journey</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-gradient-to-br from-[#E8C895] to-[#C8995A] p-8 rounded-xl shadow-md text-[#1C1814] flex flex-col items-center text-center">
<span className="font-playfair italic text-5xl md:text-6xl mb-2">x7</span>
<span className="text-[0.65rem] uppercase tracking-widest font-medium mb-2">Tăng Trưởng Nhân Sự</span>
<span className="text-sm italic opacity-80">Từ 10 → 72 thành viên</span>
</div>
<div className="bg-gradient-to-br from-[#E8C895] to-[#C8995A] p-8 rounded-xl shadow-md text-[#1C1814] flex flex-col items-center text-center">
<span className="font-playfair italic text-5xl md:text-6xl mb-2 tabular-nums">3.518 <span className="text-2xl not-italic">tỷ</span></span>
<span className="text-[0.65rem] uppercase tracking-widest font-medium mb-2">Tổng Doanh Số 2025</span>
<span className="text-sm italic opacity-80">Tăng trưởng 120% so với 2024</span>
</div>
<div className="bg-gradient-to-br from-[#E8C895] to-[#C8995A] p-8 rounded-xl shadow-md text-[#1C1814] flex flex-col items-center text-center">
<span className="font-playfair italic text-5xl md:text-6xl mb-2">&gt;70%</span>
<span className="text-[0.65rem] uppercase tracking-widest font-medium mb-2">Đội Ngũ Có Giao Dịch</span>
<span className="text-sm italic opacity-80">Mục tiêu phấn đấu 2026</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl border border-[#1C1814]/5 shadow-sm mb-12">
<h3 className="text-xs uppercase tracking-widest text-[#1C1814]/60 text-center mb-8">Tổng Giá Trị Giao Dịch (Tỷ VND) · Transaction Value Growth</h3>

<div className="relative w-full h-48 md:h-64 mb-6">

<div className="absolute inset-0 flex flex-col justify-between border-l border-b border-[#1C1814]/10 pb-6 pl-2">
<div className="w-full border-t border-[#1C1814]/5 h-0 flex items-center"><span className="text-[0.6rem] text-[#1C1814]/40 absolute -left-8">8000</span></div>
<div className="w-full border-t border-[#1C1814]/5 h-0 flex items-center"><span className="text-[0.6rem] text-[#1C1814]/40 absolute -left-8">6000</span></div>
<div className="w-full border-t border-[#1C1814]/5 h-0 flex items-center"><span className="text-[0.6rem] text-[#1C1814]/40 absolute -left-8">4000</span></div>
<div className="w-full border-t border-[#1C1814]/5 h-0 flex items-center"><span className="text-[0.6rem] text-[#1C1814]/40 absolute -left-8">2000</span></div>
<div className="w-full h-0 flex items-center"><span className="text-[0.6rem] text-[#1C1814]/40 absolute -left-6">0</span></div>
</div>

<svg className="absolute inset-0 w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<lineargradient id="chartGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#C8995A" stop-opacity="0.2"></stop>
<stop offset="100%" stop-color="#C8995A" stop-opacity="0"></stop>
</lineargradient>
</defs>

<path d="M10,80 Q40,60 50,45 T90,20 L90,100 L10,100 Z" fill="url(#chartGrad)"></path>

<path d="M10,80 Q40,60 50,45 T90,20" fill="none" stroke="#C8995A" strokeWidth="2" vector-effect="non-scaling-stroke"></path>

<circle cx="10" cy="80" fill="#1C1814" r="3" stroke="#F4F1E8" strokeWidth="1.5" vector-effect="non-scaling-stroke"></circle>
<circle cx="50" cy="45" fill="#1C1814" r="3" stroke="#F4F1E8" strokeWidth="1.5" vector-effect="non-scaling-stroke"></circle>
<circle cx="90" cy="20" fill="#C8995A" r="3" stroke="#1C1814" strokeWidth="1.5" vector-effect="non-scaling-stroke"></circle>

<text fill="#1C1814" fontFamily="Inter" fontSize="3" font-weight="500" text-anchor="middle" x="10" y="70">1,606</text>
<text fill="#1C1814" fontFamily="Inter" fontSize="3" font-weight="500" text-anchor="middle" x="50" y="35">3,518</text>
<text fill="#C8995A" fontFamily="Inter" fontSize="3" font-weight="600" text-anchor="middle" x="90" y="10">5,000 (Mục tiêu)</text>
</svg>

<div className="absolute bottom-0 left-0 w-full flex justify-between px-[10%] -mb-6 text-[0.65rem] text-[#1C1814]/60">
<span>2024</span>
<span>2025</span>
<span className="text-[#C8995A]">2026</span>
</div>
</div>
</div>

<div className="text-center mb-6">
<h4 className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/60">Project Milestones · Các Mốc Dự Án</h4>
</div>
<div className="flex flex-wrap justify-center gap-4 mb-16">

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="Eaton Park" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/eaton4.png?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">Eaton Park</span>
</div>

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="Elysian" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/Elysian.jpg?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">Elysian</span>
</div>

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="Springville" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/springvill.jpg?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">Springville</span>
</div>

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="MT Eastmark" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/MT1.png?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">MT Eastmark</span>
</div>

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="Artisan Park" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/artisan.jpg?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">Artisan Park</span>
</div>

<div className="group flex flex-col items-center gap-2">
<div className="w-24 md:w-32 aspect-video bg-[#1C1814]/10 rounded overflow-hidden">
<img alt="Global City" className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/Du-an-The-Global.jpg?w=800&amp;q=80"/>
</div>
<span className="text-[0.6rem] uppercase tracking-wider">The Global City</span>
</div>
</div>
<div className="text-center">
<p className="font-playfair text-xl text-[#C8995A]">10 → 32 → 72 · ĐỘI NGŨ KIẾN TẠO TƯƠNG LAI</p>
</div>
</section>

<section className="py-24 bg-[#1C1814] text-[#F4F1E8] border-y border-[#C8995A]/20 shadow-xl px-4 md:px-12" id="track-record">
<div className="max-w-7xl mx-auto">
<div className="mb-12">
<p className="text-xs uppercase tracking-widest text-[#C8995A] mb-2">Doanh Số Theo Dự Án</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight mb-4">Track Record</h2>
<p className="text-sm text-[#F4F1E8]/70 max-w-2xl">Tổng giá trị giao dịch CBC đã chuyển giao thành công, phân bổ theo từng dự án chiến lược.</p>
</div>

<div className="treemap-grid mb-4">

<div className="tm-box-1 bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-6 flex flex-col relative overflow-hidden group hover:scale-[1.01] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8995A]"></div>
<div className="flex justify-between items-start mb-4">
<div className="">
<h3 className="text-sm uppercase tracking-wider font-medium text-[#F4F1E8]">EATON PARK <span className="text-[#F4F1E8]/50">· GAMUDA LAND</span></h3>
<p className="text-xs italic text-[#C8995A] mt-1">Căn hộ · An Phú · TP.HCM</p>
</div>
<span className="bg-[#8B3A2F] text-white text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest">Sold Out</span>
</div>
<div className="flex-grow flex flex-col justify-center my-8">
<div className="flex items-baseline gap-2">
<span className="font-playfair italic text-6xl lg:text-7xl text-[#C8995A] tabular-nums tracking-tighter">1.231</span>
<span className="text-sm uppercase tracking-widest text-[#F4F1E8]/60">Tỷ Đồng</span>
</div>
</div>
<div className="w-full h-[1px] bg-[#F4F1E8]/10 mb-4"></div>
<div className="text-xs text-[#F4F1E8]/70 flex flex-col gap-1">
<p>130 giao dịch · ~9.5 tỷ đồng/căn</p>
<p className="text-[#C8995A]">F1 Dealer · Cờ đầu Gamuda Land</p>
</div>
<div className="mt-auto pt-4 flex justify-end">
<span className="text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/50">35% · Tổng Doanh Số</span>
</div>
</div>

<div className="tm-box-2 bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-6 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.01] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8995A]"></div>
<div className="flex justify-between items-start mb-4">
<div>
<h3 className="text-sm uppercase tracking-wider font-medium text-[#F4F1E8]">SPRINGVILLE <span className="text-[#F4F1E8]/50">· GAMUDA LAND</span></h3>
<p className="text-xs italic text-[#C8995A] mt-1">Shophouse · Townhouse · Nhơn Trạch</p>
</div>
<span className="bg-[#C8995A] text-[#1C1814] font-medium text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest flex items-center gap-1"><iconify-icon icon="solar:star-bold"></iconify-icon> Top 1 Giao Dịch</span>
</div>
<div className="flex justify-end items-baseline gap-2 mt-4">
<span className="font-playfair italic text-5xl lg:text-6xl text-[#F4F1E8] tabular-nums tracking-tighter">879</span>
<span className="text-xs uppercase tracking-widest text-[#F4F1E8]/60 flex flex-col leading-tight text-right"><span>Tỷ Đồng</span><span>78 Giao Dịch</span></span>
</div>
<div className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] text-right mt-2">
                        ~10 Tỷ/căn · 25% Doanh Số
                    </div>
</div>

<div className="tm-box-row">

<div className="bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8995A]"></div>
<div>
<h3 className="text-[0.65rem] uppercase tracking-wider text-[#F4F1E8] truncate">ELYSIAN <span className="text-[#F4F1E8]/50">· GAMUDA</span></h3>
<div className="flex justify-between items-center mt-1">
<p className="text-[0.6rem] italic text-[#C8995A]">Trường Thạnh</p>
<span className="text-[#8B3A2F] text-[0.5rem] uppercase border border-[#8B3A2F] px-1 rounded">Sold Out</span>
</div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="font-playfair italic text-3xl text-[#F4F1E8] tabular-nums">297</span>
<span className="text-[0.55rem] uppercase text-[#F4F1E8]/50">Tỷ</span>
</div>
<p className="text-[0.6rem] text-[#F4F1E8]/60 mt-2">50 GD · ~6 tỷ/căn</p>
</div>

<div className="bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8995A]"></div>
<div>
<h3 className="text-[0.65rem] uppercase tracking-wider text-[#F4F1E8] truncate">CELADON CITY</h3>
<p className="text-[0.6rem] italic text-[#C8995A] mt-1">Tân Phú</p>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="font-playfair italic text-3xl text-[#F4F1E8] tabular-nums">251</span>
<span className="text-[0.55rem] uppercase text-[#F4F1E8]/50">Tỷ</span>
</div>
<p className="text-[0.6rem] text-[#F4F1E8]/60 mt-2">30 GD · ~7 tỷ/căn</p>
</div>

<div className="bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8995A]"></div>
<div>
<h3 className="text-[0.65rem] uppercase tracking-wider text-[#F4F1E8] truncate">MT EASTMARK</h3>
<div className="flex justify-between items-center mt-1">
<p className="text-[0.6rem] italic text-[#C8995A]">Long Trường</p>
<iconify-icon className="text-[#C8995A] text-xs" icon="solar:crown-bold"></iconify-icon>
</div>
</div>
<div className="mt-4 flex items-baseline gap-1">
<span className="font-playfair italic text-3xl text-[#F4F1E8] tabular-nums">281</span>
<span className="text-[0.55rem] uppercase text-[#F4F1E8]/50">Tỷ</span>
</div>
<p className="text-[0.6rem] text-[#F4F1E8]/60 mt-2">49 GD · ~5 tỷ/căn</p>
</div>
</div>

<div className="tm-box-6 bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-4 flex flex-col justify-between relative overflow-hidden group hover:scale-[1.02] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8995A]"></div>
<h3 className="font-playfair text-[#C8995A] text-lg uppercase tracking-tight">Các Dự Án Khác</h3>
<div className="mt-4 flex items-baseline gap-1">
<span className="font-playfair italic text-4xl text-[#F4F1E8] tabular-nums">354</span>
<span className="text-xs uppercase text-[#F4F1E8]/50">Tỷ Đồng</span>
</div>
<p className="text-[0.6rem] uppercase tracking-widest text-[#F4F1E8]/40 mt-2">10% · Tổng Doanh Số</p>
</div>

<div className="tm-box-7 bg-[#231E19] border border-[#C8995A]/30 rounded-lg p-4 flex items-center justify-between relative overflow-hidden group hover:scale-[1.02] hover:border-[#C8995A] transition-all duration-300">
<div className="absolute top-0 left-0 w-full h-[2px] bg-[#C8995A]"></div>
<div>
<h3 className="text-xs uppercase tracking-wider font-medium text-[#F4F1E8]">THE GLOBAL CITY</h3>
<p className="text-[0.6rem] italic text-[#C8995A] mt-1">Masterise Homes</p>
</div>
<div className="text-right">
<span className="font-playfair italic text-xl text-[#F4F1E8] tabular-nums">225 <span className="text-[0.6rem] not-italic uppercase text-[#F4F1E8]/50">Tỷ Đồng</span></span>
<p className="text-[0.6rem] text-[#F4F1E8]/60 mt-1">15 GD · ~15 tỷ/căn</p>
</div>
</div>
</div>

<div className="bg-[#C8995A] text-[#1C1814] rounded p-4 text-center mt-6">
<span className="text-xs md:text-sm uppercase tracking-widest font-medium">Tổng Doanh Số Chuyển Giao Qua 5 Dự Án Chiến Lược — 3.518 Tỷ Đồng · 397 Giao Dịch</span>
</div>
<p className="text-center font-playfair italic text-sm text-[#F4F1E8]/60 mt-6">"Mỗi con số = một cam kết đã được giao dịch và bàn giao thật."</p>
</div>
</section>

<section className="py-24 px-4 md:px-12 max-w-7xl mx-auto" id="featured">
<div className="text-center mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Dự Án Nổi Bật</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight">Featured Projects</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-8">

<div className="group relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
<img alt="Springville" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/AISpringville1.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/90 via-[#1C1814]/20 to-transparent"></div>

<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 rounded-xl transition-colors duration-500 z-20"></div>
<div className="absolute top-6 left-6 z-10">
<span className="bg-[#8B3A2F] text-white text-xs uppercase px-3 py-1.5 rounded tracking-widest font-medium">Sold Out</span>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-playfair italic text-3xl md:text-4xl text-white mb-1">Springville</h3>
<p className="text-xs uppercase tracking-widest text-white/70">A Gamuda Land Community</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
<img alt="Elysian" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/Elysian.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/90 via-[#1C1814]/20 to-transparent"></div>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 rounded-xl transition-colors duration-500 z-20"></div>
<div className="absolute top-6 left-6 z-10">
<span className="bg-[#8B3A2F] text-white text-xs uppercase px-3 py-1.5 rounded tracking-widest font-medium">Sold Out</span>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-playfair italic text-3xl md:text-4xl text-white mb-1">Elysian</h3>
<p className="text-xs uppercase tracking-widest text-white/70">A Gamuda Land Community</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
<img alt="Celadon City" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/celadon-city-gamuda-land-tan-phu-2.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/90 via-[#1C1814]/20 to-transparent"></div>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 rounded-xl transition-colors duration-500 z-20"></div>
<div className="absolute top-6 left-6 z-10">
<span className="bg-[#8B3A2F] text-white text-xs uppercase px-3 py-1.5 rounded tracking-widest font-medium">Sold Out</span>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-playfair italic text-3xl md:text-4xl text-white mb-1">Celadon City</h3>
<p className="text-xs uppercase tracking-widest text-white/70">A Gamuda Land Community</p>
</div>
</div>

<div className="group relative aspect-[4/5] md:aspect-square rounded-xl overflow-hidden shadow-lg hover:shadow-2xl transition-all duration-500 cursor-pointer">
<img alt="Eaton Park" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/eaton4.png?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1C1814]/90 via-[#1C1814]/20 to-transparent"></div>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 rounded-xl transition-colors duration-500 z-20"></div>
<div className="absolute top-6 left-6 z-10">
<span className="bg-[#8B3A2F] text-white text-xs uppercase px-3 py-1.5 rounded tracking-widest font-medium">Sold Out</span>
</div>
<div className="absolute bottom-8 left-8 z-10">
<h3 className="font-playfair italic text-3xl md:text-4xl text-white mb-1">Eaton Park</h3>
<p className="text-xs uppercase tracking-widest text-white/70">A Gamuda Land Community</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white/40 border-y border-[#1C1814]/5 px-4 md:px-12" id="portfolio">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-12">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Danh Mục Dự Án</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight mb-8">Project Portfolio</h2>
<p className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-4">Đối Tác Chủ Đầu Tư · Strategic Developers</p>
<div className="flex flex-wrap justify-center gap-3">
<span className="px-4 py-2 rounded-full bg-[#C8995A] text-[#1C1814] text-xs font-playfair tracking-tighter shadow-sm">GAMUDA LAND</span>
<span className="px-4 py-2 rounded-full border border-[#C8995A]/40 text-[#1C1814]/70 text-xs font-playfair tracking-tighter bg-white">MASTERISE HOMES</span>
<span className="px-4 py-2 rounded-full border border-[#C8995A]/40 text-[#1C1814]/70 text-xs font-playfair tracking-tighter bg-white">SUN GROUP</span>
<span className="px-4 py-2 rounded-full border border-[#C8995A]/40 text-[#1C1814]/70 text-xs font-playfair tracking-tighter bg-white">KHANG DIEN</span>
<span className="px-4 py-2 rounded-full border border-[#C8995A]/40 text-[#1C1814]/70 text-xs font-playfair tracking-tighter bg-white">CAPITALAND</span>
</div>
</div>
<div className="w-full h-[1px] bg-[#1C1814]/10 my-12"></div>
<h3 className="text-xs uppercase tracking-widest text-[#1C1814]/70 text-center mb-8">Danh Mục Dự Án Đang Phân Phối</h3>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Global City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/Du-an-The-Global-City-Thu-Duc.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">The Global City</h4>
<p className="text-xs text-[#1C1814]/60 italic">Masterise Homes · An Phú · TP.HCM</p>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Blanca City" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/blanca-.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">Blanca City</h4>
<p className="text-xs text-[#1C1814]/60 italic">Sun Group · Vũng Tàu</p>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Artisan Park" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/1775271155929_9141708342224249940_g7387293084159976717_71c9a38e9769bb057a26160375330d45.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">Artisan Park</h4>
<p className="text-xs text-[#1C1814]/60 italic">Gamuda Land · Bình Dương</p>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="The Meadow" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/The-Meadow-Binh-Chanh-Gamuda-Land1.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">The Meadow</h4>
<p className="text-xs text-[#1C1814]/60 italic">Gamuda Land · Bình Chánh · TP.HCM</p>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Gladia" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/gladia1.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">Gladia By The Water</h4>
<p className="text-xs text-[#1C1814]/60 italic">Khang Điền · Bình Trưng · TP.HCM</p>
</div>
</div>

<div className="bg-white rounded-lg overflow-hidden border border-[#1C1814]/5 shadow-sm group hover:-translate-y-1 hover:shadow-lg transition-all duration-300 cursor-pointer">
<div className="relative aspect-[16/10] overflow-hidden">
<img alt="Masteri Park Place" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/masteri.jpg?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-[#C8995A] text-[#1C1814] text-[0.6rem] uppercase px-2 py-1 rounded tracking-widest font-medium">Active</div>
</div>
<div className="p-5">
<h4 className="font-playfair text-xl text-[#C8995A] mb-1">Masteri Park Place</h4>
<p className="text-xs text-[#1C1814]/60 italic">Masterise Homes · An Phú · TP.HCM</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 max-w-5xl mx-auto" id="features">
<div className="text-center mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Điểm Mạnh Doanh Nghiệp</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight">Why CBC</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="bg-[#F4F1E8] p-8 rounded-xl border border-[#C8995A]/30 shadow-sm relative group hover:-translate-y-1 hover:border-[#C8995A] hover:shadow-[0_4px_20px_rgba(200,153,90,0.15)] transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8995A]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center">
<iconify-icon icon="solar:handshake-bold" width="24"></iconify-icon>
</div>
<span className="bg-gradient-to-r from-[#E8C895] to-[#C8995A] text-[#1C1814] text-[0.65rem] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">TOP 1</span>
</div>
<h3 className="font-playfair text-2xl text-[#C8995A] mb-1">ĐẠI LÝ CHIẾN LƯỢC</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-3">Strategic Partner</p>
<p className="text-sm font-medium text-[#1C1814]/80 mb-2">Đại lý Gamuda Land · Liên tiếp 3 dự án</p>
<p className="text-sm text-[#1C1814]/60 leading-relaxed">Top 1 doanh số tại Springville, Top 1 GDV Elysian, Top 1 số giao dịch MT Eastmark — vị thế đại lý chiến lược của Gamuda Land.</p>
</div>

<div className="bg-[#F4F1E8] p-8 rounded-xl border border-[#C8995A]/30 shadow-sm relative group hover:-translate-y-1 hover:border-[#C8995A] hover:shadow-[0_4px_20px_rgba(200,153,90,0.15)] transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8995A]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center">
<iconify-icon icon="solar:users-group-rounded-bold" width="24"></iconify-icon>
</div>
<span className="bg-gradient-to-r from-[#E8C895] to-[#C8995A] text-[#1C1814] text-[0.65rem] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">70%</span>
</div>
<h3 className="font-playfair text-2xl text-[#C8995A] mb-1">ĐỘI NGŨ TINH NHUỆ</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-3">Elite Team</p>
<p className="text-sm font-medium text-[#1C1814]/80 mb-2">Chuyên viên có giao dịch</p>
<p className="text-sm text-[#1C1814]/60 leading-relaxed">70% chuyên viên có giao dịch thành công — tỷ lệ thuộc nhóm dẫn đầu ngành. Tuyển chọn kỹ, đào tạo bài bản.</p>
</div>

<div className="bg-[#F4F1E8] p-8 rounded-xl border border-[#C8995A]/30 shadow-sm relative group hover:-translate-y-1 hover:border-[#C8995A] hover:shadow-[0_4px_20px_rgba(200,153,90,0.15)] transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8995A]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center">
<iconify-icon icon="solar:settings-bold" width="24"></iconify-icon>
</div>
<span className="bg-gradient-to-r from-[#E8C895] to-[#C8995A] text-[#1C1814] text-[0.65rem] uppercase font-bold px-3 py-1 rounded-full tracking-wider shadow-sm">100%</span>
</div>
<h3 className="font-playfair text-2xl text-[#C8995A] mb-1">BỘ MÁY VỮNG CHẮC</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-3">Automated System</p>
<p className="text-sm font-medium text-[#1C1814]/80 mb-2">Đội ngũ Back Office chuyên nghiệp</p>
<p className="text-sm text-[#1C1814]/60 leading-relaxed">Quy trình tư vấn — chăm sóc — chốt sale được chuẩn hóa bằng công nghệ, hỗ trợ tối đa cho sales.</p>
</div>

<div className="bg-[#F4F1E8] p-8 rounded-xl border border-[#C8995A]/30 shadow-sm relative group hover:-translate-y-1 hover:border-[#C8995A] hover:shadow-[0_4px_20px_rgba(200,153,90,0.15)] transition-all duration-300 overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-[#C8995A]/10 rounded-bl-full -mr-8 -mt-8 transition-transform group-hover:scale-150 duration-500"></div>
<div className="flex items-start justify-between mb-6">
<div className="w-12 h-12 rounded-full bg-[#1C1814] text-[#C8995A] flex items-center justify-center">
<iconify-icon icon="solar:shield-check-bold" width="24"></iconify-icon>
</div>
</div>
<h3 className="font-playfair text-2xl text-[#C8995A] mb-1">CHÍNH SÁCH MINH BẠCH</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/40 mb-3">Full Transparency</p>
<p className="text-sm text-[#1C1814]/60 leading-relaxed mt-5">Lương — thưởng — hoa hồng công khai rõ ràng theo khung. Lộ trình phát triển vạch sẵn từ chuyên viên đến giám đốc kinh doanh.</p>
</div>
</div>
</section>

<section className="py-24 px-4 md:px-12 max-w-7xl mx-auto" id="team">
<div className="text-center mb-12">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Ban Lãnh Đạo &amp; Đội Ngũ</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight mb-8">Leadership &amp; Team</h2>
</div>

<div className="w-full aspect-[21/9] md:aspect-[3/1] bg-[#1C1814]/10 rounded-xl overflow-hidden mb-16 shadow-md">
<img alt="CBC Entire Team" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/trenvanphong.jpg?w=800&amp;q=80"/>
</div>

<div className="grid grid-cols-2 md:grid-cols-5 gap-6 mb-20">

<div className="flex flex-col items-center group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[#C8995A]/30 overflow-hidden mb-4 group-hover:border-[#C8995A] group-hover:shadow-[0_0_15px_rgba(200,153,90,0.3)] transition-all duration-300 group-hover:scale-105">
<img alt="Ng. Vũ Ánh" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/anhvu.png?w=800&amp;q=80"/>
</div>
<h4 className="font-playfair text-[#1C1814] text-lg">Ng. Vũ Ánh</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-[#1C1814]/50 mt-1">Sales Manager</p>
<p className="text-[0.65rem] italic text-[#C8995A]">Trưởng phòng Kinh doanh</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[#C8995A]/30 overflow-hidden mb-4 group-hover:border-[#C8995A] group-hover:shadow-[0_0_15px_rgba(200,153,90,0.3)] transition-all duration-300 group-hover:scale-105">
<img alt="Ng. Đình Long" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/long3.png?w=800&amp;q=80"/>
</div>
<h4 className="font-playfair text-[#1C1814] text-lg">Ng. Đình Long</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-[#1C1814]/50 mt-1">Sales Director</p>
<p className="text-[0.65rem] italic text-[#C8995A]">Giám đốc Kinh doanh</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[#C8995A]/30 overflow-hidden mb-4 group-hover:border-[#C8995A] group-hover:shadow-[0_0_15px_rgba(200,153,90,0.3)] transition-all duration-300 group-hover:scale-105">
<img alt="Ng. Đăng Khoa" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/khoa3.png?w=800&amp;q=80"/>
</div>
<h4 className="font-playfair text-[#1C1814] text-lg">Ng. Đăng Khoa</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-[#1C1814]/50 mt-1">Director General</p>
<p className="text-[0.65rem] italic text-[#C8995A]">Tổng giám đốc</p>
</div>

<div className="flex flex-col items-center group">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[#C8995A]/30 overflow-hidden mb-4 group-hover:border-[#C8995A] group-hover:shadow-[0_0_15px_rgba(200,153,90,0.3)] transition-all duration-300 group-hover:scale-105">
<img alt="Võ Thùy Liên" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/lien1.png?w=800&amp;q=80"/>
</div>
<h4 className="font-playfair text-[#1C1814] text-lg">Võ Thùy Liên</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-[#1C1814]/50 mt-1">Sales Administrator</p>
<p className="text-[0.65rem] italic text-[#C8995A]">Quản lý Đại lý</p>
</div>

<div className="flex flex-col items-center group col-span-2 md:col-span-1">
<div className="w-24 h-24 md:w-32 md:h-32 rounded-full border-[3px] border-[#C8995A]/30 overflow-hidden mb-4 group-hover:border-[#C8995A] group-hover:shadow-[0_0_15px_rgba(200,153,90,0.3)] transition-all duration-300 group-hover:scale-105">
<img alt="Ng. Tuấn Anh" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/tuanhhh.png?w=800&amp;q=80"/>
</div>
<h4 className="font-playfair text-[#1C1814] text-lg">Ng. Tuấn Anh</h4>
<p className="text-[0.6rem] uppercase tracking-widest text-[#1C1814]/50 mt-1">Growth Director</p>
<p className="text-[0.65rem] italic text-[#C8995A]">Giám đốc Phát triển</p>
</div>
</div>
<div className="flex justify-center mb-12">
<div className="w-2 h-2 rounded-full bg-[#C8995A]"></div>
</div>
<h3 className="text-[0.65rem] uppercase tracking-widest text-[#1C1814]/60 text-center mb-8">Cơ Cấu Tổ Chức · Org Structure</h3>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="bg-[#1C1814] rounded-lg p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8995A]"></div>
<h4 className="font-playfair text-[#C8995A] text-xl mb-1">SALES</h4>
<p className="text-xs text-[#F4F1E8] uppercase tracking-widest mb-6">Kinh Doanh</p>
<div className="flex items-baseline gap-2 mb-4">
<span className="font-playfair italic text-5xl text-[#C8995A]">62</span>
<span className="text-[0.6rem] uppercase text-[#F4F1E8]/50 tracking-widest">Chuyên Viên</span>
</div>
<div className="w-full h-[1px] bg-[#F4F1E8]/10 mb-4"></div>
<div className="text-xs text-[#F4F1E8]/70 flex flex-col gap-1">
<p>Sales Manager</p>
<p>3 Sales Teams</p>
<p className="italic text-[#C8995A]/80">Alpha · Beta · Gamma</p>
</div>
</div>

<div className="bg-[#1C1814] rounded-lg p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8995A]"></div>
<h4 className="font-playfair text-[#C8995A] text-xl mb-1">MARKETING</h4>
<p className="text-xs text-[#F4F1E8] uppercase tracking-widest mb-6">&amp; Branding</p>
<div className="flex items-baseline gap-2 mb-4">
<span className="font-playfair italic text-5xl text-[#C8995A]">4</span>
<span className="text-[0.6rem] uppercase text-[#F4F1E8]/50 tracking-widest">Thành Viên</span>
</div>
<div className="w-full h-[1px] bg-[#F4F1E8]/10 mb-4"></div>
<div className="text-xs text-[#F4F1E8]/70 flex flex-col gap-1">
<p>Digital Ads</p>
<p>Content · Brand</p>
<p className="italic text-[#C8995A]/80">Marketing · Social · AI</p>
</div>
</div>

<div className="bg-[#1C1814] rounded-lg p-6 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-[3px] bg-[#C8995A]"></div>
<h4 className="font-playfair text-[#C8995A] text-xl mb-1">OPERATIONS</h4>
<p className="text-xs text-[#F4F1E8] uppercase tracking-widest mb-6">&amp; Admin Team</p>
<div className="flex items-baseline gap-2 mb-4">
<span className="font-playfair italic text-5xl text-[#C8995A]">6</span>
<span className="text-[0.6rem] uppercase text-[#F4F1E8]/50 tracking-widest">Thành Viên</span>
</div>
<div className="w-full h-[1px] bg-[#F4F1E8]/10 mb-4"></div>
<div className="text-xs text-[#F4F1E8]/70 flex flex-col gap-1">
<p>HR · Finance</p>
<p>Customer Care</p>
<p className="italic text-[#C8995A]/80">Sales Admin Support</p>
</div>
</div>
</div>
<div className="bg-[#C8995A] text-[#1C1814] rounded p-4 text-center mb-8">
<span className="text-xs md:text-sm uppercase tracking-widest font-medium">Quy Mô Tổng · Total Headcount — 72 Thành Viên → Đạt Mục Tiêu 2026</span>
</div>
<p className="text-center font-playfair italic text-lg text-[#1C1814]/70">"Một bộ máy chuyên nghiệp · Một sứ mệnh chung."</p>
</section>

<section className="py-24 bg-white/40 border-y border-[#1C1814]/5 px-4 md:px-12" id="awards">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Vinh Danh &amp; Thành Tựu</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight">Awards &amp; Recognition</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
<div className="bg-[#F4F1E8] border border-[#C8995A]/30 p-6 rounded-xl flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-[#C8995A] text-5xl mb-4" icon="solar:trophy-bold"></iconify-icon>
<h3 className="font-playfair italic text-4xl text-[#C8995A] mb-2">TOP 1</h3>
<p className="text-xs font-medium uppercase tracking-widest text-[#1C1814] mb-2">Springville</p>
<p className="text-[0.65rem] italic text-[#1C1814]/60">Doanh số phân khu thấp tầng 2025</p>
</div>
<div className="bg-[#F4F1E8] border border-[#C8995A]/30 p-6 rounded-xl flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-[#C8995A] text-5xl mb-4" icon="solar:trophy-bold"></iconify-icon>
<h3 className="font-playfair italic text-4xl text-[#C8995A] mb-2">TOP 1</h3>
<p className="text-xs font-medium uppercase tracking-widest text-[#1C1814] mb-2">Elysian</p>
<p className="text-[0.65rem] italic text-[#1C1814]/60">GDV Contributed Agent</p>
</div>
<div className="bg-[#F4F1E8] border border-[#C8995A]/30 p-6 rounded-xl flex flex-col items-center text-center shadow-sm">
<iconify-icon className="text-[#C8995A] text-5xl mb-4" icon="solar:trophy-bold"></iconify-icon>
<h3 className="font-playfair italic text-4xl text-[#C8995A] mb-2">TOP 1</h3>
<p className="text-xs font-medium uppercase tracking-widest text-[#1C1814] mb-2">MT Eastmark</p>
<p className="text-[0.65rem] italic text-[#1C1814]/60">Tổng giao dịch tính hiện tại</p>
</div>
</div>

<div className="bg-[#1C1814] rounded-xl overflow-hidden shadow-lg grid grid-cols-1 md:grid-cols-3 mb-20 border border-[#C8995A]/20">
<div className="md:col-span-1 aspect-square md:aspect-auto">
<img alt="Đình Long Award" className="w-full h-full object-cover" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/HATT9528.JPG?w=800&amp;q=80"/>
</div>
<div className="md:col-span-2 p-8 md:p-12 flex flex-col justify-center relative">
<div className="absolute right-0 top-0 w-32 h-32 bg-[#C8995A]/5 rounded-bl-full pointer-events-none"></div>
<p className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-4">CBC Diamond Member · #1</p>
<h3 className="font-playfair text-4xl md:text-5xl text-[#C8995A] mb-1">NGUYỄN ĐÌNH LONG</h3>
<p className="text-sm italic text-[#F4F1E8]/70 mb-6">Sales Director · Giám đốc Kinh doanh</p>
<p className="text-sm text-[#F4F1E8]/80 max-w-lg mb-8 leading-relaxed">Cá nhân đạt doanh số 145 tỷ Q4 năm 2025 — biểu tượng của tinh thần vượt giới hạn tại CBC.</p>
<div className="flex items-baseline gap-3">
<span className="font-playfair italic text-6xl md:text-7xl text-[#C8995A] tabular-nums tracking-tighter">145.38</span>
<div className="flex flex-col">
<span className="text-xs uppercase tracking-widest text-[#F4F1E8]">Tỷ Đồng</span>
<span className="text-[0.65rem] italic text-[#C8995A]">doanh số 2025</span>
</div>
</div>
</div>
</div>

<div className="hidden"></div>
</div>
</section>

<section className="py-24 px-4 md:px-12 max-w-7xl mx-auto" id="gallery">
<div className="text-center mb-16">
<p className="text-xs uppercase tracking-widest text-[#1C1814]/50 mb-2">Văn Hóa Doanh Nghiệp</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight">Life at CBC</h2>
</div>
<div className="mosaic-grid mb-12">

<div className="mosaic-big rounded-xl overflow-hidden group relative">
<img alt="Team Trip" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/teambuilding.JPG?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Celebration" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/vh.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Outdoor Team" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/IMG_6298.JPG?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Arms Raised" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/IMG_6955.JPG?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Event Glow" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/vh1.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>

<div className="aspect-square rounded-xl overflow-hidden group relative">
<img alt="Ao Dai" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://storage.googleapis.com/stephen-hub.firebasestorage.app/website-cbc/615559282_1994782534585169_401405181655842130_n.jpg?w=800&amp;q=80"/>
<div className="absolute inset-0 border-2 border-transparent group-hover:border-[#C8995A]/50 transition-colors duration-300 rounded-xl pointer-events-none z-10"></div>
</div>
</div>
<div className="bg-white border border-[#C8995A]/30 p-8 rounded-xl max-w-3xl mx-auto text-center shadow-sm relative overflow-hidden group">
<p className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-4">More Than A Workplace · Hơn Cả Một Nơi Làm Việc</p>
<p className="font-inter italic font-light text-[#1C1814]/80 text-sm md:text-base leading-relaxed">"Tại CBC, mỗi ngày là một cơ hội để học hỏi, kết nối và phát triển. Văn hóa đồng đội, môi trường minh bạch và tinh thần đặt khách hàng làm trọng tâm — đây là những điều giữ chúng tôi cùng nhau lâu dài và đi xa hơn."</p>
</div>
</section>

<section className="py-24 bg-[#1C1814] text-[#F4F1E8] px-4 md:px-12" id="cta">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-12">
<p className="text-xs uppercase tracking-widest text-[#C8995A] mb-2">Đồng Hành Kiến Tạo · Partnership &amp; Careers</p>
<h2 className="font-playfair text-4xl md:text-5xl text-[#C8995A] tracking-tight mb-6">Build With Us</h2>
<p className="font-inter italic text-sm text-[#F4F1E8]/70 max-w-3xl mx-auto leading-relaxed">
                    "Tại CBC, chúng tôi tin rằng giá trị bền vững được tạo ra khi đúng người gặp đúng cơ hội. Với Chủ đầu tư — chúng tôi là một đại lý phân phối cam kết bán đúng, bán đủ, bán bền. Với những chuyên viên đầy khát vọng — chúng tôi là một bệ phóng nghề nghiệp. Nếu cùng tầm nhìn — CBC luôn mở cửa."
                </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 mb-16">

<div className="bg-[#231E19] border border-[#C8995A] rounded-2xl p-8 md:p-12 shadow-xl group hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(200,153,90,0.15)] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C8995A]/5 rounded-bl-full pointer-events-none"></div>
<h3 className="font-playfair text-4xl md:text-5xl text-[#C8995A] mb-2">PARTNERSHIP</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/80 mb-2">Hợp Tác Chiến Lược</p>
<p className="text-sm italic text-[#C8995A] mb-8">Dành cho Chủ đầu tư · Tập đoàn · Doanh nghiệp</p>
<ul className="space-y-4 text-sm text-[#F4F1E8]/80 mb-12">
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Đại lý phân phối F1, năng lực bán hàng đã kiểm chứng</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Đội ngũ chuyên viên đào tạo bài bản, nắm chắc sản phẩm</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Hệ thống automation tracking 100% giao dịch &amp; leads</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Báo cáo minh bạch, cam kết KPI theo từng phase dự án</li>
</ul>
<button className="hover-gold-beam px-8 py-3 rounded-full bg-[#C8995A] text-[#1C1814] text-xs uppercase tracking-widest hover:bg-[#D4A86A] transition-all font-medium flex items-center gap-2">
                        Hợp Tác Ngay <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>

<div className="bg-[#231E19] border border-[#C8995A] rounded-2xl p-8 md:p-12 shadow-xl group hover:scale-[1.02] hover:shadow-[0_10px_30px_rgba(200,153,90,0.15)] transition-all duration-300 relative overflow-hidden">
<div className="absolute top-0 right-0 w-32 h-32 bg-[#C8995A]/5 rounded-bl-full pointer-events-none"></div>
<h3 className="font-playfair text-4xl md:text-5xl text-[#C8995A] mb-2">CAREERS</h3>
<p className="text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/80 mb-2">Gia Nhập Đội Ngũ</p>
<p className="text-sm italic text-[#C8995A] mb-8">Dành cho Chuyên viên · Quản lý kinh doanh</p>
<ul className="space-y-4 text-sm text-[#F4F1E8]/80 mb-12">
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Lương–thưởng–hoa hồng cạnh tranh, minh bạch</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Đào tạo sản phẩm &amp; kỹ năng bán hàng bài bản</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Lộ trình thăng tiến Chuyên viên → GĐ Kinh doanh</li>
<li className="flex items-start gap-3"><span className="text-[#C8995A] mt-1 text-xs">•</span> Đội ngũ Marketing hỗ trợ thực chiến, nhanh chóng</li>
</ul>
<button className="hover-gold-beam px-8 py-3 rounded-full bg-[#C8995A] text-[#1C1814] text-xs uppercase tracking-widest hover:bg-[#D4A86A] transition-all font-medium flex items-center gap-2">
                        Ứng Tuyển Ngay <iconify-icon className="text-sm" icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<footer className="bg-[#15120F] text-[#F4F1E8] py-16 px-4 md:px-12 border-t border-[#C8995A]/20">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">

<div className="col-span-1 md:col-span-4">
<span className="font-playfair text-[#C8995A] text-3xl tracking-tighter block mb-2">CBC</span>
<span className="text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/50 block mb-6">City By City · Property</span>
<p className="text-xs text-[#F4F1E8]/60 leading-relaxed max-w-sm">Đại lý phân phối bất động sản cao cấp hàng đầu phía Nam. Đối tác chiến lược của Gamuda Land, Masterise Homes, Sun Group và các chủ đầu tư uy tín khác.</p>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-6 font-medium">Khám Phá</h4>
<ul className="space-y-4 text-xs text-[#F4F1E8]/70">
<li><a className="hover:text-[#C8995A] transition-colors" href="#about">Về Chúng Tôi</a></li>
<li><a className="hover:text-[#C8995A] transition-colors" href="#stats">Hành Trình</a></li>
<li><a className="hover:text-[#C8995A] transition-colors" href="#portfolio">Dự Án</a></li>
<li><a className="hover:text-[#C8995A] transition-colors" href="#awards">Thành Tựu</a></li>
</ul>
</div>

<div className="col-span-1 md:col-span-4">
<h4 className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-6 font-medium">Liên Hệ</h4>
<div className="space-y-4 text-xs text-[#F4F1E8]/70">
<p className="flex items-start gap-3">
<iconify-icon className="text-[#C8995A] text-sm mt-0.5" icon="solar:map-point-bold"></iconify-icon>
<span>Trụ sở chính: Tầng 3, Tòa nhà The Hallmark, Khu đô thị mới Thủ Thiêm, TP. Thủ Đức, TP.HCM</span>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-[#C8995A] text-sm" icon="solar:phone-calling-bold"></iconify-icon>
<span>090 123 4567 (Hotline 24/7)</span>
</p>
<p className="flex items-center gap-3">
<iconify-icon className="text-[#C8995A] text-sm" icon="solar:letter-bold"></iconify-icon>
<span>partnership@cbcproperty.vn</span>
</p>
</div>
</div>

<div className="col-span-1 md:col-span-2">
<h4 className="text-[0.65rem] uppercase tracking-widest text-[#C8995A] mb-6 font-medium">Connect</h4>
<div className="flex gap-3">
<a className="w-8 h-8 rounded-full border border-[#C8995A]/30 flex items-center justify-center text-[#F4F1E8]/70 hover:bg-[#C8995A] hover:text-[#1C1814] hover:border-[#C8995A] transition-all duration-300" href="#">
<iconify-icon icon="mdi:facebook"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-[#C8995A]/30 flex items-center justify-center text-[#F4F1E8]/70 hover:bg-[#C8995A] hover:text-[#1C1814] hover:border-[#C8995A] transition-all duration-300" href="#">
<iconify-icon icon="mdi:linkedin"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-full border border-[#C8995A]/30 flex items-center justify-center text-[#F4F1E8]/70 hover:bg-[#C8995A] hover:text-[#1C1814] hover:border-[#C8995A] transition-all duration-300" href="#">
<iconify-icon icon="mdi:youtube"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto pt-8 border-t border-[#F4F1E8]/10 flex flex-col md:flex-row justify-between items-center gap-4 text-[0.65rem] uppercase tracking-widest text-[#F4F1E8]/40">
<p>© 2026 City By City Property. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-[#C8995A] transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-[#C8995A] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</footer>

    </>
  );
}
