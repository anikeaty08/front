import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



      let currentStripeUrl = '';
      const modal = document.getElementById('guest-modal');
      const form = document.getElementById('guest-form');

      function openGuestDetailsModal(stripeUrl) {
        currentStripeUrl = stripeUrl;
        modal.classList.remove('hidden');
        modal.classList.add('flex');
        
        // Slight delay to allow display:flex to apply before animating opacity
        setTimeout(() => {
          modal.classList.remove('opacity-0');
          modal.classList.add('opacity-100');
        }, 10);
      }

      function closeGuestDetailsModal() {
        modal.classList.remove('opacity-100');
        modal.classList.add('opacity-0');
        
        // Wait for fade out animation before hiding
        setTimeout(() => {
          modal.classList.add('hidden');
          modal.classList.remove('flex');
          form.reset();
          currentStripeUrl = '';
        }, 300);
      }

      function handleGuestFormSubmit(event) {
        // Prevent standard form submission behavior
        if (event) {
          event.preventDefault();
        }
        
        const email = document.getElementById('email').value;

        if (currentStripeUrl) {
          try {
            // Append the email to Stripe Checkout so the user doesn't have to type it again
            const url = new URL(currentStripeUrl);
            if (email) {
              url.searchParams.set('prefilled_email', email);
            }
            window.location.href = url.toString();
          } catch (error) {
            // Fallback just in case URL parsing fails
            window.location.href = currentStripeUrl;
          }
        }
      }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="max-w-5xl w-full mx-auto relative">

<div className="flex flex-col gap-12 lg:gap-16">

<div className="flex flex-col items-center text-center gap-4 opacity-0 animate-fade-up">
<span className="text-xs uppercase tracking-widest text-stone-500">
            Registration Open
          </span>
<h1 className="md:text-5xl lg:text-6xl text-4xl font-medium text-stone-900 tracking-tight">
            Secure
            <span className="font-medium">your sanctuary.</span>
</h1>
<p className="text-sm md:text-base text-stone-600 max-w-md font-normal leading-relaxed">
            Select your preferred accommodation. Spaces are highly limited to
            ensure an intimate and restorative experience.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8 items-stretch">

<div className="relative flex flex-col p-8 md:p-10 bg-[#FEF3EA] border border-stone-900/10 rounded-2xl md:rounded-[2rem] transition-all duration-500 hover:border-stone-900/30 hover:bg-white/40 opacity-0 animate-fade-up delay-100 group overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-b from-white/40 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="z-10 flex flex-col gap-8 h-full relative gap-x-8 gap-y-8">
<div className="space-y-4">
<div className="flex justify-between items-start">
<h2 className="text-2xl tracking-tight text-stone-900 font-semibold">
                    Shared Room
                  </h2>
<iconify-icon className="text-xl text-stone-400" icon="solar:users-group-two-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="leading-relaxed text-sm font-normal text-stone-600 h-10">
                  Perfect for traveling with a companion or connecting with a
                  kindred spirit.
                </p>
</div>
<div className="flex items-baseline gap-1 border-b border-stone-900/5 pb-8">
<span className="lg:text-6xl text-5xl font-medium text-stone-900 tracking-tight">
                  $6,500
                </span>
<span className="text-xs text-stone-500 uppercase tracking-widest ml-2">
                  USD
                </span>
</div>
<ul className="flex-1 space-y-4 pt-2">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-stone-900 mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-700 font-normal">
                    Spacious double occupancy suite
                  </span>
</li>
<li className="flex font-medium gap-x-3 gap-y-3 items-start">
<iconify-icon className="text-lg text-stone-900 mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-700 font-normal">
                    Two plush twin beds or one shared king
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-stone-900 mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-700 font-normal">
                    En-suite bathroom with luxury amenities
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-stone-900 mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-700 font-normal">
                    All daily meals, workshops, and excursions
                  </span>
</li>
</ul>
<button className="mt-4 w-full group/btn inline-flex items-center justify-center gap-2 rounded-full border border-stone-900 bg-transparent px-6 py-4 text-sm text-stone-900 transition-all duration-300 hover:bg-stone-900 hover:text-[#FEF3EA]" onclick="openGuestDetailsModal('https://buy.stripe.com/fZu00j2F3bwJ64efq90Jq03')" type="button">
<span>Select Shared</span>
<iconify-icon className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="relative flex flex-col p-8 md:p-10 bg-stone-900 text-[#FEF3EA] rounded-2xl md:rounded-[2rem] transition-all duration-500 hover:shadow-2xl hover:shadow-stone-900/20 opacity-0 animate-fade-up delay-200 group overflow-hidden">
<div className="absolute inset-0 opacity-[0.03] mix-blend-overlay" style={{backgroundImage: 'url(\'data:image/svg+xml,%3Csvg viewBox=%220 0 200 200%22 xmlns=%22http://www.w3.org/2000/svg%22%3E%3Cfilter id=%22noiseFilter%22%3E%3CfeTurbulence type=%22fractalNoise%22 baseFrequency=%220.65%22 numOctaves=%223%22 stitchTiles=%22stitch%22/%3E%3C/filter%3E%3Crect width=%22100%25%22 height=%22100%25%22 filter=%22url(%23noiseFilter)%22/%3E%3C/svg%3E\')'}}></div>
<div className="relative z-10 flex flex-col h-full gap-8">
<div className="space-y-4">
<div className="flex justify-between items-start">
<h2 className="text-2xl tracking-tight font-semibold">
                    Private Room
                  </h2>
<iconify-icon className="text-xl text-stone-400" icon="solar:user-rounded-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<p className="text-sm text-stone-300 font-normal leading-relaxed h-10">
                  Deep rest and ultimate solitude in your own private sanctuary.
                </p>
</div>
<div className="flex items-baseline gap-1 border-b border-stone-700/50 pb-8">
<span className="lg:text-6xl text-5xl font-medium tracking-tight">
                  $7,500
                </span>
<span className="text-xs text-stone-400 uppercase tracking-widest ml-2">
                  USD
                </span>
</div>
<ul className="flex-1 pt-2 space-y-4">
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#FEF3EA] mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-200 font-normal">
                    Expansive single occupancy suite
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#FEF3EA] mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-200 font-normal">
                    Premium king size bed &amp; luxury linens
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#FEF3EA] mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-200 font-normal">
                    Private balcony with expansive views
                  </span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-lg text-[#FEF3EA] mt-0.5 shrink-0" icon="solar:check-read-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<span className="text-sm text-stone-200 font-normal">
                    All daily meals, workshops, and excursions
                  </span>
</li>
</ul>
<button className="mt-4 w-full group/btn inline-flex items-center justify-center gap-2 rounded-full border border-transparent bg-[#FEF3EA] px-6 py-4 text-sm text-stone-900 transition-all duration-300 hover:bg-white hover:scale-[1.02]" onclick="openGuestDetailsModal('https://book.stripe.com/4gM14n7ZnbwJ64e2Dn0Jq02')" type="button">
<span>Select Private</span>
<iconify-icon className="text-lg transition-transform duration-300 group-hover/btn:translate-x-1" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
<div className="flex items-center justify-center gap-2 text-stone-500 opacity-0 animate-fade-up delay-200 pt-2">
<iconify-icon className="text-base" icon="solar:shield-check-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<p className="text-xs font-normal tracking-wide">
            Payments securely processed by Stripe
          </p>
</div>
</div>
</div>

<div className="fixed inset-0 z-50 hidden items-center justify-center bg-stone-900/40 backdrop-blur-sm p-4 transition-opacity duration-300 opacity-0" id="guest-modal">
<div className="bg-[#FEF3EA] w-full max-w-md rounded-2xl md:rounded-[2rem] p-8 shadow-2xl relative">
<button className="absolute top-6 right-6 text-stone-400 hover:text-stone-900 transition-colors" onclick="closeGuestDetailsModal()" type="button">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
<div className="mb-8">
<h3 className="text-2xl tracking-tight text-stone-900 font-semibold mb-2">Guest Details</h3>
<p className="text-sm text-stone-600 font-normal">Please provide your information before proceeding to checkout.</p>
</div>
<form className="space-y-5" id="guest-form" onsubmit="handleGuestFormSubmit(event)">
<div className="grid grid-cols-2 gap-4">
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700" htmlFor="firstName">First name</label>
<input className="custom-input w-full bg-white/50 border border-stone-900/10 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400" id="firstName" placeholder="Jane" required="" type="text"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700" htmlFor="lastName">Last name</label>
<input className="custom-input w-full bg-white/50 border border-stone-900/10 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400" id="lastName" placeholder="Doe" required="" type="text"/>
</div>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700" htmlFor="email">Email address</label>
<input className="custom-input w-full bg-white/50 border border-stone-900/10 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400" id="email" placeholder="jane@example.com" required="" type="email"/>
</div>
<div className="space-y-1.5">
<label className="text-xs font-medium text-stone-700" htmlFor="dietary">Dietary Restrictions <span className="text-stone-400 font-normal">(Optional)</span></label>
<input className="custom-input w-full bg-white/50 border border-stone-900/10 rounded-xl px-4 py-3 text-sm text-stone-900 placeholder:text-stone-400" id="dietary" placeholder="e.g. Vegan, Gluten-free" type="text"/>
</div>
<div className="pt-4 flex items-center justify-end gap-4">
<button className="text-sm font-medium text-stone-500 hover:text-stone-900 transition-colors px-2" onclick="closeGuestDetailsModal()" type="button">
              Cancel
            </button>
<button className="inline-flex items-center justify-center gap-2 rounded-full bg-stone-900 px-6 py-3 text-sm text-[#FEF3EA] transition-all duration-300 hover:bg-stone-800 hover:scale-[1.02]" type="submit">
<span>Continue to Payment</span>
<iconify-icon className="text-lg" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</form>
</div>
</div>


    </>
  );
}
