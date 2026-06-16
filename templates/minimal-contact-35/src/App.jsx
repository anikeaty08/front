import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



      document.addEventListener('DOMContentLoaded', function () {
        lucide.createIcons({ attrs: { 'stroke-width': 1.5 } });
      });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<main className="min-h-screen flex items-center justify-center p-4">
<section className="w-full max-w-xl">

<div className="mx-auto rounded-2xl border border-neutral-200 bg-white shadow-sm overflow-hidden">

<div className="p-6 sm:p-8">
<div className="flex items-center gap-3">
<div className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white text-neutral-900 tracking-tight font-semibold">C</div>
<div className="h-5 w-px bg-neutral-200"></div>
<p className="text-sm text-neutral-500">Support</p>
</div>
<h1 className="mt-5 text-[28px]/[1.15] tracking-tight font-semibold text-neutral-900">
              Contact us
            </h1>
<p className="mt-2 text-[15px] text-neutral-600">
              We usually reply within one business day. Tell us a bit about what you need.
            </p>
<div className="mt-6 h-px bg-neutral-200"></div>

<div className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
<a className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[15px] text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 hover:outline hover:outline-1 hover:outline-neutral-900/10 transition-colors" href="mailto:team@example.com">
<i aria-hidden="true" className="size-4 text-neutral-700" data-lucide="mail"></i>
                team@example.com
              </a>
<a className="group inline-flex items-center gap-2 rounded-lg border border-neutral-200 bg-white px-3.5 py-2.5 text-[15px] text-neutral-800 hover:bg-neutral-50 hover:border-neutral-300 hover:outline hover:outline-1 hover:outline-neutral-900/10 transition-colors" href="tel:+12223334444">
<i aria-hidden="true" className="size-4 text-neutral-700" data-lucide="phone"></i>
                +1 (222) 333-4444
              </a>
</div>
</div>
<div className="h-px bg-neutral-200"></div>

<form action="#" className="p-6 sm:p-8" method="post">
<div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
<div className="flex flex-col">
<label className="mb-1.5 text-sm font-medium text-neutral-700" htmlFor="name">Full name</label>
<input autocomplete="name" className="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none" id="name" name="name" placeholder="Jane Doe" required="" type="text"/>
</div>
<div className="flex flex-col">
<label className="mb-1.5 text-sm font-medium text-neutral-700" htmlFor="email">Email</label>
<input autocomplete="email" className="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none" id="email" name="email" placeholder="jane@company.com" required="" type="email"/>
</div>
<div className="sm:col-span-2 flex flex-col">
<label className="mb-1.5 text-sm font-medium text-neutral-700" htmlFor="company">Company (optional)</label>
<input autocomplete="organization" className="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none" id="company" name="company" placeholder="Acme Inc." type="text"/>
</div>
<div className="sm:col-span-2 flex flex-col">
<label className="mb-1.5 text-sm font-medium text-neutral-700" htmlFor="message">How can we help?</label>
<div className="relative">
<textarea className="w-full rounded-lg border border-neutral-200 bg-white/80 px-3.5 py-2.5 pr-12 text-[15px] text-neutral-900 placeholder-neutral-400 shadow-xs focus:ring-4 focus:ring-neutral-900/5 focus:border-neutral-300 outline-none resize-y" id="message" name="message" placeholder="Share a brief description of your request..." required="" rows="5"></textarea>
<div className="pointer-events-none absolute bottom-2 right-2 inline-flex h-8 w-8 items-center justify-center rounded-md border border-neutral-200 bg-white/70 text-neutral-700">
<i aria-hidden="true" className="size-4" data-lucide="message-square-text"></i>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between gap-4">
<div className="inline-flex items-center gap-2 text-[13px] text-neutral-500">
<img alt="Support" className="h-6 w-6 rounded-full object-cover ring-1 ring-neutral-200" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=80&amp;auto=format&amp;fit=crop"/>
<span>Real people, real help — 9am–5pm (PT)</span>
</div>
<button className="inline-flex items-center gap-2 rounded-lg bg-neutral-900 px-4 py-2.5 text-[15px] font-medium text-white shadow-sm hover:bg-neutral-800 hover:shadow transition-colors focus:outline-none focus-visible:ring-4 focus-visible:ring-neutral-900/10 active:bg-neutral-900" type="submit">
<i aria-hidden="true" className="size-4 text-white" data-lucide="send"></i>
                Send message
              </button>
</div>
<p className="mt-4 text-[12.5px] text-neutral-500">
              By submitting, you agree to our terms and privacy policy.
            </p>
</form>
</div>
</section>
</main>


    </>
  );
}
