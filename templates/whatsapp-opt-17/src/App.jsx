import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Init lucide with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });

      const overlay = document.getElementById('popup-overlay');
      const card = document.getElementById('popup-card');
      const form = document.getElementById('optin-form');
      const nameInput = document.getElementById('guest_name');
      const phoneInput = document.getElementById('whatsapp_number');
      const consentInput = document.getElementById('whatsapp_consent');

      const errName = document.getElementById('error-name');
      const errPhone = document.getElementById('error-phone');
      const errConsent = document.getElementById('error-consent');

      const btnEnable = document.getElementById('btn-enable');
      const btnLater = document.getElementById('btn-later');
      const btnClose = document.getElementById('btn-close');
      const btnDone = document.getElementById('btn-done');
      const btnReopen = document.getElementById('btn-reopen');

      const successState = document.getElementById('success-state');
      const successSub = document.getElementById('success-sub');

      function openPopup() {
        overlay.classList.remove('pointer-events-none');
        overlay.querySelector('div.absolute').classList.remove('opacity-0');
        card.classList.remove('translate-y-3', 'opacity-0', 'scale-[0.98]');
        card.classList.add('translate-y-0', 'opacity-100', 'scale-100');
      }

      function closePopup() {
        overlay.querySelector('div.absolute').classList.add('opacity-0');
        card.classList.add('translate-y-3', 'opacity-0', 'scale-[0.98]');
        overlay.classList.add('pointer-events-none');
        setTimeout(() => {
          successState.classList.add('hidden');
          form.classList.remove('hidden');
          // Reset form for demo
          btnEnable.disabled = false;
          btnEnable.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="bell-ring" class="h-5 w-5"></i><span>✅ Enable WhatsApp Updates</span></span>';
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }, 220);
      }

      function setFieldError(inputEl, errorEl, hasError) {
        if (hasError) {
          inputEl.classList.remove('border-zinc-200');
          inputEl.classList.add('border-rose-400', 'focus:ring-rose-100', 'focus:border-rose-400');
          errorEl.classList.remove('hidden');
        } else {
          inputEl.classList.remove('border-rose-400', 'focus:ring-rose-100', 'focus:border-rose-400');
          inputEl.classList.add('border-zinc-200');
          errorEl.classList.add('hidden');
        }
      }

      function validateName(val) {
        return typeof val === 'string' && val.trim().length >= 2;
      }

      function normalizePhone(raw) {
        // Keep digits and plus; normalize spaces
        let v = raw.replace(/[^\d+]/g, '');
        if (v[0] !== '+') v = '+' + v.replace(/\+/g, ''); // ensure one leading +
        return v;
      }

      function validatePhone(val) {
        const v = normalizePhone(val);
        // + followed by 8 to 15 digits
        return /^\+\d{8,15}$/.test(v);
      }

      function showSuccess(name, phone) {
        form.classList.add('hidden');
        successState.classList.remove('hidden');
        const safeName = (name || '').trim();
        const safePhone = normalizePhone(phone || '');
        successSub.textContent = safeName
          ? `Thanks, ${safeName}. We’ll send updates to ${safePhone}.`
          : `We’ll send updates to ${safePhone}.`;
        // Refresh icons inside success block
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      }

      // Real-time validation helpers
      nameInput.addEventListener('input', () => {
        setFieldError(nameInput, errName, !validateName(nameInput.value));
      });

      phoneInput.addEventListener('input', () => {
        // Allow formatting while typing, but ensure we only keep digits, plus, spaces, hyphens visually
        const cleaned = phoneInput.value.replace(/[^\d+\s-]/g, '');
        if (cleaned !== phoneInput.value) phoneInput.value = cleaned;
        const ok = validatePhone(phoneInput.value.replace(/[\s-]/g, ''));
        setFieldError(phoneInput, errPhone, phoneInput.value.length > 0 && !ok);
      });

      consentInput.addEventListener('change', () => {
        errConsent.classList.toggle('hidden', consentInput.checked);
      });

      // Submit
      form.addEventListener('submit', (e) => {
        e.preventDefault();
        const nameOk = validateName(nameInput.value);
        const phoneOk = validatePhone(phoneInput.value.replace(/[\s-]/g, ''));
        const consentOk = consentInput.checked;

        setFieldError(nameInput, errName, !nameOk);
        setFieldError(phoneInput, errPhone, !phoneOk);
        errConsent.classList.toggle('hidden', consentOk);

        if (!nameOk || !phoneOk || !consentOk) return;

        // Loading state
        btnEnable.disabled = true;
        btnEnable.innerHTML = '<span class="inline-flex items-center gap-2"><i data-lucide="loader-2" class="h-5 w-5 animate-spin"></i><span>Enabling…</span></span>';
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });

        setTimeout(() => {
          showSuccess(nameInput.value, phoneInput.value);
        }, 900);
      });

      // Dismissals
      btnLater.addEventListener('click', closePopup);
      btnClose.addEventListener('click', closePopup);
      btnDone && btnDone.addEventListener('click', closePopup);
      btnReopen.addEventListener('click', openPopup);

      // Initial entry animation
      setTimeout(() => {
        openPopup();
      }, 30);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-40 flex items-end sm:items-center justify-center p-4 transition-all duration-300" id="popup-overlay">
<div className="absolute inset-0 bg-zinc-900/10 backdrop-blur-sm opacity-100 transition-opacity"></div>

<div className="relative z-50 w-full max-w-sm bg-white rounded-xl shadow-lg ring-1 ring-zinc-950/5 translate-y-0 opacity-100 transition-all duration-300" id="popup-card">

<button aria-label="Close" className="absolute right-3 top-3 inline-flex items-center justify-center h-9 w-9 rounded-md text-zinc-500 hover:text-zinc-700 hover:bg-zinc-900/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366]" id="btn-close" type="button">
<i className="h-5 w-5" data-lucide="x"></i>
</button>

<div className="p-5">

<div className="flex items-center gap-2.5 mb-3">
<div className="h-9 w-9 rounded-full bg-[#25D366]/10 flex items-center justify-center text-[#25D366] ring-1 ring-[#25D366]/15">
<i className="h-5 w-5" data-lucide="message-circle"></i>
</div>
<div className="h-9 w-9 rounded-full bg-orange-500/10 flex items-center justify-center text-orange-600 ring-1 ring-orange-600/15">
<i className="h-5 w-5" data-lucide="pizza"></i>
</div>
<div className="h-9 w-9 rounded-full bg-sky-500/10 flex items-center justify-center text-sky-600 ring-1 ring-sky-600/15">
<i className="h-5 w-5" data-lucide="tooth"></i>
</div>
<div className="h-9 w-9 rounded-full bg-violet-500/10 flex items-center justify-center text-violet-600 ring-1 ring-violet-600/15">
<i className="h-5 w-5" data-lucide="brush"></i>
</div>
<div className="h-9 w-9 rounded-full bg-amber-500/10 flex items-center justify-center text-amber-600 ring-1 ring-amber-600/15">
<i className="h-5 w-5" data-lucide="car"></i>
</div>
</div>

<h2 className="text-2xl tracking-tight font-semibold text-zinc-900">
            ✨ Stay Updated in Real Time
          </h2>
<p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600">
            Get instant updates about your food orders, housekeeping, essentials, laundry, and transport — directly on WhatsApp. No need to check the app — we’ll notify you instantly.
          </p>

<form className="mt-4" id="optin-form" novalidate="">

<div className="mb-3.5">
<label className="block text-[13px] font-medium text-zinc-700" htmlFor="guest_name">Name</label>
<div className="relative mt-1.5">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
<i className="h-4.5 w-4.5" data-lucide="user"></i>
</div>
<input aria-describedby="error-name" autocomplete="name" className="w-full rounded-lg border border-zinc-200 bg-white px-10 py-2.5 text-[15px] text-zinc-900 placeholder-zinc-400 shadow-sm outline-none focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/15 transition" id="guest_name" inputmode="text" minlength="2" name="guest_name" placeholder="Enter your name" required="" type="text"/>
</div>
<p className="mt-1 text-[12px] text-rose-600 hidden" id="error-name">Please enter your name (2+ characters).</p>
</div>

<div className="mb-3.5">
<label className="block text-[13px] font-medium text-zinc-700" htmlFor="whatsapp_number">WhatsApp Number</label>
<div className="relative mt-1.5">
<div className="pointer-events-none absolute inset-y-0 left-3 flex items-center text-zinc-400">
<i className="h-4.5 w-4.5" data-lucide="phone"></i>
</div>
<input aria-describedby="error-phone" autocomplete="tel" className="w-full rounded-lg border border-zinc-200 bg-white px-10 py-2.5 text-[15px] text-zinc-900 placeholder-zinc-400 shadow-sm outline-none focus:border-[#25D366] focus:ring-4 focus:ring-[#25D366]/15 transition" id="whatsapp_number" inputmode="tel" name="whatsapp_number" placeholder="+971 50 123 4567" required="" type="tel"/>
</div>
<p className="mt-1 text-[12px] text-rose-600 hidden" id="error-phone">Enter a valid WhatsApp number (start with country code, e.g., +971 ...).</p>
</div>

<div className="mt-2.5">
<label className="flex items-start gap-3 select-none cursor-pointer">
<input checked="" className="peer sr-only" id="whatsapp_consent" type="checkbox"/>
<span className="mt-0.5 h-5 w-5 flex items-center justify-center rounded-md border border-zinc-300 bg-white shadow-sm peer-checked:border-[#25D366] peer-checked:bg-[#25D366] transition">
<i className="h-3.5 w-3.5 text-white opacity-0 peer-checked:opacity-100 transition-opacity" data-lucide="check"></i>
</span>
<span className="text-[13.5px] leading-5 text-zinc-700">I agree to receive service updates via WhatsApp</span>
</label>
<p className="mt-1 text-[12px] text-rose-600 hidden" id="error-consent">Please agree to receive WhatsApp updates.</p>
</div>

<div className="mt-4 pt-4 border-t border-zinc-100">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-[#25D366] text-white px-4 py-3.5 text-[15px] font-medium shadow-sm hover:bg-[#1fb45d] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#25D366] transition disabled:opacity-70 disabled:cursor-not-allowed" data-action="enable_whatsapp_updates" id="btn-enable" type="submit">
<span className="inline-flex items-center gap-2">
<i className="h-5 w-5" data-lucide="bell-ring"></i>
<span>✅ Enable WhatsApp Updates</span>
</span>
</button>
<button className="w-full mt-2.5 inline-flex items-center justify-center gap-2 rounded-lg px-4 py-3 text-[14px] font-medium text-zinc-600 hover:text-zinc-900 hover:bg-zinc-900/[0.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300 transition" data-action="dismiss_popup" id="btn-later" type="button">
                ❌ Maybe Later
              </button>
</div>
</form>

<div className="hidden mt-2 pb-1" id="success-state">
<div className="flex items-center gap-3">
<div className="h-11 w-11 rounded-full bg-[#25D366]/10 text-[#25D366] flex items-center justify-center ring-1 ring-[#25D366]/20">
<i className="h-6 w-6" data-lucide="check-circle-2"></i>
</div>
<div>
<h3 className="text-[18px] font-semibold tracking-tight text-zinc-900">You’re all set</h3>
<p className="text-[13.5px] text-zinc-600" id="success-sub">We’ll send updates to your WhatsApp.</p>
</div>
</div>
<div className="mt-4">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white text-[14px] font-medium text-zinc-800 px-4 py-3.5 shadow-sm hover:bg-zinc-50 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300 transition" id="btn-done" type="button">
                Done
              </button>
</div>
</div>
</div>
</div>
</div>

<div className="fixed bottom-4 left-0 right-0 mx-auto w-full max-w-sm flex items-center justify-center">
<button className="inline-flex items-center gap-2 rounded-full border border-zinc-200 bg-white/80 backdrop-blur px-3.5 py-2 text-[13.5px] text-zinc-700 shadow-sm hover:bg-white hover:text-zinc-900 transition" id="btn-reopen" type="button">
<i className="h-4 w-4 text-[#25D366]" data-lucide="sparkles"></i>
        Open demo again
      </button>
</div>



    </>
  );
}
