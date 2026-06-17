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



      ;(() => {
        const prefersReduced = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches
        const dur = (ms) => prefersReduced ? 0 : ms

        // Icons
        document.addEventListener('DOMContentLoaded', () => {
          lucide.createIcons({ attrs: { 'stroke-width': 1.5 } })
        })

        // Smooth scroll to gallery
        const cta = document.getElementById('cta-view')
        if (cta) {
          cta.addEventListener('click', (e) => {
            e.preventDefault()
            const target = document.getElementById('gallery')
            if (target) target.scrollIntoView({ behavior: 'smooth', block: 'start' })
          })
        }

        // Count up stat
        const statEl = document.getElementById('stat-recognitions')
        const targetVal = 42
        if (statEl) {
          let start = null
          const duration = dur(900)
          const step = (t) => {
            if (!start) start = t
            const p = duration ? Math.min((t - start) / duration, 1) : 1
            const val = Math.floor(p * targetVal)
            statEl.textContent = val.toString()
            if (p < 1) requestAnimationFrame(step)
          }
          requestAnimationFrame(step)
        }

        // Lightbox
        const lb = document.getElementById('lightbox')
        const lbMedia = document.getElementById('lb-media')
        const lbCaption = document.getElementById('lb-caption')
        const lbDate = document.getElementById('lb-date')
        const lbLocation = document.getElementById('lb-location')
        const lbPhotographer = document.getElementById('lb-photographer')
        const lbDescription = document.getElementById('lb-description')
        const closeLb = () => {
          if (!lb) return
          lb.classList.add('hidden')
          lbMedia.innerHTML = ''
        }
        document.getElementById('lb-close')?.addEventListener('click', closeLb)
        lb?.addEventListener('click', (e) => {
          if (e.target === lb.firstElementChild) return // click on panel
          if (e.target === lb) closeLb()
        })
        document.addEventListener('keydown', (e) => { if (e.key === 'Escape') closeLb() })

        document.querySelectorAll('.gallery-item').forEach((btn) => {
          btn.addEventListener('click', () => {
            const type = btn.getAttribute('data-type')
            const url = btn.getAttribute('data-url')
            lbCaption.textContent = btn.getAttribute('data-caption') || ''
            lbDate.textContent = btn.getAttribute('data-date') || ''
            lbLocation.textContent = btn.getAttribute('data-location') || ''
            lbPhotographer.textContent = btn.getAttribute('data-photographer') || ''
            lbDescription.textContent = btn.getAttribute('data-description') || ''
            if (type === 'video') {
              const video = document.createElement('video')
              video.src = url
              video.controls = true
              video.playsInline = true
              video.className = 'w-full h-full'
              lbMedia.appendChild(video)
            } else {
              const img = document.createElement('img')
              img.src = url
              img.alt = lbCaption.textContent || 'Gallery item'
              img.className = 'w-full h-full object-contain bg-black'
              lbMedia.appendChild(img)
            }
            lb.classList.remove('hidden')
          })
        })

        // Guestbook form
        const form = document.getElementById('guestbook-form')
        const inputName = document.getElementById('guest-name')
        const inputMsg = document.getElementById('guest-message')
        const comments = document.getElementById('comments')
        const charCount = document.getElementById('char-count')
        const emojiToggle = document.getElementById('emoji-toggle')
        const emojiPopover = document.getElementById('emoji-popover')

        inputMsg?.addEventListener('input', () => {
          charCount.textContent = (inputMsg.value || '').length
        })

        emojiToggle?.addEventListener('click', () => {
          emojiPopover?.classList.toggle('hidden')
        })
        emojiPopover?.addEventListener('click', (e) => {
          const btn = e.target.closest('.emoji-btn')
          if (!btn) return
          inputMsg.value += btn.textContent
          inputMsg.dispatchEvent(new Event('input'))
          emojiPopover.classList.add('hidden')
          inputMsg.focus()
        })

        const makeAvatar = (name) => {
          const initials = (name || 'Guest').trim().split(' ').map(p => p[0]).slice(0,2).join('').toUpperCase()
          const wrapper = document.createElement('div')
          wrapper.className = 'h-8 w-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[12px] text-zinc-300'
          wrapper.textContent = initials || 'G'
          return wrapper
        }

        const createCommentEl = ({ name, message, time }) => {
          const card = document.createElement('div')
          card.className = 'rounded-2xl border border-white/10 bg-white/[0.02] p-3 translate-y-2 opacity-0 transition duration-300'
          card.innerHTML = `
            <div class="flex items-center gap-2">
              <div data-avatar></div>
              <div class="flex-1">
                <div class="flex items-center justify-between">
                  <p class="text-[13px] text-zinc-200">${name || 'Guest'}</p>
                  <span class="text-[11px] text-zinc-500">${time}</span>
                </div>
              </div>
            </div>
            <p class="mt-2 text-[14px] text-zinc-100">${message}</p>
            <div class="mt-2 flex items-center gap-2">
              <button class="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="👏"><span>👏</span><span class="count">0</span></button>
              <button class="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="🎉"><span>🎉</span><span class="count">0</span></button>
              <button class="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="❤️"><span>❤️</span><span class="count">0</span></button>
            </div>
          `
          const avatarHost = card.querySelector('[data-avatar]')
          avatarHost.replaceWith(makeAvatar(name))
          return card
        }

        form?.addEventListener('submit', (e) => {
          e.preventDefault()
          const name = inputName.value.trim()
          const message = inputMsg.value.trim()
          if (!message) return
          const time = new Date().toLocaleString([], { month: 'short', day: '2-digit', hour: '2-digit', minute: '2-digit' })
          const el = createCommentEl({ name, message, time })
          comments.prepend(el)
          // animate in
          requestAnimationFrame(() => {
            el.classList.remove('translate-y-2', 'opacity-0')
          })
          // reset
          inputMsg.value = ''
          inputMsg.dispatchEvent(new Event('input'))
        })

        // Reactions
        comments?.addEventListener('click', (e) => {
          const btn = e.target.closest('.react-btn')
          if (!btn) return
          const countEl = btn.querySelector('.count')
          const current = parseInt(countEl.textContent || '0', 10)
          countEl.textContent = String(current + 1)
          btn.classList.add('scale-95')
          setTimeout(() => btn.classList.remove('scale-95'), dur(220))
        })

        // Load more (demo)
        const loadMore = document.getElementById('load-more')
        loadMore?.addEventListener('click', () => {
          loadMore.disabled = true
          loadMore.textContent = 'Loading...'
          setTimeout(() => {
            // demo faux comment
            const el = createCommentEl({ name: 'Guest', message: 'Proud of you, Arjun! 🎖️', time: new Date().toLocaleString([], { month:'short', day:'2-digit', hour:'2-digit', minute:'2-digit' }) })
            comments.appendChild(el)
            requestAnimationFrame(() => el.classList.remove('translate-y-2','opacity-0'))
            loadMore.remove()
          }, dur(400))
        })

        // Share
        const toast = document.getElementById('toast')
        const toastText = document.getElementById('toast-text')
        let toastTimer = null
        const showToast = (text) => {
          toastText.textContent = text
          toast.classList.remove('hidden')
          clearTimeout(toastTimer)
          toastTimer = setTimeout(() => toast.classList.add('hidden'), dur(2200))
        }

        const openNetwork = (network) => {
          const url = encodeURIComponent(window.location.href)
          const text = encodeURIComponent('Employee of the Month — Arjun Menon')
          const shareUrls = {
            linkedin: `https://www.linkedin.com/sharing/share-offsite/?url=${url}`,
            whatsapp: `https://wa.me/?text=${text}%20${url}`,
            x: `https://twitter.com/intent/tweet?text=${text}&url=${url}`,
            facebook: `https://www.facebook.com/sharer/sharer.php?u=${url}`
          }
          window.open(shareUrls[network], '_blank', 'noopener,noreferrer')
          console.log('share_click', { network })
        }

        document.querySelectorAll('.share-btn').forEach((btn) => {
          btn.addEventListener('click', () => {
            const network = btn.getAttribute('data-network')
            if (navigator.share && (network === 'x' || network === 'whatsapp')) {
              navigator.share({ title: 'AeroTag Accolades', text: 'Celebrate this recognition', url: window.location.href }).catch(() => {})
            } else {
              openNetwork(network)
            }
          })
        })

        document.getElementById('copy-link')?.addEventListener('click', async () => {
          try {
            await navigator.clipboard.writeText(window.location.href)
            showToast('Link copied to clipboard — share the celebration!')
          } catch {
            showToast('Copy failed — try long-press to copy.')
          }
        })

        document.getElementById('qr-share')?.addEventListener('click', () => {
          showToast('Share options are above — pick a network or copy the link.')
          document.getElementById('share')?.scrollIntoView({ behavior: 'smooth' })
        })
      })()
    
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
      

<div className="pointer-events-none fixed inset-0 -z-10">
<div className="absolute inset-0" style={{background: 'radial-gradient(1200px 600px at 50% -10%, rgba(245, 201, 123, 0.08), transparent 60%), radial-gradient(800px 400px at 100% 20%, rgba(77, 40, 50, 0.25), transparent 55%), linear-gradient(180deg, #121017 0%, #0E0D11 100%)'}}></div>
<div aria-hidden="true" className="absolute inset-0 opacity-[0.07] mix-blend-overlay" style={{backgroundImage: 'radial-gradient(#ffffff 0.5px, transparent 0.5px)', backgroundSize: '18px 18px'}}></div>
</div>
<main className="mx-auto max-w-xl">

<section aria-label="AeroTag Accolades — Employee of the Month" className="relative px-4 pt-8 pb-6" id="hero" role="banner">
<div className="relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] shadow-[0_6px_18px_rgba(29,21,24,0.10)]">

<div className="absolute right-2 top-2 z-10">
<div className="group flex items-center gap-1.5 rounded-full border border-white/10 bg-black/30 px-2 py-1 backdrop-blur-sm">
<i className="h-3.5 w-3.5 text-[#B18C63]" data-lucide="shield-check"></i>
<span className="text-[11px] text-zinc-200/90">Verified</span>
<div className="pointer-events-none absolute -bottom-8 right-0 hidden rounded-md border border-white/10 bg-black/80 px-2 py-1 text-[11px] text-zinc-200 backdrop-blur-md group-hover:block">Verified by AeroTag Accolades</div>
</div>
</div>

<div className="p-4">
<p className="text-[12px] text-zinc-400">Employee of the Month — August 2025</p>
<h1 className="mt-1 font-semibold text-zinc-50 tracking-tight" style={{fontSize: '28px'}}>Arjun Menon</h1>
<p className="mt-1 text-[14px] text-zinc-300">Brand Experts Advertising LLC</p>
<p className="mt-2 text-[14px] text-zinc-300/90">Recognized for outstanding creativity and commitment.</p>
</div>

<div className="px-4">
<div className="relative">
<div className="absolute inset-0 rounded-2xl blur-2xl" style={{background: 'radial-gradient(200px 90px at 50% 15%, rgba(177,140,99,0.25), transparent 60%)'}}></div>
<img alt="Award trophy image" aria-label="Award trophy image" className="relative mx-auto aspect-[16/10] w-full rounded-xl object-cover ring-1 ring-white/10" loading="lazy" src="https://images.unsplash.com/photo-1547347298-4074fc3086f0?q=80&amp;w=1200&amp;auto=format&amp;fit=crop"/>

<div className="pointer-events-none absolute -top-2 right-3 flex gap-1 opacity-70">
<span className="h-1.5 w-1.5 rounded-full" style={{background: '#B18C63'}}></span>
<span className="h-1.5 w-1.5 rounded-full" style={{background: '#F4E9E7'}}></span>
<span className="h-1.5 w-1.5 rounded-full" style={{background: '#4D2832'}}></span>
</div>
</div>
</div>

<div className="p-4">
<button className="inline-flex w-full items-center justify-center gap-2 rounded-xl border border-white/10 bg-white/[0.03] px-4 py-3 text-[15px] font-medium text-zinc-100 transition-all duration-300 hover:-translate-y-0.5 hover:bg-white/[0.06] hover:shadow-[0_6px_18px_rgba(29,21,24,0.20)] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 active:translate-y-0.5" id="cta-view">
<i className="h-4.5 w-4.5 text-[#E1B866]" data-lucide="sparkles"></i>
              View the Memory Capsule
            </button>
</div>
</div>
</section>

<section aria-label="Memory Capsule gallery" className="px-4 pb-4" id="gallery" role="region">
<div className="mb-3 flex items-center justify-between">
<h2 className="font-semibold tracking-tight text-zinc-100" style={{fontSize: '20px'}}>Memory Capsule</h2>
<div className="flex items-center gap-1.5">
<span className="text-[12px] text-zinc-400">Grid</span>
<div className="h-1 w-1 rounded-full bg-zinc-600/60"></div>
<span className="text-[12px] text-zinc-600">Carousel</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Award Night" data-date="2025-08-23" data-description="Moments from the recognition ceremony." data-id="g1" data-location="Dubai, UAE" data-photographer="House Media" data-type="photo" data-url="https://images.unsplash.com/photo-1542038382126-77ae2819338c?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gallery photo - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<div className="absolute left-2 top-2 rounded-md bg-[#B18C63] px-1.5 py-0.5 text-[11px] font-medium text-black/90">Pinned</div>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Award Night</span>
<span className="text-[11px] text-zinc-300/90">Aug 23</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Team Celebration" data-date="2025-08-23" data-description="The creative team celebrating together." data-id="g2" data-location="Office HQ" data-photographer="Team Mate" data-type="photo" data-url="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gallery photo - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1557800636-894a64c1696f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Team Celebration</span>
<span className="text-[11px] text-zinc-300/90">Aug 23</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Handover Clip" data-date="2025-08-23" data-description="Quick handover moment." data-id="g3" data-location="Stage" data-photographer="Stage Crew" data-type="video" data-url="https://videos.pexels.com/video-files/2778676/2778676-uhd_2560_1440_25fps.mp4">
<img alt="Gallery video - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="rounded-full bg-black/50 p-2 backdrop-blur-sm">
<i className="h-5 w-5 text-zinc-100" data-lucide="play"></i>
</div>
</div>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Handover Clip · 15s</span>
<span className="text-[11px] text-zinc-300/90">Aug 23</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Behind the Scenes" data-date="2025-08-22" data-description="Backstage prep for the award." data-id="g4" data-location="Backstage" data-photographer="Events" data-type="photo" data-url="https://images.unsplash.com/photo-1551817958-20204f6472b1?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gallery photo - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Behind the Scenes</span>
<span className="text-[11px] text-zinc-300/90">Aug 22</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Creative Desk" data-date="2025-08-12" data-description="Where ideas come to life." data-id="g5" data-location="Creative Bay" data-photographer="Inhouse" data-type="photo" data-url="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gallery photo - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1492684223066-81342ee5ff30?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Creative Desk</span>
<span className="text-[11px] text-zinc-300/90">Aug 12</span>
</div>
</button>

<button className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/[0.02] transition duration-300 hover:-translate-y-0.5 hover:bg-white/[0.04] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 gallery-item" data-caption="Office Vibes" data-date="2025-08-05" data-description="Lobby lights and reflections." data-id="g6" data-location="BEA Lobby" data-photographer="Ops" data-type="photo" data-url="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=1200&amp;auto=format&amp;fit=crop">
<img alt="Gallery photo - opens larger view" className="h-36 w-full object-cover transition duration-300 group-hover:scale-[1.03]" loading="lazy" src="https://images.unsplash.com/photo-1450101499163-c8848c66ca85?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-x-0 bottom-0 flex items-center justify-between bg-gradient-to-t from-black/60 to-transparent px-2 pb-2 pt-10">
<span className="text-[12px] text-zinc-100">Office Vibes</span>
<span className="text-[11px] text-zinc-300/90">Aug 05</span>
</div>
</button>
</div>
</section>

<div className="fixed inset-0 z-50 hidden items-end justify-center sm:items-center" id="lightbox">
<div className="absolute inset-0 bg-black/70 backdrop-blur-sm"></div>
<div className="relative z-10 mx-3 mb-3 w-full max-w-xl overflow-hidden rounded-2xl border border-white/10 bg-[#0F0E12] shadow-[0_20px_40px_rgba(0,0,0,0.5)]">
<div className="flex items-center justify-between border-b border-white/10 px-3 py-2">
<div className="flex items-center gap-2">
<i className="h-4.5 w-4.5 text-zinc-300" data-lucide="image"></i>
<p className="text-[14px] text-zinc-200" id="lb-caption">Caption</p>
</div>
<button aria-label="Close viewer" className="rounded-md p-1 text-zinc-300 hover:bg-white/5 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="lb-close">
<i className="h-5 w-5" data-lucide="x"></i>
</button>
</div>
<div className="p-3">
<div className="overflow-hidden rounded-lg ring-1 ring-white/10" id="lb-media">

</div>
<div className="mt-3 grid grid-cols-2 gap-2 text-[12px] text-zinc-300">
<div className="flex items-center gap-1.5"><i className="h-4 w-4 text-zinc-400" data-lucide="calendar"></i><span id="lb-date">Date</span></div>
<div className="flex items-center gap-1.5"><i className="h-4 w-4 text-zinc-400" data-lucide="map-pin"></i><span id="lb-location">Location</span></div>
<div className="col-span-2 flex items-center gap-1.5"><i className="h-4 w-4 text-zinc-400" data-lucide="user-pen"></i><span id="lb-photographer">Photographer</span></div>
<div className="col-span-2 text-[12px] text-zinc-400" id="lb-description">Description</div>
</div>
</div>
</div>
</div>

<section className="px-4 py-4" id="awardee">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
<div className="flex items-center gap-3 p-4">
<img alt="Arjun Menon" className="h-14 w-14 rounded-full object-cover ring-1 ring-white/10 transition duration-300" src="https://images.unsplash.com/photo-1544005313-94ddf0286df2?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div>
<div className="flex items-center gap-2">
<h3 className="font-semibold tracking-tight text-zinc-100" style={{fontSize: '18px'}}>Arjun Menon</h3>
<span className="inline-flex items-center gap-1 rounded-md border border-[#B18C63]/30 bg-[#B18C63]/10 px-2 py-0.5 text-[11px] text-[#E1B866]">
<i className="h-3.5 w-3.5" data-lucide="sparkles"></i> Innovation Champion
                </span>
</div>
<p className="text-[13px] text-zinc-400">Senior Graphic Designer · Creative</p>
</div>
</div>
<div className="mx-4 rounded-xl border border-white/10 bg-white/[0.03] p-3">
<p className="text-[14px] text-zinc-200">“This recognition means a lot to me — it’s a reflection of our amazing team spirit.”</p>
</div>
<div className="p-4">
<div className="rounded-xl border border-white/10 bg-white/[0.02] p-3">
<p className="text-[13px] text-zinc-300">Arjun’s consistency and leadership have made a lasting impact.</p>
<p className="mt-2 text-right text-[14px] italic text-zinc-400">— Maria Lopez</p>
</div>
</div>
</div>
</section>

<section className="px-4 pb-4" id="company">
<div className="overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02]">
<div className="flex items-center gap-3 p-4">
<div className="flex h-10 w-10 items-center justify-center rounded-lg border border-white/10 bg-white/[0.03] text-[13px] font-semibold tracking-tight text-zinc-100">BE</div>
<div>
<h3 className="font-semibold tracking-tight text-zinc-100" style={{fontSize: '16px'}}>Empowering Excellence. Celebrating Growth.</h3>
<p className="text-[13px] text-zinc-400">At Brand Experts, we believe every milestone deserves a spotlight. AeroTag Accolades helps us preserve these proud moments forever.</p>
</div>
</div>
<div className="grid grid-cols-3 gap-2 px-4 pb-3">
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2 text-[12px] text-zinc-200 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://company.example.com" rel="noopener" target="_blank">
<i className="h-4 w-4" data-lucide="globe"></i> Website
            </a>
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2 text-[12px] text-zinc-200 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://company.example.com/careers" rel="noopener" target="_blank">
<i className="h-4 w-4" data-lucide="briefcase"></i> Careers
            </a>
<a className="inline-flex items-center justify-center gap-1.5 rounded-lg border border-white/10 bg-white/[0.02] px-2 py-2 text-[12px] text-zinc-200 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" href="https://linkedin.com/company/example" rel="noopener" target="_blank">
<i className="h-4 w-4" data-lucide="linkedin"></i> LinkedIn
            </a>
</div>
<div className="flex items-center justify-between border-t border-white/10 px-4 py-3">
<div className="flex items-center gap-2 text-[12px] text-zinc-400">
<i className="h-4 w-4 text-[#E1B866]" data-lucide="trophy"></i> Recognitions
            </div>
<div className="text-right">
<div className="font-semibold tracking-tight text-zinc-100" id="stat-recognitions" style={{fontSize: '18px'}}>0</div>
</div>
</div>
</div>
</section>

<section aria-label="Guestbook — Leave Your Congratulations!" className="px-4 pb-6" id="guestbook" role="region">
<h2 className="mb-3 font-semibold tracking-tight text-zinc-100" style={{fontSize: '20px'}}>Guestbook — Leave Your Congratulations!</h2>

<form className="group relative overflow-hidden rounded-2xl border border-white/10 bg-white/[0.02] transition duration-300 focus-within:-translate-y-0.5 focus-within:shadow-[0_6px_18px_rgba(29,21,24,0.20)]" id="guestbook-form">
<div className="flex items-center gap-2 border-b border-white/10 px-3 py-2">
<div className="h-7 w-7 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[11px] text-zinc-300">You</div>
<input className="w-full bg-transparent text-[13px] text-zinc-200 placeholder-zinc-500 outline-none" id="guest-name" maxlength="60" placeholder="Name (optional)" type="text"/>
<span className="text-[11px] text-zinc-500">Anon allowed</span>
</div>
<div className="px-3 pb-2 pt-2">
<div className="flex items-center justify-between">
<textarea aria-label="Write a congratulatory message" className="w-full resize-none bg-transparent text-[14px] text-zinc-100 placeholder-zinc-500 outline-none" id="guest-message" maxlength="500" placeholder="Write your message here..." rows="3"></textarea>
</div>
<div className="mt-2 flex items-center justify-between">
<div className="flex items-center gap-1.5">
<button aria-label="Open emoji picker" className="rounded-md p-1.5 text-zinc-300 hover:bg-white/5 hover:text-zinc-100 focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="emoji-toggle" type="button">
<i className="h-5 w-5" data-lucide="smile-plus"></i>
</button>
<div className="hidden items-center gap-1 rounded-lg border border-white/10 bg-black/50 px-1.5 py-1 text-[16px] text-zinc-100 backdrop-blur-md" id="emoji-popover">
<button className="emoji-btn px-1" type="button">👏</button>
<button className="emoji-btn px-1" type="button">🎉</button>
<button className="emoji-btn px-1" type="button">❤️</button>
</div>
</div>
<div className="text-[12px] text-zinc-500"><span id="char-count">0</span>/500</div>
</div>
</div>
<div className="flex items-center justify-between border-t border-white/10 px-3 py-2">
<div className="flex items-center gap-1 text-[12px] text-zinc-400">
<i className="h-4 w-4" data-lucide="shield"></i> Pre-moderated
            </div>
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.03] px-3 py-2 text-[13px] font-medium text-zinc-100 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50 active:translate-y-0.5" id="post-comment" type="submit">
<i className="h-4 w-4 text-[#E1B866]" data-lucide="send"></i> Post
            </button>
</div>
</form>

<div className="mt-4 space-y-3" id="comments">

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full bg-white/5 ring-1 ring-white/10 flex items-center justify-center text-[12px] text-zinc-300">SR</div>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[13px] text-zinc-200">Sana R</p>
<span className="text-[11px] text-zinc-500">Aug 24, 10:32</span>
</div>
</div>
</div>
<p className="mt-2 text-[14px] text-zinc-100">Huge congrats Arjun! Well deserved 🙌</p>
<div className="mt-2 flex items-center gap-2">
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="👏"><span>👏</span><span className="count">5</span></button>
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="🎉"><span>🎉</span><span className="count">2</span></button>
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="❤️"><span>❤️</span><span className="count">0</span></button>
</div>
</div>

<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-3">
<div className="flex items-center gap-2">
<img alt="Rahul P" className="h-8 w-8 rounded-full object-cover ring-1 ring-white/10" src="https://images.unsplash.com/photo-1502685104226-ee32379fefbe?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="flex-1">
<div className="flex items-center justify-between">
<p className="text-[13px] text-zinc-200">Rahul P</p>
<span className="text-[11px] text-zinc-500">Aug 24, 09:12</span>
</div>
</div>
</div>
<p className="mt-2 text-[14px] text-zinc-100">Great work — your attention to detail is unmatched.</p>
<div className="mt-2 flex items-center gap-2">
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="👏"><span>👏</span><span className="count">3</span></button>
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="🎉"><span>🎉</span><span className="count">0</span></button>
<button className="react-btn inline-flex items-center gap-1 rounded-md border border-white/10 bg-white/[0.02] px-2 py-1 text-[12px] text-zinc-200 hover:bg-white/[0.06]" data-emoji="❤️"><span>❤️</span><span className="count">0</span></button>
</div>
</div>
</div>
<div className="mt-3 flex justify-center">
<button className="inline-flex items-center gap-2 rounded-lg border border-white/10 bg-white/[0.02] px-3 py-2 text-[13px] text-zinc-200 hover:bg-white/[0.05] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="load-more">
<i className="h-4 w-4" data-lucide="chevrons-down"></i> Load more
          </button>
</div>
</section>

<section className="px-4 pb-6" id="share">
<div className="rounded-2xl border border-white/10 bg-white/[0.02] p-4">
<div className="mb-2 flex items-center gap-2">
<i className="h-5 w-5 text-[#E1B866]" data-lucide="share-2"></i>
<h3 className="font-semibold tracking-tight text-zinc-100" style={{fontSize: '16px'}}>Share this recognition</h3>
</div>
<div className="grid grid-cols-5 gap-2">
<button aria-label="Share to LinkedIn" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-[11px] text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" data-network="linkedin">
<i className="h-5 w-5" data-lucide="linkedin"></i> <span>LinkedIn</span>
</button>
<button aria-label="Share to WhatsApp" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-[11px] text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" data-network="whatsapp">
<i className="h-5 w-5" data-lucide="whatsapp"></i> <span>WhatsApp</span>
</button>
<button aria-label="Share to X" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-[11px] text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" data-network="x">
<i className="h-5 w-5" data-lucide="twitter"></i> <span>X</span>
</button>
<button aria-label="Share to Facebook" className="share-btn flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-[11px] text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" data-network="facebook">
<i className="h-5 w-5" data-lucide="facebook"></i> <span>Facebook</span>
</button>
<button aria-label="Copy link" className="flex flex-col items-center gap-1 rounded-xl border border-white/10 bg-white/[0.02] px-2 py-3 text-[11px] text-zinc-200 transition hover:-translate-y-0.5 hover:bg-white/[0.06] focus:outline-none focus-visible:ring-2 focus-visible:ring-[#B18C63]/50" id="copy-link">
<i className="h-5 w-5" data-lucide="link"></i> <span>Copy</span>
</button>
</div>
</div>
</section>

<footer className="px-4 pb-8" id="footer" role="contentinfo">
<div className="overflow-hidden rounded-2xl border border-[#4D2832]/50" style={{background: '#4D2832'}}>
<div className="flex items-center justify-between p-4">
<div className="flex items-center gap-2">
<div className="flex h-8 w-8 items-center justify-center rounded-md bg-white/10 text-[12px] font-semibold tracking-tight text-ivory" style={{color: '#FFF9F7'}}>AA</div>
<div>
<p className="text-[13px] font-medium text-ivory" style={{color: '#FFF9F7'}}>AeroTag Accolades</p>
<p className="text-[12px] text-ivory/80" style={{color: '#FFF9F7'}}>Where recognition becomes a legacy.</p>
</div>
</div>
<button aria-label="Open share options" className="rounded-md p-2 text-ivory/90 hover:bg-white/10 hover:text-ivory focus:outline-none focus-visible:ring-2 focus-visible:ring-white/50" id="qr-share">
<i className="h-5 w-5" data-lucide="qr-code"></i>
</button>
</div>
<div className="flex items-center gap-2 border-t border-white/20 px-4 py-3">
<a className="text-[12px] text-ivory/90 hover:underline" href="https://aerotag.example.com/about" style={{color: '#FFF9F7'}} target="_blank">About AeroTag</a>
<span className="h-1 w-1 rounded-full bg-white/40"></span>
<a className="text-[12px] text-ivory/90 hover:underline" href="https://aerotag.example.com/accolades" style={{color: '#FFF9F7'}} target="_blank">Explore Accolades</a>
<span className="h-1 w-1 rounded-full bg-white/40"></span>
<a className="text-[12px] text-ivory/90 hover:underline" href="https://aerotag.example.com/create" style={{color: '#FFF9F7'}} target="_blank">Create Your Own Trophy</a>
</div>
</div>
</footer>
</main>

<div className="pointer-events-none fixed inset-x-0 bottom-4 z-[60] hidden px-4" id="toast">
<div className="mx-auto flex max-w-sm items-center gap-2 rounded-xl border border-white/10 bg-black/70 px-3 py-2 text-[13px] text-zinc-100 backdrop-blur-md">
<i className="h-4.5 w-4.5 text-[#B18C63]" data-lucide="check-circle"></i>
<span id="toast-text">Link copied to clipboard — share the celebration!</span>
</div>
</div>


    </>
  );
}
