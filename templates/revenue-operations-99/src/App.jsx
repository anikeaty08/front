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
manrope: ['Manrope', 'sans-serif'],
},
colors: {
lime: {
400: '#a3e635',
500: '#84cc16',
600: '#65a30d',
}
},
animation: {
'fade-in': 'fadeIn 0.8s ease-out forwards',
'slide-up': 'slideUp 0.8s ease-out forwards',
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



            !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
        


        // Chart Configuration
        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('revenueChart').getContext('2d');
            
            // Create gradient
            const gradient = ctx.createLinearGradient(0, 0, 0, 300);
            gradient.addColorStop(0, 'rgba(132, 204, 22, 0.4)'); // Lime 500
            gradient.addColorStop(1, 'rgba(132, 204, 22, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'],
                    datasets: [{
                        label: 'Projected Revenue',
                        data: [1.2, 1.9, 2.4, 3.1, 4.2, 5.8, 6.9],
                        borderColor: '#84cc16', // Lime 500
                        backgroundColor: gradient,
                        borderWidth: 2,
                        pointBackgroundColor: '#050505',
                        pointBorderColor: '#84cc16',
                        pointBorderWidth: 2,
                        pointRadius: 4,
                        pointHoverRadius: 6,
                        fill: true,
                        tension: 0.4
                    },
                    {
                        label: 'Previous Period',
                        data: [0.8, 1.2, 1.5, 1.9, 2.2, 2.6, 3.1],
                        borderColor: '#333',
                        borderWidth: 2,
                        pointRadius: 0,
                        fill: false,
                        borderDash: [5, 5],
                        tension: 0.4
                    }]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    interaction: {
                        intersect: false,
                        mode: 'index',
                    },
                    plugins: {
                        legend: {
                            display: false
                        },
                        tooltip: {
                            backgroundColor: '#171717',
                            titleColor: '#fff',
                            titleFont: { family: 'Manrope', size: 13 },
                            bodyFont: { family: 'Inter', size: 12 },
                            padding: 12,
                            cornerRadius: 8,
                            displayColors: false,
                            callbacks: {
                                label: function(context) {
                                    return '$' + context.parsed.y + 'M';
                                }
                            }
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
                                font: { family: 'Inter', size: 11 }
                            }
                        },
                        y: {
                            grid: {
                                color: 'rgba(255, 255, 255, 0.04)',
                                borderDash: [5, 5],
                                drawBorder: false
                            },
                            ticks: {
                                color: '#555',
                                font: { family: 'Inter', size: 11 },
                                callback: function(value) {
                                    return '$' + value + 'M';
                                }
                            }
                        }
                    }
                }
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 left-0 w-full h-full -z-10 pointer-events-none">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="inzENTvhzS9plyop7Z6g"></div>

</div>

<nav className="fixed top-0 w-full z-50 border-b border-white/[0.06] bg-[#050505]/60 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2 group cursor-pointer">
<div className="h-8 w-8 rounded-lg bg-lime-500/10 flex items-center justify-center ring-1 ring-lime-500/20 group-hover:ring-lime-500/40 transition-all">
<iconify-icon className="text-lime-400 text-xl" icon="solar:graph-up-broken"></iconify-icon>
</div>
<span className="font-manrope font-semibold text-lg tracking-tight text-white">Kalypsso</span>
</div>
<div className="hidden md:flex items-center gap-8">
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Platform</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Solutions</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Changelog</a>
<a className="text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Pricing</a>
</div>
<div className="flex items-center gap-4">
<a className="hidden sm:block text-sm font-medium text-white/60 hover:text-white transition-colors" href="#">Log in</a>
<button className="group relative px-4 py-2 bg-lime-500 hover:bg-lime-400 text-black text-sm font-semibold rounded-lg transition-all duration-200 shadow-[0_0_20px_-5px_rgba(132,204,22,0.3)] hover:shadow-[0_0_25px_-5px_rgba(132,204,22,0.5)]">
<span className="relative z-10 flex items-center gap-2">
                        Get Demo
                        <iconify-icon className="text-lg" icon="solar:arrow-right-linear"></iconify-icon>
</span>
</button>
</div>
</div>
</nav>

<section className="relative z-10 pt-32 pb-24 lg:pt-48 lg:pb-32">
<div className="max-w-7xl mx-auto px-6">
<div className="flex flex-col items-center text-center max-w-4xl mx-auto mb-20">

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-lime-500/5 ring-1 ring-lime-500/20 text-lime-400 text-xs font-medium mb-8 animate-fade-in opacity-0" style={{animationDelay: '0.1s'}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-lime-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-lime-500"></span>
</span>
                    Kalypsso 3.0 is now available
                </div>

<h1 className="font-manrope text-5xl md:text-7xl font-light text-white leading-[1.1] tracking-tighter mb-8 animate-slide-up opacity-0" style={{animationDelay: '0.2s'}}>
                    Revenue Intelligence <br/>
<span className="text-transparent bg-clip-text bg-gradient-to-r from-lime-300 via-lime-400 to-emerald-400 font-normal">Synchronized.</span>
</h1>

<p className="text-lg text-white/60 max-w-2xl leading-relaxed mb-10 font-light animate-slide-up opacity-0" style={{animationDelay: '0.3s'}}>
                    Unify your GTM data stack. Predict pipeline velocity, automate attribution, and close deals faster with the world's first autonomous revenue engine.
                </p>

<div className="flex flex-col sm:flex-row items-center gap-4 animate-slide-up opacity-0" style={{animationDelay: '0.4s'}}>
<button className="h-12 px-8 rounded-xl bg-white text-black font-manrope font-semibold text-base hover:bg-gray-100 transition-colors flex items-center gap-2">
                        Start Free Trial
                    </button>
<button className="h-12 px-8 rounded-xl bg-white/[0.05] hover:bg-white/[0.1] border border-white/10 text-white font-manrope font-medium text-base transition-colors flex items-center gap-2 backdrop-blur-sm">
<iconify-icon className="text-xl" icon="solar:play-circle-linear"></iconify-icon>
                        Watch the 2 min demo
                    </button>
</div>
</div>

<div className="relative max-w-6xl mx-auto animate-slide-up opacity-0" style={{animationDelay: '0.6s'}}>

<div className="absolute -inset-1 bg-gradient-to-b from-lime-500/20 to-transparent rounded-3xl blur-2xl opacity-50"></div>
<div className="relative rounded-2xl bg-[#0A0A0A]/90 border border-white/[0.08] shadow-2xl overflow-hidden backdrop-blur-md">

<div className="border-b border-white/[0.06] p-4 flex items-center justify-between bg-white/[0.02]">
<div className="flex items-center gap-4">
<div className="flex gap-1.5">
<div className="w-3 h-3 rounded-full bg-red-500/20 border border-red-500/50"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500/20 border border-yellow-500/50"></div>
<div className="w-3 h-3 rounded-full bg-green-500/20 border border-green-500/50"></div>
</div>
<div className="h-4 w-px bg-white/10"></div>
<span className="text-xs font-medium text-white/40 font-manrope">Overview / Pipeline Q3</span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center gap-2 px-3 py-1.5 rounded-lg bg-white/[0.03] border border-white/[0.06]">
<iconify-icon className="text-white/40" icon="solar:calendar-linear"></iconify-icon>
<span className="text-xs text-white/60">This Quarter</span>
</div>
<div className="h-8 w-8 rounded-lg bg-lime-500 text-black flex items-center justify-center">
<iconify-icon className="text-lg" icon="solar:user-plus-linear"></iconify-icon>
</div>
</div>
</div>

<div className="p-6 md:p-8 grid lg:grid-cols-[340px_1fr] gap-8">

<div className="space-y-6">

<div>
<div className="flex items-center gap-2 mb-2">
<span className="text-sm font-medium text-white/50">Net Revenue Retention</span>
<iconify-icon className="text-white/20" icon="solar:info-circle-linear"></iconify-icon>
</div>
<div className="flex items-baseline gap-3">
<h3 className="text-5xl font-manrope font-light tracking-tighter text-white">124%</h3>
<span className="inline-flex items-center gap-1 text-sm font-medium text-lime-400 bg-lime-400/10 px-2 py-0.5 rounded-full border border-lime-400/20">
<iconify-icon icon="solar:arrow-right-up-linear"></iconify-icon>
                                        4.2%
                                    </span>
</div>
</div>

<div className="grid gap-4">
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-lime-500/30 transition-colors group">
<div className="flex justify-between items-start mb-2">
<div className="p-2 rounded-lg bg-white/[0.05] text-white/60 group-hover:text-lime-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:wallet-linear"></iconify-icon>
</div>
<span className="text-xs text-white/40">+12% vs last mo</span>
</div>
<div className="text-2xl font-manrope font-normal tracking-tight text-white mb-1">$4.82M</div>
<div className="text-xs font-medium text-white/40">Pipeline Value</div>
</div>
<div className="p-4 rounded-xl bg-white/[0.03] border border-white/[0.06] hover:border-lime-500/30 transition-colors group">
<div className="flex justify-between items-start mb-2">
<div className="p-2 rounded-lg bg-white/[0.05] text-white/60 group-hover:text-lime-400 transition-colors">
<iconify-icon className="text-xl" icon="solar:users-group-rounded-linear"></iconify-icon>
</div>
<span className="text-xs text-white/40">+8% vs last mo</span>
</div>
<div className="text-2xl font-manrope font-normal tracking-tight text-white mb-1">842</div>
<div className="text-xs font-medium text-white/40">Active Deals</div>
</div>
</div>

<div className="p-4 rounded-xl bg-gradient-to-br from-lime-500/10 to-transparent border border-lime-500/20">
<div className="flex items-start gap-3">
<iconify-icon className="text-lime-400 text-lg mt-0.5" icon="solar:magic-stick-3-linear"></iconify-icon>
<div>
<h4 className="text-sm font-semibold text-lime-100 mb-1">AI Forecast</h4>
<p className="text-xs text-lime-100/70 leading-relaxed">
                                            Based on current velocity, you are projected to exceed Q3 targets by <span className="text-white font-medium">14%</span>. Focus on Enterprise segment.
                                        </p>
</div>
</div>
</div>
</div>

<div className="bg-white/[0.02] border border-white/[0.06] rounded-xl p-6 relative">
<div className="flex items-center justify-between mb-6">
<h3 className="text-sm font-medium text-white/80">Revenue Velocity</h3>
<div className="flex gap-2">
<button className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 transition">
<iconify-icon icon="solar:download-minimalistic-linear"></iconify-icon>
</button>
<button className="p-1.5 rounded bg-white/10 text-white hover:bg-white/20 transition">
<iconify-icon icon="solar:menu-dots-linear"></iconify-icon>
</button>
</div>
</div>
<div className="h-[320px] w-full">
<canvas id="revenueChart"></canvas>
</div>
</div>
</div>
</div>
</div>

<div className="mt-20 pt-10 border-t border-white/[0.06] text-center animate-slide-up opacity-0" style={{animationDelay: '0.8s'}}>
<p className="text-sm text-white/30 font-medium mb-8">POWERING REVENUE TEAMS AT</p>
<div className="flex flex-wrap justify-center gap-x-12 gap-y-8 grayscale opacity-40">
<div className="text-xl font-bold font-manrope text-white">VORTEX</div>
<div className="text-xl font-bold font-manrope text-white">Acme Corp</div>
<div className="text-xl font-bold font-manrope text-white">Strata</div>
<div className="text-xl font-bold font-manrope text-white">Hyperion</div>
<div className="text-xl font-bold font-manrope text-white">Oasis</div>
</div>
</div>
</div>
</section>

<section className="py-24 bg-[#080808]/80 backdrop-blur-sm relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-3 gap-8">
<div className="p-8 rounded-2xl bg-[#0F0F0F]/80 border border-white/[0.06] hover:border-lime-500/20 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#151515] flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-white/70 group-hover:text-lime-400 transition-colors" icon="solar:database-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-medium text-white mb-3">Unified Data Layer</h3>
<p className="text-sm text-white/50 leading-relaxed">Connect CRM, marketing automation, and payment gateways into a single source of truth without engineering.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0F0F0F]/80 border border-white/[0.06] hover:border-lime-500/20 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#151515] flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-white/70 group-hover:text-lime-400 transition-colors" icon="solar:chart-2-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-medium text-white mb-3">Predictive Forecasting</h3>
<p className="text-sm text-white/50 leading-relaxed">Machine learning models that analyze deal sentiment and velocity to predict revenue with 94% accuracy.</p>
</div>
<div className="p-8 rounded-2xl bg-[#0F0F0F]/80 border border-white/[0.06] hover:border-lime-500/20 transition-all duration-300 group">
<div className="w-12 h-12 rounded-lg bg-[#151515] flex items-center justify-center mb-6 group-hover:bg-lime-500/10 transition-colors">
<iconify-icon className="text-2xl text-white/70 group-hover:text-lime-400 transition-colors" icon="solar:bolt-circle-linear"></iconify-icon>
</div>
<h3 className="text-xl font-manrope font-medium text-white mb-3">Real-time Automation</h3>
<p className="text-sm text-white/50 leading-relaxed">Trigger workflows based on usage data, intent signals, and deal stage changes instantly.</p>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/[0.06] bg-[#050505] pt-16 pb-12 relative z-10">
<div className="max-w-7xl mx-auto px-6">
<div className="grid md:grid-cols-4 gap-12 mb-16">
<div className="col-span-1 md:col-span-2">
<div className="flex items-center gap-2 mb-6">
<iconify-icon className="text-lime-500 text-xl" icon="solar:graph-up-broken"></iconify-icon>
<span className="font-manrope font-bold text-lg tracking-tight text-white">Kalypsso</span>
</div>
<p className="text-sm text-white/50 max-w-sm">The operating system for modern revenue teams. Predict, analyze, and optimize your growth engine.</p>
</div>
<div>
<h4 className="font-manrope font-medium text-white mb-4">Product</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-lime-400 transition-colors" href="#">Integration</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Intelligence</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Workflows</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Pricing</a></li>
</ul>
</div>
<div>
<h4 className="font-manrope font-medium text-white mb-4">Company</h4>
<ul className="space-y-3 text-sm text-white/50">
<li><a className="hover:text-lime-400 transition-colors" href="#">About</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Careers</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-lime-400 transition-colors" href="#">Contact</a></li>
</ul>
</div>
</div>
<div className="flex flex-col md:flex-row items-center justify-between pt-8 border-t border-white/[0.06] text-xs text-white/30">
<p>© 2024 Kalypsso Inc. All rights reserved.</p>
<div className="flex gap-6 mt-4 md:mt-0">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<a className="hover:text-white transition-colors" href="#">Security</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
