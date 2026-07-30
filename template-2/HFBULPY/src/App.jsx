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
      {

try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorArray.from(document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

(function() {
function disableHashLinks() {
const hashLinks = document.querySelectorAll('a[href="#"], a[href^="#"]:not([href="#"])');
hashLinks.forEach(link => {
link.addEventListener('click', function(e) {
e.preventDefault();
e.stopPropagation();
return false;
});
// Add tooltip to indicate link is disabled but keep pointer cursor
link.title = link.title || 'Link disabled in preview mode';
});
}
// Disable hash links on DOM ready
if (document.readyState === 'loading') {
document.addEventListener('DOMContentLoaded', disableHashLinks);
} else {
disableHashLinks();
}
// Also disable hash links when the window loads (fallback)
window.addEventListener('load', disableHashLinks);
})();

}

{

    lucide.createIcons();

    // Segmented Control Functionality
    document.addEventListener('DOMContentLoaded', function() {
      const segmentButtons = document.querySelectorAll('.segment-btn');
      const categoryCards = document.querySelectorAll('.category-card');

      segmentButtons.forEach(button => {
        button.addEventListener('click', function() {
          const selectedCategory = this.getAttribute('data-category');
          
          // Update button states
          segmentButtons.forEach(btn => {
            btn.classList.remove('active', 'bg-black', 'text-white');
            btn.classList.add('bg-gray-100', 'text-gray-500');
          });
          
          this.classList.add('active', 'bg-black', 'text-white');
          this.classList.remove('bg-gray-100', 'text-gray-500');

          // Show/hide category cards with smooth transition
          categoryCards.forEach(card => {
            if (card.classList.contains(selectedCategory)) {
              card.classList.remove('hidden');
              card.style.opacity = '0';
              card.style.transform = 'translateY(10px)';
              setTimeout(() => {
                card.style.transition = 'opacity 300ms ease, transform 300ms ease';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
              }, 10);
            } else {
              card.style.transition = 'opacity 200ms ease, transform 200ms ease';
              card.style.opacity = '0';
              card.style.transform = 'translateY(-10px)';
              setTimeout(() => {
                card.classList.add('hidden');
              }, 200);
            }
          });
        });
      });

      // Plus/Minus Button Functionality
      const plusBtn = document.querySelector('.plus-btn');
      const minusBtn = document.querySelector('.minus-btn');
      const quantityDisplay = document.querySelector('.quantity-display');
      
      let quantity = 1;

      if (plusBtn && minusBtn && quantityDisplay) {
        plusBtn.addEventListener('click', function() {
          quantity++;
          quantityDisplay.textContent = quantity;
          
          // Add visual feedback
          quantityDisplay.style.transform = 'scale(1.1)';
          setTimeout(() => {
            quantityDisplay.style.transform = 'scale(1)';
          }, 150);
        });

        minusBtn.addEventListener('click', function() {
          if (quantity > 1) {
            quantity--;
            quantityDisplay.textContent = quantity;
            
            // Add visual feedback
            quantityDisplay.style.transform = 'scale(1.1)';
            setTimeout(() => {
              quantityDisplay.style.transform = 'scale(1)';
            }, 150);
          }
        });

        // Add transition to quantity display
        quantityDisplay.style.transition = 'transform 150ms ease';
      }

      // Hide scrollbar but keep functionality
      const scrollableContainer = document.querySelector('.overflow-x-auto');
      if (scrollableContainer) {
        scrollableContainer.style.scrollbarWidth = 'none';
        scrollableContainer.style.msOverflowStyle = 'none';
        scrollableContainer.classList.add('scrollbar-hide');
        
        // Add CSS to hide webkit scrollbar
        const style = document.createElement('style');
        style.textContent = `
          .scrollbar-hide::-webkit-scrollbar {
            display: none;
          }
        `;
        document.head.appendChild(style);
      }
    });
  
}
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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dbcc86f5-bf82-462d-b569-c5125e487992_3840w.jpg")`}}></div>
<main className="min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="flex gap-8 items-center justify-center">

<section className="screen-animate bg-black rounded-[48px] p-1 shadow-[0_40px_80px_rgba(0,0,0,0.4)]" style={{width: `393px`, height: `854px`}}>
<div className="bg-white rounded-[44px] h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

<div className="bg-white px-6 pt-3 pb-1">
<div className="flex items-center justify-between text-black text-sm font-semibold">
<span className="font-sans" style={{transition: `outline 0.1s ease-in-out`}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewBox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="black" strokeWidth="1" width="17"></rect>
<rect fill="black" height="4" rx="0.5" width="8"></rect>
<rect fill="black" height="2" rx="0.5" width="2"></rect>
</svg>
</div>
</div>
</div>
<div className="px-6 pb-6 h-full overflow-y-auto" id="screen1-content">

<div className="flex items-center justify-between mb-6 pt-2">
<div className="flex items-center gap-3">
<img alt="Profile" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_800w.jpg" style={{}} />
<div className="text-base">
<p className="text-gray-600 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Hi, Sophia!</p>
</div>
</div>
<button className="relative h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-shopping-bag h-5 w-5 text-black" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-pink-500 rounded-full"></span>
</button>
</div>

<h1 className="text-[34px] leading-[1.15] tracking-tight mb-6 font-sans font-medium" style={{}}>Discover your perfect beauty products</h1>

<div className="relative mb-8">
<div className="relative rounded-2xl bg-gray-50 overflow-hidden">
<input className="w-full text-[17px] placeholder-gray-500 focus:outline-none text-black bg-transparent pt-4 pr-14 pb-4 pl-4" placeholder="Search beauty products..." type="text" />
<button className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-search h-4.5 w-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="11" cy="11"></circle></svg>
</button>
</div>
</div>

<div className="mb-6 -mx-6 px-6">
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{scrollbarWidth: `none`}}>
<button className="segment-btn active flex-shrink-0 px-6 py-3 rounded-2xl bg-black text-white font-semibold text-[15px] transition-all duration-200 font-sans" data-category="skincare" style={{transition: `outline 0.1s ease-in-out`}}>
                  Skincare
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="makeup" style={{transition: `outline 0.1s ease-in-out`}}>
                  Makeup
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="fragrance" style={{transition: `outline 0.1s ease-in-out`}}>
                  Fragrance
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="haircare" style={{transition: `outline 0.1s ease-in-out`}}>
                  Hair Care
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="bodycare" style={{transition: `outline 0.1s ease-in-out`}}>
                  Body Care
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="wellness" style={{transition: `outline 0.1s ease-in-out`}}>
                  Wellness
                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-8" id="featured-cards">

<article className="category-card skincare bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Glow Serum" className="h-36 w-full object-cover" src="https://cdn.midjourney.com/46812196-1459-4b2b-83fa-51233f556b89/0_0.png?w=800&q=80" style={{}} />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Glow Serum</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Vitamin C</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.8</span>
</div>
</div>
</div>
</article>
<article className="category-card skincare bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Night Cream" className="h-36 w-full object-cover" src="https://cdn.midjourney.com/1db3627e-db40-4682-a6eb-f0bd614b9fb8/0_0.png?w=800&q=80" style={{}} />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Night Cream</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Anti-aging</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.9</span>
</div>
</div>
</div>
</article>

<article className="category-card makeup hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Lipstick" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&q=80" style={{}} />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Rouge Lipstick</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Matte Finish</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.7</span>
</div>
</div>
</div>
</article>
<article className="category-card makeup hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Foundation" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&q=80" />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Full Coverage</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Foundation</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.6</span>
</div>
</div>
</div>
</article>

<article className="category-card fragrance hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Perfume" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&q=80" />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Rose Essence</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Eau de Parfum</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.5</span>
</div>
</div>
</div>
</article>
<article className="category-card fragrance hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Cologne" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&q=80" />
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Ocean Breeze</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Fresh Cologne</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.4</span>
</div>
</div>
</div>
</article>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[22px] font-sans font-medium" style={{}}>Best sellers</h2>
<button className="h-9 w-9 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-chevron-down h-5 w-5 text-black" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl overflow-hidden">
<img alt="Hydra Moisturizer" className="h-full w-full object-cover" src="https://cdn.midjourney.com/7f8ec377-96fe-490a-9d00-25df120c520d/0_0.png?w=800&q=80" />
</div>
<div className="">
<p className="text-[17px] font-semibold font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Hydra Moisturizer</p>
<p className="text-[15px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Daily care</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-[15px] text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.7</span>
</div>
</div>
</div>

<div className="h-24"></div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="bg-black rounded-full px-6 py-3">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-home h-6 w-6 text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-[10px] text-white font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-sparkles h-6 w-6 text-gray-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Discover</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-heart h-6 w-6 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Favorites</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-user h-6 w-6 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Profile</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="screen-animate shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-black rounded-[48px] pt-1 pr-1 pb-1 pl-1" style={{width: `393px`, height: `854px`}}>
<div className="bg-white rounded-[44px] h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

<div className="bg-transparent px-6 pt-3 pb-1 absolute top-0 left-0 right-0 z-20">
<div className="flex items-center justify-between text-white text-sm font-semibold">
<span className="font-sans" style={{transition: `outline 0.1s ease-in-out`}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewBox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="white" strokeWidth="1" width="17"></rect>
<rect fill="white" height="4" rx="0.5" width="8"></rect>
<rect fill="white" height="2" rx="0.5" width="2"></rect>
</svg>
</div>
</div>
</div>
<div className="h-full overflow-y-auto">

<div className="relative h-96">
<img alt="Radiance Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/25b17ec2-45e8-4315-99b8-f235a0902505/0_1.png?w=800&q=80" />
<div className="absolute top-16 left-6">
<button className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
<svg className="lucide lucide-chevron-left h-6 w-6 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
<div className="absolute top-16 right-6">
<button className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
<svg className="lucide lucide-heart h-6 w-6 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
</div>
</div>

<div className="px-6 py-6 bg-white rounded-t-[32px] -mt-8 relative z-10">

<div className="flex items-baseline justify-between mb-3">
<h2 className="text-[28px] tracking-tight font-sans font-medium" style={{}}>Radiance Serum</h2>
<p className="text-[24px] tracking-tight text-pink-500 font-sans font-medium" style={{}}>$89</p>
</div>

<div className="flex items-center gap-4 text-base mb-6">
<span className="text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Premium Skincare</span>
<div className="flex items-center gap-1 text-black">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>4.9</span>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
<button className="minus-btn h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105 active:scale-95">
<svg className="lucide lucide-minus h-4 w-4 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<span className="quantity-display text-[17px] font-semibold text-black min-w-[20px] text-center font-sans" style={{transition: `transform 150ms`}}>1</span>
<button className="plus-btn h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<span className="text-[15px] text-gray-500 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Quantity</span>
</div>
<button className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
<svg className="lucide lucide-droplets h-5 w-5 text-black" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-[15px] text-black font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>30ml</span>
</button>
</div>

<p className="text-[15px] leading-6 text-gray-600 mb-8 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>
                Our premium Radiance Serum is formulated with powerful vitamin C and hyaluronic acid to brighten, hydrate, and rejuvenate your skin. This lightweight, fast-absorbing formula helps reduce dark spots, boost collagen production, and gives you that natural glow you've been looking for.
              </p>

<div className="pb-24">
<button className="w-full text-[17px] active:scale-95 transition-transform font-semibold text-white bg-pink-500 rounded-2xl pt-4 pb-4 shadow-lg" style={{transition: `outline 0.1s ease-in-out`}}>
                  Add to cart
                </button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="bg-black rounded-full px-6 py-3">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-home h-6 w-6 text-gray-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-sparkles h-6 w-6 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="4" cy="20"></circle></svg>
<span className="text-[10px] text-white font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Discover</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-heart h-6 w-6 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Favorites</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-user h-6 w-6 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="12" cy="7"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Profile</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="screen-animate shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-black rounded-[48px] pt-1 pr-1 pb-1 pl-1" id="aura-emek0tqmq" style={{width: `393px`, height: `854px`}}>
<div className="h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white rounded-[44px]">

<div className="bg-white px-6 pt-3 pb-1">
<div className="flex items-center justify-between text-black text-sm font-semibold">
<span className="font-sans" style={{transition: `outline 0.1s ease-in-out`}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewBox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="black" strokeWidth="1" width="17"></rect>
<rect fill="black" height="4" rx="0.5" width="8"></rect>
<rect fill="black" height="2" rx="0.5" width="2"></rect>
</svg>
</div>
</div>
</div>
<div className="h-full overflow-y-auto px-6 pb-6">

<div className="flex items-center justify-between mb-6 pt-2">
<button className="h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-chevron-left h-6 w-6 text-black" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<h1 className="text-[22px] font-medium font-sans tracking-tight" style={{}}>Shopping Cart</h1>
<button className="h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-trash-2 h-5 w-5 text-black" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
</button>
</div>

<div className="mb-6" id="aura-emek0j1jc">
<div className="flex gap-2 w-auto bg-green-50 border-green-100 border rounded-xl mb-4 pt-2 pr-2 pb-2 pl-2 items-center" id="aura-emek0mn51">
<div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-truck h-3 w-3 text-white" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><circle cx="17" cy="18"></circle><circle cx="7" cy="18"></circle></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] leading-tight font-medium text-green-700 text-left" id="aura-emek0ox9i">Free shipping on orders $50+</p>
</div>
</div><p className="text-gray-500 text-[15px] mb-4 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>3 items in cart</p>


<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-3 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Radiance Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/25b17ec2-45e8-4315-99b8-f235a0902505/0_1.png?w=800&q=80" />
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Radiance Serum</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: `outline 0.1s ease-in-out`}}>30ml • Premium Skincare</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: `outline 0.1s ease-in-out`}}>1</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<p className="text-[17px] font-medium text-pink-500 font-sans" style={{}}>$89</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-3 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Glow Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/46812196-1459-4b2b-83fa-51233f556b89/0_0.png?w=800&q=80" />
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Glow Serum</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: `outline 0.1s ease-in-out`}}>25ml • Vitamin C</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: `outline 0.1s ease-in-out`}}>2</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<p className="text-[17px] font-medium text-pink-500 font-sans" style={{}}>$156</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-6 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Night Cream" className="h-full w-full object-cover" src="https://cdn.midjourney.com/1db3627e-db40-4682-a6eb-f0bd614b9fb8/0_0.png?w=800&q=80" />
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Night Cream</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: `outline 0.1s ease-in-out`}}>50ml • Anti-aging</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: `outline 0.1s ease-in-out`}}>1</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<p className="text-[17px] font-medium text-pink-500 font-sans" style={{}}>$65</p>
</div>
</div>
</div>
</div>
</div>

<div className="mb-6">
<div className="bg-gray-50 rounded-2xl p-4">
<div className="flex items-center gap-3">
<div className="h-10 w-10 rounded-full bg-white flex items-center justify-center">
<svg className="lucide lucide-tag h-5 w-5 text-pink-500" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><circle cx="7.5" cy="7.5" fill="currentColor"></circle></svg>
</div>
<input className="flex-1 bg-transparent text-[15px] placeholder-gray-500 focus:outline-none font-sans" placeholder="Enter promo code" type="text" />
<button className="px-4 py-2 bg-black text-white rounded-xl text-[13px] font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Apply</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-6">
<h3 className="text-[17px] font-medium font-sans mb-3" style={{}}>Order Summary</h3>
<div className="space-y-2">
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Subtotal</span>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>$310</span>
</div>
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Shipping</span>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>$8</span>
</div>
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: `outline 0.1s ease-in-out`}}>Tax</span>
<span className="font-medium font-sans" style={{transition: `outline 0.1s ease-in-out`}}>$19</span>
</div>
<div className="border-t border-gray-100 pt-2 mt-3">
<div className="flex items-center justify-between text-[17px]">
<span className="font-medium" style={{}}>Total</span>
<span className="font-medium text-pink-500 font-sans" style={{}}>$337</span>
</div>
</div>
</div>
</div>

<div className="h-24"></div>
</div>

<div className="absolute bottom-0 left-0 right-0 bg-gray-100 border-gray-300 border-t pt-6 pr-6 pb-6 pl-6">
<div className="flex items-center justify-between mb-4">
<span className="text-[15px] text-gray-600">Estimated Total (4 items)</span>
<span className="text-[20px] font-semibold text-black">$337</span>
</div>

<div className="mb-4 flex gap-3">

<button className="flex-1 bg-black text-white rounded-2xl pt-4 pb-4 flex items-center justify-center gap-2 active:scale-95 transition-transform">
<svg className="" fill="currentColor" height="20" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="text-[15px] font-semibold">Apple Pay</span>
</button>

<button className="flex-1 flex gap-2 active:scale-95 transition-transform text-white bg-blue-600 rounded-2xl pt-4 pb-4 items-center justify-center" id="aura-emek0x7ij">
<svg className="w-[20px] h-[20px]" fill="none" height="20" strokeWidth="1.5" style={{width: `20px`, height: `20px`, color: `rgb(255, 255, 255)`}} viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"></path>
<path stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"></path>
</svg>
<span className="text-[15px] font-semibold">PayPal</span>
</button>
</div>

<div className="flex items-center gap-3 mb-4">
<div className="flex-1 h-px bg-gray-200"></div>
<span className="text-[13px] text-gray-500 font-sans">or</span>
<div className="flex-1 h-px bg-gray-200"></div>
</div>

<button className="w-full text-[17px] active:scale-95 transition-transform font-semibold text-white bg-pink-500 rounded-2xl pt-4 pb-4 shadow-lg" style={{transition: `outline 0.1s ease-in-out`}}>
    Proceed to Checkout
  </button>
</div>
</div>
</section>
</div>
</main>


    </>
  );
}
