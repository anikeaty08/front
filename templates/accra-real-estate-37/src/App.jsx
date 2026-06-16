import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
tailwind.config = {
theme: {
extend: {
// Add any custom theme extensions here if needed
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
// Generate rotate-x utilities
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-y utilities
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Generate rotate-z utilities
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `
translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0))
rotateX(var(--tw-rotate-x, 0))
rotateY(var(--tw-rotate-y, 0))
rotateZ(var(--tw-rotate-z, 0))
skewX(var(--tw-skew-x, 0))
skewY(var(--tw-skew-y, 0))
scaleX(var(--tw-scale-x, 1))
scaleY(var(--tw-scale-y, 1))
`.replace(/\\s+/g, ' ').trim(),
};
}
});
// Perspective utilities
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
// Transform style utilities
const transformStyleUtilities = {
".transform-style-preserve-3d": { "transform-style": "preserve-3d" },
".transform-style-flat": { "transform-style": "flat" },
};
addUtilities({
...rotateXUtilities,
...rotateYUtilities,
...rotateZUtilities,
...perspectiveUtilities,
...transformStyleUtilities,
});
}
]
};



        // ROI Calculator Logic
        function calculateROI() {
            const price = parseFloat(document.getElementById('priceInput').value);
            const rent = parseFloat(document.getElementById('rentInput').value);
            
            if(price && rent) {
                const annualRent = rent * 12;
                const yieldVal = ((annualRent / price) * 100).toFixed(1);
                const years = (price / annualRent).toFixed(1);
                
                // Animate numbers (simple implementation)
                document.getElementById('roiResult').innerText = yieldVal + "%";
                document.getElementById('annualIncome').innerText = "$" + annualRent.toLocaleString();
                // Update text description based on yield
                const resultText = document.getElementById('roiResult');
                if(yieldVal > 8) {
                    resultText.classList.remove('from-white', 'to-slate-400');
                    resultText.classList.add('from-emerald-400', 'to-emerald-200');
                } else {
                    resultText.classList.add('from-white', 'to-slate-400');
                    resultText.classList.remove('from-emerald-400', 'to-emerald-200');
                }
            }
        }

        document.addEventListener('DOMContentLoaded', () => {
            const ctx = document.getElementById('landingPageChart');
            if (ctx) {
                const chartGradient = ctx.getContext('2d').createLinearGradient(0, 0, 0, 300);
                chartGradient.addColorStop(0, 'rgba(15, 23, 42, 0.05)');
                chartGradient.addColorStop(1, 'rgba(15, 23, 42, 0)');

                new Chart(ctx, {
                    type: 'line',
                    data: {
                        labels: ['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul', 'Aug', 'Sep', 'Oct'],
                        datasets: [{
                            label: 'Avg Price / Sqm ($)',
                            data: [1800, 1850, 1820, 1900, 1950, 1920, 2050, 2100, 2150, 2200],
                            borderColor: '#0f172a',
                            backgroundColor: chartGradient,
                            borderWidth: 2,
                            fill: true,
                            tension: 0.4,
                            pointRadius: 0,
                            pointHoverRadius: 6,
                            pointHoverBackgroundColor: '#0f172a',
                            pointHoverBorderColor: '#fff',
                            pointHoverBorderWidth: 2
                        }]
                    },
                    options: {
                        responsive: true,
                        maintainAspectRatio: false,
                        plugins: {
                            legend: { display: false },
                            tooltip: {
                                enabled: true,
                                backgroundColor: '#1e293b',
                                titleFont: { family: 'Geist' },
                                bodyFont: { family: 'Geist' },
                                padding: 12,
                                cornerRadius: 8,
                                displayColors: false,
                                callbacks: {
                                    label: function(context) {
                                        return '$' + context.parsed.y + ' / sqm';
                                    }
                                }
                            }
                        },
                        scales: {
                            x: {
                                grid: { display: false },
                                ticks: { font: { family: 'Geist', size: 11 }, color: '#94a3b8' },
                                border: { display: false }
                            },
                            y: {
                                display: false,
                                min: 1500
                            }
                        },
                        interaction: {
                            mode: 'index',
                            intersect: false,
                        }
                    }
                });
            }
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="fixed top-4 left-0 right-0 z-50 flex justify-center px-4">
<nav className="flex items-center bg-white/80 backdrop-blur-md shadow-sm border border-slate-200/60 rounded-full p-1.5 gap-1 pr-2 pl-4 transition-all hover:shadow-md">
<a className="flex items-center gap-2 mr-4 group" href="#">
<svg aria-hidden="true" className="iconify text-slate-900 group-hover:text-rose-600 transition-colors" height="24" role="img" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" fill="currentColor"></path><path d="M13.58 13.79a6 6 0 0 1-7.16-3.58a6 6 0 1 0 7.16 3.58" fill="currentColor" opacity=".7"></path><path d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472a6 6 0 1 0 5.58-10.262a6.01 6.01 0 0 1-4 3.58" fill="currentColor" opacity=".4"></path></svg>
<span className="text-lg text-slate-900 font-geist font-semibold tracking-tighter">Lumina</span>
</a>
<div className="hidden md:flex items-center gap-1">
<a className="px-4 py-2 text-sm font-medium font-geist text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors" href="#listings">Our Homes</a>
<a className="px-4 py-2 text-sm font-medium font-geist text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors" href="#neighborhoods">Neighborhoods</a>
<a className="px-4 py-2 text-sm font-medium font-geist text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors" href="#invest">Invest</a>
<a className="px-4 py-2 text-sm font-medium font-geist text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors" href="#invest">About Us</a>
<a className="px-4 py-2 text-sm font-medium font-geist text-slate-500 hover:text-slate-900 rounded-full hover:bg-slate-100 transition-colors" href="#invest">Contact Us</a>
</div>
<div className="w-px h-6 bg-slate-200 mx-2 hidden md:block"></div>
<a className="flex items-center gap-2 px-5 py-2.5 bg-slate-900 text-white rounded-full shadow-lg hover:bg-slate-800 hover:shadow-xl transition-all group" href="#">
<span className="text-sm font-medium font-geist">Get Started</span>
<svg aria-hidden="true" className="iconify group-hover:translate-x-0.5 transition-transform iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</nav>
</div>
<main className="w-full max-w-7xl mx-auto px-4 pt-32 flex flex-col gap-24">
<section className="flex flex-col items-center gap-10">
<div className="text-center max-w-3xl space-y-6">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-rose-50 border border-rose-100 rounded-full text-rose-600 text-xs font-medium font-geist animate-fade-in-up">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-rose-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-rose-500"></span>
</span>
                    Market Update: East Legon yields up +4.2%
                </div>
<h1 className="text-5xl md:text-7xl font-semibold text-slate-900 font-geist tracking-tighter leading-[1.1]">
                    Real estate intelligence for <span className="text-transparent bg-clip-text bg-gradient-to-r from-slate-400 to-slate-600">modern Ghana.</span>
</h1>
<p className="text-lg text-slate-500 font-geist max-w-xl mx-auto leading-relaxed">
                    Data-driven insights, premium listings, and seamless management for the Accra property market. Experience the future of real estate.
                </p>
<div className="flex items-center justify-center gap-2 pt-2 w-full max-w-lg mx-auto">
<div className="relative group w-full shadow-[0px_2px_4px_rgba(0,0,0,0.05),0px_4px_8px_rgba(0,0,0,0.05)] rounded-full transition-shadow hover:shadow-lg">
<svg className="absolute left-4 top-1/2 -translate-y-1/2 iconify text-slate-400 text-lg group-focus-within:text-slate-800 transition-colors" data-icon="solar:magnifer-bold-duotone" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.313 11.157a9.157 9.157 0 1 1-18.313 0a9.157 9.157 0 0 1 18.313 0" fill="currentColor" opacity=".5"></path><path d="m17.1 18.122l3.666 3.666a.723.723 0 0 0 1.023-1.022L18.122 17.1a9 9 0 0 1-1.022 1.022" fill="currentColor"></path></svg>
<input className="w-full pl-11 pr-32 py-4 bg-white rounded-full text-sm font-medium text-slate-700 placeholder-slate-400 border border-slate-200 focus:ring-2 focus:ring-slate-900/10 focus:border-slate-300 outline-none transition-all" placeholder="Try 'Penthouse in Cantonments' or 'Land in Aburi'..." type="text"/>
<div className="absolute right-2 top-1/2 -translate-y-1/2 flex items-center gap-1">
<button className="px-4 py-2 bg-slate-900 text-white text-xs font-medium rounded-full hover:bg-slate-800 transition">Search</button>
</div>
</div>
<button className="w-14 h-14 flex-shrink-0 flex items-center justify-center bg-white border border-slate-200 rounded-full text-slate-500 hover:text-slate-900 hover:border-slate-300 transition shadow-sm group" title="Advanced Filters">
<svg aria-hidden="true" className="iconify group-hover:scale-110 transition-transform iconify--solar" data-icon="solar:filter-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M5 3h14L8.816 13.184a2.7 2.7 0 0 0-.778-1.086c-.228-.198-.547-.377-1.183-.736l-2.913-1.64c-.949-.533-1.423-.8-1.682-1.23C2 8.061 2 7.541 2 6.503v-.69c0-1.326 0-1.99.44-2.402C2.878 3 3.585 3 5 3" fill="currentColor" fill-rule="evenodd"></path><path d="M22 6.504v-.69c0-1.326 0-1.99-.44-2.402C21.122 3 20.415 3 19 3L8.815 13.184q.075.193.121.403c.064.285.064.619.064 1.286v2.67c0 .909 0 1.364.252 1.718c.252.355.7.53 1.594.88c1.879.734 2.818 1.101 3.486.683S15 19.452 15 17.542v-2.67c0-.666 0-1 .063-1.285a2.68 2.68 0 0 1 .9-1.49c.227-.197.545-.376 1.182-.735l2.913-1.64c.948-.533 1.423-.8 1.682-1.23c.26-.43.26-.95.26-1.988" fill="currentColor" opacity=".5"></path></svg>
</button>
</div>
</div>
<div className="w-full relative group perspective-1000">
<div className="absolute -inset-1 bg-gradient-to-b from-rose-200/50 to-slate-200/50 rounded-[2.2rem] blur opacity-75"></div>
<div className="min-h-[500px] flex flex-col overflow-hidden bg-center bg-[url(https://images.unsplash.com/photo-1564013799919-ab600027ffc6?q=80&amp;w=1600&amp;auto=format&amp;fit=crop)] bg-cover rounded-[2rem] p-8 relative justify-between shadow-2xl transition-transform duration-700 hover:scale-[1.01]">
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/80 via-slate-900/20 to-slate-900/10"></div>
<div className="z-10 flex gap-2 overflow-x-auto no-scrollbar py-2">
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-white font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-emerald-400"></span> Accra Index: <span className="font-bold">142.5</span> (+0.8%)
                        </div>
<div className="bg-white/10 backdrop-blur-md border border-white/10 rounded-full px-4 py-1.5 flex items-center gap-2 text-xs text-white font-geist">
<span className="w-1.5 h-1.5 rounded-full bg-rose-400"></span> Rental Yield: <span className="font-bold">8.2%</span>
</div>
</div>
<div className="z-10 flex flex-wrap items-end justify-between gap-8 mt-4 relative">
<div className="flex gap-12">
<div>
<div className="text-sm font-medium text-slate-300 mb-1 font-geist uppercase tracking-wider text-[10px]">Total Volume</div>
<div className="text-5xl text-white font-geist font-semibold tracking-tighter">$8.2<span className="text-2xl text-slate-300 ml-1">M</span></div>
</div>
<div>
<div className="text-sm font-medium text-slate-300 mb-1 font-geist uppercase tracking-wider text-[10px]">Market Engagement</div>
<div className="text-5xl text-white font-geist font-semibold tracking-tighter">42.1<span className="text-2xl text-slate-300 ml-1">%</span></div>
</div>
</div>
<a className="hidden md:flex items-center gap-3 pl-2 pr-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white text-sm hover:bg-white/20 transition-colors" href="#">
<div className="w-8 h-8 rounded-full bg-white text-slate-900 flex items-center justify-center">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:play-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.409 9.353a2.998 2.998 0 0 1 0 5.294L8.597 21.614C6.534 22.737 4 21.277 4 18.968V5.033c0-2.31 2.534-3.769 4.597-2.648z" fill="currentColor"></path></svg>
</div>
<span className="font-geist">Watch Market Report</span>
</a>
</div>
</div>
</div>
</section>
<section className="grid grid-cols-1 md:grid-cols-12 gap-6">
<div className="col-span-12 flex justify-between items-end">
<h2 className="text-2xl font-semibold text-slate-900 font-geist tracking-tight">Market Intelligence</h2>
<div className="text-sm text-slate-400 font-geist">Live data from 500+ sources</div>
</div>
<div className="md:col-span-8 bg-white border border-slate-200/60 rounded-[2rem] p-8 shadow-sm flex flex-col justify-between h-[400px]">
<div className="flex justify-between items-start mb-6">
<div>
<h3 className="text-lg font-medium text-slate-900 tracking-tight font-geist">Property Value Trends</h3>
<p className="text-sm text-slate-400 font-geist mt-1">Average price per sqm in Greater Accra.</p>
</div>
<div className="flex items-center gap-2">
<button className="px-4 py-1.5 bg-slate-900 text-white rounded-full text-xs font-medium font-geist">1Y</button>
<button className="px-4 py-1.5 bg-slate-50 border border-slate-100 text-slate-500 hover:text-slate-900 rounded-full text-xs font-medium font-geist transition">5Y</button>
</div>
</div>
<div className="relative w-full h-full min-h-0">
<canvas className="w-full h-full" height="258" id="landingPageChart" style={{display: 'block', boxSizing: 'border-box', height: '258px', width: '758px'}} width="758"></canvas>
</div>
</div>
<div className="md:col-span-4 bg-white border border-slate-200/60 rounded-[2rem] p-6 shadow-sm h-[400px] flex flex-col">
<div className="flex justify-between items-center mb-6">
<h3 className="text-lg font-medium text-slate-900 tracking-tight font-geist">Live Interest</h3>
<div className="flex items-center gap-2">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span className="text-xs font-bold font-geist text-slate-400">Active Now</span>
</div>
</div>
<div className="flex flex-col gap-3 overflow-y-auto no-scrollbar relative flex-1">
<div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-2xl cursor-default hover:border-rose-100 transition-colors">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-rose-100 to-slate-100 flex items-center justify-center text-slate-600 font-bold font-geist text-xs">KM</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-slate-900 truncate font-geist">Kwame Mensah</div>
<span className="text-[10px] text-slate-400 font-geist">2m ago</span>
</div>
<div className="text-xs text-slate-500 truncate font-geist">Inquired about <span className="text-slate-900 font-medium">East Legon Villa</span></div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-2xl cursor-default hover:border-rose-100 transition-colors">
<img alt="" className="w-10 h-10 rounded-full object-cover ring-2 ring-white" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-slate-900 truncate font-geist">Ama Osei</div>
<span className="text-[10px] text-slate-400 font-geist">12m ago</span>
</div>
<div className="text-xs text-slate-500 truncate font-geist">Scheduled a viewing for <span className="text-slate-900 font-medium">Cantonments Apt</span></div>
</div>
</div>
<div className="flex items-start gap-3 p-3 bg-slate-50 border border-slate-100 rounded-2xl cursor-default hover:border-rose-100 transition-colors">
<div className="w-10 h-10 rounded-full bg-gradient-to-br from-indigo-100 to-slate-100 flex items-center justify-center text-slate-600 font-bold font-geist text-xs">JD</div>
<div className="flex-1 min-w-0 pt-0.5">
<div className="flex justify-between items-baseline mb-0.5">
<div className="text-sm font-medium text-slate-900 truncate font-geist">John Doe</div>
<span className="text-[10px] text-slate-400 font-geist">1h ago</span>
</div>
<div className="text-xs text-slate-500 truncate font-geist">Made an offer on <span className="text-slate-900 font-medium">Airport Hills Estate</span></div>
</div>
</div>
</div>
<button className="mt-4 w-full py-3 text-xs font-medium text-white bg-slate-900 hover:bg-slate-800 rounded-xl transition-all shadow-md font-geist flex items-center justify-center gap-2">
                    Access Agent Portal <svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</button>
</div>
</section>
<section className="rounded-[2.5rem] overflow-hidden border border-slate-200/60 bg-slate-100 relative h-[600px] flex flex-col md:flex-row">
<div className="absolute inset-0 bg-[url('https://api.mapbox.com/styles/v1/mapbox/light-v10/static/-0.1870,5.6037,12,0/1200x600?access_token=placeholder')] bg-cover bg-center grayscale opacity-60 mix-blend-multiply"></div>
<div className="relative z-10 w-full md:w-96 bg-white/90 backdrop-blur-xl h-full border-r border-slate-200/50 p-8 flex flex-col">
<h3 className="text-2xl font-semibold text-slate-900 font-geist mb-2">Map Search</h3>
<p className="text-sm text-slate-500 mb-6 font-geist">Explore properties by location. Click on pins to view details.</p>
<div className="space-y-4 flex-1 overflow-y-auto no-scrollbar">
<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-slate-300 cursor-pointer transition-all">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-rose-600 font-geist uppercase">East Legon</span>
<span className="text-xs text-slate-400 font-geist">34 Listings</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '70%'}}></div>
</div>
</div>
<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-slate-300 cursor-pointer transition-all">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-emerald-600 font-geist uppercase">Cantonments</span>
<span className="text-xs text-slate-400 font-geist">12 Listings</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '40%'}}></div>
</div>
</div>
<div className="p-4 bg-white rounded-2xl shadow-sm border border-slate-100 hover:border-slate-300 cursor-pointer transition-all">
<div className="flex justify-between mb-1">
<span className="text-xs font-bold text-indigo-600 font-geist uppercase">Airport Residential</span>
<span className="text-xs text-slate-400 font-geist">8 Listings</span>
</div>
<div className="w-full bg-slate-100 rounded-full h-1.5 mt-2 overflow-hidden">
<div className="bg-slate-900 h-1.5 rounded-full" style={{width: '25%'}}></div>
</div>
</div>
</div>
<button className="mt-4 w-full py-3 bg-rose-600 hover:bg-rose-700 text-white rounded-xl font-medium text-sm font-geist shadow-lg shadow-rose-200 transition-all">
                    View Full Map
                </button>
</div>
<div className="absolute top-1/3 left-1/2 -translate-x-1/2 group cursor-pointer">
<div className="bg-slate-900 text-white text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl font-geist group-hover:scale-110 transition-transform">
                    $450k
                </div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-slate-900 mx-auto"></div>
</div>
<div className="absolute top-1/2 left-2/3 group cursor-pointer">
<div className="bg-white text-slate-900 border border-slate-200 text-xs font-bold px-3 py-1.5 rounded-lg shadow-xl font-geist group-hover:bg-slate-50 transition-colors">
                    $2.1M
                </div>
<div className="w-0 h-0 border-l-[6px] border-l-transparent border-r-[6px] border-r-transparent border-t-[8px] border-t-white mx-auto"></div>
</div>
</section>
<section className="" id="listings">
<div className="flex items-center justify-between mb-8">
<div>
<h2 className="text-3xl font-semibold text-slate-900 font-geist tracking-tight">Curated Residences</h2>
<p className="text-slate-500 text-sm mt-1 font-geist">Handpicked properties verified for quality and title.</p>
</div>
<a className="flex items-center gap-2 px-4 py-2 bg-white border border-slate-200 rounded-full text-sm font-medium text-slate-600 hover:text-slate-900 hover:border-slate-300 font-geist transition-all" href="#">
                    View all properties
                    <svg aria-hidden="true" className="iconify iconify--lucide" data-icon="lucide:arrow-right" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14m-7-7l7 7l-7 7" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
<div className="group bg-white border border-slate-200/60 rounded-[2rem] p-3 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-4">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1613490493576-7fde63acd811?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 font-geist shadow-sm">For Rent</div>
<div className="absolute bottom-3 left-3 bg-slate-900/80 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-medium text-white font-geist flex items-center gap-1">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:videocamera-record-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 12.5v-1c0-3.287 0-4.931.908-6.038a4 4 0 0 1 .554-.554C4.57 4 6.212 4 9.5 4c3.287 0 4.931 0 6.038.908a4 4 0 0 1 .554.554c.702.855.861 2.031.897 4.038l.67-.33c1.945-.972 2.918-1.459 3.63-1.019S22 9.68 22 11.854v.292c0 2.175 0 3.263-.711 3.703c-.712.44-1.685-.047-3.63-1.02l-.67-.329c-.036 2.007-.195 3.183-.897 4.038a4 4 0 0 1-.554.554C14.43 20 12.788 20 9.5 20c-3.287 0-4.931 0-6.038-.908a4 4 0 0 1-.554-.554C2 17.43 2 15.788 2 12.5m11.56-2.94a1.5 1.5 0 1 0-2.121-2.12a1.5 1.5 0 0 0 2.122 2.12" fill="currentColor" fill-rule="evenodd"></path></svg> 3D Tour
                        </div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur text-slate-400 flex items-center justify-center rounded-full hover:text-rose-500 transition shadow-sm">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:heart-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59" fill="currentColor"></path></svg>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<div className="text-emerald-600 text-xl font-semibold font-geist tracking-tight">$4,500 <span className="text-slate-400 font-normal text-sm">/mo</span></div>
<div className="flex gap-0.5 text-yellow-400">
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-xs iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-0.5 font-geist">The Signum Villa</h3>
<div className="text-sm text-slate-500 mb-5 font-geist flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--solar" data-icon="solar:map-point-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" fill="currentColor" opacity=".5"></path><path d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" fill="currentColor"></path></svg>
                            East Legon, Accra
                        </div>
<div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
<div className="flex flex-col items-center gap-1"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bed-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 12.267a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968L19.25 12H4.75z" fill="currentColor"></path><path d="M10.998 4h2c3.77 0 5.656 0 6.828 1.172c1.023 1.022 1.153 2.588 1.17 5.477v1.617L19.25 12H4.75l-1.748.267H3V10.65c.017-2.889.147-4.455 1.17-5.477C5.34 4 7.225 4 10.997 4" fill="currentColor" opacity=".5"></path><path d="M19 10.5c0-1.186-.002-1.983-.081-2.578c-.076-.568-.206-.811-.365-.971c-.158-.16-.399-.293-.96-.37c-.589-.079-1.377-.081-2.55-.081h-2.131v4zm-7.913 0v-4h-2.13c-1.174 0-1.962.002-2.55.082c-.562.076-.803.208-.961.369c-.159.16-.29.403-.365.971C5.001 8.517 5 9.314 5 10.5z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">5 Beds</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bath-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652c.157.126.913.588 1.27.803a7.4 7.4 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5z" fill="currentColor" fill-rule="evenodd"></path><path d="m5.118 19.347l-.039.068l-1 2a.75.75 0 1 0 1.342.67l.968-1.935c-.358-.215-1.114-.677-1.271-.803m11.993.803l.968 1.936a.75.75 0 1 0 1.342-.671l-1-2l-.039-.068c-.204.164-.932.604-1.27.803M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358l1.36-.64l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5z" fill="currentColor" opacity=".5"></path><path d="M6.796 3.886a4.1 4.1 0 0 0-1.38 1.774a4.18 4.18 0 0 0-.019 3.107a.75.75 0 0 0 .994.414l5.961-2.567a.75.75 0 0 0 .402-.963a3.97 3.97 0 0 0-2.133-2.213a3.84 3.84 0 0 0-2.465-.192z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">4 Baths</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:ruler-pen-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 22c-1.886 0-2.828 0-3.414-.586c-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z" fill="currentColor" opacity=".5"></path><path d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5m-1-3h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5m0 6h-2v1.5h2a.75.75 0 0 0 0-1.5m1 3h-3v1.5h3a.75.75 0 0 0 0-1.5m-1 3h-2l.002 1.5H14a.75.75 0 0 0 0-1.5m-6-2.27V7a7.9 7.9 0 0 1-3 .59A7.9 7.9 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98" fill="currentColor"></path><path d="M5 2a3 3 0 0 1 3 3v2a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7V5a3 3 0 0 1 3-3" fill="currentColor" opacity=".5"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">4,200ft</span></div>
</div>
</div>
</div>
<div className="group bg-white border border-slate-200/60 rounded-[2rem] p-3 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-4">
<img alt="Property" className="group-hover:scale-105 transition-transform duration-700 w-full h-full object-cover" src="https://images.unsplash.com/photo-1560448204-e02f11c3d0e2?w=800&amp;q=80"/>
<div className="absolute top-3 left-3 bg-slate-900/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-white font-geist shadow-sm">For Sale</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur text-slate-400 flex items-center justify-center rounded-full hover:text-rose-500 transition shadow-sm">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:heart-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59" fill="currentColor"></path></svg>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<div className="text-slate-900 text-xl font-semibold font-geist tracking-tight">$850,000</div>
<div className="px-2 py-0.5 bg-slate-100 rounded-md text-[10px] font-bold text-slate-500 font-geist uppercase">Verified</div>
</div>
<div className="flex items-center gap-2">
<h3 className="text-lg font-medium text-slate-900 mb-0.5 font-geist">Airport Hills Estate</h3>
</div>
<div className="text-sm text-slate-500 mb-5 font-geist flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--solar" data-icon="solar:map-point-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" fill="currentColor" opacity=".5"></path><path d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" fill="currentColor"></path></svg>
                            Airport Hills, Accra
                        </div>
<div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
<div className="flex flex-col items-center gap-1"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bed-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 12.267a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968L19.25 12H4.75z" fill="currentColor"></path><path d="M10.998 4h2c3.77 0 5.656 0 6.828 1.172c1.023 1.022 1.153 2.588 1.17 5.477v1.617L19.25 12H4.75l-1.748.267H3V10.65c.017-2.889.147-4.455 1.17-5.477C5.34 4 7.225 4 10.997 4" fill="currentColor" opacity=".5"></path><path d="M19 10.5c0-1.186-.002-1.983-.081-2.578c-.076-.568-.206-.811-.365-.971c-.158-.16-.399-.293-.96-.37c-.589-.079-1.377-.081-2.55-.081h-2.131v4zm-7.913 0v-4h-2.13c-1.174 0-1.962.002-2.55.082c-.562.076-.803.208-.961.369c-.159.16-.29.403-.365.971C5.001 8.517 5 9.314 5 10.5z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">6 Beds</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bath-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652c.157.126.913.588 1.27.803a7.4 7.4 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5z" fill="currentColor" fill-rule="evenodd"></path><path d="m5.118 19.347l-.039.068l-1 2a.75.75 0 1 0 1.342.67l.968-1.935c-.358-.215-1.114-.677-1.271-.803m11.993.803l.968 1.936a.75.75 0 1 0 1.342-.671l-1-2l-.039-.068c-.204.164-.932.604-1.27.803M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358l1.36-.64l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5z" fill="currentColor" opacity=".5"></path><path d="M6.796 3.886a4.1 4.1 0 0 0-1.38 1.774a4.18 4.18 0 0 0-.019 3.107a.75.75 0 0 0 .994.414l5.961-2.567a.75.75 0 0 0 .402-.963a3.97 3.97 0 0 0-2.133-2.213a3.84 3.84 0 0 0-2.465-.192z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">7 Baths</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:ruler-pen-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 22c-1.886 0-2.828 0-3.414-.586c-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z" fill="currentColor" opacity=".5"></path><path d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5m-1-3h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5m0 6h-2v1.5h2a.75.75 0 0 0 0-1.5m1 3h-3v1.5h3a.75.75 0 0 0 0-1.5m-1 3h-2l.002 1.5H14a.75.75 0 0 0 0-1.5m-6-2.27V7a7.9 7.9 0 0 1-3 .59A7.9 7.9 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98" fill="currentColor"></path><path d="M5 2a3 3 0 0 1 3 3v2a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7V5a3 3 0 0 1 3-3" fill="currentColor" opacity=".5"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">6,000ft</span></div>
</div>
</div>
</div>
<div className="group bg-white border border-slate-200/60 rounded-[2rem] p-3 hover:shadow-xl hover:shadow-slate-200/50 transition-all duration-300">
<div className="relative aspect-[4/3] overflow-hidden rounded-[1.5rem] mb-4">
<img alt="Property" className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-2.5 py-1 rounded-full text-[10px] font-bold uppercase tracking-wider text-slate-800 font-geist shadow-sm">For Rent</div>
<button className="absolute top-3 right-3 w-8 h-8 bg-white/90 backdrop-blur text-slate-400 flex items-center justify-center rounded-full hover:text-rose-500 transition shadow-sm">
<svg aria-hidden="true" className="iconify text-lg iconify--solar" data-icon="solar:heart-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M8.106 18.247C5.298 16.083 2 13.542 2 9.137C2 4.274 7.5.825 12 5.501V20.5c-1 0-2-.77-3.038-1.59q-.417-.326-.856-.663" fill="currentColor" fill-rule="evenodd" opacity=".5"></path><path d="M15.038 18.91C17.981 16.592 22 14 22 9.138S16.5.825 12 5.501V20.5c1 0 2-.77 3.038-1.59" fill="currentColor"></path></svg>
</button>
</div>
<div className="px-2 pb-2">
<div className="flex justify-between items-start mb-1">
<div className="text-emerald-600 text-xl font-semibold font-geist tracking-tight">$3,200 <span className="text-slate-400 font-normal text-sm">/mo</span></div>
<div className="px-2 py-0.5 bg-rose-50 rounded-md text-[10px] font-bold text-rose-500 font-geist uppercase">Hot</div>
</div>
<h3 className="text-lg font-medium text-slate-900 mb-0.5 font-geist">Labone Luxury Apt</h3>
<div className="text-sm text-slate-500 mb-5 font-geist flex items-center gap-1">
<svg aria-hidden="true" className="iconify text-rose-500 iconify--solar" data-icon="solar:map-point-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" fill="currentColor" opacity=".5"></path><path d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" fill="currentColor"></path></svg>
                            Labone, Accra
                        </div>
<div className="grid grid-cols-3 gap-2 pt-4 border-t border-slate-100">
<div className="flex flex-col items-center gap-1"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bed-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M3.002 12.267a2 2 0 0 0-.85.968C2 13.602 2 14.068 2 15s0 1.398.152 1.765a2 2 0 0 0 1.083 1.083c.252.104.55.137 1.015.147V20a.75.75 0 0 0 1.5 0v-2h12.5v2a.75.75 0 0 0 1.5 0v-2.005c.464-.01.763-.043 1.015-.147a2 2 0 0 0 1.083-1.083C22 16.398 22 15.932 22 15s0-1.398-.152-1.765a2 2 0 0 0-.85-.968L19.25 12H4.75z" fill="currentColor"></path><path d="M10.998 4h2c3.77 0 5.656 0 6.828 1.172c1.023 1.022 1.153 2.588 1.17 5.477v1.617L19.25 12H4.75l-1.748.267H3V10.65c.017-2.889.147-4.455 1.17-5.477C5.34 4 7.225 4 10.997 4" fill="currentColor" opacity=".5"></path><path d="M19 10.5c0-1.186-.002-1.983-.081-2.578c-.076-.568-.206-.811-.365-.971c-.158-.16-.399-.293-.96-.37c-.589-.079-1.377-.081-2.55-.081h-2.131v4zm-7.913 0v-4h-2.13c-1.174 0-1.962.002-2.55.082c-.562.076-.803.208-.961.369c-.159.16-.29.403-.365.971C5.001 8.517 5 9.314 5 10.5z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">2 Beds</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:bath-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 11h-.25a.75.75 0 0 0 0 1.5H2v.355c0 .375 0 .595.016.84c.142 2.237 1.35 4.302 3.102 5.652c.157.126.913.588 1.27.803a7.4 7.4 0 0 0 2.581.765c.245.025.394.03.648.04h.007c.74.028 1.464.045 2.126.045s1.386-.017 2.126-.045h.007c.254-.01.404-.015.648-.04a7.4 7.4 0 0 0 2.58-.765c.339-.2 1.067-.639 1.272-.803c1.751-1.35 2.96-3.416 3.102-5.652c.015-.245.015-.465.015-.84v-.038c0-.06 0-.123-.004-.18a2 2 0 0 0-.014-.137h.268a.75.75 0 0 0 0-1.5z" fill="currentColor" fill-rule="evenodd"></path><path d="m5.118 19.347l-.039.068l-1 2a.75.75 0 1 0 1.342.67l.968-1.935c-.358-.215-1.114-.677-1.271-.803m11.993.803l.968 1.936a.75.75 0 1 0 1.342-.671l-1-2l-.039-.068c-.204.164-.932.604-1.27.803M3.5 4.135a1.635 1.635 0 0 1 3.153-.607l.144.358l1.36-.64l-.11-.275A3.135 3.135 0 0 0 2 4.135V11h1.5z" fill="currentColor" opacity=".5"></path><path d="M6.796 3.886a4.1 4.1 0 0 0-1.38 1.774a4.18 4.18 0 0 0-.019 3.107a.75.75 0 0 0 .994.414l5.961-2.567a.75.75 0 0 0 .402-.963a3.97 3.97 0 0 0-2.133-2.213a3.84 3.84 0 0 0-2.465-.192z" fill="currentColor"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">2.5 Baths</span></div>
<div className="flex flex-col items-center gap-1 border-l border-slate-100"><svg aria-hidden="true" className="iconify text-slate-400 text-lg iconify--solar" data-icon="solar:ruler-pen-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 22c-1.886 0-2.828 0-3.414-.586c-.503-.502-.574-1.267-.584-2.664L12 17.25V6.75l.002-1.5c.01-1.397.081-2.162.584-2.664C13.172 2 14.114 2 16 2h2c1.886 0 2.828 0 3.414.586S22 4.114 22 6v12c0 1.886 0 2.828-.586 3.414S19.886 22 18 22z" fill="currentColor" opacity=".5"></path><path d="M15 8.25h-3v1.5h3a.75.75 0 0 0 0-1.5m-1-3h-1.998L12 6.75h2a.75.75 0 0 0 0-1.5m0 6h-2v1.5h2a.75.75 0 0 0 0-1.5m1 3h-3v1.5h3a.75.75 0 0 0 0-1.5m-1 3h-2l.002 1.5H14a.75.75 0 0 0 0-1.5m-6-2.27V7a7.9 7.9 0 0 1-3 .59A7.9 7.9 0 0 1 2 7v7.98c0 .622 0 .934.038 1.24a5 5 0 0 0 .25 1.056c.102.29.241.569.52 1.126l1.468 2.937a.809.809 0 0 0 1.448 0l1.468-2.937c.279-.557.418-.835.52-1.126a5 5 0 0 0 .25-1.057C8 15.914 8 15.602 8 14.98" fill="currentColor"></path><path d="M5 2a3 3 0 0 1 3 3v2a7.9 7.9 0 0 1-3 .589A7.9 7.9 0 0 1 2 7V5a3 3 0 0 1 3-3" fill="currentColor" opacity=".5"></path></svg><span className="text-xs font-medium text-slate-600 font-geist">1,500ft</span></div>
</div>
</div>
</div>
</div>
</section>
<section className="" id="neighborhoods">
<h2 className="text-3xl font-semibold text-slate-900 tracking-tight font-geist mb-8">Live the Lifestyle</h2>
<div className="grid grid-cols-1 md:grid-cols-4 gap-4">
<div className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="Osu" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1448630360428-65456885c650?w=800&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-bold text-rose-400 uppercase tracking-wider font-geist mb-2 block">Nightlife &amp; Culture</span>
<h3 className="text-2xl font-bold text-white font-geist">Osu</h3>
<p className="text-slate-300 text-xs mt-1 font-geist opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">The heartbeat of Accra. Restaurants, art, and vibrant energy.</p>
</div>
</div>
<div className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer md:col-span-2">
<img alt="Cantonments" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1580587771525-78b9dba3b914?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-bold text-emerald-400 uppercase tracking-wider font-geist mb-2 block">Diplomatic &amp; Serene</span>
<h3 className="text-2xl font-bold text-white font-geist">Cantonments</h3>
<p className="text-slate-300 text-xs mt-1 font-geist opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Greenery, embassies, and exclusive secure living.</p>
</div>
</div>
<div className="group relative h-80 rounded-[2rem] overflow-hidden cursor-pointer">
<img alt="East Legon" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://images.unsplash.com/photo-1512917774080-9991f1c4c750?w=800&amp;q=80" style={{}}/>
<div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 via-slate-900/20 to-transparent"></div>
<div className="absolute bottom-6 left-6">
<span className="text-xs font-bold text-sky-400 uppercase tracking-wider font-geist mb-2 block">Modern Family</span>
<h3 className="text-2xl font-bold text-white font-geist">East Legon</h3>
<p className="text-slate-300 text-xs mt-1 font-geist opacity-0 group-hover:opacity-100 transition-opacity transform translate-y-2 group-hover:translate-y-0 duration-300">Spacious homes, international schools, and new infrastructure.</p>
</div>
</div>
</div>
</section>
<section className="bg-slate-900 rounded-[2.5rem] p-8 md:p-12 text-white relative overflow-hidden" id="invest">
<div className="absolute top-0 right-0 w-96 h-96 bg-rose-500/20 rounded-full blur-[100px]"></div>
<div className="relative z-10 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">
<div className="">
<h2 className="text-3xl md:text-4xl font-semibold font-geist tracking-tight mb-4">Investment Calculator</h2>
<p className="text-slate-400 font-geist text-lg mb-8">Calculate your potential rental yield in Accra's prime markets. Data based on Q4 2024 averages.</p>
<div className="space-y-6">
<div>
<label className="text-sm font-medium text-slate-300 font-geist mb-2 block">Property Price ($)</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition font-geist" id="priceInput" type="number" value="250000"/>
</div>
<div>
<label className="text-sm font-medium text-slate-300 font-geist mb-2 block">Monthly Rental Income ($)</label>
<input className="w-full bg-white/10 border border-white/20 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-rose-500 transition font-geist" id="rentInput" type="number" value="2500"/>
</div>
<button className="w-full py-3.5 bg-rose-600 hover:bg-rose-700 rounded-xl font-medium font-geist transition-colors shadow-lg shadow-rose-900/50" onclick="calculateROI()">Calculate Yield</button>
</div>
</div>
<div className="bg-white/5 backdrop-blur-lg border border-white/10 rounded-[2rem] p-8 text-center flex flex-col justify-center h-full">
<span className="text-slate-400 uppercase tracking-widest text-xs font-bold font-geist mb-4">Estimated Gross Yield</span>
<div className="text-7xl font-bold font-geist text-transparent bg-clip-text bg-gradient-to-br from-white to-slate-400 mb-2" id="roiResult">12.0%</div>
<p className="text-sm text-slate-400 font-geist">This outperforms the S&amp;P 500 average.</p>
<div className="mt-8 pt-8 border-t border-white/10 grid grid-cols-2 gap-4">
<div className="">
<div className="text-2xl font-bold text-white font-geist" id="annualIncome">$30,000</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Annual Income</div>
</div>
<div>
<div className="text-2xl font-bold text-white font-geist">8.5 Years</div>
<div className="text-xs text-slate-500 uppercase tracking-wider font-bold">Payback Period</div>
</div>
</div>
</div>
</div>
</section>
<section className="border-y border-slate-200/60 py-12">
<div className="text-center mb-10">
<span className="text-xs font-semibold text-slate-400 uppercase tracking-wider font-geist">Trusted by leading developers &amp; platforms</span>
</div>
<div className="flex flex-wrap justify-center items-center gap-x-16 gap-y-10 grayscale opacity-60">
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl text-slate-800 iconify--simple-icons" data-icon="simple-icons:airbnb" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12.001 18.275c-1.353-1.697-2.148-3.184-2.413-4.457c-.263-1.027-.16-1.848.291-2.465c.477-.71 1.188-1.056 2.121-1.056s1.643.345 2.12 1.063c.446.61.558 1.432.286 2.465c-.291 1.298-1.085 2.785-2.412 4.458zm9.601 1.14c-.185 1.246-1.034 2.28-2.2 2.783c-2.253.98-4.483-.583-6.392-2.704c3.157-3.951 3.74-7.028 2.385-9.018c-.795-1.14-1.933-1.695-3.394-1.695c-2.944 0-4.563 2.49-3.927 5.382c.37 1.565 1.352 3.343 2.917 5.332c-.98 1.085-1.91 1.856-2.732 2.333c-.636.344-1.245.558-1.828.609c-2.679.399-4.778-2.2-3.825-4.88c.132-.345.395-.98.845-1.961l.025-.053c1.464-3.178 3.242-6.79 5.285-10.795l.053-.132l.58-1.116c.45-.822.635-1.19 1.351-1.643c.346-.21.77-.315 1.246-.315c.954 0 1.698.558 2.016 1.007c.158.239.345.557.582.953l.558 1.089l.08.159c2.041 4.004 3.821 7.608 5.279 10.794l.026.025l.533 1.22l.318.764c.243.613.294 1.222.213 1.858zm1.22-2.39c-.186-.583-.505-1.271-.9-2.094v-.03c-1.889-4.006-3.642-7.608-5.307-10.844l-.111-.163C15.317 1.461 14.468 0 12.001 0c-2.44 0-3.476 1.695-4.535 3.898l-.081.16c-1.669 3.236-3.421 6.843-5.303 10.847v.053l-.559 1.22c-.21.504-.317.768-.345.847C-.172 20.74 2.611 24 5.98 24c.027 0 .132 0 .265-.027h.372c1.75-.213 3.554-1.325 5.384-3.317c1.829 1.989 3.635 3.104 5.382 3.317h.372c.133.027.239.027.265.027c3.37.003 6.152-3.261 4.802-6.975" fill="currentColor"></path></svg>
<span className="font-bold text-slate-800 font-geist text-xl">Airbnb</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl text-slate-800 iconify--simple-icons" data-icon="simple-icons:stripe" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M13.976 9.15c-2.172-.806-3.356-1.426-3.356-2.409c0-.831.683-1.305 1.901-1.305c2.227 0 4.515.858 6.09 1.631l.89-5.494C18.252.975 15.697 0 12.165 0C9.667 0 7.589.654 6.104 1.872C4.56 3.147 3.757 4.992 3.757 7.218c0 4.039 2.467 5.76 6.476 7.219c2.585.92 3.445 1.574 3.445 2.583c0 .98-.84 1.545-2.354 1.545c-1.875 0-4.965-.921-6.99-2.109l-.9 5.555C5.175 22.99 8.385 24 11.714 24c2.641 0 4.843-.624 6.328-1.813c1.664-1.305 2.525-3.236 2.525-5.732c0-4.128-2.524-5.851-6.594-7.305z" fill="currentColor"></path></svg>
<span className="font-bold text-slate-800 font-geist text-xl">Stripe</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl text-slate-800 iconify--simple-icons" data-icon="simple-icons:uber" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M0 7.97v4.958c0 1.867 1.302 3.101 3 3.101c.826 0 1.562-.316 2.094-.87v.736H6.27V7.97H5.082v4.888c0 1.257-.85 2.106-1.947 2.106c-1.11 0-1.946-.827-1.946-2.106V7.971H0zm7.44 0v7.925h1.13v-.725c.521.532 1.257.86 2.06.86a3.006 3.006 0 0 0 3.034-3.01a3.01 3.01 0 0 0-3.033-3.024a2.86 2.86 0 0 0-2.049.861V7.971H7.439zm9.869 2.038c-1.687 0-2.965 1.37-2.965 3c0 1.72 1.334 3.01 3.066 3.01c1.053 0 1.913-.463 2.49-1.233l-.826-.611c-.43.577-.996.847-1.664.847c-.973 0-1.753-.7-1.912-1.64h4.697v-.373c0-1.72-1.222-3-2.886-3m6.295.068c-.634 0-1.098.294-1.381.758v-.713h-1.131v5.774h1.142V12.61c0-.894.544-1.47 1.291-1.47H24v-1.065h-.396zm-6.319.928c.85 0 1.564.588 1.756 1.47H15.52c.203-.882.916-1.47 1.765-1.47m-6.732.012c1.086 0 1.98.883 1.98 2.004a1.993 1.993 0 0 1-1.98 2.001A1.99 1.99 0 0 1 8.56 13.02a1.99 1.99 0 0 1 1.992-2.004z" fill="currentColor"></path></svg>
<span className="font-bold text-slate-800 font-geist text-xl">Uber</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl text-slate-800 iconify--simple-icons" data-icon="simple-icons:google" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path className="" d="M12.48 10.92v3.28h7.84c-.24 1.84-.853 3.187-1.787 4.133c-1.147 1.147-2.933 2.4-6.053 2.4c-4.827 0-8.6-3.893-8.6-8.72s3.773-8.72 8.6-8.72c2.6 0 4.507 1.027 5.907 2.347l2.307-2.307C18.747 1.44 16.133 0 12.48 0C5.867 0 .307 5.387.307 12s5.56 12 12.173 12c3.573 0 6.267-1.173 8.373-3.36c2.16-2.16 2.84-5.213 2.84-7.667c0-.76-.053-1.467-.173-2.053z" fill="currentColor"></path></svg>
<span className="font-bold text-slate-800 font-geist text-xl">Google</span>
</div>
<div className="flex items-center gap-2 hover:opacity-100 transition-opacity duration-300 cursor-pointer">
<svg aria-hidden="true" className="iconify text-3xl text-slate-800 iconify--simple-icons" data-icon="simple-icons:notion" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4.459 4.208c.746.606 1.026.56 2.428.466l13.215-.793c.28 0 .047-.28-.046-.326L17.86 1.968c-.42-.326-.981-.7-2.055-.607L3.01 2.295c-.466.046-.56.28-.374.466zm.793 3.08v13.904c0 .747.373 1.027 1.214.98l14.523-.84c.841-.046.935-.56.935-1.167V6.354c0-.606-.233-.933-.748-.887l-15.177.887c-.56.047-.747.327-.747.933zm14.337.745c.093.42 0 .84-.42.888l-.7.14v10.264c-.608.327-1.168.514-1.635.514c-.748 0-.935-.234-1.495-.933l-4.577-7.186v6.952L12.21 19s0 .84-1.168.84l-3.222.186c-.093-.186 0-.653.327-.746l.84-.233V9.854L7.822 9.76c-.094-.42.14-1.026.793-1.073l3.456-.233l4.764 7.279v-6.44l-1.215-.139c-.093-.514.28-.887.747-.933zM1.936 1.035l13.31-.98c1.634-.14 2.055-.047 3.082.7l4.249 2.986c.7.513.934.653.934 1.213v16.378c0 1.026-.373 1.634-1.68 1.726l-15.458.934c-.98.047-1.448-.093-1.962-.747l-3.129-4.06c-.56-.747-.793-1.306-.793-1.96V2.667c0-.839.374-1.54 1.447-1.632" fill="currentColor"></path></svg>
<span className="font-bold text-slate-800 font-geist text-xl">Notion</span>
</div>
</div>
</section>
<section className="">
<div className="flex items-center justify-between mb-8">
<h2 className="text-3xl font-semibold text-slate-900 font-geist tracking-tight">Meet the Experts</h2>
<div className="flex gap-2">
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-left-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20 12H4m0 0l6-6m-6 6l6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></button>
<button className="w-10 h-10 rounded-full border border-slate-200 flex items-center justify-center hover:bg-slate-50 transition"><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg></button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 gap-6">
<div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 text-center hover:shadow-lg transition-all group">
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1560250097-0b93528c311a?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-bold text-slate-900 font-geist">David K.</h3>
<p className="text-sm text-slate-500 font-geist mb-4">Senior Broker</p>
<div className="flex justify-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</div>
</div>
<div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 text-center hover:shadow-lg transition-all group">
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-bold text-slate-900 font-geist">Sarah A.</h3>
<p className="text-sm text-slate-500 font-geist mb-4">Luxury Specialist</p>
<div className="flex justify-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</div>
</div>
<div className="bg-white border border-slate-200/60 rounded-[2rem] p-6 text-center hover:shadow-lg transition-all group">
<div className="w-24 h-24 mx-auto rounded-full overflow-hidden mb-4 border-2 border-white shadow-md">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<h3 className="text-lg font-bold text-slate-900 font-geist">Michael O.</h3>
<p className="text-sm text-slate-500 font-geist mb-4">Investment Advisor</p>
<div className="flex justify-center gap-3 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-slate-400 hover:text-slate-900 cursor-pointer iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</div>
</div>
<div className="bg-slate-50 border border-slate-200/60 rounded-[2rem] p-6 text-center flex flex-col justify-center items-center h-full hover:bg-slate-100 transition-colors cursor-pointer group">
<div className="w-12 h-12 bg-white rounded-full flex items-center justify-center mb-4 shadow-sm group-hover:scale-110 transition-transform">
<svg aria-hidden="true" className="iconify text-slate-900 iconify--solar" data-icon="solar:user-plus-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M16 6a4 4 0 1 1-8 0a4 4 0 0 1 8 0" fill="currentColor"></path><path d="M14.477 21.92c-.726.053-1.547.08-2.477.08c-8 0-8-2.015-8-4.5S7.582 13 12 13c2.88 0 5.406.856 6.814 2.141C18.298 15 17.574 15 16.5 15c-1.65 0-2.475 0-2.987.513C13 16.025 13 16.85 13 18.5s0 2.475.513 2.987c.237.238.542.365.964.434" fill="currentColor" opacity=".5"></path><path clip-rule="evenodd" d="M16.5 22c-1.65 0-2.475 0-2.987-.513C13 20.975 13 20.15 13 18.5s0-2.475.513-2.987C14.025 15 14.85 15 16.5 15s2.475 0 2.987.513C20 16.025 20 16.85 20 18.5s0 2.475-.513 2.987C18.975 22 18.15 22 16.5 22m.583-5.056a.583.583 0 1 0-1.166 0v.973h-.973a.583.583 0 1 0 0 1.166h.973v.973a.583.583 0 1 0 1.166 0v-.973h.973a.583.583 0 1 0 0-1.166h-.973z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
<h3 className="text-lg font-bold text-slate-900 font-geist">Join Lumina</h3>
<p className="text-sm text-slate-500 font-geist">Become an Agent</p>
</div>
</div>
</section>
<section className="bg-white border border-slate-200/60 rounded-[2.5rem] py-16 px-6 md:px-12 relative overflow-hidden">
<div className="absolute top-0 right-0 p-12 opacity-5 pointer-events-none">
<svg height="200" viewbox="0 0 24 24" width="200"><path d="M14.017 21L14.017 18C14.017 16.8954 13.1216 16 12.017 16H9.01697C7.9124 16 7.01697 16.8954 7.01697 18L7.01697 21H2.01697V7L10.517 0.683772C10.8037 0.470556 11.2302 0.470556 11.517 0.683772L20.017 7V15H18.017V9L11.017 3.8L4.01697 9V19H9.01697V18C9.01697 18 9.01697 18 9.01697 18H12.017C12.017 18 12.017 18 12.017 18V19H14.017V21ZM16.017 21H22.017V17H16.017V21ZM15.017 19H23.017V16H15.017V19Z" fill="currentColor"></path></svg>
</div>
<h2 className="text-2xl font-semibold text-slate-900 font-geist tracking-tight mb-10 text-center">Happy Homeowners</h2>
<div className="grid grid-cols-1 md:grid-cols-3 gap-6 relative z-10">
<div className="bg-slate-50 rounded-2xl p-6">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="text-slate-700 font-geist text-sm leading-relaxed mb-6">"Finding a secure apartment in Accra while living in London was a nightmare until I found Lumina. The video tours and verification gave me total peace of mind."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1589156280159-27698a70f29e?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm font-geist">Sarah Jenkins</div>
<div className="text-xs text-slate-400 font-geist">Relocated from UK</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-6">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="text-slate-700 font-geist text-sm leading-relaxed mb-6">"As an investor, the market data Lumina provides is invaluable. I sold my property in Cantonments in just 3 weeks through their premium network."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm font-geist">Emmanuel Ofori</div>
<div className="text-xs text-slate-400 font-geist">Real Estate Investor</div>
</div>
</div>
</div>
<div className="bg-slate-50 rounded-2xl p-6">
<div className="flex gap-1 text-yellow-400 mb-4 text-xs">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg><svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path></svg>
</div>
<p className="text-slate-700 font-geist text-sm leading-relaxed mb-6">"The concierge team was fantastic. They handled all the negotiations and legal paperwork. Best real estate experience I've had in Ghana."</p>
<div className="flex items-center gap-3">
<div className="w-10 h-10 rounded-full bg-slate-200 flex items-center justify-center overflow-hidden">
<img className="w-full h-full object-cover" src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?q=80&amp;w=200&amp;auto=format&amp;fit=crop"/>
</div>
<div>
<div className="font-medium text-slate-900 text-sm font-geist">Adwoa Boateng</div>
<div className="text-xs text-slate-400 font-geist">Homeowner</div>
</div>
</div>
</div>
</div>
</section>
<section className="relative overflow-hidden bg-slate-900 rounded-[2.5rem] py-20 px-8 text-center mt-8">
<div className="absolute inset-0 bg-[url(https://grainy-gradients.vercel.app/noise.svg)] opacity-20"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-rose-500/20 via-transparent to-sky-500/20"></div>
<div className="relative z-10 max-w-2xl mx-auto flex flex-col items-center gap-6">
<div className="w-16 h-16 bg-white/10 backdrop-blur rounded-2xl flex items-center justify-center text-white mb-2 shadow-inner border border-white/10 animate-bounce">
<svg aria-hidden="true" className="iconify text-3xl iconify--solar" data-icon="solar:city-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M2 21.25a.75.75 0 0 0 0 1.5h20a.75.75 0 0 0 0-1.5h-5V16c0-1.886 0-2.828-.586-3.414S14.886 12 13 12h-2c-1.886 0-2.828 0-3.414.586S7 14.114 7 16v5.25zM9.25 15a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75m0 3a.75.75 0 0 1 .75-.75h4a.75.75 0 0 1 0 1.5h-4a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path><path d="M8 4.5c.943 0 1.414 0 1.707.293S10 5.557 10 6.5v1.792q.234.114.414.294c.404.404.53.978.569 1.914V12c-1.874 0-2.813.002-3.397.586C7 13.172 7 14.114 7 16v5.25H3V12c0-1.886 0-2.828.586-3.414A1.5 1.5 0 0 1 4 8.292V6.5c0-.943 0-1.414.293-1.707S5.057 4.5 6 4.5h.25V3a.75.75 0 0 1 1.5 0v1.5zm12.644.747c-.356-.514-.984-.75-2.24-1.22c-2.455-.921-3.682-1.381-4.543-.785C13 3.84 13 5.15 13 7.772V12c1.886 0 2.828 0 3.414.586S17 14.114 17 16v5.25h4V7.772c0-1.34 0-2.011-.356-2.525" fill="currentColor" opacity=".5"></path></svg>
</div>
<h2 className="text-3xl md:text-5xl font-semibold text-white font-geist tracking-tight">Ready to find your home?</h2>
<p className="text-slate-400 text-lg font-geist leading-relaxed">Join thousands of homeowners and investors in Accra using Lumina to make smarter real estate decisions.</p>
<div className="flex flex-col sm:flex-row gap-4 mt-4 w-full sm:w-auto">
<button className="px-8 py-3.5 bg-white text-slate-900 font-medium rounded-full hover:bg-slate-50 transition-colors font-geist w-full sm:w-auto shadow-xl">Browse Listings</button>
<button className="px-8 py-3.5 bg-slate-800 text-white border border-slate-700 font-medium rounded-full hover:bg-slate-700 transition-colors font-geist w-full sm:w-auto">Contact Sales</button>
</div>
</div>
</section>
<footer className="border-t border-slate-200 pt-16 pb-8">
<div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16">
<div className="col-span-2 md:col-span-1">
<a className="flex items-center gap-2 mb-6" href="#">
<svg aria-hidden="true" className="iconify text-slate-900" height="24" role="img" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 8A6 6 0 1 1 6 8a6 6 0 0 1 12 0" fill="#0f172a"></path><path d="M13.58 13.79a6 6 0 0 1-7.16-3.58a6 6 0 1 0 7.16 3.58" fill="#0f172a" opacity=".7"></path><path d="M13.58 13.79c.271.684.42 1.43.42 2.21a6 6 0 0 1-2 4.472a6 6 0 1 0 5.58-10.262a6.01 6.01 0 0 1-4 3.58" fill="#0f172a" opacity=".4"></path></svg>
<span className="text-lg text-slate-900 font-geist font-semibold tracking-tighter">Lumina</span>
</a>
<p className="text-sm text-slate-500 font-geist">Reimagining real estate in Ghana with technology and transparency.</p>
</div>
<div>
<h4 className="font-medium text-slate-900 font-geist mb-4">Platform</h4>
<ul className="space-y-3 text-sm text-slate-500 font-geist">
<li><a className="hover:text-slate-900" href="#">Listings</a></li>
<li><a className="hover:text-slate-900" href="#">Market Data</a></li>
<li><a className="hover:text-slate-900" href="#">Valuation</a></li>
<li><a className="hover:text-slate-900" href="#">Mobile App <span className="bg-rose-100 text-rose-700 text-[10px] px-1.5 py-0.5 rounded ml-1 font-bold">New</span></a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 font-geist mb-4">Company</h4>
<ul className="space-y-3 text-sm text-slate-500 font-geist">
<li><a className="hover:text-slate-900" href="#">About</a></li>
<li><a className="hover:text-slate-900" href="#">Careers</a></li>
<li><a className="hover:text-slate-900" href="#">Contact</a></li>
</ul>
</div>
<div>
<h4 className="font-medium text-slate-900 font-geist mb-4">Subscribe</h4>
<p className="text-xs text-slate-500 mb-3">Get market reports weekly.</p>
<div className="flex gap-2">
<input className="bg-white border border-slate-200 rounded-lg px-3 py-2 text-xs w-full focus:outline-none focus:border-slate-400" placeholder="Email" type="email"/>
<button className="bg-slate-900 text-white rounded-lg px-3 py-2 text-xs font-medium hover:bg-slate-800">Go</button>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-slate-400 font-geist">
<div>© 2024 Lumina Ghana. All rights reserved.</div>
<div className="flex gap-4">
<svg aria-hidden="true" className="iconify text-lg hover:text-slate-600 cursor-pointer iconify--simple-icons" data-icon="simple-icons:twitter" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M21.543 7.104c.015.211.015.423.015.636c0 6.507-4.954 14.01-14.01 14.01v-.003A13.94 13.94 0 0 1 0 19.539a9.88 9.88 0 0 0 7.287-2.041a4.93 4.93 0 0 1-4.6-3.42a4.9 4.9 0 0 0 2.223-.084A4.926 4.926 0 0 1 .96 9.167v-.062a4.9 4.9 0 0 0 2.235.616A4.93 4.93 0 0 1 1.67 3.148a13.98 13.98 0 0 0 10.15 5.144a4.929 4.929 0 0 1 8.39-4.49a9.9 9.9 0 0 0 3.128-1.196a4.94 4.94 0 0 1-2.165 2.724A9.8 9.8 0 0 0 24 4.555a10 10 0 0 1-2.457 2.549" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-lg hover:text-slate-600 cursor-pointer iconify--simple-icons" data-icon="simple-icons:instagram" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
<svg aria-hidden="true" className="iconify text-lg hover:text-slate-600 cursor-pointer iconify--simple-icons" data-icon="simple-icons:linkedin" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037c-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85c3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.06 2.06 0 0 1-2.063-2.065a2.064 2.064 0 1 1 2.063 2.065m1.782 13.019H3.555V9h3.564zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0z" fill="currentColor"></path></svg>
</div>
</div>
</footer>
</main>
<div className="fixed bottom-6 right-6 z-50">
<button className="w-14 h-14 bg-rose-600 rounded-full shadow-xl shadow-rose-600/30 text-white flex items-center justify-center hover:bg-rose-700 hover:scale-105 transition-all">
<svg aria-hidden="true" className="iconify text-2xl iconify--solar" data-icon="solar:chat-round-dots-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 23c6.075 0 11-4.925 11-11S18.075 1 12 1S1 5.925 1 12c0 1.76.413 3.423 1.148 4.898c.195.392.26.84.147 1.263l-.655 2.448a1.43 1.43 0 0 0 1.75 1.751l2.45-.655a1.8 1.8 0 0 1 1.262.147A10.96 10.96 0 0 0 12 23" fill="currentColor" opacity=".5"></path><path d="M10.9 12a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m-4.4 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0m8.8 0a1.1 1.1 0 1 0 2.2 0a1.1 1.1 0 0 0-2.2 0" fill="currentColor"></path></svg>
</button>
</div>


    </>
  );
}
