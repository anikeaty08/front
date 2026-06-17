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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    (function () {
      const filterButtons = document.querySelectorAll('.filter-btn');
      const cards = document.querySelectorAll('.art-card');
      const modal = document.getElementById('artModal');
      const modalTitle = document.getElementById('modalTitle');
      const closeModal = document.getElementById('closeModal');
      const confirmModal = document.getElementById('confirmModal');
      const detailButtons = document.querySelectorAll('.details-btn');
      let currentArtwork = '';

      filterButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          const filter = this.getAttribute('data-filter');

          filterButtons.forEach(function (btn) {
            btn.setAttribute('aria-pressed', 'false');
            btn.className = 'filter-btn rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition duration-300 hover:border-stone-900 hover:text-stone-900';
          });

          this.setAttribute('aria-pressed', 'true');
          this.className = 'filter-btn rounded-full border border-stone-300 bg-stone-900 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-stone-800';

          cards.forEach(function (card) {
            const category = card.getAttribute('data-category');
            if (filter === 'all' || category === filter) {
              card.style.display = '';
              requestAnimationFrame(function () {
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              });
            } else {
              card.style.opacity = '0';
              card.style.transform = 'translateY(0.5rem)';
              setTimeout(function () {
                if (card.getAttribute('data-category') !== filter && filter !== 'all') {
                  card.style.display = 'none';
                }
              }, 180);
            }
          });

          if (filter === 'all') {
            cards.forEach(function (card) {
              card.style.display = '';
              card.style.opacity = '1';
              card.style.transform = 'translateY(0)';
            });
          }
        });
      });

      cards.forEach(function (card) {
        card.style.transition = 'opacity 220ms ease, transform 220ms ease, box-shadow 500ms ease';
      });

      detailButtons.forEach(function (button) {
        button.addEventListener('click', function () {
          currentArtwork = this.getAttribute('data-title');
          modalTitle.textContent = currentArtwork;
          modal.classList.remove('hidden');
          modal.classList.add('flex');
          modal.setAttribute('aria-hidden', 'false');
        });
      });

      closeModal.addEventListener('click', function () {
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.setAttribute('aria-hidden', 'true');
      });

      confirmModal.addEventListener('click', function () {
        alert('Availability request sent for "' + currentArtwork + '". Our gallery team will follow up shortly.');
        modal.classList.add('hidden');
        modal.classList.remove('flex');
        modal.setAttribute('aria-hidden', 'true');
      });

      modal.addEventListener('click', function (event) {
        if (event.target === modal) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          modal.setAttribute('aria-hidden', 'true');
        }
      });

      document.addEventListener('keydown', function (event) {
        if (event.key === 'Escape' && !modal.classList.contains('hidden')) {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          modal.setAttribute('aria-hidden', 'true');
        }
      });
    })();
  
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
      
<section aria-labelledby="featured-paintings-heading" className="w-full">
<div className="sm:px-8 sm:py-20 lg:px-12 lg:py-24 max-w-7xl mr-auto ml-auto pt-16 pr-6 pb-16 pl-6">
<div className="mx-auto max-w-3xl text-center">
<p className="text-xs uppercase tracking-[0.3em] text-stone-500">Curated selection</p>
<h1 className="mt-4 text-4xl font-semibold tracking-tight text-stone-950 sm:text-5xl" id="featured-paintings-heading" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>
          Featured Paintings Gallery
        </h1>
<p className="mx-auto mt-5 max-w-2xl text-sm leading-7 text-stone-600 sm:text-base">
          A composed collection of contemporary and timeless works chosen for collectors seeking depth, presence, and enduring beauty. Every piece is presented with restraint, clarity, and a sense of quiet luxury.
        </p>
</div>
<div aria-label="Painting categories" className="mt-10 flex flex-wrap items-center justify-center gap-3 sm:mt-12" role="tablist">
<button aria-pressed="true" className="filter-btn rounded-full border border-stone-300 bg-stone-900 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-stone-800" data-filter="all" type="button">
          All Works
        </button>
<button aria-pressed="false" className="filter-btn rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition duration-300 hover:border-stone-900 hover:text-stone-900" data-filter="abstract" type="button">
          Abstract
        </button>
<button aria-pressed="false" className="filter-btn rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition duration-300 hover:border-stone-900 hover:text-stone-900" data-filter="modern" type="button">
          Modern
        </button>
<button aria-pressed="false" className="filter-btn rounded-full border border-stone-300 bg-white px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-700 transition duration-300 hover:border-stone-900 hover:text-stone-900" data-filter="classic" type="button">
          Classic
        </button>
</div>
<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 xl:grid-cols-3 mt-12 gap-x-6 gap-y-6" id="gallery">
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="abstract" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Abstract painting in layered neutral tones" className="transition duration-700 group-hover:scale-105 sm:h-80 w-full h-72 object-cover" src="https://images.unsplash.com/photo-1579783902614-a3fb3927b6a5?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Silent Horizon I</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€2,400</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              A restrained composition of layered textures and softened movement, designed to bring calm structure to a refined interior.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="Silent Horizon I" type="button">
                View Details
              </button>
</div>
</div>
</article>
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="modern" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Modern painting with geometric composition" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1460661419201-fd4cecdf8a8b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Velvet Structure</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€3,150</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              Bold geometry softened by muted color fields, offering a sophisticated balance between architectural rhythm and warmth.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="Velvet Structure" type="button">
                View Details
              </button>
</div>
</div>
</article>
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="classic" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Classic still life inspired painting" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1578301978018-3005759f48f7?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Golden Study</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€4,800</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              A luminous arrangement with classical restraint, composed to evoke intimacy, permanence, and quiet confidence.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="Golden Study" type="button">
                View Details
              </button>
</div>
</div>
</article>
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="abstract" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Expressive abstract painting with soft beige and charcoal palette" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1547891654-e66ed7ebb968?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Echoes in Chalk</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€1,980</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              Delicate tonal transitions and gestural marks create a piece that feels both expansive and deeply personal.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="Echoes in Chalk" type="button">
                View Details
              </button>
</div>
</div>
</article>
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="modern" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Modern minimalist painting with layered textures" className="transition duration-700 group-hover:scale-105 sm:h-80 w-full h-72 object-cover" src="https://images.unsplash.com/photo-1501612780327-45045538702b?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="sm:p-7 px-6 py-6">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Ivory Interval</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€5,300</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              Built around spacious silence and tactile detail, this work brings understated drama to contemporary rooms.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="Ivory Interval" type="button">
                View Details
              </button>
</div>
</div>
</article>
<article className="art-card group overflow-hidden rounded-3xl border border-stone-200 bg-white shadow-sm transition duration-500 hover:-translate-y-1 hover:shadow-xl" data-category="classic" style={{transition: 'opacity 220ms, transform 220ms, box-shadow 500ms'}}>
<div className="relative overflow-hidden bg-stone-100">
<img alt="Classic portrait style painting with muted tones" className="h-72 w-full object-cover transition duration-700 group-hover:scale-105 sm:h-80" src="https://images.unsplash.com/photo-1578926375605-eaf7559b1458?auto=format&amp;fit=crop&amp;w=1200&amp;q=80"/>
<div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-stone-950/20 via-transparent to-transparent"></div>
</div>
<div className="p-6 sm:p-7">
<div className="flex items-start justify-between gap-4">
<h2 className="text-2xl font-semibold tracking-tight text-stone-950" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>The Quiet Patron</h2>
<span className="shrink-0 text-sm font-medium text-stone-700">€7,900</span>
</div>
<p className="mt-3 text-sm leading-7 text-stone-600">
              Rich in atmosphere and poised expression, this portrait-inspired work lends gravity and distinction to a collection.
            </p>
<div className="mt-5">
<button className="details-btn inline-flex items-center rounded-full border border-stone-900 px-4 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-stone-900 transition duration-300 hover:bg-stone-900 hover:text-white" data-title="The Quiet Patron" type="button">
                View Details
              </button>
</div>
</div>
</article>
</div>
</div>
</section>
<div aria-hidden="true" className="fixed inset-0 z-50 hidden items-center justify-center bg-stone-950/50 px-4" id="artModal">
<div className="w-full max-w-md rounded-3xl bg-white p-6 shadow-2xl sm:p-7">
<div className="flex items-start justify-between gap-4">
<div>
<p className="text-xs uppercase tracking-[0.25em] text-stone-500">Artwork inquiry</p>
<h3 className="mt-2 text-2xl font-semibold tracking-tight text-stone-950" id="modalTitle" style={{fontFamily: 'Georgia, \'Times New Roman\', serif'}}>Painting Details</h3>
</div>
<button aria-label="Close details modal" className="rounded-full border border-stone-300 p-2 text-stone-600 transition duration-300 hover:border-stone-900 hover:text-stone-900" id="closeModal" type="button">
<span className="block text-sm leading-none">✕</span>
</button>
</div>
<p className="mt-4 text-sm leading-7 text-stone-600">
        Thank you for your interest. A private viewing, framing consultation, and collector assistance can be arranged for this piece.
      </p>
<div className="mt-6">
<button className="inline-flex rounded-full bg-stone-900 px-5 py-2.5 text-xs font-medium uppercase tracking-[0.2em] text-white transition duration-300 hover:bg-stone-800" id="confirmModal" type="button">
          Request Availability
        </button>
</div>
</div>
</div>


    </>
  );
}
