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



    // Year
    document.getElementById('year').textContent = new Date().getFullYear();

    // Subtle inline success message (no redirect) when using mailto
    const form = document.getElementById('preorder-form');
    const message = document.getElementById('form-message');
    if (form && message) {
      message.style.opacity = '0.0';
      message.style.transition = 'opacity 200ms ease-out';

      form.addEventListener('submit', function () {
        message.textContent = 'Preorder received — we’ll contact you shortly.';
        message.style.opacity = '1.0';
        setTimeout(() => {
          message.style.opacity = '0.0';
        }, 6000);
      });
    }

    // "Add to Form" buttons fill dropdown
    const preorderButtons = document.querySelectorAll('.preorder-fill-btn');
    const bookSelect = document.getElementById('book');
    preorderButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-book-title');
        if (bookSelect && title) {
          for (const option of bookSelect.options) {
            if (option.value === title) {
              bookSelect.value = title;
              break;
            }
          }
          document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }
      });
    });

    // "Learn More" buttons open a lightweight modal with placeholder copy
    const learnButtons = document.querySelectorAll('.learn-more-btn');
    let modalEl;

    function createModal(title) {
      const modal = document.createElement('div');
      modal.className = 'fixed inset-0 z-40 flex items-center justify-center bg-black/75';
      modal.innerHTML = `
        <div class="max-w-lg w-full mx-4 rounded-2xl border border-[#fdf4e6]/20 bg-[#070002]/95 backdrop-blur-md p-6 sm:p-7 text-[#fdf4e6]">
          <div class="flex items-start justify-between gap-4 mb-4">
            <div>
              <h3 class="font-['Playfair_Display'] text-xl sm:text-2xl tracking-tight mb-1">${title}</h3>
              <p class="text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/60">Overview</p>
            </div>
            <button aria-label="Close" class="text-[#fdf4e6]/65 hover:text-[#fdf4e6] transition-colors" id="modal-close">
              <svg xmlns="http://www.w3.org/2000/svg" class="h-4 w-4" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M18 6L6 18" stroke-linecap="round" stroke-linejoin="round" />
                <path d="M6 6L18 18" stroke-linecap="round" stroke-linejoin="round" />
              </svg>
            </button>
          </div>
          <div class="space-y-3 text-sm sm:text-base text-[#fdf4e6]/80">
            <p>
              This forthcoming title is part of the Christy House list and is currently in production. Final details on page count,
              printing, and release date will be shared with preorder readers first.
            </p>
            <p>
              Preordering is non-binding: it simply reserves your interest and ensures you&rsquo;re notified as soon as copies are
              available. You&rsquo;ll receive an email with full information and an option to complete your purchase.
            </p>
          </div>
          <div class="mt-5 flex flex-col sm:flex-row gap-3 sm:items-center justify-between">
            <button id="modal-preorder" class="inline-flex items-center justify-center rounded-full bg-[#f2c27c] text-[#1b0004] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase py-2.5 px-5 hover:bg-[#f5cf92] transition-colors">
              Preorder this title
            </button>
            <button id="modal-close-secondary" class="text-xs sm:text-sm text-[#fdf4e6]/80 hover:text-[#fdf4e6] transition-colors">
              Close
            </button>
          </div>
        </div>
      `;
      return modal;
    }

    learnButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const title = btn.getAttribute('data-book-title') || 'Upcoming Title';
        if (!modalEl) {
          modalEl = createModal(title);
          document.body.appendChild(modalEl);
        } else {
          modalEl.querySelector('h3').textContent = title;
          modalEl.style.display = 'flex';
        }

        function closeModal() {
          if (modalEl) {
            modalEl.style.display = 'none';
          }
        }

        modalEl.addEventListener('click', (e) => {
          if (e.target === modalEl) closeModal();
        }, { once: true });

        modalEl.querySelector('#modal-close').onclick = closeModal;
        modalEl.querySelector('#modal-close-secondary').onclick = closeModal;
        modalEl.querySelector('#modal-preorder').onclick = () => {
          if (bookSelect) {
            let matched = false;
            for (const option of bookSelect.options) {
              if (option.value === title) {
                bookSelect.value = title;
                matched = true;
                break;
              }
            }
            if (!matched && bookSelect.options.length > 0) {
              bookSelect.value = 'Other / Not listed';
            }
          }
          closeModal();
          document.getElementById('preorder')?.scrollIntoView({ behavior: 'smooth', block: 'start' });
        };
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
      
<div className="min-h-screen flex flex-col">

<header className="w-full border-b border-[#fdf4e6]/15 bg-gradient-to-b from-black/70 to-transparent backdrop-blur-sm">
<div className="max-w-6xl mx-auto flex items-center justify-between gap-4 py-4 sm:py-5 px-4 sm:px-6 lg:px-8">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full border border-[#f2c27c]/60 flex items-center justify-center bg-black/70">
<span className="text-xs tracking-[0.22em] font-medium text-[#f2c27c]">CH</span>
</div>
<div className="leading-tight">
<div className="font-[500] tracking-[0.14em] text-xs uppercase text-[#fdf4e6]/90">Christy House</div>
<div className="font-[400] tracking-[0.14em] text-[0.7rem] uppercase text-[#fdf4e6]/55">Publishing</div>
</div>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm text-[#fdf4e6]/75">
<a className="hover:text-[#fdf4e6] transition-colors" href="#featured">Books</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#about">About</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#preorder">Preorder</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#contact">Contact</a>
</nav>
<a className="hidden sm:inline-flex items-center gap-2 text-xs font-medium tracking-[0.18em] uppercase text-[#f2c27c] border border-[#f2c27c]/85 rounded-full py-2 px-4 hover:bg-[#f2c27c]/15 transition-colors" href="#preorder">
<span>Preorder Now</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
</div>
</header>

<main className="flex-1">
<section className="relative overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-[#2b0007] via-[#3a0008] to-black"></div>
<div className="absolute -right-32 sm:-right-16 top-1/3 w-72 sm:w-96 md:w-[30rem] aspect-[4/3] bg-[#f2c27c]/10 rounded-full blur-3xl opacity-70 pointer-events-none"></div>
<div className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-24 grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">

<div className="space-y-7">
<p className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#fdf4e6]/70 font-[400]">Boutique literary press</p>
<div className="space-y-3">
<h1 className="font-['Playfair_Display'] text-3xl sm:text-4xl md:text-5xl lg:text-6xl tracking-tight text-[#fdf4e6]">
                Christy House Publishing
              </h1>
<p className="text-base sm:text-lg md:text-xl text-[#fdf4e6]/80 max-w-xl">
                Curated stories for discerning readers — explore upcoming titles and reserve your copy before release.
              </p>
</div>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4">
<a className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2c27c] text-[#1b0004] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase py-3 sm:py-3.5 px-7 shadow-[0_18px_45px_rgba(0,0,0,0.65)] hover:bg-[#f5cf92] transition-colors" href="#preorder">
<span>Preorder Now</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</a>
<p className="text-xs sm:text-sm text-[#fdf4e6]/70 max-w-xs">
                No payment collected online. We confirm all preorders personally within 48 hours.
              </p>
</div>
<div className="flex flex-wrap gap-6 text-xs text-[#fdf4e6]/70">
<div className="flex items-center gap-2">
<span className="h-[0.14rem] w-6 rounded-full bg-[#f2c27c]"></span>
<span>Limited first editions</span>
</div>
<div className="flex items-center gap-2">
<span className="h-[0.14rem] w-6 rounded-full bg-[#fdf4e6]/70"></span>
<span>Sewn binding &amp; premium papers</span>
</div>
</div>
</div>

<div className="flex justify-center lg:justify-end">
<figure className="relative max-w-sm w-full">
<div className="absolute -inset-6 rounded-[1.75rem] bg-gradient-to-br from-[#fdf4e6]/30 via-[#fdf4e6]/10 to-transparent opacity-80"></div>
<div className="relative rounded-[1.5rem] bg-[#070002] border border-[#fdf4e6]/25 shadow-[0_30px_140px_rgba(0,0,0,0.95)] overflow-hidden">
<div className="bg-gradient-to-br from-[#120005] via-[#170006] to-black p-4 sm:p-5 flex justify-center items-center">
<img alt="Hardcover literary book mockup from Christy House Publishing" className="w-full h-auto max-h-[28rem] object-contain brightness-110" loading="lazy" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
<div className="border-t border-[#fdf4e6]/25 bg-black/50 px-4 sm:px-5 py-4 flex items-center justify-between gap-3">
<div>
<p className="text-xs tracking-[0.22em] uppercase text-[#fdf4e6]/60">Upcoming title</p>
<p className="text-sm sm:text-base text-[#fdf4e6] font-[400]">The Quiet Hour Between Pages</p>
</div>
<span className="inline-flex items-center rounded-full border border-[#f2c27c]/85 bg-[#f2c27c]/15 text-[0.7rem] tracking-[0.16em] uppercase text-[#1b0004] font-[400] py-1 px-3">
                    First Edition
                  </span>
</div>
</div>
</figure>
</div>
</div>
</section>

<section className="bg-[#3a0008]" id="featured">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-t border-[#fdf4e6]/15">
<div className="flex flex-col md:flex-row md:items-end gap-6 md:gap-10 mb-10 sm:mb-12">
<div>
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#fdf4e6] mb-2">
                Featured Editions
              </h2>
<p className="text-base sm:text-lg text-[#fdf4e6]/80 max-w-xl">
                A small gallery of carefully edited, beautifully printed books from emerging and established voices.
              </p>
</div>
<div className="md:ml-auto text-xs sm:text-sm text-[#fdf4e6]/70 max-w-sm">
              Limited runs, thoughtful design, and attentive collaboration with every author we publish.
            </div>
</div>
<div className="grid gap-6 sm:gap-8 md:grid-cols-2 lg:grid-cols-3">

<article className="group flex flex-col rounded-2xl border border-[#fdf4e6]/20 bg-white/5 overflow-hidden">
<div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#120004] via-[#070002] to-black flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-[1rem] bg-gradient-to-br from-[#fdf4e6]/25 to-transparent border border-[#fdf4e6]/30 shadow-[0_24px_90px_rgba(0,0,0,0.9)] flex items-center justify-center">
<span className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#fdf4e6]/75 text-center px-6">
                    Cover reveal coming soon
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5 gap-4">
<div className="space-y-1">
<div className="flex items-center justify-between gap-3">
<h3 className="font-['Playfair_Display'] text-lg sm:text-xl tracking-tight text-[#fdf4e6]">
                      The Quiet Hour Between Pages
                    </h3>
<span className="inline-flex items-center rounded-full bg-[#f2c27c]/15 border border-[#f2c27c]/85 text-[0.65rem] tracking-[0.18em] uppercase text-[#1b0004] font-[400] py-1 px-3">
                      Preorder
                    </span>
</div>
<p className="text-xs sm:text-sm text-[#fdf4e6]/70">
                    By <span className="text-[#fdf4e6]/90">Elena Maris</span>
</p>
</div>
<p className="text-sm sm:text-base text-[#fdf4e6]/80">
                  A meditation on quiet rituals, morning light, and the thin line where everyday habit softens into devotion.
                </p>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<button className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#fdf4e6]/80 hover:text-[#fdf4e6] flex items-center gap-2 learn-more-btn" data-book-title="The Quiet Hour Between Pages" type="button">
<span>Learn More</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase font-medium text-[#1b0004] bg-[#fdf4e6] rounded-full py-2 px-4 hover:bg-[#f7e3c4] transition-colors preorder-fill-btn" data-book-title="The Quiet Hour Between Pages" type="button">
                    Add to Form
                  </button>
</div>
</div>
</article>

<article className="group flex flex-col rounded-2xl border border-[#fdf4e6]/20 bg:white/5 bg-white/5 overflow-hidden">
<div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#070002] via-[#170006] to-black flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-[1rem] bg-gradient-to-tr from-[#fdf4e6]/25 to-transparent border border-[#fdf4e6]/30 shadow-[0_24px_90px_rgba(0,0,0,0.9)] flex flex-col items-center justify-center text-center gap-2 px-6">
<span className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#fdf4e6]/80">
                    Early 2025
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5 gap-4">
<div className="space-y-1">
<div className="flex items-center justify-between gap-3">
<h3 className="font-['Playfair_Display'] text-lg sm:text-xl tracking-tight text-[#fdf4e6]">
                      Atlas of Small Rooms
                    </h3>
<span className="inline-flex items-center rounded-full bg-white/5 border border-[#fdf4e6]/35 text-[0.65rem] tracking-[0.18em] uppercase text-[#fdf4e6]/85 font-[400] py-1 px-3">
                      Coming Soon
                    </span>
</div>
<p className="text-xs sm:text-sm text-[#fdf4e6]/70">
                    By <span className="text-[#fdf4e6]/90">Jonah Pierce</span>
</p>
</div>
<p className="text-sm sm:text-base text-[#fdf4e6]/80">
                  Short stories mapping the cartography of small apartments, half-furnished lives, and the geographies between people.
                </p>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<button className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#fdf4e6]/80 hover:text-[#fdf4e6] flex items-center gap-2 learn-more-btn" data-book-title="Atlas of Small Rooms" type="button">
<span>Learn More</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase font-medium text-[#fdf4e6] bg-transparent border border-[#fdf4e6]/40 rounded-full py-2 px-4 hover:bg-white/5 transition-colors preorder-fill-btn" data-book-title="Atlas of Small Rooms" type="button">
                    Add to Form
                  </button>
</div>
</div>
</article>

<article className="group flex flex-col rounded-2xl border border-[#fdf4e6]/20 bg-white/5 overflow-hidden">
<div className="aspect-[3/4] overflow-hidden bg-gradient-to-br from-[#070002] via-[#190007] to-black flex items-center justify-center">
<div className="w-3/4 h-3/4 rounded-[1rem] bg-gradient-to-br from-[#f2c27c]/35 via-transparent to-transparent border border-[#f2c27c]/70 shadow-[0_24px_90px_rgba(0,0,0,0.95)] flex flex-col items-center justify-center text-center gap-2 px-6">
<span className="text-xs sm:text-sm tracking-[0.22em] uppercase text-[#4e2109]">
                    Limited Series
                  </span>
</div>
</div>
<div className="flex-1 flex flex-col p-4 sm:p-5 gap-4">
<div className="space-y-1">
<div className="flex items-center justify-between gap-3">
<h3 className="font-['Playfair_Display'] text-lg sm:text-xl tracking-tight text-[#fdf4e6]">
                      The House Editions
                    </h3>
<span className="inline-flex items-center rounded-full bg-[#f2c27c]/15 border border-[#f2c27c]/85 text-[0.65rem] tracking-[0.18em] uppercase text-[#1b0004] font-[400] py-1 px-3">
                      2025
                    </span>
</div>
<p className="text-xs sm:text-sm text-[#fdf4e6]/70">
                    Curated annual anthology
                  </p>
</div>
<p className="text-sm sm:text-base text-[#fdf4e6]/80">
                  A single volume each year, gathering quiet, luminous work that might otherwise slip past the shelves.
                </p>
<div className="mt-auto flex items-center justify-between gap-3 pt-2">
<button className="text-xs sm:text-sm font-medium tracking-[0.18em] uppercase text-[#fdf4e6]/80 hover:text-[#fdf4e6] flex items-center gap-2 learn-more-btn" data-book-title="The House Editions" type="button">
<span>Learn More</span>
<svg className="h-3.5 w-3.5" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M7 17L17 7" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M8 7H17V16" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<button className="text-[0.7rem] sm:text-xs tracking-[0.18em] uppercase font-medium text-[#fdf4e6] bg-transparent border border-[#fdf4e6]/40 rounded-full py-2 px-4 hover:bg-white/5 transition-colors preorder-fill-btn" data-book-title="The House Editions" type="button">
                    Add to Form
                  </button>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="bg-[#3a0008]" id="about">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-12 sm:py-16 lg:py-20 border-t border-[#fdf4e6]/15">
<div className="grid md:grid-cols-[minmax(0,0.9fr)_minmax(0,1.4fr)] gap-10 lg:gap-16 items-start">
<div className="space-y-5">
<div className="inline-flex items-center gap-2 rounded-full border border-[#fdf4e6]/20 bg-black/50 py-1.5 pl-2.5 pr-3.5">
<div className="h-7 w-7 rounded-full border border-[#f2c27c]/75 flex items-center justify-center bg-[#3a0008]">
<span className="text-[0.7rem] tracking-[0.22em] text-[#f2c27c] font-[500]">CH</span>
</div>
<span className="text-[0.7rem] tracking-[0.22em] uppercase text-[#fdf4e6]/75 font-[400]">
                  Christy House Publishing
                </span>
</div>
<h2 className="font-['Playfair_Display'] text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#fdf4e6]">
                A quiet home for careful books.
              </h2>
<p className="text-base sm:text-lg text-[#fdf4e6]/80">
                Christy House Publishing is a small, independent press devoted to thoughtfully crafted books —
                intimate in scale, generous in detail, and printed to be kept.
              </p>
</div>
<div className="space-y-5 text-sm sm:text-base text-[#fdf4e6]/80">
<p>
                We work closely with each author, from the earliest drafts through final proof, shaping manuscripts with
                patience and attention. Every title is selected for clarity of voice, depth of feeling, and the quiet
                confidence that it will reward a slow, attentive read.
              </p>
<p>
                Our editions are produced with sewn bindings, carefully chosen papers, and considered typography.
                We print in limited runs to preserve quality, making each book a lasting object — something you can return
                to, lend, and keep within arm’s reach.
              </p>
<p>
                Christy House titles are distributed directly to readers through preorder and small partner bookstores.
                If you are a bookseller, librarian, or author seeking a home for your work, we would be glad to hear from you.
              </p>
</div>
</div>
</div>
</section>

<section className="bg-[#3a0008]" id="preorder">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg-8 py-12 sm:py-16 lg:py-20 border-t border-[#fdf4e6]/15">
<div className="max-w-2xl mb-10 sm:mb-12">
<h2 className="font-Playfair_Display'] text-2xl sm:text-3xl md:text-4xl tracking-tight text-[#fdf4e6 mb-3">
              Preorder a title
            </h2>
<p className="text-base sm:text-lg textfdf4e6]/80">
              Share a few details below. We’ll confirm availability, final pricing, and shipping options by within 48 hours.
            </p>
</div>
<form action="mailto:contact@christyhousepublishing.com" className="space-y6 rounded-2xl border border-[#fdf4e6]/20 bg-black/60 backdrop-blur-sm p-4 sm-6 md:p-8" enctype="/plain" id="preorder-form" method="post">

<div className="hidden">
<label>
<span className="block text-xs-[#fdf4e6]/40 mb-1">Leave this field empty</span>
<input ="website"="" autocomplete="off" type="text"/>
</label>
</div>
<div className="grid gap-5 sm:grid-cols2">
<div className="space-y-2">
<label className="block text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/70" htmlFor="name">
                  Name<span className="text-[#fc27c] ml-0.5">*</span>
</label>
<input autocomplete="name" className="w-full rounded-xl border-[#fdf4e6]/25 bg-white/5 text-sm sm:text-base text-[#fdf4e6] placeholder:text-[#fdf4e6]/40 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f2c27c]/85 focus:border-transparent" id="name" name="Name" placeholder="Your full name" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/70" htmlFor="email">
                  Email<span className="text-[#f2c27c] ml-0.5">*</span>
</label>
<input autocomplete="email" className="w-full rounded-xl border border-[#fdf4e6]/25 bg-white/5 text-sm sm:text-base text-[#fdf4e6] placeholder:text-[#fdf4e6]/40 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f2c27c]/85 focus:border-transparent" id="email" name="Email" placeholder="you@example.com" required="" type="email"/>
</div>
</div>
<div className="grid gap-5 sm:grid-cols-3">
<div className="space-y-2 sm:col-span-2">
<label className="block text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/70" htmlFor="book">
                  Book title to preorder
                </label>
<div className="relative">
<select className="w-full appearance-none rounded-xl border border-[#fdf4e6]/25 bg-white/5 text-sm sm:text-base text-[#fdf4e6] px-3.5 py-2.5 pr-9 focus:outline-none focus:ring-2 focus:ring-[#f2c27c]/85 focus:border-transparent" id="book" name="Book">
<option className="bg-[#3a0008] text-[#fdf4e6]/80" value="">Select a title</option>
<option className="bg-[#3a0008] text-[#fdf4e6]/90" value="The Quiet Hour Between Pages">
                      The Quiet Hour Between Pages
                    </option>
<option className="bg-[#3a0008] text-[#fdf4e6]/90" value="Atlas of Small Rooms">
                      Atlas of Small Rooms
                    </option>
<option className="bg-[#3a0008] text-[#fdf4e6]/90" value="The House Editions">
                      The House Editions
                    </option>
<option className="bg-[#3a0008] text-[#fdf4e6]/90" value="Other / Not listed">
                      Other / Not listed
                    </option>
</select>
<svg className="pointer-events-none absolute right-3 top-1/2 -translate-y-1/2 h-4 w-4 text-[#fdf4e6]/65" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M6 9L12 15L18 9" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/70" htmlFor="quantity">
                  Quantity
                </label>
<input className="w-full rounded-xl border border-[#fdf4e6]/25 bg:white/5 bg-white/5 text-sm sm:text-base text-[#fdf4e6] placeholder:text-[#fdf4e6]/40 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f2c27c]/85 focus:border-transparent" id="quantity" min="1" name="Quantity" type="number" value="1"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/70" htmlFor="notes">
                Notes (optional)
              </label>
<textarea className="w-full rounded-xl border border-[#fdf4e6]/25 bg-white/5 text-sm sm:text-base text-[#fdf4e6] placeholder:text-[#fdf4e6]/40 px-3.5 py-2.5 focus:outline-none focus:ring-2 focus:ring-[#f2c27c]/85 focus:border-transparent resize-none" id="notes" name="Notes" placeholder="Shipping location, special instructions, or questions." rows="4"></textarea>
</div>
<div className="flex flex-col sm:flex-row sm:items-center gap-4 pt-2">
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-[#f2c27c] text-[#1b0004] text-xs sm:text-sm font-medium tracking-[0.18em] uppercase py-3 sm:py-3.5 px-7 hover:bg-[#f5cf92] transition-colors" type="submit">
<span>Submit Preorder</span>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 2L11 13" strokeLinecap="round" strokeLinejoin="round"></path>
<path d="M22 2L15 22L11 13L2 9L22 2Z" strokeLinecap="round" strokeLinejoin="round"></path>
</svg>
</button>
<p className="text-xs sm:text-sm text-[#fdf4e6]/70" id="form-message">
                Preorder received — we’ll contact you shortly.
              </p>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-[#1f0004] border-t border-[#fdf4e6]/20" id="contact">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-8 sm:py-10 lg:py-12 flex flex-col gap-8">
<div className="flex flex-col md:flex-row gap-8 md:gap-10">
<div className="md:w-1/2 space-y-3">
<div className="flex items-center gap-2">
<div className="h-8 w-8 rounded-full border border-[#f2c27c]/75 flex items-center justify-center bg-black/70">
<span className="text-xs tracking-[0.22em] font-medium text-[#f2c27c]">CH</span>
</div>
<span className="text-sm tracking-[0.22em] uppercase text-[#fdf4e6]/75 font-[400]">
                Christy House Publishing
              </span>
</div>
<p className="text-sm sm:text-base text-[#fdf4e6]/75 max-w-md">
              Based online with roots in small bookshops and reading rooms. We publish a limited number of titles each year, with care.
            </p>
</div>
<div className="md:w-1/2 flex flex-col sm:flex-row gap-8 sm:gap-10 justify-between">
<div className="space-y-2">
<div className="text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/65">Links</div>
<div className="flex flex-col gap-1.5 text-sm text-[#fdf4e6]/80">
<a className="hover:text-[#fdf4e6] transition-colors" href="#about">About</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#preorder">Preorder</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#">Terms</a>
<a className="hover:text-[#fdf4e6] transition-colors" href="#">Privacy</a>
</div>
</div>
<div className="space-y-3">
<div className="text-xs tracking-[0.18em] uppercase text-[#fdf4e6]/65">Stay in touch</div>
<form className="space-y-2">
<div className="flex flex-col sm:flex-row gap-2">
<input autocomplete="email" className="w-full rounded-full border border-[#fdf4e6]/30 bg-black/60 text-xs sm:text-sm text-[#fdf4e6] placeholder:text-[#fdf4e6]/45 px-3.5 py-2 focus:outline-none focus:ring-1 focus:ring-[#f2c27c]/80 focus:border-transparent" name="newsletter" placeholder="Email for quiet updates" type="email"/>
<button className="inline-flex items-center justify-center rounded-full bg-[#fdf4e6] text-[#1b0004] text-[0.7rem] sm:text-xs font-medium tracking-[0.18em] uppercase py-2 px-4 hover:bg-[#f7e3c4] transition-colors" type="button">
                    Sign Up
                  </button>
</div>
<p className="text-[0.7rem] text-[#fdf4e6]/60">
                  Occasional notes, no noise. You can unsubscribe at any time.
                </p>
</form>
<div className="flex items-center gap-4 pt-1">
<a aria-label="Instagram" className="text-[#fdf4e6]/55 hover:text-[#fdf4e6] transition-colors" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="4" ry="4" width="18" x="3" y="3"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
</svg>
</a>
<a aria-label="Facebook" className="text-[#fdf4e6]/55 hover:text-[#fdf4e6] transition-colors" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
</a>
<a aria-label="Twitter" className="text-[#fdf4e6]/55 hover:text-[#fdf4e6] transition-colors" href="#">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 12 8.09v1A10.66 10.66 0 0 1 3 4s-4 9 5 13a11.64 11.64 0 0 1-7 2c9 5 20 0 20-11.5a4.5 4.5 0 0 0-.08-.83A7.72 7.72 0 0 0 23 3z"></path>
</svg>
</a>
</div>
</div>
</div>
</div>
<div className="border-t border-[#fdf4e6]/20">
<div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 py-4 flex flex-col sm:flex-row items-center justify-between gap-3">
<p className="text-[0.7rem] sm:text-xs text-[#fdf4e6]/60">
              © <span id="year"></span> Christy House Publishing. All rights reserved.
            </p>
<p className="text-[0.7rem] sm:text-xs text-[#fdf4e6]/60">
              Contact: <a className="hover:text-[#fdf4e6] transition-colors" href="mailto:contact@christyhousepublishing.com">contact@christyhousepublishing.com</a>
</p>
</div>
</div>
</div>
</footer>
</div>


    </>
  );
}
