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
      
  lucide.createIcons({strokeWidth:1.5});

  // Tabs
  document.querySelectorAll('.tab-btn').forEach(btn=>{
    btn.addEventListener('click',()=>{
      document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('border-pink-600','text-gray-900'));
      btn.classList.add('border-pink-600','text-gray-900');
      const id='tab-'+btn.dataset.tab;
      document.querySelectorAll('.tab-pane').forEach(p=>p.classList.toggle('hidden',p.id!==id));
      window.scrollTo({top:0,behavior:'smooth'});
    });
  });
  document.querySelector('[data-tab="upcoming"]').click();

  // Expand / collapse trips
  document.querySelectorAll('.trip-card').forEach(card=>{
    const toggle=card.querySelector('.toggle-details');
    const details=card.querySelector('.details');
    toggle.addEventListener('click',()=>{
      const chevron=toggle.querySelector('svg');
      details.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180');
      card.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  // Search & filter
  const searchInput=document.getElementById('searchInput');
  const statusFilter=document.getElementById('statusFilter');
  const filterTrips=()=>{
    const term=searchInput.value.toLowerCase();
    const status=statusFilter.value;
    document.querySelectorAll('#tab-upcoming .trip-card').forEach(card=>{
      const title=card.querySelector('h2').textContent.toLowerCase();
      const badge=card.querySelector('span').textContent;
      card.classList.toggle('hidden',!(title.includes(term)&&(!status||badge===status)));
    });
  };
  searchInput.addEventListener('input',filterTrips);
  statusFilter.addEventListener('change',filterTrips);

  /* --------- Share Sheet --------- */
  const shareBtn=document.getElementById('shareBtn');
  const shareMenu=document.getElementById('shareMenu');
  const toast=document.getElementById('toast');
  const pageUrl=encodeURIComponent(window.location.href);

  const shareLinks={
    whatsapp:`https://wa.me/?text=${pageUrl}`,
    instagram:`https://www.instagram.com/?url=${pageUrl}`,
    line:`https://social-plugins.line.me/lineit/share?url=${pageUrl}`,
    messenger:`https://www.facebook.com/sharer/sharer.php?u=${pageUrl}`,
    telegram:`https://t.me/share/url?url=${pageUrl}`,
    signal:`https://signal.me/#p/${pageUrl}`,
    snapchat:`https://www.snapchat.com/scan?attachmentUrl=${pageUrl}`
  };

  // toggle menu
  shareBtn.addEventListener('click',(e)=>{
    e.stopPropagation();
    shareMenu.classList.toggle('hidden');
  });
  // close on outside click
  window.addEventListener('click',()=>shareMenu.classList.add('hidden'));

  // menu actions
  shareMenu.querySelectorAll('[data-share]').forEach(btn=>{
    btn.addEventListener('click',(e)=>{
      const type=e.currentTarget.dataset.share;
      if(type==='copy'){
        navigator.clipboard.writeText(window.location.href).then(()=>{
          toast.textContent='Link copied';
          toast.classList.remove('opacity-0');
          setTimeout(()=>toast.classList.add('opacity-0'),2000);
        });
      }else{
        window.open(shareLinks[type],'_blank','noopener');
      }
      shareMenu.classList.add('hidden');
    });
  });

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
      

<header className="backdrop-blur bg-white/60 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16 relative">
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">My Bookings</h1>
<button className="p-2 rounded-full hover:bg-pink-200/40 transition relative z-50" id="shareBtn">
<i className="w-5 h-5 stroke-1.5" data-lucide="share-2"></i>
</button>

<div className="hidden absolute top-[72px] right-0 sm:right-0 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden z-50" id="shareMenu">
<div className="divide-y">
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="whatsapp">
<i className="w-4 h-4 stroke-1.5 text-green-600" data-lucide="phone"></i>
<span className="flex-1 text-left text-sm font-medium">WhatsApp</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="instagram">
<i className="w-4 h-4 stroke-1.5 text-rose-500" data-lucide="camera"></i>
<span className="flex-1 text-left text-sm font-medium">Instagram</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="line">
<i className="w-4 h-4 stroke-1.5 text-green-500" data-lucide="message-circle"></i>
<span className="flex-1 text-left text-sm font-medium">LINE</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="messenger">
<i className="w-4 h-4 stroke-1.5 text-blue-600" data-lucide="message-square"></i>
<span className="flex-1 text-left text-sm font-medium">Messenger</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="telegram">
<i className="w-4 h-4 stroke-1.5 text-sky-500" data-lucide="send"></i>
<span className="flex-1 text-left text-sm font-medium">Telegram</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="signal">
<i className="w-4 h-4 stroke-1.5 text-indigo-600" data-lucide="phone-forwarded"></i>
<span className="flex-1 text-left text-sm font-medium">Signal</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="snapchat">
<i className="w-4 h-4 stroke-1.5 text-yellow-400" data-lucide="smile"></i>
<span className="flex-1 text-left text-sm font-medium">Snapchat</span>
</button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="copy">
<i className="w-4 h-4 stroke-1.5 text-gray-500" data-lucide="link"></i>
<span className="flex-1 text-left text-sm font-medium">Copy link</span>
</button>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-6">
<div className="flex flex-col sm:flex-row sm:items-center gap-3">
<label className="relative flex-1">
<i className="w-5 h-5 absolute left-3 top-1/2 -translate-y-1/2 text-gray-500" data-lucide="search"></i>
<input className="w-full pl-10 pr-4 py-3 rounded-xl bg-white shadow focus:ring-2 focus:ring-pink-300/60 outline-none transition" id="searchInput" placeholder="Search trips, cities, status…" type="text"/>
</label>
<select className="sm:w-48 px-4 py-3 rounded-xl bg-white shadow focus:ring-2 focus:ring-pink-300/60 outline-none transition" id="statusFilter">
<option value="">All Status</option>
<option>Confirmed</option>
<option>Pending</option>
<option>Cancelled</option>
</select>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-8">
<div className="border-b flex gap-6">
<button className="tab-btn pb-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-900 transition" data-tab="upcoming">Upcoming Itineraries</button>
<button className="tab-btn pb-3 border-b-2 border-transparent font-medium text-gray-500 hover:text-gray-900 transition" data-tab="past">Past Itineraries</button>
</div>
</section>

<main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="tab-pane space-y-6 pt-6" id="tab-upcoming">

<article className="trip-card rounded-3xl shadow-lg bg-white overflow-hidden">

<header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
<div className="flex-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Sakura Spring Tour</h2>
<p className="text-sm text-gray-500 mt-1">Mar 25 – Apr 02, 2025 • 9 Days</p>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<span className="text-sm font-medium text-pink-600 bg-pink-100 rounded-full px-3 py-1">Confirmed</span>
<p className="text-lg font-semibold tracking-tight">¥ 245,800</p>
<button className="toggle-details p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-5 h-5 stroke-1.5" data-lucide="chevron-down"></i>
</button>
</div>
</header>

<section className="details hidden border-t px-6 pb-8">

<h3 className="mt-6 font-semibold tracking-tight">Itinerary</h3>
<ol className="relative mt-4 border-l-2 border-pink-200">
<li className="pl-6 mb-6">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-white rounded-full border-2 border-pink-300">
<i className="w-3 h-3 stroke-1.5 text-pink-600" data-lucide="map-pin"></i>
</span>
<time className="text-sm text-gray-500">Day 1 • Mar 25</time>
<p className="font-medium">Arrive in Tokyo, check-in, Shibuya Crossing</p>
</li>
<li className="pl-6 mb-6">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-white rounded-full border-2 border-pink-300">
<i className="w-3 h-3 stroke-1.5 text-pink-600" data-lucide="leaf"></i>
</span>
<time className="text-sm text-gray-500">Day 2 • Mar 26</time>
<p className="font-medium">Ueno Park Hanami + Senso-ji Temple</p>
</li>
<li className="pl-6">
<span className="absolute -left-3 top-1 flex items-center justify-center w-6 h-6 bg-white rounded-full border-2 border-pink-300">
<i className="w-3 h-3 stroke-1.5 text-pink-600" data-lucide="mountain"></i>
</span>
<time className="text-sm text-gray-500">Day 3 • Mar 27</time>
<p className="font-medium">Hakone day-trip, onsen experience</p>
</li>
</ol>

<div className="mt-8 space-y-6">
<h3 className="font-semibold tracking-tight">Bookings</h3>

<div className="border rounded-2xl p-4">
<h4 className="font-medium flex items-center gap-2 mb-4">
<i className="w-4 h-4 stroke-1.5 text-pink-600" data-lucide="plane"></i> Flights
            </h4>
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex-1">
<p className="font-medium">ANA • SFO → NRT</p>
<p className="text-sm text-gray-500">Mar 24, 09:15 – Mar 25, 14:40</p>
</div>
<a className="text-sm text-pink-600 hover:underline" href="#">E-ticket</a>
<button className="text-sm font-medium bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition">
                Manage
              </button>
</div>
</div>

<div className="border rounded-2xl p-4">
<h4 className="font-medium flex items-center gap-2 mb-4">
<i className="w-4 h-4 stroke-1.5 text-pink-600" data-lucide="hotel"></i> Hotels
            </h4>
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex-1">
<p className="font-medium">The Blossom Hibiya</p>
<p className="text-sm text-gray-500">Mar 25 – Mar 29 • 4 Nights • Tokyo</p>
</div>
<button className="text-sm font-medium bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition">
                Manage
              </button>
</div>
</div>

<div className="border rounded-2xl p-4">
<h4 className="font-medium flex items-center gap-2 mb-4">
<i className="w-4 h-4 stroke-1.5 text-pink-600" data-lucide="train"></i> Transportation
            </h4>
<div className="flex flex-col sm:flex-row sm:items-center gap-4">
<div className="flex-1">
<p className="font-medium">JR Pass (Nationwide 7-Days)</p>
<p className="text-sm text-gray-500">Valid Mar 26 – Apr 01</p>
</div>
<button className="text-sm font-medium bg-pink-600 text-white rounded-full px-4 py-2 hover:bg-pink-700 transition">
                Manage
              </button>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="font-semibold tracking-tight mb-4">Receipts &amp; Invoices</h3>
<div className="grid sm:grid-cols-2 gap-4">
<div className="border rounded-2xl p-4 flex items-center justify-between">
<div>
<p className="font-medium">ANA Flight</p>
<p className="text-sm text-gray-500">Mar 10, 2025</p>
</div>
<div className="flex items-center gap-3">
<p className="font-medium">¥ 125,000</p>
<button className="p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-4 h-4 stroke-1.5" data-lucide="download"></i>
</button>
</div>
</div>
<div className="border rounded-2xl p-4 flex items-center justify-between">
<div>
<p className="font-medium">Hotel</p>
<p className="text-sm text-gray-500">Mar 12, 2025</p>
</div>
<div className="flex items-center gap-3">
<p className="font-medium">¥ 64,800</p>
<button className="p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-4 h-4 stroke-1.5" data-lucide="download"></i>
</button>
</div>
</div>
</div>
</div>

<div className="sticky bottom-0 left-0 right-0 bg-white/90 backdrop-blur border-t mt-8 flex gap-4 p-4 rounded-b-3xl">
<button className="flex-1 bg-pink-600 text-white font-medium py-3 rounded-xl hover:bg-pink-700 transition">
            View Trip
          </button>
<button className="flex-1 bg-white border border-pink-600 text-pink-600 font-medium py-3 rounded-xl hover:bg-pink-50 transition">
            Tickets
          </button>
<button className="flex-1 bg-white border border-pink-600 text-pink-600 font-medium py-3 rounded-xl hover:bg-pink-50 transition">
            Invoice
          </button>
</div>
</section>
</article>

<article className="trip-card rounded-3xl shadow-lg bg-white overflow-hidden">
<header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6">
<div className="flex-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Tokyo Summer Festival</h2>
<p className="text-sm text-gray-500 mt-1">Aug 10 – Aug 18, 2025 • 9 Days</p>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<span className="text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full px-3 py-1">Pending</span>
<p className="text-lg font-semibold tracking-tight">¥ 198,400</p>
<button className="toggle-details p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-5 h-5 stroke-1.5" data-lucide="chevron-down"></i>
</button>
</div>
</header>
<section className="details hidden border-t px-6 pb-8">
<p className="py-8 text-center text-gray-500">Itinerary details will appear once booking is confirmed.</p>
</section>
</article>
</div>

<div className="tab-pane hidden space-y-6 pt-6" id="tab-past">
<p className="text-center text-gray-500">No past trips yet. Once you’ve travelled, you’ll see them here.</p>
</div>
</main>

<nav className="md:hidden fixed bottom-0 inset-x-0 border-t bg-white/90 backdrop-blur z-40">
<div className="flex justify-around">
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-gray-500">
<i className="w-5 h-5 stroke-1.5" data-lucide="compass"></i>
<span className="text-xs">Explore</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-pink-600">
<i className="w-5 h-5 stroke-1.5" data-lucide="briefcase"></i>
<span className="text-xs font-medium">Bookings</span>
</button>
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-gray-500">
<i className="w-5 h-5 stroke-1.5" data-lucide="user"></i>
<span className="text-xs">Profile</span>
</button>
</div>
</nav>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-xl px-4 py-2 text-sm opacity-0 pointer-events-none transition" id="toast"></div>



    </>
  );
}
