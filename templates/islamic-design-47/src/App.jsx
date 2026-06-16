import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple script to demonstrate interactivity
        const animateElements = document.querySelectorAll('.card-hoverable');
        animateElements.forEach((el, index) => {
            el.style.animation = `fadeIn 0.5s ease-out ${index * 0.1}s backwards`;
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-noise"></div>
<div className="orb-1"></div>
<div className="orb-2"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 w-full max-w-sm md:max-w-3xl px-4 animate-[fadeIn_1s_ease-out]">
<div className="glass-card rounded-full px-2 py-2 flex items-center justify-between shadow-xl shadow-stone-200/40 ring-1 ring-white/60">
<div className="flex items-center gap-3 pl-4">
<div className="relative">
<div className="absolute inset-0 bg-emerald-400 blur rounded-full opacity-40"></div>
<div className="w-7 h-7 bg-gradient-to-tr from-emerald-600 to-emerald-400 rounded-full flex items-center justify-center text-white relative z-10 shadow-inner border border-emerald-300">
<iconify-icon icon="solar:stars-minimalistic-linear" width="16"></iconify-icon>
</div>
</div>
<div className="flex flex-col leading-none">
<span className="text-sm font-bold tracking-tight text-stone-900">TARBIYAH</span>
<span className="text-[9px] font-arabic font-medium text-stone-500 tracking-wide">التربية</span>
</div>
</div>
<div className="hidden md:flex items-center gap-1 bg-stone-100/50 rounded-full p-1 border border-stone-200/60 backdrop-blur-sm">
<a className="px-5 py-1.5 rounded-full bg-white shadow-sm ring-1 ring-black/5 text-xs font-semibold text-stone-800 transition-all" href="#">Overview</a>
<a className="px-5 py-1.5 rounded-full hover:bg-stone-200/50 text-xs font-medium text-stone-500 hover:text-stone-900 transition-all" href="#">Curriculum</a>
<a className="px-5 py-1.5 rounded-full hover:bg-stone-200/50 text-xs font-medium text-stone-500 hover:text-stone-900 transition-all" href="#">System</a>
</div>
<div className="flex items-center gap-2 pr-1">
<button className="w-9 h-9 rounded-full flex items-center justify-center hover:bg-stone-100 text-stone-500 transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<button className="w-9 h-9 rounded-full bg-stone-900 text-white flex items-center justify-center hover:scale-105 transition-transform shadow-lg shadow-stone-900/20 ring-2 ring-stone-900 ring-offset-2 ring-offset-stone-50">
<iconify-icon icon="solar:user-rounded-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-36 pb-20 px-6 max-w-7xl mx-auto">

<header className="text-center mb-28 max-w-4xl mx-auto relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 text-[12rem] font-arabic text-stone-900/5 pointer-events-none select-none blur-sm z-0">
                علم
            </div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 pl-2 pr-3 py-1 rounded-full bg-white/80 border border-emerald-100 shadow-sm mb-8 backdrop-blur-md">
<span className="flex h-5 w-5 items-center justify-center rounded-full bg-emerald-100 text-emerald-600">
<iconify-icon icon="solar:bolt-linear" width="12"></iconify-icon>
</span>
<span className="text-xs font-semibold text-emerald-800 tracking-wide uppercase">Tarbiyah OS 2.0</span>
<span className="w-px h-3 bg-emerald-200 mx-1"></span>
<span className="text-xs font-arabic font-medium text-emerald-700">الإصدار الجديد</span>
</div>
<h1 className="text-5xl md:text-8xl font-semibold tracking-tighter text-stone-900 mb-8 leading-[0.9]">
                    Design for the <br/>
<span className="text-gradient drop-shadow-sm">Modern Fitrah.</span>
</h1>
<p className="text-lg md:text-xl text-stone-500 font-light leading-relaxed max-w-xl mx-auto mb-10">
                    An interface crafted with geometric harmony and spiritual clarity. 
                    <span className="font-arabic text-stone-400 mx-1">واجهة بصرية متكاملة</span>
</p>
<div className="flex items-center justify-center gap-4">
<button className="px-6 py-3 bg-stone-900 text-white rounded-xl font-medium text-sm shadow-xl shadow-stone-900/20 hover:bg-stone-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-2">
<span>Get Started</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="px-6 py-3 bg-white text-stone-600 border border-stone-200 rounded-xl font-medium text-sm hover:bg-stone-50 transition-all flex items-center gap-2 hover:border-stone-300">
<iconify-icon icon="solar:play-circle-linear" width="18"></iconify-icon>
<span>Demo</span>
</button>
</div>
</div>
</header>

<section className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-6 auto-rows-[minmax(180px,auto)] mb-32">

<div className="col-span-1 md:col-span-2 lg:col-span-2 row-span-2 group relative overflow-hidden rounded-3xl bg-white border border-stone-100 card-hoverable">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-emerald-50/50"></div>
<div className="absolute top-0 right-0 p-8 opacity-[0.03] rotate-12 transition-transform group-hover:rotate-0 duration-700">
<iconify-icon icon="solar:graph-new-linear" width="180"></iconify-icon>
</div>
<div className="p-8 h-full flex flex-col justify-between relative z-10">
<div className="flex justify-between items-start">
<div>
<div className="flex items-center gap-2 mb-2">
<div className="p-2 rounded-xl bg-emerald-100/50 text-emerald-600 border border-emerald-100">
<iconify-icon icon="solar:chart-2-bold" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-bold text-stone-900">Memorization</h3>
<p className="text-[10px] font-arabic text-stone-400">تحفيظ القرآن</p>
</div>
</div>
</div>
<div className="flex items-center gap-2">
<button className="w-8 h-8 rounded-full bg-stone-50 border border-stone-100 flex items-center justify-center hover:bg-white hover:shadow-md transition-all text-stone-400 hover:text-stone-900">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="mt-8 flex items-end gap-3 h-52 w-full px-2">

<div className="w-full bg-stone-50 rounded-t-xl relative group-hover:scale-y-105 transition-transform duration-500 h-[40%] origin-bottom overflow-hidden">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-100 to-emerald-50 h-full border-t border-emerald-200"></div>
</div>
<div className="w-full bg-stone-50 rounded-t-xl relative group-hover:scale-y-105 transition-transform duration-500 delay-75 h-[65%] origin-bottom overflow-hidden">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-200 to-emerald-100 h-full border-t border-emerald-300"></div>
</div>
<div className="w-full bg-stone-50 rounded-t-xl relative group-hover:scale-y-105 transition-transform duration-500 delay-100 h-[50%] origin-bottom overflow-hidden">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-100 to-emerald-50 h-full border-t border-emerald-200"></div>
</div>
<div className="w-full rounded-t-xl relative group-hover:scale-y-110 transition-transform duration-500 delay-150 h-[85%] origin-bottom overflow-hidden shadow-[0_0_20px_rgba(16,185,129,0.3)] z-10">
<div className="absolute bottom-0 w-full bg-gradient-to-t from-emerald-600 to-emerald-400 h-full"></div>
<div className="absolute top-0 w-full h-[1px] bg-white/50"></div>
<div className="absolute top-3 left-1/2 -translate-x-1/2 w-1.5 h-1.5 bg-white rounded-full shadow-lg animate-pulse"></div>
</div>
<div className="w-full bg-stone-50 rounded-t-xl relative group-hover:scale-y-105 transition-transform duration-500 delay-200 h-[45%] origin-bottom overflow-hidden">
<div className="absolute bottom-0 w-full bg-stone-200 h-full"></div>
</div>
<div className="w-full bg-stone-50 rounded-t-xl relative group-hover:scale-y-105 transition-transform duration-500 delay-300 h-[60%] origin-bottom overflow-hidden">
<div className="absolute bottom-0 w-full bg-stone-200 h-full"></div>
</div>
</div>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-stone-900 to-stone-800 border border-stone-700 p-6 flex flex-col justify-between shadow-xl shadow-stone-900/20 relative overflow-hidden group">

<div className="absolute -right-8 -top-8 w-32 h-32 bg-emerald-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-30 transition-opacity"></div>
<div className="relative z-10">
<div className="flex justify-between items-start">
<iconify-icon className="text-emerald-400 mb-3" icon="solar:moon-stars-bold-duotone" width="32"></iconify-icon>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
</div>
<h3 className="text-base font-semibold text-white mt-1">Night Mode</h3>
<p className="text-xs font-arabic text-stone-400 mt-0.5">الوضع الليلي</p>
</div>
<div className="flex items-center justify-between mt-4 relative z-10">
<span className="text-[10px] font-bold tracking-widest text-emerald-400 uppercase">On</span>

<button className="w-12 h-7 rounded-full bg-stone-700/50 border border-stone-600 relative transition-all group-hover:border-emerald-500/50 backdrop-blur-sm">
<div className="absolute right-1 top-1 w-4 h-4 bg-gradient-to-b from-white to-stone-200 rounded-full shadow-lg group-hover:shadow-[0_0_10px_rgba(255,255,255,0.5)] transition-all"></div>
</button>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl bg-white border border-stone-200 p-6 shadow-sm card-hoverable group cursor-pointer relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-amber-400 to-orange-400 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-500 origin-left"></div>
<div className="flex items-center justify-between mb-4">
<div className="relative">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-amber-100 to-orange-50 border border-amber-100 flex items-center justify-center text-amber-700 font-bold text-lg shadow-sm font-arabic">
                            أ
                        </div>
<div className="absolute -bottom-1 -right-1 bg-white p-0.5 rounded-full">
<div className="w-3 h-3 bg-emerald-500 rounded-full border border-white"></div>
</div>
</div>
<div className="px-2 py-1 rounded-md bg-stone-50 border border-stone-100 text-[10px] font-medium text-stone-500">
                        Level 4
                    </div>
</div>
<div>
<h3 className="text-sm font-bold text-stone-900 group-hover:text-amber-700 transition-colors">Ahmed H.</h3>
<p className="text-xs text-stone-500 mt-0.5 font-arabic">برنامج الحفظ المكثف</p>
</div>
</div>

<div className="col-span-1 md:col-span-2 row-span-1 rounded-3xl bg-white border border-stone-200 p-1 shadow-sm card-hoverable flex items-stretch group">

<div className="w-28 bg-stone-50 rounded-l-[20px] flex flex-col items-center justify-center border-r border-stone-100 relative overflow-hidden group-hover:bg-emerald-50/30 transition-colors">
<div className="absolute inset-0 bg-[radial-gradient(#10b981_1px,transparent_1px)] [background-size:12px_12px] opacity-20"></div>
<iconify-icon className="text-emerald-600/80 relative z-10" icon="solar:book-bookmark-bold-duotone" width="32"></iconify-icon>
<span className="text-[10px] font-bold text-emerald-800/60 mt-2 tracking-widest uppercase">Juz 28</span>
</div>
<div className="flex-1 p-6 flex flex-col justify-center relative overflow-hidden">

<div className="absolute right-0 bottom-[-20px] text-8xl opacity-[0.03] font-arabic pointer-events-none">ذكر</div>
<div className="flex justify-between items-start mb-3 relative z-10">
<div>
<h3 className="text-sm font-bold text-stone-900">Morning Adhkar</h3>
<p className="text-xs text-stone-500">Daily Routine</p>
</div>
<span className="px-2 py-1 rounded-md bg-stone-100 text-[10px] font-mono font-medium text-stone-600 group-hover:bg-emerald-100 group-hover:text-emerald-700 transition-colors">
                            07:45 AM
                        </span>
</div>

<div className="text-right mb-3" dir="rtl">
<p className="font-arabic text-xl font-medium text-stone-800 leading-loose">
                            سُبْحَانَ اللَّهِ وَبِحَمْدِهِ <span className="text-emerald-600">✽</span>
</p>
</div>
<div className="w-full bg-stone-100 rounded-full h-1.5 mb-2 overflow-hidden">
<div className="bg-gradient-to-r from-emerald-500 via-teal-400 to-emerald-300 h-full w-[70%] rounded-full relative overflow-hidden">
<div className="absolute inset-0 bg-white/30 w-full h-full animate-[shimmer_2s_infinite]"></div>
</div>
</div>
</div>
<div className="px-5 flex items-center border-l border-stone-100">
<button className="w-12 h-12 rounded-full border border-stone-200 text-stone-600 flex items-center justify-center hover:bg-stone-900 hover:text-white hover:border-stone-900 hover:shadow-lg transition-all active:scale-95 group/btn">
<iconify-icon className="ml-1 group-hover/btn:scale-110 transition-transform" icon="solar:play-bold" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl bg-gradient-to-br from-amber-50 to-orange-50 border border-amber-100 p-6 relative overflow-hidden group card-hoverable">
<div className="absolute -right-6 -bottom-6 text-amber-500/10 group-hover:text-amber-500/20 transition-colors rotate-12 transform group-hover:scale-110 duration-700">
<iconify-icon icon="solar:sun-2-bold" width="140"></iconify-icon>
</div>
<div className="relative z-10">
<div className="w-8 h-8 bg-white/80 rounded-full flex items-center justify-center text-amber-500 mb-4 shadow-sm backdrop-blur-sm">
<iconify-icon icon="solar:clock-circle-bold" width="18"></iconify-icon>
</div>
<h3 className="text-sm font-bold text-amber-900">Asr Prayer</h3>
<p className="text-xs text-amber-800/70 mt-1 mb-2 font-medium">15 mins remaining</p>
<p className="text-lg font-arabic font-bold text-amber-900/90 text-right" dir="rtl">صلاة العصر</p>
</div>
</div>

<div className="col-span-1 row-span-1 rounded-3xl bg-white border border-stone-200 p-6 flex flex-col justify-center shadow-sm card-hoverable">
<label className="text-[10px] font-bold uppercase tracking-wider text-stone-400 mb-2 ml-1">Quick Search</label>
<div className="relative group">
<input className="w-full pl-10 pr-4 py-3.5 bg-stone-50 border border-stone-200 rounded-2xl text-sm text-stone-800 placeholder:text-stone-400 focus:outline-none focus:ring-2 focus:ring-emerald-500/20 focus:border-emerald-500 focus:bg-white transition-all shadow-inner font-arabic" placeholder="Search surah / بحث..." type="text"/>
<iconify-icon className="absolute left-3.5 top-4 text-stone-400 group-focus-within:text-emerald-600 transition-colors" icon="solar:magnifer-linear" width="18"></iconify-icon>
<div className="absolute right-3 top-3.5 px-1.5 py-0.5 rounded border border-stone-200 bg-white text-[10px] text-stone-400">⌘K</div>
</div>
</div>
</section>

<section className="border-t border-stone-200 pt-16 relative">
<div className="flex items-center justify-between mb-12">
<div>
<h2 className="text-2xl font-bold text-stone-900 tracking-tight flex items-center gap-3">
<div className="p-1.5 bg-emerald-100 rounded-lg text-emerald-700">
<iconify-icon icon="solar:layers-minimalistic-bold-duotone" width="20"></iconify-icon>
</div>
                        UI Components
                    </h2>
<p className="text-sm text-stone-500 mt-2 font-arabic">عناصر واجهة المستخدم - Bilingual Support</p>
</div>
<button className="px-4 py-2 rounded-xl bg-white border border-stone-200 shadow-sm text-stone-600 text-xs font-semibold hover:bg-stone-50 transition-colors flex items-center gap-2">
<iconify-icon icon="solar:download-linear" width="14"></iconify-icon>
                    Download Kit
                </button>
</div>
<div className="grid grid-cols-1 lg:grid-cols-4 gap-12">

<div className="space-y-10">

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Actions</h3>
<button className="w-full h-11 bg-stone-900 hover:bg-stone-800 text-white text-sm font-medium rounded-xl shadow-lg shadow-stone-900/10 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 group">
<span>Continue</span>
<span className="w-px h-3 bg-stone-700 mx-1"></span>
<span className="font-arabic text-xs">استمرار</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
<button className="w-full h-11 bg-gradient-to-r from-emerald-600 to-emerald-500 hover:from-emerald-500 hover:to-emerald-400 text-white text-sm font-medium rounded-xl shadow-lg shadow-emerald-600/20 transition-all hover:-translate-y-0.5 flex items-center justify-center gap-2 border-t border-white/20">
<iconify-icon icon="solar:check-circle-bold" width="18"></iconify-icon>
                            Confirm / <span className="font-arabic text-xs">تأكيد</span>
</button>
<div className="flex gap-3">
<button className="flex-1 h-10 bg-white border border-stone-200 hover:border-stone-300 hover:bg-stone-50 text-stone-600 text-sm font-medium rounded-xl transition-all flex items-center justify-center shadow-sm">
                                Cancel
                            </button>
<button className="h-10 w-10 bg-white border border-stone-200 hover:border-emerald-300 hover:text-emerald-600 text-stone-500 rounded-xl flex items-center justify-center transition-all shadow-sm">
<iconify-icon icon="solar:settings-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Fields</h3>
<div className="relative">
<label className="block text-[10px] font-bold text-stone-500 mb-1.5 ml-1">FULL NAME / الاسم</label>
<input className="w-full px-3 py-2.5 bg-white border border-stone-200 rounded-xl text-sm text-stone-800 placeholder:text-stone-300 focus:outline-none focus:ring-2 focus:ring-emerald-500/10 focus:border-emerald-500 transition-all" placeholder="Omar Abdullah" type="text"/>
</div>
<div className="relative">
<input className="w-full px-3 py-2.5 bg-red-50/30 border border-red-200 rounded-xl text-sm text-red-900 placeholder:text-red-300 focus:outline-none focus:ring-2 focus:ring-red-500/20 transition-all pr-10" type="password" value="password123"/>
<iconify-icon className="absolute right-3 top-3 text-red-500" icon="solar:danger-circle-bold" width="18"></iconify-icon>
</div>
<p className="text-[10px] text-red-500 font-medium pl-1 flex items-center gap-1">
<iconify-icon icon="solar:info-circle-linear" width="10"></iconify-icon> Password too weak
                        </p>
</div>
</div>

<div className="space-y-10">

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Controls</h3>
<div className="flex items-center justify-between p-3.5 bg-white border border-stone-200 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
<div className="flex flex-col">
<span className="text-sm font-semibold text-stone-800">Tajweed Rules</span>
<span className="text-[10px] font-arabic text-stone-400">أحكام التجويد</span>
</div>
<label className="relative inline-flex items-center cursor-pointer">
<input checked="" className="sr-only peer" type="checkbox"/>
<div className="w-11 h-6 bg-stone-200 peer-focus:outline-none rounded-full peer dark:bg-stone-200 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:shadow-sm after:transition-all peer-checked:bg-emerald-500"></div>
</label>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Selection</h3>
<div className="p-4 bg-white/60 backdrop-blur-sm rounded-2xl border border-stone-200 space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-stone-50 border border-stone-300 rounded-[6px] peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all duration-200 shadow-sm"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Memorization</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center justify-center w-5 h-5">
<input className="peer sr-only" type="checkbox"/>
<div className="w-5 h-5 bg-stone-50 border border-stone-300 rounded-[6px] peer-checked:bg-emerald-500 peer-checked:border-emerald-500 transition-all duration-200 shadow-sm"></div>
<iconify-icon className="absolute text-white opacity-0 peer-checked:opacity-100 transition-all scale-50 peer-checked:scale-100" icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-stone-700 group-hover:text-stone-900">Translation / <span className="font-arabic text-xs">الترجمة</span></span>
</label>
</div>
</div>
</div>

<div className="space-y-10">

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Navigation</h3>

<div className="bg-stone-100 p-1 rounded-xl flex items-center shadow-inner">
<button className="flex-1 py-2 px-3 rounded-lg bg-white text-emerald-700 shadow-sm text-xs font-bold transition-all flex justify-center gap-2">
                                Surah <span className="font-arabic font-normal opacity-75">سورة</span>
</button>
<button className="flex-1 py-2 px-3 rounded-lg text-stone-500 hover:text-stone-900 text-xs font-semibold transition-all">Juz</button>
<button className="flex-1 py-2 px-3 rounded-lg text-stone-500 hover:text-stone-900 text-xs font-semibold transition-all">Page</button>
</div>

<div className="flex items-center gap-2 text-xs text-stone-500 bg-white border border-stone-200 px-3 py-2 rounded-lg w-fit">
<iconify-icon className="text-stone-400" icon="solar:home-linear"></iconify-icon>
<span className="text-stone-300">/</span>
<span className="hover:text-stone-900 cursor-pointer transition-colors">Library</span>
<span className="text-stone-300">/</span>
<span className="text-emerald-700 font-bold bg-emerald-50 px-1.5 py-0.5 rounded">Yasin</span>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Identities</h3>
<div className="flex -space-x-3 rtl:space-x-reverse overflow-hidden py-1 pl-1">
<div className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-stone-100 to-stone-300 flex items-center justify-center text-stone-600 text-xs font-bold shadow-md">AH</div>
<div className="w-10 h-10 rounded-full ring-2 ring-white bg-gradient-to-br from-emerald-100 to-emerald-300 flex items-center justify-center text-emerald-800 text-xs font-bold shadow-md">YB</div>
<div className="w-10 h-10 rounded-full ring-2 ring-white bg-stone-900 flex items-center justify-center text-white text-xs font-medium shadow-md">+3</div>
</div>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-emerald-50 text-emerald-700 border border-emerald-100">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500"></span> Active
                            </span>
<span className="inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider bg-amber-50 text-amber-700 border border-amber-100">
                                Pending
                            </span>
</div>
</div>
</div>

<div className="space-y-10">

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Notifications</h3>
<div className="p-4 bg-emerald-50/80 backdrop-blur-sm border border-emerald-100/50 rounded-2xl flex gap-3 shadow-sm">
<div className="w-6 h-6 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 shrink-0">
<iconify-icon icon="solar:check-read-bold" width="14"></iconify-icon>
</div>
<div>
<h4 className="text-xs font-bold text-emerald-900">Progress Saved</h4>
<p className="text-[10px] text-emerald-700/80 mt-0.5 font-arabic">تم حفظ التقدم بنجاح</p>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-[10px] font-bold font-mono uppercase tracking-widest text-stone-400">Goals</h3>
<div className="p-5 bg-stone-900 text-white rounded-2xl shadow-xl shadow-stone-900/20 relative overflow-hidden group">

<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:opacity-10 transition-opacity"></div>
<div className="flex justify-between items-end mb-3 relative z-10">
<div className="flex flex-col">
<span className="text-xs font-medium text-stone-400">Daily Hifz</span>
<span className="text-[10px] font-arabic text-stone-500">الحفظ اليومي</span>
</div>
<span className="text-xl font-bold tracking-tight text-emerald-400">85%</span>
</div>
<div className="w-full bg-stone-800 rounded-full h-2 relative z-10">
<div className="bg-gradient-to-r from-emerald-500 to-emerald-300 h-full w-[85%] rounded-full shadow-[0_0_12px_rgba(16,185,129,0.5)]"></div>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-stone-200 bg-white/50 backdrop-blur-md relative z-10 mt-auto">
<div className="max-w-7xl mx-auto px-6 py-10 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col gap-1 items-center md:items-start">
<div className="flex items-center gap-2 text-stone-900 opacity-80 hover:opacity-100 transition-opacity">
<iconify-icon icon="solar:stars-minimalistic-bold" width="18"></iconify-icon>
<span className="text-sm font-bold tracking-tight">TARBIYAH OS</span>
</div>
<p className="text-[10px] text-stone-400 font-medium">© 2024 Tarbiyah System. Built for Growth.</p>
</div>
<div className="flex gap-8">
<a className="group flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors" href="#">
                    GitHub <iconify-icon className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
</a>
<a className="group flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors" href="#">
                    Twitter <iconify-icon className="opacity-0 -translate-x-1 group-hover:translate-x-0 group-hover:opacity-100 transition-all" icon="solar:arrow-right-up-linear" width="10"></iconify-icon>
</a>
<a className="group flex items-center gap-1 text-xs font-semibold text-stone-500 hover:text-stone-900 transition-colors" href="#">
<span className="font-arabic">اتصل بنا</span>
</a>
</div>
</div>
</footer>

<style>
        @keyframes fadeIn {
            from { opacity: 0; transform: translateY(10px); }
            to { opacity: 1; transform: translateY(0); }
        }
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(100%); }
        }
    </style>

    </>
  );
}
