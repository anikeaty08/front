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
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
neutral: {
850: '#1f1f1f',
900: '#171717',
950: '#0a0a0a',
}
}
}
}
}



        // List of Indian States
        const indianStates = [
            "Andaman and Nicobar Islands", "Andhra Pradesh", "Arunachal Pradesh", "Assam", "Bihar", 
            "Chandigarh", "Chhattisgarh", "Dadra and Nagar Haveli", "Daman and Diu", "Delhi", "Goa", 
            "Gujarat", "Haryana", "Himachal Pradesh", "Jammu and Kashmir", "Jharkhand", "Karnataka", 
            "Kerala", "Ladakh", "Lakshadweep", "Madhya Pradesh", "Maharashtra", "Manipur", "Meghalaya", 
            "Mizoram", "Nagaland", "Odisha", "Puducherry", "Punjab", "Rajasthan", "Sikkim", "Tamil Nadu", 
            "Telangana", "Tripura", "Uttar Pradesh", "Uttarakhand", "West Bengal"
        ];

        // Populate State Dropdown
        const stateSelect = document.getElementById('state');
        indianStates.forEach(state => {
            const option = document.createElement('option');
            option.value = state;
            option.textContent = state;
            stateSelect.appendChild(option);
        });

        // Price Calculation Logic
        const deliveryCharge = 60;
        const gstRate = 0.03;

        function formatCurrency(amount) {
            return "₹" + amount.toLocaleString('en-IN', { minimumFractionDigits: 2, maximumFractionDigits: 2 });
        }

        function updateTotal() {
            // Get selected product price
            const selectedRadio = document.querySelector('input[name="product"]:checked');
            const price = parseFloat(selectedRadio.getAttribute('data-price'));
            
            // Calculate components
            const gstAmount = price * gstRate;
            const total = price + gstAmount + deliveryCharge;

            // Update DOM
            document.getElementById('summary-subtotal').textContent = formatCurrency(price);
            document.getElementById('summary-gst').textContent = formatCurrency(gstAmount);
            document.getElementById('summary-delivery').textContent = formatCurrency(deliveryCharge);
            document.getElementById('summary-total').textContent = formatCurrency(total);

            return { price, gstAmount, total };
        }

        // Initialize totals on load
        window.addEventListener('DOMContentLoaded', updateTotal);

        // Handle Form Submission
        function handleOrder(e) {
            e.preventDefault();
            
            // Gather Data
            const formData = new FormData(e.target);
            const data = Object.fromEntries(formData.entries());
            const financials = updateTotal();
            
            // Construct Email Body
            const emailSubject = `Order: ${data.product} - ${data.name}`;
            const emailBody = `
NEW ORDER DETAILS
-------------------
Product: ${data.product}
Subtotal: ${formatCurrency(financials.price)}
GST (3%): ${formatCurrency(financials.gstAmount)}
Delivery: ${formatCurrency(deliveryCharge)}
TOTAL: ${formatCurrency(financials.total)}

CUSTOMER INFO
-------------------
Name: ${data.name}
Phone: ${data.phone}
Address Type: ${data.addressType}
Address: ${data.address}
Town: ${data.town}
City: ${data.city}
Pincode: ${data.pincode}
State: ${data.state}
Country: India

Sent from Migo Labs Checkout
            `;

            const mailtoLink = `mailto:migolabs.in@gmail.com?subject=${encodeURIComponent(emailSubject)}&body=${encodeURIComponent(emailBody)}`;

            // Start Animation Sequence
            playAnimation(mailtoLink);
        }

        function playAnimation(mailtoLink) {
            const formCard = document.getElementById('order-card');
            const header = document.getElementById('header-section');
            const animContainer = document.getElementById('animation-container');
            const box = document.getElementById('anim-box');
            const truck = document.getElementById('anim-truck');
            const speedLines = document.getElementById('speed-lines');
            const statusText = document.getElementById('status-text');
            const subStatus = document.getElementById('sub-status');
            const successMsg = document.getElementById('success-msg');

            formCard.style.opacity = '0';
            formCard.style.transform = 'translateY(20px)';
            header.style.opacity = '0';

            setTimeout(() => {
                animContainer.classList.remove('hidden');
                
                box.classList.add('animate-box-load');
                
                setTimeout(() => {
                    statusText.textContent = "Dispatching...";
                    subStatus.textContent = "Truck is leaving the warehouse";
                    
                    truck.classList.add('animate-truck-drive');
                    speedLines.style.opacity = '1'; 
                    
                    setTimeout(() => {
                        box.style.display = 'none';
                        truck.style.display = 'none';
                        speedLines.style.display = 'none';
                        statusText.style.display = 'none';
                        subStatus.style.display = 'none';

                        successMsg.classList.remove('hidden');
                        
                        setTimeout(() => {
                           window.location.href = mailtoLink; 
                        }, 1000);

                    }, 2500); 
                }, 2000); 
            }, 500);
        }
    
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
      

<a className="absolute top-6 left-6 md:top-8 md:left-8 z-20 font-medium text-xs tracking-tight text-neutral-500 hover:text-white transition-colors" href="#">migolabs.in</a>

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-0 left-0 w-full h-96 bg-gradient-to-b from-neutral-900/20 to-transparent"></div>
<div className="absolute bottom-0 right-0 w-96 h-96 bg-neutral-900/10 rounded-full blur-3xl"></div>
</div>

<div className="z-10 w-full max-w-2xl relative h-screen md:h-auto overflow-y-auto md:overflow-visible no-scrollbar pb-20 md:pb-0">

<div className="mt-8 md:mt-0 mb-8 text-center" id="header-section">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl bg-neutral-900 border border-neutral-800 mb-4 shadow-lg shadow-black/50">
<span className="font-semibold text-lg tracking-tighter text-white">M</span>
</div>
<h1 className="text-2xl font-medium tracking-tight text-white mb-2">Checkout</h1>
<p className="text-neutral-500 text-sm">Select your product and complete delivery details.</p>
</div>

<div className="overflow-hidden transition-all duration-500 transform bg-neutral-900/40 opacity-100 border-neutral-800 border rounded-2xl shadow-2xl backdrop-blur-md translate-y-0" id="order-card">

<div className="h-1 w-full bg-neutral-800">
<div className="h-full w-3/4 bg-white/10"></div>
</div>
<form className="md:p-8 pt-6 pr-6 pb-6 pl-6 space-y-6" id="orderForm" onsubmit="handleOrder(event)">

<div className="space-y-3">
<label className="text-xs font-medium text-neutral-400 ml-1 uppercase tracking-wider">Product</label>
<div className="grid grid-cols-1 gap-3">

<label className="cursor-pointer relative group">
<input checked="" className="peer sr-only product-radio" data-price="1199" name="product" onchange="updateTotal()" type="radio" value="Yuzu Bot"/>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 transition-all flex justify-between items-center group-hover:border-neutral-700">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-neutral-900 flex items-center justify-center border border-neutral-800 text-neutral-400">
<iconify-icon icon="lucide:bot" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">Yuzu Bot</div>
<div className="text-xs text-neutral-500">Standard Automation</div>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-white">₹1,199</span>
<iconify-icon className="check-icon text-white opacity-0 transform scale-50 transition-all absolute top-1/2 -translate-y-1/2 right-4" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</div>
</label>

<label className="cursor-pointer relative group">
<input className="peer sr-only product-radio" data-price="1999" name="product" onchange="updateTotal()" type="radio" value="AI Talkgo Bot"/>
<div className="p-4 rounded-xl border border-neutral-800 bg-neutral-950 transition-all flex justify-between items-center group-hover:border-neutral-700">
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center border border-indigo-500/20 text-indigo-400">
<iconify-icon icon="lucide:sparkles" strokeWidth="1.5" width="20"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-white">AI Talkgo Bot</div>
<div className="text-xs text-neutral-500">Advanced AI Integration</div>
</div>
</div>
<div className="text-right">
<span className="block text-sm font-medium text-white">₹1,999</span>
<iconify-icon className="check-icon text-white opacity-0 transform scale-50 transition-all absolute top-1/2 -translate-y-1/2 right-4" icon="lucide:check-circle-2" width="16"></iconify-icon>
</div>
</div>
</label>
</div>
</div>
<div className="h-px bg-neutral-800 w-full"></div>

<div className="space-y-4">
<label className="text-xs font-medium text-neutral-400 ml-1 uppercase tracking-wider">Shipping Details</label>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="name">Full Name</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:user" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-9 pr-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all" id="name" name="name" placeholder="John Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="phone">Phone Number</label>
<div className="relative group">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500 group-focus-within:text-neutral-300 transition-colors">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="16"></iconify-icon>
</div>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 pl-9 pr-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all" id="phone" name="phone" pattern="[0-9]{10}" placeholder="98765 43210" required="" type="tel"/>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1">Address Type</label>
<div className="grid grid-cols-2 gap-3">
<label className="cursor-pointer relative">
<input checked="" className="peer sr-only address-type-radio" name="addressType" type="radio" value="Home"/>
<div className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-500 hover:bg-neutral-900 transition-all duration-200">
<iconify-icon icon="lucide:home" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Home</span>
</div>
</label>
<label className="cursor-pointer relative">
<input className="peer sr-only address-type-radio" name="addressType" type="radio" value="Office"/>
<div className="flex items-center justify-center gap-2 py-2.5 rounded-lg border border-neutral-800 bg-neutral-950 text-neutral-500 hover:bg-neutral-900 transition-all duration-200">
<iconify-icon icon="lucide:building-2" strokeWidth="1.5" width="16"></iconify-icon>
<span className="text-xs font-medium">Office</span>
</div>
</label>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="address">Street Address</label>
<textarea className="w-full bg-neutral-950 border border-neutral-800 rounded-lg p-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all resize-none" id="address" name="address" placeholder="Flat No, Building, Street Area" required="" rows="2"></textarea>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 gap-4">
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="pincode">Pincode</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 px-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all" id="pincode" name="pincode" pattern="[0-9]{6}" placeholder="560001" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="town">Town</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 px-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all" id="town" name="town" placeholder="Koramangala" required="" type="text"/>
</div>
<div className="space-y-1.5 col-span-2 md:col-span-1">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="city">City</label>
<input className="w-full bg-neutral-950 border border-neutral-800 rounded-lg py-2.5 px-3 text-sm text-neutral-200 placeholder-neutral-700 transition-all" id="city" name="city" placeholder="Bengaluru" required="" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="state">State</label>
<div className="relative">
<select className="appearance-none focus:ring-0 transition-all cursor-pointer text-sm text-neutral-200 bg-neutral-950 w-full border-neutral-800 border rounded-lg pt-2.5 pr-8 pb-2.5 pl-3" id="state" name="state" required="">
<option disabled="" selected="" value="">Select State</option>

</select>
<div className="absolute inset-y-0 right-0 flex items-center px-2 pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:chevron-down" strokeWidth="1.5" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="space-y-1.5">
<label className="text-[11px] font-medium text-neutral-500 ml-1" htmlFor="country">Country</label>
<div className="relative">
<input className="w-full bg-neutral-900 border border-neutral-800 rounded-lg py-2.5 pl-9 pr-3 text-sm text-neutral-400 cursor-not-allowed select-none" id="country" name="country" readonly="" type="text" value="India"/>
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="lucide:flag" strokeWidth="1.5" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</div>

<div className="mt-8 pt-6 border-t border-neutral-800">
<label className="text-xs font-medium text-neutral-400 uppercase tracking-wider">Order Summary</label>
<div className="mt-3 p-4 rounded-xl bg-neutral-950/50 border border-neutral-800 space-y-3">
<div className="flex justify-between text-xs text-neutral-400">
<span>Subtotal</span>
<span className="font-medium text-neutral-300" id="summary-subtotal">₹1,199.00</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>GST (3%)</span>
<span className="font-medium text-neutral-300" id="summary-gst">₹35.97</span>
</div>
<div className="flex justify-between text-xs text-neutral-400">
<span>Delivery Charges</span>
<span className="font-medium text-neutral-300" id="summary-delivery">₹60.00</span>
</div>
<div className="pt-3 mt-1 border-t border-neutral-800 flex justify-between items-center">
<span className="text-sm font-medium text-white">Total</span>
<span className="text-xl font-semibold text-white tracking-tight" id="summary-total">₹1,294.97</span>
</div>
</div>
</div>

<div className="pt-2">
<button className="w-full group relative flex items-center justify-center gap-2 bg-white hover:bg-neutral-200 text-black font-medium py-3 rounded-lg transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)] hover:shadow-[0_0_25px_rgba(255,255,255,0.2)]" type="submit">
<span>Place Order</span>
<iconify-icon className="transition-transform group-hover:translate-x-1" icon="lucide:arrow-right" strokeWidth="1.5" width="16"></iconify-icon>
</button>
<p className="text-center text-[10px] text-neutral-600 mt-3">
                        By placing this order, you agree to our Terms of Service.
                    </p>
</div>
</form>
</div>

<div className="hidden fixed inset-0 z-50 flex flex-col items-center justify-center bg-black/90 backdrop-blur-xl" id="animation-container">
<div className="relative w-80 h-48 flex items-end justify-center overflow-hidden border-b border-neutral-800">
<div className="absolute top-10 w-full h-full opacity-0" id="speed-lines">
<div className="absolute top-4 right-0 w-20 h-[1px] bg-neutral-700 animate-speed-lines" style={{animationDuration: '0.8s'}}></div>
<div className="absolute top-12 right-0 w-32 h-[1px] bg-neutral-800 animate-speed-lines" style={{animationDelay: '0.2s', animationDuration: '0.6s'}}></div>
<div className="absolute top-20 right-0 w-16 h-[1px] bg-neutral-700 animate-speed-lines" style={{animationDelay: '0.5s'}}></div>
</div>
<div className="absolute left-10 bottom-10 z-20 text-indigo-500 opacity-0" id="anim-box">
<iconify-icon height="48" icon="lucide:package" strokeWidth="1.5" width="48"></iconify-icon>
</div>
<div className="absolute left-20 bottom-2 z-10 text-white translate-x-0" id="anim-truck">
<svg fill="none" height="80" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1" viewbox="0 0 24 24" width="120">
<rect height="13" width="15" x="1" y="3"></rect>
<polygon points="16 8 20 8 23 11 23 16 16 16 16 8"></polygon>
<circle cx="5.5" cy="18.5" r="2.5"></circle>
<circle cx="18.5" cy="18.5" r="2.5"></circle>
</svg>
</div>
</div>
<h2 className="mt-8 text-xl font-medium text-white tracking-tight animate-pulse" id="status-text">Processing Order...</h2>
<p className="mt-2 text-sm text-neutral-500" id="sub-status">Calculating taxes</p>
<div className="hidden text-center mt-6" id="success-msg">
<div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-green-500/10 text-green-500 mb-4 border border-green-500/20">
<iconify-icon icon="lucide:check" strokeWidth="1.5" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-medium text-white mb-2">Order Placed!</h3>
<p className="text-neutral-400 text-sm max-w-xs mx-auto mb-6">Your order details have been sent to migolabs.in@gmail.com</p>
<button className="px-6 py-2 bg-neutral-800 hover:bg-neutral-700 text-white text-sm rounded-lg border border-neutral-700 transition-colors" onclick="location.reload()">
                    Place Another
                </button>
</div>
</div>
</div>


    </>
  );
}
