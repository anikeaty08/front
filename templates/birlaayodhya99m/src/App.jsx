import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Array of words to cycle through in typing animation
        const words = [
            'room.',
            'PG stay.',
            'flatmate.',
            'studio.',
            'apartment.',
            'co-living space.',
            'hostel.',
        ];

        // State variables
        let wordIndex = 0;      // Current word index
        let charIndex = 0;      // Current character position
        let isDeleting = false;  // Whether we're deleting characters
        let typingSpeed = 100;   // Speed in milliseconds

        // Get the DOM element where text is displayed
        const typedText = document.getElementById('typed-text');

        // Main typing function
        function type() {
            const currentWord = words[wordIndex];

            if (isDeleting) {
                // Remove one character at a time
                typedText.textContent = currentWord.substring(0, charIndex - 1);
                charIndex--;
                typingSpeed = 50; // Faster when deleting
            } else {
                // Add one character at a time
                typedText.textContent = currentWord.substring(0, charIndex + 1);
                charIndex++;
                typingSpeed = 100; // Normal speed when typing
            }

            // Word fully typed - pause then start deleting
            if (!isDeleting && charIndex === currentWord.length) {
                typingSpeed = 2000; // 2 second pause at end of word
                isDeleting = true;
            } 
            // Word fully deleted - move to next word
            else if (isDeleting && charIndex === 0) {
                isDeleting = false;
                wordIndex = (wordIndex + 1) % words.length; // Loop back to first word
                typingSpeed = 300; // Small pause before next word
            }

            // Call this function again after the delay
            setTimeout(type, typingSpeed);
        }

        // Start the typing animation
        type();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      



<nav className="fixed top-0 w-full bg-white bg-opacity-80 z-50 border-b border-gray-100" style={{backdropFilter: 'blur(12px)'}}>
<div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

<a className="text-xl font-semibold tracking-tight text-gray-900" href="#">
                room<span style={{color: '#6366f1'}}>ease</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#rooms">Rooms</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#how">How it Works</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#features">Features</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#testimonials">Reviews</a>
</div>

<div className="flex items-center gap-3">
<button className="hidden sm:inline-block text-sm font-medium text-gray-600 hover:text-gray-900 transition px-4 py-2">Log in</button>
<button className="text-sm font-medium text-white px-5 py-2.5 rounded-lg transition" onmouseout="this.style.background='#6366f1'" onmouseover="this.style.background='#4f46e5'" style={{background: '#6366f1'}}>Get Started</button>
</div>
</div>
</nav>



<section className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">

<div className="absolute inset-0" style={{background: 'radial-gradient(ellipse at 50% 0%, rgba(99,102,241,0.08) 0%, transparent 60%)'}}></div>
<div className="absolute top-32 left-10 w-72 h-72 rounded-full opacity-20" style={{background: '#6366f1', filter: 'blur(120px)'}}></div>
<div className="absolute bottom-20 right-10 w-96 h-96 rounded-full opacity-10" style={{background: '#a78bfa', filter: 'blur(140px)'}}></div>
<div className="max-w-4xl mx-auto px-6 text-center relative z-10">

<div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full border border-gray-200 bg-white mb-8">
<span className="w-2 h-2 rounded-full" style={{background: '#22c55e'}}></span>
<span className="text-xs font-medium text-gray-600">1,200+ rooms available near you</span>
</div>

<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-gray-900 leading-tight mb-6">
                Find your perfect<br/>
<span id="typing-container" style={{color: '#6366f1'}}>
<span id="typed-text"></span>
<span className="inline-block w-0.5 ml-0.5 animate-pulse" id="cursor" style={{background: '#6366f1', height: '1em', verticalAlign: 'text-bottom'}}></span>
</span>
</h1>

<p className="text-base sm:text-lg text-gray-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Browse verified rooms, connect with landlords instantly, and move in hassle-free. Your next home is just a search away.
            </p>

<div className="max-w-2xl mx-auto bg-white rounded-2xl border border-gray-200 p-2 flex flex-col sm:flex-row gap-2 shadow-lg shadow-gray-100">

<div className="flex-1 flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
<input className="bg-transparent text-sm w-full outline-none text-gray-900 placeholder-gray-400" placeholder="Enter city or area..." type="text"/>
</div>

<div className="flex items-center gap-3 px-4 py-3 rounded-xl bg-gray-50 sm:w-44">
<iconify-icon icon="solar:wallet-money-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
<input className="bg-transparent text-sm w-full outline-none text-gray-900 placeholder-gray-400" placeholder="Budget" type="text"/>
</div>

<button className="flex items-center justify-center gap-2 text-sm font-medium text-white px-6 py-3 rounded-xl transition" onmouseout="this.style.background='#6366f1'" onmouseover="this.style.background='#4f46e5'" style={{background: '#6366f1'}}>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" width="18"></iconify-icon>
                    Search
                </button>
</div>

<div className="flex flex-wrap items-center justify-center gap-6 mt-10">
<div className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" style={{color: '#22c55e'}} width="16"></iconify-icon>
                    Verified Listings
                </div>
<div className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5" style={{color: '#22c55e'}} width="16"></iconify-icon>
                    Secure Payments
                </div>
<div className="flex items-center gap-2 text-xs text-gray-400">
<iconify-icon icon="solar:chat-round-check-linear" strokeWidth="1.5" style={{color: '#22c55e'}} width="16"></iconify-icon>
                    24/7 Support
                </div>
</div>
</div>
</section>



<section className="py-24 bg-gray-50" id="how">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color: '#6366f1'}}>How it works</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Move in 3 simple steps</h2>
</div>

<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:magnifer-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold mb-3" style={{color: '#6366f1'}}>Step 01</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Search &amp; Explore</h3>
<p className="text-sm text-gray-500 leading-relaxed">Browse hundreds of verified rooms by location, budget, and amenities that match your needs.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:chat-round-dots-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold mb-3" style={{color: '#6366f1'}}>Step 02</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Connect &amp; Visit</h3>
<p className="text-sm text-gray-500 leading-relaxed">Chat directly with landlords, schedule visits, and see the room in person before deciding.</p>
</div>

<div className="bg-white rounded-2xl p-8 border border-gray-100 hover:border-gray-200 transition group">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:key-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="24"></iconify-icon>
</div>
<div className="text-xs font-semibold mb-3" style={{color: '#6366f1'}}>Step 03</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mb-2">Book &amp; Move In</h3>
<p className="text-sm text-gray-500 leading-relaxed">Pay securely online, sign the digital agreement, and move into your new room hassle-free.</p>
</div>
</div>
</div>
</section>



<section className="py-24" id="rooms">
<div className="max-w-7xl mx-auto px-6">

<div className="flex flex-col sm:flex-row sm:items-end sm:justify-between mb-12 gap-4">
<div>
<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color: '#6366f1'}}>Featured rooms</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Popular near you</h2>
</div>
<a className="text-sm font-medium flex items-center gap-1 transition" href="#" style={{color: '#6366f1'}}>
                    View all rooms
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="16"></iconify-icon>
</a>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">

<div className="relative aspect-video overflow-hidden bg-gray-100">
<img alt="Spacious Room with Balcony" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1631049307264-da0ec9d70304?w=600&amp;h=400&amp;fit=crop"/>

<div className="absolute top-3 left-3 bg-white bg-opacity-90 text-xs font-medium px-3 py-1 rounded-full" style={{backdropFilter: 'blur(8px)'}}>Single Room</div>

<button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center" style={{backdropFilter: 'blur(8px)'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="16"></iconify-icon>
</button>
</div>

<div className="p-5">

<div className="flex items-center gap-1.5 mb-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{color: '#9ca3af'}} width="14"></iconify-icon>
<span className="text-xs text-gray-400">Koramangala, Bangalore</span>
</div>

<h3 className="text-base font-semibold text-gray-900 mb-1">Spacious Room with Balcony</h3>

<div className="flex items-center gap-3 mb-4">
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="14"></iconify-icon> Furnished
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="14"></iconify-icon> Attached
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:wi-fi-router-linear" strokeWidth="1.5" width="14"></iconify-icon> WiFi
                            </span>
</div>

<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="text-lg font-semibold" style={{color: '#6366f1'}}>₹8,500</span>
<span className="text-xs text-gray-400">/month</span>
</div>
<button className="text-xs font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">View Details</button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
<div className="relative aspect-video overflow-hidden bg-gray-100">
<img alt="Modern Shared Living Space" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1522771739844-6a9f6d5f14af?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white bg-opacity-90 text-xs font-medium px-3 py-1 rounded-full" style={{backdropFilter: 'blur(8px)'}}>Sharing</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center" style={{backdropFilter: 'blur(8px)'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="16"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{color: '#9ca3af'}} width="14"></iconify-icon>
<span className="text-xs text-gray-400">HSR Layout, Bangalore</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Modern Shared Living Space</h3>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="14"></iconify-icon> Semi-Furn
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="14"></iconify-icon> Common
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:wi-fi-router-linear" strokeWidth="1.5" width="14"></iconify-icon> WiFi
                            </span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="text-lg font-semibold" style={{color: '#6366f1'}}>₹5,200</span>
<span className="text-xs text-gray-400">/month</span>
</div>
<button className="text-xs font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">View Details</button>
</div>
</div>
</div>

<div className="group rounded-2xl border border-gray-100 overflow-hidden hover:border-gray-200 hover:shadow-lg hover:shadow-gray-100 transition-all duration-300">
<div className="relative aspect-video overflow-hidden bg-gray-100">
<img alt="Premium Studio Apartment" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=600&amp;h=400&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white bg-opacity-90 text-xs font-medium px-3 py-1 rounded-full" style={{backdropFilter: 'blur(8px)'}}>1 BHK</div>

<div className="absolute top-3 right-12 text-xs font-medium px-3 py-1 rounded-full text-white" style={{background: '#22c55e'}}>Popular</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white bg-opacity-90 rounded-full flex items-center justify-center" style={{backdropFilter: 'blur(8px)'}}>
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="16"></iconify-icon>
</button>
</div>
<div className="p-5">
<div className="flex items-center gap-1.5 mb-2">
<iconify-icon icon="solar:map-point-linear" strokeWidth="1.5" style={{color: '#9ca3af'}} width="14"></iconify-icon>
<span className="text-xs text-gray-400">Indiranagar, Bangalore</span>
</div>
<h3 className="text-base font-semibold text-gray-900 mb-1">Premium Studio Apartment</h3>
<div className="flex items-center gap-3 mb-4">
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bed-linear" strokeWidth="1.5" width="14"></iconify-icon> Furnished
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:bath-linear" strokeWidth="1.5" width="14"></iconify-icon> Attached
                            </span>
<span className="text-xs text-gray-400 flex items-center gap-1">
<iconify-icon icon="solar:wi-fi-router-linear" strokeWidth="1.5" width="14"></iconify-icon> WiFi
                            </span>
</div>
<div className="flex items-center justify-between pt-4 border-t border-gray-100">
<div>
<span className="text-lg font-semibold" style={{color: '#6366f1'}}>₹15,000</span>
<span className="text-xs text-gray-400">/month</span>
</div>
<button className="text-xs font-medium px-4 py-2 rounded-lg border border-gray-200 hover:border-gray-300 transition">View Details</button>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="py-24 bg-gray-50" id="features">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color: '#6366f1'}}>Why choose us</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">Everything you need,<br className="hidden sm:block"/> nothing you don't</h2>
</div>

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:verified-check-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">100% Verified</h4>
<p className="text-xs text-gray-500 leading-relaxed">Every listing is personally verified by our team for authenticity.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:tag-price-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Zero Brokerage</h4>
<p className="text-xs text-gray-500 leading-relaxed">No hidden charges. Connect directly with owners, save thousands.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:lock-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">Secure Payments</h4>
<p className="text-xs text-gray-500 leading-relaxed">Pay rent online securely with automated receipts &amp; tracking.</p>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="w-10 h-10 rounded-lg flex items-center justify-center mb-4" style={{background: 'rgba(99,102,241,0.1)'}}>
<iconify-icon icon="solar:headphones-round-linear" strokeWidth="1.5" style={{color: '#6366f1'}} width="20"></iconify-icon>
</div>
<h4 className="text-sm font-semibold text-gray-900 mb-1">24/7 Support</h4>
<p className="text-xs text-gray-500 leading-relaxed">Our dedicated team is always ready to help with any issues.</p>
</div>
</div>
</div>
</section>



<section className="py-20">
<div className="max-w-7xl mx-auto px-6">
<div className="rounded-3xl p-10 sm:p-16 text-center text-white relative overflow-hidden" style={{background: 'linear-gradient(135deg, #6366f1, #4f46e5, #4338ca)'}}>

<div className="absolute top-0 right-0 w-64 h-64 rounded-full opacity-10" style={{background: 'white', filter: 'blur(80px)'}}></div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-4 relative z-10">Trusted by thousands across India</h2>
<p className="text-sm text-indigo-200 mb-12 relative z-10">Join our growing community of happy tenants and landlords</p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
<div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight">15K+</div>
<div className="text-xs text-indigo-200 mt-1">Happy Tenants</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight">8K+</div>
<div className="text-xs text-indigo-200 mt-1">Verified Rooms</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight">25+</div>
<div className="text-xs text-indigo-200 mt-1">Cities</div>
</div>
<div>
<div className="text-3xl sm:text-4xl font-semibold tracking-tight">4.8</div>
<div className="text-xs text-indigo-200 mt-1">Avg Rating</div>
</div>
</div>
</div>
</div>
</section>



<section className="py-24 bg-gray-50" id="testimonials">
<div className="max-w-7xl mx-auto px-6">

<div className="text-center mb-16">
<p className="text-xs font-semibold uppercase tracking-widest mb-3" style={{color: '#6366f1'}}>Testimonials</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900">What our users say</h2>
</div>

<div className="grid md:grid-cols-3 gap-6">

<div className="bg-white rounded-2xl p-6 border border-gray-100">

<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
</div>

<p className="text-sm text-gray-600 leading-relaxed mb-6">"Found an amazing room in Koramangala within 2 days. The whole process was seamless and the room was exactly as shown in photos."</p>

<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{background: '#6366f1'}}>AP</div>
<div>
<div className="text-sm font-medium text-gray-900">Arjun Patel</div>
<div className="text-xs text-gray-400">Bangalore</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">"As a landlord, I was able to find reliable tenants quickly. The verification process gives peace of mind to both parties."</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{background: '#8b5cf6'}}>SK</div>
<div>
<div className="text-sm font-medium text-gray-900">Sneha Kumar</div>
<div className="text-xs text-gray-400">Mumbai</div>
</div>
</div>
</div>

<div className="bg-white rounded-2xl p-6 border border-gray-100">
<div className="flex items-center gap-1 mb-4">
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
<iconify-icon icon="solar:star-bold" style={{color: '#f59e0b'}} width="14"></iconify-icon>
</div>
<p className="text-sm text-gray-600 leading-relaxed mb-6">"Zero brokerage saved me ₹15,000! The platform is super easy to use and customer support was always responsive."</p>
<div className="flex items-center gap-3">
<div className="w-9 h-9 rounded-full flex items-center justify-center text-xs font-semibold text-white" style={{background: '#ec4899'}}>RG</div>
<div>
<div className="text-sm font-medium text-gray-900">Rahul Gupta</div>
<div className="text-xs text-gray-400">Delhi</div>
</div>
</div>
</div>
</div>
</div>
</section>



<section className="py-24">
<div className="max-w-3xl mx-auto px-6 text-center">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-gray-900 mb-4">Ready to find your room?</h2>
<p className="text-base text-gray-500 mb-8">Start browsing verified rooms in your city today. No brokerage, no hassle.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-3">
<button className="text-sm font-medium text-white px-8 py-3 rounded-xl transition w-full sm:w-auto" onmouseout="this.style.background='#6366f1'" onmouseover="this.style.background='#4f46e5'" style={{background: '#6366f1'}}>
                    Browse Rooms
                </button>
<button className="text-sm font-medium text-gray-700 px-8 py-3 rounded-xl border border-gray-200 hover:border-gray-300 transition w-full sm:w-auto">
                    List Your Room
                </button>
</div>
</div>
</section>



<footer className="border-t border-gray-100 py-16 bg-white">
<div className="max-w-7xl mx-auto px-6">

<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-12">

<div>
<a className="text-lg font-semibold tracking-tight text-gray-900" href="#">room<span style={{color: '#6366f1'}}>ease</span></a>
<p className="text-xs text-gray-400 mt-3 leading-relaxed">Find your perfect room with zero brokerage. Verified listings, secure payments, and 24/7 support.</p>

<div className="flex items-center gap-3 mt-5">
<a className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition" href="#">
<iconify-icon icon="mdi:twitter" style={{color: '#6b7280'}} width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition" href="#">
<iconify-icon icon="mdi:instagram" style={{color: '#6b7280'}} width="16"></iconify-icon>
</a>
<a className="w-8 h-8 rounded-lg bg-gray-50 flex items-center justify-center hover:bg-gray-100 transition" href="#">
<iconify-icon icon="mdi:linkedin" style={{color: '#6b7280'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Product</h5>
<div className="flex flex-col gap-3">
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Search Rooms</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">List Property</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Pricing</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Rent Agreement</a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Company</h5>
<div className="flex flex-col gap-3">
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">About Us</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Blog</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Careers</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Contact</a>
</div>
</div>

<div>
<h5 className="text-xs font-semibold text-gray-900 uppercase tracking-wider mb-4">Legal</h5>
<div className="flex flex-col gap-3">
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Privacy Policy</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Terms of Service</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Refund Policy</a>
<a className="text-sm text-gray-500 hover:text-gray-900 transition" href="#">Cookie Policy</a>
</div>
</div>
</div>

<div className="border-t border-gray-100 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-gray-400">© 2024 roomease. All rights reserved.</p>
<p className="text-xs text-gray-400">Made with <span style={{color: '#ef4444'}}>♥</span> in India</p>
</div>
</div>
</footer>





    </>
  );
}
