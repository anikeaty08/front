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
      
    lucide.createIcons({ strokeWidth: 1.5 });

    // Mock Data
    const sampleAccounts = [
      { id: 1, username: 'skywalker',   fullName: 'Luke Skywalker',   avatar: 'https://source.unsplash.com/random/96x96?face,1' },
      { id: 2, username: 'leia_organa', fullName: 'Leia Organa',      avatar: 'https://source.unsplash.com/random/96x96?face,2' },
      { id: 3, username: 'han_solo',    fullName: 'Han Solo',         avatar: 'https://source.unsplash.com/random/96x96?face,3' },
      { id: 4, username: 'darth.vader', fullName: 'Anakin Skywalker', avatar: 'https://source.unsplash.com/random/96x96?face,4' },
      { id: 5, username: 'chewie',      fullName: 'Chewbacca',        avatar: 'https://source.unsplash.com/random/96x96?face,5' },
    ];

    const sampleProfile = {
      bio: 'Rebel leader, Jedi Knight, galaxy wanderer ✨',
      videos: [
        'https://cdn.coverr.co/videos/coverr-a-man-walking-in-the-forest-6782/1080p.mp4',
        'https://cdn.coverr.co/videos/coverr-cherry-blossoms-in-the-wind-7693/1080p.mp4',
        'https://cdn.coverr.co/videos/coverr-construction-sawing-8744/1080p.mp4'
      ]
    };

    const cardStack   = document.getElementById('cardStack');
    const logList     = document.getElementById('logList');
    const emptyState  = document.getElementById('emptyState');
    const profileInfo = document.getElementById('profileInfo');
    const bioText     = document.getElementById('bioText');
    const videoGrid   = document.getElementById('videoGrid');

    // Render cards
    function renderCards(accounts) {
      cardStack.innerHTML = '';
      accounts.slice().reverse().forEach((acc, idx) => {
        const card = document.createElement('div');
        card.className = `
          absolute w-72 max-w-full bg-neutral-900 border border-neutral-800/80 rounded-xl shadow-xl
          p-6 flex flex-col items-center gap-4 select-none cursor-grab will-change-transform
          origin-center transition-transform duration-200
        `;
        card.style.zIndex = idx;
        card.dataset.id = acc.id;

        card.innerHTML = `
          <img class="w-20 h-20 rounded-full object-cover" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&q=80" alt="${acc.username}" />
          <div class="text-center">
            <p class="text-lg font-medium tracking-tight">${acc.fullName}</p>
            <p class="text-neutral-400">@${acc.username}</p>
          </div>
          <div class="flex gap-4 opacity-0 pointer-events-none">
            <span id="keep-${acc.id}" class="text-green-400 font-medium">Keep</span>
            <span id="unfollow-${acc.id}" class="text-red-400 font-medium">Unfollow</span>
          </div>
        `;
        cardStack.appendChild(card);
        addSwipeHandlers(card, acc);
      });
    }

    // Swipe logic
    function addSwipeHandlers(card, acc) {
      let startX = 0, currentX = 0, dragging = false;
      const keepLabel = card.querySelector(`#keep-${acc.id}`);
      const unfLabel  = card.querySelector(`#unfollow-${acc.id}`);

      function onPointerDown(e) {
        dragging = true;
        startX = e.clientX || e.touches[0].clientX;
        card.setPointerCapture(e.pointerId);
      }
      function onPointerMove(e) {
        if (!dragging) return;
        currentX = (e.clientX || e.touches[0].clientX) - startX;
        const rotate = currentX / 20;
        card.style.transform = `translateX(${currentX}px) rotate(${rotate}deg)`;
        card.querySelector('div.flex').style.opacity = Math.min(Math.abs(currentX) / 80, 1);
        if (currentX > 0) {
          keepLabel.classList.remove('opacity-0');
          unfLabel.classList.add('opacity-0');
        } else {
          unfLabel.classList.remove('opacity-0');
          keepLabel.classList.add('opacity-0');
        }
      }
      function onPointerUp() {
        if (!dragging) return;
        dragging = false;
        const threshold = 120;
        if (Math.abs(currentX) > threshold) {
          const keep = currentX > 0;
          finalizeSwipe(card, keep, acc);
        } else {
          card.style.transition = 'transform 0.2s';
          card.style.transform = '';
          card.querySelector('div.flex').style.opacity = 0;
          setTimeout(() => (card.style.transition = ''), 200);
        }
      }
      card.addEventListener('pointerdown', onPointerDown);
      card.addEventListener('pointermove', onPointerMove);
      card.addEventListener('pointerup', onPointerUp);
      card.addEventListener('pointercancel', onPointerUp);
    }

    // Handle removal + log
    function finalizeSwipe(card, keep, acc) {
      card.style.transition = 'transform 0.3s, opacity 0.3s';
      card.style.opacity = 0;
      card.style.transform = `translateX(${keep ? 400 : -400}px) rotate(${keep ? 25 : -25}deg)`;
      setTimeout(() => {
        card.remove();
        logAction(keep, acc);
        if (!cardStack.children.length) emptyState.classList.remove('hidden');
      }, 300);
    }
    function logAction(keep, acc) {
      const li = document.createElement('li');
      li.innerHTML = `
        <span class="${keep ? 'text-green-400' : 'text-red-400'} font-medium">
          ${keep ? 'Kept' : 'Unfollowed'}
        </span>
        <span class="text-neutral-300">@${acc.username}</span>
      `;
      logList.prepend(li);
    }

    // Populate profile section
    function renderProfile(profile) {
      bioText.textContent = profile.bio;
      videoGrid.innerHTML = '';
      profile.videos.slice(0, 3).forEach(src => {
        const vid = document.createElement('video');
        vid.src = src;
        vid.muted = true;
        vid.loop = true;
        vid.playsInline = true;
        vid.autoplay = true;
        vid.className = 'w-full aspect-square object-cover rounded-lg';
        videoGrid.appendChild(vid);
      });
      profileInfo.classList.remove('hidden');
    }

    // Instagram connect button
    document.getElementById('connectInstagramBtn').addEventListener('click', () => {
      renderCards(sampleAccounts);
      renderProfile(sampleProfile);
      emptyState.classList.add('hidden');
      const btn = document.getElementById('connectInstagramBtn');
      btn.innerHTML = '<svg data-lucide="check" class="w-5 h-5 stroke-current"></svg>';
      lucide.createIcons({ strokeWidth: 1.5 });
      btn.classList.add('pointer-events-none');
    });

    // TikTok connect button (placeholder)
    document.getElementById('connectTikTokBtn').addEventListener('click', () => {
      const btn = document.getElementById('connectTikTokBtn');
      btn.innerHTML = '<svg data-lucide="check" class="w-5 h-5 stroke-current"></svg>';
      lucide.createIcons({ strokeWidth: 1.5 });
      btn.classList.add('pointer-events-none');
    });

    // Intro fade-in
    addEventListener('DOMContentLoaded', () => {
      setTimeout(() => {
        document.querySelectorAll('header, #profileInfo, main, section').forEach((el, i) => {
          el.style.opacity = 0;
          el.style.transform = 'translateY(12px)';
          setTimeout(() => {
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            el.style.opacity = 1;
            el.style.transform = '';
          }, 100 + i * 100);
        });
      }, 50);
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
      

<header className="w-full max-w-xl px-6 pt-8 pb-6 flex items-center justify-between">
<h1 className="text-2xl lg:text-3xl font-semibold tracking-tight">Social-Cleaner</h1>

<div className="flex items-center gap-3">
<button className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800/60 hover:bg-neutral-700/60 active:bg-neutral-600/60 outline outline-1 outline-neutral-700 transition" id="connectInstagramBtn">
<svg className="w-5 h-5 stroke-current" data-lucide="instagram"></svg>
</button>
<button className="flex items-center justify-center w-10 h-10 rounded-md bg-neutral-800/60 hover:bg-neutral-700/60 active:bg-neutral-600/60 outline outline-1 outline-neutral-700 transition" id="connectTikTokBtn">

<svg className="w-5 h-5 stroke-current" data-lucide="music"></svg>
</button>
</div>
</header>

<section className="w-full max-w-xl px-6 pb-6 hidden" id="profileInfo">
<h2 className="text-base font-semibold tracking-tight mb-1">Bio</h2>
<p className="text-neutral-400 mb-4" id="bioText"></p>
<h2 className="text-base font-semibold tracking-tight mb-2">Latest Videos</h2>
<div className="grid grid-cols-3 gap-2" id="videoGrid"></div>
</section>

<div className="w-full max-w-xl border-t border-neutral-800/80"></div>

<main className="relative w-full max-w-xl flex-1 flex items-center justify-center p-6 overflow-hidden" id="cardStack">

</main>

<p className="mt-6 text-neutral-400 hidden" id="emptyState">All caught up 🎉</p>

<section className="w-full max-w-xl px-6 pb-8">
<h2 className="text-base font-semibold mb-2 tracking-tight">Activity</h2>
<ul className="space-y-2 text-sm text-neutral-400" id="logList"></ul>
</section>



    </>
  );
}
