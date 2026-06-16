import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.tailwind = {
config: {
theme: {
extend: {
colors: {
primary: "#0A6EE7",
secondary: "#EB6101",
},
fontFamily: {
sans: ["Noto Sans Thai", "system-ui", "sans-serif"],
},
borderRadius: {
lg: "0.5rem", // unify
},
},
},
}
};



    // Initialize icons and normalize stroke width
    document.addEventListener("DOMContentLoaded", () => {
      if (window.lucide) {
        lucide.createIcons();
        document.querySelectorAll('svg[data-lucide]').forEach(svg => svg.setAttribute('stroke-width', '1.5'));
      }
    });

    // Sort dropdown
    const sortBtn = document.getElementById('sortBtn');
    const sortMenu = document.getElementById('sortMenu');
    const sortLabel = document.getElementById('sortLabel');
    const toggleMenu = (show) => sortMenu?.classList.toggle('hidden', !show);

    sortBtn?.addEventListener('click', (e) => {
      e.stopPropagation();
      toggleMenu(sortMenu.classList.contains('hidden'));
    });
    sortMenu?.querySelectorAll('[data-sort]').forEach(item => {
      item.addEventListener('click', (e) => {
        sortLabel.textContent = e.currentTarget.dataset.sort;
        toggleMenu(false);
      });
    });
    document.addEventListener('click', () => toggleMenu(false));

    // Tabs (top and sidebar) -> filter sections
    const setActiveTab = (tabName) => {
      // Buttons
      document.querySelectorAll('.tab-btn, .side-btn').forEach(btn => {
        const isActive = btn.getAttribute('data-tab') === tabName;

        // Top tabs
        if (btn.classList.contains('tab-btn')) {
          btn.classList.toggle('bg-primary/10', isActive);
          btn.classList.toggle('text-primary', isActive);
          btn.classList.toggle('font-semibold', isActive);
          btn.classList.toggle('tracking-tight', isActive);

          btn.classList.toggle('text-slate-600', !isActive);
          btn.classList.toggle('hover:bg-slate-100', !isActive);
          btn.classList.toggle('font-medium', !isActive);
        }
        // Sidebar
        if (btn.classList.contains('side-btn')) {
          btn.classList.toggle('bg-primary/10', isActive);
          btn.classList.toggle('text-primary', isActive);
          btn.classList.toggle('text-slate-700', !isActive);
        }
      });

      // Title update
      const title = document.querySelector('section h2');
      if (title) title.textContent = tabName.split('-').map(w => w[0].toUpperCase()+w.slice(1)).join(' ');

      // Filter cards
      const cards = document.querySelectorAll('[data-section]');
      cards.forEach(card => {
        const sections = card.getAttribute('data-section');
        const hit = tabName === 'for-you' ? true : sections?.includes(tabName);
        card.style.display = hit ? '' : 'none';
        card.style.opacity = hit ? '1' : '0';
      });
    };

    document.querySelectorAll('[data-tab]').forEach(btn => {
      btn.addEventListener('click', (e) => {
        const name = e.currentTarget.getAttribute('data-tab');
        setActiveTab(name);
      });
    });

    // Default tab
    setActiveTab('for-you');
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="mx-auto w-full">

<header className="sticky top-0 z-40 backdrop-blur bg-white/80 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
<div className="flex h-16 items-center gap-4">

<a className="shrink-0 inline-flex items-center gap-2" href="#">
<img alt="Yuanta Securities logo" className="h-8 w-auto" src="https://www.yuanta.co.th/cms/uploads/Logo_aa5fd5a665.svg"/>
</a>

<nav className="hidden md:flex items-center gap-4 mx-auto text-sm">
<a className="px-2 py-1 rounded-lg text-slate-600 hover:text-slate-900" href="#">Main Page</a>
<a className="px-2 py-1 rounded-lg font-semibold text-blue-600 bg-blue-50" href="#">Feed</a>
<a className="px-2 py-1 rounded-lg text-slate-600 hover:text-slate-900" href="#">Markets</a>
<a className="px-2 py-1 rounded-lg text-slate-600 hover:text-slate-900" href="#">Asset</a>
<a className="px-2 py-1 rounded-lg text-slate-600 hover:text-slate-900" href="#">Wallet</a>
</nav>

<nav className="hidden md:flex items-center gap-2">
<button aria-label="Search" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-search w-[18px] h-[18px]" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
<button aria-label="Messages" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-message-square w-[18px] h-[18px]" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
</button>
<button aria-label="Notifications" className="grid place-items-center rounded-lg transition-colors text-blue-600 hover:bg-slate-50 h-9 w-9">
<svg className="lucide lucide-bell w-[18px] h-[18px]" data-lucide="bell" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.268 21a2 2 0 0 0 3.464 0"></path><path d="M3.262 15.326A1 1 0 0 0 4 17h16a1 1 0 0 0 .74-1.673C19.41 13.956 18 12.499 18 8A6 6 0 0 0 6 8c0 4.499-1.411 5.956-2.738 7.326"></path></svg>
</button>
<button className="ml-1 h-9 w-9 rounded-full overflow-hidden ring-1 ring-slate-200">
<img alt="Profile" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&amp;w=120&amp;h=120&amp;fit=crop"/>
</button>
</nav>
</div>
</div>
</header>

<div className="block lg:hidden border-b border-slate-200">
<div className="max-w-[1400px] mx-auto px-4 lg:px-8" id="topTabs">
<div className="flex gap-2 overflow-x-auto py-2 no-scrollbar">
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 bg-primary/10 text-primary" data-tab="for-you">For You</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="following">Following</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="news">News</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="dashboard">Dashboard</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="calendar">Calendar</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="articles">Articles</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="ebook">Ebook</button>
<button className="tab-btn shrink-0 px-3 py-2 rounded-lg text-[15px] text-blue-600 hover:bg-slate-100 font-medium text-slate-600" data-tab="bookmark">Bookmark</button>
</div>
</div>
</div>
<main className="max-w-[1400px] mx-auto px-4 md:px-6 lg:px-8 pt-4 lg:pt-8">
<div className="grid grid-cols-12 gap-6">

<aside className="hidden lg:block lg:col-span-2">
<nav className="sticky top-[88px] flex flex-col gap-1">
<div className="px-2 text-[12px] uppercase tracking-wide text-slate-500 mb-2">Browse</div>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg bg-primary/10 text-blue-600 text-primary" data-tab="for-you">
<svg className="lucide lucide-sparkles h-5 w-5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[15px] font-medium">For You</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="following">
<svg className="lucide lucide-user-check h-5 w-5" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-[15px] font-medium">Following</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="news">
<svg className="lucide lucide-newspaper h-5 w-5" data-lucide="newspaper" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 18h-5"></path><path d="M18 14h-8"></path><path d="M4 22h16a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2H8a2 2 0 0 0-2 2v16a2 2 0 0 1-4 0v-9a2 2 0 0 1 2-2h2"></path><rect height="4" rx="1" width="8" x="10" y="6"></rect></svg>
<span className="text-[15px] font-medium">News</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="dashboard">
<svg className="lucide lucide-layout-dashboard h-5 w-5" data-lucide="layout-dashboard" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="9" rx="1" width="7" x="3" y="3"></rect><rect height="5" rx="1" width="7" x="14" y="3"></rect><rect height="9" rx="1" width="7" x="14" y="12"></rect><rect height="5" rx="1" width="7" x="3" y="16"></rect></svg>
<span className="text-[15px] font-medium">Dashboard</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="calendar">
<svg className="lucide lucide-calendar h-5 w-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
<span className="text-[15px] font-medium">Calendar</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="articles">
<svg className="lucide lucide-file-text h-5 w-5" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-[15px] font-medium">Articles</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="ebook">
<svg className="lucide lucide-book-open h-5 w-5" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
<span className="text-[15px] font-medium">Ebook</span>
</button>
<button className="side-btn group flex items-center gap-3 px-3 py-2 rounded-lg text-blue-700 hover:bg-slate-100 text-slate-700" data-tab="bookmark">
<svg className="lucide lucide-bookmark h-5 w-5" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
<span className="text-[15px] font-medium">Bookmark</span>
</button>
</nav>
</aside>

<section className="col-span-12 lg:col-span-7">

<div className="flex items-center justify-between mb-4">
<div className="">
<h2 className="text-[22px] md:text-[24px] font-semibold tracking-tight text-slate-900">For You</h2>
<p className="text-[13px] text-slate-500">Curated insights and updates</p>
</div>

<div className="relative">
<button className="flex items-center gap-2 px-3 h-10 rounded-lg bg-white border border-slate-200 hover:border-slate-300 text-[14px] text-slate-700 transition" id="sortBtn">
<svg className="lucide lucide-sliders-horizontal h-4 w-4" data-lucide="sliders-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 5H3"></path><path d="M12 19H3"></path><path d="M14 3v4"></path><path d="M16 17v4"></path><path d="M21 12h-9"></path><path d="M21 19h-5"></path><path d="M21 5h-7"></path><path d="M8 10v4"></path><path d="M8 12H3"></path></svg>
<span id="sortLabel">Latest</span>
<svg className="lucide lucide-chevron-down ml-1 h-4 w-4 text-slate-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="hidden absolute right-0 mt-2 w-44 bg-white border border-slate-200 rounded-lg shadow-lg overflow-hidden" id="sortMenu">
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-slate-50" data-sort="Latest">Latest</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-slate-50" data-sort="Popular">Popular</button>
<button className="w-full text-left px-3 py-2 text-[14px] hover:bg-slate-50" data-sort="Following">Following</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-1 lg:grid-cols-1 gap-4">

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="for-you news" style={{opacity: '1'}}>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-2">
<span className="text-[12px] text-primary font-medium rounded-lg pt-0.5 pr-2 pb-0.5 pl-2">Analysis</span>
<span className="text-[12px] font-medium text-emerald-700 bg-emerald-50 rounded-lg pt-0.5 pr-2 pb-0.5 pl-2">Stock</span>
<span className="text-[12px] font-medium text-blue-700 bg-blue-50 rounded-lg pt-0.5 pr-2 pb-0.5 pl-2">Yuanta Channel</span>
</div>
<div className="flex gap-3">
<div className="flex-1">
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Earnings outlook improves as liquidity rotates into quality</h3>
<p className="text-[14px] text-slate-600 line-clamp-2">We review sector positioning and highlight medium-term catalysts across the region.</p>
<div className="mt-3 flex items-center gap-2 text-[13px] text-slate-500">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=60&amp;h=60&amp;fit=crop"/>
<span className="">Wealth Insights</span>
<span>•</span>
<span className="">2h ago</span>
</div>
</div>
<div className="w-24 h-24 rounded-lg overflow-hidden ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1520607162513-77705c0f0d4a?q=80&amp;w=300&amp;h=300&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute top-2 right-2 flex gap-1">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark h-4 w-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-lock h-4 w-4 text-slate-600" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
</article>

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="for-you following" style={{opacity: '1'}}>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-rose-50 text-rose-700">My Asset</span>
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-primary/10 text-primary">Yuanta Channel</span>
</div>
<div className="flex gap-3">
<div className="flex-1">
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Portfolio Q3: Managing risk with factor tilts</h3>
<p className="text-[14px] text-slate-600 line-clamp-2">Walkthrough of factor exposures and how to hedge drawdowns in a rising rate scenario.</p>
<div className="mt-3 flex items-center gap-2 text-[13px] text-slate-500">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=60&amp;h=60&amp;fit=crop"/>
<span className="">Yuanta Channel</span>
<span>•</span>
<span>14m</span>
</div>
</div>
<div className="relative w-24 h-24 rounded-lg overflow-hidden ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1521133573892-e44906baee46?q=80&amp;w=300&amp;h=300&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/10"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="h-8 w-8 rounded-full bg-white/90 ring-1 ring-slate-200 flex items-center justify-center">
<svg className="lucide lucide-play h-4 w-4 text-slate-800" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</div>
</div>
<span className="absolute bottom-1 right-1 text-[11px] px-1.5 py-0.5 rounded-lg bg-slate-900/80 text-white">3:24</span>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark h-4 w-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</article>

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="news calendar" style={{opacity: '1'}}>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-secondary/10 text-secondary">Event</span>
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-sky-50 text-sky-700">Webinar</span>
</div>
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Opening Account Strategy Briefing</h3>
<p className="text-[14px] text-slate-600 mb-3">Live session with Q&amp;A on market microstructure and order flow.</p>
<div className="flex items-center gap-3">
<div className="flex items-center gap-1.5 text-[13px] font-semibold text-secondary">
<svg className="lucide lucide-calendar-days h-4 w-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                    Mon, Sep 23 • 15:00
                  </div>
<div className="flex items-center gap-1.5 text-[13px] text-slate-500">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                    Online
                  </div>
</div>
</div>
<div className="absolute top-2 right-2">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark h-4 w-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</article>

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="for-you news articles" style={{opacity: '1'}}>
<div className="aspect-[16/9] w-full overflow-hidden">
<img alt="" className="h-full w-full object-cover group-hover:scale-105 transition" src="https://images.unsplash.com/photo-1483721310020-03333e577078?q=80&amp;w=1200&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-indigo-50 text-indigo-700">Report</span>
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-emerald-50 text-emerald-700">Markets</span>
</div>
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Opening bell: risk rally cools as yields stabilize</h3>
<div className="mt-2 flex items-center gap-2 text-[13px] text-slate-500">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=60&amp;h=60&amp;fit=crop"/>
<span>Morning Desk</span>
<span>•</span>
<span className="">Today</span>
</div>
</div>
<div className="absolute top-2 right-2">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark h-4 w-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</article>

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="articles ebook" style={{opacity: '1'}}>
<div className="pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-fuchsia-50 text-fuchsia-700">Ebook</span>
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-slate-100 text-slate-700">Beginner</span>
</div>
<div className="flex gap-3">
<div className="flex-1">
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Strategy Design Engineering</h3>
<p className="text-[14px] text-slate-600 line-clamp-2">A quick primer to build robust rules without overfitting.</p>
<div className="mt-3 flex items-center justify-between">
<div className="flex items-center gap-2 text-[13px] text-slate-500">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1511367461989-f85a21fda167?q=80&amp;w=60&amp;h=60&amp;fit=crop"/>
<span>Research Team</span>
</div>
<button className="px-3 h-9 rounded-lg text-white text-[13px] font-medium hover:bg-slate-800 transition bg-[#0A6EE7]">Download</button>
</div>
</div>
<div className="w-20 h-24 rounded-lg overflow-hidden ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1507842217343-583bb7270b66?q=80&amp;w=300&amp;h=400&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark h-4 w-4 text-slate-600" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>
</article>

<article className="group relative rounded-lg border overflow-hidden text-white border-slate-800 bg-[#0A6EE7]" data-section="for-you dashboard" style={{opacity: '1'}}>
<div className="p-5">
<h3 className="text-[18px] font-semibold tracking-tight mb-1">Wealth Designs: Bluechip Rotation</h3>
<p className="text-[14px] text-slate-300">Playbook for Q4 as breadth improves and earnings revisions turn positive.</p>
<div className="mt-4 flex items-center justify-between">
<div className="flex items-center gap-2 text-[13px] text-slate-300">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Updated 2h ago</span>
</div>
<button className="px-3 h-9 rounded-lg bg-white text-slate-900 text-[13px] font-medium hover:bg-slate-100 transition">View</button>
</div>
</div>
</article>

<article className="group relative rounded-lg bg-white border border-slate-200 hover:border-slate-300 transition overflow-hidden" data-section="bookmark" style={{opacity: '1'}}>
<div className="p-4">
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 rounded-lg text-[12px] font-medium bg-teal-50 text-teal-700">Saved</span>
</div>
<div className="flex gap-3">
<div className="flex-1">
<h3 className="text-[18px] font-semibold leading-snug text-slate-900 mb-1">Cloud First: structural demand cycle</h3>
<p className="text-[14px] text-slate-600 line-clamp-2">Secular growth drivers in enterprise modernization and AI productivity.</p>
<div className="mt-3 flex items-center gap-2 text-[13px] text-slate-500">
<img alt="" className="h-5 w-5 rounded-full" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&amp;w=60&amp;h=60&amp;fit=crop"/>
<span>Tech Strategy</span>
<span>•</span>
<span>Yesterday</span>
</div>
</div>
<div className="w-24 h-24 rounded-lg overflow-hidden ring-1 ring-slate-200">
<img alt="" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?q=80&amp;w=300&amp;h=300&amp;fit=crop"/>
</div>
</div>
</div>
<div className="absolute top-2 right-2">
<button className="p-1.5 rounded-lg bg-white/90 hover:bg-white border border-slate-200">
<svg className="lucide lucide-bookmark-check h-4 w-4 text-primary" data-lucide="bookmark-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2Z"></path><path d="m9 10 2 2 4-4"></path></svg>
</button>
</div>
</article>
</div>

<div className="mt-6 md:block lg:hidden">
<h3 className="text-[18px] font-semibold tracking-tight text-slate-900 mb-3">Recommended Channels</h3>
<div className="grid grid-cols-1 md:grid-cols-2 gap-3">
<div className="rounded-lg bg-white border border-slate-200 p-4 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544006659-f0b21884ce1d?q=80&amp;w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-[15px] font-semibold text-slate-900 truncate">Clear Perspective Morning</div>
<div className="text-[13px] text-slate-500 truncate">Daily brief from the desk</div>
</div>
<button className="px-3 h-9 rounded-lg text-white text-[13px] font-medium hover:bg-slate-800 transition bg-[#0A6EE7]">Follow</button>
</div>
<div className="rounded-lg bg-white border border-slate-200 p-4 flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&amp;w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-[15px] font-semibold text-slate-900 truncate">Derivatives</div>
<div className="text-[13px] text-slate-500 truncate">Futures and options</div>
</div>
<button className="px-3 h-9 rounded-lg bg-white border border-slate-200 text-[13px] font-medium hover:border-slate-300 transition">Following</button>
</div>
</div>
</div>
</section>

<aside className="hidden lg:block lg:col-span-3">
<div className="sticky top-[88px] space-y-4">

<div className="overflow-hidden rounded-lg border border-slate-200 bg-white">
<div className="h-36 w-full overflow-hidden">
<img alt="" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534665482403-a909d0d97c67?q=80&amp;w=1200&amp;fit=crop"/>
</div>
<div className="p-4">
<div className="text-[13px] text-primary font-medium mb-1 flex items-center justify-between">
<span className="inline-flex items-center gap-1 px-1.5 py-0.5 rounded-lg bg-rose-50 text-rose-700">
<span className="h-2 w-2 rounded-full bg-rose-700"></span>
                    LIVE
                  </span>
<span className="inline-flex items-center gap-1 text-slate-500">
<svg className="lucide lucide-eye h-4 w-4" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
                    12.4k watching
                  </span>
</div>
<h3 className="text-[20px] font-semibold text-slate-900 tracking-tight">Wealth Live: Market Stream</h3>
<p className="text-[14px] text-slate-600 mt-1">Streaming now — real-time commentary, signals, and Q&amp;A.</p>
<button className="mt-3 w-full h-10 rounded-lg text-white text-[14px] font-medium hover:bg-slate-800 transition flex items-center justify-center gap-2 bg-[#0A6EE7]">
<svg className="lucide lucide-play h-4 w-4" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                  Watch Live
                </button>
<div className="mt-2 flex items-center gap-1 text-[13px] text-slate-500">
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                  Started 5m ago
                </div>
</div>
</div>

<div className="rounded-lg border border-slate-200 bg-white">
<div className="p-4 border-b border-slate-200">
<h4 className="text-[16px] font-semibold tracking-tight">Recommended Channels</h4>
</div>
<div className="p-4 space-y-3">
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-[15px] font-semibold text-slate-900 truncate">Clear Perspective Morning</div>
<div className="text-[13px] text-slate-500 truncate">Daily brief from the desk</div>
</div>
<button className="px-3 h-9 rounded-lg text-white text-[13px] font-medium hover:bg-slate-800 transition bg-[#0A6EE7]">Follow</button>
</div>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?q=80&amp;w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-[15px] font-semibold text-slate-900 truncate">Derivatives</div>
<div className="text-[13px] text-slate-500 truncate">Futures and options</div>
</div>
<button className="px-3 h-9 rounded-lg bg-white border border-slate-200 text-[13px] font-medium hover:border-slate-300 transition">Following</button>
</div>
<div className="flex items-center gap-3">
<img alt="" className="h-10 w-10 rounded-lg object-cover" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=80&amp;h=80&amp;fit=crop"/>
<div className="flex-1 min-w-0">
<div className="text-[15px] font-semibold text-slate-900 truncate">Quant Signals</div>
<div className="text-[13px] text-slate-500 truncate">Systematic edges</div>
</div>
<button className="px-3 h-9 rounded-lg text-white text-[13px] font-medium hover:bg-slate-800 transition bg-[#0A6EE7]">Follow</button>
</div>
</div>
</div>
</div>
</aside>
</div>
</main>

<div className="h-4"></div>
</div>


    </>
  );
}
