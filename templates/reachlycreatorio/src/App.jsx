import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');
            
            if (show) {
                form.classList.remove('hidden');
                success.classList.add('hidden');
                success.classList.remove('flex');

                overlay.classList.remove('pointer-events-none', 'opacity-0');
                content.classList.remove('pointer-events-none', 'opacity-0', 'scale-95');
                content.classList.add('scale-100');
            } else {
                overlay.classList.add('pointer-events-none', 'opacity-0');
                content.classList.add('pointer-events-none', 'opacity-0', 'scale-95');
                content.classList.remove('scale-100');
            }
        }

        function submitForm() {
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');

            form.classList.add('hidden');
            success.classList.remove('hidden');
            success.classList.add('flex');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-[#E5E7EB] bg-white/90 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="flex items-center gap-2 group" href="#">
<div className="w-10 h-10 bg-[#1A1A2E] rounded-xl flex items-center justify-center text-white">
<iconify-icon height="24" icon="solar:users-group-rounded-linear" width="24"></iconify-icon>
</div>
<span className="font-bold tracking-tight text-xl text-[#1A1A2E] group-hover:opacity-80 transition-opacity">Reachly</span>
</a>
<div className="flex items-center gap-6">
<a className="hidden md:block text-sm font-medium text-[#6B7280] hover:text-[#1A1A2E] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ec4899] hover:after:w-full after:transition-all" href="#">For Creators</a>
<a className="hidden md:block text-sm font-medium text-[#6B7280] hover:text-[#1A1A2E] transition-colors relative after:content-[''] after:absolute after:bottom-[-4px] after:left-0 after:w-0 after:h-[2px] after:bg-[#ec4899] hover:after:w-full after:transition-all" href="#">For Brands</a>
<button className="text-sm font-semibold bg-[#1A1A2E] text-white px-5 py-2.5 rounded-lg hover:bg-[#333] transition-all hover:-translate-y-0.5 shadow-[0_4px_14px_rgba(0,0,0,0.1)] active:scale-95 flex items-center gap-2" onclick="toggleModal(true)">
<span>Get Started</span>
</button>
</div>
</div>
</nav>

<main className="flex-grow pt-36 pb-20 w-full">

<section className="relative px-6 max-w-7xl mx-auto mb-32">

<div className="absolute inset-0 -z-10 mesh-bg opacity-100 rounded-3xl"></div>
<div className="flex flex-col lg:flex-row items-center gap-16 lg:gap-12">

<div className="lg:w-1/2 space-y-8 text-center lg:text-left">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-lg bg-[#ec4899]/10 border border-[#ec4899]/20 text-[#ec4899] text-xs font-bold uppercase tracking-wider">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#ec4899] opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#ec4899]"></span>
</span>
                        Singapore's #1 Creator Marketplace
                    </div>
<h1 className="text-5xl md:text-7xl font-extrabold tracking-tight leading-[1.1] text-[#1A1A2E]">
                        Monetize Passion. <br/>
<span className="text-[#ec4899]">Amplify Brands.</span>
</h1>
<p className="text-lg text-[#6B7280] leading-relaxed max-w-xl mx-auto lg:mx-0">
                        The transparent marketplace connecting authentic UGC creators with high-intent brands. No agency fees, no follower minimums.
                    </p>
<div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-4 pt-2">
<button className="w-full sm:w-auto px-8 py-3.5 bg-[#1A1A2E] text-white rounded-xl font-semibold hover:translate-y-[-2px] hover:shadow-lg transition-all active:scale-95" onclick="toggleModal(true)">
                            I'm a Creator
                        </button>
<button className="w-full sm:w-auto px-8 py-3.5 bg-transparent text-[#1A1A2E] border-2 border-[#E5E7EB] rounded-xl font-semibold hover:border-[#1A1A2E] hover:translate-y-[-2px] transition-all active:scale-95 flex items-center justify-center gap-2" onclick="toggleModal(true)">
<span>I'm a Brand</span>
</button>
</div>
<div className="pt-6 flex items-center justify-center lg:justify-start gap-8 text-sm text-[#9CA3AF] font-medium">
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ec4899]" icon="solar:shield-check-linear"></iconify-icon>
<span>Verified Profiles</span>
</div>
<div className="flex items-center gap-2">
<iconify-icon className="text-[#ec4899]" icon="solar:wallet-money-linear"></iconify-icon>
<span>Protected Payments</span>
</div>
</div>
</div>

<div className="lg:w-1/2 relative flex justify-center">
<div className="absolute inset-0 bg-gradient-to-tr from-[#ec4899]/10 to-[#1A1A2E]/5 blur-3xl -z-10 rounded-full"></div>
<div className="relative z-10 w-full max-w-[400px]">

<img alt="Reachly App" className="w-full h-auto drop-shadow-[0_8px_30px_rgba(0,0,0,0.12)] transform transition-transform duration-700 hover:scale-[1.02] rounded-[2rem]" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/555a77f3-f086-4f6b-9bee-5b5e25d582af_800w.png"/>

<div className="absolute top-12 -left-8 glass-card p-4 rounded-2xl border border-[#E5E7EB] shadow-lg hidden md:flex items-center gap-4 animate-[bounce_6s_infinite] -rotate-2 hover:rotate-0 transition-transform">
<div className="w-10 h-10 rounded-lg bg-[#ec4899]/10 flex items-center justify-center text-[#ec4899]">
<iconify-icon icon="solar:clapperboard-play-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-[#6B7280] uppercase tracking-wider font-bold">New Gig</div>
<div className="text-base font-bold text-[#1A1A2E]">UGC Campaign</div>
</div>
</div>
<div className="absolute bottom-24 -right-4 glass-card p-4 rounded-2xl border border-[#E5E7EB] shadow-lg hidden md:flex items-center gap-4 animate-[bounce_7s_infinite_1s] rotate-2 hover:rotate-0 transition-transform">
<div className="w-10 h-10 rounded-lg bg-[#1A1A2E]/5 flex items-center justify-center text-[#1A1A2E]">
<iconify-icon icon="solar:wad-of-money-linear" width="20"></iconify-icon>
</div>
<div>
<div className="text-[10px] text-[#6B7280] uppercase tracking-wider font-bold">Earnings</div>
<div className="text-base font-bold text-[#1A1A2E]">$450.00</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA] border-y border-[#E5E7EB]">
<div className="max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">The Creator Economy is Broken</h2>
<p className="text-[#6B7280] text-lg">We're bridging the gap between authentic creators and growing brands.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-card p-8 rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden group">
<div className="w-14 h-14 rounded-xl bg-[#ec4899]/10 text-[#ec4899] flex items-center justify-center mb-6">
<iconify-icon icon="solar:sad-circle-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-4">For Creators</h3>
<ul className="space-y-3">
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Hard to monetize side hustles</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Struggle finding partnerships</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Unreliable payments</li>
</ul>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="glass-card p-8 rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden group">
<div className="w-14 h-14 rounded-xl bg-[#ec4899]/10 text-[#ec4899] flex items-center justify-center mb-6">
<iconify-icon icon="solar:tag-price-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-4">For Brands</h3>
<ul className="space-y-3">
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Agencies are crazily expensive</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Manual sourcing takes forever</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Influencers ghosting you</li>
</ul>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>

<div className="glass-card p-8 rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-md transition-all relative overflow-hidden group">
<div className="w-14 h-14 rounded-xl bg-[#ec4899]/10 text-[#ec4899] flex items-center justify-center mb-6">
<iconify-icon icon="solar:stars-minimalistic-linear" width="28"></iconify-icon>
</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-4">The Reachly Way</h3>
<ul className="space-y-3">
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Democratized access for all</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Transparent &amp; frictionless</li>
<li className="relative pl-6 text-[#6B7280] text-sm before:content-['→'] before:absolute before:left-0 before:text-[#ec4899] before:font-bold">Secure matches &amp; payments</li>
</ul>
<div className="absolute bottom-0 left-0 right-0 h-1 bg-[#ec4899] opacity-0 group-hover:opacity-100 transition-opacity"></div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white relative">
<div className="max-w-4xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A2E] mb-4">Simple, Seamless, Secure</h2>
<p className="text-[#6B7280] text-lg">Turn attention into customers in three simple steps.</p>
</div>
<div className="flex flex-col md:flex-row items-start justify-between gap-8 md:gap-4 relative">

<div className="hidden md:block absolute top-[26px] left-[10%] right-[10%] h-[2px] bg-[#E5E7EB] -z-10"></div>

<div className="flex-1 text-center group">
<div className="w-[52px] h-[52px] bg-[#1A1A2E] text-white rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md group-hover:scale-110 transition-transform">1</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Apply</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Create your profile in minutes. No minimum follower count required for creators.</p>
</div>

<div className="flex-1 text-center group">
<div className="w-[52px] h-[52px] bg-white border-2 border-[#1A1A2E] text-[#1A1A2E] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md group-hover:bg-[#1A1A2E] group-hover:text-white transition-colors">2</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Match</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Our transparent marketplace connects you with high-intent brands and creators instantly.</p>
</div>

<div className="flex-1 text-center group">
<div className="w-[52px] h-[52px] bg-white border-2 border-[#1A1A2E] text-[#1A1A2E] rounded-full flex items-center justify-center text-xl font-bold mx-auto mb-6 shadow-md group-hover:bg-[#1A1A2E] group-hover:text-white transition-colors">3</div>
<h3 className="text-xl font-bold text-[#1A1A2E] mb-2">Succeed</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Launch campaigns or get paid. Payments are protected and content is authentic.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#F8F9FA] relative">
<div className="max-w-3xl mx-auto px-6">
<div className="bg-white border border-[#E5E7EB] rounded-2xl p-12 text-center shadow-sm">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A2E] mb-6">Our Mission</h2>
<p className="text-lg text-[#1A1A2E] font-medium leading-relaxed mb-6 italic">
                        "To democratize access to influencer collaborations and build Singapore's largest transparent content marketplace."
                    </p>
<p className="text-[#6B7280] leading-relaxed mb-8">
                        Born from personal frustration with the expensive, opaque nature of traditional agencies. We spent hours refining a platform that strips away the barriers, allowing creators to monetize their passion and brands to find authentic voices without the 30k price tag.
                    </p>
<div className="pt-8 border-t border-[#E5E7EB]">
<span className="text-[#ec4899] font-bold text-sm uppercase tracking-wide">The Reachly Team</span>
</div>
</div>
</div>
</section>

<section className="py-24 bg-white">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-extrabold tracking-tight text-[#1A1A2E]">Everything you need to collaborate</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:users-group-two-rounded-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">No Minimum Followers</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">We value authenticity over vanity metrics. Start earning with your creative passion today.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:shield-check-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Protected Payments</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Funds are held securely and only released when the work is approved. No more chasing invoices.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:magic-stick-3-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Direct Connections</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Cut out the middleman. Chat directly with brands and creators to align on vision.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:wallet-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Zero Agency Fees</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Say goodbye to 6k-30k retainers. Pay only for the content and creators you work with.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:gallery-favourite-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Authentic UGC</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Source high-quality user generated content that feels real and converts better.</p>
</div>

<div className="p-8 bg-white rounded-2xl border border-[#E5E7EB] hover:-translate-y-1 hover:shadow-lg transition-all">
<div className="text-4xl mb-6 text-[#ec4899]">
<iconify-icon icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="text-lg font-bold text-[#1A1A2E] mb-2">Fast Matching</h3>
<p className="text-[#6B7280] text-sm leading-relaxed">Our platform helps you find the right fit quickly, saving hours of manual searching.</p>
</div>
</div>
</div>
</section>

<section className="relative bg-[#F8F9FA] py-24 px-6 text-center border-t border-[#E5E7EB]">
<div className="relative z-10 max-w-2xl mx-auto space-y-8">
<h2 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#1A1A2E]">Ready to create?</h2>
<p className="text-[#6B7280] text-lg">Join Singapore's fastest growing creator marketplace today.</p>
<form className="flex flex-col sm:flex-row gap-3 max-w-md mx-auto justify-center" onsubmit="event.preventDefault(); toggleModal(true)">
<button className="bg-[#1A1A2E] text-white px-8 py-3.5 rounded-xl font-semibold hover:bg-[#333] hover:shadow-lg hover:-translate-y-0.5 transition-all w-full sm:w-auto" type="submit">
                        Get Started
                    </button>
<button className="bg-white text-[#1A1A2E] border border-[#E5E7EB] px-8 py-3.5 rounded-xl font-semibold hover:border-[#1A1A2E] transition-all w-full sm:w-auto" type="button">
                        Learn More
                    </button>
</form>
</div>
</section>
</main>

<footer className="bg-[#1A1A2E] text-white py-16">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="space-y-4">
<div className="flex items-center gap-2">
<div className="w-8 h-8 bg-white rounded-lg flex items-center justify-center text-[#1A1A2E]">
<iconify-icon icon="solar:users-group-rounded-bold" width="20"></iconify-icon>
</div>
<span className="text-lg font-bold">Reachly</span>
</div>
<p className="text-white/60 text-sm leading-relaxed">Democratizing access to content creation collaborations.</p>
</div>
<div>
<h4 className="font-bold mb-4">Platform</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">For Creators</a></li>
<li><a className="hover:text-white transition-colors" href="#">For Brands</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Support</h4>
<ul className="space-y-2 text-sm text-white/60">
<li><a className="hover:text-white transition-colors" href="#">About Us</a></li>
<li><a className="hover:text-white transition-colors" href="#">Help Center</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy Policy</a></li>
</ul>
</div>
<div>
<h4 className="font-bold mb-4">Connect</h4>
<div className="flex items-center gap-3">
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#ec4899] hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:instagram" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#ec4899] hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:tiktok" width="16"></iconify-icon>
</a>
<a className="w-9 h-9 bg-white/10 rounded-lg flex items-center justify-center text-white/60 hover:bg-[#ec4899] hover:text-white transition-all" href="#">
<iconify-icon icon="simple-icons:linkedin" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
<div className="max-w-7xl mx-auto px-6 mt-12 pt-8 border-t border-white/10 text-center text-xs text-white/40">
            © 2026 Reachly. All rights reserved.
        </div>
</footer>

<div className="fixed inset-0 z-[60] bg-[#1A1A2E]/40 backdrop-blur-sm opacity-0 pointer-events-none transition-opacity duration-300" id="modal-overlay" onclick="toggleModal(false)"></div>
<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[70] w-full max-w-md px-4 opacity-0 pointer-events-none scale-95 transition-all duration-300" id="modal-content">
<div className="bg-white rounded-2xl shadow-2xl p-8 border border-[#E5E7EB] relative overflow-hidden">
<button className="absolute top-4 right-4 text-[#9CA3AF] hover:text-[#1A1A2E] transition-colors" onclick="toggleModal(false)">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>

<div className="text-center space-y-6" id="modal-form">
<div className="w-12 h-12 bg-[#ec4899]/10 rounded-full flex items-center justify-center mx-auto text-[#ec4899] border border-[#ec4899]/20">
<iconify-icon icon="solar:user-plus-linear" width="24"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-2xl font-bold tracking-tight text-[#1A1A2E]">Join the Waitlist</h3>
<p className="text-sm text-[#6B7280]">Get early access to Singapore's transparent marketplace.</p>
</div>
<div className="space-y-3">
<div className="group relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#1A1A2E] transition-colors" icon="solar:letter-linear"></iconify-icon>
<input className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-sm outline-none focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] transition-all placeholder:text-[#9CA3AF] text-[#1A1A2E]" placeholder="Email address" type="email"/>
</div>
<div className="group relative">
<iconify-icon className="absolute left-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] group-focus-within:text-[#1A1A2E] transition-colors" icon="solar:user-circle-linear"></iconify-icon>
<select className="w-full pl-10 pr-4 py-3 bg-[#F8F9FA] border border-[#E5E7EB] rounded-xl text-sm outline-none focus:border-[#ec4899] focus:ring-1 focus:ring-[#ec4899] transition-all text-[#1A1A2E] appearance-none">
<option disabled="" selected="" value="">I am a...</option>
<option value="creator">Creator</option>
<option value="brand">Brand</option>
</select>
<iconify-icon className="absolute right-4 top-1/2 -translate-y-1/2 text-[#9CA3AF] pointer-events-none" icon="solar:alt-arrow-down-linear"></iconify-icon>
</div>
</div>
<button className="w-full bg-[#1A1A2E] text-white py-3 rounded-xl font-semibold hover:bg-[#333] transition-colors shadow-lg shadow-[#1A1A2E]/20" onclick="submitForm()">
                    Get Early Access
                </button>
</div>

<div className="hidden flex-col items-center text-center space-y-6 py-4" id="modal-success">
<div className="w-16 h-16 bg-green-50 text-green-600 rounded-full flex items-center justify-center mb-2">
<iconify-icon icon="solar:check-circle-linear" width="32"></iconify-icon>
</div>
<div className="space-y-2">
<h3 className="text-2xl font-bold tracking-tight text-[#1A1A2E]">Welcome to Reachly!</h3>
<p className="text-sm text-[#6B7280] max-w-xs mx-auto">You're on the list. We'll be in touch soon.</p>
</div>
<button className="px-8 py-2 border border-[#E5E7EB] rounded-full text-sm font-medium hover:bg-[#F8F9FA] transition-colors text-[#1A1A2E]" onclick="toggleModal(false)">
                    Close
                </button>
</div>
</div>
</div>


    </>
  );
}
