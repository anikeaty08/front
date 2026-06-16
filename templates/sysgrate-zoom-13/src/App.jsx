import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
brand: {
50: '#eff6ff',
100: '#dbeafe',
500: '#3b82f6',
600: '#2563eb',
900: '#1e3a8a',
}
},
animation: {
'infinite-scroll': 'infinite-scroll 40s linear infinite',
},
keyframes: {
'infinite-scroll': {
from: { transform: 'translateX(0)' },
to: { transform: 'translateX(-50%)' },
}
}
}
}
}



        // State Management
        let appState = {
            product: null,
            integration: null,
            isLoggedIn: false
        };

        function navigateTo(viewId) {
            // Check auth for protected routes
            if (!appState.isLoggedIn && (viewId === 'dashboard' || viewId === 'integrations' || viewId === 'config')) {
                viewId = 'login';
            }

            // Hide all sections
            const sections = ['landing', 'login', 'dashboard', 'integrations', 'config'];
            sections.forEach(id => {
                const el = document.getElementById(`view-${id}`);
                if (el) {
                    el.classList.add('hidden');
                    el.classList.remove('block');
                }
            });

            // Show target
            const target = document.getElementById(`view-${viewId}`);
            if (target) {
                target.classList.remove('hidden');
                target.classList.add('block');
            }
            
            // Handle Navbar State
            const navActions = document.getElementById('nav-actions');
            const navProfile = document.getElementById('nav-profile');

            if (viewId === 'landing' || viewId === 'login') {
                navActions.classList.remove('hidden');
                navActions.classList.add('flex'); // Ensure flex is restored
                navProfile.classList.add('hidden');
                navProfile.classList.remove('flex');
            } else {
                navActions.classList.add('hidden');
                navActions.classList.remove('flex');
                navProfile.classList.remove('hidden');
                navProfile.classList.add('flex');
            }
            
            window.scrollTo(0,0);
        }

        function handleLogin() {
            const btn = document.getElementById('btn-login');
            const originalContent = btn.innerHTML;
            
            // Loading State
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin" width="18"></iconify-icon> Verifying credentials...';
            btn.disabled = true;
            btn.classList.add('opacity-90', 'cursor-not-allowed');

            setTimeout(() => {
                // Restore Button
                btn.innerHTML = originalContent;
                btn.disabled = false;
                btn.classList.remove('opacity-90', 'cursor-not-allowed');
                
                // Update State and Navigate
                appState.isLoggedIn = true;
                navigateTo('dashboard');
            }, 1200);
        }

        function selectProduct(productName) {
            appState.product = productName;
            const badge = document.getElementById('selected-product-badge');
            if(badge) badge.innerText = productName;
            navigateTo('integrations');
        }

        function selectIntegration(integrationName, iconName) {
            appState.integration = integrationName;
            const nameLabel = document.getElementById('config-name');
            if(nameLabel) nameLabel.innerText = integrationName;
            
            // Simple logic to show different icons in config if needed
            // currently just reusing the setup logic
            navigateTo('config');
        }

        function finishSetup() {
            const btn = document.getElementById('btn-connect');
            const originalContent = btn.innerHTML;
            
            btn.innerHTML = '<iconify-icon icon="lucide:loader-2" class="animate-spin" width="16"></iconify-icon> Verifying API Keys...';
            
            setTimeout(() => {
                document.getElementById('modal-success').classList.remove('hidden');
                btn.innerHTML = originalContent;
            }, 1500);
        }

        function logout() {
            appState = { product: null, integration: null, isLoggedIn: false };
            navigateTo('landing');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-zinc-100 glass-panel transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer group" onclick="navigateTo('landing')">
<div className="w-7 h-7 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-semibold text-xs tracking-tighter group-hover:bg-brand-600 transition-colors">SG</div>
<span className="text-zinc-900 font-semibold tracking-tight text-lg">Sysgrate</span>
</div>
<div className="hidden md:flex items-center gap-6" id="nav-actions">
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="navigateTo('landing')">Product</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="navigateTo('landing')">Solutions</button>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="navigateTo('landing')">Pricing</button>
<div className="h-4 w-px bg-zinc-200"></div>
<button className="text-sm font-medium text-zinc-500 hover:text-zinc-900 transition-colors" onclick="navigateTo('login')">Log in</button>
<button className="px-4 py-2 rounded-full bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-colors shadow-lg shadow-zinc-500/20" onclick="navigateTo('login')">Get Started</button>
</div>

<button className="md:hidden text-zinc-900" onclick="navigateTo('login')">
<iconify-icon icon="lucide:menu" width="24"></iconify-icon>
</button>

<div className="hidden flex items-center gap-3" id="nav-profile">
<div className="text-right hidden sm:block">
<p className="text-xs font-medium text-zinc-900">Acme Corp</p>
<p className="text-[10px] text-zinc-400">Enterprise Plan</p>
</div>
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-zinc-100 to-zinc-200 border border-zinc-200 flex items-center justify-center text-xs font-semibold text-zinc-700">AC</div>
<button className="p-2 text-zinc-400 hover:text-red-500 hover:bg-red-50 rounded-full transition-colors" onclick="logout()" title="Sign out">
<iconify-icon icon="lucide:log-out" width="16"></iconify-icon>
</button>
</div>
</div>
</nav>

<main className="pt-24 min-h-screen relative overflow-hidden">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[600px] bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-blue-50/80 via-white to-transparent opacity-70 -z-10 pointer-events-none"></div>

<section className="fade-in block" id="view-landing">

<div className="max-w-5xl mx-auto px-6 text-center mt-16 mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-zinc-200 bg-white/50 backdrop-blur-sm mb-8 shadow-sm hover:border-brand-200 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-zinc-600">Sysgrate v2.0 is now live</span>
</div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-zinc-900 mb-8 leading-[1.1]">
                    Unify your Zoom stack <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-600 to-indigo-600">with your enterprise data.</span>
</h1>
<p className="text-xl text-zinc-500 max-w-2xl mx-auto mb-10 leading-relaxed font-light">
                    The enterprise-grade middleware for Zoom Phone, Contact Center, and Meetings. Sync instantly with Salesforce, Zoho, SAP, and custom data lakes.
                </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg bg-zinc-900 text-white font-medium hover:bg-zinc-800 transition-all shadow-xl shadow-zinc-200 hover:translate-y-[-1px]" onclick="navigateTo('login')">
                        Start Integration
                    </button>
<button className="w-full sm:w-auto px-8 py-3.5 rounded-lg border border-zinc-200 bg-white text-zinc-700 font-medium hover:bg-zinc-50 transition-colors flex items-center justify-center gap-2">
<span>Book Demo</span>
<iconify-icon icon="lucide:calendar" width="16"></iconify-icon>
</button>
</div>
</div>

<div className="w-full bg-zinc-50/50 border-y border-zinc-100 py-10 mb-24 overflow-hidden">
<p className="text-center text-xs font-semibold text-zinc-400 uppercase tracking-widest mb-8">Trusted by teams utilizing</p>
<div className="relative flex overflow-x-hidden group">
<div className="animate-infinite-scroll flex gap-16 items-center whitespace-nowrap opacity-60 grayscale hover:grayscale-0 transition-all duration-500">

<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon> Zoho</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:cloud" width="24"></iconify-icon> Salesforce</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> LeadSquared</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:database" width="24"></iconify-icon> SAP C4C</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:briefcase" width="24"></iconify-icon> Dynamics 365</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:message-square" width="24"></iconify-icon> Zendesk</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:activity" width="24"></iconify-icon> HubSpot</div>

<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:hexagon" width="24"></iconify-icon> Zoho</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:cloud" width="24"></iconify-icon> Salesforce</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:layers" width="24"></iconify-icon> LeadSquared</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:database" width="24"></iconify-icon> SAP C4C</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:briefcase" width="24"></iconify-icon> Dynamics 365</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:message-square" width="24"></iconify-icon> Zendesk</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tight"><iconify-icon icon="lucide:activity" width="24"></iconify-icon> HubSpot</div>
</div>
</div>
</div>

<div className="max-w-6xl mx-auto px-6 mb-32">
<div className="mb-16">
<h2 className="text-3xl md:text-4xl font-semibold text-zinc-900 tracking-tight mb-4">Complete observability for voice &amp; video.</h2>
<p className="text-lg text-zinc-500 max-w-2xl">Sysgrate acts as the nervous system between your communications stack and your customer data platform.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-blue-50 flex items-center justify-center text-brand-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:phone-incoming" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">Intelligent CTI</h3>
<p className="text-zinc-500 leading-relaxed">Automatic call logging, recording sync, and click-to-dial directly from your CRM interface without installing plugins.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-indigo-50 flex items-center justify-center text-indigo-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:users" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">Contact Sync</h3>
<p className="text-zinc-500 leading-relaxed">Bi-directional contact synchronization. Ensure your Zoom Phone address book matches your Salesforce leads in real-time.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-teal-50 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:bar-chart-3" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">Analytics Stream</h3>
<p className="text-zinc-500 leading-relaxed">Pipe raw MOS scores, jitter data, and usage metrics into your BI tools (Tableau, PowerBI) for deep infrastructure analysis.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-orange-50 flex items-center justify-center text-orange-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:shield-check" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">Enterprise Security</h3>
<p className="text-zinc-500 leading-relaxed">SOC2 Type II compliant. Data is encrypted in transit and at rest. We support on-premise gateway options for regulated industries.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-purple-50 flex items-center justify-center text-purple-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:zap" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">Low Latency Webhooks</h3>
<p className="text-zinc-500 leading-relaxed">Trigger workflows in Zapier or Make.com instantly when a call ends, a recording processes, or a meeting starts.</p>
</div>

<div className="group p-8 rounded-2xl bg-white border border-zinc-200 hover:border-brand-200 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300">
<div className="w-12 h-12 rounded-xl bg-pink-50 flex items-center justify-center text-pink-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="lucide:mic-2" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-zinc-900 font-semibold text-xl mb-3">AI Transcription</h3>
<p className="text-zinc-500 leading-relaxed">Connect specialized AI engines (Gong, Chorus, or custom LLMs) to your Zoom audio streams for custom compliance monitoring.</p>
</div>
</div>
</div>

<div className="bg-zinc-900 text-white py-24 relative overflow-hidden">
<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4">How Sysgrate works</h2>
<p className="text-zinc-400">Deployed in minutes, scaling to millions of interactions.</p>
</div>
<div className="flex flex-col md:flex-row items-center justify-between gap-8 relative">

<div className="hidden md:block absolute top-1/2 left-0 w-full h-0.5 bg-zinc-800 -z-10 transform -translate-y-1/2"></div>

<div className="w-full md:w-1/3 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-brand-600 flex items-center justify-center font-bold mb-4">1</div>
<h4 className="text-lg font-medium mb-2">Connect Sources</h4>
<p className="text-sm text-zinc-400">Authenticate your Zoom Admin account via OAuth 2.0. Select scopes for Phone, Meetings, or CC.</p>
</div>

<div className="w-full md:w-1/3 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold mb-4">2</div>
<h4 className="text-lg font-medium mb-2">Map Fields</h4>
<p className="text-sm text-zinc-400">Use our visual mapper to link Zoom User IDs to CRM Owner IDs. Define custom logic for unmapped calls.</p>
</div>

<div className="w-full md:w-1/3 p-6 rounded-xl bg-zinc-800/50 border border-zinc-700 backdrop-blur-md">
<div className="w-10 h-10 rounded-full bg-zinc-700 flex items-center justify-center font-bold mb-4">3</div>
<h4 className="text-lg font-medium mb-2">Active Sync</h4>
<p className="text-sm text-zinc-400">Turn it on. Logs flow instantly. Historical data backfills in the background automatically.</p>
</div>
</div>
</div>
</div>

<footer className="border-t border-zinc-100 py-16 bg-zinc-50">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-6 h-6 bg-zinc-900 rounded flex items-center justify-center text-white font-semibold text-[10px]">SG</div>
<span className="text-zinc-900 font-semibold">Sysgrate</span>
</div>
<p className="text-sm text-zinc-500 mb-6">Automating the conversation layer of the modern enterprise.</p>
<div className="flex gap-4 opacity-50">
<iconify-icon icon="lucide:twitter" width="20"></iconify-icon>
<iconify-icon icon="lucide:linkedin" width="20"></iconify-icon>
<iconify-icon icon="lucide:github" width="20"></iconify-icon>
</div>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Product</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Integrations</a></li>
<li><a className="hover:text-zinc-900" href="#">Security</a></li>
<li><a className="hover:text-zinc-900" href="#">Pricing</a></li>
<li><a className="hover:text-zinc-900" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Company</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">About</a></li>
<li><a className="hover:text-zinc-900" href="#">Careers</a></li>
<li><a className="hover:text-zinc-900" href="#">Contact</a></li>
<li><a className="hover:text-zinc-900" href="#">Partners</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-zinc-900 mb-4 text-sm">Legal</h4>
<ul className="space-y-2 text-sm text-zinc-500">
<li><a className="hover:text-zinc-900" href="#">Privacy Policy</a></li>
<li><a className="hover:text-zinc-900" href="#">Terms of Service</a></li>
<li><a className="hover:text-zinc-900" href="#">DPA</a></li>
<li><a className="hover:text-zinc-900" href="#">Status</a></li>
</ul>
</div>
</div>
<div className="max-w-6xl mx-auto px-6 pt-8 border-t border-zinc-200 text-center md:text-left flex flex-col md:flex-row justify-between items-center gap-4">
<p className="text-xs text-zinc-400">© 2024 Sysgrate Inc. All rights reserved.</p>
<div className="flex items-center gap-2 text-xs text-zinc-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span>
                        All systems operational
                    </div>
</div>
</footer>
</section>

<section className="hidden" id="view-login">
<div className="min-h-screen flex flex-col md:flex-row">

<div className="w-full md:w-1/2 flex items-center justify-center p-8 bg-white">
<div className="w-full max-w-sm">
<button className="mb-8 flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-800 transition-colors" onclick="navigateTo('landing')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
                            Back to Home
                        </button>
<div className="mb-8">
<div className="w-10 h-10 bg-zinc-900 rounded-lg flex items-center justify-center text-white font-semibold text-sm mb-4">SG</div>
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Log in to Sysgrate</h2>
<p className="text-sm text-zinc-500 mt-2">Enter your email to access your integration dashboard.</p>
</div>

<form className="space-y-4" id="login-form" onsubmit="event.preventDefault(); handleLogin();">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Work Email</label>
<input className="w-full px-3 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all" required="" type="email" value="admin@company.com"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 flex justify-between">
                                    Password
                                    <a className="text-zinc-400 hover:text-zinc-600 font-normal" href="#">Forgot?</a>
</label>
<input className="w-full px-3 py-2.5 bg-white border border-zinc-200 rounded-lg text-sm shadow-sm placeholder:text-zinc-400 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all" required="" type="password" value="password123"/>
</div>
<button className="w-full py-2.5 bg-zinc-900 text-white rounded-lg text-sm font-medium hover:bg-zinc-800 transition-all shadow-lg shadow-zinc-200 flex items-center justify-center gap-2" id="btn-login" type="submit">
                                Sign in
                            </button>
</form>
<div className="mt-6 pt-6 border-t border-zinc-100 text-center">
<p className="text-xs text-zinc-500">By clicking continue, you agree to our <a className="underline hover:text-zinc-900" href="#">Terms of Service</a> and <a className="underline hover:text-zinc-900" href="#">Privacy Policy</a>.</p>
</div>
</div>
</div>

<div className="hidden md:flex w-1/2 bg-zinc-50 border-l border-zinc-200 items-center justify-center relative overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(#e4e4e7_1px,transparent_1px)] [background-size:16px_16px] opacity-50"></div>
<div className="relative z-10 text-center max-w-md p-8">
<div className="bg-white p-6 rounded-2xl shadow-xl border border-zinc-100 mb-8 rotate-3 hover:rotate-0 transition-transform duration-500">
<div className="flex items-center gap-3 border-b border-zinc-100 pb-4 mb-4">
<div className="w-8 h-8 bg-blue-100 text-blue-600 rounded flex items-center justify-center">
<iconify-icon icon="lucide:phone-call" width="16"></iconify-icon>
</div>
<div className="text-left flex-1">
<div className="h-2 w-24 bg-zinc-100 rounded mb-1.5"></div>
<div className="h-2 w-16 bg-zinc-100 rounded"></div>
</div>
<div className="text-xs font-mono text-green-600 bg-green-50 px-2 py-1 rounded">Synced</div>
</div>
<div className="space-y-2">
<div className="h-2 w-full bg-zinc-50 rounded"></div>
<div className="h-2 w-5/6 bg-zinc-50 rounded"></div>
<div className="h-2 w-4/6 bg-zinc-50 rounded"></div>
</div>
</div>
<h3 className="text-xl font-medium text-zinc-900 mb-2">Automate your workflow</h3>
<p className="text-sm text-zinc-500">"Sysgrate saved our sales team 15 hours a week by automating call logging."</p>
</div>
</div>
</div>
</section>

<section className="hidden fade-in pb-24" id="view-dashboard">
<div className="max-w-6xl mx-auto px-6">
<div className="py-12 border-b border-zinc-100 mb-10">
<h2 className="text-3xl font-semibold text-zinc-900 tracking-tight">Integration Hub</h2>
<p className="text-sm text-zinc-500 mt-2">Manage your Zoom connections and data pipelines.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300" onclick="selectProduct('Zoom Phone')">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-blue-50 text-brand-600 flex items-center justify-center mb-6 border border-blue-100">
<iconify-icon icon="lucide:phone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Zoom Phone</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">Call logging, CTI integration, and contact sync pipelines.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-4">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">3 Active</span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300" onclick="selectProduct('Contact Center')">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-indigo-50 text-indigo-600 flex items-center justify-center mb-6 border border-indigo-100">
<iconify-icon icon="lucide:headset" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Contact Center</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">Agent screen pop, ticket creation, and omnisurvey write-back.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-4">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Configure</span>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300" onclick="selectProduct('Meetings')">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-sky-50 text-sky-600 flex items-center justify-center mb-6 border border-sky-100">
<iconify-icon icon="lucide:video" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Meetings</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">Sync attendee lists to marketing automation and CRMs.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-4">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">12 Active</span>
<div className="w-2 h-2 rounded-full bg-green-500 shadow-[0_0_8px_rgba(34,197,94,0.4)]"></div>
</div>
</div>

<div className="group relative bg-white border border-zinc-200 rounded-xl p-6 cursor-pointer hover:border-brand-500/30 hover:shadow-xl hover:shadow-brand-500/5 transition-all duration-300" onclick="selectProduct('Kiosk')">
<div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-opacity text-brand-600">
<iconify-icon icon="lucide:arrow-right" width="20"></iconify-icon>
</div>
<div className="w-12 h-12 rounded-xl bg-orange-50 text-orange-600 flex items-center justify-center mb-6 border border-orange-100">
<iconify-icon icon="lucide:monitor-smartphone" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-medium text-zinc-900 mb-2">Virtual Kiosk</h3>
<p className="text-xs text-zinc-500 leading-relaxed mb-6">Reception management integration with visitor logs.</p>
<div className="flex items-center justify-between border-t border-zinc-50 pt-4">
<span className="text-[10px] font-medium text-zinc-400 uppercase tracking-wider">Configure</span>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in pb-24" id="view-integrations">
<div className="max-w-4xl mx-auto px-6">
<button className="mb-8 flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-800 transition-colors" onclick="navigateTo('dashboard')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
                    Back to Hub
                </button>
<div className="flex items-end justify-between border-b border-zinc-100 pb-6 mb-8">
<div>
<div className="flex items-center gap-2 mb-2">
<span className="px-2 py-0.5 bg-zinc-100 text-zinc-600 text-[10px] font-semibold uppercase tracking-wider rounded border border-zinc-200" id="selected-product-badge">Zoom Phone</span>
</div>
<h2 className="text-2xl font-semibold text-zinc-900 tracking-tight">Select Destination</h2>
</div>
<div className="relative">
<input className="pl-9 pr-4 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-zinc-300 w-64" placeholder="Search apps..." type="text"/>
<iconify-icon className="absolute left-3 top-2.5 text-zinc-400" icon="lucide:search" width="16"></iconify-icon>
</div>
</div>
<div className="space-y-4">

<div className="flex items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md cursor-pointer transition-all group" onclick="selectIntegration('Zoho CRM', 'lucide:hexagon')">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#FFF000] text-black flex items-center justify-center shadow-sm">
<span className="font-bold text-sm">ZO</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Zoho CRM</h4>
<p className="text-sm text-zinc-500">Bi-directional sync for leads, contacts and call logs.</p>
</div>
</div>
<div className="flex items-center gap-4">
<span className="px-2 py-1 bg-green-50 text-green-700 text-[10px] font-medium rounded border border-green-100">Recommended</span>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>

<div className="flex items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md cursor-pointer transition-all group" onclick="selectIntegration('LeadSquared', 'lucide:layers')">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#FF4C00] text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="lucide:layers" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">LeadSquared</h4>
<p className="text-sm text-zinc-500">Capture lead activity and tasks from Zoom interactions.</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md cursor-pointer transition-all group" onclick="selectIntegration('SAP C4C', 'lucide:database')">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#008FD3] text-white flex items-center justify-center shadow-sm">
<span className="font-bold text-xs tracking-tighter">SAP</span>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">SAP Cloud for Customer</h4>
<p className="text-sm text-zinc-500">Enterprise service ticket and opportunity integration.</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>

<div className="flex items-center justify-between p-5 rounded-xl border border-zinc-200 bg-white hover:border-zinc-300 hover:shadow-md cursor-pointer transition-all group" onclick="selectIntegration('Salesforce', 'lucide:cloud')">
<div className="flex items-center gap-5">
<div className="w-12 h-12 rounded-lg bg-[#00A1E0] text-white flex items-center justify-center shadow-sm">
<iconify-icon icon="lucide:cloud" width="24"></iconify-icon>
</div>
<div>
<h4 className="text-base font-medium text-zinc-900">Salesforce</h4>
<p className="text-sm text-zinc-500">Deep integration with Sales Cloud and Service Cloud.</p>
</div>
</div>
<div className="w-8 h-8 rounded-full bg-zinc-50 flex items-center justify-center text-zinc-400 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:arrow-right" width="16"></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="hidden fade-in pb-24" id="view-config">
<div className="max-w-3xl mx-auto px-6">
<button className="mb-6 flex items-center gap-2 text-xs font-medium text-zinc-400 hover:text-zinc-800 transition-colors" onclick="navigateTo('integrations')">
<iconify-icon icon="lucide:arrow-left" width="14"></iconify-icon>
                    Back to Selection
                </button>
<div className="bg-white rounded-xl border border-zinc-200 shadow-xl shadow-zinc-200/50 overflow-hidden">
<div className="p-6 border-b border-zinc-100 bg-zinc-50/50 flex items-center justify-between">
<div className="flex items-center gap-4">
<div className="w-10 h-10 bg-white border border-zinc-200 rounded-lg flex items-center justify-center text-zinc-900 shadow-sm">
<iconify-icon icon="lucide:hexagon" id="config-icon" width="20"></iconify-icon>
</div>
<div>
<h2 className="text-base font-semibold text-zinc-900">Configure <span id="config-name">Zoho CRM</span></h2>
<p className="text-xs text-zinc-500">Authentication &amp; Permissions</p>
</div>
</div>
<div className="flex items-center gap-1 text-[10px] font-medium text-zinc-400 bg-white px-2 py-1 rounded border border-zinc-200">
<span className="w-1.5 h-1.5 rounded-full bg-orange-400 animate-pulse"></span>
                            Not Connected
                        </div>
</div>
<div className="p-8">
<form className="space-y-6" onsubmit="event.preventDefault(); finishSetup();">
<div className="space-y-4">
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5 flex items-center justify-between">
                                        Client ID
                                        <a className="text-brand-600 hover:text-brand-700" href="#">Guide <iconify-icon className="inline" icon="lucide:external-link" width="10"></iconify-icon></a>
</label>
<input className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-mono text-zinc-700 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all" placeholder="1000.XXXXXXX..." required="" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Client Secret</label>
<input className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm font-mono text-zinc-700 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 transition-all" placeholder="••••••••••••••••" required="" type="password"/>
</div>
<div>
<label className="block text-xs font-medium text-zinc-700 mb-1.5">Environment</label>
<div className="relative">
<select className="w-full px-3 py-2 bg-zinc-50 border border-zinc-200 rounded-lg text-sm text-zinc-700 focus:outline-none focus:border-zinc-400 focus:ring-1 focus:ring-zinc-200 appearance-none">
<option>Production (US)</option>
<option>Production (EU)</option>
<option>Sandbox</option>
</select>
<div className="absolute right-3 top-2.5 pointer-events-none text-zinc-400">
<iconify-icon icon="lucide:chevron-down" width="14"></iconify-icon>
</div>
</div>
</div>
<div className="p-4 bg-brand-50 rounded-lg border border-brand-100 mt-4">
<div className="flex items-start gap-3">
<div className="flex items-center h-5">
<input checked="" className="w-4 h-4 rounded border-brand-300 text-brand-600 focus:ring-brand-500 cursor-pointer" id="sync" type="checkbox"/>
</div>
<div className="text-sm">
<label className="font-medium text-brand-900" htmlFor="sync">Enable historical sync</label>
<p className="text-brand-700/70 text-xs mt-0.5">Sysgrate will fetch the last 30 days of call logs immediately after connection.</p>
</div>
</div>
</div>
</div>
<div className="pt-6 border-t border-zinc-100 flex items-center justify-end gap-3">
<button className="px-5 py-2.5 rounded-lg text-sm font-medium text-zinc-600 hover:bg-zinc-50 transition-colors" onclick="navigateTo('integrations')" type="button">Cancel</button>
<button className="px-5 py-2.5 rounded-lg bg-zinc-900 text-white text-sm font-medium hover:bg-zinc-800 transition-all flex items-center gap-2 shadow-lg shadow-zinc-200" id="btn-connect" type="submit">
<span>Authenticate &amp; Connect</span>
<iconify-icon icon="lucide:arrow-right" width="14"></iconify-icon>
</button>
</div>
</form>
</div>
</div>
</div>
</section>

<div className="hidden fixed inset-0 z-[100] flex items-center justify-center bg-zinc-900/30 backdrop-blur-sm fade-in" id="modal-success">
<div className="bg-white rounded-2xl shadow-2xl p-8 max-w-sm w-full text-center m-4 scale-100 border border-white/20">
<div className="w-16 h-16 bg-green-50 text-green-500 rounded-full flex items-center justify-center mx-auto mb-6">
<iconify-icon icon="lucide:check" strokeWidth="3" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-zinc-900 mb-2">Integration Active!</h3>
<p className="text-sm text-zinc-500 mb-8 leading-relaxed">Data is now syncing between Zoom and your CRM. Check your dashboard for real-time logs.</p>
<button className="w-full py-3 bg-zinc-900 text-white rounded-xl text-sm font-medium hover:scale-[1.02] transition-transform" onclick="navigateTo('dashboard'); document.getElementById('modal-success').classList.add('hidden')">Return to Dashboard</button>
</div>
</div>
</main>


    </>
  );
}
