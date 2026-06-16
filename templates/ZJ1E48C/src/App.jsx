import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
      const state = {
        step: 0,
        products: [
          { id: 'p_base', name: 'Course: Sales Mastery', price: 199, type: 'one_time', image: 'https://images.unsplash.com/photo-1559136555-9303baea8ebd?q=80&w=600&auto=format&fit=crop' },
          { id: 'p_addon', name: 'Template Pack', price: 49, type: 'one_time', image: 'https://images.unsplash.com/photo-1602684473860-133b9acb3e2e?q=80&w=600&auto=format&fit=crop' },
          { id: 'p_coach', name: '1:1 Coaching (Monthly)', price: 299, type: 'subscription', image: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?q=80&w=600&auto=format&fit=crop' },
        ],
        funnels: [
          { id: 'ck_a1B2c', name: 'Q3 Launch', conv: '3.2%', rev: '$12,430', edited: '2d ago' },
          { id: 'ck_K9L0p', name: 'Evergreen Webinar', conv: '4.1%', rev: '$54,030', edited: '5h ago' },
          { id: 'ck_Z7Y2x', name: 'Holiday Promo', conv: '2.9%', rev: '$8,200', edited: '1w ago' },
        ],
        checkout: {
          template: 'one_step',
          brandColor: '#059669',
          buttonText: 'Complete Purchase',
        },
        charts: { revenue: null }
      };

      const stepTitles = [
        'Dashboard', 'Product Setup', 'Checkout Builder', 'Offers & Optimization', 'Thank You', 'Funnel Map', 'Analytics'
      ];

      const $ = (sel, root = document) => root.querySelector(sel);
      const $$ = (sel, root = document) => Array.from(root.querySelectorAll(sel));

      function showToast(msg='Saved successfully') {
        const toast = $('#toast');
        toast.firstElementChild.textContent = msg;
        toast.classList.remove('hidden');
        setTimeout(() => toast.classList.add('hidden'), 1400);
      }

      function goStep(i) {
        state.step = Math.max(0, Math.min(6, i));
        for (let idx = 0; idx <= 6; idx++) {
          const view = document.getElementById('view-' + idx);
          if (view) view.classList.toggle('hidden', idx !== state.step);
        }
        $('#wizardLabel').textContent = `Step ${state.step} of 6`;
        $('#Title').textContent = stepTitles[state.step] || '';
        // Sidebar active state
        $$('.step-btn').forEach(btn => {
          const active = Number(btn.dataset.step) === state.step;
          btn.classList.toggle('bg-emerald-50', active);
          btn.classList.toggle('text-emerald-700', active);
          btn.classList.toggle('ring-1', active);
          btn.classList.toggle('ring-emerald-200', active);
        });
        // Prev/Next visibility
        $('#prevBtn').classList.toggle('hidden', state.step === 0);
        $('#nextBtn').innerHTML = (state.step >= 6) ? 'Finish' : 'Next <i data-lucide="chevron-right" class="w-4 h-4 ml-1 inline"></i>';

        // On-enter step hooks
        if (state.step === 0) initDashboard();
        if (state.step === 1) initProducts();
        if (state.step === 2) applyCheckoutPreview();
        if (state.step === 6) initAnalytics();

        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function initDashboard() {
        const list = $('#funnelsList');
        if (!list) return;
        list.innerHTML = '';
        state.funnels.forEach(f => {
          const card = document.createElement('button');
          card.className = 'group p-3 text-left rounded-md border border-slate-200 hover:border-emerald-500 hover:shadow-sm bg-white';
          card.innerHTML = `
            <div class="flex items-start justify-between">
              <div class="font-medium text-[15px] tracking-tight">${f.name}</div>
              <i data-lucide="chevron-right" class="w-4 h-4 text-slate-400 group-hover:text-emerald-600"></i>
            </div>
            <div class="mt-2 grid grid-cols-3 gap-2 text-xs text-slate-600">
              <div class="p-2 rounded border border-slate-200"><span class="text-slate-500">Conv</span> <span class="float-right font-medium">${f.conv}</span></div>
              <div class="p-2 rounded border border-slate-200"><span class="text-slate-500">Revenue</span> <span class="float-right font-medium">${f.rev}</span></div>
              <div class="p-2 rounded border border-slate-200"><span class="text-slate-500">Edited</span> <span class="float-right font-medium">${f.edited}</span></div>
            </div>
          `;
          card.onclick = () => {
            $('#funnelNameInput').value = f.name;
            goStep(1);
          };
          list.appendChild(card);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function initProducts() {
        const sel = $('#mainProductSelect');
        if (!sel) return;
        sel.innerHTML = state.products.map(p => {
          const price = p.type === 'subscription' ? `$${p.price}/mo` : `$${p.price}`;
          return `<option value="${p.id}">${p.name} — ${price}</option>`;
        }).join('');
        sel.value = 'p_base';
      }

      function applyCheckoutPreview() {
        $('#templateBadge').textContent = {
          one_step: 'One-step', two_step: 'Two-step', popup: 'Popup', embed: 'Embedded'
        }[state.checkout.template] || 'One-step';
        const btn = $('#previewCheckoutButton');
        if (btn) {
          btn.style.backgroundColor = state.checkout.brandColor;
          btn.style.borderColor = state.checkout.brandColor;
          btn.textContent = state.checkout.buttonText || 'Complete Purchase';
        }
      }

      function initAnalytics() {
        const ctx = document.getElementById('revenueChart');
        if (!ctx) return;
        const data = {
          labels: ['Checkout', 'Bump', 'Upsell', 'Thank You'],
          datasets: [{
            label: 'Revenue',
            data: [14910, 3200, 5900, 900],
            backgroundColor: '#10B981',
            borderRadius: 6,
          }]
        };
        if (state.charts.revenue) {
          state.charts.revenue.data = data;
          state.charts.revenue.update();
        } else {
          state.charts.revenue = new Chart(ctx, {
            type: 'bar',
            data,
            options: {
              responsive: true,
              maintainAspectRatio: false,
              plugins: { legend: { display: false } },
              scales: { y: { ticks: { callback: v => '$' + v } } }
            }
          });
        }
      }

      document.addEventListener('DOMContentLoaded', () => {
        $('#year').textContent = new Date().getFullYear();

        // Icons
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});

        // Sidebar step clicks
        $$('.step-btn').forEach(btn => {
          btn.addEventListener('click', () => goStep(Number(btn.dataset.step)));
        });

        // Prev / Next
        $('#prevBtn').addEventListener('click', () => goStep(state.step - 1));
        $('#nextBtn').addEventListener('click', () => goStep(state.step + 1));

        // Top quick nav
        $('#topDashboardBtn').addEventListener('click', () => goStep(0));

        // Mobile sidebar toggle (minimal)
        const sidebar = $('#sidebar');
        $('#mobileMenuBtn').addEventListener('click', () => {
          sidebar.classList.toggle('hidden');
        });

        // Save & Publish
        $('#saveDraftBtn').addEventListener('click', () => showToast('Draft saved'));
        const publishModal = $('#publishModal');
        $('#publishBtn').addEventListener('click', () => publishModal.classList.remove('hidden'));
        $('#publishClose').addEventListener('click', () => publishModal.classList.add('hidden'));
        $('#publishOverlay').addEventListener('click', () => publishModal.classList.add('hidden'));
        $('#closePublishBtn').addEventListener('click', () => publishModal.classList.add('hidden'));
        $('#copyLinkBtn').addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText($('#publishedLink').value);
            showToast('Link copied');
          } catch { showToast('Copy failed'); }
        });
        $('#openAnalyticsBtn').addEventListener('click', () => {
          publishModal.classList.add('hidden');
          goStep(6);
        });

        // Product step bindings
        $('#mainProductSelect').addEventListener('change', (e) => {
          const prod = state.products.find(p => p.id === e.target.value);
          if (prod) {
            $('#previewTitle').textContent = prod.name;
            $('#productImageEl').src = prod.image;
          }
        });
        $('#productImageInput').addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = () => { $('#productImageEl').src = reader.result; };
          reader.readAsDataURL(file);
        });

        // Checkout builder bindings
        $$('.tpl-btn').forEach(b => b.addEventListener('click', () => {
          state.checkout.template = b.dataset.template;
          applyCheckoutPreview();
        }));
        $('#startScratchBtn').addEventListener('click', () => {
          state.checkout.template = 'one_step';
          applyCheckoutPreview();
        });
        $('#brandColor').addEventListener('input', (e) => {
          state.checkout.brandColor = e.target.value;
          applyCheckoutPreview();
        });
        $('#checkoutBtnText').addEventListener('input', (e) => {
          state.checkout.buttonText = e.target.value || 'Complete Purchase';
          applyCheckoutPreview();
        });
        $('#testimonialsToggle').addEventListener('change', (e) => {
          $('#testimonialsSection').classList.toggle('hidden', !e.target.checked);
        });
        $('#desktopPreview').addEventListener('click', () => {
          $('#checkoutPreview').classList.remove('max-w-[380px]');
        });
        $('#mobilePreview').addEventListener('click', () => {
          $('#checkoutPreview').classList.add('max-w-[380px]');
        });

        // Offers basic interactivity
        $('#bumpToggle').addEventListener('change', (e) => {
          $('#bumpConfig').classList.toggle('hidden', !e.target.checked);
          $('#bumpPreview').classList.toggle('hidden', !e.target.checked);
          $('#offersBumpPreview').classList.toggle('hidden', !e.target.checked);
        });
        $('#bumpLabel').addEventListener('input', (e) => {
          const el = $('#offersBumpPreview');
          if (el) el.textContent = e.target.value || 'Yes, add this to my order!';
        });
        $('#bumpHighlight').addEventListener('input', (e) => {
          const c = e.target.value || '#ECFDF5';
          $('#bumpPreview').style.backgroundColor = c;
          $('#offersBumpPreview').style.backgroundColor = c;
        });
        $('#upsellToggle').addEventListener('change', (e) => {
          $('#upsellList').classList.toggle('hidden', !e.target.checked);
        });
        $('#runABBtn').addEventListener('click', () => showToast('A/B test started'));

        // Thank You live preview
        $('#tyMessage').addEventListener('input', (e) => $('#tyMsgPreview').textContent = e.target.value || 'Thanks for your order!');
        $('#tySupportEmail').addEventListener('input', (e) => $('#tySupportEmailPreview').textContent = e.target.value || 'support@example.com');
        $('#tySupportLink').addEventListener('input', (e) => { $('#tySupportLinkPreview').href = e.target.value || '#'; });
        $('#tyCtaText').addEventListener('input', (e) => $('#tyCtaBtnPreview').textContent = e.target.value || 'Open');
        $('#tyCtaLink').addEventListener('input', (e) => $('#tyCtaBtnPreview').href = e.target.value || '#');

        // Init first step
        goStep(0);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex flex-col" id="app">

<header className="border-b border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-emerald-600/10 text-emerald-700 ring-1 ring-emerald-600/20 flex items-center justify-center font-semibold tracking-tight">
              SM
            </div>
<div>
<div className="text-[18px] font-semibold tracking-tight">Sales Magics</div>
<div className="text-xs text-slate-500">Funnel Builder</div>
</div>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="topDashboardBtn">
<i className="w-4 h-4 mr-1 inline" data-lucide="layout-dashboard"></i> Dashboard
            </button>
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="saveDraftBtn">
<i className="w-4 h-4 mr-1 inline" data-lucide="save"></i> Save Draft
            </button>
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="publishBtn">
<i className="w-4 h-4 mr-1 inline" data-lucide="rocket"></i> Publish
            </button>
</div>
<button className="md:hidden p-2 rounded-md hover:bg-emerald-50 text-slate-700 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="mobileMenuBtn">
<i className="w-5 h-5" data-lucide="panel-left-open"></i>
</button>
</div>
</header>
<div className="flex-1 flex">

<aside className="bg-white border-r border-slate-200 w-[280px] shrink-0 hidden md:flex md:flex-col" id="sidebar">
<div className="px-4 py-4 border-b border-slate-200">
<div className="text-sm text-slate-500 mb-2">Current Funnel</div>
<div className="flex items-center justify-between">
<input className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" id="funnelNameInput" placeholder="Untitled Funnel" type="text"/>
</div>
</div>
<nav className="flex-1 overflow-y-auto">
<ol className="p-3 space-y-1">
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="0">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">0</span>
<span className="flex-1">Dashboard</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="1">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">1</span>
<span className="flex-1">Product Setup</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="2">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">2</span>
<span className="flex-1">Checkout Builder</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="3">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">3</span>
<span className="flex-1">Offers &amp; Optimization</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="4">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">4</span>
<span className="flex-1">Thank You</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="5">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">5</span>
<span className="flex-1">Funnel Map</span>
</button></li>
<li><button className="step-btn w-full text-left flex items-center gap-3 px-3 py-2 rounded-md hover:bg-emerald-50 text-sm" data-step="6">
<span className="h-6 w-6 rounded-full ring-1 ring-slate-200 flex items-center justify-center bg-white text-slate-500">6</span>
<span className="flex-1">Analytics</span>
</button></li>
</ol>
</nav>
<div className="p-4 border-t border-slate-200">
<div className="flex items-center gap-2 text-xs text-slate-500">
<i className="w-4 h-4" data-lucide="shield-check"></i>
              Autosave enabled
            </div>
</div>
</aside>

<main className="flex-1 overflow-y-auto">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">

<div className="bg-white border border-slate-200 rounded-lg p-3 md:p-4 mb-4 flex items-center justify-between">
<div className="flex items-center gap-2 md:gap-3 text-sm">
<span className="text-slate-600" id="wizardLabel">Step 0 of 6</span>
<div className="hidden md:block h-4 w-px bg-slate-200"></div>
<div className="font-medium tracking-tight" id="wizardTitle">Dashboard</div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:text-emerald-700 hover:bg-emerald-50 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="prevBtn">
<i className="w-4 h-4 mr-1 inline" data-lucide="chevron-left"></i> Back
                </button>
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 active:bg-emerald-800 focus:outline-none focus-visible:outline focus-visible:outline-2 focus-visible:outline-emerald-500" id="nextBtn">
                  Next <i className="w-4 h-4 ml-1 inline" data-lucide="chevron-right"></i>
</button>
</div>
</div>

<section className="" id="view-0">
<div className="grid md:grid-cols-3 gap-4">
<div className="md:col-span-2 bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Your Funnels</h2>
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700 active:bg-emerald-800" id="createFunnelBtn">
<i className="w-4 h-4 mr-1 inline" data-lucide="plus"></i> Create New Funnel
                    </button>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-3" id="funnelsList">

</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h3 className="text-[18px] font-medium tracking-tight mb-3">Quick Stats</h3>
<div className="space-y-3 text-sm">
<div className="flex items-center justify-between p-3 rounded-md border border-slate-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="shopping-cart"></i>
                        Conversions
                      </div>
<div className="font-medium">3.8%</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-slate-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="badge-dollar-sign"></i>
                        Revenue
                      </div>
<div className="font-medium">$24,910</div>
</div>
<div className="flex items-center justify-between p-3 rounded-md border border-slate-200">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-600" data-lucide="split"></i>
                        A/B Tests
                      </div>
<div className="font-medium">3 Active</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-1">
<div className="grid lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight mb-4">Product Setup</h2>
<div className="space-y-4">
<div>
<label className="text-sm text-slate-700">Select Product</label>
<div className="mt-1 relative">
<select className="w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500 bg-white" id="mainProductSelect">

</select>
</div>
<p className="text-xs text-slate-500 mt-2">Choose an existing product from your catalog. Manage products from the Offers step when needed.</p>
</div>
<div>
<label className="text-sm text-slate-700">Pricing</label>
<div className="mt-2 grid sm:grid-cols-2 lg:grid-cols-3 gap-2">
<label className="flex items-center gap-2 rounded-md border border-slate-300 p-2 hover:border-emerald-500 cursor-pointer">
<input checked="" className="custom-radio" name="mainPricing" type="radio" value="one_time"/>
<span className="text-sm">One-time</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-slate-300 p-2 hover:border-emerald-500 cursor-pointer">
<input className="custom-radio" name="mainPricing" type="radio" value="subscription"/>
<span className="text-sm">Subscription</span>
</label>
<label className="flex items-center gap-2 rounded-md border border-slate-300 p-2 hover:border-emerald-500 cursor-pointer">
<input className="custom-radio" name="mainPricing" type="radio" value="trial"/>
<span className="text-sm">Trial</span>
</label>
</div>
</div>
<div>
<label className="text-sm text-slate-700">Product Description</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" id="mainProductDesc" placeholder="A short sales-focused description for your checkout..." rows="4"></textarea>
</div>
<div>
<label className="text-sm text-slate-700">Product Image</label>
<div className="mt-2 flex items-center gap-3">
<div className="h-14 w-14 rounded-md border border-slate-200 bg-slate-100 overflow-hidden" id="productImagePreview">
<img alt="" className="h-full w-full object-cover" id="productImageEl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
<label className="inline-flex items-center gap-2 px-3 py-2 rounded-md border border-slate-300 text-sm cursor-pointer hover:border-emerald-500">
<i className="w-4 h-4" data-lucide="upload"></i> Upload
                          <input accept="image/*" className="hidden" id="productImageInput" type="file"/>
</label>
</div>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h3 className="text-[18px] font-medium tracking-tight mb-3">Checkout Link</h3>
<div className="text-sm text-slate-600">A unique link is generated when you publish.</div>
<div className="mt-3 p-3 rounded-md border border-dashed border-slate-300 text-xs text-slate-500">
                    Example: https://salesmagics.app/f/ck_2M3x7
                  </div>
</div>
</div>
</section>

<section className="hidden" id="view-2">
<div className="grid lg:grid-cols-3 gap-4">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight mb-4">Checkout Builder</h2>
<div className="space-y-4">
<div>
<div className="text-sm text-slate-700 mb-2">Start From</div>
<div className="grid grid-cols-2 gap-2">
<button className="tpl-btn group p-3 rounded-md border border-slate-300 hover:border-emerald-500 text-left" data-template="one_step">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">One-step</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" data-lucide="square"></i>
</div>
<p className="text-xs text-slate-500 mt-1">Compact layout</p>
</button>
<button className="tpl-btn group p-3 rounded-md border border-slate-300 hover:border-emerald-500 text-left" data-template="two_step">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Two-step</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" data-lucide="columns-2"></i>
</div>
<p className="text-xs text-slate-500 mt-1">Lead + Payment</p>
</button>
<button className="tpl-btn group p-3 rounded-md border border-slate-300 hover:border-emerald-500 text-left" data-template="popup">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Popup</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" data-lucide="square-gantt"></i>
</div>
<p className="text-xs text-slate-500 mt-1">Click-to-open modal</p>
</button>
<button className="tpl-btn group p-3 rounded-md border border-slate-300 hover:border-emerald-500 text-left" data-template="embed">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Embedded</div>
<i className="w-4 h-4 text-slate-400 group-hover:text-emerald-600" data-lucide="code"></i>
</div>
<p className="text-xs text-slate-500 mt-1">Place within page</p>
</button>
</div>
</div>
<div>
<div className="text-sm text-slate-700 mb-2">Or Design From Scratch</div>
<button className="w-full p-3 rounded-md border border-slate-300 hover:border-emerald-500 text-left flex items-center gap-3" id="startScratchBtn">
<img alt="" className="h-10 w-10 rounded-md object-cover" src="https://images.unsplash.com/photo-1545235617-9465d2a55698?q=80&amp;w=600&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium">Blank Canvas</div>
<div className="text-xs text-slate-500">Drag blocks: logo, badges, testimonials</div>
</div>
</button>
</div>
<div className="border-t border-slate-200 pt-3">
<div className="text-sm text-slate-700 mb-2">Branding</div>
<div className="flex items-center gap-2">
<label className="px-3 py-2 rounded-md border border-slate-300 text-sm cursor-pointer hover:border-emerald-500">
<i className="w-4 h-4 inline mr-1" data-lucide="image"></i> Upload Logo
                          <input accept="image/*" className="hidden" id="logoUpload" type="file"/>
</label>
<input className="h-9 w-14 rounded-md border border-slate-300 bg-white cursor-pointer" id="brandColor" type="color" value="#059669"/>
<label className="flex items-center gap-2 text-sm">
<input className="peer hidden" id="testimonialsToggle" type="checkbox"/>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition peer-checked:bg-emerald-600">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
                          Testimonials
                        </label>
</div>
<div className="mt-3">
<label className="text-sm text-slate-700">Checkout Button Text</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:border-emerald-500" id="checkoutBtnText" placeholder="Complete Purchase" type="text"/>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[18px] font-medium tracking-tight">Live Preview</h3>
<div className="flex items-center gap-2">
<button className="px-2 py-1.5 text-xs rounded-md border border-slate-300 bg-white hover:border-emerald-500" id="desktopPreview"><i className="w-4 h-4 inline" data-lucide="monitor"></i></button>
<button className="px-2 py-1.5 text-xs rounded-md border border-slate-300 bg-white hover:border-emerald-500" id="mobilePreview"><i className="w-4 h-4 inline" data-lucide="smartphone"></i></button>
</div>
</div>
<div className="w-full" id="checkoutPreviewWrapper">
<div className="mx-auto max-w-xl rounded-lg border border-slate-200 overflow-hidden bg-white" id="checkoutPreview">
<div className="p-4 border-b border-slate-200 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-600/10 flex items-center justify-center text-emerald-700 font-medium" id="logoPreview">SM</div>
<div className="text-sm text-slate-600" id="previewTitle">Your Product</div>
<div className="ml-auto text-xs text-slate-500" id="templateBadge">One-step</div>
</div>
<div className="p-4 space-y-3">
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium">Contact</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="First name"/>
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Last name"/>
<input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Email"/>
</div>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium">Payment</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Card number"/>
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="MM/YY"/>
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="CVC"/>
</div>
</div>
<div className="hidden p-3 rounded-md border border-emerald-200 bg-emerald-50" id="bumpPreview">
<label className="flex items-start gap-3 text-sm">
<input className="mt-1 accent-emerald-600" type="checkbox"/>
<span>
<span className="font-medium block">Add Order Bump</span>
<span className="text-slate-600 block text-xs">Boost your results with an add-on.</span>
</span>
<img alt="" className="ml-auto h-10 w-10 rounded object-cover border border-emerald-200" id="bumpMiniImg" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
</label>
</div>
<button className="w-full px-4 py-2.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700" id="previewCheckoutButton">Complete Purchase</button>
<div className="hidden p-3 rounded-md border border-slate-200" id="testimonialsSection">
<div className="text-sm font-medium mb-2">What customers say</div>
<div className="space-y-2">
<div className="flex items-center gap-2 text-xs text-slate-600">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1512314889357-e157c22f938d?q=80&amp;w=200&amp;auto=format&amp;fit=crop" />
                              “Super smooth checkout and great results!”
                            </img></div>
<div className="flex items-center gap-2 text-xs text-slate-600">
<img className="h-6 w-6 rounded-full" src="https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&amp;w=200&amp;auto=format&amp;fit=crop" />
                              “Increased AOV by 30% with bumps.”
                            </img></div>
</div>
</div>
</div>
</div>
<p className="text-xs text-slate-500 mt-3">Changes apply instantly to preview.</p>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-3">
<div className="grid lg:grid-cols-3 gap-4">

<div className="bg-white border border-slate-200 rounded-lg p-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight mb-4">Offers &amp; Optimization</h2>

<div className="mb-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Order Bump</div>
<label className="flex items-center gap-2 text-sm">
<input className="peer hidden" id="bumpToggle" type="checkbox"/>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition peer-checked:bg-emerald-600">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
                        Enable
                      </label>
</div>
<div className="mt-3 hidden space-y-3" id="bumpConfig">
<div>
<label className="text-xs text-slate-600">Product</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white" id="bumpProductSelect">
<option value="">Select product</option>
<option value="p_addon">Template Pack</option>
<option value="p_coach">1:1 Coaching (Monthly)</option>
</select>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-xs text-slate-600">Pricing Style</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white" id="bumpPricingStyle">
<option value="flat">Flat fee</option>
<option value="discount">Discounted</option>
<option value="subscription_addon">Subscription add-on</option>
</select>
</div>
<div>
<label className="text-xs text-slate-600">Placement</label>
<select className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm bg-white" id="bumpPlacement">
<option value="before">Before checkout button</option>
<option value="after">After checkout button</option>
</select>
</div>
</div>
<div>
<label className="text-xs text-slate-600">Checkbox Label</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2 text-sm" id="bumpLabel" placeholder="Yes, add this to my order!" type="text"/>
</div>
<div className="flex items-center gap-2">
<label className="px-3 py-2 rounded-md border border-slate-300 text-sm cursor-pointer hover:border-emerald-500">
<i className="w-4 h-4 inline mr-1" data-lucide="image"></i> Mini Image
                          <input accept="image/*" className="hidden" id="bumpImageInput" type="file"/>
</label>
<input className="h-9 w-14 rounded-md border border-slate-300 bg-white cursor-pointer" id="bumpHighlight" type="color" value="#ECFDF5"/>
<span className="text-xs text-slate-500">Highlight</span>
</div>
</div>
</div>
<div className="h-px bg-slate-200 my-4"></div>

<div className="mb-5">
<div className="flex items-center justify-between">
<div className="text-sm font-medium">Upsell Funnel</div>
<label className="flex items-center gap-2 text-sm">
<input className="peer hidden" id="upsellToggle" type="checkbox"/>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition peer-checked:bg-emerald-600">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
                        Enable
                      </label>
</div>
<div className="mt-3 hidden space-y-3" id="upsellList">
<div className="rounded-md border border-slate-200 p-3 text-sm text-slate-600">No upsells added yet.</div>
</div>
<button className="mt-3 w-full justify-center inline-flex items-center gap-2 px-3 py-2 rounded-md border border-dashed border-slate-300 text-sm hover:border-emerald-500" id="addUpsellBtn">
<i className="w-4 h-4" data-lucide="plus"></i> Add Upsell Step
                    </button>
</div>
<div className="h-px bg-slate-200 my-4"></div>

<div>
<div className="text-sm font-medium mb-2">Optimization</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
<label className="flex items-center justify-between rounded-md border border-slate-300 p-2 text-sm">
                        A/B Bump Placement
                        <input className="peer hidden" id="abBump" type="checkbox"/>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition peer-checked:bg-emerald-600">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
</label>
<label className="flex items-center justify-between rounded-md border border-slate-300 p-2 text-sm">
                        A/B Upsell Pages
                        <input className="peer hidden" id="abUpsell" type="checkbox"/>
<span className="relative inline-flex h-5 w-9 items-center rounded-full bg-slate-200 transition peer-checked:bg-emerald-600">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white transition peer-checked:translate-x-4"></span>
</span>
</label>
</div>
<button className="mt-3 px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700" id="runABBtn">
<i className="w-4 h-4 inline mr-1" data-lucide="split"></i> Run Test
                    </button>
</div>
</div>

<div className="lg:col-span-2 space-y-4">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<h3 className="text-[18px] font-medium tracking-tight">Mini Flow Preview</h3>
</div>
<div className="flex flex-wrap items-center gap-2 text-sm" id="miniFlow">
<span className="px-2 py-1 rounded-md border border-slate-200 bg-slate-50">Checkout</span>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
<span className="px-2 py-1 rounded-md border border-slate-200">Thank You</span>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h3 className="text-[18px] font-medium tracking-tight mb-3">Checkout Preview (with Bump)</h3>
<div className="mx-auto max-w-xl rounded-lg border border-slate-200 overflow-hidden bg-white" id="offersCheckoutPreview">
<div className="p-4 border-b border-slate-200 flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-emerald-600/10 flex items-center justify-center text-emerald-700 font-medium">SM</div>
<div className="text-sm text-slate-600">Your Product</div>
</div>
<div className="p-4 space-y-3">
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium">Payment</div>
<div className="grid grid-cols-2 gap-2 mt-2">
<input className="col-span-2 rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="Card number"/>
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="MM/YY"/>
<input className="rounded-md border border-slate-300 px-3 py-2 text-sm" placeholder="CVC"/>
</div>
</div>
<div className="hidden p-3 rounded-md border border-emerald-200 bg-emerald-50" id="offersBumpPreview">
<div className="text-sm">Yes, add this to my order!</div>
</div>
<button className="w-full px-4 py-2.5 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700">Complete Purchase</button>
</div>
</div>
</div>

</div>
</div>
</section>

<section className="hidden" id="view-4">
<div className="grid lg:grid-cols-3 gap-4">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight mb-4">Thank You Page</h2>
<div className="space-y-3 text-sm">
<div>
<label className="text-xs text-slate-600">Custom Message</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="tyMessage" placeholder="Thanks for your order! Access your course here..." rows="3"></textarea>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-xs text-slate-600">Support Email</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="tySupportEmail" placeholder="support@yourbrand.com" type="email" />
</input></div>
<div>
<label className="text-xs text-slate-600">Support Link</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="tySupportLink" placeholder="https://help.yourbrand.com" type="url" />
</input></div>
</div>
<div className="grid grid-cols-2 gap-2">
<div>
<label className="text-xs text-slate-600">CTA Text</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="tyCtaText" placeholder="Go to Members Area" type="text" />
</input></div>
<div>
<label className="text-xs text-slate-600">CTA Link</label>
<input className="mt-1 w-full rounded-md border border-slate-300 px-3 py-2" id="tyCtaLink" placeholder="https://..." type="url" />
</input></div>
</div>
</div>
</div>
<div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-4">
<h3 className="text-[18px] font-medium tracking-tight mb-3">Confirmation Preview</h3>
<div className="rounded-lg border border-slate-200 overflow-hidden">
<div className="p-4 border-b border-slate-200">
<div className="text-[16px] font-medium">Order Confirmed</div>
<div className="text-xs text-slate-500">A summary of your purchase</div>
</div>
<div className="p-4 grid md:grid-cols-3 gap-3">
<div className="md:col-span-2 space-y-3">
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium mb-1">Items</div>
<ul className="text-sm text-slate-700 space-y-1" id="tyItems">
<li>Course: Sales Mastery — $199</li>
</ul>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium mb-1">Next Steps</div>
<p className="text-sm text-slate-600" id="tyMsgPreview">Thanks for your order!</p>
</div>
</div>
<div className="space-y-3">
<div className="p-3 rounded-md border border-slate-200">
<div className="text-sm font-medium">Support</div>
<div className="text-xs text-slate-600">
<div id="tySupportEmailPreview">support@example.com</div>
<a className="text-emerald-700 hover:underline" href="#" id="tySupportLinkPreview">Help Center</a>
</div>
</div>
<a className="block text-center px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700" id="tyCtaBtnPreview" target="_blank">Open</a>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-5">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between mb-3">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Funnel Map</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-emerald-50" id="resetMapBtn"><i className="w-4 h-4 inline mr-1" data-lucide="arrow-left-right"></i> Reset</button>
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700" id="copyEmbedBtn"><i className="w-4 h-4 inline mr-1" data-lucide="code"></i> Get Embed</button>
</div>
</div>
<div className="text-sm text-slate-600 mb-3">Drag to rearrange steps. Lines reflect logic automatically (Upsell → Downsell on reject).</div>
<div className="overflow-x-auto" id="mapCanvasWrapper">
<div className="min-w-[800px] p-4 border border-slate-200 rounded-lg bg-slate-50 relative" id="mapCanvas">
<div className="flex items-center gap-3" id="nodeLane">
<div className="px-3 py-2 rounded-md bg-white border border-slate-200">Checkout</div>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="px-3 py-2 rounded-md bg-white border border-slate-200">Upsell</div>
<i className="w-4 h-4 text-slate-400" data-lucide="arrow-right"></i>
<div className="px-3 py-2 rounded-md bg-white border border-slate-200">Thank You</div>
</div>
</div>
</div>
</div>
</section>

<section className="hidden" id="view-6">
<div className="grid lg:grid-cols-3 gap-4">
<div className="lg:col-span-2 bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<h2 className="text-[20px] md:text-[22px] font-semibold tracking-tight">Funnel Performance</h2>
<div className="flex items-center gap-2">
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-emerald-50" id="refreshMetricsBtn"><i className="w-4 h-4 inline mr-1" data-lucide="refresh-ccw"></i> Refresh</button>
</div>
</div>
<div className="mt-3">
<div className="grid grid-cols-2 md:grid-cols-4 gap-3">
<div className="p-3 rounded-md border border-slate-200">
<div className="text-xs text-slate-500">Checkout Conversion</div>
<div className="text-[20px] font-semibold tracking-tight mt-1" id="metricCheckout">3.8%</div>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="text-xs text-slate-500">Order Bump Acceptance</div>
<div className="text-[20px] font-semibold tracking-tight mt-1" id="metricBump">22%</div>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="text-xs text-slate-500">Upsell Accept vs Reject</div>
<div className="text-[20px] font-semibold tracking-tight mt-1" id="metricUpsell">41% / 59%</div>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="text-xs text-slate-500">Total Revenue</div>
<div className="text-[20px] font-semibold tracking-tight mt-1" id="metricRevenue">$24,910</div>
</div>
</div>
</div>
<div className="mt-4">
<div className="text-sm text-slate-700 mb-2">Revenue by Step</div>
<div>
<div className="rounded-md border border-slate-200 p-3">
<div className="relative h-64">
<div className="h-full">
<canvas id="revenueChart"></canvas>
</div>
</div>
</div>
<p className="text-xs text-slate-500 mt-2">Track per-step revenue and optimize with A/B tests.</p>
</div>
</div>
</div>
<div className="bg-white border border-slate-200 rounded-lg p-4">
<h3 className="text-[18px] font-medium tracking-tight mb-3">Tests</h3>
<div className="space-y-3 text-sm">
<div className="p-3 rounded-md border border-slate-200">
<div className="flex items-center justify-between">
<div>Order Bump Placement</div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span>
</div>
<div className="text-xs text-slate-500 mt-1">A/B comparing before vs after button</div>
</div>
<div className="p-3 rounded-md border border-slate-200">
<div className="flex items-center justify-between">
<div>Upsell Page Variant</div>
<span className="text-xs px-2 py-0.5 rounded bg-emerald-50 text-emerald-700 border border-emerald-200">Active</span>
</div>
<div className="text-xs text-slate-500 mt-1">Video vs Text-based template</div>
</div>
<button className="w-full px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700"><i className="w-4 h-4 inline mr-1" data-lucide="plus-circle"></i> New Test</button>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

<footer className="border-t border-slate-200 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-4 text-xs text-slate-500 flex items-center justify-between">
<div>© <span id="year"></span> Sales Magics</div>
<div className="flex items-center gap-4">
<a className="hover:text-emerald-700" href="#">Privacy</a>
<a className="hover:text-emerald-700" href="#">Terms</a>
<a className="hover:text-emerald-700" href="#">Support</a>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-40" id="publishModal">
<div className="absolute inset-0 bg-slate-900/40" id="publishOverlay"></div>
<div className="relative mx-auto mt-20 w-full max-w-lg">
<div className="bg-white border border-slate-200 rounded-lg p-4">
<div className="flex items-center justify-between">
<div className="text-[18px] font-medium tracking-tight">Funnel Published</div>
<button className="p-1 rounded hover:bg-emerald-50" id="publishClose"><i className="w-4 h-4" data-lucide="x"></i></button>
</div>
<p className="text-sm text-slate-600 mt-1">Your funnel is live. Share the link or embed the checkout.</p>
<div className="mt-3 space-y-3">
<div>
<div className="text-xs text-slate-500 mb-1">Checkout Link</div>
<div className="flex items-center gap-2">
<input className="flex-1 rounded-md border border-slate-300 px-3 py-2 text-sm" id="publishedLink" readonly="" value="https://salesmagics.app/f/ck_xxxxxx" />
<button className="px-3 py-2 rounded-md border border-slate-300 text-sm hover:border-emerald-500" id="copyLinkBtn"><i className="w-4 h-4 inline" data-lucide="copy"></i></button>
</input></div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Embed Code</div>
<textarea className="w-full rounded-md border border-slate-300 px-3 py-2 text-xs" id="embedCode" readonly="" rows="3">&lt;div id="salesmagics-checkout" data-product="ck_xxxxxx"&gt;&lt;/div&gt;
&lt;script async src="https://salesmagics.app/embed.js"&gt;&lt;/script&gt;</textarea>
</div>
<div className="flex items-center justify-end gap-2">
<button className="px-3 py-2 rounded-md text-sm text-slate-700 hover:bg-emerald-50" id="openAnalyticsBtn"><i className="w-4 h-4 inline mr-1" data-lucide="chart-no-axes-combined"></i> View Analytics</button>
<button className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm hover:bg-emerald-700" id="closePublishBtn">Done</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden fixed bottom-4 left-1/2 -translate-x-1/2 z-50" id="toast">
<div className="px-3 py-2 rounded-md bg-emerald-600 text-white text-sm shadow">
          Saved successfully
        </div>
</div>
</div>


    </>
  );
}
