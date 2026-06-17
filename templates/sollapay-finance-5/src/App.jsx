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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Heebo', 'sans-serif'], // Applied globally
},
colors: {
surface: '#F9FAFB', // Slightly cooler white
card: '#ffffff',
primary: {
DEFAULT: '#18181B', // Zinc-900
hover: '#27272A',
light: '#F4F4F5',
},
subtle: '#A1A1AA',
},
boxShadow: {
'soft': '0 2px 8px -1px rgba(0, 0, 0, 0.04), 0 2px 4px -1px rgba(0, 0, 0, 0.02)',
'card': '0 0 0 1px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.05), 0 4px 12px rgba(0,0,0,0.02)',
'dropdown': '0 4px 6px -1px rgba(0, 0, 0, 0.05), 0 2px 4px -1px rgba(0, 0, 0, 0.03), 0 0 0 1px rgba(0,0,0,0.04)',
'logo': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleDropdown(event) {
            event.stopPropagation();
            const dropdown = document.getElementById('dropdownMenu');
            const arrow = document.getElementById('arrowIcon');
            const isHidden = dropdown.classList.contains('hidden');
            
            if (isHidden) {
                dropdown.classList.remove('hidden');
                dropdown.classList.add('dropdown-enter-active');
                arrow.style.transform = 'rotate(180deg)';
            } else {
                dropdown.classList.add('hidden');
                dropdown.classList.remove('dropdown-enter-active');
                arrow.style.transform = 'rotate(0deg)';
            }
        }

        function closeDropdown(event) {
            const dropdown = document.getElementById('dropdownMenu');
            const arrow = document.getElementById('arrowIcon');
            if (!dropdown.classList.contains('hidden')) {
                dropdown.classList.add('hidden');
                dropdown.classList.remove('dropdown-enter-active');
                arrow.style.transform = 'rotate(0deg)';
            }
        }
    
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
      

<nav className="sticky top-0 z-50 w-full bg-white/70 backdrop-blur-xl border-b border-gray-100 h-16">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-full">
<div className="flex justify-between items-center h-full">

<div className="flex items-center gap-10">

<a className="flex items-center gap-3 group" href="#">
<div className="w-8 h-8 relative flex items-center justify-center transform group-hover:scale-105 transition-transform duration-300">
<svg className="drop-shadow-sm" fill="none" height="32" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">

<path d="M12 22C16.9706 22 21 17.9706 21 13V6L12 2L3 6V13C3 17.9706 7.02944 22 12 22Z" fill="url(#shield-gradient)"></path>

<path d="M3 6L12 2L21 6V8C21 8 18 6 12 6C6 6 3 8 3 8V6Z" fill="white" fillOpacity="0.15"></path>

<path d="M12 21.5C16.6944 21.5 20.5 17.6944 20.5 13V6.23607L12 2.45836L3.5 6.23607V13C3.5 17.6944 7.30558 21.5 12 21.5Z" stroke="white" stroke-opacity="0.1" strokeWidth="0.5"></path>
<defs>
<lineargradient gradientunits="userSpaceOnUse" id="shield-gradient" x1="12" x2="12" y1="2" y2="22">
<stop offset="0%" stop-color="#3F3F46"></stop> 
<stop offset="100%" stop-color="#18181B"></stop> 
</lineargradient>
</defs>
</svg>
</div>
<span className="text-[17px] font-semibold tracking-tight text-gray-900 group-hover:opacity-80 transition-opacity">Sollapay</span>
</a>

<div className="hidden md:flex items-center gap-6">
<a className="text-sm font-medium text-gray-900 border-b border-gray-900 pb-0.5" href="#">
                            לוח בקרה
                        </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors pb-0.5" href="#">
                            פרויקטים
                        </a>
<a className="text-sm font-normal text-gray-500 hover:text-gray-900 transition-colors pb-0.5" href="#">
                            פעולות
                        </a>
</div>
</div>

<div className="flex items-center gap-4">

<div className="relative hidden sm:block group">
<iconify-icon className="absolute right-2.5 top-1/2 -translate-y-1/2 text-gray-400" icon="solar:magnifer-linear" strokeWidth="1.5" width="16"></iconify-icon>
<input className="pl-2 pr-8 py-1.5 bg-transparent border border-gray-200 rounded-lg text-sm font-normal text-gray-600 focus:outline-none focus:border-gray-400 focus:ring-0 w-56 transition-all placeholder:text-gray-400 placeholder:font-light" placeholder="חיפוש..." type="text"/>
<div className="absolute left-1.5 top-1/2 -translate-y-1/2 flex items-center gap-1 opacity-40">
<span className="text-[10px] text-gray-500 border border-gray-300 rounded px-1">/</span>
</div>
</div>

<div className="h-4 w-px bg-gray-200 hidden sm:block"></div>

<div className="relative">
<button className="flex items-center gap-2.5 pl-1 pr-1 py-1 rounded-full hover:bg-gray-50 transition-colors group" id="profileBtn" onclick="toggleDropdown(event)">

<div className="w-8 h-8 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center overflow-hidden">
<iconify-icon className="text-gray-400" icon="solar:user-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<span className="hidden sm:block text-sm font-normal text-gray-600 group-hover:text-gray-900 transition-colors">גיא כהן</span>
<iconify-icon className="text-gray-300 group-hover:text-gray-500 transition-transform duration-200" icon="solar:alt-arrow-down-linear" id="arrowIcon" strokeWidth="1.5" width="14"></iconify-icon>
</button>

<div className="hidden absolute top-full left-0 mt-2 w-60 bg-white rounded-xl shadow-dropdown border border-gray-100 p-1.5 z-50 transform origin-top-left transition-all duration-100 ease-out" id="dropdownMenu">

<div className="px-3 py-2 border-b border-gray-50 mb-1">
<p className="text-sm font-medium text-gray-900">גיא כהן</p>
<p className="text-xs text-gray-400 font-light mt-0.5">guy.cohen@sollapay.com</p>
</div>

<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 font-normal rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:user-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                פרופיל אישי
                            </a>
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 font-normal rounded-lg hover:bg-gray-50 hover:text-gray-900 transition-colors" href="#">
<iconify-icon icon="solar:settings-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                הגדרות
                            </a>
<div className="h-px bg-gray-50 my-1 mx-2"></div>
<a className="flex items-center gap-2.5 px-3 py-2 text-sm text-gray-500 font-normal rounded-lg hover:bg-red-50 hover:text-red-600 transition-colors" href="#">
<iconify-icon icon="solar:logout-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
                                יציאה
                            </a>
</div>
</div>
</div>
</div>
</div>
</nav>


<main className="flex-1 w-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8">

<div className="mb-8">
<h1 className="text-3xl font-semibold text-gray-900 tracking-tight mb-1.5">שלום, גיא</h1>
<p className="text-base font-normal text-gray-500">הנה סיכום הפעילות בחשבונות הנאמנות שלך</p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-4 mb-4">

<div className="bg-white rounded-2xl shadow-card p-6 flex flex-col justify-between relative overflow-hidden h-full min-h-[300px] group hover:shadow-lg transition-shadow duration-300">
<div className="flex justify-between items-start z-10">
<div>
<div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center mb-3 text-gray-900">
<iconify-icon icon="solar:graph-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<h3 className="text-base font-medium text-gray-900">מדד יציבות</h3>
</div>
<button className="text-gray-300 hover:text-gray-900 transition-colors">
<iconify-icon icon="solar:menu-dots-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col items-center justify-end relative mt-4">
<div className="relative w-64 h-32 overflow-hidden">
<svg className="w-full h-full transform translate-y-1" viewbox="0 0 200 100">
<path d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="#F3F4F6" strokeLinecap="round" strokeWidth="25"></path>
<path className="gauge-path" d="M 20 100 A 80 80 0 0 1 180 100" fill="none" stroke="url(#gradient)" strokeLinecap="round" strokeWidth="25"></path>
<defs>
<lineargradient id="gradient" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" style={{stopColor: '#34D399', stopOpacity: '1'}}></stop>
<stop offset="100%" style={{stopColor: '#10B981', stopOpacity: '1'}}></stop>
</lineargradient>
</defs>
</svg>
</div>
</div>
<div className="mt-4 z-10 text-center sm:text-right">
<h2 className="text-4xl font-semibold text-emerald-600 tracking-tight mb-1">מצוין!</h2>
<p className="text-sm font-normal text-gray-400">מצב חשבונות הנאמנות תקין ויציב</p>
</div>
<div className="absolute -bottom-20 -left-20 w-64 h-64 bg-emerald-50 rounded-full blur-3xl opacity-50 pointer-events-none group-hover:opacity-70 transition-opacity"></div>
</div>

<div className="lg:col-span-2 grid grid-cols-1 sm:grid-cols-2 gap-4">

<div className="bg-[#A7F3D0]/30 rounded-2xl p-5 border border-[#A7F3D0]/50 hover:bg-[#A7F3D0]/40 transition-colors duration-300">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center text-emerald-800">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<button className="text-emerald-700 hover:text-emerald-900">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div>
<h4 className="text-sm font-medium text-emerald-800 mb-1">סך נכסים בנאמנות</h4>
<div className="text-3xl font-semibold text-emerald-900 tracking-tight mb-2">₪4,325,000</div>
<div className="inline-flex items-center gap-1 text-xs font-medium text-emerald-800 bg-white/50 px-2.5 py-1 rounded-full">
<iconify-icon icon="solar:trending-up-linear" strokeWidth="1.5" width="14"></iconify-icon>
<span>36%</span>
<span>עליה מהחודש שעבר</span>
</div>
</div>
</div>

<div className="hover:bg-[#E9D5FF]/40 transition-colors duration-300 bg-[#E9D5FF]/30 border-[#E9D5FF]/50 border rounded-2xl p-5">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 bg-white/60 backdrop-blur-sm rounded-lg flex items-center justify-center text-purple-800">
<iconify-icon icon="solar:wallet-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<button className="text-purple-700 hover:text-purple-900">
<iconify-icon icon="solar:arrow-right-up-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div className="">
<h4 className="text-sm font-medium text-purple-800 mb-1">הפקדות החודש</h4>
<div className="text-3xl font-semibold text-purple-900 tracking-tight">₪185,235</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:buildings-2-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<button className="text-gray-300 hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500 mb-1">פרויקטים פעילים</h4>
<div className="text-3xl font-semibold text-gray-900 tracking-tight">12</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-card p-5 border border-gray-100 hover:border-gray-300 transition-colors">
<div className="flex justify-between items-start mb-6">
<div className="w-9 h-9 bg-gray-50 rounded-lg flex items-center justify-center text-gray-600">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<button className="text-gray-300 hover:text-gray-900">
<iconify-icon icon="solar:alt-arrow-left-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
<div>
<h4 className="text-sm font-medium text-gray-500 mb-1">ממתינים לאישור</h4>
<div className="text-3xl font-semibold text-gray-900 tracking-tight">3</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="bg-white rounded-xl p-5 shadow-card border border-transparent hover:border-gray-200 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-blue-50 text-blue-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">פעולות אחרונות</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-gray-600 font-normal">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>הופקדה ערבות למגדלי הפארק</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-normal">
<iconify-icon className="text-emerald-500 mt-0.5 shrink-0" icon="solar:check-read-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>אושר תשלום לקבלן ביצוע</span>
</li>
</ul>
</div>
<div className="bg-white rounded-xl p-5 shadow-card border border-transparent hover:border-gray-200 transition-all cursor-pointer group">
<div className="w-10 h-10 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">המיקוד הבא שלך</h3>
<ul className="space-y-3">
<li className="flex items-start gap-2 text-sm text-gray-600 font-normal">
<iconify-icon className="text-orange-400 mt-0.5 shrink-0" icon="solar:record-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>אישור חריגות תקציב בפרויקט "הים"</span>
</li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-normal">
<iconify-icon className="text-orange-400 mt-0.5 shrink-0" icon="solar:record-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
<span>עדכון מסמכי זיהוי לקוח</span>
</li>
</ul>
</div>
<div className="bg-white rounded-xl p-5 shadow-card border border-transparent hover:border-gray-200 transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-l from-indigo-500 to-purple-500"></div>
<div className="w-10 h-10 rounded-full bg-indigo-50 text-indigo-600 flex items-center justify-center mb-3 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.5" width="22"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-gray-900 mb-2">עזרה חכמה</h3>
<p className="text-sm text-gray-500 mb-4 font-normal">יש לך שאלה לגבי החשבונות? ה-AI שלנו יכול לעזור בניתוח הנתונים.</p>
<div className="flex flex-wrap gap-2">
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                        מה היתרה הפנויה?
                    </span>
<span className="inline-flex items-center px-2.5 py-1 rounded-md bg-gray-50 border border-gray-200 text-xs font-medium text-gray-600 hover:bg-gray-100 transition-colors">
                        הפק דוח חודשי
                    </span>
</div>
</div>
</div>
</main>



    </>
  );
}
