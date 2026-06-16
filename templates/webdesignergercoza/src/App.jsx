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



        // --- 1. Parallax Effect for Mobile Section ---
        window.addEventListener('scroll', () => {
            const scrollY = window.scrollY;
            const mobileSection = document.getElementById('mobile-3d');
            const sectionTop = mobileSection.offsetTop;
            const sectionHeight = mobileSection.offsetHeight;
            
            // Only animate when near the section
            if (scrollY > sectionTop - window.innerHeight && scrollY < sectionTop + sectionHeight) {
                const relativeScroll = scrollY - sectionTop;
                
                // Phone 1 (Back Left) - Moves up slower
                document.getElementById('phone-1').style.transform = 
                    `translateY(${relativeScroll * -0.1}px) rotateY(15deg) translateZ(-50px)`;
                
                // Phone 2 (Front Center) - Moves up faster, slight rotation
                document.getElementById('phone-2').style.transform = 
                    `translateY(${relativeScroll * -0.2}px) rotateX(${relativeScroll * 0.02}deg)`;

                // Phone 3 (Back Right) - Moves up slower
                document.getElementById('phone-3').style.transform = 
                    `translateY(${relativeScroll * -0.1}px) rotateY(-15deg) translateZ(-50px)`;
            }
        });

        // --- 2. Pricing Selection Logic ---
        let currentPrice = '1000.00'; // Default Gold

        function selectTier(price, element) {
            currentPrice = price;
            document.getElementById('display-price').innerText = '$' + price;
            
            // Visual Update
            document.querySelectorAll('.price-card').forEach(card => {
                card.classList.remove('selected', 'neon-gold');
                card.classList.add('opacity-50');
            });
            
            element.classList.add('selected');
            element.classList.remove('opacity-50');
            
            // Add neon effect if Gold
            if(price === '1000.00') {
                element.classList.add('neon-gold');
            } else {
                element.style.borderColor = '#22d3ee'; // Cyan for others when selected
            }
        }

        // --- 3. PayPal Integration ---
        paypal.Buttons({
            style: {
                layout: 'vertical',
                color:  'gold',
                shape:  'rect',
                label:  'pay'
            },
            createOrder: function(data, actions) {
                return actions.order.create({
                    purchase_units: [{
                        amount: {
                            value: currentPrice
                        }
                    }]
                });
            },
            onApprove: function(data, actions) {
                return actions.order.capture().then(function(details) {
                    // Show success message or loader before redirect
                    const container = document.getElementById('paypal-button-container');
                    container.innerHTML = '<div class="text-green-400 text-center py-4">Payment Successful! Redirecting...</div>';
                    
                    // Redirect to onboarding form
                    setTimeout(() => {
                        // Replace with actual onboarding URL
                        window.location.href = "https://your-onboarding-form-url.com"; 
                        // Note: Since user didn't provide specific URL, this is a placeholder
                    }, 1500);
                });
            }
        }).render('#paypal-button-container');

        // Prevent body scroll during intro (optional, but good for UX)
        document.body.style.overflow = 'hidden';
        setTimeout(() => {
            document.body.style.overflow = '';
        }, 7000);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-black flex flex-col items-center justify-center" id="intro-overlay">
<h1 className="glitch-text font-futuristic text-4xl md:text-7xl font-bold text-white tracking-widest" data-text="ELITE WEB DESIGN">
            ELITE WEB DESIGN
        </h1>
<div className="mt-8 w-64 h-1 bg-neutral-900 rounded-full overflow-hidden">
<div className="h-full bg-cyan-500 animate-[width_7s_linear_forwards]" style={{width: '0%'}}></div>
</div>
<p className="mt-4 text-xs font-mono text-cyan-500 animate-pulse">INITIALIZING SYSTEM...</p>
<style> @keyframes width { to { width: 100%; } } </style>
</div>

<div className="fixed inset-0 pointer-events-none z-0 overflow-hidden">
<div className="absolute top-[-20%] left-[-10%] w-[50%] h-[50%] bg-blue-900/10 rounded-full blur-[120px] animate-pulse"></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[50%] h-[50%] bg-purple-900/10 rounded-full blur-[120px] animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-[0.03]"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 backdrop-blur-xl bg-[#050505]/60 border-b border-white/[0.05]">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="font-futuristic text-white font-semibold tracking-wide text-xl hover:text-cyan-400 transition-colors duration-300" href="#">
                ELITE<span className="text-cyan-500">.DESIGN</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#mobile-3d">Mobile</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#pricing">Pricing</a>
<a className="text-xs font-medium text-neutral-400 hover:text-white transition-colors tracking-wide uppercase" href="#faq">FAQ</a>
</div>
<a className="liquid-btn hidden sm:inline-flex items-center justify-center px-6 py-2.5 text-xs font-semibold text-black bg-white rounded-full transition-all shadow-[0_0_20px_-5px_rgba(255,255,255,0.3)]" href="#pricing">
                Start Project
            </a>
</div>
</nav>

<header className="relative min-h-screen flex flex-col justify-center px-6 overflow-hidden pt-20">
<div className="max-w-7xl mx-auto w-full relative z-10">
<div className="flex justify-start mb-8 opacity-0 animate-[fadeIn_1s_ease_7.5s_forwards]">
<div className="inline-flex items-center gap-3 px-4 py-2 rounded-full border border-white/[0.08] bg-white/[0.02] backdrop-blur-md">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-cyan-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-cyan-500"></span>
</span>
<span className="text-xs font-medium text-cyan-100 tracking-wider uppercase">Systems Online</span>
</div>
</div>
<h1 className="font-futuristic opacity-0 animate-[slideUp_1s_ease_7.7s_forwards] text-5xl md:text-8xl lg:text-9xl font-medium tracking-tight leading-[0.9] text-white mb-8">
                DIGITAL <br/>
<span className="text-neutral-700">ASCENSION</span>
</h1>
<div className="opacity-0 animate-[slideUp_1s_ease_7.9s_forwards] flex flex-col md:flex-row items-start md:items-end justify-between gap-12 border-l border-white/10 pl-8 ml-2">
<p className="max-w-lg text-lg text-neutral-400 font-light leading-relaxed">
                    We forge immersive digital realities. High-velocity performance meets elite aesthetic precision.
                </p>
<div className="flex items-center gap-6">
<a className="liquid-btn group relative inline-flex h-14 items-center justify-center overflow-hidden rounded-full bg-white px-10 font-semibold text-black transition-all duration-300 hover:scale-105 hover:shadow-[0_0_40px_-10px_rgba(34,211,238,0.6)]" href="#pricing">
<span className="mr-2">Initiate Protocol</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="solar:arrow-right-linear" strokeWidth="2" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
<style>
            @keyframes fadeIn { to { opacity: 1; } }
            @keyframes slideUp { from { transform: translateY(20px); opacity: 0; } to { transform: translateY(0); opacity: 1; } }
        </style>
</header>

<section className="py-32 relative overflow-hidden bg-[#020202] border-t border-white/[0.05]" id="mobile-3d">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-900/20 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center mb-24">
<h2 className="font-futuristic text-4xl md:text-6xl text-white mb-6">Mobile Mastery</h2>
<p className="text-neutral-400 max-w-xl mx-auto">Responsive architectures that adapt fluidly to any viewport. Experience the depth of true optimization.</p>
</div>
<div className="perspective-container h-[600px] flex items-center justify-center relative">

<div className="parallax-card absolute left-[5%] md:left-[15%] top-10 w-[280px] h-[550px] bg-neutral-900 border border-white/10 rounded-[40px] shadow-2xl p-4 opacity-60 blur-[1px]" id="phone-1">
<div className="w-full h-full bg-neutral-800 rounded-[32px] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-900"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
<div className="p-6 mt-10 space-y-4">
<div className="w-full h-32 bg-white/5 rounded-xl"></div>
<div className="w-full h-12 bg-white/5 rounded-xl"></div>
<div className="w-2/3 h-4 bg-white/5 rounded-full"></div>
</div>
</div>
</div>

<div className="parallax-card absolute z-20 w-[300px] h-[600px] bg-black border-4 border-cyan-500/30 rounded-[45px] shadow-[0_0_50px_rgba(34,211,238,0.1)] p-4" id="phone-2">
<div className="w-full h-full bg-[#050505] rounded-[36px] overflow-hidden relative">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10"></div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-br from-cyan-900/20 to-transparent"></div>
<div className="absolute top-5 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-full z-20"></div>
<div className="relative z-10 p-6 mt-12 flex flex-col h-full">
<div className="text-center mb-8">
<h3 className="font-futuristic text-xl text-white">ELITE</h3>
<p className="text-[10px] text-cyan-400">MOBILE INTERFACE</p>
</div>
<div className="flex-1 bg-white/5 rounded-2xl border border-white/5 backdrop-blur-sm p-4 mb-4 flex items-center justify-center">
<iconify-icon className="text-cyan-400" icon="solar:smartphone-rotate-orientation-linear" width="48"></iconify-icon>
</div>
<button className="w-full py-3 bg-cyan-500 text-black font-bold rounded-xl text-sm">ACCESS</button>
</div>
</div>
</div>

<div className="parallax-card absolute right-[5%] md:right-[15%] top-20 w-[280px] h-[550px] bg-neutral-900 border border-white/10 rounded-[40px] shadow-2xl p-4 opacity-60 blur-[1px]" id="phone-3">
<div className="w-full h-full bg-neutral-800 rounded-[32px] overflow-hidden relative">
<div className="absolute inset-0 bg-gradient-to-b from-neutral-700 to-neutral-900"></div>
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-24 h-6 bg-black rounded-full"></div>
<div className="p-6 mt-10 grid grid-cols-2 gap-3">
<div className="h-24 bg-white/5 rounded-xl"></div>
<div className="h-24 bg-white/5 rounded-xl"></div>
<div className="h-24 bg-white/5 rounded-xl"></div>
<div className="h-24 bg-white/5 rounded-xl"></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative border-t border-white/[0.05]" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-20">
<h2 className="font-futuristic text-5xl md:text-6xl text-white mb-4">Investment Tiers</h2>
<p className="text-neutral-400">Select your level of digital dominance.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto mb-16">

<div className="price-card group relative bg-[#0A0A0A] border border-white/10 rounded-3xl p-8 hover:border-white/30 cursor-pointer transition-all duration-300" onclick="selectTier('100.00', this)">
<h3 className="font-futuristic text-2xl text-neutral-400 mb-2">BRONZE</h3>
<div className="text-4xl font-bold text-white mb-6">$100</div>
<ul className="space-y-4 text-sm text-neutral-400 mb-8 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Single Page Layout</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Standard Design</li>
<li className="flex items-center gap-3"><iconify-icon className="text-white" icon="solar:check-circle-linear"></iconify-icon> Mobile Responsive</li>
<li className="flex items-center gap-3 text-neutral-600"><iconify-icon icon="solar:close-circle-linear"></iconify-icon> No Animations</li>
</ul>
<div className="w-full py-3 rounded-xl border border-white/10 text-center text-sm text-neutral-300 group-hover:bg-white group-hover:text-black transition-colors">Select Bronze</div>
</div>

<div className="price-card group relative bg-[#0F0F0F] border border-white/20 rounded-3xl p-8 hover:border-cyan-400/50 cursor-pointer transition-all duration-300 transform scale-105 z-10" onclick="selectTier('500.00', this)">
<h3 className="font-futuristic text-2xl text-cyan-200 mb-2">SILVER</h3>
<div className="text-4xl font-bold text-white mb-6">$500</div>
<ul className="space-y-4 text-sm text-neutral-300 mb-8 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> 5 Page Website</li>
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Custom Assets</li>
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Basic SEO Setup</li>
<li className="flex items-center gap-3"><iconify-icon className="text-cyan-400" icon="solar:check-circle-linear"></iconify-icon> Contact Forms</li>
</ul>
<div className="w-full py-3 rounded-xl border border-white/20 text-center text-sm text-white group-hover:bg-cyan-500 group-hover:text-black transition-colors">Select Silver</div>
</div>

<div className="price-card selected neon-gold group relative bg-[#050505] border border-[#FFD700] rounded-3xl p-10 cursor-pointer transition-all duration-300 transform md:-translate-y-4 z-20" onclick="selectTier('1000.00', this)">
<div className="absolute top-0 right-0 bg-[#FFD700] text-black text-xs font-bold px-3 py-1 rounded-bl-xl rounded-tr-2xl uppercase tracking-wider">Most Popular</div>
<h3 className="font-futuristic text-3xl text-[#FFD700] mb-2 tracking-wide">GOLD</h3>
<div className="text-5xl font-bold text-white mb-6 text-shadow-gold">$1000</div>
<ul className="space-y-4 text-sm text-neutral-200 mb-8 font-light">
<li className="flex items-center gap-3"><iconify-icon className="text-[#FFD700]" icon="solar:star-linear"></iconify-icon> Unlimited Pages</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#FFD700]" icon="solar:star-linear"></iconify-icon> Advanced Animations</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#FFD700]" icon="solar:star-linear"></iconify-icon> 3D Parallax Effects</li>
<li className="flex items-center gap-3"><iconify-icon className="text-[#FFD700]" icon="solar:star-linear"></iconify-icon> Priority Support 24/7</li>
</ul>
<div className="w-full py-4 rounded-xl bg-[#FFD700] text-black font-bold text-center text-sm shadow-[0_0_20px_rgba(255,215,0,0.4)] group-hover:shadow-[0_0_40px_rgba(255,215,0,0.6)] transition-all">Select Gold Status</div>
</div>
</div>

<div className="max-w-md mx-auto bg-neutral-900/50 rounded-2xl p-8 border border-white/10 backdrop-blur-sm">
<div className="text-center mb-6">
<p className="text-xs text-neutral-500 uppercase tracking-widest mb-2">Secure Transaction</p>
<div className="text-lg text-white">Total: <span className="font-mono text-cyan-400" id="display-price">$1000.00</span></div>
</div>
<div className="relative z-0" id="paypal-button-container"></div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/[0.05] bg-[#020202]">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-8">
<div className="flex items-center gap-2">
<span className="font-futuristic text-white text-lg">ELITE<span className="text-cyan-500">.DESIGN</span></span>
</div>
<div className="text-xs text-neutral-600 font-mono">
                © 2024 ELITE WEB DESIGN SYSTEMS.
            </div>
</div>
</footer>


    </>
  );
}
