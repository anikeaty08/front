import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
colors: {
primary: '#0a406e', // Original Dark Blue
secondary: '#328283', // Original Teal/Turquoise
accent: '#D5E5E6', // Original Light Blue/Grey
surface: '#F8FAFC',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
}
}
}
}



        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const chatToggleBtn = document.getElementById('chat-toggle-btn');
        let isOpen = false;

        function toggleChat() {
            isOpen = !isOpen;
            if (isOpen) {
                chatWindow.classList.remove('hidden');
                setTimeout(() => {
                    chatWindow.classList.remove('scale-95', 'opacity-0');
                    chatWindow.classList.add('scale-100', 'opacity-100');
                }, 10);
                chatToggleBtn.classList.add('rotate-90', 'opacity-0');
                chatToggleBtn.classList.add('hidden'); // Hide button when open
            } else {
                chatWindow.classList.remove('scale-100', 'opacity-100');
                chatWindow.classList.add('scale-95', 'opacity-0');
                setTimeout(() => {
                    chatWindow.classList.add('hidden');
                    chatToggleBtn.classList.remove('hidden');
                    chatToggleBtn.classList.remove('rotate-90', 'opacity-0');
                }, 300);
            }
        }

        function addMessage(text, isUser = false) {
            const div = document.createElement('div');
            div.className = `flex gap-2 chat-enter ${isUser ? 'flex-row-reverse' : ''}`;
            
            const avatar = isUser ? '' : `
                <div class="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <iconify-icon icon="solar:user-circle-bold" width="20"></iconify-icon>
                </div>
            `;

            const bubbleClass = isUser 
                ? 'bg-primary text-white rounded-tr-none' 
                : 'bg-white text-slate-600 border border-slate-100 rounded-tl-none';

            div.innerHTML = `
                ${avatar}
                <div class="p-3 rounded-2xl shadow-sm text-sm max-w-[85%] ${bubbleClass}">
                    ${text}
                </div>
            `;
            
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTyping() {
            const id = 'typing-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-2 chat-enter';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
                    <iconify-icon icon="solar:user-circle-bold" width="20"></iconify-icon>
                </div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex items-center gap-1 h-10 w-16">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
            return id;
        }

        function removeTyping(id) {
            const el = document.getElementById(id);
            if(el) el.remove();
        }

        function botReply(text, delay = 1000) {
            const typingId = showTyping();
            setTimeout(() => {
                removeTyping(typingId);
                addMessage(text);
            }, delay);
        }

        function handleUserChoice(choice) {
            let userText = "";
            let response = "";

            if (choice === 'book') {
                userText = "I'd like to book an appointment.";
                response = "Great! We are currently accepting new patients. Our New Patient Examination is currently just £40. Would you like me to connect you to our booking system or would you prefer to call us on 01538 399 897?";
            } else if (choice === 'price') {
                userText = "What are your prices?";
                response = "We believe in transparent pricing. A New Patient Exam is £40. Cosmetic consultations are often free. We also offer 0% finance options. Is there a specific treatment you are interested in?";
            } else if (choice === 'emergency') {
                userText = "I have a dental emergency.";
                response = "I'm sorry to hear that. For emergencies, please call us immediately at 01538 399 897. We try to see emergency cases on the same day whenever possible.";
            }

            addMessage(userText, true);
            botReply(response, 1500);
        }

        function handleUserCustom() {
            const text = chatInput.value.trim();
            if (!text) return;
            
            addMessage(text, true);
            chatInput.value = '';
            
            // Simple keyword logic
            let response = "Thanks for your message. Our reception team is notified and will get back to you shortly. For immediate assistance, please call 01538 399 897.";
            
            const lower = text.toLowerCase();
            if (lower.includes('implant')) response = "Dental Implants are a great long-term solution. We offer free consultations for implants! Would you like to book one?";
            if (lower.includes('open') || lower.includes('hour') || lower.includes('time')) response = "We are open Mon/Wed/Thu 8am-5pm, Tue 9:30am-6:30pm, and Fri 8am-3pm. We close for lunch daily.";
            if (lower.includes('parking') || lower.includes('location')) response = "We are located at 31 Stockwell Street, Leek, ST13 6DH. There is usually parking available nearby in Leek town centre.";

            botReply(response, 1200);
        }

        function handleEnter(e) {
            if (e.key === 'Enter') handleUserCustom();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-primary text-white text-xs font-medium py-2 text-center px-4">
<span className="opacity-90">New Patient Examination only £40 for a limited time. </span>
<a className="underline decoration-secondary underline-offset-4 hover:text-secondary transition-colors ml-2" href="#book">Book now →</a>
</div>

<header className="sticky top-0 z-40 w-full backdrop-blur-md bg-white/90 border-b border-slate-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<a className="flex items-center gap-2 group" href="#">
<div className="bg-primary text-white p-1.5 rounded-lg group-hover:bg-secondary transition-colors duration-300">
<iconify-icon icon="solar:tooth-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-primary font-bold tracking-tight text-lg leading-none uppercase">Waterer</span>
<span className="text-slate-400 font-medium tracking-widest text-xs uppercase leading-none">Dental Care</span>
</div>
</a>

<nav className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#about">Team</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#promotions">Offers</a>
<a className="text-sm font-medium text-slate-600 hover:text-primary transition-colors" href="#reviews">Reviews</a>
<a className="flex items-center gap-2 text-primary font-semibold text-sm" href="tel:01538399897">
<iconify-icon icon="solar:phone-calling-linear" width="18"></iconify-icon>
                        01538 399 897
                    </a>
<button className="bg-primary hover:bg-secondary text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all duration-300 shadow-lg shadow-primary/20 hover:shadow-secondary/30" onclick="toggleChat()">
                        Book Online
                    </button>
</nav>

<button className="md:hidden text-primary p-2">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</header>
<main>

<section className="relative pt-24 pb-32 lg:pt-40 lg:pb-52 overflow-hidden flex items-center">

<div className="absolute inset-0 w-full h-full z-0">
<video autoplay="" className="w-full h-full object-cover" loop="" muted="" playsinline="" poster="https://waterer-dental-care.co.uk/wp-content/uploads/2021/03/video-poster.jpg">

<source src="https://assets.mixkit.co/videos/preview/mixkit-dentist-examines-a-patients-teeth-41569-large.mp4" type="video/mp4"/>
                    Your browser does not support the video tag.
                </video>

<div className="absolute inset-0 bg-primary/80 mix-blend-multiply"></div>
<div className="absolute inset-0 bg-gradient-to-r from-primary/90 via-primary/70 to-transparent"></div>
</div>
<div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">
<div className="max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm text-white text-xs font-semibold mb-6 border border-white/20">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-secondary opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-secondary"></span>
</span>
                            Accepting New Private Patients
                        </div>

<h1 className="text-5xl lg:text-7xl font-bold tracking-tight text-white mb-6">
                            Excellence in <br/>
<span className="text-secondary text-transparent bg-clip-text bg-gradient-to-r from-secondary to-teal-200">Dentistry</span> for Leek.
                        </h1>
<p className="text-lg text-blue-100 mb-8 leading-relaxed max-w-lg font-medium">
                            Over 26 years of trusted, patient-first care in Staffordshire. From dental implants to invisible braces, we tailor treatments to help you smile with confidence.
                        </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="inline-flex justify-center items-center gap-2 bg-secondary text-white px-8 py-4 rounded-xl font-medium hover:bg-white hover:text-primary transition-all shadow-xl shadow-secondary/30 hover:-translate-y-1" onclick="toggleChat()">
                                Book Appointment
                                <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<a className="inline-flex justify-center items-center gap-2 bg-white/10 backdrop-blur-md text-white border border-white/30 px-8 py-4 rounded-xl font-medium hover:bg-white/20 transition-all" href="#services">
                                View Services
                            </a>
</div>

<div className="mt-12 flex items-center gap-8 pt-8 border-t border-white/20">
<div>
<p className="text-2xl font-bold text-white">26+</p>
<p className="text-xs text-blue-200 font-medium uppercase tracking-wide">Years Exp.</p>
</div>
<div className="h-8 w-px bg-white/20"></div>
<div>
<p className="text-2xl font-bold text-white">5k+</p>
<p className="text-xs text-blue-200 font-medium uppercase tracking-wide">Happy Patients</p>
</div>
<div className="h-8 w-px bg-white/20"></div>
<div className="flex items-center gap-1">
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
<iconify-icon className="text-yellow-400" icon="solar:star-bold" width="20"></iconify-icon>
</div>
</div>
</div>

<div className="hidden lg:block relative h-full w-full">

<div className="absolute bottom-0 right-0 p-6 bg-white/90 backdrop-blur-md rounded-2xl shadow-xl border border-white/50 max-w-xs animate-[float_4s_ease-in-out_infinite]">
<div className="flex items-center gap-4">
<div className="bg-secondary/10 p-3 rounded-full text-secondary">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
</div>
<div>
<p className="font-bold text-slate-900 text-sm">See Our Practice</p>
<p className="text-xs text-slate-500">Take a virtual tour</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="services">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="text-primary font-semibold tracking-wide uppercase text-sm mb-3">Comprehensive Care</h2>
<h3 className="text-3xl md:text-4xl font-bold text-slate-900 tracking-tight mb-4">World-class dentistry in the heart of Leek.</h3>
<p className="text-slate-500">From routine hygiene to complex restoration, we provide a full spectrum of private dental services.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 bg-surface rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group relative overflow-hidden">
<div className="relative z-10">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-secondary shadow-sm mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:smile-circle-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Cosmetic Dentistry</h4>
<p className="text-slate-500 max-w-md mb-6">Transform your smile with teeth whitening, composite bonding, and veneers. We create natural, confident smiles tailored to your face shape.</p>
<a className="inline-flex items-center text-primary font-semibold text-sm hover:translate-x-1 transition-transform" href="#">Learn more <iconify-icon className="ml-1" icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
<iconify-icon className="absolute -right-10 -bottom-10 text-slate-100 opacity-50 rotate-12 group-hover:rotate-0 transition-transform duration-500" icon="solar:smile-circle-bold" width="240"></iconify-icon>
</div>

<div className="bg-primary text-white rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 relative overflow-hidden group">
<div className="bg-white/10 w-12 h-12 rounded-xl flex items-center justify-center text-white mb-6 backdrop-blur-sm">
<iconify-icon icon="solar:bone-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold mb-2">Dental Implants</h4>
<p className="text-blue-100 text-sm mb-6 leading-relaxed">Permanent solutions for missing teeth. Restore function and aesthetics with our expert implantology.</p>
<div className="absolute bottom-0 right-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<iconify-icon icon="solar:bone-bold" width="120"></iconify-icon>
</div>
</div>

<div className="bg-secondary/10 rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-secondary mb-6 shadow-sm">
<iconify-icon icon="solar:ruler-cross-pen-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Invisalign &amp; Braces</h4>
<p className="text-slate-500 text-sm mb-4">Straighten your teeth discreetly with invisible braces and Six Month Smiles.</p>
</div>

<div className="bg-surface rounded-3xl p-8 hover:shadow-xl transition-shadow duration-300 group">
<div className="bg-white w-12 h-12 rounded-xl flex items-center justify-center text-primary mb-6 shadow-sm">
<iconify-icon icon="solar:heart-pulse-linear" width="28"></iconify-icon>
</div>
<h4 className="text-xl font-bold text-slate-900 mb-2">Routine Hygiene</h4>
<p className="text-slate-500 text-sm mb-4">Preventative care using Airflow technology for a deeper, gentler clean.</p>
</div>

<div className="bg-accent rounded-3xl p-8 flex flex-col justify-center items-center text-center relative overflow-hidden">
<div className="relative z-10">
<span className="bg-white text-secondary text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider mb-4 inline-block">New Patients</span>
<h4 className="text-2xl font-bold text-primary mb-2">Examination Offer</h4>
<p className="text-primary/80 font-medium text-lg mb-6">Only £40 this month</p>
<button className="bg-primary text-white px-6 py-2 rounded-lg text-sm font-semibold hover:bg-secondary transition-colors w-full" onclick="toggleChat()">Claim Offer</button>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-surface border-y border-slate-200" id="about">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="order-2 lg:order-1 relative">
<div className="grid grid-cols-2 gap-4">
<img alt="Dr Waterer" className="rounded-2xl shadow-lg bg-white w-full object-cover" src="https://waterer-dental-care.co.uk/wp-content/themes/katatomic/images/jonathan.png"/>
<div className="bg-white p-6 rounded-2xl shadow-lg flex flex-col justify-center">
<p className="text-4xl font-bold text-secondary mb-2">26</p>
<p className="text-sm font-semibold text-primary uppercase">Years Serving Leek</p>
<div className="mt-4 pt-4 border-t border-slate-100">
<p className="text-xs text-slate-400">Dr. J.C.R. Waterer B.D.S.</p>
<p className="text-xs text-slate-400">Dr. Paul Thompson B.D.S.</p>
</div>
</div>
</div>
</div>
<div className="order-1 lg:order-2">
<h2 className="text-3xl md:text-4xl font-bold text-primary mb-6">Meet your local experts.</h2>
<p className="text-slate-600 mb-6 leading-relaxed">
                            Waterer Dental Care is led by Dr. J.C.R. Waterer and Dr. Paul Thompson. We are proud to be a fully private practice that takes the time to listen. We understand that visiting the dentist can be daunting, which is why we’ve designed our practice to be a calm, welcoming sanctuary.
                        </p>
<p className="text-slate-600 mb-8 leading-relaxed">
                            Located on Stockwell Street in Leek, we serve the Staffordshire Moorlands including Biddulph, Congleton, and Macclesfield.
                        </p>
<div className="flex flex-wrap gap-4">
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200">
<iconify-icon className="text-secondary text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium text-slate-700">GDC Regulated</span>
</div>
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200">
<iconify-icon className="text-secondary text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium text-slate-700">Denplan Available</span>
</div>
<div className="flex items-center gap-3 bg-white px-4 py-3 rounded-xl border border-slate-200">
<iconify-icon className="text-secondary text-xl" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm font-medium text-slate-700">0% Finance</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-primary relative overflow-hidden" id="promotions">
<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#328283 1px, transparent 1px)', backgroundSize: '32px 32px'}}></div>
<div className="max-w-4xl mx-auto px-4 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Start your journey to a better smile.</h2>
<p className="text-blue-100 text-lg mb-10 max-w-2xl mx-auto">
                    We are currently accepting new patients. Take advantage of our 10% discount on cosmetic treatment plans or book a free consultation for implants.
                </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="bg-secondary text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white hover:text-primary transition-all shadow-lg" onclick="toggleChat()">
                        Book New Patient Exam (£40)
                    </button>
<a className="bg-transparent border border-white/30 text-white px-8 py-4 rounded-xl font-semibold text-lg hover:bg-white/10 transition-all backdrop-blur-sm" href="tel:01538399897">
                        Call 01538 399 897
                    </a>
</div>
<p className="text-white/40 text-xs mt-6">Terms and conditions apply. Quote website when booking.</p>
</div>
</section>

<section className="py-24 bg-white" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold text-primary mb-2">Patient Stories</h2>
<p className="text-slate-500">Don't just take our word for it.</p>
</div>
<div className="hidden md:flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center text-slate-400 hover:bg-slate-50 hover:text-primary transition-colors">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="w-10 h-10 rounded-full bg-primary text-white flex items-center justify-center hover:bg-secondary transition-colors shadow-lg">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-surface p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Fantastic dentist. I was very nervous about having an implant but the team at Waterer made me feel completely at ease. The result is amazing."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">JS</div>
<div>
<p className="font-bold text-primary text-sm">James S.</p>
<p className="text-xs text-slate-400">Implant Patient</p>
</div>
</div>
</div>

<div className="bg-surface p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Finally found a dentist I trust. The new patient exam was thorough and not rushed. Highly recommend Dr Waterer and the team."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-primary/20 flex items-center justify-center text-primary font-bold text-sm">SL</div>
<div>
<p className="font-bold text-primary text-sm">Sarah L.</p>
<p className="text-xs text-slate-400">Routine Care</p>
</div>
</div>
</div>

<div className="bg-surface p-8 rounded-2xl border border-slate-100">
<div className="flex text-yellow-400 mb-4">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<p className="text-slate-600 mb-6 text-sm leading-relaxed">"Used the Six Month Smiles service. Unbelievable difference in such a short time. Transparent pricing and great service."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-secondary/20 flex items-center justify-center text-secondary font-bold text-sm">MP</div>
<div>
<p className="font-bold text-primary text-sm">Mark P.</p>
<p className="text-xs text-slate-400">Orthodontics</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="bg-slate-900 text-slate-400 py-16 text-sm">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-12">
<div>
<a className="flex items-center gap-2 mb-6" href="#">
<iconify-icon className="text-white" icon="solar:tooth-linear" width="24"></iconify-icon>
<span className="text-white font-bold tracking-tight text-lg uppercase">Waterer Dental</span>
</a>
<p className="mb-6 leading-relaxed">
                        31 Stockwell Street<br/>
                        Leek, Staffordshire<br/>
                        ST13 6DH
                    </p>
<div className="flex gap-4">
<a className="text-white hover:text-secondary transition-colors" href="#"><iconify-icon icon="logos:facebook" width="20"></iconify-icon></a>
<a className="text-white hover:text-secondary transition-colors" href="#"><iconify-icon icon="logos:twitter" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h5 className="text-white font-bold mb-4">Opening Hours</h5>
<ul className="space-y-2">
<li className="flex justify-between"><span>Mon, Wed, Thu</span> <span className="text-white">8:00 - 17:00</span></li>
<li className="flex justify-between"><span>Tuesday</span> <span className="text-white">9:30 - 18:30</span></li>
<li className="flex justify-between"><span>Friday</span> <span className="text-white">8:00 - 15:00</span></li>
<li className="flex justify-between text-xs pt-2"><span className="text-slate-500">Closed for lunch daily</span></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-4">Quick Links</h5>
<ul className="space-y-2">
<li><a className="hover:text-secondary transition-colors" href="#services">Our Services</a></li>
<li><a className="hover:text-secondary transition-colors" href="#about">Meet the Team</a></li>
<li><a className="hover:text-secondary transition-colors" href="#">New Patient Registration</a></li>
<li><a className="hover:text-secondary transition-colors" href="#">Privacy Policy</a></li>
<li><a className="hover:text-secondary transition-colors" href="#">Complaints Procedure</a></li>
</ul>
</div>
<div>
<h5 className="text-white font-bold mb-4">Legal</h5>
<p className="text-xs leading-relaxed mb-4">
                        Waterer Dental Care Ltd. Company No. 6934615.
                        Regulated by the General Dental Council.
                    </p>
<div className="flex items-center gap-2">
<iconify-icon className="text-secondary" icon="solar:shield-check-linear"></iconify-icon>
<span>CQC Inspection Passed</span>
</div>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p>© 2026 Waterer Dental Care. All rights reserved.</p>
<p>Website by Katatomic (Rebuild Demo)</p>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chat-widget">

<div className="hidden mb-4 w-[350px] sm:w-[380px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col transition-all origin-bottom-right transform scale-95 opacity-0 h-[500px]" id="chat-window">

<div className="bg-primary p-4 flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-white flex items-center justify-center text-primary overflow-hidden border-2 border-white">
<iconify-icon icon="solar:user-circle-bold" width="32"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-primary"></div>
</div>
<div>
<h4 className="text-white font-bold text-sm">Reception Team</h4>
<p className="text-blue-200 text-xs">Replies instantly</p>
</div>
</div>
<button className="text-white/80 hover:text-white transition-colors" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 bg-surface p-4 overflow-y-auto space-y-4" id="chat-messages">

<div className="flex gap-2 chat-enter">
<div className="w-8 h-8 rounded-full bg-primary/10 flex-shrink-0 flex items-center justify-center text-primary">
<iconify-icon icon="solar:user-circle-bold" width="20"></iconify-icon>
</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 text-sm text-slate-600 max-w-[85%]">
                        Hello! 👋 Welcome to Waterer Dental Care. How can we help you today?
                    </div>
</div>
</div>

<div className="p-4 bg-white border-t border-slate-100">
<div className="flex gap-2 overflow-x-auto pb-2 mb-2 scrollbar-hide" id="chat-options">
<button className="whitespace-nowrap px-3 py-1.5 bg-accent text-primary text-xs font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors" onclick="handleUserChoice('book')">Book Appointment</button>
<button className="whitespace-nowrap px-3 py-1.5 bg-accent text-primary text-xs font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors" onclick="handleUserChoice('price')">Pricing</button>
<button className="whitespace-nowrap px-3 py-1.5 bg-accent text-primary text-xs font-semibold rounded-full hover:bg-secondary hover:text-white transition-colors" onclick="handleUserChoice('emergency')">Emergency</button>
</div>
<div className="flex items-center gap-2 bg-slate-50 rounded-full px-4 py-2 border border-slate-200">
<input className="bg-transparent flex-1 text-sm outline-none text-slate-700" id="chat-input" onkeypress="handleEnter(event)" placeholder="Type a message..." type="text"/>
<button className="text-primary hover:text-secondary transition-colors" onclick="handleUserCustom()">
<iconify-icon icon="solar:plain-linear" width="20"></iconify-icon>
</button>
</div>
</div>
</div>

<button className="group flex items-center gap-2 bg-secondary hover:bg-primary text-white p-4 rounded-full shadow-lg shadow-secondary/40 transition-all duration-300 hover:scale-110" id="chat-toggle-btn" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full animate-pulse"></span>
<iconify-icon icon="solar:chat-round-dots-linear" width="28"></iconify-icon>
<span className="max-w-0 overflow-hidden group-hover:max-w-xs transition-all duration-500 ease-in-out whitespace-nowrap font-medium pr-0 group-hover:pr-2">Chat with us</span>
</button>
</div>



    </>
  );
}
