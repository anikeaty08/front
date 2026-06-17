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
      

<nav className="backdrop-blur-xl bg-black/20 border-b border-white/10 sticky top-0 z-50">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between items-center h-16">
<div className="flex items-center space-x-8">
<div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent tracking-tight">
                        CLEANSPACE
                    </div>
<div className="hidden md:flex space-x-8">
<a className="text-slate-300 hover:text-emerald-400 font-medium transition-colors" href="#">Directory</a>
<a className="text-slate-300 hover:text-emerald-400 font-medium transition-colors" href="#">Services</a>
<a className="text-slate-300 hover:text-emerald-400 font-medium transition-colors" href="#">Resources</a>
<a className="text-slate-300 hover:text-emerald-400 font-medium transition-colors" href="#">About</a>
</div>
</div>
<div className="flex items-center space-x-4">
<button className="text-slate-300 hover:text-emerald-400 font-medium transition-colors">Sign In</button>
<button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-6 py-2 rounded-full font-medium hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                        List Business
                    </button>
</div>
</div>
</div>
</nav>

<section className="relative py-24 overflow-hidden">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h1 className="text-5xl md:text-7xl font-bold text-white mb-6 tracking-tight">
                    Find <span className="bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent">Professional</span><br/>
                    Cleaning Services
                </h1>
<p className="text-xl text-slate-400 max-w-3xl mx-auto mb-12 leading-relaxed">
                    The world's largest directory of cleaning and facilities management professionals. Connect with verified service providers in over 150 countries.
                </p>

<div className="max-w-4xl mx-auto backdrop-blur-xl bg-black/30 rounded-2xl p-2 border border-white/10 shadow-2xl">
<div className="flex flex-col md:flex-row gap-2">
<div className="flex-1 relative">
<i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" data-lucide="search"></i>
<input className="w-full pl-12 pr-4 py-4 bg-slate-800/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-slate-400" placeholder="Search services, companies, or locations..." type="text"/>
</div>
<div className="relative">
<i className="absolute left-4 top-1/2 transform -translate-y-1/2 text-slate-400 w-5 h-5" data-lucide="map-pin"></i>
<input className="w-full md:w-48 pl-12 pr-4 py-4 bg-slate-800/50 rounded-xl border-0 focus:outline-none focus:ring-2 focus:ring-emerald-500/50 text-white placeholder-slate-400" placeholder="Location" type="text"/>
</div>
<button className="bg-gradient-to-r from-emerald-500 to-cyan-500 text-white px-8 py-4 rounded-xl font-semibold hover:shadow-xl hover:shadow-emerald-500/25 transition-all">
                            Search
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Service Categories</h2>
<p className="text-xl text-slate-400">Explore our comprehensive range of cleaning and facilities management services</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="building"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Commercial Cleaning</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Professional office, retail, and commercial space cleaning services with flexible scheduling.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-cyan-500 to-blue-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="home"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Residential Cleaning</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Trusted home cleaning services for regular maintenance and deep cleaning projects.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-emerald-500 to-green-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="wrench"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Facilities Management</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Comprehensive facility maintenance, security, and management solutions for businesses.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-blue-500 to-indigo-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="droplet"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Specialized Cleaning</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Medical, industrial, and specialized cleaning services with certified professionals.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-teal-500 to-cyan-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="recycle"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Waste Management</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Eco-friendly waste collection, recycling, and disposal services for all sectors.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all group">
<div className="w-16 h-16 bg-gradient-to-r from-green-500 to-emerald-500 rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
<i className="w-8 h-8 text-white" data-lucide="leaf"></i>
</div>
<h3 className="text-2xl font-semibold text-white mb-4">Green Cleaning</h3>
<p className="text-slate-400 mb-6 leading-relaxed">Environmentally sustainable cleaning solutions using eco-friendly products and methods.</p>
<a className="text-emerald-400 font-semibold hover:text-emerald-300 transition-colors" href="#">
                        Explore Services →
                    </a>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="text-center mb-16">
<h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Featured Companies</h2>
<p className="text-xl text-slate-400">Discover top-rated cleaning and facilities management providers worldwide</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all">
<div className="flex items-center mb-6">
<img className="w-16 h-16 rounded-xl object-cover mr-4" src="https://images.unsplash.com/photo-1560472354-b33ff0c44a43?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="text-xl font-semibold text-white">CleanPro Solutions</h3>
<p className="text-slate-400">New York, USA</p>
</div>
</div>
<div className="flex items-center mb-4">
<div className="flex text-yellow-400 mr-2">
                            ★★★★★
                        </div>
<span className="text-slate-400">4.9 (128 reviews)</span>
</div>
<p className="text-slate-400 mb-6">Premium commercial cleaning services with 15+ years experience serving Fortune 500 companies.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">Commercial</span>
<span className="px-3 py-1 bg-cyan-500/20 text-cyan-300 rounded-full text-sm font-medium">Facilities</span>
</div>
<button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                        View Profile
                    </button>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all">
<div className="flex items-center mb-6">
<img className="w-16 h-16 rounded-xl object-cover mr-4" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="text-xl font-semibold text-white">EcoClean Services</h3>
<p className="text-slate-400">London, UK</p>
</div>
</div>
<div className="flex items-center mb-4">
<div className="flex text-yellow-400 mr-2">
                            ★★★★★
                        </div>
<span className="text-slate-400">4.8 (95 reviews)</span>
</div>
<p className="text-slate-400 mb-6">Sustainable cleaning solutions using 100% eco-friendly products and green certified processes.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">Green Cleaning</span>
<span className="px-3 py-1 bg-blue-500/20 text-blue-300 rounded-full text-sm font-medium">Residential</span>
</div>
<button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                        View Profile
                    </button>
</div>
<div className="backdrop-blur-xl bg-slate-800/40 rounded-2xl p-8 border border-white/10 hover:shadow-2xl hover:shadow-emerald-500/10 transition-all">
<div className="flex items-center mb-6">
<img className="w-16 h-16 rounded-xl object-cover mr-4" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=80&amp;h=80&amp;fit=crop&amp;crop=face"/>
<div>
<h3 className="text-xl font-semibold text-white">Facility Masters</h3>
<p className="text-slate-400">Toronto, Canada</p>
</div>
</div>
<div className="flex items-center mb-4">
<div className="flex text-yellow-400 mr-2">
                            ★★★★★
                        </div>
<span className="text-slate-400">4.9 (203 reviews)</span>
</div>
<p className="text-slate-400 mb-6">Comprehensive facilities management including cleaning, maintenance, and security services.</p>
<div className="flex flex-wrap gap-2 mb-6">
<span className="px-3 py-1 bg-emerald-500/20 text-emerald-300 rounded-full text-sm font-medium">Facilities</span>
<span className="px-3 py-1 bg-purple-500/20 text-purple-300 rounded-full text-sm font-medium">Specialized</span>
</div>
<button className="w-full bg-gradient-to-r from-emerald-500 to-cyan-500 text-white py-3 rounded-xl font-semibold hover:shadow-lg hover:shadow-emerald-500/25 transition-all">
                        View Profile
                    </button>
</div>
</div>
</div>
</section>

<section className="py-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="backdrop-blur-xl bg-slate-800/30 rounded-3xl p-12 border border-white/10">
<div className="text-center mb-12">
<h2 className="text-4xl font-bold text-white mb-4 tracking-tight">Global Network</h2>
<p className="text-xl text-slate-400">Connecting businesses with professional cleaning services worldwide</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
<div>
<div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            25,000+
                        </div>
<p className="text-slate-400 font-medium">Verified Companies</p>
</div>
<div>
<div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            150+
                        </div>
<p className="text-slate-400 font-medium">Countries Covered</p>
</div>
<div>
<div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            1M+
                        </div>
<p className="text-slate-400 font-medium">Monthly Searches</p>
</div>
<div>
<div className="text-4xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-2">
                            4.8★
                        </div>
<p className="text-slate-400 font-medium">Average Rating</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-16 backdrop-blur-xl bg-black/20 border-t border-white/10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
<div>
<div className="text-2xl font-bold bg-gradient-to-r from-emerald-400 to-cyan-400 bg-clip-text text-transparent mb-4 tracking-tight">
                        CLEANSPACE
                    </div>
<p className="text-slate-400 leading-relaxed">
                        The world's largest directory of cleaning and facilities management professionals.
                    </p>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-4">Services</h4>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Commercial Cleaning</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Residential Cleaning</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Facilities Management</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Specialized Services</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-4">Company</h4>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-lg font-semibold text-white mb-4">Support</h4>
<ul className="space-y-2 text-slate-400">
<li><a className="hover:text-emerald-400 transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">List Your Business</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Terms of Service</a></li>
<li><a className="hover:text-emerald-400 transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 text-center text-slate-400">
<p>© 2024 CleanSpace Directory. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
