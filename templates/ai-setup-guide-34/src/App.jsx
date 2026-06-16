import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const themeBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const html = document.documentElement;
            
            function setTheme(isDark) {
                if (isDark) {
                    html.classList.add('dark');
                    themeIcon.setAttribute('icon', 'solar:sun-outline');
                    localStorage.theme = 'dark';
                } else {
                    html.classList.remove('dark');
                    themeIcon.setAttribute('icon', 'solar:moon-outline');
                    localStorage.theme = 'light';
                }
            }

            // Init theme from storage or system pref
            if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
                setTheme(true);
            } else {
                setTheme(false);
            }

            themeBtn.addEventListener('click', () => {
                setTheme(!html.classList.contains('dark'));
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="fixed top-0 w-full z-50 glass-panel border-b border-slate-200/60 dark:border-slate-800/60 transition-colors duration-200">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center space-x-3 text-slate-900 dark:text-slate-100">
<div className="w-8 h-8 rounded flex items-center justify-center bg-slate-900 dark:bg-white transition-colors duration-200">
<span className="font-semibold tracking-tighter text-sm text-white dark:text-slate-900">NC</span>
</div>
<span className="font-medium tracking-tight text-sm">Setup Guide</span>
</div>
<div className="flex items-center space-x-4 md:space-x-6">
<nav className="hidden md:flex space-x-6 text-sm font-medium text-slate-500 dark:text-slate-400">
<a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#intro">Start</a>
<a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-1">Core Setup</a>
<a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-7">Config</a>
<a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-10">Reference</a>
</nav>

<button aria-label="Toggle Dark Mode" className="w-8 h-8 flex items-center justify-center rounded-full text-slate-500 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-slate-800 transition-colors" id="theme-toggle">
<iconify-icon className="text-[1.15rem]" icon="solar:moon-outline" id="theme-icon"></iconify-icon>
</button>
</div>
</div>
</header>
<div className="flex-1 max-w-7xl mx-auto px-6 pt-32 pb-24 w-full flex flex-col lg:flex-row gap-16 relative">
<aside className="hidden lg:block w-64 flex-shrink-0">
<div className="sticky top-32 flex flex-col space-y-8">
<div>
<h4 className="text-xs font-semibold tracking-tight uppercase mb-4 text-slate-900 dark:text-slate-100">Getting Started</h4>
<ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#intro">Introduction</a></li>
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#prerequisites">Prerequisites</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight uppercase mb-4 text-slate-900 dark:text-slate-100">Core Setup</h4>
<ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-1">1. Terminal Basics</a></li>
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-2">2. Homebrew</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight uppercase mb-4 text-slate-900 dark:text-slate-100">Configuration</h4>
<ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-7">7. Authentication</a></li>
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-8">8. Essential Config</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold tracking-tight uppercase mb-4 text-slate-900 dark:text-slate-100">Reference</h4>
<ul className="space-y-2.5 text-sm text-slate-500 dark:text-slate-400 font-medium">
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-10">10. Pro Tips</a></li>
<li><a className="transition-colors hover:text-slate-900 dark:hover:text-slate-100" href="#section-11">11. Common Mistakes</a></li>
</ul>
</div>
</div>
</aside>
<main className="flex-1 min-w-0">

<section className="mb-32 scroll-mt-32" id="intro">
<div className="mb-12">
<div className="inline-flex items-center space-x-2 px-3 py-1 rounded-full text-xs font-medium mb-6 bg-slate-100 text-slate-600 dark:bg-slate-800/60 dark:text-slate-300 border border-transparent dark:border-slate-700/50">
<iconify-icon icon="solar:apple-outline" style={{strokeWidth: '1.5'}}></iconify-icon>
<span>For Mac — Built for Absolute Beginners</span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight leading-tight mb-6 text-slate-900 dark:text-slate-50 transition-colors">
                        The Complete <br/> NanoClaw + Claude Guide
                    </h1>
<p className="text-lg font-normal leading-relaxed max-w-2xl mb-8 text-slate-600 dark:text-slate-400">
                        Zero to AI in 30 minutes. No coding experience needed. No mystery commands. Just clear steps that actually explain what's happening.
                    </p>
</div>
<div className="grid md:grid-cols-2 gap-8 items-center border p-8 rounded-2xl shadow-sm bg-white dark:bg-[#111] border-slate-200/60 dark:border-slate-800 dark:shadow-none transition-colors">
<div>
<h3 className="text-sm font-semibold tracking-tight uppercase mb-6 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
<iconify-icon icon="solar:target-outline"></iconify-icon>
<span>What you'll have</span>
</h3>
<ul className="space-y-4">
<li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
<div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
<iconify-icon icon="solar:check-read-outline"></iconify-icon>
</div>
<div><span className="font-medium text-slate-900 dark:text-slate-200">Claude CLI</span> — Anthropic's AI, right in your terminal</div>
</li>
<li className="flex items-start space-x-3 text-sm text-slate-600 dark:text-slate-400">
<div className="mt-0.5 w-5 h-5 rounded-full flex items-center justify-center flex-shrink-0 border bg-emerald-50 text-emerald-600 border-emerald-100 dark:bg-emerald-500/10 dark:text-emerald-400 dark:border-emerald-500/20">
<iconify-icon icon="solar:check-read-outline"></iconify-icon>
</div>
<div><span className="font-medium text-slate-900 dark:text-slate-200">NanoClaw</span> — A beautiful web interface for Claude</div>
</li>
</ul>
</div>

<div className="relative w-full h-72">
<div className="absolute inset-0 bg-[#0c0c0c] rounded-xl shadow-2xl border flex flex-col overflow-hidden font-mono text-xs border-slate-800">
<div className="h-10 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-4 space-y-2 terminal-scroll overflow-y-auto text-slate-300">
<div className="flex"><span className="mr-2 text-emerald-400">~</span> <span className="text-white">npm install -g @anthropic-ai/claude-code nanoclaw</span></div>
<div className="text-slate-400">added 245 packages in 4s</div>
<div className="flex mt-3"><span className="mr-2 text-emerald-400">~</span> <span className="text-white">nanoclaw start</span></div>
<div className="text-blue-400">[INFO] Initializing NanoClaw Core v1.0.0</div>
<div className="text-slate-400">[INFO] Checking Anthropic API Key... <span className="text-emerald-400">Valid</span></div>
<div className="text-slate-400">[INFO] Mounting local endpoints...</div>
<div className="font-medium mt-2 text-emerald-400">✓ Server running on http://localhost:8080</div>
<div className="flex mt-2 items-center"><span className="mr-2 text-emerald-400">~</span> <div className="w-2 h-3.5 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="prerequisites">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<h2 className="text-2xl font-semibold tracking-tight mb-4 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
<iconify-icon icon="solar:settings-outline"></iconify-icon>
<span>Prerequisites</span>
</h2>
<p className="text-base mb-8 text-slate-600 dark:text-slate-400">What you need before starting. Don't worry, no credit card or paid accounts are required.</p>
<h3 className="text-sm font-semibold mb-3 uppercase tracking-tight text-slate-900 dark:text-slate-200">Required Hardware</h3>
<div className="border rounded-xl overflow-hidden mb-8 border-slate-200 dark:border-slate-800 transition-colors">
<table className="w-full text-left text-sm">
<tbody className="divide-y divide-slate-100 dark:divide-slate-800/50 bg-white dark:bg-[#111]">
<tr>
<td className="py-3 px-4 font-medium w-1/3 text-slate-900 dark:text-slate-200">MacBook</td>
<td className="py-3 px-4 text-slate-600 dark:text-slate-400">M1/M2/M3 chip (2020+) or Intel Mac with 8GB+ RAM</td>
</tr>
<tr>
<td className="py-3 px-4 font-medium text-slate-900 dark:text-slate-200">Admin access</td>
<td className="py-3 px-4 text-slate-600 dark:text-slate-400">Ability to enter your Mac password for sudo commands</td>
</tr>
</tbody>
</table>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#475569]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#475569]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#475569]"></div>
</div>
<div className="p-5 space-y-3 terminal-scroll overflow-x-auto text-slate-300">
<div><span className="mr-2 text-emerald-400">~</span> <span className="text-white">sw_vers | grep ProductVersion</span></div>
<div className="text-slate-400">ProductVersion:     14.3.1</div>
<div className="mt-3"><span className="mr-2 text-emerald-400">~</span> <span className="text-white">sysctl hw.memsize | awk '{print $2/1073741824 " GB"}'</span></div>
<div className="text-slate-400">16 GB</div>
<div className="mt-3"><span className="mr-2 text-emerald-400">~</span> <span className="text-white">ping -c 1 anthropic.com</span></div>
<div className="text-slate-400">PING anthropic.com (104.18.42.44): 56 data bytes</div>
<div className="text-slate-400">64 bytes from 104.18.42.44: icmp_seq=0 ttl=59 time=12.4 ms</div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-1">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<span className="text-xs font-medium text-slate-500 dark:text-slate-500 mb-2 block uppercase tracking-wide">Section 1</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Meet Your New Best Friend — Terminal</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Your text-based remote control for Mac. Instead of clicking buttons, you type commands.</p>
<div className="space-y-6">
<div>
<h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-200">Opening Terminal</h4>
<ol className="list-decimal list-inside text-sm space-y-1.5 marker:text-slate-400 dark:marker:text-slate-600 text-slate-600 dark:text-slate-400">
<li>Press <span className="font-medium px-1.5 py-0.5 rounded border text-slate-800 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">Cmd</span> + <span className="font-medium px-1.5 py-0.5 rounded border text-slate-800 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">Space</span></li>
<li>Type <strong>Terminal</strong></li>
<li>Press <span className="font-medium px-1.5 py-0.5 rounded border text-slate-800 bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-200">Enter</span></li>
</ol>
</div>
<div>
<h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-200">Your First Commands</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Try typing these into your terminal to see where you are and what files are there:</p>
<div className="p-3 rounded-lg font-mono text-sm mb-4 overflow-x-auto bg-slate-900 text-slate-300 dark:bg-[#0c0c0c] dark:border dark:border-slate-800">
<code>pwd</code>
</div>
<div className="p-3 rounded-lg font-mono text-sm overflow-x-auto bg-slate-900 text-slate-300 dark:bg-[#0c0c0c] dark:border dark:border-slate-800">
<code>ls -la</code>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div><span className="mr-2 text-emerald-400">user@MacBook ~ %</span> <span className="text-white">pwd</span></div>
<div className="text-slate-400">/Users/user</div>
<div className="mt-4"><span className="mr-2 text-emerald-400">user@MacBook ~ %</span> <span className="text-white">ls -la</span></div>
<div className="text-slate-400">total 0</div>
<div className="text-slate-400">drwxr-x---+ 1 user staff   320 Feb 24 10:00 <span className="text-blue-400">Desktop</span></div>
<div className="text-slate-400">drwx------+ 1 user staff   960 Feb 24 10:15 <span className="text-blue-400">Documents</span></div>
<div className="text-slate-400">drwx------+ 1 user staff  1248 Feb 24 10:20 <span className="text-blue-400">Downloads</span></div>
<div className="flex mt-4 items-center"><span className="mr-2 text-emerald-400">user@MacBook ~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-2">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 2</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Installing Homebrew</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">The App Store for the command line. It downloads and installs developer tools automatically.</p>
<h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-200">1. Install Homebrew</h4>
<p className="text-xs text-slate-500 dark:text-slate-400 mb-2">Copy-paste this exact command and press Enter. It will ask for your Mac password (characters won't show as you type).</p>
<div className="p-3 rounded-lg font-mono text-xs mb-6 overflow-x-auto border bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700">
<code className="break-all whitespace-pre-wrap">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</code>
</div>
<h4 className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-200">2. Verify Installation</h4>
<div className="p-3 rounded-lg font-mono text-sm overflow-x-auto bg-slate-900 text-slate-300 dark:bg-[#0c0c0c] dark:border dark:border-slate-800">
<code>brew --version</code>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[300px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-1.5 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex mb-2"><span className="mr-2 whitespace-nowrap text-emerald-400">~ %</span> <span className="break-all text-white">/bin/bash -c "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/HEAD/install.sh)"</span></div>
<div className="text-blue-400">==&gt; Checking for `sudo` access...</div>
<div className="text-slate-400">Password: <span className="text-slate-600">🔑</span></div>
<div className="text-blue-400">==&gt; Downloading and installing Homebrew...</div>
<div className="text-slate-400">remote: Enumerating objects: 25, done.</div>
<div className="text-slate-400">remote: Counting objects: 100% (25/25), done.</div>
<div className="font-medium mt-2 mb-4 text-emerald-400">==&gt; Installation successful!</div>
<div className="flex items-center mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">brew --version</span></div>
<div className="text-slate-400">Homebrew 4.2.9</div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-3">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 3</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Node.js &amp; NPM Setup</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Node.js runs JavaScript on your Mac. It includes NPM (Node Package Manager), which we need to download Claude and NanoClaw.</p>
<div className="border rounded-xl overflow-hidden mb-6 bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 transition-colors">
<div className="p-4 border-b text-sm font-medium border-slate-100 dark:border-slate-800/50 bg-slate-50 dark:bg-slate-900/50 text-slate-700 dark:text-slate-300">Installation Flow</div>
<div className="p-4 space-y-4">
<div>
<span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">Install Node via Homebrew:</span>
<code className="block p-2 rounded font-mono text-sm border bg-slate-100 dark:bg-[#0c0c0c] text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-800">brew install node</code>
</div>
<div>
<span className="text-xs text-slate-500 dark:text-slate-400 font-medium block mb-1">Verify installations:</span>
<code className="block p-2 rounded font-mono text-sm border mb-1 bg-slate-100 dark:bg-[#0c0c0c] text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-800">node --version <span className="text-slate-400 dark:text-slate-500"># The JS Engine</span></code>
<code className="block p-2 rounded font-mono text-sm border bg-slate-100 dark:bg-[#0c0c0c] text-slate-800 dark:text-slate-300 border-slate-200 dark:border-slate-800">npm --version  <span className="text-slate-400 dark:text-slate-500"># The Downloader</span></code>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[300px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-1.5 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex mb-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">brew install node</span></div>
<div className="text-blue-400">==&gt; Downloading https://ghcr.io/v2/homebrew/core/node/...</div>
<div className="text-slate-400">################################################## 100.0%</div>
<div className="text-blue-400">==&gt; Pouring node--21.6.1.arm64_sonoma.bottle.tar.gz</div>
<div className="mb-4 text-slate-400">🍺  /opt/homebrew/Cellar/node/21.6.1: 2,345 files, 60.1MB</div>
<div className="flex mt-2 items-center"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">node -v</span></div>
<div className="text-slate-400">v21.6.1</div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">npm -v</span></div>
<div className="text-slate-400">10.2.4</div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-4">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 4</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Git — Version Control</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Git tracks file history. Many NPM packages require it to install correctly. It's built into Mac but needs a tiny setup.</p>
<div className="space-y-4">
<div>
<p className="text-sm font-medium mb-1 text-slate-800 dark:text-slate-200">Verify if installed:</p>
<div className="p-2.5 rounded font-mono text-sm bg-slate-900 text-slate-300 dark:bg-[#0c0c0c] dark:border dark:border-slate-800"><code>git --version</code></div>
</div>
<div>
<p className="text-sm font-medium mb-1 text-slate-800 dark:text-slate-200">Configure Identity (Required once per Mac):</p>
<div className="p-3 rounded-lg font-mono text-sm space-y-2 border bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700">
<code className="block text-slate-300">git config --global user.name "Your Name"</code>
<code className="block text-slate-300">git config --global user.email "your@email.com"</code>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[220px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">git --version</span></div>
<div className="mb-2 text-slate-400">git version 2.39.3 (Apple Git-145)</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">git config --global user.name "Demo User"</span></div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">git config --global user.email "demo@example.com"</span></div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-5">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 5</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Claude CLI — The AI Engine</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Anthropic's official tool. We install it globally so NanoClaw can connect to it from anywhere.</p>
<div className="border rounded-lg p-4 mb-6 text-sm flex items-start space-x-3 bg-amber-50 border-amber-200 text-amber-900 dark:bg-amber-950/20 dark:border-amber-900/50 dark:text-amber-200">
<iconify-icon className="text-lg mt-0.5 flex-shrink-0 text-amber-600 dark:text-amber-400" icon="solar:info-circle-outline"></iconify-icon>
<div>
<p className="font-semibold mb-1">What does -g mean?</p>
<p className="text-xs text-amber-800 dark:text-amber-300/80">It stands for "Global". Without it, the <code className="font-mono px-1 rounded bg-amber-100/50 dark:bg-amber-900/40">claude</code> command would only work in the specific folder you downloaded it in.</p>
</div>
</div>
<div className="p-4 rounded-xl font-mono text-sm mb-6 overflow-x-auto shadow-inner border bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700">
<span className="text-slate-500 block mb-1"># Use NPM to install Claude</span>
<code className="text-blue-300">npm install -g @anthropic-ai/claude-code</code>
<br/><br/>
<span className="text-slate-500 block mb-1"># Verify it works</span>
<code className="text-green-300">claude --version</code>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[300px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">npm install -g @anthropic-ai/claude-code</span></div>
<div className="mb-4 text-slate-400">added 142 packages, and audited 143 packages in 3s</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">claude --version</span></div>
<div className="mb-4 text-slate-400">v0.1.0</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">claude -p "Explain APIs"</span></div>
<div className="mt-1 leading-relaxed text-purple-300">An API (Application Programming Interface) is a set of rules that lets different software applications communicate with each other...</div>
<div className="flex mt-4 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-6">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 6</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">NanoClaw — The Web GUI</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Claude CLI is great, but typing in a black box gets tiring. NanoClaw wraps it in a beautiful browser interface.</p>
<div className="border rounded-xl overflow-hidden mb-6 bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 transition-colors">
<div className="p-4 border-b flex items-center justify-between bg-slate-50 dark:bg-slate-900/50 border-slate-100 dark:border-slate-800/50">
<p className="text-xs font-semibold uppercase tracking-tight text-slate-700 dark:text-slate-300">Final Installation Step</p>
</div>
<div className="p-5">
<div className="p-3 rounded-lg font-mono text-sm border bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700">
<code>npm install -g nanoclaw</code>
</div>
<p className="text-xs text-slate-500 dark:text-slate-400 mt-3 flex items-center">
<iconify-icon className="mr-1 text-emerald-500 dark:text-emerald-400" icon="solar:check-circle-outline"></iconify-icon>
                                    Installs the interface globally.
                                </p>
</div>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[220px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">npm install -g nanoclaw</span></div>
<div className="mb-4 text-slate-400">added 45 packages, and audited 46 packages in 2s</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">which nanoclaw</span></div>
<div className="mb-2 text-slate-400">/opt/homebrew/bin/nanoclaw</div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-7">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-7">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 7</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Authenticating with Claude</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">Claude runs on your machine, but it needs an Anthropic API key to process the heavy AI thinking on their servers.</p>
<ol className="list-decimal list-inside text-sm space-y-3 marker:font-medium marker:text-slate-400 mb-6 p-6 rounded-xl border shadow-sm text-slate-600 dark:text-slate-400 bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<li>Go to <a className="font-medium hover:underline text-blue-600 dark:text-blue-400" href="#">console.anthropic.com</a></li>
<li>Sign up or sign in</li>
<li>Click <strong className="text-slate-900 dark:text-slate-200">API Keys</strong> in the sidebar</li>
</ol>
<div className="border-l-2 p-4 rounded-r text-sm flex items-start bg-red-50 border-red-400 text-red-800 dark:bg-red-950/20 dark:border-red-900/50 dark:text-red-200">
<iconify-icon className="text-red-500 dark:text-red-400 text-lg mr-2 mt-0.5 shrink-0" icon="solar:danger-triangle-outline"></iconify-icon>
<span><strong className="dark:text-red-100">IMPORTANT:</strong> You won't be able to see this key again after closing the dialog. Copy it now and keep it safe.</span>
</div>
</div>

<div className="lg:col-span-5 relative mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[300px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">export ANTHROPIC_API_KEY="sk-ant-api03-xxxx..."</span></div>
<div className="text-slate-500 italic mb-4"># Key set in current session</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">echo $ANTHROPIC_API_KEY | cut -c 1-15</span></div>
<div className="mb-4 text-slate-400">sk-ant-api03...</div>
<div className="flex mt-2"><span className="mr-2 text-emerald-400">~ %</span> <span className="text-white">claude -p "Test auth"</span></div>
<div className="text-purple-300">Connection authenticated successfully. How can I assist you today?</div>
<div className="flex mt-4 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-8">
<div className="grid lg:grid-cols-12 gap-12 items-center">
<div className="lg:col-span-7 order-2 lg:order-1">
<span className="text-xs font-medium text-slate-500 mb-2 block uppercase tracking-wide">Section 8</span>
<h2 className="text-2xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Saving Your Configuration</h2>
<p className="text-base mb-6 text-slate-600 dark:text-slate-400">We need to save your API key in a hidden file (<code className="font-mono text-sm px-1 rounded border bg-slate-100 border-slate-200 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">.zshrc</code>). This file runs automatically every time you open Terminal.</p>
<div className="space-y-5">
<div>
<h4 className="text-sm font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900">1</span>
                                    Append Key to File
                                </h4>
<div className="p-2.5 rounded font-mono text-sm border overflow-x-auto bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700"><code>echo 'export ANTHROPIC_API_KEY="sk-..."' &gt;&gt; ~/.zshrc</code></div>
</div>
<div>
<h4 className="text-sm font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900">2</span>
                                    Add Optional Shortcut
                                </h4>
<div className="p-2.5 rounded font-mono text-sm border overflow-x-auto bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700"><code>echo 'alias nc="nanoclaw"' &gt;&gt; ~/.zshrc</code></div>
</div>
<div>
<h4 className="text-sm font-medium mb-2 flex items-center text-slate-800 dark:text-slate-200">
<span className="w-5 h-5 rounded-full flex items-center justify-center text-xs mr-2 bg-slate-800 text-white dark:bg-slate-200 dark:text-slate-900">3</span>
                                    Apply Changes
                                </h4>
<div className="p-2.5 rounded font-mono text-sm border overflow-x-auto bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700"><code>source ~/.zshrc</code></div>
</div>
</div>
</div>

<div className="lg:col-span-5 order-1 lg:order-2 mt-8 lg:mt-0 h-full">
<div className="bg-[#0c0c0c] rounded-xl shadow-lg border flex flex-col font-mono text-xs overflow-hidden h-full min-h-[300px] border-slate-800 dark:border-slate-700/80">
<div className="h-9 bg-[#1a1a1a] border-b flex items-center px-4 space-x-2 shrink-0 border-slate-800/60">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#27c93f]"></div>
</div>
<div className="p-5 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex"><span className="mr-2 whitespace-nowrap text-emerald-400">~ %</span> <span className="text-white">echo 'export ANTHROPIC_API_KEY="sk-ant-api03-xxx"' &gt;&gt; ~/.zshrc</span></div>
<div className="flex mt-2"><span className="mr-2 whitespace-nowrap text-emerald-400">~ %</span> <span className="text-white">echo 'alias nc="nanoclaw"' &gt;&gt; ~/.zshrc</span></div>
<div className="flex mt-4"><span className="mr-2 whitespace-nowrap text-emerald-400">~ %</span> <span className="text-white">tail -n 2 ~/.zshrc</span></div>
<div className="text-slate-400">export ANTHROPIC_API_KEY="sk-ant-api03-xxx"</div>
<div className="mb-4 text-slate-400">alias nc="nanoclaw"</div>
<div className="flex mt-2"><span className="mr-2 whitespace-nowrap text-emerald-400">~ %</span> <span className="text-white">source ~/.zshrc</span></div>
<div className="flex mt-3 items-center"><span className="mr-2 text-emerald-400">~ %</span> <div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<section className="mb-32 scroll-mt-32 border-t pt-20 border-slate-200/60 dark:border-slate-800" id="section-9">
<div className="grid lg:grid-cols-12 gap-12 items-start">
<div className="lg:col-span-12 text-center max-w-2xl mx-auto mb-10">
<span className="text-xs font-semibold text-emerald-500 mb-2 block uppercase tracking-wider">Section 9 • Moment of Truth</span>
<h2 className="text-3xl font-semibold tracking-tight mb-4 text-slate-900 dark:text-slate-100">Testing Your Complete Setup</h2>
<p className="text-base text-slate-600 dark:text-slate-400">Start the server in Terminal, then open your browser to chat. Leave the terminal window open while you use it.</p>
</div>
<div className="lg:col-span-12 relative">

<div className="bg-[#0c0c0c] rounded-xl shadow-2xl border flex flex-col font-mono text-xs overflow-hidden max-w-5xl mx-auto min-h-[400px] border-slate-800 dark:border-slate-700/80">
<div className="h-10 bg-[#1a1a1a] border-b flex items-center justify-between px-4 shrink-0 border-slate-800/60">
<div className="flex items-center space-x-2">
<div className="w-3 h-3 rounded-full bg-[#ff5f56]"></div>
<div className="w-3 h-3 rounded-full bg-[#ffbd2e]"></div>
<div className="w-3 h-3 rounded-full bg-[#27c93f]"></div>
</div>
<span className="text-slate-500 text-[10px] tracking-wider uppercase">User — Terminal — nanoclaw</span>
</div>
<div className="p-6 space-y-2 terminal-scroll overflow-x-auto text-slate-300">
<div className="flex mb-4"><span className="mr-2 text-emerald-400">user@MacBook ~ %</span> <span className="text-white">nanoclaw</span></div>
<div className="text-slate-500">[10:24:01 AM] <span className="ml-2 text-blue-400">INFO</span> <span className="ml-4 text-slate-300">Starting NanoClaw v1.0.0</span></div>
<div className="text-slate-500">[10:24:01 AM] <span className="ml-2 text-blue-400">INFO</span> <span className="ml-4 text-slate-300">Loading configuration from ~/.zshrc</span></div>
<div className="text-slate-500">[10:24:01 AM] <span className="ml-2 text-blue-400">INFO</span> <span className="ml-4 text-slate-300">API Key detected: <span className="text-emerald-400">Valid (sk-ant-api03-...)</span></span></div>
<div className="text-slate-500">[10:24:02 AM] <span className="ml-2 text-blue-400">INFO</span> <span className="ml-4 text-slate-300">Mounting static interface files</span></div>
<div className="text-slate-500">[10:24:02 AM] <span className="ml-2 text-blue-400">INFO</span> <span className="ml-4 font-medium text-emerald-400">Server listening on http://localhost:8080</span></div>
<div className="mt-6 mb-2 text-slate-600"># Web browser traffic incoming...</div>
<div className="text-slate-500">[10:24:05 AM] <span className="ml-2 text-emerald-400">GET </span> <span className="ml-4 text-slate-400">/                         200 OK - 14ms</span></div>
<div className="text-slate-500">[10:24:05 AM] <span className="ml-2 text-emerald-400">GET </span> <span className="ml-4 text-slate-400">/static/css/app.css       200 OK - 3ms</span></div>
<div className="text-slate-500">[10:24:05 AM] <span className="ml-2 text-emerald-400">GET </span> <span className="ml-4 text-slate-400">/static/js/app.js         200 OK - 5ms</span></div>
<div className="text-slate-500">[10:24:12 AM] <span className="ml-2 text-yellow-400">POST</span> <span className="ml-4 text-slate-400">/api/chat                 200 OK - 845ms (1 prompt token, 24 completion tokens)</span></div>
<div className="flex mt-4 items-center"><div className="w-2 h-3 animate-pulse bg-slate-400"></div></div>
</div>
</div>
</div>
</div>
</section>

<div className="my-20 flex items-center justify-center space-x-4">
<div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
<span className="text-xs font-semibold uppercase tracking-widest text-slate-400">Reference &amp; Advanced</span>
<div className="h-px flex-1 bg-slate-200 dark:bg-slate-800"></div>
</div>

<section className="mb-24 scroll-mt-32" id="section-10">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
<iconify-icon className="text-amber-500" icon="solar:star-outline"></iconify-icon>
<span>10. Tips, Tricks &amp; Pro Advice</span>
</h3>
<div className="grid md:grid-cols-2 gap-6">
<div className="border rounded-xl p-5 shadow-sm bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<h4 className="text-sm font-semibold mb-4 border-b pb-2 text-slate-900 dark:text-slate-100 border-slate-100 dark:border-slate-800/50">Essential Shortcuts</h4>
<ul className="space-y-3">
<li className="flex items-center justify-between text-sm">
<span className="text-slate-600 dark:text-slate-400">Auto-complete commands</span>
<kbd className="border px-2 py-0.5 rounded text-xs font-mono shadow-sm bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">Tab</kbd>
</li>
<li className="flex items-center justify-between text-sm">
<span className="text-slate-600 dark:text-slate-400">Previous command</span>
<kbd className="border px-2 py-0.5 rounded text-xs font-mono shadow-sm bg-slate-100 border-slate-200 text-slate-700 dark:bg-slate-800 dark:border-slate-700 dark:text-slate-300">↑ Arrow</kbd>
</li>
</ul>
</div>
<div className="rounded-xl p-6 shadow-sm font-mono text-xs flex flex-col justify-center border bg-slate-900 text-slate-300 border-slate-800 dark:bg-[#0c0c0c] dark:border-slate-700">
<div className="mb-3 border-b pb-2 text-slate-400 border-slate-700"># Run these monthly to stay updated:</div>
<div className="text-slate-500 mb-1">// Update Homebrew &amp; CLI tools</div>
<code className="block mb-4 p-2 rounded text-green-300 bg-black/30 dark:bg-black/50">brew update &amp;&amp; brew upgrade</code>
<div className="text-slate-500 mb-1">// Update Claude CLI &amp; NanoClaw</div>
<code className="block p-2 rounded text-blue-300 bg-black/30 dark:bg-black/50">npm update -g @anthropic-ai/claude-code nanoclaw</code>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-32" id="section-11">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
<iconify-icon className="text-red-500" icon="solar:danger-triangle-outline"></iconify-icon>
<span>11. Common Beginner Mistakes</span>
</h3>
<div className="grid md:grid-cols-2 gap-4">
<div className="border p-5 rounded-xl relative overflow-hidden shadow-sm bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-red-400 dark:bg-red-500/60"></div>
<h4 className="text-sm font-semibold mb-2 flex items-center text-slate-900 dark:text-slate-100">
<iconify-icon className="text-red-500 dark:text-red-400 mr-2 text-lg" icon="solar:close-square-outline"></iconify-icon>
                            Closing the Server Terminal
                        </h4>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">If you close the terminal running `nanoclaw`, the web interface breaks. You can minimize it, but keep it running.</p>
</div>
<div className="border p-5 rounded-xl relative overflow-hidden shadow-sm bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-red-400 dark:bg-red-500/60"></div>
<h4 className="text-sm font-semibold mb-2 flex items-center text-slate-900 dark:text-slate-100">
<iconify-icon className="text-red-500 dark:text-red-400 mr-2 text-lg" icon="solar:shield-warning-outline"></iconify-icon>
                            Sharing API Keys
                        </h4>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Never paste your API key in public forums or GitHub. If accidentally leaked, delete it on the Anthropic dashboard immediately.</p>
</div>
<div className="border p-5 rounded-xl relative overflow-hidden shadow-sm bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-400 dark:bg-amber-500/60"></div>
<h4 className="text-sm font-semibold mb-2 flex items-center text-slate-900 dark:text-slate-100">
<iconify-icon className="text-amber-500 dark:text-amber-400 mr-2 text-lg" icon="solar:eye-closed-outline"></iconify-icon>
                            Ignoring Error Messages
                        </h4>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">Terminal errors look scary but tell you exactly what's wrong. Read them. Often it says "Run X to fix this".</p>
</div>
<div className="border p-5 rounded-xl relative overflow-hidden shadow-sm bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 dark:shadow-none transition-colors">
<div className="absolute top-0 left-0 w-1 h-full bg-amber-400 dark:bg-amber-500/60"></div>
<h4 className="text-sm font-semibold mb-2 flex items-center text-slate-900 dark:text-slate-100">
<iconify-icon className="text-amber-500 dark:text-amber-400 mr-2 text-lg" icon="solar:refresh-circle-outline"></iconify-icon>
                            Not Reloading Config
                        </h4>
<p className="text-xs leading-relaxed text-slate-600 dark:text-slate-400">After editing `.zshrc`, your Terminal doesn't know about it yet. You must run `source ~/.zshrc` or restart the app entirely.</p>
</div>
</div>
</section>

<section className="mb-24 scroll-mt-32" id="section-12">
<h3 className="text-xl font-semibold tracking-tight mb-6 flex items-center space-x-2 text-slate-900 dark:text-slate-100">
<iconify-icon className="text-blue-500" icon="solar:document-text-outline"></iconify-icon>
<span>12. Your Complete Cheat Sheet</span>
</h3>
<div className="columns-1 md:columns-2 gap-6 space-y-6">
<div className="border rounded-xl p-0 overflow-hidden shadow-sm break-inside-avoid bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 transition-colors">
<div className="px-5 py-3 border-b text-xs font-semibold uppercase tracking-wider bg-slate-50 dark:bg-[#161616] border-slate-100 dark:border-slate-800/50 text-slate-700 dark:text-slate-300">File Navigation</div>
<div className="p-5 space-y-3 font-mono text-xs">
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-slate-800 dark:text-slate-200">pwd</span><span className="text-slate-500 dark:text-slate-400">Print working directory</span></div>
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-slate-800 dark:text-slate-200">ls -la</span><span className="text-slate-500 dark:text-slate-400">List all files (incl. hidden)</span></div>
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-slate-800 dark:text-slate-200">cd ~</span><span className="text-slate-500 dark:text-slate-400">Go to home directory</span></div>
<div className="flex justify-between"><span className="font-semibold text-slate-800 dark:text-slate-200">clear</span><span className="text-slate-500 dark:text-slate-400">Clear terminal screen</span></div>
</div>
</div>
<div className="border rounded-xl p-0 overflow-hidden shadow-sm break-inside-avoid bg-white dark:bg-[#111] border-slate-200 dark:border-slate-800 transition-colors">
<div className="px-5 py-3 border-b text-xs font-semibold uppercase tracking-wider bg-slate-50 dark:bg-[#161616] border-slate-100 dark:border-slate-800/50 text-slate-700 dark:text-slate-300">NanoClaw &amp; Claude Commands</div>
<div className="p-5 space-y-3 font-mono text-xs">
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-blue-600 dark:text-blue-400">nanoclaw</span><span className="text-slate-500 dark:text-slate-400">Start web UI server</span></div>
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-slate-800 dark:text-slate-200">claude -i</span><span className="text-slate-500 dark:text-slate-400">Start CLI interactive chat</span></div>
<div className="flex justify-between border-b pb-2 border-slate-50 dark:border-slate-800/30"><span className="font-semibold text-slate-800 dark:text-slate-200">claude -p "Q"</span><span className="text-slate-500 dark:text-slate-400">Ask a quick question</span></div>
<div className="flex justify-between"><span className="font-semibold text-slate-800 dark:text-slate-200">Ctrl + C</span><span className="text-red-400 dark:text-red-400">Kill running server</span></div>
</div>
</div>
</div>
</section>
<footer className="mt-32 pt-8 border-t text-center border-slate-200/60 dark:border-slate-800">
<div className="inline-flex items-center justify-center w-12 h-12 rounded-xl shadow-lg mb-4 bg-slate-900 dark:bg-white text-white dark:text-slate-900 transition-colors">
<span className="font-bold tracking-tighter text-lg">NC</span>
</div>
<p className="text-sm font-semibold mb-2 text-slate-900 dark:text-slate-100">You successfully built a local AI stack.</p>
<p className="text-xs text-slate-500 dark:text-slate-400 max-w-md mx-auto leading-relaxed">From knowing nothing about Terminal to having your own interface. <br/> The Complete NanoClaw + Claude Setup Guide</p>
</footer>
</main>
</div>


    </>
  );
}
