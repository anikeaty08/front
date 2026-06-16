import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
gold: '#9E8760',
goldhover: '#8A7553',
teal: '#00acad',
dark: '#1a1a1a',
light: '#f9f9f8', // Warm sterile white
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
serif: ['Playfair Display', 'serif'],
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        // Navbar Scrolled State
        const navbar = document.getElementById('navbar');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-md');
                navbar.classList.replace('h-20', 'h-16');
            } else {
                navbar.classList.remove('shadow-md');
                navbar.classList.replace('h-16', 'h-20');
            }
        });

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Chatbot Logic (Simple Simulation)
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const closeChat = document.getElementById('close-chat');
        const chatForm = document.getElementById('chat-form');
        const chatInput = chatForm.querySelector('input');
        const chatMessages = document.getElementById('chat-messages');

        function toggleChat() {
            chatWindow.classList.toggle('hidden');
            if(!chatWindow.classList.contains('hidden')){
                setTimeout(() => chatInput.focus(), 100);
            }
        }

        chatToggle.addEventListener('click', toggleChat);
        closeChat.addEventListener('click', toggleChat);

        // Simulated Chat Interaction
        const appendMessage = (text, isUser = false) => {
            const msgDiv = document.createElement('div');
            msgDiv.className = `flex gap-3 ${isUser ? 'flex-row-reverse' : ''}`;
            
            const avatar = isUser 
                ? `<div class="w-8 h-8 rounded-full bg-brand-gold flex-shrink-0 flex items-center justify-center"><iconify-icon icon="solar:user-linear" class="text-white"></iconify-icon></div>`
                : `<div class="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center"><iconify-icon icon="solar:robot-linear" class="text-stone-600"></iconify-icon></div>`;

            const bubble = `<div class="${isUser ? 'bg-brand-gold text-white' : 'bg-white text-stone-600 border border-stone-100'} p-3 rounded-2xl ${isUser ? 'rounded-tr-none' : 'rounded-tl-none'} shadow-sm text-sm">
                ${text}
            </div>`;

            msgDiv.innerHTML = avatar + bubble;
            chatMessages.appendChild(msgDiv);
            chatMessages.scrollTop = chatMessages.scrollHeight; // Auto scroll
        }

        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if(!text) return;

            appendMessage(text, true);
            chatInput.value = '';

            // Simulate Bot Typing/Reply
            setTimeout(() => {
                appendMessage("Thanks for your message. Would you like me to arrange a callback from our reception team to discuss this further?");
                
                // Add Lead Capture Form in Chat
                setTimeout(() => {
                    const formHtml = `
                        <div class="bg-white p-4 rounded-xl border border-stone-100 shadow-sm w-full max-w-[240px]">
                            <p class="text-xs font-bold text-stone-700 mb-2">Leave your details:</p>
                            <input type="text" placeholder="Name" class="w-full text-xs bg-stone-50 border border-stone-200 rounded p-2 mb-2">
                            <input type="tel" placeholder="Phone" class="w-full text-xs bg-stone-50 border border-stone-200 rounded p-2 mb-2">
                            <button class="w-full bg-brand-teal text-white text-xs font-bold py-2 rounded">Request Callback</button>
                        </div>
                    `;
                    const formDiv = document.createElement('div');
                    formDiv.className = "flex gap-3 pl-11";
                    formDiv.innerHTML = formHtml;
                    chatMessages.appendChild(formDiv);
                    chatMessages.scrollTop = chatMessages.scrollHeight;
                }, 800);

            }, 1000);
        });

        // Handle Chip Clicks
        document.querySelectorAll('.chat-chip').forEach(btn => {
            btn.addEventListener('click', function() {
                const text = this.innerText;
                appendMessage(text, true);
                setTimeout(() => {
                    if(text.includes('Price')) {
                         appendMessage("Our consultations start from £65. Composite bonding starts from £250 per tooth. Would you like a full price list?");
                    } else if (text.includes('Book')) {
                        appendMessage("Great! You can book online instantly here: <a href='https://the-terrace-dental-clinic.dentr.net/' target='_blank' class='underline font-bold'>Book Online</a>, or leave your number below.");
                    } else {
                        appendMessage("If you are in pain, please call us immediately on 01782 827110.");
                    }
                }, 800);
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-stone-900 text-white text-xs font-medium py-2 text-center tracking-wide">
        Accepting New Private Patients | Call us on <a className="underline hover:text-brand-gold transition-colors" href="tel:01782827110">01782 827110</a>
</div>

<nav className="sticky top-0 z-40 w-full glass-panel border-b border-stone-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<img alt="The Terrace Dental Clinic" className="h-10 w-auto opacity-90 hover:opacity-100 transition-opacity" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/the-terrace-logo.png"/>
</div>

<div className="hidden md:flex items-center space-x-8">
<a className="text-sm font-medium text-stone-600 hover:text-brand-gold transition-colors" href="#general">General</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-gold transition-colors" href="#cosmetic">Cosmetic</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-gold transition-colors" href="#implants">Implants</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-gold transition-colors" href="#reviews">Reviews</a>
<a className="text-sm font-medium text-stone-600 hover:text-brand-gold transition-colors" href="#contact">Contact</a>
<a className="bg-brand-gold hover:bg-brand-goldhover text-white text-sm font-semibold py-2.5 px-5 rounded transition-all duration-200 shadow-sm hover:shadow-md flex items-center gap-2" href="https://the-terrace-dental-clinic.dentr.net/" target="_blank">
<span>Book Online</span>
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="2" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-stone-600 hover:text-brand-gold p-2" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-stone-100 absolute w-full shadow-lg" id="mobile-menu">
<div className="px-4 pt-2 pb-6 space-y-2">
<a className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:bg-stone-50" href="#general">General Dentistry</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:bg-stone-50" href="#cosmetic">Cosmetic</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:bg-stone-50" href="#implants">Dental Implants</a>
<a className="block px-3 py-3 rounded-md text-base font-medium text-stone-700 hover:bg-stone-50" href="#fees">Fees &amp; Plans</a>
<a className="block w-full text-center mt-4 bg-brand-gold text-white font-semibold py-3 rounded" href="https://the-terrace-dental-clinic.dentr.net/">Book Appointment</a>
</div>
</div>
</nav>

<section className="relative pt-16 pb-20 lg:pt-24 lg:pb-32 overflow-hidden">
<div className="absolute inset-0 -z-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-stone-100 via-white to-white opacity-70"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

<div className="max-w-2xl fade-in-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-stone-100 border border-stone-200 mb-6">
<span className="flex h-2 w-2 rounded-full bg-brand-teal pulse-dot"></span>
<span className="text-xs font-semibold text-stone-600 uppercase tracking-wide">Accepting New Patients</span>
</div>
<h1 className="font-serif text-5xl sm:text-6xl lg:text-7xl font-medium tracking-tight text-stone-900 mb-6 leading-[1.1]">
                        Experience <br/>
<span className="text-brand-gold italic">Confidence</span> in <br/>
                        Every Smile.
                    </h1>
<p className="text-lg text-stone-600 mb-8 max-w-lg leading-relaxed">
                        Your trusted private dentist in Stoke-on-Trent. With over 45 years of combined experience and an on-site laboratory, we deliver exceptional care with a personal touch.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-brand-gold hover:bg-brand-goldhover text-white text-base font-semibold py-4 px-8 rounded shadow-lg hover:shadow-xl transition-all duration-300 flex justify-center items-center gap-2" href="https://the-terrace-dental-clinic.dentr.net/">
                            Book Consultation
                            <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</a>
<a className="bg-white hover:bg-stone-50 text-stone-800 border border-stone-200 text-base font-semibold py-4 px-8 rounded shadow-sm hover:shadow transition-all duration-300 flex justify-center items-center" href="#treatments">
                            View Treatments
                        </a>
</div>

<div className="mt-10 pt-8 border-t border-stone-100 flex items-center gap-6 opacity-80 grayscale hover:grayscale-0 transition-all duration-500">
<img alt="GDC Registered" className="h-8 w-auto" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/gdc-logo.jpg.webp"/>
<img alt="CQC Regulated" className="h-8 w-auto" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/cqc-logo.jpg.webp"/>
<div className="flex items-center gap-1">
<iconify-icon className="text-brand-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-brand-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-brand-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-brand-gold" icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon className="text-brand-gold" icon="solar:star-bold" width="18"></iconify-icon>
<span className="text-xs font-semibold ml-2 text-stone-500">4.8/5 Reviews</span>
</div>
</div>
</div>

<div className="relative lg:ml-auto w-full max-w-md fade-in-up" style={{animationDelay: '0.2s'}}>
<div className="absolute -inset-1 bg-gradient-to-r from-brand-gold to-stone-300 rounded-lg blur opacity-25"></div>
<div className="relative bg-white rounded-lg shadow-2xl p-6 sm:p-8 border border-stone-100">
<h3 className="font-serif text-2xl font-medium text-stone-900 mb-2">Request an Appointment</h3>
<p className="text-sm text-stone-500 mb-6">Our team will contact you shortly to confirm.</p>
<form className="space-y-4" id="hero-form">
<div>
<label className="sr-only" htmlFor="name">Full Name</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all" id="name" placeholder="Full Name" type="text"/>
</div>
<div className="grid grid-cols-2 gap-4">
<div>
<label className="sr-only" htmlFor="phone">Phone</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all" id="phone" placeholder="Phone Number" type="tel"/>
</div>
<div>
<label className="sr-only" htmlFor="email">Email</label>
<input className="w-full bg-stone-50 border border-stone-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold transition-all" id="email" placeholder="Email Address" type="email"/>
</div>
</div>

<div className="relative">
<select className="w-full bg-stone-50 border border-stone-200 rounded px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-brand-gold/50 focus:border-brand-gold appearance-none text-stone-600">
<option disabled="" selected="" value="">Interested in...</option>
<option value="checkup">New Patient Exam</option>
<option value="cosmetic">Cosmetic Dentistry</option>
<option value="implants">Dental Implants</option>
<option value="emergency">Emergency</option>
</select>
<div className="absolute inset-y-0 right-0 flex items-center px-4 pointer-events-none">
<iconify-icon className="text-stone-400" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-stone-900 hover:bg-black text-white font-medium py-3.5 rounded shadow-lg transform hover:-translate-y-0.5 transition-all duration-200" type="submit">
                                Submit Enquiry
                            </button>
<p className="text-xs text-center text-stone-400 mt-4">
                                By submitting, you agree to our privacy policy.
                            </p>
</form>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white border-t border-stone-100" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 mb-4 tracking-tight">Comprehensive Dental Care</h2>
<p className="text-stone-500">From routine hygiene to complex cosmetic makeovers, our on-site laboratory and experienced clinicians ensure precision results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">Cosmetic Dentistry</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Transform your smile with composite bonding, veneers, and whitening. Tailored to your facial aesthetics.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:shield-star-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">Dental Implants</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">The permanent solution for missing teeth. Restore function and confidence with our implant specialists.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">General &amp; Family</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Preventative care for the whole family. Check-ups, hygiene, and fillings in a calm environment.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:confetti-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">Custom Dentures</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Unique on-site laboratory allows for faster, higher-quality full and partial denture creation and repair.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">Invisalign &amp; Straightening</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">Clear aligners to straighten your teeth discreetly. Book a consultation to see your future smile.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>

<a className="group p-8 rounded-xl bg-stone-50 border border-stone-100 hover:border-brand-gold/30 hover:shadow-lg transition-all duration-300" href="#">
<div className="w-12 h-12 bg-white rounded-lg border border-stone-200 flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300">
<iconify-icon className="text-brand-gold text-2xl" icon="solar:heart-pulse-linear"></iconify-icon>
</div>
<h3 className="font-serif text-xl font-medium text-stone-900 mb-3 group-hover:text-brand-gold transition-colors">Nervous Patients</h3>
<p className="text-sm text-stone-500 mb-4 leading-relaxed">We specialize in helping anxious patients. Gentle techniques and a supportive environment.</p>
<span className="text-xs font-semibold uppercase tracking-wider text-stone-400 group-hover:text-stone-800 transition-colors flex items-center gap-1">
                        Learn More <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-stone-900 text-white overflow-hidden relative">
<div className="absolute top-0 right-0 w-1/2 h-full bg-brand-gold/10 skew-x-12 transform origin-top-right"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-serif text-3xl sm:text-5xl font-medium mb-6 leading-tight">Why Choose The Terrace?</h2>
<div className="space-y-6">
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">On-Site Dental Laboratory</h4>
<p className="text-stone-400 text-sm leading-relaxed">Unlike most clinics, we craft dentures and restorations in-house. This means faster turnaround times, direct communication with technicians, and a perfect fit.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Modern Technology</h4>
<p className="text-stone-400 text-sm leading-relaxed">We utilize the latest diagnostic tools and treatment methods to ensure your visit is comfortable, efficient, and effective.</p>
</div>
</div>
<div className="flex gap-4">
<div className="flex-shrink-0 mt-1">
<iconify-icon className="text-brand-gold text-xl" icon="solar:check-circle-bold"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-medium mb-1">Transparent Pricing</h4>
<p className="text-stone-400 text-sm leading-relaxed">No hidden costs. We provide clear, written treatment plans with 0% finance options available.</p>
</div>
</div>
</div>
<div className="mt-10">
<a className="inline-block bg-white text-stone-900 hover:bg-stone-100 font-semibold py-3 px-6 rounded transition-colors" href="#contact">
                            Speak to the Practice
                        </a>
</div>
</div>
<div className="relative h-96 lg:h-auto w-full rounded-2xl overflow-hidden shadow-2xl border border-stone-800">

<img alt="The Terrace Clinic Interior" className="absolute inset-0 w-full h-full object-cover opacity-80 hover:scale-105 transition-transform duration-700" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/the-terrace-dental-surgery.jpg.webp"/>
</div>
</div>
</div>
</section>

<section className="py-20 bg-stone-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="font-serif text-3xl sm:text-4xl font-medium text-stone-900 tracking-tight">Patient Stories</h2>
<p className="text-stone-500 mt-2">Rated 4.6 Stars on Google Reviews</p>
</div>
<div className="hidden sm:flex gap-2">
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white hover:border-stone-400 transition-colors">
<iconify-icon icon="solar:arrow-left-linear"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full border border-stone-300 flex items-center justify-center hover:bg-white hover:border-stone-400 transition-colors">
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">"The whole team are amazing. I'm a nervous patient who is a first time denture wearer. Stuart and team have put me at ease from day one."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">JW</div>
<span className="text-sm font-semibold text-stone-900">Julie Ann Walters</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">"I had almost a full dental reconstruction. The treatment was professional. Stuart listened to what I wanted... An excellent experience all-round."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">W</div>
<span className="text-sm font-semibold text-stone-900">Wayne</span>
</div>
</div>

<div className="bg-white p-8 rounded-xl shadow-sm border border-stone-100">
<div className="flex text-brand-gold mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-stone-600 text-sm mb-6 leading-relaxed">"I went to Stuart for a full set of dentures... I was petrified beforehand but he made me feel really at ease. It’s the best set I’ve ever had."</p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex items-center justify-center text-xs font-bold text-stone-600">P</div>
<span className="text-sm font-semibold text-stone-900">Paula</span>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white">
<div className="max-w-3xl mx-auto px-4 sm:px-6">
<h2 className="font-serif text-3xl text-center mb-12 text-stone-900">Common Questions</h2>
<div className="space-y-4">
<details className="group bg-stone-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-stone-900 list-none">
<span>Are you accepting new NHS patients?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-6 pb-6 leading-relaxed">
                        We are currently focusing on providing high-quality private dental care to ensure appointment availability and access to the best materials. Please contact reception for the latest updates on NHS capacity.
                    </div>
</details>
<details className="group bg-stone-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-stone-900 list-none">
<span>Do you offer payment plans?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-6 pb-6 leading-relaxed">
                        Yes, we offer dental plans to spread the cost of routine maintenance, as well as 0% finance options for higher-value treatments like implants and orthodontics (subject to status).
                    </div>
</details>
<details className="group bg-stone-50 rounded-lg open:bg-white open:shadow-md transition-all duration-300">
<summary className="flex justify-between items-center cursor-pointer p-6 font-medium text-stone-900 list-none">
<span>What if I am a nervous patient?</span>
<span className="transition group-open:rotate-180">
<iconify-icon icon="solar:alt-arrow-down-linear"></iconify-icon>
</span>
</summary>
<div className="text-stone-600 text-sm px-6 pb-6 leading-relaxed">
                        We specialize in anxious patients. Our team takes things at your pace, explains every step, and offers a calm, non-judgmental environment.
                    </div>
</details>
</div>
</div>
</section>

<section className="bg-stone-100 border-t border-stone-200" id="contact">
<div className="grid lg:grid-cols-2">
<div className="p-12 lg:p-20 flex flex-col justify-center">
<h2 className="font-serif text-3xl mb-8 text-stone-900">Visit The Terrace</h2>
<div className="space-y-6 text-stone-600">
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand-gold text-xl flex-shrink-0 mt-1" icon="solar:map-point-linear"></iconify-icon>
<div>
<p className="font-medium text-stone-900">Address</p>
<p>77 The Boulevard, Tunstall,<br/>Stoke-on-Trent, Staffordshire ST6 6BD</p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand-gold text-xl flex-shrink-0 mt-1" icon="solar:phone-calling-linear"></iconify-icon>
<div>
<p className="font-medium text-stone-900">Contact</p>
<p><a className="hover:underline" href="tel:01782827110">01782 827110</a></p>
<p><a className="hover:underline" href="mailto:info@theterracedentalclinic.co.uk">info@theterracedentalclinic.co.uk</a></p>
</div>
</div>
<div className="flex gap-4 items-start">
<iconify-icon className="text-brand-gold text-xl flex-shrink-0 mt-1" icon="solar:clock-circle-linear"></iconify-icon>
<div>
<p className="font-medium text-stone-900">Opening Hours</p>
<div className="grid grid-cols-2 gap-x-8 gap-y-1 text-sm mt-1">
<span>Mon - Fri</span> <span>09:00 - 17:00</span>
<span>Weekends</span> <span>Appointment Only</span>
</div>
</div>
</div>
</div>
</div>
<div className="h-96 lg:h-auto w-full grayscale hover:grayscale-0 transition-all duration-500">
<iframe allowfullscreen="" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2399.277874415486!2d-2.2086602841732684!3d53.05905237992036!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487a42dd21e58cc9%3A0xe2e3909009460e56!2sThe%20Terrace%20Dental%20Clinic!5e0!3m2!1sen!2suk!4v1625678912345!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
</section>

<footer className="bg-white border-t border-stone-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<img alt="The Terrace Logo" className="h-8 w-auto mb-6 opacity-80" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/the-terrace-logo.png"/>
<p className="text-xs text-stone-400 leading-relaxed">
                        Dedicated to creating beautiful, healthy smiles in Stoke-on-Trent for over 45 years.
                    </p>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Treatments</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-brand-gold transition-colors" href="#">General Dentistry</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Cosmetic Bonding</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Invisalign</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Patients</h4>
<ul className="space-y-2 text-sm text-stone-500">
<li><a className="hover:text-brand-gold transition-colors" href="#">New Patient Guide</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Fees &amp; Finance</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Referrals</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-brand-gold transition-colors" href="#">Complaints</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-stone-900 mb-4 text-sm uppercase tracking-wider">Accreditations</h4>
<div className="flex gap-4 opacity-70">
<img className="h-6 w-auto" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/gdc-logo.jpg.webp"/>
<img className="h-6 w-auto" src="https://www.theterracedentalclinic.co.uk/wp-content/uploads/2022/06/bda-logo.jpg.webp"/>
</div>
</div>
</div>
<div className="border-t border-stone-100 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-stone-400">
<p>© 2024 The Terrace Dental Clinic. All rights reserved.</p>
<p className="mt-2 md:mt-0">Website by Demo.</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end gap-4">

<div className="hidden w-80 sm:w-96 bg-white rounded-2xl shadow-2xl border border-stone-200 overflow-hidden transform transition-all duration-300 origin-bottom-right" id="chat-window">

<div className="bg-stone-900 p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center">

<iconify-icon className="text-brand-gold text-xl" icon="solar:chat-round-dots-bold"></iconify-icon>
</div>
<span className="absolute bottom-0 right-0 block h-2.5 w-2.5 rounded-full ring-2 ring-stone-900 bg-green-400"></span>
</div>
<div>
<h4 className="text-white font-medium text-sm">The Terrace Assistant</h4>
<p className="text-stone-400 text-xs">Always online</p>
</div>
</div>
<button className="text-stone-400 hover:text-white" id="close-chat">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="h-80 bg-stone-50 p-4 overflow-y-auto space-y-4" id="chat-messages">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-stone-200 flex-shrink-0 flex items-center justify-center">
<iconify-icon className="text-stone-600" icon="solar:robot-linear"></iconify-icon>
</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-stone-100 text-sm text-stone-600">
                        Hello! Welcome to The Terrace Dental Clinic. 👋 <br/><br/>I can help you with:
                        <ul className="list-disc ml-4 mt-2 space-y-1">
<li>Booking an appointment</li>
<li>Treatment prices</li>
<li>NHS vs Private availability</li>
</ul>
</div>
</div>

<div className="flex flex-wrap gap-2 pl-11">
<button className="chat-chip text-xs bg-white border border-brand-gold text-brand-gold hover:bg-brand-gold hover:text-white px-3 py-1.5 rounded-full transition-colors">Book Now</button>
<button className="chat-chip text-xs bg-white border border-stone-300 text-stone-600 hover:bg-stone-100 px-3 py-1.5 rounded-full transition-colors">See Prices</button>
<button className="chat-chip text-xs bg-white border border-stone-300 text-stone-600 hover:bg-stone-100 px-3 py-1.5 rounded-full transition-colors">Emergency?</button>
</div>
</div>

<div className="p-4 bg-white border-t border-stone-100">
<form className="flex gap-2" id="chat-form">
<input className="flex-1 bg-stone-50 border border-stone-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-gold focus:ring-1 focus:ring-brand-gold" placeholder="Type a message..." type="text"/>
<button className="w-9 h-9 rounded-full bg-brand-gold text-white flex items-center justify-center hover:bg-brand-goldhover transition-colors" type="submit">
<iconify-icon className="ml-0.5" icon="solar:plain-3-bold" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="group flex items-center gap-3" id="chat-toggle">
<span className="bg-white text-stone-800 text-sm font-medium px-4 py-2 rounded-lg shadow-lg border border-stone-100 transition-opacity duration-300 opacity-0 group-hover:opacity-100 hidden sm:block">
                Chat with us
            </span>
<div className="w-14 h-14 bg-brand-gold rounded-full shadow-xl flex items-center justify-center hover:bg-brand-goldhover hover:scale-105 transition-all duration-300 relative">
<iconify-icon className="text-white text-3xl" icon="solar:chat-round-dots-linear"></iconify-icon>
<span className="absolute top-0 right-0 flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-white opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-green-400 border-2 border-brand-gold"></span>
</span>
</div>
</button>
</div>



    </>
  );
}
