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



    function toggleDarkMode(cb) {
      if(cb.checked) {
        document.documentElement.classList.add('dark');
      } else {
        document.documentElement.classList.remove('dark');
      }
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
      
<footer className="relative border-t bg-background text-foreground transition-colors duration-300 dark:bg-zinc-950 dark:text-zinc-100">
<div className="container mx-auto px-4 py-12 md:px-6 lg:px-8">
<div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

<div className="relative">
<h2 className="mb-4 text-3xl font-bold tracking-tight">Stay Connected</h2>
<p className="mb-6 text-zinc-500 dark:text-zinc-400">
            Join our newsletter for the latest updates and exclusive offers.
          </p>
<form className="relative">
<input className="pr-12 backdrop-blur-sm rounded-md border border-zinc-300 dark:border-zinc-700 px-3 py-2 w-full bg-white/80 dark:bg-zinc-900/80 text-sm dark:text-white focus:outline-none focus:ring-2 focus:ring-primary" placeholder="Enter your email" type="email"/>
<button className="absolute right-1 top-1 h-8 w-8 rounded-full bg-zinc-900 text-white flex items-center justify-center transition-transform hover:scale-105" type="submit">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<line x1="22" x2="11" y1="2" y2="13"></line>
<polygon points="22 2 15 22 11 13 2 9 22 2"></polygon>
</svg>
<span className="sr-only">Subscribe</span>
</button>
</form>
<div className="absolute -right-4 top-0 h-24 w-24 rounded-full bg-indigo-500/10 blur-2xl pointer-events-none"></div>
</div>

<div>
<h3 className="mb-4 text-lg font-semibold">Quick Links</h3>
<nav className="space-y-2 text-sm">
<a className="block transition-colors hover:text-indigo-500" href="#">Home</a>
<a className="block transition-colors hover:text-indigo-500" href="#">About Us</a>
<a className="block transition-colors hover:text-indigo-500" href="#">Services</a>
<a className="block transition-colors hover:text-indigo-500" href="#">Products</a>
<a className="block transition-colors hover:text-indigo-500" href="#">Contact</a>
</nav>
</div>

<div>
<h3 className="mb-4 text-lg font-semibold">Contact Us</h3>
<address className="space-y-2 text-sm not-italic">
<p>789 Sample Avenue</p>
<p>Placeholder City, ZZ 98765</p>
<p>Phone: (555) 432-1987</p>
<p>Email: contact@placeholder.net</p>
</address>
</div>

<div className="relative">
<h3 className="mb-4 text-lg font-semibold">Follow Us</h3>
<div className="mb-6 flex space-x-4">
<a aria-label="Facebook" className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition flex items-center justify-center w-9 h-9" href="#" title="Follow us on Facebook">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
</svg>
<span className="sr-only">Facebook</span>
</a>
<a aria-label="Twitter" className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition flex items-center justify-center w-9 h-9" href="#" title="Follow us on Twitter">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M23 3a10.9 10.9 0 0 1-3.14 1.53A4.48 4.48 0 0 0 16 3a4.48 4.48 0 0 0-4.47 4.48c0 .35.04.69.11 1A12.94 12.94 0 0 1 3 4.15s-4 9 5 13a13 13 0 0 1-7 2c9 5 20 0 20-11.5A4.5 4.5 0 0 0 23 3z"></path>
</svg>
<span className="sr-only">Twitter</span>
</a>
<a aria-label="Instagram" className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition flex items-center justify-center w-9 h-9" href="#" title="Follow us on Instagram">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect>
<path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
<line x1="17.5" x2="17.5" y1="6.5" y2="6.5"></line>
</svg>
<span className="sr-only">Instagram</span>
</a>
<a aria-label="LinkedIn" className="rounded-full bg-zinc-100 dark:bg-zinc-800 border border-zinc-200 dark:border-zinc-700 hover:bg-indigo-500 hover:text-white dark:hover:bg-indigo-500 transition flex items-center justify-center w-9 h-9" href="#" title="Connect with us on LinkedIn">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<rect height="20" rx="5" width="20" x="2" y="2"></rect>
<line x1="16" x2="16" y1="11" y2="16"></line>
<line x1="8" x2="8" y1="11" y2="16"></line>
<line x1="8" x2="8" y1="8" y2="8"></line>
</svg>
<span className="sr-only">LinkedIn</span>
</a>
</div>
<div className="flex items-center space-x-2 mt-2">
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<circle cx="12" cy="12" r="5"></circle><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"></path>
</svg>
<label className="sr-only" htmlFor="dark-toggle">Toggle dark mode</label>
<input checked="" className="appearance-none w-10 h-6 rounded-full bg-zinc-300 dark:bg-zinc-700 checked:bg-indigo-500 relative outline-none transition-colors cursor-pointer" id="dark-toggle" onclick="toggleDarkMode(this)" type="checkbox"/>
<svg className="h-4 w-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24">
<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"></path>
</svg>
</div>
</div>
</div>
<div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-zinc-200 dark:border-zinc-700 pt-8 text-center md:flex-row">
<p className="text-sm text-zinc-500 dark:text-zinc-400">
          © 2024 Your Company. All rights reserved.
        </p>
<nav className="flex gap-4 text-sm">
<a className="transition-colors hover:text-indigo-500" href="#">Privacy Policy</a>
<a className="transition-colors hover:text-indigo-500" href="#">Terms of Service</a>
<a className="transition-colors hover:text-indigo-500" href="#">Cookie Settings</a>
</nav>
</div>
</div>
</footer>

    </>
  );
}
