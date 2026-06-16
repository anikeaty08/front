import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
obsidian: '#0A0A0A',
crimson: '#D32F2F',
glass: 'rgba(255, 255, 255, 0.03)',
glassBorder: 'rgba(255, 255, 255, 0.08)',
},
fontFamily: {
sans: ['Montserrat', 'sans-serif'],
display: ['Syncopate', 'sans-serif'],
},
animation: {
'flash-pulse': 'flash 0.3s ease-out forwards',
},
keyframes: {
flash: {
'0%': { backgroundColor: '#D32F2F', boxShadow: '0 0 0 0 rgba(211, 47, 47, 0.7)' },
'100%': { backgroundColor: 'transparent', boxShadow: '0 0 0 10px rgba(211, 47, 47, 0)' },
}
}
}
}
}



        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        menuBtn.addEventListener('click', toggleMenu);

        function toggleMenu() {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                mobileMenu.classList.add('translate-x-0');
                mobileMenu.setAttribute('aria-hidden', 'false');
                menuBtn.setAttribute('aria-expanded', 'true');
                menuBtn.setAttribute('aria-label', 'Close menu');
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:x" data-width="24" data-height="24" style="stroke-width: 1.5;"></span>';
            } else {
                mobileMenu.classList.add('translate-x-full');
                mobileMenu.classList.remove('translate-x-0');
                mobileMenu.setAttribute('aria-hidden', 'true');
                menuBtn.setAttribute('aria-expanded', 'false');
                menuBtn.setAttribute('aria-label', 'Open menu');
                menuBtn.innerHTML = '<span class="iconify" data-icon="lucide:menu" data-width="24" data-height="24" style="stroke-width: 1.5;"></span>';
            }
        }

        // Smooth Section Entries (Framer Motion-like via IntersectionObserver, SEO-friendly)
        const observerOptions = { threshold: 0.1, rootMargin: "0px 0px -50px 0px" };
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) entry.target.classList.add('active');
            });
        }, observerOptions);

        document.querySelectorAll('.reveal-on-scroll').forEach((el) => observer.observe(el));

        // "Framer Motion" whileTap simulation for button flash:
        // whileTap={{ opacity: 0.8, scale: 0.98 }}
        // Implemented with pointer events to keep markup semantic + crawlable.
        const tapEls = document.querySelectorAll('.fm-tap');

        function applyTap(el, cfg) {
            el.style.willChange = 'transform, opacity';
            el.style.transition = el.style.transition ? el.style.transition : 'transform 120ms ease, opacity 120ms ease';
            el.style.transform = `scale(${cfg.scale ?? 0.98})`;
            el.style.opacity = `${cfg.opacity ?? 0.8}`;
        }

        function clearTap(el) {
            el.style.transform = '';
            el.style.opacity = '';
        }

        tapEls.forEach((el) => {
            let cfg = { opacity: 0.8, scale: 0.98 };
            try {
                const attr = el.getAttribute('data-tap');
                if (attr) cfg = Object.assign(cfg, JSON.parse(attr));
            } catch (_) {}

            const down = () => applyTap(el, cfg);
            const up = () => clearTap(el);

            el.addEventListener('pointerdown', down);
            el.addEventListener('pointerup', up);
            el.addEventListener('pointercancel', up);
            el.addEventListener('pointerleave', up);

            // Keyboard accessibility parity
            el.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') applyTap(el, cfg);
            });
            el.addEventListener('keyup', (e) => {
                if (e.key === 'Enter' || e.key === ' ') clearTap(el);
            });
        });

        // Three.js Background Implementation
        const initThreeJS = () => {
            const container = document.getElementById('canvas-container');
            if (!container) return;

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x0a0a0a, 0.02);

            const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
            const renderer = new THREE.WebGLRenderer({ alpha: true, antialias: true });

            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(window.devicePixelRatio);
            container.appendChild(renderer.domElement);

            const geometry = new THREE.IcosahedronGeometry(2, 0);

            const material = new THREE.MeshPhysicalMaterial({
                color: 0x111111,
                roughness: 0.1,
                metalness: 0.8,
                clearcoat: 1.0,
                clearcoatRoughness: 0.1,
                flatShading: true,
                side: THREE.DoubleSide
            });

            const stone = new THREE.Mesh(geometry, material);
            scene.add(stone);

            const wireframeGeo = new THREE.WireframeGeometry(geometry);
            const wireframeMat = new THREE.LineBasicMaterial({ color: 0xD32F2F, transparent: true, opacity: 0.1 });
            const wireframe = new THREE.LineSegments(wireframeGeo, wireframeMat);
            stone.add(wireframe);

            const ambientLight = new THREE.AmbientLight(0x404040, 2);
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(0xD32F2F, 2, 50);
            pointLight1.position.set(5, 5, 5);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xffffff, 1, 50);
            pointLight2.position.set(-5, -5, 5);
            scene.add(pointLight2);

            camera.position.z = 6;

            let mouseX = 0;
            let mouseY = 0;
            let targetX = 0;
            let targetY = 0;

            const windowHalfX = window.innerWidth / 2;
            const windowHalfY = window.innerHeight / 2;

            document.addEventListener('mousemove', (event) => {
                mouseX = (event.clientX - windowHalfX) * 0.001;
                mouseY = (event.clientY - windowHalfY) * 0.001;
            });

            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });

            const animate = () => {
                requestAnimationFrame(animate);

                targetX = mouseX * 2;
                targetY = mouseY * 2;

                stone.rotation.y += 0.05 * (targetX - stone.rotation.y);
                stone.rotation.x += 0.05 * (targetY - stone.rotation.x);
                stone.rotation.z += 0.002;
                stone.rotation.y += 0.002;
                stone.position.y = Math.sin(Date.now() * 0.001) * 0.2;

                renderer.render(scene, camera);
            };

            animate();
        };

        document.addEventListener('DOMContentLoaded', initThreeJS);

        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) nav.classList.add('bg-obsidian/90');
            else nav.classList.remove('bg-obsidian/90');
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div aria-hidden="true" className="fixed top-0 left-0 w-full h-full -z-10 pointer-events-none opacity-60" id="canvas-container"></div>

<header className="fixed top-0 w-full z-50 glass-panel border-b-0 border-white/5 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
<a aria-label="Black Stone home" className="font-display font-bold text-xl tracking-tighter text-white hover:text-crimson transition-colors duration-300 z-50" href="#">
                BLACK <span className="text-crimson">STONE</span>
</a>
<nav aria-label="Primary navigation" className="hidden lg:flex items-center gap-8">
<a className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300" href="#menu">Menu</a>
<a className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300" href="#career">Career</a>
<a className="text-xs uppercase tracking-widest text-gray-400 hover:text-white transition-colors duration-300" href="#press">Press</a>
</nav>
<div className="hidden lg:flex items-center gap-4">
<button className="fm-tap border border-white/20 px-6 py-2 text-xs tracking-widest uppercase hover:bg-white hover:text-black transition-all duration-300" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                    Gift Card
                </button>
<button className="fm-tap bg-crimson text-white border border-crimson px-6 py-2 text-xs tracking-widest uppercase hover:bg-red-700 transition-all duration-300 shadow-[0_0_15px_rgba(211,47,47,0.3)]" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                    Reservation
                </button>
</div>

<button aria-controls="mobile-menu" aria-expanded="false" aria-label="Open menu" className="lg:hidden text-white z-50 focus:outline-none" id="mobile-menu-btn">
<span className="iconify" data-height="24" data-icon="lucide:menu" data-width="24" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</header>

<div aria-hidden="true" className="fixed inset-0 bg-obsidian/95 backdrop-blur-xl z-40 transform translate-x-full transition-transform duration-500 flex flex-col justify-center items-center gap-8" id="mobile-menu">
<a className="text-2xl font-display text-white tracking-tight hover:text-crimson transition-colors" href="#menu" onclick="toggleMenu()">Menu</a>
<a className="text-2xl font-display text-white tracking-tight hover:text-crimson transition-colors" href="#career" onclick="toggleMenu()">Career</a>
<a className="text-2xl font-display text-white tracking-tight hover:text-crimson transition-colors" href="#press" onclick="toggleMenu()">Press</a>
<a className="text-crimson text-2xl font-display tracking-tight mt-4" href="#reservation" onclick="toggleMenu()">Book Table</a>
</div>

<main>
<section aria-labelledby="hero-title" className="relative h-screen w-full flex flex-col justify-center items-center text-center px-4 overflow-hidden">
<div aria-hidden="true" className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-obsidian pointer-events-none"></div>
<div className="z-10 flex flex-col items-center gap-6 mix-blend-screen reveal-on-scroll active">
<h2 className="text-crimson tracking-[0.3em] text-xs uppercase font-medium animate-pulse">Experience the Rare</h2>
<h1 className="font-display text-6xl md:text-8xl lg:text-9xl tracking-tighter text-transparent bg-clip-text bg-gradient-to-br from-white via-gray-300 to-gray-600 text-glow leading-none" id="hero-title">
                    BLACK<br/><span className="text-white">STONE</span>
</h1>
<p className="font-light text-gray-400 max-w-md md:text-lg mt-4 leading-relaxed">
                    Culinary alchemy where primitive fire meets modern luxury.
                </p>
<div className="mt-8 flex flex-col md:flex-row gap-4">
<a className="fm-tap group relative px-8 py-3 bg-white text-black text-xs font-semibold tracking-widest uppercase overflow-hidden hover:scale-105 transition-transform duration-300 inline-flex items-center justify-center" data-tap='{"opacity":0.8,"scale":0.98}' href="#menu">
<span className="relative z-10">Explore Menu</span>
</a>
<a className="fm-tap px-8 py-3 border border-white/20 text-white text-xs font-semibold tracking-widest uppercase hover:bg-white/5 hover:border-crimson hover:text-crimson transition-colors duration-300 backdrop-blur-sm inline-flex items-center justify-center" data-tap='{"opacity":0.8,"scale":0.98}' href="#reservation">
                        Book a Table
                    </a>
</div>
</div>

<div aria-hidden="true" className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce opacity-50">
<span className="iconify text-white" data-icon="lucide:chevron-down" data-width="24" style={{strokeWidth: '1.5'}}></span>
</div>
</section>

<section aria-labelledby="story-title" className="py-24 px-6 relative bg-obsidian" id="story">
<div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div className="relative group reveal-on-scroll">
<div aria-hidden="true" className="absolute -inset-1 bg-gradient-to-r from-crimson to-gray-800 rounded-lg blur opacity-25 group-hover:opacity-50 transition duration-1000 group-hover:duration-200"></div>
<div className="relative h-[400px] w-full bg-neutral-900 overflow-hidden rounded-sm border border-white/5">
<div aria-label="Signature dish being prepared" className="w-full h-full flex items-center justify-center bg-[url('https://images.unsplash.com/photo-1544025162-d76690b60943?q=80&amp;w=2000&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 grayscale hover:grayscale-0 transition-all duration-700" role="img"></div>
</div>
</div>
<div className="space-y-6 reveal-on-scroll delay-200">
<div className="flex items-center gap-4">
<div aria-hidden="true" className="h-[1px] w-12 bg-crimson"></div>
<span className="text-crimson text-xs tracking-widest uppercase font-medium">The Origin</span>
</div>
<h2 className="font-display text-4xl md:text-5xl text-white tracking-tighter" id="story-title">
                        Forged in <br/><span className="text-gray-500 italic font-serif">Fire &amp; Stone</span>
</h2>
<p className="text-gray-400 font-light leading-7 text-sm">
                        Black Stone is not just a dining destination; it is a theatre of senses. We source the rarest cuts and the freshest produce, searing them on ancient obsidian stones to lock in primal flavors.
                    </p>
<div className="pt-4 grid grid-cols-3 gap-8 border-t border-white/10">
<div>
<p className="text-2xl font-display text-white">3</p>
<p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Michelin Stars</p>
</div>
<div>
<p className="text-2xl font-display text-white">45</p>
<p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Rare Wines</p>
</div>
<div>
<p className="text-2xl font-display text-white">∞</p>
<p className="text-[10px] uppercase tracking-widest text-gray-500 mt-1">Memories</p>
</div>
</div>
</div>
</div>
</section>

<section aria-labelledby="menu-title" className="py-32 bg-neutral-950 relative" id="menu">
<div aria-hidden="true" className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-crimson to-transparent opacity-30"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6 reveal-on-scroll">
<div>
<h2 className="font-display text-4xl text-white tracking-tighter mb-2" id="menu-title">Curated <span className="text-crimson">Selections</span></h2>
<p className="text-gray-400 font-light text-sm">Season 2024 • The Obsidian Collection</p>
</div>
<a className="fm-tap text-white text-xs tracking-widest uppercase border-b border-crimson pb-1 hover:text-crimson transition-colors inline-flex items-center" data-tap='{"opacity":0.8,"scale":0.98}' href="#menu">
                        View Full Menu
                    </a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">
<article className="group relative bg-obsidian border border-white/5 hover:border-crimson/30 transition-all duration-500 overflow-hidden reveal-on-scroll delay-100">
<div className="h-64 overflow-hidden relative">
<div aria-hidden="true" className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
<img alt="A5 Wagyu served on heated stone" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1546833998-877b37c2e5c6?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative z-20 bg-gradient-to-t from-obsidian to-transparent -mt-12">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-display text-white tracking-tight">A5 Wagyu Stone</h3>
<span className="text-crimson font-mono text-sm">$180</span>
</div>
<p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                                Hokkaido beef, truffle shavings, gold leaf, served on heated volcanic rock.
                            </p>
<button className="fm-tap text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors flex items-center gap-2" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                                Order Now <span className="iconify" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
<article className="group relative bg-obsidian border border-white/5 hover:border-crimson/30 transition-all duration-500 overflow-hidden reveal-on-scroll delay-200">
<div className="h-64 overflow-hidden relative">
<div aria-hidden="true" className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
<img alt="Charred octopus with romesco sauce" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1600891964092-4316c288032e?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative z-20 bg-gradient-to-t from-obsidian to-transparent -mt-12">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-display text-white tracking-tight">Charred Octopus</h3>
<span className="text-crimson font-mono text-sm">$45</span>
</div>
<p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                                Spanish octopus, romesco sauce, smoked paprika, black garlic dust.
                            </p>
<button className="fm-tap text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors flex items-center gap-2" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                                Order Now <span className="iconify" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
<article className="group relative bg-obsidian border border-white/5 hover:border-crimson/30 transition-all duration-500 overflow-hidden reveal-on-scroll delay-300">
<div className="h-64 overflow-hidden relative">
<div aria-hidden="true" className="absolute inset-0 bg-black/40 z-10 group-hover:bg-black/20 transition-all duration-500"></div>
<img alt="Crimson cocktail in a crystal sphere" className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-700 filter grayscale group-hover:grayscale-0" src="https://images.unsplash.com/photo-1559339352-11d035aa65de?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div className="p-8 relative z-20 bg-gradient-to-t from-obsidian to-transparent -mt-12">
<div className="flex justify-between items-start mb-2">
<h3 className="text-xl font-display text-white tracking-tight">Crimson Elixir</h3>
<span className="text-crimson font-mono text-sm">$28</span>
</div>
<p className="text-gray-500 text-xs font-light leading-relaxed mb-4">
                                Smoked mezcal, blood orange, chili thread, served in a crystal sphere.
                            </p>
<button className="fm-tap text-[10px] uppercase tracking-widest text-white/60 group-hover:text-white transition-colors flex items-center gap-2" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                                Order Now <span className="iconify" data-icon="lucide:arrow-right" data-width="12" style={{strokeWidth: '1.5'}}></span>
</button>
</div>
</article>
</div>
</div>
</section>

<section aria-labelledby="sustainability-title" className="py-24 bg-black border-t border-white/10" id="sustainability">
<div className="max-w-7xl mx-auto px-6 reveal-on-scroll">
<div className="text-center mb-16">
<h2 className="font-display text-3xl text-white tracking-tight mb-4" id="sustainability-title">Ethical <span className="text-crimson">Source</span></h2>
<p className="text-gray-400 font-light text-sm max-w-xl mx-auto">We are committed to a zero-waste philosophy and supporting local agriculture.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12">
<div className="flex flex-col items-center gap-4 group">
<div className="p-6 border border-white/10 rounded-full group-hover:border-crimson/50 transition-colors duration-300">
<span className="iconify text-crimson" data-icon="lucide:leaf" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-white text-xs tracking-widest uppercase">Organic</h3>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="p-6 border border-white/10 rounded-full group-hover:border-crimson/50 transition-colors duration-300">
<span className="iconify text-crimson" data-icon="lucide:recycle" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-white text-xs tracking-widest uppercase">Zero Waste</h3>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="p-6 border border-white/10 rounded-full group-hover:border-crimson/50 transition-colors duration-300">
<span className="iconify text-crimson" data-icon="lucide:droplets" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-white text-xs tracking-widest uppercase">Water Conscious</h3>
</div>
<div className="flex flex-col items-center gap-4 group">
<div className="p-6 border border-white/10 rounded-full group-hover:border-crimson/50 transition-colors duration-300">
<span className="iconify text-crimson" data-icon="lucide:sun" data-width="32" style={{strokeWidth: '1.5'}}></span>
</div>
<h3 className="text-white text-xs tracking-widest uppercase">Solar Powered</h3>
</div>
</div>
</div>
</section>

<section aria-labelledby="reservation-title" className="py-24 bg-neutral-900 relative overflow-hidden" id="reservation">
<div aria-hidden="true" className="absolute right-0 top-0 w-1/3 h-full bg-gradient-to-l from-crimson/5 to-transparent pointer-events-none"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center reveal-on-scroll">
<h2 className="font-display text-3xl md:text-5xl text-white tracking-tighter mb-8" id="reservation-title">Secure Your <span className="italic font-serif text-crimson">Seat</span></h2>
<form aria-label="Reservation form" className="space-y-6 text-left glass-panel p-8 md:p-12 rounded-xl">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div className="group">
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2" htmlFor="res-name">Name</label>
<input autocomplete="name" className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-crimson transition-colors font-light" id="res-name" placeholder="John Doe" type="text"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2" htmlFor="res-guests">Guests</label>
<select autocomplete="off" className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-crimson transition-colors font-light appearance-none" id="res-guests">
<option className="bg-obsidian">2 Guests</option>
<option className="bg-obsidian">4 Guests</option>
<option className="bg-obsidian">6 Guests</option>
<option className="bg-obsidian">Private Event</option>
</select>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2" htmlFor="res-date">Date</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-crimson transition-colors font-light opacity-70" id="res-date" type="date"/>
</div>
<div>
<label className="block text-[10px] uppercase tracking-widest text-gray-500 mb-2" htmlFor="res-time">Time</label>
<input className="w-full bg-transparent border-b border-white/20 py-2 text-white outline-none focus:border-crimson transition-colors font-light opacity-70" id="res-time" type="time"/>
</div>
</div>
<div className="pt-6 text-center">
<button className="fm-tap w-full md:w-auto px-12 py-4 bg-crimson text-white text-xs font-semibold tracking-widest uppercase hover:bg-red-800 transition-all duration-300 shadow-[0_4px_20px_rgba(211,47,47,0.2)]" data-tap='{"opacity":0.8,"scale":0.98}' type="button">
                            Confirm Request
                        </button>
</div>
</form>
</div>
</section>
</main>

<footer className="bg-black border-t border-white/5 py-16 px-6 reveal-on-scroll">
<div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-12 mb-16">
<div className="md:col-span-1">
<a aria-label="Black Stone home in footer" className="font-display font-bold text-xl tracking-tighter text-white" href="#">
                    BLACK <span className="text-crimson">STONE</span>
</a>
<address className="not-italic text-gray-500 text-xs font-light mt-4 leading-6">
                    1024 Obsidian Way,<br/>
                    New York, NY 10001
                </address>
</div>
<div>
<h2 className="text-white text-xs uppercase tracking-widest mb-6">Explore</h2>
<ul className="space-y-4 text-xs text-gray-500 font-light">
<li><a className="hover:text-crimson transition-colors" href="#menu">Menu</a></li>
<li><a className="hover:text-crimson transition-colors" href="#career">Career</a></li>
<li><a className="hover:text-crimson transition-colors" href="#press">Press</a></li>
</ul>
</div>
<div>
<h2 className="text-white text-xs uppercase tracking-widest mb-6">Connect</h2>
<ul className="space-y-4 text-xs text-gray-500 font-light">
<li><a className="hover:text-crimson transition-colors" href="#">Instagram</a></li>
<li><a className="hover:text-crimson transition-colors" href="#">Twitter</a></li>
<li><a className="hover:text-crimson transition-colors" href="#">Email Us</a></li>
</ul>
</div>
<div>
<h2 className="text-white text-xs uppercase tracking-widest mb-6">Newsletter</h2>
<form aria-label="Newsletter signup" className="flex border-b border-white/20 pb-2">
<label className="sr-only" htmlFor="newsletter-email">Email Address</label>
<input autocomplete="email" className="bg-transparent w-full text-white text-xs outline-none font-light" id="newsletter-email" placeholder="Email Address" type="email"/>
<button aria-label="Submit newsletter email" className="fm-tap text-crimson hover:text-white transition-colors" data-tap='{"opacity":0.8,"scale":0.98}' type="submit">
<span className="iconify" data-icon="lucide:arrow-right" data-width="16" style={{strokeWidth: '1.5'}}></span>
</button>
</form>
</div>
</div>
<div className="border-t border-white/5 pt-8 text-center">
<p className="text-[10px] text-gray-600 tracking-widest uppercase">
                DESIGNED BY SpectraByte
            </p>
</div>
</footer>



    </>
  );
}
