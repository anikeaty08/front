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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const slides = document.querySelectorAll('.carousel-slide');
            const dots = document.querySelectorAll('.carousel-dot');
            let currentSlide = 0;
            let slideInterval;

            function showSlide(index) {
                slides.forEach((slide, i) => {
                    if (i === index) {
                        slide.classList.remove('opacity-0', 'z-0');
                        slide.classList.add('opacity-100', 'z-10');
                        dots[i].classList.remove('bg-white/40');
                        dots[i].classList.add('bg-[#b7d542]');
                    } else {
                        slide.classList.remove('opacity-100', 'z-10');
                        slide.classList.add('opacity-0', 'z-0');
                        dots[i].classList.remove('bg-[#b7d542]');
                        dots[i].classList.add('bg-white/40');
                    }
                });
            }

            function nextSlide() {
                currentSlide = (currentSlide + 1) % slides.length;
                showSlide(currentSlide);
            }

            function startSlideShow() {
                slideInterval = setInterval(nextSlide, 6000);
            }

            function resetInterval() {
                clearInterval(slideInterval);
                startSlideShow();
            }

            dots.forEach((dot, index) => {
                dot.addEventListener('click', () => {
                    currentSlide = index;
                    showSlide(currentSlide);
                    resetInterval();
                });
            });

            // Init
            startSlideShow();
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
      

<header className="bg-[#004c54] text-white h-[80px] flex items-center justify-between px-6 lg:px-10 sticky top-0 z-50 shadow-md">

<a className="bg-[#079da1] text-white px-4 py-2 text-sm font-semibold leading-tight flex items-center justify-center text-center rounded-t-2xl rounded-bl-2xl rounded-br-md shadow-sm hover:bg-[#196e70] transition-colors font-['Roboto']" href="#">
            I Live Here<br/>I Give Here
        </a>

<nav className="hidden lg:flex items-center gap-8">
<a className="text-base text-white font-medium hover:text-[#b7d542] transition-colors font-['Roboto']" href="#how-it-works">How it Works</a>
<a className="text-base text-white font-medium hover:text-[#b7d542] transition-colors font-['Roboto']" href="#find-causes">Find Causes</a>
<a className="text-base text-white font-medium hover:text-[#b7d542] transition-colors font-['Roboto']" href="#impact">Our Impact</a>
<a className="text-base text-white font-medium hover:text-[#b7d542] transition-colors font-['Roboto']" href="#nonprofits">Nonprofits</a>
<a className="text-base text-white font-medium hover:text-[#b7d542] transition-colors font-['Roboto']" href="#login">Log In</a>
<a className="text-base bg-[#b7d542] text-[#004c54] px-7 py-2.5 font-semibold hover:bg-white hover:text-[#004c54] transition-colors rounded-full shadow-sm font-['Roboto']" href="#donate">Donate Now</a>
</nav>

<button className="text-white hover:text-[#b7d542] lg:hidden flex items-center transition-colors">
<iconify-icon height="32" icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="32"></iconify-icon>
</button>
</header>
<main className="flex-grow flex flex-col gap-16 py-8">

<section className="w-full flex justify-center px-4 md:px-8 py-4 h-[500px] md:h-[650px] relative">
<div className="w-full max-w-[1400px] bg-[#004c54] rounded-[2.5rem] flex flex-col items-center justify-center relative overflow-hidden group shadow-lg">

<nav className="absolute top-6 left-0 right-0 z-30 flex justify-center gap-3 md:gap-6 px-4 flex-wrap">
<a className="bg-black/30 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors font-['Roboto'] shadow-sm border border-white/10" href="#">Find Nonprofits</a>
<a className="bg-black/30 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors font-['Roboto'] shadow-sm border border-white/10" href="#">Match Funds</a>
<a className="bg-black/30 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors font-['Roboto'] shadow-sm border border-white/10" href="#">Leaderboards</a>
<a className="bg-black/30 backdrop-blur-sm text-white px-5 py-2 rounded-full text-sm font-semibold hover:bg-white/20 transition-colors font-['Roboto'] shadow-sm border border-white/10 hidden sm:block" href="#">Start a Fundraiser</a>
</nav>

<div className="relative w-full h-full">

<div className="carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-100 z-10">
<img alt="Happy supported people gathering" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1582213782179-e0d53f98f2ca?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 mt-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-10 max-w-4xl leading-tight font-['Roboto']">Amplify Generosity Across Central Texas</h1>
<button className="bg-[#b7d542] text-[#004c54] px-12 py-4 text-lg font-semibold hover:bg-[#a6c338] transition-colors rounded-full shadow-md font-['Roboto']">Donate Now</button>
</div>
</div>

<div className="carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-0 z-0 bg-[#079da1]">
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 max-w-4xl mx-auto mt-8">
<iconify-icon className="text-6xl text-[#b7d542] mb-6" height="60" icon="solar:quote-left-linear" strokeWidth="1.5" width="60"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight font-['Roboto']">"The support from this event helped our family get back on our feet when we needed it most."</h2>
<p className="text-xl text-white/90 font-medium">- Community Member</p>
</div>
</div>

<div className="carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-0 z-0">
<img alt="Happy community smiling" className="absolute inset-0 w-full h-full object-cover opacity-40 mix-blend-overlay" src="https://images.unsplash.com/photo-1593113580287-c1a7988350be?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 mt-8">
<h1 className="text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-10 max-w-4xl leading-tight font-['Roboto']">Join 30,000+ Donors Making a Difference</h1>
<button className="bg-[#b7d542] text-[#004c54] px-12 py-4 text-lg font-semibold hover:bg-[#a6c338] transition-colors rounded-full shadow-md font-['Roboto']">Get Involved</button>
</div>
</div>

<div className="carousel-slide absolute inset-0 w-full h-full transition-opacity duration-700 ease-in-out opacity-0 z-0 bg-[#079da1]">
<div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6 z-20 max-w-4xl mx-auto mt-8">
<iconify-icon className="text-6xl text-[#b7d542] mb-6" height="60" icon="solar:quote-left-linear" strokeWidth="1.5" width="60"></iconify-icon>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6 leading-tight font-['Roboto']">"This initiative single-handedly allowed us to double our community outreach programs this year!"</h2>
<p className="text-xl text-white/90 font-medium">- Local Nonprofit Director</p>
</div>
</div>
</div>

<div className="absolute bottom-10 flex gap-4 z-30">
<button aria-label="Slide 1" className="carousel-dot w-3.5 h-3.5 rounded-full bg-[#b7d542] shadow-sm transition-colors"></button>
<button aria-label="Slide 2" className="carousel-dot w-3.5 h-3.5 rounded-full bg-white/40 hover:bg-white/80 shadow-sm transition-colors"></button>
<button aria-label="Slide 3" className="carousel-dot w-3.5 h-3.5 rounded-full bg-white/40 hover:bg-white/80 shadow-sm transition-colors"></button>
<button aria-label="Slide 4" className="carousel-dot w-3.5 h-3.5 rounded-full bg-white/40 hover:bg-white/80 shadow-sm transition-colors"></button>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto w-full px-6 md:px-10 flex flex-col items-center pt-12">
<h2 className="text-[#004c54] text-4xl md:text-5xl font-semibold tracking-tight mb-20 text-center w-full font-['Roboto']">How to Participate</h2>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-x-12 gap-y-16 w-full">

<div className="flex gap-6 items-start">
<div className="w-24 h-24 flex-shrink-0 border-[3px] border-[#079da1] rounded-3xl flex items-center justify-center bg-[#e4e2dc]/30 shadow-sm transform rotate-3">
<iconify-icon className="text-[#079da1] -rotate-3" height="40" icon="solar:magnifer-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex flex-col items-start h-full pt-1">
<span className="bg-[#b7d542] text-[#004c54] text-base px-4 py-1.5 mb-4 font-semibold rounded-full shadow-sm font-['Roboto_Condensed'] tracking-wide">1. Discover</span>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6">Browse through over 700 verified local organizations.</p>
<button className="mt-auto bg-[#079da1] text-white text-sm px-6 py-2.5 font-medium rounded-full hover:bg-[#004c54] transition-colors shadow-sm font-['Roboto']">Learn More</button>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-24 h-24 flex-shrink-0 border-[3px] border-[#079da1] rounded-3xl flex items-center justify-center bg-[#e4e2dc]/30 shadow-sm transform -rotate-3">
<iconify-icon className="text-[#079da1] rotate-3" height="40" icon="solar:heart-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex flex-col items-start h-full pt-1">
<span className="bg-[#b7d542] text-[#004c54] text-base px-4 py-1.5 mb-4 font-semibold rounded-full shadow-sm font-['Roboto_Condensed'] tracking-wide">2. Choose</span>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6">Select the causes that resonate most with your values.</p>
<button className="mt-auto bg-[#079da1] text-white text-sm px-6 py-2.5 font-medium rounded-full hover:bg-[#004c54] transition-colors shadow-sm font-['Roboto']">Learn More</button>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-24 h-24 flex-shrink-0 border-[3px] border-[#079da1] rounded-3xl flex items-center justify-center bg-[#e4e2dc]/30 shadow-sm transform rotate-3">
<iconify-icon className="text-[#079da1] -rotate-3" height="40" icon="solar:wallet-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex flex-col items-start h-full pt-1">
<span className="bg-[#b7d542] text-[#004c54] text-base px-4 py-1.5 mb-4 font-semibold rounded-full shadow-sm font-['Roboto_Condensed'] tracking-wide">3. Donate</span>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6">Easily contribute through our secure platform checkout.</p>
<button className="mt-auto bg-[#079da1] text-white text-sm px-6 py-2.5 font-medium rounded-full hover:bg-[#004c54] transition-colors shadow-sm font-['Roboto']">Learn More</button>
</div>
</div>

<div className="flex gap-6 items-start">
<div className="w-24 h-24 flex-shrink-0 border-[3px] border-[#079da1] rounded-3xl flex items-center justify-center bg-[#e4e2dc]/30 shadow-sm transform -rotate-3">
<iconify-icon className="text-[#079da1] rotate-3" height="40" icon="solar:graph-up-linear" strokeWidth="1.5" width="40"></iconify-icon>
</div>
<div className="flex flex-col items-start h-full pt-1">
<span className="bg-[#b7d542] text-[#004c54] text-base px-4 py-1.5 mb-4 font-semibold rounded-full shadow-sm font-['Roboto_Condensed'] tracking-wide">4. Amplify</span>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6">Share your impact and encourage friends to join the movement.</p>
<button className="mt-auto bg-[#079da1] text-white text-sm px-6 py-2.5 font-medium rounded-full hover:bg-[#004c54] transition-colors shadow-sm font-['Roboto']">Learn More</button>
</div>
</div>
</div>
</section>

<section className="max-w-[1400px] mx-auto w-full px-6 md:px-10 mb-24 pt-24">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 lg:gap-14 items-start">

<div className="lg:col-span-8 flex flex-col items-center lg:items-start w-full">
<div className="w-full flex justify-center lg:justify-start mb-12">
<h2 className="text-[#004c54] text-4xl md:text-5xl font-semibold tracking-tight font-['Roboto']">Real Impact, Right Here</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-8 w-full">

<div className="flex flex-col items-center sm:items-start w-full group">
<div className="relative w-[240px] sm:w-full aspect-[2/3] border-[3px] border-[#e4e2dc] rounded-[2rem] mb-6 bg-white overflow-visible shadow-sm">
<img alt="Food security" className="w-full h-full object-cover rounded-[1.8rem]" src="https://images.unsplash.com/photo-1488521787991-ed7bbaae773c?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#079da1] text-white rounded-full flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
<iconify-icon height="24" icon="mdi:instagram" width="24"></iconify-icon>
</div>
</div>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6 px-2 sm:px-1 flex-grow">"The donations we received allowed us to serve 5,000 more meals to families."</p>
<button className="border-[2px] border-[#079da1] text-[#079da1] text-sm px-6 py-2.5 font-semibold rounded-full hover:bg-[#079da1] hover:text-white transition-colors mx-2 sm:mx-1 shadow-sm font-['Roboto']">Read Story</button>
</div>

<div className="flex flex-col items-center sm:items-start w-full group">
<div className="relative w-[240px] sm:w-full aspect-[2/3] border-[3px] border-[#e4e2dc] rounded-[2rem] mb-6 bg-white overflow-visible shadow-sm">
<img alt="Education" className="w-full h-full object-cover rounded-[1.8rem]" src="https://images.unsplash.com/photo-1542838132-92c53300491e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#079da1] text-white rounded-full flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
<iconify-icon height="24" icon="mdi:facebook" width="24"></iconify-icon>
</div>
</div>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6 px-2 sm:px-1 flex-grow">"Funding secured essential after-school programming for an entire semester."</p>
<button className="border-[2px] border-[#079da1] text-[#079da1] text-sm px-6 py-2.5 font-semibold rounded-full hover:bg-[#079da1] hover:text-white transition-colors mx-2 sm:mx-1 shadow-sm font-['Roboto']">Read Story</button>
</div>

<div className="flex flex-col items-center sm:items-start w-full group">
<div className="relative w-[240px] sm:w-full aspect-[2/3] border-[3px] border-[#e4e2dc] rounded-[2rem] mb-6 bg-white overflow-visible shadow-sm">
<img alt="Animal welfare" className="w-full h-full object-cover rounded-[1.8rem]" src="https://images.unsplash.com/photo-1601758124510-52d02ddb7cbd?q=80&amp;w=2070&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#079da1] text-white rounded-full flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
<iconify-icon height="24" icon="mdi:twitter" width="24"></iconify-icon>
</div>
</div>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6 px-2 sm:px-1 flex-grow">"We upgraded our medical facilities and saved 30% more rescues this year."</p>
<button className="border-[2px] border-[#079da1] text-[#079da1] text-sm px-6 py-2.5 font-semibold rounded-full hover:bg-[#079da1] hover:text-white transition-colors mx-2 sm:mx-1 shadow-sm font-['Roboto']">Read Story</button>
</div>

<div className="flex flex-col items-center sm:items-start w-full group">
<div className="relative w-[240px] sm:w-full aspect-[2/3] border-[3px] border-[#e4e2dc] rounded-[2rem] mb-6 bg-white overflow-visible shadow-sm">
<img alt="Job training" className="w-full h-full object-cover rounded-[1.8rem]" src="https://images.unsplash.com/photo-1573497019940-1c28c88b4f3e?q=80&amp;w=1974&amp;auto=format&amp;fit=crop"/>
<div className="absolute -bottom-4 -left-4 w-12 h-12 bg-[#079da1] text-white rounded-full flex items-center justify-center shadow-md z-10 transition-transform group-hover:scale-110">
<iconify-icon height="24" icon="ic:baseline-tiktok" width="24"></iconify-icon>
</div>
</div>
<p className="text-lg text-[#004c54] font-normal leading-relaxed mb-6 px-2 sm:px-1 flex-grow">"Because of the generosity, I accessed job training leading to my new career."</p>
<button className="border-[2px] border-[#079da1] text-[#079da1] text-sm px-6 py-2.5 font-semibold rounded-full hover:bg-[#079da1] hover:text-white transition-colors mx-2 sm:mx-1 shadow-sm font-['Roboto']">Read Story</button>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col items-center lg:items-start w-full mt-8 lg:mt-0 bg-white p-8 lg:p-10 rounded-[2rem] border-[3px] border-[#e4e2dc] shadow-sm">
<h2 className="text-[#004c54] text-3xl md:text-4xl font-semibold tracking-tight mb-8 block w-full text-center lg:text-left font-['Roboto']">Stay Connected</h2>
<form className="w-full flex flex-col gap-6">

<p className="text-lg text-[#004c54]/80 font-normal leading-relaxed">
                            Sign up for updates, nonprofit spotlights, and reminders for Amplify Austin Day. Join the local movement today.
                        </p>

<input className="w-full border-2 border-[#e4e2dc] rounded-2xl px-5 py-4 text-lg font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#079da1] focus:ring-4 focus:ring-[#079da1]/10 transition-all bg-[#faf9f7] shadow-sm" placeholder="First Name" type="text"/>

<p className="text-lg text-[#004c54]/80 font-normal leading-relaxed">
                            We value your privacy and will never share your personal information.
                        </p>

<input className="w-full border-2 border-[#e4e2dc] rounded-2xl px-5 py-4 text-lg font-normal placeholder:text-gray-400 focus:outline-none focus:border-[#079da1] focus:ring-4 focus:ring-[#079da1]/10 transition-all bg-[#faf9f7] shadow-sm" placeholder="Email Address" type="email"/>

<p className="text-lg text-[#004c54]/60 font-normal leading-relaxed pb-4 italic">
                            By subscribing, you agree to our privacy policy and consent to receive organizational updates and newsletters.
                        </p>

<div className="flex flex-col sm:flex-row gap-4 w-full">
<button className="flex-1 border-[2px] border-[#004c54] rounded-full py-4 text-lg font-semibold text-[#004c54] hover:bg-[#e4e2dc] transition-colors bg-transparent shadow-sm font-['Roboto']" type="button">Cancel</button>
<button className="flex-1 border-[2px] border-[#079da1] bg-[#079da1] rounded-full py-4 text-lg font-semibold text-white hover:bg-[#004c54] hover:border-[#004c54] transition-colors shadow-sm font-['Roboto']" type="submit">Submit</button>
</div>
</form>
</div>
</div>
</section>
</main>


    </>
  );
}
