import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



document.addEventListener('DOMContentLoaded', () => { 
  lucide.createIcons(); 
  
  const sidebar = document.getElementById('sidebar');
  const overlay = document.getElementById('sidebarOverlay');
  const openBtn = document.getElementById('openSidebar');
  const closeBtn = document.getElementById('closeSidebar');

  function openSidebar() {
    sidebar.classList.remove('-translate-x-full');
    overlay.classList.remove('opacity-0', 'pointer-events-none');
  }

  function closeSidebar() {
    sidebar.classList.add('-translate-x-full');
    overlay.classList.add('opacity-0', 'pointer-events-none');
  }

  openBtn.addEventListener('click', openSidebar);
  closeBtn.addEventListener('click', closeSidebar);
  overlay.addEventListener('click', closeSidebar);
});

document.getElementById('downloadBtn').addEventListener('click', () => {
  const blob = new Blob([document.documentElement.outerHTML], { type: 'text/html' });
  const url = URL.createObjectURL(blob);
  const a = document.createElement('a');
  a.href = url;
  a.download = 'hotel_explorer.html';
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  URL.revokeObjectURL(url);
});

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f83949d8-67f4-44e7-bd91-b1f427402651_3840w.jpg")'}}></div>
<div className="flex h-full rounded-3xl mt-8 mr-8 mb-8 ml-8">

<aside className="fixed inset-y-0 left-0 z-50 w-64 transform -translate-x-full transition-transform duration-300 ease-in-out lg:translate-x-0 lg:static lg:inset-0 bg-white/80 border-neutral-200 rounded-none border-r backdrop-blur" style={{transform: 'translateX(-100%)', animation: 'slideInLeft 0.6s ease-out 0.3s forwards'}}>
<div className="flex flex-col h-full">

<div className="flex border-neutral-200 rounded border-b pt-6 pr-6 pb-6 pl-6 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-neutral-900 flex items-center justify-center">
<svg className="lucide lucide-hotel w-4 h-4 text-white" data-lucide="hotel" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22v-6.57"></path><path d="M12 11h.01"></path><path d="M12 7h.01"></path><path d="M14 15.43V22"></path><path d="M15 16a5 5 0 0 0-6 0"></path><path d="M16 11h.01"></path><path d="M16 7h.01"></path><path d="M8 11h.01"></path><path d="M8 7h.01"></path><rect height="20" rx="2" width="16" x="4" y="2"></rect></svg>
</div>
<span className="font-semibold text-lg font-sans">HotelFinder</span>
</div>
<button className="lg:hidden w-8 h-8 rounded-lg hover:bg-neutral-100 flex items-center justify-center transition-colors" id="closeSidebar">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>

<nav className="flex-1 pt-6 pr-6 pb-6 pl-6 space-y-2">
<a className="flex items-center gap-3 font-medium text-neutral-900 bg-neutral-100 border-slate-950/10 border rounded-lg pt-2 pr-3 pb-2 pl-3" href="#">
<svg className="lucide lucide-search w-5 h-5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
          Explore
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-heart w-5 h-5" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
          Saved Hotels
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-calendar w-5 h-5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
          My Bookings
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-map-pin w-5 h-5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Destinations
        </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-star w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
          Reviews
        </a>
<div className="pt-4">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-wide mb-3 font-sans">Account</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-user w-5 h-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
            Profile
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
            Settings
          </a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 hover:text-neutral-900 transition-colors font-sans" href="#">
<svg className="lucide lucide-help-circle w-5 h-5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
            Help &amp; Support
          </a>
</div>
</nav>

<div className="border-neutral-200 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center gap-3 mb-4">
<img alt="User" className="w-10 h-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9306e964-743f-4746-b85b-870737f72f8f_320w.jpg" style={{}}/>
<div className="">
<p className="font-medium text-sm font-sans">Sarah Wilson</p>
<p className="text-xs text-neutral-500 font-sans">Premium Member</p>
</div>
</div>
<button className="w-full flex items-center justify-center gap-2 px-3 py-2 rounded-lg text-neutral-600 hover:bg-neutral-50 transition-colors text-sm font-sans">
<svg className="lucide lucide-log-out w-4 h-4" data-lucide="log-out" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 17 5-5-5-5"></path><path d="M21 12H9"></path><path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4"></path></svg>
          Sign out
        </button>
</div>
</div>
</aside>

<div className="fixed inset-0 bg-black bg-opacity-50 z-40 lg:hidden opacity-0 pointer-events-none transition-opacity duration-300" id="sidebarOverlay"></div>

<div className="flex-1 flex flex-col min-w-0">

<header className="flex-none bg-white pt-4 pr-6 pb-4 pl-6 shadow-sm" style={{transform: 'translateY(-20px)', opacity: '0', animation: 'slideDown 0.6s ease-out 0.2s forwards'}}>
<div className="flex items-center gap-4 max-w-7xl mx-auto">
<button className="lg:hidden w-10 h-10 rounded-lg hover:bg-neutral-100 flex items-center justify-center transition-colors" id="openSidebar">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
<form className="flex-1 grid grid-cols-2 sm:grid-cols-5 gap-3">
<div className="col-span-2 sm:col-span-1">
<label className="block text-sm font-medium mb-1 font-sans" htmlFor="where">Destination</label>
<div className="relative">
<input className="w-full rounded-lg border border-neutral-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-neutral-900/40 hover:border-neutral-400 transition-colors" id="where" placeholder="Barcelona" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-map-pin w-4 h-4 text-neutral-500" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 font-sans" htmlFor="when">Dates</label>
<div className="relative">
<input className="w-full rounded-lg border border-neutral-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-neutral-900/40 hover:border-neutral-400 transition-colors" id="when" placeholder="May 10-24" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-calendar w-4 h-4 text-neutral-500" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 font-sans" htmlFor="guests">Travelers</label>
<div className="relative">
<input className="w-full rounded-lg border border-neutral-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-neutral-900/40 hover:border-neutral-400 transition-colors" id="guests" placeholder="3 guests" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-users w-4 h-4 text-neutral-500" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
<div className="">
<label className="block text-sm font-medium mb-1 font-sans" htmlFor="stars">Rating</label>
<div className="relative">
<input className="w-full rounded-lg border border-neutral-300 py-2 pl-3 pr-10 focus:outline-none focus:ring-2 focus:ring-neutral-900/40 hover:border-neutral-400 transition-colors" id="stars" placeholder="5★ luxury" type="text"/>
<div className="absolute right-3 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-chevron-down w-4 h-4 text-neutral-500" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>
<div className="flex mt-6 items-center">
<button className="w-full sm:w-auto inline-flex justify-center items-center gap-2 rounded-lg bg-neutral-900 text-white px-4 py-2 hover:bg-neutral-800 transition-colors" type="submit">
<svg className="lucide lucide-search w-4 h-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg><span className="sm:hidden font-sans">Search</span>
</button>
</div>
</form>
</div>
</header>

<div className="relative flex-1 overflow-hidden">

<div className="absolute inset-0">
<iframe className="w-full h-full" src="https://www.openstreetmap.org/export/embed.html?bbox=2.1%2C41.35%2C2.22%2C41.42&amp;layer=mapnik" title="Map"></iframe>
</div>


<aside className="absolute left-1/2 -translate-x-1/2 md:-translate-x-0 md:left-8 top-28 md:top-24 w-[90%] md:w-96 lg:w-[28rem] bg-white rounded-2xl shadow-lg p-6 space-y-6 overflow-y-auto max-h-[70vh] z-10" style={{transform: 'translateY(20px)', opacity: '0', animation: 'slideUp 0.6s ease-out 0.6s forwards'}}>
<div className="flex items-center justify-between">
<h2 className="text-xl font-semibold font-sans">287 amazing properties found</h2>
<button className="flex items-center text-sm font-medium gap-1 text-neutral-500 hover:text-neutral-900 transition-colors font-sans">
            Sort by rating <svg className="lucide lucide-arrow-up w-4 h-4" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>

<div className="space-y-6">
<div className="flex gap-4" style={{transform: 'translateY(10px)', opacity: '0', animation: 'fadeUp 0.5s ease-out 0.8s forwards'}}>
<div className="relative flex-none">
<img alt="Hotel" className="w-32 h-28 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/9eb96530-cbdf-4573-b08f-ee7240680cc8_320w.jpg" style={{}}/>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors">
<svg className="lucide lucide-heart w-4 h-4 text-red-500 fill-red-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex-1">
<h3 className="font-semibold font-sans">Grand Palace Barcelona</h3>
<p className="text-sm text-neutral-500 font-sans">Passeig de Gràcia, 102</p>
<div className="flex flex-wrap gap-2 mt-2 mb-2">
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">WiFi</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Rooftop terrace</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Infinity pool</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Valet parking</span>
</div>
<div className="flex items-center justify-between">
<div className="">
<span className="text-lg font-semibold font-sans">€420</span><span className="text-sm text-neutral-500 font-sans">/night</span>
</div>
<button className="hover:bg-neutral-800 transition-colors text-sm text-white bg-neutral-900 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 font-sans">More</button>
</div>
</div>
<div className="flex flex-col items-end justify-between">
<div className="flex items-center gap-1 text-sm font-sans">
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.8(2,154)
              </div>
</div>
</div>
<div className="flex gap-4" style={{transform: 'translateY(10px)', opacity: '0', animation: 'fadeUp 0.5s ease-out 1s forwards'}}>
<div className="relative flex-none">
<img alt="Hotel" className="w-32 h-28 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5c10e182-ac88-49f7-b57d-6a268b5fa81e_320w.jpg" style={{}}/>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors">
<svg className="lucide lucide-heart w-4 h-4 text-neutral-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex-1">
<h3 className="font-semibold font-sans">Hotel Marina Vista</h3>
<p className="text-sm text-neutral-500 font-sans">Port Olímpic Marina</p>
<div className="flex flex-wrap gap-2 my-2">
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">WiFi</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Valet parking</span>
<span className="text-xs bg-neutral-100 rounded-full pt-0.5 pr-2 pb-0.5 pl-2">Beach access</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Spa</span>
</div>
<div className="flex items-center justify-between">
<div className="">
<span className="text-lg font-semibold font-sans">€580</span><span className="text-sm text-neutral-500 font-sans">/night</span>
</div>
<button className="hover:bg-neutral-800 transition-colors text-sm text-white bg-neutral-900 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 font-sans">More</button>
</div>
</div>
<div className="flex flex-col items-end justify-between">
<div className="flex items-center gap-1 text-sm font-sans">
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                4.9(1,823)
              </div>
</div>
</div>
<div className="flex gap-4" style={{transform: 'translateY(10px)', opacity: '0', animation: 'fadeUp 0.5s ease-out 1.2s forwards'}}>
<div className="relative flex-none">
<img alt="Hotel" className="w-32 h-28 rounded-xl object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4785a61d-64cb-483a-abf4-af980ea112a5_320w.jpg" style={{}}/>
<button className="absolute top-2 right-2 w-7 h-7 rounded-full bg-white flex items-center justify-center hover:bg-neutral-100 transition-colors">
<svg className="lucide lucide-heart w-4 h-4 text-neutral-500" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="flex-1">
<h3 className="font-semibold font-sans">Boutique Casa Moderna</h3>
<p className="text-sm text-neutral-500 font-sans">Carrer del Consell de Cent</p>
<div className="flex flex-wrap gap-2 my-2">
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Valet parking</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Private garden</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">Pool deck</span>
<span className="px-2 py-0.5 rounded-full bg-neutral-100 text-xs font-sans">WiFi</span>
</div>
<div className="flex items-center justify-between">
<div>
<span className="text-lg font-semibold font-sans">€640</span><span className="text-sm text-neutral-500 font-sans">/night</span>
</div>
<button className="hover:bg-neutral-800 transition-colors text-sm text-white bg-neutral-900 rounded-full pt-1.5 pr-4 pb-1.5 pl-4 font-sans">More</button>
</div>
</div>
<div className="flex flex-col items-end justify-between">
<div className="flex items-center gap-1 text-sm font-sans">
<svg className="lucide lucide-star w-4 h-4 text-amber-400 fill-amber-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                5.0(743)
              </div>
</div>
</div>
</div>
</aside>

<div className="absolute top-52 md:top-44 right-4 md:left-1/2 md:-translate-x-1/2 flex gap-3 z-20" style={{transform: 'translateY(-10px)', opacity: '0', animation: 'slideDown 0.5s ease-out 1.4s forwards'}}>
<select className="px-4 py-2 rounded-lg bg-white border border-neutral-300 text-sm focus:outline-none hover:border-neutral-400 transition-colors">
<option className="font-sans">District</option>
</select>
<select className="px-4 py-2 rounded-lg bg-white border border-neutral-300 text-sm focus:outline-none hover:border-neutral-400 transition-colors">
<option className="font-sans">Features</option>
</select>
<select className="px-4 py-2 rounded-lg bg-white border border-neutral-300 text-sm focus:outline-none hover:border-neutral-400 transition-colors">
<option className="font-sans">Budget</option>
</select>
<button className="w-10 h-10 rounded-lg bg-neutral-900 text-white flex items-center justify-center hover:bg-neutral-800 transition-colors">
<svg className="lucide lucide-filter w-5 h-5" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
</button>
</div>


</div>

</div>
</div>
<style>
@keyframes fadeIn { to { opacity: 1; } }
@keyframes slideDown { to { transform: translateY(0); opacity: 1; } }
@keyframes slideUp { to { transform: translateY(0); opacity: 1; } }
@keyframes slideRight { to { transform: translateX(0); opacity: 1; } }
@keyframes slideLeft { to { transform: translateX(0); opacity: 1; } }
@keyframes fadeUp { to { transform: translateY(0); opacity: 1; } }
@keyframes scaleIn { to { transform: scale(1); opacity: 1; } }
@keyframes slideInLeft { 
  from { transform: translateX(-100%); }
  to { transform: translateX(0); } 
}
@media (min-width: 1024px) {
  #sidebar { transform: translateX(0); }
}
</style>


    </>
  );
}
