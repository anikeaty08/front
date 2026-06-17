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
      

<aside className="w-64 border-r border-gray-100 flex flex-col bg-white flex-shrink-0">

<div className="h-16 flex items-center px-4 border-b border-gray-50">
<button className="flex items-center gap-2 hover:bg-gray-50 p-1.5 rounded-lg transition-colors w-full text-left">
<div className="w-8 h-8 rounded-lg bg-gradient-to-tr from-blue-500 to-indigo-600 flex items-center justify-center text-white shadow-sm">
<svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M13 2L3 14h9l-1 8 10-12h-9l1-8z"></path></svg>
</div>
<div className="flex-1 min-w-0">
<span className="block font-medium text-gray-900 truncate">Loud Pro</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevrons-up-down"></i>
</button>
<button className="ml-2 text-gray-400 hover:text-gray-600">
<i className="w-4 h-4" data-lucide="panel-left"></i>
</button>
</div>

<div className="px-4 py-3">
<div className="relative group">
<i className="absolute left-2.5 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400 group-focus-within:text-gray-600" data-lucide="search"></i>
<input className="w-full pl-9 pr-8 py-1.5 bg-gray-50 border border-transparent focus:bg-white focus:border-gray-200 focus:ring-0 rounded-md text-sm transition-all placeholder:text-gray-400 text-gray-700" placeholder="Search" type="text"/>
<span className="absolute right-2.5 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-200 rounded px-1 min-w-[20px] text-center">⌘K</span>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-2 space-y-6 py-2">
<div>
<div className="text-xs font-medium text-gray-400 px-2 mb-2">Main menu</div>
<ul className="space-y-0.5">
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="home"></i>
<span>Home</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="file-text"></i>
<span>Test</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="pie-chart"></i>
<span>Reports</span>
</a>
</li>
</ul>
</div>
<div>
<div className="text-xs font-medium text-gray-400 px-2 mb-2">Managements</div>
<ul className="space-y-0.5">
<li>
<button className="w-full flex items-center justify-between px-2 py-1.5 text-gray-900 bg-gray-50 rounded-md transition-colors group">
<div className="flex items-center gap-3">
<i className="w-4 h-4 text-blue-600" data-lucide="check-square"></i>
<span className="font-medium text-blue-600">Settings</span>
</div>
<i className="w-4 h-4 text-gray-400" data-lucide="chevron-up"></i>
</button>
<div className="pl-9 pr-2 py-1 space-y-1">
<a className="block py-1.5 text-gray-600 hover:text-gray-900" href="#">My Account</a>
<a className="block py-1.5 text-blue-600 font-medium" href="#">Organization Settings</a>
<a className="block py-1.5 text-gray-600 hover:text-gray-900" href="#">Tracker Setting</a>
</div>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="phone-off"></i>
<span>Trust censer</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="alert-circle"></i>
<span>Risk</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="smartphone"></i>
<span>Vendor</span>
</a>
</li>
<li>
<a className="flex items-center justify-between px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<div className="flex items-center gap-3">
<i className="w-4 h-4" data-lucide="folder"></i>
<span>Assets</span>
</div>
<span className="bg-blue-600 text-white text-[10px] px-1.5 py-0.5 rounded-full font-medium">New</span>
</a>
</li>
<li>
<a className="flex items-center gap-3 px-2 py-1.5 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="user"></i>
<span>Personnel</span>
</a>
</li>
</ul>
</div>
</nav>

<div className="p-2 border-t border-gray-100">
<a className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="settings"></i>
<span>Settings</span>
</a>
<a className="flex items-center gap-3 px-2 py-2 text-gray-600 hover:bg-gray-50 hover:text-gray-900 rounded-md transition-colors" href="#">
<i className="w-4 h-4" data-lucide="log-out"></i>
<span>Log out</span>
</a>
</div>
</aside>

<main className="flex-1 flex flex-col min-w-0 bg-white">

<header className="h-16 border-b border-gray-100 flex items-center justify-between px-8 flex-shrink-0">
<div className="w-full max-w-sm relative">
<i className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="search"></i>
<input className="w-full pl-9 pr-12 py-1.5 bg-gray-50 border border-gray-100 rounded-md text-sm focus:outline-none focus:border-gray-300 transition-colors placeholder:text-gray-400" placeholder="Search ..." type="text"/>
<span className="absolute right-2 top-1/2 -translate-y-1/2 text-xs text-gray-400 border border-gray-200 bg-white rounded px-1.5 py-0.5 shadow-sm">⌘K</span>
</div>
<div className="flex items-center gap-4">
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="bell"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="help-circle"></i></button>
<button className="text-gray-400 hover:text-gray-600"><i className="w-4 h-4" data-lucide="settings"></i></button>
<button className="bg-black hover:bg-gray-800 text-white text-xs font-medium px-3 py-1.5 rounded-md flex items-center gap-1.5 transition-colors">
<i className="w-3 h-3 fill-current" data-lucide="star"></i> Upgrade
                </button>
<img alt="User" className="w-8 h-8 rounded-full border border-gray-200" src="https://i.pravatar.cc/150?u=a042581f4e29026024d"/>
</div>
</header>

<div className="px-8 pt-6 pb-2 border-b border-gray-100 bg-white">
<nav className="flex items-center gap-1 bg-gray-50/80 p-1 rounded-lg w-max border border-gray-100/50">
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Company Info</a>
<a className="px-4 py-1.5 text-sm text-blue-600 bg-white shadow-sm border border-gray-200/50 rounded-md font-medium" href="#">Office Locations</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Social Links</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Business Hours</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Currencies</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Date &amp; Time</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Team Management</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Invitations</a>
<a className="px-4 py-1.5 text-sm text-gray-600 hover:text-gray-900 rounded-md font-medium transition-colors" href="#">Preferences</a>
</nav>
</div>

<div className="flex-1 overflow-y-auto p-8">
<div className="flex items-center justify-between mb-6">
<h1 className="text-2xl font-medium tracking-tight text-gray-900">Addresses</h1>
<button className="bg-blue-600 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-sm font-medium shadow-sm transition-colors flex items-center gap-2">
                    Add New Number
                </button>
</div>
<div className="space-y-4">

<div className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-gray-300 hover:shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="bg-green-50 text-green-700 border border-green-200/60 text-xs px-2.5 py-1 rounded-md font-medium">Head Office</span>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-1">India Office</h3>
<p className="text-gray-500 text-base mb-6 leading-relaxed max-w-3xl">1110-Zion Z1, Sindhu Bhavan Marg, Bodakdev, Ahmedabad, Gujarat 380054</p>

<div className="border-t border-gray-100 pt-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> Email Addresses
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Support</p>
<p className="text-sm font-medium text-gray-900">support@thinkwik.com</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">General</p>
<p className="text-sm font-medium text-gray-900">hello@thinkwik.com</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Phone Numbers
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Main</p>
<p className="text-sm font-medium text-gray-900">+91 988-831-8989</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">Fax / Secondary</p>
<p className="text-sm font-medium text-gray-900">+91 79-4004-9800</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-gray-300 hover:shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="bg-gray-100 text-gray-600 border border-gray-200 text-xs px-2.5 py-1 rounded-md font-medium">Branch Office</span>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-1">US Office</h3>
<p className="text-gray-500 text-base mb-6 leading-relaxed max-w-3xl">Thinkwik LLC, 1 Biscayne way, Monroe NJ-08831, USA</p>

<div className="border-t border-gray-100 pt-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> Email Addresses
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Support</p>
<p className="text-sm font-medium text-gray-900">help-us@thinkwik.com</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">General</p>
<p className="text-sm font-medium text-gray-900">info@thinkwik.com</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Phone Numbers
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Main</p>
<p className="text-sm font-medium text-gray-900">+1 988-831-8989</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">Fax / Secondary</p>
<p className="text-sm font-medium text-gray-900">+1 555-012-3456</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-gray-300 hover:shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="bg-gray-100 text-gray-600 border border-gray-200 text-xs px-2.5 py-1 rounded-md font-medium">Branch Office</span>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-1">Canada Office</h3>
<p className="text-gray-500 text-base mb-6 leading-relaxed max-w-3xl">1070, Kincaid Street, Listowel, N4W OJ9, Ontario, Canada</p>

<div className="border-t border-gray-100 pt-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> Email Addresses
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Support</p>
<p className="text-sm font-medium text-gray-900">support@thinkwik.ca</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">General</p>
<p className="text-sm font-medium text-gray-900">hello@thinkwik.ca</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Phone Numbers
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Main</p>
<p className="text-sm font-medium text-gray-900">+1 416-555-0199</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">Fax / Secondary</p>
<p className="text-sm font-medium text-gray-900">+1 416-555-0100</p>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-white border border-gray-200 rounded-xl p-6 transition-all hover:border-gray-300 hover:shadow-sm">
<div className="flex justify-between items-start mb-2">
<span className="bg-gray-100 text-gray-600 border border-gray-200 text-xs px-2.5 py-1 rounded-md font-medium">Branch Office</span>
<button className="text-gray-400 hover:text-gray-600 p-1 rounded-md hover:bg-gray-50 transition-colors">
<i className="w-4 h-4" data-lucide="more-vertical"></i>
</button>
</div>
<h3 className="text-lg font-medium text-gray-900 mb-1">Germany Office</h3>
<p className="text-gray-500 text-base mb-6 leading-relaxed max-w-3xl">Berliner Str 38, 40880 Ratingen, Germany</p>

<div className="border-t border-gray-100 pt-5">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-y-6 gap-x-12">

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="mail"></i> Email Addresses
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Support</p>
<p className="text-sm font-medium text-gray-900">hilfe@thinkwik.de</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">General</p>
<p className="text-sm font-medium text-gray-900">hallo@thinkwik.de</p>
</div>
</div>
</div>

<div>
<h4 className="text-xs font-semibold text-gray-400 uppercase tracking-wider mb-3 flex items-center gap-2">
<i className="w-3.5 h-3.5" data-lucide="phone"></i> Phone Numbers
                                </h4>
<div className="grid grid-cols-2 gap-4">
<div>
<p className="text-xs text-gray-500 mb-0.5">Main</p>
<p className="text-sm font-medium text-gray-900">+49 30 12345678</p>
</div>
<div>
<p className="text-xs text-gray-500 mb-0.5">Fax / Secondary</p>
<p className="text-sm font-medium text-gray-900">+49 30 87654321</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="mt-12 flex items-center justify-between border-t border-gray-100 pt-8 pb-4">
<p className="text-gray-400 text-xs">© 2078 Constructor Global Inc.</p>
<div className="flex items-center gap-3">
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><i className="w-3.5 h-3.5" data-lucide="facebook"></i></button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><i className="w-3.5 h-3.5" data-lucide="twitter"></i></button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><i className="w-3.5 h-3.5" data-lucide="instagram"></i></button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><i className="w-3.5 h-3.5" data-lucide="linkedin"></i></button>
</div>
<div className="flex items-center gap-2">
<button className="flex items-center gap-2 px-3 py-1.5 border border-gray-200 rounded-md text-xs font-medium text-gray-600 hover:bg-gray-50">
                        English Language <i className="w-3 h-3" data-lucide="chevron-down"></i>
</button>
<button className="w-8 h-8 flex items-center justify-center rounded-full bg-gray-100 text-gray-500 hover:bg-gray-200 transition-colors"><i className="w-4 h-4" data-lucide="message-square"></i></button>
<button className="w-8 h-8 flex items-center justify-center rounded-full border border-gray-200 text-gray-400 hover:bg-gray-50 transition-colors"><i className="w-4 h-4" data-lucide="arrow-up"></i></button>
</div>
</div>
</div>
</main>


    </>
  );
}
