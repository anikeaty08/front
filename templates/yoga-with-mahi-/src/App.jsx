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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Header scroll effect
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm', 'border-slate-200');
                navbar.classList.remove('border-transparent');
            } else {
                navbar.classList.remove('shadow-sm', 'border-slate-200');
                navbar.classList.add('border-transparent');
            }
        });

        // Intersection Observer for fade-in animations
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries, observer) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('appear');
                    observer.unobserve(entry.target);
                }
            });
        }, observerOptions);

        document.querySelectorAll('.fade-in').forEach((element) => {
            observer.observe(element);
        });

        // Form Handling Logic (Mocking submission & storing in Admin UI)
        let enquiryCount = 48;

        function handleFormSubmit(e) {
            e.preventDefault();
            
            const name = document.getElementById('name').value;
            const email = document.getElementById('email').value;
            
            // Show Success UI
            document.getElementById('enquiry-form').style.opacity = '0';
            setTimeout(() => {
                document.getElementById('enquiry-form').style.display = 'none';
                document.getElementById('form-success').classList.remove('hidden');
                
                // Animate checkmark
                setTimeout(() => {
                    document.getElementById('success-icon').classList.remove('scale-0');
                    document.getElementById('success-icon').classList.add('scale-100');
                }, 50);
            }, 300);

            // Add to mock admin panel
            enquiryCount++;
            document.getElementById('admin-enquiry-count').innerText = enquiryCount;
            
            const tableBody = document.getElementById('admin-table-body');
            const newRow = document.createElement('tr');
            newRow.innerHTML = `
                <td class="px-6 py-4 font-medium text-slate-900">${name}</td>
                <td class="px-6 py-4">${email}</td>
                <td class="px-6 py-4 text-slate-500">Just now</td>
                <td class="px-6 py-4"><span class="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md">New</span></td>
            `;
            // Insert at top
            tableBody.insertBefore(newRow, tableBody.firstChild);
        }

        function resetForm() {
            document.getElementById('enquiry-form').reset();
            document.getElementById('form-success').classList.add('hidden');
            document.getElementById('success-icon').classList.remove('scale-100');
            document.getElementById('success-icon').classList.add('scale-0');
            document.getElementById('enquiry-form').style.display = 'block';
            setTimeout(() => {
                document.getElementById('enquiry-form').style.opacity = '1';
            }, 50);
        }

        // Toggle Admin Panel View
        function toggleAdminPanel() {
            const panel = document.getElementById('admin-panel');
            const mainContent = document.getElementById('main-content');
            const nav = document.getElementById('navbar');
            
            if (panel.classList.contains('hidden')) {
                // Show admin
                panel.classList.remove('hidden');
                document.body.style.overflow = 'hidden'; // Prevent main page scrolling
            } else {
                // Hide admin
                panel.classList.add('hidden');
                document.body.style.overflow = '';
            }
        }
    
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
      

<header className="fixed top-0 w-full z-50 bg-white/70 backdrop-blur-xl border-b border-transparent transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-medium tracking-tight flex items-center gap-2" href="#">
<iconify-icon className="text-xl text-rose-500" icon="solar:lotus-linear" strokeWidth="1.5"></iconify-icon>
                Mahi Yoga
            </a>
<nav className="hidden md:flex gap-8 text-sm font-medium text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#about">About</a>
<a className="hover:text-slate-900 transition-colors" href="#services">Services</a>
<a className="hover:text-slate-900 transition-colors" href="#instagram">Community</a>
<a className="hover:text-slate-900 transition-colors" href="#contact">Contact</a>
</nav>
<div className="flex items-center gap-4">
<a className="hidden md:inline-flex items-center justify-center px-5 py-2 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-sm hover:shadow-md hover:-translate-y-0.5" href="#contact">
                    Book Free Demo
                </a>
<button className="md:hidden text-slate-900">
<iconify-icon className="text-2xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</header>

<main id="main-content">

<section className="relative pt-32 pb-20 md:pt-48 md:pb-32 flex items-center justify-center min-h-[90vh] bg-animated-gradient overflow-hidden border-b border-slate-100">

<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-rose-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse"></div>
<div className="absolute top-1/3 right-1/4 w-96 h-96 bg-amber-200/40 rounded-full mix-blend-multiply filter blur-3xl opacity-70 animate-pulse" style={{animationDelay: '2s'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10 fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/60 border border-slate-200/60 backdrop-blur-sm text-xs font-medium text-slate-600 mb-8">
<span className="w-2 h-2 rounded-full bg-emerald-400"></span>
                    Accepting new students
                </div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-medium tracking-tight text-slate-900 mb-6 leading-tight">
                    Transform Your Mind &amp; Body <br className="hidden md:block"/>
                    with <span className="text-transparent bg-clip-text bg-gradient-to-r from-rose-500 to-amber-500">Ashtanga Yoga</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 mb-10 max-w-2xl mx-auto font-light">
                    Join YOGA WITH MAHI. Experience harmony, build strength, and find inner peace through guided online classes tailored for all levels.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-full hover:bg-slate-800 transition-all shadow-[0_8px_30px_rgb(0,0,0,0.12)] hover:shadow-[0_8px_30px_rgb(0,0,0,0.2)] hover:-translate-y-0.5 flex items-center justify-center gap-2" href="#contact">
                        Join Online Classes
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="w-full sm:w-auto px-8 py-3.5 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-all flex items-center justify-center gap-2" href="#about">
                        Learn More
                    </a>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="fade-in relative">
<div className="aspect-[4/5] bg-slate-100 rounded-2xl overflow-hidden relative">

<div className="absolute inset-0 bg-gradient-to-tr from-rose-100 to-amber-50 mix-blend-overlay"></div>
<img alt="Yoga Instructor Mahi" className="w-full h-full object-cover object-center grayscale-[20%] hover:grayscale-0 transition-all duration-700" src="https://images.unsplash.com/photo-1544367567-0f2fcb009e0b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 rounded-2xl shadow-[0_8px_30px_rgb(0,0,0,0.08)] border border-slate-100 hidden md:block">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-rose-50 rounded-full flex items-center justify-center text-rose-500">
<iconify-icon className="text-2xl" icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-2xl font-medium tracking-tight text-slate-900">10+</p>
<p className="text-xs text-slate-500 font-medium uppercase tracking-wider">Years Experience</p>
</div>
</div>
</div>
</div>
<div className="fade-in">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-6">Meet Mahi</h2>
<p className="text-slate-500 mb-6 leading-relaxed">
                            With over a decade of dedicated practice, I specialize in Ashtanga Yoga, focusing on the synchronization of breath with a progressive series of postures. My mission is to create a safe, welcoming space where individuals can explore their physical limits while nurturing their mental well-being.
                        </p>
<div className="space-y-6 mt-10">
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-amber-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-amber-600 text-lg" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Certified Instructor</h3>
<p className="text-sm text-slate-500 mt-1">Internationally recognized certification in Ashtanga Vinyasa.</p>
</div>
</div>
<div className="flex gap-4">
<div className="w-10 h-10 rounded-full bg-rose-50 flex items-center justify-center shrink-0">
<iconify-icon className="text-rose-600 text-lg" icon="solar:heart-angle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h3 className="text-base font-medium text-slate-900 tracking-tight">Holistic Approach</h3>
<p className="text-sm text-slate-500 mt-1">Integrating physical fitness, mental clarity, and spiritual growth.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-y border-slate-100" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 fade-in">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight text-slate-900 mb-4">Our Offerings</h2>
<p className="text-slate-500">Comprehensive programs designed to elevate your practice, whether you're stepping onto the mat for the first time or deepening your journey.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 fade-in cursor-default">
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-rose-50 transition-colors flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-rose-500 transition-colors" icon="solar:laptop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Online Classes</h3>
<p className="text-sm text-slate-500 leading-relaxed">Interactive, live sessions tailored for home practice with real-time feedback.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 fade-in cursor-default" style={{transitionDelay: '100ms'}}>
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-amber-50 transition-colors flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-amber-500 transition-colors" icon="solar:dumbbell-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Fitness &amp; Flexibility</h3>
<p className="text-sm text-slate-500 leading-relaxed">Targeted routines to build core strength and improve overall body mobility.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 fade-in cursor-default" style={{transitionDelay: '200ms'}}>
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-blue-50 transition-colors flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-blue-500 transition-colors" icon="solar:moon-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">Meditation</h3>
<p className="text-sm text-slate-500 leading-relaxed">Guided breathwork and mindfulness practices for mental clarity and peace.</p>
</div>

<div className="group bg-white p-8 rounded-2xl border border-slate-100 hover:border-slate-200 shadow-sm hover:shadow-[0_8px_30px_rgb(0,0,0,0.04)] transition-all duration-300 hover:-translate-y-1 fade-in cursor-default" style={{transitionDelay: '300ms'}}>
<div className="w-12 h-12 rounded-xl bg-slate-50 group-hover:bg-emerald-50 transition-colors flex items-center justify-center mb-6">
<iconify-icon className="text-2xl text-slate-600 group-hover:text-emerald-500 transition-colors" icon="solar:stairs-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-slate-900 mb-2">All Levels Program</h3>
<p className="text-sm text-slate-500 leading-relaxed">Structured courses progressing seamlessly from beginner foundations to advanced series.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="instagram">
<div className="max-w-7xl mx-auto px-6 text-center fade-in">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-rose-50 text-rose-500 mb-6">
<iconify-icon className="text-2xl" icon="solar:camera-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h2 className="text-3xl font-medium tracking-tight text-slate-900 mb-4">Join the Community</h2>
<p className="text-slate-500 mb-10">Follow our journey on Instagram for daily tips, poses, and motivation.</p>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-10">

<a className="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden block" href="#">
<img alt="Yoga Pose" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1599901860904-17e6ed7083a0?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden block" href="#">
<img alt="Meditation" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1506126613408-eca07ce68773?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:play-circle-bold" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden block" href="#">
<img alt="Studio" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1552286450-37bdf5bc39eb?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold" strokeWidth="1.5"></iconify-icon>
</div>
</a>

<a className="group relative aspect-square bg-slate-100 rounded-xl overflow-hidden block" href="#">
<img alt="Outdoors" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1510894347713-fc3ed6fdf539?w=500&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-slate-900/40 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center">
<iconify-icon className="text-white text-3xl" icon="solar:heart-bold" strokeWidth="1.5"></iconify-icon>
</div>
</a>
</div>
<a className="inline-flex items-center gap-2 px-6 py-3 text-sm font-medium text-slate-700 bg-white border border-slate-200 rounded-full hover:bg-slate-50 transition-colors" href="#" target="_blank">
                    @yogawithmahi
                </a>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-100" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="bg-white rounded-3xl border border-slate-100 shadow-[0_8px_30px_rgb(0,0,0,0.04)] overflow-hidden fade-in">
<div className="grid lg:grid-cols-5">

<div className="lg:col-span-2 bg-slate-900 text-white p-10 md:p-12 relative overflow-hidden">

<div className="absolute -top-24 -right-24 w-64 h-64 bg-white/5 rounded-full blur-2xl"></div>
<div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-black/20 to-transparent"></div>
<div className="relative z-10 h-full flex flex-col">
<h3 className="text-2xl font-medium tracking-tight mb-2">Get in Touch</h3>
<p className="text-slate-400 text-sm mb-10">Have questions about classes or want to book a free demo? Reach out to us.</p>
<div className="space-y-8 flex-grow">
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-rose-400 mt-1" icon="solar:phone-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-300 mb-1">Phone / WhatsApp</p>
<a className="text-base hover:text-white transition-colors" href="tel:+1234567890">+1 (234) 567-8900</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-amber-400 mt-1" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-300 mb-1">Email</p>
<a className="text-base hover:text-white transition-colors" href="mailto:hello@yogawithmahi.com">hello@yogawithmahi.com</a>
</div>
</div>
<div className="flex items-start gap-4">
<iconify-icon className="text-xl text-emerald-400 mt-1" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<div>
<p className="text-sm font-medium text-slate-300 mb-1">Class Timings</p>
<p className="text-base text-slate-100">Mon - Fri: 6:00 AM - 10:00 AM<br/>Sat: 7:00 AM - 9:00 AM</p>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-3 p-10 md:p-12 relative">

<div className="hidden absolute inset-0 bg-white z-10 flex flex-col items-center justify-center text-center p-8" id="form-success">
<div className="w-16 h-16 bg-emerald-50 rounded-full flex items-center justify-center text-emerald-500 mb-6 scale-0 transition-transform duration-500" id="success-icon">
<iconify-icon className="text-4xl" icon="solar:check-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-2">Enquiry Sent!</h3>
<p className="text-slate-500 text-sm max-w-sm">Thank you for reaching out. We will get back to you with class details shortly.</p>
<button className="mt-8 px-6 py-2 text-sm font-medium text-slate-600 bg-slate-100 rounded-full hover:bg-slate-200 transition-colors" onclick="resetForm()" type="button">
                                    Send another message
                                </button>
</div>
<form className="space-y-6" id="enquiry-form" onsubmit="handleFormSubmit(event)">
<h3 className="text-2xl font-medium tracking-tight text-slate-900 mb-6">Send an Enquiry</h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="name">Full Name</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:border-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 placeholder:text-slate-400" id="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="phone">Phone Number</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:border-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 placeholder:text-slate-400" id="phone" placeholder="+1 234 567 890" required="" type="tel"/>
</div>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="email">Email Address</label>
<input className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:border-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 placeholder:text-slate-400" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-2">
<label className="block text-xs font-medium text-slate-700" htmlFor="message">Message</label>
<textarea className="w-full px-4 py-3 bg-slate-50 border border-slate-200 rounded-xl text-sm transition-all focus:border-slate-900 focus:bg-white focus:ring-1 focus:ring-slate-900 placeholder:text-slate-400 resize-none" id="message" placeholder="I'm interested in the beginner online classes..." required="" rows="4"></textarea>
</div>
<button className="w-full px-8 py-3.5 text-sm font-medium text-white bg-slate-900 rounded-xl hover:bg-slate-800 transition-all shadow-sm hover:shadow-md flex justify-center items-center gap-2" type="submit">
                                    Send Enquiry
                                    <iconify-icon className="text-lg" icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-white border-t border-slate-100 py-12">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2 text-slate-900 font-medium">
<iconify-icon className="text-xl text-rose-500" icon="solar:lotus-linear" strokeWidth="1.5"></iconify-icon>
                Mahi Yoga
            </div>
<p className="text-sm text-slate-500">
                © 2023 Yoga With Mahi. All rights reserved.
            </p>
<div className="flex items-center gap-4 text-sm text-slate-500">
<a className="hover:text-slate-900 transition-colors" href="#">Privacy</a>
<a className="hover:text-slate-900 transition-colors" href="#">Terms</a>
<span className="w-1 h-1 bg-slate-300 rounded-full"></span>

<button className="hover:text-slate-900 transition-colors font-medium text-rose-500 flex items-center gap-1" onclick="toggleAdminPanel()">
<iconify-icon icon="solar:user-id-linear" strokeWidth="1.5"></iconify-icon>
                    Admin Login
                </button>
</div>
</div>
</footer>

<div className="hidden fixed inset-0 z-[100] bg-slate-100 overflow-y-auto" id="admin-panel">

<header className="bg-white border-b border-slate-200 sticky top-0 z-10">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-slate-900 text-white rounded-lg flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:shield-keyhole-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight text-slate-900">Admin Dashboard</span>
</div>
<button className="text-sm font-medium text-slate-500 hover:text-slate-900 flex items-center gap-2 px-3 py-1.5 rounded-md hover:bg-slate-50 transition-colors" onclick="toggleAdminPanel()">
<iconify-icon className="text-lg" icon="solar:close-square-linear" strokeWidth="1.5"></iconify-icon>
                    Exit Admin
                </button>
</div>
</header>
<div className="max-w-7xl mx-auto px-6 py-8">
<div className="mb-8 flex items-center justify-between">
<div>
<h2 className="text-2xl font-medium tracking-tight text-slate-900">Overview</h2>
<p className="text-sm text-slate-500 mt-1">Welcome back, Mahi. Here's what's happening today.</p>
</div>
<div className="px-3 py-1 bg-white border border-slate-200 rounded-md text-xs font-medium text-slate-600 flex items-center gap-2 shadow-sm">
<span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></span> Live Status
                </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-slate-500">Total Visitors</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:eye-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-medium tracking-tight text-slate-900">2,405</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+12%</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-slate-500">New Enquiries</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-medium tracking-tight text-slate-900" id="admin-enquiry-count">48</h3>
<span className="text-xs font-medium text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-full">+4 this week</span>
</div>
</div>
<div className="bg-white p-6 rounded-xl border border-slate-200 shadow-sm">
<div className="flex items-center justify-between mb-4">
<span className="text-sm font-medium text-slate-500">Conversion Rate</span>
<iconify-icon className="text-slate-400 text-lg" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex items-baseline gap-2">
<h3 className="text-3xl font-medium tracking-tight text-slate-900">2.1%</h3>
<span className="text-xs font-medium text-rose-600 bg-rose-50 px-2 py-0.5 rounded-full">-0.4%</span>
</div>
</div>
</div>
<div className="grid lg:grid-cols-3 gap-8">

<div className="lg:col-span-2 bg-white rounded-xl border border-slate-200 shadow-sm overflow-hidden flex flex-col">
<div className="p-6 border-b border-slate-100 flex items-center justify-between">
<h3 className="text-base font-medium text-slate-900 tracking-tight">Recent Enquiries</h3>
<button className="text-xs font-medium text-slate-500 hover:text-slate-900 transition-colors">View All</button>
</div>
<div className="overflow-x-auto flex-grow">
<table className="w-full text-left text-sm whitespace-nowrap">
<thead className="bg-slate-50/50 text-slate-500 text-xs uppercase tracking-wider">
<tr>
<th className="px-6 py-3 font-medium">Name</th>
<th className="px-6 py-3 font-medium">Contact</th>
<th className="px-6 py-3 font-medium">Date</th>
<th className="px-6 py-3 font-medium">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100 text-slate-700" id="admin-table-body">
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Sarah Jenkins</td>
<td className="px-6 py-4">sarah.j@example.com</td>
<td className="px-6 py-4 text-slate-500">Today, 10:42 AM</td>
<td className="px-6 py-4"><span className="px-2.5 py-1 bg-amber-50 text-amber-700 text-xs font-medium rounded-md">New</span></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Michael Chen</td>
<td className="px-6 py-4">+1 234 567 890</td>
<td className="px-6 py-4 text-slate-500">Yesterday</td>
<td className="px-6 py-4"><span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md">Contacted</span></td>
</tr>
<tr>
<td className="px-6 py-4 font-medium text-slate-900">Emma Watson</td>
<td className="px-6 py-4">emma.w@example.com</td>
<td className="px-6 py-4 text-slate-500">Oct 24, 2023</td>
<td className="px-6 py-4"><span className="px-2.5 py-1 bg-emerald-50 text-emerald-700 text-xs font-medium rounded-md">Contacted</span></td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="bg-white rounded-xl border border-slate-200 shadow-sm p-6">
<h3 className="text-base font-medium text-slate-900 tracking-tight mb-6">Weekly Views</h3>
<div className="h-48 flex items-end justify-between gap-2">

<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-200 rounded-t-sm bar-animate" style={{height: '40%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">M</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-200 rounded-t-sm bar-animate" style={{height: '60%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">T</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-300 rounded-t-sm bar-animate" style={{height: '80%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">W</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-200 rounded-t-sm bar-animate" style={{height: '50%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">T</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-400 rounded-t-sm bar-animate" style={{height: '100%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400 font-medium text-slate-900">F</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-200 rounded-t-sm bar-animate" style={{height: '30%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">S</span>
</div>
<div className="w-full bg-slate-100 rounded-t-sm relative group">
<div className="absolute bottom-0 w-full bg-rose-200 rounded-t-sm bar-animate" style={{height: '20%'}}></div>
<span className="absolute -bottom-6 left-1/2 -translate-x-1/2 text-xs text-slate-400">S</span>
</div>
</div>
</div>
</div>
</div>
</div>



    </>
  );
}
