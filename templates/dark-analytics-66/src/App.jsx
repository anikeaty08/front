import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
darkMode: 'class',
theme: {
extend: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
colors: {
gray: {
850: '#1a1a1a',
900: '#111111',
950: '#0a0a0a',
}
},
animation: {
'fade-in': 'fadeIn 0.6s ease-out forwards',
'slide-up': 'slideUp 0.8s cubic-bezier(0.16, 1, 0.3, 1) forwards',
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



        // Chart Data Generation
        function generateData(count, min, max, trend) {
            let data = [];
            let val = (min + max) / 2;
            for (let i = 0; i < count; i++) {
                val += (Math.random() - 0.5) * (max - min) * 0.4;
                val += Math.sin(i * 0.3) * ((max - min) * 0.25);
                if (trend) val += i * trend;
                val = Math.max(min, Math.min(max, val));
                data.push(val);
            }
            return data;
        }

        const labels = Array.from({length: 45}, (_, i) => i + 1);
        const clicksCurrent = generateData(45, 50, 200, 0.5);
        const clicksPrev = generateData(45, 30, 150, 0.2);
        const impCurrent = generateData(45, 5000, 16000, 50);
        const impPrev = generateData(45, 4000, 12000, 20);

        // Initialize Chart.js
        const ctx = document.getElementById('performanceChart').getContext('2d');
        
        // Create Gradients
        let blueGradient = ctx.createLinearGradient(0, 0, 0, 400);
        blueGradient.addColorStop(0, 'rgba(59, 130, 246, 0.15)');
        blueGradient.addColorStop(1, 'rgba(59, 130, 246, 0)');

        let purpleGradient = ctx.createLinearGradient(0, 0, 0, 400);
        purpleGradient.addColorStop(0, 'rgba(168, 85, 247, 0.15)');
        purpleGradient.addColorStop(1, 'rgba(168, 85, 247, 0)');

        Chart.defaults.font.family = 'Inter';
        Chart.defaults.color = '#525252';

        new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [
                    {
                        label: 'Klicks (Aktuell)',
                        data: clicksCurrent,
                        borderColor: '#3b82f6', // Blue 500
                        backgroundColor: blueGradient,
                        borderWidth: 2,
                        tension: 0.4, // Wellenförmig
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: '#3b82f6',
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2,
                        yAxisID: 'y',
                        order: 1
                    },
                    {
                        label: 'Klicks (Vorherig)',
                        data: clicksPrev,
                        borderColor: '#93c5fd', // Lighter Blue
                        borderWidth: 2,
                        borderDash: [5, 5], // Gestrichelt
                        tension: 0.4,
                        fill: false,
                        pointRadius: 0,
                        pointHoverRadius: 4,
                        yAxisID: 'y',
                        order: 3
                    },
                    {
                        label: 'Impressionen (Aktuell)',
                        data: impCurrent,
                        borderColor: '#a855f7', // Purple 500
                        backgroundColor: purpleGradient,
                        borderWidth: 2,
                        tension: 0.4, // Wellenförmig
                        fill: true,
                        pointRadius: 0,
                        pointHoverRadius: 6,
                        pointHoverBackgroundColor: '#a855f7',
                        pointHoverBorderColor: '#fff',
                        pointHoverBorderWidth: 2,
                        yAxisID: 'y1',
                        order: 2
                    },
                    {
                        label: 'Impressionen (Vorherig)',
                        data: impPrev,
                        borderColor: '#d8b4fe', // Lighter Purple
                        borderWidth: 2,
                        borderDash: [5, 5], // Gestrichelt
                        tension: 0.4,
                        fill: false,
                        pointRadius: 0,
                        pointHoverRadius: 4,
                        yAxisID: 'y1',
                        order: 4
                    }
                ]
            },
            options: {
                responsive: true,
                maintainAspectRatio: false,
                interaction: {
                    mode: 'index',
                    intersect: false,
                },
                plugins: {
                    legend: {
                        display: false
                    },
                    tooltip: {
                        backgroundColor: 'rgba(23, 23, 23, 0.95)', 
                        titleColor: '#fff',
                        bodyColor: '#d4d4d4', 
                        padding: 12,
                        cornerRadius: 8,
                        borderColor: 'rgba(255,255,255,0.1)',
                        borderWidth: 1,
                        displayColors: true,
                        boxWidth: 8,
                        boxHeight: 8,
                        usePointStyle: true,
                        callbacks: {
                            label: function(context) {
                                let label = context.dataset.label || '';
                                if (label) {
                                    label += ': ';
                                }
                                if (context.parsed.y !== null) {
                                    label += new Intl.NumberFormat('de-DE').format(context.parsed.y.toFixed(0));
                                }
                                return label;
                            }
                        }
                    }
                },
                scales: {
                    x: {
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)',
                            drawBorder: false,
                        },
                        ticks: {
                            color: '#737373',
                            font: { size: 11 },
                            maxTicksLimit: 12
                        }
                    },
                    y: {
                        type: 'linear',
                        display: true,
                        position: 'left',
                        grid: {
                            color: 'rgba(255, 255, 255, 0.03)',
                            drawBorder: false,
                        },
                        ticks: {
                            color: '#737373',
                            font: { size: 11 }
                        }
                    },
                    y1: {
                        type: 'linear',
                        display: true,
                        position: 'right',
                        grid: {
                            drawOnChartArea: false,
                            drawBorder: false,
                        },
                        ticks: {
                            color: '#737373',
                            font: { size: 11 },
                            callback: function(value) {
                                return value >= 1000 ? (value/1000).toFixed(0) + 'k' : value;
                            }
                        }
                    }
                }
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 pointer-events-none">
<div className="absolute top-[-10%] left-[20%] w-[30%] h-[30%] bg-blue-600/10 rounded-full blur-[120px]"></div>
<div className="absolute top-[10%] right-[10%] w-[25%] h-[25%] bg-purple-600/10 rounded-full blur-[120px]"></div>
<div className="absolute inset-0 bg-grid-pattern opacity-10"></div>
</div>

<nav className="sticky top-0 z-50 border-b border-white/5 bg-gray-950/80 backdrop-blur-md">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-2 group" href="#">
<div className="w-6 h-6 rounded bg-gradient-to-br from-blue-600 to-indigo-700 flex items-center justify-center shadow-lg shadow-blue-500/20">
<iconify-icon className="text-white text-base" icon="solar:chart-square-linear"></iconify-icon>
</div>
<span className="text-sm font-semibold tracking-tight text-white/90">Search Console</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-3 py-1.5 text-xs font-medium text-white/90 bg-white/5 rounded-md transition-colors" href="#">Leistung</a>
<a className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">URL-Prüfung</a>
<a className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Abdeckung</a>
<a className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors" href="#">Sitemaps</a>
</div>
</div>
<div className="flex items-center gap-3">
<div className="hidden sm:flex items-center gap-2 px-2 py-1 rounded-md bg-white/5 border border-white/5">
<div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse"></div>
<span className="text-xs font-medium text-neutral-400">beispiel.de</span>
</div>
<div className="w-px h-4 bg-white/10 mx-1"></div>
<button className="flex items-center gap-2 text-xs font-medium text-neutral-400 hover:text-white transition-colors">
<div className="w-6 h-6 rounded-full bg-neutral-800 border border-white/10 flex items-center justify-center">
<span className="text-[10px] font-semibold">JD</span>
</div>
</button>
</div>
</div>
</nav>
<main className="max-w-7xl mx-auto px-6 pt-6 pb-20 animate-slide-up relative z-10">

<div className="mb-8 rounded-lg bg-blue-500/10 border border-blue-500/20 p-4 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
<div className="flex items-start gap-3">
<iconify-icon className="text-blue-400 text-xl mt-0.5 sm:mt-0" icon="solar:info-circle-linear"></iconify-icon>
<div className="text-sm text-blue-200/90 leading-relaxed">
<span className="font-medium text-blue-100">Neue Funktion:</span> Sie können jetzt mit der rechten Maustaste auf das Diagramm klicken, um benutzerdefinierte Anmerkungen hinzuzufügen. 
                    <a className="underline underline-offset-2 hover:text-white ml-1" href="#">Mehr erfahren</a>
</div>
</div>
<button className="px-4 py-1.5 text-xs font-medium text-blue-100 hover:text-white hover:bg-blue-500/20 rounded transition-colors whitespace-nowrap">
                Schließen
            </button>
</div>

<div className="flex flex-col sm:flex-row items-center justify-between gap-4 mb-6">
<div className="flex items-center gap-2">
<div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:calendar-date-linear"></iconify-icon>
                    Letzte 3 Monate
                </div>
<div className="px-3 py-1.5 rounded-md bg-white/5 border border-white/10 text-xs font-medium text-neutral-300 flex items-center gap-2 hover:bg-white/10 transition-colors cursor-pointer">
<iconify-icon className="text-neutral-500 text-sm" icon="solar:filter-linear"></iconify-icon>
                    Neueste zuerst
                </div>
</div>
<div className="flex items-center gap-2">
<button className="px-3 py-1.5 text-xs font-medium text-neutral-400 hover:text-white transition-colors">Exportieren</button>
<div className="w-px h-4 bg-white/10"></div>
<div className="relative group">
<button className="px-3 py-1.5 text-xs font-medium text-white bg-white/5 border border-white/10 rounded-md flex items-center gap-2 hover:bg-white/10 transition-colors">
                        Täglich
                        <iconify-icon className="text-neutral-500 text-sm" icon="solar:alt-arrow-down-linear"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mb-6">

<div className="glass-card-active-blue rounded-xl p-5 relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.01]">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<input checked="" className="custom-checkbox text-blue-500" type="checkbox"/>
<span className="text-sm font-medium text-blue-200">Klicks insgesamt</span>
</div>
<iconify-icon className="text-blue-400/50 hover:text-blue-400 transition-colors text-base" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">9.207</div>
<div className="text-xs text-blue-300/70 font-medium mt-1">Letzte 3 Monate</div>
<div className="text-xs text-blue-400/50 mt-4 flex items-center justify-between">
<span>5.911</span>
<span className="uppercase text-[10px] tracking-wider opacity-70">Vorherige 3 Monate</span>
</div>
</div>
</div>

<div className="glass-card-active-purple rounded-xl p-5 relative overflow-hidden group cursor-pointer transition-all hover:scale-[1.01]">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<input checked="" className="custom-checkbox text-purple-500" type="checkbox"/>
<span className="text-sm font-medium text-purple-200">Impressionen insgesamt</span>
</div>
<iconify-icon className="text-purple-400/50 hover:text-purple-400 transition-colors text-base" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-white">691.885</div>
<div className="text-xs text-purple-300/70 font-medium mt-1">Letzte 3 Monate</div>
<div className="text-xs text-purple-400/50 mt-4 flex items-center justify-between">
<span>476.152</span>
<span className="uppercase text-[10px] tracking-wider opacity-70">Vorherige 3 Monate</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<input className="custom-checkbox text-neutral-500" type="checkbox"/>
<span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors">Durchschn. CTR</span>
</div>
<iconify-icon className="text-neutral-600 hover:text-neutral-400 transition-colors text-base" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-neutral-300">1,3%</div>
<div className="text-xs text-neutral-500 font-medium mt-1">Letzte 3 Monate</div>
<div className="text-xs text-neutral-600 mt-4 flex items-center justify-between">
<span>1,2%</span>
<span className="uppercase text-[10px] tracking-wider opacity-70">Vorherige 3 Monate</span>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-5 relative overflow-hidden group cursor-pointer hover:bg-white/[0.02] transition-colors">
<div className="flex justify-between items-start mb-3">
<div className="flex items-center gap-2">
<input className="custom-checkbox text-neutral-500" type="checkbox"/>
<span className="text-sm font-medium text-neutral-400 group-hover:text-neutral-300 transition-colors">Durchschn. Position</span>
</div>
<iconify-icon className="text-neutral-600 hover:text-neutral-400 transition-colors text-base" icon="solar:question-circle-linear"></iconify-icon>
</div>
<div className="flex flex-col gap-1">
<div className="text-3xl font-semibold tracking-tight text-neutral-300">11,6</div>
<div className="text-xs text-neutral-500 font-medium mt-1">Letzte 3 Monate</div>
<div className="text-xs text-neutral-600 mt-4 flex items-center justify-between">
<span>22,5</span>
<span className="uppercase text-[10px] tracking-wider opacity-70">Vorherige 3 Monate</span>
</div>
</div>
</div>
</div>

<div className="glass-card rounded-xl p-6 border border-white/10 relative">
<div className="absolute top-6 left-6 flex items-center gap-6 pointer-events-none z-10">
<div className="flex items-center gap-2">
<div className="w-8 h-0.5 bg-blue-500 rounded-full"></div>
<span className="text-xs font-medium text-neutral-400">Klicks (Aktuell)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-0.5 bg-blue-300/50 border-t border-blue-300/50 border-dashed"></div>
<span className="text-xs font-medium text-neutral-500">Klicks (Vorherig)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-0.5 bg-purple-500 rounded-full"></div>
<span className="text-xs font-medium text-neutral-400">Impressionen (Aktuell)</span>
</div>
<div className="flex items-center gap-2">
<div className="w-8 h-0.5 bg-purple-300/50 border-t border-purple-300/50 border-dashed"></div>
<span className="text-xs font-medium text-neutral-500">Impressionen (Vorherig)</span>
</div>
</div>
<div className="relative h-[400px] w-full mt-4">
<canvas id="performanceChart"></canvas>
</div>
</div>
</main>


    </>
  );
}
