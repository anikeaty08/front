import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Expanded Data
        const courses = [
            { id: 1, title: "Food Safety Level 2", price: 49, category: "Food Safety", duration: "4h 30m", icon: "shield-check", color: "green", desc: "Mandatory hygiene training for all food handlers covering HACCP principles." },
            { id: 2, title: "Alcohol Service Permit", price: 39, category: "Alcohol Service", duration: "3h 00m", icon: "wine", color: "purple", desc: "Legal requirements for serving alcohol responsibly and checking IDs." },
            { id: 3, title: "Knife Skills 101", price: 29, category: "Kitchen Ops", duration: "2h 15m", icon: "utensils", color: "blue", desc: "Improve efficiency and reduce waste with proper cutting techniques." },
            { id: 4, title: "Allergen Awareness", price: 35, category: "Food Safety", duration: "1h 45m", icon: "alert-circle", color: "red", desc: "Identifying and managing critical food allergens and cross-contamination." },
            { id: 5, title: "Kitchen Management", price: 89, category: "Kitchen Ops", duration: "6h 00m", icon: "clipboard-list", color: "slate", desc: "Scheduling, inventory, cost control, and leadership basics." },
            { id: 6, title: "Fire Safety & Emergency", price: 25, category: "HR & Compliance", duration: "1h 00m", icon: "flame", color: "orange", desc: "Emergency protocols, extinguisher usage, and evacuation plans." },
            { id: 7, title: "Sexual Harassment Prevention", price: 29, category: "HR & Compliance", duration: "1h 30m", icon: "users", color: "indigo", desc: "Creating a safe and respectful workplace environment for all staff." },
            { id: 8, title: "OSHA Heat Illness Prevention", price: 19, category: "HR & Compliance", duration: "45m", icon: "thermometer-sun", color: "amber", desc: "Recognizing and preventing heat stress in hot kitchen environments." },
            { id: 9, title: "Advanced Pastry Techniques", price: 59, category: "Kitchen Ops", duration: "3h 45m", icon: "croissant", color: "pink", desc: "Mastering doughs, tempering chocolate, and plating desserts." },
            { id: 10, title: "Customer Service Excellence", price: 29, category: "Kitchen Ops", duration: "2h 00m", icon: "smile", color: "cyan", desc: "Front of house training for conflict resolution and guest satisfaction." },
            { id: 11, title: "Inventory Management", price: 49, category: "Kitchen Ops", duration: "2h 30m", icon: "package-check", color: "teal", desc: "Reducing food cost through proper stock rotation and auditing." },
            { id: 12, title: "Sustainable Kitchen Practices", price: 25, category: "Kitchen Ops", duration: "1h 15m", icon: "leaf", color: "emerald", desc: "Minimizing waste and energy consumption in commercial kitchens." },
        ];

        // State
        let cart = []; // Array of course IDs

        // Router
        function router(pageId) {
            // Hide all views
            document.querySelectorAll('.page-view').forEach(el => {
                el.classList.add('hidden');
            });
            
            // Show target view
            const target = document.getElementById(`view-${pageId}`);
            if (target) {
                target.classList.remove('hidden');
                window.scrollTo(0, 0);
            }

            // Update checkout if needed
            if (pageId === 'checkout') {
                renderCheckout();
            }
        }

        // Cart Logic
        function toggleCart(courseId) {
            const index = cart.indexOf(courseId);
            if (index > -1) {
                cart.splice(index, 1);
            } else {
                cart.push(courseId);
            }
            updateUI();
        }

        function updateUI() {
            // Update Badge
            const badge = document.getElementById('cart-badge');
            badge.innerText = cart.length;
            badge.style.opacity = cart.length > 0 ? '1' : '0';

            // Update Course Buttons in Grid
            courses.forEach(course => {
                const btn = document.getElementById(`btn-add-${course.id}`);
                if (btn) {
                    const isInCart = cart.includes(course.id);
                    if (isInCart) {
                        btn.innerHTML = `<span class="iconify" data-icon="lucide:check" data-width="16"></span> Added`;
                        btn.classList.remove('bg-slate-900', 'text-white');
                        btn.classList.add('bg-green-100', 'text-green-700', 'border', 'border-green-200');
                    } else {
                        btn.innerHTML = `<span class="iconify" data-icon="lucide:plus" data-width="16"></span> Add`;
                        btn.classList.add('bg-slate-900', 'text-white');
                        btn.classList.remove('bg-green-100', 'text-green-700', 'border', 'border-green-200');
                    }
                }
            });
        }

        function renderCourses() {
            const grid = document.getElementById('course-grid');
            grid.innerHTML = courses.map(course => `
                <div class="group relative bg-white rounded-2xl p-6 border border-slate-200 hover:border-orange-200 hover:shadow-lg hover:shadow-orange-500/5 transition-all duration-300 flex flex-col h-full">
                    <div class="flex items-start justify-between mb-6">
                        <div class="w-10 h-10 bg-${course.color}-50 text-${course.color}-600 rounded-lg flex items-center justify-center">
                            <span class="iconify" data-icon="lucide:${course.icon}" data-width="20" data-stroke-width="1.5"></span>
                        </div>
                        <span class="text-xs font-medium px-2 py-1 rounded-full bg-slate-50 border border-slate-100 text-slate-600">${course.category}</span>
                    </div>
                    
                    <h3 class="text-lg font-semibold text-slate-900 mb-2 group-hover:text-orange-600 transition-colors">${course.title}</h3>
                    <p class="text-sm text-slate-500 mb-6 flex-grow leading-relaxed">${course.desc}</p>
                    
                    <div class="flex items-center gap-4 text-xs font-medium text-slate-400 mb-6 pt-4 border-t border-slate-50">
                        <span class="flex items-center gap-1">
                            <span class="iconify" data-icon="lucide:clock" data-width="14"></span> ${course.duration}
                        </span>
                        <span class="flex items-center gap-1">
                            <span class="iconify" data-icon="lucide:award" data-width="14"></span> Certified
                        </span>
                    </div>

                    <div class="flex items-center justify-between">
                        <span class="text-lg font-semibold text-slate-900">$${course.price}<span class="text-xs font-normal text-slate-500">/seat</span></span>
                        <button id="btn-add-${course.id}" onclick="toggleCart(${course.id})" class="bg-slate-900 text-white text-xs font-medium px-4 py-2 rounded-lg hover:bg-slate-800 transition-all flex items-center gap-2">
                            <span class="iconify" data-icon="lucide:plus" data-width="16"></span> Add
                        </button>
                    </div>
                </div>
            `).join('');
            updateUI();
        }

        function renderCheckout() {
            const emptyState = document.getElementById('cart-empty');
            const cartContent = document.getElementById('cart-content');
            const itemsContainer = document.getElementById('cart-items-container');
            
            if (cart.length === 0) {
                emptyState.classList.remove('hidden');
                cartContent.classList.add('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            cartContent.classList.remove('hidden');
            cartContent.classList.add('grid');

            let total = 0;
            itemsContainer.innerHTML = cart.map(id => {
                const item = courses.find(c => c.id === id);
                total += item.price;
                return `
                    <div class="p-6 flex items-center gap-4 group hover:bg-slate-50 transition-colors">
                        <div class="w-12 h-12 bg-white rounded-lg border border-slate-200 flex items-center justify-center flex-shrink-0">
                            <span class="iconify text-${item.color}-500" data-icon="lucide:${item.icon}" data-width="20"></span>
                        </div>
                        <div class="flex-grow">
                            <div class="text-sm font-medium text-slate-900">${item.title}</div>
                            <div class="text-xs text-slate-500 mt-0.5">License valid for 12 months</div>
                        </div>
                        <div class="text-right mr-2">
                            <div class="text-sm font-medium text-slate-900">$${item.price}.00</div>
                        </div>
                        <button onclick="toggleCart(${item.id}); renderCheckout()" class="text-slate-300 hover:text-red-500 transition-colors p-1">
                            <span class="iconify" data-icon="lucide:x" data-width="16"></span>
                        </button>
                    </div>
                `;
            }).join('');

            const formattedTotal = `$${total.toFixed(2)}`;
            document.getElementById('cart-subtotal').innerText = formattedTotal;
            document.getElementById('cart-total-display').innerText = formattedTotal;
            document.getElementById('pay-button-total').innerText = formattedTotal;
        }

        // Init
        document.addEventListener('DOMContentLoaded', () => {
            renderCourses();
            router('home'); // Start on home
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-slate-200/80 bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="router('home')">
<div className="w-8 h-8 bg-gradient-to-tr from-orange-500 to-amber-500 rounded-lg flex items-center justify-center text-white shadow-sm group-hover:shadow-md transition-all duration-300">
<span className="iconify" data-icon="lucide:chef-hat" data-strokeWidth="1.5" data-width="18"></span>
</div>
<span className="text-lg font-bold tracking-tight text-slate-900">SERVESAFE</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<button className="hover:text-slate-900 transition-colors nav-link" onclick="router('home')">Product</button>
<button className="hover:text-slate-900 transition-colors nav-link" onclick="router('courses')">Catalog</button>
<button className="hover:text-slate-900 transition-colors nav-link" onclick="router('enterprise')">Enterprise</button>
<button className="hover:text-slate-900 transition-colors nav-link" onclick="router('about')">Company</button>
</div>
<div className="flex items-center gap-4">
<button className="relative p-2 text-slate-400 hover:text-slate-900 transition-colors group" onclick="router('checkout')">
<span className="iconify" data-icon="lucide:shopping-bag" data-width="20"></span>
<span className="absolute top-1 right-0 w-4 h-4 bg-orange-600 text-white text-[10px] font-bold rounded-full flex items-center justify-center opacity-0 transition-opacity duration-300" id="cart-badge">0</span>
</button>
<div className="h-6 w-px bg-slate-200 hidden sm:block"></div>
<button className="hidden sm:block text-sm font-medium text-slate-600 hover:text-slate-900 transition-colors">Log in</button>
<button className="bg-slate-900 hover:bg-slate-800 text-white text-xs font-semibold px-4 py-2 rounded-lg shadow-sm transition-all flex items-center gap-2" onclick="router('courses')">
                    Get Started
                </button>
</div>
</div>
</nav>

<div className="pt-16 flex-grow" id="app-container">

<section className="page-view fade-enter" id="view-home">

<div className="pt-24 pb-20 md:pt-32 md:pb-24 px-6 relative overflow-hidden border-b border-slate-200 bg-white">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full max-w-7xl pointer-events-none">
<div className="absolute top-20 right-0 w-[600px] h-[600px] bg-orange-100/40 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
<div className="absolute top-40 left-0 w-[500px] h-[500px] bg-slate-100/60 rounded-full blur-3xl opacity-50 mix-blend-multiply"></div>
</div>
<div className="max-w-5xl mx-auto text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-slate-50 border border-slate-200 text-slate-600 text-xs font-medium mb-8 hover:border-orange-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500"></span>
</span>
                        New: OSHA Heat Illness Prevention Module Live
                    </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-slate-900 mb-8 leading-[1.1]">
                        The operating system for <br className="hidden md:block"/> kitchen compliance.
                    </h1>
<p className="text-xl text-slate-500 mb-10 max-w-2xl mx-auto leading-relaxed font-light">
                        Automate staff training, track certifications, and manage liability across one or one thousand locations from a single dashboard.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-16">
<button className="w-full sm:w-auto bg-slate-900 text-white px-8 py-4 rounded-xl font-medium shadow-xl shadow-slate-200/50 hover:shadow-2xl hover:shadow-slate-200/50 hover:-translate-y-0.5 transition-all duration-200 flex items-center justify-center gap-2 text-sm" onclick="router('courses')">
                            Browse Catalog
                            <span className="iconify" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<button className="w-full sm:w-auto bg-white border border-slate-200 text-slate-700 px-8 py-4 rounded-xl font-medium hover:bg-slate-50 transition-colors flex items-center justify-center gap-2 text-sm">
<span className="iconify" data-icon="lucide:play-circle" data-width="16"></span>
                            Watch 2-min Demo
                        </button>
</div>

<div className="border-t border-slate-100 pt-10">
<p className="text-xs font-semibold text-slate-400 uppercase tracking-widest mb-6">Trusted by 2,000+ Kitchens</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1"><span className="iconify" data-icon="lucide:utensils" data-width="16"></span> BISTRO</span>
<span className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1"><span className="iconify" data-icon="lucide:coffee" data-width="16"></span> ROAST</span>
<span className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1"><span className="iconify" data-icon="lucide:croissant" data-width="16"></span> BAKERY</span>
<span className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1"><span className="iconify" data-icon="lucide:pizza" data-width="16"></span> SLICE</span>
<span className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-1"><span className="iconify" data-icon="lucide:glass-water" data-width="16"></span> PURE</span>
</div>
</div>
</div>
</div>

<div className="py-24 bg-slate-50 border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<div className="w-12 h-12 bg-white border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm text-orange-600">
<span className="iconify" data-icon="lucide:smartphone" data-width="24"></span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Training built for the back of house.</h2>
<div className="space-y-6 text-slate-500 leading-relaxed">
<p>
                                    Line cooks don't have time for 2-hour lectures. Our micro-learning modules are designed to be consumed in 5-minute bursts during prep or downtime.
                                </p>
<ul className="space-y-3">
<li className="flex items-center gap-3">
<span className="iconify text-orange-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Mobile-optimized interface for any device</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-orange-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Gamified quizzes to improve retention</span>
</li>
<li className="flex items-center gap-3">
<span className="iconify text-orange-500" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Available in English, Spanish, and French</span>
</li>
</ul>
</div>
</div>
<div className="relative group">
<div className="absolute -inset-2 bg-gradient-to-r from-orange-500 to-amber-500 rounded-2xl blur opacity-20 group-hover:opacity-30 transition duration-1000"></div>
<div className="relative bg-white border border-slate-200 rounded-xl shadow-xl overflow-hidden aspect-video flex items-center justify-center bg-slate-100">

<div className="w-2/3 space-y-4 opacity-50">
<div className="h-4 bg-slate-200 rounded w-1/2 mx-auto"></div>
<div className="h-2 bg-slate-200 rounded w-3/4 mx-auto"></div>
<div className="h-32 bg-slate-200 rounded-lg w-full"></div>
</div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="bg-white p-4 rounded-full shadow-lg">
<span className="iconify text-orange-500" data-icon="lucide:play" data-width="24"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-white border-b border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative">
<div className="bg-slate-50 border border-slate-200 rounded-xl shadow-lg p-8">
<div className="flex items-center justify-between mb-6 border-b border-slate-200 pb-4">
<div className="font-semibold text-slate-900">Compliance Report</div>
<div className="text-xs font-medium text-green-600 bg-green-50 px-2 py-1 rounded">98% Compliant</div>
</div>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm">
<div className="text-slate-900 font-medium">Alex Rivera</div>
<div className="text-slate-500 text-xs">Sous Chef</div>
</div>
</div>
<span className="iconify text-green-500" data-icon="lucide:badge-check" data-width="20"></span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm">
<div className="text-slate-900 font-medium">Sam Chen</div>
<div className="text-slate-500 text-xs">Line Cook</div>
</div>
</div>
<span className="iconify text-green-500" data-icon="lucide:badge-check" data-width="20"></span>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200"></div>
<div className="text-sm">
<div className="text-slate-900 font-medium">Jordan Smith</div>
<div className="text-slate-500 text-xs">Prep</div>
</div>
</div>
<span className="iconify text-orange-500" data-icon="lucide:clock" data-width="20"></span>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2">
<div className="w-12 h-12 bg-slate-50 border border-slate-200 rounded-xl flex items-center justify-center mb-6 shadow-sm text-orange-600">
<span className="iconify" data-icon="lucide:shield-check" data-width="24"></span>
</div>
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Audit-proof your business.</h2>
<div className="space-y-6 text-slate-500 leading-relaxed">
<p>
                                    Never scramble for paperwork during a health inspection again. ServeSafe creates a digital wallet for every employee, storing certificates, expiry dates, and signed waivers.
                                </p>
<p>
                                    Managers receive automated alerts 30 days before a certification expires, ensuring you never have an uncertified employee on the line.
                                </p>
</div>
</div>
</div>
</div>
</div>

<div className="py-24 bg-slate-50">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-semibold text-slate-900 mb-4 tracking-tight">Everything you need to run a safe kitchen.</h2>
<p className="text-slate-500">From local mom-and-pops to national chains, our infrastructure scales with your needs.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:zap" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Instant Certification</h3>
<p className="text-sm text-slate-500 leading-relaxed">Certificates are generated instantly upon exam completion. Download as PDF or save to Apple Wallet.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:users" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Bulk Management</h3>
<p className="text-sm text-slate-500 leading-relaxed">Assign courses to 10 or 10,000 employees with a single click via CSV upload or HRIS integration.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:bar-chart-3" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Analytics</h3>
<p className="text-sm text-slate-500 leading-relaxed">Track completion rates, quiz scores, and time-spent metrics to identify training gaps.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:globe" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">Multi-Language</h3>
<p className="text-sm text-slate-500 leading-relaxed">All courses are natively translated into 12 languages to support diverse kitchen teams.</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:lock" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">SSO &amp; Security</h3>
<p className="text-sm text-slate-500 leading-relaxed">Enterprise-grade security with SAML/SSO support (Okta, Google Workspace, Azure AD).</p>
</div>
<div className="p-8 rounded-2xl bg-white border border-slate-200 hover:shadow-lg transition-shadow duration-300">
<span className="iconify text-orange-600 mb-6" data-icon="lucide:code-2" data-width="24"></span>
<h3 className="text-lg font-semibold text-slate-900 mb-3">API Access</h3>
<p className="text-sm text-slate-500 leading-relaxed">Connect ServeSafe directly to your scheduling software to block shifts for untrained staff.</p>
</div>
</div>
</div>
</div>

<div className="py-24 bg-white border-t border-slate-200">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-6">Ready to upgrade your kitchen?</h2>
<p className="text-lg text-slate-500 mb-10">Join thousands of restaurants that have simplified their compliance training.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-orange-600 hover:bg-orange-500 text-white px-8 py-4 rounded-xl font-medium shadow-lg hover:shadow-orange-500/20 transition-all flex items-center justify-center gap-2" onclick="router('checkout')">
                            Start Free Trial
                        </button>
<button className="w-full sm:w-auto bg-slate-50 hover:bg-slate-100 text-slate-900 px-8 py-4 rounded-xl font-medium border border-slate-200 transition-all flex items-center justify-center gap-2" onclick="router('enterprise')">
                            Contact Sales
                        </button>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-enter" id="view-enterprise">
<div className="bg-slate-900 text-white py-24 px-6 relative overflow-hidden">
<div className="absolute inset-0 opacity-10 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')]"></div>
<div className="max-w-7xl mx-auto relative z-10 grid md:grid-cols-2 gap-12 items-center">
<div>
<div className="inline-block px-3 py-1 rounded-full bg-orange-500/20 text-orange-300 text-xs font-medium mb-6 border border-orange-500/30">Enterprise Solutions</div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tighter mb-6">Scale training across 50+ locations.</h1>
<p className="text-lg text-slate-400 mb-8 leading-relaxed max-w-lg">
                            Centralized billing, custom learning paths, and dedicated success managers for large restaurant groups and franchises.
                        </p>
<button className="bg-orange-500 hover:bg-orange-400 text-white px-6 py-3 rounded-lg font-medium transition-colors">
                            Book a Consultation
                        </button>
</div>
<div className="bg-slate-800/50 rounded-2xl p-8 border border-slate-700 backdrop-blur-sm">
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">First Name</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-orange-500 outline-none text-white" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Last Name</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-orange-500 outline-none text-white" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Work Email</label>
<input className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-orange-500 outline-none text-white" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-400 mb-1">Company Size</label>
<select className="w-full bg-slate-900 border border-slate-700 rounded-lg p-3 text-sm focus:border-orange-500 outline-none text-white appearance-none">
<option>10-50 Locations</option>
<option>50-200 Locations</option>
<option>200+ Locations</option>
</select>
</div>
<button className="w-full bg-white text-slate-900 font-medium py-3 rounded-lg hover:bg-slate-200 transition-colors mt-2" type="button">Request Demo</button>
</form>
</div>
</div>
</div>
<div className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl font-semibold text-slate-900">Enterprise Grade Features</h2>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<h3 className="font-semibold text-slate-900 mb-2">Custom Content</h3>
<p className="text-sm text-slate-500">Upload your own SOPs, recipes, and brand standards alongside our compliance library.</p>
</div>
<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<h3 className="font-semibold text-slate-900 mb-2">Advanced Hierarchies</h3>
<p className="text-sm text-slate-500">Map your organization with Regional Managers, District Operators, and GMs for granular reporting.</p>
</div>
<div className="bg-slate-50 p-8 rounded-xl border border-slate-100">
<h3 className="font-semibold text-slate-900 mb-2">Dedicated SLA</h3>
<p className="text-sm text-slate-500">Guaranteed 99.9% uptime and 24/7 priority support with a dedicated phone line.</p>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-enter" id="view-courses">
<div className="bg-white border-b border-slate-200 py-16 px-6">
<div className="max-w-7xl mx-auto">
<h1 className="text-4xl font-semibold tracking-tighter text-slate-900 mb-4">Course Catalog</h1>
<p className="text-slate-500 max-w-2xl text-lg">Industry-standard training modules vetted by health officials and culinary experts. Select courses to purchase licenses for your team.</p>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 py-12 flex flex-col lg:flex-row gap-12">

<div className="w-full lg:w-64 flex-shrink-0 space-y-8 sticky top-24 self-start">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<h3 className="font-semibold text-slate-900 mb-6 flex items-center gap-2">
<span className="iconify" data-icon="lucide:sliders-horizontal" data-width="16"></span> Filters
                        </h3>
<div className="space-y-6">
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Categories</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input checked="" className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Food Safety</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Alcohol Service</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">Kitchen Ops</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">HR &amp; Compliance</span>
</label>
</div>
</div>
<div className="h-px bg-slate-100"></div>
<div>
<h4 className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-4">Duration</h4>
<div className="space-y-3">
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">&lt; 30 Mins</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">1 - 2 Hours</span>
</label>
<label className="flex items-center gap-3 cursor-pointer group">
<input className="custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-offset-0 focus:ring-0 w-4 h-4 transition-colors" type="checkbox"/>
<span className="text-sm text-slate-600 group-hover:text-slate-900">2+ Hours</span>
</label>
</div>
</div>
</div>
</div>
</div>

<div className="flex-grow">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="course-grid">

</div>
<div className="mt-12 text-center">
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center justify-center gap-2 mx-auto">
                            Load More Courses
                            <span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</button>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-enter bg-white" id="view-about">
<div className="max-w-3xl mx-auto px-6 py-24">
<div className="mb-12">
<span className="text-orange-600 font-semibold tracking-wide uppercase text-xs">Our Mission</span>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tighter text-slate-900 mt-4 mb-8 leading-tight">We build tools for the people who feed the world.</h1>
</div>
<div className="prose prose-slate prose-lg text-slate-500 mb-20 leading-relaxed">
<p>
                        The hospitality industry runs on tight margins and high pressure. Compliance shouldn't be another headache.
                    </p>
<p>
                        ServeSafe started in 2020 when our founders, former Executive Chefs, realized that the clipboard-and-paper method of training was failing the modern kitchen. Binders were lost, certifications expired without notice, and training new hires took valuable time away from service.
                    </p>
<p>
                        We set out to build a Learning Management System that respects the time of the line cook and the budget of the owner. Today, we empower over 12,000 restaurants to maintain high standards of safety and service with minimal friction.
                    </p>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 gap-8 py-12 border-y border-slate-100 mb-20">
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">2.5M+</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">Certificates Issued</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">12k</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">Restaurants</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">99%</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">Pass Rate</div>
</div>
<div>
<div className="text-3xl font-bold text-slate-900 tracking-tight">12</div>
<div className="text-xs font-medium text-slate-400 uppercase tracking-wide mt-1">Languages</div>
</div>
</div>

<h2 className="text-2xl font-semibold text-slate-900 mb-10 tracking-tight">Our Core Values</h2>
<div className="grid md:grid-cols-2 gap-10 mb-24">
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-slate-900" data-icon="lucide:heart-handshake" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Service First</h3>
<p className="text-sm text-slate-500 leading-relaxed">We serve those who serve others. Our support team is available 24/7 because kitchens never truly sleep.</p>
</div>
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-slate-900" data-icon="lucide:shield" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Uncompromising Safety</h3>
<p className="text-sm text-slate-500 leading-relaxed">We don't cut corners on content. Our courses are rigorously vetted by health officials and updated whenever regulations change.</p>
</div>
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-slate-900" data-icon="lucide:smartphone" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Respect the Tech</h3>
<p className="text-sm text-slate-500 leading-relaxed">We build software that is fast, reliable, and invisible. It should work on a cracked smartphone screen in a basement prep room.</p>
</div>
<div>
<div className="w-10 h-10 bg-slate-50 border border-slate-200 rounded-lg flex items-center justify-center mb-4">
<span className="iconify text-slate-900" data-icon="lucide:users-2" data-width="20"></span>
</div>
<h3 className="font-semibold text-slate-900 mb-2">Accessibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Education should be accessible to all. We prioritize simple language, multi-lingual support, and intuitive design.</p>
</div>
</div>
<h2 className="text-2xl font-semibold text-slate-900 mb-8 tracking-tight">Leadership</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-8">
<div className="flex items-center gap-4 group">
<div className="w-16 h-16 bg-slate-100 rounded-full flex-shrink-0 overflow-hidden relative">
<span className="iconify absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-300" data-icon="lucide:user" data-width="48"></span>
</div>
<div>
<div className="font-medium text-slate-900 group-hover:text-orange-600 transition-colors">Sarah Chen</div>
<div className="text-sm text-slate-500">Co-Founder &amp; CEO</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-16 h-16 bg-slate-100 rounded-full flex-shrink-0 overflow-hidden relative">
<span className="iconify absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-300" data-icon="lucide:user" data-width="48"></span>
</div>
<div>
<div className="font-medium text-slate-900 group-hover:text-orange-600 transition-colors">Marcus Thorne</div>
<div className="text-sm text-slate-500">Head of Product</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-16 h-16 bg-slate-100 rounded-full flex-shrink-0 overflow-hidden relative">
<span className="iconify absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-300" data-icon="lucide:user" data-width="48"></span>
</div>
<div>
<div className="font-medium text-slate-900 group-hover:text-orange-600 transition-colors">Elena Rodriguez</div>
<div className="text-sm text-slate-500">Director of Education</div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-16 h-16 bg-slate-100 rounded-full flex-shrink-0 overflow-hidden relative">
<span className="iconify absolute bottom-0 left-1/2 -translate-x-1/2 text-slate-300" data-icon="lucide:user" data-width="48"></span>
</div>
<div>
<div className="font-medium text-slate-900 group-hover:text-orange-600 transition-colors">David Kim</div>
<div className="text-sm text-slate-500">CTO</div>
</div>
</div>
</div>
</div>
</section>

<section className="page-view hidden fade-enter min-h-[calc(100vh-64px)] bg-slate-50" id="view-checkout">
<div className="max-w-6xl mx-auto px-6 py-12">

<div className="hidden flex flex-col items-center justify-center py-24 text-center" id="cart-empty">
<div className="w-24 h-24 bg-slate-100 rounded-full flex items-center justify-center mb-6">
<span className="iconify text-slate-300" data-icon="lucide:shopping-cart" data-width="40"></span>
</div>
<h2 className="text-2xl font-semibold text-slate-900 mb-2">Your cart is empty</h2>
<p className="text-slate-500 mb-8">Select courses from the catalog to get started.</p>
<button className="bg-slate-900 text-white px-6 py-3 rounded-lg font-medium hover:bg-slate-800 transition-colors" onclick="router('courses')">
                        Browse Courses
                    </button>
</div>

<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-start" id="cart-content">

<div>
<div className="flex items-center justify-between mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-slate-900">Order Summary</h2>
<button className="text-sm font-medium text-orange-600 hover:text-orange-500" onclick="router('courses')">Continue Shopping</button>
</div>
<div className="bg-white rounded-xl shadow-sm border border-slate-200 overflow-hidden mb-8">
<div className="divide-y divide-slate-100 max-h-[400px] overflow-y-auto custom-scrollbar" id="cart-items-container">

</div>
<div className="p-6 bg-slate-50 border-t border-slate-200 space-y-3">
<div className="flex justify-between items-center text-sm text-slate-500">
<span>Subtotal</span>
<span id="cart-subtotal">$0.00</span>
</div>
<div className="flex justify-between items-center text-sm text-slate-500">
<span>Taxes</span>
<span>Calculated at next step</span>
</div>
<div className="flex justify-between items-center pt-3 border-t border-slate-200">
<span className="text-base font-semibold text-slate-900">Total Due Today</span>
<span className="text-2xl font-semibold text-slate-900 tracking-tight" id="cart-total-display">$0.00</span>
</div>
</div>
</div>

<div className="space-y-4">
<h3 className="font-medium text-slate-900">Frequently Asked Questions</h3>
<div className="border border-slate-200 rounded-lg bg-white p-4">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-700">
<span>How do I assign these licenses?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-slate-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                                        After purchase, you'll receive an email with a link to your dashboard. From there, you can enter employee emails to send them course invites immediately.
                                    </p>
</details>
</div>
<div className="border border-slate-200 rounded-lg bg-white p-4">
<details className="group">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none text-sm text-slate-700">
<span>Do licenses expire?</span>
<span className="transition group-open:rotate-180">
<span className="iconify" data-icon="lucide:chevron-down" data-width="16"></span>
</span>
</summary>
<p className="text-slate-500 mt-3 group-open:animate-fadeIn text-sm leading-relaxed">
                                        Unassigned licenses never expire. Once assigned to an employee, the course must be completed within 12 months.
                                    </p>
</details>
</div>
</div>
</div>

<div className="bg-white rounded-2xl shadow-xl shadow-slate-200/50 border border-slate-200 overflow-hidden sticky top-24">
<div className="p-8 border-b border-slate-100">
<div className="flex justify-between items-center mb-8">
<h3 className="text-lg font-medium text-slate-900">Payment Details</h3>
<div className="flex gap-2 items-center bg-green-50 px-2 py-1 rounded border border-green-100">
<span className="iconify text-green-600" data-icon="lucide:lock" data-width="12"></span>
<span className="text-[10px] text-green-700 font-bold uppercase tracking-wide">256-bit SSL Encrypted</span>
</div>
</div>

<div className="space-y-5">
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-lg py-3 px-4 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="manager@restaurant.com" type="email" />
</input></div>
<div className="space-y-1">
<label className="block text-xs font-medium text-slate-700 uppercase tracking-wide">Card Information</label>
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-lg py-3 pl-10 pr-4 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="0000 0000 0000 0000" type="text" />
<span className="iconify absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="lucide:credit-card" data-width="16"></span>
</input></div>
</div>
<div className="grid grid-cols-2 gap-4">
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="MM / YY" type="text" />
</input></div>
<div className="relative">
<input className="w-full bg-white border border-slate-200 rounded-lg py-3 px-4 text-sm placeholder:text-slate-300 focus:outline-none focus:ring-2 focus:ring-orange-500/20 focus:border-orange-500 transition-all" placeholder="CVC" type="text" />
<span className="iconify absolute right-3 top-1/2 -translate-y-1/2 text-slate-400" data-icon="lucide:lock" data-width="14"></span>
</input></div>
</div>
<div className="pt-2">
<label className="flex items-start gap-3 cursor-pointer">
<input className="mt-1 custom-checkbox rounded border-slate-300 text-orange-500 focus:ring-0 focus:ring-offset-0" type="checkbox"/>
<span className="text-xs text-slate-500 leading-relaxed">I agree to the <a className="underline hover:text-slate-900" href="#">Terms of Service</a>. I understand that licenses are valid for 12 months from the date of assignment.</span>
</label>
</div>
</div>
</div>
<div className="p-8 bg-slate-50/50">
<button className="w-full bg-slate-900 hover:bg-slate-800 text-white font-medium py-3 rounded-xl shadow-lg shadow-slate-200/50 transition-all flex items-center justify-center gap-2 group">
                                Pay <span id="pay-button-total">$0.00</span>
<span className="iconify group-hover:translate-x-1 transition-transform" data-icon="lucide:arrow-right" data-width="16"></span>
</button>
<div className="mt-4 flex justify-center gap-4 opacity-50 grayscale">
<span className="iconify" data-icon="logos:visa" data-width="24"></span>
<span className="iconify" data-icon="logos:mastercard" data-width="24"></span>
<span className="iconify" data-icon="logos:amex" data-width="24"></span>
</div>
</div>
</div>
</div>
</div>
</section>
</div>

<footer className="bg-white border-t border-slate-200 py-16 px-6 mt-auto">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-4 gap-8 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-orange-500 rounded flex items-center justify-center text-white">
<span className="iconify" data-icon="lucide:chef-hat" data-width="14"></span>
</div>
<span className="font-bold tracking-tight text-slate-900">SERVESAFE</span>
</div>
<p className="text-sm text-slate-500 mb-6">Automated compliance training for the modern kitchen.</p>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">Courses</a></li>
<li><a className="hover:text-orange-600" href="#">Enterprise</a></li>
<li><a className="hover:text-orange-600" href="#">Pricing</a></li>
<li><a className="hover:text-orange-600" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Resources</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">Blog</a></li>
<li><a className="hover:text-orange-600" href="#">Help Center</a></li>
<li><a className="hover:text-orange-600" href="#">State Requirements</a></li>
<li><a className="hover:text-orange-600" href="#">Webinars</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-slate-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li><a className="hover:text-orange-600" href="#">About Us</a></li>
<li><a className="hover:text-orange-600" href="#">Careers</a></li>
<li><a className="hover:text-orange-600" href="#">Legal</a></li>
<li><a className="hover:text-orange-600" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<span>© 2024 ServeSafe LMS Inc. All rights reserved.</span>
<div className="flex gap-6">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>



    </>
  );
}
