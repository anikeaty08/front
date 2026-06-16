import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide && lucide.createIcons) {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Utilities
      function extractAED(text) {
        const m = text.replaceAll(',', '').match(/AED\s*(\d+)/i);
        return m ? parseInt(m[1], 10) : 0;
      }

      // State
      let selected = null;

      // Elements
      const selectionView = document.getElementById('selectionView');
      const paymentView = document.getElementById('paymentView');
      const continueBtn = document.getElementById('continueBtn');
      const summaryPrice = document.getElementById('summaryPrice');
      const summarySub = document.getElementById('summarySub');
      const selectedRoomLabel = document.getElementById('selectedRoomLabel');
      const paymentPrice = document.getElementById('paymentPrice');
      const paymentTaxes = document.getElementById('paymentTaxes');
      const paymentTotal = document.getElementById('paymentTotal');
      const confirmTotal = document.getElementById('confirmTotal');
      const editSelectionBtn = document.getElementById('editSelectionBtn');

      // Room select handling
      document.querySelectorAll('.room-card').forEach(card => {
        const selectBtn = card.querySelector('.select-btn');
        selectBtn?.addEventListener('click', () => {
          // Extract info with minimal assumptions
          const title = card.querySelector('h3')?.textContent?.trim() || 'Selected room';
          const priceEl = Array.from(card.querySelectorAll('div')).find(d => d.className.includes('text-[22px]'));
          const taxesEl = Array.from(card.querySelectorAll('div')).find(d => d.textContent.toLowerCase().includes('taxes'));
          const price = priceEl ? extractAED(priceEl.textContent) : 0;
          const taxes = taxesEl ? extractAED(taxesEl.textContent) : 0;

          selected = { id: card.getAttribute('data-room-id'), title, price, taxes };

          // Visual feedback on selected button
          document.querySelectorAll('.select-btn').forEach(b => {
            b.classList.remove('bg-indigo-600','text-white','border-indigo-600');
            b.classList.add('bg-indigo-50','text-indigo-700','border-indigo-200');
            b.textContent = 'Select';
          });
          selectBtn.classList.remove('bg-indigo-50','text-indigo-700','border-indigo-200');
          selectBtn.classList.add('bg-indigo-600','text-white','border-indigo-600');
          selectBtn.textContent = 'Selected';

          // Update summary bar
          summaryPrice.textContent = `AED ${selected.price}`;
          summarySub.textContent = `+ AED ${selected.taxes} taxes & service fees per night (1 Adult)`;
        });

        // Minimal details toggle
        card.querySelectorAll('[data-action="details"]').forEach(btn => {
          btn.addEventListener('click', () => {
            const details = card.querySelector('.details');
            if (!details) return;
            details.classList.toggle('hidden');
          });
        });
      });

      // Continue to payment
      continueBtn.addEventListener('click', () => {
        if (!selected) {
          // Nudge user to select a room first
          const bar = document.getElementById('selectionSummaryBar');
          bar.classList.add('ring-2','ring-rose-300');
          setTimeout(() => bar.classList.remove('ring-2','ring-rose-300'), 600);
          return;
        }

        // Fill payment summary
        selectedRoomLabel.textContent = selected.title;
        paymentPrice.textContent = `AED ${selected.price}`;
        paymentTaxes.textContent = `AED ${selected.taxes}`;
        const total = selected.price + selected.taxes;
        paymentTotal.textContent = `AED ${total}`;
        confirmTotal.textContent = `AED ${total}`;

        // Switch views
        selectionView.classList.add('hidden');
        paymentView.classList.remove('hidden');

        // Update header title minimally
        const pageTitle = document.getElementById('pageTitle');
        pageTitle.textContent = 'Payment';
      });

      // Edit selection -> back to rooms
      editSelectionBtn.addEventListener('click', () => {
        paymentView.classList.add('hidden');
        selectionView.classList.remove('hidden');
        const pageTitle = document.getElementById('pageTitle');
        pageTitle.textContent = 'Select Room';
      });

      // Confirm booking action (placeholder)
      document.getElementById('confirmBtn').addEventListener('click', () => {
        const btn = document.getElementById('confirmBtn');
        btn.classList.add('bg-emerald-700');
        btn.textContent = 'Booked';
        setTimeout(() => {
          btn.textContent = 'Confirm booking';
          btn.classList.remove('bg-emerald-700');
        }, 1200);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-md mx-auto min-h-screen bg-white">

<header className="sticky top-0 z-50 bg-white/80 backdrop-blur border-b border-slate-200">
<div className="px-4 pt-3 pb-2 flex items-center gap-2">
<button aria-label="Back" className="p-2 rounded-full hover:bg-slate-100 active:bg-slate-200 transition" id="backBtn">
<i className="w-6 h-6 text-slate-700" data-lucide="chevron-left"></i>
</button>
<div className="flex-1">
<h1 className="text-[22px] leading-7 tracking-tight font-semibold text-slate-900" id="pageTitle">Select Room</h1>
<div className="mt-1 flex items-center gap-1.5 text-[13px] text-slate-600" id="headerMeta">
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">
<i className="w-3.5 h-3.5" data-lucide="calendar"></i>
                Oct 09 – Oct 10
              </span>
<span className="text-slate-400">•</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">
<i className="w-3.5 h-3.5" data-lucide="door-open"></i>
                1 room
              </span>
<span className="text-slate-400">•</span>
<span className="inline-flex items-center gap-1 px-2 py-1 rounded-full bg-slate-100">
<i className="w-3.5 h-3.5" data-lucide="user"></i>
                1 guest
              </span>
</div>
</div>
<button className="text-indigo-600 font-medium px-2 py-1 rounded-lg hover:bg-indigo-50 active:bg-indigo-100 transition" id="modifyBtn">
            Modify
          </button>
</div>

<div className="px-4 pb-3" id="filtersWrap">
<div className="flex gap-2 overflow-x-auto no-scrollbar" id="filterRow" style={{WebkitOverflowScrolling: 'touch'}}>
<button className="filter-chip active inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-slate-900 text-white text-sm font-medium whitespace-nowrap" data-filter="all">All</button>
<button className="filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium whitespace-nowrap" data-filter="breakfast">
<i className="w-4 h-4" data-lucide="croissant"></i> Breakfast
            </button>
<button className="filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium whitespace-nowrap" data-filter="halfboard">
<i className="w-4 h-4" data-lucide="utensils"></i> Lunch/Dinner
            </button>
<button className="filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium whitespace-nowrap" data-filter="refundable">
<i className="w-4 h-4" data-lucide="shield-check"></i> Refundable
            </button>
<button className="filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium whitespace-nowrap" data-filter="city-view">
<i className="w-4 h-4" data-lucide="building-2"></i> City View
            </button>
<button className="filter-chip inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-slate-200 bg-white text-slate-700 text-sm font-medium whitespace-nowrap" data-filter="sea-view">
<i className="w-4 h-4" data-lucide="waves"></i> Sea View
            </button>
</div>
</div>
</header>

<div id="selectionView">

<section className="px-4 pt-4">
<div className="rounded-2xl border border-slate-200 overflow-hidden bg-white">
<div className="relative">
<img alt="Hotel exterior" className="w-full h-40 object-cover" src="https://images.unsplash.com/photo-1496412705862-e0088f16f791?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/50 via-black/5 to-transparent"></div>
<div className="absolute bottom-3 left-3 right-3 flex items-end justify-between">
<div>
<h2 className="text-white text-[20px] tracking-tight leading-6 font-semibold">Aurora Grand Hotel</h2>
<div className="mt-1 flex items-center gap-2 text-white/90 text-sm">
<span className="inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="map-pin"></i> Downtown, City View
                    </span>
</div>
</div>
<div className="inline-flex items-center px-2 py-1 rounded-full bg-white/90 backdrop-blur text-slate-900 text-sm font-medium">
<i className="w-4 h-4 text-amber-500 mr-1" data-lucide="star"></i> 4.7
                </div>
</div>
</div>
<div className="p-3.5 flex items-center justify-between">
<div className="text-[13px] text-slate-600">
<div className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="wifi"></i> Free Wi‑Fi</div>
<div className="flex items-center gap-1.5"><i className="w-4 h-4" data-lucide="sun"></i> Pool &amp; Spa</div>
</div>
<button className="inline-flex items-center gap-1.5 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition text-sm font-medium">
<i className="w-4 h-4" data-lucide="image"></i> Gallery
              </button>
</div>
</div>
</section>

<main className="px-4 pb-40">

<article className="room-card mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" data-room-id="suite-city" data-tags="breakfast,city-view">
<div className="relative">
<img alt="Suite, City View" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="building-2"></i> City View
                </span>
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="croissant"></i> Breakfast
                </span>
</div>
</div>
<div className="p-3.5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[19px] tracking-tight font-semibold text-slate-900">Suite, 1 Bedroom, City View</h3>
<div className="mt-1 text-sm text-slate-600 inline-flex items-center gap-2">
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="bed-double"></i> King Bed</span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="users"></i> Up to 2</span>
</div>
</div>
<button className="select-btn ml-3 shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 text-sm font-medium transition" data-action="select" data-room="suite-city">
                  Select
                </button>
</div>
<ul className="mt-3 space-y-1.5 text-[14px] text-slate-700">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i> Flexible check-in</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i> Breakfast included</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-rose-500 mt-0.5" data-lucide="x"></i> Non-refundable</li>
</ul>
<div className="mt-3 flex items-end justify-between">
<div>
<div className="text-[22px] tracking-tight font-semibold text-slate-900">AED 530</div>
<div className="text-[12px] text-slate-500">+ AED 134 taxes &amp; fees per night</div>
</div>
<button className="text-indigo-600 font-medium inline-flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-indigo-50" data-action="details">
                  More details <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="details hidden mt-3 rounded-xl border border-slate-200 p-3.5 bg-slate-50 text-sm text-slate-700">
<ul className="space-y-1.5">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="info"></i> Tourism fee included in total price.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="sparkles"></i> Access to Executive Lounge.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="cup-soda"></i> Complimentary minibar (once per stay).</li>
</ul>
</div>
</div>
</article>

<article className="room-card mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" data-room-id="halfboard-city" data-tags="breakfast,halfboard,city-view">
<div className="relative">
<img alt="Room with Breakfast + Lunch/Dinner" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="utensils"></i> Lunch/Dinner
                </span>
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="croissant"></i> Breakfast
                </span>
</div>
</div>
<div className="p-3.5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[19px] tracking-tight font-semibold text-slate-900">Room with Breakfast + Lunch/Dinner</h3>
<div className="mt-1 text-sm text-slate-600 inline-flex items-center gap-2">
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="bed-single"></i> Queen Bed</span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="users"></i> Up to 2</span>
</div>
</div>
<button className="select-btn ml-3 shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 text-sm font-medium transition" data-action="select" data-room="halfboard-city">
                  Select
                </button>
</div>
<ul className="mt-3 space-y-1.5 text-[14px] text-slate-700">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i> Tourism fee included</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-rose-500 mt-0.5" data-lucide="x"></i> Non-refundable</li>
</ul>
<div className="mt-3 flex items-end justify-between">
<div>
<div className="text-[22px] tracking-tight font-semibold text-slate-900">AED 590</div>
<div className="text-[12px] text-slate-500">+ AED 148 taxes &amp; fees per night</div>
</div>
<button className="text-indigo-600 font-medium inline-flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-indigo-50" data-action="details">
                  More details <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="details hidden mt-3 rounded-xl border border-slate-200 p-3.5 bg-slate-50 text-sm text-slate-700">
<ul className="space-y-1.5">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="chef-hat"></i> Two-course lunch or dinner per day.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="clock"></i> Late checkout subject to availability.</li>
</ul>
</div>
</div>
</article>

<article className="room-card mt-4 rounded-2xl border border-slate-200 bg-white shadow-sm overflow-hidden" data-room-id="deluxe-sea" data-tags="breakfast,sea-view,refundable">
<div className="relative">
<img alt="Deluxe King, Sea View" className="w-full h-44 object-cover" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 flex gap-2">
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="waves"></i> Sea View
                </span>
<span className="px-2 py-1 rounded-full bg-white/90 text-slate-900 text-xs font-medium inline-flex items-center gap-1">
<i className="w-3.5 h-3.5" data-lucide="shield-check"></i> Refundable
                </span>
</div>
</div>
<div className="p-3.5">
<div className="flex items-start justify-between">
<div>
<h3 className="text-[19px] tracking-tight font-semibold text-slate-900">Deluxe King, Sea View</h3>
<div className="mt-1 text-sm text-slate-600 inline-flex items-center gap-2">
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="bed-double"></i> King Bed</span>
<span className="text-slate-300">•</span>
<span className="inline-flex items-center gap-1"><i className="w-4 h-4" data-lucide="users"></i> Up to 3</span>
</div>
</div>
<button className="select-btn ml-3 shrink-0 inline-flex items-center justify-center px-3 py-1.5 rounded-lg border border-indigo-200 text-indigo-700 bg-indigo-50 hover:bg-indigo-100 active:bg-indigo-200 text-sm font-medium transition" data-action="select" data-room="deluxe-sea">
                  Select
                </button>
</div>
<ul className="mt-3 space-y-1.5 text-[14px] text-slate-700">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i> Free cancellation up to 24 hours</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-emerald-500 mt-0.5" data-lucide="check"></i> Breakfast included</li>
</ul>
<div className="mt-3 flex items-end justify-between">
<div>
<div className="text-[22px] tracking-tight font-semibold text-slate-900">AED 680</div>
<div className="text-[12px] text-slate-500">+ AED 165 taxes &amp; fees per night</div>
</div>
<button className="text-indigo-600 font-medium inline-flex items-center gap-1.5 px-2 py-1 rounded-lg hover:bg-indigo-50" data-action="details">
                  More details <i className="w-4 h-4" data-lucide="chevron-down"></i>
</button>
</div>
<div className="details hidden mt-3 rounded-xl border border-slate-200 p-3.5 bg-slate-50 text-sm text-slate-700">
<ul className="space-y-1.5">
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="ticket"></i> Includes welcome drink &amp; lounge access.</li>
<li className="flex items-start gap-2"><i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="sun"></i> Priority pool cabana (1 hour).</li>
</ul>
</div>
</div>
</article>
</main>

<div className="fixed inset-x-0 bottom-0 z-50" id="selectionSummaryBar">
<div className="mx-auto max-w-md">
<div className="mx-4 mb-3 rounded-2xl border border-slate-200 bg-white shadow-lg">
<div className="px-4 py-3" style={{paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)'}}>
<div className="flex items-center justify-between">
<div>
<div className="text-[20px] tracking-tight font-semibold text-slate-900" id="summaryPrice">AED 250</div>
<div className="text-[12px] text-slate-500" id="summarySub">+ AED 71 taxes &amp; service fees per night (1 Adult)</div>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-indigo-600 text-white text-sm font-medium hover:bg-indigo-700 active:bg-indigo-800 transition" id="continueBtn">
                    Continue <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="paymentView">
<section className="px-4 pt-4 pb-28">

<div className="rounded-2xl border border-slate-200 bg-white overflow-hidden">
<div className="p-4">
<div className="flex items-start justify-between gap-3">
<div>
<h2 className="text-[20px] tracking-tight font-semibold text-slate-900">Payment</h2>
<p className="mt-1 text-sm text-slate-600" id="selectedRoomLabel">Selected room</p>
</div>
<button className="inline-flex items-center gap-1.5 text-slate-700 px-3 py-1.5 rounded-lg border border-slate-200 hover:bg-slate-50 active:bg-slate-100 transition text-sm font-medium" id="editSelectionBtn">
<i className="w-4 h-4" data-lucide="pencil"></i> Edit
                </button>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<div className="rounded-xl border border-slate-200 p-3">
<div className="text-[12px] text-slate-500">Price/night</div>
<div className="mt-0.5 text-[16px] tracking-tight font-semibold text-slate-900" id="paymentPrice">AED —</div>
</div>
<div className="rounded-xl border border-slate-200 p-3">
<div className="text-[12px] text-slate-500">Taxes &amp; fees</div>
<div className="mt-0.5 text-[16px] tracking-tight font-semibold text-slate-900" id="paymentTaxes">AED —</div>
</div>
</div>
<div className="mt-3 flex items-center justify-between">
<div className="text-[13px] text-slate-600 inline-flex items-center gap-1">
<i className="w-4 h-4" data-lucide="calendar"></i>
                  Oct 09 – Oct 10 • 1 night • 1 guest
                </div>
<div className="text-right">
<div className="text-[12px] text-slate-500">Total per night</div>
<div className="text-[18px] tracking-tight font-semibold text-slate-900" id="paymentTotal">AED —</div>
</div>
</div>
</div>
<div className="border-t border-slate-200 p-4 bg-slate-50">
<div className="flex items-center gap-2 text-[13px] text-slate-600">
<i className="w-4 h-4" data-lucide="shield"></i>
                You won’t be charged today!! Your card is only used to secure the reservation.
              </div>
</div>
</div>

<div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
<div className="flex items-center justify-between">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Promo code</h3>
<span className="text-[12px] text-slate-500" id="promoStatus"></span>
</div>
<div className="mt-3 flex items-center gap-2">
<div className="flex-1 relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="ticket"></i>
<input className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400 text-[14px]" id="promoInput" placeholder="Enter promo (e.g., SAVE10)" type="text"/>
</div>
<button className="inline-flex items-center gap-1.5 px-3 py-2 rounded-lg border border-slate-300 text-slate-700 hover:bg-slate-50 active:bg-slate-100 text-sm font-medium" id="applyPromoBtn">
                Apply
              </button>
</div>
</div>

<div className="mt-4 rounded-2xl border border-slate-200 bg-white p-4">
<h3 className="text-[16px] tracking-tight font-semibold text-slate-900">Card details</h3>
<div className="mt-3 space-y-3">
<div>
<label className="block text-[13px] text-slate-600 mb-1" htmlFor="cardName">Name on card</label>
<input className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400 text-[14px]" id="cardName" placeholder="Jane Doe" type="text"/>
</div>
<div>
<label className="block text-[13px] text-slate-600 mb-1" htmlFor="cardNumber">Card number</label>
<div className="relative">
<i className="absolute left-3 top-2.5 w-4 h-4 text-slate-400" data-lucide="credit-card"></i>
<input autocomplete="cc-number" className="w-full pl-9 pr-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400 text-[14px]" id="cardNumber" inputmode="numeric" placeholder="1234 5678 9012 3456"/>
</div>
</div>
<div>
<label className="block text-[13px] text-slate-600 mb-1" htmlFor="cardExpiry">Expiry</label>
<input autocomplete="cc-exp" className="w-full px-3 py-2 rounded-lg border border-slate-300 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-indigo-500 placeholder-slate-400 text-[14px]" id="cardExpiry" inputmode="numeric" placeholder="MM/YY"/>
</div>
</div>
</div>
</section>

<div className="fixed inset-x-0 bottom-0 z-50" id="paymentBar">
<div className="mx-auto max-w-md">
<div className="mx-4 mb-3 rounded-2xl border border-slate-200 bg-white shadow-lg">
<div className="px-4 py-3" style={{paddingBottom: 'calc(env(safe-area-inset-bottom) + 12px)'}}>
<div className="flex items-center justify-between">
<div>
<div className="text-[12px] text-slate-500">Total per night</div>
<div className="text-[20px] tracking-tight font-semibold text-slate-900" id="confirmTotal">AED —</div>
</div>
<button className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-emerald-600 text-white text-sm font-medium hover:bg-emerald-700 active:bg-emerald-800 transition" id="confirmBtn">
                    Confirm booking <i className="w-4 h-4" data-lucide="check-circle"></i>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>


    </>
  );
}
