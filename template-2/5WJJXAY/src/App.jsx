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
      
    (function() {
      const currentImg = document.getElementById('gallery-current');
      const count = document.getElementById('aura-gallery-count');
      const thumbsWrap = document.getElementById('aura-gallery-thumbs');
      const openBtn = document.getElementById('aura-gallery-open');

      const modal = document.getElementById('aura-gallery-modal');
      const modalImg = document.getElementById('aura-gallery-modal-img');
      const modalCount = document.getElementById('aura-gallery-modal-count');
      const closeBtn = document.getElementById('aura-gallery-close');
      const prevBtn = document.getElementById('aura-gallery-prev');
      const nextBtn = document.getElementById('aura-gallery-next');

      const thumbImgs = Array.from(thumbsWrap.querySelectorAll('img[data-full]'));
      const images = thumbImgs
        .sort((a,b) => Number(a.dataset.index) - Number(b.dataset.index))
        .map(img => img.getAttribute('data-full'));
      let index = 0;

      function updateActiveThumb() {
        thumbsWrap.querySelectorAll('button').forEach((btn, i) => {
          btn.classList.toggle('ring-2', i === index);
          btn.classList.toggle('ring-white/80', i === index);
          btn.classList.toggle('ring-1', i !== index);
          btn.classList.toggle('ring-white/10', i !== index);
          btn.setAttribute('aria-current', i === index ? 'true' : 'false');
        });
      }

      function setCurrent(newIndex) {
        index = (newIndex + images.length) % images.length;
        currentImg.src = images[index];
        currentImg.alt = `Photo ${index + 1}`;
        count.textContent = `${index + 1} / ${images.length}`;
        updateActiveThumb();
      }

      function openModal() {
        modal.classList.remove('hidden');
        modalImg.src = images[index];
        modalImg.alt = `Photo ${index + 1} fullscreen`;
        modalCount.textContent = `${index + 1} / ${images.length}`;
        document.body.style.overflow = 'hidden';
      }
      function closeModal() {
        modal.classList.add('hidden');
        document.body.style.overflow = '';
      }
      function next() {
        setCurrent(index + 1);
        if (!modal.classList.contains('hidden')) {
          modalImg.src = images[index];
          modalCount.textContent = `${index + 1} / ${images.length}`;
        }
      }
      function prev() {
        setCurrent(index - 1);
        if (!modal.classList.contains('hidden')) {
          modalImg.src = images[index];
          modalCount.textContent = `${index + 1} / ${images.length}`;
        }
      }

      // Init from current
      setCurrent(0);

      // Thumb click
      thumbImgs.forEach(img => {
        img.parentElement.addEventListener('click', () => {
          const i = Number(img.dataset.index);
          setCurrent(i);
        });
      });

      // Open fullscreen on button or image click
      openBtn.addEventListener('click', openModal);
      currentImg.addEventListener('click', openModal);

      // Modal controls
      closeBtn.addEventListener('click', closeModal);
      nextBtn.addEventListener('click', next);
      prevBtn.addEventListener('click', prev);

      // Keyboard in modal
      document.addEventListener('keydown', (e) => {
        if (modal.classList.contains('hidden')) return;
        if (e.key === 'Escape') closeModal();
        if (e.key === 'ArrowRight') next();
        if (e.key === 'ArrowLeft') prev();
      });

      // Close when clicking backdrop
      modal.addEventListener('click', (e) => {
        if (e.target === modal) closeModal();
      });
    })();
  


    document.addEventListener("DOMContentLoaded", () => {
      lucide.createIcons();

      // Toggle hearts in explore grid
      document.querySelectorAll(".like-toggle").forEach(btn => {
        btn.addEventListener("click", () => {
          const icon = btn.querySelector("i");
          const active = btn.classList.toggle("bg-red-500");
          if (active) {
            btn.classList.remove("bg-white","text-neutral-900","bg-white/95");
            icon?.classList.add("text-white");
          } else {
            btn.classList.add("bg-white/95","text-neutral-900");
            icon?.classList.remove("text-white");
          }
        });
      });

      // Bookmark toggle
      document.querySelectorAll(".bookmark-btn").forEach(btn => {
        btn.addEventListener("click", () => {
          btn.classList.toggle("bg-amber-400");
          btn.classList.toggle("text-neutral-900");
        });
      });

      // Filter pill removal
      document.querySelectorAll(".filter-pill .remove-pill").forEach(x => {
        x.addEventListener("click", (e) => {
          e.currentTarget.closest(".filter-pill").remove();
        });
      });

      // Simple swipe actions (mock)
      const like = document.querySelector(".like-btn");
      const dislike = document.querySelector(".dislike-btn");
      const superlike = document.querySelector(".superlike-btn");
      [like, dislike, superlike].forEach(btn => {
        btn?.addEventListener("click", () => {
          const phone = btn.closest(".relative.h-\\[854px\\]");
          const cardWrap = phone?.querySelector(".mt-5.mr-5.ml-5");
          if (!cardWrap) return;
          cardWrap.animate(
            [{ transform: "translateX(0)", opacity: 1 },
             { transform: "translateX(-6px)", opacity: 0.98 },
             { transform: "translateX(0)", opacity: 1 }],
            { duration: 300, easing: "ease-out" }
          );
        });
      });
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
      
<div className="fixed top-0 w-full h-screen bg-center -z-10 bg-cover" style={{backgroundImage: `url('https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b9f39422-aaf1-42f2-9440-78dfbd3869c7_3840w.jpg')`}}></div>
<div className="max-w-7xl flex min-h-screen mr-auto ml-auto pt-8 pr-6 pb-8 pl-6 items-center">
<div className="grid gap-8 lg:grid-cols-3 w-full">

<div className="relative mr-auto ml-auto">
</div>

<div className="relative mr-auto ml-auto">
<div className="relative h-[854px] w-[393px] overflow-hidden shadow-[0_25px_80px_-15px_rgba(0,0,0,0.8)] bg-neutral-900 drop-shadow-2xl" style={{borderRadius: `47px`}}>

<div className="absolute left-0 right-0 top-0 z-50 flex h-12 pt-2 pr-8 pl-8 items-center justify-between">
<div className="status-bar-time text-[17px] font-semibold font-sans text-white">9:41</div>
<div className="flex items-center gap-1">
<div className="flex items-center gap-0.5">
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white"></div>
<div className="h-1 w-1 rounded-full bg-white/40"></div>
</div>
<div className="ml-2 h-3 w-6 rounded-sm border border-white bg-white">
<div className="h-full w-4/5 rounded-sm bg-green-500"></div>
</div>
</div>
</div>


<div className="mt-14 mr-5 ml-5 pt-2 pr-2 pb-2 pl-2">
<div className="relative h-[520px] overflow-hidden sf-rounded">
<img alt="Photo 1" className="absolute inset-0 h-full w-full object-cover" id="gallery-current" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" />
<div className="absolute inset-0 bg-[url(/assets/ee1fe383-974f-460a-8bee-c6d7d036d439_1600w.jpg)] bg-cover pt-2 pb-2"></div>

<div className="absolute right-4 top-4 flex items-center gap-2">
<button className="bookmark-btn p-3 backdrop-blur-xl sf-pill transition-colors bg-black/40 hover:bg-black/60">
<svg className="lucide lucide-bookmark h-5 w-5 text-white/90" data-lucide="bookmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m19 21-7-4-7 4V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16z"></path></svg>
</button>
</div>

<div className="absolute inset-x-0 bottom-0 pt-8 pr-6 pb-8 pl-6">
<div className="flex items-end justify-between">
<div className="">
<div className="flex items-center gap-2">
<h3 className="text-[26px] tracking-tight font-sans font-semibold">Maya, 24</h3>
<svg className="lucide lucide-badge-check h-5 w-5 text-blue-400" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="mt-1 flex items-center gap-2 text-[15px] text-white/85">
<span className="h-2 w-2 rounded-full bg-green-400"></span>
<span className="font-sans">online now</span>
</div>
</div>
<div className="px-3 py-1.5 text-[13px] font-medium backdrop-blur sf-pill font-sans bg-black/40 text-white/80">2.1 mi</div>
</div>
</div>


<div className="absolute top-4 left-4 px-2.5 py-1 text-[13px] font-medium sf-pill bg-black/40 backdrop-blur text-white/90">1 / 6</div>
</div>

<div className="mt-3 overflow-x-auto">
<div className="flex gap-2 pr-2">
<button aria-current="true" className="relative h-14 w-20 overflow-hidden rounded-sm ring-0 ring-white/80">
<img alt="Photo 1" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" data-index="0" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/b69317f2-ba0a-457c-91ff-24431c9162bb_320w.jpg" />
</button>
<button aria-current="false" className="relative h-14 w-20 overflow-hidden rounded-sm ring-0 ring-white/10">
<img alt="Photo 2" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&q=80" data-index="1" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/f45d0d38-734a-45d6-9529-9a3ee7531761_320w.jpg" />
</button>
<button aria-current="false" className="relative h-14 w-20 overflow-hidden rounded-sm ring-0 ring-white/10">
<img alt="Photo 3" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=2160&q=80" data-index="2" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/337139c7-09ab-4af3-8278-12af3cabe189_320w.jpg" />
</button>
<button aria-current="false" className="relative h-14 w-20 overflow-hidden rounded-sm ring-0 ring-white/10">
<img alt="Photo 4" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1515378791036-0648a3ef77b2?w=2160&q=80" data-index="3" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/a4097e4c-d233-40b6-a22b-b1772df5895d_320w.jpg" />
</button>
<button aria-current="false" className="relative h-14 w-20 overflow-hidden rounded-sm ring-0 ring-white/10">
<img alt="Photo 5" className="h-full w-full object-cover" data-full="https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=2160&q=80" data-index="4" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/23dd0807-794e-46bb-be7d-db3ea2a37bb9_320w.jpg" />
</button>
</div>
</div>

<div className="-mt-6 flex w-full mr-auto ml-auto items-center justify-center">
</div>

<div className="fixed inset-0 z-50 hidden">
<div className="absolute inset-0 bg-black/90"></div>
<div className="absolute inset-0 flex items-center justify-center px-4">
<img alt="Fullscreen photo" className="max-h-[85vh] max-w-[92vw] object-contain rounded-3xl" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&q=80" />
</div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 px-3 py-1.5 text-[13px] font-medium sf-pill bg-white/10 text-white backdrop-blur">1 / 6</div>
<button className="absolute right-4 top-4 p-3 sf-pill bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
<svg className="lucide lucide-x h-5 w-5 text-white/90" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="absolute left-4 top-1/2 -translate-y-1/2 p-3 sf-pill bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
<svg className="lucide lucide-chevron-left h-6 w-6 text-white/90" data-lucide="chevron-left" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="absolute right-4 top-1/2 -translate-y-1/2 p-3 sf-pill bg-white/10 hover:bg-white/15 backdrop-blur transition-colors">
<svg className="lucide lucide-chevron-right h-6 w-6 text-white/90" data-lucide="chevron-right" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

</div>

<div className="absolute inset-x-0 bottom-8">
<nav className="absolute inset-x-0 bottom-0 z-50 transition duration-500 ease-out opacity-100 translate-y-0 blur-none" style={{}}>
<div className="relative ring-1 ring-white/10 bg-white/5 rounded-3xl mt-0 mr-4 mb-0 ml-4 pt-3 pr-4 pb-3 pl-4 backdrop-blur">
<div className="flex items-center justify-between text-[11px] text-slate-300">
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="discover">
<svg className="lucide lucide-compass h-5 w-5" data-lucide="compass" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16.24 7.76-1.804 5.411a2 2 0 0 1-1.265 1.265L7.76 16.24l1.804-5.411a2 2 0 0 1 1.265-1.265z"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span>Discover</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="matches">
<svg className="lucide lucide-stars h-5 w-5" data-lucide="stars" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span>Matches</span>
</button>
<div className="relative -mt-10 w-1/5">
<button className="mx-auto flex h-14 w-14 items-center justify-center rounded-full bg-gradient-to-b from-[#CBA35A] to-[#9E7F3F] text-black/90 shadow-[0_10px_30px_rgba(203,163,90,0.35)] ring-2 ring-white/10 hover:ring-[#E3CDA0]/40 transition active:scale-95 text-slate-300" data-nav="connect">
<svg className="lucide lucide-sparkle h-6 w-6" data-lucide="sparkle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path></svg>
</button>
<div className="text-[11px] font-medium text-slate-200 text-center mt-1">Connect</div>
</div>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-slate-300" data-nav="messages">
<svg className="lucide lucide-message-square h-5 w-5" data-lucide="message-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 17a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 21.286V5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2z"></path></svg>
<span className="">Messages</span>
</button>
<button className="flex w-1/5 flex-col items-center gap-1 hover:text-slate-100 transition active:scale-95 text-white" data-nav="profile">
<svg className="lucide lucide-user h-5 w-5" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="">Profile</span>
</button>
</div>
</div>
</nav>
</div>

<div className="absolute bottom-2 left-1/2 h-1 w-32 -translate-x-1/2 sf-pill bg-white/40"></div>
</div>
</div>

<div className="relative mx-auto">
</div>
</div>
</div>


    </>
  );
}
