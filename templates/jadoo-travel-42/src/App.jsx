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

        // Top Destinations Swiper
        var swiper = new Swiper(".destinationsSwiper", {
            slidesPerView: 1,
            spaceBetween: 30,
            grabCursor: true,
            pagination: {
                el: ".swiper-pagination",
                clickable: true,
            },
            breakpoints: {
                768: {
                    slidesPerView: 2,
                    spaceBetween: 30,
                },
                1024: {
                    slidesPerView: 3,
                    spaceBetween: 40,
                },
            },
        });

        // Custom Testimonials Logic
        const testimonials = [
            {
                name: "Mike Taylor",
                location: "Lahore, Pakistan",
                text: "On the Windows talking painted pasture yet its express parties use. Sure last upon he same as knew next. Of believed or diverted no.",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            },
            {
                name: "Chris Thomas",
                location: "CEO of Red Button",
                text: "It was a fantastic experience. The booking process was smooth, and the customer support was extremely helpful throughout my journey.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            },
            {
                name: "Sarah Jenkins",
                location: "Travel Blogger",
                text: "Jadoo made my trip to Europe unforgettable. Every detail was taken care of, allowing me to fully enjoy the culture and sights.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            }
        ];

        let currentTestiIndex = 0;
        
        const frontCard = document.getElementById('testi-front');
        const backCard = document.getElementById('testi-back');
        const dotsContainer = document.getElementById('testi-dots');

        function initTestimonials() {
            // Create dots
            dotsContainer.innerHTML = '';
            testimonials.forEach((_, index) => {
                const dot = document.createElement('div');
                // Active dot gets the Navy color (#181E4B), others get Gray (#E5E5E5)
                dot.className = `w-3 h-3 rounded-full cursor-pointer transition duration-300 ${index === currentTestiIndex ? 'bg-[#181E4B]' : 'bg-[#E5E5E5] hover:bg-gray-400'}`;
                dot.onclick = () => setTestimonial(index);
                dotsContainer.appendChild(dot);
            });
            updateTestimonialUI();
        }

        function updateTestimonialUI() {
            const current = testimonials[currentTestiIndex];
            const nextIndex = (currentTestiIndex + 1) % testimonials.length;
            const next = testimonials[nextIndex];

            // Update Content
            document.getElementById('testi-img-front').src = current.image;
            document.getElementById('testi-text-front').textContent = `"${current.text}"`;
            document.getElementById('testi-name-front').textContent = current.name;
            document.getElementById('testi-role-front').textContent = current.location;

            // Update Back Card Content (Upcoming Slide)
            document.getElementById('testi-text-back').textContent = `"${next.text}"`;
            document.getElementById('testi-name-back').textContent = next.name;
            document.getElementById('testi-role-back').textContent = next.location;

            // Update Dots Colors
            Array.from(dotsContainer.children).forEach((dot, index) => {
                dot.className = `w-3 h-3 rounded-full cursor-pointer transition duration-300 ${index === currentTestiIndex ? 'bg-[#181E4B]' : 'bg-[#E5E5E5] hover:bg-gray-400'}`;
            });
        }

        function setTestimonial(index) {
            currentTestiIndex = index;
            animateSwap();
        }

        function nextTestimonial() {
            currentTestiIndex = (currentTestiIndex + 1) % testimonials.length;
            animateSwap();
        }

        function prevTestimonial() {
            currentTestiIndex = (currentTestiIndex - 1 + testimonials.length) % testimonials.length;
            animateSwap();
        }

        function animateSwap() {
            // Visual Swap Animation Logic for the front card
            frontCard.classList.remove('opacity-100', 'translate-y-0', 'scale-100', 'z-10');
            frontCard.classList.add('opacity-0', '-translate-y-10', 'scale-95', 'z-0');
            
            setTimeout(() => {
                updateTestimonialUI();
                frontCard.classList.remove('opacity-0', '-translate-y-10', 'scale-95', 'z-0');
                frontCard.classList.add('opacity-100', 'translate-y-0', 'scale-100', 'z-10');
            }, 300);
        }

        initTestimonials();
    
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
      

<div className="absolute top-0 right-0 -z-10 w-[700px] h-[800px] bg-gradient-to-tr from-[#FFF1DA] to-[#F1A501] opacity-30 blur-3xl rounded-bl-[10rem]"></div>

<nav className="container mx-auto max-w-7xl px-6 py-6 flex items-center justify-between relative z-50">
<div className="flex items-center">
<a className="text-3xl font-bold text-navy tracking-tight font-sans" href="#">Jadoo</a>
</div>
<div className="hidden md:flex items-center space-x-12 text-base font-medium text-[#212832]">
<a className="hover:text-orange transition" href="#">Destinations</a>
<a className="hover:text-orange transition" href="#">Hotels</a>
<a className="hover:text-orange transition" href="#">Flights</a>
<a className="hover:text-orange transition" href="#">Bookings</a>
<a className="hover:text-orange transition" href="#">Login</a>
<a className="border border-black rounded-md px-5 py-2 hover:bg-black hover:text-white transition" href="#">Sign up</a>
<div className="flex items-center cursor-pointer">
<span>EN</span>
<i className="w-4 h-4 ml-1" data-lucide="chevron-down"></i>
</div>
</div>
<div className="md:hidden">
<i className="w-8 h-8 text-navy" data-lucide="menu"></i>
</div>
</nav>

<section className="container mx-auto max-w-7xl px-6 pt-6 pb-20 md:pt-12 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 lg:order-1">
<h3 className="text-orange font-bold text-lg uppercase tracking-wider mb-4">Best Destinations around the world</h3>
<h1 className="text-navy text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-bold tracking-tight mb-8">
                Travel, <span className="relative z-10 inline-block">enjoy
                    <svg className="absolute -bottom-2 -z-10 left-0 w-full" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="#DF6951" strokeWidth="3"></path>
</svg>
</span> 
                and live a new and full life
            </h1>
<p className="text-lg leading-relaxed mb-10 max-w-md">
                Built Wicket longer admire do barton vanity itself do in it. Preferred to sportsmen it engrossed listening. Park gate sell they west hard for the.
            </p>
<div className="flex items-center space-x-8">
<button className="bg-[#F1A501] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 transition font-medium text-lg">
                    Find out more
                </button>
<button className="flex items-center space-x-4 group text-gray-500 hover:text-gray-800 transition">
<span className="w-14 h-14 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-105 transition">
<i className="w-5 h-5 text-white fill-white ml-1" data-lucide="play"></i>
</span>
<span className="text-lg font-medium">Play Demo</span>
</button>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative z-10">
<img alt="Traveler" className="w-full h-auto object-contain rounded-t-full z-10 relative mask-image" src="https://images.unsplash.com/photo-1527631746610-bca00a040d60?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute top-20 right-10 w-full h-full bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 relative">
<div className="text-center mb-16">
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-2">Category</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">We Offer Best Services</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">
<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer relative overflow-hidden">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-orange-100 rounded-tl-[1rem] rounded-br-[1rem] -right-2 top-0"></div>
<i className="w-12 h-12 text-orange relative z-10" data-lucide="satellite-dish"></i>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Calculated Weather</h4>
<p className="text-base leading-relaxed">Built Wicket longer admire do barton vanity itself do in it.</p>
<div className="w-24 h-24 bg-[#DF6951] rounded-tl-[2rem] rounded-br-[1rem] absolute -bottom-8 -left-8 -z-10 opacity-0 group-hover:opacity-100 transition duration-300"></div>
</div>
<div className="group bg-white p-10 rounded-[2.5rem] shadow-[0_20px_60px_rgba(0,0,0,0.08)] transition text-center cursor-pointer relative z-10">
<div className="absolute -bottom-8 -left-8 -z-10">
<svg className="rounded-tl-[2rem] rounded-br-[1rem]" fill="#DF6951" height="80" viewbox="0 0 100 100" width="80">
<rect height="100" rx="30" width="100"></rect>
</svg>
</div>
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-full h-full bg-[#FFF1DA] rounded-full scale-75 blur-sm -z-10"></div>
<i className="w-14 h-14 text-orange relative z-10 transform -rotate-45" data-lucide="plane"></i>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Best Flights</h4>
<p className="text-base leading-relaxed">Engrossed listening. Park gate sell they west hard for the.</p>
</div>
<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-100 rounded-tr-[1rem] rounded-bl-[1rem] -right-2 -top-2"></div>
<i className="w-10 h-10 text-orange relative z-10" data-lucide="mic-2"></i>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Local Events</h4>
<p className="text-base leading-relaxed">Barton vanity itself do in it. Preferd to men it engrossed listening.</p>
</div>
<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-yellow-100 rounded-[1rem] -right-2 top-0"></div>
<i className="w-10 h-10 text-orange relative z-10" data-lucide="settings"></i>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Customization</h4>
<p className="text-base leading-relaxed">We deliver outsourced aviation services for military customers</p>
</div>
<div className="absolute right-0 top-10 opacity-20 -z-10">
<svg height="100" viewbox="0 0 100 100" width="100">
<pattern height="20" id="plus-pattern" patternunits="userSpaceOnUse" width="20" x="0" y="0">
<text fill="#DF6951" fontSize="20" x="5" y="15">+</text>
</pattern>
<rect fill="url(#plus-pattern)" height="100" width="100"></rect>
</svg>
</div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-16">
<div className="text-center mb-16">
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-2">Top Selling</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Top Destinations</h2>
</div>

<div className="swiper destinationsSwiper pb-12 px-4">
<div className="swiper-wrapper">

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 h-full">
<div className="h-80 overflow-hidden">
<img alt="Rome" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Rome, Italy</span>
<span>$5,42k</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<i className="w-4 h-4 mr-3 text-black fill-black" data-lucide="navigation"></i>
                                10 Days Trip
                            </div>
</div>
</div>
</div>

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 h-full">
<div className="h-80 overflow-hidden">
<img alt="London" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1513635269975-59663e0ac1ad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">London, UK</span>
<span>$4.2k</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<i className="w-4 h-4 mr-3 text-black fill-black" data-lucide="navigation"></i>
                                12 Days Trip
                            </div>
</div>
</div>
</div>

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 relative h-full">
<div className="h-80 overflow-hidden">
<img alt="Europe" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1504829857797-ddff29c27927?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Full Europe</span>
<span>$15k</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<i className="w-4 h-4 mr-3 text-black fill-black" data-lucide="navigation"></i>
                                28 Days Trip
                            </div>
</div>
<div className="absolute -right-12 bottom-20 -z-10">
<svg fill="none" height="300" stroke="#5E6282" stroke-opacity="0.2" viewbox="0 0 100 300" width="100">
<path d="M50,0 Q100,25 50,50 Q0,75 50,100 Q100,125 50,150 Q0,175 50,200" strokeWidth="2"></path>
</svg>
</div>
</div>
</div>

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 h-full">
<div className="h-80 overflow-hidden">
<img alt="Switzerland" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Switzerland</span>
<span>$6.5k</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<i className="w-4 h-4 mr-3 text-black fill-black" data-lucide="navigation"></i>
                                8 Days Trip
                            </div>
</div>
</div>
</div>
</div>


</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 flex flex-col lg:flex-row gap-20 items-center">

<div className="w-full lg:w-1/2">
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">Easy and Fast</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-10 leading-tight">Book Your Next Trip <br/> In 3 Easy Steps</h2>
<div className="flex flex-col space-y-8">
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#F0BB1F] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<i className="w-6 h-6 text-white" data-lucide="map-selection"></i>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Choose Destination</h4>
<p className="text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#DF6951] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<i className="w-6 h-6 text-white" data-lucide="credit-card"></i>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Make Payment</h4>
<p className="text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#006380] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<i className="w-6 h-6 text-white" data-lucide="car"></i>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Reach Airport on Selected Date</h4>
<p className="text-base text-gray-500 leading-relaxed">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Urna, tortor tempus.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
<div className="absolute w-[80%] h-[80%] bg-blue-400/20 blur-[80px] rounded-full top-0 right-0 -z-10"></div>
<div className="bg-white p-6 rounded-[1.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] w-[370px] relative z-10">
<img alt="Greece" className="w-full h-48 object-cover rounded-3xl mb-6" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<h4 className="text-xl font-bold text-navy mb-2 tracking-tight">Trip To Greece</h4>
<div className="flex text-base text-gray-500 mb-6">
<span className="pr-3 border-r border-gray-300">14-29 June</span>
<span className="pl-3">by Robbin joseph</span>
</div>
<div className="flex items-center space-x-4 mb-8">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-gray-500" data-lucide="leaf"></i>
</div>
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-gray-500" data-lucide="map"></i>
</div>
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<i className="w-4 h-4 text-gray-500" data-lucide="send"></i>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center text-gray-500 text-sm">
<i className="w-5 h-5 mr-3" data-lucide="building-2"></i>
<span className="text-base font-medium">24 people going</span>
</div>
<i className="w-5 h-5 text-[#4152CA]" data-lucide="heart"></i>
</div>
<div className="absolute -right-12 bottom-12 bg-white p-4 rounded-2xl shadow-xl flex items-start gap-4 w-[280px]">
<img alt="User" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1">
<span className="text-sm text-gray-400 font-medium">Ongoing</span>
<h5 className="text-navy font-bold text-lg mb-2">Trip to rome</h5>
<div className="w-full bg-gray-100 h-1.5 rounded-full mb-1">
<div className="bg-[#8A79DF] w-[40%] h-1.5 rounded-full"></div>
</div>
<div className="text-xs font-bold text-navy"><span className="text-gray-400 font-medium">40%</span> completed</div>
</div>
</div>
</div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 flex flex-col lg:flex-row gap-12">
<div className="w-full lg:w-1/2 pr-0 lg:pr-20">
<h3 className="text-lg font-medium text-gray-500 uppercase tracking-widest mb-4">Testimonials</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-16 leading-tight">What People Say <br/> About Us.</h2>

<div className="flex space-x-6 mt-8" id="testi-dots">

</div>
</div>
<div className="w-full lg:w-1/2 relative min-h-[400px] flex items-center justify-center lg:justify-start pl-0 lg:pl-10">

<div className="testi-card absolute top-12 left-0 lg:left-8 w-full md:w-[90%] bg-white border border-gray-100 p-8 rounded-[1.5rem] shadow-sm z-0 opacity-100 transform scale-90 -translate-y-4" id="testi-back">
<div className="absolute -top-8 -left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm opacity-0"></div>
<p className="text-base leading-relaxed text-gray-500 mb-6 line-clamp-3" id="testi-text-back">"Next testimonial text preview."</p>
<div className="font-bold text-lg text-navy" id="testi-name-back">Next Person</div>
<div className="text-sm text-gray-500" id="testi-role-back">Next Role</div>
</div>

<div className="testi-card absolute top-0 left-0 w-full md:w-[90%] bg-white p-8 rounded-[1.5rem] shadow-[0_30px_80px_rgba(0,0,0,0.08)] z-10 transform scale-100 translate-y-0" id="testi-front">
<div className="absolute -top-8 -left-8 w-16 h-16 rounded-full overflow-hidden border-4 border-white shadow-sm">
<img className="w-full h-full object-cover" id="testi-img-front" src=""/>
</div>
<p className="text-base leading-relaxed text-gray-500 mb-8 mt-4" id="testi-text-front">""</p>
<h5 className="font-bold text-lg text-navy mb-1" id="testi-name-front"></h5>
<p className="text-sm text-gray-500" id="testi-role-front"></p>
</div>

<div className="hidden lg:flex flex-col space-y-4 absolute -right-6 top-1/2 -translate-y-1/2 z-20">
<button className="text-gray-400 hover:text-navy transition" onclick="prevTestimonial()"><i className="w-6 h-6" data-lucide="chevron-up"></i></button>
<button className="text-gray-400 hover:text-navy transition" onclick="nextTestimonial()"><i className="w-6 h-6" data-lucide="chevron-down"></i></button>
</div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 grayscale opacity-60 hover:opacity-100 transition duration-500">
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<img alt="Axon" className="h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4734259a-bad7-422f-981e-ce01e79184f2_1600w.jpg"/>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<img alt="Jetstar" className="h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c543a9e1-f226-4ced-80b0-feb8445a75b9_1600w.jpg"/>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<img alt="Expedia" className="h-8 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5bab247f-35d9-400d-a82b-fd87cfe913d2_1600w.webp"/>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<img alt="Qantas" className="h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/30104e3c-5eea-4b93-93e9-5313698a7156_1600w.webp"/>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<img alt="Alitalia" className="h-5 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
</div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 relative">
<div className="bg-[#DFD7F9]/20 rounded-tl-[6rem] rounded-[2rem] p-10 md:p-20 relative overflow-visible">

<div className="absolute -bottom-20 -left-20 w-72 h-72 border-2 border-indigo-100 rounded-full opacity-40 overflow-hidden"></div>
<div className="absolute top-0 right-0 opacity-20 transform rotate-45 translate-x-10 -translate-y-10 overflow-hidden">
<svg fill="none" height="200" viewbox="0 0 100 100" width="200">
<circle cx="50" cy="50" r="40" stroke="#7e22ce" stroke-dasharray="2 2" strokeWidth="0.5"></circle>
</svg>
</div>

<div className="absolute -top-5 -right-5 w-16 h-16 bg-gradient-to-tr from-[#747DEF] to-[#5E3BE1] rounded-full flex items-center justify-center shadow-lg z-20">
<i className="text-white w-6 h-6 transform -rotate-12 translate-x-[-2px] translate-y-[2px]" data-lucide="send"></i>
</div>
<div className="relative z-10 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug mb-12 tracking-tight">
                    Subscribe to get information, latest news and other interesting offers about Jadoo
                </h2>
<div className="flex flex-col md:flex-row items-center gap-6 justify-center">
<div className="relative w-full md:w-96">
<i className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 w-5 h-5" data-lucide="mail"></i>
<input className="w-full pl-14 pr-6 py-5 rounded-2xl border-none focus:ring-2 focus:ring-orange-300 outline-none shadow-sm text-base text-gray-600" placeholder="Your email" type="email"/>
</div>
<button className="w-full md:w-auto px-10 py-5 bg-[#FF7D68] text-white font-medium rounded-xl shadow-lg hover:bg-orange-600 transition duration-300 text-base">
                        Subscribe
                    </button>
</div>
</div>

<div className="absolute -bottom-10 -right-20 opacity-20 -z-10 w-48 h-48">
<svg fill="none" height="100%" viewbox="0 0 100 100" width="100%">

<g fill="#DF6951" opacity="0.6">
<path d="M10,10 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M30,10 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M50,10 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M10,30 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M30,30 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M50,30 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M70,30 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M30,50 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
<path d="M50,50 h5 v-2 h2 v2 h2 v2 h-2 v2 h-2 v-2 h-5 Z" transform="scale(0.8)"></path>
</g>
</svg>
</div>
</div>
</section>

<footer className="container mx-auto max-w-7xl px-6 pt-10 pb-20">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-20">
<div className="col-span-1 lg:col-span-2 pr-0 lg:pr-10">
<a className="text-4xl font-bold text-navy tracking-tight mb-6 block font-sans" href="#">Jadoo.</a>
<p className="text-base text-gray-500 max-w-xs">Book your trip in minute, get full Control for much longer.</p>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">Company</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">About</a></li>
<li><a className="hover:text-orange transition" href="#">Careers</a></li>
<li><a className="hover:text-orange transition" href="#">Mobile</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">Contact</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">Help/FAQ</a></li>
<li><a className="hover:text-orange transition" href="#">Press</a></li>
<li><a className="hover:text-orange transition" href="#">Affilates</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">More</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">Airlinefees</a></li>
<li><a className="hover:text-orange transition" href="#">Airline</a></li>
<li><a className="hover:text-orange transition" href="#">Low fare tips</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-10">
<div className="text-gray-500 text-sm mb-6 md:mb-0">
                All rights reserved@jadoo.co
            </div>
<div className="flex flex-col items-center md:items-end">
<div className="flex space-x-4 mb-6">
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 hover:text-white transition" href="#">
<i className="w-4 h-4 fill-current" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-white bg-gradient-to-tr from-[#A63EC5] to-[#E35F53] hover:opacity-90 transition" href="#">
<i className="w-4 h-4" data-lucide="instagram"></i>
</a>
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white transition" href="#">
<i className="w-4 h-4 fill-current" data-lucide="twitter"></i>
</a>
</div>
<div className="text-lg text-gray-500 font-medium mb-3">Discover our app</div>
<div className="flex space-x-2">
<button className="bg-black text-white px-4 py-2 rounded-full flex items-center text-xs hover:bg-gray-800 transition">
<div className="mr-2">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M3,20.5V3.5C3,2.91 3.34,2.39 3.84,2.15L13.69,12L3.84,21.85C3.34,21.6 3,21.09 3,20.5M16.81,15.12L6.05,21.34L14.54,12.85L16.81,15.12M20.16,10.81C20.5,11.08 20.75,11.5 20.75,12C20.75,12.5 20.53,12.92 20.16,13.19L17.89,14.5L15.39,12L17.89,9.5L20.16,10.81M6.05,2.66L16.81,8.88L14.54,11.15L6.05,2.66Z"></path></svg>
</div>
<div className="text-left">
<div className="uppercase text-[0.5rem] font-bold">Get it on</div>
<div className="font-bold text-sm">Google Play</div>
</div>
</button>
<button className="bg-black text-white px-4 py-2 rounded-full flex items-center text-xs hover:bg-gray-800 transition">
<div className="mr-2">
<svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M18.71,19.5C17.88,20.74 17,21.95 15.66,21.97C14.32,22 13.89,21.18 12.37,21.18C10.84,21.18 10.37,21.95 9.1,22C7.79,22.05 6.8,20.68 5.96,19.47C4.25,17 2.94,12.45 4.7,9.39C5.57,7.87 7.13,6.91 8.82,6.88C10.1,6.86 11.32,7.75 12.11,7.75C12.89,7.75 14.37,6.68 15.92,6.84C16.57,6.87 18.39,7.1 19.56,8.82C19.47,8.88 17.39,10.1 17.41,12.63C17.44,15.65 20.06,16.66 20.09,16.67C20.06,16.74 19.67,18.11 18.71,19.5M13,3.5C13.73,2.67 14.94,2.04 15.94,2C16.07,3.17 15.6,4.35 14.9,5.19C14.21,6.04 13.04,6.7 11.95,6.61C11.8,5.37 12.36,4.26 13,3.5Z"></path></svg>
</div>
<div className="text-left">
<div className="text-[0.5rem]">Available on the</div>
<div className="font-bold text-sm">Apple Store</div>
</div>
</button>
</div>
</div>
</div>
</footer>




    </>
  );
}
