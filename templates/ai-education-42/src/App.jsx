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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-5 h-5 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full flex items-center justify-center">
<div className="w-2 h-2 bg-black rounded-full"></div>
</div>
<span className="text-sm font-medium tracking-tighter text-white">EDUCORE</span>
</div>
<div className="hidden md:flex gap-6 text-xs font-medium text-slate-400">
<a className="hover:text-white transition-colors" href="#">Platform</a>
<a className="hover:text-white transition-colors" href="#">Solutions</a>
<a className="hover:text-white transition-colors" href="#">Research</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="text-xs font-medium text-slate-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-slate-200 transition-colors" href="#">Start Learning</a>
</div>
</div>
</nav>

<main className="flex-grow pt-32 pb-20 px-6">
<div className="max-w-5xl mx-auto text-center mb-24 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-indigo-500/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-indigo-300 text-xs font-medium mb-6 animate-fade-in-up">
<span className="flex h-1.5 w-1.5 rounded-full bg-indigo-400"></span>
                v2.0 Education Engine
            </div>
<h1 className="text-5xl md:text-7xl font-medium text-transparent bg-clip-text bg-gradient-to-b from-white to-white/50 tracking-tight leading-[1.1] mb-6">
                อนาคตแห่งการศึกษา<br/>
<span className="text-white/40">ที่ไร้ขีดจำกัด</span>
</h1>
<p className="text-lg text-slate-400 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                ปฏิวัติรูปแบบการเรียนรู้ด้วย AI อัจฉริยะที่เข้าใจคุณ สร้างเส้นทางความรู้เฉพาะบุคคล และเชื่อมต่อกับห้องเรียนทั่วโลกได้ในเสี้ยววินาที
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="h-10 px-6 rounded-full bg-white text-black text-sm font-medium hover:bg-slate-200 transition-all flex items-center gap-2">
                    เริ่มต้นใช้งานฟรี
                    <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="h-10 px-6 rounded-full glass-panel text-slate-300 text-sm font-medium hover:bg-white/5 transition-all flex items-center gap-2">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                    ชมวิดีโอแนะนำ
                </button>
</div>
</div>

<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-6 gap-4 md:gap-6 auto-rows-[minmax(180px,auto)]">

<div className="md:col-span-4 glass-panel rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-indigo-500/5 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-start mb-12">
<div>
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center mb-4 text-indigo-400">
<span className="iconify" data-icon="lucide:sparkles" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Personalized AI Tutor</h3>
<p className="text-sm text-slate-400 max-w-sm">ระบบวิเคราะห์จุดแข็งและจุดอ่อน เพื่อสร้างหลักสูตรที่เหมาะสมที่สุดสำหรับผู้เรียนแต่ละคน</p>
</div>
</div>

<div className="absolute bottom-0 right-0 w-3/4 md:w-1/2 translate-y-6 translate-x-6 md:translate-x-0 group-hover:-translate-y-2 transition-transform duration-500">
<div className="bg-neutral-900 border border-white/10 rounded-tl-xl p-4 shadow-2xl">
<div className="flex items-center gap-3 mb-4 border-b border-white/5 pb-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-r from-blue-500 to-indigo-500 flex items-center justify-center text-[10px] text-white font-bold">AI</div>
<div className="flex flex-col">
<span className="text-xs text-white font-medium">Core Tutor</span>
<span className="text-[10px] text-green-400 flex items-center gap-1">
<span className="w-1 h-1 bg-green-400 rounded-full"></span> Online
                                </span>
</div>
</div>
<div className="space-y-3">
<div className="bg-white/5 p-3 rounded-lg rounded-tl-none text-xs text-slate-300">
                                จากผลการทดสอบ คุณมีความถนัดด้าน Logic แนะนำให้เริ่มบทที่ 4 ครับ
                            </div>
<div className="flex gap-2 justify-end">
<div className="bg-indigo-600 p-3 rounded-lg rounded-br-none text-xs text-white">
                                    ตกลง เริ่มบทเรียนเลย
                                </div>
</div>
<div className="shimmer h-2 w-1/3 bg-white/5 rounded-full mt-2"></div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 row-span-2 glass-panel rounded-2xl p-6 relative overflow-hidden group">
<div className="flex flex-col h-full">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center mb-4 text-emerald-400">
<span className="iconify" data-icon="lucide:bar-chart-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-xl font-medium text-white tracking-tight mb-2">Real-time Analytics</h3>
<p className="text-sm text-slate-400 mb-8">ติดตามพัฒนาการอย่างละเอียด แม่นยำ และวัดผลได้จริง</p>

<div className="mt-auto space-y-4">
<div className="space-y-1">
<div className="flex justify-between text-xs text-slate-400">
<span>Mathematics</span>
<span className="text-white">94%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-emerald-500 w-[94%] rounded-full"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs text-slate-400">
<span>Science</span>
<span className="text-white">88%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-blue-500 w-[88%] rounded-full"></div>
</div>
</div>
<div className="space-y-1">
<div className="flex justify-between text-xs text-slate-400">
<span>Language</span>
<span className="text-white">72%</span>
</div>
<div className="h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-orange-500 w-[72%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors group cursor-default">
<div className="w-10 h-10 rounded-lg bg-pink-500/10 border border-pink-500/20 flex items-center justify-center mb-4 text-pink-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:glasses" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-1">Immersive VR</h3>
<p className="text-xs text-slate-400 leading-relaxed">เรียนรู้ผ่านประสบการณ์เสมือนจริง จำลองสถานการณ์ประวัติศาสตร์และวิทยาศาสตร์</p>
</div>

<div className="md:col-span-2 glass-panel rounded-2xl p-6 hover:bg-white/5 transition-colors group cursor-default">
<div className="w-10 h-10 rounded-lg bg-orange-500/10 border border-orange-500/20 flex items-center justify-center mb-4 text-orange-400 group-hover:scale-110 transition-transform">
<span className="iconify" data-icon="lucide:globe-2" data-strokeWidth="1.5" data-width="20"></span>
</div>
<h3 className="text-base font-medium text-white mb-1">Global Connect</h3>
<p className="text-xs text-slate-400 leading-relaxed">แลกเปลี่ยนความรู้กับผู้เรียนและผู้เชี่ยวชาญจากทั่วทุกมุมโลกแบบไร้พรมแดน</p>
</div>
</div>

<div className="max-w-4xl mx-auto mt-24">
<div className="text-center mb-12">
<h2 className="text-2xl font-medium text-white tracking-tight mb-2">ปรับแต่งการเรียนรู้ของคุณ</h2>
<p className="text-sm text-slate-400">ควบคุมทุกอย่างได้ดั่งใจ เพื่อประสิทธิภาพสูงสุด</p>
</div>

<div className="glass-panel rounded-xl p-1 border-t border-white/10 shadow-2xl">
<div className="bg-black/40 rounded-lg p-6 md:p-8">
<div className="flex flex-col md:flex-row gap-8 items-center justify-between">

<div className="flex items-center gap-4">
<span className="text-sm font-medium text-slate-300">Focus Mode</span>
<div className="relative w-12 h-6 rounded-full bg-neutral-800 border border-white/10 cursor-pointer group">
<div className="absolute top-0.5 left-0.5 w-5 h-5 bg-indigo-500 rounded-full shadow-lg transform translate-x-6 transition-transform"></div>
</div>
<span className="text-xs text-indigo-400 font-medium tracking-wide">ACTIVE</span>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>

<div className="w-full max-w-xs flex flex-col gap-3">
<div className="flex justify-between text-xs font-medium">
<span className="text-slate-300">Learning Pace</span>
<span className="text-white">1.5x</span>
</div>
<div className="relative h-2 bg-neutral-800 rounded-full w-full">
<div className="absolute h-full bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full w-2/3"></div>
<div className="absolute top-1/2 left-2/3 -translate-y-1/2 -translate-x-1/2 w-4 h-4 bg-white rounded-full shadow-[0_0_10px_rgba(255,255,255,0.5)] cursor-pointer hover:scale-110 transition-transform"></div>
</div>
</div>
<div className="h-8 w-px bg-white/10 hidden md:block"></div>
<div className="flex items-center gap-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-700 flex items-center justify-center text-[10px] text-white">JD</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-600 flex items-center justify-center text-[10px] text-white">AS</div>
<div className="w-8 h-8 rounded-full border-2 border-black bg-neutral-500 flex items-center justify-center text-[10px] text-white">+3</div>
</div>
<span className="text-xs text-slate-400 ml-2">Classmates online</span>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="border-t border-white/5 py-12 px-6 bg-black">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-4 h-4 bg-gradient-to-tr from-indigo-500 to-purple-500 rounded-full"></div>
<span className="text-xs font-medium text-slate-500">© 2024 EduCore Future Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</footer>

    </>
  );
}
