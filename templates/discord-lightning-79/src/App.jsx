import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
50: '#fffbeb',
100: '#fef3c7',
400: '#fbbf24', // Amber
500: '#f59e0b',
900: '#78350f',
}
},
fontSize: {
xxs: '0.65rem',
}
}
}
}



        function switchCode(tab) {
            // Reset tabs
            document.querySelectorAll('[id^="tab-"]').forEach(el => {
                el.classList.remove('tab-active');
                el.classList.add('tab-inactive');
            });
            // Reset content
            document.querySelectorAll('[id^="code-"]').forEach(el => {
                el.classList.add('hidden');
            });

            // Activate selected
            document.getElementById(`tab-${tab}`).classList.add('tab-active');
            document.getElementById(`tab-${tab}`).classList.remove('tab-inactive');
            document.getElementById(`code-${tab}`).classList.remove('hidden');
        }
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/50 backdrop-blur-md">
<div className="max-w-6xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-brand-500 rounded-full flex items-center justify-center text-black">
<iconify-icon icon="solar:bolt-linear" strokeWidth="2.5"></iconify-icon>
</div>
<span className="text-sm font-medium tracking-tight text-white">NWC Zap Bot</span>
</div>
<div className="hidden md:flex items-center gap-6 text-xs font-medium">
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#setup">Setup</a>
<a className="hover:text-white transition-colors" href="#commands">Commands</a>
<a className="text-white bg-white/10 hover:bg-white/20 px-3 py-1.5 rounded-full transition-all border border-white/10" href="https://github.com" target="_blank">
                    GitHub Repo
                </a>
</div>
</div>
</nav>

<section className="relative pt-32 pb-20 overflow-hidden">
<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-brand-500/10 blur-[100px] rounded-full z-0 pointer-events-none"></div>
<div className="relative z-10 max-w-4xl mx-auto px-6 text-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-brand-500/20 bg-brand-500/5 text-brand-400 text-xs mb-8">
<iconify-icon icon="solar:star-linear" strokeWidth="1.5"></iconify-icon>
<span>Discord.js v14 Ready</span>
</div>
<h1 className="text-4xl md:text-6xl font-semibold tracking-tight text-white mb-6 leading-tight">
                Lightning Network <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-b from-white to-white/40">meet Discord.</span>
</h1>
<p className="text-base md:text-lg text-zinc-400 max-w-xl mx-auto mb-10 leading-relaxed font-light">
                Connect wallets via Nostr Wallet Connect (NWC), send satoshis, and manage Lightning accounts directly within Discord. Powered by AlbyHub.
            </p>
<div className="flex flex-col md:flex-row items-center justify-center gap-4">
<a className="h-10 px-6 rounded-md bg-white text-black font-medium text-sm flex items-center gap-2 hover:bg-zinc-200 transition-colors" href="#setup">
<iconify-icon icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
                    Start Deployment
                </a>
<button className="h-10 px-6 rounded-md glass-panel text-white font-medium text-sm flex items-center gap-2 hover:bg-white/5 transition-colors">
<iconify-icon icon="solar:copy-linear" strokeWidth="1.5"></iconify-icon>
                    Copy Clone Command
                </button>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="glass-panel p-6 rounded-xl hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-money-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">NWC Integration</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">
                        Seamlessly connect Lightning wallets using Nostr Wallet Connect strings. Non-custodial interactions for existing users.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Auto-Provisioning</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">
                        Automatically creates AlbyHub backend accounts for new users. Requires 10 sats initial load for routing reserves.
                    </p>
</div>

<div className="glass-panel p-6 rounded-xl hover:border-white/20 transition-all duration-300 group">
<div className="w-10 h-10 rounded-lg bg-zinc-900 border border-white/10 flex items-center justify-center text-white mb-4 group-hover:bg-brand-500/10 group-hover:text-brand-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:chart-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<h3 className="text-sm font-medium text-white mb-2">Configurable Fees</h3>
<p className="text-sm font-light leading-relaxed text-zinc-500">
                        Set custom commission rates (default 0.5%) on transfers and adjust routing fee reserves via <code className="text-xs bg-white/10 px-1 py-0.5 rounded text-zinc-300">config.ts</code>.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 bg-zinc-900/20 border-y border-white/5" id="setup">
<div className="max-w-6xl mx-auto px-6 flex flex-col lg:flex-row gap-16">

<div className="lg:w-1/3 pt-4">
<h2 className="text-2xl font-semibold text-white tracking-tight mb-4">Installation &amp; Setup</h2>
<p className="text-sm text-zinc-400 mb-6 leading-relaxed">
                    Get up and running in minutes. The bot requires a PostgreSQL database, Redis for caching, and an AlbyHub instance for account management.
                </p>
<div className="space-y-4">
<div className="flex gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-xxs text-zinc-400">1</div>
<div>
<h4 className="text-sm text-white font-medium">Environment Variables</h4>
<p className="text-xs text-zinc-500 mt-1">Configure database connections and API tokens.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-xxs text-zinc-400">2</div>
<div>
<h4 className="text-sm text-white font-medium">Business Logic</h4>
<p className="text-xs text-zinc-500 mt-1">Adjust fees and reserves in <code className="text-zinc-300">src/utils/config.ts</code>.</p>
</div>
</div>
<div className="flex gap-3">
<div className="mt-0.5 w-5 h-5 rounded-full border border-zinc-700 flex items-center justify-center text-xxs text-zinc-400">3</div>
<div>
<h4 className="text-sm text-white font-medium">Docker Deployment</h4>
<p className="text-xs text-zinc-500 mt-1">Run everything with a single compose command.</p>
</div>
</div>
</div>
</div>

<div className="lg:w-2/3">
<div className="rounded-xl overflow-hidden border border-white/10 bg-[#0A0A0A] shadow-2xl">

<div className="flex items-center px-4 h-12 border-b border-white/5 bg-white/5">
<div className="flex gap-2 mr-6">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="flex gap-6 text-xs font-medium">
<button className="tab-active py-3.5 transition-colors" id="tab-env" onclick="switchCode('env')">.env</button>
<button className="tab-inactive py-3.5 transition-colors" id="tab-config" onclick="switchCode('config')">config.ts</button>
<button className="tab-inactive py-3.5 transition-colors" id="tab-docker" onclick="switchCode('docker')">terminal</button>
</div>
</div>

<div className="p-6 overflow-x-auto font-mono text-xs md:text-sm leading-6 h-[320px]">

<div className="block" id="code-env">
<div className="text-zinc-500 mb-2"># Discord Bot Config</div>
<div><span className="code-keyword">BOT_TOKEN</span>=<span className="code-string">YOUR_BOT_TOKEN_ID</span></div>
<div className="mt-4 text-zinc-500"># Database Config</div>
<div><span className="code-keyword">DATABASE_URL</span>=<span className="code-string">postgresql://user:pass@localhost:5432/db</span></div>
<div><span className="code-keyword">REDIS_URL</span>=<span className="code-string">redis://localhost:6379</span></div>
<div className="mt-4 text-zinc-500"># Service Account (AlbyHub)</div>
<div><span className="code-keyword">ALBYHUB_URL</span>=<span className="code-string">https://hub.getalby.com</span></div>
<div><span className="code-keyword">ALBYHUB_TOKEN</span>=<span className="code-string">your_alby_hub_api_token</span></div>
<div><span className="code-keyword">SALT</span>=<span className="code-string">123456789</span></div>
</div>

<div className="hidden" id="code-config">
<span className="code-keyword">{</span><br/>
                              <span className="code-comment">// Commission rate for service accounts (0.5%)</span><br/>
                              <span className="code-token">"SERVICE_ACCOUNT_COMMISSION"</span>: <span className="code-string">0.005</span>,<br/><br/>
                              <span className="code-comment">// Reserve for routing fees</span><br/>
                              <span className="code-token">"ROUTING_FEE_PERCENTAGE"</span>: <span className="code-string">0.005</span>,<br/><br/>
                              <span className="code-comment">// Minimum sats reserved (cannot be spent)</span><br/>
                              <span className="code-token">"MIN_ROUTING_FEE_RESERVE"</span>: <span className="code-string">10</span><br/>
<span className="code-keyword">}</span>
</div>

<div className="hidden" id="code-docker">
<div className="flex items-center gap-2 mb-2">
<span className="text-green-500">➜</span>
<span className="text-blue-400">~/nwc-zap-bot</span>
<span className="text-zinc-500">git checkout main</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-green-500">➜</span>
<span className="text-blue-400">~/nwc-zap-bot</span>
<span className="text-zinc-500">pnpm install</span>
</div>
<div className="flex items-center gap-2 mb-2">
<span className="text-green-500">➜</span>
<span className="text-blue-400">~/nwc-zap-bot</span>
<span className="text-zinc-500">pnpm build</span>
</div>
<div className="flex items-center gap-2">
<span className="text-green-500">➜</span>
<span className="text-blue-400">~/nwc-zap-bot</span>
<span className="text-white">docker-compose up --build</span>
<span className="animate-pulse inline-block w-2 h-4 bg-zinc-500 align-middle ml-1"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20" id="commands">
<div className="max-w-6xl mx-auto px-6">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
<div>
<h2 className="text-2xl font-semibold text-white tracking-tight">Slash Commands</h2>
<p className="text-sm text-zinc-400 mt-2">Interact with the bot using standard Discord slash commands.</p>
</div>
<div className="hidden md:block">
<button className="text-xs text-zinc-500 border border-zinc-800 rounded px-2 py-1 bg-zinc-900/50">
                        Type / to start
                    </button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/balance</span>
</div>
<p className="text-xs text-zinc-500">Check your current wallet balance in sats.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/pay</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">bolt11</span>
</div>
<p className="text-xs text-zinc-500">Pay a Lightning Network invoice immediately.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/zap</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">user</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">amount</span>
</div>
<p className="text-xs text-zinc-500">Send sats directly to another Discord user.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/recharge</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">amount</span>
</div>
<p className="text-xs text-zinc-500">Generate an invoice to top up your bot wallet.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/connect</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">nwc_uri</span>
</div>
<p className="text-xs text-zinc-500">Link an external wallet via Nostr Wallet Connect.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/faucet</span>
</div>
<p className="text-xs text-zinc-500">Create an open invoice claimable by any user.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/send</span>
<span className="px-1.5 py-0.5 rounded bg-zinc-800 text-zinc-400 text-xxs font-mono">address</span>
</div>
<p className="text-xs text-zinc-500">Withdraw funds to an external Lightning address.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/top</span>
</div>
<p className="text-xs text-zinc-500">View leaderboard of top 10 satoshi senders.</p>
</div>

<div className="p-4 border border-zinc-800 rounded-lg bg-zinc-900/10 hover:bg-zinc-900/30 transition-colors">
<div className="flex items-center gap-2 mb-2">
<span className="text-brand-400 font-mono text-sm">/reaction-config</span>
</div>
<p className="text-xs text-zinc-500">Configure automatic zaps via emoji reactions.</p>
</div>
</div>
</div>
</section>

<section className="py-20 border-t border-white/5 bg-zinc-900/20">
<div className="max-w-6xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12">

<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-brand-400 text-xl" icon="solar:server-square-linear"></iconify-icon>
<h2 className="text-xl font-semibold text-white tracking-tight">HTTP Server &amp; LUD16</h2>
</div>
<p className="text-sm text-zinc-400 leading-relaxed mb-6">
                    Enable the optional HTTP server to support Lightning Addresses. This allows users to receive payments using a format like <span className="text-white font-mono">username@discord-domain.com</span>.
                </p>
<div className="p-4 bg-black rounded-lg border border-white/10 font-mono text-xs">
<div className="flex items-center justify-between text-zinc-500 mb-2">
<span>.env</span>
<span className="text-[10px] uppercase tracking-wider">Optional</span>
</div>
<div className="space-y-1">
<div><span className="code-keyword">HTTPSERVER_ENABLED</span>=<span className="code-string">true</span></div>
<div><span className="code-keyword">HTTPSERVER_PORT</span>=<span className="code-string">8001</span></div>
</div>
</div>
<div className="mt-4 flex gap-2">
<span className="text-xs px-2 py-1 rounded bg-brand-500/10 text-brand-400 border border-brand-500/20">LUD16 Support</span>
<span className="text-xs px-2 py-1 rounded bg-zinc-800 text-zinc-400 border border-zinc-700">Invoice Generation</span>
</div>
</div>

<div>
<div className="flex items-center gap-2 mb-4">
<iconify-icon className="text-white text-xl" icon="solar:checklist-minimalistic-linear"></iconify-icon>
<h2 className="text-xl font-semibold text-white tracking-tight">Roadmap</h2>
</div>
<div className="space-y-3">
<div className="flex items-start gap-3 opacity-50">
<iconify-icon className="text-zinc-500 text-lg mt-0.5" icon="solar:check-square-linear"></iconify-icon>
<div>
<h4 className="text-sm text-zinc-300 line-through">Core NWC Functionality</h4>
<p className="text-xs text-zinc-600">Basic send/receive and wallet connection.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 text-lg mt-0.5" icon="solar:box-linear"></iconify-icon>
<div>
<h4 className="text-sm text-white">Discord Authentication</h4>
<p className="text-xs text-zinc-500">Auth with Discord login for web dashboard.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 text-lg mt-0.5" icon="solar:box-linear"></iconify-icon>
<div>
<h4 className="text-sm text-white">Invoice Payment w/ Token</h4>
<p className="text-xs text-zinc-500">Secure payments via authenticated endpoints.</p>
</div>
</div>
<div className="flex items-start gap-3">
<iconify-icon className="text-zinc-500 text-lg mt-0.5" icon="solar:box-linear"></iconify-icon>
<div>
<h4 className="text-sm text-white">Wallet WebApp</h4>
<p className="text-xs text-zinc-500">Full web interface to manage your account outside Discord.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<footer className="py-12 border-t border-white/5 text-center">
<div className="flex items-center justify-center gap-2 mb-4">
<div className="w-4 h-4 bg-zinc-800 rounded-full flex items-center justify-center text-zinc-400">
<iconify-icon className="text-[10px]" icon="solar:bolt-linear" strokeWidth="2"></iconify-icon>
</div>
<span className="text-sm font-medium text-zinc-200">NWC Zap Bot</span>
</div>
<p className="text-xs text-zinc-600">Open source Discord integration for the Lightning Network.</p>
</footer>



    </>
  );
}
