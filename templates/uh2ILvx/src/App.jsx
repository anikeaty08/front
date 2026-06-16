import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed w-full h-[80px] bg-[#FFFFFF] border-b border-[#3A3A3A] z-50">
<div className="container mx-auto px-6 h-full flex items-center justify-between">
<a className="text-2xl tracking-[0.3em] uppercase font-medium" href="#">THE NYCHE</a>
<div className="flex gap-12">
<a className="text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Fashion</a>
<a className="text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Culture</a>
<a className="text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Beauty</a>
<a className="text-sm uppercase tracking-wider hover:text-[#D4AF37] transition-colors" href="#">Subscribe</a>
</div>
</div>
</nav>

<section className="h-screen flex items-center justify-center">
<h1 className="text-[180px] tracking-[0.2em] font-light leading-none">NYCHE</h1>
</section>

<main className="container mx-auto px-6 mt-[160px]">
<h2 className="text-[72px] mb-24 font-light">Latest Stories</h2>

<div className="grid grid-cols-3 gap-8 mb-32">

<article className="border border-[#3A3A3A] p-6 hover:border-[#D4AF37] transition-colors">
<h3 className="text-[36px] mb-4 leading-tight">The Return of Minimal Fashion</h3>
<p className="text-base mb-6">Exploring the resurgence of minimalism in contemporary fashion and its impact on sustainable practices.</p>
<p className="text-[13px] uppercase tracking-wider">Fashion • 5 min read</p>
</article>

<article className="border border-[#3A3A3A] p-6 hover:border-[#D4AF37] transition-colors">
<h3 className="text-[36px] mb-4 leading-tight">Paris Fashion Week Highlights</h3>
<p className="text-base mb-6">A curated look at the most influential collections and memorable moments from this season.</p>
<p className="text-[13px] uppercase tracking-wider">Culture • 8 min read</p>
</article>

<article className="border border-[#3A3A3A] p-6 hover:border-[#D4AF37] transition-colors">
<h3 className="text-[36px] mb-4 leading-tight">The Art of Slow Beauty</h3>
<p className="text-base mb-6">Why conscious beauty routines are becoming the new standard in self-care and wellness.</p>
<p className="text-[13px] uppercase tracking-wider">Beauty • 6 min read</p>
</article>
</div>
</main>

    </>
  );
}
