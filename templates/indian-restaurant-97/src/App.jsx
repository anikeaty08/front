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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // --- Data ---
        const categories = ['All', 'Soups', 'Starters', 'Main Course', 'Breads', 'Rice & Biryani', 'Beverages', 'Desserts'];
        
        const menuData = [
            { id: 1, category: 'Soups', name: 'Lemon & Coriander', desc: 'Refreshing soup with tangy lemon and fresh coriander.', price: '160', img: 'https://images.unsplash.com/photo-1547592180-85f173990554?auto=format&fit=crop&w=400&q=80' },
            { id: 2, category: 'Soups', name: 'Cream of Tomato', desc: 'Rich and creamy classic tomato soup topped with croutons.', price: '180', img: 'https://images.unsplash.com/photo-1547592166-23ac45744acd?auto=format&fit=crop&w=400&q=80' },
            { id: 3, category: 'Soups', name: 'Simple Sweet Corn', desc: 'Comforting thick soup made with sweet corn kernels.', price: '160', img: 'https://images.unsplash.com/photo-1604152135912-04a022e23696?auto=format&fit=crop&w=400&q=80' },
            { id: 4, category: 'Soups', name: 'Mixed Vegetable', desc: 'Healthy clear soup loaded with assorted vegetables.', price: '150', img: 'https://images.unsplash.com/photo-1548943487-a2e4e43b4850?auto=format&fit=crop&w=400&q=80' },
            { id: 5, category: 'Soups', name: 'Crispy Manchow', desc: 'Spicy, dark brown soup topped with crispy fried noodles.', price: '170', img: 'https://images.unsplash.com/photo-1540189549336-e6e99c3679fe?auto=format&fit=crop&w=400&q=80' },
            { id: 6, category: 'Soups', name: 'Spicy Hot & Sour', desc: 'Tangy and spicy broth with vegetables.', price: '170', img: 'https://images.unsplash.com/photo-1512058564366-18510be2db19?auto=format&fit=crop&w=400&q=80' },
            { id: 7, category: 'Starters', name: 'Paneer Tikka', desc: 'Soft cottage cheese cubes marinated in yogurt and spices, roasted in tandoor.', price: '280', img: 'https://images.unsplash.com/photo-1599487405270-8e12eb2fea14?auto=format&fit=crop&w=400&q=80' },
            { id: 8, category: 'Starters', name: 'Hara Bhara Kebab', desc: 'Nutritious patties made from spinach, peas, and potatoes.', price: '240', img: 'https://images.unsplash.com/photo-1603894584373-5ac82b2ae398?auto=format&fit=crop&w=400&q=80' },
            { id: 9, category: 'Main Course', name: 'Paneer Butter Masala', desc: 'Rich and creamy curry made with paneer, tomatoes, and butter.', price: '320', img: 'https://images.unsplash.com/photo-1631452180519-c014fe946bc0?auto=format&fit=crop&w=400&q=80' },
            { id: 10, category: 'Main Course', name: 'Dal Makhani', desc: 'Whole black lentils cooked overnight on tandoor with cream and butter.', price: '260', img: 'https://images.unsplash.com/photo-1585937421612-70a008356fbe?auto=format&fit=crop&w=400&q=80' },
            { id: 11, category: 'Main Course', name: 'Kadhai Veg', desc: 'Assorted vegetables cooked in a spicy tomato-onion gravy with bell peppers.', price: '280', img: 'https://images.unsplash.com/photo-1546833999-b9f581a1996d?auto=format&fit=crop&w=400&q=80' },
            { id: 12, category: 'Breads', name: 'Garlic Naan', desc: 'Soft flatbread topped with minced garlic and cilantro, baked in tandoor.', price: '80', img: 'https://images.unsplash.com/photo-1601050690597-df0568f70950?auto=format&fit=crop&w=400&q=80' },
            { id: 13, category: 'Breads', name: 'Tandoori Roti', desc: 'Whole wheat flatbread cooked in a clay oven.', price: '40', img: 'https://images.unsplash.com/photo-1626776876729-bab4369a5a5a?auto=format&fit=crop&w=400&q=80' },
            { id: 14, category: 'Rice & Biryani', name: 'Veg Dum Biryani', desc: 'Aromatic basmati rice cooked with mixed vegetables and whole spices.', price: '290', img: 'https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?auto=format&fit=crop&w=400&q=80' },
            { id: 15, category: 'Rice & Biryani', name: 'Jeera Rice', desc: 'Basmati rice tempered with cumin seeds and ghee.', price: '180', img: 'https://images.unsplash.com/photo-1596797038530-2c107229654b?auto=format&fit=crop&w=400&q=80' },
            { id: 16, category: 'Beverages', name: 'Sweet Lassi', desc: 'Traditional churned yogurt drink served chilled.', price: '110', img: 'https://images.unsplash.com/photo-1572453800999-e8d2d1589b7c?auto=format&fit=crop&w=400&q=80' },
            { id: 17, category: 'Desserts', name: 'Gulab Jamun', desc: 'Deep-fried milk dumplings soaked in cardamom flavored sugar syrup.', price: '120', img: 'https://images.unsplash.com/photo-1597816041695-0371465dbce0?auto=format&fit=crop&w=400&q=80' }
        ];

        let activeCategory = 'All';

        // --- DOM Elements ---
        const categoryContainer = document.getElementById('category-container');
        const menuGrid = document.getElementById('menu-grid');
        const currentCategoryTitle = document.getElementById('current-category-title');

        // --- Render Functions ---
        function renderCategories() {
            categoryContainer.innerHTML = categories.map(cat => {
                const isActive = cat === activeCategory;
                const baseClasses = "px-4 py-1.5 rounded-full text-base font-light whitespace-nowrap transition-all duration-300 border cursor-pointer select-none";
                const activeClasses = "bg-white/10 text-orange-400 border-orange-500/30 shadow-[0_0_10px_rgba(249,115,22,0.1)]";
                const inactiveClasses = "bg-transparent text-neutral-400 border-transparent hover:bg-white/5 hover:text-neutral-200";
                
                return `
                    <button onclick="setCategory('${cat}')" class="${baseClasses} ${isActive ? activeClasses : inactiveClasses}">
                        ${cat}
                    </button>
                `;
            }).join('');
        }

        function renderMenu() {
            const filteredData = activeCategory === 'All' 
                ? menuData 
                : menuData.filter(item => item.category === activeCategory);
            
            currentCategoryTitle.textContent = activeCategory === 'All' ? 'Complete Menu' : activeCategory;

            // Fade out effect
            menuGrid.style.opacity = '0';
            
            setTimeout(() => {
                menuGrid.innerHTML = filteredData.map((item, index) => `
                    <div class="glass-panel rounded-2xl p-3 flex gap-4 group transition-all duration-300 hover:bg-white/[0.06] hover:border-white/[0.08] fade-in-up" style="transition-delay: ${index * 50}ms">
                        <div class="w-24 h-24 sm:w-28 sm:h-28 rounded-xl overflow-hidden shrink-0 relative bg-neutral-900">
                            <div class="absolute inset-0 shimmer z-0"></div>
                            <img src="${item.img}" alt="${item.name}" loading="lazy" class="w-full h-full object-cover relative z-10 transition-transform duration-700 group-hover:scale-110" onload="this.previousElementSibling.style.display='none'">
                        </div>
                        <div class="flex flex-col flex-1 justify-center py-1">
                            <div class="flex justify-between items-start gap-2">
                                <h4 class="text-base sm:text-lg tracking-tight font-medium text-neutral-100 group-hover:text-orange-300 transition-colors">${item.name}</h4>
                            </div>
                            <p class="text-sm text-neutral-400 font-light mt-1.5 line-clamp-2 leading-relaxed flex-grow">${item.desc}</p>
                            <div class="mt-2 flex items-center justify-between">
                                <span class="text-base font-medium text-orange-400">₹${item.price}</span>
                                <button class="w-7 h-7 rounded-full bg-white/5 border border-white/10 flex items-center justify-center text-neutral-300 hover:bg-orange-500 hover:text-white hover:border-orange-500 transition-all">
                                    <i data-lucide="plus" class="w-4 h-4"></i>
                                </button>
                            </div>
                        </div>
                    </div>
                `).join('');
                
                menuGrid.style.opacity = '1';
                observeFadeElements();
                
                // Re-initialize icons for newly injected elements
                lucide.createIcons({
                    attrs: {
                        'stroke-width': 1.5
                    }
                });
            }, 300);
        }

        // --- Interaction ---
        window.setCategory = (cat) => {
            activeCategory = cat;
            renderCategories();
            renderMenu();
        };

        // --- Scroll Animations ---
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        function observeFadeElements() {
            document.querySelectorAll('.fade-in-up:not(.visible)').forEach(el => {
                observer.observe(el);
            });
        }

        // Header shadow on scroll
        window.addEventListener('scroll', () => {
            const header = document.getElementById('header');
            if (window.scrollY > 20) {
                header.classList.add('shadow-lg', 'shadow-black/20');
            } else {
                header.classList.remove('shadow-lg', 'shadow-black/20');
            }
        });

        // --- Init UI ---
        renderCategories();
        renderMenu();

        // --- Three.js Background Animation ---
        function initThreeJS() {
            const canvas = document.getElementById('webgl-canvas');
            const renderer = new THREE.WebGLRenderer({ canvas, alpha: true, antialias: true });
            renderer.setSize(window.innerWidth, window.innerHeight);
            renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

            const scene = new THREE.Scene();
            scene.fog = new THREE.FogExp2(0x0a0a0a, 0.03);

            const camera = new THREE.PerspectiveCamera(45, window.innerWidth / window.innerHeight, 0.1, 100);
            camera.position.z = 25;

            // Lights
            const ambientLight = new THREE.AmbientLight(0xffedd5, 0.5); 
            scene.add(ambientLight);

            const pointLight1 = new THREE.PointLight(0xf97316, 1.5, 50); 
            pointLight1.position.set(10, 10, 10);
            scene.add(pointLight1);

            const pointLight2 = new THREE.PointLight(0xfcd34d, 1, 50); 
            pointLight2.position.set(-10, -10, 5);
            scene.add(pointLight2);

            // Objects Group
            const objectsGroup = new THREE.Group();
            scene.add(objectsGroup);

            // Materials
            const paneerMat = new THREE.MeshPhysicalMaterial({
                color: 0xfffbeb,
                roughness: 0.8,
                metalness: 0.1,
                clearcoat: 0.1
            });

            const spiceMat = new THREE.MeshPhysicalMaterial({
                color: 0xb91c1c, 
                roughness: 0.9,
                metalness: 0.2
            });

            const naanMat = new THREE.MeshPhysicalMaterial({
                color: 0xf59e0b, 
                roughness: 0.7,
                metalness: 0.1,
                bumpScale: 0.05
            });

            const items = [];

            // Add Abstract Paneer Cubes
            const boxGeo = new THREE.BoxGeometry(1.5, 1.5, 1.5);
            for(let i=0; i<8; i++) {
                const mesh = new THREE.Mesh(boxGeo, paneerMat);
                mesh.position.set(
                    (Math.random() - 0.5) * 30,
                    (Math.random() - 0.5) * 40,
                    (Math.random() - 0.5) * 15 - 5
                );
                mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
                mesh.userData = {
                    rotSpeed: (Math.random() - 0.5) * 0.01,
                    floatSpeed: (Math.random() - 0.5) * 0.005,
                    floatOffset: Math.random() * Math.PI * 2
                };
                objectsGroup.add(mesh);
                items.push(mesh);
            }

            // Add Abstract Spices
            const spiceGeo = new THREE.TetrahedronGeometry(0.3, 1);
            for(let i=0; i<25; i++) {
                const mesh = new THREE.Mesh(spiceGeo, spiceMat);
                mesh.position.set(
                    (Math.random() - 0.5) * 35,
                    (Math.random() - 0.5) * 45,
                    (Math.random() - 0.5) * 20
                );
                mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, Math.random()*Math.PI);
                mesh.userData = {
                    rotSpeed: (Math.random() - 0.5) * 0.03,
                    floatSpeed: (Math.random() - 0.5) * 0.01,
                    floatOffset: Math.random() * Math.PI * 2
                };
                objectsGroup.add(mesh);
                items.push(mesh);
            }

            // Add Abstract Naan
            const naanGeo = new THREE.TorusGeometry(2, 0.4, 16, 32);
            for(let i=0; i<4; i++) {
                const mesh = new THREE.Mesh(naanGeo, naanMat);
                mesh.scale.z = 0.2; 
                mesh.position.set(
                    (Math.random() - 0.5) * 25,
                    (Math.random() - 0.5) * 35,
                    (Math.random() - 0.5) * 10 - 10
                );
                mesh.rotation.set(Math.random()*Math.PI, Math.random()*Math.PI, 0);
                mesh.userData = {
                    rotSpeed: (Math.random() - 0.5) * 0.005,
                    floatSpeed: (Math.random() - 0.5) * 0.003,
                    floatOffset: Math.random() * Math.PI * 2
                };
                objectsGroup.add(mesh);
                items.push(mesh);
            }

            // Animation Loop
            const clock = new THREE.Clock();

            function animate() {
                requestAnimationFrame(animate);
                const time = clock.getElapsedTime();

                // Gentle overall rotation
                objectsGroup.rotation.y = Math.sin(time * 0.05) * 0.2;
                objectsGroup.rotation.x = Math.cos(time * 0.05) * 0.1;

                // Move individual items
                items.forEach(item => {
                    item.rotation.x += item.userData.rotSpeed;
                    item.rotation.y += item.userData.rotSpeed;
                    item.position.y += Math.sin(time + item.userData.floatOffset) * item.userData.floatSpeed;
                });

                // Subtle parallax based on scroll
                const scrollY = window.scrollY;
                camera.position.y = -scrollY * 0.005;

                renderer.render(scene, camera);
            }

            animate();

            // Resize handler
            window.addEventListener('resize', () => {
                camera.aspect = window.innerWidth / window.innerHeight;
                camera.updateProjectionMatrix();
                renderer.setSize(window.innerWidth, window.innerHeight);
            });
        }

        setTimeout(() => {
            if(typeof THREE !== 'undefined') {
                initThreeJS();
            }
        }, 500);

        // Initialize Lucide Icons globally
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5
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
      

<canvas className="fixed inset-0 z-0 pointer-events-none opacity-60 mix-blend-screen" id="webgl-canvas"></canvas>

<div className="relative z-10 flex flex-col min-h-screen">

<header className="fixed top-0 left-0 right-0 z-50 glass-nav transition-all duration-300" id="header">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-4 flex items-center justify-between">
<div className="flex flex-col">
<h1 className="text-xl tracking-tighter font-medium text-gradient-warm leading-none">DESI TADKA</h1>
<span className="text-sm text-neutral-400 font-light mt-1 tracking-wide">PURE VEG NORTH INDIAN</span>
</div>
<div className="flex items-center gap-3">
<button className="w-8 h-8 rounded-full glass-panel flex items-center justify-center text-orange-200 hover:bg-white/10 transition-colors">
<i className="w-4 h-4" data-lucide="search"></i>
</button>
</div>
</div>

<div className="w-full border-t border-white/[0.02] py-2">
<div className="max-w-5xl mx-auto px-4 sm:px-6">
<div className="flex overflow-x-auto hide-scrollbar gap-2 pb-1" id="category-container">

</div>
</div>
</div>
</header>

<div className="h-32"></div>

<main className="flex-grow max-w-5xl mx-auto w-full px-4 sm:px-6 pb-24">
<section className="py-8 sm:py-12 fade-in-up">
<div className="glass-panel rounded-3xl p-6 sm:p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 to-transparent opacity-50 transition-opacity group-hover:opacity-100 duration-500"></div>
<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-orange-500/10 border border-orange-500/20 text-orange-400 text-sm font-light mb-4">
<i className="w-4 h-4" data-lucide="sparkles"></i>
                            Authentic Flavors
                        </div>
<h2 className="text-3xl sm:text-4xl tracking-tighter font-medium text-white mb-3 max-w-lg">
                            Experience the soul of North Indian cuisine.
                        </h2>
<p className="text-base text-neutral-400 font-light max-w-md leading-relaxed">
                            Rich curries, smoky tandoori, and delicate breads crafted with traditional recipes and pure vegetarian ingredients.
                        </p>
<div className="mt-6 flex flex-wrap gap-4 text-sm font-light text-neutral-300">
<div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
<i className="w-4 h-4 text-orange-400" data-lucide="map-pin"></i>
                                Vijayawada
                            </div>
<div className="flex items-center gap-1.5 bg-white/5 px-3 py-1.5 rounded-lg border border-white/5">
<i className="w-4 h-4 text-orange-400" data-lucide="wallet"></i>
                                ₹200–₹400 / person
                            </div>
</div>
</div>
</div>
</section>

<section className="pb-12 min-h-[50vh]" id="menu-section">
<div className="flex items-center justify-between mb-6 fade-in-up">
<h3 className="text-xl tracking-tight font-medium text-neutral-100" id="current-category-title">All Menu</h3>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4 sm:gap-6" id="menu-grid">

</div>
</section>
</main>

<footer className="mt-auto border-t border-white/[0.05] bg-black/40 backdrop-blur-md relative z-20">
<div className="max-w-5xl mx-auto px-4 sm:px-6 py-10">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div>
<h4 className="text-lg tracking-tight font-medium text-neutral-200 mb-4">DESI TADKA</h4>
<p className="text-sm text-neutral-400 font-light leading-relaxed max-w-xs mb-4">
                            60-16-5, 1st Cross Rd, beside HRT Residency Apartments, Moghalrajpuram, Siddhartha Nagar, Navodaya Colony, Vijayawada, Andhra Pradesh 520010
                        </p>
<a className="inline-flex items-center gap-2 text-sm text-orange-400 font-light hover:text-orange-300 transition-colors" href="tel:07989037277">
<i className="w-4 h-4" data-lucide="phone-call"></i>
                            07989037277
                        </a>
</div>
<div className="sm:text-right flex flex-col sm:items-end justify-center">
<div className="flex items-center gap-4 mb-6">
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="camera"></i>
</a>
<a className="w-10 h-10 rounded-full glass-panel flex items-center justify-center text-neutral-300 hover:text-orange-400 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="map"></i>
</a>
</div>
<p className="text-sm text-neutral-500 font-light">
                            Open Daily • 11:30 AM - 11:00 PM
                        </p>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-4 sm:right-6 z-50 flex flex-col gap-3">
<a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center text-blue-400 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" href="https://maps.google.com/?q=60-16-5,1st+Cross+Rd,Vijayawada" target="_blank">
<i className="w-5 h-5" data-lucide="navigation"></i>
</a>
<a className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-xl border border-white/20 shadow-lg flex items-center justify-center text-neutral-200 hover:bg-white/20 transition-all duration-300 hover:-translate-y-1" href="tel:07989037277">
<i className="w-5 h-5" data-lucide="phone"></i>
</a>
<a className="w-14 h-14 rounded-full bg-gradient-to-tr from-green-500 to-green-400 shadow-[0_0_20px_rgba(34,197,94,0.3)] flex items-center justify-center text-white hover:scale-105 transition-transform duration-300" href="https://wa.me/917989037277" target="_blank">
<i className="w-6 h-6" data-lucide="message-circle"></i>
</a>
</div>
</div>



    </>
  );
}
