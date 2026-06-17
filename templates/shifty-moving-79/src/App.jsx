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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons();
    
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
      

<div className="bg-[#18110D] text-[#A39E9B] text-sm py-3 px-6 hidden md:block">
<div className="max-w-7xl mx-auto flex justify-between items-center">
<p>Save up to 20% on moves booked this month.</p>
<div className="flex items-center gap-8 text-white">
<a className="flex items-center gap-2 hover:text-[#FF6633] transition-colors" href="tel:+11234567890">
<i className="w-4 h-4" data-lucide="phone"></i>
                    (123) 456-7890
                </a>
<a className="flex items-center gap-2 hover:text-[#FF6633] transition-colors" href="mailto:hello@shifty.com">
<i className="w-4 h-4" data-lucide="mail"></i>
                    hello@shifty.com
                </a>
</div>
</div>
</div>

<header className="bg-white sticky top-0 z-50 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">

<a className="flex items-center gap-2" href="#">
<i className="w-8 h-8 text-[#FF6633]" data-lucide="boxes"></i>
<span className="text-2xl font-semibold tracking-tight">Shifty</span>
</a>

<nav className="hidden lg:flex items-center gap-8 text-base">
<a className="text-gray-900" href="#">Home</a>
<a className="text-gray-600 hover:text-gray-900 transition-colors" href="#">About</a>
<div className="relative group cursor-pointer flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                    Services <i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
<div className="relative group cursor-pointer flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                    Pages <i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
<div className="relative group cursor-pointer flex items-center gap-1 text-gray-600 hover:text-gray-900 transition-colors">
                    Blog <i className="w-4 h-4" data-lucide="chevron-down"></i>
</div>
<a className="text-[#FF6633]" href="#">Contact</a>
</nav>

<div className="hidden md:block">
<a className="bg-[#FF6633] hover:bg-[#F25522] text-white text-base px-6 py-3 rounded-full flex items-center gap-2 transition-colors" href="#">
                    Free Quote <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>

<button className="lg:hidden text-gray-900 p-2">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</header>

<section className="relative h-[480px] bg-gray-900 flex items-center">

<div className="absolute inset-0 overflow-hidden">
<img alt="Moving truck" className="w-full h-full object-cover object-center" src="https://images.unsplash.com/photo-1600585154340-be6161a56a0c?ixlib=rb-4.0.3&amp;auto=format&amp;fit=crop&amp;w=2070&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-r from-[#18110D]/90 via-[#18110D]/70 to-transparent"></div>
</div>
<div className="relative max-w-7xl mx-auto px-6 w-full z-10">
<div className="text-gray-300 text-base mb-4">
                Home / Contact
            </div>
<h1 className="text-5xl md:text-6xl font-semibold tracking-tight text-white mb-6 max-w-2xl leading-tight">
                Let's Plan Your Move Together
            </h1>
<p className="text-xl text-gray-200 max-w-xl">
                Have questions? Need a quote? Want to schedule a move? Our team is ready to help you every step of the way — reach out anytime.
            </p>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-start">

<div className="flex flex-col gap-8">
<div>
<span className="inline-flex items-center justify-center px-4 py-1.5 border border-gray-200 rounded-full text-base text-gray-600 mb-6 bg-gray-50">
                            Get In Touch
                        </span>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                            We're Here When You Need Us
                        </h2>
<p className="text-lg text-gray-600">
                            Whether you're planning a local move or a long-distance relocation, our team is ready to provide fast, friendly support.
                        </p>
</div>

<div className="space-y-4">

<div className="bg-[#F8F9FA] rounded-2xl p-6 flex items-start gap-5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF6633] border border-[#FF6633]/20 shrink-0">
<i className="w-6 h-6" data-lucide="phone-call"></i>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 mb-1">(123) 456-7890</h3>
<p className="text-base text-gray-500">Available Mon-Sat, 7am - 8pm</p>
</div>
</div>

<div className="bg-[#F8F9FA] rounded-2xl p-6 flex items-start gap-5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF6633] border border-[#FF6633]/20 shrink-0">
<i className="w-6 h-6" data-lucide="mail"></i>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 mb-1">hello@shifty.com</h3>
<p className="text-base text-gray-500">We respond within 2 business hours</p>
</div>
</div>

<div className="bg-[#F8F9FA] rounded-2xl p-6 flex items-start gap-5">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-[#FF6633] border border-[#FF6633]/20 shrink-0">
<i className="w-6 h-6" data-lucide="map-pin"></i>
</div>
<div>
<h3 className="text-xl font-medium text-gray-900 mb-1">123 Main Street, Your City</h3>
<p className="text-base text-gray-500">Visit Us: Monday - Saturday</p>
</div>
</div>
</div>

<div className="rounded-2xl overflow-hidden border border-gray-100 relative h-[200px]">
<img alt="Map Location" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 bg-black/5 flex items-center justify-center">
<div className="text-[#EA4335]">
<i className="w-8 h-8 fill-current text-white" data-lucide="map-pin"></i>
</div>
</div>
</div>

<div className="bg-[#18110D] text-white rounded-2xl p-8 mt-4">
<h3 className="text-xl font-medium mb-6">Business Hours</h3>
<div className="space-y-4">
<div className="flex justify-between items-center text-base border-b border-white/10 pb-4">
<span className="text-gray-300">Monday - Friday</span>
<span>7:00 AM - 8:00 PM</span>
</div>
<div className="flex justify-between items-center text-base border-b border-white/10 pb-4">
<span className="text-gray-300">Saturday</span>
<span>8:00 AM - 6:00 PM</span>
</div>
<div className="flex justify-between items-center text-base">
<span className="text-gray-300">Sunday</span>
<span className="text-gray-400">Closed</span>
</div>
</div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 md:p-10 shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-gray-100 lg:sticky lg:top-28">
<h3 className="text-3xl font-semibold tracking-tight text-gray-900 mb-2">Send Us a Message</h3>
<p className="text-lg text-gray-500 mb-8">Fill in the details below and our team will get back to you within 2 hours with a tailored quote or answer.</p>
<form className="space-y-6">
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">First Name</label>
<div className="relative">
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="John" type="text"/>
</div>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Last Name</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="Smith" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Email Address</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="john@example.com" type="email"/>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Phone Number</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="(123) 456-7890" type="tel"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Moving From</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="City, State" type="text"/>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Moving To</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="City, State" type="text"/>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Preferred Move Date</label>
<input className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400" placeholder="mm/dd/yyyy" type="text"/>
</div>

<div className="space-y-2 relative">
<label className="block text-base font-medium text-gray-900">Move Type</label>
<select className="w-full bg-[#F8F9FA] text-gray-400 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all appearance-none cursor-pointer">
<option disabled="" selected="" value="">Select Service</option>
<option value="local">Local Moving</option>
<option value="long">Long Distance</option>
<option value="commercial">Commercial</option>
</select>
<i className="absolute right-4 top-11 w-4 h-4 text-gray-400 pointer-events-none" data-lucide="chevron-down"></i>
</div>
</div>

<div className="space-y-2">
<label className="block text-base font-medium text-gray-900">Special Requests</label>
<textarea className="w-full bg-[#F8F9FA] text-gray-900 text-base rounded-xl px-4 py-3.5 outline-none border border-transparent focus:border-gray-200 focus:bg-white transition-all placeholder:text-gray-400 resize-none" placeholder="Tell us anything relevant — fragile items, access restrictions, storage needs, etc." rows="4"></textarea>
</div>
<button className="w-full bg-[#FF6633] hover:bg-[#F25522] text-white text-lg font-medium rounded-xl py-4 transition-colors mt-2" type="button">
                            Send My Request
                        </button>
<div className="flex items-start gap-3 mt-4">
<div className="flex items-center h-5 mt-1">
<input className="w-4 h-4 rounded border-gray-300 text-[#FF6633] focus:ring-[#FF6633] bg-white cursor-pointer accent-[#FF6633]" id="terms" type="checkbox"/>
</div>
<label className="text-sm text-gray-500 cursor-pointer" htmlFor="terms">
                                By submitting, you agree to our Privacy Policy &amp; Terms. We never share your data.
                            </label>
</div>
</form>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-start">

<div className="lg:col-span-4 lg:sticky lg:top-28">
<span className="inline-flex items-center justify-center px-4 py-1.5 border border-gray-200 rounded-full text-base text-gray-600 mb-6 bg-white">
                        FAQs
                    </span>
<h2 className="text-4xl font-semibold tracking-tight text-gray-900 mb-6">
                        Common Questions About Moving
                    </h2>
<p className="text-lg text-gray-600 mb-8">
                        Planning a move often comes with many questions about scheduling, pricing, packing, and delivery. Here are a few common questions.
                    </p>
<a className="inline-flex bg-[#18110D] hover:bg-black text-white text-base px-6 py-3 rounded-full items-center gap-2 transition-colors" href="#">
                        Call Now <div className="bg-white rounded-full p-1"><i className="w-3 h-3 text-black" data-lucide="arrow-right"></i></div>
</a>
</div>

<div className="lg:col-span-8 space-y-4">

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">How is the moving cost calculated?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-up"></i>
</div>
</button>
<div className="mt-4 text-lg text-gray-600 leading-relaxed pr-8">
                            Moving cost depends on distance, the size of your move, and the time required. Additional services like packing or special item handling may affect the final price.
                        </div>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gray-200 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">Do you provide packing materials and supplies?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gray-200 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">How far in advance should I book?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gray-200 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">Can you move fragile or high-value items?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gray-200 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">What happens if the delivery time changes?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</button>
</div>

<div className="bg-white border border-gray-100 rounded-2xl p-6 shadow-sm hover:border-gray-200 transition-colors cursor-pointer">
<button className="w-full flex items-center justify-between text-left focus:outline-none group">
<span className="text-xl font-medium text-gray-900">Do you offer moving services for offices?</span>
<div className="w-8 h-8 rounded-full border border-gray-200 flex items-center justify-center shrink-0 text-gray-500 group-hover:bg-gray-50 transition-colors">
<i className="w-5 h-5" data-lucide="chevron-down"></i>
</div>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="bg-[#18110D] pt-24 pb-12 border-t-4 border-[#FF6633]">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-12 gap-12 border-b border-white/10 pb-16">

<div className="lg:col-span-4">
<a className="flex items-center gap-2 mb-6" href="#">
<i className="w-8 h-8 text-[#FF6633]" data-lucide="boxes"></i>
<span className="text-2xl font-semibold tracking-tight text-white">Shifty</span>
</a>
<p className="text-base text-gray-400 mb-8 max-w-sm">
                        Professional moving services for homes and businesses with secure packing and reliable transport.
                    </p>
<div className="flex items-center gap-4">
<a className="w-10 h-10 rounded-full bg-[#FF6633] flex items-center justify-center text-white hover:bg-[#F25522] transition-colors" href="#">
<i className="w-4 h-4 fill-current" data-lucide="facebook"></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#FF6633] flex items-center justify-center text-white hover:bg-[#F25522] transition-colors" href="#">
<i className="w-4 h-4 fill-current" data-lucide="linkedin"></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#FF6633] flex items-center justify-center text-white hover:bg-[#F25522] transition-colors" href="#">
<i className="w-4 h-4 fill-current" data-lucide="twitter"></i>
</a>
<a className="w-10 h-10 rounded-full bg-[#FF6633] flex items-center justify-center text-white hover:bg-[#F25522] transition-colors" href="#">
<i className="w-4 h-4 fill-current" data-lucide="youtube"></i>
</a>
</div>
</div>

<div className="lg:col-span-2">
<h4 className="text-xl font-medium text-white mb-6">Quick Links</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-[#FF6633]"></span> Home</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> About Us</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Our Services</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Pricing Plans</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Contact Us</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-xl font-medium text-white mb-6">Our Services</h4>
<ul className="space-y-4">
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Local Home Moving</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Long Distance Moving</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Office Relocation</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Packing &amp; Unpacking</a></li>
<li><a className="text-base text-gray-400 hover:text-[#FF6633] transition-colors flex items-center gap-2" href="#"><span className="w-1 h-1 rounded-full bg-gray-600"></span> Furniture Handling</a></li>
</ul>
</div>

<div className="lg:col-span-3">
<h4 className="text-xl font-medium text-white mb-6">Contact Info</h4>
<ul className="space-y-4 mb-8">
<li className="flex items-start gap-3 text-base text-gray-400">
<i className="w-5 h-5 text-white mt-0.5" data-lucide="phone"></i>
<span>(123) 456-7890</span>
</li>
<li className="flex items-start gap-3 text-base text-gray-400">
<i className="w-5 h-5 text-white mt-0.5" data-lucide="mail"></i>
<span>hello@shifty.com</span>
</li>
<li className="flex items-start gap-3 text-base text-gray-400">
<i className="w-5 h-5 text-white mt-0.5" data-lucide="map-pin"></i>
<span>123 Main Street, Your City</span>
</li>
</ul>
<div>
<p className="text-sm text-gray-400 mb-3">Sign up for our newsletter &amp; receive offers</p>
<form className="flex bg-white rounded-full p-1.5 w-full max-w-sm relative">
<input className="w-full bg-transparent text-gray-900 text-base px-4 outline-none border-none placeholder:text-gray-400" placeholder="Your Email" type="email"/>
<button className="bg-[#FF6633] hover:bg-[#F25522] text-white text-sm font-medium px-6 py-2.5 rounded-full transition-colors whitespace-nowrap" type="button">
                                Subscribe
                            </button>
</form>
</div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-4 mt-8 pt-4">
<p className="text-sm text-gray-500">Copyright © 2024 Shifty | Powered by Webflow.</p>
<div className="flex items-center gap-6 text-sm text-gray-400">
<a className="hover:text-white transition-colors relative after:content-[''] after:w-[1px] after:h-3 after:bg-gray-600 after:absolute after:-right-3 after:top-1.5" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
