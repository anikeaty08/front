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
      

<nav className="fixed top-0 w-full z-50 bg-neutral-950/70 backdrop-blur-xl border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="text-lg font-medium tracking-tighter text-white">UGS.</div>
<div className="flex items-center gap-6 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#overview">Overview</a>
<a className="hover:text-white transition-colors" href="#solution">Solution</a>
<a className="hover:text-white transition-colors" href="#features">Features</a>
<a className="hover:text-white transition-colors" href="#impact">Impact</a>
</div>
</div>
</nav>

<header className="relative pt-40 pb-24 overflow-hidden" id="overview">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[500px] bg-indigo-600/15 blur-[120px] rounded-full pointer-events-none"></div>
<div className="absolute top-0 right-0 w-[400px] h-[400px] bg-purple-600/10 blur-[100px] rounded-full pointer-events-none"></div>
<div className="max-w-5xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-indigo-300 mb-8 backdrop-blur-sm">
<iconify-icon className="text-sm" icon="solar:gamepad-linear"></iconify-icon>
                    UX/UI Portfolio Case Study
                </div>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tighter text-white mb-6 leading-[1.1]">
                    Unified Gaming <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-neutral-500">Storefront</span>
</h1>
<p className="text-lg text-neutral-400 max-w-2xl mb-12 font-light leading-relaxed">
                    A future-ready, gamified gaming marketplace delivering immersive experiences, personalized recommendations, and interactive community engagement.
                </p>

<div className="w-full max-w-4xl grid grid-cols-2 md:grid-cols-4 gap-6 text-left p-6 md:p-8 rounded-3xl bg-white/[0.02] border border-white/5 backdrop-blur-md">
<div>
<div className="text-xs text-neutral-500 mb-1.5">Platforms</div>
<div className="text-sm text-white font-medium">Web &amp; Mobile App</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1.5">Target Audience</div>
<div className="text-sm text-white font-medium">Gamers aged 16–35</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1.5">Key Concept</div>
<div className="text-sm text-white font-medium">Glassmorphism &amp; Gamification</div>
</div>
<div>
<div className="text-xs text-neutral-500 mb-1.5">Tools</div>
<div className="text-sm text-white font-medium">Figma, Adobe XD, Maze</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-t border-white/5 bg-neutral-900/20 relative" id="solution">
<div className="max-w-6xl mx-auto px-6">
<div className="grid lg:grid-cols-2 gap-12 lg:gap-24 items-center">

<div className="space-y-8">
<div>
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center justify-center text-red-400">
<iconify-icon icon="solar:danger-triangle-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white">The Problem</h2>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
                            Modern storefronts often prioritize vast catalogs over user experience. This leads to friction in discovery and a transactional, rather than engaging, environment.
                        </p>
<ul className="space-y-4 text-sm">
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Current storefronts feel cluttered and impersonal.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Users struggle to discover new games and connect with peers.</span>
</li>
<li className="flex items-start gap-3">
<iconify-icon className="text-neutral-600 mt-0.5" icon="solar:close-circle-linear"></iconify-icon>
<span>Minimal social engagement and gamification features.</span>
</li>
</ul>
</div>
</div>

<div className="relative">
<div className="absolute -inset-1 bg-gradient-to-tr from-indigo-500/20 to-purple-500/20 rounded-[2rem] blur-xl opacity-50"></div>
<div className="relative p-8 md:p-10 rounded-3xl bg-neutral-900/80 border border-white/10 backdrop-blur-xl">
<div className="flex items-center gap-3 mb-6">
<div className="w-10 h-10 rounded-xl bg-indigo-500/10 border border-indigo-500/20 flex items-center justify-center text-indigo-400 text-xl">
<iconify-icon icon="solar:lightbulb-bolt-linear"></iconify-icon>
</div>
<h2 className="text-2xl font-medium tracking-tight text-white">The Solution</h2>
</div>
<p className="text-neutral-300 text-sm leading-relaxed mb-8">
                            A gamified, intuitive storefront with AR/VR previews, AI recommendations, cloud saves, and community hubs that enhances engagement and social interaction.
                        </p>

<div className="p-5 rounded-2xl bg-white/5 border border-white/5 text-sm">
<div className="text-xs text-indigo-400 mb-2 font-medium uppercase tracking-wider">Mission</div>
<div className="text-neutral-200 font-light">
                                "Simplify game discovery, enhance user engagement, and combine social features with seamless purchasing."
                            </div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Research &amp; Insights</h2>
<p className="text-sm text-neutral-400">Understanding the landscape through surveys with 50+ gamers and deep competitor analysis.</p>
</div>
<div className="grid md:grid-cols-3 gap-6">

<div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-neutral-500 mb-4" icon="solar:users-group-rounded-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">User Personas</h3>
<p className="text-xs text-neutral-400 leading-relaxed mb-4">Developed profiles for Casual, Competitive, and Social gamers to guide feature prioritization.</p>
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full bg-neutral-800 border-2 border-neutral-950"></div>
<div className="w-8 h-8 rounded-full bg-neutral-700 border-2 border-neutral-950"></div>
<div className="w-8 h-8 rounded-full bg-neutral-600 border-2 border-neutral-950 flex items-center justify-center text-[10px] text-white">+50</div>
</div>
</div>

<div className="p-6 rounded-3xl bg-white/[0.02] border border-white/5 hover:bg-white/[0.04] transition-colors">
<iconify-icon className="text-2xl text-neutral-500 mb-4" icon="solar:chart-square-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Competitor Gaps</h3>
<p className="text-xs text-neutral-400 leading-relaxed">While platforms like Steam &amp; Epic offer strong catalogs, they lack deep social integration and modern, gamified user experiences.</p>
</div>

<div className="p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 hover:bg-indigo-500/10 transition-colors">
<iconify-icon className="text-2xl text-indigo-400 mb-4" icon="solar:target-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-2">Key Insight</h3>
<p className="text-xs text-indigo-200/70 leading-relaxed">Gamers heavily value visual clarity, personalization, and interactivity. Gamification significantly increases retention.</p>
</div>
</div>
</section>

<section className="py-24 bg-neutral-900/30 border-y border-white/5" id="features">
<div className="max-w-6xl mx-auto px-6">
<div className="mb-16">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Core Features</h2>
<p className="text-sm text-neutral-400 max-w-xl">Bridging the gap between discovery and social interaction through immersive and smart functionalities.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4 auto-rows-[280px]">

<div className="md:col-span-2 lg:col-span-2 row-span-1 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between relative overflow-hidden group">
<div className="relative z-10">
<div className="flex items-center justify-between mb-2">
<iconify-icon className="text-xl text-white" icon="solar:glasses-linear"></iconify-icon>
<span className="text-[10px] px-2 py-1 rounded-full bg-white/10 text-white font-medium">Immersive</span>
</div>
<h3 className="text-lg font-medium text-white mb-1">AR/VR Game Previews</h3>
<p className="text-xs text-neutral-400 w-3/4">Experience 3D demos of games before making a purchase decision.</p>
</div>

<div className="absolute -right-4 -bottom-4 w-64 h-40 bg-neutral-950 rounded-tl-2xl border-t border-l border-white/10 shadow-2xl flex items-center justify-center overflow-hidden transition-transform group-hover:-translate-y-2 group-hover:-translate-x-2">
<div className="w-full h-full bg-[url('data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSI4IiBoZWlnaHQ9IjgiPgo8cmVjdCB3aWR0aD0iOCIgaGVpZ2h0PSI4IiBmaWxsPSIjMGEwYTBhIj48L3JlY3Q+CjxjaXJjbGUgY3g9IjMiIGN5PSIzIiByPSIxIiBmaWxsPSIjMjYyNjI2Ij48L2NpcmNsZT4KPC9zdmc+')] opacity-50"></div>
<div className="absolute w-12 h-12 rounded-full bg-white/10 backdrop-blur-md border border-white/20 flex items-center justify-center">
<iconify-icon className="text-white text-lg ml-0.5" icon="solar:play-linear"></iconify-icon>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-2 rounded-3xl bg-gradient-to-br from-indigo-900/20 to-neutral-900/50 border border-white/10 p-6 flex flex-col relative overflow-hidden group">
<div className="mb-4">
<iconify-icon className="text-xl text-indigo-400 mb-2" icon="solar:magic-stick-3-linear"></iconify-icon>
<h3 className="text-lg font-medium text-white mb-1">AI Recommendations</h3>
<p className="text-xs text-neutral-400">Personalized game suggestions based on library data.</p>
</div>

<div className="mt-auto space-y-2">
<div className="h-10 w-full bg-white/5 rounded-xl border border-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-indigo-500/20"></div>
<div className="h-2 w-20 bg-white/20 rounded-full"></div>
</div>
<div className="h-10 w-4/5 bg-white/5 rounded-xl border border-white/5 flex items-center px-3 gap-3">
<div className="w-6 h-6 rounded bg-purple-500/20"></div>
<div className="h-2 w-16 bg-white/20 rounded-full"></div>
</div>
</div>
</div>

<div className="col-span-1 lg:col-span-1 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
<div>
<iconify-icon className="text-xl text-yellow-400 mb-2" icon="solar:star-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1">Smart Wishlists</h3>
<p className="text-xs text-neutral-400">Gamified goals and unlockable rewards.</p>
</div>

<div className="w-full bg-neutral-950 rounded-full h-1.5 mt-6 overflow-hidden">
<div className="bg-yellow-400 h-1.5 rounded-full w-[65%]"></div>
</div>
</div>

<div className="col-span-1 lg:col-span-1 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col justify-between">
<div>
<iconify-icon className="text-xl text-blue-400 mb-2" icon="solar:cloud-upload-linear"></iconify-icon>
<h3 className="text-base font-medium text-white mb-1">Cloud Sync</h3>
<p className="text-xs text-neutral-400">Cross-device progress saving for a seamless experience.</p>
</div>
<div className="flex items-center justify-between mt-6 px-3 py-2 bg-neutral-950 rounded-xl border border-white/5">
<div className="flex gap-1">
<iconify-icon className="text-neutral-500" icon="solar:monitor-smartphone-linear"></iconify-icon>
</div>
<iconify-icon className="text-green-400" icon="solar:check-circle-linear"></iconify-icon>
</div>
</div>

<div className="md:col-span-2 lg:col-span-2 rounded-3xl bg-white/5 border border-white/10 p-6 flex flex-col md:flex-row gap-6 items-center">
<div className="flex-1">
<div className="inline-flex px-2 py-1 bg-purple-500/10 text-purple-400 text-[10px] rounded mb-3 font-medium uppercase tracking-wider">Social Hub</div>
<h3 className="text-lg font-medium text-white mb-2">Community &amp; In-App Events</h3>
<p className="text-xs text-neutral-400">Interactive chat, groups, leaderboards, and seasonal challenges to drive retention.</p>
</div>

<div className="w-full md:w-56 p-4 rounded-2xl bg-neutral-950 border border-white/5 flex flex-col gap-3 shrink-0">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-10 h-10 rounded-full bg-gradient-to-tr from-indigo-500 to-purple-500 p-[2px]">
<div className="w-full h-full bg-neutral-900 rounded-full border-2 border-neutral-900"></div>
</div>
<div className="absolute -bottom-1 -right-1 bg-indigo-500 text-[8px] font-medium text-white px-1.5 py-0.5 rounded-sm border border-neutral-950">Lv.24</div>
</div>
<div>
<div className="text-xs font-medium text-white">PlayerOne</div>
<div className="text-[10px] text-neutral-500">Top 5% Global</div>
</div>
</div>
<div className="flex gap-1 mt-1">
<div className="w-5 h-5 rounded bg-yellow-500/20 border border-yellow-500/30 flex items-center justify-center"><iconify-icon className="text-[10px] text-yellow-500" icon="solar:cup-star-linear"></iconify-icon></div>
<div className="w-5 h-5 rounded bg-purple-500/20 border border-purple-500/30 flex items-center justify-center"><iconify-icon className="text-[10px] text-purple-500" icon="solar:crown-linear"></iconify-icon></div>
<div className="w-5 h-5 rounded bg-white/5 border border-white/10 flex items-center justify-center"><iconify-icon className="text-[10px] text-neutral-600" icon="solar:lock-linear"></iconify-icon></div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-6xl mx-auto px-6">
<div className="grid md:grid-cols-2 gap-16">

<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-8">Design Process</h2>
<div className="space-y-6 relative before:absolute before:inset-0 before:ml-3.5 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-px before:bg-gradient-to-b before:from-transparent before:via-white/10 before:to-transparent">

<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
<span className="text-[10px]">1</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<h4 className="text-sm font-medium text-white mb-1">Wireframing</h4>
<p className="text-xs text-neutral-400">Outlining layout and content hierarchy.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
<span className="text-[10px]">2</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<h4 className="text-sm font-medium text-white mb-1">UI Design</h4>
<p className="text-xs text-neutral-400">Applying Glassmorphism panels, soft gradients, and minimalist icons.</p>
</div>
</div>
<div className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group">
<div className="flex items-center justify-center w-7 h-7 rounded-full border border-white/20 bg-neutral-900 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 relative z-10">
<span className="text-[10px]">3</span>
</div>
<div className="w-[calc(100%-3rem)] md:w-[calc(50%-1.5rem)] p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<h4 className="text-sm font-medium text-white mb-1">Prototyping &amp; Iteration</h4>
<p className="text-xs text-neutral-400">Interactive demos, micro-interactions, and usability testing.</p>
</div>
</div>
</div>
</div>

<div>
<h2 className="text-2xl font-medium tracking-tight text-white mb-8">UX/UI Highlights</h2>
<div className="space-y-4">
<div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<iconify-icon className="text-xl text-neutral-400 mt-0.5" icon="solar:maximize-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Visual Style</h4>
<p className="text-xs text-neutral-400">Sleek, immersive, modern interface utilizing Glassmorphism panels to create depth without clutter.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<iconify-icon className="text-xl text-neutral-400 mt-0.5" icon="solar:mouse-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Interactive Feedback</h4>
<p className="text-xs text-neutral-400">Subtle micro-interactions, hover states, and smooth animations that make the UI feel alive and responsive.</p>
</div>
</div>
<div className="flex gap-4 p-4 rounded-2xl bg-white/[0.02] border border-white/5">
<iconify-icon className="text-xl text-neutral-400 mt-0.5" icon="solar:medal-star-circle-linear"></iconify-icon>
<div>
<h4 className="text-sm font-medium text-white mb-1">Gamification Engine</h4>
<p className="text-xs text-neutral-400">Integrated badge system, progress trackers, and dynamic content adaptation based on user achievement.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden" id="impact">
<div className="absolute inset-0 bg-gradient-to-b from-indigo-950/20 to-neutral-950 border-t border-white/5"></div>
<div className="max-w-6xl mx-auto px-6 relative z-10">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div className="max-w-lg">
<h2 className="text-3xl font-medium tracking-tight text-white mb-4">Results &amp; Impact</h2>
<p className="text-sm text-neutral-400">Following remote usability tests with 30 participants and subsequent iterations, the redesigned storefront delivered significant measurable improvements across all key metrics.</p>
</div>
<div className="inline-flex items-center gap-2 text-xs font-medium text-indigo-400 bg-indigo-500/10 px-4 py-2 rounded-full border border-indigo-500/20">
<iconify-icon icon="solar:check-read-linear"></iconify-icon>
                    Successfully Validated
                </div>
</div>

<div className="grid grid-cols-2 lg:grid-cols-4 gap-px bg-white/10 rounded-3xl overflow-hidden border border-white/10 shadow-2xl">
<div className="bg-neutral-900/80 backdrop-blur-xl p-8 text-center flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">+35%</div>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Engagement</div>
<div className="text-[10px] text-neutral-500 mt-2">Time on platform</div>
</div>
<div className="bg-neutral-900/80 backdrop-blur-xl p-8 text-center flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">+20%</div>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Conversion</div>
<div className="text-[10px] text-neutral-500 mt-2">Game purchases</div>
</div>
<div className="bg-neutral-900/80 backdrop-blur-xl p-8 text-center flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-white mb-2">+25%</div>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Retention</div>
<div className="text-[10px] text-neutral-500 mt-2">Returning users</div>
</div>
<div className="bg-neutral-900/80 backdrop-blur-xl p-8 text-center flex flex-col justify-center">
<div className="text-4xl md:text-5xl font-semibold tracking-tighter text-indigo-400 mb-2">9.2</div>
<div className="text-xs font-medium text-neutral-400 uppercase tracking-widest">Satisfaction</div>
<div className="text-[10px] text-neutral-500 mt-2">Avg. Usability Score</div>
</div>
</div>
</div>
</section>

<footer className="py-16 border-t border-white/5 bg-neutral-950">
<div className="max-w-4xl mx-auto px-6">
<h3 className="text-lg font-medium text-white mb-6 text-center">Future Roadmap</h3>
<div className="flex flex-wrap justify-center gap-3 mb-16">
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">Multi-platform AR/VR</span>
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">AI Social Matchmaking</span>
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">Live In-App Events</span>
<span className="px-3 py-1.5 rounded-full bg-white/5 border border-white/10 text-xs text-neutral-300">Dynamic UI Themes</span>
</div>
<div className="text-center pt-8 border-t border-white/5">
<div className="text-xl font-medium tracking-tighter text-white mb-2">UGS.</div>
<p className="text-xs text-neutral-500">Case study presentation. Unified Gaming Storefront concept.</p>
</div>
</div>
</footer>

    </>
  );
}
