import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#e75d25',
50: '#fdf6f3',
100: '#fbece6',
200: '#f8d5c8',
300: '#f3b49e',
400: '#ed8664',
500: '#e75d25', // Primary
600: '#d14616',
700: '#a63311',
800: '#862b14',
900: '#6d2614',
950: '#3a1008',
},
base: {
bg: '#050505', // Deep black
card: '#0a0a0a',
border: '#1f1f1f',
text: '#ededed',
}
},
fontFamily: {
sans: ['Inter', 'sans-serif'],
display: ['Manrope', 'sans-serif'],
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 1s ease-out forwards',
'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
},
keyframes: {
fadeIn: {
'0%': { opacity: '0' },
'100%': { opacity: '1' },
},
slideUp: {
'0%': { opacity: '0', transform: 'translateY(20px)' },
'100%': { opacity: '1', transform: 'translateY(0)' },
}
}
}
}
}



        // Initialize Icons
        lucide.createIcons({
            attrs: {
                'stroke-width': 1.5,
                'class': "lucide"
            }
        });

        // Initialize Chart.js
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('heroChart').getContext('2d');
            
            // Gradient for chart area
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(231, 93, 37, 0.2)'); // Brand color low opacity
            gradient.addColorStop(1, 'rgba(231, 93, 37, 0)');

            const chart = new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'],
                    datasets: [{
                        label: 'Engagement',
                        data: [65, 78, 62, 89, 82, 95, 110],
                        borderColor: '#e75d25', // Brand color
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointBackgroundColor: '#050505',
                        pointBorderColor: '#e75d25',
                        pointHoverBackgroundColor: '#e75d25',
                        pointHoverBorderColor: '#fff',
                        fill: true,
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: 'rgba(10, 10, 10, 0.9)',
                            titleColor: '#fff',
                            bodyColor: '#ccc',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderWidth: 1,
                            padding: 10,
                            displayColors: false,
                        }
                    },
                    scales: {
                        x: {
                            grid: {
                                display: false,
                                drawBorder: false
                            },
                            ticks: {
                                color: '#555',
                                font: {
                                    family: "'Inter', sans-serif",
                                    size: 10
                                }
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.03)',
                                borderDash: [5, 5],
                                drawBorder: false
                            },
                            ticks: {
                                display: false
                            }
                        }
                    },
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed top-0 left-0 w-full h-full overflow-hidden pointer-events-none z-0">
<div className="absolute top-[-10%] left-[50%] -translate-x-1/2 w-[800px] h-[600px] bg-brand-500/5 blur-[120px] rounded-full opacity-60 mix-blend-screen"></div>
<div className="absolute bottom-[-10%] right-[-10%] w-[600px] h-[600px] bg-brand-900/10 blur-[100px] rounded-full opacity-40"></div>
</div>

<nav className="fixed top-0 w-full z-50 glass border-b border-white/5 transition-all duration-300">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">

<a className="flex items-center gap-2 group" href="#">
<div className="w-8 h-8 rounded-lg bg-white/5 border border-white/10 flex items-center justify-center group-hover:border-brand-500/50 transition-colors duration-300">
<span className="font-display font-semibold text-brand-500 tracking-tighter">N</span>
</div>
<span className="font-display font-medium text-lg tracking-tight text-white group-hover:text-white/90">NEXUS</span>
</a>

<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200" href="#about">About us</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200" href="#services">Services</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200" href="#courses">Courses</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors duration-200" href="#contact">Contact us</a>
</div>

<div className="flex items-center gap-4">
<button className="hidden md:flex items-center gap-2 px-4 py-2 rounded-full border border-white/10 bg-white/5 hover:bg-white/10 hover:border-brand-500/30 text-xs font-medium text-white transition-all duration-300 group">
<span>Client Login</span>
<i className="w-3 h-3 text-white/40 group-hover:text-brand-400 transition-colors" data-lucide="arrow-right"></i>
</button>
<button className="md:hidden text-white/70 hover:text-white">
<i className="w-6 h-6" data-lucide="menu"></i>
</button>
</div>
</div>
</nav>
<main className="relative z-10 pt-32 pb-20">

<section className="max-w-7xl mx-auto px-6 lg:px-8 flex flex-col items-center text-center">

<div className="animate-fade-in opacity-0 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-brand-500/10 border border-brand-500/20 mb-8 backdrop-blur-sm">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-brand-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-brand-500"></span>
</span>
<span className="text-xs font-medium text-brand-300 tracking-wide uppercase">New Courses Available</span>
</div>

<h1 className="animate-slide-up opacity-0 max-w-4xl mx-auto font-display font-light text-5xl sm:text-6xl md:text-7xl lg:text-8xl tracking-tighter leading-[1.1] mb-8 text-white">
                Intelligence for the <br/>
<span className="brand-gradient-text font-normal">Modern Enterprise.</span>
</h1>

<p className="animate-slide-up opacity-0 delay-100 max-w-2xl mx-auto text-lg text-white/60 font-light leading-relaxed mb-10">
                Nexus bridges the gap between ambition and capability. We provide elite digital services and specialized courses to accelerate your organization's growth.
            </p>

<div className="animate-slide-up opacity-0 delay-200 flex flex-col sm:flex-row items-center gap-4 mb-20">
<a className="h-12 px-8 rounded-full bg-[#ededed] text-black font-medium text-sm flex items-center justify-center hover:bg-white transition-all duration-200 shadow-[0_0_20px_rgba(255,255,255,0.1)]" href="#courses">
                    Explore Courses
                </a>
<a className="h-12 px-8 rounded-full bg-white/5 border border-white/10 text-[#ededed] font-medium text-sm flex items-center justify-center hover:bg-white/10 hover:border-white/20 transition-all duration-200" href="#services">
                    View Services
                </a>
</div>

<div className="animate-slide-up opacity-0 delay-300 w-full max-w-5xl mx-auto relative group">

<div className="absolute -inset-1 bg-gradient-to-r from-brand-500/20 via-white/5 to-brand-500/20 rounded-2xl blur-2xl opacity-20 group-hover:opacity-30 transition duration-500"></div>

<div className="relative rounded-xl border border-white/10 bg-[#0a0a0a] shadow-2xl overflow-hidden">

<div className="h-12 border-b border-white/5 bg-white/[0.02] flex items-center justify-between px-4">
<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
<div className="w-3 h-3 rounded-full bg-white/10"></div>
</div>
<div className="flex items-center gap-2 px-3 py-1 rounded bg-black/50 border border-white/5">
<i className="w-3 h-3 text-white/30" data-lucide="lock"></i>
<span className="text-[10px] text-white/30 font-mono">nexus-analytics.app</span>
</div>
<div className="w-4"></div>
</div>

<div className="p-6 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-6 bg-grid">

<div className="lg:col-span-1 space-y-4">

<div className="p-4 rounded-lg bg-[#0f0f0f] border border-white/5 hover:border-brand-500/20 transition-colors group/card">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-white/40 font-medium">Total Revenue</span>
<i className="w-4 h-4 text-brand-500" data-lucide="trending-up"></i>
</div>
<div className="text-2xl font-display font-medium text-white mb-1">$124,500.00</div>
<div className="text-xs text-brand-400 flex items-center gap-1">
<span>+12.5%</span>
<span className="text-white/30">vs last month</span>
</div>
</div>

<div className="p-4 rounded-lg bg-[#0f0f0f] border border-white/5 hover:border-brand-500/20 transition-colors">
<div className="flex items-center justify-between mb-2">
<span className="text-xs text-white/40 font-medium">Active Students</span>
<i className="w-4 h-4 text-white/20" data-lucide="users"></i>
</div>
<div className="text-2xl font-display font-medium text-white mb-1">2,845</div>
<div className="text-xs text-brand-400 flex items-center gap-1">
<span>+8.2%</span>
<span className="text-white/30">new enrollment</span>
</div>
</div>

<div className="p-4 rounded-lg bg-[#0f0f0f] border border-white/5">
<div className="text-xs text-white/40 font-medium mb-4">Course Completion</div>
<div className="space-y-3">
<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-white/70">Advanced React Patterns</span>
<span className="text-white/40">78%</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-brand-500 w-[78%] rounded-full"></div>
</div>
</div>
<div>
<div className="flex justify-between text-[10px] mb-1">
<span className="text-white/70">System Design</span>
<span className="text-white/40">45%</span>
</div>
<div className="h-1 w-full bg-white/5 rounded-full overflow-hidden">
<div className="h-full bg-white/20 w-[45%] rounded-full"></div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-2 p-4 rounded-lg bg-[#0f0f0f] border border-white/5 flex flex-col">
<div className="flex items-center justify-between mb-6">
<div>
<h3 className="text-sm text-white font-medium">Performance Analytics</h3>
<p className="text-xs text-white/40 mt-1">Engagement metrics over time</p>
</div>
<div className="flex gap-2">
<span className="px-2 py-1 rounded bg-brand-500/10 text-brand-400 text-[10px] font-medium border border-brand-500/20">Live</span>
<span className="px-2 py-1 rounded bg-white/5 text-white/40 text-[10px] border border-white/5">Weekly</span>
</div>
</div>
<div className="flex-1 relative w-full h-64">
<canvas id="heroChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 border-t border-white/5 pt-10 w-full">
<p className="text-center text-xs text-white/30 uppercase tracking-widest mb-8">Trusted by forward-thinking teams</p>
<div className="flex flex-wrap justify-center items-center gap-12 opacity-40 grayscale hover:grayscale-0 hover:opacity-100 transition-all duration-500">

<span className="text-xl font-display font-bold tracking-tighter text-white">ACME<span className="text-brand-500">.</span></span>
<span className="text-xl font-display font-bold tracking-tighter text-white">VORTEX</span>
<span className="text-xl font-display font-bold tracking-tighter text-white">KINETIC</span>
<span className="text-xl font-display font-bold tracking-tighter text-white">PULSE</span>
<span className="text-xl font-display font-bold tracking-tighter text-white">ECHO</span>
</div>
</div>
</section>

<section className="py-24 sm:py-32 relative" id="about">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid md:grid-cols-2 gap-16 items-center">
<div>
<h2 className="font-display font-light text-3xl sm:text-4xl tracking-tight text-white mb-6">
                            Redefining the standard of <span className="text-brand-500">digital excellence.</span>
</h2>
<div className="space-y-6 text-white/60 font-light">
<p>
                                At Nexus, we believe that true mastery comes from the intersection of deep knowledge and practical application. We started as a small consultancy and grew into a global education powerhouse.
                            </p>
<p>
                                Our mission is simple: to equip professionals and enterprises with the tools, strategies, and skills needed to navigate the complexities of the digital age.
                            </p>
</div>
<div className="mt-8 grid grid-cols-2 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-display font-normal text-white mb-1">10k+</div>
<div className="text-sm text-white/40">Students Trained</div>
</div>
<div>
<div className="text-3xl font-display font-normal text-white mb-1">98%</div>
<div className="text-sm text-white/40">Satisfaction Rate</div>
</div>
</div>
</div>
<div className="relative">
<div className="absolute inset-0 bg-brand-500/20 blur-[80px] rounded-full opacity-20"></div>
<div className="relative rounded-2xl border border-white/10 bg-[#0a0a0a] p-1 overflow-hidden">
<div className="aspect-square bg-[#0f0f0f] rounded-xl overflow-hidden relative">

<div className="absolute inset-0 opacity-20" style={{backgroundImage: 'radial-gradient(#e75d25 1px, transparent 1px)', backgroundSize: '24px 24px'}}></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="w-32 h-32 rounded-full border border-brand-500/30 flex items-center justify-center animate-pulse-slow">
<div className="w-24 h-24 rounded-full border border-brand-500/50 flex items-center justify-center">
<i className="w-12 h-12 text-brand-500" data-lucide="aperture"></i>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808] border-y border-white/5" id="services">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="text-center max-w-2xl mx-auto mb-16">
<h2 className="font-display font-light text-3xl sm:text-4xl tracking-tight text-white mb-4">Premium Services</h2>
<p className="text-white/50">Tailored solutions to elevate your business infrastructure and strategy.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="md:col-span-2 p-8 rounded-2xl glass-card hover:border-brand-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
<i className="w-6 h-6 text-brand-500" data-lucide="bar-chart-2"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Strategic Consulting</h3>
<p className="text-white/50 text-sm leading-relaxed max-w-md">
                            Data-driven decision making frameworks implementation. We analyze your market position and optimize your operational efficiency.
                        </p>
</div>

<div className="p-8 rounded-2xl glass-card hover:border-brand-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="code-2"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Custom Development</h3>
<p className="text-white/50 text-sm leading-relaxed">
                            Bespoke software solutions built on modern tech stacks tailored to your specific needs.
                        </p>
</div>

<div className="p-8 rounded-2xl glass-card hover:border-brand-500/30 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-white/5 flex items-center justify-center mb-6 group-hover:bg-white/10 transition-colors">
<i className="w-6 h-6 text-white" data-lucide="shield-check"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Security Audits</h3>
<p className="text-white/50 text-sm leading-relaxed">
                            Comprehensive vulnerability assessment and penetration testing for your infrastructure.
                        </p>
</div>

<div className="md:col-span-2 p-8 rounded-2xl glass-card hover:border-brand-500/30 transition-all duration-300 group relative overflow-hidden">
<div className="absolute right-0 top-0 w-64 h-full bg-gradient-to-l from-brand-900/10 to-transparent"></div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-brand-500/10 flex items-center justify-center mb-6 group-hover:bg-brand-500/20 transition-colors">
<i className="w-6 h-6 text-brand-500" data-lucide="zap"></i>
</div>
<h3 className="text-xl text-white font-medium mb-3">Performance Optimization</h3>
<p className="text-white/50 text-sm leading-relaxed max-w-md">
                                Enhance the speed and reliability of your digital products. From database tuning to frontend latency reduction.
                            </p>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 relative" id="courses">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
<div>
<h2 className="font-display font-light text-3xl sm:text-4xl tracking-tight text-white mb-4">Curated Courses</h2>
<p className="text-white/50 max-w-md">Master the skills that define the future of technology and business.</p>
</div>
<a className="inline-flex items-center gap-2 text-sm text-brand-400 hover:text-brand-300 transition-colors" href="#">
                        View all curriculum <i className="w-4 h-4" data-lucide="arrow-right"></i>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">

<article className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-20 h-20 border border-white/10 rounded rotate-45 group-hover:rotate-90 transition-transform duration-700"></div>
<div className="absolute w-16 h-16 border border-brand-500/20 rounded rotate-12 group-hover:-rotate-12 transition-transform duration-700"></div>
</div>
<div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] text-white/80 uppercase tracking-wide">Beginner</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">Data Science Fundamentals</h3>
<p className="text-sm text-white/50 mb-6 line-clamp-2">Learn to analyze data, build models, and drive business insights using Python and SQL.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-white/40">
<i className="w-3 h-3" data-lucide="clock"></i> 8 Weeks
                                </div>
<span className="text-sm font-medium text-white">$499</span>
</div>
</div>
</article>

<article className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 group-hover:bg-white/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<div className="grid grid-cols-3 gap-2 opacity-20">
<div className="w-4 h-4 bg-white rounded-full"></div>
<div className="w-4 h-4 bg-white rounded-full"></div>
<div className="w-4 h-4 bg-white rounded-full"></div>
<div className="w-4 h-4 bg-white rounded-full"></div>
<div className="w-4 h-4 bg-brand-500 rounded-full"></div>
<div className="w-4 h-4 bg-white rounded-full"></div>
</div>
</div>
<div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] text-white/80 uppercase tracking-wide">Advanced</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">System Architecture</h3>
<p className="text-sm text-white/50 mb-6 line-clamp-2">Design scalable, reliable, and maintainable software systems for enterprise scale.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-white/40">
<i className="w-3 h-3" data-lucide="clock"></i> 12 Weeks
                                </div>
<span className="text-sm font-medium text-white">$799</span>
</div>
</div>
</article>

<article className="group relative bg-[#0a0a0a] border border-white/10 rounded-xl overflow-hidden hover:-translate-y-1 transition-transform duration-300">
<div className="h-48 bg-[#111] relative overflow-hidden">
<div className="absolute inset-0 bg-brand-500/5 group-hover:bg-brand-500/10 transition-colors"></div>
<div className="absolute inset-0 flex items-center justify-center">
<i className="w-16 h-16 text-white/10 group-hover:text-brand-500/20 transition-colors duration-500" data-lucide="layers"></i>
</div>
<div className="absolute top-4 left-4 px-2 py-1 bg-black/60 backdrop-blur border border-white/10 rounded text-[10px] text-white/80 uppercase tracking-wide">Intermediate</div>
</div>
<div className="p-6">
<h3 className="text-lg font-medium text-white mb-2 group-hover:text-brand-400 transition-colors">UI/UX Strategy</h3>
<p className="text-sm text-white/50 mb-6 line-clamp-2">Creating user-centric products that align with business goals and brand identity.</p>
<div className="flex items-center justify-between pt-4 border-t border-white/5">
<div className="flex items-center gap-2 text-xs text-white/40">
<i className="w-3 h-3" data-lucide="clock"></i> 6 Weeks
                                </div>
<span className="text-sm font-medium text-white">$349</span>
</div>
</div>
</article>
</div>
</div>
</section>

<section className="py-20" id="contact">
<div className="max-w-4xl mx-auto px-6">
<div className="relative rounded-3xl overflow-hidden p-10 md:p-16 text-center border border-white/10 bg-gradient-to-b from-[#111] to-[#050505]">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-64 h-64 bg-brand-500/10 blur-[80px] rounded-full"></div>
<div className="relative z-10">
<h2 className="font-display font-light text-3xl sm:text-5xl tracking-tight text-white mb-6">Ready to transform?</h2>
<p className="text-white/50 text-lg mb-10 max-w-xl mx-auto">Join the leading enterprises and professionals building the future with Nexus.</p>
<form className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
<input className="flex-1 bg-white/5 border border-white/10 rounded-full px-6 py-3 text-sm text-white focus:outline-none focus:border-brand-500/50 focus:ring-1 focus:ring-brand-500/50 transition-all placeholder:text-white/20" placeholder="Enter your email address" type="email"/>
<button className="px-8 py-3 rounded-full bg-brand-500 hover:bg-brand-400 text-white text-sm font-medium transition-colors shadow-lg shadow-brand-500/20" type="submit">
                                Get Started
                            </button>
</form>
<p className="mt-4 text-xs text-white/30">14-day free trial for teams. No credit card required.</p>
</div>
</div>
</div>
</section>
</main>

<footer className="border-t border-white/10 bg-[#020202] pt-16 pb-12">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-12 mb-16">
<div className="col-span-2 lg:col-span-2">
<a className="flex items-center gap-2 mb-6" href="#">
<div className="w-6 h-6 rounded bg-white/10 flex items-center justify-center">
<span className="font-display font-semibold text-brand-500 text-xs">N</span>
</div>
<span className="font-display font-medium text-white">NEXUS</span>
</a>
<p className="text-white/40 text-sm leading-relaxed max-w-xs mb-8">
                        Empowering the next generation of digital leaders through intelligence, education, and strategy.
                    </p>
<div className="flex gap-4">
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="twitter"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="github"></i></a>
<a className="text-white/40 hover:text-white transition-colors" href="#"><i className="w-4 h-4" data-lucide="linkedin"></i></a>
</div>
</div>
<div>
<h4 className="font-medium text-white text-sm mb-6">Product</h4>
<ul className="space-y-4 text-sm text-white/40">
<li><a className="hover:text-brand-400 transition-colors" href="#">Features</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Integrations</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Enterprise</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Changelog</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white text-sm mb-6">Resources</h4>
<ul className="space-y-4 text-sm text-white/40">
<li><a className="hover:text-brand-400 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">API Reference</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Community</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Help Center</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-white text-sm mb-6">Company</h4>
<ul className="space-y-4 text-sm text-white/40">
<li><a className="hover:text-brand-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-brand-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="pt-8 border-t border-white/5 flex flex-col md:flex-row items-center justify-between gap-4">
<p className="text-xs text-white/20">© 2023 Nexus Inc. All rights reserved.</p>
<div className="flex gap-8 text-xs text-white/20">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
