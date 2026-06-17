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
      
    document.addEventListener('DOMContentLoaded', () => {
      // Icons
      if (window.lucide) lucide.createIcons();

      // State
      let currentStep = 1;
      let selectedRole = null;
      let otpTimer = null;
      let otpSeconds = 5 * 60;

      const qs = (s, r = document) => r.querySelector(s);
      const qsa = (s, r = document) => Array.from(r.querySelectorAll(s));

      // Progress bars
      const setProgress = (step) => {
        for (let i = 1; i <= 5; i++) {
          const bar = qs('#p' + i);
          if (!bar) continue;
          bar.style.width = i <= step ? '100%' : '0%';
        }
      };

      const showStep = (step) => {
        currentStep = step;
        ['#step-1','#step-2','#step-3','#step-4','#step-5'].forEach((id, idx) => {
          const el = qs(id);
          if (el) el.classList.toggle('hidden', idx + 1 !== step);
        });
        setProgress(step);
      };

      // Helpers
      const toast = (msg) => {
        const t = document.createElement('div');
        t.className = 'fixed left-1/2 -translate-x-1/2 top-4 z-[60] rounded-md bg-neutral-900 text-white px-3 py-2 text-sm shadow-lg';
        t.textContent = msg;
        document.body.appendChild(t);
        setTimeout(() => t.remove(), 1800);
      };

      // Login validation
      qs('#btn-next-1')?.addEventListener('click', () => {
        const id = qs('#id-input');
        const pw = qs('#pass-input');
        const ok = id.value.trim().length > 2 && pw.value.length > 3;
        [id, pw].forEach(inp => {
          inp.classList.toggle('border-red-300', !ok);
          inp.classList.toggle('ring-2', !ok);
          inp.classList.toggle('ring-red-200', !ok);
        });
        if (!ok) {
          toast('Please enter valid credentials.');
          return;
        }
        showStep(2);
        startOtpTimer();
      });

      // Back buttons
      qs('#btn-back-2')?.addEventListener('click', () => showStep(1));
      qs('#btn-back-3')?.addEventListener('click', () => showStep(2));
      qs('#btn-back-4')?.addEventListener('click', () => showStep(3));

      // OTP inputs
      const otpInputs = qsa('.otp');
      otpInputs.forEach((box, idx) => {
        box.addEventListener('input', (e) => {
          const v = e.target.value.replace(/\D/g, '').slice(0,1);
          e.target.value = v;
          if (v && idx < otpInputs.length - 1) otpInputs[idx+1].focus();
        });
        box.addEventListener('keydown', (e) => {
          if (e.key === 'Backspace' && !e.target.value && idx > 0) otpInputs[idx - 1].focus();
        });
      });

      const startOtpTimer = () => {
        otpSeconds = 5 * 60;
        updateOtpTimer();
        if (otpTimer) clearInterval(otpTimer);
        otpTimer = setInterval(() => {
          otpSeconds--;
          updateOtpTimer();
          if (otpSeconds <= 0) clearInterval(otpTimer);
        }, 1000);
      };

      const updateOtpTimer = () => {
        const m = String(Math.floor(otpSeconds / 60)).padStart(2,'0');
        const s = String(otpSeconds % 60).padStart(2,'0');
        const el = qs('#expires');
        if (el) el.textContent = 'Code expires in ' + m + ':' + s;
      };

      qs('#resend')?.addEventListener('click', () => {
        startOtpTimer();
        toast('Verification code resent.');
      });

      qs('#btn-next-2')?.addEventListener('click', () => {
        const code = otpInputs.map(i => i.value).join('');
        if (code.length !== 6) {
          toast('Please enter the 6-digit code.');
          return;
        }
        showStep(3);
      });

      // Role selection
      qsa('.role-card').forEach(card => {
        card.addEventListener('click', () => {
          qsa('.role-card').forEach(c => c.classList.remove('ring-2','ring-amber-200','bg-amber-50/30'));
          card.classList.add('ring-2','ring-amber-200','bg-amber-50/30');
          selectedRole = card.getAttribute('data-role');
        });
      });

      qs('#btn-next-3')?.addEventListener('click', () => {
        if (!selectedRole) {
          toast('Please select a role to continue.');
          return;
        }
        const idVal = qs('#id-input')?.value?.trim();
        const maybeName = idVal?.includes('@') ? (idVal.split('@')[0] || 'Guest') : 'Guest';
        qs('#user-name').textContent = capitalize(maybeName);
        showStep(4);
      });

      qs('#btn-next-4')?.addEventListener('click', () => {
        showStep(5);
      });

      // Tutorial overlay
      const overlay = qs('#tour-overlay');
      const card2 = qs('#tour-card-2');
      qs('#btn-begin-tut')?.addEventListener('click', () => {
        overlay?.classList.remove('hidden');
        card2?.classList.add('hidden');
      });
      qs('#tour-next')?.addEventListener('click', () => {
        card2?.classList.remove('hidden');
      });

      const endTutorial = () => {
        overlay?.classList.add('hidden');
        launchApp();
      };
      qs('#tour-done')?.addEventListener('click', endTutorial);
      qs('#tour-skip')?.addEventListener('click', endTutorial);
      qs('#btn-skip-tut')?.addEventListener('click', launchApp);

      function launchApp() {
        // Hide auth flow and progress, show app shell
        qs('#auth-flow')?.classList.add('hidden');
        qs('#progress')?.classList.add('hidden');
        qs('#app-shell')?.classList.remove('hidden');

        // Set role badge and show relevant dashboard + sidebar
        const badge = qs('#role-badge span');
        if (badge && selectedRole) badge.textContent = roleLabel(selectedRole);

        const sidebars = ['budget','revenue','policy','audit'];
        sidebars.forEach(r => {
          qs('#sidebar-' + r)?.classList.toggle('hidden', r !== selectedRole);
          qs('#dash-' + r)?.classList.toggle('hidden', r !== selectedRole);
        });

        // Initialize charts when app loads
        initCharts();

        // Update avatar initials from name
        const name = qs('#user-name')?.textContent?.trim() || 'G';
        const initial = name.charAt(0).toUpperCase();
        const bubble = document.querySelector('.w-9.h-9.rounded-full.bg-neutral-800');
        if (bubble) bubble.textContent = initial;
      }

      // Sidebar toggle (mobile)
      qs('#btn-toggle-sidebar')?.addEventListener('click', () => {
        const sb = qs('#app-sidebar');
        if (!sb) return;
        sb.classList.toggle('hidden');
      });

      // Top-bar chat toggle opens drawer on < xl
      const msgBtn = document.querySelector('button i[data-lucide="message-square"]')?.parentElement;
      msgBtn?.addEventListener('click', () => openDrawer(true));

      const openDrawer = (open) => {
        const d = qs('#mona-drawer');
        const ov = qs('#drawer-overlay');
        if (!d || !ov) return;
        if (open) {
          d.classList.remove('translate-x-full');
          ov.classList.remove('pointer-events-none');
          ov.classList.remove('opacity-0');
          ov.classList.add('opacity-100');
        } else {
          d.classList.add('translate-x-full');
          ov.classList.add('pointer-events-none');
          ov.classList.remove('opacity-100');
          ov.classList.add('opacity-0');
        }
      };
      qs('#drawer-close')?.addEventListener('click', () => openDrawer(false));
      qs('#drawer-overlay')?.addEventListener('click', () => openDrawer(false));

      // Mona chat interactions
      const appendMsg = (container, text, mine = false) => {
        const row = document.createElement('div');
        row.className = 'flex items-start gap-3 ' + (mine ? 'justify-end' : '');
        if (mine) {
          const bubble = document.createElement('div');
          bubble.className = 'rounded-lg bg-amber-700 text-white px-3 py-2 text-sm max-w-[85%]';
          bubble.textContent = text;
          row.appendChild(bubble);
        } else {
          const avatar = document.createElement('div');
          avatar.className = 'h-8 w-8 rounded-full bg-amber-100 ring-1 ring-amber-200 grid place-items-center';
          avatar.innerHTML = '<i data-lucide="sparkles" class="h-[16px] w-[16px] text-amber-700"></i>';
          const bubble = document.createElement('div');
          bubble.className = 'rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 max-w-[85%]';
          bubble.textContent = text;
          row.appendChild(avatar);
          row.appendChild(bubble);
        }
        container.appendChild(row);
        container.scrollTop = container.scrollHeight;
        if (window.lucide) lucide.createIcons();
      };

      const monaBody = qs('#mona-chat-body');
      const monaInput = qs('#mona-input');
      const monaSend = qs('#mona-send');

      const drawerBody = qs('#drawer-chat-body');
      const drawerInput = qs('#drawer-input');
      const drawerSend = qs('#drawer-send');

      const handleSend = (bodyEl, inputEl) => {
        const v = inputEl.value.trim();
        if (!v) return;
        appendMsg(bodyEl, v, true);
        inputEl.value = '';
        setTimeout(() => {
          appendMsg(bodyEl, 'Here’s a quick insight: I’ll pull the latest KPIs and highlight notable changes vs last period.');
        }, 600);
      };

      monaSend?.addEventListener('click', () => handleSend(monaBody, monaInput));
      monaInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleSend(monaBody, monaInput); }});
      drawerSend?.addEventListener('click', () => handleSend(drawerBody, drawerInput));
      drawerInput?.addEventListener('keydown', (e) => { if (e.key === 'Enter') { e.preventDefault(); handleSend(drawerBody, drawerInput); }});

      // Quick chips
      qsa('.quick-chip').forEach(chip => chip.addEventListener('click', () => {
        monaInput.value = chip.textContent.trim();
        monaSend.click();
      }));
      qsa('.drawer-chip').forEach(chip => chip.addEventListener('click', () => {
        drawerInput.value = chip.textContent.trim();
        drawerSend.click();
      }));

      qs('#clear-chat')?.addEventListener('click', () => {
        if (monaBody) monaBody.innerHTML = '';
      });

      // Language toggle (basic i18n)
      const t = {
        en: {
          title: 'Secure Sign-in',
          subtitle: 'Access UAE Ministry of Finance services',
          secure: 'Bank-grade encryption',
          uaePass: 'Sign in with UAE PASS',
          id: 'Emirates ID / Email',
          pass: 'Password',
          remember: 'Remember this device',
          continue: 'Continue',
          mfaDesc: 'Choose how you would like to receive your verification code',
          mfaSms: 'SMS to +971 •• •• 1234',
          mfaSmsSub: 'Code arrives in ~10 seconds',
          mfaEmail: 'Email to you@domain.ae',
          mfaEmailSub: 'Check Inbox / Spam',
          otp: 'Enter 6-digit code',
          resend: 'Resend code',
          verify: 'Verify',
          roleContinue: 'Continue',
          startTutorial: 'Start quick tutorial',
          beginTour: 'Begin tour',
          skip: 'Skip'
        },
        ar: {
          title: 'تسجيل دخول آمن',
          subtitle: 'الوصول إلى خدمات وزارة المالية',
          secure: 'تشفير بمستوى بنكي',
          uaePass: 'تسجيل الدخول عبر الهوية الرقمية',
          id: 'الهوية الإماراتية / البريد الإلكتروني',
          pass: 'كلمة المرور',
          remember: 'تذكر هذا الجهاز',
          continue: 'متابعة',
          mfaDesc: 'اختر طريقة استلام رمز التحقق',
          mfaSms: 'رسالة نصية إلى +971 •• •• 1234',
          mfaSmsSub: 'يصل الرمز خلال ~10 ثوانٍ',
          mfaEmail: 'بريد إلكتروني إلى you@domain.ae',
          mfaEmailSub: 'تحقق من الوارد / غير المرغوب',
          otp: 'أدخل رمز مكوّن من 6 أرقام',
          resend: 'إعادة إرسال الرمز',
          verify: 'تحقق',
          roleContinue: 'متابعة',
          startTutorial: 'ابدأ جولة سريعة',
          beginTour: 'ابدأ الجولة',
          skip: 'تجاوز'
        }
      };

      const setLang = (lang) => {
        const L = t[lang];
        qs('#title').textContent = L.title;
        qs('#subtitle').textContent = L.subtitle;
        qs('#secure-note').textContent = L.secure;
        qs('#uae-pass-label').textContent = L.uaePass;
        qs('#lbl-id').textContent = L.id;
        qs('#lbl-pass').textContent = L.pass;
        qs('#lbl-remember').textContent = L.remember;
        qs('#continue-label').textContent = L.continue;
        qs('#mfa-desc').textContent = L.mfaDesc;
        qs('#mfa-sms').textContent = L.mfaSms;
        qs('#mfa-sms-sub').textContent = L.mfaSmsSub;
        qs('#mfa-email').textContent = L.mfaEmail;
        qs('#mfa-email-sub').textContent = L.mfaEmailSub;
        qs('#otp-label').textContent = L.otp;
        qs('#resend').textContent = L.resend;
        qs('#verify-label').textContent = L.verify;
        qs('#btn-continue-role').textContent = L.roleContinue;
        qs('#start-tutorial').textContent = L.startTutorial;
        qs('#begin-tour').textContent = L.beginTour;
        qs('#btn-skip-tut').textContent = L.skip;
        qs('#tour-skip').textContent = L.skip;
        document.documentElement.lang = lang === 'ar' ? 'ar' : 'en';
        document.documentElement.dir = lang === 'ar' ? 'rtl' : 'ltr';
        toast(lang === 'ar' ? 'تم تغيير اللغة إلى العربية' : 'Language set to English');
      };

      qs('#lang-en')?.addEventListener('click', () => setLang('en'));
      qs('#lang-ar')?.addEventListener('click', () => setLang('ar'));

      // Charts
      function initCharts() {
        // Budget Performance (line)
        if (qs('#budgetPerformance')) {
          new Chart(qs('#budgetPerformance'), {
            type: 'line',
            data: {
              labels: ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'],
              datasets: [
                { label: 'Plan', data: [8,10,12,14,16,18,20,22,24,26,28,30], borderColor: '#a16207', backgroundColor: 'transparent', tension: 0.35, borderWidth: 2, borderDash: [6,4] },
                { label: 'Actual', data: [7.5,9.2,11.8,13.5,15.9,17.6,19.8,22.1,23.2,25.6,27.9,29.4], borderColor: '#0ea5e9', backgroundColor: 'rgba(14,165,233,0.15)', tension: 0.35, fill: true }
              ]
            },
            options: {
              responsive: true,
              plugins: { legend: { position: 'bottom' } },
              scales: { y: { grid: { color: 'rgba(0,0,0,0.06)' }}, x: { grid: { display: false }}}
            }
          });
        }

        // Allocation by Function (doughnut)
        if (qs('#budgetAllocation')) {
          const ctx = qs('#budgetAllocation');
          const chart = new Chart(ctx, {
            type: 'doughnut',
            data: {
              labels: ['Health','Education','Infrastructure','Defense','Admin'],
              datasets: [{
                data: [28,24,22,16,10],
                backgroundColor: ['#f59e0b','#84cc16','#0ea5e9','#ec9','#10b981'],
                borderWidth: 0
              }]
            },
            options: {
              responsive: true,
              cutout: '62%',
              plugins: { legend: { position: 'bottom' } },
              onClick: (_e, els) => {
                const details = qs('#allocationDetails ul');
                if (!els.length || !details) return;
                const i = els[0].index;
                const label = chart.data.labels[i];
                const samples = {
                  Health: ['Hospitals: AED 8.2B','Clinics: AED 3.1B','Medicines: AED 1.3B'],
                  Education: ['Schools: AED 5.4B','Universities: AED 2.9B','Training: AED 0.7B'],
                  Infrastructure: ['Roads: AED 4.1B','Ports: AED 2.3B','Digital: AED 1.2B'],
                  Defense: ['Operations: AED 2.1B','Logistics: AED 0.9B','Training: AED 0.5B'],
                  Admin: ['HR: AED 0.7B','ICT: AED 0.5B','Facilities: AED 0.4B']
                };
                details.innerHTML = samples[label].map(li => `<li>${li}</li>`).join('');
              }
            }
          });
          qs('#btn-reset-drill')?.addEventListener('click', () => {
            const details = qs('#allocationDetails ul');
            if (details) details.innerHTML = '<li>Select a segment to view breakdown</li>';
          });
        }

        // Revenue Streams (bar)
        if (qs('#revenueStreams')) {
          new Chart(qs('#revenueStreams'), {
            type: 'bar',
            data: {
              labels: ['VAT','Customs','Excise','Fees','Zakat'],
              datasets: [{
                label: 'Collections (AED B)',
                data: [1.4, 0.9, 0.6, 0.8, 0.4],
                backgroundColor: ['#0ea5e9','#84cc16','#f59e0b','#10b981','#ec4899'],
                borderRadius: 6
              }]
            },
            options: {
              responsive: true,
              plugins: { legend: { display: false }},
              scales: { y: { grid: { color: 'rgba(0,0,0,0.06)' }}, x: { grid: { display: false }}}
            }
          });
        }

        // Revenue Forecast (mixed)
        if (qs('#revenueForecast')) {
          new Chart(qs('#revenueForecast'), {
            type: 'line',
            data: {
              labels: ['Oct','Nov','Dec'],
              datasets: [
                { label: 'Forecast', data: [3.1, 3.2, 3.35], borderColor: '#a16207', backgroundColor: 'transparent', tension: 0.35, borderDash: [6,4], borderWidth: 2 },
                { label: 'Expected', data: [3.05, 3.15, 3.3], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.15)', fill: true, tension: 0.35 }
              ]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { y: { grid: { color: 'rgba(0,0,0,0.06)' }}, x: { grid: { display: false }}} }
          });
        }

        // Policy Trends (line)
        if (qs('#policyTrends')) {
          new Chart(qs('#policyTrends'), {
            type: 'line',
            data: {
              labels: Array.from({length: 24}, (_,i) => `M${i+1}`),
              datasets: [
                { label: 'GDP Growth', data: Array.from({length:24}, () => (Math.random() * 2 + 2.5).toFixed(2)), borderColor: '#0ea5e9', backgroundColor: 'rgba(14,165,233,0.15)', fill: true, tension: 0.35 },
                { label: 'Inflation', data: Array.from({length:24}, () => (Math.random() * 1.2 + 1.2).toFixed(2)), borderColor: '#ef4444', backgroundColor: 'transparent', tension: 0.35 }
              ]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
          });
        }

        // Policy Impact (pie)
        if (qs('#policyImpact')) {
          new Chart(qs('#policyImpact'), {
            type: 'pie',
            data: {
              labels: ['Health','Education','Infrastructure','Social','Other'],
              datasets: [{ data: [26,22,20,18,14], backgroundColor: ['#f59e0b','#0ea5e9','#10b981','#84cc16','#a78bfa'], borderWidth: 0 }]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } } }
          });
        }

        // Audit Risk (radar)
        if (qs('#audit')) {
          new Chart(qs('#auditRisk'), {
            type: 'radar',
            data: {
              labels: ['Procurement','Payments','Receipts','Payroll','Grants','Assets'],
              datasets: [
                { label: 'Inherent', data: [65,60,40,30,50,55], borderColor: '#ef4444', backgroundColor: 'rgba(239,68,68,0.15)' },
                { label: 'Residual', data: [40,35,25,20,28,32], borderColor: '#10b981', backgroundColor: 'rgba(16,185,129,0.15)' }
              ]
            },
            options: { responsive: true, plugins: { legend: { position: 'bottom' } }, scales: { r: { grid: { color: 'rgba(0,0,0,0.08)' }}} }
          });
        }
      }

      // Utilities
      function roleLabel(r) {
        return ({
          budget: 'Budget Officer',
          revenue: 'Revenue Manager',
          policy: 'Policy Maker',
          audit: 'Auditor'
        })[r] || 'Role';
      }
      function capitalize(s) { return s ? s.charAt(0).toUpperCase() + s.slice(1) : s; }

      // UAE PASS button mock
      qs('#btn-uaepass')?.addEventListener('click', () => {
        toast('Redirecting to UAE PASS...');
        setTimeout(() => showStep(2), 800);
      });

      // Forgot password
      qs('#forgot')?.addEventListener('click', () => toast('Password reset link will be sent if your ID is registered.'));

      // Footer year
      qs('#year').textContent = new Date().getFullYear();

      // Initial progress
      showStep(1);
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
      

<div className="fixed inset-0 -z-10 pointer-events-none">
<div className="absolute inset-0 bg-[radial-gradient(1200px_600px_at_100%_-10%,rgba(180,143,65,0.06),transparent),radial-gradient(800px_400px_at_-10%_0%,rgba(75,50,20,0.05),transparent)]"></div>
</div>

<header className="w-full bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/70">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-4 flex items-center justify-between">

<div className="flex items-center gap-3">

<div className="relative h-10 w-10 rounded-full bg-white shadow-sm ring-1 ring-neutral-200 grid place-items-center">
<div className="h-5 w-5 rounded-full border border-amber-700/40 relative">
<span className="absolute -left-1 top-1 h-1 w-3 bg-[#00732F]"></span>
<span className="absolute -right-1 top-2 h-1 w-3 bg-[#FF0000]"></span>
<span className="absolute left-1 bottom-1 h-1 w-3 bg-[#000000]"></span>
<span className="absolute right-1 bottom-2 h-1 w-3 bg-[#FFFFFF] ring-1 ring-neutral-200"></span>
</div>
</div>
<div className="flex flex-col">
<div className="text-[13px] tracking-[0.12em] font-medium text-neutral-700 uppercase">United Arab Emirates</div>
<div className="text-[15px] font-medium tracking-tight text-amber-800">Ministry of Finance</div>
</div>
</div>

<div className="flex items-center gap-2">
<button className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-medium text-neutral-800 hover:border-amber-300 hover:bg-amber-50/60 transition" id="lang-en">
<i className="h-[18px] w-[18px] text-amber-700 group-hover:scale-110 transition" data-lucide="globe"></i>
<span>English</span>
</button>
<button className="group inline-flex items-center gap-2 rounded-full border border-neutral-200 bg-white px-3.5 py-2 text-[13px] font-medium text-neutral-800 hover:border-amber-300 hover:bg-amber-50/60 transition" id="lang-ar">
<i className="h-[18px] w-[18px] text-amber-700 group-hover:scale-110 transition" data-lucide="globe"></i>
<span>العربية</span>
</button>
</div>
</div>
<div className="border-t border-neutral-200/80"></div>
</header>

<div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 mt-6" id="progress">
<div className="flex items-center gap-3">
<div className="flex-1 h-1 rounded bg-neutral-200">
<div className="h-1 w-0 bg-amber-600 rounded transition-all duration-700" id="p1"></div>
</div>
<div className="flex-1 h-1 rounded bg-neutral-200">
<div className="h-1 w-0 bg-amber-600 rounded transition-all duration-700" id="p2"></div>
</div>
<div className="flex-1 h-1 rounded bg-neutral-200">
<div className="h-1 w-0 bg-amber-600 rounded transition-all duration-700" id="p3"></div>
</div>
<div className="flex-1 h-1 rounded bg-neutral-200">
<div className="h-1 w-0 bg-amber-600 rounded transition-all duration-700" id="p4"></div>
</div>
<div className="flex-1 h-1 rounded bg-neutral-200">
<div className="h-1 w-0 bg-amber-600 rounded transition-all duration-700" id="p5"></div>
</div>
</div>
</div>

<main className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-8 grid lg:grid-cols-12 gap-8" id="auth-flow">

<section className="lg:col-span-7 space-y-6">

<div className="relative overflow-hidden rounded-xl border border-neutral-200 bg-white shadow-sm">

<div className="flex items-center justify-between px-6 pt-6">
<div className="flex items-center gap-3">
<div className="h-9 w-9 rounded-md grid place-items-center bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="shield"></i>
</div>
<div>
<h1 className="text-xl sm:text-2xl tracking-tight font-semibold text-neutral-900" id="title">Secure Sign-in</h1>
<p className="text-sm text-neutral-500" id="subtitle">Access UAE Ministry of Finance services</p>
</div>
</div>
<div className="hidden sm:flex items-center gap-3 text-xs text-neutral-500">
<i className="h-[16px] w-[16px] text-emerald-700" data-lucide="lock"></i>
<span id="secure-note">Bank-grade encryption</span>
</div>
</div>
<div className="px-6 pb-6 pt-4">

<div className="space-y-6" id="step-1">

<button className="w-full rounded-lg border border-neutral-200/80 bg-white hover:bg-neutral-50/70 transition px-4 py-3.5 flex items-center justify-center gap-3 group" id="btn-uaepass">
<span className="inline-flex h-6 w-6 rounded border border-amber-300 bg-amber-50/70 items-center justify-center">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="fingerprint"></i>
</span>
<span className="text-sm font-medium text-neutral-800" id="uae-pass-label">Sign in with UAE PASS</span>
<i className="h-[18px] w-[18px] text-neutral-500 group-hover:translate-x-0.5 transition" data-lucide="arrow-right"></i>
</button>

<div className="relative text-center">
<div className="absolute inset-x-0 top-1/2 -translate-y-1/2 h-px bg-neutral-200"></div>
<span className="relative z-10 bg-white px-3 text-[12px] text-neutral-500">or</span>
</div>

<form className="grid gap-4" id="form-login">
<div className="grid sm:grid-cols-2 gap-4">
<div className="space-y-2">
<label className="text-sm text-neutral-700" id="lbl-id">Emirates ID / Email</label>
<div className="relative">
<input autocomplete="username" className="w-full rounded-lg border border-neutral-200 px-3.5 py-3 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-amber-300 outline-none transition bg-white" id="id-input" placeholder="e.g. 784-XXXX-XXXXXXX-X or you@domain.ae" type="text"/>
<i className="absolute right-3 top-3.5 h-[18px] w-[18px] text-neutral-400" data-lucide="user"></i>
</div>
</div>
<div className="space-y-2">
<label className="text-sm text-neutral-700" id="lbl-pass">Password</label>
<div className="relative">
<input autocomplete="current-password" className="w-full rounded-lg border border-neutral-200 px-3.5 py-3 text-sm placeholder:text-neutral-400 focus:ring-2 focus:ring-amber-300 outline-none transition bg-white" id="pass-input" placeholder="••••••••" type="password"/>
<i className="absolute right-3 top-3.5 h-[18px] w-[18px] text-neutral-400" data-lucide="lock"></i>
</div>
</div>
</div>
<div className="flex items-center justify-between">
<label className="inline-flex items-center gap-2 cursor-pointer">
<input className="peer sr-only" id="remember" type="checkbox"/>
<span className="h-5 w-9 rounded-full bg-neutral-200 peer-checked:bg-amber-600 transition relative ring-1 ring-neutral-300/70">
<span className="absolute left-0.5 top-0.5 h-4 w-4 rounded-full bg-white shadow transition peer-checked:translate-x-4"></span>
</span>
<span className="text-sm text-neutral-600" id="lbl-remember">Remember this device</span>
</label>
<button className="text-sm text-amber-700 hover:text-amber-800 underline underline-offset-2" id="forgot" type="button">Forgot password?</button>
</div>
<div className="flex items-center justify-end gap-3 pt-2">
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-700 text-white px-4 py-3 text-sm font-medium hover:bg-amber-800 active:scale-[0.99] transition" id="btn-next-1" type="button">
<span id="continue-label">Continue</span>
<i className="h-[18px] w-[18px]" data-lucide="arrow-right"></i>
</button>
</div>
</form>

<div className="mt-3 flex items-center gap-2 text-[12px] text-neutral-500">
<i className="h-[16px] w-[16px] text-emerald-700" data-lucide="shield-check"></i>
<span id="footnote-1">Your credentials are handled securely in compliance with UAE government standards.</span>
</div>
</div>

<div className="hidden space-y-6" id="step-2">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[13px] text-neutral-700">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="bell"></i>
<span id="mfa-desc">Choose how you would like to receive your verification code</span>
</div>
</div>
<div className="grid sm:grid-cols-2 gap-4">
<label className="group cursor-pointer rounded-lg border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-center gap-3">
<input checked="" className="sr-only" name="mfa" type="radio" value="sms"/>
<span className="h-9 w-9 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="phone"></i>
</span>
<div>
<div className="text-sm font-medium" id="mfa-sms">SMS to +971 •• •• 1234</div>
<div className="text-xs text-neutral-500" id="mfa-sms-sub">Code arrives in ~10 seconds</div>
</div>
</label>
<label className="group cursor-pointer rounded-lg border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-center gap-3">
<input className="sr-only" name="mfa" type="radio" value="email"/>
<span className="h-9 w-9 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="mail"></i>
</span>
<div>
<div className="text-sm font-medium" id="mfa-email">Email to you@domain.ae</div>
<div className="text-xs text-neutral-500" id="mfa-email-sub">Check Inbox / Spam</div>
</div>
</label>
</div>
<div className="space-y-3">
<label className="text-sm text-neutral-700" id="otp-label">Enter 6-digit code</label>
<div className="flex items-center gap-2 sm:gap-3">

<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1" />
<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1" />
<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1" />
<span className="w-4 text-neutral-400">—</span>
<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1"/>
<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1"/>
<input className="otp h-12 w-10 sm:w-12 text-center text-lg rounded-md border border-neutral-200 focus:ring-2 focus:ring-amber-300 outline-none" maxlength="1"/>
</input></input></input></div>
<div className="flex items-center justify-between">
<button className="text-sm text-amber-700 hover:text-amber-800 underline underline-offset-2" id="resend">Resend code</button>
<div className="text-sm text-neutral-500" id="expires">Code expires in 04:59</div>
</div>
<div className="flex items-center justify-end gap-3 pt-2">
<button className="text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50" id="btn-back-2" type="button">Back</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-700 text-white px-4 py-3 text-sm font-medium hover:bg-amber-800 active:scale-[0.99] transition" id="btn-next-2" type="button">
<span id="verify-label">Verify</span>
<i className="h-[18px] w-[18px]" data-lucide="check"></i>
</button>
</div>
</div>
</div>

<div className="hidden space-y-6" id="step-3">
<p className="text-sm text-neutral-600" id="role-desc">Select your role to personalize your experience</p>
<div className="grid sm:grid-cols-2 gap-4">

<button className="role-card group rounded-xl border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-start gap-3 text-left transition" data-role="budget">
<span className="h-10 w-10 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[20px] w-[20px] text-amber-700" data-lucide="pie-chart"></i>
</span>
<div>
<div className="font-medium text-neutral-900" id="role-budget">Budget Officer</div>
<div className="text-sm text-neutral-500">Allocations, commitments, spending insights</div>
</div>
</button>
<button className="role-card group rounded-xl border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-start gap-3 text-left transition" data-role="revenue">
<span className="h-10 w-10 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[20px] w-[20px] text-amber-700" data-lucide="banknote"></i>
</span>
<div>
<div className="font-medium text-neutral-900" id="role-revenue">Revenue Manager</div>
<div className="text-sm text-neutral-500">Collections, forecasts, inflows &amp; trends</div>
</div>
</button>
<button className="role-card group rounded-xl border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-start gap-3 text-left transition" data-role="policy">
<span className="h-10 w-10 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[20px] w-[20px] text-amber-700" data-lucide="scroll-text"></i>
</span>
<div>
<div className="font-medium text-neutral-900" id="role-policy">Policy Maker</div>
<div className="text-sm text-neutral-500">Impact analysis, public finance KPIs</div>
</div>
</button>
<button className="role-card group rounded-xl border border-neutral-200 hover:border-amber-300 bg-white p-4 flex items-start gap-3 text-left transition" data-role="audit">
<span className="h-10 w-10 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[20px] w-[20px] text-amber-700" data-lucide="file-search"></i>
</span>
<div>
<div className="font-medium text-neutral-900" id="role-audit">Auditor</div>
<div className="text-sm text-neutral-500">Controls, compliance, drill-down trails</div>
</div>
</button>
</div>
<div className="flex items-center justify-end gap-3">
<button className="text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50" id="btn-back-3" type="button">Back</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-700 text-white px-4 py-3 text-sm font-medium hover:bg-amber-800 active:scale-[0.99] transition" id="btn-next-3" type="button">
<span id="btn-continue-role">Continue</span>
<i className="h-[18px] w-[18px]" data-lucide="arrow-right"></i>
</button>
</div>
</div>

<div className="hidden space-y-6" id="step-4">
<div className="flex items-start gap-4">
<img alt="Mona Avatar" className="h-16 w-16 rounded-full object-cover ring-2 ring-amber-200" id="mona-avatar" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="space-y-1.5">
<div className="text-xl sm:text-2xl font-semibold tracking-tight text-neutral-900" id="welcome-line">Welcome, <span id="user-name">Guest</span></div>
<p className="text-sm text-neutral-600" id="mona-line">I’m Mona, your AI financial advisor. I’ll tailor analytics for your role.</p>
<div className="flex flex-wrap items-center gap-2 pt-1">
<span className="inline-flex items-center gap-1.5 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-1 text-[12px] text-emerald-700">
<i className="h-[14px] w-[14px]" data-lucide="sparkles"></i> AI Insights Enabled
                  </span>
<span className="inline-flex items-center gap-1.5 rounded-md border border-amber-200 bg-amber-50 px-2 py-1 text-[12px] text-amber-700">
<i className="h-[14px] w-[14px]" data-lucide="shield"></i> Secure Workspace
                  </span>
</div>
</div>
</div>
<div className="flex items-center justify-end gap-3">
<button className="text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50" id="btn-back-4" type="button">Back</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-700 text-white px-4 py-3 text-sm font-medium hover:bg-amber-800 active:scale-[0.99] transition" id="btn-next-4" type="button">
<span id="start-tutorial">Start quick tutorial</span>
<i className="h-[18px] w-[18px]" data-lucide="compass"></i>
</button>
</div>
</div>

<div className="hidden space-y-4" id="step-5">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 px-4 py-3 text-[13px] text-neutral-700">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="compass"></i>
<span id="tut-desc">We’ll highlight key areas of your new dashboard</span>
</div>
</div>
<div className="flex items-center justify-end gap-3">
<button className="text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50" id="btn-skip-tut" type="button">Skip</button>
<button className="inline-flex items-center gap-2 rounded-lg bg-amber-700 text-white px-4 py-3 text-sm font-medium hover:bg-amber-800 active:scale-[0.99] transition" id="btn-begin-tut" type="button">
<span id="begin-tour">Begin tour</span>
<i className="h-[18px] w-[18px]" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>
</div>
</section>

<aside className="lg:col-span-5 space-y-6">
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3 pb-3 border-b border-neutral-200/70">
<div className="h-9 w-9 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="info"></i>
</div>
<div className="text-[15px] font-medium text-neutral-900" id="help-title">Helpful information</div>
</div>
<div className="pt-3 space-y-2 text-sm text-neutral-700" id="help-content">
<p>Use UAE PASS for the fastest login. Otherwise, sign in with MoF IDAM.</p>
<ul className="list-disc pl-5 text-neutral-600">
<li>Your session is encrypted and monitored</li>
<li>Need assistance? Contact IT Service Desk</li>
</ul>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-5 shadow-sm">
<div className="flex items-center gap-3 pb-3 border-b border-neutral-200/70">
<div className="h-9 w-9 grid place-items-center rounded-md bg-emerald-50 ring-1 ring-emerald-200/60">
<i className="h-[18px] w-[18px] text-emerald-700" data-lucide="check-circle"></i>
</div>
<div className="text-[15px] font-medium text-neutral-900" id="checklist-title">Pre-checks</div>
</div>
<ul className="pt-3 space-y-2 text-sm text-neutral-700">
<li className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-emerald-700" data-lucide="badge-check"></i>
<span id="chk1">Valid Emirates ID or Email</span>
</li>
<li className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-emerald-700" data-lucide="badge-check"></i>
<span id="chk2">Registered with MoF / UAE PASS</span>
</li>
<li className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-emerald-700" data-lucide="badge-check"></i>
<span id="chk3">Access to your phone or email</span>
</li>
</ul>
</div>
</aside>
</main>

<div className="hidden fixed inset-0 z-50 bg-black/40 backdrop-blur-[1.5px]" id="tour-overlay">

<div className="absolute left-1/2 -translate-x-1/2 top-24 w-[92%] max-w-3xl rounded-xl bg-white shadow-lg ring-1 ring-neutral-200">
<div className="flex items-start gap-3 p-4">
<div className="h-9 w-9 grid place-items-center rounded-md bg-amber-50 ring-1 ring-amber-200/60">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="layout-dashboard"></i>
</div>
<div className="flex-1">
<div className="font-medium text-neutral-900" id="tour-1-title">Your secure dashboard</div>
<p className="text-sm text-neutral-600" id="tour-1-sub">Navigate modules for budget, revenue, and policy insights tailored to your role.</p>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="text-sm px-3 py-2 rounded-lg border border-neutral-200 bg-white hover:bg-neutral-50" id="tour-skip">Skip</button>
<button className="text-sm px-3 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800" id="tour-next">Next</button>
</div>
</div>
</div>
</div>

<div className="hidden absolute right-6 bottom-10 max-w-sm rounded-xl bg-white shadow-lg ring-1 ring-neutral-200" id="tour-card-2">
<div className="flex items-start gap-3 p-4">
<div className="h-9 w-9 grid place-items-center rounded-md bg-emerald-50 ring-1 ring-emerald-200/60">
<i className="h-[18px] w-[18px] text-emerald-700" data-lucide="sparkles"></i>
</div>
<div className="flex-1">
<div className="font-medium text-neutral-900" id="tour-2-title">Ask Mona anything</div>
<p className="text-sm text-neutral-600" id="tour-2-sub">Type natural questions to explore data, KPIs, or generate summaries.</p>
<div className="flex items-center justify-end gap-2 pt-2">
<button className="text-sm px-3 py-2 rounded-lg bg-amber-700 text-white hover:bg-amber-800" id="tour-done">Got it</button>
</div>
</div>
</div>
</div>
</div>

<div className="hidden" id="app-shell">

<div className="w-full border-t border-neutral-200 bg-white sticky top-0 z-40">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-3.5 flex items-center justify-between">
<div className="flex items-center gap-2">
<button className="lg:hidden inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50" id="btn-toggle-sidebar">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="panel-left"></i>
</button>
<div className="hidden lg:flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2 w-[360px]">
<i className="h-[18px] w-[18px] text-neutral-400" data-lucide="search"></i>
<input className="w-full bg-transparent outline-none text-sm text-neutral-700 placeholder:text-neutral-400" placeholder="Search datasets, KPIs, entities..." type="text"/>
</div>
<div className="ml-0 lg:ml-3 inline-flex items-center gap-1.5 rounded-full border border-amber-200 bg-amber-50 px-2.5 py-1 text-[12px] text-amber-700" id="role-badge">
<i className="h-[16px] w-[16px]" data-lucide="user-circle2"></i>
<span>Role</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="bell"></i>
</button>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="message-square"></i>
</button>
<img alt="Mona" className="h-9 w-9 rounded-full object-cover ring-1 ring-amber-200 hidden sm:block" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="h-9 w-9 rounded-full bg-neutral-800 text-white grid place-items-center text-sm font-medium tracking-tight">G</div>
</div>
</div>
<div className="border-t border-neutral-200"></div>
</div>

<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-6">
<div className="grid grid-cols-12 gap-6">

<aside className="col-span-12 lg:col-span-3 xl:col-span-2 rounded-xl border border-neutral-200 bg-white p-3 lg:p-4 shadow-sm hidden lg:block" id="app-sidebar">

<div className="space-y-1" id="sidebar-budget">
<div className="px-2 pb-2 text-[12px] uppercase tracking-[0.08em] text-neutral-500">Budget</div>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="layout-dashboard"></i> Overview
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="pie-chart"></i> Allocations
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="activity"></i> Variance
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="calendar-clock"></i> Planning
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="file-chart-column"></i> Reports
            </button>
</div>
<div className="hidden space-y-1" id="sidebar-revenue">
<div className="px-2 pb-2 text-[12px] uppercase tracking-[0.08em] text-neutral-500">Revenue</div>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="rows-3"></i> Streams
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="trending-up"></i> Collections
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="link2"></i> Reconciliation
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="chart-line"></i> Forecasting
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="building-2"></i> Entities
            </button>
</div>
<div className="hidden space-y-1" id="sidebar-policy">
<div className="px-2 pb-2 text-[12px] uppercase tracking-[0.08em] text-neutral-500">Policy</div>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="book-open"></i> Executive Summary
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="gauge"></i> Strategic KPIs
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="waves"></i> Trends
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="briefcase"></i> Briefings
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="venetian-mask"></i> Impact
            </button>
</div>
<div className="hidden space-y-1" id="sidebar-audit">
<div className="px-2 pb-2 text-[12px] uppercase tracking-[0.08em] text-neutral-500">Audit</div>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="alarm-triangle"></i> Alerts
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="case-sensitive"></i> Cases
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="history"></i> Trails
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="shield-alert"></i> Risk
            </button>
<button className="w-full flex items-center gap-2 px-2.5 py-2 rounded-md hover:bg-neutral-50 text-sm">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="scan-search"></i> Fraud
            </button>
</div>
</aside>

<section className="col-span-12 lg:col-span-9 xl:col-span-7 space-y-6">

<div className="hidden space-y-6" id="dash-budget">

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Budget Utilization</div>
<div className="mt-1 flex items-end justify-between">
<div className="text-2xl tracking-tight font-semibold">72.4%</div>
<span className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700">
<i className="h-[14px] w-[14px]" data-lucide="trending-up"></i> +1.8%
                  </span>
</div>
<div className="mt-3 h-2 w-full rounded bg-neutral-100">
<div className="h-2 rounded bg-amber-600" style={{width: '72%'}}></div>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Variance Alerts</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">9</div>
<div className="mt-2 flex items-center gap-2 text-[12px]">
<span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-red-700"><span className="h-1.5 w-1.5 rounded-full bg-red-600"></span> 2 High</span>
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-amber-700"><span className="h-1.5 w-1.5 rounded-full bg-amber-600"></span> 3 Medium</span>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-emerald-700"><span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> 4 Low</span>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Upcoming Deadlines</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">3</div>
<div className="mt-2 text-sm text-neutral-600">Next: Q4 Re-forecast • 4 days</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Budget Performance</div>
<div className="text-[12px] text-neutral-500">FY 2025</div>
</div>
<div className="mt-2 text-sm text-neutral-600">Actual vs Plan by month</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="budgetPerformance"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Allocation by Function</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800" id="btn-reset-drill">Reset</button>
</div>
<div className="mt-2 text-sm text-neutral-600">Click a segment to drill down</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="budgetAllocation"></canvas>
</div>
</div>
<div className="mt-3 text-sm text-neutral-700" id="allocationDetails">
<div className="text-[12px] text-neutral-500">Details:</div>
<ul className="mt-1 list-disc pl-5">
<li>Select a segment to view breakdown</li>
</ul>
</div>
</div>
</div>

<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Variance Alerts</div>
<div className="flex items-center gap-2">
<button className="text-[12px] px-2.5 py-1 rounded-md border border-neutral-200 hover:bg-neutral-50">All</button>
<button className="text-[12px] px-2.5 py-1 rounded-md border border-amber-200 bg-amber-50 text-amber-700">Open</button>
</div>
</div>
<div className="mt-3 divide-y divide-neutral-200">
<div className="py-3 flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-red-600"></span>
<div className="flex-1">
<div className="text-sm font-medium">Health - Overspend by 6.2%</div>
<div className="text-[12px] text-neutral-500">Root cause: emergency procurement spike</div>
</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">Open</button>
</div>
<div className="py-3 flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-amber-600"></span>
<div className="flex-1">
<div className="text-sm font-medium">Education - Slow utilization</div>
<div className="text-[12px] text-neutral-500">Action: accelerate disbursements</div>
</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">Open</button>
</div>
<div className="py-3 flex items-center gap-3">
<span className="h-2 w-2 rounded-full bg-emerald-600"></span>
<div className="flex-1">
<div className="text-sm font-medium">Infrastructure - On track</div>
<div className="text-[12px] text-neutral-500">Variance within ±1%</div>
</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">Open</button>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-[15px] font-medium">Planning Tools</div>
<div className="mt-3 grid gap-2">
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 text-sm">
                    Re-forecast Wizard <i className="h-[18px] w-[18px] text-neutral-700" data-lucide="wand-2"></i>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 text-sm">
                    Scenario Builder <i className="h-[18px] w-[18px] text-neutral-700" data-lucide="beaker"></i>
</button>
<button className="w-full flex items-center justify-between px-3 py-2 rounded-md border border-neutral-200 hover:bg-neutral-50 text-sm">
                    Allocation Rules <i className="h-[18px] w-[18px] text-neutral-700" data-lucide="sliders-horizontal"></i>
</button>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="dash-revenue">

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Total Collections (MTD)</div>
<div className="mt-1 flex items-end justify-between">
<div className="text-2xl tracking-tight font-semibold">AED 3.24B</div>
<span className="inline-flex items-center gap-1 rounded-md border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700">
<i className="h-[14px] w-[14px]" data-lucide="trending-up"></i> +4.1%
                  </span>
</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Forecast Accuracy</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">95.2%</div>
<div className="mt-2 text-sm text-neutral-600">12-month rolling</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Reconciliation Status</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">97.3% matched</div>
<div className="mt-3 h-2 w-full rounded bg-neutral-100">
<div className="h-2 rounded bg-emerald-600" style={{width: '97%'}}></div>
</div>
<div className="mt-2 text-[12px] text-neutral-600">14 banks • 39 entities</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Revenue Streams</div>
<div className="text-[12px] text-neutral-500">Latest 6 months</div>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="revenueStreams"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Collections &amp; Forecast</div>
<div className="text-[12px] text-neutral-500">Next 3 months</div>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="revenueForecast"></canvas>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Reconciliation Detail</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">Refresh</button>
</div>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="text-[12px] text-neutral-500">Banks</div>
<div className="text-lg font-semibold tracking-tight">14</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="text-[12px] text-neutral-500">Entities</div>
<div className="text-lg font-semibold tracking-tight">39</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 p-3">
<div className="text-[12px] text-neutral-500">Mismatches</div>
<div className="text-lg font-semibold tracking-tight text-red-600">2.7%</div>
</div>
</div>
<div className="mt-4 divide-y divide-neutral-200">
<div className="py-3 flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-red-600"></span>
<div className="flex-1">
<div className="text-sm font-medium">Mismatch: Bank A → Entity 12</div>
<div className="text-[12px] text-neutral-500">AED 4.8M difference • Severity: High</div>
</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">Investigate</button>
</div>
<div className="py-3 flex items-start gap-3">
<span className="mt-1 h-2 w-2 rounded-full bg-amber-600"></span>
<div className="flex-1">
<div className="text-sm font-medium">Delay: Bank F file</div>
<div className="text-[12px] text-neutral-500">File received 6h late • Severity: Medium</div>
</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">View</button>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-[15px] font-medium">Alert Feed</div>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-600"></span>
<div className="text-sm font-medium">Large variance in VAT inflow</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Compare vs forecast: -7.1%</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-600"></span>
<div className="text-sm font-medium">Customs duty downshift</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Trend: -2.3% w/w</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-emerald-600"></span>
<div className="text-sm font-medium">Zakat inflows stable</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">Within ±0.5%</div>
</div>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="dash-policy">

<div className="grid sm:grid-cols-4 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Fiscal Balance (YTD)</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">AED +12.8B</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Debt-to-GDP</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">28.4%</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Inflation (YoY)</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">2.1%</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">GDP Growth (YoY)</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">3.6%</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">High-level Trend</div>
<div className="text-[12px] text-neutral-500">Last 24 months</div>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="policyTrends"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Policy Impact</div>
<div className="text-[12px] text-neutral-500">Sector share</div>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="policyImpact"></canvas>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4 lg:col-span-2">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Cabinet Briefing Shortcuts</div>
<div className="text-[12px] text-neutral-500">Quick access</div>
</div>
<div className="mt-3 grid sm:grid-cols-3 gap-3">
<button className="rounded-lg border border-neutral-200 bg-white p-3 text-left hover:bg-neutral-50">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="file-text"></i>
<div className="text-sm font-medium">Monthly Fiscal Brief</div>
</div>
<div className="mt-1 text-[12px] text-neutral-500">1 page executive brief</div>
</button>
<button className="rounded-lg border border-neutral-200 bg-white p-3 text-left hover:bg-neutral-50">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="bar-chart-3"></i>
<div className="text-sm font-medium">KPI Snapshot</div>
</div>
<div className="mt-1 text-[12px] text-neutral-500">Top 12 indicators</div>
</button>
<button className="rounded-lg border border-neutral-200 bg-white p-3 text-left hover:bg-neutral-50">
<div className="flex items-center gap-2">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="sparkle"></i>
<div className="text-sm font-medium">AI Summary</div>
</div>
<div className="mt-1 text-[12px] text-neutral-500">Updated daily</div>
</button>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-[15px] font-medium">Executive Notes</div>
<div className="mt-3 space-y-2 text-sm text-neutral-700">
<p>Fiscal position remains robust, with moderate inflation and steady growth.</p>
<p>Focus areas: targeted subsidies, infrastructure acceleration.</p>
</div>
</div>
</div>
</div>

<div className="hidden space-y-6" id="dash-audit">

<div className="grid sm:grid-cols-3 gap-4">
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Open Cases</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">27</div>
<div className="mt-2 text-sm text-neutral-600">7 high severity</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Anomaly Rate</div>
<div className="mt-1 text-2xl tracking-tight font-semibold">1.9%</div>
<div className="mt-2 text-sm text-neutral-600">Last 30 days</div>
</div>
<div className="rounded-lg border border-neutral-200 bg-white p-4">
<div className="text-[12px] text-neutral-500">Fraud Indicators</div>
<div className="mt-1 text-2xl tracking-tight font-semibold text-red-600">12 flagged</div>
</div>
</div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Risk Assessment</div>
<div className="text-[12px] text-neutral-500">Radar by domain</div>
</div>
<div className="mt-4 h-64 rounded-lg bg-neutral-50">
<div className="h-full">
<canvas id="auditRisk"></canvas>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Anomaly Alerts</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">View all</button>
</div>
<div className="mt-3 space-y-3">
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-red-600"></span>
<div className="text-sm font-medium">Duplicate vendor payments</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">15 suspected duplicates</div>
</div>
<div className="rounded-lg border border-neutral-200 p-3">
<div className="flex items-center gap-2">
<span className="h-2 w-2 rounded-full bg-amber-600"></span>
<div className="text-sm font-medium">Out-of-hours approvals</div>
</div>
<div className="mt-1 text-[12px] text-neutral-600">31 off-schedule events</div>
</div>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-6">
<div className="lg:col-span-2 rounded-xl border border-neutral-200 bg-white p-4 overflow-hidden">
<div className="flex items-center justify-between">
<div className="text-[15px] font-medium">Case Management</div>
<button className="text-[12px] text-amber-700 hover:text-amber-800">New Case</button>
</div>
<div className="mt-3 border border-neutral-200 rounded-lg overflow-hidden">
<div className="grid grid-cols-5 bg-neutral-50 text-[12px] text-neutral-500">
<div className="px-3 py-2">Case</div>
<div className="px-3 py-2 col-span-2">Summary</div>
<div className="px-3 py-2">Owner</div>
<div className="px-3 py-2">Status</div>
</div>
<div className="divide-y divide-neutral-200 text-sm">
<div className="grid grid-cols-5">
<div className="px-3 py-2">AUD-2025-014</div>
<div className="px-3 py-2 col-span-2">Vendor splits detected</div>
<div className="px-3 py-2">A. Khan</div>
<div className="px-3 py-2"><span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[12px] text-amber-700">In Review</span></div>
</div>
<div className="grid grid-cols-5">
<div className="px-3 py-2">AUD-2025-011</div>
<div className="px-3 py-2 col-span-2">Irregular approvals</div>
<div className="px-3 py-2">S. Noor</div>
<div className="px-3 py-2"><span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[12px] text-red-700">Escalated</span></div>
</div>
<div className="grid grid-cols-5">
<div className="px-3 py-2">AUD-2025-007</div>
<div className="px-3 py-2 col-span-2">Cash handling gaps</div>
<div className="px-3 py-2">H. Mariam</div>
<div className="px-3 py-2"><span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700">Resolved</span></div>
</div>
</div>
</div>
</div>
<div className="rounded-xl border border-neutral-200 bg-white p-4">
<div className="text-[15px] font-medium">Fraud Indicators</div>
<div className="mt-3 space-y-3">
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
<div>
<div className="text-sm font-medium">High amount transfers</div>
<div className="text-[12px] text-neutral-600">4 flagged</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-red-200 bg-red-50 px-2 py-0.5 text-[12px] text-red-700">High</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
<div>
<div className="text-sm font-medium">Unusual vendor round-tripping</div>
<div className="text-[12px] text-neutral-600">3 patterns detected</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-amber-200 bg-amber-50 px-2 py-0.5 text-[12px] text-amber-700">Medium</span>
</div>
<div className="flex items-center justify-between rounded-lg border border-neutral-200 p-3">
<div>
<div className="text-sm font-medium">Split invoices near threshold</div>
<div className="text-[12px] text-neutral-600">8 flagged</div>
</div>
<span className="inline-flex items-center gap-1 rounded-full border border-emerald-200 bg-emerald-50 px-2 py-0.5 text-[12px] text-emerald-700">Low</span>
</div>
</div>
</div>
</div>
</div> 
</section>

<aside className="col-span-12 xl:col-span-3 rounded-xl border border-neutral-200 bg-white shadow-sm p-0 hidden xl:flex flex-col overflow-hidden" id="mona-panel">
<div className="flex items-center gap-3 p-4 border-b border-neutral-200">
<img alt="Mona" className="h-10 w-10 rounded-full object-cover ring-1 ring-amber-200" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="flex-1">
<div className="text-[15px] font-medium">Mona</div>
<div className="text-[12px] text-neutral-500 flex items-center gap-1">
<span className="h-1.5 w-1.5 rounded-full bg-emerald-600"></span> Online • AI financial advisor
              </div>
</div>
<button className="inline-flex items-center justify-center h-8 w-8 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50" id="clear-chat" title="Clear conversation">
<i className="h-[16px] w-[16px] text-neutral-700" data-lucide="eraser"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" id="mona-chat-body">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-amber-100 ring-1 ring-amber-200 grid place-items-center">
<i className="h-[16px] w-[16px] text-amber-700" data-lucide="sparkles"></i>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 max-w-[85%]">
                Hello! I can help you explore KPIs, drill charts, or draft briefs. Try: “Show top 3 variance drivers this month.”
              </div>
</div>
</div>
<div className="p-3 border-t border-neutral-200 space-y-2">
<div className="flex flex-wrap gap-2">
<button className="quick-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Budget variance drivers</button>
<button className="quick-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Revenue forecast delta</button>
<button className="quick-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Executive summary</button>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<input className="w-full bg-transparent outline-none text-sm" id="mona-input" placeholder="Ask Mona..." type="text"/>
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-amber-700 text-white hover:bg-amber-800" id="mona-send">
<i className="h-[18px] w-[18px]" data-lucide="send"></i>
</button>
</div>
</div>
</aside>
</div>
</div>

<div className="fixed inset-y-0 right-0 z-50 w-full sm:w-[420px] translate-x-full transition-transform duration-300" id="mona-drawer">
<div className="absolute inset-0 bg-black/30 backdrop-blur-sm -z-10 opacity-0 pointer-events-none transition-opacity" id="drawer-overlay"></div>
<div className="h-full w-full bg-white shadow-2xl ring-1 ring-neutral-200 flex flex-col">
<div className="flex items-center justify-between p-4 border-b border-neutral-200">
<div className="flex items-center gap-2">
<div className="h-9 w-9 rounded-full bg-amber-100 ring-1 ring-amber-200 grid place-items-center">
<i className="h-[18px] w-[18px] text-amber-700" data-lucide="sparkles"></i>
</div>
<div>
<div className="text-[15px] font-medium">Mona</div>
<div className="text-[12px] text-neutral-500">AI financial advisor</div>
</div>
</div>
<button className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-neutral-200 bg-white hover:bg-neutral-50" id="drawer-close">
<i className="h-[18px] w-[18px] text-neutral-700" data-lucide="x"></i>
</button>
</div>
<div className="flex-1 overflow-y-auto px-4 py-3 space-y-3" id="drawer-chat-body">
<div className="flex items-start gap-3">
<div className="h-8 w-8 rounded-full bg-amber-100 ring-1 ring-amber-200 grid place-items-center">
<i className="h-[16px] w-[16px] text-amber-700" data-lucide="sparkles"></i>
</div>
<div className="rounded-lg border border-neutral-200 bg-neutral-50 px-3 py-2 text-sm text-neutral-800 max-w-[85%]">
              Hi! Ask about KPIs, revenue trends, or policy impact. I’m here to help.
            </div>
</div>
</div>
<div className="p-3 border-t border-neutral-200 space-y-2">
<div className="flex flex-wrap gap-2">
<button className="drawer-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Top risks</button>
<button className="drawer-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Budget vs actual</button>
<button className="drawer-chip rounded-full border border-neutral-200 bg-white px-2.5 py-1.5 text-[12px] hover:bg-neutral-50">Brief for cabinet</button>
</div>
<div className="flex items-center gap-2">
<div className="flex-1 flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3 py-2">
<input className="w-full bg-transparent outline-none text-sm" id="drawer-input" placeholder="Ask Mona..." type="text"/>
</div>
<button className="inline-flex items-center justify-center h-10 w-10 rounded-lg bg-amber-700 text-white hover:bg-amber-800" id="drawer-send">
<i className="h-[18px] w-[18px]" data-lucide="send"></i>
</button>
</div>
</div>
</div>
</div>
</div> 

<footer className="mt-8 border-t border-neutral-200/80 bg-white/70">
<div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8 py-6 text-center text-[12px] text-neutral-500">
      © <span id="year"></span> United Arab Emirates • Ministry of Finance. All rights reserved.
    </div>
</footer>



    </>
  );
}
