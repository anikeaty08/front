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
      
window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');

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
      

<aside className="w-56 border-r border-[#0c0c1e] bg-[#040408] flex-col shrink-0 relative z-20 transition-all duration-200 hidden md:flex">

<div className="p-3 border-b border-[#0c0c1e] flex items-center gap-3 shrink-0 cursor-pointer hover:opacity-80 transition-opacity min-h-[52px]">
<div className="w-7 h-7 rounded-lg shrink-0 bg-gradient-to-br from-[#00d4ff]/10 to-[#0c0c14] border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] shadow-[0_0_10px_rgba(0,212,255,0.1)]">
<iconify-icon className="text-sm" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex-1 min-w-0">
<div className="text-[#ccc] text-xs font-semibold tracking-widest">RUH•BOT</div>
<div className="text-[#111120] text-xs tracking-tight uppercase mt-0.5">RuH Ecosystem</div>
</div>
</div>

<div className="p-2 flex flex-col gap-1 shrink-0">

<button className="flex items-center gap-2 p-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/20 text-[#00d4ff] text-xs text-left w-full transition-colors group">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight font-medium">CHAT</span>
</button>
<button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 border border-transparent text-[#222232] hover:text-[#444456] text-xs text-left w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">CODE</span>
</button>
<button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 border border-transparent text-[#222232] hover:text-[#444456] text-xs text-left w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:shield-warning-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">RED TEAM</span>
</button>
<button className="flex items-center gap-2 p-2 rounded-lg hover:bg-white/5 border border-transparent text-[#222232] hover:text-[#444456] text-xs text-left w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:danger-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">0DAY</span>
</button>
</div>

<div className="flex-1 overflow-hidden flex flex-col border-t border-[#0c0c1e]">
<div className="p-2 flex items-center justify-between border-b border-[#09090e] shrink-0">
<span className="text-[#131322] text-xs tracking-widest">HISTORY</span>
<button className="border border-[#141428] rounded hover:border-[#2a2a3e] text-[#2a2a38] px-1.5 transition-colors">
<iconify-icon className="text-xs" icon="solar:add-square-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="overflow-y-auto flex-1 flex flex-col">

<div className="py-2 px-3 cursor-pointer bg-[#00d4ff]/5 border-l-2 border-[#00d4ff] flex items-start gap-2 group">
<iconify-icon className="text-[#00d4ff] text-xs shrink-0 mt-[3px]" icon="solar:chat-round-line-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-[#ccc] text-xs truncate tracking-tight">API Interception Logic</div>
<div className="text-[#0f0f1e] text-xs truncate mt-0.5">Review the routing core...</div>
</div>
</div>

<div className="py-2 px-3 cursor-pointer hover:bg-[#0b0b10] border-l-2 border-transparent flex items-start gap-2 transition-colors">
<iconify-icon className="text-[#39ff14] text-xs shrink-0 mt-[3px] opacity-70" icon="solar:code-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-[#242434] text-xs truncate tracking-tight">Tailwind Modal Auth</div>
<div className="text-[#0f0f1e] text-xs truncate mt-0.5">Need a dark theme login...</div>
</div>
</div>

<div className="py-2 px-3 cursor-pointer hover:bg-[#0b0b10] border-l-2 border-transparent flex items-start gap-2 transition-colors">
<iconify-icon className="text-[#ff6600] text-xs shrink-0 mt-[3px] opacity-70" icon="solar:danger-linear" strokeWidth="1.5"></iconify-icon>
<div className="flex-1 min-w-0">
<div className="text-[#242434] text-xs truncate tracking-tight">OWASP Analysis</div>
<div className="text-[#0f0f1e] text-xs truncate mt-0.5">Deep dive into recent...</div>
</div>
</div>
</div>
</div>

<div className="p-2 px-3 border-t border-[#09090e] shrink-0">
<div className="text-[#131322] text-xs tracking-widest mb-1.5">TOTAL TOKENS</div>
<div className="text-[#00d4ff] text-sm font-semibold mb-1.5 tracking-tight">1.2M</div>
<div className="h-[2px] bg-[#0c0c16] rounded-full overflow-hidden">
<div className="h-full w-[35%] bg-[#00d4ff] rounded-full"></div>
</div>
</div>

<div className="p-2 border-t border-[#0c0c1e] flex flex-col gap-0.5 shrink-0">
<button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 text-[#222232] hover:text-[#444456] text-xs w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">SEARCH</span>
</button>
<button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 text-[#222232] hover:text-[#444456] text-xs w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:clock-circle-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">CLOCK</span>
</button>
<button className="flex items-center gap-2 p-1.5 rounded-lg hover:bg-white/5 text-[#222232] hover:text-[#444456] text-xs w-full transition-colors">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:settings-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">SETTINGS</span>
</button>

<button className="flex items-center gap-2 p-2 rounded-lg bg-[#cc785c]/10 border border-[#cc785c]/20 text-[#cc785c] text-xs w-full transition-colors mt-1.5 shadow-[0_0_15px_rgba(204,120,92,0.05)]">
<iconify-icon className="text-sm shrink-0 w-4 text-center" icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="truncate tracking-tight font-medium">Anthropic Claude ✓</span>
</button>
<div className="flex gap-1 mt-1">
<button className="flex items-center justify-center p-1.5 rounded-lg hover:bg-white/5 text-[#1a1a2a] hover:text-[#33334a] flex-1 transition-colors">
<iconify-icon className="text-sm" icon="solar:home-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="flex items-center justify-center p-1.5 rounded-lg hover:bg-white/5 text-[#1a1a2a] hover:text-[#33334a] flex-1 transition-colors">
<iconify-icon className="text-sm" icon="solar:logout-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 flex flex-col overflow-hidden relative min-w-0 bg-[#030306]">

<div className="absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_0%,rgba(0,212,255,0.03)_0%,transparent_70%)] pointer-events-none z-0"></div>
<div className="absolute inset-x-0 top-0 h-px overflow-hidden pointer-events-none z-0">
<div className="h-px w-[48%] bg-gradient-to-r from-transparent via-[#00d4ff]/40 to-transparent" style={{animation: 'scanH 5.5s linear infinite'}}></div>
</div>

<header className="p-3 px-4 md:px-6 border-b border-[#00d4ff]/10 flex items-center justify-between bg-gradient-to-r from-[#00d4ff]/5 to-transparent shrink-0 z-10 min-h-[50px] backdrop-blur-sm">
<div className="flex items-center gap-3 min-w-0">
<button className="md:hidden bg-[#00d4ff]/10 border border-[#00d4ff]/20 rounded-md text-[#00d4ff] p-1.5 shrink-0 flex items-center justify-center transition-colors hover:bg-[#00d4ff]/20">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
<div className="min-w-0">
<div className="text-[#00d4ff] text-xs font-semibold tracking-widest whitespace-nowrap">CHAT MODE</div>
<div className="text-[#0f0f1e] text-xs whitespace-nowrap overflow-hidden text-ellipsis max-w-sm hidden sm:block mt-0.5">Advanced AI · Auto-Detect · Multi-Language</div>
</div>
<div className="hidden md:flex items-center gap-1.5 px-2.5 py-1 bg-[#cc785c]/10 border border-[#cc785c]/20 rounded-full text-[#cc785c] text-xs whitespace-nowrap shrink-0 ml-2">
<iconify-icon icon="solar:diamonds-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">Anthropic Claude</span>
</div>
</div>
<div className="flex items-center gap-3 shrink-0">
<span className="text-[#2a2a3a] text-xs tracking-widest hidden lg:inline pt-0.5">14:42:09</span>
<div className="flex items-center gap-1.5 ml-2">
<button className="border border-[#131322] bg-[#05050a] rounded text-[#242434] hover:text-[#556] hover:border-[#223] p-1.5 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:download-linear" strokeWidth="1.5"></iconify-icon>
</button>
<button className="border border-[#131322] bg-[#05050a] rounded text-[#242434] hover:text-[#556] hover:border-[#223] p-1.5 transition-colors flex items-center justify-center">
<iconify-icon className="text-sm" icon="solar:magnifer-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
<div className="flex items-center gap-1.5 ml-2 hidden sm:flex">
<div className="w-[5px] h-[5px] rounded-full bg-[#39ff14] shadow-[0_0_6px_#39ff14]"></div>
<span className="text-[#39ff14] text-xs tracking-tight pt-0.5">LIVE</span>
</div>
<button className="bg-[#00d4ff]/10 border border-[#00d4ff]/20 hover:bg-[#00d4ff]/15 rounded text-[#00d4ff] text-xs px-2.5 py-1.5 flex items-center gap-1.5 tracking-tight transition-colors">
<iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon>
<span className="font-medium">3 KEYS</span>
</button>
</div>
</header>

<div className="flex-1 overflow-y-auto p-4 md:p-6 lg:p-8 relative z-0 flex flex-col">

<div className="flex gap-3 mb-6 items-start group animate-[fadeIn_0.3s_ease]">
<div className="w-7 h-7 rounded-full border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] shadow-[0_0_11px_rgba(0,212,255,0.12)] shrink-0">
<iconify-icon className="text-xs" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-w-[85%] md:max-w-[75%] text-[#b0b0c4] text-sm leading-relaxed pt-1">
<p className="mb-3">Global AI Interception Engine initialized. Provider detected: <strong className="text-[#00d4ff] font-medium">Anthropic</strong>.</p>
<p className="mb-4">I am ready to assist with full context retention across domains. What are we building?</p>
<div className="mt-2 text-xs text-[#161624] tracking-tight">[claude-sonnet-4-5 · 34t]</div>
</div>
</div>

<div className="flex flex-row-reverse gap-3 mb-6 items-start group relative animate-[fadeIn_0.3s_ease]">
<div className="w-7 h-7 rounded-lg border border-[#191928] bg-[#09091e] flex items-center justify-center text-[#334] shrink-0">
<iconify-icon className="text-xs" icon="solar:user-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-w-[85%] md:max-w-[75%] bg-[#09091e] border border-[#101122] rounded-xl px-4 py-3 text-[#c0c0cc] text-sm leading-relaxed whitespace-pre-wrap break-words shadow-sm">Initialize a React custom hook for global keyboard shortcuts that bypasses active input fields unless a modifier is held. Ensure it's typed perfectly in TypeScript.</div>

<div className="opacity-0 group-hover:opacity-100 absolute left-0 top-0 flex gap-1 bg-[#07070c] border border-[#12121e] rounded p-1 z-10 transition-opacity">
<button className="text-[#334] hover:text-[#556] text-xs p-1 flex items-center justify-center transition-colors"><iconify-icon icon="solar:close-square-linear"></iconify-icon></button>
</div>
</div>

<div className="flex gap-3 mb-6 items-start group relative animate-[fadeIn_0.3s_ease]">
<div className="w-7 h-7 rounded-full border border-[#00d4ff]/30 flex items-center justify-center text-[#00d4ff] shadow-[0_0_11px_rgba(0,212,255,0.12)] shrink-0">
<iconify-icon className="text-xs" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="max-w-[85%] md:max-w-[75%] text-[#b0b0c4] text-sm leading-relaxed pt-1 w-full">
<p className="mb-4">Here is the highly optimized <code className="bg-[#0b0b1c] border border-[#181828] rounded px-1.5 py-0.5 text-[#b8c0d8] text-xs">useShortcut</code> hook. It filters out events originating from typical input elements to prevent accidental triggering while typing, unless explicit modifier keys are enforced by your configuration.</p>
<div className="bg-[#040410] border border-[#10102a] rounded-xl my-4 overflow-hidden shadow-sm">
<div className="px-4 py-2 bg-[#08081a] border-b border-[#10102a] flex items-center justify-between">
<span className="text-[#2a2a45] text-xs tracking-widest font-medium">typescript</span>
<button className="border border-[#1a1a2e] rounded hover:bg-white/5 hover:border-[#2a2a45] text-[#2a2a45] hover:text-[#556] px-2 py-1 text-xs transition-colors flex items-center gap-1.5">
<iconify-icon icon="solar:copy-linear"></iconify-icon> <span className="tracking-tight">copy</span>
</button>
</div>
<pre className="p-4 overflow-x-auto m-0 leading-loose"><code className="text-sm text-[#c4c4d8]">import { useEffect, useCallback } from 'react';

type KeyCombo = string;
type CallbackFn = (e: KeyboardEvent) =&gt; void;

interface ShortcutOptions {
  bypassInputs?: boolean;
  preventDefault?: boolean;
}

export const useShortcut = (
  combo: KeyCombo,
  callback: CallbackFn,
  options: ShortcutOptions = {}
) =&gt; {
  const handleKeyDown = useCallback(
    (e: KeyboardEvent) =&gt; {
      // Logic to parse combo and check modifiers
      // ...
    },
    [combo, callback, options]
  );

  useEffect(() =&gt; {
    window.addEventListener('keydown', handleKeyDown);
    return () =&gt; window.removeEventListener('keydown', handleKeyDown);
  }, [handleKeyDown]);
};</code></pre>
</div>
<ul className="flex flex-col gap-2 mb-4">
<li className="flex gap-2 items-start">
<span className="text-[#00d4ff] shrink-0">▸</span>
<span className="text-[#b0b0c4]">The hook parses compound keys (e.g., <code className="bg-[#0b0b1c] border border-[#181828] rounded px-1.5 py-0.5 text-[#b8c0d8] text-xs">Ctrl+K</code>).</span>
</li>
<li className="flex gap-2 items-start">
<span className="text-[#00d4ff] shrink-0">▸</span>
<span className="text-[#b0b0c4]">It checks <code className="bg-[#0b0b1c] border border-[#181828] rounded px-1.5 py-0.5 text-[#b8c0d8] text-xs">e.target</code> against <code className="bg-[#0b0b1c] border border-[#181828] rounded px-1.5 py-0.5 text-[#b8c0d8] text-xs">INPUT</code>, <code className="bg-[#0b0b1c] border border-[#181828] rounded px-1.5 py-0.5 text-[#b8c0d8] text-xs">TEXTAREA</code>.</span>
</li>
</ul>
<div className="mt-2 text-xs text-[#161624] tracking-tight">[claude-sonnet-4-5 · 412t]</div>
</div>
</div>

<div className="flex gap-3 items-start mb-6">
<div className="w-7 h-7 rounded-full border border-[#00d4ff]/40 flex items-center justify-center text-[#00d4ff] shrink-0 shadow-[0_0_10px_rgba(0,212,255,0.1)]">
<iconify-icon className="text-xs" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="pt-2 flex flex-col gap-2.5">
<div className="flex gap-1.5 px-1">
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-[pulse_1s_infinite_0ms]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-[pulse_1s_infinite_200ms]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#00d4ff] animate-[pulse_1s_infinite_400ms]"></div>
</div>
<button className="text-[#242438] text-xs hover:text-[#445] flex items-center gap-1.5 w-fit border border-[#131328] hover:border-[#223] rounded px-2 py-1 mt-1 transition-colors tracking-tight">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon> cancel
                    </button>
</div>
</div>

<div className="h-4 w-full"></div>
</div>

<div className="p-3 md:p-5 border-t border-[#00d4ff]/10 bg-gradient-to-t from-[#030306] to-[#04040a] shrink-0 relative z-10 backdrop-blur-md">

<div className="flex gap-1.5 mb-3 overflow-x-auto pb-1 scrollbar-hide items-center px-1">
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#cc785c]/10 border border-[#cc785c]/30 text-[#cc785c] text-xs whitespace-nowrap shrink-0 transition-all hover:bg-[#cc785c]/20">
<iconify-icon icon="solar:diamonds-square-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight font-medium">Anthropic Claude ✓</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#2a2a38] hover:text-gray-300 hover:bg-white/10 text-xs whitespace-nowrap shrink-0 transition-all">
<iconify-icon icon="solar:infinity-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">OpenAI GPT-4o</span>
</button>
<button className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[#2a2a38] hover:text-gray-300 hover:bg-white/10 text-xs whitespace-nowrap shrink-0 transition-all">
<iconify-icon icon="solar:cloud-plus-linear" strokeWidth="1.5"></iconify-icon>
<span className="tracking-tight">Groq Ultra</span>
</button>
<div className="w-px h-3 bg-[#141428] mx-1"></div>
<button className="flex items-center px-3 py-1 rounded-full bg-transparent border border-[#141428] text-[#1a1a28] hover:text-[#445] hover:border-[#223] text-xs whitespace-nowrap shrink-0 transition-colors tracking-tight">
                    + add key
                </button>
</div>

<div className="flex gap-2 items-end bg-[#08080e] border border-[#0d0d1c] focus-within:border-[#00d4ff]/30 focus-within:shadow-[0_0_20px_rgba(0,212,255,0.07)] rounded-xl p-2.5 transition-all duration-200">
<textarea className="flex-1 bg-transparent border-none text-[#c0c0cc] text-sm leading-relaxed max-h-[120px] overflow-y-auto resize-none focus:outline-none focus:ring-0 w-full placeholder:text-[#2a2a3a] px-2 py-1" placeholder="Message RuHBot..." rows="1"></textarea>
<button className="px-3.5 py-2 rounded-lg bg-[#00d4ff]/10 border border-[#00d4ff]/30 text-[#00d4ff] text-sm shrink-0 self-end hover:bg-[#00d4ff]/20 hover:shadow-[0_0_15px_rgba(0,212,255,0.15)] transition-all flex items-center justify-center">
<iconify-icon icon="solar:plain-2-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>

<div className="mt-3 flex justify-between text-[#0a0a1c] text-[0.65rem] select-none tracking-tight px-1 uppercase">
<span className="flex items-center gap-1.5">
<span className="text-[#111122]">CHAT</span>
<span className="w-1 h-1 rounded-full bg-[#111122]"></span>
<span className="text-[#111122]">Anthropic Claude</span>
<span className="w-1 h-1 rounded-full bg-[#111122]"></span>
<span className="text-[#111122]">@riyad</span>
</span>
<span className="hidden md:inline text-[#111122]">
                    RuHBot v3.0 · ruhaisystem@gmail.com
                </span>
</div>
</div>
</main>


<div className="fixed inset-0 bg-black/92 backdrop-blur-sm z-[800] items-center justify-center p-4 hidden">
<div className="bg-[#06060c] border border-[#00d4ff]/10 rounded-2xl w-full max-w-[520px] max-h-[90vh] flex flex-col shadow-[0_24px_80px_rgba(0,0,0,0.65),0_0_40px_rgba(0,212,255,0.08)]">
<div className="p-4 px-5 border-b border-[#0e0e1c] flex justify-between items-center shrink-0">
<h2 className="text-[#ccc] text-lg font-semibold tracking-tight uppercase flex items-center gap-2">
<iconify-icon className="text-[#00d4ff] text-xl" icon="solar:settings-linear"></iconify-icon>
                    Settings
                </h2>
<button className="text-[#334] hover:text-[#667] text-xl p-1 transition-colors flex items-center justify-center">
<iconify-icon icon="solar:close-square-linear"></iconify-icon>
</button>
</div>
<div className="p-5 overflow-y-auto flex-1 flex flex-col">
<div className="flex gap-1 border-b border-[#0e0e1c] mb-5">
<button className="px-4 py-2 border-b-2 border-[#00d4ff] text-[#00d4ff] text-xs tracking-widest font-medium transition-colors">ABOUT</button>
<button className="px-4 py-2 border-b-2 border-transparent text-[#2a2a38] hover:text-[#445] text-xs tracking-widest transition-colors">USAGE</button>
<button className="px-4 py-2 border-b-2 border-transparent text-[#2a2a38] hover:text-[#445] text-xs tracking-widest transition-colors">SHORTCUTS</button>
</div>

<div className="p-4 bg-[#cc785c]/5 border border-[#cc785c]/20 rounded-xl mb-5 flex items-center justify-between">
<div className="flex items-center gap-3">
<iconify-icon className="text-2xl text-[#cc785c]" icon="solar:diamonds-square-linear"></iconify-icon>
<div>
<div className="text-[#cc785c] text-xs font-semibold tracking-tight mb-0.5">Anthropic Claude ✓ ACTIVE</div>
<div className="text-[#2a2a38] text-xs">claude-sonnet-4-5 · sk-ant-•••</div>
</div>
</div>
<button className="border border-[#1a1a2e] rounded hover:border-[#2a2a3e] text-[#445] hover:text-[#667] text-xs px-3 py-1 transition-colors">manage</button>
</div>

<div className="flex flex-col gap-1.5 mb-5">
<div className="flex justify-between items-center p-2.5 px-3 bg-[#07070c] border border-[#0e0e1c] rounded-lg">
<span className="text-[#1e1e2a] text-xs tracking-tight">Product</span>
<span className="text-[#445] text-xs tracking-tight">RuHBot v3.0</span>
</div>
<div className="flex justify-between items-center p-2.5 px-3 bg-[#07070c] border border-[#0e0e1c] rounded-lg">
<span className="text-[#1e1e2a] text-xs tracking-tight">Developer</span>
<span className="text-[#445] text-xs tracking-tight">Riyad Islam</span>
</div>
<div className="flex justify-between items-center p-2.5 px-3 bg-[#07070c] border border-[#0e0e1c] rounded-lg">
<span className="text-[#1e1e2a] text-xs tracking-tight">Ecosystem</span>
<span className="text-[#445] text-xs tracking-tight">RuH Ecosystem</span>
</div>
</div>
<button className="w-full p-3 bg-[#ff3366]/5 border border-[#ff3366]/20 rounded-xl text-[#ff3366] text-xs font-medium tracking-widest hover:bg-[#ff3366]/10 transition-colors mt-auto">
                    LOGOUT
                </button>
</div>
</div>
</div>

    </>
  );
}
