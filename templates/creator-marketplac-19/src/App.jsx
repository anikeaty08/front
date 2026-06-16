import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();

        function switchFlow(type) {
            const creatorTab = document.getElementById('tab-creator');
            const brandTab = document.getElementById('tab-brand');
            const creatorFlow = document.getElementById('flow-creator');
            const brandFlow = document.getElementById('flow-brand');

            if (type === 'creator') {
                creatorTab.classList.remove('text-gray-500', 'hover:text-gray-900', 'bg-transparent');
                creatorTab.classList.add('bg-[#111]', 'text-white', 'shadow-md');
                
                brandTab.classList.remove('bg-[#111]', 'text-white', 'shadow-md');
                brandTab.classList.add('text-gray-500', 'hover:text-gray-900', 'bg-transparent');

                creatorFlow.classList.remove('hidden');
                creatorFlow.classList.add('grid');
                brandFlow.classList.remove('grid');
                brandFlow.classList.add('hidden');
            } else {
                brandTab.classList.remove('text-gray-500', 'hover:text-gray-900', 'bg-transparent');
                brandTab.classList.add('bg-[#111]', 'text-white', 'shadow-md');
                
                creatorTab.classList.remove('bg-[#111]', 'text-white', 'shadow-md');
                creatorTab.classList.add('text-gray-500', 'hover:text-gray-900', 'bg-transparent');

                brandFlow.classList.remove('hidden');
                brandFlow.classList.add('grid');
                creatorFlow.classList.remove('grid');
                creatorFlow.classList.add('hidden');
            }
        }

        function toggleModal(show) {
            const overlay = document.getElementById('modal-overlay');
            const content = document.getElementById('modal-content');
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');
            
            if (show) {
                form.classList.remove('hidden', 'opacity-0');
                form.classList.add('flex', 'opacity-100');
                success.classList.add('hidden', 'opacity-0');
                success.classList.remove('flex', 'opacity-100');
                overlay.classList.remove('overlay-enter');
                overlay.classList.add('overlay-active');
                content.classList.remove('modal-enter');
                content.classList.add('modal-active');
            } else {
                overlay.classList.remove('overlay-active');
                overlay.classList.add('overlay-enter');
                content.classList.remove('modal-active');
                content.classList.add('modal-enter');
            }
        }

        function submitForm() {
            const form = document.getElementById('modal-form');
            const success = document.getElementById('modal-success');

            form.classList.remove('opacity-100');
            form.classList.add('opacity-0');

            setTimeout(() => {
                form.classList.remove('flex');
                form.classList.add('hidden');
                success.classList.remove('hidden');
                success.classList.add('flex');
                // Trigger reflow
                void success.offsetWidth;
                success.classList.remove('opacity-0');
                success.classList.add('opacity-100');
            }, 300);
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 w-full h-screen opacity-40 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] right-[-10%] w-[50%] h-[50%] bg-indigo-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute bottom-[-10%] left-[-10%] w-[50%] h-[50%] bg-blue-200/40 blur-[120px] rounded-full mix-blend-multiply"></div>
<div className="absolute top-[20%] left-[20%] w-[30%] h-[30%] bg-purple-100/50 blur-[100px] rounded-full mix-blend-multiply"></div>
</div>

<nav className="flex sticky z-40 transition-all duration-300 bg-[#F9FAFB]/80 w-full max-w-7xl border-b border-transparent pt-4 pr-6 pb-4 pl-6 top-0 backdrop-blur-md items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<svg className="w-8 h-8 text-indigo-600 transition-transform duration-300 group-hover:scale-105" fill="none" viewbox="0 0 100 100">
<path d="M20 20 H50 C75 20 75 55 50 55 H35 V80 H20 V20 Z M35 35 V40 H50 C55 40 55 35 50 35 H35 Z" fill="currentColor"></path>
<path d="M50 55 L75 80 H55 L35 60" fill="currentColor" opacity="0.6"></path>
</svg>
<span className="text-xl font-bold tracking-tight text-gray-900">reachly<span className="text-indigo-600">.io</span></span>
</a>

<button className="transition-all duration-300 active:scale-95 hover:bg-black hover:text-white hover:shadow-lg text-sm font-semibold text-black bg-transparent border-black border-2 rounded-full py-2 px-5 shadow-none" onclick="toggleModal(true)">
            Join Waitlist
        </button>
</nav>

<main className="md:space-y-24 w-full max-w-7xl pt-12 pr-6 pb-16 pl-6 space-y-16">

<section className="relative">
<div className="flex flex-col lg:flex-row lg:items-center gap-10 mb-16 justify-between">

<div className="lg:w-[55%] space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-100 bg-indigo-50/50 text-indigo-600">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[13px] uppercase font-bold tracking-wide">Singapore's First Creator Marketplace</span>
</div>
<h1 className="leading-[1.1] md:text-7xl text-5xl font-semibold text-gray-900 tracking-tighter">
                        Monetize Passion,<br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-600 to-blue-500">Scale Authentically.</span>
</h1>
<p className="leading-relaxed text-lg text-gray-500 tracking-tight max-w-lg">
                        The all-in-one marketplace connecting UGC creators with high-intent brands. No minimum followers. No agency fees.
                    </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<button className="bg-[#111] text-white px-8 py-3.5 rounded-full text-base font-medium hover:bg-gray-800 transition-all shadow-[0_4px_14px_0_rgba(0,0,0,0.2)] active:scale-95 flex items-center justify-center gap-2" onclick="toggleModal(true)">
                            Join as Creator
                            <i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
<button className="bg-white text-gray-900 px-8 py-3.5 rounded-full text-base font-semibold border border-gray-200 hover:border-gray-300 hover:bg-gray-50 transition-all active:scale-95 flex items-center justify-center" onclick="toggleModal(true)">
                            I'm a Brand
                        </button>
</div>
</div>

<div className="lg:w-[40%] relative flex justify-center items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[80%] bg-gradient-to-tr from-indigo-200 to-blue-100 blur-[80px] rounded-full -z-10 opacity-60"></div>

<div className="relative w-[300px] h-[600px] bg-white rounded-[3rem] shadow-[0_25px_50px_-12px_rgba(0,0,0,0.15)] border-[8px] border-gray-900 overflow-hidden transform rotate-[-3deg] hover:rotate-0 transition-transform duration-700">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-28 h-7 bg-black rounded-b-2xl z-20"></div>

<div className="w-full h-full bg-gray-50 flex flex-col pt-10">

<div className="px-6 pb-4 flex justify-between items-center">
<div className="font-bold text-lg tracking-tight">Discover</div>
<div className="w-8 h-8 rounded-full bg-gray-200 overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
</div>
</div>

<div className="px-4 space-y-4 overflow-hidden relative flex-1">

<div className="absolute top-6 left-4 right-4 h-[400px] bg-white rounded-2xl shadow-sm border border-gray-100 scale-95 opacity-50 translate-y-4"></div>

<div className="relative w-full bg-white rounded-3xl shadow-xl overflow-hidden border border-gray-100 group cursor-pointer">
<div className="h-64 overflow-hidden relative">
<img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" src="https://images.unsplash.com/photo-1515734674582-29010bb37906?q=80&amp;w=687&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&amp;auto=format&amp;fit=crop&amp;ixlib=rb-4.1.0&amp;ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="absolute bottom-3 left-3 bg-black/50 backdrop-blur-md px-3 py-1 rounded-full text-white text-xs font-medium">
                                            UGC Creator
                                        </div>
</div>
<div className="p-5 space-y-3">
<div className="flex justify-between items-start">
<div>
<h3 className="font-bold text-gray-900">Sarah Chen</h3>
<p className="text-xs text-gray-500">Lifestyle &amp; Beauty • Singapore</p>
</div>
<div className="flex items-center gap-1 text-xs font-semibold bg-green-50 text-green-700 px-2 py-1 rounded-lg">
<i className="w-3 h-3" data-lucide="verified"></i> 98% Match
                                            </div>
</div>
<div className="flex gap-2 text-xs text-gray-600">
<span className="bg-gray-100 px-2 py-1 rounded-md">Video</span>
<span className="bg-gray-100 px-2 py-1 rounded-md">Photography</span>
</div>
<button className="w-full bg-indigo-600 text-white py-2.5 rounded-xl text-sm font-semibold mt-2 shadow-lg shadow-indigo-200">
                                            Collaborate
                                        </button>
</div>
</div>
</div>
</div>
</div>

<div className="absolute top-[35%] left-[-20px] z-50 animate-bounce duration-[3000ms] hidden md:flex items-center gap-3 bg-white p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-50">
<div className="bg-blue-100 text-blue-600 p-2 rounded-xl">
<i className="w-5 h-5" data-lucide="shield-check"></i>
</div>
<div>
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Payments</div>
<div className="text-sm font-bold text-gray-900">Protected &amp; Fast</div>
</div>
</div>

<div className="absolute bottom-[20%] right-[-10px] z-50 animate-bounce duration-[3000ms] delay-700 hidden md:flex items-center gap-3 bg-white p-3 pr-5 rounded-2xl shadow-[0_8px_30px_rgba(0,0,0,0.08)] border border-gray-50">
<div className="bg-orange-100 text-orange-600 p-2 rounded-xl">
<i className="w-5 h-5" data-lucide="zap"></i>
</div>
<div>
<div className="text-[10px] font-semibold text-gray-400 uppercase tracking-wider">Fees</div>
<div className="text-sm font-bold text-gray-900">0% Agency Fees</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-4xl mx-auto text-center space-y-10 py-12">
<div className="space-y-4">
<span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-indigo-50 border border-indigo-100 text-indigo-600 text-[11px] font-bold uppercase tracking-wider">Our Mission</span>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-gray-900 leading-tight">
                    We're bridging the gap between <span className="text-indigo-600">authentic creators</span> and <span className="text-blue-500">growing brands</span>.
                </h2>
</div>
<div className="grid md:grid-cols-2 gap-12 items-center text-left">
<div className="relative pl-6 border-l-2 border-indigo-100">
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">Democratizing Access</h3>
<p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                        To democratize access to content collaborations and build Singapore's largest transparent content marketplace. We believe every creator deserves fair pay and every brand deserves authentic voices.
                    </p>
</div>
<div className="relative pl-6 border-l-2 border-orange-100">
<h3 className="text-xl font-bold text-gray-900 mb-3 tracking-tight">The Origin Story</h3>
<p className="text-gray-500 leading-relaxed text-[15px] font-medium">
                        Born from personal frustration with the expensive, opaque nature of traditional agencies. We spent months refining a platform that strips away barriers, allowing creators to monetize passion and brands to find voices without the $30k price tag.
                    </p>
</div>
</div>
</section>

<section className="bg-white w-full border border-gray-100 rounded-[2.5rem] p-12 shadow-[0_2px_40px_-10px_rgba(0,0,0,0.04)]">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-y md:divide-y-0 md:divide-x divide-gray-100 text-center">
<div className="md:pt-0 pt-4">
<div className="leading-[1.1] text-5xl md:text-6xl font-semibold text-gray-900 tracking-tighter">50+</div>
<div className="uppercase text-xs font-semibold text-gray-500 tracking-wide mt-2">Active Creators</div>
</div>
<div className="pt-8 md:pt-0">
<div className="leading-[1.1] text-5xl md:text-6xl font-semibold text-gray-900 tracking-tighter">20+</div>
<div className="uppercase text-xs font-semibold text-gray-500 tracking-wide mt-2">Brands Onboarded</div>
</div>
<div className="md:pt-0 pt-8">
<div className="leading-[1.1] text-5xl md:text-6xl font-semibold text-gray-900 tracking-tighter">#1</div>
<div className="uppercase text-xs font-semibold text-gray-500 tracking-wide mt-2">Creator Marketplace in SG</div>
</div>
</div>
</section>

<section className="py-2 flex flex-col items-center w-full">
<div className="text-center space-y-3 mb-10">
<h2 className="text-3xl md:text-5xl font-semibold text-gray-900 tracking-tight">How It Works</h2>
<p className="text-lg text-gray-500 font-medium">The process is seamless!</p>
</div>

<div className="bg-white p-1.5 rounded-xl border border-gray-100 shadow-sm inline-flex mb-16">
<button className="px-8 py-2.5 rounded-lg text-sm font-semibold transition-all shadow-md bg-[#111] text-white" id="tab-creator" onclick="switchFlow('creator')">
                    For Creators
                </button>
<button className="px-8 py-2.5 rounded-lg text-sm font-semibold transition-all text-gray-500 hover:text-gray-900 bg-transparent" id="tab-brand" onclick="switchFlow('brand')">
                    For Brands
                </button>
</div>

<div className="relative w-full max-w-4xl mx-auto">

<div className="hidden md:block absolute top-[26px] left-[15%] right-[15%] h-[2px] bg-gray-100 -z-10"></div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full transition-all duration-300" id="flow-creator">

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-[#111] text-white rounded-full flex items-center justify-center font-bold text-xl border-[6px] border-white shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">1</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Apply</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Browse campaigns that match your interests and apply in seconds. No minimum followers required.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-[#111] text-white rounded-full flex items-center justify-center font-bold text-xl border-[6px] border-white shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">2</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Match</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Get matched with brands that love your authentic voice and creative style.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-[#111] text-white rounded-full flex items-center justify-center font-bold text-xl border-[6px] border-white shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">3</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Get Paid</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Create amazing content, submit it, and receive protected payments directly.
                            </p>
</div>
</div>
</div>

<div className="hidden grid-cols-1 md:grid-cols-3 gap-12 md:gap-8 w-full transition-all duration-300" id="flow-brand">

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-white text-[#111] border-2 border-[#111] rounded-full flex items-center justify-center font-bold text-xl shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">1</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Post Brief</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Create a campaign brief detailing your requirements, budget, and desired aesthetic.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-white text-[#111] border-2 border-[#111] rounded-full flex items-center justify-center font-bold text-xl shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">2</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Approve</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Review applications from verified creators and select the best fit for your brand.
                            </p>
</div>
</div>

<div className="flex flex-col items-center text-center space-y-5 group">
<div className="w-14 h-14 bg-white text-[#111] border-2 border-[#111] rounded-full flex items-center justify-center font-bold text-xl shadow-xl shadow-gray-100 group-hover:scale-110 transition-transform duration-300">3</div>
<div className="space-y-3">
<h3 className="text-xl font-bold text-gray-900">Receive Content</h3>
<p className="text-sm text-gray-500 leading-relaxed max-w-[240px] mx-auto font-medium">
                                Receive high-quality UGC ready for your ads and socials. Pay only when satisfied.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="flex flex-col items-center w-full space-y-16 py-12">

<div className="w-full space-y-8">
<div className="flex items-center gap-4">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">For Creators</h3>
<div className="h-[1px] flex-1 bg-gray-100"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-green-50 flex items-center justify-center text-green-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="wallet"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Monetize Your Passion</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
                                Turn your side hustle into income. Apply to campaigns, match, and get paid securely.
                            </p>
</div>
<div className="mt-8 h-16 bg-gradient-to-t from-green-50 to-transparent rounded-lg flex items-end justify-center pb-2 gap-2">
<div className="w-4 h-6 bg-green-200 rounded-sm"></div>
<div className="w-4 h-10 bg-green-300 rounded-sm"></div>
<div className="w-4 h-8 bg-green-200 rounded-sm"></div>
<div className="w-4 h-12 bg-green-400 rounded-sm"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-pink-50 flex items-center justify-center text-pink-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="heart"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">No Minimum Followers</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
                                Authenticity over vanity metrics. We value high-quality UGC over follower counts.
                            </p>
</div>
<div className="mt-8 flex items-center gap-2 opacity-60">
<div className="h-1 w-full bg-pink-200 rounded-full"></div>
<div className="h-1 w-1/3 bg-gray-100 rounded-full"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-blue-50 flex items-center justify-center text-blue-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Protected Payments</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
                                Funds are held in escrow until deliverables are approved. No more chasing invoices.
                            </p>
</div>
<div className="mt-8 flex justify-center">
<div className="relative w-12 h-12 flex items-center justify-center bg-blue-100 rounded-full">
<i className="w-6 h-6 text-blue-600" data-lucide="check"></i>
</div>
</div>
</div>
</div>
</div>

<div className="w-full space-y-8">
<div className="flex items-center gap-4">
<h3 className="text-2xl font-semibold tracking-tight text-gray-900">For Brands</h3>
<div className="h-[1px] flex-1 bg-gray-100"></div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 w-full">

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-indigo-50 flex items-center justify-center text-indigo-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="users"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Frictionless Matching</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
                                No expensive agencies. Directly connect with high-intent brands or authentic creators in minutes.
                            </p>
</div>
<div className="mt-8 flex items-center justify-center opacity-80 gap-3">
<div className="w-10 h-10 rounded-full bg-gray-100 border-2 border-white shadow-sm"></div>
<div className="w-16 h-[2px] bg-indigo-100 relative">
<div className="absolute right-0 top-1/2 -translate-y-1/2 w-2 h-2 bg-indigo-400 rounded-full"></div>
</div>
<div className="w-10 h-10 rounded-full bg-indigo-100 border-2 border-white shadow-sm"></div>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-orange-50 flex items-center justify-center text-orange-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="zap"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Zero Middleman Fees</h3>
<p className="leading-relaxed text-sm text-gray-500 font-medium">
                                Say goodbye to 6k-30k agency retainers. Transparent pricing with protected payments.
                            </p>
</div>
<div className="mt-8 relative h-12 overflow-hidden flex items-center justify-center text-orange-200">
<i className="w-16 h-16 opacity-20 rotate-12" data-lucide="percent"></i>
</div>
</div>

<div className="bg-white rounded-[2rem] p-8 shadow-[0_2px_20px_-4px_rgba(0,0,0,0.04)] border border-gray-100 flex flex-col justify-between group hover:shadow-[0_8px_30px_rgba(0,0,0,0.06)] transition-all duration-300 hover:-translate-y-1">
<div className="space-y-4">
<div className="w-12 h-12 rounded-2xl bg-purple-50 flex items-center justify-center text-purple-600 group-hover:scale-110 transition-transform duration-300">
<i className="w-6 h-6 stroke-[1.5]" data-lucide="sparkles"></i>
</div>
<h3 className="text-xl font-semibold tracking-tight text-gray-900">Access to Talent</h3>
<p className="text-sm text-gray-500 leading-relaxed font-medium">
                                Access top-tier creative talent without the enterprise price tag. Perfect for lean startups.
                            </p>
</div>
<div className="mt-8 flex justify-end">
<div className="px-3 py-1 bg-purple-100 rounded-full flex items-center justify-center">
<span className="text-[10px] font-bold text-purple-600 uppercase tracking-wide">Singapore</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 w-full">
<div className="text-center mb-10">
<h2 className="text-3xl font-semibold text-gray-900 tracking-tight">Trusted by the community</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="font-bold text-gray-900 text-sm">Alex Thompson</div>
<div className="text-xs text-gray-500 font-medium">Founder, GlowCo</div>
</div>
</div>
<p className="text-gray-600 font-medium leading-relaxed">
                        "Finally, a platform that understands small brands. We found 5 amazing creators in under 48 hours. No agency fees, just pure value."
                    </p>
<div className="flex text-yellow-400 gap-1 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="font-bold text-gray-900 text-sm">Jamie Lin</div>
<div className="text-xs text-gray-500 font-medium">UGC Creator</div>
</div>
</div>
<p className="text-gray-600 font-medium leading-relaxed">
                        "Reachly is a game changer. I used to chase payments for weeks. Now, the money is in escrow before I even start filming. 10/10."
                    </p>
<div className="flex text-yellow-400 gap-1 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>

<div className="bg-white p-8 rounded-[2rem] border border-gray-100 shadow-sm flex flex-col gap-6">
<div className="flex items-center gap-4">
<img className="w-12 h-12 rounded-full object-cover bg-gray-100" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&amp;fit=crop&amp;w=100&amp;q=80"/>
<div>
<div className="font-bold text-gray-900 text-sm">Marcus Tan</div>
<div className="text-xs text-gray-500 font-medium">Marketing Lead</div>
</div>
</div>
<p className="text-gray-600 font-medium leading-relaxed">
                        "The transparency is refreshing. We know exactly what we're paying for, and the quality of creators in Singapore on here is unmatched."
                    </p>
<div className="flex text-yellow-400 gap-1 mt-auto">
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
<i className="w-4 h-4 fill-current" data-lucide="star"></i>
</div>
</div>
</div>
</section>

<section className="text-center pt-10 space-y-8 pb-10">
<div className="space-y-4">
<div className="inline-flex text-[10px] uppercase font-bold text-indigo-600 tracking-wider bg-indigo-50 border border-indigo-100 rounded-full px-4 py-1.5 items-center">
                    Beta Access Open
                </div>
<h2 className="text-4xl md:text-6xl font-semibold text-gray-900 tracking-tighter">Start your journey today.</h2>
<p className="text-lg text-gray-500 max-w-lg mx-auto font-medium">
                    Whether you're monetizing your passion or scaling your brand authentically. Reachly is your partner.
                </p>
</div>
<button className="bg-[#111] text-white px-10 py-4 rounded-full text-lg font-medium hover:bg-gray-800 transition-all shadow-xl hover:-translate-y-1 active:scale-95" onclick="toggleModal(true)">
                Join the Waitlist
            </button>
</section>
</main>

<footer className="w-full border-t border-gray-200 bg-white py-12 mt-auto">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-6">
<div className="flex items-center gap-2">
<span className="text-sm text-gray-500 font-semibold">© 2025 Reachly. Singapore's First Transparent Creator Marketplace.</span>
</div>
<div className="flex gap-6 items-center">
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="instagram"></i>
</a>
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="twitter"></i>
</a>
<a className="text-gray-400 hover:text-indigo-600 transition-colors" href="#">
<i className="w-5 h-5" data-lucide="linkedin"></i>
</a>
</div>
</div>
</footer>


<div className="fixed inset-0 z-50 bg-[#F9FAFB]/80 backdrop-blur-md transition-all duration-300 overlay-enter" id="modal-overlay" onclick="toggleModal(false)"></div>

<div className="fixed top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 z-[51] w-full max-w-sm px-4 transition-all duration-300 modal-enter" id="modal-content">
<div className="bg-white rounded-[2rem] shadow-[0_20px_60px_-15px_rgba(0,0,0,0.1)] p-8 md:p-10 flex flex-col items-center text-center relative overflow-hidden border border-gray-100 min-h-[420px] justify-center">

<div className="w-full flex flex-col items-center transition-opacity duration-300 opacity-100" id="modal-form">

<div className="mb-6 text-indigo-600">
<svg className="w-12 h-12" fill="none" viewbox="0 0 100 100">
<path d="M20 20 H50 C75 20 75 55 50 55 H35 V80 H20 V20 Z M35 35 V40 H50 C55 40 55 35 50 35 H35 Z" fill="currentColor"></path>
<path d="M50 55 L75 80 H55 L35 60" fill="currentColor" opacity="0.6"></path>
</svg>
</div>

<h3 className="text-2xl font-bold tracking-tight text-gray-900 mb-2">Join Reachly</h3>

<p className="font-quicksand text-sm text-gray-500 font-medium mb-8 leading-relaxed max-w-[260px]">
                    Be the first to access Singapore's largest creator marketplace.
                </p>

<div className="w-full space-y-3">
<div className="flex gap-2 mb-2">
<button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:bg-indigo-50 focus:text-indigo-600 focus:ring-2 ring-indigo-500 ring-offset-1 outline-none">I'm a Creator</button>
<button className="flex-1 py-2 text-xs font-semibold rounded-lg bg-gray-100 text-gray-600 hover:bg-gray-200 transition-colors focus:bg-indigo-50 focus:text-indigo-600 focus:ring-2 ring-indigo-500 ring-offset-1 outline-none">I'm a Brand</button>
</div>
<input className="w-full px-5 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Enter your Email" type="email"/>
<div className="relative w-full">
<input className="w-full pl-5 pr-14 py-3 rounded-xl border border-gray-200 bg-gray-50 text-gray-900 placeholder:text-gray-400 font-medium focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:border-transparent transition-all" placeholder="Instagram / TikTok Handle" type="text"/>
<button className="absolute right-1.5 top-1/2 -translate-y-1/2 bg-indigo-600 text-white p-2 rounded-lg hover:bg-indigo-700 transition-colors shadow-md" onclick="submitForm()">
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
</div>

<div className="w-full flex-col items-center hidden opacity-0 transition-opacity duration-300 absolute inset-0 justify-center p-8 text-center" id="modal-success">
<div className="w-16 h-16 bg-green-50 rounded-full flex items-center justify-center text-green-500 mb-6">
<i className="w-8 h-8" data-lucide="check"></i>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-gray-900 mb-4">You're on the list!</h3>
<p className="font-quicksand text-sm text-gray-500 font-medium mb-8 leading-relaxed max-w-[280px] mx-auto">
                    Thanks for joining the revolution. We'll notify you as soon as early access opens in Singapore.
                </p>
<button className="transition-all duration-300 hover:bg-gray-100 hover:text-black text-sm font-semibold text-gray-500 bg-transparent border-gray-200 border rounded-full px-8 py-2.5" onclick="toggleModal(false)">
                    Close
                </button>
</div>
</div>
</div>


    </>
  );
}
