import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<header className="border-b border-[#222] bg-[#161616]">
<div className="container mx-auto px-4 py-4 flex items-center justify-between max-w-[1200px]">
<div className="flex items-center space-x-2">
<div className="w-6 h-6 rounded bg-[#6E56CF] flex items-center justify-center text-white font-bold">D</div>
<span className="font-semibold text-lg tracking-tight text-white">DocsApp</span>
</div>
<nav className="hidden md:flex space-x-6">
<a className="text-[#C4B5FD] font-medium hover:text-white" href="#">Docs</a>
<a className="text-gray-400 hover:text-white" href="#">API</a>
<a className="text-gray-400 hover:text-white" href="#">Blog</a>
</nav>
</div>
</header>
<div className="container mx-auto px-4 py-10 max-w-[1200px] flex">

<aside className="w-64 hidden lg:block pr-8">
<nav className="sticky top-10">
<ul className="space-y-2">
<li>
<a className="flex items-center px-3 py-2 rounded-lg bg-[#1A1A1A] border border-[#2A2A2A] text-[#C4B5FD] font-medium hover:border-[#6E56CF]/50 transition-all" href="#">
<svg className="w-4 h-4 mr-2 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M12 6v6l4 2" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
<circle cx="12" cy="12" fill="none" r="9" stroke="currentColor" strokeWidth="1.5"></circle>
</svg>
              Getting Started
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-[#1A1A1A] border border-transparent hover:border-[#6E56CF]/30 transition-all" href="#">
<svg className="w-4 h-4 mr-2 text-[#9E8CFC]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              Installation
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-[#1A1A1A] border border-transparent hover:border-[#6E56CF]/30 transition-all" href="#">
<svg className="w-4 h-4 mr-2 text-[#C4B5FD]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<rect fill="none" height="18" rx="2" stroke="currentColor" strokeWidth="1.5" width="18" x="3" y="3"></rect>
</svg>
              Components
            </a>
</li>
<li>
<a className="flex items-center px-3 py-2 rounded-lg hover:bg-[#1A1A1A] border border-transparent hover:border-[#6E56CF]/30 transition-all" href="#">
<svg className="w-4 h-4 mr-2 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<circle cx="12" cy="12" fill="none" r="10" stroke="currentColor" strokeWidth="1.5"></circle>
<path d="M12 16v-4M12 8h.01" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
              FAQ
            </a>
</li>
</ul>
<div className="mt-10">
<span className="text-xs uppercase text-gray-500 font-semibold mb-4 block">Guides</span>
<ul className="space-y-1">
<li><a className="block px-3 py-1.5 rounded hover:bg-[#1A1A1A]" href="#">Theming</a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-[#1A1A1A]" href="#">CLI Usage</a></li>
<li><a className="block px-3 py-1.5 rounded hover:bg-[#1A1A1A]" href="#">Deploy</a></li>
</ul>
</div>
</nav>
</aside>

<main className="flex-1 max-w-3xl mx-auto">
<article className="bg-[#161616] border border-[#292929] rounded-xl shadow-[0_2px_10px_rgba(0,0,0,0.15)] px-8 py-10">
<h1 className="text-3xl font-bold mb-4 text-white tracking-tight">Getting Started</h1>
<p className="text-gray-400 mb-6 leading-relaxed text-lg">
          Welcome to <span className="text-[#C4B5FD] font-medium">DocsApp</span>! This guide will help you get up and running in minutes.
        </p>
<div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.13)]">
<div className="flex items-center space-x-3 mb-2">
<div className="w-8 h-8 bg-[#6E56CF] rounded-md flex items-center justify-center text-white font-bold">1</div>
<div className="text-base font-semibold tracking-tight">Install Package</div>
</div>
<p className="text-xs text-gray-400 mb-2">Install the package via npm or yarn:</p>
<pre className="bg-[#19181D] rounded p-3 text-xs text-[#9E8CFC] font-mono overflow-x-auto">npm install docsapp</pre>
</div>
<div className="bg-[#1A1A1A] border border-[#2A2A2A] rounded-lg p-5 transition-all hover:border-[#6E56CF]/50 shadow-[0_2px_10px_rgba(0,0,0,0.13)]">
<div className="flex items-center space-x-3 mb-2">
<div className="w-8 h-8 bg-[#C4B5FD] rounded-md flex items-center justify-center text-[#6E56CF] font-bold">2</div>
<div className="text-base font-semibold tracking-tight">Import &amp; Use</div>
</div>
<p className="text-xs text-gray-400 mb-2">Import into your project:</p>
<pre className="bg-[#19181D] rounded p-3 text-xs text-[#C4B5FD] font-mono overflow-x-auto">import DocsApp from 'docsapp'</pre>
</div>
</div>
<h2 className="text-xl font-bold mb-2 text-white mt-8">Basic Usage</h2>
<p className="text-gray-400 mb-4 text-sm">Start by creating a new documentation page using the built-in generator:</p>
<pre className="bg-[#19181D] rounded p-4 text-sm text-[#9E8CFC] font-mono overflow-x-auto mb-6">$ docsapp new my-docs</pre>
<div className="border-l-4 border-[#6E56CF] pl-4 py-2 bg-[#18171B] text-[#9E8CFC] text-xs rounded mb-4">
<strong>Tip:</strong> Edit <span className="font-mono text-[#C4B5FD]">docs.config.js</span> to customize your site.
        </div>
<ul className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
<li className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-4 flex items-center space-x-2">
<svg className="w-5 h-5 text-[#6E56CF]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M7 20h10M12 4v16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-sm text-gray-300">Easy Configuration</span>
</li>
<li className="bg-[#1A1A1A] border border-[#2A2A2A] rounded p-4 flex items-center space-x-2">
<svg className="w-5 h-5 text-[#9E8CFC]" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M4 6h16M4 12h16M4 18h16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
<span className="text-sm text-gray-300">Rich Markdown Support</span>
</li>
</ul>
<div className="mt-8">
<a className="inline-flex items-center px-5 py-2 rounded-lg bg-[#6E56CF] text-white font-semibold hover:bg-[#7C5FFF] transition-all" href="#">
            Next: Installation
            <svg className="ml-2 w-4 h-4" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M9 5l7 7-7 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path>
</svg>
</a>
</div>
</article>
</main>
</div>

    </>
  );
}
