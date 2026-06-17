import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    const originalAddEventListener = document.addEventListener;
    const originalWindowAddEventListener = window.addEventListener;
    
    document.addEventListener = function(event, callback, options) {
      if (event === 'DOMContentLoaded') {
        setTimeout(() => {
          try { callback(new Event('DOMContentLoaded')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalAddEventListener.call(document, event, callback, options);
      }
    };
    
    window.addEventListener = function(event, callback, options) {
      if (event === 'load') {
        setTimeout(() => {
          try { callback(new Event('load')); } catch (e) { console.error(e); }
        }, 0);
      } else {
        originalWindowAddEventListener.call(window, event, callback, options);
      }
    };
    
    let onloadHandler = null;
    try {
      Object.defineProperty(window, 'onload', {
        set: function(fn) {
          onloadHandler = fn;
          setTimeout(() => {
            try { if (typeof fn === 'function') fn(); } catch (e) { console.error(e); }
          }, 0);
        },
        get: function() { return onloadHandler; },
        configurable: true
      });
    } catch (e) {}
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



  !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.5.2/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();



        document.addEventListener('DOMContentLoaded', function() {
            const ctx = document.getElementById('outcomeChart').getContext('2d');

            // Gradient for Line 1
            const gradient1 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient1.addColorStop(0, 'rgba(249, 115, 22, 0.5)');
            gradient1.addColorStop(1, 'rgba(249, 115, 22, 0)');

            // Gradient for Line 2
            const gradient2 = ctx.createLinearGradient(0, 0, 0, 400);
            gradient2.addColorStop(0, 'rgba(71, 85, 105, 0.5)');
            gradient2.addColorStop(1, 'rgba(71, 85, 105, 0)');

            new Chart(ctx, {
                type: 'line',
                data: {
                    labels: ['Year 0', 'Year 1', 'Year 2', 'Year 3', 'Year 4', 'Year 5'],
                    datasets: [
                        {
                            label: 'AGE Grads',
                            data: [65000, 95000, 125000, 158000, 195000, 240000],
                            borderColor: '#f97316',
                            backgroundColor: gradient1,
                            borderWidth: 2,
                            tension: 0.4,
                            pointBackgroundColor: '#1e1b4b',
                            pointBorderColor: '#f97316',
                            pointBorderWidth: 2,
                            pointRadius: 4,
                            fill: true
                        },
                        {
                            label: 'Industry Avg',
                            data: [58000, 65000, 78000, 92000, 110000, 125000],
                            borderColor: '#475569',
                            backgroundColor: gradient2,
                            borderWidth: 2,
                            borderDash: [5, 5],
                            tension: 0.4,
                            pointRadius: 0,
                            fill: true
                        }
                    ]
                },
                options: {
                    responsive: true,
                    maintainAspectRatio: false,
                    plugins: {
                        legend: { display: false },
                        tooltip: {
                            mode: 'index',
                            intersect: false,
                            backgroundColor: 'rgba(30, 27, 75, 0.9)',
                            titleColor: '#fff',
                            bodyColor: '#cbd5e1',
                            borderColor: 'rgba(255,255,255,0.1)',
                            borderWidth: 1,
                            padding: 10,
                            displayColors: true,
                            callbacks: {
                                label: function(context) {
                                    let label = context.dataset.label || '';
                                    if (label) {
                                        label += ': ';
                                    }
                                    if (context.parsed.y !== null) {
                                        label += new Intl.NumberFormat('en-US', { style: 'currency', currency: 'USD' }).format(context.parsed.y);
                                    }
                                    return label;
                                }
                            }
                        }
                    },
                    scales: {
                        y: {
                            beginAtZero: false,
                            grid: {
                                color: 'rgba(255, 255, 255, 0.05)',
                                drawBorder: false
                            },
                            ticks: {
                                color: '#64748b',
                                font: { family: "'Inter', sans-serif", size: 10 },
                                callback: function(value) {
                                    return '$' + value / 1000 + 'k';
                                }
                            }
                        },
                        x: {
                            grid: { display: false },
                            ticks: {
                                color: '#64748b',
                                font: { family: "'Inter', sans-serif", size: 10 }
                            }
                        }
                    },
                    interaction: {
                        mode: 'nearest',
                        axis: 'x',
                        intersect: false
                    }
                }
            });
        });
      


      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
    
    return () => {
      document.addEventListener = originalAddEventListener;
      window.addEventListener = originalWindowAddEventListener;
      try { delete window.onload; } catch (e) {}
    };
  }, []);

  return (
    <>
      

<div className="aura-background-component top-0 w-full -z-10 absolute h-[800px]" data-alpha-mask="96" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 96%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 96%, transparent)'}}><div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="hRFfUymDGOHwtFe7evR2"></div>
</div>

<div className="fixed inset-0 pointer-events-none z-0">
<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[800px] bg-indigo-600/20 blur-[120px] opacity-40"></div>
<div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-blue-600/10 blur-[100px] opacity-30"></div>

<div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-soft-light"></div>
</div>

<nav className="relative z-50 max-w-7xl mx-auto px-6 py-6 flex justify-between items-center">
<div className="flex items-center gap-12">
<a className="text-2xl font-bold tracking-tight bg-gradient-to-r from-orange-400 to-orange-600 text-transparent bg-clip-text" href="#">
          AGE
        </a>
<div className="hidden md:flex gap-8 text-sm font-medium text-slate-300">
<a className="hover:text-white transition-colors" href="#">Catalog</a>
<a className="hover:text-white transition-colors" href="#">Community</a>
</div>
</div>
<div className="flex items-center gap-6 text-sm font-medium">
<a className="hidden md:block text-slate-300 hover:text-white transition-colors" href="#">
          Login
        </a>
<a className="relative group" href="#">
<span className="absolute -bottom-1 left-0 w-full h-[2px] bg-orange-500 scale-x-100 group-hover:scale-x-110 transition-transform"></span>
          Become a Pro
        </a>
</div>
</nav>

<header className="z-10 max-w-7xl mr-auto ml-auto pt-12 pr-6 pb-32 pl-6 relative">
<div className="grid lg:grid-cols-2 gap-12 gap-x-12 gap-y-12 items-center">

<div className="space-y-8 relative">

<svg aria-hidden="true" className="iconify text-indigo-400 absolute -top-12 -left-12 opacity-50 w-8 h-8 iconify--solar" data-icon="solar:stars-minimalistic-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" fill="currentColor"></path>
<path d="M4.868 2.5c.03-.105.217-.106.248 0c.14.482.4 1.194.793 1.585c.393.39 1.108.646 1.59.783c.107.03.107.217.002.248c-.482.14-1.195.4-1.586.793c-.39.393-.645 1.108-.782 1.59c-.03.107-.218.107-.249.002c-.14-.482-.4-1.195-.793-1.586c-.393-.39-1.107-.645-1.59-.782c-.106-.03-.107-.218-.001-.249c.482-.14 1.194-.4 1.585-.793c.39-.393.646-1.107.783-1.59" fill="currentColor" opacity=".5"></path>
<path clip-rule="evenodd" d="M19 3.25a.75.75 0 0 1 .75.75v.25H20a.75.75 0 0 1 0 1.5h-.25V6a.75.75 0 0 1-1.5 0v-.25H18a.75.75 0 0 1 0-1.5h.25V4a.75.75 0 0 1 .75-.75" fill="currentColor" fill-rule="evenodd" opacity=".5"></path>
</svg>
<h1 className="text-5xl md:text-7xl font-semibold tracking-tight leading-[1.1]">
            Create
            <br/>
<span className="text-gradient">Tomorrow</span>
</h1>
<p className="text-lg md:text-xl text-slate-400 max-w-md leading-relaxed">
            Master the skills to future-proof your career in a rapidly evolving
            digital landscape.
          </p>
<button className="group hover:from-orange-400 hover:to-orange-500 flex transition-all shadow-orange-500/20 text-sm font-medium text-white bg-gradient-to-r from-orange-500 to-orange-600 pt-4 pr-8 pb-4 pl-8 shadow-lg gap-x-2 gap-y-2 items-center">
            Start coding now!
            <svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="flex h-[500px] items-center justify-center">

<div className="flex relative top-0 right-0 bottom-0 left-0 items-center justify-center" style={{}}>
<div className="animate-[spin_10s_linear_infinite] w-[400px] h-[400px] border-white/5 border rounded-full"></div>
<div className="w-[500px] h-[500px] border-white/5 border rounded-full absolute"></div>
</div>

<main className="overflow-hidden flex flex-col lg:h-[800px] bg-[#0f0f11]/80 w-full h-auto max-w-6xl z-10 border-white/10 border rounded-2xl absolute shadow-2xl backdrop-blur-xl -translate-y-1 scale-50 skew-x-5 skew-y-5 -rotate-x-15 -rotate-y-15 transition-all duration-700 ease-[cubic-bezier(0.25,0.8,0.25,1)] hover:scale-[0.55] hover:skew-x-0 hover:skew-y-0 hover:rotate-x-0 hover:rotate-y-0 hover:-translate-y-8 hover:shadow-2xl hover:shadow-indigo-500/20 group cursor-pointer">

<div className="absolute inset-0 bg-black z-0"></div>

<div className="-top-[50%] -right-[20%] aura-shape z-0 transform origin-center opacity-90 w-[120%] h-[200%] absolute rotate-12 scale-125">
</div>
<div className="absolute top-0 left-0 w-full h-full bg-gradient-to-r from-black via-black/80 to-transparent z-0"></div>

<div className="flex z-20 bg-white/5 w-full h-16 border-white/5 border-b pt-4 pr-6 pb-4 pl-6 relative backdrop-blur-md items-center justify-between">

<div className="flex items-center gap-2">
<div className="w-3 h-3 rounded-full bg-rose-500 hover:bg-rose-600 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-amber-400 hover:bg-amber-500 transition-colors"></div>
<div className="w-3 h-3 rounded-full bg-emerald-500 hover:bg-emerald-600 transition-colors"></div>
</div>

<div className="flex-1 max-w-3xl mx-6">
<div className="hover:bg-gray-900/70 transition-colors flex bg-gray-500/20 w-full h-9 border-white/10 border rounded-full px-3 gap-x-3 gap-y-3 items-center">
<svg className="text-white/40" height="1.2em" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M14.659 14.46a7.7 7.7 0 0 1-2.924.582C6.983 15.042 3.5 11.956 3.5 8.15C3.5 4.344 6.983 1.257 11.735 1.257c4.752 0 8.235 3.087 8.235 6.893c0 1.696-.653 3.256-1.765 4.502a1 1 0 1 1-1.493-1.334A5.7 5.7 0 0 0 17.97 8.15c0-2.618-2.62-4.893-6.235-4.893c-3.616 0-6.235 2.275-6.235 4.893c0 2.618 2.619 4.893 6.235 4.893c.895 0 1.75-.141 2.527-.398a1 1 0 0 1 1.25.467c.22.46.046 1.01-.353 1.348M16.516 16.58c.866.884 1.54 2.298 1.968 4.29a1 1 0 1 1-1.958.42c-.347-1.616-.867-2.624-1.424-3.193a1 1 0 0 1 1.414-1.517" fill="currentColor" fill-rule="evenodd" opacity="0.5"></path>
<circle className="" cx="9.5" cy="8.5" fill="currentColor" opacity="1" r="2.5"></circle>
</svg>
<span className="text-sm font-light text-white/60 tracking-wide">browser</span>
</div>
</div>

<div className="w-10 flex justify-end">
<svg className="text-white/30" height="1.2em" viewbox="0 0 24 24" width="1.2em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22q-2.075 0-3.9-.788t-3.175-2.137T2.788 15.9T2 12t.788-3.9t2.137-3.175T8.1 2.788T12 2t3.9.788t3.175 2.137T21.213 7 3.175t-3.175 2.138T12 22m0-2q3.35 0 5.675-2.325T20 12t-2.325-5.675T12 4T6.325 6.325T4 12t2.325 5.675T12 20m0-6.5q.625 0 1.063-.437T13.5 12t-.437-1.062T12 10.5t-1.062.438T10.5 12t.438 1.063T12 13.5M11 18h2v-2.15q0-.35-.162-.662t-.463-.513l-1.425-1.125q-.675-.525-1.062-1.287T9.5 10.65q0-1.05.725-1.775T12 8.15q.975 0 1.688.663T14.5 10.5h2q-.05-1.9-1.337-3.2T12 6q-2.05 0-3.275 1.35T7.625 10.65q0 1.15.538 2.15t1.537 1.725l1.05.825q.2.15.225.263t.025.237z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="z-10 flex-1 flex flex-col sm:px-20 pr-12 pb-24 pl-12 relative justify-center">

<div className="flex mb-10 gap-x-2 gap-y-2 items-center">
<div className="flex text-2xl font-medium text-white/60 tracking-tight gap-x-1 gap-y-1 items-center">
<svg className="text-white mr-1" height="1em" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle className="" cx="12" cy="12" fill="white" fillOpacity="0.2" r="9"></circle>
<circle className="" cx="12" cy="12" fill="white" r="5"></circle>
</svg>
        aura
      </div>
</div>
<div className="flex flex-col lg:flex-row items-center justify-between gap-12 w-full">

<div className="flex flex-col select-none mix-blend-overlay opacity-90 relative z-20 flex-shrink-0">
<h1 className="text-6xl sm:text-7xl lg:text-8xl text-white font-semibold tracking-tighter leading-[0.85]">
          BUILD
        </h1>
<h1 className="text-6xl sm:text-7xl lg:text-8xl text-white font-semibold tracking-tighter leading-[0.85]">
          BEAUTIFUL
        </h1>
<h1 className="text-6xl sm:text-7xl lg:text-8xl text-white font-semibold tracking-tighter leading-[0.85]">
          DESIGN
        </h1>

<div className="mt-8 max-w-lg">
<p className="sm:text-base uppercase leading-relaxed text-sm font-light text-white/60 tracking-widest">
            More tabs, faster page loads,and no cookie banners.
          </p>
</div>
</div>

<div className="relative w-full max-w-md lg:max-w-lg aspect-square lg:aspect-[4/5] rounded-3xl group/image hidden sm:block">

<div className="absolute -inset-4 bg-gradient-to-tr from-purple-500/20 to-orange-500/20 rounded-[2rem] blur-2xl opacity-0 group-hover/image:opacity-100 transition-opacity duration-700">
</div>

<div className="w-full h-full relative">
<img alt="Design Abstract" className="transform hover:scale-105 transition-transform duration-700 ease-out w-full h-full object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b8ba8f15-9598-4538-b90e-789dc8718618_1600w.png"/>

<div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-transparent pointer-events-none">
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 h-28 glass-dock flex items-center justify-center gap-3 sm:gap-5 px-4 sm:px-8 z-30">

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-white rounded-2xl flex items-center justify-center shadow-lg shadow-white/5">
<div className="w-5 h-5 bg-red-500 rounded-md"></div>
</div>
<div className="w-1 h-1 rounded-full bg-white/40"></div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#FFCD55] rounded-2xl flex items-center justify-center shadow-lg shadow-amber-500/20 overflow-hidden relative">
<div className="absolute -right-2 -bottom-2 w-10 h-10 bg-[#3B82F6] rounded-full"></div>
<svg className="relative z-10 text-white mix-blend-hard-light" height="1.8em" viewbox="0 0 24 24" width="1.8em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2L2 22h20L12 2zm0 4l7 14H5l7-14z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#34A853] rounded-2xl flex items-center justify-center shadow-lg shadow-green-500/20">
<span className="text-white font-bold text-2xl font-serif">P</span>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#5E6AD2] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
<svg className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M10 20v-6h4v6h5v-8h3L12 3L2 12h3v8z" fill="currentColor"></path>
</svg>
</div>
<div className="w-1 h-1 rounded-full bg-white/40"></div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-gradient-to-br from-orange-400 to-rose-500 rounded-2xl flex items-center justify-center shadow-lg shadow-orange-500/20">
<svg className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 2a9 9 0 0 0-9 9v11h18V11a9 9 0 0 0-9-9m0 16a2 2 0 1 1 0-4a2 2 0 0 1 0 4" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6366f1] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
<svg className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<rect className="" fill="currentColor" height="6" rx="1" width="6" x="4" y="4"></rect>
<rect className="" fill="currentColor" height="6" rx="1" width="6" x="14" y="4"></rect>
<rect className="" fill="currentColor" height="6" rx="1" width="6" x="4" y="14"></rect>
<rect className="" fill="currentColor" height="6" rx="1" width="6" x="14" y="14"></rect>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-slate-100 rounded-2xl flex items-center justify-center shadow-lg shadow-white/5">
<svg className="w-[29px] h-[29px]" data-icon-replaced="true" height="1.8em" strokeWidth="2" style={{color: 'rgb(0, 0, 0)', width: '29px', height: '29px'}} viewbox="0 0 24 24" width="1.8em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M4.223 3.738c-.378.09-.548.336-.5.72l.462 8.65c.036.702.392 1.096.966 1.054l.117-.008l3.153 6.32c.28.56.666.696 1.042.366c.21-.184.26-.454.26-.454l.092-4.996l6.635 4.777c.504.364 1.036.196 1.15-.398l1.176-13.84c.068-.804-.41-1.12-1.074-1.032l-1.92.253l-.116 5.894l-5.748-5.32c-.546-.505-1.137-.41-1.575.255L6.65 9.06l-.083-4.832z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-zinc-800 rounded-2xl flex items-center justify-center overflow-hidden border border-white/10 relative">

<div className="absolute inset-0 bg-[#34A853]"></div>
<div className="absolute inset-0 bg-[#EA4335] clip-path-polygon-[0_0,100%_0,50%_50%]"></div>
<div className="absolute inset-0 bg-[#FBBC05] clip-path-polygon-[100%_0,100%_100%,50%_50%]"></div>
<div className="w-6 h-6 bg-white rounded-full z-10 flex items-center justify-center">
<div className="w-4 h-4 bg-[#4285F4] rounded-full"></div>
</div>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="sm:w-14 sm:h-14 flex shadow-blue-500/20 bg-[#3B82F6] w-12 h-12 rounded-2xl shadow-lg items-center justify-center">
<svg className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M5.5 21a2.5 2.5 0 0 1-2.5-2.5V13h18v5.5a2.5 2.5 0 0 1-2.5 2.5zM3 9V5.5A2.5 2.5 0 0 1 5.5 3h13A2.5 2.5 0 0 1 21 5.5V9zm10.5 6a1.5 1.5 0 1 0 0-3a1.5 1.5 0 0 0 0 3" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#F43F5E] rounded-2xl flex items-center justify-center shadow-lg shadow-rose-500/20">
<svg className="text-white" height="1.5em" viewbox="0 0 24 24" width="1.5em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M18 3a3 3 0 0 0-3 3v7.35a3.5 3.5 0 1 0 2 3.15V9h2a1 1 0 0 0 1-1V5a3 3 0 0 0-3-3m-1 5v2.5a3.52 3.52 0 0 0-1.5-.35A3.5 3.5 0 0 0 12 13.65V6a1 1 0 0 1 1-1h4a1 1 0 0 1 1 1v2z" fill="currentColor"></path>
</svg>
</div>
</div>

<div className="group/icon flex flex-col items-center gap-2 cursor-pointer transition-transform hover:-translate-y-2 duration-300">
<div className="w-12 h-12 sm:w-14 sm:h-14 bg-[#6366F1] rounded-2xl flex items-center justify-center shadow-lg shadow-indigo-500/20">
<div className="w-6 h-6 bg-white rounded-md"></div>
</div>
</div>
</div>
</main>

<div className="glass-panel z-20 animate-bounce-slow w-48 pt-5 pr-5 pb-5 pl-5 absolute top-20 right-0">
<div className="text-xs font-semibold text-indigo-300 uppercase tracking-wider mb-2">
              New Course
            </div>
<div className="text-lg font-semibold leading-tight mb-1">
              AR/VR Vision Pro
            </div>
<div className="flex items-center gap-1 mb-3">
<span className="text-2xl font-bold text-orange-400">9.8</span>
<div className="flex text-orange-500 text-[10px]">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path>
<path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
</div>
</div>
<a className="text-xs text-slate-300 flex items-center hover:text-white" href="#">
              Enroll today
              <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="flex relative top-60 gap-y-8 gap-x-4">
<button className="glass-panel flex hover:bg-white/10 transition-colors w-10 h-10 items-center justify-center">
<svg className="lucide lucide-chevron-left w-4 h-4" data-lucide="chevron-left" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m15 18-6-6 6-6"></path></svg>
</button>
<button className="flex hover:bg-orange-400 transition-colors shadow-orange-500/20 bg-orange-500 w-10 h-10 shadow-lg items-center justify-center">
<svg className="lucide lucide-chevron-right w-[16px] h-[16px]" data-icon-replaced="true" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</header><div className="overflow-hidden window-shadow bg-[#0e0f14] w-full h-full max-w-6xl max-h-[700px] border-white/10 border rounded-xl mt-4 mr-auto mb-20 ml-auto">

<div className="traffic-lights flex bg-[#1c1d26] border-white/5 border-b items-center">
<div className="flex gap-2 pr-4 pl-4 gap-x-2 gap-y-2">
<div className="traffic-light close"></div>
<div className="traffic-light minimize"></div>
<div className="traffic-light maximize"></div>
</div>
<div className="flex-1 text-center pr-20">
<span className="text-xs font-medium text-slate-400">React Native Assistant</span>
</div>
</div>

<div className="h-[calc(100%-44px)] flex">

<aside className="w-64 flex flex-col sidebar-bg border-r border-white/5">

<div className="flex items-center gap-3 px-5 py-4 border-b border-white/5">
<svg className="lucide lucide-smartphone w-5 h-5 text-orange-400" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
<h1 className="font-semibold text-base text-white">RN Dev</h1>
<button className="ml-auto p-1.5 rounded-md hover:bg-white/5 transition-colors">
<svg className="lucide lucide-settings w-4 h-4 text-slate-400" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
</button>
</div>

<div className="flex items-center gap-3 px-5 py-3">
<div className="w-7 h-7 rounded-full border flex items-center justify-center text-xs font-bold bg-orange-500/20 border-orange-500/30 text-orange-400">JS</div>
<span className="text-sm font-medium text-white">Senior Dev</span>
</div>

<div className="px-5 pb-3">
<div className="relative">
<input className="w-full rounded-md bg-[#0e0f14] text-xs placeholder-slate-500 py-1.5 pl-7 pr-3 border border-white/5 focus:outline-none transition-all focus:border-orange-500/50" placeholder="Search codebase..." type="text"/>
<svg className="lucide lucide-search absolute left-2 top-1/2 -translate-y-1/2 w-3.5 h-3.5 text-slate-500" data-lucide="search" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m21 21-4.34-4.34"></path><circle cx="11" cy="11" r="8"></circle></svg>
</div>
</div>

<nav className="flex-1 overflow-y-auto px-3 space-y-5 py-2">
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Development
          </h3>
<ul className="space-y-0.5">
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-xs text-slate-300" href="#">
<svg className="lucide lucide-layout-template w-4 h-4" data-lucide="layout-template" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="18" x="3" y="3"></rect><rect height="7" rx="1" width="9" x="3" y="14"></rect><rect height="7" rx="1" width="5" x="16" y="14"></rect></svg>
                Components
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md text-xs font-medium bg-orange-500/15 text-orange-400" href="#">
<svg className="lucide lucide-terminal w-4 h-4" data-lucide="terminal" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 19h8"></path><path d="m4 17 6-6-6-6"></path></svg>
                AI Assistant
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-xs text-slate-300" href="#">
<svg className="lucide lucide-book-open w-4 h-4" data-lucide="book-open" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 7v14"></path><path d="M3 18a1 1 0 0 1-1-1V4a1 1 0 0 1 1-1h5a4 4 0 0 1 4 4 4 4 0 0 1 4-4h5a1 1 0 0 1 1 1v13a1 1 0 0 1-1 1h-6a3 3 0 0 0-3 3 3 3 0 0 0-3-3z"></path></svg>
                Documentation
              </a>
</li>
<li className="">
<a className="flex items-center gap-2.5 px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-xs text-slate-300" href="#">
<svg className="lucide lucide-database w-4 h-4" data-lucide="database" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><ellipse cx="12" cy="5" rx="9" ry="3"></ellipse><path d="M3 5V19A9 3 0 0 0 21 19V5"></path><path d="M3 12A9 3 0 0 0 21 12"></path></svg>
                Data Models
              </a>
</li>
</ul>
</div>
<div className="">
<h3 className="px-2 mb-2 text-[10px] font-semibold uppercase tracking-wider text-slate-500">
            Recent Tasks
          </h3>
<ul className="space-y-0.5 text-xs">
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-slate-300" href="#">
                Fixing Android build gradle errors
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-slate-300" href="#">
                Implementing Reanimated 3 shared tags
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-slate-300" href="#">
                Optimizing FlatList with Memo
              </a>
</li>
<li className="">
<a className="block truncate px-2 py-1.5 rounded-md hover:bg-white/5 transition-colors text-slate-300" href="#">
                Expo Router v3 navigation setup
              </a>
</li>
</ul>
</div>
</nav>

<div className="p-3 bg-gradient-to-br via-blue-500/20 to-purple-600/20 m-3 rounded-lg border from-orange-500/20 border-orange-500/20">
<h4 className="text-xs font-semibold text-white mb-1.5">
          Pro Features
        </h4>
<p className="text-[10px] text-slate-300 mb-2">
          Unlock cloud builds and EAS integration.
        </p>
<button className="w-full text-center text-[10px] py-1.5 bg-white/10 hover:bg-white/15 rounded-md text-white font-medium transition-colors">
            Upgrade
        </button>
</div>
</aside>

<section className="flex-1 flex flex-col bg-[#0e0f14]">

<header className="px-6 py-4 border-b border-white/5">
<h2 className="text-lg font-semibold text-white tracking-tight">
          Coding Assistant
        </h2>
<p className="text-[11px] text-slate-400 mt-0.5">
          Specialized in React Native, Expo, and native modules
        </p>
</header>

<div className="flex-1 overflow-y-auto p-6 star-bg">
<div className="flex flex-col items-start gap-2 mb-6 group relative" data-message-id="msg-1">
<span className="text-[10px] text-slate-500 font-medium">
              User
          </span>
<div className="bg-[#1a1b23] text-slate-100 text-sm p-3.5 rounded-xl rounded-tl-sm max-w-lg border border-white/5">
            How can I create a smooth expanding card animation using Reanimated?
          </div>
</div>
<div className="flex gap-4 items-start mb-6 group relative" data-message-id="msg-2">
<div className="flex flex-col items-center gap-2">
<div className="rounded-lg overflow-hidden shadow-xl border border-white/10 bg-[#1e1e1e] p-2">

<div className="text-[8px] font-mono mb-1 text-orange-300">AnimatedCard.tsx</div>
<div className="w-32 h-20 bg-[#111] rounded border border-white/5 p-2 font-mono text-[5px] text-slate-400 overflow-hidden leading-tight">
                    import Animated from '...'
                    const Card = () =&gt; {
                      const style = use...
                      return (
                        &lt;Animated.View...
                      )
                    }
                </div>
</div>
<div className="flex gap-1.5">
<button className="p-1.5 rounded-md hover:bg-white/10 transition-colors group">
<svg className="lucide lucide-copy w-3.5 h-3.5 text-slate-400 group-hover:text-white" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" ry="2" width="14" x="8" y="8"></rect><path d="M4 16c-1.1 0-2-.9-2-2V4c0-1.1.9-2 2-2h10c1.1 0 2 .9 2 2"></path></svg>
</button>
</div>
</div>
<div className="bg-[#1a1b23] text-slate-100 text-sm p-3.5 rounded-xl rounded-tl-sm max-w-md border border-white/5">
<p className="mb-2">You can use `useAnimatedStyle` and `withSpring` for a natural feel. Here is a reusable component structure:</p>
<div className="font-mono text-xs bg-black/30 p-2 rounded border border-white/5 text-orange-300">
                const animatedStyle = useAnimatedStyle(() =&gt; ({
                  height: withSpring(expanded.value ? 200 : 60)
                }));
            </div>
</div>
</div>
<div className="flex gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 bg-[#242633] rounded-md px-2.5 py-1 text-[10px] text-white border border-white/10">
<svg className="lucide lucide-file-code w-3 h-3" data-lucide="file-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M6 22a2 2 0 0 1-2-2V4a2 2 0 0 1 2-2h8a2.4 2.4 0 0 1 1.704.706l3.588 3.588A2.4 2.4 0 0 1 20 8v12a2 2 0 0 1-2 2z"></path><path d="M14 2v5a1 1 0 0 0 1 1h5"></path><path d="M10 12.5 8 15l2 2.5"></path><path d="m14 12.5 2 2.5-2 2.5"></path></svg>
              reanimated
          </span>
<span className="inline-flex items-center gap-1.5 bg-[#242633] rounded-md px-2.5 py-1 text-[10px] text-white border border-white/10">
<svg className="lucide lucide-smartphone w-3 h-3" data-lucide="smartphone" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="2" ry="2" width="14" x="5" y="2"></rect><path d="M12 18h.01"></path></svg>
              iOS &amp; Android
          </span>
</div>
</div>

<div className="border-t border-white/5 p-5 bg-[#0e0f14]">
<div className="flex items-center gap-2 bg-[#1a1b23] rounded-lg px-3 border border-white/5 transition-colors focus-within:border-orange-500/50">
<input className="hidden" id="file-input" multiple="" type="file"/>
<button className="p-1.5 rounded-md hover:bg-white/10 transition-colors">
<svg className="lucide lucide-paperclip w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 6-8.414 8.586a2 2 0 0 0 2.829 2.829l8.414-8.586a4 4 0 1 0-5.657-5.657l-8.379 8.551a6 6 0 1 0 8.485 8.485l8.379-8.551"></path></svg>
</button>
<input className="flex-1 bg-transparent border-none focus:ring-0 focus:outline-none text-sm placeholder-slate-500 text-white py-2.5" id="message-input" placeholder="Ask about React Native..." type="text"/>
<button className="p-1.5 rounded-md text-white transition-colors bg-orange-500 hover:bg-orange-600">
<svg className="lucide lucide-arrow-up w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m5 12 7-7 7 7"></path><path d="M12 19V5"></path></svg>
</button>
</div>
</div>
</section>

<aside className="sidebar-bg flex flex-col overflow-hidden w-64 border-white/5 border-l">

<header className="px-5 py-4 border-b border-white/5 flex items-center gap-2">
<h3 className="text-sm font-semibold text-white flex-1">Context</h3>
<span className="text-[10px] px-2 py-0.5 rounded border bg-orange-500/10 text-orange-400 border-orange-500/20">v0.74</span>
</header>

<div className="flex border-b border-white/5">
<button className="flex-1 py-2.5 text-[10px] font-semibold tracking-wider text-white relative hover:bg-white/5 transition-colors">
                FILES
                <span className="absolute left-0 bottom-0 h-0.5 w-full bg-orange-500"></span>
</button>
<button className="flex-1 py-2.5 text-[10px] font-semibold tracking-wider text-slate-400 hover:bg-white/5 hover:text-white transition-colors">
                DOCS
        </button>
</div>

<div className="flex-1 overflow-y-auto pt-4 pr-5 pb-4 pl-5 space-y-6">

<div className="">
<div className="flex items-center gap-2 mb-3">
<h4 className="text-xs font-semibold text-white flex-1">
              Active Projects
            </h4>
</div>
<ul className="space-y-2 text-xs">
<li>
<details className="group" open="">
<summary className="flex items-center gap-2 cursor-pointer list-none">
<svg className="lucide lucide-folder w-3.5 h-3.5 text-blue-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
<span className="text-white font-medium flex-1">
                          FoodDeliveryApp
                  </span>
<svg className="lucide lucide-chevron-down w-3.5 h-3.5 text-slate-400 transition-transform group-open:rotate-180" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</summary>
<ul className="mt-1.5 pl-5 space-y-1 text-[11px] text-slate-400">
<li className="cursor-pointer transition-colors flex items-center gap-1.5 hover:text-orange-300">
<span className="w-1.5 h-1.5 rounded-full bg-yellow-400"></span> App.tsx
                  </li>
</ul>
</details>
</li>
</ul>
</div>

<div className="">
<h4 className="text-xs font-semibold text-white mb-3">
            Dev Tools
          </h4>
<ul className="space-y-3 text-xs">
<li className="flex items-center justify-between">
<div className="flex items-center gap-2">
<svg className="lucide lucide-github w-4 h-4 text-slate-400" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{strokeWidth: '1.5'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
<span className="text-slate-300">GitHub</span>
</div>
<div className="flex items-center gap-2">
<span className="text-[10px] text-green-400">Connected</span>
<div className="w-1.5 h-1.5 rounded-full bg-green-500"></div>
</div>
</li>
</ul>
</div>
</div>
</aside>
</div>
</div>
<header className="lg:px-10 overflow-hidden text-white bg-[#0f1115] pt-12 pr-6 pb-24 pl-6 relative">
<div className="max-w-[1400px] mr-auto ml-auto">

<div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20 mb-20 gap-x-12 gap-y-12 items-center">

<div className="lg:col-span-6 flex flex-col gap-8 z-10">
<div className="">
<h1 className="lg:text-[5.5rem] leading-[1] text-6xl text-white mb-6 font-medium tracking-tight">
            Master the 
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-orange-400 to-orange-600">Future.</span>
</h1>
<p className="text-slate-400 text-lg font-light leading-relaxed max-w-lg">
            Don't just watch the future happen. Build it. Join the premier institute for advanced engineering and design, and launch a career that matters in the AI era.
          </p>
</div>

<div className="flex flex-wrap items-center gap-6 mt-2">
<button className="group px-8 py-4 bg-orange-500 text-white font-semibold text-base hover:bg-orange-600 transition-all shadow-[0_0_20px_rgba(249,115,22,0.3)] hover:shadow-[0_0_30px_rgba(249,115,22,0.5)] flex items-center gap-2">
            Explore Tracks
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="flex flex-col border-l border-white/10 pl-6">
<span className="text-sm font-medium text-white">Next Cohort</span>
<span className="text-sm text-slate-400">Starts Oct 12</span>
</div>
</div>
</div>

<div className="lg:col-span-6 relative">

<div className="relative overflow-hidden border border-white/10 bg-[#1e1b4b] aspect-[4/3] group shadow-2xl">
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/20 to-transparent opacity-60 mix-blend-overlay z-10"></div>
<div className="absolute top-6 right-6 z-20 bg-black/40 backdrop-blur-md border border-white/10 px-4 py-3 shadow-lg max-w-[180px]">
<div className="text-[10px] font-bold text-orange-400 uppercase tracking-wider mb-1">Alumni Success</div>
<div className="text-sm font-semibold text-white leading-tight">94% Hiring Rate within 3 months</div>
</div>
<img alt="Students collaborating" className="w-full h-full object-cover opacity-90 group-hover:scale-105 transition-transform duration-700" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec591e68-d8a6-47b5-97ae-06e46843a89a_1600w.png" style={{}}/>
</div>

<div className="flex mt-8 px-4 space-x-4 items-start justify-between border-t border-white/5 pt-6">
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-white tracking-tight mb-1">4.9/5</h3>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Course Rating</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-orange-400 tracking-tight mb-1">10k+</h3>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Graduates</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-indigo-400 tracking-tight mb-1">$95k</h3>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Avg Starting Salary</p>
</div>
<div className="text-center lg:text-left">
<h3 className="text-3xl font-medium text-white tracking-tight mb-1">300+</h3>
<p className="text-slate-500 text-xs font-medium uppercase tracking-wide">Hiring Partners</p>
</div>
</div>
</div>
</div>

<div className="w-full relative">

<div className="absolute inset-0 z-10 pointer-events-none bg-gradient-to-r from-[#0f1115] via-transparent to-[#0f1115]">
</div>
<div className="flex overflow-hidden w-full">
<div className="flex gap-6 animate-marquee w-max pt-4 pb-4 gap-x-6 gap-y-6">

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">Software Engineering</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Full-stack mastery. From distributed systems to reactive front-end interfaces using modern frameworks.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">AI &amp; Data Science</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Build the brain of the future. Master Machine Learning, Neural Networks, and Python at scale.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">Product Design</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Merge aesthetics with function. Advanced UI/UX principles for complex digital products and systems.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-blocks w-6 h-6" data-lucide="blocks" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M10 22V7a1 1 0 0 0-1-1H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-5a1 1 0 0 0-1-1H2"></path><rect height="8" rx="1" width="8" x="14" y="2"></rect></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">Web3 Development</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Architect decentralized applications. Smart contracts, Solidity, and Rust for the new web.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-code-2 w-6 h-6" data-lucide="code-2" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m18 16 4-4-4-4"></path><path d="m6 8-4 4 4 4"></path><path d="m14.5 4-5 16"></path></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">Software Engineering</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Full-stack mastery. From distributed systems to reactive front-end interfaces using modern frameworks.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-brain-circuit w-6 h-6" data-lucide="brain-circuit" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path><path d="M9 13a4.5 4.5 0 0 0 3-4"></path><path d="M6.003 5.125A3 3 0 0 0 6.401 6.5"></path><path d="M3.477 10.896a4 4 0 0 1 .585-.396"></path><path d="M6 18a4 4 0 0 1-1.967-.516"></path><path d="M12 13h4"></path><path d="M12 18h6a2 2 0 0 1 2 2v1"></path><path d="M12 8h8"></path><path d="M16 8V5a2 2 0 0 1 2-2"></path><circle cx="16" cy="13" r=".5"></circle><circle cx="18" cy="3" r=".5"></circle><circle cx="20" cy="21" r=".5"></circle><circle cx="20" cy="8" r=".5"></circle></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">AI &amp; Data Science</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Build the brain of the future. Master Machine Learning, Neural Networks, and Python at scale.
            </p>
</div>

<div className="w-[350px] bg-white/5 backdrop-blur-sm p-8 flex flex-col h-full border border-white/10 hover:border-white/30 transition-colors group relative overflow-hidden">
<div className="absolute inset-0 bg-white/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
<div className="w-12 h-12 bg-white/10 flex items-center justify-center mb-6 text-white group-hover:scale-110 transition-transform relative z-10">
<svg className="lucide lucide-palette w-6 h-6" data-lucide="palette" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
</div>
<h3 className="text-2xl text-white mb-3 font-medium tracking-tight relative z-10">Product Design</h3>
<p className="text-slate-400 text-sm leading-relaxed relative z-10">
              Merge aesthetics with function. Advanced UI/UX principles for complex digital products and systems.
            </p>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="max-w-7xl z-10 mr-auto ml-auto pt-20 pr-6 pb-20 pl-6 relative">
<div className="grid lg:grid-cols-12">

<div className="overflow-hidden group lg:col-span-7 md:p-12 text-slate-900 bg-gradient-to-br from-indigo-500 to-indigo-600 pt-8 pr-8 pb-8 pl-8 relative">
<div className="z-10 relative">
<h2 className="md:text-4xl text-3xl font-semibold text-slate-50 tracking-tight mb-2">
              A Revolutionary
              
              Learning Platform
            </h2>
<div className="w-16 h-1 bg-blue-600 mb-6 mt-4"></div>
<p className="md:text-base leading-relaxed text-sm text-slate-300 max-w-md mb-8">
              Thrive in an immersive environment combining leading academics
              with industry visionaries to ship real products.
            </p>
<div className="flex flex-wrap gap-4">
<button className="bg-orange-500 text-white px-6 py-3 text-sm font-medium hover:bg-orange-600 transition-colors flex items-center gap-2">
                Explore Catalog
                <svg className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="hover:bg-slate-50 transition-colors flex text-sm font-medium text-slate-300 border-slate-200 border px-6 py-3 gap-x-2 gap-y-2 items-center">
                Explore Skills
                <svg className="lucide lucide-chevron-right w-4 h-4" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<img alt="3D Sphere" className="-bottom-10 -right-10 md:w-80 group-hover:scale-105 transition-transform duration-500 opacity-20 w-64 object-cover absolute" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/19abf236-7d5a-481e-be5d-c25515ffd461_800w.png"/>
</div>

<div className="grid grid-rows-2 lg:col-span-5">

<div className="glass-panel hover:bg-white/5 transition-colors group overflow-hidden border-indigo-500/30 border pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute top-0 right-0 p-6 opacity-50 group-hover:opacity-100 transition-opacity">
<svg aria-hidden="true" className="iconify text-indigo-400 w-8 h-8 iconify--solar" data-icon="solar:monitor-smartphone-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M22 15v3c0 1.886 0 2.828-.586 3.414S19.886 22 18 22s-2.828 0-3.414-.586S14 19.886 14 18v-3c0-1.886 0-2.828.586-3.414S16.114 11 18 11s2.828 0 3.414.586S22 13.114 22 15m-5.75 5a.75.75 0 0 1 .75-.75h2a.75.75 0 0 1 0 1.5h-2a.75.75 0 0 1-.75-.75" fill="currentColor" fill-rule="evenodd"></path>
<path d="M8 17c-2.829 0-4.243 0-5.122-.879c-.569-.569-.807-1.363-.878-2.621V13h10.516v.5c-.016.437-.016.912-.016 1.41v3.18c0 .865 0 1.659.086 2.304c.096.711.32 1.463.939 2.08l.025.026H8A.75.75 0 0 1 8 21h3.25v-4z" fill="currentColor"></path>
<path d="M10 2h4c3.771 0 5.657 0 6.828 1.172S22 6.229 22 10v.138c-.508-.333-1.069-.48-1.606-.551C19.75 9.5 18.955 9.5 18.09 9.5h-.18c-.865 0-1.659 0-2.304.087c-.711.095-1.463.32-2.08.938c-.588.588-.82 1.296-.924 1.975v.5H2v-.5c-.007-.45 0-.948 0-1.5v-1c0-3.771 0-5.657 1.172-6.828S6.229 2 10 2" fill="currentColor" opacity=".5"></path>
</svg>
</div>
<span className="text-[10px] font-bold tracking-widest text-indigo-300 uppercase mb-2 block">
              New Track
            </span>
<h3 className="text-xl font-semibold mb-1">
              Full-Stack
              
              Engineering
            </h3>
</div>

<div className="grid grid-cols-2">

<div className="glass-panel hover:bg-white/5 transition-colors flex flex-col border-blue-500/30 border pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold tracking-widest text-blue-300 uppercase">
                  Featured
                </span>
<svg aria-hidden="true" className="iconify text-blue-400 w-6 h-6 iconify--solar" data-icon="solar:code-circle-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12s4.477 10 10 10" fill="currentColor" opacity=".5"></path>
<path d="M13.488 6.446a.75.75 0 0 1 .53.918l-2.588 9.66a.75.75 0 0 1-1.449-.389l2.589-9.659a.75.75 0 0 1 .918-.53M14.97 8.47a.75.75 0 0 1 1.06 0l.209.208c.635.635 1.165 1.165 1.529 1.642c.384.504.654 1.036.654 1.68s-.27 1.176-.654 1.68c-.364.477-.894 1.007-1.53 1.642l-.208.208a.75.75 0 1 1-1.06-1.06l.171-.172c.682-.682 1.139-1.14 1.434-1.528c.283-.37.347-.586.347-.77s-.064-.4-.347-.77c-.295-.387-.752-.846-1.434-1.528l-.171-.172a.75.75 0 0 1 0-1.06m-7 0a.75.75 0 0 1 1.06 1.06l-.171.172c-.682.682-1.138 1.14-1.434 1.528c-.283.37-.346.586-.346.77s.063.4.346.77c.296.387.752.846 1.434 1.528l.172.172a.75.75 0 1 1-1.061 1.06l-.208-.208c-.636-.635-1.166-1.165-1.53-1.642c-.384-.504-.653-1.036-.653-1.68s.27-1.176.653-1.68c.364-.477.894-1.007 1.53-1.642z" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-sm font-semibold mt-4">
                System
                
                Architecture
              </h3>
</div>

<div className="glass-panel hover:bg-white/5 transition-colors flex flex-col border-purple-500/30 border pt-6 pr-6 pb-6 pl-6 justify-between">
<div className="flex justify-between items-start">
<span className="text-[10px] font-bold tracking-widest text-purple-300 uppercase">
                  Popular
                </span>
<svg aria-hidden="true" className="iconify text-purple-400 w-6 h-6 iconify--solar" data-icon="solar:gamepad-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m10.667 6.134l-.502-.355A4.24 4.24 0 0 0 7.715 5h-.612c-.405 0-.813.025-1.194.16c-2.383.846-4.022 3.935-3.903 10.943c.024 1.412.354 2.972 1.628 3.581A3.2 3.2 0 0 0 5.027 20a2.74 2.74 0 0 0 1.53-.437c.41-.268.77-.616 1.13-.964c.444-.43.888-.86 1.424-1.138a4.1 4.1 0 0 1 1.89-.461H13c.658 0 1.306.158 1.89.46c.536.279.98.709 1.425 1.139c.36.348.72.696 1.128.964c.39.256.895.437 1.531.437a3.2 3.2 0 0 0 1.393-.316c1.274-.609 1.604-2.17 1.628-3.581c.119-7.008-1.52-10.097-3.903-10.942C17.71 5.025 17.3 5 16.897 5h-.612a4.24 4.24 0 0 0-2.45.78l-.502.354a2.31 2.31 0 0 1-2.666 0" fill="currentColor" opacity=".5"></path>
<path d="M16.75 9a.75.75 0 1 1 0 1.5a.75.75 0 0 1 0-1.5m-9.25.25a.75.75 0 0 1 .75.75v.75H9a.75.75 0 0 1 0 1.5h-.75V13a.75.75 0 0 1-1.5 0v-.75H6a.75.75 0 0 1 0-1.5h.75V10a.75.75 0 0 1 .75-.75m11.5 2a.75.75 0 1 1-1.5 0a.75.75 0 0 1 1.5 0m-3.75.75a.75.75 0 1 0 0-1.5a.75.75 0 0 0 0 1.5m2.25.75a.75.75 0 1 0-1.5 0a.75.75 0 0 0 1.5 0" fill="currentColor"></path>
</svg>
</div>
<h3 className="text-sm font-semibold mt-4">
                Game
                
                Design
              </h3>
</div>
</div>
</div>
</div>
</section>
<section className="z-10 lg:py-32 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-indigo-500/10 blur-[120px] pointer-events-none -z-10"></div>
<div className="grid lg:grid-cols-12 gap-12 lg:gap-24 items-center mb-24">

<div className="lg:col-span-5 space-y-8">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-blue-500/10 border border-blue-500/20 text-blue-300 text-[10px] font-bold uppercase tracking-widest">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 bg-blue-500"></span>
</span>
            Student Outcomes
          </div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tight leading-[1.1]">
            Accelerate your
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 to-purple-400">
              career trajectory
            </span>
</h2>
<p className="text-slate-400 text-lg leading-relaxed">
            Our graduates don't just find jobs—they define the future of
            engineering. Compare the growth trajectory of AGE alumni against
            traditional computer science graduates.
          </p>
<div className="flex flex-col gap-4 pt-4">
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-orange-500/10 border border-orange-500/20 flex items-center justify-center text-orange-500">
<svg className="lucide lucide-trending-up w-6 h-6" data-lucide="trending-up" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 7h6v6"></path><path d="m22 7-8.5 8.5-5-5L2 17"></path></svg>
</div>
<div className="">
<div className="text-2xl font-bold text-white">3.5x</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Faster Promotion Rate
                </div>
</div>
</div>
<div className="w-full h-px bg-white/5"></div>
<div className="flex items-center gap-4">
<div className="w-12 h-12 bg-blue-500/10 border border-blue-500/20 flex items-center justify-center text-blue-500">
<svg className="lucide lucide-briefcase w-6 h-6" data-lucide="briefcase" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 20V4a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"></path><rect height="14" rx="2" width="20" x="2" y="6"></rect></svg>
</div>
<div className="">
<div className="text-2xl font-bold text-white">94%</div>
<div className="text-xs text-slate-500 font-medium uppercase tracking-wide">
                  Hired within 3 months
                </div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-7">
<div className="relative bg-[#1e1b4b] border border-white/10 p-6 md:p-8 shadow-2xl overflow-hidden group">

<div className="absolute inset-0 bg-gradient-to-tr from-white/5 to-transparent pointer-events-none"></div>
<div className="flex justify-between items-center mb-8 relative z-10">
<div>
<h3 className="font-semibold text-lg">Salary Progression</h3>
<p className="text-xs text-slate-400">
                  Average annual compensation (USD)
                </p>
</div>
<div className="flex gap-4 text-[10px] font-medium uppercase tracking-wider">
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-orange-500"></span>
                  AGE Grads
                </div>
<div className="flex items-center gap-2">
<span className="w-2 h-2 bg-slate-600"></span>
                  Market
                </div>
</div>
</div>

<div className="relative h-[300px] w-full z-10">
<canvas className="" height="600" id="outcomeChart" style={{display: 'block', boxSizing: 'border-box', height: '300px', width: '612.7px'}} width="1225"></canvas>
</div>
</div>
</div>
</div>

<div className="border-t border-white/5 pt-20">
<div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
<div className="">
<h3 className="text-2xl font-semibold mb-2">
              Learn from industry architects
            </h3>
<p className="text-slate-400 text-sm">
              Direct mentorship from engineers shipping code at scale.
            </p>
</div>
<a className="group text-sm font-medium text-orange-500 flex items-center gap-2 hover:text-orange-400 transition-colors" href="#">
            View all mentors
            <svg className="lucide lucide-arrow-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="group hover:from-white/20 hover:to-white/5 transition-all duration-300 bg-gradient-to-b from-white/10 to-transparent pt-px pr-px pb-px pl-px relative">
<div className="flex flex-col overflow-hidden group-hover:bg-zinc-900 transition-colors bg-gradient-to-br from-white/10 via-white/0 to-white/10 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex gap-4 mb-4 gap-x-4 gap-y-4 items-center">
<img alt="Mentor" className="w-12 h-12 object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/cd72a53b-6aa7-44f6-a2f5-c1f742587382_320w.webp" style={{}}/>
<div className="">
<div className="font-semibold text-sm">Sarah Chen</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                    Ex-DeepMind
                  </div>
</div>
</div>
<p className="text-slate-400 text-xs leading-relaxed mb-4">
                Specializing in Large Language Models and reinforcement learning
                strategies.
              </p>
<div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-indigo-300 bg-indigo-500/10 px-2 py-1 w-fit">
<svg className="lucide lucide-cpu w-3 h-3" data-lucide="cpu" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 20v2"></path><path d="M12 2v2"></path><path d="M17 20v2"></path><path d="M17 2v2"></path><path d="M2 12h2"></path><path d="M2 17h2"></path><path d="M2 7h2"></path><path d="M20 12h2"></path><path d="M20 17h2"></path><path d="M20 7h2"></path><path d="M7 20v2"></path><path d="M7 2v2"></path><rect height="16" rx="2" width="16" x="4" y="4"></rect><rect height="8" rx="1" width="8" x="8" y="8"></rect></svg>
                AI Research
              </div>
</div>
</div>

<div className="group relative p-px bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 hover:to-white/5 transition-all duration-300">
<div className="flex flex-col overflow-hidden group-hover:bg-zinc-900 transition-colors bg-gradient-to-br from-white/10 to-white/0 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-12 h-12 object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2da2d7c8-76db-4aef-aec3-635a286f5977_320w.webp" style={{}}/>
<div>
<div className="font-semibold text-sm">Marcus Cole</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                    Stripe Core
                  </div>
</div>
</div>
<p className="text-slate-400 text-xs leading-relaxed mb-4">
                Architecting high-availability payments infrastructure for
                millions of users.
              </p>
<div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-blue-300 bg-blue-500/10 px-2 py-1 w-fit">
<svg className="lucide lucide-server w-3 h-3" data-lucide="server" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
                Backend Systems
              </div>
</div>
</div>

<div className="group relative p-px bg-gradient-to-b from-white/10 to-transparent hover:from-white/20 hover:to-white/5 transition-all duration-300">
<div className="flex flex-col overflow-hidden group-hover:bg-zinc-900 transition-colors bg-gradient-to-br from-white/10 to-white/0 h-full px-6 py-6 relative">
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-12 h-12 object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/59c85ed7-9ae4-40eb-88bf-fa793ae1de22_320w.webp" style={{}}/>
<div className="">
<div className="font-semibold text-sm">Elena Rodriguez</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                    Vercel Design
                  </div>
</div>
</div>
<p className="text-slate-400 text-xs leading-relaxed mb-4">
                Creating design systems that bridge the gap between Figma and
                React.
              </p>
<div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-purple-300 bg-purple-500/10 px-2 py-1 w-fit">
<svg className="lucide lucide-palette w-3 h-3" data-lucide="palette" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M12 22a1 1 0 0 1 0-20 10 9 0 0 1 10 9 5 5 0 0 1-5 5h-2.25a1.75 1.75 0 0 0-1.4 2.8l.3.4a1.75 1.75 0 0 1-1.4 2.8z"></path><circle cx="13.5" cy="6.5" fill="currentColor" r=".5"></circle><circle cx="17.5" cy="10.5" fill="currentColor" r=".5"></circle><circle cx="6.5" cy="12.5" fill="currentColor" r=".5"></circle><circle cx="8.5" cy="7.5" fill="currentColor" r=".5"></circle></svg>
                UI Engineering
              </div>
</div>
</div>

<div className="group hover:from-white/20 hover:to-white/5 transition-all duration-300 bg-gradient-to-b from-white/10 to-transparent pt-px pr-px pb-px pl-px relative">
<div className="flex flex-col overflow-hidden group-hover:bg-zinc-900 transition-colors bg-gradient-to-br from-white/10 to-white/0 h-full pt-6 pr-6 pb-6 pl-6 relative">
<div className="flex items-center gap-4 mb-4">
<img alt="Mentor" className="w-12 h-12 object-cover border border-white/10" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/5b2b94ae-4a0b-458d-b838-58b0fb5fadfd_320w.webp" style={{}}/>
<div>
<div className="font-semibold text-sm">David Kim</div>
<div className="text-[10px] font-medium text-slate-400 uppercase tracking-wide">
                    Y-Combinator
                  </div>
</div>
</div>
<p className="text-slate-400 text-xs leading-relaxed mb-4">
                Serial founder mentoring students on MVP validation and growth
                hacking.
              </p>
<div className="mt-auto flex items-center gap-2 text-[10px] font-mono text-green-300 bg-green-500/10 px-2 py-1 w-fit">
<svg className="lucide lucide-rocket w-3 h-3" data-lucide="rocket" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
                Startups
              </div>
</div>
</div>
</div>
</div>



</section>

<section className="z-10 overflow-hidden pt-32 pb-32 relative">

<div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none" style={{}}>
<h2 className="text-[12rem] md:text-[20vw] font-black text-white/5 leading-none tracking-tighter whitespace-nowrap">
          NEXTLEVEL
        </h2>
</div>
<div className="flex flex-col max-w-4xl z-10 mr-auto ml-auto relative items-center">

<div className="md:w-300 md:h-96 z-10 w-400 h-64 relative">
<div className="blur-[80px] bg-amber-300/20 absolute top-0 right-0 bottom-0 left-0"></div>
<img alt="Cute Robot" className="z-10 animate-bounce-slow w-full h-full object-contain relative" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e28af382-f66f-4955-9581-e54f811d6f67_800w.png"/>
</div>

<div className="mt-8 glass-panel p-2 pl-6 pr-2 flex items-center gap-6 md:gap-12 max-w-full mx-4 shadow-2xl border border-white/20" style={{}}>
<div className="flex flex-col">
<span className="text-[10px] text-slate-400 uppercase tracking-wide">
              Rating
            </span>
<div className="flex text-orange-400 text-xs gap-0.5">
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M9.153 5.408C10.42 3.136 11.053 2 12 2s1.58 1.136 2.847 3.408l.328.588c.36.646.54.969.82 1.182s.63.292 1.33.45l.636.144c2.46.557 3.689.835 3.982 1.776c.292.94-.546 1.921-2.223 3.882l-.434.507c-.476.557-.715.836-.822 1.18c-.107.345-.071.717.001 1.46l.066.677c.253 2.617.38 3.925-.386 4.506s-1.918.051-4.22-1.009l-.597-.274c-.654-.302-.981-.452-1.328-.452s-.674.15-1.328.452l-.596.274c-2.303 1.06-3.455 1.59-4.22 1.01c-.767-.582-.64-1.89-.387-4.507l.066-.676c.072-.744.108-1.116 0-1.46c-.106-.345-.345-.624-.821-1.18l-.434-.508c-1.677-1.96-2.515-2.941-2.223-3.882S3.58 8.328 6.04 7.772l.636-.144c.699-.158 1.048-.237 1.329-.45s.46-.536.82-1.182z" fill="currentColor"></path>
</svg>
<svg aria-hidden="true" className="iconify iconify--solar" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path>
<path d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
</div>
</div>
<div className="flex items-center gap-3">
<button className="w-10 h-10 bg-orange-500 flex items-center justify-center hover:bg-orange-400 transition-colors shadow-lg shadow-orange-500/30">
<svg className="lucide lucide-play w-4 h-4 fill-white text-white ml-0.5" data-lucide="play" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 5a2 2 0 0 1 3.008-1.728l11.997 6.998a2 2 0 0 1 .003 3.458l-12 7A2 2 0 0 1 5 19z"></path></svg>
</button>
<div className="flex flex-col">
<span className="text-xs font-semibold">Preview</span>
<span className="text-[10px] text-slate-400">The Course</span>
</div>
</div>
<button className="bg-gradient-to-r from-orange-500 to-orange-600 text-white px-6 py-2.5 text-sm font-medium hover:shadow-lg hover:shadow-orange-500/25 transition-all">
            Enroll Today
          </button>
</div>
</div>
</section><section className="overflow-hidden z-10 bg-zinc-950 border-white/5 border-t pt-32 pb-32 relative">

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[600px] bg-emerald-500/5 blur-[120px] pointer-events-none"></div>
<div className="opacity-10 mix-blend-overlay bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-10 max-w-7xl mr-auto ml-auto pr-6 pl-6 relative">

<div className="flex flex-col items-center text-center max-w-3xl mx-auto mb-24">
<div className="inline-flex items-center gap-2 px-3 py-1 bg-white/5 border border-white/10 text-slate-300 text-[10px] font-bold uppercase tracking-widest mb-8 backdrop-blur-sm hover:bg-white/10 transition-colors cursor-default">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex h-2 w-2 bg-emerald-500"></span>
</span>
        Global Collective
      </div>
<h2 className="text-4xl md:text-6xl font-semibold tracking-tight mb-8 text-white">
        Built by engineers, 
        <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-orange-600">trusted by builders.</span>
</h2>
<p className="text-lg text-slate-400 leading-relaxed max-w-xl">
        Join a network of 50,000+ developers shipping code at the world's most innovative companies.
      </p>
</div>

<section className="[animation:fadeSlideIn_0.8s_ease-out_0.6s_both] animate-on-scroll animate sm:px-6 lg:px-8 lg:mb-20 lg:mt-10 max-w-7xl z-10 mt-40 mr-auto mb-20 ml-auto pt-16 pr-4 pb-6 pl-4 relative">
<div className="text-center">
<p className="uppercase text-sm font-medium text-slate-400 tracking-wide">
      Trusted by teams at leading companies
    </p>
</div>
<div className="overflow-hidden mt-6 relative">
<div className="" style="mask-image: linear-gradient(to right, transparent, black 15%, black 85%, transparent); -webkit-mask-image:
linear-gradient(to right, transparent, black 15%, black 85%, transparent);">
<div className="flex gap-6 will-change-transform animate-[marquee-left_30s_linear_infinite] gap-x-6 gap-y-6">
<div className="flex gap-6 shrink-0 gap-x-0 sm:gap-x-6 lg:gap-x-20 gap-y-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[120px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
<div className="flex shrink-0 gap-x-0 sm:gap-x-6 lg:gap-x-20 gap-y-6">
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/e5f2922d-4fb6-4f7c-8795-cd9ba63105a4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/92287bc0-bc70-4864-bf05-a89c1b99a218_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/8284c62f-bfed-4d35-aaa2-956d0a8969b3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/3764a6eb-78e1-495f-9143-c85a648446c4_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[100px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/dea31d52-7076-423f-bace-53eeec3014d3_1600w.png)] bg-cover rounded-lg" href="#"></a>
<a className="inline-flex items-center justify-center bg-center mix-blend-screen w-[150px] h-[40px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/b16a9cf6-6be1-4d0d-bc63-07a471092998_1600w.png)] bg-cover rounded-lg" href="#"></a>
</div>
</div>
</div>
</div>
</section>

<div className="grid md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="space-y-6">

<div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 hover:bg-white/[0.04] transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<img alt="User" className="w-10 h-10 border border-white/10 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/62b4b405-1752-4bfe-901f-ffae11bd07b4_320w.webp"/>
<div className="">
<div className="text-sm font-medium text-white">Elena S.</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Frontend Lead</div>
</div>
</div>
<svg className="lucide lucide-twitter w-4 h-4 text-slate-600 group-hover:text-[#1DA1F2] transition-colors" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
            The system design curriculum is unlike anything else. I went from junior to senior in <span className="text-white font-medium">14 months</span> using these exact patterns.
          </p>
</div>

<div className="group relative overflow-hidden border border-white/5">
<img alt="Setup" className="w-full h-48 object-cover opacity-60 group-hover:opacity-80 transition-opacity duration-500" src="https://images.unsplash.com/photo-1555066931-4365d14bab8c?w=600&amp;q=80"/>
<div className="absolute inset-0 bg-gradient-to-t from-[#1e1b4b] via-transparent to-transparent"></div>
<div className="absolute bottom-0 left-0 p-6">
<div className="flex items-center gap-2 mb-2 text-emerald-400 text-xs font-mono">
<svg className="lucide lucide-check-circle" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"></path><path d="m9 11 3 3L22 4"></path></svg>
              Verified Graduate
            </div>
<p className="text-white text-sm font-medium">"Just shipped my capstone project. The CI/CD pipeline integration was seamless."</p>
</div>
</div>
</div>

<div className="space-y-6">

<div className="group p-6 bg-gradient-to-br from-indigo-500/10 to-purple-500/5 border border-indigo-500/20 hover:border-indigo-500/30 transition-all duration-300">
<div className="mb-4 text-indigo-400">
<svg className="w-6 h-6" fill="currentColor" height="24" stroke="none" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4.5 16.5c-1.5 1.26-2 5-2 5s3.74-.5 5-2c.71-.84.7-2.13-.09-2.91a2.18 2.18 0 0 0-2.91-.09z"></path><path d="m12 15-3-3a22 22 0 0 1 2-3.95A12.88 12.88 0 0 1 22 2c0 2.72-.78 7.5-6 11a22.35 22.35 0 0 1-4 2z"></path><path d="M9 12H4s.55-3.03 2-4c1.62-1.08 5 0 5 0"></path><path d="M12 15v5s3.03-.55 4-2c1.08-1.62 0-5 0-5"></path></svg>
</div>
<p className="text-indigo-100 text-lg font-medium leading-relaxed mb-6">
            "AGE doesn't just teach syntax. It teaches you how to think like an architect. Best ROI on education I've ever had."
          </p>
<div className="flex items-center gap-3 pt-4 border-t border-indigo-500/20">
<img alt="User" className="w-8 h-8 border border-indigo-500/30 object-cover" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/598c196d-b71c-4a8f-8b54-5720ea359164_320w.webp"/>
<div className="text-xs">
<div className="text-white font-medium">Marcus Chen</div>
<div className="text-indigo-300">CTO @ Stealth</div>
</div>
</div>
</div>

<div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="flex items-center gap-3 mb-4">
<div className="w-8 h-8 bg-orange-500/20 flex items-center justify-center text-orange-500">
<svg className="lucide lucide-quote" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M3 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2H4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path><path d="M15 21c3 0 7-1 7-8V5c0-1.25-.756-2.017-2-2h-4c-1.25 0-2 .75-2 1.972V11c0 1.25.75 2 2 2 1 0 1 0 1 1v1c0 1-1 2-2 2s-1 .008-1 1.031V20c0 1 0 1 1 1Z"></path></svg>
</div>
<span className="text-xs font-mono text-slate-500">@sarah_codes</span>
</div>
<p className="text-slate-400 text-sm">
            The live environments are a game changer. No more local config hell. I just spin up a container and start coding.
          </p>
</div>
</div>

<div className="space-y-6">

<div className="group p-6 bg-white/[0.02] border border-white/5 hover:border-white/10 transition-all duration-300">
<div className="flex items-start justify-between mb-4">
<div className="flex items-center gap-3">
<div className="w-10 h-10 bg-slate-800 border border-white/10 flex items-center justify-center text-slate-400 font-semibold">JK</div>
<div>
<div className="text-sm font-medium text-white">James Kim</div>
<div className="text-[10px] text-slate-500 uppercase tracking-wide">Full Stack Dev</div>
</div>
</div>
<div className="flex text-emerald-500">
<svg fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor" height="12" stroke="none" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
<svg fill="currentColor stroke=" height="12" none"="" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon></svg>
</div>
</div>
<p className="text-slate-400 text-sm leading-relaxed">
            The mentorship aspect is real. I got stuck on a Redis implementation and got detailed feedback from an actual engineer within 20 minutes.
          </p>
</div>

<div -bottom-4="" -right-4="" 10="" absolute="" className="group p-6 bg-[#5865F2 hover:bg-[#2C4] transition-colors cursor-pointer text-white relative overflow-hidden &lt;svg=" fill="currentColor" h-24="" rotate-12"="" text-white="" viewbox="0 0 24 24" w-24=""><path d="M20.317 4.3698a19.7913 19.7913 0 00-4.8851-1.5152.0741.0741 0 00-.0785.0371c-.211.3753-.4447.8648-.6083 1.2495-1.8447-.2762-3.68-.2762-5.4868 0-.1636-.3933-.4058-.8742-.6177-1.2495a.077.077 0 00-.0785-.037 19.7363 19.7363 0 00-4.8852 1.515.0699.0699 0 00-.0321.0277C.5334 9.0458-.319 13.5799.0992 18.0578a.0824.0824 0 00.0312.0561c2.0528 1.5076 4.0413 2.4228 5.9929 3.0294a.0777.0777 0 00.0842-.0276c.4616-.6304.8731-1.2952 1.226-1.9942a.076.076 0 00-.0416-.1057c-.6528-.2476-1.2743-.5495-1.8722-.8923a.077.077 0 01-.0076-.1277c.1258-.0943.2517-.1923.3718-.2914a.0743.0743 0 01.0776-.0105c3.9278 1.7933 8.18 1.7933 12.0614 0a.0739.0739 0 01.0785.0095c.1202.099.246.1981.3728.2924a.077.077 0 01-.0066.1276 12.2986 12.2986 0 01-1.873.8914.0766.0766 0 00-.0407.1067c.3604.698.7719 1.3628 1.225 1.9932a.076.076 0 00.0842.0286c1.961-.6067 3.9495-1.5219 6.0023-3.0294a.077.077 0 00.0313-.0552c.5004-5.177-.5328-9.7135-3.5686-13.638a.0766.0766 0 00-.032-.0277zM8.52 14.9736c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9555-2.4189 2.157-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419zm7.9748 0c-1.1825 0-2.1569-1.0857-2.1569-2.419 0-1.3332.9554-2.4189 2.1569-2.4189 1.2108 0 2.1757 1.0952 2.1568 2.419 0 1.3332-.946 2.419-2.1568 2.419z"></path>
<div className="relative z-10">
<h4 className="font-bold text-lg mb-1">Join the Discord</h4>
<p className="text-white/80 text-xs mb-4">Connect with fellow students and mentors.</p>
<div className="inline-flex items-center gap-2 text-xs font-semibold bg-white/10 px-3 py-1.5">
<span className="w-1.5 h-1.5 bg-green-400"></span>
              4,203 online now
 </div>
</div>
</div>
</div>
</div>
</div></section>

<section className="z-10 max-w-7xl mr-auto ml-auto pt-24 pr-6 pb-24 pl-6 relative">
<h2 className="text-3xl md:text-5xl font-semibold tracking-tight mb-16">
        AGE Summit 2024
      </h2>
<div className="grid lg:grid-cols-4 gap-12 gap-x-12 gap-y-12">


<div className="lg:col-span-3 grid md:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="md:p-8 flex flex-col overflow-hidden group bg-gradient-to-b from-orange-500 to-orange-600 h-96 pt-6 pr-6 pb-6 pl-6 relative">
<div className="z-10 flex-1 flex flex-col relative justify-end">
<svg aria-hidden="true" className="iconify text-white/90 w-16 h-16 mb-6 iconify--solar" data-icon="solar:chart-square-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M12 22c-4.714 0-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12s0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22" fill="currentColor" opacity=".5"></path>
<path d="M12 5.25a.75.75 0 0 1 .75.75v12a.75.75 0 0 1-1.5 0V6a.75.75 0 0 1 .75-.75m-5 3a.75.75 0 0 1 .75.75v9a.75.75 0 0 1-1.5 0V9A.75.75 0 0 1 7 8.25m10 4a.75.75 0 0 1 .75.75v5a.75.75 0 0 1-1.5 0v-5a.75.75 0 0 1 .75-.75" fill="currentColor"></path>
</svg>
<h3 className="text-2xl font-bold leading-tight mb-4">
                ConfirmedKeynotes
              </h3>
<p className="text-orange-100 text-xs leading-relaxed mb-6">
                Industry leaders from top tech giants sharing insights on the
                future of AI and development.
              </p>
<a className="text-sm font-semibold flex items-center hover:gap-2 transition-all" href="#">
                Learn more
                <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<svg aria-hidden="true" className="iconify absolute -top-10 -right-10 w-48 h-48 text-white/10 rotate-12 iconify--solar" data-icon="solar:graph-up-bold" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M3.464 3.464C2 4.93 2 7.286 2 12s0 7.071 1.464 8.535C4.93 22 7.286 22 12 22s7.071 0 8.535-1.465C22 19.072 22 16.714 22 12s0-7.071-1.465-8.536C19.072 2 16.714 2 12 2S4.929 2 3.464 3.464M13.75 10c0 .414.336.75.75.75h.69l-2.013 2.013a.25.25 0 0 1-.354 0l-1.586-1.586a1.75 1.75 0 0 0-2.474 0L6.47 13.47a.75.75 0 1 0 1.06 1.06l2.293-2.293a.25.25 0 0 1 .354 0l1.586 1.586a1.75 1.75 0 0 0 2.474 0l2.013-2.012v.689a.75.75 0 0 0 1.5 0V10a.75.75 0 0 0-.75-.75h-2.5a.75.75 0 0 0-.75.75" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>

<div className="md:p-8 flex flex-col overflow-hidden bg-gradient-to-b from-indigo-600 to-indigo-800 h-96 border-indigo-500/30 border pt-6 pr-6 pb-6 pl-6 relative">
<div className="relative z-10 flex-1 flex flex-col justify-end">
<svg aria-hidden="true" className="iconify text-indigo-300 w-16 h-16 mb-6 iconify--solar" data-icon="solar:history-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M5.079 5.069c3.795-3.79 9.965-3.75 13.783.069c3.82 3.82 3.86 9.993.064 13.788s-9.968 3.756-13.788-.064a9.81 9.81 0 0 1-2.798-8.28a.75.75 0 1 1 1.487.203a8.31 8.31 0 0 0 2.371 7.017c3.245 3.244 8.468 3.263 11.668.064c3.199-3.2 3.18-8.423-.064-11.668c-3.243-3.242-8.463-3.263-11.663-.068l.748.003a.75.75 0 1 1-.007 1.5l-2.546-.012a.75.75 0 0 1-.746-.747L3.575 4.33a.75.75 0 1 1 1.5-.008z" fill="currentColor" fill-rule="evenodd"></path>
<path d="M12 7.25a.75.75 0 0 1 .75.75v3.69l2.28 2.28a.75.75 0 1 1-1.06 1.06l-2.427-2.426a1 1 0 0 1-.293-.708V8a.75.75 0 0 1 .75-.75" fill="currentColor" opacity=".5"></path>
</svg>
<h3 className="text-2xl font-bold leading-tight mb-4">
                Mission&amp; History
              </h3>
<a className="text-sm font-semibold text-indigo-200 hover:text-white flex items-center hover:gap-2 transition-all mt-auto" href="#">
                Learn more
                <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>

<div className="absolute bottom-0 left-0 h-1 bg-orange-500 w-1/3"></div>
</div>

<div className="bg-slate-900 p-6 md:p-8 flex flex-col h-96 relative overflow-hidden border border-slate-700/50">
<div className="relative z-10 flex-1 flex flex-col justify-end">
<svg aria-hidden="true" className="iconify text-blue-400 w-16 h-16 mb-6 iconify--solar" data-icon="solar:medal-ribbon-star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path clip-rule="evenodd" d="M12 16a7 7 0 1 0 0-14a7 7 0 0 0 0 14m0-10c-.284 0-.474.34-.854 1.023l-.098.176c-.108.194-.162.29-.246.354c-.085.064-.19.088-.4.135l-.19.044c-.738.167-1.107.25-1.195.532s.164.577.667 1.165l.13.152c.143.167.215.25.247.354s.021.215 0 .438l-.02.203c-.076.785-.114 1.178.115 1.352c.23.174.576.015 1.267-.303l.178-.082c.197-.09.295-.135.399-.135s.202.045.399.135l.178.082c.691.319 1.037.477 1.267.303s.191-.567.115-1.352l-.02-.203c-.021-.223-.032-.334 0-.438s.104-.187.247-.354l.13-.152c.503-.588.755-.882.667-1.165c-.088-.282-.457-.365-1.195-.532l-.19-.044c-.21-.047-.315-.07-.4-.135c-.084-.064-.138-.16-.246-.354l-.098-.176C12.474 6.34 12.284 6 12 6" fill="currentColor" fill-rule="evenodd"></path>
<path className="" d="M6.714 17.323L7.351 15L8 13h8l.649 2l.637 2.323c.628 2.292.942 3.438.523 4.065c-.147.22-.344.396-.573.513c-.652.332-1.66-.193-3.675-1.243c-.67-.35-1.006-.524-1.362-.562a2 2 0 0 0-.398 0c-.356.038-.691.213-1.362.562c-2.015 1.05-3.023 1.575-3.675 1.243a1.5 1.5 0 0 1-.573-.513c-.42-.627-.105-1.773.523-4.065" fill="currentColor" opacity=".5"></path>
</svg>
<h3 className="text-2xl font-bold leading-tight mb-4">
                10 YearsOf Impact
              </h3>
<a className="text-sm font-semibold text-slate-400 hover:text-white flex items-center hover:gap-2 transition-all mt-auto" href="#">
                View Report
                <svg className="lucide lucide-chevron-right w-3 h-3 ml-1" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</a>
</div>
</div>
</div>
<div className="lg:pt-8 space-y-10">
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-orange-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-orange-500 w-6 h-6 iconify--solar" data-icon="solar:users-group-rounded-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<circle cx="15" cy="6" fill="currentColor" opacity=".4" r="3"></circle>
<ellipse cx="16" cy="17" fill="currentColor" opacity=".4" rx="5" ry="3"></ellipse>
<circle cx="9.001" cy="6" fill="currentColor" r="4"></circle>
<ellipse cx="9.001" cy="17.001" fill="currentColor" rx="7" ry="4"></ellipse>
</svg>
</div>
<div className="">
<div className="text-2xl font-bold">8,500</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">
                Attendees
              </div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-blue-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-blue-500 w-6 h-6 iconify--solar" data-icon="solar:map-point-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2c-4.418 0-8 4.003-8 8.5c0 4.462 2.553 9.312 6.537 11.174a3.45 3.45 0 0 0 2.926 0C17.447 19.812 20 14.962 20 10.5C20 6.003 16.418 2 12 2" fill="currentColor" opacity=".5"></path>
<path d="M12 12.5a2.5 2.5 0 1 0 0-5a2.5 2.5 0 0 0 0 5" fill="currentColor"></path>
</svg>
</div>
<div>
<div className="text-xl font-bold">San Francisco</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">
                Moscone Ctr
              </div>
</div>
</div>
<div className="flex items-center gap-4 group">
<div className="w-12 h-12 border border-white/10 flex items-center justify-center group-hover:border-purple-500/50 transition-colors">
<svg aria-hidden="true" className="iconify text-purple-500 w-6 h-6 iconify--solar" data-icon="solar:calendar-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M6.94 2c.416 0 .753.324.753.724v1.46c.668-.012 1.417-.012 2.26-.012h4.015c.842 0 1.591 0 2.259.013v-1.46c0-.4.337-.725.753-.725s.753.324.753.724V4.25c1.445.111 2.394.384 3.09 1.055c.698.67.982 1.582 1.097 2.972L22 9H2v-.724c.116-1.39.4-2.302 1.097-2.972s1.645-.944 3.09-1.055V2.724c0-.4.337-.724.753-.724" fill="currentColor"></path>
<path d="M22 14v-2c0-.839-.004-2.335-.017-3H2.01c-.013.665-.01 2.161-.01 3v2c0 3.771 0 5.657 1.172 6.828S6.228 22 10 22h4c3.77 0 5.656 0 6.828-1.172S22 17.772 22 14" fill="currentColor" opacity=".5"></path>
<path d="M18 17a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m-5 4a1 1 0 1 1-2 0a1 1 0 0 1 2 0m0-4a1 1 0 1 1-2 0a1 1 0 0 1 2 0" fill="currentColor"></path>
</svg>
</div>
<div className="">
<div className="text-xl font-bold">14-16 Sept</div>
<div className="text-xs text-slate-400 uppercase tracking-wider">
                2024
              </div>
</div>
</div>
<div className="pt-8 space-y-4">
<button className="w-full bg-gradient-to-r from-orange-500 to-orange-600 py-3 text-sm font-medium shadow-lg shadow-orange-500/20 hover:scale-[1.02] transition-transform">
              Register Now
            </button>
<button className="w-full border border-slate-600/50 py-3 text-sm font-medium hover:bg-white/5 transition-colors flex justify-center items-center gap-2">
              Past Summits
              <svg className="lucide lucide-chevron-right w-3 h-3" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
</div>
</section>

<div className="relative z-10 max-w-7xl mx-auto px-6 mb-24">
<div className="overflow-hidden flex flex-col md:flex-row bg-gradient-to-r from-blue-900 to-indigo-900 border-white/10 border pt-12 pr-12 pb-12 pl-12 relative items-center justify-between">
<div className="relative z-10 max-w-lg">
<h2 className="text-2xl md:text-3xl font-semibold mb-6">
            It's time to start investing in yourself!
          </h2>
<button className="bg-orange-500 hover:bg-orange-600 text-white px-8 py-3 text-sm font-medium transition-colors shadow-lg shadow-orange-500/30">
            Get Started
          </button>
</div>

<div className="md:-right-10 md:-bottom-10 md:w-96 md:h-96 pointer-events-none w-64 h-64 absolute right-0 bottom-0">
<img alt="Rocket" className="transform w-full h-full object-contain drop-shadow-2xl translate-y-10 rotate-45" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0f278718-4945-48d2-82b9-ba317e8535f8_1600w.png"/>
</div>

<div className="absolute top-0 right-1/2 w-64 h-64 bg-purple-500/20 blur-3xl"></div>
</div>
</div>

<footer className="z-10 bg-zinc-950 border-white/10 border-t relative" style={{}}>
<div className="max-w-7xl mx-auto px-6 py-12">
<div className="flex flex-col md:flex-row justify-between items-center gap-8">

<div className="flex gap-4">
<a className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10" href="#">
<svg className="lucide lucide-facebook w-3 h-3 text-slate-400" data-lucide="facebook" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path></svg>
</a>
<a className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10" href="#">
<svg className="lucide lucide-twitter w-3 h-3 text-slate-400" data-lucide="twitter" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10" href="#">
<svg className="lucide lucide-linkedin w-3 h-3 text-slate-400" data-lucide="linkedin" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path><rect height="12" width="4" x="2" y="9"></rect><circle cx="4" cy="4" r="2"></circle></svg>
</a>
<a className="w-8 h-8 bg-white/5 flex items-center justify-center hover:bg-white/10 transition-colors border border-white/10" href="#">
<svg className="lucide lucide-instagram w-3 h-3 text-slate-400" data-lucide="instagram" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="20" rx="5" ry="5" width="20" x="2" y="2"></rect><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line></svg>
</a>
</div>

<div className="flex flex-wrap justify-center gap-8 md:gap-12 text-xs font-medium text-slate-400">
<a className="hover:text-white relative group" href="#">
              Catalog
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-white relative group" href="#">
              People
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-white relative group" href="#">
              Resources
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-white relative group" href="#">
              Support
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
<a className="hover:text-white relative group" href="#">
              About
              <span className="absolute -bottom-1 left-0 w-full h-[1px] bg-orange-500 scale-x-0 group-hover:scale-x-100 transition-transform origin-left"></span>
</a>
</div>
</div>
<div className="mt-12 pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-[10px] text-slate-500">
<button className="flex items-center gap-2 bg-white/5 px-3 py-1.5 border border-white/10 hover:bg-white/10 transition-colors">
<span className="iconify" data-icon="solar:globe-bold"></span>
            English
            <svg className="lucide lucide-chevron-down w-3 h-3" data-lucide="chevron-down" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m6 9 6 6 6-6"></path></svg>
</button>
<div className="flex gap-6">
<a className="hover:text-slate-300" href="#">Privacy policy</a>
<a className="hover:text-slate-300" href="#">Terms of use</a>
<a className="hover:text-slate-300" href="#">Regulatory Information</a>
</div>
<div>Copyright © F — W Coding School 2024</div>
</div>
</div>
</footer>

<style>
      @keyframes float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-20px); }
      }
      .floating-animation {
          animation: float 6s ease-in-out infinite;
      }
      .animate-bounce-slow {
          animation: bounce 3s infinite;
      }
      @keyframes bounce {
          0%, 100% { transform: translateY(-5%); animation-timing-function: cubic-bezier(0.8, 0, 1, 1); }
          50% { transform: translateY(0); animation-timing-function: cubic-bezier(0, 0, 0.2, 1); }
      }
    </style>

    </>
  );
}
