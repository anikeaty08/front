import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // --- Navigation Toggle ---
        const toggleBtn = document.querySelector('[data-collapse-toggle="navbar-sticky"]');
        const menu = document.getElementById('navbar-sticky');
        toggleBtn.addEventListener('click', () => {
            menu.classList.toggle('hidden');
        });

        // --- Scroll Reveal ---
        const revealElements = document.querySelectorAll('.reveal');
        const revealOnScroll = () => {
            const windowHeight = window.innerHeight;
            const elementVisible = 100;
            revealElements.forEach((reveal) => {
                const elementTop = reveal.getBoundingClientRect().top;
                if (elementTop < windowHeight - elementVisible) {
                    reveal.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealOnScroll);
        revealOnScroll();

        // --- Quiz Success State ---
        function showSuccess() {
            document.querySelector('#quiz-section form').classList.add('hidden');
            document.querySelector('#quiz-success').classList.remove('hidden');
        }

        // --- Lead Magnet Modal Logic ---
        const leadModal = document.getElementById('lead-modal');
        const leadModalContent = document.getElementById('lead-modal-content');
        
        // Show after 15 seconds
        setTimeout(() => {
            leadModal.classList.remove('hidden');
            setTimeout(() => {
                leadModal.classList.remove('opacity-0');
                leadModalContent.classList.remove('scale-95');
                leadModalContent.classList.add('scale-100');
            }, 50);
        }, 15000);

        function closeModal() {
            leadModal.classList.add('opacity-0');
            leadModalContent.classList.add('scale-95');
            setTimeout(() => {
                leadModal.classList.add('hidden');
            }, 300);
        }

        // --- Booking Toast Logic ---
        setTimeout(() => {
            const toast = document.getElementById('booking-toast');
            if(toast) {
                toast.classList.remove('translate-y-32');
                setTimeout(() => { toast.classList.add('translate-y-32'); }, 6000);
            }
        }, 3000);

        // --- Chatbot Logic ---
        const chatWindow = document.getElementById('chat-window');
        const chatMessages = document.getElementById('chat-messages');
        const chatInput = document.getElementById('chat-input');
        
        function toggleChat() {
            chatWindow.classList.toggle('hidden');
        }
        function toggleQuiz() {
            document.getElementById('quiz-section').scrollIntoView({behavior: 'smooth'});
        }

        function sendQuickMsg(text) {
            chatInput.value = text;
            handleChat(new Event('submit'));
        }

        function addMessage(text, isUser = false) {
            const div = document.createElement('div');
            div.className = isUser ? "flex justify-end" : "flex gap-3";
            
            if (isUser) {
                div.innerHTML = `<div class="bg-slate-900 text-white p-3 rounded-2xl rounded-tr-none text-sm max-w-[85%]">${text}</div>`;
            } else {
                div.innerHTML = `
                    <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                         <iconify-icon icon="solar:chatbot-linear" width="18"></iconify-icon>
                    </div>
                    <div class="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 max-w-[85%]">${text}</div>
                `;
            }
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function showTyping() {
            const div = document.createElement('div');
            div.id = 'typing-indicator';
            div.className = "flex gap-3";
            div.innerHTML = `
                 <div class="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
                     <iconify-icon icon="solar:chatbot-linear" width="18"></iconify-icon>
                </div>
                <div class="bg-white p-4 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm flex gap-1 items-center">
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                    <div class="w-1.5 h-1.5 bg-slate-400 rounded-full typing-dot"></div>
                </div>
            `;
            chatMessages.appendChild(div);
            chatMessages.scrollTop = chatMessages.scrollHeight;
        }

        function removeTyping() {
            const el = document.getElementById('typing-indicator');
            if(el) el.remove();
        }

        function handleChat(e) {
            e.preventDefault();
            const text = chatInput.value.trim();
            if(!text) return;

            addMessage(text, true);
            chatInput.value = '';
            showTyping();

            // Simulate AI logic
            setTimeout(() => {
                removeTyping();
                let response = "I'm not sure about that, but Yulia can definitely help! Please fill out the contact form.";
                const lower = text.toLowerCase();
                
                if(lower.includes('hello') || lower.includes('hi')) response = "Hello! Looking for your next adventure?";
                else if(lower.includes('price') || lower.includes('cost')) response = "Our bespoke packages vary based on your needs, but we often beat direct booking prices thanks to our supplier networks!";
                else if(lower.includes('honeymoon')) response = "Honeymoons are our speciality! From Maldives to Safari, we can add VIP perks like room upgrades and champagne.";
                else if(lower.includes('contact') || lower.includes('email')) response = "You can reach Yulia directly at the form below or email yulia.oneill@ite.travel.";
                else if(lower.includes('deal') || lower.includes('offer')) response = "We have some exclusive offers for Caribbean cruises right now. Would you like to see them?";

                addMessage(response);
            }, 1500);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed bottom-6 left-6 z-[60] bg-white/90 backdrop-blur-md border border-slate-200 p-4 rounded-xl shadow-2xl shadow-slate-200/50 transform translate-y-32 transition-transform duration-500 flex items-center gap-4 max-w-xs hidden md:flex" id="booking-toast">
<div className="relative">
<div className="w-10 h-10 bg-slate-100 rounded-full flex items-center justify-center overflow-hidden">
<iconify-icon className="text-slate-300" icon="solar:user-circle-bold" width="40"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-3 h-3 bg-green-500 rounded-full border-2 border-white"></div>
</div>
<div>
<p className="text-xs text-slate-500 font-medium">Just enquired</p>
<p className="text-sm font-semibold text-slate-900 leading-tight">Sarah from London <br/><span className="text-slate-500 font-normal">for a Maldives Honeymoon</span></p>
</div>
<button className="absolute top-2 right-2 text-slate-400 hover:text-slate-600" onclick="document.getElementById('booking-toast').classList.add('translate-y-32')">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<nav className="fixed w-full z-50 top-0 start-0 border-b border-white/10 bg-white/80 backdrop-blur-xl transition-all duration-300">
<div className="max-w-7xl mx-auto flex flex-wrap items-center justify-between px-6 py-4">
<a className="flex items-center space-x-2 group relative z-50" href="#">
<div className="p-1.5 bg-slate-900 text-white rounded-lg group-hover:rotate-12 transition-transform duration-300 shadow-lg shadow-slate-900/20">
<iconify-icon icon="solar:plane-bold-duotone" width="24"></iconify-icon>
</div>
<span className="self-center text-lg font-bold tracking-tight text-slate-900">Travel Tribe UK</span>
</a>
<div className="flex md:order-2 space-x-3 md:space-x-4 items-center">
<a className="hidden md:inline-flex items-center gap-2 text-white bg-slate-900 hover:bg-slate-800 focus:ring-4 focus:ring-slate-200 font-medium rounded-full text-sm px-6 py-2.5 transition-all hover:scale-105 shadow-lg shadow-slate-900/20" href="#contact">
<span>Enquire Now</span>
<iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<button className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm text-slate-500 rounded-lg md:hidden hover:bg-slate-100 focus:outline-none focus:ring-2 focus:ring-slate-200" data-collapse-toggle="navbar-sticky" type="button">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
<div className="items-center justify-between hidden w-full md:flex md:w-auto md:order-1" id="navbar-sticky">
<ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-slate-100 rounded-lg bg-slate-50 md:space-x-8 md:flex-row md:mt-0 md:border-0 md:bg-transparent">
<li><a className="block py-2 px-3 text-slate-900 rounded md:p-0 hover:text-slate-600 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full" href="#">Home</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded md:p-0 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full" href="#services">Services</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded md:p-0 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full" href="#destinations">Destinations</a></li>
<li><a className="block py-2 px-3 text-slate-600 rounded md:p-0 hover:text-slate-900 transition-colors relative after:content-[''] after:absolute after:-bottom-1 after:left-0 after:w-0 after:h-0.5 after:bg-slate-900 after:transition-all hover:after:w-full" href="#testimonials">Reviews</a></li>
</ul>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 -left-4 w-72 h-72 bg-blue-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-emerald-100 rounded-full mix-blend-multiply filter blur-3xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="absolute inset-0 -z-10 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:40px_40px] [mask-image:radial-gradient(ellipse_60%_50%_at_50%_0%,#000_70%,transparent_100%)]"></div>
<div className="max-w-7xl mx-auto px-6 grid lg:grid-cols-2 gap-16 items-center">
<div className="space-y-8 reveal active">
<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white border border-slate-200 shadow-sm text-xs font-semibold text-slate-600 tracking-wide uppercase hover:border-slate-300 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                    Independent Travel Expert (ITE)
                </div>
<h1 className="text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-slate-900 leading-[1.05]">
                    Travel designed <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-900 to-slate-500">around you.</span>
</h1>
<p className="text-lg md:text-xl text-slate-500 leading-relaxed max-w-lg">
                    Stop searching, start dreaming. I build bespoke luxury holidays, cruises, and accessible travel plans handled with personal care and total financial protection.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="group relative inline-flex justify-center items-center py-3.5 px-8 text-base font-semibold text-white rounded-full bg-slate-900 overflow-hidden shadow-xl shadow-slate-900/20 transition-all hover:scale-105 hover:shadow-2xl hover:shadow-slate-900/30" href="#contact">
<span className="relative z-10 flex items-center gap-2">
                            Start Your Journey
                            <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear"></iconify-icon>
</span>
<div className="absolute inset-0 bg-slate-800 transform scale-x-0 group-hover:scale-x-100 transition-transform origin-left duration-500"></div>
</a>
<button className="inline-flex justify-center items-center py-3.5 px-8 text-base font-medium text-slate-700 rounded-full border border-slate-200 bg-white hover:bg-slate-50 hover:border-slate-300 focus:ring-4 focus:ring-slate-100 transition-all shadow-sm" onclick="toggleQuiz()">
                        Take Travel Quiz
                    </button>
</div>
<div className="flex items-center gap-6 text-xs font-semibold text-slate-500 uppercase tracking-wider pt-4">
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:shield-check-bold" width="18"></iconify-icon>
<span>ATOL Protected</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-slate-900" icon="solar:star-circle-bold" width="18"></iconify-icon>
<span>ABTA Member</span>
</div>
</div>
</div>
<div className="relative perspective-1000 reveal delay-200">

<div className="relative z-10 aspect-[4/5] rounded-3xl overflow-hidden shadow-2xl shadow-slate-200 border-4 border-white transform rotate-2 hover:rotate-0 transition-all duration-700 ease-out group">
<img alt="Yulia O'Neill Travel Expert" className="object-cover w-full h-full transform scale-100 group-hover:scale-110 transition-transform duration-1000" src="https://images.unsplash.com/photo-1544644181-1484b3fdfc62?q=80&amp;w=1288&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80"></div>
<div className="absolute bottom-8 left-8 text-white">
<p className="font-bold text-2xl tracking-tight">Yulia O’Neill</p>
<p className="text-sm opacity-90 font-medium">Your Personal Travel Concierge</p>
</div>
</div>

<div className="absolute top-12 -right-12 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float max-w-[200px]">
<div className="flex items-center gap-3 mb-2">
<div className="p-2 bg-amber-100 text-amber-600 rounded-full">
<iconify-icon icon="solar:sun-2-bold" width="20"></iconify-icon>
</div>
<span className="font-bold text-slate-800 text-sm">Tailor-Made</span>
</div>
<p className="text-xs text-slate-500 leading-snug">Every detail planned to your exact preferences.</p>
</div>
<div className="absolute -bottom-8 -left-8 z-20 bg-white/90 backdrop-blur-md p-4 rounded-2xl shadow-xl border border-white/50 animate-float animation-delay-2000 flex items-center gap-4">
<div className="flex -space-x-3">
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=1"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=5"/></div>
<div className="w-8 h-8 rounded-full bg-slate-200 border-2 border-white overflow-hidden"><img className="w-full h-full object-cover" src="https://i.pravatar.cc/100?img=8"/></div>
</div>
<div>
<p className="text-sm font-bold text-slate-900">100+ Happy</p>
<p className="text-xs text-slate-500">Travellers this year</p>
</div>
</div>
</div>
</div>
</section>

<div className="border-y border-slate-200 bg-white py-8 overflow-hidden relative">
<div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10"></div>
<div className="flex w-max animate-marquee hover:pause">

<div className="flex items-center gap-16 px-8 grayscale opacity-50">
<span className="text-xl font-bold flex items-center gap-2"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> ITE ATOL Protected</span>
<span className="text-xl font-bold border-2 border-current p-1">ABTA Member</span>
<span className="text-xl font-bold">TTA Protection</span>
<span className="text-xl font-bold">100% Financial Security</span>
<span className="text-xl font-bold flex items-center gap-2"><iconify-icon icon="solar:global-bold"></iconify-icon> Global Travel</span>

<span className="text-xl font-bold flex items-center gap-2"><iconify-icon icon="solar:check-circle-bold"></iconify-icon> ITE ATOL Protected</span>
<span className="text-xl font-bold border-2 border-current p-1">ABTA Member</span>
<span className="text-xl font-bold">TTA Protection</span>
<span className="text-xl font-bold">100% Financial Security</span>
<span className="text-xl font-bold flex items-center gap-2"><iconify-icon icon="solar:global-bold"></iconify-icon> Global Travel</span>
</div>
</div>
</div>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16 reveal">
<h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">The Process</h2>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Your perfect trip in 3 simple steps.</h3>
</div>
<div className="grid md:grid-cols-3 gap-12 relative">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-transparent via-slate-200 to-transparent border-t border-dashed border-slate-300 -z-10"></div>

<div className="relative flex flex-col items-center text-center reveal delay-100 group">
<div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-blue-500" icon="solar:chat-round-line-linear" width="40"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white">1</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">We Chat</h4>
<p className="text-sm text-slate-500 leading-relaxed">Tell me your dreams, dates, and budget. I listen to what matters most to you.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-200 group">
<div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-purple-500" icon="solar:magic-stick-3-linear" width="40"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white">2</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">I Design</h4>
<p className="text-sm text-slate-500 leading-relaxed">I research, compare, and build a bespoke itinerary just for you with insider perks.</p>
</div>

<div className="relative flex flex-col items-center text-center reveal delay-300 group">
<div className="w-24 h-24 rounded-2xl bg-slate-50 border border-slate-100 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300">
<iconify-icon className="text-emerald-500" icon="solar:plane-linear" width="40"></iconify-icon>
</div>
<div className="absolute -top-3 -right-3 w-8 h-8 rounded-full bg-slate-900 text-white flex items-center justify-center font-bold text-sm border-4 border-white">3</div>
<h4 className="text-lg font-bold text-slate-900 mb-2">You Relax</h4>
<p className="text-sm text-slate-500 leading-relaxed">Secure your booking. I handle check-ins, documents, and remain on standby while you travel.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 relative" id="services">
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="grid lg:grid-cols-3 gap-8">

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col relative overflow-hidden reveal">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-700">
<iconify-icon icon="solar:palmtree-bold" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-amber-50 rounded-2xl flex items-center justify-center text-amber-600 mb-6 group-hover:rotate-6 transition-transform">
<iconify-icon icon="solar:palmtree-bold-duotone" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-slate-900 mb-4">Luxury Holidays</h4>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">From Maldives overwater villas to African safaris. I curate experiences that define 'unforgettable'.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon> Honeymoons &amp; Occasions
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-amber-500" icon="solar:check-circle-bold"></iconify-icon> Multi-centre Trips
                        </li>
</ul>
<a className="w-full py-3 text-center rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-colors" href="#contact">Start Planning</a>
</div>

<div className="group bg-white rounded-3xl p-8 shadow-sm hover:shadow-2xl transition-all duration-500 border border-slate-100 flex flex-col relative overflow-hidden reveal delay-100">
<div className="absolute top-0 right-0 p-3 opacity-10 group-hover:opacity-20 transition-opacity transform group-hover:scale-150 duration-700">
<iconify-icon icon="solar:ship-bold" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-blue-50 rounded-2xl flex items-center justify-center text-blue-600 mb-6 group-hover:rotate-6 transition-transform">
<iconify-icon icon="solar:ship-bold-duotone" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-slate-900 mb-4">Cruise Specialist</h4>
<p className="text-slate-500 mb-6 text-sm leading-relaxed">Ocean, river, or expedition. I find the perfect ship, cabin, and itinerary to suit your style.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Global Itineraries
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-700 font-medium">
<iconify-icon className="text-blue-500" icon="solar:check-circle-bold"></iconify-icon> Fly-Cruise Packages
                        </li>
</ul>
<a className="w-full py-3 text-center rounded-xl bg-slate-50 text-slate-900 font-semibold text-sm hover:bg-slate-900 hover:text-white transition-colors" href="#contact">Find a Cruise</a>
</div>

<div className="group bg-slate-900 rounded-3xl p-8 shadow-xl hover:shadow-2xl transition-all duration-500 border border-slate-800 flex flex-col relative overflow-hidden reveal delay-200">
<div className="absolute top-0 right-0 p-3 opacity-5 group-hover:opacity-10 transition-opacity transform group-hover:scale-150 duration-700">
<iconify-icon className="text-white" icon="solar:wheelchair-bold" width="120"></iconify-icon>
</div>
<div className="w-14 h-14 bg-white/10 rounded-2xl flex items-center justify-center text-white mb-6 group-hover:rotate-6 transition-transform">
<iconify-icon icon="solar:accessibility-bold-duotone" width="32"></iconify-icon>
</div>
<h4 className="text-2xl font-bold text-white mb-4">Accessible Travel</h4>
<p className="text-slate-400 mb-6 text-sm leading-relaxed">Travel without barriers. I handle mobility equipment, adapted rooms, and assistance.</p>
<ul className="space-y-3 mb-8 flex-grow">
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Equipment Hire
                        </li>
<li className="flex items-center gap-3 text-sm text-slate-300 font-medium">
<iconify-icon className="text-emerald-400" icon="solar:check-circle-bold"></iconify-icon> Hidden Disabilities
                        </li>
</ul>
<a className="w-full py-3 text-center rounded-xl bg-white text-slate-900 font-semibold text-sm hover:bg-slate-200 transition-colors" href="#contact">Discuss Needs</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-900 text-white relative overflow-hidden" id="quiz-section">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-indigo-900 via-slate-900 to-slate-900 opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<span className="inline-block py-1 px-3 rounded-full bg-indigo-500/20 text-indigo-300 text-xs font-bold uppercase tracking-widest mb-4 border border-indigo-500/30">Free Personal Assessment</span>
<h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">Not sure where to go next?</h2>
<p className="text-slate-400 text-lg mb-10 max-w-xl mx-auto">Take my 30-second Travel Personality Quiz. I'll analyze your style and send you 3 curated destination ideas + a free packing guide.</p>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-3xl p-8 text-left max-w-2xl mx-auto shadow-2xl">
<form className="space-y-6" onsubmit="event.preventDefault(); showSuccess();">
<div className="space-y-3">
<label className="text-sm font-semibold text-slate-300">What's your travel vibe?</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer group">
<input className="peer sr-only" name="vibe" type="radio"/>
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-center peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all hover:bg-white/10">🏖️ Relaxed</div>
</label>
<label className="cursor-pointer group">
<input className="peer sr-only" name="vibe" type="radio"/>
<div className="rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm font-medium text-center peer-checked:bg-indigo-600 peer-checked:border-indigo-500 transition-all hover:bg-white/10">🦁 Adventurous</div>
</label>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-300">Email for your results</label>
<div className="flex gap-2">
<input className="flex-1 bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white placeholder-slate-500 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500 transition-all" placeholder="you@example.com" required="" type="email"/>
<button className="bg-indigo-500 hover:bg-indigo-400 text-white font-bold py-3 px-6 rounded-xl transition-all shadow-lg shadow-indigo-500/20 whitespace-nowrap" type="submit">
                                 Get Results
                             </button>
</div>
</div>
</form>
<div className="hidden text-center py-4" id="quiz-success">
<iconify-icon className="text-green-400 text-4xl mb-2" icon="solar:check-circle-bold"></iconify-icon>
<p className="font-bold text-lg">Results sent!</p>
<p className="text-sm text-slate-400">Check your inbox for your curated list.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white overflow-hidden" id="destinations">
<div className="max-w-7xl mx-auto px-6 mb-12 flex justify-between items-end">
<div>
<h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Inspiration</h2>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Trending Destinations</h3>
</div>
<div className="hidden md:flex gap-2">
<button className="p-3 rounded-full border border-slate-200 hover:bg-slate-50 transition-colors" onclick="document.getElementById('scroller').scrollBy({left: -300, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-left-linear" width="20"></iconify-icon>
</button>
<button className="p-3 rounded-full bg-slate-900 text-white hover:bg-slate-800 transition-colors" onclick="document.getElementById('scroller').scrollBy({left: 300, behavior: 'smooth'})">
<iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>
</div>

<div className="flex gap-6 overflow-x-auto snap-x-mandatory hide-scrollbar px-6 md:px-[max(0px,calc((100vw-80rem)/2))] pb-12" id="scroller">

<div className="min-w-[85vw] md:min-w-[350px] snap-center relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Maldives" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1590523277543-a94d2e4eb00b?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-2xl font-bold mb-1">Maldives</h4>
<p className="text-sm opacity-90 flex items-center gap-1 group-hover:gap-2 transition-all">View Offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[350px] snap-center relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Santorini" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1599640845513-534439e94513?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-2xl font-bold mb-1">Santorini, Greece</h4>
<p className="text-sm opacity-90 flex items-center gap-1 group-hover:gap-2 transition-all">View Offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[350px] snap-center relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[3/4] overflow-hidden">
<img alt="African Safari" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1516026672322-bc52d61a55d5?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-2xl font-bold mb-1">African Safari</h4>
<p className="text-sm opacity-90 flex items-center gap-1 group-hover:gap-2 transition-all">View Offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>

<div className="min-w-[85vw] md:min-w-[350px] snap-center relative group rounded-3xl overflow-hidden cursor-pointer">
<div className="aspect-[3/4] overflow-hidden">
<img alt="Caribbean" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1520250497591-112f2f40a3f4?q=80&amp;w=1000&amp;auto=format&amp;fit=crop"/>
</div>
<div className="absolute inset-0 bg-gradient-to-t from-black/70 to-transparent"></div>
<div className="absolute bottom-6 left-6 text-white transform translate-y-2 group-hover:translate-y-0 transition-transform duration-300">
<h4 className="text-2xl font-bold mb-1">Caribbean Cruise</h4>
<p className="text-sm opacity-90 flex items-center gap-1 group-hover:gap-2 transition-all">View Offers <iconify-icon icon="solar:arrow-right-linear"></iconify-icon></p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50 border-t border-slate-200">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div className="order-2 md:order-1 relative group">
<div className="absolute inset-0 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-2xl transform rotate-3 group-hover:rotate-1 transition-transform duration-500 opacity-20"></div>
<div className="relative aspect-square rounded-2xl overflow-hidden bg-white shadow-2xl">
<img alt="Yulia Professional" className="object-cover w-full h-full scale-100 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute bottom-0 left-0 right-0 p-6 bg-gradient-to-t from-black/80 to-transparent">
<div className="flex gap-4 justify-center">
<a className="text-white hover:text-emerald-400 transition-colors transform hover:-translate-y-1" href="#"><iconify-icon icon="brandico:instagram" width="24"></iconify-icon></a>
<a className="text-white hover:text-blue-400 transition-colors transform hover:-translate-y-1" href="#"><iconify-icon icon="brandico:facebook" width="24"></iconify-icon></a>
<a className="text-white hover:text-amber-400 transition-colors transform hover:-translate-y-1" href="mailto:yulia.oneill@ite.travel"><iconify-icon icon="solar:letter-linear" width="24"></iconify-icon></a>
</div>
</div>
</div>
</div>
<div className="order-1 md:order-2 space-y-6 reveal">
<div className="flex items-center gap-2 text-emerald-600 font-bold tracking-wide text-sm uppercase">
<span className="w-8 h-[2px] bg-emerald-600"></span>
                         About Your Agent
                    </div>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight text-slate-900">
                        I worry about the details, <br/>so you don't have to.
                    </h2>
<div className="prose prose-lg prose-slate text-slate-600">
<p>
                            I’m Yulia O’Neill. I started Travel Tribe UK because I believe travel should be personal, not transactional. When you book with a search engine, you're on your own. When you book with me, you have a partner.
                        </p>
</div>

<div className="grid grid-cols-2 gap-4 pt-4">
<div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-emerald-200 transition-colors">
<iconify-icon className="text-emerald-500 mb-2" icon="solar:user-heart-bold" width="24"></iconify-icon>
<h5 className="font-bold text-slate-900 text-sm">One Contact</h5>
<p className="text-xs text-slate-500 mt-1">No call centres, ever.</p>
</div>
<div className="p-4 bg-white rounded-xl border border-slate-200 shadow-sm hover:border-blue-200 transition-colors">
<iconify-icon className="text-blue-500 mb-2" icon="solar:wallet-money-bold" width="24"></iconify-icon>
<h5 className="font-bold text-slate-900 text-sm">Best Value</h5>
<p className="text-xs text-slate-500 mt-1">Exclusive supplier rates.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative overflow-hidden" id="testimonials">
<div className="absolute top-1/2 left-0 w-full h-full bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-slate-100 via-white to-white -z-10"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-4">
<div className="reveal">
<h2 className="text-sm font-bold tracking-widest text-emerald-600 uppercase mb-3">Testimonials</h2>
<h3 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900">Loved by travellers.</h3>
</div>
<div className="flex items-center gap-2 bg-slate-50 px-4 py-2 rounded-full border border-slate-200">
<div className="flex text-amber-400">
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
<iconify-icon icon="solar:star-bold"></iconify-icon>
</div>
<span className="text-sm font-bold text-slate-900">5.0 Rating</span>
</div>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 reveal delay-100">
<iconify-icon className="text-slate-200 mb-4" icon="solar:quote-up-square-bold" width="48"></iconify-icon>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">"Yulia took all the stress out of planning our family holiday. Her attention to detail regarding our accessibility needs was incredible. We felt completely supported from booking to return."</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-blue-400 to-emerald-400 flex items-center justify-center text-white font-bold text-lg">J</div>
<div>
<p className="font-bold text-slate-900">Jane Doe</p>
<p className="text-xs text-slate-500">Luxury Caribbean Trip</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-xl shadow-slate-200/50 hover:-translate-y-1 transition-transform duration-300 reveal delay-200">
<iconify-icon className="text-slate-200 mb-4" icon="solar:quote-up-square-bold" width="48"></iconify-icon>
<p className="text-slate-600 text-lg leading-relaxed mb-6 font-medium">"Booking our cruise with Travel Tribe UK was the best decision. Yulia found us an amazing cabin location we wouldn't have known about. Highly recommended!"</p>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full bg-gradient-to-br from-purple-400 to-pink-400 flex items-center justify-center text-white font-bold text-lg">M</div>
<div>
<p className="font-bold text-slate-900">Mark Smith</p>
<p className="text-xs text-slate-500">Mediterranean Cruise</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-slate-50">
<div className="max-w-3xl mx-auto px-6">
<h3 className="text-2xl font-bold text-slate-900 mb-8 text-center">Frequently Asked Questions</h3>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-5 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                        Does it cost more to book with you?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        Often, no! I have access to tour operator rates that aren't available to the public. Even when the price is the same, you get the added value of my expertise, support, and financial protection at no extra cost.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-slate-200 overflow-hidden cursor-pointer">
<summary className="flex items-center justify-between p-5 font-medium text-slate-900 hover:bg-slate-50 transition-colors">
                        Is my money safe?
                        <iconify-icon className="transition-transform group-open:rotate-180" icon="solar:alt-arrow-down-linear"></iconify-icon>
</summary>
<div className="p-5 pt-0 text-slate-600 text-sm leading-relaxed border-t border-slate-100">
                        Absolutely. As an Independent Travel Expert, every package holiday I book is ATOL protected, and your money is held in a trust account (TTA) for 100% financial security.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-slate-200 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-slate-900 -skew-y-3 transform origin-bottom-right scale-110 translate-y-2/3"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10">
<div className="bg-white rounded-3xl shadow-2xl shadow-slate-900/20 border border-slate-200 p-8 md:p-12">
<div className="text-center mb-10">
<div className="inline-block p-3 rounded-full bg-emerald-100 text-emerald-600 mb-4 animate-pulse-ring">
<iconify-icon icon="solar:letter-bold" width="32"></iconify-icon>
</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-slate-900 mb-4">Let's plan your next adventure</h2>
<p className="text-slate-500">Fill out the form below. I usually reply within 24 hours.</p>
</div>
<form className="space-y-6">
<div className="grid md:grid-cols-2 gap-6">
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="name">Name</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-slate-400" icon="solar:user-linear"></iconify-icon>
<input className="w-full rounded-xl border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm focus:border-slate-900 focus:ring-slate-900 transition-colors" id="name" placeholder="Your full name" type="text"/>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="email">Email</label>
<div className="relative">
<iconify-icon className="absolute left-4 top-3.5 text-slate-400" icon="solar:letter-linear"></iconify-icon>
<input className="w-full rounded-xl border-slate-200 bg-slate-50 pl-11 pr-4 py-3 text-sm focus:border-slate-900 focus:ring-slate-900 transition-colors" id="email" placeholder="you@example.com" type="email"/>
</div>
</div>
</div>
<div className="space-y-2">
<label className="text-sm font-semibold text-slate-700" htmlFor="message">Tell me about your dream trip</label>
<textarea className="w-full rounded-xl border-slate-200 bg-slate-50 px-4 py-3 text-sm focus:border-slate-900 focus:ring-slate-900 transition-colors" id="message" placeholder="Where do you want to go? When?" rows="4"></textarea>
</div>
<button className="w-full py-4 px-6 text-base font-bold text-white rounded-xl bg-gradient-to-r from-slate-900 to-slate-800 hover:from-slate-800 hover:to-slate-700 transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5" type="submit">
                        Send Enquiry
                    </button>
</form>
</div>
</div>
</section>

<footer className="bg-slate-900 text-slate-300 py-16 border-t border-slate-800">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-12">
<div className="col-span-1 md:col-span-2 space-y-4">
<a className="flex items-center space-x-2 text-white" href="#">
<iconify-icon icon="solar:plane-bold" width="24"></iconify-icon>
<span className="text-xl font-bold tracking-tight">Travel Tribe UK</span>
</a>
<p className="text-sm text-slate-400 max-w-sm leading-relaxed">
                        Creating exceptional travel experiences with a personal touch. Fully bonded and protected for your peace of mind.
                    </p>
<div className="flex gap-4 pt-2">
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all" href="#"><iconify-icon icon="brandico:instagram" width="20"></iconify-icon></a>
<a className="w-10 h-10 rounded-full bg-slate-800 flex items-center justify-center text-white hover:bg-white hover:text-slate-900 transition-all" href="#"><iconify-icon icon="brandico:facebook" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="font-bold text-white mb-6">Explore</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Home</a></li>
<li><a className="hover:text-white transition-colors" href="#about">About Yulia</a></li>
<li><a className="hover:text-white transition-colors" href="#services">Services</a></li>
</ul>
</div>
<div>
<h4 className="font-bold text-white mb-6">Legal</h4>
<ul className="space-y-3 text-sm">
<li><a className="hover:text-white transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-slate-800 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-slate-500">© 2023 Travel Tribe UK. All rights reserved.</p>
<div className="flex items-center gap-4 opacity-70">
<div className="text-xs font-bold text-slate-400 border border-slate-600 px-1 py-0.5">ABTA</div>
<div className="text-xs font-bold text-slate-400">ATOL Protected</div>
</div>
</div>
</div>
</footer>

<div className="fixed inset-0 z-[70] hidden items-center justify-center bg-slate-900/60 backdrop-blur-sm opacity-0 transition-opacity duration-300" id="lead-modal">
<div className="bg-white rounded-3xl p-1 max-w-lg w-full mx-4 shadow-2xl transform scale-95 transition-transform duration-300" id="lead-modal-content">
<div className="bg-slate-50 rounded-[22px] p-8 relative overflow-hidden">
<button className="absolute top-4 right-4 text-slate-400 hover:text-slate-900 transition-colors" onclick="closeModal()">
<iconify-icon icon="solar:close-circle-bold" width="24"></iconify-icon>
</button>
<div className="text-center space-y-4">
<div className="w-16 h-16 bg-emerald-100 text-emerald-600 rounded-full flex items-center justify-center mx-auto mb-2">
<iconify-icon icon="solar:gift-bold" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-bold text-slate-900">Wait! Don't miss out.</h3>
<p className="text-slate-500 text-sm">Get my exclusive <strong>"Top 10 Hidden Luxury Gems of 2024"</strong> guide. Available only to subscribers.</p>
<form className="space-y-3 pt-2" onsubmit="event.preventDefault(); closeModal(); alert('Check your inbox!');">
<input className="w-full px-4 py-3 rounded-xl border border-slate-200 bg-white focus:ring-2 focus:ring-slate-900 focus:border-transparent outline-none transition-all" placeholder="Enter your email" type="email"/>
<button className="w-full py-3 bg-slate-900 text-white rounded-xl font-bold hover:bg-slate-800 transition-all">Unlock Access</button>
</form>
<button className="text-xs text-slate-400 hover:text-slate-600 underline" onclick="closeModal()">No thanks, I'll pay full price.</button>
</div>
</div>
</div>
</div>

<div className="fixed bottom-6 right-6 z-[60] flex flex-col items-end gap-4 font-sans">

<div className="hidden w-[90vw] md:w-96 bg-white rounded-2xl shadow-2xl border border-slate-100 overflow-hidden flex flex-col mb-2 transform origin-bottom-right transition-all duration-300" id="chat-window">

<div className="bg-slate-900 p-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-emerald-500 flex items-center justify-center text-white border-2 border-slate-800">
<iconify-icon icon="solar:chatbot-bold" width="24"></iconify-icon>
</div>
<div className="absolute bottom-0 right-0 w-2.5 h-2.5 bg-green-400 rounded-full border border-slate-900"></div>
</div>
<div>
<h4 className="text-white font-bold text-sm">Travel AI Assistant</h4>
<p className="text-slate-400 text-xs">Replies instantly</p>
</div>
</div>
<button className="text-slate-400 hover:text-white" onclick="toggleChat()">
<iconify-icon icon="solar:minimize-square-linear" width="20"></iconify-icon>
</button>
</div>

<div className="h-80 overflow-y-auto p-4 bg-slate-50 space-y-4" id="chat-messages">

<div className="flex gap-3">
<div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center text-emerald-600 flex-shrink-0">
<iconify-icon icon="solar:chatbot-linear" width="18"></iconify-icon>
</div>
<div className="bg-white p-3 rounded-2xl rounded-tl-none border border-slate-100 shadow-sm text-sm text-slate-600 max-w-[85%]">
                        Hi! I'm your virtual travel assistant. Ask me about:
                        <div className="mt-2 flex flex-wrap gap-2">
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium transition-colors" onclick="sendQuickMsg('Honeymoons')">💍 Honeymoons</button>
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium transition-colors" onclick="sendQuickMsg('Cheap deals')">💸 Best Deals</button>
<button className="px-2 py-1 bg-slate-100 hover:bg-slate-200 rounded-lg text-xs font-medium transition-colors" onclick="sendQuickMsg('Contact')">📞 Contact Yulia</button>
</div>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-100">
<form className="relative" id="chat-form" onsubmit="handleChat(event)">
<input autocomplete="off" className="w-full pl-4 pr-12 py-3 rounded-xl bg-slate-50 border-none focus:ring-2 focus:ring-slate-900 text-sm transition-all" id="chat-input" placeholder="Type a message..." type="text"/>
<button className="absolute right-2 top-2 p-1.5 bg-slate-900 text-white rounded-lg hover:bg-slate-800 transition-colors" type="submit">
<iconify-icon icon="solar:plain-bold" width="16"></iconify-icon>
</button>
</form>
</div>
</div>

<button className="group relative flex items-center justify-center w-14 h-14 bg-slate-900 text-white rounded-full shadow-xl hover:scale-110 transition-transform active:scale-95" onclick="toggleChat()">
<span className="absolute -top-1 -right-1 flex h-4 w-4">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-red-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-4 w-4 bg-red-500 text-[10px] items-center justify-center font-bold">1</span>
</span>
<iconify-icon className="group-hover:rotate-12 transition-transform" icon="solar:chat-round-dots-bold" width="28"></iconify-icon>
</button>
</div>



    </>
  );
}
