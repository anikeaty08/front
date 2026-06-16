import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('mobileMenu').classList.toggle('hidden');
        });

        // Close mobile menu on link click
        document.querySelectorAll('#mobileMenu a').forEach(link => {
            link.addEventListener('click', () => {
                document.getElementById('mobileMenu').classList.add('hidden');
            });
        });

        // Intersection Observer for fade-in animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1 });

        document.querySelectorAll('.card-hover').forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = 'opacity 0.5s ease, transform 0.5s ease';
            observer.observe(el);
        });

        // Navbar background on scroll
        window.addEventListener('scroll', () => {
            const nav = document.querySelector('nav');
            if (window.scrollY > 50) {
                nav.style.borderBottomColor = 'rgba(99,102,241,0.2)';
            } else {
                nav.style.borderBottomColor = 'rgba(49,46,129,0.6)';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed nav-blur bg-black/80 z-50 border-indigo-900/60 border-b top-0 right-0 left-0" style={{borderBottomColor: 'rgba(99, 102, 241, 0.2)'}}>
<div className="flex h-16 max-w-6xl mx-auto px-6 items-center justify-between">
<a className="text-xl font-bold tracking-tighter text-indigo-100" href="#">VYRA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-indigo-400 transition-colors font-medium hover:text-indigo-100" href="#about">About</a>
<a className="transition-colors hover:text-indigo-100 text-sm font-medium text-indigo-400" href="#services">What We Create</a>
<a className="text-sm text-indigo-400 transition-colors font-medium hover:text-indigo-100" href="#youtube">YouTube</a>
<a className="text-sm text-indigo-400 transition-colors font-medium hover:text-indigo-100" href="#why">Why VYRA</a>
<a className="text-sm text-indigo-400 transition-colors font-medium hover:text-indigo-100" href="#contact">Contact</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-all bg-indigo-500 text-white hover:bg-indigo-400" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
                    Subscribe
                </a>
<button className="md:hidden p-2 text-indigo-400 hover:text-indigo-100" id="mobileMenuBtn" onclick="document.getElementById('mobileMenu').classList.toggle('hidden')">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>
<div className="hidden md:hidden border-t px-6 py-4 bg-black/95 border-indigo-900/60" id="mobileMenu">
<div className="flex flex-col gap-3">
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#about">About</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#services">What We Create</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#youtube">YouTube</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#why">Why VYRA</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#contact">Contact</a>
</div>
</div>
</nav>

<section className="hero-glow md:pt-44 md:pb-32 pt-32 px-6 pb-20 relative overflow-hidden">
<div className="absolute inset-0 opacity-30" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, rgba(99,102,241,0.08) 0%, transparent 50%), radial-gradient(circle at 80% 50%, rgba(168,85,247,0.06) 0%, transparent 50%)'}}></div>
<div className="fade-in text-center max-w-4xl mx-auto relative z-10">
<div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase bg-indigo-950/80 text-indigo-300 border border-indigo-800/50">
<iconify-icon icon="solar:star-bold" style={{color: '#6366f1'}} width="12"></iconify-icon>
                India's Next-Gen Digital Media Brand
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-indigo-50">
                Learn. Create.<br/>
<span className="gradient-text">Grow Digital.</span>
</h1>
<p className="text-lg md:text-xl text-indigo-400 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                VYRA is a digital media brand helping millions of young Indians understand technology, master content creation, and build their future — one video at a time.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:bg-indigo-400 text-sm font-medium text-white bg-indigo-500 w-full rounded-xl py-3.5 px-7 shadow-lg shadow-indigo-500/20" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch on YouTube
                </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:border-indigo-600 hover:bg-indigo-950/50 text-sm font-medium text-indigo-300 bg-transparent w-full border-indigo-800 border rounded-xl py-3.5 px-7" href="#about">
                    Learn More About Us
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="mt-20 grid grid-cols-3 gap-8 max-w-md mx-auto">
<div className="">
</div>
<div className="">
</div>
<div className="">
</div>
</div>
</div>
</section>

<section className="md:py-28 bg-indigo-950/30 pt-20 px-6 pb-20" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-20 items-center">
<div>
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-indigo-400">About Us</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-indigo-50">We're building India's most trusted digital knowledge platform.</h2>
<div className="space-y-4 text-indigo-400 leading-relaxed text-sm">
<p>
                            VYRA is a digital media and YouTube brand rooted in India, built for the next generation of thinkers, creators, and doers. We started with a simple belief: knowledge about the digital world should be accessible, engaging, and actionable.
                        </p>
<p>
                            We create content that bridges the gap between complex technology and everyday understanding. From artificial intelligence and digital tools to personal growth and online business strategies — we break it down so you can build up.
                        </p>
<p>
                            Our audience includes students exploring career paths, creators looking to grow, and young entrepreneurs ready to launch their ideas into the digital world. If you're curious about the future, you're already one of us.
                        </p>
</div>
</div>
<div className="relative">
<div className="rounded-2xl border p-8 bg-black/50 border-indigo-800/60">
<div className="grid grid-cols-2 gap-5">
<div className="rounded-xl p-5 text-center bg-indigo-950/60 border border-indigo-800/30">
<iconify-icon className="mb-3" icon="solar:videocamera-record-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Video First</div>
<div className="text-xs mt-1 text-indigo-500">YouTube native content</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950/60 border border-indigo-800/30">
<iconify-icon className="mb-3" icon="solar:global-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Made in India</div>
<div className="text-xs mt-1 text-indigo-500">For global audiences</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950/60 border border-indigo-800/30">
<iconify-icon className="mb-3" icon="solar:users-group-rounded-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Community</div>
<div className="text-xs mt-1 text-indigo-500">Growing every day</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950/60 border border-indigo-800/30">
<iconify-icon className="mb-3" icon="solar:rocket-2-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Future Ready</div>
<div className="text-xs mt-1 text-indigo-500">Always evolving</div>
</div>
</div>
</div>
<div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl" style={{background: 'linear-gradient(135deg, rgba(99,102,241,0.15), rgba(168,85,247,0.1))'}}></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="uppercase text-xs font-semibold text-indigo-400 tracking-widest mb-4">Mission &amp; Vision</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-50">What drives everything we do.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="card-hover rounded-2xl border p-8 md:p-10 relative overflow-hidden bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-indigo-500 via-blue-500 to-cyan-500"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-indigo-950/80">
<iconify-icon icon="solar:target-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-indigo-50">Our Mission</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        To empower India's young generation with practical digital knowledge through high-quality video content. We make technology, AI, content creation, and digital growth strategies simple and accessible — so anyone with a smartphone and curiosity can start building their future today.
                    </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Simplify complex digital concepts for everyone
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Create free, high-value content on YouTube
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Inspire action, not just awareness
                        </li>
</ul>
</div>
<div className="card-hover rounded-2xl border p-8 md:p-10 relative overflow-hidden bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="absolute top-0 left-0 right-0 h-px bg-gradient-to-r from-purple-500 via-pink-500 to-rose-500"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-purple-950/80">
<iconify-icon icon="solar:eye-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-indigo-50">Our Vision</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        To become India's most influential digital media brand that shapes how the next generation thinks about technology, creativity, and growth. We envision a future where every young Indian has the digital literacy and confidence to thrive in the modern economy.
                    </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Be the go-to digital knowledge source in India
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Build a community of 1 million creators
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-300">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Expand into courses, tools, and mentorship
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="md:py-28 bg-indigo-950/30 pt-20 pr-6 pb-20 pl-6" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-indigo-400">What We Create</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-indigo-50">Content that matters.</h2>
<p className="text-indigo-400 max-w-2xl mx-auto leading-relaxed text-sm">
                    We produce focused, research-backed video content across six key areas that matter most to young Indians building their digital future.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-blue-950/80 group-hover:bg-blue-900/60 transition-colors">
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Technology &amp; Trends</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Breaking down the latest in tech — from smartphones and gadgets to emerging platforms and software — explained in a way that's practical and easy to follow.
                    </p>
</div>
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-violet-950/80 group-hover:bg-violet-900/60 transition-colors">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#8b5cf6', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Artificial Intelligence</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Demystifying AI tools, ChatGPT workflows, automation strategies, and how artificial intelligence is reshaping careers, education, and everyday life.
                    </p>
</div>
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-emerald-950/80 group-hover:bg-emerald-900/60 transition-colors">
<iconify-icon icon="solar:laptop-minimalistic-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Digital Tools &amp; Apps</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        In-depth reviews and tutorials on the best digital tools — from productivity apps and design software to no-code platforms and browser extensions.
                    </p>
</div>
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-pink-950/80 group-hover:bg-pink-900/60 transition-colors">
<iconify-icon icon="solar:camera-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Content Creation</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Everything about starting and growing as a content creator — video editing, scripting, thumbnails, equipment, YouTube strategy, and building your personal brand.
                    </p>
</div>
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-amber-950/80 group-hover:bg-amber-900/60 transition-colors">
<iconify-icon icon="solar:wallet-money-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Online Business &amp; Income</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Practical strategies for building online income streams — freelancing, digital products, affiliate marketing, and turning your skills into sustainable revenue.
                    </p>
</div>
<div className="card-hover rounded-2xl border p-7 group bg-black/50 border-indigo-800/60" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 bg-cyan-950/80 group-hover:bg-cyan-900/60 transition-colors">
<iconify-icon icon="solar:brain-linear" style={{color: '#06b6d4', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Mindset &amp; Growth</h3>
<p className="text-sm text-indigo-400 leading-relaxed">
                        Building the right mindset for the digital age — productivity habits, learning frameworks, career decisions, and personal development for ambitious young Indians.
                    </p>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 relative overflow-hidden" id="youtube">
<div className="opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(ellipse at 50% 50%, rgba(99,102,241,0.1) 0%, transparent 60%)'}}></div>
<div className="max-w-6xl mx-auto relative z-10">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-red-400">Our YouTube Channel</div>
<h2 className="md:text-4xl text-3xl font-bold text-indigo-50 tracking-tight mb-4">Where the magic happens.</h2>
<p className="text-indigo-400 max-w-2xl mx-auto leading-relaxed text-sm">
                    Our YouTube channel is home to carefully crafted videos that educate, inspire, and equip you with the tools to thrive digitally.
                </p>
</div>
<div className="max-w-3xl mx-auto">
<div className="card-hover md:p-12 overflow-hidden text-center bg-black/50 border-indigo-800/60 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="opacity-5 absolute top-0 right-0 bottom-0 left-0" style={{background: 'radial-gradient(circle at 50% 0%, #ef4444, transparent 70%)'}}></div>
<div className="relative z-10">
<div className="w-20 h-20 rounded-full flex items-center justify-center mx-auto mb-6 pulse-ring" style={{background: 'linear-gradient(135deg, #ef4444, #dc2626)'}}>
<iconify-icon icon="solar:play-bold" style={{color: 'white'}} width="32"></iconify-icon>
</div>
<h3 className="md:text-3xl text-2xl font-bold text-indigo-50 tracking-tight mb-3">VYRA </h3>
<p className="leading-relaxed text-sm text-indigo-400 max-w-lg mr-auto mb-8 ml-auto">
                            Join our growing community of curious minds. Every video is designed to give you actionable knowledge about the digital world — subscribe and never miss an update.
                        </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="inline-flex items-center gap-2 transition-all hover:bg-red-500 shadow-red-600/20 text-sm font-medium text-white bg-red-600 rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Subscribe on YouTube
                            </a>
<a className="inline-flex items-center gap-2 transition-all hover:bg-indigo-950/50 hover:border-indigo-600 text-sm font-medium text-indigo-300 border-indigo-800 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:bell-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                                Turn on Notifications
                            </a>
</div>
<div className="grid grid-cols-3 border-indigo-800/40 border-t mt-10 pt-8 gap-x-6 gap-y-6"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 bg-indigo-950/30" id="why">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-indigo-400">Why VYRA</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-indigo-50">What makes us different.</h2>
<p className="text-indigo-400 max-w-2xl mx-auto leading-relaxed text-sm">
                    In a world full of noise, we focus on signal. Here's what sets VYRA apart from everything else out there.
                </p>
</div>
<div className="grid md:grid-cols-2 gap-6">
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-indigo-950/80">
<iconify-icon icon="solar:diploma-verified-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Research-Backed Content</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Every video is thoroughly researched and fact-checked. We don't chase trends — we create evergreen content that stays valuable.</p>
</div>
</div>
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-purple-950/80">
<iconify-icon icon="solar:pen-new-round-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Clear &amp; Simple Language</h3>
<p className="text-xs text-indigo-400 leading-relaxed">No jargon, no fluff. We explain complex topics in simple Hindi and English so anyone can understand and apply the knowledge.</p>
</div>
</div>
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-emerald-950/80">
<iconify-icon icon="solar:heart-pulse-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Audience-First Approach</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Our content is built around what our audience actually needs — not what gets the most clicks. Quality and value always come first.</p>
</div>
</div>
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-amber-950/80">
<iconify-icon icon="solar:lightbulb-bolt-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Actionable Insights</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Every piece of content includes practical steps you can implement immediately. We believe in learning by doing, not just watching.</p>
</div>
</div>
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-cyan-950/80">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#06b6d4', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Consistent Growth</h3>
<p className="text-xs text-indigo-400 leading-relaxed">We publish new content consistently, always improving production quality and expanding into new topics that matter to our community.</p>
</div>
</div>
<div className="flex gap-5 p-6 rounded-2xl border bg-black/50 border-indigo-800/60 card-hover" style={{transition: 'opacity 0.5s, transform 0.5s'}}>
<div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 bg-pink-950/80">
<iconify-icon icon="solar:hand-shake-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="20"></iconify-icon>
</div>
<div>
<h3 className="text-sm font-semibold mb-1.5 text-indigo-100">Community Driven</h3>
<p className="text-xs text-indigo-400 leading-relaxed">VYRA isn't just a channel — it's a community. We actively listen to feedback and build content that our audience requests and needs.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6">
<div className="max-w-4xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-indigo-400">Roadmap</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-indigo-50">What's coming next.</h2>
<p className="text-indigo-400 max-w-2xl mx-auto leading-relaxed text-sm">
                    VYRA is just getting started. Here's a glimpse of what we're building toward.
                </p>
</div>
<div className="space-y-0 relative">
<div className="absolute left-6 md:left-8 top-0 bottom-0 w-px bg-indigo-800/40"></div>
<div className="relative flex gap-6 md:gap-8 pb-10">
<div className="w-12 md:w-16 flex-shrink-0 flex items-start justify-center pt-1">
<div className="w-3 h-3 rounded-full bg-indigo-500 ring-4 ring-indigo-500/20 relative z-10"></div>
</div>
<div className="rounded-2xl border p-6 flex-1 bg-black/50 border-indigo-800/60">
<div className="text-xs font-semibold text-indigo-400 mb-1">Phase 1 — Now</div>
<h3 className="text-sm font-semibold text-indigo-100 mb-2">YouTube Content Engine</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Building a consistent library of high-quality videos covering tech, AI, digital tools, and content creation strategies.</p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8 pb-10">
<div className="w-12 md:w-16 flex-shrink-0 flex items-start justify-center pt-1">
<div className="w-3 h-3 rounded-full bg-purple-500 ring-4 ring-purple-500/20 relative z-10"></div>
</div>
<div className="rounded-2xl border p-6 flex-1 bg-black/50 border-indigo-800/60">
<div className="text-xs font-semibold text-purple-400 mb-1">Phase 2 — Q3 2026</div>
<h3 className="text-sm font-semibold text-indigo-100 mb-2">Community &amp; Shorts Expansion</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Launching dedicated community spaces, YouTube Shorts for quick tips, and interactive content to deepen engagement.</p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8 pb-10">
<div className="w-12 md:w-16 flex-shrink-0 flex items-start justify-center pt-1">
<div className="w-3 h-3 rounded-full bg-pink-500 ring-4 ring-pink-500/20 relative z-10"></div>
</div>
<div className="rounded-2xl border p-6 flex-1 bg-black/50 border-indigo-800/60">
<div className="text-xs font-semibold text-pink-400 mb-1">Phase 3 — 2026</div>
<h3 className="text-sm font-semibold text-indigo-100 mb-2">Courses &amp; Mentorship</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Launching structured online courses, mentorship programs, and premium resources to help creators and students level up faster.</p>
</div>
</div>
<div className="relative flex gap-6 md:gap-8">
<div className="w-12 md:w-16 flex-shrink-0 flex items-start justify-center pt-1">
<div className="w-3 h-3 rounded-full bg-amber-500 ring-4 ring-amber-500/20 relative z-10"></div>
</div>
<div className="rounded-2xl border p-6 flex-1 bg-black/50 border-indigo-800/60">
<div className="text-xs font-semibold text-amber-400 mb-1">Phase 4 — Future</div>
<h3 className="text-sm font-semibold text-indigo-100 mb-2">Full Digital Media Brand</h3>
<p className="text-xs text-indigo-400 leading-relaxed">Evolving into a complete media brand with podcasts, a blog, digital tools, collaborations with Indian creators, and live events.</p>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 bg-indigo-950/30 relative overflow-hidden" id="contact">
<div className="absolute inset-0 opacity-20" style={{background: 'radial-gradient(ellipse at 30% 50%, rgba(99,102,241,0.15) 0%, transparent 50%), radial-gradient(ellipse at 70% 50%, rgba(168,85,247,0.1) 0%, transparent 50%)'}}></div>
<div className="max-w-3xl mx-auto text-center relative z-10">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-indigo-400">Join the Movement</div>
<h2 className="text-3xl md:text-4xl lg:text-5xl font-bold tracking-tight mb-6 text-indigo-50">Ready to grow<br/><span className="gradient-text">with VYRA?</span></h2>
<p className="text-indigo-400 max-w-xl mx-auto leading-relaxed mb-10 text-sm">
                Subscribe to our YouTube channel, join the community, and start your journey toward digital mastery. The future belongs to those who learn today.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:bg-indigo-400 shadow-indigo-500/20 text-sm font-medium text-white bg-indigo-500 w-full rounded-xl pt-3.5 pr-7 pb-3.5 pl-7 shadow-lg" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Subscribe on YouTube
                </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:border-indigo-600 hover:bg-indigo-950/50 text-sm font-medium text-indigo-300 w-full border-indigo-800 border rounded-xl pt-3.5 pr-7 pb-3.5 pl-7" href="/vyra.india@gmail.com">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Get in Touch
                </a>
</div>
<div className="flex gap-6 gap-x-6 gap-y-6 items-center justify-center">
<a className="text-indigo-500 hover:text-indigo-300 transition-colors" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="text-indigo-500 hover:text-indigo-300 transition-colors" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" style={{strokeWidth: '1.5'}} width="24"></iconify-icon>
</a>
<a className="text-indigo-500 hover:text-indigo-300 transition-colors" href="#">
<iconify-icon className="" height="24" icon="solar:letter-linear" style={{strokeWidth: '1.5', color: 'rgb(165, 180, 252)'}} width="24"></iconify-icon>
</a>
</div>
</div>
</section>

<footer className="border-t border-indigo-900/60 py-12 px-6 bg-black">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-4 gap-10 mb-12">
<div className="md:col-span-2">
<a className="text-xl font-bold tracking-tighter text-indigo-100" href="#">VYRA</a>
<p className="text-sm text-indigo-500 mt-3 leading-relaxed max-w-sm">
                        India's next-generation digital media brand. Empowering young minds with knowledge about technology, AI, content creation, and digital growth.
                    </p>
</div>
<div className="">
<h4 className="text-xs font-semibold tracking-widest uppercase text-indigo-300 mb-4">Navigate</h4>
<ul className="space-y-2.5">
<li><a className="text-sm text-indigo-500 hover:text-indigo-300 transition-colors" href="#about">About Us</a></li>
<li><a className="text-sm text-indigo-500 hover:text-indigo-300 transition-colors" href="#services">What We Create</a></li>
<li className=""><a className="hover:text-indigo-300 transition-colors text-sm text-indigo-500" href="#youtube">YouTube Channel</a></li>
</ul>
</div>
<div className="">
<h4 className="text-xs font-semibold tracking-widest uppercase text-indigo-300 mb-4">Connect</h4>
<ul className="space-y-2.5">
<li className=""><a className="hover:text-indigo-300 transition-colors text-sm text-indigo-500" href="https://www.youtube.com/@No_LimitsMind023" target="_blank">YouTube</a></li>
<li className=""><a className="hover:text-indigo-300 transition-colors text-sm text-indigo-500" href="/#https://www.instagram.com/_vyra_023?igsh=MTgydm5ldXRyODU4aQ==">Instagram</a></li>
<li><a className="text-sm text-indigo-500 hover:text-indigo-300 transition-colors" href="#">Twitter / X</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-indigo-900/40 flex flex-col sm:flex-row items-center justify-between gap-4">
<p className="text-xs text-indigo-600">© 2025 VYRA. All rights reserved. Made with ❤️ in India.</p>
<div className="flex items-center gap-4">
<a className="text-xs text-indigo-600 hover:text-indigo-400 transition-colors" href="#">Privacy</a>
<a className="text-xs text-indigo-600 hover:text-indigo-400 transition-colors" href="#">Terms</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
