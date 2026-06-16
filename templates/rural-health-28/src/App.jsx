import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        let currentPage = 'home';

        function setActiveNav(page) {
            document.querySelectorAll('.nav-link').forEach(link => {
                link.classList.remove('text-green-600', 'bg-green-50');
                link.classList.add('text-slate-600');
                if (link.dataset.page === page) {
                    link.classList.add('text-green-600', 'bg-green-50');
                    link.classList.remove('text-slate-600');
                }
            });

            document.querySelectorAll('.nav-link-mobile').forEach(link => {
                link.classList.remove('text-green-600', 'bg-green-50');
                link.classList.add('text-slate-600');
                if (link.dataset.page === page) {
                    link.classList.add('text-green-600', 'bg-green-50');
                    link.classList.remove('text-slate-600');
                }
            });
        }

        function navigate(page, updateHash = true) {
            document.querySelectorAll('.page-section').forEach(section => {
                section.classList.add('hidden');
                section.classList.remove('block');
            });

            const target = document.getElementById('page-' + page);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
                currentPage = page;
                setActiveNav(page);
                closeMobileMenu();
                window.scrollTo({ top: 0, behavior: 'smooth' });
                if (updateHash) {
                    history.replaceState(null, '', '#' + page);
                }
            }
        }

        function loadPageFromHash() {
            const hash = window.location.hash.replace('#', '');
            const validPages = ['home', 'services', 'book', 'contact', 'login', 'patient', 'admin'];
            if (validPages.includes(hash)) {
                navigate(hash, false);
            } else {
                navigate('home', false);
            }
        }

        function toggleMobileMenu() {
            const btn = document.getElementById('hamburger-btn');
            const menu = document.getElementById('mobile-menu');
            const isOpen = btn.getAttribute('aria-expanded') === 'true';

            btn.setAttribute('aria-expanded', String(!isOpen));
            if (!isOpen) {
                menu.classList.remove('hidden');
                menu.classList.add('flex');
            } else {
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        function closeMobileMenu() {
            const btn = document.getElementById('hamburger-btn');
            const menu = document.getElementById('mobile-menu');
            if (btn && menu) {
                btn.setAttribute('aria-expanded', 'false');
                menu.classList.add('hidden');
                menu.classList.remove('flex');
            }
        }

        let currentBookStep = 1;
        function bookNextStep(step) {
            document.getElementById('book-step-' + currentBookStep).classList.add('hidden');
            document.getElementById('book-step-' + step).classList.remove('hidden');

            for (let i = 1; i <= 3; i++) {
                const stepEl = document.getElementById('prog-' + i);
                const circle = stepEl.querySelector('div');

                stepEl.classList.remove('text-green-600', 'text-slate-400', 'text-slate-900');
                circle.classList.remove('bg-green-600', 'text-white', 'bg-green-50', 'text-green-700', 'border-transparent', 'bg-slate-100', 'border-slate-200', 'text-slate-500');

                if (i < step) {
                    stepEl.classList.add('text-green-600');
                    circle.classList.add('bg-green-50', 'text-green-700', 'border-transparent');
                } else if (i === step) {
                    stepEl.classList.add('text-green-600');
                    circle.classList.add('bg-green-600', 'text-white', 'border-transparent');
                } else {
                    stepEl.classList.add('text-slate-400');
                    circle.classList.add('bg-slate-100', 'border-slate-200', 'text-slate-500', 'border');
                }
            }

            document.getElementById('prog-conn-1').classList.toggle('bg-green-200', step > 1);
            document.getElementById('prog-conn-1').classList.toggle('bg-slate-200', step <= 1);
            document.getElementById('prog-conn-2').classList.toggle('bg-green-200', step > 2);
            document.getElementById('prog-conn-2').classList.toggle('bg-slate-200', step <= 2);

            if (step === 3) {
                document.getElementById('review-name').textContent = (document.getElementById('fname').value || '—') + ' ' + (document.getElementById('lname').value || '');
                document.getElementById('review-phone').textContent = document.getElementById('phone').value || '—';
                document.getElementById('review-service').textContent = document.getElementById('service').value || '—';
                const d = document.getElementById('appt-date').value;
                const t = document.getElementById('appt-time').value;
                document.getElementById('review-datetime').textContent = d && t ? `${d} at ${t}` : '—';
            }

            currentBookStep = step;
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        function updateSummary() {
            document.getElementById('summary-service').textContent = document.getElementById('service').value || 'Not selected';
            document.getElementById('summary-date').textContent = document.getElementById('appt-date').value || 'Not selected';
            document.getElementById('summary-time').textContent = document.getElementById('appt-time').value || 'Not selected';
        }

        function submitAppointment() {
            showToast('solar:check-circle-bold', 'Appointment Booked!', 'We will confirm shortly.');
            setTimeout(() => navigate('patient'), 1000);
            setTimeout(() => bookNextStep(1), 1500);
        }

        function submitContact() {
            showToast('solar:letter-bold', 'Message Sent!', 'We will get back to you soon.');
        }

        let loginRole = 'patient';
        function switchLoginTab(role, btn) {
            loginRole = role;
            document.querySelectorAll('.login-tab-btn').forEach(t => {
                t.classList.remove('bg-white', 'text-slate-900', 'shadow-sm');
                t.classList.add('text-slate-500');
            });
            btn.classList.add('bg-white', 'text-slate-900', 'shadow-sm');
            btn.classList.remove('text-slate-500');
        }

        function handleLogin() {
            const email = document.getElementById('login-email').value.trim();
            if (!email) return showToast('solar:danger-circle-bold', 'Error', 'Please enter email.');
            showToast('solar:check-circle-bold', 'Logged In', 'Welcome back!');
            navigate(loginRole === 'admin' ? 'admin' : 'patient');
        }

        function openCancelModal() {
            document.getElementById('cancel-modal').classList.remove('hidden');
        }

        function closeCancelModal() {
            document.getElementById('cancel-modal').classList.add('hidden');
        }

        function confirmCancel() {
            closeCancelModal();
            showToast('solar:check-circle-bold', 'Cancelled', 'Appointment removed.');
        }

        document.getElementById('cancel-modal').addEventListener('click', e => {
            if (e.target === e.currentTarget) closeCancelModal();
        });

        function showToast(icon, title, message) {
            const container = document.getElementById('toast-container');
            const toast = document.createElement('div');
            toast.className = 'bg-slate-900 text-white p-4 rounded-xl shadow-lg flex items-start gap-3 text-sm min-w-[280px] animate-[slideIn_0.3s_ease-out] border border-slate-700';
            toast.innerHTML = `
                <iconify-icon icon="${icon}" class="text-xl text-green-400 mt-0.5 shrink-0"></iconify-icon>
                <div>
                    <div class="font-medium">${title}</div>
                    <div class="text-slate-400 text-xs mt-0.5">${message}</div>
                </div>
            `;
            container.appendChild(toast);
            setTimeout(() => {
                toast.style.opacity = '0';
                toast.style.transform = 'translateY(10px)';
                toast.style.transition = 'all 0.3s ease';
                setTimeout(() => toast.remove(), 300);
            }, 3000);
        }

        document.head.insertAdjacentHTML('beforeend', `
            <style>
                @keyframes slideIn { from { transform: translateX(100%); opacity: 0; } to { transform: translateX(0); opacity: 1; } }
                @keyframes fadeIn { from { opacity: 0; transform: scale(0.95); } to { opacity: 1; transform: scale(1); } }
            </style>
        `);

        window.addEventListener('hashchange', loadPageFromHash);
        window.addEventListener('DOMContentLoaded', loadPageFromHash);
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="sticky sm:h-18 bg-white/80 h-16 border-slate-200 border-b top-0 backdrop-blur-md z-50">
<div className="sm:px-6 lg:px-8 h-full max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex h-full items-center justify-between">

<a className="flex items-center gap-2 shrink-0" href="#home" onclick="navigate('home'); return false;">
<span className="text-xl font-semibold text-slate-900 tracking-tighter">Rural</span><span className="text-xl font-semibold text-[#ba1717] tracking-tighter">Health</span><span className="text-xl font-semibold text-[#22ba17] tracking-tighter">Clinic</span>
</a>

<nav aria-label="Main navigation" className="hidden md:flex items-center gap-1">
<a className="nav-link hover:text-green-600 hover:bg-green-50 transition-colors text-sm font-medium text-slate-600 rounded-md pt-2 pr-3 pb-2 pl-3" data-page="home" href="#home" onclick="navigate('home'); return false;">Home</a>
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50 transition-colors" data-page="services" href="#services" onclick="navigate('services'); return false;">Services</a>
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50 transition-colors" data-page="book" href="#book" onclick="navigate('book'); return false;">Book Appointment</a>
<a className="nav-link px-3 py-2 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50 transition-colors" data-page="contact" href="#contact" onclick="navigate('contact'); return false;">Contact</a>
</nav>

<div className="hidden md:flex items-center gap-3">
<button className="inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" onclick="navigate('login')">Log In</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" onclick="navigate('book')">Book Now</button>
</div>

<button aria-expanded="false" aria-label="Toggle menu" className="md:hidden flex flex-col justify-center items-center w-10 h-10 gap-1.5 p-2 rounded-md hover:bg-slate-100 transition-colors focus:outline-none" id="hamburger-btn" onclick="toggleMobileMenu()">
<span className="w-5 h-0.5 bg-slate-600 rounded-full transition-transform duration-200"></span>
<span className="w-5 h-0.5 bg-slate-600 rounded-full transition-opacity duration-200"></span>
<span className="w-5 h-0.5 bg-slate-600 rounded-full transition-transform duration-200"></span>
</button>
</div>
</div>

<nav className="hidden absolute top-full left-0 right-0 bg-white border-b border-slate-200 shadow-lg flex-col px-4 py-4 gap-1" id="mobile-menu">
<a className="nav-link-mobile block px-4 py-3 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50" data-page="home" href="#home" onclick="navigate('home'); closeMobileMenu(); return false;">Home</a>
<a className="nav-link-mobile block px-4 py-3 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50" data-page="services" href="#services" onclick="navigate('services'); closeMobileMenu(); return false;">Services</a>
<a className="nav-link-mobile block px-4 py-3 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50" data-page="book" href="#book" onclick="navigate('book'); closeMobileMenu(); return false;">Book Appointment</a>
<a className="nav-link-mobile block px-4 py-3 rounded-md text-sm font-medium text-slate-600 hover:text-green-600 hover:bg-green-50" data-page="contact" href="#contact" onclick="navigate('contact'); closeMobileMenu(); return false;">Contact</a>
<div className="flex flex-col gap-2 mt-2 pt-4 border-t border-slate-100">
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-4 py-2 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all" onclick="navigate('login'); closeMobileMenu();">Log In</button>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-4 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all" onclick="navigate('book'); closeMobileMenu();">Book Now</button>
</div>
</nav>
</header>
<main className="">

<div className="page-section block" id="page-home">
<section className="overflow-hidden sm:py-32 bg-gradient-to-br from-green-50 via-white to-green-50 pt-20 pb-20 relative">
<div className="absolute -top-24 -right-24 w-96 h-96 bg-green-400/10 rounded-full blur-3xl pointer-events-none"></div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 rounded-full border border-green-200 bg-white px-3 py-1 text-xs font-medium text-green-700 mb-6 shadow-sm">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>
                                Serving Rural Communities Since 1998
                            </div>
<h1 className="text-4xl sm:text-5xl lg:text-6xl font-semibold tracking-tight text-slate-900 leading-tight mb-6">
                                Quality Healthcare <br/>
<span className="text-green-600">Close to Home</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                                Book appointments online, access medical services, and stay connected with our dedicated team of rural healthcare professionals.
                            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-white hover:bg-green-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" onclick="navigate('book')">Book an Appointment</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-200 bg-white px-6 py-3 text-base font-medium text-slate-700 hover:bg-slate-50 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-slate-200 focus:ring-offset-2" onclick="navigate('services')">Our Services</button>
</div>
<div className="mt-10 pt-8 border-t border-slate-200 flex flex-wrap gap-8 sm:gap-12">
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">5.2k+</div>
<div className="text-xs text-slate-500 mt-1 font-medium">Patients Served</div>
</div>
<div>
<div className="text-2xl font-semibold tracking-tight text-slate-900">6</div>
<div className="text-xs text-slate-500 mt-1 font-medium">Specialists</div>
</div>
<div className="">
<div className="text-2xl font-semibold tracking-tight text-slate-900">100%</div>
<div className="text-xs text-slate-500 mt-1 font-medium">Satisfaction</div>
</div>
</div>
</div>
<div className="relative hidden lg:block">
<div className="aspect-[4/3] rounded-2xl bg-gradient-to-br from-slate-100 to-slate-50 border border-slate-200 shadow-xl overflow-hidden flex flex-col items-center justify-center relative">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9IiNlMmU4ZjAiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom_right,white,transparent)]"></div>
<iconify-icon className="text-6xl text-green-600 mb-4 relative z-10" icon="solar:hospital-linear" strokeWidth="1.5"></iconify-icon>
<div className="text-sm font-semibold text-slate-900 relative z-10">Rural Clinic Platform</div>
</div>
<div className="absolute -top-6 right-8 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-[bounce_3s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-lg bg-green-50 text-green-600 flex items-center justify-center">
<iconify-icon icon="solar:calendar-mark-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 font-medium">Next Available</div>
<div className="text-sm font-semibold text-slate-900">Today, 2:00 PM</div>
</div>
</div>
<div className="absolute -bottom-6 left-8 bg-white p-3 rounded-xl shadow-lg border border-slate-100 flex items-center gap-3 animate-[bounce_4s_ease-in-out_infinite]">
<div className="w-8 h-8 rounded-lg bg-sky-50 text-sky-600 flex items-center justify-center">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs text-slate-500 font-medium">Confirmed</div>
<div className="text-sm font-semibold text-slate-900">42 Appts Today</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 bg-white">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-wider text-green-600 uppercase mb-3 block">What We Offer</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">Comprehensive Rural Healthcare</h2>
<p className="text-base text-slate-600">From routine check-ups to specialist consultations, we provide a wide range of medical services tailored to our community.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">General Consultation</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Comprehensive health assessments, diagnosis, and treatment for common illnesses and chronic conditions.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Maternal &amp; Child</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Pre-natal care, well-baby visits, vaccinations, and pediatric health services for young families.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:teeth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Dental Services</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Preventive cleanings, extractions, fillings, and oral health education for the whole family.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Eye Care</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Vision tests, prescription glasses, and early detection of ocular diseases for all ages.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:pill-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Pharmacy Services</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">On-site pharmacy with prescription fulfillment, counseling, and health supplements.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
<article className="p-8 rounded-2xl border border-slate-200 bg-white hover:-translate-y-1 hover:shadow-lg hover:border-green-200 transition-all duration-300 group cursor-pointer" onclick="navigate('services')">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:test-tube-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 mb-2">Laboratory</h3>
<p className="text-sm text-slate-600 mb-4 leading-relaxed">Blood tests, urinalysis, X-rays, and rapid diagnostic testing with quick turnaround times.</p>
<span className="inline-flex items-center gap-1 text-sm font-semibold text-green-600 group-hover:gap-2 transition-all">Learn more <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></span>
</article>
</div>
</div>
</section>
<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-xs font-semibold tracking-wider text-green-600 uppercase mb-3 block">Simple Process</span>
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-4">How It Works</h2>
<p className="text-base text-slate-600">Booking your appointment is quick and easy. Just follow these simple steps.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 relative">
<div className="hidden lg:block absolute top-6 left-[12.5%] right-[12.5%] h-0.5 bg-gradient-to-r from-green-100 to-green-100 z-0"></div>
<div className="text-center relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-green-600 bg-white flex items-center justify-center text-lg font-semibold text-green-600 mx-auto mb-4 shadow-sm">1</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Create Account</h3>
<p className="text-sm text-slate-600">Register for a free account to manage your appointments.</p>
</div>
<div className="text-center relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-green-600 bg-white flex items-center justify-center text-lg font-semibold text-green-600 mx-auto mb-4 shadow-sm">2</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Choose Service</h3>
<p className="text-sm text-slate-600">Browse our services and select the consultation you need.</p>
</div>
<div className="text-center relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-green-600 bg-white flex items-center justify-center text-lg font-semibold text-green-600 mx-auto mb-4 shadow-sm">3</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Pick a Schedule</h3>
<p className="text-sm text-slate-600">View available time slots and choose a date and time.</p>
</div>
<div className="text-center relative z-10">
<div className="w-12 h-12 rounded-full border-2 border-green-600 bg-white flex items-center justify-center text-lg font-semibold text-green-600 mx-auto mb-4 shadow-sm">4</div>
<h3 className="text-base font-semibold text-slate-900 mb-2">Get Confirmed</h3>
<p className="text-sm text-slate-600">Receive instant confirmation and reminders for your visit.</p>
</div>
</div>
</div>
</section>
<section className="py-20 bg-slate-900 relative overflow-hidden text-center">
<div className="absolute inset-0 bg-green-500/10 [mask-image:radial-gradient(ellipse_at_center,white,transparent)]"></div>
<div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 relative z-10">
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Ready to Get Started?</h2>
<p className="text-base text-slate-300 mb-8 max-w-xl mx-auto">Join thousands of patients who trust us for their healthcare needs. Book your first appointment today.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-white px-6 py-3 text-base font-medium text-slate-900 hover:bg-slate-50 transition-all shadow-sm" onclick="navigate('book')">Book Appointment</button>
<button className="inline-flex items-center justify-center gap-2 rounded-lg border border-slate-700 bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-slate-800 transition-all" onclick="navigate('contact')">Contact Us</button>
</div>
</div>
</section>
</div>

<div className="page-section hidden" id="page-services">
<div className="bg-gradient-to-br from-green-50 to-white py-16 text-center border-b border-slate-200">
<div className="mx-auto max-w-3xl px-4">
<span className="text-xs font-semibold tracking-wider text-green-600 uppercase mb-3 block">Our Offerings</span>
<h1 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-4">Medical Services</h1>
<p className="text-base text-slate-600">Comprehensive, affordable healthcare designed specifically for rural families and communities.</p>
</div>
</div>
<div className="py-16">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-12">
<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 mb-3">General Consultation</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Evaluations, diagnosis of common illnesses, chronic condition management, and specialist referrals.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Health assessments</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Chronic disease management</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Prescription &amp; referrals</li>
</ul>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl">
<iconify-icon icon="solar:user-hands-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 mb-3">Maternal &amp; Child</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Support for mothers and children from pregnancy through early childhood with compassionate care.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Pre/post-natal check-ups</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Newborn screening</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Immunization programs</li>
</ul>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-8 shadow-sm">
<div className="w-12 h-12 rounded-xl bg-green-50 text-green-600 flex items-center justify-center mb-6 text-2xl">
<iconify-icon icon="solar:teeth-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-lg font-semibold text-slate-900 mb-3">Dental Services</h2>
<p className="text-sm text-slate-600 mb-6 leading-relaxed">Keep your family's smiles healthy with routine cleanings, extractions, and restorative treatments.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Cleanings &amp; scaling</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Tooth extraction</li>
<li className="flex items-center gap-3 text-sm text-slate-600"><iconify-icon className="text-green-600 shrink-0" icon="solar:check-circle-bold"></iconify-icon> Fillings &amp; restoration</li>
</ul>
</div>
</div>
<div className="text-center">
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-6 py-3 text-base font-medium text-white hover:bg-green-700 transition-all shadow-sm focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" onclick="navigate('book')">Book an Appointment</button>
</div>
</div>
</div>
</div>

<div className="page-section hidden py-12" id="page-book">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="text-center mb-10">
<h1 className="text-2xl sm:text-3xl font-semibold tracking-tight text-slate-900 mb-2">Book an Appointment</h1>
<p className="text-sm text-slate-600">Fill in the details below and we'll confirm your appointment.</p>
</div>
<div className="flex justify-center items-center gap-2 sm:gap-4 mb-10 text-sm font-medium">
<div className="flex items-center gap-2 text-green-600" id="prog-1">
<div className="w-6 h-6 rounded-full bg-green-600 text-white flex items-center justify-center text-xs">1</div>
<span className="hidden sm:inline">Patient Info</span>
</div>
<div className="w-8 sm:w-12 h-px bg-slate-200" id="prog-conn-1"></div>
<div className="flex items-center gap-2 text-slate-400" id="prog-2">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs">2</div>
<span className="hidden sm:inline">Service</span>
</div>
<div className="w-8 sm:w-12 h-px bg-slate-200" id="prog-conn-2"></div>
<div className="flex items-center gap-2 text-slate-400" id="prog-3">
<div className="w-6 h-6 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-xs">3</div>
<span className="hidden sm:inline">Review</span>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_320px] gap-8 items-start">
<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
<div className="block" id="book-step-1">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Patient Information</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="fname">First Name <span className="text-red-500">*</span></label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="fname" placeholder="Juan" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="lname">Last Name <span className="text-red-500">*</span></label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="lname" placeholder="Dela Cruz" type="text"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="dob">Date of Birth <span className="text-red-500">*</span></label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 text-slate-900" id="dob" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="gender">Gender <span className="text-red-500">*</span></label>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 appearance-none text-slate-900" id="gender">
<option value="">Select gender</option>
<option>Male</option>
<option>Female</option>
<option>Prefer not to say</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="phone">Phone Number <span className="text-red-500">*</span></label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="phone" placeholder="09XX XXX XXXX" type="tel"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="email">Email Address</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="email" placeholder="juan@example.com" type="email"/>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="address">Home Address</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="address" placeholder="Barangay, Municipality, Province" type="text"/>
</div>
</div>
<div className="mt-8 flex justify-end">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" onclick="bookNextStep(2)">Next Step <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
<div className="hidden" id="book-step-2">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Service &amp; Schedule</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="service">Service Type <span className="text-red-500">*</span></label>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 appearance-none text-slate-900" id="service" onchange="updateSummary()">
<option value="">Select a service</option>
<option>General Consultation</option>
<option>Maternal &amp; Child Health</option>
<option>Dental Services</option>
<option>Eye Care</option>
<option>Pharmacy Services</option>
<option>Laboratory &amp; Diagnostics</option>
</select>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="appt-date">Preferred Date <span className="text-red-500">*</span></label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 text-slate-900" id="appt-date" onchange="updateSummary()" type="date"/>
</div>
<div>
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="appt-time">Preferred Time <span className="text-red-500">*</span></label>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 appearance-none text-slate-900" id="appt-time" onchange="updateSummary()">
<option value="">Select time slot</option>
<option>8:00 AM</option>
<option>9:00 AM</option>
<option>10:00 AM</option>
<option>11:00 AM</option>
<option>1:00 PM</option>
<option>2:00 PM</option>
<option>3:00 PM</option>
<option>4:00 PM</option>
</select>
</div>
<div className="sm:col-span-2">
<label className="block text-sm font-medium text-slate-900 mb-1.5" htmlFor="notes">Additional Notes</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400 resize-y" id="notes" placeholder="Briefly describe your symptoms or concerns..." rows="3"></textarea>
</div>
</div>
<div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all focus:outline-none" onclick="bookNextStep(1)">Back</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2" onclick="bookNextStep(3)">Review Booking <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
<div className="hidden" id="book-step-3">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Confirm Appointment</h2>
<div className="bg-green-50 border border-green-200 rounded-xl p-4 mb-6 flex items-start gap-3">
<iconify-icon className="text-green-600 text-xl shrink-0 mt-0.5" icon="solar:info-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-sm font-semibold text-green-900 mb-1">Please review your details</div>
<div className="text-xs text-green-700">Make sure all info is correct before submitting. You'll receive a confirmation shortly.</div>
</div>
</div>
<div className="bg-slate-50 border border-slate-200 rounded-xl p-4 mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Patient Name</div>
<div className="text-sm font-semibold text-slate-900" id="review-name">—</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Phone Number</div>
<div className="text-sm font-semibold text-slate-900" id="review-phone">—</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Service</div>
<div className="text-sm font-semibold text-slate-900" id="review-service">—</div>
</div>
<div>
<div className="text-xs text-slate-500 font-medium mb-1">Date &amp; Time</div>
<div className="text-sm font-semibold text-slate-900" id="review-datetime">—</div>
</div>
</div>
<div className="mt-8 flex flex-col-reverse sm:flex-row justify-end gap-3">
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg px-5 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-100 transition-all focus:outline-none" onclick="bookNextStep(2)">Back</button>
<button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2 text-sm font-medium text-white hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2" onclick="submitAppointment()">Confirm Booking <iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</div>
</div>
<aside className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm sticky top-24">
<h3 className="text-sm font-semibold text-slate-900 mb-4 pb-4 border-b border-slate-100">Appointment Summary</h3>
<div className="space-y-4 mb-6">
<div>
<div className="text-xs text-slate-500 mb-1">Service</div>
<div className="text-sm font-medium text-slate-900 truncate" id="summary-service">Not selected</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Date</div>
<div className="text-sm font-medium text-slate-900" id="summary-date">Not selected</div>
</div>
<div>
<div className="text-xs text-slate-500 mb-1">Time</div>
<div className="text-sm font-medium text-slate-900" id="summary-time">Not selected</div>
</div>
</div>
<div className="pt-4 border-t border-slate-100 flex items-start gap-3">
<iconify-icon className="text-slate-400 mt-0.5" icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
<div>
<div className="text-xs text-slate-500 mb-0.5">Location</div>
<div className="text-xs font-medium text-slate-900 leading-tight">Main Building, Brgy. Enclaro</div>
</div>
</div>
</aside>
</div>
</div>
</div>

<div className="page-section hidden py-16" id="page-contact">
<div className="mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">
<div>
<h1 className="text-3xl font-semibold tracking-tight text-slate-900 mb-3">Get in Touch</h1>
<p className="text-base text-slate-600 mb-8">Have questions about our services or hours? Our friendly staff is ready to help.</p>
<div className="space-y-6 mb-10">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-0.5">Address</div>
<div className="text-sm font-medium text-slate-900">Rural Clinic, Brgy. Enclaro<br/>Binalbagan, Western Visayas</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-0.5">Phone</div>
<div className="text-sm font-medium text-slate-900">(555) 555-123</div>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded-lg bg-green-50 text-green-600 flex items-center justify-center shrink-0">
<iconify-icon icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-xs font-medium text-slate-500 mb-0.5">Email</div>
<div className="text-sm font-medium text-slate-900">enclaro@ruralclinic.ph</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 shadow-sm">
<h2 className="text-sm font-semibold text-slate-900 mb-4 flex items-center gap-2"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon> Clinic Hours</h2>
<div className="space-y-3">
<div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
<span className="text-slate-600">Monday – Friday</span>
<span className="font-medium text-slate-900">7:00 AM – 5:00 PM</span>
</div>
<div className="flex justify-between items-center text-sm border-b border-slate-100 pb-2">
<span className="text-slate-600">Saturday</span>
<span className="font-medium text-slate-900">8:00 AM – 12:00 PM</span>
</div>
<div className="flex justify-between items-center text-sm">
<span className="text-slate-600">Sunday</span>
<span className="text-slate-400 font-medium">Closed</span>
</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 p-6 sm:p-8 shadow-sm">
<h2 className="text-lg font-semibold text-slate-900 mb-6">Send Us a Message</h2>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="c-fname">First Name</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="c-fname" placeholder="Juan" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="c-lname">Last Name</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="c-lname" placeholder="Dela Cruz" type="text"/>
</div>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="c-email">Email Address</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="c-email" placeholder="you@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="c-subject">Subject</label>
<select className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 appearance-none text-slate-900" id="c-subject">
<option value="">Select a topic</option>
<option>Appointment Inquiry</option>
<option>Medical Records Request</option>
<option>General Question</option>
</select>
</div>
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="c-message">Message</label>
<textarea className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400 resize-y" id="c-message" placeholder="Write your message here..." rows="4"></textarea>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-5 py-2.5 text-sm font-medium text-white hover:bg-slate-800 transition-all focus:outline-none focus:ring-2 focus:ring-slate-900 focus:ring-offset-2 mt-2" onclick="submitContact()">Send Message</button>
</div>
</div>
</div>
</div>
</div>

<div className="page-section hidden" id="page-login">
<div className="min-h-[calc(100vh-4rem)] flex items-center justify-center py-12 px-4 sm:px-6 lg:px-8">
<div className="w-full max-w-md bg-white rounded-3xl border border-slate-200 p-8 shadow-xl">
<div className="text-center mb-8">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-green-600 text-white mb-4">
<span className="text-xl font-semibold tracking-tighter">RC</span>
</div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900 mb-1">Welcome Back</h1>
<p className="text-sm text-slate-500">Sign in to manage your appointments.</p>
</div>
<div className="flex p-1 bg-slate-100 rounded-lg mb-6">
<button className="login-tab-btn flex-1 py-1.5 text-sm font-medium rounded-md bg-white text-slate-900 shadow-sm transition-all focus:outline-none" onclick="switchLoginTab('patient', this)">Patient</button>
<button className="login-tab-btn flex-1 py-1.5 text-sm font-medium rounded-md text-slate-500 hover:text-slate-700 transition-all focus:outline-none" onclick="switchLoginTab('admin', this)">Staff</button>
</div>
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-slate-900 mb-1.5" htmlFor="login-email">Email Address</label>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="login-email" placeholder="you@email.com" type="email"/>
</div>
<div>
<div className="flex justify-between items-center mb-1.5">
<label className="block text-xs font-medium text-slate-900" htmlFor="login-pass">Password</label>
<a className="text-xs text-green-600 hover:underline" href="#">Forgot?</a>
</div>
<input className="w-full rounded-lg border border-slate-200 bg-white px-3 py-2 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-4 focus:ring-green-600/10 placeholder:text-slate-400" id="login-pass" placeholder="••••••••" type="password"/>
</div>
<button className="w-full inline-flex items-center justify-center gap-2 rounded-lg bg-green-600 px-5 py-2.5 text-sm font-medium text-white hover:bg-green-700 transition-all focus:outline-none focus:ring-2 focus:ring-green-600 focus:ring-offset-2 mt-2" onclick="handleLogin()">Sign In</button>
</div>
<div className="mt-8 text-center text-sm text-slate-500">
                        Don't have an account? <a className="font-medium text-green-600 hover:underline" href="#">Register</a>
</div>
</div>
</div>
</div>

<div className="page-section hidden py-10" id="page-patient">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4 mb-8">
<div>
<h1 className="text-2xl font-semibold tracking-tight text-slate-900">Hello, <span className="text-green-600">Maria</span> 👋</h1>
<p className="text-sm text-slate-500">Here's an overview of your health appointments.</p>
</div>
<button className="inline-flex items-center justify-center gap-2 rounded-lg bg-slate-900 px-4 py-2 text-sm font-medium text-white hover:bg-slate-800 transition-all" onclick="navigate('book')">
<iconify-icon icon="solar:add-circle-linear" strokeWidth="1.5"></iconify-icon> New Appointment
                    </button>
</div>
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Total</span>
<div className="w-8 h-8 rounded-md bg-green-50 text-green-600 flex items-center justify-center"><iconify-icon icon="solar:calendar-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="text-2xl font-semibold text-slate-900">8</div>
<div className="text-xs text-slate-400 mt-1">All time visits</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Upcoming</span>
<div className="w-8 h-8 rounded-md bg-sky-50 text-sky-600 flex items-center justify-center"><iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="text-2xl font-semibold text-slate-900">2</div>
<div className="text-xs text-slate-400 mt-1">Next 30 days</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Completed</span>
<div className="w-8 h-8 rounded-md bg-amber-50 text-amber-600 flex items-center justify-center"><iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="text-2xl font-semibold text-slate-900">5</div>
<div className="text-xs text-slate-400 mt-1">This year</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-4 sm:p-5 shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">Cancelled</span>
<div className="w-8 h-8 rounded-md bg-red-50 text-red-600 flex items-center justify-center"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></div>
</div>
<div className="text-2xl font-semibold text-slate-900">1</div>
<div className="text-xs text-slate-400 mt-1">This year</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-[1fr_300px] gap-6">
<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-200 flex justify-between items-center bg-slate-50/50">
<h2 className="text-sm font-semibold text-slate-900">My Appointments</h2>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50/50 text-xs text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium">Doctor / Service</th>
<th className="px-6 py-3 font-medium">Date &amp; Time</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Dr. Jan Rey</div>
<div className="text-xs text-slate-500">General Consultation</div>
</td>
<td className="px-6 py-4">
<div className="text-slate-900">Oct 18, 2024</div>
<div className="text-xs text-slate-500">10:00 AM</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmed</span>
</td>
<td className="px-6 py-4">
<button className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors" onclick="openCancelModal()">Cancel</button>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Dr. Carmina E.</div>
<div className="text-xs text-slate-500">Dental Services</div>
</td>
<td className="px-6 py-4">
<div className="text-slate-900">Oct 25, 2024</div>
<div className="text-xs text-slate-500">2:00 PM</div>
</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Pending</span>
</td>
<td className="px-6 py-4">
<button className="text-sm font-medium text-red-600 hover:text-red-800 transition-colors" onclick="openCancelModal()">Cancel</button>
</td>
</tr>
</tbody>
</table>
</div>
</div>
<aside className="bg-white rounded-2xl border border-slate-200 p-5 shadow-sm h-fit">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Actions</h3>
<div className="flex flex-col gap-2">
<button className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group" onclick="navigate('book')">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all"><iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-slate-900">Book Appointment</div>
<div className="text-xs text-slate-500">Schedule a new visit</div>
</div>
</button>
<button className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all"><iconify-icon icon="solar:clipboard-list-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-slate-900">Medical Records</div>
<div className="text-xs text-slate-500">View health history</div>
</div>
</button>
<button className="flex items-center gap-3 p-3 rounded-xl hover:bg-slate-50 transition-colors text-left group" onclick="navigate('contact')">
<div className="w-10 h-10 rounded-lg bg-slate-100 flex items-center justify-center text-slate-600 group-hover:bg-white group-hover:shadow-sm border border-transparent group-hover:border-slate-200 transition-all"><iconify-icon icon="solar:phone-calling-linear" strokeWidth="1.5"></iconify-icon></div>
<div>
<div className="text-sm font-medium text-slate-900">Contact Clinic</div>
<div className="text-xs text-slate-500">Get in touch with us</div>
</div>
</button>
</div>
</aside>
</div>
</div>
</div>

<div className="page-section hidden" id="page-admin">
<div className="bg-white border-b border-slate-200 py-4 mb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center gap-4">
<div>
<h1 className="text-xl font-semibold tracking-tight text-slate-900">Admin Overview</h1>
<div className="text-sm text-slate-500">Manage appointments and clinic operations</div>
</div>
<div className="flex gap-2">
<button className="inline-flex items-center justify-center rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm font-medium text-slate-700 hover:bg-slate-50 transition-all">Export</button>
<button className="inline-flex items-center justify-center rounded-lg bg-slate-900 px-3 py-1.5 text-sm font-medium text-white hover:bg-slate-800 transition-all">+ Add Patient</button>
</div>
</div>
</div>
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 pb-12">
<div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Today's Appts</div>
<div className="flex items-end justify-between">
<div className="text-2xl font-semibold text-slate-900">42</div>
<div className="text-xs font-medium text-green-600">+8 today</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Total Patients</div>
<div className="flex items-end justify-between">
<div className="text-2xl font-semibold text-slate-900">5.2k</div>
<div className="text-xs font-medium text-green-600">+12%</div>
</div>
</div>
<div className="bg-white rounded-xl border border-slate-200 p-5 shadow-sm">
<div className="text-xs font-semibold text-slate-500 uppercase tracking-wider mb-1">Pending</div>
<div className="flex items-end justify-between">
<div className="text-2xl font-semibold text-slate-900">14</div>
<div className="text-xs font-medium text-amber-600">Action req</div>
</div>
</div>
</div>
<div className="bg-white rounded-2xl border border-slate-200 overflow-hidden shadow-sm">
<div className="px-6 py-4 border-b border-slate-200 flex flex-col sm:flex-row justify-between items-center gap-4 bg-slate-50/50">
<h2 className="text-sm font-semibold text-slate-900">All Appointments</h2>
<div className="flex gap-2 w-full sm:w-auto">
<div className="relative w-full sm:w-64">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-slate-400" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<input className="w-full rounded-lg border border-slate-200 bg-white pl-9 pr-3 py-1.5 text-sm transition-all focus:border-green-600 focus:outline-none focus:ring-1 focus:ring-green-600 placeholder:text-slate-400" placeholder="Search patients..." type="text"/>
</div>
<select className="rounded-lg border border-slate-200 bg-white px-3 py-1.5 text-sm focus:outline-none focus:border-green-600 appearance-none text-slate-600 font-medium">
<option>All Status</option>
<option>Confirmed</option>
<option>Pending</option>
</select>
</div>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50/50 text-xs text-slate-500 font-semibold uppercase tracking-wider border-b border-slate-200">
<tr>
<th className="px-6 py-3 font-medium">Patient</th>
<th className="px-6 py-3 font-medium">Service</th>
<th className="px-6 py-3 font-medium">Date &amp; Time</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium">Actions</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100">
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Azure Baquinquito</div>
<div className="text-xs text-slate-500">0917-XXX-0001</div>
</td>
<td className="px-6 py-4 text-slate-600">General Consultation</td>
<td className="px-6 py-4 text-slate-600">Oct 18 • 10:00 AM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-green-50 px-2 py-0.5 text-xs font-medium text-green-700 ring-1 ring-inset ring-green-600/20">Confirmed</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="text-slate-400 hover:text-slate-900 transition-colors"><iconify-icon icon="solar:pen-linear" strokeWidth="1.5"></iconify-icon></button>
<button className="text-slate-400 hover:text-red-600 transition-colors"><iconify-icon icon="solar:trash-bin-trash-linear" strokeWidth="1.5"></iconify-icon></button>
</div>
</td>
</tr>
<tr className="hover:bg-slate-50 transition-colors">
<td className="px-6 py-4">
<div className="font-medium text-slate-900">Christian Balangaw</div>
<div className="text-xs text-slate-500">0917-XXX-0002</div>
</td>
<td className="px-6 py-4 text-slate-600">Dental Services</td>
<td className="px-6 py-4 text-slate-600">Oct 18 • 09:30 AM</td>
<td className="px-6 py-4">
<span className="inline-flex items-center rounded-full bg-amber-50 px-2 py-0.5 text-xs font-medium text-amber-700 ring-1 ring-inset ring-amber-600/20">Pending</span>
</td>
<td className="px-6 py-4">
<div className="flex gap-2">
<button className="text-xs font-medium text-green-600 hover:text-green-700">Approve</button>
<span className="text-slate-200">|</span>
<button className="text-xs font-medium text-slate-500 hover:text-slate-700">Reject</button>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</div>
</main>
<footer className="bg-white border-slate-200 border-t pt-16 pb-8">
<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12 gap-x-8 gap-y-8">
<div className="md:col-span-1">
<div className="text-lg font-semibold text-slate-900 tracking-tighter mb-4">Rural Health Clinic</div>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">Committed to bringing quality, accessible healthcare to rural communities. Your health is our mission.</p>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Quick Links</h3>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#home" onclick="navigate('home'); return false;">Home</a></li>
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#services" onclick="navigate('services'); return false;">Services</a></li>
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#book" onclick="navigate('book'); return false;">Book Appointment</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Services</h3>
<ul className="space-y-3 text-sm">
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#">General Consultation</a></li>
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#">Maternal &amp; Child</a></li>
<li className=""><a className="text-slate-500 hover:text-green-600 transition-colors" href="#">Dental Services</a></li>
</ul>
</div>
<div className="">
<h3 className="text-sm font-semibold text-slate-900 mb-4">Contact</h3>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex items-center gap-2"><iconify-icon icon="solar:map-point-linear"></iconify-icon> Binalbagan, Visayas</li>
<li className="flex items-center gap-2"><iconify-icon className="" icon="solar:phone-linear"></iconify-icon> (555) 555-123</li>
<li className="flex gap-x-2 gap-y-2 items-center">enclaroruralcinic@gmail.com</li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-slate-100 flex flex-col sm:flex-row justify-between items-center gap-4 text-xs text-slate-500">
<div className="">© 2024 Rural Clinic.com., All rights reserved.</div>
<div className="flex gap-4">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
<div className="hidden fixed inset-0 z-[100] bg-slate-900/40 backdrop-blur-sm flex items-center justify-center p-4" id="cancel-modal">
<div className="bg-white rounded-2xl max-w-md w-full p-6 shadow-xl relative animate-[fadeIn_0.2s_ease-out]">
<h2 className="text-lg font-semibold text-slate-900 mb-2">Cancel Appointment?</h2>
<p className="text-sm text-slate-500 mb-6">Are you sure you want to cancel this appointment? This action cannot be undone.</p>
<div className="flex justify-end gap-3">
<button className="px-4 py-2 text-sm font-medium text-slate-600 hover:text-slate-900 hover:bg-slate-50 rounded-lg transition-colors" onclick="closeCancelModal()">Keep it</button>
<button className="px-4 py-2 text-sm font-medium text-white bg-red-600 hover:bg-red-700 rounded-lg transition-colors shadow-sm" onclick="confirmCancel()">Yes, Cancel</button>
</div>
</div>
</div>
<div className="fixed bottom-6 right-6 z-[100] flex flex-col gap-3" id="toast-container"></div>


    </>
  );
}
