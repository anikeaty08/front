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



    document.addEventListener('DOMContentLoaded', () => {
      // Icons
      if (window.lucide) {
        try { lucide.createIcons(); } catch (e) { if (lucide.replace) lucide.replace(); }
      }

      // Year
      const yearNow = document.getElementById('yearNow');
      if (yearNow) yearNow.textContent = new Date().getFullYear();

      // Mobile menu
      const mobileMenuBtn = document.getElementById('mobileMenuBtn');
      const mobileMenu = document.getElementById('mobileMenu');
      if (mobileMenuBtn && mobileMenu) {
        mobileMenuBtn.addEventListener('click', () => {
          mobileMenu.classList.toggle('hidden');
        });
      }

      // Plan selector
      const planSingle = document.getElementById('planSingle');
      const planCouple = document.getElementById('planCouple');
      const planValue = document.getElementById('planValue');
      const setPlan = (val) => {
        planValue.value = val;
        [planSingle, planCouple].forEach(btn => {
          btn.classList.remove('bg-white/10', 'ring-1', 'ring-cyan-400/30');
          btn.setAttribute('aria-pressed', 'false');
        });
        const active = val === 'Single' ? planSingle : planCouple;
        active.classList.add('bg-white/10', 'ring-1', 'ring-cyan-400/30');
        active.setAttribute('aria-pressed', 'true');
      };
      if (planSingle && planCouple && planValue) {
        planSingle.addEventListener('click', () => setPlan('Single'));
        planCouple.addEventListener('click', () => setPlan('Couple'));
        setPlan(planValue.value || 'Single');
      }

      // Deadline countdown (April 15 or next)
      const deadlineEl = document.getElementById('deadlineDays');
      const daysUntil = (target) => Math.ceil((target.setHours(23,59,59,999) - Date.now()) / (1000 * 60 * 60 * 24));
      if (deadlineEl) {
        const now = new Date();
        const year = now.getFullYear();
        let taxDay = new Date(year, 3, 15); // Apr 15
        if (now > taxDay) {
          // If after Apr 15, show Oct 15 (typical extension deadline)
          const extDay = new Date(year, 9, 15);
          if (now <= extDay) {
            deadlineEl.textContent = Math.max(0, daysUntil(extDay));
          } else {
            // Next year's Apr 15
            deadlineEl.textContent = Math.max(0, daysUntil(new Date(year + 1, 3, 15)));
          }
        } else {
          deadlineEl.textContent = Math.max(0, daysUntil(taxDay));
        }
      }

      // Legal modal
      const body = document.body;
      const openLegal = document.getElementById('openLegal');
      const openLegalFooter = document.getElementById('openLegalFooter');
      const legalModal = document.getElementById('legalModal');
      const closeLegal = document.getElementById('closeLegal');
      const closeLegal2 = document.getElementById('closeLegal2');

      const showLegal = () => {
        if (!legalModal) return;
        legalModal.classList.remove('hidden');
        body.classList.add('modal-open');
      };
      const hideLegal = () => {
        if (!legalModal) return;
        legalModal.classList.add('hidden');
        body.classList.remove('modal-open');
      };
      [openLegal, openLegalFooter].forEach(btn => btn && btn.addEventListener('click', showLegal));
      [closeLegal, closeLegal2].forEach(btn => btn && btn.addEventListener('click', hideLegal));
      legalModal && legalModal.addEventListener('click', (e) => {
        if (e.target === legalModal.firstElementChild) hideLegal();
      });
      window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !legalModal.classList.contains('hidden')) hideLegal();
      });

      // Toast
      const toastStack = document.getElementById('toastStack');
      function showToast(message, variant = 'success') {
        const el = document.createElement('div');
        el.className = 'rounded-lg px-4 py-3 text-sm shadow-glow glass outline-subtle flex items-center gap-2 ' + (variant === 'error' ? 'text-red-200' : 'text-emerald-200');
        el.innerHTML = `
          <i data-lucide="${variant === 'error' ? 'alert-triangle' : 'check-circle'}" class="w-4 h-4"></i>
          <span>${message}</span>
        `;
        toastStack.appendChild(el);
        if (window.lucide) try { lucide.createIcons({ icons: {}}); } catch {}
        setTimeout(() => {
          el.classList.add('opacity-0', 'translate-y-1');
          setTimeout(() => el.remove(), 250);
        }, 3000);
      }

      // Forms
      const creditForm = document.getElementById('creditForm');
      creditForm && creditForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const fd = new FormData(creditForm);
        try {
          // Optional: send to your backend
          await fetch('/api/lead', { method: 'POST', body: fd }).catch(() => {});
          showToast('Application submitted. We’ll be in touch shortly.');
          creditForm.reset();
          // Reset plan UI
          setPlan('Single');
        } catch (err) {
          showToast('We could not submit right now. Please try again.', 'error');
        }
      });

      const subscribeForm = document.getElementById('subscribeForm');
      subscribeForm && subscribeForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = subscribeForm.querySelector('input[type="email"]')?.value;
        try {
          await fetch('/api/subscribe', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({ email })
          }).catch(() => {});
          showToast('You’re subscribed. Check your inbox for confirmation.');
          subscribeForm.reset();
        } catch {
          showToast('Subscription failed. Please try again.', 'error');
        }
      });

      // Chat widget
      const chatToggle = document.getElementById('chatToggle');
      const chatPanel = document.getElementById('chatPanel');
      const chatClose = document.getElementById('chatClose');
      const chatForm = document.getElementById('chatForm');
      const chatInput = document.getElementById('chatInput');
      const chatMsgs = document.getElementById('chatMsgs');
      const storageKey = 'ea_chat_messages';
      const sessionKey = 'ea_chat_session';
      if (!localStorage.getItem(sessionKey)) {
        localStorage.setItem(sessionKey, Math.random().toString(36).slice(2));
      }
      const sessionId = localStorage.getItem(sessionKey);

      const renderMsgs = (msgs) => {
        chatMsgs.innerHTML = '';
        msgs.forEach(m => {
          const row = document.createElement('div');
          row.className = 'flex items-start gap-2 ' + (m.role === 'user' ? 'justify-end' : '');
          if (m.role === 'user') {
            row.innerHTML = `
              <div class="max-w-[80%] rounded-lg bg-cyan-400/15 border border-cyan-300/20 px-3 py-2">${m.content}</div>
            `;
          } else {
            row.innerHTML = `
              <div class="h-6 w-6 mt-0.5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
                <i data-lucide="bot" class="w-3.5 h-3.5 text-cyan-300"></i>
              </div>
              <div class="max-w-[80%] rounded-lg bg-white/5 border border-white/10 px-3 py-2">${m.content}</div>
            `;
          }
          chatMsgs.appendChild(row);
        });
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
        if (window.lucide) try { lucide.createIcons(); } catch {}
      };

      const loadMsgs = () => {
        try { return JSON.parse(localStorage.getItem(storageKey)) || []; } catch { return []; }
      };
      const saveMsgs = (msgs) => localStorage.setItem(storageKey, JSON.stringify(msgs));

      chatToggle && chatToggle.addEventListener('click', () => {
        chatPanel.classList.toggle('hidden');
      });
      chatClose && chatClose.addEventListener('click', () => chatPanel.classList.add('hidden'));

      chatInput && chatInput.addEventListener('keydown', (e) => {
        if (e.key === 'Enter' && !e.shiftKey) {
          e.preventDefault();
          chatForm.requestSubmit();
        }
      });

      chatForm && chatForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const text = chatInput.value.trim();
        if (!text) return;
        const msgs = loadMsgs();
        msgs.push({ role: 'user', content: text, t: Date.now() });
        saveMsgs(msgs);
        renderMsgs(msgs);
        chatInput.value = '';

        // Typing indicator
        const typing = document.createElement('div');
        typing.className = 'flex items-start gap-2';
        typing.innerHTML = `
          <div class="h-6 w-6 mt-0.5 rounded-md bg-white/5 border border-white/10 flex items-center justify-center">
            <i data-lucide="bot" class="w-3.5 h-3.5 text-cyan-300"></i>
          </div>
          <div class="max-w-[80%] rounded-lg bg-white/5 border border-white/10 px-3 py-2">
            <span class="inline-block animate-pulse">Typing…</span>
          </div>
        `;
        chatMsgs.appendChild(typing);
        chatMsgs.scrollTop = chatMsgs.scrollHeight;
        if (window.lucide) try { lucide.createIcons(); } catch {}

        try {
          const res = await fetch('/api/chat-proxy', {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify({
              sessionId,
              message: text,
              context: 'elite-approvals:tax-credit',
            })
          });
          let reply = 'Thanks for your message. A specialist will follow up shortly.';
          if (res.ok) {
            const data = await res.json().catch(() => ({}));
            if (data && data.reply) reply = data.reply;
          }
          typing.remove();
          msgs.push({ role: 'assistant', content: reply, t: Date.now() });
          saveMsgs(msgs);
          renderMsgs(msgs);
        } catch (err) {
          typing.remove();
          const errorReply = 'I had trouble reaching our assistant. Please try again, or call (904) 999-9999.';
          const msgs2 = loadMsgs();
          msgs2.push({ role: 'assistant', content: errorReply, t: Date.now() });
          saveMsgs(msgs2);
          renderMsgs(msgs2);
        }
      });

      // Initial render
      renderMsgs(loadMsgs());
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
      

<div className="w-full bg-neutral-900/60 border-b border-white/10 text-xs sm:text-sm tracking-tight">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-2 flex flex-col md:flex-row items-center justify-between gap-2">
<div className="flex items-center gap-2 text-neutral-300">
<span className="inline-flex items-center gap-1.5 badge rounded-full px-2 py-1 text-[11px]">
<svg className="lucide lucide-map-pin w-3.5 h-3.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
          Jacksonville, FL — Serving all 50 states
        </span>
<span className="hidden md:inline text-neutral-500">|</span>
<span className="inline-flex items-center gap-1.5 badge rounded-full px-2 py-1 text-[11px]">
<svg className="lucide lucide-shield-check w-3.5 h-3.5" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
          SSL Secured • Bond #SB271887
        </span>
</div>
<div className="flex items-center gap-4">
<a className="group inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200" href="tel:+19049999999">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="tracking-tight">(904) 999-9999</span>
</a>
<a className="btn btn-primary rounded-lg px-3 py-1.5 text-xs font-semibold tracking-tight" href="#apply">Apply Now</a>
</div>
</div>
</div>

<header className="sticky top-0 z-40 bg-neutral-950/60 backdrop-blur border-b border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-3">
<div className="flex items-center justify-between">
<a className="flex items-center gap-2" href="#top">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400/25 to-indigo-400/25 outline-subtle flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-semibold tracking-tight">Elite Approvals</span>
</a>
<nav className="hidden md:flex items-center gap-6 text-sm text-neutral-300">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#reviews">Reviews</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#apply">Application</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-2">
<a className="btn btn-neutral rounded-lg px-3 py-2 text-sm font-medium tracking-tight hover:shadow-md" href="#book">Book Free Consultation</a>
<a className="hidden sm:inline-flex btn btn-primary rounded-lg px-3.5 py-2 text-sm font-semibold tracking-tight hover:shadow-md" href="#apply">Start Application</a>
<button className="md:hidden inline-flex items-center justify-center h-9 w-9 rounded-lg bg-white/5 border border-white/10" id="mobileMenuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
<div className="md:hidden hidden pt-3" id="mobileMenu">
<nav className="grid gap-2 text-sm text-neutral-300">
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#services">Services</a>
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#reviews">Reviews</a>
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#pricing">Pricing</a>
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#apply">Application</a>
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#faq">FAQ</a>
<a className="px-2 py-2 rounded-lg hover:bg-white/5" href="#contact">Contact</a>
</nav>
</div>
</div>
</header>

<section className="relative overflow-hidden" id="top">
<div className="absolute inset-0 pointer-events-none">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-900/40 to-neutral-950"></div>
<div className="absolute -top-40 right-10 h-72 w-72 rounded-full blur-3xl bg-cyan-400/20"></div>
<div className="absolute top-20 -left-20 h-72 w-72 rounded-full blur-3xl bg-indigo-400/20"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-16 sm:py-24">
<div className="grid lg:grid-cols-2 gap-10 items-center">
<div className="animate-fadeUp">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-binary w-3.5 h-3.5" data-lucide="binary" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="2" width="4" x="14" y="14"></rect><rect height="6" rx="2" width="4" x="6" y="4"></rect><path d="M6 20h4"></path><path d="M14 10h4"></path><path d="M6 14h2v6"></path><path d="M14 4h2v6"></path></svg>
            Jacksonville’s Only Combined Tax &amp; Credit Solution
          </span>
<h1 className="mt-5 text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight">
            File Taxes, Fix Credit, Grow Faster — in One Place
          </h1>
<p className="mt-4 text-neutral-300 sm:text-lg">
            Elite Approvals streamlines credit repair and tax preparation. Headquartered in Jacksonville, FL and serving all 50 states, we deliver transparent pricing, secure onboarding, and measurable results.
          </p>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<a className="btn btn-primary rounded-xl px-5 py-3 text-sm font-semibold tracking-tight flex items-center justify-center gap-2" href="#apply">
<svg className="lucide lucide-shield w-4.5 h-4.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
              Start Secure Application
            </a>
<a className="btn btn-neutral rounded-xl px-5 py-3 text-sm font-medium tracking-tight flex items-center justify-center gap-2" href="#book">
<svg className="lucide lucide-calendar w-4.5 h-4.5" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
              Book Free Consultation
            </a>
</div>

<div className="mt-8 grid grid-cols-2 sm:grid-cols-4 gap-3">
<div className="rounded-xl outline-subtle px-4 py-3 bg-white/5 hover:bg-white/7 transition hover-card">
<div className="text-xs text-neutral-400">BBB Rating</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight">A+</span>
<svg className="lucide lucide-badge-check w-4.5 h-4.5 text-cyan-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
</div>
<div className="rounded-xl outline-subtle px-4 py-3 bg-white/5 hover:bg-white/7 transition hover-card">
<div className="text-xs text-neutral-400">Google Reviews</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight">4.8/5</span>
<svg className="lucide lucide-star w-4.5 h-4.5 text-amber-300" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<div className="rounded-xl outline-subtle px-4 py-3 bg-white/5 hover:bg-white/7 transition hover-card">
<div className="text-xs text-neutral-400">Years in Business</div>
<div className="mt-1 text-lg font-semibold tracking-tight">7+ Years</div>
</div>
<div className="rounded-xl outline-subtle px-4 py-3 bg-white/5 hover:bg-white/7 transition hover-card">
<div className="text-xs text-neutral-400">Security</div>
<div className="mt-1 flex items-center gap-2">
<span className="text-lg font-semibold tracking-tight">SSL</span>
<svg className="lucide lucide-lock w-4.5 h-4.5 text-emerald-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</div>
</div>
</div>

<div className="mt-8 flex flex-wrap items-center gap-3">
<div className="inline-flex items-center gap-2 badge-em rounded-xl px-3 py-2">
<svg className="lucide lucide-timer w-4 h-4" data-lucide="timer" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
<span className="text-sm">Tax deadline: <span className="font-semibold tracking-tight" id="deadlineDays">17</span> days</span>
</div>
<span className="text-xs sm:text-sm text-neutral-400">Limited consultation slots each week.</span>
</div>
</div>
<div className="relative">
<div className="rounded-2xl bg-white/5 outline-subtle glass p-4 sm:p-6 shadow-soft">
<div className="sm:p-6 bg-gradient-to-b from-white/5 to-transparent border-white/10 border rounded-xl pt-4 pr-4 pb-4 pl-4" data-element-id="aura-emg5vyyq1"><video autoplay="" className="absolute inset-0 w-full h-full object-cover" data-container-bg="true" loop="" muted="" playsinline="" src="https://notebooklm.google.com/notebook/4ceb3eb7-ebbf-44cf-866e-66fbbc79814f?artifactId=4c753f0a-ab35-4210-bfdd-26a29ae0304b"></video>
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Quick Start</div>
<span className="inline-flex items-center gap-1 text-[11px] badge rounded-full px-2 py-1">
<svg className="lucide lucide-shield-alert w-3.5 h-3.5" data-lucide="shield-alert" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="M12 8v4"></path><path d="M12 16h.01"></path></svg>
                  Encrypted
                </span>
</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-sm">
<a className="rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition p-3 flex items-center gap-2" href="#apply">
<svg className="lucide lucide-credit-card w-4.5 h-4.5 text-cyan-300" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                  Credit Repair
                </a>
<a className="rounded-lg bg-white/5 border border-white/10 hover:bg-white/10 transition p-3 flex items-center gap-2" href="#services">
<svg className="lucide lucide-file-text w-4.5 h-4.5 text-indigo-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
                  Tax Preparation
                </a>
</div>
<div className="divider mt-6"></div>
<div className="mt-5 grid gap-3">
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-4.5 h-4.5 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-neutral-300">Transparent pricing and no hidden fees</p>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-4.5 h-4.5 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-neutral-300">Progress tracking and monthly updates</p>
</div>
<div className="flex items-center gap-3">
<svg className="lucide lucide-check-circle w-4.5 h-4.5 text-emerald-300" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
<p className="text-sm text-neutral-300">Nationwide support — 50 states</p>
</div>
</div>
<div className="mt-6">
<a className="btn btn-primary w-full rounded-lg py-2.5 text-sm font-semibold tracking-tight flex items-center justify-center gap-2" href="#apply">
<svg className="lucide lucide-arrow-right-circle w-4.5 h-4.5" data-lucide="arrow-right-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m12 16 4-4-4-4"></path><path d="M8 12h8"></path></svg>
                  Start in 2 minutes
                </a>
</div>
</div>
</div>
<div className="absolute -bottom-6 -right-6 pointer-events-none h-28 w-28 rounded-full blur-2xl bg-cyan-400/30"></div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-layers w-3.5 h-3.5" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
          Dual-Service Clarity
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Everything You Need — Credit + Tax</h2>
<p className="mt-3 text-neutral-300">We repair credit inaccuracies and prepare taxes accurately, so you can qualify faster and keep more of your money.</p>
</div>
<div className="mt-10 grid md:grid-cols-2 gap-5">
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-6 hover-card">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Credit Repair</h3>
<svg className="lucide lucide-shield w-5 h-5 text-cyan-300" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<p className="mt-2 text-sm text-neutral-300">Dispute inaccurate, unverifiable, or obsolete items with bureaus and creditors. Monthly status reviews included.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Experian, Equifax, TransUnion</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Inquiry &amp; collection challenges</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly consulting via text/email/phone</li>
</ul>
<div className="mt-5 flex items-center gap-3">
<a className="btn btn-neutral rounded-lg px-3 py-2 text-sm" href="#pricing">See Pricing</a>
<a className="btn btn-primary rounded-lg px-3.5 py-2 text-sm font-semibold tracking-tight" href="#apply">Apply</a>
</div>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-6 hover-card">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Tax Preparation</h3>
<svg className="lucide lucide-file-text w-5 h-5 text-indigo-300" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg>
</div>
<p className="mt-2 text-sm text-neutral-300">Personal and small business tax returns with upfront pricing, e-file, and maximum refund accuracy.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Transparent pricing</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Remote &amp; local support</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> E-file + audit support</li>
</ul>
<div className="mt-5 flex items-center gap-3">
<a className="btn btn-neutral rounded-lg px-3 py-2 text-sm" href="#book">Book Now</a>
<a className="btn btn-primary rounded-lg px-3.5 py-2 text-sm font-semibold tracking-tight" href="#pricing">View Packages</a>
</div>
</div>
</div>
<div className="mt-6 rounded-xl badge-em px-4 py-3 text-sm text-neutral-100 flex items-center gap-2 justify-center">
<svg className="lucide lucide-gift w-4 h-4" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
        Bundle &amp; Save: Combine Credit + Tax for the best value.
      </div>
</div>
</section>

<section className="py-14 sm:py-20" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-stars w-3.5 h-3.5" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
          Client Results
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Real People. Real Outcomes.</h2>
<p className="mt-3 text-neutral-300">Before/after scenarios and verified reviews from Jacksonville and across the U.S.</p>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-5">
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-5 hover-card">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Angela • Jacksonville</div>
<div className="flex items-center gap-1 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star-half w-4 h-4" data-lucide="star-half" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18.338a2.1 2.1 0 0 0-.987.244L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.12 2.12 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.12 2.12 0 0 0 1.597-1.16l2.309-4.679A.53.53 0 0 1 12 2"></path></svg>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">“My score jumped 94 points in 4 months. Filed taxes here too — fastest refund I’ve ever had.”</p>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-5 hover-card">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Marcus • Tampa</div>
<div className="flex items-center gap-1 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">“Transparent pricing and monthly updates. They disputed collections I thought were stuck forever.”</p>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-5 hover-card">
<div className="flex items-center justify-between">
<div className="text-sm text-neutral-300">Tiana • Atlanta</div>
<div className="flex items-center gap-1 text-amber-300">
<svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg><svg className="lucide lucide-star w-4 h-4" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<p className="mt-3 text-sm text-neutral-300">“Combined tax + credit saved me time. The portal made it easy to upload everything.”</p>
</div>
</div>
<div className="mt-8 flex items-center justify-center gap-3 text-sm">
<a className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-2" href="https://www.google.com/maps" target="_blank">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> See Google Reviews
        </a>
<span className="text-neutral-700">|</span>
<a className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-2" href="https://www.bbb.org" target="_blank">
<svg className="lucide lucide-external-link w-4 h-4" data-lucide="external-link" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 3h6v6"></path><path d="M10 14 21 3"></path><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"></path></svg> BBB Profile
        </a>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-wallet w-3.5 h-3.5" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
          Price Transparency
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Clear, Upfront Pricing</h2>
<p className="mt-3 text-neutral-300">No surprises — see exactly where you start.</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6">
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-6 hover-card">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Credit — Single</h3>
<svg className="lucide lucide-user w-5 h-5 text-cyan-300" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<p className="mt-2 text-sm text-neutral-300">Best for individuals starting fresh.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">$99</div>
<div className="text-xs text-neutral-400">Document processing (one-time)</div>
<div className="mt-2 text-neutral-300"><span className="font-medium">$99</span>/month</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly disputes &amp; updates</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 3-bureau monitoring guidance</li>
</ul>
<a className="mt-5 btn btn-primary w-full rounded-lg py-2.5 text-sm font-semibold tracking-tight inline-flex items-center justify-center gap-2" href="#apply">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Apply
          </a>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-6 hover-card ring-1 ring-cyan-400/20">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Credit — Couple</h3>
<svg className="lucide lucide-users w-5 h-5 text-cyan-300" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<p className="mt-2 text-sm text-neutral-300">For partners improving together.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">$149</div>
<div className="text-xs text-neutral-400">Document processing (one-time)</div>
<div className="mt-2 text-neutral-300"><span className="font-medium">$149</span>/month</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Disputes for both clients</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Monthly consults included</li>
</ul>
<a className="mt-5 btn btn-primary w-full rounded-lg py-2.5 text-sm font-semibold tracking-tight inline-flex items-center justify-center gap-2" href="#apply">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Apply
          </a>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle hover:bg-white/7 transition p-6 hover-card">
<div className="flex items-center justify-between">
<h3 className="text-xl font-semibold tracking-tight">Tax Preparation</h3>
<svg className="lucide lucide-calculator w-5 h-5 text-indigo-300" data-lucide="calculator" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" width="16" x="4" y="2"></rect><line x1="8" x2="16" y1="6" y2="6"></line><line x1="16" x2="16" y1="14" y2="18"></line><path d="M16 10h.01"></path><path d="M12 10h.01"></path><path d="M8 10h.01"></path><path d="M12 14h.01"></path><path d="M8 14h.01"></path><path d="M12 18h.01"></path><path d="M8 18h.01"></path></svg>
</div>
<p className="mt-2 text-sm text-neutral-300">Personal &amp; small business returns.</p>
<div className="mt-5">
<div className="text-3xl font-semibold tracking-tight">From $149</div>
<div className="text-xs text-neutral-400">Simple return pricing shown at booking</div>
</div>
<ul className="mt-5 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> E-file + direct deposit</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Maximum refund accuracy</li>
</ul>
<a className="mt-5 btn btn-primary w-full rounded-lg py-2.5 text-sm font-semibold tracking-tight inline-flex items-center justify-center gap-2" href="#book">
<svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg> Book
          </a>
</div>
</div>
<p className="mt-4 text-xs text-neutral-500 text-center">No guarantees of score increase. Results vary based on individual credit history and bureau responses.</p>
</div>
</section>

<section className="py-14 sm:py-20" id="apply">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-shield w-3.5 h-3.5" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
          Secure Application
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Customer Credit Application</h2>
<p className="mt-3 text-neutral-300 max-w-2xl mx-auto">Your data is encrypted. Hover the question mark icons to read important legal info before you proceed.</p>
</div>
<div className="mt-10 grid lg:grid-cols-3 gap-6">

<aside className="lg:col-span-1">
<div className="rounded-2xl bg-white/5 outline-subtle p-5 glass shadow-soft">
<div className="flex items-center gap-2 text-sm">
<svg className="lucide lucide-info w-4.5 h-4.5 text-cyan-300" data-lucide="info" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="font-medium tracking-tight">What you’ll need</span>
</div>
<ul className="mt-3 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-dot w-4 h-4 text-neutral-400" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg> Government-issued ID (upload)</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-dot w-4 h-4 text-neutral-400" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg> Last four SSN digits</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-dot w-4 h-4 text-neutral-400" data-lucide="dot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12.1" cy="12.1" r="1"></circle></svg> Address &amp; contact details</li>
</ul>
<div className="divider my-5"></div>
<div className="grid gap-2 text-xs text-neutral-400">
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-shield-check w-4 h-4 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> SOC2-style controls</div>
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-lock w-4 h-4 text-emerald-300" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg> AES-256 at rest • TLS in transit</div>
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-badge-check w-4 h-4 text-emerald-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> Bond #SB271887 • Florida CSO</div>
</div>
</div>
</aside>

<div className="lg:col-span-2">
<form className="rounded-2xl bg-white/5 outline-subtle p-6 sm:p-8 glass shadow-soft" id="creditForm">

<div className="grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Plan</span>
<div className="mt-2 relative flex items-center gap-2 rounded-lg input px-2 py-2">
<button aria-pressed="true" className="flex-1 rounded-md px-3 py-2 text-sm btn-neutral hover:bg-white/10 bg-white/10 ring-1 ring-cyan-400/30" id="planSingle" type="button">Single</button>
<button aria-pressed="false" className="flex-1 rounded-md px-3 py-2 text-sm btn-neutral hover:bg-white/10" id="planCouple" type="button">Couple</button>
<input id="planValue" name="plan" type="hidden" value="Single"/>
</div>
</label>
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Service Region</span>
<select className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="state" required="">
<option disabled="" selected="" value="">Select state</option>
<option value="FL">Florida (HQ)</option>
<option value="GA">Georgia</option>
<option value="AL">Alabama</option>
<option value="NY">New York</option>
<option value="CA">California</option>
<option value="TX">Texas</option>
<option value="Other">Other (All 50 states supported)</option>
</select>
</label>
</div>
<div className="grid sm:grid-cols-2 gap-4 mt-5">
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">First Name</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="firstName" placeholder="First name" required=""/>
</label>
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Last Name</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="lastName" placeholder="Last name" required=""/>
</label>
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Phone</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="phone" placeholder="(000) 000-0000" required="" type="tel"/>
</label>
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Email</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="email" placeholder="you@example.com" required="" type="email"/>
</label>
<label className="block sm:col-span-2">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Address</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="address" placeholder="Street, City, ZIP" required=""/>
</label>
</div>

<div className="grid sm:grid-cols-2 gap-4 mt-5">
<label className="block relative group">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">
                  Last 4 of SSN
                  <button className="relative" type="button">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="absolute z-20 hidden group-hover:block left-0 top-6 w-80 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                      Why we ask: Used to verify your identity and match credit bureau records. We never request full SSN in this form. Data is encrypted end-to-end.
                      <div className="mt-2 text-[11px] text-neutral-400">CROA notice: You can dispute inaccuracies directly with bureaus at no cost.</div>
</div>
</button>
</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" maxlength="4" name="ssn4" pattern="[0-9]{4}" placeholder="1234" required=""/>
</label>
<label className="block relative group">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">
                  Upload I.D.
                  <button className="relative" type="button">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<div className="absolute z-20 hidden group-hover:block left-0 top-6 w-80 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                      A valid government-issued photo ID helps verify your identity for disputes. File types: JPG/PNG/PDF. Avoid sharing sensitive data not requested.
                    </div>
</button>
</span>
<input accept=".jpg,.jpeg,.png,.pdf" className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="idUpload" required="" type="file"/>
</label>
</div>

<div className="mt-8 rounded-xl bg-white/5 border border-white/10 p-4 sm:p-5">
<div className="flex items-center justify-between">
<h4 className="text-base font-semibold tracking-tight">Agreements &amp; Disclosures</h4>
<button className="text-xs text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1" id="openLegal" type="button">
<svg className="lucide lucide-file-search w-4 h-4" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg> View full text
                </button>
</div>
<div className="mt-4 grid gap-3 text-sm">
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I have read and agree to the Credit Repair Service Agreement
                    <span className="inline-flex items-center relative group ml-1">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="absolute z-20 hidden group-hover:block left-0 top-6 w-96 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                        Scope: Evaluate reports, identify inaccurate/obsolete items, draft disputes to bureaus/creditors, monthly consults. No guarantees of removal. Term up to 36 months; month-to-month; you may cancel anytime.
                      </span>
</span>
</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I authorize Elite Approvals to act on my behalf for credit disputes (Authorization for Credit Repair Action)
                    <span className="inline-flex items-center relative group ml-1">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="absolute z-20 hidden group-hover:block left-0 top-6 w-96 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                        Authorizes correspondence and disputes with TransUnion, Experian, Equifax and creditors; revocable with 5 business days notice; expires in 12 months unless revoked earlier.
                      </span>
</span>
</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I acknowledge the Information Statement (CROA &amp; Florida law)
                    <span className="inline-flex items-center relative group ml-1">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="absolute z-20 hidden group-hover:block left-0 top-6 w-96 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                        You can dispute directly with bureaus for free. Accurate, current negative info cannot be removed. Free reports may be available in specific cases. You have 3 days to cancel any credit repair contract.
                      </span>
</span>
</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I understand my Right of Cancellation (3 business days; Florida permits surety-bonded advance payment)
                    <span className="inline-flex items-center relative group ml-1">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="absolute z-20 hidden group-hover:block left-0 top-6 w-96 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                        Cancel at no cost before midnight of the third business day after signing. If canceled, any payment is returned within 10 days after notice is received.
                      </span>
</span>
</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I agree to the Power of Attorney for credit-related matters
                    <span className="inline-flex items-center relative group ml-1">
<svg className="lucide lucide-circle-help w-4 h-4 text-neutral-300 hover:text-white" data-lucide="circle-help" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
<span className="absolute z-20 hidden group-hover:block left-0 top-6 w-96 p-3 rounded-lg bg-neutral-900/95 border border-white/10 tooltip-card text-xs text-neutral-300">
                        Authorizes Elite Approvals to communicate with bureaus/creditors and negotiate lawful obligations to resolve disputes; revocable any time with written notice.
                      </span>
</span>
</span>
</label>
<label className="flex items-start gap-3">
<input className="mt-1 h-4 w-4 rounded border-white/20 bg-white/5" required="" type="checkbox"/>
<span className="text-neutral-300">
                    I acknowledge service fees are non-refundable and may cancel service at any time
                  </span>
</label>
</div>
<div className="mt-5 grid sm:grid-cols-2 gap-4">
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Type Full Name (E-signature)</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="signature" placeholder="Full legal name" required=""/>
</label>
<label className="block">
<span className="flex items-center gap-2 text-sm text-neutral-200 font-medium tracking-tight">Date</span>
<input className="mt-2 w-full rounded-lg px-3 py-2 text-sm input bg-transparent" name="date" required="" type="date"/>
</label>
</div>
</div>
<div className="mt-6 flex flex-col sm:flex-row gap-3">
<button className="btn btn-primary rounded-lg px-5 py-3 text-sm font-semibold tracking-tight inline-flex items-center justify-center gap-2" type="submit">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
                Submit Securely
              </button>
<a className="btn btn-neutral rounded-lg px-5 py-3 text-sm font-medium tracking-tight inline-flex items-center justify-center gap-2" href="#book">
<svg className="lucide lucide-calendar w-4 h-4" data-lucide="calendar" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path></svg>
                Prefer to talk first? Book a call
              </a>
</div>
<p className="mt-3 text-[11px] text-neutral-500">By submitting, you agree to our Terms and Privacy Policy.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="book">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="rounded-2xl bg-white/5 outline-subtle p-6 sm:p-8 glass shadow-soft">
<div className="grid lg:grid-cols-2 gap-8 items-center">
<div>
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-clock w-3.5 h-3.5" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
              15-minute intro call
            </span>
<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">Book Your Free Consultation</h3>
<p className="mt-2 text-neutral-300">Get a tailored plan to increase score potential and maximize your refund opportunities.</p>
<ul className="mt-4 space-y-2 text-sm text-neutral-300">
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Clear next steps in under 20 minutes</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-emerald-300" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> No pressure — just value</li>
</ul>
<div className="mt-5 flex items-center gap-3">
<a className="btn btn-primary rounded-lg px-4 py-2.5 text-sm font-semibold tracking-tight inline-flex items-center gap-2" href="https://calendly.com" target="_blank">
<svg className="lucide lucide-calendar-check w-4 h-4" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
                Book on Calendly
              </a>
<a className="btn btn-neutral rounded-lg px-4 py-2.5 text-sm inline-flex items-center gap-2" href="https://maps.google.com?q=12620+Beach+Blvd+Suite+168+Jacksonville+FL" target="_blank">
<svg className="lucide lucide-map w-4 h-4" data-lucide="map" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.106 5.553a2 2 0 0 0 1.788 0l3.659-1.83A1 1 0 0 1 21 4.619v12.764a1 1 0 0 1-.553.894l-4.553 2.277a2 2 0 0 1-1.788 0l-4.212-2.106a2 2 0 0 0-1.788 0l-3.659 1.83A1 1 0 0 1 3 19.381V6.618a1 1 0 0 1 .553-.894l4.553-2.277a2 2 0 0 1 1.788 0z"></path><path d="M15 5.764v15"></path><path d="M9 3.236v15"></path></svg>
                Get Directions
              </a>
</div>
</div>
<div className="rounded-xl bg-white/5 border border-white/10 p-4">
<div className="aspect-video w-full rounded-lg bg-neutral-900 flex items-center justify-center text-neutral-400 text-sm">
              Your scheduling widget appears here
            </div>
<div className="mt-3 text-xs text-neutral-400">Tip: Add Google My Business and Yelp links to increase bookings.</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="faq">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="text-center">
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-help-circle w-3.5 h-3.5" data-lucide="help-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M9.09 9a3 3 0 0 1 5.83 1c0 2-3 3-3 3"></path><path d="M12 17h.01"></path></svg>
          Common Questions
        </span>
<h2 className="mt-4 text-3xl sm:text-4xl font-semibold tracking-tight">Answers That Build Confidence</h2>
<p className="mt-3 text-neutral-300">Built to help you appear in AI and search — detailed FAQs improve visibility.</p>
</div>
<div className="mt-8 grid lg:grid-cols-2 gap-5">

<div className="rounded-2xl bg-white/5 outline-subtle p-5 hover:bg-white/7 transition hover-card">
<button className="w-full flex items-center justify-between text-left">
<span className="font-medium tracking-tight">How quickly can I see credit results?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="mt-3 text-sm text-neutral-300">Many clients see bureau responses within 30–45 days. Speed depends on bureau timelines, item types, and your responsiveness to mail updates.</p>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle p-5 hover:bg-white/7 transition hover-card">
<button className="w-full flex items-center justify-between text-left">
<span className="font-medium tracking-tight">Do you guarantee removals or score increases?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="mt-3 text-sm text-neutral-300">No. We dispute inaccurate/obsolete information. Creditors and bureaus determine outcomes. We provide monthly updates and transparency at each step.</p>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle p-5 hover:bg-white/7 transition hover-card">
<button className="w-full flex items-center justify-between text-left">
<span className="font-medium tracking-tight">Can you handle my taxes remotely?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="mt-3 text-sm text-neutral-300">Yes. Securely upload documents through our portal and e-sign to file from anywhere in the U.S.</p>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle p-5 hover:bg-white/7 transition hover-card">
<button className="w-full flex items-center justify-between text-left">
<span className="font-medium tracking-tight">What if I’m already using another credit service?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="mt-3 text-sm text-neutral-300">Please pause or cancel other services before starting. Running duplicate disputes can reduce effectiveness.</p>
</div>
</div>
</div>
</section>

<section className="py-14 sm:py-20" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6">
<div className="grid lg:grid-cols-2 gap-8">
<div>
<span className="inline-flex items-center gap-2 badge rounded-full px-3 py-1 text-[11px] text-neutral-300">
<svg className="lucide lucide-message-circle w-3.5 h-3.5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
            Get in Touch
          </span>
<h3 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">We’re here to help</h3>
<p className="mt-2 text-neutral-300">Speak with a specialist or start your secure application now.</p>
<div className="mt-5 grid gap-3 text-sm">
<a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200" href="tel:+19049999999">
<svg className="lucide lucide-phone w-4 h-4" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>(904) 999-9999
            </a>
<a className="inline-flex items-center gap-2 text-cyan-300 hover:text-cyan-200" href="mailto:hello@eliteapprovals.com">
<svg className="lucide lucide-mail w-4 h-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>hello@eliteapprovals.com
            </a>
<div className="inline-flex items-start gap-2 text-neutral-300">
<svg className="lucide lucide-map-pin w-4 h-4 text-cyan-300 mt-0.5" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
              12620 Beach Blvd. Suite #168, Jacksonville, FL 34426
            </div>
</div>
<div className="mt-6 flex items-center gap-3">
<a className="btn btn-primary rounded-lg px-4 py-2.5 text-sm font-semibold tracking-tight inline-flex items-center gap-2" href="#apply">
<svg className="lucide lucide-shield w-4 h-4" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg> Start Application
            </a>
<a className="btn btn-neutral rounded-lg px-4 py-2.5 text-sm inline-flex items-center gap-2" href="https://www.google.com/maps" target="_blank">
<svg className="lucide lucide-globe w-4 h-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg> Find us online
            </a>
</div>
</div>
<div className="rounded-2xl bg-white/5 outline-subtle p-6 glass shadow-soft">
<form className="grid gap-3" id="subscribeForm">
<div className="text-sm text-neutral-300">Join our monthly tips for tax credits, score boosts, and deadlines.</div>
<div className="grid sm:grid-cols-3 gap-3">
<input className="sm:col-span-2 rounded-lg px-3 py-2 text-sm input bg-transparent" placeholder="you@example.com" required="" type="email"/>
<button className="btn btn-primary rounded-lg px-4 py-2 text-sm font-semibold tracking-tight" type="submit">Subscribe</button>
</div>
<div className="text-[11px] text-neutral-500">We never sell your data.</div>
</form>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 py-10">
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-6">
<a className="inline-flex items-center gap-2" href="#top">
<div className="h-8 w-8 rounded-xl bg-gradient-to-tr from-cyan-400/25 to-indigo-400/25 outline-subtle flex items-center justify-center">
<svg className="lucide lucide-sparkles w-4.5 h-4.5" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<span className="text-sm font-semibold tracking-tight">Elite Approvals</span>
</a>
<nav className="text-sm text-neutral-300 grid grid-cols-2 sm:flex sm:flex-row gap-3 sm:gap-6">
<a className="hover:text-white transition" href="#services">Services</a>
<a className="hover:text-white transition" href="#pricing">Pricing</a>
<a className="hover:text-white transition" href="#apply">Application</a>
<a className="hover:text-white transition" href="#book">Book</a>
<a className="hover:text-white transition" href="#faq">FAQ</a>
<a className="hover:text-white transition" href="#contact">Contact</a>
</nav>
</div>
<div className="mt-8 grid md:grid-cols-3 gap-6">
<div className="rounded-xl bg-white/5 outline-subtle p-5">
<div className="text-sm font-medium tracking-tight mb-2">Jacksonville HQ</div>
<div className="text-sm text-neutral-300">12620 Beach Blvd. Suite #168Jacksonville, FL 34426</div>
</div>
<div className="rounded-xl bg-white/5 outline-subtle p-5">
<div className="text-sm font-medium tracking-tight mb-2">Contact</div>
<div className="grid gap-2 text-sm text-neutral-300">
<a className="inline-flex items-center gap-2 hover:text-white" href="tel:+19049999999">
<svg className="lucide lucide-phone w-4 h-4 text-cyan-300" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>(904) 999-9999
            </a>
<a className="inline-flex items-center gap-2 hover:text-white" href="mailto:hello@eliteapprovals.com">
<svg className="lucide lucide-mail w-4 h-4 text-cyan-300" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>hello@eliteapprovals.com
            </a>
</div>
</div>
<div className="rounded-xl bg-white/5 outline-subtle p-5">
<div className="text-sm font-medium tracking-tight mb-2">Trust &amp; Compliance</div>
<div className="grid gap-2 text-sm text-neutral-300">
<div className="inline-flex items-center gap-2"><svg className="lucide lucide-shield-check w-4 h-4 text-emerald-300" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg> SSL Secured • Bond #SB271887</div>
<a className="inline-flex items-center gap-2 hover:text-white" href="https://www.bbb.org" target="_blank">
<svg className="lucide lucide-badge-check w-4 h-4 text-cyan-300" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg> BBB Profile
            </a>
</div>
</div>
</div>
<div className="divider my-8"></div>
<div className="grid lg:grid-cols-2 gap-6">
<div className="text-[12px] leading-relaxed text-neutral-400">
          Credit Repair Organizations Act (CROA) Notice: You have the right to dispute inaccurate information with credit bureaus at no cost. We cannot remove accurate, current information. You may cancel services within three business days of signing at no charge.
          This site and services do not provide legal, tax, or financial advice; consult your professional advisor for guidance.
        </div>
<div className="flex flex-col sm:flex-row items-start sm:items-center justify-end gap-3 text-sm">
<a className="text-neutral-300 hover:text-white" href="#">Privacy Policy</a>
<span className="hidden sm:inline text-neutral-700">|</span>
<a className="text-neutral-300 hover:text-white" href="#">Terms of Service</a>
<span className="hidden sm:inline text-neutral-700">|</span>
<button className="text-cyan-300 hover:text-cyan-200 inline-flex items-center gap-1" id="openLegalFooter">
<svg className="lucide lucide-file-text w-4 h-4" data-lucide="file-text" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M10 9H8"></path><path d="M16 13H8"></path><path d="M16 17H8"></path></svg> Disclosures
          </button>
</div>
</div>
<div className="mt-8 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="text-xs text-neutral-500">© <span id="yearNow">2025</span> Elite Approvals, LLC — All rights reserved.</div>
<div className="flex items-center gap-3">
<a aria-label="Instagram" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" href="#">
<svg className="lucide lucide-instagram w-4.5 h-4.5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
<a aria-label="Facebook" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" href="#">
<svg className="lucide lucide-facebook w-4.5 h-4.5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a aria-label="LinkedIn" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" href="#">
<svg className="lucide lucide-linkedin w-4.5 h-4.5" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a aria-label="X" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" href="#">
<svg className="lucide lucide-twitter w-4.5 h-4.5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-50 hidden" id="legalModal">
<div className="absolute inset-0 bg-black/70"></div>
<div className="relative z-10 max-w-3xl mx-auto my-10 px-4">
<div className="rounded-2xl bg-neutral-900 outline-subtle glass shadow-glow">
<div className="flex items-center justify-between px-5 py-4 border-b border-white/10">
<div className="flex items-center gap-2">
<svg className="lucide lucide-file-search w-5 h-5 text-cyan-300" data-lucide="file-search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="M4.268 21a2 2 0 0 0 1.727 1H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v3"></path><path d="m9 18-1.5-1.5"></path><circle cx="5" cy="14" r="3"></circle></svg>
<h3 className="text-base font-semibold tracking-tight">Agreements &amp; Disclosures — Full Text</h3>
</div>
<button aria-label="Close" className="h-9 w-9 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" id="closeLegal">
<svg className="lucide lucide-x w-5 h-5" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="px-5 py-4 max-h-[70vh] overflow-y-auto text-sm text-neutral-300">
<h4 className="font-semibold">1) Credit Repair Service Agreement (Summary)</h4>
<p className="mt-2">Scope includes review of your credit reports, identification of inaccurate, unverifiable, or obsolete items, and preparation of disputes directed to the credit bureaus and/or creditors. No guarantee of specific results or score changes. Service is month-to-month and may continue up to 36 months unless canceled earlier. You may cancel at any time.</p>
<h4 className="mt-4 font-semibold">2) Authorization to Act on Your Behalf</h4>
<p className="mt-2">You authorize Elite Approvals to communicate with Experian, Equifax, TransUnion, and applicable creditors or collection agencies to submit and manage disputes pertaining to the accuracy or completeness of information reported about you. Authorization is revocable with 5 business days written notice and otherwise expires 12 months from signature.</p>
<h4 className="mt-4 font-semibold">3) Information Statement (CROA &amp; Florida Law)</h4>
<ul className="mt-2 list-disc list-inside space-y-1">
<li>You can dispute items directly with credit bureaus at no cost.</li>
<li>Accurate, current negative information cannot be removed.</li>
<li>You may be eligible for free credit reports under certain circumstances.</li>
<li>You may cancel any credit repair contract within three business days.</li>
</ul>
<h4 className="mt-4 font-semibold">4) Right of Cancellation</h4>
<p className="mt-2">You may cancel this agreement without penalty by midnight of the third business day after signing. If you cancel, any payment will be returned within 10 days after we receive your written notice.</p>
<h4 className="mt-4 font-semibold">5) Limited Power of Attorney</h4>
<p className="mt-2">You grant Elite Approvals limited power of attorney to communicate with bureaus and creditors to address disputed items and request information reasonably necessary to perform services. This POA is limited to credit-related disputes and may be revoked in writing at any time.</p>
<h4 className="mt-4 font-semibold">6) E‑Signature and Communications Consent</h4>
<p className="mt-2">By typing your name, you agree your e-signature is the legal equivalent of your manual signature. You consent to receive communications by email, SMS, or phone related to your account and services. Message/data rates may apply.</p>
<h4 className="mt-4 font-semibold">7) Privacy &amp; Security</h4>
<p className="mt-2">We employ encryption in transit and at rest and restrict access to authorized personnel. We do not sell your personal data. See our Privacy Policy for full details.</p>
<h4 className="mt-4 font-semibold">8) Tax Preparation Disclosure</h4>
<p className="mt-2">Tax services follow IRS and state rules. Refund timelines depend on government processing. We do not guarantee refunds or outcomes. Consult your tax professional for advice tailored to your situation.</p>
</div>
<div className="px-5 py-4 border-t border-white/10 flex items-center justify-end gap-3">
<button className="btn btn-neutral rounded-lg px-4 py-2 text-sm" id="closeLegal2">Close</button>
</div>
</div>
</div>
</div>

<button aria-label="Open chat" className="fixed bottom-5 right-5 z-40 h-12 w-12 rounded-xl btn-primary shadow-glow flex items-center justify-center" id="chatToggle">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</button>
<div className="fixed bottom-5 right-5 z-40 w-[90vw] max-w-sm rounded-2xl bg-neutral-900/95 outline-subtle glass shadow-glow hidden" id="chatPanel">
<div className="px-4 py-3 border-b border-white/10 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="h-7 w-7 rounded-lg bg-gradient-to-tr from-cyan-400/20 to-indigo-400/20 outline-subtle flex items-center justify-center">
<svg className="lucide lucide-bot w-4.5 h-4.5" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
<div>
<div className="text-sm font-semibold tracking-tight">Elite Assistant</div>
<div className="text-[11px] text-neutral-400">Ask about credit or taxes</div>
</div>
</div>
<button aria-label="Close chat" className="h-8 w-8 rounded-lg bg-white/5 border border-white/10 inline-flex items-center justify-center hover:bg-white/10" id="chatClose">
<svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="px-3 py-3 max-h-80 overflow-y-auto space-y-3 text-sm" id="chatMsgs"></div>
<form className="p-3 border-t border-white/10" id="chatForm">
<div className="flex items-end gap-2">
<textarea aria-label="Message" className="flex-1 rounded-lg px-3 py-2 text-sm input bg-transparent resize-none" id="chatInput" placeholder="Type a message..." rows="1"></textarea>
<button aria-label="Send message" className="btn btn-primary rounded-lg px-3 py-2 text-sm font-semibold tracking-tight inline-flex items-center gap-2">
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg>
<span className="hidden sm:inline">Send</span>
</button>
</div>
</form>
</div>

<div className="fixed bottom-4 right-4 z-50 space-y-2" id="toastStack"></div>


    </>
  );
}
