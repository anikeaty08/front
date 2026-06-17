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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-slate-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="text-xl font-semibold tracking-tighter text-slate-900" href="#">CANALCUISINE</a>
<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#map">แผนที่วัฒนธรรม</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#menu">คลังอาหารริมคลอง</a>
<a className="text-sm font-medium text-slate-500 hover:text-slate-900 transition-colors" href="#tours">เส้นทางท่องเที่ยว</a>
</div>
</div>
<button className="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-full hover:bg-slate-800 transition-all">
                ลงทะเบียนเส้นทาง
            </button>
</div>
</nav>

<section className="pt-20 pb-16 px-6">
<div className="max-w-7xl mx-auto text-center">
<span className="inline-block py-1 px-3 rounded-full bg-slate-50 text-slate-500 text-xs font-medium mb-6">วิจัยและสืบสานวัฒนธรรมท้องถิ่น</span>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tighter text-slate-900 mb-6 max-w-4xl mx-auto leading-tight">
                รื้อฟื้นรสชาติจากสายน้ำ <br/> มรดกภูมิปัญญาคลองบางเขน-ลาดพร้าว
            </h1>
<p className="text-base text-slate-500 max-w-2xl mx-auto leading-relaxed mb-10">
                สำรวจแผนที่ GIS อัจฉริยะที่รวบรวมกว่า 135 เมนูท้องถิ่นและ 26 จุดพิกัดทางประวัติศาสตร์ เชื่อมโยงวิถีชีวิตชาวสวนและชุมชนริมคลอง
            </p>
</div>
</section>

<section className="py-12 px-6 bg-slate-50" id="map">
<div className="max-w-7xl mx-auto">
<div className="bg-white rounded-3xl border border-slate-200 overflow-hidden shadow-sm flex flex-col lg:flex-row h-[600px]">

<div className="w-full lg:w-80 border-r border-slate-100 p-6 flex flex-col">
<h3 className="text-lg font-semibold tracking-tight mb-6">แผนที่ระบบสารสนเทศ (GIS)</h3>
<div className="space-y-4 flex-1 overflow-y-auto custom-scrollbar">
<div>
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mb-3">เลือกพื้นที่คลอง</label>
<div className="space-y-2">
<button className="w-full flex items-center justify-between p-3 rounded-xl bg-slate-900 text-white text-sm">
<span className="flex items-center gap-3"><iconify-icon icon="solar:water-linear" width="18"></iconify-icon> คลองบางเขน (เก่า)</span>
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-600 text-sm transition-all border border-transparent hover:border-slate-100">
<span className="flex items-center gap-3"><iconify-icon icon="solar:leaf-linear" width="18"></iconify-icon> คลองบางเขน (ใหม่)</span>
</button>
<button className="w-full flex items-center justify-between p-3 rounded-xl hover:bg-slate-50 text-slate-600 text-sm transition-all border border-transparent hover:border-slate-100">
<span className="flex items-center gap-3"><iconify-icon icon="solar:city-linear" width="18"></iconify-icon> คลองลาดพร้าว</span>
</button>
</div>
</div>
<div className="pt-4">
<label className="text-[10px] font-semibold text-slate-400 uppercase tracking-widest block mb-3">ประเภทสถานที่</label>
<div className="space-y-2">
<label className="flex items-center gap-3 p-1 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" type="checkbox"/>
<span className="text-sm text-slate-600">หมุดอาหารดั้งเดิม</span>
</label>
<label className="flex items-center gap-3 p-1 cursor-pointer">
<input checked="" className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" type="checkbox"/>
<span className="text-sm text-slate-600">วัดและโบราณสถาน</span>
</label>
<label className="flex items-center gap-3 p-1 cursor-pointer">
<input className="w-4 h-4 rounded border-slate-300 text-slate-900 focus:ring-slate-900" type="checkbox"/>
<span className="text-sm text-slate-600">สวนผลไม้และศูนย์เรียนรู้</span>
</label>
</div>
</div>
</div>
</div>

<div className="flex-1 map-bg relative">
<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<div className="absolute top-1/4 left-1/3 group cursor-pointer">
<div className="bg-white p-2 rounded-lg shadow-xl border border-slate-100 flex items-center gap-2 animate-bounce">
<div className="w-6 h-6 bg-orange-100 text-orange-600 rounded flex items-center justify-center text-xs">
<iconify-icon icon="solar:plate-linear"></iconify-icon>
</div>
<span className="text-xs font-medium pr-2">บ้านคุณอรชา (น้ำยาอุทัย)</span>
</div>
<div className="w-3 h-3 bg-orange-500 rounded-full border-2 border-white mx-auto -mt-1 shadow-lg"></div>
</div>
<div className="absolute bottom-1/3 right-1/4 group cursor-pointer">
<div className="bg-white p-2 rounded-lg shadow-xl border border-slate-100 flex items-center gap-2">
<div className="w-6 h-6 bg-blue-100 text-blue-600 rounded flex items-center justify-center text-xs">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<span className="text-xs font-medium pr-2">วัดเก่าแก่สมัยอยุธยา</span>
</div>
<div className="w-3 h-3 bg-blue-500 rounded-full border-2 border-white mx-auto -mt-1 shadow-lg"></div>
</div>

<div className="absolute bottom-6 right-6 flex flex-col gap-2">
<div className="bg-white/90 backdrop-blur p-4 rounded-2xl shadow-sm border border-slate-100 max-w-xs">
<p className="text-[11px] text-slate-400 font-semibold mb-1 uppercase">ข้อมูลสรุป</p>
<div className="flex items-center justify-between">
<span className="text-sm text-slate-600 font-medium">จุดสำคัญทั้งหมด</span>
<span className="text-sm font-semibold">26 พิกัด</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6" id="menu">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row md:items-end justify-between gap-8 mb-12">
<div className="max-w-xl">
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900">คลังตำรับอาหารชุมชน</h2>
<p className="text-sm text-slate-500 leading-relaxed">คัดสรรเมนูจากงานวิจัยที่สะท้อนถึงวิถีชีวิตริมน้ำ ตั้งแต่สำรับคาวหวาน 135 เมนู จนถึงสูตรลับเฉพาะ 9 วัด 9 ชุมชน</p>
</div>
<div className="flex items-center gap-2 overflow-x-auto pb-2 custom-scrollbar no-scrollbar">
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-slate-900 text-white text-sm font-medium">ทั้งหมด</button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">ซิกเนเจอร์</button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">ของคาว (100+)</button>
<button className="whitespace-nowrap px-5 py-2 rounded-full bg-white border border-slate-200 text-slate-600 text-sm font-medium hover:bg-slate-50 transition-all">ของหวาน (48)</button>
</div>
</div>

<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-300 transition-all cursor-pointer shadow-sm hover:shadow-md">
<div className="aspect-[4/3] bg-slate-100 relative overflow-hidden">
<div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider rounded-md">Signature</span>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">แกงกระท้อน</h4>
<span className="text-xs text-slate-400">คาว</span>
</div>
<p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">สูตรดั้งเดิมจากคลองบางเขน ใช้กระท้อนเนื้อดีคลุกเคล้ากับเครื่องแกงเข้มข้น</p>
<div className="flex items-center gap-2 pt-4 border-t border-slate-50">
<iconify-icon className="text-yellow-500" icon="solar:bolt-circle-linear"></iconify-icon>
<span className="text-[11px] font-medium text-slate-400">คุณค่าทางโภชนาการสูง</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-300 transition-all cursor-pointer shadow-sm">
<div className="aspect-[4/3] bg-slate-100 relative">
<div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
<div className="absolute top-3 left-3">
<span className="px-2 py-1 bg-white/90 backdrop-blur text-[10px] font-semibold uppercase tracking-wider rounded-md">Traditional</span>
</div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">ขนมจีนน้ำยาอุทัย</h4>
<span className="text-xs text-slate-400">คาว</span>
</div>
<p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">ตำรับหมอขจร บ้านคุณอรชา ที่เป็นเอกลักษณ์ของย่านคลองบางเขน</p>
<div className="flex items-center gap-2 pt-4 border-t border-slate-50">
<iconify-icon className="text-blue-500" icon="solar:history-linear"></iconify-icon>
<span className="text-[11px] font-medium text-slate-400">สืบทอดกว่า 3 ชั่วอายุคน</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-300 transition-all cursor-pointer shadow-sm">
<div className="aspect-[4/3] bg-slate-100 relative">
<div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">ขนมเทียนสลัดงา</h4>
<span className="text-xs text-slate-400">หวาน</span>
</div>
<p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">ขนมหวานมงคลที่ใช้ในงานประเพณีริมคลอง กลิ่นหอมจากงาคั่วใหม่</p>
<div className="flex items-center gap-2 pt-4 border-t border-slate-50">
<iconify-icon className="text-purple-500" icon="solar:star-linear"></iconify-icon>
<span className="text-[11px] font-medium text-slate-400">เมนูหาทานยาก</span>
</div>
</div>
</div>

<div className="group bg-white rounded-2xl border border-slate-100 overflow-hidden hover:border-slate-300 transition-all cursor-pointer shadow-sm">
<div className="aspect-[4/3] bg-slate-100 relative">
<div className="absolute inset-0 bg-slate-200 animate-pulse"></div>
</div>
<div className="p-5">
<div className="flex items-center justify-between mb-2">
<h4 className="text-sm font-semibold text-slate-900 group-hover:text-blue-600 transition-colors">ปลาตะเพียนต้มเค็ม</h4>
<span className="text-xs text-slate-400">คาว</span>
</div>
<p className="text-xs text-slate-500 line-clamp-2 leading-relaxed mb-4">ภูมิปัญญาการถนอมอาหารจากปลาน้ำจืดในคลอง ใช้เวลาเคี่ยวจนก้างนิ่ม</p>
<div className="flex items-center gap-2 pt-4 border-t border-slate-50">
<iconify-icon className="text-teal-500" icon="solar:water-sun-linear"></iconify-icon>
<span className="text-[11px] font-medium text-slate-400">วัตถุดิบจากลุ่มน้ำ</span>
</div>
</div>
</div>
</div>

<div className="mt-12 text-center">
<button className="group flex items-center gap-2 mx-auto text-sm font-medium text-slate-500 hover:text-slate-900 transition-all">
                    สำรวจเมนูทั้งหมดจากคลองลาดพร้าว
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:alt-arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</section>

<section className="py-20 px-6 border-t border-slate-100">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1">
<div className="grid grid-cols-2 gap-4">
<div className="bg-slate-50 aspect-square rounded-3xl p-8 flex flex-col justify-end">
<span className="text-3xl font-semibold mb-2">26</span>
<p className="text-xs text-slate-500 leading-tight">พิกัดทางประวัติศาสตร์และวัฒนธรรม</p>
</div>
<div className="bg-slate-900 text-white aspect-square rounded-3xl p-8 flex flex-col justify-end">
<span className="text-3xl font-semibold mb-2">9+</span>
<p className="text-xs text-slate-300 leading-tight">ชุมชนริมคลองที่มีสูตรลับเฉพาะ</p>
</div>
<div className="bg-slate-50 aspect-square rounded-3xl p-8 flex flex-col justify-end">
<span className="text-3xl font-semibold mb-2">135</span>
<p className="text-xs text-slate-500 leading-tight">รายการอาหารที่ถูกบันทึกไว้</p>
</div>
<div className="bg-slate-50 aspect-square rounded-3xl p-8 flex flex-col justify-end">
<span className="text-3xl font-semibold mb-2">5</span>
<p className="text-xs text-slate-500 leading-tight">เส้นทางท่องเที่ยวเชิงสร้างสรรค์</p>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl font-semibold tracking-tight mb-6">มากกว่าเรื่องอาหาร <br/> แต่คือประวัติศาสตร์ที่มีลมหายใจ</h2>
<p className="text-sm text-slate-500 leading-relaxed mb-8">
                    เราได้ทำการสำรวจและจัดเก็บข้อมูลจากปราชญ์ชาวบ้านและแม่ครัวประจำถิ่น เพื่อเชื่อมโยงเมนูอาหารเข้ากับจุดท่องเที่ยวสำคัญ ไม่ว่าจะเป็นวัดโบราณสมัยอยุธยา หรือสวนผลไม้ที่ยังคงหลงเหลืออยู่ท่ามกลางเมืองที่เติบโต
                </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:book-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold mb-1">สารานุกรมรสชาติ</h5>
<p className="text-xs text-slate-400">บันทึกขั้นตอนและที่มาของวัตถุดิบท้องถิ่นอย่างละเอียด</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-slate-900" icon="solar:route-linear"></iconify-icon>
</div>
<div>
<h5 className="text-sm font-semibold mb-1">เส้นทางตามรอยรส</h5>
<p className="text-xs text-slate-400">ท่องเที่ยวตามแผนที่ GIS ที่ระบุพิกัดร้านและบ้านตำรับอาหาร</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 bg-slate-50">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
<div>
<span className="text-lg font-semibold tracking-tighter text-slate-900">CANALCUISINE</span>
<p className="text-[10px] text-slate-400 mt-2 uppercase tracking-widest">โครงการวิจัยวัฒนธรรมลุ่มแม่น้ำคลองบางเขน-ลาดพร้าว</p>
</div>
<div className="flex gap-8">
<a className="text-[11px] font-medium text-slate-500 hover:text-slate-900 uppercase" href="#">ข้อมูลวิจัย</a>
<a className="text-[11px] font-medium text-slate-500 hover:text-slate-900 uppercase" href="#">ติดต่อชุมชน</a>
<a className="text-[11px] font-medium text-slate-500 hover:text-slate-900 uppercase" href="#">Privacy Policy</a>
</div>
<div className="text-slate-300 text-xs">
                © 2024 Canal Culture Research Center.
            </div>
</div>
</footer>

    </>
  );
}
