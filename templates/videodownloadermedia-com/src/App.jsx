import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        const btn = document.getElementById('downloadBtn');
        const input = document.getElementById('heroInput');
        const processingArea = document.getElementById('processingArea');

        btn.addEventListener('click', () => {
            const val = input.value;
            if(!val) {
                input.focus();
                input.classList.add('placeholder-red-400');
                setTimeout(() => input.classList.remove('placeholder-red-400'), 500);
                return;
            }

            // Simulate Processing
            processingArea.classList.remove('hidden');
            btn.disabled = true;
            btn.innerHTML = `<iconify-icon icon="svg-spinners:ring-resize" width="16"></iconify-icon> Processing`;

            setTimeout(() => {
                processingArea.classList.add('hidden');
                btn.disabled = false;
                btn.innerHTML = `Download <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>`;
                
                // Alert simulation
                alert("This is a demo! In a real app, the file would download now.");
            }, 2000);
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 grid-bg opacity-40 mask-image-gradient"></div>
<div className="fixed top-[-20%] left-[-10%] w-[600px] h-[600px] bg-indigo-600/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="fixed bottom-[-20%] right-[-10%] w-[600px] h-[600px] bg-cyan-600/10 rounded-full blur-[120px] pointer-events-none"></div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-neutral-950/80 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 bg-gradient-to-br from-indigo-500 to-cyan-500 rounded-lg flex items-center justify-center text-white shadow-lg shadow-indigo-500/20 group-hover:scale-105 transition-transform">
<iconify-icon icon="solar:box-linear" strokeWidth="2" width="20"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">MediaStack</span>
</a>
<div className="hidden md:flex items-center gap-6 text-xs font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#developers">Developers</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="hover:text-white transition-colors flex items-center gap-1" href="#">
                        Resources <iconify-icon icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</a>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-neutral-400 hover:text-white transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
<div className="h-4 w-px bg-white/10"></div>
<a className="text-xs font-medium text-white hover:text-indigo-400 transition-colors" href="#">Sign in</a>
<a className="text-xs font-medium bg-white text-black px-3 py-1.5 rounded-full hover:bg-neutral-200 transition-colors" href="#">Get Started</a>
</div>
</div>
</nav>

<section className="relative pt-24 pb-32 px-6 overflow-hidden">
<div className="max-w-4xl mx-auto text-center space-y-8 relative z-10">

<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/20 bg-indigo-500/10 text-[10px] text-indigo-300 font-medium uppercase tracking-wide">
<span className="w-1.5 h-1.5 rounded-full bg-indigo-400 animate-pulse"></span>
                v2.0 Now Available
            </div>
<h1 className="text-5xl md:text-7xl font-medium tracking-tight text-white leading-[1.1]">
                The universal API for <br/>
<span className="text-gradient">media extraction.</span>
</h1>
<p className="text-lg text-neutral-400 max-w-xl mx-auto leading-relaxed">
                Download videos, extract audio, and process media from thousands of sources with a single link. Built for developers and creators.
            </p>

<div className="mt-12 max-w-2xl mx-auto">
<div className="glass-card p-2 rounded-2xl shadow-2xl ring-1 ring-white/10 group focus-within:ring-indigo-500/50 transition-all">
<div className="flex items-center bg-neutral-900/50 rounded-xl px-4 py-2">
<iconify-icon className="text-neutral-500 mr-3" icon="solar:link-circle-linear" width="24"></iconify-icon>
<input className="flex-1 bg-transparent border-none text-white placeholder-neutral-500 focus:outline-none text-sm h-10 w-full" id="heroInput" placeholder="Paste any social media link..." type="text"/>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white px-4 py-1.5 rounded-lg text-xs font-medium transition-colors flex items-center gap-2" id="downloadBtn">
                            Download
                            <iconify-icon icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</div>

<div className="hidden mt-2 p-2" id="processingArea">
<div className="loader-bar rounded-full mb-3"></div>
<p className="text-xs text-neutral-500 text-center">Analyzing metadata...</p>
</div>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-x-8 gap-y-4 text-neutral-500 grayscale opacity-60">
<iconify-icon icon="logos:youtube" width="20"></iconify-icon>
<iconify-icon icon="logos:twitter" width="20"></iconify-icon>
<iconify-icon icon="logos:tiktok-icon" width="20"></iconify-icon>
<iconify-icon icon="logos:spotify-icon" width="20"></iconify-icon>
<iconify-icon icon="logos:vimeo-icon" width="20"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="features">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Everything you need</h2>
<p className="text-neutral-400 mt-2">Powerful tools packaged in a beautiful interface.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 glass-card rounded-3xl p-8 relative overflow-hidden group">
<div className="absolute top-0 right-0 p-8 opacity-20 group-hover:opacity-40 transition-opacity">
<iconify-icon icon="solar:graph-up-linear" width="120"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">High Performance</h3>
<p className="text-sm text-neutral-400 max-w-sm mb-8">
                        Optimized for speed. Our globally distributed network ensures the fastest download speeds regardless of your location.
                    </p>
<div className="grid grid-cols-3 gap-4">
<div className="bg-neutral-800/50 rounded-xl p-4 border border-white/5">
<div className="text-2xl font-medium text-indigo-400">99.9%</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Uptime</div>
</div>
<div className="bg-neutral-800/50 rounded-xl p-4 border border-white/5">
<div className="text-2xl font-medium text-cyan-400">4K</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Quality</div>
</div>
<div className="bg-neutral-800/50 rounded-xl p-4 border border-white/5">
<div className="text-2xl font-medium text-green-400">0.2s</div>
<div className="text-[10px] text-neutral-500 uppercase tracking-wider mt-1">Latency</div>
</div>
</div>
</div>

<div className="glass-card rounded-3xl p-8 flex flex-col justify-between group">
<div>
<div className="w-10 h-10 bg-indigo-500/20 rounded-lg flex items-center justify-center text-indigo-400 mb-6">
<iconify-icon icon="solar:shield-check-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Secure &amp; Private</h3>
<p className="text-sm text-neutral-400">
                            No logs policy. Your downloads are processed in memory and never stored on our servers.
                        </p>
</div>
<div className="mt-8 flex items-center gap-2 text-xs text-green-400 bg-green-900/10 w-fit px-3 py-1 rounded-full border border-green-500/20">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
                        End-to-end Encrypted
                    </div>
</div>

<div className="glass-card rounded-3xl p-8 group hover:border-indigo-500/30 transition-colors">
<iconify-icon className="text-neutral-300 mb-4" icon="solar:smartphone-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Mobile Ready</h3>
<p className="text-sm text-neutral-400">Responsive design that works perfectly on iOS and Android devices.</p>
</div>

<div className="glass-card rounded-3xl p-8 group hover:border-cyan-500/30 transition-colors">
<iconify-icon className="text-neutral-300 mb-4" icon="solar:code-circle-linear" width="32"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-2">Robust API</h3>
<p className="text-sm text-neutral-400">Integrate our engine into your own apps with just a few lines of code.</p>
</div>

<div className="md:col-span-1 glass-card rounded-3xl p-8 relative overflow-hidden">
<div className="absolute -right-4 -bottom-4 opacity-10 rotate-12">
<iconify-icon icon="solar:cloudd-linear" width="140"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white mb-2">Cloud Sync</h3>
<p className="text-sm text-neutral-400 mb-6">Save directly to Dropbox or Google Drive.</p>
<button className="text-xs bg-white text-black px-4 py-2 rounded-lg font-medium hover:bg-neutral-200 transition">Connect Account</button>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative" id="developers">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-16">
<div className="flex-1 space-y-8">
<h2 className="text-3xl md:text-4xl font-medium text-white tracking-tight">Built for Developers.</h2>
<p className="text-lg text-neutral-400 leading-relaxed">
                    Don't reinvent the wheel. Use our robust API to handle complex media extraction, format conversion, and metadata parsing.
                </p>
<div className="space-y-4">
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Simple REST API endpoints</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Webhooks for long-processing tasks</span>
</div>
<div className="flex items-center gap-4">
<div className="w-6 h-6 rounded-full bg-indigo-500/20 flex items-center justify-center text-indigo-400 text-xs">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
</div>
<span className="text-sm text-neutral-300">Detailed metadata response</span>
</div>
</div>
<div className="pt-4">
<a className="text-indigo-400 hover:text-indigo-300 text-sm font-medium flex items-center gap-2" href="#">
                        Read Documentation <iconify-icon icon="solar:arrow-right-linear"></iconify-icon>
</a>
</div>
</div>

<div className="flex-1 w-full max-w-xl">
<div className="bg-[#0d1117] border border-neutral-800 rounded-xl overflow-hidden shadow-2xl">
<div className="flex items-center gap-2 px-4 py-3 border-b border-neutral-800 bg-neutral-900/50">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<span className="ml-4 text-xs text-neutral-500 font-mono">request.js</span>
</div>
<div className="p-6 overflow-x-auto">
<pre className="font-mono text-xs leading-relaxed">
<span className="text-purple-400">const</span> <span className="text-blue-400">response</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-yellow-200">fetch</span><span className="text-neutral-400">('</span><span className="text-green-400">https://api.mediastack.com/v1/extract</span><span className="text-neutral-400">', {</span>
  <span className="text-blue-400">method</span><span className="text-neutral-400">: '</span><span className="text-green-400">POST</span><span className="text-neutral-400">',</span>
  <span className="text-blue-400">headers</span><span className="text-neutral-400">: {</span>
    <span className="text-neutral-400">'</span><span className="text-green-400">Authorization</span><span className="text-neutral-400">': '</span><span className="text-green-400">Bearer sk_live_51...</span><span className="text-neutral-400">',</span>
    <span className="text-neutral-400">'</span><span className="text-green-400">Content-Type</span><span className="text-neutral-400">': '</span><span className="text-green-400">application/json</span><span className="text-neutral-400">'</span>
  <span className="text-neutral-400">},</span>
  <span className="text-blue-400">body</span><span className="text-neutral-400">: </span><span className="text-yellow-200">JSON</span><span className="text-neutral-400">.</span><span className="text-yellow-200">stringify</span><span className="text-neutral-400">({</span>
    <span className="text-blue-400">url</span><span className="text-neutral-400">: '</span><span className="text-green-400">https://youtube.com/watch?v=...</span><span className="text-neutral-400">',</span>
    <span className="text-blue-400">format</span><span className="text-neutral-400">: '</span><span className="text-green-400">mp4</span><span className="text-neutral-400">',</span>
    <span className="text-blue-400">quality</span><span className="text-neutral-400">: '</span><span className="text-green-400">1080p</span><span className="text-neutral-400">'</span>
  <span className="text-neutral-400">})</span>
<span className="text-neutral-400">});</span>

<span className="text-purple-400">const</span> <span className="text-blue-400">data</span> <span className="text-white">=</span> <span className="text-purple-400">await</span> <span className="text-blue-400">response</span><span className="text-neutral-400">.</span><span className="text-yellow-200">json</span><span className="text-neutral-400">();</span>
<span className="text-neutral-500">// Returns direct download link &amp; metadata</span>
</pre>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 bg-neutral-900/20" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl font-medium text-white tracking-tight">Simple pricing</h2>
<p className="text-neutral-400 mt-2">Start for free, scale as you grow.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-neutral-400">Hobby</span>
<div className="text-3xl font-medium text-white mt-2">$0 <span className="text-sm text-neutral-500 font-normal">/mo</span></div>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            5 Downloads / day
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            720p Quality Cap
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Standard Speed
                        </li>
</ul>
<a className="w-full block text-center bg-neutral-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-700 transition" href="#">Get Started</a>
</div>

<div className="bg-neutral-900/80 border border-indigo-500/50 rounded-2xl p-8 flex flex-col relative shadow-2xl shadow-indigo-900/20">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-indigo-600 text-white text-[10px] font-medium px-3 py-0.5 rounded-full tracking-wide">POPULAR</div>
<div className="mb-4">
<span className="text-sm font-medium text-indigo-400">Pro</span>
<div className="text-3xl font-medium text-white mt-2">$9 <span className="text-sm text-neutral-500 font-normal">/mo</span></div>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Downloads
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            4K &amp; 8K Support
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Servers
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Audio Extraction
                        </li>
</ul>
<a className="w-full block text-center bg-white text-black py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-200 transition" href="#">Start Trial</a>
</div>

<div className="bg-neutral-900 border border-neutral-800 rounded-2xl p-8 flex flex-col">
<div className="mb-4">
<span className="text-sm font-medium text-neutral-400">API</span>
<div className="text-3xl font-medium text-white mt-2">$29 <span className="text-sm text-neutral-500 font-normal">/mo</span></div>
</div>
<ul className="flex-1 space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            10,000 API Calls
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Webhooks
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-500" icon="solar:check-circle-linear"></iconify-icon>
                            Premium Support
                        </li>
</ul>
<a className="w-full block text-center bg-neutral-800 text-white py-2.5 rounded-lg text-sm font-medium hover:bg-neutral-700 transition" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-neutral-800 bg-neutral-950">
<div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center text-black">
<iconify-icon icon="solar:box-linear" width="14"></iconify-icon>
</div>
<span className="text-sm font-medium text-white">MediaStack</span>
</div>
<p className="text-xs text-neutral-500">
                    © 2024 MediaStack Inc.<br/>
                    San Francisco, CA
                </p>
<div className="flex gap-4 mt-6">
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brands-twitter-linear" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brands-github-linear" width="18"></iconify-icon></a>
<a className="text-neutral-500 hover:text-white" href="#"><iconify-icon icon="solar:brands-discord-linear" width="18"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Product</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300" href="#">Features</a></li>
<li><a className="hover:text-neutral-300" href="#">Integrations</a></li>
<li><a className="hover:text-neutral-300" href="#">Pricing</a></li>
<li><a className="hover:text-neutral-300" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Resources</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300" href="#">Documentation</a></li>
<li><a className="hover:text-neutral-300" href="#">API Reference</a></li>
<li><a className="hover:text-neutral-300" href="#">Community</a></li>
<li><a className="hover:text-neutral-300" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="text-sm font-medium text-white mb-4">Legal</h4>
<ul className="space-y-2 text-xs text-neutral-500">
<li><a className="hover:text-neutral-300" href="#">Privacy Policy</a></li>
<li><a className="hover:text-neutral-300" href="#">Terms of Service</a></li>
</ul>
</div>
</div>
</footer>



    </>
  );
}
