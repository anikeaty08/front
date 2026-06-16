import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // --- DATA ---
        const servicesData = {
            'budget-mc': {
                title: "Budget MC Hosting",
                baseRate: "₹25 / GB",
                specs: [
                    { icon: 'cpu', text: 'Intel Xeon CPU' },
                    { icon: 'memory-stick', text: 'DDR4 RAM' },
                    { icon: 'hard-drive', text: 'NVMe SSD' },
                    { icon: 'shield', text: 'Advanced DDoS' }
                ],
                plans: [
                    { name: 'Wood', ram: '2 GB', storage: '10 GB', cpu: '75%', ports: '1', backups: '1', price: 50 },
                    { name: 'Stone', ram: '4 GB', storage: '20 GB', cpu: '100%', ports: '1', backups: '2', price: 99 },
                    { name: 'Iron', ram: '6 GB', storage: '30 GB', cpu: '180%', ports: 'Up to 2', backups: '2', price: 149 },
                    { name: 'Gold', ram: '8 GB', storage: '40 GB', cpu: '250%', ports: 'Up to 2', backups: '3', price: 199 },
                    { name: 'Diamond', ram: '12 GB', storage: '60 GB', cpu: '300%', ports: 'Up to 3', backups: '3', price: 285 },
                    { name: 'Emerald', ram: '16 GB', storage: '80 GB', cpu: '400%', ports: 'Up to 4', backups: '4', price: 372 },
                    { name: 'Netherite', ram: '24 GB', storage: '100 GB', cpu: '500%', ports: 'Up to 6', backups: '6', price: 540 },
                    { name: 'Titan', ram: '32 GB', storage: '150 GB', cpu: '650%', ports: 'Up to 8', backups: '8', price: 720 }
                ]
            },
            'powerful-mc': {
                title: "Powerful MC Hosting",
                baseRate: "₹35 / GB",
                specs: [
                    { icon: 'cpu', text: 'AMD EPYC 7B13' },
                    { icon: 'memory-stick', text: 'DDR4 RAM' },
                    { icon: 'hard-drive', text: 'NVMe SSD' },
                    { icon: 'zap', text: 'Extreme Perf' }
                ],
                plans: [
                    { name: 'Wood', ram: '2 GB', storage: '10 GB', cpu: '75%', ports: '1', backups: '1', price: 70 },
                    { name: 'Stone', ram: '4 GB', storage: '20 GB', cpu: '100%', ports: '1', backups: '2', price: 140 },
                    { name: 'Iron', ram: '6 GB', storage: '30 GB', cpu: '180%', ports: 'Up to 2', backups: '2', price: 210 },
                    { name: 'Gold', ram: '8 GB', storage: '40 GB', cpu: '250%', ports: 'Up to 2', backups: '3', price: 280 },
                    { name: 'Diamond', ram: '12 GB', storage: '60 GB', cpu: '300%', ports: 'Up to 3', backups: '3', price: 420 },
                    { name: 'Emerald', ram: '16 GB', storage: '80 GB', cpu: '400%', ports: 'Up to 4', backups: '4', price: 560 },
                    { name: 'Netherite', ram: '24 GB', storage: '100 GB', cpu: '500%', ports: 'Up to 6', backups: '6', price: 840 },
                    { name: 'Titan', ram: '32 GB', storage: '150 GB', cpu: '650%', ports: 'Up to 8', backups: '8', price: 1120 }
                ]
            },
            'budget-vps': {
                title: "Budget VPS",
                baseRate: "₹50 / GB",
                specs: [
                    { icon: 'cpu', text: 'Intel Xeon' },
                    { icon: 'terminal', text: 'Full Root Access' },
                    { icon: 'hard-drive', text: 'NVMe SSD' },
                    { icon: 'settings', text: 'Custom OS' }
                ],
                plans: [
                    { name: 'Starter', ram: '4 GB', storage: '60 GB', cpu: '2 vCores', price: 200 },
                    { name: 'Gold', ram: '8 GB', storage: '120 GB', cpu: '4 vCores', price: 400 },
                    { name: 'Diamond', ram: '16 GB', storage: '240 GB', cpu: '6 vCores', price: 800 },
                    { name: 'Emerald', ram: '32 GB', storage: '480 GB', cpu: '8 vCores', price: 1600 }
                ]
            },
            'powerful-vps': {
                title: "Powerful VPS",
                baseRate: "₹70 / GB",
                specs: [
                    { icon: 'cpu', text: 'AMD EPYC 7763' },
                    { icon: 'terminal', text: 'Full Root Access' },
                    { icon: 'hard-drive', text: 'NVMe SSD' },
                    { icon: 'zap', text: 'High Perf' }
                ],
                plans: [
                    { name: 'Starter', ram: '4 GB', storage: '80 GB', cpu: '2 vCores', price: 280 },
                    { name: 'Gold', ram: '8 GB', storage: '160 GB', cpu: '4 vCores', price: 560 },
                    { name: 'Diamond', ram: '12 GB', storage: '240 GB', cpu: '6 vCores', price: 840 },
                    { name: 'Emerald', ram: '16 GB', storage: '320 GB', cpu: '8 vCores', price: 1120 },
                    { name: 'Titan', ram: '24 GB', storage: '480 GB', cpu: '12 vCores', price: 1680 },
                    { name: 'Colossus', ram: '32 GB', storage: '640 GB', cpu: '16 vCores', price: 2240 }
                ]
            }
        };

        // --- STATE ---
        let cart = JSON.parse(localStorage.getItem('fastnodes_cart')) || [];
        let orders = JSON.parse(localStorage.getItem('fastnodes_orders')) || [];
        let currentOrder = null;

        // --- CORE FUNCTIONS ---
        function init() {
            lucide.createIcons();
            updateCartUI();
            
            // Check if admin login requested directly via hash, else home
            if(window.location.hash === '#admin') router('admin');

            // Handle Preloader
            window.addEventListener('load', () => {
                const preloader = document.getElementById('preloader');
                setTimeout(() => {
                    preloader.classList.add('loader-hide');
                    document.body.classList.remove('overflow-hidden');
                    // Completely remove after transition
                    setTimeout(() => preloader.style.display = 'none', 800);
                }, 2200); // 2.2s artificial loading time
            });
        }

        function router(pageId) {
            // Hide all pages
            document.querySelectorAll('main > section').forEach(el => el.classList.add('hidden-page'));
            
            // Logic for specific pages
            if(pageId === 'admin-login') {
                pageId = 'admin'; // For demo simplicity, skip login screen
                renderAdmin();
            } else if (pageId === 'cart') {
                renderCart();
            }

            // Show target
            document.getElementById(pageId).classList.remove('hidden-page');
            
            // Sticky bar logic
            const sticky = document.getElementById('sticky-checkout');
            if(pageId === 'services' || pageId === 'plans-view' || pageId === 'cart') {
                if(cart.length > 0) sticky.classList.remove('hidden');
                else sticky.classList.add('hidden');
            } else {
                sticky.classList.add('hidden');
            }

            window.scrollTo(0,0);
        }

        // --- NEW FILTERING FUNCTION ---
        function filterServices(type) {
            router('services');
            
            const mcCards = ['card-mc-budget', 'card-mc-powerful'];
            const vpsCards = ['card-vps-budget', 'card-vps-powerful'];
            const allCards = [...mcCards, ...vpsCards];
            const title = document.getElementById('services-title');

            if (type === 'all') {
                allCards.forEach(id => document.getElementById(id).classList.remove('hidden'));
                title.innerText = "Our Services";
            } else if (type === 'mc') {
                mcCards.forEach(id => document.getElementById(id).classList.remove('hidden'));
                vpsCards.forEach(id => document.getElementById(id).classList.add('hidden'));
                title.innerText = "Minecraft Hosting";
            } else if (type === 'vps') {
                mcCards.forEach(id => document.getElementById(id).classList.add('hidden'));
                vpsCards.forEach(id => document.getElementById(id).classList.remove('hidden'));
                title.innerText = "VPS Hosting";
            }
        }

        // --- SERVICES & PLANS ---
        function loadPlans(serviceKey) {
            const service = servicesData[serviceKey];
            const view = document.getElementById('plans-view');
            
            // Header
            document.getElementById('plans-header').innerHTML = `
                <h2 class="text-3xl font-semibold text-white tracking-tight">${service.title}</h2>
                <p class="text-blue-400 text-sm font-medium mt-1">Base Rate: ${service.baseRate}</p>
            `;

            // Specs
            const specsContainer = document.getElementById('plans-specs');
            specsContainer.innerHTML = service.specs.map(s => `
                <div class="flex items-center gap-2 bg-[#0a0a0a] p-3 rounded-lg border border-white/5">
                    <i data-lucide="${s.icon}" class="w-4 h-4 text-blue-500"></i>
                    <span>${s.text}</span>
                </div>
            `).join('');

            // Grid
            const grid = document.getElementById('plans-grid');
            grid.innerHTML = service.plans.map(plan => `
                <div class="bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 flex flex-col relative overflow-hidden group hover:border-blue-500/30 transition-all">
                    <div class="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
                        <i data-lucide="server" class="w-24 h-24 text-blue-500"></i>
                    </div>
                    <h3 class="text-xl font-bold text-white mb-1">${plan.name}</h3>
                    <div class="text-2xl font-bold text-blue-400 mb-6">₹${plan.price}<span class="text-sm text-neutral-500 font-normal">/mo</span></div>
                    
                    <ul class="space-y-3 mb-8 flex-grow text-sm text-neutral-400">
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> ${plan.ram} RAM</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> ${plan.storage} Storage</li>
                        <li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> ${plan.cpu} CPU</li>
                        ${plan.ports ? `<li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> ${plan.ports} Ports</li>` : ''}
                        ${plan.backups ? `<li class="flex items-center gap-2"><i data-lucide="check" class="w-4 h-4 text-blue-500"></i> ${plan.backups} Backups</li>` : ''}
                    </ul>

                    <button onclick="addToCart('${serviceKey}', '${plan.name}', ${plan.price}, '${plan.ram} / ${plan.cpu}')" class="w-full bg-white text-black hover:bg-blue-400 font-semibold py-3 rounded-lg transition-colors flex justify-center items-center gap-2">
                        Add to Cart
                    </button>
                </div>
            `).join('');

            router('plans-view');
            lucide.createIcons();
        }

        // --- CART SYSTEM ---
        function addToCart(serviceId, planName, price, specs) {
            cart.push({
                id: Date.now(),
                serviceId,
                planName,
                price,
                specs
            });
            saveCart();
            updateCartUI();
            
            // Animation feedback
            const btn = event.target;
            const originalText = btn.innerHTML;
            btn.innerHTML = `<i data-lucide="check" class="w-4 h-4"></i> Added`;
            btn.classList.add('bg-blue-500');
            lucide.createIcons();
            setTimeout(() => {
                btn.innerHTML = originalText;
                btn.classList.remove('bg-blue-500');
            }, 1500);
        }

        function removeFromCart(id) {
            cart = cart.filter(item => item.id !== id);
            saveCart();
            renderCart();
            updateCartUI();
        }

        function saveCart() {
            localStorage.setItem('fastnodes_cart', JSON.stringify(cart));
        }

        function updateCartUI() {
            const badge = document.getElementById('cart-badge');
            const total = cart.reduce((acc, item) => acc + item.price, 0);
            
            badge.innerText = cart.length;
            badge.style.opacity = cart.length > 0 ? '1' : '0';

            document.getElementById('sticky-total').innerText = '₹' + total;
            
            if(cart.length > 0) document.getElementById('sticky-checkout').classList.remove('hidden');
            else document.getElementById('sticky-checkout').classList.add('hidden');
        }

        function renderCart() {
            const container = document.getElementById('cart-items');
            const totalEl = document.getElementById('cart-total');
            const emptyEl = document.getElementById('cart-empty');
            const contentEl = document.getElementById('cart-content');

            if(cart.length === 0) {
                emptyEl.classList.remove('hidden');
                contentEl.classList.add('hidden');
                return;
            }

            emptyEl.classList.add('hidden');
            contentEl.classList.remove('hidden');

            let total = 0;
            container.innerHTML = cart.map(item => {
                total += item.price;
                const serviceTitle = servicesData[item.serviceId].title;
                return `
                    <div class="flex justify-between items-center bg-[#0a0a0a] border border-white/5 p-4 rounded-xl">
                        <div>
                            <div class="text-xs text-blue-400 mb-1">${serviceTitle}</div>
                            <h4 class="font-semibold text-white">${item.planName} Plan</h4>
                            <p class="text-xs text-neutral-500">${item.specs}</p>
                        </div>
                        <div class="text-right">
                            <div class="text-white font-bold mb-2">₹${item.price}</div>
                            <button onclick="removeFromCart(${item.id})" class="text-xs text-red-400 hover:text-red-300">Remove</button>
                        </div>
                    </div>
                `;
            }).join('');

            totalEl.innerText = '₹' + total;
        }

        // --- CHECKOUT & PAYMENT ---
        function handleCheckoutSubmit(e) {
            e.preventDefault();
            const total = cart.reduce((acc, item) => acc + item.price, 0);
            
            currentOrder = {
                id: 'ORD-' + Math.floor(Math.random() * 10000),
                customer: {
                    name: document.getElementById('cust-name').value,
                    email: document.getElementById('cust-email').value,
                    phone: document.getElementById('cust-phone').value,
                    discord: document.getElementById('cust-discord').value,
                    notes: document.getElementById('cust-notes').value
                },
                items: [...cart],
                total: total,
                date: new Date().toLocaleString(),
                status: 'Pending Payment'
            };

            document.getElementById('payment-amount').innerText = '₹' + total;
            router('payment');
        }

        function handlePaymentSubmit(e) {
            e.preventDefault();
            
            const tid = document.getElementById('pay-tid').value;
            const fileInput = document.getElementById('pay-file');
            const fileName = fileInput.files.length > 0 ? fileInput.files[0].name : 'No file';

            currentOrder.payment = {
                tid: tid,
                screenshot: fileName
            };
            currentOrder.status = 'Pending';
            
            // Save to "Server" (Local Storage)
            orders.unshift(currentOrder);
            localStorage.setItem('fastnodes_orders', JSON.stringify(orders));

            // Clear cart
            cart = [];
            saveCart();
            updateCartUI();

            router('pending');
        }

        // --- ADMIN ---
        function renderAdmin() {
            const list = document.getElementById('admin-orders-list');
            const noOrders = document.getElementById('no-orders');

            if(orders.length === 0) {
                list.innerHTML = '';
                noOrders.classList.remove('hidden');
                return;
            }
            noOrders.classList.add('hidden');

            list.innerHTML = orders.map(order => `
                <tr class="hover:bg-white/5 transition-colors">
                    <td class="p-4 whitespace-nowrap text-xs text-neutral-500">${order.date}</td>
                    <td class="p-4">
                        <div class="font-medium text-white">${order.customer.name}</div>
                        <div class="text-xs">${order.customer.discord}</div>
                    </td>
                    <td class="p-4">
                        <div class="text-white">₹${order.total}</div>
                        <div class="text-xs">${order.items.length} Items</div>
                    </td>
                    <td class="p-4">
                        <div class="text-xs">TID: ${order.payment ? order.payment.tid : 'N/A'}</div>
                        <div class="text-xs text-blue-500">${order.payment ? order.payment.screenshot : ''}</div>
                    </td>
                    <td class="p-4">
                        <span class="px-2 py-1 rounded text-[10px] font-bold uppercase ${order.status === 'Approved' ? 'bg-blue-500/20 text-blue-400' : (order.status === 'Rejected' ? 'bg-red-500/20 text-red-400' : 'bg-yellow-500/20 text-yellow-400')}">
                            ${order.status}
                        </span>
                    </td>
                    <td class="p-4 text-right">
                        ${order.status === 'Pending' ? `
                            <div class="flex gap-2 justify-end">
                                <button onclick="updateOrderStatus('${order.id}', 'Approved')" class="p-1.5 rounded bg-blue-500/10 text-blue-400 hover:bg-blue-500 hover:text-black transition-colors"><i data-lucide="check" class="w-4 h-4"></i></button>
                                <button onclick="updateOrderStatus('${order.id}', 'Rejected')" class="p-1.5 rounded bg-red-500/10 text-red-400 hover:bg-red-500 hover:text-white transition-colors"><i data-lucide="x" class="w-4 h-4"></i></button>
                            </div>
                        ` : ''}
                    </td>
                </tr>
            `).join('');
            lucide.createIcons();
        }

        function updateOrderStatus(orderId, status) {
            orders = orders.map(o => o.id === orderId ? {...o, status: status} : o);
            localStorage.setItem('fastnodes_orders', JSON.stringify(orders));
            renderAdmin();
        }

        // Init
        init();

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] bg-[#020202] flex flex-col items-center justify-center" id="preloader">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(59,130,246,0.08)_0%,transparent_50%)]"></div>
<div className="relative z-10 flex flex-col items-center text-center space-y-4">

<div className="relative">
<div className="absolute inset-0 bg-blue-500/20 blur-xl rounded-full"></div>
<i className="relative w-12 h-12 text-blue-500 animate-pulse" data-lucide="cloud"></i>
</div>

<h1 className="text-xl font-bold text-blue-500 tracking-tight">FAST NODES</h1>

<div className="flex flex-col items-center gap-3">
<p className="text-[10px] text-neutral-500 font-medium tracking-widest uppercase">Initializing...</p>

<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '0ms'}}></div>
<div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '150ms'}}></div>
<div className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-bounce" style={{animationDelay: '300ms'}}></div>
</div>
</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5">
<div className="max-w-6xl mx-auto px-4 h-16 flex items-center justify-between">
<button className="flex items-center gap-2 group" onclick="router('home')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-600 to-indigo-600 flex items-center justify-center text-white shadow-lg shadow-blue-500/20 group-hover:shadow-blue-500/40 transition-all duration-300">
<i className="w-4 h-4 text-white" data-lucide="cloud"></i>
</div>
<span className="text-white font-semibold tracking-tight text-lg group-hover:text-blue-400 transition-colors">FAST NODES</span>
</button>
<div className="flex items-center gap-4 md:gap-6">
<div className="hidden md:flex gap-6 text-sm font-medium text-neutral-400">
<button className="hover:text-white transition-colors" onclick="router('home')">Home</button>

<button className="hover:text-white transition-colors" onclick="filterServices('all')">Services</button>
<button className="hover:text-white transition-colors" onclick="router('admin-login')">Admin</button>
</div>
<button className="relative p-2 hover:bg-white/5 rounded-full transition-colors group" onclick="router('cart')">
<i className="w-5 h-5 text-neutral-400 group-hover:text-blue-400 transition-colors" data-lucide="shopping-cart"></i>
<span className="absolute top-0 right-0 w-4 h-4 bg-blue-500 text-black text-[10px] font-bold rounded-full flex items-center justify-center opacity-0 transition-opacity" id="cart-badge">0</span>
</button>
</div>
</div>
</nav>

<main className="pt-24 pb-20 px-4 max-w-6xl mx-auto w-full flex-grow flex flex-col justify-center" id="app">

<section className="fade-in flex flex-col items-center text-center py-12 md:py-24 space-y-10" id="home">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/5 border border-white/10 text-neutral-400 text-xs font-medium hover:bg-white/10 transition-colors cursor-default">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="cloud"></i>
                Premium Cloud Infrastructure
            </div>

<h1 className="text-5xl md:text-7xl font-bold tracking-tight leading-[1.1] max-w-4xl mx-auto">
<span className="text-blue-500 text-glow block md:inline">High-Performance</span>
<span className="text-blue-500 text-glow">Game &amp; Cloud Hosting</span>
</h1>

<p className="text-neutral-500 text-base md:text-lg max-w-xl mx-auto leading-relaxed">
                Optimized for low latency, high stability, and real performance.
            </p>

<div className="flex flex-wrap justify-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F0F0F] border border-white/5 text-xs text-neutral-400">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="server"></i>
                    Enterprise Hardware
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F0F0F] border border-white/5 text-xs text-neutral-400">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="zap"></i>
                    Instant Setup
                </div>
<div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-[#0F0F0F] border border-white/5 text-xs text-neutral-400">
<i className="w-3.5 h-3.5 text-blue-500" data-lucide="shield-check"></i>
                    DDoS Protected
                </div>
</div>

<div className="flex flex-col md:flex-row items-center gap-4 pt-4 w-full md:w-auto">

<button className="w-full md:w-auto bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-all btn-glow" onclick="filterServices('mc')">
                    View Minecraft Hosting
                </button>

<button className="w-full md:w-auto bg-[#0a0a0a] hover:bg-[#111] border border-white/10 text-white px-8 py-3.5 rounded-lg font-semibold text-sm transition-colors" onclick="filterServices('vps')">
                    View VPS Hosting
                </button>
</div>
</section>

<section className="hidden-page fade-in" id="services">
<div className="text-center mb-10 space-y-2">
<h2 className="text-3xl font-semibold tracking-tight text-white" id="services-title">Our Services</h2>
<p className="text-neutral-400 text-sm">Choose the perfect plan for your community.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all" id="card-mc-budget">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#111] flex items-center justify-center mb-4 text-blue-400">
<i className="w-6 h-6" data-lucide="box"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Budget MC Hosting</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Perfect for friends and small communities. Intel Xeon power.</p>
<button className="w-full py-2.5 rounded-lg bg-[#111] text-white text-sm font-medium hover:bg-blue-600 transition-colors" onclick="loadPlans('budget-mc')">View Plans</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all" id="card-mc-powerful">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#111] flex items-center justify-center mb-4 text-blue-400">
<i className="w-6 h-6" data-lucide="cpu"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Powerful MC Hosting</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Extreme performance with AMD EPYC 7B13 for large servers.</p>
<button className="w-full py-2.5 rounded-lg bg-[#111] text-white text-sm font-medium hover:bg-blue-600 transition-colors" onclick="loadPlans('powerful-mc')">View Plans</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all" id="card-vps-budget">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#111] flex items-center justify-center mb-4 text-blue-400">
<i className="w-6 h-6" data-lucide="server"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Budget VPS</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">Cost-effective virtual servers with full root access.</p>
<button className="w-full py-2.5 rounded-lg bg-[#111] text-white text-sm font-medium hover:bg-blue-600 transition-colors" onclick="loadPlans('budget-vps')">View Plans</button>
</div>
</div>

<div className="group relative bg-[#0a0a0a] border border-white/5 rounded-2xl p-6 hover:border-blue-500/30 transition-all" id="card-vps-powerful">
<div className="absolute inset-0 bg-gradient-to-b from-blue-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-2xl"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-[#111] flex items-center justify-center mb-4 text-blue-400">
<i className="w-6 h-6" data-lucide="cloud-lightning"></i>
</div>
<h3 className="text-xl font-semibold text-white tracking-tight mb-2">Powerful VPS</h3>
<p className="text-neutral-400 text-sm mb-6 leading-relaxed">AMD EPYC 7763 powered VPS for maximum workload handling.</p>
<button className="w-full py-2.5 rounded-lg bg-[#111] text-white text-sm font-medium hover:bg-blue-600 transition-colors" onclick="loadPlans('powerful-vps')">View Plans</button>
</div>
</div>
</div>
</section>

<section className="hidden-page fade-in" id="plans-view">
<button className="mb-6 flex items-center gap-2 text-sm text-neutral-400 hover:text-white transition-colors" onclick="filterServices('all')">
<i className="w-4 h-4" data-lucide="arrow-left"></i> Back to Services
            </button>
<div className="mb-8 border-b border-white/5 pb-6" id="plans-header">

</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10 text-xs md:text-sm text-neutral-400" id="plans-specs">

</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="plans-grid">

</div>
</section>

<section className="hidden-page fade-in max-w-2xl mx-auto" id="cart">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-6">Your Cart</h2>
<div className="hidden flex flex-col items-center justify-center py-20 text-neutral-500" id="cart-empty">
<i className="w-12 h-12 mb-4 opacity-50" data-lucide="shopping-cart"></i>
<p>Your cart is empty.</p>
<button className="mt-4 text-blue-400 text-sm hover:underline" onclick="filterServices('all')">Browse Services</button>
</div>
<div className="space-y-4" id="cart-content">

<div className="space-y-3" id="cart-items"></div>

<div className="mt-8 p-6 bg-[#0a0a0a] border border-white/5 rounded-2xl">
<div className="flex justify-between items-center text-lg font-semibold text-white">
<span>Total</span>
<span id="cart-total">₹0</span>
</div>
<button className="mt-6 w-full bg-blue-500 hover:bg-blue-600 text-black font-semibold py-3 rounded-lg transition-colors" onclick="router('checkout')">
                        Proceed to Checkout
                    </button>
</div>
</div>
</section>

<section className="hidden-page fade-in max-w-xl mx-auto" id="checkout">
<div className="flex items-center gap-3 mb-8">
<button className="p-1 rounded-md hover:bg-[#111] text-neutral-400" onclick="router('cart')"><i className="w-5 h-5" data-lucide="arrow-left"></i></button>
<h2 className="text-2xl font-semibold text-white tracking-tight">Checkout</h2>
</div>
<form className="space-y-5" id="checkout-form" onsubmit="handleCheckoutSubmit(event)">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Full Name</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm" id="cust-name" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm" id="cust-email" required="" type="email"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Phone</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm" id="cust-phone" required="" type="tel"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Discord User</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm" id="cust-discord" placeholder="user#0000" required="" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Service Notes</label>
<textarea className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 transition-colors text-sm" id="cust-notes" rows="2"></textarea>
</div>
</div>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3.5 rounded-lg transition-colors mt-6 shadow-lg shadow-blue-500/20" type="submit">
                    Submit Order &amp; Pay
                </button>
</form>
</section>

<section className="hidden-page fade-in max-w-md mx-auto text-center" id="payment">
<h2 className="text-xl font-semibold text-white tracking-tight mb-2">Complete Payment</h2>
<p className="text-sm text-neutral-400 mb-6">Scan the QR code to pay <span className="text-blue-400 font-bold" id="payment-amount"></span></p>
<div className="bg-white p-4 rounded-xl inline-block mb-6 shadow-xl">

<div className="w-48 h-48 bg-[#0a0a0a] flex items-center justify-center rounded border border-neutral-200">
<div className="grid grid-cols-2 gap-1 text-xs text-neutral-500">
<i className="w-20 h-20 text-black" data-lucide="qr-code"></i>
</div>
</div>
<p className="text-black text-xs font-bold mt-2 tracking-widest">FAST NODES UPI</p>
</div>
<form className="text-left space-y-4" onsubmit="handlePaymentSubmit(event)">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Transaction ID (UTR)</label>
<input className="w-full bg-[#0a0a0a] border border-white/10 rounded-lg px-4 py-2.5 text-white focus:outline-none focus:border-blue-500/50 text-sm" id="pay-tid" required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 uppercase tracking-wide">Upload Screenshot</label>
<div className="relative">
<input className="w-full text-sm text-neutral-400 file:mr-4 file:py-2 file:px-4 file:rounded-full file:border-0 file:text-xs file:font-semibold file:bg-[#111] file:text-blue-400 hover:file:bg-[#1a1a1a] cursor-pointer" id="pay-file" required="" type="file"/>
</div>
</div>
<button className="w-full bg-blue-500 hover:bg-blue-600 text-white font-semibold py-3 rounded-lg transition-colors mt-4" type="submit">
                    Verify Payment
                </button>
</form>
</section>

<section className="hidden-page fade-in max-w-md mx-auto text-center py-10" id="pending">
<div className="w-20 h-20 bg-yellow-500/10 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-10 h-10 text-yellow-500" data-lucide="clock"></i>
</div>
<h2 className="text-2xl font-semibold text-white tracking-tight mb-2">Request Pending Approval</h2>
<div className="inline-block px-3 py-1 rounded-full bg-yellow-500/20 text-yellow-400 text-xs font-bold uppercase tracking-wide mb-6">
                🟡 Pending
            </div>
<p className="text-neutral-300 text-sm leading-relaxed mb-6">
                Thank you for choosing FAST NODES.<br/>Your payment is being verified by our billing team.
            </p>
<div className="bg-[#0a0a0a] border border-white/5 p-4 rounded-xl mb-8">
<p className="text-xs text-neutral-400">
                    A confirmation email has been sent from <strong>FAST NODES Billing</strong>. Check your invoice for details.
                </p>
</div>
<a className="inline-flex items-center gap-2 bg-[#5865F2] hover:bg-[#4752c4] text-white font-semibold px-6 py-3 rounded-lg transition-colors text-sm" href="#">
<i data-lucide="message-circle"></i> Join Discord Support
            </a>
<div className="mt-6">
<button className="text-neutral-500 text-xs hover:text-white" onclick="router('home')">Return Home</button>
</div>
</section>

<section className="hidden-page fade-in" id="admin">
<div className="flex justify-between items-center mb-8">
<h2 className="text-2xl font-semibold text-white tracking-tight">FAST NODES Admin</h2>
<button className="text-xs text-neutral-400 hover:text-white" onclick="router('home')">Logout</button>
</div>
<div className="overflow-x-auto rounded-xl border border-white/5">
<table className="w-full text-left text-sm text-neutral-400">
<thead className="bg-[#0a0a0a] text-white uppercase text-xs tracking-wider">
<tr>
<th className="p-4">Date</th>
<th className="p-4">User</th>
<th className="p-4">Plan &amp; Amount</th>
<th className="p-4">Payment</th>
<th className="p-4">Status</th>
<th className="p-4 text-right">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-white/5 bg-[#0a0a0a]/30" id="admin-orders-list">

</tbody>
</table>
</div>
<p className="text-center py-10 text-neutral-500 hidden" id="no-orders">No orders found.</p>
</section>
</main>

<div className="md:hidden fixed bottom-0 left-0 w-full glass border-t border-white/10 p-4 z-40 hidden flex items-center justify-between" id="sticky-checkout">
<div className="flex flex-col">
<span className="text-xs text-neutral-400">Total</span>
<span className="text-lg font-bold text-white" id="sticky-total">₹0</span>
</div>
<button className="bg-blue-500 text-black px-6 py-2 rounded-lg font-semibold text-sm" onclick="router('checkout')">
            Checkout
        </button>
</div>

<footer className="border-t border-white/5 py-10 bg-black mt-auto">
<div className="max-w-6xl mx-auto px-4 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="text-center md:text-left">
<span className="text-lg font-bold text-white tracking-tight">FAST NODES</span>
<p className="text-xs text-neutral-500 mt-1">High Performance Game &amp; Cloud Hosting<br/>© 2023 FAST NODES All Rights Reserved</p>
</div>
<div className="flex gap-6 text-sm text-neutral-400">
<a className="hover:text-blue-400 transition-colors" href="#">Discord</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
</div>
</div>
</footer>



    </>
  );
}
