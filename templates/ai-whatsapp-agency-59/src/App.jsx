import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        // Simple script to highlight active nav state based on scroll
        const sections = document.querySelectorAll("section");
        const navLinks = document.querySelectorAll("aside nav a");

        window.addEventListener("scroll", () => {
            let current = "";
            sections.forEach((section) => {
                const sectionTop = section.offsetTop;
                if (scrollY >= sectionTop - 100) {
                    current = section.getAttribute("id");
                }
            });

            navLinks.forEach((link) => {
                link.classList.remove("bg-gray-100", "text-gray-900");
                link.classList.add("text-gray-600");
                if (link.getAttribute("href").includes(current)) {
                    link.classList.add("bg-gray-100", "text-gray-900");
                    link.classList.remove("text-gray-600");
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="md:hidden bg-white border-b border-gray-200 p-4 sticky top-0 z-20 flex justify-between items-center">
<div className="text-sm font-semibold tracking-tighter uppercase">BIZBOT OS</div>
<button className="text-gray-500">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear"></iconify-icon>
</button>
</div>

<aside className="hidden md:flex w-64 flex-col bg-white border-r border-gray-200 fixed h-screen top-0 left-0 z-10">
<div className="p-6 border-b border-gray-100">
<h1 className="text-sm font-semibold tracking-tighter uppercase text-black">BIZBOT OS</h1>
<p className="text-xs text-gray-500 mt-1">Agency Founder Dashboard</p>
</div>
<nav className="flex-1 overflow-y-auto py-4 px-3 space-y-1">
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 mt-4">Product</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-900 bg-gray-100 rounded-md transition-colors" href="#overview">
<iconify-icon className="text-lg" icon="solar:widget-2-linear"></iconify-icon>
                App Overview
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#features">
<iconify-icon className="text-lg" icon="solar:star-linear"></iconify-icon>
                Core Features
            </a>
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 mt-6">Execution</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#architecture">
<iconify-icon className="text-lg" icon="solar:server-square-linear"></iconify-icon>
                Tech Stack &amp; Setup
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#code">
<iconify-icon className="text-lg" icon="solar:code-square-linear"></iconify-icon>
                Implementation Snippets
            </a>
<p className="px-3 text-xs font-medium text-gray-400 uppercase tracking-widest mb-2 mt-6">Growth</p>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#monetization">
<iconify-icon className="text-lg" icon="solar:wallet-money-linear"></iconify-icon>
                Monetization Strategy
            </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-gray-600 hover:text-gray-900 hover:bg-gray-50 rounded-md transition-colors" href="#playbook">
<iconify-icon className="text-lg" icon="solar:book-bookmark-linear"></iconify-icon>
                Sales &amp; Marketing Plan
            </a>
</nav>
<div className="p-4 border-t border-gray-100">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gray-900 flex items-center justify-center text-white text-xs font-medium">
                    FB
                </div>
<div>
<p className="text-sm font-medium text-gray-900 tracking-tight">Founder</p>
<p className="text-xs text-gray-500">Admin</p>
</div>
</div>
</div>
</aside>

<main className="flex-1 md:ml-64 p-6 md:p-12 max-w-5xl mx-auto w-full">

<header className="mb-12 border-b border-gray-200 pb-8">
<div className="inline-flex items-center gap-2 px-2.5 py-1 rounded-full bg-blue-50 text-blue-700 text-xs font-medium mb-4 border border-blue-100">
<div className="w-1.5 h-1.5 rounded-full bg-blue-500 animate-pulse"></div>
                Project Active: BizBot Kenya
            </div>
<h1 className="text-3xl md:text-4xl font-semibold tracking-tight text-gray-900 mb-3">AI WhatsApp Agent for SME Growth</h1>
<p className="text-base md:text-lg text-gray-500 max-w-2xl leading-relaxed">
                The complete blueprint to build, deploy, and monetize an AI-powered WhatsApp chatbot designed specifically for small businesses in Kenya and Africa. Automate sales, answer FAQs, and drive revenue.
            </p>
</header>

<section className="mb-16 scroll-mt-24" id="overview">
<div className="flex flex-col lg:flex-row gap-12 items-start">
<div className="flex-1 space-y-6">
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">The Core Problem</h2>
<p className="text-sm text-gray-600 leading-relaxed">
                            Most small businesses (shops, salons, online sellers, farmers) lose customers because they reply late, forget follow-ups, cannot answer all questions simultaneously, and lack a dedicated e-commerce website.
                        </p>
</div>
<div>
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-2">The Solution</h2>
<p className="text-sm text-gray-600 leading-relaxed">
                            BizBot is an intelligent WhatsApp assistant that acts as a 24/7 digital salesperson. It replies instantly, answers frequently asked questions, takes structured orders, and subtly promotes products using conversational AI in both English and Swahili.
                        </p>
</div>
</div>

<div className="w-full lg:w-[320px] bg-white border border-gray-200 rounded-[2rem] shadow-sm overflow-hidden flex flex-col h-[500px] shrink-0">

<div className="bg-gray-50 border-b border-gray-200 px-4 py-3 flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-blue-100 flex items-center justify-center text-blue-600 border border-blue-200">
<iconify-icon className="text-xl" icon="solar:shop-linear"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900">Nairobi Sneaker Hub</h3>
<p className="text-xs text-gray-500 flex items-center gap-1">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> Online
                            </p>
</div>
</div>

<div className="flex-1 bg-gray-50/50 p-4 overflow-y-auto space-y-4 text-sm hide-scrollbar">
<div className="flex justify-center">
<span className="bg-gray-200 text-gray-500 text-[10px] px-2 py-1 rounded-md uppercase font-medium tracking-wide">Today</span>
</div>

<div className="flex justify-end">
<div className="bg-black text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
<p>Sasa! Do you have the Air Max in size 42?</p>
<p className="text-[10px] text-gray-400 text-right mt-1">10:42 AM</p>
</div>
</div>

<div className="flex justify-start">
<div className="bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
<p>Sasa! Yes, we have the Nike Air Max in size 42 available in Black and White.</p>
<p className="mt-2 text-xs font-medium">Price: KES 3,500</p>
<p className="mt-1">Would you like me to process an order for you right now?</p>
<p className="text-[10px] text-gray-400 text-right mt-1">10:42 AM</p>
</div>
</div>

<div className="flex justify-end">
<div className="bg-black text-white px-3 py-2 rounded-2xl rounded-tr-sm max-w-[80%] shadow-sm">
<p>Yes, black please. How do I pay?</p>
<p className="text-[10px] text-gray-400 text-right mt-1">10:44 AM</p>
</div>
</div>

<div className="flex justify-start">
<div className="bg-white border border-gray-200 text-gray-800 px-3 py-2 rounded-2xl rounded-tl-sm max-w-[85%] shadow-sm">
<p>Great choice! Your total is KES 3,500 plus KES 200 for CBD delivery.</p>
<div className="mt-2 bg-gray-50 p-2 rounded border border-gray-100">
<p className="text-xs font-semibold">Till Number: 123456</p>
<p className="text-xs text-gray-500">Name: Sneaker Hub</p>
</div>
<p className="mt-2 text-xs">Reply with the M-Pesa confirmation code once done.</p>
<p className="text-[10px] text-gray-400 text-right mt-1">10:44 AM</p>
</div>
</div>
</div>

<div className="p-3 bg-white border-t border-gray-200 flex items-center gap-2">
<iconify-icon className="text-gray-400 text-xl" icon="solar:smile-circle-linear"></iconify-icon>
<div className="flex-1 bg-gray-100 rounded-full h-9 flex items-center px-4">
<span className="text-sm text-gray-400">Type a message...</span>
</div>
<div className="w-9 h-9 rounded-full bg-blue-600 flex items-center justify-center text-white">
<iconify-icon className="text-lg" icon="solar:plain-linear"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="features">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Core Capabilities</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:history-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">24/7 Auto-Replies</h3>
<p className="text-xs text-gray-500 leading-relaxed">Instant responses to customer inquiries anytime, eliminating lost leads due to delays.</p>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:shop-2-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">Catalog Integration</h3>
<p className="text-xs text-gray-500 leading-relaxed">Dynamically pull prices, stock status, and product images directly into the chat flow.</p>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:bill-check-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">Automated Order Taking</h3>
<p className="text-xs text-gray-500 leading-relaxed">Guide users through selection, capture delivery details, and format structured orders.</p>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:global-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">Bilingual Support</h3>
<p className="text-xs text-gray-500 leading-relaxed">Seamlessly switch between English, Swahili, and Sheng based on user input.</p>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:bell-bing-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">Smart Follow-ups</h3>
<p className="text-xs text-gray-500 leading-relaxed">Automatically re-engage customers who abandoned inquiries after a set time.</p>
</div>
<div className="p-5 bg-white border border-gray-200 rounded-xl hover:border-gray-300 transition-colors">
<iconify-icon className="text-2xl text-gray-700 mb-3 block" icon="solar:wallet-linear"></iconify-icon>
<h3 className="text-sm font-semibold text-gray-900 mb-1 tracking-tight">M-Pesa Instructions</h3>
<p className="text-xs text-gray-500 leading-relaxed">Provide dynamic Paybill/Till numbers and amount calculations, parsing confirmation texts.</p>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="architecture">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Technical Architecture</h2>
<div className="bg-white border border-gray-200 rounded-xl p-6 mb-6">
<p className="text-sm text-gray-600 mb-4">A lightweight, free-to-start stack optimized for fast deployment and low overhead.</p>
<div className="space-y-4">
<div className="flex items-start gap-4 pb-4 border-b border-gray-100">
<div className="mt-0.5 w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
<iconify-icon className="text-sm" icon="solar:smartphone-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 tracking-tight">Messaging Interface: Meta WhatsApp Cloud API</h4>
<p className="text-xs text-gray-500 mt-1">Official API, more reliable than unofficial wrappers. Use Twilio Sandbox for initial rapid prototyping before business verification.</p>
</div>
</div>
<div className="flex items-start gap-4 pb-4 border-b border-gray-100">
<div className="mt-0.5 w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
<iconify-icon className="text-sm" icon="solar:cpu-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 tracking-tight">Logic &amp; Intelligence: Node.js + OpenAI API</h4>
<p className="text-xs text-gray-500 mt-1">Express.js server handles webhooks. OpenAI (gpt-4o-mini) processes natural language, maps intent, and generates human-like responses.</p>
</div>
</div>
<div className="flex items-start gap-4 pb-4 border-b border-gray-100">
<div className="mt-0.5 w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
<iconify-icon className="text-sm" icon="solar:database-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 tracking-tight">Database: Supabase (PostgreSQL)</h4>
<p className="text-xs text-gray-500 mt-1">Stores user context, order history, and product catalogs. Generous free tier, essential for the chatbot to remember users.</p>
</div>
</div>
<div className="flex items-start gap-4">
<div className="mt-0.5 w-6 h-6 rounded bg-gray-100 flex items-center justify-center text-gray-600 shrink-0">
<iconify-icon className="text-sm" icon="solar:cloud-linear"></iconify-icon>
</div>
<div>
<h4 className="text-sm font-medium text-gray-900 tracking-tight">Hosting: Render or Vercel</h4>
<p className="text-xs text-gray-500 mt-1">Deploy the Node.js webhook server easily with continuous integration.</p>
</div>
</div>
</div>
</div>

<div className="mt-8">
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-4 uppercase">Step-by-Step Setup</h3>
<div className="relative pl-4 border-l border-gray-200 space-y-6">
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<p className="text-sm font-medium text-gray-900">1. Acquire API Keys</p>
<p className="text-xs text-gray-500 mt-1">Sign up for OpenAI and set up a Twilio Sandbox account for instant WhatsApp testing.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<p className="text-sm font-medium text-gray-900">2. Initialize Webhook Server</p>
<p className="text-xs text-gray-500 mt-1">Create a basic Express app with a POST endpoint to receive incoming messages from Twilio/Meta.</p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<p className="text-sm font-medium text-gray-900">3. Connect AI Brain</p>
<p className="text-xs text-gray-500 mt-1">Pass the incoming message to OpenAI. Use a strong system prompt: <em className="not-italic text-gray-700 bg-gray-100 px-1 rounded">"You are a sales assistant for a shop. Be polite, answer queries based on context, output JSON for orders."</em></p>
</div>
<div className="relative">
<div className="absolute -left-[21px] top-1 w-2.5 h-2.5 rounded-full bg-white border-2 border-gray-300"></div>
<p className="text-sm font-medium text-gray-900">4. Handle State &amp; Reply</p>
<p className="text-xs text-gray-500 mt-1">Send the AI's response back via the WhatsApp API. Save the interaction in Supabase for conversation memory.</p>
</div>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="code">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Implementation Snippets</h2>
<div className="rounded-xl overflow-hidden border border-gray-200 bg-[#0d1117]">
<div className="flex items-center justify-between px-4 py-2 border-b border-gray-800 bg-[#161b22]">
<div className="flex gap-2">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="text-xs text-gray-400 font-mono">webhook.js</span>
<button className="text-xs text-gray-400 hover:text-white flex items-center gap-1">
<iconify-icon icon="solar:copy-linear"></iconify-icon> Copy
                    </button>
</div>
<div className="p-4 overflow-x-auto text-sm font-mono text-gray-300 leading-relaxed">
<pre><code><span className="text-purple-400">const</span> express = <span className="text-blue-400">require</span>(<span className="text-green-300">'express'</span>);
<span className="text-purple-400">const</span> { OpenAI } = <span className="text-blue-400">require</span>(<span className="text-green-300">'openai'</span>);
<span className="text-purple-400">const</span> app = <span className="text-blue-400">express</span>();

<span className="text-purple-400">const</span> openai = <span className="text-purple-400">new</span> <span className="text-yellow-200">OpenAI</span>({ apiKey: process.env.OPENAI_KEY });

<span className="text-gray-500">// System prompt defines the bot's behavior</span>
<span className="text-purple-400">const</span> SYSTEM_PROMPT = <span className="text-green-300">`You are BizBot, a helpful WhatsApp assistant for a Kenyan shop. 
Reply politely in English or Swahili. 
If they ask for products, list available items. 
If they want to buy, ask for details and give M-Pesa Till 123456.`</span>;

app.<span className="text-blue-400">post</span>(<span className="text-green-300">'/webhook'</span>, <span className="text-purple-400">async</span> (req, res) =&gt; {
    <span className="text-purple-400">const</span> incomingMsg = req.body.Body;
    <span className="text-purple-400">const</span> sender = req.body.From;

    <span className="text-purple-400">try</span> {
        <span className="text-gray-500">// Get AI response</span>
        <span className="text-purple-400">const</span> response = <span className="text-purple-400">await</span> openai.chat.completions.<span className="text-blue-400">create</span>({
            model: <span className="text-green-300">"gpt-4o-mini"</span>,
            messages: [
                { role: <span className="text-green-300">"system"</span>, content: SYSTEM_PROMPT },
                { role: <span className="text-green-300">"user"</span>, content: incomingMsg }
            ]
        });

        <span className="text-purple-400">const</span> botReply = response.choices[0].message.content;
        
        <span className="text-gray-500">// Send back via Twilio API (Abstracted)</span>
        <span className="text-blue-400">sendWhatsAppMessage</span>(sender, botReply);
        
        res.<span className="text-blue-400">status</span>(200).<span className="text-blue-400">send</span>(<span className="text-green-300">'OK'</span>);
    } <span className="text-purple-400">catch</span> (error) {
        console.<span className="text-blue-400">error</span>(error);
        res.<span className="text-blue-400">status</span>(500).<span className="text-blue-400">send</span>();
    }
});</code></pre>
</div>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="monetization">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Monetization &amp; Pricing</h2>
<p className="text-sm text-gray-600 mb-6">Structure pricing to lower the barrier to entry while ensuring recurring revenue.</p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6">

<div className="border border-gray-200 bg-white rounded-xl p-6 flex flex-col relative overflow-hidden">
<div className="absolute top-0 right-0 w-24 h-24 bg-gray-50 rounded-bl-full -z-10"></div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900">Setup Fee</h3>
<p className="text-xs text-gray-500 mt-1">One-time payment</p>
<div className="mt-4 mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-gray-900">KES 2,500</span>
<span className="text-sm text-gray-500">- 5,000</span>
</div>
<ul className="space-y-3 flex-1 mb-6">
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Bot personality configuration
                        </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Adding up to 50 products to catalog
                        </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            WhatsApp Business connection
                        </li>
</ul>
</div>

<div className="border-2 border-gray-900 bg-white rounded-xl p-6 flex flex-col relative">
<div className="absolute -top-3 left-6 bg-gray-900 text-white text-[10px] font-semibold uppercase tracking-widest px-2 py-1 rounded">Recurring Revenue</div>
<h3 className="text-lg font-semibold tracking-tight text-gray-900 mt-2">Maintenance</h3>
<p className="text-xs text-gray-500 mt-1">Monthly Subscription</p>
<div className="mt-4 mb-6 flex items-baseline gap-1">
<span className="text-3xl font-semibold tracking-tight text-gray-900">KES 1,500</span>
<span className="text-sm text-gray-500">/mo</span>
</div>
<ul className="space-y-3 flex-1 mb-6">
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Hosting &amp; OpenAI API costs
                        </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            Monthly catalog updates
                        </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<iconify-icon className="text-gray-900 mt-0.5" icon="solar:check-circle-linear"></iconify-icon>
                            1x Monthly broadcast campaign
                        </li>
</ul>
</div>
</div>
<div className="mt-6 bg-blue-50 border border-blue-100 rounded-lg p-4 flex gap-3 items-start">
<iconify-icon className="text-blue-600 text-lg shrink-0 mt-0.5" icon="solar:info-circle-linear"></iconify-icon>
<p className="text-xs text-blue-800 leading-relaxed">
<strong>Scale Economics:</strong> OpenAI costs per client are minimal (approx $1-3/mo based on volume). Hosting is practically free initially. Profit margin on the monthly retainer exceeds 80%.
                </p>
</div>
</section>

<section className="mb-16 scroll-mt-24" id="playbook">
<h2 className="text-2xl font-semibold tracking-tight text-gray-900 mb-6">Sales &amp; Growth Playbook</h2>
<div className="space-y-8">

<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-3 uppercase flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:target-linear"></iconify-icon> 
                        First Client Strategy (Days 1-7)
                    </h3>
<div className="bg-white border border-gray-200 rounded-xl p-5">
<ol className="list-decimal list-inside space-y-3 text-sm text-gray-600">
<li><strong>Physical Visits:</strong> Walk into local salons, electronics shops, and boutiques on busy streets.</li>
<li><strong>The Hook:</strong> "Hi, I notice you're busy. Do you ever miss WhatsApp orders when you're attending to customers in the shop?"</li>
<li><strong>The Demo (Crucial):</strong> Don't explain. Pull out your phone, text a demo number. Let them watch the bot reply instantly, show prices, and ask for an order.</li>
<li><strong>The Offer:</strong> "I'm setting this up for 5 businesses locally. I'll build yours for free to test for 3 days. If you get more sales, it's KES 2,500 to keep it."</li>
<li><strong>Goal:</strong> Close 3-5 clients in week one to validate and build case studies.</li>
</ol>
</div>
</div>

<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-3 uppercase flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:graph-up-linear"></iconify-icon> 
                        Scaling Growth (Days 8-30)
                    </h3>
<div className="bg-white border border-gray-200 rounded-xl p-0 overflow-hidden flex flex-col sm:flex-row">
<div className="p-5 border-b sm:border-b-0 sm:border-r border-gray-100 flex-1 hover:bg-gray-50 transition-colors">
<h4 className="text-sm font-medium text-gray-900 mb-2">Social Media Demo</h4>
<p className="text-xs text-gray-500">Record screen recordings of the bot in action. Post on TikTok and IG Reels with local sounds. Caption: <em>"How this Nairobi business handles 100 orders while sleeping."</em> Link to WhatsApp.</p>
</div>
<div className="p-5 flex-1 hover:bg-gray-50 transition-colors">
<h4 className="text-sm font-medium text-gray-900 mb-2">B2B Partnerships</h4>
<p className="text-xs text-gray-500">Partner with Instagram/Facebook ad managers. Offer the bot as a value-add. When they run ads to WhatsApp, the bot catches the leads, increasing their ad ROI.</p>
</div>
</div>
</div>

<div>
<h3 className="text-sm font-semibold tracking-tight text-gray-900 mb-3 uppercase flex items-center gap-2">
<iconify-icon className="text-gray-500" icon="solar:rocket-linear"></iconify-icon> 
                        Scaling to KES 1M+
                    </h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">
                        To hit 1M KES monthly recurring revenue, you need approx 600 clients paying KES 1,500/mo. This cannot be done via manual setup.
                    </p>
<div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
<div className="bg-gray-100 rounded-lg p-4">
<span className="block text-xs font-semibold text-gray-900 mb-1">Phase 1: Agency</span>
<span className="text-[10px] text-gray-500">Manual onboarding. High touch. Validate the product.</span>
</div>
<div className="bg-gray-900 rounded-lg p-4 relative">
<div className="absolute right-2 top-2 w-2 h-2 rounded-full bg-green-500 animate-pulse"></div>
<span className="block text-xs font-semibold text-white mb-1">Phase 2: Productize</span>
<span className="text-[10px] text-gray-400">Build a web dashboard. Users sign in, upload CSV catalog, connect FB page automatically.</span>
</div>
<div className="bg-white border border-gray-200 rounded-lg p-4">
<span className="block text-xs font-semibold text-gray-900 mb-1">Phase 3: Expansion</span>
<span className="text-[10px] text-gray-500">Target broader African markets (Nigeria, SA). Add AI voice calling features.</span>
</div>
</div>
</div>
</div>
</section>

<footer className="pt-8 border-t border-gray-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-gray-500">© 2024 BizBot OS. Internal Document.</p>
<button className="bg-black text-white px-4 py-2 rounded-md text-xs font-medium hover:bg-gray-800 transition-colors">
                Start Building Project
            </button>
</footer>
</main>


    </>
  );
}
