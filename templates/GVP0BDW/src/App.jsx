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



        // Color selection functionality
        const colorOptions = document.getElementById('colorOptions');
        const colorSwatches = colorOptions.querySelectorAll('.color-swatch');
        let selectedColor = 'blue';

        colorSwatches.forEach(swatch => {
            swatch.addEventListener('click', function() {
                // Remove active state from all swatches
                colorSwatches.forEach(s => {
                    s.classList.remove('ring-2', 'ring-offset-2');
                    s.classList.add('border-gray-300');
                    s.removeAttribute('data-active');
                });
                
                // Add active state to clicked swatch
                this.classList.remove('border-gray-300');
                this.classList.add('ring-2', 'ring-offset-2');
                this.setAttribute('data-active', 'true');
                
                const color = this.dataset.color;
                selectedColor = color;
                
                // Update ring color based on selection
                this.classList.remove('ring-red-500', 'ring-blue-500', 'ring-gray-500');
                if (color === 'red') this.classList.add('ring-red-500');
                else if (color === 'blue') this.classList.add('ring-blue-500');
                else if (color === 'gray') this.classList.add('ring-gray-500');
                
                console.log('Selected color:', color);
            });
        });

        // Size selection functionality
        const sizeOptions = document.getElementById('sizeOptions');
        const sizeButtons = sizeOptions.querySelectorAll('.size-btn');
        let selectedSize = '10';

        sizeButtons.forEach(button => {
            button.addEventListener('click', function() {
                // Remove active state from all buttons
                sizeButtons.forEach(btn => {
                    btn.classList.remove('bg-blue-600', 'text-white', 'border-blue-600');
                    btn.classList.add('border-gray-300', 'text-gray-700');
                    btn.removeAttribute('data-active');
                });
                
                // Add active state to clicked button
                this.classList.remove('border-gray-300', 'text-gray-700');
                this.classList.add('bg-blue-600', 'text-white', 'border-blue-600');
                this.setAttribute('data-active', 'true');
                
                selectedSize = this.dataset.size;
                console.log('Selected size:', selectedSize);
            });
        });

        // Add to cart functionality
        const addToCartBtn = document.getElementById('addToCartBtn');
        addToCartBtn.addEventListener('click', function() {
            // Button animation
            this.classList.add('scale-95');
            setTimeout(() => {
                this.classList.remove('scale-95');
            }, 150);
            
            // Simulate adding to cart
            const originalText = this.textContent;
            this.textContent = 'Added to Cart!';
            this.classList.remove('bg-green-600', 'hover:bg-green-700');
            this.classList.add('bg-green-700');
            
            setTimeout(() => {
                this.textContent = originalText;
                this.classList.remove('bg-green-700');
                this.classList.add('bg-green-600', 'hover:bg-green-700');
            }, 1500);
            
            console.log('Added to cart:', {
                product: 'Aura XT-7 Runner',
                color: selectedColor,
                size: selectedSize,
                price: '$189.99'
            });
        });

        // Add hover effects for better UX
        colorSwatches.forEach(swatch => {
            swatch.addEventListener('mouseenter', function() {
                if (!this.hasAttribute('data-active')) {
                    this.style.transform = 'scale(1.1)';
                }
            });
            
            swatch.addEventListener('mouseleave', function() {
                if (!this.hasAttribute('data-active')) {
                    this.style.transform = 'scale(1)';
                }
            });
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
      
<div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden max-w-sm w-full hover:shadow-xl transition-all duration-300 hover:-translate-y-1 product-card">
<div className="overflow-hidden">
<img alt="Running Shoe" className="w-full h-64 object-cover product-image" src="https://images.unsplash.com/photo-1542291026-7eec264c27ff?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
<div className="p-6">
<p className="text-xs uppercase tracking-wide text-gray-500 font-medium mb-2">Running</p>
<h3 className="text-xl font-semibold text-gray-900 mb-4 tracking-tight">Aura XT-7 Runner</h3>
<div className="space-y-4">

<div>
<p className="text-sm font-medium text-gray-900 mb-3">Color</p>
<div className="flex gap-2" id="colorOptions">
<button className="color-swatch w-6 h-6 rounded-full border-2 border-gray-300 transition-all duration-200 hover:scale-110 hover:border-red-500" data-color="red" style={{backgroundColor: '#ef4444'}}></button>
<button className="color-swatch w-6 h-6 rounded-full border-2 border-transparent ring-2 ring-offset-2 ring-blue-500 transition-all duration-200 hover:scale-110" data-active="true" data-color="blue" style={{backgroundColor: '#3b82f6'}}></button>
<button className="color-swatch w-6 h-6 rounded-full border-2 border-gray-300 transition-all duration-200 hover:scale-110 hover:border-gray-700" data-color="gray" style={{backgroundColor: '#374151'}}></button>
</div>
</div>

<div>
<p className="text-sm font-medium text-gray-900 mb-3">Size</p>
<div className="flex gap-2" id="sizeOptions">
<button className="size-btn px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50" data-size="9">9</button>
<button className="size-btn px-4 py-2 bg-blue-600 text-white border border-blue-600 rounded-lg text-sm font-medium transition-all duration-200" data-active="true" data-size="10">10</button>
<button className="size-btn px-4 py-2 border border-gray-300 rounded-lg text-sm font-medium text-gray-700 transition-all duration-200 hover:border-gray-400 hover:bg-gray-50" data-size="11">11</button>
</div>
</div>
</div>
<button className="w-full mt-6 bg-green-600 hover:bg-green-700 text-white font-medium py-3 px-4 rounded-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2" id="addToCartBtn">
                Add to Cart - $189.99
            </button>
</div>
</div>


    </>
  );
}
