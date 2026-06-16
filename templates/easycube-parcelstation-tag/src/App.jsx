import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        function toggleWorkflow() {
            const inboundContainer = document.getElementById('workflow-inbound');
            const outboundContainer = document.getElementById('workflow-outbound');
            const title = document.getElementById('workflow-title');
            const desc = document.getElementById('workflow-desc');
            const isOutbound = inboundContainer.classList.contains('hidden');

            if (!isOutbound) {
                // Fade out inbound
                inboundContainer.classList.remove('opacity-100');
                inboundContainer.classList.add('opacity-0');
                
                setTimeout(() => {
                    inboundContainer.classList.add('hidden');
                    outboundContainer.classList.remove('hidden');
                    
                    // Allow block reflow then fade in outbound
                    requestAnimationFrame(() => {
                        outboundContainer.classList.remove('opacity-0');
                        outboundContainer.classList.add('opacity-100');
                    });
                    
                    title.innerText = 'Outbound Workflow';
                    desc.innerText = 'Locate parcels instantly and hand them over to customers in under 5 seconds.';
                }, 300);
            } else {
                // Fade out outbound
                outboundContainer.classList.remove('opacity-100');
                outboundContainer.classList.add('opacity-0');
                
                setTimeout(() => {
                    outboundContainer.classList.add('hidden');
                    inboundContainer.classList.remove('hidden');
                    
                    // Allow block reflow then fade in inbound
                    requestAnimationFrame(() => {
                        inboundContainer.classList.remove('opacity-0');
                        inboundContainer.classList.add('opacity-100');
                    });
                    
                    title.innerText = 'Inbound Workflow';
                    desc.innerText = 'Seamlessly assign tags to arriving parcels and place them anywhere.';
                }, 300);
            }
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="w-full px-6 md:px-12 py-6 absolute top-0 left-0 z-50">
<div className="max-w-6xl mx-auto flex items-center justify-between">
<div className="flex items-center gap-2">

<img alt="Easycube Logo" className="h-8 w-auto object-contain fallback-logo" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0f44c9b-3ffa-4ce9-b5d2-796c421d65de_320w.png"/>
<span className="font-medium text-base tracking-tight">Easycube TAG</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-orange-500 hover:text-orange-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-sm font-medium text-orange-500 hover:text-orange-900 transition-colors" href="#trial">Trial</a>
</div>
<div className="flex items-center">
<a className="bg-orange-900 text-white px-4 py-2 rounded-full text-xs font-medium hover:bg-orange-800 transition-all flex items-center gap-2" href="#trial">
                    Request Trial
                </a>
</div>
</div>
</nav>

<main className="md:pt-48 md:pb-32 md:px-12 max-w-6xl mr-auto ml-auto pt-32 pr-6 pb-20 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="flex flex-col gap-6 max-w-xl animate-enter">
<div className="inline-flex gap-2 bg-orange-200/50 w-fit border-orange-200 border rounded-full pt-1 pr-3 pb-1 pl-3 gap-x-2 gap-y-2 items-center">
<span className="w-2 h-2 rounded-full bg-amber-500"></span>
<span className="text-xs font-medium text-orange-600 tracking-wide">Next Gen Tagging</span>
</div>
<h1 className="md:text-6xl lg:text-7xl leading-tight text-5xl font-semibold text-orange-900 tracking-tight">
                    Find any parcel. <br/>
<span className="text-orange-400">Instantly.</span>
</h1>
<p className="leading-relaxed animate-enter delay-100 text-lg text-orange-500">
                    Forget the old days where one need to put parcel in dedicated box and find them one by one. Now with a tap, you can identify the location of your parcel at any corner of your storage.
                </p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 animate-enter delay-200">
<a className="bg-orange-900 text-white text-sm px-6 py-3 rounded-full font-medium hover:bg-orange-800 transition-all flex items-center justify-center gap-2" href="#trial">
                        Start your trial
                        <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
<a className="hover:bg-orange-50 transition-all flex items-center justify-center gap-2 text-sm font-medium text-orange-900 bg-white border-orange-200 border rounded-full pt-3 pr-6 pb-3 pl-6" href="#how-it-works">
                        See how it works
                    </a>
</div>
</div>

<div className="animate-enter delay-300 bg-orange-100/50 w-full border-orange-200 border rounded-3xl relative flex items-center justify-center p-8 lg:p-12">
<img alt="Easycube TAG Product" className="z-10 w-full h-auto object-contain rounded-3xl relative scale-125" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/898c5e27-6469-4fc5-b8d3-88844a7d694f_1600w.png"/>
<div className="flex flex-col z-0 text-orange-400/50 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<iconify-icon className="mb-2" icon="solar:gallery-add-linear" width="48"></iconify-icon>
</div>
</div>
</div>
</main>

<section className="max-w-6xl mx-auto px-6 md:px-12 pb-24 animate-enter delay-400">
<p className="md:text-left text-xs font-medium text-orange-400 tracking-wide text-center mb-8">Work with the existing app</p>
<div className="flex flex-wrap justify-center md:justify-start items-center gap-8 md:gap-16 opacity-50 grayscale">
<span className="text-xl font-semibold tracking-tight font-sans">Shopee</span>
<span className="text-xl font-semibold italic tracking-tight font-serif">Ninjavan</span>
<span className="text-xl font-semibold tracking-tight font-mono">J&amp;T Express</span>
</div>
</section>

<section className="md:py-32 bg-white border-orange-200 border-t pt-24 pb-24" id="how-it-works">
<div className="md:px-12 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="mb-16 text-center">
<h2 className="text-3xl md:text-4xl lg:text-5xl font-semibold tracking-tight text-orange-900">
                    Drop it anywhere. <br/>
<span className="text-orange-400">Find it instantly.</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">

<div className="flex flex-col gap-6 p-8 bg-orange-50 border-orange-100 border rounded-3xl relative items-start hover:border-orange-300 transition-colors">
<div className="w-14 h-14 shrink-0 bg-white border border-orange-200 rounded-2xl flex items-center justify-center shadow-sm text-orange-900">
<iconify-icon icon="solar:tag-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold text-orange-900 tracking-tight mb-2">1. Reusable Tag</h3>
<p className="leading-relaxed text-sm text-orange-500">Each tag come with clip and pin on the back to allow you to put it on any parcel. Reusable after each task.</p>
</div>
</div>

<div className="flex flex-col gap-6 bg-orange-50 p-8 rounded-3xl border border-orange-100 relative items-start hover:border-orange-300 transition-colors">
<div className="w-14 h-14 shrink-0 bg-white border border-orange-200 rounded-2xl flex items-center justify-center shadow-sm text-orange-900">
<iconify-icon icon="solar:layers-minimalistic-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold text-orange-900 tracking-tight mb-2">2. App that run on background</h3>
<p className="leading-relaxed text-sm text-orange-500">Our app run on the background of different logistic company interface. So you don't need to deal with more workload</p>
</div>
</div>

<div className="flex flex-col gap-6 bg-orange-50 p-8 rounded-3xl border border-orange-100 relative items-start hover:border-orange-300 transition-colors">
<div className="w-14 h-14 shrink-0 bg-white border border-orange-200 rounded-2xl flex items-center justify-center shadow-sm text-orange-900">
<iconify-icon className="" icon="solar:target-linear" width="24"></iconify-icon>
</div>
<div className="">
<h3 className="text-lg font-semibold text-orange-900 tracking-tight mb-2">3. Locate parcel in &lt;5s</h3>
<p className="leading-relaxed text-sm text-orange-500">No more digging through piles of parcel, just tap and head over to the parcel with blinking LED.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-zinc-950 pt-24 pb-24" id="workflows">
<div className="md:px-12 flex flex-col md:flex-row md:items-end max-w-6xl mr-auto mb-12 ml-auto pr-6 pl-6 gap-x-6 gap-y-6 justify-between">
<div className="gap-x-6 gap-y-6">
<h2 className="md:text-4xl text-3xl font-semibold text-white tracking-tight mb-2" id="workflow-title">
                    Inbound Workflow
                </h2>
<p className="text-sm text-zinc-400 max-w-md" id="workflow-desc">Seamlessly assign tags to arriving parcels and place them anywhere.</p>
</div>
<div className="flex gap-2">
<button className="flex transition-colors hover:bg-zinc-800 hover:text-white text-zinc-300 w-10 h-10 border-zinc-800 border rounded-full items-center justify-center" onclick="toggleWorkflow()">
<iconify-icon className="" height="20" icon="solar:arrow-left-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
<button className="flex transition-colors hover:bg-zinc-800 hover:text-white text-zinc-300 w-10 h-10 border-zinc-800 border rounded-full items-center justify-center" onclick="toggleWorkflow()">
<iconify-icon className="" height="20" icon="solar:arrow-right-linear" style={{color: 'rgb(255, 255, 255)'}} width="20"></iconify-icon>
</button>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 md:px-12 relative min-h-[600px]">

<div className="flex overflow-x-auto scrollbar-hide snap-x snap-mandatory md:justify-center transition-opacity duration-300 ease-in-out opacity-100 pb-8 gap-x-6 gap-y-6" id="workflow-inbound">

<div className="flex-shrink-0 w-[280px] h-[580px] rounded-[2.5rem] p-3 border-4 border-zinc-800 snap-center relative bg-zinc-900 shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Inbound Step 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ed5be2bb-d01d-406f-8a82-411c4fec527e_800w.png"/>
</div>
</div>

<div className="flex-shrink-0 snap-center bg-zinc-900 w-[280px] h-[580px] border-zinc-800 border-4 rounded-[2.5rem] pt-3 pr-3 pb-3 pl-3 relative shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Inbound Step 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/512cba01-cc83-40b3-8a5d-e926afe3026b_800w.png"/>
</div>
</div>

<div className="flex-shrink-0 w-[280px] h-[580px] rounded-[2.5rem] p-3 border-4 border-zinc-800 snap-center relative bg-zinc-900 shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Inbound Step 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/352f1ecc-b3ce-49a9-9d13-8ce6c8dcbfb3_800w.png"/>
</div>
</div>
</div>

<div className="hidden absolute top-0 left-6 md:left-12 right-6 md:right-12 flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory md:justify-center transition-opacity duration-300 ease-in-out opacity-0" id="workflow-outbound">

<div className="flex-shrink-0 w-[280px] h-[580px] rounded-[2.5rem] p-3 border-4 border-zinc-800 snap-center relative bg-zinc-900 shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Outbound Step 1" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/de0f640a-61f1-46e7-ab87-461d0d9005b3_1600w.png"/>
</div>
</div>

<div className="flex-shrink-0 w-[280px] h-[580px] rounded-[2.5rem] p-3 border-4 border-zinc-800 snap-center relative bg-zinc-900 shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Outbound Step 2" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/6928484e-9e49-453c-b581-f48678a3ef68_1600w.png"/>
</div>
</div>

<div className="flex-shrink-0 w-[280px] h-[580px] rounded-[2.5rem] p-3 border-4 border-zinc-800 snap-center relative bg-zinc-900 shadow-2xl">
<div className="w-full h-full rounded-[2rem] overflow-hidden relative bg-zinc-800">
<img alt="Outbound Step 3" className="w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/d6211608-d2bd-4e01-89b2-50bebd91d134_1600w.png"/>
</div>
</div>
</div>
</div>
</section>

<section className="bg-zinc-50 border-orange-200 border-t pt-24 pb-24">
<div className="max-w-6xl mx-auto px-6 md:px-12">
<div className="text-center mb-16">
<h2 className="text-2xl md:text-3xl font-semibold tracking-tight text-orange-900">
                    The Easycube Workflow
                </h2>
<p className="text-sm text-orange-500 mt-3">Simple process to optimize your parcel management. Our app run on the background for a seamless experience</p>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-6 md:gap-8 relative">

<div className="hidden md:block absolute top-[45%] left-12 right-12 h-[2px] bg-orange-200 z-0"></div>

<div className="w-full md:w-1/3 flex flex-col items-center relative z-10">
<div className="w-full bg-white border border-orange-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center hover:border-orange-300 transition-colors">
<div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-900 mb-6 border border-orange-100">
<iconify-icon icon="solar:scanner-linear" width="24"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-orange-900 mb-2">1. Scan &amp; Assign</h4>
<p className="leading-relaxed text-xs text-orange-500">Receive the parcel as per normal, upon confirmation, tap on Easycube widget and extract information. Assign it to a tag and just clip it to the parcel</p>
</div>
</div>

<div className="md:hidden flex items-center justify-center text-orange-300 py-2">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="w-full md:w-1/3 flex flex-col items-center relative z-10">
<div className="w-full bg-white border border-orange-200 p-8 rounded-[2rem] shadow-sm flex flex-col items-center text-center hover:border-orange-300 transition-colors">
<div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-900 mb-6 border border-orange-100">
<iconify-icon className="" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-orange-900 mb-2">2. Place anywhere</h4>
<p className="leading-relaxed text-xs text-orange-500">No need for dedicated bins or alphabetized shelves. Place the parcel in any available space. Now you can store more parcel</p>
</div>
</div>

<div className="md:hidden flex items-center justify-center text-orange-300 py-2">
<iconify-icon icon="solar:arrow-down-linear" width="24"></iconify-icon>
</div>

<div className="w-full md:w-1/3 flex flex-col items-center relative z-10">
<div className="flex flex-col hover:border-orange-300 transition-colors text-center bg-white w-full border-orange-200 border rounded-[2rem] pt-8 pr-8 pb-8 pl-8 shadow-sm items-center">
<div className="w-12 h-12 bg-orange-50 rounded-2xl flex items-center justify-center text-orange-900 mb-6 border border-orange-100">
<iconify-icon icon="solar:lightbulb-minimalistic-linear" width="24"></iconify-icon>
</div>
<h4 className="text-base font-semibold text-orange-900 mb-2">3. Trigger &amp; Locate</h4>
<p className="leading-relaxed text-xs text-orange-500">When a customer arrives, enter the pin and tap on the parcel ID. The ID will automatically copied to our widget. Once confimed, the tag lights up instantly. Remove the tag and hand it over to the customer</p>
</div>
</div>
</div>
</div>
</section>

<section className="md:py-32 md:px-12 bg-white max-w-6xl border-orange-200 border-t mr-auto ml-auto pt-24 pr-6 pb-24 pl-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-orange-50 rounded-3xl p-8 md:p-12 border border-orange-100">
<h3 className="text-xl font-medium text-orange-500 mb-8 flex items-center gap-3 tracking-tight">
                    The Old Way
                </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-orange-500">
<iconify-icon className="mt-0.5 text-orange-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="">Searching through dozens of similar boxes</span>
</li>
<li className="flex items-start gap-3 text-sm text-orange-500">
<iconify-icon className="mt-0.5 text-orange-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="">Maintaining complex bin numbering systems</span>
</li>
<li className="flex items-start gap-3 text-sm text-orange-500">
<iconify-icon className="mt-0.5 text-orange-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="">Customers waiting while staff hunt for packages</span>
</li>
<li className="flex items-start gap-3 text-sm text-orange-500">
<iconify-icon className="mt-0.5 text-orange-400" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span className="">Unable to increase capacity without increase in manpower</span>
</li>
</ul>
</div>

<div className="bg-white rounded-3xl p-8 md:p-12 shadow-xl shadow-orange-200/40 border border-orange-200 relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-1 bg-orange-900"></div>
<h3 className="text-xl font-semibold text-orange-900 mb-8 flex items-center gap-3 tracking-tight">
<iconify-icon className="text-amber-500" icon="solar:check-circle-linear" width="24"></iconify-icon>
                    With Easycube TAG
                </h3>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-sm text-orange-900 font-medium">
<iconify-icon className="mt-0.5 text-orange-900" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="">Smart device that integrate with your current workflow</span>
</li>
<li className="flex gap-3 text-sm font-medium text-orange-900 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-0.5 text-orange-900" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="">Place anywhere</span>
</li>
<li className="flex gap-3 text-sm font-medium text-orange-900 gap-x-3 gap-y-3 items-start">
<iconify-icon className="mt-0.5 text-orange-900" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="">Find your parcel in &lt;5s</span>
</li>
<li className="flex items-start gap-3 text-sm text-orange-900 font-medium">
<iconify-icon className="mt-0.5 text-orange-900" icon="solar:check-read-linear" width="20"></iconify-icon>
<span className="">Tag are reusable and easy to use</span>
</li>
</ul>
</div>
</div>
</section>

<section className="bg-white border-orange-200 border-t pt-24 pb-24" id="trial">
<div className="md:px-12 max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="bg-orange-50 rounded-[2.5rem] border border-orange-200 overflow-hidden">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="md:p-16 flex flex-col lg:border-b-0 lg:border-r bg-white border-orange-200 border-b pt-10 pr-10 pb-10 pl-10 justify-center">
<div className="w-12 h-12 bg-orange-100 text-orange-900 rounded-xl flex items-center justify-center mb-8 border border-orange-200">
<iconify-icon className="" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h2 className="md:text-4xl leading-tight text-3xl font-semibold text-orange-900 tracking-tight mb-4">Join our Pilot Program</h2>
<p className="leading-relaxed text-sm text-orange-500 max-w-sm mb-8">Be our first pilot program users where you will get to build this product with us and receive the early-bird pricing after the trial</p>
<div className="space-y-4">
<div className="flex gap-3 text-sm text-orange-600 gap-x-3 gap-y-3 items-center">Completely Free</div>
<div className="flex text-sm text-orange-600 gap-x-3 gap-y-3 items-center">30-day Trial and early early bird
                                discount</div>
</div>
</div>

<div className="p-10 md:p-16 bg-orange-50">
<form action="https://formsubmit.co/vincentsiowyongren@easycubesg.com" className="flex flex-col gap-5" method="POST">
<input name="_subject" type="hidden" value="New Trial Request - Easycube TAG"/>
<div className="grid grid-cols-1 md:grid-cols-2 gap-5">
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-orange-700">Client Name</label>
<input className="placeholder-orange-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors text-sm text-orange-900 bg-white w-full border-orange-200 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" name="Client_Name" placeholder="Victor Lee" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-orange-700">Email Address</label>
<input className="placeholder-orange-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors text-sm text-orange-900 bg-white w-full border-orange-200 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" name="Email_Address" placeholder="victorlee@gmail.com" required="" type="email"/>
</div>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-orange-700">Parcel Station Address</label>
<input className="placeholder-orange-400 focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors text-sm text-orange-900 bg-white w-full border-orange-200 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" name="Station_Address" placeholder="123 Punggol Ave, S840123" required="" type="text"/>
</div>
<div className="flex flex-col gap-1.5">
<label className="text-xs font-medium text-orange-700">Parcels received per day</label>
<div className="relative">
<select className="focus:outline-none focus:border-orange-400 focus:ring-1 focus:ring-orange-400 transition-colors cursor-pointer text-sm text-orange-900 bg-white w-full border-orange-200 border rounded-lg pt-2.5 pr-4 pb-2.5 pl-4" name="Parcels_Per_Day" required="">
<option disabled="" selected="" value="">Select volume range</option>
<option value="0-50">0 - 50</option>
<option value="50-100">50 - 100</option>
<option value="100-150">100 - 150</option>
<option value="150-200">150 - 200</option>
<option value="200-250">200 - 250</option>
<option value="250-300">250 - 300</option>
<option value="300-350">300 - 350</option>
<option value="350-400">350 - 400</option>
<option value="400-450">400 - 450</option>
<option value="450-500">450 - 500</option>
<option value="500+">500+</option>
</select>
<div className="absolute inset-y-0 right-4 flex items-center pointer-events-none text-orange-400">
<iconify-icon icon="solar:alt-arrow-down-linear" width="16"></iconify-icon>
</div>
</div>
</div>
<button className="hover:bg-orange-800 transition-colors flex gap-2 text-sm font-medium text-white bg-orange-900 w-full rounded-lg mt-4 pt-3 pb-3 gap-x-2 gap-y-2 items-center justify-center" type="submit">Sign Up</button>
<p className="text-xs text-orange-400 text-center mt-2">No credit card required for trial.</p>
</form>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-white border-t border-orange-200 py-12 px-6 md:px-12">
<div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<img alt="Easycube Logo" className="fallback-logo w-auto h-6 object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/c0f44c9b-3ffa-4ce9-b5d2-796c421d65de_320w.png"/>
<span className="font-medium text-sm tracking-tight text-orange-900">Easycube TAG</span>
</div>
<div className="flex items-center gap-6">
<a className="text-xs text-orange-500 hover:text-orange-900 transition-colors" href="#how-it-works">How it works</a>
<a className="text-xs text-orange-500 hover:text-orange-900 transition-colors" href="#trial">Trial</a>
</div>
<div className="text-xs text-orange-400">© 2026 Easycube. All rights reserved.</div>
</div>
</footer>



    </>
  );
}
