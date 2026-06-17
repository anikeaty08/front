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
      

<header className="w-full bg-white border-b border-gray-100">

<div className="container mx-auto px-6 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
<div className="flex items-center gap-4">

<div className="h-16 w-16 bg-[#003c73] rounded-full flex items-center justify-center text-white shrink-0">
<i className="w-8 h-8" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div>
<h1 className="text-2xl md:text-3xl font-medium tracking-tight text-[#003c73]">哈尔滨工业大学</h1>
<h2 className="text-lg md:text-xl font-normal text-sky-800 tracking-tight mt-1">国际合作部（港澳台办公室）</h2>
<p className="text-xs text-slate-400 uppercase tracking-widest mt-0.5">International Cooperation Division</p>
</div>
</div>
<div className="flex items-center gap-4 text-sm font-medium text-slate-500">
<a className="hover:text-[#003c73] transition-colors" href="#">哈工大主页</a>
<span className="w-px h-3 bg-gray-300"></span>
<a className="hover:text-[#003c73] transition-colors" href="#">ENGLISH</a>
<div className="relative ml-2">
<input className="bg-gray-100 rounded-full py-2 pl-4 pr-10 text-sm focus:outline-none focus:ring-2 focus:ring-[#003c73]/20 w-48 transition-all hover:bg-gray-50" placeholder="Search..." type="text"/>
<i className="absolute right-3 top-2.5 w-4 h-4 text-gray-400" data-lucide="search" strokeWidth="1.5"></i>
</div>
</div>
</div>

<nav className="bg-[#003c73] text-white w-full">
<div className="container mx-auto px-6">
<ul className="flex flex-wrap items-center justify-between text-base font-light py-4">
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">首页</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">关于我们</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">新闻中心</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">外事处/港澳台办公室</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">国际项目管理中心</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">国际专家办公室</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">合作办学</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">党建园地</a></li>
<li><a className="hover:text-sky-300 transition-colors px-2 py-2" href="#">职能清单</a></li>
</ul>
</div>
</nav>
</header>

<div className="relative w-full h-[500px] bg-slate-200 overflow-hidden group">
<img alt="Campus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541339907198-e08756dedf3f?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#003c73]/70 to-transparent"></div>

<div className="absolute inset-0 flex flex-col items-center justify-center text-center text-white pb-20">
<h2 className="text-5xl font-serif tracking-tight drop-shadow-lg opacity-90">日新月异共待</h2>
<h2 className="text-6xl font-serif tracking-tight mt-4 drop-shadow-lg opacity-90">满园桃李</h2>
</div>

<div className="absolute right-8 top-1/2 -translate-y-1/2 flex flex-col gap-3">
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition-all"></button>
<button className="w-2 h-8 rounded-full bg-white transition-all"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition-all"></button>
<button className="w-2 h-2 rounded-full bg-white/30 hover:bg-white transition-all"></button>
</div>

<div className="absolute bottom-0 left-0 w-full grid grid-cols-1 md:grid-cols-5 text-white backdrop-blur-md bg-[#003c73]/90 divide-y md:divide-y-0 md:divide-x divide-white/10 border-t border-white/10">

<a className="group relative p-6 md:p-8 hover:bg-sky-600/90 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 md:h-40" href="#">
<i className="w-8 h-8 mb-3 text-sky-200 group-hover:scale-110 transition-transform" data-lucide="plane" strokeWidth="1.5"></i>
<span className="text-lg font-medium">学生交流项目</span>
<span className="text-xs text-sky-200 mt-1 opacity-80 uppercase tracking-wide">Student Programs</span>
</a>

<a className="group relative p-6 md:p-8 hover:bg-sky-600/90 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 md:h-40" href="#">
<i className="w-8 h-8 mb-3 text-sky-200 group-hover:scale-110 transition-transform" data-lucide="globe" strokeWidth="1.5"></i>
<span className="text-lg font-medium">出国（境）申请</span>
<span className="text-xs text-sky-200 mt-1 opacity-80 uppercase tracking-wide">Application Abroad</span>
</a>

<a className="group relative p-6 md:p-8 hover:bg-sky-600/90 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 md:h-40" href="#">
<i className="w-8 h-8 mb-3 text-sky-200 group-hover:scale-110 transition-transform" data-lucide="folder-kanban" strokeWidth="1.5"></i>
<span className="text-lg font-medium">国际项目申请</span>
<span className="text-xs text-sky-200 mt-1 opacity-80 uppercase tracking-wide">Intl Project App</span>
</a>

<a className="group relative p-6 md:p-8 hover:bg-sky-600/90 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 md:h-40" href="#">
<i className="w-8 h-8 mb-3 text-sky-200 group-hover:scale-110 transition-transform" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-lg font-medium">外籍师生服务</span>
<span className="text-xs text-sky-200 mt-1 opacity-80 uppercase tracking-wide">Service for Faculty</span>
</a>

<a className="group relative p-6 md:p-8 hover:bg-sky-600/90 transition-all duration-300 flex flex-col items-center justify-center text-center h-32 md:h-40" href="#">
<i className="w-8 h-8 mb-3 text-sky-200 group-hover:scale-110 transition-transform" data-lucide="award" strokeWidth="1.5"></i>
<span className="text-lg font-medium">外籍人才引进</span>
<span className="text-xs text-sky-200 mt-1 opacity-80 uppercase tracking-wide">Talent Recruitment</span>
</a>
</div>
</div>

<main className="container mx-auto px-6 py-16">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-8">
<div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
<h3 className="text-3xl font-medium tracking-tight text-[#003c73]">新闻聚焦</h3>
<a className="text-sm text-sky-600 hover:text-[#003c73] flex items-center gap-1 transition-colors" href="#">
                        查看更多 <i className="w-4 h-4" data-lucide="chevron-right" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8">

<div className="relative group overflow-hidden rounded-xl shadow-sm">
<img alt="Meeting" className="w-full h-[340px] object-cover transition-transform duration-700 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 w-full bg-gradient-to-t from-[#003c73]/90 to-transparent p-6 pt-12">
<p className="text-white text-lg font-medium">校常务副校长孙雪率团访问希腊、塞尔维亚</p>
</div>
<button className="absolute left-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-[#003c73] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
<i className="w-6 h-6" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 w-10 h-10 rounded-full bg-white/20 backdrop-blur hover:bg-white text-white hover:text-[#003c73] flex items-center justify-center transition-all opacity-0 group-hover:opacity-100">
<i className="w-6 h-6" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="space-y-6">

<a className="flex gap-4 group" href="#">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-sky-50 text-[#003c73] rounded-lg shrink-0 border border-sky-100 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<span className="text-xl font-semibold leading-none">24</span>
<span className="text-xs uppercase font-medium mt-1">Dec</span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800 group-hover:text-[#003c73] transition-colors line-clamp-1">常务副校长孙雪率团访问希腊、塞尔维亚</h4>
<p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                    哈工大全媒体（梁英爽 白雪/文 白雪/图）12月15日至20日，常务副校长孙雪率团访问希腊、塞尔维亚。
                                </p>
</div>
</a>

<a className="flex gap-4 group" href="#">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-sky-50 text-[#003c73] rounded-lg shrink-0 border border-sky-100 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<span className="text-xl font-semibold leading-none">16</span>
<span className="text-xs uppercase font-medium mt-1">Dec</span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800 group-hover:text-[#003c73] transition-colors line-clamp-1">我校代表团赴香港地区推进多领域合作交流</h4>
<p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                    为深化与香港地区高等学府的务实合作，拓展双方在多个关键领域的协同发展，我校代表团于...
                                </p>
</div>
</a>

<a className="flex gap-4 group" href="#">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-sky-50 text-[#003c73] rounded-lg shrink-0 border border-sky-100 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<span className="text-xl font-semibold leading-none">16</span>
<span className="text-xs uppercase font-medium mt-1">Dec</span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800 group-hover:text-[#003c73] transition-colors line-clamp-1">哈工大党委书记陈杰率团访问意大利、法国</h4>
<p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                    哈工大全媒体（刘培春/文 国际合作部/图）12月10日至12月15日，校党委书记陈杰率团...
                                </p>
</div>
</a>

<a className="flex gap-4 group" href="#">
<div className="flex flex-col items-center justify-center w-16 h-16 bg-sky-50 text-[#003c73] rounded-lg shrink-0 border border-sky-100 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<span className="text-xl font-semibold leading-none">10</span>
<span className="text-xs uppercase font-medium mt-1">Dec</span>
</div>
<div>
<h4 className="text-lg font-medium text-slate-800 group-hover:text-[#003c73] transition-colors line-clamp-1">副校长帅永率团访问泰国、马来西亚</h4>
<p className="text-sm text-slate-500 mt-2 line-clamp-2 leading-relaxed">
                                    近日，副校长帅永率团访问泰国、马来西亚，在泰国出席第三届亚太空间合作组织...
                                </p>
</div>
</a>
</div>
</div>
</div>

<div className="lg:col-span-4">
<div className="flex justify-between items-end mb-8 border-b border-gray-200 pb-4">
<h3 className="text-3xl font-medium tracking-tight text-[#003c73]">通知公告</h3>
<a className="text-sm text-sky-600 hover:text-[#003c73] flex items-center gap-1 transition-colors" href="#">
                        查看更多 <i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</a>
</div>
<div className="bg-white border border-gray-100 rounded-xl shadow-sm overflow-hidden">
<ul className="divide-y divide-gray-50">

<li className="p-5 hover:bg-slate-50 transition-colors group">
<a href="#">
<div className="text-xs font-medium text-sky-600 mb-2">2025-12-29</div>
<h5 className="text-base text-slate-700 font-medium group-hover:text-[#003c73] leading-snug">关于开展2026年促进与俄乌白国际合作培养项目（第一批）人员选拔工作的通知</h5>
</a>
</li>

<li className="p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors group">
<a href="#">
<div className="text-xs font-medium text-sky-600 mb-2">2025-12-26</div>
<h5 className="text-base text-slate-700 font-medium group-hover:text-[#003c73] leading-snug">国际合作部（港澳台办公室） 2025年教职工年度考核结果公示</h5>
</a>
</li>

<li className="p-5 hover:bg-slate-50 transition-colors group">
<a href="#">
<div className="text-xs font-medium text-sky-600 mb-2">2025-12-25</div>
<h5 className="text-base text-slate-700 font-medium group-hover:text-[#003c73] leading-snug">关于开展2026年创新型人才国际合作培养项目（第一批）人员选拔工作的通知</h5>
</a>
</li>

<li className="p-5 bg-slate-50/50 hover:bg-slate-50 transition-colors group">
<a href="#">
<div className="text-xs font-medium text-sky-600 mb-2">2025-12-24</div>
<h5 className="text-base text-slate-700 font-medium group-hover:text-[#003c73] leading-snug">关于启动2026年度我校在华主办、承办国际会议或双边学术研讨会项目申请资助</h5>
</a>
</li>

<li className="p-5 hover:bg-slate-50 transition-colors group">
<a href="#">
<div className="text-xs font-medium text-sky-600 mb-2">2025-12-24</div>
<h5 className="text-base text-slate-700 font-medium group-hover:text-[#003c73] leading-snug">关于启动2026年度我校教师出国（境）参加国际会议项目申请资助及备案的通知</h5>
</a>
</li>
</ul>
</div>
</div>
</div>
</main>

<div className="relative py-20 bg-slate-100 overflow-hidden">

<div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#003c73_1px,transparent_1px)] [background-size:16px_16px]"></div>
<div className="container mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">

<a className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-[#003c73] mb-6 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="briefcase" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-slate-800">外事合作管理系统</h4>
<p className="text-sm text-slate-400 mt-2">Cooperation Management</p>
</a>

<a className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-[#003c73] mb-6 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="stamp" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-slate-800">因公出国境管理系统</h4>
<p className="text-sm text-slate-400 mt-2">Public Official Abroad</p>
</a>

<a className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-[#003c73] mb-6 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="file-code" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-slate-800">国际项目申报系统</h4>
<p className="text-sm text-slate-400 mt-2">Project Declaration</p>
</a>

<a className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-[#003c73] mb-6 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="book-open" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-slate-800">规章制度</h4>
<p className="text-sm text-slate-400 mt-2">Rules &amp; Regulations</p>
</a>

<a className="bg-white p-8 rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 flex flex-col items-center text-center group" href="#">
<div className="w-16 h-16 rounded-2xl bg-sky-50 flex items-center justify-center text-[#003c73] mb-6 group-hover:bg-[#003c73] group-hover:text-white transition-colors">
<i className="w-8 h-8" data-lucide="download-cloud" strokeWidth="1.5"></i>
</div>
<h4 className="text-lg font-medium text-slate-800">下载中心</h4>
<p className="text-sm text-slate-400 mt-2">Download Center</p>
</a>
</div>
</div>
</div>

<footer className="bg-[#003c73] text-slate-300 relative border-t border-white/10">

<div className="absolute bottom-0 right-0 opacity-10 pointer-events-none">
<svg fill="none" height="200" stroke="currentColor" strokeWidth="1" viewbox="0 0 400 200" width="400">
<path d="M50 200V100h50v-50h100v-50h50v50h50v50h50v100H50z"></path>
<path d="M80 200v-80 M120 200v-80 M160 200v-80 M200 200v-80" stroke-opacity="0.5"></path>
</svg>
</div>
<div className="container mx-auto px-6 py-12">

<div className="flex flex-col md:flex-row items-center gap-6 border-b border-white/10 pb-10 mb-10">
<span className="text-base font-semibold text-white whitespace-nowrap">友情链接</span>
<div className="w-1 h-1 rounded-full bg-slate-400 hidden md:block"></div>
<div className="flex flex-wrap justify-center md:justify-start gap-4">
<a className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition-all" href="#">外事工作相关部门网站</a>
<a className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition-all" href="#">校内有关单位网站</a>
<a className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition-all" href="#">其他单位外事管理部门网站</a>
<a className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition-all" href="#">中国驻外领使馆</a>
<a className="px-4 py-2 border border-white/20 rounded-lg text-sm hover:border-white hover:text-white transition-all" href="#">外国驻华领使馆</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex items-center gap-4">
<div className="border-2 border-white/20 p-2 rounded-full">
<i className="w-8 h-8 text-white" data-lucide="graduation-cap" strokeWidth="1.5"></i>
</div>
<div>
<h2 className="text-2xl text-white font-serif tracking-wide">哈尔滨工业大学</h2>
<div className="flex flex-col text-xs text-slate-300 mt-1">
<span className="text-base font-normal text-slate-100">国际合作部</span>
<span className="uppercase tracking-wider">International Cooperation Division</span>
</div>
</div>
</div>

<div className="text-xs text-slate-300 text-center md:text-right">
<p>(C) 2022 COPYRIGHT INTERNATIONAL COOPERATION DIVISION ALL RIGHTS RESERVED.</p>
<p className="mt-1">Designed with modern standards.</p>
</div>

<a className="flex items-center gap-2 text-sm text-sky-200 hover:text-white transition-colors" href="#">
                    返回顶部 <i className="w-4 h-4" data-lucide="arrow-up" strokeWidth="2"></i>
</a>
</div>
</div>
</footer>


    </>
  );
}
