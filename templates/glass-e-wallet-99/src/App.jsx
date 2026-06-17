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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Icon stroke width 1.5
    (function setIconStroke() {
      document.querySelectorAll('iconify-icon').forEach(i => i.setAttribute('stroke-width', '1.5'));
    })();

    // Animations: scale + fade
    function animateIn(el, delay = 0) {
      el.style.opacity = '0';
      el.style.transform = 'translateY(0.5rem) scale(0.98)';
      el.style.transitionProperty = 'opacity, transform';
      el.style.transitionDuration = '700ms';
      el.style.transitionTimingFunction = 'cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transitionDelay = delay + 'ms';
      requestAnimationFrame(() => {
        el.style.opacity = '1';
        el.style.transform = 'translateY(0) scale(1)';
      });
    }

    function pulse(el) {
      el.style.transition = 'transform 420ms cubic-bezier(0.16, 1, 0.3, 1), filter 420ms cubic-bezier(0.16, 1, 0.3, 1)';
      el.style.transform = 'scale(1.02)';
      el.style.filter = 'saturate(1.1)';
      setTimeout(() => {
        el.style.transform = 'scale(1)';
        el.style.filter = 'saturate(1)';
      }, 220);
    }

    const hero = document.getElementById('heroCard');
    const txList = document.getElementById('txList');
    const txRows = Array.from(document.querySelectorAll('.txRow'));
    const navBtns = Array.from(document.querySelectorAll('.navBtn'));

    animateIn(document.querySelector('header'), 0);
    animateIn(hero, 80);
    animateIn(document.querySelector('section:nth-of-type(2)'), 140);
    txRows.forEach((row, idx) => animateIn(row, 180 + idx * 70));
    animateIn(document.querySelector('nav'), 260);

    // Balance hide/show
    const eyeBtn = document.getElementById('eyeBtn');
    const eyeIcon = document.getElementById('eyeIcon');
    const balanceEl = document.getElementById('balance');
    const realBalance = balanceEl.textContent;
    let hidden = false;

    eyeBtn.addEventListener('click', () => {
      hidden = !hidden;
      pulse(hero);
      balanceEl.style.transition = 'opacity 220ms ease, transform 220ms ease';
      balanceEl.style.opacity = '0';
      balanceEl.style.transform = 'translateY(0.125rem) scale(0.99)';
      setTimeout(() => {
        balanceEl.textContent = hidden ? '$••••.••' : realBalance;
        eyeIcon.setAttribute('icon', hidden ? 'solar:eye-closed-linear' : 'solar:eye-linear');
        balanceEl.style.opacity = '1';
        balanceEl.style.transform = 'translateY(0) scale(1)';
      }, 170);
    });

    // Toast
    const toast = document.getElementById('toast');
    const toastTitle = document.getElementById('toastTitle');
    const toastBody = document.getElementById('toastBody');
    const toastIcon = document.getElementById('toastIcon');
    let toastTimer = null;

    function showToast(title, body, icon = 'solar:check-circle-linear') {
      clearTimeout(toastTimer);
      toastTitle.textContent = title;
      toastBody.textContent = body;
      toastIcon.setAttribute('icon', icon);

      toast.style.transition = 'opacity 220ms ease, transform 220ms cubic-bezier(0.16, 1, 0.3, 1)';
      toast.style.opacity = '0';
      toast.style.transform = 'translate(-50%, -0.35rem) scale(0.98)';
      requestAnimationFrame(() => {
        toast.style.opacity = '1';
        toast.style.transform = 'translate(-50%, 0) scale(1)';
      });

      toastTimer = setTimeout(() => {
        toast.style.opacity = '0';
        toast.style.transform = 'translate(-50%, -0.35rem) scale(0.98)';
      }, 2200);
    }

    // Quick actions
    document.querySelectorAll('.actionBtn').forEach(btn => {
      btn.addEventListener('click', () => {
        const a = btn.getAttribute('data-action') || 'Action';
        pulse(hero);
        showToast(a, a === 'Pay' ? 'Camera opened for QR scan.' : a === 'Send' ? 'Choose a contact to send money.' : 'Select a top up method.');
      });
    });

    // Transactions
    txRows.forEach(row => {
      row.addEventListener('click', () => {
        pulse(row);
        const name = row.querySelector('p.text-sm.font-medium')?.textContent?.trim() || 'Transaction';
        showToast('Details', `Viewing ${name}.`, 'solar:info-circle-linear');
      });
    });

    // Filter button
    document.getElementById('filterBtn').addEventListener('click', () => {
      pulse(txList);
      showToast('Filter', 'Showing latest activity.', 'solar:sort-vertical-linear');
    });

    // Bottom nav
    function setActive(tab) {
      navBtns.forEach(b => {
        const isActive = b.getAttribute('data-tab') === tab;
        b.classList.toggle('bg-white/10', isActive);
        b.classList.toggle('hover:bg-white/5', !isActive);

        const icon = b.querySelector('iconify-icon');
        const label = b.querySelector('p');
        if (icon) icon.className = isActive ? 'text-white' : 'text-white/75';
        if (label) label.className = isActive ? 'mt-1 text-center text-xs font-medium text-white/90' : 'mt-1 text-center text-xs text-white/65';
      });
    }

    navBtns.forEach(btn => {
      btn.addEventListener('click', () => {
        const tab = btn.getAttribute('data-tab');
        setActive(tab);
        pulse(btn);
        showToast(tab, `Switched to ${tab}.`, 'solar:widget-linear');
      });
    });

    // Notification button
    document.getElementById('notifBtn').addEventListener('click', () => {
      showToast('Notifications', 'You have 2 new alerts.', 'solar:bell-linear');
    });

    // More button
    document.getElementById('moreBtn').addEventListener('click', () => {
      showToast('Wallet', 'Manage cards and security.', 'solar:shield-check-linear');
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
      
<div className="relative min-h-screen overflow-hidden">

<div className="absolute inset-0">
<div className="absolute -top-24 -left-24 h-80 w-80 rounded-full bg-cyan-500/25 blur-3xl"></div>
<div className="absolute top-1/3 -right-24 h-96 w-96 rounded-full bg-fuchsia-500/20 blur-3xl"></div>
<div className="absolute -bottom-24 left-1/3 h-96 w-96 rounded-full bg-indigo-500/20 blur-3xl"></div>
<div className="absolute inset-0 bg-gradient-to-b from-slate-950/40 via-slate-950 to-slate-950"></div>
<div className="absolute inset-0 opacity-[0.18]" style={{backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(255,255,255,0.22) 1px, rgba(0,0,0,0) 0)', backgroundSize: '20px 20px'}}></div>
</div>

<main className="relative mx-auto flex min-h-screen w-full max-w-md flex-col px-4 pb-6 pt-5 sm:pt-8">

<header className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] grid place-items-center">
<span className="font-semibold tracking-tight text-sm" style={{fontFamily: 'Plus Jakarta Sans, Inter, system-ui'}}>EW</span>
</div>
<div className="leading-tight">
<p className="text-xs text-white/70">Good evening</p>
<p className="text-sm font-medium tracking-tight" style={{fontFamily: 'Plus Jakarta Sans, Inter, system-ui'}}>Avery Chen</p>
</div>
</div>
<button className="group relative h-10 w-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.25)] transition active:scale-95" id="notifBtn">
<span className="absolute right-2 top-2 h-2 w-2 rounded-full bg-cyan-300 shadow-[0_0_0_3px_rgba(34,211,238,0.14)]"></span>
<span className="grid h-full w-full place-items-center">
<iconify-icon className="text-white/85" height="20" icon="solar:bell-linear" width="20"></iconify-icon>
</span>
</button>
</header>

<section className="mt-5 sm:mt-6">
<div className="relative overflow-hidden rounded-3xl border border-white/15 bg-white/10 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.35)]" id="heroCard">
<div className="absolute inset-0 bg-gradient-to-br from-white/10 via-white/5 to-transparent"></div>
<div className="absolute -right-24 -top-24 h-56 w-56 rounded-full bg-cyan-400/15 blur-3xl"></div>
<div className="absolute -left-24 -bottom-24 h-56 w-56 rounded-full bg-fuchsia-400/10 blur-3xl"></div>
<div className="relative p-5">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs text-white/70">Available balance</p>
<div className="mt-2 flex items-baseline gap-2">
<p className="text-3xl font-semibold tracking-tight" id="balance" style={{fontFamily: 'Plus Jakarta Sans, Inter, system-ui'}}>$4,280.50</p>
<span className="rounded-full border border-white/15 bg-white/10 px-2 py-1 text-xs text-white/80">USD</span>
</div>
</div>
<div className="flex items-center gap-2">
<button className="h-10 w-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl transition active:scale-95" id="eyeBtn">
<span className="grid h-full w-full place-items-center">
<iconify-icon className="text-white/80" height="20" icon="solar:eye-linear" id="eyeIcon" width="20"></iconify-icon>
</span>
</button>
<button className="h-10 w-10 rounded-2xl border border-white/15 bg-white/10 backdrop-blur-xl transition active:scale-95" id="moreBtn">
<span className="grid h-full w-full place-items-center">
<iconify-icon className="text-white/80" height="20" icon="solar:menu-dots-linear" width="20"></iconify-icon>
</span>
</button>
</div>
</div>
<div className="mt-5 flex items-center justify-between">
<div className="space-y-1">
<p className="text-xs text-white/70">Card</p>
<p className="text-sm font-medium tracking-tight">•••• 4821</p>
</div>
<div className="space-y-1 text-right">
<p className="text-xs text-white/70">Next payout</p>
<p className="text-sm font-medium tracking-tight">Fri, 2:15 PM</p>
</div>
</div>
<div className="mt-5 flex gap-3">
<button className="actionBtn flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-xl transition active:scale-95" data-action="Send">
<div className="flex items-center justify-center gap-2">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
<iconify-icon className="text-white/85" height="20" icon="solar:arrow-up-linear" width="20"></iconify-icon>
</span>
<div className="text-left">
<p className="text-xs text-white/70">Quick</p>
<p className="text-sm font-medium tracking-tight">Send</p>
</div>
</div>
</button>
<button className="actionBtn flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-xl transition active:scale-95" data-action="Top up">
<div className="flex items-center justify-center gap-2">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
<iconify-icon className="text-white/85" height="20" icon="solar:plus-linear" width="20"></iconify-icon>
</span>
<div className="text-left">
<p className="text-xs text-white/70">Add</p>
<p className="text-sm font-medium tracking-tight">Top up</p>
</div>
</div>
</button>
<button className="actionBtn flex-1 rounded-2xl border border-white/15 bg-white/10 px-3 py-3 backdrop-blur-xl transition active:scale-95" data-action="Pay">
<div className="flex items-center justify-center gap-2">
<span className="grid h-9 w-9 place-items-center rounded-xl bg-white/10">
<iconify-icon className="text-white/85" height="20" icon="solar:qr-code-linear" width="20"></iconify-icon>
</span>
<div className="text-left">
<p className="text-xs text-white/70">Scan</p>
<p className="text-sm font-medium tracking-tight">Pay</p>
</div>
</div>
</button>
</div>
</div>
</div>
</section>

<section className="mt-5 sm:mt-6">
<div className="flex items-center justify-between">
<h2 className="text-sm font-medium tracking-tight" style={{fontFamily: 'Plus Jakarta Sans, Inter, system-ui'}}>Recent activity</h2>
<button className="rounded-full border border-white/15 bg-white/10 px-3 py-1.5 text-xs text-white/80 backdrop-blur-xl transition active:scale-95" id="filterBtn">
<span className="inline-flex items-center gap-2">
<iconify-icon className="text-white/80" height="16" icon="solar:sort-vertical-linear" width="16"></iconify-icon>
              Filter
            </span>
</button>
</div>
<div className="mt-3 space-y-3" id="txList">

<button className="txRow w-full rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition active:scale-95">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/85" height="22" icon="solar:cart-2-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="truncate text-sm font-medium tracking-tight">Aurora Market</p>
<p className="text-sm font-medium text-white/90">-$36.40</p>
</div>
<div className="mt-1 flex items-center justify-between gap-3">
<p className="truncate text-xs text-white/65">Groceries • Today</p>
<p className="text-xs text-white/60">2:08 PM</p>
</div>
</div>
</div>
</button>
<button className="txRow w-full rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition active:scale-95">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/85" height="22" icon="solar:buildings-2-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="truncate text-sm font-medium tracking-tight">Rent</p>
<p className="text-sm font-medium text-white/90">-$1,250.00</p>
</div>
<div className="mt-1 flex items-center justify-between gap-3">
<p className="truncate text-xs text-white/65">Home • Yesterday</p>
<p className="text-xs text-white/60">9:12 AM</p>
</div>
</div>
</div>
</button>
<button className="txRow w-full rounded-2xl border border-white/15 bg-white/10 p-4 text-left backdrop-blur-xl shadow-[0_10px_30px_rgba(0,0,0,0.22)] transition active:scale-95">
<div className="flex items-center gap-3">
<div className="grid h-11 w-11 place-items-center rounded-2xl bg-white/10">
<iconify-icon className="text-white/85" height="22" icon="solar:card-transfer-linear" width="22"></iconify-icon>
</div>
<div className="min-w-0 flex-1">
<div className="flex items-center justify-between gap-3">
<p className="truncate text-sm font-medium tracking-tight">Payroll</p>
<p className="text-sm font-medium text-cyan-200">+$3,200.00</p>
</div>
<div className="mt-1 flex items-center justify-between gap-3">
<p className="truncate text-xs text-white/65">Income • Mon</p>
<p className="text-xs text-white/60">11:40 AM</p>
</div>
</div>
</div>
</button>
</div>
</section>

<nav className="mt-auto pt-5">
<div className="rounded-3xl border border-white/15 bg-white/10 p-2 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
<div className="grid grid-cols-4 gap-2">
<button className="navBtn group rounded-2xl bg-white/10 px-3 py-3 text-left transition active:scale-95" data-tab="Home">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-white" height="20" icon="solar:home-2-linear" width="20"></iconify-icon>
</div>
<p className="mt-1 text-center text-xs font-medium text-white/90">Home</p>
</button>
<button className="navBtn group rounded-2xl px-3 py-3 text-left transition active:scale-95 hover:bg-white/5" data-tab="Cards">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-white/75" height="20" icon="solar:card-linear" width="20"></iconify-icon>
</div>
<p className="mt-1 text-center text-xs text-white/65">Cards</p>
</button>
<button className="navBtn group rounded-2xl px-3 py-3 text-left transition active:scale-95 hover:bg-white/5" data-tab="Stats">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-white/75" height="20" icon="solar:chart-2-linear" width="20"></iconify-icon>
</div>
<p className="mt-1 text-center text-xs text-white/65">Stats</p>
</button>
<button className="navBtn group rounded-2xl px-3 py-3 text-left transition active:scale-95 hover:bg-white/5" data-tab="Profile">
<div className="flex items-center justify-center gap-2">
<iconify-icon className="text-white/75" height="20" icon="solar:user-linear" width="20"></iconify-icon>
</div>
<p className="mt-1 text-center text-xs text-white/65">Profile</p>
</button>
</div>
</div>
</nav>

<div className="pointer-events-none fixed left-1/2 top-5 z-50 w-[min(26rem,calc(100vw-2rem))] -translate-x-1/2 opacity-0" id="toast">
<div className="rounded-2xl border border-white/15 bg-white/10 px-4 py-3 text-sm text-white/90 backdrop-blur-2xl shadow-[0_24px_70px_rgba(0,0,0,0.35)]">
<div className="flex items-center gap-3">
<div className="grid h-10 w-10 place-items-center rounded-2xl bg-white/10">
<iconify-icon className="text-cyan-200" height="22" icon="solar:check-circle-linear" id="toastIcon" width="22"></iconify-icon>
</div>
<div className="min-w-0">
<p className="text-sm font-medium tracking-tight" id="toastTitle">Done</p>
<p className="mt-0.5 text-xs text-white/65" id="toastBody">Action completed.</p>
</div>
</div>
</div>
</div>
</main>
</div>


    </>
  );
}
