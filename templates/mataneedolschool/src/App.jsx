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
      

<div className="text-[10px] sm:text-xs z-50 font-medium text-white tracking-wide text-center bg-[#c576be] pt-2 pr-4 pb-2 pl-4 relative">
<span className="" x-show="lang === 'en'">⚠️ Limited Seats for 2026:  admissions limited to May 31.</span>
<span style={{display: 'none'}} x-show="lang === 'th'">⚠️ ที่นั่งมีจำกัดปี 2568: เหลือเพียง 15 ที่นั่งในระดับประถม รับสมัครถึง 31 ธ.ค. นี้</span>
</div>

<nav className="sticky glass transition-all duration-300 w-full z-40 border-slate-200/80 border-b top-0">
<div className="max-w-6xl mx-auto px-4 sm:px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-3 group" href="#">
<img alt="Logo" className="group-hover:scale-105 transition-transform duration-300 w-8 h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ce8c633e-db07-45db-abc7-ee827993e642_320w.png"/>
<span className="font-semibold text-slate-900 tracking-tight text-sm sm:text-base">
                    MATANEEDOL SCHOOL
                </span>
</a>

<div className="flex items-center gap-3">
<button @click="lang = lang === 'th' ? 'en' : 'th'" className="flex items-center gap-1.5 px-3 py-1.5 rounded-full bg-slate-100 hover:bg-slate-200 text-xs font-medium text-slate-600 transition-colors border border-slate-200">
<iconify-icon className="" icon="solar:global-linear" width="16"></iconify-icon>
<span className="uppercase tracking-wide" x-text="lang === 'th' ? 'EN' : 'TH'">TH</span>
</button>
<a className="hidden sm:flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-5 py-2 rounded-full text-xs font-bold transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#visit">
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
<span className="" x-text="lang === 'th' ? 'จองเยี่ยมชมฟรี' : 'Book Free Visit'">Book Free Visit</span>
</a>
</div>
</div>
</nav>

<header className="relative w-full overflow-hidden isolate h-[85vh] sm:min-h-[700px] flex flex-col justify-end sm:justify-center pb-12 sm:pb-0">
<img alt="Happy students at Mataneedol Campus" className="object-center transition-transform duration-1000 hover:scale-105 w-full h-full object-cover -z-10 absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76744a3c-b66c-4ff9-9348-d82ea02d0998_800w.jpg"/>
<div className="-z-10 bg-black/60 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="-translate-y-16 sm:px-6 sm:-translate-y-11 sm:pt-60 text-center w-full max-w-4xl z-10 mr-auto ml-auto pt-60 pr-4 pl-4 relative space-y-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/20 border border-white/30 shadow-lg mb-4 sm:mb-8 backdrop-blur-md animate-fade-in-up">
<span className="flex items-center gap-1 text-[10px] font-bold uppercase tracking-wider text-[#e6b8e2]">
<iconify-icon className="text-[#c576be]" icon="solar:verified-check-bold"></iconify-icon>
<span className="" x-text="lang === 'th' ? 'รับรองโดยกระทรวงศึกษาธิการ' : 'Ministry of Education Certified'">Ministry of Education Certified</span>
</span>
</div>
<h1 className="text-3xl sm:text-7xl font-bold text-white tracking-tight leading-[1.1] mb-3 sm:mb-6 text-balance drop-shadow-md">
<span style={{display: 'none'}} x-show="lang === 'th'">สร้างผู้นำแห่งอนาคต<br/><span className="text-[#c576be]">ด้วยหัวใจที่เบิกบาน</span></span>
<span className="" x-show="lang === 'en'">Building Future Leaders<br/><span className="text-[#c576be]">With Happy Hearts</span></span>
</h1>
<p className="text-sm sm:text-2xl text-slate-200 mb-6 sm:mb-8 max-w-2xl mx-auto leading-relaxed text-balance font-medium drop-shadow-sm">
<span style={{display: 'none'}} x-show="lang === 'th'">โรงเรียนที่ลูกของคุณจะเติบโตอย่างมีความสุข และประสบความสำเร็จทางวิชาการไปพร้อมกัน</span>
<span className="" x-show="lang === 'en'">The school where your children flourish <span className="text-white font-bold decoration-2 underline decoration-[#c576be] underline-offset-2">AND</span> succeed academically.</span>
</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3 sm:gap-4 mb-8 sm:mb-10">
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-[#c576be] text-white px-6 py-3 sm:px-8 sm:py-4 rounded-full font-bold hover:brightness-110 transition-all shadow-lg shadow-[#c576be]/30 hover:shadow-xl hover:-translate-y-1" href="#visit">
<iconify-icon icon="solar:calendar-add-bold" width="20"></iconify-icon>
<span x-text="lang === 'th' ? 'จองเยี่ยมชมฟรี' : 'Book a Free Visit'">Book a Free Visit</span>
</a>
<a className="w-full sm:w-auto flex items-center justify-center gap-2 bg-white/10 backdrop-blur text-white border border-white/30 px-6 py-3 sm:px-8 sm:py-4 rounded-full font-semibold hover:bg-white hover:text-slate-900 transition-all shadow-md" href="https://line.me/" target="_blank">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
<span x-text="lang === 'th' ? 'สอบถามผ่าน LINE' : 'Chat on LINE'">Chat on LINE</span>
</a>
</div>
<div className="pt-6 sm:pt-8 border-t border-white/20 max-w-2xl mx-auto">
<p className="text-[10px] sm:text-xs text-slate-300 mb-3 sm:mb-4 uppercase tracking-wider font-bold" x-text="lang === 'th' ? 'ได้รับความไว้วางใจจากผู้ปกครองกว่า 500+ ครอบครัว' : 'Trusted by 500+ Families &amp; Certified By'">Trusted by 500+ Families &amp; Certified By</p>
<div className="flex justify-center items-center gap-4 sm:gap-10 opacity-90">
<div className="flex items-center gap-1 font-bold text-white bg-white/10 border border-white/10 px-2 py-1 rounded-lg backdrop-blur-sm"><iconify-icon className="sm:w-6 sm:h-6" icon="emojione-monotone:school" width="20"></iconify-icon> <span className="text-xs sm:text-base">Cambridge</span></div>
<div className="flex items-center gap-1 font-bold text-white bg-white/10 border border-white/10 px-2 py-1 rounded-lg backdrop-blur-sm"><iconify-icon className="sm:w-6 sm:h-6" icon="mdi:certificate-outline" width="20"></iconify-icon> <span className="text-xs sm:text-base">ONESQA</span></div>
<div className="flex items-center gap-1 font-bold text-white bg-white/10 border border-white/10 px-2 py-1 rounded-lg backdrop-blur-sm"><iconify-icon className="sm:w-6 sm:h-6" icon="ph:globe-simple" width="20"></iconify-icon> <span className="text-xs sm:text-base">Eco-School</span></div>
</div>
</div>
</div>
</header>

<section className="py-10 bg-white overflow-hidden border-y border-slate-100 relative z-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-end mb-6 px-2">
<h3 className="text-lg font-semibold text-slate-900" x-text="lang === 'th' ? 'บรรยากาศในโรงเรียน' : 'Life at Mataneedol'">Life at Mataneedol</h3>
<span className="text-xs font-medium text-slate-500 flex items-center gap-1">Swipe <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</div>
<div className="flex gap-4 overflow-x-auto no-scrollbar pb-4 -mx-4 px-4 sm:mx-0 sm:px-0">
<div className="flex-none w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1509062522246-3755977927d7?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium">Active Learning</div>
</div>
<div className="flex-none w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1588072432836-e10032774350?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium">Science Labs</div>
</div>
<div className="flex-none w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium">Outdoor Activities</div>
</div>
<div className="flex-none w-64 sm:w-80 aspect-[4/3] rounded-2xl overflow-hidden relative group shadow-md">
<img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 left-0 w-full p-4 bg-gradient-to-t from-black/60 to-transparent text-white text-sm font-medium">Art &amp; Creativity</div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-16 max-w-3xl">
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Our Difference</span>
<h2 className="text-3xl sm:text-4xl font-bold text-slate-900 tracking-tight mb-4" x-text="lang === 'th' ? 'ทำไมผู้ปกครองถึงเลือกเมทนีดล' : 'Why Parents Choose Mataneedol'">Why Parents Choose Mataneedol</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-[#c576be] transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-[#c576be]/10 text-[#c576be] flex items-center justify-center mb-6">
<iconify-icon icon="solar:global-bold" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">Real-world English <span className="text-xs bg-[#c576be]/10 text-[#c576be] px-2 py-0.5 rounded-full">Native</span></h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
<span x-show="lang === 'en'">Taught by qualified native teachers. Preparation for IGCSE and IB exams. Focus on natural acquisition through daily immersion.</span>
</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> High English Proficiency
                        </li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> Cambridge Curriculum
                        </li>
</ul>
</div>
<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-green-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:leaf-bold" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">Urban Green Oasis <span className="text-xs bg-green-100 text-green-700 px-2 py-0.5 rounded-full">Eco-School</span></h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
<span x-show="lang === 'en'">The largest outdoor classroom in Khon Kaen. Scientific studies prove nature-based learning boosts cognitive performance and reduces stress.</span>
</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> Low Pollution Zone
                        </li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> Hands-on Farming
                        </li>
</ul>
</div>
<div className="group bg-white p-8 rounded-2xl border border-slate-200 shadow-sm hover:shadow-xl transition-all hover:-translate-y-1 relative overflow-hidden">
<div className="absolute top-0 left-0 w-1 h-full bg-orange-500 transform scale-y-0 group-hover:scale-y-100 transition-transform duration-300"></div>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6">
<iconify-icon icon="solar:diploma-verified-bold" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-3 flex items-center gap-2">Pathway to Top Unis <span className="text-xs bg-orange-100 text-orange-700 px-2 py-0.5 rounded-full">Success</span></h3>
<p className="text-sm text-slate-500 leading-relaxed mb-4">
<span x-show="lang === 'en'">Personalized guidance for every student. 90% of our alumni are accepted into top global universities.</span>
</p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> Individual Counseling
                        </li>
<li className="flex items-start gap-2 text-xs text-slate-600 font-medium">
<iconify-icon className="text-green-500 mt-0.5 flex-none" icon="solar:check-circle-bold"></iconify-icon> Global Alumni Network
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-16 bg-white border-y border-slate-100">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-slate-100">
<div className="text-center px-4">
<p className="text-4xl sm:text-5xl font-bold text-[#c576be] tracking-tight mb-2">98%</p>
<p className="text-sm text-slate-600 font-medium">Exam Success Rate</p>
</div>
<div className="text-center px-4">
<p className="text-4xl sm:text-5xl font-bold text-[#c576be] tracking-tight mb-2">25+</p>
<p className="text-sm text-slate-600 font-medium">University Partners</p>
<p className="text-[10px] text-slate-400 mt-1">Cambridge, Oxford, MIT...</p>
</div>
<div className="text-center px-4">
<p className="text-4xl sm:text-5xl font-bold text-[#c576be] tracking-tight mb-2">1:8</p>
<p className="text-sm text-slate-600 font-medium">Teacher-Student Ratio</p>
</div>
<div className="text-center px-4">
<p className="text-4xl sm:text-5xl font-bold text-[#c576be] tracking-tight mb-2">100+</p>
<p className="text-sm text-slate-600 font-medium">Extra-curricular Activities</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
<div>
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Academics</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Our Programs</h2>
</div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#c576be]/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-pink-100 text-pink-600 flex items-center justify-center font-bold text-lg mb-4">1-3</div>
<h4 className="font-bold text-slate-900 mb-2">Nursery</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[60px]">
                        Social-emotional development through play. Natural English acquisition and daily creative activities for toddlers.
                    </p>
<a className="text-xs font-bold text-[#c576be] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#c576be]/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-blue-100 text-blue-600 flex items-center justify-center font-bold text-lg mb-4">3-6</div>
<h4 className="font-bold text-slate-900 mb-2">Kindergarten</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[60px]">
                        Language foundation and social skills through collaborative projects. Introduction to science and math in a playful way.
                    </p>
<a className="text-xs font-bold text-[#c576be] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#c576be]/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-emerald-100 text-emerald-600 flex items-center justify-center font-bold text-lg mb-4">6-11</div>
<h4 className="font-bold text-slate-900 mb-2">Primary</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[60px]">
                        Rigorous academic learning + practical activities. Cambridge English certification prep. 30+ clubs (sports, arts, robotics).
                    </p>
<a className="text-xs font-bold text-[#c576be] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>

<div className="bg-white p-6 rounded-2xl shadow-sm border border-slate-200 hover:border-[#c576be]/50 transition-all group">
<div className="w-12 h-12 rounded-lg bg-violet-100 text-violet-600 flex items-center justify-center font-bold text-lg mb-4">12+</div>
<h4 className="font-bold text-slate-900 mb-2">Secondary</h4>
<p className="text-xs text-slate-500 leading-relaxed mb-4 min-h-[60px]">
                        IGCSE &amp; IB pathways for university access. Leadership and entrepreneurship projects with personalized career guidance.
                    </p>
<a className="text-xs font-bold text-[#c576be] flex items-center gap-1 group-hover:gap-2 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-12 text-center">
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Parent Stories</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">What Parents Say About Mataneedol</h2>
<p className="text-slate-500">Real families share their experience</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544717297-fa95b6ee9643?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
<div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-[#c576be] shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">0:42</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=11"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Somchai P.</p>
<p className="text-xs text-slate-500">Parent of Grade 5 student</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"My son was struggling in school. Now he's confident and getting top marks! The change is incredible."</p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1491438590914-bc09fcaaf77a?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
<div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-[#c576be] shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">0:35</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Niran K.</p>
<p className="text-xs text-slate-500">Parent of Grade 2 student</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"The teachers genuinely care. My daughter says she loves coming to school every day. That says it all."</p>
</div>
</div>

<div className="bg-white rounded-2xl overflow-hidden shadow-sm border border-slate-200 hover:shadow-xl transition-all duration-300 group">
<div className="relative aspect-video bg-slate-100 overflow-hidden cursor-pointer">
<img className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1571260899304-425eee4c7efc?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-black/20 flex items-center justify-center group-hover:bg-black/30 transition-colors">
<div className="w-14 h-14 bg-white/90 rounded-full flex items-center justify-center text-[#c576be] shadow-lg backdrop-blur-sm group-hover:scale-110 transition-transform">
<iconify-icon className="ml-1" icon="solar:play-bold" width="24"></iconify-icon>
</div>
</div>
<div className="absolute bottom-3 right-3 bg-black/60 text-white text-[10px] font-bold px-2 py-1 rounded">0:50</div>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-slate-100">
<img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=3"/>
</div>
<div>
<p className="text-sm font-bold text-slate-900">Araya M.</p>
<p className="text-xs text-slate-500">Parent of Grade 10 student</p>
</div>
</div>
<p className="text-sm text-slate-600 italic">"The preparation for IGCSEs here is world-class. It's tough but they make it enjoyable."</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-16 bg-[#c576be] relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">
<iconify-icon className="text-white text-5xl mb-6 opacity-50" icon="solar:quote-up-bold"></iconify-icon>
<h2 className="text-2xl sm:text-4xl font-bold text-white leading-tight mb-8 text-balance">
                "Great balance between academics and happiness. Exactly what we needed for our teenage son."
            </h2>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-white/50 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div className="text-left">
<p className="text-white font-bold text-sm">Mr. James Thompson</p>
<p className="text-white/80 text-xs">Parent of Year 9 Student</p>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="mb-16 text-center">
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Enrollment</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Easy 3-Step Enrollment</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-slate-200 -z-10"></div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-[#c576be]/20 flex items-center justify-center text-[#c576be] mb-6 shadow-sm z-10">
<iconify-icon icon="solar:calendar-add-linear" width="40"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#c576be] text-white flex items-center justify-center font-bold text-sm border-2 border-white">1</div>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">Duration: 1 Hour</span>
<h3 className="text-lg font-bold text-slate-900 mb-2">Book a School Tour</h3>
<ul className="text-sm text-slate-500 space-y-1.5 mb-6">
<li>Campus visit with the Principal</li>
<li>Observe live classes in action</li>
</ul>
<a className="text-xs font-bold text-[#c576be] hover:text-[#a85fa0] underline underline-offset-4" href="#visit">Book a Visit Now</a>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-[#c576be]/20 flex items-center justify-center text-[#c576be] mb-6 shadow-sm z-10">
<iconify-icon icon="solar:clipboard-check-linear" width="40"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#c576be] text-white flex items-center justify-center font-bold text-sm border-2 border-white">2</div>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">30-45 Minutes</span>
<h3 className="text-lg font-bold text-slate-900 mb-2">Student Assessment</h3>
<ul className="text-sm text-slate-500 space-y-1.5">
<li>English and Math level test</li>
<li>Friendly interview with admission officer</li>
</ul>
</div>

<div className="relative flex flex-col items-center text-center">
<div className="w-24 h-24 rounded-full bg-white border-4 border-[#c576be]/20 flex items-center justify-center text-[#c576be] mb-6 shadow-sm z-10">
<iconify-icon icon="solar:user-check-linear" width="40"></iconify-icon>
<div className="absolute -top-2 -right-2 w-8 h-8 rounded-full bg-[#c576be] text-white flex items-center justify-center font-bold text-sm border-2 border-white">3</div>
</div>
<span className="inline-block px-3 py-1 rounded-full bg-slate-100 text-slate-500 text-[10px] font-bold uppercase tracking-wider mb-3">Ready in 1 Month</span>
<h3 className="text-lg font-bold text-slate-900 mb-2">Registration &amp; Start</h3>
<ul className="text-sm text-slate-500 space-y-1.5">
<li>Administrative documents &amp; Fee payment</li>
<li>Uniform selection &amp; Parent briefing</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-y border-slate-100">
<div className="max-w-3xl mx-auto px-4 sm:px-6" x-data="{ active: null }">
<div className="mb-12 text-center">
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Common Questions</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Frequently Asked Questions</h2>
</div>
<div className="space-y-4">

<div :className="active === 1 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 1 ? null : 1" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">Which international exams do you prepare for?</span>
<iconify-icon :className="active === 1 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 1">
                        We prepare students for Cambridge IGCSEs in Year 10-11 and offer both A-Levels and IB Diploma Programme preparation for Year 12-13 students.
                    </div>
</div>

<div :className="active === 2 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 2 ? null : 2" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">Do you offer school transport?</span>
<iconify-icon :className="active === 2 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 2">
                        Yes, we have a fleet of safe, monitored school vans covering all major districts in Khon Kaen city. All vans have GPS tracking and a supervisor.
                    </div>
</div>

<div :className="active === 3 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 3 ? null : 3" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">Can we have a trial day?</span>
<iconify-icon :className="active === 3 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 3">
                        Absolutely. We encourage a "Taster Day" where your child can join their prospective class for a full day to experience the environment firsthand.
                    </div>
</div>

<div :className="active === 4 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 4 ? null : 4" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">What are your teacher qualifications?</span>
<iconify-icon :className="active === 4 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 4">
                        All our foreign teachers hold degrees in Education or their subject specialty, plus PGCE/B.Ed qualifications. We do not hire based solely on TEFL certificates.
                    </div>
</div>

<div :className="active === 5 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 5 ? null : 5" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">Do you offer scholarships or financial aid?</span>
<iconify-icon :className="active === 5 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 5">
                        Yes, we offer academic, sports, and music scholarships for Secondary students (Year 7+). Financial aid is available on a case-by-case basis.
                    </div>
</div>

<div :className="active === 6 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 6 ? null : 6" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">What is the typical class size?</span>
<iconify-icon :className="active === 6 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 6">
                        Our maximum class size is 20 students for Nursery/Kindergarten and 24 for Primary/Secondary to ensure personalized attention.
                    </div>
</div>

<div :className="active === 7 ? 'border-[#c576be]/30 bg-[#c576be]/5' : 'bg-white'" className="border border-slate-200 rounded-xl overflow-hidden transition-all duration-300">
<button @click="active = active === 7 ? null : 7" className="w-full flex items-center justify-between p-5 text-left">
<span className="font-bold text-slate-900 text-sm sm:text-base">How do you support students with learning differences?</span>
<iconify-icon :className="active === 7 ? 'rotate-180 text-[#c576be]' : ''" className="text-slate-400 transition-transform duration-300" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
<div className="px-5 pb-5 text-sm text-slate-500 leading-relaxed" x-show="active === 7">
                        We have a dedicated Learning Support Department that creates Individual Education Plans (IEPs) for students needing extra support or extension.
                    </div>
</div>
</div>
</div>
</section>

<section className="py-20 sm:py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="mb-12 text-center">
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Investment in Education</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-2">Transparent Pricing for Quality Education</h2>
<p className="text-slate-500">Flexible payment options available</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 items-start">

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#c576be]/50 transition-all">
<h3 className="font-bold text-slate-900 text-lg mb-1">Nursery</h3>
<p className="text-xs text-slate-500 mb-4">Starting from</p>
<div className="text-3xl font-bold text-[#c576be] tracking-tight mb-1">฿180,000</div>
<p className="text-xs text-slate-400 mb-6">/year</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Lunch included
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Learning materials
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold text-center hover:border-[#c576be] hover:text-[#c576be] transition-all" href="#">Enroll Now</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#c576be]/50 transition-all">
<h3 className="font-bold text-slate-900 text-lg mb-1">Kindergarten</h3>
<p className="text-xs text-slate-500 mb-4">Starting from</p>
<div className="text-3xl font-bold text-[#c576be] tracking-tight mb-1">฿220,000</div>
<p className="text-xs text-slate-400 mb-6">/year</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Lunch included
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Excursions included
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold text-center hover:border-[#c576be] hover:text-[#c576be] transition-all" href="#">Enroll Now</a>
</div>

<div className="bg-white rounded-2xl p-6 border-2 border-[#c576be] shadow-xl relative scale-105 z-10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-[#c576be] text-white text-[10px] font-bold px-3 py-1 rounded-full uppercase tracking-wide">Most Popular</div>
<h3 className="font-bold text-slate-900 text-lg mb-1">Primary</h3>
<p className="text-xs text-slate-500 mb-4">Starting from</p>
<div className="text-3xl font-bold text-[#c576be] tracking-tight mb-1">฿280,000</div>
<p className="text-xs text-slate-400 mb-6">/year</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#c576be]" icon="solar:check-circle-bold"></iconify-icon> Cambridge Books
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#c576be]" icon="solar:check-circle-bold"></iconify-icon> Club Activities
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-[#c576be]" icon="solar:check-circle-bold"></iconify-icon> Lunch included
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-xl bg-[#c576be] text-white text-sm font-bold text-center hover:brightness-110 transition-all shadow-md shadow-[#c576be]/20" href="#">Enroll Now</a>
</div>

<div className="bg-white rounded-2xl p-6 border border-slate-200 shadow-sm hover:border-[#c576be]/50 transition-all">
<h3 className="font-bold text-slate-900 text-lg mb-1">Secondary</h3>
<p className="text-xs text-slate-500 mb-4">Starting from</p>
<div className="text-3xl font-bold text-[#c576be] tracking-tight mb-1">฿350,000</div>
<p className="text-xs text-slate-400 mb-6">/year</p>
<ul className="space-y-3 mb-6">
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Lab Usage Fees
                        </li>
<li className="flex items-center gap-2 text-sm text-slate-600">
<iconify-icon className="text-green-500" icon="solar:check-circle-linear"></iconify-icon> Career Counseling
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-xl border border-slate-200 text-slate-600 text-sm font-bold text-center hover:border-[#c576be] hover:text-[#c576be] transition-all" href="#">Enroll Now</a>
</div>
</div>
<div className="mt-8 text-center">
<p className="text-sm text-slate-500">
<iconify-icon className="inline align-text-bottom mr-1" icon="solar:info-circle-linear"></iconify-icon>
                    Flexible payment plans (monthly, quarterly). Scholarships available. <br className="hidden sm:block"/> Additional activities and uniforms billed separately. <a className="text-[#c576be] underline" href="#">Contact admissions for detailed fee structure.</a>
</p>
</div>
</div>
</section>

<section className="py-16 bg-slate-900 relative overflow-hidden isolate">

<div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 bg-[#c576be] rounded-full blur-[100px] opacity-30 -z-10"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-blue-600 rounded-full blur-[100px] opacity-20 -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center">
<iconify-icon className="text-[#c576be] text-5xl mb-6" icon="solar:file-download-linear"></iconify-icon>
<h2 className="text-3xl sm:text-4xl font-bold text-white tracking-tight mb-4">Download our Complete Admission Guide (Free)</h2>
<p className="text-slate-300 text-lg mb-8 text-balance">Get detailed curriculum info, fee structures, and a checklist for enrollment.</p>
<form className="max-w-md mx-auto flex flex-col sm:flex-row gap-3">
<input className="flex-1 bg-white/10 border border-white/20 rounded-full px-6 py-3 text-white placeholder-slate-400 focus:outline-none focus:ring-2 focus:ring-[#c576be] text-sm" placeholder="Enter your email address" type="email"/>
<button className="bg-[#c576be] hover:brightness-110 text-white font-bold px-8 py-3 rounded-full transition-all shadow-lg shadow-[#c576be]/40">Get the PDF</button>
</form>
<p className="text-xs text-slate-500 mt-4 flex items-center justify-center gap-1">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon> We respect your privacy. No spam.
            </p>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="flex justify-between items-end mb-12">
<div>
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Blog</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight">Stay Updated</h2>
<p className="text-slate-500">Latest news, tips, and insights for parents</p>
</div>
<a className="hidden sm:flex items-center gap-1 text-sm font-bold text-[#c576be] hover:gap-2 transition-all" href="#">View all news <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1544367563-12123d8d3247?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Feb 15, 2026</div>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#c576be] transition-colors line-clamp-2">Why Nature-Based Learning Improves Academic Performance</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-3">Scientific research shows students learn better outdoors. At Mataneedol, nature is our classroom, reducing stress and boosting focus.</p>
<span className="text-xs font-bold text-[#c576be] flex items-center gap-1">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1523240795612-9a054b0db644?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Feb 8, 2026</div>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#c576be] transition-colors line-clamp-2">Alumni Success Stories: From Mataneedol to Top Universities</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-3">Meet our graduates now studying at Cambridge, Yale, and NUS. Their journeys started here with strong foundations.</p>
<span className="text-xs font-bold text-[#c576be] flex items-center gap-1">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</article>

<article className="group cursor-pointer">
<div className="aspect-[16/9] rounded-2xl overflow-hidden bg-slate-100 mb-4 relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-4 left-4 bg-white/90 backdrop-blur text-slate-900 text-[10px] font-bold px-2 py-1 rounded shadow-sm">Jan 28, 2026</div>
</div>
<h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-[#c576be] transition-colors line-clamp-2">How to Support Your Child's English Learning at Home</h3>
<p className="text-sm text-slate-500 mb-3 line-clamp-3">Expert tips from our English department head on daily habits that accelerate language acquisition without pressure.</p>
<span className="text-xs font-bold text-[#c576be] flex items-center gap-1">Read more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></span>
</article>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-t border-slate-200">
<div className="max-w-6xl mx-auto px-4 sm:px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div>
<span className="text-[#c576be] font-bold text-xs tracking-wide uppercase mb-2 block">Contact Us</span>
<h2 className="text-3xl font-bold text-slate-900 tracking-tight mb-4">Have Questions?</h2>
<p className="text-slate-500 mb-8 text-lg">Our admissions team is ready to help you make the best decision for your child.</p>
<div className="space-y-6">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#c576be] shrink-0">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Call Us</p>
<a className="text-lg font-bold text-slate-900 hover:text-[#c576be]" href="tel:0877708777">087-770-8777</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#c576be] shrink-0">
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Email Admissions</p>
<a className="text-lg font-bold text-slate-900 hover:text-[#c576be]" href="mailto:admissions@mataneedol.school">admissions@mataneedol.school</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center text-[#c576be] shrink-0">
<iconify-icon icon="solar:map-point-linear" width="20"></iconify-icon>
</div>
<div>
<p className="text-xs font-bold text-slate-400 uppercase tracking-wide">Visit Us</p>
<p className="text-lg font-bold text-slate-900">Khon Kaen, Thailand</p>
</div>
</div>
</div>
</div>
<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-200">
<h3 className="font-bold text-slate-900 mb-6">Choose how to connect:</h3>
<a className="flex items-center justify-between w-full p-4 rounded-xl border border-slate-200 mb-4 hover:border-green-500 hover:bg-green-50 group transition-all" href="https://line.me/" target="_blank">
<div className="flex items-center gap-3">
<iconify-icon className="text-green-500 text-xl" icon="solar:chat-round-dots-bold"></iconify-icon>
<span className="font-bold text-slate-700 group-hover:text-green-700">Chat on LINE</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-green-500" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-between w-full p-4 rounded-xl border border-slate-200 hover:border-[#c576be] hover:bg-[#c576be]/5 group transition-all" href="#">
<div className="flex items-center gap-3">
<iconify-icon className="text-[#c576be] text-xl" icon="solar:videocamera-record-bold"></iconify-icon>
<span className="font-bold text-slate-700 group-hover:text-[#c576be]">Book Zoom Call</span>
</div>
<iconify-icon className="text-slate-300 group-hover:text-[#c576be]" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<div className="flex items-center gap-2 mt-6 justify-center text-xs text-slate-400">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
</span>
                        Typically replies within 10 minutes
                    </div>
</div>
</div>
</div>
</section>

    </>
  );
}
