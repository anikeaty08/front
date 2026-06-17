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
      <div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: 'url("https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dbcc86f5-bf82-462d-b569-c5125e487992_3840w.jpg")'}}></div>
<main className="min-h-screen flex pt-4 pr-4 pb-4 pl-4 items-center justify-center">
<div className="flex gap-8 items-center justify-center">

<section className="screen-animate bg-black rounded-[48px] p-1 shadow-[0_40px_80px_rgba(0,0,0,0.4)]" style={{width: '393px', height: '854px'}}>
<div className="bg-white rounded-[44px] h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

<div className="bg-white px-6 pt-3 pb-1">
<div className="flex items-center justify-between text-black text-sm font-semibold">
<span className="font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewbox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="black" strokeWidth="1" width="17" x="1" y="2"></rect>
<rect fill="black" height="4" rx="0.5" width="8" x="3" y="4"></rect>
<rect fill="black" height="2" rx="0.5" width="2" x="19" y="5"></rect>
</svg>
</div>
</div>
</div>
<div className="px-6 pb-6 h-full overflow-y-auto" id="screen1-content">

<div className="flex items-center justify-between mb-6 pt-2">
<div className="flex items-center gap-3">
<img alt="Profile" className="h-10 w-10 rounded-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/3b6e4af7-ac86-4163-b303-578671458c76_800w.jpg" style={{}}/>
<div className="text-base">
<p className="text-gray-600 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Hi, Sophia!</p>
</div>
</div>
<button className="relative h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-shopping-bag h-5 w-5 text-black" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
<span className="absolute -top-1 -right-1 h-3 w-3 bg-pink-500 rounded-full"></span>
</button>
</div>

<h1 className="text-[34px] leading-[1.15] tracking-tight mb-6 font-sans font-medium" style={{}}>Discover your perfect beauty products</h1>

<div className="relative mb-8">
<div className="relative rounded-2xl bg-gray-50 overflow-hidden">
<input className="w-full text-[17px] placeholder-gray-500 focus:outline-none text-black bg-transparent pt-4 pr-14 pb-4 pl-4" placeholder="Search beauty products..." type="text"/>
<button className="absolute right-3 top-1/2 -translate-y-1/2 h-8 w-8 rounded-lg bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-search h-4.5 w-4.5" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</button>
</div>
</div>

<div className="mb-6 -mx-6 px-6">
<div className="flex gap-2 overflow-x-auto pb-2 scrollbar-hide" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>
<button className="segment-btn active flex-shrink-0 px-6 py-3 rounded-2xl bg-black text-white font-semibold text-[15px] transition-all duration-200 font-sans" data-category="skincare" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Skincare
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="makeup" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Makeup
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="fragrance" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Fragrance
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="haircare" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Hair Care
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="bodycare" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Body Care
                </button>
<button className="segment-btn flex-shrink-0 px-6 py-3 rounded-2xl bg-gray-100 text-gray-500 font-medium text-[15px] transition-all duration-200 font-sans" data-category="wellness" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Wellness
                </button>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mb-8" id="featured-cards">

<article className="category-card skincare bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Glow Serum" className="h-36 w-full object-cover" src="https://cdn.midjourney.com/46812196-1459-4b2b-83fa-51233f556b89/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Glow Serum</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Vitamin C</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.8</span>
</div>
</div>
</div>
</article>
<article className="category-card skincare bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Night Cream" className="h-36 w-full object-cover" src="https://cdn.midjourney.com/1db3627e-db40-4682-a6eb-f0bd614b9fb8/0_0.png?w=800&amp;q=80" style={{}}/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div className="">
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Night Cream</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Anti-aging</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.9</span>
</div>
</div>
</div>
</article>

<article className="category-card makeup hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Lipstick" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=800&amp;q=80" style={{}}/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Rouge Lipstick</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Matte Finish</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.7</span>
</div>
</div>
</div>
</article>
<article className="category-card makeup hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Foundation" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1522338242992-e1a54906a8da?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Full Coverage</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Foundation</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.6</span>
</div>
</div>
</div>
</article>

<article className="category-card fragrance hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Perfume" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1541643600914-78b084683601?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Rose Essence</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Eau de Parfum</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.5</span>
</div>
</div>
</div>
</article>
<article className="category-card fragrance hidden bg-white rounded-2xl overflow-hidden shadow-[0_2px_16px_rgba(0,0,0,0.06)] border border-gray-50">
<div className="relative overflow-hidden">
<img alt="Cologne" className="h-36 w-full object-cover" src="https://images.unsplash.com/photo-1615634260167-c8cdede054de?w=800&amp;q=80"/>
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-white/95 backdrop-blur flex items-center justify-center shadow-sm">
<svg className="lucide lucide-heart h-4 w-4 text-black" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
<div className="p-3">
<div className="flex items-center justify-between">
<div>
<p className="text-[15px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Ocean Breeze</p>
<p className="text-[13px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Fresh Cologne</p>
</div>
<div className="flex items-center gap-1 text-[13px]">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.4</span>
</div>
</div>
</div>
</article>
</div>

<div className="mb-6">
<div className="flex items-center justify-between mb-4">
<h2 className="text-[22px] font-sans font-medium" style={{}}>Best sellers</h2>
<button className="h-9 w-9 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-chevron-down h-5 w-5 text-black" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
</div>
<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="h-12 w-12 rounded-2xl overflow-hidden">
<img alt="Hydra Moisturizer" className="h-full w-full object-cover" src="https://cdn.midjourney.com/7f8ec377-96fe-490a-9d00-25df120c520d/0_0.png?w=800&amp;q=80"/>
</div>
<div className="">
<p className="text-[17px] font-semibold font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Hydra Moisturizer</p>
<p className="text-[15px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Daily care</p>
</div>
</div>
<div className="flex items-center gap-1">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-[15px] text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.7</span>
</div>
</div>
</div>

<div className="h-24"></div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="bg-black rounded-full px-6 py-3">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-home h-6 w-6 text-white" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] text-white font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-sparkles h-6 w-6 text-gray-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Discover</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-heart h-6 w-6 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Favorites</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-user h-6 w-6 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Profile</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="screen-animate shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-black rounded-[48px] pt-1 pr-1 pb-1 pl-1" style={{width: '393px', height: '854px'}}>
<div className="bg-white rounded-[44px] h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)]">

<div className="bg-transparent px-6 pt-3 pb-1 absolute top-0 left-0 right-0 z-20">
<div className="flex items-center justify-between text-white text-sm font-semibold">
<span className="font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white rounded-full"></div>
<div className="w-1 h-1 bg-white/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewbox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="white" strokeWidth="1" width="17" x="1" y="2"></rect>
<rect fill="white" height="4" rx="0.5" width="8" x="3" y="4"></rect>
<rect fill="white" height="2" rx="0.5" width="2" x="19" y="5"></rect>
</svg>
</div>
</div>
</div>
<div className="h-full overflow-y-auto">

<div className="relative h-96">
<img alt="Radiance Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/25b17ec2-45e8-4315-99b8-f235a0902505/0_1.png?w=800&amp;q=80"/>
<div className="absolute top-16 left-6">
<button className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
<svg className="lucide lucide-chevron-left h-6 w-6 text-white" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
</div>
<div className="absolute top-16 right-6">
<button className="h-11 w-11 rounded-full bg-white/20 backdrop-blur-lg flex items-center justify-center">
<svg className="lucide lucide-heart h-6 w-6 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>

<div className="px-6 py-6 bg-white rounded-t-[32px] -mt-8 relative z-10">

<div className="flex items-baseline justify-between mb-3">
<h2 className="text-[28px] tracking-tight font-sans font-medium" style={{}}>Radiance Serum</h2>
<p className="text-[24px] tracking-tight text-pink-500 font-sans font-medium" style={{}}>$89</p>
</div>

<div className="flex items-center gap-4 text-base mb-6">
<span className="text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Premium Skincare</span>
<div className="flex items-center gap-1 text-black">
<svg className="lucide lucide-star h-4 w-4 text-orange-400 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>4.9</span>
</div>
</div>

<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-4">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
<button className="minus-btn h-8 w-8 rounded-full bg-white border border-gray-200 flex items-center justify-center shadow-sm transition-all duration-200 hover:scale-105 active:scale-95">
<svg className="lucide lucide-minus h-4 w-4 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="quantity-display text-[17px] font-semibold text-black min-w-[20px] text-center font-sans" style={{transition: 'transform 150ms'}}>1</span>
<button className="plus-btn h-8 w-8 rounded-full bg-pink-500 text-white flex items-center justify-center transition-all duration-200 hover:scale-105 active:scale-95">
<svg className="lucide lucide-plus h-4 w-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<span className="text-[15px] text-gray-500 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Quantity</span>
</div>
<button className="flex items-center gap-3 bg-gray-50 rounded-2xl px-4 py-3">
<svg className="lucide lucide-droplets h-5 w-5 text-black" data-lucide="droplets" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 16.3c2.2 0 4-1.83 4-4.05 0-1.16-.57-2.26-1.71-3.19S7.29 6.75 7 5.3c-.29 1.45-1.14 2.84-2.29 3.76S3 11.1 3 12.25c0 2.22 1.8 4.05 4 4.05z"></path><path d="M12.56 6.6A10.97 10.97 0 0 0 14 3.02c.5 2.5 2 4.9 4 6.5s3 3.5 3 5.5a6.98 6.98 0 0 1-11.91 4.97"></path></svg>
<span className="text-[15px] text-black font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>30ml</span>
</button>
</div>

<p className="text-[15px] leading-6 text-gray-600 mb-8 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>
                Our premium Radiance Serum is formulated with powerful vitamin C and hyaluronic acid to brighten, hydrate, and rejuvenate your skin. This lightweight, fast-absorbing formula helps reduce dark spots, boost collagen production, and gives you that natural glow you've been looking for.
              </p>

<div className="pb-24">
<button className="w-full text-[17px] active:scale-95 transition-transform font-semibold text-white bg-pink-500 rounded-2xl pt-4 pb-4 shadow-lg" style={{transition: 'outline 0.1s ease-in-out'}}>
                  Add to cart
                </button>
</div>
</div>
</div>

<div className="absolute bottom-8 left-6 right-6">
<div className="bg-black rounded-full px-6 py-3">
<div className="flex items-center justify-between">
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-home h-6 w-6 text-gray-400" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Home</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-sparkles h-6 w-6 text-white" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-[10px] text-white font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Discover</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-heart h-6 w-6 text-gray-400" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Favorites</span>
</button>
<button className="flex flex-col items-center gap-1 py-1">
<svg className="lucide lucide-user h-6 w-6 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<span className="text-[10px] text-gray-400 font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Profile</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="screen-animate shadow-[0_40px_80px_rgba(0,0,0,0.4)] bg-black rounded-[48px] pt-1 pr-1 pb-1 pl-1" id="aura-emek0tqmq" style={{width: '393px', height: '854px'}}>
<div className="h-full overflow-hidden relative shadow-[0_4px_20px_rgba(0,0,0,0.08)] bg-white rounded-[44px]">

<div className="bg-white px-6 pt-3 pb-1">
<div className="flex items-center justify-between text-black text-sm font-semibold">
<span className="font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>9:41</span>
<div className="flex items-center gap-1">
<div className="flex gap-1">
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black rounded-full"></div>
<div className="w-1 h-1 bg-black/30 rounded-full"></div>
</div>
<svg className="ml-1" fill="none" height="12" viewbox="0 0 24 12" width="24" xmlns="http://www.w3.org/2000/svg">
<rect height="8" rx="1" stroke="black" strokeWidth="1" width="17" x="1" y="2"></rect>
<rect fill="black" height="4" rx="0.5" width="8" x="3" y="4"></rect>
<rect fill="black" height="2" rx="0.5" width="2" x="19" y="5"></rect>
</svg>
</div>
</div>
</div>
<div className="h-full overflow-y-auto px-6 pb-6">

<div className="flex items-center justify-between mb-6 pt-2">
<button className="h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-chevron-left h-6 w-6 text-black" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<h1 className="text-[22px] font-medium font-sans tracking-tight" style={{}}>Shopping Cart</h1>
<button className="h-11 w-11 rounded-full bg-gray-50 flex items-center justify-center">
<svg className="lucide lucide-trash-2 h-5 w-5 text-black" data-lucide="trash-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 11v6"></path><path d="M14 11v6"></path><path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6"></path><path d="M3 6h18"></path><path d="M8 6V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path></svg>
</button>
</div>

<div className="mb-6" id="aura-emek0j1jc">
<div className="flex gap-2 w-auto bg-green-50 border-green-100 border rounded-xl mb-4 pt-2 pr-2 pb-2 pl-2 items-center" id="aura-emek0mn51">
<div className="h-6 w-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
<svg className="lucide lucide-truck h-3 w-3 text-white" data-lucide="truck" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2"></path><path d="M15 18H9"></path><path d="M19 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></svg>
</div>
<div className="flex-1 min-w-0">
<p className="text-[13px] leading-tight font-medium text-green-700 text-left" id="aura-emek0ox9i">Free shipping on orders $50+</p>
</div>
</div><p className="text-gray-500 text-[15px] mb-4 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>3 items in cart</p>


<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-3 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Radiance Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/25b17ec2-45e8-4315-99b8-f235a0902505/0_1.png?w=800&amp;q=80"/>
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Radiance Serum</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>30ml • Premium Skincare</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>1</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<p className="text-[17px] font-medium text-pink-500 font-sans" style={{}}>$89</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-3 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Glow Serum" className="h-full w-full object-cover" src="https://cdn.midjourney.com/46812196-1459-4b2b-83fa-51233f556b89/0_0.png?w=800&amp;q=80"/>
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Glow Serum</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>25ml • Vitamin C</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>2</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
<p className="text-[17px] font-medium text-pink-500 font-sans" style={{}}>$156</p>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-6 relative">
<button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-gray-50 hover:bg-red-50 flex items-center justify-center transition-colors">
<svg className="lucide lucide-x h-4 w-4 text-gray-600 hover:text-red-500" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<div className="flex items-center gap-4">
<div className="h-16 w-16 rounded-2xl overflow-hidden flex-shrink-0">
<img alt="Night Cream" className="h-full w-full object-cover" src="https://cdn.midjourney.com/1db3627e-db40-4682-a6eb-f0bd614b9fb8/0_0.png?w=800&amp;q=80"/>
</div>
<div className="flex-1 pr-8">
<h3 className="text-[17px] font-medium font-sans mb-1" style={{}}>Night Cream</h3>
<p className="text-[13px] text-gray-500 font-sans mb-2" style={{transition: 'outline 0.1s ease-in-out'}}>50ml • Anti-aging</p>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3 bg-gray-50 rounded-2xl px-3 py-2">
<button className="h-6 w-6 rounded-full bg-white border border-gray-200 flex items-center justify-center">
<svg className="lucide lucide-minus h-3 w-3 text-black" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="text-[15px] font-medium text-black font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>1</span>
<button className="h-6 w-6 rounded-full bg-pink-500 text-white flex items-center justify-center">
<svg className="lucide lucide-plus h-3 w-3" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
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
<svg className="lucide lucide-tag h-5 w-5 text-pink-500" data-lucide="tag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.586 2.586A2 2 0 0 0 11.172 2H4a2 2 0 0 0-2 2v7.172a2 2 0 0 0 .586 1.414l8.704 8.704a2.426 2.426 0 0 0 3.42 0l6.58-6.58a2.426 2.426 0 0 0 0-3.42z"></path><circle cx="7.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<input className="flex-1 bg-transparent text-[15px] placeholder-gray-500 focus:outline-none font-sans" placeholder="Enter promo code" type="text"/>
<button className="px-4 py-2 bg-black text-white rounded-xl text-[13px] font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Apply</button>
</div>
</div>
</div>

<div className="bg-white rounded-2xl border border-gray-50 shadow-[0_2px_16px_rgba(0,0,0,0.06)] p-4 mb-6">
<h3 className="text-[17px] font-medium font-sans mb-3" style={{}}>Order Summary</h3>
<div className="space-y-2">
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Subtotal</span>
<span className="font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>$310</span>
</div>
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Shipping</span>
<span className="font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>$8</span>
</div>
<div className="flex items-center justify-between text-[15px]">
<span className="text-gray-600 font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>Tax</span>
<span className="font-medium font-sans" style={{transition: 'outline 0.1s ease-in-out'}}>$19</span>
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
<svg className="" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.81-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"></path>
</svg>
<span className="text-[15px] font-semibold">Apple Pay</span>
</button>

<button className="flex-1 flex gap-2 active:scale-95 transition-transform text-white bg-blue-600 rounded-2xl pt-4 pb-4 items-center justify-center" id="aura-emek0x7ij">
<svg className="w-[20px] h-[20px]" fill="none" height="20" strokeWidth="1.5" style={{width: '20px', height: '20px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21.3002 8.35C20.6602 7.48 19.6802 7 18.5402 7H12.1102C12.0802 7 12.0602 7.01 12.0402 7.01C11.9402 7.01 11.8502 7.04 11.7502 7.07C11.6702 7.09 11.5802 7.11 11.5002 7.15C11.4202 7.19 11.3502 7.25 11.2802 7.3C11.2002 7.36 11.1302 7.41 11.0702 7.47C11.0102 7.53 10.9702 7.61 10.9302 7.68C10.8702 7.77 10.8202 7.85 10.7802 7.95C10.7702 7.97 10.7502 7.99 10.7502 8.01L8.6102 15.07L7.0702 20.15C6.8402 20.91 7.2602 21.7 8.0202 21.94C8.1502 21.98 8.2902 22 8.4202 22C9.0302 22 9.5902 21.6 9.7802 20.99L11.1702 16.41H16.5502C18.7402 16.41 21.0102 14.56 21.7202 12.21L21.7702 12.03C22.1902 10.67 22.0202 9.32 21.3002 8.35Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"></path>
<path d="M16.3002 3.35C15.6602 2.48 14.6802 2 13.5402 2H7.1102C7.0802 2 7.0602 2.01 7.0302 2.01C6.9302 2.01 6.8402 2.04 6.7402 2.07C6.6602 2.1 6.5802 2.11 6.5002 2.15C6.4202 2.19 6.3502 2.25 6.2802 2.3C6.2002 2.35 6.1302 2.4 6.0602 2.47C6.0002 2.53 5.9602 2.61 5.9202 2.68C5.8702 2.77 5.8202 2.85 5.7802 2.95C5.7702 2.97 5.7502 2.99 5.7502 3.01L3.6102 10.07L2.0702 15.15C1.8402 15.91 2.2602 16.7 3.0202 16.94C3.1502 16.98 3.2902 17 3.4202 17C4.0302 17 4.5902 16.6 4.7802 15.99L6.1702 11.41H11.5502C13.7402 11.41 16.0102 9.56 16.7202 7.21L16.7702 7.03C17.1902 5.67 17.0202 4.32 16.3002 3.35Z" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" stroke-miterlimit="10"></path>
</svg>
<span className="text-[15px] font-semibold">PayPal</span>
</button>
</div>

<div className="flex items-center gap-3 mb-4">
<div className="flex-1 h-px bg-gray-200"></div>
<span className="text-[13px] text-gray-500 font-sans">or</span>
<div className="flex-1 h-px bg-gray-200"></div>
</div>

<button className="w-full text-[17px] active:scale-95 transition-transform font-semibold text-white bg-pink-500 rounded-2xl pt-4 pb-4 shadow-lg" style={{transition: 'outline 0.1s ease-in-out'}}>
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
