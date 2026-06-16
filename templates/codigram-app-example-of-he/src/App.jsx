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
      

<nav className="sticky top-0 z-50 w-full border-b border-zinc-200/80 bg-white/80 backdrop-blur-md">
<div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">
<div className="flex items-center gap-2">
<div className="flex h-6 w-6 items-center justify-center rounded bg-zinc-900 text-white font-semibold text-xs tracking-tight">C</div>
<span className="text-sm font-semibold tracking-tight text-zinc-900">Codigram</span>
</div>
<div className="hidden items-center gap-6 sm:flex">
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Pricing</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Examples</a>
<a className="text-xs font-medium text-zinc-500 hover:text-zinc-900 transition-colors" href="#">Blog</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden text-xs font-medium text-zinc-900 hover:text-zinc-700 sm:block" href="#">Log in</a>
<a className="rounded-full bg-zinc-900 px-3 py-1.5 text-xs font-medium text-white hover:bg-zinc-800 transition-colors" href="#">Sign up</a>
</div>
</div>
</nav>

<main className="relative overflow-hidden pt-16 lg:pt-24">

<div className="mx-auto max-w-3xl px-6 text-center">
<div className="mb-6 inline-flex items-center gap-1.5 rounded-full border border-indigo-100 bg-indigo-50/50 px-3 py-1 text-xs font-medium text-indigo-600">
<iconify-icon className="text-sm" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span>AI Diagram Generator</span>
</div>
<h1 className="mb-6 text-4xl font-semibold tracking-tight text-zinc-900 sm:text-5xl lg:text-6xl lg:leading-[1.1]">
                Turn text into <br className="hidden sm:block"/>
                diagrams instantly.
            </h1>
<p className="mx-auto mb-8 max-w-xl text-lg font-light leading-relaxed text-zinc-500">
                Visualize ideas, system architectures, and process flows using artificial intelligence. Just describe what you need, and Codigram draws it.
            </p>
<div className="flex flex-col items-center justify-center gap-3 sm:flex-row">
<button className="group inline-flex items-center justify-center gap-2 rounded-lg bg-zinc-900 px-6 py-3 text-sm font-medium text-white shadow-lg shadow-zinc-900/10 transition-all hover:bg-zinc-800 hover:shadow-xl hover:-translate-y-0.5 active:scale-95">
<span>Generate Diagram</span>
<iconify-icon className="text-lg text-zinc-300 transition-colors group-hover:text-white" icon="solar:magic-stick-3-linear"></iconify-icon>
</button>
<button className="group inline-flex items-center justify-center gap-2 rounded-lg border border-zinc-200 bg-white px-6 py-3 text-sm font-medium text-zinc-700 shadow-sm transition-all hover:bg-zinc-50 hover:text-zinc-900 hover:-translate-y-0.5 active:scale-95">
<iconify-icon className="text-lg" icon="solar:play-circle-linear"></iconify-icon>
<span>View Demo</span>
</button>
</div>
<div className="mt-8 flex items-center justify-center gap-6 text-xs text-zinc-400">
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon>
<span>No credit card required</span>
</div>
<div className="flex items-center gap-1.5">
<iconify-icon className="text-zinc-600" icon="solar:check-circle-linear"></iconify-icon>
<span>Export to SVG/PNG</span>
</div>
</div>
</div>

<div className="mt-16 px-4 sm:px-6">
<div className="relative mx-auto max-w-5xl">

<div className="absolute -left-20 -top-20 h-96 w-96 rounded-full bg-indigo-200/30 blur-3xl filter opacity-50"></div>
<div className="absolute -right-20 -bottom-20 h-96 w-96 rounded-full bg-blue-200/30 blur-3xl filter opacity-50"></div>

<div className="relative overflow-hidden rounded-xl border border-zinc-200 bg-white shadow-2xl shadow-zinc-200/50 backdrop-blur-sm">

<div className="flex items-center justify-between border-b border-zinc-100 bg-zinc-50/80 px-4 py-3">
<div className="flex items-center gap-1.5">
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
<div className="h-2.5 w-2.5 rounded-full bg-zinc-200"></div>
</div>
<div className="hidden sm:flex items-center gap-1 rounded bg-white px-3 py-1 shadow-sm ring-1 ring-zinc-900/5">
<iconify-icon className="text-[10px] text-zinc-400" icon="solar:lock-keyhole-minimalistic-linear"></iconify-icon>
<span className="text-[10px] font-medium text-zinc-500">app.codigram.com/editor</span>
</div>
<div className="flex items-center gap-3">
<iconify-icon className="text-zinc-400 text-sm" icon="solar:settings-linear"></iconify-icon>
</div>
</div>

<div className="flex flex-col lg:flex-row h-[500px]">

<div className="w-full lg:w-80 flex-none border-b lg:border-b-0 lg:border-r border-zinc-100 bg-white p-5 flex flex-col z-10 relative">
<div className="mb-4">
<label className="mb-2 block text-xs font-medium text-zinc-700">Your prompt</label>
<div className="relative">
<textarea className="h-32 w-full resize-none rounded-lg border border-zinc-200 bg-zinc-50 p-3 text-sm text-zinc-800 placeholder:text-zinc-400 focus:border-indigo-500 focus:outline-none focus:ring-1 focus:ring-indigo-500" placeholder="Describe a user registration process with email verification..."></textarea>
<div className="absolute bottom-2 right-2 rounded bg-white px-1.5 py-0.5 text-[10px] font-medium text-zinc-400 border border-zinc-100 shadow-sm">AI</div>
</div>
</div>
<div className="mb-4">
<label className="mb-2 block text-xs font-medium text-zinc-700">Style</label>
<div className="grid grid-cols-2 gap-2">
<div className="cursor-pointer rounded border border-indigo-600 bg-indigo-50 px-3 py-2 text-center text-xs font-medium text-indigo-700">Flowchart</div>
<div className="cursor-pointer rounded border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-600 hover:bg-zinc-50">Sequence</div>
<div className="cursor-pointer rounded border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-600 hover:bg-zinc-50">Mind Map</div>
<div className="cursor-pointer rounded border border-zinc-200 bg-white px-3 py-2 text-center text-xs font-medium text-zinc-600 hover:bg-zinc-50">ERD</div>
</div>
</div>
<button className="mt-auto w-full rounded-lg bg-indigo-600 py-2.5 text-xs font-semibold text-white shadow-sm hover:bg-indigo-500">
                                Generate
                            </button>
</div>

<div className="relative flex-1 bg-[#F8FAFC] overflow-hidden" style={{backgroundImage: 'radial-gradient(#cbd5e1 1px, transparent 1px)', backgroundSize: '24px 24px'}}>

<div className="absolute inset-0 flex items-center justify-center">
<div className="relative flex items-center gap-12">

<div className="animate-float relative z-10 flex w-36 flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg ring-1 ring-zinc-900/5">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-blue-50 text-blue-600">
<iconify-icon className="text-xl" icon="solar:user-circle-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-900">User</span>
</div>

<div className="relative h-px w-16 bg-zinc-300">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 text-[10px] font-medium text-zinc-400 bg-[#F8FAFC] px-1">Sign Up</div>
<iconify-icon className="absolute -right-2 -top-1.5 text-zinc-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="relative z-10 flex w-36 flex-col items-center gap-2 rounded-xl border border-indigo-200 bg-white p-4 shadow-xl ring-2 ring-indigo-500/10">
<div className="absolute -right-1 -top-1 h-2.5 w-2.5 animate-pulse rounded-full bg-indigo-500"></div>
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-indigo-50 text-indigo-600">
<iconify-icon className="text-xl" icon="solar:server-square-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-900">API Server</span>
</div>

<div className="relative h-px w-16 bg-zinc-300">
<iconify-icon className="absolute -right-2 -top-1.5 text-zinc-300" icon="solar:arrow-right-linear"></iconify-icon>
</div>

<div className="animate-float-delayed relative z-10 flex w-36 flex-col items-center gap-2 rounded-xl border border-zinc-200 bg-white p-4 shadow-lg ring-1 ring-zinc-900/5">
<div className="flex h-10 w-10 items-center justify-center rounded-full bg-emerald-50 text-emerald-600">
<iconify-icon className="text-xl" icon="solar:database-linear"></iconify-icon>
</div>
<span className="text-xs font-semibold text-zinc-900">Database</span>
</div>
</div>

<div className="absolute bottom-8 left-8 hidden lg:block animate-float">
<div className="flex items-center gap-2 rounded-lg border border-zinc-200 bg-white px-3 py-2 shadow-sm">
<div className="h-2 w-2 rounded-full bg-green-500"></div>
<span className="text-[10px] font-mono text-zinc-500">status: 200 OK</span>
</div>
</div>
</div>

<div className="absolute bottom-6 left-1/2 -translate-x-1/2 flex items-center gap-1 rounded-full border border-zinc-200 bg-white p-1.5 shadow-lg shadow-zinc-200/50">
<button className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 transition-colors"><iconify-icon icon="solar:cursor-linear"></iconify-icon></button>
<button className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 transition-colors"><iconify-icon icon="solar:pen-linear"></iconify-icon></button>
<div className="h-4 w-px bg-zinc-200 mx-1"></div>
<button className="rounded-full p-2 text-zinc-500 hover:bg-zinc-100 transition-colors"><iconify-icon icon="solar:magnifier-zoom-in-linear"></iconify-icon></button>
<button className="rounded-full bg-zinc-900 p-2 text-white hover:bg-zinc-800 transition-colors"><iconify-icon icon="solar:export-linear"></iconify-icon></button>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="border-b border-zinc-100 bg-white py-12">
<p className="mb-6 text-center text-[10px] font-semibold uppercase tracking-widest text-zinc-400">Trusted by developer teams at</p>
<div className="mx-auto flex max-w-4xl flex-wrap justify-center gap-8 px-6 opacity-60 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-500">
<span className="text-lg font-bold tracking-tight text-zinc-800">ACME</span>
<span className="text-lg font-bold tracking-tight text-zinc-800">KINETIC</span>
<span className="text-lg font-bold tracking-tight text-zinc-800">WAVEFORM</span>
<span className="text-lg font-bold tracking-tight text-zinc-800">BOLTS</span>
<span className="text-lg font-bold tracking-tight text-zinc-800">FEATHER</span>
</div>
</div>

<div className="mx-auto max-w-5xl px-6 py-24">
<div className="grid gap-6 sm:grid-cols-3">

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:bolt-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-zinc-900">Lightning Fast</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Forget drag and drop. Just type your process and watch the diagram appear in real-time.
                    </p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:share-circle-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-zinc-900">Easy Sharing</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Export your creations as SVG, PNG files, or share them via a public link with your team instantly.
                    </p>
</div>

<div className="group rounded-xl border border-zinc-200 bg-white p-6 transition-all hover:border-zinc-300 hover:shadow-lg hover:shadow-zinc-200/50">
<div className="mb-4 inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-100 bg-zinc-50 text-zinc-900 group-hover:bg-zinc-900 group-hover:text-white transition-colors">
<iconify-icon className="text-xl" icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<h3 className="mb-2 text-sm font-semibold text-zinc-900">Mermaid JS Support</h3>
<p className="text-sm leading-relaxed text-zinc-500">
                        Built on Mermaid syntax. You have full control over the code if you want to manually tweak details.
                    </p>
</div>
</div>
</div>

<div className="bg-white border-y border-zinc-200 py-24">
<div className="mx-auto max-w-5xl px-6">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Loved by Engineers</h2>
<p className="mt-2 text-sm text-zinc-500">Don't just take our word for it.</p>
</div>
<div className="grid gap-6 sm:grid-cols-3">
<div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-indigo-100 flex items-center justify-center text-xs font-bold text-indigo-700">S</div>
<div>
<p className="text-xs font-semibold text-zinc-900">Sarah Jenkins</p>
<p className="text-[10px] text-zinc-400">CTO at TechFlow</p>
</div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">"Codigram saved me hours of documentation time. I can finally explain complex architectures in seconds."</p>
</div>
<div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-emerald-100 flex items-center justify-center text-xs font-bold text-emerald-700">M</div>
<div>
<p className="text-xs font-semibold text-zinc-900">Mike Ross</p>
<p className="text-[10px] text-zinc-400">Senior Dev</p>
</div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">"The AI understands context incredibly well. The Mermaid JS export is a game changer for our wiki."</p>
</div>
<div className="rounded-xl border border-zinc-100 bg-zinc-50/50 p-6">
<div className="flex items-center gap-3 mb-4">
<div className="h-8 w-8 rounded-full bg-amber-100 flex items-center justify-center text-xs font-bold text-amber-700">E</div>
<div>
<p className="text-xs font-semibold text-zinc-900">Elena Wu</p>
<p className="text-[10px] text-zinc-400">Product Manager</p>
</div>
</div>
<p className="text-sm text-zinc-600 leading-relaxed">"I don't know how to code, but now I can generate sequence diagrams for the dev team effortlessly."</p>
</div>
</div>
</div>
</div>

<div className="mx-auto max-w-5xl px-6 py-24">
<div className="mb-12 text-center">
<h2 className="text-2xl font-semibold tracking-tight text-zinc-900">Simple Pricing</h2>
<p className="mt-2 text-sm text-zinc-500">Start for free, upgrade when you need power.</p>
</div>
<div className="grid gap-8 md:grid-cols-2 max-w-3xl mx-auto">

<div className="relative rounded-2xl border border-zinc-200 bg-white p-8">
<h3 className="text-sm font-semibold text-zinc-900">Hobby</h3>
<div className="mt-4 flex items-baseline text-zinc-900">
<span className="text-3xl font-bold tracking-tight">$0</span>
<span className="ml-1 text-sm text-zinc-500">/month</span>
</div>
<p className="mt-4 text-sm text-zinc-500">Perfect for side projects and learning.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> 5 Diagrams per month
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Basic export formats
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Community support
                        </li>
</ul>
<button className="mt-8 w-full rounded-lg border border-zinc-200 bg-white px-4 py-2 text-sm font-medium text-zinc-900 hover:bg-zinc-50 transition-colors">Get Started</button>
</div>

<div className="relative rounded-2xl border border-indigo-200 bg-white p-8 shadow-xl shadow-indigo-500/5 ring-1 ring-indigo-500/10">
<div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full bg-indigo-600 px-3 py-0.5 text-[10px] font-medium text-white">Most Popular</div>
<h3 className="text-sm font-semibold text-indigo-600">Pro</h3>
<div className="mt-4 flex items-baseline text-zinc-900">
<span className="text-3xl font-bold tracking-tight">$12</span>
<span className="ml-1 text-sm text-zinc-500">/month</span>
</div>
<p className="mt-4 text-sm text-zinc-500">For serious developers and teams.</p>
<ul className="mt-6 space-y-3">
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Unlimited Diagrams
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> High-res SVG &amp; PNG
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Private projects
                        </li>
<li className="flex items-center gap-2 text-xs text-zinc-600">
<iconify-icon className="text-indigo-600" icon="solar:check-circle-linear"></iconify-icon> Priority support
                        </li>
</ul>
<button className="mt-8 w-full rounded-lg bg-zinc-900 px-4 py-2 text-sm font-medium text-white hover:bg-zinc-800 transition-colors">Upgrade to Pro</button>
</div>
</div>
</div>

<div className="mx-auto max-w-5xl px-6 pb-24">
<div className="relative overflow-hidden rounded-2xl bg-zinc-900 px-6 py-16 text-center shadow-2xl shadow-zinc-900/20 sm:px-16">
<div className="absolute top-0 right-0 -mt-10 -mr-10 h-64 w-64 rounded-full bg-indigo-500/10 blur-3xl"></div>
<div className="absolute bottom-0 left-0 -mb-10 -ml-10 h-64 w-64 rounded-full bg-blue-500/10 blur-3xl"></div>
<h2 className="relative z-10 text-3xl font-semibold tracking-tight text-white">Ready to streamline your workflow?</h2>
<p className="relative z-10 mx-auto mt-4 max-w-xl text-zinc-400">Join thousands of developers using Codigram to document faster and better.</p>
<div className="relative z-10 mt-8 flex justify-center gap-4">
<button className="rounded-lg bg-white px-5 py-2.5 text-sm font-medium text-zinc-900 hover:bg-zinc-100 transition-colors">Start Generating Free</button>
</div>
</div>
</div>
</main>

<footer className="border-t border-zinc-200 bg-white py-12">
<div className="mx-auto flex max-w-5xl flex-col items-center justify-between gap-6 px-6 sm:flex-row">
<div className="flex items-center gap-2">
<div className="flex h-5 w-5 items-center justify-center rounded bg-zinc-200 text-zinc-500 text-[10px] font-bold">C</div>
<span className="text-sm font-medium text-zinc-900">Codigram</span>
</div>
<div className="flex gap-6 text-xs text-zinc-500">
<a className="hover:text-zinc-900" href="#">Privacy</a>
<a className="hover:text-zinc-900" href="#">Terms</a>
<a className="hover:text-zinc-900" href="#">Contact</a>
</div>
<div className="flex gap-6">
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:plain-twitter-linear"></iconify-icon></a>
<a className="text-zinc-400 hover:text-zinc-600 transition-colors" href="#"><iconify-icon className="text-lg" icon="solar:plain-github-linear"></iconify-icon></a>
</div>
</div>
<div className="mt-8 text-center text-[10px] text-zinc-400">
            © 2024 Codigram Inc. All rights reserved.
        </div>
</footer>

    </>
  );
}
