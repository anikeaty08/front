import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
bg: '#0a0a0a',
panel: '#111111',
border: '#222222',
muted: '#888888',
fg: '#ededed',
accent: '#ffffff',
}
}
}
}



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
      

<nav className="sticky top-0 z-50 w-full border-b border-border bg-bg/80 backdrop-blur-md">
<div className="mx-auto flex max-w-screen-2xl items-center justify-between px-6 py-4">
<div className="flex items-center gap-3">
<div className="flex h-8 w-8 items-center justify-center rounded-lg border border-border bg-panel text-fg">
<iconify-icon icon="solar:layers-minimalistic-linear" strokeWidth="1.5" width="18"></iconify-icon>
</div>
<span className="text-base font-medium tracking-tight">Stackbase</span>
</div>
<div className="hidden sm:flex items-center gap-4 bg-panel border border-border rounded-full px-4 py-1.5 w-96 relative transition-all focus-within:ring-1 focus-within:ring-muted focus-within:border-muted">
<iconify-icon className="text-muted" icon="solar:magnifer-linear"></iconify-icon>
<input className="w-full bg-transparent text-sm text-fg placeholder:text-muted focus:outline-none border-none" placeholder="Search tools, categories, or functions..." type="text"/>
<div className="absolute right-2 flex items-center gap-1 text-xs text-muted font-medium border border-border rounded px-1.5 py-0.5 bg-bg">
<span>⌘</span><span>K</span>
</div>
</div>
<div className="flex items-center gap-4">
<button className="text-sm font-medium text-muted hover:text-fg transition-colors">Submit Tool</button>
</div>
</div>
</nav>

<div className="mx-auto flex w-full max-w-screen-2xl flex-1 items-start gap-x-10 px-6 py-8">

<aside className="sticky top-24 hidden w-64 shrink-0 flex-col gap-8 lg:flex h-[calc(100vh-8rem)] overflow-y-auto pr-2 pb-10">

<div className="flex flex-col gap-4">
<h3 className="text-xs font-medium text-muted uppercase tracking-widest">Filters</h3>
<div className="flex items-center justify-between">
<span className="text-sm text-fg font-medium">Free Tools Only</span>
<label className="relative inline-flex items-center cursor-pointer">
<input className="sr-only peer" type="checkbox" value=""/>
<div className="w-7 h-4 bg-border peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-bg after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-muted peer-checked:after:bg-bg after:border-transparent after:border after:rounded-full after:h-3 after:w-3 after:transition-all peer-checked:bg-fg"></div>
</label>
</div>
</div>

<div className="flex flex-col gap-2">
<h3 className="text-xs font-medium text-muted uppercase tracking-widest mb-1">Categories</h3>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#assistants">
<iconify-icon icon="solar:chat-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    AI Assistants
                </a>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#design">
<iconify-icon icon="solar:pen-new-square-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Design &amp; UI/UX
                </a>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#development">
<iconify-icon icon="solar:code-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Development
                </a>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#visual">
<iconify-icon icon="solar:camera-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Image &amp; Video
                </a>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#audio">
<iconify-icon icon="solar:microphone-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Voice &amp; Audio
                </a>
<a className="group flex items-center gap-3 rounded-lg px-2 py-1.5 text-sm font-medium text-muted hover:bg-panel hover:text-fg transition-all" href="#resources">
<iconify-icon icon="solar:folder-with-files-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    Assets &amp; Resources
                </a>
</div>
</aside>

<main className="flex-1 pb-20">
<header className="mb-12 max-w-3xl">
<h1 className="text-2xl sm:text-3xl font-medium tracking-tight text-fg mb-3">The ultimate directory for modern workflows.</h1>
<p className="text-base font-normal text-muted leading-relaxed">Explore a curated collection of artificial intelligence tools, design resources, and development environments designed to accelerate your creative process.</p>
</header>
<div className="flex flex-col gap-16">

<section className="scroll-mt-24" id="assistants">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">AI Assistants &amp; Chat</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">

<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">ChatGPT</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Free/Paid</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">The standard for general assistance, coding, writing, and problem-solving.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Claude</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Limited</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Excellent for large context windows, writing, and logical reasoning.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Gemini</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Free</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Google's multi-modal AI integrated with workspace tools.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Reka.ai</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Free</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Advanced multimodal AI models capable of understanding text, images, and video.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Uncensored AI</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Varies</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Open-weight models without restrictions for absolute creative freedom.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="design">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">Design &amp; UI/UX</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Figma</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Free Tier</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Industry standard for UI/UX design, prototyping, and collaboration.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">v0.dev</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Limited</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Generate React/Tailwind UI components via natural language prompts.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Design Arena</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Platform</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">A hub for discovering the latest design trends, tools, and inspirations.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Canva</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Freemium</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Accessible drag-and-drop graphic design with built-in AI tools.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Uizard</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Free Tier</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">AI-powered UI design tool for rapid wireframing and prototyping.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="development">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">Development &amp; Coding</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Cursor</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Free Tier</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">The AI-first code editor built for pair programming with LLMs.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Replit</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Free</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Collaborative browser-based IDE with integrated AI assistance.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Woz</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Platform</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Platform for building and monetizing AI applications easily.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="visual">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">Image &amp; Video Generation</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Leonardo AI</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Freemium</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Create production-quality visual assets for your projects with speed and style consistency.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Lovart AI</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Creative</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">AI-driven creative tool for generating unique artistic imagery and concepts.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Midjourney</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Paid</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">High-fidelity, deeply artistic image generation via Discord interface.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Kapwing</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Freemium</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Collaborative online video editor with robust AI-powered tools for modern creators.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Swishy.ai</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Video</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">AI video generation and animation tools tailored for dynamic content creation.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Runway</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Limited</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">State-of-the-art text-to-video and video-to-video generation platform.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="audio">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">Voice &amp; Audio Processing</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Speecma</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Audio</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Advanced speech generation and manipulation tool for realistic voiceovers.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">ElevenLabs</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Free Credits</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">The most realistic text-to-speech and voice cloning software available.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Suno</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-green-500/80">Limited</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Generate full songs with vocals and instrumentation from text prompts.</p>
</div>
</div>
</div>
</section>

<section className="scroll-mt-24" id="resources">
<div className="flex items-center gap-3 mb-6">
<div className="h-px flex-1 bg-border/50"></div>
<h2 className="text-sm font-medium tracking-tight text-fg">Assets, Learning &amp; Resources</h2>
<div className="h-px flex-1 bg-border/50"></div>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-4">
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Creative Market</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Marketplace</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Buy and sell handcrafted design content like fonts, graphics, and templates.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Envato Elements</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Subscription</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Unlimited downloads of millions of digital assets, from video to web templates.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">UI8</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Marketplace</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Premium UI kits, wireframes, and design resources for product designers.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Design+Code</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Learning</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Learn to design and code modern apps with interactive tutorials and courses.</p>
</div>
</div>
<div className="group relative flex flex-col justify-between rounded-xl border border-border bg-panel/50 p-5 hover:bg-panel transition-all hover:border-muted/30">
<div>
<div className="flex items-start justify-between mb-4">
<h3 className="text-base font-medium tracking-tight text-fg">Yupp AI</h3>
<span className="rounded-full border border-border bg-bg px-2 py-0.5 text-xs font-normal text-muted">Resource</span>
</div>
<p className="text-sm font-normal text-muted line-clamp-2">Comprehensive suite and directory of AI tools categorized for various workflows.</p>
</div>
</div>
</div>
</section>
</div>
</main>
</div>

    </>
  );
}
