import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
background: '#000000',
surface: '#0a0a0a',
surfaceBorder: 'rgba(255, 255, 255, 0.08)',
textPrimary: '#ffffff',
textSecondary: 'rgba(255, 255, 255, 0.6)',
accent: '#0073ff',
},
animation: {
'fade-in-up': 'fadeInUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'pulse-slow': 'pulseSlow 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
'slide-right': 'slideRight 20s linear infinite',
},
keyframes: {
fadeInUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
},
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-10px)' },
},
pulseSlow: {
'0%, 100%': { opacity: '0.3' },
'50%': { opacity: '0.6' },
},
slideRight: {
'0%': { transform: 'translateX(0)' },
'100%': { transform: 'translateX(-50%)' },
}
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
      
<nav className="fixed top-0 w-full z-50 glass-nav transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<div className="w-6 h-6 bg-white rounded flex items-center justify-center">
<iconify-icon className="text-black" icon="solar:box-linear" strokeWidth="1.5" width="14"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-sm text-white">GALLERY<span className="text-white/50">OS</span></span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#platform">Platform</a>
<a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#features">Features</a>
<a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#developers">Headless API</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden md:block text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Log in</a>
<a className="px-4 py-2 rounded-full bg-white text-black text-xs font-semibold hover:bg-white/90 transition-all flex items-center gap-1.5" href="#">
                    Dashboard
                    <iconify-icon icon="solar:arrow-right-linear" strokeWidth="1.5" width="12"></iconify-icon>
</a>
</div>
</div>
</nav>
<main className="flex-grow pt-32 pb-20 relative overflow-hidden">
<section className="relative max-w-7xl mx-auto px-6 pt-10 md:pt-16 text-center flex flex-col items-center">
<div className="gradient-glow"></div>
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-surfaceBorder bg-white/5 backdrop-blur-sm mb-8 animate-fade-in-up">
<span className="flex h-2 w-2 relative">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-accent"></span>
</span>
<span className="text-xs font-medium text-textSecondary">GalleryOS Headless CMS</span>
</div>
<h1 className="text-4xl md:text-6xl lg:text-7xl font-semibold tracking-tighter leading-[1.1] mb-6 max-w-4xl animate-fade-in-up delay-100">
                The operating system for <span className="gradient-text">modern galleries.</span>
</h1>
<p className="text-sm md:text-base text-textSecondary max-w-2xl mb-10 font-medium leading-relaxed animate-fade-in-up delay-200">
                A unified headless CMS designed exclusively for the art world. Manage artists, artworks, exhibitions, and shop inventory, then sync seamlessly to your frontend via our robust API.
            </p>
<div className="flex flex-col sm:flex-row items-center gap-4 animate-fade-in-up delay-300">
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all flex items-center justify-center gap-2">
                    Start Building Free
                </button>
<button className="w-full sm:w-auto px-6 py-3 rounded-full bg-surface border border-surfaceBorder text-white text-sm font-medium hover:bg-white/5 transition-all flex items-center justify-center gap-2 group">
<iconify-icon className="text-textSecondary group-hover:text-white transition-colors" icon="solar:code-circle-linear" strokeWidth="1.5" width="16"></iconify-icon>
                    View API Docs
                </button>
</div>
<div className="mt-20 w-full max-w-5xl relative hero-mockup-wrapper animate-fade-in-up delay-400">
<div className="absolute inset-0 bg-accent/20 blur-[100px] rounded-full animate-pulse-slow"></div>
<div className="relative hero-mockup glass-card rounded-xl overflow-hidden border border-white/10 shadow-2xl">
<div className="h-10 border-b border-white/5 bg-[#050505] flex items-center px-4 gap-2">
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="w-2.5 h-2.5 rounded-full bg-white/20"></div>
<div className="mx-auto flex items-center gap-2 px-24 h-6 rounded-md bg-white/5 border border-white/5">
<iconify-icon className="text-white/40" icon="solar:lock-keyhole-linear" width="10"></iconify-icon>
<span className="text-xs font-medium text-white/40 tracking-wide">galleryos.app / dashboard</span>
</div>
</div>
<div className="flex h-[450px] md:h-[650px] bg-[#050505]">
<div className="w-56 border-r border-white/5 hidden md:flex flex-col p-4 gap-6 bg-surface/30">
<div className="flex items-center gap-3 pb-6 border-b border-white/5">
<div className="w-8 h-8 rounded-full bg-gradient-to-tr from-accent to-purple-500"></div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-white">Admin User</span>
<span className="text-xs text-textSecondary">PACE Gallery</span>
</div>
<iconify-icon className="text-textSecondary ml-auto" icon="solar:alt-arrow-down-linear" width="12"></iconify-icon>
</div>
<div className="space-y-1">
<div className="text-xs font-semibold tracking-wider text-white/40 mb-3 px-2">COLLECTIONS</div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:widget-linear" width="16"></iconify-icon> Dashboard
                                </div>
<div className="flex items-center justify-between text-xs text-accent bg-accent/10 px-2 py-2 rounded-lg border border-accent/20">
<span className="flex items-center gap-2"><iconify-icon icon="solar:frame-linear" width="16"></iconify-icon> Artworks</span>
</div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:users-group-rounded-linear" width="16"></iconify-icon> Artists
                                </div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:calendar-linear" width="16"></iconify-icon> Exhibitions
                                </div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:map-point-linear" width="16"></iconify-icon> Art Fairs
                                </div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:shop-linear" width="16"></iconify-icon> Shop
                                </div>
</div>
<div className="space-y-1 mt-4">
<div className="text-xs font-semibold tracking-wider text-white/40 mb-3 px-2">INBOXES</div>
<div className="flex items-center gap-2 text-xs text-textSecondary hover:text-white px-2 py-2 rounded-lg transition-colors cursor-pointer">
<iconify-icon icon="solar:inbox-in-linear" width="16"></iconify-icon> Enquiries
                                </div>
</div>
</div>
<div className="flex-1 flex flex-col overflow-hidden bg-[#020202]">
<div className="h-14 border-b border-white/5 flex items-center justify-between px-6 bg-surface/30">
<div className="flex items-center gap-4">
<div className="relative">
<iconify-icon className="absolute left-3 top-1/2 -translate-y-1/2 text-textSecondary" icon="solar:magnifer-linear" width="14"></iconify-icon>
<input className="bg-white/5 border border-white/5 rounded-md pl-9 pr-4 py-1.5 text-xs text-white placeholder-white/30 w-64 focus:outline-none focus:border-white/20" placeholder="Search artists, artworks, exhibitions..." type="text"/>
</div>
</div>
<div className="flex items-center gap-3">
<div className="px-3 py-1.5 text-xs font-semibold bg-accent text-white rounded-md flex items-center gap-1.5 cursor-pointer hover:bg-accent/90">
<iconify-icon icon="solar:add-circle-linear" width="14"></iconify-icon> Add New
                                    </div>
</div>
</div>
<div className="flex-1 p-6 overflow-hidden flex flex-col">
<div className="flex items-center justify-between mb-6">
<div className="flex gap-4 border-b border-white/10 w-full">
<span className="text-xs font-semibold text-white border-b-2 border-white pb-2">Artworks</span>
<span className="text-xs font-medium text-textSecondary pb-2">Available Works</span>
<span className="text-xs font-medium text-textSecondary pb-2">Enquiries</span>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 overflow-y-auto pb-10 mask-image-bottom pr-2">
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="aspect-[3/4] rounded-lg art-1 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-xs font-medium px-1.5 py-0.5 rounded text-white border border-white/10">$45,000</div>
</div>
<div>
<div className="text-xs font-semibold text-white truncate">Untitled (Ocean)</div>
<div className="text-xs text-textSecondary flex justify-between">
<span>Elena Silva</span>
<span className="text-accent">Available</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="aspect-[3/4] rounded-lg art-2 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-xs font-medium px-1.5 py-0.5 rounded text-white border border-white/10">$12,500</div>
</div>
<div>
<div className="text-xs font-semibold text-white truncate">Structure II</div>
<div className="text-xs text-textSecondary flex justify-between">
<span>Marcus Thorne</span>
<span className="text-accent">Available</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="aspect-square rounded-lg art-3 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors">
<div className="absolute top-2 right-2 bg-black/50 backdrop-blur text-xs font-medium px-1.5 py-0.5 rounded text-white/50 border border-white/10">Enquiry</div>
</div>
<div>
<div className="text-xs font-semibold text-white truncate">Night Shift</div>
<div className="text-xs text-textSecondary flex justify-between">
<span>David Chen</span>
<span className="text-white/40">Hold</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 group cursor-pointer hidden md:flex">
<div className="aspect-[4/3] rounded-lg art-4 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors"></div>
<div>
<div className="text-xs font-semibold text-white truncate">Earth Tone Study</div>
<div className="text-xs text-textSecondary flex justify-between">
<span>Sarah Jenkins</span>
<span className="text-accent">Available</span>
</div>
</div>
</div>
<div className="flex flex-col gap-2 group cursor-pointer hidden lg:flex">
<div className="aspect-[3/4] rounded-lg art-5 relative overflow-hidden border border-white/5 group-hover:border-white/20 transition-colors"></div>
<div>
<div className="text-xs font-semibold text-white truncate">Void</div>
<div className="text-xs text-textSecondary flex justify-between">
<span>Anonymous</span>
<span className="text-accent">Available</span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-16 border-b border-white/5">
<div className="max-w-7xl mx-auto px-6 text-center overflow-hidden">
<p className="text-xs font-semibold text-textSecondary uppercase tracking-widest mb-8">Trusted by next-generation art spaces</p>
<div className="flex gap-16 opacity-40 grayscale animate-slide-right w-[200%] md:w-auto md:animate-none md:justify-center flex-nowrap">
<span className="text-lg font-semibold tracking-tighter shrink-0">CONTEMPORARY</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">PACE</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">Zwirner</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">Gagosian</span>
<span className="text-lg font-semibold tracking-tighter shrink-0">WHITE CUBE</span>
<span className="text-lg font-semibold tracking-tighter shrink-0 md:hidden">CONTEMPORARY</span>
<span className="text-lg font-semibold tracking-tighter shrink-0 md:hidden">PACE</span>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-6" id="platform">
<div className="mb-16 text-center max-w-3xl mx-auto">
<h2 className="text-3xl md:text-4xl font-semibold tracking-tight text-white mb-4">A complete ecosystem for your gallery.</h2>
<p className="text-sm md:text-base text-textSecondary font-medium">Replace scattered spreadsheets, legacy databases, and clunky website CMS platforms with a single beautifully crafted tool.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mb-24">
<div className="order-2 lg:order-1 relative">
<div className="glass-card rounded-2xl p-2 border border-white/10 shadow-2xl relative z-10">
<div className="bg-[#050505] rounded-xl h-[350px] overflow-hidden flex flex-col p-4">
<div className="text-xs font-medium uppercase tracking-wide text-white/60 mb-3 flex items-center gap-2">
<iconify-icon icon="solar:sort-vertical-linear"></iconify-icon> Reorder Installation Images
                            </div>
<div className="border border-dashed border-white/20 rounded-lg bg-white/5 p-3 space-y-2">
<div className="flex items-center gap-3 p-2.5 rounded-lg border border-white/10 bg-white/5 cursor-move">
<iconify-icon className="text-white/40" icon="solar:menu-dots-linear"></iconify-icon>
<div className="w-10 h-10 shrink-0 rounded bg-white/10 art-2"></div>
<div className="flex-1 text-xs text-white font-medium">View of North Wall</div>
<div className="text-xs text-white/40 tabular-nums">#1</div>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-lg border border-accent/40 bg-accent/10 cursor-move relative shadow-lg scale-[1.02] z-10">
<iconify-icon className="text-accent/50" icon="solar:menu-dots-linear"></iconify-icon>
<div className="w-10 h-10 shrink-0 rounded bg-white/10 art-1"></div>
<div className="flex-1 text-xs text-white font-medium">Gallery Entrance</div>
<div className="text-xs text-accent bg-accent/20 px-1.5 py-0.5 rounded font-semibold uppercase tracking-wider">Drag</div>
<div className="text-xs text-accent/60 tabular-nums">#2</div>
</div>
<div className="flex items-center gap-3 p-2.5 rounded-lg border border-white/10 bg-white/5 cursor-move">
<iconify-icon className="text-white/40" icon="solar:menu-dots-linear"></iconify-icon>
<div className="w-10 h-10 shrink-0 rounded bg-white/10 art-3"></div>
<div className="flex-1 text-xs text-white font-medium">Detail Shot - Room 2</div>
<div className="text-xs text-white/40 tabular-nums">#3</div>
</div>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-blue-500/10 blur-[80px] rounded-full z-0"></div>
</div>
<div className="order-1 lg:order-2">
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:gallery-wide-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Curate Exhibitions &amp; Art Fairs</h3>
<p className="text-sm text-textSecondary font-medium leading-relaxed mb-6">Manage your gallery's schedule with dedicated collections for Exhibitions and Art Fairs. Link featured artworks, associate multiple artists, and organize installation images directly.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Intuitive drag-and-drop reordering
                        </li>
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Link featured artworks easily
                        </li>
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Multi-select artist relations
                        </li>
</ul>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
<div>
<div className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center mb-6 border border-white/10 text-white">
<iconify-icon icon="solar:inbox-in-linear" width="20"></iconify-icon>
</div>
<h3 className="text-2xl font-semibold tracking-tight text-white mb-4">Integrated Shop &amp; Enquiries</h3>
<p className="text-sm text-textSecondary font-medium leading-relaxed mb-6">Centralize your sales pipeline. Manage shop products, configure categories, and track incoming enquiries or residency applications without leaving the OS.</p>
<ul className="space-y-3">
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> E-commerce catalog management
                        </li>
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Centralized artwork enquiry tracking
                        </li>
<li className="flex items-center gap-3 text-xs text-white/80 font-medium">
<iconify-icon className="text-accent" icon="solar:check-circle-linear"></iconify-icon> Contact forms &amp; Newsletter signups
                        </li>
</ul>
</div>
<div className="relative">
<div className="glass-card rounded-2xl border border-white/10 shadow-2xl relative z-10 bg-[#050505] overflow-hidden">
<div className="border-b border-white/5 p-4 flex justify-between items-center bg-surface/50">
<h4 className="text-xs font-semibold text-white tracking-wide uppercase">Latest Enquiries</h4>
<span className="text-xs px-2 py-1 rounded bg-white/10 text-white/70">Shop</span>
</div>
<div className="divide-y divide-white/5">
<div className="p-4 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Michael Chen</div>
<div className="text-xs text-textSecondary mt-0.5">m.chen@example.com • untitled-ocean</div>
</div>
<span className="text-xs text-blue-400 bg-blue-400/10 px-2 py-1 rounded-full font-medium tracking-wide">New</span>
</div>
<div className="p-4 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">Sarah Jenkins</div>
<div className="text-xs text-textSecondary mt-0.5">s.jenkins@studio.com • structure-ii</div>
</div>
<span className="text-xs text-amber-500 bg-amber-500/10 px-2 py-1 rounded-full font-medium tracking-wide">Read</span>
</div>
<div className="p-4 flex items-center gap-3 hover:bg-white/[0.02] transition-colors cursor-pointer">
<div className="w-10 h-10 rounded-lg bg-white/5 flex items-center justify-center text-white/40"><iconify-icon icon="solar:letter-linear" width="18"></iconify-icon></div>
<div className="flex-1">
<div className="text-xs font-semibold text-white">David Torres</div>
<div className="text-xs text-textSecondary mt-0.5">dtorres@art.net • color-theory-04</div>
</div>
<span className="text-xs text-green-500 bg-green-500/10 px-2 py-1 rounded-full font-medium tracking-wide">Replied</span>
</div>
</div>
</div>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-purple-500/10 blur-[80px] rounded-full z-0"></div>
</div>
</div>
</section>
<section className="py-24 max-w-7xl mx-auto px-6 border-t border-white/5" id="features">
<div className="grid grid-cols-1 md:grid-cols-3 gap-4">
<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-br from-white/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col h-full justify-between min-h-[300px]">
<div>
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-white" icon="solar:crop-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Smart Image Processing</h3>
<p className="text-sm font-medium text-textSecondary max-w-sm">Built-in image cropping, focal point hotspots, and automatic WebP conversion for optimized, lightning-fast frontend delivery.</p>
</div>
<div className="mt-8 relative w-full max-w-sm aspect-[2/1] bg-[#050505] border border-white/10 rounded-lg overflow-hidden flex items-center justify-center group-hover:border-white/20 transition-colors">
<div className="absolute inset-0 opacity-20 checkerboard"></div>
<div className="w-3/5 h-4/5 art-3 relative opacity-80 border border-white/50 shadow-2xl">
<div className="absolute top-1/2 left-[40%] -translate-x-1/2 -translate-y-1/2 w-12 h-12 border-2 border-white rounded-full"></div>
<div className="absolute top-1/2 left-[40%] translate-x-5 -translate-y-1/2 w-3 h-3 bg-white border-2 border-black rounded-full cursor-pointer hover:scale-110 transition-transform"></div>
</div>
<div className="absolute bottom-3 right-3 flex gap-2">
<span className="text-xs bg-accent px-2 py-1 rounded font-medium text-white backdrop-blur flex items-center gap-1"><iconify-icon icon="solar:check-circle-linear"></iconify-icon> WebP Output</span>
</div>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-white" icon="solar:star-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Artist Spotlight</h3>
<p className="text-sm font-medium text-textSecondary mb-6">Select a spotlight artist, write a custom highlight, and curate an exclusive set of artworks to feature globally on your frontend.</p>
<div className="mt-auto bg-white/5 border border-white/10 rounded-lg p-3">
<div className="flex items-center gap-2 mb-2">
<div className="w-1.5 h-1.5 rounded-full bg-accent"></div>
<span className="text-xs text-white font-medium">Active Spotlight</span>
</div>
<div className="text-xs text-textSecondary line-clamp-2">"Elena Silva's new oceanic series brings depth to our latest seasonal collection."</div>
</div>
</div>
</div>
<div className="glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="relative z-10 flex flex-col h-full">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10">
<iconify-icon className="text-white" icon="solar:document-add-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Dynamic Forms</h3>
<p className="text-sm font-medium text-textSecondary mb-6">Easily toggle product availability, add dynamic shop specifications, and attach PDF press releases directly to exhibitions.</p>
<div className="mt-auto flex items-center justify-between border-t border-white/10 pt-4">
<span className="text-xs text-textSecondary">Specs enabled</span>
<iconify-icon className="text-white/40" icon="solar:check-circle-bold" width="16"></iconify-icon>
</div>
</div>
</div>
<div className="md:col-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group" id="developers">
<div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="relative z-10 flex flex-col md:flex-row gap-8 items-center h-full">
<div className="flex-1">
<div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center mb-6 border border-white/10 relative">
<div className="absolute inset-0 bg-accent/20 blur-md rounded-full"></div>
<iconify-icon className="text-white relative z-10" icon="solar:database-linear" width="20"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight text-white mb-2">Headless &amp; API-First</h3>
<p className="text-sm font-medium text-textSecondary">Bring your own frontend. GalleryOS provides a robust JSON API to power your Next.js, Nuxt, or custom web experiences.</p>
<div className="mt-6 flex flex-wrap items-center gap-4 text-xs font-medium text-white">
<span className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10"><iconify-icon className="text-accent" icon="solar:code-circle-linear"></iconify-icon> REST API</span>
<span className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10"><iconify-icon className="text-accent" icon="solar:link-linear"></iconify-icon> Webhooks</span>
<span className="flex items-center gap-1.5 px-2 py-1 bg-white/5 rounded-md border border-white/10"><iconify-icon className="text-accent" icon="solar:server-square-linear"></iconify-icon> Edge Ready</span>
</div>
</div>
<div className="w-full md:w-72 h-40 rounded-xl bg-[#050505] border border-white/10 p-4 font-mono text-xs text-textSecondary overflow-hidden shadow-inner relative group-hover:border-accent/30 transition-colors">
<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-accent to-purple-500"></div>
<div className="flex items-center gap-2 mb-3">
<span className="text-accent font-semibold">GET</span>
<span>/api/v1/artworks</span>
</div>
<div className="text-white/40">{</div>
<div className="pl-4 text-white/80">
<span className="text-purple-400">"id"</span>: "aw_8f92k",<br/>
<span className="text-purple-400">"title"</span>: "Untitled (Ocean)",<br/>
<span className="text-purple-400">"artist"</span>: "Elena Silva",<br/>
<span className="text-purple-400">"status"</span>: "available"<br/>
</div>
<div className="text-white/40">}</div>
</div>
</div>
</div>
</div>
</section>
<section className="py-24 relative overflow-hidden border-t border-white/5 mt-10">
<div className="absolute inset-0 bg-accent/5"></div>
<div className="max-w-3xl mx-auto px-6 text-center relative z-10">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight text-white mb-6">Ready to upgrade your gallery?</h2>
<p className="text-sm md:text-base text-textSecondary font-medium mb-10">Join forward-thinking galleries using GalleryOS to streamline their operations and power their digital presence.</p>
<form className="flex flex-col sm:flex-row items-center justify-center gap-3 max-w-md mx-auto">
<input className="w-full custom-input px-4 py-3 rounded-lg text-sm placeholder-white/30" placeholder="Enter your email" required="" type="email"/>
<button className="w-full sm:w-auto px-6 py-3 rounded-lg bg-white text-black text-sm font-semibold hover:bg-white/90 transition-all whitespace-nowrap" type="submit">
                        Join Waitlist
                    </button>
</form>
<p className="text-xs font-medium text-textSecondary mt-4">No credit card required. Cancel anytime.</p>
</div>
</section>
</main>
<footer className="border-t border-white/5 bg-[#050505] pt-16 pb-8">
<div className="max-w-7xl mx-auto px-6">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<div className="flex items-center gap-2 mb-4">
<div className="w-5 h-5 bg-white rounded flex items-center justify-center">
<iconify-icon className="text-black" icon="solar:box-linear" strokeWidth="1.5" width="12"></iconify-icon>
</div>
<span className="font-semibold tracking-tighter text-xs text-white">GALLERY<span className="text-white/50">OS</span></span>
</div>
<p className="text-xs font-medium text-textSecondary max-w-xs">The underlying Headless CMS infrastructure for contemporary art spaces worldwide.</p>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 tracking-widest uppercase">Collections</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Artists &amp; Artworks</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Exhibitions</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Art Fairs</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Shop Inventory</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 tracking-widest uppercase">Developers</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Documentation</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">API Reference</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Next.js Starter</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-semibold text-white mb-4 tracking-widest uppercase">Company</h4>
<ul className="space-y-3">
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">About</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Blog</a></li>
<li><a className="text-xs font-medium text-textSecondary hover:text-white transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/5">
<p className="text-xs font-medium text-textSecondary mb-4 md:mb-0">© 2024 GalleryOS Inc. All rights reserved.</p>
<div className="flex items-center gap-6">
<a className="text-textSecondary hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:twitter-linear" width="16"></iconify-icon>
</a>
<a className="text-textSecondary hover:text-white transition-colors" href="#">
<iconify-icon icon="solar:github-linear" width="16"></iconify-icon>
</a>
</div>
</div>
</div>
</footer>

    </>
  );
}
