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



        // Initialize pie chart for transactions
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('transactionChart').getContext('2d');
            new Chart(ctx, {
                type: 'doughnut',
                data: {
                    labels: ['Clothing', 'Shoes', 'Accessories'],
                    datasets: [{
                        data: [65, 20, 15],
                        backgroundColor: ['#EC4899', '#8B5CF6', '#3B82F6'],
                        borderWidth: 0,
                        cutout: '70%'
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: true,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            enabled: true
                        }
                    }
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
      

<header className="container mx-auto px-6 py-6 flex items-center justify-between">
<div className="flex items-center">
<h1 className="text-3xl font-bold heading">Appo</h1>
</div>
<nav className="hidden md:flex space-x-8">
<a className="font-medium hover:text-pink-500 transition-colors" href="#">Buy</a>
<a className="font-medium hover:text-pink-500 transition-colors" href="#">Sell</a>
<a className="font-medium hover:text-pink-500 transition-colors" href="#">How It Works</a>
<a className="font-medium hover:text-pink-500 transition-colors" href="#">About Us</a>
<a className="font-medium hover:text-pink-500 transition-colors" href="#">Contact</a>
</nav>
<div className="flex items-center space-x-4">
<div className="relative hidden md:block">
<input className="pl-10 pr-4 py-2 rounded-full bg-gray-100 focus:ring-2 focus:ring-pink-300 focus:outline-none" placeholder="Search..." type="text" />
<svg className="h-5 w-5 absolute left-3 top-2.5 text-gray-400" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<button className="font-medium hover:text-pink-500 transition-colors">Sign In</button>
<button className="gradient-bg text-white px-5 py-2 rounded-full font-medium hover:shadow-lg transition">Sign Up</button>
</div>
</header>

<section className="container mx-auto px-6 py-16 text-center">
<div className="max-w-3xl mx-auto">
<div className="flex items-center justify-center mb-4">
<svg className="h-5 w-5 text-pink-500 mr-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M11.3 1.046A1 1 0 0112 2v5h4a1 1 0 01.82 1.573l-7 10A1 1 0 018 18v-5H4a1 1 0 01-.82-1.573l7-10a1 1 0 011.12-.38z" fillRule="evenodd"></path>
</svg>
<p className="text-gray-600 text-sm font-medium">New Finds Weekly, Selling Made Simple</p>
</div>
<h2 className="text-5xl font-bold leading-tight mb-6 heading">
                Declutter Your Closet<br />
                Discover New Treasures
            </h2>
<p className="text-gray-600 text-lg mb-8">
                Ready to make room for new favorites? Appo makes it effortless to turn your gently used fashion into someone else's treasure. Start selling now and refresh your wardrobe with unique finds.
            </p>
<div className="flex justify-center space-x-4">
<button className="gradient-bg text-white px-6 py-3 rounded-full font-medium flex items-center hover:shadow-lg transition">
                    Shop Now
                    <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
<button className="bg-black text-white px-6 py-3 rounded-full font-medium flex items-center hover:shadow-lg transition">
                    Sell Now
                    <svg className="h-5 w-5 ml-2" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>
</section>

<section className="container mx-auto px-6 pb-24">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="bg-white rounded-xl card-shadow p-8 card-hover transition relative overflow-hidden">
<div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full gradient-bg opacity-10"></div>
<div className="flex justify-between items-start mb-6">
<h3 className="text-2xl font-bold heading">$320.00</h3>
<div className="bg-pink-100 rounded-full p-3">
<svg className="h-6 w-6 text-pink-500" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M8.433 7.418c.155-.103.346-.196.567-.267v1.698a2.305 2.305 0 01-.567-.267C8.07 8.34 8 8.114 8 8c0-.114.07-.34.433-.582zM11 12.849v-1.698c.22.071.412.164.567.267.364.243.433.468.433.582 0 .114-.07.34-.433.582a2.305 2.305 0 01-.567.267z"></path>
<path clip-rule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-13a1 1 0 10-2 0v.092a4.535 4.535 0 00-1.676.662C6.602 6.234 6 7.009 6 8c0 .99.602 1.765 1.324 2.246.48.32 1.054.545 1.676.662v1.941c-.391-.127-.68-.317-.843-.504a1 1 0 10-1.51 1.31c.562.649 1.413 1.076 2.353 1.253V15a1 1 0 102 0v-.092a4.535 4.535 0 001.676-.662C13.398 13.766 14 12.991 14 12c0-.99-.602-1.765-1.324-2.246A4.535 4.535 0 0011 9.092V7.151c.391.127.68.317.843.504a1 1 0 101.511-1.31c-.563-.649-1.413-1.076-2.354-1.253V5z" fillRule="evenodd"></path>
</svg>
</div>
</div>
<p className="text-gray-600 mb-6">You've made a sale. The earnings are on their way to your account.</p>
<div className="flex items-center justify-between">
<div>
<div className="flex items-center">
<img alt="Buyer" className="w-8 h-8 rounded-full mr-2" src="https://randomuser.me/api/portraits/women/44.jpg" />
<p className="text-sm font-medium">Emma Wilson</p>
</div>
<p className="text-xs text-gray-500 mt-1">Purchased 2 hours ago</p>
</div>
<button className="flex items-center text-black font-medium group">
                        Accept
                        <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
</div>

<div className="md:col-span-2">
<div className="bg-white rounded-xl card-shadow p-8 h-full card-hover transition relative overflow-hidden">
<div className="absolute -top-10 -left-10 w-40 h-40 rounded-full gradient-bg opacity-10"></div>
<div className="flex flex-col md:flex-row">
<div className="md:w-1/2 mb-6 md:mb-0 md:pr-6">
<h3 className="text-lg font-bold mb-1 heading">All your money in one place</h3>
<h4 className="text-2xl font-bold mb-4 heading">Instant Bank Transfers</h4>
<p className="text-gray-600 mb-6">Your sales turn into earnings effortlessly with APPO. After every deal, we send your money straight to your bank. No fuss, no fees, just quick cash.</p>
<div className="flex items-center mb-6">
<div className="flex items-center mr-4">
<div className="w-3 h-3 rounded-full bg-green-500 mr-2"></div>
<span className="text-sm">Instant</span>
</div>
<div className="flex items-center mr-4">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<span className="text-sm">Secure</span>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
<span className="text-sm">No Fees</span>
</div>
</div>
<button className="flex items-center text-black font-medium group">
                                Learn More
                                <svg className="h-5 w-5 ml-2 group-hover:translate-x-1 transition" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" fillRule="evenodd"></path>
</svg>
</button>
</div>
<div className="md:w-1/2 flex justify-center items-center">
<div className="gradient-bg w-72 h-44 rounded-xl p-6 text-white flex flex-col justify-between shadow-lg transform rotate-3 hover:rotate-0 transition-transform">
<div className="flex justify-between items-start">
<p className="text-sm opacity-80">Bank Account</p>
<svg className="h-8 w-8 opacity-80" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path d="M11 17a1 1 0 001.447.894l4-2A1 1 0 0017 15V9.236a1 1 0 00-1.447-.894l-4 2a1 1 0 00-.553.894V17zM15.211 6.276a1 1 0 000-1.788l-4.764-2.382a1 1 0 00-.894 0L4.789 4.488a1 1 0 000 1.788l4.764 2.382a1 1 0 00.894 0l4.764-2.382zM4.447 8.342A1 1 0 003 9.236V15a1 1 0 00.553.894l4 2A1 1 0 009 17v-5.764a1 1 0 00-.553-.894l-4-2z"></path>
</svg>
</div>
<div>
<div className="mb-2">
<p className="text-xs opacity-70">CARD NUMBER</p>
<p className="font-medium tracking-wider">•••• •••• •••• 4289</p>
</div>
<div className="flex justify-between">
<div>
<p className="text-xs opacity-70">CARD HOLDER</p>
<p className="font-medium">Marisa Lu</p>
</div>
<div>
<p className="text-xs opacity-70">EXPIRES</p>
<p className="font-medium">06/24</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-xl card-shadow p-8 card-hover transition relative overflow-hidden">
<div className="absolute -top-10 -right-10 w-32 h-32 rounded-full gradient-bg opacity-10"></div>
<h3 className="text-xl font-bold mb-4 heading">Seller Commission</h3>
<div className="flex items-center justify-center mb-6">
<div className="gradient-bg w-36 h-36 rounded-full flex items-center justify-center text-white shadow-lg">
<div className="text-center">
<p className="text-4xl font-bold">25%</p>
<p className="text-xs">Commission</p>
</div>
</div>
</div>
<p className="text-gray-600 text-center mb-4">Lower than industry standard. More money in your pocket.</p>
<div className="flex justify-between text-sm">
<div className="text-center">
<p className="font-bold text-gray-800">35%</p>
<p className="text-gray-500">Competitors</p>
</div>
<div className="text-center">
<p className="font-bold text-gray-800">25%</p>
<p className="text-gray-500">Appo</p>
</div>
<div className="text-center">
<p className="font-bold text-gray-800">10%</p>
<p className="text-gray-500">You Save</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl card-shadow p-8 card-hover transition relative overflow-hidden">
<div className="absolute -bottom-10 -left-10 w-32 h-32 rounded-full gradient-bg opacity-10"></div>
<h3 className="text-xl font-bold mb-6 heading text-center">Watch your Transactions Grow</h3>
<div className="flex justify-center mb-6">
<div className="w-48 h-48 relative">
<canvas id="transactionChart"></canvas>
<div className="absolute inset-0 flex items-center justify-center">
<div className="text-center">
<p className="text-4xl font-bold">941</p>
<p className="text-xs text-gray-500">Transactions</p>
</div>
</div>
</div>
</div>
<div className="flex justify-between text-sm">
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-pink-500 mr-2"></div>
<p>Clothing</p>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-purple-500 mr-2"></div>
<p>Shoes</p>
</div>
<div className="flex items-center">
<div className="w-3 h-3 rounded-full bg-blue-500 mr-2"></div>
<p>Accessories</p>
</div>
</div>
</div>

<div className="bg-white rounded-xl card-shadow p-8 card-hover transition relative overflow-hidden">
<div className="absolute -bottom-10 -right-10 w-32 h-32 rounded-full gradient-bg opacity-10"></div>
<h3 className="text-xl font-bold mb-6 heading">Quick Stats</h3>
<div className="space-y-6">
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-green-100 flex items-center justify-center mr-4">
<svg className="h-6 w-6 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 7h8m0 0v8m0-8l-8 8-4-4-6 6" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-medium">Sales Growth</p>
<div className="flex items-center">
<p className="text-gray-600">Up 24% from last month</p>
<span className="ml-2 bg-green-100 text-green-800 text-xs px-2 py-0.5 rounded-full">+24%</span>
</div>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-purple-100 flex items-center justify-center mr-4">
<svg className="h-6 w-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M17 20h5v-2a3 3 0 00-5.356-1.857M17 20H7m10 0v-2c0-.656-.126-1.283-.356-1.857M7 20H2v-2a3 3 0 015.356-1.857M7 20v-2c0-.656.126-1.283.356-1.857m0 0a5.002 5.002 0 019.288 0M15 7a3 3 0 11-6 0 3 3 0 016 0zm6 3a2 2 0 11-4 0 2 2 0 014 0zM7 10a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-medium">New Customers</p>
<div className="flex items-center">
<p className="text-gray-600">152 joined this week</p>
<span className="ml-2 bg-purple-100 text-purple-800 text-xs px-2 py-0.5 rounded-full">+12%</span>
</div>
</div>
</div>
<div className="flex items-center">
<div className="w-12 h-12 rounded-full bg-blue-100 flex items-center justify-center mr-4">
<svg className="h-6 w-6 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div>
<p className="font-medium">Average Order</p>
<div className="flex items-center">
<p className="text-gray-600">$78.50 per transaction</p>
<span className="ml-2 bg-blue-100 text-blue-800 text-xs px-2 py-0.5 rounded-full">+5%</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>


    </>
  );
}
