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



      // State
      let items = [];
      let currentSerial = localStorage.getItem('meerex_serial') || 1001;

      // DOM Elements
      const rateInput = document.getElementById('rateInput');
      const serialInput = document.getElementById('serialInput');
      const widthInput = document.getElementById('widthInput');
      const lengthInput = document.getElementById('lengthInput');
      const previewCost = document.getElementById('previewItemCost');

      // Discount Elements
      const discountSlider = document.getElementById('discountSlider');
      const discountInput = document.getElementById('discountInput');
      const sliderLabel = document.getElementById('sliderLabel');
      const discountValuePreview = document.getElementById('discountValuePreview');
      const invoiceDiscountPercent = document.getElementById('invoiceDiscountPercent');

      // Initialize
      document.addEventListener('DOMContentLoaded', () => {
          serialInput.value = currentSerial;
          updateDate();
          setupLiveCalculation();
          setupDiscountListeners();
      });

      // Discount Logic Sync
      function setupDiscountListeners() {
          // Slider moves input
          discountSlider.addEventListener('input', (e) => {
              discountInput.value = e.target.value;
              sliderLabel.textContent = e.target.value + '%';
              recalculateAll();
          });

          // Input moves slider
          discountInput.addEventListener('input', (e) => {
              let val = parseInt(e.target.value);
              if(isNaN(val)) val = 0;
              if(val > 100) val = 100;

              discountSlider.value = val;
              sliderLabel.textContent = val + '%';
              recalculateAll();
          });
      }

      // Live calculation for the "Add Item" box
      function setupLiveCalculation() {
          [widthInput, lengthInput, rateInput].forEach(input => {
              input.addEventListener('input', () => {
                  const w = parseFloat(widthInput.value) || 0;
                  const l = parseFloat(lengthInput.value) || 0;
                  const r = parseFloat(rateInput.value) || 0;
                  const cost = w * l * r;
                  previewCost.textContent = cost.toFixed(2);
              });
          });
      }

      // Add Item to Invoice
      function addItem() {
          const w = parseFloat(widthInput.value);
          const l = parseFloat(lengthInput.value);
          const r = parseFloat(rateInput.value);

          if (!w || !l || !r) {
              alert("Please enter valid Width and Length");
              return;
          }

          const item = {
              id: Date.now(),
              width: w,
              length: l,
              area: (w * l).toFixed(2),
              rate: r,
              amount: (w * l * r).toFixed(2)
          };

          items.push(item);

          // Clear inputs
          widthInput.value = '';
          lengthInput.value = '';
          previewCost.textContent = '0.00';
          widthInput.focus();

          renderItems();
          recalculateAll();
      }

      // Remove Item
      function removeItem(id) {
          items = items.filter(item => item.id !== id);
          renderItems();
          recalculateAll();
      }

      // Render Table Rows
      function renderItems() {
          const tbody = document.getElementById('invoiceItems');
          const emptyState = document.getElementById('emptyState');

          if (items.length === 0) {
              tbody.innerHTML = '';
              tbody.appendChild(emptyState);
              emptyState.style.display = 'table-row';
              return;
          }

          tbody.innerHTML = '';

          items.forEach((item, index) => {
              const tr = document.createElement('tr');
              tr.className = 'border-b border-slate-100 last:border-0 hover:bg-slate-50 transition-colors group';
              tr.innerHTML = `
                  <td class="py-3 text-slate-500 font-medium">${index + 1}</td>
                  <td class="py-3 text-slate-900 font-medium">Positive Film <span class="text-slate-400 font-normal ml-1">(${item.width}" x ${item.length}")</span></td>
                  <td class="py-3 text-right text-slate-600">${item.area} sq.in</td>
                  <td class="py-3 text-right text-slate-600">PKR ${item.rate}</td>
                  <td class="py-3 text-right text-slate-900 font-semibold">PKR ${item.amount}</td>
                  <td class="no-print py-3 text-right">
                      <button onclick="removeItem(${item.id})" class="text-slate-300 hover:text-red-500 transition-colors p-1 opacity-0 group-hover:opacity-100">
                          <iconify-icon icon="solar:trash-bin-linear" width="16"></iconify-icon>
                      </button>
                  </td>
              `;
              tbody.appendChild(tr);
          });
      }

      // Recalculate Totals
      function recalculateAll() {
          let subtotal = 0;

          items.forEach(item => {
              subtotal += parseFloat(item.amount);
          });

          // Calculate Discount Percentage
          let percent = parseFloat(discountInput.value) || 0;
          if(percent > 100) percent = 100;

          const discountAmount = subtotal * (percent / 100);
          const total = subtotal - discountAmount;

          // Update UI
          document.getElementById('displaySubtotal').textContent = subtotal.toFixed(2);
          document.getElementById('displayDiscount').textContent = discountAmount.toFixed(2);
          document.getElementById('discountValuePreview').textContent = discountAmount.toFixed(2);
          document.getElementById('displayTotal').textContent = (total > 0 ? total : 0).toFixed(2);

          // Update Invoice Discount Text
          invoiceDiscountPercent.textContent = percent;
      }

      // Update Client Info Live
      function updatePreview() {
          const name = document.getElementById('clientName').value;
          const details = document.getElementById('clientDetails').value;
          const serial = document.getElementById('serialInput').value;

          document.getElementById('previewClientName').textContent = name || 'Client Name';
          document.getElementById('previewClientDetails').textContent = details || '';
          document.getElementById('displaySerial').textContent = '#' + serial;
      }

      // Update Date
      function updateDate() {
          const date = new Date();
          const options = { year: 'numeric', month: 'short', day: 'numeric' };
          document.getElementById('displayDate').textContent = date.toLocaleDateString('en-US', options);
      }

      // Printing & Serial Logic
      window.addEventListener('afterprint', () => {
          // Increment serial number after print
          const current = parseInt(serialInput.value);
          const next = current + 1;
          serialInput.value = next;
          localStorage.setItem('meerex_serial', next);
          updatePreview();
      });
    


      function clearAll(){if(items.length>0&&confirm('Clear all items?')){items=[];renderItems();recalculateAll();}}
    
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
      

<nav className="no-print border-b border-gray-200 bg-white/80 backdrop-blur-md sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 text-slate-900">
<div className="w-8 h-8 bg-slate-900 rounded-lg flex items-center justify-center text-white">
<span className="font-semibold text-lg tracking-tighter">M</span>
</div>
<span className="font-semibold text-lg tracking-tight">
            Meerex Scanners
          </span>
</div>
<div className="flex items-center gap-4">
<button className="group flex items-center gap-2 bg-white text-slate-600 hover:text-red-600 hover:bg-red-50 border border-slate-200 px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm" onclick="clearAll()">
<iconify-icon icon="solar:trash-bin-trash-linear" width="18"></iconify-icon>
<span>Clear</span>
</button>
<button className="group flex items-center gap-2 bg-slate-900 hover:bg-slate-800 text-white px-4 py-2 rounded-md text-sm font-medium transition-all shadow-sm ring-1 ring-slate-900" onclick="window.print()">
<iconify-icon icon="solar:printer-linear" strokeWidth="1.5" width="18"></iconify-icon>
<span>Print Invoice</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow max-w-7xl mx-auto w-full p-4 sm:p-6 lg:p-8 grid grid-cols-1 lg:grid-cols-12 gap-8" id="app-container">

<div className="no-print lg:col-span-4 flex flex-col gap-6">

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-slate-900 font-medium tracking-tight">
              Configuration
            </h2>
<iconify-icon className="text-slate-400" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">
                Rate (per inch)
              </label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                  PKR
                </span>
<input className="w-full pl-11 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-colors placeholder-slate-400 font-medium" id="rateInput" oninput="recalculateAll()" step="0.1" type="number" value="2"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5 uppercase tracking-wider">
                Serial No.
              </label>
<div className="relative">
<span className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400 text-sm">
                  #
                </span>
<input className="w-full pl-7 pr-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-colors font-medium" id="serialInput" type="number"/>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-slate-900 font-medium tracking-tight">
              Client Details
            </h2>
<iconify-icon className="text-slate-400" icon="solar:user-circle-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">
                Client Name / Company
              </label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-colors placeholder-slate-400" id="clientName" oninput="updatePreview()" placeholder="Enter client name..." type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">
                Contact / Address (Optional)
              </label>
<input className="w-full px-3 py-2 bg-gray-50 border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-colors placeholder-slate-400" id="clientDetails" oninput="updatePreview()" placeholder="Phone or address..." type="text"/>
</div>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5 ring-1 ring-slate-900/5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-slate-900 font-medium tracking-tight">
              Add Positive Film
            </h2>
<iconify-icon className="text-slate-400" icon="solar:ruler-pen-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="grid grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">
                Width (in)
              </label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors font-medium" id="widthInput" placeholder="0" type="number"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-500 mb-1.5">
                Length (in)
              </label>
<input className="w-full px-3 py-2 bg-white border border-gray-200 rounded-lg text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:border-blue-500 transition-colors font-medium" id="lengthInput" placeholder="0" type="number"/>
</div>
</div>
<div className="bg-slate-50 rounded-lg p-3 mb-4 flex justify-between items-center border border-slate-100">
<span className="text-xs text-slate-500 font-medium">
              Calculated Cost:
            </span>
<span className="text-sm font-semibold text-slate-900">
              PKR
              <span id="previewItemCost">0.00</span>
</span>
</div>
<button className="w-full flex items-center justify-center gap-2 bg-slate-900 hover:bg-slate-800 text-white py-2.5 rounded-lg text-sm font-medium transition-all shadow-md active:scale-[0.98]" onclick="addItem()">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5" width="18"></iconify-icon>
            Add to Invoice
          </button>
</div>

<div className="bg-white rounded-xl border border-gray-200 shadow-sm p-5">
<div className="flex items-center justify-between mb-4">
<h2 className="text-slate-900 font-medium tracking-tight">Discount</h2>
<iconify-icon className="text-slate-400" icon="solar:tag-price-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col gap-5">
<div className="flex items-end gap-3">
<div className="flex-grow">
<label className="block text-xs font-medium text-slate-500 mb-2 flex justify-between">
<span>Percentage</span>
<span className="text-slate-900 font-semibold" id="sliderLabel">
                    0%
                  </span>
</label>
<input className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-slate-900" id="discountSlider" max="100" min="0" step="1" type="range" value="0"/>
</div>
<div className="w-20 relative">
<input className="w-full pl-3 pr-6 py-1.5 bg-white border border-gray-200 rounded text-sm text-slate-900 focus:outline-none focus:ring-2 focus:ring-slate-900/10 focus:border-slate-900 transition-colors font-medium text-center" id="discountInput" max="100" min="0" type="number" value="0"/>
<span className="absolute right-2 top-1/2 -translate-y-1/2 text-slate-400 text-xs font-medium">
                  %
                </span>
</div>
</div>
<div className="bg-green-50 rounded-lg px-3 py-2 flex justify-between items-center border border-green-100">
<span className="text-xs text-green-700 font-medium">
                Discount Amount:
              </span>
<span className="text-sm font-semibold text-green-700">
                - PKR
                <span id="discountValuePreview">0.00</span>
</span>
</div>
</div>
</div>
</div>

<div className="lg:col-span-8">
<div className="print-area bg-white shadow-lg border border-gray-200 rounded-xl min-h-[1123px] w-full p-8 md:p-12 relative flex flex-col justify-between">

<div>
<div className="flex justify-between items-start mb-12">
<div>
<div className="flex items-center gap-2.5 mb-2">
<div className="w-8 h-8 bg-black text-white flex items-center justify-center rounded text-sm font-bold">
                    M
                  </div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 uppercase">
                    Meerex Scanners
                  </h1>
</div>
<p className="text-sm text-slate-500 font-medium">
                  Positive Printing Solutions
                </p>
<div className="mt-4 text-xs text-slate-400 leading-relaxed">
                  kashmir road, near learning zone
                  <br/>
                  MEEREX SCANNERS
                  <br/>
                  meerexscanner@gmail.com
                </div>
</div>
<div className="text-right">
<h2 className="text-4xl font-light text-slate-200 tracking-tight mb-4">
                  INVOICE
                </h2>
<div className="space-y-1">
<div className="flex items-center justify-end gap-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Date
                    </span>
<span className="text-sm font-semibold text-slate-900" id="displayDate">
                      Oct 24, 2023
                    </span>
</div>
<div className="flex items-center justify-end gap-4">
<span className="text-xs font-medium text-slate-400 uppercase tracking-wide">
                      Invoice #
                    </span>
<span className="text-sm font-semibold text-slate-900" id="displaySerial">
                      #0000
                    </span>
</div>
</div>
</div>
</div>

<div className="mb-10 p-6 bg-slate-50 rounded-lg border border-slate-100">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wide block mb-2">
                Bill To
              </span>
<h3 className="text-lg font-semibold text-slate-900 mb-1" id="previewClientName">
                Client Name
              </h3>
<p className="text-sm text-slate-500" id="previewClientDetails"></p>
</div>

<table className="w-full mb-8">
<thead>
<tr className="border-b border-slate-200">
<th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider w-16">
                    No.
                  </th>
<th className="text-left py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Description (Dimensions)
                  </th>
<th className="text-right py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Area
                  </th>
<th className="text-right py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Rate
                  </th>
<th className="text-right py-3 text-xs font-semibold text-slate-500 uppercase tracking-wider">
                    Amount
                  </th>
<th className="no-print w-8"></th>
</tr>
</thead>
<tbody className="text-sm text-slate-700" id="invoiceItems">

<tr id="emptyState">
<td className="py-8 text-center text-slate-400 text-sm italic border-b border-dashed border-slate-200" colspan="5">
                    No items added yet. Add dimensions on the left.
                  </td>
</tr>
</tbody>
</table>
</div>

<div>
<div className="flex justify-end mb-12">
<div className="w-full md:w-1/2 lg:w-5/12 space-y-3">
<div className="flex justify-between items-center text-sm text-slate-500">
<span>Subtotal</span>
<span className="font-medium text-slate-900">
                    PKR
                    <span id="displaySubtotal">0.00</span>
</span>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span>
                    Discount (
                    <span id="invoiceDiscountPercent">0</span>
                    %)
                  </span>
<span className="text-red-500 font-medium">
                    - PKR
                    <span id="displayDiscount">0.00</span>
</span>
</div>
<div className="border-t border-slate-200 pt-3 flex justify-between items-center">
<span className="text-base font-semibold text-slate-900">
                    Total Due
                  </span>
<span className="text-xl font-bold text-slate-900 tracking-tight">
                    PKR
                    <span id="displayTotal">0.00</span>
</span>
</div>
</div>
</div>
<div className="grid grid-cols-2 gap-8 border-t border-slate-100 pt-8">
<div>
<h4 className="text-xs font-semibold text-slate-900 uppercase tracking-wide mb-2">
                  Payment Terms
                </h4>
<p className="text-xs text-slate-500 leading-relaxed">
                  Please pay upon receipt. Thank you for your business!
                </p>
</div>
<div className="text-right">
<div className="h-12"></div>
<p className="text-xs font-semibold text-slate-900 uppercase tracking-wide border-t border-slate-300 inline-block pt-2 px-4">
                  Authorized Signature
                </p>
</div>
</div>
</div>
</div>
</div>
</main>



    </>
  );
}
