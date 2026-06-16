import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



  (function () {
    const toggleBtn = document.getElementById('mobile-menu-toggle');
    const menu = document.getElementById('mobile-menu');
    const icon = toggleBtn.querySelector('iconify-icon');
    let isOpen = false;

    toggleBtn.addEventListener('click', () => {
      isOpen = !isOpen;
      if (isOpen) {
        menu.classList.remove('opacity-0', 'pointer-events-none');
        icon.setAttribute('icon', 'solar:close-circle-linear');
        document.body.style.overflow = 'hidden';
      } else {
        menu.classList.add('opacity-0', 'pointer-events-none');
        icon.setAttribute('icon', 'solar:hamburger-menu-linear');
        document.body.style.overflow = '';
      }
    });
  })();

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="md:px-12 animate-enter w-full pt-6 pr-6 pb-6 pl-6 relative z-[500]">
<div className="flex max-w-7xl mr-auto ml-auto relative items-center justify-between">

<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-[#0D0D0D] text-white rounded-full flex items-center justify-center">
<iconify-icon icon="solar:code-square-bold" width="20"></iconify-icon>
</div>
<span className="font-serif font-bold text-xl tracking-tight text-[#0D0D0D]">Lancers Technology</span>
</div>

<div className="hidden md:flex items-center gap-10">
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/services">Services</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/about">About</a>
<a className="text-sm font-medium text-gray-600 hover:text-black transition-colors" href="/stack">Tech Stack</a>
</div>

<div className="flex items-center gap-3 z-[501] relative">
<a className="flex items-center gap-2 bg-[#0D0D0D] text-white px-6 py-2.5 rounded-full text-sm font-medium hover:bg-gray-800 transition-all hover:pr-8 duration-300 group shadow-lg shadow-black/10" href="/contact">
        Start Project
        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>

<button aria-label="Toggle Menu" className="md:hidden text-2xl flex items-center justify-center w-8 h-8 ml-2" id="mobile-menu-toggle">
<iconify-icon icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>
</div>
</nav>

<div className="fixed inset-0 z-[300] flex flex-col justify-center items-center gap-8 bg-[#F3F1EB] opacity-0 pointer-events-none transition-opacity duration-300 md:hidden" id="mobile-menu">
<a className="text-4xl font-serif font-medium text-[#0D0D0D]" href="/services">Services</a>
<a className="text-4xl font-serif font-medium text-[#0D0D0D]" href="/about">About</a>
<a className="text-4xl font-serif font-medium text-[#0D0D0D]" href="/stack">Tech Stack</a>
</div>


<main className="max-w-7xl mx-auto px-6 md:px-12 py-12 lg:py-20">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">

<div className="flex flex-col gap-8 max-w-xl relative z-10">

<div className="animate-enter delay-100 flex items-center gap-4">
<div className="flex -space-x-3">
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F3F1EB]" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<img alt="User" className="w-10 h-10 rounded-full border-2 border-[#F3F1EB]" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?auto=format&amp;fit=crop&amp;w=64&amp;q=80"/>
<div className="w-10 h-10 rounded-full bg-[#0D0D0D] border-2 border-[#F3F1EB] flex items-center justify-center text-white text-xs font-medium">
                        +40
                    </div>
</div>
<span className="text-sm font-semibold text-gray-500 uppercase tracking-wider">Trusted by Innovators in Web3 &amp; AI</span>
</div>

<h1 className="animate-enter delay-200 text-6xl md:text-7xl lg:text-8xl font-semibold leading-[0.95] tracking-tight text-[#0D0D0D]">
                Future-proof <br/>
<span className="italic font-normal text-gray-600">solutions.</span>
</h1>

<p className="animate-enter delay-300 text-lg text-gray-600 leading-relaxed max-w-md">
                We combine blockchain security, AI intelligence, and scalable software to help enterprises build decentralized ecosystems and intelligent automation.
            </p>

<div className="animate-enter delay-400 flex flex-col sm:flex-row gap-4 items-start sm:items-center mt-2">
<button className="bg-[#0D0D0D] text-white text-base px-8 py-4 rounded-full font-medium hover:bg-gray-800 transition-all hover:scale-105 active:scale-95 flex items-center gap-3 shadow-xl shadow-gray-400/20">
                    Book a Strategy Call
                    <iconify-icon icon="solar:calendar-add-linear" width="20"></iconify-icon>
</button>
<button className="px-6 py-4 text-[#0D0D0D] font-medium hover:text-gray-600 flex items-center gap-2 transition-colors">
<iconify-icon icon="solar:play-circle-linear" width="24"></iconify-icon>
                    View Portfolio
                </button>
</div>
</div>

<div className="flex lg:justify-end animate-enter delay-300 relative justify-center h-[600px] items-center">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[140%] h-[140%] bg-gradient-to-tr from-blue-100/40 via-purple-100/30 to-transparent rounded-full blur-3xl pointer-events-none"></div>

<div className="relative w-[340px] h-[520px] animate-float z-20">

<div className="absolute top-8 -right-8 w-full h-full bg-[#E5E0D8] rounded-[2rem] transform rotate-6 border border-white/50"></div>

<div className="glass-card absolute inset-0 rounded-[2rem] shadow-2xl overflow-hidden flex flex-col p-6">

<div className="flex justify-between items-center mb-8">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-400/80"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400/80"></div>
<div className="w-3 h-3 rounded-full bg-green-400/80"></div>
</div>
<div className="text-xs font-mono text-gray-500">Lancers OS v2.0</div>
</div>

<div className="relative w-full h-40 bg-white/40 rounded-xl mb-6 p-4 overflow-hidden border border-white/60">
<div className="absolute bottom-0 left-0 right-0 h-24 bg-gradient-to-t from-indigo-500/10 to-transparent"></div>

<svg className="absolute bottom-0 left-0 w-full" preserveaspectratio="none" viewbox="0 0 100 25">
<path d="M0,25 L0,15 C20,10 40,20 60,12 C80,5 100,15 100,0 L100,25 Z" fill="rgba(99, 102, 241, 0.2)"></path>
<path d="M0,25 L0,20 C20,15 50,22 70,12 C85,5 100,10 100,5 L100,25 Z" fill="rgba(99, 102, 241, 0.4)"></path>
</svg>
<div className="relative z-10">
<div className="text-xs text-gray-500 mb-1">Total Value Locked</div>
<div className="text-2xl font-bold font-serif">$24,592.00</div>
</div>
</div>

<div className="glass-dark p-4 rounded-xl text-white mb-4 flex items-center gap-4 transform translate-x-2">
<div className="w-10 h-10 rounded-full bg-indigo-500 flex items-center justify-center">
<iconify-icon icon="solar:stars-minimalistic-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-400">AI Agent</div>
<div className="text-sm font-medium">Predictive Model Ready</div>
</div>
<iconify-icon className="ml-auto text-green-400" icon="solar:check-circle-bold"></iconify-icon>
</div>

<div className="bg-white/60 p-4 rounded-xl flex items-center gap-4 border border-white/60 transform -translate-x-2">
<div className="w-10 h-10 rounded-full bg-gray-900 text-white flex items-center justify-center">
<iconify-icon icon="solar:link-circle-bold" width="20"></iconify-icon>
</div>
<div>
<div className="text-xs text-gray-500">Smart Contract</div>
<div className="text-sm font-medium text-gray-900">Hash: 0x71...8A2</div>
</div>
<div className="ml-auto text-xs bg-green-100 text-green-700 px-2 py-1 rounded">Success</div>
</div>

<div className="absolute -bottom-6 -left-6 w-24 h-24 bg-gradient-to-tr from-blue-400 to-indigo-500 rounded-full blur-xl opacity-40"></div>
</div>
</div>
</div>
</div>
</main>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end gap-6 mb-16 animate-enter">
<h2 className="text-4xl md:text-5xl lg:text-6xl font-medium tracking-tight text-[#0D0D0D] leading-[0.95]">
            Our <span className="italic font-serif text-gray-600">Expertise</span>
</h2>
<a className="group flex items-center gap-2 text-sm font-medium text-[#0D0D0D] border-b border-black/20 pb-1 hover:border-black transition-colors" href="#">
            View all capabilities
            <iconify-icon className="group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" icon="solar:arrow-right-up-linear"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 animate-enter delay-100">

<div className="group bg-white p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 cursor-default shadow-sm hover:shadow-xl shadow-gray-200/50 border border-gray-100">
<div className="w-14 h-14 bg-[#F3F1EB] text-[#0D0D0D] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:box-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">Web3 Solutions</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-6">Building the decentralized future with secure smart contracts, DeFi protocols, tokenization, and DAO governance structures.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> Smart Contracts
                </li>
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> dApps &amp; DeFi
                </li>
</ul>
</div>

<div className="group bg-[#0D0D0D] p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 cursor-default shadow-xl shadow-gray-900/20 text-white relative overflow-hidden">

<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/20 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>
<div className="w-14 h-14 bg-white/10 text-white rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500 backdrop-blur-sm">
<iconify-icon icon="solar:stars-minimalistic-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4 relative z-10">Artificial Intelligence</h3>
<p className="text-gray-400 leading-relaxed text-sm mb-6 relative z-10">Deploying LLMs, autonomous agents, and predictive analytics to automate complex workflows and generate value.</p>
<ul className="space-y-2 relative z-10">
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> Generative AI
                </li>
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-500">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> RAG Solutions
                </li>
</ul>
</div>

<div className="group bg-white p-10 rounded-[2rem] hover:-translate-y-2 transition-transform duration-500 cursor-default shadow-sm hover:shadow-xl shadow-gray-200/50 border border-gray-100">
<div className="w-14 h-14 bg-[#F3F1EB] text-[#0D0D0D] rounded-2xl flex items-center justify-center mb-8 group-hover:scale-110 transition-transform duration-500">
<iconify-icon icon="solar:monitor-smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-[#0D0D0D] mb-4">Software Dev</h3>
<p className="text-gray-600 leading-relaxed text-sm mb-6">Enterprise-grade web applications and scalable cloud infrastructure designed for high performance and security.</p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> SaaS Platforms
                </li>
<li className="flex items-center gap-2 text-xs font-semibold uppercase tracking-wide text-gray-400">
<iconify-icon icon="solar:check-read-linear"></iconify-icon> Cloud Infra
                </li>
</ul>
</div>
</div>
</section>

<section className="w-full max-w-7xl mx-auto px-6 md:px-12 py-24 border-t border-gray-900/5">
<div className="flex flex-col items-center text-center mb-16 animate-enter">
<span className="bg-white border border-gray-200 text-[#0D0D0D] px-3 py-1.5 rounded-lg text-xs font-semibold uppercase tracking-wider mb-6 shadow-sm">Technical Arsenal</span>
<h2 className="text-4xl md:text-5xl font-medium tracking-tight text-[#0D0D0D] leading-[0.95] max-w-2xl">
            Powered by modern 
            <span className="italic font-serif text-gray-500">technology.</span>
</h2>
</div>

<div className="grid grid-cols-1 md:grid-cols-3 gap-12 animate-enter delay-100">

<div className="flex flex-col items-center">
<h4 className="text-lg font-serif italic text-gray-500 mb-6">Blockchain &amp; Web3</h4>
<div className="flex flex-wrap justify-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:solidity"></iconify-icon> Solidity
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:rust"></iconify-icon> Rust
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:ethereum"></iconify-icon> Ethereum
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:solana"></iconify-icon> Solana
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:hyperledger"></iconify-icon> Hyperledger
                </div>
</div>
</div>

<div className="flex flex-col items-center">
<h4 className="text-lg font-serif italic text-gray-500 mb-6">Artificial Intelligence</h4>
<div className="flex flex-wrap justify-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:python"></iconify-icon> Python
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:openai"></iconify-icon> OpenAI
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:tensorflow"></iconify-icon> TensorFlow
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:pytorch"></iconify-icon> PyTorch
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="solar:brain-linear"></iconify-icon> LangChain
                </div>
</div>
</div>

<div className="flex flex-col items-center">
<h4 className="text-lg font-serif italic text-gray-500 mb-6">Cloud &amp; Web</h4>
<div className="flex flex-wrap justify-center gap-3">
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:react"></iconify-icon> React
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:nextdotjs"></iconify-icon> Next.js
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:nodedotjs"></iconify-icon> Node.js
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:amazonaws"></iconify-icon> AWS
                </div>
<div className="flex items-center gap-2 px-4 py-2 bg-white rounded-full border border-gray-200 shadow-sm text-sm font-medium text-gray-700">
<iconify-icon className="text-gray-400" icon="simple-icons:docker"></iconify-icon> Docker
                </div>
</div>
</div>
</div>
</section>

<footer className="w-full max-w-7xl mx-auto px-6 md:px-12 pb-12 pt-24">
<div className="bg-[#0D0D0D] rounded-[2.5rem] p-12 md:p-20 text-center relative overflow-hidden mb-12">
<div className="relative z-10 flex flex-col items-center">
<h2 className="text-4xl md:text-6xl font-serif text-white mb-6">Ready to build the future?</h2>
<p className="text-gray-400 mb-10 max-w-lg">Let's discuss how we can leverage Web3 and AI to transform your business infrastructure.</p>
<button className="bg-white text-[#0D0D0D] px-8 py-4 rounded-full font-bold hover:bg-gray-200 transition-all hover:scale-105 active:scale-95 flex items-center gap-3">
                Start Project
                <iconify-icon icon="solar:arrow-right-linear" width="20"></iconify-icon>
</button>
</div>

<div className="absolute top-0 left-0 w-full h-full opacity-20 pointer-events-none">
<div className="absolute top-[-50%] left-[-20%] w-[80%] h-[80%] bg-indigo-900 rounded-full blur-[100px]"></div>
<div className="absolute bottom-[-50%] right-[-20%] w-[80%] h-[80%] bg-blue-900 rounded-full blur-[100px]"></div>
</div>
</div>

<div className="flex flex-col md:flex-row justify-between items-center gap-6 text-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 bg-[#0D0D0D] text-white rounded-lg flex items-center justify-center">
<iconify-icon icon="solar:code-square-bold" width="16"></iconify-icon>
</div>
<span className="font-serif font-bold text-lg text-[#0D0D0D]">Lancers</span>
</div>
<div className="flex gap-8 text-gray-600 font-medium">
<a className="hover:text-black" href="#">Home</a>
<a className="hover:text-black" href="#">Services</a>
<a className="hover:text-black" href="#">About</a>
<a className="hover:text-black" href="#">Contact</a>
</div>
<div className="text-gray-400">
            © 2025 Lancers Technology.
        </div>
</div>
</footer>

    </>
  );
}
