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
      

<aside className="w-[280px] bg-white flex flex-col h-full border-r border-gray-100 shadow-[2px_0_20px_rgba(0,0,0,0.02)] z-20 flex-shrink-0 animate-fade-in">
<div className="p-6 pb-4">
<h1 className="text-[#2B3467] text-3xl font-bold tracking-tight font-sans" style={{}}>Platonus</h1>
</div>
<nav className="flex-1 overflow-y-auto hide-scrollbar px-4 space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2.5 text-indigo-700 bg-indigo-50/50 rounded-lg group relative" href="#">
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-1 h-5 bg-indigo-700 rounded-r-full"></div>
<svg className="lucide lucide-layout-dashboard w-5 h-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Бақылау тақтасы</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors relative" href="#">
<div className="relative">
<svg className="lucide lucide-check-circle-2 w-5 h-5" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
<span className="absolute -top-0.5 -right-0.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</div>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Тапсырмалар</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-book-open w-5 h-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Журнал</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-clock w-5 h-5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Сабақ кестесі</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Күнтізбе</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-file-text w-5 h-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Транскрипт</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-graduation-cap w-5 h-5" data-lucide="graduation-cap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.42 10.922a1 1 0 0 0-.019-1.838L12.83 5.18a2 2 0 0 0-1.66 0L2.6 9.08a1 1 0 0 0 0 1.832l8.57 3.908a2 2 0 0 0 1.66 0z"></path><path d="M22 10v6"></path><path d="M6 12.5V16a6 3 0 0 0 12 0v-3.5"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Жеке оқу жоспары</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-folder-open w-5 h-5" data-lucide="folder-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 14 1.5-2.9A2 2 0 0 1 9.24 10H20a2 2 0 0 1 1.94 2.5l-1.54 6a2 2 0 0 1-1.95 1.5H4a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h3.9a2 2 0 0 1 1.69.9l.81 1.2a2 2 0 0 0 1.67.9H18a2 2 0 0 1 2 2v2"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>ПОӘК</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Апелляциялар</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-users w-5 h-5" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Оқу аудиториясы</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-home w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Жатақхана</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-user-check w-5 h-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>БАҚКО</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Тестілеу</span>
</a>
<a className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-indigo-600 hover:bg-gray-50 rounded-lg group transition-colors" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Баптаулар</span>
</a>
</nav>
<div className="p-4 border-t border-gray-100 mt-auto">
<button className="flex items-center gap-3 px-3 py-2.5 text-gray-500 hover:text-red-600 hover:bg-red-50 w-full rounded-lg transition-colors">
<svg className="lucide lucide-power w-5 h-5" data-lucide="power" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v10"></path><path d="M18.4 6.6a9 9 0 1 1-12.77.04"></path></svg>
<span className="font-medium text-[15px] font-google-sans-flex" style={{}}>Жүйеден шығу</span>
</button>
<div className="mt-4 px-3">
<svg className="lucide lucide-arrow-left-to-line w-5 h-5 text-gray-400" data-lucide="arrow-left-to-line" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 19V5"></path><path d="m13 6-6 6 6 6"></path><path d="M7 12h14"></path></svg>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-[72px] bg-white border-b border-gray-100 flex items-center justify-between px-8 flex-shrink-0 z-10 shadow-sm">

<div className="flex items-center bg-[#F8F9FB] rounded-full px-4 py-2.5 w-[380px] group focus-within:ring-2 focus-within:ring-indigo-100 transition-all">
<svg className="lucide lucide-search w-5 h-5 text-gray-400" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<input className="bg-transparent border-none outline-none text-sm ml-3 w-full placeholder-gray-400 text-gray-700" placeholder="Іздеу" type="text"/>
<svg className="lucide lucide-mic w-5 h-5 text-gray-400 cursor-pointer hover:text-gray-600" data-lucide="mic" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19v3"></path><path d="M19 10v2a7 7 0 0 1-14 0v-2"></path><rect height="13" rx="3" width="6" x="9" y="2"></rect></svg>
</div>

<div className="flex items-center gap-6">
<span className="text-gray-500 font-medium text-sm font-google-sans-flex" style={{}}>19/04/2024</span>
<div className="h-5 w-[1px] bg-gray-200"></div>
<div className="flex gap-4 gap-x-4 gap-y-4 items-center">
<button className="hover:text-gray-700 hover:bg-gray-50 text-gray-500 rounded-full p-1.5 relative">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<span className="absolute top-1 right-1 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
<button className="relative text-gray-500 hover:text-gray-700 p-1.5 rounded-full hover:bg-gray-50">
<svg className="lucide lucide-bell w-5 h-5" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
<span className="absolute top-1 right-1.5 w-2 h-2 bg-red-500 rounded-full border-2 border-white"></span>
</button>
</div>
<div className="flex items-center gap-3 pl-2">
<div className="relative">
<img alt="Avatar" className="w-10 h-10 rounded-full object-cover border border-gray-200" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 border-2 border-white rounded-full"></div>
</div>
<span className="font-semibold text-[15px] text-gray-800 font-google-sans-flex" style={{}}>Жанат. Е</span>
</div>
<button className="p-2 text-gray-400 hover:text-gray-600 bg-gray-50 rounded-full">
<svg className="lucide lucide-sun w-5 h-5" data-lucide="sun" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="4"></circle><path d="M12 2v2"></path><path d="M12 20v2"></path><path d="m4.93 4.93 1.41 1.41"></path><path d="m17.66 17.66 1.41 1.41"></path><path d="M2 12h2"></path><path d="M20 12h2"></path><path d="m6.34 17.66-1.41 1.41"></path><path d="m19.07 4.93-1.41 1.41"></path></svg>
</button>
<div className="flex items-center gap-1 cursor-pointer hover:opacity-80">
<span className="text-sm font-medium text-gray-600 font-google-sans-flex" style={{}}>Қазақ</span>
<svg className="lucide lucide-chevron-down w-4 h-4 text-gray-400" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</header>

<div className="flex-1 overflow-y-auto p-8 hide-scrollbar">

<div className="mb-8 animate-fade-in">
<h2 className="text-2xl font-medium text-gray-800 tracking-tight font-sans" style={{}}>Қош келдіңіз <span className="font-semibold text-black font-sans" style={{}}>Ерқұлан Жанатұлы</span> 👋</h2>
</div>

<div className="grid grid-cols-1 xl:grid-cols-2 gap-8 pb-10">

<div className="space-y-8 flex flex-col">

<div className="hover:shadow-md transition-shadow duration-300 animate-fade-in bg-white border-gray-100/50 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-sm" style={{animationDelay: '0.1s'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold tracking-tight text-gray-900 font-google-sans-flex" style={{}}>Тапсырмалар</h3>
<button className="p-1 hover:bg-gray-50 rounded-full"><svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<div className="flex text-xs text-gray-400 uppercase font-semibold mb-3 px-2">
<span className="w-12 font-google-sans-flex" style={{}}>Пән</span>
<span className="font-google-sans-flex" style={{}}>Тапсырма тақырыбы</span>
</div>
<div className="space-y-5">

<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm font-google-sans-flex" style={{}}>Д/ш</div>
<div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0 group-last:pb-0">
<h4 className="font-semibold text-[15px] text-gray-900 leading-tight mb-2 font-google-sans-flex" style={{}}>Жеңіл атлетика сабағындағы қауіпсіздік ережелері</h4>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium font-google-sans-flex" style={{}}>Орындалып жатыр</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-google-sans-flex" style={{}}>Дейін 24.04.2024</span>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center font-bold text-sm font-google-sans-flex" style={{}}>КжБ</div>
<div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0 group-last:pb-0">
<h4 className="font-semibold text-[15px] text-gray-900 leading-tight mb-2 font-google-sans-flex" style={{}}>14 апта бойынша СӨЖ</h4>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium font-google-sans-flex" style={{}}>Орындалып жатыр</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-google-sans-flex" style={{}}>Дейін 27.04.2024</span>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm font-google-sans-flex" style={{}}>Д/т</div>
<div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0 group-last:pb-0">
<h4 className="font-semibold text-[15px] text-gray-900 leading-tight mb-2 font-google-sans-flex" style={{}}>Қазақстандағы ежелгі қалалар туралы</h4>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-blue-500 bg-blue-50 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="font-medium font-google-sans-flex" style={{}}>Орындалып жатыр</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-google-sans-flex" style={{}}>Дейін 28.04.2024</span>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-50 text-indigo-500 flex items-center justify-center font-bold text-sm font-google-sans-flex" style={{}}>К/д</div>
<div className="flex-1 border-b border-gray-50 pb-4 group-last:border-0 group-last:pb-0">
<h4 className="font-semibold text-[15px] text-gray-900 leading-tight mb-2 font-google-sans-flex" style={{}}>Орта және ұзын қашықтықтарға жүгірудің ережел...</h4>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-red-500 bg-red-50 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-alert-circle w-3.5 h-3.5" data-lucide="alert-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><line x1="12" x2="12" y1="8" y2="12"></line><line x1="12" x2="12.01" y1="16" y2="16"></line></svg>
<span className="font-medium font-google-sans-flex" style={{}}>Мерзімі өтіп кетті</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-google-sans-flex" style={{}}>Дейін 24.04.2024</span>
</div>
</div>
</div>
</div>

<div className="flex gap-4 group cursor-pointer">
<div className="w-12 h-12 flex-shrink-0 rounded-xl bg-indigo-100 text-indigo-600 flex items-center justify-center font-bold text-sm font-google-sans-flex" style={{}}>Кбт</div>
<div className="flex-1">
<h4 className="font-semibold text-[15px] text-gray-900 leading-tight mb-2 font-google-sans-flex" style={{}}>30-дана анатомия сурет салу</h4>
<div className="flex items-center gap-4 text-xs">
<div className="flex items-center gap-1.5 text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">
<svg className="lucide lucide-check-circle w-3.5 h-3.5" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<span className="font-medium font-google-sans-flex" style={{}}>Орындалды</span>
</div>
<div className="flex items-center gap-1.5 text-gray-400">
<svg className="lucide lucide-calendar w-3.5 h-3.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="font-google-sans-flex" style={{}}>Дейін 24.04.2024</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.2s'}}>
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold tracking-tight text-gray-900 font-google-sans-flex" style={{}}>Соңғы бағалар</h3>
<button className="p-1 hover:bg-gray-50 rounded-full"><svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<div className="space-y-6">

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-teal-50 text-teal-600 flex items-center justify-center text-lg font-bold font-google-sans-flex" style={{}}>95</div>
<div>
<h4 className="font-semibold text-[15px] text-gray-900 font-google-sans-flex" style={{}}>Кәсіпкерлік және бизнес</h4>
<p className="text-xs text-gray-400 mt-0.5 font-google-sans-flex" style={{}}>Лекция • 14-апта</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-amber-50 text-amber-600 flex items-center justify-center text-lg font-bold font-google-sans-flex" style={{}}>80</div>
<div>
<h4 className="font-semibold text-[15px] text-gray-900 font-google-sans-flex" style={{}}>Графикалық дизайн элементтері және үдерістері</h4>
<p className="text-xs text-gray-400 mt-0.5 font-google-sans-flex" style={{}}>СӨЖ • 13-апта</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold font-google-sans-flex" style={{}}>20</div>
<div>
<h4 className="font-semibold text-[15px] text-gray-900 font-google-sans-flex" style={{}}>Компьютерлік дизайн</h4>
<p className="text-xs text-gray-400 mt-0.5 font-google-sans-flex" style={{}}>Практика • 13-апта</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-rose-50 text-rose-600 flex items-center justify-center text-lg font-bold font-google-sans-flex" style={{}}>0</div>
<div>
<h4 className="font-semibold text-[15px] text-gray-900 font-google-sans-flex" style={{}}>Компьютерлік дизайн</h4>
<p className="text-xs text-gray-400 mt-0.5 font-google-sans-flex" style={{}}>СӨЖ • 12-апта</p>
</div>
</div>

<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-sky-50 text-sky-600 flex items-center justify-center text-lg font-bold font-google-sans-flex" style={{}}>75</div>
<div>
<h4 className="font-semibold text-[15px] text-gray-900 font-google-sans-flex" style={{}}>Материалдық мәдениет пен дизайн тарихы</h4>
<p className="text-xs text-gray-400 mt-0.5 font-google-sans-flex" style={{}}>Практика • 12-апта</p>
</div>
</div>
</div>
</div>
</div>

<div className="space-y-8 flex flex-col">

<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300 animate-fade-in" style={{animationDelay: '0.3s'}}>
<div className="flex items-center justify-between mb-4">
<h3 className="text-xl font-bold tracking-tight text-gray-900 uppercase font-google-sans-flex" style={{}}>ПОӘК</h3>
<button className="p-1 hover:bg-gray-50 rounded-full"><svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>

<div className="flex flex-wrap items-center gap-x-6 gap-y-3 mb-6 text-sm">
<div className="flex items-center gap-2">
<span className="font-medium text-gray-900 font-google-sans-flex" style={{}}>Оқу жылы</span>
<div className="bg-indigo-50/50 px-3 py-1 rounded-md text-indigo-900 font-medium flex items-center gap-1 cursor-pointer font-google-sans-flex" style={{}}>
                                    2023-2024
                                    <svg className="lucide lucide-chevron-down w-3.5 h-3.5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
<div className="flex items-center gap-4">
<span className="font-medium text-gray-900 font-google-sans-flex" style={{}}>Семестр</span>
<label className="flex items-center gap-2 cursor-pointer">
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
<span className="text-gray-600 font-google-sans-flex" style={{}}>1</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<div className="w-4 h-4 rounded-full border-4 border-indigo-600 bg-white shadow-sm"></div>
<span className="text-gray-900 font-medium font-google-sans-flex" style={{}}>2</span>
</label>
<label className="flex items-center gap-2 cursor-pointer">
<div className="w-4 h-4 rounded-full border border-gray-300"></div>
<span className="text-gray-600 font-google-sans-flex" style={{}}>Қосымша семестр</span>
</label>
</div>
</div>

<div className="grid grid-cols-12 gap-2 text-xs text-gray-400 uppercase font-semibold mb-3 px-1">
<div className="col-span-6 font-google-sans-flex" style={{}}>Пән</div>
<div className="col-span-2 text-center font-google-sans-flex" style={{}}>Кредит саны</div>
<div className="col-span-3 font-google-sans-flex" style={{}}>Оқытушы</div>
<div className="col-span-1 text-right font-google-sans-flex" style={{}}>Жүктеу</div>
</div>

<div className="space-y-4 text-[14px]">

<div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-50">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 font-google-sans-flex" style={{}}>1. Дене шынықтыру</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>2.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Мергалиев.М.М</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>

<div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-50">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 font-google-sans-flex" style={{}}>2. Кәсіпкерлік және бизнес</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>5.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Тлесова.Э.Б</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>

<div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-50">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 font-google-sans-flex" style={{}}>3. Материалдық мәдениет пен дизайн тарихы</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>5.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Байжанова.Ж.Б</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>

<div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-50">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 font-google-sans-flex" style={{}}>4. Компьютерлік дизайн</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>5.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Тулеуова.Г.К</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>

<div className="grid grid-cols-12 gap-2 items-center py-2 border-b border-gray-50">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 leading-tight font-google-sans-flex" style={{}}>5. Графикалық дизайн элементтері және үдерістері</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>5.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Тусупбекова.Ш.М</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>

<div className="grid grid-cols-12 gap-2 items-center py-2">
<div className="col-span-6 font-medium text-gray-900 truncate pr-2 font-google-sans-flex" style={{}}>6. Көркем бейнелеу тәсілдері</div>
<div className="col-span-2 text-center text-gray-500 font-google-sans-flex" style={{}}>5.0</div>
<div className="col-span-3 text-gray-600 truncate font-google-sans-flex" style={{}}>Тусупбекова.Ш.М</div>
<div className="col-span-1 flex justify-end"><svg className="lucide lucide-file-down w-4 h-4 text-black cursor-pointer" data-lucide="file-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M12 18v-6"></path><path d="m9 15 3 3 3-3"></path></svg></div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-6 shadow-sm border border-gray-100/50 hover:shadow-md transition-shadow duration-300 flex flex-col md:flex-row gap-8 animate-fade-in" style={{animationDelay: '0.4s'}}>

<div className="flex-1 max-w-[320px]">
<div className="flex items-center justify-between mb-6">
<h3 className="text-xl font-bold tracking-tight text-gray-900 font-google-sans-flex" style={{}}>Күнтізбе</h3>
<button className="p-1 hover:bg-gray-50 rounded-full"><svg className="lucide lucide-chevron-right w-5 h-5 text-gray-400" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<div className="bg-gray-50 rounded-xl p-1 flex items-center justify-between mb-4">
<button className="p-1 hover:bg-white rounded-lg shadow-sm transition-all"><svg className="lucide lucide-chevron-left w-4 h-4 text-gray-600" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg></button>
<span className="font-semibold text-sm text-gray-900 font-google-sans-flex" style={{}}>Мамыр 2024</span>
<button className="p-1 hover:bg-white rounded-lg shadow-sm transition-all"><svg className="lucide lucide-chevron-right w-4 h-4 text-gray-600" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg></button>
</div>
<div className="grid grid-cols-7 text-center text-xs font-medium text-gray-400 mb-2">
<div className="font-google-sans-flex" style={{}}>Жек</div><div className="font-google-sans-flex" style={{}}>Дүй</div><div className="font-google-sans-flex" style={{}}>Сей</div><div className="font-google-sans-flex" style={{}}>Сәр</div><div className="font-google-sans-flex" style={{}}>Бей</div><div className="font-google-sans-flex" style={{}}>Жұм</div><div className="font-google-sans-flex" style={{}}>Сен</div>
</div>
<div className="grid grid-cols-7 gap-y-3 text-center text-sm font-medium text-gray-600">
<div className="opacity-30 font-google-sans-flex" style={{}}>25</div><div className="opacity-30 font-google-sans-flex" style={{}}>26</div><div className="opacity-30 font-google-sans-flex" style={{}}>27</div><div className="opacity-30 font-google-sans-flex" style={{}}>28</div><div className="opacity-30 font-google-sans-flex" style={{}}>29</div><div className="opacity-30 font-google-sans-flex" style={{}}>30</div>
<div className="text-black font-bold font-google-sans-flex" style={{}}>01</div>
<div className="font-google-sans-flex" style={{}}>02</div>
<div className="relative flex justify-center items-center"><span className="w-7 h-7 bg-amber-100 rounded-full flex items-center justify-center text-amber-700 font-google-sans-flex" style={{}}>03</span></div>
<div className="font-google-sans-flex" style={{}}>04</div>
<div className="relative flex justify-center items-center"><span className="w-7 h-7 bg-teal-100 rounded-full flex items-center justify-center text-teal-700 font-google-sans-flex" style={{}}>05</span></div>
<div className="font-google-sans-flex" style={{}}>06</div><div className="font-google-sans-flex" style={{}}>07</div>
<div className="relative flex justify-center items-center"><span className="w-7 h-7 bg-purple-100 rounded-full flex items-center justify-center text-purple-700 font-google-sans-flex" style={{}}>08</span></div>
<div className="font-google-sans-flex" style={{}}>09</div><div className="font-google-sans-flex" style={{}}>10</div><div className="font-google-sans-flex" style={{}}>11</div>
<div className="relative flex justify-center items-center"><span className="w-7 h-7 bg-blue-100 rounded-full flex items-center justify-center text-blue-700 font-google-sans-flex" style={{}}>12</span></div>
<div className="font-google-sans-flex" style={{}}>13</div>
<div className="relative flex justify-center items-center"><span className="w-7 h-7 bg-indigo-100 rounded-full flex items-center justify-center text-indigo-700 font-google-sans-flex" style={{}}>14</span></div>
<div className="font-google-sans-flex" style={{}}>15</div><div className="font-google-sans-flex" style={{}}>16</div><div className="font-google-sans-flex" style={{}}>17</div><div className="font-google-sans-flex" style={{}}>18</div><div className="font-google-sans-flex" style={{}}>19</div><div className="font-google-sans-flex" style={{}}>20</div><div className="font-google-sans-flex" style={{}}>24</div><div className="font-google-sans-flex" style={{}}>22</div><div className="font-google-sans-flex" style={{}}>23</div><div className="font-google-sans-flex" style={{}}>24</div><div className="font-google-sans-flex" style={{}}>25</div><div className="font-google-sans-flex" style={{}}>26</div><div className="font-google-sans-flex" style={{}}>27</div><div className="font-google-sans-flex" style={{}}>28</div><div className="font-google-sans-flex" style={{}}>29</div><div className="font-google-sans-flex" style={{}}>30</div><div className="opacity-30 font-google-sans-flex" style={{}}>31</div><div className="opacity-30 font-google-sans-flex" style={{}}>01</div><div className="opacity-30 font-google-sans-flex" style={{}}>02</div><div className="opacity-30 font-google-sans-flex" style={{}}>03</div><div className="opacity-30 font-google-sans-flex" style={{}}>04</div><div className="opacity-30 font-google-sans-flex" style={{}}>05</div>
</div>
</div>

<div className="flex-1 pt-12">
<div className="space-y-5">
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-amber-100 flex items-center justify-center text-amber-700 font-bold text-xs flex-shrink-0 font-google-sans-flex" style={{}}>03</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight font-google-sans-flex" style={{}}>Материалдық мәдениет пен дизайн тарихы</h5>
<span className="text-[11px] text-gray-400 font-google-sans-flex" style={{}}>Емтихан 10:00</span>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-teal-100 flex items-center justify-center text-teal-700 font-bold text-xs flex-shrink-0 font-google-sans-flex" style={{}}>05</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight font-google-sans-flex" style={{}}>Компьютерлік дизайн</h5>
<span className="text-[11px] text-gray-400 font-google-sans-flex" style={{}}>Емтихан 15:00</span>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-purple-100 flex items-center justify-center text-purple-700 font-bold text-xs flex-shrink-0 font-google-sans-flex" style={{}}>08</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight font-google-sans-flex" style={{}}>Көркем бейнелеу тәсілдері</h5>
<span className="text-[11px] text-gray-400 font-google-sans-flex" style={{}}>Емтихан 10:00</span>
</div>
</div>
<div className="flex gap-3">
<div className="w-8 h-8 rounded-lg bg-blue-100 flex items-center justify-center text-blue-700 font-bold text-xs flex-shrink-0 font-google-sans-flex" style={{}}>12</div>
<div>
<h5 className="text-sm font-medium text-gray-900 leading-tight font-google-sans-flex" style={{}}>Кәсіпкерлік және бизнес</h5>
<span className="text-[11px] text-gray-400 font-google-sans-flex" style={{}}>Емтихан 10:00</span>
</div>
</div>
</div>
<button className="w-full mt-6 py-2.5 rounded-full border border-gray-900 text-sm font-medium text-gray-900 hover:bg-gray-50 transition-colors font-google-sans-flex" style={{}}>
                                Барлығын көру
                            </button>
</div>
</div>
</div>
</div>
</div>
</main>


    </>
  );
}
