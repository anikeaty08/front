import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<section className="bg-white shadow-lg">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-center px-6 py-12 md:py-20">
<div className="flex-1">
<h1 className="text-4xl md:text-5xl font-bold mb-4 text-blue-700">Get Medicines Delivered <span className="text-green-600">Fast &amp; Safe</span></h1>
<p className="text-lg md:text-xl mb-6 text-gray-700">
          Receive 100% genuine medicines at your doorstep in under <span className="font-semibold text-blue-600">2 hours</span>. Skip the queues—order with confidence, privacy, and care.
        </p>
<ul className="mb-6 space-y-2">
<li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-600">✔️</span> Free delivery on your first order</li>
<li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-600">✔️</span> Licensed pharmacists, authentic brands</li>
<li className="flex items-center"><span className="inline-block w-5 h-5 mr-2 text-green-600">✔️</span> Discreet, secure, and fully private</li>
</ul>
<form autocomplete="off" className="bg-white p-4 rounded-lg shadow-md flex flex-col gap-3 w-full max-w-md">
<label className="font-semibold" htmlFor="phone">Get Started Now:</label>
<input className="p-3 rounded border border-gray-300 focus:ring-2 focus:ring-blue-400" id="phone" name="phone" placeholder="Enter your mobile number" required="" type="tel"/>
<button className="mt-2 bg-blue-600 hover:bg-blue-700 text-white font-bold py-3 rounded transition duration-200 shadow-lg text-lg" type="submit">Order Medicines Now</button>
<span className="text-xs text-gray-500">No spam. Your data is safe &amp; confidential.</span>
</form>
</div>
<div className="flex-1 hidden md:flex justify-center">
<img alt="Medicine Delivery" className="w-full max-w-xs rounded-lg shadow-lg" src="https://images.unsplash.com/photo-1588776814546-ec7e1b7c2a8b?auto=format&amp;fit=crop&amp;w=500&amp;q=80"/>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto py-8 px-6">
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="flex-1 mb-6 md:mb-0">
<h2 className="text-2xl font-semibold mb-2">Trusted by 100,000+ Happy Customers</h2>
<div className="flex items-center space-x-3">
<img alt="Trust Badge" className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/616/616494.png"/>
<span className="text-lg font-semibold text-green-700">4.8/5 average rating</span>
</div>
</div>
<div className="flex-1 flex gap-4">
<div className="bg-white p-4 rounded-lg shadow text-sm flex-1">
<div className="flex items-center mb-2">
<img alt="User" className="w-8 h-8 rounded-full mr-2" src="https://randomuser.me/api/portraits/women/50.jpg"/>
<span className="font-bold">Shreya M.</span>
<span className="ml-auto text-yellow-400">★★★★★</span>
</div>
<p>“Super fast delivery and genuine medicines. I never have to worry about authenticity.”</p>
</div>
<div className="bg-white p-4 rounded-lg shadow text-sm flex-1 hidden md:block">
<div className="flex items-center mb-2">
<img alt="User" className="w-8 h-8 rounded-full mr-2" src="https://randomuser.me/api/portraits/men/32.jpg"/>
<span className="font-bold">Ravi K.</span>
<span className="ml-auto text-yellow-400">★★★★★</span>
</div>
<p>“The process is so easy and private. Got my medicine within an hour!”</p>
</div>
</div>
</div>
</section>

<section className="bg-blue-50 py-10 px-6">
<div className="max-w-5xl mx-auto">
<h2 className="text-2xl font-bold mb-8 text-blue-700 text-center">How It Works</h2>
<div className="flex flex-col md:flex-row gap-8 justify-center">
<div className="flex-1 flex flex-col items-center">
<div className="bg-white p-4 rounded-full shadow mb-3">
<img alt="Step 1" className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/2920/2920244.png"/>
</div>
<h3 className="font-semibold mb-1">1. Upload Prescription</h3>
<p className="text-gray-600 text-center text-sm">Snap a photo or upload your doctor’s prescription securely.</p>
</div>
<div className="flex-1 flex flex-col items-center">
<div className="bg-white p-4 rounded-full shadow mb-3">
<img alt="Step 2" className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/724/724664.png"/>
</div>
<h3 className="font-semibold mb-1">2. Expert Review</h3>
<p className="text-gray-600 text-center text-sm">Our licensed pharmacists verify your order for safety &amp; authenticity.</p>
</div>
<div className="flex-1 flex flex-col items-center">
<div className="bg-white p-4 rounded-full shadow mb-3">
<img alt="Step 3" className="w-10 h-10" src="https://cdn-icons-png.flaticon.com/512/1041/1041916.png"/>
</div>
<h3 className="font-semibold mb-1">3. Quick Delivery</h3>
<p className="text-gray-600 text-center text-sm">Receive your medicines at your doorstep in under 2 hours!</p>
</div>
</div>
</div>
</section>

<section className="max-w-5xl mx-auto py-12 px-6">
<h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Why Choose MedExpress?</h2>
<div className="grid gap-8 md:grid-cols-3">
<div className="flex flex-col items-center text-center">
<img alt="Genuine Medicines" className="w-14 h-14 mb-3" src="https://cdn-icons-png.flaticon.com/512/1041/1041881.png"/>
<h3 className="font-semibold mb-1">100% Genuine Medicines</h3>
<p className="text-gray-600 text-sm">We source directly from authorized distributors and top brands.</p>
</div>
<div className="flex flex-col items-center text-center">
<img alt="Fast Delivery" className="w-14 h-14 mb-3" src="https://cdn-icons-png.flaticon.com/512/747/747376.png"/>
<h3 className="font-semibold mb-1">Lightning Fast Delivery</h3>
<p className="text-gray-600 text-sm">Order today, get it today—guaranteed within 2 hours in your city.</p>
</div>
<div className="flex flex-col items-center text-center">
<img alt="Privacy" className="w-14 h-14 mb-3" src="https://cdn-icons-png.flaticon.com/512/3524/3524647.png"/>
<h3 className="font-semibold mb-1">Full Privacy</h3>
<p className="text-gray-600 text-sm">Discrete packaging and secure data handling. Your health, your business.</p>
</div>
</div>
</section>

<section className="bg-green-600 py-10">
<div className="max-w-3xl mx-auto text-center text-white">
<h2 className="text-3xl font-bold mb-3">Ready for Fast, Hassle-Free Medicine Delivery?</h2>
<p className="mb-6 text-lg">Order now and get your medicines delivered in under 2 hours. First delivery is <span className="font-semibold">FREE!</span></p>
<form className="flex flex-col md:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<input className="p-3 rounded border border-gray-300 text-gray-800 focus:ring-2 focus:ring-blue-400 w-full" placeholder="Enter your mobile number" required="" type="tel"/>
<button className="bg-white text-green-600 font-bold py-3 px-6 rounded shadow hover:bg-gray-100 transition duration-200" type="submit">Order Now</button>
</form>
<p className="mt-2 text-xs text-green-100">100% satisfaction guarantee. No spam ever.</p>
</div>
</section>

<section className="max-w-5xl mx-auto py-12 px-6">
<h2 className="text-2xl font-bold mb-8 text-center text-blue-700">Frequently Asked Questions</h2>
<div className="space-y-6">
<details className="bg-white rounded shadow p-4">
<summary className="font-semibold cursor-pointer">Is my prescription required for all medicines?</summary>
<p className="mt-2 text-gray-600 text-sm">Yes, for prescription medicines you must upload a valid prescription. OTC medicines can be ordered without one.</p>
</details>
<details className="bg-white rounded shadow p-4">
<summary className="font-semibold cursor-pointer">How do you ensure medicine authenticity?</summary>
<p className="mt-2 text-gray-600 text-sm">All medicines are sourced from verified distributors and checked by licensed pharmacists before dispatch.</p>
</details>
<details className="bg-white rounded shadow p-4">
<summary className="font-semibold cursor-pointer">Is my data and order private?</summary>
<p className="mt-2 text-gray-600 text-sm">Absolutely. We use encrypted systems and deliver in discreet packaging for your privacy.</p>
</details>
</div>
</section>

<footer className="bg-gray-900 text-gray-200 py-8">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row justify-between items-center px-6">
<div>
<span className="font-bold text-white text-xl">MedExpress</span>
<p className="text-xs mt-1">© 2024 MedExpress. All rights reserved.</p>
</div>
<div className="flex items-center gap-4 mt-4 md:mt-0">
<img alt="Secure Payment" className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/732/732200.png"/>
<span className="text-xs">Secure payments</span>
<img alt="Privacy" className="w-6 h-6" src="https://cdn-icons-png.flaticon.com/512/190/190411.png"/>
<span className="text-xs">Your privacy is our priority</span>
</div>
</div>
</footer>

    </>
  );
}
