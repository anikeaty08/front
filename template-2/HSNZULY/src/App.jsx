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

// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};

}

{

    document.addEventListener('DOMContentLoaded', function() {
      const cardsContainer = document.querySelector('.cards-section');
      const cards = document.querySelectorAll('.feature-card');
      const navButtons = document.querySelectorAll('[id^="nav-"]');
      let activeFeature = 1;

      // Touch/drag handling
      cards.forEach((card, index) => {
        let startX, isDragging = false;
        
        card.addEventListener('mousedown', e => initDrag(e, index + 1));
        card.addEventListener('touchstart', e => {
          e.preventDefault();
          initDrag(e.touches[0], index + 1);
        });

        function initDrag(e, featureId) {
          if (featureId !== activeFeature) return;
          isDragging = true;
          startX = e.clientX;
          document.addEventListener('mousemove', handleDrag);
          document.addEventListener('touchmove', e => handleDrag(e.touches[0]));
          document.addEventListener('mouseup', endDrag);
          document.addEventListener('touchend', endDrag);
        }

        function handleDrag(e) {
          if (!isDragging) return;
          const diff = e.clientX - startX;
          if (diff > 20) {
            card.classList.add('dragging-right');
            card.classList.remove('dragging-left');
          } else if (diff < -20) {
            card.classList.add('dragging-left');
            card.classList.remove('dragging-right');
          } else {
            card.classList.remove('dragging-left', 'dragging-right');
          }
        }

        function endDrag() {
          if (!isDragging) return;
          isDragging = false;
          if (card.classList.contains('dragging-right')) {
            switchToFeature(activeFeature === 1 ? 4 : activeFeature - 1);
          } else if (card.classList.contains('dragging-left')) {
            switchToFeature(activeFeature === 4 ? 1 : activeFeature + 1);
          }
          card.classList.remove('dragging-left', 'dragging-right');
          document.removeEventListener('mousemove', handleDrag);
          document.removeEventListener('touchmove', handleDrag);
          document.removeEventListener('mouseup', endDrag);
          document.removeEventListener('touchend', endDrag);
        }
      });

      // Navigation button handling
      navButtons.forEach(button => {
        button.addEventListener('click', () => {
          const featureId = parseInt(button.id.split('-')[1]);
          switchToFeature(featureId);
        });
      });

      function switchToFeature(featureId) {
        activeFeature = featureId;
        cardsContainer.className = `cards-section feature-${featureId}-active`;
        
        // Update navigation buttons
        navButtons.forEach((button, index) => {
          if (index + 1 === featureId) {
            button.className = 'w-3 h-3 rounded-full bg-teal-500 transition-all scale-125';
          } else {
            button.className = 'w-3 h-3 rounded-full bg-gray-500 hover:bg-gray-300 transition-all';
          }
        });
      }

      // Auto-advance cards every 6 seconds
      setInterval(() => {
        const nextFeature = activeFeature === 4 ? 1 : activeFeature + 1;
        switchToFeature(nextFeature);
      }, 6000);
    });
  
}

{

document.addEventListener('DOMContentLoaded', function() {
  const monthlyBtn = document.getElementById('monthlyBtn');
  const yearlyBtn = document.getElementById('yearlyBtn');
  let isYearly = false;

  // Pricing data
  const pricing = {
    starter: { monthly: 9, yearly: 86 },
    pro: { monthly: 29, yearly: 278 },
    enterprise: { monthly: 99, yearly: 950 }
  };

  function updatePricing() {
    const plans = ['starter', 'pro', 'enterprise'];
    
    plans.forEach(plan => {
      const priceElement = document.getElementById(`${plan}-price`);
      const savingsElement = document.getElementById(`${plan}-savings`);
      
      if (isYearly) {
        const yearlyPrice = Math.floor(pricing[plan].yearly / 12);
        const monthlySavings = (pricing[plan].monthly * 12) - pricing[plan].yearly;
        
        priceElement.textContent = `$${yearlyPrice}`;
        savingsElement.textContent = `Save $${monthlySavings}/year`;
        savingsElement.style.display = 'block';
      } else {
        priceElement.textContent = `$${pricing[plan].monthly}`;
        savingsElement.style.display = 'none';
      }
    });
  }

  monthlyBtn.addEventListener('click', function() {
    if (isYearly) {
      isYearly = false;
      monthlyBtn.className = 'px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full bg-teal-500 text-black font-sans';
      yearlyBtn.className = 'px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full text-gray-400 hover:text-white font-sans';
      updatePricing();
    }
  });

  yearlyBtn.addEventListener('click', function() {
    if (!isYearly) {
      isYearly = true;
      yearlyBtn.className = 'px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full bg-teal-500 text-black font-sans';
      monthlyBtn.className = 'px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full text-gray-400 hover:text-white font-sans';
      updatePricing();
    }
  });
});

function toggleFAQ(num) {
  const content = document.getElementById(`faq-content-${num}`);
  const icon = document.getElementById(`faq-icon-${num}`);
  
  if (content.classList.contains('hidden')) {
    content.classList.remove('hidden');
    icon.style.transform = 'rotate(180deg)';
  } else {
    content.classList.add('hidden');
    icon.style.transform = 'rotate(0deg)';
  }
}

}

{

    // Mobile menu functionality
    const menuBtn = document.getElementById('menuBtn');
    const closeMenu = document.getElementById('closeMenu');
    const mobileMenu = document.getElementById('mobileMenu');

    menuBtn.addEventListener('click', () => {
      mobileMenu.classList.remove('hidden');
    });

    closeMenu.addEventListener('click', () => {
      mobileMenu.classList.add('hidden');
    });

    // Close mobile menu when clicking outside
    mobileMenu.addEventListener('click', (e) => {
      if (e.target === mobileMenu) {
        mobileMenu.classList.add('hidden');
      }
    });

    // Initialize Lucide icons
    lucide.createIcons();
  
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
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" id="aura-spline" src="https://my.spline.design/particlesmoment-kW3xyVny6weIhXJ3vbs2M2bB" width="100%"></iframe></div><div className="fixed top-0 w-full h-screen bg-cover bg-center -z-10" style={{backgroundImage: `url("https://images.unsplash.com/photo-1579548122080-c35fd6820ecb?w=3840&q=80")`}}></div>

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute top-0 -left-4 w-72 h-72 bg-teal-500/5 rounded-full blur-3xl"></div>
<div className="absolute top-1/4 -right-4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-1/3 w-80 h-80 bg-teal-500/5 rounded-full blur-3xl"></div>
</div>

<header className="w-full relative z-20" data-animate="0">
<nav className="max-w-7xl sm:px-6 lg:px-8 sm:pt-8 flex mr-auto ml-auto pt-6 pr-4 pl-4 items-center justify-between">

<div className="flex items-center gap-3 text-xl font-bold tracking-tight">
<div className="relative">
</div>
<span className="gradient-text font-sans" style={{}}>Nexus</span>
</div>

<div className="hidden lg:flex">
<ul className="flex gap-2 glass bg-gray-900/40 border-neutral-50/20 border rounded-full pt-2 pr-3 pb-2 pl-3 shadow-xl backdrop-blur-md items-center">
<li className=""><a className="relative flex items-center hover:bg-gray-800/30 transition-all duration-200 text-sm font-bold text-neutral-950 bg-[#00fffb] rounded-full pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>Dashboard</a></li>
<li className=""><a className="flex items-center hover:text-white hover:bg-gray-800/30 transition-all duration-200 text-sm text-neutral-50/70 rounded-full pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>Portfolio</a></li>
<li className=""><a className="flex items-center hover:text-white hover:bg-gray-800/30 transition-all duration-200 text-sm text-neutral-50/70 rounded-full pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>Analytics</a></li>
<li className=""><a className="flex items-center hover:text-white hover:bg-gray-800/30 transition-all duration-200 text-sm text-neutral-50/70 rounded-full pt-3 pr-6 pb-3 pl-6" href="#" style={{}}>Trading</a></li>
<li className=""><a className="flex items-center gap-2 hover:bg-teal-400 hover:scale-105 transition-all duration-200 text-sm font-medium text-neutral-50/70 rounded-full pt-2.5 pr-5 pb-2.5 pl-5 shadow" href="#" style={{}}><svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> AI Insights</a></li>
</ul>
</div>

<div className="flex items-center gap-3 sm:gap-4">
<button className="hidden sm:flex gap-2 glass hover:bg-gray-900/60 transition-all duration-200 glow-hover text-sm border-neutral-50/20 border rounded-full pt-2.5 pr-5 pb-2.5 pl-5 items-center">
<span className="hidden md:inline font-sans" style={{}}>Connect Wallet</span>
<span className="md:hidden font-sans" style={{}}>Connect</span>
<svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
<button className="lg:hidden flex items-center justify-center w-10 h-10 rounded-full border border-gray-800/50 glass hover:bg-gray-900/60 transition-all duration-200" id="menuBtn">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</button>
</div>
</nav>

<div className="fixed inset-0 z-50 lg:hidden bg-black/95 backdrop-blur-xl hidden" id="mobileMenu">
<div className="absolute top-0 right-0 w-80 sm:w-96 h-full glass bg-gray-900/90 border-l border-gray-800/50 p-6 flex flex-col">
<div className="flex items-center justify-between mb-8">
<div className="flex items-center gap-3 text-lg font-bold">
<svg className="lucide lucide-hexagon w-6 h-6 text-teal-500" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
<span className="gradient-text font-sans" style={{}}>NexusWallet</span>
</div>
<button className="p-2 rounded-full hover:bg-gray-800/60 transition-all duration-200" id="closeMenu">
<svg className="lucide lucide-x w-6 h-6" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
<div className="flex flex-col gap-2 mb-8">
<a className="py-3 px-4 text-base font-medium text-white bg-gray-800/50 rounded-xl font-sans" href="#" style={{}}>Dashboard</a>
<a className="py-3 px-4 text-base text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-xl transition-all duration-200 font-sans" href="#" style={{}}>Portfolio</a>
<a className="py-3 px-4 text-base text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-xl transition-all duration-200 font-sans" href="#" style={{}}>Analytics</a>
<a className="py-3 px-4 text-base text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-xl transition-all duration-200 font-sans" href="#" style={{}}>Trading</a>
<a className="flex items-center gap-2 py-3 px-4 text-base text-gray-300 hover:text-white hover:bg-gray-800/30 rounded-xl transition-all duration-200 font-sans" href="#" style={{}}>
<svg className="lucide lucide-zap w-4 h-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path></svg> AI Insights
          </a>
</div>
<button className="flex items-center justify-center gap-2 bg-teal-500 hover:bg-teal-400 rounded-xl px-6 py-3 font-medium text-white transition-all duration-200 font-sans" style={{}}>
          Connect Wallet <svg className="lucide lucide-wallet w-4 h-4" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</button>
</div>
</div>
</header>

<section className="relative overflow-hidden">
<div className="max-w-7xl sm:px-6 lg:px-8 sm:pt-20 lg:pt-24 grid lg:grid-cols-2 gap-12 lg:gap-16 mr-auto ml-auto pt-16 pr-4 pb-20 pl-4 items-center">

<div className="relative" data-animate="350">

<div className="absolute -top-4 -right-4 w-20 h-20 animate-float bg-teal-500/10 rounded-full blur-xl translate-x-3"></div>
<div className="absolute -bottom-4 -left-4 w-16 h-16 bg-teal-500/10 rounded-full blur-xl animate-float" style={{animationDelay: `-2s`}}></div>
<div className="glass lg:p-8 glow transform hover:scale-[1.02] transition-all duration-500 -translate-x-16 bg-gray-900/60 border-[#00fffb]/20 border rounded-3xl pt-6 pr-6 pb-6 pl-6 shadow-2xl translate-y-16 rotate-5 scale-90 skew-x-15 -skew-y-10">

<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-xl lg:text-2xl mb-1 font-bricolage font-light tracking-tighter" style={{}}>Portfolio Overview</h2>
<p className="text-sm text-gray-400 font-sans" style={{}}>Real-time performance metrics</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
<svg className="lucide lucide-refresh-cw w-5 h-5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>

<div className="grid grid-cols-2 gap-6 mb-8">
<div className="bg-black/60 border-neutral-50/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<span className="block text-sm text-gray-400 mb-1 font-sans" style={{}}>Total Balance</span>
<span className="text-2xl lg:text-3xl text-white font-bricolage font-light tracking-tighter" style={{}}>$847,293</span>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center rounded-full bg-teal-500/20 text-teal-400 px-2 py-1 text-xs font-semibold font-sans" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>+24.7%
                </span>
<span className="text-xs text-gray-500 font-sans" style={{}}>vs last month</span>
</div>
</div>
<div className="bg-black/60 border-neutral-50/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<span className="block text-sm text-gray-400 mb-1 font-sans" style={{}}>Today's PnL</span>
<span className="text-2xl lg:text-3xl text-white font-bricolage font-light tracking-tighter" style={{}}>+$12,847</span>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center rounded-full bg-green-500/20 text-green-400 px-2 py-1 text-xs font-semibold font-sans" style={{}}>
<svg className="lucide lucide-arrow-up w-3 h-3 mr-1" data-lucide="arrow-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>+1.54%
                </span>
<span className="text-xs text-gray-500 font-sans" style={{}}>24h change</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="text-lg font-medium mb-4 font-bricolage font-light tracking-tighter" style={{}}>Top Holdings</h3>
<div className="flex bg-black/40 border-neutral-50/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-orange-500 rounded-full flex items-center justify-center">
<span className="text-white text-xs font-bold">₿</span>
</div>
<div className="">
<span className="block text-sm font-medium font-sans" style={{}}>Bitcoin</span>
<span className="text-xs text-gray-400 font-sans" style={{}}>BTC</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium font-sans" style={{}}>$425,678</span>
<span className="text-xs text-green-400 font-sans" style={{}}>+2.4%</span>
</div>
</div>
<div className="flex bg-black/40 border-neutral-50/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center">
<span className="text-white text-xs font-bold">Ξ</span>
</div>
<div className="">
<span className="block text-sm font-medium font-sans" style={{}}>Ethereum</span>
<span className="text-xs text-gray-400 font-sans" style={{}}>ETH</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium font-sans" style={{}}>$312,845</span>
<span className="text-xs text-green-400 font-sans" style={{}}>+1.8%</span>
</div>
</div>
<div className="flex bg-black/40 border-neutral-50/10 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-purple-500 rounded-full flex items-center justify-center">
<span className="text-white text-xs font-bold">◎</span>
</div>
<div className="">
<span className="block text-sm font-medium font-sans" style={{}}>Solana</span>
<span className="text-xs text-gray-400 font-sans" style={{}}>SOL</span>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium font-sans" style={{}}>$108,770</span>
<span className="text-xs text-red-400 font-sans" style={{}}>-0.7%</span>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-3 mt-8">
<button className="flex gap-2 hover:bg-teal-400 transition-all duration-200 text-sm font-medium text-neutral-950 bg-[#00fffb] rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-center" style={{}}>
<svg className="lucide lucide-plus w-4 h-4" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Buy Crypto
            </button>
<button className="flex gap-2 hover:bg-gray-800/50 transition-all duration-200 text-sm font-medium text-[#00fffb] border-[#00fffb]/20 border rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-center" style={{}}>
<svg className="lucide lucide-send w-4 h-4" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
              Send
            </button>
</div>
</div>

<div className="glass lg:p-8 glow transform hover:scale-[1.02] transition-all duration-500 absolute -top-8 left-8 z-10 -translate-y-1 bg-gray-900/60 border-[#00fffb]/20 border rounded-3xl pt-3 pr-3 pb-3 pl-3 shadow-2xl translate-x-16 translate-y-16 rotate-5 scale-90 skew-x-15 -skew-y-10 rotate-x-10 space-y-5">

<div className="flex items-center justify-between mb-8">
<div className="">
<h2 className="text-xl lg:text-2xl mb-1 font-bricolage font-light tracking-tighter" style={{}}>Crypto Portfolio</h2>
<p className="text-sm text-gray-400 font-sans" style={{}}>Real-time crypto analytics</p>
</div>
<div className="flex items-center gap-2">
<button className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
<svg className="lucide lucide-refresh-cw w-5 h-5" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path></svg>
</button>
<button className="p-2 rounded-xl hover:bg-gray-800/50 transition-all duration-200">
<svg className="lucide lucide-more-horizontal w-5 h-5" data-lucide="more-horizontal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><circle cx="19" cy="12"></circle><circle cx="5" cy="12"></circle></svg>
</button>
</div>
</div>

<div className="bg-black/60 border-neutral-50/10 border rounded-2xl mb-8 pt-6 pr-6 pb-6 pl-6">
<div className="relative h-56">

<div className="absolute inset-0 p-4">

<div className="flex items-end justify-between h-full px-4 gap-4">

<div className="flex items-end gap-2 h-full flex-1">
<div className="w-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: `45%`}}></div>
<div className="w-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: `38%`}}></div>
<div className="w-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: `65%`}}></div>
<div className="w-3 bg-gradient-to-t from-orange-600 to-orange-400 rounded-t" style={{height: `58%`}}></div>
<div className="w-3 bg-gradient-to-t from-orange-600 to-orange-300 rounded-t shadow-md" style={{height: `85%`}}></div>
</div>

<div className="flex items-end gap-2 h-full flex-1">
<div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `35%`}}></div>
<div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `42%`}}></div>
<div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `62%`}}></div>
<div className="w-3 bg-gradient-to-t from-blue-600 to-blue-400 rounded-t" style={{height: `68%`}}></div>
<div className="w-3 bg-gradient-to-t from-blue-600 to-blue-300 rounded-t shadow-md" style={{height: `78%`}}></div>
</div>

<div className="flex items-end gap-2 h-full flex-1">
<div className="w-3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{height: `28%`}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{height: `32%`}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{height: `42%`}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-purple-300 rounded-t shadow-md" style={{height: `58%`}}></div>
<div className="w-3 bg-gradient-to-t from-purple-600 to-purple-400 rounded-t" style={{height: `55%`}}></div>
</div>
</div>

<div className="absolute top-4 right-4 flex items-center gap-4 bg-black/20 rounded-lg px-3 py-2">
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-orange-500 rounded-full"></div>
<span className="text-xs text-gray-300 font-medium">BTC</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-blue-500 rounded-full"></div>
<span className="text-xs text-gray-300 font-medium">ETH</span>
</div>
<div className="flex items-center gap-2">
<div className="w-3 h-3 bg-purple-500 rounded-full"></div>
<span className="text-xs text-gray-300 font-medium">SOL</span>
</div>
</div>

<div className="absolute top-4 left-4 flex items-center gap-2 bg-black/20 rounded-lg px-3 py-2">
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
<span className="text-xs text-gray-300 font-medium">24h</span>
</div>

<div className="absolute bottom-4 left-4 flex gap-2 bg-black/20 rounded-lg pt-2 pr-3 pb-2 pl-3 items-center">
<svg className="text-teal-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-xs text-teal-400 font-medium">+8.7%</span>
</div>

<div className="absolute bottom-4 right-4 bg-black/20 rounded-lg px-3 py-2">
<div className="flex items-center gap-2">
<span className="text-xs text-gray-300 font-medium">Portfolio:</span>
<span className="text-xs text-white font-semibold">$847,293</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-6 mb-8">
<div className="bg-black/60 border-neutral-50/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<span className="block text-sm text-gray-400 mb-1 font-sans" style={{}}>Total Balance</span>
<span className="text-2xl lg:text-3xl text-white font-bricolage font-light tracking-tighter" style={{}}>$847.3K</span>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center rounded-full bg-teal-500/20 text-teal-400 px-2 py-1 text-xs font-semibold font-sans" style={{}}>
<svg className="lucide lucide-trending-up w-3 h-3 mr-1" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>+8.7%
        </span>
<span className="text-xs text-gray-500 font-sans" style={{}}>24h change</span>
</div>
</div>
<div className="bg-black/60 border-neutral-50/10 border rounded-2xl pt-4 pr-4 pb-4 pl-4">
<span className="block text-sm text-gray-400 mb-1 font-sans" style={{}}>Crypto Count</span>
<span className="text-2xl lg:text-3xl text-white font-bricolage font-light tracking-tighter" style={{}}>15</span>
<div className="flex items-center gap-2 mt-2">
<span className="inline-flex items-center rounded-full bg-blue-500/20 text-blue-400 px-2 py-1 text-xs font-semibold font-sans" style={{}}>
<svg className="lucide lucide-coins w-3 h-3 mr-1" data-lucide="coins" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="8" cy="8"></circle><path></path><path></path><path></path></svg>Coins
        </span>
<span className="text-xs text-gray-500 font-sans" style={{}}>Diversified</span>
</div>
</div>
</div>

</div>
</div>

<div className="relative z-10">
<div className="inline-flex items-center gap-2 glass bg-gray-900/40 text-xs uppercase tracking-wide text-gray-300 rounded-full px-4 py-2 border border-gray-800/50 mb-8 glow" data-animate="100">
<svg className="lucide lucide-shield-check w-3.5 h-3.5 text-teal-500" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<span className="font-sans" style={{}}>Bank-Grade Security</span>
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
</div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-black leading-[0.9] tracking-tight mb-8" data-animate="150">
<span className="gradient-text font-light tracking-tighter font-bricolage" id="aura-emdxzmggx" style={{}}>The Future of</span>
<span className="font-light text-[#00fffb] tracking-tighter font-bricolage" id="aura-emdxzmiwp" style={{}}>Digital Wealth</span>
<span className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-light text-gray-400 tracking-tighter font-bricolage" id="aura-emdxzmjix" style={{}}>Management</span>
</h1>
<p className="sm:text-xl lg:text-2xl max-w-2xl leading-relaxed text-sm font-light text-gray-400 tracking-tighter mb-12" data-animate="200">
          Experience next-generation cryptocurrency management with AI-powered insights, institutional-grade security, and seamless DeFi integration. Built for the modern investor.
        </p>
<div className="flex flex-col sm:flex-row items-start sm:items-center gap-4 mb-16" data-animate="250">
<button className="group flex gap-3 hover:bg-teal-400 hover:shadow-2xl hover:shadow-teal-500/25 transition-all duration-300 transform hover:scale-105 glow text-base font-semibold bg-[#00fffb] rounded-2xl pt-4 pr-8 pb-4 pl-8 shadow-xl items-center">
<span className="text-neutral-950" style={{}}>Start Trading Now</span>
</button>
<button className="flex gap-3 glass hover:bg-gray-900/60 transition-all duration-300 glow-hover text-base text-[#00fffb] border-[#00fffb]/20 border rounded-2xl pt-4 pr-8 pb-4 pl-8 items-center">
<span className="font-sans" style={{}}>Watch Demo</span>
</button>
</div>
</div>
</div>
</section>

<section className="lg:py-32 relative pt-10 pb-10">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-0 pl-0">
<div className="grid lg:grid-cols-2 gap-12 items-center">

<div className="space-y-8">


<div className="space-y-6">
<div className="mb-6">
<h3 className="text-5xl font-light text-white tracking-tight font-bricolage mb-6">Advanced Features Built for Professionals</h3>
<p className="text-gray-400">Leverage cutting-edge technology and institutional-grade tools to maximize your cryptocurrency investments</p>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-teal-400 rounded-full"></div>
<span className="text-gray-300 font-sans">AI-powered market analysis</span>
</div>
<div className="flex gap-3 items-center">
<div className="w-2 h-2 bg-blue-400 rounded-full"></div>
<span className="text-gray-300 font-sans">Bank-grade security protection</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-purple-400 rounded-full"></div>
<span className="text-gray-300 font-sans">Professional trading tools</span>
</div>
<div className="flex items-center gap-3">
<div className="w-2 h-2 bg-green-400 rounded-full"></div>
<span className="text-gray-300 font-sans">DeFi protocol integration</span>
</div>
</div>
</div>

<div className="flex flex-col gap-6 items-center">
<div className="flex justify-center" style={{height: `32rem`}}>
<div className="cards-section feature-1-active" style={{height: `32rem`, '--_offset-steps': `4rem`, '--_scale-steps': `10`, '--_opacity-steps': `15`, '--_offset-steps-two': `calc(var(--_offset-steps) * -1)`, '--_offset-steps-three': `calc(var(--_offset-steps) * -2)`, '--scale-steps-two': `calc(1 - var(--_scale-steps) * 0.01)`, '--scale-steps-three': `calc(1 - var(--_scale-steps) * 0.02)`, '--opacity-steps-two': `calc(1 - var(--_opacity-steps) * 0.015)`, '--opacity-steps-three': `calc(1 - var(--_opacity-steps) * 0.03)`, display: `grid`, gridTemplateAreas: `'stack'`, width: `min(calc(100% - 2rem), 26rem)`, perspective: `1000px`}}>

<div className="feature-card glass glow bg-gray-900/60 border-[#00fffb]/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{gridArea: `stack`, translate: `var(--_offset) 0`, order: `var(--_order)`, zIndex: `var(--_order)`, scale: `var(--_scale)`, opacity: `var(--_opacity)`, cursor: `grab`, userSelect: `none`, transformStyle: `preserve-3d`, height: `32rem`, '--_order': `var(--_1-order)`, '--_scale': `var(--_1-scale)`, '--_opacity': `var(--_1-opacity)`, '--_offset': `var(--_1-offset)`}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-teal-500/20 rounded-xl flex items-center justify-center relative">
<svg className="w-6 h-6 text-teal-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle className="" cx="12" cy="12"></circle><path></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-teal-500 rounded-full animate-pulse"></div>
</div>
<div className="">
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">AI Analytics</span>
<h3 className="text-xl font-medium font-bricolage font-light tracking-tighter">Smart Insights</h3>
</div>
</div>
<p className="text-gray-300 mb-6 font-sans text-sm">
          Advanced machine learning algorithms analyze market trends and provide personalized investment recommendations in real-time.
        </p>

<div className="space-y-3 mb-6">
<div className="flex gap-3 bg-black/40 border-neutral-50/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 items-center">
<div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
<svg className="text-teal-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white">Predictive Analysis</div>
<div className="text-xs text-gray-400 font-sans">Market trend forecasting</div>
</div>
</div>
<div className="flex gap-3 bg-black/40 border-neutral-50/10 border rounded-lg pt-3 pr-3 pb-3 pl-3 items-center">
<div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
<svg className="text-teal-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Risk Assessment</div>
<div className="text-xs text-gray-400 font-sans">Portfolio optimization</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center bg-black/40 border-neutral-50/10 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="text-lg font-semibold text-teal-400 font-sans">94.7%</div>
<div className="text-xs text-gray-400 font-sans">Accuracy Rate</div>
</div>
<div className="text-center bg-black/40 border-neutral-50/10 border rounded-lg pt-3 pr-3 pb-3 pl-3">
<div className="text-lg font-semibold text-teal-400 font-sans">{"<"}1ms</div>
<div className="text-xs text-gray-400 font-sans">Response Time</div>
</div>
</div>
<button className="w-full hover:bg-teal-500/30 transition-colors flex gap-2 font-medium text-neutral-950 bg-[#00fffb] rounded-xl pt-3 pr-4 pb-3 pl-4 items-center justify-center">
          
          Explore AI Analytics
        </button>
</div>
</div>

<div className="feature-card glass glow bg-gray-900/60 border-[#00fffb]/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{gridArea: `stack`, translate: `var(--_offset) 0`, order: `var(--_order)`, zIndex: `var(--_order)`, scale: `var(--_scale)`, opacity: `var(--_opacity)`, cursor: `grab`, userSelect: `none`, transformStyle: `preserve-3d`, height: `32rem`, '--_order': `var(--_2-order)`, '--_scale': `var(--_2-scale)`, '--_opacity': `var(--_2-opacity)`, '--_offset': `var(--_2-offset)`}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-blue-500/20 rounded-xl flex items-center justify-center relative">
<svg className="w-6 h-6 text-blue-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full"></div>
</div>
<div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Security</span>
<h3 className="text-xl font-medium font-bricolage font-light tracking-tighter">Bank-Grade Protection</h3>
</div>
</div>
<p className="text-gray-300 mb-6 font-sans text-sm">
          Multi-layer security with hardware wallet integration, biometric authentication, and insurance coverage up to $1M per account.
        </p>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Biometric Auth</div>
<div className="text-xs text-gray-400 font-sans">Face ID & Fingerprint</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-blue-500/20 rounded-lg flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18"></rect><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Hardware Wallets</div>
<div className="text-xs text-gray-400 font-sans">Ledger & Trezor support</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-blue-400 font-sans">$1M</div>
<div className="text-xs text-gray-400 font-sans">Insurance</div>
</div>
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-blue-400 font-sans">256-bit</div>
<div className="text-xs text-gray-400 font-sans">Encryption</div>
</div>
</div>
<button className="w-full py-3 px-4 bg-blue-500/20 hover:bg-blue-500/30 rounded-xl font-medium transition-colors font-sans text-blue-300 flex items-center justify-center gap-2">
<svg className="text-blue-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
          Learn About Security
        </button>
</div>
</div>

<div className="feature-card glass glow bg-gray-900/60 border-[#00fffb]/20 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{gridArea: `stack`, translate: `var(--_offset) 0`, order: `var(--_order)`, zIndex: `var(--_order)`, scale: `var(--_scale)`, opacity: `var(--_opacity)`, cursor: `grab`, userSelect: `none`, transformStyle: `preserve-3d`, height: `32rem`, '--_order': `var(--_3-order)`, '--_scale': `var(--_3-scale)`, '--_opacity': `var(--_3-opacity)`, '--_offset': `var(--_3-offset)`}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-purple-500/20 rounded-xl flex items-center justify-center relative">
<svg className="w-6 h-6 text-purple-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-purple-500 rounded-full animate-pulse"></div>
</div>
<div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">Trading</span>
<h3 className="text-xl font-medium font-bricolage font-light tracking-tighter">Advanced Tools</h3>
</div>
</div>
<p className="text-gray-300 mb-6 font-sans text-sm">
          Professional trading tools with limit orders, stop-losses, automated strategies, and direct DeFi protocol access.
        </p>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Order Types</div>
<div className="text-xs text-gray-400 font-sans">Market, Limit, Stop-Loss</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-purple-500/20 rounded-lg flex items-center justify-center">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12"></circle><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Auto Trading</div>
<div className="text-xs text-gray-400 font-sans">Strategy automation</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-purple-400 font-sans">15+</div>
<div className="text-xs text-gray-400 font-sans">Order Types</div>
</div>
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-purple-400 font-sans">{"<"}50ms</div>
<div className="text-xs text-gray-400 font-sans">Execution</div>
</div>
</div>
<button className="w-full py-3 px-4 bg-purple-500/20 hover:bg-purple-500/30 rounded-xl font-medium transition-colors font-sans text-purple-300 flex items-center justify-center gap-2">
<svg className="text-purple-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
          Start Trading
        </button>
</div>
</div>

<div className="feature-card glass glow bg-gray-900/60 border-[#00fffb]/30 border rounded-2xl pt-6 pr-6 pb-6 pl-6" style={{gridArea: `stack`, transition: `600ms cubic-bezier 0.2, 1)`, translate: `var(--_offset) 0`, order: `var(--_order)`, zIndex: `var(--_order)`, scale: `var(--_scale)`, opacity: `var(--_opacity)`, cursor: `grab`, userSelect: `none`, transformStyle: `preserve-3d`, height: `32rem`, '--_order': `var(--_4-order)`, '--_scale': `var(--_4-scale)`, '--_opacity': `var(--_4-opacity)`, '--_offset': `var(--_4-offset)`}}>
<div className="flex flex-col h-full">
<div className="flex items-center gap-3 mb-6">
<div className="w-12 h-12 bg-green-500/20 rounded-xl flex items-center justify-center relative">
<svg className="w-6 h-6 text-green-500" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
<div className="absolute -top-1 -right-1 w-3 h-3 bg-green-500 rounded-full animate-pulse"></div>
</div>
<div>
<span className="text-xs uppercase tracking-wide text-gray-300 font-medium font-sans">DeFi</span>
<h3 className="text-xl font-medium font-bricolage font-light tracking-tighter">Protocol Access</h3>
</div>
</div>
<p className="text-gray-300 mb-6 font-sans text-sm">
          Direct access to major DeFi protocols for lendingidity provision with one-click interactions.
        </p>

<div className="space-y-3 mb-6">
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Yield Farming</div>
<div className="text-xs text-gray-400 font-sans">Auto-compound rewards</div>
</div>
</div>
<div className="flex items-center gap-3 p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="w-8 h-8 bg-green-500/20 rounded-lg flex items-center justify-center">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path></svg>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-white font-sans">Liquidity Pools</div>
<div className="text-xs text-gray-400 font-sans">Earn trading fees</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 gap-4 mb-6">
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-green-400 font-sans">50+</div>
<div className="text-xs text-gray-400 font-sans">Protocols</div>
</div>
<div className="text-center p-3 bg-black/40 rounded-lg border border-gray-800/30">
<div className="text-lg font-semibold text-green-400 font-sans">12.3%</div>
<div className="text-xs text-gray-400 font-sans">Avg APY</div>
</div>
</div>
<button className="w-full py-3 px-4 bg-green-500/20 hover:bg-green-500/30 rounded-xl font-medium transition-colors font-sans text-green-300 flex items-center justify-center gap-2">
<svg className="text-green-400" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path></path><path></path><path></path><path></path><path></path></svg>
          Explore DeFi
        </button>
</div>
</div>
</div>
</div>

</div>
</div>


</div>
</section><section className="relative lg:py-32 pt-20 pb-20">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 glass bg-gray-900/40 text-xs uppercase tracking-wide text-gray-300 rounded-full px-4 py-2 border border-gray-800/50 mb-8 glow">
<svg className="text-teal-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12"></circle>
<ellipse cx="12" cy="12" rx="8" ry="4"></ellipse>
<ellipse cx="12" cy="12" rx="4" ry="8" transform="rotate(90 12 12)"></ellipse>
</svg>
<span className="font-sans">Global Platform</span>
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-bricolage mb-6">
      Unified Crypto <span className="text-[#00fffb]">Ecosystem</span>
</h2>
<p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
      Connect your trading, analytics, and DeFi activities across one powerful, integrated platform
    </p>
</div>

<div className="w-full flex flex-col md:flex-row md:items-start relative overflow-hidden glow bg-gradient-to-br from-teal-600/90 to-blue-600/80 bg-[url(/assets/aeeb3eee-baa6-48b0-9a7c-9115e72d353d_1600w.jpg)] bg-cover rounded-2xl mb-8 pt-10 pr-8 pb-10 pl-8 shadow-xl items-center">
<div className="flex-shrink-0 mr-0 md:mr-8 mb-6 md:mb-0">
</div>
<div className="flex-1">
<h2 className="md:text-3xl text-2xl font-semibold text-white tracking-tight font-bricolage mb-4">Unified Global Platform</h2>
<p className="text-lg text-white/80 mb-6">Connect your teams, data, and workflows wherever you are—unified, secure, and lightning fast across all crypto markets.</p>
<div className="flex gap-6 items-center">
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium font-sans">Bank-Grade Security</div>
<div className="text-white/70 text-xs font-sans">256-bit encryption</div>
</div>
</div>
<div className="flex items-center gap-3">
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center">
<svg className="text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
</div>
<div className="">
<div className="text-white text-sm font-medium font-sans">Real-Time Data</div>
<div className="text-white/70 text-xs font-sans">Sub-second updates</div>
</div>
</div>
</div>
</div>
</div>


<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="md:col-span-2 flex flex-col glow hover:scale-105 transition-all duration-300 bg-gradient-to-br from-purple-700/90 to-cyan-700/80 bg-[url(/assets/16c37243-0be0-4c6a-b179-5d03c3ca928d_1600w.jpg)] bg-cover rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-lg justify-between">
<div className="flex items-center mb-6">
<div className="flex-1">
<h3 className="text-white text-xl font-medium font-bricolage tracking-tight">Powerful Integrations</h3>
<p className="text-white/70 text-sm font-sans">50+ DeFi Protocol Connections</p>
</div>
</div>
<div className="">
<p className="text-white/80 mb-6 font-sans">Streamline your crypto stack with hundreds of native connectors, API access, and no-code extensions for every major DeFi protocol.</p>
<div className="grid grid-cols-3 gap-4 mb-6">
<div className="bg-white/10 rounded-lg p-3 text-center">
<div className="text-white text-lg font-medium font-bricolage">$2.3B+</div>
<div className="text-white/70 text-xs font-sans">Total Volume</div>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<div className="text-white text-lg font-medium font-bricolage">50+</div>
<div className="text-white/70 text-xs font-sans">Protocols</div>
</div>
<div className="bg-white/10 rounded-lg p-3 text-center">
<div className="text-white text-lg font-medium font-bricolage">15 Chains</div>
<div className="text-white/70 text-xs font-sans">Supported</div>
</div>
</div>
<div className="flex items-center flex-wrap gap-2">
<span className="px-3 py-1 text-sm rounded-lg bg-white/20 text-white font-sans flex items-center gap-1">
<div className="w-4 h-4 bg-orange-500 rounded-full"></div>
            Uniswap
          </span>
<span className="px-3 py-1 text-sm rounded-lg bg-white/20 text-white font-sans flex items-center gap-1">
<div className="w-4 h-4 bg-green-500 rounded-full"></div>
            Compound
          </span>
<span className="px-3 py-1 text-sm rounded-lg bg-white/20 text-white font-sans flex items-center gap-1">
<div className="w-4 h-4 bg-blue-500 rounded-full"></div>
            Aave
          </span>
<span className="px-2 py-1 text-xs rounded-lg bg-white/10 text-white/70 font-sans">+47 more</span>
</div>
</div>
</div>
<div className="glass bg-gray-900/60 border border-gray-800/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between hover:scale-105 transition-all duration-300 glow">
<div className="flex items-center mb-4">
<div className="">
<h3 className="text-white text-lg font-medium font-bricolage tracking-tight">Instant Alerts</h3>
<p className="text-gray-400 text-xs font-sans">Real-time notifications</p>
</div>
</div>
<p className="text-gray-300 text-sm font-sans mb-4">Stay updated with real-time price alerts, portfolio changes, and market notifications.</p>
<div className="space-y-3">
<div className="flex items-center justify-between text-xs">
<span className="text-gray-400 font-sans">Price Alerts</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-400 font-sans">Active</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-400 font-sans">Portfolio Changes</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-400 font-sans">Active</span>
</div>
</div>
<div className="flex items-center justify-between text-xs">
<span className="text-gray-400 font-sans">News & Updates</span>
<div className="flex items-center gap-1">
<div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
<span className="text-green-400 font-sans">Active</span>
</div>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<div className="glass bg-gray-900/60 border border-gray-800/50 rounded-2xl shadow-lg p-6 flex flex-col justify-between md:col-span-1 hover:scale-105 transition-all duration-300 glow">
<div className="flex items-center mb-4">
<div className="">
<h3 className="text-white text-lg font-medium font-bricolage tracking-tight">Access Control</h3>
<p className="text-gray-400 text-xs font-sans">Role-based permissions</p>
</div>
</div>
<p className="text-gray-300 text-sm font-sans mb-4">Flexible permissions for teams & trading partners.</p>
<div className="space-y-2 text-xs">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-gray-300 font-sans">Admin Controls</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-gray-300 font-sans">Audit Logs</span>
</div>
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-blue-500/20 rounded flex items-center justify-center">
<svg className="text-blue-400" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-gray-300 font-sans">Multi-Signature</span>
</div>
</div>
</div>
<div className="md:col-span-2 flex flex-col glow hover:scale-105 transition-all duration-300 bg-gradient-to-br from-emerald-600/90 to-teal-500/80 bg-[url(/assets/1aa813b3-2a85-4e60-9b3c-256572f920ab_1600w.jpg)] bg-cover rounded-2xl pt-8 pr-8 pb-8 pl-8 shadow-lg justify-between">
<div className="flex items-center mb-6">
<div className="flex-1">
<h3 className="text-white text-xl font-medium font-bricolage tracking-tight">Performance Dashboard</h3>
<p className="text-white/70 text-sm font-sans">Advanced Analytics & Reporting</p>
</div>
</div>
<div className="">
<p className="text-white/80 mb-6 font-sans">Visualize key metrics, monitor portfolio performance, and track trading goals—all in one place with real-time updates.</p>
<div className="grid grid-cols-3 gap-6">
<div className="text-center">
<div className="bg-white/10 rounded-lg p-3 mb-2">
<div className="text-2xl text-white font-medium font-bricolage">99.9%</div>
<div className="text-sm text-emerald-100 font-sans">Uptime</div>
</div>
<div className="text-xs text-white/70 font-sans">Service Reliability</div>
</div>
<div className="text-center">
<div className="bg-white/10 rounded-lg p-3 mb-2">
<div className="text-2xl text-white font-medium font-bricolage">1.2M</div>
<div className="text-sm text-emerald-100 font-sans">Users</div>
</div>
<div className="text-xs text-white/70 font-sans">Active Traders</div>
</div>
<div className="text-center">
<div className="bg-white/10 rounded-lg p-3 mb-2">
<div className="text-2xl text-white font-medium font-bricolage">54ms</div>
<div className="text-sm text-emerald-100 font-sans">Response</div>
</div>
<div className="text-xs text-white/70 font-sans">Avg Latency</div>
</div>
</div>
</div>
</div>
</div>
</div></section><section className="relative lg:py-32 pt-20 pb-20">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pr-4 pl-4" style={{'--backdrop': `hsl(0 0% 60% / 0.12)`, '--radius': `14`, '--border': `2`, '--backup-border': `var(--backdrop)`, '--size': `200`, '--x': `0`, '--y': `0`, '--xp': `0`, '--yp': `0`}}>


<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 glass bg-gray-900/40 text-xs uppercase tracking-wide text-gray-300 rounded-full px-4 py-2 border border-gray-800/50 mb-8 glow">
<svg className="text-teal-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
<span className="font-sans">Testimonials</span>
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-bricolage mb-6">
      Trusted by <span className="text-[#00fffb]">100,000+</span> Users
    </h2>
<p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
      See what our community of traders, investors, and DeFi enthusiasts have to say about their experience
    </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">

<div className="glow-card backdrop-blur-sm p-8 floating-animation group">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-teal-500 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "This platform has completely transformed my crypto trading. The AI analytics helped me increase my portfolio by 150% in just 8 months. Absolutely incredible!"
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-blue-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm">SA</span>
</div>
<div>
<div className="text-white font-medium font-sans">Sarah Anderson</div>
<div className="text-gray-400 text-sm font-sans">Professional Trader</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="font-sans">Verified User</span>
</div>
</div>

<div className="glow-card backdrop-blur-sm p-8 floating-animation group">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-blue-500 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "The DeFi integration is seamless and the security features give me complete peace of mind. Best crypto platform I've used in 5 years of trading."
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-purple-400 to-pink-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm">MC</span>
</div>
<div className="">
<div className="text-white font-medium font-sans">Michael Chen</div>
<div className="text-gray-400 text-sm font-sans">Institutional Investor</div>
</div>
</div>
<div className="mt-4 text-xs text-gray-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="font-sans">Verified User</span>
</div>
</div>

<div className="glow-card backdrop-blur-sm p-8 floating-animation group">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-green-500 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon className="" points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "Perfect for DeFi enthusiasts! The yield farming tools and automated strategies have revolutionized my passive income approach. Five stars!"
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-green-400 to-teal-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm">ER</span>
</div>
<div className="">
<div className="text-white font-medium font-sans">Emily Rodriguez</div>
<div className="text-gray-400 text-sm font-sans">DeFi Enthusiast</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="font-sans">Verified User</span>
</div>
</div>

<div className="glow-card backdrop-blur-sm p-8 floating-animation group">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-orange-500 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "As a crypto newcomer, I was intimidated by trading. This platform made everything so intuitive and educational. Now I'm confidently growing my portfolio!"
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-orange-400 to-red-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm">DJ</span>
</div>
<div>
<div className="text-white font-medium font-sans">David Johnson</div>
<div className="text-gray-400 text-sm font-sans">Crypto Newcomer</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="font-sans">Verified User</span>
</div>
</div>

<div className="glow-card floating-animation group pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path className=""></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "The automated staking and yield optimization features have made my passive income strategy effortless. Excellent platform for long-term investors!"
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-gradient-to-br from-blue-400 to-indigo-500 rounded-full flex items-center justify-center">
<span className="text-white font-semibold text-sm">LK</span>
</div>
<div>
<div className="text-white font-medium font-sans">Lisa Kim</div>
<div className="text-gray-400 text-sm font-sans">Passive Income Investor</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
</svg></div></div><div className="glow-card floating-animation group pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="mb-6">
<svg className="quote-icon w-8 h-8 mb-4 text-blue-400 opacity-60" fill="currentColor" viewBox="0 0 24 24">
<path></path>
</svg>
<div className="flex items-center gap-1 mb-4">
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
<svg className="star-filled" fill="currentColor" height="16" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="12,2 15.09,8.26 22,9.27 17,14.14 18.18,21.02 12,17.77 5.82,21.02 7,14.14 2,9.27 8.91,8.26"></polygon>
</svg>
</div>
</div>
<p className="text-gray-300 mb-6 leading-relaxed italic font-sans">
        "The automated staking and yield optimization features have made my passive income strategy effortless. Excellent platform for long-term investors!"
      </p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 flex bg-gradient-to-r from-orange-400 to-pink-400 rounded-full items-center justify-center">
<span className="text-sm font-semibold text-white">SS</span>
</div>
<div className="">
<div className="font-medium text-white">Sandra Smith</div>
<div className="text-sm text-gray-400">UX Designer</div>
</div>
</div>
<div className="mt-4 flex items-center gap-2 text-xs text-gray-500">
<svg className="" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
</svg></div></div></div></div></section><section className="relative lg:py-32 pt-20 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

<div className="text-center mb-16">
<div className="inline-flex items-center gap-2 glass bg-gray-900/40 text-xs uppercase tracking-wide text-gray-300 rounded-full px-4 py-2 border border-gray-800/50 mb-8 glow">
<svg className="text-teal-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<rect height="14" rx="2" width="20"></rect>
<line></line>
</svg>
<span className="font-sans">Pricing Plans</span>
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
</div>
<h2 className="text-4xl sm:text-5xl lg:text-6xl font-light text-white tracking-tight font-bricolage mb-6">
        Choose Your <span className="text-[#00fffb]">Perfect Plan</span>
</h2>
<p className="text-xl text-gray-400 max-w-3xl mx-auto font-sans">
        From individuals to institutions, we have the right plan to accelerate your crypto journey
      </p>
</div>

<div className="flex items-center justify-center mb-12">
<div className="glass bg-gray-900/60 border border-gray-800/50 rounded-full p-2 glow">
<div className="flex items-center">
<button className="transition-all duration-300 text-sm font-medium text-black bg-[#00fffb] rounded-full pt-2 pr-6 pb-2 pl-6" id="monthlyBtn">
            Monthly
          </button>
<button className="px-6 py-2 text-sm font-medium transition-all duration-300 rounded-full text-gray-400 hover:text-white font-sans" id="yearlyBtn">
            Yearly
          </button>
</div>
</div>
<div className="ml-4 flex items-center gap-2">
<span className="text-sm font-medium text-[#00fffb]">Save 20%</span>
<div className="w-2 h-2 bg-teal-500 rounded-full animate-pulse"></div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">

<div className="glass bg-gray-900/60 border border-gray-800/50 rounded-2xl p-8 glow hover:scale-105 transition-all duration-300 group">
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2 font-bricolage tracking-tight">Starter</h3>
<p className="text-gray-400 text-sm font-sans">Perfect for crypto beginners</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-light text-white font-bricolage tracking-tight" id="starter-price">$9</span>
<span className="text-gray-400 text-sm font-sans">/month</span>
</div>
<div className="text-xs text-teal-400 font-sans mt-1" id="starter-savings" style={{display: `none`}}>
            Save $22/year
          </div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Basic portfolio tracking</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">5 supported cryptocurrencies</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Mobile app access</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Email support</span>
</li>
</ul>
<button className="w-full py-3 px-4 border border-gray-700 hover:border-gray-600 rounded-xl font-medium transition-colors font-sans text-gray-300 hover:text-white">
          Get Started
        </button>
</div>

<div className="glass bg-gray-900/60 border border-teal-500/50 rounded-2xl p-8 glow hover:scale-105 transition-all duration-300 group relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<div className="text-xs font-medium text-black bg-[#00fffb] rounded-full pt-1 pr-4 pb-1 pl-4">
            Most Popular
          </div>
</div>
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2 font-bricolage tracking-tight">Pro</h3>
<p className="text-gray-400 text-sm font-sans">For serious traders and investors</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-light text-white font-bricolage tracking-tight" id="pro-price">$29</span>
<span className="text-gray-400 text-sm font-sans">/month</span>
</div>
<div className="text-xs text-teal-400 font-sans mt-1" id="pro-savings" style={{display: `none`}}>
            Save $70/year
          </div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Advanced portfolio analytics</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">500+ supported cryptocurrencies</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">AI-powered insights</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Advanced trading tools</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">DeFi protocol access</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Priority support</span>
</li>
</ul>
<button className="w-full hover:bg-teal-400 transition-colors font-medium text-black bg-[#00fffb] rounded-xl pt-3 pr-4 pb-3 pl-4">
          Start Pro Trial
        </button>
</div>

<div className="glass bg-gray-900/60 border border-gray-800/50 rounded-2xl p-8 glow hover:scale-105 transition-all duration-300 group">
<div className="mb-8">
<h3 className="text-xl font-medium text-white mb-2 font-bricolage tracking-tight">Enterprise</h3>
<p className="text-gray-400 text-sm font-sans">Built for institutions and teams</p>
</div>
<div className="mb-8">
<div className="flex items-baseline gap-2">
<span className="text-4xl font-light text-white font-bricolage tracking-tight" id="enterprise-price">$99</span>
<span className="text-gray-400 text-sm font-sans">/month</span>
</div>
<div className="text-xs text-teal-400 font-sans mt-1" id="enterprise-savings" style={{display: `none`}}>
            Save $238/year
          </div>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Unlimited portfolios</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Team collaboration tools</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Custom API integrations</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">White-label solutions</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">Dedicated account manager</span>
</li>
<li className="flex items-start gap-3">
<svg className="text-teal-500 mt-0.5 flex-shrink-0" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path></path>
<path></path>
</svg>
<span className="text-gray-300 text-sm font-sans">24/7 phone support</span>
</li>
</ul>
<button className="w-full py-3 px-4 border border-gray-700 hover:border-gray-600 rounded-xl font-medium transition-colors font-sans text-gray-300 hover:text-white">
          Contact Sales
        </button>
</div>
</div>

</div>
</section><footer className="relative bg-black/50 border-gray-800/50 border-t">
<div className="max-w-7xl sm:px-6 lg:px-8 mr-auto ml-auto pt-16 pr-4 pb-16 pl-4">

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">

<div className="space-y-6">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-teal-500/20 rounded-lg flex items-center justify-center">
<svg className="text-teal-500" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</div>
<span className="text-xl font-medium text-white font-bricolage tracking-tight">Nexus</span>
</div>
<p className="text-gray-400 font-sans text-sm leading-relaxed">
          The future of digital wealth management. Secure, intelligent, and designed for the modern investor.
        </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 glass bg-gray-900/60 border border-gray-800/50 rounded-xl flex items-center justify-center hover:border-teal-500/50 transition-all duration-300 group" href="#">
<svg className="text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<a className="w-10 h-10 glass bg-gray-900/60 border border-gray-800/50 rounded-xl flex items-center justify-center hover:border-teal-500/50 transition-all duration-300 group" href="#">
<svg className="text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
<a className="w-10 h-10 glass bg-gray-900/60 border border-gray-800/50 rounded-xl flex items-center justify-center hover:border-teal-500/50 transition-all duration-300 group" href="#">
<svg className="text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
<rect height="12" width="4"></rect>
<circle cx="4" cy="4"></circle>
</svg>
</a>
<a className="w-10 h-10 glass bg-gray-900/60 border border-gray-800/50 rounded-xl flex items-center justify-center hover:border-teal-500/50 transition-all duration-300 group" href="#">
<svg className="text-gray-400 group-hover:text-teal-400 transition-colors" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path></path>
</svg>
</a>
</div>
</div>

<div className="space-y-6">
<h3 className="text-lg font-medium text-white font-bricolage tracking-tight">Platform</h3>
<ul className="space-y-4">
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Dashboard</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Portfolio Tracker</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Trading Tools</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">DeFi Hub</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">AI Analytics</a></li>
<li className=""></li>
</ul>
</div>

<div className="space-y-6">
<h3 className="text-lg font-medium text-white font-bricolage tracking-tight">Resources</h3>
<ul className="space-y-4">
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Help Center</a></li>
<li><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">API Documentation</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Security Guide</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Trading Academy</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Market Research</a></li>
<li className=""></li>
</ul>
</div>

<div className="space-y-6">
<h3 className="text-lg font-medium text-white font-bricolage tracking-tight">Company</h3>
<ul className="space-y-4">
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">About Us</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Careers</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Press Kit</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Contact</a></li>
<li className=""><a className="text-gray-400 hover:text-teal-400 transition-colors font-sans text-sm" href="#">Partners</a></li>
<li className=""></li>
</ul>
</div>
</div>


<div className="flex flex-col lg:flex-row items-center justify-between pt-8 border-t border-gray-800/50 gap-6">
<div className="flex items-center gap-8">
<p className="text-gray-400 text-sm font-sans">© 2024 Nexus. All rights reserved.</p>
<div className="flex items-center gap-2">
<div className="w-2 h-2 animate-pulse bg-[#00fffb] rounded-full"></div>
<span className="text-xs text-[#00fffb]">All systems operational</span>
</div>
</div>
<div className="flex items-center gap-6 text-sm">
<a className="text-gray-400 hover:text-teal-400 Policy</a> <a href=" href="#">Terms of Service</a>
<a className="text-gray-400 hover:text-teal-400 transition-colors font-sans" href="#">Cookie Policy</a>
</div>
</div>

</div>

<div className="absolute inset-0 overflow-hidden pointer-events-none">
<div className="absolute bottom-0 left-1/4 w-96 h-96 bg-teal-500/3 rounded-full blur-3xl"></div>
</div>
</footer><meta charset="utf-8" /><meta content="width=device-width, initial-scale=1.0" name="viewport" /><title>Pricing Section</title>



    </>
  );
}
