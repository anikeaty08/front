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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        !function () {
      if (!window.UnicornStudio) {
        window.UnicornStudio = { isInitialized: !1 };
        var i = document.createElement("script");
        i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js";
        i.onload = function () {
          if (!window.UnicornStudio.isInitialized) {
            UnicornStudio.init();
            window.UnicornStudio.isInitialized = !0;
          }
        };
        (document.head || document.body).appendChild(i);
      }
    }();
    


        // 1. LIGHTER SMOOTH SCROLL CONFIG
        const lenis = new Lenis({
            duration: 0.8,
            easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
            direction: 'vertical',
            gestureDirection: 'vertical',
            smooth: true,
            mouseMultiplier: 0.8,
            smoothTouch: false,
            touchMultiplier: 2,
        })

        function raf(time) {
            lenis.raf(time)
            requestAnimationFrame(raf)
        }
        requestAnimationFrame(raf)

        // Connect GSAP to Lenis
        gsap.registerPlugin(ScrollTrigger);
        
        // 2. Custom Cursor Logic (Only on Desktop)
        if (window.matchMedia("(pointer: fine)").matches) {
            const cursor = document.getElementById('cursor');
            const hoverTriggers = document.querySelectorAll('.hover-trigger');
            const viewTriggers = document.querySelectorAll('.view-trigger');

            document.addEventListener('mousemove', (e) => {
                cursor.style.left = e.clientX + 'px';
                cursor.style.top = e.clientY + 'px';
            });

            hoverTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('hovered'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('hovered'));
            });

            viewTriggers.forEach(el => {
                el.addEventListener('mouseenter', () => cursor.classList.add('view-cursor'));
                el.addEventListener('mouseleave', () => cursor.classList.remove('view-cursor'));
            });
        }

        // 3. CANVAS ANIMATION
        const canvas = document.getElementById('hero-canvas');
        const ctx = canvas.getContext('2d');
        let width, height;
        let streams = [];
        const gap = 40; 

        class Stream {
            constructor(x) {
                this.x = x;
                this.y = Math.random() * height;
                this.speed = Math.random() * 2 + 0.5;
                this.length = Math.random() * 100 + 50;
                this.opacity = Math.random() * 0.3 + 0.05;
            }
            update(mouseY) {
                this.y -= this.speed;
                if (this.y + this.length < 0) {
                    this.y = height + Math.random() * 100;
                    this.speed = Math.random() * 2 + 0.5;
                }
            }
            draw(ctx) {
                ctx.strokeStyle = `rgba(255, 255, 255, 0.03)`;
                ctx.lineWidth = 1;
                ctx.beginPath();
                ctx.moveTo(this.x, 0);
                ctx.lineTo(this.x, height);
                ctx.stroke();

                const gradient = ctx.createLinearGradient(this.x, this.y, this.x, this.y + this.length);
                gradient.addColorStop(0, `rgba(255, 255, 255, 0)`);
                gradient.addColorStop(0.5, `rgba(255, 255, 255, ${this.opacity})`);
                gradient.addColorStop(1, `rgba(255, 255, 255, 0)`);

                ctx.fillStyle = gradient;
                ctx.fillRect(this.x - 1, this.y, 3, this.length);
            }
        }

        function initCanvas() {
            width = window.innerWidth;
            height = window.innerHeight;
            canvas.width = width;
            canvas.height = height;
            streams = [];
            for (let x = gap / 2; x < width; x += gap) {
                streams.push(new Stream(x));
            }
        }

        function animateCanvas() {
            ctx.clearRect(0, 0, width, height);
            streams.forEach(s => {
                s.update();
                s.draw(ctx);
            });
            requestAnimationFrame(animateCanvas);
        }

        window.addEventListener('resize', initCanvas);
        initCanvas();
        animateCanvas();

        // 4. Hero Text Mask Animation
        const headings = document.querySelectorAll('.mask-text span');
        headings.forEach((h, i) => {
            gsap.to(h, {
                y: 0,
                duration: 1.2,
                ease: "power3.out",
                delay: i * 0.1
            });
        });

        gsap.to(".animate-fade-in", { opacity: 1, duration: 1, delay: 0.5 });
        gsap.to(".animate-fade-up", { opacity: 1, y: 0, duration: 1, delay: 0.8, ease: "power2.out" });

       

        // 7. Testimonial Parallax (Only on desktop to save performance on mobile)
        if (window.innerWidth > 768) {
            const testimonialSection = document.querySelector('#testimonials');
            const cols = document.querySelectorAll('.testimonial-col');

            cols.forEach((col) => {
                const speed = col.dataset.speed;
                gsap.to(col, {
                    y: () => (speed * 100), 
                    ease: "none",
                    scrollTrigger: {
                        trigger: testimonialSection,
                        start: "top bottom",
                        end: "bottom top",
                        scrub: true
                    }
                });
            });
        }

        // 8. 3D Card Tilt (Disabled on mobile for better scrolling)
        if (window.matchMedia("(hover: hover)").matches) {
            const cards3d = document.querySelectorAll('.card-3d-wrap');
            cards3d.forEach(card => {
                card.addEventListener('mousemove', (e) => {
                    const rect = card.getBoundingClientRect();
                    const x = e.clientX - rect.left;
                    const y = e.clientY - rect.top;
                    const centerX = rect.width / 2;
                    const centerY = rect.height / 2;
                    const rotateX = ((y - centerY) / centerY) * -10;
                    const rotateY = ((x - centerX) / centerX) * 10;

                    const inner = card.querySelector('.card-3d-inner');
                    inner.style.transform = `rotateX(${rotateX}deg) rotateY(${rotateY}deg)`;
                });

                card.addEventListener('mouseleave', () => {
                    const inner = card.querySelector('.card-3d-inner');
                    inner.style.transform = `rotateX(0deg) rotateY(0deg)`;
                });
            });
        }

        // 9. NEW: Video Showcase Animation
        // Staggers the video cards in as you scroll down
        gsap.from(".video-card", {
            scrollTrigger: {
                trigger: "#work",
                start: "top 80%", 
                toggleActions: "play none none reverse"
            },
            y: 50,
            opacity: 0,
            duration: 0.8,
            stagger: 0.1,
            ease: "power3.out"
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
      <div className="video-background-container fixed top-0 w-full h-full -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" src="https://drive.google.com/file/d/121QJWC0zeFW1IjL1vLchKsb1Ax1EHpCA/view?usp=sharing"></video></div>


<div className="aura-background-component inset-0 pointer-events-none z-0 fixed saturate-200 hue-rotate-180" data-alpha-mask="80" style="mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);
           -webkit-mask-image: linear-gradient(to bottom, transparent, black 0%, black 80%, transparent);"><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"></div>

</div></div>



<div className="" id="cursor" style={{left: '760px', top: '360px'}}></div>

<nav className="fixed transition-transform duration-300 z-50 pt-4 px-4 md:pt-6 md:px-6 top-0 right-0 left-0" id="navbar">
<div className="flex flex-col glass max-w-[1600px] rounded-[24px] md:rounded-full mr-auto ml-auto px-4 py-3 md:px-8 items-center justify-between transition-all duration-300">
<div className="flex w-full items-center justify-between">
<a className="flex items-center gap-3 group hover-trigger" href="#">
<div className="flex overflow-hidden bg-center text-black bg-white w-7 h-7 md:w-8 md:h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8bb0d554-8131-4079-a0d6-89e7a16208c0_320w.png)] max-w-full bg-cover rounded-sm scale-100 items-center justify-center">
</div>
<span className="text-base md:text-lg font-semibold text-white tracking-tight font-display text-left">NOOCAP<span className="font-light text-yellow-500">MEDIA</span></span>
</a>

<div className="hidden md:flex items-center gap-12">
<a className="text-xs font-medium uppercase tracking-widest transition-colors hover-trigger hover:text-white text-yellow-400" href="#work">Work</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-medium text-yellow-400 tracking-widest" href="#services">Services</a>
<a className="uppercase transition-colors hover-trigger hover:text-white text-xs font-medium text-yellow-400 tracking-widest" href="#testimonials">Stories</a>
</div>

<div className="flex items-center gap-4">
<button className="uppercase transition-colors hover-trigger hover:bg-yellow-200 cursor-pointer text-xs font-semibold text-black tracking-wider bg-amber-400 rounded-full px-6 py-2" onclick="window.location.href='https://calendly.com/noocapm/new-meeting'" role="button">BOOK A CALL</button>
</div>
</div>

<div className="mobile-menu hidden w-full flex-col gap-6 pt-6 pb-4 border-t border-white/10 mt-4 md:hidden animate-fade-in bg-black/50 rounded-b-xl backdrop-blur-xl" style={{opacity: '1'}}>
<div className="flex flex-col gap-4 items-center">
<a className="text-sm font-medium uppercase tracking-widest text-yellow-400 hover:text-white w-full text-center py-3 border-b border-white/5" href="#work" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Work</a>
<a className="text-sm font-medium uppercase tracking-widest text-yellow-400 hover:text-white w-full text-center py-3 border-b border-white/5" href="#services" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Services</a>
<a className="text-sm font-medium uppercase tracking-widest text-yellow-400 hover:text-white w-full text-center py-3" href="#testimonials" onclick="this.closest('.mobile-menu').classList.add('hidden'); this.closest('.mobile-menu').classList.remove('flex');">Stories</a>
</div>
<button className="w-full uppercase transition-colors hover:bg-yellow-200 cursor-pointer text-xs font-semibold text-black tracking-wider bg-amber-400 rounded-full py-4 mt-2" onclick="window.location.href='https://calendly.com/noocapm/new-meeting'">BOOK A CALL</button>
</div>
</div>
</nav>

<section className="min-h-[100dvh] flex flex-col overflow-hidden z-10 md:px-6 pr-4 pl-4 relative items-center justify-center">

<canvas className="pointer-events-none z-0 opacity-40 w-full h-full absolute top-0 right-0 bottom-0 left-0" height="794" id="hero-canvas" width="1030"></canvas>
<div className="z-0 pointer-events-none bg-gradient-to-t from-[#030303] via-transparent to-[#030303]/80 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 text-center max-w-[1400px] mr-auto ml-auto relative gap-x-12 gap-y-16">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border backdrop-blur-md mb-8 md:mb-12 hover-trigger opacity-0 animate-fade-in border-white/10 bg-white/5" style={{opacity: '1'}}>
<span className="w-1.5 h-1.5 rounded-full animate-pulse bg-white"></span>
<span className="text-[10px] uppercase font-medium tracking-[0.2em] text-yellow-300" style={{}}>Global AI Agency</span>
</div>
<h1 className="font-display text-5xl sm:text-6xl md:text-8xl lg:text-[7rem] font-medium tracking-tighter leading-[0.95] mb-8 md:mb-12 mix-blend-difference text-white">
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>AI</span></span>
<span className="mask-text"><span className="text-yellow-500" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>SYSTEM</span></span>
<span className="mask-text"><span className="" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)'}}>ENGINEERED</span></span>
</h1>
<div className="flex flex-col md:flex-row items-center justify-between w-full max-w-4xl mx-auto mt-8 md:mt-12 border-t pt-8 opacity-0 animate-fade-up border-white/10" style={{translate: 'none', rotate: 'none', scale: 'none', transform: 'translate(0px, 0px)', opacity: '1'}}>
<p className="text-sm text-yellow-400 text-center md:text-left max-w-xs mb-8 md:mb-0">We automate content, workflows, and decision-making so your business scales without adding headcount.</p>
<div className="flex gap-12">
<div className="text-center md:text-left">
<div className="text-2xl font-bold font-display">150+</div>
<div className="text-[10px] uppercase tracking-widest text-yellow-500" style={{}}>Video Generated</div>
</div>
<div className="text-center md:text-left">
<div className="text-2xl font-bold font-display">10M+</div>
<div className="text-[10px] uppercase tracking-widest text-yellow-500" style={{}}>Views Generated</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-6 bg-[#030303] border-white/5 border-t pt-20 pr-4 pb-20 pl-4 relative" id="work">
<div className="z-10 max-w-[1400px] mr-auto ml-auto relative">

<div className="flex flex-col md:flex-row md:items-end md:mb-16 gap-6 md:gap-8 mb-16 items-start justify-between">
<div className="gap-x-4 gap-y-4">
<h2 className="text-3xl md:text-4xl lg:text-6xl font-display font-medium mb-4 md:mb-6 text-white">Generated Outputs</h2>
<p className="text-base md:text-lg text-yellow-400 max-w-lg">AI-generated assets that maintain brand consistency while scaling production 100x.</p>
</div>
<div className="flex items-center gap-2 text-xs font-mono text-white/40 uppercase tracking-widest">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
                    Live Generation Feed
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 w-full">

<div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_0_40px_-10px_rgba(234,179,8,0.3)] hover:border-yellow-500/50 transition-all duration-500 hover:-translate-y-2">

<div className="absolute inset-0 w-full h-full bg-gray-900">
<div className="relative w-full h-full" onmouseenter="const v = this.querySelector('video'); const iconOn = this.querySelector('.on'); const iconOff = this.querySelector('.off'); v.muted = false; v.play().then(() =&gt; { iconOn.classList.remove('hidden'); iconOff.classList.add('hidden'); }).catch(() =&gt; { v.muted = true; v.play(); iconOn.classList.add('hidden'); iconOff.classList.remove('hidden'); });" onmouseleave="this.querySelector('video').pause();">
<video className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out group-hover:grayscale-0 opacity-60 w-full h-full object-cover grayscale" loop="" playsinline="" src="https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/Hook%202%20CTA%201.mp4"></video>
<button className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center" onclick="event.stopPropagation(); const v = this.parentElement.querySelector('video'); v.muted = !v.muted; this.querySelector('.off').classList.toggle('hidden'); this.querySelector('.on').classList.toggle('hidden');">
<svg className="off lucide lucide-volume-x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" x2="17" y1="9" y2="15"></line><line x1="17" x2="23" y1="9" y2="15"></line></svg>
<svg className="on lucide lucide-volume-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
</button>
</div>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>

<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
<svg className="text-white ml-1" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>

<div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-medium text-white/90 tracking-wider uppercase">Viral Cut</span>
</div>

<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="flex items-center gap-2 mb-1 opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
<span className="inline-flex items-center justify-center w-6 h-6 rounded bg-yellow-500/10 text-yellow-500 shadow-[0_0_10px_rgba(234,179,8,0.2)]">
</span>
</div>
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 mb-2 group-hover:via-yellow-500/50 transition-all duration-500"></div>
<div className="flex justify-between items-center text-[11px] text-white/50 font-mono">
<span className="flex items-center gap-1.5"><svg className="lucide lucide-clock" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 0:42s</span>
<span className="flex items-center gap-1.5"><svg className="lucide lucide-eye" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> 1.2M Views</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_0_40px_-10px_rgba(59,130,246,0.3)] hover:border-blue-500/50 transition-all duration-500 hover:-translate-y-2" style={{transitionDelay: '100ms'}}>
<div className="absolute inset-0 w-full h-full bg-gray-900">
<div className="relative w-full h-full" onmouseenter="this.querySelector('video').play()" onmouseleave="this.querySelector('video').pause()">
<video className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out group-hover:grayscale-0 opacity-60 w-full h-full object-cover grayscale" loop="" muted="" playsinline="" poster="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/Screenshot%202025-12-25%20at%204.43.41%E2%80%AFAM.png" src="https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/REPLIT%202nd%20video.mp4"></video>
<button className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center" onclick="event.stopPropagation(); const v = this.previousElementSibling; v.muted = !v.muted; this.querySelector('.off').classList.toggle('hidden'); this.querySelector('.on').classList.toggle('hidden');">
<svg className="off lucide lucide-volume-x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon className="" points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" x2="17" y1="9" y2="15"></line><line x1="17" x2="23" y1="9" y2="15"></line></svg>
<svg className="on hidden lucide lucide-volume-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
</button>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
<svg className="text-white ml-1" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-medium text-white/90 tracking-wider uppercase">Optimized</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 mb-2 group-hover:via-blue-500/50 transition-all duration-500"></div>
<div className="flex justify-between items-center text-[11px] text-white/50 font-mono">
<span className="flex items-center gap-1.5"><svg className="lucide lucide-clock" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 0:15s</span>
<span className="flex items-center gap-1.5"><svg className="lucide lucide-eye" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> 850K Views</span>
</div>
</div>
</div>
</div>

<div className="group relative aspect-[9/16] rounded-2xl overflow-hidden bg-[#0A0A0A] border border-white/10 cursor-pointer shadow-lg hover:shadow-[0_0_40px_-10px_rgba(168,85,247,0.3)] hover:border-purple-500/50 transition-all duration-500 hover:-translate-y-2" style={{transitionDelay: '200ms'}}>
<div className="absolute inset-0 w-full h-full bg-gray-900">
<div className="relative w-full h-full" onmouseenter="const v = this.querySelector('video'); const iconOn = this.querySelector('.on'); const iconOff = this.querySelector('.off'); v.muted = false; v.play().then(() =&gt; { iconOn.classList.remove('hidden'); iconOff.classList.add('hidden'); }).catch(() =&gt; { v.muted = true; v.play(); iconOn.classList.add('hidden'); iconOff.classList.remove('hidden'); });" onmouseleave="this.querySelector('video').pause();">
<video className="group-hover:opacity-100 group-hover:scale-110 transition-all duration-700 ease-out group-hover:grayscale-0 opacity-60 w-full h-full object-cover grayscale" loop="" playsinline="" src="https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/AQOziJ--1xHV_dUDZ-djLXQQU5z5_FK-z-4ZuPaE3NUgSWv_pxH7cVJuozuxw1UMBhjNSKWRH3DNmIFZMrqgX5BxS2hAm55jfpmIghU.mp4"></video>
<button className="absolute top-4 left-4 z-20 p-2.5 rounded-full bg-black/40 backdrop-blur-md border border-white/10 text-white/90 hover:text-white hover:bg-black/60 transition-all duration-300 opacity-0 group-hover:opacity-100 cursor-pointer flex items-center justify-center" onclick="event.stopPropagation(); const v = this.parentElement.querySelector('video'); v.muted = !v.muted; this.querySelector('.off').classList.toggle('hidden'); this.querySelector('.on').classList.toggle('hidden');">
<svg className="off lucide lucide-volume-x" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><line x1="23" x2="17" y1="9" y2="15"></line><line x1="17" x2="23" y1="9" y2="15"></line></svg>
<svg className="on lucide lucide-volume-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
</button>
</div>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-80 group-hover:opacity-60 transition-opacity duration-500 pointer-events-none"></div>
<div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity duration-500 z-10 pointer-events-none">
<div className="w-14 h-14 rounded-full bg-white/10 backdrop-blur-md flex items-center justify-center border border-white/20 shadow-xl transform scale-50 group-hover:scale-100 transition-transform duration-500 delay-75">
<svg className="text-white ml-1" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><polygon points="5 3 19 12 5 21 5 3"></polygon></svg>
</div>
</div>
<div className="absolute top-4 right-4 px-2.5 py-1 rounded-full bg-black/40 backdrop-blur-xl border border-white/10 flex items-center gap-1.5 opacity-0 group-hover:opacity-100 transition-all duration-500 delay-100 transform translate-y-2 group-hover:translate-y-0">
<div className="w-1.5 h-1.5 rounded-full bg-purple-500 animate-pulse"></div>
<span className="text-[10px] font-mono font-medium text-white/90 tracking-wider uppercase">Live</span>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 z-20 translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
<div className="flex flex-col gap-2">
<div className="h-[1px] w-full bg-gradient-to-r from-transparent via-white/20 to-transparent mt-2 mb-2 group-hover:via-purple-500/50 transition-all duration-500"></div>
<div className="flex justify-between items-center text-[11px] text-white/50 font-mono">
<span className="flex items-center gap-1.5"><svg className="lucide lucide-clock" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><circle cx="12" cy="12" r="10"></circle><polyline points="12 6 12 12 16 14"></polyline></svg> 1:00m</span>
<span className="flex items-center gap-1.5"><svg className="lucide lucide-eye" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10"><path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z"></path><circle cx="12" cy="12" r="3"></circle></svg> 2.4M Views</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="z-10 bg-[#050509] border-white/5 border-t pt-16 md:pt-40 px-4 md:px-6 pb-0 relative" id="services">
<div className="max-w-7xl mr-auto ml-auto gap-x-4 gap-y-4">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24">
<div className="lg:sticky md:top-32 lg:mb-0 h-fit mb-12 relative top-0">
<h2 className="md:text-5xl lg:text-6xl md:mb-8 text-4xl font-medium text-white tracking-tight font-display mb-6">Our <br/>Expertise</h2>
<p className="text-base md:text-lg text-yellow-400 text-justify max-w-md mb-8 md:mb-12">We engineer AI-driven systems that automate execution, reduce dependency on people, and scale operations with precision.</p>
<ul className="space-y-3 md:space-y-4 text-sm md:text-base">
<li className="flex text-yellow-400 gap-x-4 gap-y-4 items-center font-medium">Content System Architecture</li>
<li className="flex text-yellow-500 gap-x-4 gap-y-4 items-center font-medium">AI Repurposing Engines</li>
<li className="flex text-yellow-500 gap-x-4 gap-y-4 items-center font-medium">Distribution &amp; Publishing Automation</li>
</ul>
</div>
<div className="flex flex-col gap-8 md:gap-12 pb-16">

<div className="card-3d-wrap group h-auto min-h-[400px] md:h-[450px] w-full cursor-pointer hover-trigger">
<div className="card-3d-inner relative w-full h-full border rounded-2xl p-4 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise default border-white/10" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '20px 20px'}}>
</div>

<div className="card-element relative w-full h-48 md:h-64 border bg-[#0f0f0f]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center border-white/10">

<div className="absolute inset-0 z-0 opacity-20" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255, 255, 255, 0.1) 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>

<svg className="absolute inset-0 w-full h-full z-0 pointer-events-none" preserveaspectratio="none" viewbox="0 0 400 256">

<path d="M70 85 C 130 85, 130 128, 200 128" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>
<path d="M70 171 C 130 171, 130 128, 200 128" fill="none" stroke="rgba(255,255,255,0.1)" stroke-dasharray="4 4" strokeWidth="1.5"></path>

<path d="M200 128 C 270 128, 270 64, 330 64" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M200 128 C 270 128, 270 128, 330 128" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>
<path d="M200 128 C 270 128, 270 192, 330 192" fill="none" stroke="rgba(255,255,255,0.1)" strokeWidth="1.5"></path>

<circle className="opacity-80" fill="#eab308" r="2">
<animatemotion dur="3s" keypoints="0;1" keytimes="0;1" path="M70 85 C 130 85, 130 128, 200 128" repeatcount="indefinite"></animatemotion>
</circle>
<circle className="opacity-80" fill="#22c55e" r="2">
<animatemotion dur="2s" path="M200 128 C 270 128, 270 64, 330 64" repeatcount="indefinite"></animatemotion>
</circle>
</svg>

<div className="relative z-10 w-full h-full flex items-center justify-between px-2 md:px-10">

<div className="flex flex-col gap-4 md:gap-10">

<div className="flex items-center gap-3 p-1.5 md:p-2 rounded-lg bg-[#0A0A0A] border border-white/10 shadow-lg transform transition-transform hover:scale-105">
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded bg-blue-500/10 text-blue-400">
<svg className="lucide lucide-file-text" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7.5L14.5 2z"></path><polyline points="14 2 14 8 20 8"></polyline><line x1="16" x2="8" y1="13" y2="13"></line><line x1="16" x2="8" y1="17" y2="17"></line><line x1="10" x2="8" y1="9" y2="9"></line></svg>
</div>
<div className="hidden sm:block">
<div className="text-[9px] font-semibold text-white tracking-wider uppercase">Source</div>
</div>
</div>

<div className="flex items-center gap-3 p-1.5 md:p-2 rounded-lg bg-[#0A0A0A] border border-white/10 shadow-lg transform transition-transform hover:scale-105">
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded bg-purple-500/10 text-purple-400">
<svg className="lucide lucide-video" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path className="" d="m22 8-6 4 6 4V8Z"></path><rect className="" height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</div>
<div className="hidden sm:block">
<div className="text-[9px] font-semibold text-white tracking-wider uppercase">Ingest</div>
</div>
</div>
</div>

<div className="relative group">
<div className="absolute inset-0 bg-yellow-500/20 blur-xl rounded-full opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 md:w-16 md:h-16 rounded-xl bg-gradient-to-br from-[#1a1a1a] to-black border border-white/20 shadow-[0_0_20px_rgba(255,255,255,0.05)] flex items-center justify-center relative z-10">
<svg className="lucide lucide-cpu text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect className="" height="16" rx="2" width="16" x="4" y="4"></rect><rect height="6" rx="1" width="6" x="9" y="9"></rect><path d="M15 2v2"></path><path d="M15 20v2"></path><path d="M2 15h2"></path><path d="M2 9h2"></path><path d="M20 15h2"></path><path d="M20 9h2"></path><path d="M9 2v2"></path><path d="M9 20v2"></path></svg>
</div>

<div className="absolute -bottom-6 md:-bottom-8 left-1/2 -translate-x-1/2 flex items-center gap-1.5 whitespace-nowrap px-2 py-1 rounded-full bg-white/5 border border-white/5 backdrop-blur-sm">
<div className="w-1.5 h-1.5 rounded-full bg-yellow-500 animate-pulse"></div>
<span className="text-[8px] font-mono font-medium text-white/80 tracking-tight">PROCESSING</span>
</div>
</div>

<div className="flex flex-col gap-2 md:gap-5">

<div className="flex items-center justify-end gap-3 group">
<div className="hidden sm:block text-right">
<div className="text-[9px] font-semibold text-white tracking-wider uppercase">Web</div>
</div>
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A0A0A] border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors">
<svg className="lucide lucide-globe" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>
</div>

<div className="flex items-center justify-end gap-3 group">
<div className="hidden sm:block text-right">
<div className="text-[9px] font-semibold text-white tracking-wider uppercase">Social</div>
</div>
<div className="flex items-center justify-center w-6 h-6 md:w-8 md:h-8 rounded-full bg-[#0A0A0A] border border-white/10 text-slate-400 group-hover:text-white group-hover:border-white/30 transition-colors">
<svg className="lucide lucide-smartphone" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
</div>
</div>
</div>

<div className="absolute bottom-3 left-4 text-[8px] font-mono text-white/20 uppercase tracking-widest pointer-events-none">
        System Architecture v2.0
    </div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-2 tracking-tight">Content System Architecture</h3>
<p className="text-yellow-500 max-w-sm text-sm md:text-base">We design the end-to-end AI architecture that converts raw content into structured, repeatable, and scalable media workflows.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group cursor-pointer hover-trigger w-full h-auto min-h-[400px] md:h-[450px]">
<div className="card-3d-inner relative w-full h-full border rounded-2xl p-4 md:p-10 flex flex-col justify-between shadow-2xl overflow-hidden bg-noise default border-white/10" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>

<div className="absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(rgba(255, 255, 255, 0.03) 1px, transparent 1px)', backgroundSize: '100% 40px'}}>
</div>

<div className="card-element w-full h-48 md:h-64 mb-6 relative perspective-1000">

<div className="absolute top-8 left-8 w-[85%] h-48 border border-white/5 bg-white/[0.02] rounded-xl -z-10 transform translate-x-2 translate-y-2"></div>

<div className="w-full h-full bg-[#050505] border border-white/10 rounded-xl overflow-hidden flex flex-col shadow-2xl relative group hover:-translate-y-1 transition-transform duration-500">

<div className="h-8 border-b border-white/5 flex items-center px-4 bg-white/[0.02] justify-between">
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-[#FF5F56]/20 border border-[#FF5F56]/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#FFBD2E]/20 border border-[#FFBD2E]/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27C93F]/20 border border-[#27C93F]/50"></div>
</div>
<div className="text-[9px] font-mono text-white/30 flex items-center gap-2">
<span className="">engine.py</span>
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
</div>
</div>

<div className="flex-1 p-3 md:p-5 flex flex-col relative font-mono text-[10px]">

<div className="flex-1 flex pr-2 pl-2 relative items-center justify-between">

<svg className="absolute inset-0 w-full h-full pointer-events-none opacity-30" preserveaspectratio="none" viewbox="0 0 280 140">

<path d="M50 70 L 110 70" stroke="url(#gradient-line-aura)" stroke-dasharray="4 2" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="1s" from="12" repeatcount="indefinite" to="0"></animate>
</path>

<path d="M140 70 C 170 70, 170 40, 210 40" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M140 70 C 170 70, 170 70, 210 70" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<path d="M140 70 C 170 70, 170 100, 210 100" fill="none" stroke="rgba(255,255,255,0.2)" strokeWidth="1"></path>
<defs>
<lineargradient id="gradient-line-aura" x1="0%" x2="100%" y1="0%" y2="0%">
<stop offset="0%" stop-color="rgba(59, 130, 246, 0.2)"></stop>
<stop offset="100%" stop-color="#3b82f6"></stop>
</lineargradient>
</defs>
</svg>

<div className="flex flex-col items-center gap-2 z-10 w-12 md:w-16">
<div className="flex transition-colors text-blue-400 bg-blue-500/10 w-8 h-8 md:w-10 md:h-10 border-blue-500/30 border rounded-lg relative shadow-[0_0_15px_rgba(59,130,246,0.15)] items-center justify-center">
<svg className="lucide lucide-video" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m22 8-6 4 6 4V8Z"></path><rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect></svg>
</div>
<span className="text-[8px] text-white/40 uppercase tracking-wider">Source</span>
</div>

<div className="relative z-10 w-12 md:w-16 flex flex-col items-center gap-2">
<div className="w-10 h-10 md:w-12 md:h-12 rounded-xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/10 flex items-center justify-center shadow-[0_0_15px_rgba(59,130,246,0.15)] relative backdrop-blur-sm">
<svg className="lucide lucide-sparkles text-blue-400 animate-pulse" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275Z"></path></svg>

<div className="absolute inset-0 rounded-xl border border-white/5 animate-[spin_4s_linear_infinite]"></div>
</div>
</div>

<div className="flex flex-col gap-2 z-10 w-24 md:w-28">

<div className="flex items-center gap-2 bg-[#111] border border-white/10 p-1.5 rounded-lg shadow-sm">
<div className="w-4 h-4 md:w-5 md:h-5 rounded bg-pink-500/10 flex items-center justify-center text-pink-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" width="10" x="7" y="4"></rect><path d="M11 5h2"></path><path d="M12 17v.01"></path></svg>
</div>
<div className="flex flex-col w-full">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[8px] text-white/90 leading-none">Shorts</span>
<span className="text-[7px] text-green-500">DONE</span>
</div>
<div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-full h-full bg-pink-500"></div></div>
</div>
</div>

<div className="flex items-center gap-2 bg-[#111] border border-white/10 p-1.5 rounded-lg shadow-sm opacity-90">
<div className="w-4 h-4 md:w-5 md:h-5 rounded bg-sky-500/10 flex items-center justify-center text-sky-500">
<svg fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
<div className="flex flex-col w-full">
<div className="flex justify-between items-center mb-0.5">
<span className="text-[8px] text-white/90 leading-none">Thread</span>
<span className="text-[7px] text-yellow-500">82%</span>
</div>
<div className="w-full h-0.5 bg-white/10 rounded-full overflow-hidden"><div className="w-[82%] h-full bg-sky-500 animate-pulse"></div></div>
</div>
</div>
</div>
</div>

<div className="mt-4 pt-3 border-t border-white/5 text-[9px] text-white/30 flex flex-col gap-1">
<div className="flex gap-2">
<span className="text-green-500">✓</span>
<span className="">Analyzed audio waveforms (12 key moments)</span>
</div>
</div>
</div>
</div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-2 tracking-tight">AI Repurposing Engine</h3>
<p className="text-yellow-500 max-w-sm text-sm md:text-base">A modular AI system that creates short-form videos, carousels, posts, and captions automatically.</p>
</div>
</div>
</div>

<div className="card-3d-wrap group cursor-pointer hover-trigger w-full h-auto min-h-[400px] md:h-[450px]">
<div className="card-3d-inner flex flex-col overflow-hidden default w-full h-full border-white/10 border rounded-2xl p-4 md:p-10 relative shadow-2xl justify-between" style={{transform: 'rotateX(0deg) rotateY(0deg)'}}>

<div className="mt-10 mb-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgba(255,255,255,0.05) 1px, transparent 1px)', backgroundSize: '30px 30px'}}>

<div className="hidden md:block absolute bottom-10 right-8 w-48 bg-[#0A0A0A]/90 backdrop-blur-md border border-white/10 rounded-xl p-3 shadow-2xl transform rotate-3 transition-transform duration-500 group-hover:rotate-0 group-hover:-translate-y-2 pointer-events-none" style={{visibility: 'hidden'}}>
<div className="flex items-center justify-between mb-2">
<span className="text-[9px] font-medium tracking-widest text-slate-400 uppercase font-mono">Distribution</span>
<div className="h-1.5 w-1.5 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.6)] animate-pulse"></div>
</div>
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg bg-white/5 border border-white/5 text-white">
<svg className="lucide lucide-share-2" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><circle cx="18" cy="5" r="3"></circle><circle cx="6" cy="12" r="3"></circle><circle cx="18" cy="19" r="3"></circle><line x1="8.59" x2="15.42" y1="13.51" y2="17.49"></line><line x1="15.41" x2="8.59" y1="6.51" y2="10.49"></line></svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-medium text-white">Auto-Publish</span>
<span className="text-[9px] font-medium text-slate-500">Queue: Active</span>
</div>
</div>

<div className="mt-3 flex gap-1">
<div className="h-0.5 w-full bg-yellow-500/80 rounded-full"></div>
<div className="h-0.5 w-full bg-yellow-500/80 rounded-full"></div>
<div className="h-0.5 w-full bg-white/10 rounded-full"></div>
</div>
</div>
</div>

<div className="card-element relative w-full h-48 md:h-64 border bg-[#050505]/80 backdrop-blur-sm rounded-xl overflow-hidden mb-6 flex items-center justify-center border-white/10">

<div className="relative w-full h-full flex items-center justify-center scale-75 md:scale-100">

<div className="absolute border rounded-full border-white/5 w-64 h-64 animate-[spin_20s_linear_infinite]"></div>
<div className="absolute border rounded-full border-white/10 w-48 h-48 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute border rounded-full border-white/5 w-32 h-32 animate-pulse"></div>

<div className="relative z-10 w-12 h-12 bg-white/10 rounded-full flex items-center justify-center border border-white/20 shadow-[0_0_30px_rgba(255,255,255,0.2)]">
<svg className="lucide lucide-globe text-white" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
</div>


<div className="absolute top-1/4 right-1/4 transform translate-x-4 -translate-y-4">
<div className="w-8 h-8 bg-[#1DA1F2]/10 border border-[#1DA1F2]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '3s'}}>
<svg className="text-[#1DA1F2]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
</div>

<div className="absolute bottom-1/3 left-1/4 transform -translate-x-4 translate-y-2">
<div className="w-8 h-8 bg-[#0077B5]/10 border border-[#0077B5]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '4s', animationDelay: '1s'}}>
<svg className="text-[#0077B5]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</div>
</div>

<div className="absolute bottom-1/4 right-1/3 transform translate-x-2 translate-y-4">
<div className="w-8 h-8 bg-[#FF0000]/10 border border-[#FF0000]/40 rounded-lg flex items-center justify-center backdrop-blur-md animate-bounce" style={{animationDuration: '3.5s', animationDelay: '0.5s'}}>
<svg className="text-[#FF0000]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path className="" d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</div>
</div>
</div>

<div className="hidden xs:flex absolute bottom-4 left-4 gap-3 items-center bg-black/80 backdrop-blur-md px-3 py-2 rounded-lg border border-white/10 group-hover:scale-105 transition-transform duration-300">
<div className="flex flex-col">
<span className="text-[9px] uppercase tracking-widest text-slate-400 font-mono">Total Reach</span>
<span className="text-xs font-mono font-bold text-yellow-500">12.4M+ Viewers</span>
</div>
<div className="h-2 w-12 bg-white/10 rounded-full overflow-hidden">
<div className="h-full bg-green-500 w-[80%] animate-pulse"></div>
</div>
</div>
</div>

<div className="card-element relative z-10">
<h3 className="text-2xl md:text-3xl font-medium text-white font-display mb-2 tracking-tight">Distribution &amp; Publishing</h3>
<p className="text-yellow-500 max-w-sm text-sm md:text-base">Automated scheduling and multi-platform publishing that ensures your content reaches the right audience at peak times.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-6 overflow-hidden bg-black border-white/10 border-t pt-20 pr-4 pb-20 pl-4 relative" id="testimonials">
<div className="z-10 max-w-[1400px] mr-auto ml-auto relative">
<div className="text-center mb-12 md:mb-20">
<h2 className="text-3xl md:text-6xl font-medium text-white font-display mb-4 md:mb-6 tracking-tight">Client Stories</h2>
<p className="uppercase text-xs text-yellow-500 tracking-widest">See how Creators scale with us</p>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2">

<div className="absolute inset-0 w-full h-full bg-gray-900">
<video className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="" poster="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=800&amp;q=80" src="https://cdn.coverr.co/videos/coverr-people-working-in-office-4566/1080p.mp4"></video>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="group-hover:grayscale-0 transition-all duration-500 w-full h-full object-cover grayscale" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-medium text-white">Brad Gains</div>
<div className="uppercase text-xs text-yellow-500 tracking-wider">CREATOR</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2 md:-mt-12">

<div className="absolute inset-0 w-full h-full bg-gray-900">
<video className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="" src="https://pub-21eb86ee9a1c403b9a6b04eaab4c3966.r2.dev/Chris%20Testimonial%20.mp4"></video>
</div>

<button aria-label="Toggle Mute" className="hover:bg-black/60 transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0 hover:scale-110 cursor-pointer text-white bg-black/40 opacity-0 z-30 border-white/10 border rounded-full pt-2.5 pr-2.5 pb-2.5 pl-2.5 absolute top-4 right-4 backdrop-blur-md translate-y-2" onclick="event.stopPropagation(); const v = this.closest('.group').querySelector('video'); v.muted = !v.muted; this.querySelector('.mute-icon').classList.toggle('hidden'); this.querySelector('.unmute-icon').classList.toggle('hidden');">

<svg className="mute-icon lucide lucide-volume-x w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<line x1="23" x2="17" y1="9" y2="15"></line>
<line x1="17" x2="23" y1="9" y2="15"></line>
</svg>

<svg className="unmute-icon hidden lucide lucide-volume-2" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon>
<path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path>
<path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path>
</svg>
</button>

<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/7ca4f769-07d3-4430-bcc9-32949b6c22a5_320w.jpg"/>
</div>
<div className="">
<div className="text-sm font-medium text-white">Chris Cordero</div>
<div className="text-xs uppercase tracking-wider text-yellow-500">Creator</div>
</div>
</div>
</div>
</div>

<div className="group relative rounded-2xl overflow-hidden aspect-[9/16] border border-white/10 bg-[#0A0A0A] transition-transform duration-500 hover:-translate-y-2">
<div className="absolute inset-0 w-full h-full bg-gray-900">
<video className="group-hover:opacity-100 group-hover:scale-105 transition-all duration-700 ease-out opacity-60 w-full h-full object-cover" loop="" muted="" onmouseout="this.pause()" onmouseover="this.play()" playsinline="" poster="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=800&amp;q=80" src="https://cdn.coverr.co/videos/coverr-woman-working-on-her-laptop-328/1080p.mp4"></video>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-transparent opacity-90 transition-opacity duration-300 pointer-events-none">
</div>
<div className="absolute bottom-0 left-0 w-full p-6 md:p-8 z-20">
<div className="flex items-center gap-4 border-t border-white/10 pt-4">
<div className="w-10 h-10 rounded-full overflow-hidden border border-white/20">
<img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=150&amp;q=80"/>
</div>
<div className="">
<div className="text-sm font-medium text-white">David K.</div>
<div className="text-xs uppercase tracking-wider text-yellow-500">Founder, Orbit</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="relative overflow-hidden bg-[#050509] border-t pt-16 md:pt-24 pb-8 md:pb-12 border-white/5">

<div className="absolute top-0 left-0 right-0 h-[1px] bg-gradient-to-r from-transparent to-transparent opacity-50 via-white/20"></div>

<div className="absolute -top-[150px] left-1/2 -translate-x-1/2 w-[300px] md:w-[600px] h-[300px] blur-[80px] rounded-full pointer-events-none mix-blend-screen bg-white/5"></div>
<div className="max-w-[1400px] mx-auto px-4 md:px-6 relative z-10">

<div className="grid grid-cols-1 lg:grid-cols-4 gap-12 mb-16 md:mb-20">

<div className="lg:col-span-1 space-y-6">
<a className="flex items-center gap-3" href="#">
<div className="flex overflow-hidden text-black bg-white w-8 h-8 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/700319bb-4971-4d91-b1bc-1343b4dd3841_320w.png)] bg-contain rounded-sm items-center justify-center">
</div>
<span className="text-lg font-bold text-white tracking-tight font-display">NOOCAP<span className="font-light text-yellow-500">MEDIA</span></span>
</a>
<p className="text-sm leading-relaxed max-w-xs text-yellow-400" style={{}}>
                        Engineering the digital nervous system for global brands. London, New York, Tokyo.
                    </p>
</div>

<div className="lg:col-span-2 grid grid-cols-2 md:grid-cols-3 gap-8">
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Explore</h4>
<ul className="space-y-4 text-sm text-yellow-500" style={{}}>
<li className=""><a className="transition-colors hover:text-white" href="#">Work</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Services</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Process</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Company</h4>
<ul className="space-y-4 text-sm text-yellow-500" style={{}}>
<li className=""><a className="transition-colors hover:text-white" href="#">Careers</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">News</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Contact</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Socials</h4>
<ul className="space-y-4 text-sm text-yellow-500" style={{}}>
<li className=""><a className="transition-colors hover:text-white" href="#">Twitter / X</a></li>
<li className=""><a className="transition-colors hover:text-white" href="https://www.linkedin.com/company/107967592/admin/dashboard/">LinkedIn</a></li>
<li className=""><a className="transition-colors hover:text-white" href="#">Instagram</a></li>
</ul>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-xs font-bold uppercase tracking-widest mb-6 text-white">Stay Updated</h4>
<div className="relative">
<input className="focus:outline-none focus:border-white/30 transition-colors text-sm text-white bg-white/5 w-full border-white/10 border rounded-lg pt-3 pr-4 pb-3 pl-4" placeholder="Email address" type="email"/>
<button className="absolute right-2 top-2 p-1 rounded transition-colors bg-white text-black hover:bg-yellow-200" style={{}}>
<svg className="w-[16px] h-[16px]" data-icon-replaced="true" fill="none" height="16" stroke="currentColor" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16"><polyline points="9 18 15 12 9 6"></polyline></svg>
</button>
</div>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row justify-between items-center gap-4 border-white/10">
<div className="text-[10px] uppercase text-yellow-600 tracking-widest text-center md:text-left">© 2025 NOOCAPMEDIA Agency. All Rights Reserved.</div>
<div className="flex gap-6 text-[10px] uppercase tracking-widest text-yellow-600" style={{}}>
<a className="transition-colors hover:text-yellow-400" href="#" style={{}}>Privacy Policy</a>
<a className="transition-colors hover:text-yellow-400" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
