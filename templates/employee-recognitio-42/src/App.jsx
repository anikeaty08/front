import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      // Initialize icons with 1.5 stroke width
      document.addEventListener('DOMContentLoaded', () => {
        if (window.lucide) {
          window.lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
        }
      });

      // Accessibility: prefer-reduced-motion check
      const prefersReduced = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

      // Lightbox logic
      const grid = document.getElementById('galleryGrid');
      const lb = document.getElementById('lightbox');
      const lbMedia = document.getElementById('lbMedia');
      const lbCaption = document.getElementById('lbCaption');
      const lbDate = document.getElementById('lbDate');
      const lbLocation = document.getElementById('lbLocation');
      const lbPhotographer = document.getElementById('lbPhotographer');
      const lbDescription = document.getElementById('lbDescription');
      const lbClose = document.getElementById('lbClose');

      const openLightbox = (item) => {
        const type = item.dataset.type;
        const src = item.dataset.src;
        lbCaption.textContent = item.dataset.caption || '';
        lbDate.textContent = item.dataset.date || '';
        lbLocation.textContent = item.dataset.location || '—';
        lbPhotographer.textContent = item.dataset.photographer || '—';
        lbDescription.textContent = item.dataset.description || '';
        lbMedia.innerHTML = '';
        if (type === 'video') {
          const v = document.createElement('video');
          v.src = src;
          v.controls = true;
          v.playsInline = true;
          v.className = 'w-full h-auto';
          lbMedia.appendChild(v);
        } else {
          const img = document.createElement('img');
          img.src = src;
          img.alt = lbCaption.textContent;
          img.className = 'w-full h-auto';
          lbMedia.appendChild(img);
        }
        lb.classList.remove('hidden');
        setTimeout(() => {
          lb.classList.add('flex');
        }, 0);
      };

      grid.addEventListener('click', (e) => {
        const btn = e.target.closest('button[data-type]');
        if (!btn) return;
        openLightbox(btn);
      });
      lbClose.addEventListener('click', () => {
        lb.classList.add('hidden');
        lb.classList.remove('flex');
        lbMedia.innerHTML = '';
      });
      lb.addEventListener('click', (e) => {
        if (e.target === lb) lbClose.click();
      });
      document.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && !lb.classList.contains('hidden')) lbClose.click();
      });

      // Gallery view toggle (grid only in this mobile UI, label feedback only)
      const toggleViewBtn = document.getElementById('toggleViewBtn');
      toggleViewBtn.addEventListener('click', () => {
        // Future carousel toggle could go here. For now, subtle feedback:
        showToast('Grid view is active');
      });

      // Count up stat when visible
      const statEl = document.getElementById('statRecognitions');
      const targetStat = 42;
      let statDone = false;
      const statObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting && !statDone) {
            statDone = true;
            const duration = 900;
            const start = performance.now();
            const tick = (now) => {
              const p = Math.min((now - start) / duration, 1);
              statEl.textContent = Math.floor(p * targetStat).toString();
              if (p < 1) requestAnimationFrame(tick);
              else statEl.textContent = String(targetStat);
            };
            requestAnimationFrame(tick);
          }
        });
      }, { threshold: 0.4 });
      statObserver.observe(statEl);

      // Guestbook composer
      const input = document.getElementById('gbInput');
      const postBtn = document.getElementById('postBtn');
      const charCount = document.getElementById('charCount');
      const comments = document.getElementById('comments');
      const anonToggle = document.getElementById('anonToggle');
      const emojis = document.querySelectorAll('.emoji-btn');

      input.addEventListener('input', () => {
        charCount.textContent = input.value.length;
        postBtn.disabled = input.value.trim().length === 0;
      });

      emojis.forEach((btn) => {
        btn.addEventListener('click', () => {
          input.value += (input.value.endsWith(' ') || input.value.length === 0 ? '' : ' ') + btn.dataset.emoji + ' ';
          input.dispatchEvent(new Event('input'));
          if (!prefersReduced) {
            btn.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.2)' }, { transform: 'scale(1)' }], { duration: 220, easing: 'ease-out' });
          }
        });
      });

      const timeAgo = (d) => {
        const diff = Math.floor((Date.now() - d.getTime()) / 1000);
        if (diff < 60) return 'just now';
        const m = Math.floor(diff / 60);
        if (m < 60) return `${m}m ago`;
        const h = Math.floor(m / 60);
        if (h < 24) return `${h}h ago`;
        const days = Math.floor(h / 24);
        return `${days}d ago`;
        };

      postBtn.addEventListener('click', () => {
        const text = input.value.trim();
        if (!text) return;
        const isGuest = anonToggle.checked;
        // Optimistic render
        const wrapper = document.createElement('div');
        wrapper.className = 'rounded-2xl border border-white/10 bg-white/5 p-3';
        wrapper.innerHTML = `
          <div class="flex items-center gap-2">
            <div class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
              <span class="text-[12px]">${isGuest ? 'G' : 'U'}</span>
            </div>
            <div class="text-[14px] font-medium">${isGuest ? 'Guest' : 'You'}</div>
            <div class="ml-auto text-[12px] text-white/60">just now</div>
          </div>
          <p class="mt-2 text-[15px] text-white/90"></p>
          <div class="mt-2 flex items-center gap-2">
            <button class="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="👏">
              👏 <span class="count">0</span>
            </button>
            <button class="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="🎉">
              🎉 <span class="count">0</span>
            </button>
            <button class="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="❤️">
              ❤️ <span class="count">0</span>
            </button>
          </div>
        `;
        wrapper.querySelector('p').textContent = text;
        comments.prepend(wrapper);
        bindReactions(wrapper);
        if (!prefersReduced) {
          wrapper.animate([{ transform: 'translateY(8px)', opacity: 0 }, { transform: 'translateY(0)', opacity: 1 }], { duration: 300, easing: 'cubic-bezier(0.22, 1, 0.36, 1)' });
        }
        input.value = '';
        input.dispatchEvent(new Event('input'));
        showToast('Posted! 🎉');
      });

      // Bind reactions (including existing)
      const bindReactions = (root = document) => {
        const rBtns = root.querySelectorAll('.react-btn');
        rBtns.forEach((b) => {
          b.addEventListener('click', () => {
            const span = b.querySelector('.count');
            const val = parseInt(span.textContent || '0', 10) + 1;
            span.textContent = String(val);
            if (!prefersReduced) {
              b.animate([{ transform: 'scale(1)' }, { transform: 'scale(1.06)' }, { transform: 'scale(1)' }], { duration: 220, easing: 'ease-out' });
            }
          }, { once: false });
        });
      };
      bindReactions();

      // Load more (simulated)
      document.getElementById('loadMore').addEventListener('click', (e) => {
        e.currentTarget.disabled = true;
        e.currentTarget.textContent = 'Loading...';
        setTimeout(() => {
          const more = document.createElement('div');
          more.className = 'rounded-2xl border border-white/10 bg-white/5 p-3';
          more.innerHTML = `
            <div class="flex items-center gap-2">
              <div class="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
                <span class="text-[12px]">A</span>
              </div>
              <div class="text-[14px] font-medium">Alex T</div>
              <div class="ml-auto text-[12px] text-white/60">${timeAgo(new Date())}</div>
            </div>
            <p class="mt-2 text-[15px] text-white/90">Incredible achievement, Arjun! Keep inspiring us 👏</p>
            <div class="mt-2 flex items-center gap-2">
              <button class="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="👏">
                👏 <span class="count">1</span>
              </button>
              <button class="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="🎉">
                🎉 <span class="count">0</span>
              </button>
            </div>
          `;
          comments.appendChild(more);
          bindReactions(more);
          e.currentTarget.textContent = 'Load more';
          e.currentTarget.disabled = false;
        }, 400);
      });

      // Share buttons
      const toast = document.getElementById('toast');
      const toastText = document.getElementById('toastText');
      function showToast(msg) {
        toastText.textContent = msg;
        toast.classList.remove('hidden');
        if (!prefersReduced) {
          toast.animate([{ transform: 'translate(-50%, 8px)', opacity: 0 }, { transform: 'translate(-50%, 0)', opacity: 1 }], { duration: 220, easing: 'ease-out' });
        }
        setTimeout(() => {
          if (!prefersReduced) {
            toast.animate([{ opacity: 1 }, { opacity: 0 }], { duration: 220, easing: 'ease-in' }).onfinish = () => {
              toast.classList.add('hidden');
            };
          } else {
            toast.classList.add('hidden');
          }
        }, 2200);
      }

      const pageUrl = window.location.href.split('#')[0];
      const shareTitle = 'Employee of the Month — August 2025';
      const shareDesc = 'Recognized for outstanding creativity and commitment.';
      const shareButtons = document.querySelectorAll('.share-btn');
      shareButtons.forEach((btn) => {
        btn.addEventListener('click', async () => {
          const net = btn.dataset.network;
          let url = '';
          if (net === 'linkedin') {
            url = `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(pageUrl)}`;
          } else if (net === 'whatsapp') {
            url = `https://wa.me/?text=${encodeURIComponent(shareTitle + ' — ' + pageUrl)}`;
          } else if (net === 'x') {
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(shareTitle)}&url=${encodeURIComponent(pageUrl)}`;
          } else if (net === 'facebook') {
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(pageUrl)}`;
          }
          if (navigator.share) {
            try {
              await navigator.share({ title: shareTitle, text: shareDesc, url: pageUrl });
              showToast('Shared successfully');
              return;
            } catch (e) {}
          }
          window.open(url, '_blank', 'noopener,noreferrer');
        });
      });

      document.getElementById('copyLink').addEventListener('click', async () => {
        try {
          await navigator.clipboard.writeText(pageUrl);
          showToast('Link copied to clipboard — share the celebration!');
        } catch {
          showToast('Copy failed. Please try again.');
        }
      });

      // Footer QR triggers share
      document.getElementById('qrShare').addEventListener('click', () => {
        document.getElementById('copyLink').click();
      });

      // Replace static dates with relative time on load
      document.querySelectorAll('[data-time]').forEach((el) => {
        const t = el.getAttribute('data-time');
        const d = new Date(t);
        if (!isNaN(d)) el.textContent = timeAgo(d);
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="mx-auto max-w-md">

<div className="pointer-events-none fixed inset-0 z-0 opacity-20">
<div className="absolute -left-6 top-20 h-24 w-24 rounded-full bg-[#B18C63]/20 blur-3xl"></div>
<div className="absolute right-2 top-40 h-20 w-20 rounded-full bg-[#F4E9E7]/10 blur-2xl"></div>
<div className="absolute bottom-24 left-8 h-28 w-28 rounded-full bg-[#4D2832]/40 blur-3xl"></div>
</div>

<header className="relative z-10" id="hero" role="banner">
<div className="px-5 pt-8 pb-6">

<div className="mb-3 flex items-center gap-2 text-[12px] text-white/70">
<div className="flex h-6 w-6 items-center justify-center rounded-md bg-white/5 ring-1 ring-white/10">
<span aria-label="Verified by AeroTag" className="text-[11px] tracking-tight font-medium">AT</span>
</div>
<div className="flex items-center gap-1.5">
<i className="h-[14px] w-[14px]" data-lucide="shield-check"></i>
<span className="font-medium">Verified by AeroTag Accolades</span>
</div>
</div>

<h1 className="text-[36px] leading-tight tracking-tight font-semibold text-white">
            Employee of the Month — August 2025
          </h1>
<div className="mt-1 text-[16px] text-white/70">
            Brand Experts Advertising LLC
          </div>
<div className="mt-4 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1.5">
<i className="h-[16px] w-[16px] text-[#B18C63]" data-lucide="sparkles"></i>
<span className="bg-clip-text text-transparent" style={{backgroundImage: 'linear-gradient(90deg, #F5C97B, #E1B866)'}}>
              Arjun Menon
            </span>
</div>
<p className="mt-3 text-[16px] text-white/80">
            Recognized for outstanding creativity and commitment.
          </p>

<div className="mt-6 rounded-2xl border border-white/10 bg-white/5 p-3 shadow-[0_6px_18px_rgba(29,21,24,0.08)]">
<div className="relative overflow-hidden rounded-xl">
<img alt="Award trophy image" aria-label="Award trophy image" className="h-56 w-full object-cover transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] hover:scale-[1.02]" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
<div className="absolute bottom-3 left-3 flex items-center gap-2 rounded-full border border-white/10 bg-black/30 px-2.5 py-1 backdrop-blur-sm">
<i className="h-[16px] w-[16px] text-[#F5C97B]" data-lucide="medal"></i>
<span className="text-[12px] font-medium text-white/90">Trophy Capsule</span>
</div>
</div>
</div>

<a className="mt-6 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-[16px] font-medium text-white transition-all duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] hover:translate-y-[-2px] hover:bg-white/15 hover:shadow-[0_6px_18px_rgba(29,21,24,0.18)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="#gallery">
<i className="h-[18px] w-[18px]" data-lucide="play-circle"></i>
            View the Memory Capsule
          </a>
</div>
</header>

<div className="mx-5 my-3 h-px bg-white/10"></div>

<section aria-label="Gallery" className="relative z-10 px-5 pb-6" id="gallery" role="region">
<div className="mb-3 flex items-center justify-between">
<h2 className="text-[28px] tracking-tight font-semibold">Gallery</h2>
<button aria-label="Toggle gallery view" className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-[14px] text-white/80 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="toggleViewBtn">
<i className="h-[16px] w-[16px]" data-lucide="grid"></i>
            Grid
          </button>
</div>
<div className="grid grid-cols-2 gap-3" id="galleryGrid">

<button aria-label="Gallery photo - opens larger view" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5" data-caption="Award Night" data-date="2025-08-23" data-description="Celebrating the achievement with colleagues." data-location="Dubai HQ" data-photographer="Studio Team" data-src="https://images.unsplash.com/photo-1561489413-b813c4f9e8d9?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" data-type="photo">
<div className="absolute left-0 top-0 z-10 rounded-br-md bg-[#B18C63] px-2 py-1 text-[11px] font-medium text-black">Pinned</div>
<img alt="Award Night" className="h-40 w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.035]" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 bg-[#4D2832]/0 transition-colors duration-300 group-hover:bg-[#4D2832]/30"></div>
<div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-2 text-[12px] text-white/80 backdrop-blur-[1.5px]">
<span>Aug 23, 2025</span>
<i className="h-[14px] w-[14px]" data-lucide="maximize"></i>
</div>
</button>

<button aria-label="Gallery photo - opens larger view" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5" data-caption="Team Celebration" data-date="2025-08-23" data-description="Cheers and high-fives all around." data-location="Creative Studio" data-photographer="N/A" data-src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80" data-type="photo">
<img alt="Team Celebration" className="h-40 w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.035]" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#4D2832]/0 transition-colors duration-300 group-hover:bg-[#4D2832]/30"></div>
<div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-2 text-[12px] text-white/80 backdrop-blur-[1.5px]">
<span>Aug 23, 2025</span>
<i className="h-[14px] w-[14px]" data-lucide="maximize"></i>
</div>
</button>

<button aria-label="Gallery video - opens larger view" className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5" data-caption="Handover Clip" data-date="2025-08-23" data-description="Short clip of the handover moment." data-location="Main Stage" data-photographer="Event Crew" data-src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" data-type="video">
<img alt="Handover Clip" className="h-40 w-full object-cover transition-transform duration-300 ease-[cubic-bezier(0.2,0.8,0.2,1)] group-hover:scale-[1.035]" src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="absolute inset-0 bg-[#4D2832]/0 transition-colors duration-300 group-hover:bg-[#4D2832]/30"></div>
<div className="absolute bottom-0 left-0 right-0 z-10 flex items-center justify-between p-2 text-[12px] text-white/80 backdrop-blur-[1.5px]">
<span>Aug 23, 2025</span>
<i className="h-[14px] w-[14px]" data-lucide="play"></i>
</div>
</button>
</div>
</section>

<div aria-label="Media viewer" aria-modal="true" className="fixed inset-0 z-50 hidden items-center justify-center bg-black/60 p-5 backdrop-blur-sm" id="lightbox" role="dialog">
<div className="w-full max-w-lg rounded-2xl border border-white/10 bg-[#1E1E1E] shadow-[0_20px_40px_rgba(29,21,24,0.18)]">
<div className="flex items-center justify-between px-4 py-3">
<div className="flex items-center gap-2 text-[14px] text-white/80">
<i className="h-[16px] w-[16px]" data-lucide="image"></i>
<span id="lbCaption">Caption</span>
</div>
<button aria-label="Close viewer" className="rounded-lg border border-white/10 bg-white/5 p-1.5 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="lbClose">
<i className="h-[18px] w-[18px]" data-lucide="x"></i>
</button>
</div>
<div className="relative">
<div className="px-4 pb-4">
<div className="overflow-hidden rounded-xl border border-white/10 bg-black/30" id="lbMedia">

</div>
<div className="mt-3 grid grid-cols-2 gap-3 text-[12px] text-white/70">
<div className="flex items-center gap-2"><i className="h-[14px] w-[14px]" data-lucide="calendar"></i><span id="lbDate">—</span></div>
<div className="flex items-center gap-2"><i className="h-[14px] w-[14px]" data-lucide="map-pin"></i><span id="lbLocation">—</span></div>
<div className="col-span-2 flex items-center gap-2"><i className="h-[14px] w-[14px]" data-lucide="camera"></i><span id="lbPhotographer">—</span></div>
<div className="col-span-2 text-white/80" id="lbDescription">—</div>
</div>
</div>
</div>
</div>
</div>

<div className="mx-5 my-6 h-px bg-white/10"></div>

<section className="px-5" id="awardee">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<img alt="Arjun Menon" className="h-14 w-14 rounded-full object-cover ring-2 ring-white/10" src="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?auto=format&amp;fit=crop&amp;w=600&amp;q=80"/>
<div>
<div className="text-[18px] font-semibold tracking-tight">Arjun Menon</div>
<div className="text-[14px] text-white/70">Senior Graphic Designer — Creative</div>
</div>
<div className="ml-auto">
<span className="inline-flex items-center gap-1 rounded-full border border-[#B18C63]/30 bg-[#B18C63]/10 px-2 py-1 text-[12px] text-[#F5C97B]">
<i className="h-[14px] w-[14px]" data-lucide="sparkles"></i> Innovation Champion
              </span>
</div>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-white/[0.04] p-3">
<i className="mb-2 h-[16px] w-[16px] text-white/50" data-lucide="quote"></i>
<p className="text-[16px] leading-snug text-white/90">
              “This recognition means a lot to me — it’s a reflection of our amazing team spirit.”
            </p>
</div>
<div className="mt-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-[14px] text-white/70">
<i className="h-[16px] w-[16px] text-[#C7C7C7]" data-lucide="feather"></i>
<span>Manager’s note</span>
</div>
<p className="mt-2 text-[15px] text-white/85">Arjun’s consistency and leadership have made a lasting impact.</p>
<div className="mt-2 text-right text-[14px] text-white/60 italic">— Maria Lopez</div>
</div>
</div>
</section>

<div className="mx-5 my-6 h-px bg-white/10"></div>

<section className="px-5" id="company">
<div className="rounded-2xl border border-white/10 bg-white/5 p-4">
<div className="flex items-center gap-3">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/5">
<span className="text-[14px] font-semibold tracking-tight">BE</span>
</div>
<div className="text-[16px] font-medium text-white/90">Brand Experts Advertising LLC</div>
</div>
<h3 className="mt-3 text-[20px] tracking-tight font-semibold text-white">Empowering Excellence. Celebrating Growth.</h3>
<p className="mt-1 text-[16px] text-white/80">
            At Brand Experts, we believe every milestone deserves a spotlight. AeroTag Accolades helps us preserve these proud moments forever.
          </p>
<div className="mt-4 grid grid-cols-3 gap-2">
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-[12px] text-white/85 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://company.example.com" rel="noopener" target="_blank">
<i className="h-[14px] w-[14px]" data-lucide="external-link"></i> Website
            </a>
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-[12px] text-white/85 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://company.example.com/careers" rel="noopener" target="_blank">
<i className="h-[14px] w-[14px]" data-lucide="briefcase"></i> Careers
            </a>
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/5 px-2.5 py-2 text-[12px] text-white/85 hover:bg-white/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://linkedin.com/company/example" rel="noopener" target="_blank">
<i className="h-[14px] w-[14px]" data-lucide="linkedin"></i> LinkedIn
            </a>
</div>
<div className="mt-4 flex items-center justify-between rounded-xl border border-white/10 bg-white/[0.03] p-3">
<div className="flex items-center gap-2 text-[14px] text-white/80">
<i className="h-[16px] w-[16px] text-[#F5C97B]" data-lucide="trophy"></i>
              Recognitions
            </div>
<div className="text-[22px] font-semibold tracking-tight text-white" id="statRecognitions">0</div>
</div>
</div>
</section>

<div className="mx-5 my-6 h-px bg-white/10"></div>

<section aria-label="Guestbook" className="px-5" id="guestbook" role="region">
<h2 className="text-[28px] tracking-tight font-semibold">Guestbook — Leave Your Congratulations!</h2>

<div className="mt-3 rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="flex items-start gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-full border border-white/10 bg-white/5">
<i className="h-[16px] w-[16px] text-white/70" data-lucide="user"></i>
</div>
<div className="flex-1">
<textarea aria-label="Write a congratulatory message" className="w-full resize-none rounded-lg border border-white/10 bg-black/30 p-2 text-[14px] text-white/90 placeholder-white/40 outline-none focus:ring-2 focus:ring-[#B18C63]/40" id="gbInput" maxlength="500" placeholder="Write your message here..." rows="3"></textarea>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-1">
<button aria-label="Add emoji clap" className="emoji-btn rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[14px] hover:bg-white/10" data-emoji="👏">👏</button>
<button aria-label="Add emoji party" className="emoji-btn rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[14px] hover:bg-white/10" data-emoji="🎉">🎉</button>
<button aria-label="Add emoji heart" className="emoji-btn rounded-md border border-white/10 bg-white/5 px-2 py-1 text-[14px] hover:bg-white/10" data-emoji="❤️">❤️</button>
</div>
<div className="text-[12px] text-white/60"><span id="charCount">0</span>/500</div>
</div>
<div className="mt-3 flex items-center justify-between">

<label className="group inline-flex cursor-pointer select-none items-center gap-2">
<span className="relative inline-flex h-5 w-5 items-center justify-center rounded-md border border-white/15 bg-white/5 transition-colors group-hover:border-white/25">
<input className="peer absolute inset-0 cursor-pointer opacity-0" id="anonToggle" type="checkbox"/>
<i className="h-[14px] w-[14px] text-white/0 transition-opacity duration-200 peer-checked:text-white" data-lucide="check"></i>
</span>
<span className="text-[13px] text-white/75">Post as guest</span>
</label>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/10 px-3 py-2 text-[14px] font-medium text-white/90 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 disabled:cursor-not-allowed disabled:opacity-50" disabled="" id="postBtn">
<i className="h-[16px] w-[16px]" data-lucide="send"></i>
                  Post
                </button>
</div>
</div>
</div>
</div>

<div className="mt-4 space-y-3" id="comments">

<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 bg-white/5">
<span className="text-[12px]">S</span>
</div>
<div className="text-[14px] font-medium">Sana R</div>
<div className="ml-auto text-[12px] text-white/60" data-time="2025-08-24T10:32:00Z">Aug 24</div>
</div>
<p className="mt-2 text-[15px] text-white/90">Huge congrats Arjun! Well deserved 🙌</p>
<div className="mt-2 flex items-center gap-2">
<button className="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="👏">
                👏 <span className="count">5</span>
</button>
<button className="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="🎉">
                🎉 <span className="count">2</span>
</button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/5 p-3">
<div className="flex items-center gap-2">
<img alt="Rahul P" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1527980965255-d3b416303d12?auto=format&amp;fit=crop&amp;w=200&amp;q=60"/>
<div className="text-[14px] font-medium">Rahul P</div>
<div className="ml-auto text-[12px] text-white/60" data-time="2025-08-24T09:12:00Z">Aug 24</div>
</div>
<p className="mt-2 text-[15px] text-white/90">Great work — your attention to detail is unmatched.</p>
<div className="mt-2 flex items-center gap-2">
<button className="react-btn inline-flex items-center gap-1 rounded-lg border border-white/10 bg-white/5 px-2 py-1 text-[12px] text-white/80 hover:bg-white/10" data-emoji="👏">
                👏 <span className="count">3</span>
</button>
</div>
</div>
</div>
<button className="mt-3 w-full rounded-xl border border-white/10 bg-white/5 px-4 py-2 text-[14px] text-white/80 hover:bg-white/10" id="loadMore">
          Load more
        </button>
</section>

<div className="mx-5 my-6 h-px bg-white/10"></div>

<section className="px-5 pb-8" id="share">
<h2 className="text-[20px] tracking-tight font-semibold">Share this recognition</h2>
<div className="mt-3 grid grid-cols-4 gap-2">
<button aria-label="Share on LinkedIn" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-[12px] text-white/80 hover:bg-white/10" data-network="linkedin">
<i className="h-[18px] w-[18px]" data-lucide="linkedin"></i> LinkdIn
          </button>
<button aria-label="Share on WhatsApp" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-[12px] text-white/80 hover:bg-white/10" data-network="whatsapp">
<i className="h-[18px] w-[18px]" data-lucide="message-circle"></i> WhatsApp
          </button>
<button aria-label="Share on X" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-[12px] text-white/80 hover:bg-white/10" data-network="x">
<i className="h-[18px] w-[18px]" data-lucide="twitter"></i> X
          </button>
<button aria-label="Share on Facebook" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/5 px-2 py-3 text-[12px] text-white/80 hover:bg-white/10" data-network="facebook">
<i className="h-[18px] w-[18px]" data-lucide="facebook"></i> Facebook
          </button>
</div>
<button aria-label="Copy link to clipboard" className="mt-3 inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/10 px-4 py-3 text-[14px] text-white hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="copyLink">
<i className="h-[18px] w-[18px]" data-lucide="link-2"></i>
          Copy link
        </button>
</section>

<footer className="relative" id="footer" role="contentinfo">
<div className="mx-5 mb-8 rounded-2xl border border-white/10 bg-[#4D2832] p-4 text-[#FFF9F7]">
<div className="flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="flex h-9 w-9 items-center justify-center rounded-md bg-black/20">
<span className="text-[12px] font-semibold tracking-tight">AT</span>
</div>
<div>
<div className="text-[14px] font-medium">AeroTag Accolades</div>
<div className="text-[12px] text-[#FFF9F7]/80">Where recognition becomes a legacy.</div>
</div>
</div>
<button aria-label="Open share options" className="rounded-lg border border-white/20 bg-white/10 p-2 hover:bg-white/15 focus:outline-none focus-visible:ring-2 focus-visible:ring-white/40" id="qrShare">
<i className="h-[18px] w-[18px]" data-lucide="qr-code"></i>
</button>
</div>
<div className="mt-3 flex flex-wrap gap-2">
<a className="text-[12px] text-[#FFF9F7]/80 underline-offset-2 hover:underline" href="https://aerotag.example.com/about">About AeroTag</a>
<span className="text-[#FFF9F7]/30">•</span>
<a className="text-[12px] text-[#FFF9F7]/80 underline-offset-2 hover:underline" href="https://aerotag.example.com/accolades">Explore Accolades</a>
<span className="text-[#FFF9F7]/30">•</span>
<a className="text-[12px] text-[#FFF9F7]/80 underline-offset-2 hover:underline" href="https://aerotag.example.com/create">Create Your Own Trophy</a>
</div>
</div>
</footer>
</div>

<div className="pointer-events-none fixed bottom-4 left-1/2 z-[60] hidden -translate-x-1/2 rounded-full border border-white/10 bg-[#4D2832] px-3 py-2 text-[14px] text-white/90 shadow-[0_6px_18px_rgba(29,21,24,0.18)]" id="toast">
<div className="flex items-center gap-2">
<i className="h-[16px] w-[16px] text-[#B18C63]" data-lucide="check-circle"></i>
<span id="toastText">Link copied to clipboard — share the celebration!</span>
</div>
</div>


    </>
  );
}
