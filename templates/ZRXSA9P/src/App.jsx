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



    document.addEventListener('DOMContentLoaded', () => {
      lucide.createIcons();

      // Counter Animation Function
      function animateCounter(element, target, suffix = '', duration = 2000) {
        const start = 0;
        const increment = target / (duration / 16); // ~60fps
        let current = start;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          // Format number with proper decimals
          let displayValue;
          if (target < 100 && target % 1 !== 0) {
            displayValue = current.toFixed(1); // For 99.8%
          } else {
            displayValue = Math.floor(current);
          }
          
          element.textContent = displayValue + suffix;
        }, 16);
      }

      // Initialize counters when stats container comes into view
      const statsContainer = document.getElementById('statsContainer');
      const countersAnimated = new Set();
      
      const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting && !countersAnimated.has(entry.target)) {
            countersAnimated.add(entry.target);
            
            // Add staggered animation for each counter
            const counters = entry.target.querySelectorAll('.counter-number');
            counters.forEach((counter, index) => {
              setTimeout(() => {
                const target = parseFloat(counter.dataset.target);
                const suffix = counter.dataset.suffix || '';
                
                // Add count-up animation class
                counter.classList.add('animate-count-up');
                
                // Start counting after a short delay
                setTimeout(() => {
                  animateCounter(counter, target, suffix, 1800);
                }, 200);
                
              }, index * 150); // Stagger each counter by 150ms
            });
          }
        });
      }, {
        threshold: 0.5,
        rootMargin: '0px 0px -100px 0px'
      });

      if (statsContainer) {
        counterObserver.observe(statsContainer);
      }

      // Airport data
      const airports = [
        { code: 'LAX', name: 'Los Angeles International', city: 'Los Angeles', country: 'USA' },
        { code: 'JFK', name: 'John F. Kennedy International', city: 'New York', country: 'USA' },
        { code: 'LHR', name: 'Heathrow Airport', city: 'London', country: 'UK' },
        { code: 'CDG', name: 'Charles de Gaulle Airport', city: 'Paris', country: 'France' },
        { code: 'NRT', name: 'Narita International Airport', city: 'Tokyo', country: 'Japan' },
        { code: 'HND', name: 'Tokyo Haneda Airport', city: 'Tokyo', country: 'Japan' },
        { code: 'DXB', name: 'Dubai International Airport', city: 'Dubai', country: 'UAE' },
        { code: 'SIN', name: 'Singapore Changi Airport', city: 'Singapore', country: 'Singapore' },
        { code: 'ICN', name: 'Incheon International Airport', city: 'Seoul', country: 'South Korea' },
        { code: 'SYD', name: 'Sydney Kingsford Smith Airport', city: 'Sydney', country: 'Australia' },
        { code: 'FRA', name: 'Frankfurt Airport', city: 'Frankfurt', country: 'Germany' },
        { code: 'AMS', name: 'Amsterdam Airport Schiphol', city: 'Amsterdam', country: 'Netherlands' },
        { code: 'MAD', name: 'Madrid-Barajas Airport', city: 'Madrid', country: 'Spain' },
        { code: 'FCO', name: 'Leonardo da Vinci International Airport', city: 'Rome', country: 'Italy' },
        { code: 'YYZ', name: 'Toronto Pearson International Airport', city: 'Toronto', country: 'Canada' }
      ];

      // Sample flight data for results
      const sampleFlights = [
        { 
          airline: 'Emirates', 
          flightNumber: 'EK 215',
          departure: '08:30',
          arrival: '14:45',
          duration: '14h 15m',
          stops: 'Non-stop',
          price: 4250,
          class: 'First Class',
          aircraft: 'Airbus A380'
        },
        { 
          airline: 'Singapore Airlines', 
          flightNumber: 'SQ 35',
          departure: '10:15',
          arrival: '16:30',
          duration: '14h 15m',
          stops: 'Non-stop',
          price: 3890,
          class: 'Business Class',
          aircraft: 'Airbus A350'
        },
        { 
          airline: 'Cathay Pacific', 
          flightNumber: 'CX 840',
          departure: '23:45',
          arrival: '06:00+1',
          duration: '14h 15m',
          stops: 'Non-stop',
          price: 3650,
          class: 'Business Class',
          aircraft: 'Boeing 777-300ER'
        }
      ];

      // Form elements
      const originInput = document.getElementById('originInput');
      const destinationInput = document.getElementById('destinationInput');
      const originSuggestions = document.getElementById('originSuggestions');
      const destinationSuggestions = document.getElementById('destinationSuggestions');
      const originDescription = document.getElementById('originDescription');
      const destinationDescription = document.getElementById('destinationDescription');
      const departureDate = document.getElementById('departureDate');
      const flightSearchForm = document.getElementById('flightSearchForm');
      const searchButton = document.getElementById('searchButton');
      const searchIcon = document.getElementById('searchIcon');
      const loadingIcon = document.getElementById('loadingIcon');
      const flightResults = document.getElementById('flightResults');
      const resultsContainer = document.getElementById('resultsContainer');

      // Placeholder and typed text elements
      const originPlaceholder = document.getElementById('originPlaceholder');
      const destinationPlaceholder = document.getElementById('destinationPlaceholder');
      const originTyped = document.getElementById('originTyped');
      const destinationTyped = document.getElementById('destinationTyped');

      // Set minimum date to today
      const today = new Date().toISOString().split('T')[0];
      departureDate.setAttribute('min', today);
      departureDate.value = today;

      // Enhanced input handlers for text visibility
      function handleInputVisibility(input, placeholder, typed) {
        const value = input.value;
        
        if (value.length > 0) {
          placeholder.style.opacity = '0';
          typed.textContent = value;
          typed.style.display = 'block';
        } else {
          placeholder.style.opacity = '1';
          typed.style.display = 'none';
        }
      }

      // Input focus/blur handlers
      function handleFocus(input, placeholder) {
        placeholder.style.opacity = '0.4';
        placeholder.style.transform = 'translateY(-50%) translateX(10px)';
      }

      function handleBlur(input, placeholder) {
        if (input.value.length === 0) {
          placeholder.style.opacity = '0.6';
          placeholder.style.transform = 'translateY(-50%) translateX(0px)';
        }
      }

      // Airport search functionality
      function searchAirports(query) {
        if (query.length < 2) return [];
        return airports.filter(airport => 
          airport.name.toLowerCase().includes(query.toLowerCase()) ||
          airport.city.toLowerCase().includes(query.toLowerCase()) ||
          airport.code.toLowerCase().includes(query.toLowerCase()) ||
          airport.country.toLowerCase().includes(query.toLowerCase())
        ).slice(0, 6);
      }

      function showSuggestions(input, suggestions, container, descriptionEl, placeholder, typed) {
        if (suggestions.length === 0) {
          container.classList.add('hidden');
          return;
        }

        container.innerHTML = suggestions.map(airport => `
          <div class="airport-suggestion p-4 rounded-2xl glass-dark border border-gray-600/20 cursor-pointer mb-2 last:mb-0" data-code="${airport.code}" data-name="${airport.name}" data-city="${airport.city}" data-country="${airport.country}">
            <div class="flex items-center gap-4">
              <div class="p-3 rounded-xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plane" class="lucide lucide-plane w-5 h-5 text-blue-400" style="stroke-width: 1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
              </div>
              <div class="flex-1">
                <div class="flex items-center gap-3 mb-1">
                  <span class="font-bold text-xl text-white">${airport.code}</span>
                  <span class="text-sm px-2 py-1 rounded-full bg-blue-500/20 text-blue-300">${airport.country}</span>
                </div>
                <div class="font-semibold text-gray-300">${airport.name}</div>
                <div class="text-sm text-gray-400">${airport.city}, ${airport.country}</div>
              </div>
            </div>
          </div>
        `).join('');
        
        container.classList.remove('hidden');
        lucide.createIcons();

        // Add click handlers
        container.querySelectorAll('.airport-suggestion').forEach(suggestion => {
          suggestion.addEventListener('click', () => {
            const code = suggestion.dataset.code;
            const name = suggestion.dataset.name;
            const city = suggestion.dataset.city;
            const country = suggestion.dataset.country;
            
            input.value = name;
            descriptionEl.textContent = `${code} • ${city}, ${country}`;
            container.classList.add('hidden');
            
            // Update visibility
            handleInputVisibility(input, placeholder, typed);
          });
        });
      }

      // Enhanced input event listeners
      originInput.addEventListener('input', (e) => {
        const results = searchAirports(e.target.value);
        showSuggestions(originInput, results, originSuggestions, originDescription, originPlaceholder, originTyped);
        handleInputVisibility(originInput, originPlaceholder, originTyped);
      });

      destinationInput.addEventListener('input', (e) => {
        const results = searchAirports(e.target.value);
        showSuggestions(destinationInput, results, destinationSuggestions, destinationDescription, destinationPlaceholder, destinationTyped);
        handleInputVisibility(destinationInput, destinationPlaceholder, destinationTyped);
      });

      // Focus and blur handlers
      originInput.addEventListener('focus', () => handleFocus(originInput, originPlaceholder));
      originInput.addEventListener('blur', () => handleBlur(originInput, originPlaceholder));
      destinationInput.addEventListener('focus', () => handleFocus(destinationInput, destinationPlaceholder));
      destinationInput.addEventListener('blur', () => handleBlur(destinationInput, destinationPlaceholder));

      // Hide suggestions when clicking outside
      document.addEventListener('click', (e) => {
        if (!e.target.closest('#originInput') && !e.target.closest('#originSuggestions')) {
          originSuggestions.classList.add('hidden');
        }
        if (!e.target.closest('#destinationInput') && !e.target.closest('#destinationSuggestions')) {
          destinationSuggestions.classList.add('hidden');
        }
      });

      // Swap button functionality
      document.getElementById('swapButton').addEventListener('click', () => {
        const originValue = originInput.value;
        const destinationValue = destinationInput.value;
        const originDesc = originDescription.textContent;
        const destinationDesc = destinationDescription.textContent;
        
        originInput.value = destinationValue;
        destinationInput.value = originValue;
        originDescription.textContent = destinationDesc;
        destinationDescription.textContent = originDesc;
        
        // Update visibility for both inputs
        handleInputVisibility(originInput, originPlaceholder, originTyped);
        handleInputVisibility(destinationInput, destinationPlaceholder, destinationTyped);
      });

      // Flight search form submission
      flightSearchForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        
        // Validate form
        if (!originInput.value || !destinationInput.value || !departureDate.value) {
          alert('Please fill in all required fields');
          return;
        }

        // Show loading state
        searchButton.disabled = true;
        searchIcon.classList.add('hidden');
        loadingIcon.classList.remove('hidden');

        // Simulate search delay
        await new Promise(resolve => setTimeout(resolve, 2000));

        // Show results
        displayFlightResults();

        // Reset button state
        searchButton.disabled = false;
        searchIcon.classList.remove('hidden');
        loadingIcon.classList.add('hidden');
      });

      function displayFlightResults() {
        const origin = originInput.value || 'Selected Origin';
        const destination = destinationInput.value || 'Selected Destination';
        const selectedDate = new Date(departureDate.value).toLocaleDateString('en-US', { 
          weekday: 'long', 
          year: 'numeric', 
          month: 'long', 
          day: 'numeric' 
        });

        resultsContainer.innerHTML = `
          <div class="text-center mb-12">
            <div class="glass-dark rounded-3xl p-8 inline-block">
              <p class="text-lg text-gray-300 mb-2">
                <span class="font-semibold text-blue-400">${origin}</span> 
                <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="arrow-right" class="lucide lucide-arrow-right inline mx-4 w-5 h-5" style="stroke-width: 1.5"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                <span class="font-semibold text-blue-400">${destination}</span>
              </p>
              <p class="text-sm text-gray-400">${selectedDate} • ${travelerCount.textContent}</p>
            </div>
          </div>
        `;

        // Add flight cards
        sampleFlights.forEach((flight, index) => {
          const flightCard = `
            <div class="flight-result glass-ultra rounded-[32px] p-8 border border-gray-600/20 hover:border-blue-500/30 cursor-pointer" style="animation-delay: ${index * 0.2}s;">
              <div class="flex flex-col lg:flex-row lg:items-center justify-between gap-8">
                
                <!-- Flight Info -->
                <div class="flex-1">
                  <div class="flex items-center gap-6 mb-6">
                    <div class="p-4 rounded-3xl bg-gradient-to-br from-blue-500/20 to-indigo-500/20">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plane" class="lucide lucide-plane w-8 h-8 text-blue-400" style="stroke-width: 1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                    </div>
                    <div>
                      <h3 class="text-2xl font-bold text-white mb-1">${flight.airline}</h3>
                      <p class="text-gray-400 font-medium">${flight.flightNumber} • ${flight.aircraft}</p>
                    </div>
                    <div class="flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-yellow-500/20 to-orange-500/20 border border-yellow-500/30">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="star" class="lucide lucide-star w-4 h-4 text-yellow-400" style="stroke-width: 1.5"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
                      <span class="text-yellow-400 font-semibold text-sm">${flight.class}</span>
                    </div>
                  </div>
                  
                  <!-- Flight Schedule -->
                  <div class="flex items-center gap-8">
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">${flight.departure}</div>
                      <div class="text-sm text-gray-400 font-medium">Departure</div>
                    </div>
                    
                    <div class="flex-1 flex items-center justify-center">
                      <div class="flex items-center gap-4 w-full">
                        <div class="w-3 h-3 rounded-full bg-blue-400"></div>
                        <div class="flex-1 h-0.5 bg-gradient-to-r from-blue-400 to-indigo-400 relative">
                          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="plane" class="lucide lucide-plane absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-6 h-6 text-blue-400 bg-black rounded-full p-1" style="stroke-width: 1.5"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
                        </div>
                        <div class="w-3 h-3 rounded-full bg-indigo-400"></div>
                      </div>
                    </div>
                    
                    <div class="text-center">
                      <div class="text-3xl font-bold text-white mb-2">${flight.arrival}</div>
                      <div class="text-sm text-gray-400 font-medium">Arrival</div>
                    </div>
                  </div>
                  
                  <!-- Flight Details -->
                  <div class="flex items-center gap-8 mt-6">
                    <div class="flex items-center gap-2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="clock" class="lucide lucide-clock w-5 h-5" style="stroke-width: 1.5"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
                      <span class="font-medium">${flight.duration}</span>
                    </div>
                    <div class="flex items-center gap-2 text-gray-400">
                      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" data-lucide="navigation" class="lucide lucide-navigation w-5 h-5" style="stroke-width: 1.5"><polygon points="3,11 22,2 13,21 11,13"></polygon></svg>
                      <span class="font-medium">${flight.stops}</span>
                    </div>
                  </div>
                </div>
                
                <!-- Price & Book -->
                <div class="text-center lg:text-right">
                  <div class="mb-6">
                    <div class="text-4xl font-bold text-white mb-2">$${flight.price.toLocaleString()}</div>
                    <div class="text-gray-400">per person</div>
                  </div>
                  <button class="apple-button text-white px-12 py-4 rounded-3xl font-bold text-lg shadow-2xl hover:shadow-blue-500/40 transition-all hover:scale-105 transform">
                    Select Flight
                  </button>
                </div>
              </div>
            </div>
          `;
          
          resultsContainer.innerHTML += flightCard;
        });

        flightResults.classList.remove('hidden');
        flightResults.scrollIntoView({ behavior: 'smooth', block: 'start' });
        lucide.createIcons();
      }

      // Enhanced Traveler Selection
      const travelersBtn = document.getElementById('travelersBtn');
      const travelerModal = document.getElementById('travelerModal');
      const applyTravelers = document.getElementById('applyTravelers');
      const closeModal = document.getElementById('closeModal');
      const adultCount = document.getElementById('adultCount');
      const childCount = document.getElementById('childCount');
      const infantCount = document.getElementById('infantCount');
      const travelerCount = document.getElementById('travelerCount');

      let adults = 2, children = 0, infants = 0;

      function updateTravelerDisplay() {
        let text = `${adults} Adult${adults > 1 ? 's' : ''}`;
        if (children > 0) text += `, ${children} Child${children > 1 ? 'ren' : ''}`;
        if (infants > 0) text += `, ${infants} Infant${infants > 1 ? 's' : ''}`;
        travelerCount.textContent = text;
      }

      travelersBtn.addEventListener('click', () => {
        travelerModal.classList.remove('hidden');
        setTimeout(() => travelerModal.querySelector('.glass-ultra').style.transform = 'scale(1)', 10);
      });

      [applyTravelers, closeModal].forEach(btn => {
        btn.addEventListener('click', () => {
          travelerModal.querySelector('.glass-ultra').style.transform = 'scale(0.95)';
          setTimeout(() => travelerModal.classList.add('hidden'), 200);
        });
      });

      travelerModal.addEventListener('click', e => {
        if(e.target === travelerModal) {
          travelerModal.querySelector('.glass-ultra').style.transform = 'scale(0.95)';
          setTimeout(() => travelerModal.classList.add('hidden'), 200);
        }
        
        const btn = e.target.closest('button');
        if(!btn || !btn.dataset.action) return;
        
        const action = btn.dataset.action;
        if(action === 'increase-adult') adults++;
        if(action === 'decrease-adult' && adults > 1) adults--;
        if(action === 'increase-child') children++;
        if(action === 'decrease-child' && children > 0) children--;
        if(action === 'increase-infant') infants++;
        if(action === 'decrease-infant' && infants > 0) infants--;
        
        adultCount.textContent = adults;
        childCount.textContent = children;
        infantCount.textContent = infants;
        updateTravelerDisplay();
      });

      // Trip Type Toggle Enhancement
      const roundTripBtn = document.getElementById('roundTripBtn');
      const oneWayBtn = document.getElementById('oneWayBtn');

      roundTripBtn.addEventListener('click', () => {
        roundTripBtn.className = 'flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 font-semibold border border-blue-500/30 transition-all hover:from-blue-500/30 hover:to-indigo-500/30 hover:scale-105 transform';
        oneWayBtn.className = 'flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark text-gray-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 transition-all hover:scale-105 transform';
      });

      oneWayBtn.addEventListener('click', () => {
        oneWayBtn.className = 'flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 font-semibold border border-blue-500/30 transition-all hover:from-blue-500/30 hover:to-indigo-500/30 hover:scale-105 transform';
        roundTripBtn.className = 'flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark text-gray-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 transition-all hover:scale-105 transform';
      });

      // Enhanced Scroll Animations
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      };

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running';
          }
        });
      }, observerOptions);

      document.querySelectorAll('[class*="animate-"]').forEach(el => {
        el.style.animationPlayState = 'paused';
        observer.observe(el);
      });

      updateTravelerDisplay();
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
      

<div className="fixed inset-0 overflow-hidden pointer-events-none">
<div className="absolute -top-96 -right-96 w-[800px] h-[800px] bg-gradient-to-br from-blue-500/10 via-purple-500/10 to-indigo-500/10 rounded-full blur-3xl animate-float" style={{animationPlayState: 'running'}}></div>
<div className="absolute -bottom-96 -left-96 w-[600px] h-[600px] bg-gradient-to-br from-cyan-500/10 via-blue-500/10 to-purple-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-4s', animationPlayState: 'paused'}}></div>
<div className="absolute top-1/3 right-1/4 w-[400px] h-[400px] bg-gradient-to-br from-indigo-500/10 to-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '-2s', animationPlayState: 'running'}}></div>
</div>

<nav className="sticky top-0 left-0 right-0 z-50 glass-effect sm:px-6 lg:px-8 opacity-100 animate-fade-in-up pt-4 pr-4 pb-4 pl-4" style={{animationPlayState: 'running'}}>
<div className="max-w-7xl mx-auto">
<div className="glass-nav rounded-3xl pt-6 pr-8 pb-6 pl-8">
<div className="flex items-center justify-between">
<div className="flex items-center gap-4 opacity-0 animate-slide-in-left animate-delay-200" style={{animationPlayState: 'running'}}>
<div className="relative">
<div className="w-14 h-14 rounded-3xl bg-gradient-to-br from-blue-500 via-blue-600 to-indigo-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 animate-pulse-slow" style={{animationPlayState: 'running'}}>
<svg className="lucide lucide-plane w-7 h-7 text-white" data-lucide="plane" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"></path></svg>
</div>
<div className="absolute -top-1 -right-1 w-4 h-4 bg-green-400 rounded-full border-2 border-black"></div>
</div>
<div className="">
<span className="text-2xl sm:text-3xl font-bold gradient-text tracking-tight">SkyVault</span>
<p className="text-xs text-gray-400 font-medium">Premium Aviation</p>
</div>
</div>

<div className="hidden lg:flex items-center gap-8 opacity-0 animate-fade-in-up animate-delay-400" style={{animationPlayState: 'running'}}>
<a className="text-gray-300 hover:text-white font-medium text-lg transition-all relative group" href="#">
              Flights
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
</a>
<a className="text-gray-300 hover:text-white font-medium text-lg transition-all relative group" href="#">
              First Class
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
</a>
<a className="text-gray-300 hover:text-white font-medium text-lg transition-all relative group" href="#">
              Concierge
              <div className="absolute -bottom-2 left-0 w-0 h-0.5 bg-gradient-to-r from-blue-500 to-indigo-500 group-hover:w-full transition-all duration-300"></div>
</a>
<button className="apple-button text-white px-8 py-4 rounded-2xl font-semibold text-lg shadow-xl">
              Member Login
            </button>
</div>

<button className="lg:hidden p-3 rounded-2xl glass-nav opacity-0 animate-slide-in-right animate-delay-300" style={{animationPlayState: 'paused'}}>
<svg className="lucide lucide-menu w-6 h-6 text-white" data-lucide="menu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16"></path><path d="M4 18h16"></path><path d="M4 6h16"></path></svg>
</button>
</div>
</div>
</div>
</nav>
<div className="relative min-h-screen">

<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">
<div className="relative mb-32">

<div className="relative z-10 text-center pt-32 sm:pt-40 pb-40">
<div className="opacity-0 animate-blur-in animate-delay-600" style={{animationPlayState: 'running'}}>
<span className="inline-block px-6 py-3 glass-dark rounded-full text-blue-300 border border-blue-500/30 text-sm font-semibold uppercase tracking-wider mb-8 shimmer-effect animate-shimmer" style={{animationPlayState: 'running'}}>
              Redefining Premium Travel
            </span>
</div>
<h1 className="text-5xl sm:text-6xl lg:text-8xl font-black max-w-6xl mx-auto leading-[0.9] tracking-tighter opacity-0 animate-fade-in-up animate-delay-700" style={{animationPlayState: 'running'}}>
            Experience
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent animate-pulse-slow" style={{animationPlayState: 'running'}}>Extraordinary</span>
            Aviation
          </h1>
<p className="text-xl sm:text-2xl lg:text-3xl text-gray-300 mt-12 max-w-4xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up animate-delay-800" style={{animationPlayState: 'running'}}>
            Where luxury meets innovation. Discover a new era of personalized flight experiences crafted for discerning travelers.
          </p>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-8 lg:gap-16 max-w-5xl opacity-0 animate-scale-in animate-delay-1000 mt-24 mr-auto ml-auto" id="statsContainer" style={{animationPlayState: 'running'}}>
<div className="text-center group cursor-pointer">
<div className="glass-dark rounded-3xl p-8 card-hover">
<svg className="lucide lucide-crown w-8 h-8 mx-auto mb-4 text-yellow-400 feature-icon-glow" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-blue-400 transition-colors">
<span className="counter-number animate-count-up" data-suffix="M+" data-target="50" style={{animationPlayState: 'running'}}>50M+</span>
</div>
<div className="text-gray-400 font-medium text-sm lg:text-base">Elite Members</div>
</div>
</div>
<div className="text-center group cursor-pointer">
<div className="glass-dark rounded-3xl p-8 card-hover">
<svg className="lucide lucide-shield-check w-8 h-8 mx-auto mb-4 text-green-400 feature-icon-glow" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
<div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-indigo-400 transition-colors">
<span className="counter-number animate-count-up" data-suffix="+" data-target="850" style={{animationPlayState: 'running'}}>850+</span>
</div>
<div className="text-gray-400 font-medium text-sm lg:text-base">Partner Airlines</div>
</div>
</div>
<div className="text-center group cursor-pointer">
<div className="glass-dark rounded-3xl p-8 card-hover">
<svg className="lucide lucide-globe w-8 h-8 mx-auto mb-4 text-blue-400 feature-icon-glow" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
<span className="counter-number animate-count-up" data-suffix="+" data-target="2400" style={{animationPlayState: 'running'}}>2400+</span>
</div>
<div className="text-gray-400 font-medium text-sm lg:text-base">Global Destinations</div>
</div>
</div>
<div className="text-center group cursor-pointer">
<div className="glass-dark rounded-3xl p-8 card-hover">
<svg className="lucide lucide-diamond w-8 h-8 mx-auto mb-4 text-purple-400 feature-icon-glow" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
<div className="text-3xl lg:text-4xl font-bold text-white mb-2 group-hover:text-cyan-400 transition-colors">
<span className="counter-number animate-count-up" data-suffix="%" data-target="99.8" style={{animationPlayState: 'running'}}>99.8%</span>
</div>
<div className="text-gray-400 font-medium text-sm lg:text-base">Satisfaction Rate</div>
</div>
</div>
</div>
</div>

<div className="relative z-20 -mb-20">
<div className="glass-ultra rounded-[32px] p-8 lg:p-12 max-w-7xl mx-auto shadow-2xl opacity-0 animate-blur-in animate-delay-900" style={{animationPlayState: 'running'}}>

<div className="flex flex-col lg:flex-row lg:items-center justify-between mb-12">
<div className="">
<h3 className="text-2xl lg:text-3xl font-bold text-white mb-2 tracking-tight">Design Your Journey</h3>
<p className="text-gray-400 text-lg">Personalized flight search powered by advanced AI</p>
</div>
<div className="flex items-center gap-4 mt-6 lg:mt-0">
<div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
<svg className="lucide lucide-sparkles w-4 h-4 text-yellow-400" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
<span className="text-sm font-medium text-white">AI Enhanced</span>
</div>
<div className="flex items-center gap-2 glass-dark px-4 py-2 rounded-full">
<svg className="lucide lucide-zap w-4 h-4 text-blue-400" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<span className="text-sm font-medium text-white">Real-time</span>
</div>
</div>
</div>
<form className="grid grid-cols-1 xl:grid-cols-12 gap-6 items-end" id="flightSearchForm">

<div className="xl:col-span-3 group relative">
<label className="text-sm font-semibold text-gray-300 mb-4 block uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Departure
                </label>
<div className="input-container relative">
<div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
<svg className="lucide lucide-plane-takeoff w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" data-lucide="plane-takeoff" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M6.36 17.4 4 17l-2-4 1.1-.55a2 2 0 0 1 1.8 0l.17.1a2 2 0 0 0 1.8 0L8 12 5 6l.9-.45a2 2 0 0 1 2.09.2l4.02 3a2 2 0 0 0 2.1.2l4.19-2.06a2.41 2.41 0 0 1 1.73-.17L21 7a1.4 1.4 0 0 1 .87 1.99l-.38.76c-.23.46-.6.84-1.07 1.08L7.58 17.2a2 2 0 0 1-1.22.18Z"></path></svg>
</div>
<input className="input-field w-full glass-dark hover:border-blue-400/50 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/10 placeholder-gray-400 transition-all text-sm font-semibold text-white border-gray-600/30 border rounded-3xl pt-6 pr-6 pb-6 pl-16" id="originInput" name="origin" placeholder="Enter departure city or airport" required="" type="text"/>
<div className="typed-text" id="originTyped" style={{display: 'none'}}></div>
</div>
<div className="absolute top-full mt-2 w-full bg-black/90 backdrop-blur-lg border border-gray-600/30 rounded-3xl p-4 hidden z-50 max-h-80 overflow-y-auto" id="originSuggestions"></div>
<p className="text-sm text-gray-500 mt-3 pl-16 font-medium" id="originDescription">Enter departure location</p>
</div>

<div className="xl:col-span-1 flex justify-center">
<button className="p-6 rounded-3xl glass-dark hover:glass-ultra border border-gray-600/30 hover:border-blue-400/50 transition-all hover:scale-110 transform group shadow-2xl" id="swapButton" type="button">
<svg className="lucide lucide-repeat w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" data-lucide="repeat" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</button>
</div>

<div className="xl:col-span-3 group relative">
<label className="text-sm font-semibold text-gray-300 mb-4 block uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-map-pin w-4 h-4" data-lucide="map-pin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
                  Destination
                </label>
<div className="input-container relative">
<div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
<svg className="lucide lucide-plane-landing w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" data-lucide="plane-landing" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 22h20"></path><path d="M3.77 10.77 2 9l2-4.5 1.1.55c.55.28.9.84.9 1.45s.35 1.17.9 1.45L8 8.5l3-6 1.05.53a2 2 0 0 1 1.09 1.52l.72 5.4a2 2 0 0 0 1.09 1.52l4.4 2.2c.42.22.78.55 1.01.96l.6 1.03c.49.88-.06 1.98-1.06 2.1l-1.18.15c-.47.06-.95-.02-1.37-.24L4.29 11.15a2 2 0 0 1-.52-.38Z"></path></svg>
</div>
<input className="input-field w-full glass-dark hover:border-blue-400/50 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/10 placeholder-gray-400 transition-all text-sm font-semibold text-white border-gray-600/30 border rounded-3xl pt-6 pr-6 pb-6 pl-16" id="destinationInput" name="destination" placeholder="Enter destination city or airport" required="" type="text"/>
<div className="typed-text" id="destinationTyped" style={{display: 'none'}}></div>
</div>
<div className="absolute top-full mt-2 w-full bg-black/90 backdrop-blur-lg border border-gray-600/30 rounded-3xl p-4 hidden z-50 max-h-80 overflow-y-auto" id="destinationSuggestions"></div>
<p className="text-sm text-gray-500 mt-3 pl-16 font-medium" id="destinationDescription">Enter destination location</p>
</div>

<div className="xl:col-span-2 group">
<label className="text-sm font-semibold text-gray-300 mb-4 block uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-calendar-days w-4 h-4" data-lucide="calendar-days" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="M8 14h.01"></path><path d="M12 14h.01"></path><path d="M16 14h.01"></path><path d="M8 18h.01"></path><path d="M12 18h.01"></path><path d="M16 18h.01"></path></svg>
                  Travel Dates
                </label>
<div className="relative">
<div className="absolute left-6 top-1/2 -translate-y-1/2 z-10">
<svg className="lucide lucide-calendar-check w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" data-lucide="calendar-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M8 2v4"></path><path d="M16 2v4"></path><rect height="18" rx="2" width="18" x="3" y="4"></rect><path d="M3 10h18"></path><path d="m9 16 2 2 4-4"></path></svg>
</div>
<input className="w-full glass-dark hover:border-blue-400/50 focus:border-blue-400 focus:outline-none focus:ring-4 focus:ring-blue-400/10 cursor-pointer transition-all text-sm font-semibold text-neutral-50/40 bg-neutral-950/20 border-gray-600/30 border rounded-3xl pt-6 pr-6 pb-6 pl-16" id="departureDate" min="2025-08-16" name="departureDate" required="" type="date"/>
</div>
<p className="text-sm text-gray-500 mt-3 pl-16 font-medium">Departure date</p>
</div>

<div className="xl:col-span-2 group">
<label className="text-sm font-semibold text-gray-300 mb-4 block uppercase tracking-wider flex items-center gap-2">
<svg className="lucide lucide-users w-4 h-4" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
                  Travelers
                </label>
<button className="w-full flex glass-dark hover:border-blue-400/50 group-hover:border-blue-400/50 transition-all text-lg font-semibold text-white text-left border-gray-600/30 border rounded-3xl pt-6 pr-6 pb-6 pl-16 items-center justify-between" id="travelersBtn" type="button">
<div className="absolute left-6 top-1/2 -translate-y-1/2">
<svg className="lucide lucide-user-check w-6 h-6 text-gray-400 group-hover:text-blue-400 transition-colors" data-lucide="user-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 11 2 2 4-4"></path><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<span className="text-sm" id="travelerCount">2 Adults</span>
<svg className="lucide lucide-chevron-down w-5 h-5 text-gray-400 group-hover:text-gray-300 transition-colors" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<p className="text-sm text-gray-500 mt-3 pl-16 font-medium">Business Class</p>
</div>

<div className="xl:col-span-1">
<button className="w-full apple-button text-white font-bold rounded-3xl py-6 px-6 shadow-2xl hover:shadow-blue-500/40 transition-all group" id="searchButton" type="submit">
<svg className="lucide lucide-search w-7 h-7 mx-auto group-hover:scale-110 transition-transform" data-lucide="search" fill="none" height="24" id="searchIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
<svg className="lucide lucide-loader w-7 h-7 mx-auto animate-spin hidden" data-lucide="loader" fill="none" height="24" id="loadingIcon" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', animationPlayState: 'paused'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v4"></path><path d="m16.2 7.8 2.9-2.9"></path><path d="M18 12h4"></path><path d="m16.2 16.2 2.9 2.9"></path><path d="M12 18v4"></path><path d="m4.9 19.1 2.9-2.9"></path><path d="M2 12h4"></path><path d="m4.9 4.9 2.9 2.9"></path></svg>
</button>
</div>
</form>

<div className="flex flex-wrap items-center gap-6 mt-12 pt-8 border-t border-gray-600/20">
<button className="flex items-center gap-3 px-8 py-4 rounded-2xl bg-gradient-to-r from-blue-500/20 to-indigo-500/20 text-blue-300 font-semibold border border-blue-500/30 transition-all hover:from-blue-500/30 hover:to-indigo-500/30 hover:scale-105 transform" id="roundTripBtn">
<svg className="lucide lucide-repeat-2 w-5 h-5" data-lucide="repeat-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m2 9 3-3 3 3"></path><path d="M13 18H7a2 2 0 0 1-2-2V6"></path><path d="m22 15-3 3-3-3"></path><path d="M11 6h6a2 2 0 0 1 2 2v10"></path></svg>
                Round Trip
              </button>
<button className="flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark text-gray-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 transition-all hover:scale-105 transform" id="oneWayBtn">
<svg className="lucide lucide-arrow-right w-5 h-5" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
                One Way
              </button>
<button className="flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark text-gray-300 font-semibold border border-gray-600/30 hover:border-gray-500/50 transition-all hover:scale-105 transform">
<svg className="lucide lucide-settings w-5 h-5" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
                Advanced Filters
              </button>
<div className="flex items-center gap-3 px-8 py-4 rounded-2xl glass-dark border border-gray-600/30">
<svg className="lucide lucide-trending-up w-5 h-5 text-green-400" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
<span className="text-gray-300 font-semibold">Best Price Guarantee</span>
</div>
</div>
</div>
</div>
</div>

<div className="hidden mt-48 pt-32" id="flightResults">
<div className="text-center mb-16">
<h2 className="text-4xl sm:text-5xl font-bold text-white mb-4 tracking-tight">Available Flights</h2>
<p className="text-xl text-gray-300">Premium options curated for your journey</p>
</div>
<div className="space-y-8" id="resultsContainer"></div>
</div>

<div className="mt-48 pt-32">
<div className="text-center mb-32">
<div className="opacity-0 animate-fade-in-up animate-delay-300" style={{animationPlayState: 'paused'}}>
<span className="inline-block px-8 py-4 glass-dark rounded-full text-blue-300 border border-blue-500/30 text-sm font-semibold uppercase tracking-wider mb-12">
              Unmatched Excellence
            </span>
</div>
<h2 className="text-4xl sm:text-6xl lg:text-7xl font-black text-white max-w-6xl mx-auto leading-tight tracking-tighter opacity-0 animate-blur-in animate-delay-500" style={{animationPlayState: 'paused'}}>
            Redefining Luxury
            <span className="block bg-gradient-to-r from-blue-400 via-indigo-500 to-purple-500 bg-clip-text text-transparent">Aviation Standards</span>
</h2>
<p className="text-xl sm:text-2xl text-gray-300 mt-12 max-w-4xl mx-auto leading-relaxed font-light opacity-0 animate-fade-in-up animate-delay-700" style={{animationPlayState: 'paused'}}>
            Every detail meticulously crafted for the world's most discerning travelers. Experience aviation reimagined.
          </p>
</div>

<div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3 mt-32">
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-blue-500/30 card-hover opacity-0 animate-slide-in-left animate-delay-400" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-blue-500/40 feature-icon-glow">
<svg className="lucide lucide-brain w-10 h-10 text-white" data-lucide="brain" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 18V5"></path><path d="M15 13a4.17 4.17 0 0 1-3-4 4.17 4.17 0 0 1-3 4"></path><path d="M17.598 6.5A3 3 0 1 0 12 5a3 3 0 1 0-5.598 1.5"></path><path d="M17.997 5.125a4 4 0 0 1 2.526 5.77"></path><path d="M18 18a4 4 0 0 0 2-7.464"></path><path d="M19.967 17.483A4 4 0 1 1 12 18a4 4 0 1 1-7.967-.517"></path><path d="M6 18a4 4 0 0 1-2-7.464"></path><path d="M6.003 5.125a4 4 0 0 0-2.526 5.77"></path></svg>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-green-400 rounded-full animate-pulse" style={{animationPlayState: 'paused'}}></div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-blue-300 transition-colors tracking-tight">AI-Powered Intelligence</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Advanced machine learning algorithms analyze millions of flight patterns to predict the perfect itinerary tailored exclusively for you.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-clock w-4 h-4 text-blue-400" data-lucide="clock" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 6v6l4 2"></path><circle cx="12" cy="12" r="10"></circle></svg>
<span className="text-sm text-gray-400">Real-time updates</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-target w-4 h-4 text-green-400" data-lucide="target" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><circle cx="12" cy="12" r="6"></circle><circle cx="12" cy="12" r="2"></circle></svg>
<span className="text-sm text-gray-400">99.7% accuracy</span>
</div>
</div>
</div>
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-purple-500/30 card-hover opacity-0 animate-fade-in-up animate-delay-600" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-purple-500/40 feature-icon-glow">
<svg className="lucide lucide-shield w-10 h-10 text-white" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<div className="absolute -top-2 -right-2">
<svg className="lucide lucide-check-circle w-6 h-6 text-green-400" data-lucide="check-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21.801 10A10 10 0 1 1 17 3.335"></path><path d="m9 11 3 3L22 4"></path></svg>
</div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-purple-300 transition-colors tracking-tight">Military-Grade Security</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Your personal data and financial information protected by quantum-encrypted security protocols trusted by governments worldwide.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-key w-4 h-4 text-purple-400" data-lucide="key" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.5 7.5 2.3 2.3a1 1 0 0 0 1.4 0l2.1-2.1a1 1 0 0 0 0-1.4L19 4"></path><path d="m21 2-9.6 9.6"></path><circle cx="7.5" cy="15.5" r="5.5"></circle></svg>
<span className="text-sm text-gray-400">256-bit encryption</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-award w-4 h-4 text-yellow-400" data-lucide="award" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15.477 12.89 1.515 8.526a.5.5 0 0 1-.81.47l-3.58-2.687a1 1 0 0 0-1.197 0l-3.586 2.686a.5.5 0 0 1-.81-.469l1.514-8.526"></path><circle cx="12" cy="8" r="6"></circle></svg>
<span className="text-sm text-gray-400">ISO certified</span>
</div>
</div>
</div>
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-emerald-500/30 card-hover opacity-0 animate-slide-in-right animate-delay-800" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-emerald-500/40 feature-icon-glow">
<svg className="lucide lucide-headphones w-10 h-10 text-white" data-lucide="headphones" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 14h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-7a9 9 0 0 1 18 0v7a2 2 0 0 1-2 2h-1a2 2 0 0 1-2-2v-3a2 2 0 0 1 2-2h3"></path></svg>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-green-400 to-emerald-400 rounded-full animate-pulse" style={{animationPlayState: 'paused'}}></div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-emerald-300 transition-colors tracking-tight">Platinum Concierge</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Dedicated travel specialists available 24/7 across 50+ languages, providing white-glove service from booking to arrival.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-phone w-4 h-4 text-emerald-400" data-lucide="phone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M13.832 16.568a1 1 0 0 0 1.213-.303l.355-.465A2 2 0 0 1 17 15h3a2 2 0 0 1 2 2v3a2 2 0 0 1-2 2A18 18 0 0 1 2 4a2 2 0 0 1 2-2h3a2 2 0 0 1 2 2v3a2 2 0 0 1-.8 1.6l-.468.351a1 1 0 0 0-.292 1.233 14 14 0 0 0 6.392 6.384"></path></svg>
<span className="text-sm text-gray-400">24/7 support</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-languages w-4 h-4 text-blue-400" data-lucide="languages" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 8 6 6"></path><path d="m4 14 6-6 2-3"></path><path d="M2 5h12"></path><path d="M7 2h1"></path><path d="m22 22-5-10-5 10"></path><path d="M14 18h6"></path></svg>
<span className="text-sm text-gray-400">50+ languages</span>
</div>
</div>
</div>
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-yellow-500/30 card-hover opacity-0 animate-slide-in-left animate-delay-900" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-yellow-500 to-orange-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-yellow-500/40 feature-icon-glow">
<svg className="lucide lucide-banknote w-10 h-10 text-white" data-lucide="banknote" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="12" rx="2" width="20" x="2" y="6"></rect><circle cx="12" cy="12" r="2"></circle><path d="M6 12h.01M18 12h.01"></path></svg>
</div>
<div className="absolute -top-2 -right-2">
<svg className="lucide lucide-trending-down w-6 h-6 text-green-400" data-lucide="trending-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 17h6v-6"></path><path d="m22 17-8.5-8.5-5 5L2 7"></path></svg>
</div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-yellow-300 transition-colors tracking-tight">Dynamic Price Optimization</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Proprietary algorithms monitor fare fluctuations across 850+ airlines, automatically securing the lowest prices or refunding the difference.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-percent w-4 h-4 text-yellow-400" data-lucide="percent" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="19" x2="5" y1="5" y2="19"></line><circle cx="6.5" cy="6.5" r="2.5"></circle><circle cx="17.5" cy="17.5" r="2.5"></circle></svg>
<span className="text-sm text-gray-400">Average 35% savings</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-refresh-cw w-4 h-4 text-blue-400" data-lucide="refresh-cw" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 0 1 9-9 9.75 9.75 0 0 1 6.74 2.74L21 8"></path><path d="M21 3v5h-5"></path><path d="M21 12a9 9 0 0 1-9 9 9.75 9.75 0 0 1-6.74-2.74L3 16"></path><path d="M8 16H3v5"></path></svg>
<span className="text-sm text-gray-400">Auto-rebooking</span>
</div>
</div>
</div>
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-cyan-500/30 card-hover opacity-0 animate-fade-in-up animate-delay-1000" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-cyan-500 to-blue-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-cyan-500/40 feature-icon-glow">
<svg className="lucide lucide-smartphone w-10 h-10 text-white" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
</div>
<div className="absolute -top-2 -right-2 w-6 h-6 bg-gradient-to-r from-cyan-400 to-blue-400 rounded-full animate-pulse" style={{animationPlayState: 'paused'}}></div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-cyan-300 transition-colors tracking-tight">Seamless Mobile Experience</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Award-winning mobile app with offline capabilities, biometric authentication, and AR boarding pass integration for effortless travel.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-download w-4 h-4 text-cyan-400" data-lucide="download" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 15V3"></path><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"></path><path d="m7 10 5 5 5-5"></path></svg>
<span className="text-sm text-gray-400">Offline mode</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-eye w-4 h-4 text-purple-400" data-lucide="eye" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
<span className="text-sm text-gray-400">AR integration</span>
</div>
</div>
</div>
<div className="group p-12 rounded-[32px] glass-dark hover:glass-ultra border border-gray-700/30 hover:border-rose-500/30 card-hover opacity-0 animate-slide-in-right animate-delay-800" style={{animationPlayState: 'paused'}}>
<div className="relative">
<div className="p-8 rounded-3xl bg-gradient-to-br from-rose-500 to-pink-600 w-max mb-12 group-hover:scale-110 transition-transform shadow-2xl shadow-rose-500/40 feature-icon-glow">
<svg className="lucide lucide-gift w-10 h-10 text-white" data-lucide="gift" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="4" rx="1" width="18" x="3" y="8"></rect><path d="M12 8v13"></path><path d="M19 12v7a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2v-7"></path><path d="M7.5 8a2.5 2.5 0 0 1 0-5A4.8 8 0 0 1 12 8a4.8 8 0 0 1 4.5-5 2.5 2.5 0 0 1 0 5"></path></svg>
</div>
<div className="absolute -top-2 -right-2">
<svg className="lucide lucide-star w-6 h-6 text-yellow-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
</div>
</div>
<h3 className="font-bold text-3xl text-white mb-8 group-hover:text-rose-300 transition-colors tracking-tight">Elite Rewards Program</h3>
<p className="text-gray-400 leading-relaxed text-xl group-hover:text-gray-300 transition-colors font-light">Accelerated points earning with exclusive partnerships, priority upgrades, and access to invitation-only luxury lounges worldwide.</p>
<div className="flex items-center gap-4 mt-8 opacity-0 group-hover:opacity-100 transition-all">
<div className="flex items-center gap-2">
<svg className="lucide lucide-star w-4 h-4 text-rose-400" data-lucide="star" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.525 2.295a.53.53 0 0 1 .95 0l2.31 4.679a2.123 2.123 0 0 0 1.595 1.16l5.166.756a.53.53 0 0 1 .294.904l-3.736 3.638a2.123 2.123 0 0 0-.611 1.878l.882 5.14a.53.53 0 0 1-.771.56l-4.618-2.428a2.122 2.122 0 0 0-1.973 0L6.396 21.01a.53.53 0 0 1-.77-.56l.881-5.139a2.122 2.122 0 0 0-.611-1.879L2.16 9.795a.53.53 0 0 1 .294-.906l5.165-.755a2.122 2.122 0 0 0 1.597-1.16z"></path></svg>
<span className="text-sm text-gray-400">3x points multiplier</span>
</div>
<div className="flex items-center gap-2">
<svg className="lucide lucide-crown w-4 h-4 text-yellow-400" data-lucide="crown" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.562 3.266a.5.5 0 0 1 .876 0L15.39 8.87a1 1 0 0 0 1.516.294L21.183 5.5a.5.5 0 0 1 .798.519l-2.834 10.246a1 1 0 0 1-.956.734H5.81a1 1 0 0 1-.957-.734L2.02 6.02a.5.5 0 0 1 .798-.519l4.276 3.664a1 1 0 0 0 1.516-.294z"></path><path d="M5 21h14"></path></svg>
<span className="text-sm text-gray-400">VIP lounges</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="fixed inset-0 bg-black/90 backdrop-blur-3xl z-50 flex items-center justify-center p-4 hidden" id="travelerModal">
<div className="glass-ultra w-[600px] max-w-full transform transition-transform border-gray-600/30 rounded-[32px] pt-16 pr-16 pb-16 pl-16 shadow-2xl scale-95" style={{transform: 'scale(0.95)'}}>
<div className="flex items-center justify-between mb-16">
<div>
<h4 className="font-bold text-4xl text-white mb-4 tracking-tight">Select Travelers</h4>
<p className="text-gray-400 text-lg">Customize your travel party</p>
</div>
<button className="p-4 rounded-3xl glass-dark hover:glass-ultra transition-all group" id="closeModal">
<svg className="lucide lucide-x group-hover:text-white transition-colors w-[28px] h-[28px]" data-lucide="x" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5', width: '28px', height: '28px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 6 6 18"></path><path d="m6 6 12 12"></path></svg>
</button>
</div>
<div className="space-y-12">
<div className="flex items-center justify-between py-10 border-b border-gray-600/20">
<div className="flex items-center gap-6">
<div className="p-4 rounded-3xl bg-gradient-to-br from-blue-500 to-indigo-600">
<svg className="lucide lucide-user w-8 h-8 text-white" data-lucide="user" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
<div>
<span className="font-semibold text-2xl text-white">Adults</span>
<p className="text-gray-400 mt-2 text-lg">Ages 18 and above</p>
</div>
</div>
<div className="flex items-center gap-8">
<button className="p-5 rounded-3xl glass-dark hover:bg-red-500/20 border border-gray-600/30 hover:border-red-500/50 transition-all disabled:opacity-50 hover:scale-110 transform group" data-action="decrease-adult">
<svg className="lucide lucide-minus w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="font-bold text-3xl w-20 text-center text-white" id="adultCount">2</span>
<button className="p-5 rounded-3xl glass-dark hover:bg-green-500/20 border border-gray-600/30 hover:border-green-500/50 transition-all hover:scale-110 transform group" data-action="increase-adult">
<svg className="lucide lucide-plus w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between py-10 border-b border-gray-600/20">
<div className="flex items-center gap-6">
<div className="p-4 rounded-3xl bg-gradient-to-br from-purple-500 to-pink-600">
<svg className="lucide lucide-baby w-8 h-8 text-white" data-lucide="baby" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 16c.5.3 1.2.5 2 .5s1.5-.2 2-.5"></path><path d="M15 12h.01"></path><path d="M19.38 6.813A9 9 0 0 1 20.8 10.2a2 2 0 0 1 0 3.6 9 9 0 0 1-17.6 0 2 2 0 0 1 0-3.6A9 9 0 0 1 12 3c2 0 3.5 1.1 3.5 2.5s-.9 2.5-2 2.5c-.8 0-1.5-.4-1.5-1"></path><path d="M9 12h.01"></path></svg>
</div>
<div>
<span className="font-semibold text-2xl text-white">Children</span>
<p className="text-gray-400 mt-2 text-lg">Ages 2-17</p>
</div>
</div>
<div className="flex items-center gap-8">
<button className="p-5 rounded-3xl glass-dark hover:bg-red-500/20 border border-gray-600/30 hover:border-red-500/50 transition-all disabled:opacity-50 hover:scale-110 transform group" data-action="decrease-child">
<svg className="lucide lucide-minus w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="font-bold text-3xl w-20 text-center text-white" id="childCount">0</span>
<button className="p-5 rounded-3xl glass-dark hover:bg-green-500/20 border border-gray-600/30 hover:border-green-500/50 transition-all hover:scale-110 transform group" data-action="increase-child">
<svg className="lucide lucide-plus w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
<div className="flex items-center justify-between py-10">
<div className="flex items-center gap-6">
<div className="p-4 rounded-3xl bg-gradient-to-br from-emerald-500 to-teal-600">
<svg className="lucide lucide-heart w-8 h-8 text-white" data-lucide="heart" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2 9.5a5.5 5.5 0 0 1 9.591-3.676.56.56 0 0 0 .818 0A5.49 5.49 0 0 1 22 9.5c0 2.29-1.5 4-3 5.5l-5.492 5.313a2 2 0 0 1-3 .019L5 15c-1.5-1.5-3-3.2-3-5.5"></path></svg>
</div>
<div>
<span className="font-semibold text-2xl text-white">Infants</span>
<p className="text-gray-400 mt-2 text-lg">Under 2 years</p>
</div>
</div>
<div className="flex items-center gap-8">
<button className="p-5 rounded-3xl glass-dark hover:bg-red-500/20 border border-gray-600/30 hover:border-red-500/50 transition-all disabled:opacity-50 hover:scale-110 transform group" data-action="decrease-infant">
<svg className="lucide lucide-minus w-6 h-6 text-gray-300 group-hover:text-red-400 transition-colors" data-lucide="minus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path></svg>
</button>
<span className="font-bold text-3xl w-20 text-center text-white" id="infantCount">0</span>
<button className="p-5 rounded-3xl glass-dark hover:bg-green-500/20 border border-gray-600/30 hover:border-green-500/50 transition-all hover:scale-110 transform group" data-action="increase-infant">
<svg className="lucide lucide-plus w-6 h-6 text-gray-300 group-hover:text-green-400 transition-colors" data-lucide="plus" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="M12 5v14"></path></svg>
</button>
</div>
</div>
</div>
<button className="w-full apple-button hover:shadow-blue-500/40 text-xl font-bold text-white rounded-3xl mt-16 pt-6 pb-6 shadow-2xl" id="applyTravelers">
        Apply Selection
      </button>
</div>
</div>


    </>
  );
}
