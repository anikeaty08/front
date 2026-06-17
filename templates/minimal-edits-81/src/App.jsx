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



      // Icons
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      // State
      const webhook = 'https://hsaikia.app.n8n.cloud/webhook-test/278922fd-f51b-4426-9517-d5309c088e9d';
      const state = {
        product: { name: 'Minimal Crew', style: 'Crew', fit: 'Unisex', basePrice: 24 },
        color: '#111827',
        size: 'M',
        printArea: 'Front',
        method: 'DTG',
        quantity: 1,
        text: 'Your Text',
        textSize: 28,
        textColor: '#ffffff',
        artDataUrl: null,
        cart: [],
        chat: [],
        sessionId: Math.random().toString(36).slice(2),
      };

      // Helpers
      const $ = (sel) => document.querySelector(sel);
      const $$ = (sel) => Array.from(document.querySelectorAll(sel));
      const showToast = (msg) => {
        const t = $('#toast'); const m = $('#toastMsg'); m.textContent = msg; t.classList.remove('hidden');
        setTimeout(() => t.classList.add('hidden'), 2200);
      };
      const money = (n) => `$${n.toFixed(2)}`;

      // Catalog filters
      $('#filterStyle').addEventListener('change', filterCatalog);
      $('#filterFit').addEventListener('change', filterCatalog);
      function filterCatalog() {
        const fs = $('#filterStyle').value;
        const ff = $('#filterFit').value;
        $$('#catalogGrid > div').forEach(card => {
          const ok = (!fs || card.dataset.style === fs) && (!ff || card.dataset.fit === ff);
          card.style.display = ok ? '' : 'none';
        });
      }

      // Product selection from catalog
      window.selectProduct = (name, style, fit) => {
        state.product = { name, style, fit, basePrice: priceByStyle(style) };
        $('#selectedProduct').textContent = name;
        $('#priceLabel').textContent = money(state.product.basePrice);
        document.getElementById('customizer').scrollIntoView({ behavior: 'smooth' });
      };
      const priceByStyle = (style) => {
        switch (style) {
          case 'V-Neck': return 26;
          case 'Oversized': return 28;
          case 'Long Sleeve': return 29;
          default: return 24;
        }
      };

      // Color swatches
      const teeBody = $('#teeBody');
      $$('#colorSwatches .color-swatch').forEach(btn => {
        btn.addEventListener('click', () => {
          state.color = btn.dataset.color;
          teeBody.setAttribute('fill', state.color);
          $$('#colorSwatches .color-swatch').forEach(x => x.classList.remove('ring-white/40'));
          btn.classList.add('ring-white/40');
        });
      });
      // Default selected ring
      $$('#colorSwatches .color-swatch')[0].classList.add('ring-white/40');

      // Size buttons
      $$('#sizeSelect .size-btn').forEach(btn => {
        btn.addEventListener('click', () => {
          state.size = btn.dataset.size;
          $$('#sizeSelect .size-btn').forEach(x => x.classList.remove('ring-2', 'ring-white/30', 'bg-white/10'));
          btn.classList.add('ring-2', 'ring-white/30', 'bg-white/10');
        });
      });
      // default
      $$('#sizeSelect .size-btn').find(b => b.dataset.size === 'M').click();

      // Print area & method
      $('#printArea').addEventListener('change', (e) => state.printArea = e.target.value);
      $('#printMethod').addEventListener('change', (e) => state.method = e.target.value);

      // Text controls
      const designText = $('#designText');
      $('#textInput').addEventListener('input', (e) => {
        state.text = e.target.value || '';
        designText.textContent = state.text || '';
      });
      const sizeInput = $('#textSize');
      const sizeLabel = $('#textSizeLabel');
      sizeInput.addEventListener('input', (e) => {
        state.textSize = +e.target.value;
        sizeLabel.textContent = state.textSize;
        designText.setAttribute('font-size', state.textSize);
      });
      // Text color swatches
      $$('#textColorSwatches button').forEach(btn => {
        btn.addEventListener('click', () => {
          state.textColor = btn.dataset.tcolor;
          designText.setAttribute('fill', state.textColor);
          $$('#textColorSwatches button').forEach(x => x.classList.remove('ring-2', 'ring-white/40'));
          btn.classList.add('ring-2', 'ring-white/40');
        });
      });

      // Artwork upload
      const artImage = $('#artImage');
      $('#artInput').addEventListener('change', (e) => {
        const file = e.target.files?.[0];
        if (!file) return;
        const r = new FileReader();
        r.onload = () => {
          state.artDataUrl = r.result;
          artImage.setAttribute('href', state.artDataUrl);
          artImage.style.display = 'block';
        };
        r.readAsDataURL(file);
      });
      $('#clearArt').addEventListener('click', () => {
        state.artDataUrl = null;
        artImage.setAttribute('href', '');
        artImage.style.display = 'none';
        $('#artInput').value = '';
      });

      // Quantity
      const qtyInput = $('#qtyInput');
      $('#qtyInc').addEventListener('click', () => { qtyInput.value = (+qtyInput.value || 1) + 1; state.quantity = +qtyInput.value; });
      $('#qtyDec').addEventListener('click', () => { qtyInput.value = Math.max(1, (+qtyInput.value || 1) - 1); state.quantity = +qtyInput.value; });
      qtyInput.addEventListener('input', () => { state.quantity = Math.max(1, +qtyInput.value || 1); qtyInput.value = state.quantity; });

      // Add to cart
      const cartBtn = $('#cartBtn');
      const cartDrawer = $('#cartDrawer');
      const cartItems = $('#cartItems');
      const cartCount = $('#cartCount');
      const cartSubtotal = $('#cartSubtotal');
      const openCart = () => { cartDrawer.classList.remove('translate-x-full'); };
      const closeCart = () => { cartDrawer.classList.add('translate-x-full'); };
      cartBtn.addEventListener('click', openCart);
      $('#closeCart').addEventListener('click', closeCart);

      $('#addToCart').addEventListener('click', () => {
        const item = {
          id: Math.random().toString(36).slice(2),
          ...state.product,
          color: state.color,
          size: state.size,
          printArea: state.printArea,
          method: state.method,
          quantity: state.quantity,
          text: state.text,
          textSize: state.textSize,
          textColor: state.textColor,
          hasArt: !!state.artDataUrl,
          price: state.product.basePrice,
        };
        state.cart.push(item);
        renderCart();
        showToast('Added to cart');
        openCart();
      });

      function renderCart() {
        cartItems.innerHTML = '';
        let subtotal = 0;
        state.cart.forEach(i => {
          const line = i.price * i.quantity;
          subtotal += line;
          const row = document.createElement('div');
          row.className = 'border border-white/10 rounded-lg p-3 flex items-start gap-3';
          row.innerHTML = `
            <div class="h-12 w-12 rounded-md border border-white/10" style="background:${i.color}"></div>
            <div class="flex-1">
              <div class="flex items-center justify-between">
                <div class="text-[13px] text-white/90">${i.name}</div>
                <div class="text-[13px] text-white/80">${money(line)}</div>
              </div>
              <div class="text-[12px] text-white/60">Size ${i.size} • ${i.printArea} • ${i.method} • Qty ${i.quantity}</div>
              <div class="text-[12px] text-white/40 mt-1">${i.text ? 'Text: ' + i.text : ''} ${i.hasArt ? '• Artwork ✓' : ''}</div>
            </div>
            <button class="h-8 w-8 rounded-md hover:bg-white/5 grid place-items-center shrink-0" data-remove="${i.id}">
              <i data-lucide="trash-2" class="h-4 w-4"></i>
            </button>
          `;
          cartItems.appendChild(row);
        });
        cartSubtotal.textContent = money(subtotal);
        cartCount.textContent = state.cart.reduce((a, b) => a + b.quantity, 0);
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        // remove handlers
        cartItems.querySelectorAll('[data-remove]').forEach(btn => {
          btn.addEventListener('click', () => {
            const id = btn.getAttribute('data-remove');
            state.cart = state.cart.filter(x => x.id !== id);
            renderCart();
          });
        });
      }

      // Send brief to operator (via webhook)
      $('#sendToOperator').addEventListener('click', async () => {
        const payload = composeDesignPayload('design_brief');
        try {
          await sendToWebhook(payload);
          showToast('Brief sent to operator');
        } catch (e) {
          showToast('Failed to send brief');
        }
      });

      function composeDesignPayload(type) {
        return {
          type,
          sessionId: state.sessionId,
          timestamp: new Date().toISOString(),
          product: state.product,
          color: state.color,
          size: state.size,
          printArea: state.printArea,
          method: state.method,
          quantity: state.quantity,
          text: { value: state.text, size: state.textSize, color: state.textColor },
          hasArt: !!state.artDataUrl,
          artDataUrl: state.artDataUrl ? state.artDataUrl : undefined,
          includePreview: false,
        };
      }

      async function sendToWebhook(data) {
        const res = await fetch(webhook, {
          method: 'POST',
          headers: { 'Content-Type': 'application/json' },
          body: JSON.stringify(data),
          mode: 'cors',
        });
        if (!res.ok) throw new Error('Webhook error');
        return res.json().catch(() => ({}));
      }

      // Chat assistant
      const chatWindow = $('#chatWindow');
      const chatForm = $('#chatForm');
      const chatInput = $('#chatInput');
      const chatIncludePreview = $('#chatIncludePreview');

      function appendMsg(role, text) {
        const wrap = document.createElement('div');
        wrap.className = 'flex gap-2 ' + (role === 'user' ? 'justify-end' : '');
        if (role === 'user') {
          wrap.innerHTML = `
            <div class="max-w-[80%] text-[13px] bg-indigo-500/20 border border-indigo-400/20 rounded-md px-3 py-2 text-indigo-100">${escapeHtml(text)}</div>
            <div class="h-6 w-6 rounded-md bg-white/10 grid place-items-center border border-white/10 shrink-0">
              <i data-lucide="user" class="h-3.5 w-3.5"></i>
            </div>
          `;
        } else {
          wrap.innerHTML = `
            <div class="h-6 w-6 rounded-md bg-white/10 grid place-items-center border border-white/10 shrink-0">
              <i data-lucide="bot" class="h-3.5 w-3.5"></i>
            </div>
            <div class="max-w-[80%] text-[13px] bg-white/5 border border-white/10 rounded-md px-3 py-2">${text}</div>
          `;
        }
        chatWindow.appendChild(wrap);
        chatWindow.scrollTop = chatWindow.scrollHeight;
        if (window.lucide) lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const msg = chatInput.value.trim();
        if (!msg) return;
        appendMsg('user', msg);
        chatInput.value = '';

        // Send to webhook
        const payload = composeDesignPayload('chat_message');
        payload.message = msg;
        payload.includePreview = chatIncludePreview.checked;
        try {
          await sendToWebhook(payload);
          appendMsg('assistant', 'Thanks! Your idea has been shared with an operator. I’ll follow up with mockups shortly. You can also book a quick call to finalize details.');
        } catch (err) {
          appendMsg('assistant', 'There was a problem sending your message. Please try again.');
        }
      });

      // Open chat buttons
      $('#openChatBtn').addEventListener('click', () => document.getElementById('customizer').scrollIntoView({ behavior: 'smooth' }));
      $('#heroOpenChat').addEventListener('click', () => document.getElementById('customizer').scrollIntoView({ behavior: 'smooth' }));
      $('#chatFromCustomizer').addEventListener('click', () => document.getElementById('customizer').scrollIntoView({ behavior: 'smooth' }));
      $('#bookInChat').addEventListener('click', () => openAppointment());
      $('#quickAppointment').addEventListener('click', () => openAppointment());

      // Appointment Modal
      const appointmentModal = $('#appointmentModal');
      const openAppointment = () => {
        // preload hidden field
        $('#selectedProductInfo').value = JSON.stringify({
          product: state.product,
          color: state.color,
          size: state.size,
          printArea: state.printArea,
          method: state.method,
          quantity: state.quantity,
          text: { value: state.text, size: state.textSize, color: state.textColor },
          hasArt: !!state.artDataUrl,
        });
        appointmentModal.classList.remove('hidden');
      };
      const closeAppointment = () => appointmentModal.classList.add('hidden');
      $('#openAppointmentBtn').addEventListener('click', openAppointment);
      $('#bookFromCustomizer').addEventListener('click', openAppointment);
      $('#closeAppointment').addEventListener('click', closeAppointment);
      appointmentModal.addEventListener('click', (e) => {
        if (e.target === appointmentModal) closeAppointment();
      });

      // Appointment form -> send to webhook (REQUIRED)
      $('#appointmentForm').addEventListener('submit', async (e) => {
        e.preventDefault();
        const form = e.target;
        const data = Object.fromEntries(new FormData(form).entries());
        const payload = {
          type: 'appointment_request',
          sessionId: state.sessionId,
          timestamp: new Date().toISOString(),
          contact: {
            name: data.name,
            email: data.email,
            phone: data.phone || '',
            datetime: data.datetime,
          },
          notes: data.notes || '',
          selection: JSON.parse(data.selectedProductInfo || '{}'),
        };
        try {
          await sendToWebhook(payload);
          closeAppointment();
          showToast('Appointment requested');
          appendMsg('assistant', 'Appointment request received. We’ll confirm by email soon.');
        } catch (err) {
          showToast('Failed to request appointment');
        }
      });

      // Utility
      function escapeHtml(s) {
        return s.replace(/[&<>"']/g, (m) => ({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#039;'}[m]));
      }

      // Send selected base when clicking catalog Customize
      window.addEventListener('load', () => {
        $('#year').textContent = new Date().getFullYear();
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
      

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-[#0b0d12]/70 bg-[#0b0d12]/80 border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/10 text-white font-semibold tracking-tight">TS</div>
<span className="text-[15px] text-white/90">Threadspace</span>
<span className="ml-3 hidden md:inline-flex text-[13px] text-white/40">Design. Print. Ship.</span>
</div>
<div className="flex-1 max-w-xl mx-6 hidden md:flex">
<div className="relative w-full">
<i className="absolute left-3 top-2.5 h-4 w-4 text-white/40" data-lucide="search"></i>
<input className="w-full bg-white/5 border border-white/10 rounded-md pl-9 pr-3 h-10 text-[13px] placeholder:text-white/40 focus:outline-none focus:ring-2 focus:ring-indigo-500/50 focus:border-indigo-500/20" placeholder="Search T‑shirts, colors, collections…" type="text"/>
</div>
</div>
<nav className="flex items-center gap-2">
<a className="px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-md" href="#catalog">Catalog</a>
<a className="px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-md" href="#customizer">Customizer</a>
<button className="px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-md inline-flex items-center gap-2" id="openChatBtn">
<i className="h-4 w-4" data-lucide="bot"></i> AI Chat
          </button>
<button className="px-3 py-2 text-[13px] text-white/80 hover:text-white hover:bg-white/5 rounded-md inline-flex items-center gap-2" id="openAppointmentBtn">
<i className="h-4 w-4" data-lucide="calendar"></i> Appointment
          </button>
<button className="relative px-2 py-2 text-white/80 hover:text-white hover:bg-white/5 rounded-md" id="cartBtn">
<i className="h-5 w-5" data-lucide="shopping-cart"></i>
<span className="absolute -top-1 -right-1 text-[10px] bg-indigo-500 text-white rounded-full h-4 min-w-[16px] px-1 grid place-items-center border border-indigo-300/20" id="cartCount">0</span>
</button>
</nav>
</div>
</header>

<section className="relative border-b border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-14 md:py-18 grid lg:grid-cols-2 gap-10">
<div>
<div className="inline-flex items-center gap-2 text-[12px] text-indigo-300/90 bg-indigo-500/10 border border-indigo-400/20 rounded-full px-2.5 py-1">
<i className="h-3.5 w-3.5" data-lucide="wand-2"></i>
            Smart design assistant included
          </div>
<h1 className="mt-4 text-4xl md:text-5xl font-semibold tracking-tight text-white">Design‑led T‑shirts, fully customizable</h1>
<p className="mt-3 text-[15px] text-white/70">Pick a base, color, and size. Upload art or describe your idea to the assistant. Our operators perfect your design and ship globally in 72h.</p>
<div className="mt-6 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center gap-2 bg-white text-gray-900 hover:bg-gray-100 rounded-md h-10 px-4 text-[13px] font-medium" href="#customizer">
<i className="h-4 w-4" data-lucide="shirt"></i> Start customizing
            </a>
<button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/15 border border-white/10 rounded-md h-10 px-4 text-[13px] text-white/90" id="heroOpenChat">
<i className="h-4 w-4" data-lucide="message-square"></i> Describe your idea
            </button>
</div>
<div className="mt-6 grid grid-cols-2 sm:grid-cols-3 gap-4 text-[12px] text-white/60">
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-3.5 w-3.5" data-lucide="truck"></i>
</div>
              72h production
            </div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-3.5 w-3.5" data-lucide="leaf"></i>
</div>
              Eco inks
            </div>
<div className="flex items-center gap-2">
<div className="h-6 w-6 rounded-md bg-white/5 border border-white/10 grid place-items-center">
<i className="h-3.5 w-3.5" data-lucide="shield-check"></i>
</div>
              Quality guaranteed
            </div>
</div>
</div>
<div className="relative">
<div className="aspect-[4/3] rounded-xl border border-white/10 bg-gradient-to-br from-white/5 to-white/0 overflow-hidden">
<img alt="T‑shirt display" className="w-full h-full object-cover opacity-90" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-6 right-6 hidden md:block">
<div className="rounded-lg bg-white/5 border border-white/10 backdrop-blur px-4 py-3 text-[12px]">
<div className="text-white/80">Popular: Minimal Crew</div>
<div className="text-white/50">4.9 • 1,248 orders this month</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10" id="catalog">
<div className="flex items-end justify-between gap-4 mb-4">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Catalog</h2>
<p className="text-[13px] text-white/60 mt-1">Select a base to start customizing.</p>
</div>
<div className="flex items-center gap-2">
<select className="bg-white/5 border border-white/10 rounded-md h-10 px-3 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="filterStyle">
<option value="">All styles</option>
<option value="Crew">Crew</option>
<option value="V-Neck">V‑Neck</option>
<option value="Oversized">Oversized</option>
<option value="Long Sleeve">Long Sleeve</option>
</select>
<select className="bg-white/5 border border-white/10 rounded-md h-10 px-3 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="filterFit">
<option value="">All fits</option>
<option value="Unisex">Unisex</option>
<option value="Women">Women</option>
<option value="Youth">Youth</option>
</select>
</div>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6" id="catalogGrid">


<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Unisex" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Minimal Crew" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1542435503-956c469947f6?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">Crew</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Minimal Crew</div>
<div className="text-[12px] text-white/50">$24 — Unisex</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Minimal Crew','Crew','Unisex')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Women" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Soft V‑Neck" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1520975916090-3105956dac38?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">V‑Neck</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Soft V‑Neck</div>
<div className="text-[12px] text-white/50">$26 — Women</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Soft V‑Neck','V-Neck','Women')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Unisex" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Oversized Street" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">Oversized</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Oversized Street</div>
<div className="text-[12px] text-white/50">$28 — Unisex</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Oversized Street','Oversized','Unisex')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Unisex" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Long Sleeve Classic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1581783898377-1c85bf937427?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">Long Sleeve</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Long Sleeve Classic</div>
<div className="text-[12px] text-white/50">$29 — Unisex</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Long Sleeve Classic','Long Sleeve','Unisex')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Youth" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Kids Crew" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">Crew</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Kids Crew</div>
<div className="text-[12px] text-white/50">$19 — Youth</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Kids Crew','Crew','Youth')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>

<div className="group rounded-xl border border-white/10 bg-white/[0.02] hover:bg-white/[0.04] transition-colors overflow-hidden" data-fit="Women" data-style={{}}>
<div className="aspect-[4/3] relative">
<img alt="Premium Crew" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute top-3 left-3 text-[11px] bg-white/10 backdrop-blur border border-white/10 rounded-md px-2 py-1 text-white/80">Crew</div>
</div>
<div className="p-4">
<div className="flex items-center justify-between">
<div>
<div className="text-[15px] text-white/90">Premium Crew</div>
<div className="text-[12px] text-white/50">$32 — Women</div>
</div>
<button className="inline-flex items-center gap-1.5 text-[12px] px-3 h-8 rounded-md bg-white text-gray-900 hover:bg-gray-100" onclick="selectProduct('Premium Crew','Crew','Women')">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Customize
              </button>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-white/5" id="customizer">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-10">
<div className="flex items-end justify-between gap-4 mb-5">
<div>
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight">Design Customizer</h2>
<p className="text-[13px] text-white/60 mt-1">Real‑time preview. Chat with an operator to refine your design.</p>
</div>
<div className="hidden md:flex items-center gap-2">
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white/10 hover:bg-white/15 border border-white/10 text-[13px]" id="bookFromCustomizer">
<i className="h-4 w-4" data-lucide="calendar"></i> Book operator
            </button>
<button className="inline-flex items-center gap-2 h-10 px-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 text-[13px]" id="chatFromCustomizer">
<i className="h-4 w-4" data-lucide="bot"></i> Open chat
            </button>
</div>
</div>
<div className="grid lg:grid-cols-12 gap-6">

<div className="lg:col-span-5 rounded-xl border border-white/10 bg-white/[0.02] p-4">
<div className="text-[12px] text-white/60 mb-3">Live Preview</div>
<div className="aspect-[3/4] rounded-lg bg-white/5 border border-white/10 grid place-items-center overflow-hidden">

<svg className="w-full h-full" id="teeCanvas" viewbox="0 0 300 420">
<defs>
<clippath id="printAreaClip">
<rect height="140" rx="6" width="150" x="75" y="120"></rect>
</clippath>
</defs>

<path d="M75 60 L225 60 C260 60 270 80 285 100 L260 130 L240 110 L240 360 C240 380 225 390 200 395 L100 395 C75 390 60 380 60 360 L60 110 L40 130 L15 100 C30 80 40 60 75 60 Z" fill="#111827" id="teeBody" stroke="rgba(255,255,255,0.08)" strokeWidth="2"></path>

<path d="M110 60 Q150 85 190 60" fill="none" stroke="rgba(255,255,255,0.12)" strokeWidth="3"></path>

<rect fill="rgba(255,255,255,0.04)" height="140" rx="6" stroke="rgba(255,255,255,0.08)" width="150" x="75" y="120"></rect>

<image clipPath="url(#printAreaClip)" height="140" href="" id="artImage" preserveaspectratio="xMidYMid meet" style={{display: 'none'}} width="150" x="75" y="120"/>

<g clipPath="url(#printAreaClip)" id="textGroup">
<text fill="#ffffff" fontFamily="Inter, system-ui, sans-serif" fontSize="28" id="designText" text-anchor="middle" x="150" y="190">Your Text</text>
</g>
</svg>
</div>
<div className="mt-3 text-[12px] text-white/50">Tip: Upload art or just tell the assistant what you want—our operator will finalize the print‑ready file.</div>
</div>

<div className="lg:col-span-4 rounded-xl border border-white/10 bg-white/[0.02]">
<div className="p-4 border-b border-white/10">
<div className="flex items-center justify-between">
<div>
<div className="text-[13px] text-white/60">Selected Base</div>
<div className="text-[15px] text-white/90" id="selectedProduct">Minimal Crew</div>
</div>
<div className="text-right">
<div className="text-[13px] text-white/60">Price</div>
<div className="text-[15px] text-white/90" id="priceLabel">$24</div>
</div>
</div>
</div>
<div className="p-4 space-y-4">

<div>
<div className="text-[12px] text-white/60 mb-2">Color</div>
<div className="flex flex-wrap gap-2" id="colorSwatches">

<button aria-label="Black" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#111827" style={{background: '#111827'}}></button>
<button aria-label="Charcoal" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#1f2937" style={{background: '#1f2937'}}></button>
<button aria-label="Slate" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#374151" style={{background: '#374151'}}></button>
<button aria-label="Gray" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#6b7280" style={{background: '#6b7280'}}></button>
<button aria-label="Red" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#ef4444" style={{background: '#ef4444'}}></button>
<button aria-label="Green" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#22c55e" style={{background: '#22c55e'}}></button>
<button aria-label="Blue" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#3b82f6" style={{background: '#3b82f6'}}></button>
<button aria-label="Amber" className="color-swatch h-7 w-7 rounded-full border-2 border-white/20 ring-2 ring-white/0 hover:ring-white/20" data-color="#f59e0b" style={{background: '#f59e0b'}}></button>
<button aria-label="White" className="color-swatch h-7 w-7 rounded-full border-2 border-white/40 ring-2 ring-white/0 hover:ring-white/20" data-color="#ffffff" style={{background: '#ffffff'}}></button>
</div>
</div>

<div>
<div className="text-[12px] text-white/60 mb-2">Size</div>
<div className="flex flex-wrap gap-2" id="sizeSelect">
<button className="size-btn h-9 px-3 rounded-md bg-white/5 border border-white/10 text-[13px] hover:bg-white/10" data-size="XS">XS</button>
<button className="size-btn h-9 px-3 rounded-md bg-white/5 border border-white/10 text-[13px] hover:bg-white/10" data-size="S">S</button>
<button className="size-btn h-9 px-3 rounded-md bg-white/5 border border-white/10 text-[13px] hover:bg-white/10" data-size="M">M</button>
<button className="size-btn h-9 px-3 rounded-md bg-white/5 border border-white/10 text-[13px] hover:bg-white/10" data-size="L">L</button>
<button className="size-btn h-9 px-3 rounded-md bg-white/5 border border-white/10 text-[13px] hover:bg-white/10" data-size="XL">XL</button>
</div>
</div>

<div className="grid grid-cols-2 gap-3">
<div>
<div className="text-[12px] text-white/60 mb-2">Print area</div>
<select className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="printArea">
<option value="Front">Front</option>
<option value="Back">Back</option>
<option value="Pocket">Pocket</option>
</select>
</div>
<div>
<div className="text-[12px] text-white/60 mb-2">Method</div>
<select className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="printMethod">
<option value="DTG">DTG</option>
<option value="Screen">Screen</option>
<option value="DTF">DTF</option>
<option value="Embroidery">Embroidery</option>
</select>
</div>
</div>

<div className="rounded-lg border border-white/10 p-3">
<div className="flex items-center gap-2 text-[12px] text-white/70 mb-2">
<i className="h-4 w-4" data-lucide="type"></i> Add text
                </div>
<input className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="textInput" type="text" value="Your Text"/>
<div className="mt-3 flex items-center gap-3">
<label className="text-[12px] text-white/60 min-w-[72px]">Size</label>
<input className="w-full accent-indigo-500" id="textSize" max="48" min="14" type="range" value="28"/>
<span className="text-[12px] text-white/60 w-8 text-right" id="textSizeLabel">28</span>
</div>
<div className="mt-3">
<div className="text-[12px] text-white/60 mb-1">Text color</div>
<div className="flex gap-2" id="textColorSwatches">
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#ffffff" style={{background: '#ffffff'}}></button>
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#000000" style={{background: '#000000'}}></button>
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#22c55e" style={{background: '#22c55e'}}></button>
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#3b82f6" style={{background: '#3b82f6'}}></button>
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#ef4444" style={{background: '#ef4444'}}></button>
<button className="h-6 w-6 rounded-full border border-white/20" data-tcolor="#f59e0b" style={{background: '#f59e0b'}}></button>
</div>
</div>
</div>

<div className="rounded-lg border border-white/10 p-3">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px] text-white/70">
<i className="h-4 w-4" data-lucide="upload"></i> Upload artwork (PNG/SVG)
                  </div>
<button className="text-[12px] text-white/60 hover:text-white/80" id="clearArt">Clear</button>
</div>
<label className="mt-2 block cursor-pointer rounded-md bg-white/5 hover:bg-white/10 border border-dashed border-white/15 px-4 py-3 text-[12px] text-white/60" htmlFor="artInput">
                  Click to upload or drop file here
                  <input accept=".png,.svg,.jpg,.jpeg" className="hidden" id="artInput" type="file"/>
</label>
</div>

<div className="flex items-center justify-between">
<div className="text-[12px] text-white/60">Quantity</div>
<div className="flex items-center bg-white/5 border border-white/10 rounded-md">
<button className="h-9 w-9 grid place-items-center hover:bg-white/10 border-r border-white/10" id="qtyDec">
<i className="h-4 w-4" data-lucide="minus"></i>
</button>
<input className="w-12 text-center bg-transparent text-[13px] focus:outline-none" id="qtyInput" min="1" type="number" value="1"/>
<button className="h-9 w-9 grid place-items-center hover:bg-white/10 border-l border-white/10" id="qtyInc">
<i className="h-4 w-4" data-lucide="plus"></i>
</button>
</div>
</div>

<div className="flex flex-wrap gap-2 pt-2">
<button className="flex-1 inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 text-[13px]" id="addToCart">
<i className="h-4 w-4" data-lucide="shopping-bag"></i> Add to cart
                </button>
<button className="inline-flex items-center justify-center gap-2 h-10 px-3 rounded-md bg-indigo-500/20 hover:bg-indigo-500/30 border border-indigo-400/20 text-[13px] text-indigo-200" id="sendToOperator">
<i className="h-4 w-4" data-lucide="send"></i> Send brief
                </button>
</div>
</div>
</div>

<div className="lg:col-span-3 rounded-xl border border-white/10 bg-white/[0.02] flex flex-col">
<div className="p-4 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-md bg-white/10 grid place-items-center border border-white/10">
<i className="h-3.5 w-3.5" data-lucide="bot"></i>
</div>
<div>
<div className="text-[13px] text-white/80">Design Assistant</div>
<div className="text-[11px] text-white/50">Operator‑powered</div>
</div>
</div>
<button className="text-[12px] text-indigo-300 hover:text-indigo-200 inline-flex items-center gap-1" id="bookInChat">
<i className="h-3.5 w-3.5" data-lucide="calendar"></i> Book
              </button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="chatWindow">
<div className="text-[12px] text-white/60">Tell us what you want—style, vibe, colors, placement. Files welcome.</div>
<div className="flex gap-2">
<div className="h-6 w-6 rounded-md bg-white/10 grid place-items-center border border-white/10 shrink-0">
<i className="h-3.5 w-3.5" data-lucide="bot"></i>
</div>
<div className="max-w-[80%] text-[13px] bg-white/5 border border-white/10 rounded-md px-3 py-2">Hi! Share your idea and I’ll prepare a print‑ready concept. You can also book a quick call.</div>
</div>
</div>
<form className="p-3 border-t border-white/10" id="chatForm">
<div className="flex items-end gap-2">
<textarea className="flex-1 resize-none bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[13px] text-white/80 focus:outline-none focus:ring-2 focus:ring-indigo-500/40" id="chatInput" placeholder="Describe your design idea…" rows="1"></textarea>
<button className="h-10 px-3 rounded-md bg-white text-gray-900 hover:bg-gray-100 inline-flex items-center gap-1.5 text-[13px]" type="submit">
<i className="h-4 w-4" data-lucide="send"></i> Send
                </button>
</div>
<div className="flex items-center gap-3 mt-2">
<label className="text-[12px] text-white/60 cursor-pointer hover:text-white/80 inline-flex items-center gap-1">
<input className="accent-indigo-500" id="chatIncludePreview" type="checkbox"/> include preview
                </label>
<button className="text-[12px] text-white/70 hover:text-white/90 inline-flex items-center gap-1" id="quickAppointment" type="button">
<i className="h-3.5 w-3.5" data-lucide="phone"></i> Request call
                </button>
</div>
</form>
</div>
</div>
</div>
</section>

<div className="fixed inset-y-0 right-0 w-full max-w-md bg-[#0b0d12] border-l border-white/10 transform translate-x-full transition-transform duration-300 z-50 flex flex-col" id="cartDrawer">
<div className="h-16 px-4 border-b border-white/10 flex items-center justify-between">
<div className="text-[15px] text-white/90">Your Cart</div>
<button className="h-9 w-9 grid place-items-center rounded-md hover:bg-white/5" id="closeCart">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto p-4 space-y-3" id="cartItems"></div>
<div className="border-t border-white/10 p-4">
<div className="flex items-center justify-between text-[13px] mb-3">
<span className="text-white/60">Subtotal</span>
<span className="text-white/90" id="cartSubtotal">$0</span>
</div>
<button className="w-full h-11 rounded-md bg-white text-gray-900 hover:bg-gray-100 text-[13px]">Checkout</button>
</div>
</div>

<div className="fixed inset-0 z-50 hidden" id="appointmentModal">
<div className="absolute inset-0 bg-black/60"></div>
<div className="relative max-w-lg mx-auto mt-16 bg-[#0b0d12] border border-white/10 rounded-xl overflow-hidden">
<div className="h-14 px-4 border-b border-white/10 flex items-center justify-between">
<div className="text-[15px] text-white/90">Book an Operator</div>
<button className="h-9 w-9 grid place-items-center rounded-md hover:bg-white/5" id="closeAppointment">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<form className="p-4 grid grid-cols-1 gap-3" id="appointmentForm">
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-white/60 mb-1">Name</label>
<input className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none" name="name" required=""/>
</div>
<div>
<label className="block text-[12px] text-white/60 mb-1">Email</label>
<input className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none" name="email" required="" type="email"/>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-3">
<div>
<label className="block text-[12px] text-white/60 mb-1">Phone</label>
<input className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none" name="phone"/>
</div>
<div>
<label className="block text-[12px] text-white/60 mb-1">Preferred time</label>
<input className="w-full h-10 bg-white/5 border border-white/10 rounded-md px-3 text-[13px] text-white/80 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none" name="datetime" required="" type="datetime-local"/>
</div>
</div>
<div>
<label className="block text-[12px] text-white/60 mb-1">Notes</label>
<textarea className="w-full bg-white/5 border border-white/10 rounded-md px-3 py-2 text-[13px] text-white/80 focus:ring-2 focus:ring-indigo-500/40 focus:outline-none" name="notes" placeholder="Describe your design, brand guidelines, deadlines…" rows="3"></textarea>
</div>
<input id="selectedProductInfo" name="selectedProductInfo" type="hidden"/>
<button className="h-11 rounded-md bg-white text-gray-900 hover:bg-gray-100 text-[13px] inline-flex items-center justify-center gap-2" type="submit">
<i className="h-4 w-4" data-lucide="calendar-check"></i> Request appointment
          </button>
<div className="text-[12px] text-white/50">We’ll confirm by email and share a design board before the call.</div>
</form>
</div>
</div>

<div className="fixed bottom-4 left-1/2 -translate-x-1/2 z-50 hidden" id="toast">
<div className="rounded-md bg-white text-gray-900 border border-white/50 shadow-lg px-3 py-2 text-[13px]" id="toastMsg">Saved</div>
</div>

<footer className="border-t border-white/5">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 grid sm:grid-cols-3 gap-6">
<div>
<div className="h-8 w-8 grid place-items-center rounded-md bg-white/10 text-white font-semibold tracking-tight">TS</div>
<p className="mt-3 text-[13px] text-white/60">Premium custom tees with operator‑backed design assistance.</p>
</div>
<div className="text-[13px] text-white/60">
<div className="text-white/80 mb-2">Contact</div>
<a className="flex items-center gap-2 hover:text-white/80" href="mailto:hsdevloper33@gmail.com">
<i className="h-4 w-4" data-lucide="mail"></i> hsdevloper33@gmail.com
          </a>
<a className="flex items-center gap-2 mt-1 hover:text-white/80" href="https://wa.me/6002573867" rel="noopener" target="_blank">
<i className="h-4 w-4" data-lucide="message-circle"></i> WhatsApp: 6002573867
          </a>
<a className="flex items-center gap-2 mt-1 hover:text-white/80" href="https://instagram.com/believeme_t_shirt" rel="noopener" target="_blank">
<i className="h-4 w-4" data-lucide="instagram"></i> @believeme_t_shirt
          </a>
</div>
<div className="text-[13px] text-white/60">
<div className="text-white/80 mb-2">Help</div>
<div>Shipping &amp; returns</div>
<div>Care instructions</div>
<div>Brand partnerships</div>
</div>
</div>
<div className="border-t border-white/5 text-[12px] text-white/50 py-4 text-center">© <span id="year"></span> Threadspace</div>
</footer>


    </>
  );
}
