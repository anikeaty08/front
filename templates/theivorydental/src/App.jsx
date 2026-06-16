import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Scroll Reveal Animation
        const observerOptions = {
            root: null,
            rootMargin: '0px',
            threshold: 0.1
        };

        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('active');
                }
            });
        }, observerOptions);

        document.querySelectorAll('.reveal').forEach(el => observer.observe(el));

        // Mobile Menu Toggle
        const btn = document.getElementById('mobile-menu-btn');
        const menu = document.getElementById('mobile-menu');

        btn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // Chatbot Logic
        function toggleChat() {
            const window = document.getElementById('chat-window');
            if (window.classList.contains('hidden')) {
                window.classList.remove('hidden');
                setTimeout(() => {
                    window.classList.remove('opacity-0', 'scale-95', 'translate-y-4');
                }, 10);
                document.getElementById('chat-input').focus();
            } else {
                window.classList.add('opacity-0', 'scale-95', 'translate-y-4');
                setTimeout(() => {
                    window.classList.add('hidden');
                }, 300);
            }
        }

        function handleChat(e) {
            e.preventDefault();
            const input = document.getElementById('chat-input');
            const message = input.value.trim();
            const container = document.getElementById('chat-messages');

            if (!message) return;

            // User Message
            const userHtml = `
                <div class="flex gap-2 justify-end chat-anim">
                    <div class="bg-brand-green text-white p-3 rounded-2xl rounded-tr-none shadow-sm text-sm max-w-[85%]">
                        ${message}
                    </div>
                </div>
            `;
            container.insertAdjacentHTML('beforeend', userHtml);
            input.value = '';
            container.scrollTop = container.scrollHeight;

            // Simulated Response
            setTimeout(() => {
                const responses = [
                    "We have appointments available this week. Please call 0208 202 5346 to book.",
                    "We offer both NHS and private treatments tailored to your needs.",
                    "Our address is 158 West Hendon Broadway, London, NW9 7AA.",
                    "Yes, we are currently accepting new patients!",
                    "For emergencies, please call us directly for immediate assistance."
                ];
                const randomResponse = responses[Math.floor(Math.random() * responses.length)];
                
                const botHtml = `
                    <div class="flex gap-2 chat-anim">
                        <div class="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-brand-green text-xs flex-shrink-0 mt-1">I</div>
                        <div class="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600 border border-gray-100 max-w-[85%]">
                            ${randomResponse}
                        </div>
                    </div>
                `;
                container.insertAdjacentHTML('beforeend', botHtml);
                container.scrollTop = container.scrollHeight;
            }, 1000);
        }

        // Navbar Scroll Effect
        window.addEventListener('scroll', () => {
            const navbar = document.getElementById('navbar');
            if (window.scrollY > 10) {
                navbar.classList.add('shadow-sm');
                navbar.classList.add('bg-white/95');
                navbar.classList.remove('bg-white/80');
            } else {
                navbar.classList.remove('shadow-sm');
                navbar.classList.remove('bg-white/95');
                navbar.classList.add('bg-white/80');
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="bg-brand-green text-white text-xs py-2 text-center font-medium tracking-wide">
        Accepting New NHS &amp; Private Patients • Emergency Appointments Available Daily
    </div>

<nav className="sticky top-0 z-50 bg-white/80 backdrop-blur-md border-b border-gray-100 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex justify-between items-center h-20">

<div className="flex-shrink-0 flex items-center gap-3">
<div className="w-10 h-10 bg-brand-green/10 rounded-full flex items-center justify-center text-brand-green">
<iconify-icon icon="solar:tooth-linear" width="24"></iconify-icon>
</div>
<a className="flex flex-col" href="#">
<span className="font-serif text-lg text-gray-900 font-semibold tracking-tight leading-none">THE IVORY</span>
<span className="text-[10px] text-gray-500 uppercase tracking-widest mt-0.5">Dental Practice</span>
</a>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#home">Home</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#new-patients">New Patients</a>
<a className="text-sm font-medium text-gray-600 hover:text-brand-green transition-colors" href="#testimonials">Testimonials</a>
<a className="px-5 py-2.5 rounded-full bg-brand-green text-white text-sm font-medium hover:bg-opacity-90 transition-all shadow-sm hover:shadow-md flex items-center gap-2" href="#contact">
<span>Book Appointment</span>
<iconify-icon icon="solar:calendar-add-linear" width="16"></iconify-icon>
</a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-brand-green focus:outline-none" id="mobile-menu-btn">
<iconify-icon icon="solar:hamburger-menu-linear" width="28"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden absolute top-full left-0 w-full bg-white border-b border-gray-100 shadow-xl py-4 px-6 flex flex-col space-y-4" id="mobile-menu">
<a className="text-base font-medium text-gray-800" href="#home">Home</a>
<a className="text-base font-medium text-gray-800" href="#about">About</a>
<a className="text-base font-medium text-gray-800" href="#new-patients">New Patients</a>
<a className="text-base font-medium text-gray-800" href="#testimonials">Testimonials</a>
<a className="text-base font-medium text-brand-green" href="#contact">Book Appointment</a>
</div>
</nav>

<section className="relative pt-20 pb-24 lg:pt-32 lg:pb-40 overflow-hidden" id="home">
<div className="absolute inset-0 z-0">
<img alt="Dental Practice Interior" className="w-full h-full object-cover opacity-[0.08]" src="https://images.unsplash.com/photo-1629909613654-28e377c37b09?q=80&amp;w=2068&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-white/50 to-[#fafafa]"></div>
</div>
<div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
<div className="max-w-3xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-50 border border-green-100 text-brand-green text-xs font-semibold tracking-wide mb-6 reveal">
<span className="w-1.5 h-1.5 rounded-full bg-brand-green animate-pulse"></span>
                    Now accepting new patients
                </div>
<h1 className="text-5xl lg:text-7xl text-gray-900 font-medium tracking-tight mb-6 leading-[1.1] reveal" style={{transitionDelay: '100ms'}}>
                    Classic care for your <br/>
<span className="text-brand-green">modern smile.</span>
</h1>
<p className="text-lg lg:text-xl text-gray-500 mb-10 max-w-xl leading-relaxed reveal" style={{transitionDelay: '200ms'}}>
                    Set within a period Edwardian House, we provide first opinion and restorative dentistry in a first-class environment in West Hendon &amp; North London.
                </p>
<div className="flex flex-col sm:flex-row gap-4 reveal" style={{transitionDelay: '300ms'}}>
<button className="px-8 py-4 rounded-full bg-brand-green text-white text-base font-medium hover:bg-opacity-90 transition-all shadow-lg shadow-green-900/10 flex items-center justify-center gap-2 group" onclick="document.getElementById('contact').scrollIntoView()">
                        Book Consultation
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<a className="px-8 py-4 rounded-full bg-white text-gray-900 border border-gray-200 text-base font-medium hover:bg-gray-50 transition-all flex items-center justify-center gap-2" href="tel:02082025346">
<iconify-icon icon="solar:phone-calling-linear" width="20"></iconify-icon>
                        0208 202 5346
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-white" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div className="relative reveal">
<div className="absolute -inset-4 bg-brand-green/5 rounded-3xl transform -rotate-2"></div>
<img alt="Dental Care" className="relative rounded-2xl shadow-xl w-full h-[500px] object-cover" src="https://images.unsplash.com/photo-1606811841689-23dfddce3e95?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-8 left-8 bg-white/95 backdrop-blur rounded-xl p-6 shadow-lg max-w-xs border border-gray-100">
<div className="flex items-center gap-4 mb-3">
<div className="w-12 h-12 bg-green-50 rounded-full flex items-center justify-center text-brand-green">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-gray-900">Personalised Care</p>
<p className="text-xs text-gray-500">Excellent customer focus</p>
</div>
</div>
<p className="text-sm text-gray-600 leading-relaxed">
                            "We know that you will be well cared for and can trust us with your smile."
                        </p>
</div>
</div>
<div className="reveal" style={{transitionDelay: '200ms'}}>
<h2 className="text-3xl lg:text-4xl text-gray-900 font-medium tracking-tight mb-6">High quality dentistry in a comfortable setting</h2>
<p className="text-gray-500 mb-8 leading-relaxed">
                        Our practice philosophy aims to provide a high quality personalised service with an emphasis on providing excellent customer care. With both NHS and private options available, we cater to all needs in our community.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
<div className="p-6 rounded-2xl bg-gray-50 hover:bg-green-50/50 border border-transparent hover:border-green-100 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-900 group-hover:text-brand-green mb-4">
<iconify-icon icon="solar:medical-kit-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Restorative Dentistry</h3>
<p className="text-sm text-gray-500">Comprehensive solutions to restore the health and beauty of your smile.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 hover:bg-green-50/50 border border-transparent hover:border-green-100 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-900 group-hover:text-brand-green mb-4">
<iconify-icon icon="solar:clock-circle-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Emergency Care</h3>
<p className="text-sm text-gray-500">We provide emergency appointments on a daily basis for urgent needs.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 hover:bg-green-50/50 border border-transparent hover:border-green-100 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-900 group-hover:text-brand-green mb-4">
<iconify-icon icon="solar:bill-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">NHS &amp; Private</h3>
<p className="text-sm text-gray-500">Flexible treatment options tailored to suit your requirements and budget.</p>
</div>
<div className="p-6 rounded-2xl bg-gray-50 hover:bg-green-50/50 border border-transparent hover:border-green-100 transition-all group">
<div className="w-10 h-10 bg-white rounded-lg shadow-sm flex items-center justify-center text-gray-900 group-hover:text-brand-green mb-4">
<iconify-icon icon="solar:home-smile-linear" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-2">Classic Environment</h3>
<p className="text-sm text-gray-500">Situated in a beautiful Edwardian House for a relaxed atmosphere.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-brand-green relative overflow-hidden" id="testimonials">
<div className="absolute top-0 right-0 opacity-10 transform translate-x-1/3 -translate-y-1/3">
<iconify-icon height="400" icon="solar:quote-up-square-linear" width="400"></iconify-icon>
</div>
<div className="max-w-4xl mx-auto px-6 lg:px-8 text-center relative z-10 reveal">
<div className="flex justify-center mb-8 text-white/40">
<iconify-icon icon="solar:stars-linear" width="48"></iconify-icon>
</div>
<h2 className="text-3xl md:text-5xl font-serif text-white leading-tight mb-8">
                “Have never been so relaxed at a dentist. Farah – fantastic!!”
            </h2>
<div className="flex items-center justify-center gap-3">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center text-white font-serif text-lg">N</div>
<div className="text-left">
<p className="text-white font-medium text-lg">Nick Brown</p>
<p className="text-green-100 text-sm">Verified Patient</p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-gray-50" id="contact">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="bg-white rounded-3xl shadow-xl overflow-hidden flex flex-col lg:flex-row min-h-[500px]">

<div className="p-10 lg:p-14 lg:w-1/2 flex flex-col justify-center">
<h2 className="text-3xl font-serif text-gray-900 mb-2">Get in Touch</h2>
<p className="text-gray-500 mb-10">We look forward to welcoming you to our practice.</p>
<div className="space-y-8">
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-green shrink-0">
<iconify-icon icon="solar:map-point-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Visit Us</h3>
<p className="text-gray-600">158 West Hendon Broadway<br/>London, NW9 7AA</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-green shrink-0">
<iconify-icon icon="solar:phone-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Call Us</h3>
<a className="text-xl text-gray-900 font-medium hover:text-brand-green transition-colors" href="tel:02082025346">0208 202 5346</a>
</div>
</div>
<div className="flex items-start gap-4">
<div className="w-10 h-10 bg-gray-50 rounded-full flex items-center justify-center text-brand-green shrink-0">
<iconify-icon icon="solar:clock-circle-linear" width="22"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-gray-900 uppercase tracking-wide mb-1">Opening Hours</h3>
<div className="grid grid-cols-2 gap-x-8 text-sm text-gray-600">
<span>Mon - Fri:</span> <span>9:00am - 5:30pm</span>
<span>Saturday:</span> <span>By Appt Only</span>
<span>Sunday:</span> <span>Closed</span>
</div>
</div>
</div>
</div>
<div className="mt-10 pt-10 border-t border-gray-100">
<p className="text-sm font-medium text-gray-400 mb-4 uppercase tracking-wider">Find us on</p>
<div className="flex gap-4">
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all" href="#">
<iconify-icon icon="solar:facebook-linear" width="20"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center text-gray-600 hover:bg-brand-green hover:text-white hover:border-brand-green transition-all" href="#">
<iconify-icon icon="simple-icons:google" width="18"></iconify-icon>
</a>
</div>
</div>
</div>

<div className="lg:w-1/2 bg-gray-100 relative h-96 lg:h-auto min-h-[400px]">
<iframe allowfullscreen="" className="absolute inset-0 w-full h-full object-cover" height="100%" loading="lazy" referrerpolicy="no-referrer-when-downgrade" src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2479.2483669299616!2d-0.23961168422656915!3d51.5820989796475!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x4876104245638c45%3A0x6b2e3e5c024567e!2s158%20W%20Hendon%20Broadway%2C%20London%20NW9%207AA%2C%20UK!5e0!3m2!1sen!2suk!4v1651234567890!5m2!1sen!2suk" style={{border: '0', filter: 'grayscale(100%) contrast(1.1)'}} width="100%">
</iframe>

<div className="absolute bottom-6 right-6 z-10">
<a className="bg-white text-gray-900 px-6 py-3 rounded-full shadow-lg font-medium text-sm flex items-center gap-2 hover:bg-brand-green hover:text-white transition-all transform hover:scale-105" href="https://www.google.com/maps/dir//158+West+Hendon+Broadway,+London+NW9+7AA" target="_blank">
                            Get Directions
                            <iconify-icon icon="solar:map-arrow-right-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-white border-t border-gray-100 py-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-brand-green" icon="solar:tooth-square-linear" width="24"></iconify-icon>
<span className="font-serif font-medium text-gray-900">THE IVORY DENTAL PRACTICE</span>
</div>
<p className="text-sm text-gray-400">© 2025 The Ivory Dental Practice. All rights reserved.</p>
</div>
</footer>

<div className="fixed bottom-6 right-6 z-[100] flex flex-col items-end gap-4 pointer-events-none" id="chatbot-container">

<div className="bg-white w-[350px] h-[450px] rounded-2xl shadow-2xl border border-gray-100 flex flex-col pointer-events-auto transform translate-y-4 opacity-0 scale-95 origin-bottom-right transition-all duration-300 hidden" id="chat-window">

<div className="bg-brand-green p-4 rounded-t-2xl flex justify-between items-center">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-white/20 rounded-full flex items-center justify-center text-white">
<iconify-icon icon="solar:chat-round-dots-linear" width="20"></iconify-icon>
</div>
<div>
<h4 className="text-white font-medium text-sm">Ivory Assistant</h4>
<p className="text-green-100 text-xs flex items-center gap-1">
<span className="w-1.5 h-1.5 bg-green-300 rounded-full animate-pulse"></span> Online
                        </p>
</div>
</div>
<button className="text-white/80 hover:text-white" onclick="toggleChat()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto bg-gray-50 space-y-3" id="chat-messages">
<div className="flex gap-2">
<div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-brand-green text-xs flex-shrink-0 mt-1">I</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600 border border-gray-100 max-w-[85%]">
                        Hello! 👋 Welcome to The Ivory Dental Practice. How can I help you today?
                    </div>
</div>
<div className="flex gap-2">
<div className="w-6 h-6 bg-green-100 rounded-full flex items-center justify-center text-brand-green text-xs flex-shrink-0 mt-1">I</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none shadow-sm text-sm text-gray-600 border border-gray-100 max-w-[85%]">
                        You can ask about our services, NHS availability, or book an emergency appointment.
                    </div>
</div>
</div>

<div className="p-3 bg-white border-t border-gray-100 rounded-b-2xl">
<form className="flex gap-2" onsubmit="handleChat(event)">
<input className="flex-1 bg-gray-50 border border-gray-200 rounded-full px-4 py-2 text-sm focus:outline-none focus:border-brand-green focus:ring-1 focus:ring-brand-green transition-all" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="w-9 h-9 bg-brand-green text-white rounded-full flex items-center justify-center hover:bg-opacity-90 transition-colors shadow-sm" type="submit">
<iconify-icon className="ml-0.5" icon="solar:plain-3-bold" width="18"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="w-14 h-14 bg-brand-green text-white rounded-full shadow-lg hover:shadow-green-900/20 hover:scale-105 transition-all flex items-center justify-center pointer-events-auto relative" onclick="toggleChat()">
<span className="absolute top-0 right-0 w-3 h-3 bg-red-500 rounded-full border-2 border-white"></span>
<iconify-icon icon="solar:chat-square-call-linear" width="28"></iconify-icon>
</button>
</div>


    </>
  );
}
