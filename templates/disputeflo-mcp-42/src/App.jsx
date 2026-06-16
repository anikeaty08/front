import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="border-b border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex items-center justify-between h-16">
<div className="flex items-center">
<div className="text-xl font-semibold tracking-tight">DISPUTEFLOW</div>
</div>
<div className="hidden md:flex items-center space-x-8">
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#for-builders">For Builders</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#docs">Docs</a>
<a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#pricing">Pricing</a>
<button className="text-sm text-gray-600 hover:text-gray-900 transition-colors">Sign in</button>
<button className="px-4 py-2 bg-gray-900 text-white text-sm font-medium rounded-lg hover:bg-gray-800 transition-colors">Get API Key</button>
</div>
</div>
</div>
</nav>

<section className="max-w-7xl mx-auto px-6 lg:px-8 pt-20 pb-24 md:pt-32 md:pb-40">
<div className="max-w-4xl mx-auto text-center">
<div className="inline-flex items-center space-x-2 px-3 py-1 bg-gray-100 rounded-full mb-8">
<span className="text-xs font-medium text-gray-900">FOR MCP SERVER BUILDERS</span>
<span className="text-xs text-gray-600">Production-ready dispute infrastructure</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight mb-6">The dispute layer for agentic payments</h1>
<p className="text-xl text-gray-600 mb-10 max-w-2xl mx-auto">Don't build dispute resolution from scratch. Add one endpoint to your MCP server and route all disputes to our AI-powered platform.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">Get Started Free</button>
<button className="w-full sm:w-auto px-6 py-3 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors flex items-center justify-center space-x-2">
<span>View Documentation</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>

<div className="mt-16 bg-gray-900 rounded-xl p-6 text-left overflow-x-auto">
<div className="flex items-center justify-between mb-4">
<span className="text-xs text-gray-400 font-mono">your-mcp-server/tools.ts</span>
<button className="text-xs text-gray-400 hover:text-gray-200 transition-colors">Copy</button>
</div>
<pre className="text-sm text-gray-100 font-mono leading-relaxed"><code><span className="text-purple-400">import</span> { DisputeFlow } <span className="text-purple-400">from</span> <span className="text-green-400">'@disputeflow/sdk'</span>;

<span className="text-purple-400">const</span> disputeflow = <span className="text-purple-400">new</span> <span className="text-blue-400">DisputeFlow</span>(<span className="text-green-400">'your_api_key'</span>);

<span className="text-gray-500">// Add dispute resolution to your MCP server</span>
server.<span className="text-blue-400">addTool</span>({
  name: <span className="text-green-400">"file_dispute"</span>,
  handler: <span className="text-purple-400">async</span> (params) =&gt; {
    <span className="text-purple-400">return</span> <span className="text-purple-400">await</span> disputeflow.disputes.<span className="text-blue-400">create</span>(params);
  }
});</code></pre>
</div>
<p className="mt-6 text-sm text-gray-500">That's it. Disputes are now routed to DisputeFlow's AI agents.</p>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
<div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
<div>
<div className="text-sm font-medium text-gray-500 mb-4">THE PROBLEM</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Every payment agent needs disputes. Nobody wants to build them.</h2>
<div className="space-y-4 text-gray-600">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" data-lucide="x"></i>
<p className="text-sm">Building dispute logic takes months of development</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" data-lucide="x"></i>
<p className="text-sm">Fraud detection requires specialized ML expertise</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" data-lucide="x"></i>
<p className="text-sm">Compliance and regulations are constantly changing</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-red-500 flex-shrink-0 mt-0.5" data-lucide="x"></i>
<p className="text-sm">Manual dispute handling doesn't scale with agents</p>
</div>
</div>
</div>
<div>
<div className="text-sm font-medium text-gray-900 mb-4">THE SOLUTION</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">One API. Full dispute infrastructure.</h2>
<div className="space-y-4 text-gray-600">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<p className="text-sm">Integrate disputes in minutes with one SDK call</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<p className="text-sm">AI agents handle 95% of disputes automatically</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<p className="text-sm">Built-in fraud detection and compliance</p>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-green-600 flex-shrink-0 mt-0.5" data-lucide="check"></i>
<p className="text-sm">Scale to millions of disputes without ops overhead</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-24" id="how-it-works">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">How it works</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">Expose one endpoint. Route all disputes to us. Focus on building your agent.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border border-gray-200 rounded-xl p-8">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-gray-900" data-lucide="code"></i>
</div>
<div className="text-2xl font-semibold mb-2">1</div>
<h3 className="text-xl font-semibold mb-3">Add the SDK</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Install our SDK and add a file_dispute tool to your MCP server. The tool wraps our dispute API.</p>
<div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-800">
                  npm install @disputeflow/sdk
                </div>
</div>
<div className="border border-gray-200 rounded-xl p-8">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-gray-900" data-lucide="arrow-right-left"></i>
</div>
<div className="text-2xl font-semibold mb-2">2</div>
<h3 className="text-xl font-semibold mb-3">Route Disputes</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">When users call file_dispute on your server, it automatically routes to our platform with full context.</p>
<div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-800">
                  disputeflow.disputes.create()
                </div>
</div>
<div className="border border-gray-200 rounded-xl p-8">
<div className="w-10 h-10 bg-gray-100 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-gray-900" data-lucide="sparkles"></i>
</div>
<div className="text-2xl font-semibold mb-2">3</div>
<h3 className="text-xl font-semibold mb-3">We Handle Everything</h3>
<p className="text-sm text-gray-600 leading-relaxed mb-4">Our AI agents analyze, detect fraud, communicate with parties, and resolve disputes in minutes.</p>
<div className="bg-gray-50 rounded-lg p-3 font-mono text-xs text-gray-800">
                  avg resolution: 4.2 minutes
                </div>
</div>
</div>
</section>

<section className="bg-gray-900 text-white" id="for-builders">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Built for MCP server builders</h2>
<p className="text-lg text-gray-400 max-w-2xl mx-auto">Everything you need to add world-class dispute resolution to your agent</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="plug-zap"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Simple Integration</h3>
<p className="text-gray-400 text-sm leading-relaxed">One SDK, one API key. Add dispute resolution to your MCP server in under 5 minutes.</p>
</div>
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="webhook"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Webhooks &amp; Events</h3>
<p className="text-gray-400 text-sm leading-relaxed">Get real-time updates on dispute status. Stay in control with webhook notifications.</p>
</div>
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Built-in Fraud Detection</h3>
<p className="text-gray-400 text-sm leading-relaxed">ML models trained on millions of disputes catch fraudulent claims automatically.</p>
</div>
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="workflow"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Custom Workflows</h3>
<p className="text-gray-400 text-sm leading-relaxed">Define resolution rules specific to your use case. Escalate complex cases automatically.</p>
</div>
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="gauge"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Real-time Dashboard</h3>
<p className="text-gray-400 text-sm leading-relaxed">Monitor disputes, view analytics, and track resolution rates from your dashboard.</p>
</div>
<div className="border border-gray-800 rounded-xl p-8 hover:border-gray-700 transition-colors">
<div className="w-10 h-10 bg-gray-800 rounded-lg flex items-center justify-center mb-4">
<i className="w-5 h-5 text-white" data-lucide="scale"></i>
</div>
<h3 className="text-xl font-semibold mb-3">Compliance Ready</h3>
<p className="text-gray-400 text-sm leading-relaxed">SOC 2, GDPR compliant. Built-in audit logs and reporting for regulations.</p>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
<div className="grid grid-cols-1 md:grid-cols-4 gap-8 border-t border-b border-gray-200 py-12">
<div className="text-center">
<div className="text-4xl font-semibold tracking-tight mb-2">5 min</div>
<div className="text-sm text-gray-600">Average integration time</div>
</div>
<div className="text-center border-l-0 md:border-l border-gray-200">
<div className="text-4xl font-semibold tracking-tight mb-2">95%</div>
<div className="text-sm text-gray-600">Auto-resolved disputes</div>
</div>
<div className="text-center border-l-0 md:border-l border-gray-200">
<div className="text-4xl font-semibold tracking-tight mb-2">4.2 min</div>
<div className="text-sm text-gray-600">Avg resolution time</div>
</div>
<div className="text-center border-l-0 md:border-l border-gray-200">
<div className="text-4xl font-semibold tracking-tight mb-2">200+</div>
<div className="text-sm text-gray-600">MCP servers using us</div>
</div>
</div>
</section>

<section className="bg-gray-50 border-t border-gray-200">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
<div>
<div className="text-sm font-medium text-gray-500 mb-4">DEVELOPER FIRST</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-6">Beautiful APIs. Comprehensive docs.</h2>
<p className="text-gray-600 mb-8">We're developers building for developers. Our APIs are RESTful, well-documented, and designed to get you up and running in minutes.</p>
<div className="space-y-4">
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" data-lucide="book-open"></i>
<div>
<div className="font-medium mb-1">Complete Documentation</div>
<p className="text-sm text-gray-600">Interactive API reference, guides, and examples</p>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" data-lucide="terminal"></i>
<div>
<div className="font-medium mb-1">SDKs for Every Language</div>
<p className="text-sm text-gray-600">TypeScript, Python, Go, Rust - we've got you covered</p>
</div>
</div>
<div className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0 mt-0.5" data-lucide="test-tubes"></i>
<div>
<div className="font-medium mb-1">Sandbox Environment</div>
<p className="text-sm text-gray-600">Test your integration with fake disputes before going live</p>
</div>
</div>
</div>
<div className="mt-8">
<button className="px-6 py-3 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center space-x-2">
<span>View Documentation</span>
<i className="w-4 h-4" data-lucide="arrow-right"></i>
</button>
</div>
</div>
<div>
<div className="bg-gray-900 rounded-xl p-6 overflow-x-auto">
<div className="flex items-center justify-between mb-4">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
</div>
<span className="text-xs text-gray-400 font-mono">API Reference</span>
</div>
<pre className="text-sm text-gray-100 font-mono leading-relaxed"><code><span className="text-gray-500">// Create a dispute</span>
<span className="text-purple-400">const</span> dispute = <span className="text-purple-400">await</span> disputeflow.disputes.<span className="text-blue-400">create</span>({
  transaction_id: <span className="text-green-400">"txn_abc123"</span>,
  amount: <span className="text-orange-400">29.99</span>,
  currency: <span className="text-green-400">"USD"</span>,
  reason: <span className="text-green-400">"product_not_received"</span>,
  customer: {
    id: <span className="text-green-400">"cus_xyz789"</span>,
    email: <span className="text-green-400">"user@example.com"</span>
  },
  metadata: {
    order_id: <span className="text-green-400">"ord_456"</span>
  }
});

<span className="text-gray-500">// Returns:</span>
{
  id: <span className="text-green-400">"dsp_123"</span>,
  status: <span className="text-green-400">"analyzing"</span>,
  estimated_resolution: <span className="text-green-400">"2024-01-15T10:30:00Z"</span>,
  fraud_score: <span className="text-orange-400">0.12</span>
}</code></pre>
</div>
</div>
</div>
</div>
</section>

<section className="max-w-7xl mx-auto px-6 lg:px-8 py-24" id="pricing">
<div className="text-center mb-16">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-4">Simple per-dispute pricing</h2>
<p className="text-lg text-gray-600 max-w-2xl mx-auto">No monthly fees. No hidden costs. Pay only for disputes you process.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
<div className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-2">Development</h3>
<div className="flex items-baseline mb-1">
<span className="text-4xl font-semibold tracking-tight">Free</span>
</div>
<p className="text-sm text-gray-600">Test with unlimited sandbox disputes</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Full API access</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Sandbox environment</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Test mode disputes</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Community support</span>
</li>
</ul>
<button className="w-full px-4 py-2 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors">Start Building</button>
</div>
<div className="border-2 border-gray-900 rounded-xl p-8 relative">
<div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
<span className="bg-gray-900 text-white text-xs font-medium px-3 py-1 rounded-full">MOST POPULAR</span>
</div>
<div className="mb-6">
<h3 className="text-lg font-semibold mb-2">Production</h3>
<div className="flex items-baseline mb-1">
<span className="text-4xl font-semibold tracking-tight">$2</span>
<span className="text-gray-600 ml-2">/dispute</span>
</div>
<p className="text-sm text-gray-600">Simple usage-based pricing</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Everything in Development</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">AI-powered resolution</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Fraud detection</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Email support</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">99.9% uptime SLA</span>
</li>
</ul>
<button className="w-full px-4 py-2 bg-gray-900 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors">Get API Key</button>
</div>
<div className="border border-gray-200 rounded-xl p-8 hover:border-gray-300 transition-colors">
<div className="mb-6">
<h3 className="text-lg font-semibold mb-2">Enterprise</h3>
<div className="flex items-baseline mb-1">
<span className="text-4xl font-semibold tracking-tight">Custom</span>
</div>
<p className="text-sm text-gray-600">Volume discounts &amp; custom features</p>
</div>
<ul className="space-y-3 mb-8">
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Everything in Production</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Custom workflows</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Dedicated support</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Volume discounts</span>
</li>
<li className="flex items-start space-x-3">
<i className="w-5 h-5 text-gray-900 flex-shrink-0" data-lucide="check"></i>
<span className="text-sm text-gray-600">Custom SLAs</span>
</li>
</ul>
<button className="w-full px-4 py-2 border border-gray-300 text-gray-900 font-medium rounded-lg hover:bg-gray-50 transition-colors">Contact Sales</button>
</div>
</div>
<p className="text-center text-sm text-gray-500 mt-12">First 100 disputes free for all new accounts • No credit card required</p>
</section>

<section className="bg-gray-900 text-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-24">
<div className="max-w-3xl mx-auto text-center">
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight mb-6">Ship disputes in 5 minutes</h2>
<p className="text-lg text-gray-400 mb-10">Join hundreds of MCP server builders who've added dispute resolution to their agents.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-6 py-3 bg-white text-gray-900 font-medium rounded-lg hover:bg-gray-100 transition-colors">Get Your API Key</button>
<button className="w-full sm:w-auto px-6 py-3 border border-gray-700 text-white font-medium rounded-lg hover:bg-gray-800 transition-colors inline-flex items-center justify-center space-x-2">
<span>Read the Docs</span>
<i className="w-4 h-4" data-lucide="book-open"></i>
</button>
</div>
<p className="text-sm text-gray-500 mt-6">Free sandbox • First 100 disputes free • 5 minute integration</p>
</div>
</div>
</section>

<footer className="border-t border-gray-200 bg-white">
<div className="max-w-7xl mx-auto px-6 lg:px-8 py-12">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-sm font-semibold mb-4">Product</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Features</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Pricing</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">API Reference</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Developers</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Documentation</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">API Status</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">SDKs</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">GitHub</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Resources</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Blog</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Guides</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Case Studies</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Community</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-semibold mb-4">Company</h4>
<ul className="space-y-3">
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">About</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Privacy</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Terms</a></li>
<li><a className="text-sm text-gray-600 hover:text-gray-900 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-gray-200 pt-8 flex flex-col md:flex-row items-center justify-between">
<div className="text-xl font-semibold tracking-tight mb-4 md:mb-0">DISPUTEFLOW</div>
<p className="text-sm text-gray-600">© 2024 DisputeFlow. The dispute layer for agentic payments.</p>
</div>
</div>
</footer>


    </>
  );
}
