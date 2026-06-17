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



tailwind.config = {
darkMode: 'class', // Important for manual toggling
theme: {
fontFamily: {
sans: ['Inter', 'sans-serif'],
},
extend: {
colors: {
apple: {
gray: '#f5f5f7',
dark: '#000000',
blue: '#0071e3'
}
},
animation: {
'float': 'float 6s ease-in-out infinite',
'spin-slow': 'spin 12s linear infinite',
},
keyframes: {
float: {
'0%, 100%': { transform: 'translateY(0)' },
'50%': { transform: 'translateY(-20px)' },
}
}
}
}
}



if (localStorage.theme === 'dark' || (!('theme' in localStorage) && window.matchMedia('(prefers-color-scheme: dark)').matches)) {
document.documentElement.classList.add('dark');
} else {
document.documentElement.classList.remove('dark');
}



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener('DOMContentLoaded', () => {
            const themeToggleBtn = document.getElementById('theme-toggle');
            const themeIcon = document.getElementById('theme-icon');
            const html = document.documentElement;

            // Function to update icon
            function updateIcon() {
                if (html.classList.contains('dark')) {
                    themeIcon.setAttribute('icon', 'solar:moon-linear');
                } else {
                    themeIcon.setAttribute('icon', 'solar:sun-2-linear');
                }
            }

            // Initial Icon Set
            updateIcon();

            themeToggleBtn.addEventListener('click', () => {
                html.classList.toggle('dark');
                
                // Update LocalStorage
                if (html.classList.contains('dark')) {
                    localStorage.theme = 'dark';
                } else {
                    localStorage.theme = 'light';
                }
                
                updateIcon();
            });
        });
    
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
      

<div bis_size='{"x":0,"y":0,"w":1440,"h":949,"abs_x":480,"abs_y":43}' className="fixed inset-0 z-0 pointer-events-none overflow-hidden">
<div bis_size='{"x":-144,"y":-94,"w":720,"h":474,"abs_x":336,"abs_y":-51}' className="absolute top-[-10%] left-[-10%] w-[50%] h-[50%] rounded-full dark:bg-indigo-900/20 blur-[120px] animate-float bg-blue-400/20"></div>
<div bis_size='{"x":864,"y":569,"w":720,"h":474,"abs_x":1344,"abs_y":612}' className="absolute bottom-[-10%] right-[-10%] w-[50%] h-[50%] rounded-full dark:bg-fuchsia-900/20 blur-[120px] animate-float bg-purple-400/20" style={{animationDelay: '-3s'}}></div>
</div>

<nav bis_size='{"x":16,"y":16,"w":1408,"h":58,"abs_x":496,"abs_y":59}' className="fixed top-4 left-4 right-4 z-50 rounded-2xl border dark:border-white/10 dark:bg-black/60 backdrop-blur-xl shadow-sm transition-all duration-300 border-white/40 bg-white/60">
<div bis_size='{"x":80,"y":17,"w":1280,"h":56,"abs_x":560,"abs_y":60}' className="max-w-7xl mx-auto px-4 sm:px-6">
<div bis_size='{"x":104,"y":17,"w":1232,"h":56,"abs_x":584,"abs_y":60}' className="flex h-14 items-center justify-between">

<div bis_size='{"x":104,"y":31,"w":86,"h":28,"abs_x":584,"abs_y":74}' className="flex-shrink-0">
<a bis_size='{"x":104,"y":33,"w":86,"h":24,"abs_x":584,"abs_y":76}' className="dark:text-white transition-colors text-xl font-medium tracking-tighter text-slate-900" href="#">
                        bassfragz
                    </a>
</div>

<div bis_size='{"x":564,"y":35,"w":255,"h":20,"abs_x":1044,"abs_y":78}' className="hidden md:flex items-center space-x-8">
<a bis_size='{"x":564,"y":35,"w":73,"h":20,"abs_x":1044,"abs_y":78}' className="text-sm font-normal dark:text-slate-300 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-900" href="#">Collections</a>
<a bis_size='{"x":670,"y":35,"w":77,"h":20,"abs_x":1150,"abs_y":78}' className="text-sm font-normal dark:text-slate-300 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-900" href="#">Best Sellers</a>
<a bis_size='{"x":780,"y":35,"w":39,"h":20,"abs_x":1260,"abs_y":78}' className="text-sm font-normal dark:text-slate-300 dark:hover:text-white transition-colors text-slate-600 hover:text-slate-900" href="#">About</a>
</div>

<div bis_size='{"x":1194,"y":24,"w":142,"h":42,"abs_x":1674,"abs_y":67}' className="flex items-center gap-3">
<button bis_size='{"x":1194,"y":24,"w":36,"h":42,"abs_x":1674,"abs_y":67}' className="dark:hover:bg-white/10 transition-colors dark:text-slate-300 cursor-pointer rounded-full pt-2 pr-2 pb-2 pl-2 hover:bg-black/5 text-slate-600">
<iconify-icon bis_size='{"x":1202,"y":32,"w":20,"h":20,"abs_x":1682,"abs_y":75}' className="pointer-events-none" icon="solar:magnifer-linear" strokeWidth="1.5" width="20"></iconify-icon>
</button>
<button bis_size='{"x":1242,"y":24,"w":36,"h":42,"abs_x":1722,"abs_y":67}' className="dark:hover:bg-white/10 transition-colors dark:text-slate-300 cursor-pointer rounded-full pt-2 pr-2 pb-2 pl-2 relative hover:bg-black/5 text-slate-600">
<iconify-icon bis_size='{"x":1250,"y":32,"w":20,"h":20,"abs_x":1730,"abs_y":75}' className="pointer-events-none" icon="solar:bag-3-linear" strokeWidth="1.5" width="20"></iconify-icon>
<span bis_size='{"x":1266,"y":28,"w":8,"h":8,"abs_x":1746,"abs_y":71}' className="absolute top-1 right-1 w-2 h-2 bg-indigo-500 rounded-full"></span>
</button>

<button bis_size='{"x":1298,"y":26,"w":38,"h":38,"abs_x":1778,"abs_y":69}' className="group dark:bg-slate-800/50 dark:hover:bg-slate-700/50 transition-colors dark:text-slate-300 dark:border-white/5 cursor-pointer flex border rounded-full ml-2 pt-2 pr-2 pb-2 pl-2 items-center justify-center hover:bg-slate-300/50 text-slate-600 bg-slate-200/50 border-black/5" id="theme-toggle">
<iconify-icon bis_size='{"x":1307,"y":35,"w":20,"h":20,"abs_x":1787,"abs_y":78}' className="pointer-events-none transition-transform group-active:scale-90" icon="solar:sun-2-linear" id="theme-icon" strokeWidth="1.5" width="20"></iconify-icon>
</button>
</div>
</div>
</div>
</nav>

<main bis_size='{"x":0,"y":0,"w":1440,"h":2375,"abs_x":480,"abs_y":43}' className="z-10 pt-24 pb-20 relative">

<section bis_size='{"x":80,"y":96,"w":1280,"h":569,"abs_x":560,"abs_y":139}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-24">
<div bis_size='{"x":112,"y":96,"w":1216,"h":569,"abs_x":592,"abs_y":139}' className="relative overflow-hidden rounded-[2rem] border dark:border-white/10 dark:bg-white/5 backdrop-blur-2xl shadow-xl min-h-[60vh] flex items-center transition-colors duration-500 border-white/50 bg-white/30">

<div className="aurora-bg dark:opacity-30 transition-opacity duration-500 animate-pulse opacity-60 absolute top-0 right-0 bottom-0 left-0" style={{animationDuration: '12s'}}></div>
<div className="grid lg:grid-cols-2 lg:p-16 z-10 w-full pt-8 pr-8 pb-8 pl-8 relative gap-x-12 gap-y-12 items-center">
<style>
                        @keyframes fadeInUp {
                            from { opacity: 0; transform: translateY(20px); }
                            to { opacity: 1; transform: translateY(0); }
                        }
                        @keyframes fadeInScale {
                            from { opacity: 0; transform: scale(0.96); }
                            to { opacity: 1; transform: scale(1); }
                        }
                        .animate-entry {
                            opacity: 0;
                            animation: fadeInUp 0.7s cubic-bezier(0.16, 1, 0.3, 1) forwards;
                        }
                    </style>
<div className="space-y-6">
<div className="inline-flex gap-2 dark:bg-white/10 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-md items-center bg-white/40 border-white/20 animate-entry" style={{animationDelay: '100ms'}}>
<svg className="dark:text-indigo-400 text-indigo-600" height="16" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M10.08 7.897C11.157 5.966 11.695 5 12.5 5s1.343.966 2.42 2.897l.278.5c.306.549.46.823.698 1.004s.535.248 1.13.383l.54.122c2.091.473 3.137.71 3.385 1.51c.249.8-.464 1.633-1.89 3.3l-.368.43c-.405.474-.607.711-.699 1.004c-.09.293-.06.609.001 1.24l.056.576c.216 2.224.323 3.336-.328 3.83s-1.63.044-3.587-.857l-.507-.234c-.556-.256-.834-.384-1.129-.384s-.573.128-1.13.384l-.506.234c-1.957.9-2.936 1.352-3.587.857c-.651-.494-.543-1.606-.328-3.83l.056-.575c.061-.632.092-.948 0-1.24c-.09-.294-.293-.53-.698-1.004l-.369-.432c-1.425-1.666-2.138-2.5-1.89-3.3c.25-.8 1.295-1.036 3.386-1.509l.54-.122c.595-.135.892-.202 1.13-.383c.239-.18.392-.455.698-1.004z" strokeWidth="1.5"></path><path d="M4.99 2s.288 1.458.92 2.085C6.54 4.712 8 4.99 8 4.99s-1.458.288-2.085.92C5.288 6.54 5.01 8 5.01 8s-.288-1.458-.92-2.085C3.46 5.288 2 5.01 2 5.01s1.458-.288 2.085-.92C4.712 3.46 4.99 2 4.99 2Z" strokeLinejoin="round"></path><path d="M18 5h2m-1 1V4" strokeLinecap="round" strokeWidth="1.5"></path></g></svg>
<span className="uppercase dark:text-slate-300 text-xs font-normal tracking-wide text-slate-600">New Collection 2024</span>
</div>
<h1 className="sm:text-7xl dark:text-white leading-[1.1] transition-colors duration-500 animate-entry text-5xl font-normal text-slate-900 tracking-tight" style={{animationDelay: '250ms'}}>
                            Invisible <br/>
<span className="bg-clip-text text-transparent bg-gradient-to-r from-indigo-500 to-purple-500">Signature.</span>
</h1>
<p className="dark:text-slate-300 leading-relaxed transition-colors duration-500 text-lg max-w-md text-slate-600 animate-entry" style={{animationDelay: '400ms'}}>
                            Crafted for the modern minimalist. Bassfragz combines ethereal notes with grounded aesthetics.
                        </p>
<div className="flex flex-wrap pt-4 animate-entry" style={{animationDelay: '550ms'}}>
<button className="group dark:bg-white dark:text-black transition-all hover:scale-[1.02] active:scale-[0.98] text-sm font-normal rounded-full pt-3 pr-8 pb-3 pl-8 text-white bg-slate-900">
                                Shop Now
                            </button>
<button className="group dark:bg-white/10 dark:text-white transition-all dark:hover:bg-white/20 text-sm font-normal border rounded-full pt-3 pr-8 pb-3 pl-8 backdrop-blur-md hover:bg-white/70 text-slate-900 bg-white/50 border-white/20">
                                View Film
                            </button>
</div>
</div>
<div className="flex justify-center lg:justify-end relative">
<div className="relative w-64 h-80 sm:w-80 sm:h-96 rounded-3xl overflow-hidden border dark:border-white/10 shadow-2xl group transition-colors duration-500 border-white/30" style={{animation: 'fadeInScale 0.9s cubic-bezier(0.16, 1, 0.3, 1) forwards', animationDelay: '700ms'}}>
<div className="absolute inset-0 bg-gradient-to-br dark:from-slate-800/50 dark:to-slate-900/10 backdrop-blur-sm z-0 from-slate-200/50 to-slate-100/10"></div>
<img alt="Perfume" className="transition-transform duration-700 group-hover:scale-110 z-0 dark:mix-blend-normal opacity-90 mix-blend-overlay w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://images.unsplash.com/photo-1594035910387-fea47794261f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div className="absolute bottom-0 inset-x-0 p-6 bg-gradient-to-t to-transparent dark:from-black/80 dark:via-black/40 backdrop-blur-md border-t transition-colors duration-500 from-white/80 via-white/40 border-white/20">
<div className="flex justify-between items-end">
<div className="">
<h3 className="text-lg font-normal dark:text-white tracking-tight text-slate-900">Noir Éclat</h3>
<p className="text-xs dark:text-slate-400 text-slate-600">50ml / Eau de Parfum</p>
</div>
<span className="text-sm font-medium dark:text-white text-slate-900">$120</span>
</div>
</div>
</div>
<div className="absolute -top-6 -right-6 w-24 h-24 rounded-full dark:bg-white/5 backdrop-blur-xl border flex items-center justify-center animate-float bg-white/30 border-white/20" style={{animationDelay: '1s'}}>
<div className="text-center">
<span className="block text-xs font-normal text-slate-500 dark:text-slate-400">Scent of</span>
<span className="block text-sm font-medium dark:text-white text-slate-800">The Year</span>
</div>
</div>
</div>
</div>
</div>
</section>

<section bis_size='{"x":80,"y":761,"w":1280,"h":54,"abs_x":560,"abs_y":804}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-12">
<div bis_size='{"x":112,"y":761,"w":1216,"h":54,"abs_x":592,"abs_y":804}' className="flex gap-4 overflow-x-auto no-scrollbar pb-4 gap-x-4 gap-y-4">
<button bis_size='{"x":112,"y":761,"w":114,"h":38,"abs_x":592,"abs_y":804}' className="flex-shrink-0 px-6 py-2 rounded-full dark:bg-white dark:text-black text-sm font-medium transition-colors bg-slate-900 text-white">All Scents</button>
<button bis_size='{"x":242,"y":761,"w":97,"h":38,"abs_x":722,"abs_y":804}' className="flex-shrink-0 px-6 py-2 rounded-full dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 text-sm font-medium dark:hover:bg-white/10 transition-colors bg-white/50 border-black/5 text-slate-600 hover:bg-white/80">Woody</button>
<button bis_size='{"x":355,"y":761,"w":87,"h":38,"abs_x":835,"abs_y":804}' className="flex-shrink-0 px-6 py-2 rounded-full dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 text-sm font-medium dark:hover:bg-white/10 transition-colors bg-white/50 border-black/5 text-slate-600 hover:bg-white/80">Floral</button>
<button bis_size='{"x":458,"y":761,"w":87,"h":38,"abs_x":938,"abs_y":804}' className="flex-shrink-0 px-6 py-2 rounded-full dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 text-sm font-medium dark:hover:bg-white/10 transition-colors bg-white/50 border-black/5 text-slate-600 hover:bg-white/80">Fresh</button>
<button bis_size='{"x":562,"y":761,"w":102,"h":38,"abs_x":1042,"abs_y":804}' className="flex-shrink-0 px-6 py-2 rounded-full dark:bg-white/5 border dark:border-white/10 dark:text-slate-300 text-sm font-medium dark:hover:bg-white/10 transition-colors bg-white/50 border-black/5 text-slate-600 hover:bg-white/80">Oriental</button>
</div>
</section>

<section bis_size='{"x":80,"y":863,"w":1280,"h":1044,"abs_x":560,"abs_y":906}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
<div bis_size='{"x":112,"y":863,"w":1216,"h":1044,"abs_x":592,"abs_y":906}' className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">

<div bis_size='{"x":112,"y":863,"w":384,"h":506,"abs_x":592,"abs_y":906}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":129,"y":880,"w":350,"h":350,"abs_x":609,"abs_y":923}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":129,"y":880,"w":350,"h":350,"abs_x":609,"abs_y":923}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1541643600914-78b084683601?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<button bis_size='{"x":431,"y":900,"w":36,"h":42,"abs_x":911,"abs_y":943}' className="absolute top-3 right-3 p-2 rounded-full dark:bg-black/60 backdrop-blur-md dark:text-white opacity-0 group-hover:opacity-100 transition-opacity translate-y-2 group-hover:translate-y-0 duration-300 bg-white/60 text-slate-900">
<iconify-icon bis_size='{"x":439,"y":908,"w":20,"h":20,"abs_x":919,"abs_y":951}' icon="solar:heart-linear" width="20"></iconify-icon>
</button>
</div>
<div bis_size='{"x":129,"y":1246,"w":350,"h":106,"abs_x":609,"abs_y":1289}' className="px-2 pb-2">
<div bis_size='{"x":137,"y":1246,"w":334,"h":24,"abs_x":617,"abs_y":1289}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":137,"y":1246,"w":83,"h":24,"abs_x":617,"abs_y":1289}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Amber Drift</h3>
<span bis_size='{"x":444,"y":1246,"w":26,"h":20,"abs_x":924,"abs_y":1289}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$85</span>
</div>
<p bis_size='{"x":137,"y":1274,"w":334,"h":16,"abs_x":617,"abs_y":1317}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Sandalwood, Bergamot, Musk</p>
<button bis_size='{"x":137,"y":1306,"w":334,"h":38,"abs_x":617,"abs_y":1349}' className="w-full py-2.5 rounded-xl border dark:border-white/10 bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-white border-slate-200 hover:bg-slate-900 hover:text-white text-slate-900">
                            Add to Cart
                        </button>
</div>
</div>

<div bis_size='{"x":528,"y":863,"w":384,"h":506,"abs_x":1008,"abs_y":906}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":545,"y":880,"w":350,"h":350,"abs_x":1025,"abs_y":923}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":545,"y":880,"w":350,"h":350,"abs_x":1025,"abs_y":923}' className="transition-transform duration-500 group-hover:scale-105 w-full h-full object-cover" src="https://images.unsplash.com/photo-1592945403244-b3fbafd7f539?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
<div bis_size='{"x":557,"y":892,"w":41,"h":23,"abs_x":1037,"abs_y":935}' className="absolute top-3 left-3 px-2 py-1 rounded-md bg-indigo-500/80 backdrop-blur-md text-[10px] uppercase font-bold tracking-wider text-white">New</div>
</div>
<div bis_size='{"x":545,"y":1246,"w":350,"h":106,"abs_x":1025,"abs_y":1289}' className="px-2 pb-2">
<div bis_size='{"x":553,"y":1246,"w":334,"h":24,"abs_x":1033,"abs_y":1289}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":553,"y":1246,"w":96,"h":24,"abs_x":1033,"abs_y":1289}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Oceanic Void</h3>
<span bis_size='{"x":857,"y":1246,"w":29,"h":20,"abs_x":1337,"abs_y":1289}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$110</span>
</div>
<p bis_size='{"x":553,"y":1274,"w":334,"h":16,"abs_x":1033,"abs_y":1317}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Sea Salt, Driftwood, Sage</p>
<button bis_size='{"x":553,"y":1306,"w":334,"h":38,"abs_x":1033,"abs_y":1349}' className="w-full py-2.5 rounded-xl border dark:border-white/10 bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-white border-slate-200 hover:bg-slate-900 hover:text-white text-slate-900">
                            Add to Cart
                        </button>
</div>
</div>

<div bis_size='{"x":944,"y":863,"w":384,"h":506,"abs_x":1424,"abs_y":906}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":961,"y":880,"w":350,"h":350,"abs_x":1441,"abs_y":923}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":961,"y":880,"w":350,"h":350,"abs_x":1441,"abs_y":923}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1523293182086-7651a899d37f?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":961,"y":1246,"w":350,"h":106,"abs_x":1441,"abs_y":1289}' className="px-2 pb-2">
<div bis_size='{"x":969,"y":1246,"w":334,"h":24,"abs_x":1449,"abs_y":1289}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":969,"y":1246,"w":89,"h":24,"abs_x":1449,"abs_y":1289}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Rose Quartz</h3>
<span bis_size='{"x":1276,"y":1246,"w":26,"h":20,"abs_x":1756,"abs_y":1289}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$95</span>
</div>
<p bis_size='{"x":969,"y":1274,"w":334,"h":16,"abs_x":1449,"abs_y":1317}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Rose Petals, Vanilla, Oud</p>
<button bis_size='{"x":969,"y":1306,"w":334,"h":38,"abs_x":1449,"abs_y":1349}' className="w-full py-2.5 rounded-xl border dark:border-white/10 bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-white border-slate-200 hover:bg-slate-900 hover:text-white text-slate-900">
                            Add to Cart
                        </button>
</div>
</div>

<div bis_size='{"x":112,"y":1401,"w":384,"h":506,"abs_x":592,"abs_y":1444}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":129,"y":1418,"w":350,"h":350,"abs_x":609,"abs_y":1461}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":129,"y":1418,"w":350,"h":350,"abs_x":609,"abs_y":1461}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1616949755610-8c9bbc08f138?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":129,"y":1784,"w":350,"h":106,"abs_x":609,"abs_y":1827}' className="px-2 pb-2">
<div bis_size='{"x":137,"y":1784,"w":334,"h":24,"abs_x":617,"abs_y":1827}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":137,"y":1784,"w":65,"h":24,"abs_x":617,"abs_y":1827}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Vétiver X</h3>
<span bis_size='{"x":438,"y":1784,"w":32,"h":20,"abs_x":918,"abs_y":1827}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$105</span>
</div>
<p bis_size='{"x":137,"y":1812,"w":334,"h":16,"abs_x":617,"abs_y":1855}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Vetiver, Grapefruit, Cedar</p>
<button bis_size='{"x":137,"y":1844,"w":334,"h":38,"abs_x":617,"abs_y":1887}' className="w-full py-2.5 rounded-xl border dark:border-white/10 bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-white border-slate-200 hover:bg-slate-900 hover:text-white text-slate-900">
                            Add to Cart
                        </button>
</div>
</div>

<div bis_size='{"x":528,"y":1401,"w":384,"h":506,"abs_x":1008,"abs_y":1444}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":545,"y":1418,"w":350,"h":350,"abs_x":1025,"abs_y":1461}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":545,"y":1418,"w":350,"h":350,"abs_x":1025,"abs_y":1461}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/917d6f93-fb36-439a-8c48-884b67b35381_1600w.jpg"/>
<div bis_size='{"x":557,"y":1430,"w":71,"h":23,"abs_x":1037,"abs_y":1473}' className="absolute top-3 left-3 px-2 py-1 rounded-md dark:bg-white/90 backdrop-blur-md dark:text-black text-[10px] uppercase font-bold tracking-wider bg-slate-900/80 text-white">Sold Out</div>
</div>
<div bis_size='{"x":545,"y":1784,"w":350,"h":106,"abs_x":1025,"abs_y":1827}' className="px-2 pb-2 opacity-60">
<div bis_size='{"x":553,"y":1784,"w":334,"h":24,"abs_x":1033,"abs_y":1827}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":553,"y":1784,"w":89,"h":24,"abs_x":1033,"abs_y":1827}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Midnight Iris</h3>
<span bis_size='{"x":854,"y":1784,"w":32,"h":20,"abs_x":1334,"abs_y":1827}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$130</span>
</div>
<p bis_size='{"x":553,"y":1812,"w":334,"h":16,"abs_x":1033,"abs_y":1855}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Iris, Black Pepper, Amber</p>
<button bis_size='{"x":553,"y":1844,"w":334,"h":38,"abs_x":1033,"abs_y":1887}' className="w-full py-2.5 rounded-xl border dark:border-white/10 dark:bg-white/5 text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-slate-500 cursor-not-allowed border-slate-200 bg-slate-100 text-slate-400">
                            Unavailable
                        </button>
</div>
</div>

<div bis_size='{"x":944,"y":1401,"w":384,"h":506,"abs_x":1424,"abs_y":1444}' className="group relative rounded-3xl p-4 dark:bg-white/5 border dark:border-white/5 backdrop-blur-xl shadow-sm hover:shadow-xl hover:-translate-y-1 transition-all duration-300 bg-white/40 border-white/60">
<div bis_size='{"x":961,"y":1418,"w":350,"h":350,"abs_x":1441,"abs_y":1461}' className="aspect-square rounded-2xl overflow-hidden mb-4 relative dark:bg-gray-900 bg-gray-100">
<img alt="Product" bis_size='{"x":961,"y":1418,"w":350,"h":350,"abs_x":1441,"abs_y":1461}' className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" src="https://images.unsplash.com/photo-1620916566398-39f1143ab7be?q=80&amp;w=800&amp;auto=format&amp;fit=crop"/>
</div>
<div bis_size='{"x":961,"y":1784,"w":350,"h":106,"abs_x":1441,"abs_y":1827}' className="px-2 pb-2">
<div bis_size='{"x":969,"y":1784,"w":334,"h":24,"abs_x":1449,"abs_y":1827}' className="flex justify-between items-start mb-1">
<h3 bis_size='{"x":969,"y":1784,"w":93,"h":24,"abs_x":1449,"abs_y":1827}' className="text-base font-medium dark:text-white tracking-tight text-slate-900">Citrus Bloom</h3>
<span bis_size='{"x":1276,"y":1784,"w":26,"h":20,"abs_x":1756,"abs_y":1827}' className="text-sm font-medium dark:text-slate-400 text-slate-600">$90</span>
</div>
<p bis_size='{"x":969,"y":1812,"w":334,"h":16,"abs_x":1449,"abs_y":1855}' className="text-xs text-slate-500 dark:text-slate-500 mb-4 line-clamp-1">Lemon, Jasmine, Green Tea</p>
<button bis_size='{"x":969,"y":1844,"w":334,"h":38,"abs_x":1449,"abs_y":1887}' className="w-full py-2.5 rounded-xl border dark:border-white/10 bg-transparent dark:hover:bg-white dark:hover:text-black transition-colors text-xs font-medium uppercase tracking-wide flex items-center justify-center gap-2 dark:text-white border-slate-200 hover:bg-slate-900 hover:text-white text-slate-900">
                            Add to Cart
                        </button>
</div>
</div>
</div>
</section>

<section bis_size='{"x":272,"y":2003,"w":896,"h":244,"abs_x":752,"abs_y":2046}' className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 mt-24 mb-12">
<div bis_size='{"x":304,"y":2003,"w":832,"h":244,"abs_x":784,"abs_y":2046}' className="rounded-3xl dark:bg-white/5 border dark:border-white/10 backdrop-blur-xl p-8 sm:p-12 text-center relative overflow-hidden transition-colors duration-500 bg-white/30 border-white/40">
<div bis_size='{"x":353,"y":2052,"w":734,"h":146,"abs_x":833,"abs_y":2095}' className="relative z-10">
<h2 bis_size='{"x":353,"y":2052,"w":734,"h":36,"abs_x":833,"abs_y":2095}' className="text-2xl sm:text-3xl font-medium tracking-tight dark:text-white mb-3 text-slate-900">Join the Inner Circle</h2>
<p bis_size='{"x":496,"y":2100,"w":448,"h":20,"abs_x":976,"abs_y":2143}' className="text-sm dark:text-slate-400 mb-8 max-w-md mx-auto text-slate-600">Early access to limited editions and olfactory stories.</p>
<form bis_size='{"x":528,"y":2152,"w":384,"h":46,"abs_x":1008,"abs_y":2195}' className="max-w-sm mx-auto flex gap-2">
<input bis_size='{"x":528,"y":2152,"w":260,"h":46,"abs_x":1008,"abs_y":2195}' className="flex-1 dark:bg-black/30 border dark:border-white/10 rounded-xl px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-indigo-500/50 dark:text-white placeholder:text-slate-400 transition-colors bg-white/50 border-slate-200 text-slate-900" placeholder="email@address.com" type="email"/>
<button bis_size='{"x":796,"y":2152,"w":115,"h":46,"abs_x":1276,"abs_y":2195}' className="px-6 py-3 rounded-xl dark:bg-white dark:text-black text-sm font-medium hover:opacity-90 transition-opacity bg-slate-900 text-white" type="button">
                            Subscribe
                        </button>
</form>
</div>
</div>
</section>
</main>

<footer bis_size='{"x":0,"y":2375,"w":1440,"h":313,"abs_x":480,"abs_y":2418}' className="relative z-10 border-t dark:border-white/10 dark:bg-black/60 backdrop-blur-xl transition-colors duration-500 border-slate-200 bg-white/40">
<div bis_size='{"x":80,"y":2376,"w":1280,"h":312,"abs_x":560,"abs_y":2419}' className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
<div bis_size='{"x":112,"y":2424,"w":1216,"h":120,"abs_x":592,"abs_y":2467}' className="grid grid-cols-1 md:grid-cols-4 gap-8">
<div bis_size='{"x":112,"y":2424,"w":592,"h":120,"abs_x":592,"abs_y":2467}' className="col-span-1 md:col-span-2">
<a bis_size='{"x":112,"y":2424,"w":592,"h":28,"abs_x":592,"abs_y":2467}' className="text-lg font-medium tracking-tighter dark:text-white mb-4 block text-slate-900" href="#">
                        bassfragz
                    </a>
<p bis_size='{"x":112,"y":2468,"w":320,"h":32,"abs_x":592,"abs_y":2511}' className="text-xs text-slate-500 dark:text-slate-400 max-w-xs">
                        Refining the art of perfumery with modern aesthetics and timeless scents. Designed in California.
                    </p>
</div>
<div bis_size='{"x":736,"y":2424,"w":280,"h":120,"abs_x":1216,"abs_y":2467}'>
<h4 bis_size='{"x":736,"y":2424,"w":280,"h":16,"abs_x":1216,"abs_y":2467}' className="text-xs font-semibold uppercase tracking-wider dark:text-white mb-4 text-slate-900">Shop</h4>
<ul bis_size='{"x":736,"y":2456,"w":280,"h":88,"abs_x":1216,"abs_y":2499}' className="space-y-2">
<li bis_size='{"x":736,"y":2456,"w":280,"h":24,"abs_x":1216,"abs_y":2499}'><a bis_size='{"x":736,"y":2462,"w":72,"h":15,"abs_x":1216,"abs_y":2505}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">All Perfumes</a></li>
<li bis_size='{"x":736,"y":2488,"w":280,"h":24,"abs_x":1216,"abs_y":2531}'><a bis_size='{"x":736,"y":2494,"w":48,"h":15,"abs_x":1216,"abs_y":2537}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">Gift Sets</a></li>
<li bis_size='{"x":736,"y":2520,"w":280,"h":24,"abs_x":1216,"abs_y":2563}'><a bis_size='{"x":736,"y":2526,"w":66,"h":15,"abs_x":1216,"abs_y":2569}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">Sample Kits</a></li>
</ul>
</div>
<div bis_size='{"x":1048,"y":2424,"w":280,"h":120,"abs_x":1528,"abs_y":2467}'>
<h4 bis_size='{"x":1048,"y":2424,"w":280,"h":16,"abs_x":1528,"abs_y":2467}' className="text-xs font-semibold uppercase tracking-wider dark:text-white mb-4 text-slate-900">Legal</h4>
<ul bis_size='{"x":1048,"y":2456,"w":280,"h":88,"abs_x":1528,"abs_y":2499}' className="space-y-2">
<li bis_size='{"x":1048,"y":2456,"w":280,"h":24,"abs_x":1528,"abs_y":2499}'><a bis_size='{"x":1048,"y":2462,"w":79,"h":15,"abs_x":1528,"abs_y":2505}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">Privacy Policy</a></li>
<li bis_size='{"x":1048,"y":2488,"w":280,"h":24,"abs_x":1528,"abs_y":2531}'><a bis_size='{"x":1048,"y":2494,"w":76,"h":15,"abs_x":1528,"abs_y":2537}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">Terms of Use</a></li>
<li bis_size='{"x":1048,"y":2520,"w":280,"h":24,"abs_x":1528,"abs_y":2563}'><a bis_size='{"x":1048,"y":2526,"w":43,"h":15,"abs_x":1528,"abs_y":2569}' className="text-xs text-slate-500 dark:text-slate-400 dark:hover:text-white transition-colors hover:text-slate-900" href="#">Returns</a></li>
</ul>
</div>
</div>
<div bis_size='{"x":112,"y":2592,"w":1216,"h":48,"abs_x":592,"abs_y":2635}' className="mt-12 pt-8 border-t dark:border-white/5 flex items-center justify-between border-slate-200/50">
<p bis_size='{"x":112,"y":2625,"w":107,"h":15,"abs_x":592,"abs_y":2668}' className="text-[10px] text-slate-400">© 2024 Bassfragz Inc.</p>
<div bis_size='{"x":1312,"y":2632,"w":16,"h":0,"abs_x":1792,"abs_y":2675}' className="flex space-x-4">
<iconify-icon bis_size='{"x":1312,"y":2632,"w":0,"h":0,"abs_x":1792,"abs_y":2675}' className="dark:hover:text-white cursor-pointer text-slate-400 hover:text-slate-900" icon="solar:brand-instagram-linear" width="16"></iconify-icon>
<iconify-icon bis_size='{"x":1328,"y":2632,"w":0,"h":0,"abs_x":1808,"abs_y":2675}' className="dark:hover:text-white cursor-pointer text-slate-400 hover:text-slate-900" icon="solar:brand-twitter-linear" width="16"></iconify-icon>
</div>
</div>
</div>
</footer>



    </>
  );
}
