import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 50) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-[#f9f2e6]/90', 'bg-[#f9f2e6]/95');
            } else {
                nav.classList.remove('shadow-sm');
                nav.classList.replace('bg-[#f9f2e6]/95', 'bg-[#f9f2e6]/90');
            }
        });

        // Mobile Menu
        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            const isOpen = !menu.classList.contains('translate-x-full');
            if (isOpen) {
                menu.classList.add('translate-x-full');
            } else {
                menu.classList.remove('translate-x-full');
            }
        }

        // Detailed Chatbot Logic
        let isChatOpen = false;
        const chatWindow = document.getElementById('chat-window');
        const chatTrigger = document.getElementById('chat-trigger');
        const messagesContainer = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        const typingIndicator = document.getElementById('typing-indicator');

        function toggleChat() {
            isChatOpen = !isChatOpen;
            if (isChatOpen) {
                chatWindow.classList.remove('chat-closed');
                chatWindow.classList.add('chat-open');
                // We keep the trigger visible but maybe morph it or hide it
                chatTrigger.classList.add('opacity-0', 'scale-50');
                chatTrigger.classList.remove('animate-bounce');
                
                // Focus input
                setTimeout(() => chatInput.focus(), 300);
            } else {
                chatWindow.classList.remove('chat-open');
                chatWindow.classList.add('chat-closed');
                chatTrigger.classList.remove('opacity-0', 'scale-50');
            }
        }

        function handleKeyPress(e) {
            if (e.key === 'Enter') handleSend();
        }

        function getCurrentTime() {
            const now = new Date();
            let hours = now.getHours();
            const minutes = now.getMinutes().toString().padStart(2, '0');
            const ampm = hours >= 12 ? 'PM' : 'AM';
            hours = hours % 12;
            hours = hours ? hours : 12; 
            return `${hours}:${minutes} ${ampm}`;
        }

        function handleSend() {
            const text = chatInput.value.trim();
            if (text) {
                sendUserMessage(text);
                chatInput.value = '';
            }
        }

        function sendUserMessage(text) {
            // Add user message
            const userMsg = document.createElement('div');
            userMsg.className = 'flex flex-col items-end gap-1 mb-4 msg-anim';
            userMsg.innerHTML = `
                <div class="bg-[#c06c4b] text-white p-3.5 rounded-2xl rounded-br-none shadow-md max-w-[85%] text-sm leading-relaxed">
                    ${text}
                </div>
                <div class="flex items-center gap-1">
                    <span class="text-[10px] text-stone-400">${getCurrentTime()}</span>
                    <iconify-icon icon="solar:check-read-linear" class="text-stone-400 text-xs"></iconify-icon>
                </div>
            `;
            
            // Insert before typing indicator
            messagesContainer.insertBefore(userMsg, typingIndicator);
            scrollToBottom();

            // Simulate typing
            setTimeout(() => {
                showTyping();
            }, 600);
        }

        function scrollToBottom() {
            messagesContainer.scrollTop = messagesContainer.scrollHeight;
        }

        function showTyping() {
            typingIndicator.classList.remove('hidden');
            typingIndicator.classList.add('flex');
            scrollToBottom();

            // Remove typing and show response after delay
            setTimeout(() => {
                typingIndicator.classList.add('hidden');
                typingIndicator.classList.remove('flex');
                sendBotResponse();
            }, 2000); // Slower, more realistic delay
        }

        function sendBotResponse() {
            const responses = [
                "I'd love to help with that. Could you share your phone number so one of our treatment coordinators can text you the details?",
                "That's a popular question! We actually have a dedicated consultation for that. Would you like to check our availability?",
                "We offer flexible 0% finance options to make that easier. Is that something you'd be interested in discussing?",
                "We pride ourselves on our nervous patient care. You're in safe hands here. 🌿"
            ];
            const randomResponse = responses[Math.floor(Math.random() * responses.length)];

            const botMsg = document.createElement('div');
            botMsg.className = 'flex items-end gap-2 mb-4 msg-anim';
            botMsg.innerHTML = `
                <div class="w-6 h-6 rounded-full bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">DB</div>
                <div class="bg-white p-3.5 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-stone-700 border border-stone-200/50 max-w-[85%] text-sm leading-relaxed">
                    <p>${randomResponse}</p>
                    <span class="text-[10px] text-stone-400 block mt-2 text-right">${getCurrentTime()}</span>
                </div>
            `;
            
            messagesContainer.insertBefore(botMsg, typingIndicator);
            scrollToBottom();
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full z-50 transition-all duration-300 backdrop-blur-md border-b border-stone-200/50" id="navbar">
<div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">

<a className="flex items-center gap-2 group" href="#">
<img alt="The Dental Barns" className="h-10 w-auto opacity-90 group-hover:opacity-100 transition-opacity" src="https://cdn.prod.website-files.com/677cf86cf9952f978d94d80c/681c892759ed35c51acb5fe3_the-dental-barns-blackbrook-lichfield-logo.svg.svg"/>
<div className="hidden md:block leading-none">
<span className="block text-sm font-medium tracking-tight uppercase">The Dental Barns</span>
<span className="block text-[10px] tracking-widest text-stone-500 uppercase">Lichfield</span>
</div>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-light tracking-wide">
<a className="hover:text-[#c06c4b] transition-colors" href="#services">Services</a>
<a className="hover:text-[#c06c4b] transition-colors" href="#experience">Experience</a>
<a className="hover:text-[#c06c4b] transition-colors" href="#smiles">Smile Gallery</a>
<a className="hover:text-[#c06c4b] transition-colors" href="#fees">Fees</a>

<a className="bg-[#c06c4b] text-white px-5 py-2.5 rounded-full hover:bg-[#a35638] transition-all duration-300 flex items-center gap-2 shadow-sm hover:shadow-md transform hover:-translate-y-0.5" href="#book">
<span>First Visit</span>
<iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>

<button className="md:hidden text-2xl focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<div className="fixed inset-0 bg-[#f9f2e6] z-40 transform translate-x-full transition-transform duration-300 flex flex-col justify-center items-center gap-8 text-xl font-light" id="mobile-menu">
<button className="absolute top-6 right-6 text-3xl" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
<a href="#services" onclick="toggleMobileMenu()">Services</a>
<a href="#experience" onclick="toggleMobileMenu()">Experience</a>
<a href="#smiles" onclick="toggleMobileMenu()">Smile Gallery</a>
<a href="#fees" onclick="toggleMobileMenu()">Fees</a>
<a className="text-[#c06c4b]" href="#book" onclick="toggleMobileMenu()">First Visit</a>
</div>
</nav>

<header className="relative min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 z-0">
<img alt="Luxury Dental Clinic Lounge" className="w-full h-full object-cover opacity-90" src="https://cdn.prod.website-files.com/677cf86cf9952f978d94d80c/696a68470000e3ad7b5a833c_boutique-dental-practice-amenities-the-dental-barns-lichfield-sutton-coldfield.webp"/>
<div className="absolute inset-0 bg-gradient-to-b from-[#f9f2e6]/20 via-transparent to-[#f9f2e6]"></div>
</div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center animate-fade-in">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-stone-800/20 bg-white/40 backdrop-blur-sm mb-6">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#c06c4b] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#c06c4b]"></span>
</span>
<span className="text-xs font-medium tracking-wide uppercase text-stone-800">Accepting New Private Patients</span>
</div>
<h1 className="text-5xl md:text-7xl font-light tracking-tight text-stone-900 mb-6 leading-[1.1]">
                Award-winning <span className="serif italic text-[#c06c4b]">Cosmetic</span> <br/> Dentistry in Lichfield.
            </h1>
<p className="text-lg md:text-xl text-stone-600 font-light max-w-2xl mx-auto mb-10 leading-relaxed">
                Designed around you. Unhurried, considered care in a spa-like environment. Discover bespoke dentistry that puts your comfort first.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-[#c06c4b] text-white px-8 py-4 rounded-full hover:bg-[#a35638] transition-all duration-300 flex items-center justify-center gap-2 shadow-lg hover:shadow-xl text-sm font-medium tracking-wide" href="#book">
                    Start Your Journey
                    <iconify-icon className="text-lg" icon="solar:calendar-add-linear"></iconify-icon>
</a>
<a className="w-full sm:w-auto bg-white/80 backdrop-blur-md text-stone-800 px-8 py-4 rounded-full hover:bg-white transition-all duration-300 flex items-center justify-center gap-2 border border-stone-200 text-sm font-medium tracking-wide" href="#smiles">
                    View Smile Gallery
                    <iconify-icon className="text-lg" icon="solar:gallery-linear"></iconify-icon>
</a>
</div>

<div className="mt-16 flex flex-wrap justify-center gap-8 opacity-70 grayscale hover:grayscale-0 transition-all duration-500">
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl mb-1" icon="solar:cup-star-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest">Private Dentistry 2025</span>
</div>
<div className="flex flex-col items-center">
<iconify-icon className="text-3xl mb-1" icon="solar:medal-star-linear"></iconify-icon>
<span className="text-[10px] uppercase tracking-widest">Dentistry Awards 2025</span>
</div>
</div>
</div>
</header>

<section className="py-24 px-6 relative overflow-hidden" id="services">
<div className="max-w-7xl mx-auto">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-4xl serif font-light text-stone-900 mb-4">Our Expertise</h2>
<p className="text-stone-600 font-light max-w-md">Comprehensive cosmetic and general dentistry, tailored to your unique facial features.</p>
</div>
<a className="hidden md:flex items-center gap-2 text-[#c06c4b] hover:text-[#a35638] transition-colors text-sm font-medium tracking-wide mt-4 md:mt-0" href="#">
                    See All Treatments <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Smile Design" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/67837ee85ee175873126e461/686e77c368753ee9eed4975e_the-dental-barns-blackbrook-lichfield-dr-keely-thorne-smile-consultation.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-white text-2xl font-light mb-2 serif">Smile Design</h3>
<p className="text-white/80 text-sm font-light mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Bespoke artistry combining technology and natural aesthetics.</p>
<span className="inline-flex items-center gap-2 text-white text-sm tracking-wide border-b border-white/30 pb-1 w-fit group-hover:border-white transition-colors">Discover <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Invisalign" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/67837ee85ee175873126e461/686e3b4536c79ebb53ddfa3a_the-dental-barns-blackbrook-lichfield-invisalign-platinum-provider.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-white text-2xl font-light mb-2 serif">Invisalign®</h3>
<p className="text-white/80 text-sm font-light mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Discreet teeth straightening with the world's most advanced clear aligner system.</p>
<span className="inline-flex items-center gap-2 text-white text-sm tracking-wide border-b border-white/30 pb-1 w-fit group-hover:border-white transition-colors">Discover <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>

<div className="group relative h-[400px] rounded-2xl overflow-hidden cursor-pointer">
<img alt="Composite Bonding" className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://cdn.prod.website-files.com/67837ee85ee175873126e461/68714118e955e71cb5ada18b_the-dental-barns-blackbrook-lichfield-composite-bonding.webp"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent p-8 flex flex-col justify-end">
<h3 className="text-white text-2xl font-light mb-2 serif">Composite Bonding</h3>
<p className="text-white/80 text-sm font-light mb-4 translate-y-4 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-500">Same-day smile enhancements using minimally invasive techniques.</p>
<span className="inline-flex items-center gap-2 text-white text-sm tracking-wide border-b border-white/30 pb-1 w-fit group-hover:border-white transition-colors">Discover <iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon></span>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-stone-100" id="experience">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative">
<div className="aspect-[4/5] rounded-lg overflow-hidden shadow-2xl">

<img alt="Sensory Experience" className="bg-center w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b1ea9426-d39c-41e0-8dc1-3e7bf155b4c6_1600w.png"/>
</div>
<div className="absolute -bottom-8 -right-8 bg-white p-6 shadow-xl rounded-lg max-w-xs hidden md:block">
<p className="text-sm font-light italic text-stone-600">"The space is infused with bespoke scents, inspired by high-end hotels, creating an atmosphere of calm."</p>
</div>
</div>
<div>
<h2 className="text-4xl serif font-light text-stone-900 mb-6">A Sensory Experience</h2>
<p className="text-stone-600 mb-10 leading-relaxed font-light">
                        We believe confidence comes from feeling good inside and out. We’ve created an environment that soothes and inspires, designed with care focusing on the five senses.
                    </p>
<div className="space-y-6">

<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-full bg-[#c06c4b]/10 flex items-center justify-center text-[#c06c4b] shrink-0 group-hover:bg-[#c06c4b] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:eye-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Sight</h3>
<p className="text-sm text-stone-500 font-light">Designer home aesthetic with neutral tones and ambient lighting, replacing the clinical feel.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-full bg-[#c06c4b]/10 flex items-center justify-center text-[#c06c4b] shrink-0 group-hover:bg-[#c06c4b] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:music-note-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Sound</h3>
<p className="text-sm text-stone-500 font-light">State-of-the-art audio systems and noise-cancelling headphones for complete relaxation.</p>
</div>
</div>

<div className="flex gap-4 group">
<div className="w-12 h-12 rounded-full bg-[#c06c4b]/10 flex items-center justify-center text-[#c06c4b] shrink-0 group-hover:bg-[#c06c4b] group-hover:text-white transition-colors duration-300">
<iconify-icon className="text-xl" icon="solar:cup-hot-linear"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-stone-900 mb-1">Taste</h3>
<p className="text-sm text-stone-500 font-light">Freshly ground coffee, luxury macaroons, and refined flavors in every aspect of care.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-stone-200 bg-white">
<div className="max-w-7xl mx-auto px-6 text-center mb-8">
<span className="text-xs uppercase tracking-[0.2em] text-stone-400">Our Luxury Partners</span>
</div>
<div className="relative overflow-hidden w-full">
<div className="flex animate-scroll whitespace-nowrap gap-16 items-center w-max px-6">

<span className="text-xl font-serif text-stone-400">Mademoiselle Macaron</span>
<span className="text-xl font-serif text-stone-400">Lavazza</span>
<span className="text-xl font-serif text-stone-400">Sonos</span>
<span className="text-xl font-serif text-stone-400">JURA</span>
<span className="text-xl font-serif text-stone-400">Samsung</span>
<span className="text-xl font-serif text-stone-400">Elemental Herbology</span>
<span className="text-xl font-serif text-stone-400">Dyson</span>
<span className="text-xl font-serif text-stone-400">Jo Malone London</span>

<span className="text-xl font-serif text-stone-400">Mademoiselle Macaron</span>
<span className="text-xl font-serif text-stone-400">Lavazza</span>
<span className="text-xl font-serif text-stone-400">Sonos</span>
<span className="text-xl font-serif text-stone-400">JURA</span>
<span className="text-xl font-serif text-stone-400">Samsung</span>
<span className="text-xl font-serif text-stone-400">Elemental Herbology</span>
</div>
</div>
</section>

<section className="py-24 px-6 text-center" id="testimonials">
<div className="max-w-4xl mx-auto">
<iconify-icon className="text-4xl text-[#c06c4b] mb-6 opacity-50" icon="bxs:quote-alt-left"></iconify-icon>
<div className="relative h-[200px] overflow-hidden">
<div className="absolute inset-0 flex flex-col justify-center items-center transition-all duration-500 opacity-100" id="t-1">
<h3 className="text-2xl md:text-4xl serif font-light text-stone-900 mb-6 leading-tight">"If you are a nervous patient, I would 110% recommend The Dental Barns."</h3>
<div className="flex items-center gap-2 text-[#c06c4b] mb-2">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-wide uppercase text-stone-500">Petra Dutton</span>
</div>
</div>

<div className="flex justify-center gap-2 mt-4">
<button className="w-2 h-2 rounded-full bg-[#c06c4b]"></button>
<button className="w-2 h-2 rounded-full bg-stone-300"></button>
<button className="w-2 h-2 rounded-full bg-stone-300"></button>
</div>
</div>
</section>

<section className="py-24 px-6 bg-[#1a1a1a] text-[#f9f2e6]" id="book">
<div className="max-w-3xl mx-auto">
<div className="text-center mb-12">
<span className="text-[#c06c4b] text-sm uppercase tracking-widest font-medium mb-2 block">Exclusive Access</span>
<h2 className="text-4xl md:text-5xl serif mb-4">Join our VIP Waitlist</h2>
<p className="text-stone-400 font-light text-lg">The only way to access exclusive appointments and bespoke care.</p>
</div>
<form className="space-y-6 bg-[#262626] p-8 md:p-12 rounded-2xl shadow-2xl border border-stone-800">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">
<div>
<label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">First Name</label>
<input className="w-full bg-[#1a1a1a] border border-stone-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c06c4b] transition-colors" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Last Name</label>
<input className="w-full bg-[#1a1a1a] border border-stone-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c06c4b] transition-colors" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-stone-500 mb-2">Email Address</label>
<input className="w-full bg-[#1a1a1a] border border-stone-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c06c4b] transition-colors" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs uppercase tracking-wider text-[#c06c4b] mb-2">I'm interested in...</label>
<select className="w-full bg-[#1a1a1a] border border-stone-700 rounded-lg px-4 py-3 text-sm focus:outline-none focus:border-[#c06c4b] transition-colors text-stone-300">
<option>Select Treatment</option>
<option>Invisalign</option>
<option>Composite Bonding</option>
<option>Veneers</option>
<option>General Dentistry</option>
<option>Smile Design</option>
</select>
</div>
<div className="flex items-start gap-3 mt-6">
<input className="custom-checkbox mt-1" id="privacy" type="checkbox"/>
<label className="text-xs text-stone-500 font-light leading-relaxed" htmlFor="privacy">
                        I agree to The Dental Barns using my personal data to provide me with information about dental treatment.
                    </label>
</div>
<button className="w-full bg-[#c06c4b] text-white py-4 rounded-full font-medium tracking-wide hover:bg-[#a35638] transition-all duration-300 mt-4" type="button">
                    Reserve My Place
                </button>
<p className="text-center text-[10px] text-stone-600 mt-4">🔒 Your privacy is our promise. We'll only contact you about appointments.</p>
</form>
</div>
</section>

<footer className="bg-[#f9f2e6] pt-16 pb-8 border-t border-stone-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
<div className="md:col-span-1">
<img alt="The Dental Barns" className="h-16 w-auto mb-6 opacity-80" src="https://cdn.prod.website-files.com/677cf86cf9952f978d94d80c/681c892759ed35c51acb5fe3_the-dental-barns-blackbrook-lichfield-logo.svg.svg"/>
<p className="text-xs text-stone-500 font-light leading-relaxed">
                        Unit 2 &amp; 3, Blackbrook Barns,<br/>London Road, Lichfield, WS14 0PS
                    </p>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#c06c4b] mb-4">Explore</h4>
<ul className="space-y-2 text-sm font-light text-stone-600">
<li><a className="hover:text-stone-900" href="#">About Us</a></li>
<li><a className="hover:text-stone-900" href="#">Treatments</a></li>
<li><a className="hover:text-stone-900" href="#">Fees &amp; Finance</a></li>
<li><a className="hover:text-stone-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#c06c4b] mb-4">Connect</h4>
<ul className="space-y-2 text-sm font-light text-stone-600">
<li><a className="hover:text-stone-900 flex items-center gap-2" href="#"><iconify-icon icon="solar:letter-linear"></iconify-icon> info@thedentalbarns.com</a></li>
<li><a className="hover:text-stone-900 flex items-center gap-2" href="#"><iconify-icon icon="solar:phone-linear"></iconify-icon> 01543 753357</a></li>
<li className="flex gap-3 mt-4">
<a className="text-lg hover:text-[#c06c4b]" href="#"><iconify-icon icon="brandico:instagram"></iconify-icon></a>
<a className="text-lg hover:text-[#c06c4b]" href="#"><iconify-icon icon="brandico:facebook"></iconify-icon></a>
</li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium uppercase tracking-widest text-[#c06c4b] mb-4">Hours</h4>
<ul className="space-y-1 text-xs font-light text-stone-600">
<li className="flex justify-between"><span>Mon</span> <span>Closed</span></li>
<li className="flex justify-between"><span>Tue</span> <span>10:00 - 18:00</span></li>
<li className="flex justify-between"><span>Wed</span> <span>08:30 - 17:00</span></li>
<li className="flex justify-between"><span>Thu</span> <span>Closed</span></li>
</ul>
</div>
</div>
<div className="border-t border-stone-200 pt-8 flex flex-col md:flex-row justify-between items-center text-[10px] text-stone-400 font-light">
<p>© 2025 The Dental Barns. All rights reserved.</p>
<div className="flex gap-4 mt-2 md:mt-0">
<a className="hover:text-stone-600" href="#">Privacy Policy</a>
<a className="hover:text-stone-600" href="#">Terms of Service</a>
<a className="hover:text-stone-600" href="#">CQC Info</a>
</div>
</div>
</div>
</footer>

<div className="fixed flex flex-col z-50 right-6 bottom-6 gap-y-4 items-end pointer-events-none sm:pointer-events-auto">

<div className="chat-closed w-80 sm:w-96 bg-white rounded-2xl shadow-2xl shadow-stone-900/10 border border-stone-200/60 overflow-hidden flex flex-col h-[520px] pointer-events-auto ring-1 ring-black/5" id="chat-window">

<div className="bg-[#1a1a1a] p-5 flex items-center justify-between shadow-md relative overflow-hidden">

<div className="absolute top-0 right-0 w-32 h-32 bg-[#c06c4b] rounded-full blur-[60px] opacity-20 -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
<div className="flex items-center gap-3 relative z-10">
<div className="relative">
<div className="w-11 h-11 rounded-full bg-stone-700 border-2 border-stone-800 flex items-center justify-center text-white overflow-hidden shadow-sm">
<img className="w-full h-full object-cover" src="https://cdn.prod.website-files.com/677cf86cf9952f978d94d80c/686e77c368753ee9eed4975e_the-dental-barns-blackbrook-lichfield-dr-keely-thorne-smile-consultation.webp"/>
</div>

<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-[#1a1a1a]"></div>
</div>
<div>
<h5 className="text-white text-sm font-medium tracking-wide">Sarah <span className="text-stone-400 font-normal">from The Barns</span></h5>
<p className="text-[11px] text-stone-400 flex items-center gap-1.5 mt-0.5">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                            Replies instantly
                        </p>
</div>
</div>
<div className="flex items-center gap-2 relative z-10">
<button className="text-stone-400 hover:text-white transition-colors" title="Options">
<iconify-icon className="text-xl" icon="solar:menu-dots-bold"></iconify-icon>
</button>
<button className="text-stone-400 hover:text-white transition-colors p-1" onclick="toggleChat()" title="Close">
<iconify-icon className="text-xl" icon="solar:minimize-square-linear"></iconify-icon>
</button>
</div>
</div>

<div className="flex-1 bg-[#f9f9f9] p-4 overflow-y-auto overflow-x-hidden relative" id="chat-messages">

<div className="text-center mb-6 mt-2">
<span className="text-[10px] font-medium text-stone-400 uppercase tracking-widest bg-stone-100 px-2 py-1 rounded-md">Today</span>
</div>

<div className="flex flex-col gap-2 mb-4 msg-anim">
<div className="flex items-end gap-2">
<div className="w-6 h-6 rounded-full bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold shadow-sm">DB</div>
<div className="bg-white p-3.5 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-stone-700 border border-stone-200/50 max-w-[85%] text-sm leading-relaxed">
<p>Hello! Welcome to The Dental Barns. I'm Sarah, your digital concierge. ✨</p>
</div>
</div>
<div className="flex items-end gap-2">
<div className="w-6 h-6 flex-shrink-0"></div> 
<div className="bg-white p-3.5 rounded-2xl rounded-bl-none shadow-[0_2px_8px_rgba(0,0,0,0.04)] text-stone-700 border border-stone-200/50 max-w-[85%] text-sm leading-relaxed">
<p>Are you looking to enhance your smile or book a routine check-up today?</p>
<span className="text-[10px] text-stone-400 block mt-2 text-right">09:41 AM</span>
</div>
</div>
</div>

<div className="hidden items-end gap-2 mb-4" id="typing-indicator">
<div className="w-6 h-6 rounded-full bg-[#1a1a1a] flex-shrink-0 flex items-center justify-center text-white text-[10px] font-bold">DB</div>
<div className="bg-white px-4 py-3 rounded-2xl rounded-bl-none shadow-sm border border-stone-200/50 flex gap-1 items-center h-[42px]">
<span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-100"></span>
<span className="w-1.5 h-1.5 bg-stone-400 rounded-full animate-bounce delay-200"></span>
</div>
</div>
</div>

<div className="px-4 py-3 bg-[#f9f9f9] border-t border-stone-100">
<div className="flex gap-2 overflow-x-auto no-scrollbar pb-1">
<button className="whitespace-nowrap bg-white border border-stone-200 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#c06c4b] hover:text-white hover:border-[#c06c4b] transition-all shadow-sm" onclick="sendUserMessage('I want to book an appointment')">
                        📅 Book Appointment
                    </button>
<button className="whitespace-nowrap bg-white border border-stone-200 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#c06c4b] hover:text-white hover:border-[#c06c4b] transition-all shadow-sm" onclick="sendUserMessage('How much is Invisalign?')">
                        🦷 Invisalign Costs
                    </button>
<button className="whitespace-nowrap bg-white border border-stone-200 text-stone-600 text-xs font-medium px-3 py-1.5 rounded-full hover:bg-[#c06c4b] hover:text-white hover:border-[#c06c4b] transition-all shadow-sm" onclick="sendUserMessage('Speak to a human')">
                        👤 Speak to Team
                    </button>
</div>
</div>

<div className="p-3 bg-white border-t border-stone-200">
<div className="flex items-center gap-2 bg-stone-50 rounded-full border border-stone-200 px-2 py-1.5 focus-within:ring-2 focus-within:ring-[#c06c4b]/20 focus-within:border-[#c06c4b] transition-all">
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:paperclip-linear"></iconify-icon>
</button>
<input className="flex-1 bg-transparent text-sm text-stone-800 placeholder-stone-400 focus:outline-none py-1.5" id="chat-input" onkeypress="handleKeyPress(event)" placeholder="Type your message..." type="text"/>
<button className="w-8 h-8 flex items-center justify-center text-stone-400 hover:text-stone-600 rounded-full hover:bg-stone-200 transition-colors">
<iconify-icon className="text-lg" icon="solar:emoji-funny-circle-linear"></iconify-icon>
</button>
<button className="w-8 h-8 rounded-full bg-[#c06c4b] text-white flex items-center justify-center hover:bg-[#a35638] transition-colors shadow-md transform hover:scale-105 active:scale-95" onclick="handleSend()">
<iconify-icon className="ml-0.5" icon="solar:plain-3-bold-duotone"></iconify-icon>
</button>
</div>
<div className="text-center mt-2">
<p className="text-[9px] text-stone-400">Powered by <span className="font-medium text-stone-500">The Dental Barns AI</span></p>
</div>
</div>
</div>

<button className="flex hover:scale-105 transition-all duration-300 animate-bounce pointer-events-auto group relative z-50" id="chat-trigger" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] text-white items-center justify-center font-bold">1</span>
</span>
<div className="w-14 h-14 bg-[#c06c4b] rounded-full shadow-xl flex items-center justify-center text-white overflow-hidden border-2 border-white/20">

<iconify-icon className="text-3xl" icon="solar:chat-round-dots-bold-duotone"></iconify-icon>
</div>
</button>
</div>


    </>
  );
}
