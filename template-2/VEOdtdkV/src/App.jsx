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



        document.addEventListener('DOMContentLoaded', function() {
            // Price slider elements
            const sliderThumb = document.getElementById('sliderThumb');
            const sliderActive = document.getElementById('sliderActive');
            const priceBubble = document.getElementById('priceBubble');
            const priceValue = document.getElementById('priceValue');
            const clearPriceBtn = document.getElementById('clearPrice');
            const sliderContainer = document.querySelector('.slider-container');
            
            // Travel time slider elements
            const timeSliderThumb = document.getElementById('timeSliderThumb');
            const timeSliderActive = document.getElementById('timeSliderActive');
            const timeBubble = document.getElementById('timeBubble');
            const timeValue = document.getElementById('timeValue');
            const clearTimeBtn = document.getElementById('clearTime');
            const timeSliderContainer = document.querySelector('.time-slider-container');
            
            // Other clear buttons
            const clearStopsBtn = document.getElementById('clearStops');
            const clearBaggageBtn = document.getElementById('clearBaggage');
            const resetAllBtn = document.getElementById('resetAll');
            
            // Price range
            const minPrice = 0;
            const maxPrice = 6000;
            let currentPrice = maxPrice;
            
            // Time range
            const minTime = 2;
            const maxTime = 24;
            let currentTime = maxTime;
            
            // Update UI based on price
            function updatePrice(price) {
                currentPrice = price;
                
                // Calculate percentage for positioning
                const percentage = (price / maxPrice) * 100;
                
                // Update thumb and active track position
                sliderThumb.style.left = `${percentage}%`;
                sliderActive.style.width = `${percentage}%`;
                
                // Update price display
                priceValue.textContent = price;
                priceBubble.textContent = `CA$${price}`;
                
                // Position the bubble
                priceBubble.style.left = `${percentage}%`;
            }
            
            // Update UI based on time
            function updateTime(time) {
                currentTime = time;
                
                // Calculate percentage for positioning
                const percentage = (time / maxTime) * 100;
                
                // Update thumb and active track position
                timeSliderThumb.style.left = `${percentage}%`;
                timeSliderActive.style.width = `${percentage}%`;
                
                // Update time display
                timeValue.textContent = time + 'h';
                timeBubble.textContent = time + 'h';
                
                // Position the bubble
                timeBubble.style.left = `${percentage}%`;
            }
            
            // Handle slider thumb drag for price
            let isDraggingPrice = false;
            
            sliderThumb.addEventListener('mousedown', function(e) {
                isDraggingPrice = true;
                document.addEventListener('mousemove', onPriceMouseMove);
                document.addEventListener('mouseup', onPriceMouseUp);
                priceBubble.style.opacity = '1';
                e.preventDefault();
            });
            
            // For touch devices (price)
            sliderThumb.addEventListener('touchstart', function(e) {
                isDraggingPrice = true;
                document.addEventListener('touchmove', onPriceTouchMove);
                document.addEventListener('touchend', onPriceTouchEnd);
                priceBubble.style.opacity = '1';
                e.preventDefault();
            });
            
            function onPriceMouseMove(e) {
                if (!isDraggingPrice) return;
                updatePriceSliderPosition(e.clientX);
            }
            
            function onPriceTouchMove(e) {
                if (!isDraggingPrice) return;
                updatePriceSliderPosition(e.touches[0].clientX);
                e.preventDefault();
            }
            
            function onPriceMouseUp() {
                isDraggingPrice = false;
                document.removeEventListener('mousemove', onPriceMouseMove);
                document.removeEventListener('mouseup', onPriceMouseUp);
            }
            
            function onPriceTouchEnd() {
                isDraggingPrice = false;
                document.removeEventListener('touchmove', onPriceTouchMove);
                document.removeEventListener('touchend', onPriceTouchEnd);
            }
            
            function updatePriceSliderPosition(clientX) {
                // Get slider dimensions
                const sliderRect = sliderContainer.getBoundingClientRect();
                
                // Calculate position within slider (0 to 1)
                let position = (clientX - sliderRect.left) / sliderRect.width;
                
                // Clamp position between 0 and 1
                position = Math.max(0, Math.min(1, position));
                
                // Calculate price
                const price = Math.round(position * maxPrice);
                
                // Update UI
                updatePrice(price);
            }
            
            // Handle slider thumb drag for time
            let isDraggingTime = false;
            
            timeSliderThumb.addEventListener('mousedown', function(e) {
                isDraggingTime = true;
                document.addEventListener('mousemove', onTimeMouseMove);
                document.addEventListener('mouseup', onTimeMouseUp);
                timeBubble.style.opacity = '1';
                e.preventDefault();
            });
            
            // For touch devices (time)
            timeSliderThumb.addEventListener('touchstart', function(e) {
                isDraggingTime = true;
                document.addEventListener('touchmove', onTimeTouchMove);
                document.addEventListener('touchend', onTimeTouchEnd);
                timeBubble.style.opacity = '1';
                e.preventDefault();
            });
            
            function onTimeMouseMove(e) {
                if (!isDraggingTime) return;
                updateTimeSliderPosition(e.clientX);
            }
            
            function onTimeTouchMove(e) {
                if (!isDraggingTime) return;
                updateTimeSliderPosition(e.touches[0].clientX);
                e.preventDefault();
            }
            
            function onTimeMouseUp() {
                isDraggingTime = false;
                document.removeEventListener('mousemove', onTimeMouseMove);
                document.removeEventListener('mouseup', onTimeMouseUp);
            }
            
            function onTimeTouchEnd() {
                isDraggingTime = false;
                document.removeEventListener('touchmove', onTimeTouchMove);
                document.removeEventListener('touchend', onTimeTouchEnd);
            }
            
            function updateTimeSliderPosition(clientX) {
                // Get slider dimensions
                const sliderRect = timeSliderContainer.getBoundingClientRect();
                
                // Calculate position within slider (0 to 1)
                let position = (clientX - sliderRect.left) / sliderRect.width;
                
                // Clamp position between 0 and 1
                position = Math.max(0, Math.min(1, position));
                
                // Calculate time (between min and max)
                const time = Math.round(minTime + position * (maxTime - minTime));
                
                // Update UI
                updateTime(time);
            }
            
            // Click on price slider track to set position
            sliderContainer.addEventListener('click', function(e) {
                // Ignore if the click was on the thumb
                if (e.target === sliderThumb) return;
                
                updatePriceSliderPosition(e.clientX);
            });
            
            // Click on time slider track to set position
            timeSliderContainer.addEventListener('click', function(e) {
                // Ignore if the click was on the thumb
                if (e.target === timeSliderThumb) return;
                
                updateTimeSliderPosition(e.clientX);
            });
            
            // Clear price button
            clearPriceBtn.addEventListener('click', function() {
                updatePrice(maxPrice);
            });
            
            // Clear time button
            clearTimeBtn.addEventListener('click', function() {
                updateTime(maxTime);
            });
            
            // Clear stops button
            clearStopsBtn.addEventListener('click', function() {
                document.querySelectorAll('.stops-options .checkbox-input').forEach(checkbox => {
                    checkbox.checked = true;
                });
            });
            
            // Clear baggage button
            clearBaggageBtn.addEventListener('click', function() {
                document.querySelectorAll('.baggage-options .checkbox-input').forEach(checkbox => {
                    checkbox.checked = false;
                });
                // Set cabin baggage to checked by default
                document.querySelector('.baggage-options .checkbox-input[value="cabin"]').checked = true;
            });
            
            // Reset all button
            resetAllBtn.addEventListener('click', function() {
                // Reset price
                updatePrice(maxPrice);
                
                // Reset time
                updateTime(maxTime);
                
                // Reset sort
                document.querySelector('.sort-options .radio-input[value="best"]').checked = true;
                
                // Reset stops
                document.querySelectorAll('.stops-options .checkbox-input').forEach(checkbox => {
                    checkbox.checked = true;
                });
                
                // Reset baggage
                document.querySelectorAll('.baggage-options .checkbox-input').forEach(checkbox => {
                    checkbox.checked = false;
                });
                document.querySelector('.baggage-options .checkbox-input[value="cabin"]').checked = true;
            });
            
            // Initialize with default values
            updatePrice(currentPrice);
            updateTime(currentTime);
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
      
<div className="filter-card">
<div className="header">
<h2>Filters</h2>
<button className="reset-btn" id="resetAll">Reset</button>
</div>
<div className="separator"></div>

<div className="section">
<h3 className="section-title">Sort by</h3>
<div className="sort-options">
<label className="sort-option">
<div className="radio-container">
<input checked className="radio-input" name="sort" type="radio" value="best" />
<span className="radio-checkmark"></span>
</div>
<span className="option-label">Best</span>
</label>
<label className="sort-option">
<div className="radio-container">
<input className="radio-input" name="sort" type="radio" value="cheapest" />
<span className="radio-checkmark"></span>
</div>
<span className="option-label">Cheapest</span>
</label>
<label className="sort-option">
<div className="radio-container">
<input className="radio-input" name="sort" type="radio" value="fastest" />
<span className="radio-checkmark"></span>
</div>
<span className="option-label">Fastest</span>
</label>
</div>
</div>
<div className="separator"></div>

<div className="section">
<div className="section-title">
<h3>Price</h3>
<button className="clear-btn" id="clearPrice">Clear</button>
</div>
<div className="section-content">
<div className="price-label">Up to CA$<span id="priceValue">6000</span></div>
</div>
<div className="slider-container">
<div className="slider-track"></div>
<div className="slider-track-active" id="sliderActive"></div>
<div className="slider-thumb" id="sliderThumb"></div>
<div className="price-bubble" id="priceBubble">CA$6000</div>
</div>
</div>
<div className="separator"></div>

<div className="section">
<div className="section-title">
<h3>Stops</h3>
<button className="clear-btn" id="clearStops">Clear</button>
</div>
<div className="stops-options">
<label className="stops-option">
<div className="checkbox-container">
<input checked className="checkbox-input" type="checkbox" value="direct" />
<span className="checkbox-checkmark"></span>
</div>
<span className="option-label">Direct</span>
</label>
<label className="stops-option">
<div className="checkbox-container">
<input checked className="checkbox-input" type="checkbox" value="1stop" />
<span className="checkbox-checkmark"></span>
</div>
<span className="option-label">1 stop</span>
</label>
<label className="stops-option">
<div className="checkbox-container">
<input checked className="checkbox-input" type="checkbox" value="2plus" />
<span className="checkbox-checkmark"></span>
</div>
<span className="option-label">2+ stops</span>
</label>
</div>
</div>
<div className="separator"></div>

<div className="section">
<div className="section-title">
<h3>Travel time</h3>
<button className="clear-btn" id="clearTime">Clear</button>
</div>
<div className="section-content">
<div className="time-label">Up to <span id="timeValue">24h</span></div>
</div>
<div className="time-slider-container">
<div className="slider-track"></div>
<div className="slider-track-active" id="timeSliderActive"></div>
<div className="slider-thumb" id="timeSliderThumb"></div>
<div className="price-bubble" id="timeBubble">24h</div>
</div>
</div>
<div className="separator"></div>

<div className="section">
<div className="section-title">
<h3>Baggage</h3>
<button className="clear-btn" id="clearBaggage">Clear</button>
</div>
<div className="baggage-options">
<label className="stops-option">
<div className="checkbox-container">
<input checked className="checkbox-input" type="checkbox" value="cabin" />
<span className="checkbox-checkmark"></span>
</div>
<span className="option-label">Cabin baggage included</span>
</label>
<label className="stops-option">
<div className="checkbox-container">
<input className="checkbox-input" type="checkbox" value="checked" />
<span className="checkbox-checkmark"></span>
</div>
<span className="option-label">Checked baggage included</span>
</label>
</div>
</div>
<button className="search-button">Search Flights</button>
</div>


    </>
  );
}
