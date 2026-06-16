import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    document.addEventListener('DOMContentLoaded', () => {
      const tabs = document.querySelectorAll('.quick-tab');
      const sections = document.querySelectorAll('main > section');

      function showSection(id) {
        sections.forEach(sec => {
          if (sec.id === id) {
            sec.classList.remove('hidden');
          } else {
            sec.classList.add('hidden');
          }
        });
      }

      function setActiveTab(activeBtn) {
        tabs.forEach(btn => {
          btn.classList.remove('bg-[#913D43]', 'text-white', 'shadow-sm');
          btn.classList.add('bg-white', 'text-[#333]', 'ring-1', 'ring-black/5', 'hover:bg-black/5');
        });
        activeBtn.classList.add('bg-[#913D43]', 'text-white', 'shadow-sm');
        activeBtn.classList.remove('bg-white', 'text-[#333]', 'ring-1', 'ring-black/5', 'hover:bg-black/5');
      }

      tabs.forEach(btn => {
        btn.addEventListener('click', () => {
          const targetId = btn.getAttribute('data-target');
          if (!targetId) return;
          showSection(targetId);
          setActiveTab(btn);
          window.scrollTo({ top: 0, behavior: 'smooth' });
        });
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen max-w-md mx-auto relative pb-24">

<header className="sticky top-0 z-40 bg-white/80 backdrop-blur border-b border-black/5">
<div className="px-4 py-3 flex items-center justify-between">
<div className="flex items-start gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center ring-1 ring-black/5">

<span className="text-[#913D43] font-semibold tracking-tight" style={{fontFamily: 'Montserrat, system-ui, -apple-system'}}>AT</span>
</div>
<div>
<h1 className="text-[20px] tracking-tight leading-6 text-[#1f1f1f] font-semibold" style={{fontFamily: 'Montserrat, system-ui, -apple-system'}}>
              Grand Meridian Hotel
            </h1>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato, system-ui, -apple-system'}}>Powered by AeroTag Assist</p>
</div>
</div>
<div className="flex items-center gap-2">

<button aria-label="Open cart" className="relative rounded-lg p-2 hover:bg-black/5 active:scale-[0.98] transition ring-1 ring-black/0 hover:ring-black/5 focus:outline-none focus:ring-2 focus:ring-[#913D43]/30" id="openCartBtn">
<svg className="h-5 w-5 stroke-[#1f1f1f]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="9" cy="21" r="1"></circle>
<circle cx="20" cy="21" r="1"></circle>
<path d="M1 1h4l2.68 13.39a2 2 0 0 0 2 1.61h7.72a2 2 0 0 0 2-1.61L21 6H6"></path>
</svg>
<span className="absolute -top-1 -right-1 text-[10px] px-1.5 py-0.5 rounded-full bg-[#FFB400] text-white font-medium" id="cartCount" style={{fontFamily: 'Lato'}}>0</span>
</button>
</div>
</div>

<nav className="px-4 pb-3">
<div className="flex gap-2 overflow-x-auto no-scrollbar">
<button className="quick-tab active rounded-full px-3 py-1.5 text-[12px] bg-[#913D43] text-white shadow-sm transition" data-target="section-room" style={{fontFamily: 'Lato'}}>Room Service</button>
<button className="quick-tab rounded-full px-3 py-1.5 text-[12px] bg-white text-[#333] ring-1 ring-black/5 hover:bg-black/5 transition" data-target="section-essentials" style={{fontFamily: 'Lato'}}>Essentials</button>
<button className="quick-tab rounded-full px-3 py-1.5 text-[12px] bg-white text-[#333] ring-1 ring-black/5 hover:bg-black/5 transition" data-target="section-housekeeping" style={{fontFamily: 'Lato'}}>Housekeeping</button>
<button className="quick-tab rounded-full px-3 py-1.5 text-[12px] bg-white text-[#333] ring-1 ring-black/5 hover:bg-black/5 transition" data-target="section-maintenance" style={{fontFamily: 'Lato'}}>Maintenance</button>
<button className="quick-tab rounded-full px-3 py-1.5 text-[12px] bg-white text-[#333] ring-1 ring-black/5 hover:bg-black/5 transition" data-target="section-laundry" style={{fontFamily: 'Lato'}}>Laundry</button>
<button className="quick-tab rounded-full px-3 py-1.5 text-[12px] bg-white text-[#333] ring-1 ring-black/5 hover:bg-black/5 transition" data-target="section-hub" style={{fontFamily: 'Lato'}}>Hotel Hub</button>
</div>
</nav>
</header>
<main className="px-4 pt-3 space-y-8">

<section className="space-y-4" id="section-room">

<div className="relative">
<div className="flex overflow-x-auto snap-x snap-mandatory rounded-2xl ring-1 ring-black/5 bg-white">
<img alt="Gourmet Breakfast" className="h-40 w-full object-cover flex-none snap-center rounded-2xl" src="https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Healthy Lunch" className="h-40 w-full object-cover flex-none snap-center rounded-2xl" src="https://images.unsplash.com/photo-1544025162-d76694265947?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<img alt="Dinner Delight" className="h-40 w-full object-cover flex-none snap-center rounded-2xl" src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute bottom-2 left-0 right-0 flex justify-center gap-1.5">
<span className="h-1.5 w-4 rounded-full bg-white/80"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/60"></span>
<span className="h-1.5 w-1.5 rounded-full bg-white/60"></span>
</div>
</div>

<div className="flex items-center gap-2 overflow-x-auto-scrollbar">
<button className="rs-tab active px-3 py-1.5 rounded-full bg-[#913D43] text text-[12px] shadow-sm transition" data-cat="Breakfast" style={{fontFamily: 'Lato'}}>Breakfast</button>
<button className="rs-tab px-3 py-1.5 rounded-full bg-white text-[#333] text-[12px] ring-1 ring-black/5 hover:bg-black/5 transition" data-cat="Lunch" style={{fontFamily: 'Lato'}}>Lunch</button>
<button className="rs-tab px-3 py-1.5 rounded-full bg-white text-[#333] text-[12px] ring-1 ring-black/5 hover:bg-black/5 transition" data-cat="Dinner" style={{fontFamily: 'Lato'}}>Dinner</button>
<button className="rs-tab px-3 py-1.5 rounded-full bg-white text-[#333] text-[12px] ring-1 ring-black/5 hover:bg-black/5 transition" data-cat="Snacks" style={{fontFamily: 'Lato'}}>Snacks</button>
<button className="rs-tab px-3 py-1.5 rounded-full bg-white text-[#333] text-[12px] ring-1 ring-black/5 hover:bg-black/5 transition" data-cat="Beverages" style={{fontFamily: 'Lato'}}>Beverages</button>
<button className="rs-tab px-3 py-1.5 rounded-full bg-white text-[#333] text-[12px] ring-1 ring-black/5 hover:bg-black/5 transition" data-cat="Desserts" style={{fontFamily: 'Lato'}}>Desserts</button>
</div>

<div className="space-y-3" id="menuList">

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm hover:shadow transition">
<div className="flex gap-3">
<img alt="Avocado Toast" className="h-16 w-16 rounded-xl object-cover ring-1 ring-black/5" src="https://images.unsplash.com/photo-1551183053-bf91a1d81141?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[16px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Avocado Toast</h3>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Sourdough, smashed avocado, cherry tomatoes.</p>
</div>
<span className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>$9.50</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition add-to-cart" style={{fontFamily: 'Lato'}}>Add to Cart</button>
<button className="h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center" title="Schedule">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm hover:shadow transition">
<div className="flex gap-3">
<img alt="Pancakes" className="h-16 w-16 rounded-xl object-cover ring-1 ring-black/5" src="https://images.unsplash.com/photo-1526318472351-c75fcf070305?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[16px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Buttermilk Pancakes</h3>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Served with maple syrup and berries.</p>
</div>
<span className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>$12.00</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<div className="flex items-center gap-2">
<button className="h-8 px-3 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition add-to-cart" style={{fontFamily: 'Lato'}}>Add to Cart</button>
<button className="h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center" title="Schedule">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<path d="M12 6v6l4 2"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-center justify-between mb-3">
<h4 className="text-[16px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Live Order Tracker</h4>
<button className="text-[12px] px-3 py-1.5 rounded-lg bg-[#FFB400] text-white hover:opacity-90 active:scale-95 transition" id="simulateOrderBtn" style={{fontFamily: 'Lato'}}>Simulate</button>
</div>
<div className="flex items-center justify-between">
<div className="flex-1">
<div className="h-2 w-full rounded-full bg-black/5 overflow-hidden">
<div className="h-2 w-0 bg-[#913D43] transition-all duration-700" id="orderProgress"></div>
</div>
<div className="mt-2 flex justify-between text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>
<span>Preparing</span><span>Out for Delivery</span><span>Delivered</span>
</div>
</div>
<div className="ml-3 shrink-0 h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h13v10H3z"></path>
<path d="M16 10h2l3 3v4h-5z"></path>
<circle cx="7.5" cy="17.5" r="1.5"></circle>
<circle cx="18.5" cy="17.5" r="1.5"></circle>
</svg>
</div>
</div>
</div>
</div>

<button className="fixed z-30 bottom-24 right-6 h-12 w-12 rounded-full shadow-lg bg-[#913D43] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition ring-1 ring-black/5" id="rsFab">
<svg className="h-5 w-5 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</section>

<section className="space-y-3 hidden" id="section-essentials">
<h2 className="text-[18px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Toiletries &amp; Essentials</h2>
<div className="grid grid-cols-1 gap-3">

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 3h10v4H7z"></path>
<rect height="14" rx="2" width="14" x="5" y="7"></rect>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between">
<div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Shampoo</p>
<span className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>10–15 mins</span>
</div>
<span className="px-2 py-0.5 rounded-full text-[11px] bg-[#FFB400]/10 text-[#a76b00]" style={{fontFamily: 'Lato'}}>ETA</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<button className="request-btn h-8 px-3 rounded-lg bg-[#FFB400] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Request</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="3" width="18" x="3" y="8"></rect>
<path d="M7 8V6a2 2 0 0 1 2-2h3"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between">
<div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Soap</p>
<span className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>10–15 mins</span>
</div>
<span className="px-2 py-0.5 rounded-full text-[11px] bg-[#FFB400]/10 text-[#a76b00]" style={{fontFamily: 'Lato'}}>ETA</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<button className="request-btn h-8 px-3 rounded-lg bg-[#FFB400] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Request</button>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-start gap-3">
<div className="h-10 w-10 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M4 7h16v10H4z"></path>
<path d="M6 7V5a2 2 0 0 1 2-2h8"></path>
</svg>
</div>
<div className="flex-1">
<div className="flex justify-between">
<div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Towels</p>
<span className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>10–15 mins</span>
</div>
<span className="px-2 py-0.5 rounded-full text-[11px] bg-[#FFB400]/10 text-[#a76b00]" style={{fontFamily: 'Lato'}}>ETA</span>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
</svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5v14M5 12h14"></path>
</svg>
</button>
</div>
<button className="request-btn h-8 px-3 rounded-lg bg-[#FFB400] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Request</button>
</div>
</div>
</div>
</div>
</div>

<button className="fixed z-30 bottom-24 right-6 h-12 w-12 rounded-full shadow-lg bg-[#FFB400] text-white flex items-center justify-center hover:opacity-90 active:scale-95 transition ring-1 ring-black/5" id="reorderFab">
<svg className="h-5 w-5 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 12a9 9 0 1 0 3-6.708M3 4v5h5"></path>
</svg>
</button>
</section>

<section className="space-y-3 hidden" id="section-housekeeping">
<h2 className="text-[18px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Housekeeping</h2>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 20h18"></path>
<path d="M4 20l3-8h10l3 8"></path>
</svg>
</div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Cleaning</p>
</div>

<div className="flex items-center bg-black/5 rounded-lg p-1">
<button className="hk-toggle active px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Immediate</button>
<button className="hk-toggle px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Schedule</button>
</div>
</div>

<div className="hk-schedule hidden grid grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="date"/>
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="time"/>
</div>

<details className="group">
<summary className="text-[12px] text-[#666] cursor-pointer hover:text-[#333] transition" style={{fontFamily: 'Lato'}}>Special instructions</summary>
<textarea className="mt-2 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" placeholder="e.g., Please focus on bathroom" rows="2" style={{fontFamily: 'Lato'}}></textarea>
</details>

<div>
<div className="flex items-center justify-between text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>
<span>Accepted</span><span>In Progress</span><span>Completed</span>
</div>
<div className="mt-1 h-2 w-full bg-black/5 rounded-full overflow-hidden">
<div className="hk-progress h-2 w-1/3 bg-yellow-500 transition-all"></div>
</div>
</div>
<div className="flex justify-end">
<button className="px-3 py-2 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Submit</button>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="10" rx="2" width="18" x="3" y="7"></rect>
<path d="M7 7V5h10v2"></path>
</svg>
</div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Bed Linen Change</p>
</div>
<div className="flex items-center bg-black/5 rounded-lg p-1">
<button className="hk-toggle active px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Immediate</button>
<button className="hk-toggle px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Schedule</button>
</div>
</div>
<div className="hk-schedule hidden grid grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="date"/>
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="time"/>
</div>
<details className="group">
<summary className="text-[12px] text-[#666] cursor-pointer hover:text-[#333] transition" style={{fontFamily: 'Lato'}}>Special instructions</summary>
<textarea className="mt-2 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" placeholder="e.g., Hypoallergenic only" rows="2" style={{fontFamily: 'Lato'}}></textarea>
</details>
<div>
<div className="flex items-center justify-between text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>
<span>Accepted</span><span>In Progress</span><span>Completed</span>
</div>
<div className="mt-1 h-2 w-full bg-black/5 rounded-full overflow-hidden">
<div className="hk-progress h-2 w-0 bg-gray-400 transition-all"></div>
</div>
</div>
<div className="flex justify-end">
<button className="px-3 py-2 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Submit</button>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm space-y-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 6h18"></path>
<path d="M8 6v12a2 2 0 0 0 2 2h4a2 2 0 0 0 2-2V6"></path>
<path d="M10 11v6M14 11v6"></path>
</svg>
</div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Trash Pickup</p>
</div>
<div className="flex items-center bg-black/5 rounded-lg p-1">
<button className="hk-toggle active px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Immediate</button>
<button className="hk-toggle px-2 py-1 text-[12px] rounded-md" style={{fontFamily: 'Lato'}}>Schedule</button>
</div>
</div>
<div className="hk-schedule hidden grid grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="date"/>
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none bg-white text-[13px]" style={{fontFamily: 'Lato'}} type="time"/>
</div>
<details className="group">
<summary className="text-[12px] text-[#666] cursor-pointer hover:text-[#333] transition" style={{fontFamily: 'Lato'}}>Special instructions</summary>
<textarea className="mt-2 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" placeholder="e.g., Contactless pickup" rows="2" style={{fontFamily: 'Lato'}}></textarea>
</details>
<div>
<div className="flex items-center justify-between text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>
<span>Accepted</span><span>In Progress</span><span>Completed</span>
</div>
<div className="mt-1 h-2 w-full bg-black/5 rounded-full overflow-hidden">
<div className="hk-progress h-2 w-2/3 bg-yellow-500 transition-all"></div>
</div>
</div>
<div className="flex justify-end">
<button className="px-3 py-2 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Submit</button>
</div>
</div>
</section>

<section className="space-y-3 hidden" id="section-maintenance">
<h2 className="text-[18px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Maintenance</h2>
<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="space-y-3">
<div>
<label className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Category</label>
<select className="mt-1 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" style={{fontFamily: 'Lato'}}>
<option>Electrical</option>
<option>Plumbing</option>
<option>AC</option>
<option>TV/Wi‑Fi</option>
<option>Furniture</option>
</select>
</div>
<div>
<label className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Photos</label>
<div className="mt-1 flex items-center justify-between gap-2 p-3 rounded-xl ring-1 ring-black/10 bg-[#F5F5F5]">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-white ring-1 ring-black/5 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 7h4l2-2h6l2 2h4v12H3z"></path>
<circle cx="12" cy="13" r="3"></circle>
</svg>
</div>
<p className="text-[12px]" style={{fontFamily: 'Lato'}}>Drag &amp; drop or use camera</p>
</div>
<button className="h-9 px-3 rounded-lg bg-white ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition text-[12px]" style={{fontFamily: 'Lato'}}>
<div className="flex items-center gap-1">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
                    Upload
                  </div>
</button>
</div>
</div>
<div>
<label className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Description</label>
<textarea className="mt-1 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" placeholder="Describe the issue" rows="3" style={{fontFamily: 'Lato'}}></textarea>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Preferred Date</label>
<input className="mt-1 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" style={{fontFamily: 'Lato'}} type="date"/>
</div>
<div>
<label className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Preferred Time</label>
<input className="mt-1 w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" style={{fontFamily: 'Lato'}} type="time"/>
</div>
</div>
<div className="flex items-center justify-between">
<button className="px-3 py-2 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Submit Ticket</button>
<button className="px-3 py-2 rounded-lg bg-[#FF3B30] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Emergency</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h4 className="text-[16px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Ticket Status</h4>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-black/5" style={{fontFamily: 'Lato'}}>#MA-1027</span>
</div>
<div className="relative pl-6 space-y-4">

<div className="absolute left-2 top-2 bottom-2 w-0.5 bg-black/10"></div>
<div className="relative">
<div className="absolute -left-[22px] h-4 w-4 rounded-full bg-[#913D43]"></div>
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>Reported</p>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Issue submitted</p>
</div>
<div className="relative">
<div className="absolute -left-[22px] h-4 w-4 rounded-full bg-[#FFB400]"></div>
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>Assigned</p>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Technician on the way</p>
</div>
<div className="relative">
<div className="absolute -left-[22px] h-4 w-4 rounded-full bg-gray-300"></div>
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>Resolved</p>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Pending</p>
</div>
</div>
</div>
</section>

<section className="space-y-3 hidden" id="section-laundry">
<h2 className="text-[18px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Laundry</h2>

<div className="flex gap-2">
<button className="laundry-tab active px-3 py-1.5 rounded-full bg-[#913D43] text-white text-[12px]" data-type="Wash &amp; Fold" style={{fontFamily: 'Lato'}}>Wash &amp; Fold</button>
<button className="laundry-tab px-3 py-1.5 rounded-full bg-white text-[#333] ring-1 ring-black/5 text-[12px]" data-type="Dry Cleaning" style={{fontFamily: 'Lato'}}>Dry Cleaning</button>
<button className="laundry-tab px-3 py-1.5 rounded-full bg-white text-[#333] ring-1 ring-black/5 text-[12px]" data-type="Ironing" style={{fontFamily: 'Lato'}}>Ironing</button>
</div>

<div className="space-y-3">

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4l2 12h12z"></path><path d="M7 7a5 5 0 0 1 10 0"></path></svg>
</div>
<div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Shirt</p>
<p className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>$3.00</p>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</button>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-[#913D43]/10 flex items-center justify-center">
<svg className="h-5 w-5 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M20 7H4l2 12h12z"></path><path d="M7 7a5 5 0 0 1 10 0"></path></svg>
</div>
<div>
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Pants</p>
<p className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>$4.00</p>
</div>
</div>
<div className="flex items-center gap-2">
<button aria-label="Decrease" className="qty-btn h-8 w-8 rounded-lg ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#333]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="qty-value w-6 text-center text-[14px]" style={{fontFamily: 'Lato'}}>0</span>
<button aria-label="Increase" className="qty-btn h-8 w-8 rounded-lg bg-[#913D43] text-white hover:opacity-90 active:scale-95 transition flex items-center justify-center">
<svg className="h-4 w-4 stroke-white" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14M5 12h14"></path></svg>
</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm space-y-2">
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>Pickup &amp; Delivery</p>
<div className="grid grid-cols-2 gap-2">
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" style={{fontFamily: 'Lato'}} type="date"/>
<input className="px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" style={{fontFamily: 'Lato'}} type="time"/>
</div>
<textarea className="w-full px-3 py-2 rounded-lg ring-1 ring-black/10 focus:ring-2 focus:ring-[#913D43]/30 outline-none text-[13px]" placeholder="Notes for the driver (optional)" rows="2" style={{fontFamily: 'Lato'}}></textarea>
<div className="flex items-center justify-between">
<button className="px-3 py-2 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Schedule Pickup</button>
<span className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>Est. 24h turnaround</span>
</div>
</div>
</section>

<section className="space-y-3 hidden" id="section-hub">
<h2 className="text-[18px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Hotel Hub</h2>
<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm flex items-center gap-3">
<img alt="Lobby" className="h-16 w-16 rounded-xl object-cover ring-1 ring-black/5" src="https://images.unsplash.com/photo-1517245386807-bb43f82c33c4?q=80&amp;w=400&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<p className="text-[14px] font-medium" style={{fontFamily: 'Lato'}}>Concierge Chat</p>
<p className="text-[12px] text-[#666]" style={{fontFamily: 'Lato'}}>Ask about dining, transport, and local tips.</p>
</div>
<button className="h-9 px-3 rounded-lg bg-[#913D43] text-white text-[12px] hover:opacity-90 active:scale-95 transition" style={{fontFamily: 'Lato'}}>Open</button>
</div>
<div className="bg-white rounded-2xl p-3 ring-1 ring-black/5 shadow-sm">
<div className="flex items-center justify-between mb-2">
<h3 className="text-[16px] tracking-tight font-semibold text-[#1f1f1f]" style={{fontFamily: 'Montserrat'}}>Events &amp; Offers</h3>
<span className="text-[11px] px-2 py-0.5 rounded-full bg-black/5" style={{fontFamily: 'Lato'}}>Today</span>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-[#913D43]/10 ring-1 ring-black/5 flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7h18v14H3z"></path><path d="M8 3v4M16 3v4"></path></svg>
</div>
<div>
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>Wine Tasting</p>
<p className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>6:00 PM – Lobby Lounge</p>
</div>
</div>
<button className="h-8 px-3 rounded-lg bg-white ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition text-[12px]" style={{fontFamily: 'Lato'}}>RSVP</button>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-[#913D43]/10 ring-1 ring-black/5 flex items-center justify-center">
<svg className="h-4 w-4 stroke-[#913D43]" fill="none" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M12 4v16"></path></svg>
</div>
<div>
<p className="text-[13px] font-medium" style={{fontFamily: 'Lato'}}>City Tour</p>
<p className="text-[11px] text-[#666]" style={{fontFamily: 'Lato'}}>10:00 AM – Meet at Lobby</p>
</div>
</div>
<button className="h-8 px-3 rounded-lg bg-white ring-1 ring-black/10 hover:ring-black/20 active:scale-95 transition text-[12px]" style={{fontFamily: 'Lato'}}>RSVP</button>
</div>
</div>
</div>
</section>
</main>
</div>



    </>
  );
}
