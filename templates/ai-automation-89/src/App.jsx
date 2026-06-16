import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Simple toggle interactivity logic
        const toggle = document.getElementById('toggle');
        if(toggle) {
            toggle.addEventListener('change', function() {
                // Logic to switch pricing display would go here
                console.log('Pricing switched to ' + (this.checked ? 'Yearly' : 'Monthly'));
            });
        }

        // Login Modal Logic
        function toggleLogin() {
            const modal = document.getElementById('login-modal');
            const content = document.getElementById('login-content');
            
            if (modal.classList.contains('hidden')) {
                // Open modal
                modal.classList.remove('hidden');
                modal.classList.add('flex');
                
                // Small delay to allow display:flex to apply before opacity transition
                setTimeout(() => {
                    content.classList.remove('scale-95', 'opacity-0');
                    content.classList.add('scale-100', 'opacity-100');
                }, 10);
            } else {
                // Close modal
                content.classList.remove('scale-100', 'opacity-100');
                content.classList.add('scale-95', 'opacity-0');
                
                // Wait for transition to finish before hiding
                setTimeout(() => {
                    modal.classList.remove('flex');
                    modal.classList.add('hidden');
                }, 300);
            }
        }

        // Google Login Simulation
        function loginWithGoogle() {
            // Note: In a production environment, you would use the official Google Identity Services SDK
            // or your backend's OAuth endpoint.
            // This simulation opens the Google OAuth 2.0 endpoint in a popup window to demonstrate the UI behavior.
            
            const client_id = "YOUR_CLIENT_ID_HERE"; // Placeholder
            const redirect_uri = "http://localhost";
            const url = `https://accounts.google.com/o/oauth2/v2/auth?client_id=${client_id}&redirect_uri=${redirect_uri}&response_type=token&scope=email profile openid`;
            
            const width = 500;
            const height = 600;
            const left = (window.innerWidth - width) / 2;
            const top = (window.innerHeight - height) / 2;
            
            window.open(
                url, 
                'google_login', 
                `width=${width},height=${height},top=${top},left=${left},scrollbars=yes`
            );
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter text-lg group-hover:text-neutral-200 transition-colors">AURA</span>
</a>

<div className="hidden md:flex items-center gap-8 text-sm font-medium">
<a className="hover:text-white transition-colors" href="#solutions">Solutions</a>
<a className="hover:text-white transition-colors" href="#method">Method</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>

<div className="flex items-center gap-4">
<button className="text-sm font-medium hover:text-white transition-colors hidden sm:block" onclick="toggleLogin()">Log in</button>
<a className="bg-white text-black text-xs font-medium px-4 py-2 rounded-full hover:bg-neutral-200 transition-colors tracking-wide" href="#">
                    Book Audit
                </a>
</div>
</div>
</nav>

<div aria-modal="true" className="fixed inset-0 z-[100] hidden items-center justify-center" id="login-modal" role="dialog">

<div className="absolute inset-0 bg-black/60 backdrop-blur-sm transition-opacity" onclick="toggleLogin()"></div>

<div className="relative z-10 w-full max-w-sm bg-[#0a0a0a] border border-white/10 rounded-2xl p-8 shadow-2xl transform transition-all duration-300 scale-95 opacity-0" id="login-content">
<button className="absolute top-4 right-4 text-neutral-500 hover:text-white transition-colors" onclick="toggleLogin()">
<iconify-icon icon="solar:close-circle-linear" width="24"></iconify-icon>
</button>
<div className="text-center mb-8">
<div className="w-10 h-10 bg-white rounded-full flex items-center justify-center text-black mx-auto mb-4">
<iconify-icon icon="solar:infinity-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-medium text-white tracking-tight">Welcome back</h3>
<p className="text-sm text-neutral-500 mt-2">Enter your credentials to access the console.</p>
</div>
<form className="space-y-4" onsubmit="event.preventDefault();">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5 ml-1">Email address</label>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="solar:letter-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-neutral-900/50 border border-white/10 text-white text-sm rounded-lg block pl-10 p-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600" placeholder="name@company.com" type="email"/>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-1.5 ml-1">
<label className="block text-xs font-medium text-neutral-400">Password</label>
<a className="text-xs text-indigo-400 hover:text-indigo-300" href="#">Forgot?</a>
</div>
<div className="relative">
<div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none text-neutral-500">
<iconify-icon icon="solar:lock-keyhole-linear" width="18"></iconify-icon>
</div>
<input className="w-full bg-neutral-900/50 border border-white/10 text-white text-sm rounded-lg block pl-10 p-2.5 focus:ring-2 focus:ring-indigo-500/20 focus:border-indigo-500 outline-none transition-all placeholder-neutral-600" placeholder="••••••••" type="password"/>
</div>
</div>
<button className="w-full bg-white text-black font-medium text-sm rounded-lg px-5 py-2.5 hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-white/20 transition-all flex items-center justify-center gap-2 group mt-2">
                    Sign in
                    <iconify-icon className="group-hover:translate-x-0.5 transition-transform" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</button>
</form>
<div className="relative my-6">
<div className="absolute inset-0 flex items-center">
<div className="w-full border-t border-white/5"></div>
</div>
<div className="relative flex justify-center text-xs">
<span className="px-2 bg-[#0a0a0a] text-neutral-600">Or continue with</span>
</div>
</div>
<div className="grid grid-cols-2 gap-3">

<button className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 border border-white/5 rounded-lg text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors relative overflow-hidden group" onclick="loginWithGoogle()">
<span className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_1.5s_infinite]"></span>
<iconify-icon icon="devicon-plain:google" width="14"></iconify-icon>
                    Google
                </button>
<button className="flex items-center justify-center gap-2 px-4 py-2 bg-neutral-900 border border-white/5 rounded-lg text-xs font-medium text-neutral-300 hover:bg-neutral-800 hover:text-white transition-colors">
<iconify-icon icon="mdi:github" width="16"></iconify-icon>
                    GitHub
                </button>
</div>
<p className="text-center mt-6 text-xs text-neutral-500">
                Don't have an account? <a className="text-white hover:underline decoration-white/20 underline-offset-4" href="#">Request access</a>
</p>
</div>
</div>

<main className="relative pt-32 pb-20 sm:pt-40 sm:pb-24 overflow-hidden">

<div className="absolute inset-0 z-0 bg-grid opacity-20 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[800px] h-[400px] bg-indigo-500/20 blur-[120px] rounded-full pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-white/10 bg-white/5 text-xs font-medium text-indigo-300 mb-8 hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
                AI Agent V2.0 is now live
            </div>
<h1 className="text-5xl sm:text-7xl font-medium text-white tracking-tight mb-8 leading-[1.1]">
                Scale operations with <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 via-white to-indigo-300 animate-gradient">intelligent autonomy.</span>
</h1>
<p className="text-lg sm:text-xl text-neutral-400 max-w-2xl mx-auto mb-10 font-light leading-relaxed">
                Replace manual workflows with self-learning AI agents. We build custom automation infrastructures that reclaim thousands of hours for modern enterprises.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto bg-white text-black px-8 py-3.5 rounded-full font-medium text-sm hover:bg-neutral-200 transition-all flex items-center justify-center gap-2 group">
                    Start Automating
                    <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="solar:arrow-right-linear" width="18"></iconify-icon>
</button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-full font-medium text-sm text-neutral-300 border border-neutral-800 hover:border-neutral-600 hover:text-white transition-all bg-black/50 backdrop-blur-sm">
                    View Case Studies
                </button>
</div>
</div>
</main>

<section className="border-y border-white/5 bg-black/50 py-10">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-xs font-medium text-neutral-500 uppercase tracking-widest mb-8">Trusting the infrastructure</p>
<div className="flex flex-wrap justify-center items-center gap-12 sm:gap-20 opacity-50 grayscale hover:grayscale-0 transition-all duration-500">

<span className="text-xl font-bold tracking-tighter text-white">ACME<span className="font-light">CORP</span></span>
<span className="text-xl font-medium tracking-tighter text-white italic">StarkInd</span>
<span className="text-xl font-semibold tracking-tight text-white">O<span className="tracking-widest">S</span>CORP</span>
<span className="text-xl font-bold tracking-tighter text-white">CYBER<span className="text-indigo-400">DYNE</span></span>
<span className="text-xl font-medium tracking-tight text-white">Massive</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative" id="solutions">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">Neural Architecture</h2>
<p className="text-neutral-400 max-w-xl">We don't just write scripts. We deploy cognitive agents that understand context, execute decisions, and learn from outcomes.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-indigo-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-indigo-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:graph-new-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Predictive Analytics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Turn raw data into foresight. Our agents monitor KPIs and forecast trends with 94% accuracy.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-purple-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:chat-round-line-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Support Autonomy</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Level 1 and 2 support handled entirely by AI. Human handover only when complex empathy is required.</p>
</div>

<div className="group relative p-8 rounded-2xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden">
<div className="absolute inset-0 bg-gradient-to-br from-emerald-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 rounded-lg bg-neutral-800 flex items-center justify-center mb-6 text-emerald-400 group-hover:scale-110 transition-transform duration-300">
<iconify-icon icon="solar:database-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-white mb-2">Data Extraction</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Scrape, structure, and sync data from any source. PDF, Web, or API—processed in milliseconds.</p>
</div>

<div className="md:col-span-3 group relative p-8 sm:p-12 rounded-2xl bg-neutral-900/20 border border-white/10 hover:border-white/20 transition-all duration-300 overflow-hidden flex flex-col md:flex-row items-center gap-12">
<div className="flex-1">
<div className="inline-flex items-center gap-2 text-indigo-400 mb-4">
<iconify-icon icon="solar:bolt-linear" width="20"></iconify-icon>
<span className="text-xs font-medium uppercase tracking-wider">Instant Integration</span>
</div>
<h3 className="text-2xl font-medium text-white mb-4">Connect with your existing stack</h3>
<p className="text-neutral-400 leading-relaxed mb-6">Our agents live where you work. Seamless integration with Slack, Notion, Salesforce, HubSpot, and 50+ other enterprise tools without disrupting your current workflow.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                API-first architecture
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                SOC2 Compliant Security
                            </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                                Real-time webhooks
                            </li>
</ul>
</div>

<div className="flex-1 w-full relative h-64 bg-neutral-950 border border-neutral-800 rounded-xl flex items-center justify-center overflow-hidden">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-3/4 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/50 to-transparent"></div>
<div className="absolute w-[1px] h-3/4 bg-gradient-to-b from-transparent via-indigo-500/50 to-transparent"></div>
</div>

<div className="relative z-10 w-16 h-16 bg-neutral-900 border border-indigo-500/30 rounded-full flex items-center justify-center shadow-[0_0_30px_-5px_rgba(99,102,241,0.3)]">
<iconify-icon className="text-indigo-400" icon="solar:cpu-linear" width="32"></iconify-icon>
</div>

<div className="absolute top-8 left-12 p-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-500 animate-bounce" style={{animationDuration: '3s'}}>
<iconify-icon icon="solar:letter-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-8 right-12 p-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-500 animate-bounce" style={{animationDuration: '4s'}}>
<iconify-icon icon="solar:calendar-linear" width="20"></iconify-icon>
</div>
<div className="absolute top-8 right-12 p-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-500 animate-bounce" style={{animationDuration: '5s'}}>
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<div className="absolute bottom-8 left-12 p-2 bg-neutral-900 border border-neutral-800 rounded-md text-neutral-500 animate-bounce" style={{animationDuration: '3.5s'}}>
<iconify-icon icon="solar:wallet-linear" width="20"></iconify-icon>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-900/10">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row items-center justify-between gap-12">
<div className="flex-1">
<h2 className="text-3xl font-medium text-white tracking-tight mb-4">Quantifiable Efficiency</h2>
<p className="text-neutral-400 mb-8 max-w-md">See exactly how much time and resources your team saves by offloading repetitive cognitive tasks to our systems.</p>
<div className="flex gap-8">
<div>
<div className="text-4xl font-medium text-white mb-1">10k+</div>
<div className="text-sm text-neutral-500">Hours Saved</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1">24/7</div>
<div className="text-sm text-neutral-500">Uptime</div>
</div>
<div>
<div className="text-4xl font-medium text-white mb-1">0%</div>
<div className="text-sm text-neutral-500">Latency</div>
</div>
</div>
</div>
<div className="flex-1 w-full bg-neutral-950 border border-white/10 rounded-xl p-6 shadow-2xl">

<div className="flex items-center justify-between mb-6 border-b border-white/5 pb-4">
<span className="text-xs font-medium text-neutral-400 uppercase">Live Pipeline Status</span>
<div className="flex items-center gap-2">
<span className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse"></span>
<span className="text-xs text-green-500 font-medium">Active</span>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-blue-500/10 flex items-center justify-center text-blue-400">
<iconify-icon icon="solar:file-text-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-white">Lead Qualification</div>
<div className="text-xs text-neutral-500">Processed 142 leads</div>
</div>
</div>
<div className="text-xs font-mono text-neutral-400">230ms</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-purple-500/10 flex items-center justify-center text-purple-400">
<iconify-icon icon="solar:mailbox-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-white">Email Outreach</div>
<div className="text-xs text-neutral-500">Sent 85 customized replies</div>
</div>
</div>
<div className="text-xs font-mono text-neutral-400">112ms</div>
</div>

<div className="flex items-center justify-between group">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded bg-orange-500/10 flex items-center justify-center text-orange-400">
<iconify-icon icon="solar:pie-chart-linear" width="16"></iconify-icon>
</div>
<div>
<div className="text-sm text-white">Report Generation</div>
<div className="text-xs text-neutral-500">Weekly analysis compiled</div>
</div>
</div>
<div className="text-xs font-mono text-neutral-400">450ms</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="pricing">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl sm:text-4xl font-medium text-white tracking-tight mb-4">Transparent Investment</h2>
<p className="text-neutral-400">Choose the model that fits your scaling velocity.</p>

<div className="mt-8 flex items-center justify-center gap-3">
<span className="text-sm font-medium text-white">Monthly</span>
<label className="flex items-center cursor-pointer relative" htmlFor="toggle">
<input className="sr-only toggle-checkbox" id="toggle" type="checkbox"/>
<div className="toggle-label w-11 h-6 bg-neutral-800 rounded-full border border-neutral-700 transition-colors duration-200 ease-in-out"></div>
<div className="dot absolute left-1 top-1 bg-white w-4 h-4 rounded-full transition-transform duration-200 ease-in-out transform translate-x-0 toggle-checkbox:checked:translate-x-full"></div>
</label>
<span className="text-sm font-medium text-neutral-500">Yearly <span className="text-indigo-400 text-xs ml-1">-20%</span></span>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="p-8 rounded-2xl border border-white/10 bg-black hover:border-white/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Starter</h3>
<p className="text-sm text-neutral-500 mt-2">For prototyping and small teams.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white tracking-tight">$2,500</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            1 Custom Workflow
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            Weekly Maintenance
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            Email Support
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">Get Started</a>
</div>

<div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-neutral-900/20 shadow-[0_0_50px_-20px_rgba(99,102,241,0.2)]">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 px-3 py-0.5 rounded-full bg-indigo-500 text-white text-[10px] font-bold uppercase tracking-widest">Most Popular</div>
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Growth</h3>
<p className="text-sm text-neutral-500 mt-2">Full departmental automation.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white tracking-tight">$5,000</span>
<span className="text-neutral-500">/mo</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            3 Connected Workflows
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Real-time Monitoring
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Priority Slack Support
                        </li>
<li className="flex items-center gap-3 text-sm text-white">
<iconify-icon className="text-indigo-400" icon="solar:check-circle-linear"></iconify-icon>
                            Data Analytics Dashboard
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-lg bg-white text-center text-sm font-medium text-black hover:bg-neutral-200 transition-colors" href="#">Scale Now</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-black hover:border-white/20 transition-colors">
<div className="mb-4">
<h3 className="text-lg font-medium text-white">Enterprise</h3>
<p className="text-sm text-neutral-500 mt-2">Custom infrastructure buildout.</p>
</div>
<div className="mb-6">
<span className="text-4xl font-medium text-white tracking-tight">Custom</span>
</div>
<ul className="space-y-4 mb-8">
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            Unlimited Workflows
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            Dedicated Engineer
                        </li>
<li className="flex items-center gap-3 text-sm text-neutral-300">
<iconify-icon className="text-neutral-600" icon="solar:check-circle-linear"></iconify-icon>
                            SLA Guarantees
                        </li>
</ul>
<a className="block w-full py-2.5 rounded-lg border border-white/10 text-center text-sm font-medium text-white hover:bg-white/5 transition-colors" href="#">Contact Sales</a>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 pt-16 pb-8 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-4" href="#">
<div className="w-6 h-6 bg-white rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:infinity-linear" width="16"></iconify-icon>
</div>
<span className="text-white font-medium tracking-tighter">AURA</span>
</a>
<p className="text-sm text-neutral-500">Automating the future of work, one workflow at a time.</p>
</div>
<div>
<h4 className="text-white font-medium mb-4">Product</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Company</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Customers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-medium mb-4">Legal</h4>
<ul className="space-y-2 text-sm text-neutral-500">
<li><a className="hover:text-indigo-400 transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5 gap-4">
<div className="text-xs text-neutral-600">© 2024 Aura Automation Inc. All rights reserved.</div>
<div className="flex gap-4">
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-x-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-linkedin-linear" width="20"></iconify-icon>
</a>
<a className="text-neutral-500 hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
