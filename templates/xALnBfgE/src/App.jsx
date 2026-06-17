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
      
<footer className="relative pt-20 pb-10 overflow-hidden">

<div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
<div className="absolute top-1/3 left-1/4 w-64 h-64 bg-cyan-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
<div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-5"></div>
</div>
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">

<div className="glass-effect rounded-2xl p-8 md:p-12 mb-16">
<div className="grid md:grid-cols-2 gap-8 items-center">
<div>
<h3 className="text-2xl md:text-3xl font-bold mb-4">Ready to elevate your UI design?</h3>
<p className="text-white/70 mb-6">Join over 10,000 developers building better experiences with FlowUI.</p>
<div className="flex flex-col sm:flex-row gap-4">
<input className="bg-white/10 border border-white/20 rounded-lg px-4 py-3 focus:outline-none focus:ring-2 focus:ring-cyan-400 focus:border-transparent" placeholder="Enter your email" type="email"/>
<button className="bg-gradient-to-r from-cyan-500 to-blue-500 rounded-lg px-6 py-3 font-medium shadow-lg shadow-blue-500/20 hover:shadow-blue-500/30 transition">
                Get Started Free
              </button>
</div>
</div>
<div className="hidden md:flex justify-end">
<div className="relative">
<div className="absolute inset-0 bg-gradient-to-r from-cyan-500/20 to-blue-500/20 rounded-xl rotate-6"></div>
<img alt="Team collaboration" className="relative rounded-xl w-80 object-cover" src="https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;w=320&amp;h=240&amp;q=80"/>
</div>
</div>
</div>
</div>

<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">

<div className="col-span-2 lg:col-span-1">
<div className="flex items-center space-x-2 mb-6">
<div className="w-10 h-10 rounded-full bg-gradient-to-r from-cyan-400 to-blue-500 flex items-center justify-center">
<svg className="h-6 w-6 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
<path d="M13 10V3L4 14h7v7l9-11h-7z" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<span className="text-xl font-bold text-white">FlowUI</span>
</div>
<p className="text-white/60 mb-6">Building the future of user interfaces with modern, accessible components.</p>
<div className="flex space-x-4">
<a className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" fill-rule="evenodd"></path></svg>
</a>
<a className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path></svg>
</a>
<a className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z" fill-rule="evenodd"></path></svg>
</a>
<a className="w-10 h-10 rounded-full glass-effect flex items-center justify-center hover:bg-white/10 transition" href="#">
<svg aria-hidden="true" className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path clip-rule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" fill-rule="evenodd"></path></svg>
</a>
</div>
</div>

<div>
<h4 className="font-semibold text-lg mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition" href="#">Features</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Pricing</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Components</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Integrations</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Enterprise</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-lg mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition" href="#">Documentation</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Tutorials</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Blog</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Changelog</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Community</a></li>
</ul>
</div>

<div>
<h4 className="font-semibold text-lg mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-white/60 hover:text-white transition" href="#">About</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Careers</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Contact</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Partners</a></li>
<li><a className="text-white/60 hover:text-white transition" href="#">Media Kit</a></li>
</ul>
</div>
</div>

<div className="pt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center">
<p className="text-white/60 text-sm mb-4 md:mb-0">© 2023 FlowUI. All rights reserved.</p>
<div className="flex flex-wrap justify-center gap-6">
<a className="text-white/60 hover:text-white text-sm" href="#">Terms of Service</a>
<a className="text-white/60 hover:text-white text-sm" href="#">Privacy Policy</a>
<a className="text-white/60 hover:text-white text-sm" href="#">Cookie Settings</a>
<a className="text-white/60 hover:text-white text-sm" href="#">Accessibility</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
