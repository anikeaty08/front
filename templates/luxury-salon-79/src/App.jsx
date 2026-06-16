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
serif: ['Playfair Display', 'serif'],
},
colors: {
gold: '#D4AF37',
saffron: '#FF9933',
bronze: '#CD7F32',
},
backgroundImage: {
'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
}
}
}
}



        // Dummy Data for Admin (Indian Context)
        const dummyEnquiries = [
            { id: 101, name: "Sneha Kapoor", contact: "sneha.k@gmail.com", type: "Bridal Makeup", msg: "Enquiry for Dec 15th wedding.", status: "New" },
            { id: 102, name: "Vikram R.", contact: "+91 99887 76655", type: "Hair Spa", msg: "Weekend appointment request.", status: "Contacted" },
            { id: 103, name: "Meera Iyer", contact: "meera@design.com", type: "Ayurveda Facial", msg: "Skin consultation needed.", status: "Booked" },
        ];

        function initApp() {
            renderEnquiries();
            // Init intersection observer for animations
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.opacity = '1';
                        entry.target.style.transform = 'translateY(0)';
                    }
                });
            });
            
            // Add mouse move effect for 3D cards
            // Only on desktop to avoid weird touch behavior
            if (window.matchMedia("(min-width: 768px)").matches) {
                document.querySelectorAll('.tilt-card').forEach(card => {
                    card.addEventListener('mousemove', (e) => {
                        const rect = card.getBoundingClientRect();
                        const x = e.clientX - rect.left;
                        const y = e.clientY - rect.top;
                        const centerX = rect.width / 2;
                        const centerY = rect.height / 2;
                        
                        const rotateX = ((y - centerY) / centerY) * -5; // Max -5deg to 5deg
                        const rotateY = ((x - centerX) / centerX) * 5;

                        card.style.transform = `perspective(1000px) rotateX(${rotateX}deg) rotateY(${rotateY}deg) scale3d(1.02, 1.02, 1.02)`;
                    });

                    card.addEventListener('mouseleave', () => {
                        card.style.transform = 'perspective(1000px) rotateX(0) rotateY(0) scale3d(1, 1, 1)';
                    });
                });
            }
        }

        // View Management
        function toggleAdmin() {
            const publicView = document.getElementById('public-view');
            const adminView = document.getElementById('admin-view');
            const nav = document.getElementById('public-nav');

            if (adminView.classList.contains('hidden')) {
                publicView.classList.add('hidden');
                nav.classList.add('hidden');
                adminView.classList.remove('hidden');
            } else {
                adminView.classList.add('hidden');
                publicView.classList.remove('hidden');
                nav.classList.remove('hidden');
            }
        }

        // Mobile Menu Logic
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const icon = document.getElementById('menu-icon');
            
            if (menu.classList.contains('translate-x-full')) {
                menu.classList.remove('translate-x-full');
                icon.setAttribute('icon', 'solar:close-circle-linear');
                document.body.style.overflow = 'hidden';
            } else {
                menu.classList.add('translate-x-full');
                icon.setAttribute('icon', 'solar:hamburger-menu-linear');
                document.body.style.overflow = 'auto';
            }
        }

        function switchAdminTab(tabName) {
            // Hide all tabs
            document.querySelectorAll('.admin-tab').forEach(el => el.classList.add('hidden'));
            
            // Show selected
            const selected = document.getElementById(`admin-${tabName}`);
            if(selected) selected.classList.remove('hidden');
            else document.getElementById('admin-dashboard').classList.remove('hidden'); // default
            
            // Close sidebar on mobile after click
            if(window.innerWidth < 768) {
                document.getElementById('admin-sidebar').classList.add('hidden');
            }
        }

        function renderEnquiries() {
            const tbody = document.getElementById('enquiry-table-body');
            tbody.innerHTML = dummyEnquiries.map(e => `
                <tr class="hover:bg-zinc-800/50 transition-colors">
                    <td class="px-6 py-4 text-zinc-500">#${e.id}</td>
                    <td class="px-6 py-4 text-white font-medium">${e.name}</td>
                    <td class="px-6 py-4">${e.contact}</td>
                    <td class="px-6 py-4 text-zinc-300">${e.type}</td>
                    <td class="px-6 py-4 truncate max-w-xs">${e.msg}</td>
                    <td class="px-6 py-4">
                        <span class="px-2 py-1 rounded-full text-[10px] uppercase tracking-wider 
                        ${e.status === 'New' ? 'bg-amber-500/10 text-amber-500 border border-amber-500/20' : 
                          e.status === 'Booked' ? 'bg-green-500/10 text-green-500 border border-green-500/20' : 
                          'bg-blue-500/10 text-blue-500 border border-blue-500/20'}">
                            ${e.status}
                        </span>
                    </td>
                </tr>
            `).join('');
        }

        // Modal Logic
        function openEnquiryModal(serviceName) {
            const modal = document.getElementById('enquiry-modal');
            const panel = document.getElementById('enquiry-panel');
            const input = document.getElementById('service-input');
            
            input.value = serviceName || 'General Enquiry';
            modal.classList.remove('hidden');
            
            // Small delay for animation
            setTimeout(() => {
                panel.classList.remove('translate-x-full');
            }, 10);
        }

        function closeEnquiryModal() {
            const modal = document.getElementById('enquiry-modal');
            const panel = document.getElementById('enquiry-panel');
            
            panel.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 500);
        }

        function handleEnquirySubmit(e) {
            e.preventDefault();
            closeEnquiryModal();
            
            // Show Toast
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-20', 'opacity-0');
            
            // Add to dummy data (Simulate DB)
            dummyEnquiries.unshift({
                id: Math.floor(Math.random() * 1000) + 1000,
                name: "Guest User",
                contact: "guest@example.com",
                type: document.getElementById('service-input').value,
                msg: "New website enquiry",
                status: "New"
            });
            renderEnquiries();

            setTimeout(() => {
                toast.classList.add('translate-y-20', 'opacity-0');
            }, 3000);
            
            e.target.reset();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="relative min-h-screen flex flex-col" id="app-root">

<nav className="fixed w-full z-50 glass transition-all duration-300" id="public-nav">
<div className="max-w-7xl mx-auto px-4 md:px-6 py-4 flex justify-between items-center">
<a className="flex items-center gap-2 group z-50" href="#" onclick="showPage('home')">
<div className="w-8 h-8 bg-zinc-100 text-zinc-950 flex items-center justify-center font-serif text-xl tracking-tighter rounded-sm">A</div>
<span className="text-xl font-serif tracking-tight text-zinc-100 group-hover:text-gold transition-colors">AURA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium tracking-wide">
<a className="hover:text-white transition-colors" href="#services">Menu</a>
<a className="hover:text-white transition-colors" href="#bridal">Bridal</a>
<a className="hover:text-white transition-colors" href="#locations">Studios</a>
<a className="hover:text-white transition-colors" href="#about">Heritage</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-5 py-2 rounded-full border border-zinc-700 hover:border-zinc-500 hover:bg-zinc-900 transition-all text-xs uppercase tracking-widest" onclick="openEnquiryModal('General')">
<span>Enquire</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>

<button className="md:hidden text-2xl text-white z-50 relative focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" id="menu-icon"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-zinc-950 z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center md:hidden" id="mobile-menu">
<div className="flex flex-col items-center gap-8 text-2xl font-serif text-white">
<a className="hover:text-gold transition-colors" href="#home" onclick="toggleMobileMenu()">Home</a>
<a className="hover:text-gold transition-colors" href="#services" onclick="toggleMobileMenu()">Menu</a>
<a className="hover:text-gold transition-colors" href="#bridal" onclick="toggleMobileMenu()">Bridal</a>
<a className="hover:text-gold transition-colors" href="#locations" onclick="toggleMobileMenu()">Studios</a>
</div>
<button className="mt-12 px-8 py-3 rounded-full bg-zinc-100 text-zinc-950 text-sm font-medium uppercase tracking-widest" onclick="toggleMobileMenu(); setTimeout(() =&gt; openEnquiryModal('General'), 300)">
                    Book Appointment
                </button>
</div>
</nav>

<main className="flex-grow" id="public-view">

<section className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden" id="home">

<div className="absolute inset-0 z-0">

<img alt="Indian Luxury Beauty" className="w-full h-full object-cover opacity-40 scale-105" src="https://images.unsplash.com/photo-1616165578768-245c6130d223?q=80&amp;w=2070&amp;auto=format&amp;fit=crop" style={{objectPosition: 'center 20%'}}/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/60 to-transparent"></div>
</div>
<div className="relative z-10 text-center px-4 max-w-4xl mx-auto perspective-container mt-16 md:mt-0">
<div className="mb-6 inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-800 bg-zinc-950/30 backdrop-blur-sm fade-in-up" style={{animationDelay: '0.1s'}}>
<span className="w-1.5 h-1.5 rounded-full bg-saffron"></span>
<span className="text-xs tracking-widest uppercase text-zinc-400">Premium Salon &amp; Spa</span>
</div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-serif text-white tracking-tight leading-[1.1] mb-6 fade-in-up drop-shadow-2xl" style={{animationDelay: '0.2s'}}>
                        Heritage meets <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-amber-100 to-amber-500 italic pr-2">Modernity.</span>
</h1>
<p className="text-sm md:text-lg text-zinc-400 max-w-xl mx-auto mb-10 fade-in-up leading-relaxed px-4" style={{animationDelay: '0.3s'}}>
                        Indulge in the finest Ayurvedic rituals, bridal mastery, and contemporary styling. A sanctuary of beauty inspired by Indian elegance.
                    </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4 fade-in-up px-6 md:px-0" style={{animationDelay: '0.4s'}}>
<button className="w-full md:w-auto px-8 py-4 md:py-3 bg-zinc-100 text-zinc-950 font-medium rounded-sm hover:bg-white hover:scale-105 transition-all duration-300" onclick="openEnquiryModal('Service')">
                            Book Consultation
                        </button>
<button className="w-full md:w-auto px-8 py-4 md:py-3 border border-zinc-700 text-zinc-300 font-medium rounded-sm hover:border-zinc-500 hover:text-white transition-all flex items-center justify-center gap-2">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
                            View Gallery
                        </button>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950 relative" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-12 md:mb-16">
<div>
<h2 className="text-3xl md:text-5xl font-serif text-white mb-4">The Collection</h2>
<p className="text-zinc-500 max-w-md text-sm md:text-base">Curated treatments blending tradition with innovation.</p>
</div>
<a className="text-gold hover:text-white transition-colors flex items-center gap-2 mt-6 md:mt-0 text-sm font-medium" href="#">
                            Full Menu <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 perspective-container">

<div className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer glass-panel tilt-card">
<img alt="Indian Bridal" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1595959183082-7bce70848ddb?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<div className="mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<span className="text-gold text-base md:text-lg font-serif italic">Packages from ₹25,000</span>
</div>
<h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Royal Bridal</h3>
<p className="text-zinc-400 text-xs md:text-sm line-clamp-2 group-hover:text-zinc-300">Complete bridal trousseau, HD Makeup, and intricate hair artistry.</p>
<button className="mt-6 w-full py-3 border-t border-zinc-700 text-left text-xs uppercase tracking-widest hover:text-white transition-colors flex justify-between items-center" onclick="openEnquiryModal('Bridal')">
                                    Enquire Package <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer glass-panel tilt-card">
<img alt="Ayurvedic Spa" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1600334089648-b0d9d3028eb2?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<div className="mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<span className="text-gold text-base md:text-lg font-serif italic">Starting from ₹3,500</span>
</div>
<h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Ayurveda Glow</h3>
<p className="text-zinc-400 text-xs md:text-sm line-clamp-2 group-hover:text-zinc-300">Holistic facials using saffron, turmeric, and 24k gold infused serums.</p>
<button className="mt-6 w-full py-3 border-t border-zinc-700 text-left text-xs uppercase tracking-widest hover:text-white transition-colors flex justify-between items-center" onclick="openEnquiryModal('Ayurveda')">
                                    Enquire Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>

<div className="group relative h-[400px] md:h-[450px] rounded-xl overflow-hidden cursor-pointer glass-panel tilt-card">
<img alt="Hair Treatment" className="absolute inset-0 w-full h-full object-cover opacity-60 group-hover:opacity-40 group-hover:scale-110 transition-all duration-700" src="https://images.unsplash.com/photo-1560750588-73207b1ef5b8?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/20 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6 md:p-8 w-full">
<div className="mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500 delay-100">
<span className="text-gold text-base md:text-lg font-serif italic">Starting from ₹2,000</span>
</div>
<h3 className="text-2xl md:text-3xl font-serif text-white mb-2">Kesh Hair Spa</h3>
<p className="text-zinc-400 text-xs md:text-sm line-clamp-2 group-hover:text-zinc-300">Traditional hot oil champi combined with modern keratin treatments.</p>
<button className="mt-6 w-full py-3 border-t border-zinc-700 text-left text-xs uppercase tracking-widest hover:text-white transition-colors flex justify-between items-center" onclick="openEnquiryModal('Hair Spa')">
                                    Enquire Service <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative overflow-hidden flex items-center bg-zinc-900 border-y border-zinc-800">
<div className="absolute inset-0 opacity-10 pointer-events-none">
<div className="absolute -top-40 -right-40 w-96 h-96 bg-amber-500 rounded-full blur-[100px]"></div>
<div className="absolute -bottom-40 -left-40 w-96 h-96 bg-saffron rounded-full blur-[100px]"></div>
</div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-gold text-4xl mb-6 opacity-80" icon="solar:quote-up-square-linear"></iconify-icon>
<h3 className="text-xl md:text-4xl font-serif leading-relaxed md:leading-snug text-white mb-8">
                        "Aura captured exactly what I wanted for my Sangeet. The makeup was flawless, traditional yet chic. It felt less like a salon and more like a royal retreat."
                    </h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full bg-zinc-800 border border-zinc-700 overflow-hidden shrink-0">
<img alt="Customer" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
<div className="text-left">
<p className="text-white font-medium text-sm">Ananya Singh</p>
<p className="text-xs text-zinc-500 uppercase tracking-widest">Fashion Influencer, Mumbai</p>
</div>
</div>
</div>
</section>

<section className="py-16 md:py-24 px-4 md:px-6 bg-zinc-950" id="locations">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-5xl font-serif text-white mb-12 md:mb-16 text-center">Our Studios</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-6 md:p-8 border border-zinc-800 hover:border-zinc-600 transition-colors rounded-lg bg-zinc-900/50">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-serif text-white">Mumbai</h3>
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="space-y-3 text-sm text-zinc-400">
<p>Linking Road, Bandra West</p>
<p>Mon - Sun: 10:00 AM - 09:00 PM</p>
<p className="text-white pt-2">+91 98200 12345</p>
</div>
<button className="mt-6 w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm text-white transition-colors">Get Directions</button>
</div>

<div className="p-6 md:p-8 border border-zinc-800 hover:border-zinc-600 transition-colors rounded-lg bg-zinc-900/50">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-serif text-white">New Delhi</h3>
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="space-y-3 text-sm text-zinc-400">
<p>Def Col Market, Defence Colony</p>
<p>Mon - Sat: 10:00 AM - 08:00 PM</p>
<p className="text-white pt-2">+91 11 4155 6789</p>
</div>
<button className="mt-6 w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm text-white transition-colors">Get Directions</button>
</div>

<div className="p-6 md:p-8 border border-zinc-800 hover:border-zinc-600 transition-colors rounded-lg bg-zinc-900/50">
<div className="flex justify-between items-start mb-6">
<h3 className="text-xl font-serif text-white">Bangalore</h3>
<iconify-icon className="text-zinc-500" icon="solar:map-point-linear"></iconify-icon>
</div>
<div className="space-y-3 text-sm text-zinc-400">
<p>12th Main, Indiranagar</p>
<p>Tue - Sun: 10:00 AM - 08:30 PM</p>
<p className="text-white pt-2">+91 80 4123 5678</p>
</div>
<button className="mt-6 w-full py-2 bg-zinc-800 hover:bg-zinc-700 rounded text-sm text-white transition-colors">Get Directions</button>
</div>
</div>
</div>
</section>

<footer className="border-t border-zinc-900 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2">
<h2 className="text-2xl font-serif text-white mb-6">AURA</h2>
<p className="text-zinc-500 max-w-sm mb-6 text-sm leading-relaxed">India's premier destination for luxury grooming and bridal excellence. Weaving tradition with modern care.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="#"><iconify-icon icon="solar:instagram-linear"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-zinc-900 flex items-center justify-center text-zinc-400 hover:text-white hover:bg-zinc-800 transition-all" href="#"><iconify-icon icon="solar:facebook-linear"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-white font-medium mb-4">Explore</h4>
<ul className="space-y-2 text-zinc-500 text-sm">
<li><a className="hover:text-zinc-300" href="#">Our Heritage</a></li>
<li><a className="hover:text-zinc-300" href="#">Bridal Menu</a></li>
<li><a className="hover:text-zinc-300" href="#">Gift Cards</a></li>
<li><a className="hover:text-zinc-300" href="#">Join the Team</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-zinc-500 text-sm">
<li><a className="hover:text-zinc-300" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-300" href="#">Terms of Service</a></li>

<li><button className="hover:text-amber-500 text-zinc-800 text-xs mt-4" onclick="toggleAdmin()">Admin Access</button></li>
</ul>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 pt-8 border-t border-zinc-900 text-center text-xs text-zinc-600">
                    © 2023 Aura India. All Rights Reserved.
                </div>
</footer>
</main>

<main className="hidden min-h-screen flex flex-col md:flex-row bg-zinc-950 relative" id="admin-view">

<header className="md:hidden flex items-center justify-between px-6 py-4 border-b border-zinc-800 bg-black z-20">
<span className="text-lg font-serif text-white">AURA Admin</span>
<button className="text-white" onclick="document.getElementById('admin-sidebar').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</header>

<aside className="hidden md:flex w-full md:w-64 border-b md:border-b-0 md:border-r border-zinc-800 bg-black flex-col fixed md:relative h-auto md:h-full z-10 top-[60px] md:top-0" id="admin-sidebar">
<div className="h-16 hidden md:flex items-center px-6 border-b border-zinc-800">
<span className="text-lg font-serif text-white tracking-tight">AURA <span className="text-xs font-sans text-zinc-500 ml-1">Admin</span></span>
</div>
<nav className="flex-1 p-4 space-y-1">
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-white bg-zinc-900 rounded-md group" onclick="switchAdminTab('dashboard')">
<iconify-icon className="text-zinc-400 group-hover:text-white" icon="solar:widget-linear"></iconify-icon> Dashboard
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md group" onclick="switchAdminTab('enquiries')">
<iconify-icon className="text-zinc-400 group-hover:text-white" icon="solar:inbox-linear"></iconify-icon> Enquiries
                        <span className="ml-auto bg-amber-500/10 text-amber-500 py-0.5 px-2 rounded-full text-[10px]">3</span>
</button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md group" onclick="switchAdminTab('services')">
<iconify-icon className="text-zinc-400 group-hover:text-white" icon="solar:stars-minimalistic-linear"></iconify-icon> Services
                    </button>
<button className="w-full flex items-center gap-3 px-3 py-2 text-sm font-medium text-zinc-400 hover:text-white hover:bg-zinc-900 rounded-md group" onclick="switchAdminTab('cms')">
<iconify-icon className="text-zinc-400 group-hover:text-white" icon="solar:pen-new-square-linear"></iconify-icon> CMS
                    </button>
</nav>
<div className="p-4 border-t border-zinc-800">
<button className="flex items-center gap-2 text-xs text-zinc-500 hover:text-red-400 transition-colors" onclick="toggleAdmin()">
<iconify-icon icon="solar:logout-2-linear"></iconify-icon> Logout to Site
                    </button>
</div>
</aside>

<div className="flex-1 p-4 md:p-8 overflow-y-auto">

<div className="admin-tab" id="admin-dashboard">
<header className="mb-8">
<h1 className="text-2xl font-sans text-white font-medium">Dashboard Overview</h1>
<p className="text-zinc-500 text-sm">Welcome back, Administrator.</p>
</header>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-8">

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800 rounded-lg text-amber-200">
<iconify-icon icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded">+18%</span>
</div>
<div className="text-3xl font-medium text-white mb-1">3,402</div>
<div className="text-xs text-zinc-500">Total Visits (IN)</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800 rounded-lg text-blue-200">
<iconify-icon icon="solar:letter-linear" width="24"></iconify-icon>
</div>
<span className="text-xs font-medium text-green-500 bg-green-500/10 px-2 py-1 rounded">+8%</span>
</div>
<div className="text-3xl font-medium text-white mb-1">112</div>
<div className="text-xs text-zinc-500">Bridal Enquiries</div>
</div>

<div className="p-6 rounded-xl border border-zinc-800 bg-zinc-900/50">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-zinc-800 rounded-lg text-purple-200">
<iconify-icon icon="solar:map-point-linear" width="24"></iconify-icon>
</div>
</div>
<div className="text-3xl font-medium text-white mb-1">3</div>
<div className="text-xs text-zinc-500">Studios (MUM/DEL/BLR)</div>
</div>
</div>

<div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
<div className="px-6 py-4 border-b border-zinc-800 flex justify-between items-center">
<h3 className="text-white font-medium text-sm">Recent Enquiries</h3>
<button className="text-xs text-zinc-500 hover:text-white">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-zinc-400 min-w-[600px]">
<thead className="bg-zinc-900/80 text-xs uppercase text-zinc-500">
<tr>
<th className="px-6 py-3 font-medium">Name</th>
<th className="px-6 py-3 font-medium">Service</th>
<th className="px-6 py-3 font-medium">Status</th>
<th className="px-6 py-3 font-medium text-right">Date</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800">
<tr className="hover:bg-zinc-800/50">
<td className="px-6 py-4 text-white">Priya Malhotra</td>
<td className="px-6 py-4">Full Bridal Package</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-[10px] bg-amber-500/10 text-amber-500 border border-amber-500/20">Pending</span></td>
<td className="px-6 py-4 text-right">5 mins ago</td>
</tr>
<tr className="hover:bg-zinc-800/50">
<td className="px-6 py-4 text-white">Rahul Verma</td>
<td className="px-6 py-4">Grooming &amp; Spa</td>
<td className="px-6 py-4"><span className="px-2 py-1 rounded-full text-[10px] bg-green-500/10 text-green-500 border border-green-500/20">Contacted</span></td>
<td className="px-6 py-4 text-right">2 hours ago</td>
</tr>
</tbody>
</table>
</div>
</div>
</div>

<div className="admin-tab hidden" id="admin-enquiries">
<header className="mb-8 flex flex-col md:flex-row justify-between md:items-center gap-4">
<div>
<h1 className="text-2xl font-sans text-white font-medium">Leads &amp; Enquiries</h1>
<p className="text-zinc-500 text-sm">Manage incoming requests from the website.</p>
</div>
<button className="px-4 py-2 bg-zinc-100 text-zinc-900 rounded text-sm font-medium w-full md:w-auto">Export CSV</button>
</header>
<div className="border border-zinc-800 rounded-xl bg-zinc-900/30 overflow-hidden">
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-zinc-400 min-w-[800px]">
<thead className="bg-zinc-900/80 text-xs uppercase text-zinc-500">
<tr>
<th className="px-6 py-3">ID</th>
<th className="px-6 py-3">Name</th>
<th className="px-6 py-3">Email/Phone</th>
<th className="px-6 py-3">Type</th>
<th className="px-6 py-3">Message</th>
<th className="px-6 py-3">Status</th>
</tr>
</thead>
<tbody className="divide-y divide-zinc-800" id="enquiry-table-body">

</tbody>
</table>
</div>
</div>
</div>
</div>
</main>

<div className="fixed inset-0 z-[100] hidden" id="enquiry-modal">

<div className="absolute inset-0 bg-black/80 backdrop-blur-sm transition-opacity" onclick="closeEnquiryModal()"></div>

<div className="absolute inset-y-0 right-0 max-w-md w-full bg-zinc-950 border-l border-zinc-800 shadow-2xl transform transition-transform duration-500 translate-x-full" id="enquiry-panel">
<div className="h-full flex flex-col p-6 md:p-8">
<div className="flex justify-between items-center mb-8">
<h3 className="text-2xl font-serif text-white">Request Appointment</h3>
<button className="text-zinc-500 hover:text-white" onclick="closeEnquiryModal()"><iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon></button>
</div>
<form className="space-y-5 flex-1 overflow-y-auto pr-2" onsubmit="handleEnquirySubmit(event)">
<input id="enquiry-type" name="type" type="hidden"/>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Service Interest</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" id="service-input" readonly="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Full Name</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Aditi Sharma" required="" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Phone Number</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="+91 98765 43210" required="" type="tel"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Email Address</label>
<input className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="aditi@example.com" required="" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Preferred Location</label>
<div className="grid grid-cols-3 gap-2">
<label className="cursor-pointer border border-zinc-800 rounded p-2 text-center hover:bg-zinc-900 has-[:checked]:border-amber-500 has-[:checked]:text-amber-500 transition-all">
<input checked="" className="hidden" name="location" type="radio"/>
<span className="text-xs">MUM</span>
</label>
<label className="cursor-pointer border border-zinc-800 rounded p-2 text-center hover:bg-zinc-900 has-[:checked]:border-amber-500 has-[:checked]:text-amber-500 transition-all">
<input className="hidden" name="location" type="radio"/>
<span className="text-xs">DEL</span>
</label>
<label className="cursor-pointer border border-zinc-800 rounded p-2 text-center hover:bg-zinc-900 has-[:checked]:border-amber-500 has-[:checked]:text-amber-500 transition-all">
<input className="hidden" name="location" type="radio"/>
<span className="text-xs">BLR</span>
</label>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-widest text-zinc-500 mb-2">Additional Notes</label>
<textarea className="w-full bg-zinc-900 border border-zinc-800 rounded px-4 py-3 text-white focus:border-amber-500 focus:outline-none transition-colors" placeholder="Any specific skin concerns or wedding dates..." rows="4"></textarea>
</div>
<button className="w-full bg-white text-black font-medium py-4 rounded hover:bg-zinc-200 transition-colors" type="submit">Submit Request</button>
<p className="text-xs text-zinc-600 text-center">We will contact you within 24 hours to confirm.</p>
</form>
</div>
</div>
</div>

<div className="fixed bottom-8 right-8 left-8 md:left-auto bg-white text-black px-6 py-4 rounded shadow-2xl transform translate-y-20 opacity-0 transition-all duration-300 z-[110] flex items-center gap-3" id="toast">
<iconify-icon className="text-green-600 text-xl flex-shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<div>
<h4 className="font-medium text-sm">Request Sent</h4>
<p className="text-xs text-zinc-500">We'll be in touch shortly.</p>
</div>
</div>
</div>



    </>
  );
}
