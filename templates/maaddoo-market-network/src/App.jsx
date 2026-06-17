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



        document.addEventListener('DOMContentLoaded', () => {
            // MOUSE TRACKER LOGIC
            const tracker = document.getElementById('mouse-tracker');
            let mouseX = 0, mouseY = 0;
            let trackerX = 0, trackerY = 0;
            
            // Initial positioning center
            trackerX = window.innerWidth / 2;
            trackerY = window.innerHeight / 2;

            document.addEventListener('mousemove', (e) => {
                mouseX = e.clientX;
                mouseY = e.clientY;
                // Fade in on first movement
                if(tracker.style.opacity === '0' || tracker.style.opacity === '') {
                    tracker.style.opacity = '1';
                }
            });

            function animateTracker() {
                // Smooth easing (intertia)
                // The 0.1 factor determines the delay/lag. Lower = lazier/smoother.
                const ease = 0.08;
                
                const dx = mouseX - trackerX;
                const dy = mouseY - trackerY;
                
                trackerX += dx * ease;
                trackerY += dy * ease;
                
                // Centering the div (width/height is 600px, so -300)
                tracker.style.transform = `translate3d(${trackerX - 300}px, ${trackerY - 300}px, 0)`;
                
                requestAnimationFrame(animateTracker);
            }
            
            animateTracker();

            // --- END MOUSE TRACKER LOGIC ---


            // Data for marquees
            const logos = [
                '<span class="iconify text-white/50 text-6xl" data-icon="logos:walmart"></span>',
                '<span class="iconify text-white/50 text-5xl" data-icon="logos:dhl"></span>',
                '<span class="iconify text-white/50 text-5xl" data-icon="simple-icons:amazon"></span>',
                '<span class="iconify text-white/50 text-5xl" data-icon="logos:fedex"></span>',
                '<span class="iconify text-white/50 text-5xl" data-icon="logos:maersk"></span>',
                '<span class="iconify text-white/50 text-5xl" data-icon="logos:ups"></span>'
            ];

            const testimonials = [
                {
                    text: "Exceptional service. The team found us the exact distributors we needed without us having to travel.",
                    name: "Jameson Wu",
                    role: "PRODUCER",
                    avatar: "JW"
                },
                {
                    text: "MAADDOO's manual verification gives us peace of mind. We know every partner is legitimate.",
                    name: "Marcus Thorne",
                    role: "WHOLESALER",
                    avatar: "MT"
                },
                {
                    text: "They handled the negotiations perfectly. We got better rates than we could have secured ourselves.",
                    name: "Sarah Jenkins",
                    role: "RETAIL MANAGER",
                    avatar: "SJ"
                },
                {
                    text: "A true partner. Their logistics coordination is flawless, ensuring our shelves stay stocked.",
                    name: "David Chen",
                    role: "SUPERMARKET OWNER",
                    avatar: "DC"
                }
            ];

            // Setup Marquee 1 (Logos)
            const row1 = document.getElementById('marquee-row-1');
            const logoContent = logos.map(logo => `
                <div class="w-[280px] h-[160px] flex-shrink-0 flex items-center justify-center bg-[#0A0A0A] border border-white/5 rounded-2xl hover:border-[#EB7215]/30 hover:bg-[#EB7215]/5 transition-colors duration-300 group">
                    <div class="grayscale opacity-40 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-300 scale-90">
                        ${logo}
                    </div>
                </div>
            `).join('');
            // Duplicate content 6 times for smooth infinite scroll
            row1.innerHTML = Array(6).fill(logoContent).join('');

            // Setup Marquee 2 (Testimonials)
            const row2 = document.getElementById('marquee-row-2');
            const testimonialContent = testimonials.map(t => `
                <div class="w-[400px] h-[260px] flex-shrink-0 p-8 flex flex-col justify-between bg-[#0A0A0A] border border-white/5 rounded-2xl hover:border-[#EB7215]/30 hover:bg-[#EB7215]/5 transition-colors duration-300 group">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" class="text-[#EB7215] mb-4 opacity-80"><path fill="currentColor" d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V11C14.017 11.5523 13.5693 12 13.017 12H12.017V5H22.017V15C22.017 18.3137 19.3307 21 16.017 21H14.017ZM5.0166 21L5.0166 18C5.0166 16.8954 5.91203 16 7.0166 16H10.0166C10.5689 16 11.0166 15.5523 11.0166 15V9C11.0166 8.44772 10.5689 8 10.0166 8H6.0166C5.46432 8 5.0166 8.44772 5.0166 9V11C5.0166 11.5523 4.56889 12 4.0166 12H3.0166V15C13.0166 18.3137 10.3303 21 7.0166 21H5.0166Z"></path></svg>
                        <p class="text-neutral-300 font-light italic font-inter text-lg leading-relaxed">"${t.text}"</p>
                    </div>
                    <div class="flex items-center gap-3">
                        <div class="w-10 h-10 rounded-full bg-neutral-800 flex items-center justify-center text-xs font-bold text-neutral-400 border border-white/10 font-inter">${t.avatar}</div>
                        <div>
                            <div class="text-white text-sm font-semibold font-inter">${t.name}</div>
                            <div class="text-[#EB7215] text-[10px] font-bold uppercase tracking-wider font-inter">${t.role}</div>
                        </div>
                    </div>
                </div>
            `).join('');
            row2.innerHTML = Array(6).fill(testimonialContent).join('');

            // Marquee Animation Logic
            function initMarquee(element, baseSpeed) {
                let currentScroll = 0;
                let currentSpeed = baseSpeed;
                let targetSpeed = baseSpeed;
                
                // Get half width to know when to loop reset
                // We use scrollWidth / 2 because we duplicated content enough times
                // Logic: scroll until half, then snap back to 0
                
                element.addEventListener('mouseenter', () => {
                    targetSpeed = -baseSpeed; // Reverse direction on hover
                });

                element.addEventListener('mouseleave', () => {
                    targetSpeed = baseSpeed; // Restore direction
                });

                function animate() {
                    // Smooth lerp for speed
                    currentSpeed += (targetSpeed - currentSpeed) * 0.05;
                    
                    // Apply speed
                    currentScroll += currentSpeed;

                    // Infinite loop logic
                    const maxScroll = element.scrollWidth / 2;
                    
                    if (currentScroll >= maxScroll) {
                        currentScroll = 0;
                    } else if (currentScroll <= 0) {
                        currentScroll = maxScroll;
                    }

                    element.style.transform = `translate3d(${-currentScroll}px, 0, 0)`;
                    requestAnimationFrame(animate);
                }

                animate();
            }

            // Initialize Rows
            initMarquee(row1, 0.8); 
            initMarquee(row2, -0.8);
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
      

<div id="mouse-tracker">
<div className="tracker-blob"></div>
</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#050505]/80 backdrop-blur-lg">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#EB7215] iconify--lucide" data-icon="lucide:layers" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-lg font-semibold tracking-tight text-white font-inter">MAADDOO</span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm text-neutral-400 font-medium">
<a className="hover:text-white transition-colors font-inter" href="#network">Our Network</a>
<a className="hover:text-white transition-colors font-inter" href="#service">Services</a>
<a className="hover:text-white transition-colors font-inter" href="#process">How We Work</a>
</div>
<a className="hidden md:flex items-center gap-2 text-xs font-medium bg-white/5 hover:bg-white/10 border border-white/10 text-white px-4 py-2 rounded-full transition-all z-20" href="#contact">
<span className="font-inter">Get a Quote</span>
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" data-width="14" height="14" role="img" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute inset-0 hero-grid pointer-events-none z-0"></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#EB7215] opacity-[0.08] blur-[120px] rounded-full pointer-events-none"></div>
<div className="z-10 max-w-7xl mx-auto px-6 relative">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col items-center lg:items-start text-center lg:text-left order-2 lg:order-1 relative z-20">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#EB7215]/30 bg-[#EB7215]/5 mb-8 backdrop-blur-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#EB7215] animate-pulse"></span>
<span className="text-xs font-medium text-[#EB7215] tracking-wide uppercase font-inter">Supply Chain Expertise</span>
</div>
<h1 className="text-5xl lg:text-7xl tracking-tighter text-white mb-6 leading-[1.1] font-inter font-semibold">
                Your Boots on the Ground in 
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 via-neutral-400 to-neutral-600 font-inter font-semibold">Southern Ethiopia.</span>
</h1>
<p className="max-w-xl text-lg text-neutral-400 leading-relaxed mb-10 font-light font-inter mx-auto lg:mx-0">
                We bridge the gap between high-value producers and retailers. No apps to learn, no complex systems—just a <span className="text-white font-medium font-inter">dedicated team</span> ensuring your products get to the right shelves on time.
            </p>
<div className="flex flex-col sm:flex-row w-full sm:w-auto gap-4 mb-12 justify-center lg:justify-start">
<button className="px-8 py-4 bg-[#EB7215] hover:bg-[#d6630e] text-black font-medium text-sm rounded-lg transition-all duration-300 shadow-[0_0_20px_-5px_rgba(235,114,21,0.5)] flex items-center justify-center gap-2 group whitespace-nowrap">
<span className="font-inter">Consult with Us</span>
<svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform iconify iconify--lucide" data-icon="lucide:phone-call" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.05 12.05 0 0 0 .57 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.03 12.03 0 0 0 2.81.57A2 2 0 0 1 22 16.92z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</button>
<button className="px-8 py-4 bg-transparent border border-neutral-700 hover:border-white text-white font-medium text-sm rounded-lg transition-all duration-300 flex items-center justify-center gap-2 group whitespace-nowrap">
<span className="font-inter">View Coverage Area</span>
<svg aria-hidden="true" className="group-hover:translate-x-1 transition-transform iconify iconify--lucide" data-icon="lucide:map-pin" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0Z" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><circle cx="12" cy="10" r="3"></circle></svg>
</button>
</div>

<div className="pt-8 border-t border-white/5 w-full flex flex-wrap justify-center lg:justify-start items-center gap-x-8 gap-y-4 lg:gap-12 opacity-60 hover:opacity-100 transition-all duration-500">
<div className="flex items-center gap-2 group cursor-default">
<svg className="text-[#EB7215] group-hover:scale-110 transition-transform" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12l2 2l4-4"></path></g></svg>
<span className="text-sm font-medium font-inter">Verified Partners</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg className="group-hover:text-[#EB7215] transition-colors" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2M6.453 15h11.094M8.5 2h7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-medium font-inter">FMCG Specialists</span>
</div>
<div className="flex items-center gap-2 group cursor-default">
<svg className="group-hover:text-[#EB7215] transition-colors" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M3 3h18v18H3zM21 9H3M21 15H3M12 3v18" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="text-sm font-medium font-inter">Full Logistics</span>
</div>
</div>
</div>

<div className="relative w-full h-full min-h-[400px] flex items-center justify-center lg:justify-end order-1 lg:order-2 perspective-normal group z-20">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-[#EB7215]/20 via-transparent to-transparent blur-[80px] pointer-events-none"></div>

<div className="relative w-full max-w-lg aspect-[4/3] transform-style-preserve-3d rotate-y-6 rotate-x-3 group-hover:rotate-0 transition-transform duration-700 ease-out">

<div className="absolute inset-0 rounded-2xl overflow-hidden border border-white/10 shadow-2xl">

<img alt="Global Supply Chain" className="w-full h-full object-cover opacity-80 mix-blend-overlay bg-neutral-900" src="https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?w=2160&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#050505] via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 right-0 p-8">
<h3 className="text-2xl text-white font-semibold font-inter mb-2">Connecting Markets</h3>
<p className="text-sm text-neutral-400 font-inter">We handle the complexity of distribution so you can focus on production.</p>
</div>
</div>

<div className="absolute -top-6 -right-6 bg-neutral-900/90 border border-white/10 p-4 rounded-xl backdrop-blur-xl shadow-xl translate-z-20 animate-[float_4s_ease-in-out_infinite]">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-[#EB7215]/20 flex items-center justify-center text-[#EB7215]">
<svg height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M8 3L4 7l4 4M4 7h16m-4 14l4-4l-4-4m4 4H4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div>
<div className="text-[10px] uppercase text-neutral-500 font-bold tracking-wider font-inter">Status</div>
<div className="text-sm text-white font-medium font-inter">Active Brokerage</div>
</div>
</div>
</div>

<div className="absolute top-1/2 -left-12 -translate-y-1/2 bg-neutral-900/90 border border-white/10 p-4 rounded-xl backdrop-blur-xl shadow-xl translate-z-10 hidden sm:block">
<div className="flex items-center gap-4">
<div className="text-center">
<div className="text-xs text-neutral-500 font-inter">Retailers</div>
<div className="text-xl text-white font-bold font-inter">503+</div>
</div>
<div className="w-[1px] h-8 bg-white/10"></div>
<div className="text-center">
<div className="text-xs text-neutral-500 font-inter">Regions</div>
<div className="text-xl text-white font-bold font-inter">4</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 border-y border-white/5 relative z-20" id="service">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl tracking-tight text-white mb-4 font-inter font-semibold">Bridging the Disconnect</h2>
<div className="space-y-6 text-neutral-400">
<p className="font-inter">Producers have the goods but lack the shelves. Retailers have the customers but lack reliable sourcing.</p>
<p className="font-inter">The traditional supply chain is fragmented and slow. MAADDOO serves as your single point of contact, handling negotiation, logistics, and verification manually to ensure trust.</p>
<div className="flex gap-4 pt-4">
<div className="flex-1 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#EB7215]/30 transition-colors">
<div className="text-[#EB7215] mb-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg></div>
<h4 className="text-white text-sm font-medium font-inter">For Producers</h4>
<p className="text-xs text-neutral-500 mt-1 font-inter">Instant distribution without overhead.</p>
</div>
<div className="flex-1 p-4 rounded-lg bg-white/5 border border-white/5 hover:border-[#EB7215]/30 transition-colors">
<div className="text-[#EB7215] mb-2"><svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shopping-cart" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><circle cx="8" cy="21" r="1"></circle><circle cx="19" cy="21" r="1"></circle><path d="M2.05 2.05h2l2.66 12.42a2 2 0 0 0 2 1.58h9.78a2 2 0 0 0 1.95-1.57l1.65-7.43H5.12"></path></g></svg></div>
<h4 className="text-white text-sm font-medium font-inter">For Retailers</h4>
<p className="text-xs text-neutral-500 mt-1 font-inter">Reliable sourcing, better margins.</p>
</div>
</div>
</div>
</div>
<div className="relative h-full min-h-[300px] rounded-2xl overflow-hidden glass-card flex items-center justify-center p-8">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-neutral-800 to-transparent opacity-40"></div>
<div className="relative z-10 w-full max-w-sm">
<div className="flex justify-between items-center mb-8">
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:package" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73zm1 .27V12"></path><path d="M3.29 7L12 12l8.71-5M7.5 4.27l9 5.15"></path></g></svg>
</div>
<span className="text-xs text-neutral-500 uppercase tracking-wider font-inter">Factory</span>
</div>

<div className="flex-1 h-[2px] bg-neutral-800 mx-4 relative overflow-hidden">
<div className="absolute inset-0 bg-[#EB7215] w-1/2 animate-[shimmer_2s_infinite] translate-x-[-100%]"></div>
</div>
<div className="w-16 h-16 rounded-full bg-[#EB7215]/10 border border-[#EB7215] flex items-center justify-center text-[#EB7215] shadow-[0_0_20px_rgba(235,114,21,0.3)]">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:handshake" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m11 17l2 2l4-4M8 14h.01M17 14h.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4 13l-4 4l-4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="flex-1 h-[2px] bg-neutral-800 mx-4 relative overflow-hidden">
<div className="absolute inset-0 bg-[#EB7215] w-1/2 animate-[shimmer_2s_infinite] translate-x-[-100%] delay-75"></div>
</div>
<div className="flex flex-col items-center gap-2">
<div className="w-12 h-12 rounded-full bg-neutral-800 border border-neutral-700 flex items-center justify-center text-white">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:store" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
</div>
<span className="text-xs text-neutral-500 uppercase tracking-wider font-inter">Shelf</span>
</div>
</div>
<div className="text-center">
<span className="inline-block px-3 py-1 bg-[#EB7215] text-black text-xs font-semibold rounded-full font-inter">MAADDOO EXPERTISE</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative z-20" id="network">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12">
<h2 className="text-3xl tracking-tight text-white font-inter font-semibold">Immediate Access to <span className="text-[#EB7215] font-inter font-semibold">503+</span> Partners</h2>
<p className="text-neutral-400 mt-2 font-inter">Scale your reach instantly through our established manual network.</p>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4">

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:shopping-bag" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 10a4 4 0 0 1-8 0M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></g></svg>
<span className="w-2 h-2 rounded-full bg-[#EB7215]"></span>
</div>
<div className="text-4xl text-white mb-1 font-inter font-semibold">46</div>
<div className="text-sm text-neutral-400 font-inter">Supermarkets</div>
<div className="text-xs text-neutral-600 mt-2 font-inter">Regional brand presence</div>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:pill" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m10.5 20.5l10-10a4.95 4.95 0 1 0-7-7l-10 10a4.95 4.95 0 1 0 7 7m-2-12l7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="w-2 h-2 rounded-full bg-[#EB7215] opacity-50"></span>
</div>
<div className="text-4xl text-white mb-1 font-inter font-semibold">57</div>
<div className="text-sm text-neutral-400 font-inter">Pharmacies</div>
<div className="text-xs text-neutral-600 mt-2 font-inter">Specialized placement</div>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:store" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5m8.774-10.69a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.451 0a1.12 1.12 0 0 0-1.548 0a2.5 2.5 0 0 1-3.452 0a1.12 1.12 0 0 0-1.549 0a2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></g></svg>
<span className="w-2 h-2 rounded-full bg-[#EB7215] opacity-50"></span>
</div>
<div className="text-4xl text-white mb-1 font-inter font-semibold">100</div>
<div className="text-sm text-neutral-400 font-inter">Mini Markets</div>
<div className="text-xs text-neutral-600 mt-2 font-inter">High-frequency volume</div>
</div>

<div className="glass-card p-6 rounded-xl hover:-translate-y-1 transition-transform duration-300">
<div className="flex justify-between items-start mb-4">
<svg aria-hidden="true" className="iconify text-neutral-500 iconify--lucide" data-icon="lucide:users" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2M16 3.128a4 4 0 0 1 0 7.744M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></g></svg>
<span className="w-2 h-2 rounded-full bg-[#EB7215] opacity-50"></span>
</div>
<div className="text-4xl text-white mb-1 font-inter font-semibold">300</div>
<div className="text-sm text-neutral-400 font-inter">Mini Shops</div>
<div className="text-xs text-neutral-600 mt-2 font-inter">Targeted community reach</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5 relative z-20">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-12 divide-y md:divide-y-0 md:divide-x divide-white/10">

<div className="md:pr-12">
<div className="inline-block p-3 rounded-lg bg-[#EB7215]/10 mb-6">
<svg aria-hidden="true" className="iconify text-[#EB7215] iconify--lucide" data-icon="lucide:boxes" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M2.97 12.92A2 2 0 0 0 2 14.63v3.24a2 2 0 0 0 .97 1.71l3 1.8a2 2 0 0 0 2.06 0L12 19v-5.5l-5-3zM7 16.5l-4.74-2.85M7 16.5l5-3m-5 3v5.17m5-8.17V19l3.97 2.38a2 2 0 0 0 2.06 0l3-1.8a2 2 0 0 0 .97-1.71v-3.24a2 2 0 0 0-.97-1.71L17 10.5zm5 3l-5-3m5 3l4.74-2.85M17 16.5v5.17"></path><path d="M7.97 4.42A2 2 0 0 0 7 6.13v4.37l5 3l5-3V6.13a2 2 0 0 0-.97-1.71l-3-1.8a2 2 0 0 0-2.06 0zM12 8L7.26 5.15M12 8l4.74-2.85M12 13.5V8"></path></g></svg>
</div>
<h3 className="text-2xl text-white mb-4 font-inter font-semibold">Your Distribution, Simplified.</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-[#EB7215] mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div className="">
<span className="text-sm text-neutral-400 font-inter">Eliminate the cost of a private sales force and fleet.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-[#EB7215] mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<span className="text-sm text-neutral-400 font-inter">Reach untouched markets where competitors don't go.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-[#EB7215] mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<span className="text-sm text-neutral-400 font-inter">Gain consistent visibility across 4 retail tiers.</span>
</div>
</li>
</ul>
</div>

<div className="pt-12 md:pt-0 md:pl-12">
<div className="inline-block p-3 rounded-lg bg-white/5 mb-6">
<svg aria-hidden="true" className="iconify text-white iconify--lucide" data-icon="lucide:scan-barcode" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 7V5a2 2 0 0 1 2-2h2m10 0h2a2 2 0 0 1 2 2v2m0 10v2a2 2 0 0 1-2 2h-2M7 21H5a2 2 0 0 1-2-2v-2M8 7v10m4-10v10m5-10v10" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<h3 className="text-2xl text-white mb-4 font-inter font-semibold">Your Sourcing Hub.</h3>
<ul className="space-y-4">
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<span className="text-sm text-neutral-400 font-inter">Browse one catalog instead of making dozens of calls.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<span className="text-sm text-neutral-400 font-inter">Direct factory pricing with efficient delivery.</span>
</div>
</li>
<li className="flex items-start gap-3">
<svg aria-hidden="true" className="iconify text-neutral-500 mt-1 flex-shrink-0 iconify--lucide" data-icon="lucide:check" data-width="16" height="16" role="img" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6L9 17l-5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<div>
<span className="text-sm text-neutral-400 font-inter">Access products previously unavailable in your region.</span>
</div>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 overflow-hidden relative z-20" id="process">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<span className="text-[#EB7215] font-inter text-xs font-bold tracking-[0.2em] uppercase mb-4 block">Our Process</span>
<h2 className="text-3xl tracking-tight text-white font-inter font-semibold">5 Steps to Seamless Growth</h2>
</div>
<div className="relative">

<div className="absolute top-1/2 left-0 w-full h-[1px] bg-neutral-800 -translate-y-1/2 hidden lg:block"></div>
<div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-4 relative z-10">

<div className="group relative flex flex-col lg:items-center">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 group-hover:border-[#EB7215] text-neutral-400 group-hover:text-[#EB7215] flex items-center justify-center transition-colors duration-300 z-10 lg:mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:clipboard-list" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2m4 0a2 2 0 1 0 0 4h4a2 2 0 1 0 0-4m-4 9h4m-4 4h4M8 13h2m-2 4h2" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="pl-4 lg:pl-0 lg:text-center border-l border-neutral-800 lg:border-l-0 ml-6 lg:ml-0 pb-8 lg:pb-0">
<h4 className="text-white font-medium mb-1 font-inter">Tell Us Your Needs</h4>
<p className="text-xs text-neutral-500 font-inter">We assess your production capacity or stocking requirements.</p>
</div>
</div>

<div className="group relative flex flex-col lg:items-center">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 group-hover:border-[#EB7215] text-neutral-400 group-hover:text-[#EB7215] flex items-center justify-center transition-colors duration-300 z-10 lg:mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:shield-check" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3l-8 3v7c0 6 8 10 8 10m-3.5-9.5l2.5 2.5l5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="pl-4 lg:pl-0 lg:text-center border-l border-neutral-800 lg:border-l-0 ml-6 lg:ml-0 pb-8 lg:pb-0">
<h4 className="text-white font-medium mb-1 font-inter">We Source &amp; Vet</h4>
<p className="text-xs text-neutral-500 font-inter">Our team manually verifies every partner for quality.</p>
</div>
</div>

<div className="group relative flex flex-col lg:items-center">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 group-hover:border-[#EB7215] text-neutral-400 group-hover:text-[#EB7215] flex items-center justify-center transition-colors duration-300 z-10 lg:mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:handshake" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="m11 17l2 2l4-4M8 14h.01M17 14h.01M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10s10-4.48 10-10S17.52 2 12 2zm4 13l-4 4l-4-4" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<div className="pl-4 lg:pl-0 lg:text-center border-l border-neutral-800 lg:border-l-0 ml-6 lg:ml-0 pb-8 lg:pb-0">
<h4 className="text-white font-medium mb-1 font-inter">Deal Facilitation</h4>
<p className="text-xs text-neutral-500 font-inter">We negotiate fair terms and secure the transaction.</p>
</div>
</div>

<div className="group relative flex flex-col lg:items-center">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 group-hover:border-[#EB7215] text-neutral-400 group-hover:text-[#EB7215] flex items-center justify-center transition-colors duration-300 z-10 lg:mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:truck" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2m10 0H9m10 0h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 17.52 8H14"></path><circle cx="17" cy="18" r="2"></circle><circle cx="7" cy="18" r="2"></circle></g></svg>
</div>
<div className="pl-4 lg:pl-0 lg:text-center border-l border-neutral-800 lg:border-l-0 ml-6 lg:ml-0 pb-8 lg:pb-0">
<h4 className="text-white font-medium mb-1 font-inter">Logistics Handled</h4>
<p className="text-xs text-neutral-500 font-inter">We coordinate the movement of goods to your door.</p>
</div>
</div>

<div className="group relative flex flex-col lg:items-center">
<div className="w-12 h-12 rounded-full bg-[#050505] border border-neutral-700 group-hover:border-[#EB7215] text-neutral-400 group-hover:text-[#EB7215] flex items-center justify-center transition-colors duration-300 z-10 lg:mb-6">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:trending-up" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M16 7h6v6"></path><path d="m22 7l-8.5 8.5l-5-5L2 17"></path></g></svg>
</div>
<div className="pl-4 lg:pl-0 lg:text-center border-l-0 ml-6 lg:ml-0">
<h4 className="text-white font-medium mb-1 font-inter">Ongoing Support</h4>
<p className="text-xs text-neutral-500 font-inter">A lasting partnership to help you scale.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 bg-[#050505] overflow-hidden relative border-t border-white/5 z-20" id="testimonials">

<div className="max-w-7xl mx-auto px-6 mb-20 text-center">
<span className="text-[#EB7215] font-inter text-xs font-bold tracking-[0.2em] uppercase mb-4 block">The Trusted Network</span>
<h2 className="text-3xl md:text-5xl tracking-tighter text-white font-inter font-semibold">Powering the world's most <br className="hidden sm:block"/> ambitious supply chains.</h2>
</div>

<div className="flex gap-6 w-full mb-12" id="marquee-row-1" style={{willChange: 'transform'}}>

</div>

<div className="flex gap-6 w-full" id="marquee-row-2" style={{willChange: 'transform'}}>

</div>
</section>

<section className="py-24 relative overflow-hidden z-20" id="contact">
<div className="absolute inset-0 bg-[#EB7215]/[0.02]"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<h2 className="text-4xl md:text-5xl tracking-tighter text-white mb-6 font-inter font-semibold">Ready to Close Your <br/><span className="text-[#EB7215] font-inter font-semibold">Supply Chain Gap?</span></h2>
<p className="text-neutral-400 mb-10 max-w-xl mx-auto font-inter">Join the premier B2B network in Southern Ethiopia. Whether you are stocking shelves or filling them, we are your bridge.</p>
<div className="flex flex-col md:flex-row gap-4 justify-center items-center mb-12">
<a className="w-full md:w-auto px-8 py-4 bg-[#EB7215] text-black font-medium text-sm rounded-lg hover:bg-[#d6630e] transition-all flex items-center justify-center gap-2" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:phone" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233a14 14 0 0 0 6.392 6.384" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-inter">Call Our Team</span>
</a>
<a className="w-full md:w-auto px-8 py-4 bg-[#fff] text-black font-medium text-sm rounded-lg hover:brightness-90 transition-all flex items-center justify-center gap-2" href="#">
<svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:message-circle" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092a10 10 0 1 0-4.777-4.719" fill="none" stroke="#25D366" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
<span className="font-inter">WhatsApp Us</span>
</a>
</div>

<div className="border-t border-white/5 pt-12 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-[#EB7215] iconify--lucide" data-icon="lucide:layers" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></g></svg>
<span className="text-white font-semibold tracking-tight font-inter">MAADDOO</span>
</div>
<div className="flex gap-6 text-sm text-neutral-500">
<a className="hover:text-white transition-colors font-inter" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors font-inter" href="#">Terms of Service</a>
</div>
<div className="text-xs text-neutral-600 font-inter">
                    © 2024 MAADDOO Networking. All rights reserved.
                </div>
</div>
</div>
</section>

<style>
        @keyframes shimmer {
            0% { transform: translateX(-100%); }
            100% { transform: translateX(200%); }
        }
        @keyframes float {
            0%, 100% { transform: translateY(0); }
            50% { transform: translateY(-10px); }
        }
    </style>


    </>
  );
}
