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
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['DM Sans', 'sans-serif'],
display: ['Oswald', 'sans-serif'],
},
colors: {
brand: {
black: '#0f0f0f',
red: '#D01B1B',
cream: '#F7F4EB',
accent: '#F4EBD0'
}
},
animation: {
'scroll': 'scroll 25s linear infinite',
'bounce-slow': 'bounce 3s infinite',
},
keyframes: {
scroll: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-100%)' },
}
}
}
}
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        lucide.createIcons({
            attrs: {
                strokeWidth: 1.5
            }
        });
        
        // Simple scroll to anchor behavior
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                document.querySelector(this.getAttribute('href')).scrollIntoView({
                    behavior: 'smooth'
                });
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
      

<header className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex md:justify-between text-slate-950 bg-[#FFFFFF] w-full max-w-6xl rounded-2xl pt-4 pr-6 pb-4 pl-6 relative shadow-2xl items-center justify-center">

<div className="md:hidden absolute top-1/2 left-6 -translate-y-1/2 z-[102]">
<button aria-label="Open menu" className="hover:text-[#E85424] transition-colors focus:outline-none cursor-pointer block text-slate-950 bg-transparent border-0 shadow-none p-2" onclick="let o=document.getElementById('mobile-menu-overlay'),s=document.getElementById('mobile-menu-sidebar');if(o&amp;&amp;s){o.classList.remove('hidden','opacity-0','pointer-events-none');o.classList.add('opacity-100','pointer-events-auto');s.classList.remove('hidden','-translate-x-full','opacity-0','pointer-events-none');s.classList.add('translate-x-0','opacity-100','pointer-events-auto');document.body.style.overflow='hidden';}">
<svg className="w-[24px] h-[24px]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<line className="" x1="4" x2="20" y1="12" y2="12"></line>
<line x1="4" x2="20" y1="6" y2="6"></line>
<line className="" x1="4" x2="20" y1="18" y2="18"></line>
</svg>
</button>
</div>
<a className="uppercase inline-flex items-center text-xl font-semibold text-slate-950 tracking-tighter font-display" href="/homepage">
<img alt="Rollicious Vietnamese Logo" className="md:h-16 bg-center cursor-pointer w-auto h-12 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/f0b48589-b37b-4b3b-80c2-d4fead5bf7b3_800w.png"/>
</a>
<div className="hidden md:flex gap-8 gap-x-8 gap-y-8 items-center">
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/story-page">Story</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/menu-page">Menu</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/location-page">find
      us</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/catering-page">catering</a>
<a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/contact-page">contact</a><a className="hover:text-[#E85424] transition-colors uppercase text-sm font-medium text-[#000000]/80 tracking-wider" href="/feedback-review">Reviews</a>
</div>
<div className="hidden md:flex gap-3 gap-x-3 gap-y-3 items-center">
<a className="uppercase transition-colors hover:bg-[#234220] shadow-orange-900/20 text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg pt-2 pr-5 pb-2 pl-5 shadow-lg" href="https://order.rollicious.co.nz/">
      Order Online
    </a>
</div>
</nav>
</header>

<div className="hidden md:hidden fixed inset-0 bg-black/40 backdrop-blur-sm z-[100] opacity-0 pointer-events-none transition-all duration-300" id="mobile-menu-overlay" onclick="let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
</div>

<div className="hidden md:hidden fixed top-0 left-0 w-[80%] max-w-[320px] h-screen bg-white z-[101] flex flex-col -translate-x-full opacity-0 pointer-events-none transition-all duration-300 overflow-y-auto text-left" id="mobile-menu-sidebar" onclick="event.stopPropagation()">

<div className="flex items-center justify-between border-b border-gray-200 p-6">
<h2 className="text-2xl font-semibold text-slate-900 tracking-tight font-display">Menu</h2>
<button aria-label="Close menu" className="p-2 -mr-2 text-slate-900 hover:text-[#E85424] transition-colors cursor-pointer" onclick="event.stopPropagation();let s=document.getElementById('mobile-menu-sidebar'),o=document.getElementById('mobile-menu-overlay');if(s){s.classList.remove('translate-x-0','opacity-100','pointer-events-auto');s.classList.add('-translate-x-full','opacity-0','pointer-events-none');setTimeout(function(){s.classList.add('hidden');},300);}if(o){o.classList.remove('opacity-100','pointer-events-auto');o.classList.add('opacity-0','pointer-events-none');setTimeout(function(){o.classList.add('hidden');},300);}document.body.style.overflow='';">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M18 6 6 18"></path>
<path d="m6 6 12 12"></path>
</svg>
</button>
</div>

<div className="flex flex-col py-2 border-b border-gray-200">
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/story-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Story</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/menu-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Menu</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/location-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Find Us</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/catering-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Catering</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/contact-page">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Contact</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
<a className="flex items-center justify-between px-6 py-4 group cursor-pointer" href="/feedback-review">
<span className="text-lg font-serif text-slate-900 group-hover:text-[#E85424] transition-colors">Reviews</span>
<span className="text-slate-900 group-hover:text-[#E85424] transition-colors">→</span>
</a>
</div>

<div className="px-6 py-8 mt-auto">
<a className="flex items-center justify-center w-full uppercase transition-colors hover:bg-[#E85424] text-xs font-semibold text-white tracking-wide bg-[#234220] rounded-lg py-3 shadow-lg cursor-pointer" href="https://order.rollicious.co.nz/">
    Order Online
  </a>
</div>
</div>
<section className="pt-40 pb-24 px-4 sm:px-6 lg:px-8 max-w-5xl mx-auto w-full">
<div className="sm:p-12 md:p-16 bg-[#FFFFFF] rounded-3xl pt-8 pr-8 pb-8 pl-8 shadow-xl">
<div className="mb-12 border-b border-gray-100 pb-8">
<h1 className="md:text-5xl uppercase text-4xl font-semibold text-slate-950 tracking-tighter font-display mb-4">Privacy
      Policy</h1>
<p className="uppercase text-sm font-medium text-[#E85424] tracking-wider">Last updated: May 2026</p>
</div>
<div className="space-y-12 text-[#000000]/80 leading-relaxed text-base sm:text-lg">

<div className="">
<p className="mb-4">Rollicious Vietnamese (“we”, “our”, “us”) is committed to protecting your privacy and handling your personal information
in accordance with the New Zealand Privacy Act 2020.

This Privacy Policy explains how we collect, use, store, and protect your personal information when you interact with
our website or services.</p><h2 className="text-2xl font-semibold text-slate-950 font-display tracking-tight uppercase mb-4">1. What Information We Collect</h2>
<p className="">
  We may collect the following types of personal information:
  <span className="block mt-4 mb-8 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Name</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Email address</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Phone number</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Order details and preferences</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Delivery or pickup information</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Any information you provide through forms or enquiries</span></span>
</span>
  We may also collect non-personal data such as:
  <span className="block mt-4 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Website usage data (e.g. pages visited, time on site)</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Device and browser information</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Cookies and tracking data</span></span>
</span>
</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">2. How We Collect Your Information</h2>
<p className="">
  We collect information when you:
  <span className="block mt-4 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Place an order online</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Fill out a contact form</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Subscribe to updates or promotions</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Interact with our website</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Contact us via email, phone, or social media</span></span>
</span>
</p>
</div>

<div className="">
<h2 className="text-2xl font-semibold text-slate-950 font-display tracking-tight uppercase mb-4">3. How We Use Your
        Information</h2>
<p className="">
  We use your information to:
  <span className="block mt-4 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Process and fulfil orders</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Communicate with you about your order or enquiry</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Improve our products, services, and website</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Send updates, promotions, or marketing (only if you opt in)</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Ensure the security and proper functioning of our website</span></span>
</span>
</p>
</div>

<div className="">
<h2 className="text-2xl font-semibold text-slate-950 font-display tracking-tight uppercase mb-4">4. Will Your
        Information Be Shared?</h2>
<p className="">
<span className="block mb-6">We do not sell your personal information.</span>
  We may share your information with trusted third parties where necessary, including:
  <span className="block mt-4 mb-6 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Payment processors</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Delivery partners</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span>Website and hosting providers</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Analytics tools (e.g. Google Analytics, Meta)</span></span>
</span>
  These parties are required to handle your information securely and only for the purposes we specify.
</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">5. Cookies and Tracking</h2>
<p className="">
  Our website may use cookies and similar technologies to:
  <span className="block mt-4 mb-6 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Improve your browsing experience</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Analyse website performance</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Support marketing and advertising efforts</span></span>
</span>
  You can disable cookies through your browser settings if you prefer.
</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">6. Storage and Security</h2>
<p className="">We take reasonable steps to keep your personal information secure and protect it from unauthorised access, loss, or misuse.<span className="block mt-4">Your data is stored securely and only accessible to authorised personnel.</span></p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">7. Access and Correction</h2>
<p className="">
  Under the New Zealand Privacy Act 2020, you have the right to:
  <span className="block mt-4 mb-6 space-y-3 pl-2">
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Access the personal information we hold about you</span></span>
<span className="flex items-start gap-3"><span className="select-none">•</span><span className="">Request correction of your information</span></span>
</span>
  To exercise these rights, please contact us at <a className="text-slate-950 hover:text-[#E85424] transition-colors underline underline-offset-4 decoration-gray-300 hover:decoration-[#E85424]" href="mailto:hello@rollicious.co.nz">hello@rollicious.co.nz</a>.
</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">8. Marketing Communications</h2>
<p className="">If you have opted in to receive marketing communications, you can unsubscribe at any time by: Clicking the unsubscribe link in emails OR Contacting us directly.</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">9. Third-Party Links</h2>
<p className="">Our website may contain links to third-party websites.
We are not responsible for the privacy practices of those websites.</p>
</div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">10. Changes to This Policy</h2>
<p className="">We may update this Privacy Policy from time to time.
Any changes will be posted on this page with an updated effective date.</p>
</div>
<div className="border-b border-gray-100"></div>

<div className="">
<h2 className="uppercase text-2xl font-semibold text-slate-950 tracking-tight font-display mb-4">11. Contact Us</h2>
<p className="mb-6">
  If you have any questions about this Privacy Policy or your personal information, contact us at:
</p>
<div className="space-y-2">
<p className="">
<span className="font-semibold text-slate-950">Email:</span>
<a className="inline-flex items-center gap-1 underline decoration-dotted underline-offset-4 decoration-gray-400 hover:decoration-[#E85424] hover:text-[#E85424] transition-colors" href="mailto:hello@rollicious.co.nz">
            hello@rollicious.co.nz 
            <i className="w-4 h-4" data-lucide="arrow-up-right" strokeWidth="1.5"></i>
</a>
</p>
</div>
</div>
</div>
</div>
</section>
<main className="">








</main>

<footer className="text-white bg-[#f7f4eb] border-white/10 border-t pt-20 pb-10">
<div className="sm:px-8 max-w-7xl mr-auto ml-auto pr-4 pl-4">
<div className="flex flex-col sm:flex-row uppercase text-xs text-[#E85424] tracking-widest border-white/10 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<p className="">© Rollicious, 2026</p>
<div className="flex gap-6">
<a className="hover:text-[#234220]" href="/privacy-page">Privacy Policy</a>
<a className="hover:text-[#234220]" href="/terms-page">Terms &amp; Conditions</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
