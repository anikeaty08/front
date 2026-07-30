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
      

<div className="flex flex-col justify-center items-center h-screen bg-gradient-to-b from-blue-600 to-blue-400">
<div className="mb-6">
<img alt="Electric Logo" className="w-24 h-24 mx-auto" src="https://img.icons8.com/ios-filled/100/ffffff/electrical.png" />
</div>
<h1 className="text-white text-3xl font-bold mb-2">Shree Electric Works</h1>
<p className="text-blue-100 text-lg mb-8">Your One-Stop Electrical Solution</p>
<div className="flex gap-4">
<button className="bg-white text-blue-700 font-semibold rounded-xl px-6 py-2 shadow-md">Login</button>
<button className="bg-blue-700 text-white font-semibold rounded-xl px-6 py-2 shadow-md">Sign Up</button>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen flex flex-col justify-center px-6 bg-white">
<div className="flex flex-col items-center mb-8">
<img className="mb-4" src="https://img.icons8.com/ios-filled/80/007BFF/electrical.png" />
<h2 className="text-2xl font-bold text-blue-700 mb-1">Welcome Back</h2>
<p className="text-gray-500 text-sm mb-2">Login to Shree Electric Works</p>
</div>
<form className="space-y-4">
<div>
<label className="block text-gray-600 mb-1 font-medium">Email or Phone</label>
<input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Enter email or phone" type="text" />
</div>
<div>
<label className="block text-gray-600 mb-1 font-medium">OTP</label>
<input className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:ring-2 focus:ring-blue-500" placeholder="Enter OTP" type="text" />
<span className="text-xs text-red-500 mt-1">Invalid OTP. Please try again.</span>
</div>
<button className="w-full bg-blue-600 text-white rounded-xl py-2 font-bold hover:bg-blue-700">Login</button>
<button className="w-full flex items-center justify-center gap-2 border border-gray-200 rounded-xl py-2 font-semibold text-gray-700 bg-white shadow-sm">
<img alt="Google" src="https://img.icons8.com/color/24/000000/google-logo.png" />
          Login with Google
        </button>
</form>
<div className="flex justify-between mt-4 text-sm">
<a className="text-blue-600" href="#">Sign Up</a>
<a className="text-blue-600" href="#">Forgot Password?</a>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4">

<div className="flex items-center justify-between py-4">
<h1 className="text-xl font-bold text-blue-700">Shree Electric Works</h1>
<button>
<img src="https://img.icons8.com/ios-filled/24/007BFF/user-male-circle.png" />
</button>
</div>

<div className="flex items-center bg-gray-100 rounded-xl px-3 py-2 mb-4">
<img src="https://img.icons8.com/ios-glyphs/20/007BFF/search--v1.png" />
<input className="flex-1 bg-transparent outline-none px-2 text-gray-700" placeholder="Search for products" type="text" />
</div>

<div className="w-full rounded-2xl bg-gradient-to-r from-blue-500 to-blue-600 text-white mb-4 shadow-md px-5 py-4 flex items-center">
<img className="mr-4" src="https://img.icons8.com/ios-filled/36/ffffff/flash-on.png" />
<div>
<h3 className="text-lg font-bold">Super Saver Deals!</h3>
<p className="text-sm">Up to 40% off on best sellers</p>
</div>
</div>

<div>
<h2 className="text-lg font-semibold mb-2">Categories</h2>
<div className="grid grid-cols-4 gap-3 mb-4">
<div className="bg-blue-50 rounded-xl flex flex-col items-center py-3">
<img src="https://img.icons8.com/ios-filled/32/007BFF/light-on.png" />
<span className="text-xs mt-2 font-medium text-blue-700">Bulbs</span>
</div>
<div className="bg-blue-50 rounded-xl flex flex-col items-center py-3">
<img src="https://img.icons8.com/ios-filled/32/007BFF/electrical.png" />
<span className="text-xs mt-2 font-medium text-blue-700">Switches</span>
</div>
<div className="bg-blue-50 rounded-xl flex flex-col items-center py-3">
<img src="https://img.icons8.com/ios-filled/32/007BFF/plugs.png" />
<span className="text-xs mt-2 font-medium text-blue-700">Sockets</span>
</div>
<div className="bg-blue-50 rounded-xl flex flex-col items-center py-3">
<img src="https://img.icons8.com/ios-filled/32/007BFF/fan.png" />
<span className="text-xs mt-2 font-medium text-blue-700">Fans</span>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-semibold mb-2">Featured Products</h2>
<div className="grid grid-cols-2 gap-4 mb-4">
<div className="bg-white rounded-xl shadow p-2">
<img className="w-16 h-16 mx-auto mb-2" src="https://img.icons8.com/ios-filled/48/007BFF/led-bulb.png" />
<h3 className="text-sm font-bold text-gray-700">LED Bulb 9W</h3>
<p className="text-blue-700 font-semibold">₹99</p>
<button className="w-full mt-2 bg-blue-600 text-white rounded-lg py-1 text-xs font-bold">Add to Cart</button>
</div>
<div className="bg-white rounded-xl shadow p-2">
<img className="w-16 h-16 mx-auto mb-2" src="https://img.icons8.com/ios-filled/48/007BFF/electric-plug.png" />
<h3 className="text-sm font-bold text-gray-700">Plug Socket</h3>
<p className="text-blue-700 font-semibold">₹150</p>
<button className="w-full mt-2 bg-blue-600 text-white rounded-lg py-1 text-xs font-bold">Add to Cart</button>
</div>
</div>
</div>

<div>
<h2 className="text-lg font-semibold mb-2">Best Sellers</h2>
<div className="flex space-x-4 overflow-x-auto pb-2">
<div className="min-w-[120px] bg-white rounded-xl shadow p-2 flex-shrink-0">
<img className="mx-auto mb-1" src="https://img.icons8.com/ios-filled/48/007BFF/switch-on.png" />
<h3 className="text-xs font-bold text-gray-700">Switch 5A</h3>
<p className="text-blue-600 font-semibold text-xs">₹59</p>
</div>
<div className="min-w-[120px] bg-white rounded-xl shadow p-2 flex-shrink-0">
<img className="mx-auto mb-1" src="https://img.icons8.com/ios-filled/48/007BFF/ceiling-fan.png" />
<h3 className="text-xs font-bold text-gray-700">Ceiling Fan</h3>
<p className="text-blue-600 font-semibold text-xs">₹1299</p>
</div>
<div className="min-w-[120px] bg-white rounded-xl shadow p-2 flex-shrink-0">
<img className="mx-auto mb-1" src="https://img.icons8.com/ios-filled/48/007BFF/plug.png" />
<h3 className="text-xs font-bold text-gray-700">Plug Top</h3>
<p className="text-blue-600 font-semibold text-xs">₹39</p>
</div>
</div>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen px-4 py-4 bg-white">

<div className="flex items-center justify-between mb-2">
<div className="flex gap-2">
<button className="bg-blue-50 text-blue-700 rounded-lg px-3 py-1 text-xs font-medium flex items-center">
<img className="mr-1" src="https://img.icons8.com/ios-filled/16/007BFF/filter.png" />
            Filter
          </button>
<button className="bg-gray-100 text-gray-700 rounded-lg px-3 py-1 text-xs font-medium flex items-center">
<img className="mr-1" src="https://img.icons8.com/ios-filled/16/666666/sort.png" />
            Sort
          </button>
</div>
<span className="text-xs text-gray-400">15 Products</span>
</div>

<div className="grid grid-cols-2 gap-4">
<div className="bg-white rounded-xl shadow p-2">
<img className="mx-auto mb-2" src="https://img.icons8.com/ios-filled/48/007BFF/light-on.png" />
<h3 className="text-sm font-bold text-gray-700">Philips Bulb</h3>
<p className="text-blue-700 font-semibold">₹120</p>
<button className="w-full mt-2 bg-blue-600 text-white rounded-lg py-1 text-xs font-bold">Add to Cart</button>
</div>
<div className="bg-white rounded-xl shadow p-2">
<img className="mx-auto mb-2" src="https://img.icons8.com/ios-filled/48/007BFF/switch-on.png" />
<h3 className="text-sm font-bold text-gray-700">Anchor Switch</h3>
<p className="text-blue-700 font-semibold">₹45</p>
<button className="w-full mt-2 bg-blue-600 text-white rounded-lg py-1 text-xs font-bold">Add to Cart</button>
</div>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4 py-4">

<div className="mb-4">
<div className="relative">
<img className="rounded-xl mx-auto" src="https://img.icons8.com/ios-filled/120/007BFF/light-on.png" />
<div className="absolute bottom-2 right-2 bg-white/80 px-2 py-1 rounded text-xs text-blue-600 font-bold">1/3</div>
</div>
</div>
<h2 className="text-xl font-bold text-gray-800 mb-1">LED Bulb 9W</h2>
<p className="text-blue-700 font-semibold text-lg mb-1">₹99</p>
<span className="inline-block bg-green-100 text-green-700 px-2 py-0.5 rounded text-xs font-semibold mb-2">In Stock</span>
<p className="text-gray-500 text-sm mb-3">Energy efficient 9W LED bulb with 2 years warranty. Ideal for home and office use.</p>
<div className="flex gap-3 mb-4">
<button className="flex-1 bg-blue-600 text-white rounded-xl py-2 font-bold">Add to Cart</button>
<button className="flex-1 border border-blue-600 text-blue-600 rounded-xl py-2 font-bold">Buy Now</button>
</div>
<div>
<div className="flex border-b mb-2">
<button className="flex-1 py-2 text-blue-600 font-bold border-b-2 border-blue-600">Specifications</button>
<button className="flex-1 py-2 text-gray-500 font-semibold">Reviews</button>
<button className="flex-1 py-2 text-gray-500 font-semibold">Related</button>
</div>
<div className="p-2">
<ul className="text-sm text-gray-600 list-disc ml-4">
<li>Power: 9W</li>
<li>Warranty: 2 Years</li>
<li>Brand: Philips</li>
<li>Color: Cool White</li>
</ul>
</div>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4 py-4">
<h2 className="text-xl font-bold text-blue-700 mb-4">Shopping Cart</h2>
<div className="space-y-3">
<div className="flex items-center bg-gray-50 rounded-xl p-3">
<img className="w-10 h-10 mr-3" src="https://img.icons8.com/ios-filled/48/007BFF/light-on.png" />
<div className="flex-1">
<h3 className="font-bold text-gray-700">LED Bulb 9W</h3>
<div className="flex items-center text-xs text-gray-500 mt-1">
<span>Qty: </span>
<input className="w-10 border rounded ml-2 px-2 py-0.5 text-center" type="number" value="1" />
</div>
</div>
<div>
<p className="font-bold text-blue-700">₹99</p>
<button className="text-xs text-red-500 mt-1">Remove</button>
</div>
</div>
<div className="flex items-center bg-gray-50 rounded-xl p-3">
<img className="w-10 h-10 mr-3" src="https://img.icons8.com/ios-filled/48/007BFF/switch-on.png" />
<div className="flex-1">
<h3 className="font-bold text-gray-700">Anchor Switch</h3>
<div className="flex items-center text-xs text-gray-500 mt-1">
<span>Qty: </span>
<input className="w-10 border rounded ml-2 px-2 py-0.5 text-center" type="number" value="2" />
</div>
</div>
<div>
<p className="font-bold text-blue-700">₹90</p>
<button className="text-xs text-red-500 mt-1">Remove</button>
</div>
</div>
</div>
<div className="mt-6 mb-3">
<input className="w-full border border-gray-300 rounded-lg px-3 py-2" placeholder="Apply Promo Code" type="text" />
</div>
<div className="bg-gray-100 rounded-xl p-4 mb-4">
<div className="flex justify-between text-sm mb-1">
<span>Subtotal</span>
<span>₹189</span>
</div>
<div className="flex justify-between text-sm mb-1">
<span>GST (5%)</span>
<span>₹9.45</span>
</div>
<div className="flex justify-between text-base font-bold">
<span>Total</span>
<span>₹198.45</span>
</div>
</div>
<button className="w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-lg">Checkout</button>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4 py-4">
<h2 className="text-xl font-bold text-blue-700 mb-4">Checkout</h2>
<div className="mb-4">
<label className="font-medium text-gray-700">Select Address</label>
<select className="w-full border rounded-lg py-2 px-3 mt-1">
<option>Home, 123 Main St</option>
<option>Office, 221B Baker St</option>
</select>
<button className="text-xs text-blue-600 mt-1">+ Add New Address</button>
</div>
<div className="mb-4">
<label className="font-medium text-gray-700">Payment Method</label>
<div className="flex gap-3 mt-1">
<button className="flex-1 border-2 border-blue-600 rounded-lg py-2 font-bold text-blue-700 bg-blue-50 flex items-center justify-center gap-1">
<img src="https://img.icons8.com/ios-filled/20/007BFF/bank-cards.png" />
            Card
          </button>
<button className="flex-1 border border-gray-300 rounded-lg py-2 font-bold text-gray-600 flex items-center justify-center gap-1">
<img src="https://img.icons8.com/ios-filled/20/007BFF/upi.png" />
            UPI
          </button>
<button className="flex-1 border border-gray-300 rounded-lg py-2 font-bold text-gray-600 flex items-center justify-center gap-1">
<img src="https://img.icons8.com/ios-filled/20/007BFF/money.png" />
            COD
          </button>
</div>
</div>
<button className="w-full bg-blue-600 text-white rounded-xl py-3 font-bold text-lg mt-6">Place Order</button>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4 py-4">
<h2 className="text-xl font-bold text-blue-700 mb-4">Order Tracking</h2>
<div className="flex flex-col items-center mb-6">
<div className="flex items-center">
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">1</div>
<span className="text-xs font-semibold text-blue-700 mt-1">Confirmed</span>
</div>
<div className="w-10 h-1 bg-blue-600 mx-1"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-blue-600 text-white flex items-center justify-center rounded-full font-bold">2</div>
<span className="text-xs font-semibold text-blue-700 mt-1">Shipped</span>
</div>
<div className="w-10 h-1 bg-gray-300 mx-1"></div>
<div className="flex flex-col items-center">
<div className="w-8 h-8 bg-gray-200 text-gray-400 flex items-center justify-center rounded-full font-bold">3</div>
<span className="text-xs font-semibold text-gray-400 mt-1">Delivered</span>
</div>
</div>
<p className="text-xs text-gray-600 mt-4">Estimated Delivery: 2 days</p>
</div>
<div className="bg-blue-50 rounded-xl p-4">
<h3 className="font-bold text-blue-700 mb-1">Track in Real Time</h3>
<p className="text-sm text-gray-600">Courier: Delhivery | AWB: 123456789</p>
<a className="text-blue-600 text-xs font-semibold underline mt-2 inline-block" href="#">Track Package</a>
</div>
</div>

<div className="max-w-md mx-auto min-h-screen bg-white px-4 py-4">
<div className="flex flex-col items-center mb-6">
<img className="w-20 h-20 rounded-full mb-2 border-4 border-blue-200" src="https://img.icons8.com/ios-filled/64/007BFF/user-male-circle.png" />
<h3 className="font-bold text-xl text-blue-700">Amit Sharma</h3>
<span className="text-gray-500 text-sm mb-2">amit@email.com</span>
<button className="bg-blue-100 text-blue-700 rounded-lg px-4 py-1 text-sm font-bold">Edit Profile</button>
</div>
<div className="space-y-3">
<a className="flex items-center bg-gray-50 rounded-xl px-4 py-3 text-blue-700 font-semibold gap-3" href="#">
<img src="https://img.icons8.com/ios-filled/24/007BFF/shopping-bag.png" /> My Orders
        </a>
<a className="flex items-center bg-gray-50 rounded-xl px-4 py-3 text-blue-700 font-semibold gap-3" href="#">
<img src="https://img.icons8.com/ios-filled/24/007BFF/like.png" /> Wishlist
        </a>
<a className="flex items-center bg-gray-50 rounded-xl px-4 py-3 text-blue-700 font-semibold gap-3" href="#">
<img src="https://img.icons8.com/ios-filled/24/007BFF/address.png" /> Saved Addresses
        </a>
<a className="flex items-center bg-gray-50 rounded-xl px-4 py-3 text-blue-700 font-semibold gap-3" href="#">
<img src="https://img.icons8.com/ios-filled/24/007BFF/settings.png" /> Settings
        </a>
<a className="flex items-center bg-gray-50 rounded-xl px-4 py-3 text-red-500 font-semibold gap-3" href="#">
<img src="https://img.icons8.com/ios-filled/24/fa314a/exit.png" /> Logout
        </a>
</div>
</div>

<nav className="fixed bottom-0 left-0 right-0 max-w-md mx-auto bg-white border-t shadow-lg flex justify-between px-8 py-2 z-50 rounded-t-2xl">
<a className="flex flex-col items-center text-blue-700 font-bold" href="#">
<img src="https://img.icons8.com/ios-filled/24/007BFF/home.png" />
<span className="text-xs mt-1">Home</span>
</a>
<a className="flex flex-col items-center text-gray-500 font-semibold" href="#">
<img src="https://img.icons8.com/ios-filled/24/cccccc/grid-2.png" />
<span className="text-xs mt-1">Categories</span>
</a>
<a className="flex flex-col items-center text-gray-500 font-semibold" href="#">
<img src="https://img.icons8.com/ios-filled/24/cccccc/shopping-cart.png" />
<span className="text-xs mt-1">Cart</span>
</a>
<a className="flex flex-col items-center text-gray-500 font-semibold" href="#">
<img src="https://img.icons8.com/ios-filled/24/cccccc/user-male-circle.png" />
<span className="text-xs mt-1">Profile</span>
</a>
</nav>

<div className="fixed inset-0 bg-black bg-opacity-30 flex items-center justify-center z-50 hidden" id="promoModal">
<div className="bg-white rounded-2xl p-6 w-80 shadow-xl">
<h3 className="text-lg font-bold text-blue-700 mb-2">Apply Promo Code</h3>
<input className="w-full border border-gray-300 rounded-lg px-3 py-2 mb-4" placeholder="Enter code here" type="text" />
<div className="flex justify-end gap-2">
<button className="px-4 py-2 rounded-lg bg-gray-100 text-gray-700 font-semibold" onClick={(e) => { document.getElementById('promoModal').classList.add('hidden') }}>Cancel</button>
<button className="px-4 py-2 rounded-lg bg-blue-600 text-white font-bold">Apply</button>
</div>
</div>
</div>

    </>
  );
}
