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
50: '#f0fdfc',
100: '#ccfbf7',
200: '#99f6ef',
300: '#5eead4',
400: '#2dd4bf',
500: '#00b2a9', // Original Brand Color
600: '#0d9488',
700: '#0f766e',
800: '#115e59',
900: '#134e4a',
},
navy: {
800: '#1e293b',
900: '#0f172a',
}
},
fontFamily: {
sans: ['"Plus Jakarta Sans"', 'sans-serif'],
},
animation: {
'float': 'float 6s ease-in-out infinite',
'fade-in-up': 'fadeInUp 0.8s ease-out forwards',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Menu Toggle
        function toggleMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('menu-open');
            if(menu.classList.contains('menu-open')) {
                menu.classList.remove('translate-x-full');
            } else {
                menu.classList.add('translate-x-full');
            }
        }

        // Chatbot Logic
        const chatWindow = document.getElementById('chat-window');
        const messagesContainer = document.getElementById('chat-messages');
        const optionsContainer = document.getElementById('chat-options');

        function toggleChat() {
            chatWindow.classList.toggle('hidden');
            chatWindow.classList.toggle('scale-0');
            // Reset scale if unhiding
            if(!chatWindow.classList.contains('hidden')) {
                setTimeout(() => chatWindow.classList.remove('scale-0'), 10);
            }
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function addTypingIndicator() {
            const typingDiv = document.createElement('div');
            typingDiv.className = 'flex items-start gap-2.5 typing-indicator';
            typingDiv.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">CB</div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none shadow-sm border border-slate-100 flex gap-1">
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            messagesContainer.appendChild(typingDiv);
            scrollToBottom();
            return typingDiv;
        }

        function addMessage(text, isUser = false) {
            const msgDiv = document.createElement('div');
            msgDiv.className = isUser 
                ? 'flex justify-end animate-fade-in-up' 
                : 'flex items-start gap-2.5 animate-fade-in-up';
            
            if(isUser) {
                msgDiv.innerHTML = `
                    <div class="bg-brand-500 text-white p-3 rounded-2xl rounded-tr-none shadow-md text-sm max-w-[85%]">
                        ${text}
                    </div>
                `;
            } else {
                msgDiv.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">CB</div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-600 border border-slate-100 max-w-[85%]">
                        ${text}
                    </div>
                `;
            }
            messagesContainer.appendChild(msgDiv);
            scrollToBottom();
        }

        function handleOption(type) {
            // Remove options visually
            optionsContainer.style.display = 'none';

            let userText = "";
            let botResponse = "";

            if(type === 'book') {
                userText = "I want to book an appointment";
                botResponse = "Great! We are accepting new patients. You can book directly online using our live portal to secure your slot immediately. <br><br> <a href='https://t11e-sbabh6b.portal.dental/' target='_blank' class='text-brand-600 font-bold underline'>Click here to open the Booking Portal</a>";
            } else if (type === 'price') {
                userText = "What are your prices?";
                botResponse = "We offer transparent pricing. <br>• New Patient Assessment: <strong>Half Price Summer Special</strong><br>• Implants: From £210/month<br>• Invisalign: From £28/week<br><br>We also offer 0% finance on all treatments.";
            } else if (type === 'emergency') {
                userText = "I have a dental emergency";
                botResponse = "I'm sorry to hear you're in pain. We set aside emergency slots every day. Please call us immediately on <strong>01270 763 777</strong> so we can prioritize your care.";
            }

            addMessage(userText, true);

            // Simulate typing delay
            setTimeout(() => {
                const indicator = addTypingIndicator();
                setTimeout(() => {
                    indicator.remove();
                    addMessage(botResponse, false);
                    
                    // Add reset button
                    setTimeout(() => {
                        const resetBtn = document.createElement('div');
                        resetBtn.className = "flex justify-center mt-4";
                        resetBtn.innerHTML = `<button onclick="resetChat()" class="text-xs text-brand-500 hover:underline">Start over</button>`;
                        messagesContainer.appendChild(resetBtn);
                        scrollToBottom();
                    }, 500);
                }, 1500);
            }, 500);
        }

        function resetChat() {
            messagesContainer.innerHTML = `
                <div class="flex items-start gap-2.5">
                    <div class="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">CB</div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-600 border border-slate-100 max-w-[85%]">
                        Hello! Welcome to Crown Bank Dental. How can I help you smile today?
                    </div>
                </div>
                <div id="chat-options" class="flex flex-col gap-2 ml-10">
                    <button onclick="handleOption('book')" class="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200">
                        📅 I want to book an appointment
                    </button>
                    <button onclick="handleOption('price')" class="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200">
                        💰 What are your prices?
                    </button>
                    <button onclick="handleOption('emergency')" class="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200">
                        🆘 I have a dental emergency
                    </button>
                </div>
            `;
            optionsContainer = document.getElementById('chat-options'); // Re-bind
        }

        // Navbar Sticky Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('-translate-y-2');
            } else {
                nav.classList.remove('-translate-y-2');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-navy-900 text-white text-xs font-medium py-2 text-center tracking-wide relative z-50">
<p>New Patient Assessments <span className="text-brand-300">HALF PRICE</span> Summer Special — <a className="underline decoration-brand-500 underline-offset-2 hover:text-brand-300 transition" href="https://t11e-sbabh6b.portal.dental/">Book Today</a></p>
</div>

<nav className="fixed w-full z-40 transition-all duration-300 top-8" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mt-4">
<div className="glass rounded-full px-6 py-4 flex items-center justify-between shadow-lg shadow-black/5">

<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-brand-500 rounded-xl flex items-center justify-center text-white text-xl font-bold group-hover:scale-105 transition-transform duration-300">
                        C
                    </div>
<div className="flex flex-col">
<span className="text-navy-900 font-bold tracking-tight text-lg leading-none">CROWN BANK</span>
<span className="text-xs text-slate-500 tracking-widest uppercase">Dental &amp; Implant</span>
</div>
</a>

<div className="hidden lg:flex items-center gap-8">
<a className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors" href="#treatments">Treatments</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors" href="#implants">Implants</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors" href="#invisalign">Invisalign®</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors" href="#team">Our Team</a>
<a className="text-sm font-semibold text-slate-600 hover:text-brand-600 transition-colors" href="#reviews">Reviews</a>
</div>

<div className="hidden lg:flex items-center gap-3">
<a className="text-sm font-semibold text-navy-900 hover:text-brand-600 transition-colors flex items-center gap-1" href="tel:01270763777">
<iconify-icon icon="solar:phone-calling-linear"></iconify-icon>
                        01270 763 777
                    </a>
<a className="bg-brand-500 hover:bg-brand-600 text-white text-sm font-semibold py-2.5 px-6 rounded-full transition-all duration-300 shadow-lg shadow-brand-500/30 hover:shadow-brand-500/50" href="https://t11e-sbabh6b.portal.dental/" target="_blank">
                        Book Online
                    </a>
</div>

<button className="lg:hidden text-navy-900 text-2xl" onclick="toggleMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 bg-white z-50 transform translate-x-full flex flex-col pt-24 px-6 gap-6" id="mobile-menu">
<button className="absolute top-6 right-6 text-3xl text-navy-900" onclick="toggleMenu()">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a className="text-xl font-bold text-navy-900" href="#treatments" onclick="toggleMenu()">Treatments</a>
<a className="text-xl font-bold text-navy-900" href="#implants" onclick="toggleMenu()">Dental Implants</a>
<a className="text-xl font-bold text-navy-900" href="#invisalign" onclick="toggleMenu()">Invisalign®</a>
<a className="text-xl font-bold text-navy-900" href="#team" onclick="toggleMenu()">Meet the Team</a>
<a className="bg-brand-500 text-white text-center py-4 rounded-xl font-bold text-lg mt-4" href="https://t11e-sbabh6b.portal.dental/">Book Appointment</a>
</div>

<section className="relative pt-44 pb-20 lg:pt-52 lg:pb-32 overflow-hidden">
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-b from-brand-50 to-white -z-10"></div>
<div className="absolute top-20 right-0 w-1/3 h-1/3 bg-brand-200 rounded-full blur-[120px] opacity-40 -z-10"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="animate-fade-in-up">
<div className="inline-flex items-center gap-2 bg-white border border-slate-200 rounded-full px-4 py-1.5 mb-6 shadow-sm">
<span className="flex h-2 w-2 rounded-full bg-brand-500 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
</span>
<span className="text-xs font-semibold uppercase tracking-wide text-slate-500">Accepting New Patients in Cheshire</span>
</div>
<h1 className="text-5xl lg:text-7xl font-bold text-navy-900 tracking-tight leading-[1.1] mb-6">
                        World-class dentistry, <br/>
<span className="text-brand-500 relative">
                            right here in Sandbach.
                            <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-200 -z-10" fill="none" viewbox="0 0 200 9" xmlns="http://www.w3.org/2000/svg"><path d="M2.00025 6.99997C25.8086 6.99999 52.4977 2.00021 75.9994 2.00024C92.0622 2.00027 108.125 3.00027 124.188 4.00027C140.25 5.00027 156.313 6.99996 172.375 6.99996C186.066 6.99996 195.968 5.61718 197.999 4.99998" stroke="currentColor" strokeLinecap="round" strokeWidth="3"></path></svg>
</span>
</h1>
<p className="text-lg text-slate-600 mb-8 max-w-lg leading-relaxed">
                        Join an award-winning practice dedicated to anxiety-free care, dental implants, and cosmetic excellence. 0% finance available.
                    </p>
<div className="flex flex-col sm:flex-row gap-4">
<a className="bg-navy-900 text-white hover:bg-brand-600 text-center px-8 py-4 rounded-xl font-semibold transition-all shadow-xl hover:shadow-2xl hover:-translate-y-1" href="https://t11e-sbabh6b.portal.dental/">
                            Book Consultation
                        </a>
<a className="bg-white text-navy-900 border border-slate-200 hover:border-brand-500 hover:text-brand-600 text-center px-8 py-4 rounded-xl font-semibold transition-all" href="#services">
                            View Treatments
                        </a>
</div>
<div className="mt-8 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=1"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=5"/>
<img alt="Patient" className="w-10 h-10 rounded-full border-2 border-white" src="https://i.pravatar.cc/100?img=8"/>
<div className="w-10 h-10 rounded-full border-2 border-white bg-brand-50 text-brand-600 text-xs font-bold flex items-center justify-center">4.9★</div>
</div>
<p className="text-sm text-slate-500 font-medium">Rated 4.9/5 by 200+ patients on Google</p>
</div>
</div>
<div className="relative lg:h-[600px] w-full hidden lg:block">

<div className="grid grid-cols-2 gap-4 h-full">
<div className="space-y-4 pt-12">
<div className="h-64 rounded-3xl overflow-hidden shadow-2xl animate-float">
<img alt="Smiling patient" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
<div className="bg-white p-6 rounded-3xl shadow-xl border border-slate-100">
<iconify-icon className="text-3xl text-brand-500 mb-2" icon="solar:shield-check-linear"></iconify-icon>
<h3 className="font-bold text-navy-900">Safe &amp; Clean</h3>
<p className="text-sm text-slate-500">Highest safety standards</p>
</div>
</div>
<div className="space-y-4">
<div className="bg-navy-900 p-6 rounded-3xl shadow-xl text-white">
<h3 className="font-bold text-2xl mb-1">0%</h3>
<p className="text-brand-300 text-sm">Finance available on treatments</p>
</div>
<div className="h-80 rounded-3xl overflow-hidden shadow-2xl">
<img alt="Modern dental clinic" className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-slate-200 bg-white py-8">
<div className="max-w-7xl mx-auto px-4 overflow-hidden">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-8 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-slate-400">BDA Good Practice</span>
<span className="text-xl font-bold tracking-tighter text-slate-400">Invisalign Platinum</span>
<span className="text-xl font-bold tracking-tighter text-slate-400">ADI Member</span>
<span className="text-xl font-bold tracking-tighter text-slate-400">BACD Member</span>
<span className="text-xl font-bold tracking-tighter text-slate-400">Dentistry Awards Winner</span>
</div>
</div>
</section>

<section className="py-24 bg-slate-50" id="treatments">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">Our Expertise</span>
<h2 className="text-3xl md:text-4xl font-bold text-navy-900 mt-2 mb-4">Comprehensive Care for Your Smile</h2>
<p className="text-slate-600">From routine hygiene to complex smile makeovers, our expert team in Sandbach delivers exceptional results.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[300px]">

<div className="md:col-span-2 group relative overflow-hidden rounded-3xl shadow-sm hover:shadow-xl transition-all duration-300">
<img alt="Dental Implants" className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?auto=format&amp;fit=crop&amp;q=80&amp;w=1000"/>
<div className="absolute inset-0 bg-gradient-to-t from-navy-900/90 to-transparent"></div>
<div className="absolute bottom-0 left-0 p-8">
<div className="bg-brand-500 w-12 h-12 rounded-full flex items-center justify-center text-white mb-4">
<iconify-icon className="text-2xl" icon="solar:tooth-linear"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-white mb-2">Dental Implants</h3>
<p className="text-slate-200 mb-4 line-clamp-2">Permanent solutions for missing teeth. Restore function and aesthetics with our advanced implant technology.</p>
<a className="text-brand-300 font-semibold flex items-center gap-2 group-hover:gap-3 transition-all" href="#">Learn more <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></a>
</div>
</div>

<div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between">
<div>
<div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:smile-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-navy-900 mb-2">Invisalign®</h3>
<p className="text-slate-600 text-sm">Discreet teeth straightening using clear aligners. Perfect for adults and teens.</p>
</div>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between">
<div>
<div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-navy-900 mb-2">Cosmetic Dentistry</h3>
<p className="text-slate-600 text-sm">Veneers, composite bonding, and teeth whitening for your dream smile.</p>
</div>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="group relative bg-white rounded-3xl p-8 shadow-sm hover:shadow-xl transition-all duration-300 border border-slate-100 flex flex-col justify-between">
<div>
<div className="bg-brand-100 w-12 h-12 rounded-full flex items-center justify-center text-brand-600 mb-6">
<iconify-icon className="text-2xl" icon="solar:heart-angle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-navy-900 mb-2">General Dentistry</h3>
<p className="text-slate-600 text-sm">Routine check-ups, hygiene, fillings, and root canals for the whole family.</p>
</div>
<a className="inline-flex items-center justify-center w-10 h-10 rounded-full border border-slate-200 group-hover:bg-brand-500 group-hover:text-white group-hover:border-brand-500 transition-colors" href="#">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>

<div className="md:col-span-1 bg-navy-900 rounded-3xl p-8 text-white flex flex-col justify-center relative overflow-hidden group">
<div className="absolute top-0 right-0 w-32 h-32 bg-brand-500 rounded-full blur-[60px] opacity-20 group-hover:opacity-40 transition-opacity"></div>
<h3 className="text-2xl font-bold mb-4 relative z-10">Anxious Patient?</h3>
<p className="text-slate-300 text-sm mb-6 relative z-10">We specialize in sedation dentistry to make your visit comfortable. We are also an award-winning child-friendly practice.</p>
<a className="bg-brand-500 hover:bg-brand-400 text-white text-center py-3 rounded-xl font-semibold transition-colors relative z-10" href="#">See Sedation Options</a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white relative overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col lg:flex-row gap-16 items-center">
<div className="lg:w-1/2">
<div className="relative">
<div className="absolute -inset-4 bg-brand-100 rounded-full blur-xl opacity-50"></div>
<img alt="Crown Bank Team" className="relative rounded-3xl shadow-2xl w-full object-cover h-[500px]" src="https://www.crownbankdental.co.uk/wp-content/uploads/2022/03/DSC01687-scaled.jpg"/>

<div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl border border-slate-100 max-w-xs animate-bounce" style={{animationDuration: '3s'}}>
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-3xl text-yellow-400" icon="solar:medal-star-bold"></iconify-icon>
<span className="font-bold text-navy-900">Award Winning</span>
</div>
<p className="text-xs text-slate-500">Recognized for excellence in patient care and dentistry.</p>
</div>
</div>
</div>
<div className="lg:w-1/2 space-y-8">
<span className="text-brand-600 font-semibold tracking-wider uppercase text-sm">About Crown Bank Dental</span>
<h2 className="text-4xl font-bold text-navy-900">Dentistry done differently in the heart of Cheshire</h2>
<p className="text-slate-600 text-lg leading-relaxed">
                        Led by Dr. Mehdi Yazdi, our team strives to provide the highest quality of dental care delivered in a safe, friendly, and welcoming environment. Whether you are looking for a complete smile makeover or routine family care, we are here to help.
                    </p>
<div className="space-y-4">
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mt-1">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-navy-900">0% Finance Options</h4>
<p className="text-sm text-slate-500">Spread the cost of your treatment affordably.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mt-1">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-navy-900">Advanced Technology</h4>
<p className="text-sm text-slate-500">iTero scanners and digital planning for precision.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-6 h-6 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 mt-1">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<div>
<h4 className="font-bold text-navy-900">Weekend &amp; Evening Appointments</h4>
<p className="text-sm text-slate-500">Convenient slots to fit your busy schedule.</p>
</div>
</div>
</div>
<a className="inline-block border-b-2 border-brand-500 text-navy-900 font-bold hover:text-brand-600 transition-colors pb-1" href="#team">Meet our full team</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-50" id="reviews">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-3xl font-bold text-navy-900">What our patients say</h2>
<div className="flex justify-center items-center gap-2 mt-2">
<div className="flex text-yellow-400 text-xl">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="font-bold text-navy-900">4.9/5</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-600 italic mb-6">"I feel that I always get considered personal attention from Mehdi Yazdi and his team. Good scheme for maintenance of teeth plus high level expertise."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">BB</div>
<div>
<h4 className="font-bold text-navy-900 text-sm">Bill Boynton</h4>
<span className="text-xs text-slate-400">Google Review</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-600 italic mb-6">"An excellent surgery, all the staff are friendly and make you feel welcome when you arrive. Very professional and caring from all members."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">LA</div>
<div>
<h4 className="font-bold text-navy-900 text-sm">Lee Ashcroft</h4>
<span className="text-xs text-slate-400">Google Review</span>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl shadow-sm border border-slate-100">
<p className="text-slate-600 italic mb-6">"I went under a tooth extraction procedure. Dr Mehdi was very reassuring, helped calm me down as I was anxious. Super smooth."</p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-slate-200 rounded-full flex items-center justify-center font-bold text-slate-500">BD</div>
<div>
<h4 className="font-bold text-navy-900 text-sm">Belen De Pedro</h4>
<span className="text-xs text-slate-400">Google Review</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-navy-900 rounded-3xl p-8 md:p-16 text-center relative overflow-hidden">
<div className="absolute top-0 right-0 w-64 h-64 bg-brand-500 rounded-full blur-[80px] opacity-20"></div>
<div className="absolute bottom-0 left-0 w-64 h-64 bg-brand-300 rounded-full blur-[80px] opacity-10"></div>
<div className="relative z-10">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-6">Ready to transform your smile?</h2>
<p className="text-slate-300 text-lg mb-10 max-w-xl mx-auto">Book your consultation today using our simple online portal, or give our friendly reception team a call.</p>
<div className="flex flex-col sm:flex-row gap-4 justify-center">
<a className="bg-brand-500 hover:bg-brand-400 text-white px-8 py-4 rounded-xl font-bold transition-all shadow-lg hover:shadow-brand-500/50" href="https://t11e-sbabh6b.portal.dental/" target="_blank">
                            Book Online Now
                        </a>
<a className="bg-white/10 hover:bg-white/20 backdrop-blur-md text-white border border-white/20 px-8 py-4 rounded-xl font-bold transition-all" href="tel:01270763777">
                            Call 01270 763 777
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-slate-200 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-brand-500 rounded-lg flex items-center justify-center text-white font-bold">C</div>
<span className="text-navy-900 font-bold tracking-tight">CROWN BANK</span>
</div>
<p className="text-slate-500 text-sm mb-6">
                        1 Crown Bank, Sandbach,<br/>
                        Cheshire, CW11 1FW<br/>
                        United Kingdom
                    </p>
<div className="flex gap-4">
<a className="text-slate-400 hover:text-brand-500 transition" href="#"><iconify-icon className="text-xl" icon="solar:facebook-bold"></iconify-icon></a>
<a className="text-slate-400 hover:text-brand-500 transition" href="#"><iconify-icon className="text-xl" icon="solar:instagram-bold"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-navy-900 mb-6">Treatments</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition" href="#">Dental Implants</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Invisalign®</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Composite Bonding</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Teeth Whitening</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Sedation</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-navy-900 mb-6">Practice</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li><a className="hover:text-brand-600 transition" href="#">About Us</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Meet the Team</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Fees &amp; Plans</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Blog</a></li>
<li><a className="hover:text-brand-600 transition" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-navy-900 mb-6">Opening Hours</h4>
<ul className="space-y-3 text-sm text-slate-500">
<li className="flex justify-between"><span>Mon:</span> <span>09:00 - 19:00</span></li>
<li className="flex justify-between"><span>Tue:</span> <span>09:00 - 15:00</span></li>
<li className="flex justify-between"><span>Wed:</span> <span>08:00 - 17:00</span></li>
<li className="flex justify-between"><span>Thu:</span> <span>09:00 - 15:00</span></li>
<li className="flex justify-between"><span>Fri:</span> <span>08:00 - 16:00</span></li>
</ul>
</div>
</div>
<div className="border-t border-slate-200 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-slate-400">
<p>© 2025 Crown Bank Dental. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Use</a>
<a className="hover:text-slate-600" href="#">CQC Report</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chat-widget">

<div className="bg-white w-80 sm:w-96 rounded-2xl shadow-2xl border border-slate-100 mb-4 overflow-hidden transform scale-0 origin-bottom-right transition-transform duration-300 hidden" id="chat-window">

<div className="bg-brand-500 p-4 flex justify-between items-center text-white">
<div className="flex items-center gap-3">
<div className="relative">
<img alt="Support" className="w-10 h-10 rounded-full border-2 border-white/30" src="https://i.pravatar.cc/100?img=32"/>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-brand-500 rounded-full"></span>
</div>
<div>
<h4 className="font-bold text-sm">Crown Bank Assistant</h4>
<p className="text-xs text-brand-100">Typically replies instantly</p>
</div>
</div>
<button className="text-white hover:bg-white/20 rounded-full p-1 transition" onclick="toggleChat()">
<iconify-icon className="text-xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4" id="chat-messages">

<div className="flex items-start gap-2.5">
<div className="w-8 h-8 rounded-full bg-brand-100 flex items-center justify-center text-brand-600 text-xs font-bold">CB</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-slate-600 border border-slate-100 max-w-[85%]">
                        Hello! Welcome to Crown Bank Dental. How can I help you smile today?
                    </div>
</div>

<div className="flex flex-col gap-2 ml-10" id="chat-options">
<button className="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200" onclick="handleOption('book')">
                        📅 I want to book an appointment
                    </button>
<button className="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200" onclick="handleOption('price')">
                        💰 What are your prices?
                    </button>
<button className="bg-brand-50 hover:bg-brand-100 text-brand-700 text-sm py-2 px-4 rounded-xl text-left transition border border-brand-200" onclick="handleOption('emergency')">
                        🆘 I have a dental emergency
                    </button>
</div>
</div>

<div className="p-3 border-t border-slate-100 bg-white">
<div className="relative">
<input className="w-full bg-slate-100 text-sm rounded-full py-2.5 px-4 focus:outline-none cursor-not-allowed" disabled="" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-2 text-brand-400"><iconify-icon icon="solar:plain-bold"></iconify-icon></button>
</div>
<div className="text-center mt-2">
<p className="text-[10px] text-slate-400">Powered by Crown Bank AI</p>
</div>
</div>
</div>

<button className="bg-brand-500 hover:bg-brand-600 text-white w-14 h-14 rounded-full shadow-lg shadow-brand-500/40 flex items-center justify-center transition-all hover:scale-110 group relative" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 w-4 h-4 bg-red-500 rounded-full border-2 border-white"></span>
<iconify-icon className="text-2xl group-hover:animate-pulse" icon="solar:chat-round-dots-bold"></iconify-icon>
</button>
</div>



    </>
  );
}
