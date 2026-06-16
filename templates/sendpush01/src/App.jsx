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
animation: {
'fade-in': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'fade-in-delay': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
'fade-in-delay-2': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
'fade-in-delay-3': 'fadeIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards',
'slide-up': 'slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-up-delay': 'slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
'slide-up-delay-2': 'slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.4s forwards',
'slide-up-delay-3': 'slideUp 1.4s cubic-bezier(0.16, 1, 0.3, 1) 0.6s forwards',
'slide-in-left': 'slideInLeft 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'slide-in-right': 'slideInRight 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'scale-in': 'scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'scale-in-delay': 'scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.1s forwards',
'scale-in-delay-2': 'scaleIn 1.2s cubic-bezier(0.16, 1, 0.3, 1) 0.2s forwards',
'blur-in': 'blurIn 1.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
'float': 'float 6s ease-in-out infinite',
'parallax-slow': 'parallaxSlow 20s linear infinite',
},
keyframes: {
fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
slideUp: { '0%': { opacity: '0', transform: 'translateY(40px)' }, '100%': { opacity: '1', transform: 'translateY(0)' } },
slideInLeft: { '0%': { opacity: '0', transform: 'translateX(-60px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
slideInRight: { '0%': { opacity: '0', transform: 'translateX(60px)' }, '100%': { opacity: '1', transform: 'translateX(0)' } },
scaleIn: { '0%': { opacity: '0', transform: 'scale(0.9)' }, '100%': { opacity: '1', transform: 'scale(1)' } },
blurIn: { '0%': { opacity: '0', filter: 'blur(20px)', transform: 'translateY(20px) scale(1.02)' }, '100%': { opacity: '1', filter: 'blur(0px)', transform: 'translateY(0) scale(1)' } },
float: { '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' }, '50%': { transform: 'translateY(-10px) rotate(1deg)' } },
parallaxSlow: { '0%': { transform: 'translateX(-100%)' }, '100%': { transform: 'translateX(100%)' } }
}
}
}
}



        // Year
        document.getElementById('year').textContent = new Date().getFullYear();

        // Enhanced parallax scroll animation observer
        const observerOptions = {
            threshold: [0, 0.1, 0.2, 0.3, 0.4, 0.5],
            rootMargin: '0px 0px -20px 0px'
        };

        const parallaxObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                const rect = entry.boundingClientRect;
                const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
                const elementTop = rect.top + scrollTop;
                const elementHeight = rect.height;
                const windowHeight = window.innerHeight;
                
                // Calculate how far the element has been scrolled
                const scrollProgress = Math.max(0, Math.min(1, (scrollTop + windowHeight - elementTop) / (elementHeight + windowHeight)));

                if (entry.isIntersecting && scrollProgress > 0.1) {
                    // Apply parallax transform based on scroll progress
                    const parallaxY = (scrollProgress - 0.5) * 30;
                    
                    // Subtle parallax movement
                    if (entry.target.classList.contains('parallax-container')) {
                        entry.target.style.transform = `translateY(${parallaxY}px)`;
                    }
                    if (entry.target.classList.contains('parallax-slow')) {
                        entry.target.style.transform = `translateY(${parallaxY * 0.5}px)`;
                    }
                    
                    // Trigger animation
                    entry.target.style.opacity = '1';
                    entry.target.style.animationPlayState = 'running';
                    
                    // Add a slight delay for staggered elements
                    const delay = entry.target.style.animationDelay || '0s';
                    setTimeout(() => {
                        entry.target.style.animationPlayState = 'running';
                    }, parseFloat(delay) * 1000);
                }
            });
        }, observerOptions);

        // Smooth scroll observer for regular animations
        const scrollObserver = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.animationPlayState = 'running';
                    // Progressive enhancement for scale and fade animations
                    if (entry.target.classList.contains('animate-scale-in')) {
                        entry.target.style.transform = 'scale(1)';
                    }
                    scrollObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });

        // Initialize animations on DOM load
        document.addEventListener('DOMContentLoaded', () => {
            const scrollElements = document.querySelectorAll('.scroll-element');
            scrollElements.forEach((el) => {
                el.style.animationPlayState = 'paused';
                // Apply parallax observer to special elements
                if (el.classList.contains('parallax-container') || el.classList.contains('parallax-slow')) {
                    parallaxObserver.observe(el);
                } else {
                    scrollObserver.observe(el);
                }
            });
            
            // Add smooth scrolling with momentum
            document.documentElement.style.scrollBehavior = 'smooth';
        });

        // Add continuous parallax effect on scroll
        let ticking = false;
        function updateParallax() {
            const scrolled = window.pageYOffset;
            const parallaxElements = document.querySelectorAll('.parallax-container');
            
            parallaxElements.forEach((element, index) => {
                const rect = element.getBoundingClientRect();
                const speed = 0.5 + (index * 0.1); // Different speeds for each element
                const yPos = -(scrolled * speed);
                element.style.transform = `translateY(${yPos * 0.1}px)`;
            });
            ticking = false;
        }

        function requestTick() {
            if (!ticking) {
                requestAnimationFrame(updateParallax);
                ticking = true;
            }
        }
        window.addEventListener('scroll', requestTick, { passive: true });

        // Chart.js with enhanced animations
        const ctx = document.getElementById('revenueChart');
        if (ctx) {
            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['10:00', '11:00', '12:00', '13:00', '14:00', '15:00'],
                    datasets: [
                        {
                            data: [12, 19, 45, 62, 58, 75],
                            borderColor: '#38bdf8', // sky-400
                            backgroundColor: (context) => {
                                const ctx = context.chart.ctx;
                                const gradient = ctx.createLinearGradient(0, 0, 0, 200);
                                gradient.addColorStop(0, 'rgba(56, 189, 248, 0.2)');
                                gradient.addColorStop(1, 'rgba(56, 189, 248, 0)');
                                return gradient;
                            },
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            tension: 0.4,
                            fill: true,
                            borderWidth: 3
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    animation: {
                        duration: 2000,
                        easing: 'easeInOutQuart',
                    },
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            enabled: true,
                            displayColors: false,
                            backgroundColor: 'rgba(0,0,0,0.9)',
                            titleColor: '#fff',
                            bodyColor: '#fff',
                            borderColor: '#3f3f46',
                            borderWidth: 1,
                            padding: 10,
                            callbacks: {
                                label: function(context) {
                                    return context.parsed.y + '% CTR';
                                }
                            }
                        }
                    },
                    scales: {
                        x: { display: false },
                        y: { display: false }
                    },
                    elements: {
                        point: {
                            hoverBackgroundColor: '#38bdf8',
                            hoverBorderColor: '#000000',
                            hoverBorderWidth: 2
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    }
                }
            });
        }

        // Toggle Pricing
        (function () {
            const toggle = document.getElementById('billingToggle');
            const starter = document.getElementById('starterPrice');
            const pro = document.getElementById('proPrice');
            if (toggle && pro && starter) {
                toggle.addEventListener('change', function () {
                    if (this.checked) {
                        pro.textContent = '$290';
                        starter.textContent = '$0';
                    } else {
                        pro.textContent = '$29';
                        starter.textContent = '$0';
                    }
                });
            }
        })();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 -z-10 bg-black">
<div className="absolute inset-0 bg-gradient-to-br from-black via-slate-950/20 to-black"></div>
<div className="absolute inset-0 bg-[linear-gradient(to_right,#4f4f4f2e_1px,transparent_1px),linear-gradient(to_bottom,#4f4f4f2e_1px,transparent_1px)] bg-[size:14px_24px]" style={{transform: 'translateZ(0)'}}></div>

<div className="absolute top-20 left-10 w-2 h-2 bg-sky-600 rounded-full opacity-20 animate-float"></div>
<div className="absolute top-40 right-20 w-1 h-1 bg-indigo-500 rounded-full opacity-30 animate-float" style={{animationDelay: '2s'}}></div>
<div className="absolute top-80 left-1/4 w-1.5 h-1.5 bg-sky-600 rounded-full opacity-25 animate-float" style={{animationDelay: '4s'}}></div>
</div>

<header className="relative border-b border-zinc-800 opacity-0 animate-fade-in scroll-element">
<nav className="mx-auto flex max-w-7xl items-center justify-between gap-6 px-6 py-6 lg:px-8">
<a aria-label="SendPush" className="group inline-flex items-center gap-3" href="#">
<span className="text-sky-500 text-2xl">
<span className="iconify" data-icon="solar:plain-bold-duotone"></span>
</span>
<span className="text-lg font-medium tracking-tight">SendPush</span>
</a>
<div className="hidden items-center gap-8 md:flex">
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#features">Features</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#preview">Preview</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#pricing">Pricing</a>
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#faq">FAQ</a>
</div>
<div className="hidden items-center gap-4 md:flex">
<a className="text-base text-zinc-400 hover:text-white transition-colors" href="#">Log in</a>
<a className="inline-flex items-center gap-2 rounded-lg bg-white px-5 py-2.5 text-base font-medium text-black transition hover:bg-zinc-100" href="#get-started">
                    Get Started
                    <span className="iconify" data-icon="solar:arrow-right-bold-duotone"></span>
</a>
</div>
<button className="md:hidden inline-flex items-center gap-2 rounded-md border border-zinc-800 px-3 py-2 text-zinc-400 hover:text-white hover:border-zinc-700 transition">
<span className="iconify text-xl" data-icon="solar:hamburger-menu-bold-duotone"></span>
</button>
</nav>
</header>

<section className="relative">
<div className="mx-auto max-w-7xl px-6 pt-24 pb-20 lg:px-8 lg:pt-40">
<div className="text-center">
<div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-4 py-1.5 text-sm text-zinc-300 backdrop-blur opacity-0 animate-fade-in-delay scroll-element">
<span className="inline-flex h-2 w-2 rounded-full bg-sky-400"></span>
                    New: Smart Audience Segmentation is live
                </div>

<h1 className="mt-8 text-6xl font-bold tracking-tight text-white sm:text-8xl lg:text-9xl opacity-0 animate-slide-up-delay scroll-element leading-[1.1]">
                    Own your<br/>
<span className="bg-gradient-to-r from-sky-300 via-white to-sky-300 bg-clip-text text-transparent">audience.</span>
</h1>

<p className="mx-auto mt-8 max-w-3xl text-xl sm:text-2xl text-zinc-400 opacity-0 animate-fade-in-delay-2 scroll-element leading-relaxed">
                    Turn your followers' lock screen into your private broadcast channel. Bypass email spam filters and algorithmic feeds with direct push notifications.
                </p>
<div className="mt-12 flex flex-col items-center gap-6 sm:flex-row sm:justify-center opacity-0 animate-slide-up-delay-2 scroll-element">
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform" href="#" id="get-started">
                        Start for free
                        <span className="iconify" data-icon="solar:arrow-right-bold-duotone"></span>
</a>
<a className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-4 text-lg font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900 hover:scale-105 transform" href="#">
<span className="iconify text-xl" data-icon="solar:play-circle-bold-duotone"></span>
                        View Demo
                    </a>
</div>

<div className="mt-16 flex flex-wrap justify-center items-center gap-8 sm:gap-12 opacity-0 animate-fade-in-delay-3 scroll-element grayscale opacity-60 hover:opacity-100 transition-opacity duration-500">
<span className="iconify company-logo text-zinc-500" data-icon="simple-icons:stripe"></span>
<span className="iconify company-logo text-zinc-500" data-icon="simple-icons:netflix"></span>
<span className="iconify company-logo text-zinc-500" data-icon="simple-icons:spotify"></span>
<span className="iconify company-logo text-zinc-500" data-icon="simple-icons:vercel"></span>
<span className="iconify company-logo text-zinc-500" data-icon="simple-icons:airbnb"></span>
</div>
</div>

<div className="mt-20 relative opacity-0 animate-blur-in scroll-element parallax-container">
<div className="absolute -inset-4 rounded-3xl bg-gradient-to-r from-sky-900/30 via-indigo-900/30 to-sky-900/30 blur-3xl"></div>
<div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-6 shadow-2xl hover:shadow-3xl transition-shadow duration-700">

<div className="flex items-center justify-between border-b border-zinc-800 pb-6">
<div className="flex items-center gap-4">
<div className="h-10 w-10 rounded-lg bg-white text-black inline-flex items-center justify-center">
<span className="iconify text-xl" data-icon="solar:plain-bold-duotone"></span>
</div>
<div>
<div className="text-base font-medium text-white">Broadcast #8492</div>
<div className="text-sm text-zinc-500">Sent 2 hours ago</div>
</div>
</div>
<span className="inline-flex items-center gap-1.5 rounded-full bg-emerald-500/10 px-3 py-1 text-sm font-medium text-emerald-400 border border-emerald-500/20">
<span className="iconify" data-icon="solar:check-circle-bold-duotone"></span>
                            Delivered
                        </span>
</div>
<div className="grid grid-cols-1 gap-6 pt-6 lg:grid-cols-3">

<div className="lg:col-span-2">
<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 hover:bg-zinc-900/70 transition-colors duration-500">
<div className="flex items-center justify-between border-b border-zinc-800 px-6 py-4">
<span className="text-base font-medium text-white">Campaign Audience</span>
<span className="text-sm text-zinc-500">Total: 12,405</span>
</div>
<div className="p-6">
<div className="text-base font-medium text-white">Premium Subscribers</div>
<div className="text-sm text-zinc-500">Segment: High Engagement</div>
<div className="mt-6 rounded-lg bg-black/50 p-5 border border-zinc-800 hover:border-zinc-700 transition-colors duration-300">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-300">Message Content</span>
<span className="font-mono text-xs text-zinc-500 bg-zinc-800 px-2 py-1 rounded">PREVIEW</span>
</div>
<p className="mt-3 text-lg font-medium text-white">"⚡️ Flash Sale: The new collection drops in 10 minutes. Tap for early access."</p>
<div className="mt-6 border-t border-zinc-800 pt-4">
<div className="flex items-center justify-between text-base">
<span className="text-zinc-400">Potential Reach</span>
<span className="font-mono text-zinc-300">12,405 Devices</span>
</div>
<div className="mt-2 flex items-center justify-between text-base">
<span className="text-zinc-400">Est. Open Rate</span>
<span className="font-mono text-emerald-400">~42-48%</span>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col rounded-xl border border-zinc-800 bg-zinc-900/50 p-6 hover:bg-zinc-900/70 transition-all duration-500">
<div className="flex items-center justify-between">
<div>
<div className="text-base font-medium text-white">Click-through Rate</div>
<div className="text-sm text-zinc-500">Live analytics</div>
</div>
<div className="inline-flex items-center gap-1 rounded-md bg-emerald-500/10 px-2 py-1 text-xs font-mono text-emerald-400 border border-emerald-500/20">
<span className="iconify" data-icon="solar:graph-up-bold-duotone"></span> +24%
                                </div>
</div>
<div className="mt-6 flex-1">
<div className="rounded-lg bg-black/50 border border-zinc-800 p-3 hover:border-zinc-700 transition-colors duration-300">
<div className="relative h-40">
<canvas height="256" id="revenueChart" style={{display: 'block', width: '100%', height: '100%'}} width="662"></canvas>
</div>
</div>
<div className="mt-4 flex items-center justify-between text-sm">
<span className="text-zinc-400">Active Now</span>
<span className="font-mono text-white text-base">1,892</span>
</div>
</div>
</div>
</div>
<div className="mt-6 flex items-center justify-between rounded-xl border border-zinc-800 bg-zinc-900/50 px-6 py-4 hover:bg-zinc-900/70 hover:border-zinc-700 transition-all duration-300">
<div className="flex items-center gap-3 text-base text-zinc-300">
<span className="iconify text-xl text-sky-500" data-icon="solar:shield-check-bold-duotone"></span>
                            Secure encrypted delivery via APNs/FCM
                        </div>
<button className="inline-flex items-center gap-2 rounded-lg bg-white px-4 py-2.5 text-sm font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform">
<span className="iconify" data-icon="solar:plain-bold-duotone"></span>
                            Send Broadcast
                        </button>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-zinc-800" id="features">
<div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
<div className="mx-auto max-w-3xl text-center opacity-0 animate-slide-up scroll-element parallax-slow">

<h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Features that amplify reach</h2>

<p className="mt-6 text-2xl text-zinc-400">From segmenting audiences to scheduling blasts—powerful tools to own your communication.</p>
</div>
<div className="mt-20 grid grid-cols-1 gap-8 md:grid-cols-2 lg:grid-cols-3">

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in scroll-element">
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:magic-stick-3-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Instant Broadcasts</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">Send urgent updates that appear instantly on lock screens, bypassing crowded inboxes.</p>
</div>

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in-delay scroll-element" style={{animationDelay: '0.1s'}}>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:clock-circle-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Smart Scheduling</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">Draft now, send later. Optimize delivery times for when your audience is most active.</p>
</div>

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in-delay scroll-element" style={{animationDelay: '0.2s'}}>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:users-group-rounded-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Deep Segmentation</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">Filter by behavior, location, or past purchases to ensure relevancy for every message.</p>
</div>

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in-delay scroll-element" style={{animationDelay: '0.3s'}}>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:graph-new-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Real-time Analytics</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">Track open rates, click-throughs, and conversions as they happen on your dashboard.</p>
</div>

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in-delay scroll-element" style={{animationDelay: '0.4s'}}>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:globe-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Global Delivery</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">Reliable infrastructure that scales worldwide, handling millions of notifications per second.</p>
</div>

<div className="group rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 transition-all duration-500 hover:border-zinc-700 hover:bg-zinc-900/50 hover:scale-105 hover:shadow-xl opacity-0 animate-scale-in-delay scroll-element" style={{animationDelay: '0.5s'}}>
<div className="flex h-14 w-14 items-center justify-center rounded-xl bg-white text-black group-hover:scale-110 transition-transform duration-300">
<span className="iconify text-3xl" data-icon="solar:shield-keyhole-bold-duotone"></span>
</div>
<h3 className="mt-6 text-2xl font-semibold text-white group-hover:text-zinc-100 transition-colors">Privacy First</h3>
<p className="mt-3 text-lg text-zinc-400 group-hover:text-zinc-300 transition-colors">GDPR compliant. We never sell your data. Your audience belongs to you, not us.</p>
</div>
</div>
</div>
</section>

<section className="relative border-t border-zinc-800" id="preview">
<div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
<div className="grid grid-cols-1 items-center gap-20 lg:grid-cols-12">
<div className="lg:col-span-5 opacity-0 animate-slide-in-left scroll-element">
<h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Delightful subscriber experience</h2>
<p className="mt-6 text-2xl text-zinc-400">
                        Your content deserves better than a spam folder. Give your audience a clean, native experience they actually enjoy.
                    </p>
<ul className="mt-10 space-y-5 text-base text-zinc-300">
<li className="flex items-center gap-4 opacity-0 animate-fade-in scroll-element" style={{animationDelay: '0.2s'}}>
<span className="iconify text-emerald-400 text-xl" data-icon="solar:check-circle-bold"></span>
<span className="text-xl">Rich media support (Images &amp; Video)</span>
</li>
<li className="flex items-center gap-4 opacity-0 animate-fade-in scroll-element" style={{animationDelay: '0.4s'}}>
<span className="iconify text-emerald-400 text-xl" data-icon="solar:check-circle-bold"></span>
<span className="text-xl">One-tap actions and deep links</span>
</li>
<li className="flex items-center gap-4 opacity-0 animate-fade-in scroll-element" style={{animationDelay: '0.6s'}}>
<span className="iconify text-emerald-400 text-xl" data-icon="solar:check-circle-bold"></span>
<span className="text-xl">Custom sounds and branding</span>
</li>
</ul>
<div className="mt-10 flex items-center gap-4 opacity-0 animate-slide-up scroll-element" style={{animationDelay: '0.8s'}}>
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-6 py-3 text-base font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform" href="#">
<span className="iconify" data-icon="solar:eye-bold-duotone"></span>
                            Preview notification
                        </a>
</div>
</div>
<div className="lg:col-span-7 opacity-0 animate-slide-in-right scroll-element parallax-container">
<div className="relative rounded-2xl border border-zinc-800 bg-zinc-950 p-8 hover:border-zinc-700 hover:shadow-2xl transition-all duration-700">
<div className="flex flex-col gap-6">

<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors duration-500 transform hover:scale-[1.02]">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-white flex items-center justify-center shrink-0">
<span className="iconify text-black text-2xl" data-icon="solar:dumbbell-large-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold text-white">Elevate Fitness</h3>
<span className="text-xs text-zinc-500 font-medium">now</span>
</div>
<p className="text-base text-zinc-300">⚡️ Spots just opened for Saturday's Spin Class. Book now before they're gone!</p>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors duration-500 transform hover:scale-[1.02] opacity-80">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-purple-500 to-indigo-600 flex items-center justify-center shrink-0">
<span className="iconify text-white text-2xl" data-icon="solar:cart-large-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold text-white">Style Boutique</h3>
<span className="text-xs text-zinc-500 font-medium">15m ago</span>
</div>
<p className="text-base text-zinc-300">Your order has shipped! 📦 Track your package here.</p>
</div>
</div>
</div>

<div className="rounded-xl border border-zinc-800 bg-zinc-900/50 p-5 hover:bg-zinc-900/70 transition-colors duration-500 transform hover:scale-[1.02] opacity-60">
<div className="flex items-start gap-4">
<div className="h-12 w-12 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shrink-0">
<span className="iconify text-white text-2xl" data-icon="solar:bell-bold-duotone"></span>
</div>
<div className="flex-1">
<div className="flex items-center justify-between mb-1">
<h3 className="text-base font-semibold text-white">Daily Digest</h3>
<span className="text-xs text-zinc-500 font-medium">1h ago</span>
</div>
<p className="text-base text-zinc-300">Top stories: Tech market rally, new AI regulations, and 5 tips for productivity.</p>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-t border-zinc-800" id="pricing">
<div className="max-w-7xl lg:px-8 mx-auto pt-32 px-6 pb-32">
<div className="mx-auto max-w-3xl text-center opacity-0 animate-slide-up scroll-element">
<h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Transparent pricing</h2>
<p className="mt-6 text-2xl text-zinc-400">Start free. Scale as you grow. <span className="text-sky-400 font-medium">Cancel anytime.</span></p>
</div>

<div className="mt-10 mb-2 flex items-center justify-center gap-4 opacity-0 animate-fade-in-delay scroll-element">
<span className="text-base text-zinc-400">Monthly</span>
<label className="relative inline-flex cursor-pointer items-center">
<input aria-label="Toggle billing period" className="sr-only peer" id="billingToggle" type="checkbox"/>
<span className="h-8 w-14 rounded-full bg-zinc-800 transition-all duration-300 peer-checked:bg-gradient-to-r peer-checked:from-sky-500 peer-checked:to-indigo-500 flex items-center px-1 hover:scale-105">
<span className="h-6 w-6 rounded-full bg-zinc-300 transition-all duration-300 peer-checked:translate-x-6 peer-checked:bg-white"></span>
</span>
</label>
<span className="text-base text-zinc-400 flex items-center">
                    Yearly
                    <span className="ml-2 rounded border border-sky-500/20 bg-sky-500/10 px-2 py-0.5 text-xs font-medium text-sky-400">2 months free</span>
</span>
</div>

<div className="mt-16 grid grid-cols-1 gap-10 md:grid-cols-3">

<div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 opacity-0 animate-scale-in scroll-element hover:border-zinc-700 hover:scale-105 hover:shadow-xl transition-all duration-500">
<div className="mb-8 flex items-center justify-between">
<div>
<div className="text-xl font-medium text-white">Starter</div>
<div className="text-sm uppercase tracking-wider text-zinc-500 mt-1">For creators</div>
</div>
<div className="rounded-md bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300">Free</div>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white" id="starterPrice">$0</span>
<span className="text-base text-zinc-500">/month</span>
</div>
<ul className="mt-8 space-y-4 text-base text-zinc-300">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                1,000 Subscribers
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Unlimited Notifications
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Basic Analytics
                            </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform" href="#">Get started</a>
</div>
</div>

<div className="relative rounded-2xl border border-white/20 bg-white/5 p-10 ring-1 ring-white/10 opacity-0 animate-scale-in-delay scroll-element hover:scale-105 hover:shadow-2xl transition-all duration-500" style={{animationDelay: '0.1s'}}>
<div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full bg-gradient-to-r from-sky-500 to-indigo-500 px-4 py-1 text-sm font-medium text-white animate-float">Most Popular</div>
<div className="mb-8 flex items-center justify-between">
<div>
<div className="text-xl font-medium text-white">Pro</div>
<div className="text-sm uppercase tracking-wider text-zinc-400 mt-1">For growing brands</div>
</div>
<div className="rounded-md bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300">14-day trial</div>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white" id="proPrice">$29</span>
<span className="text-base text-zinc-500">/month</span>
</div>
<ul className="mt-8 space-y-4 text-base text-zinc-300">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                25,000 Subscribers
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Audience Segmentation
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Rich Media Support
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Scheduled Sending
                            </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center rounded-xl bg-white px-6 py-4 text-base font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform" href="#">Start 14-day trial</a>
</div>
</div>

<div className="relative rounded-2xl border border-zinc-800 bg-zinc-950/50 p-10 opacity-0 animate-scale-in-delay-2 scroll-element hover:border-zinc-700 hover:scale-105 hover:shadow-xl transition-all duration-500" style={{animationDelay: '0.2s'}}>
<div className="mb-8 flex items-center justify-between">
<div>
<div className="text-xl font-medium text-white">Scale</div>
<div className="text-sm uppercase tracking-wider text-zinc-500 mt-1">High volume</div>
</div>
<div className="rounded-md bg-zinc-800 px-3 py-1 text-sm font-medium text-zinc-300">Custom</div>
</div>
<div>
<div className="flex items-baseline gap-1">
<span className="text-5xl font-semibold text-white">Contact</span>
</div>
<ul className="mt-8 space-y-4 text-base text-zinc-300">
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:check-circle-bold"></span>
                                Unlimited Subscribers
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:shield-bold-duotone"></span>
                                SSO &amp; Advanced Security
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:server-bold-duotone"></span>
                                Dedicated IP &amp; Infra
                            </li>
<li className="flex items-start gap-3">
<span className="iconify text-emerald-400 mt-1" data-icon="solar:user-bold-duotone"></span>
                                Dedicated Account Manager
                            </li>
</ul>
<a className="mt-10 inline-flex w-full items-center justify-center rounded-xl border border-zinc-800 px-6 py-4 text-base font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900 hover:scale-105 transform" href="#">Contact sales</a>
</div>
</div>
</div>
</div>
</section>

<section className="relative border-zinc-800 border-t" id="faq">
<div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
<div className="mx-auto max-w-3xl text-center opacity-0 animate-slide-up scroll-element">
<h2 className="text-5xl font-bold tracking-tight text-white sm:text-7xl">Questions? Answered.</h2>
<p className="mt-6 text-2xl text-zinc-400">Everything you need to know about setting up your channel.</p>
</div>
<div className="mx-auto mt-20 max-w-4xl space-y-6">

<div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors duration-500 opacity-0 animate-slide-up scroll-element">
<details className="group p-8 open:bg-zinc-900/50 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-start justify-between gap-4 hover:text-zinc-100 transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-zinc-400 text-xl" data-icon="solar:question-circle-bold-duotone"></span>
<span className="text-lg font-medium text-white">Do I need a mobile app to use this?</span>
</div>
<span className="iconify text-zinc-400 text-2xl transition-transform duration-300 group-open:rotate-45" data-icon="solar:add-circle-bold-duotone"></span>
</summary>
<p className="mt-4 text-base text-zinc-400 pl-9">No! SendPush works via Web Push standards (PWA) and integrates with existing wallet passes. You can also integrate our SDK into your existing app if you have one.</p>
</details>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors duration-500 opacity-0 animate-slide-up scroll-element">
<details className="group p-8 open:bg-zinc-900/50 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-start justify-between gap-4 hover:text-zinc-100 transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-zinc-400 text-xl" data-icon="solar:smartphone-bold-duotone"></span>
<span className="text-lg font-medium text-white">Does it work on iOS and Android?</span>
</div>
<span className="iconify text-zinc-400 text-2xl transition-transform duration-300 group-open:rotate-45" data-icon="solar:add-circle-bold-duotone"></span>
</summary>
<p className="mt-4 text-base text-zinc-400 pl-9">Yes. We support all modern browsers (Chrome, Safari, Firefox) on both iOS (16.4+) and Android devices natively.</p>
</details>
</div>

<div className="rounded-2xl border border-zinc-800 bg-zinc-950/50 hover:border-zinc-700 transition-colors duration-500 opacity-0 animate-slide-up scroll-element">
<details className="group p-8 open:bg-zinc-900/50 transition-all duration-300">
<summary className="flex cursor-pointer list-none items-start justify-between gap-4 hover:text-zinc-100 transition-colors">
<div className="flex items-center gap-4">
<span className="iconify text-zinc-400 text-xl" data-icon="solar:bill-check-bold-duotone"></span>
<span className="text-lg font-medium text-white">Can I cancel anytime?</span>
</div>
<span className="iconify text-zinc-400 text-2xl transition-transform duration-300 group-open:rotate-45" data-icon="solar:add-circle-bold-duotone"></span>
</summary>
<p className="mt-4 text-base text-zinc-400 pl-9">Absolutely. You can cancel your subscription at any time from your dashboard. You'll keep access until the end of your billing cycle.</p>
</details>
</div>
</div>
</div>
</section>

<section className="relative border-t border-zinc-800">
<div className="mx-auto max-w-7xl px-6 py-32 lg:px-8">
<div className="relative overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-950 p-10 lg:p-24 opacity-0 animate-scale-in scroll-element hover:border-zinc-700 hover:shadow-2xl transition-all duration-700">
<div className="absolute inset-0 -z-10 bg-gradient-to-br from-zinc-800/20 via-sky-900/20 to-black"></div>
<div className="flex flex-col items-center text-center">
<h3 className="text-5xl font-bold tracking-tight text-white sm:text-6xl">Ready to be heard?</h3>
<p className="mt-6 text-2xl text-zinc-400">Join 12,000+ creators and brands sending millions of messages today.</p>
<div className="mt-12 flex items-center gap-6">
<a className="inline-flex items-center gap-2 rounded-xl bg-white px-8 py-4 text-lg font-medium text-black transition hover:bg-zinc-100 hover:scale-105 transform" href="#">
<span className="iconify" data-icon="solar:rocket-bold-duotone"></span>
                            Start Free Trial
                        </a>
<a className="inline-flex items-center gap-2 rounded-xl border border-zinc-800 px-8 py-4 text-lg font-medium text-white transition hover:border-zinc-700 hover:bg-zinc-900 hover:scale-105 transform" href="#">
<span className="iconify" data-icon="solar:book-bookmark-bold-duotone"></span>
                            Read Docs
                        </a>
</div>
</div>
</div>
</div>
</section>

<footer className="relative border-t border-zinc-800 opacity-0 animate-fade-in scroll-element">
<div className="max-w-7xl mx-auto pt-16 pb-8 px-6 lg:px-8">
<div className="flex flex-col justify-between gap-10 md:flex-row md:items-center">
<div className="flex items-center gap-3">
<span className="text-sky-500 text-2xl">
<span className="iconify" data-icon="solar:plain-bold-duotone"></span>
</span>
<span className="text-lg font-medium text-white">SendPush</span>
</div>
<div className="flex items-center gap-8 text-base text-zinc-500">
<a className="hover:text-white transition-colors duration-300" href="#">Privacy</a>
<a className="hover:text-white transition-colors duration-300" href="#">Terms</a>
<a className="hover:text-white transition-colors duration-300" href="#">Security</a>
<a className="hover:text-white transition-colors duration-300" href="#">Status</a>
</div>
</div>
<div className="mt-10 flex items-center justify-between border-t border-zinc-800 pt-10">
<p className="text-sm text-zinc-500">© <span id="year">2025</span> SendPush Inc. All rights reserved.</p>
<div className="flex items-center gap-4">
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 hover:scale-110 transition-all duration-300" href="#">
<span className="iconify text-xl" data-icon="simple-icons:twitter"></span>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 hover:scale-110 transition-all duration-300" href="#">
<span className="iconify text-xl" data-icon="simple-icons:github"></span>
</a>
<a className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-zinc-800 text-zinc-500 hover:text-white hover:border-zinc-700 hover:scale-110 transition-all duration-300" href="#">
<span className="iconify text-xl" data-icon="simple-icons:linkedin"></span>
</a>
</div>
</div>
</div>
</footer>




    </>
  );
}
