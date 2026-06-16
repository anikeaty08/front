import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
fontFamily: {
inter: ['Inter', 'system-ui', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
'blur-in': 'blurIn 1s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(20px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
blurIn: { '0%': { opacity: '0', filter: 'blur(10px)', transform: 'scale(0.95)' }, '100%': { opacity: '1', filter: 'blur(0px)', transform: 'scale(1)' } },
}
}
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 overflow-hidden pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] rounded-full bg-indigo-900/10 blur-[120px]"></div>
<div className="absolute top-[20%] right-[-5%] w-[30%] h-[30%] rounded-full bg-sky-900/10 blur-[100px]"></div>
<div className="absolute bottom-[-10%] left-[20%] w-[50%] h-[50%] rounded-full bg-slate-900/40 blur-[120px]"></div>

<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMSIgY3k9IjEiIHI9IjEiIGZpbGw9InJnYmEoMjU1LDI1NSwyNTUsMC4wNSkiLz48L3N2Zz4=')] [mask-image:linear-gradient(to_bottom,white,transparent)]"></div>
</div>

<header className="fixed top-0 w-full z-50 border-b border-white/5 bg-[#0b0f1a]/80 backdrop-blur-md animate-fade-in">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-3 group cursor-pointer">
<div className="relative flex items-center justify-center w-8 h-8 rounded-lg bg-gradient-to-tr from-indigo-500 to-sky-500 group-hover:scale-105 transition-transform duration-300">
<span className="iconify text-white" data-icon="lucide:message-square-dashed" data-width="18"></span>
</div>
<span className="text-white font-medium tracking-tight">SyncBoard</span>
</div>
<nav className="hidden md:flex items-center gap-8 text-sm">
<a className="text-slate-400 hover:text-white transition-colors" href="#product">Discussions</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#integrations">Integrations</a>
<a className="text-slate-400 hover:text-white transition-colors" href="#changelog">Changelog</a>
</nav>
<div className="flex items-center gap-4">
<a className="text-sm text-slate-400 hover:text-white transition-colors hidden sm:block" href="#">Log in</a>
<a className="text-sm bg-white/10 hover:bg-white/15 text-white px-4 py-2 rounded-lg border border-white/10 transition-all hover:border-white/20" href="#">
          Sign Up
        </a>
</div>
</div>
</header>

<section className="relative pt-32 pb-20 lg:pt-40 lg:pb-32 px-6">
<div className="max-w-7xl mx-auto">
<div className="text-center max-w-3xl mx-auto mb-20 animate-slide-up">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-indigo-300 text-xs mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-indigo-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
          New: Real-time collaborative editor
        </div>
<h1 className="text-4xl md:text-6xl text-white font-medium tracking-tight mb-6 leading-[1.1] glow-text">
          Where <span className="text-transparent bg-clip-text bg-gradient-to-r from-indigo-400 via-sky-400 to-indigo-400">great code</span><br/>gets discussed.
        </h1>
<p className="text-lg text-slate-400 leading-relaxed max-w-2xl mx-auto">
          A unified interface for GitHub Issues designed for deep technical conversations. 
          Context-aware comments, inline code reviews, and zero context switching.
        </p>
</div>

<div className="relative max-w-4xl mx-auto animate-blur-in [animation-delay:200ms]">

<div className="absolute -inset-1 bg-gradient-to-r from-indigo-500/20 via-sky-500/20 to-purple-500/20 rounded-2xl blur-xl opacity-50"></div>
<div className="relative glass-panel rounded-xl overflow-hidden">

<div className="flex items-center justify-between px-6 py-4 border-b border-white/5 bg-[#0b0f1a]/60">
<div className="flex items-center gap-4">
<span className="flex items-center justify-center w-6 h-6 rounded-md bg-green-500/10 border border-green-500/20 text-green-400">
<span className="iconify" data-icon="lucide:git-pull-request" data-width="14"></span>
</span>
<div className="flex flex-col">
<span className="text-slate-200 text-sm font-medium">Refactor authentication middleware</span>
<span className="text-slate-500 text-xs flex items-center gap-2">
                   #842 opened by <span className="text-slate-400">alex-dev</span>
<span className="w-1 h-1 rounded-full bg-slate-600"></span>
                   Updated 2m ago
                 </span>
</div>
</div>
<div className="flex items-center gap-3">
<span className="flex items-center gap-1.5 px-2 py-1 rounded border border-white/5 bg-white/5 text-xs text-slate-400">
<span className="w-2 h-2 rounded-full bg-green-500"></span> Open
              </span>
<button className="text-slate-400 hover:text-white transition-colors">
<span className="iconify" data-icon="lucide:more-horizontal" data-width="16"></span>
</button>
</div>
</div>

<div className="p-6 md:p-8 bg-gradient-to-b from-[#0b0f1a]/40 to-[#0b0f1a]/80">

<div className="relative flex gap-4 group">
<div className="thread-line group-last:hidden"></div>
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-purple-500 to-indigo-600 p-[1px] ring-4 ring-[#0b0f1a]">
<img alt="User" className="w-full h-full rounded-full object-cover border border-black/20" src="https://i.pravatar.cc/150?u=alex"/>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-slate-200 font-medium text-sm">alex-dev</span>
<span className="text-slate-500 text-xs">commented yesterday</span>
</div>
<div className="flex gap-1 opacity-0 group-hover:opacity-100 transition-opacity duration-200">
<button className="p-1 rounded hover:bg-white/10 text-slate-400"><span className="iconify" data-icon="lucide:smile-plus" data-width="14"></span></button>
<button className="p-1 rounded hover:bg-white/10 text-slate-400"><span className="iconify" data-icon="lucide:message-circle" data-width="14"></span></button>
</div>
</div>
<div className="text-slate-300 text-sm leading-relaxed space-y-3">
<p>I've updated the JWT handling logic. The previous implementation had a potential race condition during token refresh.</p>
<p>Here is the new hook implementation:</p>

<div className="rounded-lg border border-white/10 bg-[#0d1117] overflow-hidden my-3">
<div className="flex items-center justify-between px-3 py-1.5 border-b border-white/5 bg-white/5">
<span className="text-xs text-slate-500 font-mono">useAuth.ts</span>
<button className="text-xs text-slate-500 hover:text-slate-300"><span className="iconify" data-icon="lucide:copy" data-width="12"></span></button>
</div>
<pre className="p-3 text-xs font-mono overflow-x-auto"><code><span className="code-syntax-keyword">const</span> <span className="code-syntax-func">refreshToken</span> = <span className="code-syntax-keyword">async</span> () =&gt; {
  <span className="code-syntax-keyword">try</span> {
    <span className="code-syntax-keyword">const</span> { data } = <span className="code-syntax-keyword">await</span> api.<span className="code-syntax-func">post</span>(<span className="code-syntax-string">'/auth/refresh'</span>);
    setSession(data.token);
  } <span className="code-syntax-keyword">catch</span> (error) {
    <span className="code-syntax-comment">// Handle invalidation gracefully</span>
    logout();
  }
};</code></pre>
</div>
</div>

<div className="flex gap-2 mt-3">
<button className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-indigo-500/30 bg-indigo-500/10 text-xs text-indigo-300 hover:bg-indigo-500/20 transition-colors">
<span>👍</span> <span>2</span>
</button>
<button className="flex items-center gap-1.5 px-2 py-1 rounded-full border border-white/10 bg-white/5 text-xs text-slate-400 hover:border-white/20 transition-colors">
<span>🚀</span> <span>1</span>
</button>
</div>
</div>
</div>

<div className="relative flex gap-4 mt-8 group">
<div className="thread-line"></div>
<div className="flex-shrink-0 z-10">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-sky-500 to-cyan-600 p-[1px] ring-4 ring-[#0b0f1a]">
<img alt="User" className="w-full h-full rounded-full object-cover border border-black/20" src="https://i.pravatar.cc/150?u=sarah"/>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="flex items-baseline justify-between mb-2">
<div className="flex items-center gap-2">
<span className="text-slate-200 font-medium text-sm">sarah-cto</span>
<span className="px-1.5 py-0.5 rounded text-[10px] font-medium bg-indigo-500 text-white">Maintainer</span>
<span className="text-slate-500 text-xs">4 hours ago</span>
</div>
</div>
<div className="text-slate-300 text-sm leading-relaxed">
<p>This looks much cleaner! <span className="text-indigo-400 font-medium">@alex-dev</span> just one question regarding the error boundary—should we retry once before logging out?</p>
</div>
</div>
</div>

<div className="relative flex gap-4 mt-8">
<div className="flex-shrink-0 z-10 ml-2">
<div className="w-6 h-6 rounded-full bg-[#0b0f1a] border border-white/10 flex items-center justify-center ring-4 ring-[#0b0f1a]">
<span className="iconify text-slate-500" data-icon="lucide:git-commit-horizontal" data-width="12"></span>
</div>
</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="text-xs text-slate-500">
<span className="text-slate-300 font-medium">alex-dev</span> added commit <span className="font-mono text-slate-400 bg-white/5 px-1 rounded">7f2a9d1</span> "Add retry logic"
                 </div>
</div>
</div>

<div className="relative flex gap-4 mt-8">
<div className="flex-shrink-0">
<div className="w-10 h-10 rounded-full bg-slate-700 ring-4 ring-[#0b0f1a] flex items-center justify-center">
<span className="iconify text-slate-400" data-icon="lucide:user" data-width="20"></span>
</div>
</div>
<div className="flex-1 min-w-0">
<div className="relative rounded-lg border border-indigo-500/30 bg-[#0d1117]/80 shadow-[0_0_0_1px_rgba(99,102,241,0.1)] transition-colors">

<div className="flex items-center gap-1 p-2 border-b border-white/5">
<button className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:bold" data-width="14"></span></button>
<button className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:italic" data-width="14"></span></button>
<button className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:code" data-width="14"></span></button>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:link" data-width="14"></span></button>
<button className="p-1.5 rounded hover:bg-white/5 text-slate-400 hover:text-white"><span className="iconify" data-icon="lucide:image" data-width="14"></span></button>
</div>

<div className="p-3">
<textarea className="w-full bg-transparent border-none focus:ring-0 p-0 text-sm text-slate-200 placeholder:text-slate-600 resize-none h-20" placeholder="Leave a comment..."></textarea>
</div>

<div className="flex items-center justify-between p-2 pt-0">
<span className="text-[10px] text-slate-600 px-2">Markdown supported</span>
<button className="bg-indigo-600 hover:bg-indigo-500 text-white text-xs font-medium px-4 py-1.5 rounded-md transition-colors shadow-lg shadow-indigo-900/20">
                      Comment
                    </button>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5 relative bg-[#0b0f1a]">
<div className="max-w-7xl mx-auto">
<div className="grid md:grid-cols-3 gap-8">

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-indigo-500/10 flex items-center justify-center mb-4 group-hover:bg-indigo-500/20 transition-colors">
<span className="iconify text-indigo-400" data-icon="lucide:zap" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Real-time Updates</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            See comments as they are typed. Presence indicators show you who is viewing the issue right now.
          </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-sky-500/10 flex items-center justify-center mb-4 group-hover:bg-sky-500/20 transition-colors">
<span className="iconify text-sky-400" data-icon="lucide:file-code" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Rich Markdown</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Full GFM support with syntax highlighting, mermaid diagrams, and interactive task lists.
          </p>
</div>

<div className="group p-6 rounded-2xl border border-white/5 bg-white/[0.02] hover:bg-white/[0.04] transition-all hover:border-white/10">
<div className="w-10 h-10 rounded-lg bg-purple-500/10 flex items-center justify-center mb-4 group-hover:bg-purple-500/20 transition-colors">
<span className="iconify text-purple-400" data-icon="lucide:git-branch" data-width="20"></span>
</div>
<h3 className="text-white font-medium text-lg mb-2">Two-way Sync</h3>
<p className="text-sm text-slate-400 leading-relaxed">
            Comments made here appear instantly on GitHub, and vice versa. No api-rate limiting lag.
          </p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto flex flex-col lg:flex-row items-center gap-16">
<div className="lg:w-1/2 space-y-8">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight">
          Keyboard-first<br/>commenting workflow.
        </h2>
<p className="text-slate-400 text-lg">
          Fly through your unread notifications. Use <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-sm text-slate-300">j</kbd> and <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-sm text-slate-300">k</kbd> to navigate threads, <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-sm text-slate-300">r</kbd> to reply, and <kbd className="font-mono bg-white/10 px-1.5 py-0.5 rounded text-sm text-slate-300">Ctrl+Enter</kbd> to submit.
        </p>
<div className="space-y-4">
<div className="flex items-center gap-4 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Collapsible comment threads</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Deep linking to specific lines</span>
</div>
<div className="flex items-center gap-4 text-sm text-slate-300">
<span className="iconify text-indigo-400" data-icon="lucide:check-circle-2" data-width="18"></span>
<span>Saved replies &amp; snippets</span>
</div>
</div>
</div>
<div className="lg:w-1/2 w-full">
<div className="relative group">
<div className="absolute -inset-0.5 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-xl opacity-30 group-hover:opacity-50 blur transition duration-500"></div>
<div className="relative bg-[#0b0f1a] border border-white/10 rounded-xl p-6">
<div className="space-y-3">

<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
<span className="text-slate-300 text-sm">Quote Reply</span>
<span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded group-hover/item:text-white transition-colors">q</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
<span className="text-slate-300 text-sm">Assign to me</span>
<span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded group-hover/item:text-white transition-colors">i</span>
</div>
<div className="flex items-center justify-between p-3 rounded-lg bg-white/5 hover:bg-white/10 transition-colors cursor-pointer group/item">
<span className="text-slate-300 text-sm">Close Issue</span>
<span className="text-xs font-mono text-slate-500 bg-black/30 px-2 py-1 rounded group-hover/item:text-white transition-colors">shift+c</span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 border-t border-white/5">
<div className="max-w-7xl mx-auto text-center">
<h2 className="text-3xl md:text-4xl text-white font-medium tracking-tight mb-4">Start discussing today</h2>
<p className="text-slate-400 mb-12">Free for public repositories. No credit card required.</p>
<div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
<div className="p-8 rounded-2xl border border-white/10 bg-white/[0.02] flex flex-col items-start">
<span className="text-indigo-400 font-medium text-sm mb-2">Open Source</span>
<div className="text-3xl text-white font-medium mb-6">$0<span className="text-lg text-slate-500 font-normal">/mo</span></div>
<ul className="space-y-3 text-left mb-8 w-full">
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-green-400" data-icon="lucide:check" data-width="14"></span> Unlimited public repos</li>
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-green-400" data-icon="lucide:check" data-width="14"></span> 30-day comment history</li>
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-green-400" data-icon="lucide:check" data-width="14"></span> Basic filters</li>
</ul>
<button className="w-full py-2.5 rounded-lg border border-white/10 text-white font-medium text-sm hover:bg-white/5 transition-colors">Get Started</button>
</div>
<div className="relative p-8 rounded-2xl border border-indigo-500/30 bg-indigo-500/[0.03] flex flex-col items-start overflow-hidden">
<div className="absolute top-0 right-0 p-3">
<span className="bg-indigo-500/20 text-indigo-300 text-[10px] uppercase tracking-wider font-medium px-2 py-1 rounded-full border border-indigo-500/20">Popular</span>
</div>
<span className="text-white font-medium text-sm mb-2">Pro Team</span>
<div className="text-3xl text-white font-medium mb-6">$12<span className="text-lg text-slate-500 font-normal">/user</span></div>
<ul className="space-y-3 text-left mb-8 w-full">
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Unlimited private repos</li>
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> Unlimited history</li>
<li className="flex items-center gap-2 text-slate-300 text-sm"><span className="iconify text-indigo-400" data-icon="lucide:check" data-width="14"></span> AI Comment Summaries</li>
</ul>
<button className="w-full py-2.5 rounded-lg bg-indigo-600 text-white font-medium text-sm hover:bg-indigo-500 transition-colors shadow-lg shadow-indigo-900/30">Start 14-day Trial</button>
</div>
</div>
</div>
</section>

<footer className="py-12 px-6 border-t border-white/5 bg-[#0b0f1a]">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<div className="w-6 h-6 rounded bg-gradient-to-tr from-indigo-600 to-sky-600 flex items-center justify-center">
<span className="text-white font-bold text-xs">S</span>
</div>
<span className="text-slate-500 text-sm">© 2024 SyncBoard Inc.</span>
</div>
<div className="flex gap-6">
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:twitter" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:github" data-width="18"></span></a>
<a className="text-slate-500 hover:text-white transition-colors" href="#"><span className="iconify" data-icon="lucide:linkedin" data-width="18"></span></a>
</div>
</div>
</footer>

    </>
  );
}
