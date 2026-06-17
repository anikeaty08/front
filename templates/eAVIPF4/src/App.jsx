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
      
<div className="max-w-6xl w-full mx-auto">
<div className="text-center mb-12">
<h1 className="text-3xl font-semibold mb-2 bg-gradient-to-r from-indigo-400 to-purple-400 inline-block text-transparent bg-clip-text">Choose your plan</h1>
<p className="text-gray-400 max-w-2xl mx-auto">Select the perfect plan for your team's needs with our flexible options.</p>
</div>
<div className="grid grid-cols-4 rounded-xl overflow-hidden border border-gray-800 shadow-xl">

<div className="p-6 border-b border-gray-800 bg-[#12121a]"></div>
<div className="p-6 border-b border-gray-800 text-center bg-[#12121a] transition-all duration-200 hover:bg-[#15151f]">
<div className="text-lg font-medium">Free</div>
<div className="mt-2 text-2xl font-bold">$0</div>
<div className="mt-1 text-gray-400 text-sm">Forever</div>
</div>
<div className="p-6 border-b border-gray-800 text-center bg-[#14142a] relative transition-all duration-200 hover:bg-[#17173a]">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-indigo-500 to-purple-500"></div>
<div className="text-lg font-medium">Pro</div>
<div className="mt-2 text-2xl font-bold">$12</div>
<div className="mt-1 text-gray-400 text-sm">per user / month</div>
<div className="mt-2 inline-block rounded-full bg-indigo-900/50 px-2.5 py-0.5 text-xs text-indigo-300 ring-1 ring-indigo-700">Popular</div>
</div>
<div className="p-6 border-b border-gray-800 text-center bg-[#12121a] transition-all duration-200 hover:bg-[#15151f]">
<div className="text-lg font-medium">Enterprise</div>
<div className="mt-2 text-2xl font-bold">$49</div>
<div className="mt-1 text-gray-400 text-sm">per user / month</div>
</div>

<div className="p-6 border-b border-gray-800 bg-[#0f0f14]">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Core Features</span>
</div>
<div className="p-6 border-b border-gray-800 bg-[#0f0f14]"></div>
<div className="p-6 border-b border-gray-800 bg-[#10102a]"></div>
<div className="p-6 border-b border-gray-800 bg-[#0f0f14]"></div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Team members</span>
<div className="ml-2 group relative">
<svg className="w-4 h-4 text-gray-500 cursor-help" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zM8.94 6.94a.75.75 0 11-1.061-1.061 3 3 0 112.871 5.026v.345a.75.75 0 01-1.5 0v-.5c0-.72.57-1.172 1.081-1.287A1.5 1.5 0 108.94 6.94zM10 15a1 1 0 100-2 1 1 0 000 2z" fill-rule="evenodd"></path>
</svg>
<div className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 w-48 p-2 bg-gray-800 rounded-lg text-xs text-gray-300 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200">
            Number of users that can access your workspace.
          </div>
</div>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        Up to 3
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300 bg-[#10102a]">
        Up to 25
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        Unlimited
      </div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Projects</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        5
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300 bg-[#10102a]">
        Unlimited
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        Unlimited
      </div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Storage</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        500 MB
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300 bg-[#10102a]">
        10 GB
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        Unlimited
      </div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">History &amp; activity</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        30 days
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300 bg-[#10102a]">
        1 year
      </div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center text-sm text-gray-300">
        Unlimited
      </div>

<div className="p-6 border-b border-gray-800 bg-[#0f0f14]">
<span className="text-xs font-semibold uppercase tracking-wider text-gray-500">Advanced Features</span>
</div>
<div className="p-6 border-b border-gray-800 bg-[#0f0f14]"></div>
<div className="p-6 border-b border-gray-800 bg-[#10102a]"></div>
<div className="p-6 border-b border-gray-800 bg-[#0f0f14]"></div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">API access</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-gray-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center bg-[#10102a]">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Custom fields</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<span className="text-gray-300 text-sm">3</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center bg-[#10102a]">
<span className="text-gray-300 text-sm">50</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<span className="text-gray-300 text-sm">Unlimited</span>
</div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Priority support</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-gray-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center bg-[#10102a]">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">Advanced analytics</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-gray-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center bg-[#10102a]">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="p-5 border-b border-gray-800 flex items-center">
<span className="text-sm">SSO &amp; SAML</span>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-gray-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center bg-[#10102a]">
<svg className="w-5 h-5 text-gray-600" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M4 10a.75.75 0 01.75-.75h10.5a.75.75 0 010 1.5H4.75A.75.75 0 014 10z" fill-rule="evenodd"></path>
</svg>
</div>
<div className="p-5 border-b border-gray-800 flex justify-center items-center">
<svg className="w-5 h-5 text-indigo-400" fill="currentColor" viewbox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M16.704 4.153a.75.75 0 01.143 1.052l-8 10.5a.75.75 0 01-1.127.075l-4.5-4.5a.75.75 0 011.06-1.06l3.894 3.893 7.48-9.817a.75.75 0 011.05-.143z" fill-rule="evenodd"></path>
</svg>
</div>

<div className="p-6"></div>
<div className="p-6 flex justify-center">
<button className="w-full py-2.5 px-4 border border-gray-700 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
          Get started
        </button>
</div>
<div className="p-6 flex justify-center bg-[#10102a]">
<button className="w-full py-2.5 px-4 bg-indigo-600 rounded-md text-sm font-medium hover:bg-indigo-700 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
          Try Pro
        </button>
</div>
<div className="p-6 flex justify-center">
<button className="w-full py-2.5 px-4 border border-gray-700 rounded-md text-sm font-medium hover:bg-gray-800 transition-colors duration-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-indigo-500">
          Contact sales
        </button>
</div>
</div>
<div className="mt-10 text-center text-gray-500 text-sm">
      All plans include our standard security features and 99.9% uptime SLA.
      <a className="text-indigo-400 hover:text-indigo-300 ml-1 transition-colors" href="#">Learn more</a>
</div>
</div>

    </>
  );
}
