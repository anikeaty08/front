import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



    // Initialize icons
    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      // Enter animation
      const card = document.getElementById('popupCard');
      requestAnimationFrame(() => {
        card.classList.remove('opacity-0', 'translate-y-2');
        card.classList.add('opacity-100', 'translate-y-0');
      });
    });

    // Elements
    const consentToggle = document.getElementById('consentToggle');
    const startChatBtn = document.getElementById('startChatBtn');
    const maybeLaterBtn = document.getElementById('maybeLaterBtn');
    const dismissBtn = document.getElementById('dismissBtn');
    const reopenBtn = document.getElementById('reopenBtn');
    const reopenBar = document.getElementById('reopenBar');
    const popupCard = document.getElementById('popupCard');
    const nameInput = document.getElementById('name');
    const phoneInput = document.getElementById('phone');
    const phoneHelp = document.getElementById('phoneHelp');
    const countEl = document.getElementById('serviceCount');

    // Services
    const selected = new Set();
    const chips = Array.from(document.querySelectorAll('.service-chip'));
    const updateCount = () => {
      countEl.textContent = `${selected.size} selected`;
    };
    const toggleChip = (btn, on) => {
      if (on) {
        btn.classList.remove('bg-neutral-50','border-neutral-200','text-neutral-700');
        btn.classList.add('bg-emerald-50','border-emerald-300','text-emerald-700');
      } else {
        btn.classList.add('bg-neutral-50','border-neutral-200','text-neutral-700');
        btn.classList.remove('bg-emerald-50','border-emerald-300','text-emerald-700');
      }
    };
    chips.forEach(chip => {
      chip.addEventListener('click', () => {
        const val = chip.getAttribute('data-service');
        if (selected.has(val)) {
          selected.delete(val);
          toggleChip(chip, false);
        } else {
          selected.add(val);
          toggleChip(chip, true);
        }
        updateCount();
      });
    });
    updateCount();

    // Consent toggle (custom checkbox)
    const setConsent = (v) => {
      consentToggle.setAttribute('aria-checked', v ? 'true' : 'false');
      startChatBtn.disabled = !v;
    };
    setConsent(true);
    consentToggle.addEventListener('click', () => {
      const current = consentToggle.getAttribute('aria-checked') === 'true';
      setConsent(!current);
    });

    // Validate phone
    const phoneValid = (val) => {
      const cleaned = val.trim();
      return /^[+]?[\d]{7,15}$/.test(cleaned);
    };
    const showPhoneError = (show) => {
      phoneHelp.classList.toggle('hidden', !show);
      phoneInput.classList.toggle('border-red-300', show);
      phoneInput.classList.toggle('focus:ring-red-200', show);
    };
    phoneInput.addEventListener('input', () => {
      showPhoneError(!phoneValid(phoneInput.value));
    });

    // Build WhatsApp link
    const buildWaLink = () => {
      const name = nameInput.value.trim() || 'Guest';
      const phone = phoneInput.value.trim();
      const services = Array.from(selected).map(s => `• ${s}`).join('%0A');
      const chosen = services ? `%0A${services}` : ' General assistance';
      const text = `Hi, I'm ${name}. I'd like help with:${chosen}%0A%0A(${encodeURIComponent("Just send us a message — we’ll handle the rest.")})`;
      // If your hotel number is known, set it as wa.me/<number> below.
      const cleaned = phone.replace(/[^\d]/g, '');
      // Since destination number is not provided, open WhatsApp with prefilled message only:
      const url = `https://wa.me/?text=${text}`;
      return { url, cleaned };
    };

    // Start chat
    startChatBtn.addEventListener('click', () => {
      const valid = phoneValid(phoneInput.value);
      showPhoneError(!valid);
      if (!valid) return;

      const consent = consentToggle.getAttribute('aria-checked') === 'true';
      if (!consent) return;

      const { url } = buildWaLink();
      window.open(url, '_blank', 'noopener,noreferrer');
    });

    // Dismiss / Maybe later
    const hidePopup = () => {
      popupCard.classList.add('opacity-0', 'translate-y-2');
      setTimeout(() => {
        popupCard.classList.add('hidden');
        reopenBar.classList.remove('hidden');
      }, 200);
    };
    maybeLaterBtn.addEventListener('click', hidePopup);
    dismissBtn.addEventListener('click', hidePopup);
    reopenBtn.addEventListener('click', () => {
      reopenBar.classList.add('hidden');
      popupCard.classList.remove('hidden');
      requestAnimationFrame(() => {
        popupCard.classList.remove('opacity-0', 'translate-y-2');
        popupCard.classList.add('opacity-100', 'translate-y-0');
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="min-h-screen flex items-center justify-center p-4">
<div className="w-full max-w-sm">

<div className="flex items-center justify-between mb-4">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight">HS</div>
<div className="flex flex-col">
<span className="text-[15px] font-medium tracking-tight text-neutral-900">Hotel Services</span>
<span className="text-xs text-neutral-500">Concierge • In‑stay assistance</span>
</div>
</div>
<button className="hidden md:hidden" id="openPopupBtn"></button>
</div>

<div className="relative rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden opacity-0 translate-y-2 transition-all duration-300" id="popupCard">

<button aria-label="Dismiss" className="absolute right-3 top-3 inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-600 hover:text-neutral-900 hover:border-neutral-300 hover:bg-neutral-50 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.98] transition" id="dismissBtn">
<i className="h-[18px] w-[18px]" data-lucide="x"></i>
</button>

<div className="p-4 sm:p-5">

<div className="flex items-start gap-3">
<div className="mt-[2px] h-9 w-9 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center border border-emerald-100">
<i className="h-[18px] w-[18px]" data-lucide="message-circle"></i>
</div>
<div className="flex-1">
<h1 className="text-[22px] leading-tight tracking-tight font-semibold text-neutral-900">💬 Chat With Us on WhatsApp</h1>
<p className="mt-1.5 text-[13px] leading-5 text-neutral-600">
                Need something during your stay? Start a WhatsApp chat and we’ll assist you right away.
              </p>
</div>
</div>

<div className="mt-4 border-t border-neutral-200"></div>

<div className="mt-3">
<div className="flex items-center justify-between">
<p className="text-[13px] font-medium text-neutral-700">Services</p>
<span className="text-[11px] text-neutral-500" id="serviceCount">0 selected</span>
</div>
<div className="mt-2 grid grid-cols-2 gap-2" id="servicesWrap">

<button className="service-chip group flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] text-neutral-700 hover:border-neutral-300 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99]" data-service="🍴 Food &amp; Drinks">
<span className="text-base">🍴</span><span className="truncate">Food &amp; Drinks</span>
</button>
<button className="service-chip group flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] text-neutral-700 hover:border-neutral-300 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99]" data-service="🧹 Housekeeping">
<span className="text-base">🧹</span><span className="truncate">Housekeeping</span>
</button>
<button className="service-chip group flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] text-neutral-700 hover:border-neutral-300 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99]" data-service="🧺 Laundry">
<span className="text-base">🧺</span><span className="truncate">Laundry</span>
</button>
<button className="service-chip group flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] text-neutral-700 hover:border-neutral-300 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99]" data-service="🚖 Transport &amp; Transfers">
<span className="text-base">🚖</span><span className="truncate">Transport &amp; Transfers</span>
</button>
<button className="service-chip group flex items-center gap-2 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-[13px] text-neutral-700 hover:border-neutral-300 hover:bg-white transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99] col-span-2" data-service="🛎 Essentials &amp; Other Services">
<span className="text-base">🛎</span><span className="truncate">Essentials &amp; Other Services</span>
</button>
</div>
<p className="mt-2 text-[12px] text-neutral-500 italic">Just send us a message — we’ll handle the rest.</p>
</div>

<div className="mt-4 border-t border-neutral-200"></div>

<form className="mt-3 space-y-3" id="assistForm" novalidate="">

<div className="space-y-1.5">
<label className="text-[13px] font-medium text-neutral-700" htmlFor="name">Name</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
<i className="h-[16px] w-[16px]" data-lucide="user"></i>
</div>
<input autocomplete="name" className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-2.5 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10" id="name" inputmode="text" name="name" placeholder="Your name" type="text" value="Ajith Surendran"/>
</div>
</div>

<div className="space-y-1.5">
<label className="text-[13px] font-medium text-neutral-700" htmlFor="phone">WhatsApp Number</label>
<div className="relative">
<div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-3 text-neutral-400">
<i className="h-[16px] w-[16px]" data-lucide="phone"></i>
</div>
<input autocomplete="tel" className="w-full rounded-lg border border-neutral-200 bg-white px-10 py-2.5 text-[14px] text-neutral-900 placeholder-neutral-400 outline-none focus:border-neutral-300 focus:ring-2 focus:ring-neutral-900/10" id="phone" inputmode="tel" name="phone" placeholder="+971 50 987 1873" type="tel" value="+971509871873"/>
</div>
<p className="hidden text-[12px] text-red-600" id="phoneHelp">Enter a valid number (7–15 digits, optional +).</p>
</div>

<div className="mt-2">
<button aria-checked="true" className="group inline-flex w-full items-start gap-3 rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-3 text-left hover:bg-white hover:border-neutral-300 transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10" id="consentToggle" role="checkbox" type="button">
<span className="mt-0.5 inline-flex h-5 w-5 items-center justify-center rounded-md border border-neutral-300 bg-white text-neutral-600 group-aria-[checked=true]:border-emerald-500 group-aria-[checked=true]:bg-emerald-500 group-aria-[checked=true]:text-white transition">
<i className="h-[14px] w-[14px] opacity-0 group-aria-[checked=true]:opacity-100 transition" data-lucide="check"></i>
</span>
<span className="text-[13px] text-neutral-700">I agree to receive hotel service assistance via WhatsApp</span>
</button>
</div>

<div className="pt-1.5 space-y-2">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-emerald-600 text-white px-4 py-3 text-[14px] font-medium tracking-tight hover:bg-emerald-700 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-emerald-600/30 active:scale-[0.99] disabled:opacity-50 disabled:cursor-not-allowed transition" id="startChatBtn" type="button">
<span>✅ Start Chat on WhatsApp</span>
<i className="h-[16px] w-[16px]" data-lucide="arrow-up-right"></i>
</button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-neutral-200 bg-white px-4 py-3 text-[14px] text-neutral-700 hover:bg-neutral-50 hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 active:scale-[0.99] transition" id="maybeLaterBtn" type="button">
<span>❌ Maybe Later</span>
</button>
</div>
</form>
</div>

<div className="px-4 py-3 bg-neutral-50/60 border-t border-neutral-200 flex items-center justify-between">
<div className="flex items-center gap-2 text-[12px] text-neutral-500">
<i className="h-[14px] w-[14px]" data-lucide="shield-check"></i>
<span>Secure &amp; private</span>
</div>
<div className="text-[12px] text-neutral-500">Avg. reply <span className="font-medium text-neutral-700">2 min</span></div>
</div>
</div>

<div className="hidden mt-3 rounded-xl border border-neutral-200 bg-white shadow-sm p-2.5 flex items-center justify-between" id="reopenBar">
<div className="flex items-center gap-2 text-[13px] text-neutral-700">
<i className="h-[16px] w-[16px] text-neutral-600" data-lucide="message-square"></i>
<span>Need help? Open WhatsApp assistant.</span>
</div>
<button className="inline-flex items-center gap-1.5 rounded-md border border-neutral-200 bg-neutral-50 px-3 py-1.5 text-[12px] text-neutral-700 hover:bg-white hover:border-neutral-300 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-neutral-900/10 transition" id="reopenBtn">
<span>Open</span>
<i className="h-[14px] w-[14px]" data-lucide="chevron-right"></i>
</button>
</div>
</div>
</div>


    </>
  );
}
