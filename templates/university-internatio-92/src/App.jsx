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
      

<header className="bg-white shadow-sm">
<div className="max-w-7xl mx-auto">

<div className="flex items-center justify-between px-4 py-3 border-b border-gray-100">
<div className="flex items-center gap-4">
<img alt="HIT Logo" className="h-14 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h1 className="text-teal-800 font-semibold text-lg tracking-tight">哈尔滨工业大学</h1>
<p className="text-teal-700 text-sm">国际合作部（港澳台事务办公室）</p>
</div>
</div>
<div className="hidden md:flex items-center gap-4">
<a className="text-gray-600 text-sm hover:text-teal-700" href="#">HIT Homepage</a>
<a className="text-gray-600 text-sm hover:text-teal-700" href="#">ENGLISH</a>
<div className="relative">
<input className="border border-gray-300 rounded px-3 py-1 text-sm w-40 focus:outline-none focus:border-teal-600" placeholder="Search..." type="text"/>
<i className="absolute right-2 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
</div>
</div>
</div>

<nav className="bg-teal-700">
<div className="flex items-center justify-center flex-wrap">
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Home</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">About Us</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">News Center</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Foreign Affairs Office</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">International Projects</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Expert Office</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Cooperative Education</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Party Building</a>
<a className="px-4 py-3 text-white text-sm hover:bg-teal-800 transition" href="#">Position List</a>
</div>
</nav>
</div>
</header>

<section className="relative h-64 md:h-80 lg:h-96 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-r from-teal-900/80 to-teal-700/60"></div>
<img alt="Campus" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1562774053-701939374585?w=1600&amp;h=600&amp;fit=crop"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center text-white">
<h2 className="text-2xl md:text-4xl font-semibold tracking-tight mb-2">Sino-Russian Joint Campus</h2>
<p className="text-xl md:text-3xl font-medium tracking-tight">"Innovation Together, Excellence Forever"</p>
</div>
</div>

<div className="absolute bottom-4 right-4 flex gap-2">
<span className="w-3 h-3 bg-white rounded-full opacity-100"></span>
<span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
<span className="w-3 h-3 bg-white rounded-full opacity-50"></span>
</div>
</section>

<section className="bg-gradient-to-r from-teal-800 to-teal-600 -mt-12 relative z-10 mx-4 lg:mx-auto max-w-6xl rounded-lg shadow-xl">
<div className="grid grid-cols-2 md:grid-cols-5 divide-x divide-teal-500/30">
<a className="flex flex-col items-center py-6 px-4 hover:bg-teal-700/50 transition group" href="#">
<i className="w-8 h-8 text-white mb-2" data-lucide="users" strokeWidth="1.5"></i>
<span className="text-white font-medium text-sm text-center">Student Overseas Programs</span>
<span className="text-teal-200 text-xs text-center mt-1">STUDENT OVERSEAS PROGRAMS</span>
</a>
<a className="flex flex-col items-center py-6 px-4 hover:bg-teal-700/50 transition group" href="#">
<i className="w-8 h-8 text-white mb-2" data-lucide="plane" strokeWidth="1.5"></i>
<span className="text-white font-medium text-sm text-center">Application Abroad</span>
<span className="text-teal-200 text-xs text-center mt-1">APPLICATION ABROAD</span>
</a>
<a className="flex flex-col items-center py-6 px-4 hover:bg-teal-700/50 transition group" href="#">
<i className="w-8 h-8 text-white mb-2" data-lucide="file-text" strokeWidth="1.5"></i>
<span className="text-white font-medium text-sm text-center">International Project Application</span>
<span className="text-teal-200 text-xs text-center mt-1">INTERNATIONAL PROJECT APPLICATION</span>
</a>
<a className="flex flex-col items-center py-6 px-4 hover:bg-teal-700/50 transition group" href="#">
<i className="w-8 h-8 text-white mb-2" data-lucide="graduation-cap" strokeWidth="1.5"></i>
<span className="text-white font-medium text-sm text-center">Service for International Students</span>
<span className="text-teal-200 text-xs text-center mt-1">SERVICE FOR INTERNATIONAL STUDENTS AND FACULTY</span>
</a>
<a className="flex flex-col items-center py-6 px-4 hover:bg-teal-700/50 transition group col-span-2 md:col-span-1" href="#">
<i className="w-8 h-8 text-white mb-2" data-lucide="briefcase" strokeWidth="1.5"></i>
<span className="text-white font-medium text-sm text-center">Recruitment of International Talent</span>
<span className="text-teal-200 text-xs text-center mt-1">RECRUITMENT OF INTERNATIONAL TALENT</span>
</a>
</div>
</section>

<main className="max-w-7xl mx-auto px-4 py-12">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-8">

<div className="lg:col-span-2">
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-gray-800 tracking-tight">News Highlights</h2>
<a className="text-teal-700 text-sm hover:underline flex items-center gap-1" href="#">
                        View More <i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="relative group overflow-hidden rounded-lg">
<img alt="News" className="w-full h-64 object-cover group-hover:scale-105 transition duration-300" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 bg-gradient-to-t from-black/80 to-transparent p-4">
<p className="text-white text-sm">President Han Jiecai Leads Delegation to Visit South Korea</p>
</div>

<button className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
<i className="w-5 h-5" data-lucide="chevron-left" strokeWidth="1.5"></i>
</button>
<button className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-1 rounded-full opacity-0 group-hover:opacity-100 transition">
<i className="w-5 h-5" data-lucide="chevron-right" strokeWidth="1.5"></i>
</button>
</div>

<div className="space-y-4">
<a className="flex gap-4 group" href="#">
<div className="text-center bg-teal-50 px-3 py-2 rounded">
<span className="text-2xl font-semibold text-teal-700">24</span>
<p className="text-xs text-teal-600">Dec</p>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-800 group-hover:text-teal-700 transition line-clamp-2">Executive Vice President Sun Xuefei Leads Delegation to Visit Greece and Serbia</h3>
<p className="text-sm text-gray-500 mt-1 line-clamp-2">HIT Media (Liang Yingying, Bai Xuwen) From December 15 to 20, Executive Vice President led delegation to visit Athens University...</p>
</div>
</a>
<a className="flex gap-4 group" href="#">
<div className="text-center bg-teal-50 px-3 py-2 rounded">
<span className="text-2xl font-semibold text-teal-700">16</span>
<p className="text-xs text-teal-600">Dec</p>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-800 group-hover:text-teal-700 transition line-clamp-2">Our Delegation Visits Hong Kong to Promote Multi-field Cooperation and Deepen Exchange</h3>
<p className="text-sm text-gray-500 mt-1 line-clamp-2">To deepen cooperation with Hong Kong higher education institutions, our delegation visited from December 7-10...</p>
</div>
</a>
<a className="flex gap-4 group" href="#">
<div className="text-center bg-teal-50 px-3 py-2 rounded">
<span className="text-2xl font-semibold text-teal-700">16</span>
<p className="text-xs text-teal-600">Dec</p>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-800 group-hover:text-teal-700 transition line-clamp-2">HIT Party Committee Secretary Chen Jie Leads Delegation to Italy and France</h3>
<p className="text-sm text-gray-500 mt-1 line-clamp-2">HIT Media (Liu Peixin/Text, International Cooperation Division) From December 10-15, Party Secretary led delegation...</p>
</div>
</a>
<a className="flex gap-4 group" href="#">
<div className="text-center bg-teal-50 px-3 py-2 rounded">
<span className="text-2xl font-semibold text-teal-700">10</span>
<p className="text-xs text-teal-600">Dec</p>
</div>
<div className="flex-1">
<h3 className="text-base font-medium text-gray-800 group-hover:text-teal-700 transition line-clamp-2">Vice President Shuai Yong Leads Delegation to Thailand and Malaysia</h3>
<p className="text-sm text-gray-500 mt-1 line-clamp-2">HIT Media (Liang Yingying, Zhao Bin/Text, International Cooperation Division) Recently, Vice President led delegation...</p>
</div>
</a>
</div>
</div>
</div>

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold text-gray-800 tracking-tight">Announcements</h2>
<a className="text-teal-700 text-sm hover:underline flex items-center gap-1" href="#">
                        View More <i className="w-4 h-4" data-lucide="plus" strokeWidth="1.5"></i>
</a>
</div>
<div className="space-y-4 bg-white rounded-lg p-4 shadow-sm">
<a className="block group border-b border-gray-100 pb-4" href="#">
<span className="text-xs text-teal-600 font-medium">2025-12-29</span>
<h3 className="text-base text-gray-800 group-hover:text-teal-700 transition mt-1 line-clamp-2">Notice on 2026 Sino-Russian International Cooperation Training Program (First Batch) Selection</h3>
</a>
<a className="block group border-b border-gray-100 pb-4" href="#">
<span className="text-xs text-teal-600 font-medium">2025-12-26</span>
<h3 className="text-base text-gray-800 group-hover:text-teal-700 transition mt-1 line-clamp-2">International Cooperation Department (Hong Kong, Macao and Taiwan Office) 2025 Faculty Annual Assessment Results Announcement</h3>
</a>
<a className="block group border-b border-gray-100 pb-4" href="#">
<span className="text-xs text-teal-600 font-medium">2025-12-25</span>
<h3 className="text-base text-gray-800 group-hover:text-teal-700 transition mt-1 line-clamp-2">Notice on 2026 Innovative Talent International Cooperation Training Program (First Batch) Selection</h3>
</a>
<a className="block group border-b border-gray-100 pb-4" href="#">
<span className="text-xs text-teal-600 font-medium">2025-12-24</span>
<h3 className="text-base text-gray-800 group-hover:text-teal-700 transition mt-1 line-clamp-2">Notice on 2026 University-Hosted International Conference Application and Filing</h3>
</a>
<a className="block group" href="#">
<span className="text-xs text-teal-600 font-medium">2025-12-24</span>
<h3 className="text-base text-gray-800 group-hover:text-teal-700 transition mt-1 line-clamp-2">Notice on 2026 Faculty Overseas Conference Participation Application and Filing</h3>
</a>
</div>
</div>
</div>

<section className="mt-12">
<div className="grid grid-cols-2 md:grid-cols-5 gap-4">
<a className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center group" href="#">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition">
<i className="w-8 h-8 text-teal-700" data-lucide="users" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-gray-700 text-center font-medium">Foreign Affairs Management System</span>
</a>
<a className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center group" href="#">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition">
<i className="w-8 h-8 text-teal-700" data-lucide="plane-takeoff" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-gray-700 text-center font-medium">Official Travel Abroad System</span>
</a>
<a className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center group" href="#">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition">
<i className="w-8 h-8 text-teal-700" data-lucide="code" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-gray-700 text-center font-medium">International Project Application System</span>
</a>
<a className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center group" href="#">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition">
<i className="w-8 h-8 text-teal-700" data-lucide="file-check" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-gray-700 text-center font-medium">Rules &amp; Regulations</span>
</a>
<a className="bg-white rounded-lg p-6 shadow-sm hover:shadow-md transition flex flex-col items-center group col-span-2 md:col-span-1" href="#">
<div className="w-16 h-16 bg-teal-50 rounded-full flex items-center justify-center mb-3 group-hover:bg-teal-100 transition">
<i className="w-8 h-8 text-teal-700" data-lucide="download" strokeWidth="1.5"></i>
</div>
<span className="text-sm text-gray-700 text-center font-medium">Download Center</span>
</a>
</div>
</section>

<section className="mt-12">
<div className="flex flex-wrap items-center gap-4">
<span className="text-gray-700 font-medium text-base">Friendly Links</span>
<span className="text-gray-400">•</span>
<a className="bg-teal-700 text-white px-4 py-2 rounded text-sm hover:bg-teal-800 transition" href="#">Foreign Affairs Related Websites</a>
<a className="bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition" href="#">Campus Related Websites</a>
<a className="bg-teal-700 text-white px-4 py-2 rounded text-sm hover:bg-teal-800 transition" href="#">Other University Foreign Affairs Departments</a>
<a className="bg-teal-600 text-white px-4 py-2 rounded text-sm hover:bg-teal-700 transition" href="#">Chinese Embassy Abroad</a>
<a className="bg-teal-700 text-white px-4 py-2 rounded text-sm hover:bg-teal-800 transition" href="#">Foreign Embassy in China</a>
</div>
</section>
</main>

<footer className="bg-gray-100 border-t border-gray-200 mt-12">
<div className="max-w-7xl mx-auto px-4 py-8">
<div className="flex flex-col md:flex-row items-center justify-between gap-4">
<div className="flex items-center gap-4">
<img alt="HIT Logo" className="h-16 w-auto" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div>
<h3 className="text-lg font-semibold text-gray-800 tracking-tight">哈尔滨工业大学</h3>
<p className="text-sm text-gray-600">国际合作部</p>
<p className="text-xs text-gray-500">INTERNATIONAL COOPERATION DIVISION</p>
</div>
</div>
<div className="text-center md:text-right">
<p className="text-sm text-gray-500">(C) 2022 COPYRIGHT INTERNATIONAL COOPERATION DIVISION ALL RIGHTS RESERVED</p>
<a className="text-teal-700 text-sm hover:underline flex items-center gap-1 justify-center md:justify-end mt-2" href="#">
                        Back to Top <i className="w-4 h-4" data-lucide="chevron-up" strokeWidth="1.5"></i>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
