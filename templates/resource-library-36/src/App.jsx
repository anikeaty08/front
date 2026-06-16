import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
background: '#0a0a0b',
surface: '#141416',
surfaceHover: '#1c1c1f',
border: '#27272a',
primary: '#fafafa',
secondary: '#a1a1aa',
muted: '#71717a',
accent: '#6366f1',
accentHover: '#818cf8',
},
letterSpacing: {
tighter: '-0.04em',
tight: '-0.02em',
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
      

<div className="fixed inset-0 z-[-1] pointer-events-none">
<div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-accent/5 rounded-full blur-[120px]"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-purple-500/5 rounded-full blur-[120px]"></div>
</div>

<header className="lg:hidden sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-md px-4 h-14 flex items-center justify-between">
<div className="flex items-center gap-3">
<button className="text-secondary hover:text-primary transition-colors">
<iconify-icon icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
<span className="text-primary font-semibold tracking-tight text-sm uppercase">ResourceVault</span>
</div>
<button className="text-secondary hover:text-primary transition-colors">
<iconify-icon icon="solar:magnifer-linear" width="20"></iconify-icon>
</button>
</header>
<div className="flex min-h-screen">

<aside className="hidden lg:flex w-64 flex-col fixed inset-y-0 left-0 border-r border-border bg-background/50 backdrop-blur-sm z-40">

<div className="h-14 flex items-center px-5 border-b border-border/50">
<div className="flex items-center gap-2 text-primary">
<div className="w-5 h-5 bg-gradient-to-tr from-accent to-purple-500 rounded flex items-center justify-center shadow-lg shadow-accent/20">
<span className="text-[10px] font-bold text-white">R</span>
</div>
<span className="font-semibold tracking-tight text-sm">RESOURCEVAULT</span>
</div>
</div>

<div className="flex-1 overflow-y-auto py-4 px-3 space-y-6">

<div className="space-y-0.5">
<a className="flex items-center gap-3 px-3 py-2 text-sm text-primary bg-surface border border-border/50 rounded-md font-medium shadow-sm" href="#">
<iconify-icon className="text-accent" icon="solar:home-smile-linear" width="18"></iconify-icon>
                        Home
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-primary transition-colors" icon="solar:compass-linear" width="18"></iconify-icon>
                        Browse
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-primary transition-colors" icon="solar:bookmark-linear" width="18"></iconify-icon>
                        Bookmarks
                    </a>
<a className="flex items-center gap-3 px-3 py-2 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-all group" href="#">
<iconify-icon className="group-hover:text-primary transition-colors" icon="solar:add-circle-linear" width="18"></iconify-icon>
                        Submit
                    </a>
</div>

<div>
<h3 className="px-3 text-xs font-medium text-muted uppercase tracking-wider mb-2">Categories</h3>
<div className="space-y-0.5">
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:monitor-camera-linear" width="16"></iconify-icon>
                                Streaming
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">250</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:laptop-linear" width="16"></iconify-icon>
                                Software
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">400</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:gamepad-linear" width="16"></iconify-icon>
                                Gaming
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">320</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:book-2-linear" width="16"></iconify-icon>
                                Reading
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">200</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:shield-keyhole-linear" width="16"></iconify-icon>
                                Privacy
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">150</span>
</a>
<a className="flex items-center justify-between px-3 py-1.5 text-sm text-secondary hover:text-primary hover:bg-surfaceHover rounded-md transition-colors group" href="#">
<div className="flex items-center gap-3">
<iconify-icon icon="solar:music-note-linear" width="16"></iconify-icon>
                                Music
                            </div>
<span className="text-[10px] bg-border px-1.5 py-0.5 rounded text-muted group-hover:text-primary">180</span>
</a>
</div>
</div>
</div>

<div className="p-4 border-t border-border/50">
<div className="bg-surface border border-border rounded-lg p-3 flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-gradient-to-br from-gray-700 to-gray-900 border border-border flex items-center justify-center text-xs font-bold text-primary">
                        JD
                    </div>
<div className="flex-1 min-w-0">
<p className="text-xs font-medium text-primary truncate">John Doe</p>
<p className="text-[10px] text-muted truncate">Admin</p>
</div>
<button className="text-muted hover:text-primary">
<iconify-icon icon="solar:settings-linear" width="16"></iconify-icon>
</button>
</div>
</div>
</aside>

<main className="flex-1 lg:ml-64 relative min-w-0">

<header className="hidden lg:flex sticky top-0 z-30 border-b border-border bg-background/80 backdrop-blur-md px-8 h-14 items-center justify-between">

<div className="relative w-96 group">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-muted group-focus-within:text-accent transition-colors" icon="solar:magnifer-linear" width="16"></iconify-icon>
<input className="w-full bg-surface/50 border border-border rounded-md py-1.5 pl-9 pr-12 text-sm text-primary placeholder:text-muted focus:outline-none focus:border-accent/50 focus:ring-1 focus:ring-accent/50 transition-all" placeholder="Search resources..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1 pointer-events-none">
<kbd className="hidden sm:inline-flex h-5 items-center gap-1 rounded border border-border bg-background px-1.5 font-mono text-[10px] font-medium text-muted">⌘K</kbd>
</div>
</div>

<div className="flex items-center gap-4">
<a className="text-secondary hover:text-primary transition-colors" href="https://github.com" target="_blank">
<iconify-icon icon="solar:brand-github-linear" width="20"></iconify-icon>
</a>
<div className="h-4 w-px bg-border"></div>
<button className="text-secondary hover:text-warning transition-colors">
<iconify-icon icon="solar:sun-linear" width="20"></iconify-icon>
</button>
</div>
</header>
<div className="p-6 lg:p-10 max-w-7xl mx-auto space-y-12">

<section className="relative">
<div className="relative z-10 max-w-2xl">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-accent/20 bg-accent/5 text-accent text-xs font-medium mb-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
                            v2.0 is live with 5,000+ resources
                        </div>
<h1 className="text-4xl lg:text-5xl font-semibold text-primary tracking-tighter leading-[1.15] mb-4">
                            Your Ultimate <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-accent via-purple-500 to-pink-500 animate-gradient">Resource Library</span>
</h1>
<p className="text-secondary text-lg leading-relaxed mb-8 max-w-lg">
                            Curated tools, links, and guides for developers, designers, and privacy advocates. Organized, searchable, and always free.
                        </p>

<div className="flex flex-wrap gap-2">
<span className="text-xs font-medium text-muted mr-2 self-center">Popular:</span>
<a className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-secondary hover:border-accent/50 hover:text-primary transition-colors" href="#">#Streaming</a>
<a className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-secondary hover:border-accent/50 hover:text-primary transition-colors" href="#">#PrivacyTools</a>
<a className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-secondary hover:border-accent/50 hover:text-primary transition-colors" href="#">#DevUtils</a>
<a className="px-2.5 py-1 rounded-md bg-surface border border-border text-xs text-secondary hover:border-accent/50 hover:text-primary transition-colors" href="#">#OpenSource</a>
</div>
</div>
</section>

<section className="grid grid-cols-2 md:grid-cols-4 gap-4 border-y border-border py-6">
<div className="flex flex-col gap-1 px-4 border-r border-border/50 last:border-0">
<span className="text-2xl font-semibold text-primary tracking-tight">5,234</span>
<span className="text-xs text-muted uppercase tracking-wider font-medium">Resources</span>
</div>
<div className="flex flex-col gap-1 px-4 border-r border-border/50 last:border-0">
<span className="text-2xl font-semibold text-primary tracking-tight">25+</span>
<span className="text-xs text-muted uppercase tracking-wider font-medium">Categories</span>
</div>
<div className="flex flex-col gap-1 px-4 border-r border-border/50 last:border-0">
<span className="text-2xl font-semibold text-primary tracking-tight">1.2M</span>
<span className="text-xs text-muted uppercase tracking-wider font-medium">Monthly Views</span>
</div>
<div className="flex flex-col gap-1 px-4 border-r border-border/50 last:border-0">
<span className="text-2xl font-semibold text-primary tracking-tight">Daily</span>
<span className="text-xs text-muted uppercase tracking-wider font-medium">Updates</span>
</div>
</section>

<section>
<div className="flex items-center justify-between mb-6">
<div className="flex items-center gap-2">
<iconify-icon className="text-orange-500" icon="solar:fire-linear" width="20"></iconify-icon>
<h2 className="text-lg font-semibold text-primary tracking-tight">Editor's Picks</h2>
</div>
<a className="text-xs font-medium text-accent hover:text-accentHover flex items-center gap-1" href="#">
                            View all <iconify-icon icon="solar:arrow-right-linear" width="12"></iconify-icon>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">

<div className="group relative bg-surface border border-border rounded-lg p-4 hover:border-border/80 transition-all hover:shadow-[0_0_20px_rgba(99,102,241,0.15)] flex flex-col h-full">
<div className="absolute top-3 right-3 text-border group-hover:text-accent transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="18"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-[#212124] border border-border flex items-center justify-center text-primary">
<iconify-icon icon="solar:shield-check-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">ProtonVPN</h3>
<div className="flex items-center gap-1 text-yellow-500 text-[10px]">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="10"></iconify-icon>
<span className="text-muted ml-1">(4.8)</span>
</div>
</div>
</div>
<p className="text-xs text-secondary leading-relaxed mb-4 flex-1">
                                High-speed Swiss VPN that safeguards your privacy. Free tier available with no logs policy.
                            </p>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[10px] font-medium text-green-500">Free Tier</span>
<span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-medium text-muted">Privacy</span>
</div>
<a className="w-full mt-auto flex items-center justify-center gap-2 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-xs font-medium text-primary transition-all" href="#">
                                Visit Resource <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>

<div className="group relative bg-surface border border-border rounded-lg p-4 hover:border-border/80 transition-all hover:shadow-[0_0_20px_rgba(168,85,247,0.15)] flex flex-col h-full">
<div className="absolute top-3 right-3 text-border group-hover:text-accent transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="18"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-[#212124] border border-border flex items-center justify-center text-primary">
<iconify-icon icon="solar:code-square-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">VS Code</h3>
<div className="flex items-center gap-1 text-yellow-500 text-[10px]">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-muted ml-1">(5.0)</span>
</div>
</div>
</div>
<p className="text-xs text-secondary leading-relaxed mb-4 flex-1">
                                Code editor redefined and optimized for building and debugging modern web and cloud applications.
                            </p>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded bg-blue-500/10 border border-blue-500/20 text-[10px] font-medium text-blue-500">Open Source</span>
<span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-medium text-muted">Dev</span>
</div>
<a className="w-full mt-auto flex items-center justify-center gap-2 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-xs font-medium text-primary transition-all" href="#">
                                Visit Resource <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>

<div className="group relative bg-surface border border-border rounded-lg p-4 hover:border-border/80 transition-all hover:shadow-[0_0_20px_rgba(236,72,153,0.15)] flex flex-col h-full">
<div className="absolute top-3 right-3 text-border group-hover:text-accent transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="18"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-[#212124] border border-border flex items-center justify-center text-primary">
<iconify-icon icon="solar:library-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">Anna's Archive</h3>
<div className="flex items-center gap-1 text-yellow-500 text-[10px]">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-half-bold" width="10"></iconify-icon>
<span className="text-muted ml-1">(4.7)</span>
</div>
</div>
</div>
<p className="text-xs text-secondary leading-relaxed mb-4 flex-1">
                                Search engine for shadow libraries: books, papers, comics, magazines. The largest open library.
                            </p>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded bg-green-500/10 border border-green-500/20 text-[10px] font-medium text-green-500">Free</span>
<span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-medium text-muted">Reading</span>
</div>
<a className="w-full mt-auto flex items-center justify-center gap-2 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-xs font-medium text-primary transition-all" href="#">
                                Visit Resource <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>

<div className="group relative bg-surface border border-border rounded-lg p-4 hover:border-border/80 transition-all hover:shadow-[0_0_20px_rgba(245,158,11,0.15)] flex flex-col h-full">
<div className="absolute top-3 right-3 text-border group-hover:text-accent transition-colors">
<iconify-icon icon="solar:bookmark-linear" width="18"></iconify-icon>
</div>
<div className="flex items-start gap-3 mb-3">
<div className="w-10 h-10 rounded-lg bg-[#212124] border border-border flex items-center justify-center text-primary">
<iconify-icon icon="solar:clapperboard-play-linear" width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold text-primary group-hover:text-accent transition-colors">Stremio</h3>
<div className="flex items-center gap-1 text-yellow-500 text-[10px]">
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="10"></iconify-icon>
<span className="text-muted ml-1">(4.9)</span>
</div>
</div>
</div>
<p className="text-xs text-secondary leading-relaxed mb-4 flex-1">
                                A modern media center that's a one-stop solution for your video entertainment.
                            </p>
<div className="flex items-center gap-2 mb-4">
<span className="px-2 py-0.5 rounded bg-purple-500/10 border border-purple-500/20 text-[10px] font-medium text-purple-500">App</span>
<span className="px-2 py-0.5 rounded bg-surface border border-border text-[10px] font-medium text-muted">Streaming</span>
</div>
<a className="w-full mt-auto flex items-center justify-center gap-2 py-1.5 rounded-md bg-white/5 border border-white/5 hover:bg-white/10 hover:border-white/10 text-xs font-medium text-primary transition-all" href="#">
                                Visit Resource <iconify-icon icon="solar:arrow-right-up-linear" width="12"></iconify-icon>
</a>
</div>
</div>
</section>

<div className="grid grid-cols-1 xl:grid-cols-3 gap-8">

<div className="xl:col-span-2 space-y-6">
<div className="flex items-center justify-between">
<h2 className="text-lg font-semibold text-primary tracking-tight">Recently Added</h2>
<div className="flex gap-2">
<button className="p-1.5 rounded-md bg-surface border border-border text-primary hover:border-accent/50 transition-colors">
<iconify-icon icon="solar:list-linear" width="16"></iconify-icon>
</button>
<button className="p-1.5 rounded-md text-muted hover:text-primary transition-colors">
<iconify-icon icon="solar:widget-2-linear" width="16"></iconify-icon>
</button>
</div>
</div>
<div className="space-y-3">

<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border/50 bg-background hover:bg-surface/50 hover:border-border transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-green-500/10 flex items-center justify-center text-green-500 mt-1 sm:mt-0">
<iconify-icon icon="solar:ufo-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-primary">uBlock Origin</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border bg-surface text-muted">v1.54</span>
</div>
<p className="text-xs text-muted mt-1 max-w-md">An efficient blocker for Chromium and Firefox. Fast, lean, and powerful.</p>
</div>
</div>
<div className="flex items-center gap-4 sm:self-center self-end">
<span className="text-[10px] text-muted whitespace-nowrap">2h ago</span>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-border/50 text-[10px] font-medium text-secondary">Extension</span>
</div>
</div>
</div>

<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border/50 bg-background hover:bg-surface/50 hover:border-border transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-blue-500/10 flex items-center justify-center text-blue-500 mt-1 sm:mt-0">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-primary">Photopea</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border bg-surface text-muted">Web</span>
</div>
<p className="text-xs text-muted mt-1 max-w-md">Advanced image editor supporting PSD, XCF, Sketch, XD and CDR formats.</p>
</div>
</div>
<div className="flex items-center gap-4 sm:self-center self-end">
<span className="text-[10px] text-muted whitespace-nowrap">5h ago</span>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-border/50 text-[10px] font-medium text-secondary">Design</span>
</div>
</div>
</div>

<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border/50 bg-background hover:bg-surface/50 hover:border-border transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-red-500/10 flex items-center justify-center text-red-500 mt-1 sm:mt-0">
<iconify-icon icon="solar:play-circle-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-primary">NewPipe</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border bg-surface text-muted">Android</span>
</div>
<p className="text-xs text-muted mt-1 max-w-md">A privacy-focused YouTube client for Android. No ads, background play.</p>
</div>
</div>
<div className="flex items-center gap-4 sm:self-center self-end">
<span className="text-[10px] text-muted whitespace-nowrap">1d ago</span>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-border/50 text-[10px] font-medium text-secondary">Streaming</span>
</div>
</div>
</div>

<div className="group flex flex-col sm:flex-row sm:items-center justify-between gap-4 p-4 rounded-lg border border-border/50 bg-background hover:bg-surface/50 hover:border-border transition-all">
<div className="flex items-start gap-4">
<div className="w-10 h-10 rounded bg-indigo-500/10 flex items-center justify-center text-indigo-500 mt-1 sm:mt-0">
<iconify-icon icon="solar:folder-with-files-linear" width="20"></iconify-icon>
</div>
<div>
<div className="flex items-center gap-2">
<h3 className="text-sm font-semibold text-primary">Syncthing</h3>
<span className="text-[10px] px-1.5 py-0.5 rounded-full border border-border bg-surface text-muted">v1.27</span>
</div>
<p className="text-xs text-muted mt-1 max-w-md">Continuous file synchronization program. It synchronizes two or more computers.</p>
</div>
</div>
<div className="flex items-center gap-4 sm:self-center self-end">
<span className="text-[10px] text-muted whitespace-nowrap">2d ago</span>
<div className="flex gap-2">
<span className="px-2 py-0.5 rounded bg-border/50 text-[10px] font-medium text-secondary">Storage</span>
</div>
</div>
</div>
</div>
<button className="w-full py-3 text-xs font-medium text-muted hover:text-primary border border-dashed border-border rounded-lg hover:border-secondary transition-colors">
                            Load more resources...
                        </button>
</div>

<div className="space-y-6">

<div className="rounded-xl border border-border bg-surface/30 p-5">
<h3 className="text-sm font-semibold text-primary mb-4">Browse All Categories</h3>
<div className="grid grid-cols-2 gap-3">
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:monitor-camera-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Streaming</div>
<div className="text-[10px] text-muted">250 links</div>
</a>
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:laptop-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Software</div>
<div className="text-[10px] text-muted">400 links</div>
</a>
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:gamepad-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Gaming</div>
<div className="text-[10px] text-muted">320 links</div>
</a>
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:book-2-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Reading</div>
<div className="text-[10px] text-muted">200 links</div>
</a>
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:shield-keyhole-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Privacy</div>
<div className="text-[10px] text-muted">150 links</div>
</a>
<a className="p-3 rounded-lg bg-surface border border-border hover:border-accent/50 hover:shadow-md transition-all group" href="#">
<iconify-icon className="text-secondary group-hover:text-accent mb-2" icon="solar:box-minimalistic-linear" width="24"></iconify-icon>
<div className="text-xs font-medium text-primary">Misc</div>
<div className="text-[10px] text-muted">90 links</div>
</a>
</div>
</div>

<div className="rounded-xl border border-border bg-gradient-to-b from-surface/50 to-background p-5 relative overflow-hidden">
<div className="absolute top-0 right-0 p-4 opacity-10">
<iconify-icon icon="solar:letter-linear" width="80"></iconify-icon>
</div>
<h3 className="text-sm font-semibold text-primary mb-2">Contribute</h3>
<p className="text-xs text-secondary mb-4 leading-relaxed">
                                Found a useful tool or resource? Submit it to the community queue for review.
                            </p>
<button className="w-full py-2 rounded-md bg-white text-black text-xs font-semibold hover:bg-gray-200 transition-colors shadow-lg shadow-white/5">
                                Submit Resource
                            </button>
</div>

<div>
<h3 className="text-xs font-medium text-muted uppercase tracking-wider mb-3">Trending Tags</h3>
<div className="flex flex-wrap gap-2">
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">AI Tools</span>
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">VPN</span>
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">Movies</span>
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">E-Books</span>
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">Adblock</span>
<span className="px-2 py-1 rounded border border-border bg-surface text-[10px] text-secondary hover:text-primary cursor-pointer transition-colors">Linux ISO</span>
</div>
</div>
</div>
</div>

<footer className="border-t border-border pt-8 pb-12 flex flex-col md:flex-row justify-between items-start md:items-center gap-4 text-xs text-muted">
<div>
<div className="flex items-center gap-2 text-primary font-semibold mb-2">
<div className="w-4 h-4 bg-gradient-to-tr from-accent to-purple-500 rounded flex items-center justify-center">
<span className="text-[8px] font-bold text-white">R</span>
</div>
                            RESOURCEVAULT
                        </div>
<p>© 2025 ResourceVault. Curated with ❤️ by the community.</p>
</div>
<div className="flex gap-6">
<a className="hover:text-primary transition-colors" href="#">About</a>
<a className="hover:text-primary transition-colors" href="#">Privacy</a>
<a className="hover:text-primary transition-colors" href="#">Terms</a>
<a className="hover:text-primary transition-colors" href="#">RSS</a>
<a className="hover:text-primary transition-colors" href="#">GitHub</a>
</div>
</footer>
</div>
</main>
</div>

<div className="lg:hidden fixed bottom-6 right-6 z-50">
<button className="w-12 h-12 bg-accent hover:bg-accentHover rounded-full shadow-lg shadow-accent/30 flex items-center justify-center text-white transition-all">
<iconify-icon icon="solar:magnifer-linear" width="24"></iconify-icon>
</button>
</div>

    </>
  );
}
