import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



tailwind.config = {
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
emerald: {
50: '#ecfdf5',
100: '#d1fae5',
200: '#a7f3d0',
300: '#6ee7b7',
400: '#34d399',
500: '#10b981',
600: '#059669',
700: '#047857',
800: '#065f46',
900: '#064e3b',
950: '#022c22',
}
}
}
}
}



        // --- State & UI Logic ---
        
        function switchTab(tabId) {
            // Hide all tabs
            document.querySelectorAll('.tab-content').forEach(el => el.classList.add('hidden'));
            
            // Show selected tab
            const target = document.getElementById(`tab-${tabId}`);
            if (target) target.classList.remove('hidden');

            // Update Tab Buttons Styles
            document.querySelectorAll('.tab-btn').forEach(btn => {
                btn.classList.remove('bg-emerald-800', 'text-white', 'shadow-inner', 'ring-1', 'ring-emerald-700');
                btn.classList.add('text-emerald-100', 'hover:bg-emerald-800', 'hover:text-white', 'border-transparent');
            });

            const activeBtn = document.getElementById(`tab-btn-${tabId}`);
            if (activeBtn) {
                activeBtn.classList.remove('text-emerald-100', 'hover:bg-emerald-800', 'hover:text-white', 'border-transparent');
                activeBtn.classList.add('bg-emerald-800', 'text-white', 'shadow-inner', 'ring-1', 'ring-emerald-700');
            }

            // Trigger window resize to fix chart widths when tab becomes visible
            window.dispatchEvent(new Event('resize'));
        }

        function toggleMobileMenu() {
            const menu = document.getElementById('mobile-menu');
            menu.classList.toggle('hidden');
        }

        // --- Charts Configuration (ApexCharts) ---

        const commonOptions = {
            chart: {
                fontFamily: 'Inter, sans-serif',
                toolbar: { show: false },
                animations: { enabled: true }
            },
            dataLabels: { enabled: false },
            tooltip: {
                theme: 'light',
                style: { fontSize: '12px' },
                x: { show: true }
            }
        };

        // 1. Perception Chart (Bar)
        const perceptionOptions = {
            ...commonOptions,
            series: [{
                name: 'Score',
                data: [
                    { x: 'Env. Concern', y: 85, fillColor: '#10B981' },
                    { x: 'Brand Awareness', y: 72, fillColor: '#34D399' },
                    { x: 'Perceived Relevance', y: 50, fillColor: '#6EE7B7' },
                    { x: 'Trust in NGOs', y: 45, fillColor: '#F59E0B' }
                ]
            }],
            chart: {
                type: 'bar',
                height: 300,
                parentHeightOffset: 0,
                toolbar: { show: false }
            },
            plotOptions: {
                bar: {
                    horizontal: true,
                    borderRadius: 4,
                    barHeight: '50%',
                    distributed: true
                }
            },
            legend: { show: false },
            grid: {
                borderColor: '#f1f5f9',
                strokeDashArray: 4,
                xaxis: { lines: { show: true } },   
                yaxis: { lines: { show: false } },
            },
            xaxis: {
                max: 100,
                labels: {
                    style: { colors: '#94a3b8', fontSize: '11px' }
                }
            },
            yaxis: {
                labels: {
                    style: { colors: '#475569', fontSize: '12px', fontWeight: 500 }
                }
            }
        };

        // 2. Content Preference Chart (Donut)
        const contentOptions = {
            ...commonOptions,
            series: [65, 20, 10, 5],
            labels: ['Short Video', 'Infographics', 'Long Reports', 'Newsletters'],
            colors: ['#059669', '#10B981', '#6EE7B7', '#A7F3D0'],
            chart: {
                type: 'donut',
                height: 280
            },
            plotOptions: {
                pie: {
                    donut: {
                        size: '65%',
                        labels: {
                            show: true,
                            total: {
                                show: true,
                                label: 'Top Format',
                                color: '#64748b',
                                fontSize: '11px',
                                formatter: () => 'Video'
                            }
                        }
                    }
                }
            },
            stroke: { show: false },
            legend: {
                position: 'bottom',
                fontSize: '12px',
                fontFamily: 'Inter',
                markers: { radius: 12 },
                itemMargin: { horizontal: 10, vertical: 5 }
            }
        };

        // 3. Donor Funnel Chart (Area)
        const funnelOptions = {
            ...commonOptions,
            series: [{
                name: 'Conversion %',
                data: [100, 45, 30, 12, 4]
            }],
            chart: {
                type: 'area',
                height: 280,
                toolbar: { show: false }
            },
            colors: ['#059669'],
            fill: {
                type: 'gradient',
                gradient: {
                    shadeIntensity: 1,
                    opacityFrom: 0.7,
                    opacityTo: 0.1,
                    stops: [0, 90, 100]
                }
            },
            stroke: {
                curve: 'smooth',
                width: 2
            },
            grid: {
                borderColor: '#f1f5f9',
                strokeDashArray: 4
            },
            xaxis: {
                categories: ['Awareness', 'Trust', 'Engagement', 'First Donation', 'Recurring'],
                labels: {
                    style: { colors: '#64748b', fontSize: '11px' }
                },
                axisBorder: { show: false },
                axisTicks: { show: false }
            },
            yaxis: {
                labels: {
                    style: { colors: '#64748b', fontSize: '11px' },
                    formatter: (val) => val + "%"
                }
            }
        };

        // Render Charts on Load
        document.addEventListener('DOMContentLoaded', () => {
            const chart1 = new ApexCharts(document.querySelector("#perceptionChart"), perceptionOptions);
            chart1.render();

            const chart2 = new ApexCharts(document.querySelector("#contentChart"), contentOptions);
            chart2.render();

            const chart3 = new ApexCharts(document.querySelector("#funnelChart"), funnelOptions);
            chart3.render();
        });

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="bg-emerald-900 text-white sticky top-0 z-50 border-b border-emerald-800 shadow-sm backdrop-blur-md bg-opacity-95">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="flex justify-between h-16 items-center">

<div className="flex items-center gap-3">
<iconify-icon className="text-emerald-400" icon="solar:leaf-linear" strokeWidth="1.5" width="28"></iconify-icon>
<div className="flex flex-col">
<h1 className="font-semibold text-base tracking-tight leading-none text-white">GREENPEACE MENA</h1>
<span className="text-xs text-emerald-300 tracking-widest uppercase mt-1 opacity-90">2025 Assessment</span>
</div>
</div>

<div className="hidden md:flex space-x-2">
<button className="tab-btn px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 bg-emerald-800 text-white shadow-inner ring-1 ring-emerald-700" id="tab-btn-overview" onclick="switchTab('overview')">
<iconify-icon icon="solar:users-group-rounded-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Perception
                    </button>
<button className="tab-btn px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 text-emerald-100 hover:bg-emerald-800 hover:text-white border border-transparent" id="tab-btn-engagement" onclick="switchTab('engagement')">
<iconify-icon icon="solar:chart-2-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Engagement
                    </button>
<button className="tab-btn px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 text-emerald-100 hover:bg-emerald-800 hover:text-white border border-transparent" id="tab-btn-donors" onclick="switchTab('donors')">
<iconify-icon icon="solar:heart-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Donors
                    </button>
<button className="tab-btn px-4 py-2 rounded-lg text-xs font-medium transition-all flex items-center gap-2 text-emerald-100 hover:bg-emerald-800 hover:text-white border border-transparent" id="tab-btn-strategy" onclick="switchTab('strategy')">
<iconify-icon icon="solar:target-linear" strokeWidth="1.5" width="16"></iconify-icon>
                        Strategy
                    </button>
</div>

<div className="md:hidden">
<button className="p-2 text-emerald-100 hover:text-white" onclick="toggleMobileMenu()">
<iconify-icon icon="solar:hamburger-menu-linear" strokeWidth="1.5" width="24"></iconify-icon>
</button>
</div>
</div>
</div>

<div className="hidden md:hidden bg-emerald-800 border-t border-emerald-700" id="mobile-menu">
<div className="px-2 pt-2 pb-3 space-y-1">
<button className="w-full text-left px-3 py-3 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-900 flex items-center gap-3" onclick="switchTab('overview'); toggleMobileMenu()">
<iconify-icon icon="solar:users-group-rounded-linear" width="18"></iconify-icon> Perception
                </button>
<button className="w-full text-left px-3 py-3 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-900 flex items-center gap-3" onclick="switchTab('engagement'); toggleMobileMenu()">
<iconify-icon icon="solar:chart-2-linear" width="18"></iconify-icon> Engagement
                </button>
<button className="w-full text-left px-3 py-3 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-900 flex items-center gap-3" onclick="switchTab('donors'); toggleMobileMenu()">
<iconify-icon icon="solar:heart-linear" width="18"></iconify-icon> Donors
                </button>
<button className="w-full text-left px-3 py-3 rounded-md text-sm font-medium text-emerald-100 hover:bg-emerald-900 flex items-center gap-3" onclick="switchTab('strategy'); toggleMobileMenu()">
<iconify-icon icon="solar:target-linear" width="18"></iconify-icon> Strategy
                </button>
</div>
</div>
</nav>

<div className="bg-emerald-800 pt-8 pb-20">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="md:w-3/4 lg:w-2/3">
<h2 className="text-3xl md:text-4xl font-semibold text-white mb-4 tracking-tight leading-tight">
                    Unlocking Engagement &amp; Trust in the Region
                </h2>
<p className="text-emerald-100 text-base md:text-lg leading-relaxed font-light opacity-90">
                    Key insights from the December 2025 International Social &amp; Development Research Report on Greenpeace MENA's brand health, donor psychology, and strategic opportunities.
                </p>
</div>
</div>
</div>

<main className="flex-grow -mt-12 mb-12 relative z-10">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div className="bg-white rounded-xl shadow-lg border border-gray-100 p-6 md:p-10 min-h-[600px]">

<div className="tab-content fade-in block" id="tab-overview">
<div className="mb-10">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Brand Perception &amp; Trust</h3>
<p className="text-gray-500 mt-2 text-base font-light">High environmental concern meets an institutional trust gap.</p>
</div>
<div className="grid md:grid-cols-2 gap-8 lg:gap-12">

<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6 relative">
<h4 className="text-base font-medium mb-6 text-gray-800 flex items-center gap-2">
<iconify-icon className="text-emerald-600" icon="solar:graph-up-linear"></iconify-icon>
                                The Perception Gap
                            </h4>
<div className="w-full h-72" id="perceptionChart"></div>
<div className="mt-6 pt-6 border-t border-gray-50 text-sm text-gray-600 leading-relaxed">
                                While <span className="font-semibold text-emerald-600">85%</span> of the audience expresses high concern for the environment, trust in institutional NGOs lags behind at <span className="font-semibold text-amber-500">45%</span>. The brand is seen as authoritative but distant.
                            </div>
</div>

<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<h4 className="text-base font-medium mb-6 text-gray-800 flex items-center gap-2">
<iconify-icon className="text-amber-500" icon="solar:shield-warning-linear"></iconify-icon>
                                Top Barriers to Support
                            </h4>
<div className="space-y-6">

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-gray-700">Lack of Trust</span>
<span className="text-gray-500 font-mono text-xs">78%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-red-400 h-2 rounded-full" style={{width: '78%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1.5 italic">"Unsure where money goes"</p>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-gray-700">Institutional Distance</span>
<span className="text-gray-500 font-mono text-xs">65%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-red-400 h-2 rounded-full opacity-80" style={{width: '65%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1.5 italic">"Too bureaucratic/foreign"</p>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-gray-700">Financial Transparency</span>
<span className="text-gray-500 font-mono text-xs">60%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-red-400 h-2 rounded-full opacity-60" style={{width: '60%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1.5 italic">"Want proof of impact"</p>
</div>

<div>
<div className="flex justify-between text-sm mb-2">
<span className="font-medium text-gray-700">Payment Friction</span>
<span className="text-gray-500 font-mono text-xs">40%</span>
</div>
<div className="w-full bg-gray-100 rounded-full h-2 overflow-hidden">
<div className="bg-red-400 h-2 rounded-full opacity-40" style={{width: '40%'}}></div>
</div>
<p className="text-xs text-gray-400 mt-1.5 italic">"Hard to donate"</p>
</div>
</div>
</div>
</div>
</div>

<div className="tab-content fade-in hidden" id="tab-engagement">
<div className="mb-10">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Communication &amp; Content</h3>
<p className="text-gray-500 mt-2 text-base font-light">Moving from 'Corporate Reports' to 'El-Da7ee7' Style Storytelling.</p>
</div>
<div className="grid md:grid-cols-3 gap-8">
<div className="md:col-span-2 bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<h4 className="text-base font-medium mb-4 text-gray-800">Preferred Content Formats</h4>
<div className="flex flex-col md:flex-row items-center gap-8">
<div className="w-full md:w-1/2 h-64 flex items-center justify-center">
<div className="w-full" id="contentChart"></div>
</div>
<div className="w-full md:w-1/2 bg-emerald-50 rounded-lg p-5 border border-emerald-100">
<h5 className="font-semibold text-emerald-800 mb-3 text-sm flex items-center gap-2">
<iconify-icon icon="solar:lightbulb-linear" width="18"></iconify-icon> Key Insight
                                    </h5>
<p className="text-sm text-emerald-900/80 leading-relaxed mb-3">
                                        Audiences reject cold, data-heavy reports. They demand <span className="font-semibold text-emerald-800">"Edutainment"</span> similar to El-Da7ee7.
                                    </p>
<ul className="space-y-2">
<li className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon> Warm, "Masri" tone
                                        </li>
<li className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon> Humor mixed with facts
                                        </li>
<li className="flex items-center gap-2 text-xs text-emerald-800 font-medium">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear"></iconify-icon> 60-90 second duration
                                        </li>
</ul>
</div>
</div>
</div>
<div className="bg-gradient-to-br from-emerald-600 to-teal-700 text-white rounded-xl p-8 flex flex-col justify-center items-center text-center shadow-lg relative overflow-hidden">
<div className="absolute top-0 right-0 p-10 opacity-10 transform translate-x-10 -translate-y-10">
<iconify-icon icon="solar:smartphone-linear" width="200"></iconify-icon>
</div>
<div className="relative z-10">
<div className="bg-white/20 w-16 h-16 rounded-2xl flex items-center justify-center mx-auto mb-6 backdrop-blur-sm">
<iconify-icon className="text-white" icon="solar:smartphone-linear" width="32"></iconify-icon>
</div>
<h3 className="text-xl font-semibold mb-3 tracking-tight">Mobile First</h3>
<p className="text-emerald-100 text-sm leading-relaxed mb-6 font-light">
                                    Engagement happens on the phone. Content must be vertical, captioned, and shareable instantly.
                                </p>
<div className="inline-flex items-center px-3 py-1.5 rounded-full bg-white/20 text-xs font-mono backdrop-blur-md">
                                    Target: Gen Z &amp; Millennials
                                </div>
</div>
</div>
</div>
</div>

<div className="tab-content fade-in hidden" id="tab-donors">
<div className="mb-10">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">The Donor Journey</h3>
<p className="text-gray-500 mt-2 text-base font-light">Bridging the gap between 'Liking' and 'Giving'.</p>
</div>
<div className="grid md:grid-cols-2 gap-8">
<div className="bg-white rounded-xl border border-gray-100 shadow-sm p-6">
<h4 className="text-base font-medium mb-6 text-gray-800">The Conversion Funnel</h4>
<div className="w-full h-72" id="funnelChart"></div>
<p className="text-center text-xs text-gray-400 mt-4 italic">Significant drop-off occurs at the "Trust Building" phase.</p>
</div>
<div className="space-y-5">

<div className="bg-white p-6 rounded-xl border-l-4 border-emerald-500 shadow-sm ring-1 ring-gray-100">
<h4 className="font-semibold text-base text-gray-800 flex items-center gap-2 mb-2">
<iconify-icon className="text-emerald-500" icon="solar:target-linear" width="20"></iconify-icon>
                                    The "Traceability" Solution
                                </h4>
<p className="text-gray-600 text-sm mb-4 font-light">
                                    Donors need to see the journey of their impact. Visual proof builds the missing trust.
                                </p>
<div className="grid grid-cols-2 gap-3">
<div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-xs text-gray-600 text-center font-medium">
                                        Plastic Journey Video
                                    </div>
<div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-xs text-gray-600 text-center font-medium">
                                        Recycler Certs
                                    </div>
<div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-xs text-gray-600 text-center font-medium">
                                        QR Codes on Bins
                                    </div>
<div className="bg-gray-50 px-3 py-2 rounded border border-gray-200 text-xs text-gray-600 text-center font-medium">
                                        Live Project Pages
                                    </div>
</div>
</div>

<div className="bg-white p-6 rounded-xl border-l-4 border-amber-500 shadow-sm ring-1 ring-gray-100">
<h4 className="font-semibold text-base text-gray-800 flex items-center gap-2 mb-2">
<iconify-icon className="text-amber-500" icon="solar:heart-linear" width="20"></iconify-icon>
                                    Micro-Giving Opportunities
                                </h4>
<p className="text-gray-600 text-sm mb-3 font-light">
                                    Make giving habitual and painless. Remove the "big commitment" fear.
                                </p>
<ul className="space-y-2">
<li className="flex items-start gap-2 text-sm text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                                        "Round Up" retail features (e.g., Round up 1 EGP)
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                                        School/Club donation jars
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600">
<span className="w-1.5 h-1.5 rounded-full bg-amber-400 mt-1.5 flex-shrink-0"></span>
                                        Event-side donation boxes
                                    </li>
</ul>
</div>
</div>
</div>
</div>

<div className="tab-content fade-in hidden" id="tab-strategy">
<div className="mb-10">
<h3 className="text-2xl font-semibold text-gray-900 tracking-tight">Strategic Roadmap</h3>
<p className="text-gray-500 mt-2 text-base font-light">5 Pillars to Foster Trust, Partnerships, and Regional Relevance.</p>
</div>
<div className="grid md:grid-cols-2 gap-6">

<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-gray-50 opacity-50 font-black text-8xl group-hover:text-emerald-50 transition-colors select-none">1</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-600" icon="solar:globe-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Hyper-Localization</h4>
<p className="text-sm text-emerald-700 font-medium mb-4">Move from 'Global NGO' to 'Local Partner'.</p>
<ul className="space-y-2 border-t border-gray-100 pt-4">
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Partner with universities &amp; municipalities
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Local Champions network along Nile corridors
                                    </li>
</ul>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-gray-50 opacity-50 font-black text-8xl group-hover:text-emerald-50 transition-colors select-none">2</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-600" icon="solar:check-circle-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Radical Transparency</h4>
<p className="text-sm text-emerald-700 font-medium mb-4">Show, don't just tell, where impact happens.</p>
<ul className="space-y-2 border-t border-gray-100 pt-4">
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Traceability Center (videos of plastic journey)
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Public QR codes linking to project pages
                                    </li>
</ul>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-gray-50 opacity-50 font-black text-8xl group-hover:text-emerald-50 transition-colors select-none">3</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-600" icon="solar:smartphone-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Content Optimization</h4>
<p className="text-sm text-emerald-700 font-medium mb-4">El-Da7ee7 style: Warm, humorous, factual.</p>
<ul className="space-y-2 border-t border-gray-100 pt-4">
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        60-90s explainer videos
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Human-centered storytelling
                                    </li>
</ul>
</div>
</div>

<div className="bg-white rounded-xl border border-gray-100 p-6 hover:shadow-md transition-all cursor-pointer group relative overflow-hidden">
<div className="absolute -right-4 -top-4 text-gray-50 opacity-50 font-black text-8xl group-hover:text-emerald-50 transition-colors select-none">4</div>
<div className="relative z-10">
<div className="w-12 h-12 rounded-lg bg-emerald-50 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
<iconify-icon className="text-emerald-600" icon="solar:heart-linear" width="24"></iconify-icon>
</div>
<h4 className="text-lg font-semibold text-gray-900 mb-1">Frictionless Giving</h4>
<p className="text-sm text-emerald-700 font-medium mb-4">Modernize the donation infrastructure.</p>
<ul className="space-y-2 border-t border-gray-100 pt-4">
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Secure mobile payments (Wallets/Apps)
                                    </li>
<li className="flex items-start gap-2 text-sm text-gray-600 font-light">
<span className="mt-1.5 w-1 h-1 rounded-full bg-emerald-400 shrink-0"></span>
                                        Auto-issued digital receipts
                                    </li>
</ul>
</div>
</div>
</div>
</div>
</div>
</div>
</main>

<footer className="bg-gray-900 text-gray-400 py-12 border-t border-gray-800 mt-auto">
<div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8 items-center">
<div>
<h4 className="text-white text-lg font-semibold mb-2 tracking-tight">Ready to act on these insights?</h4>
<p className="mb-6 font-light text-sm">Download the full raw data set or schedule a team workshop.</p>
<div className="flex flex-wrap gap-3">
<button className="flex items-center gap-2 bg-emerald-600 hover:bg-emerald-500 text-white px-5 py-2.5 rounded-lg text-sm font-medium transition-colors shadow-lg shadow-emerald-900/50">
<iconify-icon icon="solar:download-linear" width="18"></iconify-icon>
                        Download PDF
                    </button>
<button className="flex items-center gap-2 border border-gray-700 hover:border-gray-500 hover:text-white text-gray-300 px-5 py-2.5 rounded-lg text-sm font-medium transition-colors">
                        Contact Research Team
                    </button>
</div>
</div>
<div className="text-xs bg-gray-800/50 p-6 rounded-lg border border-gray-700/50">
<h5 className="text-white font-medium mb-2 flex items-center gap-2">
<iconify-icon icon="solar:info-circle-linear" width="16"></iconify-icon> Methodology Note
                </h5>
<p className="leading-relaxed opacity-80">
                    Data based on quantitative surveys and qualitative focus groups conducted in December 2025 by Ipsos in Lebanon. Sample covers general public and existing supporters across key MENA markets.
                </p>
</div>
</div>
</footer>



    </>
  );
}
