import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



        // Mobile menu toggle
        const mobileMenuBtn = document.getElementById('mobileMenuBtn');
        const mobileMenu = document.getElementById('mobileMenu');
        mobileMenuBtn.addEventListener('click', () => {
            mobileMenu.classList.toggle('hidden');
        });

        // Close mobile menu on link click
        mobileMenu.querySelectorAll('a').forEach(link => {
            link.addEventListener('click', () => {
                mobileMenu.classList.add('hidden');
            });
        });

        // Scroll animations
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -40px 0px' });

        document.querySelectorAll('.card-hover').forEach((el, i) => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(20px)';
            el.style.transition = `all 0.5s ease ${i * 0.08}s`;
            observer.observe(el);
        });

        // Navbar background on scroll
        const nav = document.querySelector('nav');
        window.addEventListener('scroll', () => {
            if (window.scrollY > 10) {
                nav.style.boxShadow = '0 1px 3px rgba(0,0,0,0.04)';
            } else {
                nav.style.boxShadow = 'none';
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed nav-blur bg-black/80 z-50 border-indigo-900 border-b top-0 right-0 left-0" style={{boxShadow: 'none'}}>
<div className="flex h-16 max-w-6xl mr-auto ml-auto pr-6 pl-6 items-center justify-between" onclick="window.location.href='https://www.youtube.com/@No_LimitsMind023'" role="button">
<a className="text-xl font-bold tracking-tighter text-indigo-100" href="#">VYRA</a>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm text-indigo-500 transition-colors font-medium hover:text-indigo-100" href="#about">About</a>
<a className="transition-colors hover:text-indigo-100 text-sm font-medium text-indigo-500" href="#services">What We Create</a>
<a className="text-sm text-indigo-500 transition-colors font-medium hover:text-indigo-100" href="#youtube">YouTube</a>
<a className="text-sm text-indigo-500 transition-colors font-medium hover:text-indigo-100" href="#why">Why VYRA</a>
</div>
<div className="flex items-center gap-3">
<a className="hidden sm:inline-flex items-center gap-2 text-sm font-medium px-4 py-2 rounded-lg transition-colors bg-indigo-100 text-black hover:bg-indigo-200" href="#youtube">
<iconify-icon icon="solar:play-bold" width="14"></iconify-icon>
                    Subscribe
                </a>
<button className="md:hidden p-2 text-indigo-400 hover:text-indigo-100" id="mobileMenuBtn">
<iconify-icon icon="solar:hamburger-menu-linear" style={{strokeWidth: '1.5'}} width="22"></iconify-icon>
</button>
</div>
</div>

<div className="hidden md:hidden border-t px-6 py-4 bg-black border-indigo-900" id="mobileMenu">
<div className="flex flex-col gap-3">
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#about">About</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#services">What We Create</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#youtube">YouTube</a>
<a className="text-sm py-2 font-medium text-indigo-400 hover:text-indigo-100" href="#why">Why VYRA</a>
</div>
</div>
</nav>

<section className="hero-glow md:pt-44 md:pb-32 pt-32 pr-6 pb-20 pl-6">
<div className="fade-in text-center max-w-4xl mr-auto ml-auto">
<div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 tracking-wide uppercase bg-blue-950 text-blue-300">
<iconify-icon icon="solar:star-bold" style={{color: '#6366f1'}} width="12"></iconify-icon>
                India's Next-Gen Digital Media Brand
            </div>
<h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight leading-tight mb-6 text-indigo-100">
                Learn. Create.<br/>
<span className="gradient-text">Grow Digital.</span>
</h1>
<p className="text-lg md:text-xl text-indigo-500 max-w-2xl mx-auto mb-10 leading-relaxed font-normal">
                VYRA is a digital media brand helping millions of young Indians understand technology, master content creation, and build their future — one video at a time.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:bg-indigo-200 shadow-indigo-100/10 text-sm font-medium text-black bg-indigo-100 w-full rounded-xl pt-3.5 pr-6 pb-3.5 pl-6 shadow-lg" href="https://www.youtube.com/@No_LimitsMind023">
<iconify-icon icon="solar:play-circle-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Watch on YouTube
                </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:border-indigo-700 hover:bg-indigo-950 text-sm font-medium text-indigo-300 bg-black w-full border-indigo-800 border rounded-xl pt-3.5 pr-6 pb-3.5 pl-6" href="#about">
                    Learn More About Us
                    <iconify-icon icon="solar:arrow-right-linear" style={{strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>

<div className="mt-16 grid grid-cols-3 gap-6 max-w-lg mx-auto">
<div className="">
<div className="md:text-3xl text-2xl font-bold text-indigo-100 tracking-tight"></div>
<div className="text-xs font-medium text-indigo-600 mt-1"></div>
</div>
<div className="">
<div className="md:text-3xl text-2xl font-bold text-indigo-100 tracking-tight"></div>
<div className="text-xs font-medium text-indigo-600 mt-1"></div>
</div>
<div className="">
<div className="md:text-3xl text-2xl font-bold text-indigo-100 tracking-tight"></div>
<div className="text-xs font-medium text-indigo-600 mt-1"></div>
</div>
</div>
</div>
</section>

<section className="md:py-28 bg-indigo-950/50 pt-20 pr-6 pb-20 pl-6" id="about">
<div className="max-w-6xl mx-auto">
<div className="grid md:grid-cols-2 gap-12 md:gap-20 gap-x-12 gap-y-12 items-center">
<div>
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-blue-400">About Us</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6 text-indigo-100">We're building India's most trusted digital knowledge platform.</h2>
<div className="space-y-4 text-indigo-500 leading-relaxed">
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
<div className="rounded-2xl border p-8 shadow-sm bg-black border-indigo-800">
<div className="grid grid-cols-2 gap-6">
<div className="rounded-xl p-5 text-center bg-indigo-950">
<iconify-icon className="mb-3" icon="solar:videocamera-record-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Video First</div>
<div className="text-xs mt-1 text-indigo-600">YouTube native content</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950">
<iconify-icon className="mb-3" icon="solar:global-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Made in India</div>
<div className="text-xs mt-1 text-indigo-600">For global audiences</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950">
<iconify-icon className="mb-3" icon="solar:users-group-rounded-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Community</div>
<div className="text-xs mt-1 text-indigo-600">Growing every day</div>
</div>
<div className="rounded-xl p-5 text-center bg-indigo-950">
<iconify-icon className="mb-3" icon="solar:rocket-2-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="28"></iconify-icon>
<div className="text-sm font-semibold text-indigo-100">Future Ready</div>
<div className="text-xs mt-1 text-indigo-600">Always evolving</div>
</div>
</div>
</div>
<div className="absolute -z-10 top-4 left-4 right-4 bottom-4 rounded-2xl bg-blue-900/40"></div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="uppercase text-xs font-semibold text-blue-400 tracking-widest mb-4">Mission &amp; Vision</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight text-indigo-100">What drives everything we do.</h2>
</div>
<div className="grid md:grid-cols-2 gap-8">

<div className="card-hover rounded-2xl border p-8 md:p-10 relative overflow-hidden bg-black border-indigo-800">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-blue-500 to-cyan-500"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-blue-950">
<iconify-icon icon="solar:target-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-indigo-100">Our Mission</h3>
<p className="text-indigo-500 leading-relaxed">
                        To empower India's young generation with practical digital knowledge through high-quality video content. We make technology, AI, content creation, and digital growth strategies simple and accessible — so anyone with a smartphone and curiosity can start building their future today.
                    </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Simplify complex digital concepts for everyone
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Create free, high-value content on YouTube
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#6366f1', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Inspire action, not just awareness
                        </li>
</ul>
</div>

<div className="card-hover rounded-2xl border p-8 md:p-10 relative overflow-hidden bg-black border-indigo-800">
<div className="absolute top-0 left-0 right-0 h-1 bg-gradient-to-r from-cyan-500 to-green-500"></div>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-6 bg-cyan-950">
<iconify-icon icon="solar:eye-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-xl font-semibold tracking-tight mb-4 text-indigo-100">Our Vision</h3>
<p className="text-indigo-500 leading-relaxed">
                        To become India's most influential digital media brand that shapes how the next generation thinks about technology, creativity, and growth. We envision a future where every young Indian has the digital literacy and confidence to thrive in the modern economy.
                    </p>
<ul className="mt-6 space-y-3">
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Be the go-to digital knowledge source in India
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Build a community of 1 million creators
                        </li>
<li className="flex items-start gap-3 text-sm text-indigo-400">
<iconify-icon icon="solar:check-circle-linear" style={{color: '#a855f7', strokeWidth: '1.5', flexShrink: '0', marginTop: '2px'}} width="18"></iconify-icon>
                            Expand into courses, tools, and mentorship
                        </li>
</ul>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 bg-indigo-950/50" id="services">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-blue-400">What We Create</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-indigo-100">Content that matters.</h2>
<p className="text-indigo-500 max-w-2xl mx-auto leading-relaxed">
                    We produce focused, research-backed video content across six key areas that matter most to young Indians building their digital future.
                </p>
</div>
<div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-cyan-100 transition-colors bg-cyan-950">
<iconify-icon icon="solar:cpu-bolt-linear" style={{color: '#3b82f6', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Technology &amp; Trends</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Breaking down the latest in tech — from smartphones and gadgets to emerging platforms and software — explained in a way that's practical and easy to follow.
                    </p>
</div>

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-violet-100 transition-colors bg-violet-950">
<iconify-icon icon="solar:magic-stick-3-linear" style={{color: '#8b5cf6', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Artificial Intelligence</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Demystifying AI tools, ChatGPT workflows, automation strategies, and how artificial intelligence is reshaping careers, education, and everyday life.
                    </p>
</div>

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-indigo-100 transition-colors bg-indigo-950">
<iconify-icon icon="solar:laptop-minimalistic-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Digital Tools &amp; Apps</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        In-depth reviews and tutorials on the best digital tools — from productivity apps and design software to no-code platforms and browser extensions.
                    </p>
</div>

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors bg-green-950">
<iconify-icon icon="solar:camera-linear" style={{color: '#ec4899', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Content Creation</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Everything about starting and growing as a content creator — video editing, scripting, thumbnails, equipment, YouTube strategy, and building your personal brand.
                    </p>
</div>

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-blue-100 transition-colors bg-blue-950">
<iconify-icon icon="solar:chart-2-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Online Growth</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Strategies for growing your audience, monetizing your skills, social media marketing, freelancing, and building real income streams in the digital economy.
                    </p>
</div>

<div className="card-hover rounded-2xl border p-7 group bg-black border-indigo-800" style={{transition: '0.5s 0.16s'}}>
<div className="w-11 h-11 rounded-xl flex items-center justify-center mb-5 group-hover:bg-green-100 transition-colors bg-green-950">
<iconify-icon icon="solar:mind-map-linear" style={{color: '#06b6d4', strokeWidth: '1.5'}} width="22"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Self-Development</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Mindset, productivity, time management, and the habits that separate those who dream from those who do. Real advice for students and young professionals.
                    </p>
</div>
</div>
</div>
</section>

<section className="md:py-28 pt-20 pr-6 pb-20 pl-6" id="youtube">
<div className="max-w-6xl mx-auto">
<div className="relative bg-gradient-to-br rounded-3xl p-8 md:p-14 overflow-hidden from-indigo-100 via-indigo-100 to-blue-50">
<div className="opacity-10 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(circle at 20% 50%, #6366f1 0%, transparent 50%), radial-gradient(circle at 80% 50%, #a855f7 0%, transparent 50%)'}}></div>
<div className="relative grid md:grid-cols-2 gap-10 items-center">
<div className="">
<div className="inline-flex items-center gap-2 text-xs font-semibold px-3 py-1.5 rounded-full mb-6 backdrop-blur-sm bg-black/10 text-black/80">
<iconify-icon icon="solar:play-bold" style={{color: '#ef4444'}} width="10"></iconify-icon>
                            YouTube Channel
                        </div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-5 text-black">
                            Join the VYRA community on YouTube.
                        </h2>
<p className="leading-relaxed mb-8 text-indigo-600">
                            Every week, we publish carefully crafted videos on technology, AI, digital tools, creator strategies, and personal growth. Our content is designed for Indian students, creators, and entrepreneurs who want to stay ahead of the curve — without the fluff.
                        </p>
<p className="leading-relaxed mb-8 text-indigo-600">
                            Subscribe to get notified when we drop new content. It's free, it's valuable, and it might just change the way you think about your digital future.
                        </p>
<a className="inline-flex items-center gap-3 transition-all pulse-ring hover:bg-red-300 text-sm font-medium text-black bg-red-400 rounded-xl pt-3.5 pr-6 pb-3.5 pl-6" href="/#https://www.youtube.com/@No_LimitsMind023">
<iconify-icon icon="solar:play-circle-bold" width="20"></iconify-icon>
                            Subscribe on YouTube
                        </a>
</div>
<div className="flex justify-center">
<div className="backdrop-blur-sm rounded-2xl border p-6 w-full max-w-sm bg-black/5 border-black/10">
<div className="flex mb-6 gap-x-4 gap-y-4 items-center">
<div className="flex text-lg font-bold text-black tracking-tighter bg-gradient-to-br from-blue-500 to-cyan-400 w-14 h-14 rounded-full items-center justify-center">V</div>
<div>
<div className="font-semibold text-black">VYRA</div>
<div className="text-xs text-indigo-600">Digital Media • India</div>
</div>
</div>
<div className="grid grid-cols-3 gap-4 text-center mb-6">
<div className="">
<div className="text-lg font-bold text-black tracking-tight"></div>
<div className="text-indigo-500 text-xs">Subscribers</div>
</div>
<div>
<div className="font-bold text-lg tracking-tight text-black">200+</div>
<div className="text-indigo-500 text-xs">Videos</div>
</div>
<div className="">
<div className="font-bold text-lg tracking-tight text-black">1M+</div>
<div className="text-xs text-indigo-500">Views</div>
</div>
</div>
<div className="space-y-3">
<div className="flex items-center gap-3 rounded-lg p-3 bg-black/5">
<div className="w-16 h-10 bg-blue-500/20 rounded-md flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:play-bold" style={{color: '#818cf8'}} width="12"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs font-medium truncate text-black">Top 10 AI Tools You Must Try in 2025</div>
<div className="text-indigo-500 text-xs">24K views • 3 days ago</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg p-3 bg-black/5">
<div className="w-16 h-10 bg-cyan-500/20 rounded-md flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:play-bold" style={{color: '#a78bfa'}} width="12"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs font-medium truncate text-black">How to Start a YouTube Channel with ₹0</div>
<div className="text-indigo-500 text-xs">18K views • 1 week ago</div>
</div>
</div>
<div className="flex items-center gap-3 rounded-lg p-3 bg-black/5">
<div className="w-16 h-10 bg-green-500/20 rounded-md flex items-center justify-center flex-shrink-0">
<iconify-icon icon="solar:play-bold" style={{color: '#f472b6'}} width="12"></iconify-icon>
</div>
<div className="min-w-0">
<div className="text-xs font-medium truncate text-black">5 Digital Skills That Pay More Than Degrees</div>
<div className="text-indigo-500 text-xs">31K views • 2 weeks ago</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-20 md:py-28 px-6 bg-indigo-950/50" id="why">
<div className="max-w-6xl mx-auto">
<div className="text-center mb-16">
<div className="text-xs font-semibold tracking-widest uppercase mb-4 text-blue-400">Why VYRA</div>
<h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-indigo-100">Not just another YouTube channel.</h2>
<p className="text-indigo-500 max-w-2xl mx-auto leading-relaxed">
                    We're building something different — a digital media brand with depth, purpose, and a clear commitment to quality.
                </p>
</div>
<div className="grid md:grid-cols-5 gap-6">

<div className="md:col-span-3 card-hover rounded-2xl border p-8 relative overflow-hidden bg-black border-indigo-800" style={{transition: '0.5s 0.64s'}}>
<div className="flex flex-col sm:flex-row gap-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-950">
<iconify-icon icon="solar:diploma-verified-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Research-Backed, Not Clickbait</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                                Every video we produce is thoroughly researched. We don't chase trends blindly — we explain why things matter, give you the context, and provide steps you can actually follow. Our content is built to stand the test of time, not just algorithms.
                            </p>
</div>
</div>
</div>

<div className="md:col-span-2 card-hover rounded-2xl border p-8 bg-black border-indigo-800" style={{transition: '0.5s 0.64s'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-cyan-950">
<iconify-icon icon="solar:heart-pulse-linear" style={{color: '#a855f7', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Made for India's Youth</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        Our content is designed specifically for Indian students, creators, and young professionals. We understand the local context, budget constraints, and career realities.
                    </p>
</div>

<div className="md:col-span-2 card-hover rounded-2xl border p-8 bg-black border-indigo-800" style={{transition: '0.5s 0.64s'}}>
<div className="w-12 h-12 rounded-xl flex items-center justify-center mb-5 bg-indigo-950">
<iconify-icon icon="solar:refresh-circle-linear" style={{color: '#10b981', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Consistent &amp; Reliable</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                        We publish on a regular schedule. When you subscribe to VYRA, you know exactly what to expect — quality content, delivered consistently, week after week.
                    </p>
</div>

<div className="md:col-span-3 card-hover rounded-2xl border p-8 bg-black border-indigo-800" style={{transition: '0.5s 0.64s'}}>
<div className="flex flex-col sm:flex-row gap-6">
<div className="w-12 h-12 rounded-xl flex items-center justify-center flex-shrink-0 bg-blue-950">
<iconify-icon icon="solar:lightbulb-bolt-linear" style={{color: '#f59e0b', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">Practical, Not Theoretical</h3>
<p className="text-sm text-indigo-500 leading-relaxed">
                                We focus on what you can do right now. Our videos come with real examples, step-by-step guides, tool recommendations, and actionable takeaways. We respect your time and make every minute of watch time count.
                            </p>
</div>
</div>
</div>
</div>

<div className="mt-6 card-hover bg-gradient-to-r rounded-2xl border p-8 text-center from-blue-950 via-cyan-950 to-green-950 border-blue-900">
<div className="w-12 h-12 rounded-xl flex items-center justify-center mx-auto mb-5 shadow-sm bg-black">
<iconify-icon icon="solar:hand-stars-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="24"></iconify-icon>
</div>
<h3 className="text-base font-semibold mb-2 text-indigo-100">100% Free, Always</h3>
<p className="text-sm text-indigo-500 leading-relaxed max-w-xl mx-auto">
                    Everything we publish on YouTube is completely free. No paywalls, no hidden catches. Our mission is to democratize digital knowledge, and that starts with keeping it accessible to everyone.
                </p>
</div>
</div>
</section>

<section className="md:py-28 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-3xl mx-auto text-center">
<div className="w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 bg-blue-950">
<iconify-icon icon="solar:rocket-2-linear" style={{color: '#6366f1', strokeWidth: '1.5'}} width="30"></iconify-icon>
</div>
<h2 className="md:text-4xl text-3xl font-bold text-indigo-100 tracking-tight mb-5">Ready to grow with VYRA?</h2>
<p className="text-indigo-500 leading-relaxed max-w-xl mx-auto mb-10">
                Join thousands of students, creators, and entrepreneurs who are already learning, growing, and building their digital future with VYRA. Subscribe today — it takes two seconds.
            </p>
<div className="flex flex-col sm:flex-row items-center justify-center gap-4">
<a className="w-full sm:w-auto inline-flex items-center justify-center gap-2 font-medium px-7 py-3.5 rounded-xl transition-all text-sm shadow-lg bg-red-400 hover:bg-red-300 text-black shadow-red-400/20" href="#">
<iconify-icon icon="solar:play-circle-bold" width="18"></iconify-icon>
                    Subscribe on YouTube
                </a>
<a className="sm:w-auto inline-flex items-center justify-center gap-2 transition-all hover:bg-indigo-200 text-sm font-medium text-black bg-indigo-100 w-full rounded-xl pt-3.5 pr-7 pb-3.5 pl-7" href="/#">
<iconify-icon icon="solar:letter-linear" style={{strokeWidth: '1.5'}} width="18"></iconify-icon>
                    Get in Touch
                </a>
</div>
</div>
</section>

<footer className="text-black bg-indigo-50 pt-16 pr-6 pb-8 pl-6">
<div className="max-w-6xl mx-auto">
<div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10 mb-14">

<div className="sm:col-span-2 lg:col-span-1">
<div className="text-xl font-bold tracking-tighter mb-4">VYRA</div>
<p className="text-sm leading-relaxed mb-6 text-indigo-600">
                        India's modern digital media brand. We create high-quality YouTube content on technology, AI, digital tools, content creation, and personal growth for the next generation of builders.
                    </p>
<div className="flex items-center gap-3">
<a className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-black/5 hover:bg-black/10" href="#">
<iconify-icon className="" height="16" icon="solar:play-circle-bold" style={{color: '#9ca3af'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-black/5 hover:bg-black/10" href="#">
<iconify-icon icon="solar:chat-round-dots-linear" style={{color: '#9ca3af', strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
<a className="w-9 h-9 rounded-lg flex items-center justify-center transition-colors bg-black/5 hover:bg-black/10" href="#">
<iconify-icon icon="solar:letter-linear" style={{color: '#9ca3af', strokeWidth: '1.5'}} width="16"></iconify-icon>
</a>
</div>
</div>

<div className="">
<div className="uppercase text-xs font-semibold text-indigo-500 tracking-widest mb-4 -translate-y-6" onclick="window.location.href='https://www.instagram.com/_vyra_023?igsh=MTV3ZzhzOXlzeGhlcw=='" role="button">Quick Links</div>
<ul className="space-y-3">
<li className=""><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Home</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#about">About Us</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#services">What We Create</a></li>
</ul>
</div>

<div>
<div className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-4">Topics</div>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Technology</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Artificial Intelligence</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Digital Tools</a></li>
</ul>
</div>

<div>
<div className="text-xs font-semibold tracking-widest uppercase text-indigo-500 mb-4">Legal</div>
<ul className="space-y-3">
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Privacy Policy</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Terms of Use</a></li>
<li><a className="text-sm transition-colors text-indigo-600 hover:text-black" href="#">Contact Us</a></li>
</ul>
</div>
</div>

<div className="border-t pt-8 flex flex-col sm:flex-row items-center justify-between gap-4 border-black/5">
<p className="text-xs text-indigo-500" onclick="window.location.href='https://www.instagram.com/_vyra_023?igsh=MTV3ZzhzOXlzeGhlcw=='" role="button">© 2026 VYRA. All rights reserved. Made with purpose in India.</p>
<p className="text-xs text-indigo-400">
                    Building the future, one video at a time.
                </p>
</div>
</div>
</footer>


    </>
  );
}
