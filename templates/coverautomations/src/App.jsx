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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Scroll Reveal Animation Script
        document.addEventListener('DOMContentLoaded', () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.classList.remove('opacity-0', 'translate-y-6', 'translate-y-8');
                        entry.target.classList.add('opacity-100', 'translate-y-0');
                        observer.unobserve(entry.target);
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.scroll-reveal').forEach((el) => {
                // Initialize classes for un-revealed state to prevent flickering
                if(!el.classList.contains('opacity-100')) {
                     el.classList.add('opacity-0', 'translate-y-6');
                }
                observer.observe(el);
            });
        });

        // Form Submission to Zapier Webhook
        document.getElementById('contactForm').addEventListener('submit', async function(e) {
            e.preventDefault();
            
            const form = e.target;
            const submitBtn = document.getElementById('submitBtn');
            const originalBtnHtml = submitBtn.innerHTML;
            
            // Collect form data
            const formData = new FormData(form);
            const data = Object.fromEntries(formData.entries());
            
            // Set loading state
            submitBtn.innerHTML = '<iconify-icon icon="solar:spinner-linear" stroke-width="1.5" class="animate-spin text-lg"></iconify-icon><span>Submitting...</span>';
            submitBtn.disabled = true;
            submitBtn.classList.add('opacity-80', 'cursor-not-allowed');

            try {
                // IMPORTANT: Replace this URL with your actual Zapier Webhook URL
                const zapierWebhookUrl = 'https://hooks.zapier.com/hooks/catch/27004695/un17933/';
                
                // Using 'no-cors' mode avoids standard CORS blocking from Zapier on client-side requests
                await fetch(zapierWebhookUrl, {
                    method: 'POST',
                    mode: 'no-cors',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(data)
                });

                // Show success state
                submitBtn.innerHTML = '<iconify-icon icon="solar:check-circle-linear" stroke-width="1.5" class="text-lg"></iconify-icon><span>Message Sent</span>';
                submitBtn.classList.remove('bg-zinc-100', 'text-zinc-950', 'hover:bg-white', 'opacity-80', 'cursor-not-allowed');
                submitBtn.classList.add('bg-zinc-800', 'text-zinc-100', 'border', 'border-zinc-700');
                
                // Reset form fields
                form.reset();
                
                // Revert button after 4 seconds
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnHtml;
                    submitBtn.classList.remove('bg-zinc-800', 'text-zinc-100', 'border', 'border-zinc-700');
                    submitBtn.classList.add('bg-zinc-100', 'text-zinc-950', 'hover:bg-white');
                    submitBtn.disabled = false;
                }, 4000);

            } catch (error) {
                console.error('Submission Error:', error);
                // Show error state
                submitBtn.innerHTML = '<iconify-icon icon="solar:close-circle-linear" stroke-width="1.5" class="text-lg"></iconify-icon><span>Error. Try Again.</span>';
                submitBtn.classList.remove('opacity-80', 'cursor-not-allowed');
                
                setTimeout(() => {
                    submitBtn.innerHTML = originalBtnHtml;
                    submitBtn.disabled = false;
                }, 3000);
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
      

<div className="fixed inset-0 z-[-2] overflow-hidden pointer-events-none bg-zinc-950">

<div className="absolute -top-[10%] -left-[10%] w-[50vw] h-[50vw] rounded-full bg-zinc-800/10 blur-[100px] animate-blob1"></div>

<div className="absolute -bottom-[10%] -right-[10%] w-[60vw] h-[60vw] rounded-full bg-zinc-800/10 blur-[120px] animate-blob2"></div>

<div className="absolute top-[30%] right-[10%] w-[40vw] h-[40vw] rounded-full bg-zinc-800/5 blur-[90px] animate-blob3"></div>
</div>

<div className="fixed inset-0 z-[-1] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-zinc-900/30 via-transparent to-transparent pointer-events-none"></div>

<nav className="fixed top-0 w-full z-50 border-b border-zinc-900 bg-zinc-950/70 backdrop-blur-md">
<div className="sm:px-6 lg:px-8 max-w-6xl mx-auto px-4 relative">
<div className="flex items-center justify-between h-16">

<div className="flex-shrink-0 cursor-pointer flex items-center gap-2.5 z-10" onclick="window.scrollTo(0,0)">
<img alt="Cover Logo" className="w-12 h-12 object-cover rounded" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70d9e2b0-ee5d-479c-bbdd-b0fed28a1304_320w.png"/>
<span className="uppercase text-lg font-semibold text-zinc-100 tracking-tighter">Cover</span>
</div>

<div className="hidden md:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 space-x-8 items-center z-0">
<a className="hover:text-zinc-100 transition-colors text-sm font-medium text-zinc-400" href="#home">Home</a>
<a className="hover:text-zinc-100 transition-colors text-sm font-medium text-zinc-400" href="#contact">Contact</a>
</div>
<div className="z-10">
<a className="inline-flex items-center gap-1.5 px-4 py-2 text-xs font-medium rounded-md bg-zinc-100 text-zinc-950 hover:bg-white transition-colors" href="#contact">
                        Book Consultation
                    </a>
</div>
</div>
</div>
</nav>
<main className="flex-grow pt-16">

<section className="md:pt-32 md:pb-32 flex flex-col min-h-[85vh] text-center max-w-5xl mx-auto pt-24 px-4 pb-24 relative items-center justify-center" id="home">
<h1 className="scroll-reveal transition-all duration-700 ease-out sm:text-5xl md:text-7xl leading-[1.1] text-4xl font-semibold text-zinc-100 tracking-tighter opacity-100 mb-6 translate-y-0">We help local businesses <br className="hidden sm:block"/> scale using AI Automation...</h1>
<p className="scroll-reveal transition-all duration-700 delay-100 ease-out leading-relaxed sm:text-lg text-base font-medium text-zinc-400 opacity-100 max-w-2xl mr-auto mb-10 ml-auto translate-y-0">Expand your reach. Capture more opportunities. Here at Cover Automations, we make sure every enquiry turns into a returning customer and every potential lead gets filled. Businesses nationwide work with us to eliminate missed leads and run their operations smoother than ever.</p>
<div className="scroll-reveal transition-all duration-700 delay-200 ease-out flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-16 opacity-100 translate-y-0">
<a className="hover:bg-white transition-colors flex items-center justify-center gap-2 sm:w-auto text-sm font-medium text-zinc-950 bg-zinc-100 w-full rounded-md pt-3 pr-6 pb-3 pl-6" href="#contact">Book a Consultation<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon></a>
</div>

<div className="scroll-reveal transition-all duration-1000 delay-300 ease-out sm:p-4 bg-zinc-900/40 w-full max-w-4xl border-zinc-800/80 border rounded-xl p-2 relative shadow-2xl backdrop-blur-sm opacity-100 translate-y-0">
<div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-transparent to-transparent z-10 pointer-events-none rounded-xl"></div>
<img alt="Platform Preview" className="w-full h-auto object-cover border-zinc-800 border rounded-lg relative z-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0e63356f-25dc-4438-b327-a25886332fa4_3840w.png"/>
</div>
</section>

<section className="bg-zinc-950/20 border-zinc-900/50 border-t pt-24 pr-4 pb-24 pl-4" id="testimonial">
<div className="max-w-3xl mx-auto scroll-reveal transition-all duration-700 ease-out">
<div className="p-8 md:p-12 rounded-2xl border border-zinc-800/80 bg-zinc-900/20 backdrop-blur-sm relative overflow-hidden group">
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-zinc-800/10 to-transparent opacity-0 absolute top-0 right-0 bottom-0 left-0"></div>
<iconify-icon className="text-4xl text-zinc-800 mb-6" icon="solar:quote-left-linear" strokeWidth="1.5"></iconify-icon>
<p className="text-xl sm:text-2xl font-medium tracking-tight text-zinc-200 mb-10 leading-snug relative z-10">
                        "COVER Automations has streamlined our booking process and improved client retention significantly. The system works reliably and has noticeably boosted our efficiency."
                    </p>
<div className="flex items-center gap-4 relative z-10">
<div className="w-12 h-12 rounded-full bg-zinc-900/80 flex items-center justify-center text-zinc-400 border border-zinc-800/80 overflow-hidden">
<iconify-icon className="text-2xl" icon="solar:user-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<div className="text-sm font-medium text-zinc-100 tracking-tight">Marcus Reynolds</div>
<div className="text-xs text-zinc-500 mt-0.5">Director</div>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 border-zinc-900 border-t py-24 px-4 relative" id="contact">
<div className="max-w-xl mx-auto">
<div className="text-center mb-10 scroll-reveal transition-all duration-700 ease-out">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight mb-3 text-zinc-100">Get in touch</h2>
<p className="text-sm text-zinc-400">Ready to build your scalable systems? Fill out the details below to schedule your consultation.</p>
</div>
<div className="scroll-reveal transition-all duration-700 delay-100 ease-out bg-zinc-900/30 border border-zinc-800/80 p-6 sm:p-8 rounded-xl backdrop-blur-sm relative">
<form className="flex flex-col gap-5" id="contactForm">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="firstName">First Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" id="firstName" name="firstName" placeholder="John" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="lastName">Last Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" id="lastName" name="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="businessName">Business Name</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" id="businessName" name="businessName" placeholder="Your Company LLC" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="email">Work Email</label>
<input className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700" id="email" name="email" placeholder="john@company.com" required="" type="email"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-zinc-400" htmlFor="bottlenecks">What are your current growth bottlenecks?</label>
<textarea className="w-full bg-zinc-950/50 border border-zinc-800 rounded-md px-3 py-2 text-sm text-zinc-200 focus:outline-none focus:border-zinc-500 focus:ring-1 focus:ring-zinc-500 transition-all placeholder:text-zinc-700 resize-none" id="bottlenecks" name="bottlenecks" placeholder="Briefly describe what is holding your scaling back..." required="" rows="4"></textarea>
</div>
<button className="mt-4 w-full bg-zinc-100 text-zinc-950 font-medium text-sm py-2.5 rounded-md hover:bg-white transition-all duration-300 flex items-center justify-center gap-2" id="submitBtn" type="submit">
<span>Submit Inquiry</span>
<iconify-icon icon="solar:plain-linear" strokeWidth="1.5"></iconify-icon>
</button>
</form>
</div>
<div className="scroll-reveal transition-all duration-700 delay-200 ease-out mt-10 text-center flex flex-col items-center justify-center gap-2">
<div className="flex items-center gap-2 text-sm text-zinc-400">
<iconify-icon className="text-lg" icon="solar:letter-linear" strokeWidth="1.5"></iconify-icon>
<span>Or book a consultation directly via email:</span>
</div>
<a className="text-zinc-100 font-medium text-sm hover:underline decoration-zinc-500 underline-offset-4 transition-all" href="mailto:contact@coverautomations.com">
                        contact@coverautomations.com
                    </a>
</div>
</div>
</section>
</main>

<footer className="flex flex-col bg-zinc-950/50 backdrop-blur-sm border-zinc-900 border-t py-8 gap-4 items-center justify-center relative z-10">
<div className="flex items-center gap-2.5 opacity-60 hover:opacity-100 transition-opacity">
<img alt="Cover Logo" className="w-10 h-10 object-cover rounded grayscale" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/70d9e2b0-ee5d-479c-bbdd-b0fed28a1304_320w.png"/>
<span className="font-semibold tracking-tighter text-sm text-zinc-400 uppercase">Cover</span>
</div>
<p className="text-xs text-zinc-600">© 2026 Cover Automations. All rights reserved.</p>
</footer>



    </>
  );
}
