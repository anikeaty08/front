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
      

<div className="bg-emerald-900 py-2.5 px-4 text-center">
<p className="text-xs font-medium text-emerald-200 tracking-wide flex flex-wrap items-center justify-center gap-2 sm:gap-3">
<span className="text-white">Trusted since 2010</span>
<span className="text-emerald-700 hidden sm:inline">•</span>
<span className="text-white">Vet-connected care</span>
<span className="text-emerald-700 hidden sm:inline">•</span>
<span className="text-white">Delivered to your door</span>
</p>
</div>

<header className="border-b border-gray-100 py-5 px-6 md:px-12 flex items-center justify-center sticky top-0 bg-white/80 backdrop-blur-md z-50">
<a className="text-lg font-semibold tracking-tighter text-emerald-950 uppercase" href="#">PETPROJECT</a>
</header>

<section className="py-24 md:py-32 px-6 md:px-12 max-w-5xl mx-auto text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-emerald-50 border border-emerald-100 text-xs font-medium text-emerald-800 mb-8">
<iconify-icon icon="solar:star-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
            Vet-approved essentials for dogs and cats
        </div>
<h1 className="md:text-6xl leading-tight text-5xl font-semibold text-gray-900 tracking-tighter max-w-4xl mr-auto mb-6 ml-auto">Claim HK$88 Off Your<br className="hidden md:block"/> First Vet-Approved Order</h1>
<p className="text-lg md:text-xl text-gray-500 mb-10 max-w-2xl mx-auto font-normal leading-relaxed">
            Shop prescription diets, preventatives, and selected medications online. No prescription yet? Book a consult first and credit the fee back on your first eligible order.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-5">
<a className="w-full sm:w-auto px-8 py-3.5 bg-emerald-900 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm" href="#">
                Claim My HK$88 Offer
            </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-950 border border-gray-200 text-sm font-medium rounded-lg hover:bg-emerald-50 transition-colors shadow-sm" href="#">
                I Need a Consult First
            </a>
</div>
<p className="text-xs text-gray-400 mb-16">For first-time customers. Eligible products only.</p>
<div className="flex flex-wrap items-center justify-center gap-x-8 gap-y-4 text-sm text-gray-500 font-medium">
<div className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Prescription diets
            </div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Preventatives
            </div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Selected medications
            </div>
<div className="flex items-center gap-2.5">
<iconify-icon className="text-emerald-600 text-lg" icon="solar:check-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon> Consult support when needed
            </div>
</div>

<div className="mt-20 w-full max-w-4xl mx-auto rounded-3xl overflow-hidden shadow-sm border border-gray-100 bg-gray-50">
<img alt="Vet examining a happy dog" className="w-full h-auto object-cover aspect-[21/9] hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1599443015574-be5efd737630?auto=format&amp;fit=crop&amp;w=1200&amp;h=500&amp;q=80"/>
</div>
</section>

<section className="py-24 bg-gray-50 border-y border-gray-100 px-6 md:px-12">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-8">Pet care should not feel this hard</h2>
<div className="space-y-6 text-base md:text-lg text-gray-600 font-normal leading-relaxed">
<p>Running low on prescription food? Need preventatives? Not sure if you need a prescription first?</p>
<p>PetProject gives pet parents a simpler way to get vet-approved essentials online — with a clear next step if a consult is needed.</p>
<p>No guessing. No endless browsing. No bouncing around trying to figure out what to do next.</p>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
<div className="text-center mb-12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900">Here’s Your First-Order Offer</h2>
</div>
<div className="max-w-2xl mx-auto bg-white border border-gray-200 rounded-2xl p-10 md:p-14 shadow-sm text-center relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-emerald-900"></div>
<h3 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-4">Get HK$88 Off Your First Eligible Order</h3>
<p className="text-gray-500 mb-10 leading-relaxed text-base">And if your pet needs a prescription first, you can book a consult and have the consult fee credited back on your first eligible purchase.</p>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-900 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm mb-6 w-full sm:w-auto" href="#">
                Unlock My Offer
            </a>
<p className="text-xs text-gray-400 max-w-xs mx-auto">Applies to eligible first orders only. Consult fee credit applies to qualifying purchases.</p>
</div>
</section>

<section className="py-32 bg-gray-50 px-6 md:px-12 border-y border-gray-100">
<div className="max-w-5xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-20">How PetProject Works</h2>
<div className="grid md:grid-cols-3 gap-12 md:gap-8 mb-20 relative">

<div className="hidden md:block absolute top-6 left-[16%] right-[16%] h-px bg-emerald-100 z-0"></div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-medium mb-6 shadow-sm text-sm">1</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Claim your offer</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Unlock HK$88 off your first eligible order.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-medium mb-6 shadow-sm text-sm">2</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Choose your path</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Already have a prescription? Shop now.<br/>Need one first? Book a consult.</p>
</div>

<div className="relative z-10 flex flex-col items-center text-center">
<div className="w-12 h-12 bg-emerald-50 border border-emerald-200 rounded-full flex items-center justify-center text-emerald-900 font-medium mb-6 shadow-sm text-sm">3</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Get what your pet needs</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-xs">Order vet-approved essentials and get them delivered to your door.</p>
</div>
</div>
<div className="text-center">
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-emerald-900 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm" href="#">
                    Start With HK$88 Off
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">What You Can Shop</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
<div className="p-8 border border-gray-200 rounded-2xl hover:border-emerald-200 transition-colors bg-white flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:health-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-3">Prescription Diets</h3>
<p className="text-sm text-gray-500 flex-grow leading-relaxed">Support for pets with specific health needs.</p>
</div>
<div className="p-8 border border-gray-200 rounded-2xl hover:border-emerald-200 transition-colors bg-white flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-3">Preventatives</h3>
<p className="text-sm text-gray-500 flex-grow leading-relaxed">Stay on top of protection with less hassle.</p>
</div>
<div className="p-8 border border-gray-200 rounded-2xl hover:border-emerald-200 transition-colors bg-white flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:pill-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-3">Selected Medications</h3>
<p className="text-sm text-gray-500 flex-grow leading-relaxed">Access key essentials with guidance where needed.</p>
</div>
<div className="p-8 border border-gray-200 rounded-2xl hover:border-emerald-200 transition-colors bg-white flex flex-col">
<div className="w-10 h-10 rounded-lg bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-6 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:box-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-base font-medium tracking-tight text-gray-900 mb-3">Curated Pet Essentials</h3>
<p className="text-sm text-gray-500 flex-grow leading-relaxed">A tighter, more useful range of products for everyday care.</p>
</div>
</div>
</section>

<section className="py-24 md:py-32 bg-emerald-900 text-white px-6 md:px-12">
<div className="max-w-5xl mx-auto flex flex-col md:flex-row items-start gap-12 md:gap-24">
<div className="md:w-5/12">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white leading-tight">No Prescription Yet? You Can Still Start Here.</h2>
</div>
<div className="md:w-7/12">
<div className="space-y-6 text-base text-emerald-100/80 mb-10 leading-relaxed font-normal">
<p>Some items need a valid prescription or vet review first. That does not mean you have to stop.</p>
<p>If your pet needs a consult before ordering, PetProject gives you a clear path forward. Book a consult first, then move ahead with the right products for your pet.</p>
<p>And if your purchase qualifies, your consult fee can be credited back on your first eligible order.</p>
</div>
<a className="inline-flex items-center justify-center px-8 py-3.5 bg-white text-emerald-950 text-sm font-medium rounded-lg hover:bg-emerald-50 transition-colors shadow-sm" href="#">
                    Book Consult First
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-5xl mx-auto">
<div className="grid md:grid-cols-2 gap-16 md:gap-24 items-center">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-8 leading-tight">Trusted Since 2010. Now More Focused on What Matters.</h2>
<div className="space-y-6 text-base text-gray-600 font-normal leading-relaxed mb-10">
<p>PetProject started as a broader pet products store. Today, we are more focused on what pet parents actually need most: prescription diets, preventatives, selected medications, and a simpler path to care.</p>
<p>That means less clutter, less confusion, and a better way to shop with confidence.</p>
</div>

<div className="rounded-2xl overflow-hidden shadow-sm border border-gray-200">
<img alt="Healthy pet resting" className="w-full h-auto object-cover aspect-video" src="https://images.unsplash.com/photo-1514888286974-6c03e2ca1dba?auto=format&amp;fit=crop&amp;w=800&amp;h=500&amp;q=80"/>
</div>
</div>
<div className="bg-gray-50 rounded-2xl p-10 border border-gray-100 h-full flex flex-col justify-center">
<ul className="space-y-8">
<li className="flex items-center gap-4">
<div className="text-emerald-600 flex"><iconify-icon className="text-2xl" icon="solar:calendar-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Established since 2010</span>
</li>
<li className="flex items-center gap-4">
<div className="text-emerald-600 flex"><iconify-icon className="text-2xl" icon="solar:minimize-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<span className="text-base font-medium text-gray-900">More focused, less clutter</span>
</li>
<li className="flex items-center gap-4">
<div className="text-emerald-600 flex"><iconify-icon className="text-2xl" icon="solar:stethoscope-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Vet-connected support</span>
</li>
<li className="flex items-center gap-4">
<div className="text-emerald-600 flex"><iconify-icon className="text-2xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Clear prescription pathway</span>
</li>
<li className="flex items-center gap-4">
<div className="text-emerald-600 flex"><iconify-icon className="text-2xl" icon="solar:box-linear" style={{strokeWidth: '1.5px'}}></iconify-icon></div>
<span className="text-base font-medium text-gray-900">Delivery to your door</span>
</li>
</ul>
</div>
</div>
</section>

<section className="py-32 bg-gray-50 border-y border-gray-100 px-6 md:px-12">
<div className="max-w-6xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">Why Pet Parents Start Here</h2>
<div className="grid md:grid-cols-3 gap-8">
<div className="p-10 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:eye-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Because it’s clearer</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">You know what you can buy, what needs a consult, and what to do next.</p>
</div>
<div className="p-10 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Because it’s easier</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">Shop online, get support when needed, and skip the usual guesswork.</p>
</div>
<div className="p-10 bg-white border border-gray-200 rounded-2xl shadow-sm hover:border-emerald-200 transition-colors">
<div className="w-12 h-12 rounded-full bg-emerald-50 border border-emerald-100 flex items-center justify-center mb-8 text-emerald-700">
<iconify-icon className="text-xl" icon="solar:shield-check-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium tracking-tight text-gray-900 mb-3">Because it feels safer</h3>
<p className="text-sm text-gray-500 leading-relaxed font-normal">A more trusted path to the essentials your pet actually needs.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 md:px-12 text-center">
<div className="max-w-2xl mx-auto">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-gray-900 mb-5">Start With the Offer. We’ll Show You the Next Step.</h2>
<p className="text-base text-gray-500 mb-10 leading-relaxed font-normal">Whether you are ready to order now or need a prescription first, PetProject makes it easy to begin.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto px-8 py-3.5 bg-emerald-900 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm" href="#">
                    Claim My HK$88 Offer
                </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-950 border border-gray-200 text-sm font-medium rounded-lg hover:bg-emerald-50 transition-colors shadow-sm" href="#">
                    Check If I Need a Consult
                </a>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 bg-gray-50 border-t border-gray-100">
<div className="max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 text-center mb-16">Frequently Asked Questions</h2>
<div className="space-y-4 text-left">
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        Do I need a prescription for every product?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        No. Some items can be purchased directly, while others require a valid prescription or vet review.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        What if I do not have a prescription yet?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        You can still start here. If your pet needs a consult first, we will guide you to the next step.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        How do I get the HK$88 offer?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        Click the button, submit your details, and follow the next step to redeem your first-order offer.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        How does the consult fee credit work?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        If your first eligible purchase qualifies, the consult fee can be credited back according to the offer terms.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        What kinds of products can I buy?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        PetProject focuses on prescription diets, preventatives, selected medications, and other curated essentials.
                    </div>
</details>
<details className="group border border-gray-200 rounded-xl bg-white [&amp;&gt;summary::-webkit-details-marker]:hidden shadow-sm">
<summary className="list-none flex cursor-pointer items-center justify-between p-6 text-gray-900 font-medium text-sm">
                        Do you deliver to my door?
                        <span className="relative ml-1.5 h-5 w-5 flex-shrink-0 text-emerald-600 group-open:text-emerald-800">
<iconify-icon className="absolute inset-0 text-xl transition duration-300 group-open:-rotate-180" icon="solar:alt-arrow-down-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</span>
</summary>
<div className="px-6 pb-6 text-sm text-gray-500 leading-relaxed font-normal border-t border-gray-50 pt-4">
                        Yes, delivery is available for eligible orders.
                    </div>
</details>
</div>
</div>
</section>

<section className="py-32 px-6 md:px-12 max-w-4xl mx-auto text-center border-t border-gray-100">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter text-gray-900 mb-6 leading-tight">Get HK$88 Off Your First Eligible Order</h2>
<p className="text-lg text-gray-500 mb-10 max-w-2xl mx-auto leading-relaxed font-normal">
            Start with PetProject for a simpler path to prescription diets, preventatives, selected medications, and consult support when needed.
        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-8">
<a className="w-full sm:w-auto px-8 py-3.5 bg-emerald-900 text-white text-sm font-medium rounded-lg hover:bg-emerald-800 transition-colors shadow-sm" href="#">
                Claim My HK$88 Offer
            </a>
<a className="w-full sm:w-auto px-8 py-3.5 bg-white text-emerald-950 border border-gray-200 text-sm font-medium rounded-lg hover:bg-emerald-50 transition-colors shadow-sm" href="#">
                I Need a Consult First
            </a>
</div>
<p className="text-xs text-gray-400">First-time customers only. Eligible items and terms apply.</p>
</section>

<footer className="py-10 border-t border-gray-100 text-center text-xs text-gray-400 font-medium">
<p>© 2024 PetProject. All rights reserved.</p>
</footer>

    </>
  );
}
