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



          (function () {
            function pad2(n) {
              return String(n).padStart(2, "0");
            }

            function toISOFromDMY(dmy) {
              var m = /^(\d{2})\.(\d{2})\.(\d{4})$/.exec(dmy);
              if (!m) return "";
              var dd = m[1], mm = m[2], yyyy = m[3];
              return yyyy + "-" + mm + "-" + dd;
            }

            function isValidDMY(dmy) {
              var iso = toISOFromDMY(dmy);
              if (!iso) return false;
              var parts = iso.split("-");
              var yyyy = parseInt(parts[0], 10);
              var mm = parseInt(parts[1], 10);
              var dd = parseInt(parts[2], 10);
              var d = new Date(yyyy mm - 1, dd);
              return d.getFullYear() === yyyy && d.getMonth() === (mm - 1) && d.getDate() === dd;
            }

            function formatDMYInput(input) {
              var v = input.value.replace(/\D/g, "").slice(0, 8);
              var out = "";
              if (v.length <= 2) out = v;
              else if (v.length <= 4) out = v.slice(0, 2) + "." + v.slice(2);
              else out = v.slice(0, 2) + "." + v.slice(2, 4) + "." + v.slice(4);
              input.value = out;
            }

            function minDMY() {
              var d = new Date();
              return pad2(d.getDate()) + "." + pad2(d.getMonth() + 1) + "." + d.getFullYear();
            }

            function wireDateInput() {
              var dateInput = document.getElementById("move-date");
              if (!dateInput) return;

              dateInput.addEventListener("input", function () {
                formatDMYInput(dateInput);
              });

              dateInput.addEventListener("blur", function () {
                if (!dateInput.value) return;

                if (!isValidDMY(dateInput.value)) {
                  dateInput.value = "";
                  return;
                }

                var iso = toISOFromDMY(dateInput.value);
                var minIso = toISOFromDMY(minDMY());
                if (minIso && iso && iso < minIso) {
                  dateInput.value = minDMY();
                }
              });

              var params = new URLSearchParams(window.location.search);
              var qDate = params.get("date");
              if (qDate) {
                var dmy = qDate;
                if (/^\d{4}-\d{2}-\d{2}$/.test(qDate)) {
                  var p = qDate.split("-");
                  dmy = p[2] + "." + p[1] + "." + p[0];
                }
                if (isValidDMY(dmy)) dateInput.value = dmy;
              } else {
                dateInput.placeholder = "dd.mm.yyyy";
              }
            }

            function normalizeOnSubmit() {
              var form = document.querySelector('form[action="/umzugunternehmens"]');
              if (!form) return;

              form.addEventListener("submit", function () {
                var dateInput = document.getElementById("move-date");
                if (!dateInput || !dateInput.value) return;

                if (isValidDMY(dateInput.value)) {
                  var iso = toISOFromDMY(dateInput.value);
                  dateInput.value = iso;
                }
              });
            }

            function restoreReadableCriteriaOnResultsPage() {
              if (!/\/umzugunternehmens\/?$/.test(window.location.pathname)) return;

              var params = new URLSearchParams(window.location.search);
              var from = (params.get("from") || "").trim();
              var to = (params.get("to") || "").trim();
              var category = (params.get("category") || "").trim();
              var date = (params.get("date") || "").trim();

              var fromEl = document.getElementById("from-address");
              var toEl = document.getElementById("to-address");
              var catEl = document.getElementById("move-category");
              var dateEl = document.getElementById("move-date");

              if (fromEl && from) fromEl.value = from;
              if (toEl && to) toEl.value = to;
              if (catEl) catEl.value = category;

              if (dateEl && date) {
 var dmy = date;
                if (/^\d{4}-\d{2}-\d{2}$/.test(date)) {
                  var p = date.split("-");
                  dmy = p[2] + "." + p[1] + "." + p[0];
                }
                if (isValidDMY(dmy)) dateEl.value = dmy;
              }
            }

            wireDateInput();
            normalizeOnSubmit();
            restoreReadableCriteriaOnResultsPage();
          })();
        


    var currentSelectedSlot = null;
    var uploadedLogoData = null;

    function openLogoModal(slotId) {
      currentSelectedSlot = slotId;
      document.getElementById('selectedSlotDisplay').textContent = slotId.replace('slot-', '#');
      document.getElementById('logoAdvertiseModal').classList.remove('hidden');
      document.body.style.overflow = 'hidden';
      
      // Reset file input and preview
      document.getElementById('modalLogoFile').value = '';
      document.getElementById('modalPreviewWrap').classList.add('hidden');
      document.getElementById('modalLogoPreview').src = '';
      uploadedLogoData = null;
    }

    function closeLogoModal() {
      document.getElementById('logoAdvertiseModal').classList.add('hidden');
      document.body.style.overflow = '';
    }

    function openDemoPaymentModal() {
      document.getElementById('demoPaymentModal').classList.remove('hidden');
    }

    function closeDemoPaymentModal() {
      document.getElementById('demoPaymentModal').classList.add('hidden');
    }

    function formatCardNumber(input) {
      let value = input.value.replace(/\s/g, '').replace(/\D/g, '');
      let formatted = value.match(/.{1,4}/g)?.join(' ') || value;
      input.value = formatted.substring(0, 19);
    }

    function formatExpiry(input) {
      let value = input.value.replace(/\D/g, '');
      if (value.length >= 2) {
        value = value.substring(0, 2) + '/' + value.substring(2, 4);
      }
      input.value = value;
    }

    function activateLogoSlot(slotId, logoUrl) {
      const targetSlot = document.querySelector('[data-slot-id="' + slotId + '"]');
      if (!targetSlot) return;
      
      const expiryTime = Date.now() + (7 * 24 * 60 * 60 * 1000);
      targetSlot.setAttribute('data-slot-status', 'active');
      targetSlot.setAttribute('data-slot-expiry', expiryTime.toString());
      
      const emptyContent = targetSlot.querySelector('.slot-empty-content');
      if (emptyContent) {
        emptyContent.classList.add('hidden');
      }
      
      const img = targetSlot.querySelector('.slot-logo-img');
      if (img && logoUrl) {
        img.src = logoUrl;
        img.classList.remove('hidden');
      }
      
      // Keep same border style - no green highlight
      targetSlot.classList.remove('border-dashed');
      targetSlot.classList.add('border-solid');
    }

    function processPayment() {
      const btn = document.getElementById('processPaymentBtn');
      const cardNumber = document.getElementById('demoCardNumber').value.replace(/\s/g, '');
      const expiry = document.getElementById('demoExpiry').value;
      const cvc = document.getElementById('demoCVC').value;
      const name = document.getElementById('demoName').value;

      if (cardNumber.length < 16) {
        alert('Please enter a valid card number');
        return;
      }
      if (expiry.length < 5) {
        alert('Please enter a valid expiry date');
        return;
      }
      if (cvc.length < 3) {
        alert('Please enter a valid CVC');
        return;
      }
      if (name.length < 2) {
        alert('Please enter cardholder name');
        return;
      }

      btn.disabled = true;
      btn.innerHTML = '<svg class="animate-spin h-4 w-4" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing...';

      setTimeout(function() {
        document.getElementById('orderId').textContent = Math.random().toString(36).substring(2, 8).toUpperCase();
        document.getElementById('successSlotDisplay').textContent = currentSelectedSlot ? currentSelectedSlot.replace('slot-', '#') : '-';
        
        // Activate the logo slot with uploaded image
        if (currentSelectedSlot) {
          var logoUrl = uploadedLogoData || 'https://images.unsplash.com/photo-1599305445671-ac291c95aaa9?w=200&h=100&fit=crop&q=80';
          activateLogoSlot(currentSelectedSlot, logoUrl);
        }
        
        closeDemoPaymentModal();
        document.getElementById('paymentSuccessModal').classList.remove('hidden');
        btn.disabled = false;
        btn.innerHTML = '<svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"><rect width="18" height="11" x="3" y="11" rx="2" ry="2"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> Pay €100.00';
        
        // Reset form
        document.getElementById('demoCardNumber').value = '';
        document.getElementById('demoExpiry').value = '';
        document.getElementById('demoCVC').value = '';
        document.getElementById('demoName').value = '';
      }, 2000);
    }

    function closeAllModals() {
      document.getElementById('paymentSuccessModal').classList.add('hidden');
      closeLogoModal();
      document.body.style.overflow = '';
      currentSelectedSlot = null;
      uploadedLogoData = null;
    }

    document.getElementById('modalLogoFile').addEventListener('change', function() {
      const file = this.files && this.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = function() {
        document.getElementById('modalPreviewWrap').classList.remove('hidden');
        document.getElementById('modalLogoPreview').src = reader.result;
        document.getElementById('modalFileMeta').textContent = file.name + ' • ' + Math.round(file.size / 1024) + ' KB';
        uploadedLogoData = reader.result;
      };
      reader.readAsDataURL(file);
    });

    document.addEventListener('keydown', function(e) {
      if (e.key === 'Escape') {
        closeLogoModal();
        closeDemoPaymentModal();
        closeAllModals();
      }
    });

    // Check expiry for all slots
    (function() {
      function checkAllExpiry() {
        document.querySelectorAll('[data-slot-id]').forEach(function(slot) {
          const expiry = slot.getAttribute('data-slot-expiry');
          if (expiry && Date.now() > parseInt(expiry)) {
            slot.setAttribute('data-slot-status', 'empty');
            slot.removeAttribute('data-slot-expiry');
            const emptyContent = slot.querySelector('.slot-empty-content');
            if (emptyContent) emptyContent.classList.remove('hidden');
            const img = slot.querySelector('.slot-logo-img');
            if (img) {
              img.classList.add('hidden');
              img.src = '';
            }
            slot.classList.add('border-dashed');
            slot.classList.remove('border-solid');
          }
        });
      }
      
      setInterval(checkAllExpiry, 60000);
      checkAllExpiry();
    })();
  


    // Lucide icons
    if (window.lucide) {
      lucide.createIcons();
    }

    // Footer year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Google Places Autocomplete
    function initAutocomplete() {
      try {
        const fromInput = document.getElementById('from-address');
        const toInput = document.getElementById('to-address');

        if (!fromInput || !toInput || !window.google || !google.maps || !google.maps.places) return;

        const options = {
          types: ['geocode'],
          componentRestrictions: { country: ['de'] }
        };

        const fromAutocomplete = new google.maps.places.Autocomplete(fromInput, options);
        const toAutocomplete = new google.maps.places.Autocomplete(toInput, options);

        // Improve UX: prevent Enter from submitting prematurely while selecting suggestions
        [fromInput, toInput].forEach((el) => {
          el.addEventListener('keydown', (e) => {
            if (e.key === 'Enter') e.preventDefault();
          });
        });

        // Optional: store place IDs for later use
        fromAutocomplete.addListener('place_changed', () => {
          const place = fromAutocomplete.getPlace();
          fromInput.dataset.placeId = place?.place_id || '';
        });

        toAutocomplete.addListener('place_changed', () => {
          const place = toAutocomplete.getPlace();
          toInput.dataset.placeId = place?.place_id || '';
        });
      } catch (e) {
        // Silent fail to keep page usable even if Maps API is blocked
        console.warn('Autocomplete init failed:', e);
      }
    }

    // Expose callback for Google Maps script
    window.initAutocomplete = initAutocomplete;
  
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
      

<header className="w-full border-neutral-100 border-b">
<div className="mx-auto max-w-6xl px-6">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-6">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-neutral-900 flex items-center justify-center" style={{}}>
<span className="text-white text-sm font-semibold font-geist" style={{}}>UP</span>
</div>
<span className="text-sm font-semibold text-neutral-900 font-geist" style={{}}>Umzugs Preisvergleich</span>
</div>
</div>
<nav className="hidden lg:flex gap-6 gap-x-6 gap-y-6 items-center">
<a className="hover:text-neutral-900 flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist" href="/home">Homepage</a><a className="hover:text-neutral-900 flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist" href="/umzugunternehmens">Umzugsunternehmens</a><a className="hover:text-neutral-900 flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist" href="/helpcenter">HelpCenter</a>
<a className="hover:text-neutral-900 flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist" href="/forum">Forums</a>
<a className="hover:text-neutral-900 flex items-center gap-2 text-sm font-medium text-neutral-700 font-geist" href="/blog">Bloggen </a>
</nav>
<div className="flex items-center gap-3">
<a className="inline-flex items-center hover:bg-neutral-800 text-sm font-medium text-white font-geist bg-neutral-900 rounded-lg pt-2 pr-4 pb-2 pl-4" href="/login">Register</a><a className="inline-flex items-center hover:bg-neutral-800 text-sm font-medium text-white font-geist bg-neutral-900 rounded-lg pt-2 pr-4 pb-2 pl-4" href="/login">Login</a>
</div>
</div>
</div>
</header>
<main className="max-w-screen-xl mr-auto ml-auto pr-6 pl-6">

<section className="pt-10">
<div className="relative overflow-hidden rounded-2xl bg-gradient-to-r from-indigo-700 via-cyan-700 to-cyan-600">
<div className="absolute inset-0 opacity-25">
<div className="absolute -right-24 -top-24 h-72 w-72 rounded-full bg-white/20 blur-2xl"></div>
<div className="absolute -left-28 -bottom-28 h-80 w-80 rounded-full bg-white/10 blur-2xl"></div>
<div className="absolute right-20 top-16 h-1 w-1 rounded-full bg-white/50"></div>
<div className="absolute right-56 top-24 h-1 w-1 rounded-full bg-white/50"></div>
<div className="absolute right-32 top-44 h-1 w-1 rounded-full bg-white/50"></div>
<div className="absolute right-72 top-60 h-1 w-1 rounded-full bg-white/50"></div>
</div>
<div className="pt-10 pr-10 pb-10 pl-10 relative">
<div className="grid grid-cols-12 gap-8 items-start">
<div className="col-span-12 lg:col-span-7">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs font-medium text-white/90 font-geist" style={{}}>
<svg 0="" 24="" 24"="" className="lucide lucide-sparkles h-4 w-4" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox0="" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
        MOVING PRICE COMPARISON • VERIFIED PARTNERS
      </div>
<h1 className="mt-5 text-4xl tracking-tight text-white leading-tight font-jakarta font-semibold" style={{}}>
        Compare &amp; book free<br/>
        moving offers in minutes
      </h1>
<p className="mt-4 text-lg text-white/90 max-w-xl font-geist" style={{}}>
        Get tailored quotes from trusted moving companies. Transparent pricing, fast booking, and expert guidance.
      </p>
<div className="mt-6 flex items-center gap-2 text-sm font-medium text-white/90 font-geist" style={{}}>
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
        Verified movers
        <span className="mx-2 text-white/40 font-geist" style={{}}>•</span>
<svg className="lucide lucide-clock h-4 w-4" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
        Same-day quotes
      </div>

<div className="bg-white/10 rounded-xl mt-8 pt-3 pr-3 pb-3 pl-3 backdrop-blur">
<form action="/umzugunternehmens" className="grid grid-cols-1 gap-3 lg:grid-cols-12 lg:items-end" method="GET">

<div className="lg:col-span-3">
<label className="block text-xs font-medium text-white/90 font-geist" htmlFor="from-address">From (Address)</label>
<div className="mt-2 relative">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/85">
<svg className="lucide lucide-map-pin h-4 w-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z"></path><circle cx="12" cy="10" r="3"></circle></svg>
</div>
<input autocomplete="off" className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 font-geist outline-none focus:ring-2 focus:ring-white/15" id="from-address" name="from" placeholder="e.g. Alexanderplatz 1, Berlin" style={{}} type="text"/>
</div>
</div>

<div className="lg:col-span-3">
<label className="block text-xs font-medium text-white/90 font-geist" htmlFor="to-address" style={{}}>To (Address)</label>
<div className="mt-2 relative">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/85">
<svg className="lucide lucide-flag h-4 w-4" data-lucide="flag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 22V4"></path><path d="M4 15s1-1 4-1 5 2 8 2 4-1 4-1V3s-1 1-4 1-5-2-8-2-4 1-4 1z"></path></svg>
</div>
<input autocomplete="off" className="placeholder:text-white/40 outline-none focus:ring-2 focus:ring-white/15 text-sm text-white font-geist bg-white/10 w-full border-white/10 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-10" id="to-address" name="to" placeholder="e.g. Marienplatz 1, München" type="text"/>
</div>
</div>

<div className="lg:col-span-3">
<label className="block text-xs font-medium text-white/90 font-geist" htmlFor="move-category" style={{}}>Category</label>
<div className="mt-2 relative">
<select className="w-full appearance-none rounded-lg bg-white/10 border border-white/10 px-4 py-2.5 pr-10 text-sm text-white font-geist outline-none focus:ring-2 focus:ring-white/15" id="move-category" name="category" style={{}}>
<option selected="" style={{color: '#0f172a'}} value="">All Categories</option>
<option style={{color: '#0f172a'}} value="wohnungsumzug">Wohnungsumzug</option>
<option style={{color: '#0f172a'}} value="hausumzug">Hausumzug</option>
<option style={{color: '#0f172a'}} value="buero-umzug">Büro/Business Umzug</option>
<option style={{color: '#0f172a'}} value="fernumzug">Fernumzug</option>
<option style={{color: '#0f172a'}} value="international">International</option>
<option style={{color: '#0f172a'}} value="packservice">Packservice</option>
<option style={{color: '#0f172a'}} value="moebelmontage">Möbelmontage</option>
<option style={{color: '#0f172a'}} value="einlagerung">Einlagerung</option>
</select>
<div className="pointer-events-none absolute inset-y-0 right-3 flex items-center text-white/85">
<svg className="lucide lucide-chevron-down h-4 w-4" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</div>
</div>
</div>

<div className="lg:col-span-2">
<label className="block text-xs font-medium text-white/90 font-geist" htmlFor="move-date" style={{}}>Date</label>
<div className="mt-2 relative">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-white/85">
<svg className="lucide lucide-calendar h-4 w-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
</div>
<input autocomplete="off" className="w-full rounded-lg bg-white/10 border border-white/10 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-white/40 font-geist outline-none focus:ring-2 focus:ring-white/15" id="move-date" inputmode="numeric" name="date" placeholder="dd.mm.yyyy" style={{}} type="text"/>
</div>
</div>

<div className="lg:col-span-1">

<button className="inline-flex hover:bg-white/90 transition-colors text-sm font-medium text-slate-900 font-geist bg-white w-full rounded-lg pt-2.5 pr-4 pb-2.5 pl-4 gap-x-2 gap-y-2 items-center justify-center" type="submit">
<svg className="lucide lucide-search h-4 w-4" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.3-4.3"></path><circle cx="11" cy="11" r="8"></circle></svg>
              Search
            </button>
</div>
<div className="lg:col-span-12">
<p className="mt-1 text-xs text-white/85 font-geist" style={{}}>
              After searching, you will be redirected to <span className="font-medium text-white font-geist" style={{}}>/umzugunternehmens</span> and your criteria will be shown above the results.
            </p>
</div>
</form>

</div>
</div>
<div className="hidden lg:block col-span-5 relative min-h-[18rem]">
<div className="absolute right-6 top-2">
<div className="rounded-full bg-white/15 p-2">
<div className="h-10 w-10 rounded-full bg-white/20 flex items-center justify-center">
<svg className="lucide lucide-truck h-5 w-5 text-white" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
</div>
</div>
<div className="absolute right-14 top-16">
<div className="relative">
<div className="absolute right-6 top-6 h-24 w-24 rounded-full bg-white/20 ring-4 ring-white/10 flex items-center justify-center overflow-hidden">
<img alt="avatar" className="h-full w-full object-cover opacity-95" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="absolute right-28 top-24 h-12 w-12 rounded-full bg-white/20 ring-4 ring-white/10 overflow-hidden">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="absolute right-0 top-28 h-12 w-12 rounded-full bg-white/20 ring-4 ring-white/10 overflow-hidden">
<img alt="avatar" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
</div>
<div className="absolute right-10 top-28 h-10 w-10 rounded-full bg-blue-500 ring-4 ring-white/15 flex items-center justify-center">
<svg className="lucide lucide-check h-5 w-5 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="absolute right-32 top-6 rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
<div className="text-xs font-medium text-white/90 font-geist" style={{}}>Avg. savings</div>
<div className="text-lg font-semibold tracking-tight text-white font-geist" style={{}}>18%</div>
</div>
<div className="absolute right-2 top-8 rounded-xl bg-white/15 px-3 py-2 backdrop-blur">
<div className="text-xs font-medium text-white/90 font-geist" style={{}}>Quotes</div>
<div className="text-lg font-semibold tracking-tight text-white font-geist" style={{}}>3–7</div>
</div>
</div>
</div>
<div className="absolute right-6 bottom-6 rounded-xl bg-white/10 px-4 py-3 backdrop-blur border border-white/10">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-white/15 flex items-center justify-center">
<svg className="lucide lucide-mouse-pointer-click h-4 w-4 text-white" data-lucide="mouse-pointer-click" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 4.1 12 6"></path><path d="m5.1 8-2.9-.8"></path><path d="m6 12-1.9 2"></path><path d="M7.2 2.2 8 5.1"></path><path d="M9.037 9.69a.498.498 0 0 1 .653-.653l11 4.5a.5.5 0 0 1-.074.949l-4.349 1.041a1 1 0 0 0-.74.739l-1.04 4.35a.5.5 0 0 1-.95.074z"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold text-white tracking-tight font-geist" style={{}}>Instant comparison</div>
<div className="text-sm text-white/85 font-geist" style={{}}>No hidden fees</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-start justify-between">
<div className="h-9 w-9 rounded-lg bg-indigo-50 flex items-center justify-center">
<svg className="lucide lucide-list-checks h-4 w-4 text-indigo-700" data-lucide="list-checks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13 5h8"></path><path d="M13 12h8"></path><path d="M13 19h8"></path><path d="m3 17 2 2 4-4"></path><path d="m3 7 2 2 4-4"></path></svg>
</div>
<svg className="lucide lucide-sparkles h-4 w-4 text-slate-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="mt-4 text-sm font-semibold text-neutral-900 tracking-tight font-geist" style={{}}>Request offers</div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Tell us about your move and get matched with movers.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-start justify-between">
<div className="h-9 w-9 rounded-lg bg-cyan-50 flex items-center justify-center">
<svg className="lucide lucide-message-circle-question h-4 w-4 text-blue-700" data-lucide="message-circle-question" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</div>
<svg className="lucide lucide-sparkles h-4 w-4 text-slate-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="mt-4 text-sm font-semibold text-neutral-900 tracking-tight font-geist" style={{}}>Compare prices</div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Review services, ratings, and transparent pricing.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-start justify-between">
<div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">
<svg className="lucide lucide-calendar-check h-4 w-4 text-emerald-700" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<svg className="lucide lucide-sparkles h-4 w-4 text-slate-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="mt-4 text-sm font-semibold text-neutral-900 tracking-tight font-geist" style={{}}>Book a mover</div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Choose your best fit and confirm your moving date.</p>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-start justify-between">
<div className="h-9 w-9 rounded-lg bg-violet-50 flex items-center justify-center">
<svg className="lucide lucide-badge-percent h-4 w-4 text-violet-700" data-lucide="badge-percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m15 9-6 6"></path><path d="M9 9h.01"></path><path d="M15 15h.01"></path></svg>
</div>
<svg className="lucide lucide-sparkles h-4 w-4 text-slate-300" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="mt-4 text-sm font-semibold text-neutral-900 tracking-tight font-geist" style={{}}>Save money</div>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Secure competitive rates from verified partners.</p>
</div>
</div>
</section>

<section className="mt-10">
<div className="bg-neutral-50 border-neutral-100 border rounded-2xl pt-10 pr-10 pb-10 pl-10">
<div className="text-center">
<h2 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-semibold">Trusted by movers across Germany</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist">Compare offers from established moving companies and local specialists.</p>
</div>
<div className="border-neutral-200 border-t mt-6 pt-6">
<div aria-label="Paid logo slots" className="grid grid-cols-2 gap-4 sm:grid-cols-3 lg:grid-cols-6" data-logo-slots-grid="">
<button aria-label="Buy logo slot" className="border-dashed flex hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer text-xs font-medium text-neutral-500 font-geist bg-white/60 h-14 border-neutral-300 border rounded-lg items-center justify-center" data-slot-expiry="" data-slot-id="slot-1" data-slot-status="empty" onclick="openLogoModal('slot-1')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (€100/week)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
<button aria-label="Buy logo slot" className="h-14 rounded-lg border border-dashed border-neutral-300 bg-white/60 flex items-center justify-center text-xs font-medium text-neutral-500 font-geist hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer" data-slot-id="slot-2" data-slot-status="empty" onclick="openLogoModal('slot-2')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (paid)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
<button aria-label="Buy logo slot" className="h-14 rounded-lg border border-dashed border-neutral-300 bg-white/60 flex items-center justify-center text-xs font-medium text-neutral-500 font-geist hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer" data-slot-id="slot-3" data-slot-status="empty" onclick="openLogoModal('slot-3')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (paid)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
<button aria-label="Buy logo slot" className="h-14 rounded-lg border border-dashed border-neutral-300 bg-white/60 flex items-center justify-center text-xs font-medium text-neutral-500 font-geist hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer" data-slot-id="slot-4" data-slot-status="empty" onclick="openLogoModal('slot-4')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (paid)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
<button aria-label="Buy logo slot" className="h-14 rounded-lg border border-dashed border-neutral-300 bg-white/60 flex items-center justify-center text-xs font-medium text-neutral-500 font-geist hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer" data-slot-id="slot-5" data-slot-status="empty" onclick="openLogoModal('slot-5')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (paid)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
<button aria-label="Buy logo slot" className="h-14 rounded-lg border border-dashed border-neutral-300 bg-white/60 flex items-center justify-center text-xs font-medium text-neutral-500 font-geist hover:bg-neutral-50 hover:text-neutral-700 transition-colors cursor-pointer" data-slot-id="slot-6" data-slot-status="empty" onclick="openLogoModal('slot-6')">
<span className="flex items-center gap-1 slot-empty-content">
<svg className="lucide lucide-plus" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M12 5v14"></path><path d="M5 12h14"></path></svg>
          Logo slot (paid)
        </span>
<img alt="Partner logo" className="slot-logo-img hidden w-full h-10 object-contain px-2" src=""/>
</button>
</div>
<p className="mt-3 text-xs text-neutral-500 font-geist text-center" data-logo-pricing="">
      Pricing: <span className="font-medium text-neutral-700 font-geist">€100</span> for <span className="font-medium text-neutral-700 font-geist">1 week</span> homepage logo display (max 6 logos).
      <span className="block mt-1 text-neutral-500 font-geist">Click a slot to pay and upload your logo.</span>
</p>
</div>

<div aria-labelledby="modal-title" aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto" id="logoAdvertiseModal" role="dialog">
<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
<div className="fixed inset-0 bg-neutral-900/60 backdrop-blur-sm transition-opacity" onclick="closeLogoModal()"></div>
<div className="relative bg-white rounded-2xl shadow-xl max-w-3xl w-full mx-4 overflow-hidden" style={{transform: 'translateY(0)'}}>
<div className="absolute right-4 top-4 z-10">
<button className="h-9 w-9 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors" onclick="closeLogoModal()">
<svg fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-8">
<div className="flex items-center justify-between mb-6">
<div className="inline-flex items-center gap-2 rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 font-geist">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="M7 12h5"></path><path d="M15 9.4a4 4 0 1 0 0 5.2"></path></svg>
              €100 • 7 days
            </div>
<div className="inline-flex items-center gap-1 rounded-full bg-indigo-100 px-3 py-1 text-xs font-medium text-indigo-700 font-geist" id="selectedSlotBadge">
              Slot: <span id="selectedSlotDisplay">-</span>
</div>
</div>
<h1 className="text-3xl tracking-tight text-neutral-900 font-jakarta font-semibold">Anasayfada binlerce kişiye ulaşın</h1>
<p className="mt-3 text-sm text-neutral-600 font-geist">
            Logonuzu ekleyin, <span className="font-medium text-neutral-700 font-geist">€100</span> ödeyin ve reklamınız <span className="font-medium text-neutral-700 font-geist">7 gün</span> boyunca anasayfada görünsün.
          </p>
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
<div className="rounded-xl border border-neutral-200 bg-neutral-50 p-5">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist">Upload your logo</div>
<div className="mt-1 text-sm text-neutral-600 font-geist">PNG/JPG/SVG (recommended: transparent background)</div>
</div>
<div className="h-9 w-9 rounded-lg bg-white border border-neutral-200 flex items-center justify-center text-neutral-700">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M10.3 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2v10l-3.1-3.1a2 2 0 0 0-2.814.014L6 21"></path><path d="m14 19.5 3-3 3 3"></path><path d="M17 22v-5.5"></path><circle cx="9" cy="9" r="2"></circle></svg>
</div>
</div>
<label className="mt-4 block">
<span className="sr-only">Choose logo</span>
<input accept="image/*" className="hidden" id="modalLogoFile" type="file"/>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 font-geist" onclick="document.getElementById('modalLogoFile').click()" type="button">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M12 3v12"></path><path d="m17 8-5-5-5 5"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path></svg>
                  Choose file
                </button>
</label>
<div className="mt-4 hidden" id="modalPreviewWrap">
<div className="text-xs text-neutral-500 font-geist">Preview</div>
<div className="mt-2 rounded-xl border border-neutral-200 bg-white p-3 flex items-center justify-center">
<img alt="Logo preview" className="max-h-16 object-contain" id="modalLogoPreview"/>
</div>
<div className="mt-2 text-xs text-neutral-500 font-geist" id="modalFileMeta"></div>
</div>
<div className="mt-4 text-xs text-neutral-500 font-geist">
                Not ready? You can still proceed—upload later from your confirmation link.
              </div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5">
<div className="flex items-start justify-between">
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist">Checkout</div>
<div className="mt-1 text-sm text-neutral-600 font-geist">Secure payment for 7-day homepage logo placement.</div>
</div>
<div className="h-9 w-9 rounded-lg bg-neutral-900 flex items-center justify-center text-white">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
<div className="mt-5 space-y-3">
<div className="flex items-center justify-between rounded-lg bg-neutral-50 border border-neutral-200 px-4 py-3">
<div className="text-sm text-neutral-700 font-geist">Homepage logo (7 days)</div>
<div className="text-sm font-semibold text-neutral-900 font-geist">€100</div>
</div>
<div className="flex items-center justify-between px-1">
<div className="text font-geist">Total</div>
<div className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">€100</div>
</div>
</div>
<button className="mt-6 w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 font-geist" id="demoPaymentBtn" onclick="openDemoPaymentModal()" type="button">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect 2"="" height="14" width="20" x="2" x2="22" y="5 x1=" y1="10" y2="10"></rect></svg>
                Proceed to payment
              </button>
<p className="mt-3 text-xs text-neutral-500 font-geist">
                After successful payment, your logo becomes active and stays visible for 7 days.
              </p>
</div>
</div>
</div>
<div className="border-t border-neutral-200 bg-neutral-50 px-8 py-5">
<div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
<div className="text-xs text-neutral-500 font-geist">
              Need help? Contact support after checkout.
            </div>
<div className="text-xs text-neutral-500 font-geist">
              Active period starts immediately after payment.
            </div>
</div>
</div>
</div>
</div>
</div>

<div aria-labelledby="demo-payment-title" aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto" id="demoPaymentModal" role="dialog">
<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
<div className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm transition-opacity" onclick="closeDemoPaymentModal()"></div>
<div className="relative bg-white rounded-2xl shadow-xl max-w-md w-full mx-4 overflow-hidden" style={{transform: 'translateY(0)'}}>
<div className="absolute right-4 top-4 z-10">
<button className="h-8 w-8 rounded-lg bg-neutral-100 flex items-center justify-center text-neutral-500 hover:bg-neutral-200 hover:text-neutral-700 transition-colors" onclick="closeDemoPaymentModal()">
<svg fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="p-6">
<div className="flex items-center gap-3 mb-6">
<div className="h-10 w-10 rounded-lg bg-indigo-600 flex items-center justify-center">
<svg fill="none" height="20" stroke="white" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<div>
<h2 className="text-lg font-semibold tracking-tight text-neutral-900 font-geist">Demo Payment</h2>
<p className="text-xs text-neutral-500 font-geist">Test mode - No real charges</p>
</div>
</div>
<div className="rounded-lg bg-amber-50 border border-amber-200 p-3 mb-6">
<div className="flex items-start gap-2">
<svg className="text-amber-600 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3"></path><path d="M12 9v4"></path><path d="M12 17h.01"></path></svg>
<p className="text-xs text-amber-800 font-geist">This is a demo payment form. Use test card number <span className="font-semibold">4242 4242 4242 4242</span></p>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist mb-1.5">Card Number</label>
<input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-geist outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" id="demoCardNumber" maxlength="19" oninput="formatCardNumber(this)" placeholder="4242 4242 4242 4242" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist mb-1.5">Expiry Date</label>
<input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-geist outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" id="demoExpiry" maxlength="5" oninput="formatExpiry(this)" placeholder="MM/YY" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist mb-1.5">CVC</label>
<input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-geist outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" id="demoCVC" maxlength="3" placeholder="123" type="text"/>
</div>
</div>
<div>
<label className="block text-sm font-medium text-neutral-700 font-geist mb-1.5">Cardholder Name</label>
<input className="w-full rounded-lg border border-neutral-300 px-4 py-2.5 text-sm font-geist outline-none focus:border-indigo-500 focus:ring-2 focus:ring-indigo-500/20" id="demoName" placeholder="John Doe" type="text"/>
</div>
</div>
<div className="mt-6 pt-4 border-t border-neutral-200">
<div className="flex items-center justify-between mb-4">
<span className="text-sm text-neutral-600 font-geist">Total Amount</span>
<span className="text-xl font-semibold tracking-tight text-neutral-900 font-geist">€100.00</span>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-indigo-600 px-4 py-3 text-sm font-medium text-white hover:bg-indigo-700 transition-colors font-geist" id="processPaymentBtn" onclick="processPayment()">
<svg fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect rx="2" ry="2" width="18" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
              Pay €100.00
            </button>
<div className="flex items-center justify-center gap-2 mt-4">
<svg className="text-neutral-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<span className="text-xs text-neutral-500 font-geist">Secured by Demo Stripe</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div aria-modal="true" className="hidden fixed inset-0 z-50 overflow-y-auto" id="paymentSuccessModal" role="dialog">
<div className="flex items-center justify-center min-h-screen pt-4 px-4 pb-20 text-center sm:p-0">
<div className="fixed inset-0 bg-neutral-900/70 backdrop-blur-sm transition-opacity"></div>
<div className="relative bg-white rounded-2xl shadow-xl max-w-sm w-full mx-4 overflow-hidden" style={{transform: 'translateY(0)'}}>
<div className="p-8 text-center">
<div className="mx-auto h-16 w-16 rounded-full bg-emerald-100 flex items-center justify-center mb-6">
<svg className="text-emerald-600" fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<h2 className="text-xl font-semibold tracking-tight text-neutral-900 font-geist mb-2">Payment Successful!</h2>
<p className="text-sm text-neutral-600 font-geist mb-6">Your logo slot has been activated. It will be visible on the homepage for 7 days.</p>
<div className="rounded-lg bg-neutral-50 border border-neutral-200 p-4 mb-6">
<div className="flex items-center justify-between text-sm">
<span className="text-neutral-600 font-geist">Order ID</span>
<span className="font-medium text-neutral-900 font-geist">#DEMO-<span id="orderId"></span></span>
</div>
<div className="flex items-center justify-between text-sm mt-2">
<span className="text-neutral-600 font-geist">Amount Paid</span>
<span className="font-medium text-neutral-900 font-geist">€100.00</span>
</div>
<div className="flex items-center justify-between text-sm mt-2">
<span className="text-neutral-600 font-geist">Slot</span>
<span className="font-medium text-neutral-900 font-geist" id="successSlotDisplay">-</span>
</div>
<div className="flex items-center justify-between text-sm mt-2">
<span className="text-neutral-600 font-geist">Status</span>
<span className="inline-flex items-center gap-1 text-emerald-700 font-medium font-geist">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
                Active
              </span>
</div>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-sm font-medium text-white hover:bg-neutral-800 transition-colors font-geist" onclick="closeAllModals()">
            Done
          </button>
</div>
</div>
</div>
</div>

</div>
</section>

<section className="mt-14">
<div className="text-center">
<h2 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>Popular Move Routes</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Explore frequently requested city-to-city moves.</p>
</div>
<div className="mt-8 grid grid-cols-2 gap-4 lg:grid-cols-5">
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm" style={{}}>
<div className="h-36 bg-neutral-200" style={{}}>
<img alt="Berlin" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b0cc2b0d-84e6-46ef-bcb0-ef054af6fa95_800w.jpg"/>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Berlin → Hamburg</div>
<div className="mt-1 text-sm text-neutral-600 font-geist" style={{}}>From €420</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm" style={{}}>
<div className="h-36 bg-neutral-200" style={{}}>
<img alt="Munich" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1706ece0-ed3d-4573-b056-057a40fbb37c_800w.webp"/>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>München → Köln</div>
<div className="mt-1 text-sm text-neutral-600 font-geist" style={{}}>From €780</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm" style={{}}>
<div className="h-36 bg-neutral-200" style={{}}>
<img alt="Frankfurt" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/bf850ed5-1cc0-4fb1-b521-0a9f1208225a_800w.jpg"/>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Frankfurt → Stuttgart</div>
<div className="mt-1 text-sm text-neutral-600 font-geist" style={{}}>From €510</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm" style={{}}>
<div className="h-36 bg-neutral-200" style={{}}>
<img alt="Leipzig" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3e9c49bb-6ac5-4f37-a45b-d8131fd16054_800w.webp"/>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Leipzig → Dresden</div>
<div className="mt-1 text-sm text-neutral-600 font-geist" style={{}}>From €260</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 overflow-hidden bg-white shadow-sm" style={{}}>
<div className="h-36 bg-neutral-200" style={{}}>
<img alt="Düsseldorf" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cb8a409d-270b-40f1-ae60-e6362d18e283_800w.webp"/>
</div>
<div className="p-4">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Düsseldorf → Essen</div>
<div className="mt-1 text-sm text-neutral-600 font-geist" style={{}}>From €190</div>
</div>
</div>
</div>
</section>

<section className="mt-14">
<div className="bg-neutral-50 border-neutral-100 border rounded-2xl pt-10 pr-10 pb-10 pl-10">
<div className="grid grid-cols-1 gap-10 lg:grid-cols-2 lg:items-center">
<div className="">
<h3 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>Book free comparisons</h3>
<p className="mt-3 text-lg text-neutral-600 max-w-md font-geist" style={{}}>
              Share your details once and receive multiple quotes. Choose the offer that fits your budget and services.
            </p>
<div className="mt-6 space-y-3">
<div className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-check h-4 w-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Personalized matching</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>We connect you with movers for your route and requirements.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-check h-4 w-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Transparent services</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Compare packing, furniture assembly, and insurance options.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-check h-4 w-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Support included</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Get guidance on timing, access, and move-day planning.</div>
</div>
</div>
<div className="flex items-start gap-3">
<div className="mt-0.5 h-6 w-6 rounded-md bg-indigo-600 flex items-center justify-center">
<svg className="lucide lucide-check h-4 w-4 text-white" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Nationwide coverage</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>From local moves to long-distance relocations.</div>
</div>
</div>
</div>
<div className="mt-7">
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 font-geist" href="#" style={{}}>
<svg className="lucide lucide-calendar-check h-4 w-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                Request quotes
              </a>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border border-neutral-200 bg-white shadow-sm p-5" style={{}}>
<div className="flex items-center justify-between">
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Your quotes</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Sample comparison view</div>
</div>
<div className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white font-geist" style={{}}>
<svg className="lucide lucide-filter h-4 w-4" data-lucide="filter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 20a1 1 0 0 0 .553.895l2 1A1 1 0 0 0 14 21v-7a2 2 0 0 1 .517-1.341L21.74 4.67A1 1 0 0 0 21 3H3a1 1 0 0 0-.742 1.67l7.225 7.989A2 2 0 0 1 10 14z"></path></svg>
                  Filter
                </div>
</div>
<div className="mt-5 space-y-3">
<div className="border-neutral-200 border rounded-xl pt-2 pr-4 pb-2 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 flex items-center justify-center" style={{}}>
<svg className="lucide lucide-truck h-4 w-4 text-white" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>MovePro GmbH</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Full service • Insurance</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>€640</div>
<div className="text-sm text-blue-700 font-medium font-geist" style={{}}>Best value</div>
</div>
</div>
</div>
<div className="border-neutral-200 border rounded-xl pt-2 pr-4 pb-2 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-indigo-50 flex items-center justify-center">
<svg className="lucide lucide-package h-4 w-4 text-indigo-700" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Pack &amp; Go</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Loading &amp; transport</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>€590</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>No packing</div>
</div>
</div>
</div>
<div className="border-neutral-200 border rounded-xl pt-2 pr-4 pb-2 pl-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-blue-50 flex items-center justify-center">
<svg className="lucide lucide-wrench h-4 w-4 text-emerald-700" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>CityLift</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Assembly included</div>
</div>
</div>
<div className="text-right">
<div className="text-lg font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>€720</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Premium</div>
</div>
</div>
</div>
</div>
<div className="flex bg-neutral-50 border-neutral-200 border rounded-xl mt-5 pt-2 pr-4 pb-2 pl-4 items-center justify-between">
<div className="flex items-center gap-2 text-sm text-neutral-600 font-geist" style={{}}>
<svg className="lucide lucide-info h-4 w-4 text-slate-500" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
                  Prices shown are examples; final quotes depend on volume and access.
                </div>
<a className="text-sm font-medium text-indigo-700 hover:text-indigo-800 font-geist" href="#" style={{}}>View details</a>
</div>
</div>
<div className="pointer-events-none absolute -right-6 -top-6 hidden lg:block rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur px-4 py-3 shadow-sm" style={{}}>
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-lg bg-blue-50 flex items-center justify-center">
<svg className="lucide lucide-badge-check h-4 w-4 text-emerald-700" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Verified</div>
<div className="text-sm text-neutral-600 font-geist" style={{}}>Trusted providers</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mt-14">
<div className="text-center">
<h2 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>Service Categories</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Navigate the most requested moving services and add-ons.</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-2">
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Residential moves</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white font-geist" href="#" style={{}}>
              Explore
              <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-home h-4 w-4 text-slate-600" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Apartment</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-building-2 h-4 w-4 text-slate-600" data-lucide="building-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 12h4"></path><path d="M10 8h4"></path><path d="M14 21v-3a2 2 0 0 0-4 0v3"></path><path d="M6 10H4a2 2 0 0 0-2 2v7a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-2"></path><path d="M6 21V5a2 2 0 0 1 2-2h8a2 2 0 0 1 2 2v16"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>House</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-box h-4 w-4 text-slate-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Packing</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-wrench h-4 w-4 text-slate-600" data-lucide="wrench" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.7 6.3a1 1 0 0 0 0 1.4l1.6 1.6a1 1 0 0 0 1.4 0l3.106-3.105c.32-.322.863-.22.983.218a6 6 0 0 1-8.259 7.057l-7.91 7.91a1 1 0 0 1-2.999-3l7.91-7.91a6 6 0 0 1 7.057-8.259c.438.12.54.662.219.984z"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Assembly</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-shield h-4 w-4 text-slate-600" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Insurance</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-truck h-4 w-4 text-slate-600" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Transport</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Business moves</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white font-geist" href="#" style={{}}>
              Explore
              <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-briefcase h-4 w-4 text-slate-600" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Office</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-server h-4 w-4 text-slate-600" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>IT equipment</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-warehouse h-4 w-4 text-slate-600" data-lucide="warehouse" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 21V10a1 1 0 0 0-1-1H7a1 1 0 0 0-1 1v11"></path><path d="M22 19a2 2 0 0 1-2 2H4a2 2 0 0 1-2-2V8a2 2 0 0 1 1.132-1.803l7.95-3.974a2 2 0 0 1 1.837 0l7.948 3.974A2 2 0 0 1 22 8z"></path><path d="M6 13h12"></path><path d="M6 17h12"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Storage</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-route h-4 w-4 text-slate-600" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Logistics</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-clipboard-list h-4 w-4 text-slate-600" data-lucide="clipboard-list" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" ry="1" width="8" x="8" y="2"></rect><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path><path d="M12 11h4"></path><path d="M12 16h4"></path><path d="M8 11h.01"></path><path d="M8 16h.01"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Project plan</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-users h-4 w-4 text-slate-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Crew</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Long-distance moves</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white font-geist" href="#" style={{}}>
              Explore
              <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-map h-4 w-4 text-slate-600" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Intercity</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-globe h-4 w-4 text-slate-600" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>International</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-file-text h-4 w-4 text-slate-600" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Customs help</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-box h-4 w-4 text-slate-600" data-lucide="box" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16Z"></path><path d="m3.3 7 8.7 5 8.7-5"></path><path d="M12 22V12"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Crating</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-shield-check h-4 w-4 text-slate-600" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Coverage</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-clock h-4 w-4 text-slate-600" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Scheduling</span>
</div>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-6 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Support services</div>
<a className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-3 py-2 text-sm font-medium text-white font-geist" href="#" style={{}}>
              Explore
              <svg className="lucide lucide-chevron-right h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-parking-circle h-4 w-4 text-slate-600" data-lucide="parking-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9 17V7h4a3 3 0 0 1 0 6H9"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Parking permit</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-receipt h-4 w-4 text-slate-600" data-lucide="receipt" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"></path><path d="M16 8h-6a2 2 0 1 0 0 4h4a2 2 0 1 1 0 4H8"></path><path d="M12 17.5v-11"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Cost estimate</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-sparkles h-4 w-4 text-slate-600" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Cleaning</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-key h-4 w-4 text-slate-600" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Handover help</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-phone h-4 w-4 text-slate-600" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Support</span>
</div>
<div className="flex items-center gap-3 rounded-xl border border-neutral-200 p-3" style={{}}>
<svg className="lucide lucide-file-check h-4 w-4 text-slate-600" data-lucide="file-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="m9 15 2 2 4-4"></path></svg>
<span className="text-sm text-neutral-700 font-geist" style={{}}>Contracts</span>
</div>
</div>
</div>
</div>
</section>

<section className="mt-16">
<div className="text-center">
<h2 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>News &amp; Updates</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Latest moving tips, checklists, and cost-saving guides.</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 lg:grid-cols-3">
<article className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden" style={{}}>
<div className="h-44 bg-neutral-200" style={{}}>
<img alt="Guide" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1521791055366-0d553872125f?auto=format&amp;fit=crop&amp;w=1200&amp;q=60"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 font-geist" style={{}}>Moving</span>
<span className="text-xs text-neutral-500 font-geist" style={{}}>5 min read</span>
</div>
<h3 className="mt-3 text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>The complete checklist for a smooth move</h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>From planning to packing and handover—avoid common pitfalls.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800 font-geist" href="/blog" style={{}}>
              Read more
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden" style={{}}>
<div className="h-44 bg-neutral-200" style={{}}>
<img alt="Costs" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?auto=format&amp;fit=crop&amp;w=1200&amp;q=60"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 font-geist" style={{}}>Costs</span>
<span className="text-xs text-neutral-500 font-geist" style={{}}>6 min read</span>
</div>
<h3 className="mt-3 text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>How to reduce moving costs without stress</h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Smart timing, volume planning, and service selection tips.</p>
<a className="inline-flex items-center gap-2 hover:text-indigo-800 text-sm font-medium text-indigo-700 font-geist mt-4" href="/blog">
              Read more
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
<article className="rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden" style={{}}>
<div className="h-44 bg-neutral-200" style={{}}>
<img alt="Booking" className="h-full w-full object-cover" src="https://images.unsplash.com/photo-1604328698692-f76ea9498e76?auto=format&amp;fit=crop&amp;w=1200&amp;q=60"/>
</div>
<div className="p-5">
<div className="flex items-center justify-between">
<span className="inline-flex items-center rounded-full bg-neutral-100 px-3 py-1 text-xs font-medium text-neutral-700 font-geist" style={{}}>Booking</span>
<span className="text-xs text-neutral-500 font-geist" style={{}}>4 min read</span>
</div>
<h3 className="mt-3 text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>What to ask before choosing a mover</h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Key questions about insurance, access, and service scope.</p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-indigo-700 hover:text-indigo-800 font-geist" href="/blog" style={{}}>
              Read more
              <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</article>
</div>
<div className="mt-10 rounded-2xl bg-indigo-700 text-white overflow-hidden">
<div className="flex flex-col gap-4 lg:flex-row lg:items-center lg:justify-between pt-7 pr-8 pb-7 pl-8 gap-x-4 gap-y-4">
<div>
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Become a partner</div>
<div className="mt-1 text-sm text-white/90 font-geist" style={{}}>Grow your business with qualified moving requests.</div>
</div>
<a className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 font-geist" href="#" style={{}}>
            Join now
            <svg className="lucide lucide-chevron-right ml-2 h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
<div className="hidden lg:block h-10 w-px bg-white/20"></div>
<div className="">
<div className="text-sm font-semibold tracking-tight font-geist" style={{}}>Referral program</div>
<div className="mt-1 text-sm text-white/90 font-geist" style={{}}>Recommend friends and earn rewards after booking.</div>
</div>
<a className="inline-flex items-center justify-center rounded-lg bg-white px-4 py-2 text-sm font-medium text-neutral-900 hover:bg-neutral-100 font-geist" href="#" style={{}}>
            Learn more
            <svg className="lucide lucide-chevron-right ml-2 h-4 w-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</section>

<section className="mt-16 pb-16">
<div className="text-center">
<h2 className="text-2xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>Real Stories. Real Savings</h2>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>What customers say after comparing quotes.</p>
</div>
<div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Alina M.</div>
<div className="text-xs text-neutral-500 font-geist" style={{}}>Berlin</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-500">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-relaxed font-geist" style={{}}>
            Super easy: I entered my route and received 5 offers within hours. We saved money and the mover was on time.
          </p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-route h-3.5 w-3.5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
              Berlin → Hamburg
            </span>
<span className="inline-flex items-center gap-1 font-medium text-blue-700 font-geist bg-blue-50 rounded-full pt-1 pr-2 pb-1 pl-2">Verified</span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Jonas K.</div>
<div className="text-xs text-neutral-500 font-geist" style={{}}>München</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-500">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-relaxed font-geist" style={{}}>
            Clear breakdown of services and prices. I picked the “best value” offer and everything went smoothly.
          </p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-route h-3.5 w-3.5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
              München → Köln
            </span>
<span className="inline-flex items-center gap-1 rounded-full bg-neutral-100 px-2 py-1 font-medium text-neutral-700 font-geist" style={{}}>
              4 offers
            </span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<div>
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Sofia R.</div>
<div className="text-xs text-neutral-500 font-geist" style={{}}>Frankfurt</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-500">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-relaxed font-geist" style={{}}>
            The advisor helped us plan parking permits and access. That saved time on move day—highly recommended.
          </p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-route h-3.5 w-3.5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
              Frankfurt → Stuttgart
            </span>
<span className="inline-flex items-center gap-1 font-medium text-indigo-700 font-geist bg-indigo-50 rounded-full pt-1 pr-2 pb-1 pl-2">Advisor </span>
</div>
</div>
<div className="rounded-2xl border border-neutral-200 bg-white p-5 shadow-sm" style={{}}>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<img alt="user" className="h-9 w-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Murat A.</div>
<div className="text-xs text-neutral-500 font-geist" style={{}}>Leipzig</div>
</div>
</div>
<div className="flex items-center gap-0.5 text-amber-500">
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star h-4 w-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-4 text-sm text-neutral-700 leading-relaxed font-geist" style={{}}>
            Transparent and quick. The selected company handled furniture assembly perfectly and communicated clearly.
          </p>
<div className="mt-4 flex items-center justify-between text-xs text-neutral-500" style={{}}>
<span className="inline-flex items-center gap-1 font-geist" style={{}}>
<svg className="lucide lucide-route h-3.5 w-3.5" data-lucide="route" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="6" cy="19" r="3"></circle><path d="M9 19h8.5a3.5 3.5 0 0 0 0-7h-11a3.5 3.5 0 0 1 0-7H15"></path><circle cx="18" cy="5" r="3"></circle></svg>
              Leipzig → Dresden
            </span>
<span className="inline-flex items-center gap-1 font-medium text-blue-700 font-geist bg-blue-50 rounded-full pt-1 pr-2 pb-1 pl-2">Assembly </span>
</div>
</div>
</div>
<div className="mt-10 rounded-2xl border border-neutral-200 bg-white p-8 shadow-sm" style={{}}>
<div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:items-center">
<div className="lg:col-span-2">
<h3 className="text-xl font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Ready to compare offers?</h3>
<p className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>
              Get multiple quotes from verified movers—free and without obligation. Takes less than 2 minutes.
            </p>
<div className="mt-4 flex flex-col gap-3 sm:flex-row sm:items-center">
<a className="inline-flex items-center justify-center rounded-lg bg-neutral-900 px-4 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition-colors font-geist" href="#" style={{}}>
                Start comparison
                <svg className="lucide lucide-arrow-right ml-2 h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="inline-flex items-center justify-center rounded-lg border border-neutral-200 bg-white px-4 py-2 text-sm font-medium text-neutral-700 hover:bg-neutral-50 transition-colors font-geist" href="#faq" style={{}}>
                How it works
                <svg className="lucide lucide-help-circle ml-2 h-4 w-4" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
</a>
</div>
</div>
<div className="rounded-2xl bg-neutral-50 border border-neutral-200 p-5" style={{}}>
<div className="flex items-center justify-between">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Avg response time</div>
<span className="inline-flex items-center rounded-full bg-blue-50 px-2 py-1 text-xs font-semibold text-blue-700 font-geist" style={{}}>Fast</span>
</div>
<div className="mt-3 text-3xl tracking-tight text-neutral-900 font-jakarta font-bold" style={{}}>2–6h</div>
<div className="mt-2 text-sm text-neutral-600 font-geist" style={{}}>Most users receive the first quote the same day.</div>
</div>
</div>
</div>
</section>

</main>

<footer className="border-t border-neutral-100 bg-white" style={{}}>
<div className="mx-auto max-w-6xl px-6 py-12">
<div className="grid grid-cols-1 gap-10 sm:grid-cols-2 lg:grid-cols-4">
<div className="">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-lg bg-neutral-900 flex items-center justify-center" style={{}}>
<span className="text-white text-sm font-semibold font-geist" style={{}}>UP</span>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Umzugs Preisvergleich</div>
<div className="text-xs text-neutral-500 font-geist" style={{}}>Compare. Save. Move.</div>
</div>
</div>
<p className="mt-4 text-sm text-neutral-600 leading-relaxed font-geist" style={{}}>
            Transparent moving quotes from verified providers across Germany. Free comparisons, no hidden fees.
          </p>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Product</div>
<ul className="mt-4 space-y-2 text-sm">
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>How it works</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Partners</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Pricing</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="/blog" style={{}}>Blog</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Company</div>
<ul className="mt-4 space-y-2 text-sm">
<li><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>About</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Careers</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Contact</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Imprint</a></li>
</ul>
</div>
<div className="">
<div className="text-sm font-semibold tracking-tight text-neutral-900 font-geist" style={{}}>Support</div>
<ul className="mt-4 space-y-2 text-sm">
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#faq" style={{}}>FAQ</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Privacy</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="#" style={{}}>Terms</a></li>
<li className=""><a className="text-neutral-600 hover:text-neutral-900 font-geist" href="/login" style={{}}>Sign in</a></li>
</ul>
<div className="mt-6 flex items-center gap-2">
<a aria-label="Twitter" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" href="#" style={{}}>
<svg className="lucide lucide-twitter h-4 w-4" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="LinkedIn" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" href="#" style={{}}>
<svg className="lucide lucide-linkedin h-4 w-4" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="Mail" className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-neutral-200 bg-white text-neutral-600 hover:bg-neutral-50" href="#" style={{}}>
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
</div>
<div className="mt-12 flex flex-col gap-3 border-t border-neutral-100 pt-8 sm:flex-row sm:items-center sm:justify-between" style={{}}>
<div className="text-xs text-neutral-500 font-geist" style={{}}>© <span className="font-geist" id="year" style={{}}>2025</span> Umzugs Preisvergleich. All rights reserved.</div>
<div className="flex items-center gap-4 text-xs">
<a className="text-neutral-500 hover:text-neutral-700 font-geist" href="#" style={{}}>Privacy</a>
<a className="text-neutral-500 hover:text-neutral-700 font-geist" href="#" style={{}}>Terms</a>
<a className="text-neutral-500 hover:text-neutral-700 font-geist" href="#" style={{}}>Cookies</a>
</div>
</div>
</div>
</footer>


<div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div><div className="pac-container pac-logo" style={{display: 'none'}}></div>
    </>
  );
}
