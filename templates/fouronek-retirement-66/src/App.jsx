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



        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
            menu.classList.toggle('flex');
        }
        function initObservers() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                        observer.unobserve(entry.target);
                    }
                });
            }, { threshold: 0.1, rootMargin: "0px 0px -50px 0px" });
            document.querySelectorAll('.fade-up:not(.visible)').forEach(el => observer.observe(el));
        }
        document.addEventListener('DOMContentLoaded', initObservers);
    


        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            btn.querySelector('.btn-text').classList.add('hidden');
            btn.querySelector('.spinner').style.display = 'block';
            btn.disabled = true;
            setTimeout(() => window.location.href = 'thank-you.html?type=employer', 1000);
        }
        function initObservers() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); }
                });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        }
        document.addEventListener('DOMContentLoaded', initObservers);
    


        function handleFormSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            btn.querySelector('.btn-text').classList.add('hidden');
            btn.querySelector('.spinner').style.display = 'block';
            btn.disabled = true;
            setTimeout(() => window.location.href = 'thank-you.html?type=employee', 1000);
        }
        function initObservers() {
            const observer = new IntersectionObserver((entries) => {
                entries.forEach(entry => { if (entry.isIntersecting) { entry.target.classList.add('visible'); observer.unobserve(entry.target); } });
            }, { threshold: 0.1 });
            document.querySelectorAll('.fade-up').forEach(el => observer.observe(el));
        }
        document.addEventListener('DOMContentLoaded', initObservers);
    


        function handlePartnerSubmit(e) {
            e.preventDefault();
            const btn = e.target.querySelector('button[type="submit"]');
            const text = btn.querySelector('.btn-text');
            const spinner = btn.querySelector('.spinner');
            text.classList.add('hidden');
            spinner.style.display = 'block';
            btn.disabled = true;
            setTimeout(() => {
                text.classList.remove('hidden');
                text.textContent = 'Application Received!';
                spinner.style.display = 'none';
                e.target.reset();
            }, 1500);
        }
        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.fade-up').forEach(el => {
                setTimeout(() => el.classList.add('visible'), 100);
            });
        });
    


        document.addEventListener('DOMContentLoaded', () => {
            document.querySelectorAll('.fade-up').forEach(el => el.classList.add('visible'));
            
            const params = new URLSearchParams(window.location.search);
            const type = params.get('type');
            
            if (type === 'employee') {
                document.getElementById('thank-you-employee').classList.remove('hidden');
            } else {
                document.getElementById('thank-you-employer').classList.remove('hidden');
            }
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
      
<nav className="fixed top-0 w-full z-50 bg-[#F9FAFB]/95 backdrop-blur-md border-b border-gray-200/50 transition-all duration-300" id="global-nav">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
<a className="font-serif font-semibold text-xl tracking-tighter text-[#0A1F44] flex items-center gap-1" href="index.html">
                FOURONEK<span className="text-[#F5A623]">.</span>
</a>
<div className="hidden md:flex items-center gap-6 lg:gap-8">
<a className="text-sm font-medium text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="employer.html">For Employers</a>
<a className="text-sm font-medium text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="employee.html">For Employees</a>
<a className="text-sm font-medium text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="partners.html">Partners</a>
</div>
<div className="flex items-center gap-3 sm:gap-4">
<button className="hidden sm:block bg-[#F5A623] hover:bg-[#e0961b] text-[#0A1F44] text-xs sm:text-sm font-semibold py-2 px-4 rounded-md transition-all duration-300 shadow-sm hover:shadow-md hover:scale-[1.03]" onclick="window.location.href='thank-you.html'">
                    Book Consultation
                </button>
<button className="md:hidden text-[#0A1F44] text-2xl flex items-center focus:outline-none" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden absolute top-16 left-0 w-full bg-white border-b border-gray-200 shadow-xl pb-4 pt-2 px-4 flex-col gap-4 z-40" id="mobile-menu">
<a className="block text-base font-medium text-[#4A5568] hover:text-[#0A1F44]" href="employer.html">For Employers</a>
<a className="block text-base font-medium text-[#4A5568] hover:text-[#0A1F44]" href="employee.html">For Employees</a>
<a className="block text-base font-medium text-[#4A5568] hover:text-[#0A1F44]" href="partners.html">Partners</a>
<button className="w-full bg-[#F5A623] hover:bg-[#e0961b] text-[#0A1F44] text-sm font-semibold py-2.5 px-4 rounded-md transition-all duration-300 shadow-sm mt-2" onclick="window.location.href='thank-you.html'">
                Book Consultation
            </button>
</div>
</nav>
<main className="flex-grow w-full flex flex-col pt-16">
<section className="flex-grow bg-[#0A1F44] flex flex-col items-center justify-center py-20 px-4 min-h-[calc(100vh-4rem)]">
<div className="max-w-4xl mx-auto w-full text-center fade-up flex-grow flex flex-col justify-center">
<h1 className="font-serif font-semibold text-4xl sm:text-5xl lg:text-6xl text-white tracking-tight leading-tight mb-4">
                    Your Company's 401(k) Shouldn't Be This Complicated — Or This Expensive
                </h1>
<p className="text-[#F5A623] text-lg sm:text-xl font-medium tracking-tight mb-12">
                    Tell us who you are so we can guide you to the right solution.
                </p>
<div className="grid md:grid-cols-2 gap-6 max-w-3xl mx-auto w-full mb-12">
<div className="group bg-white rounded-xl p-8 text-left cursor-pointer border border-transparent hover:border-[#F5A623]/50 hover:shadow-2xl hover:shadow-[#F5A623]/10 transition-all duration-300 hover:-translate-y-1 relative overflow-hidden flex flex-col h-full" onclick="window.location.href='employer.html'">
<div className="absolute inset-0 bg-gradient-to-br from-[#F5A623]/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity"></div>
<iconify-icon className="text-4xl text-[#F5A623] mb-4" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif font-semibold text-2xl tracking-tight mb-2">I'm a Business Owner</h2>
<p className="text-[#4A5568] text-sm sm:text-base mb-8 flex-grow">I want to set up or improve a 401(k) plan for my company, maximize tax credits, and recruit better talent.</p>
<div className="inline-flex items-center gap-2 bg-[#F5A623] text-[#0A1F44] text-sm font-semibold py-3 px-5 rounded-md group-hover:bg-[#e0961b] transition-colors w-full justify-center">
                            Set Up My Company Plan <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="group bg-white rounded-xl p-8 text-left cursor-pointer border border-transparent hover:border-[#0A1F44]/20 hover:shadow-xl transition-all duration-300 hover:-translate-y-1 flex flex-col h-full" onclick="window.location.href='employee.html'">
<iconify-icon className="text-4xl text-[#0A1F44] mb-4" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
<h2 className="font-serif font-semibold text-2xl tracking-tight mb-2">I'm an Employee</h2>
<p className="text-[#4A5568] text-sm sm:text-base mb-8 flex-grow">My company doesn't offer a 401(k) yet, and I want to securely and anonymously request one to maximize my retirement.</p>
<div className="inline-flex items-center gap-2 border border-[#0A1F44] text-[#0A1F44] text-sm font-semibold py-3 px-5 rounded-md group-hover:bg-[#0A1F44] group-hover:text-white transition-colors w-full justify-center">
                            Help Me Maximize My Wealth <iconify-icon className="text-lg" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-6 text-white/50 text-xs sm:text-sm font-medium flex-wrap">
<span className="flex items-center gap-1"><iconify-icon icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon> Bank-level security</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon> IRS Compliant</span>
<span className="flex items-center gap-1"><iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon> 30,000+ Users</span>
</div>
</div>
</section>
</main>
<footer className="bg-white border-t border-gray-200 py-12">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex flex-col md:flex-row justify-between items-center md:items-start gap-8">
<div className="text-center md:text-left">
<span className="font-serif font-semibold text-xl tracking-tighter text-[#0A1F44] block mb-2">FOURONEK<span className="text-[#F5A623]">.</span></span>
<p className="text-sm text-[#4A5568] max-w-xs leading-relaxed">Making compliant, affordable retirement setup simple for modern small businesses and their teams.</p>
</div>
<div className="flex flex-col sm:flex-row gap-8 text-center sm:text-left">
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-wider text-[#0A1F44]">Platform</span>
<a className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="employer.html">Employers</a>
<a className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="employee.html">Employees</a>
<a className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="partners.html">Partners</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-xs font-semibold uppercase tracking-wider text-[#0A1F44]">Legal</span>
<a className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="#">Privacy Policy</a>
<a className="text-sm text-[#4A5568] hover:text-[#0A1F44] transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
<div className="mt-12 pt-8 border-t border-gray-100 flex flex-col sm:flex-row justify-between items-center gap-4">
<p className="text-xs text-[#4A5568]">© 2023 FOURONEK Inc. All rights reserved.</p>
</div>
</div>
</footer>


    </>
  );
}
