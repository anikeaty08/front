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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    // Smooth scroll and nav transparency
    const nav = document.getElementById('nav');
    const logo = document.getElementById('nav-logo');
    const links = document.querySelectorAll('.nav-link');
    
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.remove('bg-[#1A1A2E]/80', 'border-white/10');
            nav.classList.add('bg-white/90', 'border-black/[0.06]');
            logo.classList.replace('text-white', 'text-gray-900');
            links.forEach(l => {
                l.classList.replace('text-white/70', 'text-gray-500');
                l.classList.replace('hover:text-white', 'hover:text-gray-900');
                l.classList.replace('hover:bg-white/5', 'hover:bg-gray-100/50');
            });
            nav.querySelector('button').classList.replace('text-white/80', 'text-gray-500');
            nav.querySelector('button').classList.replace('hover:text-white', 'hover:text-gray-900');
        } else {
            nav.classList.add('bg-[#1A1A2E]/80', 'border-white/10');
            nav.classList.remove('bg-white/90', 'border-black/[0.06]');
            logo.classList.replace('text-gray-900', 'text-white');
            links.forEach(l => {
                l.classList.replace('text-gray-500', 'text-white/70');
                l.classList.replace('hover:text-gray-900', 'hover:text-white');
                l.classList.replace('hover:bg-gray-100/50', 'hover:bg-white/5');
            });
            nav.querySelector('button').classList.replace('text-gray-500', 'text-white/80');
            nav.querySelector('button').classList.replace('hover:text-gray-900', 'hover:text-white');
        }
    });

    // Reveal animations
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('in');
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
    
    document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

    // Animated Canvas (Glowing Gradient Mesh)
    (function(){
        const canvas = document.getElementById('hero-canvas');
        if(!canvas) return;
        const ctx = canvas.getContext('2d');
        let width, height;

        function resize() {
            width = canvas.width = window.innerWidth;
            height = canvas.height = canvas.parentElement.clientHeight;
        }
        window.addEventListener('resize', resize);
        resize();

        class Blob {
            constructor(color, size, speed) {
                this.x = Math.random();
                this.y = Math.random();
                this.vx = (Math.random() - 0.5) * speed;
                this.vy = (Math.random() - 0.5) * speed;
                this.color = color;
                this.size = size;
            }
            update() {
                this.x += this.vx;
                this.y += this.vy;
                if(this.x <= 0 || this.x >= 1) this.vx *= -1;
                if(this.y <= 0 || this.y >= 1) this.vy *= -1;
            }
            draw() {
                ctx.beginPath();
                const radius = this.size * Math.max(width, height);
                const grad = ctx.createRadialGradient(
                    this.x * width, this.y * height, 0,
                    this.x * width, this.y * height, radius
                );
                grad.addColorStop(0, this.color);
                grad.addColorStop(1, 'rgba(0,0,0,0)');
                ctx.fillStyle = grad;
                ctx.arc(this.x * width, this.y * height, radius, 0, Math.PI * 2);
                ctx.fill();
            }
        }

        const blobs = [
            new Blob('rgba(46, 109, 180, 0.4)', 0.6, 0.0015),
            new Blob('rgba(96, 165, 250, 0.25)', 0.5, 0.002),
            new Blob('rgba(26, 58, 107, 0.6)', 0.7, 0.001)
        ];

        function animate() {
            ctx.clearRect(0, 0, width, height);
            ctx.globalCompositeOperation = 'screen';
            blobs.forEach(blob => {
                blob.update();
                blob.draw();
            });
            requestAnimationFrame(animate);
        }
        animate();
    })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 h-16 border-b border-white/10 bg-[#1A1A2E]/80 backdrop-blur-lg transition-all duration-300" id="nav">
<div className="max-w-7xl mx-auto px-6 h-full flex items-center justify-between">
<a className="flex items-center gap-2 text-sm font-medium tracking-tight text-white transition-colors duration-300" href="#" id="nav-logo" onclick="window.scrollTo({top:0, behavior:'smooth'})">
<iconify-icon className="text-xl text-[#2E6DB4]" icon="solar:shield-network-linear"></iconify-icon>
            INTEGRISEC
        </a>
<div className="hidden md:flex items-center gap-1">
<a className="nav-link px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200" href="#about">About</a>
<a className="nav-link px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200" href="#services">Services</a>
<a className="nav-link px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200" href="#program">ICPRC™</a>
<a className="nav-link px-4 py-2 text-sm text-white/70 hover:text-white hover:bg-white/5 rounded-md transition-all duration-200" href="#leadership">Leadership</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-[#2E6DB4] hover:bg-[#1A3A6B] rounded-lg transition-all duration-200 shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
            Get in Touch
        </a>
<button className="md:hidden text-white/80 hover:text-white">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</nav>

<section className="relative min-h-screen pt-24 bg-[#1A1A2E] flex flex-col overflow-hidden">

<div className="absolute inset-0 z-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCI+PGRlZnM+PHBhdHRlcm4gaWQ9ImdyaWQiIHdpZHRoPSI0MCIgaGVpZ2h0PSI0MCIgcGF0dGVyblVuaXRzPSJ1c2VyU3BhY2VPblVzZSI+PHBhdGggZD0iTSA0MCAwIEwgMCAwIDAgNDAiIGZpbGw9Im5vbmUiIHN0cm9rZT0icmdiYSgyNTUsIDI1NSwgMjU1LCAwLjA1KSIgc3Ryb2tlLXdpZHRoPSIxIi8+PC9wYXR0ZXJuPjwvZGVmcz48cmVjdCB3aWR0aD0iMTAwJSIgaGVpZ2h0PSIxMDAlIiBmaWxsPSJ1cmwoI2dyaWQpIi8+PC9zdmc+')] opacity-60 pointer-events-none"></div>

<canvas className="absolute inset-0 w-full h-full z-0 opacity-90 pointer-events-none" id="hero-canvas"></canvas>

<div className="absolute inset-0 z-0 bg-gradient-to-b from-transparent via-[#1A1A2E]/60 to-[#1A1A2E] pointer-events-none"></div>
<div className="relative z-10 flex-1 max-w-7xl mx-auto w-full px-6 flex flex-col justify-center pb-20 pt-10">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-8 items-center">

<div className="max-w-2xl reveal">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-white/10 bg-white/5 backdrop-blur-md mb-8 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-[#2E6DB4] animate-soft-pulse"></span>
<span className="text-xs font-medium tracking-wide text-white/70">Critical Infrastructure Protection — Texas, USA</span>
</div>
<h1 className="text-5xl sm:text-6xl md:text-7xl font-normal tracking-tight text-white leading-[1.05] mb-6">
                    Securing What <br/>
                    Matters — <br/>
<span className="text-[#2E6DB4]">Physical &amp; Digital.</span>
</h1>
<p className="text-lg text-white/50 font-light leading-relaxed mb-10 max-w-lg">
                    Integrisec delivers <strong className="text-white/80 font-normal">integrated cyber-physical security</strong> for healthcare, energy, and critical infrastructure across the United States.
                </p>
<div className="flex flex-wrap items-center gap-4">
<a className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-medium text-white bg-[#2E6DB4] hover:bg-[#1A3A6B] rounded-xl transition-all duration-300 shadow-[0_4px_20px_rgba(46,109,180,0.3)] hover:shadow-[0_6px_24px_rgba(46,109,180,0.4)] hover:-translate-y-0.5" href="#contact">
                        Schedule a Consultation
                        <iconify-icon className="text-base" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="inline-flex items-center gap-2 px-6 py-3.5 text-sm font-normal text-white/70 bg-white/5 hover:bg-white/10 border border-white/10 hover:text-white rounded-xl transition-all duration-300" href="#services">
                        Explore Services
                    </a>
</div>
</div>

<div className="relative w-full max-w-lg mx-auto lg:ml-auto reveal delay-200 hidden md:block perspective-1000">
<div className="glass-dark border border-white/10 rounded-3xl p-6 shadow-2xl animate-float">

<div className="flex items-center justify-between pb-4 border-b border-white/10 mb-5">
<span className="text-xs font-medium tracking-widest uppercase text-white/40">Security Posture</span>
<div className="flex items-center gap-2 text-xs font-medium text-green-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-soft-pulse"></span>
                            System Active
                        </div>
</div>

<div className="grid grid-cols-2 gap-3 mb-4">
<div className="bg-white/5 border border-white/5 rounded-2xl p-4">
<div className="text-[10px] font-medium tracking-widest uppercase text-white/30 mb-2">Physical Access</div>
<div className="text-2xl font-normal tracking-tight text-green-400">Secure</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-4">
<div className="text-[10px] font-medium tracking-widest uppercase text-white/30 mb-2">Network Integrity</div>
<div className="text-2xl font-normal tracking-tight text-[#60A5FA]">99.9%</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-4">
<div className="text-[10px] font-medium tracking-widest uppercase text-white/30 mb-2">Risks Identified</div>
<div className="text-2xl font-normal tracking-tight text-white">18</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-2xl p-4">
<div className="text-[10px] font-medium tracking-widest uppercase text-white/30 mb-2">Resolved</div>
<div className="text-2xl font-normal tracking-tight text-green-400">14</div>
</div>
</div>

<div className="bg-white/5 border border-white/5 rounded-2xl p-4">
<div className="flex items-center justify-between mb-3">
<span className="text-[10px] font-medium tracking-widest uppercase text-white/40">Recent Activity</span>
<span className="text-[10px] text-white/20">Live Feed</span>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 border-b border-white/5 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
<span className="text-xs font-light text-white/60 leading-relaxed">Server rack 04 accessed via verified badge.</span>
</div>
<div className="flex items-start gap-3 border-b border-white/5 pb-3">
<span className="w-1.5 h-1.5 rounded-full bg-[#60A5FA] mt-1.5 flex-shrink-0"></span>
<span className="text-xs font-light text-white/60 leading-relaxed">Firewall anomaly detected &amp; isolated in 4s.</span>
</div>
<div className="flex items-start gap-3">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 mt-1.5 flex-shrink-0"></span>
<span className="text-xs font-light text-white/60 leading-relaxed">CCTV feed encrypted and backed up securely.</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<div className="py-12 border-b border-black/[0.04] bg-white">
<div className="max-w-7xl mx-auto px-6">
<p className="text-xs font-medium tracking-widest uppercase text-gray-400 text-center mb-8">Aligned with federal security frameworks</p>
<div className="flex flex-wrap items-center justify-center gap-8 md:gap-16 opacity-60 grayscale">
<span className="text-xl md:text-2xl font-normal tracking-tight text-gray-900">NIST CSF</span>
<span className="text-xl md:text-2xl font-normal tracking-tight text-gray-900">HIPAA</span>
<span className="text-xl md:text-2xl font-normal tracking-tight text-gray-900">CISA</span>
<span className="text-xl md:text-2xl font-normal tracking-tight text-gray-900">FedRAMP</span>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 lg:gap-24 items-center">
<div className="reveal">
<p className="text-xs font-medium uppercase tracking-widest text-[#2E6DB4] mb-4">About Us</p>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 leading-[1.15] mb-6">
                    Texas-based expertise.<br/>
<span className="text-[#2E6DB4]">National protection.</span>
</h2>
<div className="space-y-6 text-base font-light text-gray-500 leading-relaxed mb-10">
<p>
                        Integrisec Security Group is a <strong className="font-normal text-gray-800">Texas-based security firm</strong> specializing in the convergence of advanced cybersecurity with physical security systems.
                    </p>
<p>
                        We help healthcare organizations, energy operators, and government agencies protect their critical assets from today's most sophisticated threats — before they happen.
                    </p>
</div>
<div className="flex gap-12">
<div>
<div className="text-4xl font-normal tracking-tight text-gray-900 mb-1">15+</div>
<div className="text-xs font-medium tracking-widest uppercase text-gray-400">Years Experience</div>
</div>
<div>
<div className="text-4xl font-normal tracking-tight text-[#2E6DB4] mb-1">2-in-1</div>
<div className="text-xs font-medium tracking-widest uppercase text-gray-400">Cyber + Physical</div>
</div>
</div>
</div>
<div className="relative reveal delay-200">
<div className="aspect-square rounded-3xl overflow-hidden bg-gray-100 border border-black/[0.04]">
<img alt="Server room" className="w-full h-full object-cover mix-blend-multiply opacity-90 transition-transform duration-700 hover:scale-105" src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
</div>

<div className="absolute -bottom-6 -left-6 bg-white border border-black/[0.06] rounded-2xl p-5 shadow-xl">
<iconify-icon className="text-3xl text-[#2E6DB4] mb-2" icon="solar:shield-check-linear"></iconify-icon>
<div className="text-sm font-medium text-gray-900">Convergence Driven</div>
<div className="text-xs text-gray-500 mt-1">Bridging physical &amp; digital</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F8F8F8] border-y border-black/[0.04] text-center">
<div className="max-w-4xl mx-auto px-6 reveal">
<iconify-icon className="text-4xl text-gray-300 mb-6" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-2xl md:text-3xl lg:text-4xl font-light tracking-tight text-gray-900 leading-snug mb-8">
<span className="text-gray-400">"</span>Modern threats don't pick sides. Ransomware shuts down hospitals. Hackers disable power grids. Physical breaches compromise digital systems.<span className="text-gray-400">"</span>
</p>
<p className="text-sm md:text-base font-light text-gray-500">
            Most organizations treat them as separate problems — that's the gap attackers exploit. 
            <strong className="font-medium text-gray-900">Integrisec closes that gap.</strong>
</p>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-20 md:mb-32 reveal">
<p className="text-xs font-medium uppercase tracking-widest text-[#2E6DB4] mb-4">Our Services</p>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-4">Comprehensive Defense Architecture</h2>
<p className="text-base font-light text-gray-500">End-to-end protection bridging the physical and digital divide.</p>
</div>
<div className="space-y-32">

<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="order-2 md:order-1 reveal">
<div className="w-12 h-12 rounded-xl bg-[#F0F6FC] flex items-center justify-center text-[#2E6DB4] text-2xl mb-6">
<iconify-icon icon="solar:radar-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4">Risk Assessment &amp; Security Audits</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                        We identify vulnerabilities across your physical and digital systems — before attackers do. Our holistic audits examine everything from server architecture to physical access points, delivering a prioritized risk matrix.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-[#2E6DB4] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Cross-domain vulnerability scanning
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-[#2E6DB4] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Physical access control review
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-[#2E6DB4] text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Risk map classified by urgency
                        </li>
</ul>
</div>
<div className="order-1 md:order-2 mockup-container reveal delay-200">
<div className="bg-[#F8F8F8] border border-black/[0.04] rounded-[2rem] p-8 md:p-12 min-h-[320px] flex items-center justify-center relative overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] to-transparent"></div>
<div className="relative z-10 w-full max-w-sm bg-white border border-black/[0.06] rounded-2xl shadow-xl shadow-black/[0.02] overflow-hidden">
<div className="px-5 py-4 border-b border-black/[0.04] flex items-center justify-between">
<span className="text-xs font-medium text-gray-900">Audit Progress</span>
<span className="text-[10px] font-medium px-2.5 py-1 rounded-full bg-[#F0F6FC] text-[#2E6DB4]">85% Complete</span>
</div>
<div className="p-5">
<div className="flex justify-between text-xs font-medium text-gray-500 mb-2">
<span>Overall Health</span>
<span className="text-[#2E6DB4]">85%</span>
</div>
<div className="h-1.5 w-full bg-gray-100 rounded-full overflow-hidden mb-6">
<div className="h-full bg-[#2E6DB4] rounded-full w-[85%]"></div>
</div>
<div className="space-y-2">
<div className="flex items-center justify-between px-3 py-2 bg-[#F8F8F8] border border-black/[0.04] rounded-lg text-xs">
<span className="text-gray-600 font-light">Network Scan</span>
<span className="font-medium text-green-600">Passed</span>
</div>
<div className="flex items-center justify-between px-3 py-2 bg-[#F8F8F8] border border-black/[0.04] rounded-lg text-xs">
<span className="text-gray-600 font-light">Perimeter Access</span>
<span className="font-medium text-amber-500">Review</span>
</div>
<div className="flex items-center justify-between px-3 py-2 bg-[#F8F8F8] border border-black/[0.04] rounded-lg text-xs">
<span className="text-gray-600 font-light">Badge Systems</span>
<span className="font-medium text-red-500">Critical</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="mockup-container reveal">
<div className="bg-[#F8F8F8] border border-black/[0.04] rounded-[2rem] p-8 md:p-12 min-h-[320px] flex items-center justify-center relative overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] to-transparent"></div>
<div className="relative z-10 w-full max-w-sm flex flex-col gap-2">
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/[0.06] shadow-sm hover:translate-x-1 transition-transform cursor-default">
<div className="w-10 h-10 rounded-lg bg-[#EFF6FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-[#2E6DB4]" icon="solar:shield-check-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900">NIST CSF 2.0</div>
<div className="text-xs font-light text-gray-400">Cybersecurity Framework</div>
</div>
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/[0.06] shadow-sm hover:translate-x-1 transition-transform cursor-default">
<div className="w-10 h-10 rounded-lg bg-[#F0FDF4] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-green-600" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900">HIPAA Security Rule</div>
<div className="text-xs font-light text-gray-400">Healthcare compliance</div>
</div>
<div className="w-6 h-6 rounded-full bg-green-100 flex items-center justify-center text-green-600 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:check-linear"></iconify-icon>
</div>
</div>
<div className="flex items-center gap-4 p-4 rounded-xl bg-white border border-black/[0.06] shadow-sm hover:translate-x-1 transition-transform cursor-default">
<div className="w-10 h-10 rounded-lg bg-[#FAF5FF] flex items-center justify-center shrink-0">
<iconify-icon className="text-lg text-purple-600" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="flex-1">
<div className="text-sm font-medium text-gray-900">CISA Guidelines</div>
<div className="text-xs font-light text-gray-400">Critical infrastructure</div>
</div>
<div className="w-6 h-6 rounded-full bg-amber-100 flex items-center justify-center text-amber-600 shrink-0">
<iconify-icon className="text-[10px]" icon="solar:minus-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-[#F0FDF4] flex items-center justify-center text-green-600 text-2xl mb-6">
<iconify-icon icon="solar:document-text-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4">Compliance &amp; Regulatory Support</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                        We align your security posture with NIST, CISA, HIPAA, and other federal standards. Gap analysis, corrective roadmaps, and documentation — compliance becomes a measurable outcome, not a checkbox exercise.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-green-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            HIPAA, NIST &amp; CISA alignment
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-green-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            12-month correction schedule
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-green-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Policy &amp; procedure templates
                        </li>
</ul>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="order-2 md:order-1 reveal">
<div className="w-12 h-12 rounded-xl bg-[#FFF7ED] flex items-center justify-center text-orange-500 text-2xl mb-6">
<iconify-icon icon="solar:link-circle-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4">Cyber-Physical System Integration</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                        We seamlessly connect your cybersecurity protocols with physical security infrastructure — CCTV, access control, biometrics, and firewalls — into one coherent defense architecture.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Unified access &amp; cyber policy
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-orange-500 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time cross-domain alerts
                        </li>
</ul>
</div>
<div className="order-1 md:order-2 mockup-container reveal delay-200">
<div className="bg-[#F8F8F8] border border-black/[0.04] rounded-[2rem] p-8 md:p-12 min-h-[320px] flex items-center justify-center relative overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] to-transparent"></div>
<div className="relative z-10 bg-white border border-black/[0.06] rounded-2xl shadow-xl shadow-black/[0.02] p-6 max-w-[280px]">
<div className="flex items-center justify-between pb-5 border-b border-black/[0.04] mb-5">
<div className="w-12 h-12 rounded-xl bg-gray-50 border border-black/[0.04] flex items-center justify-center">
<iconify-icon className="text-gray-400 text-2xl" icon="solar:cpu-linear"></iconify-icon>
</div>
<div className="px-2">
<iconify-icon className="text-[#2E6DB4] text-xl animate-pulse" icon="solar:round-alt-arrow-right-linear"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-[#F0F6FC] border border-[#2E6DB4]/20 flex items-center justify-center">
<iconify-icon className="text-[#2E6DB4] text-2xl" icon="solar:lock-keyhole-linear"></iconify-icon>
</div>
</div>
<div className="text-sm font-medium text-gray-900 mb-1">Integration Sync</div>
<div className="text-xs font-light text-gray-500">Cyber protocols instantly tie to physical access systems.</div>
</div>
</div>
</div>
</div>

<div className="grid md:grid-cols-2 gap-12 lg:gap-24 items-center group">
<div className="mockup-container reveal">
<div className="bg-[#F8F8F8] border border-black/[0.04] rounded-[2rem] p-8 md:p-12 min-h-[320px] flex items-center justify-center relative overflow-hidden bg-grid-pattern">
<div className="absolute inset-0 bg-gradient-to-t from-[#F8F8F8] to-transparent"></div>
<div className="relative z-10 w-full max-w-sm glass-dark border border-white/10 rounded-2xl shadow-2xl p-5">
<div className="flex items-center gap-2 mb-4 pb-3 border-b border-white/10">
<span className="w-1.5 h-1.5 rounded-full bg-red-500 animate-soft-pulse"></span>
<span className="text-[10px] font-medium tracking-widest uppercase text-white/50">Live Incident Feed</span>
</div>
<div className="space-y-3">
<div className="bg-white/5 border border-white/5 rounded-xl p-3">
<div className="text-[10px] text-white/30 mb-1">03:42 AM — Playbook Alpha Executed</div>
<div className="text-xs font-light text-white/80 leading-relaxed">Threat neutralized. Perimeter secured in &lt;8 seconds.</div>
</div>
<div className="bg-white/5 border border-white/5 rounded-xl p-3">
<div className="text-[10px] text-white/30 mb-1">02:17 AM — Anomaly Detected</div>
<div className="text-xs font-light text-white/80 leading-relaxed">Unauthorized badge scan isolated and logged.</div>
</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="w-12 h-12 rounded-xl bg-[#FEF2F2] flex items-center justify-center text-red-600 text-2xl mb-6">
<iconify-icon icon="solar:siren-rounded-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-normal tracking-tight text-gray-900 mb-4">Incident Response &amp; 24/7 Monitoring</h3>
<p className="text-base font-light text-gray-500 leading-relaxed mb-8">
                        When a crisis hits, your team will be ready. We build your response playbooks through live simulations and provide continuous monitoring with a real-time security dashboard.
                    </p>
<ul className="space-y-3">
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-red-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Live ransomware simulations
                        </li>
<li className="flex items-start gap-3 text-sm font-light text-gray-600">
<iconify-icon className="text-red-600 text-lg shrink-0 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Incident response playbooks
                        </li>
</ul>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-black/[0.04] bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 divide-y sm:divide-y-0 sm:divide-x divide-black/[0.04] reveal">
<div className="py-12 px-6 flex flex-col items-center text-center">
<div className="text-5xl font-normal tracking-tight text-gray-900 mb-2">15+</div>
<div className="text-sm font-light text-gray-500">Years of hands-on security experience</div>
</div>
<div className="py-12 px-6 flex flex-col items-center text-center">
<div className="text-5xl font-normal tracking-tight text-[#2E6DB4] mb-2">90</div>
<div className="text-sm font-light text-gray-500">Day structured ICPRC™ assessment</div>
</div>
<div className="py-12 px-6 flex flex-col items-center text-center">
<div className="text-5xl font-normal tracking-tight text-gray-900 mb-2">3</div>
<div className="text-sm font-light text-gray-500">Federal compliance frameworks aligned</div>
</div>
<div className="py-12 px-6 flex flex-col items-center text-center">
<div className="text-5xl font-normal tracking-tight text-gray-900 mb-2 flex items-baseline justify-center">2<span className="text-2xl font-light mx-0.5">-in-</span>1</div>
<div className="text-sm font-light text-gray-500">Cyber + physical in one program</div>
</div>
</div>
</div>
</div>

<section className="py-24 md:py-32 bg-[#1A1A2E] relative overflow-hidden" id="program">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top,#2E6DB4_0%,transparent_50%)] opacity-20 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="text-center max-w-2xl mx-auto mb-16 md:mb-24 reveal">
<div className="inline-flex items-center px-4 py-1.5 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-white/50 mb-6">Flagship Program</div>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-white mb-6">The ICPRC™ Program</h2>
<p className="text-base font-light text-white/60 leading-relaxed">
                Our 90-day integrated cyber-physical assessment designed specifically for healthcare facilities and energy operators. Delivered with a full executive report and actionable security roadmap.
            </p>
</div>
<div className="grid md:grid-cols-3 gap-6 relative mb-8">

<div className="hidden md:block absolute top-12 left-[16.66%] right-[16.66%] h-px bg-white/10"></div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 reveal">
<div className="w-12 h-12 rounded-full bg-[#2E6DB4] ring-[6px] ring-[#1A1A2E] flex items-center justify-center text-white font-medium text-lg mb-8 relative z-10 shadow-lg">1</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-[#60A5FA] mb-2">Weeks 1 – 4</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Risk Assessment</h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6">Full infrastructure analysis — networks, firewalls, cameras, access control, badge systems, and internal threat vectors.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> Executive risk report</li>
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> Risk map by urgency</li>
</ul>
</div>

<div className="bg-[#2E6DB4]/10 border border-[#2E6DB4]/30 rounded-3xl p-8 relative hover:bg-[#2E6DB4]/20 transition-all duration-300 hover:-translate-y-1 reveal delay-100">
<div className="w-12 h-12 rounded-full bg-[#2E6DB4] ring-[6px] ring-[#1A1A2E] flex items-center justify-center text-white font-medium text-lg mb-8 relative z-10 shadow-lg">2</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-[#60A5FA] mb-2">Weeks 5 – 8</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Regulatory Alignment</h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6">Verify HIPAA, NIST, CISA compliance, identify critical gaps, and build the corrective roadmap and documentation.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> Gap analysis</li>
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> 12-month schedule</li>
</ul>
</div>

<div className="bg-white/5 border border-white/10 rounded-3xl p-8 relative hover:bg-white/[0.07] hover:border-white/20 transition-all duration-300 hover:-translate-y-1 reveal delay-200">
<div className="w-12 h-12 rounded-full bg-[#2E6DB4] ring-[6px] ring-[#1A1A2E] flex items-center justify-center text-white font-medium text-lg mb-8 relative z-10 shadow-lg">3</div>
<div className="text-[10px] font-medium uppercase tracking-widest text-[#60A5FA] mb-2">Weeks 9 – 12</div>
<h3 className="text-xl font-medium tracking-tight text-white mb-3">Crisis Readiness</h3>
<p className="text-sm font-light text-white/50 leading-relaxed mb-6">Live simulations of ransomware attacks and physical intrusions — debrief with leadership, full manual and checklist.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> Response manual</li>
<li className="flex items-center gap-2 text-xs font-light text-white/60 border-t border-white/10 pt-2"><span className="text-[#60A5FA]">›</span> Business continuity</li>
</ul>
</div>
</div>

<div className="bg-white/5 border border-white/10 rounded-2xl p-6 md:p-8 flex flex-col md:flex-row items-start md:items-center justify-between gap-8 reveal">
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-[#60A5FA] mb-1.5">Optional — Annual Retainer</div>
<h4 className="text-lg font-medium text-white mb-2">Ongoing Monitoring</h4>
<p className="text-sm font-light text-white/50 max-w-2xl">Monthly vulnerability checks, quarterly executive reports, and a live security dashboard — after your 90-day program concludes.</p>
</div>
<a className="inline-flex items-center justify-center gap-2 px-6 py-3 text-sm font-medium text-white bg-[#2E6DB4] hover:bg-[#1A3A6B] rounded-xl transition-all whitespace-nowrap shrink-0" href="#contact">
                Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F8F8] border-y border-black/[0.04]">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-lg mx-auto mb-16 reveal">
<p className="text-xs font-medium uppercase tracking-widest text-[#2E6DB4] mb-3">Why Integrisec</p>
<h2 className="text-3xl font-normal tracking-tight text-gray-900">Why organizations choose us</h2>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="bg-white border border-black/[0.06] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-xl mb-5">
<iconify-icon icon="solar:calendar-date-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2">15+ Years Experience</h4>
<p className="text-xs font-light text-gray-500 leading-relaxed">Decades of hands-on security management across physical and operational sectors, now applied to the US market.</p>
</div>
<div className="bg-white border border-black/[0.06] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal delay-100">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-xl mb-5">
<iconify-icon icon="solar:link-bold-duotone"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2">The Missing Link</h4>
<p className="text-xs font-light text-gray-500 leading-relaxed">The only firm effectively bridging the critical gap between physical and cyber security — because attackers treat them as one.</p>
</div>
<div className="bg-white border border-black/[0.06] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal delay-200">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-xl mb-5">
<iconify-icon icon="solar:star-fall-minimalistic-2-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2">Veteran-First Hiring</h4>
<p className="text-xs font-light text-gray-500 leading-relaxed">Built by a team that has served the nation. We apply military-grade discipline and methodologies to every engagement.</p>
</div>
<div className="bg-white border border-black/[0.06] rounded-2xl p-6 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 reveal delay-300">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-xl mb-5">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<h4 className="text-sm font-medium text-gray-900 mb-2">Texas-Based</h4>
<p className="text-xs font-light text-gray-500 leading-relaxed">Federally aligned and nationally scalable operations originating from Texas, built to serve organizations of any scale.</p>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-white" id="leadership">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16 reveal">
<p className="text-xs font-medium uppercase tracking-widest text-[#2E6DB4] mb-3">Leadership</p>
<h2 className="text-3xl font-normal tracking-tight text-gray-900">Meet the founder</h2>
</div>
<div className="bg-white border border-black/[0.06] rounded-[2rem] overflow-hidden shadow-xl shadow-black/[0.02] grid md:grid-cols-5 reveal">
<div className="md:col-span-2 relative min-h-[400px] bg-gradient-to-br from-[#E8F0FE] to-[#C7D9F5] flex items-center justify-center overflow-hidden">
<img alt="Maximiliano Sacaquini" className="absolute inset-0 w-full h-full object-cover grayscale mix-blend-multiply opacity-80" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=900&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 to-transparent"></div>
</div>
<div className="md:col-span-3 p-8 md:p-12 flex flex-col justify-center">
<div className="text-[10px] font-medium uppercase tracking-widest text-[#2E6DB4] mb-2">Founder &amp; CEO</div>
<h3 className="text-3xl font-normal tracking-tight text-gray-900 mb-1">Maximiliano Sacaquini</h3>
<p className="text-sm font-light text-gray-500 mb-6 pb-6 border-b border-black/[0.06]">Integrisec Security Group</p>
<div className="space-y-4 text-sm font-light text-gray-600 leading-relaxed mb-8">
<p>Maximiliano is the founder and CEO of Integrisec. With <strong className="font-normal text-gray-900">over 15 years of experience</strong> in physical security, operations management, and risk assessment, he has led programs for private companies and public sector clients — and now brings that expertise to the United States.</p>
<p>He served as Administrative and Financial Manager at a security firm for a decade, leading operations, federal compliance, and client growth. He holds a <strong className="font-normal text-gray-900">Bachelor's in Business Administration</strong> and multiple operational certifications.</p>
</div>
<div className="flex flex-wrap gap-2 mb-8">
<span className="px-2.5 py-1 text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md">Business Admin — PUC-SP</span>
<span className="px-2.5 py-1 text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md">Access Control Cert.</span>
<span className="px-2.5 py-1 text-[10px] font-medium text-gray-600 bg-gray-50 border border-gray-200 rounded-md">Security Operations</span>
</div>
<div className="space-y-4 pt-6 border-t border-black/[0.06]">
<div className="flex gap-4 items-start">
<div className="font-mono text-[10px] font-medium text-[#2E6DB4] mt-0.5 shrink-0 w-20">2008 — Now</div>
<div className="text-xs font-light text-gray-500">Security Project Management — electronic systems, risk assessment &amp; implementation</div>
</div>
<div className="flex gap-4 items-start">
<div className="font-mono text-[10px] font-medium text-[#2E6DB4] mt-0.5 shrink-0 w-20">2011 – 2021</div>
<div className="text-xs font-light text-gray-500">Admin &amp; Financial Director — security firm, federal compliance &amp; public procurement</div>
</div>
<div className="flex gap-4 items-start">
<div className="font-mono text-[10px] font-medium text-[#2E6DB4] mt-0.5 shrink-0 w-20">2025</div>
<div className="text-xs font-light text-gray-500">Founded Integrisec Security Group — Texas, United States</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-[#F8F8F8] border-t border-black/[0.04]" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 lg:gap-24 items-start">
<div className="reveal">
<p className="text-xs font-medium uppercase tracking-widest text-[#2E6DB4] mb-3">Contact</p>
<h2 className="text-3xl md:text-4xl font-normal tracking-tight text-gray-900 mb-4">Secure Your <br/><span className="text-[#2E6DB4]">Infrastructure.</span></h2>
<p className="text-base font-light text-gray-500 mb-12">Contact us to schedule a confidential consultation or learn more about our 90-day ICPRC™ Pilot Program.</p>
<div className="space-y-8">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-lg shrink-0">
<iconify-icon icon="solar:letter-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-0.5">Email</div>
<div className="text-sm font-medium text-gray-900">contact@integrisec.com</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-lg shrink-0">
<iconify-icon icon="solar:map-point-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-0.5">Headquarters</div>
<div className="text-sm font-medium text-gray-900">Texas, United States</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-xl bg-[#F0F6FC] text-[#2E6DB4] flex items-center justify-center text-lg shrink-0">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<div>
<div className="text-[10px] font-medium uppercase tracking-widest text-gray-400 mb-0.5">Compliance</div>
<div className="text-sm font-medium text-gray-900">NIST · CISA · HIPAA Aligned</div>
</div>
</div>
</div>
</div>
<div className="reveal delay-200">
<div className="bg-white border border-black/[0.06] rounded-3xl p-8 md:p-10 shadow-2xl shadow-black/[0.03]">
<div className="mb-8">
<h3 className="text-lg font-medium text-gray-900 mb-1">Request a Consultation</h3>
<p className="text-xs font-light text-gray-400">We typically respond within 24 hours.</p>
</div>
<form className="space-y-5" onsubmit="event.preventDefault(); const b=this.querySelector('button'); b.textContent='Message Sent ✓'; b.className='w-full py-3.5 px-6 rounded-xl text-sm font-medium text-white transition-all bg-green-500 shadow-sm mt-2'; b.disabled=true;">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-700">First Name</label>
<input className="w-full bg-gray-50/50 border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-1 focus:ring-[#2E6DB4] transition-all text-gray-900 placeholder:text-gray-400" placeholder="John" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-700">Last Name</label>
<input className="w-full bg-gray-50/50 border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-1 focus:ring-[#2E6DB4] transition-all text-gray-900 placeholder:text-gray-400" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-700">Organization</label>
<input className="w-full bg-gray-50/50 border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-1 focus:ring-[#2E6DB4] transition-all text-gray-900 placeholder:text-gray-400" placeholder="Hospital, Energy Company, Agency..." type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-700">Work Email</label>
<input className="w-full bg-gray-50/50 border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-1 focus:ring-[#2E6DB4] transition-all text-gray-900 placeholder:text-gray-400" placeholder="john@organization.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-gray-700">Message</label>
<textarea className="w-full bg-gray-50/50 border border-black/10 rounded-xl px-4 py-2.5 text-sm focus:outline-none focus:border-[#2E6DB4] focus:ring-1 focus:ring-[#2E6DB4] transition-all text-gray-900 placeholder:text-gray-400 resize-none" placeholder="Tell us about your security needs..." required="" rows="4"></textarea>
</div>
<button className="w-full py-3.5 px-6 rounded-xl text-sm font-medium text-white transition-all bg-[#2E6DB4] hover:bg-[#1A3A6B] shadow-[0_4px_14px_rgba(46,109,180,0.25)] mt-2 hover:-translate-y-0.5" type="submit">
                            Submit Request
                        </button>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#1A1A2E] pt-16 pb-8 border-t border-white/10">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col lg:flex-row justify-between items-start gap-12 lg:gap-8 pb-12 border-b border-white/10 mb-8">
<div className="max-w-xs">
<div className="flex items-center gap-2 mb-4 text-white">
<iconify-icon className="text-xl text-[#2E6DB4]" icon="solar:shield-network-linear"></iconify-icon>
<span className="text-sm font-medium tracking-tight">INTEGRI<span className="text-[#2E6DB4]">SEC</span></span>
</div>
<p className="text-xs font-light text-white/40 leading-relaxed mb-6">Integrated cyber-physical security for critical infrastructure in the United States.</p>
<div className="flex items-center gap-2 text-[11px] text-white/30">
<span className="w-1.5 h-1.5 rounded-full bg-green-400 animate-soft-pulse"></span>
                    Texas, United States · Est. 2025
                </div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 lg:gap-16">
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-4">Company</h4>
<ul className="space-y-2.5">
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#about">About Us</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#leadership">Leadership</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#contact">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-4">Services</h4>
<ul className="space-y-2.5">
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#services">Risk Assessment</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#services">Compliance Support</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#services">Incident Response</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#services">System Integration</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-4">Program</h4>
<ul className="space-y-2.5">
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#program">ICPRC™ Program</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#program">Phase Overview</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#contact">Get a Consultation</a></li>
</ul>
</div>
<div>
<h4 className="text-[10px] font-medium uppercase tracking-widest text-white/40 mb-4">Compliance</h4>
<ul className="space-y-2.5">
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#">NIST CSF</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#">HIPAA</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#">CISA Guidelines</a></li>
<li><a className="text-xs font-light text-white/50 hover:text-white transition-colors" href="#">FedRAMP</a></li>
</ul>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-[11px] font-light text-white/30">
<div>© 2025 Integrisec Security Group, Inc. All rights reserved.</div>
<div className="flex gap-6">
<a className="hover:text-white/70 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white/70 transition-colors" href="#">Terms of Use</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
