import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<header className="fixed top-0 w-full z-50 border-b border-neutral-900 bg-neutral-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">

<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2" href="#">
<iconify-icon className="text-xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                    NEXUS
                </a>

<nav className="hidden md:flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#">Products</a>
<a className="hover:text-white transition-colors" href="#">Docs</a>
<a className="hover:text-white transition-colors" href="#">Pricing</a>
<a className="hover:text-white transition-colors" href="#">Enterprise</a>
</nav>
</div>
<div className="flex items-center gap-4 text-sm font-medium">
<a className="text-neutral-400 hover:text-white transition-colors hidden sm:block" href="#">Sign in</a>
<a className="bg-white text-black px-4 py-2 rounded-md hover:bg-neutral-200 transition-colors flex items-center gap-2" href="#">
                    Start Building
                </a>
</div>
</div>
</header>

<main className="flex-grow pt-16">

<section className="relative pt-24 pb-32 overflow-hidden">
<div className="absolute inset-0 bg-grid-pattern opacity-50 z-0 mask-image:linear-gradient(to_bottom,white,transparent)"></div>
<div className="absolute inset-0 glow-bg z-0 pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 text-center">

<a className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-neutral-800 bg-neutral-900/50 text-xs font-medium text-neutral-300 hover:bg-neutral-800 transition-colors mb-8 backdrop-blur-sm" href="#">
<span className="flex h-2 w-2 rounded-full bg-white/80"></span>
                    Introducing Global Edge Routing for LLMs
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>

<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white max-w-4xl mx-auto leading-tight mb-6">
                    Run AI in production. <br className="hidden md:block"/> At infinite scale.
                </h1>

<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-normal leading-relaxed">
                    The unified inference platform built for engineering teams. Deploy models faster, autoscale seamlessly from zero to millions, and route requests globally with sub-millisecond overhead.
                </p>

<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-6 py-3 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Deploy a Model
                    </a>
<a className="w-full sm:w-auto bg-neutral-900 border border-neutral-800 text-white px-6 py-3 rounded-md font-medium text-sm hover:bg-neutral-800 transition-colors flex items-center justify-center gap-2" href="#">
<iconify-icon className="text-lg" icon="solar:document-text-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        Read Documentation
                    </a>
</div>

<div className="mt-20 relative max-w-5xl mx-auto">

<div className="absolute -inset-1 bg-gradient-to-r from-neutral-800 via-neutral-700 to-neutral-800 rounded-xl opacity-20 blur-lg"></div>

<div className="relative rounded-xl border border-neutral-800 bg-[#0a0a0a] shadow-2xl overflow-hidden flex flex-col">

<div className="h-10 border-b border-neutral-800 flex items-center px-4 gap-2 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
<div className="w-3 h-3 rounded-full bg-neutral-700"></div>
</div>
<div className="ml-4 flex items-center gap-2 text-xs text-neutral-500 font-mono">
<iconify-icon icon="solar:folder-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                nexus-cli
                            </div>
</div>

<div className="p-6 text-left font-mono text-sm overflow-x-auto relative">
<div className="text-neutral-500 mb-2">$ nexus deploy --model meta-llama/Llama-3-8b --scale auto</div>
<div className="text-white mb-1">Authenticating... <span className="text-neutral-500">Done</span></div>
<div className="text-white mb-1">Provisioning edge workers (US-East, EU-West)... <span className="text-neutral-500">Done</span></div>
<div className="text-white mb-1">Loading model weights to VRAM... <span className="text-neutral-500">Done</span></div>
<div className="text-white mb-4">Establishing health checks... <span className="text-neutral-500">Done</span></div>
<div className="border border-neutral-800 bg-neutral-900/50 rounded-md p-4 max-w-lg">
<div className="flex items-center gap-2 text-white font-sans font-medium mb-3">
<iconify-icon className="text-white" icon="solar:check-circle-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    Deployment Successful
                                </div>
<div className="grid grid-cols-2 gap-4 text-xs font-sans">
<div>
<div className="text-neutral-500 mb-1">Endpoint URL</div>
<div className="text-white flex items-center gap-1">
                                            https://api.nexus.run/v1/llama-3
                                            <iconify-icon className="text-neutral-500 cursor-pointer hover:text-white" icon="solar:copy-linear"></iconify-icon>
</div>
</div>
<div>
<div className="text-neutral-500 mb-1">Status</div>
<div className="text-white flex items-center gap-1">
<span className="w-2 h-2 rounded-full bg-white"></span>
                                            Active (0 replicas)
                                        </div>
</div>
</div>
</div>

<div className="absolute top-8 right-8 border border-neutral-800 bg-neutral-900/90 backdrop-blur-md rounded-lg p-4 font-sans hidden md:block shadow-xl">
<div className="text-xs text-neutral-400 font-medium mb-1 flex items-center justify-between gap-6">
                                    P99 Latency
                                    <iconify-icon icon="solar:chart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<div className="text-2xl font-semibold text-white tracking-tight">12.4ms</div>
<div className="text-xs text-neutral-500 mt-2 flex items-center gap-1">
<iconify-icon icon="solar:arrow-down-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                                    4% from last hour
                                </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="border-y border-neutral-900 bg-neutral-950/50 py-10">
<div className="max-w-7xl mx-auto px-6 text-center">
<p className="text-xs font-medium text-neutral-500 uppercase tracking-widest mb-6">Trusted by scaling engineering teams</p>
<div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 opacity-50 grayscale">

<span className="text-xl font-semibold tracking-tighter text-white">ACME CORP</span>
<span className="text-xl font-semibold tracking-tighter text-white">GLOBEX</span>
<span className="text-xl font-semibold tracking-tighter text-white">SOYUZ</span>
<span className="text-xl font-semibold tracking-tighter text-white">INITECH</span>
<span className="text-xl font-semibold tracking-tighter text-white">UMBRELLA</span>
</div>
</div>
</section>

<section className="py-24 md:py-32 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Infrastructure that gets out of your way.</h2>
<p className="text-neutral-400 text-lg">We abstract away the complexity of GPU orchestration, cold starts, and load balancing so you can focus on building.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-8 hover:bg-neutral-900/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:server-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Serverless Inference</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Run custom models or open-source foundation models on dedicated or shared GPUs. Pay only for compute time used down to the millisecond.</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-8 hover:bg-neutral-900/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Zero-to-N Autoscaling</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Our custom orchestration layer handles traffic spikes instantly. Scale from zero to thousands of replicas without managing Kubernetes.</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-8 hover:bg-neutral-900/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Global Edge Routing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Automatically route inference requests to the nearest available GPU region to minimize latency and ensure high availability globally.</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-8 hover:bg-neutral-900/80 transition-colors group">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:radar-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Deep Observability</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Get granular metrics on token generation speed, TTFT, request latency, and GPU utilization. Export traces to Datadog or Prometheus.</p>
</div>

<div className="bg-neutral-900/40 border border-neutral-800/80 rounded-xl p-8 hover:bg-neutral-900/80 transition-colors group md:col-span-2 lg:col-span-2 flex flex-col md:flex-row gap-8 items-center overflow-hidden relative">
<div className="flex-1 z-10">
<div className="w-10 h-10 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform">
<iconify-icon className="text-xl" icon="solar:shield-keyhole-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Enterprise Security &amp; VPC</h3>
<p className="text-sm text-neutral-400 leading-relaxed max-w-md">Deploy within your own VPC boundaries. SOC2 compliant architecture with granular IAM controls, private endpoints, and end-to-end encryption for sensitive workloads.</p>
</div>

<div className="w-full md:w-1/3 h-32 rounded border border-neutral-800 bg-neutral-950 flex items-center justify-center relative overflow-hidden z-10 mt-6 md:mt-0">
<div className="absolute inset-0 opacity-20 bg-[linear-gradient(45deg,transparent_25%,rgba(255,255,255,0.1)_50%,transparent_75%,transparent_100%)] bg-[length:250%_250%,100%_100%] animate-[bg-pan_3s_linear_infinite]"></div>
<iconify-icon className="text-4xl text-neutral-700" icon="solar:lock-password-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/20 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-20">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">From prototype to production.</h2>
<p className="text-neutral-400 text-lg max-w-2xl mx-auto">A unified workflow designed for modern AI teams.</p>
</div>
<div className="space-y-24">

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1 order-2 md:order-1">
<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-2 shadow-2xl relative overflow-hidden">

<div className="bg-[#1e1e1e] rounded-lg p-6 font-mono text-xs sm:text-sm text-neutral-300 overflow-x-auto">
<div className="flex gap-2 mb-4 border-b border-neutral-800 pb-2">
<span className="text-neutral-500">app.py</span>
</div>
<p><span className="text-purple-400">from</span> nexus <span className="text-purple-400">import</span> Client</p>
<p className="mt-2">client = Client(api_key=<span className="text-green-400">"nx_..."</span>)</p>
<p className="mt-4">response = client.chat.completions.create(</p>
<p className="pl-4">model=<span className="text-green-400">"custom-llama-v2"</span>,</p>
<p className="pl-4">messages=[{<span className="text-green-400">"role"</span>: <span className="text-green-400">"user"</span>, <span className="text-green-400">"content"</span>: <span className="text-green-400">"Hello"</span>}]</p>
<p>)</p>
</div>
</div>
</div>
<div className="flex-1 order-1 md:order-2">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-6 font-mono text-sm">01</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Drop-in compatibility.</h3>
<p className="text-neutral-400 text-base leading-relaxed">
                                Our API is 100% compatible with OpenAI's format. Point your existing application to our endpoint, change the API key, and instantly route traffic through our optimized inference engine. No code rewrites required.
                            </p>
</div>
</div>

<div className="flex flex-col md:flex-row items-center gap-12 lg:gap-24">
<div className="flex-1">
<div className="w-10 h-10 rounded-full border border-neutral-800 bg-neutral-900 flex items-center justify-center text-white mb-6 font-mono text-sm">02</div>
<h3 className="text-2xl font-medium tracking-tight text-white mb-4">Intelligent load balancing.</h3>
<p className="text-neutral-400 text-base leading-relaxed">
                                Behind the scenes, requests are routed through our global edge network. We maintain a warm pool of instances and intelligently distribute load based on continuous latency monitoring, virtually eliminating queue times.
                            </p>
</div>
<div className="flex-1">

<div className="rounded-xl border border-neutral-800 bg-neutral-950 p-8 shadow-2xl flex flex-col gap-6 relative">
<div className="flex justify-between items-center text-xs text-neutral-500 font-mono">
<span>INCOMING REQ</span>
<span>EDGE ROUTER</span>
<span>COMPUTE NODE</span>
</div>
<div className="relative h-24 flex items-center justify-between">

<div className="w-8 h-8 rounded-full border border-neutral-700 bg-neutral-900 flex items-center justify-center z-10">
<iconify-icon className="text-neutral-400" icon="solar:user-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="absolute left-8 right-8 h-[1px] bg-neutral-800 -z-0"></div>
<div className="absolute left-1/2 w-[1px] h-full bg-neutral-800 -z-0"></div>

<div className="w-12 h-12 rounded-lg border border-neutral-600 bg-neutral-800 flex items-center justify-center z-10 shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<iconify-icon className="text-white text-xl" icon="solar:routing-2-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</div>

<div className="flex flex-col gap-4 z-10">
<div className="px-3 py-1.5 rounded bg-[#1c1c1c] border border-neutral-800 text-xs text-neutral-400 font-mono flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-green-500"></span> US-East
                                        </div>
<div className="px-3 py-1.5 rounded bg-[#1c1c1c] border border-neutral-800 text-xs text-neutral-400 font-mono flex items-center gap-2">
<span className="w-1.5 h-1.5 rounded-full bg-neutral-600"></span> EU-West
                                        </div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-neutral-900">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-12 divide-y md:divide-y-0 md:divide-x divide-neutral-800 text-center">
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold text-white tracking-tighter mb-2">99.99<span className="text-neutral-500">%</span></div>
<div className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Uptime SLA</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold text-white tracking-tighter mb-2">&lt;10<span className="text-neutral-500">ms</span></div>
<div className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Routing Overhead</div>
</div>
<div className="pt-8 md:pt-0">
<div className="text-5xl font-semibold text-white tracking-tighter mb-2">0<span className="text-neutral-500">s</span></div>
<div className="text-sm font-medium text-neutral-400 uppercase tracking-widest">Cold Starts (Warm Pool)</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden">
<div className="absolute inset-0 glow-bg z-0 pointer-events-none opacity-50"></div>
<div className="max-w-4xl mx-auto px-6 relative z-10 text-center">
<iconify-icon className="text-4xl text-neutral-700 mb-8" icon="solar:quote-left-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h2 className="text-2xl md:text-4xl font-medium tracking-tight text-white leading-snug mb-8">
                    "Switching to Nexus felt like upgrading from a shared server to a dedicated CDN for our AI workloads. Our time-to-first-token dropped by 40%, and we completely stopped worrying about scaling during viral spikes."
                </h2>
<div className="flex flex-col items-center justify-center">
<div className="text-white font-medium text-base">Sarah Jenkins</div>
<div className="text-neutral-500 text-sm">VP of Engineering, Autopilot AI</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/50 border-t border-neutral-900">
<div className="max-w-4xl mx-auto px-6 text-center">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready for production?</h2>
<p className="text-neutral-400 text-lg mb-10 max-w-xl mx-auto">Join hundreds of engineering teams building fast, reliable AI applications on our infrastructure.</p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto bg-white text-black px-8 py-3 rounded-md font-medium text-sm hover:bg-neutral-200 transition-colors" href="#">
                        Create Free Account
                    </a>
<a className="w-full sm:w-auto bg-transparent border border-neutral-700 text-white px-8 py-3 rounded-md font-medium text-sm hover:bg-neutral-800 transition-colors" href="#">
                        Contact Sales
                    </a>
</div>
</div>
</section>
</main>

<footer className="border-t border-neutral-900 bg-neutral-950 pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-8 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="text-white font-medium tracking-tighter text-lg flex items-center gap-2 mb-4" href="#">
<iconify-icon className="text-xl" icon="solar:cpu-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
                        NEXUS
                    </a>
<p className="text-sm text-neutral-500 max-w-xs">
                        The unified infrastructure platform for deploying, scaling, and managing AI workloads in production.
                    </p>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Product</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Inference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Edge Routing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Observability</a></li>
<li><a className="hover:text-white transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Resources</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Changelog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium text-sm mb-4">Company</h4>
<ul className="space-y-3 text-sm text-neutral-500">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Legal</a></li>
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="border-t border-neutral-900 pt-8 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-neutral-600">© 2024 Nexus AI Infrastructure. All rights reserved.</p>
<div className="flex items-center gap-4 text-neutral-500">
<a className="hover:text-white transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:global-linear"></iconify-icon></a>
<a className="hover:text-white transition-colors" href="#">X (Twitter)</a>
<a className="hover:text-white transition-colors" href="#">GitHub</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
