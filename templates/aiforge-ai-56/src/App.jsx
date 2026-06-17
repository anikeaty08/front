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



    document.addEventListener('DOMContentLoaded', () => {
      if (window.lucide) lucide.createIcons();
      const y = document.getElementById('year');
      if (y) y.textContent = new Date().getFullYear();
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
      

<div className="min-h-screen">

<header className="border-b border-neutral-200/70 bg-white">
<div className="mx-auto max-w-3xl px-5 py-4 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-neutral-900 text-white grid place-items-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="text-xl font-semibold tracking-tight">AIForge</span>
</div>
<nav className="hidden sm:flex items-center gap-6 text-sm text-neutral-600">
<a className="hover:text-neutral-900 transition" href="#">Overview</a>
<a className="hover:text-neutral-900 transition" href="#">Insights</a>
<a className="hover:text-neutral-900 transition" href="#">Docs</a>
</nav>
<a className="inline-flex items-center gap-2 rounded-md bg-neutral-900 px-3 py-2 text-sm font-medium text-white hover:bg-neutral-800 transition" href="#">
<svg className="lucide lucide-mail h-4 w-4" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
          Subscribe
        </a>
</div>
</header>

<section className="bg-white">
<div className="mx-auto max-w-3xl px-5 pt-10 pb-6">
<div className="text-center">
<h1 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight">
            The Future of AI and Software
          </h1>
<p className="mt-3 text-base sm:text-lg text-neutral-600">
            Stay ahead with cutting-edge advancements in artificial intelligence, software automation, and high-tech workspaces.
          </p>
</div>

<div className="relative mt-8">
<div className="overflow-hidden rounded-2xl border border-neutral-200/70 bg-white">
<img alt="Person wearing VR headset" className="w-full object-cover aspect-[16/9] sm:aspect-[21/9]" src="https://images.unsplash.com/photo-1542751110-97427bbecf20?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>

<div className="hidden sm:block">
<div className="absolute -left-3 top-8">
<div className="h-10 w-10 rounded-full bg-white border border-neutral-200 shadow-sm grid place-items-center">
<svg className="lucide lucide-cpu h-5 w-5 text-neutral-700" data-lucide="cpu" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
</div>
</div>
<div className="absolute left-10 -bottom-4">
<div className="h-10 w-10 rounded-full bg-white border border-neutral-200 shadow-sm grid place-items-center">
<svg className="lucide lucide-bot h-5 w-5 text-neutral-700" data-lucide="bot" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 8V4H8"></path><rect height="12" rx="2" width="16" x="4" y="8"></rect><path d="M2 14h2"></path><path d="M20 14h2"></path><path d="M15 13v2"></path><path d="M9 13v2"></path></svg>
</div>
</div>
<div className="absolute -right-3 top-6">
<div className="h-10 w-10 rounded-full bg-white border border-neutral-200 shadow-sm grid place-items-center">
<svg className="lucide lucide-circuit-board h-5 w-5 text-neutral-700" data-lucide="circuit-board" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M11 9h4a2 2 0 0 0 2-2V3"></path><circle cx="9" cy="9" r="2"></circle><path d="M7 21v-4a2 2 0 0 1 2-2h4"></path><circle cx="15" cy="15" r="2"></circle></svg>
</div>
</div>
<div className="absolute right-14 -bottom-5">
<div className="h-10 w-10 rounded-full bg-white border border-neutral-200 shadow-sm grid place-items-center">
<svg className="lucide lucide-activity h-5 w-5 text-neutral-700" data-lucide="activity" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 12h-2.48a2 2 0 0 0-1.93 1.46l-2.35 8.36a.25.25 0 0 1-.48 0L9.24 2.18a.25.25 0 0 0-.48 0l-2.35 8.36A2 2 0 0 1 4.49 12H2"></path></svg>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-5 space-y-4">

<article className="rounded-2xl border border-neutral-200/70 bg-white p-4 sm:p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 shrink-0 rounded-full bg-neutral-100 grid place-items-center border border-neutral-200">
<svg className="lucide lucide-code-2 h-5 w-5 text-neutral-700" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<div className="flex-1">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">AI &amp; Software Development</h3>
<p className="mt-1 text-neutral-600 text-sm sm:text-base">
              AI-first frameworks, coding copilots, and automation that boost overall efficiency.
            </p>
<div className="mt-4 overflow-hidden rounded-xl border border-neutral-200/70">
<img alt="Developer workspace with code" className="w-full object-cover aspect-[16/9]" src="https://images.unsplash.com/photo-1498050108023-c5249f4df085?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-neutral-200/70 bg-white p-4 sm:p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 shrink-0 rounded-full bg-neutral-100 grid place-items-center border border-neutral-200">
<i className="h-5 w-5 text-neutral-700" data-lucide="workspace"></i>
</div>
<div className="flex-1">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Next‑Gen Workspaces</h3>
<p className="mt-1 text-neutral-600 text-sm sm:text-base">
              The emergence of smart tools revolutionizing productivity and efficiency.
            </p>
<div className="mt-4 overflow-hidden rounded-xl border border-neutral-200/70">
<img alt="Modern workspace with multiple displays" className="w-full object-cover aspect-[16/9]" src="https://images.unsplash.com/photo-1518779578993-ec3579fee39f?q=80&amp;w=1600&amp;auto=format&amp;fit=crop"/>
</div>
</div>
</div>
</article>

<article className="rounded-2xl border border-neutral-200/70 bg-white p-4 sm:p-5">
<div className="flex items-start gap-4">
<div className="h-10 w-10 shrink-0 rounded-full bg-neutral-100 grid place-items-center border border-neutral-200">
<svg className="lucide lucide-sparkles h-5 w-5 text-neutral-700" data-lucide="sparkles" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11.017 2.814a1 1 0 0 1 1.966 0l1.051 5.558a2 2 0 0 0 1.594 1.594l5.558 1.051a1 1 0 0 1 0 1.966l-5.558 1.051a2 2 0 0 0-1.594 1.594l-1.051 5.558a1 1 0 0 1-1.966 0l-1.051-5.558a2 2 0 0 0-1.594-1.594l-5.558-1.051a1 1 0 0 1 0-1.966l5.558-1.051a2 2 0 0 0 1.594-1.594z"></path><path d="M20 2v4"></path><path d="M22 4h-4"></path><circle cx="4" cy="20" r="2"></circle></svg>
</div>
<div className="flex-1">
<h3 className="text-lg sm:text-xl font-semibold tracking-tight">Early Access</h3>
<p className="mt-1 text-neutral-600 text-sm sm:text-base">
              Discover our innovative, AI‑powered development tools today.
            </p>
<div className="mt-4 overflow-hidden rounded-xl border border-neutral-200/70">
<img alt="Team collaborating in a modern office" className="w-full object-cover aspect-[16/9]" src="https://images.unsplash.com/photo-1522075469751-3a6694fb2f61?q=80&amp;w=1600&amp;auto=format&amp;fit=crop" style={{}}/>
</div>
</div>
</div>
</article>
</section>

<section className="max-w-3xl mr-auto ml-auto pt-6 pr-5 pl-5">
<div className="grid gap-6 sm:grid-cols-2">
<div className="rounded-2xl border border-neutral-200/70 bg-white overflow-hidden">
<img alt="3D render of an AI robot" className="aspect-[4/3] sm:aspect-[16/12] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/dddc72ad-a449-4ef7-b74e-098a9d2b01fc_800w.webp" style={{}}/>
</div>
<div className="rounded-2xl border border-neutral-200/70 bg-white p-5 sm:p-6 flex flex-col">
<span className="text-xs font-medium text-blue-700 bg-blue-50 border border-blue-100 w-fit px-2 py-1 rounded">Featured Insight</span>
<h2 className="mt-3 text-2xl sm:text-3xl font-semibold tracking-tight">
            How AI Is Transforming the Future of Software
          </h2>
<p className="mt-2 text-neutral-600">
            From streamlining development to predictive analytics, AI is redefining the way software is created and optimized.
          </p>
<a className="mt-4 inline-flex items-center gap-2 text-sm font-medium text-blue-700 hover:text-blue-800" href="#">
            Read full article
            <svg className="lucide lucide-arrow-right h-4 w-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-5 pt-6">
<div className="rounded-2xl border border-neutral-200/70 bg-white p-5 sm:p-6">
<div className="grid gap-5 sm:grid-cols-2 sm:gap-6">
<div className="order-2 sm:order-1">
<h3 className="text-xl sm:text-2xl font-semibold tracking-tight">Exclusive for Subscribers</h3>
<p className="mt-2 text-neutral-600">
              Be among the first to experience our newest AI‑powered development tool — free for 30 days!
            </p>
<div className="mt-4 flex flex-wrap items-center gap-3">
<a className="inline-flex items-center justify-center gap-2 rounded-md bg-blue-600 px-4 py-2.5 text-sm font-medium text-white hover:bg-blue-700 transition" href="#">
<svg className="lucide lucide-flame h-4 w-4" data-lucide="flame" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 3q1 4 4 6.5t3 5.5a1 1 0 0 1-14 0 5 5 0 0 1 1-3 1 1 0 0 0 5 0c0-2-1.5-3-1.5-5q0-2 2.5-4"></path></svg>
                Claim your free trial
              </a>
<a className="inline-flex items-center gap-2 text-sm font-medium text-neutral-700 hover:text-neutral-900" href="#">
<svg className="lucide lucide-shield-check h-4 w-4" data-lucide="shield-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path><path d="m9 12 2 2 4-4"></path></svg>
                No credit card required
              </a>
</div>
</div>
<div className="order-1 sm:order-2 overflow-hidden rounded-xl border border-neutral-200/70">
<img alt="Person exploring immersive tech" className="aspect-[16/10] w-full object-cover" src="https://hoirqrkdgbmvpwutwuwj-all.supabase.co/storage/v1/object/public/assets/assets/cb6b9984-8b25-4f97-b81f-d59273ef384b_800w.webp" style={{}}/>
</div>
</div>
</div>
</section>

<section className="mx-auto max-w-3xl px-5 pt-6">
<div className="overflow-hidden rounded-2xl bg-neutral-900 text-white">
<div className="p-6 sm:p-8">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight">Let’s talk AI &amp; innovation!</h2>
<p className="mt-2 text-neutral-300">
            Have insights or questions? We’d love to connect.
          </p>
<div className="mt-5">
<a className="inline-flex items-center gap-2 rounded-md bg-white text-neutral-900 px-4 py-2.5 text-sm font-medium hover:bg-neutral-100 transition" href="#">
<svg className="lucide lucide-messages-square h-4 w-4" data-lucide="messages-square" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a2 2 0 0 1-2 2H6.828a2 2 0 0 0-1.414.586l-2.202 2.202A.71.71 0 0 1 2 14.286V4a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2z"></path><path d="M20 9a2 2 0 0 1 2 2v10.286a.71.71 0 0 1-1.212.502l-2.202-2.202A2 2 0 0 0 17.172 19H10a2 2 0 0 1-2-2v-1"></path></svg>
              Reach out here
            </a>
</div>
</div>
<div className="border-t border-white/10 bg-neutral-950 px-6 py-5 sm:px-8">
<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
<div className="flex items-center gap-3">
<div className="h-8 w-8 rounded-md bg-white text-neutral-900 grid place-items-center">
<svg className="h-4 w-4" fill="none" stroke="currentColor" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2v20M2 12h20M7 7l10 10M17 7L7 17" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</div>
<span className="font-semibold">AIForge</span>
</div>
<div className="flex items-center gap-4 text-neutral-300">
<a aria-label="X" className="hover:text-white transition" href="#">
<svg className="lucide lucide-twitter h-5 w-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a aria-label="YouTube" className="hover:text-white transition" href="#">
<svg className="lucide lucide-youtube h-5 w-5" data-lucide="youtube" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.5 17a24.12 24.12 0 0 1 0-10 2 2 0 0 1 1.4-1.4 49.56 49.56 0 0 1 16.2 0A2 2 0 0 1 21.5 7a24.12 24.12 0 0 1 0 10 2 2 0 0 1-1.4 1.4 49.55 49.55 0 0 1-16.2 0A2 2 0 0 1 2.5 17"></path><path d="m10 15 5-3-5-3z"></path></svg>
</a>
<a aria-label="Email" className="hover:text-white transition" href="#">
<svg className="lucide lucide-mail h-5 w-5" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</a>
</div>
</div>
<div className="mt-4 text-sm text-neutral-400">
            Manage <a className="underline hover:text-neutral-200" href="#">preferences</a> or <a className="underline hover:text-neutral-200" href="#">unsubscribe</a> anytime. View our <a className="underline hover:text-neutral-200" href="#">privacy policy</a>.
            <div className="mt-2 flex flex-wrap gap-4">
<span>© <span id="year">2025</span> AIForge</span>
<a className="hover:text-neutral-200" href="#">News</a>
<a className="hover:text-neutral-200" href="#">About</a>
<a className="hover:text-neutral-200" href="#">Contact</a>
</div>
</div>
</div>
</div>
</section>

<div className="h-10"></div>
</div>




    </>
  );
}
