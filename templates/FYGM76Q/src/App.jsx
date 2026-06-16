import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
    import { createIcons } from "https://cdn.skypack.dev/lucide";
    addEventListener("DOMContentLoaded", () => createIcons());
  


    /* Mobile menu */
    menuBtn.onclick = () => mobileMenu.classList.toggle("hidden");

    /* Particles */
    Particles.init({selector:"#particles",maxParticles:160,connectParticles:true,color:"#5b21b6",
      responsive:[{breakpoint:768,options:{maxParticles:80}}]});

    /* Skill Chart */
    new Chart(document.getElementById("skillChart"), {
      type:"radar",
      data:{labels:["JS","TS","React","CSS","Node","UI Design"],
        datasets:[{data:[95,90,92,88,80,85],backgroundColor:"rgba(99,102,241,.2)",borderColor:"#6366f1",borderWidth:2,pointBackgroundColor:"#6366f1"}]},
      options:{scales:{r:{grid:{color:"rgba(255,255,255,.05)"},ticks:{display:false},
        pointLabels:{color:"#e4e4e7",font:{size:12}}}},plugins:{legend:{display:false}}}
    });

    /* Animate in */
    const io=new IntersectionObserver(ent=>ent.forEach(e=>e.isIntersecting&&e.target.classList.add("opacity-100","translate-y-0","blur-0")),
      {threshold:.2});
    document.querySelectorAll(".animate-fade-in,.animate-slide-in,.animate-blur-in").forEach((el,i)=>{
      el.classList.add("opacity-0","translate-y-4","blur-sm","transition-all","duration-700");
      el.style.transitionDelay=`${i*80}ms`;
      io.observe(el);
    });
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<canvas className="fixed inset-0 -z-10" id="particles"></canvas>

<header className="sticky top-0 z-30 backdrop-blur-sm bg-zinc-950/70 border-b border-white/10">
<nav className="max-w-6xl mx-auto flex items-center justify-between px-6 py-4">
<a className="text-xl font-semibold tracking-tight" href="#">Alex Doe</a>
<ul className="hidden md:flex gap-6 text-sm">
<li><a className="hover:text-indigo-400 transition-colors" href="#about">About</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#skills">Skills</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#projects">Projects</a></li>
<li><a className="hover:text-indigo-400 transition-colors" href="#contact">Contact</a></li>
</ul>
<button className="md:hidden" id="menuBtn"><i className="w-6 h-6" data-lucide="menu"></i></button>
</nav>
<div className="md:hidden px-6 pb-4 space-y-2 hidden" id="mobileMenu">
<a className="block hover:text-indigo-400" href="#about">About</a>
<a className="block hover:text-indigo-400" href="#skills">Skills</a>
<a className="block hover:text-indigo-400" href="#projects">Projects</a>
<a className="block hover:text-indigo-400" href="#contact">Contact</a>
</div>
</header>

<section className="max-w-6xl mx-auto pt-28 pb-24 px-6 flex flex-col md:flex-row items-center gap-12">
<div className="flex-1 space-y-6">
<h1 className="text-4xl md:text-5xl lg:text-6xl font-semibold tracking-tight leading-tight animate-fade-in">
        Designing interfaces, <br className="hidden sm:inline"/> building web experiences
      </h1>
<p className="text-zinc-400 max-w-md animate-slide-in" style={{animationDelay: '0.2s'}}>
        I’m Alex, a front-end developer &amp; UI designer crafting immersive digital products.
      </p>
<div className="flex gap-4 animate-slide-in" style={{animationDelay: '0.4s'}}>
<a className="px-6 py-3 bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-md" href="#projects">View Work</a>
<a className="px-6 py-3 border border-indigo-500 hover:bg-indigo-500 transition-colors rounded-md" href="#contact">Hire Me</a>
</div>
</div>
<div className="flex-1 animate-blur-in md:order-2">
<img alt="Alex Doe headshot" className="w-full aspect-square object-cover rounded-2xl shadow-2xl shadow-indigo-500/20 ring-1 ring-white/10" loading="lazy" onerror="this.src='https://via.placeholder.com/800x800/1e1e1e/ffffff?text=Image+Unavailable'" src="https://images.unsplash.com/photo-1529626455594-4ff0802cfb7e?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
</div>
</section>

<section className="max-w-4xl mx-auto px-6 py-20 border-t border-white/10" id="about">
<h2 className="text-3xl font-semibold tracking-tight mb-6">About</h2>
<article className="prose prose-invert space-y-4">
<p>Hello! I’m Alex, a front-end engineer who blends code &amp; design for exceptional web products. Over the past five years, I’ve worked with startups and agencies, focusing on component-driven development, performance and delightful interactions.</p>
<p>Beyond coding, I sketch, explore generative art, and share insights at local meetups.</p>
</article>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10" id="skills">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Skills Snapshot</h2>
<div className="grid md:grid-cols-2 gap-12">
<div className="bg-zinc-900/60 backdrop-blur-md rounded-xl p-8 ring-1 ring-white/10">
<h3 className="text-lg font-medium mb-4">Proficiency</h3>
<div className="relative"><div className="w-full"><canvas id="skillChart"></canvas></div></div>
</div>
<div className="flex flex-wrap gap-4 content-start">
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">JavaScript</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">TypeScript</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">React</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Next.js</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">CSS &amp; Anim</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Figma</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Node.js</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">UI Architecture</span>
<span className="px-4 py-2 bg-zinc-800 rounded-full text-sm">Testing</span>
</div>
</div>
</section>

<section className="max-w-6xl mx-auto px-6 py-20 border-t border-white/10" id="projects">
<h2 className="text-3xl font-semibold tracking-tight mb-10 text-center">Selected Projects</h2>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
<article className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-zinc-900">
<img alt="Dashboard Analytics screenshot" className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-500" loading="lazy" onerror="this.src='https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Image+Unavailable'" src="https://images.unsplash.com/photo-1535223289827-42f1e9919769?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-2">
<h3 className="text-lg font-medium group-hover:text-indigo-400 transition-colors">Dashboard Analytics</h3>
<p className="text-sm text-zinc-400">A real-time SaaS analytics suite.</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-zinc-900">
<img alt="eCommerce Storefront screenshot" className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-500" loading="lazy" onerror="this.src='https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Image+Unavailable'" src="https://images.unsplash.com/photo-1555529771-35a29d3a4b46?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-2">
<h3 className="text-lg font-medium group-hover:text-indigo-400 transition-colors">eCommerce Storefront</h3>
<p className="text-sm text-zinc-400">High-performance shop + headless CMS.</p>
</div>
</article>
<article className="group relative overflow-hidden rounded-2xl ring-1 ring-white/10 bg-zinc-900">
<img alt="Mobile Wallet screenshot" className="w-full h-52 object-cover transition-transform group-hover:scale-105 duration-500" loading="lazy" onerror="this.src='https://via.placeholder.com/800x400/1e1e1e/ffffff?text=Image+Unavailable'" src="https://images.unsplash.com/photo-1601597111158-1b32b16ab66a?auto=format&amp;fit=crop&amp;w=800&amp;q=80"/>
<div className="p-6 space-y-2">
<h3 className="text-lg font-medium group-hover:text-indigo-400 transition-colors">Mobile Wallet</h3>
<p className="text-sm text-zinc-400">Cross-platform finance application.</p>
</div>
</article>
</div>
</section>

<section className="max-w-3xl mx-auto px-6 py-20 border-t border-white/10" id="contact">
<h2 className="text-3xl font-semibold tracking-tight mb-6 text-center">Get in Touch</h2>
<form className="space-y-6">
<div className="grid sm:grid-cols-2 gap-6">
<input className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Name" required="" type="text"/>
<input className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Email" required="" type="email"/>
</div>
<textarea className="w-full bg-zinc-900 border border-white/10 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-indigo-500" placeholder="Message" required="" rows="6"></textarea>
<button className="px-8 py-3 bg-indigo-500 hover:bg-indigo-400 transition-colors rounded-md" type="submit">Send Message</button>
</form>
</section>

<footer className="py-10 border-t border-white/10">
<div className="max-w-6xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4 text-sm text-zinc-400">
<p>© 2024 Alex Doe. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-indigo-400 flex items-center gap-1" href="https://github.com" target="_blank"><i className="w-5 h-5" data-lucide="github"></i>GitHub</a>
<a className="hover:text-indigo-400 flex items-center gap-1" href="https://linkedin.com" target="_blank"><i className="w-5 h-5" data-lucide="linkedin"></i>LinkedIn</a>
<a className="hover:text-indigo-400 flex items-center gap-1" href="mailto:hello@example.com"><i className="w-5 h-5" data-lucide="mail"></i>Email</a>
</div>
</div>
</footer>



    </>
  );
}
