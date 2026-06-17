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



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
navy: {
50: '#f0f4ff',
100: '#e0eaff',
200: '#c7d9fe',
800: '#1b2559',
900: '#0b1437',
950: '#050a1f',
},
secondary: {
gray: '#a3aed0',
light: '#f4f7fe',
}
},
boxShadow: {
'soft': '0px 18px 40px rgba(112, 144, 176, 0.12)',
'card': '0px 3px 20px rgba(112, 144, 176, 0.08)',
'float': '0px 10px 30px rgba(11, 20, 55, 0.15)',
},
borderRadius: {
'xl': '16px',
'2xl': '20px',
'3xl': '24px',
}
}
}
}



        const dateOptions = { weekday: 'short', month: 'short', day: 'numeric' };
        document.getElementById('current-date').innerText = new Date().toLocaleDateString('en-US', dateOptions);

        function toggleSidebar() {
            const sidebar = document.getElementById('sidebar');
            const overlay = document.getElementById('sidebar-overlay');
            
            if (sidebar.classList.contains('-translate-x-full')) {
                // Open
                sidebar.classList.remove('-translate-x-full');
                overlay.classList.remove('hidden');
                setTimeout(() => {
                    overlay.classList.remove('opacity-0');
                }, 10);
                document.body.style.overflow = 'hidden'; // Prevent body scroll
            } else {
                // Close
                sidebar.classList.add('-translate-x-full');
                overlay.classList.add('opacity-0');
                setTimeout(() => {
                    overlay.classList.add('hidden');
                }, 300);
                document.body.style.overflow = ''; // Restore body scroll
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
      

<div className="fixed inset-0 bg-navy-900/40 z-40 hidden opacity-0 sidebar-overlay backdrop-blur-[2px]" id="sidebar-overlay" onclick="toggleSidebar()"></div>

<aside className="fixed inset-y-0 left-0 w-[85%] max-w-xs bg-white flex flex-col h-full shadow-2xl z-50 transform -translate-x-full" id="sidebar">

<div className="h-16 flex items-center justify-between px-6 border-b border-gray-50 bg-white/50">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-navy-900 text-white flex items-center justify-center shadow-lg shadow-navy-900/20">
<iconify-icon icon="lucide:hexagon" width="18"></iconify-icon>
</div>
<h1 className="text-lg font-semibold tracking-tight text-navy-900">LUMINA</h1>
</div>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-50 text-navy-900 active:scale-95 transition-transform" onclick="toggleSidebar()">
<iconify-icon icon="lucide:x" width="18"></iconify-icon>
</button>
</div>

<nav className="flex-1 px-4 py-6 space-y-1.5 overflow-y-auto hide-scrollbar">
<div className="mb-6">
<div className="flex items-center gap-3 px-3 py-3 rounded-2xl bg-navy-50/50 border border-navy-50">
<img alt="User" className="w-10 h-10 rounded-full object-cover shadow-sm" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
<div className="flex-1 min-w-0">
<p className="text-sm font-semibold text-navy-900">Alex Morgan</p>
<p className="text-xs text-secondary-gray truncate">alex@lumina.inc</p>
</div>
</div>
</div>
<p className="px-4 text-[10px] font-semibold text-secondary-gray uppercase tracking-widest mb-2">Menu</p>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl bg-navy-900 text-white shadow-float" href="#">
<iconify-icon icon="lucide:layout-grid" width="18"></iconify-icon>
<span className="font-medium text-sm">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-gray hover:bg-gray-50 active:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="lucide:users" width="18"></iconify-icon>
<span className="font-medium text-sm">Employees</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-gray hover:bg-gray-50 active:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="lucide:clock" width="18"></iconify-icon>
<span className="font-medium text-sm">Attendance</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-gray hover:bg-gray-50 active:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="lucide:wallet" width="18"></iconify-icon>
<span className="font-medium text-sm">Payroll</span>
</a>
<div className="my-4 h-px bg-gray-50"></div>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-gray hover:bg-gray-50 active:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="lucide:settings" width="18"></iconify-icon>
<span className="font-medium text-sm">Settings</span>
</a>
<a className="flex items-center gap-3 px-4 py-3 rounded-xl text-secondary-gray hover:bg-gray-50 active:bg-gray-100 transition-colors" href="#">
<iconify-icon icon="lucide:log-out" width="18"></iconify-icon>
<span className="font-medium text-sm">Log Out</span>
</a>
</nav>
</aside>

<header className="h-16 px-5 flex items-center justify-between glass-header z-30 sticky top-0 border-b border-white/60">
<button className="w-10 h-10 -ml-2 flex items-center justify-center text-navy-900 active:bg-white/50 rounded-full transition-colors" onclick="toggleSidebar()">
<iconify-icon icon="lucide:menu" width="22"></iconify-icon>
</button>
<h2 className="text-sm font-semibold text-navy-900 tracking-tight">Dashboard</h2>
<div className="flex items-center gap-3">
<button className="relative w-9 h-9 flex items-center justify-center rounded-full bg-white text-navy-900 shadow-sm border border-gray-100 active:scale-95 transition-transform">
<iconify-icon icon="lucide:bell" width="18"></iconify-icon>
<span className="absolute top-2 right-2.5 w-1.5 h-1.5 bg-red-500 rounded-full border border-white"></span>
</button>
</div>
</header>

<main className="flex-1 overflow-y-auto overflow-x-hidden w-full pb-24">
<div className="p-5 space-y-5">

<div className="flex flex-col gap-1">
<p className="text-xs font-medium text-secondary-gray" id="current-date">Wed, 25 Oct</p>
<div className="flex justify-between items-end">
<h1 className="text-2xl font-semibold text-navy-900 tracking-tight leading-tight">Good Morning,<br/>Alex!</h1>
<div className="w-10 h-10 rounded-full bg-white p-0.5 shadow-sm border border-gray-100">
<img alt="Profile" className="w-full h-full rounded-full object-cover" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-card relative overflow-hidden border border-white/50">
<div className="flex justify-between items-start mb-4">
<span className="px-2.5 py-1 rounded-full bg-green-50 text-green-600 text-[10px] font-semibold uppercase tracking-wide border border-green-100 flex items-center gap-1.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        On Duty
                    </span>
<iconify-icon className="text-secondary-gray" icon="lucide:more-horizontal" width="20"></iconify-icon>
</div>
<div className="flex items-center gap-4">
<div className="w-14 h-14 rounded-2xl bg-blue-50 text-blue-600 flex items-center justify-center border border-blue-100 shadow-sm shrink-0">
<iconify-icon icon="lucide:fingerprint" width="28"></iconify-icon>
</div>
<div>
<p className="text-[10px] text-secondary-gray uppercase tracking-widest font-semibold">Clock Time</p>
<p className="text-2xl font-mono font-medium text-navy-900 tracking-tighter">04:23:10</p>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<button className="py-3 rounded-xl bg-navy-900 text-white text-xs font-medium shadow-lg shadow-navy-900/20 active:scale-[0.98] transition-transform">
                        Punch Out
                    </button>
<button className="py-3 rounded-xl bg-gray-50 text-navy-900 border border-gray-100 text-xs font-medium active:bg-gray-100 transition-colors">
                        Break
                    </button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div className="bg-white p-4 rounded-2xl shadow-card flex flex-col justify-center items-center text-center gap-2 border border-white/50">
<div className="w-8 h-8 rounded-full bg-orange-50 text-orange-600 flex items-center justify-center">
<iconify-icon icon="lucide:timer" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-navy-900 leading-none">7h 45m</h4>
<p className="text-[10px] text-secondary-gray font-medium mt-1">Avg. Hours</p>
</div>
</div>
<div className="bg-white p-4 rounded-2xl shadow-card flex flex-col justify-center items-center text-center gap-2 border border-white/50">
<div className="w-8 h-8 rounded-full bg-purple-50 text-purple-600 flex items-center justify-center">
<iconify-icon icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-navy-900 leading-none">8 Tasks</h4>
<p className="text-[10px] text-secondary-gray font-medium mt-1">Pending</p>
</div>
</div>
</div>

<div className="bg-navy-900 rounded-3xl p-5 shadow-float text-white relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-white opacity-5 rounded-full blur-2xl transform translate-x-10 -translate-y-10"></div>
<div className="relative z-10">
<div className="flex justify-between items-center mb-4">
<p className="text-navy-200 text-[10px] font-semibold uppercase tracking-wider">Estimated Pay</p>
<iconify-icon className="text-navy-200" icon="lucide:eye-off" width="16"></iconify-icon>
</div>
<div className="flex items-end justify-between">
<div>
<h3 className="text-2xl font-semibold tracking-tight">$8,450.00</h3>
<p className="text-[10px] text-navy-200 mt-1">Due Oct 31, 2023</p>
</div>

<div className="flex items-end gap-1 h-8">
<div className="w-1.5 bg-white/20 rounded-t-sm h-[40%]"></div>
<div className="w-1.5 bg-white/20 rounded-t-sm h-[60%]"></div>
<div className="w-1.5 bg-white/20 rounded-t-sm h-[30%]"></div>
<div className="w-1.5 bg-blue-500 rounded-t-sm h-[80%] shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl p-5 shadow-card border border-white/50">
<div className="flex justify-between items-center mb-4">
<h3 className="text-sm font-semibold text-navy-900">Next Meeting</h3>
<span className="text-[10px] font-medium text-blue-600 bg-blue-50 px-2 py-1 rounded-full">30m left</span>
</div>
<div className="flex gap-3 items-center">
<div className="flex flex-col items-center justify-center w-11 h-11 bg-navy-50 text-navy-900 rounded-xl border border-navy-100 shrink-0">
<span className="text-[9px] font-bold uppercase text-secondary-gray leading-none">Oct</span>
<span className="text-sm font-bold leading-none mt-0.5">25</span>
</div>
<div className="flex-1 min-w-0">
<h4 className="text-sm font-semibold text-navy-900 truncate">Quarterly Review</h4>
<div className="flex items-center gap-2 mt-1">
<span className="text-[10px] text-secondary-gray flex items-center gap-1 bg-gray-50 px-1.5 py-0.5 rounded border border-gray-100">
<iconify-icon icon="lucide:video" width="10"></iconify-icon> Zoom
                            </span>
<span className="text-[10px] text-secondary-gray">10:00 AM</span>
</div>
</div>
<button className="w-8 h-8 rounded-full border border-gray-100 flex items-center justify-center text-navy-900 hover:bg-gray-50">
<iconify-icon icon="lucide:chevron-right" width="16"></iconify-icon>
</button>
</div>
</div>

<div>
<h3 className="text-sm font-semibold text-navy-900 px-1 mb-3">Tasks Due Today</h3>
<div className="space-y-2">
<div className="bg-white p-3.5 rounded-2xl shadow-sm border border-transparent active:border-blue-100 active:shadow-md transition-all flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0"></div>
<span className="text-sm font-medium text-navy-900 flex-1">Approve Timesheets</span>
<span className="w-1.5 h-1.5 rounded-full bg-red-500"></span>
</div>
<div className="bg-white p-3.5 rounded-2xl shadow-sm border border-transparent active:border-blue-100 active:shadow-md transition-all flex items-center gap-3">
<div className="w-5 h-5 rounded-full border-2 border-gray-200 flex items-center justify-center shrink-0"></div>
<span className="text-sm font-medium text-navy-900 flex-1">Update Profile Bio</span>
</div>
</div>
</div>
</div>
</main>

<div className="fixed bottom-6 left-1/2 transform -translate-x-1/2 z-30 flex gap-4 w-[90%] max-w-sm">
<button className="flex-1 bg-navy-900/90 backdrop-blur-md text-white py-3.5 rounded-2xl shadow-float flex items-center justify-center gap-2 active:scale-95 transition-all border border-navy-800">
<iconify-icon icon="lucide:plus" width="18"></iconify-icon>
<span className="text-sm font-medium">New Request</span>
</button>
</div>


    </>
  );
}
