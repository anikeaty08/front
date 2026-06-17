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
      
tailwind.config = {
theme: {
extend: {}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateValues = [0, 2, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = { '--tw-rotate-x': `${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (value !== 0) rotateXUtilities[`.-rotate-x-${value}`] = { '--tw-rotate-x': `-${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
rotateYUtilities[`.rotate-y-${value}`] = { '--tw-rotate-y': `${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
if (value !== 0) rotateYUtilities[`.-rotate-y-${value}`] = { '--tw-rotate-y': `-${value}deg`, transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))` };
});
const perspectiveUtilities = { ".perspective-none": { perspective: "none" }, ".perspective-1000": { perspective: "1000px" } };
addUtilities({ ...rotateXUtilities, ...rotateYUtilities, ...perspectiveUtilities });
}
]
};



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



    const chatWindow = document.getElementById('ai-chat-window');
    const chatMessages = document.getElementById('chat-messages');
    const chatInput = document.getElementById('chat-input');
    const typingIndicator = document.getElementById('typing-indicator');
    let isLiveAgent = false;

    function toggleChat() {
        if (chatWindow.classList.contains('hidden')) {
            chatWindow.classList.remove('hidden');
            chatWindow.classList.add('flex', 'chat-message-enter');
            chatInput.focus();
        } else {
            chatWindow.classList.add('hidden');
            chatWindow.classList.remove('flex', 'chat-message-enter');
        }
    }

    function autoFill(text) {
        chatInput.value = text;
        chatInput.focus();
    }

    function handleChatSubmit(e) {
        e.preventDefault();
        const message = chatInput.value.trim();
        if (!message) return;

        // Add User Message
        appendMessage('user', message);
        chatInput.value = '';

        // Show typing indicator
        typingIndicator.classList.remove('hidden');
        chatMessages.scrollTop = chatMessages.scrollHeight;

        // Simulate AI/Agent Response logic
        setTimeout(() => {
            typingIndicator.classList.add('hidden');
            
            if (message.toLowerCase().includes('live agent') || message.toLowerCase().includes('human')) {
                isLiveAgent = true;
                appendMessage('system', 'Connecting you to a local representative in your area... Please hold.');
                
                setTimeout(() => {
                    appendMessage('agent', 'Hi there! My name is Sarah, a local Banccard representative. I can help answer any questions you have. What industry is your business in?');
                }, 2000);
            } else if (isLiveAgent) {
                // Generic live agent response
                appendMessage('agent', "Thanks for sharing that. Based on that setup, I'd recommend we look at a quick statement analysis to see where we can optimize your interchange rates. Could I get your email?");
            } else {
                // AI Response
                appendMessage('ai', 'I can help with that. Our processing solutions are designed to be seamless. Would you like me to connect you with a live specialist to discuss your specific needs?');
            }
        }, 1200);
    }

    function appendMessage(sender, text) {
        const msgDiv = document.createElement('div');
        msgDiv.className = `flex gap-3 max-w-[85%] chat-message-enter ${sender === 'user' ? 'ml-auto flex-row-reverse' : ''} ${sender === 'system' ? 'mx-auto max-w-full justify-center' : ''}`;

        let innerHTML = '';

        if (sender === 'user') {
            innerHTML = `
                <div class="bg-blue-600 text-white p-3.5 rounded-2xl rounded-tr-sm text-sm shadow-sm leading-relaxed">
                    ${text}
                </div>
            `;
        } else if (sender === 'system') {
            innerHTML = `
                <div class="bg-slate-100 text-slate-500 text-xs px-3 py-1.5 rounded-full font-medium border border-slate-200">
                    ${text}
                </div>
            `;
        } else {
            // Agent or AI
            const icon = sender === 'agent' ? 'solar:user-headphones-bold' : 'solar:robot-linear';
            const iconColor = sender === 'agent' ? 'text-green-600' : 'text-blue-600';
            const bgColor = sender === 'agent' ? 'bg-green-100 border-green-200' : 'bg-blue-100 border-blue-200';
            
            innerHTML = `
                <div class="w-8 h-8 rounded-full ${bgColor} border flex items-center justify-center shrink-0 shadow-sm mt-1 relative">
                    <iconify-icon icon="${icon}" class="${iconColor} text-lg"></iconify-icon>
                    ${sender === 'agent' ? '<span class="absolute bottom-0 right-0 w-2 h-2 bg-green-500 border border-white rounded-full"></span>' : ''}
                </div>
                <div class="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm leading-relaxed">
                    ${sender === 'agent' ? '<p class="text-[10px] text-slate-400 font-bold uppercase mb-1">Sarah (Live Agent)</p>' : ''}
                    ${text}
                </div>
            `;
        }

        msgDiv.innerHTML = innerHTML;
        chatMessages.appendChild(msgDiv);
        chatMessages.scrollTop = chatMessages.scrollHeight;
    }

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
      

<nav className="fixed top-0 w-full z-40 bg-white/80 backdrop-blur-md border-b border-slate-200">
<div className="flex max-w-7xl mx-auto pt-4 pr-6 pb-4 pl-6 items-center justify-between">

<div className="flex cursor-pointer gap-x-2 gap-y-2 items-center group">
<div className="w-8 h-8 rounded-lg flex items-center justify-center bg-blue-600 text-white transition-transform group-hover:scale-105">
<iconify-icon className="w-5 h-5 flex items-center justify-center" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="text-xl font-semibold text-slate-900 tracking-tight">Banccard</span>
</div>

<div className="hidden md:flex gap-8 items-center">
<a className="transition-colors text-sm font-medium text-slate-600 hover:text-blue-600 tracking-tight" href="#">Processing</a>
<a className="transition-colors text-sm font-medium text-slate-600 hover:text-blue-600 tracking-tight" href="#">Equipment</a>
<a className="transition-colors text-sm font-medium text-slate-600 hover:text-blue-600 tracking-tight" href="#">E-Commerce</a>
<a className="transition-colors text-sm font-medium text-slate-600 hover:text-blue-600 tracking-tight" href="#">Partners</a>
</div>

<div className="flex gap-4 items-center">
<a className="hidden transition-colors sm:block text-sm font-medium text-slate-600 hover:text-blue-600 tracking-tight" href="#">Merchant Login</a>
<a className="hover:bg-blue-700 hover:shadow-lg hover:shadow-blue-500/20 transition-all duration-300 text-sm font-medium text-white bg-blue-600 rounded-full pt-2 pr-5 pb-2 pl-5 tracking-tight" href="#">
          Contact Local Rep
        </a>
</div>
</div>
</nav>

<main className="bg-center lg:pt-48 lg:pb-32 w-full max-w-none mx-auto pt-32 pr-6 pb-24 pl-6 relative overflow-hidden bg-slate-50">

<div className="absolute top-0 right-0 w-[800px] h-[600px] bg-blue-100/50 blur-[120px] rounded-[100%] pointer-events-none -z-10"></div>
<div className="absolute bottom-0 left-0 w-[600px] h-[400px] bg-indigo-100/40 blur-[100px] rounded-[100%] pointer-events-none -z-10"></div>
<div className="grid lg:grid-cols-2 max-w-7xl mx-auto items-center gap-12 relative z-10">

<div className="max-w-xl z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 mb-6">
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
<span className="uppercase text-xs font-semibold tracking-tight text-blue-800">The Transaction Company</span>
</div>
<h1 className="text-5xl sm:text-7xl font-light text-gradient tracking-tight font-instrument-serif mb-6 leading-[1.1]">
        Face-to-Face.<br/>
        Online Solutions.<br/>
        On-The-Go.
      </h1>
<p className="leading-relaxed text-lg tracking-tight max-w-lg mb-10 text-slate-600">
        We provide premier merchant services, state-of-the-art processing equipment, and dedicated local support to help your business thrive anywhere.
      </p>
<div className="flex flex-col sm:flex-row w-full gap-4">
<a className="inline-flex items-center justify-center transition-all duration-300 group hover:bg-blue-700 hover:shadow-xl hover:shadow-blue-500/20 text-sm font-semibold text-white bg-blue-600 rounded-full pt-3 pr-6 pb-3 pl-6 tracking-tight" href="#">
          Get a Free Analysis
          <iconify-icon className="ml-2 transition-transform group-hover:translate-x-1 flex items-center justify-center" icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</a>
<a className="inline-flex items-center justify-center transition-all duration-300 text-sm font-semibold text-slate-700 bg-white border border-slate-200 hover:bg-slate-50 hover:border-slate-300 rounded-full pt-3 pr-6 pb-3 pl-6 tracking-tight shadow-sm" href="#">
          Explore Solutions
        </a>
</div>
</div>

<div className="mt-8 sm:mt-0 relative perspective-1000 h-[500px] flex items-center justify-center">

<div className="absolute z-20 w-72 h-96 bg-white border border-slate-200 rounded-2xl shadow-2xl rotate-y-[-15deg] rotate-x-[5deg] p-4 flex flex-col">
<div className="flex justify-between items-center mb-6">
<span className="text-xs text-slate-500 font-semibold">Checkout</span>
<iconify-icon className="text-slate-400" icon="solar:wifi-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 flex flex-col justify-center items-center text-center">
<span className="text-4xl font-light text-slate-900 font-instrument-serif tracking-tight mb-2">$1,240.00</span>
<span className="text-xs text-slate-500 mb-8">Tap to Pay or Insert Card</span>
<div className="w-16 h-16 rounded-full border border-blue-200 flex items-center justify-center bg-blue-50 animate-pulse shadow-inner">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
<div className="mt-auto flex justify-between gap-2">
<div className="h-10 flex-1 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 cursor-pointer"><span className="text-xs text-slate-600 font-medium">Manual</span></div>
<div className="h-10 flex-1 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center hover:bg-slate-100 cursor-pointer"><span className="text-xs text-slate-600 font-medium">Cancel</span></div>
</div>
</div>

<div className="absolute z-30 -right-4 bottom-12 w-64 glass-panel rounded-xl p-4 rotate-y-[10deg] rotate-x-[-5deg] transform translate-z-12">
<div className="flex items-start gap-3">
<div className="w-8 h-8 rounded-full bg-green-100 flex items-center justify-center flex-shrink-0 border border-green-200">
<iconify-icon className="text-green-600" icon="solar:smartphone-rotate-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<p className="text-xs font-semibold text-slate-900 mb-1 tracking-tight">Banccard Mobile</p>
<p className="text-xs text-slate-600 leading-relaxed">Payment of $1,240.00 approved. Receipt sent to customer.</p>
</div>
</div>
</div>

<div className="absolute z-10 -left-12 top-12 w-56 bg-white border border-slate-200 rounded-xl p-4 shadow-xl rotate-y-[-20deg] rotate-x-[10deg]">
<p className="text-xs text-slate-500 mb-2 font-medium">Batch Total</p>
<p className="text-xl text-slate-900 font-instrument-serif tracking-tight mb-4">$24,892.50</p>
<div className="flex items-end gap-1 h-12">
<div className="w-full bg-blue-100 rounded-t-sm h-[40%]"></div>
<div className="w-full bg-blue-200 rounded-t-sm h-[60%]"></div>
<div className="w-full bg-blue-100 rounded-t-sm h-[30%]"></div>
<div className="w-full bg-blue-300 rounded-t-sm h-[80%]"></div>
<div className="w-full bg-blue-600 rounded-t-sm h-[100%] shadow-[0_0_10px_rgba(59,130,246,0.3)]"></div>
</div>
</div>
</div>
</div>
</main>

<section className="border-y border-slate-200 bg-white relative z-20">
<div className="max-w-7xl mx-auto py-6 px-6">
<div className="flex flex-wrap justify-center md:justify-between items-center gap-8">
<div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-blue-600 text-lg flex items-center" icon="solar:shield-check-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Secure Processing</span>
</div>
<div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-blue-600 text-lg flex items-center" icon="solar:devices-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Equipment Programs</span>
</div>
<div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-blue-600 text-lg flex items-center" icon="solar:card-send-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Mobile Solutions</span>
</div>
<div className="flex items-center gap-2 opacity-70 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-blue-600 text-lg flex items-center" icon="solar:global-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">E-Commerce Gateways</span>
</div>
<div className="flex items-center gap-2 hidden lg:flex opacity-70 hover:opacity-100 transition-opacity cursor-default">
<iconify-icon className="text-blue-600 text-lg flex items-center" icon="solar:users-group-two-rounded-linear" strokeWidth="1.5"></iconify-icon>
<span className="text-sm font-medium tracking-tight text-slate-700">Local Face-to-Face Support</span>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 relative bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="max-w-2xl mb-16 text-center mx-auto">
<h2 className="text-3xl md:text-5xl tracking-tight mb-6 font-instrument-serif font-light text-gradient">Everything Your Business Needs to Process Securely.</h2>
<p className="text-slate-600 text-lg tracking-tight">A complete, unified payment ecosystem replacing disjointed tools with enterprise-grade infrastructure.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:shop-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Point of Sale Systems</h3>
<p className="text-sm text-slate-600 leading-relaxed">Sleek, powerful hardware designed for high-volume environments and flawless checkouts.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Credit &amp; Debit</h3>
<p className="text-sm text-slate-600 leading-relaxed">Secure, compliant processing with transparent pricing. Built to handle scale flawlessly.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:smartphone-rotate-2-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Mobile Processing</h3>
<p className="text-sm text-slate-600 leading-relaxed">Accept contactless payments instantly on the go with secure, portable devices.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:monitor-smartphone-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Virtual Terminals</h3>
<p className="text-sm text-slate-600 leading-relaxed">Turn any web browser into a secure payment terminal for phone and mail orders.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-blue-200 shadow-md hover:shadow-xl transition-all group relative overflow-hidden">
<div className="absolute top-0 right-0 bg-blue-600 text-white text-[10px] font-semibold px-2 py-1 rounded-bl-lg uppercase tracking-wider">Popular</div>
<div className="w-10 h-10 rounded-lg bg-blue-600 flex items-center justify-center mb-4 text-white shadow-lg shadow-blue-500/30">
<iconify-icon className="text-xl" icon="solar:cart-large-minimalistic-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">E-Commerce Solutions</h3>
<p className="text-sm text-slate-600 leading-relaxed">Seamlessly integrate robust payment gateways directly into your online shopping cart.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:buildings-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">B2B Processing</h3>
<p className="text-sm text-slate-600 leading-relaxed">Optimize your interchange rates automatically by passing Level II and Level III transaction data.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:document-text-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Check Processing</h3>
<p className="text-sm text-slate-600 leading-relaxed">Modernize your business with electronic check conversion, guarantee, and remote deposit capture.</p>
</div>

<div className="bg-white p-6 rounded-2xl border border-slate-200 hover:border-blue-300 hover:shadow-lg transition-all group">
<div className="w-10 h-10 rounded-lg bg-blue-50 border border-blue-100 flex items-center justify-center mb-4 text-blue-600 group-hover:bg-blue-600 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:banknotes-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-slate-900 tracking-tight mb-2">Next-Day Funding</h3>
<p className="text-sm text-slate-600 leading-relaxed">Improve cash flow and access your capital faster with our reliable, expedited deposit options.</p>
</div>
</div>
</div>
</section>

<section className="z-10 relative bg-white">
<div className="max-w-7xl mx-auto py-24 px-6 border-t border-slate-200">
<div className="grid gap-16 lg:grid-cols-2 items-center">

<div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 mb-6">
<span className="uppercase text-xs font-semibold tracking-tight text-blue-800">The Banccard Advantage</span>
</div>
<h3 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight font-instrument-serif mb-6 leading-[1.1]">
            Local Support.<br/><span className="text-gradient">Global Capabilities.</span>
</h3>
<p className="text-lg text-slate-600 tracking-tight mb-8 leading-relaxed">
            We don't just sell terminals. We partner with financial institutions and businesses to deliver secure, industry-leading payment platforms. True face-to-face support means we're there when you need us most.
        </p>
<ul className="space-y-4">
<li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
<iconify-icon className="text-blue-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-700 font-medium tracking-tight">Dedicated local representatives for personalized, face-to-face support.</span>
</li>
<li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
<iconify-icon className="text-blue-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-700 font-medium tracking-tight">Tailored equipment programs designed for your specific business environment.</span>
</li>
<li className="flex items-start gap-3 bg-slate-50 p-4 rounded-xl border border-slate-100">
<iconify-icon className="text-blue-600 text-xl mt-0.5 shrink-0" icon="solar:check-circle-bold"></iconify-icon>
<span className="text-sm text-slate-700 font-medium tracking-tight">Seamless integrations with your existing software and accounting tools.</span>
</li>
</ul>
</div>

<div className="relative flex items-center justify-center p-8">

<div className="w-full aspect-square max-w-md relative bg-slate-50 rounded-full border border-slate-200 shadow-inner overflow-hidden">
<div className="absolute inset-0 rounded-full border border-blue-100 animate-[spin_60s_linear_infinite]"></div>
<div className="absolute inset-8 rounded-full border border-blue-200 border-dashed animate-[spin_40s_linear_infinite_reverse]"></div>

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-28 h-28 rounded-full bg-blue-600 flex items-center justify-center shadow-xl shadow-blue-500/30 z-20">
<iconify-icon className="text-white text-4xl" icon="solar:card-linear" strokeWidth="1.5"></iconify-icon>
</div>

<div className="absolute top-[15%] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm whitespace-nowrap z-10">Processing Core</div>
<div className="absolute bottom-[15%] left-1/2 -translate-x-1/2 bg-white px-4 py-2 rounded-full text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm whitespace-nowrap z-10">E-Commerce</div>
<div className="absolute top-1/2 left-[5%] -translate-y-1/2 bg-white px-4 py-2 rounded-full text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm whitespace-nowrap z-10">POS Hardware</div>
<div className="absolute top-1/2 right-[5%] -translate-y-1/2 bg-white px-4 py-2 rounded-full text-xs font-semibold text-slate-700 border border-slate-200 shadow-sm whitespace-nowrap z-10">Reporting</div>

<svg className="absolute inset-0 w-full h-full z-0 opacity-30" viewbox="0 0 100 100">
<line stroke="#3b82f6" stroke-dasharray="2,2" strokeWidth="0.5" x1="50" x2="50" y1="20" y2="80"></line>
<line stroke="#3b82f6" stroke-dasharray="2,2" strokeWidth="0.5" x1="20" x2="80" y1="50" y2="50"></line>
</svg>
</div>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 py-32 px-6 relative overflow-hidden bg-white">
<div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(59,130,246,0.05)_0%,rgba(255,255,255,0)_70%)] pointer-events-none"></div>
<div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-20 items-center">

<div className="order-2 lg:order-1 relative flex justify-center perspective-1000">

<div className="absolute inset-0 bg-blue-100 rounded-full blur-[100px] -z-10"></div>
<div className="w-full max-w-sm bg-white border border-slate-200 rounded-3xl p-6 relative rotate-y-[5deg] rotate-x-[2deg] shadow-2xl">

<div className="flex justify-center mb-8 pt-4">
<div className="w-24 h-24 rounded-full ai-orb relative flex items-center justify-center">
<div className="flex items-center gap-1 h-8 opacity-80 bg-white rounded-full p-2 shadow-sm">
<iconify-icon className="text-blue-600 text-2xl" icon="solar:shield-check-bold"></iconify-icon>
</div>
</div>
</div>

<div className="space-y-4">
<div className="bg-slate-50 rounded-2xl rounded-tl-sm p-3 border border-slate-100 w-[85%]">
<p className="text-[11px] text-slate-500 mb-1 font-medium">Invoice #402 • $150.00</p>
<p className="text-sm text-slate-800 leading-snug tracking-tight">"Please review your latest invoice and submit payment using the secure link provided below."</p>
</div>
<div className="bg-blue-600 rounded-2xl rounded-tr-sm p-3 border border-blue-700 w-[85%] ml-auto shadow-md">
<p className="text-[11px] text-blue-200 mb-1 flex items-center justify-end gap-1 font-medium">Banccard Gateway <iconify-icon className="text-white" icon="solar:verified-check-bold"></iconify-icon></p>
<p className="text-sm text-white leading-snug tracking-tight">"Payment Successful. A receipt has been automatically emailed to the customer."</p>
</div>
</div>
<div className="mt-6 pt-4 border-t border-slate-100 flex justify-between items-center bg-slate-50 -mx-6 -mb-6 px-6 py-4 rounded-b-3xl">
<div className="flex items-center gap-2">
<span className="w-2 h-2 rounded-full bg-green-500 animate-pulse"></span>
<span className="text-xs font-semibold text-slate-600">Gateway Active</span>
</div>
<span className="text-xs bg-white px-2 py-1 rounded text-slate-700 border border-slate-200 shadow-sm font-medium">PCI Compliant</span>
</div>
</div>
</div>

<div className="order-1 lg:order-2">
<h2 className="text-4xl sm:text-5xl font-light text-slate-900 tracking-tight font-instrument-serif mb-6 leading-[1.1]">
                Secure Payments,<br/>Anywhere You Are.
            </h2>
<p className="leading-relaxed text-lg tracking-tight text-slate-600 mb-8">
                Pair your merchant account with our secure gateways to send payment links, accept remote payments, and manage online transactions from any device with an internet connection.
            </p>
<ul className="space-y-6">
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
<iconify-icon className="text-lg" icon="solar:link-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-1">Send secure payment links</h4>
<span className="text-sm text-slate-500 tracking-tight leading-relaxed block">Easily send customers a simple link via email or SMS to complete payments on their own devices.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
<iconify-icon className="text-lg" icon="solar:mouse-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-1">Accept cards remotely</h4>
<span className="text-sm text-slate-500 tracking-tight leading-relaxed block">Key in transactions effortlessly for phone or mail orders using our Virtual Terminal.</span>
</div>
</li>
<li className="flex items-start gap-4 group">
<div className="w-10 h-10 rounded-full border border-blue-200 bg-blue-50 flex items-center justify-center shrink-0 group-hover:bg-blue-600 group-hover:text-white transition-colors text-blue-600">
<iconify-icon className="text-lg" icon="solar:bell-bing-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-semibold text-slate-900 tracking-tight mb-1">Real-time transaction alerts</h4>
<span className="text-sm text-slate-500 tracking-tight leading-relaxed block">Receive instant notifications when invoices are settled or online orders are processed.</span>
</div>
</li>
</ul>
</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 border-t border-slate-200 bg-slate-50">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-2xl mx-auto mb-12">
<h2 className="text-4xl tracking-tight mb-4 font-instrument-serif font-light text-slate-900">See the System in Action</h2>
<p className="text-base tracking-tight text-slate-600">A unified view of your batches, deposits, and multi-channel payments.</p>
</div>

<div className="px-2 sm:px-6">
<div className="bg-white border border-slate-200 rounded-xl relative shadow-2xl overflow-hidden ring-1 ring-slate-900/5">

<div className="flex sm:px-6 border-b border-slate-200 pt-3 pr-4 pb-3 pl-4 items-center justify-between bg-white">
<div className="flex items-center gap-3">
<div className="w-7 h-7 rounded bg-blue-600 flex items-center justify-center text-white">
<iconify-icon className="text-sm" icon="solar:card-linear" strokeWidth="2"></iconify-icon>
</div>
<div className="hidden sm:block">
<p className="text-sm font-semibold tracking-tight text-slate-800">Banccard Merchant Portal</p>
</div>
</div>
<div className="flex items-center gap-4">
<div className="hidden md:flex gap-2 h-9 border rounded-md pr-3 pl-3 items-center bg-slate-50 border-slate-200 w-64 focus-within:ring-2 focus-within:ring-blue-100 focus-within:border-blue-400 transition-all">
<iconify-icon className="text-slate-400" icon="solar:magnifer-linear"></iconify-icon>
<input className="h-full bg-transparent text-sm placeholder:text-slate-400 focus:outline-none w-full text-slate-700" placeholder="Search batches, auths..." type="text"/>
</div>
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600 font-semibold cursor-pointer hover:bg-slate-200">
            M
        </div>
</div>
</div>

<div className="flex min-h-[500px]">

<aside className="hidden lg:flex flex-col w-64 border-r border-slate-200 bg-slate-50/50 p-4">
<div className="space-y-1 mb-8">
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-3 pl-2">Overview</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg bg-blue-50 text-blue-700 border border-blue-100 font-medium" href="#">
<iconify-icon className="text-lg" icon="solar:pie-chart-2-linear"></iconify-icon>
<span className="text-sm tracking-tight">Dashboard</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium">Transactions</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:document-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium">Statements</span>
</a>
</div>
<div className="space-y-1">
<p className="text-[10px] uppercase font-semibold text-slate-400 tracking-widest mb-3 pl-2">Tools</p>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors group" href="#">
<iconify-icon className="text-lg group-hover:text-blue-600" icon="solar:monitor-smartphone-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium flex-1">Virtual Terminal</span>
<span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse"></span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:link-circle-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium">Payment Links</span>
</a>
<a className="flex items-center gap-3 px-3 py-2 rounded-lg text-slate-600 hover:bg-slate-100 hover:text-slate-900 transition-colors" href="#">
<iconify-icon className="text-lg" icon="solar:safe-circle-linear"></iconify-icon>
<span className="text-sm tracking-tight font-medium">Customer Vault</span>
</a>
</div>
</aside>

<div className="flex-1 p-6 bg-white overflow-y-auto">

<div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm">
<p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Gross Volume</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-light text-slate-900 font-instrument-serif tracking-tight">$42,890.00</p>
<span className="text-[10px] font-semibold text-green-700 bg-green-100 px-1.5 py-0.5 rounded border border-green-200">+12.5%</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm">
<p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Transactions</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-light text-slate-900 font-instrument-serif tracking-tight">842</p>
<span className="text-[10px] text-slate-500 font-medium">This week</span>
</div>
</div>
<div className="bg-slate-50 border border-slate-100 rounded-xl p-5 shadow-sm">
<p className="text-xs text-slate-500 font-semibold mb-1 uppercase tracking-wide">Mobile Payments</p>
<div className="flex items-baseline gap-2">
<p className="text-3xl font-light text-slate-900 font-instrument-serif tracking-tight">138</p>
<span className="text-[10px] font-semibold text-blue-700 bg-blue-100 px-1.5 py-0.5 rounded border border-blue-200">Value: $5,400</span>
</div>
</div>
</div>

<div>
<h3 className="text-base font-semibold text-slate-900 mb-4 tracking-tight">Recent Activity</h3>
<div className="border border-slate-200 rounded-xl overflow-hidden bg-white shadow-sm">
<div className="grid grid-cols-4 px-5 py-3 border-b border-slate-200 bg-slate-50 text-xs font-semibold text-slate-500 uppercase tracking-wider">
<div>Type</div>
<div>Details</div>
<div>Amount</div>
<div className="text-right">Status</div>
</div>

<div className="grid grid-cols-4 px-5 py-4 border-b border-slate-100 items-center hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:shop-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900 tracking-tight">POS Payment</span>
</div>
<div className="text-xs text-slate-500">Term-02 • Visa ending 4242</div>
<div className="text-sm text-slate-900 tracking-tight font-semibold">$145.50</div>
<div className="text-right"><span className="inline-flex items-center gap-1.5 text-[10px] bg-green-50 text-green-700 border border-green-200 px-2 py-1 rounded-full font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-green-500"></span>Approved</span></div>
</div>

<div className="grid grid-cols-4 px-5 py-4 border-b border-slate-100 items-center hover:bg-blue-50 transition-colors cursor-pointer bg-blue-50/50 relative">
<div className="flex items-center gap-3 relative z-10">
<div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center text-blue-600">
<iconify-icon icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900 tracking-tight">Virtual Terminal</span>
</div>
<div className="text-xs text-slate-500 relative z-10">Inv-402 • Telephone Order</div>
<div className="text-sm text-slate-900 tracking-tight font-semibold relative z-10">$150.00</div>
<div className="text-right relative z-10"><span className="inline-flex items-center gap-1.5 text-[10px] bg-blue-50 text-blue-700 border border-blue-200 px-2 py-1 rounded-full font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></span>Captured</span></div>
</div>

<div className="grid grid-cols-4 px-5 py-4 items-center hover:bg-slate-50 transition-colors cursor-pointer">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-slate-100 border border-slate-200 flex items-center justify-center text-slate-600">
<iconify-icon icon="solar:cart-large-minimalistic-linear"></iconify-icon>
</div>
<span className="text-sm font-medium text-slate-900 tracking-tight">E-Commerce Order</span>
</div>
<div className="text-xs text-slate-500">Web-2049 • Gateway</div>
<div className="text-sm text-slate-900 tracking-tight font-semibold">$1,200.00</div>
<div className="text-right"><span className="inline-flex items-center gap-1.5 text-[10px] bg-slate-100 text-slate-700 border border-slate-200 px-2 py-1 rounded-full font-semibold"><span className="w-1.5 h-1.5 rounded-full bg-slate-400"></span>Settled</span></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-slate-200 bg-white">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl tracking-tight mb-4 font-instrument-serif font-light text-slate-900">Built for the Way Your Industry Operates</h2>
<p className="text-slate-500 text-base">Versatile processing solutions designed to scale across sectors.</p>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-4">
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:shop-2-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Retail</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:chef-hat-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Restaurants</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:bed-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Hospitality</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:buildings-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">B2B / Wholesale</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:steering-wheel-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Auto Repair</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:stethoscope-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Medical Clinics</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:case-minimalistic-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">Professional Services</h4>
</div>
<div className="bg-slate-50 p-6 rounded-xl border border-slate-100 hover:border-blue-200 hover:bg-blue-50 transition-all text-center group cursor-pointer">
<iconify-icon className="text-3xl text-slate-400 group-hover:text-blue-600 mb-3 transition-colors" icon="solar:cart-large-linear"></iconify-icon>
<h4 className="text-sm font-semibold text-slate-700 group-hover:text-slate-900 tracking-tight transition-colors">E-Commerce</h4>
</div>
</div>
</div>
</section>

<section className="border-t border-slate-200 pt-24 pr-6 pb-24 pl-6 relative overflow-hidden bg-white">

<div className="absolute right-0 bottom-0 w-[500px] h-[500px] bg-blue-50 blur-[100px] rounded-full pointer-events-none -z-10"></div>
<div className="text-center max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-blue-200 bg-blue-50 mb-8">
<span className="uppercase text-[10px] font-semibold tracking-widest text-blue-800">Merchant Success</span>
</div>
<h3 className="md:text-5xl leading-[1.2] text-3xl tracking-tight mb-12 font-instrument-serif font-light text-slate-900">"Switching to Banccard was the best decision for our bottom line. Having a dedicated local representative and next-day funding gives us the peace of mind to focus purely on growth."</h3>
<div className="flex items-center justify-center gap-4">
<div className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-blue-600 flex items-center justify-center text-white font-instrument-serif text-xl">
                M
            </div>
<div className="text-left">
<div className="font-semibold tracking-tight text-slate-900">Michael Reynolds</div>
<div className="text-xs tracking-tight text-slate-500 uppercase font-medium">Owner, Reynolds Auto &amp; Fleet</div>
</div>
</div>
</div>
</section>

<section className="py-32 px-6 border-t border-slate-200 relative bg-blue-900 text-center overflow-hidden">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-blue-600 blur-[120px] rounded-[100%] pointer-events-none"></div>
<div className="max-w-3xl mx-auto relative z-10">
<h2 className="text-5xl md:text-6xl font-light text-white tracking-tight font-instrument-serif mb-6 leading-[1.1]">
            Upgrade Your Payment Processing.
        </h2>
<p className="text-lg text-blue-100 tracking-tight mb-10 max-w-xl mx-auto">
            Get your free statement analysis today and discover how much you could save with our transparent rates and state-of-the-art equipment.
        </p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<a className="inline-flex items-center justify-center transition-all duration-300 hover:scale-105 text-sm font-semibold text-blue-900 bg-white rounded-full pt-4 pr-8 pb-4 pl-8 tracking-tight shadow-xl shadow-black/10" href="#">
                Get Started
            </a>
<a className="inline-flex items-center justify-center transition-all duration-300 text-sm font-semibold text-white bg-blue-800/50 border border-blue-400/30 hover:bg-blue-800 rounded-full pt-4 pr-8 pb-4 pl-8 tracking-tight backdrop-blur-md" href="#">
                Contact Your Local Rep
            </a>
</div>
</div>
</section>
<footer className="py-8 text-center bg-slate-50 border-t border-slate-200">
<p className="text-xs text-slate-500 tracking-tight font-dm-sans font-medium">© 2024 Banccard. All rights reserved.</p>
</footer>

<div className="fixed bottom-6 right-6 z-50 flex flex-col items-end">

<div className="hidden w-[90vw] sm:w-96 bg-white border border-slate-200 rounded-2xl shadow-2xl mb-4 overflow-hidden flex-col h-[450px] ring-1 ring-slate-900/5 transition-all origin-bottom-right" id="ai-chat-window">

<div className="bg-blue-600 p-4 text-white flex justify-between items-center shadow-sm z-10">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center border border-white/30 backdrop-blur-sm">
<iconify-icon className="text-2xl" icon="solar:user-bold-duotone"></iconify-icon>
</div>
<span className="absolute bottom-0 right-0 w-3 h-3 bg-green-400 border-2 border-blue-600 rounded-full"></span>
</div>
<div>
<p className="text-sm font-semibold tracking-tight leading-none mb-1">Banccard AI Support</p>
<p className="text-[11px] text-blue-100 font-medium">Connect with an agent live</p>
</div>
</div>
<button className="text-blue-100 hover:text-white transition-colors p-1 rounded-md hover:bg-white/10" onclick="toggleChat()">
<iconify-icon className="text-2xl" icon="solar:close-circle-linear"></iconify-icon>
</button>
</div>

<div className="flex-1 p-4 overflow-y-auto bg-slate-50 space-y-4 scroll-smooth" id="chat-messages">

<div className="flex gap-3 max-w-[85%]">
<div className="w-8 h-8 rounded-full bg-blue-100 border border-blue-200 flex items-center justify-center shrink-0 shadow-sm mt-1">
<iconify-icon className="text-blue-600 text-lg" icon="solar:robot-linear"></iconify-icon>
</div>
<div className="bg-white border border-slate-200 p-3.5 rounded-2xl rounded-tl-sm text-sm text-slate-700 shadow-sm leading-relaxed">
                    Hello! I'm the Banccard automated assistant. How can I help you regarding your payment processing setup today?
                </div>
</div>

<div className="flex flex-wrap gap-2 pl-11">
<button className="text-xs border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 font-medium transition-colors" onclick="autoFill('Connect me to a live agent')">Talk to a human</button>
<button className="text-xs border border-blue-200 bg-blue-50 text-blue-700 px-3 py-1.5 rounded-full hover:bg-blue-100 font-medium transition-colors" onclick="autoFill('Hardware support')">Hardware issues</button>
</div>
</div>

<div className="hidden bg-slate-50 px-4 py-2 border-t border-slate-100" id="typing-indicator">
<div className="flex gap-1 items-center pl-11">
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce"></span>
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.1s'}}></span>
<span className="w-1.5 h-1.5 bg-blue-400 rounded-full animate-bounce" style={{animationDelay: '0.2s'}}></span>
</div>
</div>

<div className="p-3 bg-white border-t border-slate-200 z-10">
<form className="flex gap-2 items-center" onsubmit="handleChatSubmit(event)">
<input autocomplete="off" className="flex-1 px-4 py-2.5 text-sm bg-slate-50 border border-slate-200 rounded-xl focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 text-slate-900 transition-all shadow-inner" id="chat-input" placeholder="Type your message..." type="text"/>
<button className="w-10 h-10 bg-blue-600 text-white rounded-xl flex items-center justify-center hover:bg-blue-700 transition-colors shadow-md shrink-0" type="submit">
<iconify-icon className="text-xl" icon="solar:plain-2-bold"></iconify-icon>
</button>
</form>
<div className="text-center mt-2">
<span className="text-[9px] text-slate-400 uppercase font-semibold tracking-wider">Powered by Banccard AI</span>
</div>
</div>
</div>

<button className="w-14 h-14 bg-blue-600 text-white rounded-full shadow-xl shadow-blue-500/30 hover:-translate-y-1 hover:shadow-blue-500/50 transition-all duration-300 flex items-center justify-center relative border-2 border-white group" id="chat-toggle-btn" onclick="toggleChat()">

<span className="absolute top-0 right-0 w-3.5 h-3.5 bg-red-500 border-2 border-white rounded-full"></span>
<iconify-icon className="text-2xl group-hover:scale-110 transition-transform" icon="solar:chat-round-dots-bold"></iconify-icon>
</button>
</div>


    </>
  );
}
