import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Initialize Lucide icons
        lucide.createIcons();
        
        // Smooth scrolling for navigation links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('visible');
                }
            });
        }, observerOptions);
        
        // Observe all animation elements
        document.querySelectorAll('.fade-in, .slide-in-left, .slide-in-right').forEach(el => {
            observer.observe(el);
        });
        
        // Download sponsorship packet function
        function downloadSponsorshipPacket() {
            alert('Sponsorship packet download would be implemented here. Please contact us for more information.');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 right-0 bg-neutral-900/90 backdrop-blur-md border-b border-neutral-800 z-50">
<div className="max-w-7xl mx-auto px-6 py-4">
<div className="flex items-center justify-between">
<div className="cinzel text-2xl font-semibold text-white">Bets for the Brave</div>
<div className="hidden md:flex space-x-8">
<a className="text-gray-300 hover:text-yellow-400 transition-colors" href="#tickets">Tickets</a>
<a className="text-gray-300 hover:text-yellow-400 transition-colors" href="#raffle">Car Raffle</a>
<a className="text-gray-300 hover:text-yellow-400 transition-colors" href="#sponsorship">Sponsorship</a>
<a className="text-gray-300 hover:text-yellow-400 transition-colors" href="#about">About</a>
</div>
</div>
</div>
</nav>

<section className="hero-bg min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
<div className="absolute inset-0 bg-gradient-to-br from-yellow-500/10 via-transparent to-amber-500/10"></div>

<div className="absolute top-20 left-12 card-suit text-6xl text-yellow-400 opacity-30" style={{animationDelay: '0s'}}>♠</div>
<div className="absolute top-24 right-16 card-suit text-6xl text-yellow-400 opacity-30" style={{animationDelay: '1s'}}>♥</div>
<div className="absolute bottom-16 left-16 card-suit text-6xl text-yellow-400 opacity-30" style={{animationDelay: '2s'}}>♦</div>
<div className="absolute bottom-12 right-12 card-suit text-6xl text-yellow-400 opacity-30" style={{animationDelay: '3s'}}>♣</div>
<div className="text-center z-10 max-w-6xl mx-auto px-6 fade-in">
<p className="text-yellow-400 text-sm font-semibold tracking-widest uppercase mb-6">"Royal Flush Sponsor" Presents</p>
<h1 className="cinzel text-6xl md:text-7xl lg:text-8xl font-bold text-yellow-300 drop-shadow-lg mb-8 text-glow leading-tight">
                Bets<br/>For the<br/>Brave Gala
            </h1>
<p className="text-yellow-400 font-semibold text-lg md:text-xl mb-8">
                Benefiting the Homes for Heroes Foundation
            </p>
<p className="text-gray-300 italic text-lg md:text-xl mb-4">
                February 28<span className="align-super text-sm">th</span>, 2026
            </p>
<div className="flex justify-center mb-2">
<span className="inline-flex items-center bg-yellow-400 text-neutral-900 px-6 py-3 rounded-full text-base font-semibold shadow-lg">
                    At The Grand on 81 Mary St.
                </span>
</div>
<p className="text-gray-300 text-base mb-12">
                Charleston, SC 29403
            </p>
<div className="flex flex-col sm:flex-row gap-6 justify-center">
<a className="bg-yellow-400 text-neutral-900 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-300 transition-all duration-300 shadow-lg" href="https://www.zeffy.com/ticketing/bets-for-the-brave-gala">
                    Reserve Your Seat
                </a>
<a className="border-2 border-yellow-400 text-yellow-400 px-8 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 hover:text-neutral-900 transition-all duration-300" href="https://www.zeffy.com/ticketing/bets-for-the-brave-gala-car-raffle">
                    Win a Car • $50 Raffle
                </a>
</div>
<div className="mt-8 pt-8 border-t border-neutral-700">
<a className="inline-flex items-center space-x-2 text-yellow-400 hover:text-yellow-300 transition-colors" href="#" onclick="downloadSponsorshipPacket()">
<i className="w-5 h-5" data-lucide="download"></i>
<span className="font-semibold">Download Sponsorship Packet</span>
</a>
</div>
</div>
</section>

<section className="py-20 bg-neutral-800">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-4">Event Timeline</h2>
<p className="text-xl text-gray-300">Your evening schedule at the gala</p>
</div>
<div className="relative">

<div className="absolute left-8 top-0 bottom-0 w-1 timeline-line"></div>
<div className="space-y-8">

<div className="relative flex items-start space-x-8 slide-in-left">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="clock"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Cocktail Reception</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">7:00 PM</span>
</div>
<p className="text-gray-600">Welcome drinks, networking, and silent auction preview</p>
</div>
</div>

<div className="relative flex items-start space-x-8 slide-in-right">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="utensils"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Gourmet Dinner</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">8:00 PM</span>
</div>
<p className="text-gray-600">Three-course meal with wine pairings and welcome remarks</p>
</div>
</div>

<div className="relative flex items-start space-x-8 slide-in-left">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="spade"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Casino Opens</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">9:30 PM</span>
</div>
<p className="text-gray-600">Blackjack, poker, roulette, and craps with professional dealers</p>
</div>
</div>

<div className="relative flex items-start space-x-8 slide-in-right">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="music"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Live Entertainment</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">10:00 PM</span>
</div>
<p className="text-gray-600">Live music, dancing, and continued gaming</p>
</div>
</div>

<div className="relative flex items-start space-x-8 slide-in-left">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="car"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Car Raffle Drawing</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">11:00 PM</span>
</div>
<p className="text-gray-600">Live drawing for the grand prize vehicle</p>
</div>
</div>

<div className="relative flex items-start space-x-8 slide-in-right">
<div className="w-16 h-16 rounded-full timeline-dot flex items-center justify-center flex-shrink-0">
<i className="w-8 h-8 text-white" data-lucide="trophy"></i>
</div>
<div className="bg-white rounded-2xl p-6 flex-1 shadow-lg">
<div className="flex items-center justify-between mb-3">
<h3 className="cinzel text-xl font-semibold text-gray-900">Closing Ceremony</h3>
<span className="text-sm font-semibold text-yellow-600 bg-yellow-100 px-3 py-1 rounded-full">12:00 AM</span>
</div>
<p className="text-gray-600">Final remarks, thank you, and farewell</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-4">Three Ways to Support</h2>
<p className="text-xl text-gray-300">Choose your level of involvement in this incredible cause</p>
</div>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white rounded-2xl p-8 text-center card-hover">
<div className="w-16 h-16 bg-amber-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-white" data-lucide="ticket"></i>
</div>
<h3 className="cinzel text-2xl font-semibold text-gray-900 mb-4">Attend the Gala</h3>
<p className="text-gray-600 mb-6">Join us for an unforgettable evening of casino games, fine dining, and entertainment while supporting our brave heroes.</p>
<div className="text-3xl font-bold text-amber-600 mb-2">$150</div>
<div className="text-sm text-gray-500 mb-6">Per Person</div>
<a className="bg-amber-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-amber-700 transition-colors" href="#tickets">
                        Buy Tickets
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 text-center card-hover">
<div className="w-16 h-16 bg-yellow-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-white" data-lucide="car"></i>
</div>
<h3 className="cinzel text-2xl font-semibold text-gray-900 mb-4">Win a Car</h3>
<p className="text-gray-600 mb-6">Enter our exciting car raffle for a chance to win a brand new vehicle while supporting our cause. Only 1,000 tickets available!</p>
<div className="text-3xl font-bold text-yellow-600 mb-2">$50</div>
<div className="text-sm text-gray-500 mb-6">Per Raffle Ticket</div>
<a className="bg-yellow-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-yellow-700 transition-colors" href="#raffle">
                        Enter Raffle
                    </a>
</div>

<div className="bg-white rounded-2xl p-8 text-center card-hover">
<div className="w-16 h-16 bg-orange-600 rounded-full flex items-center justify-center mx-auto mb-6">
<i className="w-8 h-8 text-white" data-lucide="crown"></i>
</div>
<h3 className="cinzel text-2xl font-semibold text-gray-900 mb-4">Become a Sponsor</h3>
<p className="text-gray-600 mb-6">Partner with us to make a significant impact. Multiple sponsorship levels available with exclusive benefits and recognition.</p>
<div className="text-3xl font-bold text-orange-600 mb-2">$500+</div>
<div className="text-sm text-gray-500 mb-6">Various Levels</div>
<a className="bg-orange-600 text-white px-6 py-3 rounded-full font-semibold hover:bg-orange-700 transition-colors" href="#sponsorship">
                        Learn More
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-800" id="about">
<div className="max-w-7xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="slide-in-left">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-8">An Evening of Elegance &amp; Impact</h2>
<div className="space-y-6 text-gray-300">
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="calendar"></i>
</div>
<div>
<h3 className="font-semibold text-white mb-2">Date &amp; Time</h3>
<p>February 28th, 2026 at 7:00 PM</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="font-semibold text-white mb-2">Location</h3>
<p>The Grand on 81 Mary St.<br/>Charleston, SC 29403</p>
</div>
</div>
<div className="flex items-start space-x-4">
<div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
<i className="w-4 h-4 text-white" data-lucide="users"></i>
</div>
<div>
<h3 className="font-semibold text-white mb-2">Dress Code</h3>
<p>Cocktail attire encouraged • Come dressed to impress</p>
</div>
</div>
</div>
</div>
<div className="slide-in-right">
<div className="premium-card bg-neutral-800/50 p-8 rounded-2xl">
<h3 className="cinzel text-3xl font-semibold text-white mb-6">What's Included</h3>
<div className="space-y-4">
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Professional casino gaming tables</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Gourmet dinner and premium bar</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Live entertainment and music</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Silent auction with amazing prizes</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Networking with community leaders</span>
</div>
<div className="flex items-center space-x-3">
<div className="w-2 h-2 bg-yellow-400 rounded-full"></div>
<span className="text-gray-300">Photo opportunities and keepsakes</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900" id="tickets">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="fade-in">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-8">Reserve Your Seat</h2>
<p className="text-xl text-gray-300 mb-12">Join us for an unforgettable evening supporting our heroes</p>
<div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
<div className="text-center mb-8">
<div className="text-6xl font-bold text-gray-900 mb-2">$150</div>
<div className="text-gray-600">Per Person</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-amber-600" data-lucide="check"></i>
<span className="text-gray-700">Gourmet dinner and premium bar</span>
</div>
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-amber-600" data-lucide="check"></i>
<span className="text-gray-700">Casino gaming with professional dealers</span>
</div>
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-amber-600" data-lucide="check"></i>
<span className="text-gray-700">Live entertainment and silent auction</span>
</div>
</div>
<button className="w-full bg-yellow-500 text-neutral-900 py-4 rounded-full font-semibold text-lg hover:bg-yellow-400 transition-colors">
                        Purchase Tickets
                    </button>
<p className="text-sm text-gray-500 mt-4">
                        Secure payment processing • Tickets delivered via email
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-800" id="raffle">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16 fade-in">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-4">Win a Brand New Car</h2>
<p className="text-xl text-gray-300">Only 1,000 tickets available • Drawing held at the gala</p>
</div>
<div className="grid lg:grid-cols-2 gap-12 items-center">
<div className="slide-in-left">
<div className="bg-white rounded-2xl p-8 shadow-2xl">
<div className="text-center mb-8">
<i className="w-24 h-24 text-yellow-600 mx-auto mb-4" data-lucide="car"></i>
<h3 className="cinzel text-3xl font-semibold text-gray-900 mb-2">2026 Premium Vehicle</h3>
<p className="text-gray-600">Value: $35,000+</p>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-yellow-600" data-lucide="star"></i>
<span className="text-gray-700">Latest model with premium features</span>
</div>
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-yellow-600" data-lucide="star"></i>
<span className="text-gray-700">Full warranty and dealer support</span>
</div>
<div className="flex items-center space-x-3">
<i className="w-5 h-5 text-yellow-600" data-lucide="star"></i>
<span className="text-gray-700">Winner announced at the gala</span>
</div>
</div>
<div className="text-center">
<div className="text-4xl font-bold text-yellow-600 mb-2">$50</div>
<div className="text-gray-600 mb-6">Per Raffle Ticket</div>
<button className="w-full bg-yellow-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-yellow-700 transition-colors">
                                Buy Raffle Tickets
                            </button>
</div>
</div>
</div>
<div className="slide-in-right">
<div className="space-y-8">
<div className="premium-card bg-neutral-800/50 p-6 rounded-2xl">
<h4 className="font-semibold text-white mb-3">Raffle Details</h4>
<div className="space-y-2 text-gray-300">
<p>• Only 1,000 tickets will be sold</p>
<p>• Drawing held live at the gala</p>
<p>• Winner need not be present</p>
<p>• All proceeds support our cause</p>
</div>
</div>
<div className="premium-card bg-neutral-800/50 p-6 rounded-2xl">
<h4 className="font-semibold text-white mb-3">How It Works</h4>
<div className="space-y-2 text-gray-300">
<p>1. Purchase your raffle tickets online</p>
<p>2. Receive confirmation and ticket numbers</p>
<p>3. Winner drawn at the gala event</p>
<p>4. Vehicle delivered to winner</p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900" id="sponsorship">
<div className="max-w-4xl mx-auto px-6 text-center">
<div className="fade-in">
<h2 className="cinzel text-4xl md:text-5xl font-semibold text-white mb-8">Partner With Us</h2>
<p className="text-xl text-gray-300 mb-12">Make a significant impact while gaining valuable exposure</p>
<div className="bg-white rounded-2xl p-8 md:p-12 shadow-2xl">
<h3 className="cinzel text-3xl font-semibold text-gray-900 mb-6">Sponsorship Opportunities</h3>
<p className="text-gray-600 mb-8">Join us as a corporate partner and gain valuable exposure while supporting our heroes. Multiple sponsorship levels available with exclusive benefits.</p>
<div className="grid md:grid-cols-2 gap-6 mb-8">
<div className="bg-gray-50 p-6 rounded-xl">
<h4 className="font-semibold text-gray-900 mb-3">Platinum Sponsor</h4>
<div className="text-2xl font-bold text-orange-600 mb-2">$5,000</div>
<div className="text-sm text-gray-600">Premier recognition &amp; benefits</div>
</div>
<div className="bg-gray-50 p-6 rounded-xl">
<h4 className="font-semibold text-gray-900 mb-3">Gold Sponsor</h4>
<div className="text-2xl font-bold text-yellow-600 mb-2">$2,500</div>
<div className="text-sm text-gray-600">Excellent visibility &amp; perks</div>
</div>
<div className="bg-gray-50 p-6 rounded-xl">
<h4 className="font-semibold text-gray-900 mb-3">Silver Sponsor</h4>
<div className="text-2xl font-bold text-gray-600 mb-2">$1,000</div>
<div className="text-sm text-gray-600">Great exposure &amp; benefits</div>
</div>
<div className="bg-gray-50 p-6 rounded-xl">
<h4 className="font-semibold text-gray-900 mb-3">Bronze Sponsor</h4>
<div className="text-2xl font-bold text-amber-600 mb-2">$500</div>
<div className="text-sm text-gray-600">Recognition &amp; support</div>
</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
<span className="text-gray-700">Logo placement on all marketing materials</span>
</div>
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
<span className="text-gray-700">Recognition during event announcements</span>
</div>
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
<span className="text-gray-700">Complimentary tickets and table reservations</span>
</div>
<div className="flex items-center justify-center space-x-3">
<i className="w-5 h-5 text-orange-600" data-lucide="check"></i>
<span className="text-gray-700">Tax-deductible charitable contribution</span>
</div>
</div>
<button className="w-full bg-orange-600 text-white py-4 rounded-full font-semibold text-lg hover:bg-orange-700 transition-colors mb-4">
                        Become a Sponsor
                    </button>
<p className="text-sm text-gray-500">
                        Contact us for custom sponsorship packages • All donations are tax-deductible
                    </p>
</div>
</div>
</div>
</section>

<footer className="bg-neutral-800 border-t border-neutral-700 py-12">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div>
<h3 className="cinzel text-2xl font-semibold text-white mb-4">Bets for the Brave</h3>
<p className="text-gray-300 mb-4">Supporting our heroes through community fundraising events.</p>
<div className="flex space-x-4">
<a className="text-gray-400 hover:text-yellow-400 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="facebook"></i>
</a>
<a className="text-gray-400 hover:text-yellow-400 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-yellow-400 transition-colors" href="#">
<i className="w-6 h-6" data-lucide="instagram"></i>
</a>
</div>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Quick Links</h4>
<ul className="space-y-2 text-gray-300">
<li><a className="hover:text-yellow-400 transition-colors" href="https://www.zeffy.com/ticketing/bets-for-the-brave-gala">Buy Tickets</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="https://www.zeffy.com/ticketing/bets-for-the-brave-gala-car-raffle">Car Raffle</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#sponsorship">Sponsorship</a></li>
<li><a className="hover:text-yellow-400 transition-colors" href="#about">About Event</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold text-white mb-4">Contact Info</h4>
<div className="space-y-2 text-gray-300">
<p>The Grand on 81 Mary St.</p>
<p>Charleston, SC 29403</p>
<p>February 28th, 2026</p>
<p className="text-yellow-400">info@betsforthebrave.org</p>
</div>
</div>
</div>
<div className="border-t border-neutral-700 mt-8 pt-8 text-center text-gray-400">
<p>© 2026 Bets for the Brave. All rights reserved. • Benefiting Homes for Heroes Foundation</p>
</div>
</div>
</footer>


    </>
  );
}
