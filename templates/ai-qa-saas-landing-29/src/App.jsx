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
      

<nav className="fixed inset-x-0 top-0 h-[52px] z-[999] bg-[#1c1c1e]/90 backdrop-blur-md border-b border-[#3a3a3c]">
<div className="max-w-[1080px] mx-auto px-6 md:px-10 h-full flex items-center justify-between gap-4">
<a className="flex items-center gap-2 shrink-0" href="#">
<span className="text-sm font-semibold tracking-tighter text-[#f2f2f7]">Prest Code</span>
</a>
<ul className="hidden md:flex items-center gap-1">
<li><a className="text-sm text-[#8e8e93] hover:text-[#f2f2f7] px-3 py-1.5 rounded-lg transition-colors font-normal" href="#how">How it works</a></li>
<li><a className="text-sm text-[#8e8e93] hover:text-[#f2f2f7] px-3 py-1.5 rounded-lg transition-colors font-normal" href="#cap">Capabilities</a></li>
<li><a className="text-sm text-[#8e8e93] hover:text-[#f2f2f7] px-3 py-1.5 rounded-lg transition-colors font-normal" href="#compare">Compare</a></li>
<li><a className="text-sm text-[#8e8e93] hover:text-[#f2f2f7] px-3 py-1.5 rounded-lg transition-colors font-normal" href="#pricing">Pricing</a></li>
</ul>
<div className="flex items-center gap-2 shrink-0">
<a className="hidden sm:inline-flex items-center gap-1.5 text-sm font-medium px-3.5 py-1.5 rounded-lg border border-[#48484a] text-[#8e8e93] hover:text-[#f2f2f7] hover:border-[#545456] transition-all" href="#">Docs</a>
<a className="inline-flex items-center gap-1.5 text-sm font-semibold px-3.5 py-1.5 rounded-lg bg-[#E8B84B] text-white hover:bg-[#d4a43e] transition-all" href="#">
          Get access
          <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="block">

<section className="min-h-screen pt-[52px] relative overflow-hidden flex items-center" id="hero">
<div className="absolute top-[40%] left-1/2 -translate-x-1/2 -translate-y-1/2 w-[760px] h-[480px] bg-[radial-gradient(ellipse,rgba(232,184,75,0.07)_0%,transparent_65%)] pointer-events-none"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle,#3a3a3c_1px,transparent_1px)] bg-[size:32px_32px] opacity-60 pointer-events-none [mask-image:radial-gradient(ellipse_80%_70%_at_50%_50%,black_20%,transparent_100%)]"></div>
<div className="max-w-[1080px] w-full mx-auto px-6 md:px-10 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center w-full">
<div className="flex flex-col lg:col-span-2">
<div className="inline-flex items-center gap-2 text-xs font-medium text-[#8e8e93] tracking-wider uppercase mb-5">
<span className="w-1.5 h-1.5 rounded-full bg-[#3ecf8e] shadow-[0_0_7px_#3ecf8e] shrink-0"></span>
              Phase 2 live — agentic self-healing
            </div>
<h1 className="text-4xl md:text-5xl lg:text-5xl font-semibold tracking-tight leading-[1.08] text-[#f2f2f7] mb-5">
              The world's first<br/>
<span className="inline-block overflow-hidden align-bottom h-[1.08em]"><span className="block text-[#E8B84B] will-change-transform" id="heroSwitch">purpose-driven</span></span><br/>
              Product Integrity tool.
            </h1>
<p className="text-base text-[#8e8e93] leading-relaxed max-w-md mb-8 font-normal">
              Shift-Left Agentic QA that <strong className="text-[#f2f2f7] font-medium">deeply analyzes your source code</strong>,
              physically executes end-to-end tests, and
              <strong className="text-[#f2f2f7] font-medium">auto-generates &amp; heals the entire test suite</strong>
              before a human ever merges it.
              <strong className="text-[#f2f2f7] font-medium">Zero dashboards. Zero test-rot.</strong>
</p>
<div className="flex items-center gap-3 mb-10">
<a className="inline-flex items-center gap-1.5 text-sm font-semibold px-5 py-2.5 rounded-xl bg-[#E8B84B] text-white hover:bg-[#d4a43e] transition-all" href="#">
                Get early access
                <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="inline-flex items-center gap-1.5 text-sm font-medium px-5 py-2.5 rounded-xl border border-[#48484a] text-[#8e8e93] hover:text-[#f2f2f7] hover:border-[#545456] transition-all" href="#how">How it works</a>
</div>
<div className="flex items-center gap-6 pt-6 border-t border-[#3a3a3c] flex-wrap">
<div className="flex flex-col gap-0.5">
<div className="text-xl font-semibold tracking-tight leading-none text-[#E8B84B]">85%</div>
<div className="text-xs font-normal text-[#6e6e73]">heal rate</div>
</div>
<div className="w-[1px] h-6 bg-[#3a3a3c] shrink-0"></div>
<div className="flex flex-col gap-0.5">
<div className="text-xl font-semibold tracking-tight leading-none text-[#f2f2f7]">&lt;2%</div>
<div className="text-xs font-normal text-[#6e6e73]">selector failures</div>
</div>
<div className="w-[1px] h-6 bg-[#3a3a3c] shrink-0"></div>
<div className="flex flex-col gap-0.5">
<div className="text-xl font-semibold tracking-tight leading-none text-[#f2f2f7]">200+</div>
<div className="text-xs font-normal text-[#6e6e73]">PRs in beta</div>
</div>
<div className="w-[1px] h-6 bg-[#3a3a3c] shrink-0 hidden sm:block"></div>
<div className="flex flex-col gap-0.5 hidden sm:flex">
<div className="text-xl font-semibold tracking-tight leading-none text-[#f2f2f7]">10</div>
<div className="text-xs font-normal text-[#6e6e73]">capabilities</div>
</div>
</div>
</div>
<div className="hidden lg:flex flex-col bg-[#060606] border border-[#48484a] rounded-[14px] overflow-hidden col-span-3">
<div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#333336] border-b border-[#3a3a3c] shrink-0">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
<span className="font-mono text-xs text-[#E8B84B] ml-1.5 transition-colors duration-300" id="code-win-label">Generating your test case</span>
</div>
<div className="p-5 font-mono text-sm leading-[1.8] h-[420px] overflow-y-auto overflow-x-hidden code-scroll" id="code-win-body"></div>
</div>
</div>
</div>
</section>

<div className="border-y border-[#3a3a3c] bg-[#242426]">
<div className="max-w-[1080px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
<div className="p-8 border-b sm:border-b-0 sm:border-r border-[#3a3a3c] hover:bg-[#2c2c2e] transition-colors">
<div className="text-4xl font-semibold tracking-tight leading-none text-[#E8B84B] mb-1.5">85%</div>
<div className="text-xs font-medium text-[#8e8e93]">Test heal rate</div>
<div className="text-xs font-normal text-[#6e6e73] mt-0.5">Across 200+ PRs in beta</div>
</div>
<div className="p-8 border-b sm:border-b-0 lg:border-r border-[#3a3a3c] hover:bg-[#2c2c2e] transition-colors">
<div className="text-4xl font-semibold tracking-tight leading-none text-[#f2f2f7] mb-1.5">&lt;2%</div>
<div className="text-xs font-medium text-[#8e8e93]">Selector failure rate</div>
<div className="text-xs font-normal text-[#6e6e73] mt-0.5">Down from 15% in legacy suites</div>
</div>
<div className="p-8 border-b sm:border-b-0 sm:border-r border-[#3a3a3c] hover:bg-[#2c2c2e] transition-colors">
<div className="text-4xl font-semibold tracking-tight leading-none text-[#f2f2f7] mb-1.5">3×</div>
<div className="text-xs font-medium text-[#8e8e93]">Self-correction retries</div>
<div className="text-xs font-normal text-[#6e6e73] mt-0.5">Before a test is rejected</div>
</div>
<div className="p-8 hover:bg-[#2c2c2e] transition-colors">
<div className="text-4xl font-semibold tracking-tight leading-none text-[#E8B84B] mb-1.5">Zero</div>
<div className="text-xs font-medium text-[#8e8e93]">Dashboards needed</div>
<div className="text-xs font-normal text-[#6e6e73] mt-0.5">Fully autonomous — no human in the loop</div>
</div>
</div>
</div>
</div>

<section className="bg-[#1c1c1e] border-t border-[#3a3a3c] py-14" id="how">
<div className="max-w-[1080px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-[200px_1fr] gap-10 lg:gap-16 items-start w-full">
<div>
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73] mb-3">Process</div>
<h2 className="text-2xl font-semibold tracking-tight leading-[1.2] text-[#f2f2f7]">
              From PR<br/>to tested<br/><span className="text-[#E8B84B]">in seconds.</span>
</h2>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-[1px] bg-[#3a3a3c] rounded-[14px] overflow-hidden">
<div className="bg-[#242426] p-6 pb-5 hover:bg-[#2c2c2e] transition-colors group">
<div className="font-mono text-xs font-medium text-[#6e6e73] tracking-widest mb-3">01</div>
<iconify-icon className="text-xl text-[#6e6e73] group-hover:text-[#E8B84B] mb-3 transition-colors" icon="solar:folder-with-files-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-2">Deep Code Crawl</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6]">Git repo access lets PrestCode read your full source tree — not just the diff. Extracts component names, data-cy selectors, and maps 14 feature areas for true white-box analysis.</div>
<span className="inline-block mt-3 font-mono text-xs text-[#6e6e73] bg-[#333336] border border-[#3a3a3c] rounded px-1.5 py-0.5">Git repo access · Octokit REST</span>
</div>
<div className="bg-[#242426] p-6 pb-5 hover:bg-[#2c2c2e] transition-colors group">
<div className="font-mono text-xs font-medium text-[#6e6e73] tracking-widest mb-3">02</div>
<iconify-icon className="text-xl text-[#6e6e73] group-hover:text-[#E8B84B] mb-3 transition-colors" icon="solar:magic-stick-3-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-2">AI Generation</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6]">Claude 3.5 Sonnet writes a complete POM Playwright TypeScript spec. No stubs, no placeholders.</div>
<span className="inline-block mt-3 font-mono text-xs text-[#6e6e73] bg-[#333336] border border-[#3a3a3c] rounded px-1.5 py-0.5">Claude 3.5 Sonnet</span>
</div>
<div className="bg-[#242426] p-6 pb-5 hover:bg-[#2c2c2e] transition-colors group">
<div className="font-mono text-xs font-medium text-[#6e6e73] tracking-widest mb-3">03</div>
<iconify-icon className="text-xl text-[#6e6e73] group-hover:text-[#E8B84B] mb-3 transition-colors" icon="solar:refresh-circle-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-2">Self-Correction</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6]">Validates with tsc --noEmit. Compiler errors feed back to the LLM. Up to 3 retries before rejection.</div>
<span className="inline-block mt-3 font-mono text-xs text-[#6e6e73] bg-[#333336] border border-[#3a3a3c] rounded px-1.5 py-0.5">tsc + LLM loop</span>
</div>
<div className="bg-[#242426] p-6 pb-5 hover:bg-[#2c2c2e] transition-colors group">
<div className="font-mono text-xs font-medium text-[#6e6e73] tracking-widest mb-3">04</div>
<iconify-icon className="text-xl text-[#6e6e73] group-hover:text-[#E8B84B] mb-3 transition-colors" icon="solar:branching-paths-up-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-2">Auto-Commit</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6]">Creates a branch, commits the validated spec, opens a PR with full coverage summary.</div>
<span className="inline-block mt-3 font-mono text-xs text-[#6e6e73] bg-[#333336] border border-[#3a3a3c] rounded px-1.5 py-0.5">GitHub API</span>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#242426] border-y border-[#3a3a3c] py-14" id="cap">
<div className="max-w-[1080px] mx-auto px-6 md:px-10 w-full">
<div className="flex flex-col md:flex-row items-start md:items-end justify-between gap-6 mb-10">
<div>
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73] mb-2.5">Capabilities</div>
<h2 className="text-3xl font-semibold tracking-tight leading-[1.1] text-[#f2f2f7]">Not a linter.<br/><span className="text-[#E8B84B]">A full QA agent.</span></h2>
</div>
<p className="text-sm font-normal text-[#8e8e93] leading-[1.6] max-w-[260px] md:text-right">Ten production-grade capabilities working in concert — from white-box source crawling to proactive rot prevention. <strong className="text-[#f2f2f7] font-medium">Requires Git repo access</strong> to enable white-box analysis, code crawling, and deep product understanding.</p>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 auto-rows-fr gap-[1px] bg-[#3a3a3c] rounded-[14px] overflow-hidden">
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:refresh-square-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Agentic Self-Healing Loop</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Validates TypeScript on every generation, feeds compiler errors back to the LLM, and retries — rejecting tests that are empty or semantically hollow.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">3 retries · tsc --noEmit</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:monitor-camera-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">MCP Live Browser Execution</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Connects to a @playwright/mcp subprocess, captures a real accessibility tree snapshot, and heals broken selectors against the live DOM in real time.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">@playwright/mcp · MCP SDK</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Test Rot Detection</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Periodically scans all .spec.ts files, cross-references selectors against the live accessibility tree, and auto-commits confidence-scored fixes before CI breaks.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">Proactive · no CI failure</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:map-point-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Risk-Coverage Mapping</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Uses the TypeScript Compiler API to calculate a Churn-to-Coverage Ratio per changed file and flags uncovered high-churn files as high, medium, or low risk.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">TS Compiler API</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:lock-password-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Zero-Config Credentialing</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">AES-256-GCM encrypted .vault.enc stores credentials that inject directly into BrowserContextOptions. Your secrets are never passed to any LLM.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">AES-256-GCM · no LLM exposure</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:document-add-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">PRD Compliance Engine</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Loads .prd.md or figma-specs.json, compares the PR diff against your live page. If a requirement mismatch is found, test generation halts and a warning is posted to the PR.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">Gemini 2.0 Flash</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:target-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Goal-Oriented Spider Agent</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Takes a natural-language goal and autonomously navigates, clicks, types, and snapshots your live app in a multi-turn agent loop — up to 10 steps — to find logic gaps and bypass vulnerabilities.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">Gemini 2.0 Flash · 10-step loop</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:brain-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">PR Intelligence Engine</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Maps changed file paths to 14 feature areas. Reads your full source tree via Git access to extract React component names, data-cy selectors, CSS classes, and visible text — enabling true white-box test generation.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">Git access · 14 feature areas</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
<div className="bg-[#2c2c2e] p-6 pb-5 flex flex-col transition-colors hover:bg-[#333336] group sm:col-span-2 lg:col-span-1">
<iconify-icon className="text-xl text-[#6e6e73] mb-3.5 transition-colors group-hover:text-[#E8B84B]" icon="solar:calendar-date-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
<div className="text-sm font-medium text-[#f2f2f7] tracking-tight mb-1.5">Sprint-Aware Scheduling</div>
<div className="text-xs font-normal text-[#8e8e93] leading-[1.6] flex-1">Understands your sprint cadence and prioritises test generation for high-churn, deadline-critical PRs first. Risk scores surface exactly which untested files will break your release.</div>
<div className="flex items-center justify-between mt-3.5 pt-3 border-t border-[#3a3a3c]">
<span className="font-mono text-xs text-[#6e6e73]">TS Compiler API</span>
<iconify-icon className="text-[#545456] transition-all group-hover:text-[#8e8e93] group-hover:translate-x-0.5 group-hover:-translate-y-0.5 text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</div>
</div>
</div>
</div>
</section>

<section className="bg-[#1c1c1e] border-t border-[#3a3a3c] py-14" id="cli">
<div className="max-w-[1080px] mx-auto px-6 md:px-10">
<div className="grid grid-cols-1 lg:grid-cols-[1fr_1.55fr] gap-12 lg:gap-16 items-center w-full">
<div>
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73] mb-3">Interface</div>
<h2 className="text-3xl font-semibold tracking-tight leading-[1.15] text-[#f2f2f7] mb-2">
              Five commands.<br/>
<span className="text-[#E8B84B]">Full lifecycle.</span>
</h2>
<p className="text-sm font-normal text-[#8e8e93] leading-[1.65] mb-6">The entire testing loop from one terminal. Point at a PR — the rest is automatic.</p>
<div className="flex flex-col gap-1">
<div className="cli-cmd flex items-center gap-3 p-2.5 rounded-lg border border-transparent cursor-pointer transition-all bg-[#2c2c2e] border-[#48484a]" onclick="setCmd(0,this)">
<span className="cli-cmd-name font-mono text-sm font-medium min-w-[90px] transition-colors text-[#E8B84B]">generate</span>
<span className="cli-cmd-desc text-xs font-normal text-[#6e6e73]">Analyze PR and generate tests</span>
</div>
<div className="cli-cmd flex items-center gap-3 p-2.5 rounded-lg border border-transparent cursor-pointer hover:bg-[#2c2c2e] transition-all" onclick="setCmd(1,this)">
<span className="cli-cmd-name font-mono text-sm font-medium min-w-[90px] transition-colors text-[#8e8e93]">crawl</span>
<span className="cli-cmd-desc text-xs font-normal text-[#6e6e73]">Goal-oriented security spider</span>
</div>
<div className="cli-cmd flex items-center gap-3 p-2.5 rounded-lg border border-transparent cursor-pointer hover:bg-[#2c2c2e] transition-all" onclick="setCmd(2,this)">
<span className="cli-cmd-name font-mono text-sm font-medium min-w-[90px] transition-colors text-[#8e8e93]">analyze</span>
<span className="cli-cmd-desc text-xs font-normal text-[#6e6e73]">Risk-coverage analysis only</span>
</div>
<div className="cli-cmd flex items-center gap-3 p-2.5 rounded-lg border border-transparent cursor-pointer hover:bg-[#2c2c2e] transition-all" onclick="setCmd(3,this)">
<span className="cli-cmd-name font-mono text-sm font-medium min-w-[90px] transition-colors text-[#8e8e93]">rot-check</span>
<span className="cli-cmd-desc text-xs font-normal text-[#6e6e73]">Scan and heal broken selectors</span>
</div>
<div className="cli-cmd flex items-center gap-3 p-2.5 rounded-lg border border-transparent cursor-pointer hover:bg-[#2c2c2e] transition-all" onclick="setCmd(4,this)">
<span className="cli-cmd-name font-mono text-sm font-medium min-w-[90px] transition-colors text-[#8e8e93]">webhook</span>
<span className="cli-cmd-desc text-xs font-normal text-[#6e6e73]">Listen for GitHub PR events</span>
</div>
</div>
</div>
<div className="bg-[#040404] border border-[#48484a] rounded-[14px] overflow-hidden">
<div className="flex items-center gap-1.5 px-4 py-2.5 bg-[#333336] border-b border-[#3a3a3c]">
<div className="w-2.5 h-2.5 rounded-full bg-[#ff5f57]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#febc2e]"></div>
<div className="w-2.5 h-2.5 rounded-full bg-[#28c840]"></div>
<span className="font-mono text-xs text-[#6e6e73] ml-1.5" id="term-fname">prest generate</span>
</div>
<div className="p-5 font-mono text-sm leading-[1.9] min-h-[210px] overflow-x-auto break-all sm:break-normal" id="term-body"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-24 bg-[#242426] border-t border-[#3a3a3c] text-center" id="sdet">
<div className="max-w-[680px] mx-auto px-6">
<div className="text-xs font-medium tracking-wider uppercase text-[#E8B84B] mb-5">The verdict</div>
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight leading-[1.05] text-[#f2f2f7] mb-5">Built specifically for the<br/><span className="text-[#E8B84B]">High Speed Engineering Teams</span></h2>
<p className="text-base text-[#8e8e93] leading-[1.7] mb-7 font-normal">PrestCode doesn't just generate tests — it acts like a senior SDET, a test consultant, a quality shield. It reads your source code, understands your product intent, executes real browser sessions, and keeps every test green sprint after sprint. No manual triage. No stale suites. No ticket backlog.</p>
<div className="flex flex-wrap gap-2 justify-center">
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">White-box analysis</span>
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">Live browser execution</span>
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">Pre-merge gate</span>
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">Sprint-aware</span>
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">Zero test-rot</span>
<span className="text-xs font-medium text-[#8e8e93] border border-[#48484a] rounded-full px-3.5 py-1.5 bg-[#2c2c2e]">Zero dashboards</span>
</div>
</div>
</section>

<section className="py-16 md:py-20 bg-[#1c1c1e] border-t border-[#3a3a3c]" id="compare">
<div className="max-w-[1080px] mx-auto px-6 md:px-10 flex flex-col gap-14">
<div className="flex flex-col md:flex-row justify-between items-start md:items-end gap-5">
<div>
<div className="text-xs font-medium tracking-wider uppercase text-[#E8B84B] mb-2.5">Head-to-head</div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight leading-[1.08] text-[#f2f2f7]">Pick a tool.<br/><span className="text-[#E8B84B]">See the gap.</span></h2>
</div>
<p className="text-sm text-[#8e8e93] leading-[1.65] max-w-[280px] shrink-0 md:text-right font-normal">Select any tool from the AI testing space and see exactly where PrestCode pulls ahead.</p>
</div>
<div className="flex flex-wrap gap-1.5" id="toolPicker">
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="qawolf">QA Wolf</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="mabl">Mabl</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="testim">Testim</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="decipher">Decipher AI</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="applitools">Applitools</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="coderabbit">CodeRabbit</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="saucelabs">Sauce Labs</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="cycloud">Cypress Cloud</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="devin">Sweep / Devin</button>
<button className="tool-pill text-sm px-4 py-1.5 rounded-full border border-[#48484a] bg-[#2c2c2e] text-[#8e8e93] cursor-pointer hover:text-[#f2f2f7] hover:border-[#545456] hover:bg-[#333336] transition-all select-none" data-tool="manual">Manual SDET</button>
</div>
<div className="grid grid-cols-1 md:grid-cols-[1fr_52px_1fr] items-stretch gap-0">
<div className="rounded-2xl p-7 flex flex-col gap-5 border border-[#E8B84B] bg-gradient-to-br from-[#E8B84B]/10 to-[#2c2c2e] shadow-[0_0_0_1px_#E8B84B,0_12px_48px_rgba(232,184,75,0.1)]">
<div className="flex items-start justify-between gap-3">
<div>
<div className="text-lg font-semibold tracking-tight text-[#f2f2f7] leading-[1.2]">PrestCode</div>
<div className="text-xs text-[#8e8e93] mt-1 leading-[1.5]">Agentic SDET · shifts left · zero dashboards</div>
</div>
<span className="text-[10px] font-semibold tracking-wide uppercase px-2.5 py-1 rounded bg-[#E8B84B]/10 text-[#E8B84B] border border-[#E8B84B]/20 whitespace-nowrap shrink-0 mt-0.5">Our pick</span>
</div>
<div className="flex flex-col">
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Full source code crawl (white-box)</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Goal-oriented spider agent (10 steps)</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>MCP live browser execution</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Autonomous POM Playwright spec generation</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Self-healing broken selectors</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Pre-merge shift-left gate</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>PRD compliance engine</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Proactive rot detection &amp; auto-fix</div>
<div className="flex items-center gap-2.5 py-2 border-b border-[#3a3a3c] text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Sprint-aware risk-coverage mapping</div>
<div className="flex items-center gap-2.5 py-2 text-sm text-[#8e8e93]"><div className="flex items-center justify-center w-[18px] h-[18px] rounded-full bg-[#3ecf8e]/10 shrink-0"><iconify-icon className="text-[#3ecf8e] text-sm" icon="solar:check-read-linear"></iconify-icon></div>Credentials never sent to any LLM</div>
</div>
<div className="rounded-lg p-3.5 text-sm leading-[1.65] bg-[#3ecf8e]/10 border border-[#3ecf8e]/20 text-[#5de8a8]" id="prestVerdict">✦ Fully autonomous, code-aware, self-healing QA — from PR open to test committed, zero human steps.</div>
</div>
<div className="flex items-center justify-center text-[10px] font-bold tracking-[0.14em] text-[#6e6e73] py-2.5 md:py-0">VS</div>
<div className="rounded-2xl p-7 flex flex-col gap-5 border border-dashed border-[#48484a] bg-[#2c2c2e] cursor-pointer hover:bg-[#333336] hover:border-[#545456] transition-all" id="challengerCard" onclick="handleCardClick(event)">
<div className="flex flex-col items-center justify-center gap-3.5 min-h-[220px] text-center flex-1" id="chEmpty">
<div className="w-12 h-12 rounded-full border-[1.5px] border-dashed border-[#545456] flex items-center justify-center text-[#6e6e73]">
<iconify-icon className="text-xl" icon="solar:cursor-square-linear"></iconify-icon>
</div>
<div className="text-sm font-medium text-[#8e8e93]">Pick a tool above</div>
<div className="text-xs text-[#6e6e73] leading-[1.5] max-w-[200px]">Select any tool from the AI testing space to load a detailed side-by-side</div>
</div>
<div className="w-full" id="chFilled" style={{display: 'none'}}></div>
</div>
</div>
<div className="flex flex-col gap-4 mt-4">
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73]">Full capability matrix — all tools</div>
<div className="overflow-x-auto pb-4">
<table className="w-full min-w-[900px] border-collapse text-sm">
<thead>
<tr className="border-b-2 border-[#48484a]">
<th className="p-2.5 text-left text-sm font-medium text-[#8e8e93] whitespace-nowrap">Capability</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#E8B84B] bg-[#E8B84B]/10">PrestCode</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">QA Wolf</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Mabl</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Testim</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Decipher AI</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Applitools</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">CodeRabbit</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Sauce Labs</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Cypress Cloud</th>
<th className="p-2.5 text-center text-[10px] font-semibold tracking-wider uppercase whitespace-nowrap text-[#6e6e73]">Sweep/Devin</th>
</tr>
</thead>
<tbody className="[&amp;&gt;tr:hover&gt;td]:bg-[#2c2c2e] [&amp;&gt;tr:hover&gt;td.bg-\[\#E8B84B\]\/10]:bg-[#E8B84B]/20">
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">White-box source code analysis</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Goal-oriented spider / crawl agent</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Autonomous test generation</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">Low-code</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">Record</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">Partial</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Live browser execution</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Self-healing broken selectors</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">Partial</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Pre-merge shift-left gate</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">PRD / spec compliance check</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Proactive rot detection</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">Alert only</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Visual regression testing</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#E8B84B] text-xs font-medium">Roadmap</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Sprint-aware risk mapping</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Credentials never sent to LLM</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#E8B84B] text-xs font-medium">N/A</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
<tr className="border-b border-[#3a3a3c] transition-colors">
<td className="p-2.5 text-left text-sm text-[#f2f2f7]">Zero dashboards / zero config</td>
<td className="p-2.5 text-center bg-[#E8B84B]/10"><span className="text-[#3ecf8e] text-sm font-semibold">✓</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
<td className="p-2.5 text-center"><span className="text-[#545456] text-base leading-none">—</span></td>
</tr>
</tbody>
</table>
</div>
</div>
</div>
</section>

<section className="bg-[#242426] border-y border-[#3a3a3c] py-14" id="pricing">
<div className="max-w-[1080px] mx-auto px-6 md:px-10">
<div className="mb-10">
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73] mb-2.5">Pricing</div>
<h2 className="text-3xl font-semibold tracking-tight text-[#f2f2f7]">Simple pricing.</h2>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-[1px] bg-[#3a3a3c] rounded-[14px] overflow-visible">
<div className="bg-[#2c2c2e] p-7 flex flex-col relative transition-colors hover:bg-[#333336] rounded-t-[14px] md:rounded-tr-none md:rounded-l-[14px]">
<div className="text-xs font-medium tracking-wide uppercase text-[#8e8e93] mb-3.5">Starter</div>
<div className="flex items-baseline gap-1.5 mb-1">
<span className="text-4xl font-semibold tracking-tight text-[#f2f2f7] leading-none">$0</span>
<span className="text-sm font-normal text-[#8e8e93]">/ month</span>
</div>
<p className="text-xs font-normal text-[#8e8e93] leading-[1.55] mb-4 pb-4 border-b border-[#3a3a3c]">For individuals and open-source teams. No credit card required.</p>
<ul className="flex flex-col gap-2.5 flex-1 mb-5">
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>20 PR tests per month</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>AI test generation</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Self-correction loop</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>GitHub PR auto-commit</li>
</ul>
<button className="w-full py-2.5 rounded-lg font-medium text-sm bg-transparent text-[#8e8e93] border border-[#48484a] hover:text-[#f2f2f7] hover:border-[#545456] transition-all flex items-center justify-center whitespace-nowrap">Get started free</button>
</div>
<div className="bg-[#333336] p-7 flex flex-col relative z-10 ring-1 ring-[#E8B84B] shadow-[0_0_28px_rgba(232,184,75,0.12)]">
<div className="absolute top-0 inset-x-0 h-0.5 bg-[#E8B84B]"></div>
<div className="text-xs font-medium tracking-wide uppercase text-[#E8B84B] mb-3.5">Enterprise</div>
<div className="flex items-baseline gap-1.5 mb-1">
<span className="text-4xl font-semibold tracking-tight text-[#f2f2f7] leading-none">$149</span>
<span className="text-sm font-normal text-[#8e8e93]">/ month</span>
</div>
<p className="text-xs font-normal text-[#8e8e93] leading-[1.55] mb-4 pb-4 border-b border-[#3a3a3c]">For engineering teams. Unlimited seats, all capabilities.</p>
<ul className="flex flex-col gap-2.5 flex-1 mb-5">
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Full team PR coverage</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>MCP live browser execution</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Proactive rot detection</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Risk-coverage mapping</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>PRD compliance engine</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>AES-256 vault — secrets never to LLM</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>GitHub webhook auto-trigger</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Priority support</li>
</ul>
<button className="w-full py-2.5 rounded-lg font-semibold text-sm bg-[#E8B84B] text-white hover:bg-[#d4a43e] transition-all flex items-center justify-center whitespace-nowrap">Start 14-day trial</button>
</div>
<div className="bg-[#2c2c2e] p-7 flex flex-col relative transition-colors hover:bg-[#333336] rounded-b-[14px] md:rounded-bl-none md:rounded-r-[14px]">
<div className="text-xs font-medium tracking-wide uppercase text-[#8e8e93] mb-3.5">Scale</div>
<div className="flex items-baseline gap-1.5 mb-1 min-h-[40px] items-center">
<span className="text-3xl font-semibold tracking-tight text-[#f2f2f7] leading-none inline-block pt-1">Custom</span>
</div>
<p className="text-xs font-normal text-[#8e8e93] leading-[1.55] mb-4 pb-4 border-b border-[#3a3a3c]">For large orgs with compliance requirements and dedicated infrastructure needs.</p>
<ul className="flex flex-col gap-2.5 flex-1 mb-5">
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Everything in Enterprise</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Dedicated infrastructure</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>SOC2 Type I/II (roadmap)</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>Multi-language support (roadmap)</li>
<li className="flex items-start gap-2.5 text-xs font-normal text-[#8e8e93] leading-[1.4]"><iconify-icon className="text-[#3ecf8e] shrink-0 mt-px text-sm" icon="solar:check-circle-linear"></iconify-icon>SLA + dedicated CSM</li>
</ul>
<button className="w-full py-2.5 rounded-lg font-medium text-sm bg-transparent text-[#8e8e93] border border-[#48484a] hover:text-[#f2f2f7] hover:border-[#545456] transition-all flex items-center justify-center whitespace-nowrap">Talk to us</button>
</div>
</div>
</div>
</section>

<section className="min-h-[70vh] flex items-center relative overflow-hidden bg-[#1c1c1e]" id="cta">
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[640px] h-[280px] bg-[radial-gradient(ellipse,rgba(232,184,75,0.08)_0%,transparent_65%)] pointer-events-none"></div>
<div className="max-w-[1080px] mx-auto px-6 w-full relative z-10 flex flex-col items-center text-center py-20">
<div className="text-xs font-medium tracking-wider uppercase text-[#6e6e73] mb-5">Early access open</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-[1.06] text-[#f2f2f7] mb-4 max-w-2xl">
          Stop maintaining tests.<br/>
<span className="text-[#E8B84B]">Start shipping faster.</span>
</h2>
<p className="text-base font-normal text-[#8e8e93] leading-[1.65] max-w-md mb-8">
          Every PR your team opens, covered, validated, and committed automatically.
        </p>
<div className="flex flex-col sm:flex-row gap-3 justify-center items-center mb-4">
<a className="inline-flex items-center justify-center gap-1.5 text-sm font-semibold px-6 py-3 rounded-xl bg-[#E8B84B] text-white hover:bg-[#d4a43e] transition-all w-full sm:w-auto" href="#">
            Get early access
            <iconify-icon className="text-base" icon="solar:arrow-right-linear" style={{strokeWidth: '1.5px'}}></iconify-icon>
</a>
<a className="inline-flex items-center justify-center gap-1.5 text-sm font-medium px-6 py-3 rounded-xl border border-[#48484a] text-[#8e8e93] hover:text-[#f2f2f7] hover:border-[#545456] transition-all w-full sm:w-auto" href="#">View documentation</a>
</div>
<p className="text-xs font-normal text-[#6e6e73] mt-2">Free tier: 20 PR tests / month  ·  No credit card required</p>
</div>
</section>
</main>
<footer className="border-t border-[#3a3a3c] py-6">
<div className="max-w-[1080px] mx-auto px-6 md:px-10">
</div></footer>
    </>
  );
}
