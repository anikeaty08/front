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
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
colors: {
bg: '#FCFCFD',
primary: '#FF4D6D',   /* Coral/Pink */
primaryDark: '#E01E45',
accent: '#2ED3B7',    /* Mint */
dark: '#111827',
gray: {
50: '#F9FAFB',
100: '#F3F4F6',
200: '#E5E7EB',
800: '#1F2937',
900: '#111827',
}
},
boxShadow: {
'soft': '0 4px 20px -2px rgba(0, 0, 0, 0.05)',
'glow': '0 0 20px -5px rgba(255, 77, 109, 0.4)',
'card': '0 10px 40px -10px rgba(0,0,0,0.08)'
},
animation: {
'float': 'float 6s ease-in-out infinite',
'blob': 'blob 7s infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
blob: {
'0%': { transform: 'translate(0px, 0px) scale(1)' },
'33%': { transform: 'translate(30px, -50px) scale(1.1)' },
'66%': { transform: 'translate(-20px, 20px) scale(0.9)' },
'100%': { transform: 'translate(0px, 0px) scale(1)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons();

        // Mobile Menu Toggle
        const menuBtn = document.getElementById('mobile-menu-btn');
        const mobileMenu = document.getElementById('mobile-menu');
        menuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // --- SWIPE DEMO LOGIC ---
        const profiles = [
            { name: "Bruno", age: 3, city: "Nürnberg", type: "Cat", status: "Eigene Wohnung ✅", tag1: "Fensterbank-Pro", tag2: "Ruhig", color: "bg-orange-100" },
            { name: "Luna", age: 2, city: "Berlin", type: "Cat", status: "WG (mit 2 Menschen)", tag1: "Laserpointer", tag2: "Chaotisch", color: "bg-gray-100" },
            { name: "Keks", age: 5, city: "München", type: "Dog", status: "Haus mit Garten ✅", tag1: "Snack-Fokus", tag2: "Bällchen", color: "bg-amber-100" },
            { name: "Rex", age: 4, city: "Köln", type: "Dog", status: "Eigene Wohnung ✅", tag1: "Gassi-CEO", tag2: "Treuer Blick", color: "bg-blue-100" }
        ];

        let currentProfileIndex = 0;
        const cardContainer = document.getElementById('card-container');
        const feedbackBox = document.getElementById('demo-feedback');
        const feedbackText = document.getElementById('demo-toast-text');

        function createCardHTML(profile) {
            const icon = profile.type === 'Cat' ? '🐱' : '🐶';
            return `
                <div id="active-card" class="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-transform duration-300 origin-bottom hover:-translate-y-1 cursor-grab active:cursor-grabbing">
                    <!-- Image Placeholder -->
                    <div class="h-2/3 ${profile.color} flex items-center justify-center relative">
                         <div class="text-6xl animate-bounce">${icon}</div>
                         <div class="absolute bottom-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-dark border border-white/20">
                            ${profile.status}
                         </div>
                    </div>
                    <!-- Content -->
                    <div class="p-5">
                        <div class="flex justify-between items-end mb-2">
                            <h3 class="text-2xl font-bold text-dark">${profile.name}, ${profile.age}</h3>
                            <span class="text-sm text-gray-500">${profile.city}</span>
                        </div>
                        <div class="flex gap-2 flex-wrap">
                            <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">${profile.tag1}</span>
                            <span class="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">${profile.tag2}</span>
                        </div>
                    </div>
                    
                    <!-- Overlays for Swipe Actions (Visuals) -->
                    <div id="like-overlay" class="absolute top-8 left-8 border-4 border-green-500 text-green-500 rounded-lg px-4 py-2 font-black text-3xl opacity-0 transform -rotate-12 transition-opacity uppercase">Like</div>
                    <div id="nope-overlay" class="absolute top-8 right-8 border-4 border-red-500 text-red-500 rounded-lg px-4 py-2 font-black text-3xl opacity-0 transform rotate-12 transition-opacity uppercase">Nope</div>
                </div>
            `;
        }

        function renderCard() {
            if (currentProfileIndex < profiles.length) {
                cardContainer.innerHTML = createCardHTML(profiles[currentProfileIndex]);
            } else {
                cardContainer.innerHTML = ''; // Show empty state behind
            }
        }

        function showFeedback(type) {
            feedbackBox.classList.remove('hidden');
            feedbackBox.classList.remove('animate-fade-in');
            void feedbackBox.offsetWidth; // trigger reflow
            feedbackBox.classList.add('animate-fade-in');

            if(type === 'like') {
                const matchChance = Math.floor(Math.random() * (99 - 70) + 70);
                feedbackText.innerText = `Miau! Match-Potenzial: ${matchChance}%`;
                feedbackText.className = "text-sm font-medium text-green-600";
            } else if (type === 'super') {
                feedbackText.innerText = `Super-Miau gesendet! Benachrichtigung raus.`;
                feedbackText.className = "text-sm font-medium text-purple-600";
            } else {
                feedbackText.innerText = `Weitergeswipet. Der Nächste bitte.`;
                feedbackText.className = "text-sm font-medium text-gray-500";
            }
        }

        function handleSwipe(direction) {
            const card = document.getElementById('active-card');
            if (!card) return;

            if (direction === 'left') {
                card.classList.add('swipe-left');
                showFeedback('nope');
            } else if (direction === 'right') {
                card.classList.add('swipe-right');
                showFeedback('like');
            } else {
                // Super like - fly up
                card.style.transition = "all 0.6s ease-out";
                card.style.transform = "translateY(-150%) scale(0.8)";
                card.style.opacity = "0";
                showFeedback('super');
            }

            setTimeout(() => {
                currentProfileIndex++;
                renderCard();
            }, 500);
        }

        // Init
        renderCard();

        // Navbar scroll effect
        window.addEventListener('scroll', () => {
            const nav = document.getElementById('navbar');
            if (window.scrollY > 20) {
                nav.classList.add('shadow-sm');
                nav.classList.replace('bg-white/70', 'bg-white/90');
            } else {
                nav.classList.remove('shadow-sm');
            }
        });

    
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
      

<nav className="fixed top-0 w-full z-50 glass border-b border-gray-200/50 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16 md:h-20">

<div className="flex-shrink-0 flex items-center gap-2 cursor-pointer" onclick="window.scrollTo(0,0)">
<div className="w-8 h-8 bg-primary rounded-lg flex items-center justify-center text-white rotate-3">
<svg className="lucide lucide-paw-print w-5 h-5 fill-current" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
</div>
<span className="font-display font-bold text-xl tracking-tight text-dark">Haustier<span className="text-primary">Tinder</span></span>
</div>

<div className="hidden md:flex space-x-8 items-center">
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#how-it-works">Features</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#demo">Live Demo</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#pricing">Preise</a>
<a className="text-sm font-medium text-gray-600 hover:text-primary transition-colors" href="#faq">FAQ</a>
</div>

<div className="hidden md:flex items-center space-x-4">
<a className="text-sm font-semibold text-gray-900 hover:text-primary transition-colors" href="#">Anmelden</a>
<a className="bg-dark text-white hover:bg-gray-800 px-5 py-2.5 rounded-full text-sm font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 focus:ring-2 focus:ring-offset-2 focus:ring-dark" href="#waitlist">
                        Warteliste
                    </a>
</div>

<div className="md:hidden flex items-center">
<button className="text-gray-600 hover:text-dark focus:outline-none" id="mobile-menu-btn">
<svg className="lucide lucide-menu w-6 h-6" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 5h16"></path><path d="M4 12h16"></path><path d="M4 19h16"></path></svg>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-white border-t border-gray-100 absolute w-full shadow-lg" id="mobile-menu">
<div className="px-4 pt-4 pb-6 space-y-2">
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="#how-it-works">Features</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="#demo">Live Demo</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-gray-700 hover:text-primary hover:bg-gray-50" href="#pricing">Preise</a>
<a className="block px-3 py-2 rounded-md text-base font-medium text-primary hover:bg-pink-50" href="#waitlist">Warteliste beitreten</a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 lg:pt-48 lg:pb-32 overflow-hidden">

<div className="absolute top-0 -left-4 w-72 h-72 bg-purple-200 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob"></div>
<div className="absolute top-0 -right-4 w-72 h-72 bg-primary/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-2000"></div>
<div className="absolute -bottom-8 left-20 w-72 h-72 bg-accent/20 rounded-full mix-blend-multiply filter blur-xl opacity-30 animate-blob animation-delay-4000"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="lg:grid lg:grid-cols-12 lg:gap-16 items-center">

<div className="lg:col-span-6 text-center lg:text-left mb-16 lg:mb-0">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-pink-50 border border-pink-100 text-primary text-xs font-bold tracking-wide uppercase mb-6 animate-fade-in-up">
<span className="w-2 h-2 rounded-full bg-primary animate-pulse"></span>
                        Beta Version Live
                    </div>
<h1 className="sm:text-6xl lg:text-7xl text-dark text-balance leading-[1.1] text-5xl font-extrabold tracking-tighter font-display mb-6" style={{}}>Deine Katze swipet. <br/> <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-purple-600">Du schaust nur zu.</span></h1>
<p className="text-lg sm:text-xl text-gray-600 mb-8 leading-relaxed max-w-2xl mx-auto lg:mx-0">
                        Das Dating für Haustiere – mit spielerischem Swipe-Modus, verifiziertem Wohnungs-Check und 100% Anti-Catfish Garantie.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
<a className="bg-primary hover:bg-primaryDark text-white px-8 py-4 rounded-full text-base font-bold transition-all shadow-lg hover:shadow-primary/30 flex items-center justify-center gap-2 group" href="#waitlist">
                            Auf die Warteliste
                            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
<a className="bg-white border border-gray-200 text-dark hover:bg-gray-50 px-8 py-4 rounded-full text-base font-bold transition-all flex items-center justify-center gap-2" href="#demo">
<svg className="lucide lucide-smartphone w-4 h-4" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
                            Swipe-Demo testen
                        </a>
</div>
<div className="mt-8 flex items-center justify-center lg:justify-start gap-4 text-sm text-gray-500 font-medium">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs">🐶</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-xs">🐱</div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200 flex items-center justify-center text-xs">🐹</div>
</div>
<p>Schon <span className="text-primary font-bold">12.842</span> Haustiere warten auf ein Match</p>
</div>
</div>

<div className="lg:col-span-6 relative perspective-1000">
<div className="relative w-[300px] sm:w-[340px] mx-auto animate-float">

<div className="absolute top-4 left-4 w-full h-[500px] bg-white rounded-3xl shadow-soft border border-gray-100 rotate-6 opacity-60 scale-95 z-0"></div>

<div className="relative bg-dark rounded-[40px] p-3 shadow-2xl border-4 border-gray-800 z-10 w-full h-[600px] overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-32 h-6 bg-dark rounded-b-xl z-30"></div>

<div className="bg-gray-50 w-full h-full rounded-[30px] overflow-hidden relative flex flex-col">

<div className="h-14 bg-white flex justify-between items-center px-4 pt-4 border-b border-gray-100">
<svg className="lucide lucide-user w-5 h-5 text-gray-400" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
<svg className="lucide lucide-paw-print w-6 h-6 text-primary fill-current" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
<svg className="lucide lucide-message-circle w-5 h-5 text-gray-400" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>

<div className="relative flex-1 m-3 rounded-2xl overflow-hidden shadow-md bg-white">

<div className="absolute inset-0 bg-gray-200 flex items-center justify-center">
<svg fill="none" height="150" stroke="#9ca3af" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="150">
<circle cx="12" cy="12" r="10"></circle>
<path d="M8 14s1.5 2 4 2 4-2 4-2"></path>
<line x1="9" x2="9.01" y1="9" y2="9"></line>
<line x1="15" x2="15.01" y1="9" y2="9"></line>
</svg>
</div>

<div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>

<div className="absolute bottom-0 left-0 w-full p-4 text-white">
<div className="flex items-end gap-2 mb-1">
<h3 className="text-2xl font-bold">Mochi, 1</h3>
<span className="mb-1 text-sm opacity-90 bg-primary/80 px-2 py-0.5 rounded text-white text-[10px] font-bold uppercase tracking-wider">Neu</span>
</div>
<p className="text-sm opacity-90 mb-2 flex items-center gap-1">
<svg className="lucide lucide-map-pin w-3 h-3" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg> Hamburg · Sofa-Resident
                                        </p>
<div className="flex gap-2">
<span className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">Kuschelmodus</span>
<span className="text-[10px] bg-white/20 backdrop-blur-sm px-2 py-1 rounded-full">Nachtaktiv</span>
</div>
</div>
</div>

<div className="h-20 px-6 pb-4 flex justify-between items-center bg-transparent">
<div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-yellow-500 border border-gray-100">
<svg className="lucide lucide-rotate-ccw w-5 h-5" data-lucide="rotate-ccw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<div className="w-16 h-16 bg-white rounded-full shadow-lg flex items-center justify-center text-primary border border-gray-100 animate-pulse">
<svg className="lucide lucide-heart w-8 h-8 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div className="w-12 h-12 bg-white rounded-full shadow-lg flex items-center justify-center text-purple-500 border border-gray-100">
<svg className="lucide lucide-zap w-5 h-5 fill-current" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-y border-gray-100" id="how-it-works">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center max-w-3xl mx-auto mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mb-4 tracking-tight">So findet dein Tier die große Liebe</h2>
<p className="text-gray-500">In vier einfachen Schritten zum perfekten Playdate (oder gemeinsamen Mittagsschlaf).</p>
</div>
<div className="grid md:grid-cols-4 gap-8">

<div className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-card transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-primary group-hover:scale-110 transition-transform">
<svg className="lucide lucide-pencil w-6 h-6" data-lucide="pencil" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.174 6.812a1 1 0 0 0-3.986-3.987L3.842 16.174a2 2 0 0 0-.5.83l-1.321 4.352a.5.5 0 0 0 .623.622l4.353-1.32a2 2 0 0 0 .83-.497z"></path><path d="m15 5 4 4"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">1. Profil erstellen</h3>
<p className="text-sm text-gray-500 leading-relaxed">Name, Alter, Stadt und der wichtige "Lieblingssnack". Ehrlichkeit währt am längsten.</p>
</div>

<div className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-card transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-accent group-hover:scale-110 transition-transform">
<svg className="lucide lucide-shield-check w-6 h-6" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">2. Human-Check</h3>
<p className="text-sm text-gray-500 leading-relaxed">Der Besitzer bestätigt die Echtheit. Keine Fake-Katzen, keine Roboter-Hunde. Catfishing is over.</p>
</div>

<div className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-card transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-purple-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-smartphone w-6 h-6" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">3. Auto-Swipe</h3>
<p className="text-sm text-gray-500 leading-relaxed">Lass dein Tier auf den Bildschirm tippen. Die Pfote entscheidet, wer cool ist (und wer nicht).</p>
</div>

<div className="relative p-6 rounded-2xl bg-gray-50 border border-gray-100 hover:shadow-card transition-all duration-300 group">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-6 text-yellow-500 group-hover:scale-110 transition-transform">
<svg className="lucide lucide-coffee w-6 h-6" data-lucide="coffee" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 2v2"></path><path d="M14 2v2"></path><path d="M16 8a1 1 0 0 1 1 1v8a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V9a1 1 0 0 1 1-1h14a4 4 0 1 1 0 8h-1"></path><path d="M6 2v2"></path></svg>
</div>
<h3 className="font-bold text-lg mb-2">4. Treffen planen</h3>
<p className="text-sm text-gray-500 leading-relaxed">Match! Trefft euch an einem neutralen Ort. Park, Fensterbank oder Hundewiese.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-gradient-to-b from-bg to-pink-50/50 overflow-hidden" id="demo">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid lg:grid-cols-2 gap-16 items-center">

<div className="order-2 lg:order-1">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-dark mb-6 tracking-tight">Probier's aus: 3 Swipes bis zum Glück.</h2>
<p className="text-gray-600 mb-8 text-lg">
                        Teste unseren Algorithmus live. Entscheide für dein Tier (oder hol es kurz an die Tastatur). 
                        Vorsicht: Hohes Suchtpotenzial.
                    </p>
<div className="space-y-4 mb-8">
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm font-medium">Sofortiges Feedback nach jedem Swipe</span>
</div>
<div className="flex items-center gap-3">
<div className="w-6 h-6 rounded-full bg-green-100 text-green-600 flex items-center justify-center">
<svg className="lucide lucide-check w-3 h-3" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>
</div>
<span className="text-sm font-medium">Smart-Matching basierend auf Snack-Typ</span>
</div>
</div>
<div className="hidden p-4 bg-white rounded-xl shadow-sm border border-primary/20 flex items-center gap-3 animate-fade-in" id="demo-feedback">
<div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center text-primary">
<svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
</div>
<div>
<p className="text-xs font-bold text-primary uppercase tracking-wide">System Nachricht</p>
<p className="text-sm font-medium text-dark" id="demo-toast-text">Miau! Match-Potenzial analysiert...</p>
</div>
</div>
</div>

<div className="order-1 lg:order-2 flex justify-center">
<div className="relative w-[320px] h-[500px]">

<div className="relative w-full h-full z-10" id="card-container">
<div className="absolute inset-0 bg-white rounded-3xl shadow-2xl border border-gray-200 overflow-hidden transform transition-transform duration-300 origin-bottom hover:-translate-y-1 cursor-grab active:cursor-grabbing" id="active-card">

<div className="h-2/3 bg-orange-100 flex items-center justify-center relative">
<div className="text-6xl animate-bounce">🐱</div>
<div className="absolute bottom-4 left-4 bg-white/30 backdrop-blur-md px-3 py-1 rounded-full text-xs font-bold text-dark border border-white/20">
                            Eigene Wohnung ✅
                         </div>
</div>

<div className="p-5">
<div className="flex justify-between items-end mb-2">
<h3 className="text-2xl font-bold text-dark">Bruno, 3</h3>
<span className="text-sm text-gray-500">Nürnberg</span>
</div>
<div className="flex gap-2 flex-wrap">
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Fensterbank-Pro</span>
<span className="px-3 py-1 bg-gray-100 rounded-full text-xs font-medium text-gray-600">Ruhig</span>
</div>
</div>

<div className="absolute top-8 left-8 border-4 border-green-500 text-green-500 rounded-lg px-4 py-2 font-black text-3xl opacity-0 transform -rotate-12 transition-opacity uppercase" id="like-overlay">Like</div>
<div className="absolute top-8 right-8 border-4 border-red-500 text-red-500 rounded-lg px-4 py-2 font-black text-3xl opacity-0 transform rotate-12 transition-opacity uppercase" id="nope-overlay">Nope</div>
</div>
</div>

<div className="absolute inset-0 bg-white rounded-3xl shadow-soft border border-gray-200 flex flex-col items-center justify-center text-center p-8 z-0">
<div className="w-16 h-16 bg-gray-50 rounded-full flex items-center justify-center mb-4">
<svg className="lucide lucide-check-circle-2 w-8 h-8 text-green-500" data-lucide="check-circle-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="m9 12 2 2 4-4"></path></svg>
</div>
<h3 className="font-bold text-xl mb-2">Demo fertig!</h3>
<p className="text-sm text-gray-500 mb-6">Du hast Talent. Zeit für das echte Ding?</p>
<a className="w-full bg-primary text-white py-3 rounded-xl font-bold shadow-lg hover:bg-primaryDark transition-colors" href="#waitlist">
                                Warteliste beitreten
                            </a>
</div>

<div className="absolute -bottom-20 left-0 w-full flex justify-center gap-6 z-20">
<button className="w-14 h-14 bg-white rounded-full shadow-lg text-red-500 border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" onclick="handleSwipe('left')">
<svg className="lucide lucide-x w-8 h-8" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
<button className="w-10 h-10 mt-2 bg-white rounded-full shadow-md text-purple-500 border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" onclick="handleSwipe('super')">
<svg className="lucide lucide-star w-5 h-5 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</button>
<button className="w-14 h-14 bg-white rounded-full shadow-lg text-green-500 border border-gray-100 flex items-center justify-center hover:scale-110 active:scale-95 transition-transform" onclick="handleSwipe('right')">
<svg className="lucide lucide-heart w-8 h-8 fill-current" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="mb-12">
<h2 className="font-display font-bold text-3xl text-dark tracking-tight">Alles was das Tierherz begehrt</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-[200px]">

<div className="md:col-span-2 md:row-span-2 bg-gray-50 rounded-3xl p-8 relative overflow-hidden group border border-gray-100 hover:border-gray-200 transition-colors">
<div className="absolute right-0 top-0 p-8 opacity-10 group-hover:opacity-20 transition-opacity">
<svg className="lucide lucide-paw-print w-64 h-64" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
</div>
<div className="relative z-10 h-full flex flex-col justify-end">
<div className="w-12 h-12 bg-white rounded-xl shadow-sm flex items-center justify-center mb-4 text-primary">
<svg className="lucide lucide-smartphone-nfc w-6 h-6" data-lucide="smartphone-nfc" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="1" width="7" x="2" y="6"></rect><path d="M13 8.32a7.43 7.43 0 0 1 0 7.36"></path><path d="M16.46 6.21a11.76 11.76 0 0 1 0 11.58"></path><path d="M19.91 4.1a15.91 15.91 0 0 1 .01 15.8"></path></svg>
</div>
<h3 className="font-bold text-2xl mb-2">Auto-Swipe Mode</h3>
<p className="text-gray-500 max-w-md">Der innovative Modus, bei dem dein Haustier durch zufälliges Tippen auf den Bildschirm Entscheidungen trifft. Wir nennen es "Chaos-Matching".</p>
</div>
</div>

<div className="bg-primary/5 rounded-3xl p-6 border border-primary/10 flex flex-col justify-center hover:bg-primary/10 transition-colors">
<svg className="lucide lucide-lock w-8 h-8 text-primary mb-4" data-lucide="lock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
<h3 className="font-bold text-lg mb-1">Besitzer-Kontrolle</h3>
<p className="text-sm text-gray-600">Du setzt Grenzen, die Katze setzt Regeln.</p>
</div>

<div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center">
<svg className="lucide lucide-badge-check w-8 h-8 text-accent mb-4" data-lucide="badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z"></path><path d="m9 12 2 2 4-4"></path></svg>
<h3 className="font-bold text-lg mb-1">Anti-Catfish</h3>
<p className="text-sm text-gray-600">Jedes Profil ist von echten Menschen verifiziert.</p>
</div>

<div className="bg-white rounded-3xl p-6 border border-gray-200 shadow-sm flex flex-col justify-center">
<svg className="lucide lucide-utensils w-8 h-8 text-yellow-500 mb-4" data-lucide="utensils" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 2v7c0 1.1.9 2 2 2h4a2 2 0 0 0 2-2V2"></path><path d="M7 2v20"></path><path d="M21 15V2a5 5 0 0 0-5 5v6c0 1.1.9 2 2 2h3Zm0 0v7"></path></svg>
<h3 className="font-bold text-lg mb-1">Match-Radar</h3>
<p className="text-sm text-gray-600">Matching basierend auf Leckerli-Kompatibilität.</p>
</div>

<div className="md:col-span-2 bg-dark text-white rounded-3xl p-8 flex items-center justify-between relative overflow-hidden">
<div className="relative z-10">
<h3 className="font-bold text-xl mb-1">Privacy First</h3>
<p className="text-gray-400 text-sm">Dein Tier bleibt anonym, bis ihr euch zum Schnuppern trefft.</p>
</div>
<div className="w-12 h-12 bg-white/10 rounded-full flex items-center justify-center backdrop-blur-sm">
<svg className="lucide lucide-eye-off w-6 h-6" data-lucide="eye-off" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10.733 5.076a10.744 10.744 0 0 1 11.205 6.575 1 1 0 0 1 0 .696 10.747 10.747 0 0 1-1.444 2.49"></path><path d="M14.084 14.158a3 3 0 0 1-4.242-4.242"></path><path d="M17.479 17.499a10.75 10.75 0 0 1-15.417-5.151 1 1 0 0 1 0-.696 10.75 10.75 0 0 1 4.446-5.143"></path><path d="m2 2 20 20"></path></svg>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-dark text-white overflow-hidden relative">
<div className="absolute top-0 right-0 -mr-20 -mt-20 w-96 h-96 bg-primary/20 rounded-full blur-3xl"></div>
<div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 bg-accent/10 rounded-full blur-3xl"></div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
<div className="flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2">
<span className="inline-block py-1 px-3 rounded-full bg-gradient-to-r from-yellow-400 to-yellow-600 text-black text-xs font-bold uppercase tracking-wider mb-6">Gold Status</span>
<h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 tracking-tight">Nur Matches mit eigener Wohnung.</h2>
<p className="text-gray-300 text-lg mb-8 leading-relaxed">
                        Weil dein Haustier Standards hat. Mit Premium filterst du WG-Zimmer und "Sofa-Surfer" rigoros aus. Zeig deinem Liebling die Welt des gehobenen Immobilienbesitzes.
                    </p>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3">
<svg className="lucide lucide-home text-yellow-400 w-5 h-5" data-lucide="home" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path><path d="M3 10a2 2 0 0 1 .709-1.528l7-6a2 2 0 0 1 2.582 0l7 6A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path></svg>
<span className="font-medium">Wohnungs-Filter (Haus / Balkon-Score)</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-infinity text-yellow-400 w-5 h-5" data-lucide="infinity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 16c5 0 7-8 12-8a4 4 0 0 1 0 8c-5 0-7-8-12-8a4 4 0 1 0 0 8"></path></svg>
<span className="font-medium">Unbegrenzte Swipes</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-star text-yellow-400 w-5 h-5" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="font-medium">Super-Miau 3× pro Tag</span>
</li>
<li className="flex items-center gap-3">
<svg className="lucide lucide-zap text-yellow-400 w-5 h-5" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="font-medium">Match-Boost zur Primetime (19:00)</span>
</li>
</ul>
<p className="text-xs text-gray-500 italic">*Wohnung = vom Menschen bestätigt. Wir prüfen keine Grundbucheinträge.</p>
</div>
<div className="lg:w-1/2 flex justify-center">
<div className="w-full max-w-sm bg-gradient-to-br from-gray-800 to-black p-8 rounded-3xl border border-gray-700 shadow-2xl relative transform rotate-3 hover:rotate-0 transition-all duration-500">
<div className="flex justify-between items-start mb-12">
<svg className="lucide lucide-paw-print text-yellow-500 w-10 h-10 fill-current" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
<span className="font-mono text-gray-500">PREMIUM</span>
</div>
<div className="text-2xl font-mono text-gray-300 mb-8 tracking-widest">**** **** **** 0815</div>
<div className="flex justify-between items-end">
<div>
<div className="text-[10px] text-gray-500 uppercase">Member</div>
<div className="font-bold text-white">SIR FLUFFY</div>
</div>
<svg className="lucide lucide-wifi text-gray-600 w-6 h-6 rotate-90" data-lucide="wifi" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20h.01"></path><path d="M2 8.82a15 15 0 0 1 20 0"></path><path d="M5 12.859a10 10 0 0 1 14 0"></path><path d="M8.5 16.429a5 5 0 0 1 7 0"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg" id="pricing">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-dark tracking-tight mb-4">Investiere in die Zukunft</h2>
<div className="flex items-center justify-center gap-4">
<span className="text-sm font-medium text-gray-500">Monatlich</span>
<div className="w-12 h-6 bg-primary rounded-full relative cursor-pointer">
<div className="absolute right-1 top-1 w-4 h-4 bg-white rounded-full shadow-sm"></div>
</div>
<span className="text-sm font-bold text-dark">Jährlich (-20%)</span>
</div>
</div>
<div className="grid md:grid-cols-3 gap-8 items-start">

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-card transition-all">
<h3 className="font-bold text-xl mb-2">Stray Cat</h3>
<div className="text-4xl font-display font-bold mb-6">0€</div>
<p className="text-sm text-gray-500 mb-8">Für den schnellen Flirt zwischendurch.</p>
<a className="block w-full py-3 text-center border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:border-dark hover:text-dark transition-colors" href="#">Starten</a>
<ul className="mt-8 space-y-3 text-sm text-gray-600">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Profil erstellen</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 10 Swipes täglich</li>
<li className="flex gap-2 opacity-50"><svg className="lucide lucide-x w-4 h-4" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg> Kein Wohnungs-Filter</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-glow border-2 border-primary relative transform md:-translate-y-4">
<div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary text-white px-4 py-1 rounded-full text-xs font-bold uppercase tracking-wide">Empfohlen</div>
<h3 className="font-bold text-xl mb-2 text-primary">Hausherr</h3>
<div className="text-4xl font-display font-bold mb-6">6,99€ <span className="text-base font-normal text-gray-400">/mo</span></div>
<p className="text-sm text-gray-500 mb-8">Wohnungs-Filter + Boost für maximale Erfolge.</p>
<a className="block w-full py-3 text-center bg-primary text-white rounded-xl font-bold hover:bg-primaryDark transition-colors shadow-lg shadow-primary/25" href="#">Upgrade</a>
<ul className="mt-8 space-y-3 text-sm text-gray-600">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-primary" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Alles aus Free</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-primary" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> </li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-primary" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Unbegrenzte Swipes</li>
</ul>
</div>

<div className="bg-white p-8 rounded-3xl shadow-sm border border-gray-100 hover:shadow-card transition-all">
<h3 className="font-bold text-xl mb-2">Ultra-Miau</h3>
<div className="text-4xl font-display font-bold mb-6">12,99€ <span className="text-base font-normal text-gray-400">/mo</span></div>
<p className="text-sm text-gray-500 mb-8">VIP Behandlung und Prioritäts-Support.</p>
<a className="block w-full py-3 text-center border-2 border-gray-200 rounded-xl font-bold text-gray-600 hover:border-dark hover:text-dark transition-colors" href="#">Starten</a>
<ul className="mt-8 space-y-3 text-sm text-gray-600">
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Alles aus Hausherr</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> 5x Super-Miau / Tag</li>
<li className="flex gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-500" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg> Exklusive Sticker</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-6">"Meine Katze hat endlich jemanden gefunden, der ihre Stille respektiert und auch 20 Stunden am Tag schläft."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs">👩</div>
<div className="text-sm">
<span className="block font-bold">Lara</span>
<span className="text-gray-500">Nürnberg</span>
</div>
</div>
</div>
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-6">"Premium hat uns vor WG-Drama bewahrt. Rex datet jetzt nur noch Pudel mit Einfamilienhaus."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs">👨</div>
<div className="text-sm">
<span className="block font-bold">Tim</span>
<span className="text-gray-500">Berlin</span>
</div>
</div>
</div>
<div className="p-6 bg-gray-50 rounded-2xl">
<div className="flex gap-1 text-yellow-400 mb-4">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<p className="text-gray-700 italic mb-6">"Rex hat jetzt Playdates. Ich habe jetzt Termine. Win-Win für alle Beteiligten."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-gray-200 rounded-full flex items-center justify-center text-xs">👩</div>
<div className="text-sm">
<span className="block font-bold">Jana</span>
<span className="text-gray-500">Köln</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-bg" id="faq">
<div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
<h2 className="font-display font-bold text-3xl text-center mb-12">Häufig gestellte Fragen (Miau)</h2>
<div className="space-y-4">
<details className="group bg-white rounded-xl border border-gray-200 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Swipet mein Haustier wirklich selbst?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-gray-500 px-6 pb-6 pt-0">
                        Theoretisch ja. Wir empfehlen Leckerlis auf dem Display an der richtigen Stelle zu platzieren. Die Haftung für Kratzer übernehmen wir nicht.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Was bedeutet "Eigene Wohnung"?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-gray-500 px-6 pb-6 pt-0">
                        Das bedeutet, dass das Tier Zugang zu einer Immobilie ohne andere nervige Mitbewohner hat. Die tatsächliche Eigentumsurkunde ist zweitrangig, solange das Sofa groß genug ist.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Kann ich Hunde und Katzen mischen?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-gray-500 px-6 pb-6 pt-0">
                        Riskant. Unser Algorithmus warnt davor ("Gefahrstufe Rot"), aber für abenteuerlustige Vierbeiner ist alles möglich.
                    </div>
</details>
<details className="group bg-white rounded-xl border border-gray-200 open:shadow-sm transition-all">
<summary className="flex justify-between items-center font-medium cursor-pointer list-none p-6">
<span>Ist das echt?</span>
<span className="transition group-open:rotate-180"><svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg></span>
</summary>
<div className="text-gray-500 px-6 pb-6 pt-0">
                        Es ist eine Satire-Landingpage für Demonstrationszwecke. Aber das Design ist zu 100% echt und mit Liebe gemacht.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-24 bg-primary relative overflow-hidden" id="waitlist">

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IiZmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4xIi8+PC9zdmc+')] opacity-20"></div>
<div className="max-w-xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 text-center">
<h2 className="font-display font-bold text-3xl sm:text-4xl text-white mb-6">Hol dir den ersten Platz auf der Fensterbank.</h2>
<p className="text-pink-100 mb-8">Trag dich ein und erfahre als Erster, wenn wir in deiner Stadt starten.</p>
<form className="bg-white p-2 rounded-2xl shadow-2xl flex flex-col sm:flex-row gap-2" onsubmit="event.preventDefault(); alert('Miau! Wir melden uns.');">
<input className="flex-1 px-6 py-4 rounded-xl text-gray-900 placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-accent bg-transparent" placeholder="deine@email.com" required="" type="email"/>
<button className="bg-dark text-white px-8 py-4 rounded-xl font-bold hover:bg-gray-800 transition-colors whitespace-nowrap" type="submit">
                    Warteliste beitreten
                </button>
</form>
<p className="mt-4 text-xs text-pink-200 opacity-80">Wir spammen nicht. Ehrenwort (Pfote drauf).</p>
</div>
</section>

<footer className="bg-white pt-16 pb-8 border-t border-gray-100">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center mb-8">
<div className="flex items-center gap-2 mb-4 md:mb-0">
<div className="w-6 h-6 bg-primary rounded flex items-center justify-center text-white">
<svg className="lucide lucide-paw-print w-3 h-3 fill-current" data-lucide="paw-print" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="11" cy="4" r="2"></circle><circle cx="18" cy="8" r="2"></circle><circle cx="20" cy="16" r="2"></circle><path d="M9 10a5 5 0 0 1 5 5v3.5a3.5 3.5 0 0 1-6.84 1.045Q6.52 17.48 4.46 16.84A3.5 3.5 0 0 1 5.5 10Z"></path></svg>
</div>
<span className="font-bold text-lg">Haustier-Tinder</span>
</div>
<div className="flex space-x-6">
<a className="text-gray-400 hover:text-primary transition-colors" href="#"><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="text-gray-400 hover:text-primary transition-colors" href="#"><svg className="lucide lucide-instagram w-5 h-5" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg></a>
<a className="text-gray-400 hover:text-primary transition-colors" href="#"><svg className="lucide lucide-facebook w-5 h-5" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg></a>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center text-sm text-gray-500 border-t border-gray-100 pt-8">
<div className="flex space-x-6 mb-4 md:mb-0">
<a className="hover:text-dark" href="#">Datenschutz</a>
<a className="hover:text-dark" href="#">Terms</a>
<a className="hover:text-dark" href="#">Impressum</a>
</div>
<p>Fiktives Produkt. Echter Humor. Keine echten Matches garantiert.</p>
</div>
</div>
</footer>



    </>
  );
}
