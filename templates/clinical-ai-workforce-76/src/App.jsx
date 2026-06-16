import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



(function () {
const once = true;
if (!window.__inViewIO) {
window.__inViewIO = new IntersectionObserver((entries) => {
entries.forEach((entry) => {
if (entry.isIntersecting) {
entry.target.classList.add("animate");
if (once) window.__inViewIO.unobserve(entry.target);
}
});
}, { threshold: 0.1, rootMargin: "0px 0px -5% 0px" });
}
window.initInViewAnimations = function (selector = ".animate-on-scroll") {
document.querySelectorAll(selector).forEach((el) => {
window.__inViewIO.observe(el);
});
};
document.addEventListener("DOMContentLoaded", () => initInViewAnimations());
})();



tailwind.config = {
theme: {
extend: {
colors: {
brand: {
DEFAULT: '#006D5B',
light: '#008571',
dark: '#005244',
50: '#E6F0EE',
100: '#C0DBD6',
}
}
}
},
plugins: [
function({ addUtilities }) {
const rotateXUtilities = {};
const rotateYUtilities = {};
const rotateZUtilities = {};
const rotateValues = [0, 5, 10, 15, 20, 30, 45, 75];
rotateValues.forEach((value) => {
rotateXUtilities[`.rotate-x-${value}`] = {
'--tw-rotate-x': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateXUtilities[`.-rotate-x-${value}`] = {
'--tw-rotate-x': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
rotateValues.forEach((value) => {
rotateYUtilities[`.rotate-y-${value}`] = {
'--tw-rotate-y': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateYUtilities[`.-rotate-y-${value}`] = {
'--tw-rotate-y': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
rotateValues.forEach((value) => {
rotateZUtilities[`.rotate-z-${value}`] = {
'--tw-rotate-z': `${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
if (value !== 0) {
rotateZUtilities[`.-rotate-z-${value}`] = {
'--tw-rotate-z': `-${value}deg`,
transform: `translate3d(var(--tw-translate-x, 0), var(--tw-translate-y, 0), var(--tw-translate-z, 0)) rotateX(var(--tw-rotate-x, 0)) rotateY(var(--tw-rotate-y, 0)) rotateZ(var(--tw-rotate-z, 0)) skewX(var(--tw-skew-x, 0)) skewY(var(--tw-skew-y, 0)) scaleX(var(--tw-scale-x, 1)) scaleY(var(--tw-scale-y, 1))`.replace(/\\s+/g, ' ').trim(),
};
}
});
const perspectiveUtilities = {
".perspective-none": { perspective: "none" },
".perspective-dramatic": { perspective: "100px" },
".perspective-near": { perspective: "300px" },
".perspective-normal": { perspective: "500px" },
".perspective-midrange": { perspective: "800px" },
".perspective-distant": { perspective: "1200px" },
};
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



      lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none opacity-40">
<div className="absolute top-0 left-0 w-[100vw] h-[100vh] bg-[radial-gradient(ellipse_at_top_left,_var(--tw-gradient-stops))] from-[#006D5B]/10 via-transparent to-transparent"></div>
<div className="absolute bottom-0 right-0 w-[100vw] h-[80vh] bg-[radial-gradient(ellipse_at_bottom_right,_var(--tw-gradient-stops))] from-blue-50/50 via-transparent to-transparent"></div>
</div>

<div className="fixed flex z-50 w-full pt-6 pr-4 pl-4 top-0 left-0 justify-center">
<nav className="flex md:gap-12 md:w-auto w-full max-w-5xl rounded-full pt-2 pr-2 pb-2 pl-6 shadow-sm backdrop-blur-xl gap-x-8 gap-y-8 items-center justify-between border bg-white/80 border-zinc-200" style={{}}>
<div className="flex items-center gap-2 shrink-0">
<span className="text-base font-medium tracking-tight flex items-center text-zinc-900" onclick="window.location.href='/home-page'" role="button" style={{}}>

<div className="w-7 h-7 bg-[#006D5B] rounded-full flex items-center justify-center text-white font-bold text-xs">T</div>
<span className="ml-2 font-bold tracking-tight text-zinc-800" style={{}}>TERN</span>
</span>
</div>
<div className="hidden md:flex items-center gap-6">
<a className="transition-colors hover:text-[#006D5B] text-xs font-medium text-zinc-500" href="/home-page" style={{}}>
            Home
          </a>
<a className="transition-colors text-xs font-medium hover:text-[#006D5B] text-zinc-500" href="/platform" style={{}}>
            Platform
          </a>
<a className="transition-colors text-xs font-medium hover:text-[#006D5B] text-zinc-500" href="/security" style={{}}>
            Security
          </a>
<a className="transition-colors text-xs font-medium hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>
            Company
          </a>
</div>
<div className="flex items-center gap-4 shrink-0">
<button className="group inline-flex overflow-hidden transition-all duration-300 hover:-translate-y-0.5 hover:shadow-lg rounded-full relative items-center justify-center" onclick="window.location.href='/book-a-demo'" role="button">

<span className="flex items-center justify-center gap-2 uppercase transition-colors duration-300 group-hover:text-white text-xs font-medium tracking-widest bg-white border w-full h-full rounded-full pt-2.5 pr-6 pb-2.5 pl-6 relative group-hover:bg-zinc-900 border-zinc-200 text-zinc-600" style={{}}>
<span className="relative z-10" style={{}}>Book Demo</span>
<svg className="relative z-10 transition-transform duration-300 group-hover:translate-x-0.5" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path className="" d="m12 5 7 7-7 7"></path>
</svg>
</span>
</button>
</div>
</nav>
</div>

<section className="min-h-screen flex flex-col md:pt-20 overflow-hidden w-full pt-32 relative items-center justify-center">

<div className="absolute inset-0 -z-20">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[120%] h-[80%] bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-white via-gray-50 to-gray-50" style={{}}></div>

<div className="opacity-[0.03] mix-blend-multiply bg-[url('https://grainy-gradients.vercel.app/noise.svg')] absolute top-0 right-0 bottom-0 left-0"></div>
</div>


<div className="absolute inset-0 w-full h-full grid grid-cols-1 md:grid-cols-7 gap-0 -z-10 pointer-events-none">
<div className="relative h-full hidden md:block border-r col-anim delay-1 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[75%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
<div className="relative h-full hidden md:block border-r col-anim delay-2 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[65%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
<div className="relative h-full hidden md:block border-r col-anim delay-3 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[55%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
<div className="relative h-full border-r md:border-none col-anim delay-4 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[45%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
<div className="absolute top-[20%] left-0 right-0 h-[30%] bg-gradient-to-b to-transparent pointer-events-none from-gray-50" style={{}}></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-5 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[55%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-6 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[65%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
<div className="relative h-full hidden md:block border-l col-anim delay-7 border-zinc-200/60" style={{}}>
<div className="absolute bottom-0 left-0 right-0 h-[75%] border-t bg-gray-50 border-zinc-200/60" style={{}}></div>
</div>
</div>

<div className="text-center max-w-5xl z-10 mt-24 mr-auto mb-10 ml-auto pr-6 pl-6 relative">

<div className="[animation:fadeSlideIn_1s_ease-out_0.8s_both] animate-on-scroll inline-flex transition-transform hover:scale-105 cursor-pointer group animate bg-white border rounded-full mb-10 pt-1.5 pr-3 pb-1.5 pl-3 shadow-sm gap-x-2 gap-y-2 items-center border-zinc-200" style={{}}>
<span className="flex h-1.5 w-1.5 rounded-full bg-[#006D5B] shadow-[0_0_5px_rgba(0,109,91,0.5)]"></span>
<span className="text-xs font-medium tracking-wide group-hover:text-[#006D5B] transition-colors font-sans text-zinc-600" style={{}}>
            Introducing TERN: Workforce Intelligence
          </span>
</div>

<h1 className="[animation:fadeSlideIn_1s_ease-out_1s_both] animate-on-scroll animate flex flex-wrap justify-center gap-x-[0.25em] gap-y-2 leading-[1.1] md:text-8xl cursor-default text-6xl font-medium tracking-tighter font-manrope mb-8 text-zinc-900" style={{}}>
          Clinical AI Workforce Operating System
        </h1>

<p className="[animation:fadeSlideIn_1s_ease-out_1.2s_both] animate-on-scroll leading-relaxed md:text-2xl animate text-xl font-medium tracking-normal font-manrope max-w-3xl mr-auto mb-12 ml-auto text-zinc-500" style={{}}>
          Unify Global Sourcing, AI-driven Clinical Assessment &amp; Readiness
          Check into one healthcare-native system.
        </p>

<div className="[animation:fadeSlideIn_1s_ease-out_1.4s_both] animate-on-scroll flex flex-col md:flex-row items-center justify-center gap-6 animate mb-8">
<button className="group flex overflow-hidden uppercase transition-all duration-500 hover:scale-[1.02] hover:shadow-[0_0_40px_-10px_rgba(0,109,91,0.3)] focus:outline-none text-sm font-medium tracking-widest font-geist rounded-full pt-5 pr-12 pb-5 pl-12 relative items-center justify-center text-white bg-[#006D5B]">
<style>
              @keyframes beam-spin { to { transform: rotate(360deg); } }
            </style>

<div className="absolute inset-0 -z-20 rounded-full overflow-hidden p-[1px]">
<div className="absolute inset-[-100%] bg-[conic-gradient(from_0deg,transparent_0_300deg,rgba(255,255,255,0.4)_360deg)]" style={{animation: 'beam-spin 3s linear infinite'}}></div>
<div className="absolute inset-[1px] rounded-full bg-[#006D5B]"></div>
</div>

<span className="z-10 transition-colors relative text-white">
              Book a Platform Demo
            </span>
<svg className="lucide lucide-arrow-right relative z-10 ml-2 transition-transform duration-300 group-hover:translate-x-1" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

</div>

<div className="[animation:fadeSlideIn_1s_ease-out_1.8s_both] animate-on-scroll animate w-full max-w-6xl z-20 mr-auto ml-auto pr-6 pb-12 pl-6 relative md:pb-10">
<div className="inline-flex flex-nowrap overflow-hidden [mask-image:_linear-gradient(to_right,transparent_0,_black_128px,_black_calc(100%-128px),transparent_100%)] group w-full">
<style>
            @keyframes infinite-scroll {
                0% { transform: translateX(0); }
                100% { transform: translateX(-50%); }
            }
            .animate-infinite-scroll {
                animation: infinite-scroll 40s linear infinite;
            }
            /* Pause animation on hover */
            .group:hover .animate-infinite-scroll {
                animation-play-state: paused;
            }
          </style>
<div className="flex md:justify-start [&amp;_div]:mx-8 animate-infinite-scroll w-max mr-8 ml-8 items-center justify-center grayscale hover:grayscale-0 transition-all duration-500">

<div className="group flex items-center gap-2">
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-3xl transition-colors iconify--simple-icons text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:npm" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.763 0C.786 0 0 .786 0 1.763v20.474C0 23.214.786 24 1.763 24h20.474c.977 0 1.763-.786 1.763-1.763V1.763C24 .786 23.214 0 22.237 0zM5.13 5.323l13.837.019l-.009 13.836h-3.464l.01-10.382h-3.456L12.04 19.17H5.113z" fill="currentColor"></path></svg>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl transition-colors iconify--simple-icons text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:lucid" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path></svg>
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl transition-colors text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:wrike" style={{}}></span>
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                wrike
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl transition-colors iconify--simple-icons text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:jquery" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M1.525 5.87c-2.126 3.054-1.862 7.026-.237 10.269q.057.117.118.229q.035.076.077.15q.021.042.047.082q.04.078.081.152l.157.266c.03.049.057.097.09.146c.056.094.12.187.178.281q.037.06.079.117a6 6 0 0 0 .31.445q.115.16.24.315l.086.115l.22.269c.028.03.055.067.084.099q.148.176.306.35l.005.006a3 3 0 0 0 .425.44q.119.125.245.245l.101.097q.165.158.34.309q.002 0 .005.003l.057.05q.153.135.31.26l.125.105l.26.2l.137.105c.093.07.192.139.287.207q.052.038.106.073l.03.023l.28.185l.12.08q.221.14.44.272q.063.031.123.068q.164.095.329.183q.09.05.184.094q.113.062.234.125a.3.3 0 0 1 .056.023l.096.047q.18.09.375.175q.037.014.076.034q.215.094.438.182c.034.01.07.027.105.04q.204.078.411.152l.05.018q.23.078.46.15l.111.033c.16.048.314.105.474.137c10.273 1.872 13.258-6.177 13.258-6.177c-2.508 3.266-6.958 4.127-11.174 3.169c-.156-.036-.312-.086-.47-.132a14 14 0 0 1-.567-.182l-.062-.024q-.202-.07-.4-.148l-.11-.04q-.22-.09-.433-.184c-.031-.01-.057-.024-.088-.036l-.362-.17l-.106-.052c-.094-.044-.188-.095-.28-.143a4 4 0 0 1-.187-.096c-.114-.06-.227-.125-.34-.187q-.052-.035-.112-.066a16 16 0 0 1-.439-.27a2 2 0 0 1-.118-.078a6 6 0 0 1-.312-.207l-.103-.073a10 10 0 0 1-.295-.212q-.064-.05-.132-.1c-.088-.07-.177-.135-.265-.208l-.118-.095a11 11 0 0 1-.335-.28l-.037-.031l-.347-.316l-.1-.094q-.123-.125-.25-.246l-.098-.1a9 9 0 0 1-.309-.323l-.015-.016q-.159-.174-.313-.355q-.04-.046-.08-.097l-.227-.277a21 21 0 0 1-.34-.449C2.152 11.79 1.306 7.384 3.177 3.771m4.943-.473c-1.54 2.211-1.454 5.169-.254 7.508a9 9 0 0 0 .678 1.133c.23.33.484.721.793.988q.162.181.344.36l.09.09q.172.164.35.325l.016.013a10 10 0 0 0 .414.342c.034.023.063.05.096.073q.21.161.428.316l.015.009q.093.066.198.13c.028.018.06.042.09.06q.158.1.318.197l.048.023c.09.055.188.108.282.157c.033.02.065.035.1.054q.1.05.197.102l.032.014q.204.1.408.19q.05.02.092.039q.167.072.336.137c.05.017.097.037.144.052c.102.038.21.073.31.108l.14.045c.147.045.295.104.449.13C22.164 17.206 24 11.098 24 11.098c-1.653 2.38-4.852 3.513-8.261 2.628a8 8 0 0 1-.449-.13c-.048-.014-.09-.029-.136-.043c-.104-.036-.211-.07-.312-.109l-.144-.054c-.113-.045-.227-.087-.336-.135c-.034-.015-.065-.025-.091-.04q-.211-.093-.418-.192l-.206-.107l-.119-.06a6 6 0 0 1-.265-.15l-.062-.035c-.106-.066-.217-.13-.318-.198q-.05-.03-.097-.062l-.208-.136c-.144-.1-.285-.208-.428-.313q-.048-.042-.094-.079c-1.499-1.178-2.681-2.79-3.242-4.613c-.59-1.897-.46-4.023.56-5.75m4.292-.147c-.909 1.334-.996 2.99-.37 4.46c.665 1.563 2.024 2.79 3.608 3.37q.096.036.196.07l.088.027c.092.03.185.063.28.084c4.381.845 5.567-2.25 5.886-2.704c-1.043 1.498-2.792 1.857-4.938 1.335a5 5 0 0 1-.516-.16a6 6 0 0 1-.618-.254a6.5 6.5 0 0 1-1.082-.66c-1.922-1.457-3.113-4.236-1.859-6.5" fill="currentColor"></path></svg>
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                jQuery
              </span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl transition-colors iconify--simple-icons text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:openstack" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M18.575 9.29h5.418v5.42h-5.418zM0 9.29h5.419v5.42H0zm18.575 7.827a1.207 1.207 0 0 1-1.206 1.206H6.623a1.207 1.207 0 0 1-1.205-1.206v-.858H0v5.252a2.236 2.236 0 0 0 2.229 2.23h19.53A2.237 2.237 0 0 0 24 21.512V16.26h-5.425zM21.763.258H2.233a2.236 2.236 0 0 0-2.23 2.23V7.74h5.419v-.858a1.206 1.206 0 0 1 1.205-1.206h10.746a1.206 1.206 0 0 1 1.205 1.206v.858H24V2.487A2.237 2.237 0 0 0 21.763.258" fill="currentColor"></path></svg>
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                openstack
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl transition-colors text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:servicenow" style={{}}></span>
<span className="font-medium text-lg tracking-tight font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                servicenow
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="font-bold text-xl tracking-tight font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                paysafe:
              </span>
</div>

<div className="group flex items-center gap-2">
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>git</span>
</div>
<div className="group flex items-center gap-2">
<svg aria-hidden="true" className="iconify text-xl transition-colors iconify--simple-icons text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:lucid" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M12 0L3.694 4.8V24L12 19.2Zm0 19.2v4.502h8.305V14.4Z" fill="currentColor"></path></svg>
<span className="font-medium text-lg font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                Lucidchart
              </span>
</div>
<div className="group flex items-center gap-2">
<span className="iconify text-xl transition-colors text-zinc-400 hover:text-zinc-900" data-icon="simple-icons:servicenow" style={{}}></span>
<span className="font-medium text-lg tracking-tight font-sans transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>
                servicenow
              </span>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 w-full max-w-7xl mt-10 mr-auto mb-20 ml-auto pt-10 pr-2 pb-20 pl-2 relative">


<div className="flex justify-center w-full mb-10">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border shadow-sm border-orange-200 bg-orange-50" style={{}}>
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-orange-400" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" style={{}}></span>
</span>
<span className="text-[11px] font-semibold uppercase tracking-widest font-sans text-orange-600" style={{}}>
            Whats Broken Today?
          </span>
</div>
</div>

<div className="group overflow-hidden z-10 rounded-[2.5rem] mb-6 relative backdrop-blur-xl border bg-white shadow-lg border-zinc-200 shadow-zinc-200/50" style={{}}>

<div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,_var(--tw-gradient-stops))] from-[#006D5B]/5 via-transparent to-transparent pointer-events-none"></div>
<div className="grid lg:grid-cols-12 min-h-[550px]">

<div className="lg:col-span-5 p-8 md:p-12 flex flex-col justify-center relative z-10 lg:border-r border-zinc-100" style={{}}>
<div className="w-12 h-12 rounded-xl bg-[#006D5B]/10 border border-[#006D5B]/20 flex items-center justify-center mb-8 text-[#006D5B]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
</svg>
</div>
<h2 className="md:text-4xl lg:text-5xl leading-[1.1] text-3xl font-semibold tracking-tighter font-manrope mb-6 text-zinc-900" style={{}}>
              Fragmented processes
              <span className="text-zinc-400" style={{}}>delay care</span>
</h2>
<p className="md:text-lg leading-relaxed text-base mb-8 text-zinc-500" style={{}}>
              Legacy workflows rely on fragmented tools, leading to clinical
              risk and operational blindness.
            </p>
<div className="space-y-4">
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full border bg-orange-50 border-orange-200 text-orange-500" style={{}}>
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-600" style={{}}>
                  Disconnected sourcing cycles drive high operational latency.
                </span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full border bg-orange-50 border-orange-200 text-orange-500" style={{}}>
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-600" style={{}}>
                  Inconsistent clinical validation leads to variable
                  performance.
                </span>
</div>
<div className="flex items-center gap-3">
<div className="flex items-center justify-center w-5 h-5 rounded-full border bg-orange-50 border-orange-200 text-orange-500" style={{}}>
<svg fill="none" height="10" stroke="currentColor" strokeWidth="3" viewbox="0 0 24 24" width="10">
<path d="M18 6L6 18M6 6l12 12"></path>
</svg>
</div>
<span className="text-sm text-zinc-600" style={{}}>
                  Data-blind retention strategies result in high clinician
                  churn.
                </span>
</div>
</div>
</div>

<div className="lg:col-span-7 relative overflow-hidden flex flex-col bg-gray-50/50" style={{}}>

<div className="h-12 border-b flex items-center px-5 gap-3 w-full backdrop-blur-md bg-white/50 border-zinc-200" style={{}}>
<div className="flex gap-1.5">
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300" style={{}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300" style={{}}></div>
<div className="w-2.5 h-2.5 rounded-full bg-zinc-300" style={{}}></div>
</div>
<div className="flex-1 text-center"></div>
<div className="w-10"></div>
</div>

<div className="relative flex-1 p-8 md:p-12 flex items-center justify-center bg-[url('https://grainy-gradients.vercel.app/noise.svg')] bg-opacity-5">

<div className="opacity-[0.05] absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'linear-gradient(to right, #000 1px, transparent 1px), linear-gradient(to bottom, #000 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="relative z-10 w-full max-w-lg">

<div className="absolute left-8 top-12 bottom-12 w-0.5 bg-gradient-to-b to-[#006D5B]/50 from-orange-200 via-zinc-200" style={{}}></div>
<div className="space-y-4">

<div className="relative pl-12">
<div className="absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 z-10 bg-white border-orange-400" style={{}}></div>
<div className="border rounded-xl p-4 flex items-center justify-between opacity-60 grayscale hover:grayscale-0 transition-all duration-500 bg-white shadow-sm border-zinc-200" style={{}}>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-orange-50 text-orange-500" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z"></path>
<path d="M14 2v6h6"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
<path d="M10 9H8"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900" style={{}}>
                            Spreadsheet Import
                          </div>
<div className="text-[10px] text-zinc-500" style={{}}>
                            Manual data entry required
                          </div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-400" style={{}}>
                        +48h Delay
                      </span>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full border-2 z-10 bg-white border-zinc-300" style={{}}></div>
<div className="border rounded-xl p-4 flex items-center justify-between opacity-80 bg-white shadow-sm border-zinc-200" style={{}}>
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-zinc-100 text-zinc-500" style={{}}>
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<circle cx="12" cy="12" r="10"></circle>
<polyline points="12 6 12 12 16 14"></polyline>
</svg>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900" style={{}}>
                            Credential Verification
                          </div>
<div className="text-[10px] text-zinc-500" style={{}}>
                            Pending external review
                          </div>
</div>
</div>
<span className="text-[10px] font-mono text-zinc-500" style={{}}>
                        Processing...
                      </span>
</div>
</div>

<div className="relative pl-12">
<div className="absolute left-[27px] top-1/2 -translate-y-1/2 w-3 h-3 rounded-full bg-[#006D5B] shadow-[0_0_10px_rgba(0,109,91,0.4)] z-10"></div>
<div className="bg-gradient-to-r border border-[#006D5B]/30 rounded-xl p-4 flex items-center justify-between shadow-lg transform scale-105 from-white to-[#006D5B]/5">
<div className="flex items-center gap-3">
<div className="p-2 rounded-lg bg-[#006D5B]/10 text-[#006D5B]">
<svg fill="none" height="16" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="16">
<path d="M12 2v20"></path>
<path d="m17 5-5-3-5 3"></path>
<path d="m17 19-5 3-5-3"></path>
<path d="M2 12h20"></path>
</svg>
</div>
<div>
<div className="text-xs font-semibold text-zinc-900" style={{}}>
                            TERN Automated Route
                          </div>
<div className="text-[10px] text-[#006D5B]">
                            Instant validation &amp; placement
                          </div>
</div>
</div>
<div className="flex items-center gap-1.5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#006D5B]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#006D5B]"></span>
</span>
<span className="text-[10px] font-mono font-medium text-[#006D5B]">
                          Active
                        </span>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col gap-16 w-full pt-20 border-t relative border-zinc-200" style={{}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-full max-w-[800px] h-[500px] -z-10 bg-[radial-gradient(circle_at_top,_var(--tw-gradient-stops))] from-blue-100/50 via-transparent to-transparent opacity-60 pointer-events-none mix-blend-multiply"></div>

<div className="flex flex-col items-center text-center w-full mx-auto max-w-3xl px-4">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 backdrop-blur-sm shadow-sm bg-white border-zinc-200" style={{}}>
<span className="flex relative h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#006D5B]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#006D5B]"></span>
</span>
<span className="text-[11px] font-semibold uppercase tracking-widest font-sans text-zinc-500" style={{}}>
              Platform Modules
            </span>
</div>
<h2 className="md:text-5xl lg:text-6xl leading-[1.05] text-4xl font-medium tracking-tighter font-manrope text-center w-full mb-6 text-zinc-900" style={{}}>
            One platform for the
            <span className="text-[#006D5B]">
              clinical pipeline.
            </span>
</h2>
<p className="leading-relaxed text-lg max-w-2xl mr-auto ml-auto text-zinc-500" style={{}}>
            From Hiring, Assesment, Retention to Management OS, TERN integrates
            fragmented operations into a single, intelligent infrastructure
            layer.
          </p>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full">

<div className="group relative overflow-hidden rounded-[2.5rem] border p-1 h-[480px] transition-colors duration-500 backdrop-blur-sm bg-white hover:shadow-lg border-zinc-200 hover:shadow-zinc-200/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#006D5B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="h-full w-full rounded-[2.3rem] overflow-hidden relative bg-gray-50" style={{}}>

<div className="absolute inset-0 flex items-center justify-center opacity-60 group-hover:opacity-80 transition-all duration-700 group-hover:scale-105">

<img alt="Global Texture" className="absolute inset-0 w-full h-full object-cover mix-blend-multiply opacity-20 saturate-0 group-hover:saturate-50 transition-all duration-700" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=2160&amp;q=80"/>
<div className="absolute inset-0" style={{maskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)', WebkitMaskImage: 'radial-gradient(circle at center, black 30%, transparent 70%)'}}>
<svg className="w-full h-full text-[#006D5B]/10" preserveaspectratio="none" viewbox="0 0 100 100">
<defs>
<pattern height="8" id="grid-global" patternunits="userSpaceOnUse" width="8">
<circle cx="1" cy="1" fill="currentColor" r="0.5"></circle>
</pattern>
</defs>
<rect className="" fill="url(#grid-global)" height="100%" width="100%"></rect>
</svg>
</div>

<div className="absolute top-[30%] right-[30%] p-2.5 rounded-xl border shadow-lg backdrop-blur-md flex gap-3 items-center transform rotate-6 group-hover:rotate-3 transition-transform duration-500 hover:scale-110 cursor-default bg-white/90 border-zinc-100" style={{}}>
<div className="w-2 h-2 rounded-full bg-[#006D5B] shadow-[0_0_8px_rgba(0,109,91,0.5)] animate-pulse"></div>
<div className="flex flex-col">
<span className="text-[10px] font-bold leading-none font-manrope text-zinc-900" style={{}}>
                      Candidate #8492
                    </span>
<span className="text-[9px] font-mono leading-none mt-1 text-zinc-400" style={{}}>
                      London, UK
                    </span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t to-transparent pt-32 from-white via-white/80">
<div className="flex gap-3 mb-4 gap-x-3 gap-y-3 items-center">
<div className="p-2.5 rounded-xl bg-blue-50 border border-blue-100 shadow-sm text-blue-600">
<svg className="lucide lucide-globe" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="10"></circle>
<line x1="2" x2="22" y1="12" y2="12"></line>
<path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-manrope text-zinc-900" style={{}}>
                    Hire
                  </h3>
</div>
<p className="leading-relaxed text-sm max-w-sm text-zinc-500" style={{}}>
                  Sovereign control over your international clinical supply
                  chain.
                </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2.5rem] border p-1 h-[480px] transition-colors duration-500 backdrop-blur-sm bg-white hover:shadow-lg border-zinc-200 hover:shadow-zinc-200/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-purple-500/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none" style={{}}></div>
<div className="h-full w-full rounded-[2.3rem] overflow-hidden relative bg-gray-50" style={{}}>

<div className="absolute inset-0 flex items-center justify-center">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(168,85,247,0.05),transparent_60%)]"></div>

<div className="w-72 border rounded-2xl p-5 shadow-xl backdrop-blur-md transform translate-y-2 group-hover:-translate-y-2 transition-transform duration-700 ease-out relative bg-white/80 border-zinc-100" style={{}}>
<div className="flex items-center justify-between mb-5 border-b pb-4 border-zinc-100" style={{}}>
<div className="flex items-center gap-2">
<svg className="text-purple-600" fill="none" height="14" stroke="currentColor" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path>
</svg>
<span className="text-[11px] font-bold tracking-widest uppercase text-zinc-500" style={{}}>
                        Analysis
                      </span>
</div>
<span className="text-[10px] font-mono bg-purple-50 px-2 py-1 rounded-md border border-purple-100 text-purple-600" style={{}}>
                      AI_PASS
                    </span>
</div>
<div className="space-y-5">
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-800" style={{}}>
                          Clinical Judgment
                        </span>
<span className="text-xs font-mono text-zinc-500" style={{}}>98%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-zinc-100" style={{}}>
<div className="w-[98%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full relative overflow-hidden" style={{}}>
</div>
</div>
</div>
<div>
<div className="flex items-center justify-between mb-2">
<span className="text-xs font-medium text-zinc-800" style={{}}>
                          Communication
                        </span>
<span className="text-xs font-mono text-zinc-500" style={{}}>94%</span>
</div>
<div className="w-full h-2 rounded-full overflow-hidden bg-zinc-100" style={{}}>
<div className="w-[94%] h-full bg-gradient-to-r from-purple-500 to-indigo-500 rounded-full" style={{}}></div>
</div>
</div>
</div>
</div>
</div>

<div className="bg-gradient-to-t to-transparent pt-32 pr-10 pb-10 pl-10 absolute right-0 bottom-0 left-0 from-white via-white/80">
<div className="flex items-center gap-3 mb-4">
<div className="p-2.5 rounded-xl bg-purple-50 border border-purple-100 shadow-sm text-purple-600" style={{}}>
<svg className="lucide lucide-brain-circuit" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M12 5a3 3 0 1 0-5.997.125 4 4 0 0 0-2.526 5.77 4 4 0 0 0 .556 6.588A4 4 0 1 0 12 18Z"></path>
<path d="M9 13a4.5 4.5 0 0 0 3-4"></path>
<path d="M6.003 5.125A3 3 0 0 1 19.528 8.575a4 4 0 0 1 1.996 5.618 4 4 0 0 1-2.428 6.165A4 4 0 1 1 12 18"></path>
<path d="M15 13a4.5 4.5 0 0 1-3-4"></path>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-manrope text-zinc-900" style={{}}>
                    Develop
                  </h3>
</div>
<p className="leading-relaxed text-sm max-w-sm text-zinc-500" style={{}}>
                  Standardized, clinician-led AI validation for every
                  professional.
                </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2.5rem] border p-1 h-[480px] transition-colors duration-500 backdrop-blur-sm bg-white hover:shadow-lg border-zinc-200 hover:shadow-zinc-200/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none from-orange-500/5" style={{}}></div>
<div className="h-full w-full rounded-[2.3rem] overflow-hidden relative bg-gray-50" style={{}}>

<div className="flex pt-8 pr-8 pb-8 pl-8 absolute top-0 right-0 bottom-0 left-0 items-center justify-center">
<div className="relative w-full max-w-xs aspect-video rounded-xl overflow-hidden border shadow-xl group-hover:scale-105 transition-transform duration-500 bg-white border-zinc-200" style={{}}>

<div className="absolute inset-0 bg-zinc-100" style={{}}>
<img alt="Video" className="w-full h-full object-cover opacity-80 mix-blend-multiply" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=2160&amp;q=80"/>

<div className="absolute bottom-0 left-0 right-0 h-16 flex items-end justify-center gap-1.5 pb-6 px-8 opacity-80">
<div className="w-1.5 h-6 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-pink-400" style={{}}></div>
<div className="w-1.5 h-10 animate-[pulse_1.2s_ease-in-out_infinite] rounded-full bg-pink-400" style={{}}></div>
<div className="w-1.5 h-4 animate-[pulse_0.8s_ease-in-out_infinite] rounded-full bg-pink-400" style={{}}></div>
<div className="w-1.5 h-12 animate-[pulse_1.5s_ease-in-out_infinite] rounded-full bg-pink-400" style={{}}></div>
<div className="w-1.5 h-8 animate-[pulse_1s_ease-in-out_infinite] rounded-full bg-pink-400" style={{}}></div>
</div>
</div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-12 h-12 rounded-full backdrop-blur-md border flex items-center justify-center transition-transform duration-300 group-hover:scale-110 bg-white/30 border-white/50 shadow-sm">
<svg className="ml-1 text-white" fill="currentColor" height="20" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M8 5v14l11-7z"></path>
</svg>
</div>
</div>

<div className="absolute top-4 right-4 flex gap-2 items-center backdrop-blur px-2 py-1 rounded-full border bg-white/80 border-zinc-200" style={{}}>
<div className="w-2 h-2 rounded-full animate-pulse bg-orange-500" style={{}}></div>
<span className="text-[10px] font-mono font-medium text-zinc-900" style={{}}>
                      REC
                    </span>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t to-transparent pt-32 from-white via-white/80">
<div className="flex items-center gap-3 mb-4">
<div className="p-2.5 rounded-xl border shadow-sm bg-orange-50 border-orange-100 text-orange-500" style={{}}>
<svg className="lucide lucide-video" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="m22 8-6 4 6 4V8Z"></path>
<rect height="12" rx="2" ry="2" width="14" x="2" y="6"></rect>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-manrope text-zinc-900" style={{}}>
                    Retain
                  </h3>
</div>
<p className="leading-relaxed text-sm max-w-sm text-zinc-500" style={{}}>
                  Predictive analytics to optimize engagement and reduce churn.
                </p>
</div>
</div>
</div>

<div className="group relative overflow-hidden rounded-[2.5rem] border p-1 h-[480px] transition-colors duration-500 backdrop-blur-sm bg-white hover:shadow-lg border-zinc-200 hover:shadow-zinc-200/50" style={{}}>
<div className="absolute inset-0 bg-gradient-to-br from-[#006D5B]/5 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none"></div>
<div className="h-full w-full rounded-[2.3rem] overflow-hidden relative bg-gray-50" style={{}}>

<div className="absolute inset-0 flex items-center justify-center p-8">
<div className="w-72 relative">

<div className="absolute left-[19px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-[#006D5B]/50 to-zinc-200" style={{}}></div>
<div className="space-y-6 relative">

<div className="flex items-center gap-5 opacity-40">
<div className="w-10 h-10 rounded-full border flex items-center justify-center relative z-10 bg-white border-zinc-200" style={{}}>
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" style={{}} viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="h-2.5 w-32 rounded-full bg-zinc-200" style={{}}></div>
</div>

<div className="flex items-center gap-5 opacity-60">
<div className="w-10 h-10 rounded-full border flex items-center justify-center relative z-10 bg-white border-zinc-200" style={{}}>
<svg className="w-4 h-4 text-zinc-500" fill="none" stroke="currentColor" style={{}} viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="h-2.5 w-40 rounded-full bg-zinc-200" style={{}}></div>
</div>

<div className="flex items-center gap-5 group-hover:translate-x-2 transition-transform duration-500">
<div className="w-10 h-10 rounded-full bg-[#006D5B] flex items-center justify-center relative z-10 shadow-[0_0_15px_rgba(0,109,91,0.4)]">
<svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewbox="0 0 24 24">
<path d="M5 13l4 4L19 7" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>
</svg>
</div>
<div className="flex flex-col gap-2 p-4 rounded-xl border border-[#006D5B]/20 shadow-xl backdrop-blur-sm w-full max-w-[180px] bg-white">
<span className="text-[11px] font-bold uppercase tracking-wider text-zinc-800" style={{}}>
                          Deploy Ready
                        </span>
<div className="h-1.5 w-full rounded-full overflow-hidden bg-zinc-100" style={{}}>
<div className="h-full w-full bg-[#006D5B] animate-[pulse_2s_infinite]"></div>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="absolute bottom-0 left-0 right-0 p-10 bg-gradient-to-t to-transparent pt-32 from-white via-white/80">
<div className="flex items-center gap-3 mb-4">
<div className="p-2.5 rounded-xl bg-[#006D5B]/10 border border-[#006D5B]/20 shadow-sm text-[#006D5B]">
<svg className="lucide lucide-zap" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2"></polygon>
</svg>
</div>
<h3 className="text-2xl font-semibold tracking-tight font-manrope text-zinc-900" style={{}}>
                    Management OS
                  </h3>
</div>
<p className="leading-relaxed text-sm max-w-sm text-zinc-500" style={{}}>
                  Centralized governance and real-time visibility for health
                  systems.
                </p>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="overflow-hidden w-full max-w-7xl z-20 mt-0 mr-auto mb-20 ml-auto pt-10 pb-20 relative">

<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full select-none pointer-events-none z-0">
<h2 className="text-[12vw] leading-none font-bold text-center whitespace-nowrap font-manrope tracking-tighter text-zinc-900/[0.03]" style={{}}>
          VISIBILITY
        </h2>
</div>
<div className="grid lg:grid-cols-12 gap-8 items-center relative z-10 px-6">

<div className="lg:col-span-4 flex flex-col justify-center order-2 lg:order-1">
<div className="flex items-center gap-2 mb-6 opacity-60">
<span className="w-2 h-2 rounded-full bg-[#006D5B]"></span>
<span className="text-xs tracking-widest font-mono text-zinc-500" style={{}}>
              2026
            </span>
</div>
<h3 className="leading-[1.1] uppercase md:text-7xl text-4xl font-normal tracking-tight font-manrope mb-8 text-zinc-900" style={{}}>
            Real-time visibility into workforce readiness.
          </h3>
<div className="hidden lg:block h-px w-24 mt-4 bg-zinc-300" style={{}}></div>
</div>

<div className="lg:col-span-4 flex order-1 lg:order-2 lg:py-0 pt-12 pb-12 relative justify-center">

<div className="-translate-x-1/2 -translate-y-1/2 blur-[100px] pointer-events-none bg-[#006D5B]/20 w-64 h-96 rounded-full absolute top-1/2 left-1/2"></div>

<div className="border-[1px] overflow-hidden w-[330px] h-[660px] z-10 rounded-[3.5rem] ring-1 relative shadow-2xl bg-white border-zinc-200 ring-zinc-300" style={{}}>

<div className="absolute top-3 left-1/2 -translate-x-1/2 h-[32px] w-[110px] rounded-full z-50 flex items-center justify-between px-3 transition-all duration-500 hover:w-[140px] hover:shadow-lg group/island bg-black">

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100">
<div className="w-1 h-1 rounded-full shadow-[0_0_5px_rgba(239,68,68,0.5)] animate-pulse bg-orange-500/80" style={{}}></div>
</div>

<div className="flex gap-2 h-full items-center opacity-0 group-hover/island:opacity-100 transition-opacity duration-300 delay-100 ml-auto">
<div className="w-1 h-1 rounded-full bg-green-500/80 shadow-[0_0_5px_rgba(34,197,94,0.5)]"></div>
</div>
</div>

<div className="flex flex-col z-10 bg-gradient-to-b w-full h-full pt-16 pr-6 pl-6 relative from-gray-50 to-white" style={{}}>

<div className="flex z-10 mb-8 relative items-center justify-between">
<button className="flex transition-colors w-8 h-8 rounded-full items-center justify-center border bg-white hover:bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
<svg className="lucide lucide-arrow-left" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path className="" d="m12 19-7-7 7-7"></path>
<path d="M19 12H5"></path>
</svg>
</button>
<div className="flex items-center gap-2">
<div className="w-2 h-2 rounded-full bg-[#006D5B] animate-pulse"></div>
<span className="text-sm font-semibold tracking-wide text-zinc-900" style={{}}>
                    TERN Core
                  </span>
</div>
<button className="flex transition-colors w-8 h-8 rounded-full items-center justify-center border bg-white hover:bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
<svg className="lucide lucide-more-horizontal" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<circle cx="12" cy="12" r="1"></circle>
<circle cx="19" cy="12" r="1"></circle>
<circle cx="5" cy="12" r="1"></circle>
</svg>
</button>
</div>

<div className="text-center mb-4">
<p className="text-[10px] font-semibold uppercase tracking-widest mb-2 text-zinc-500" style={{}}>
                  Active Placements
                </p>
<h4 className="text-5xl font-medium tracking-tighter font-geist text-zinc-900" style={{}}>
                  1,248
                </h4>
<div className="flex gap-1.5 mt-2 gap-x-1.5 gap-y-1.5 items-center justify-center">
<div className="flex items-center text-[#006D5B] bg-[#006D5B]/10 px-1.5 py-0.5 rounded text-[10px] font-semibold border border-[#006D5B]/20">
<svg className="lucide lucide-trending-up mr-1" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<polyline points="22 7 13.5 15.5 8.5 10.5 2 17"></polyline>
<polyline points="16 7 22 7 22 13"></polyline>
</svg>
                    +12.4%
                  </div>
<span className="text-xs font-medium text-zinc-400" style={{}}>
                    this week
                  </span>
</div>
</div>

<div className="w-full h-40 mb-6 relative">
<svg className="w-full h-full overflow-visible" preserveaspectratio="none" viewbox="0 0 280 120">
<defs>
<lineargradient id="d3Gradient" x1="0%" x2="0%" y1="0%" y2="100%">
<stop offset="0%" style={{stopColor: 'rgb(0, 109, 91)', stopOpacity: '0.2'}}></stop>
<stop offset="100%" style={{stopColor: 'rgb(0, 109, 91)', stopOpacity: '0'}}></stop>
</lineargradient>
<pattern height="120" id="grid" patternunits="userSpaceOnUse" width="40">
<line stroke="#e4e4e7" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="0" y2="120"></line>
</pattern>
</defs>

<rect className="" fill="url(#grid)" height="100%" width="100%"></rect>
<line stroke="#e4e4e7" strokeWidth="1" x1="0" x2="280" y1="120" y2="120"></line>

<path d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15 V120 H0 Z" fill="url(#d3Gradient)"></path>

<path className="" d="M0,80 C20,80 30,60 50,65 C70,70 80,90 100,85 C120,80 130,40 150,45 C170,50 180,70 200,60 C220,50 230,20 250,25 C265,28 275,10 280,15" fill="none" stroke="#006D5B" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path>

<g transform="translate(150, 45)">
<circle className="animate-pulse" fill="#fff" r="4" stroke="#006D5B" strokeWidth="2"></circle>
<line opacity="0.5" stroke="#006D5B" stroke-dasharray="2 2" strokeWidth="1" x1="0" x2="0" y1="4" y2="75"></line>
</g>
</svg>

<div className="flex pt-2 pr-2 pl-2 justify-between">
<button className="text-[9px] font-semibold transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>1H</button>
<button className="text-[9px] font-semibold transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>1D</button>
<button className="text-[9px] font-semibold text-[#006D5B] bg-[#006D5B]/10 rounded px-2 py-0.5 border border-[#006D5B]/20">1W</button>
<button className="text-[9px] font-semibold transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>1M</button>
<button className="text-[9px] font-semibold transition-colors text-zinc-400 hover:text-zinc-900" style={{}}>1Y</button>
</div>
</div>

<div className="grid grid-cols-3 mt-4 mb-8 gap-x-3 gap-y-3">
<button className="flex flex-col gap-2 group gap-x-2 gap-y-2 items-center">
<div className="flex shadow-md transition-transform group-active:scale-95 w-12 h-12 rounded-xl items-center justify-center border text-white bg-[#006D5B] border-[#006D5B]">
<svg className="lucide lucide-arrow-down-to-line w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M12 17V3"></path>
<path d="m6 11 6 6 6-6"></path>
<path d="M19 21H5"></path>
</svg>
</div>
<span className="text-[10px] font-medium transition-colors group-hover:text-zinc-900 text-zinc-500" style={{}}>
                    Deposit
                  </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all group-active:scale-95 w-12 h-12 rounded-xl items-center justify-center bg-white border hover:bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
<svg className="lucide lucide-arrow-left-right w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="M8 3 4 7l4 4"></path>
<path d="M4 7h16"></path>
<path d="m16 21 4-4-4-4"></path>
<path d="M20 17H4"></path>
</svg>
</div>
<span className="text-[10px] font-medium transition-colors group-hover:text-zinc-900 text-zinc-500" style={{}}>
                    Swap
                  </span>
</button>
<button className="flex flex-col items-center gap-2 group">
<div className="flex transition-all group-active:scale-95 w-12 h-12 rounded-xl items-center justify-center bg-white border hover:bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
<svg className="lucide lucide-send w-[18px] h-[18px]" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg">
<path d="m22 2-7 20-4-9-9-4Z"></path>
<path d="M22 2 11 13"></path>
</svg>
</div>
<span className="text-[10px] font-medium transition-colors group-hover:text-zinc-900 text-zinc-500" style={{}}>
                    Send
                  </span>
</button>
</div>

<div className="flex-1 rounded-t-[2rem] -mx-6 px-6 pt-6 pb-4 backdrop-blur-md border-t bg-white/80 border-zinc-200" style={{}}>
<div className="flex items-center justify-between mb-4">
<p className="text-[10px] font-bold uppercase tracking-wider text-zinc-400" style={{}}>
                    Live Deployments
                  </p>
<div className="flex gap-1">
<span className="w-1 h-1 rounded-full bg-zinc-300" style={{}}></span>
<span className="w-1 h-1 rounded-full bg-zinc-400" style={{}}></span>
</div>
</div>
<div className="space-y-3">
<div className="flex transition-colors cursor-pointer group rounded-xl px-3 py-3 items-center justify-between border border-transparent hover:bg-zinc-50 hover:border-zinc-200" style={{}}>
<div className="flex items-center gap-3">
<div className="w-8 h-8 rounded-full bg-indigo-50 flex items-center justify-center p-1.5 border border-indigo-100 group-hover:border-indigo-200 transition-colors" style={{}}>
<svg aria-hidden="true" className="text-indigo-600" data-icon="simple-icons:ethereum" height="1em" role="img" style={{}} viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M11.944 17.97L4.58 13.62L11.943 24l7.37-10.38l-7.372 4.35zM12.056 0L4.69 12.223l7.365 4.354l7.365-4.35z" fill="currentColor"></path>
</svg>
</div>
<div className="flex flex-col">
<span className="text-xs font-semibold text-zinc-900" style={{}}>
                          Clinical Nurse
                        </span>
<span className="text-[10px] text-[#006D5B] font-medium flex items-center gap-1">
                          Time-to-Hire
                        </span>
</div>
</div>
<svg className="lucide lucide-chevron-right transition-colors group-hover:text-zinc-900 text-zinc-400" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="m9 18 6-6-6-6"></path>
</svg>
</div>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-4 flex flex-col gap-5 lg:items-end order-3 justify-center relative z-10">

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-white w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-lg border border-zinc-200" style={{}}>
<div className="flex items-center gap-4 mb-6">
<div className="w-12 h-12 rounded-full bg-[#006D5B] p-0.5 shadow-lg shadow-[#006D5B]/20">
<div className="w-full h-full rounded-full flex items-center justify-center bg-white text-[#006D5B]">
<svg className="w-[20px] h-[20px]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
</svg>
</div>
</div>
<div className="">
<h3 className="text-lg font-semibold tracking-tight font-manrope text-zinc-900" style={{}}>
                  Pipeline Velocity
                </h3>
<p className="text-xs font-medium font-sans text-zinc-500" style={{}}>
                  Health System A
                </p>
</div>
<div className="ml-auto">
<div className="w-2 h-2 rounded-full bg-[#006D5B] shadow-[0_0_8px_rgba(0,109,91,0.6)] animate-pulse"></div>
</div>
</div>
<div className="flex justify-between gap-2 mb-5">
<div className="flex flex-col flex-1 transition-colors rounded-2xl pt-3 pr-3 pb-3 pl-3 border bg-zinc-50 hover:bg-zinc-100 border-zinc-100" style={{}}>
<span className="text-[10px] uppercase tracking-wider mb-1 font-sans text-zinc-400" style={{}}>
                  Uptime
                </span>
<span className="text-sm font-semibold font-geist text-zinc-900" style={{}}>
                  12 Days
                </span>
</div>
<div className="flex flex-col flex-1 transition-colors rounded-2xl pt-3 pr-3 pb-3 pl-3 border bg-zinc-50 hover:bg-zinc-100 border-zinc-100" style={{}}>
<span className="text-[10px] uppercase tracking-wider mb-1 font-sans text-zinc-400" style={{}}>
                  Fill Rate
                </span>
<span className="text-sm font-semibold font-geist text-zinc-900" style={{}}>
                  94%
                </span>
</div>
<div className="flex flex-col flex-1 transition-colors rounded-2xl pt-3 pr-3 pb-3 pl-3 border bg-zinc-50 hover:bg-zinc-100 border-zinc-100" style={{}}>
<span className="text-[10px] uppercase tracking-wider mb-1 font-sans text-zinc-400" style={{}}>
                  Retention
                </span>
<span className="text-sm font-semibold font-geist text-zinc-900" style={{}}>
                  98%
                </span>
</div>
</div>
<button className="transition-colors duration-300 flex gap-2 group text-xs font-medium bg-[#006D5B] w-full rounded-full pt-2.5 pb-2.5 gap-x-2 gap-y-2 items-center justify-center hover:bg-[#008571] text-white shadow-sm">
<span className="">View Analytics</span>
<svg className="group-hover:translate-x-0.5 transition-transform" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>

<div className="transition-transform duration-500 hover:scale-[1.01] text-left bg-white w-full max-w-sm rounded-3xl pt-5 pr-5 pb-5 pl-5 shadow-lg border border-zinc-200" style={{}}>
<p className="text-sm leading-relaxed mb-4 font-sans text-zinc-500" style={{}}>
              Enterprise-grade infrastructure with automated scaling and
              zero-knowledge security proofs built-in.
            </p>
<div className="flex flex-wrap gap-2 mb-4">
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium rounded-full pt-1 pr-2.5 pb-1 pl-2.5 border bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
                zk-SNARKs
              </span>
<span className="inline-flex items-center gap-1.5 text-[10px] font-medium rounded-full pt-1 pr-2.5 pb-1 pl-2.5 border bg-zinc-100 text-zinc-600 border-zinc-200" style={{}}>
                Auto-scale
              </span>
</div>
<div className="flex gap-2">
<button className="flex-1 flex items-center justify-between rounded-xl border px-3 py-2 transition-colors group bg-white border-zinc-200 hover:border-zinc-300 hover:bg-zinc-50" style={{}}>
<span className="text-xs font-medium font-sans text-zinc-600" style={{}}>
                  Documentation
                </span>
<svg className="transition-colors text-zinc-400 group-hover:text-zinc-900" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" style={{}} viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</button>
</div>
</div>
</div>
</div>
</section>
<section className="w-full max-w-7xl z-20 mt-0 mr-auto mb-15 ml-auto pt-6 pr-6 pb-6 pl-6 relative" id="security">

<div className="flex flex-col text-center mb-20 items-center">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border border-[#006D5B]/20 bg-[#006D5B]/5 mb-6">
<svg aria-hidden="true" className="iconify text-[#006D5B]" data-icon="solar:star-bold-duotone" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<path d="M18.483 16.767A8.5 8.5 0 0 1 8.118 7.081a1 1 0 0 1-.113.097c-.28.213-.63.292-1.33.45l-.635.144c-2.46.557-3.69.835-3.983 1.776c-.292.94.546 1.921 2.223 3.882l.434.507c.476.557.715.836.822 1.18c.107.345.071.717-.001 1.46l-.066.677c-.253 2.617-.38 3.925.386 4.506s1.918.052 4.22-1.009l.597-.274c.654-.302.981-.452 1.328-.452s.674.15 1.329.452l.595.274c2.303 1.06 3.455 1.59 4.22 1.01c.767-.582.64-1.89.387-4.507z" fill="currentColor"></path>
<path className="" d="m9.153 5.408l-.328.588c-.36.646-.54.969-.82 1.182q.06-.045.113-.097a8.5 8.5 0 0 0 10.366 9.686l-.02-.19c-.071-.743-.107-1.115 0-1.46c.107-.344.345-.623.822-1.18l.434-.507c1.677-1.96 2.515-2.941 2.222-3.882c-.292-.941-1.522-1.22-3.982-1.776l-.636-.144c-.699-.158-1.049-.237-1.33-.45c-.28-.213-.46-.536-.82-1.182l-.327-.588C13.58 3.136 12.947 2 12 2s-1.58 1.136-2.847 3.408" fill="currentColor" opacity=".5"></path>
</svg>
<span className="text-xs font-semibold uppercase tracking-widest font-sans text-[#006D5B]">
            Trust Center
          </span>
</div>
<h2 className="md:text-7xl text-5xl font-medium tracking-tighter font-manrope mb-6 text-zinc-900" style={{}}>
          Built to Global Healthcare Standards
        </h2>
<p className="text-xl font-sans max-w-2xl leading-relaxed text-zinc-500" style={{}}>
          TERN ensures data integrity through encryption at rest and in transit,
          with full audit trails for every staffing decision.
        </p>
</div>

<div className="grid grid-cols-1 lg:grid-cols-12 mb-12 pt-4 pr-4 pb-4 pl-4 gap-x-6 gap-y-6">

<div className="lg:col-span-7 flex flex-col gap-6">

<div className="group transition-all duration-500 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm bg-white border shadow-sm hover:bg-zinc-50 border-zinc-200" style={{}}>
<div className="group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-bl from-[#006D5B]/5 via-transparent to-transparent opacity-0 rounded-[2.5rem] absolute top-0 right-0 bottom-0 left-0"></div>
<div className="relative z-10">
<div className="flex flex-col md:flex-row md:items-center gap-6 mb-8">
<h3 className="text-6xl font-semibold tracking-tighter font-geist text-zinc-900" style={{}}>
                  ISO 27001
                </h3>
<p className="text-lg font-medium text-zinc-500" style={{}}>
                  Certified Security Standard
                </p>
</div>
<blockquote className="text-base font-sans leading-relaxed mb-8 text-zinc-500" style={{}}>
                "We ensure rigorous data protection and compliance standards for
                all clinical workforce operations."
              </blockquote>
<div className="flex items-center gap-2 text-[#006D5B]">
<svg fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg">
<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
<path d="m9 12 2 2 4-4"></path>
</svg>
<span className="font-semibold">Active &amp; Verified</span>
</div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 gap-6 flex-1 gap-x-6 gap-y-6">
<div className="md:col-span-2 group transition-all duration-500 rounded-[2.5rem] p-8 md:p-10 relative backdrop-blur-sm border flex flex-col justify-between bg-white shadow-sm hover:bg-zinc-50 border-zinc-200" style={{}}>

<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-[#006D5B]/10 border border-[#006D5B]/20 backdrop-blur-md mb-6 w-fit">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-[#006D5B]"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-[#006D5B]"></span>
</span>
<span className="text-xs font-medium uppercase tracking-wider font-sans text-[#006D5B]">
                      Verification Underway
                    </span>
</div>
<div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 w-full gap-x-4 gap-y-4">

<div className="p-5 rounded-2xl border transition-all duration-300 group/item relative overflow-hidden bg-white hover:shadow-md border-zinc-200 hover:border-zinc-300" style={{}}>
<h4 className="text-sm font-semibold mb-1 font-manrope text-zinc-900" style={{}}>UK GDPR</h4>
<div className="flex items-center gap-2">
<div className="h-1 flex-1 rounded-full overflow-hidden bg-zinc-100" style={{}}>
<div className="h-full w-3/4 bg-blue-500 rounded-full"></div>
</div>
<span className="text-[10px] font-mono text-blue-600">75%</span>
</div>
</div>

<div className="p-5 rounded-2xl border transition-all duration-300 group/item relative overflow-hidden bg-white hover:shadow-md border-zinc-200 hover:border-zinc-300" style={{}}>
<h4 className="text-sm font-semibold mb-1 font-manrope text-zinc-900" style={{}}>HIPAA</h4>
<span className="text-[10px] font-mono text-indigo-600 bg-indigo-50 px-2 py-0.5 rounded" style={{}}>In Review</span>
</div>
</div>
</div>
</div>
</div>

<div className="lg:col-span-5 relative min-h-[500px]">
<div className="group flex flex-col transition-all duration-500 rounded-[2.5rem] pt-10 pr-10 pb-10 pl-10 relative backdrop-blur-sm justify-between bg-white border shadow-sm h-full border-zinc-200" style={{}}>
<div className="relative z-10">
<div className="flex items-baseline gap-2 mb-4">
<h3 className="text-6xl font-semibold tracking-tighter font-geist text-zinc-900" style={{}}>
                      System Core
                    </h3>
</div>
<p className="text-xl font-medium border-l-2 border-[#006D5B] pl-4 mb-12 text-zinc-500" style={{}}>
                    Healthcare-Native Infrastructure
                  </p>
<blockquote className="text-lg font-sans leading-relaxed mb-8 text-zinc-500" style={{}}>
                    "TERN provides the standardized infrastructure needed to unify
                    our clinical talent flow. It acts as the central intelligence
                    layer."
                  </blockquote>
</div>
<div className="relative z-10 flex items-center justify-between pt-8 border-t border-zinc-100" style={{}}>
<div className="flex items-center gap-4">
<div className="w-12 h-12 rounded-full border overflow-hidden bg-zinc-100 border-zinc-200" style={{}}>
<div className="w-full h-full flex items-center justify-center font-bold bg-zinc-200 text-zinc-400" style={{}}>SV</div>
</div>
<div>
<h4 className="text-sm font-semibold font-manrope text-zinc-900" style={{}}>
                        Sushant V.
                      </h4>
<p className="text-xs font-sans text-zinc-500" style={{}}>
                        Director of Healthcare Systems
                      </p>
</div>
</div>
</div>
</div>
</div>
</div>
</section>
<section className="z-20 w-full max-w-7xl mt-32 mr-auto mb-32 ml-auto pr-6 pl-6 relative">
<div className="grid lg:grid-cols-12 gap-x-16 gap-y-16 items-start">

<div className="lg:col-span-5 pt-4">
<h2 className="text-5xl md:text-6xl font-medium tracking-tighter font-manrope mb-6 leading-[1.1] text-zinc-900" style={{}}>
            Discuss your workforce requirements.
          </h2>
<p className="leading-relaxed text-lg max-w-md text-zinc-500" style={{}}>
            Speak with our team today.
          </p>
</div>

<div className="lg:col-span-7">
<div className="md:p-10 overflow-hidden border rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-xl backdrop-blur-xl bg-white border-zinc-200" style={{}}>

<div className="absolute top-0 right-0 w-64 h-64 bg-[#006D5B]/5 rounded-full blur-3xl -z-10 pointer-events-none -mr-16 -mt-16">
</div>
<form className="z-10 relative space-y-10" id="demo-form" onsubmit="event.preventDefault();">

<div className="grid grid-cols-1 md:grid-cols-2 gap-10">

<div className="group relative">
<input className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-[#006D5B] focus:outline-none transition-colors text-lg border-zinc-300 text-zinc-900" id="name" placeholder="Name" required="" style={{}} type="text"/>
<label className="absolute left-0 -top-5 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#006D5B] uppercase tracking-wider font-medium cursor-text text-zinc-500 peer-placeholder-shown:text-zinc-400" htmlFor="name" style={{}}>
            Name
            <span className="text-[#006D5B]">*</span>
</label>
</div>

<div className="group relative">
<input className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-[#006D5B] focus:outline-none transition-colors text-lg border-zinc-300 text-zinc-900" id="email" placeholder="Email" required="" style={{}} type="email"/>
<label className="absolute left-0 -top-5 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#006D5B] uppercase tracking-wider font-medium cursor-text text-zinc-500 peer-placeholder-shown:text-zinc-400" htmlFor="email" style={{}}>
            Work Email
            <span className="text-[#006D5B]">*</span>
</label>
</div>
</div>

<div className="group relative">
<textarea className="peer w-full bg-transparent border-b py-3 placeholder-transparent focus:border-[#006D5B] focus:outline-none transition-colors text-lg resize-none border-zinc-300 text-zinc-900" id="message" placeholder="Anything we should know?" rows="3" style={{}}></textarea>
<label className="absolute left-0 -top-5 text-xs transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-3 peer-focus:-top-5 peer-focus:text-[10px] peer-focus:text-[#006D5B] uppercase tracking-wider font-medium cursor-text text-zinc-500 peer-placeholder-shown:text-zinc-400" htmlFor="message" style={{}}>
          Anything we should know?
        </label>
</div>

<div className="flex flex-col items-end gap-6 pt-4">
<button className="group flex gap-3 uppercase transition-all duration-300 disabled:opacity-70 disabled:cursor-not-allowed md:w-auto text-xs font-semibold tracking-widest w-full pt-4 pr-10 pb-4 pl-10 relative gap-x-3 gap-y-3 items-center justify-center rounded-sm hover:bg-[#008571] text-white bg-[#006D5B]" id="submit-btn" type="submit">
<span className="" id="btn-text">Book Demo</span>
<svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" id="btn-arrow" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
</div>
</form>
</div>
</div>
</div>
</section>
<footer className="z-20 w-full border-t pt-24 pb-8 relative backdrop-blur-sm bg-gray-50/50 border-zinc-200" style={{}}>
<div className="w-full max-w-7xl mr-auto ml-auto pr-6 pl-6">
<div className="grid lg:grid-cols-12 gap-16 mb-24">

<div className="lg:col-span-5 flex flex-col">
<h3 className="mb-4 flex items-center gap-2">
<div className="w-8 h-8 bg-[#006D5B] rounded-full flex items-center justify-center text-white font-bold">T</div>
<span className="text-xl font-bold tracking-tight text-zinc-900" style={{}}>TERN</span>
</h3>
<p className="text-sm max-w-xs text-zinc-500" style={{}}>
              Clinical AI Workforce Operating System
            </p>
</div>

<div className="lg:col-span-7">
<div className="grid grid-cols-2 md:grid-cols-3 gap-10">
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium font-manrope text-zinc-900" style={{}}>About Us</h4>
<div className="flex flex-col gap-4">
<a className="transition-colors text-sm hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Platform</a>
<a className="transition-colors text-sm hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Team</a>
<a className="transition-colors text-sm hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Security</a>
</div>
</div>
<div className="flex flex-col gap-8">
<h4 className="text-base font-medium font-manrope text-zinc-900" style={{}}>Support</h4>
<div className="flex flex-col gap-4">
<a className="transition-colors text-sm hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Contact Us</a>
<a className="transition-colors text-sm hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Book Demo</a>
</div>
</div>
</div>
</div>
</div>

<div className="pt-8 border-t flex flex-col md:flex-row items-center justify-between gap-6 border-zinc-200" style={{}}>
<p className="text-xs text-zinc-400" style={{}}>Copyright © TERN Group</p>
<div className="flex items-center gap-10">
<a className="text-xs transition-colors font-sans hover:text-[#006D5B] text-zinc-500" href="#" style={{}}>Terms of Service</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
