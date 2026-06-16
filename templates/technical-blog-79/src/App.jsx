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
mono: ['JetBrains Mono', 'monospace'],
},
colors: {
// Strict palette enforcement
white: '#FFFFFF',
black: '#000000',
ink: '#111111',
subtle: '#444444',
muted: '#888888',
surface: '#FAFAFA',
border: '#EAEAEA',
accent: '#0B5FFF',
},
backgroundImage: {
'gradient-primary': 'linear-gradient(to right, #000000, #0B5FFF)',
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
      

<nav className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-border transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="flex items-center gap-2 group focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" href="#">
<div className="w-6 h-6 bg-black rounded-sm flex items-center justify-center group-hover:bg-gradient-primary transition-colors duration-300">
<iconify-icon className="text-white text-sm" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-black">Lancers Technology</span>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-subtle hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" href="#">Blog</a>
<a className="text-sm font-medium text-subtle hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" href="#">Services</a>
<a className="text-sm font-medium text-subtle hover:text-black transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent rounded-sm" href="#">Contact</a>
</div>
<div className="flex items-center gap-4">
<button className="hidden md:inline-flex items-center justify-center h-9 px-5 rounded-full bg-black text-white text-sm font-medium hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
                    Book a Call
                </button>
<button className="md:hidden flex items-center justify-center w-9 h-9 text-black focus:outline-none">
<iconify-icon className="text-xl" icon="solar:hamburger-menu-linear" strokeWidth="1.5"></iconify-icon>
</button>
</div>
</div>
</nav>
<main className="flex-grow">

<header className="max-w-3xl mx-auto px-6 pt-24 pb-12">
<div className="flex items-center gap-3 mb-6">
<span className="inline-flex items-center rounded-full bg-surface border border-border px-2.5 py-1 text-xs font-medium text-subtle">
                    Engineering
                </span>
<span className="inline-flex items-center rounded-full bg-surface border border-border px-2.5 py-1 text-xs font-medium text-subtle">
                    Open Source
                </span>
</div>
<h1 className="text-4xl md:text-5xl font-semibold tracking-tight text-transparent bg-clip-text bg-gradient-primary leading-[1.1] mb-6">
                Introducing @lancers/ghost-parser-core: Typed, Secure Ghost Content Parsing
            </h1>
<p className="text-lg md:text-xl text-subtle leading-relaxed mb-8">
                A framework-agnostic parser that converts Ghost HTML into clean, structured TypeScript objects so you can render content anywhere with confidence.
            </p>
<div className="flex items-center gap-4 py-6 border-y border-border mb-12">
<div className="w-10 h-10 rounded-full bg-surface border border-border flex items-center justify-center overflow-hidden">
<iconify-icon className="text-xl text-muted" icon="solar:user-circle-linear" strokeWidth="1.5"></iconify-icon>
</div>
<div className="flex flex-col">
<span className="text-sm font-semibold text-black">Lancers Technology</span>
<div className="flex items-center gap-2 text-xs text-muted">
<span>October 24, 2023</span>
<span className="w-1 h-1 rounded-full bg-border"></span>
<span>5 min read</span>
</div>
</div>
</div>

<div className="w-full aspect-[21/9] bg-surface rounded-[20px] border border-border overflow-hidden relative flex items-center justify-center mb-12">

<div className="absolute inset-0 opacity-[0.03]" style={{backgroundImage: 'radial-gradient(#000 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="relative z-10 w-20 h-20 bg-white border border-border rounded-2xl shadow-sm flex items-center justify-center">
<iconify-icon className="text-3xl text-black" icon="solar:ghost-linear" strokeWidth="1.5"></iconify-icon>
</div>
</div>
</header>

<article className="max-w-3xl mx-auto px-6 pb-24 text-base leading-relaxed text-ink">

<div className="prose-block">
<p>Ghost is a great writing and publishing experience. The challenge usually starts after publishing—when you need to ship the same Ghost content to multiple frontends: a marketing site, a docs app, an email renderer, a mobile app, or a component-driven design system.</p>
</div>
<div className="prose-block">
<p>At that point, you're often stuck with one of two options:</p>
</div>

<div className="prose-block pl-4 border-l-2 border-border my-6">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="text-accent mt-1">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span>Render raw Ghost HTML directly (fast, but brittle and hard to control), or</span>
</li>
<li className="flex items-start gap-3">
<span className="text-accent mt-1">
<iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5"></iconify-icon>
</span>
<span>Build a custom parsing layer (time-consuming, easy to get wrong, and often inconsistent across projects)</span>
</li>
</ul>
</div>
<div className="prose-block">
<p><code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5">@lancers/ghost-parser-core</code> is built for teams who want a third option: a small, framework-agnostic parser that converts Ghost HTML into clean, structured TypeScript objects—securely—so you can render content anywhere with confidence.</p>
</div>
<div className="prose-block font-medium">
<p>We're launching soon.</p>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">The problem: Ghost HTML doesn't scale across frontends</h2>
</div>
<div className="prose-block">
<p>When content needs to move beyond a single web page, raw HTML becomes a liability:</p>
</div>

<div className="prose-block my-6">
<ul className="space-y-3 pl-1">
<li className="flex items-start gap-3">
<span className="text-muted mt-1 text-sm"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Typed rendering becomes guesswork:</strong> you don't have reliable types for "what this block is."</span>
</li>
<li className="flex items-start gap-3">
<span className="text-muted mt-1 text-sm"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>UI consistency drifts:</strong> different apps interpret the same HTML differently.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-muted mt-1 text-sm"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Security risks increase:</strong> embeds and HTML content are common vectors for XSS.</span>
</li>
<li className="flex items-start gap-3">
<span className="text-muted mt-1 text-sm"><iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Maintenance balloons:</strong> parsing logic gets duplicated across codebases.</span>
</li>
</ul>
</div>
<div className="prose-block">
<p>What most teams actually want is a predictable content format:</p>
</div>

<div className="prose-block my-8">
<div className="bg-surface border border-border rounded-[16px] p-6 text-sm">
<ul className="space-y-2">
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> A list of blocks you can render with your own components</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> A stable set of types and utilities</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> A secure baseline for embeds and HTML handling</li>
<li className="flex items-center gap-2"><iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> A configuration surface for "how our org wants content to behave"</li>
</ul>
</div>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">What @lancers/ghost-parser-core does</h2>
</div>
<div className="prose-block">
<p><strong>Input:</strong> Ghost post HTML<br/>
<strong>Output:</strong> an array of structured blocks like:</p>
</div>

<div className="prose-block my-6">
<pre className="code-scroll bg-surface border border-border rounded-[16px] p-5 overflow-x-auto"><code className="font-mono text-sm text-black">{ type: "card", ... } // for Ghost cards
{ type: "html", ... } // for regular HTML segments</code></pre>
</div>
<div className="prose-block">
<p>This means you can build a renderer once (in any framework) and keep your content pipeline consistent.</p>
</div>

<div className="prose-block mt-12 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-black">Key capabilities</h3>
</div>

<div className="prose-block grid grid-cols-1 md:grid-cols-2 gap-6 my-8">
<div className="border border-border rounded-[16px] p-5 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-border">
<iconify-icon className="text-black" icon="solar:box-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-sm">Parses 23 Ghost Card Types</h4>
</div>
<p className="text-sm text-subtle leading-relaxed">Transforms image, bookmark, callout, toggle, embed, code, product, CTA, and more into structured TS objects.</p>
</div>
<div className="border border-border rounded-[16px] p-5 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-border">
<iconify-icon className="text-black" icon="solar:shield-check-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-sm">Built-in Security</h4>
</div>
<p className="text-sm text-subtle leading-relaxed">DOMPurify XSS protection, trusted domain validation for embeds, and an optional strict security mode.</p>
</div>
<div className="border border-border rounded-[16px] p-5 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-border">
<iconify-icon className="text-black" icon="solar:code-file-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-sm">Full TypeScript Support</h4>
</div>
<p className="text-sm text-subtle leading-relaxed">Strong types for every card, type guards, utilities, and individual card parsers.</p>
</div>
<div className="border border-border rounded-[16px] p-5 bg-white shadow-sm">
<div className="flex items-center gap-2 mb-3">
<div className="w-8 h-8 rounded-full bg-surface flex items-center justify-center border border-border">
<iconify-icon className="text-black" icon="solar:settings-linear"></iconify-icon>
</div>
<h4 className="font-semibold text-sm">Highly Configurable</h4>
</div>
<p className="text-sm text-subtle leading-relaxed">Tree-shakeable ESM (~72KB). Configure Markdown/HTML parsing, parser overrides, and security levels.</p>
</div>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">Why structured blocks beat raw HTML</h2>
</div>
<div className="prose-block">
<p>Once content becomes typed blocks, you unlock a cleaner workflow:</p>
</div>

<div className="prose-block mt-8">
<h3 className="text-base font-semibold text-black mb-2">1) Rendering becomes component-driven</h3>
<p className="text-subtle mb-4">Instead of trying to "style HTML," you map content to components:</p>
<div className="bg-surface border border-border rounded-[16px] p-5">
<ul className="font-mono text-sm space-y-2 text-subtle">
<li><span className="text-black">image</span> <span className="text-muted">→</span> &lt;PostImage /&gt;</li>
<li><span className="text-black">callout</span> <span className="text-muted">→</span> &lt;Callout /&gt;</li>
<li><span className="text-black">product</span> <span className="text-muted">→</span> &lt;ProductCard /&gt;</li>
<li><span className="text-black">code</span> <span className="text-muted">→</span> &lt;CodeBlock /&gt;</li>
</ul>
</div>
</div>
<div className="prose-block mt-8">
<h3 className="text-base font-semibold text-black mb-2">2) You can enforce consistency</h3>
<p className="text-subtle">You control spacing, typography, accessibility, and UX behavior in a single renderer—across all platforms.</p>
</div>
<div className="prose-block mt-8">
<h3 className="text-base font-semibold text-black mb-2">3) Security becomes part of the pipeline</h3>
<p className="text-subtle">Sanitization and embed-domain policies are applied at parse time, not as an afterthought.</p>
</div>

<div className="prose-block my-16">
<div className="relative overflow-hidden border border-border rounded-[20px] p-10 bg-white flex flex-col items-center text-center shadow-[0_2px_10px_rgba(0,0,0,0.02)]">
<div className="w-12 h-12 bg-surface border border-border rounded-full flex items-center justify-center mb-5">
<iconify-icon className="text-2xl text-black" icon="solar:rocket-linear"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-black mb-2">Launching soon</h3>
<p className="text-sm text-subtle mb-8 max-w-sm">Be the first to know when the typed parser goes live and get early access to documentation.</p>
<button className="bg-gradient-primary text-white px-8 py-3 rounded-full font-medium text-sm hover:opacity-90 transition-opacity focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-accent shadow-sm">
                        Subscribe for updates
                    </button>
<a className="mt-5 text-xs font-medium text-muted hover:text-black transition-colors underline decoration-border underline-offset-4 focus:outline-none rounded-sm" href="#">
                        Contact us
                    </a>
</div>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">Security: safer content by default</h2>
</div>
<div className="prose-block">
<p>Ghost content is powerful because it can include embeds, HTML, and rich cards. Those same capabilities are why teams need reliable security controls.</p>
</div>
<div className="prose-block">
<p><code className="font-mono text-sm bg-surface border border-border rounded px-1.5 py-0.5">@lancers/ghost-parser-core</code> includes:</p>
</div>
<div className="prose-block my-6">
<ul className="space-y-3 pl-4 list-disc marker:text-border text-subtle">
<li>DOMPurify-based sanitization to reduce XSS risk</li>
<li>Trusted domain validation for embed cards (so content can't embed arbitrary sources)</li>
<li>Strict security mode for high-control environments (e.g., regulated products, enterprise docs, internal tooling)</li>
</ul>
</div>

<div className="prose-block my-8">
<blockquote className="border-l-[3px] border-accent pl-5 py-1 italic text-lg text-ink">
                    "The goal is straightforward: make the safe path the default path, while still letting advanced teams configure the tradeoffs."
                </blockquote>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">Quick start: parsing a post into blocks</h2>
</div>
<div className="prose-block text-sm font-semibold mb-3">
                Installation (launching soon):
            </div>

<div className="prose-block mb-8">
<div className="bg-surface border border-border rounded-[16px] overflow-hidden">
<div className="px-4 py-2 border-b border-border bg-white flex items-center gap-2">
<iconify-icon className="text-muted" icon="solar:terminal-linear"></iconify-icon>
<span className="text-xs font-mono text-muted">terminal</span>
</div>
<pre className="code-scroll p-4 overflow-x-auto"><code className="font-mono text-sm text-black">npm i @lancers/ghost-parser-core</code></pre>
</div>
</div>
<div className="prose-block text-sm font-semibold mb-3">
                Parse HTML:
            </div>

<div className="prose-block mb-8">
<div className="bg-surface border border-border rounded-[16px] overflow-hidden">
<div className="px-4 py-2 border-b border-border bg-white flex items-center gap-2">
<iconify-icon className="text-muted" icon="solar:document-text-linear"></iconify-icon>
<span className="text-xs font-mono text-muted">parser.ts</span>
</div>
<pre className="code-scroll p-4 overflow-x-auto"><code className="font-mono text-sm text-black"><span className="text-accent">import</span> { parseGhostHtml } <span className="text-accent">from</span> "@lancers/ghost-parser-core";

<span className="text-accent">const</span> blocks = <span className="text-accent">parseGhostHtml</span>(postHtml);

<span className="text-muted">// blocks looks like:
// [{ type: "card", cardType: "image", ... }, { type: "html", html: "&lt;p&gt;...&lt;/p&gt;" }, ...]</span></code></pre>
</div>
</div>
<div className="prose-block text-sm font-semibold mb-3">
                Render anywhere (example pattern):
            </div>

<div className="prose-block mb-8">
<div className="bg-surface border border-border rounded-[16px] overflow-hidden">
<div className="px-4 py-2 border-b border-border bg-white flex items-center gap-2">
<iconify-icon className="text-muted" icon="solar:monitor-smartphone-linear"></iconify-icon>
<span className="text-xs font-mono text-muted">renderer.tsx</span>
</div>
<pre className="code-scroll p-4 overflow-x-auto"><code className="font-mono text-sm text-black"><span className="text-accent">for</span> (<span className="text-accent">const</span> block <span className="text-accent">of</span> blocks) {
  <span className="text-accent">if</span> (block.type === "html") {
    <span className="text-muted">// render sanitized html</span>
  } <span className="text-accent">else</span> {
    <span className="text-muted">// switch on card type and render your component</span>
  }
}</code></pre>
</div>
</div>
<div className="prose-block">
<p>This keeps Ghost parsing concerns separate from UI concerns—and makes the UI layer framework-independent.</p>
</div>

<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">TypeScript-first: predictable rendering, fewer runtime surprises</h2>
</div>
<div className="prose-block">
<p>This library is designed around the reality of modern content platforms: types are part of the product. You get:</p>
</div>
<div className="prose-block my-6">
<ul className="space-y-2 pl-4 list-disc marker:text-border text-subtle">
<li>Typed objects per card type</li>
<li>Type guards for safe narrowing</li>
<li>Utilities to build robust renderers</li>
<li>Individual card parsers when you want a smaller surface area</li>
</ul>
</div>
<div className="prose-block">
<p>That means you can build rendering logic that's safer at compile time, easier to refactor, and easier to share across apps and teams.</p>
</div>
<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">Configurable pipelines: match your content rules</h2>
</div>
<div className="prose-block">
<p>Every team has different content requirements. Some allow limited custom HTML, others don't. Some allow markdown sections, others convert everything. Some accept a wide range of embeds, others restrict to a small allowlist.</p>
<p className="mt-4">The intent is not "one way to do content," but a reliable core you can adapt to your rules.</p>
</div>
<div className="prose-block mt-16 mb-6">
<h2 className="text-2xl font-semibold tracking-tight text-black">Designed for modern builds</h2>
</div>
<div className="prose-block my-6">
<ul className="space-y-3">
<li className="flex items-start gap-3">
<span className="text-accent mt-1"><iconify-icon icon="solar:bolt-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Framework-agnostic:</strong> no React/Vue/Svelte dependency</span>
</li>
<li className="flex items-start gap-3">
<span className="text-accent mt-1"><iconify-icon icon="solar:minimize-square-3-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Tree-shakeable ESM:</strong> import only what you use</span>
</li>
<li className="flex items-start gap-3">
<span className="text-accent mt-1"><iconify-icon icon="solar:scale-linear" strokeWidth="1.5"></iconify-icon></span>
<span><strong>Lightweight:</strong> ~72KB bundle</span>
</li>
</ul>
</div>
<div className="prose-block mt-12 mb-6">
<h3 className="text-xl font-semibold tracking-tight text-black">What you can build with it</h3>
</div>
<div className="prose-block my-6 bg-surface border border-border rounded-[16px] p-6 text-sm text-subtle">
<ul className="space-y-3">
<li className="flex items-start gap-2">
<span className="text-black font-medium mr-2">1.</span>
                        A shared renderer used by Next.js + Astro + mobile web
                    </li>
<li className="flex items-start gap-2">
<span className="text-black font-medium mr-2">2.</span>
                        A docs site that reuses Ghost posts but enforces stricter security
                    </li>
<li className="flex items-start gap-2">
<span className="text-black font-medium mr-2">3.</span>
                        A pipeline that converts Ghost content into a portable format for storage/search
                    </li>
<li className="flex items-start gap-2">
<span className="text-black font-medium mr-2">4.</span>
                        A preview system that renders typed blocks consistently across environments
                    </li>
</ul>
</div>
<div className="prose-block mt-16 mb-6 pt-8 border-t border-border">
<h2 className="text-2xl font-semibold tracking-tight bg-gradient-primary text-transparent bg-clip-text inline-block">Launching soon</h2>
</div>
<div className="prose-block">
<p>@lancers/ghost-parser-core is launching soon. The goal is simple: Make Ghost content easy to parse, safe to consume, and pleasant to render—across any stack.</p>
<p className="mt-6">If you want, share your target stack (Next/Vue/Svelte/Astro/etc.) and how you render Ghost today, and we can tailor a "renderer mapping" section for your blog post with an example component strategy.</p>
</div>
</article>
</main>

<footer className="bg-surface border-t border-border pt-24 pb-12 px-6">
<div className="max-w-6xl mx-auto">

<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 mb-24">

<div>
<h2 className="text-3xl font-semibold tracking-tight text-black mb-4">Let's Connect</h2>
<p className="text-base text-subtle mb-8">Reach out for collaborations, inquiries, or just to say hello. We're excited to hear from you!</p>
<form className="space-y-4 max-w-md" onsubmit="event.preventDefault();">
<div className="relative">
<input className="w-full bg-white border border-border rounded-[12px] px-4 py-3 text-sm text-black placeholder:text-muted focus:outline-none focus:ring-2 focus:ring-accent/20 focus:border-accent transition-all shadow-sm" placeholder="Enter your email" required="" type="email"/>
</div>
<button className="w-full bg-black text-white px-6 py-3 rounded-[12px] font-medium text-sm hover:bg-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black" type="submit">
                            Subscribe
                        </button>
</form>
</div>

<div className="flex flex-col justify-center">
<ul className="space-y-6 mb-8">
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<iconify-icon className="text-black" icon="solar:bell-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm text-black mb-1">Stay Updated</h4>
<p className="text-sm text-subtle leading-relaxed">Receive our latest news, updates, and special offers directly to your inbox.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<iconify-icon className="text-black" icon="solar:star-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm text-black mb-1">Exclusive Content</h4>
<p className="text-sm text-subtle leading-relaxed">Get access to exclusive resources, guides, and insider information.</p>
</div>
</li>
<li className="flex items-start gap-4">
<div className="w-8 h-8 rounded-full bg-white border border-border flex items-center justify-center shrink-0 shadow-sm mt-0.5">
<iconify-icon className="text-black" icon="solar:chat-round-line-linear"></iconify-icon>
</div>
<div>
<h4 className="font-semibold text-sm text-black mb-1">Direct Communication</h4>
<p className="text-sm text-subtle leading-relaxed">Open a direct line of communication for collaborations and support.</p>
</div>
</li>
</ul>
<div className="bg-white border border-border rounded-[16px] p-6 relative">
<iconify-icon className="text-border text-4xl absolute top-4 left-4 opacity-50" icon="solar:quote-left-linear"></iconify-icon>
<p className="text-sm text-black font-medium leading-relaxed relative z-10 italic">
                            "By connecting with us, you'll be part of a community that values innovation, creativity, and forward-thinking solutions. Let's shape the future together!"
                        </p>
</div>
</div>
</div>

<div className="border-t border-border pt-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-8">
<div className="max-w-xl">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-black rounded-sm flex items-center justify-center">
<iconify-icon className="text-white text-xs" icon="solar:code-square-linear" strokeWidth="1.5"></iconify-icon>
</div>
<span className="font-semibold text-sm tracking-tight text-black">Lancers Technology</span>
</div>
<p className="text-sm font-medium text-black mb-2">Partner with Lancers Technology, where trusted expertise meets innovation in blockchain and tech solutions</p>
<p className="text-xs text-muted leading-relaxed">Lancers Technology is a brand operated by Chadas Myriad Technologies Private Limited, offering the same innovative services under a unified identity.</p>
</div>
<div className="flex flex-col sm:flex-row gap-3 shrink-0">
<button className="bg-white border border-border text-black px-6 py-2.5 rounded-full font-medium text-sm hover:bg-surface transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-accent shadow-sm">
                        Contact Us
                    </button>
<button className="bg-black text-white px-6 py-2.5 rounded-full font-medium text-sm hover:bg-ink transition-colors focus:outline-none focus-visible:ring-2 focus-visible:ring-offset-2 focus-visible:ring-black">
                        Book A Call
                    </button>
</div>
</div>
<div className="mt-12 flex flex-col md:flex-row items-center justify-between gap-4 text-xs text-muted">
<p>© 2023 All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="hover:text-black transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-black transition-colors" href="#">Terms and Conditions</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
