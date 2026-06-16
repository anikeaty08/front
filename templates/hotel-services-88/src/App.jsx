import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Icon render with stroke width 1.5
      function renderIcons() {
        lucide.createIcons({
          attrs: { 'stroke-width': 1.5 }
        });
      }

      // Sidebar logic
      const sidebar = document.getElementById('rightSidebar');
      const sidebarToggle = document.getElementById('sidebarToggle');
      const sidebarBrand = document.getElementById('sidebarBrand');
      const navLabels = document.querySelectorAll('.nav-label');
      const mainContent = document.getElementById('mainContent');
      let isExpanded = false;

      function setSidebarState(expanded) {
        isExpanded = expanded;
        sidebar.classList.toggle('w-[220px]', expanded);
        sidebar.classList.toggle('w-[50px]', !expanded);
        sidebarBrand.classList.toggle('hidden', !expanded);
        navLabels.forEach((el) => el.classList.toggle('hidden', !expanded));
        // Update main content padding to keep content visible
        mainContent.style.paddingRight = expanded ? '236px' : '66px';
        // Toggle icon
        sidebarToggle.innerHTML = expanded
          ? '<i data-lucide="chevrons-right" class="w-5 h-5"></i>'
          : '<i data-lucide="chevrons-left" class="w-5 h-5"></i>';
        sidebarToggle.setAttribute('title', expanded ? 'Collapse' : 'Expand');
        renderIcons();
      }

      sidebarToggle.addEventListener('click', () => setSidebarState(!isExpanded));

      // Navigation logic
      const screens = document.querySelectorAll('[data-screen]');
      const navItems = document.querySelectorAll('.nav-item');

      function showScreen(id) {
        screens.forEach((s) => s.classList.add('hidden'));
        const target = document.getElementById('screen-' + id);
        if (target) target.classList.remove('hidden');

        // Keep Room Service highlighted for its sub-screens
        const activeKey = id.startsWith('room_service') ? 'room_service' : id;

        navItems.forEach((btn) => {
          const active = btn.getAttribute('data-target') === activeKey;
          btn.classList.toggle('bg-white/10', active);
          btn.classList.toggle('text-white', active);
        });
        // Scroll to top on screen change
        window.scrollTo({ top: 0, behavior: 'smooth' });
      }

      navItems.forEach((btn) => {
        btn.addEventListener('click', () => {
          const id = btn.getAttribute('data-target');
          showScreen(id);
        });
      });

      // Default selection
      showScreen('room_service');

      // Order Now -> navigate to Menu screen
      const orderNowBtn = document.getElementById('orderNowBtn');
      orderNowBtn.addEventListener('click', () => {
        showScreen('room_service_menu');
      });

      // Back from Menu to Room Service
      const backBtn = document.getElementById('backToRoomService');
      if (backBtn) {
        backBtn.addEventListener('click', () => showScreen('room_service'));
      }

      // Simple cart counter for Menu screen
      let cartCount = 0;
      const cartBadge = document.getElementById('cartCount');
      const addButtons = document.querySelectorAll('.menu-add');
      addButtons.forEach((btn) => {
        btn.addEventListener('click', () => {
          cartCount += 1;
          if (cartBadge) cartBadge.textContent = String(cartCount);
        });
      });

      // Initial render
      renderIcons();

      // Accessibility: close modal on Escape (modal no longer used)
      const menuModal = document.getElementById('menuModal');
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && menuModal && !menuModal.classList.contains('hidden')) {
          menuModal.classList.add('hidden');
          menuModal.classList.remove('flex');
        }
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen w-full flex justify-center">

<div className="relative w-full max-w-sm min-h-screen bg-white">

<aside className="fixed right-0 top-0 h-full w-[50px] bg-[#004466] text-white shadow-lg transition-all duration-300 ease-in-out z-40" id="rightSidebar" style={{willChange: 'width'}}>

<div className="h-16 flex items-center justify-between px-2">
<button aria-label="Toggle sidebar" className="w-9 h-9 grid place-content-center rounded-md text-white/80 hover:text-white hover:bg-white/10 outline-none focus-visible:ring-2 focus-visible:ring-white/30 transition" id="sidebarToggle" title="Expand">
<i className="w-5 h-5" data-lucide="chevrons-left"></i>
</button>
<div className="hidden ml-2 text-[13px] tracking-tight font-semibold text-white/90" id="sidebarBrand">
              AEROTAG
            </div>
</div>

<div className="mx-2 h-px bg-white/10"></div>

<nav className="mt-2">
<ul className="space-y-1">

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="room_service" title="Room Service">
<i className="w-5 h-5 shrink-0" data-lucide="utensils"></i>
<span className="nav-label hidden text-[14px]">Room Service</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="toiletries" title="Toiletries &amp; Essentials">
<i className="w-5 h-5 shrink-0" data-lucide="shopping-bag"></i>
<span className="nav-label hidden text-[14px]">Toiletries &amp; Essentials</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="housekeeping" title="Housekeeping">
<i className="w-5 h-5 shrink-0" data-lucide="broom"></i>
<span className="nav-label hidden text-[14px]">Housekeeping</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="maintenance" title="Maintenance">
<i className="w-5 h-5 shrink-0" data-lucide="wrench"></i>
<span className="nav-label hidden text-[14px]">Maintenance</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="laundry" title="Laundry">
<i className="w-5 h-5 shrink-0" data-lucide="shirt"></i>
<span className="nav-label hidden text-[14px]">Laundry</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="wifi" title="Wi‑Fi">
<i className="w-5 h-5 shrink-0" data-lucide="wifi"></i>
<span className="nav-label hidden text-[14px]">Wi‑Fi</span>
</button>
</li>

<li>
<button className="nav-item w-full flex items-center gap-3 px-2 py-2 rounded-md text-white/90 hover:bg-white/10 hover:text-white transition outline-none focus-visible:ring-2 focus-visible:ring-white/30" data-target="hotel_hub" title="Hotel Hub">
<i className="w-5 h-5 shrink-0" data-lucide="building-2"></i>
<span className="nav-label hidden text-[14px]">Hotel Hub</span>
</button>
</li>
</ul>
</nav>
</aside>

<main className="relative min-h-screen pr-[66px] transition-all duration-300 ease-in-out" id="mainContent" style={{willChange: 'padding-right'}}>

<div className="h-4"></div>

<div className="px-5 pb-24">

<header className="pt-2">
<h1 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                AEROTAG Assist
              </h1>
</header>

<div className="mt-3 h-px bg-slate-200"></div>

<section className="block" data-screen="" id="screen-room_service">
<div className="mt-5">
<h2 className="text-center text-[22px] leading-tight tracking-tight font-semibold text-slate-900">
                  Room Service
                </h2>

<div className="mt-5 flex justify-center">
<div className="w-[90%] h-[200px] border-2 border-dashed border-slate-300 rounded-md flex items-center justify-center">
<span className="text-[14px] text-slate-400">Illustration Placeholder</span>
</div>
</div>

<p className="mt-6 text-center text-[16px] font-semibold text-slate-900">
                  At Your Door, Anytime
                </p>

<p className="mt-2 text-center text-[14px] text-slate-700 px-4">
                  Browse our menu and order food &amp; beverages directly to your room with just a few taps.
                </p>

<div className="mt-8 flex justify-center">
<button aria-label="Order Now" className="inline-flex items-center gap-2 px-6 py-3 bg-black text-white text-[16px] font-medium rounded-lg shadow-sm hover:bg-black/90 active:bg-black/80 outline-none focus-visible:ring-2 focus-visible:ring-black/30 transition" id="orderNowBtn">
<span>Order Now</span>
<i className="w-5 h-5" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-room_service_menu">

<div className="mt-4 flex items-center justify-between">
<button className="inline-flex items-center gap-2 px-3 py-2 rounded-md text-slate-700 hover:text-slate-900 hover:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-slate-300 transition" id="backToRoomService">
<i className="w-5 h-5" data-lucide="arrow-left"></i>
<span className="text-[14px] font-medium">Back</span>
</button>
<div className="flex items-center gap-2">
<div className="hidden sm:block text-[14px] text-slate-500">Cart</div>
<div className="inline-flex items-center gap-1 rounded-full border border-slate-200 px-2.5 py-1">
<i className="w-4 h-4 text-slate-600" data-lucide="shopping-cart"></i>
<span className="text-[13px] font-medium text-slate-900" id="cartCount">0</span>
</div>
</div>
</div>

<div className="mt-3">
<h2 className="text-[22px] leading-tight tracking-tight font-semibold text-slate-900 text-center">
                  Menu
                </h2>
<p className="mt-1 text-[13px] text-slate-500 text-center">
                  Curated in-room dining, delivered quickly.
                </p>
</div>

<div className="mt-5">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight text-slate-900">Popular Picks</h3>
<span className="text-[12px] text-slate-500">Best sellers</span>
</div>
<div className="mt-3 grid grid-cols-3 gap-3">

<div className="group rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition">
<div className="aspect-square">
<img alt="Grilled Chicken Bowl" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2.5">
<p className="text-[13px] font-medium text-slate-900 line-clamp-1">Grilled Chicken Bowl</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[12px] text-slate-600">$16</span>
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Grilled Chicken Bowl">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                          Add
                        </button>
</div>
</div>
</div>

<div className="group rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition">
<div className="aspect-square">
<img alt="Cold Brew" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2.5">
<p className="text-[13px] font-medium text-slate-900 line-clamp-1">Cold Brew</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[12px] text-slate-600">$6</span>
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Cold Brew">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                          Add
                        </button>
</div>
</div>
</div>

<div className="group rounded-lg border border-slate-200 overflow-hidden hover:border-slate-300 transition">
<div className="aspect-square">
<img alt="Penne Arrabbiata" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-2.5">
<p className="text-[13px] font-medium text-slate-900 line-clamp-1">Penne Arrabbiata</p>
<div className="mt-1 flex items-center justify-between">
<span className="text-[12px] text-slate-600">$14</span>
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2 py-1 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Penne Arrabbiata">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                          Add
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight text-slate-900">Mains</h3>
<span className="text-[12px] text-slate-500">Hearty plates</span>
</div>
<div className="mt-3 space-y-3">

<div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition">
<div className="w-20 h-20 rounded-md overflow-hidden border border-slate-200 shrink-0">
<img alt="Steak Frites" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1553621042-f6e147245754?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-[14px] font-medium text-slate-900">Steak Frites</p>
<p className="mt-1 text-[12px] text-slate-600">Peppercorn jus, herb butter, shoestring fries</p>
</div>
<span className="text-[12px] text-slate-700">$22</span>
</div>
<div className="mt-2">
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Steak Frites">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                          Add to cart
                        </button>
</div>
</div>
</div>
<div className="flex gap-3 p-3 rounded-lg border border-slate-200 hover:border-slate-300 transition">
<div className="w-20 h-20 rounded-md overflow-hidden border border-slate-200 shrink-0">
<img alt="Salmon Teriyaki" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<div className="flex-1">
<div className="flex items-start justify-between gap-2">
<div>
<p className="text-[14px] font-medium text-slate-900">Salmon Teriyaki</p>
<p className="mt-1 text-[12px] text-slate-600">Sesame glaze, jasmine rice, baby bok choy</p>
</div>
<span className="text-[12px] text-slate-700">$20</span>
</div>
<div className="mt-2">
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Salmon Teriyaki">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                          Add to cart
                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="mt-6">
<div className="flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight text-slate-900">Beverages</h3>
<span className="text-[12px] text-slate-500">Hot &amp; cold</span>
</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:border-slate-300 transition">
<div>
<p className="text-[14px] font-medium text-slate-900">Sparkling Water</p>
<p className="text-[12px] text-slate-600 mt-0.5">330 ml</p>
</div>
<div className="flex items-center gap-3">
<span className="text-[12px] text-slate-700">$4</span>
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Sparkling Water">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                        Add
                      </button>
</div>
</div>
<div className="flex items-center justify-between rounded-lg border border-slate-200 p-3 hover:border-slate-300 transition">
<div>
<p className="text-[14px] font-medium text-slate-900">Cappuccino</p>
<p className="text-[12px] text-slate-600 mt-0.5">Double shot</p>
</div>
<div className="flex items-center gap-3">
<span className="text-[12px] text-slate-700">$5</span>
<button className="menu-add inline-flex items-center gap-1 rounded-md px-2.5 py-1.5 text-[12px] font-medium text-[#004466] hover:text-white border border-[#004466]/20 hover:border-[#004466] hover:bg-[#004466] outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition" data-item="Cappuccino">
<i className="w-3.5 h-3.5" data-lucide="plus"></i>
                        Add
                      </button>
</div>
</div>
</div>
</div>

<div className="mt-6 h-px bg-slate-200"></div>

<div className="mt-4 rounded-lg border border-slate-200 p-3">
<p className="text-[12px] text-slate-600">
                  Orders are delivered within 30–40 minutes. Allergies? Let us know in the order notes.
                </p>
</div>
</section>

<section className="hidden" data-screen="" id="screen-toiletries">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Toiletries &amp; Essentials
                </h2>
<div className="mt-4 h-[160px] rounded-lg border border-slate-200 grid place-content-center text-slate-500">
                  Coming soon
                </div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-housekeeping">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Housekeeping
                </h2>
<div className="mt-4 h-[160px] rounded-lg border border-slate-200 grid place-content-center text-slate-500">
                  Coming soon
                </div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-maintenance">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Maintenance
                </h2>
<div className="mt-4 h-[160px] rounded-lg border border-slate-200 grid place-content-center text-slate-500">
                  Coming soon
                </div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-laundry">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Laundry
                </h2>
<div className="mt-4 h-[160px] rounded-lg border border-slate-200 grid place-content-center text-slate-500">
                  Coming soon
                </div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-wifi">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Wi‑Fi Access
                </h2>
<div className="mt-4 space-y-3">
<div className="rounded-lg border border-slate-200 p-4">
<p className="text-[14px] text-slate-700">
                      Network: <span className="font-medium">AEROTAG‑Guest</span>
</p>
<p className="text-[14px] text-slate-700">
                      Password: <span className="font-medium">Check your keycard sleeve</span>
</p>
</div>
</div>
</div>
</section>

<section className="hidden" data-screen="" id="screen-hotel_hub">
<div className="mt-6">
<h2 className="text-center text-[20px] font-semibold tracking-tight text-slate-900">
                  Hotel Hub
                </h2>
<div className="mt-4 h-[160px] rounded-lg border border-slate-200 grid place-content-center text-slate-500">
                  Coming soon
                </div>
</div>
</section>
</div>

<div className="h-6"></div>
</main>

<div aria-hidden="true" className="fixed inset-0 hidden items-end justify-center z-50" id="menuModal">
<div className="absolute inset-0 bg-black/40 backdrop-blur-[1px]"></div>
<div className="relative w-full max-w-sm mx-auto bg-white rounded-t-2xl shadow-xl border border-slate-200">
<div className="px-5 pt-4 pb-2 flex items-center justify-between">
<h3 className="text-[16px] font-semibold tracking-tight text-slate-900">
                Menu
              </h3>
<button aria-label="Close" className="w-9 h-9 grid place-content-center rounded-md text-slate-600 hover:text-slate-900 hover:bg-slate-100 outline-none focus-visible:ring-2 focus-visible:ring-slate-300 transition" id="closeMenuModal">
<i className="w-5 h-5" data-lucide="x"></i>
</button>
</div>
<div className="px-5 pb-5">
<div className="rounded-lg border border-slate-200 p-4 text-[14px] text-slate-700">
                A curated in-room dining menu will appear here.
              </div>
<div className="mt-4 grid grid-cols-3 gap-3">
<div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
<img alt="Dish" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1541592553160-82008b127ccb?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
<img alt="Beverage" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1517248135467-4c7edcad34c4?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="aspect-square rounded-lg overflow-hidden border border-slate-200">
<img alt="Snack" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1567620905732-2d1ec7ab7445?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
</div>
<button className="mt-5 w-full inline-flex items-center justify-center gap-2 px-4 py-3 bg-[#004466] text-white rounded-lg text-[14px] font-medium hover:bg-[#004466]/90 active:bg-[#004466]/85 outline-none focus-visible:ring-2 focus-visible:ring-[#004466]/30 transition">
                Start Order
                <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
