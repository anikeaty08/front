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
      

<aside className="w-64 bg-white border-r border-green-200 flex-col hidden md:flex z-20">
<div className="h-16 flex items-center px-6 border-b border-green-100">
<div className="flex items-center gap-2 text-cyan-900">
<div className="w-6 h-6 bg-cyan-900 rounded-md flex items-center justify-center text-white">
<span className="font-bold text-xs tracking-tighter">D</span>
</div>
<span className="font-semibold text-base tracking-tight">DEVFLOW</span>
</div>
</div>
<nav className="flex-1 overflow-y-auto py-6 px-3 space-y-1">
<div className="px-3 mb-2 text-xs font-medium text-blue-400 uppercase tracking-wider">Platform</div>
<a className="flex items-center gap-3 hover:bg-green-50 hover:text-cyan-900 group transition-colors text-sm font-medium text-blue-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-blue-400 group-hover:text-cyan-900" icon="solar:widget-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Dashboard
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm font-medium bg-green-50 text-cyan-900 rounded-md group transition-colors" href="#">
<iconify-icon className="text-cyan-900" icon="solar:folder-with-files-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Projects
            </a>
<a className="flex items-center gap-3 hover:bg-green-50 hover:text-cyan-900 group transition-colors text-sm font-medium text-blue-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-blue-400 group-hover:text-cyan-900" icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Customers
            </a>
<a className="flex items-center gap-3 hover:bg-green-50 hover:text-cyan-900 group transition-colors text-sm font-medium text-blue-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-blue-400 group-hover:text-cyan-900" icon="solar:bill-list-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Invoices
            </a>
<div className="px-3 mt-8 mb-2 text-xs font-medium text-blue-400 uppercase tracking-wider">Settings</div>
<a className="flex items-center gap-3 hover:bg-green-50 hover:text-cyan-900 group transition-colors text-sm font-medium text-blue-600 rounded-md pt-2 pr-3 pb-2 pl-3" href="#">
<iconify-icon className="text-blue-400 group-hover:text-cyan-900" icon="solar:settings-linear" strokeWidth="1.5" width="20"></iconify-icon>
                Configuration
            </a>
</nav>
<div className="p-4 border-t border-green-100">
<div className="flex items-center gap-3">
<img alt="Admin" className="w-8 h-8 rounded-full border border-green-200" src="https://ui-avatars.com/api/?name=Admin+User&amp;background=18181b&amp;color=fff"/>
<div className="flex flex-col">
<span className="text-sm font-medium text-cyan-900">EASYBIZWEB.COM</span>
<span className="text-xs text-blue-500">Lead Developer</span>
</div>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col h-full overflow-hidden relative">

<header className="h-16 bg-white/80 backdrop-blur-sm border-b border-green-200 flex items-center justify-between px-6 z-10 sticky top-0">
<div className="flex items-center gap-4">
<button className="md:hidden text-blue-500 hover:text-cyan-900">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<nav className="hidden sm:flex items-center gap-2 text-sm text-blue-500">
<span className="hover:text-cyan-900 cursor-pointer transition-colors">Projects</span>
<iconify-icon icon="solar:alt-arrow-right-linear" width="12"></iconify-icon>
<span className="font-medium text-cyan-900">Acme Corp Redesign</span>
</nav>
</div>
<div className="flex items-center gap-3">
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-blue-600 bg-white border border-green-200 rounded-md hover:bg-green-50 hover:border-green-300 transition-all shadow-sm">
<iconify-icon icon="solar:share-linear" width="16"></iconify-icon>
                    Share Portal
                </button>
<button className="flex items-center gap-2 px-3 py-1.5 text-xs font-medium text-white bg-cyan-900 rounded-md hover:bg-cyan-800 transition-all shadow-sm">
<iconify-icon icon="solar:check-circle-linear" width="16"></iconify-icon>
                    Save Changes
                </button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 sm:p-8">
<div className="max-w-6xl mr-auto ml-auto space-y-8">

<div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4">
<div className="">
<div className="flex items-center gap-3 mb-2">
<h1 className="text-2xl font-semibold text-cyan-900 tracking-tight">EASYBIZ.COM</h1>
<span className="px-2 py-0.5 rounded-full bg-yellow-50 text-yellow-700 text-xs font-medium border border-yellow-100">Development</span>
</div>
<p className="text-sm text-blue-500 max-w-xl">Full stack e-commerce solution with custom CMS integration. Priority: High.</p>
</div>
<div className="flex items-center gap-2">
<span className="text-xs font-medium text-blue-500">Last updated 2h ago</span>
</div>
</div>

<div className="w-full overflow-x-auto pb-2">
<div className="min-w-[700px] flex items-center justify-between relative px-2">

<div className="absolute top-1/2 left-0 w-full h-0.5 bg-green-100 -z-10 transform -translate-y-1/2"></div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-cyan-900 text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
<iconify-icon icon="solar:check-read-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-cyan-900">Lead</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-cyan-900 text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
<iconify-icon className="" icon="solar:chat-round-line-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-cyan-900">Discussion</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-cyan-900 text-white flex items-center justify-center border-4 border-white shadow-sm z-10">
<iconify-icon className="" height="14" icon="solar:palette-linear" style={{color: 'rgb(255, 255, 255)'}} width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-cyan-900">Design</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer">
<div className="w-8 h-8 rounded-full bg-white text-yellow-600 flex items-center justify-center border-[3px] border-yellow-600 shadow-sm z-10">
<iconify-icon className="" icon="solar:code-circle-linear" width="16"></iconify-icon>
</div>
<span className="text-xs font-semibold text-yellow-600">Development</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40">
<div className="w-8 h-8 rounded-full bg-green-50 text-blue-400 flex items-center justify-center border-[3px] border-green-200 z-10">
<iconify-icon icon="solar:eye-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-500">Review</span>
</div>

<div className="flex flex-col items-center gap-2 group cursor-pointer opacity-40">
<div className="w-8 h-8 rounded-full bg-green-50 text-blue-400 flex items-center justify-center border-[3px] border-green-200 z-10">
<iconify-icon icon="solar:box-minimalistic-linear" width="14"></iconify-icon>
</div>
<span className="text-xs font-medium text-blue-500">Delivered</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 lg:grid-cols-3 gap-8 gap-x-8 gap-y-8">

<div className="lg:col-span-2 space-y-6">

<div className="border-b border-green-200">
<div className="flex gap-6">
<button className="pb-3 text-sm font-medium text-cyan-900 border-b-2 border-cyan-900">Overview</button>
<button className="hover:text-cyan-900 transition-colors text-sm font-medium text-blue-500 pb-3">Requirements &amp; Files</button>
<button className="pb-3 text-sm font-medium text-blue-500 hover:text-cyan-900 transition-colors">Internal Notes</button>
</div>
</div>

<div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-cyan-900">Current Sprint Tasks</h3>
<button className="text-xs text-yellow-600 font-medium hover:underline">+ Add Task</button>
</div>
<div className="space-y-3">

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-green-300 rounded bg-white transition-colors flex items-center justify-center text-white peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-cyan-900">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="text-sm text-blue-700 group-hover:text-cyan-900">Setup React Router and basic navigation structure</span>
</div>
<span className="px-2 py-0.5 rounded bg-green-100 text-green-600 text-[10px] font-medium uppercase tracking-wider">Frontend</span>
</label>

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<div className="relative flex items-center">
<input checked="" className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-green-300 rounded bg-white transition-colors flex items-center justify-center text-white peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-cyan-900">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="text-sm text-blue-400 line-through">Configure PostgreSQL database schema</span>
</div>
<span className="px-2 py-0.5 rounded bg-green-100 text-green-600 text-[10px] font-medium uppercase tracking-wider">Backend</span>
</label>

<label className="flex items-start gap-3 cursor-pointer group custom-checkbox">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-green-300 rounded bg-white transition-colors flex items-center justify-center text-white peer-focus:ring-2 peer-focus:ring-offset-2 peer-focus:ring-cyan-900">
<iconify-icon className="hidden" icon="solar:check-read-linear" width="10"></iconify-icon>
</div>
</div>
<div className="flex-1">
<span className="text-sm text-blue-700 group-hover:text-cyan-900">Integrate Stripe Payment Gateway API</span>
</div>
<span className="px-2 py-0.5 rounded bg-purple-50 text-purple-600 text-[10px] font-medium uppercase tracking-wider">API</span>
</label>
</div>
</div>

<div className="bg-white rounded-xl border border-green-200 shadow-sm p-6">
<div className="flex items-center justify-between mb-4">
<h3 className="text-sm font-semibold text-cyan-900">Client Requirements &amp; Files</h3>
<button className="text-blue-400 hover:text-cyan-900"><iconify-icon icon="solar:upload-minimalistic-linear" width="18"></iconify-icon></button>
</div>

<div className="border-2 border-dashed border-green-200 rounded-lg p-6 flex flex-col items-center justify-center text-center mb-4 hover:border-cyan-300 hover:bg-green-50 transition-all cursor-pointer">
<iconify-icon className="text-blue-400 mb-2" icon="solar:cloud-upload-linear" width="24"></iconify-icon>
<p className="text-sm font-medium text-cyan-900">Click to upload or drag and drop</p>
<p className="text-xs text-blue-500 mt-1">SVG, PNG, JPG or PDF (max. 10MB)</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
<div className="flex items-center gap-3 p-3 rounded-lg border border-green-100 bg-green-50 hover:border-green-300 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded bg-white border border-green-200 flex items-center justify-center text-rose-500">
<iconify-icon icon="solar:file-pdf-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-cyan-900 truncate">Brand_Guidelines.pdf</p>
<p className="text-xs text-blue-500">2.4 MB • 12 Oct</p>
</div>
<button className="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-cyan-900"><iconify-icon icon="solar:download-linear" width="18"></iconify-icon></button>
</div>
<div className="flex items-center gap-3 p-3 rounded-lg border border-green-100 bg-green-50 hover:border-green-300 transition-colors cursor-pointer group">
<div className="w-10 h-10 rounded bg-white border border-green-200 flex items-center justify-center text-yellow-500">
<iconify-icon icon="solar:gallery-linear" width="20"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<p className="text-sm font-medium text-cyan-900 truncate">Logo_Assets.zip</p>
<p className="text-xs text-blue-500">14.2 MB • 10 Oct</p>
</div>
<button className="opacity-0 group-hover:opacity-100 text-blue-400 hover:text-cyan-900"><iconify-icon icon="solar:download-linear" width="18"></iconify-icon></button>
</div>
</div>
</div>
</div>

<div className="space-y-6">

<div className="bg-white border-green-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-purple-100 flex items-center justify-center text-indigo-700 font-semibold border border-indigo-50">
                                        JD
                                    </div>
<div className="">
<h3 className="text-sm font-semibold text-cyan-900">EASYBIZ.COM</h3>
<p className="text-xs text-blue-500">Acme Corporation</p>
</div>
</div>
<button className="text-blue-400 hover:text-cyan-900"><iconify-icon icon="solar:menu-dots-linear" width="18"></iconify-icon></button>
</div>
<div className="border-green-100 border-t pt-2 space-y-3">
<div className="flex items-center gap-3 text-sm text-blue-600">
<iconify-icon className="text-blue-400" icon="solar:letter-linear" width="16"></iconify-icon>
<span className="truncate">easybizweb@gmail.com</span>
</div>
<div className="flex gap-3 text-sm text-blue-600 gap-x-3 gap-y-3 items-center">
<iconify-icon className="text-blue-400" icon="solar:phone-calling-linear" width="16"></iconify-icon>
<span className="">+1 (555) 012-3456</span>
</div>
<div className="flex items-center gap-3 text-sm text-blue-600">
<iconify-icon className="text-blue-400" icon="solar:map-point-linear" width="16"></iconify-icon>
<span className="">MAHARASHTRA,INDIA</span>
</div>
</div>
<div className="mt-5 grid grid-cols-2 gap-3">
<button className="flex gap-2 hover:bg-white hover:border-green-300 transition-all text-xs font-medium text-blue-700 bg-green-50 w-full border-green-200 border rounded-md pt-2 pb-2 gap-x-2 gap-y-2 items-center justify-center cursor-pointer" onclick="window.location.href='https://www.instagram.com/trendora_dealss?igsh=ZDBwcW4yMHl5anJ1'" role="button">INSTAGRAM</button>
<button className="flex items-center justify-center gap-2 w-full py-2 text-xs font-medium text-green-700 bg-green-50 border border-green-100 rounded-md hover:bg-green-100 transition-all">
<iconify-icon icon="solar:chat-round-dots-linear" width="14"></iconify-icon>
                                    WhatsApp
                                </button>
</div>
</div>

<div className="bg-white border-green-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-sm font-semibold text-cyan-900 mb-4">Payment Status</h3>
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-blue-500">Total Budget</span>
<span className="text-sm font-semibold text-cyan-900">$156</span>
</div>
<div className="w-full bg-green-100 rounded-full h-2 mb-4">
<div className="bg-cyan-900 h-2 rounded-full" style={{width: '50%'}}></div>
</div>
<div className="space-y-3">
<div className="flex items-center justify-between p-2 rounded-md bg-green-50 border border-green-100">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-xs font-medium text-blue-700">Deposit (30%)</span>
</div>
<span className="text-xs font-semibold text-green-600">Paid</span>
</div>
<div className="flex items-center justify-between p-2 rounded-md bg-white border border-green-100">
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-blue-400"></div>
<span className="text-xs font-medium text-blue-700">Completion (70%)</span>
</div>
<span className="text-xs font-semibold text-blue-500">Pending</span>
</div>
</div>
<button className="w-full mt-4 flex items-center justify-center gap-2 py-2 text-xs font-medium text-cyan-900 bg-white border border-green-200 rounded-md hover:bg-green-50 hover:border-green-300 transition-all">
<iconify-icon icon="solar:bill-check-linear" width="14"></iconify-icon>
                                Generate Invoice
                            </button>
</div>

<div className="bg-white border-green-200 border rounded-xl pt-6 pr-6 pb-6 pl-6 shadow-sm">
<h3 className="text-sm font-semibold text-cyan-900 mb-4">Project Settings</h3>
<div className="space-y-4">
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-blue-700">Auto-Notifications</span>
<span className="text-[10px] text-blue-400">Email client on status change</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input className="toggle-checkbox block appearance-none cursor-pointer bg-white w-5 h-5 border-green-300 border-4 rounded-full absolute" id="toggle1" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-green-300 cursor-pointer" htmlFor="toggle1"></label>
</div>
</div>
<div className="flex items-center justify-between">
<div className="flex flex-col">
<span className="text-xs font-medium text-blue-700">Client Portal Access</span>
<span className="text-[10px] text-blue-400">Allow view access</span>
</div>
<div className="relative inline-block w-10 mr-2 align-middle select-none transition duration-200 ease-in">
<input checked="" className="toggle-checkbox absolute block w-5 h-5 rounded-full bg-white border-4 appearance-none cursor-pointer border-green-300" id="toggle2" name="toggle" type="checkbox"/>
<label className="toggle-label block overflow-hidden h-5 rounded-full bg-green-300 cursor-pointer" htmlFor="toggle2"></label>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
<footer className="mt-12 text-center text-xs text-blue-400 pb-4">
<p>© 2023 DevFlow CRM. All rights reserved.</p>
</footer>
</div>
</main>

<button className="fixed bottom-6 right-6 md:hidden w-12 h-12 bg-cyan-900 text-white rounded-full shadow-lg flex items-center justify-center z-50">
<iconify-icon icon="solar:add-circle-linear" width="24"></iconify-icon>
</button>

    </>
  );
}
