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
},
colors: {
royal: {
400: '#a78bfa',
500: '#8b5cf6',
600: '#7c3aed', // Primary
900: '#4c1d95',
},
neutral: {
850: '#1f1f1f',
950: '#0a0a0a', // Darker than slate-950
}
},
animation: {
'pulse-slow': 'pulse 6s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'float': 'float 6s ease-in-out infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
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
      

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-black/70 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter flex items-center gap-2" href="#">
<span className="w-6 h-6 bg-gradient-to-br from-royal-600 to-violet-400 rounded-sm flex items-center justify-center text-xs font-bold text-white">P</span>
<span className="text-white">PRIME<span className="text-white/60">CUTS</span></span>
</a>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-neutral-400">
<a className="hover:text-white transition-colors" href="#services">Services</a>
<a className="hover:text-white transition-colors" href="#creators">Partnerships</a>
<a className="hover:text-white transition-colors" href="#work">Showreel</a>
<a className="hover:text-white transition-colors" href="#pricing">Pricing</a>
</div>
<a className="hidden md:inline-flex items-center justify-center px-4 py-2 text-xs font-medium text-white bg-white/10 hover:bg-white/20 border border-white/10 rounded-md transition-all duration-300" href="#contact">
                Book a Call
            </a>

<button className="md:hidden text-white/70">
<span className="iconify" data-icon="lucide:menu" data-width="24"></span>
</button>
</div>
</nav>

<header className="relative w-full min-h-screen flex items-center justify-center overflow-hidden pt-20">

<div className="absolute inset-0 bg-grid z-0 pointer-events-none"></div>
<div className="absolute top-1/4 left-1/4 w-96 h-96 bg-royal-900/20 rounded-full blur-[128px] pointer-events-none animate-pulse-slow"></div>
<div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-blue-900/10 rounded-full blur-[128px] pointer-events-none"></div>
<div className="relative z-10 max-w-5xl mx-auto px-6 text-center flex flex-col items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-xs font-medium text-royal-400 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-royal-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-royal-500"></span>
</span>
                Accepting New Creator Partners for 2024
            </div>
<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter leading-[1.1] mb-6">
<span className="text-gradient">Edit Smarter.</span><br/>
<span className="text-white/40">Create Faster.</span>
</h1>
<p className="text-lg md:text-xl text-neutral-400 max-w-2xl mb-10 font-light leading-relaxed">
                Premium video editing and strategic growth partnerships for high-performance creators and brands. We handle the cuts; you handle the vision.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 w-full justify-center">
<a className="group relative inline-flex items-center justify-center px-8 py-3.5 text-sm font-semibold text-white transition-all duration-200 bg-white rounded-md hover:bg-neutral-200 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-offset-gray-900 focus:ring-white" href="#contact">
<span className="text-black">Partner With PrimeCuts</span>
<span className="iconify ml-2 text-black transition-transform group-hover:translate-x-1" data-icon="lucide:arrow-right" data-strokeWidth="1.5" data-width="18"></span>
</a>
<a className="inline-flex items-center justify-center px-8 py-3.5 text-sm font-medium text-white transition-all duration-200 bg-transparent border border-white/20 rounded-md hover:bg-white/5 hover:border-white/40" href="#work">
<span className="iconify mr-2" data-icon="lucide:play-circle" data-strokeWidth="1.5" data-width="18"></span>
                    View Showreel
                </a>
</div>

<div className="mt-20 pt-10 border-t border-white/5 w-full">
<p className="text-xs text-neutral-500 mb-6 font-medium uppercase tracking-widest">Powering Content For</p>
<div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-40 grayscale">

<span className="text-xl font-semibold tracking-tight">YOUTUBE</span>
<span className="text-xl font-semibold tracking-tight">TIKTOK</span>
<span className="text-xl font-semibold tracking-tight">INSTAGRAM</span>
<span className="text-xl font-semibold tracking-tight">TWITCH</span>
</div>
</div>
</div>
</header>

<section className="py-24 relative bg-neutral-950" id="services">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-6">
<div>
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight mb-4 text-white">Refined Post-Production</h2>
<p className="text-neutral-400 max-w-md">Comprehensive editing services tailored to maximize retention and engagement across all platforms.</p>
</div>
<a className="text-sm text-royal-400 hover:text-royal-300 flex items-center gap-1 transition-colors" href="#contact">
                    View full capabilities <span className="iconify" data-icon="lucide:arrow-up-right" data-width="16"></span>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-royal-600/50 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal-600/20 group-hover:text-royal-400 transition-colors">
<span className="iconify" data-icon="lucide:scissors" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Video Editing</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Long-form narrative cuts with perfect pacing, color grading, and sound design.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-royal-600/50 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal-600/20 group-hover:text-royal-400 transition-colors">
<span className="iconify" data-icon="lucide:smartphone" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Shorts &amp; Reels</h3>
<p className="text-sm text-neutral-400 leading-relaxed">High-retention vertical content optimized for algorithmic growth and virality.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-royal-600/50 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal-600/20 group-hover:text-royal-400 transition-colors">
<span className="iconify" data-icon="lucide:youtube" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">YouTube Growth</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Thumbnail design, SEO optimization, and retention-focused editing structures.</p>
</div>

<div className="group p-8 rounded-xl bg-neutral-900/50 border border-white/5 hover:border-royal-600/50 transition-all duration-300 hover:bg-neutral-900">
<div className="w-12 h-12 bg-white/5 rounded-lg flex items-center justify-center mb-6 group-hover:bg-royal-600/20 group-hover:text-royal-400 transition-colors">
<span className="iconify" data-icon="lucide:zap" data-strokeWidth="1.5" data-width="24"></span>
</div>
<h3 className="text-lg font-medium text-white mb-2">Motion Graphics</h3>
<p className="text-sm text-neutral-400 leading-relaxed">Custom animations, lower thirds, and visual effects to elevate production value.</p>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black relative overflow-hidden" id="creators">

<div className="absolute right-0 top-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-royal-900/10 rounded-full blur-[120px] pointer-events-none"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-block px-3 py-1 mb-6 text-xs font-semibold tracking-wider text-royal-400 uppercase bg-royal-900/20 rounded-full border border-royal-500/20">
                        Long-Term Partnership
                    </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-6 leading-tight">
                        More Than Just <br/> An Editor.
                    </h2>
<p className="text-lg text-neutral-400 mb-8 leading-relaxed">
                        We don't just chop footage. We study your analytics, understand your voice, and become an extension of your creative team. Consistent quality, reliable turnaround, and creative alignment.
                    </p>
<ul className="space-y-4 mb-10">
<li className="flex items-start gap-3">
<span className="iconify text-royal-500 mt-1" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20"></span>
<div>
<h4 className="text-white font-medium text-sm">Dedicated Creative Director</h4>
<p className="text-neutral-500 text-xs mt-1">Single point of contact who knows your style inside out.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-royal-500 mt-1" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20"></span>
<div>
<h4 className="text-white font-medium text-sm">Scalable Production</h4>
<p className="text-neutral-500 text-xs mt-1">From 1 video a week to daily uploads, we scale with you.</p>
</div>
</li>
<li className="flex items-start gap-3">
<span className="iconify text-royal-500 mt-1" data-icon="lucide:check-circle-2" data-strokeWidth="1.5" data-width="20"></span>
<div>
<h4 className="text-white font-medium text-sm">Asset Management</h4>
<p className="text-neutral-500 text-xs mt-1">We organize and archive your footage for future repurposing.</p>
</div>
</li>
</ul>
<a className="inline-flex h-12 items-center justify-center rounded-md bg-royal-600 px-8 text-sm font-medium text-white transition-colors hover:bg-royal-700 focus:outline-none focus:ring-2 focus:ring-royal-500 focus:ring-offset-2 focus:ring-offset-black" href="#contact">
                        Let's Elevate Your Content
                    </a>
</div>

<div className="relative">
<div className="glass-panel p-1 rounded-2xl relative z-10">
<div className="bg-neutral-900 rounded-xl overflow-hidden aspect-[4/3] relative group">

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-full px-8 space-y-3 opacity-50">
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-2/3 bg-neutral-700 rounded-full"></div>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-1/3 bg-royal-600 rounded-full"></div>
</div>
<div className="h-2 w-full bg-neutral-800 rounded-full overflow-hidden">
<div className="h-full w-1/2 bg-neutral-700 rounded-full"></div>
</div>
<div className="h-16 w-full bg-neutral-800 rounded-md mt-4 border border-white/5 flex items-center justify-center">
<span className="text-xs text-neutral-600 font-mono">RENDERING_FINAL_V3.MP4</span>
</div>
</div>
</div>

<div className="absolute bottom-6 right-6 p-4 glass-panel rounded-lg border border-white/10 w-48 animate-float">
<div className="flex items-center gap-3 mb-2">
<div className="w-8 h-8 rounded-full bg-green-500/20 flex items-center justify-center text-green-500">
<span className="iconify" data-icon="lucide:trending-up" data-width="16"></span>
</div>
<span className="text-xs font-semibold text-white">+142% Retention</span>
</div>
<div className="h-1 w-full bg-white/10 rounded-full">
<div className="h-full w-3/4 bg-green-500 rounded-full"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 border-y border-white/5 bg-neutral-950" id="work">
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Featured Work</h2>
<p className="text-neutral-400">A selection of our finest cuts and motion work.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-1">

<div className="group relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer">
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">Tech Review Series</h3>
<p className="text-xs text-neutral-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 opacity-0 group-hover:opacity-100">YouTube 4K Edit</p>
</div>
</div>

<div className="group relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer">
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1492691527719-9d1e07e534b4?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">Lifestyle Vlog</h3>
<p className="text-xs text-neutral-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 opacity-0 group-hover:opacity-100">Color Grading &amp; Sound</p>
</div>
</div>

<div className="group relative aspect-video overflow-hidden bg-neutral-900 cursor-pointer">
<img alt="Work" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105 opacity-60 group-hover:opacity-40" src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?auto=format&amp;fit=crop&amp;q=80&amp;w=800"/>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full bg-white/10 backdrop-blur-sm flex items-center justify-center text-white opacity-0 group-hover:opacity-100 transition-all duration-300 transform scale-75 group-hover:scale-100">
<span className="iconify" data-icon="lucide:play" data-strokeWidth="1.5" data-width="20"></span>
</div>
</div>
<div className="absolute bottom-0 left-0 p-6 w-full">
<h3 className="text-white font-medium translate-y-4 group-hover:translate-y-0 transition-transform duration-300 opacity-0 group-hover:opacity-100">Gaming Highlights</h3>
<p className="text-xs text-neutral-400 translate-y-4 group-hover:translate-y-0 transition-transform duration-300 delay-75 opacity-0 group-hover:opacity-100">Motion Graphics</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">

<div className="glass-panel p-8 rounded-xl relative hover:border-royal-500/30 transition-colors duration-300">
<span className="iconify text-royal-600 mb-6" data-icon="lucide:quote" data-width="24"></span>
<p className="text-white/90 text-sm leading-relaxed mb-6">
                        "Since partnering with PrimeCuts, my upload consistency has doubled, and the quality has never been better. They just get it."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div>
<div className="text-xs font-semibold text-white">Alex Rivera</div>
<div className="text-[10px] text-neutral-500">Tech YouTuber (500K Subs)</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative hover:border-royal-500/30 transition-colors duration-300">
<span className="iconify text-royal-600 mb-6" data-icon="lucide:quote" data-width="24"></span>
<p className="text-white/90 text-sm leading-relaxed mb-6">
                        "The motion graphics team transformed our brand videos. It feels like a cinema-quality production every single time."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div>
<div className="text-xs font-semibold text-white">Sarah Jenkins</div>
<div className="text-[10px] text-neutral-500">CMO, Veloce Startups</div>
</div>
</div>
</div>

<div className="glass-panel p-8 rounded-xl relative hover:border-royal-500/30 transition-colors duration-300">
<span className="iconify text-royal-600 mb-6" data-icon="lucide:quote" data-width="24"></span>
<p className="text-white/90 text-sm leading-relaxed mb-6">
                        "I used to spend 20 hours a week editing. Now I spend that time filming and growing my business. Worth every penny."
                    </p>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-neutral-800 border border-white/10"></div>
<div>
<div className="text-xs font-semibold text-white">David Chen</div>
<div className="text-[10px] text-neutral-500">Lifestyle Creator</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-neutral-950 relative" id="pricing">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-3xl h-1 bg-gradient-to-r from-transparent via-royal-600/50 to-transparent"></div>
<div className="max-w-7xl mx-auto px-6">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">Simple, Transparent Pricing</h2>
<p className="text-neutral-400">Choose a package or get a custom quote tailored to your channel.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-6xl mx-auto">

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Creator</h3>
<p className="text-3xl font-bold text-white mb-2">₹1,000<span className="text-sm font-normal text-neutral-500">/mo</span></p>
<p className="text-xs text-neutral-400 mb-8">For emerging channels.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> 2 Videos per month
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> Basic Color &amp; Sound
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> Thumbnail Design
                        </li>
</ul>
<a className="block w-full py-3 text-sm font-medium text-center text-white border border-white/20 rounded-lg hover:bg-white/5" href="#contact">Start Now</a>
</div>

<div className="p-8 rounded-2xl border border-royal-500 bg-neutral-900/80 relative shadow-[0_0_30px_rgba(124,58,237,0.1)]">
<div className="absolute top-0 right-0 -mt-3 mr-4 px-3 py-1 bg-royal-600 text-[10px] font-bold tracking-wide uppercase rounded-full text-white">Most Popular</div>
<h3 className="text-lg font-medium text-white mb-2">Professional</h3>
<p className="text-3xl font-bold text-white mb-2">₹2,000<span className="text-sm font-normal text-neutral-500">/mo</span></p>
<p className="text-xs text-neutral-400 mb-8">For serious growth.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-royal-400" data-icon="lucide:check" data-width="14"></span> 5 Videos per month
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-royal-400" data-icon="lucide:check" data-width="14"></span> 4 Shorts/Reels included
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-royal-400" data-icon="lucide:check" data-width="14"></span> Advanced Motion Graphics
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-royal-400" data-icon="lucide:check" data-width="14"></span> Strategy Call
                        </li>
</ul>
<a className="block w-full py-3 text-sm font-medium text-center text-white bg-royal-600 rounded-lg hover:bg-royal-700 shadow-lg shadow-royal-900/50" href="#contact">Start Now</a>
</div>

<div className="p-8 rounded-2xl border border-white/10 bg-neutral-900/40 hover:bg-neutral-900 transition-colors">
<h3 className="text-lg font-medium text-white mb-2">Studio Partner</h3>
<p className="text-3xl font-bold text-white mb-2">Custom</p>
<p className="text-xs text-neutral-400 mb-8">Full-service production.</p>
<ul className="space-y-3 mb-8">
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> Unlimited Requests
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> Dedicated Editor Team
                        </li>
<li className="flex items-center text-sm text-neutral-300">
<span className="iconify mr-2 text-white" data-icon="lucide:check" data-width="14"></span> 24h Turnaround
                        </li>
</ul>
<a className="block w-full py-3 text-sm font-medium text-center text-white border border-white/20 rounded-lg hover:bg-white/5" href="#contact">Get a Custom Quote</a>
</div>
</div>
</div>
</section>

<section className="py-24 bg-black border-t border-white/5" id="contact">
<div className="max-w-xl mx-auto px-6">
<div className="text-center mb-10">
<span className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-royal-900/30 text-royal-400 mb-6 border border-royal-500/20">
<span className="iconify" data-icon="lucide:mail" data-width="20"></span>
</span>
<h2 className="text-3xl font-semibold tracking-tight text-white mb-4">Start Your Project</h2>
<p className="text-neutral-400 text-sm">Tell us about your content goals. We'll get back to you within 24 hours.</p>
<p className="text-neutral-500 text-xs mt-2 italic">— Aayush, Yash &amp; Abhay</p>
</div>
<form className="space-y-4">
<div className="grid grid-cols-2 gap-4">
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">First Name</label>
<input className="custom-input w-full px-4 py-3 rounded-md text-sm text-white placeholder-neutral-600" placeholder="Jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Last Name</label>
<input className="custom-input w-full px-4 py-3 rounded-md text-sm text-white placeholder-neutral-600" placeholder="Doe" type="text"/>
</div>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Email Address</label>
<input className="custom-input w-full px-4 py-3 rounded-md text-sm text-white placeholder-neutral-600" placeholder="jane@example.com" type="email"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Channel / Website URL</label>
<input className="custom-input w-full px-4 py-3 rounded-md text-sm text-white placeholder-neutral-600" placeholder="youtube.com/c/jane" type="text"/>
</div>
<div>
<label className="block text-xs font-medium text-neutral-400 mb-1.5">Project Details</label>
<textarea className="custom-input w-full px-4 py-3 rounded-md text-sm text-white placeholder-neutral-600 h-32 resize-none" placeholder="I need help editing 4 videos a month..."></textarea>
</div>

<label className="flex items-center gap-3 cursor-pointer group">
<div className="relative flex items-center">
<input className="peer sr-only" type="checkbox"/>
<div className="w-4 h-4 border border-neutral-600 rounded bg-transparent peer-checked:bg-royal-600 peer-checked:border-royal-600 transition-colors"></div>
<span className="absolute inset-0 flex items-center justify-center text-white opacity-0 peer-checked:opacity-100 pointer-events-none">
<span className="iconify" data-icon="lucide:check" data-width="12"></span>
</span>
</div>
<span className="text-xs text-neutral-500 group-hover:text-neutral-400">I agree to the terms and privacy policy.</span>
</label>
<button className="w-full py-3.5 mt-2 text-sm font-semibold text-white bg-gradient-to-r from-royal-600 to-indigo-600 rounded-md hover:opacity-90 transition-opacity shadow-[0_0_20px_rgba(124,58,237,0.3)]" type="button">
                    Send Request
                </button>
</form>
</div>
</section>

<footer className="py-12 border-t border-white/5 bg-neutral-950 text-xs">
<div className="max-w-7xl mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-6">
<div className="flex flex-col md:flex-row items-center gap-4">
<div className="flex items-center gap-2">
<span className="w-5 h-5 bg-neutral-800 rounded-sm flex items-center justify-center text-[10px] font-bold text-white">P</span>
<span className="text-neutral-400">© 2024 PrimeCuts Studio.</span>
</div>
<span className="hidden md:inline text-neutral-700">|</span>
<span className="text-neutral-500">Founded by Aayush, Yash &amp; Abhay</span>
</div>
<div className="flex items-center gap-6 text-neutral-500">
<a className="hover:text-white transition-colors" href="#">Twitter</a>
<a className="hover:text-white transition-colors" href="#">Instagram</a>
<a className="hover:text-white transition-colors" href="#">LinkedIn</a>
</div>
</div>
</footer>

    </>
  );
}
