import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
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
      

<header className="sticky top-0 z-50 w-full border-b border-white/5 bg-zinc-950/80 backdrop-blur-md">
<div className="container mx-auto px-6 flex h-16 items-center justify-between max-w-6xl">
<div className="flex items-center gap-8">
<a className="text-lg font-semibold tracking-tighter text-white" href="#">
                    WD.
                </a>
<nav className="hidden md:flex gap-6">
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#services">Services</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#work">Work</a>
<a className="text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#about">About</a>
</nav>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:inline-flex text-sm font-medium text-zinc-400 hover:text-zinc-100 transition-colors" href="#">Log in</a>
<a className="inline-flex h-9 items-center justify-center rounded-md bg-zinc-100 px-4 py-2 text-sm font-medium text-zinc-900 shadow transition-colors hover:bg-zinc-300 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-zinc-300" href="#contact">
                    Get in touch
                </a>
</div>
</div>
</header>
<main className="flex-grow">

<section className="relative overflow-hidden pt-24 pb-32 sm:pt-32 sm:pb-40 lg:pb-48 bg-grid">
<div className="absolute inset-0 bg-zinc-950/50 mix-blend-multiply"></div>

<div className="absolute top-0 right-1/4 -z-10 h-[400px] w-[400px] rounded-full bg-indigo-500/10 blur-[100px]"></div>
<div className="container mx-auto px-6 relative z-10 max-w-6xl flex flex-col items-center text-center">
<a className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-zinc-300 backdrop-blur-sm mb-8 hover:bg-white/10 transition-colors" href="#">
<span className="flex h-2 w-2 rounded-full bg-emerald-500 mr-2"></span>
                    Available for new projects
                    <iconify-icon className="ml-1" icon="solar:arrow-right-linear" width="14"></iconify-icon>
</a>
<h1 className="max-w-4xl text-5xl sm:text-6xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                    Engineering digital <span className="text-zinc-500">experiences that scale.</span>
</h1>
<p className="max-w-2xl text-base sm:text-lg text-zinc-400 mb-10 font-normal leading-relaxed">
                    We build high-performance, accessible, and beautifully designed web applications. Focusing on modern architecture to help your business move faster.
                </p>
<div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="inline-flex h-11 items-center justify-center rounded-md bg-zinc-100 px-8 py-2 text-sm font-medium text-zinc-900 shadow transition-colors hover:bg-zinc-300" href="#contact">
                        Start your project
                    </a>
<a className="inline-flex h-11 items-center justify-center rounded-md border border-white/10 bg-transparent px-8 py-2 text-sm font-medium text-white shadow-sm transition-colors hover:bg-white/5" href="#work">
                        View our stack
                        <iconify-icon className="ml-2 text-zinc-400" icon="solar:code-square-linear" width="18"></iconify-icon>
</a>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 bg-zinc-950 relative" id="services">
<div className="container mx-auto px-6 max-w-6xl">
<div className="mb-16 max-w-3xl">
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Everything you need to ship.</h2>
<p className="text-base text-zinc-400">Comprehensive technical solutions from system design to final deployment. We handle the complexity so you can focus on the product.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-all hover:bg-zinc-900/80">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner">
<iconify-icon className="text-zinc-300" icon="solar:monitor-smartphone-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-white">Frontend Architecture</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Pixel-perfect, responsive interfaces built with React, Next.js, and modern CSS frameworks. Optimized for vital web metrics.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-all hover:bg-zinc-900/80">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner">
<iconify-icon className="text-zinc-300" icon="solar:database-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-white">Backend Systems</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Scalable APIs and microservices. We design resilient databases and server architectures that handle high traffic effortlessly.
                        </p>
</div>

<div className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/40 p-8 transition-all hover:bg-zinc-900/80">
<div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-white/10 bg-white/5 shadow-inner">
<iconify-icon className="text-zinc-300" icon="solar:rocket-linear" width="24"></iconify-icon>
</div>
<h3 className="mb-3 text-xl font-semibold tracking-tight text-white">DevOps &amp; Cloud</h3>
<p className="text-sm text-zinc-400 leading-relaxed">
                            Automated CI/CD pipelines, containerization, and serverless deployments on AWS, Vercel, or custom cloud infrastructure.
                        </p>
</div>
</div>
</div>
</section>

<section className="py-12 border-t border-white/5 bg-zinc-950/50">
<div className="container mx-auto px-6 max-w-6xl">
<p className="text-center text-xs font-medium text-zinc-500 uppercase tracking-widest mb-8">Technologies we leverage</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 opacity-60 grayscale transition-all hover:grayscale-0 hover:opacity-100">
<span className="text-lg font-semibold tracking-tight text-white">Next.js</span>
<span className="text-lg font-semibold tracking-tight text-white">React</span>
<span className="text-lg font-semibold tracking-tight text-white">TypeScript</span>
<span className="text-lg font-semibold tracking-tight text-white">Node.js</span>
<span className="text-lg font-semibold tracking-tight text-white">PostgreSQL</span>
</div>
</div>
</section>

<section className="py-24 border-t border-white/5 relative overflow-hidden" id="contact">
<div className="absolute inset-0 bg-zinc-900/20"></div>
<div className="container mx-auto px-6 max-w-6xl relative z-10">
<div className="rounded-3xl border border-white/10 bg-zinc-900/50 p-8 md:p-16 backdrop-blur-md">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
<div>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-white mb-4">Ready to build?</h2>
<p className="text-base text-zinc-400 mb-8 max-w-md">
                                Leave your email and a brief description of your project. We'll get back to you within 24 hours to schedule a technical discovery call.
                            </p>

<form className="space-y-4 max-w-md">
<div>
<label className="sr-only" htmlFor="email">Email address</label>
<input className="block w-full rounded-md border-0 bg-white/5 py-2.5 px-4 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-zinc-300 sm:text-sm sm:leading-6 placeholder:text-zinc-600 outline-none transition-all" id="email" name="email" placeholder="hello@company.com" type="email"/>
</div>
<div className="flex items-start gap-3 mt-4">
<div className="flex h-6 items-center">

<input className="h-4 w-4 rounded border-white/20 bg-white/5 text-zinc-300 focus:ring-zinc-500 focus:ring-offset-zinc-950 appearance-none checked:bg-zinc-300 checked:bg-[url('data:image/svg+xml;charset=utf-8,%3Csvg viewBox=\'0 0 16 16\' fill=\'%2318181b\' xmlns=\'http://www.w3.org/2000/svg\'%3E%3Cpath d=\'M12.207 4.793a1 1 0 010 1.414l-5 5a1 1 0 01-1.414 0l-2-2a1 1 0 011.414-1.414L6.5 9.086l4.293-4.293a1 1 0 011.414 0z\'/%3E%3C/svg%3E')] transition-all cursor-pointer" id="nda" name="nda" type="checkbox"/>
</div>
<div className="text-xs leading-6">
<label className="font-medium text-zinc-400 cursor-pointer" htmlFor="nda">Require an NDA before discussing details.</label>
</div>
</div>
<button className="mt-4 flex w-full justify-center rounded-md bg-zinc-100 px-3 py-2.5 text-sm font-medium text-zinc-900 shadow-sm hover:bg-zinc-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-zinc-300 transition-colors" type="submit">
                                    Send request
                                </button>
</form>
</div>
<div className="hidden lg:flex justify-center">

<div className="w-full max-w-sm rounded-xl border border-white/10 bg-[#0c0c0e] p-6 font-mono text-xs text-zinc-500 shadow-2xl">
<div className="flex gap-2 mb-4">
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
<div className="w-3 h-3 rounded-full bg-white/20"></div>
</div>
<p><span className="text-indigo-400">const</span> <span className="text-white">project</span> = <span className="text-zinc-300">{</span></p>
<p className="pl-4"><span className="text-white">status</span>: <span className="text-emerald-400">'planning'</span>,</p>
<p className="pl-4"><span className="text-white">stack</span>: [<span className="text-emerald-400">'Next.js'</span>, <span className="text-emerald-400">'Tailwind'</span>],</p>
<p className="pl-4"><span className="text-white">init</span>: <span className="text-indigo-400">async</span> () <span className="text-indigo-400">=&gt;</span> <span className="text-zinc-300">{</span></p>
<p className="pl-8 text-zinc-600">// Prepare for takeoff</p>
<p className="pl-8"><span className="text-indigo-400">await</span> <span className="text-white">deploy</span>();</p>
<p className="pl-4"><span className="text-zinc-300">}</span></p>
<p><span className="text-zinc-300">}</span>;</p>
</div>
</div>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/5 bg-zinc-950 pt-12 pb-8">
<div className="container mx-auto px-6 max-w-6xl">
<div className="flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex items-center gap-2">
<span className="text-lg font-semibold tracking-tighter text-white">WD.</span>
<span className="text-sm text-zinc-500 ml-2">© 2024</span>
</div>
<div className="flex gap-6">
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">Twitter</a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">GitHub</a>
<a className="text-sm text-zinc-500 hover:text-zinc-300 transition-colors" href="#">LinkedIn</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
