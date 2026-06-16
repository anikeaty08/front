import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
lucide.createIcons()

// chart
new Chart(document.getElementById('portfolioChart'),{
  type:'doughnut',
  data:{labels:['BTC','ETH','SOL','Others'],datasets:[{data:[45,25,15,15],backgroundColor:['#06b6d4','#a855f7','#f43f5e','#14b8a6'],borderWidth:0}]},
  options:{plugins:{legend:{display:false}},cutout:'70%'}
})

// pricing toggle
document.getElementById('priceToggle').addEventListener('change',e=>{
  document.querySelectorAll('.price').forEach(el=>{
    const mo=el.dataset.month,yr=el.dataset.year
    el.textContent=e.target.checked?`$${yr}`:`$${mo}`
  })
})

// faq accordion
document.querySelectorAll('.faq-toggle').forEach(btn=>{
  btn.addEventListener('click',()=>{
    const content=btn.nextElementSibling
    content.classList.toggle('hidden')
    btn.querySelector('i').classList.toggle('rotate-180')
  })
})

// year
document.getElementById('year').textContent=new Date().getFullYear()

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      <div className="spline-container fixed top-0 w-full h-screen -z-10"><iframe frameborder="0" height="100%" src="https://my.spline.design/unchained-d3hHCgdWho7a8ATGzKtB11TU" width="100%"></iframe></div>

<header className="fixed inset-x-0 top-5 z-50 flex justify-center px-4 fade">
<nav className="glass flex w-full max-w-5xl fixed top-5 z-50 backdrop-blur-[18px] bg-white/5 border-white/20 border rounded-full pt-3 pr-6 pb-3 pl-6 shadow-lg items-center justify-between" style={{backdropFilter: 'saturate(180%) blur(18px)'}}>

<a className="flex items-center gap-2" href="#">
<span className="select-none text-lg font-semibold tracking-tight">Cryptex</span>
</a>

<ul className="hidden md:flex items-center gap-6 text-sm font-medium">
<li className=""><a className="relative px-4 py-2 rounded-full text-white transition-colors duration-300 hover:bg-blue-600 hover:text-white" href="#about" style={{}}>About Us</a></li>
<li className=""><a className="relative px-4 py-2 rounded-full text-white transition-colors duration-300 hover:bg-blue-600 hover:text-white" href="#features" style={{}}>Features</a></li>
<li className=""><a className="relative px-4 py-2 rounded-full text-white transition-colors duration-300 hover:bg-blue-600 hover:text-white" href="#pricing" style={{}}>Pricing</a></li>
<li className=""><a className="relative px-4 py-2 rounded-full text-white transition-colors duration-300 hover:bg-blue-600 hover:text-white" href="#faq" style={{}}>FAQ</a></li>
</ul>

<a className="relative inline-flex items-center rounded-full px-6 py-2 text-sm font-medium text-white transition group" href="#contact" style={{}}>
<span className="relative z-10">Contact Sales</span>
<span aria-hidden="true" className="absolute inset-0 rounded-full bg-gradient-to-tr from-cyan-400 to-purple-600 opacity-0 transition-opacity duration-300 group-hover:opacity-100 filter blur-lg" style={{}}></span>
<span aria-hidden="true" className="absolute inset-0 bg-clip-border bg-gradient-to-tr from-[#1005a3] to-[#cba5ee] border-transparent border-2 rounded-full" style={{}}></span>
</a>
</nav>
</header><section className="relative pt-44 pb-32"><div className="absolute inset-0 -z-10 bg-transparent"></div><div className="mx-auto max-w-4xl text-center px-6">
<h1 className="md:text-6xl lg:text-7xl bg-clip-text fade text-4xl font-semibold text-transparent tracking-tight bg-gradient-to-tl from-blue-700 via-blue-800 to-[#ffffff]" style={{animationDelay: '0.1s'}}>Navigate the Future of Finance with Cryptex</h1>
<p className="md:text-2xl fade text-lg text-slate-50 mt-6" style={{animationDelay: '0.25s'}}>The all-in-one platform for secure, decentralized asset management and smart contract execution.</p>
<a className="inline-block transition fade hover:shadow-blue-500/30 text-base font-medium rounded-full mt-10 pt-4 pr-8 pb-4 pl-8 shadow-lg bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900" href="#" style={{animationDelay: '0.4s'}}>Get Started for Free</a>

<div className="flex fade mt-16 justify-center" style={{animationDelay: '.55s'}}>
<div className="glass rounded-3xl p-1">
<img alt="Cryptex dashboard" className="w-[700px] max-w-full rounded-3xl shadow-2xl" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
</div>
</div>
</div></section>


<section className="border-y overflow-hidden border-white/10 pt-3 pb-3">
<div className="flex gap-14 ticker">
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="font-semibold">BTC</span>
<span className="">$43,250.00</span>
<span className="text-green-400 text-xs" style={{}}>+2.5%</span>
</div>
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5" src="https://images.unsplash.com/photo-1635151227785-429f420c6b9d?w=1080&amp;q=80"/>
<span className="font-semibold">ETH</span>
<span className="">$2,680.00</span>
<span className="text-green-400 text-xs" style={{}}>+3.2%</span>
</div>
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5" src="https://images.unsplash.com/photo-1621619856624-42fd193a0661?w=1080&amp;q=80"/>
<span className="font-semibold">SOL</span>
<span className="">$98.50</span>
<span className="text-red-400 text-xs" style={{}}>-1.8%</span>
</div>
<div className="flex items-center gap-2">
<img alt="" className="h-5 w-5" src="https://images.unsplash.com/photo-1642615835477-d303d7dc9ee9?w=1080&amp;q=80"/>
<span className="font-semibold">BNB</span>
<span className="">$315.20</span>
<span className="text-green-400 text-xs" style={{}}>+1.9%</span>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="about">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">
<div className="glass rounded-3xl p-10 flex flex-col justify-between">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">About Cryptex</h2>
<p className="text-lg text-slate-300" style={{}}>We are a team of innovators dedicated to making the decentralized web accessible and secure for everyone. Cryptex is built on the principles of transparency, user-empowerment, and cutting-edge technology.</p>
</div>
<a className="mt-8 inline-block self-start rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900" href="#" style={{}}>View Our Services</a>
</div>
<div className="flex flex-col gap-8">
<div className="glass rounded-3xl p-8 flex-1">
<div className="flex items-center gap-4 mb-4">
<div className="h-12 w-12 rounded-full flex items-center justify-center bg-gradient-to-bl from-blue-400 to-purple-500" style={{}}>
<svg className="lucide lucide-rocket h-6 w-6" data-lucide="rocket" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<h3 className="text-xl font-semibold">Our Mission</h3>
</div>
<p className="text-slate-300" style={{}}>To empower users with institutional-grade tools for personal finance.</p>
</div>
<div className="glass rounded-3xl p-8 flex-1">
<div className="flex items-center gap-4 mb-4">
<div className="h-12 w-12 rounded-full bg-gradient-to-r from-purple-500 to-pink-500 flex items-center justify-center" style={{}}>
<svg className="w-[24px] h-[24px]" data-lucide="galaxy" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '24px', height: '24px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.062 12.348a1 1 0 0 1 0-.696 10.75 10.75 0 0 1 19.876 0 1 1 0 0 1 0 .696 10.75 10.75 0 0 1-19.876 0"></path><circle cx="12" cy="12" r="3"></circle></svg>
</div>
<h3 className="text-xl font-semibold">Our Vision</h3>
</div>
<p className="text-slate-300" style={{}}>To build the foundational layer for the next generation of digital economies.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="features">
<div className="max-w-6xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">A New Standard for Digital Assets</h2>
<div className="mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-8">

<div className="glass rounded-3xl p-8 border transition border-blue-400/20 hover:border-blue-400/40" style={{}}>
<div className="h-14 w-14 rounded-full bg-gradient-to-r flex items-center justify-center mb-6 to-blue-500 from-blue-400" style={{}}>
<svg className="lucide lucide-shield w-7 h-7" data-lucide="shield" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 13c0 5-3.5 7.5-7.66 8.95a1 1 0 0 1-.67-.01C7.5 20.5 4 18 4 13V6a1 1 0 0 1 1-1c2 0 4.5-1.2 6.24-2.72a1.17 1.17 0 0 1 1.52 0C14.51 3.81 17 5 19 5a1 1 0 0 1 1 1z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Secure Data Storage</h3>
<p className="text-sm text-slate-300" style={{}}>Your data is yours. Encrypted and stored on a decentralized network, safe from central points of failure.</p>
</div>

<div className="glass rounded-3xl p-8 border border-fuchsia-400/20 hover:border-fuchsia-400/40 transition" style={{}}>
<div className="h-14 w-14 rounded-full bg-gradient-to-r from-fuchsia-500 to-purple-500 flex items-center justify-center mb-6" style={{}}>
<svg className="lucide lucide-file-cog w-7 h-7" data-lucide="file-cog" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v4a2 2 0 0 0 2 2h4"></path><path d="m2.305 15.53.923-.382"></path><path d="m3.228 12.852-.924-.383"></path><path d="M4.677 21.5a2 2 0 0 0 1.313.5H18a2 2 0 0 0 2-2V7l-5-5H6a2 2 0 0 0-2 2v2.5"></path><path d="m4.852 11.228-.383-.923"></path><path d="m4.852 16.772-.383.924"></path><path d="m7.148 11.228.383-.923"></path><path d="m7.53 17.696-.382-.924"></path><path d="m8.772 12.852.923-.383"></path><path d="m8.772 15.148.923.383"></path><circle cx="6" cy="14" r="3"></circle></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Smart Contracts</h3>
<p className="text-sm text-slate-300" style={{}}>Automate agreements and transactions with self-executing contracts, ensuring trust and efficiency.</p>
</div>

<div className="glass rounded-3xl p-8 border border-orange-400/20 hover:border-orange-400/40 transition" style={{}}>
<div className="h-14 w-14 rounded-full bg-gradient-to-r from-yellow-400 to-orange-500 flex items-center justify-center mb-6" style={{}}>
<svg className="lucide lucide-zap w-7 h-7" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Fast Transactions</h3>
<p className="text-sm text-slate-300" style={{}}>Experience near-instant settlement times with our optimized, high-throughput blockchain infrastructure.</p>
</div>

<div className="glass rounded-3xl p-8 border border-teal-400/20 hover:border-teal-400/40 transition" style={{}}>
<div className="h-14 w-14 rounded-full bg-gradient-to-r from-teal-400 to-emerald-500 flex items-center justify-center mb-6" style={{}}>
<svg className="lucide lucide-diamond w-7 h-7" data-lucide="diamond" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.7 10.3a2.41 2.41 0 0 0 0 3.41l7.59 7.59a2.41 2.41 0 0 0 3.41 0l7.59-7.59a2.41 2.41 0 0 0 0-3.41l-7.59-7.59a2.41 2.41 0 0 0-3.41 0Z"></path></svg>
</div>
<h3 className="text-lg font-semibold mb-2">Asset Tokenization</h3>
<p className="text-sm text-slate-300" style={{}}>Convert assets into tradable tokens, unlocking new liquidity and investment opportunities.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight">Our Key Features</h2>
<p className="mt-4 max-w-md text-slate-300" style={{}}>Explore the core features that make our platform stand out. Each element is designed to enhance your experience and streamline your operations.</p>
<div className="mt-10 space-y-6">
<div className="glass rounded-2xl p-5">
<h3 className="font-semibold mb-1">Advanced Portfolio Management</h3>
<p className="text-sm text-slate-300" style={{}}>Track, analyze, and optimize your crypto portfolio with real-time insights and AI-powered recommendations.</p>
</div>
<div className="glass rounded-2xl p-5">
<h3 className="font-semibold mb-1">DeFi Integration</h3>
<p className="text-sm text-slate-300" style={{}}>Access leading DeFi protocols directly from our platform for yield farming, liquidity provision, and more.</p>
</div>
<div className="glass rounded-2xl p-5">
<h3 className="font-semibold mb-1">Institutional Security</h3>
<p className="text-sm text-slate-300" style={{}}>Multi-signature wallets, cold storage, and advanced encryption protect your digital assets.</p>
</div>
</div>
</div>
<div className="glass rounded-3xl p-6">
<div className="">
<canvas className="" height="367" id="portfolioChart" style={{display: 'block', boxSizing: 'border-box', height: '490px', width: '490px'}} width="367"></canvas>
</div>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="pricing">
<div className="max-w-6xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Find the Perfect Plan</h2>

<div className="mt-10 flex justify-center items-center gap-4">
<span className="text-gray-400 text-sm" style={{}}>Monthly</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" id="priceToggle" type="checkbox"/>
<div className="w-14 h-8 glass rounded-full peer peer-checked:bg-gradient-to-r peer-checked:to-fuchsia-500 transition peer-checked:from-blue-400" style={{}}></div>
<span className="absolute left-1 top-1 w-6 h-6 rounded-full bg-white transition peer-checked:translate-x-6"></span>
</label>
<span className="text-sm">Annual <span className="text-green-400" style={{}}>(Save 20%)</span></span>
</div>
<div className="mt-16 grid md:grid-cols-3 gap-8">

<div className="glass flex flex-col rounded-3xl pt-8 pr-8 pb-8 pl-8">
<h3 className="text-xl font-semibold mb-2">Mini</h3>
<p className="text-3xl font-semibold"><span className="price" data-month="9" data-year="86">$9</span><span className="text-base" style={{}}>/mo</span></p>
<ul className="mt-6 space-y-3 text-sm flex-1 text-slate-300" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Basic portfolio tracking</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>5 wallet connections</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-[16px] h-[16px]" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(74, 222, 128)'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Email support</li><li className="flex gap-2 items-center"><svg className="lucide lucide-check w-[16px] h-[16px] text-red-700" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>DeFi intergration</li>
</ul>
<a className="mt-8 rounded-full bg-white/10 px-5 py-3 text-center text-sm font-medium hover:bg-white/20" href="#">Get Started</a>
</div>

<div className="glass rounded-3xl p-8 border border-fuchsia-500 relative flex flex-col" style={{}}>
<span className="absolute -top-3 left-1/2 -translate-x-1/2 text-xs px-4 py-1 rounded-full bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900" style={{}}>Most Popular</span>
<h3 className="text-xl font-semibold mb-2">Pro</h3>
<p className="text-3xl font-semibold"><span className="price" data-month="29" data-year="278">$29</span><span className="text-base" style={{}}>/mo</span></p>
<ul className="flex-1 text-sm text-slate-300 mt-6 space-y-3" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Advanced analytics</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Unlimited wallets</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>DeFi integration</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Priority support</li><li className="flex gap-2 items-center"><svg className="lucide lucide-check w-[16px] h-[16px] text-rose-800" data-lucide="check" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px'}} viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SLA guarantee</li>
</ul>
<a className="mt-8 rounded-full px-5 py-3 text-center text-sm font-medium bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900" href="#" style={{}}>Get Started</a>
</div>

<div className="glass rounded-3xl p-8 flex flex-col">
<h3 className="text-xl font-semibold mb-2">Enterprise</h3>
<p className="text-3xl font-semibold">$58</p>
<ul className="mt-6 space-y-3 text-sm flex-1 text-slate-300" style={{}}>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Custom integrations</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Dedicated support</li>
<li className="flex items-center gap-2"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>Advanced security</li>
<li className="flex gap-2 items-center"><svg className="lucide lucide-check w-4 h-4 text-green-400" data-lucide="check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 6 9 17l-5-5"></path></svg>SLA guarantee</li>
</ul>
<a className="mt-8 rounded-full bg-white/10 px-5 py-3 text-center text-sm font-medium hover:bg-white/20" href="#">Contact Us</a>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="faq">
<div className="max-w-3xl mx-auto">
<h2 className="text-center text-3xl md:text-4xl font-semibold tracking-tight">Frequently Asked Questions</h2>
<div className="mt-12 space-y-4">

<div className="glass rounded-2xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left">
<span className="font-medium">What is Cryptex?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-6 pb-5 text-sm hidden text-slate-300" style={{}}>Cryptex is a comprehensive Web3 platform that provides secure tools for cryptocurrency trading, asset management, and interaction with decentralized applications (dApps).</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left">
<span className="font-medium">Is my data safe?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-6 pb-5 text-sm hidden text-slate-300" style={{}}>Absolutely. We utilize decentralized storage and state-of-the-art encryption. You hold the keys, meaning only you can access your assets and data.</div>
</div>

<div className="glass rounded-2xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left">
<span className="font-medium">What are the fees for transactions?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-6 pb-5 text-sm hidden text-slate-300" style={{}}>Transaction fees (gas fees) vary depending on network congestion. Our platform helps you estimate fees in real-time to find the best rates.</div>
</div>
<div className="glass rounded-2xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left">
<span className="font-medium">Can I connect my existing crypto wallet?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-6 pb-5 text-sm hidden text-slate-300" style={{}}>Yes, Cryptex is compatible with most major Web3 wallets, including MetaMask, Trust Wallet, and Ledger, allowing for seamless integration.</div>
</div>
<div className="glass rounded-2xl overflow-hidden">
<button className="faq-toggle w-full flex items-center justify-between px-6 py-5 text-left">
<span className="font-medium">What is asset tokenization?</span>
<svg className="lucide lucide-chevron-down w-5 h-5" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="faq-content px-6 pb-5 text-sm hidden text-slate-300" style={{}}>It's the process of converting rights to an asset into a digital token on a blockchain. This allows for fractional ownership and easier trading of assets like real estate, art, or company equity.</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6" id="contact">
<div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-8">

<div className="glass rounded-3xl p-10">
<h2 className="text-2xl font-semibold tracking-tight mb-6">Get in Touch</h2>
<form className="space-y-6">
<div className="">
<label className="block text-sm mb-1">Name</label>
<input className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" style={{}} type="text"/>
</div>
<div className="">
<label className="block text-sm mb-1">Email</label>
<input className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" style={{}} type="email"/>
</div>
<div>
<label className="block text-sm mb-1">Message</label>
<textarea className="w-full rounded-lg bg-white/5 px-4 py-3 text-sm placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400" rows="5" style={{}}></textarea>
</div>
<button className="rounded-full px-6 py-3 text-sm font-medium bg-gradient-to-tl from-blue-700 via-blue-800 to-gray-900" style={{}}>Submit</button>
</form>
</div>

<div className="flex flex-col gap-8">
<div className="glass rounded-3xl p-8 flex-1">
<h3 className="text-lg font-semibold mb-2">Contact Support</h3>
<p className="mb-4 text-sm text-slate-300" style={{}}>Need help? Our support team is here for you.</p>
<p className="text-sm mb-1 text-blue-400" style={{}}>support@cryptex.com</p>
<a className="text-sm hover:underline text-blue-400" href="#" style={{}}>Visit Help Center</a>
</div>
<div className="glass rounded-3xl p-8 flex-1">
<h3 className="text-lg font-semibold mb-4">Follow Us</h3>
<div className="flex gap-4">
<a className="h-10 w-10 rounded-full flex items-center justify-center hover:shadow-lg bg-gradient-to-bl from-blue-400 to-purple-500" href="#" style={{}}><svg className="lucide lucide-twitter w-5 h-5" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg></a>
<a className="h-10 w-10 rounded-full bg-gradient-to-r flex items-center justify-center hover:shadow-lg from-blue-500 to-blue-500" href="#" style={{}}><svg className="lucide lucide-message-circle w-5 h-5" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M7.9 20A9 9 0 1 0 4 16.1L2 22Z"></path></svg></a>
<a className="h-10 w-10 rounded-full bg-gradient-to-r from-fuchsia-500 to-pink-500 flex items-center justify-center hover:shadow-lg" href="#" style={{}}><svg className="lucide lucide-send w-5 h-5" data-lucide="send" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.536 21.686a.5.5 0 0 0 .937-.024l6.5-19a.496.496 0 0 0-.635-.635l-19 6.5a.5.5 0 0 0-.024.937l7.93 3.18a2 2 0 0 1 1.112 1.11z"></path><path d="m21.854 2.147-10.94 10.939"></path></svg></a>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 py-14 px-6">
<div className="max-w-6xl mx-auto grid md:grid-cols-4 gap-8 text-sm">
<div>
<a className="flex items-center gap-2 mb-4" href="#">
<div className="h-7 w-7 rounded-full flex items-center justify-center bg-gradient-to-bl from-blue-400 to-purple-500" style={{}}>
<svg className="lucide lucide-hexagon w-4 h-4" data-lucide="hexagon" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path></svg>
</div>
<span className="font-semibold">Cryptex</span>
</a>
<p className="text-gray-400" style={{}}>© <span id="year">2025</span> Cryptex. All rights reserved.</p>
</div>
<div>
<h4 className="font-semibold mb-3">Company</h4>
<ul className="space-y-2 text-gray-400" style={{}}>
<li><a className="hover:text-white" href="#" style={{}}>About</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Careers</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Blog</a></li>
<li><a className="hover:text-white" href="#" style={{}}>News</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3">Product</h4>
<ul className="space-y-2 text-gray-400" style={{}}>
<li><a className="hover:text-white" href="#" style={{}}>Features</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Pricing</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Security</a></li>
<li><a className="hover:text-white" href="#" style={{}}>API</a></li>
</ul>
</div>
<div>
<h4 className="font-semibold mb-3">Legal</h4>
<ul className="space-y-2 text-gray-400" style={{}}>
<li><a className="hover:text-white" href="#" style={{}}>Terms</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Privacy</a></li>
<li><a className="hover:text-white" href="#" style={{}}>Cookies</a></li>
</ul>
</div>
</div>
</footer>


    </>
  );
}
