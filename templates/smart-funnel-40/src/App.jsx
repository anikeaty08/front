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



      // App State
      const appState = {
        currentStep: 'setup_product',
        steps: ['setup_product', 'build_checkout', 'offers_flow', 'thank_you', 'dashboard'],
        form: {
          prod_name: '',
          prod_type: 'Digital',
          prod_price: '',
          prod_currency: 'USD',
          prod_delivery: 'Download Link',
          chk_template: 'Single-Step',
          chk_brandLogo: '',
          chk_primaryColor: '#2563EB',
          chk_paymentOptions: ['Credit/Debit Card','PayPal'],
          chk_enableCoupons: false,
          ob_enabled: false,
          ob_title: '',
          ob_price: '',
          ups_enabled: false,
          ups_name: '',
          ups_price: '',
          downs_name: '',
          downs_price: '',
          ty_template: 'Simple',
          ty_message: '',
          ty_redirectUrl: '',
          ty_timer: ''
        },
        data: {
          funnels: [],
          stats: { total: 0, avgConversion: '0%', revenue: '$0' }
        },
        modalOpen: null
      };

      // Utils
      const $ = (s, root=document) => root.querySelector(s);
      const $$ = (s, root=document) => Array.from(root.querySelectorAll(s));

      function setStep(stepId) {
        appState.currentStep = stepId;
        // Panels
        $$('.step-panel').forEach(p => p.classList.add('hidden'));
        const active = document.querySelector(`[data-panel="${stepId}"]`);
        if (active) active.classList.remove('hidden');

        // Title + desc
        const titles = {
          setup_product: { t: '1. Product', d: 'Enter what you’re selling (product/service) and pricing details.' },
          build_checkout: { t: '2. Checkout Page', d: 'Design your checkout layout and payment options.' },
          offers_flow: { t: '3. Offers & Flow', d: 'Add order bump, upsell & downsell to boost revenue.' },
          thank_you: { t: '4. Thank You / Confirmation', d: 'Set up the thank you page and post-purchase actions.' },
          dashboard: { t: 'Dashboard', d: 'View your funnel list and stats.' }
        };
        $('#page-title').textContent = titles[stepId].t;
        $('#page-desc').textContent = titles[stepId].d;

        // Sidebar active
        $$('#sidebar-steps button').forEach(btn => {
          btn.classList.remove('bg-slate-50');
          btn.classList.remove('active');
          if (btn.dataset.step === stepId) {
            btn.classList.add('bg-slate-50', 'active');
          }
        });

        // Progress
        const idx = appState.steps.indexOf(stepId);
        const total = 4; // wizard steps
        const stepIndex = Math.min(idx+1, total);
        const pct = stepId === 'dashboard' ? 100 : (stepIndex/total)*100;
        $('#progress-bar').style.width = pct + '%';
        $('#progress-label').textContent = stepId === 'dashboard' ? 'Completed' : `Step ${stepIndex} of ${total}`;

        // Render previews for relevant steps
        if (stepId === 'build_checkout') renderCheckoutPreview();
        if (stepId === 'thank_you') renderThankYouPreview();
        if (stepId === 'dashboard') renderDashboard();
      }

      function updateQuickPreview() {
        $('#qp_name').textContent = appState.form.prod_name || '—';
        $('#qp_type').textContent = appState.form.prod_type || 'Digital';
        const price = appState.form.prod_price ? `${appState.form.prod_currency} ${Number(appState.form.prod_price).toFixed(2)}` : '—';
        $('#qp_price').textContent = price;
        $('#qp_delivery').textContent = appState.form.prod_delivery || 'Download Link';
      }

      function pill(option, selected) {
        const map = {
          'Credit/Debit Card': { icon: 'credit-card' },
          'PayPal': { icon: 'badge-dollar-sign' },
          'Apple Pay': { icon: 'apple' },
          'Google Pay': { icon: 'wallet' },
          'Cash on Delivery': { icon: 'package' }
        };
        const isOn = selected.includes(option);
        const el = document.createElement('button');
        el.type = 'button';
        el.className = 'pm-pill inline-flex items-center gap-2 h-9 px-3 rounded-md ring-1 transition ' + (isOn ? 'bg-blue-50 ring-blue-200 text-blue-700' : 'bg-white ring-slate-200 hover:bg-slate-50 text-slate-700');
        el.dataset.value = option;
        el.innerHTML = `<i data-lucide="${map[option]?.icon || 'banknote'}" class="w-4 h-4"></i><span class="text-sm">${option}</span>`;
        return el;
      }

      function renderPaymentOptions() {
        const group = $('#pm-group');
        group.innerHTML = '';
        const selected = appState.form.chk_paymentOptions;
        ['Credit/Debit Card','PayPal','Apple Pay','Google Pay','Cash on Delivery'].forEach(opt => {
          const el = pill(opt, selected);
          group.appendChild(el);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5, width: 16, height: 16 }});
      }

      function renderCheckoutPreview() {
        const c = appState.form.chk_primaryColor || '#2563EB';
        const logo = appState.form.chk_brandLogo;
        const methods = appState.form.chk_paymentOptions;
        const hasCoupon = appState.form.chk_enableCoupons;
        const template = appState.form.chk_template;

        // Header
        const header = `
          <div class="px-6 py-4 flex items-center gap-3 border-b border-slate-200 bg-white">
            ${logo ? `<img src="${logo}" class="h-8 w-8 rounded-md ring-1 ring-slate-200 object-cover"/>` : `<div class="h-8 w-8 rounded-md flex items-center justify-center ring-1 ring-slate-200" style="background:${c}10;color:${c};"><span class="text-xs font-semibold tracking-tight">SF</span></div>`}
            <div class="text-sm font-medium tracking-tight">Secure Checkout</div>
            <div class="ml-auto flex items-center gap-2 text-xs text-slate-500">
              <i data-lucide="lock" class="w-3.5 h-3.5"></i>SSL
            </div>
          </div>
        `;

        // Payment method tags
        const pmTags = methods.map(m => {
          const iconMap = {
            'Credit/Debit Card': 'credit-card',
            'PayPal': 'badge-dollar-sign',
            'Apple Pay': 'apple',
            'Google Pay': 'wallet',
            'Cash on Delivery': 'package'
          };
          return `<span class="inline-flex items-center gap-1.5 text-xs px-2 py-1 rounded-md ring-1 ring-slate-200 bg-white">
            <i data-lucide="${iconMap[m] || 'banknote'}" class="w-3.5 h-3.5"></i>${m}
          </span>`;
        }).join(' ');

        // Body by template
        let body = '';
        const price = appState.form.prod_price ? `${appState.form.prod_currency} ${Number(appState.form.prod_price).toFixed(2)}` : '';
        const name = appState.form.prod_name || 'Your Product';
        const hero = `<img src="https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?q=80&w=1200&auto=format&fit=crop" class="w-full h-28 object-cover rounded-md ring-1 ring-slate-200" alt="hero"/>`;

        if (template === 'Single-Step') {
          body = `
            <div class="p-6 grid lg:grid-cols-2 gap-6">
              <div>
                ${hero}
                <div class="mt-3">
                  <div class="text-base font-medium tracking-tight">${name}</div>
                  <div class="text-sm text-slate-600 mt-0.5">${price}</div>
                </div>
                <div class="mt-3 flex flex-wrap gap-2">${pmTags}</div>
              </div>
              <div>
                <div class="space-y-3">
                  <input placeholder="Email address" class="w-full h-10 px-3 rounded-md ring-1 ring-slate-200" />
                  <input placeholder="Card number" class="w-full h-10 px-3 rounded-md ring-1 ring-slate-200" />
                  <div class="grid grid-cols-2 gap-3">
                    <input placeholder="MM/YY" class="h-10 px-3 rounded-md ring-1 ring-slate-200" />
                    <input placeholder="CVC" class="h-10 px-3 rounded-md ring-1 ring-slate-200" />
                  </div>
                  ${hasCoupon ? `<div class="flex gap-2"><input placeholder="Coupon code" class="flex-1 h-10 px-3 rounded-md ring-1 ring-slate-200"/><button class="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50 text-sm">Apply</button></div>` : ''}
                  <button class="w-full h-10 rounded-md text-white" style="background:${c};">Pay ${price || ''}</button>
                  <div class="text-xs text-slate-500 flex items-center gap-1 justify-center"><i data-lucide="shield-check" class="w-3.5 h-3.5"></i>30-day money-back guarantee</div>
                </div>
              </div>
            </div>
          `;
        } else if (template === 'Two-Step') {
          body = `
            <div class="p-6">
              <div class="flex items-center gap-2 mb-4">
                <span class="h-6 w-6 rounded-md flex items-center justify-center text-xs ring-1 ring-slate-200" style="color:${c};background:${c}10;">1</span>
                <span class="text-sm font-medium">Customer</span>
                <span class="mx-2 text-slate-400">/</span>
                <span class="h-6 w-6 rounded-md flex items-center justify-center text-xs ring-1 ring-slate-200">2</span>
                <span class="text-sm">Payment</span>
              </div>
              <div class="space-y-3">
                <input placeholder="Full name" class="w-full h-10 px-3 rounded-md ring-1 ring-slate-200" />
                <input placeholder="Email address" class="w-full h-10 px-3 rounded-md ring-1 ring-slate-200" />
                <button class="w-full h-10 rounded-md text-white" style="background:${c};">Continue</button>
              </div>
              <div class="mt-4 flex flex-wrap gap-2">${pmTags}</div>
            </div>
          `;
        } else if (template === 'Modal') {
          body = `
            <div class="p-6">
              <div class="text-sm text-slate-600">This template opens as a modal on your page.</div>
              <button class="mt-3 h-10 px-4 rounded-md text-white" style="background:${c};">Open Checkout</button>
            </div>
          `;
        } else {
          body = `
            <div class="p-6">
              <div class="text-sm text-slate-600">Embed this form on your site.</div>
              <div class="mt-3 rounded-md ring-1 ring-slate-200 p-3 text-xs bg-slate-50 overflow-x-auto">&lt;iframe src="https://yourdomain/checkout" width="100%" height="600"&gt;&lt;/iframe&gt;</div>
            </div>
          `;
        }

        $('#checkout-preview').innerHTML = header + body;
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function renderThankYouPreview() {
        const tmpl = appState.form.ty_template;
        const msg = appState.form.ty_message || 'Thanks for your purchase! Your order is confirmed.';
        const redirectUrl = appState.form.ty_redirectUrl?.trim();
        const timer = Number(appState.form.ty_timer || 0);
        let html = '';

        if (tmpl === 'Simple') {
          html = `
            <div class="p-6">
              <div class="flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-5 h-5 text-green-600"></i>
                <div class="text-base font-medium tracking-tight">Order Confirmed</div>
              </div>
              <p class="text-sm text-slate-600 mt-2">${msg}</p>
            </div>
          `;
        } else if (tmpl === 'Detailed Summary') {
          html = `
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2">
                <i data-lucide="check-circle-2" class="w-5 h-5 text-green-600"></i>
                <div class="text-base font-medium tracking-tight">Thank You</div>
              </div>
              <p class="text-sm text-slate-600">${msg}</p>
              <div class="rounded-md ring-1 ring-slate-200 p-3">
                <div class="text-xs text-slate-500 mb-2">Order Summary</div>
                <div class="flex items-center justify-between text-sm">
                  <span>${appState.form.prod_name || 'Product'}</span>
                  <span>${appState.form.prod_price ? `${appState.form.prod_currency} ${Number(appState.form.prod_price).toFixed(2)}` : '$—'}</span>
                </div>
              </div>
            </div>
          `;
        } else {
          html = `
            <div class="p-6 space-y-3">
              <div class="flex items-center gap-2">
                <i data-lucide="video" class="w-5 h-5 text-blue-600"></i>
                <div class="text-base font-medium tracking-tight">Video Message</div>
              </div>
              <div class="aspect-video w-full rounded-md ring-1 ring-slate-200 bg-slate-100"></div>
              <p class="text-sm text-slate-600">${msg}</p>
            </div>
          `;
        }

        $('#ty-preview').innerHTML = html;
        $('#ty-redirect-hint').textContent = redirectUrl ? `Redirecting to ${redirectUrl}${timer ? ` in ${timer}s` : ''}.` : 'No redirect configured.';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function renderDashboard() {
        // Stats
        $('#stat-total').textContent = appState.data.stats.total;
        $('#stat-conv').textContent = appState.data.stats.avgConversion;
        $('#stat-rev').textContent = appState.data.stats.revenue;

        // Table
        const tbody = $('#funnel-table');
        tbody.innerHTML = '';
        if (appState.data.funnels.length === 0) {
          const tr = document.createElement('tr');
          tr.innerHTML = `<td colspan="6" class="px-3 py-6 text-center text-slate-500">No funnels yet. Click "Create New Funnel" to start.</td>`;
          tbody.appendChild(tr);
          return;
        }
        appState.data.funnels.forEach((f, idx) => {
          const tr = document.createElement('tr');
          tr.className = 'hover:bg-slate-50';
          tr.innerHTML = `
            <td class="px-3 py-2">${f.name}</td>
            <td class="px-3 py-2">
              <span class="px-2 py-0.5 rounded-md text-xs ring-1 ring-slate-200 ${f.status === 'Active' ? 'bg-green-50 text-green-700' : 'bg-slate-50 text-slate-700'}">${f.status}</span>
            </td>
            <td class="px-3 py-2">${f.conversion}</td>
            <td class="px-3 py-2">${f.revenue}</td>
            <td class="px-3 py-2 text-slate-600">${f.lastEdited}</td>
            <td class="px-3 py-2">
              <div class="flex items-center gap-1">
                <button data-action="edit" data-index="${idx}" class="h-8 w-8 rounded-md hover:bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center"><i data-lucide="edit-3" class="w-4 h-4"></i></button>
                <button data-action="delete" data-index="${idx}" class="h-8 w-8 rounded-md hover:bg-slate-100 ring-1 ring-slate-200 flex items-center justify-center"><i data-lucide="trash-2" class="w-4 h-4"></i></button>
              </div>
            </td>
          `;
          tbody.appendChild(tr);
        });
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      }

      function syncColorHex() {
        $('#color-hex').value = appState.form.chk_primaryColor;
      }

      function setSwitch(name, value) {
        const btn = document.querySelector(`[data-switch="${name}"]`);
        if (!btn) return;
        if (value) {
          btn.style.background = appState.form.chk_primaryColor || '#2563EB';
          btn.querySelector('.dot').classList.add('translate-x-5');
          btn.querySelector('.dot').classList.remove('translate-x-0');
        } else {
          btn.style.background = '#f1f5f9';
          btn.querySelector('.dot').classList.add('translate-x-0');
          btn.querySelector('.dot').classList.remove('translate-x-5');
        }
        btn.setAttribute('aria-checked', value ? 'true' : 'false');
      }

      function applyVisibilityConditions() {
        // Order Bump
        const ob = appState.form.ob_enabled;
        const obEl = document.querySelector('[data-cond="ob_enabled"]');
        if (obEl) obEl.classList.toggle('hidden', !ob);

        // Upsell group
        const ups = appState.form.ups_enabled;
        const upsEl = document.querySelector('[data-cond="ups_enabled"]');
        if (upsEl) upsEl.classList.toggle('hidden', !ups);
      }

      // Actions
      function goToStep(target) { setStep(target); }
      function openModal(id) {
        appState.modalOpen = id;
        if (id === 'modal_flow') $('#flow-modal').classList.remove('hidden');
      }
      function closeModal() {
        appState.modalOpen = null;
        $('#flow-modal').classList.add('hidden');
      }
      function submit() {
        const name = appState.form.prod_name || 'Untitled Funnel';
        const newRow = {
          name,
          status: 'Active',
          conversion: '--',
          revenue: '$0',
          lastEdited: new Date().toISOString().split('T')[0]
        };
        appState.data.funnels.push(newRow);
        appState.data.stats.total += 1;
        setStep('dashboard');
      }

      // Event Wiring
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});

        // Init defaults
        renderPaymentOptions();
        setSwitch('chk_enableCoupons', appState.form.chk_enableCoupons);
        setSwitch('ob_enabled', appState.form.ob_enabled);
        setSwitch('ups_enabled', appState.form.ups_enabled);
        syncColorHex();
        updateQuickPreview();
        setStep(appState.currentStep);

        // Sidebar nav
        $$('#sidebar-steps button').forEach(btn => {
          btn.addEventListener('click', () => goToStep(btn.dataset.step));
        });

        // Top nav buttons
        $$('[data-nav]').forEach(btn => {
          btn.addEventListener('click', () => {
            const target = btn.dataset.target;
            if (btn.dataset.nav === 'next' || btn.dataset.nav === 'back') goToStep(target);
          });
        });

        // Field changes (generic)
        $$('[data-field]').forEach(input => {
          const key = input.dataset.field;
          // Set initial value for selects
          if (input.tagName === 'SELECT' || input.tagName === 'TEXTAREA' || input.tagName === 'INPUT') {
            // initial from state
            if (appState.form[key] !== undefined && input.type !== 'color' && input.type !== 'file') {
              if (input.tagName === 'TEXTAREA') input.value = appState.form[key] || '';
              else input.value = appState.form[key];
            }
          }

          input.addEventListener('input', () => {
            const t = input.type;
            let val = input.value;
            if (t === 'number') val = input.value;
            if (t === 'color') {
              appState.form[key] = val;
              syncColorHex();
              setSwitch('chk_enableCoupons', appState.form.chk_enableCoupons);
              renderCheckoutPreview();
              return;
            }
            appState.form[key] = val;
            updateQuickPreview();
            if (['chk_template','prod_price','prod_currency','prod_name'].includes(key)) renderCheckoutPreview();
            if (key.startsWith('ty_')) renderThankYouPreview();
          });
        });

        // Color hex manual input
        $('#color-hex').addEventListener('input', (e) => {
          let v = e.target.value;
          if (/^#([0-9a-f]{3}|[0-9a-f]{6})$/i.test(v)) {
            appState.form.chk_primaryColor = v;
            setSwitch('chk_enableCoupons', appState.form.chk_enableCoupons);
            renderCheckoutPreview();
          }
        });

        // Payment method select/deselect
        $('#pm-group').addEventListener('click', (e) => {
          const btn = e.target.closest('.pm-pill');
          if (!btn) return;
          const val = btn.dataset.value;
          const arr = appState.form.chk_paymentOptions;
          const i = arr.indexOf(val);
          if (i >= 0) arr.splice(i,1); else arr.push(val);
          appState.form.chk_paymentOptions = arr;
          renderPaymentOptions();
          renderCheckoutPreview();
        });

        // Switches
        $$('[data-switch]').forEach(sw => {
          sw.addEventListener('click', () => {
            const key = sw.dataset.switch;
            appState.form[key] = !appState.form[key];
            setSwitch(key, appState.form[key]);
            if (key === 'chk_enableCoupons') renderCheckoutPreview();
            if (key === 'ob_enabled' || key === 'ups_enabled') {
              applyVisibilityConditions();
            }
          });
        });

        // Logo upload
        $('#logo-input').addEventListener('change', (e) => {
          const file = e.target.files?.[0];
          if (!file) return;
          const reader = new FileReader();
          reader.onload = () => {
            appState.form.chk_brandLogo = reader.result;
            $('#logo-preview').src = reader.result;
            $('#logo-chip').classList.remove('hidden');
            renderCheckoutPreview();
          };
          reader.readAsDataURL(file);
        });
        $('#logo-remove').addEventListener('click', () => {
          appState.form.chk_brandLogo = '';
          $('#logo-input').value = '';
          $('#logo-chip').classList.add('hidden');
          renderCheckoutPreview();
        });

        // Modal
        $('#btn-preview-flow')?.addEventListener('click', () => openModal('modal_flow'));
        $('#modal-close')?.addEventListener('click', closeModal);
        $('#modal-close-2')?.addEventListener('click', closeModal);
        $('#flow-modal')?.addEventListener('click', (e) => {
          if (e.target.id === 'flow-modal') closeModal();
        });

        // Launch funnel
        $('#btn-launch').addEventListener('click', submit);

        // Dashboard actions
        $('#btn-new-funnel').addEventListener('click', () => {
          // reset minimal fields
          appState.form.prod_name = '';
          appState.form.prod_price = '';
          appState.form.prod_currency = 'USD';
          appState.form.prod_type = 'Digital';
          appState.form.prod_delivery = 'Download Link';
          appState.form.chk_template = 'Single-Step';
          appState.form.chk_primaryColor = '#2563EB';
          appState.form.chk_paymentOptions = ['Credit/Debit Card','PayPal'];
          appState.form.chk_enableCoupons = false;
          appState.form.ob_enabled = false;
          appState.form.ups_enabled = false;
          appState.form.ty_template = 'Simple';
          appState.form.ty_message = '';
          appState.form.ty_redirectUrl = '';
          appState.form.ty_timer = '';
          syncColorHex();
          setSwitch('chk_enableCoupons', false);
          setSwitch('ob_enabled', false);
          setSwitch('ups_enabled', false);
          renderPaymentOptions();
          updateQuickPreview();
          setStep('setup_product');
          applyVisibilityConditions();
          renderCheckoutPreview();
          renderThankYouPreview();
        });

        // Table actions (delegate)
        document.body.addEventListener('click', (e) => {
          const btn = e.target.closest('button[data-action]');
          if (!btn) return;
          const idx = Number(btn.dataset.index);
          const action = btn.dataset.action;
          if (action === 'delete') {
            appState.data.funnels.splice(idx, 1);
            appState.data.stats.total = appState.data.funnels.length;
            renderDashboard();
          } else if (action === 'edit') {
            // simple edit: jump to product and prefill name
            const f = appState.data.funnels[idx];
            appState.form.prod_name = f.name;
            updateQuickPreview();
            setStep('setup_product');
          }
        });

        // Initial conditional visibility
        applyVisibilityConditions();
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
      
<div className="min-h-screen flex">

<aside className="hidden lg:flex w-72 border-r border-slate-200 flex-col justify-between">
<div className="px-5 py-6">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-md flex items-center justify-center ring-1 ring-slate-200" style={{background: '#2563EB10', color: '#2563EB'}}>
<span className="text-sm font-semibold tracking-tight">SF</span>
</div>
<div className="flex flex-col">
<span className="text-sm font-medium tracking-tight">Smart Funnel Builder</span>
<span className="text-xs text-slate-500">Create, optimize, launch</span>
</div>
</div>
<div className="mt-6">
<div className="text-[11px] uppercase tracking-wider text-slate-500 px-1 mb-2">Wizard</div>
<nav className="space-y-1" id="sidebar-steps">
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 group" data-step="setup_product">
<i className="w-4 h-4 text-slate-500 group-[.active]:text-blue-600" data-lucide="box"></i>
<span className="text-sm">1. Product</span>
<span className="ml-auto h-6 w-6 rounded-md text-[11px] flex items-center justify-center ring-1 ring-slate-200 text-slate-500">1</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 group" data-step="build_checkout">
<i className="w-4 h-4 text-slate-500" data-lucide="credit-card"></i>
<span className="text-sm">2. Checkout Page</span>
<span className="ml-auto h-6 w-6 rounded-md text-[11px] flex items-center justify-center ring-1 ring-slate-200 text-slate-500">2</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 group" data-step="offers_flow">
<i className="w-4 h-4 text-slate-500" data-lucide="sparkles"></i>
<span className="text-sm">3. Offers &amp; Flow</span>
<span className="ml-auto h-6 w-6 rounded-md text-[11px] flex items-center justify-center ring-1 ring-slate-200 text-slate-500">3</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 group" data-step="thank_you">
<i className="w-4 h-4 text-slate-500" data-lucide="check-circle-2"></i>
<span className="text-sm">4. Thank You</span>
<span className="ml-auto h-6 w-6 rounded-md text-[11px] flex items-center justify-center ring-1 ring-slate-200 text-slate-500">4</span>
</button>
<div className="h-px bg-slate-200 my-3"></div>
<button className="w-full flex items-center gap-3 px-3 py-2 rounded-md text-left hover:bg-slate-50 ring-1 ring-transparent hover:ring-slate-200 group" data-step="dashboard">
<i className="w-4 h-4 text-slate-500" data-lucide="layout-dashboard"></i>
<span className="text-sm">Dashboard</span>
</button>
</nav>
</div>
</div>
<div className="px-5 py-5 border-t border-slate-200">
<div className="flex items-center gap-3">
<img alt="avatar" className="h-9 w-9 rounded-md object-cover ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1607746882042-944635dfe10e?q=80&amp;w=100&amp;auto=format&amp;fit=crop"/>
<div>
<div className="text-sm font-medium tracking-tight">You</div>
<div className="text-xs text-slate-500">Free workspace</div>
</div>
<button className="ml-auto h-8 w-8 rounded-md hover:bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center" id="sidebar-settings">
<i className="w-4 h-4 text-slate-600" data-lucide="settings"></i>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col">

<div className="lg:hidden flex items-center gap-2 px-4 py-3 border-b border-slate-200">
<button className="h-9 w-9 rounded-md ring-1 ring-slate-200 hover:bg-slate-50 flex items-center justify-center" id="open-drawer">
<i className="w-4 h-4 text-slate-700" data-lucide="panel-left"></i>
</button>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md flex items-center justify-center ring-1 ring-slate-200" style={{background: '#2563EB10', color: '#2563EB'}}>
<span className="text-xs font-semibold tracking-tight">SF</span>
</div>
<div className="text-sm font-medium tracking-tight">Smart Funnel Builder</div>
</div>
<div className="ml-auto flex items-center gap-2">
<button className="h-9 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50 text-sm">Help</button>
</div>
</div>

<div className="px-4 lg:px-8 py-4 border-b border-slate-200">
<div className="flex items-center justify-between">
<div>
<h1 className="text-xl lg:text-2xl font-semibold tracking-tight" id="page-title">1. Product</h1>
<p className="text-sm text-slate-600 mt-1" id="page-desc">Enter what you’re selling (product/service) and pricing details.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<div className="text-xs text-slate-500"><span id="progress-label">Step 1 of 4</span></div>
</div>
</div>
<div className="mt-4 h-2 rounded-full bg-slate-100 overflow-hidden">
<div className="h-full rounded-full transition-all" id="progress-bar" style={{background: '#2563EB', width: '25%'}}></div>
</div>
</div>

<section className="flex-1 px-4 lg:px-8 py-8">

<div className="step-panel" data-panel="setup_product">
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 space-y-5">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="grid sm:grid-cols-2 gap-4">
<div className="sm:col-span-2">
<label className="block text-sm text-slate-700 mb-1">Product Name</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="prod_name" placeholder="Enter product name" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Product Type</label>
<select className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="prod_type">
<option>Digital</option>
<option>Physical</option>
<option>Service</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Price</label>
<div className="flex">
<input className="w-full h-10 px-3 rounded-l-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="prod_price" placeholder="Enter product price" step="0.01" type="number"/>
<select className="h-10 px-3 rounded-r-md ring-1 ring-l-0 ring-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="prod_currency">
<option>USD</option>
<option>AED</option>
<option>EUR</option>
<option>INR</option>
<option>GBP</option>
</select>
</div>
</div>
<div className="sm:col-span-2">
<label className="block text-sm text-slate-700 mb-1">Delivery Method</label>
<select className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="prod_delivery">
<option>Download Link</option>
<option>Redirect URL</option>
<option>Manual Delivery</option>
<option>Membership Access</option>
</select>
</div>
</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-slate-500 mt-1" data-lucide="info"></i>
<div>
<div className="text-sm font-medium tracking-tight">Tips</div>
<p className="text-sm text-slate-600">Clear product names and fair pricing improve checkout conversions.</p>
</div>
</div>
</div>
</div>
<div className="lg:col-span-1">
<div className="sticky top-6 space-y-4">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="text-sm font-medium tracking-tight mb-3">Quick Preview</div>
<div className="space-y-2 text-sm">
<div className="flex items-center justify-between">
<span className="text-slate-600">Name</span>
<span className="font-medium" id="qp_name">—</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-600">Type</span>
<span className="font-medium" id="qp_type">Digital</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-600">Price</span>
<span className="font-medium" id="qp_price">—</span>
</div>
<div className="flex items-center justify-between">
<span className="text-slate-600">Delivery</span>
<span className="font-medium" id="qp_delivery">Download Link</span>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 h-10 rounded-md text-white shadow-sm hover:shadow transition ring-1 ring-slate-200" data-nav="next" data-target="build_checkout" style={{background: '#2563EB'}}>Next → Checkout</button>
</div>
</div>
</div>
</div>
</div>

<div className="step-panel hidden" data-panel="build_checkout">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-1 space-y-5">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="grid gap-4">
<div>
<label className="block text-sm text-slate-700 mb-1">Checkout Template</label>
<select className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="chk_template">
<option>Single-Step</option>
<option>Two-Step</option>
<option>Modal</option>
<option>Embeddable</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Brand Logo</label>
<div className="flex items-center gap-3">
<label className="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50 cursor-pointer inline-flex items-center gap-2 text-sm">
<i className="w-4 h-4 text-slate-600" data-lucide="upload"></i>
<span>Upload</span>
<input accept="image/*" className="hidden" id="logo-input" type="file"/>
</label>
<div className="h-10 px-3 rounded-md ring-1 ring-slate-200 text-xs hidden items-center gap-2" id="logo-chip">
<img alt="logo" className="h-6 w-6 rounded-sm object-cover ring-1 ring-slate-200" id="logo-preview"/>
<button className="ml-1 h-7 w-7 rounded-md hover:bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center" id="logo-remove">
<i className="w-4 h-4 text-slate-600" data-lucide="x"></i>
</button>
</div>
</div>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Primary Brand Color</label>
<div className="flex items-center gap-3">
<input className="h-10 w-14 rounded-md ring-1 ring-slate-200 p-1 bg-white cursor-pointer" data-field="chk_primaryColor" type="color" value="#2563EB"/>
<input className="flex-1 h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm" id="color-hex" type="text" value="#2563EB"/>
</div>
</div>
<div>
<label className="block text-sm text-slate-700 mb-2">Payment Methods</label>
<div className="flex flex-wrap gap-2" id="pm-group">

</div>
</div>
<div className="flex items-center justify-between">
<label className="text-sm text-slate-700">Enable Coupon Field</label>
<button className="relative inline-flex h-6 w-11 items-center rounded-full transition ring-1 ring-slate-200" data-switch="chk_enableCoupons" style={{background: '#f1f5f9'}}>
<span className="sr-only">Enable coupon</span>
<span className="dot inline-block h-5 w-5 transform rounded-full bg-white shadow ring-1 ring-slate-200 translate-x-0 transition"></span>
</button>
</div>
</div>
</div>
<div className="flex gap-3">
<button className="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" data-nav="back" data-target="setup_product">← Back</button>
<button className="flex-1 h-10 rounded-md text-white shadow-sm hover:shadow transition ring-1 ring-slate-200" data-nav="next" data-target="offers_flow" style={{background: '#2563EB'}}>Next → Offers</button>
</div>
</div>
<div className="xl:col-span-2">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="flex items-center justify-between mb-3">
<div className="text-sm font-medium tracking-tight">Live Checkout Preview</div>
<div className="text-xs text-slate-500">Interactive</div>
</div>
<div className="rounded-md ring-1 ring-slate-200 overflow-hidden bg-white" id="checkout-preview">

<div className="p-6 text-sm text-slate-600">Select template &amp; payment methods to see preview.</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-panel hidden" data-panel="offers_flow">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2 space-y-5">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="space-y-6">

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Enable Order Bump</div>
<p className="text-sm text-slate-600">A small add-on on the checkout to increase AOV.</p>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full transition ring-1 ring-slate-200" data-switch="ob_enabled" style={{background: '#f1f5f9'}}>
<span className="sr-only">Enable order bump</span>
<span className="dot inline-block h-5 w-5 transform rounded-full bg-white shadow ring-1 ring-slate-200 translate-x-0 transition"></span>
</button>
</div>
<div className="grid sm:grid-cols-2 gap-4 hidden" data-cond="ob_enabled">
<div>
<label className="block text-sm text-slate-700 mb-1">Order Bump Title</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ob_title" placeholder="Optional" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Order Bump Price</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ob_price" placeholder="0.00" step="0.01" type="number"/>
</div>
</div>
<div className="h-px bg-slate-200"></div>

<div className="flex items-center justify-between">
<div>
<div className="text-sm font-medium tracking-tight">Enable Upsell</div>
<p className="text-sm text-slate-600">One-click post-purchase offer.</p>
</div>
<button className="relative inline-flex h-6 w-11 items-center rounded-full transition ring-1 ring-slate-200" data-switch="ups_enabled" style={{background: '#f1f5f9'}}>
<span className="sr-only">Enable upsell</span>
<span className="dot inline-block h-5 w-5 transform rounded-full bg-white shadow ring-1 ring-slate-200 translate-x-0 transition"></span>
</button>
</div>
<div className="grid sm:grid-cols-2 gap-4 hidden" data-cond="ups_enabled">
<div>
<label className="block text-sm text-slate-700 mb-1">Upsell Offer Name</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ups_name" placeholder="Enter upsell product name" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Upsell Price</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ups_price" placeholder="0.00" step="0.01" type="number"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Downsell Offer Name</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="downs_name" placeholder="If upsell declined, offer this" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Downsell Price</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="downs_price" placeholder="0.00" step="0.01" type="number"/>
</div>
</div>
</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="text-sm font-medium tracking-tight mb-3">Flow Snapshot</div>
<div className="flex items-center flex-wrap gap-2 text-sm">
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Product</span>
<i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Checkout</span>
<i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Order Bump</span>
<i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Upsell</span>
<i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Downsell</span>
<i className="w-4 h-4 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-2.5 py-1 rounded-md ring-1 ring-slate-200 bg-white">Thank You</span>
</div>
</div>
<div className="flex gap-3">
<button className="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" data-nav="back" data-target="build_checkout">← Back</button>
<button className="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="btn-preview-flow">Preview Flow</button>
<button className="flex-1 h-10 rounded-md text-white shadow-sm hover:shadow transition ring-1 ring-slate-200" data-nav="next" data-target="thank_you" style={{background: '#2563EB'}}>Next → Thank You</button>
</div>
</div>
<div className="xl:col-span-1">
<div className="sticky top-6 space-y-4">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="lightbulb"></i>
<div>
<div className="text-sm font-medium tracking-tight">Pro tip</div>
<p className="text-sm text-slate-600">Keep order bumps under 25% of the main product price to maximize acceptance.</p>
</div>
</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<img alt="flow-art" className="w-full h-36 object-cover rounded-md ring-1 ring-slate-200" src="https://images.unsplash.com/photo-1547658719-da2b51169166?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>
<p className="text-xs text-slate-500 mt-2">Illustration</p>
</div>
</div>
</div>
</div>
</div>

<div className="step-panel hidden" data-panel="thank_you">
<div className="grid grid-cols-1 xl:grid-cols-3 gap-6">
<div className="xl:col-span-2">
<div className="p-5 rounded-lg ring-1 ring-slate-200 space-y-4">
<div>
<label className="block text-sm text-slate-700 mb-1">Template Style</label>
<select className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 bg-white focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ty_template">
<option>Simple</option>
<option>Detailed Summary</option>
<option>Video Message</option>
</select>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Custom Message</label>
<textarea className="w-full px-3 py-2 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30 text-sm" data-field="ty_message" placeholder="Thank you message to customer" rows="5"></textarea>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<div>
<label className="block text-sm text-slate-700 mb-1">Redirect URL (optional)</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ty_redirectUrl" placeholder="Enter URL" type="text"/>
</div>
<div>
<label className="block text-sm text-slate-700 mb-1">Redirect Timer (seconds)</label>
<input className="w-full h-10 px-3 rounded-md ring-1 ring-slate-200 focus:outline-none focus:ring-2 focus:ring-blue-500/30" data-field="ty_timer" placeholder="0" type="number"/>
</div>
</div>
</div>
<div className="mt-5 flex gap-3">
<button className="h-10 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" data-nav="back" data-target="offers_flow">← Back</button>
<button className="flex-1 h-10 rounded-md text-white shadow-sm hover:shadow transition ring-1 ring-slate-200" id="btn-launch" style={{background: '#10B981'}}>Launch Funnel</button>
</div>
</div>
<div className="xl:col-span-1">
<div className="sticky top-6 space-y-4">
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="text-sm font-medium tracking-tight mb-2">Thank You Preview</div>
<div className="rounded-md ring-1 ring-slate-200 overflow-hidden" id="ty-preview">
<div className="p-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-green-600" data-lucide="party-popper"></i>
<div className="text-base font-medium tracking-tight">Thank you!</div>
</div>
<p className="text-sm text-slate-600 mt-2">Your confirmation page will appear here.</p>
</div>
</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200">
<div className="flex items-start gap-3">
<i className="w-4 h-4 text-slate-500 mt-0.5" data-lucide="clock"></i>
<div>
<div className="text-sm font-medium tracking-tight">Auto-redirect</div>
<p className="text-sm text-slate-600" id="ty-redirect-hint">No redirect configured.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="step-panel hidden" data-panel="dashboard">
<div className="grid grid-cols-1 xl:grid-cols-4 gap-6">
<div className="xl:col-span-4 grid md:grid-cols-3 gap-4">
<div className="p-5 rounded-lg ring-1 ring-slate-200 bg-white">
<div className="text-xs text-slate-500">Total Funnels</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="stat-total">0</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200 bg-white">
<div className="text-xs text-slate-500">Avg Conversion</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="stat-conv">0%</div>
</div>
<div className="p-5 rounded-lg ring-1 ring-slate-200 bg-white">
<div className="text-xs text-slate-500">Total Revenue</div>
<div className="text-2xl font-semibold tracking-tight mt-1" id="stat-rev">$0</div>
</div>
</div>
<div className="xl:col-span-4 p-5 rounded-lg ring-1 ring-slate-200 overflow-x-auto">
<div className="flex items-center justify-between mb-4">
<div className="text-sm font-medium tracking-tight">Funnels</div>
<button className="h-9 px-3 rounded-md text-white shadow-sm hover:shadow transition ring-1 ring-slate-200" id="btn-new-funnel" style={{background: '#2563EB'}}>Create New Funnel</button>
</div>
<table className="min-w-full text-sm">
<thead className="bg-slate-50">
<tr className="text-left text-slate-600">
<th className="font-medium px-3 py-2">Name</th>
<th className="font-medium px-3 py-2">Status</th>
<th className="font-medium px-3 py-2">Conversion</th>
<th className="font-medium px-3 py-2">Revenue</th>
<th className="font-medium px-3 py-2">Last Edited</th>
<th className="font-medium px-3 py-2">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-200" id="funnel-table">

</tbody>
</table>
</div>
</div>
</div>
</section>
</main>
</div>

<div className="fixed inset-0 hidden" id="flow-modal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm"></div>
<div className="relative max-w-4xl mx-auto my-12 bg-white rounded-lg ring-1 ring-slate-200 overflow-hidden">
<div className="flex items-center justify-between px-5 py-3 border-b border-slate-200">
<div className="text-base font-medium tracking-tight">Funnel Flow Map</div>
<button className="h-9 w-9 rounded-md hover:bg-slate-50 ring-1 ring-slate-200 flex items-center justify-center" id="modal-close">
<i className="w-4 h-4 text-slate-700" data-lucide="x"></i>
</button>
</div>
<div className="p-6">
<div className="hidden md:flex items-center justify-center flex-wrap gap-3">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Product</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Checkout</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Order Bump</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Upsell</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Downsell</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-right"></i>
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white">Thank You</span>
</div>
<div className="md:hidden">
<div className="space-y-3">
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Product</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-down"></i>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Checkout</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-down"></i>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Order Bump</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-down"></i>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Upsell</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-down"></i>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Downsell</span>
<i className="w-5 h-5 text-slate-500" data-lucide="arrow-down"></i>
</div>
<div className="flex items-center gap-2">
<span className="px-3 py-2 rounded-md ring-1 ring-slate-200 bg-white flex-1 text-center">Thank You</span>
</div>
</div>
</div>
</div>
<div className="px-5 py-3 border-t border-slate-200 flex items-center justify-end">
<button className="h-9 px-3 rounded-md ring-1 ring-slate-200 hover:bg-slate-50" id="modal-close-2">Close</button>
</div>
</div>
</div>


    </>
  );
}
