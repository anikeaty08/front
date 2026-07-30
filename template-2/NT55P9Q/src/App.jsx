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
      
    lucide.createIcons();

    new Chart(document.getElementById('refChart'), {
      type: 'bar',
      data: { labels: ['Mon','Tue','Wed','Thu','Fri','Sat','Sun'],
        datasets: [{ data: [3,5,4,6,5,7,8], backgroundColor: '#10b981', borderRadius: 4 }] },
      options: { plugins: { legend: { display: false } },
        scales: { x: { grid: { display: false }, ticks: { color: '#6b7280' } },
                  y: { beginAtZero: true, grid: { color: '#27272a' }, ticks: { color: '#6b7280' } } } }
    });

    document.getElementById('chatForm').addEventListener('submit', e => {
      e.preventDefault();
      const input = e.target.querySelector('input');
      if (!input.value.trim()) return;

      const container = document.createElement('div');
      container.className = 'flex items-start gap-3 animate-fade-in';
      container.innerHTML = `
        <img src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&q=80" alt="You" class="w-9 h-9 rounded-full object-cover">
        <div>
          <div class="text-xs text-gray-500 mb-0.5">You • now</div>
          <div class="bg-gray-800 rounded-lg px-4 py-2 text-sm max-w-md">${input.value.trim()}</div>
        </div>`;
      document.getElementById('chatFeed').appendChild(container);
      input.value = '';
      setTimeout(() => {
        const feed = document.getElementById('chatFeed');
        feed.scrollTop = feed.scrollHeight;
      }, 50);
    });

    const shareBtn        = document.getElementById('shareBtn');
    const shareModal      = document.getElementById('shareModal');
    const closeModal      = document.getElementById('closeModal');
    const doneBtn         = document.getElementById('doneBtn');
    const copyLinkBtn     = document.getElementById('copyLinkBtn');
    const nativeShareBtn  = document.getElementById('nativeShareBtn');
    const refLinkInput    = document.getElementById('refLink');
    const notifBar        = document.getElementById('notifBar');
    const notifText       = document.getElementById('notifText');

    const openModal = () => { shareModal.classList.remove('hidden'); refLinkInput.focus(); document.body.style.overflow = 'hidden'; };
    const hideModal = () => { shareModal.classList.add('hidden'); document.body.style.overflow = ''; shareBtn.focus(); };

    shareBtn.addEventListener('click', openModal);
    closeModal.addEventListener('click', hideModal);
    doneBtn.addEventListener('click', hideModal);
    document.addEventListener('keydown', e => { if (e.key === 'Escape' && !shareModal.classList.contains('hidden')) hideModal(); });

    copyLinkBtn.addEventListener('click', () => {
      navigator.clipboard.writeText(refLinkInput.value).then(() => {
        notifText.textContent = 'Link copied! Share with friends & earn rewards.';
        notifBar.classList.remove('hidden');
        setTimeout(() => notifBar.classList.add('hidden'), 3000);
      });
    });

    nativeShareBtn.addEventListener('click', async () => {
      if (navigator.share) {
        try { await navigator.share({ title: '20 % off at ZARA', text: 'Grab 20 % off using my link!', url: refLinkInput.value }); } catch {}
      } else { copyLinkBtn.click(); }
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
      
<div className="w-full bg-gradient-to-r from-emerald-600/90 to-cyan-600/80 py-2 px-4 text-sm font-medium hidden" id="notifBar">
<span className="mr-2">🔗</span><span id="notifText"></span>
</div>
<main className="flex flex-1 overflow-hidden">
<aside className="w-60 border-r border-gray-800 p-4 flex flex-col gap-4">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold tracking-tight">Groups</h2>
<button className="p-1.5 rounded-md bg-gray-800 hover:bg-gray-700" id="newGroupBtn"><i className="w-4 h-4" data-lucide="plus"></i></button>
</div>
<nav className="flex flex-col gap-2 text-sm">
<button className="flex items-center justify-between px-3 py-2 rounded-md bg-gray-800 hover:bg-gray-700">
<span>Zara Egypt Fans</span><span className="text-xs text-gray-400">1,235</span>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800">
<span>Coffee Lovers</span><span className="text-xs text-gray-400">42</span>
</button>
<button className="flex items-center justify-between px-3 py-2 rounded-md hover:bg-gray-800">
<span>Gadget Deals</span><span className="text-xs text-gray-400">87</span>
</button>
</nav>
</aside>
<section className="flex-1 flex flex-col overflow-hidden">
<header className="flex items-center justify-between px-6 py-4 border-b border-gray-800">
<div className="flex items-center gap-3">
<i className="w-5 h-5 text-emerald-400" data-lucide="shopping-bag"></i>
<h1 className="text-2xl font-semibold tracking-tight">Zara Egypt Fans</h1>
<span className="text-xs text-gray-400">(1,235 Members)</span>
</div>
<button className="flex items-center gap-2 px-3 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium" id="promoBtn">
<i className="w-4 h-4" data-lucide="sparkles"></i> 20 % OFF
        </button>
</header>
<div className="flex-1 overflow-y-auto p-6 flex flex-col gap-6" id="chatFeed">

<article className="group relative overflow-hidden rounded-lg border border-gray-800 bg-gray-900/60 p-6 backdrop-blur animate-fade-in">
<div className="absolute inset-x-0 top-0 h-0.5 bg-gradient-to-r from-emerald-600/60 via-cyan-600/40 to-transparent"></div>
<header className="flex items-center gap-2 mb-4">
<i className="w-5 h-5 text-emerald-500" data-lucide="flame"></i>
<h2 className="text-base font-semibold tracking-tight">Zara Official Ad</h2>
</header>
<div className="flex gap-5 flex-col sm:flex-row">
<img alt="Summer Collection Sneak Peek" className="w-full sm:w-40 h-40 object-cover rounded-lg shadow-lg shadow-black/20" src="https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=900&q=80" />
<div className="flex-1 flex flex-col">
<h3 className="text-xl font-semibold tracking-tight mb-1">20 % OFF New Arrivals!</h3>
<p className="text-sm text-gray-400 mb-4">“Shop our Summer Collection.”</p>
<div className="flex gap-3 mb-4">
<button className="flex items-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-emerald-700">
<i className="w-4 h-4" data-lucide="shopping-cart"></i> Buy Now
                </button>
<button className="flex items-center gap-2 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium focus:outline-none focus:ring-2 focus:ring-gray-600" id="shareBtn">
<i className="w-4 h-4" data-lucide="share-2"></i> Share & Earn
                </button>
</div>
<div className="flex items-center gap-6 text-xs text-gray-400">
<span className="flex items-center gap-1"><i className="w-4 h-4 group-hover:text-rose-500 transition-colors" data-lucide="heart"></i><span>120</span></span>
<span className="flex items-center gap-1"><i className="w-4 h-4 group-hover:text-amber-400 transition-colors" data-lucide="smile"></i><span>45</span></span>
<span className="flex items-center gap-1"><i className="w-4 h-4 group-hover:text-sky-400 transition-colors" data-lucide="message-circle"></i><span>78</span></span>
</div>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 h-0.5 bg-gradient-to-r from-transparent via-cyan-600/40 to-emerald-600/60"></div>
</article>

<article className="flex flex-col gap-4">
<div className="flex items-start gap-3 animate-fade-in" style={{animationDelay: `.1s`}}>
<img alt="Khalid avatar" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" />
<div>
<div className="text-xs text-gray-500 mb-0.5">Khalid • just now</div>
<div className="bg-gray-800 rounded-lg px-4 py-2 text-sm max-w-md">Any new arrivals for the Cairo store?</div>
</div>
</div>
<div className="flex items-start gap-3 animate-fade-in" style={{animationDelay: `.2s`}}>
<img alt="Zara Official avatar" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=640&q=80" />
<div>
<div className="text-xs text-gray-500 mb-0.5">Zara Official • typing…</div>
<div className="bg-gray-800/70 border border-emerald-600 rounded-lg px-4 py-2 text-sm max-w-md">New drop next week! Stay tuned.</div>
</div>
</div>

<div className="flex items-start gap-3 animate-fade-in" style={{animationDelay: `.3s`}}>
<img alt="Zara Official avatar" className="w-9 h-9 rounded-full object-cover" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=640&q=80" />
<div>
<div className="text-xs text-gray-500 mb-0.5">Zara Official • a moment ago</div>
<div className="bg-emerald-600/10 border border-emerald-600 rounded-lg px-4 py-2 text-sm max-w-md">
                🎉 Congrats Khalid!<br />
                Your referral was successful.<br />
                💰 100 MVR added to your wallet.
              </div>
</div>
</div>
</article>
</div>
<form className="border-t border-gray-800 px-4 py-3 flex items-center gap-3" id="chatForm">
<button aria-label="Emoji" className="p-2 rounded-md hover:bg-gray-800" type="button">
<i className="w-5 h-5 text-gray-400" data-lucide="smile"></i>
</button>
<input aria-label="Message input" className="flex-1 bg-gray-900/60 backdrop-blur border border-gray-800 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-1 focus:ring-emerald-600" placeholder="Type your message…" type="text" />
<button aria-label="Attach file" className="p-2 rounded-md hover:bg-gray-800" type="button">
<i className="w-5 h-5 text-gray-400" data-lucide="paperclip"></i>
</button>
<button aria-label="Send message" className="p-2 rounded-md bg-emerald-600 hover:bg-emerald-500" type="submit">
<i className="w-5 h-5" data-lucide="send"></i>
</button>
</form>
</section>

<aside className="w-72 border-l border-gray-800 p-6 flex flex-col gap-6">
<h2 className="text-lg font-semibold tracking-tight flex items-center gap-2">
<i className="w-5 h-5 text-amber-400" data-lucide="trophy"></i> Top Referrers This Week
      </h2>
<ul className="flex flex-col gap-4 text-sm">
<li className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="text-amber-400 text-lg">🥇</span><span>Khalid</span></div>
<span className="font-medium">9</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="text-gray-300 text-lg">🥈</span><span>Alice</span></div>
<span className="font-medium">8</span>
</li>
<li className="flex items-center justify-between">
<div className="flex items-center gap-3"><span className="text-[#cd7f32] text-lg">🥉</span><span>Sara</span></div>
<span className="font-medium">5</span>
</li>
</ul>
<div className="flex flex-col gap-4">
<h3 className="text-base font-medium tracking-tight">Weekly Referrals</h3>
<div className="rounded-lg border border-gray-800 p-3">
<div className="w-full h-40 relative">
<canvas className="!w-full !h-full" id="refChart"></canvas>
</div>
</div>
</div>
</aside>
</main>

<div aria-labelledby="shareTitle" aria-modal="true" className="fixed inset-0 bg-black/60 backdrop-blur-sm flex items-start justify-center pt-24 z-50 hidden" id="shareModal" role="dialog">
<div className="animate-pop relative w-full max-w-sm mx-4 sm:mx-0 rounded-2xl bg-gray-900 border border-gray-700 shadow-xl">
<button aria-label="Close" className="absolute top-3 right-3 p-1.5 rounded-md hover:bg-gray-800 focus:outline-none" id="closeModal">
<i className="w-4 h-4 text-gray-400" data-lucide="x"></i>
</button>
<div className="p-6 flex flex-col gap-6">
<div className="flex items-center gap-2">
<i className="w-5 h-5 text-pink-500" data-lucide="gift"></i>
<h2 className="text-lg font-semibold tracking-tight" id="shareTitle">Share & Earn</h2>
</div>
<div className="text-center text-sm leading-relaxed">
<p className="mb-1">Friends get <span className="text-emerald-400 font-medium">20 % Off</span></p>
<p>You earn <span className="text-amber-400 font-medium">100 MVR</span></p>
</div>
<div className="flex flex-col gap-3">
<label className="text-xs text-gray-400" htmlFor="refLink">Your referral link</label>
<div className="flex">
<input className="flex-1 bg-gray-800/60 border border-gray-700 rounded-l-md px-3 py-2 text-xs overflow-hidden text-ellipsis" id="refLink" readOnly type="text" value="https://meetusvr.com/ref/ZARA123KHALID" />
<button className="px-3 py-2 bg-gray-800 hover:bg-gray-700 rounded-r-md text-xs font-medium" id="copyLinkBtn">Copy</button>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 flex items-center justify-center gap-2 px-4 py-2 bg-emerald-600 hover:bg-emerald-500 rounded-md text-sm font-medium" id="nativeShareBtn">
<i className="w-4 h-4" data-lucide="share"></i> Share Now
          </button>
<button className="flex-1 px-4 py-2 bg-gray-800 hover:bg-gray-700 rounded-md text-sm font-medium" id="doneBtn">
            Done
          </button>
</div>
</div>
</div>
</div>



    </>
  );
}
