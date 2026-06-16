import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with 1.5 stroke width
      const initIcons = () => lucide.createIcons({ attrs: { 'stroke-width': 1.5 }});
      document.addEventListener('DOMContentLoaded', initIcons);

      // Utility: Toast
      function showToast({ title = 'Saved', message = '', variant = 'success', timeout = 3000 }) {
        const host = document.getElementById('toastHost');
        const wrap = document.createElement('div');
        const variants = {
          success: { icon: 'check-circle', bg: 'bg-emerald-50', border: 'border-emerald-200', text: 'text-emerald-900' },
          error: { icon: 'alert-triangle', bg: 'bg-rose-50', border: 'border-rose-200', text: 'text-rose-900' },
          info: { icon: 'info', bg: 'bg-slate-50', border: 'border-slate-200', text: 'text-slate-900' }
        };
        const v = variants[variant] || variants.info;
        wrap.className = `flex items-start gap-3 rounded-md border ${v.border} ${v.bg} px-3.5 py-3 shadow-sm ring-1 ring-black/5`;
        wrap.innerHTML = `
          <i data-lucide="${v.icon}" class="h-4 w-4 ${v.text} mt-0.5"></i>
          <div class="min-w-[220px]">
            <div class="text-sm font-medium ${v.text}">${title}</div>
            ${message ? `<div class="text-xs text-slate-600 mt-0.5">${message}</div>` : ''}
          </div>
          <button class="ml-4 text-slate-500 hover:text-slate-700 focus:outline-none">
            <i data-lucide="x" class="h-4 w-4"></i>
          </button>
        `;
        host.appendChild(wrap);
        initIcons();
        const remove = () => wrap.remove();
        wrap.querySelector('button').addEventListener('click', remove);
        if (timeout) setTimeout(remove, timeout);
      }

      // Year
      document.getElementById('year').textContent = new Date().getFullYear();

      // Validation helpers
      function validateEmail(val) {
        return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(val);
      }
      function applyValid(el, valid, helpEl, msgOk = '', msgErr = '') {
        el.classList.toggle('border-emerald-300', valid);
        el.classList.toggle('focus:ring-emerald-300/30', valid);
        el.classList.toggle('border-rose-300', !valid && el.value.length > 0);
        el.classList.toggle('focus:ring-rose-300/30', !valid && el.value.length > 0);
        if (helpEl) {
          if (valid && msgOk) {
            helpEl.textContent = msgOk;
            helpEl.className = 'mt-1.5 text-xs text-emerald-600';
          } else if (!valid && el.value.length > 0 && msgErr) {
            helpEl.textContent = msgErr;
            helpEl.className = 'mt-1.5 text-xs text-rose-600';
          } else {
            helpEl.className = 'mt-1.5 text-xs text-slate-500';
          }
        }
      }

      function bindLiveValidation(id, { type, required, min, max, pattern }) {
        const input = document.getElementById(id);
        const help = document.getElementById(id.replace('Input', 'Help')) || document.getElementById(id + 'Help');
        const icon = document.getElementById(id.replace('Input', 'FeedbackIcon')) || document.getElementById(id + 'FeedbackIcon');
        function run() {
          const val = input.value.trim();
          let ok = true;
          if (required && val.length === 0) ok = false;
          if (ok && min && val.length < min) ok = false;
          if (ok && max && val.length > max) ok = false;
          if (ok && type === 'email') ok = validateEmail(val);
          if (ok && pattern) ok = new RegExp(pattern).test(val);

          applyValid(input, ok, help,
            ok ? 'Looks good.' : '',
            !ok && val.length > 0 ? 'Please check this field.' : ''
          );

          if (icon) {
            icon.classList.toggle('hidden', val.length === 0);
            icon.innerHTML = ok
              ? '<span class="inline-flex items-center gap-1 text-emerald-600"><i data-lucide="check" class="h-3.5 w-3.5"></i>Valid</span>'
              : '<span class="inline-flex items-center gap-1 text-rose-600"><i data-lucide="alert-circle" class="h-3.5 w-3.5"></i>Invalid</span>';
            initIcons();
          }
          return ok;
        }
        ['input','blur'].forEach(ev => input.addEventListener(ev, run));
        return run;
      }

      // Bind profile validations
      const validateName = bindLiveValidation('nameInput', { required: true, min: 2, max: 50 });
      const validateEmailField = bindLiveValidation('emailInput', { required: true, type: 'email' });
      const validatePhone = bindLiveValidation('phoneInput', { required: true, pattern: '^[0-9]{7,15}$' });
      const validatePwd = bindLiveValidation('passwordInput', { required: true, min: 8 });

      // Show/Hide password
      document.getElementById('togglePwd').addEventListener('click', () => {
        const input = document.getElementById('passwordInput');
        const isPwd = input.getAttribute('type') === 'password';
        input.setAttribute('type', isPwd ? 'text' : 'password');
        document.getElementById('togglePwd').innerHTML = `<i data-lucide="${isPwd ? 'eye-off' : 'eye'}" class="h-4 w-4"></i>`;
        initIcons();
      });

      // 2FA Toggle
      const twofaToggle = document.getElementById('twofaToggle');
      const twofaNote = document.getElementById('twofaNote');
      function setSwitchVisual(btn, on) {
        btn.setAttribute('aria-checked', on ? 'true' : 'false');
        btn.classList.toggle('bg-slate-200', !on);
        btn.classList.toggle('border-slate-300', !on);
        btn.classList.toggle('bg-emerald-500', on);
        btn.classList.toggle('border-emerald-600', on);
        const dot = btn.querySelector('.dot');
        dot.classList.toggle('translate-x-0', !on);
        dot.classList.toggle('translate-x-4', on);
        dot.classList.toggle('bg-white', true);
      }
      setSwitchVisual(twofaToggle, false);
      twofaToggle.addEventListener('click', () => {
        const on = twofaToggle.getAttribute('aria-checked') !== 'true';
        setSwitchVisual(twofaToggle, on);
        twofaNote.classList.toggle('hidden', !on);
      });
      twofaToggle.addEventListener('keydown', (e) => {
        if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); twofaToggle.click(); }
      });

      // Dropdown helper
      function buildDropdown({ buttonId, menuId, selectedId, options = [], defaultValue }) {
        const btn = document.getElementById(buttonId);
        const menu = document.getElementById(menuId);
        const selected = document.getElementById(selectedId);
        let open = false;
        let value = defaultValue || options[0];

        function renderOptions() {
          const ul = menu.querySelector('ul');
          ul.innerHTML = '';
          options.forEach(opt => {
            const li = document.createElement('li');
            li.innerHTML = `
              <button type="button" class="w-full text-left px-3 py-2 hover:bg-slate-50 text-slate-700 flex items-center justify-between">
                <span>${opt}</span>
                ${opt === value ? '<i data-lucide="check" class="h-4 w-4 text-emerald-600"></i>' : ''}
              </button>
            `;
            li.querySelector('button').addEventListener('click', () => {
              value = opt;
              selected.textContent = opt;
              close();
              renderOptions();
              initIcons();
            });
            ul.appendChild(li);
          });
          initIcons();
        }

        function openMenu() {
          if (open) return;
          open = true;
          menu.classList.remove('hidden');
          btn.classList.add('border-slate-400');
        }
        function close() {
          open = false;
          menu.classList.add('hidden');
          btn.classList.remove('border-slate-400');
        }
        btn.addEventListener('click', () => open ? close() : openMenu());
        document.addEventListener('click', (e) => {
          if (!btn.contains(e.target) && !menu.contains(e.target)) close();
        });
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') close(); });

        // Initialize
        selected.textContent = value;
        renderOptions();

        return {
          get value() { return value; },
          set value(v) { value = v; selected.textContent = v; renderOptions(); }
        };
      }

      // Build Timezone and Language dropdowns
      const tzOptions = ["GMT","UTC+1","UTC+2","UTC+3","UTC+4","UTC+5","UTC+6","UTC+7","UTC+8","UTC+9","UTC+10","UTC+11","UTC+12"];
      const langOptions = ["English","Spanish","French","German","Arabic"];
      const tzDropdown = buildDropdown({ buttonId: 'tzButton', menuId: 'tzMenu', selectedId: 'tzSelected', options: tzOptions, defaultValue: 'UTC+4' });
      const langDropdown = buildDropdown({ buttonId: 'langButton', menuId: 'langMenu', selectedId: 'langSelected', options: langOptions, defaultValue: 'English' });

      // Theme toggle
      const themeToggle = document.getElementById('themeToggle');
      const themeNote = document.getElementById('themeNote');
      let darkMode = false; // default false per spec
      function applyTheme() {
        document.body.classList.toggle('dark', darkMode);
        document.body.classList.toggle('bg-slate-950', darkMode);
        document.body.classList.toggle('text-slate-100', darkMode);
        themeNote.textContent = `Theme updated to ${darkMode ? 'Dark' : 'Light'}.`;
        themeNote.classList.remove('hidden');
        setTimeout(() => themeNote.classList.add('hidden'), 1500);
        // Swap top-level surfaces when dark
        const rootSurfaces = document.querySelectorAll('.bg-white');
        rootSurfaces.forEach(el => {
          if (darkMode) {
            el.classList.add('bg-slate-900/60');
            el.classList.add('backdrop-blur');
            el.classList.remove('bg-white');
          } else {
            el.classList.remove('bg-slate-900/60');
            el.classList.remove('backdrop-blur');
            if (!el.closest('header')) el.classList.add('bg-white');
          }
        });
      }
      function setThemeSwitch(on) {
        setSwitchVisual(themeToggle, on);
        darkMode = on;
        applyTheme();
      }
      setThemeSwitch(false);
      themeToggle.addEventListener('click', () => setThemeSwitch(themeToggle.getAttribute('aria-checked') !== 'true'));
      themeToggle.addEventListener('keydown', (e) => { if (e.key === ' ' || e.key === 'Enter') { e.preventDefault(); themeToggle.click(); } });

      // FAQs
      const faqItems = [
        "How to check QR status?",
        "How to reset a staff password?",
        "How to view task logs?",
        "How to update profile info?",
        "How to change timezone or language?"
      ];
      const faqList = document.getElementById('faqList');
      faqItems.forEach((q, i) => {
        const item = document.createElement('div');
        item.className = 'p-3';
        item.innerHTML = `
          <button class="w-full flex items-center justify-between gap-4 text-left">
            <span class="text-sm text-slate-800">${q}</span>
            <i data-lucide="chevron-down" class="h-4 w-4 text-slate-500 transition-transform"></i>
          </button>
          <div class="mt-2 hidden">
            <p class="text-sm text-slate-600">This is a quick explanation for “${q}”. Refer to the documentation or contact support for more details.</p>
          </div>
        `;
        const btn = item.querySelector('button');
        const panel = item.querySelector('div');
        btn.addEventListener('click', () => {
          const isOpen = !panel.classList.contains('hidden');
          panel.classList.toggle('hidden', isOpen);
          const icon = btn.querySelector('[data-lucide]');
          icon.style.transform = isOpen ? 'rotate(0deg)' : 'rotate(180deg)';
        });
        faqList.appendChild(item);
      });
      initIcons();

      // Feedback Validation
      const fbSubject = document.getElementById('fbSubject');
      const fbSubjectHelp = document.getElementById('fbSubjectHelp');
      const fbDescription = document.getElementById('fbDescription');
      const fbDescriptionHelp = document.getElementById('fbDescriptionHelp');
      const fbCharCount = document.getElementById('fbCharCount');
      const fbAlert = document.getElementById('fbAlert');
      const fbFile = document.getElementById('fbFile');
      const fileLabel = document.getElementById('fileLabel');

      function validateFbSubject() {
        const ok = fbSubject.value.trim().length > 0;
        applyValid(fbSubject, ok, fbSubjectHelp, ok ? 'Looks good.' : '', !ok ? 'Subject is required.' : '');
        return ok;
      }
      function validateFbDescription() {
        const len = fbDescription.value.trim().length;
        fbCharCount.textContent = len;
        const ok = len >= 10;
        applyValid(fbDescription, ok, fbDescriptionHelp, ok ? 'Thanks for the details.' : '', !ok ? 'At least 10 characters.' : '');
        return ok;
      }
      fbSubject.addEventListener('input', validateFbSubject);
      fbDescription.addEventListener('input', validateFbDescription);
      fbFile.addEventListener('change', () => {
        if (fbFile.files && fbFile.files[0]) {
          fileLabel.textContent = fbFile.files[0].name;
        } else {
          fileLabel.textContent = 'Upload .png or .jpg';
        }
      });

      // Feedback submit
      const fbSubmit = document.getElementById('fbSubmit');
      fbSubmit.addEventListener('click', async () => {
        const ok = validateFbSubject() & validateFbDescription();
        fbAlert.classList.add('hidden');
        if (!ok) {
          fbAlert.className = 'text-sm text-rose-700 bg-rose-50 border border-rose-200 rounded-md px-3 py-2';
          fbAlert.textContent = 'Please fill all required fields correctly.';
          fbAlert.classList.remove('hidden');
          showToast({ title: 'Submission failed', message: 'Please correct the highlighted fields.', variant: 'error' });
          return;
        }
        // Loading state
        fbSubmit.disabled = true;
        fbSubmit.innerHTML = '<i data-lucide="loader-2" class="h-4 w-4 animate-spin"></i> Submitting...';
        initIcons();

        await new Promise(r => setTimeout(r, 1200));
        fbSubmit.disabled = false;
        fbSubmit.innerHTML = '<i data-lucide="send" class="h-4 w-4"></i> Submit';
        initIcons();

        // Reset form
        fbSubject.value = '';
        fbDescription.value = '';
        fbCharCount.textContent = '0';
        fileLabel.textContent = 'Upload .png or .jpg';
        [fbSubject, fbDescription].forEach(el => {
          el.classList.remove('border-emerald-300', 'border-rose-300', 'focus:ring-emerald-300/30', 'focus:ring-rose-300/30');
        });
        showToast({ title: 'Feedback submitted successfully!', message: 'Thank you for helping us improve.', variant: 'success' });
      });

      // Save actions
      document.getElementById('saveProfileBtn').addEventListener('click', () => {
        const ok = [validateName(), validateEmailField(), validatePhone(), validatePwd()].every(Boolean);
        if (!ok) {
          showToast({ title: 'Cannot save profile', message: 'Please fix the highlighted fields.', variant: 'error' });
          return;
        }
        showToast({ title: 'Profile saved', message: 'Your profile and security settings are updated.', variant: 'success' });
      });

      document.getElementById('saveSystemBtn').addEventListener('click', () => {
        showToast({ title: 'System settings saved', message: `Timezone: ${tzDropdown.value} • Language: ${langDropdown.value} • Theme: ${darkMode ? 'Dark' : 'Light'}`, variant: 'success' });
      });

      document.getElementById('saveAllBtn').addEventListener('click', () => {
        const ok = [validateName(), validateEmailField(), validatePhone(), validatePwd()].every(Boolean);
        if (!ok) {
          showToast({ title: 'Save all failed', message: 'Some fields need your attention.', variant: 'error' });
          return;
        }
        showToast({ title: 'All changes saved', message: 'Profile, system and feedback state synchronized.', variant: 'success' });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="min-h-screen flex flex-col">

<header className="sticky top-0 z-40 backdrop-blur supports-[backdrop-filter]:bg-white/70 bg-white/90 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-slate-900 text-white flex items-center justify-center text-sm font-semibold tracking-tight" style={{fontFamily: 'Inter, ui-sans-serif'}}>
              AA
            </div>
<div className="hidden sm:flex items-baseline gap-3">
<span className="text-sm text-slate-400">Admin</span>
<span className="text-slate-300">/</span>
<h1 className="text-[20px] sm:text-[22px] tracking-tight font-semibold text-slate-900">Settings</h1>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 active:scale-[0.99] transition" id="saveAllBtn">
<i className="h-4 w-4" data-lucide="save"></i>
              Save all
            </button>
</div>
</div>
</header>

<main className="flex-1">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 lg:py-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-8">

<aside className="lg:col-span-3">
<nav className="rounded-lg border border-slate-200 bg-white p-2">
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#profile">
<i className="h-4 w-4 text-slate-500 group-hover:text-slate-700" data-lucide="user"></i>
<span className="text-sm font-medium text-slate-700">Profile &amp; Account</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#system">
<i className="h-4 w-4 text-slate-500 group-hover:text-slate-700" data-lucide="settings"></i>
<span className="text-sm font-medium text-slate-700">System Settings</span>
</a>
<a className="group flex items-center gap-3 px-3 py-2 rounded-md hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="#support">
<i className="h-4 w-4 text-slate-500 group-hover:text-slate-700" data-lucide="help-circle"></i>
<span className="text-sm font-medium text-slate-700">Support &amp; Help</span>
</a>
</nav>
<div className="mt-4 rounded-lg border border-slate-200 bg-slate-50 p-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="info"></i>
<p className="text-xs text-slate-600">Changes are saved per section. Use “Save all” to persist everything at once.</p>
</div>
</div>
</aside>

<section className="lg:col-span-9 space-y-10">

<div className="rounded-xl border border-slate-200 bg-white" id="profile">
<div className="flex items-start justify-between gap-6 p-6 border-b border-slate-200">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Profile &amp; Account Settings</h2>
<p className="text-sm text-slate-600 mt-1.5">Manage your admin profile and security</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" id="saveProfileBtn">
<i className="h-4 w-4" data-lucide="check-circle"></i>
                    Save changes
                  </button>
</div>
<div className="p-6 space-y-6">

<div className="grid sm:grid-cols-2 gap-6">
<div className="sm:col-span-1">
<label className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Name</span>
<span className="text-xs text-slate-500 hidden" id="nameFeedbackIcon"></span>
</label>
<div className="relative mt-1">
<input className="peer w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-maxlength="50" data-minlength="2" data-required="true" id="nameInput" placeholder="Enter your name" type="text"/>
<div className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
<i className="h-4 w-4" data-lucide="user"></i>
</div>
</div>
<p className="mt-1.5 text-xs text-slate-500" id="nameHelp">2–50 characters.</p>
</div>

<div className="sm:col-span-1">
<label className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Email</span>
<span className="text-xs text-slate-500 hidden" id="emailFeedbackIcon"></span>
</label>
<div className="relative mt-1">
<input className="peer w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-required="true" data-type="email" id="emailInput" placeholder="Enter your email" type="email"/>
<div className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
<i className="h-4 w-4" data-lucide="mail"></i>
</div>
</div>
<p className="mt-1.5 text-xs text-slate-500" id="emailHelp">We’ll send notifications to this address.</p>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-6">

<div className="sm:col-span-1">
<label className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Phone Number</span>
<span className="text-xs text-slate-500 hidden" id="phoneFeedbackIcon"></span>
</label>
<div className="relative mt-1">
<input className="peer w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-pattern="^[0-9]{7,15}$" data-required="true" id="phoneInput" placeholder="Enter your phone number" type="tel"/>
<div className="pointer-events-none absolute right-3 top-2.5 text-slate-400">
<i className="h-4 w-4" data-lucide="phone"></i>
</div>
</div>
<p className="mt-1.5 text-xs text-slate-500" id="phoneHelp">Digits only, 7–15 characters.</p>
</div>

<div className="sm:col-span-1">
<label className="flex items-center justify-between">
<span className="text-sm font-medium text-slate-700">Change Password</span>
<span className="text-xs text-slate-500 hidden" id="passwordFeedbackIcon"></span>
</label>
<div className="relative mt-1">
<input className="peer w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-minlength="8" data-required="true" id="passwordInput" placeholder="Enter new password" type="password"/>
<button className="absolute right-2.5 top-2.5 p-1 rounded hover:bg-slate-100 text-slate-500 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" id="togglePwd" type="button">
<i className="h-4 w-4" data-lucide="eye"></i>
</button>
</div>
<p className="mt-1.5 text-xs text-slate-500">Use at least 8 characters with letters and numbers</p>
</div>
</div>

<div className="flex items-start justify-between gap-6 pt-4 border-t border-slate-200">
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-700">Two-Factor Authentication</span>
<i className="h-4 w-4 text-slate-500" data-lucide="shield"></i>
</div>
<p className="text-sm text-slate-600 mt-1">Enable additional security for your account</p>
<p className="hidden mt-2 text-xs text-emerald-600 flex items-center gap-1" id="twofaNote">
<i className="h-3.5 w-3.5" data-lucide="check"></i> 2FA is enabled.
                      </p>
</div>
<button aria-checked="false" className="relative inline-flex h-6 w-10 items-center rounded-full border border-slate-300 bg-slate-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" id="twofaToggle" role="switch">
<span className="sr-only">Enable 2FA</span>
<span className="dot translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow transition"></span>
</button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white" id="system">
<div className="flex items-start justify-between gap-6 p-6 border-b border-slate-200">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">System Settings</h2>
<p className="text-sm text-slate-600 mt-1.5">Configure timezone and language preferences</p>
</div>
<button className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" id="saveSystemBtn">
<i className="h-4 w-4" data-lucide="check-circle"></i>
                    Save changes
                  </button>
</div>
<div className="p-6 space-y-6">

<div className="grid sm:grid-cols-2 gap-6">
<div className="sm:col-span-1">
<label className="text-sm font-medium text-slate-700">Timezone</label>
<div className="relative mt-1">
<button className="w-full justify-between inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" id="tzButton" type="button">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="clock"></i>
<span id="tzSelected">UTC+4</span>
</div>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden hidden" id="tzMenu">
<ul className="max-h-56 overflow-auto py-1 text-sm">

</ul>
</div>
</div>
</div>

<div className="sm:col-span-1">
<label className="text-sm font-medium text-slate-700">Language</label>
<div className="relative mt-1">
<button className="w-full justify-between inline-flex items-center rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 hover:bg-slate-50 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" id="langButton" type="button">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="globe"></i>
<span id="langSelected">English</span>
</div>
<i className="h-4 w-4 text-slate-500" data-lucide="chevron-down"></i>
</button>
<div className="absolute z-30 mt-1 w-full rounded-md border border-slate-200 bg-white shadow-lg ring-1 ring-black/5 overflow-hidden hidden" id="langMenu">
<ul className="max-h-56 overflow-auto py-1 text-sm">

</ul>
</div>
</div>
</div>
</div>

<div className="flex items-start justify-between gap-6 pt-4 border-t border-slate-200">
<div>
<div className="flex items-center gap-2">
<span className="text-sm font-medium text-slate-700">Dark Mode</span>
<i className="h-4 w-4 text-slate-500" data-lucide="moon"></i>
</div>
<p className="text-sm text-slate-600 mt-1">Switch interface between light and dark theme</p>
<p className="hidden mt-2 text-xs text-slate-600" id="themeNote">Theme updated.</p>
</div>
<button aria-checked="false" className="relative inline-flex h-6 w-10 items-center rounded-full border border-slate-300 bg-slate-200 transition focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20" id="themeToggle" role="switch">
<span className="sr-only">Toggle theme</span>
<span className="dot translate-x-0 inline-block h-5 w-5 transform rounded-full bg-white shadow transition"></span>
</button>
</div>
</div>
</div>

<div className="rounded-xl border border-slate-200 bg-white" id="support">
<div className="flex items-start justify-between gap-6 p-6 border-b border-slate-200">
<div>
<h2 className="text-[22px] tracking-tight font-semibold text-slate-900">Support &amp; Help</h2>
<p className="text-sm text-slate-600 mt-1.5">Contact support or submit feedback</p>
</div>
<a className="inline-flex items-center gap-2 rounded-md border border-slate-300 bg-white px-3.5 py-2 text-sm font-medium text-slate-800 hover:bg-slate-50 hover:border-slate-400 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/20 transition" href="mailto:support@aerotag.com">
<i className="h-4 w-4" data-lucide="mail"></i>
                    Support Email
                  </a>
</div>
<div className="p-6 space-y-8">

<div className="space-y-3">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-luc="book-open"></i>
<h3 className="text-sm font-medium text-slate-700">FAQs</h3>
</div>
<div className="divide-y divide-slate-200 rounded-lg border border-slate-200 bg-white" id="faqList">

</div>
</div>

<div className="space-y-4">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="message-square"></i>
<h3 className="text-sm font-medium text-slate-700">Submit Feedback / Bug Report</h3>
</div>
<form className="space-y-4" id="feedbackForm">

<div>
<label className="text-sm font-medium text-slate-700">Subject</label>
<input className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-required="true" id="fbSubject" placeholder="Enter subject" type="text"/>
<p className="mt-1.5 text-xs text-slate-500" id="fbSubjectHelp">Required.</p>
</div>

<div>
<label className="text-sm font-medium text-slate-700">Description</label>
<textarea className="mt-1 w-full rounded-md border border-slate-300 bg-white px-3 py-2.5 text-sm text-slate-900 placeholder:text-slate-400 focus:border-slate-400 focus:outline-none focus:ring-2 focus:ring-slate-900/10 transition" data-minlength="10" data-required="true" id="fbDescription" placeholder="Describe the issue or feedback" rows="5"></textarea>
<div className="mt-1.5 flex items-center justify-between">
<p className="text-xs text-slate-500" id="fbDescriptionHelp">At least 10 characters.</p>
<span className="text-xs text-slate-400" id="fbCharCount">0</span>
</div>
</div>

<div>
<label className="text-sm font-medium text-slate-700">Attach Screenshot (Optional)</label>
<div className="mt-1">
<label className="flex cursor-pointer items-center justify-between gap-3 rounded-md border border-dashed border-slate-300 bg-white p-3 hover:border-slate-400 focus-within:ring-2 focus-within:ring-slate-900/10 transition">
<div className="flex items-center gap-2">
<i className="h-4 w-4 text-slate-500" data-lucide="paperclip"></i>
<span className="text-sm text-slate-600" id="fileLabel">Upload .png or .jpg</span>
</div>
<div className="rounded-md border border-slate-300 bg-slate-50 px-2.5 py-1 text-xs text-slate-700">Choose file</div>
<input accept="image/png,image/jpeg" className="sr-only" id="fbFile" type="file"/>
</label>
</div>
</div>

<div className="flex items-center justify-between pt-2">
<div className="hidden text-sm" id="fbAlert"></div>
<button className="inline-flex items-center gap-2 rounded-md bg-slate-900 text-white px-4 py-2.5 text-sm font-medium hover:bg-slate-800 focus:outline-none focus-visible:ring-2 focus-visible:ring-slate-900/30 active:scale-[0.99] transition" id="fbSubmit" type="button">
<i className="h-4 w-4" data-lucide="send"></i>
                          Submit
                        </button>
</div>
</form>
</div>
</div>
</div>
</section>
</div>
</div>
</main>

<footer className="border-t border-slate-200">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-14 flex items-center justify-between text-xs text-slate-500">
<span>© <span id="year"></span> Aerotag Assist</span>
<span className="flex items-center gap-2">
<i className="h-3.5 w-3.5" data-lucide="lock"></i>
            Secure settings
          </span>
</div>
</footer>
</div>

<div className="fixed top-4 right-4 z-50 space-y-2" id="toastHost"></div>


    </>
  );
}
