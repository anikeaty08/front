import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile Menu Logic
        const mobileBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        let isMenuOpen = false;

        mobileBtn.addEventListener('click', () => {
            isMenuOpen = !isMenuOpen;
            if (isMenuOpen) {
                mobileMenu.classList.remove('translate-x-full');
                document.body.style.overflow = 'hidden';
            } else {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
            }
        });

        document.querySelectorAll('#mobile-menu a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('translate-x-full');
                document.body.style.overflow = 'auto';
                isMenuOpen = false;
            });
        });

        // Chatbot Logic
        const chatToggle = document.getElementById('chat-toggle');
        const chatWindow = document.getElementById('chat-window');
        const closeChat = document.getElementById('close-chat');
        const chatForm = document.getElementById('chat-form');
        const chatInput = document.getElementById('chat-input');
        const chatMessages = document.getElementById('chat-messages');
        const chatChips = document.querySelectorAll('.chat-chip');

        // Toggle Chat
        function toggleChat() {
            chatWindow.classList.toggle('hidden');
        }

        chatToggle.addEventListener('click', toggleChat);
        closeChat.addEventListener('click', toggleChat);

        // Add User Message
        function addUserMessage(msg) {
            const div = document.createElement('div');
            div.className = 'flex justify-end gap-2 max-w-[85%] ml-auto chat-enter';
            div.innerHTML = `
                <div class="bg-blue-600 p-3 rounded-2xl rounded-tr-none text-sm text-white shadow-sm">
                    ${msg}
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        // Add Bot Typing Indicator
        function showTyping() {
            const id = 'typing-' + Date.now();
            const div = document.createElement('div');
            div.id = id;
            div.className = 'flex gap-2 max-w-[85%] chat-enter';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                    <iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon>
                </div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1">
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-2 h-2 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
            return id;
        }

        // Add Bot Message
        function addBotMessage(msg) {
            const div = document.createElement('div');
            div.className = 'flex gap-2 max-w-[90%] chat-enter';
            div.innerHTML = `
                <div class="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
                    <iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon>
                </div>
                <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 leading-relaxed">
                    ${msg}
                </div>
            `;
            chatMessages.appendChild(div);
            scrollToBottom();
        }

        function scrollToBottom() {
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        // Bot Logic
        function handleResponse(userText) {
            const typingId = showTyping();
            
            // Simulate network delay
            setTimeout(() => {
                document.getElementById(typingId).remove();
                
                const lowerText = userText.toLowerCase();
                let response = "";

                if (lowerText.includes('book') || lowerText.includes('appointment')) {
                    response = "I can help with that. Are you looking for an <strong class='text-slate-900'>NHS</strong> or <strong class='text-slate-900'>Private</strong> appointment?";
                } else if (lowerText.includes('nhs')) {
                    response = "We provide full NHS treatments including examinations (£25.80) and treatments. We are currently accepting new NHS patients. Would you like to register?";
                } else if (lowerText.includes('private') || lowerText.includes('cost')) {
                    response = "Our private consultations start from £45. We offer flexible payment plans and 0% finance for treatments like Invisalign and Composite Bonding.";
                } else if (lowerText.includes('emergency') || lowerText.includes('pain')) {
                    response = "If you are in severe pain, please call the practice immediately at <a href='tel:01914300207' class='text-blue-600 underline'>0191 430 0207</a>. We have emergency slots available daily.";
                } else if (lowerText.includes('plan')) {
                    response = "Our Dental Care Plan starts at £15/month. It covers your yearly check-ups, hygiene visits, and offers 10% off treatments.";
                } else {
                    response = "Thanks for your message. A member of our team will need to assist with that specific query. Please call us at 0191 430 0207.";
                }

                addBotMessage(response);
            }, 1200);
        }

        // Form Submit
        chatForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const text = chatInput.value.trim();
            if (!text) return;

            addUserMessage(text);
            chatInput.value = '';
            handleResponse(text);
        });

        // Chip Clicks
        chatChips.forEach(chip => {
            chip.addEventListener('click', () => {
                const text = chip.getAttribute('data-msg');
                addUserMessage(text);
                handleResponse(text);
            });
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 glass border-b border-slate-200/60 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="group flex items-center gap-2 z-50" href="#">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:medical-kit-linear" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-slate-900 font-semibold tracking-tighter text-base leading-none group-hover:text-blue-600 transition-colors uppercase">Grange Road West</span>
<span className="text-xs text-slate-400 tracking-wide uppercase mt-0.5">Dental Practice</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#treatments">NHS &amp; Private</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#plan">Care Plan</a>
<a className="text-sm font-medium text-slate-600 hover:text-blue-600 transition-colors" href="#contact">Contact</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden md:flex items-center gap-2 text-sm font-medium text-slate-900 hover:text-blue-600 transition-colors" href="tel:01914300207">
<iconify-icon icon="solar:phone-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    0191 430 0207
                </a>
<a className="hidden md:flex bg-slate-900 hover:bg-slate-800 text-white text-sm font-medium px-5 py-2.5 rounded-full transition-all shadow-lg shadow-slate-200 hover:shadow-xl" href="#contact">
                    Book Online
                </a>

<button className="md:hidden z-50 p-2 text-slate-900" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>

<div className="fixed inset-0 bg-white z-40 transform translate-x-full transition-transform duration-300 flex flex-col pt-24 px-6 gap-6" id="mobile-menu">
<a className="text-2xl font-medium tracking-tight text-slate-900 border-b border-slate-100 pb-4" href="#home">Home</a>
<a className="text-2xl font-medium tracking-tight text-slate-900 border-b border-slate-100 pb-4" href="#about">About Us</a>
<a className="text-2xl font-medium tracking-tight text-slate-900 border-b border-slate-100 pb-4" href="#treatments">Treatments</a>
<a className="text-2xl font-medium tracking-tight text-slate-900 border-b border-slate-100 pb-4" href="#plan">Dental Plan</a>
<a className="text-2xl font-medium tracking-tight text-slate-900 pb-4" href="#contact">Contact</a>
<a className="mt-auto mb-8 w-full bg-blue-600 text-white text-center py-4 rounded-xl text-lg font-medium" href="tel:01914300207">Call 0191 430 0207</a>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden" id="home">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-full z-0 pointer-events-none">
<div className="absolute top-20 left-10 w-96 h-96 bg-blue-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse"></div>
<div className="absolute top-40 right-10 w-96 h-96 bg-sky-200/30 rounded-full blur-3xl mix-blend-multiply animate-pulse" style={{animationDelay: '1s'}}></div>
</div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-12 lg:gap-20">
<div className="lg:w-1/2 flex flex-col items-start text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-100 text-blue-600 text-xs font-medium tracking-wide uppercase mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                        Accepting New Patients
                    </div>
<h1 className="text-5xl lg:text-7xl font-semibold text-slate-900 tracking-tight leading-[1.1] mb-6">
                        Caring for Jarrow's <br/>
<span className="text-gradient">smiles for 100+ years.</span>
</h1>
<p className="text-lg text-slate-500 mb-8 max-w-lg leading-relaxed">
                        Award-winning NHS and private dental care for the whole family. 
                        Experience modern dentistry built on a century of trust at Grange Road West.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex justify-center items-center px-8 py-4 bg-slate-900 text-white rounded-xl font-medium hover:bg-blue-600 transition-all hover:shadow-lg hover:shadow-blue-200 hover:-translate-y-0.5" href="#contact">
                            Book Appointment
                        </a>
<a className="inline-flex justify-center items-center px-8 py-4 bg-white text-slate-900 border border-slate-200 rounded-xl font-medium hover:bg-slate-50 hover:border-slate-300 transition-all" href="#treatments">
                            View Treatments
                        </a>
</div>

<div className="mt-12 flex items-center gap-8 text-sm font-medium text-slate-500">
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            NHS &amp; Private
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-blue-500" icon="solar:check-circle-linear" width="20"></iconify-icon>
                            5 Modern Surgeries
                        </div>
<div className="flex items-center gap-2">
<iconify-icon className="text-yellow-500" icon="solar:star-linear" width="20"></iconify-icon>
                            4.8/5 Reviews
                        </div>
</div>
</div>
<div className="lg:w-1/2 w-full relative">
<div className="relative rounded-2xl overflow-hidden shadow-2xl shadow-slate-200 border border-slate-100 aspect-[4/3] group">

<img alt="Modern Dental Surgery" className="object-cover w-full h-full transform group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?auto=format&amp;fit=crop&amp;q=80&amp;w=2068&amp;ixlib=rb-4.0.3"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/40 to-transparent"></div>

<div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur-md p-4 rounded-xl border border-white/50 shadow-lg max-w-xs">
<div className="flex items-center gap-3 mb-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-300 border-2 border-white"></div>
<div className="w-8 h-8 rounded-full bg-slate-400 border-2 border-white"></div>
</div>
<span className="text-xs font-semibold text-slate-900">10k+ Smiles</span>
</div>
<p className="text-xs text-slate-600">"Excellent service, very friendly staff. Highly recommended."</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-3 gap-8">

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Family Focused</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Owned by Mr. Ian Davies and Mrs. Louise Ward since 2011. We are a family practice dedicated to treating generations of local families.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">NHS &amp; Private</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Comprehensive care options. Whether you need routine NHS check-ups or advanced private cosmetic work, we have you covered.
                    </p>
</div>

<div className="p-8 rounded-3xl bg-slate-50 border border-slate-100 hover:border-blue-100 hover:shadow-xl hover:shadow-blue-50 transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl border border-slate-100 flex items-center justify-center text-blue-600 mb-6 group-hover:bg-blue-600 group-hover:text-white transition-colors shadow-sm">
<iconify-icon icon="solar:clock-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-slate-900 mb-3 tracking-tight">Access &amp; Care</h3>
<p className="text-slate-500 leading-relaxed text-sm">
                        Offering an Urgent Dental Access Centre and flexible hours including late Monday evenings until 7:30pm for your convenience.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-slate-100" id="treatments">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<span className="text-blue-600 font-medium tracking-wide text-sm uppercase">Our Treatments</span>
<h2 className="text-3xl lg:text-4xl font-semibold text-slate-900 mt-3 mb-4 tracking-tight">Comprehensive Dental Care</h2>
<p className="text-slate-500">From routine hygiene to smile makeovers, our 5 modern surgeries are equipped to handle all your dental needs.</p>
</div>
<div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">

<a className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-all hover:shadow-lg" href="#">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
<iconify-icon icon="solar:heart-pulse-linear" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">General Dentistry</h4>
<p className="text-xs text-slate-500">Examinations, Fillings, Root Canals (NHS available).</p>
</a>

<a className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-all hover:shadow-lg" href="#">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
<iconify-icon icon="solar:smile-circle-linear" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Invisalign</h4>
<p className="text-xs text-slate-500">Clear tooth straightening for adults and teens.</p>
</a>

<a className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-all hover:shadow-lg" href="#">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
<iconify-icon icon="solar:stars-minimalistic-linear" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Cosmetic</h4>
<p className="text-xs text-slate-500">Whitening, Composite Bonding, and Veneers.</p>
</a>

<a className="group relative p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-200 transition-all hover:shadow-lg" href="#">
<div className="absolute top-4 right-4 opacity-0 group-hover:opacity-100 transition-opacity text-blue-500">
<iconify-icon icon="solar:arrow-right-up-linear" width="20"></iconify-icon>
</div>
<div className="mb-4 text-slate-400 group-hover:text-blue-500 transition-colors">
<iconify-icon icon="solar:calendar-add-linear" strokeWidth="1.2" width="32"></iconify-icon>
</div>
<h4 className="text-lg font-medium text-slate-900 mb-2">Emergency</h4>
<p className="text-xs text-slate-500">Urgent appointments for dental pain relief.</p>
</a>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="plan">
<div className="absolute inset-0 bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-10"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="md:w-1/2">
<h2 className="text-3xl lg:text-4xl font-semibold mb-6 tracking-tight">Join Our Dental Care Plan</h2>
<p className="text-slate-300 text-lg mb-8 leading-relaxed">
                    A simple, hassle-free monthly fee covers your essential dental health needs. Includes examinations, scale and polish, x-rays, and preventative advice.
                </p>
<ul className="space-y-3 mb-8 text-slate-300">
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                        Spread the cost monthly via Direct Debit
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                        Guaranteed registration at the practice
                    </li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon>
                        10% discount on routine treatments
                    </li>
</ul>
<button className="bg-blue-600 hover:bg-blue-500 text-white px-8 py-3.5 rounded-xl font-medium transition-all shadow-lg shadow-blue-900/50">
                    Sign Up Today
                </button>
</div>
<div className="md:w-1/3 w-full bg-white/10 backdrop-blur-sm border border-white/10 p-8 rounded-3xl">
<div className="text-center">
<p className="text-slate-300 text-sm uppercase tracking-wider mb-2">Starting from just</p>
<div className="text-5xl font-bold mb-2">£15<span className="text-xl font-normal text-slate-400">/mo</span></div>
<p className="text-xs text-slate-400 mb-6">Terms and conditions apply.</p>
<div className="w-full h-px bg-white/10 mb-6"></div>
<p className="text-sm text-slate-300">"The plan makes it so easy to budget for my dental health. Highly recommended."</p>
</div>
</div>
</div>
</section>

<footer className="bg-white pt-24 pb-12 border-t border-slate-200" id="contact">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-4 gap-12 mb-16">

<div className="lg:col-span-1">
<div className="flex items-center gap-2 mb-6">
<div className="w-8 h-8 bg-blue-600 rounded-lg flex items-center justify-center text-white">
<iconify-icon icon="solar:medical-kit-linear" width="20"></iconify-icon>
</div>
<span className="text-slate-900 font-semibold tracking-tight">Grange Road West</span>
</div>
<p className="text-slate-500 text-sm mb-6">
                        Providing excellent dental care for generations of families across Jarrow and South Tyneside.
                    </p>
<div className="flex gap-4">

<div className="px-3 py-1 bg-blue-50 text-blue-700 text-xs font-semibold rounded border border-blue-100">NHS</div>
<div className="px-3 py-1 bg-slate-50 text-slate-700 text-xs font-semibold rounded border border-slate-100">Invisalign</div>
</div>
</div>

<div className="lg:col-span-1">
<h4 className="text-slate-900 font-medium mb-6">Contact Us</h4>
<ul className="space-y-4 text-sm text-slate-500">
<li className="flex items-start gap-3">
<iconify-icon className="text-blue-600 shrink-0 mt-0.5" icon="solar:map-point-linear" width="18"></iconify-icon>
<span>6 Grange Road West,<br/>Jarrow, NE32 3JA</span>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 shrink-0" icon="solar:phone-linear" width="18"></iconify-icon>
<a className="hover:text-blue-600 transition-colors" href="tel:01914300207">0191 430 0207</a>
</li>
<li className="flex items-center gap-3">
<iconify-icon className="text-blue-600 shrink-0" icon="solar:letter-linear" width="18"></iconify-icon>
<a className="hover:text-blue-600 transition-colors" href="mailto:info@jarrowdentists.co.uk">info@jarrowdentists.co.uk</a>
</li>
</ul>
</div>

<div className="lg:col-span-1">
<h4 className="text-slate-900 font-medium mb-6">Opening Hours</h4>
<ul className="space-y-2 text-sm text-slate-500">
<li className="flex justify-between"><span>Monday</span> <span className="text-slate-900">9:00 - 19:30</span></li>
<li className="flex justify-between"><span>Tue - Fri</span> <span className="text-slate-900">9:00 - 17:00</span></li>
<li className="flex justify-between text-slate-400"><span>Weekends</span> <span>Closed</span></li>
<li className="text-xs text-orange-500 mt-2 pt-2 border-t border-slate-100">Closed for lunch: 13:15 - 14:00</li>
</ul>
</div>

<div className="lg:col-span-1 h-48 bg-slate-100 rounded-2xl relative overflow-hidden group">

<iframe allowfullscreen="" className="grayscale hover:grayscale-0 transition-all duration-500 opacity-80 hover:opacity-100" height="100%" loading="lazy" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2288.932975459392!2d-1.492576684074254!3d54.98188298035418!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x487e7aa7c30f4063%3A0xe548074c3e86c0c2!2sGrange%20Road%20West%20Dental%20Practice!5e0!3m2!1sen!2suk!4v1620000000000!5m2!1sen!2suk" style={{border: '0'}} width="100%"></iframe>
</div>
</div>
<div className="border-t border-slate-100 pt-8 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400">
<p>© 2025 Grange Road West Dental Practice. All rights reserved.</p>
<div className="flex gap-6">
<a className="hover:text-slate-600" href="#">Privacy Policy</a>
<a className="hover:text-slate-600" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end" id="chatbot-container">

<div className="hidden mb-4 w-[350px] bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden transform origin-bottom-right transition-all duration-300" id="chat-window">

<div className="bg-slate-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:user-speak-rounded-bold-duotone" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-500 border-2 border-slate-900 rounded-full"></div>
</div>
<div>
<h5 className="text-white text-sm font-medium">Practice Support</h5>
<p className="text-slate-400 text-xs">Replies instantly</p>
</div>
</div>
<button className="text-slate-400 hover:text-white transition-colors" id="close-chat">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="h-[350px] p-4 overflow-y-auto bg-slate-50 flex flex-col gap-3" id="chat-messages">

<div className="flex gap-2 max-w-[85%] chat-enter">
<div className="w-8 h-8 rounded-full bg-blue-100 flex-shrink-0 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:medical-kit-linear" width="16"></iconify-icon>
</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600">
                        Hello! Welcome to Grange Road West. How can I help you today?
                    </div>
</div>

<div className="flex flex-wrap gap-2 ml-10 chat-enter" style={{animationDelay: '0.1s'}}>
<button className="chat-chip bg-white border border-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" data-msg="Book Appointment">Book Appointment</button>
<button className="chat-chip bg-white border border-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" data-msg="NHS Treatments">NHS Info</button>
<button className="chat-chip bg-white border border-blue-100 text-blue-600 text-xs px-3 py-1.5 rounded-full hover:bg-blue-50 transition-colors" data-msg="Emergency">Emergency</button>
</div>
</div>

<form className="p-3 bg-white border-t border-slate-100 flex gap-2" id="chat-form">
<input className="flex-1 bg-slate-50 border border-slate-200 rounded-xl px-4 py-2 text-sm focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-all" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="bg-blue-600 hover:bg-blue-700 text-white w-10 h-10 rounded-xl flex items-center justify-center transition-colors" type="submit">
<iconify-icon icon="solar:plain-3-bold" width="20"></iconify-icon>
</button>
</form>
</div>

<button className="bg-blue-600 hover:bg-blue-700 text-white w-14 h-14 rounded-full shadow-lg shadow-blue-600/30 flex items-center justify-center transition-all hover:scale-105 active:scale-95 group" id="chat-toggle">
<iconify-icon className="group-hover:hidden" icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
<iconify-icon className="hidden group-hover:block" icon="solar:close-circle-bold" width="28"></iconify-icon>
</button>
</div>


    </>
  );
}
