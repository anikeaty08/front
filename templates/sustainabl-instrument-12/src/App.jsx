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



// Scroll Detection & Header Animation
document.addEventListener('DOMContentLoaded', () => {
const header = document.getElementById('main-header');
const logo = document.getElementById('brand-logo');
const sections = document.querySelectorAll('section, main');
const navLinks = document.querySelectorAll('.nav-link');
// Logic to switch between Large Hero Header and Small Sticky Header
const handleScroll = () => {
if (window.scrollY > 50) {
// SCROLLED STATE: Compact, Blurred Background
header.classList.remove('py-8', 'lg:py-10', 'border-transparent', 'bg-transparent');
header.classList.add('bg-[#0b0b0b]/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
// Shrink Logo
logo.classList.remove('h-20', 'lg:h-32'); // Remove large classes
logo.classList.add('h-10'); // Add compact class
} else {
// TOP STATE: Large, Transparent
header.classList.add('py-8', 'lg:py-10', 'border-transparent', 'bg-transparent');
header.classList.remove('bg-[#0b0b0b]/80', 'backdrop-blur-md', 'border-b', 'border-white/10', 'py-4');
// Grow Logo
logo.classList.add('h-20', 'lg:h-32'); // Add large classes
logo.classList.remove('h-10'); // Remove compact class
}
// Active Section Logic
let current = '';
sections.forEach(section => {
const sectionTop = section.offsetTop;
if (window.scrollY >= (sectionTop - 300)) {
current = section.getAttribute('id');
}
});
navLinks.forEach(link => {
link.classList.remove('active');
if (link.getAttribute('href').includes(current)) {
link.classList.add('active');
}
});
};
window.addEventListener('scroll', handleScroll);
// Run once on load to ensure correct state if page is refreshed down the page
handleScroll();
// Mobile Menu Logic
const mobileMenuBtn = document.getElementById('mobile-menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
const closeMenuBtn = document.getElementById('close-menu-btn'); // Note: added close functionality via any link click
if(mobileMenuBtn) {
mobileMenuBtn.addEventListener('click', () => {
mobileMenu.classList.remove('hidden');
setTimeout(() => mobileMenu.classList.remove('opacity-0'), 10);
});
}
const closeMenu = () => {
mobileMenu.classList.add('opacity-0');
setTimeout(() => mobileMenu.classList.add('hidden'), 300);
}
document.querySelectorAll('#mobile-menu a').forEach(link => {
link.addEventListener('click', closeMenu);
});
});
// Tailwind Config
tailwind.config = {
theme: {
extend: {
colors: {
celadon: '#9cdcaa',
darkSurface: '#2b2b2b',
lightNeutral: '#f3f1ee',
bgBlack: '#0b0b0b',
},
fontFamily: {
obviously: ['Obviously', 'sans-serif'],
poppins: ['Poppins', 'sans-serif'],
}
}
},
plugins: [
function({ addUtilities }) {
addUtilities({
'.rotate-y-10': { transform: 'rotateY(10deg)' },
'.rotate-y-20': { transform: 'rotateY(20deg)' },
'.-rotate-y-10': { transform: 'rotateY(-10deg)' },
'.-rotate-y-20': { transform: 'rotateY(-20deg)' },
'.perspective-1000': { perspective: '1000px' },
'.transform-style-3d': { 'transform-style': 'preserve-3d' },
});
}
]
};



  (function () {
    const header = document.getElementById("main-header");
    const logo = document.getElementById("brand-logo");
    const links = document.getElementById("desktop-links");
    const menuBtn = document.getElementById("mobile-menu-btn");
    const mobileMenu = document.getElementById("mobile-menu");
    const navLinks = document.querySelectorAll(".nav-link");

    const SCROLL_THRESHOLD = 40;

    function getScrollY() {
      return window.scrollY || document.documentElement.scrollTop || document.body.scrollTop || 0;
    }

    function setScrolled(isScrolled) {
      if (!header || !logo || !links) return;

      // Header background + padding
      header.classList.toggle("py-8", !isScrolled);
      header.classList.toggle("lg:py-10", !isScrolled);
      header.classList.toggle("bg-transparent", !isScrolled);
      header.classList.toggle("border-transparent", !isScrolled);

      header.classList.toggle("py-4", isScrolled);
      header.classList.toggle("lg:py-4", isScrolled);
      header.classList.toggle("bg-[#0b0b0b]/70", isScrolled);
      header.classList.toggle("backdrop-blur-xl", isScrolled);
      header.classList.toggle("border-b", isScrolled);
      header.classList.toggle("border-white/10", isScrolled);

      // Logo size
      logo.classList.toggle("h-20", !isScrolled);
      logo.classList.toggle("lg:h-32", !isScrolled);
      logo.classList.toggle("h-10", isScrolled);
      logo.classList.toggle("lg:h-12", isScrolled);

      // Desktop links show only after scroll
      links.classList.toggle("opacity-0", !isScrolled);
      links.classList.toggle("pointer-events-none", !isScrolled);
      links.classList.toggle("translate-y-1", !isScrolled);

      links.classList.toggle("opacity-100", isScrolled);
      links.classList.toggle("pointer-events-auto", isScrolled);
      links.classList.toggle("translate-y-0", isScrolled);
    }

    function setActiveLink() {
      const ids = ["about", "products", "join", "contact", "story"];
      const y = getScrollY();
      let current = "story";

      for (const id of ids) {
        const el = document.getElementById(id);
        if (!el) continue;
        const top = el.offsetTop;
        if (y >= top - 200) current = id;
      }

      navLinks.forEach(a => {
        a.classList.remove("active");
        const href = a.getAttribute("href") || "";
        if (href === "#" + current) a.classList.add("active");
      });
    }

    function setMenuOpen(open) {
      if (!mobileMenu || !menuBtn) return;

      menuBtn.setAttribute("aria-expanded", open ? "true" : "false");

      if (open) {
        mobileMenu.classList.remove("hidden");
        mobileMenu.setAttribute("aria-hidden", "false");
        requestAnimationFrame(() => mobileMenu.classList.remove("opacity-0"));
      } else {
        mobileMenu.classList.add("opacity-0");
        mobileMenu.setAttribute("aria-hidden", "true");
        setTimeout(() => mobileMenu.classList.add("hidden"), 300);
      }
    }

    let ticking = false;
    function onScroll() {
      if (ticking) return;
      ticking = true;
      requestAnimationFrame(() => {
        const isScrolled = getScrollY() > SCROLL_THRESHOLD;
        setScrolled(isScrolled);
        setActiveLink();
        ticking = false;
      });
    }

    // Init, force hidden on load, then update
    setScrolled(false);
    setActiveLink();
    onScroll();

    window.addEventListener("scroll", onScroll, { passive: true });

    if (menuBtn && mobileMenu) {
      menuBtn.addEventListener("click", () => setMenuOpen(true));

      mobileMenu.addEventListener("click", (e) => {
        if (e.target === mobileMenu) setMenuOpen(false);
      });

      mobileMenu.querySelectorAll("a").forEach((a) => {
        a.addEventListener("click", () => setMenuOpen(false));
      });

      window.addEventListener("keydown", (e) => {
        if (e.key === "Escape") setMenuOpen(false);
      });
    }
  })();



    (function () {
        let currentIndex = 2;
        const prevBtn = document.getElementById('teamPrevBtn');
        const nextBtn = document.getElementById('teamNextBtn');
        // Wire up UI buttons too
        const uiPrev = document.getElementById('prevBtnUI');
        const uiNext = document.getElementById('nextBtnUI');
        const cardsLength = 5;

        function updateCarousel() {
            const cards = document.querySelectorAll('.carousel-card');
            cards.forEach((card, i) => {
                const relativePos = i - currentIndex;
                // Standard Reset
                card.style.transform = '';
                card.style.opacity = '0';
                card.style.filter = 'brightness(0.5)';
                card.style.zIndex = '0';
                card.className = card.className.replace('ring-2 ring-[#9cdcaa] bg-[#9cdcaa]/10', 'ring-1 ring-white/10 bg-[#0b0b0b]');
                card.style.boxShadow = 'none';

                if (relativePos === 0) {
                    card.style.transform = 'translateX(0) scale(1) rotateY(0deg)';
                    card.style.opacity = '1';
                    card.style.zIndex = '10';
                    card.style.filter = 'brightness(1)';
                    card.className = card.className.replace('ring-1 ring-white/10 bg-[#0b0b0b]', 'ring-2 ring-[#9cdcaa] bg-[#9cdcaa]/10');
                    card.style.boxShadow = '0 20px 60px rgba(156, 220, 170, 0.15)';
                } else if (relativePos === -1) {
                    card.style.transform = 'translateX(-180px) scale(0.9) rotateY(10deg)';
                    card.style.opacity = '0.6';
                    card.style.zIndex = '5';
                    card.style.filter = 'brightness(0.7)';
                } else if (relativePos === 1) {
                    card.style.transform = 'translateX(180px) scale(0.9) rotateY(-10deg)';
                    card.style.opacity = '0.6';
                    card.style.zIndex = '5';
                    card.style.filter = 'brightness(0.7)';
                } else if (relativePos === -2) {
                    card.style.transform = 'translateX(-360px) scale(0.85) rotateY(20deg)';
                    card.style.opacity = '0.4';
                    card.style.zIndex = '2';
                    card.style.filter = 'brightness(0.5)';
                } else if (relativePos === 2) {
                    card.style.transform = 'translateX(360px) scale(0.85) rotateY(-20deg)';
                    card.style.opacity = '0.4';
                    card.style.zIndex = '2';
                    card.style.filter = 'brightness(0.5)';
                }
            });
        }

        const goPrev = () => {
            currentIndex = (currentIndex - 1 + cardsLength) % cardsLength;
            updateCarousel();
        };
        const goNext = () => {
            currentIndex = (currentIndex + 1) % cardsLength;
            updateCarousel();
        };

        if (prevBtn) prevBtn.addEventListener('click', goPrev);
        if (nextBtn) nextBtn.addEventListener('click', goNext);
        if (uiPrev) uiPrev.addEventListener('click', goPrev);
        if (uiNext) uiNext.addEventListener('click', goNext);

        // Init
        setTimeout(updateCarousel, 100);
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
      

<style>
  html {
    scroll-padding-top: 110px;
  }
</style>
<nav className="fixed top-0 left-0 z-50 w-full flex items-center justify-between border-b border-transparent bg-transparent py-8 lg:py-10 px-6 lg:px-12 transition-all duration-500 ease-in-out" id="main-header">

<a aria-label="Go to top" className="flex items-center gap-3 transition-opacity hover:opacity-80" href="#story">

<svg aria-label="Brand Logo" className="block h-20 lg:h-32 w-auto transition-all duration-500 ease-in-out" id="brand-logo" preserveaspectratio="xMinYMid meet" role="img" viewbox="92.51707 93.84586 1008.0136 344.39282" xmlns="http://www.w3.org/2000/svg">

<style>
        #layer-MC0 path {
          fill: #9cdcaa !important;
        }
      </style>
<defs id="defs1">
<color-profile id="color-profile1" inkscape:label="sRGB IEC61966-2.1" name="sRGB IEC61966-2.1" xlink:href="data:application/vnd.iccprofile;base64,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"></color-profile>
<clippath clippathunits="userSpaceOnUse" id="clipPath134">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path134" transform="translate(-155.47538,-92.884405)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath136">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path136" transform="translate(-279.99871,-243.9214)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath138">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path138" transform="translate(-363.75353,-285.20601)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath140">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path140" transform="translate(-413.69679,-245.30751)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath142">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path142" transform="translate(-456.32821,-296.06731)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath144">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path144"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath146">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path146" transform="translate(-389.68373,-177.71571)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath148">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path148" transform="translate(-418.52401,-229.53991)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath150">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path150" transform="translate(-488.48791,-217.61421)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath152">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path152" transform="translate(-517.98541,-205.97161)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath154">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path154" transform="translate(-544.98054,-228.47551)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath156">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path156" transform="translate(-657.68274,-228.47551)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath158">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path158" transform="translate(-700.31402,-228.47551)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath160">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path160" transform="translate(-754.19784,-177.71571)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath162">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path162" transform="translate(-802.8985,-217.61421)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath164">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path164" transform="translate(-345.88088,-136.81731)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath166">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path166" transform="translate(-396.51668,-138.3798)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath168">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path168" transform="translate(-435.65244,-135.5028)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath170">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path170" transform="translate(-478.05279,-133.26651)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath172">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path172" transform="translate(-562.21539,-160.8837)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath174">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path174" transform="translate(-580.69104,-135.5028)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath176">
<path d="M 0,399.066 H 898.194 V 0 H 0 Z" id="path176" transform="translate(-663.13239,-150.02241)"></path>
</clippath>
</defs>
<sodipodi:namedview bordercolor="#000000" borderopacity="0.25" id="namedview1" inkscape:deskcolor="#d1d1d1" inkscape:pagecheckerboard="0" inkscape:pageopacity="0.0" inkscape:showpageshadow="2" pagecolor="#ffffff">
<inkscape:page bleed="0" height="532.08801" id="page132" inkscape:label="4" margin="123.84586 127.06133 123.84933 122.51707" width="1197.592" x="0" y="0"></inkscape:page>
</sodipodi:namedview>
<g id="layer-MC0" inkscape:groupmode="layer" inkscape:label="Layer 1" transform="translate(-3652.776)">
<path clipPath="url(#clipPath134)" d="m 0,0 h -62.262 v 88.774 c 0,34.386 27.876,62.262 62.262,62.262 v 0 z" id="path133" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,3860.0765,408.24213)"></path>
<path clipPath="url(#clipPath136)" d="m 0,0 v -62.923 c 0,-34.386 -27.872,-62.265 -62.258,-62.265 h -0.007 c -17.196,0 -32.761,6.973 -44.026,18.239 -11.265,11.265 -18.232,26.83 -18.232,44.026 h 62.258 V 0 h -125.846 c 0,34.386 27.879,62.258 62.265,62.258 h 63.588 C -27.872,62.258 0,34.386 0,0" id="path135" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4026.1076,206.85947)"></path>
<path clipPath="url(#clipPath138)" d="M 0,0 H -15.015 V -39.898 H -28.114 V 0 H -43.129 V 10.861 H 0 Z" id="path137" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4137.7807,151.81333)"></path>
<path clipPath="url(#clipPath140)" d="M 0,0 H -13.099 V 19.842 H -31.273 V 0 h -13.098 v 50.76 h 13.098 V 30.811 h 18.174 V 50.76 H 0 Z" id="path139" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4204.3717,205.01133)"></path>
<path clipPath="url(#clipPath142)" d="m 0,0 v -10.861 h -22.363 v -9.496 h 20.34 v -10.117 h -20.34 v -9.424 H 0.603 V -50.76 H -35.461 V 0 Z" id="path141" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4261.2136,137.3316)"></path>
<path clipPath="url(#clipPath144)" d="m 335.32,177.716 h -13.098 v 50.76 h 13.098 z" id="path143" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,3652.776,532.088)"></path>
<path clipPath="url(#clipPath146)" d="M 0,0 H -17.819 L -34.698,38.088 V 0 h -12.495 v 50.76 h 18.884 L -12.495,15.334 V 50.76 H 0 Z" id="path145" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4172.3543,295.13373)"></path>
<path clipPath="url(#clipPath148)" d="m 0,0 c 3.373,0 6.401,-0.398 9.087,-1.197 2.686,-0.799 4.967,-1.948 6.843,-3.444 1.875,-1.496 3.31,-3.322 4.303,-5.474 0.995,-2.155 1.491,-4.592 1.491,-7.313 H 9.229 c 0,1.1 -0.221,2.088 -0.665,2.963 -0.444,0.877 -1.074,1.619 -1.89,2.229 -0.817,0.609 -1.805,1.08 -2.965,1.41 -1.159,0.332 -2.455,0.498 -3.886,0.498 -1.183,0 -2.311,-0.115 -3.381,-0.348 -1.071,-0.23 -2.015,-0.57 -2.831,-1.019 -0.817,-0.45 -1.465,-1.006 -1.944,-1.668 -0.479,-0.664 -0.718,-1.432 -0.718,-2.309 0,-0.887 0.215,-1.603 0.647,-2.146 0.432,-0.545 1.086,-0.994 1.962,-1.35 0.875,-0.355 1.972,-0.65 3.292,-0.887 1.319,-0.236 2.872,-0.486 4.659,-0.746 l 1.792,-0.265 c 1.053,-0.155 2.148,-0.323 3.284,-0.506 1.136,-0.184 2.272,-0.407 3.408,-0.666 1.135,-0.26 2.254,-0.574 3.354,-0.94 1.1,-0.367 2.148,-0.818 3.142,-1.349 0.993,-0.534 1.91,-1.157 2.751,-1.873 0.84,-0.715 1.564,-1.551 2.174,-2.502 0.609,-0.953 1.085,-2.041 1.428,-3.266 0.344,-1.225 0.515,-2.607 0.515,-4.145 0,-2.673 -0.532,-5.042 -1.597,-7.107 -1.065,-2.066 -2.592,-3.799 -4.579,-5.201 -1.988,-1.402 -4.399,-2.465 -7.233,-3.186 -2.834,-0.722 -6.02,-1.082 -9.557,-1.082 -3.775,0 -7.112,0.409 -10.011,1.225 -2.899,0.816 -5.33,1.99 -7.294,3.521 -1.964,1.534 -3.449,3.407 -4.455,5.618 -1.006,2.212 -1.508,4.722 -1.508,7.525 h 12.494 c 0,-1.182 0.246,-2.244 0.737,-3.186 0.491,-0.939 1.198,-1.732 2.121,-2.377 0.923,-0.646 2.047,-1.14 3.372,-1.482 1.325,-0.344 2.822,-0.516 4.49,-0.516 1.42,0 2.74,0.125 3.958,0.373 1.219,0.249 2.275,0.62 3.168,1.11 0.894,0.49 1.598,1.099 2.113,1.828 0.514,0.729 0.772,1.57 0.772,2.529 0,0.959 -0.223,1.727 -0.666,2.307 -0.444,0.58 -1.1,1.053 -1.97,1.42 -0.87,0.367 -1.952,0.66 -3.248,0.879 -1.296,0.219 -2.796,0.441 -4.499,0.666 l -2.379,0.338 c -1.029,0.14 -2.097,0.291 -3.203,0.451 -1.107,0.16 -2.216,0.361 -3.328,0.603 -1.112,0.243 -2.21,0.539 -3.292,0.889 -1.083,0.348 -2.113,0.773 -3.089,1.277 -0.976,0.502 -1.878,1.094 -2.706,1.776 -0.828,0.679 -1.544,1.478 -2.148,2.394 -0.603,0.918 -1.073,1.965 -1.411,3.143 -0.337,1.178 -0.506,2.512 -0.506,4.002 0,1.799 0.252,3.455 0.755,4.969 0.503,1.515 1.218,2.884 2.147,4.109 0.929,1.225 2.056,2.305 3.382,3.238 1.324,0.936 2.804,1.719 4.437,2.354 1.632,0.633 3.407,1.107 5.324,1.427 C -4.135,-0.158 -2.118,0 0,0" id="path147" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4210.808,226.0348)"></path>
<path clipPath="url(#clipPath150)" d="M 0,0 H -15.015 V -39.898 H -28.114 V 0 H -43.129 V 10.861 H 0 Z" id="path149" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4304.0932,241.93573)"></path>
<path clipPath="url(#clipPath152)" d="M 0,0 C 1.159,0 2.189,0.135 3.088,0.408 3.987,0.68 4.745,1.076 5.36,1.596 5.975,2.117 6.445,2.76 6.771,3.521 c 0.325,0.764 0.488,1.631 0.488,2.602 0,1.94 -0.624,3.418 -1.872,4.436 -1.249,1.017 -3.051,1.527 -5.405,1.527 H -10.827 V 0 Z M -23.925,-28.256 V 22.521 H 1.437 c 3.018,0 5.701,-0.357 8.049,-1.074 2.349,-0.715 4.331,-1.742 5.946,-3.078 1.615,-1.338 2.843,-2.967 3.683,-4.89 0.84,-1.922 1.26,-4.09 1.26,-6.504 0,-2.094 -0.331,-3.996 -0.994,-5.707 C 18.718,-0.441 17.775,-1.908 16.55,-3.133 15.326,-4.357 13.847,-5.32 12.113,-6.018 10.38,-6.717 8.436,-7.1 6.283,-7.172 c 2.082,-0.14 3.916,-0.877 5.502,-2.209 1.585,-1.332 2.946,-3.264 4.082,-5.795 l 5.875,-13.08 H 7.17 l -5.981,13.063 c -0.461,1.017 -0.899,1.855 -1.314,2.511 -0.414,0.657 -0.86,1.174 -1.339,1.553 -0.479,0.379 -1.018,0.641 -1.616,0.789 -0.597,0.149 -1.316,0.223 -2.156,0.223 h -5.591 v -18.139 z" id="path151" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4343.4232,257.4592)"></path>
<path clipPath="url(#clipPath154)" d="m 0,0 h 13.098 v -29.355 c 0,-2.012 0.201,-3.743 0.604,-5.192 0.402,-1.449 0.996,-2.642 1.783,-3.576 0.787,-0.936 1.76,-1.625 2.92,-2.068 1.159,-0.444 2.491,-0.666 3.993,-0.666 1.515,0 2.852,0.222 4.012,0.666 1.159,0.443 2.129,1.132 2.91,2.068 0.781,0.934 1.373,2.127 1.775,3.576 0.402,1.449 0.604,3.18 0.604,5.192 V 0 h 13.098 v -30.527 c 0,-3.42 -0.55,-6.452 -1.651,-9.096 -1.1,-2.645 -2.642,-4.871 -4.623,-6.682 -1.982,-1.81 -4.343,-3.183 -7.082,-4.119 -2.739,-0.933 -5.754,-1.4 -9.043,-1.4 -2.189,0 -4.259,0.209 -6.211,0.629 -1.953,0.42 -3.761,1.039 -5.423,1.855 -1.662,0.817 -3.156,1.828 -4.481,3.035 -1.325,1.207 -2.456,2.6 -3.39,4.18 -0.935,1.578 -1.651,3.336 -2.148,5.271 C 0.248,-34.92 0,-32.811 0,-30.527 Z" id="path153" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4379.4167,227.454)"></path>
<path clipPath="url(#clipPath156)" d="m 0,0 v -50.76 h -13.098 v 39.774 L -24.315,-50.76 h -13.134 l -11.146,39.791 V -50.76 H -61.09 V 0 h 20.659 L -30.19,-36.598 -19.896,0 Z" id="path155" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4529.6863,227.454)"></path>
<path clipPath="url(#clipPath158)" d="m 0,0 v -10.861 h -22.363 v -9.496 h 20.34 v -10.118 h -20.34 v -9.423 H 0.603 V -50.76 H -35.461 V 0 Z" id="path157" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4586.528,227.454)"></path>
<path clipPath="url(#clipPath160)" d="M 0,0 H -17.819 L -34.698,38.088 V 0 h -12.495 v 50.76 h 18.884 L -12.495,15.334 V 50.76 H 0 Z" id="path159" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4658.3731,295.13373)"></path>
<path clipPath="url(#clipPath162)" d="M 0,0 H -15.015 V -39.898 H -28.114 V 0 H -43.129 V 10.861 H 0 Z" id="path161" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4723.3073,241.93573)"></path>
<path clipPath="url(#clipPath164)" d="m 0,0 c 1.183,0 2.239,0.154 3.168,0.461 0.929,0.309 1.715,0.754 2.36,1.34 0.645,0.586 1.137,1.303 1.473,2.148 0.338,0.846 0.506,1.807 0.506,2.883 0,1.066 -0.168,2.022 -0.506,2.867 -0.336,0.846 -0.825,1.559 -1.464,2.139 -0.639,0.58 -1.42,1.023 -2.343,1.332 -0.923,0.307 -1.969,0.461 -3.141,0.461 H -10.561 V 0 Z M -23.659,24.066 H 0.603 c 1.988,0 3.86,-0.189 5.618,-0.568 1.757,-0.379 3.375,-0.922 4.854,-1.633 1.479,-0.709 2.807,-1.57 3.985,-2.582 1.176,-1.012 2.176,-2.156 2.999,-3.433 0.822,-1.278 1.452,-2.674 1.89,-4.19 0.438,-1.514 0.657,-3.123 0.657,-4.828 0,-1.703 -0.219,-3.314 -0.657,-4.836 -0.438,-1.519 -1.068,-2.92 -1.89,-4.197 C 17.236,-3.479 16.233,-4.627 15.05,-5.645 13.867,-6.662 12.536,-7.525 11.057,-8.236 9.578,-8.945 7.96,-9.49 6.203,-9.869 c -1.757,-0.379 -3.624,-0.567 -5.6,-0.567 h -11.164 v -16.257 h -13.098 z" id="path163" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4113.9505,349.66493)"></path>
<path clipPath="url(#clipPath166)" d="M 0,0 C 1.159,0 2.189,0.135 3.088,0.408 3.987,0.68 4.745,1.076 5.36,1.596 5.975,2.117 6.445,2.76 6.771,3.521 c 0.325,0.764 0.488,1.631 0.488,2.602 0,1.94 -0.624,3.418 -1.872,4.436 -1.249,1.017 -3.051,1.527 -5.405,1.527 H -10.827 V 0 Z M -23.925,-28.256 V 22.521 H 1.437 c 3.018,0 5.701,-0.357 8.049,-1.074 2.349,-0.715 4.331,-1.742 5.946,-3.078 1.615,-1.338 2.843,-2.967 3.683,-4.89 0.84,-1.922 1.26,-4.09 1.26,-6.504 0,-2.094 -0.331,-3.996 -0.994,-5.707 C 18.718,-0.441 17.775,-1.908 16.55,-3.133 15.326,-4.357 13.847,-5.32 12.113,-6.018 10.38,-6.717 8.436,-7.1 6.283,-7.172 c 2.082,-0.14 3.916,-0.877 5.502,-2.209 1.585,-1.332 2.946,-3.264 4.082,-5.795 l 5.875,-13.08 H 7.17 l -5.981,13.063 c -0.461,1.017 -0.899,1.855 -1.314,2.511 -0.414,0.657 -0.86,1.174 -1.339,1.553 -0.479,0.379 -1.018,0.641 -1.616,0.789 -0.597,0.149 -1.316,0.223 -2.156,0.223 h -5.591 v -18.139 z" id="path165" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4181.4649,347.5816)"></path>
<path clipPath="url(#clipPath168)" d="m 0,0 c 0,-2.531 0.257,-4.764 0.772,-6.699 0.515,-1.934 1.271,-3.549 2.271,-4.846 1,-1.295 2.237,-2.273 3.71,-2.937 1.473,-0.663 3.162,-0.995 5.067,-0.995 1.905,0 3.591,0.332 5.058,0.995 1.468,0.664 2.704,1.642 3.71,2.937 1.006,1.297 1.766,2.912 2.281,4.846 0.514,1.935 0.772,4.168 0.772,6.699 0,2.545 -0.258,4.781 -0.772,6.709 -0.515,1.93 -1.275,3.545 -2.281,4.846 -1.006,1.302 -2.242,2.281 -3.71,2.937 -1.467,0.656 -3.153,0.987 -5.058,0.987 -1.905,0 -3.594,-0.331 -5.067,-0.987 C 5.28,13.836 4.043,12.857 3.043,11.555 2.043,10.254 1.287,8.639 0.772,6.709 0.257,4.781 0,2.545 0,0 m -13.205,0 c 0,2.676 0.281,5.186 0.843,7.535 0.562,2.348 1.363,4.502 2.405,6.461 1.041,1.957 2.304,3.705 3.789,5.244 1.485,1.537 3.153,2.842 5.005,3.914 1.852,1.071 3.87,1.887 6.053,2.45 2.183,0.56 4.493,0.841 6.93,0.841 2.438,0 4.745,-0.281 6.922,-0.841 2.177,-0.563 4.195,-1.379 6.052,-2.45 1.858,-1.072 3.529,-2.377 5.014,-3.914 1.485,-1.539 2.748,-3.287 3.79,-5.244 1.041,-1.959 1.842,-4.113 2.404,-6.461 0.562,-2.349 0.844,-4.859 0.844,-7.535 0,-2.674 -0.282,-5.186 -0.844,-7.533 -0.562,-2.35 -1.363,-4.502 -2.404,-6.461 -1.042,-1.959 -2.305,-3.707 -3.79,-5.244 -1.485,-1.539 -3.156,-2.844 -5.014,-3.914 -1.857,-1.071 -3.877,-1.887 -6.061,-2.45 -2.183,-0.562 -4.487,-0.841 -6.913,-0.841 -2.437,0 -4.747,0.279 -6.93,0.841 -2.183,0.563 -4.201,1.379 -6.053,2.45 -1.852,1.07 -3.52,2.375 -5.005,3.914 -1.485,1.537 -2.748,3.285 -3.789,5.244 -1.042,1.959 -1.843,4.111 -2.405,6.461 -0.562,2.347 -0.843,4.859 -0.843,7.533" id="path167" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4233.6459,351.4176)"></path>
<path clipPath="url(#clipPath170)" d="m 0,0 h 13.099 v -4.721 c 0,-1.218 0.174,-2.347 0.523,-3.388 0.349,-1.043 0.852,-1.944 1.509,-2.707 0.657,-0.764 1.464,-1.358 2.422,-1.784 0.959,-0.427 2.047,-0.64 3.266,-0.64 1.23,0 2.319,0.217 3.266,0.648 0.946,0.432 1.742,1.033 2.387,1.801 0.645,0.77 1.133,1.678 1.464,2.725 0.331,1.046 0.497,2.185 0.497,3.418 V 27.617 H 41.532 V -4.861 c 0,-2.024 -0.234,-3.907 -0.701,-5.645 -0.468,-1.74 -1.134,-3.326 -1.997,-4.758 -0.864,-1.431 -1.914,-2.703 -3.15,-3.814 -1.237,-1.113 -2.624,-2.047 -4.163,-2.805 -1.538,-0.758 -3.212,-1.334 -5.022,-1.73 -1.811,-0.397 -3.722,-0.594 -5.733,-0.594 -2.012,0 -3.923,0.197 -5.733,0.594 -1.81,0.396 -3.485,0.972 -5.023,1.73 -1.538,0.758 -2.926,1.692 -4.162,2.805 -1.236,1.111 -2.286,2.383 -3.15,3.814 -0.864,1.432 -1.53,3.018 -1.997,4.758 C 0.233,-8.768 0,-6.885 0,-4.861 Z" id="path169" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4290.1797,354.39933)"></path>
<path clipPath="url(#clipPath172)" d="m 0,0 v -10.861 h -22.363 v -9.496 h 20.34 v -10.118 h -20.34 v -9.423 H 0.603 V -50.76 H -35.461 V 0 Z" id="path171" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4402.3965,317.5764)"></path>
<path clipPath="url(#clipPath174)" d="m 0,0 c 0,-2.531 0.257,-4.764 0.772,-6.699 0.515,-1.934 1.275,-3.549 2.281,-4.846 1.005,-1.295 2.241,-2.273 3.709,-2.937 1.467,-0.663 3.153,-0.995 5.058,-0.995 3.017,0 5.425,0.903 7.224,2.707 1.798,1.805 2.987,4.524 3.567,8.157 h 12.992 c -0.296,-2.26 -0.79,-4.369 -1.482,-6.328 -0.692,-1.959 -1.559,-3.745 -2.6,-5.36 -1.042,-1.615 -2.245,-3.053 -3.612,-4.312 -1.367,-1.262 -2.881,-2.323 -4.543,-3.186 -1.663,-0.865 -3.464,-1.521 -5.405,-1.971 -1.94,-0.449 -3.993,-0.673 -6.158,-0.673 -2.426,0 -4.73,0.279 -6.913,0.841 -2.183,0.563 -4.201,1.379 -6.053,2.45 -1.852,1.07 -3.52,2.375 -5.005,3.914 -1.485,1.537 -2.748,3.285 -3.789,5.244 -1.042,1.959 -1.843,4.111 -2.405,6.461 -0.562,2.347 -0.843,4.859 -0.843,7.533 0,2.676 0.281,5.186 0.843,7.535 0.562,2.348 1.363,4.502 2.405,6.461 1.041,1.957 2.304,3.705 3.789,5.244 1.485,1.537 3.153,2.842 5.005,3.914 1.852,1.071 3.87,1.887 6.053,2.45 2.183,0.56 4.487,0.841 6.913,0.841 3.253,0 6.238,-0.5 8.954,-1.498 2.715,-1 5.099,-2.441 7.152,-4.322 2.053,-1.881 3.737,-4.172 5.049,-6.869 1.314,-2.697 2.195,-5.744 2.645,-9.141 H 22.611 c -0.58,3.645 -1.769,6.365 -3.567,8.164 -1.799,1.799 -4.207,2.7 -7.224,2.7 -1.905,0 -3.591,-0.331 -5.058,-0.987 C 5.294,13.836 4.058,12.857 3.053,11.555 2.047,10.254 1.287,8.639 0.772,6.709 0.257,4.781 0,2.545 0,0" id="path173" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4427.0307,351.4176)"></path>
<path clipPath="url(#clipPath176)" d="M 0,0 H -15.015 V -39.898 H -28.114 V 0 H -43.129 V 10.861 H 0 Z" id="path175" style={{fill: '#dedcd9', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,4536.9525,332.05813)"></path>
</g>
</svg>
</a>

<div className="hidden md:flex items-center gap-8 font-poppins font-semibold text-sm opacity-0 translate-y-1 transition-all duration-500 ease-in-out" id="desktop-links">
<a className="nav-link text-[#f3f1ee]/80 hover:text-[#9cdcaa] transition-all duration-300 py-1" href="#about">About</a>
<a className="nav-link text-[#f3f1ee]/80 hover:text-[#9cdcaa] transition-all duration-300 py-1" href="#products">Our
      Products</a>
<a className="nav-link text-[#f3f1ee]/80 hover:text-[#9cdcaa] transition-all duration-300 py-1" href="#join">Join Us</a>
<a className="nav-link text-[#f3f1ee]/80 hover:text-[#9cdcaa] transition-all duration-300 py-1" href="#contact">Contact</a>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="md:hidden text-[#f3f1ee] hover:text-[#9cdcaa] transition-colors" id="mobile-menu-btn" type="button">
<svg fill="none" height="32" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<line x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</nav>

<div aria-hidden="true" className="fixed inset-0 z-[60] bg-[#0b0b0b]/95 backdrop-blur-xl hidden opacity-0 transition-opacity duration-300 flex flex-col justify-center items-center" id="mobile-menu">
<div className="flex flex-col gap-8 text-center font-obviously text-3xl font-bold">
<a className="text-[#f3f1ee] hover:text-[#9cdcaa] transition-colors" href="#about">About</a>
<a className="text-[#f3f1ee] hover:text-[#9cdcaa] transition-colors" href="#products">Our Products</a>
<a className="text-[#f3f1ee] hover:text-[#9cdcaa] transition-colors" href="#join">Join Us</a>
<a className="text-[#f3f1ee] hover:text-[#9cdcaa] transition-colors" href="#contact">Contact</a>
</div>
</div>


<main className="flex-grow grid grid-cols-1 lg:grid-cols-12 lg:px-12 pt-40 lg:pt-52 pb-20 px-6 relative gap-x-12 gap-y-12 min-h-screen" id="story">

<div className="absolute inset-0 z-0 overflow-hidden pointer-events-none select-none">

<div className="absolute top-0 left-[-10%] w-[500px] h-[500px] bg-[#9cdcaa] rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob"></div>
<div className="absolute top-0 right-[-10%] w-[400px] h-[400px] bg-purple-500 rounded-full mix-blend-screen filter blur-[100px] opacity-20 animate-blob animation-delay-2000"></div>
<div className="absolute bottom-[-20%] left-[20%] w-[500px] h-[500px] bg-blue-500 rounded-full mix-blend-screen filter blur-[120px] opacity-20 animate-blob animation-delay-4000"></div>
</div>

<div className="absolute inset-0 grid-bg pointer-events-none z-0"></div>

<div className="lg:col-span-5 flex flex-col z-20 relative justify-center overflow-visible">
<h1 className="font-obviously uppercase animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.2s_both] text-[#f3f1ee] leading-[1.0] tracking-[-0.03em] mb-8 overflow-visible text-[clamp(2.2rem,9vw,3rem)] sm:text-5xl lg:text-[5rem]">
<span className="text-[#f3f1ee]/50">RE</span>HARMONIZE
  <br/>
  THE WORLD
</h1>
<p className="font-poppins font-light leading-relaxed animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.4s_both] text-lg text-[#f3f1ee]/70 max-w-md mb-12">
                Transforming reclaimed wood into instruments that carry history, craft, and purpose.
            </p>
<div className="flex flex-col gap-4 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.6s_both] items-start">  <a className="btn-wrapper group relative inline-flex justify-center items-center p-4 border border-[#2b2b2b] hover:border-[#9cdcaa] transition-colors duration-300" href="#"> <div className="group-hover:opacity-100 transition-opacity duration-300 opacity-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTAiIGhlaWdodD0iMTAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMTU2LCAyMjAsIDE3MCwgMC4yKSIvPjwvc3ZnPg==')] absolute top-0 right-0 bottom-0 left-0"></div> <div className="absolute top-0 left-0 w-2 h-2 border-t border-l border-[#9cdcaa] opacity-0 group-hover:opacity-100 transition-all duration-300 -translate-x-1 -translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div> <div className="absolute bottom-0 right-0 w-2 h-2 border-b border-r border-[#9cdcaa] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-1 translate-y-1 group-hover:translate-x-0 group-hover:translate-y-0"></div> <button className="btn flex items-center gap-3 bg-transparent text-[#f3f1ee] font-poppins font-semibold uppercase tracking-wider text-sm relative z-10"> Join Our Waiting List <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-up-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M17.47 15.53a.75.75 0 0 0 1.28-.53V6a.75.75 0 0 0-.75-.75H9a.75.75 0 0 0-.53 1.28z" fill="currentColor" fill-rule="evenodd"></path><path d="M5.47 17.47a.75.75 0 1 0 1.06 1.06l6.97-6.97l-1.06-1.06z" fill="currentColor" opacity=".5"></path></svg> </button> </a> <span className="font-poppins text-xs text-[#f3f1ee]/40 tracking-widest pl-5">Get our launch discount.</span> </div> </div>

<div className="lg:col-span-5 flex animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0.8s_both] h-[500px] relative perspective-[1000px] items-center justify-center">

<div className="relative z-10 w-64 aspect-[4/5] bg-[#0b0b0b] border border-white/10 shadow-2xl floating-card transform rotate-[-2deg]">
<img alt="Abstract Art" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da0f01c0-bb5c-430d-8a3b-6a11c5f72bf6_800w.png"/>
</div>

<div className="absolute top-[10%] left-[5%] w-40 aspect-square bg-[#0b0b0b] border border-white/10 shadow-xl floating-card z-0 transform -rotate-6">
<img alt="Nature" className="w-full h-full object-cover grayscale opacity-60 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d957329f-442c-4e3e-b218-a1891f27466e_800w.png"/>
</div>

<div className="absolute bottom-[15%] right-[5%] w-48 aspect-square bg-[#0b0b0b] border border-white/10 shadow-xl floating-card z-20 transform rotate-3">
<img alt="Graphic" className="w-full h-full object-cover grayscale opacity-70 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76c2f2c8-fa22-4dfa-bf76-1d500937a284_800w.png"/>
</div>

<div className="absolute top-[20%] right-[10%] w-32 aspect-[3/4] bg-[#0b0b0b] border border-white/10 shadow-lg floating-card z-0 transform rotate-12">
<img alt="Portrait" className="w-full h-full object-cover grayscale opacity-50 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dbf6417f-bb80-438b-93c5-d4f915ba55c7_320w.png"/>
</div>

<div className="absolute bottom-[20%] left-[-5%] w-52 aspect-video bg-[#0b0b0b] border border-white/10 shadow-lg floating-card z-30 transform -rotate-3 hidden lg:block">
<img alt="Urban" className="w-full h-full object-cover grayscale opacity-80 hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f72303ad-ff8a-41a3-a490-66b0ffd5ee47_800w.png"/>
</div>
</div>

<div className="lg:col-span-2 flex flex-col z-20 lg:border-l lg:border-white/5 lg:pl-8 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_1s_both] relative justify-center">

<div className="hidden lg:block beam-border-v" style={{left: '-1px'}}></div>
<div className="flex flex-col gap-12 h-full justify-center items-center lg:items-start text-center lg:text-left">

<div className="group cursor-pointer">
<span className="block font-poppins font-light group-hover:text-[#9cdcaa] transition-colors duration-300 text-5xl text-[#f3f1ee]/80 tracking-tighter">200 kg</span>
<span className="font-poppins text-[10px] uppercase block group-hover:border-[#9cdcaa] transition-all text-[#f3f1ee]/50 tracking-widest border-transparent border-l-2 mt-2 pl-2">reclaimed wood</span>
</div>

<div className="group cursor-pointer">
<span className="block font-poppins font-light group-hover:text-[#9cdcaa] transition-colors duration-300 text-5xl text-[#f3f1ee]/80 tracking-tighter">25</span>
<span className="font-poppins text-[10px] uppercase block group-hover:border-[#9cdcaa] transition-all text-[#f3f1ee]/50 tracking-widest border-transparent border-l-2 mt-2 pl-2">donated instruments</span>
</div>
</div>
</div>
</main>

<section className="relative w-full border-t border-white/5 bg-[#0b0b0b] overflow-hidden px-6 lg:px-12 py-16 lg:py-24">

<div className="pointer-events-none absolute inset-0">
<div className="absolute inset-0 grid-bg opacity-60"></div>
<div className="absolute -top-24 -left-24 w-[520px] h-[520px] rounded-full bg-[#9cdcaa]/12 blur-[120px] mix-blend-screen opacity-70"></div>
<div className="absolute -bottom-40 -right-40 w-[560px] h-[560px] rounded-full bg-purple-500/10 blur-[140px] mix-blend-screen opacity-60"></div>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-black/10 to-black/30"></div>
</div>
<div className="relative z-10 max-w-[90rem] mx-auto">
<div className="max-w-6xl">
<h2 className="font-obviously text-2xl md:text-3xl lg:text-5xl leading-tight lg:leading-[1.12] tracking-tight text-[#f3f1ee]/55" style={{textShadow: '0 18px 60px rgba(0,0,0,0.35)'}}>
        We craft <span className="text-[#f3f1ee]">handcrafted instruments</span> from
        <span className="text-[#f3f1ee]">reclaimed wood</span>,<br/>
        turning forgotten materials into sound, story, and purpose.<br/>
        Guided by <span className="text-[#f3f1ee]">musical, craft, ecological, and social harmony</span>,<br/>
        we build pieces that feel alive, last for generations, and invite people to
        <span className="text-[#f3f1ee]">re harmonize the world</span> through music.
      </h2>
</div>
</div>
</section>

<section className="overflow-hidden bg-[#0b0b0b] w-full border-white/5 border-t pt-6 pb-12 relative" id="products">
<div className="lg:px-12 flex flex-col md:flex-row md:items-end gap-6 animate-on-scroll [animation:fadeSlideIn_0.8s_ease-out_0s_both] mb-6 pr-6 pl-6 justify-between">
<div className=""></div>
</div>

<section className="pt-0 pb-12 sm:py-16 relative">
<div className="sm:px-6 lg:px-8 max-w-7xl mx-auto pr-4 pl-4">
<div className="text-center max-w-3xl mx-auto">
<h2 className="font-obviously sm:text-5xl text-4xl font-bold tracking-tight mt-4 text-[#f3f1ee]">
                        OUR PRODUCTS
                    </h2>
<p className="sm:text-base text-sm font-light text-[#f3f1ee]/70 font-poppins max-w-2xl mt-3 mr-auto ml-auto">
                        You’re not just buying an instrument, you’re owning a piece of craftsmanship.
                    </p>
</div>
<div className="flex mt-6 md:mt-16 relative items-center justify-center" style={{perspective: '1200px'}}>
<button aria-label="Previous" className="z-20 inline-flex hover:bg-white/5 transition bg-black/50 w-12 h-12 ring-white/10 ring-1 rounded-full absolute left-4 items-center justify-center text-[#f3f1ee]" id="teamPrevBtn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m15 18-6-6 6-6"></path>
</svg>
</button>
<div className="relative w-full max-w-md h-[500px] flex items-center justify-center">
<div className="flex transition-transform duration-500 ease-out absolute top-0 right-0 bottom-0 left-0 items-center justify-center transform-style-3d" id="carouselTrack">

<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 bg-[#0b0b0b]" data-index="0" style={{opacity: '0.4', filter: 'brightness(0.5)', zIndex: '2', boxShadow: 'none', transform: 'translateX(-360px) scale(0.85) rotateY(20deg)'}}>
<img alt="Product" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d957329f-442c-4e3e-b218-a1891f27466e_800w.png"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3 font-poppins">
<div className="w-2 h-2 rounded-full bg-[#9cdcaa]"></div>
<span className="text-white">Acoustic</span>
</div>
<p className="font-poppins font-bold text-2xl text-white mb-1">Passive Speaker</p>
<p className="font-poppins font-light text-xs text-[#f3f1ee]/70">Natural amplification.</p>
</div>
</div>

<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 bg-[#0b0b0b]" data-index="1" style={{opacity: '0.6', filter: 'brightness(0.7)', zIndex: '5', boxShadow: 'none', transform: 'translateX(-180px) scale(0.9) rotateY(10deg)'}}>
<img alt="Product" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f72303ad-ff8a-41a3-a490-66b0ffd5ee47_800w.png"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="font-poppins font-bold text-2xl text-white mb-1">Ukulele</p>
<p className="font-poppins font-light text-xs text-[#f3f1ee]/70">Compact and soulful.</p>
</div>
</div>

<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-2 ring-[#9cdcaa] bg-[#9cdcaa]/10 transition-all duration-500" data-index="2" style={{opacity: '1', filter: 'brightness(1)', zIndex: '10', boxShadow: 'rgba(156, 220, 170, 0.15) 0px 20px 60px', transform: 'translateX(0px) scale(1) rotateY(0deg)'}}>
<img alt="Product" className="h-full w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/da0f01c0-bb5c-430d-8a3b-6a11c5f72bf6_800w.png"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="font-poppins font-bold text-3xl text-white mb-1">Guitar</p>
<p className="font-poppins font-light text-sm text-[#f3f1ee]/80">One-of-a-kind resonance.</p>
</div>
</div>

<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 bg-[#0b0b0b]" data-index="3" style={{opacity: '0.6', filter: 'brightness(0.7)', zIndex: '5', boxShadow: 'none', transform: 'translateX(180px) scale(0.9) rotateY(-10deg)'}}>
<img alt="Product" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/76c2f2c8-fa22-4dfa-bf76-1d500937a284_800w.png"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<p className="font-poppins font-bold text-2xl text-white mb-1">Cajon</p>
<p className="font-poppins font-light text-xs text-[#f3f1ee]/70">Deep resonance.</p>
</div>
</div>

<div className="carousel-card absolute w-80 h-[460px] rounded-2xl overflow-hidden ring-1 ring-white/10 transition-all duration-500 bg-[#0b0b0b]" data-index="4" style={{opacity: '0.4', filter: 'brightness(0.5)', zIndex: '2', boxShadow: 'none', transform: 'translateX(360px) scale(0.85) rotateY(-20deg)'}}>
<img alt="Product" className="h-full w-full object-cover opacity-80" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/1fe413d0-0fac-472b-ba84-d04837f42c87_800w.png"/>
<div className="bg-gradient-to-t from-black/90 via-black/40 to-transparent absolute inset-0"></div>
<div className="absolute bottom-6 left-6 right-6">
<div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-3 py-1 text-xs ring-1 ring-white/20 mb-3 font-poppins">
<div className="w-2 h-2 rounded-full bg-[#9cdcaa]"></div>
<span className="text-white">Accessory</span>
</div>
<p className="font-poppins font-bold text-2xl text-white mb-1">Stand</p>
<p className="font-poppins font-light text-xs text-[#f3f1ee]/70">Minimalist design.</p>
</div>
</div>
</div>
</div>
<button aria-label="Next" className="inline-flex hover:bg-white/5 transition z-20 bg-black/50 w-12 h-12 ring-white/10 ring-1 rounded-full absolute right-4 items-center justify-center text-[#f3f1ee]" id="teamNextBtn">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</button>
</div>
</div>
</section>
</section>



<section className="z-10 md:px-12 lg:pt-14 lg:pb-14 w-full max-w-[1400px] mr-auto ml-auto -mt-24 pt-6 pr-6 pb-14 pl-6 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="order-1 lg:order-1">
<h2 className="font-obviously sm:text-5xl text-4xl font-bold tracking-tight mt-4 mb-10 text-[#f3f1ee]">

                        OUR PROCESS
                    </h2>
<div className="space-y-8 mt-6 pb-8 md:pb-10">

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center shrink-0 group-hover:bg-indigo-500/20 transition-colors duration-300">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="trash-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-indigo-300 transition-colors duration-300" style={{}}>The Rescue</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Saving discarded pallets and reclaimed wood, giving materials a second life.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 border border-sky-500/20 flex items-center justify-center shrink-0 group-hover:bg-sky-500/20 transition-colors duration-300">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="recycle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(56, 189, 248)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
<div className="">
<h3 className="group-hover:text-sky-300 transition-colors duration-300 text-lg font-medium text-white mb-2">The Vision</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Saving discarded pallets and reclaimed wood, giving materials a second life.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="w-10 h-10 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 group-hover:bg-emerald-500/20 transition-colors duration-300">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="hand-metal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-emerald-300 transition-colors duration-300" style={{}}>The Craft</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Traditional luthiery: cutting, joining, shaping, and sanding each instrument by hand.
            </p>
</div>
</div>

<div className="group flex gap-4">
<div className="flex shrink-0 group-hover:bg-pink-500/20 transition-colors duration-300 bg-pink-500/10 w-10 h-10 border-pink-500/20 border rounded-lg items-center justify-center">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="guitar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.9 12.1 4.514-4.514"></path><path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"></path><path d="m6 16 2 2"></path><path d="M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"></path><circle cx="11.5" cy="12.5" fill="currentColor" r=".5"></circle></svg>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-pink-300 transition-colors duration-300" style={{}}>The Voice</h3>
<p className="text-zinc-400 font-light leading-relaxed text-sm" style={{}}>
              Final testing for resonance and tone, where the reclaimed wood becomes an instrument again.
            </p>
</div>
</div>
</div>
</div>

<div className="order-2 lg:order-2 w-full h-full relative flex items-center justify-center min-h-[320px] sm:min-h-[420px] lg:min-h-[500px]">
<div className="relative w-full max-w-[320px] sm:max-w-[420px] lg:max-w-[500px] aspect-square">

<div className="absolute inset-0 bg-gradient-to-tr from-sky-500/10 via-transparent to-purple-500/10 rounded-full blur-3xl opacity-50"></div>

<div className="absolute inset-0 rounded-full border border-white/5 animate-[spin_30s_linear_infinite]"></div>
<div className="absolute inset-[15%] rounded-full border border-white/5 animate-[spin_20s_linear_infinite_reverse]"></div>
<div className="absolute inset-[30%] rounded-full border border-white/5 animate-[spin_15s_linear_infinite]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-32 h-32 z-20">
<div className="w-full h-full bg-zinc-900 border border-sky-500/30 rounded-full flex items-center justify-center shadow-[0_0_50px_rgba(14,165,233,0.15)] relative z-10 backdrop-blur-md">
<div className="flex flex-col items-center">
<svg aria-hidden="true" className="w-32 h-32 block mb-1" preserveaspectratio="xMidYMid meet" viewbox="0 0 609.90263 532.08801" xmlns="http://www.w3.org/2000/svg">
<defs id="defs1">
<clippath clippathunits="userSpaceOnUse" id="clipPath546">
<path d="M 0,399.066 H 457.427 V 0 H 0 Z" id="path546" transform="translate(-196.24833,-67.651404)"></path>
</clippath>
<clippath clippathunits="userSpaceOnUse" id="clipPath548">
<path d="M 0,399.066 H 457.427 V 0 H 0 Z" id="path548" transform="translate(-352.48233,-257.15101)"></path>
</clippath>
</defs>
<g id="layer-MC0" transform="translate(-7389.9793)">
<path clipPath="url(#clipPath546)" d="m 0,0 h -78.117 v 111.381 c 0,43.143 34.974,78.117 78.117,78.117 v 0 z" id="path545" style={{fill: '#75c990', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,7651.6431,441.88613)"></path>
<path clipPath="url(#clipPath548)" d="m 0,0 v -78.947 c 0,-43.142 -34.97,-78.121 -78.113,-78.121 h -0.008 c -21.576,0 -41.104,8.749 -55.238,22.883 -14.134,14.135 -22.875,33.663 -22.875,55.238 h 78.113 V 0 h -157.894 c 0,43.142 34.979,78.112 78.121,78.112 h 79.781 C -34.97,78.112 0,43.142 0,0" id="path547" style={{fill: '#75c990', fillOpacity: '1', fillRule: 'nonzero', stroke: 'none'}} transform="matrix(1.3333333,0,0,-1.3333333,7859.9551,189.22)"></path>
</g>
</svg>
</div>
</div>

<div className="absolute inset-0 bg-sky-500/20 rounded-full animate-ping [animation-duration:3s]"></div>
</div>

<div className="animate-[spin_60s_linear_infinite] absolute top-0 right-0 bottom-0 left-0">

<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-0 hover:scale-110 transition-transform">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="trash-2" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(129, 140, 248)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 6h18"></path><path d="M19 6v14c0 1-1 2-2 2H7c-1 0-2-1-2-2V6"></path><path d="M8 6V4c0-1 1-2 2-2h4c1 0 2 1 2 2v2"></path><line x1="10" x2="10" y1="11" y2="17"></line><line x1="14" x2="14" y1="11" y2="17"></line></svg>
</div>
</div>

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-6">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-0 hover:scale-110 transition-transform">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="hand-metal" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(52, 211, 153)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M18 12.5V10a2 2 0 0 0-2-2a2 2 0 0 0-2 2v1.4"></path><path d="M14 11V9a2 2 0 1 0-4 0v2"></path><path d="M10 10.5V5a2 2 0 1 0-4 0v9"></path><path d="m7 15-1.76-1.76a2 2 0 0 0-2.83 2.82l3.6 3.6C7.5 21.14 9.2 22 12 22h2a8 8 0 0 0 8-8V7a2 2 0 1 0-4 0v5"></path></svg>
</div>
</div>

<div className="absolute left-0 top-1/2 -translate-x-6 -translate-y-1/2">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform -rotate-90 hover:scale-110 transition-transform">
<svg className="" data-icon-replaced="true" data-icon-set="lucide" data-lucide="guitar" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(244, 114, 182)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11.9 12.1 4.514-4.514"></path><path d="M20.1 2.3a1 1 0 0 0-1.4 0l-1.114 1.114A2 2 0 0 0 17 4.828v1.344a2 2 0 0 1-.586 1.414A2 2 0 0 1 17.828 7h1.344a2 2 0 0 0 1.414-.586L21.7 5.3a1 1 0 0 0 0-1.4z"></path><path d="m6 16 2 2"></path><path d="M8.2 9.9C8.7 8.8 9.8 8 11 8c2.8 0 5 2.2 5 5 0 1.2-.8 2.3-1.9 2.8l-.9.4A2 2 0 0 0 12 18a4 4 0 0 1-4 4c-3.3 0-6-2.7-6-6a4 4 0 0 1 4-4 2 2 0 0 0 1.8-1.2z"></path><circle cx="11.5" cy="12.5" fill="currentColor" r=".5"></circle></svg>
</div>
</div>

<div className="absolute right-0 top-1/2 translate-x-6 -translate-y-1/2">
<div className="w-12 h-12 bg-zinc-900 border border-white/10 rounded-xl flex items-center justify-center shadow-lg transform rotate-90 hover:scale-110 transition-transform">
<svg className="w-[20px] h-[20px]" data-icon-replaced="true" data-icon-set="lucide" data-lucide="recycle" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(56, 189, 248)', width: '20px', height: '20px'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M7 19H4.815a1.83 1.83 0 0 1-1.57-.881 1.785 1.785 0 0 1-.004-1.784L7.196 9.5"></path><path d="M11 19h8.203a1.83 1.83 0 0 0 1.556-.89 1.784 1.784 0 0 0 0-1.775l-1.226-2.12"></path><path d="m14 16-3 3 3 3"></path><path d="M8.293 13.596 7.196 9.5 3.1 10.598"></path><path d="m9.344 5.811 1.093-1.892A1.83 1.83 0 0 1 11.985 3a1.784 1.784 0 0 1 1.546.888l3.943 6.843"></path><path d="m13.378 9.633 4.096 1.098 1.097-4.096"></path></svg>
</div>
</div>
</div>

<div className="absolute w-2 h-2 bg-sky-400 rounded-full top-[30%] left-[30%] animate-ping [animation-duration:3s]"></div>
<div className="absolute w-1.5 h-1.5 bg-emerald-400 rounded-full bottom-[20%] right-[35%] animate-ping [animation-duration:4s]"></div>
<div className="absolute w-1.5 h-1.5 bg-pink-400 rounded-full top-[20%] right-[20%] animate-ping [animation-duration:2.5s]"></div>
</div>
</div>
</div>
</section>


<section className="relative overflow-hidden w-full bg-[#9cdcaa] text-[#0b0b0b] border-t border-black/10" id="contact">

<div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-[#0b0b0b]/15 via-transparent to-[#0b0b0b]/25"></div>

<div className="pointer-events-none absolute inset-0 opacity-[0.10] mix-blend-multiply" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg xmlns=%22http://www.w3.org/2000/svg%22 width=%22400%22 height=%22400%22%3E%3Cfilter id=%22n%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.9%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22400%22 height=%22400%22 filter=%22url(%23n)%22 opacity=%220.35%22/%3E%3C/svg%3E\')'}}></div>

<div className="pointer-events-none absolute -top-24 -left-24 h-[520px] w-[520px] rounded-full bg-white/25 blur-[110px] animate-blob"></div>
<div className="pointer-events-none absolute -bottom-32 -right-32 h-[560px] w-[560px] rounded-full bg-[#0b0b0b]/15 blur-[130px] animate-blob animation-delay-2000"></div>
<div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-24 lg:py-28">
<div className="mx-auto max-w-3xl text-center">

<div className="pointer-events-none absolute left-1/2 -translate-x-1/2 -top-10 h-40 w-[min(680px,90vw)] rounded-full bg-white/25 blur-[80px] opacity-70"></div>
<h2 className="font-obviously text-5xl md:text-7xl font-bold tracking-tighter text-[#0b0b0b] leading-[0.95]" style={{textShadow: '0 18px 50px rgba(11,11,11,0.18)'}}>
        Join the<br/>movement
      </h2>
<p className="mt-6 font-poppins font-light text-lg text-[#0b0b0b]/70">
        Be the first to know when we launch and unlock an exclusive early-bird discount on our first collection.
      </p>

<div className="mt-10 mx-auto max-w-xl">
<div className="flex flex-col sm:flex-row gap-3 items-stretch rounded-2xl bg-white/18 border border-black/10 p-3 backdrop-blur-md shadow-[0_18px_60px_rgba(11,11,11,0.10)]">
<input className="w-full h-12 rounded-xl bg-white text-[#0b0b0b] placeholder:text-[#0b0b0b]/45 px-5 text-sm font-poppins border border-black/10 focus:outline-none focus:ring-2 focus:ring-[#0b0b0b]/25" placeholder="Enter your email" type="email"/>
<button className="h-12 rounded-xl bg-[#0b0b0b] text-[#9cdcaa] px-6 text-sm font-semibold font-poppins whitespace-nowrap border border-black/20 hover:bg-black transition-colors">
            Get Early Access
          </button>
</div>
<p className="mt-4 text-[11px] text-[#0b0b0b]/60 font-poppins">
          We respect your privacy. No spam, just updates.
        </p>
</div>
</div>
</div>
</section>

<footer className="overflow-hidden text-[#f3f1ee] bg-[#0b0b0b] w-full border-t border-white/10 pr-6 pl-6 pb-12 relative">
<div className="max-w-7xl mx-auto relative z-10">

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-y-8 sm:gap-y-12 gap-x-6 sm:gap-x-8 pt-10 sm:pt-16 font-poppins">

<div className="col-span-2 lg:col-span-2 flex flex-col items-start pr-8">
<img alt="The Instrument Project" className="h-14 md:h-16 w-auto object-contain mb-6" onerror="this.src='https://placehold.co/200x60/0b0b0b/ffffff?text=LOGO&amp;font=montserrat'" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/eaadb9eb-6d83-42fb-b73c-8b97eb410f76_320w.png"/>
<p className="text-sm text-[#f3f1ee]/50 leading-relaxed mb-6 max-w-xs font-light">
          Crafting sustainable instruments from reclaimed materials. We blend acoustic excellence with environmental
          responsibility.
        </p>
<div className="flex gap-4">
<a className="text-[#f3f1ee]/40 hover:text-[#9cdcaa] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8A4 4 0 0 1 16 11.37m1.5-4.87h.01"></path>
</g>
</svg>
</a>
<a className="text-[#f3f1ee]/40 hover:text-[#9cdcaa] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6c2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4c-.9-4.2 4-6.6 7-3.8c1.1 0 3-1.2 3-1.2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</a>
<a className="text-[#f3f1ee]/40 hover:text-[#9cdcaa] transition-colors" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2">
<path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2a2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6M2 9h4v12H2z"></path>
<circle cx="4" cy="4" r="2"></circle>
</g>
</svg>
</a>
</div>
</div>

<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-[#f3f1ee] uppercase tracking-wider">Products</h3>
<ul className="flex flex-col gap-3 text-sm text-[#f3f1ee]/50 font-light">
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Guitars</a></li>
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Ukuleles</a></li>
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Cajon</a></li>
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Accessories</a></li>
</ul>
</div>

<div className="flex flex-col gap-4">
<h3 className="text-sm font-semibold text-[#f3f1ee] uppercase tracking-wider">Company</h3>
<ul className="flex flex-col gap-3 text-sm text-[#f3f1ee]/50 font-light">
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">About</a></li>
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Our Products</a></li>
<li><a className="hover:text-[#9cdcaa] transition-colors" href="#">Join us</a></li>
</ul>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center border-t border-white/5 mt-5 pt-0 gap-4 font-poppins text-xs text-[#f3f1ee]/40">
<p>© 2026 Instrument Project</p>
<div className="flex gap-6 font-medium">
<a className="hover:text-[#f3f1ee] transition-colors" href="#">Privacy</a>
<a className="hover:text-[#f3f1ee] transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
