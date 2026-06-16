import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.5s ease-out',
'slide-up': 'slideUp 0.6s cubic-bezier(0.16, 1, 0.3, 1)',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { transform: 'translateY(20px)', opacity: '0' },
'100%': { transform: 'translateY(0)', opacity: '1' },
}
}
}
}
}



        // Car Data
        const cars = [
            {
                id: 1,
                brand: "Porsche",
                model: "911 GT3 RS",
                category: "sport",
                price: "$315,000",
                image: "https://images.unsplash.com/photo-1503376763036-066120622c74?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "2.7s", power: "518 HP", engine: "4.0L Flat-6" }
            },
            {
                id: 2,
                brand: "Mercedes-AMG",
                model: "GT Black Series",
                category: "sport",
                price: "$450,000",
                image: "https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "3.1s", power: "720 HP", engine: "V8 BiTurbo" }
            },
            {
                id: 3,
                brand: "Audi",
                model: "RS e-tron GT",
                category: "electric",
                price: "$165,000",
                image: "https://images.unsplash.com/photo-1603584173870-7b231414da46?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "3.1s", power: "637 HP", engine: "280 mi Range" }
            },
            {
                id: 4,
                brand: "Lamborghini",
                model: "Urus Performante",
                category: "suv",
                price: "$295,000",
                image: "https://images.unsplash.com/photo-1632245889029-e41790ad180f?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "3.3s", power: "657 HP", engine: "4.0L V8" }
            },
            {
                id: 5,
                brand: "Tesla",
                model: "Roadster 2.0",
                category: "electric",
                price: "$250,000",
                image: "https://images.unsplash.com/photo-1560958089-b8a1929cea89?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "1.9s", power: "1000+ HP", engine: "620 mi Range" }
            },
            {
                id: 6,
                brand: "Aston Martin",
                model: "DBS Superleggera",
                category: "sport",
                price: "$330,000",
                image: "https://images.unsplash.com/photo-1600712242805-5f786716a5e8?q=80&w=1000&auto=format&fit=crop",
                specs: { speed: "3.2s", power: "715 HP", engine: "5.2L V12" }
            }
        ];

        const grid = document.getElementById('car-grid');
        const filters = document.querySelectorAll('.filter-btn');

        // Render Function
        function renderCars(filter = 'all') {
            grid.innerHTML = '';
            const filteredCars = filter === 'all' ? cars : cars.filter(car => car.category === filter);

            filteredCars.forEach((car, index) => {
                const card = document.createElement('div');
                card.className = 'group relative rounded-xl bg-neutral-900 border border-white/5 overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:shadow-blue-900/10 opacity-0';
                card.style.animation = `fadeIn 0.5s ease-out forwards ${index * 0.1}s`;
                
                card.innerHTML = `
                    <div class="aspect-[16/10] overflow-hidden relative">
                        <div class="absolute inset-0 bg-neutral-800 animate-pulse"></div>
                        <img src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg" alt="${car.model}" class="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" loading="lazy">
                        <div class="absolute top-3 right-3 px-2.5 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] font-medium text-white uppercase tracking-wider">
                            ${car.category}
                        </div>
                    </div>
                    
                    <div class="p-5">
                        <div class="flex justify-between items-start mb-4">
                            <div>
                                <h3 class="text-lg font-medium text-white tracking-tight">${car.brand}</h3>
                                <p class="text-sm text-neutral-400">${car.model}</p>
                            </div>
                            <p class="text-sm font-light text-white bg-neutral-800 px-2 py-1 rounded">${car.price}</p>
                        </div>
                        
                        <div class="grid grid-cols-3 gap-2 py-4 border-t border-white/5">
                            <div class="flex flex-col items-center gap-1">
                                <span class="iconify text-neutral-500" data-icon="lucide:gauge" width="16"></span>
                                <span class="text-[10px] text-neutral-300">${car.specs.speed}</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 border-l border-white/5">
                                <span class="iconify text-neutral-500" data-icon="lucide:zap" width="16"></span>
                                <span class="text-[10px] text-neutral-300">${car.specs.power}</span>
                            </div>
                            <div class="flex flex-col items-center gap-1 border-l border-white/5">
                                <span class="iconify text-neutral-500" data-icon="lucide:fuel" width="16"></span>
                                <span class="text-[10px] text-neutral-300 truncate w-full text-center px-1">${car.specs.engine}</span>
                            </div>
                        </div>

                        <button onclick="openModal(${car.id})" class="w-full mt-2 py-2.5 border border-white/10 rounded text-xs font-medium text-white hover:bg-white hover:text-black transition-all flex items-center justify-center gap-2 group-btn">
                            View Configuration
                            <span class="iconify transition-transform duration-300 group-btn-hover:translate-x-1" data-icon="lucide:arrow-right" width="14"></span>
                        </button>
                    </div>
                `;
                grid.appendChild(card);
            });
        }

        // Filter Logic
        filters.forEach(btn => {
            btn.addEventListener('click', () => {
                filters.forEach(b => {
                    b.classList.remove('bg-neutral-800', 'text-white', 'shadow-sm');
                    b.classList.add('text-neutral-400');
                });
                btn.classList.remove('text-neutral-400');
                btn.classList.add('bg-neutral-800', 'text-white', 'shadow-sm');
                renderCars(btn.dataset.filter);
            });
        });

        // Modal Logic
        const modal = document.getElementById('modal');
        const modalContent = document.getElementById('modal-content');
        
        function openModal(id) {
            const car = cars.find(c => c.id === id);
            if(!car) return;

            document.getElementById('modal-img').src = car.image;
            document.getElementById('modal-category').innerText = car.brand;
            document.getElementById('modal-title').innerText = car.model;
            document.getElementById('modal-price').innerText = car.price;
            document.getElementById('modal-speed').innerText = car.specs.speed;
            document.getElementById('modal-power').innerText = car.specs.power;
            document.getElementById('modal-engine').innerText = car.specs.engine;

            modal.classList.remove('hidden');
            document.body.style.overflow = 'hidden';
            
            // Animation
            setTimeout(() => {
                modalContent.classList.remove('translate-x-full');
            }, 10);
        }

        function closeModal() {
            modalContent.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
                document.body.style.overflow = 'auto';
            }, 300); // Match duration
        }

        // Initial Render
        renderCars();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 glass transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 group" href="#">
<span className="bg-white text-black w-6 h-6 flex items-center justify-center text-xs font-bold rounded-sm group-hover:scale-110 transition-transform">A</span>
<span className="tracking-[0.2em] text-sm opacity-90 group-hover:opacity-100 transition-opacity">AETHER</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-light">
<a className="hover:text-white transition-colors" href="#inventory">Inventory</a>
<a className="hover:text-white transition-colors" href="#bespoke">Bespoke</a>
<a className="hover:text-white transition-colors" href="#services">Services</a>
</div>
<div className="flex items-center gap-4">
<button className="p-2 hover:bg-neutral-800 rounded-full transition-colors text-neutral-400 hover:text-white">
<span className="iconify" data-icon="lucide:search" data-strokeWidth="1.5"></span>
</button>
<button className="hidden md:block px-4 py-2 text-xs font-medium bg-white text-black rounded hover:bg-neutral-200 transition-colors">
                    Inquire
                </button>
<button className="md:hidden p-2 text-white">
<span className="iconify" data-icon="lucide:menu" data-strokeWidth="1.5"></span>
</button>
</div>
</div>
</nav>

<header className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 px-6 border-b border-white/5">
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-neutral-900/50 text-xs font-medium text-neutral-300">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse"></span>
                    New Arrival: 2024 GT Spirit
                </div>
<h1 className="text-5xl lg:text-7xl font-medium text-white tracking-tight leading-[1.1]">
                    Engineering <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-neutral-200 to-neutral-600">Perfection.</span>
</h1>
<p className="text-lg font-light max-w-md text-neutral-400 leading-relaxed">
                    Curated collection of the world's most exquisite automotive engineering. Performance meets luxury in absolute silence.
                </p>
<div className="flex flex-wrap gap-4 pt-4">
<a className="px-6 py-3 bg-white text-black text-sm font-medium rounded hover:bg-neutral-200 transition-all flex items-center gap-2" href="#inventory">
                        View Inventory
                        <span className="iconify" data-icon="lucide:arrow-down-right" data-strokeWidth="1.5"></span>
</a>
<button className="px-6 py-3 border border-white/10 text-white text-sm font-medium rounded hover:bg-white/5 transition-all">
                        Book Test Drive
                    </button>
</div>
</div>
<div className="relative group animate-fade-in">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-500/10 to-purple-500/10 blur-3xl rounded-full opacity-50"></div>
<img alt="Hero Car" className="relative w-full rounded-lg shadow-2xl shadow-black/50 border border-white/5 grayscale-[20%] group-hover:grayscale-0 transition-all duration-700 object-cover h-[400px] lg:h-[500px]" src="https://images.unsplash.com/photo-1617788138017-80ad40651399?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>

<div className="absolute -bottom-6 -left-6 bg-neutral-900/90 backdrop-blur-md border border-white/10 p-5 rounded-lg shadow-xl hidden lg:block">
<div className="flex items-center gap-6">
<div className="space-y-1">
<p className="text-xs text-neutral-500 uppercase tracking-wider">0-60 mph</p>
<p className="text-white font-medium">2.6s</p>
</div>
<div className="w-px h-8 bg-white/10"></div>
<div className="space-y-1">
<p className="text-xs text-neutral-500 uppercase tracking-wider">Top Speed</p>
<p className="text-white font-medium">211 mph</p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl mx-auto px-6 py-12" id="inventory">
<div className="flex flex-col md:flex-row md:items-center justify-between gap-6 mb-12">
<div>
<h2 className="text-2xl font-medium text-white tracking-tight">Current Inventory</h2>
<p className="text-sm text-neutral-500 mt-1">12 exclusive vehicles available</p>
</div>
<div className="flex flex-wrap items-center gap-2 bg-neutral-900/50 p-1 rounded-lg border border-white/5 w-fit">
<button className="filter-btn active px-4 py-1.5 text-xs font-medium rounded-md bg-neutral-800 text-white shadow-sm transition-all" data-filter="all">All</button>
<button className="filter-btn px-4 py-1.5 text-xs font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-filter="sport">Sport</button>
<button className="filter-btn px-4 py-1.5 text-xs font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-filter="electric">Electric</button>
<button className="filter-btn px-4 py-1.5 text-xs font-medium rounded-md text-neutral-400 hover:text-white hover:bg-white/5 transition-all" data-filter="suv">SUV</button>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="car-grid">

</div>
</section>

<div className="fixed inset-0 z-[60] hidden" id="modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeModal()"></div>

<div className="absolute inset-y-0 right-0 w-full lg:w-[600px] bg-neutral-950 border-l border-white/10 shadow-2xl transform transition-transform duration-500 translate-x-full flex flex-col" id="modal-content">

<button className="absolute top-6 right-6 z-10 p-2 bg-black/50 backdrop-blur rounded-full text-white border border-white/10 hover:bg-white hover:text-black transition-colors" onclick="closeModal()">
<span className="iconify" data-icon="lucide:x" data-strokeWidth="1.5"></span>
</button>

<div className="h-[40%] relative">
<img className="w-full h-full object-cover" id="modal-img" src=""/>
<div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-transparent to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-medium tracking-wider uppercase text-blue-400 mb-2 block" id="modal-category"></span>
<h3 className="text-3xl font-medium text-white tracking-tight" id="modal-title"></h3>
</div>
</div>

<div className="flex-1 overflow-y-auto p-8 space-y-8">
<div className="flex items-center justify-between pb-6 border-b border-white/5">
<div>
<p className="text-sm text-neutral-500">Price</p>
<p className="text-2xl text-white font-light" id="modal-price"></p>
</div>
<button className="px-6 py-2.5 bg-white text-black text-xs font-medium rounded hover:bg-neutral-200 transition-colors">
                        Reserve Now
                    </button>
</div>

<div className="grid grid-cols-3 gap-4">
<div className="p-4 rounded bg-neutral-900 border border-white/5 text-center">
<span className="iconify mx-auto mb-2 text-neutral-400" data-icon="lucide:gauge" width="20"></span>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide">0-60 MPH</p>
<p className="text-sm text-white font-medium mt-1" id="modal-speed"></p>
</div>
<div className="p-4 rounded bg-neutral-900 border border-white/5 text-center">
<span className="iconify mx-auto mb-2 text-neutral-400" data-icon="lucide:zap" width="20"></span>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide">Power</p>
<p className="text-sm text-white font-medium mt-1" id="modal-power"></p>
</div>
<div className="p-4 rounded bg-neutral-900 border border-white/5 text-center">
<span className="iconify mx-auto mb-2 text-neutral-400" data-icon="lucide:fuel" width="20"></span>
<p className="text-[10px] text-neutral-500 uppercase tracking-wide">Engine/Range</p>
<p className="text-sm text-white font-medium mt-1" id="modal-engine"></p>
</div>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-3">Vehicle Overview</h4>
<p className="text-sm leading-relaxed text-neutral-400">
                        This vehicle represents the pinnacle of automotive engineering. Finished in a bespoke exterior paint with a handcrafted interior. Features include advanced adaptive suspension, carbon ceramic brakes, and a premium surround sound system. Meticulously maintained and verified.
                    </p>
</div>

<div>
<h4 className="text-sm font-medium text-white mb-3">Key Features</h4>
<ul className="space-y-2">
<li className="flex items-center gap-3 text-sm text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" width="16"></span>
                            Carbon Fiber Trim Package
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" width="16"></span>
                            21" Forged Aluminum Wheels
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-400">
<span className="iconify text-green-500" data-icon="lucide:check-circle-2" width="16"></span>
                            Advanced Driver Assistance System
                        </li>
</ul>
</div>
</div>
</div>
</div>

<footer className="border-t border-white/5 bg-neutral-900/30 mt-20">
<div className="max-w-7xl mx-auto px-6 py-16">
<div className="grid md:grid-cols-4 gap-12">
<div className="col-span-1 md:col-span-2">
<a className="text-white font-medium tracking-tight text-lg flex items-center gap-2 mb-6" href="#">
<span className="bg-white text-black w-6 h-6 flex items-center justify-center text-xs font-bold rounded-sm">A</span>
<span className="tracking-[0.2em] text-sm">AETHER</span>
</a>
<p className="text-sm text-neutral-500 max-w-sm mb-6">
                        Redefining the digital showroom experience. We provide access to the world's most exclusive vehicles with transparent pricing and white-glove service.
                    </p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:instagram"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter"></span></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin"></span></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">About</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Press</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-neutral-300 transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-neutral-300 transition-colors" href="#">Cookie Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/5 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-600">
<p>© 2024 Aether Automotive. All rights reserved.</p>
<div className="flex items-center gap-2 mt-4 md:mt-0">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                    System Operational
                </div>
</div>
</div>
</footer>



    </>
  );
}
