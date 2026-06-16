import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
(function() {
if (window.__auraPreviewPerformanceController) return;
const nativeRequestAnimationFrame = window.requestAnimationFrame
? window.requestAnimationFrame.bind(window)
: function(callback) { return window.setTimeout(function() { callback(Date.now()); }, 16); };
const nativeCancelAnimationFrame = window.cancelAnimationFrame
? window.cancelAnimationFrame.bind(window)
: window.clearTimeout.bind(window);
const nativeSetInterval = window.setInterval.bind(window);
let paused = false;
let nextFrameId = 1;
const frameRecords = new Map();
const pausedFrameCallbacks = new Map();
const style = document.createElement('style');
style.id = 'aura-preview-performance-style';
style.textContent = [
'html[data-aura-preview-paused="true"] *,',
'html[data-aura-preview-paused="true"] *::before,',
'html[data-aura-preview-paused="true"] *::after {',
'  animation-play-state: paused !important;',
'  transition-duration: 0s !important;',
'  scroll-behavior: auto !important;',
'}'
].join('\n');
document.head.appendChild(style);
window.requestAnimationFrame = function(callback) {
const frameId = nextFrameId++;
if (paused) {
pausedFrameCallbacks.set(frameId, callback);
frameRecords.set(frameId, { paused: true });
return frameId;
}
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
return frameId;
};
window.cancelAnimationFrame = function(frameId) {
const record = frameRecords.get(frameId);
pausedFrameCallbacks.delete(frameId);
if (record && typeof record.nativeFrameId !== 'undefined') {
nativeCancelAnimationFrame(record.nativeFrameId);
}
frameRecords.delete(frameId);
};
window.setInterval = function(callback, delay) {
const args = Array.prototype.slice.call(arguments, 2);
return nativeSetInterval(function() {
if (paused) return;
callback.apply(this, args);
}, delay);
};
const flushPausedFrames = function() {
const callbacks = Array.from(pausedFrameCallbacks.entries());
pausedFrameCallbacks.clear();
callbacks.forEach(function(entry) {
const frameId = entry[0];
const callback = entry[1];
const nativeFrameId = nativeRequestAnimationFrame(function(timestamp) {
frameRecords.delete(frameId);
callback(timestamp);
});
frameRecords.set(frameId, { nativeFrameId: nativeFrameId });
});
};
const setPaused = function(nextPaused) {
const shouldPause = Boolean(nextPaused);
if (paused === shouldPause) return;
paused = shouldPause;
document.documentElement.toggleAttribute('data-aura-preview-paused', paused);
if (!paused) {
flushPausedFrames();
}
};
window.__auraPreviewPerformanceController = {
setPaused: setPaused,
get paused() {
return paused;
}
};
window.addEventListener('message', function(event) {
if (event.source !== window.parent) return;
if (!event.data || event.data.type !== 'aura-preview-performance-mode') return;
setPaused(event.data.paused);
});
})();



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      const MENU = {
        casa: [
          { id:'c1', name:'La Moto',                desc:'Mortadel·la, burrata, pesto de rúcula, orenga',                           price:16 },
          { id:'c2', name:'El Telèfon Vermell',      desc:'Salami picant, mel de romaní, gorgonzola, nous',                          price:15 },
          { id:'c3', name:'La Bèstia de Matadepera', desc:'Botifarra, ceba caramel·litzada, salsa romesco, mozzarella',              price:17 },
          { id:'c4', name:"L'Avi Fresc",             desc:"Pernil ibèric, rúcula, parmesà, tàperes, filet de llimona",              price:16 },
          { id:'c5', name:'La Cremosa',              desc:'Mascarpone, bolets de temporada, tòfona negra',                          price:15 },
        ],
        classics: [
          { id:'cl1', name:'Margherita',       desc:'Tomàquet San Marzano, mozzarella fior di latte, alfàbrega fresca',             price:11 },
          { id:'cl2', name:'Marinara',         desc:"Tomàquet, all, orenga, oli d'oliva verge extra",                               price:9  },
          { id:'cl3', name:'Napolitana',       desc:'Tomàquet, mozzarella, anxoves, tàperes, olives negres',                        price:13 },
          { id:'cl4', name:'Quatre formatges', desc:'Mozzarella, gorgonzola, parmesà, provolone, mel',                             price:14 },
          { id:'cl5', name:'Calzone',          desc:'Ricotta, mozzarella, pernil dolç, alfàbrega',                                  price:13 },
        ],
        drinks: [
          { id:'d1', name:'Aigua mineral',     desc:'50 cl',                             price:2   },
          { id:'d2', name:'Refresc',           desc:'Coca-Cola, Fanta, Sprite · 33 cl',  price:2.5 },
          { id:'d3', name:'Cervesa artesana',  desc:'Producció local · 33 cl',           price:4   },
          { id:'d4', name:'Tiramisú casolà',   desc:'Fet a la cuina cada dia',           price:5   },
        ],
      };
      const DELIVERY_FEE = 2.50;
      let cart = [];
      let orderAllergies = '';

      function fmt(n) { return '€' + n.toFixed(2); }
      function fmtComma(n) {
        return '€' + n.toFixed(2).replace('.', ',');
      }
      function subtotal() { return cart.reduce((s, i) => s + i.price * i.qty, 0); }
      function total() { return cart.length ? subtotal() + DELIVERY_FEE : 0; }
      function totalCount() { return cart.reduce((s, i) => s + i.qty, 0); }

      function getCartItem(id) { return cart.find(i => i.id === id); }

      function menuRow(item, last) {
        const safeName = item.name.replace(/'/g,"\\'");
        return `
          <div class="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 ${last ? '' : 'border-b border-[#C4B08A]/20'} group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="${item.id}">
            <div class="flex-1 min-w-0 pr-4">
              <span class="font-medium text-base text-[#2A1A0F] block mb-0.5">${item.name}</span>
              <span class="block text-xs font-light text-[#5A3E28] leading-relaxed">${item.desc}</span>
            </div>
            <div class="flex items-center gap-4 shrink-0">
              <span class="font-normal text-sm text-[#2A1A0F]">€${item.price.toFixed(2)}</span>
              <div class="flex flex-col items-end">
                <div class="relative" data-ctrl-wrap="${item.id}">
                  <button type="button" data-btn-add="${item.id}" class="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" onclick="addToCartSilent('${item.id}','${safeName}',${item.price})">Afegir</button>
                  <div data-counter="${item.id}" class="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1">
                    <button type="button" aria-label="Treure una unitat" class="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('${item.id}',-1)">
                      <iconify-icon icon="solar:minus-linear" width="18" style="stroke-width:1.5;"></iconify-icon>
                    </button>
                    <span data-qty="${item.id}" class="w-4 text-center text-xs font-medium text-[#2A1A0F]">1</span>
                    <button type="button" aria-label="Afegir una unitat" class="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('${item.id}',1)">
                      <iconify-icon icon="solar:add-linear" width="18" style="stroke-width:1.5;"></iconify-icon>
                    </button>
                  </div>
                </div>
                <button type="button" data-note-link="${item.id}" class="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" onclick="togglePizzaNote('${item.id}')">✎ Afegir nota</button>
              </div>
            </div>
            <div data-note-panel="${item.id}" class="hidden w-full sm:w-auto sm:ml-auto sm:pl-4">
              <textarea data-note-ta="${item.id}" rows="2" placeholder="Modificacions o ingredients a retirar..." class="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" oninput="setPizzaNote('${item.id}', this.value)"></textarea>
            </div>
          </div>`;
      }

      function renderSection(id, items) {
        document.getElementById(id).innerHTML = items.map((it, i) => menuRow(it, i === items.length - 1)).join('');
      }
      renderSection('menu-casa', MENU.casa);
      renderSection('menu-classics', MENU.classics);
      renderSection('menu-drinks', MENU.drinks);

      function microPop(el) {
        if (!el) return;
        el.classList.remove('scale-100');
        el.classList.add('scale-[1.03]');
        setTimeout(() => el.classList.remove('scale-[1.03]'), 180);
      }

      function badgePulse() {
        const badge = document.getElementById('cart-badge');
        if (!badge || badge.classList.contains('hidden')) return;
        badge.animate([
          { transform: 'scale(1)' },
          { transform: 'scale(1.25)' },
          { transform: 'scale(1)' }
        ], { duration: 260, easing: 'cubic-bezier(0.16,1,0.3,1)' });
      }

      function syncMenuRow(id) {
        const it = getCartItem(id);
        const addBtn = document.querySelector(`[data-btn-add="${id}"]`);
        const counter = document.querySelector(`[data-counter="${id}"]`);
        const qtyEl = document.querySelector(`[data-qty="${id}"]`);
        const noteLink = document.querySelector(`[data-note-link="${id}"]`);
        const notePanel = document.querySelector(`[data-note-panel="${id}"]`);
        const noteTa = document.querySelector(`[data-note-ta="${id}"]`);

        if (!addBtn || !counter || !qtyEl || !noteLink) return;

        if (it && it.qty > 0) {
          addBtn.classList.add('hidden');
          counter.classList.remove('hidden');
          counter.classList.add('flex');
          qtyEl.textContent = it.qty;
          noteLink.classList.remove('hidden');
          if (noteTa) noteTa.value = it.note || '';
        } else {
          addBtn.classList.remove('hidden');
          counter.classList.add('hidden');
          counter.classList.remove('flex');
          noteLink.classList.add('hidden');
          if (notePanel) notePanel.classList.add('hidden');
        }
      }

      function addToCartSilent(id, name, price) {
        const ex = cart.find(i => i.id === id);
        if (ex) ex.qty++; else cart.push({ id, name, price, qty: 1, note: '' });

        // subtle feedback on the control wrapper
        const wrap = document.querySelector(`[data-ctrl-wrap="${id}"]`);
        if (wrap) wrap.animate([
          { transform: 'translateY(0px)' },
          { transform: 'translateY(-2px)' },
          { transform: 'translateY(0px)' }
        ], { duration: 220, easing: 'cubic-bezier(0.16,1,0.3,1)' });

        renderCart(false);
        syncMenuRow(id);
      }

      function changeQtySilent(id, delta) {
        const it = cart.find(i => i.id === id);
        if (!it) return;
        it.qty = Math.max(0, it.qty + delta);
        if (it.qty === 0) cart = cart.filter(i => i.id !== id);
        renderCart(false);
        syncMenuRow(id);
      }

      function togglePizzaNote(id) {
        const panel = document.querySelector(`[data-note-panel="${id}"]`);
        if (!panel) return;
        const isHidden = panel.classList.contains('hidden');
        if (isHidden) {
          panel.classList.remove('hidden');
          const ta = panel.querySelector('textarea');
          setTimeout(() => ta && ta.focus(), 20);
        } else {
          panel.classList.add('hidden');
        }
      }

      function setPizzaNote(id, val) {
        const it = cart.find(i => i.id === id);
        if (!it) return;
        it.note = val;
        // keep cart UI in sync if open
        const ta = document.querySelector(`[data-cart-note="${id}"]`);
        if (ta && ta.value !== val) ta.value = val;
      }

      function updateMobileCartBar() {
        const bar = document.getElementById('mobile-cart-bar');
        const summary = document.getElementById('mcb-summary');
        if (!bar || !summary) return;

        const count = totalCount();
        if (count <= 0) {
          bar.classList.add('translate-y-24', 'opacity-0', 'pointer-events-none');
          bar.classList.remove('translate-y-0', 'opacity-100');
          return;
        }

        const label = count === 1 ? '1 pizza' : `${count} pizzes`;
        summary.textContent = `${label} · ${fmtComma(total())}`;

        const wasHidden = bar.classList.contains('opacity-0');
        bar.classList.remove('translate-y-24', 'opacity-0', 'pointer-events-none');
        bar.classList.add('translate-y-0', 'opacity-100');
        if (wasHidden) {
          // tiny slide-up emphasis
          bar.animate([
            { transform: 'translateY(24px)', opacity: 0 },
            { transform: 'translateY(0px)', opacity: 1 }
          ], { duration: 380, easing: 'cubic-bezier(0.16,1,0.3,1)' });
        }
      }

      function renderCart(openDrawer = false) {
        const count = totalCount();
        const badge = document.getElementById('cart-badge');
        if (count > 0) {
          badge.textContent = count;
          badge.classList.remove('hidden');
          badgePulse();
        } else {
          badge.classList.add('hidden');
        }

        updateMobileCartBar();

        const empty = document.getElementById('cart-empty');
        const items = document.getElementById('cart-items');
        const footer = document.getElementById('cart-footer');

        if (cart.length === 0) {
          empty.classList.remove('hidden');
          items.classList.add('hidden');
          footer.classList.add('hidden');
          if (items) items.innerHTML = '';
          if (document.getElementById('subtotal-val')) document.getElementById('subtotal-val').textContent = fmt(0);
          if (document.getElementById('total-val')) document.getElementById('total-val').textContent = fmt(0);
          return;
        }

        empty.classList.add('hidden');
        items.classList.remove('hidden');
        footer.classList.remove('hidden');

        items.innerHTML = cart.map(it => `
          <div class="p-4 rounded-xl border border-[#C4B08A]/30 bg-[#E6D5B0]/20">
            <div class="flex items-start gap-3">
              <div class="flex-1 min-w-0">
                <p class="text-sm font-medium text-[#2A1A0F] truncate">${it.name}</p>
                <p class="text-xs text-[#5A3E28]">${fmt(it.price)} u.</p>
              </div>
              <div class="flex items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1 shrink-0">
                <button class="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('${it.id}',-1)">
                  <iconify-icon icon="solar:minus-linear" style="stroke-width:1.5;"></iconify-icon>
                </button>
                <span class="w-5 text-center text-xs font-medium text-[#2A1A0F]">${it.qty}</span>
                <button class="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('${it.id}',1)">
                  <iconify-icon icon="solar:add-linear" style="stroke-width:1.5;"></iconify-icon>
                </button>
              </div>
              <span class="w-14 text-right text-sm font-medium text-[#E23F2E] shrink-0">${fmt(it.price * it.qty)}</span>
            </div>
            <div class="mt-3">
              <label class="block text-[11px] font-medium text-[#5A3E28] mb-1">Nota (opcional)</label>
              <textarea data-cart-note="${it.id}" rows="2" placeholder="Modificacions o ingredients a retirar..." class="w-full bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" oninput="setPizzaNote('${it.id}', this.value)">${(it.note || '').replace(/</g,'&lt;').replace(/>/g,'&gt;')}</textarea>
            </div>
          </div>`).join('');

        document.getElementById('subtotal-val').textContent = fmt(subtotal());
        document.getElementById('total-val').textContent = fmt(total());

        if (openDrawer) openCartDrawer();
      }

      function openCartDrawer() {
        document.getElementById('cart-drawer').classList.remove('translate-x-full');
        document.getElementById('cart-drawer').classList.add('translate-x-0');
        const overlay = document.getElementById('cart-overlay');
        overlay.classList.remove('hidden');
        setTimeout(() => overlay.classList.remove('opacity-0', 'pointer-events-none'), 10);
        document.body.style.overflow = 'hidden';
      }
      function closeCartDrawer() {
        document.getElementById('cart-drawer').classList.add('translate-x-full');
        document.getElementById('cart-drawer').classList.remove('translate-x-0');
        const overlay = document.getElementById('cart-overlay');
        overlay.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => overlay.classList.add('hidden'), 300);
        document.body.style.overflow = '';
      }

      let curStep = 1; let payMethod = null;

      function openCheckout() {
        closeCartDrawer(); curStep = 1; payMethod = null; showStep(1);
        const m = document.getElementById('checkout-modal');
        m.classList.remove('hidden');
        setTimeout(() => m.classList.remove('opacity-0', 'pointer-events-none'), 10);
        document.body.style.overflow = 'hidden';
      }
      function closeCheckout() {
        const m = document.getElementById('checkout-modal');
        m.classList.add('opacity-0', 'pointer-events-none');
        setTimeout(() => m.classList.add('hidden'), 300);
        document.body.style.overflow = '';
      }

      function showStep(n) {
        ['step-1','step-2','step-3','step-success'].forEach(id => document.getElementById(id).classList.add('hidden'));
        const key = (n === 'success') ? 'step-success' : 'step-' + n;
        document.getElementById(key).classList.remove('hidden');

        const ind = document.getElementById('step-indicator');
        if (n === 'success') { ind.classList.add('hidden'); return; }
        ind.classList.remove('hidden');

        [1,2,3].forEach(s => {
          const dot = document.getElementById('sdot-' + s);
          if (s < n) {
            dot.className = 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 bg-[#C4B08A]/20 text-[#2A1A0F]';
            dot.textContent = '✓';
          } else if (s === n) {
            dot.className = 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 bg-[#E23F2E] text-[#F2E6CE] shadow-sm';
            dot.textContent = s;
          } else {
            dot.className = 'w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300 bg-transparent text-[#C4B08A] border border-[#C4B08A]/50';
            dot.textContent = s;
          }
        });
      }

      function goStep(n) {
        if (n === 2) {
          const name = document.getElementById('f-name').value.trim();
          const phone = document.getElementById('f-phone').value.trim();
          const addr = document.getElementById('f-address').value.trim();
          const err = document.getElementById('err-1');
          if (!name || !phone || !addr) { err.classList.remove('hidden'); return; }
          err.classList.add('hidden');
        }
        if (n === 3) {
          const err = document.getElementById('err-2');
          if (!payMethod) { err.classList.remove('hidden'); return; }
          if (payMethod === 'delivery' && !document.querySelector('input[name="dlv"]:checked')) {
            err.classList.remove('hidden'); return;
          }
          err.classList.add('hidden');
          fillConfirm();
        }
        curStep = n; showStep(n);
      }

      function selPay(method) {
        payMethod = method;

        const ro = document.getElementById('radio-online');
        const rd = document.getElementById('radio-delivery');
        const roDot = document.getElementById('radio-online-dot');
        const rdDot = document.getElementById('radio-delivery-dot');

        if(method === 'online') {
          ro.classList.replace('border-[#C4B08A]', 'border-[#E23F2E]');
          ro.classList.add('bg-[#E23F2E]');
          roDot.classList.remove('opacity-0');

          rd.classList.replace('border-[#E23F2E]', 'border-[#C4B08A]');
          rd.classList.remove('bg-[#E23F2E]');
          rdDot.classList.add('opacity-0');

          document.getElementById('opt-online').classList.add('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');
          document.getElementById('opt-delivery').classList.remove('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');

          document.getElementById('card-ui').classList.remove('hidden');
          document.getElementById('delivery-sub').classList.remove('flex');
          document.getElementById('delivery-sub').classList.add('hidden');
        } else {
          rd.classList.replace('border-[#C4B08A]', 'border-[#E23F2E]');
          rd.classList.add('bg-[#E23F2E]');
          rdDot.classList.remove('opacity-0');

          ro.classList.replace('border-[#E23F2E]', 'border-[#C4B08A]');
          ro.classList.remove('bg-[#E23F2E]');
          roDot.classList.add('opacity-0');

          document.getElementById('opt-delivery').classList.add('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');
          document.getElementById('opt-online').classList.remove('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');

          document.getElementById('delivery-sub').classList.remove('hidden');
          document.getElementById('delivery-sub').classList.add('flex');
          document.getElementById('card-ui').classList.add('hidden');
        }
        document.getElementById('err-2').classList.add('hidden');
      }

      function fillConfirm() {
        const g = id => document.getElementById(id).value.trim();
        const name = g('f-name'), phone = g('f-phone'), addr = g('f-address'), floor = g('f-floor'), zip = g('f-zip'), notes = g('f-notes');

        const allergiesVal = (document.getElementById('order-allergies') && document.getElementById('order-allergies').value.trim()) || orderAllergies || '';

        document.getElementById('conf-items').innerHTML = [
          ...cart.map(it => {
            const noteLine = (it.note && it.note.trim()) ? `<div class="text-xs text-[#9B8A72] mt-0.5">Nota: ${it.note.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div>` : '';
            return `<div class="flex justify-between"><span>${it.name} × ${it.qty}</span><span class="font-medium">${fmt(it.price * it.qty)}</span></div>${noteLine}`;
          }),
          `<div class="flex justify-between pt-2 mt-2 border-t border-[#C4B08A]/30 text-xs text-[#5A3E28]"><span>Lliurament</span><span>${fmt(DELIVERY_FEE)}</span></div>`,
          allergiesVal ? `<div class="pt-2 mt-2 border-t border-[#C4B08A]/30"><div class="text-xs uppercase tracking-widest font-normal mb-1 text-[#5A3E28]">Al·lèrgies / intoleràncies</div><div class="text-xs text-[#9B8A72]">${allergiesVal.replace(/</g,'&lt;').replace(/>/g,'&gt;')}</div></div>` : ''
        ].join('');

        document.getElementById('conf-address').innerHTML = `<strong class="font-medium text-[#2A1A0F]">${name}</strong> · ${phone}<br>${addr}${floor ? ', ' + floor : ''}<br>${zip || '08230'} Matadepera${notes ? '<br><em class="text-[#9B8A72] text-xs mt-1 block">' + notes + '</em>' : ''}`;

        let payTxt = '';
        if (payMethod === 'online') payTxt = '💳 Targeta (pagament online)';
        else {
          const m = document.querySelector('input[name="dlv"]:checked');
          payTxt = m && m.value === 'cash' ? '💵 Efectiu a l\'entrega' : '💳 Targeta / datàfon a l\'entrega';
        }
        document.getElementById('conf-pay').textContent = payTxt;
        document.getElementById('conf-total').textContent = fmt(total());
      }

      function placeOrder() {
        const btn = document.getElementById('btn-place');
        btn.textContent = 'Processant...'; btn.disabled = true;
        setTimeout(() => {
          showStep('success'); btn.textContent = 'Confirma ✓'; btn.disabled = false;
        }, payMethod === 'online' ? 1600 : 900);
      }

      function resetCart() {
        cart = []; renderCart(false); payMethod = null; curStep = 1;
        orderAllergies = '';
        const oa = document.getElementById('order-allergies'); if (oa) oa.value = '';

        ['f-name','f-phone','f-address','f-floor','f-zip','f-notes','f-card','f-exp','f-cvv'].forEach(id => {
          const el = document.getElementById(id); if (el) el.value = '';
        });
        document.querySelectorAll('input[name="dlv"]').forEach(r => r.checked = false);

        document.getElementById('opt-online').classList.remove('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');
        document.getElementById('opt-delivery').classList.remove('border-[#E23F2E]/50', 'bg-[#E23F2E]/5');
        document.getElementById('card-ui').classList.add('hidden');
        document.getElementById('delivery-sub').classList.remove('flex');
        document.getElementById('delivery-sub').classList.add('hidden');

        const ro = document.getElementById('radio-online'); const rd = document.getElementById('radio-delivery');
        ro.classList.replace('border-[#E23F2E]', 'border-[#C4B08A]'); ro.classList.remove('bg-[#E23F2E]');
        document.getElementById('radio-online-dot').classList.add('opacity-0');
        rd.classList.replace('border-[#E23F2E]', 'border-[#C4B08A]'); rd.classList.remove('bg-[#E23F2E]');
        document.getElementById('radio-delivery-dot').classList.add('opacity-0');

        // reset menu rows
        [...MENU.casa, ...MENU.classics, ...MENU.drinks].forEach(it => syncMenuRow(it.id));
      }

      function fmtCard(el) { el.value = el.value.replace(/\D/g,'').substring(0,16).replace(/(.{4})/g,'$1 ').trim(); }
      function fmtExp(el) { let v = el.value.replace(/\D/g,'').substring(0,4); if (v.length > 2) v = v.slice(0,2) + '/' + v.slice(2); el.value = v; }

      // Keep allergies field persisted while modal open/close
      document.addEventListener('input', (e) => {
        if (e.target && e.target.id === 'order-allergies') orderAllergies = e.target.value;
      });

      const reveals = document.querySelectorAll('.reveal');
      reveals.forEach(el => el.classList.add('opacity-0', 'translate-y-6', 'transition-all', 'duration-700', 'ease-out'));
      function doReveal() {
        const vh = window.innerHeight;
        reveals.forEach(el => {
          if (el.getBoundingClientRect().top < vh - 60) {
            el.classList.remove('opacity-0', 'translate-y-6'); el.classList.add('opacity-100', 'translate-y-0');
          }
        });
      }
      window.addEventListener('scroll', doReveal, { passive: true }); doReveal();

      const navbar = document.getElementById('navbar');
      window.addEventListener('scroll', () => {
        if (window.scrollY > 40) {
          navbar.classList.add('bg-[#F2E6CE]/90', 'backdrop-blur-md', 'border-[#C4B08A]/30', 'shadow-sm');
          navbar.classList.remove('border-transparent');
        } else {
          navbar.classList.remove('bg-[#F2E6CE]/90', 'backdrop-blur-md', 'border-[#C4B08A]/30', 'shadow-sm');
          navbar.classList.add('border-transparent');
        }
      }, { passive: true });

      function toggleMobileMenu() {
        const m = document.getElementById('mobile-menu');
        if (m.classList.contains('hidden')) { m.classList.remove('hidden'); m.classList.add('flex'); document.body.style.overflow = 'hidden'; }
        else { m.classList.add('hidden'); m.classList.remove('flex'); document.body.style.overflow = ''; }
      }

      function smoothTo(sel) {
        const el = document.querySelector(sel); if (el) el.scrollIntoView({ behavior: 'smooth' });
      }
      document.querySelectorAll('a[href^="#"]').forEach(a => {
        a.addEventListener('click', e => {
          const t = document.querySelector(a.getAttribute('href'));
          if (t) { e.preventDefault(); t.scrollIntoView({ behavior: 'smooth' }); }
        });
      });

      // initial sync
      renderCart(false);
      [...MENU.casa, ...MENU.classics, ...MENU.drinks].forEach(it => syncMenuRow(it.id));
    


      const galleryImages = [
        { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8154efd2-74e4-4d0d-b511-1993d18c2c4e_1600w.jpg', alt: 'Rustic Neapolitan White Pizza with Ricotta' },
        { src: 'https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b5e2de-f800-4df8-a2d8-193ff41a9b40_1600w.jpg', alt: 'Rustic Neapolitan Pizza Marinara on Wooden Board' }
      ];
      let currentLightboxIndex = 0;

      function openLightbox(index) {
        currentLightboxIndex = index;
        const lightbox = document.getElementById('gallery-lightbox');
        const img = document.getElementById('lightbox-img');

        img.src = galleryImages[index].src;
        img.alt = galleryImages[index].alt;
        img.classList.remove('scale-100');
        img.classList.add('scale-95');

        lightbox.classList.remove('hidden');
        setTimeout(() => {
          lightbox.classList.remove('opacity-0', 'pointer-events-none');
        }, 10);

        setTimeout(() => {
          img.classList.remove('scale-95');
          img.classList.add('scale-100');
        }, 50);

        document.body.style.overflow = 'hidden';
      }

      function closeLightbox(e, force = false) {
        if (e && e.target.id !== 'gallery-lightbox' && !force) return;
        const lightbox = document.getElementById('gallery-lightbox');
        if(lightbox) {
          lightbox.classList.add('opacity-0', 'pointer-events-none');
          setTimeout(() => lightbox.classList.add('hidden'), 300);
        }
        document.body.style.overflow = '';
      }

      function changeLightboxImage(dir, e) {
        if (e) e.stopPropagation();
        currentLightboxIndex = (currentLightboxIndex + dir + galleryImages.length) % galleryImages.length;
        const img = document.getElementById('lightbox-img');

        img.classList.remove('scale-100');
        img.classList.add('scale-95');
        img.style.opacity = '0';

        setTimeout(() => {
          img.src = galleryImages[currentLightboxIndex].src;
          img.alt = galleryImages[currentLightboxIndex].alt;
          img.style.opacity = '1';
          img.classList.remove('scale-95');
          img.classList.add('scale-100');
        }, 150);
      }

      document.addEventListener('keydown', (e) => {
        const lightbox = document.getElementById('gallery-lightbox');
        if (lightbox && !lightbox.classList.contains('hidden')) {
          if (e.key === 'Escape') closeLightbox(null, true);
          if (e.key === 'ArrowLeft') changeLightboxImage(-1);
          if (e.key === 'ArrowRight') changeLightboxImage(1);
        }
      });
    


      (function() {
        const mediaQuery = window.matchMedia('(min-width: 768px) and (prefers-reduced-motion: no-preference)');
        const gallery = document.getElementById('nosaltres-gallery');
        if (!gallery) return;
        const photos = gallery.querySelectorAll(':scope > div');
        if (photos.length < 2) return;

        let ticking = false;
        function updateParallax() {
          if (mediaQuery.matches) {
            const rect = gallery.getBoundingClientRect();
            const vh = window.innerHeight;
            if (rect.top < vh && rect.bottom > 0) {
              const centerOffset = (rect.top + rect.height / 2) - (vh / 2);
              const y1 = -centerOffset * 0.15;
              const y2 = -centerOffset * 0.08;
              photos[0].style.transform = `translateY(${y1}px)`;
              photos[1].style.transform = `translateY(${y2}px)`;
            }
          } else {
            photos[0].style.transform = '';
            photos[1].style.transform = '';
          }
          ticking = false;
        }

        function onScroll() {
          if (!ticking) {
            window.requestAnimationFrame(updateParallax);
            ticking = true;
          }
        }

        window.addEventListener('scroll', onScroll, { passive: true });
        window.addEventListener('resize', onScroll, { passive: true });
        updateParallax();
      })();
    


      (function() {
        const track = document.getElementById('testimonial-track');
        if (!track) return;
        const prevBtn = document.getElementById('t-prev');
        const nextBtn = document.getElementById('t-next');
        const dots = document.querySelectorAll('#t-dots button');
        let currentIndex = 0;
        const total = 5;
        let autoPlayInterval;
        let interactionTimeout;

        function updateCarousel() {
          if (window.innerWidth >= 768) {
            track.style.transform = 'none';
            return;
          }
          track.style.transform = `translateX(-${currentIndex * 100}%)`;
          dots.forEach((dot, i) => {
            if (i === currentIndex) {
              dot.className = 'w-2 h-2 rounded-full bg-[#E23F2E] transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]';
            } else {
              dot.className = 'w-2 h-2 rounded-full bg-[#C4B08A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]';
            }
          });
        }

        function goTo(index) {
          currentIndex = index;
          if (currentIndex < 0) currentIndex = total - 1;
          if (currentIndex >= total) currentIndex = 0;
          updateCarousel();
        }

        function next() { goTo(currentIndex + 1); }
        function prev() { goTo(currentIndex - 1); }

        function startAutoPlay() {
          clearInterval(autoPlayInterval);
          autoPlayInterval = setInterval(next, 6000);
        }

        function pauseAutoPlay() {
          clearInterval(autoPlayInterval);
          clearTimeout(interactionTimeout);
          interactionTimeout = setTimeout(startAutoPlay, 10000);
        }

        if (prevBtn) prevBtn.addEventListener('click', () => { prev(); pauseAutoPlay(); });
        if (nextBtn) nextBtn.addEventListener('click', () => { next(); pauseAutoPlay(); });
        dots.forEach((dot, i) => {
          dot.addEventListener('click', () => { goTo(i); pauseAutoPlay(); });
        });

        let startX = 0;
        let startY = 0;
        let isDragging = false;
        track.addEventListener('touchstart', (e) => {
          if (window.innerWidth >= 768) return;
          startX = e.touches[0].clientX;
          startY = e.touches[0].clientY;
          isDragging = true;
          pauseAutoPlay();
        }, {passive: true});

        track.addEventListener('touchend', (e) => {
          if (!isDragging) return;
          isDragging = false;
          const endX = e.changedTouches[0].clientX;
          const endY = e.changedTouches[0].clientY;
          const diffX = startX - endX;
          const diffY = startY - endY;
          if (Math.abs(diffX) > 50 && Math.abs(diffX) > Math.abs(diffY)) {
            if (diffX > 0) next();
            else prev();
          }
        }, {passive: true});

        track.setAttribute('tabindex', '0');
        track.addEventListener('keydown', (e) => {
          if (window.innerWidth >= 768) return;
          if (e.key === 'ArrowLeft') { prev(); pauseAutoPlay(); }
          if (e.key === 'ArrowRight') { next(); pauseAutoPlay(); }
        });

        window.addEventListener('resize', updateCarousel);
        updateCarousel();
        startAutoPlay();
      })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="video-background-container top-0 w-full -z-10 absolute h-[55vh] md:h-[60vh]" data-alpha-mask="80">
<video autoplay="" className="w-full h-full object-cover opacity-40" loop="" muted="" playsinline="" poster="https://micsas-hero.vercel.app/micsas-hero.jpg" src="https://micsas-hero.vercel.app/micsas-hero.mp4"></video>
<div className="absolute bottom-0 left-0 w-full h-[20%] bg-gradient-to-b from-transparent to-[#F2E6CE] z-10"></div>
</div>

<div className="fixed inset-0 w-full h-full pointer-events-none z-[9998] opacity-[0.03]" style={{backgroundImage: 'url(&quot', data: 'image/svg+xml,%3Csvg viewBox=\'0 0 256 256\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cfilter id=\'n\'%3E%3CfeTurbulence type=\'fractalNoise\' baseFrequency=\'0.65\' numOctaves=\'3\' stitchTiles=\'stitch\'/%3E%3C/filter%3E%3Crect width=\'100%25\' height=\'100%25\' filter=\'url(%23n)\'/%3E%3C/svg%3E&quot'}}></div>

<nav className="fixed top-0 w-full z-40 px-6 py-4 md:px-12 flex justify-between items-center transition-all duration-500 border-b" id="navbar">
<a className="flex items-center gap-3 group" href="#">
<span className="font-['Lilita_One'] tracking-tighter text-2xl text-[#2A1A0F]">
          micsas.ff
        </span>
</a>
<div className="hidden md:flex gap-8 text-sm font-normal text-[#2A1A0F]">
<a className="relative group transition-opacity hover:opacity-60" href="#nosaltres">
          Nosaltres
        </a>
<a className="relative group transition-opacity hover:opacity-60" href="#carta">
          Carta
        </a>
<a className="relative group transition-opacity hover:opacity-60" href="#serveis">
          Serveis
        </a>
<a className="relative group transition-opacity hover:opacity-60" href="#opinions">
          Testimonis
        </a>
<a className="relative group transition-opacity hover:opacity-60" href="#contacte">
          Contacte
        </a>
</div>
<div className="flex items-center gap-3">
<button aria-label="Cistella" className="relative p-2 rounded-full hover:bg-[#E6D5B0]/50 transition-colors" onclick="openCartDrawer()">
<iconify-icon className="" icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5', color: '#2A1A0F'}} width="22"></iconify-icon>
<span className="absolute top-0 right-0 w-4 h-4 rounded-full text-xs font-medium flex items-center justify-center text-[#F2E6CE] bg-[#E23F2E] hidden" id="cart-badge">
            0
          </span>
</button>
<a className="hidden md:flex items-center justify-center gap-2 px-5 py-2.5 rounded-full text-sm font-normal text-[#E23F2E] bg-[#E23F2E]/10 hover:bg-[#E23F2E] hover:text-[#F2E6CE] transition-all" href="https://ig.me/m/micsas.ff" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
          Escriu-nos
        </a>
<button aria-label="Menú" className="md:hidden p-2 rounded-full hover:bg-[#E6D5B0]/50 transition-colors" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5', color: '#2A1A0F'}} width="24"></iconify-icon>
</button>
</div>
</nav>

<div className="fixed inset-0 z-[550] bg-[#F2E6CE]/95 backdrop-blur-md border-r border-[#E23F2E]/10 pt-24 px-8 pb-8 flex-col gap-8 overflow-y-auto hidden" id="mobile-menu">
<button className="absolute top-6 right-6 p-2 rounded-full hover:bg-[#E6D5B0]/50 transition-colors text-[#2A1A0F]" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-square-linear" style={{strokeWidth: '1.5'}} width="26"></iconify-icon>
</button>
<a className="font-['Lilita_One'] tracking-tight text-4xl text-[#2A1A0F]" href="#nosaltres" onclick="toggleMobileMenu()">
        Nosaltres
      </a>
<a className="font-['Lilita_One'] tracking-tight text-4xl text-[#2A1A0F]" href="#carta" onclick="toggleMobileMenu()">
        Carta
      </a>
<a className="font-['Lilita_One'] tracking-tight text-4xl text-[#2A1A0F]" href="#serveis" onclick="toggleMobileMenu()">
        Serveis
      </a>
<a className="font-['Lilita_One'] tracking-tight text-4xl text-[#2A1A0F]" href="#opinions" onclick="toggleMobileMenu()">
        Testimonis
      </a>
<a className="font-['Lilita_One'] tracking-tight text-4xl text-[#2A1A0F]" href="#contacte" onclick="toggleMobileMenu()">
        Contacte
      </a>
<a className="mt-8 py-4 px-6 flex items-center justify-center gap-2 rounded-full text-[#F2E6CE] bg-[#E23F2E] font-medium text-sm transition-opacity hover:opacity-90" href="https://ig.me/m/micsas.ff" rel="noopener noreferrer" target="_blank">
<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg>
        Escriu-nos
      </a>
</div>

<header className="relative min-h-screen flex flex-col items-center text-center px-6 justify-start pt-[55vh] md:pt-[60vh] pb-32">
<div className="mb-8 hover:-translate-y-2 transition-transform duration-700 ease-out cursor-pointer" onclick="window.location.href='https://micsas-hero.vercel.app/'" role="button"></div>
<h1 className="font-['Lilita_One'] tracking-tight text-6xl sm:text-7xl md:text-8xl leading-none mb-6 text-[#E23F2E] reveal transition-all duration-700 ease-out opacity-100 translate-y-0">
        micsas.ff
      </h1>
<p className="md:text-xl reveal transition-all duration-700 ease-out text-lg font-light text-[#2A1A0F] tracking-tight font-serif opacity-100 max-w-sm mr-auto mb-10 ml-auto translate-y-0">
        MICSAS FRIENDS &amp; FAMILY
      </p>
<div className="flex flex-col sm:flex-row reveal transition-all duration-700 ease-out opacity-100 translate-y-0 gap-x-4 gap-y-4">
<a className="px-8 py-3.5 rounded-full font-medium text-sm text-[#F2E6CE] bg-[#E23F2E] shadow-sm transition-all hover:bg-[#B82A1F] hover:-translate-y-0.5" href="#carta">
  Demana aqui!
</a>
<a className="px-8 py-3.5 flex items-center justify-center gap-2 rounded-full font-medium text-sm text-[#E23F2E] bg-[#E23F2E]/5 border border-[#E23F2E]/20 transition-all hover:bg-[#E23F2E]/10" href="https://www.instagram.com/micsas.ff/" rel="noopener noreferrer" target="_blank">Segueix-nos<svg className="lucide lucide-instagram" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<rect className="" height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
</svg></a>
</div>
<a className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3 opacity-50 hover:opacity-100 transition-opacity cursor-pointer" href="#nosaltres">
<span className="text-xs uppercase tracking-widest font-normal text-[#2A1A0F]">
          Descobreix
        </span>
<div className="w-[1px] h-8 bg-gradient-to-b from-[#2A1A0F]/60 to-transparent"></div>
</a>
</header>

<section className="py-24 md:py-36 px-6 md:px-12 bg-[#E6D5B0]/20" id="nosaltres">
<div className="grid md:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto gap-x-16 gap-y-16 items-stretch">
<div className="space-y-6 reveal transition-all duration-700 ease-out flex flex-col justify-center h-full opacity-100 translate-y-0 opacity-0 translate-y-6">
<span className="text-xs uppercase tracking-widest font-normal text-[#E23F2E] border-l-2 border-[#E23F2E] pl-3 inline-block">
            sobre nosaltres
          </span>
<h2 className="leading-tight md:text-4xl text-4xl text-[#2A1A0F] tracking-tight font-['Lilita_One']">Nascuts a Matadepera,<span className="text-[#E23F2E]"> fets</span> <br/> per compartir.
</h2>
<div className="space-y-4 text-sm font-light leading-relaxed max-w-md text-[#5A3E28]">
<p className="font-serif">Micsas neix a Matadepera, d'un grup d'amics obsessionats amb la pizza napolitana de veritat: massa fermentada x hores i amb ingredients escollits un per un. Sense app, sense intermediaris. <br/> <br/> Cuinem i entreguem nosaltres mateixos perquè la caixa arribi al teu portal encara calenta. També tenim el servei de esdevemients, per tot aquell públic que vol la pizza tradicional napolitana en la seva festa.<br/></p>
</div>
</div>
<div className="relative h-[450px] md:h-[600px] reveal delay-200 transition-all duration-700 ease-out group w-full opacity-0 translate-y-6" id="nosaltres-gallery-new">
<div className="absolute top-4 md:top-10 right-4 md:right-10 w-48 md:w-64 h-64 md:h-80 overflow-hidden shadow-2xl z-20 transform group-hover:-translate-y-4 transition-transform duration-1000">
<img alt="Rustic Neapolitan White Pizza with Ricotta" className="w-full h-full object-cover opacity-80 hover:opacity-100 transition-opacity duration-700 grayscale-[0.3]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8154efd2-74e4-4d0d-b511-1993d18c2c4e_800w.jpg"/>
</div>
<div className="absolute bottom-4 md:bottom-10 left-4 md:left-10 w-56 md:w-72 h-72 md:h-96 overflow-hidden shadow-2xl z-10 transform group-hover:translate-y-4 transition-transform duration-1000">
<img alt="Rustic Neapolitan Pizza Marinara on Wooden Board" className="w-full h-full object-cover opacity-70 hover:opacity-100 transition-opacity duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d1b5e2de-f800-4df8-a2d8-193ff41a9b40_800w.jpg"/>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-[#F2E6CE]/20 via-transparent to-[#E23F2E]/5 pointer-events-none mix-blend-multiply"></div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 text-center relative overflow-hidden bg-gradient-to-br from-[#E23F2E] to-[#B82A1F]">
<div className="relative z-10 max-w-4xl mx-auto reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<p className="font-['Lilita_One'] tracking-tight text-4xl md:text-6xl text-[#F2E6CE] leading-tight">
          Pizza napolitana tradicional
        </p>
<p className="text-sm font-normal text-[#F2E6CE]/80 tracking-wide font-serif mt-4">
          Sense pressa, només amor i temps. L'olor de la massa al matí, el so de
          les motos al vespre, la calor del forn de pedra. Així és Micsas. Així
          és el nostre barri.
        </p>
</div>
</section>
<section className="py-24 md:py-36 px-6 md:px-12 bg-[#E6D5B0]/20 border-b border-[#C4B08A]/20 overflow-hidden" id="opinions">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-16 reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<span className="text-xs uppercase tracking-widest font-normal text-[#E23F2E]">
            Testimonis
          </span>
<h2 className="font-['Lilita_One'] tracking-tight text-4xl md:text-5xl mt-3 text-[#2A1A0F]">
            Què diuen els nostres veïns
          </h2>
</div>
<div className="relative flex flex-col justify-center items-center py-12 md:py-16 overflow-hidden md:overflow-visible w-full">
<div className="testimonial-container flex md:justify-center items-center relative w-full max-w-full transition-transform duration-300 ease-out will-change-transform" id="testimonial-track" tabindex="0">

<div className="t-card relative h-[280px] shrink-0 bg-[#F2E6CE] border border-[#C4B08A]/30 shadow-sm rounded-2xl flex flex-col p-6 transition-all duration-500 ease-out z-10 w-full md:w-[260px]">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] mb-5 shrink-0">
<iconify-icon icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-[#5A3E28] font-serif mb-auto">
                "La millor pizza de Matadepera, sens dubte. La massa és
                increïble i arriba súper calenta gràcies a la moto."
              </p>
<div className="pt-4 border-t border-[#C4B08A]/20 flex items-center justify-between mt-4">
<div className="text-sm font-medium text-[#2A1A0F]">Marta P.</div>
<div className="flex items-center gap-0.5 text-[#E23F2E]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="t-card relative h-[280px] shrink-0 bg-[#F2E6CE] border border-[#C4B08A]/30 shadow-sm rounded-2xl flex flex-col p-6 transition-all duration-500 ease-out z-20 w-full md:w-[260px]">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] mb-5 shrink-0">
<iconify-icon className="" icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-[#5A3E28] font-serif mb-auto">
                "Es nota que fan la fermentació de 72h. No es fa gens pesada, i
                els ingredients són de primera qualitat."
              </p>
<div className="pt-4 border-t border-[#C4B08A]/20 flex items-center justify-between mt-4">
<div className="text-sm font-medium text-[#2A1A0F]">Jordi C.</div>
<div className="flex items-center gap-0.5 text-[#E23F2E]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="t-card relative h-[280px] shrink-0 bg-[#F2E6CE] border border-[#C4B08A]/30 shadow-md rounded-2xl flex flex-col p-6 transition-all duration-500 ease-out z-30 w-full md:w-[260px]">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] mb-5 shrink-0">
<iconify-icon icon="solar:chat-round-like-bold" width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-[#5A3E28] font-serif mb-auto">
                "Un tracte excepcional pel telèfon i la pizza impressionant. Ens
                va encantar 'La Bèstia de Matadepera'."
              </p>
<div className="pt-4 border-t border-[#C4B08A]/20 flex items-center justify-between mt-4">
<div className="text-sm font-medium text-[#2A1A0F]">Aina R.</div>
<div className="flex items-center gap-0.5 text-[#E23F2E]">
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="t-card relative h-[280px] shrink-0 bg-[#F2E6CE] border border-[#C4B08A]/30 shadow-sm rounded-2xl flex flex-col p-6 transition-all duration-500 ease-out z-20 w-full md:w-[260px]">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] mb-5 shrink-0">
<iconify-icon icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-[#5A3E28] font-serif mb-auto">
                "Molt bona relació qualitat-preu. Finalment una pizzeria
                autèntica napolitana al barri sense complicacions."
              </p>
<div className="pt-4 border-t border-[#C4B08A]/20 flex items-center justify-between mt-4">
<div className="text-sm font-medium text-[#2A1A0F]">Marc V.</div>
<div className="flex items-center gap-0.5 text-[#E23F2E]">
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>

<div className="t-card relative h-[280px] shrink-0 bg-[#F2E6CE] border border-[#C4B08A]/30 shadow-sm rounded-2xl flex flex-col p-6 transition-all duration-500 ease-out z-10 w-full md:w-[260px]">
<div className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] mb-5 shrink-0">
<iconify-icon icon="solar:chat-round-like-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-light text-[#5A3E28] font-serif mb-auto">
                "Ràpids, amables i amb un forn de pedra que es nota a cada
                mossegada. Totalment recomanable per divendres a la nit."
              </p>
<div className="pt-4 border-t border-[#C4B08A]/20 flex items-center justify-between mt-4">
<div className="text-sm font-medium text-[#2A1A0F]">Laia S.</div>
<div className="flex items-center gap-0.5 text-[#E23F2E]">
<iconify-icon className="" icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="14"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex md:hidden items-center justify-center gap-4 mt-8 w-full z-20">
<button aria-label="Anterior testimoni" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E6D5B0]/50 text-[#E23F2E] hover:bg-[#E23F2E]/10 transition-colors" id="t-prev">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
<div className="flex gap-2" id="t-dots">
<button aria-label="Testimoni 1" className="w-2 h-2 rounded-full bg-[#E23F2E] transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]"></button>
<button aria-label="Testimoni 2" className="w-2 h-2 rounded-full bg-[#C4B08A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]"></button>
<button aria-label="Testimoni 3" className="w-2 h-2 rounded-full bg-[#C4B08A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]"></button>
<button aria-label="Testimoni 4" className="w-2 h-2 rounded-full bg-[#C4B08A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]"></button>
<button aria-label="Testimoni 5" className="w-2 h-2 rounded-full bg-[#C4B08A]/50 transition-all focus:outline-none focus:ring-2 focus:ring-[#E23F2E]"></button>
</div>
<button aria-label="Següent testimoni" className="w-10 h-10 rounded-full flex items-center justify-center bg-[#E6D5B0]/50 text-[#E23F2E] hover:bg-[#E23F2E]/10 transition-colors" id="t-next">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
</div>
<style>
          @media (min-width: 768px) {
            .t-card:nth-child(1) { transform: rotate(-12deg); margin: 0 -35px; z-index: 10; }
            .t-card:nth-child(2) { transform: rotate(-6deg); margin: 0 -35px; z-index: 20; }
            .t-card:nth-child(3) { transform: rotate(0deg); margin: 0 -35px; z-index: 30; }
            .t-card:nth-child(4) { transform: rotate(6deg); margin: 0 -35px; z-index: 20; }
            .t-card:nth-child(5) { transform: rotate(12deg); margin: 0 -35px; z-index: 10; }

            .testimonial-container:hover .t-card {
              transform: rotate(0deg) !important;
              margin: 0 -15px !important;
            }
            .testimonial-container .t-card:hover {
              transform: translateY(-10px) scale(1.05) rotate(0deg) !important;
              z-index: 50 !important;
              box-shadow: 0 10px 20px -5px rgba(42, 26, 15, 0.1) !important;
              border-color: rgba(226, 63, 46, 0.4) !important;
            }
          }
          @media (max-width: 767px) {
            .t-card {
              flex: 0 0 88% !important;
              width: 88% !important;
              margin: 0 6% !important;
              transform: none !important;
            }
          }
        </style>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12" id="carta">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16 reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<span className="text-xs uppercase tracking-widest font-normal text-[#E23F2E]">
            Carta · Primavera 2025
          </span>
<h2 className="font-['Lilita_One'] tracking-tight text-4xl md:text-5xl mt-3 text-[#2A1A0F]">
            Les nostres pizzes
          </h2>
</div>

<div className="mb-16 reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<div className="border-b border-[#C4B08A]/40 pb-4 mb-6">
<h3 className="font-['Lilita_One'] tracking-tight text-2xl md:text-3xl text-[#2A1A0F]">Pizzes clàssiques</h3>
<p className="text-xs uppercase tracking-widest mt-1.5 font-normal text-[#E23F2E]">
  tradició napolitana
</p>
</div>
<div className="space-y-1" id="menu-casa">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="c1">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">La Moto</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Mortadel·la, burrata, pesto de rúcula, orenga</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€16.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="c1">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="c1" onclick="addToCartSilent('c1','La Moto',16)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="c1">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c1',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="c1">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c1',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="c1" onclick="togglePizzaNote('c1')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="c1">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="c1" oninput="setPizzaNote('c1', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="c2">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">El Telèfon Vermell</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Salami picant, mel de romaní, gorgonzola, nous</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€15.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="c2">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="c2" onclick="addToCartSilent('c2','El Telèfon Vermell',15)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="c2">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c2',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="c2">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c2',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="c2" onclick="togglePizzaNote('c2')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="c2">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="c2" oninput="setPizzaNote('c2', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="c3">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">La Bèstia de Matadepera</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Botifarra, ceba caramel·litzada, salsa romesco, mozzarella</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€17.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="c3">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="c3" onclick="addToCartSilent('c3','La Bèstia de Matadepera',17)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="c3">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c3',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="c3">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c3',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="c3" onclick="togglePizzaNote('c3')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="c3">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="c3" oninput="setPizzaNote('c3', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="c4">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">L'Avi Fresc</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Pernil ibèric, rúcula, parmesà, tàperes, filet de llimona</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€16.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="c4">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="c4" onclick="addToCartSilent('c4','L\'Avi Fresc',16)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="c4">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c4',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="c4">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c4',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="c4" onclick="togglePizzaNote('c4')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="c4">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="c4" oninput="setPizzaNote('c4', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="c5">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">La Cremosa</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Mascarpone, bolets de temporada, tòfona negra</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€15.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="c5">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="c5" onclick="addToCartSilent('c5','La Cremosa',15)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="c5">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c5',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="c5">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('c5',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="c5" onclick="togglePizzaNote('c5')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="c5">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="c5" oninput="setPizzaNote('c5', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div></div>
</div>

<div className="mb-16 reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<div className="border-b border-[#C4B08A]/40 pb-4 mb-6">
<h3 className="font-['Lilita_One'] tracking-tight text-2xl md:text-3xl text-[#2A1A0F]">
              Les clàssiques
            </h3>
<p className="text-xs uppercase tracking-widest mt-1.5 font-normal text-[#E23F2E]">
              Tradició napolitana
            </p>
</div>
<div className="space-y-1" id="menu-classics">
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="cl1">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Margherita</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Tomàquet San Marzano, mozzarella fior di latte, alfàbrega fresca</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€11.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="cl1">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="cl1" onclick="addToCartSilent('cl1','Margherita',11)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="cl1">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl1',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="cl1">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl1',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="cl1" onclick="togglePizzaNote('cl1')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="cl1">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="cl1" oninput="setPizzaNote('cl1', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="cl2">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Marinara</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Tomàquet, all, orenga, oli d'oliva verge extra</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€9.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="cl2">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="cl2" onclick="addToCartSilent('cl2','Marinara',9)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="cl2">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl2',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="cl2">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl2',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="cl2" onclick="togglePizzaNote('cl2')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="cl2">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="cl2" oninput="setPizzaNote('cl2', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="cl3">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Napolitana</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Tomàquet, mozzarella, anxoves, tàperes, olives negres</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€13.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="cl3">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="cl3" onclick="addToCartSilent('cl3','Napolitana',13)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="cl3">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl3',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="cl3">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl3',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="cl3" onclick="togglePizzaNote('cl3')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="cl3">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="cl3" oninput="setPizzaNote('cl3', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="cl4">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Quatre formatges</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Mozzarella, gorgonzola, parmesà, provolone, mel</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€14.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="cl4">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="cl4" onclick="addToCartSilent('cl4','Quatre formatges',14)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="cl4">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl4',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="cl4">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl4',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="cl4" onclick="togglePizzaNote('cl4')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="cl4">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="cl4" oninput="setPizzaNote('cl4', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="cl5">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Calzone</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Ricotta, mozzarella, pernil dolç, alfàbrega</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€13.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="cl5">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="cl5" onclick="addToCartSilent('cl5','Calzone',13)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="cl5">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl5',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="cl5">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('cl5',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="cl5" onclick="togglePizzaNote('cl5')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="cl5">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="cl5" oninput="setPizzaNote('cl5', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div></div>
</div>

<div id="menu-drinks" style={{display: 'none'}}>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="d1">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Aigua mineral</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">50 cl</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€2.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="d1">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="d1" onclick="addToCartSilent('d1','Aigua mineral',2)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="d1">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d1',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="d1">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d1',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="d1" onclick="togglePizzaNote('d1')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="d1">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="d1" oninput="setPizzaNote('d1', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="d2">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Refresc</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Coca-Cola, Fanta, Sprite · 33 cl</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€2.50</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="d2">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="d2" onclick="addToCartSilent('d2','Refresc',2.5)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="d2">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d2',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="d2">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d2',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="d2" onclick="togglePizzaNote('d2')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="d2">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="d2" oninput="setPizzaNote('d2', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 border-b border-[#C4B08A]/20 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="d3">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Cervesa artesana</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Producció local · 33 cl</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€4.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="d3">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="d3" onclick="addToCartSilent('d3','Cervesa artesana',4)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="d3">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d3',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="d3">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d3',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="d3" onclick="togglePizzaNote('d3')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="d3">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="d3" oninput="setPizzaNote('d3', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-3 justify-between px-2 py-4 group hover:bg-[#E6D5B0]/10 transition-colors rounded-lg" data-pizza-row="d4">
<div className="flex-1 min-w-0 pr-4">
<span className="font-medium text-base text-[#2A1A0F] block mb-0.5">Tiramisú casolà</span>
<span className="block text-xs font-light text-[#5A3E28] leading-relaxed">Fet a la cuina cada dia</span>
</div>
<div className="flex items-center gap-4 shrink-0">
<span className="font-normal text-sm text-[#2A1A0F]">€5.00</span>
<div className="flex flex-col items-end">
<div className="relative" data-ctrl-wrap="d4">
<button className="bg-[#F2E6CE] text-[#E23F2E] border border-[#C4B08A]/40 px-4 py-1.5 rounded-full text-xs font-medium transition-all active:scale-95 whitespace-nowrap hover:bg-[#E23F2E] hover:text-[#F2E6CE] hover:border-transparent" data-btn-add="d4" onclick="addToCartSilent('d4','Tiramisú casolà',5)" type="button">Afegir</button>
<div className="hidden items-center gap-2 bg-[#F2E6CE] border border-[#C4B08A]/30 rounded-full p-1" data-counter="d4">
<button aria-label="Treure una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d4',-1)" type="button">
<iconify-icon icon="solar:minus-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
<span className="w-4 text-center text-xs font-medium text-[#2A1A0F]" data-qty="d4">1</span>
<button aria-label="Afegir una unitat" className="w-7 h-7 flex items-center justify-center rounded-full text-[#2A1A0F] hover:bg-[#E23F2E]/10 transition-colors shrink-0" onclick="changeQtySilent('d4',1)" type="button">
<iconify-icon icon="solar:add-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</button>
</div>
</div>
<button className="hidden mt-2 text-[11px] font-medium text-[#E23F2E] hover:opacity-70 transition-opacity" data-note-link="d4" onclick="togglePizzaNote('d4')" type="button">✎ Afegir nota</button>
</div>
</div>
<div className="hidden w-full sm:w-auto sm:ml-auto sm:pl-4" data-note-panel="d4">
<textarea className="w-full sm:w-[320px] bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" data-note-ta="d4" oninput="setPizzaNote('d4', this.value)" placeholder="Modificacions o ingredients a retirar..." rows="2"></textarea>
</div>
</div></div>
</div>
<div className="md:hidden fixed left-4 right-4 bottom-4 z-[580] translate-y-24 opacity-0 pointer-events-none transition-all duration-500 ease-[cubic-bezier(0.16,1,0.3,1)]" id="mobile-cart-bar">
<button className="w-full flex items-center justify-between gap-4 px-5 py-4 rounded-2xl bg-[#E23F2E] text-[#F2E6CE] shadow-lg border border-[#B82A1F]/30" onclick="openCartDrawer()" type="button">
<div className="flex flex-col text-left">
<span className="text-sm font-medium tracking-tight" id="mcb-summary">
              0 pizzes · €0,00
            </span>
<span className="text-xs font-light opacity-90">Veure cistella</span>
</div>
<span className="text-sm font-medium">Veure cistella →</span>
</button>
</div>
</section>

<section className="py-24 md:py-32 px-6 md:px-12 bg-[#E6D5B0]/20 border-y border-[#C4B08A]/20" id="serveis">
<div className="max-w-5xl mx-auto text-center">
<div className="reveal mb-16 transition-all duration-700 ease-out opacity-0 translate-y-6">
<span className="text-xs uppercase tracking-widest font-normal text-[#E23F2E]">
            Com t'ajudem
          </span>
<h3 className="font-['Lilita_One'] tracking-tight text-3xl md:text-5xl mt-3 text-[#2A1A0F]">
            A les teves mans
          </h3>
</div>
<div className="grid md:grid-cols-3 gap-6 reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<div className="p-8 rounded-2xl bg-[#F2E6CE] border border-[#C4B08A]/30 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 group">
<div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] transition-transform duration-300 group-hover:scale-110">
<iconify-icon icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h4 className="font-['Lilita_One'] tracking-tight text-2xl mb-3 text-[#2A1A0F]">
              Recollida
            </h4>
<p className="text-sm font-light leading-relaxed text-[#5A3E28]">
              Passa pel local a buscar la teva pizza calenta. Sense espera,
              sense sorpreses.
            </p>
</div>
<div className="p-8 rounded-2xl bg-[#F2E6CE] border border-[#C4B08A]/30 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 group">
<div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] transition-transform duration-300 group-hover:scale-110">
<iconify-icon icon="solar:scooter-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h4 className="font-['Lilita_One'] tracking-tight text-2xl mb-3 text-[#2A1A0F]">
              A domicili
            </h4>
<p className="text-sm font-light leading-relaxed text-[#5A3E28]">
              Matadepera, Terrassa nord i Castellar. La moto del Riki arriba
              calenteta.
            </p>
</div>
<div className="p-8 rounded-2xl bg-[#F2E6CE] border border-[#C4B08A]/30 transition-all duration-300 hover:shadow-sm hover:-translate-y-1 group">
<div className="w-14 h-14 rounded-full mx-auto mb-6 flex items-center justify-center bg-[#E23F2E]/10 text-[#E23F2E] transition-transform duration-300 group-hover:scale-110">
<iconify-icon className="" icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h4 className="font-['Lilita_One'] tracking-tight text-2xl mb-3 text-[#2A1A0F]">
              Telèfon
            </h4>
<p className="text-sm font-light leading-relaxed text-[#5A3E28]">
              Truca'ns, digues el que vols i ja ho fem nosaltres. Com sempre
              s'ha fet.
            </p>
<a className="inline-block mt-4 text-xs font-medium text-[#E23F2E] transition-opacity hover:opacity-70" href="tel:93XXXXXXXX">
              93 XXX XX XX →
            </a>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-36 px-6 md:px-12" id="contacte">
<div className="max-w-5xl mx-auto grid md:grid-cols-2 gap-16 items-start">
<div className="reveal transition-all duration-700 ease-out opacity-0 translate-y-6">
<h2 className="font-['Lilita_One'] tracking-tight text-4xl md:text-5xl mb-6 text-[#2A1A0F]">
        De Matadepera,
        <br/>
            a la teva taula.
      </h2>
<div className="w-10 h-0.5 bg-[#E23F2E] mb-10"></div>
<div className="space-y-8">
<div className="flex gap-4 gap-x-4 gap-y-4 items-start">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E6D5B0]/40 text-[#E23F2E]">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-1">
<span className="block text-xs uppercase tracking-widest mb-1.5 font-normal text-[#E23F2E]">
                  On som
                </span>
<p className="text-sm font-light leading-relaxed text-[#2A1A0F]">
              Carrer de la Pau, 1
              <br/>
                  Matadepera, 08230
            </p>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E6D5B0]/40 text-[#E23F2E]">
<iconify-icon icon="solar:phone-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-1">
<span className="block text-xs uppercase tracking-widest mb-1.5 font-normal text-[#E23F2E]">
                  Contacte per esdeveniments
                </span>
<a className="" font-normal="" hover:text-[#e23f2e]"="" href="https://www.instagram.com/direct/t/17846966991577986/" text-[#2a1a0f]="" transition-opacity="">
  @micsas.ff
</a>
</div>
</div>
<div className="flex gap-4 items-start">
<div className="w-10 h-10 rounded-full flex items-center justify-center shrink-0 bg-[#E6D5B0]/40 text-[#E23F2E]">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div className="pt-1 w-full">
<span className="block text-xs uppercase tracking-widest mb-2 font-normal text-[#E23F2E]">
                  Horaris
                </span>
<div className="space-y-1.5 text-sm font-light text-[#2A1A0F] max-w-[240px]">
<div className="flex justify-between">
<span className="text-[#9B8A72]">Dl – Dj</span>
<span className="">Tancat</span>
</div>
<div className="flex justify-between">
<span className="text-[#9B8A72]">Dv – Dg</span>
<span className="">20:30 – 23:30</span>
</div>
<div className="flex justify-between">
<span></span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal rounded-2xl border border-[#C4B08A]/30 overflow-hidden bg-[#E6D5B0]/10 shadow-sm transition-all duration-700 ease-out opacity-0 translate-y-6">
<div className="p-6 border-b border-[#C4B08A]/20 bg-[#E6D5B0]/20">
<h3 className="font-['Lilita_One'] tracking-tight text-2xl text-[#2A1A0F]">
  On arriben les nostres pizzes
</h3>
<p className="text-xs font-light mt-1 text-[#5A3E28]">
          Matadepera, Vallès Occidental
        </p>
</div>
<a className="relative flex items-center justify-center h-64 group transition-all" href="https://www.google.com/maps/search/Matadepera+08230" target="_blank">

<svg className="absolute inset-0 w-full h-full opacity-30" xmlns="http://www.w3.org/2000/svg">
<defs>
<pattern height="24" id="g" patternunits="userSpaceOnUse" width="24">
<path d="M24 0L0 0 0 24" fill="none" stroke="#C4B08A" strokeWidth="0.5"></path>
</pattern>
</defs>
<rect className="" fill="url(#g)" height="100%" width="100%"></rect>
</svg>
<div className="relative z-10 flex flex-col items-center gap-4">
<div className="w-12 h-12 rounded-full flex items-center justify-center bg-[#E23F2E] text-[#F2E6CE] group-hover:scale-110 transition-transform duration-500 shadow-md">
<iconify-icon icon="solar:map-point-bold" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium px-4 py-2 rounded-full bg-[#F2E6CE] text-[#E23F2E] shadow-sm border border-[#C4B08A]/20">
                Obre Google Maps →
              </span>
</div>
</a>
</div>
</div>
</section>

<footer className="pt-16 pb-8 px-6 md:px-12 bg-[#2A1A0F]">
<div className="max-w-5xl mx-auto">
<div className="text-center mb-12">
<p className="font-['Lilita_One'] tracking-tighter text-4xl mb-2 text-[#F2E6CE]">
            micsas.ff
          </p>
<p className="text-xs font-light tracking-wide text-[#C4B08A]">
            Pasta, foc i moto. Res més.
          </p>
<div className="flex justify-center gap-4 mt-8">
<a className="w-10 h-10 rounded-full border border-[#C4B08A]/20 flex items-center justify-center transition-all hover:bg-[#E23F2E] hover:border-[#E23F2E] text-[#C4B08A] hover:text-[#F2E6CE]" href="https://instagram.com/micsas.ff" target="_blank">
<iconify-icon icon="solar:camera-linear" style={{strokeWidth: '1.5'}} width="20"></iconify-icon>
</a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#C4B08A]/10 gap-4">
<p className="text-xs font-light text-[#C4B08A]/60">
            © 2025 micsas.ff · Tots els drets reservats
          </p>
<div className="flex items-center gap-4 text-xs font-light text-[#C4B08A]/60">
<span>Efectiu</span>
<span className="w-1 h-1 rounded-full bg-[#C4B08A]/30"></span>
<span>Targeta</span>
<span className="w-1 h-1 rounded-full bg-[#C4B08A]/30"></span>
<span>Pagament online</span>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 bg-[#2A1A0F]/20 backdrop-blur-sm z-[599] opacity-0 pointer-events-none transition-opacity duration-300 hidden" id="cart-overlay" onclick="closeCartDrawer()"></div>
<div aria-label="Cistella de la comanda" className="fixed top-0 right-0 w-full max-w-[420px] h-[100dvh] bg-[#F2E6CE] border-l border-[#C4B08A]/30 z-[600] translate-x-full transition-transform duration-500 ease-[cubic-bezier(0.16,1,0.3,1)] flex flex-col shadow-2xl" id="cart-drawer" role="dialog">
<div className="flex items-center justify-between px-6 py-5 border-b border-[#C4B08A]/20 shrink-0 bg-[#F2E6CE]">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-[#E23F2E]/10 text-[#E23F2E] flex items-center justify-center">
<iconify-icon icon="solar:cart-large-2-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
</div>
<span className="font-['Lilita_One'] tracking-tight text-xl text-[#2A1A0F]">
            La teva cistella
          </span>
</div>
<button className="p-1 text-[#2A1A0F] hover:bg-[#E6D5B0]/50 rounded-full transition-colors" onclick="closeCartDrawer()">
<iconify-icon icon="solar:close-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>
</div>
<div className="flex-1 flex flex-col items-center justify-center gap-4 p-8 text-center" id="cart-empty">
<div className="w-16 h-16 rounded-full bg-[#E6D5B0]/40 flex items-center justify-center text-[#9B8A72] mb-2">
<iconify-icon icon="solar:pizza-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</div>
<p className="font-['Lilita_One'] tracking-tight text-2xl text-[#2A1A0F]">
          La cistella és buida
        </p>
<p className="text-sm font-light text-[#5A3E28]">
          Afegeix pizzes des de la carta per començar.
        </p>
<button className="mt-4 px-6 py-2.5 rounded-full text-sm font-medium text-[#F2E6CE] bg-[#2A1A0F] transition-all hover:bg-[#1a1009]" onclick="closeCartDrawer(); smoothTo('#carta')">
          Veure carta
        </button>
</div>
<div className="flex-1 overflow-y-auto px-6 py-4 space-y-3 hidden" id="cart-items"></div>
<div className="shrink-0 px-6 py-6 border-t border-[#C4B08A]/20 bg-[#F2E6CE] hidden space-y-4" id="cart-footer">
<div className="space-y-4">
<div className="flex justify-between text-sm font-light text-[#5A3E28]">
<span>Subtotal</span>
<span className="font-normal text-[#2A1A0F]" id="subtotal-val">€0.00</span>
</div>
<div className="flex justify-between text-sm font-light text-[#5A3E28]">
<span>Lliurament</span>
<span className="font-normal text-[#2A1A0F]">€2.50</span>
</div>
<div className="flex justify-between border-t border-[#C4B08A]/20 pt-3">
<span className="font-['Lilita_One'] tracking-tight text-xl text-[#2A1A0F]">
              Total
            </span>
<span className="font-['Lilita_One'] tracking-tight text-xl text-[#E23F2E]" id="total-val">€0.00</span>
</div>
<div className="pt-2">
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
              ⚠️ Al·lèrgies o intoleràncies
            </label>
<textarea className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" id="order-allergies" placeholder="Indica'ns qualsevol al·lèrgia o intolerància alimentària. La salut és el primer." rows="2"></textarea>
</div>
<button className="w-full py-3.5 rounded-full font-medium text-sm text-[#F2E6CE] bg-[#E23F2E] shadow-sm transition-all hover:bg-[#B82A1F] hover:-translate-y-0.5" onclick="openCheckout()">
            Continuar → Checkout
          </button>
</div>
</div>
</div>

<div aria-label="Procés de comanda" className="fixed inset-0 bg-[#2A1A0F]/40 backdrop-blur-sm z-[700] flex items-center justify-center p-4 opacity-0 pointer-events-none transition-opacity duration-300 hidden" id="checkout-modal" role="dialog">
<div className="bg-[#F2E6CE] w-full max-w-xl max-h-[90dvh] overflow-y-auto rounded-2xl p-6 md:p-8 shadow-2xl border border-[#C4B08A]/30 relative">
<button className="absolute top-4 right-4 p-2 text-[#9B8A72] hover:text-[#2A1A0F] transition-colors rounded-full hover:bg-[#E6D5B0]/50" onclick="closeCheckout()">
<iconify-icon icon="solar:close-square-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</button>

<div className="flex items-center gap-3 mb-10 w-3/4 mx-auto pt-2" id="step-indicator">
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300" id="sdot-1">
            1
          </div>
<div className="flex-1 h-[1px] bg-[#C4B08A]/40"></div>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300" id="sdot-2">
            2
          </div>
<div className="flex-1 h-[1px] bg-[#C4B08A]/40"></div>
<div className="w-8 h-8 rounded-full flex items-center justify-center text-xs font-medium shrink-0 transition-all duration-300" id="sdot-3">
            3
          </div>
</div>

<div id="step-1">
<h2 className="font-['Lilita_One'] tracking-tight text-3xl mb-1 text-[#2A1A0F]">
            Dades de lliurament
          </h2>
<p className="text-sm font-light mb-6 text-[#5A3E28]">
            On t'enviem la pizza?
          </p>
<div className="space-y-4">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                  Nom *
                </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-name" placeholder="El teu nom" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                  Telèfon *
                </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-phone" placeholder="6XX XXX XXX" type="tel"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                Adreça *
              </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-address" placeholder="Carrer i número" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                  Pis / Porta
                </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-floor" placeholder="2n 1a" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                  Codi postal
                </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-zip" placeholder="08230" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                Nota per al repartidor
              </label>
<textarea className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E] resize-none" id="f-notes" placeholder="Al·lèrgies, instruccions d'accés..." rows="2"></textarea>
</div>
</div>
<p className="text-xs mt-3 hidden text-[#E23F2E]" id="err-1">
            Si us plau, omple els camps obligatoris (nom, telèfon i adreça).
          </p>
<div className="flex gap-4 mt-8">
<button className="flex-1 py-3 rounded-full border border-[#C4B08A] text-sm font-medium text-[#2A1A0F] transition-all hover:bg-[#E6D5B0]/30" onclick="closeCheckout()">
              Cancel·lar
            </button>
<button className="flex-1 py-3 rounded-full text-sm font-medium text-[#F2E6CE] bg-[#E23F2E] shadow-sm transition-all hover:bg-[#B82A1F]" onclick="goStep(2)">
              Continuar →
            </button>
</div>
</div>

<div className="hidden" id="step-2">
<h2 className="font-['Lilita_One'] tracking-tight text-3xl mb-1 text-[#2A1A0F]">
            Forma de pagament
          </h2>
<p className="text-sm font-light mb-6 text-[#5A3E28]">Com vols pagar?</p>
<div className="space-y-4">

<div className="border border-[#C4B08A]/40 rounded-xl p-5 cursor-pointer transition-all hover:border-[#E23F2E]/50 group" id="opt-online" onclick="selPay('online')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E6D5B0]/30 text-[#E23F2E] flex items-center justify-center group-hover:bg-[#E23F2E]/10 transition-colors">
<iconify-icon icon="solar:card-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#2A1A0F]">
                    Pagar ara amb targeta
                  </span>
</div>
<div className="w-5 h-5 rounded-full border border-[#C4B08A] flex items-center justify-center transition-colors" id="radio-online">
<div className="w-2.5 h-2.5 rounded-full bg-[#F2E6CE] opacity-0 transition-opacity" id="radio-online-dot"></div>
</div>
</div>
<div className="mt-5 pt-5 border-t border-[#C4B08A]/20 hidden" id="card-ui">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                      Número de targeta
                    </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-card" inputmode="numeric" maxlength="19" oninput="fmtCard(this)" placeholder="1234 5678 9012 3456" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                        Caducitat
                      </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-exp" inputmode="numeric" maxlength="5" oninput="fmtExp(this)" placeholder="MM/AA" type="text"/>
</div>
<div>
<label className="block text-xs font-medium mb-1.5 text-[#2A1A0F]">
                        CVV
                      </label>
<input className="w-full bg-[#E6D5B0]/20 border border-[#C4B08A]/40 rounded-xl px-4 py-2.5 text-[#2A1A0F] text-sm outline-none transition-all placeholder:text-[#9B8A72] focus:border-[#E23F2E] focus:ring-1 focus:ring-[#E23F2E]" id="f-cvv" inputmode="numeric" maxlength="4" oninput="this.value=this.value.replace(/\D/g,'')" placeholder="123" type="text"/>
</div>
</div>
</div>
</div>
</div>

<div className="border border-[#C4B08A]/40 rounded-xl p-5 cursor-pointer transition-all hover:border-[#E23F2E]/50 group" id="opt-delivery" onclick="selPay('delivery')">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#E6D5B0]/30 text-[#E23F2E] flex items-center justify-center group-hover:bg-[#E23F2E]/10 transition-colors">
<iconify-icon icon="solar:scooter-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<span className="font-medium text-sm text-[#2A1A0F]">
                    Pagar al repartidor
                  </span>
</div>
<div className="w-5 h-5 rounded-full border border-[#C4B08A] flex items-center justify-center transition-colors" id="radio-delivery">
<div className="w-2.5 h-2.5 rounded-full bg-[#F2E6CE] opacity-0 transition-opacity" id="radio-delivery-dot"></div>
</div>
</div>
<div className="mt-5 pt-5 border-t border-[#C4B08A]/20 hidden flex-col sm:flex-row gap-4" id="delivery-sub">
<label className="flex items-center gap-3 cursor-pointer text-sm text-[#2A1A0F] group w-full sm:w-auto p-3 rounded-lg border border-[#C4B08A]/30 hover:border-[#E23F2E]/50 transition-colors">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input className="peer sr-only" name="dlv" type="radio" value="card"/>
<div className="w-4 h-4 rounded-full border border-[#C4B08A] peer-checked:border-[#E23F2E] peer-checked:bg-[#E23F2E] transition-all"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-[#F2E6CE] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
                  Targeta (datàfon)
                </label>
<label className="flex items-center gap-3 cursor-pointer text-sm text-[#2A1A0F] group w-full sm:w-auto p-3 rounded-lg border border-[#C4B08A]/30 hover:border-[#E23F2E]/50 transition-colors">
<div className="relative flex items-center justify-center w-4 h-4 shrink-0">
<input className="peer sr-only" name="dlv" type="radio" value="cash"/>
<div className="w-4 h-4 rounded-full border border-[#C4B08A] peer-checked:border-[#E23F2E] peer-checked:bg-[#E23F2E] transition-all"></div>
<div className="absolute w-1.5 h-1.5 rounded-full bg-[#F2E6CE] opacity-0 peer-checked:opacity-100 transition-opacity"></div>
</div>
                  Efectiu
                </label>
</div>
</div>
</div>
<p className="text-xs mt-3 hidden text-[#E23F2E]" id="err-2">
            Si us plau, tria una forma de pagament i el mètode exacte.
          </p>
<div className="flex gap-4 mt-8">
<button className="flex-1 py-3 rounded-full border border-[#C4B08A] text-sm font-medium text-[#2A1A0F] transition-all hover:bg-[#E6D5B0]/30" onclick="goStep(1)">
              ← Enrere
            </button>
<button className="flex-1 py-3 rounded-full text-sm font-medium text-[#F2E6CE] bg-[#E23F2E] shadow-sm transition-all hover:bg-[#B82A1F]" onclick="goStep(3)">
              Continuar →
            </button>
</div>
</div>

<div className="hidden" id="step-3">
<h2 className="font-['Lilita_One'] tracking-tight text-3xl mb-1 text-[#2A1A0F]">
            Confirmació
          </h2>
<p className="text-sm font-light mb-6 text-[#5A3E28]">
            Revisa la teva comanda abans d'enviar-la.
          </p>
<div className="space-y-4 mb-6">
<div className="rounded-xl border border-[#C4B08A]/30 p-5 bg-[#E6D5B0]/10">
<p className="text-xs uppercase tracking-widest font-normal mb-3 text-[#5A3E28]">
                Articles
              </p>
<div className="space-y-2 text-sm text-[#2A1A0F]" id="conf-items"></div>
</div>
<div className="rounded-xl border border-[#C4B08A]/30 p-5 bg-[#E6D5B0]/10">
<p className="text-xs uppercase tracking-widest font-normal mb-2 text-[#5A3E28]">
                Lliurament
              </p>
<div className="text-sm font-light leading-relaxed text-[#2A1A0F]" id="conf-address"></div>
</div>
<div className="rounded-xl border border-[#C4B08A]/30 p-5 bg-[#E6D5B0]/10">
<p className="text-xs uppercase tracking-widest font-normal mb-2 text-[#5A3E28]">
                Pagament
              </p>
<p className="text-sm font-normal text-[#2A1A0F]" id="conf-pay"></p>
</div>
</div>
<div className="flex justify-between items-center mb-8 border-t border-[#C4B08A]/30 pt-4">
<span className="font-['Lilita_One'] tracking-tight text-2xl text-[#2A1A0F]">
              Total
            </span>
<span className="font-['Lilita_One'] tracking-tight text-3xl text-[#E23F2E]" id="conf-total"></span>
</div>
<p className="text-xs mb-4 hidden text-[#E23F2E]" id="err-3">
            Hi ha hagut un error. Torna-ho a intentar.
          </p>
<div className="flex gap-4">
<button className="flex-1 py-3 rounded-full border border-[#C4B08A] text-sm font-medium text-[#2A1A0F] transition-all hover:bg-[#E6D5B0]/30" onclick="goStep(2)">
              ← Enrere
            </button>
<button className="flex-1 py-3 rounded-full text-sm font-medium text-[#F2E6CE] bg-[#E23F2E] shadow-sm transition-all hover:bg-[#B82A1F]" id="btn-place" onclick="placeOrder()">
              Confirma ✓
            </button>
</div>
</div>

<div className="hidden text-center py-8" id="step-success">
<div className="w-24 h-24 rounded-full bg-[#E23F2E]/10 text-[#E23F2E] flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="solar:check-circle-bold" width="48"></iconify-icon>
</div>
<h2 className="font-['Lilita_One'] tracking-tight text-4xl mb-3 text-[#E23F2E]">
            Gràcies!
          </h2>
<p className="text-lg tracking-tight mb-2 text-[#2A1A0F]">
            La teva comanda és en camí.
          </p>
<p className="text-sm font-light mb-1 text-[#5A3E28]">
            Temps estimat d'entrega:
            <strong className="font-medium">30–45 minuts</strong>
</p>
<p className="text-sm font-light mb-10 text-[#5A3E28]">
            El Riki et trucarà per confirmar quan surti.
          </p>
<button className="px-8 py-3 rounded-full font-medium text-sm text-[#F2E6CE] bg-[#2A1A0F] transition-all hover:bg-[#1a1009]" onclick="closeCheckout(); resetCart();">
            Tornar a l'inici
          </button>
</div>
</div>
</div>



<div className="fixed inset-0 z-[1000] flex items-center justify-center bg-[#2A1A0F]/85 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300 hidden" id="gallery-lightbox" onclick="closeLightbox(event)">
<button aria-label="Tancar" className="absolute top-6 right-6 p-2 text-[#E23F2E] hover:text-[#B82A1F] transition-colors rounded-full bg-[#F2E6CE]/10 hover:bg-[#F2E6CE]/20 z-10" onclick="closeLightbox(event, true)">
<iconify-icon icon="solar:close-square-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<button aria-label="Anterior" className="absolute left-4 md:left-8 p-3 text-[#E23F2E] hover:text-[#B82A1F] transition-colors rounded-full bg-[#F2E6CE]/10 hover:bg-[#F2E6CE]/20 z-10" onclick="changeLightboxImage(-1, event)">
<iconify-icon icon="solar:alt-arrow-left-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
<img alt="" className="max-w-[90%] max-h-[90dvh] object-contain scale-95 transition-all duration-300 ease-out" id="lightbox-img" src=""/>
<button aria-label="Següent" className="absolute right-4 md:right-8 p-3 text-[#E23F2E] hover:text-[#B82A1F] transition-colors rounded-full bg-[#F2E6CE]/10 hover:bg-[#F2E6CE]/20 z-10" onclick="changeLightboxImage(1, event)">
<iconify-icon icon="solar:alt-arrow-right-linear" style={{strokeWidth: '1.5'}} width="32"></iconify-icon>
</button>
</div>




    </>
  );
}
