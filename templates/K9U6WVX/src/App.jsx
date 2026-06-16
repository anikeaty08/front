import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
  lucide.createIcons({strokeWidth:1.5});

  /* ------- Tabs -------- */
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

  /* ------- Expand / collapse trips -------- */
  document.querySelectorAll('.trip-card').forEach(card=>{
    const toggle=card.querySelector('.toggle-details');
    const details=card.querySelector('.details');
    const chevron=toggle.querySelector('svg');
    const label=toggle.querySelector('span');
    toggle.addEventListener('click',()=>{
      const open=details.classList.toggle('hidden');
      chevron.classList.toggle('rotate-180',!open);
      label.textContent=open?'View Details':'Hide Details';
      card.scrollIntoView({behavior:'smooth',block:'start'});
    });
  });

  /* ------- Search / Filter --------- */
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

  /* ------- Share Sheet per card -------- */
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
  const toast=document.getElementById('toast');
  window.addEventListener('click',()=>document.querySelectorAll('.share-menu').forEach(m=>m.classList.add('hidden')));
  document.querySelectorAll('.share-btn').forEach(btn=>{
    const menu=btn.parentElement.querySelector('.share-menu');
    btn.addEventListener('click',(e)=>{
      e.stopPropagation();document.querySelectorAll('.share-menu').forEach(m=>m!==menu&&m.classList.add('hidden'));menu.classList.toggle('hidden');
    });
    menu.querySelectorAll('[data-share]').forEach(item=>{
      item.addEventListener('click',(e)=>{
        const type=e.currentTarget.dataset.share;
        if(type==='copy'){
          navigator.clipboard.writeText(window.location.href).then(()=>{toast.textContent='Link copied';toast.classList.remove('opacity-0');setTimeout(()=>toast.classList.add('opacity-0'),2000);});
        }else{window.open(shareLinks[type],'_blank','noopener');}
        menu.classList.add('hidden');
      });
    });
  });

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="backdrop-blur bg-white/60 sticky top-0 z-40">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-16">
<h1 className="text-xl sm:text-2xl font-semibold tracking-tight">My Bookings</h1>
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
<header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 relative">
<div className="flex-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Sakura Spring Tour</h2>
<p className="text-sm text-gray-500 mt-1">Mar 25 – Apr 02, 2025 • 9 Days</p>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<span className="text-sm font-medium text-pink-600 bg-pink-100 rounded-full px-3 py-1">Confirmed</span>
<p className="text-lg font-semibold tracking-tight">¥ 245,800</p>

<div className="relative">
<button className="share-btn p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-5 h-5 stroke-1.5" data-lucide="share-2"></i>
</button>
<div className="share-menu hidden absolute top-[52px] right-0 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden z-50">
<div className="divide-y">
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="whatsapp"><i className="w-4 h-4 stroke-1.5 text-green-600" data-lucide="phone"></i><span className="flex-1 text-left text-sm font-medium">WhatsApp</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="instagram"><i className="w-4 h-4 stroke-1.5 text-rose-500" data-lucide="camera"></i><span className="flex-1 text-left text-sm font-medium">Instagram</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="line"><i className="w-4 h-4 stroke-1.5 text-green-500" data-lucide="message-circle"></i><span className="flex-1 text-left text-sm font-medium">LINE</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="messenger"><i className="w-4 h-4 stroke-1.5 text-blue-600" data-lucide="message-square"></i><span className="flex-1 text-left text-sm font-medium">Messenger</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="telegram"><i className="w-4 h-4 stroke-1.5 text-sky-500" data-lucide="send"></i><span className="flex-1 text-left text-sm font-medium">Telegram</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="signal"><i className="w-4 h-4 stroke-1.5 text-indigo-600" data-lucide="phone-forwarded"></i><span className="flex-1 text-left text-sm font-medium">Signal</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="snapchat"><i className="w-4 h-4 stroke-1.5 text-yellow-400" data-lucide="smile"></i><span className="flex-1 text-left text-sm font-medium">Snapchat</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="copy"><i className="w-4 h-4 stroke-1.5 text-gray-500" data-lucide="link"></i><span className="flex-1 text-left text-sm font-medium">Copy link</span></button>
</div>
</div>
</div>

<button className="toggle-details view-btn flex items-center gap-1 px-4 py-2 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition text-sm font-medium">
<span>View Details</span>
<i className="w-4 h-4 stroke-1.5" data-lucide="chevron-down"></i>
</button>
</div>
</header>

<section className="details hidden border-t px-6 pb-20 md:pb-8 animate-[fadeIn_0.4s_ease-out]">

<h3 className="text-base sm:text-lg font-semibold tracking-tight mt-8 mb-4">Itinerary</h3>
<ol className="relative border-l border-pink-200/70 pl-6 space-y-6">

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="plane"></i>
</div>
<p className="text-sm text-gray-500">Day 1 · Mar 25</p>
<h4 className="font-medium tracking-tight">Arrive in Tokyo · Check-in &amp; Welcome Dinner</h4>
<p className="text-sm text-gray-600 mt-1">Evening stroll through Shibuya Crossing &amp; dinner at local izakaya.</p>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="landmark"></i>
</div>
<p className="text-sm text-gray-500">Day 2 · Mar 26</p>
<h4 className="font-medium tracking-tight">Tokyo Highlights Tour</h4>
<p className="text-sm text-gray-600 mt-1">Senso-ji Temple, Meiji Shrine, Harajuku street food crawl.</p>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="train"></i>
</div>
<p className="text-sm text-gray-500">Day 3 · Mar 27</p>
<h4 className="font-medium tracking-tight">Bullet Train to Kyoto &amp; Gion Night Walk</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="flower"></i>
</div>
<p className="text-sm text-gray-500">Day 4 · Mar 28</p>
<h4 className="font-medium tracking-tight">Arashiyama Bamboo Grove &amp; Tea Ceremony</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="mountain"></i>
</div>
<p className="text-sm text-gray-500">Day 5 · Mar 29</p>
<h4 className="font-medium tracking-tight">Day Trip to Nara · Deer Park &amp; Todai-ji</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="hot-spring"></i>
</div>
<p className="text-sm text-gray-500">Day 6 · Mar 30</p>
<h4 className="font-medium tracking-tight">Onsen Retreat in Hakone</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="sakura"></i>
</div>
<p className="text-sm text-gray-500">Day 7 · Mar 31</p>
<h4 className="font-medium tracking-tight">Cherry Blossom Picnic · Lake Ashi Cruise</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="chef-hat"></i>
</div>
<p className="text-sm text-gray-500">Day 8 · Apr 1</p>
<h4 className="font-medium tracking-tight">Sushi-making Class &amp; Free Evening</h4>
</li>

<li className="group">
<div className="absolute -left-4 top-1 w-8 h-8 rounded-full bg-white border border-pink-200 flex items-center justify-center">
<i className="w-[18px] h-[18px] text-pink-500 stroke-1.5" data-lucide="plane"></i>
</div>
<p className="text-sm text-gray-500">Day 9 · Apr 2</p>
<h4 className="font-medium tracking-tight">Return Flight · Sayōnara!</h4>
</li>
</ol>

<h3 className="text-base sm:text-lg font-semibold tracking-tight mt-12 mb-4">Bookings</h3>
<div className="space-y-8">

<div>
<h4 className="font-medium tracking-tight mb-3 flex items-center gap-2"><i className="w-4 h-4 stroke-1.5 text-pink-500" data-lucide="plane"></i>Flights</h4>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">ANA · NH812</p>
<p className="text-sm text-gray-500">SIN → HND • Mar 25 | 07:15‒15:25</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">e-Ticket</button>
</div>
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">ANA · NH801</p>
<p className="text-sm text-gray-500">HND → SIN • Apr 2 | 10:10‒16:05</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">e-Ticket</button>
</div>
</div>
</div>

<div>
<h4 className="font-medium tracking-tight mb-3 flex items-center gap-2"><i className="w-4 h-4 stroke-1.5 text-pink-500" data-lucide="bed"></i>Hotels</h4>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">Shibuya Excel Hotel Tokyu</p>
<p className="text-sm text-gray-500">Mar 25–27 · 2 nights</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">Manage</button>
</div>
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">Hyatt Regency Kyoto</p>
<p className="text-sm text-gray-500">Mar 27–30 · 3 nights</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">Manage</button>
</div>
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">Hakone Gora Onsen Ryokan</p>
<p className="text-sm text-gray-500">Mar 30–Apr 2 · 3 nights</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">Manage</button>
</div>
</div>
</div>

<div>
<h4 className="font-medium tracking-tight mb-3 flex items-center gap-2"><i className="w-4 h-4 stroke-1.5 text-pink-500" data-lucide="train"></i>Transportation</h4>
<div className="grid md:grid-cols-2 gap-4">
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">JR Pass (7 days)</p>
<p className="text-sm text-gray-500">Mar 26–Apr 1</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">View QR</button>
</div>
<div className="rounded-2xl border bg-white p-4 flex justify-between items-start">
<div>
<p className="font-medium tracking-tight">Suica IC Card</p>
<p className="text-sm text-gray-500">Pre-loaded ¥3,000</p>
</div>
<button className="text-pink-600 text-sm font-medium hover:underline">View QR</button>
</div>
</div>
</div>
</div>

<h3 className="text-base sm:text-lg font-semibold tracking-tight mt-12 mb-4">Receipts &amp; Invoices</h3>
<div className="overflow-x-auto">
<table className="min-w-full text-sm text-left">
<thead>
<tr className="border-b">
<th className="py-2 pr-6 font-medium">Item</th>
<th className="py-2 pr-6 font-medium">Vendor</th>
<th className="py-2 pr-6 font-medium">Date</th>
<th className="py-2 pr-6 font-medium text-right">Amount</th>
<th className="py-2 font-medium text-right">PDF</th>
</tr>
</thead>
<tbody>
<tr className="border-b">
<td className="py-3 pr-6">Flight · NH812</td>
<td className="py-3 pr-6">ANA</td>
<td className="py-3 pr-6">Feb 11 2025</td>
<td className="py-3 pr-6 text-right">¥ 82,400</td>
<td className="py-3 text-right"><button className="p-2 hover:bg-rose-50 rounded-full"><i className="w-4 h-4 stroke-1.5" data-lucide="download"></i></button></td>
</tr>
<tr className="border-b">
<td className="py-3 pr-6">Hotel · Shibuya Excel</td>
<td className="py-3 pr-6">Tokyu Hotels</td>
<td className="py-3 pr-6">Feb 11 2025</td>
<td className="py-3 pr-6 text-right">¥ 41,000</td>
<td className="py-3 text-right"><button className="p-2 hover:bg-rose-50 rounded-full"><i className="w-4 h-4 stroke-1.5" data-lucide="download"></i></button></td>
</tr>
<tr>
<td className="py-3 pr-6">JR Pass (7 days)</td>
<td className="py-3 pr-6">Japan Rail</td>
<td className="py-3 pr-6">Feb 12 2025</td>
<td className="py-3 pr-6 text-right">¥ 33,800</td>
<td className="py-3 text-right"><button className="p-2 hover:bg-rose-50 rounded-full"><i className="w-4 h-4 stroke-1.5" data-lucide="download"></i></button></td>
</tr>
</tbody>
</table>
</div>

<div className="md:hidden fixed bottom-16 inset-x-4">
<div className="bg-white shadow-xl rounded-2xl border flex justify-around p-3">
<button className="flex flex-col items-center gap-1 text-pink-600">
<i className="w-5 h-5 stroke-1.5" data-lucide="map"></i><span className="text-xs font-medium">View Trip</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-700">
<i className="w-5 h-5 stroke-1.5" data-lucide="ticket"></i><span className="text-xs">Show Tickets</span>
</button>
<button className="flex flex-col items-center gap-1 text-gray-700">
<i className="w-5 h-5 stroke-1.5" data-lucide="download"></i><span className="text-xs">Invoice</span>
</button>
</div>
</div>
</section>
</article>

<article className="trip-card rounded-3xl shadow-lg bg-white overflow-hidden">
<header className="flex flex-col sm:flex-row items-start sm:items-center gap-4 p-6 relative">
<div className="flex-1">
<h2 className="text-lg sm:text-xl font-semibold tracking-tight">Tokyo Summer Festival</h2>
<p className="text-sm text-gray-500 mt-1">Aug 10 – Aug 18, 2025 • 9 Days</p>
</div>
<div className="flex items-center gap-3 sm:gap-6">
<span className="text-sm font-medium text-yellow-700 bg-yellow-100 rounded-full px-3 py-1">Pending</span>
<p className="text-lg font-semibold tracking-tight">¥ 198,400</p>

<div className="relative">
<button className="share-btn p-2 rounded-full hover:bg-rose-100 transition">
<i className="w-5 h-5 stroke-1.5" data-lucide="share-2"></i>
</button>
<div className="share-menu hidden absolute top-[52px] right-0 w-64 bg-white rounded-2xl shadow-xl border overflow-hidden z-50">
<div className="divide-y">
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="whatsapp"><i className="w-4 h-4 stroke-1.5 text-green-600" data-lucide="phone"></i><span className="flex-1 text-left text-sm font-medium">WhatsApp</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="instagram"><i className="w-4 h-4 stroke-1.5 text-rose-500" data-lucide="camera"></i><span className="flex-1 text-left text-sm font-medium">Instagram</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="line"><i className="w-4 h-4 stroke-1.5 text-green-500" data-lucide="message-circle"></i><span className="flex-1 text-left text-sm font-medium">LINE</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="messenger"><i className="w-4 h-4 stroke-1.5 text-blue-600" data-lucide="message-square"></i><span className="flex-1 text-left text-sm font-medium">Messenger</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="telegram"><i className="w-4 h-4 stroke-1.5 text-sky-500" data-lucide="send"></i><span className="flex-1 text-left text-sm font-medium">Telegram</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="signal"><i className="w-4 h-4 stroke-1.5 text-indigo-600" data-lucide="phone-forwarded"></i><span className="flex-1 text-left text-sm font-medium">Signal</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="snapchat"><i className="w-4 h-4 stroke-1.5 text-yellow-400" data-lucide="smile"></i><span className="flex-1 text-left text-sm font-medium">Snapchat</span></button>
<button className="flex items-center gap-3 w-full px-4 py-3 hover:bg-rose-50 transition" data-share="copy"><i className="w-4 h-4 stroke-1.5 text-gray-500" data-lucide="link"></i><span className="flex-1 text-left text-sm font-medium">Copy link</span></button>
</div>
</div>
</div>

<button className="toggle-details view-btn flex items-center gap-1 px-4 py-2 rounded-xl bg-pink-50 text-pink-600 hover:bg-pink-100 transition text-sm font-medium">
<span>View Details</span>
<i className="w-4 h-4 stroke-1.5" data-lucide="chevron-down"></i>
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
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-gray-500"><i className="w-5 h-5 stroke-1.5" data-lucide="compass"></i><span className="text-xs">Explore</span></button>
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-pink-600"><i className="w-5 h-5 stroke-1.5" data-lucide="briefcase"></i><span className="text-xs font-medium">Bookings</span></button>
<button className="nav-btn flex flex-col items-center gap-1 p-3 text-gray-500"><i className="w-5 h-5 stroke-1.5" data-lucide="user"></i><span className="text-xs">Profile</span></button>
</div>
</nav>

<div className="fixed bottom-6 left-1/2 -translate-x-1/2 bg-gray-900 text-white rounded-xl px-4 py-2 text-sm opacity-0 pointer-events-none transition" id="toast"></div>



    </>
  );
}
