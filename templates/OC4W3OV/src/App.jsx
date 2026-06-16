import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Icon init
    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });

    // State
    const state = {
      selectedId: null,
      device: 'desktop',
      history: [],
      historyIndex: -1,
      options: {
        currency: 'USD',
        tax: 0,
        requireShipping: false
      }
    };

    const qs = (sel, ctx = document) => ctx.querySelector(sel);
    const qsa = (sel, ctx = document) => Array.from(ctx.querySelectorAll(sel));
    const uid = () => Math.random().toString(36).slice(2, 9);

    const frame = qs('#frame');
    const canvas = qs('#canvas');
    const stack = qs('#stack');
    const emptyState = qs('#emptyState');
    const dropHint = qs('#dropHint');
    const gridOverlay = qs('#gridOverlay');

    // Device sizing
    const deviceWidths = {
      desktop: '1000px',
      tablet: '768px',
      mobile: '380px'
    };

    function setDevice(device) {
      state.device = device;
      frame.style.maxWidth = deviceWidths[device];
      qsa('.device-btn').forEach(btn => {
        btn.classList.toggle('bg-neutral-100', btn.dataset.device === device);
      });
    }

    // History
    function pushHistory() {
      const snapshot = stack.innerHTML;
      // truncate forward history on new change
      state.history = state.history.slice(0, state.historyIndex + 1);
      state.history.push(snapshot);
      state.historyIndex++;
      updateEmptyState();
    }

    function restoreFromHistory(index) {
      if (index < 0 || index >= state.history.length) return;
      stack.innerHTML = state.history[index];
      state.historyIndex = index;
      attachNodeBehaviors();
      selectNone();
      updateEmptyState();
    }

    // Templates
    const TPL = {
      section: () => {
        const id = uid();
        return `
          <section data-node="${id}" data-kind="section" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 24px;">
            ${nodeHeader('Section')}
            <div class="flex flex-col gap-3">
              <p class="text-sm text-slate-600">Drop elements here</p>
            </div>
          </section>
        `;
      },
      row2: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="row2" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Row 1/2')}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div class="min-h-[60px] rounded-md border border-dashed border-slate-300 bg-neutral-50/60 flex items-center justify-center text-slate-500 text-sm">Drop here</div>
              <div class="min-h-[60px] rounded-md border border-dashed border-slate-300 bg-neutral-50/60 flex items-center justify-center text-slate-500 text-sm">Drop here</div>
            </div>
          </div>
        `;
      },
      row3: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="row3" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Row 1/3')}
            <div class="grid grid-cols-1 md:grid-cols-3 gap-4">
              <div class="min-h-[60px] rounded-md border border-dashed border-slate-300 bg-neutral-50/60 flex items-center justify-center text-slate-500 text-sm">Drop here</div>
              <div class="min-h-[60px] rounded-md border border-dashed border-slate-300 bg-neutral-50/60 flex items-center justify-center text-slate-500 text-sm">Drop here</div>
              <div class="min-h-[60px] rounded-md border border-dashed border-slate-300 bg-neutral-50/60 flex items-center justify-center text-slate-500 text-sm">Drop here</div>
            </div>
          </div>
        `;
      },
      headline: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="headline" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 20px;">
            ${nodeHeader('Headline')}
            <h2 class="tracking-tight" style="font-size: 26px; font-weight: 600; color: #0f172a;">Secure Checkout</h2>
            <p class="text-slate-600 mt-1" style="font-size: 14px;">Complete your purchase below</p>
          </div>
        `;
      },
      subtext: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="subtext" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Subtext')}
            <p class="text-slate-700" style="font-size: 16px;">Join thousands of happy customers using our product.</p>
          </div>
        `;
      },
      product: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="product" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Product Summary')}
            <div class="flex items-center gap-4">
              <img src="https://images.unsplash.com/photo-1523275335684-37898b6baf30?q=80&w=400&auto=format&fit=crop" alt="Product" class="h-16 w-16 rounded-md object-cover border border-slate-200" />
              <div class="flex-1">
                <h4 class="text-slate-900 tracking-tight" style="font-size: 18px; font-weight: 600;">Pro Plan</h4>
                <p class="text-slate-600 text-sm">12 months access</p>
              </div>
              <div class="text-right">
                <p class="text-slate-900" style="font-size: 18px; font-weight: 600;">$99</p>
                <p class="text-slate-500 text-xs">Billed once</p>
              </div>
            </div>
          </div>
        `;
      },
      billing: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="billing" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Billing Details')}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${textField('First name')}
              ${textField('Last name')}
              ${textField('Email')}
              ${textField('Phone')}
            </div>
          </div>
        `;
      },
      shipping: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="shipping" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Shipping Details')}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${textField('Address')}
              ${textField('City')}
              ${textField('State/Region')}
              ${textField('Postal code')}
              ${textField('Country')}
            </div>
          </div>
        `;
      },
      coupon: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="coupon" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Coupon')}
            <div class="flex gap-2">
              <input class="flex-1 rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="Enter coupon" />
              <button class="rounded-md bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-2 text-sm">Apply</button>
            </div>
          </div>
        `;
      },
      payment: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="payment" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Payment Methods')}
            <div class="flex items-center gap-2 text-slate-700">
              <i data-lucide="credit-card" class="w-5 h-5"></i>
              <i data-lucide="lock" class="w-5 h-5"></i>
              <span class="text-sm">256-bit SSL Secure</span>
            </div>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3 mt-3">
              ${textField('Cardholder name')}
              ${textField('Card number')}
              ${textField('Expiry')}
              ${textField('CVC')}
            </div>
            <button class="w-full mt-4 rounded-md bg-emerald-700 hover:bg-emerald-800 text-white px-3 py-2 text-sm font-medium">Pay Now</button>
          </div>
        `;
      },
      orderbump: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="orderbump" draggable="true"
            class="relative group bg-emerald-50 border border-emerald-300 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Order Bump')}
            <div class="flex items-start gap-3">
              <input type="checkbox" class="mt-1 h-4 w-4 rounded border-emerald-300 text-emerald-700" />
              <div class="flex-1">
                <p class="text-slate-900" style="font-weight: 600;">Add Priority Support</p>
                <p class="text-slate-700 text-sm">Get 24/7 priority assistance for just $15</p>
              </div>
              <p class="text-emerald-800 font-medium">$15</p>
            </div>
          </div>
        `;
      },
      timer: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="timer" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Countdown')}
            <div class="flex items-center gap-3">
              <i data-lucide="clock" class="w-5 h-5 text-emerald-700"></i>
              <p class="text-slate-700"><span class="font-medium">Offer ends in:</span> <span class="countdown" data-seconds="3600">00:59:59</span></p>
            </div>
          </div>
        `;
      },
      testimonials: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="testimonials" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Testimonials')}
            <div class="grid grid-cols-1 md:grid-cols-2 gap-3">
              ${testimonialCard('https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&w=400&auto=format&fit=crop', 'Alex M.', 'Best purchase I made this year!')}
              ${testimonialCard('https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?q=80&w=400&auto=format&fit=crop', 'Priya S.', 'Checkout was simple and fast.')}
            </div>
          </div>
        `;
      },
      guarantee: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="guarantee" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Guarantee')}
            <div class="flex items-center gap-3">
              <i data-lucide="shield-check" class="w-6 h-6 text-emerald-700"></i>
              <div>
                <p class="text-slate-900" style="font-weight: 600;">30-Day Money Back Guarantee</p>
                <p class="text-slate-700 text-sm">If you’re not satisfied, get a full refund within 30 days.</p>
              </div>
            </div>
          </div>
        `;
      },
      faq: () => {
        const id = uid();
        return `
          <div data-node="${id}" data-kind="faq" draggable="true"
            class="relative group bg-white border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('FAQ')}
            <div class="space-y-2">
              ${faqItem('Is my payment secure?', 'Yes, all payments are processed using SSL encryption.')}
              ${faqItem('Can I cancel anytime?', 'Absolutely, you can cancel from your account settings.')}
            </div>
          </div>
        `;
      },
      footer: () => {
        const id = uid();
        return `
          <footer data-node="${id}" data-kind="footer" draggable="true"
            class="relative group bg-neutral-100 border border-slate-200 rounded-lg"
            style="padding: 16px;">
            ${nodeHeader('Footer')}
            <div class="flex flex-col md:flex-row md:items-center justify-between gap-2 text-slate-600 text-sm">
              <p>© <span class="year">${new Date().getFullYear()}</span> Forest Labs</p>
              <div class="flex items-center gap-4">
                <a href="#" class="hover:text-slate-900">Privacy</a>
                <a href="#" class="hover:text-slate-900">Terms</a>
                <a href="#" class="hover:text-slate-900">Support</a>
              </div>
            </div>
          </footer>
        `;
      },
    };

    function nodeHeader(label) {
      return `
        <div class="absolute left-3 -top-3 bg-white border border-slate-200 text-slate-600 text-xs px-2 py-0.5 rounded-md">${label}</div>
      `;
    }
    function textField(label) {
      return `
        <label class="block text-sm">
          <span class="text-xs text-slate-600">${label}</span>
          <input class="mt-1 w-full rounded-md border border-slate-200 px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-emerald-600" placeholder="${label}" />
        </label>
      `;
    }
    function testimonialCard(src, name, quote) {
      return `
        <div class="rounded-md border border-slate-200 p-3 bg-white flex gap-3">
          <img src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${name}" class="h-10 w-10 rounded-full object-cover border border-slate-200" />
          <div>
            <p class="text-slate-900" style="font-weight: 600;">${name}</p>
            <p class="text-slate-700 text-sm">“${quote}”</p>
          </div>
        </div>
      `;
    }
    function faqItem(q, a) {
      return `
        <details class="rounded-md border border-slate-200 bg-white">
          <summary class="px-3 py-2 cursor-pointer text-slate-900" style="font-weight: 600;">${q}</summary>
          <div class="px-3 pb-3 text-slate-700 text-sm">${a}</div>
        </details>
      `;
    }

    // Drag & Drop from Library
    qsa('.lib-item').forEach(item => {
      item.addEventListener('dragstart', (e) => {
        e.dataTransfer.setData('component', e.currentTarget.dataset.type);
        dropHint.classList.remove('hidden');
      });
      item.addEventListener('dragend', () => {
        dropHint.classList.add('hidden');
      });
    });

    // Canvas drop
    canvas.addEventListener('dragover', (e) => {
      e.preventDefault();
      canvas.classList.add('outline', 'outline-emerald-600', 'outline-2');
    });
    canvas.addEventListener('dragleave', () => {
      canvas.classList.remove('outline', 'outline-emerald-600', 'outline-2');
    });
    canvas.addEventListener('drop', (e) => {
      e.preventDefault();
      canvas.classList.remove('outline', 'outline-emerald-600', 'outline-2');
      const type = e.dataTransfer.getData('component');
      const movingId = e.dataTransfer.getData('movingNode');
      if (movingId) {
        const node = qs(`[data-node="${movingId}"]`, stack);
        if (node) {
          stack.appendChild(node);
          pushHistory();
          attachNodeBehaviors();
        }
        return;
      }
      if (type && TPL[type]) {
        const wrapper = document.createElement('div');
        wrapper.innerHTML = TPL[type]().trim();
        const node = wrapper.firstElementChild;
        stack.appendChild(node);
        pushHistory();
        attachNodeBehaviors();
        selectNode(node.dataset.node);
      }
    });

    function attachNodeBehaviors() {
      // ensure lucide icons inside new nodes
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      qsa('[data-node]', stack).forEach(node => {
        node.addEventListener('click', (e) => {
          e.stopPropagation();
          selectNode(node.dataset.node);
        });
        node.setAttribute('draggable', 'true');
        node.addEventListener('dragstart', (e) => {
          e.dataTransfer.setData('movingNode', node.dataset.node);
          e.stopPropagation();
          removeAnyNodeToolbar();
        });
        node.addEventListener('dragend', () => {
          // handled by drop
        });
      });
      updateEmptyState();
    }

    function updateEmptyState() {
      const hasNodes = qsa('[data-node]', stack).length > 0;
      emptyState.classList.toggle('hidden', hasNodes);
    }

    // Selection + Inspector
    const inspector = qs('#inspector');
    const noSelection = qs('#noSelection');
    const propText = qs('#propText');
    const propSubtext = qs('#propSubtext');
    const propImg = qs('#propImg');
    const propFontSize = qs('#propFontSize');
    const propWeight = qs('#propWeight');
    const propColor = qs('#propColor');
    const propBg = qs('#propBg');
    const propPadding = qs('#propPadding');
    const propRadius = qs('#propRadius');
    const propBorder = qs('#propBorder');
    const propBorderColor = qs('#propBorderColor');
    const propBorderWidth = qs('#propBorderWidth');
    const propShadow = qs('#propShadow');

    function selectNone() {
      state.selectedId = null;
      qsa('[data-node]', stack).forEach(n => n.style.outline = 'none');
      inspector.classList.add('hidden');
      noSelection.classList.remove('hidden');
      removeAnyNodeToolbar();
    }

    function removeAnyNodeToolbar() {
      qsa('.node-toolbar', stack).forEach(t => t.remove());
      qsa('[data-node]', stack).forEach(n => {
        const tb = qs('.node-toolbar', n);
        if (tb) tb.remove();
      });
      qsa('[data-node]', stack).forEach(n => n.classList.remove('relative'));
    }

    function selectNode(id) {
      state.selectedId = id;
      qsa('[data-node]', stack).forEach(n => n.style.outline = 'none');
      const node = qs(`[data-node="${id}"]`, stack);
      if (!node) return;

      node.style.outline = '2px solid #059669';
      node.style.outlineOffset = '0';

      // Show inspector
      noSelection.classList.add('hidden');
      inspector.classList.remove('hidden');

      // Prefill inspector based on node content
      populateInspector(node);

      // Add toolbar
      makeToolbar(node);
    }

    function populateInspector(node) {
      const kind = node.dataset.kind;

      // Reset fields visibility/defaults
      propText.value = '';
      propSubtext.value = '';
      propImg.value = '';
      propFontSize.value = '18';
      propWeight.value = '400';
      propColor.value = '#0f172a';
      propBg.value = rgbToHex(getComputedStyle(node).backgroundColor || '#ffffff');
      propPadding.value = parseInt(getComputedStyle(node).paddingTop || 16);
      propRadius.value = parseInt(getComputedStyle(node).borderTopLeftRadius || 8);

      const borderWidth = parseInt(getComputedStyle(node).borderTopWidth || 0);
      const borderColor = rgbToHex(getComputedStyle(node).borderTopColor || '#e2e8f0');
      propBorder.checked = borderWidth > 0;
      propBorderWidth.value = borderWidth || 1;
      propBorderColor.value = borderColor;
      propShadow.checked = (getComputedStyle(node).boxShadow || '').length > 0;

      // Content fields by kind
      if (kind === 'headline') {
        const h = qs('h2', node);
        const p = qs('p', node);
        propText.value = h ? h.textContent.trim() : '';
        propSubtext.value = p ? p.textContent.trim() : '';
        propFontSize.value = h ? parseInt(getComputedStyle(h).fontSize) : 26;
        propWeight.value = h ? String(parseInt(getComputedStyle(h).fontWeight)) : '600';
        propColor.value = h ? rgbToHex(getComputedStyle(h).color) : '#0f172a';
      } else if (kind === 'subtext') {
        const p = qs('p', node);
        propText.value = p ? p.textContent.trim() : '';
        propFontSize.value = p ? parseInt(getComputedStyle(p).fontSize) : 16;
        propWeight.value = p ? String(parseInt(getComputedStyle(p).fontWeight)) : '400';
        propColor.value = p ? rgbToHex(getComputedStyle(p).color) : '#0f172a';
      } else if (kind === 'product') {
        const h = qs('h4', node);
        const p = qs('p.text-slate-600', node);
        const img = qs('img', node);
        propText.value = h ? h.textContent.trim() : '';
        propSubtext.value = p ? p.textContent.trim() : '';
        propImg.value = img ? img.src : '';
      } else if (kind === 'guarantee') {
        const p = qs('div > p.text-slate-900', node);
        const sub = qs('div > p.text-slate-700', node);
        propText.value = p ? p.textContent.trim() : '';
        propSubtext.value = sub ? sub.textContent.trim() : '';
      } else {
        // Generic: first p or h
        const h = qs('h1,h2,h3,h4', node);
        const p = qs('p', node);
        propText.value = h ? h.textContent.trim() : (p ? p.textContent.trim() : '');
      }
    }

    // Inspector bindings
    function bindInspector() {
      const apply = () => {
        const node = getSelectedNode();
        if (!node) return;

        const kind = node.dataset.kind;

        // Content apply
        if (propText.value !== '') {
          if (kind === 'headline') {
            const h = qs('h2', node);
            if (h) h.textContent = propText.value;
          } else if (kind === 'subtext') {
            const p = qs('p', node);
            if (p) p.textContent = propText.value;
          } else if (kind === 'product') {
            const h = qs('h4', node);
            if (h) h.textContent = propText.value;
          } else {
            const h = qs('h1,h2,h3,h4', node);
            const p = qs('p', node);
            if (h) h.textContent = propText.value;
            else if (p) p.textContent = propText.value;
          }
        }
        if (propSubtext.value !== '') {
          const sub = qs('p.text-slate-600, p.text-slate-700', node);
          if (sub) sub.textContent = propSubtext.value;
        }
        if (propImg.value) {
          const img = qs('img', node);
          if (img) img.src = propImg.value;
        }

        // Style apply
        node.style.backgroundColor = propBg.value || '#ffffff';
        node.style.padding = `${parseInt(propPadding.value || 0)}px`;
        node.style.borderRadius = `${parseInt(propRadius.value || 0)}px`;
        if (propBorder.checked) {
          node.style.borderWidth = `${parseInt(propBorderWidth.value || 1)}px`;
          node.style.borderStyle = 'solid';
          node.style.borderColor = propBorderColor.value;
        } else {
          node.style.borderWidth = '0px';
          node.style.borderStyle = 'none';
        }
        node.style.boxShadow = propShadow.checked ? '0 1px 2px rgba(16,24,40,0.06), 0 1px 3px rgba(16,24,40,0.10)' : 'none';

        // Typography
        if (propColor.value || propFontSize.value || propWeight.value) {
          // try headline first
          const target = qs('h1,h2,h3,h4,p', node);
          if (target) {
            if (propColor.value) target.style.color = propColor.value;
            if (propFontSize.value) target.style.fontSize = `${parseInt(propFontSize.value)}px`;
            if (propWeight.value) target.style.fontWeight = propWeight.value;
          }
        }

        pushHistory();
        attachNodeBehaviors(); // rebind for icons in case structure changes
      };

      [propText, propSubtext, propImg].forEach(el => el.addEventListener('input', debounce(apply, 300)));
      [propFontSize, propWeight, propColor, propBg, propPadding, propRadius, propBorder, propBorderColor, propBorderWidth, propShadow]
        .forEach(el => el.addEventListener('input', debounce(apply, 150)));
    }

    function getSelectedNode() {
      if (!state.selectedId) return null;
      return qs(`[data-node="${state.selectedId}"]`, stack);
    }

    function makeToolbar(node) {
      removeAnyNodeToolbar();
      node.classList.add('relative');

      const tpl = qs('#nodeToolbarTpl').content.firstElementChild.cloneNode(true);
      tpl.classList.add('node-toolbar');
      node.appendChild(tpl);

      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

      const onAction = (action) => {
        if (action === 'delete') {
          node.remove();
          pushHistory();
          selectNone();
        } else if (action === 'duplicate') {
          const clone = node.cloneNode(true);
          const newId = uid();
          clone.dataset.node = newId;
          stack.insertBefore(clone, node.nextSibling);
          pushHistory();
          attachNodeBehaviors();
          selectNode(newId);
        } else if (action === 'up') {
          if (node.previousElementSibling) {
            stack.insertBefore(node, node.previousElementSibling);
            pushHistory();
          }
        } else if (action === 'down') {
          if (node.nextElementSibling) {
            stack.insertBefore(node.nextElementSibling, node);
            pushHistory();
          }
        }
      };

      qsa('button', tpl).forEach(btn => {
        const a = btn.dataset.action;
        if (a === 'move') {
          // already draggable by node; nothing extra
        } else {
          btn.addEventListener('click', (e) => {
            e.stopPropagation();
            onAction(a);
          });
        }
      });
    }

    // Controls: device, grid, snap
    qsa('.device-btn').forEach(btn => {
      btn.addEventListener('click', () => {
        setDevice(btn.dataset.device);
      });
    });
    setDevice('desktop');

    qs('#gridToggle').addEventListener('change', (e) => {
      gridOverlay.style.opacity = e.target.checked ? '1' : '0';
    });

    // Snap is visual only in this demo
    qs('#snapToggle').addEventListener('change', (e) => {
      canvas.style.scrollBehavior = e.target.checked ? 'smooth' : 'auto';
    });

    // Save/Load/Publish/Preview
    qs('#saveBtn').addEventListener('click', () => {
      const payload = {
        html: stack.innerHTML,
        options: state.options,
        device: state.device,
        ts: Date.now()
      };
      localStorage.setItem('checkout-designer', JSON.stringify(payload));
      toast('Saved');
    });

    // Load on start if available
    (function loadFromStorage() {
      const raw = localStorage.getItem('checkout-designer');
      if (!raw) return;
      try {
        const data = JSON.parse(raw);
        if (data.html) {
          stack.innerHTML = data.html;
          attachNodeBehaviors();
          pushHistory();
          setDevice(data.device || 'desktop');
        }
      } catch (_) {}
    })();

    qs('#publishBtn').addEventListener('click', async () => {
      const exportHtml = stack.innerHTML;
      try {
        await navigator.clipboard.writeText(exportHtml);
        toast('HTML copied to clipboard');
      } catch (e) {
        toast('Copy failed');
      }
    });

    const previewModal = qs('#previewModal');
    const previewRoot = qs('#previewRoot');
    qs('#previewBtn').addEventListener('click', () => {
      previewRoot.innerHTML = stack.innerHTML;
      previewModal.classList.remove('hidden');
      if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
    });
    qs('#closePreview').addEventListener('click', () => {
      previewModal.classList.add('hidden');
      previewRoot.innerHTML = '';
    });

    // Clear canvas
    qs('#clearCanvasBtn').addEventListener('click', () => {
      stack.innerHTML = '';
      pushHistory();
      attachNodeBehaviors();
      selectNone();
    });

    // Undo/Redo
    qs('#undoBtn').addEventListener('click', () => {
      restoreFromHistory(state.historyIndex - 1);
    });
    qs('#redoBtn').addEventListener('click', () => {
      restoreFromHistory(state.historyIndex + 1);
    });

    // Canvas click to deselect
    canvas.addEventListener('click', (e) => {
      if (e.target === canvas || e.target === stack) selectNone();
    });

    // Small toast
    function toast(msg) {
      const t = document.createElement('div');
      t.textContent = msg;
      t.className = 'fixed bottom-4 left-1/2 -translate-x-1/2 bg-slate-900 text-white text-sm px-3 py-1.5 rounded-md shadow z-50';
      document.body.appendChild(t);
      setTimeout(() => t.remove(), 1500);
    }

    // Debounce
    function debounce(fn, delay = 200) {
      let t = null;
      return (...args) => {
        clearTimeout(t);
        t = setTimeout(() => fn.apply(this, args), delay);
      };
    }

    // Color helpers
    function rgbToHex(rgb) {
      if (!rgb) return '#000000';
      const res = rgb.match(/\d+/g);
      if (!res) return '#000000';
      const [r, g, b] = res.map(Number);
      return '#' + [r, g, b].map(x => x.toString(16).padStart(2, '0')).join('');
    }

    // Inspector apply bindings
    bindInspector();

    // Initialize history
    pushHistory();

    // Simple countdown update for timers
    setInterval(() => {
      qsa('.countdown', stack).forEach(el => {
        let seconds = parseInt(el.dataset.seconds || '0', 10);
        if (seconds <= 0) return;
        seconds--;
        el.dataset.seconds = String(seconds);
        const h = String(Math.floor(seconds / 3600)).padStart(2, '0');
        const m = String(Math.floor((seconds % 3600) / 60)).padStart(2, '0');
        const s = String(seconds % 60).padStart(2, '0');
        el.textContent = `${h}:${m}:${s}`;
      });
    }, 1000);
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="hidden">
<div className="ring-emerald-500 bg-emerald-50 text-emerald-700 border-emerald-300 shadow-emerald-200"></div>
<div className="ring-transparent border-transparent outline outline-emerald-600 outline-2 outline-offset-0"></div>
<div className="shadow-sm shadow-md shadow-lg"></div>
<div className="bg-white bg-neutral-100 bg-neutral-200 bg-emerald-100"></div>
<div className="text-slate-600 text-slate-700 text-slate-800"></div>
<div className="border-slate-200 border-slate-300"></div>
</div>
<div className="h-screen w-full flex">

<aside className="w-64 shrink-0 border-r border-slate-200 bg-white/80 backdrop-blur-sm">
<div className="px-5 pt-4 pb-3 border-b border-slate-200">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-md grid place-items-center bg-emerald-600 text-white font-semibold tracking-tight">SF</div>
<div>
<p className="text-sm text-slate-500">Sales Funnel</p>
<h1 className="text-[20px] tracking-tight font-semibold text-slate-900">Checkout Designer</h1>
</div>
</div>
</div>
<nav className="px-3 py-3">
<ol className="text-sm text-slate-600 flex items-center gap-1 px-2">
<li className="flex items-center gap-1">
<i className="w-4 h-4 text-emerald-700" data-lucide="layout-grid"></i>
<span className="hover:text-slate-900 cursor-default">Funnel</span>
</li>
<li className="text-slate-400">
<i className="w-4 h-4" data-lucide="chevron-right"></i>
</li>
<li className="text-slate-900 font-medium tracking-tight">Checkout</li>
</ol>
<div className="mt-4 space-y-1">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="gauge"></i>
            Overview
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="link"></i>
            Landing
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md bg-emerald-50 text-emerald-800 border border-emerald-200">
<i className="w-4 h-4" data-lucide="shopping-cart"></i>
            Checkout
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="sparkles"></i>
            Upsell
          </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="shield-check"></i>
            Thank You
          </button>
</div>
<div className="mt-6 border-t border-slate-200 pt-4">
<p className="px-3 text-xs font-medium text-slate-500 uppercase tracking-wide">Templates</p>
<div className="mt-2 space-y-1">
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="layers"></i>
              Minimal
            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="layers"></i>
              Split
            </button>
<button className="w-full flex items-center gap-2 px-3 py-2 rounded-md hover:bg-neutral-100 text-slate-700">
<i className="w-4 h-4" data-lucide="layers"></i>
              Brand Heavy
            </button>
</div>
</div>
</nav>
</aside>

<div className="flex-1 flex flex-col min-w-0">

<header className="sticky top-0 z-40 border-b border-slate-200 bg-white/80 backdrop-blur-sm">
<div className="h-14 px-4 md:px-6 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-slate-700 px-3 py-1.5 rounded-md hover:bg-neutral-100 border border-slate-200" id="undoBtn">
<i className="w-4 h-4" data-lucide="undo"></i>
<span className="text-sm">Undo</span>
</button>
<button className="inline-flex items-center gap-1.5 text-slate-700 px-3 py-1.5 rounded-md hover:bg-neutral-100 border border-slate-200" id="redoBtn">
<i className="w-4 h-4" data-lucide="redo"></i>
<span className="text-sm">Redo</span>
</button>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<div className="flex items-center gap-1 rounded-md border border-slate-200 overflow-hidden">
<button className="device-btn px-3 py-1.5 text-slate-700 hover:bg-neutral-100 flex items-center gap-1.5" data-device="desktop">
<i className="w-4 h-4" data-lucide="monitor"></i><span className="text-sm">Desktop</span>
</button>
<button className="device-btn px-3 py-1.5 text-slate-700 hover:bg-neutral-100 flex items-center gap-1.5" data-device="tablet">
<i className="w-4 h-4" data-lucide="tablet"></i><span className="text-sm">Tablet</span>
</button>
<button className="device-btn px-3 py-1.5 text-slate-700 hover:bg-neutral-100 flex items-center gap-1.5" data-device="mobile">
<i className="w-4 h-4" data-lucide="smartphone"></i><span className="text-sm">Mobile</span>
</button>
</div>
<div className="h-6 w-px bg-slate-200"></div>
<div className="flex items-center gap-3">
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" id="gridToggle" type="checkbox"/>
<span className="inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:bg-emerald-600">
<span className="h-4 w-4 bg-white rounded-full translate-x-0 peer-checked:translate-x-4 shadow transition-transform"></span>
</span>
<span className="text-sm text-slate-700">Grid</span>
</label>
<label className="flex items-center gap-2 cursor-pointer select-none">
<input className="peer sr-only" id="snapToggle" type="checkbox"/>
<span className="inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:bg-emerald-600">
<span className="h-4 w-4 bg-white rounded-full translate-x-0 peer-checked:translate-x-4 shadow transition-transform"></span>
</span>
<span className="text-sm text-slate-700">Snap</span>
</label>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-1.5 text-slate-700 px-3 py-1.5 rounded-md hover:bg-neutral-100 border border-slate-200" id="previewBtn">
<i className="w-4 h-4" data-lucide="eye"></i>
<span className="text-sm">Preview</span>
</button>
<button className="inline-flex items-center gap-1.5 text-white bg-emerald-700 hover:bg-emerald-800 px-3 py-1.5 rounded-md" id="saveBtn">
<i className="w-4 h-4" data-lucide="save"></i>
<span className="text-sm font-medium">Save</span>
</button>
<button className="inline-flex items-center gap-1.5 text-emerald-800 bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 px-3 py-1.5 rounded-md" id="publishBtn">
<i className="w-4 h-4" data-lucide="play"></i>
<span className="text-sm">Publish</span>
</button>
</div>
</div>
</header>

<div className="flex-1 flex min-h-0">

<aside className="w-72 shrink-0 border-r border-slate-200 bg-white overflow-y-auto">
<div className="p-4 pb-2">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="mouse-pointer"></i>
<h2 className="text-[18px] tracking-tight font-semibold text-slate-900">Components</h2>
</div>
<p className="text-sm text-slate-600">Drag elements into the checkout canvas</p>
</div>
<div className="px-3 pb-6 space-y-6">
<div>
<p className="px-1 text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Structure</p>
<div className="grid grid-cols-1 gap-2">
<div className="lib-item cursor-grab active:cursor-grabbing rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center justify-between" data-type="section" draggable="true">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout-template"></i>
<span className="text-sm text-slate-800">Section</span>
</div>
<span className="text-xs text-slate-500">Full width</span>
</div>
<div className="lib-item cursor-grab active:cursor-grabbing rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center justify-between" data-type="row2" draggable="true">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout-template"></i>
<span className="text-sm text-slate-800">Row 1/2</span>
</div>
<span className="text-xs text-slate-500">2 columns</span>
</div>
<div className="lib-item cursor-grab active:cursor-grabbing rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center justify-between" data-type="row3" draggable="true">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="layout-template"></i>
<span className="text-sm text-slate-800">Row 1/3</span>
</div>
<span className="text-xs text-slate-500">3 columns</span>
</div>
</div>
</div>
<div>
<p className="px-1 text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Checkout</p>
<div className="grid grid-cols-1 gap-2">
<div className="lib-item" data-type="headline" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="type"></i><span className="text-sm">Headline</span>
</div>
</div>
<div className="lib-item" data-type="subtext" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="type"></i><span className="text-sm">Subtext</span>
</div>
</div>
<div className="lib-item" data-type="product" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="receipt"></i><span className="text-sm">Product Summary</span>
</div>
</div>
<div className="lib-item" data-type="billing" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="user"></i><span className="text-sm">Billing Details</span>
</div>
</div>
<div className="lib-item" data-type="shipping" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="map"></i><span className="text-sm">Shipping Details</span>
</div>
</div>
<div className="lib-item" data-type="coupon" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="percent"></i><span className="text-sm">Coupon Field</span>
</div>
</div>
<div className="lib-item" data-type="payment" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="credit-card"></i><span className="text-sm">Payment Methods</span>
</div>
</div>
<div className="lib-item" data-type="orderbump" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="plus"></i><span className="text-sm">Order Bump</span>
</div>
</div>
<div className="lib-item" data-type="timer" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="clock"></i><span className="text-sm">Countdown</span>
</div>
</div>
</div>
</div>
<div>
<p className="px-1 text-xs font-medium text-slate-500 uppercase tracking-wide mb-2">Trust &amp; Social</p>
<div className="grid grid-cols-1 gap-2">
<div className="lib-item" data-type="testimonials" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="star"></i><span className="text-sm">Testimonials</span>
</div>
</div>
<div className="lib-item" data-type="guarantee" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="shield-check"></i><span className="text-sm">Guarantee</span>
</div>
</div>
<div className="lib-item" data-type="faq" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="help-circle"></i><span className="text-sm">FAQ</span>
</div>
</div>
<div className="lib-item" data-type="footer" draggable="true">
<div className="rounded-md border border-slate-200 hover:border-emerald-300 hover:bg-emerald-50 p-3 flex items-center gap-2 cursor-grab active:cursor-grabbing">
<i className="w-4 h-4" data-lucide="image"></i><span className="text-sm">Footer</span>
</div>
</div>
</div>
</div>
</div>
</aside>

<main className="flex-1 min-w-0 bg-neutral-50 overflow-y-auto">
<div className="mx-auto p-4 md:p-6">
<div className="mb-3 flex items-center justify-between">
<div className="flex items-center gap-2">
<h2 className="text-[20px] tracking-tight font-semibold">Canvas</h2>
<span className="text-sm text-slate-600">Build your checkout with drag &amp; drop</span>
</div>
<div className="flex items-center gap-2">
<button className="text-slate-700 border border-slate-200 hover:bg-neutral-100 px-3 py-1.5 rounded-md text-sm flex items-center gap-1.5" id="clearCanvasBtn">
<i className="w-4 h-4" data-lucide="trash-2"></i> Clear
                </button>
</div>
</div>

<div className="transition-all duration-300 mx-auto" id="frame">
<div className="relative min-h-[580px] bg-white border border-slate-200 rounded-xl overflow-hidden" id="canvas" style={{outline: '0'}}>

<div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-200" id="gridOverlay">
<div className="w-full h-full" style={{backgroundSize: '24px 24px', backgroundImage: 'linear-gradient(to right, rgba(16,24,40,0.06) 1px, transparent 1px), linear-gradient(to bottom, rgba(16,24,40,0.06) 1px, transparent 1px)'}}></div>
</div>

<div className="absolute inset-0 flex flex-col items-center justify-center gap-2 text-slate-600" id="emptyState">
<i className="w-6 h-6 text-emerald-700" data-lucide="mouse-pointer"></i>
<p className="text-sm">Drag components here</p>
</div>

<div className="hidden absolute inset-x-6 top-4 z-10" id="dropHint">
<div className="rounded-md border border-emerald-300 bg-emerald-50 px-3 py-2 text-emerald-800 text-sm flex items-center gap-2">
<i className="w-4 h-4" data-lucide="hand"></i>
                    Drop to add your component
                  </div>
</div>

<div className="relative flex flex-col gap-3 p-6" id="stack"></div>
</div>
</div>
</div>
</main>

<aside className="w-80 shrink-0 border-l border-slate-200 bg-white overflow-y-auto">
<div className="p-4 pb-2">
<div className="flex items-center gap-2 mb-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="settings"></i>
<h2 className="text-[18px] tracking-tight font-semibold text-slate-900">Inspector</h2>
</div>
<p className="text-sm text-slate-600">Select an element to edit its content and style.</p>
</div>
<div className="px-4 py-10 text-center text-slate-500" id="noSelection">
<p className="text-sm">Nothing selected</p>
<p className="text-xs mt-1">Click a component in the canvas to edit</p>
</div>
<div className="hidden p-4 space-y-6" id="inspector">

<section className="space-y-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="type"></i>
<h3 className="text-sm font-medium tracking-tight text-slate-800">Content</h3>
</div>
<div className="space-y-3">
<label className="block">
<span className="text-xs text-slate-600">Text</span>
<textarea className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-3 py-2 text-sm" id="propText" placeholder="Update text..." rows="3"></textarea>
</label>
<label className="block">
<span className="text-xs text-slate-600">Subtext</span>
<input className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-3 py-2 text-sm" id="propSubtext" placeholder="Update subtext..."/>
</label>
<label className="block">
<span className="text-xs text-slate-600">Image URL</span>
<input className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-3 py-2 text-sm" id="propImg" placeholder="https://images.unsplash.com/..."/>
</label>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="palette"></i>
<h3 className="text-sm font-medium tracking-tight text-slate-800">Style</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="text-xs text-slate-600">Font size</span>
<input className="w-full" id="propFontSize" max="40" min="12" type="range" value="18"/>
</label>
<label className="block">
<span className="text-xs text-slate-600">Weight</span>
<select className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-2 py-2 text-sm" id="propWeight">
<option value="300">Light</option>
<option selected="" value="400">Regular</option>
<option value="500">Medium</option>
<option value="600">Semibold</option>
<option value="700">Bold</option>
</select>
</label>
<label className="block col-span-2">
<span className="text-xs text-slate-600">Text color</span>
<input className="mt-1 h-9 w-full rounded-md border border-slate-200" id="propColor" type="color" value="#0f172a"/>
</label>
<label className="block col-span-2">
<span className="text-xs text-slate-600">Background</span>
<input className="mt-1 h-9 w-full rounded-md border border-slate-200" id="propBg" type="color" value="#ffffff"/>
</label>
<label className="block">
<span className="text-xs text-slate-600">Padding (px)</span>
<input className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-2 py-2 text-sm" id="propPadding" max="64" min="0" type="number" value="16"/>
</label>
<label className="block">
<span className="text-xs text-slate-600">Radius (px)</span>
<input className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-2 py-2 text-sm" id="propRadius" max="24" min="0" type="number" value="8"/>
</label>
<label className="block col-span-2">
<span className="text-xs text-slate-600">Border</span>
<div className="flex items-center gap-2">
<input className="peer sr-only" id="propBorder" type="checkbox"/>
<span className="inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:bg-emerald-600">
<span className="h-4 w-4 bg-white rounded-full translate-x-0 peer-checked:translate-x-4 shadow transition-transform"></span>
</span>
<input className="h-9 rounded-md border border-slate-200" id="propBorderColor" type="color" value="#e2e8f0"/>
<input className="w-20 rounded-md border border-slate-200 px-2 py-2 text-sm" id="propBorderWidth" max="8" min="0" type="number" value="1"/>
</div>
</label>
<label className="block col-span-2">
<span className="text-xs text-slate-600">Shadow</span>
<input className="peer sr-only" id="propShadow" type="checkbox"/>
<span className="inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:bg-emerald-600">
<span className="h-4 w-4 bg-white rounded-full translate-x-0 peer-checked:translate-x-4 shadow transition-transform"></span>
</span>
</label>
</div>
</section>
<div className="h-px bg-slate-200"></div>

<section className="space-y-3">
<div className="flex items-center gap-2">
<i className="w-4 h-4" data-lucide="credit-card"></i>
<h3 className="text-sm font-medium tracking-tight text-slate-800">Checkout</h3>
</div>
<div className="grid grid-cols-2 gap-3">
<label className="block">
<span className="text-xs text-slate-600">Currency</span>
<select className="mt-1 w-full rounded-md border border-slate-200 focus:outline-none focus:ring-2 focus:ring-emerald-600 px-2 py-2 text-sm" id="optCurrency">
<option value="USD">USD $</option>
<option value="EUR">EUR €</option>
<option value="GBP">GBP £</option>
</select>
</label>
<label className="block">
<span className="text-xs text-slate-600">Tax (%)</span>
<input className="mt-1 w-full rounded-md border border-slate-200 px-2 py-2 text-sm" id="optTax" type="number" value="0"/>
</label>
<label className="block col-span-2">
<span className="text-xs text-slate-600">Require Shipping</span>
<input className="peer sr-only" id="optRequireShipping" type="checkbox"/>
<span className="inline-flex h-5 w-9 items-center rounded-full border border-slate-300 bg-white transition-colors peer-checked:bg-emerald-600">
<span className="h-4 w-4 bg-white rounded-full translate-x-0 peer-checked:translate-x-4 shadow transition-transform"></span>
</span>
</label>
</div>
</section>
</div>
</aside>
</div>
</div>
</div>

<template id="nodeToolbarTpl">
<div className="absolute -top-3 right-3 z-20 inline-flex items-center gap-1 bg-white border border-slate-200 rounded-md shadow-sm px-1.5 py-1">
<button className="p-1 rounded hover:bg-neutral-100 text-slate-700 cursor-move" data-action="move" title="Drag to move">
<i className="w-4 h-4" data-lucide="move"></i>
</button>
<button className="p-1 rounded hover:bg-neutral-100 text-slate-700" data-action="up" title="Move up">
<i className="w-4 h-4" data-lucide="arrow-up"></i>
</button>
<button className="p-1 rounded hover:bg-neutral-100 text-slate-700" data-action="down" title="Move down">
<i className="w-4 h-4" data-lucide="arrow-down"></i>
</button>
<button className="p-1 rounded hover:bg-neutral-100 text-slate-700" data-action="duplicate" title="Duplicate">
<i className="w-4 h-4" data-lucide="copy"></i>
</button>
<button className="p-1 rounded hover:bg-neutral-100 text-rose-600" data-action="delete" title="Delete">
<i className="w-4 h-4" data-lucide="trash-2"></i>
</button>
</div>
</template>

<div className="fixed inset-0 hidden items-center justify-center bg-black/30 z-50" id="previewModal">
<div className="bg-white rounded-xl shadow-lg border border-slate-200 w-[90vw] max-w-5xl max-h-[85vh] overflow-hidden flex flex-col">
<div className="px-4 py-3 border-b border-slate-200 flex items-center justify-between">
<div className="flex items-center gap-2">
<i className="w-4 h-4 text-emerald-700" data-lucide="eye"></i>
<p className="text-sm text-slate-700">Preview</p>
</div>
<button className="px-3 py-1.5 rounded-md border border-slate-200 hover:bg-neutral-100 text-slate-700 text-sm" id="closePreview">Close</button>
</div>
<div className="p-4 overflow-auto">
<div className="mx-auto w-full md:w-[900px]">
<div className="border border-slate-200 rounded-xl overflow-hidden bg-white" id="previewRoot"></div>
</div>
</div>
</div>
</div>


    </>
  );
}
