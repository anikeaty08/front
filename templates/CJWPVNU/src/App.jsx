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



    // Responsive sidebar: collapse on small screens
    function handleSidebarCollapse() {
      const sidebar = document.querySelector('aside');
      if(window.innerWidth <= 900) {
        sidebar.classList.add('sidebar-collapse');
      } else {
        sidebar.classList.remove('sidebar-collapse');
      }
    }
    window.addEventListener('resize', handleSidebarCollapse);
    window.addEventListener('DOMContentLoaded', handleSidebarCollapse);
  
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
      

<aside className="glass flex flex-col justify-between h-screen min-h-0 w-72 min-w-72 sidebar-collapse:!w-18 sidebar-collapse:!min-w-18 p-4 rounded-3xl m-3 shadow-xl transition-all duration-200 ease-in-out z-20">

<div className="">
<div className="flex items-center gap-3 px-2 py-1 mb-8 mt-2 select-none">
<div className="bg-gradient-to-tr from-[#00ffe7] to-[#0099ff] flex items-center justify-center rounded-2xl w-12 h-12 shadow-lg">
<span className="text-2xl font-extrabold text-[#222b38]">A</span>
</div>
<span className="glow-text text-2xl font-bold tracking-wider sidebar-label">Advance Trade</span>
</div>

<nav className="flex flex-col gap-1 mt-2">
<a aria-current="page" className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-active focus:outline-none" href="#">
<span className="text-xl">🤖</span>
<span className="sidebar-label">Dashboard</span>
<span className="sidebar-tooltip group-hover:block">Dashboard</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 transition-all menu-glow focus:outline-none text-base font-semibold text-[#eafcff] rounded-xl pt-2 pr-3 pb-2 pl-3" href="#"><span className="text-xl">📈</span><span className="sidebar-label">Algo Trading</span><span className="sidebar-tooltip group-hover:block">Algo Trading</span></a>
<a className="sidebar-item relative group flex items-center gap-4 transition-all menu-glow focus:outline-none text-base font-semibold text-[#eafcff] rounded-xl pt-2 pr-3 pb-2 pl-3" href="#">
<span className="text-xl">💼</span>
<span className="sidebar-label">My Stake</span>
<span className="sidebar-tooltip group-hover:block">My Stake</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">💰</span>
<span className="sidebar-label">Deposit</span>
<span className="sidebar-tooltip group-hover:block">Deposit</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">💸</span>
<span className="sidebar-label">Withdrawal</span>
<span className="sidebar-tooltip group-hover:block">Withdrawal</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">👥</span>
<span className="sidebar-label">Referrals</span>
<span className="sidebar-tooltip group-hover:block">Referrals</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">🎫</span>
<span className="sidebar-label">Raise Ticket</span>
<span className="sidebar-tooltip group-hover:block">Raise Ticket</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">⚙️</span>
<span className="sidebar-label">Settings</span>
<span className="sidebar-tooltip group-hover:block">Settings</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">🔔</span>
<span className="sidebar-label">Notifications</span>
<span className="sidebar-tooltip group-hover:block">Notifications</span>
</a>
<a className="sidebar-item relative group flex items-center gap-4 px-3 py-2 rounded-xl font-semibold text-base text-[#eafcff] transition-all menu-glow focus:outline-none" href="#">
<span className="text-xl">📘</span>
<span className="sidebar-label">Help Center</span>
<span className="sidebar-tooltip group-hover:block">Help Center</span>
</a>
</nav>
</div>

<div className="mt-8">
<button className="flex items-center gap-4 px-3 py-2 rounded-xl font-bold text-base text-[#ff3b3b] w-full logout-glow transition-all focus:outline-none">
<span className="text-xl">🚪</span>
<span className="sidebar-label">Logout</span>
<span className="sidebar-tooltip group-hover:block">Logout</span>
</button>
</div>
</aside>

<main className="flex-1 flex items-center justify-center pt-8 pr-8 pb-8 pl-8">
<div className="text-[#eafcff] opacity-70 text-2xl font-light">
      Dashboard Content Here
    </div>
</main>


    </>
  );
}
