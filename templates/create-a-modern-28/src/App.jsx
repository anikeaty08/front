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
dental: {
50: '#f0fdfa',
100: '#ccfbf1',
200: '#99f6e4',
300: '#5eead4',
400: '#2dd4bf',
500: '#14b8a6',
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in': 'fadeIn 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
},
fadeIn: {
'0%': { opacity: '0', transform: 'translateY(10px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Data Store (Simulating Backend)
        const servicesData = {
            'cleaning': {
                title: 'Teeth Cleaning',
                price: '$99',
                desc: 'Comprehensive cleaning to remove plaque and tartar.',
                icon: 'solar:waterdrops-linear',
                features: ['Ultrasonic Scaling', 'Polishing', 'Fluoride Treatment']
            },
            'implants': {
                title: 'Dental Implants',
                price: '$2,000+',
                desc: 'Permanent solution for missing teeth with titanium posts.',
                icon: 'solar:screw-linear',
                features: ['3D CT Scan', 'Titanium Implant', 'Custom Crown']
            },
            'whitening': {
                title: 'Teeth Whitening',
                price: '$299',
                desc: 'Laser whitening treatment for instant results.',
                icon: 'solar:stars-linear',
                features: ['Gum Protection', 'Laser Activation', 'Desensitizing Gel']
            },
            'rootcanal': {
                title: 'Root Canal',
                price: '$500+',
                desc: 'Save your natural tooth and eliminate pain.',
                icon: 'solar:heart-pulse-linear',
                features: ['Local Anesthesia', 'Pulp Removal', 'Crown Fitting']
            },
            'braces': {
                title: 'Braces & Aligners',
                price: '$3,500+',
                desc: 'Straighten teeth with clear aligners or ceramic braces.',
                icon: 'solar:smile-circle-linear',
                features: ['Digital Impression', 'Monthly Adjustments', 'Retainers']
            },
            'kids': {
                title: 'Kids Dentistry',
                price: '$80',
                desc: 'Gentle care specialized for young teeth.',
                icon: 'solar:face-scan-circle-linear',
                features: ['Cavity Prevention', 'Sealants', 'Education']
            }
        };

        // Initialize Local Storage for Bookings
        if (!localStorage.getItem('bookings')) {
            const initialBookings = [
                { name: 'Alice Freeman', service: 'Whitening', date: '2023-11-12', status: 'Confirmed' },
                { name: 'Robert Wolf', service: 'Root Canal', date: '2023-11-14', status: 'Pending' }
            ];
            localStorage.setItem('bookings', JSON.stringify(initialBookings));
        }

        // Modal Logic
        function openServiceModal(serviceKey) {
            const modal = document.getElementById('serviceModal');
            const content = document.getElementById('modalContent');
            const details = document.getElementById('modalDetails');
            const data = servicesData[serviceKey];

            details.innerHTML = `
                <div class="w-16 h-16 bg-dental-50 rounded-2xl flex items-center justify-center text-dental-600 mb-6">
                    <iconify-icon icon="${data.icon}" width="32"></iconify-icon>
                </div>
                <h2 class="text-2xl font-medium text-slate-900 mb-2">${data.title}</h2>
                <p class="text-xl font-semibold text-dental-600 mb-4">${data.price}</p>
                <p class="text-slate-500 leading-relaxed mb-8 font-light">${data.desc}</p>
                
                <h3 class="text-sm font-semibold uppercase tracking-wider text-slate-400 mb-4">What's Included</h3>
                <ul class="space-y-3 mb-8">
                    ${data.features.map(f => `
                        <li class="flex items-center gap-3 text-slate-600 text-sm">
                            <iconify-icon icon="solar:check-circle-linear" class="text-dental-500"></iconify-icon>
                            ${f}
                        </li>
                    `).join('')}
                </ul>

                <a href="#booking" onclick="closeServiceModal(); document.getElementById('pService').value='${data.title.split(' ')[0]}'" class="block w-full bg-slate-900 text-white text-center py-4 rounded-xl font-medium hover:bg-slate-800 transition-colors">
                    Book This Service
                </a>
            `;

            modal.classList.remove('hidden');
            setTimeout(() => {
                content.classList.remove('translate-x-full');
            }, 10);
        }

        function closeServiceModal() {
            const modal = document.getElementById('serviceModal');
            const content = document.getElementById('modalContent');
            content.classList.add('translate-x-full');
            setTimeout(() => {
                modal.classList.add('hidden');
            }, 300);
        }

        // Booking Logic
        function handleBooking(e) {
            e.preventDefault();
            const name = document.getElementById('pName').value;
            const service = document.getElementById('pService').value;
            const date = document.getElementById('pDate').value;

            const newBooking = {
                name, 
                service, 
                date, 
                status: 'Pending'
            };

            const bookings = JSON.parse(localStorage.getItem('bookings'));
            bookings.unshift(newBooking);
            localStorage.setItem('bookings', JSON.stringify(bookings));

            // Reset form
            e.target.reset();

            // Show Toast
            const toast = document.getElementById('toast');
            toast.classList.remove('translate-y-24');
            setTimeout(() => {
                toast.classList.add('translate-y-24');
            }, 3000);

            // Update Admin Panel if open
            renderAdminTable();
        }

        // Admin Panel Logic
        function toggleAdmin() {
            const panel = document.getElementById('admin-panel');
            panel.classList.toggle('hidden');
            if (!panel.classList.contains('hidden')) {
                renderAdminTable();
            }
        }

        function renderAdminTable() {
            const tbody = document.getElementById('adminTableBody');
            const bookings = JSON.parse(localStorage.getItem('bookings'));
            document.getElementById('totalBookings').innerText = bookings.length;

            tbody.innerHTML = bookings.map((b, index) => `
                <tr class="hover:bg-slate-50 transition-colors">
                    <td class="px-6 py-4 font-medium text-slate-900">${b.name}</td>
                    <td class="px-6 py-4">${b.service}</td>
                    <td class="px-6 py-4">${b.date}</td>
                    <td class="px-6 py-4">
                        <span class="px-3 py-1 rounded-full text-xs font-medium ${b.status === 'Confirmed' ? 'bg-green-50 text-green-600' : 'bg-orange-50 text-orange-600'}">
                            ${b.status}
                        </span>
                    </td>
                    <td class="px-6 py-4">
                        <button onclick="approveBooking(${index})" class="text-dental-600 hover:text-dental-800 text-xs font-medium uppercase tracking-wide">Approve</button>
                    </td>
                </tr>
            `).join('');
        }

        function approveBooking(index) {
            const bookings = JSON.parse(localStorage.getItem('bookings'));
            bookings[index].status = 'Confirmed';
            localStorage.setItem('bookings', JSON.stringify(bookings));
            renderAdminTable();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 z-50 glass">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">
<div className="flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-gradient-to-br from-dental-400 to-dental-600 rounded-lg flex items-center justify-center text-white shadow-lg shadow-dental-200">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight text-slate-800">DENTICARE</span>
</div>
<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-normal text-slate-600 hover:text-dental-600 transition-colors" href="#about">About</a>
<a className="text-sm font-normal text-slate-600 hover:text-dental-600 transition-colors" href="#services">Services</a>
<a className="text-sm font-normal text-slate-600 hover:text-dental-600 transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-normal text-slate-600 hover:text-dental-600 transition-colors" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:flex text-xs text-slate-400 hover:text-slate-800 uppercase tracking-wider font-medium" onclick="toggleAdmin()">
                        Staff Login
                    </button>
<a className="bg-slate-900 text-white px-5 py-2.5 rounded-full text-sm font-medium hover:bg-slate-800 transition-all shadow-lg shadow-slate-200 flex items-center gap-2" href="#booking">
                        Book Appointment
                        <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>
</div>
</nav>

<main className="pt-16" id="client-view">

<section className="relative min-h-[90vh] flex items-center overflow-hidden bg-gradient-to-b from-slate-50 to-dental-50/30">

<div className="absolute top-20 right-0 w-[500px] h-[500px] bg-dental-200/20 rounded-full blur-3xl -translate-y-1/2 translate-x-1/3"></div>
<div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-blue-200/20 rounded-full blur-3xl translate-y-1/3 -translate-x-1/4"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div className="space-y-8 animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-slate-100 shadow-sm text-xs font-medium text-dental-600 tracking-wide uppercase">
<span className="w-2 h-2 rounded-full bg-dental-500 animate-pulse"></span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-medium text-slate-900 tracking-tight leading-[1.1]">
                        Book Your Perfect <span className="text-transparent bg-clip-text bg-gradient-to-r from-dental-500 to-blue-500">Smile</span> Appointment.
                    </h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light">
                        Experience painless, 3D-guided dentistry. From checkups to implants, schedule your visit in less than 2 minutes online.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-dental-600 text-white px-8 py-4 rounded-2xl text-base font-medium hover:bg-dental-700 transition-all shadow-xl shadow-dental-200 flex items-center justify-center gap-2 hover:-translate-y-1" href="#booking">
<iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
                            Book Visit Now
                        </a>
<a className="bg-white text-slate-700 border border-slate-200 px-8 py-4 rounded-2xl text-base font-medium hover:bg-slate-50 transition-all flex items-center justify-center gap-2 hover:-translate-y-1" href="tel:+1234567890">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                            Emergency Call
                        </a>
</div>
<div className="flex items-center gap-6 pt-4">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=5"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white object-cover" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-slate-100 flex items-center justify-center text-xs font-medium text-slate-600">+2k</div>
</div>
<div className="flex flex-col">
<div className="flex text-yellow-400 text-sm">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-xs text-slate-500 font-medium">Trusted by 2,000+ Happy Smiles</span>
</div>
</div>
</div>

<div className="relative h-[500px] w-full flex items-center justify-center lg:justify-end">
<div className="relative w-full h-full animate-float">

<img alt="3D Dental Chair" className="w-full h-full object-contain drop-shadow-2xl relative z-10 mask-image-gradient" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800&amp;png=1"/>

<div className="absolute top-1/4 -left-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce z-20 max-w-[180px]" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-green-100 text-green-600 rounded-lg">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Success Rate</p>
<p className="text-lg font-semibold text-slate-800 tracking-tight">99.8%</p>
</div>
</div>
</div>
<div className="absolute bottom-1/4 -right-4 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-lg border border-white/50 animate-bounce z-20 max-w-[200px]" style={{animationDuration: '4s'}}>
<div className="flex items-center gap-3">
<div className="p-2 bg-blue-100 text-blue-600 rounded-lg">
<iconify-icon icon="solar:user-id-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-xs text-slate-500">Expert Doctors</p>
<p className="text-sm font-medium text-slate-800">Top 1% Certified</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-sm font-semibold text-dental-600 tracking-widest uppercase mb-3">Our Expertise</h2>
<h3 className="text-3xl md:text-4xl font-medium text-slate-900 tracking-tight mb-4">World-Class Dental Services</h3>
<p className="text-slate-500 font-light">Comprehensive care utilizing the latest 3D scanning and painless technology.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('cleaning')">
<div className="absolute top-0 right-0 p-6 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon className="text-dental-500" icon="solar:medical-kit-linear" width="100"></iconify-icon>
</div>
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-dental-600 shadow-sm mb-6 group-hover:bg-dental-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:waterdrops-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Teeth Cleaning</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Professional scaling and polishing to remove plaque and ensure gum health.</p>
<span className="text-sm font-medium text-dental-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('implants')">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-blue-600 shadow-sm mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:screw-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Dental Implants</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Permanent, natural-looking solution for missing teeth with 3D guided surgery.</p>
<span className="text-sm font-medium text-blue-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('whitening')">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-indigo-600 shadow-sm mb-6 group-hover:bg-indigo-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:stars-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Teeth Whitening</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Advanced laser whitening to brighten your smile up to 8 shades in one hour.</p>
<span className="text-sm font-medium text-indigo-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('rootcanal')">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-rose-600 shadow-sm mb-6 group-hover:bg-rose-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Root Canal</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Save your natural tooth with our microscope-enhanced painless procedure.</p>
<span className="text-sm font-medium text-rose-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('braces')">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-teal-600 shadow-sm mb-6 group-hover:bg-teal-600 group-hover:text-white transition-colors">
<iconify-icon icon="solar:smile-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Aligners &amp; Braces</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Invisible aligners and ceramic braces for straight teeth at any age.</p>
<span className="text-sm font-medium text-teal-600 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>

<div className="group p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-dental-200 hover:shadow-xl hover:shadow-dental-100/50 transition-all cursor-pointer relative overflow-hidden" onclick="openServiceModal('kids')">
<div className="w-14 h-14 bg-white rounded-2xl flex items-center justify-center text-orange-500 shadow-sm mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="solar:face-scan-circle-linear" width="32"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-slate-900 mb-2">Kids Dentistry</h4>
<p className="text-sm text-slate-500 leading-relaxed mb-6">Fun, fear-free dental visits for children with specialized pediatric care.</p>
<span className="text-sm font-medium text-orange-500 flex items-center gap-1 group-hover:gap-2 transition-all">
                            Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="booking">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-12">

<div className="lg:col-span-5 space-y-8">
<div>
<h2 className="text-3xl font-medium text-slate-900 tracking-tight mb-4">Book Your Appointment</h2>
<p className="text-slate-500 font-light">Select a service and choose your preferred time slot. We will confirm your appointment via email shortly.</p>
</div>
<div className="glass-card p-6 rounded-3xl">
<div className="flex items-center justify-between mb-6">
<h3 className="font-medium text-slate-800">Available Slots</h3>
<div className="flex gap-2">
<span className="w-2 h-2 rounded-full bg-dental-500"></span> <span className="text-xs text-slate-500">Open</span>
<span className="w-2 h-2 rounded-full bg-slate-200"></span> <span className="text-xs text-slate-500">Booked</span>
</div>
</div>

<div className="grid grid-cols-7 gap-2 text-center text-xs text-slate-400 mb-2">
<div>Mon</div><div>Tue</div><div>Wed</div><div>Thu</div><div>Fri</div><div>Sat</div><div>Sun</div>
</div>
<div className="grid grid-cols-7 gap-2">

<div className="aspect-square flex items-center justify-center rounded-lg text-slate-300">28</div>
<div className="aspect-square flex items-center justify-center rounded-lg text-slate-300">29</div>
<div className="aspect-square flex items-center justify-center rounded-lg text-slate-300">30</div>
<div className="aspect-square flex items-center justify-center rounded-lg text-slate-300">31</div>
<div className="aspect-square bg-slate-200 rounded-lg flex items-center justify-center text-slate-400 cursor-not-allowed">1</div>
<div className="aspect-square bg-dental-50 text-dental-700 rounded-lg flex items-center justify-center border border-dental-200 font-medium cursor-pointer hover:bg-dental-500 hover:text-white transition-colors">2</div>
<div className="aspect-square bg-white border border-slate-100 rounded-lg flex items-center justify-center text-slate-600 hover:border-dental-300 cursor-pointer">3</div>

</div>
</div>
<div className="bg-blue-50 p-6 rounded-3xl border border-blue-100 flex gap-4">
<div className="text-blue-500 mt-1">
<iconify-icon icon="solar:info-circle-linear" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-blue-900">Insurance Accepted</h4>
<p className="text-xs text-blue-700 mt-1 leading-relaxed">We partner with all major insurance providers including Delta Dental, Cigna, and Aetna.</p>
</div>
</div>
</div>

<div className="lg:col-span-7">
<form className="glass-card p-8 md:p-10 rounded-[2rem] shadow-xl shadow-slate-200/50" id="bookingForm" onsubmit="handleBooking(event)">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Full Name</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field placeholder:text-slate-300" id="pName" placeholder="John Doe" required="" type="text"/>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Phone Number</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field placeholder:text-slate-300" id="pPhone" placeholder="+1 (555) 000-0000" required="" type="tel"/>
</div>
</div>
<div className="mb-6 space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Email Address</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field placeholder:text-slate-300" id="pEmail" placeholder="john@example.com" required="" type="email"/>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Service</label>
<div className="relative">
<select className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field appearance-none cursor-pointer" id="pService">
<option value="Cleaning">Teeth Cleaning ($99)</option>
<option value="Whitening">Teeth Whitening ($299)</option>
<option value="Root Canal">Root Canal ($500+)</option>
<option value="Implants">Dental Implants (Consult)</option>
<option value="Checkup">General Checkup ($50)</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Preferred Date</label>
<input className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field" id="pDate" required="" type="date"/>
</div>
</div>
<div className="mb-8 space-y-2">
<label className="text-xs font-semibold uppercase tracking-wider text-slate-500">Message (Optional)</label>
<textarea className="w-full bg-slate-50 border border-slate-200 rounded-xl px-4 py-3 text-slate-700 input-field placeholder:text-slate-300 resize-none" id="pMessage" placeholder="Any specific concerns or questions?" rows="3"></textarea>
</div>
<button className="w-full bg-slate-900 text-white font-medium py-4 rounded-xl shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all flex items-center justify-center gap-2 group" type="submit">
                                Confirm Booking
                                <iconify-icon className="group-hover:text-dental-400 transition-colors" icon="solar:check-circle-linear" width="20"></iconify-icon>
</button>
<p className="text-center text-xs text-slate-400 mt-4">By booking, you agree to our privacy policy and terms.</p>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex items-center justify-between mb-12">
<h2 className="text-3xl font-medium tracking-tight">Patient Stories</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50"><iconify-icon icon="solar:arrow-left-linear"></iconify-icon></button>
<button className="w-10 h-10 rounded-full bg-slate-900 text-white flex items-center justify-center hover:bg-slate-800"><iconify-icon icon="solar:arrow-right-linear"></iconify-icon></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-slate-50 p-8 rounded-3xl relative">
<iconify-icon className="text-dental-200 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-light italic">"I was terrified of dentists until I came here. The 3D scan explained everything so clearly, and the procedure was completely painless."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 font-bold">S</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Sarah Jenkins</h5>
<p className="text-xs text-slate-400">Root Canal Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<iconify-icon className="text-dental-200 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-light italic">"Incredible facility. It feels more like a spa than a clinic. The teeth whitening results were instant. Highly recommended!"</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-teal-100 flex items-center justify-center text-teal-600 font-bold">M</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Mike Ross</h5>
<p className="text-xs text-slate-400">Whitening Patient</p>
</div>
</div>
</div>

<div className="bg-slate-50 p-8 rounded-3xl relative">
<iconify-icon className="text-dental-200 absolute top-6 right-6" icon="solar:quote-up-square-linear" width="48"></iconify-icon>
<div className="flex gap-1 text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 font-light italic">"My kids actually love coming here. The pediatric dentists are amazing with children. Best family dentist in town."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">E</div>
<div>
<h5 className="text-sm font-semibold text-slate-900">Emily Blunt</h5>
<p className="text-xs text-slate-400">Family Care</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 text-white pt-20 pb-10" id="contact">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
<div>
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-dental-500 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:health-linear" width="20"></iconify-icon>
</div>
<span className="text-xl font-medium tracking-tight">DENTICARE</span>
</div>
<p className="text-slate-400 text-sm leading-relaxed mb-6">Combining art and science to create healthy, beautiful smiles with modern 3D technology.</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-dental-600 transition-colors" href="#"><iconify-icon icon="akar-icons:instagram-fill"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-dental-600 transition-colors" href="#"><iconify-icon icon="akar-icons:facebook-fill"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center hover:bg-dental-600 transition-colors" href="#"><iconify-icon icon="akar-icons:twitter-fill"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-lg font-medium mb-6">Quick Links</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Our Services</a></li>
<li><a className="hover:text-white transition-colors" href="#">Before &amp; After</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-6">Contact</h4>
<ul className="space-y-4 text-sm text-slate-400">
<li className="flex items-start gap-3">
<iconify-icon className="mt-1 shrink-0" icon="solar:map-point-linear"></iconify-icon>
<span>123 Medical Center Dr,<br/>Suite 400, NY 10001</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:phone-calling-linear"></iconify-icon>
<span>+1 (555) 123-4567</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="shrink-0" icon="solar:letter-linear"></iconify-icon>
<span>hello@denticare.com</span>
</li>
</ul>
</div>
<div>
<h4 className="text-lg font-medium mb-6">Working Hours</h4>
<ul className="space-y-3 text-sm text-slate-400">
<li className="flex justify-between"><span>Mon - Fri</span> <span>9:00 AM - 7:00 PM</span></li>
<li className="flex justify-between"><span>Saturday</span> <span>10:00 AM - 4:00 PM</span></li>
<li className="flex justify-between text-dental-500"><span>Sunday</span> <span>Emergency Only</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-500">
<p>© 2023 Denticare Clinic. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white" href="#">Privacy Policy</a>
<a className="hover:text-white" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>
</main>

<div className="fixed inset-0 bg-slate-50 z-[100] hidden overflow-y-auto" id="admin-panel">

<div className="fixed left-0 top-0 h-full w-64 bg-slate-900 text-white p-6 hidden md:block">
<div className="flex items-center gap-2 mb-10">
<div className="w-8 h-8 bg-dental-500 rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<span className="text-lg font-medium tracking-tight">Admin Portal</span>
</div>
<div className="space-y-2">
<button className="w-full flex items-center gap-3 px-4 py-3 bg-slate-800 rounded-xl text-sm font-medium text-white">
<iconify-icon icon="solar:widget-2-linear" width="20"></iconify-icon> Dashboard
                </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl text-sm font-medium transition-colors">
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon> Appointments
                </button>
<button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white hover:bg-slate-800 rounded-xl text-sm font-medium transition-colors">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon> Patients
                </button>
</div>
<button className="absolute bottom-8 left-6 right-6 flex items-center justify-center gap-2 px-4 py-3 border border-slate-700 rounded-xl text-sm hover:bg-slate-800 transition-colors" onclick="toggleAdmin()">
<iconify-icon icon="solar:logout-linear"></iconify-icon> Logout
            </button>
</div>

<div className="md:ml-64 p-8">
<div className="max-w-6xl mx-auto">
<header className="flex justify-between items-center mb-10">
<div>
<h1 className="text-2xl font-medium text-slate-900">Dashboard Overview</h1>
<p className="text-sm text-slate-500">Welcome back, Dr. Smith</p>
</div>
<div className="flex gap-4">
<button className="p-2 bg-white border border-slate-200 rounded-lg text-slate-500 hover:text-dental-600">
<iconify-icon icon="solar:bell-linear" width="20"></iconify-icon>
</button>
<div className="h-10 w-10 bg-dental-100 rounded-full flex items-center justify-center text-dental-700 font-bold border border-dental-200">
                            DR
                        </div>
</div>
</header>

<div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-10">
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-blue-50 text-blue-600 rounded-xl"><iconify-icon icon="solar:calendar-add-linear" width="24"></iconify-icon></div>
<span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full">+12%</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-1" id="totalBookings">124</h3>
<p className="text-xs text-slate-400">Total Appointments</p>
</div>
<div className="bg-white p-6 rounded-2xl border border-slate-100 shadow-sm">
<div className="flex justify-between items-start mb-4">
<div className="p-3 bg-teal-50 text-teal-600 rounded-xl"><iconify-icon icon="solar:wallet-linear" width="24"></iconify-icon></div>
<span className="text-xs text-green-500 bg-green-50 px-2 py-1 rounded-full">+5%</span>
</div>
<h3 className="text-2xl font-semibold text-slate-900 mb-1">$12.4k</h3>
<p className="text-xs text-slate-400">Monthly Revenue</p>
</div>
</div>

<div className="bg-white rounded-3xl border border-slate-100 shadow-sm overflow-hidden">
<div className="p-6 border-b border-slate-100 flex justify-between items-center">
<h3 className="font-medium text-slate-900">Recent Appointments</h3>
<button className="text-xs text-dental-600 font-medium hover:underline">View All</button>
</div>
<div className="overflow-x-auto">
<table className="w-full text-left text-sm text-slate-600">
<thead className="bg-slate-50 text-slate-400 font-medium text-xs uppercase tracking-wider">
<tr>
<th className="px-6 py-4">Patient</th>
<th className="px-6 py-4">Service</th>
<th className="px-6 py-4">Date</th>
<th className="px-6 py-4">Status</th>
<th className="px-6 py-4">Action</th>
</tr>
</thead>
<tbody className="divide-y divide-slate-100" id="adminTableBody">

</tbody>
</table>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 z-[60] hidden" id="serviceModal">
<div className="absolute inset-0 bg-slate-900/40 backdrop-blur-sm transition-opacity" onclick="closeServiceModal()"></div>
<div className="absolute inset-y-0 right-0 w-full max-w-md bg-white shadow-2xl p-8 transform transition-transform translate-x-full duration-300 overflow-y-auto" id="modalContent">
<button className="absolute top-6 right-6 p-2 rounded-full hover:bg-slate-100 text-slate-400" onclick="closeServiceModal()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="mt-8" id="modalDetails">

</div>
</div>
</div>

<div className="fixed bottom-6 right-6 bg-slate-900 text-white px-6 py-4 rounded-xl shadow-2xl transform translate-y-24 transition-transform duration-300 z-[70] flex items-center gap-3" id="toast">
<iconify-icon className="text-dental-400" icon="solar:check-circle-bold" width="24"></iconify-icon>
<div>
<h4 className="font-medium text-sm">Success!</h4>
<p className="text-xs text-slate-400">Appointment booked successfully.</p>
</div>
</div>


    </>
  );
}
