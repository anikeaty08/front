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



    lucide.createIcons();
    
    let selectedSeats = ['B2', 'B3']; // Initially selected seats
    let screenActive = false;

    // Parallax Effect
    function initParallax() {
      const parallaxBg = document.querySelectorAll('.parallax-bg');
      const parallaxSlow = document.querySelectorAll('.parallax-slow');
      const parallaxFast = document.querySelectorAll('.parallax-fast');

      function updateParallax() {
        const scrolled = window.pageYOffset;
        const rate = scrolled * -0.5;
        const rateSlow = scrolled * -0.2;
        const rateFast = scrolled * -0.8;

        parallaxBg.forEach(element => {
          element.style.transform = `translate3d(0, ${rate}px, 0)`;
        });

        parallaxSlow.forEach(element => {
          element.style.transform = `translate3d(0, ${rateSlow}px, 0)`;
        });

        parallaxFast.forEach(element => {
          element.style.transform = `translate3d(0, ${rateFast}px, 0)`;
        });
      }

      // Use requestAnimationFrame for smooth performance
      let ticking = false;
      
      function requestTick() {
        if (!ticking) {
          requestAnimationFrame(updateParallax);
          ticking = true;
        }
        ticking = false;
      }

      // Throttle scroll events
      window.addEventListener('scroll', requestTick);
    }

    // Initialize parallax on page load
    window.addEventListener('load', initParallax);

    // Screen functionality
    document.getElementById('screen').addEventListener('click', function() {
      const screen = this;
      const screenText = document.getElementById('screen-text');
      
      if (!screenActive) {
        screen.classList.add('screen-active');
        screenText.textContent = 'DOLBY VISION SCREEN • Now Playing: Oppenheimer';
        screenActive = true;
        
        // Auto-deactivate after 3 seconds
        setTimeout(() => {
          screen.classList.remove('screen-active');
          screenText.textContent = 'DOLBY VISION SCREEN • Click to preview';
          screenActive = false;
        }, 3000);
      }
    });

    // Seat selection functionality
    document.querySelectorAll('.seat-available, .seat-premium').forEach(seat => {
      seat.addEventListener('click', function() {
        if (this.classList.contains('seat-selected')) {
          // Deselect seat
          this.classList.remove('seat-selected');
          if (this.dataset.type === 'premium') {
            this.classList.add('seat-premium');
          } else {
            this.classList.add('seat-available');
          }
          selectedSeats = selectedSeats.filter(s => s !== this.dataset.seat);
        } else {
          // Select seat
          this.classList.remove('seat-available', 'seat-premium');
          this.classList.add('seat-selected');
          selectedSeats.push(this.dataset.seat);
        }
        updateBookingSummary();
      });
    });

    function updateBookingSummary() {
      const selectedSeatsElement = document.getElementById('selected-seats');
      const bookingStatus = document.getElementById('booking-status');
      const seatPricing = document.getElementById('seat-pricing');
      const totalPriceElement = document.getElementById('total-price');
      const taxAmountElement = document.getElementById('tax-amount');

      if (selectedSeats.length === 0) {
        selectedSeatsElement.textContent = 'No seats selected';
        bookingStatus.innerHTML = '<i data-lucide="alert-circle" class="w-4 h-4 inline mr-1"></i>Select seats';
        bookingStatus.className = 'apple-glass px-3 py-1 rounded-full text-sm text-orange-400 border border-orange-400/30';
        seatPricing.innerHTML = '<div class="text-white/50">No seats selected</div>';
        totalPriceElement.textContent = '$0.00';
        taxAmountElement.textContent = '$0.00';
        return;
      }

      // Group seats by price
      const seatsByPrice = {};
      let subtotal = 0;

      selectedSeats.forEach(seatId => {
        const seatElement = document.querySelector(`[data-seat="${seatId}"]`);
        if (seatElement) {
          const price = parseFloat(seatElement.dataset.price);
          const type = seatElement.dataset.type;
          
          if (!seatsByPrice[price]) {
            seatsByPrice[price] = { count: 0, type: type };
          }
          seatsByPrice[price].count++;
          subtotal += price;
        }
      });

      // Update selected seats display
      selectedSeatsElement.textContent = selectedSeats.sort().join(', ');
      
      // Update status
      bookingStatus.innerHTML = `<i data-lucide="check-circle" class="w-4 h-4 inline mr-1"></i>${selectedSeats.length} seat${selectedSeats.length > 1 ? 's' : ''} selected`;
      bookingStatus.className = 'apple-glass px-3 py-1 rounded-full text-sm text-green-400 border border-green-400/30';

      // Update pricing breakdown
      let pricingHTML = '';
      Object.entries(seatsByPrice).forEach(([price, data]) => {
        const seatType = data.type === 'premium' ? 'Premium' : 'Standard';
        pricingHTML += `
          <div class="flex justify-between">
            <span class="text-white/70">${seatType} Seats (${data.count}x $${price})</span>
            <span>$${(parseFloat(price) * data.count).toFixed(2)}</span>
          </div>
        `;
      });
      seatPricing.innerHTML = pricingHTML;

      // Calculate totals
      const serviceFee = 3.50;
      const taxRate = 0.0875; // 8.75%
      const tax = (subtotal + serviceFee) * taxRate;
      const total = subtotal + serviceFee + tax;

      taxAmountElement.textContent = `$${tax.toFixed(2)}`;
      totalPriceElement.textContent = `$${total.toFixed(2)}`;

      // Re-initialize Lucide icons for the updated status
      lucide.createIcons();
    }

    // Initialize the booking summary
    updateBookingSummary();
  
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
      

<div className="fixed inset-0 -z-20 overflow-hidden">
<div className="floating-orb w-[600px] h-[600px] top-0 -left-64 parallax-slow"></div>
<div className="floating-orb w-[500px] h-[500px] top-1/2 -right-48 parallax-slow"></div>
<div className="floating-orb w-[400px] h-[400px] bottom-0 left-1/3 parallax-slow"></div>
</div>

<nav className="animate-fade-in fixed top-0 left-0 right-0 z-50 apple-glass" style={{animationPlayState: `running`}}>
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-4">
<div className="flex items-center justify-between">
<div className="text-xl font-semibold tracking-tight flex items-center">
<div className="relative mr-3">
<svg className="lucide lucide-tv w-7 h-7 text-blue-500" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>
<div className="absolute inset-0 bg-blue-500 blur-md opacity-20"></div>
</div>
<span className="apple-text-gradient font-sans">CinemaVision Pro</span>
</div>
<div className="hidden md:flex items-center space-x-8">
<button className="text-white/80 hover:text-white transition-all duration-300 font-normal text-sm font-sans">Movies</button>
<button className="text-white/80 hover:text-white transition-all duration-300 font-normal text-sm font-sans">Theaters</button>
<button className="text-white/80 hover:text-white transition-all duration-300 font-normal text-sm font-sans">Pro Max</button>
<button className="text-white/80 hover:text-white transition-all duration-300 font-normal text-sm font-sans">Support</button>
<button className="apple-button px-4 py-2 rounded-full font-medium text-sm text-white font-sans">
            Sign In
          </button>
</div>
<button className="md:hidden apple-glass p-2 rounded-lg">
<svg className="lucide lucide-menu w-5 h-5" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</nav>

<main className="pt-20">
<section className="relative overflow-hidden min-h-screen flex items-center hero-gradient">
<div className="absolute inset-0 -z-10 parallax-bg">
<img alt="Premium cinema interior" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/45434c56-5fd1-4f92-bf60-72a755bdfbe3_3840w.jpg" />
<div className="absolute inset-0 bg-gradient-to-t from-black via-black/70 to-black/30"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 lg:px-8 py-24 w-full">
<div className="grid grid-cols-1 xl:grid-cols-2 gap-16 items-center">
<div className="animate-slide-right delay-200 parallax-fast" style={{animationPlayState: `running`}}>
<div className="inline-flex items-center apple-glass text-blue-400 px-4 py-2 rounded-full text-sm mb-8 font-sans">
<div className="w-2 h-2 bg-blue-400 rounded-full mr-3 animate-pulse"></div>
<svg className="lucide lucide-sparkles w-4 h-4 mr-2" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
              Now Playing • Dolby Vision
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-bold tracking-tighter mb-8 leading-none">
<span className="apple-text-gradient font-bricolage font-semibold">Oppenheimer</span><br />
<span className="text-4xl md:text-5xl lg:text-6xl text-white/90 font-bricolage font-semibold">in IMAX 70mm</span>
</h1>
<p className="text-xl md:text-2xl text-white/70 max-w-2xl mb-12 leading-relaxed font-bricolage font-semibold">
              Experience Christopher Nolan's masterpiece as intended. Shot on large format IMAX film cameras with 
              <span className="text-orange-400 font-bricolage font-semibold">premium spatial audio</span> and 
              <span className="text-blue-400 font-bricolage font-semibold">laser projection</span>.
            </p>
<div className="flex flex-col sm:flex-row gap-4">
<button className="apple-button px-8 py-4 rounded-2xl font-medium text-lg flex items-center justify-center font-sans">
<svg className="lucide lucide-play w-5 h-5 mr-3" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
                Watch Trailer
              </button>
<button className="apple-glass hover:bg-white/10 transition-all duration-300 px-8 py-4 rounded-2xl font-medium text-lg flex items-center justify-center font-sans">
<svg className="lucide lucide-calendar-plus w-5 h-5 mr-3" data-lucide="calendar-plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 19h6"></path><path d="M16 2v4"></path><path d="M19 16v6"></path><path d="M21 12.598V6a2 2 0 0 0-2-2H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h8.5"></path><path d="M3 10h18"></path><path d="M8 2v4"></path></svg>
                Book Tickets
              </button>
</div>
<div className="animate-slide-up delay-600 flex items-center space-x-8 mt-12 pt-8 border-t border-white/10" style={{animationPlayState: `running`}}>
<div className="text-center">
<div className="text-2xl font-bricolage font-semibold">9.2</div>
<div className="text-sm text-white/60 font-sans">IMDb Rating</div>
</div>
<div className="text-center">
<div className="text-2xl font-bricolage font-semibold">3h 1m</div>
<div className="text-sm text-white/60 font-sans">Runtime</div>
</div>
<div className="text-center">
<div className="text-2xl font-bricolage font-semibold">R</div>
<div className="text-sm text-white/60 font-sans">Rating</div>
</div>
</div>
</div>
<div className="animate-slide-left delay-400 parallax-fast" style={{animationPlayState: `running`}}>
<div className="movie-card rounded-3xl overflow-hidden relative">
<div className="absolute inset-0 z-10 bg-gradient-to-t from-black/60 via-transparent to-transparent relative"><video autoPlay className="absolute inset-0 w-full h-full object-cover" id="asset-video-1755061237006" loop muted playsInline src="https://cdn.midjourney.com/video/a4e50b8c-bdf1-4078-9036-568b259c270a/1.mp4"></video></div>
<video autoPlay className="w-full h-[600px]" id="aura-emea2pusm" loop muted playsInline src="https://cdn.midjourney.com/video/0ead2892-b108-4ab3-86f3-0f2e9386dfa3/0.mp4" title="Oppenheimer movie poster"></video>
<div className="absolute top-6 right-6 z-20">
<div className="apple-glass px-3 py-1 rounded-full text-sm font-medium text-orange-400 border border-orange-400/30 font-sans">
                  IMAX 70mm
                </div>
</div>
<div className="absolute bottom-6 left-6 right-6 z-20">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<div className="flex text-yellow-400 space-x-1">
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<svg className="lucide lucide-star w-4 h-4 fill-current" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
<span className="text-white/80 font-medium text-sm font-sans">4.6 (12.4k)</span>
</div>
<div className="text-right">
<div className="text-2xl text-white font-bricolage font-semibold">$34.99</div>
<div className="text-xs text-white/60 font-sans">Premium IMAX</div>
</div>
</div>
<div className="flex gap-3">
<button className="flex-1 apple-button py-3 rounded-xl font-medium text-sm font-sans">
<svg className="lucide lucide-ticket w-4 h-4 mr-2 inline" data-lucide="ticket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9a3 3 0 0 1 0 6v2a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-2a3 3 0 0 1 0-6V7a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2Z"></path><path d="M13 5v2"></path><path d="M13 17v2"></path><path d="M13 11v2"></path></svg>
                    Book Now
                  </button>
<button className="apple-glass p-3 rounded-xl hover:bg-white/10 transition-all duration-300">
<svg className="lucide lucide-heart w-4 h-4" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</button>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="animate-blur-in delay-800 max-w-7xl lg:px-8 mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 parallax-slow" style={{animationPlayState: `running`}}>
<div className="text-center mb-16">
<h2 className="text-4xl md:text-6xl mb-6 apple-text-gradient tracking-tight font-bricolage font-semibold">Select Your Experience</h2>
<p className="text-xl text-white/70 max-w-3xl mx-auto font-light font-sans">
          Choose from our premium seating options featuring heated massage chairs, personal service, and optimal viewing angles
        </p>
</div>

<div className="animate-scale-in delay-900 flex flex-wrap justify-center gap-4 mb-12" style={{animationPlayState: `running`}}>
<button className="apple-glass hover:bg-blue-500/20 px-6 py-3 rounded-2xl font-medium text-sm flex items-center transition-all duration-300 font-sans">
<svg className="lucide lucide-monitor w-4 h-4 mr-2" data-lucide="monitor" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="3"></rect><line x1="8" x2="16" y1="21" y2="21"></line><line x1="12" x2="12" y1="17" y2="21"></line></svg>
          Theater 1 • IMAX Laser
        </button>
<button className="apple-button px-6 py-3 rounded-2xl font-medium text-sm flex items-center font-sans">
<svg className="lucide lucide-tv-2 w-4 h-4 mr-2" data-lucide="tv-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7 21h10"></path><rect height="14" rx="2" width="20" x="2" y="3"></rect></svg>
          Theater 2 • Dolby Cinema
        </button>
<button className="apple-glass hover:bg-orange-500/20 px-6 py-3 rounded-2xl font-medium text-sm flex items-center transition-all duration-300 font-sans">
<svg className="lucide lucide-gamepad-2 w-4 h-4 mr-2" data-lucide="gamepad-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="6" x2="10" y1="11" y2="11"></line><line x1="8" x2="8" y1="9" y2="13"></line><line x1="15" x2="15.01" y1="12" y2="12"></line><line x1="18" x2="18.01" y1="10" y2="10"></line><path d="M17.32 5H6.68a4 4 0 0 0-3.978 3.59c-.006.052-.01.101-.017.152C2.604 9.416 2 14.456 2 16a3 3 0 0 0 3 3c1 0 1.5-.5 2-1l1.414-1.414A2 2 0 0 1 9.828 16h4.344a2 2 0 0 1 1.414.586L17 18c.5.5 1 1 2 1a3 3 0 0 0 3-3c0-1.545-.604-6.584-.685-7.258-.007-.05-.011-.1-.017-.151A4 4 0 0 0 17.32 5z"></path></svg>
          Theater 3 • 4DX Motion
        </button>
</div>

<div className="animate-slide-up delay-1000" style={{animationPlayState: `running`}}>
<div className="screen-glow relative h-6 max-w-5xl bg-gradient-to-r from-gray-300 via-white to-gray-300 rounded-full mx-auto mb-4 cursor-pointer transition-all duration-500 hover:scale-105" id="screen" style={{boxShadow: `0 0 30px rgba(255,255,255,0.3), inset 0 2px 0 rgba(255,255,255,0.8), inset 0 -1px 0 rgba(0,0,0,0.2)`, background: `linear-gradient(135deg, #f0f0f0 0%, #ffffff 30%, #f8f8f8 50%, #ffffff 70%, #f0f0f0 100%)`, border: `1px solid rgba(255,255,255,0.4)`}}>
<div className="absolute inset-0 bg-gradient-to-r from-transparent via-blue-200/20 to-transparent rounded-full opacity-0 transition-opacity duration-300" id="screen-glow-effect"></div>
<div className="absolute -top-2 left-1/2 transform -translate-x-1/2 w-4 h-1 bg-gradient-to-r from-transparent via-white/60 to-transparent rounded-full"></div>
<div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-1 bg-gradient-to-r from-transparent via-gray-400/40 to-transparent rounded-full"></div>
</div>
<div className="text-center text-white/60 text-sm mb-16 font-medium tracking-widest">
<span className="font-sans" id="screen-text">DOLBY VISION SCREEN • Click to preview</span>
</div>
</div>

<div className="animate-scale-in delay-1200 premium-glass md:p-12 rounded-[2rem] mr-20 mb-12 ml-20 pt-8 pr-8 pb-8 pl-8" style={{animationPlayState: `running`}}>
<div className="md:space-y-6 space-y-4">

<div className="flex justify-center items-center space-x-2 md:space-x-3">
<span className="text-white/60 w-6 md:w-8 text-center font-medium text-sm md:text-base font-sans">A</span>
<div className="flex space-x-1 md:space-x-2">
<button className="seat seat-premium w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="49.99" data-seat="A1" data-type="premium"></button>
<button className="seat seat-premium w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="49.99" data-seat="A2" data-type="premium"></button>
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
<div className="w-4 md:w-6"></div>
<button className="seat seat-premium w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="49.99" data-seat="A3" data-type="premium"></button>
<button className="seat seat-premium w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="49.99" data-seat="A4" data-type="premium"></button>
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
<button className="seat seat-premium w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="49.99" data-seat="A5" data-type="premium"></button>
</div>
</div>

<div className="flex justify-center items-center space-x-2 md:space-x-3">
<span className="text-white/60 w-6 md:w-8 text-center font-medium text-sm md:text-base font-sans">B</span>
<div className="flex space-x-1 md:space-x-2">
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B1" data-type="standard"></button>
<button className="seat seat-selected w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B2" data-type="standard"></button>
<button className="seat seat-selected w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B3" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B4" data-type="standard"></button>
<div className="w-4 md:w-6"></div>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B5" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B6" data-type="standard"></button>
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="34.99" data-seat="B7" data-type="standard"></button>
</div>
</div>

<div className="flex justify-center items-center space-x-2 md:space-x-3">
<span className="text-white/60 w-6 md:w-8 text-center font-medium text-sm md:text-base font-sans">C</span>
<div className="flex space-x-1 md:space-x-2">
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C1" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C2" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C3" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C4" data-type="standard"></button>
<div className="w-4 md:w-6"></div>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C5" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C6" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C7" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="29.99" data-seat="C8" data-type="standard"></button>
</div>
</div>

<div className="flex justify-center items-center space-x-2 md:space-x-3">
<span className="text-white/60 w-6 md:w-8 text-center font-medium text-sm md:text-base font-sans">D</span>
<div className="flex space-x-1 md:space-x-2">
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D2" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D3" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D4" data-type="standard"></button>
<div className="w-4 md:w-6"></div>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D5" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D6" data-type="standard"></button>
<button className="seat seat-available w-6 h-6 md:w-8 md:h-8 rounded-lg" data-price="24.99" data-seat="D7" data-type="standard"></button>
<button className="seat seat-occupied w-6 h-6 md:w-8 md:h-8 rounded-lg cursor-not-allowed"></button>
</div>
</div>
</div>

<div className="flex flex-wrap justify-center gap-4 md:gap-8 mt-8 md:mt-12 pt-6 md:pt-8 border-t border-white/10">
<div className="flex items-center space-x-2 md:space-x-3">
<div className="seat-available w-5 h-5 md:w-6 md:h-6 rounded-lg"></div>
<span className="text-white/70 text-xs md:text-sm font-sans">Available</span>
</div>
<div className="flex items-center space-x-2 md:space-x-3">
<div className="seat-selected w-5 h-5 md:w-6 md:h-6 rounded-lg"></div>
<span className="text-white/70 text-xs md:text-sm font-sans">Selected</span>
</div>
<div className="flex items-center space-x-2 md:space-x-3">
<div className="seat-occupied w-5 h-5 md:w-6 md:h-6 rounded-lg"></div>
<span className="text-white/70 text-xs md:text-sm font-sans">Taken</span>
</div>
<div className="flex items-center space-x-2 md:space-x-3">
<div className="seat-premium w-5 h-5 md:w-6 md:h-6 rounded-lg"></div>
<span className="text-white/70 text-xs md:text-sm font-sans">Premium Recliner (+$15)</span>
</div>
</div>
</div>

<div className="animate-slide-up delay-1400 apple-glass rounded-[2rem] p-6 md:p-8 max-w-4xl mx-auto" style={{animationPlayState: `running`}}>
<div className="grid md:grid-cols-2 gap-8">

<div className="">
<div className="flex items-center justify-between mb-6">
<h3 className="text-2xl apple-text-gradient font-bricolage font-semibold">Booking Summary</h3>
<div className="apple-glass px-3 py-1 rounded-full text-sm text-green-400 border border-green-400/30" id="booking-status"><svg className="lucide lucide-check-circle w-4 h-4 inline mr-1" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>2 seats selected</div>
</div>
<div className="space-y-4 mb-8">
<div className="flex justify-between items-center pb-3 border-b border-white/10">
<span className="text-white/70 font-sans">Movie</span>
<span className="font-medium font-sans">Oppenheimer (IMAX 70mm)</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/10">
<span className="text-white/70 font-sans">Date & Time</span>
<span className="font-medium font-sans">Fri, Dec 15 • 7:30 PM</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/10">
<span className="text-white/70 font-sans">Seats</span>
<span className="font-medium font-sans" id="selected-seats">B2, B3</span>
</div>
<div className="flex justify-between items-center pb-3 border-b border-white/10">
<span className="text-white/70 font-sans">Theater</span>
<span className="font-medium font-sans">Dolby Cinema • Theater 2</span>
</div>
</div>
</div>

<div className="">
<div className="apple-glass p-6 rounded-2xl mb-6">
<h4 className="text-lg font-semibold mb-4 text-white font-sans">Price Breakdown</h4>
<div className="space-y-3">
<div className="space-y-2" id="seat-pricing">
<div className="flex justify-between">
<span className="text-white/70">Standard Seats (2x $34.99)</span>
<span>$69.98</span>
</div>
</div>
<div className="flex justify-between">
<span className="text-white/70 font-sans">Service Fee</span>
<span className="font-sans">$3.50</span>
</div>
<div className="flex justify-between">
<span className="text-white/70 font-sans">Taxes</span>
<span className="font-sans" id="tax-amount">$6.43</span>
</div>
<div className="pt-3 border-t border-white/20">
<div className="flex justify-between">
<span className="text-lg font-semibold font-sans">Total</span>
<span className="text-2xl text-blue-400 font-bricolage font-semibold" id="total-price">$79.91</span>
</div>
</div>
</div>
</div>

<div className="apple-glass p-4 rounded-xl mb-6">
<div className="flex gap-3">
<input className="flex-1 bg-white/5 border border-white/10 rounded-lg px-4 py-2 text-white placeholder-white/50 focus:outline-none focus:border-blue-500/50" placeholder="Promo code" type="text" />
<button className="apple-glass hover:bg-white/10 px-4 py-2 rounded-lg font-medium text-sm transition-all duration-300 font-sans">
                  Apply
                </button>
</div>
</div>
<div className="flex flex-col gap-3">
<button className="apple-button py-4 rounded-2xl font-medium text-lg flex items-center justify-center font-sans">
<svg className="lucide lucide-credit-card w-5 h-5 mr-3" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
                Proceed to Payment
              </button>
<button className="apple-glass hover:bg-white/10 transition-all duration-300 py-3 rounded-xl font-medium font-sans">
                Continue Browsing
              </button>
</div>

<div className="flex items-center justify-center space-x-4 mt-6 pt-4 border-t border-white/10">
<span className="text-white/60 text-sm font-sans">We accept:</span>
<div className="flex space-x-3">
<svg className="lucide lucide-credit-card w-5 h-5 text-white/40" data-lucide="credit-card" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
<svg className="lucide lucide-smartphone w-5 h-5 text-white/40" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<svg className="lucide lucide-wallet w-5 h-5 text-white/40" data-lucide="wallet" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 7V4a1 1 0 0 0-1-1H5a2 2 0 0 0 0 4h15a1 1 0 0 1 1 1v4h-3a2 2 0 0 0 0 4h3a1 1 0 0 0 1-1v-2a1 1 0 0 0-1-1"></path><path d="M3 5v14a2 2 0 0 0 2 2h15a1 1 0 0 0 1-1v-4"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-black/20 mt-24">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-16">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8">
<div>
<h4 className="font-semibold mb-4 apple-text-gradient font-sans">Movies</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors font-sans" href="#">Now Playing</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Coming Soon</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">IMAX</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Dolby Cinema</a></li>
</ul>
</div>
<div className="">
<h4 className="font-semibold mb-4 apple-text-gradient font-sans">Experience</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors font-sans" href="#">Premium Seating</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">4DX Motion</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Dine-In</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Private Screening</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 apple-text-gradient font-sans">Support</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors font-sans" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Contact Us</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Gift Cards</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Group Sales</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-4 apple-text-gradient font-sans">Company</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors font-sans" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Press</a></li>
<li><a className="hover:text-white transition-colors font-sans" href="#">Privacy</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center pt-12 mt-12 border-t border-white/10">
<div className="flex items-center mb-4 md:mb-0">
<div className="relative mr-3">
<svg className="lucide lucide-tv w-6 h-6 text-blue-500" data-lucide="tv" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewBox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2-5 5-5-5"></path><rect height="15" rx="2" width="20" x="2" y="7"></rect></svg>
<div className="absolute inset-0 bg-blue-500 blur-md opacity-20"></div>
</div>
<span className="font-semibold apple-text-gradient font-sans">CinemaVision Pro</span>
</div>
<div className="text-sm text-white/60 font-sans">
          © 2024 CinemaVision Pro. The future of entertainment.
        </div>
</div>
</div>
</footer>



    </>
  );
}
