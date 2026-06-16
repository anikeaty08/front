import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            modal.classList.toggle('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg tracking-tight font-medium text-white flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center text-white">
<span className="text-xs font-bold">M</span>
</div>
                MATICLUB
            </a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#experience">Experience</a>
<a className="hover:text-white transition-colors" href="#membership">Membership</a>
<a className="hover:text-white transition-colors" href="#gallery">Gallery</a>
</div>
<div className="flex items-center gap-4">

<button className="hidden sm:flex text-sm font-medium hover:text-white transition-colors" onclick="toggleLogin()">Log in</button>
<button className="text-sm font-medium bg-white text-black px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors">
                    Apply Now
                </button>
</div>
</div>
</nav>

<div aria-labelledby="modal-title" aria-modal="true" className="fixed inset-0 z-[100] hidden" id="login-modal" role="dialog">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleLogin()"></div>
<div className="relative flex min-h-screen items-center justify-center p-4 text-center sm:p-0">
<div className="relative transform overflow-hidden rounded-2xl border border-white/10 bg-[#0A0A0A] text-left shadow-2xl transition-all sm:my-8 sm:w-full sm:max-w-sm">

<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors" onclick="toggleLogin()">
<iconify-icon height="24" icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="p-8">
<div className="flex flex-col items-center mb-6">
<div className="w-10 h-10 rounded bg-white/10 flex items-center justify-center text-white mb-4">
<span className="text-sm font-bold">M</span>
</div>
<h3 className="text-xl font-medium leading-6 text-white" id="modal-title">Welcome back</h3>
<p className="mt-2 text-sm text-neutral-500">Enter your credentials to access the club.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="email">Email address</label>
<input className="block w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white shadow-sm placeholder:text-neutral-700 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 sm:text-sm" id="email" name="email" placeholder="you@maticlub.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5" htmlFor="password">Password</label>
<input className="block w-full rounded-lg border border-white/10 bg-neutral-900 px-3 py-2 text-white shadow-sm placeholder:text-neutral-700 focus:border-white/30 focus:outline-none focus:ring-1 focus:ring-white/30 sm:text-sm" id="password" name="password" placeholder="••••••••" type="password"/>
</div>
<div className="flex items-center justify-between">
<div className="flex items-center">
<input className="h-4 w-4 rounded border-white/10 bg-neutral-900 text-white focus:ring-offset-neutral-900 accent-white" id="remember-me" name="remember-me" type="checkbox"/>
<label className="ml-2 block text-xs text-neutral-400" htmlFor="remember-me">Remember me</label>
</div>
<div className="text-xs">
<a className="font-medium text-white hover:text-neutral-300" href="#">Forgot password?</a>
</div>
</div>
<div>
<button className="flex w-full justify-center rounded-lg bg-white px-3 py-2.5 text-sm font-semibold text-black shadow-sm hover:bg-neutral-200 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white transition-colors" type="submit">Sign in</button>
</div>
</form>
<div className="mt-6 text-center text-xs text-neutral-500">
                        Not a member yet? <a className="font-medium text-white hover:underline" href="#">Apply for access</a>
</div>
</div>
</div>
</div>
</div>

<header className="relative pt-32 pb-20 md:pt-48 md:pb-32 overflow-hidden">
<div className="max-w-6xl mx-auto px-6 text-center relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-neutral-300 mb-8">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
                Accepting new members for late 2023
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white mb-6">
                The city's most <br/>
<span className="text-gradient">exclusive network.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-500 max-w-2xl mx-auto mb-10 leading-relaxed">
                Maticlub is a premier members-only collective offering curated nightlife experiences, discreet connections, and VIP access to the city's hidden gems.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto h-12 px-8 rounded-full bg-white text-black font-medium hover:bg-neutral-200 transition-all flex items-center justify-center gap-2">
                    Request Access
                    <iconify-icon height="20" icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
<button className="w-full sm:w-auto h-12 px-8 rounded-full border border-neutral-800 text-white font-medium hover:bg-neutral-900 transition-all flex items-center justify-center gap-2">
                    View Benefits
                </button>
</div>
</div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-neutral-800/20 rounded-full blur-[120px] -z-10 pointer-events-none"></div>
</header>

<section className="py-24 border-t border-white/5" id="experience">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Curated for the elite</h2>
<p className="text-neutral-500 max-w-lg">We prioritize privacy, quality, and atmosphere above all else. Experience
        nightlife reimagined.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-8 rounded-2xl flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">Discreet &amp; Secure</h3>
<p className="text-sm leading-relaxed text-neutral-500">Every member is verified. Our community is built on trust,
            privacy,
            and mutual respect.</p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:wineglass-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-medium text-white mb-2">Premium Venues</h3>
<p className="leading-relaxed text-sm text-neutral-500">Access .</p>
</div>
</div>

<div className="glass-panel p-8 rounded-2xl flex flex-col items-start gap-6 hover:bg-white/5 transition-colors group">
<div className="w-12 h-12 rounded-xl bg-neutral-900 border border-white/10 flex items-center justify-center text-white group-hover:scale-110 transition-transform duration-300">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<div>
<h3 className="text-lg font-medium text-white mb-2">Vibrant Community</h3>
<p className="text-sm leading-relaxed text-neutral-500">Connect with like-minded individuals, models, and artists
            in a relaxed atmosphere.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 bg-neutral-900/30 border-y border-white/5">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-12">
<div className="text-center md:text-left">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">2.5k+</div>
<div className="text-sm text-neutral-500 font-medium">Verified Members</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">50+</div>
<div className="text-sm text-neutral-500 font-medium">Private Events</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">12</div>
<div className="text-sm text-neutral-500 font-medium">Partner Venues</div>
</div>
<div className="text-center md:text-left">
<div className="text-4xl font-semibold text-white tracking-tight mb-2">24/7</div>
<div className="text-sm text-neutral-500 font-medium">Concierge Service</div>
</div>
</div>
</section>

<section className="py-24" id="membership">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
<div>
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Membership Tiers</h2>
<p className="text-neutral-500 max-w-sm">Choose the level of access that suits your lifestyle.</p>
</div>

<div className="flex items-center gap-3 p-1 bg-neutral-900 border border-white/10 rounded-lg">
<button className="px-4 py-1.5 text-xs font-medium text-black bg-white rounded shadow-sm">Monthly</button>
<button className="px-4 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Annual</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="border border-white/5 bg-neutral-900/20 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="mb-6">
<div className="text-white font-medium mb-2">Guest List</div>
<div className="text-3xl font-semibold text-white tracking-tight">$0 <span className="text-sm font-normal text-neutral-500">/ mo</span></div>
<p className="text-xs text-neutral-500 mt-2">Entry level access</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Access to public events
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Newsletter updates
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-600">
<iconify-icon icon="solar:close-circle-linear"></iconify-icon>
                            Private lounge access
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Join Waitlist</button>
</div>

<div className="border border-white/10 bg-neutral-900/60 rounded-2xl p-8 flex flex-col relative overflow-hidden shadow-2xl shadow-black/50">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-neutral-500 via-white to-neutral-500"></div>
<div className="mb-6">
<div className="text-white font-medium mb-2 flex justify-between items-center">
                            Member
                            <span className="text-[10px] uppercase tracking-wider bg-white text-black px-2 py-0.5 rounded-sm font-bold">Popular</span>
</div>
<div className="text-3xl font-semibold text-white tracking-tight">$150 <span className="text-sm font-normal text-neutral-500">/ mo</span></div>
<p className="text-xs text-neutral-500 mt-2">Full club privileges</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon>
                            Access to all venues
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon>
                            2 Complimentary guests
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-white" icon="solar:check-circle-bold"></iconify-icon>
                            Priority reservations
                        </li>
</ul>
<button className="w-full py-3 rounded-lg bg-white text-black text-sm font-medium hover:bg-neutral-200 transition-colors">Apply for Membership</button>
</div>

<div className="border border-white/5 bg-neutral-900/20 rounded-2xl p-8 flex flex-col relative overflow-hidden">
<div className="mb-6">
<div className="text-white font-medium mb-2">Noir</div>
<div className="text-3xl font-semibold text-white tracking-tight">Invite Only</div>
<p className="text-xs text-neutral-500 mt-2">For the exceptional</p>
</div>
<ul className="space-y-4 mb-8 flex-1">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Concierge
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Private jet transfers
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited guests
                        </li>
</ul>
<button className="w-full py-3 rounded-lg border border-white/10 text-white text-sm font-medium hover:bg-white/5 transition-colors">Contact Support</button>
</div>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5" id="gallery">
<div className="max-w-6xl mx-auto px-6">
<h2 className="text-3xl font-medium text-white tracking-tight mb-12">The Atmosphere</h2>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-[600px]">
<div className="col-span-1 md:col-span-2 row-span-2 rounded-2xl bg-neutral-900 relative group overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1566737236500-c8ac43014a67?q=80&amp;w=2070&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-8 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
<p className="text-white font-medium">Main Lounge</p>
<p className="text-xs text-neutral-400">Every Friday &amp; Saturday</p>
</div>
</div>
<div className="col-span-1 rounded-2xl bg-neutral-900 relative group overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1570872626485-d8ffea69f463?q=80&amp;w=2835&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
</div>
<div className="col-span-1 rounded-2xl bg-neutral-900 relative group overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1514525253440-b393452e8d26?q=80&amp;w=2787&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
</div>
<div className="col-span-1 md:col-span-2 rounded-2xl bg-neutral-900 relative group overflow-hidden border border-white/5">
<div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1534149679634-8c83a15dc012?q=80&amp;w=2938&amp;auto=format&amp;fit=crop')] bg-cover bg-center opacity-60 group-hover:opacity-80 transition-opacity duration-700"></div>
<div className="absolute bottom-0 left-0 p-6 w-full bg-gradient-to-t from-black via-black/50 to-transparent">
<p className="text-white font-medium">Cocktail Hour</p>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div>
<a className="text-lg tracking-tight font-medium text-white flex items-center gap-2 mb-4" href="#">
<div className="w-5 h-5 rounded bg-white/10 flex items-center justify-center text-white">
<span className="text-[10px] font-bold">M</span>
</div>
                        MATICLUB
                    </a>
<p className="text-xs text-neutral-600 max-w-xs">
                        © 2023 Maticlub International.<br/>
                        All rights reserved. Membership is subject to approval.
                    </p>
</div>
<div className="flex gap-8 text-sm">
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Company</span>
<a className="hover:text-white transition-colors" href="#">About</a>
<a className="hover:text-white transition-colors" href="#">Careers</a>
<a className="hover:text-white transition-colors" href="#">Contact</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Legal</span>
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Code of Conduct</a>
</div>
<div className="flex flex-col gap-3">
<span className="text-white font-medium">Social</span>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">Twitter</a>
</div>
</div>
</div>
</div>
</footer>



    </>
  );
}
