import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
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



        // Initialize Lucide Icons
        lucide.createIcons();

        // Register GSAP ScrollTrigger
        gsap.registerPlugin(ScrollTrigger);

        // Preloader Logic
        window.addEventListener('load', () => {
            const loader = document.getElementById('loader');
            loader.style.opacity = '0';
            setTimeout(() => {
                loader.style.display = 'none';
                initAnimations();
            }, 800);
        });

        // Checkout Scroll Helper
        function scrollToCheckout() {
            document.getElementById('checkout').scrollIntoView({ behavior: 'smooth' });
        }

        // Fake Payment Logic
        function processPayment() {
            const btn = document.querySelector('form button');
            const originalText = btn.innerHTML;
            
            btn.innerHTML = `<svg class="animate-spin h-5 w-5 text-black" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24"><circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"></circle><path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path></svg> Processing`;
            btn.disabled = true;

            setTimeout(() => {
                // Open Success Modal
                const modal = document.getElementById('success-modal');
                modal.classList.remove('hidden');
                // Trigger reflow
                void modal.offsetWidth;
                modal.classList.remove('opacity-0');
                
                // Reset Button
                btn.innerHTML = originalText;
                btn.disabled = false;
            }, 2000);
        }

        function closeModal() {
            const modal = document.getElementById('success-modal');
            modal.classList.add('opacity-0');
            setTimeout(() => {
                modal.classList.add('hidden');
                window.scrollTo(0, 0);
            }, 300);
        }

        // Animation Sequence
        function initAnimations() {
            
            // Hero Entry Animations
            gsap.to('.hero-text', { opacity: 1, y: 0, duration: 1.5, ease: 'power3.out' });
            gsap.to('.hero-subtext', { opacity: 1, y: 0, delay: 0.3, duration: 1.5, ease: 'power3.out' });
            gsap.to('.hero-cta', { opacity: 1, delay: 0.6, duration: 1.5, ease: 'power3.out' });

            const product = document.getElementById('product-container');
            const productImg = document.getElementById('product-img');

            // 1. Scroll-based Product Movement (Simulating 3D)
            const tl = gsap.timeline({
                scrollTrigger: {
                    trigger: "body",
                    start: "top top",
                    end: "bottom bottom",
                    scrub: 1.5
                }
            });

            // Initial State -> Ingredients Section
            // Move product to right, rotate slightly
            tl.to(product, {
                x: '25vw', 
                y: '10vh',
                scale: 1.2,
                rotation: 5,
                ease: "power2.inOut",
                duration: 5
            }, 'phase1')
            .to('#feature-1-text', { opacity: 1, duration: 2 }, 'phase1+=1');

            // Ingredients -> Usage Section
            // Move product to left, rotate opposite, zoom more
            tl.to(product, {
                x: '-25vw',
                y: '20vh',
                scale: 1.3,
                rotation: -5,
                ease: "power2.inOut",
                duration: 5
            }, 'phase2')
            .to('#feature-1-text', { opacity: 0.2, duration: 2 }, 'phase2')
            .to('#feature-2-text', { opacity: 1, duration: 2 }, 'phase2+=1');

            // Usage -> Details Grid
            // Center product, scale down slightly
            tl.to(product, {
                x: '0%',
                y: '5vh',
                scale: 0.9,
                rotation: 0,
                ease: "power2.inOut",
                duration: 5
            }, 'phase3')
            .to('#feature-2-text', { opacity: 0.2, duration: 2 }, 'phase3');

            // Details -> Checkout
            // Fade out product or move it aside completely to focus on form
            tl.to(product, {
                opacity: 0,
                scale: 0.5,
                y: '-20vh',
                duration: 3
            }, 'phase4');


            // 2. Mouse Movement "Parallax" Effect on Hero
            // Adds that premium 3D feel without WebGL
            document.addEventListener('mousemove', (e) => {
                const x = (e.clientX / window.innerWidth - 0.5) * 20;
                const y = (e.clientY / window.innerHeight - 0.5) * 20;
                
                // Only apply heavily if at top of page
                if(window.scrollY < window.innerHeight) {
                    gsap.to(productImg, {
                        rotateY: x,
                        rotateX: -y,
                        transformPerspective: 1000,
                        duration: 1,
                        ease: 'power2.out'
                    });
                    
                    // Move reflection opposite to light source simulation
                    gsap.to('#reflection', {
                        opacity: 0.3 + (Math.abs(x) / 40),
                        backgroundPosition: `${50 + x}% ${50 + y}%`,
                        duration: 1
                    });
                }
            });
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-50 flex items-center justify-center bg-[#030303]" id="loader">
<div className="flex flex-col items-center">
<span className="text-xs uppercase tracking-[0.3em] text-neutral-500 mb-4 animate-pulse">Loading Experience</span>
<div className="h-[1px] w-24 bg-neutral-800 overflow-hidden">
<div className="h-full w-full bg-amber-200/50 -translate-x-full animate-[slide_1s_infinite]"></div>
</div>
</div>
</div>

<div className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div className="absolute top-[-10%] left-[20%] w-[500px] h-[500px] bg-amber-500/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[10%] w-[600px] h-[600px] bg-indigo-900/5 rounded-full blur-[120px]"></div>
</div>

<nav className="fixed top-0 w-full z-40 px-6 py-6 flex justify-between items-center transition-all duration-300 mix-blend-difference text-white">
<div className="text-xl tracking-tight font-medium">Celévia</div>
<div className="hidden md:flex gap-8 text-sm font-light text-neutral-300">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#ingredients">Ingredients</a>
<a className="hover:text-white transition-colors" href="#details">Details</a>
</div>
<button className="flex items-center gap-2 text-sm font-medium hover:text-amber-200 transition-colors" onclick="scrollToCheckout()">
<span>Cart (0)</span>
<i className="w-4 h-4" data-lucide="shopping-bag"></i>
</button>
</nav>

<div className="fixed inset-0 z-10 pointer-events-none flex items-center justify-center perspective-1000">

<div className="relative w-[300px] md:w-[400px] aspect-[2/3] transform-gpu will-change-transform" id="product-container">

<div className="absolute inset-0 z-20 bg-gradient-to-tr from-transparent via-white/5 to-transparent opacity-0 pointer-events-none mix-blend-overlay transition-opacity duration-500" id="reflection"></div>
<img alt="Celévia Lumière Cleanser" className="w-full h-full object-contain drop-shadow-2xl brightness-110 contrast-105" id="product-img" src="https://i.ibb.co/6y40FCS/Screenshot-2025-02-12-at-4-23-45-PM.png"/>

<div className="absolute -bottom-12 left-1/2 -translate-x-1/2 w-32 h-4 bg-black/60 blur-xl rounded-[100%] transition-all duration-500" id="product-shadow"></div>
</div>
</div>

<main className="relative z-20">

<section className="h-screen w-full flex flex-col justify-center items-center text-center px-4" id="overview">
<div className="overflow-hidden mb-6">
<h1 className="hero-text text-6xl md:text-8xl lg:text-9xl font-medium tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-neutral-200 to-neutral-600 opacity-0 translate-y-10">
                    LUMIÈRE
                </h1>
</div>
<p className="hero-subtext text-lg md:text-xl text-neutral-400 font-light max-w-lg opacity-0 translate-y-4">
                The essence of gentle glow. 120ml of pure botanical luxury.
            </p>
<div className="hero-cta mt-12 opacity-0">
<button className="group relative px-8 py-3 rounded-full overflow-hidden bg-white text-black transition-all hover:scale-105" onclick="scrollToCheckout()">
<div className="absolute inset-0 bg-amber-100 translate-y-full group-hover:translate-y-0 transition-transform duration-300"></div>
<span className="relative text-sm font-medium tracking-wide z-10 group-hover:text-amber-900">PRE-ORDER NOW</span>
</button>
</div>
</section>

<section className="h-screen w-full flex items-center px-6 md:px-24" id="ingredients">
<div className="w-full md:w-1/3 space-y-8 opacity-20 transition-opacity duration-500" id="feature-1-text">
<div className="w-12 h-[1px] bg-amber-500/50"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Gold-Infused<br/><span className="text-neutral-500">Botanicals</span></h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                    Rare plant extracts meet 24k colloidal gold. A formula designed not just to cleanse, but to illuminate your skin from within.
                </p>
<ul className="space-y-4 mt-4">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="p-1 rounded-full bg-neutral-800"><i className="w-3 h-3 text-amber-200" data-lucide="sparkles"></i></div>
<span>Radiance boosting peptides</span>
</li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<div className="p-1 rounded-full bg-neutral-800"><i className="w-3 h-3 text-amber-200" data-lucide="droplet"></i></div>
<span>Deep hydration matrix</span>
</li>
</ul>
</div>
</section>

<section className="h-screen w-full flex items-center justify-end px-6 md:px-24">
<div className="w-full md:w-1/3 space-y-8 text-right opacity-20 transition-opacity duration-500" id="feature-2-text">
<div className="w-12 h-[1px] bg-amber-500/50 ml-auto"></div>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-white">Sensory<br/><span className="text-neutral-500">Experience</span></h2>
<p className="text-lg text-neutral-400 font-light leading-relaxed">
                    A rich, velvety texture that transforms into a delicate foam. Scented with midnight jasmine and sandalwood.
                </p>
<div className="flex justify-end gap-6 pt-4">
<div className="text-center">
<span className="block text-2xl font-normal text-white">pH 5.5</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Balanced</span>
</div>
<div className="text-center">
<span className="block text-2xl font-normal text-white">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-widest">Vegan</span>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full py-24 px-6 md:px-24 bg-[#030303] relative z-30" id="details">
<div className="max-w-6xl mx-auto">
<h3 className="text-center text-3xl font-light tracking-tight mb-20">Precision Formulated</h3>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<h4 className="text-lg font-medium mb-3">Dermatologist Tested</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Clinically proven to be safe for sensitive skin types, reducing redness and irritation instantly.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white" data-lucide="leaf"></i>
</div>
<h4 className="text-lg font-medium mb-3">Sustainable Packaging</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">Bottled in recycled matte polymer with bio-degradable inks. Luxury without the footprint.</p>
</div>

<div className="glass-panel p-8 rounded-2xl hover:bg-neutral-900/50 transition-colors duration-300 group">
<div className="w-10 h-10 rounded-full bg-neutral-900 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-5 h-5 text-white" data-lucide="clock"></i>
</div>
<h4 className="text-lg font-medium mb-3">Long Lasting</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed">One pump is enough. The 120ml bottle provides 3 months of daily premium care.</p>
</div>
</div>
</div>
</section>

<section className="min-h-screen w-full flex items-center justify-center px-4 py-24 relative bg-neutral-950" id="checkout">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(255,255,255,0.03)_0%,transparent_50%)]"></div>
<div className="w-full max-w-5xl grid grid-cols-1 lg:grid-cols-2 gap-12 z-10">

<div className="order-1 lg:order-2 space-y-8 p-8 glass-panel rounded-3xl border-neutral-800">
<div className="flex items-start justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight">Order Summary</h2>
<p className="text-sm text-neutral-500 mt-1">Free shipping worldwide</p>
</div>
<div className="w-16 h-16 bg-neutral-900 rounded-lg flex items-center justify-center border border-neutral-800">
<img alt="Mini" className="h-12 w-auto object-contain" src="https://i.ibb.co/6y40FCS/Screenshot-2025-02-12-at-4-23-45-PM.png"/>
</div>
</div>
<div className="space-y-4 py-6 border-t border-b border-neutral-800/50">
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Celévia Lumière Cleanser</span>
<span>₹2,499.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Tax</span>
<span>₹450.00</span>
</div>
<div className="flex justify-between text-sm">
<span className="text-neutral-400">Shipping</span>
<span className="text-emerald-400">Free</span>
</div>
</div>
<div className="flex justify-between items-center">
<span className="text-lg font-medium">Total</span>
<div className="text-right">
<span className="block text-2xl font-semibold tracking-tight">₹2,949.00</span>
<span className="text-xs text-neutral-500">Including GST</span>
</div>
</div>
<div className="flex items-center gap-2 bg-amber-900/10 p-3 rounded-lg border border-amber-900/30">
<i className="w-4 h-4 text-amber-500" data-lucide="shield"></i>
<span className="text-xs text-amber-200">Secure payment via Razorpay. 100% Money back guarantee.</span>
</div>
</div>

<div className="order-2 lg:order-1 space-y-6">
<h3 className="text-xl font-medium tracking-tight mb-6">Customer Details</h3>
<form className="space-y-4" id="payment-form" onsubmit="event.preventDefault(); processPayment();">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">First Name</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">Last Name</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">Email Address</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">Shipping Address</label>
<textarea className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700 resize-none" placeholder="123 Luxury Lane, Mumbai" required="" rows="2"></textarea>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">Pincode</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="400050" required="" type="text"/>
</div>
<div className="space-y-1">
<label className="text-xs text-neutral-500 uppercase tracking-wider">Phone</label>
<input className="w-full bg-[#0a0a0a] border border-neutral-800 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-neutral-600 focus:ring-1 focus:ring-neutral-600 transition-all placeholder-neutral-700" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
</div>
<button className="w-full mt-6 bg-white text-black font-medium py-4 rounded-lg hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" type="submit">
<span>Pay ₹2,949.00</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</form>
</div>
</div>
</section>

<footer className="border-t border-neutral-900 py-12 text-center text-sm text-neutral-600 bg-black relative z-30">
<p>© 2025 Celévia Skincare. All rights reserved.</p>
<div className="flex justify-center gap-6 mt-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
</footer>
</main>

<div className="fixed inset-0 z-[60] bg-black/80 backdrop-blur-sm hidden flex items-center justify-center opacity-0 transition-opacity duration-300" id="success-modal">
<div className="bg-[#111] p-8 rounded-2xl border border-neutral-800 text-center max-w-sm w-full mx-4 shadow-2xl">
<div className="w-16 h-16 bg-emerald-900/20 rounded-full flex items-center justify-center mx-auto mb-6 text-emerald-400">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Order Confirmed</h3>
<p className="text-neutral-400 mb-6 font-light">Your Lumière Cleanser is on its way to bring out your inner glow.</p>
<button className="w-full py-3 bg-neutral-800 text-white rounded-lg hover:bg-neutral-700 transition-colors" onclick="closeModal()">Continue Shopping</button>
</div>
</div>


    </>
  );
}
