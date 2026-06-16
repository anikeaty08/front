import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: { sans: ['Inter', 'sans-serif'] },
animation: {
'float-slow': 'float 6s ease-in-out infinite',
'float-medium': 'float 4s ease-in-out infinite',
'float-fast': 'float 3s ease-in-out infinite',
'slide-up': 'slideUp 0.8s ease-out forwards',
'fade-in': 'fadeIn 0.5s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Initialization
        function initApp() {
            // Remove Loader
            setTimeout(() => {
                const loader = document.getElementById('loader');
                loader.classList.add('opacity-0');
                setTimeout(() => loader.style.display = 'none', 500);
            }, 800);

            // Set min date for booking form to today
            const dateInput = document.getElementById('b-date');
            if(dateInput) {
                const today = new Date().toISOString().split('T')[0];
                dateInput.setAttribute('min', today);
            }

            // Setup Intersection Observer for scroll animations
            setupScrollAnimations();
        }

        // Scroll Animations using Intersection Observer
        function setupScrollAnimations() {
            const observerOptions = { root: null, rootMargin: '0px', threshold: 0.1 };
            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('animate-slide-up');
                        entry.target.style.opacity = '1';
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                el.style.opacity = '0'; // Initial state
                observer.observe(el);
            });
        }

        // --- Simulated Backend Logic (Form Submission & Local Storage) ---

        function handleBooking(e) {
            e.preventDefault();

            // 1. Gather Data
            const formData = {
                id: 'SW-' + Math.floor(Math.random() * 10000).toString().padStart(4, '0'),
                name: document.getElementById('b-name').value,
                phone: document.getElementById('b-phone').value,
                address: document.getElementById('b-address').value,
                service: document.getElementById('b-service').value,
                date: document.getElementById('b-date').value,
                notes: document.getElementById('b-notes').value,
                status: 'Pending',
                timestamp: new Date().toISOString()
            };

            // 2. Save to Simulated Database (localStorage)
            let orders = JSON.parse(localStorage.getItem('sw_orders')) || [];
            orders.unshift(formData); // Add to beginning
            localStorage.setItem('sw_orders', JSON.stringify(orders));

            // 3. Trigger simulated notification (Dashboard Alert Flag)
            localStorage.setItem('sw_new_order_flag', 'true');

            // 4. Show Success UI
            const overlay = document.getElementById('success-overlay');
            overlay.classList.remove('hidden');
            // Small delay to allow display block to apply before animating opacity
            setTimeout(() => overlay.classList.remove('opacity-0'), 10);
        }

        function resetForm() {
            document.getElementById('booking-form').reset();
            const overlay = document.getElementById('success-overlay');
            overlay.classList.add('opacity-0');
            setTimeout(() => overlay.classList.add('hidden'), 300);
        }

        // --- View Switching & Admin Logic ---

        function switchView(view) {
            const mainView = document.getElementById('main-view');
            const adminView = document.getElementById('admin-view');
            const navbar = document.getElementById('navbar');

            if (view === 'admin') {
                mainView.classList.add('hidden');
                adminView.classList.remove('hidden');
                navbar.classList.add('hidden');
                window.scrollTo(0,0);
            } else {
                adminView.classList.add('hidden');
                mainView.classList.remove('hidden');
                navbar.classList.remove('hidden');
                
                // Hide panel, show login when exiting
                document.getElementById('admin-login').classList.remove('hidden');
                document.getElementById('admin-panel').classList.add('hidden');
            }
        }

        function handleAdminLogin(e) {
            e.preventDefault();
            // Simulate auth
            document.getElementById('admin-login').classList.add('hidden');
            document.getElementById('admin-panel').classList.remove('hidden');
            renderAdminDashboard();
        }

        function renderAdminDashboard() {
            const tbody = document.getElementById('orders-table-body');
            const emptyState = document.getElementById('empty-state');
            const alertBox = document.getElementById('admin-alert');
            
            let orders = JSON.parse(localStorage.getItem('sw_orders')) || [];

            // Check for new order notification mock
            if(localStorage.getItem('sw_new_order_flag') === 'true') {
                alertBox.classList.remove('hidden');
                setTimeout(() => alertBox.classList.add('hidden'), 5000);
                localStorage.removeItem('sw_new_order_flag');
            }

            if (orders.length === 0) {
                tbody.innerHTML = '';
                emptyState.classList.remove('hidden');
                return;
            }

            emptyState.classList.add('hidden');
            tbody.innerHTML = orders.map((order, index) => `
                <tr class="hover:bg-slate-50/50 transition-colors">
                    <td class="px-6 py-4 font-medium text-slate-900">${order.id}</td>
                    <td class="px-6 py-4">
                        <div class="text-slate-900">${order.name}</div>
                        <div class="text-xs text-slate-500">${order.phone}</div>
                    </td>
                    <td class="px-6 py-4">${order.service}</td>
                    <td class="px-6 py-4">${order.date}</td>
                    <td class="px-6 py-4">
                        <span class="px-2.5 py-1 rounded-full text-[10px] font-medium border ${
                            order.status === 'Pending' ? 'bg-orange-50 text-orange-600 border-orange-100' :
                            order.status === 'In Progress' ? 'bg-blue-50 text-blue-600 border-blue-100' :
                            'bg-emerald-50 text-emerald-600 border-emerald-100'
                        }">
                            ${order.status}
                        </span>
                    </td>
                    <td class="px-6 py-4">
                        <select onchange="updateStatus(${index}, this.value)" class="text-xs border border-slate-200 rounded px-2 py-1 outline-none focus:border-slate-400 bg-white cursor-pointer">
                            <option value="Pending" ${order.status === 'Pending' ? 'selected' : ''}>Pending</option>
                            <option value="In Progress" ${order.status === 'In Progress' ? 'selected' : ''}>In Progress</option>
                            <option value="Completed" ${order.status === 'Completed' ? 'selected' : ''}>Completed</option>
                        </select>
                    </td>
                </tr>
            `).join('');
        }

        function updateStatus(index, newStatus) {
            let orders = JSON.parse(localStorage.getItem('sw_orders')) || [];
            if(orders[index]) {
                orders[index].status = newStatus;
                localStorage.setItem('sw_orders', JSON.stringify(orders));
                renderAdminDashboard(); // re-render to update badge colors
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[100] flex items-center justify-center bg-white transition-opacity duration-500" id="loader">
<div className="flex flex-col items-center gap-4">
<iconify-icon className="text-4xl text-blue-600 animate-bounce" icon="solar:washing-machine-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<div className="text-sm font-medium tracking-tight text-slate-500 animate-pulse">Loading Snow White...</div>
</div>
</div>

<nav className="fixed top-0 w-full z-50 backdrop-blur-md bg-white/70 border-b border-slate-200/50 transition-all duration-300" id="navbar">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#" onclick="switchView('main')">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-white font-medium tracking-tight group-hover:scale-105 transition-transform">
                    SW
                </div>
<span className="text-lg font-medium tracking-tight text-slate-900">Snow White</span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="hover:text-slate-900 transition-colors" href="#testimonials">Testimonials</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex px-4 py-2 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:shadow-lg hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5" href="#book">
                    Book Now
                </a>
<button className="md:hidden text-slate-600" onclick="document.getElementById('mobile-menu').classList.toggle('hidden')">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-slate-200 shadow-xl py-4 px-6 flex flex-col gap-4 text-sm font-medium" id="mobile-menu">
<a className="text-slate-600" href="#services" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Services</a>
<a className="text-slate-600" href="#how-it-works" onclick="document.getElementById('mobile-menu').classList.add('hidden')">How it Works</a>
<a className="inline-flex justify-center px-4 py-2 rounded-lg bg-blue-600 text-white" href="#book" onclick="document.getElementById('mobile-menu').classList.add('hidden')">Book Now</a>
</div>
</nav>

<main id="main-view">

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[800px] bg-blue-100/40 rounded-full blur-3xl -z-10 animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute top-40 -right-40 w-[500px] h-[500px] bg-violet-100/40 rounded-full blur-3xl -z-10"></div>

<div className="absolute top-40 left-20 w-8 h-8 rounded-full bg-blue-500/10 backdrop-blur border border-blue-500/20 animate-float-slow -z-10"></div>
<div className="absolute bottom-40 right-40 w-12 h-12 rounded-full bg-violet-500/10 backdrop-blur border border-violet-500/20 animate-float-medium -z-10"></div>
<div className="absolute top-1/2 left-1/4 w-4 h-4 rounded-full bg-blue-400/20 animate-float-fast -z-10"></div>
<div className="max-w-4xl mx-auto px-6 text-center reveal">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    24hr Turnaround Available
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-[1.1]">
                    Fast &amp; Reliable Laundry <br className="hidden md:block"/>
                    Service at Your <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-600 to-violet-500">Doorstep</span>
</h1>
<p className="text-base md:text-lg text-slate-500 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                    Pickup, clean, and deliver. We handle the dirty work so you can focus on what matters. Premium care for your clothes with eco-friendly solutions.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 hover:shadow-xl hover:shadow-slate-900/20 transition-all transform hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#book">
                        Book Pickup <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-white border border-slate-200 text-slate-700 text-sm font-medium hover:bg-slate-50 transition-colors flex items-center justify-center" href="#services">
                        View Services
                    </a>
</div>
</div>
</section>

<section className="py-20 bg-white relative" id="services">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">Our Services</h2>
<p className="text-sm text-slate-500">Tailored care for every fabric type.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-blue-100 transition-all duration-300 reveal cursor-default">
<div className="w-12 h-12 rounded-xl bg-blue-50 text-blue-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:washing-machine-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Wash &amp; Fold</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Everyday laundry, sorted, washed, dried, and neatly folded.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-violet-100 transition-all duration-300 reveal cursor-default delay-100">
<div className="w-12 h-12 rounded-xl bg-violet-50 text-violet-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:hanger-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Dry Cleaning</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Premium care for delicate fabrics, suits, and special garments.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-orange-100 transition-all duration-300 reveal cursor-default delay-200">
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:smart-home-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Steam Ironing</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">Professional pressing for crisp, wrinkle-free clothes.</p>
</div>

<div className="group p-6 rounded-2xl bg-slate-50/50 border border-slate-100 hover:bg-white hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-emerald-100 transition-all duration-300 reveal cursor-default delay-300">
<div className="w-12 h-12 rounded-xl bg-emerald-50 text-emerald-600 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-2xl" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Express Service</h3>
<p className="text-sm text-slate-500 font-light leading-relaxed">In a rush? Get your laundry returned within 12-24 hours.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 relative overflow-hidden" id="how-it-works">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center mb-16 reveal">
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-3">How It Works</h2>
<p className="text-sm text-slate-500">Simple process, immaculate results.</p>
</div>
<div className="relative flex flex-col md:flex-row justify-between items-start gap-10 md:gap-6">

<div className="hidden md:block absolute top-8 left-[10%] right-[10%] h-px bg-slate-200 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 reveal">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-medium">1</div>
<iconify-icon className="text-2xl text-slate-700" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">Schedule Pickup</h3>
<p className="text-sm text-slate-500 font-light">Book online. We collect from your door.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 reveal delay-100">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-blue-600 text-white text-xs flex items-center justify-center font-medium">2</div>
<iconify-icon className="text-2xl text-blue-600" icon="solar:bubbles-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">We Clean</h3>
<p className="text-sm text-slate-500 font-light">Expert cleaning according to care labels.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center w-full md:w-1/3 reveal delay-200">
<div className="w-16 h-16 rounded-2xl bg-white border border-slate-200 shadow-sm flex items-center justify-center mb-6 relative">
<div className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-slate-900 text-white text-xs flex items-center justify-center font-medium">3</div>
<iconify-icon className="text-2xl text-slate-700" icon="solar:box-minimalistic-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-base font-medium text-slate-900 mb-2 tracking-tight">We Deliver</h3>
<p className="text-sm text-slate-500 font-light">Fresh clothes returned within 24 hours.</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-slate-50 border-y border-slate-200/50 overflow-hidden" id="testimonials">
<div className="max-w-6xl mx-auto px-6 mb-12">
<h2 className="text-2xl font-medium tracking-tight text-slate-900 reveal">Loved by Locals</h2>
</div>

<div className="flex gap-6 px-6 overflow-x-auto pb-8 snap-x scrollbar-hide" style={{scrollbarWidth: 'none', MsOverflowStyle: 'none'}}>

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm snap-center reveal">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-6 leading-relaxed">"Absolute lifesaver. As a busy professional, I never have time for laundry. Snow White picks it up and it comes back perfect every time."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">SM</div>
<div className="text-xs font-medium text-slate-900">Sarah Mitchell</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm snap-center reveal delay-100">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-6 leading-relaxed">"Their dry cleaning service for suits is top-tier. Highly recommend for anyone needing delicate items handled with care."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">DJ</div>
<div className="text-xs font-medium text-slate-900">David Jenkins</div>
</div>
</div>

<div className="min-w-[300px] md:min-w-[400px] p-6 rounded-2xl bg-white border border-slate-200 shadow-sm snap-center reveal delay-200">
<div className="flex gap-1 text-yellow-400 mb-4 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon><iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-sm text-slate-600 font-light mb-6 leading-relaxed">"The app is so easy to use, and the turnaround time is incredible. I had a coffee stain removed from a white dress perfectly."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-200 flex items-center justify-center text-xs font-medium text-slate-500">EL</div>
<div className="text-xs font-medium text-slate-900">Emily Larson</div>
</div>
</div>
</div>
<style>
                /* Hide scrollbar for clean horizontal scroll */
                .scrollbar-hide::-webkit-scrollbar { display: none; }
            </style>
</section>

<section className="py-24 bg-white relative" id="book">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="reveal">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Book Your Pickup</h2>
<p className="text-base text-slate-500 font-light mb-8 max-w-md">Fill out the form to schedule your laundry pickup. Our team will arrive at your specified time.</p>
<div className="space-y-6">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:map-point-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Service Area</div>
<div className="text-sm text-slate-500 font-light">Downtown &amp; Metro Area (15 mile radius)</div>
</div>
</div>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-slate-50 border border-slate-100 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:clock-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-slate-900">Operating Hours</div>
<div className="text-sm text-slate-500 font-light">Mon-Sat: 8 AM - 8 PM</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-200 shadow-xl shadow-slate-200/50 p-8 reveal delay-100 relative overflow-hidden">

<div className="absolute inset-0 bg-white/95 backdrop-blur-sm z-20 flex flex-col items-center justify-center text-center p-8 hidden opacity-0 transition-opacity duration-300" id="success-overlay">
<div className="w-16 h-16 rounded-full bg-emerald-50 text-emerald-500 flex items-center justify-center mb-4">
<iconify-icon className="text-3xl" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-xl font-medium text-slate-900 mb-2 tracking-tight">Booking Confirmed!</h3>
<p className="text-sm text-slate-500 font-light mb-6">Your request has been sent successfully. We will notify you when our driver is on the way.</p>
<button className="px-6 py-2 rounded-full bg-slate-100 text-slate-700 text-sm font-medium hover:bg-slate-200 transition-colors" onclick="resetForm()" type="button">Book Another</button>
</div>
<form className="space-y-4 relative z-10" id="booking-form" onsubmit="handleBooking(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Full Name</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" id="b-name" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Phone Number</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" id="b-phone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Pickup Address</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400" id="b-address" placeholder="123 Main St, Apt 4B" required="" type="text"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Service Type</label>
<div className="relative">
<select className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all appearance-none text-slate-700 cursor-pointer" id="b-service" required="">
<option disabled="" selected="" value="">Select Service</option>
<option value="Wash &amp; Fold">Wash &amp; Fold</option>
<option value="Dry Cleaning">Dry Cleaning</option>
<option value="Ironing">Ironing Only</option>
<option value="Express Mix">Express Mix</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Pickup Date</label>
<input className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all text-slate-700 cursor-pointer min-w-[150px]" id="b-date" required="" type="date"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-slate-700 ml-1">Special Instructions (Optional)</label>
<textarea className="w-full rounded-xl border border-slate-200 bg-slate-50/50 px-4 py-2.5 text-sm outline-none focus:border-blue-500 focus:bg-white focus:ring-4 focus:ring-blue-500/10 transition-all placeholder:text-slate-400 resize-none" id="b-notes" placeholder="e.g. Do not machine dry the red sweater..." rows="3"></textarea>
</div>
<button className="w-full py-3 mt-2 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 shadow-md shadow-slate-900/10 transition-all active:scale-[0.98] flex items-center justify-center gap-2" type="submit">
                                Book Laundry Service
                            </button>
<div className="text-center text-[10px] text-slate-400 mt-2">By booking, you agree to our terms of service.</div>
</form>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-400 py-12 border-t border-slate-800">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-8">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-4 text-white">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-500 to-violet-500 flex items-center justify-center text-[10px] font-medium tracking-tight">SW</div>
<span className="text-base font-medium tracking-tight">Snow White</span>
</div>
<p className="text-xs font-light max-w-xs mb-6">Premium laundry and dry cleaning delivered to your door. Saving you time for what matters most.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-xl" icon="solar:camera-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 tracking-tight">Quick Links</h4>
<ul className="space-y-2 text-xs font-light">
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
<li><a className="hover:text-white transition-colors" href="#how-it-works">How it works</a></li>
</ul>
</div>
<div>
<h4 className="text-white text-sm font-medium mb-4 tracking-tight">Contact</h4>
<ul className="space-y-2 text-xs font-light">
<li>hello@snowwhite.app</li>
<li>+1 (555) 123-4567</li>
<li className="mt-4 pt-4 border-t border-slate-800">

<a className="text-slate-600 hover:text-slate-400 transition-colors flex items-center gap-1" href="#" onclick="switchView('admin')">
<iconify-icon icon="solar:lock-keyhole-linear"></iconify-icon> Partner Login
                            </a>
</li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 mt-12 pt-6 border-t border-slate-800 text-center text-[10px] flex flex-col md:flex-row justify-between items-center gap-2">
<p>© 2024 Snow White Dry Cleaner. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
</div>
</div>
</footer>

<a className="fixed bottom-6 right-6 w-12 h-12 bg-[#25D366] text-white rounded-full flex items-center justify-center shadow-lg hover:-translate-y-1 hover:shadow-xl transition-all z-40" href="#">
<iconify-icon className="text-2xl" icon="solar:chat-round-dots-linear"></iconify-icon>
</a>
</main>

<main className="hidden min-h-screen bg-slate-50 pt-16" id="admin-view">

<div className="max-w-md mx-auto mt-20 p-8 bg-white rounded-2xl border border-slate-200 shadow-sm" id="admin-login">
<div className="text-center mb-6">
<div className="w-10 h-10 mx-auto rounded-lg bg-slate-900 flex items-center justify-center text-white mb-4">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear"></iconify-icon>
</div>
<h2 className="text-xl font-medium tracking-tight text-slate-900">Partner Dashboard</h2>
<p className="text-xs text-slate-500">Enter credentials to manage orders.</p>
</div>
<form className="space-y-4" onsubmit="handleAdminLogin(event)">
<input className="w-full rounded-xl border border-slate-200 px-4 py-2 text-sm outline-none focus:border-slate-400 text-center" placeholder="Enter any password to demo..." required="" type="password"/>
<button className="w-full py-2.5 rounded-xl bg-slate-900 text-white text-sm font-medium hover:bg-slate-800 transition-colors" type="submit">Access Dashboard</button>
</form>
<div className="text-center mt-4">
<button className="text-xs text-slate-400 hover:text-slate-600" onclick="switchView('main')">Return to site</button>
</div>
</div>

<div className="hidden max-w-6xl mx-auto p-6" id="admin-panel">
<div className="flex justify-between items-end mb-8">
<div>
<h1 className="text-2xl font-medium tracking-tight text-slate-900 mb-1">Incoming Orders</h1>
<p className="text-sm text-slate-500">Manage laundry requests in real-time.</p>
</div>
<button className="text-sm text-slate-500 hover:text-slate-900 flex items-center gap-1" onclick="switchView('main')">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Exit
                </button>
</div>

<div className="hidden mb-6 p-4 rounded-xl bg-blue-50 border border-blue-100 flex items-center gap-3 text-sm text-blue-800 animate-slide-up" id="admin-alert">
<iconify-icon className="text-lg text-blue-600" icon="solar:bell-bing-linear"></iconify-icon>
<span>New order received! Check the table below.</span>
</div>
<div className="bg-white rounded-2xl border border-slate-200 shadow-sm overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50 border-b border-slate-200 text-slate-500 font-medium">
<tr>
<th className="px-6 py-4">Order ID</th>
<th className="px-6 py-4">Customer</th>
<th className="px-6 py-4">Service</th>
<th className="px-6 py-4">Pickup Date</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700" id="orders-table-body">

</tbody>
</table>
</div>
<div className="hidden p-12 text-center text-slate-400 text-sm" id="empty-state">
<iconify-icon className="text-4xl mb-2" icon="solar:inbox-line-linear"></iconify-icon>
<p>No orders yet. They will appear here when submitted.</p>
</div>
</div>
</div>
</main>



    </>
  );
}
