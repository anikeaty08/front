import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
mystic: '#6B46C1',
deep: '#1A1A2E',
teal: '#00D4AA',
cream: '#FBF9F7',
violet: '#9F7AEA',
lavender: '#EDE9F6'
},
fontFamily: {
sans: ['Inter', 'system-ui', 'sans-serif'],
},
animation: {
'fade-up': 'fadeUp 0.8s ease-out forwards',
'slide-in': 'slideIn 0.8s ease-out forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
slideIn: {
'0%': { opacity: '0', transform: 'translateX(20px)' },
'100%': { opacity: '1', transform: 'translateX(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
}
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
      

<nav className="fixed w-full z-50 top-0 transition-all duration-300 backdrop-blur-md bg-white/80 border-b border-gray-100">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-gradient-to-br from-mystic to-teal flex items-center justify-center text-white shadow-md group-hover:shadow-mystic/30 transition-shadow">
<span className="font-semibold text-sm">S</span>
</div>
<span className="font-semibold text-lg tracking-tight text-deep">SUBMAP</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-deep/70 hover:text-mystic transition-colors" href="#features">Features</a>
<a className="text-sm font-medium text-deep/70 hover:text-mystic transition-colors" href="#how-it-works">How it Works</a>
<a className="text-sm font-medium text-deep/70 hover:text-mystic transition-colors" href="#pricing">Pricing</a>
<a className="text-sm font-medium text-deep/70 hover:text-mystic transition-colors" href="#">Resources</a>
</div>

<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-deep hover:text-mystic transition-colors" href="#">Log in</a>
<a className="bg-mystic text-white text-xs sm:text-sm font-medium px-4 py-2 rounded-lg hover:bg-opacity-90 hover:-translate-y-0.5 transition-all shadow-lg shadow-mystic/20" href="#">
                    Start Free
                </a>
</div>
</div>
</nav>

<section className="relative min-h-screen pt-32 pb-20 px-6 flex items-center justify-center overflow-hidden hero-glow">
<div className="max-w-7xl w-full mx-auto grid lg:grid-cols-12 gap-12 lg:gap-20 items-center">

<div className="lg:col-span-7 flex flex-col items-start space-y-8">

<div className="animate-fade-up opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white border border-violet/30 shadow-sm backdrop-blur-sm">
<iconify-icon className="text-mystic text-lg" icon="solar:stars-minimalistic-linear"></iconify-icon>
<span className="text-xs font-medium bg-gradient-to-r from-mystic to-violet bg-clip-text text-transparent">Now with 700+ AI skills</span>
</div>

<h1 className="animate-fade-up delay-100 opacity-0 text-5xl md:text-6xl lg:text-7xl font-semibold tracking-tight text-deep leading-[1.1]">
                    The AI team you thought you <span className="text-mystic italic">couldn't have</span>—built by you.
                </h1>

<p className="animate-fade-up delay-200 opacity-0 text-lg md:text-xl text-deep/70 max-w-xl leading-relaxed">
                    Submap gives you the power of AI agents without the command line. Build, orchestrate, and observe your AI workforce from one beautiful dashboard.
                </p>

<div className="animate-fade-up delay-300 opacity-0 flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
<a className="flex items-center justify-center gap-2 bg-mystic text-white px-8 py-3.5 rounded-lg font-medium shadow-lg shadow-mystic/30 hover:shadow-mystic/50 hover:-translate-y-1 transition-all" href="#">
                        Start Building Free
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</a>
<a className="flex items-center justify-center gap-2 bg-white text-deep border border-mystic/20 px-8 py-3.5 rounded-lg font-medium hover:border-mystic/50 hover:bg-lavender/30 transition-all" href="#">
<iconify-icon className="text-xl text-mystic" icon="solar:play-circle-linear"></iconify-icon>
                        Watch Demo
                    </a>
</div>

<div className="animate-fade-up delay-400 opacity-0 flex items-center gap-4 pt-2">
<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-200"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-300"></div>
<div className="w-8 h-8 rounded-full border-2 border-white bg-gray-400"></div>
</div>
<p className="text-sm text-deep/60 font-medium">Trusted by 2,500+ small businesses</p>
</div>
</div>

<div className="lg:col-span-5 relative animate-slide-in delay-300 opacity-0">

<div className="absolute -inset-4 bg-gradient-to-br from-mystic/20 to-teal/20 blur-3xl rounded-full -z-10"></div>

<div className="relative bg-white rounded-2xl shadow-2xl shadow-mystic/10 border border-white/50 animate-float p-4">

<div className="flex items-center justify-between mb-6 pb-4 border-b border-gray-100">
<div className="flex items-center gap-3">
<div className="w-3 h-3 rounded-full bg-red-400"></div>
<div className="w-3 h-3 rounded-full bg-yellow-400"></div>
<div className="w-3 h-3 rounded-full bg-green-400"></div>
</div>
<div className="text-xs font-medium text-gray-400">Submap Agent Overview</div>
</div>

<div className="space-y-4">

<div className="grid grid-cols-2 gap-4">
<div className="bg-lavender/50 p-3 rounded-xl">
<p className="text-xs text-mystic font-medium mb-1">Active Agents</p>
<p className="text-2xl font-semibold text-deep">12</p>
</div>
<div className="bg-teal/10 p-3 rounded-xl">
<p className="text-xs text-teal-600 font-medium mb-1">Tasks Completed</p>
<p className="text-2xl font-semibold text-deep">843</p>
</div>
</div>

<div className="space-y-3">
<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-mystic/10 flex items-center justify-center text-mystic">
<iconify-icon icon="solar:mailbox-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-deep">Email Triage</p>
<p className="text-xs text-gray-500">Processing inbox...</p>
</div>
</div>
<span className="inline-flex w-2 h-2 rounded-full bg-teal animate-pulse"></span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-teal/10 flex items-center justify-center text-teal-600">
<iconify-icon icon="solar:chart-2-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-deep">Market Research</p>
<p className="text-xs text-gray-500">Scraping data sources</p>
</div>
</div>
<span className="inline-flex w-2 h-2 rounded-full bg-teal animate-pulse delay-100"></span>
</div>
<div className="flex items-center justify-between p-3 bg-white border border-gray-100 rounded-xl shadow-sm opacity-60">
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-lg bg-violet/10 flex items-center justify-center text-violet">
<iconify-icon icon="solar:pen-new-square-linear"></iconify-icon>
</div>
<div>
<p className="text-sm font-semibold text-deep">Content Writer</p>
<p className="text-xs text-gray-500">Scheduled for 9:00 AM</p>
</div>
</div>
<span className="inline-flex w-2 h-2 rounded-full bg-gray-300"></span>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-12 border-y border-gray-200/60 bg-white/50">
<div className="max-w-7xl mx-auto px-6">
<p className="text-center text-sm font-medium text-deep/50 mb-8">Powering AI teams at innovative companies</p>
<div className="flex flex-wrap justify-center items-center gap-10 md:gap-16 opacity-50 grayscale transition-all duration-500 hover:grayscale-0 hover:opacity-100">

<div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><iconify-icon icon="solar:infinity-linear"></iconify-icon> ACME</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><iconify-icon icon="solar:atom-linear"></iconify-icon> Helix</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><iconify-icon icon="solar:planet-linear"></iconify-icon> Orbit</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><iconify-icon icon="solar:mountains-linear"></iconify-icon> Summit</div>
<div className="flex items-center gap-2 text-xl font-bold tracking-tighter"><iconify-icon icon="solar:waterdrops-linear"></iconify-icon> Flow</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-cream">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16 max-w-2xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-deep mb-4">AI agents are powerful. <br/>Getting started shouldn't be hard.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="bg-gray-50 rounded-2xl p-8 border border-gray-200 hover:shadow-lg transition-all duration-300 hover:scale-[1.01]">
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-gray-200 text-gray-500">
<iconify-icon icon="solar:close-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-deep">Without Submap</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-deep/70">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon>
<span>Complex terminal commands &amp; environments</span>
</li>
<li className="flex items-start gap-3 text-deep/70">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon>
<span>Managing JSON configs manually</span>
</li>
<li className="flex items-start gap-3 text-deep/70">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon>
<span>Zero visibility into what agents are doing</span>
</li>
<li className="flex items-start gap-3 text-deep/70">
<iconify-icon className="text-red-400 mt-1 flex-shrink-0" icon="solar:close-square-linear"></iconify-icon>
<span>Hours of setup before first action</span>
</li>
</ul>
</div>

<div className="relative bg-white rounded-2xl p-8 shadow-xl shadow-mystic/5 hover:scale-[1.01] transition-all duration-300 overflow-hidden group">

<div className="absolute inset-0 p-[2px] rounded-2xl bg-gradient-to-br from-mystic via-violet to-teal -z-10 opacity-100"></div>
<div className="absolute inset-[2px] bg-white rounded-[14px] -z-10"></div>
<div className="flex items-center gap-3 mb-6">
<div className="p-2 rounded-lg bg-mystic/10 text-mystic">
<iconify-icon icon="solar:check-circle-linear" strokeWidth="1.5" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-deep">With Submap</h3>
</div>
<ul className="space-y-4">
<li className="flex items-start gap-3 text-deep">
<iconify-icon className="text-teal mt-1 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span>Visual drag-and-drop builder</span>
</li>
<li className="flex items-start gap-3 text-deep">
<iconify-icon className="text-teal mt-1 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span>One-click templates for common tasks</span>
</li>
<li className="flex items-start gap-3 text-deep">
<iconify-icon className="text-teal mt-1 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span>Unified dashboard with real-time logs</span>
</li>
<li className="flex items-start gap-3 text-deep">
<iconify-icon className="text-teal mt-1 flex-shrink-0" icon="solar:check-square-linear"></iconify-icon>
<span>5 minutes to first live automation</span>
</li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-cream" id="features">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-deep mb-12 text-center">Everything you need to manage your AI team</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">

<div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300 group overflow-hidden relative">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-mystic/10 flex items-center justify-center text-mystic mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:widget-5-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-deep mb-2">Multi-Agent Dashboard</h3>
<p className="text-deep/70">Command center for your AI team. See every agent, every action, every result in real-time.</p>
</div>

<div className="absolute -right-4 -bottom-4 w-32 h-32 bg-gradient-to-br from-mystic/20 to-teal/20 blur-3xl rounded-full"></div>
</div>

<div className="md:col-span-2 bg-white rounded-2xl p-8 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300 group overflow-hidden relative">
<div className="relative z-10">
<div className="w-12 h-12 rounded-xl bg-teal/10 flex items-center justify-center text-teal-600 mb-6 group-hover:scale-110 transition-transform">
<iconify-icon icon="solar:videocamera-record-linear" width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold text-deep mb-2">Action Replay</h3>
<p className="text-deep/70">Watch the magic happen. Full recording of every agent action. Trust what you can verify.</p>
</div>
</div>

<div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-violet/10 flex items-center justify-center text-violet mb-4">
<iconify-icon icon="solar:magic-stick-3-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-deep mb-1">Visual Builder</h4>
<p className="text-sm text-deep/60">Drag, drop, deploy. No code required.</p>
</div>

<div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center text-red-500 mb-4">
<iconify-icon icon="solar:restart-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-deep mb-1">One-Click Undo</h4>
<p className="text-sm text-deep/60">Reverse any action instantly.</p>
</div>

<div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center text-blue-500 mb-4">
<iconify-icon icon="solar:box-minimalistic-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-deep mb-1">700+ Skills</h4>
<p className="text-sm text-deep/60">Access the OpenClaw ecosystem.</p>
</div>

<div className="md:col-span-1 bg-white rounded-2xl p-6 shadow-sm hover:shadow-lg hover:shadow-mystic/5 border border-gray-100 transition-all duration-300">
<div className="w-10 h-10 rounded-lg bg-orange-50 flex items-center justify-center text-orange-500 mb-4">
<iconify-icon icon="solar:users-group-rounded-linear" width="20"></iconify-icon>
</div>
<h4 className="font-semibold text-deep mb-1">Team Workspaces</h4>
<p className="text-sm text-deep/60">Collaborate with your team.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white overflow-hidden" id="how-it-works">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-deep mb-4">From idea to AI team in 5 minutes</h2>
</div>
<div className="relative grid md:grid-cols-3 gap-12">

<div className="hidden md:block absolute top-12 left-[16%] right-[16%] h-0.5 bg-gradient-to-r from-mystic to-teal -z-10"></div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-lg bg-mystic/10 text-mystic flex items-center justify-center">
<iconify-icon icon="solar:gallery-wide-linear" width="28"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-deep mb-2">1. Choose a Template</h3>
<p className="text-deep/70 text-sm max-w-xs">Pick from 100+ pre-built agent templates or start fresh from a blank canvas.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-lg bg-violet/10 text-violet flex items-center justify-center">
<iconify-icon icon="solar:settings-minimalistic-linear" width="28"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-deep mb-2">2. Configure Agent</h3>
<p className="text-deep/70 text-sm max-w-xs">Point and click to set triggers, specific actions, and safety permissions.</p>
</div>

<div className="flex flex-col items-center text-center group">
<div className="w-24 h-24 rounded-2xl bg-white border border-gray-200 shadow-lg flex items-center justify-center mb-6 group-hover:-translate-y-2 transition-transform duration-300 z-10">
<div className="w-12 h-12 rounded-lg bg-teal/10 text-teal flex items-center justify-center">
<iconify-icon icon="solar:play-linear" width="28"></iconify-icon>
</div>
</div>
<h3 className="text-xl font-semibold text-deep mb-2">3. Watch It Work</h3>
<p className="text-deep/70 text-sm max-w-xs">Your agent runs 24/7. Monitor progress via the live dashboard.</p>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-cream">
<div className="max-w-7xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-deep mb-16 text-center">Loved by small business operators</h2>
<div className="grid md:grid-cols-3 gap-8">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex text-teal mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-deep/80 mb-6 leading-relaxed">"I went from thinking AI was out of reach to running 5 agents that handle my entire email triage. Game changer."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">SK</div>
<div>
<p className="font-semibold text-sm text-deep">Sarah K.</p>
<p className="text-xs text-gray-500">Digital Agency Owner</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex text-teal mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-deep/80 mb-6 leading-relaxed">"Finally, AI automation that doesn't require a developer. My team is 3x more productive."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">MT</div>
<div>
<p className="font-semibold text-sm text-deep">Marcus T.</p>
<p className="text-xs text-gray-500">E-commerce Founder</p>
</div>
</div>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-sm hover:shadow-lg transition-all duration-300">
<div className="flex text-teal mb-4">
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
<iconify-icon icon="solar:star-bold" width="18"></iconify-icon>
</div>
<p className="text-deep/80 mb-6 leading-relaxed">"The action replay feature alone is worth it. I can actually see what my agents did and trust the results."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-xs font-bold text-gray-500">LR</div>
<div>
<p className="font-semibold text-sm text-deep">Lisa R.</p>
<p className="text-xs text-gray-500">Consulting Firm</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-white" id="pricing">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-deep mb-4">Simple pricing. Start free, scale as you grow.</h2>
</div>
<div className="grid md:grid-cols-3 gap-8 items-center max-w-6xl mx-auto">

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
<h3 className="text-lg font-medium text-deep mb-2">Free</h3>
<div className="text-4xl font-bold text-deep mb-2">$0<span className="text-base font-normal text-gray-500">/mo</span></div>
<p className="text-sm text-gray-500 mb-6">Perfect for getting started</p>
<a className="block w-full py-3 px-4 bg-gray-50 text-deep font-medium rounded-lg text-center hover:bg-gray-100 transition-colors" href="#">Start Free</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> 1 Agent
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> 100 tasks/mo
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> Community support
                        </li>
</ul>
</div>

<div className="relative bg-white p-8 rounded-2xl shadow-2xl shadow-mystic/20 md:scale-105 z-10 border border-transparent bg-clip-padding">
<div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-mystic to-teal -z-10 p-[2px]"></div>
<div className="absolute inset-[2px] rounded-[14px] bg-white -z-10"></div>
<div className="absolute -top-3 left-1/2 -translate-x-1/2 bg-gradient-to-r from-mystic to-violet text-white text-xs font-bold px-3 py-1 rounded-full">MOST POPULAR</div>
<h3 className="text-lg font-medium text-deep mb-2">Pro</h3>
<div className="text-4xl font-bold text-deep mb-2">$49<span className="text-base font-normal text-gray-500">/mo</span></div>
<p className="text-sm text-gray-500 mb-6">For growing teams</p>
<a className="block w-full py-3 px-4 bg-mystic text-white font-medium rounded-lg text-center hover:bg-opacity-90 transition-all shadow-lg shadow-mystic/20" href="#">Start Pro Trial</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-bold"></iconify-icon> 10 Agents
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-bold"></iconify-icon> 5,000 tasks/mo
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-bold"></iconify-icon> Priority support
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-bold"></iconify-icon> Action replay
                        </li>
</ul>
</div>

<div className="bg-white p-8 rounded-2xl border border-gray-100 shadow-lg hover:shadow-xl transition-all">
<h3 className="text-lg font-medium text-deep mb-2">Team</h3>
<div className="text-4xl font-bold text-deep mb-2">$149<span className="text-base font-normal text-gray-500">/mo</span></div>
<p className="text-sm text-gray-500 mb-6">For scaling businesses</p>
<a className="block w-full py-3 px-4 bg-white border border-mystic text-mystic font-medium rounded-lg text-center hover:bg-gray-50 transition-colors" href="#">Contact Sales</a>
<ul className="mt-8 space-y-4">
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> Unlimited Agents
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> 25,000 tasks/mo
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> Team workspaces
                        </li>
<li className="flex items-center gap-3 text-sm text-gray-600">
<iconify-icon className="text-mystic" icon="solar:check-circle-linear"></iconify-icon> Custom integrations
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-gradient-to-br from-mystic via-[#7F5AD5] to-teal text-white relative overflow-hidden">
<div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGNpcmNsZSBjeD0iMiIgY3k9IjIiIHI9IjIiIGZpbGw9IndoaXRlIiBmaWxsLW9wYWNpdHk9IjAuMDUiLz48L3N2Zz4=')] opacity-20"></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-6">Ready to build your AI team?</h2>
<p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto">Join 2,500+ operators who've automated their workflows with Submap.</p>
<div className="flex flex-col items-center gap-4">
<a className="bg-white text-mystic text-lg font-semibold px-10 py-4 rounded-lg shadow-xl hover:shadow-2xl hover:-translate-y-1 hover:invert transition-all" href="#">
                    Start Building Free
                </a>
<p className="text-sm text-white/70 mt-4">No credit card required • Free forever tier • Setup in 5 minutes</p>
</div>
</div>
</section>

<footer className="bg-deep text-white/60 py-16 px-6 text-sm">
<div className="max-w-7xl mx-auto">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-12">
<div>
<h4 className="text-white font-semibold mb-4">Product</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Features</a></li>
<li><a className="hover:text-white transition-colors" href="#">Pricing</a></li>
<li><a className="hover:text-white transition-colors" href="#">Templates</a></li>
<li><a className="hover:text-white transition-colors" href="#">Integrations</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Resources</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-white transition-colors" href="#">Community</a></li>
<li><a className="hover:text-white transition-colors" href="#">Status</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Company</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">About</a></li>
<li><a className="hover:text-white transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-white transition-colors" href="#">Contact</a></li>
<li><a className="hover:text-white transition-colors" href="#">Press</a></li>
</ul>
</div>
<div>
<h4 className="text-white font-semibold mb-4">Legal</h4>
<ul className="space-y-2">
<li><a className="hover:text-white transition-colors" href="#">Privacy</a></li>
<li><a className="hover:text-white transition-colors" href="#">Terms</a></li>
<li><a className="hover:text-white transition-colors" href="#">Security</a></li>
</ul>
</div>
</div>
<div className="border-t border-white/10 pt-8 flex flex-col md:flex-row justify-between items-center gap-4">
<a className="flex items-center gap-2" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-mystic to-teal flex items-center justify-center text-white text-xs">
                        S
                    </div>
<span className="font-semibold text-white tracking-tight">SUBMAP</span>
</a>
<p>© 2026 Submap. All rights reserved.</p>
<div className="flex gap-4">
<a className="hover:text-white" href="#"><iconify-icon icon="solar:plain-linear" width="20"></iconify-icon></a> 
<a className="hover:text-white" href="#"><iconify-icon icon="solar:case-round-linear" width="20"></iconify-icon></a> 
<a className="hover:text-white" href="#"><iconify-icon icon="solar:code-circle-linear" width="20"></iconify-icon></a> 
</div>
</div>
</div>
</footer>

    </>
  );
}
