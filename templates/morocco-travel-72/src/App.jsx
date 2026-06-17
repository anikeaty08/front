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

        // Custom Testimonials Logic - Updated for Sahara Morocco Context
        const testimonials = [
            {
                name: "David Smith",
                location: "London, UK",
                text: "The sunset camel ride in Merzouga was the highlight of our trip. Our guide Lahcen was incredibly knowledgeable and welcoming.",
                image: "https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            },
            {
                name: "Maria Garcia",
                location: "Madrid, Spain",
                text: "We booked the 3-day tour from Fes to Marrakech. The desert camp was luxury beyond expectation. Sleeping under stars was magical.",
                image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
            },
            {
                name: "James Wilson",
                location: "Sydney, Australia",
                text: "Authentic experience! The 4x4 drive through the dunes was thrilling, and the Berber hospitality was heartwarming. Highly recommended.",
                image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&auto=format&fit=crop&w=200&q=80"
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
<div className="flex items-center gap-2">

<div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center text-white font-bold font-serif">S</div>
<a className="text-2xl font-bold text-navy tracking-tight font-sans" href="#">Sahara Morocco</a>
</div>
<div className="hidden md:flex items-center space-x-10 text-sm font-medium text-[#212832]">
<a className="hover:text-orange transition" href="#">Home</a>
<a className="hover:text-orange transition" href="#">Desert Tours</a>
<a className="hover:text-orange transition" href="#">Imperial Cities</a>
<a className="hover:text-orange transition" href="#">Excursions</a>
<a className="hover:text-orange transition" href="#">Gallery</a>
<a className="border border-navy rounded-md px-5 py-2 hover:bg-navy hover:text-white transition" href="#">Contact Us</a>
<div className="flex items-center cursor-pointer">
<span>EN</span>
<iconify-icon className="text-lg ml-1" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<div className="md:hidden">
<iconify-icon className="text-3xl text-navy" icon="solar:hamburger-menu-linear"></iconify-icon>
</div>
</nav>

<section className="container mx-auto max-w-7xl px-6 pt-6 pb-20 md:pt-12 md:pb-32 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center relative z-10">
<div className="order-2 lg:order-1">
<h3 className="text-orange font-bold text-sm md:text-base uppercase tracking-wider mb-4">Welcome to Morocco</h3>
<h1 className="text-navy text-5xl md:text-7xl lg:text-[5rem] leading-[1.1] font-bold tracking-tight mb-6">
                Explore the <span className="relative z-10 inline-block">Magic
                    <svg className="absolute -bottom-2 -z-10 left-0 w-full" preserveaspectratio="none" viewbox="0 0 100 10">
<path d="M0 5 Q 50 10 100 5" fill="none" stroke="#DF6951" strokeWidth="3"></path>
</svg>
</span> 
                of the Golden Sahara
            </h1>
<p className="text-lg leading-relaxed mb-10 max-w-md">
                Experience authentic Morocco with local experts. From the bustling souks of Marrakech to the silent, starry nights of the Merzouga dunes.
            </p>
<div className="flex items-center space-x-8">
<button className="bg-[#F1A501] text-white px-8 py-4 rounded-xl shadow-lg hover:shadow-xl hover:bg-yellow-500 transition font-medium text-lg">
                    Plan Your Trip
                </button>
<button className="flex items-center space-x-4 group text-gray-500 hover:text-gray-800 transition">
<span className="w-14 h-14 bg-[#DF6951] rounded-full flex items-center justify-center shadow-lg shadow-orange-200 group-hover:scale-105 transition">
<iconify-icon className="text-white text-xl ml-1" icon="solar:play-bold"></iconify-icon>
</span>
<span className="text-lg font-medium">Watch Video</span>
</button>
</div>
</div>
<div className="order-1 lg:order-2 relative">
<div className="relative z-10">

<img alt="Sahara Desert Camels" className="w-full h-auto object-contain rounded-t-full z-10 relative mask-image" src="https://images.unsplash.com/photo-1539020140153-e479b8c22e70?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="absolute top-20 right-10 w-full h-full bg-orange-200/30 rounded-full blur-3xl -z-10"></div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 relative">
<div className="text-center mb-16">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Our Services</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">We Offer Best Experiences</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-12 relative z-10">

<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer relative overflow-hidden">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-orange-100 rounded-tl-[1rem] rounded-br-[1rem] -right-2 top-0"></div>
<iconify-icon className="text-5xl text-orange relative z-10" icon="solar:sun-2-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Desert Tours</h4>
<p className="text-base leading-relaxed">4x4 adventures through the Erg Chebbi dunes and off-road exploration.</p>
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
<iconify-icon className="text-5xl text-orange relative z-10" icon="solar:stars-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Luxury Camps</h4>
<p className="text-base leading-relaxed">Sleep under a blanket of stars in our luxury Berber tent camps.</p>
</div>

<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-blue-100 rounded-tr-[1rem] rounded-bl-[1rem] -right-2 -top-2"></div>

<iconify-icon className="text-5xl text-orange relative z-10" icon="solar:hiking-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Camel Trekking</h4>
<p className="text-base leading-relaxed">Traditional camel rides at sunset and sunrise across the golden sands.</p>
</div>

<div className="group bg-white p-10 rounded-[2.5rem] hover:shadow-[0_15px_50px_rgba(0,0,0,0.05)] transition text-center cursor-pointer">
<div className="w-20 h-20 mx-auto mb-8 relative flex items-center justify-center">
<div className="absolute w-12 h-12 bg-yellow-100 rounded-[1rem] -right-2 top-0"></div>
<iconify-icon className="text-5xl text-orange relative z-10" icon="solar:map-point-wave-linear"></iconify-icon>
</div>
<h4 className="text-xl font-medium text-navy mb-4">Imperial Cities</h4>
<p className="text-base leading-relaxed">Guided historical tours of Fes, Marrakech, Rabat, and Meknes.</p>
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
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-2">Top Selling</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight">Top Destinations</h2>
</div>

<div className="swiper destinationsSwiper pb-12 px-4">
<div className="swiper-wrapper">

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 h-full">
<div className="h-80 overflow-hidden">
<img alt="Merzouga Dunes" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1489749798305-4fea3ae63d43?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Merzouga Desert</span>
<span className="text-orange font-bold">€250</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<iconify-icon className="mr-3 text-black text-lg" icon="solar:cursor-linear"></iconify-icon>
                                3 Days Trip
                            </div>
</div>
</div>
</div>

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 h-full">
<div className="h-80 overflow-hidden">
<img alt="Marrakech" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1597212618440-806262de4f6b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Marrakech City</span>
<span className="text-orange font-bold">€180</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<iconify-icon className="mr-3 text-black text-lg" icon="solar:cursor-linear"></iconify-icon>
                                4 Days Trip
                            </div>
</div>
</div>
</div>

<div className="swiper-slide h-auto">
<div className="bg-white rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.07)] overflow-hidden group hover:shadow-2xl transition duration-300 relative h-full">
<div className="h-80 overflow-hidden">
<img alt="Fes Medina" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1556608549-36173041925b?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Fes Cultural Tour</span>
<span className="text-orange font-bold">€320</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<iconify-icon className="mr-3 text-black text-lg" icon="solar:cursor-linear"></iconify-icon>
                                5 Days Trip
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
<img alt="Chefchaouen" className="w-full h-full object-cover group-hover:scale-110 transition duration-500" src="https://images.unsplash.com/photo-1536782067761-0d3c051d9d9e?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-8">
<div className="flex justify-between items-center mb-4 text-lg font-medium text-gray-500">
<span className="text-navy">Chefchaouen</span>
<span className="text-orange font-bold">€150</span>
</div>
<div className="flex items-center text-gray-500 text-base">
<iconify-icon className="mr-3 text-black text-lg" icon="solar:cursor-linear"></iconify-icon>
                                2 Days Trip
                            </div>
</div>
</div>
</div>
</div>


</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-24 flex flex-col lg:flex-row gap-20 items-center">

<div className="w-full lg:w-1/2">
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Easy and Fast</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-10 leading-tight">Book Your Morocco Trip <br/> In 3 Easy Steps</h2>
<div className="flex flex-col space-y-8">
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#F0BB1F] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<iconify-icon className="text-2xl text-white" icon="solar:map-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Choose Your Route</h4>
<p className="text-base text-gray-500 leading-relaxed">Select from our Fes to Marrakech desert tours, or customize your own itinerary.</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#DF6951] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<iconify-icon className="text-2xl text-white" icon="solar:card-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Secure Booking</h4>
<p className="text-base text-gray-500 leading-relaxed">Book securely online. We arrange your transport, luxury camps, and guides.</p>
</div>
</div>
<div className="flex items-start group">
<div className="w-14 h-14 bg-[#006380] rounded-xl flex items-center justify-center shrink-0 mt-1 mr-6">
<iconify-icon className="text-2xl text-white" icon="solar:bus-linear"></iconify-icon>
</div>
<div>
<h4 className="text-lg font-bold text-gray-600 mb-1 group-hover:text-navy transition">Arrive &amp; Explore</h4>
<p className="text-base text-gray-500 leading-relaxed">Meet our driver at the airport or hotel and begin your Sahara adventure.</p>
</div>
</div>
</div>
</div>

<div className="w-full lg:w-1/2 flex justify-center lg:justify-end relative">
<div className="absolute w-[80%] h-[80%] bg-blue-400/20 blur-[80px] rounded-full top-0 right-0 -z-10"></div>
<div className="bg-white p-6 rounded-[1.8rem] shadow-[0_40px_100px_rgba(0,0,0,0.1)] w-[370px] relative z-10">
<img alt="Desert Camp" className="w-full h-48 object-cover rounded-3xl mb-6" src="https://images.unsplash.com/photo-1549141022-779831c26184?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<h4 className="text-xl font-bold text-navy mb-2 tracking-tight">Trip To Merzouga</h4>
<div className="flex text-base text-gray-500 mb-6">
<span className="pr-3 border-r border-gray-300">14-17 Oct</span>
<span className="pl-3">by Lahcen</span>
</div>
<div className="flex items-center space-x-4 mb-8">
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-gray-500" icon="solar:leaf-linear"></iconify-icon>
</div>
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-gray-500" icon="solar:map-linear"></iconify-icon>
</div>
<div className="w-10 h-10 bg-gray-100 rounded-full flex items-center justify-center">
<iconify-icon className="text-gray-500" icon="solar:plain-linear"></iconify-icon>
</div>
</div>
<div className="flex justify-between items-center">
<div className="flex items-center text-gray-500 text-sm">
<iconify-icon className="text-xl mr-3" icon="solar:users-group-two-rounded-linear"></iconify-icon>
<span className="text-base font-medium">8 people going</span>
</div>
<iconify-icon className="text-xl text-[#DF6951]" icon="solar:heart-bold"></iconify-icon>
</div>

<div className="absolute -right-12 bottom-12 bg-white p-4 rounded-2xl shadow-xl flex items-start gap-4 w-[280px]">
<img alt="Guide" className="w-12 h-12 rounded-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=200&amp;q=80"/>
<div className="flex-1">
<span className="text-sm text-gray-400 font-medium">Ongoing</span>
<h5 className="text-navy font-bold text-lg mb-2">Sunset Camel Trek</h5>
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
<h3 className="text-sm font-medium text-gray-500 uppercase tracking-widest mb-4">Testimonials</h3>
<h2 className="text-4xl md:text-5xl font-bold text-navy tracking-tight mb-16 leading-tight">What Travelers Say <br/> About Us.</h2>

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
<button className="text-gray-400 hover:text-navy transition" onclick="prevTestimonial()"><iconify-icon className="text-2xl" icon="solar:alt-arrow-up-linear"></iconify-icon></button>
<button className="text-gray-400 hover:text-navy transition" onclick="nextTestimonial()"><iconify-icon className="text-2xl" icon="solar:alt-arrow-down-linear"></iconify-icon></button>
</div>
</div>
</section>

<section className="container mx-auto max-w-7xl px-6 py-10">
<div className="flex flex-wrap justify-center lg:justify-between items-center gap-10 grayscale opacity-60 hover:opacity-100 transition duration-500">

<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<span className="text-2xl font-bold font-serif text-gray-600">TripAdvisor</span>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<span className="text-2xl font-bold font-serif text-gray-600">Viator</span>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<span className="text-2xl font-bold font-serif text-gray-600">Lonely Planet</span>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<span className="text-2xl font-bold font-serif text-gray-600">Expedia</span>
</div>
<div className="h-12 flex items-center px-4 bg-white rounded-lg hover:shadow-lg transition">
<span className="text-2xl font-bold font-serif text-gray-600">Booking.com</span>
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
<iconify-icon className="text-white text-2xl transform -rotate-12 translate-x-[-2px] translate-y-[2px]" icon="solar:plain-bold-duotone"></iconify-icon>
</div>
<div className="relative z-10 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-bold text-gray-700 leading-snug mb-12 tracking-tight">
                    Subscribe to get information, latest Morocco news and special desert offers
                </h2>
<div className="flex flex-col md:flex-row items-center gap-6 justify-center">
<div className="relative w-full md:w-96">
<iconify-icon className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-400 text-xl" icon="solar:letter-linear"></iconify-icon>
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
<a className="text-4xl font-bold text-navy tracking-tight mb-6 block font-sans" href="#">Sahara Morocco.</a>
<p className="text-base text-gray-500 max-w-xs">Your trusted partner for authentic desert tours and cultural trips in Morocco.</p>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">Company</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">About Us</a></li>
<li><a className="hover:text-orange transition" href="#">Our Team</a></li>
<li><a className="hover:text-orange transition" href="#">Mobile App</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">Contact</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">Help/FAQ</a></li>
<li><a className="hover:text-orange transition" href="#">Press</a></li>
<li><a className="hover:text-orange transition" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="text-xl font-bold text-navy mb-6">More</h4>
<ul className="space-y-3 text-lg text-gray-500">
<li><a className="hover:text-orange transition" href="#">Desert Camps</a></li>
<li><a className="hover:text-orange transition" href="#">Camel Trekking</a></li>
<li><a className="hover:text-orange transition" href="#">Travel Tips</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center mt-10">
<div className="text-gray-500 text-sm mb-6 md:mb-0">
                All rights reserved @SaharaMoroccoTravel
            </div>
<div className="flex flex-col items-center md:items-end">
<div className="flex space-x-4 mb-6">
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-gradient-to-tr hover:from-orange-400 hover:to-orange-600 hover:text-white transition" href="#">
<iconify-icon className="text-lg" icon="logos:facebook"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-white bg-gradient-to-tr from-[#A63EC5] to-[#E35F53] hover:opacity-90 transition" href="#">
<iconify-icon className="text-lg" icon="skill-icons:instagram"></iconify-icon>
</a>
<a className="w-10 h-10 rounded-full bg-white shadow-md flex items-center justify-center text-gray-700 hover:bg-blue-400 hover:text-white transition" href="#">
<iconify-icon className="text-sm" icon="logos:twitter"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
