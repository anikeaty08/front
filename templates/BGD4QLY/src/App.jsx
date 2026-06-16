import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    document.addEventListener('DOMContentLoaded', function() {
      VANTA.DOTS({
        el: "#vanta-bg",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        color: 0xffffff,
        color2: 0xffff00,
        backgroundColor: 0x000000,
        size: 3.00,
        spacing: 33.00
      });
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen overflow-hidden">
<div className="absolute inset-0 z-0 opacity-40" id="vanta-bg"><canvas className="vanta-canvas" height="2805" style={{display: 'block', position: 'absolute', zIndex: '0', top: '0px', left: '0px', width: '1405px', height: '2805px'}} width="1405"></canvas></div>

<nav className="relative z-10 border-b-4 border-white">
<div className="container mx-auto flex justify-between items-center px-4 py-3">
<div className="text-2xl font-bold uppercase tracking-tighter">AI GARAGE</div>
<div className="flex space-x-4">
<a className="hover:text-yellow-300 text-xs uppercase transition" href="#ai-tools">AI TOOLS</a>
<a className="hover:text-yellow-300 text-xs uppercase transition" href="#mvp-offer">MVP SERVICE</a>
<a className="hover:text-yellow-300 text-xs uppercase transition" href="#about">ABOUT</a>
<a className="hover:text-yellow-300 text-xs uppercase transition" href="#contact">CONTACT</a>
</div>
</div>
</nav>
<main className="relative z-10 container mx-auto px-4 pt-12">

<section className="grid grid-cols-1 md:grid-cols-12 gap-8 mb-20">
<div className="md:col-span-7 flex flex-col justify-center">
<h1 className="text-5xl md:text-7xl font-bold uppercase tracking-tight mb-6 leading-none">
            FROM IDEA TO MVP IN 2 WEEKS
          </h1>
<div className="w-full h-3 bg-yellow-300 mb-8"></div>
<p className="text-lg font-mono mb-8">
            I build AI tools and MVPs for VPs, first-time founders, and curious minds.<br/>
            $1,200 → 2 weeks → a real product you can test.
          </p>
<a className="inline-block bg-white text-black py-3 px-8 text-lg font-bold uppercase hover:bg-yellow-300 transition" href="#start-mvp">
            START YOUR MVP
          </a>
</div>
<div className="md:col-span-5 border-4 border-white">
<div className="aspect-square flex bg-yellow-300 items-center justify-center">
<span className="text-black text-3xl md:text-5xl font-bold text-center px-2">AI TOOLS<br/>GARAGE</span>
</div>
</div>
</section>

<section className="mb-20" id="ai-tools">
<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">MY RECENT AI TOOLS</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">MOJU MEMORY VAULT</h3>
<p className="mb-4">AI-powered personal memory vault — search your life like a conversation.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">AI COLOR CONSULTANT</h3>
<p className="mb-4">AI-generated color palettes — curated, project-based, and consultative.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">LINKEDIN COMMENT GENERATOR</h3>
<p className="mb-4">Smart LinkedIn comments — long-form, engaging, and conversation-driving.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">MOJUMEMES</h3>
<p className="mb-4">Daily news + meme generator — viral content delivered in card format.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
</div>
</section>

<section className="mb-20" id="mvp-offer">
<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">2-WEEK MVP OFFER</h2>
<div className="border-4 border-white p-8">
<p className="text-xl font-mono mb-6">
            Have an idea? I’ll build it in 2 weeks. $1,200 flat fee.
          </p>
<ul className="list-disc list-inside text-lg mb-6 space-y-2">
<li>Design the core experience (UX/UI)</li>
<li>Build the MVP using AI + no-code + code</li>
<li>Launch it on your domain</li>
<li>Guide you on next steps</li>
</ul>
<a className="inline-block bg-white text-black py-3 px-8 text-lg font-bold uppercase hover:bg-yellow-300 transition" href="#start-mvp">
            START YOUR MVP
          </a>
</div>
</section>

<section className="mb-20" id="about">
<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">WHY WORK WITH ME</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">BUILDER-LED</h3>
<p className="mb-4">Not an agency. I ship products fast.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">AI-FIRST</h3>
<p className="mb-4">Deep AI + automation stack — GPT, Bolt, Supabase, Zapier, n8n.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
<div className="border-4 border-white p-6 hover:bg-white hover:text-black transition">
<h3 className="text-2xl font-bold uppercase mb-4">PARTNER MINDSET</h3>
<p className="mb-4">Work with you, not for you. Collaborative. Transparent.</p>
<div className="w-1/2 h-1 bg-yellow-300"></div>
</div>
</div>
</section>

<section className="mb-20" id="who-for">
<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">WHO THIS IS FOR</h2>
<ul className="list-disc list-inside space-y-2 text-lg font-mono">
<li>VPs and senior folks with an idea but no team yet</li>
<li>First-time founders wanting to test an idea fast</li>
<li>Product heads wanting to prototype new features</li>
<li>Curious execs exploring AI possibilities</li>
<li>Entrepreneurs tired of waiting for agencies</li>
</ul>
</section>

<section className="mb-16" id="contact">
<h2 className="text-4xl md:text-5xl font-bold uppercase mb-8">STAY IN THE LOOP</h2>
<p className="mb-4 text-lg font-mono">
          Get my latest AI tools, experiments, and MVP ideas — straight to your inbox.
        </p>
<form className="flex flex-col md:flex-row space-y-4 md:space-y-0 md:space-x-4">
<input className="flex-1 py-3 px-4 text-black" placeholder="Your email" required="" type="email"/>
<button className="bg-white text-black py-3 px-8 text-lg font-bold uppercase hover:bg-yellow-300 transition" type="submit">
            SUBSCRIBE
          </button>
</form>
</section>

<footer className="mt-24 border-t-4 border-white py-6">
<div className="flex flex-col md:flex-row justify-between items-start">
<div className="text-xs uppercase">
            © 2025 AI TOOLS GARAGE
          </div>
<div className="text-xs uppercase">
            BUILT WITH AI. SHIPPED BY A BUILDER.
          </div>
</div>
</footer>
</main>
</div>


    </>
  );
}
