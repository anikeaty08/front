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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        !(function() {
              if (!window.UnicornStudio) {
                window.UnicornStudio = { isInitialized: false };
                var i = document.createElement("script");
                i.src = "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.0-1/dist/unicornStudio.umd.js";
                i.onload = function() {
                  if (document.readyState === "loading") {
                    document.addEventListener("DOMContentLoaded", function() {
                      UnicornStudio.init();
                      window.UnicornStudio.isInitialized = true;
                    });
                  } else {
                    UnicornStudio.init();
                    window.UnicornStudio.isInitialized = true;
                  }
                };
                (document.head || document.body).appendChild(i);
              } else if (!window.UnicornStudio.isInitialized && window.UnicornStudio.init) {
                UnicornStudio.init();
                window.UnicornStudio.isInitialized = true;
              }
            })();
      
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      


<nav className="z-50 w-full relative" data-section="navigation">
<div className="border-x max-w-7xl mr-auto ml-auto border-white/20 border-dashed">
<div className="pt-6">
<div className="flex md:pl-6 md:pr-6 h-14 pr-6 pl-6 items-center justify-between">
<a className="flex items-center gap-2 group" href="/home">
<div className="flex text-2xl text-white font-geist items-baseline" onclick="window.location.href='/home'" role="button">
<span className="font-black tracking-tight">L</span>
<span className="font-light tracking-[0.1em] ml-0.5">UMEN</span>
</div>
</a>
<div className="hidden md:flex items-center gap-8">
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 font-geist" href="/product">
                Product
              </a>
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 font-geist" href="/security">
                Security
              </a>
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 font-geist" href="/pricing">
                Pricing
              </a>
<a className="hover:text-white transition-colors text-sm font-medium text-gray-400 font-geist" href="/documentation">
                Documentation
              </a><a className="hover:text-white transition-colors text-sm font-medium text-gray-400 font-geist" href="/support">Support</a>
</div>
<div className="flex gap-x-4 gap-y-4 items-center">
<a className="hidden sm:inline-flex hover:bg-white/20 text-[11px] uppercase transition-all font-bold text-white tracking-[0.1em] font-geist bg-white/5 border-white/20 border rounded-none pt-2.5 pr-5 pb-2.5 pl-5" href="/login">
                Log in
              </a>
<a className="hidden sm:inline-flex group uppercase transition-all duration-500 hover:scale-[1.02] active:scale-[0.98] text-[11px] items-center justify-center overflow-hidden font-black text-white tracking-[0.15em] font-geist bg-transparent rounded-none pt-3 pr-7 pb-3 pl-7 relative" href="/startfreetrial">
<span className="transition-shadow duration-500 group-hover:shadow-[0_0_25px_-5px_rgba(34,197,94,0.4)] bg-gradient-to-r from-green-900 via-emerald-500 to-teal-400 rounded-none pt-[1px] pr-[1px] pb-[1px] pl-[1px] absolute top-0 right-0 bottom-0 left-0 shadow-[0_0_15px_-5px_rgba(21,128,61,0.3)]" onclick="window.location.href='/startfreetrial'" role="button">
<span className="block bg-black w-full h-full rounded-none" onclick="window.location.href='/startfreetrial'" role="button"></span>
</span>
<span className="-right-4 -translate-y-1/2 transition-all duration-700 group-hover:bg-emerald-500/30 bg-green-600/10 w-16 h-16 absolute top-1/2 blur-2xl"></span>
<span className="z-10 relative drop-shadow-[0_0_8px_rgba(255,255,255,0.3)] cursor-pointer" onclick="window.location.href='/startfreetrial'" role="button">Start Free Trial</span>
</a>
<button className="md:hidden text-white flex items-center justify-center p-2 hover:bg-white/5 transition-colors">
<iconify-icon height="24" icon="solar:hamburger-menu-linear" width="24"></iconify-icon>
</button>
</div>
</div>
</div>
<div className="w-full border-t border-dashed mt-6 border-white/20"></div>
</div>
</nav>

<main className="flex flex-col border-x md:pt-32 md:pb-32 z-10 text-center w-full max-w-7xl pt-16 pr-6 pb-24 pl-6 relative items-center justify-center mx-auto border-white/20 border-dashed" data-section="hero">
<div className="aura-background-component absolute top-0 left-0 w-full h-full z-0">
<div className="absolute w-full h-full left-0 top-0 z-0" data-us-project="3YA05lqUmo5Ut8ATn6Qy"></div>
</div>

<div className="flex flex-col w-full max-w-4xl relative z-10 items-center">
<span className="absolute -top-20 left-1/2 -translate-x-1/2 w-[500px] h-[300px] bg-white/5 blur-[100px] rounded-full pointer-events-none z-[-1]"></span>
<h1 className="text-5xl md:text-6xl lg:text-[4.5rem] text-white leading-[1.05] mb-6 font-geist font-normal tracking-tight text-center">
          The "Zero-Trust" Shared Password Vault
        </h1>
<p className="max-w-2xl text-xl text-gray-400 leading-relaxed font-light mb-10 font-geist text-center mx-auto">
          A specialized password manager built for development agencies.
          Securely share credentials across teams and clients with absolute
          zero-trust encryption.
        </p>
<button className="group inline-flex uppercase transition-all duration-500 hover:scale-[1.05] active:scale-[0.95] text-sm font-bold text-white tracking-[0.2em] bg-transparent rounded-none px-10 py-4 relative items-center justify-center overflow-hidden">
<span className="transition-shadow duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.8)] bg-gradient-to-r from-green-900 via-emerald-500 to-teal-400 rounded-none p-[1px] absolute inset-0 shadow-[0_0_20px_-5px_rgba(21,128,61,0.5)]">
<span className="block bg-gradient-to-b from-green-950 to-black w-full h-full rounded-none backdrop-blur-xl"></span>
</span>
<span className="-right-4 -translate-y-1/2 transition-all duration-700 group-hover:bg-emerald-500/40 bg-green-600/20 w-24 h-24 absolute top-1/2 blur-3xl"></span>
<span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
            Get Started
          </span>
</button>
</div>
</main>

<section className="flex flex-col border-x w-full max-w-7xl border-white/20 mr-auto ml-auto relative border-dashed">

<div className="md:pt-10 md:pb-10 md:mt-0 z-10 bg-[#050505]/50 w-full border-t mt-12 pt-8 pb-8 relative border-white/20 border-dashed" data-section="trusted-logos-mid">
<div className="flex flex-wrap md:justify-between gap-8 md:gap-16 hover:opacity-100 transition-opacity duration-500 md:px-12 opacity-60 mix-blend-screen max-w-7xl mr-auto ml-auto pr-6 pl-6 grayscale gap-x-12 gap-y-10 justify-center">
<svg className="fill-current w-[90px] h-[22px]" data-icon-replaced="true" height="24" strokeWidth="2" style={{width: '90px', height: '22px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 512 166" width="95" xmlns="http://www.w3.org/2000/svg">
<path className="" d="M72.23 37.647c10.01 0 18.124 8.114 18.124 18.123V128H18.123C8.113 128 0 119.886 0 109.877V89.652c0-10.009 8.114-18.123 18.123-18.123h19.524v28.705a5.18 5.18 0 0 0 5.178 5.178h9.881v-40a5.18 5.18 0 0 0-5.178-5.177H1.294V37.647zm85.886 67.765L158.117 0h37.648v128h-72.23c-10.009 0-18.123-8.114-18.123-18.123V55.77c0-10.009 8.114-18.123 18.123-18.123h19.522v62.587a5.18 5.18 0 0 0 5.178 5.178zm105.412 0V37.647h37.649V147.52c0 10.01-8.114 18.123-18.123 18.123h-70.936v-26.348h51.411V128h-34.583c-10.009 0-18.123-8.114-18.123-18.123v-72.23h37.646v62.587a5.18 5.18 0 0 0 5.178 5.178zm124.937-67.765c10.009 0 18.123 8.114 18.123 18.123v20.225c0 10.01-8.114 18.123-18.123 18.123H368.94V65.414a5.177 5.177 0 0 0-5.178-5.178h-9.88v39.998a5.18 5.18 0 0 0 5.178 5.178h46.233V128h-70.935c-10.009 0-18.123-8.114-18.123-18.123v-72.23zm105.412 0c10.01 0 18.123 8.114 18.123 18.123V128h-37.647V65.413c0-2.848-2.33-5.178-5.178-5.178h-9.881V128h-37.648V37.647z"></path>
</svg><svg className="fill-current w-[90px] h-[22px]" data-icon-replaced="true" data-icon-set="logos" data-logos="calibre" height="22" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '90px', height: '22px'}} viewbox="0 0 512 115" width="90" xmlns="http://www.w3.org/2000/svg"><path d="M11.494 89.878c19.421 12.076 34.204-3.32 34.204-3.32c-5.283 18.876-17.426 22.316-17.426 22.316l2.74 5.475h41.504l2.744-5.475s-12.149-3.44-17.427-22.32c0 0 14.779 15.4 34.2 3.32C111.453 77.804 111.248 30.92 51.763 0C-7.72 30.91-7.927 77.799 11.494 89.878" fill="#3057F4"></path><path d="M133.743 57.906q.001-9.345 2.959-17.161q2.952-7.814 8.06-13.425a35.3 35.3 0 0 1 12.161-8.681c4.702-2.05 9.789-3.074 15.25-3.074q7.26 0 13.173 2.072c3.938 1.382 7.341 3.27 10.21 5.676a29.4 29.4 0 0 1 7.052 8.75a40.3 40.3 0 0 1 3.966 11.284H189.64c-1.432-3.736-3.513-6.769-6.248-9.079q-4.096-3.477-11.22-3.476q-4.966 0-8.869 2.003a19.26 19.26 0 0 0-6.65 5.681a26.2 26.2 0 0 0-4.163 8.613a39.3 39.3 0 0 0-1.413 10.822c0 3.915.471 7.524 1.413 10.817q1.409 4.94 4.163 8.554a20.3 20.3 0 0 0 6.65 5.671q3.898 2.072 8.874 2.072q7.117.001 11.215-3.476q4.101-3.47 6.248-9.212h16.933a40.1 40.1 0 0 1-3.966 11.417a28.9 28.9 0 0 1-7.122 8.75a33.2 33.2 0 0 1-10.209 5.676q-5.845 2.072-13.104 2.072c-5.461 0-10.548-1.024-15.25-3.074a35.3 35.3 0 0 1-12.162-8.681q-5.106-5.612-8.06-13.425q-2.957-7.815-2.958-17.161zm117.038 41.01v-3.201c-.983.974-2.845 1.934-5.576 2.868a27.9 27.9 0 0 1-9.07 1.404a28.5 28.5 0 0 1-8.599-1.272a21 21 0 0 1-7.057-3.737a17.7 17.7 0 0 1-4.766-6.083q-1.75-3.601-1.748-8.279a17.4 17.4 0 0 1 1.748-7.812a17.2 17.2 0 0 1 4.903-6.01c2.104-1.647 4.57-2.942 7.391-3.875a29.1 29.1 0 0 1 9.203-1.404c2.634.006 5.256.366 7.794 1.07q3.897 1.065 5.777 2.402v-4.405q.001-3.876-2.35-6.545c-1.57-1.784-4.008-2.671-7.324-2.671q-3.63.001-5.777 1.463a8.1 8.1 0 0 0-3.092 4.144H216.38a21.3 21.3 0 0 1 2.758-7.478c1.386-2.315 3.18-4.345 5.375-6.079a25.3 25.3 0 0 1 7.593-4.07a28.9 28.9 0 0 1 9.4-1.474q12.093 0 18.68 6.08q6.586 6.077 6.586 16.895v38.07h-15.995zm0-20.569a4.9 4.9 0 0 0-1.477-2.14a12.46 12.46 0 0 0-5.777-2.74a18.6 18.6 0 0 0-7.392.069c-1.21.248-2.37.7-3.43 1.335a7.15 7.15 0 0 0-2.415 2.342a6.06 6.06 0 0 0-.87 3.27q0 2.002.87 3.34c.58.891 1.39 1.646 2.42 2.273a11 11 0 0 0 3.425 1.33c2.435.516 4.948.54 7.392.07a14.5 14.5 0 0 0 3.224-1.002q1.476-.668 2.553-1.601c.718-.627 1.207-1.336 1.477-2.14zm46.225 20.57h-16.663V12.093h16.663zm31.038 0h-16.663v-59.71h16.663zm1.615-76.94q-.001 4.274-2.96 6.88c-1.966 1.738-4.299 2.607-6.984 2.607q-3.898 0-6.856-2.607c-1.967-1.738-2.955-4.03-2.955-6.88c0-2.762.988-5.008 2.955-6.746q2.955-2.607 6.856-2.607c2.685 0 5.018.87 6.985 2.607c1.971 1.738 2.959 3.984 2.959 6.747m29.562 76.94h-16.663V12.093h16.663v32.191q.94-1.199 2.552-2.406a18.6 18.6 0 0 1 3.558-2.067a23 23 0 0 1 4.236-1.404a20.6 20.6 0 0 1 4.702-.536q6.586 0 11.622 2.47a25.9 25.9 0 0 1 8.6 6.747c2.378 2.85 4.166 6.147 5.374 9.884q1.817 5.612 1.816 12.158c.027 4.1-.586 8.178-1.816 12.089a29.3 29.3 0 0 1-5.375 9.948a25.2 25.2 0 0 1-8.599 6.678c-3.357 1.601-7.231 2.406-11.622 2.406q-2.416 0-4.702-.535a23.6 23.6 0 0 1-4.236-1.4a21 21 0 0 1-3.558-2.008c-.96-.65-1.82-1.435-2.552-2.332zm0-20.034q1.474 3.066 4.5 5.008c2.013 1.29 4.323 1.935 6.92 1.935c2.242 0 4.255-.421 6.048-1.267c1.788-.846 3.293-2.004 4.5-3.476c1.208-1.464 2.15-3.225 2.822-5.274a21.3 21.3 0 0 0 1.007-6.678a21.3 21.3 0 0 0-1.007-6.678a16.1 16.1 0 0 0-2.822-5.278a13.4 13.4 0 0 0-10.547-4.876q-3.766 0-6.852 1.934a12 12 0 0 0-4.574 5.014v19.636zm89.626-23.378a12.5 12.5 0 0 0-3.897-1.537a20.8 20.8 0 0 0-4.436-.466q-4.164 0-7.319 2.136q-3.162 2.142-4.103 6.28v36.998h-16.658V39.208h16.663v5.878q1.88-3.206 5.512-5.21a16.1 16.1 0 0 1 7.926-2.004q2.284-.001 3.966.334c1.116.224 1.903.467 2.35.732v16.567zm62.75 23.908q-1.48 9.489-8.333 15.163q-6.848 5.674-18.14 5.676c-4.387 0-8.376-.755-11.957-2.269a26.3 26.3 0 0 1-9.203-6.412a29.8 29.8 0 0 1-5.982-9.82q-2.149-5.674-2.15-12.625q.001-6.806 2.15-12.487a30.6 30.6 0 0 1 5.982-9.88a26.6 26.6 0 0 1 9.203-6.55a28.6 28.6 0 0 1 11.554-2.332c4.482 0 8.398.732 11.76 2.2a24 24 0 0 1 8.466 6.079c2.282 2.58 4.03 5.699 5.237 9.349q1.817 5.475 1.816 12.02v5.077h-40.045q.273 3.342 1.28 6.01c.668 1.785 1.565 3.294 2.686 4.543a10.6 10.6 0 0 0 4.03 2.803q2.353.94 5.172.938q4.171-.002 7.122-1.875c1.971-1.244 3.27-3.11 3.897-5.608zm-26.739-28.185a11.9 11.9 0 0 0-8.064 3.01a12.6 12.6 0 0 0-2.753 3.472a16.4 16.4 0 0 0-1.679 4.876h23.378a17.5 17.5 0 0 0-.805-4.478a9.7 9.7 0 0 0-2.082-3.605a10.1 10.1 0 0 0-3.361-2.406a11.4 11.4 0 0 0-4.634-.869"></path></svg><svg className="fill-current w-[90px] h-[22px]" data-icon-replaced="true" data-icon-set="logos" data-logos="cakephp" height="22" strokeWidth="2" style={{color: 'rgb(255, 255, 255)', width: '90px', height: '22px'}} viewbox="0 0 512 103" width="90" xmlns="http://www.w3.org/2000/svg"><path d="M0 61.531c0 11.32 29.407 20.51 65.687 20.51v20.5c-36.28 0-65.687-9.18-65.687-20.5Zm131.395 0v20.505c0 4.834-5.373 9.268-14.32 12.775L65.682 82.036V61.531l51.391 12.771c8.948-3.503 14.325-7.937 14.321-12.77M65.687 0c36.285 0 65.708 9.197 65.708 20.51v20.52c0 4.817-5.373 9.268-14.317 12.76l-51.39-12.76v20.501C29.406 61.531 0 52.347 0 41.031V20.509C0 9.197 29.407 0 65.687 0m122.556 23.784c10.278 0 16.436 3.433 21.494 8.411l-7.63 8.798c-4.206-3.815-8.49-6.15-13.939-6.15c-9.192 0-15.804 7.63-15.804 16.972v.162c0 9.342 6.458 17.13 15.804 17.13c6.23 0 10.04-2.489 14.321-6.387l7.63 7.705c-5.597 6.001-11.827 9.741-22.337 9.741c-16.046 0-27.957-12.384-27.957-28.04v-.149c0-15.493 11.678-28.193 28.418-28.193m139.055 12.925c13.938 0 20.326 10.826 20.326 22.666v.153c0 1.168-.075 1.87-.154 2.963h-29.045c1.164 5.37 4.904 8.17 10.203 8.17c3.973 0 6.848-1.25 10.119-4.284l6.782 6.001c-3.902 4.83-9.508 7.788-17.06 7.788c-12.538 0-21.813-8.798-21.813-21.569v-.162c0-11.914 8.494-21.726 20.642-21.726m-91.558.311c12.93 0 18.618 6.695 18.618 17.995v24.212h-11.457v-4.513c-2.876 3.191-6.845 5.294-12.613 5.294c-7.859 0-14.325-4.517-14.325-12.77v-.163c0-9.113 6.927-13.32 16.814-13.32c4.21 0 7.248.703 10.211 1.713v-.694c0-4.9-3.038-7.63-8.96-7.63c-4.513 0-7.705.86-11.52 2.257l-2.963-9.031c4.596-2.032 9.114-3.35 16.195-3.35m40.644-14.645V52.68l13.868-15.19h14.168l-15.884 16.425l16.428 25.313H291.42l-10.905-17.051l-4.13 4.36v12.691h-11.828V22.375zm103.56 2.34c13 0 20.866 7.709 20.866 18.855v.15c-.004 12.612-9.816 19.154-22.042 19.154h-9.102v16.353h-11.993V24.715zm41.729 0v21.573h22.117V24.715h11.99v54.512h-11.99V57.334h-22.117v21.893h-11.99V24.715zm69.456 0c13 0 20.871 7.709 20.871 18.855v.15c.004 12.612-9.808 19.154-22.03 19.154h-9.118v16.353h-11.994V24.715zM235.591 60.85c-5.062 0-8.183 2.024-8.183 5.764v.154c0 3.187 2.651 5.057 6.462 5.057c5.527 0 9.272-3.025 9.272-7.318v-2.099c-2.02-.943-4.676-1.558-7.551-1.558m91.71-14.637c-4.903 0-8.103 3.503-9.034 8.873h17.837c-.707-5.299-3.82-8.873-8.802-8.873m51.625-10.668h-9.264v16.673h9.5c5.993 0 9.497-3.595 9.497-8.257v-.167c0-5.37-3.732-8.25-9.733-8.25m111.193 0h-9.267v16.673h9.496c6.001 0 9.504-3.595 9.504-8.257v-.167c0-5.37-3.736-8.25-9.733-8.25" fill="#D33C44" fill-rule="evenodd"></path></svg>
<svg className="fill-current w-[90px] h-[22px] text-white" height="24" viewbox="0 0 512 134" width="95" xmlns="http://www.w3.org/2000/svg">
<path d="m221.02 88.874l-5.524 17.025c-.152.567-.68.952-1.266.921h-13.327c-.805 0-1.033-.46-.922-1.149l23.005-66.373a20.9 20.9 0 0 0 1.155-7.02a.766.766 0 0 1 .689-.804h18.408c.555 0 .805.116.922.688l26.098 73.626c.228.555.117 1.032-.555 1.032h-14.954a1.16 1.16 0 0 1-1.266-.805l-5.864-17.141zm4.138-14.377h18.18l-1.75-5.633c-2.411-7.66-5.621-17.629-7.34-24.047h-.117c-1.838 7.708-5.98 20.363-8.973 29.68m46.932 4.232c-.005-16.448 12.3-30.252 33.356-30.252c.917 0 2.072.116 3.799.227V26.043a.727.727 0 0 1 .587-.797l14.71-.008c.556 0 .695.227.695.688V93.91a65 65 0 0 0 .46 8.402c0 .444-.074.693-.456.89l-.348.142a57.8 57.8 0 0 1-22.662 4.604c-17.025 0-30.14-9.662-30.14-29.22m37.155-16.337a11.9 11.9 0 0 0-4.26-.555a15.35 15.35 0 0 0-16.465 15.007l.018 1.096c0 11.389 6.558 16.337 15.298 16.337a16.2 16.2 0 0 0 5.409-.689zm81.83 14.32l.041 1.206c0 18.063-11.733 30.024-28.32 30.024c-19.673 0-28.414-14.837-28.414-29.68a28.147 28.147 0 0 1 28.642-29.791c18.044 0 27.574 13.211 28.051 28.24m-40.473 1.306c0 10.123 4.715 16.564 12.422 16.564c6.664 0 11.733-5.753 11.733-16.337c0-8.973-3.681-16.447-12.421-16.447c-6.664 0-11.734 5.98-11.734 16.22m50.654-52.78l14.032-.006c.921 0 1.15.117 1.15.922v23.583a37 37 0 0 1 7.706-1.217l1.955-.049a26.326 26.326 0 0 1 27.63 25.998l-.021 1.383c0 21.512-17.025 32.096-34.506 32.096a60.2 60.2 0 0 1-18.063-2.643a1.36 1.36 0 0 1-.689-1.15v-78.11c0-.555.228-.805.806-.805m22.959 36.79l-.987.014a23.4 23.4 0 0 0-6.785.922v31.174c.93.215 1.876.356 2.828.42l1.43.04a15.83 15.83 0 0 0 16.66-17.252a13.516 13.516 0 0 0-13.146-15.317m51.97 20.371c.555 6.558 5.175 11.966 16.448 11.966c4.847.09 9.662-.811 14.148-2.648c.35-.228.694-.117.694.555V103.2c0 .805-.227 1.15-.805 1.383a38.65 38.65 0 0 1-15.79 3.374l-1.812-.043c-21.623 0-29.22-14.837-29.22-29.102c0-15.479 9.296-29.643 26.498-30.342l1.339-.027a23.455 23.455 0 0 1 24.272 24.85a37 37 0 0 1-.556 7.707a.994.994 0 0 1-.921.921q-4.433.42-8.884.47zm14.954-11.156a37.5 37.5 0 0 0 5.753-.227v-.806a9.357 9.357 0 0 0-9.779-9.09a10.9 10.9 0 0 0-11.045 10.123zM75.314 49.137l35.466 84.148H87.535l-10.611-26.798H50.97zM150.599 0v133.269L94.921 0zM55.701 0L0 133.269V0z"></path>
</svg>
<svg className="fill-current w-[100px] h-[24px] text-white" height="28" viewbox="0 0 512 90" width="111" xmlns="http://www.w3.org/2000/svg">
<path d="m33.83 8.897l6.176 18.062l-10.965 31.634a78.3 78.3 0 0 0 13.112 1.02a83 83 0 0 0 9.038-.475l3.768 11.744c-4.066.411-8.5.709-12.75.709a122 122 0 0 1-16.88-1.219l-6.254 18.332H0L29.835 8.897z"></path>
<path className="" d="M481.258 26.959c19.21 0 30.742 8.96 30.742 31.57c0 2.833-.078 5.907-.15 6.311h-44.227c-.078 9.102 7.664 13.076 19.741 13.076c8.132 0 14.613-1.898 18.983-3.188l.708 11.815c-3.62 1.353-11.453 3.322-22.149 3.322c-21.2.029-35.671-7.777-35.671-31.407c0-15.271 6.028-25.457 18.232-29.537v24.791h26.527c.07-11-4.144-15.753-13.26-15.753c-4.25 0-7.388 1.02-9.57 3.195V27.908a50.7 50.7 0 0 1 10.094-.95M201.561 2.309v56.22c0 12.042 2.487 19.415 13.26 19.415s14.089-7.402 14.089-19.415s-3.315-19.422-14.089-19.422c-4.519 0-7.536 1.289-9.57 3.669v-11.95c3.464-2.174 8.14-3.598 14.543-3.598c16.277 0 26.895 9.3 26.895 31.23c0 21.958-10.625 31.167-27.044 31.167c-10.172 0-16.05-3.542-19.366-8.082l-.828 7.132h-15.442V13.99h-7.841V2.31zm131.161 25.11c10.32 0 16.2 3.599 19.437 8.146l.906-7.473h15.371l.021 60.583h-17.56V58.53c0-12.042-2.485-19.422-13.259-19.422s-14.089 7.402-14.089 19.422s3.315 19.387 14.089 19.387c4.526 0 7.537-1.29 9.57-3.662V86.07c-3.464 2.167-8.21 3.541-14.542 3.541c-16.42 0-26.917-9.165-26.917-31.095s10.476-31.096 26.973-31.096M55.306 8.897l29.835 79.778H65.173l-27.2-79.778zm57.318 19.21V76.98h7.083v11.694H95.093V39.801h-7.834V28.106zm57.247-1.084a24.4 24.4 0 0 1 5.015.474l-.227 13.855c-1.417-.142-3.315-.276-4.958-.276c-5.2 0-8.89 1.225-11.454 3.124c-5.669 4.193-5.871 11.983-5.879 16.243v28.232H134.88V39.801h-7.842V28.106h23.283l1.133 9.712c3.167-6.177 9.039-10.795 18.417-10.795m127.003 0a24.4 24.4 0 0 1 5.05.474l-.227 13.855c-1.416-.142-3.314-.276-4.958-.276c-5.199 0-8.89 1.225-11.453 3.124c-5.663 4.193-5.865 11.983-5.872 16.243v28.232h-17.496V39.801h-7.841V28.106h23.282l1.134 9.712c3.166-6.177 9.038-10.795 18.38-10.795M402.59 2.309v86.366h-17.55V13.99h-7.834V2.31zm42.288 25.77l-21.491 28.275l24.19 32.321h-20.57l-23.134-32.009l21.171-28.588zM103.076 0c5.425 0 9.42 3.542 9.42 8.422s-3.995 8.415-9.42 8.415c-5.426 0-9.414-3.528-9.414-8.415h-.021C93.662 3.542 97.65 0 103.076 0"></path>
</svg>
<svg className="fill-current w-[90px] h-[22px] text-white" height="24" viewbox="0 0 512 105" width="95" xmlns="http://www.w3.org/2000/svg">
<path d="M0 52.067c0 26.854 19.673 48.913 44.986 51.995V.071C19.673 3.153 0 25.212 0 52.067m102.124-.002c0-26.992-19.875-49.188-45.456-52.065v104.198h45.389V53.503c.067-.48.067-.959.067-1.438m45.291.068c5.506 0 9.266 2.672 11.28 5.549v-5h8.729V87.55h-8.729v-5.07c-2.014 3.015-5.909 5.686-11.347 5.686c-8.662 0-15.577-7.261-15.577-18.154c0-10.892 6.915-17.88 15.644-17.88m2.216 7.741c-4.633 0-8.997 3.563-8.997 10.14c0 6.576 4.364 10.412 8.997 10.412c4.767 0 9.064-3.63 9.064-10.276c0-6.645-4.297-10.276-9.064-10.276m74.395 8.427c0-5.55-3.021-8.427-7.587-8.427c-4.633 0-7.655 2.878-7.655 8.427v19.25h-8.661V68.3c0-5.55-3.021-8.427-7.587-8.427c-4.7 0-7.722 2.878-7.722 8.427v19.25h-8.661V52.68h8.661v4.247c2.149-2.877 5.775-4.727 10.072-4.727c5.304 0 9.668 2.33 12.018 6.646c2.216-3.974 6.715-6.646 11.75-6.646c8.192 0 14.033 5.276 14.033 14.935v20.483h-8.661zm37.13-16.168c8.795 0 15.644 6.988 15.644 17.88c0 10.893-6.849 18.154-15.644 18.154c-5.372 0-9.199-2.74-11.28-5.549v21.58h-8.662V52.68h8.662v5.07c2.014-3.015 5.975-5.618 11.28-5.618m-2.283 7.741c-4.633 0-8.997 3.631-8.997 10.276s4.364 10.276 8.997 10.276c4.7 0 9.064-3.768 9.064-10.413s-4.364-10.139-9.064-10.139m24.507-18.907h8.661v46.652h-8.661zm16.515 2.397c0-2.877 2.215-5.137 5.306-5.137c3.021 0 5.305 2.26 5.305 5.137c0 2.878-2.284 5.138-5.305 5.138c-3.09 0-5.306-2.26-5.306-5.138m.941 9.317h8.66v34.87h-8.66zm32.162-.548c8.529 0 14.236 4.522 16.114 12.331h-9.333c-1.006-2.945-3.29-4.864-6.847-4.864c-4.835 0-8.059 3.7-8.059 10.55c0 6.782 3.224 10.482 8.059 10.482c3.558 0 5.773-1.645 6.847-4.796h9.333c-1.878 7.467-7.585 12.331-16.114 12.331c-9.87 0-16.92-7.056-16.92-18.017s7.05-18.017 16.92-18.017m36.192 0c5.504 0 9.264 2.672 11.28 5.549v-5h8.729V87.55h-8.73v-5.07c-2.015 3.015-5.909 5.686-11.348 5.686c-8.66 0-15.576-7.261-15.576-18.154c0-10.892 6.916-17.88 15.645-17.88m2.215 7.741c-4.633 0-8.997 3.563-8.997 10.14c0 6.576 4.364 10.412 8.997 10.412c4.766 0 9.065-3.63 9.065-10.276c0-6.645-4.299-10.276-9.065-10.276m27.862.069h-4.028V52.68h4.097v-8.63h8.728v8.632h7.654v7.262h-7.722v16.852c0 2.33.94 3.357 3.626 3.357h4.028v7.467h-5.44c-6.51 0-10.943-2.809-10.943-10.824zm22.025-16.579c0-2.877 2.215-5.137 5.305-5.137c3.018 0 5.302 2.26 5.302 5.137c0 2.878-2.284 5.138-5.302 5.138c-3.09 0-5.305-2.26-5.305-5.138m.94 9.317h8.66v34.87h-8.66zm32.629 35.486c-9.869 0-17.32-7.056-17.32-18.017c0-11.03 7.719-18.017 17.591-18.017c9.869 0 17.591 6.988 17.591 18.017c0 10.961-7.856 18.017-17.862 18.017m0-7.672c4.567 0 8.931-3.426 8.931-10.345c0-6.988-4.23-10.344-8.862-10.344c-4.633 0-8.73 3.356-8.73 10.344c.135 6.92 4.029 10.345 8.661 10.345M503.34 68.3c0-5.618-3.022-8.632-7.589-8.632c-4.698 0-7.72 3.014-7.72 8.632v19.25h-8.663V52.68h8.664v4.316c2.215-2.946 5.906-4.864 10.339-4.864c7.99 0 13.629 5.275 13.629 14.935V87.55h-8.66z"></path>
</svg>
</div>
</div>
<div className="flex flex-col w-full border-white/20" data-section="features-overview">
<div className="md:px-12 bg-[#050505] border-t pt-24 pr-6 pb-24 pl-6 relative border-white/20 border-dashed">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10">
<div className="flex items-center gap-4 group">
<span className="text-sm font-mono text-white/40 tracking-tighter">
                  01
                </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">
                  Security Infrastructure
                </span>
</div>
<h2 className="text-4xl md:text-6xl font-geist font-normal text-white tracking-tight leading-[1.05]">
                Engineered for
                <br/>
<span className="text-white/50">absolute security</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-geist leading-relaxed mb-12 max-w-md">
                Lumen is designed from the ground up to ensure your team's
                credentials remain private, encrypted, and accessible only to
                authorized personnel.
              </p>
<div className="flex items-center gap-8">
<button className="text-sm font-medium text-white hover:text-white/70 transition-colors flex items-center gap-2 group">
                  Get Started
                  <svg className="group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="text-sm font-medium text-white/40 hover:text-white/60 transition-colors">
                  View Documentation
                </button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/20 border-dashed divide-dashed w-full border-white/20 border-t border-b">
<style>
    @keyframes lumen-ambient-drift {
      0%, 100% { transform: translate(0, 0) scale(1); opacity: 0.8; }
      50% { transform: translate(3%, 4%) scale(1.05); opacity: 0.5; }
    }
    @keyframes lumen-grid-shimmer {
      0%, 100% { opacity: 0.3; }
      50% { opacity: 0.6; }
    }
    @keyframes lumen-line-pulse {
      0%, 100% { opacity: 0.3; filter: drop-shadow(0 0 2px currentColor); }
      50% { opacity: 1; filter: drop-shadow(0 0 8px currentColor); }
    }
    @keyframes lumen-badge-glow-green {
      0%, 100% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 0 rgba(34,197,94,0); }
      50% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 15px rgba(34,197,94,0.3); }
    }
    @keyframes lumen-badge-glow-indigo {
      0%, 100% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 0 rgba(99,102,241,0); }
      50% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 15px rgba(99,102,241,0.3); }
    }
    @keyframes lumen-badge-glow-amber {
      0%, 100% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 0 rgba(245,158,11,0); }
      50% { box-shadow: 0 10px 20px rgba(0,0,0,0.6), inset 0 1px 1px rgba(255,255,255,0.15), 0 0 15px rgba(245,158,11,0.3); }
    }
    @keyframes lumen-icon-glow {
      0%, 100% { box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05), 0 0 0 rgba(34,197,94,0); }
      50% { box-shadow: inset 0 2px 4px 0 rgba(0,0,0,0.05), 0 0 8px rgba(34,197,94,0.5); }
    }
    @keyframes lumen-dot-blink-1 {
      0%, 100% { opacity: 1; transform: scale(1); }
      50% { opacity: 0.3; transform: scale(0.8); }
    }
    @keyframes lumen-dot-blink-2 {
      0%, 100% { opacity: 0.3; transform: scale(0.8); }
      50% { opacity: 1; transform: scale(1); }
    }
    @keyframes lumen-node-float {
      0%, 100% { transform: translateY(0); }
      50% { transform: translateY(-4px); }
    }
    @keyframes lumen-node-float-center {
      0%, 100% { transform: translate(-50%, 0); }
      50% { transform: translate(-50%, -4px); }
    }
    @keyframes lumen-audit-pulse {
      0%, 100% { opacity: 0.8; box-shadow: 0 6px 15px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1); border-color: rgba(255,255,255,0.1); }
      15%, 25% { opacity: 1; box-shadow: 0 6px 15px rgba(0,0,0,0.5), inset 0 1px 1px rgba(255,255,255,0.1), 0 0 15px rgba(245,158,11,0.2); border-color: rgba(245,158,11,0.4); }
    }
    @keyframes lumen-data-flicker {
      0%, 91%, 95%, 99% { opacity: 1; color: #9ca3af; }
      93%, 97%, 100% { opacity: 0.5; color: #f59e0b; }
    }
  </style>
<div className="aspect-square overflow-hidden group flex flex-col font-geist bg-[#050505] w-full rounded-none pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0" style={{animation: 'lumen-grid-shimmer 6s ease-in-out infinite'}}></div>
<div className="opacity-50 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-blue-500/10 rounded-full blur-[80px] pointer-events-none" style={{animation: 'lumen-ambient-drift 12s ease-in-out infinite'}}></div>
<div className="relative z-10 mb-6">
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
        Zero-Knowledge Architecture
      </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
        Your data is encrypted locally. We never have access to your
        keys or your passwords.
      </p>
</div>
<div className="flex-1 flex w-full mt-2 relative -translate-x-8 items-center justify-center">
<div className="absolute top-0 bottom-6 left-1/2 -translate-x-1/2 w-[1.5px] bg-gradient-to-b from-blue-500 via-blue-400/50 to-transparent z-10" style={{animation: 'lumen-line-pulse 4s ease-in-out infinite'}}>
</div>
<div className="absolute top-[10%] bottom-[20%] left-1/2 -translate-x-full w-[100px] bg-gradient-to-r from-transparent to-blue-500/20 blur-xl pointer-events-none z-0">
</div>
<div className="absolute left-1/2 -translate-x-full top-0 flex flex-col gap-4 items-end pr-5 z-10 opacity-70">
<div className="px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-b from-[#222] to-[#111] shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] text-xs text-gray-300 font-normal whitespace-nowrap" style={{animation: 'lumen-node-float 5s ease-in-out infinite'}}>
          Raw Passwords
        </div>
<div className="px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-b from-[#222] to-[#111] shadow-[0_4px_10px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] text-xs text-gray-300 font-normal whitespace-nowrap mr-3" style={{animation: 'lumen-node-float 6s ease-in-out infinite 1s'}}>
          Private Keys
        </div>
</div>
<div className="absolute left-1/2 top-[8px] flex flex-col gap-5 items-start pl-5 z-20">
<div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#151515] shadow-[0_6px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] text-xs text-gray-200 font-normal relative whitespace-nowrap" style={{animation: 'lumen-node-float 5.5s ease-in-out infinite 0.5s'}}>
<div className="absolute right-full top-1/2 -translate-y-1/2 w-5 h-[1.5px] bg-gradient-to-r from-transparent to-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
</div>
          Local Encryption
          <div className="w-4 h-4 rounded-full bg-gradient-to-b from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center shadow-inner" style={{animation: 'lumen-icon-glow 3s ease-in-out infinite'}}>
<svg className="text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
<div className="flex items-center gap-3 px-4 py-2 rounded-xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#151515] shadow-[0_6px_12px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.15)] text-xs text-gray-200 font-normal relative ml-4 whitespace-nowrap" style={{animation: 'lumen-node-float 5.2s ease-in-out infinite 1.2s'}}>
<div className="absolute right-full top-1/2 -translate-y-1/2 w-9 h-[1.5px] bg-gradient-to-r from-transparent to-white/20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
</div>
          Encrypted Ciphertext
          <div className="w-4 h-4 rounded-full bg-gradient-to-b from-green-500/20 to-green-600/10 border border-green-500/30 flex items-center justify-center shadow-inner" style={{animation: 'lumen-icon-glow 3s ease-in-out infinite 1s'}}>
<svg className="text-green-500" fill="none" height="10" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="3" viewbox="0 0 24 24" width="10" xmlns="http://www.w3.org/2000/svg">
<path d="M20 6 9 17l-5-5"></path>
</svg>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] whitespace-nowrap" style={{animation: 'lumen-badge-glow-green 4s ease-in-out infinite'}}>
<span className="text-xs font-normal text-gray-300 tracking-wide">Server Access</span>
<span className="text-xs font-semibold text-green-400 tracking-wide shadow-inner px-2 py-0.5 rounded-md bg-black/40 border border-white/5">0%</span>
</div>
</div>
</div>
<div className="relative w-full aspect-square p-8 bg-[#050505] overflow-hidden group font-geist flex flex-col rounded-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50" style={{animation: 'lumen-grid-shimmer 5s ease-in-out infinite 2s'}}></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-indigo-500/10 blur-[80px] pointer-events-none" style={{animation: 'lumen-ambient-drift 14s ease-in-out infinite reverse'}}></div>
<div className="relative z-10 mb-6">
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
        Isolated Workspaces
      </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
        Create distinct environments for each client or project.
        Guarantee credentials never cross-pollinate between external
        teams.
      </p>
</div>
<div className="relative flex-1 w-full flex items-center justify-center mt-2">
<div className="absolute top-0 left-1/2 -translate-x-1/2 z-20 w-12 h-12 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_8px_16px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] flex items-center justify-center" style={{animation: 'lumen-node-float-center 6s ease-in-out infinite'}}>
<svg className="text-indigo-400 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M20 20a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-7.9a2 2 0 0 1-1.69-.9L9.6 3.9A2 2 0 0 0 7.93 3H4a2 2 0 0 0-2 2v13a2 2 0 0 0 2 2Z"></path></svg>
</div>
<div className="absolute top-10 left-1/2 -translate-x-1/2 w-[1.5px] h-8 bg-gradient-to-b from-indigo-500/50 to-white/20 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" style={{animation: 'lumen-line-pulse 2.5s ease-in-out infinite'}}></div>
<div className="absolute top-[72px] left-[20%] right-[20%] h-[1.5px] bg-white/20 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" style={{animation: 'lumen-line-pulse 2.5s ease-in-out infinite 0.2s'}}></div>
<div className="absolute top-[72px] left-[20%] w-[1.5px] h-6 bg-white/20 z-10 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" style={{animation: 'lumen-line-pulse 2.5s ease-in-out infinite 0.4s'}}></div>
<div className="absolute top-[72px] right-[20%] w-[1.5px] h-6 bg-white/20 z-10 shadow-[0_1px_2px_rgba(0,0,-out infinite 0.4s;"></div>
<div className="absolute top-[96px] left-[5%] right-[52.5%] rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col gap-2 p-3 z-20" style={{animation: 'lumen-node-float 7s ease-in-out infinite 1s'}}>
<div className="text-[10px] uppercase tracking-widest text-white/50 border-b border-white/10 pb-1.5 mb-1 font-normal">
          Client Alpha
        </div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-black/50 bg-gradient-to-b from-[#1a1a1a] to-[#050505] shadow-inner text-xs text-gray-300 font-normal">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,0.8)]" style={{animation: 'lumen-dot-blink-1 3s infinite'}}></div>
          DB Creds
        </div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-black/50 bg-gradient-to-b from-[#1a1a1a] to-[#050505] shadow-inner text-xs text-gray-300 font-normal">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500 shadow-[0_0_5px_rgba(99,102,241,0.8)]" style={{animation: 'lumen-dot-blink-2 4s infinite 1s'}}></div>
          API Keys
        </div>
</div>
<div className="absolute top-[96px] right-[5%] left-[52.5%] rounded-2xl border border-white/10 bg-gradient-to-br from-[#2a2a2a] to-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] flex flex-col gap-2 p-3 z-20" style={{animation: 'lumen-node-float 6.5s ease-in-out infinite 2.5s'}}>
<div className="text-[10px] uppercase tracking-widest text-white/50 border-b border-white/10 pb-1.5 mb-1 font-normal">
          Project Beta
        </div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-black/50 bg-gradient-to-b from-[#1a1a1a] to-[#050505] shadow-inner text-xs text-gray-300 font-normal">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{animation: 'lumen-dot-blink-2 3.5s infinite 0.5s'}}></div>
          AWS IAM
        </div>
<div className="flex items-center gap-2 px-2.5 py-1.5 rounded-lg border border-black/50 bg-gradient-to-b from-[#1a1a1a] to-[#050505] shadow-inner text-xs text-gray-300 font-normal">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_5px_rgba(16,185,129,0.8)]" style={{animation: 'lumen-dot-blink-1 4.5s infinite 1.5s'}}></div>
          OAuth
        </div>
</div>
<div className="absolute top-[100px] left-1/2 -translate-x-1/2 w-[1.5px] h-20 bg-red-500/30 z-10 flex items-center justify-center" style={{animation: 'lumen-line-pulse 2s ease-in-out infinite'}}>
<div className="absolute w-6 h-6 bg-red-500/10 blur-md" style={{animation: 'lumen-dot-blink-1 2s ease-in-out infinite'}}></div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-3 px-5 py-2.5 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] whitespace-nowrap" style={{animation: 'lumen-badge-glow-indigo 5s ease-in-out infinite'}}>
<span className="text-xs font-normal text-gray-300 tracking-wide">Cross-Pollination</span>
<span className="text-xs font-semibold text-indigo-400 tracking-wide shadow-inner px-2 py-0.5 rounded-md bg-black/40 border border-white/5">0%</span>
</div>
</div>
</div>
<div className="relative w-full aspect-square p-8 bg-[#050505] overflow-hidden group font-geist flex flex-col rounded-none">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50" style={{animation: 'lumen-grid-shimmer 7s ease-in-out infinite 1s'}}></div>
<div className="absolute -top-20 -right-20 w-64 h-64 bg-amber-500/10 blur-[80px] pointer-events-none" style={{animation: 'lumen-ambient-drift 10s ease-in-out infinite 1s'}}></div>
<div className="relative z-10 mb-6">
<h3 className="text-xl font-normal text-white tracking-tight mb-2">
        Immutable Audit Logs
      </h3>
<p className="text-sm text-gray-400 font-light leading-relaxed">
        Monitor every interaction natively. See exactly who viewed,
        copied, or modified a credential with cryptographic
        timestamping.
      </p>
</div>
<div className="flex-1 flex flex-col w-full mt-2 relative items-center justify-center">
<div className="absolute top-0 bottom-8 left-[18%] w-[1.5px] bg-gradient-to-b from-amber-500/50 via-white/20 to-transparent z-10 shadow-[0_1px_2px_rgba(0,0,0,0.5)]" style={{animation: 'lumen-line-pulse 5s ease-in-out infinite'}}>
</div>
<div className="absolute top-0 left-[18%] right-[5%] flex flex-col gap-3 z-20">
<div className="relative pl-6">
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-amber-300 to-amber-500 border border-[#050505] rounded-full shadow-[0_0_8px_rgba(245,158,11,0.6)] z-30" style={{animation: 'lumen-dot-blink-1 2s infinite'}}>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-amber-500/50 z-20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_6px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-2.5 flex flex-col gap-1.5" style={{animation: 'lumen-audit-pulse 9s infinite 0s'}}>
<div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/50">
<span className="font-mono text-amber-400/80 font-normal">14:41:59 UTC</span>
<span className="font-normal text-white/70">Admin_Root</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-200 font-normal">Credential Viewed</span>
<span className="text-[9px] font-mono text-gray-400 bg-black/50 px-1.5 py-0.5 rounded border border-white/5 shadow-inner" style={{animation: 'lumen-data-flicker 6s infinite 0s'}}>0x7F2...A9B</span>
</div>
</div>
</div>
<div className="relative pl-6 opacity-60">
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-white to-gray-400 border border-[#050505] rounded-full shadow-[0_0_8px_rgba(255,255,255,0.2)] z-30" style={{animation: 'lumen-dot-blink-2 2.5s infinite'}}>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-white/20 z-20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_6px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-2.5 flex flex-col gap-1.5" style={{animation: 'lumen-audit-pulse 9s infinite 3s'}}>
<div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/50">
<span className="font-mono font-normal">14:35:12 UTC</span>
<span className="font-normal text-white/70">API_Worker_2</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-200 font-normal">Token Copied</span>
<span className="text-[9px] font-mono text-gray-400 bg-black/50 px-1.5 py-0.5 rounded border border-white/5 shadow-inner" style={{animation: 'lumen-data-flicker 6s infinite 2s'}}>0x1B8...4C2</span>
</div>
</div>
</div>
<div className="relative pl-6 opacity-30">
<div className="absolute left-0 top-1/2 -translate-y-1/2 -translate-x-1/2 w-2 h-2 bg-gradient-to-b from-gray-300 to-gray-500 border border-[#050505] rounded-full z-30" style={{animation: 'lumen-dot-blink-1 3s infinite'}}>
</div>
<div className="absolute left-0 top-1/2 -translate-y-1/2 w-6 h-[1.5px] bg-white/20 z-20 shadow-[0_1px_2px_rgba(0,0,0,0.5)]">
</div>
<div className="rounded-xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_6px_15px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.1)] p-2.5 flex flex-col gap-1.5" style={{animation: 'lumen-audit-pulse 9s infinite 6s'}}>
<div className="flex items-center justify-between text-[10px] uppercase tracking-wider text-white/40">
<span className="font-mono font-normal">14:32:01 UTC</span>
<span className="font-normal text-white/70">System</span>
</div>
<div className="flex items-center justify-between">
<span className="text-xs text-gray-300 font-normal">Policy Modified</span>
<span className="text-[9px] font-mono text-gray-500 bg-black/50 px-1.5 py-0.5 rounded border border-white/5 shadow-inner" style={{animation: 'lumen-data-flicker 6s infinite 4s'}}>0x9E4...1D7</span>
</div>
</div>
</div>
</div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 z-30 flex items-center gap-2 px-5 py-2.5 rounded-2xl border border-white/10 bg-gradient-to-b from-[#2a2a2a] to-[#111] shadow-[0_10px_20px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.15)] whitespace-nowrap" style={{animation: 'lumen-badge-glow-amber 4.5s ease-in-out infinite'}}>
<svg className="text-amber-500 drop-shadow-[0_2px_4px_rgba(0,0,0,0.5)]" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect>
<path d="M7 11V7a5 5 0 0 1 10 0v4"></path>
</svg>
<span className="text-xs font-normal text-gray-300 tracking-wide">Cryptographic Ledger</span>
</div>
</div>
</div>
</div>
</div>


<div className="grid grid-cols-1 lg:grid-cols-2 w-full border-white/20 border-t border-dashed" data-section="cli-integration">
<div className="md:p-12 lg:p-16 xl:p-20 lg:border-b-0 lg:border-r flex flex-col border-white/20 border-b pt-8 pr-8 pb-8 pl-8 relative justify-center border-dashed">
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-white/10 to-transparent opacity-50"></div>
<a className="inline-flex w-fit items-center gap-1.5 px-3 py-1.5 rounded-none bg-white/[0.02] border border-white/20 text-xs font-medium text-gray-300 mb-8 font-geist hover:bg-white/[0.05] transition-colors" href="#">
<iconify-icon height="16" icon="solar:programming-linear" width="16"></iconify-icon>
            CLI &amp; API Integration
          </a>
<h3 className="text-3xl md:text-4xl font-normal text-white font-geist tracking-tight mb-5 leading-tight">
            Inject secrets directly
            <br className="hidden xl:block"/>
            into your workflow.
          </h3>
<p className="text-base text-gray-400 font-geist leading-relaxed max-w-md">
            Stop passing .env files through insecure channels. Use the Lumen CLI
            to dynamically pull environments locally or seamlessly into CI/CD
            pipelines with a single command.
          </p>
</div>
<div className="md:p-12 lg:p-16 xl:p-20 flex flex-grow overflow-hidden group font-sans bg-[#0c0c0c] relative items-center justify-center selection:bg-emerald-500/30">
<div className="bg-gradient-to-br from-green-400 to-green-800 absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-0 opacity-10 absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] mix-blend-overlay pointer-events-none"></div>
<div className="z-10 transition-all duration-1000 ease-[cubic-bezier(0.23,1,0.32,1)] group-hover:scale-[1.01] group-hover:-translate-y-2 w-full max-w-lg relative">
<style>
      @keyframes termFade { 0%, 92% { opacity: 1; } 96%, 100% { opacity: 0; } }
      @keyframes tCmd1 { 0%, 8% { max-width: 0; } 21%, 100% { max-width: 400px; } }
      @keyframes lWrap { 0%, 24.9% { opacity: 0; } 25%, 100% { opacity: 1; } }
      @keyframes l2 { 0%, 24.9% { opacity: 0; transform: translateY(4px); } 25%, 100% { opacity: 1; transform: translateY(0); } }
      @keyframes l3 { 0%, 27.9% { opacity: 0; transform: translateY(4px); } 28%, 100% { opacity: 1; transform: translateY(0); } }
      @keyframes l4 { 0%, 30.9% { opacity: 0; transform: translateY(4px); } 31%, 100% { opacity: 1; transform: translateY(0); } }
      @keyframes l5 { 0%, 45.9% { opacity: 0; } 46%, 100% { opacity: 1; } }
      @keyframes tCmd2 { 0%, 54% { max-width: 0; } 62%, 100% { max-width: 200px; } }
      @keyframes l6 { 0%, 65.9% { opacity: 0; transform: translateY(4px); } 66%, 100% { opacity: 1; transform: translateY(0); } }
      @keyframes l7 { 0%, 70.9% { opacity: 0; } 71%, 100% { opacity: 1; } }
      @keyframes c1 { 0%, 24.9% { opacity: 1; width: 10px; } 25%, 100% { opacity: 0; width: 0; margin: 0; } }
      @keyframes c2 { 0%, 45.9% { opacity: 0; width: 0; margin: 0; } 46%, 65.9% { opacity: 1; width: 10px; margin-left: 0.25rem; } 66%, 100% { opacity: 0; width: 0; margin: 0; } }
      @keyframes c3 { 0%, 70.9% { opacity: 0; width: 0; margin: 0; } 71%, 100% { opacity: 1; width: 10px; margin-left: 0.25rem; } }
      @keyframes tBlink { 0%, 49% { opacity: 1; } 50%, 100% { opacity: 0; } }
    </style>
<div className="relative rounded-2xl p-[1.5px] bg-gradient-to-br from-[#444] via-[#222] to-[#0a0a0a] shadow-[0_50px_100px_-20px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.15)]">
<div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] opacity-40"></div>
<div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-black shadow-[inset_0_1px_1px_rgba(255,255,255,0.1)] opacity-40"></div>
<div className="bg-[#0d0d0d] border-black/50 border rounded-[14px] pt-3 pr-3 pb-3 pl-3 shadow-[inset_0_4px_30px_rgba(0,0,0,0.8)]">
<div className="flex items-center mb-3 px-2 gap-3">
<div className="relative group/tab">
<div className="absolute -inset-1 bg-emerald-500/10 blur-md opacity-0 group-hover/tab:opacity-100 transition-opacity"></div>
<div className="relative px-4 py-1.5 rounded-md bg-gradient-to-b from-[#1a1a1a] to-[#0a0a0a] border-t border-x border-white/10 shadow-[0_-2px_10px_rgba(0,0,0,0.5)] flex items-center gap-3">
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_10px_#10b981,inset_0_1px_1px_white/40]"></div>
<span className="text-[10px] uppercase font-black tracking-[0.2em] text-emerald-500/90">Console.V3</span>
</div>
</div>
<div className="flex-1 h-px bg-gradient-to-r from-white/5 to-transparent"></div>
<div className="flex gap-2">
<div className="w-1.5 h-1.5 rounded-full bg-white/5 shadow-inner"></div>
<div className="w-1.5 h-1.5 rounded-full bg-white/5 shadow-inner"></div>
</div>
</div>
<div className="bg-[#050505] rounded-xl relative overflow-hidden border-2 border-black shadow-[0_0_0_1px_rgba(255,255,255,0.02),inset_0_0_60px_black]">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.01] to-white/[0.04] pointer-events-none z-20"></div>
<div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_0%,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="flex items-center border-b border-white/5 bg-white/[0.02] text-[9px] font-mono py-2.5 px-5">
<span className="text-white/20 tracking-tighter">NODE_ID:</span>
<span className="text-white/50 ml-2 tracking-widest uppercase">lumen-vault-01</span>
<div className="flex-1 text-right text-emerald-500/40 font-bold">127.0.0.1:8080</div>
</div>
<div className="p-8 font-mono text-[12px] text-gray-400 leading-relaxed flex flex-col gap-5" style={{animation: 'termFade 12s infinite'}}>
<div className="flex gap-4 items-start group/line">
<span className="text-emerald-500/40 font-black select-none transition-colors group-hover/line:text-emerald-500">❯</span>
<div className="flex-1 flex items-center h-5">
<div className="overflow-hidden whitespace-nowrap" style={{animation: 'tCmd1 12s linear infinite'}}>
<span className="text-gray-100 font-medium">lumen env pull</span>
<span className="text-emerald-400 bg-emerald-500/10 px-1.5 py-0.5 rounded ml-2 tracking-tight">--stage=production</span>
</div>
<div className="ml-1" style={{animation: 'c1 12s infinite', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
<div className="w-2.5 h-5 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-sm" style={{animation: 'tBlink 1s step-end infinite'}}></div>
</div>
</div>
</div>
<div className="pl-6 flex flex-col gap-2.5 border-l border-white/10 ml-1.5 py-2" style={{animation: 'lWrap 12s infinite'}}>
<div className="flex items-center gap-3" style={{animation: 'l2 12s ease-out infinite'}}>
<div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
<span className="text-[11px] text-gray-400">Auth Status: <span className="text-white/80 font-semibold tracking-tight">team_alpha_verified</span></span>
</div>
<div className="flex items-center gap-3" style={{animation: 'l3 12s ease-out infinite'}}>
<div className="w-1 h-1 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981]"></div>
<span className="text-[11px] text-gray-400">Vault: <span className="text-white/80 font-semibold underline decoration-emerald-500/30 underline-offset-4">14 encrypted variables injected</span></span>
</div>
<div className="flex items-center gap-3 text-blue-400/80 group/loader" style={{animation: 'l4 12s ease-out infinite'}}>
<iconify-icon className="animate-spin text-xs" icon="lucide:loader-2"></iconify-icon>
<span className="text-[11px] italic font-medium tracking-tight">Syncing hardware enclave...</span>
</div>
</div>
<div className="flex gap-4 items-start" style={{animation: 'l5 12s ease-out infinite'}}>
<span className="text-emerald-500/40 font-black select-none">❯</span>
<div className="flex-1 flex items-center h-5">
<div className="overflow-hidden whitespace-nowrap" style={{animation: 'tCmd2 12s linear infinite'}}>
<span className="text-gray-100 font-medium tracking-tight">npm run dev</span>
</div>
<div style={{animation: 'c2 12s infinite', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
<div className="w-2.5 h-5 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-sm" style={{animation: 'tBlink 1s step-end infinite'}}></div>
</div>
</div>
</div>
<div className="mt-1 flex items-center gap-3 text-[10px] tracking-widest uppercase" style={{animation: 'l6 12s ease-out infinite'}}>
<div className="px-2 py-0.5 bg-emerald-500/20 text-emerald-400 border border-emerald-500/30 rounded-sm font-black shadow-[0_0_15px_rgba(16,185,129,0.5)] animate-pulse">Ready</div>
<span className="text-white/20">Listening on port 3000</span>
</div>
<div className="flex gap-4 items-center mt-2" style={{animation: 'l7 12s ease-out infinite'}}>
<span className="text-emerald-500 font-black select-none">❯</span>
<div style={{animation: 'c3 12s infinite', overflow: 'hidden', display: 'flex', alignItems: 'center'}}>
<div className="w-2.5 h-5 bg-emerald-500 shadow-[0_0_15px_rgba(16,185,129,0.8)] rounded-sm" style={{animation: 'tBlink 1s step-end infinite'}}></div>
</div>
</div>
</div>
<div className="absolute inset-0 pointer-events-none opacity-[0.02] z-30" style={{background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px'}}></div>
</div>
</div>
</div>
<div className="absolute -bottom-10 left-1/2 -translate-x-1/2 w-3/4 h-20 bg-emerald-500/5 blur-[100px] pointer-events-none"></div>
</div>
</div>
</div>

<div className="overflow-hidden border-dashed bg-[#050505] border-white/20 border-t mt-0 pt-8 pb-8 relative" data-section="marquee-top">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>

<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>
</div>
</div>
</div><div className="flex flex-col border-t relative border-white/20 border-dashed" data-section="workflow-process">
<div className="md:px-12 border-dashed bg-[#050505] border-white/20 border-t pt-24 pr-6 pb-24 pl-6 relative">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10">
<div className="flex gap-4 group gap-x-4 gap-y-4 items-center">
<span className="text-sm text-white/40 tracking-tighter font-mono">
                  02
                </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">Process</span>
</div>
<h2 className="text-4xl md:text-6xl font-geist font-normal text-white tracking-tight leading-[1.05]">
                Our vision for
                <br/>
<span className="text-white/50">seamless workflows</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-geist leading-relaxed mb-12 max-w-md">
                We believe transparency is the foundation of trust. Explore how
                our proprietary engine automates credential management while
                keeping your data entirely under your control.
              </p>
<div className="flex items-center gap-8">
<button className="text-sm font-medium text-white hover:text-white/70 transition-colors flex items-center gap-2 group">
                  See how it works
                  <svg className="group-hover:translate-y-1 transition-transform rotate-90" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg">
<path d="M5 12h14"></path>
<path d="m12 5 7 7-7 7"></path>
</svg>
</button>
<button className="text-sm font-medium text-white/40 hover:text-white/60 transition-colors">
                  Meet the team
                </button>
</div>
</div>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-white/10 border-dashed divide-dashed bg-[#050505] w-full border-white/20 border-t border-b relative">
<div className="md:p-12 flex flex-col group overflow-hidden text-center rounded-none p-10 relative items-center hover:bg-white/[0.01] transition-colors duration-500 h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40 z-0"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-blue-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-blue-500/20 z-0"></div>
<div className="font-mono text-[10px] text-blue-400 uppercase tracking-[0.2em] border border-blue-500/20 bg-blue-500/[0.02] px-3 py-1.5 mb-8 z-10 backdrop-blur-sm">
      // Step_01
    </div>
<div className="h-44 w-full relative flex items-center justify-center mb-6 z-10 perspective-1000 scale-95">
<div className="absolute w-36 h-28 bg-gradient-to-br from-[#2a2a2a] via-[#1a1a1a] to-[#0f0f0f] border border-black rounded-lg shadow-[10px_15px_30px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] -rotate-6 translate-x-4 group-hover:-rotate-12 transition-all duration-500 flex flex-col p-3 overflow-hidden">
<div className="w-1/2 h-1.5 bg-black/40 rounded-sm mb-2 shadow-inner"></div>
<div className="w-full h-1 bg-black/30 rounded-sm mb-1"></div>
<div className="w-3/4 h-1 bg-black/30 rounded-sm"></div>
</div>
<div className="absolute w-40 h-32 bg-gradient-to-b from-[#333] via-[#222] to-[#0a0a0a] border border-black rounded-xl shadow-[0_20px_40px_rgba(0,0,0,0.9),inset_0_1px_0_rgba(255,255,255,0.1)] rotate-3 -translate-x-4 group-hover:rotate-6 transition-all duration-500 p-1 flex flex-col">
<div className="flex-1 bg-[#050505] rounded-lg shadow-[inset_0_2px_10px_black] border border-black/50 p-3 flex flex-col gap-3 relative overflow-hidden">
<div className="flex items-center gap-2 border-b border-white/5 pb-2">
<div className="w-5 h-5 rounded bg-gradient-to-b from-[#111] to-black border border-white/5 shadow-inner flex items-center justify-center">
<iconify-icon className="text-blue-500 text-[10px] drop-shadow-[0_0_5px_#3b82f6]" icon="lucide:user"></iconify-icon>
</div>
<div className="h-1 w-12 bg-white/10 rounded-full"></div>
</div>
<div className="flex items-center justify-between px-1">
<div className="h-1 w-8 bg-blue-900/40 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981,inset_0_1px_1px_white]"></div>
</div>
<div className="flex items-center justify-between px-1">
<div className="h-1 w-10 bg-white/5 rounded-full"></div>
<div className="w-2 h-2 rounded-full bg-red-600 shadow-[0_0_8px_#dc2626,inset_0_1px_1px_white]"></div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
</div>
</div>
<div className="absolute -bottom-2 right-4 bg-[#441111] border-b-2 border-black/60 px-3 py-1 text-[9px] font-black text-white uppercase tracking-widest shadow-[4px_4px_0_black,inset_0_1px_rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-4 transition-all duration-500 z-30 italic">
        Strict-RBAC
      </div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-3">Create Workspaces</h3>
<p className="text-sm text-gray-400 font-geist leading-relaxed">
        Define clients, projects, and environments. Assign RBAC roles strictly to those who need access.
      </p>
</div>
</div>
<div className="md:p-12 flex flex-col group overflow-hidden text-center rounded-none p-10 relative items-center hover:bg-white/[0.01] transition-colors duration-500 h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40 z-0"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-indigo-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-indigo-500/20 z-0"></div>
<div className="font-mono text-[10px] text-indigo-400 uppercase tracking-[0.2em] border border-indigo-500/20 bg-indigo-500/[0.02] px-3 py-1.5 mb-8 z-10 backdrop-blur-sm">
      // Step_02
    </div>
<div className="flex z-10 w-full h-48 mb-6 relative scale-95 items-center justify-center perspective-[1000px]">
<div className="absolute w-[85%] h-1 bg-black rounded-full z-0 overflow-hidden border border-white/5 shadow-[inset_0_1px_2px_black]">
<div className="absolute inset-0 w-20 bg-gradient-to-r from-transparent via-indigo-500/40 to-transparent animate-[move_3s_linear_infinite]"></div>
</div>
<div className="absolute w-full flex justify-between px-8 z-10">
<div className="relative group/port">
<div className="w-12 h-12 bg-gradient-to-b from-[#222] to-[#0a0a0a] border border-black rounded-lg shadow-[5px_5px_15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center transition-all group-hover/port:shadow-indigo-500/10">
<iconify-icon className="text-gray-600 text-[14px] group-hover:text-indigo-400 transition-colors" icon="lucide:database"></iconify-icon>
</div>
</div>
<div className="relative group/port">
<div className="w-12 h-12 bg-gradient-to-b from-[#222] to-[#0a0a0a] border border-black rounded-lg shadow-[-5px_5px_15px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.1)] flex items-center justify-center transition-all group-hover/port:shadow-indigo-500/10">
<iconify-icon className="text-gray-600 text-[14px] group-hover:text-indigo-400 transition-colors" icon="lucide:cloud"></iconify-icon>
</div>
</div>
</div>
<div className="relative w-24 h-24 z-20 group/vault animate-[float_4s_ease-in-out_infinite]">
<div className="absolute inset-0 bg-gradient-to-br from-[#444] via-[#222] to-[#050505] border border-black rounded-[1.75rem] shadow-[0_30px_60px_rgba(0,0,0,0.9),inset_0_1px_2px_rgba(255,255,255,0.2)] transition-all duration-500 group-hover/vault:scale-105 group-hover/vault:shadow-[0_40px_80px_rgba(0,0,0,1)]">
<div className="absolute inset-1.5 bg-[#050505] rounded-[1.4rem] shadow-[inset_0_4px_12px_black] border border-white/5 flex items-center justify-center overflow-hidden transition-all duration-500 group-hover/vault:border-indigo-500/30">
<div className="absolute inset-0 bg-indigo-500/0 group-hover/vault:bg-indigo-500/[0.03] transition-colors duration-500"></div>
<div className="absolute top-0 left-0 w-full h-[200%] bg-gradient-to-b from-transparent via-white/[0.08] to-transparent -translate-y-full group-hover/vault:translate-y-full transition-transform duration-700 ease-in-out"></div>
<iconify-icon className="text-indigo-400 text-2xl drop-shadow-[0_0_15px_rgba(99,102,241,0.6)] transition-all duration-500 group-hover/vault:scale-110" icon="lucide:lock"></iconify-icon>
</div>
<div className="absolute -top-1 -right-1 w-3 h-3 rounded-full bg-indigo-500 shadow-[0_0_12px_#6366f1] border-2 border-black"></div>
</div>
</div>
<div className="absolute -top-8 left-1/2 -translate-x-1/2 opacity-0 group-hover/vault:opacity-100 transition-all duration-500 group-hover/vault:-translate-y-2">
<span className="bg-black border border-indigo-500/40 px-3 py-1 text-[8px] font-black text-indigo-300 uppercase tracking-widest whitespace-nowrap shadow-2xl">
      E2E_Core_Locked
    </span>
</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-3">Sync Environments</h3>
<p className="text-sm text-gray-400 font-geist leading-relaxed">
        Push local variables to your cloud vaults, instantly encrypting them with individual public keys.
      </p>
</div>
</div>
<div className="md:p-12 flex flex-col group overflow-hidden text-center rounded-none p-10 relative items-center hover:bg-white/[0.01] transition-colors duration-500 h-full">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40 z-0"></div>
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-48 h-48 bg-emerald-500/10 blur-[80px] pointer-events-none transition-all duration-700 group-hover:bg-emerald-500/20 z-0"></div>
<div className="font-mono text-[10px] text-emerald-400 uppercase tracking-[0.2em] border border-emerald-500/20 bg-emerald-500/[0.02] px-3 py-1.5 mb-8 z-10 backdrop-blur-sm">
      // Step_03
    </div>
<div className="h-44 w-full relative flex items-center justify-center mb-6 z-10 scale-95">
<div className="w-56 h-36 bg-gradient-to-b from-[#333] via-[#222] to-[#0a0a0a] border border-black rounded-xl shadow-[0_30px_60px_-10px_rgba(0,0,0,1),inset_0_1px_1px_rgba(255,255,255,0.1)] p-1.5 flex flex-col transition-all group-hover:-translate-y-2">
<div className="flex-1 bg-[#050505] rounded-lg shadow-[inset_0_4px_15px_black] border border-black/50 overflow-hidden flex flex-col relative">
<div className="absolute inset-0 opacity-[0.03] pointer-events-none z-20" style={{backgroundImage: 'linear-gradient(0deg, transparent 50%, #000 50%)', backgroundSize: '100% 4px'}}></div>
<div className="h-6 border-b border-white/5 bg-white/[0.03] flex items-center px-3 justify-between">
<div className="flex gap-1.5">
<div className="w-1.5 h-1.5 rounded-full bg-emerald-500 shadow-[0_0_8px_#10b981,inset_0_1px_1px_white]"></div>
<div className="w-1.5 h-1.5 rounded-full bg-emerald-900 shadow-inner"></div>
</div>
<span className="text-[7px] font-black text-white/20 uppercase">Node_Active</span>
</div>
<div className="flex-1 p-3 flex flex-col gap-2 text-[10px] font-mono text-left">
<div className="text-gray-600">❯ lumen deploy --env prod</div>
<div className="text-emerald-400 opacity-0 group-hover:opacity-100 transition-all duration-500 transform group-hover:translate-x-1">&gt; Success! Build ready.</div>
</div>
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-transparent pointer-events-none"></div>
</div>
</div>
<div className="absolute -bottom-4 right-4 bg-[#064e3b] border-b-2 border-black/60 px-3 py-1 text-[10px] font-black text-emerald-100 uppercase tracking-widest shadow-[4px_4px_0_black,inset_0_1px_rgba(255,255,255,0.2)] opacity-0 group-hover:opacity-100 group-hover:-translate-y-6 transition-all z-30 italic">Zero-Plaintext</div>
</div>
<div className="relative z-10 mt-auto">
<h3 className="text-xl font-medium text-white font-geist tracking-tight mb-3">Deploy Anywhere</h3>
<p className="text-sm text-gray-400 font-geist leading-relaxed">
        Pull secrets seamlessly into Vercel, AWS, or Docker builds at runtime without exposing plain text.
      </p>
</div>
</div>
</div>
</div><div className="overflow-hidden border-dashed bg-[#050505] border-white/20 border-t mt-0 pt-8 pb-8 relative" data-section="marquee-top">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>

<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-2 overflow-hidden border-dashed bg-[#050505] w-full border-white/20 border-t relative" data-section="vision-mission">
<div className="flex flex-col md:p-12 lg:p-20 lg:border-b-0 lg:border-r min-h-[600px] z-20 border-dashed border-white/20 border-b pt-8 pr-8 pb-8 pl-8 relative justify-between">
<div className="mb-12">
<div className="flex items-center gap-4 group mb-8">
<span className="text-sm text-white/40 tracking-tighter font-mono">03</span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] font-medium tracking-[0.2em] uppercase text-green-400">Vision &amp; Mission</span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light text-white tracking-tight mb-6 leading-[1.1] uppercase">
        Security that <br/> powers speed
      </h2>
<p className="text-base text-gray-400 font-geist leading-relaxed max-w-md font-light">
        We are building the infrastructure for the next generation of secure development. No black boxes, just pure
        cryptographic proof designed for teams.
      </p>
</div>
<div className="flex flex-col w-full">
<div className="group py-6 border-t border-white/20 border-dashed flex items-center justify-between cursor-pointer">
<span className="text-lg text-white font-geist font-medium tracking-tight">Our Core Mission</span>
<iconify-icon className="text-white transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
<div className="group py-6 border-t border-white/20 border-dashed flex items-center justify-between cursor-pointer hover:bg-white/[0.02]">
<span className="text-lg text-gray-500 group-hover:text-white font-geist font-medium tracking-tight">Open Source Protocol</span>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
<div className="group py-6 border-t border-b border-white/20 border-dashed flex items-center justify-between cursor-pointer hover:bg-white/[0.02]">
<span className="text-lg text-gray-500 group-hover:text-white font-geist font-medium tracking-tight">Global Compliance</span>
<iconify-icon className="text-gray-600 group-hover:text-white transition-colors" height="20" icon="lucide:chevron-right" width="20"></iconify-icon>
</div>
</div>
</div>
<div className="flex flex-col h-full min-h-[500px] relative z-10 bg-[#0a0a0a]">
<div className="flex flex-grow overflow-hidden group selection:bg-blue-500/30 md:p-12 lg:p-16 xl:p-20 font-sans bg-gradient-to-br from-green-400 to-green-800 pt-12 pr-12 pb-12 pl-12 relative items-center justify-center">
<style>
    @keyframes scanline-flicker {
      0%, 100% { opacity: 0.02; }
      50% { opacity: 0.06; }
    }
    @keyframes progress-loop {
      0% { width: 15%; }
      50% { width: 95%; }
      100% { width: 15%; }
    }
    @keyframes glow-pulse {
      0%, 100% { opacity: 0.5; transform: scale(0.9); }
      50% { opacity: 1; transform: scale(1.1); }
    }
  </style>
<div className="absolute top-0 right-0 bottom-0 left-0"></div>
<div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'url(\'https://grainy-gradients.vercel.app/noise.svg\')', filter: 'contrast(150%) brightness(1000%)'}}></div>
<div className="relative w-full max-w-lg z-10 transition-transform duration-1000 ease-in-out group-hover:scale-[1.01]">
<div className="w-full rounded-2xl p-[1.5px] bg-gradient-to-br from-[#444] via-[#222] to-[#000] shadow-[0_60px_100px_-30px_black,inset_0_1px_2px_rgba(255,255,255,0.2)] relative overflow-hidden">
<div className="absolute bottom-3 right-3 w-3 h-3 rounded-full bg-[#111] shadow-[0_1px_0_rgba(255,255,255,0.1),inset_0_2px_4px_black] flex items-center justify-center">
<div className="w-full h-[1px] bg-white/10 rotate-45"></div>
</div>
<div className="rounded-[14px] bg-[#0c0c0c] p-6 shadow-[inset_0_4px_40px_rgba(0,0,0,0.8)]">
<div className="flex items-center mb-6 px-1 justify-between">
<div className="flex gap-3 items-center">
<div className="px-3 py-1.5 bg-black border border-white/10 rounded-md shadow-[0_4px_10px_black] flex items-center gap-2.5">
<div className="relative w-2 h-2">
<div className="absolute inset-0 rounded-full bg-emerald-500 animate-pulse"></div>
<div className="absolute inset-0 rounded-full bg-emerald-400 blur-[4px]"></div>
</div>
<span className="text-[9px] font-bold text-gray-400 tracking-[0.25em] uppercase">Audit.Node_Stable</span>
</div>
</div>
<div className="flex items-center gap-4">
<span className="text-[8px] text-gray-700 font-black uppercase tracking-[0.3em]">Zero-Trust Auth</span>
<div className="w-10 h-5 bg-[#050505] rounded-full border border-white/5 p-1 relative shadow-inner">
<div className="absolute right-1 top-1 bottom-1 w-3 h-3 bg-gradient-to-t from-emerald-600 to-emerald-400 rounded-full shadow-[0_0_10px_rgba(16,185,129,0.5)] animate-pulse"></div>
</div>
</div>
</div>
<div className="bg-[#020202] rounded-xl relative overflow-hidden border-[3px] border-black shadow-[0_0_0_1px_rgba(255,255,255,0.02),inset_0_0_80px_black]">
<div className="absolute inset-0 bg-gradient-to-tr from-transparent via-white/[0.02] to-white/[0.05] pointer-events-none z-20"></div>
<div className="absolute inset-0 z-30 pointer-events-none" style={{background: 'repeating-linear-gradient(0deg, #fff, #fff 1px, transparent 1px, transparent 2px)', backgroundSize: '100% 3px', animation: 'scanline-flicker 4s infinite'}}></div>
<div className="flex items-center border-b border-white/5 bg-white/[0.03] text-[9px] font-mono py-2.5 px-4">
<div className="flex items-center gap-2 flex-1">
<span className="text-emerald-500/80 animate-pulse">●</span>
<span className="text-emerald-100/40 tracking-widest uppercase">Live_Node_Feed</span>
</div>
<div className="text-white/20 tracking-[0.1em]">HW_ID: <span className="text-white/40">0x81...9921</span></div>
</div>
<div className="p-8 font-mono text-xs text-gray-500 flex flex-col gap-5 relative z-40">
<div className="flex justify-between items-center bg-emerald-500/[0.02] p-4 border border-emerald-500/10 rounded-lg group/item transition-colors hover:bg-emerald-500/[0.05]">
<span className="text-white/30 tracking-tighter">RSA_4096_ENCRYPTION</span>
<span className="text-emerald-500 font-black text-[10px] bg-emerald-500/10 px-2 py-0.5 rounded shadow-[0_0_10px_rgba(16,185,129,0.2)] animate-pulse">ACTIVE</span>
</div>
<div className="space-y-3 border-l-2 border-emerald-500/20 pl-6 py-1">
<div className="flex items-center justify-between">
<span className="text-[10px] text-gray-600 uppercase">Entropy Level</span>
<span className="text-white/80 text-[10px]">98.42%</span>
</div>
<div className="flex items-center justify-between">
<span className="text-[10px] text-gray-600 uppercase">Proof Method</span>
<span className="text-emerald-400 text-[10px] font-bold">ZK_SNARK_VERIFIED</span>
</div>
</div>
<div className="mt-2 space-y-2">
<div className="flex justify-between text-[8px] uppercase tracking-widest text-gray-700">
<span>Integrity Check</span>
<span>SCANNING</span>
</div>
<div className="h-1.5 w-full bg-black rounded-full border border-white/5 overflow-hidden">
<div className="h-full bg-gradient-to-r from-emerald-950 via-emerald-500 to-emerald-400 shadow-[0_0_15px_rgba(16,185,129,0.4)]" style={{animation: 'progress-loop 8s ease-in-out infinite'}}></div>
</div>
</div>
</div>
</div>
<div className="mt-5 px-1 flex justify-between items-center">
<span className="text-[8px] font-black uppercase tracking-[0.5em] text-white/10">Lumen Trust Core</span>
<div className="h-[1px] flex-1 mx-4 bg-gradient-to-r from-transparent via-white/5 to-transparent"></div>
<span className="text-[8px] font-mono text-white/20 tracking-tighter uppercase">S/N: 2026-X99_LMN</span>
</div>
</div>
</div>
<div className="absolute -bottom-10 -right-8 w-48 h-32 z-40 p-[1px] bg-gradient-to-br from-[#888] via-[#222] to-[#111] rounded-2xl shadow-[0_40px_80px_rgba(0,0,0,0.9),inset_0_1px_1px_rgba(255,255,255,0.4)] transform group-hover:-translate-y-5 group-hover:-translate-x-4 group-hover:rotate-[-1deg] transition-all duration-700 ease-[cubic-bezier(0.23,1,0.32,1)]">
<div className="w-full h-full bg-[#0d0d0d] rounded-[15px] p-5 shadow-[inset_0_2px_20px_black] border border-black/40 flex flex-col relative overflow-hidden">
<div className="absolute -right-6 -top-6 w-20 h-20 bg-blue-600/10 blur-3xl rounded-full"></div>
<div className="flex justify-between items-start z-10">
<div className="flex flex-col gap-1">
<span className="text-[8px] text-emerald-500 font-black uppercase tracking-[0.2em]">Secure.Remote</span>
<span className="text-xs text-white font-mono font-bold tracking-tight">AL_VOYAGER.v2</span>
</div>
<div className="flex gap-0.5">
<div className="w-1 h-3 bg-amber-500/20 rounded-full"></div>
<div className="w-1 h-3 bg-amber-500/50 rounded-full"></div>
<div className="w-1 h-3 bg-emerald-500 rounded-full shadow-[0_0_8px_#10b981]"></div>
</div>
</div>
<div className="mt-auto flex items-center gap-3 bg-black/40 p-3 rounded-lg border border-white/5 backdrop-blur-md">
<div className="relative w-3 h-3">
<div className="absolute inset-0 rounded-full bg-blue-500 animate-ping opacity-20"></div>
<div className="absolute inset-0 rounded-full bg-blue-400 shadow-[0_0_12px_#3b82f6]" style={{animation: 'glow-pulse 3s ease-in-out infinite'}}></div>
</div>
<div className="flex flex-col">
<span className="text-[8px] text-blue-400 font-black uppercase tracking-widest leading-none animate-pulse">Link Active</span>
<span className="text-[9px] text-white/30 font-mono mt-1">AES_GCM_READY</span>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="relative z-30 bg-[#050505] border-t-4 border-[#0a0a0a] p-8 md:p-12 lg:p-16 flex flex-col justify-center shadow-[inset_0_10px_30px_black]">
<div className="absolute top-4 left-1/2 -translate-x-1/2 w-12 h-1 bg-[#222] rounded-full shadow-[inset_0_1px_2px_black]">
</div>
<p className="text-lg md:text-xl text-gray-300 font-geist font-light leading-relaxed italic border-l-2 border-emerald-500/20 pl-6">
      "We believe that security tools should be open, auditable, and designed for the people who actually use them
      every day. We exist to make zero-trust the default standard for development teams worldwide."
    </p>
</div>
</div>
</div><div className="overflow-hidden border-dashed bg-[#050505] border-white/20 border-t mt-0 pt-8 pb-8 relative" data-section="marquee-top">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>

<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>
</div>
</div>
</div>

<div className="border-white/20 md:px-12 border-x bg-[#050505] w-full border-t pt-24 pr-6 pb-24 pl-6 relative border-dashed">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10">
<div className="flex items-center gap-4 group">
<span className="text-sm text-white/40 tracking-tighter font-mono">
                04
              </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">
                User Feedback
              </span>
</div>
<h2 className="text-4xl md:text-6xl font-geist font-normal text-white tracking-tight leading-[1.05]">
              Voices of
              <br/>
<span className="text-white/50">Lumen users</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-geist leading-relaxed mb-12 max-w-md">
              Hear from the developers and agencies who have integrated Lumen
              into their daily security workflow and changed how they manage
              client secrets.
            </p>
</div>
</div>
</div>
<div className="md:px-12 flex flex-col overflow-hidden border-dashed bg-[#050505] w-full border-white/20 border-t pt-24 pr-6 pb-24 pl-6 relative items-center justify-center" data-section="testimonial-quote">
<style>
            @keyframes testimonial-fade {
                0% { opacity: 0; transform: translateY(1.5rem); }
                3% { opacity: 1; transform: translateY(0); }
                30% { opacity: 1; transform: translateY(0); }
                33% { opacity: 0; transform: translateY(-1.5rem); }
                100% { opacity: 0; transform: translateY(-1.5rem); }
            }
            .animate-testimonial {
                animation: testimonial-fade 15s infinite ease-in-out;
                opacity: 0;
                will-change: transform, opacity;
            }
        </style>
<div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-emerald-600/5 blur-[120px] rounded-full pointer-events-none"></div>
<iconify-icon className="text-white/10 mb-8 relative z-10" height="48" icon="solar:quote-left-linear" width="48"></iconify-icon>
<div className="grid w-full max-w-4xl relative z-10">

<div className="animate-testimonial col-start-1 row-start-1 flex flex-col items-center" style={{animationDelay: '0s'}}>
<p className="text-2xl md:text-4xl font-light text-white font-geist tracking-tight text-center leading-tight mb-10">
                  "Lumen completely changed how our agency manages client secrets. We no
                  longer worry about stray environment variables in Slack or compromised
                  access tokens. It just works natively in the terminal."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center overflow-hidden">
<img alt="Sarah Jenkins" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1640906152676-dace6710d24b?w=100&amp;q=80"/>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-white font-geist">Sarah Jenkins</span>
<span className="text-xs text-gray-400 font-geist">CTO at DevCraft</span>
</div>
</div>
</div>

<div className="animate-testimonial col-start-1 row-start-1 flex flex-col items-center" style={{animationDelay: '5s'}}>
<p className="text-2xl md:text-4xl font-light text-white font-geist tracking-tight text-center leading-tight mb-10">
                  "The zero-trust architecture gives our enterprise clients absolute peace of mind. We've cut our compliance audit times in half while increasing developer velocity."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center overflow-hidden">
<img alt="Marcus Chen" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1629946832022-c327f74956e0?w=100&amp;q=80"/>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-white font-geist">Marcus Chen</span>
<span className="text-xs text-gray-400 font-geist">VP Engineering at Nexus</span>
</div>
</div>
</div>

<div className="animate-testimonial col-start-1 row-start-1 flex flex-col items-center" style={{animationDelay: '10s'}}>
<p className="text-2xl md:text-4xl font-light text-white font-geist tracking-tight text-center leading-tight mb-10">
                  "Finally, a secret manager that understands modern deployment pipelines. The CLI integration is flawless, and the isolated workspaces keep our projects perfectly partitioned."
                </p>
<div className="flex items-center gap-4">
<div className="w-10 h-10 rounded-full bg-white/20 border border-white/20 flex items-center justify-center overflow-hidden">
<img alt="Elena Rodriguez" className="w-full h-full object-cover grayscale opacity-80" src="https://images.unsplash.com/photo-1724525647065-f948fc102e68?w=100&amp;q=80"/>
</div>
<div className="flex flex-col text-left">
<span className="text-sm font-medium text-white font-geist">Elena Rodriguez</span>
<span className="text-xs text-gray-400 font-geist">Lead DevOps at CloudScale</span>
</div>
</div>
</div>
</div>
</div><div className="overflow-hidden border-dashed bg-[#050505] border-white/20 border-t mt-0 pt-8 pb-8 relative" data-section="marquee-top">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>

<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>
</div>
</div>
</div>
<div className="w-full bg-[#050505] border-t border-white/20 relative font-geist overflow-hidden border-dashed">

<div className="absolute inset-0 bg-[linear-gradient(to_right,#ffffff05_1px,transparent_1px),linear-gradient(to_bottom,#ffffff05_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none z-0 border-dashed"></div>
<div className="max-w-7xl mx-auto border-x border-white/20 grid grid-cols-1 lg:grid-cols-2 relative z-10 border-dashed">

<div className="flex flex-col border-b lg:border-b-0 lg:border-r border-white/20 border-dashed">

<div className="p-8 md:p-12 border-b border-white/20 min-h-[260px] flex flex-col justify-between relative group border-dashed">
<div className="flex items-center gap-4 group mb-6">
<span className="text-sm text-white/40 tracking-tighter font-mono">
                  05
                </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">
                  Benefits
                </span>
</div>
<h2 className="text-4xl md:text-6xl font-geist font-normal text-white tracking-tight leading-[1.05]">
                Why teams choose
                <br/>
<span className="text-white/50">Lumen</span>
</h2>

<div className="absolute -bottom-1.5 -right-1.5 text-white/20 font-mono hidden lg:block text-xs">
                +
              </div>
</div>

<div className="flex-1 min-h-[600px] overflow-hidden group flex selection:bg-emerald-500/30 md:p-12 font-sans bg-gradient-to-br from-green-400 to-green-800 px-4 py-4 relative items-center justify-center">
<div className="z-0 opacity-20 absolute top-0 right-0 bottom-0 left-0" style={{backgroundImage: 'radial-gradient(rgb(16, 185, 129) 0.5px, transparent 0.5px)', backgroundSize: '24px 24px'}}>
<style>
    /* Message 1 (User) Appearance */
    .bg-\[\#0a0a0a\].min-h-\[280px\] .group\/msg:nth-child(2) {
      animation: chatMsg1 14s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }
    
    /* Message 2 (System Admin) Appearance */
    .bg-\[\#0a0a0a\].min-h-\[280px\] .group\/msg:nth-child(3) {
      animation: chatMsg2 14s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }

    /* Timestamp Subtle Flash Updates */
    .bg-\[\#0a0a0a\].min-h-\[280px\] .group\/msg:nth-child(2) .font-mono {
      animation: tsFlash1 14s infinite;
    }
    .bg-\[\#0a0a0a\].min-h-\[280px\] .group\/msg:nth-child(3) .font-mono {
      animation: tsFlash2 14s infinite;
    }

    /* Command Line Typing Effect */
    .min-h-\[28px\] .text-white\/90 {
      animation: typeReveal1 14s linear infinite;
      display: inline-block;
    }
    .min-h-\[28px\] .text-amber-500\/90 {
      animation: typeReveal2 14s linear infinite;
      display: inline-block;
    }

    /* Intelligent Blinking Cursor */
    .min-h-\[28px\] .w-2 {
      animation: cursorState 14s infinite;
    }

    /* Execute Button Hover-Ready State */
    .group\/btn {
      animation: executePulse 14s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }
    .group\/btn .absolute {
      animation: executeGlow 14s cubic-bezier(0.23, 1, 0.32, 1) infinite;
    }

    /* Keyframes Definitions */
    @keyframes chatMsg1 {
      0%, 5% { opacity: 0; transform: translateY(15px); }
      10%, 85% { opacity: 1; transform: translateY(0); }
      90%, 100% { opacity: 0; transform: translateY(-15px); }
    }

    @keyframes chatMsg2 {
      0%, 25% { opacity: 0; transform: translateY(15px); }
      30%, 85% { opacity: 1; transform: translateY(0); }
      90%, 100% { opacity: 0; transform: translateY(-15px); }
    }

    @keyframes tsFlash1 {
      0%, 9% { color: #10b981; }
      15%, 100% { color: #4b5563; }
    }
    
    @keyframes tsFlash2 {
      0%, 29% { color: #10b981; }
      35%, 100% { color: #064e3b; }
    }

    @keyframes typeReveal1 {
      0%, 45% { clip-path: inset(0 100% 0 0); }
      49%, 85% { clip-path: inset(0 0 0 0); }
      90%, 100% { clip-path: inset(0 100% 0 0); }
    }

    @keyframes typeReveal2 {
      0%, 49% { clip-path: inset(0 100% 0 0); }
      54%, 85% { clip-path: inset(0 0 0 0); }
      90%, 100% { clip-path: inset(0 100% 0 0); }
    }

    @keyframes cursorState {
      0%, 44% { opacity: 0; }
      45%, 55% { opacity: 1; background-color: #34d399; transform: scaleY(1.1); box-shadow: 0 0 12px #34d399; }
      56%, 60% { opacity: 0; }
      61%, 65% { opacity: 1; }
      66%, 70% { opacity: 0; }
      71%, 75% { opacity: 1; }
      76%, 80% { opacity: 0; }
      81%, 85% { opacity: 1; }
      86%, 100% { opacity: 0; }
    }

    @keyframes executePulse {
      0%, 54% { 
        transform: scale(1); 
        box-shadow: 0 4px 0 #064e3b, 0 15px 30px rgba(0,0,0,0.5); 
        border-color: rgba(255,255,255,0.4); 
        filter: saturate(0.5) brightness(0.8);
      }
      58%, 85% { 
        transform: scale(1.03); 
        box-shadow: 0 4px 0 #064e3b, 0 20px 40px rgba(16,185,129,0.4); 
        border-color: rgba(16,185,129,0.8); 
        filter: saturate(1.2) brightness(1.1);
      }
      90%, 100% { 
        transform: scale(1); 
        box-shadow: 0 4px 0 #064e3b, 0 15px 30px rgba(0,0,0,0.5); 
        border-color: rgba(255,255,255,0.4);
        filter: saturate(0.5) brightness(0.8);
      }
    }

    @keyframes executeGlow {
      0%, 54% { opacity: 0; }
      58%, 85% { opacity: 1; }
      90%, 100% { opacity: 0; }
    }
  </style>
</div>
<div className="z-0 absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 mix-blend-overlay pointer-events-none">
</div>
<div className="relative w-full max-w-[460px] z-20">
<div className="bg-gradient-to-b from-[#2c2c2c] via-[#1a1a1a] to-[#0f0f0f] p-[1px] rounded-2xl shadow-[0_50px_100px_-20px_rgba(0,0,0,1),0_0_20px_rgba(16,185,129,0.05)]">
<div className="bg-[#121212] rounded-[15px] overflow-hidden border border-black shadow-inner">
<div className="h-14 border-b border-black flex items-center px-5 justify-between bg-gradient-to-b from-white/5 to-transparent">
<div className="flex items-center gap-3">
<div className="relative">
<div className="w-2.5 h-2.5 rounded-full bg-emerald-500 shadow-[0_0_12px_#10b981]"></div>
<div className="absolute inset-0 w-2.5 h-2.5 rounded-full bg-emerald-400 animate-ping opacity-40"></div>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-black text-gray-300 uppercase tracking-[0.2em] leading-none">Terminal.04</span>
<span className="text-[8px] text-emerald-500/70 font-mono mt-1 uppercase tracking-widest">Secure Link Active</span>
</div>
</div>
<div className="flex gap-1.5">
<div className="w-8 h-1 bg-white/5 rounded-full"></div>
<div className="w-4 h-1 bg-emerald-500/40 rounded-full"></div>
</div>
</div>
<div className="relative p-6 flex flex-col gap-6 bg-[#0a0a0a] min-h-[280px]">
<div className="absolute inset-0 bg-gradient-to-b from-transparent via-emerald-500/[0.03] to-transparent h-20 w-full -translate-y-full animate-[scan_4s_linear_infinite] pointer-events-none">
</div>
<div className="flex gap-4 group/msg">
<div className="w-9 h-9 rounded-lg bg-[#1a1a1a] border border-white/5 flex items-center justify-center shrink-0 shadow-xl transition-transform group-hover/msg:scale-105">
<span className="text-[10px] font-bold text-gray-500">SJ</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-[11px] font-bold text-gray-200 uppercase tracking-wide">S. Jenkins</span>
<span className="text-[9px] text-gray-600 font-mono">10:42:01</span>
</div>
<div className="relative px-3 py-2 bg-white/[0.02] border-l border-white/10 rounded-r-md">
<p className="text-[13px] text-gray-400 leading-relaxed font-light">
                  "Are the new production database credentials rotated yet?"
                </p>
</div>
</div>
</div>
<div className="flex gap-4 group/msg">
<div className="w-9 h-9 rounded-lg bg-emerald-500/10 border border-emerald-500/20 flex items-center justify-center shrink-0 shadow-[0_0_15px_rgba(16,185,129,0.05)]">
<span className="text-[10px] font-bold text-emerald-500 uppercase">SYS</span>
</div>
<div className="flex flex-col gap-1.5">
<div className="flex items-center gap-2">
<span className="text-[11px] font-bold text-emerald-500 uppercase tracking-wide">Lumen Admin</span>
<span className="text-[9px] text-emerald-900 font-mono">10:44:18</span>
</div>
<div className="px-3 py-2 bg-emerald-500/[0.03] border-l border-emerald-500/50 rounded-r-md">
<p className="text-[13px] text-emerald-100/70 leading-relaxed font-medium">
                  Deployment freeze detected. Automated rotation job paused.
                  <span className="text-emerald-400 underline underline-offset-4 decoration-emerald-500/30">Manual override required.</span>
</p>
</div>
</div>
</div>
</div>
<div className="p-5 bg-[#0f0f0f] border-t border-black">
<div className="bg-black border border-white/5 rounded-xl p-4 shadow-2xl relative overflow-hidden">
<div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-emerald-500/20 to-transparent">
</div>
<div className="text-[13px] font-mono text-gray-300 flex flex-wrap items-center gap-2 min-h-[28px]">
<span className="text-emerald-500 font-bold bg-emerald-500/10 px-1.5 py-0.5 rounded">@Lumen</span>
<span className="text-white/90">force-rotate</span>
<span className="text-amber-500/90 tracking-tight">--target=prod-db</span>
<div className="w-2 h-5 bg-emerald-500/80 animate-[pulse_0.8s_infinite] shadow-[0_0_8px_#10b981]"></div>
</div>
<div className="flex items-center justify-between border-t border-white/[0.03] pt-4 mt-4">
<div className="flex gap-3">
<button className="text-gray-600 hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:terminal" width="16"></iconify-icon>
</button>
<button className="text-gray-600 hover:text-emerald-500 transition-colors">
<iconify-icon icon="lucide:shield-check" width="16"></iconify-icon>
</button>
</div>
<button className="relative group/btn">
<div className="absolute -inset-2 bg-emerald-500/20 blur-xl opacity-0 group-hover/btn:opacity-100 transition-opacity"></div>
<div className="relative bg-gradient-to-b from-emerald-400 to-emerald-600 px-5 py-2 rounded-lg flex items-center gap-3 border-t border-white/40 shadow-[0_4px_0_#064e3b,0_15px_30px_rgba(0,0,0,0.5)] active:translate-y-[2px] active:shadow-none transition-all">
<span className="text-[10px] font-black text-white uppercase tracking-[0.2em] drop-shadow-md">Execute</span>
<iconify-icon className="text-white/80" icon="lucide:chevron-right" width="14"></iconify-icon>
</div>
</button>
</div>
</div>
<div className="mt-4 flex justify-between items-center opacity-60">
<div className="flex items-center gap-3">
<div className="flex -space-x-2">
<div className="w-4 h-4 rounded-full bg-emerald-900 border border-black"></div>
<div className="w-4 h-4 rounded-full bg-gray-800 border border-black"></div>
</div>
<span className="text-[8px] font-mono text-gray-500 uppercase tracking-tighter">Auth: RSA-4096 // AES-256</span>
</div>
<span className="text-[8px] font-black text-gray-600 uppercase tracking-[0.3em]">LMN_OS_v2.4</span>
</div>
</div>
</div>
</div>
</div>
<div className="absolute top-[40%] left-[-10%] w-[120%] h-[1px] bg-gradient-to-r from-transparent via-emerald-500/10 to-transparent rotate-[-5deg] pointer-events-none">
</div>
<div className="absolute bottom-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-emerald-500/[0.02] blur-[150px] rounded-full pointer-events-none">
</div>
</div>
</div>

<div className="flex flex-col">

<div className="p-8 md:p-12 border-b border-white/20 min-h-[260px] flex items-end relative bg-white/[0.01] border-dashed">
<div className="max-w-md">
<p className="text-sm md:text-base text-gray-400 font-mono uppercase tracking-wide leading-relaxed">
                  A security platform focused on zero-trust architecture,
                  automated secret rotation, and immutable audit logging for
                  modern development teams.
                </p>
</div>

<div className="absolute -bottom-1.5 -left-1.5 text-white/20 font-mono hidden lg:block text-xs">
                +
              </div>
</div>

<div className="grid grid-cols-1 md:grid-cols-2 flex-1">
<div className="group md:border-r flex flex-col min-h-[280px] hover:bg-white/[0.03] transition-colors border-dashed border-white/20 border-b pt-8 pr-8 pb-8 pl-8 relative justify-between overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-mono text-xs text-emerald-500/80">01/</span>
<div className="flex gap-1.5">
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="relative z-10 space-y-4">
<h3 className="text-lg font-bold text-white uppercase tracking-tight">
        Secret Rotation
      </h3>
<p className="text-xs text-gray-400 leading-relaxed font-mono uppercase tracking-wide">
        Automate credential refresh cycles and reduce long-lived key
        exposure across production systems.
      </p>
</div>
<div className="absolute -bottom-1.5 -right-1.5 text-white/20 font-mono text-xs z-20">
      +
    </div>
</div>
<div className="group flex flex-col min-h-[280px] hover:bg-white/[0.03] transition-colors border-dashed border-white/20 border-b pt-8 pr-8 pb-8 pl-8 relative justify-between overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-mono text-xs text-emerald-500/80">02/</span>
<div className="flex gap-1.5">
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="relative z-10 space-y-4">
<h3 className="text-lg font-bold text-white uppercase tracking-tight">
        Access Monitoring
      </h3>
<p className="text-xs text-gray-400 leading-relaxed font-mono uppercase tracking-wide">
        Review clear audit events for every secret access, copy,
        and change across all workspaces.
      </p>
</div>
</div>
<div className="group relative border-b md:border-b-0 border-white/20 md:border-r p-8 flex flex-col justify-between min-h-[280px] hover:bg-white/[0.03] transition-colors border-dashed overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-mono text-xs text-emerald-500/80">03/</span>
<div className="flex gap-1.5">
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
<div className="w-1 h-1 bg-white/20 rounded-full"></div>
</div>
</div>
<div className="relative z-10 space-y-4">
<h3 className="text-lg font-bold text-white uppercase tracking-tight">
        Policy Enforcement
      </h3>
<p className="text-xs text-gray-400 leading-relaxed font-mono uppercase tracking-wide">
        Apply consistent RBAC and sharing policies so teams only
        see the credentials they need.
      </p>
</div>
</div>
<div className="group relative p-8 flex flex-col justify-between min-h-[280px] hover:bg-white/[0.03] transition-colors overflow-hidden">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="relative z-10 flex justify-between items-start">
<span className="font-mono text-xs text-emerald-500/80">04/</span>
<div className="flex gap-1.5">
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
<div className="w-1 h-1 bg-emerald-500 rounded-full shadow-[0_0_5px_rgba(16,185,129,0.8)]"></div>
</div>
</div>
<div className="relative z-10 space-y-4">
<h3 className="text-lg font-bold text-white uppercase tracking-tight">
        Time-Saving
      </h3>
<p className="text-xs text-gray-400 leading-relaxed font-mono uppercase tracking-wide">
        Focus on growing your business with confidence while our
        experienced team strategically manages.
      </p>
</div>
</div>
</div>
</div>
</div>
</div>
<div className="overflow-hidden bg-[#050505]/50 border-t border-b border-white/20 mt-0 pt-8 pb-8 relative border-dashed" data-section="marquee-benefits-pricing">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">
<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">Secure Workspaces</span>
<span className="opacity-40">•</span>
<span className="mx-6">Role-Based Access</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secret Rotation</span>
<span className="opacity-40">•</span>
<span className="mx-6">Immutable Audit Trails</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI &amp; CI/CD Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Workspaces</span>
<span className="opacity-40">•</span>
<span className="mx-6">Role-Based Access</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secret Rotation</span>
<span className="opacity-40">•</span>
<span className="mx-6">Immutable Audit Trails</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI &amp; CI/CD Integration</span>
<span className="opacity-40">•</span>
</div>
</div>
</div>

<div className="flex flex-col border-white/20 w-full border-t relative border-dashed" data-section="pricing-plans">
<div className="md:px-12 bg-[#050505] border-white/20 border-b pt-24 pr-6 pb-24 pl-6 relative border-dashed">
<div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-32 items-start">
<div className="flex flex-col space-y-10 border-white/20">
<div className="flex items-center gap-4 group">
<span className="text-sm text-white/40 tracking-tighter font-mono">
                  06
                </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">
                  Pricing &amp; Plans
                </span>
</div>
<h2 className="text-4xl md:text-6xl font-geist font-normal text-white tracking-tight leading-[1.05]">
                Simple,
                <br/>
<span className="text-white/50">transparent pricing</span>
</h2>
</div>
<div className="flex flex-col items-start lg:pt-24">
<p className="text-lg text-gray-400 font-geist leading-relaxed mb-12 max-w-md">
                Start for free, scale when you need. No hidden fees or complex
                seat calculations.
              </p>
</div>
</div>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 border-dashed border-white/20 border-t">
<div className="md:p-12 lg:border-b-0 lg:border-r flex flex-col group overflow-hidden transition-colors hover:bg-white/[0.01] border-dashed border-white/20 border-b pt-8 pr-8 pb-8 pl-8 relative">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white font-geist tracking-tight mb-2">Starter</h3>
<p className="text-sm text-gray-400 font-geist mb-6">Perfect for individual developers.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-normal text-white tracking-tight">$0</span>
<span className="text-sm text-gray-400 font-geist">/mo</span>
</div>
<a className="w-full block text-center bg-transparent border border-white/20 hover:border-white/20 hover:bg-white/5 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-none transition-all mb-8 font-geist" href="#">
        Get Started
      </a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Up to 3 individual projects</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Unlimited personal secrets</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Basic CLI access</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-500 font-geist">
<iconify-icon className="shrink-0" height="20" icon="solar:close-circle-linear" width="20"></iconify-icon>
<span>No team sharing</span>
</li>
</ul>
</div>
</div>
<div className="p-8 md:p-12 border-b lg:border-b-0 lg:border-r border-white/20 flex flex-col bg-white/[0.02] relative group overflow-hidden border-dashed">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-center justify-between mb-2">
<h3 className="text-lg font-medium text-white font-geist tracking-tight">Pro</h3>
<span className="text-[10px] font-semibold text-white uppercase tracking-widest font-geist border border-white/20 px-2 py-0.5 rounded bg-white/20">
          Most Popular
        </span>
</div>
<p className="text-sm text-gray-400 font-geist mb-6">For growing development teams.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-normal text-white tracking-tight">$12</span>
<span className="text-sm text-gray-400 font-geist">/user/mo</span>
</div>
<a className="w-full group inline-flex uppercase transition-all duration-500 hover:scale-[1.02] active:scale-[0.95] text-xs font-bold text-white tracking-[0.2em] bg-transparent rounded-none py-4 relative items-center justify-center overflow-hidden mb-8 font-geist" href="#">
<span className="transition-shadow duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.8)] bg-gradient-to-r from-green-900 via-emerald-500 to-teal-400 rounded-none p-[1px] absolute inset-0 shadow-[0_0_20px_-5px_rgba(21,128,61,0.5)]">
<span className="block bg-gradient-to-b from-green-950 to-black w-full h-full rounded-none backdrop-blur-xl"></span>
</span>
<span className="-right-4 -translate-y-1/2 transition-all duration-700 group-hover:bg-emerald-500/40 bg-green-600/20 w-24 h-24 absolute top-1/2 blur-3xl"></span>
<span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">Start Free Trial</span>
</a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Unlimited shared workspaces</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>Advanced role-based access</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>CI/CD Pipeline integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">30-day immutable audit logs</span>
</li>
</ul>
</div>
</div>
<div className="p-8 md:p-12 flex flex-col group relative overflow-hidden transition-colors hover:bg-white/[0.01]">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:6px_6px] opacity-50 z-0"></div>
<div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-emerald-500 to-transparent opacity-0 group-hover:opacity-100 transition-all duration-700 shadow-[0_0_15px_rgba(16,185,129,0.6)]"></div>
<div className="relative z-10">
<h3 className="text-lg font-medium text-white font-geist tracking-tight mb-2">Enterprise</h3>
<p className="text-sm text-gray-400 font-geist mb-6">Custom infrastructure for large orgs.</p>
<div className="flex items-baseline gap-1 mb-8">
<span className="text-4xl font-normal text-white tracking-tight">Custom</span>
</div>
<a className="w-full block text-center bg-transparent border border-white/20 hover:border-white/20 hover:bg-white/5 text-white text-xs font-bold tracking-widest uppercase py-4 rounded-none transition-all mb-8 font-geist" href="#">
        Contact Sales
      </a>
<ul className="flex flex-col gap-4">
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Self-hosted deployment options</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span>SAML / SSO integrations</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Unlimited audit log retention</span>
</li>
<li className="flex items-start gap-3 text-sm text-gray-300 font-geist">
<iconify-icon className="text-white/40 shrink-0" height="20" icon="solar:check-circle-linear" width="20"></iconify-icon>
<span className="">Dedicated account manager</span>
</li>
</ul>
</div>
</div>
</div>
</div>

<div className="border-white/20 overflow-hidden bg-[#050505]/50 border-t mt-0 pt-8 pb-8 relative border-dashed" data-section="marquee-bottom">
<div className="max-w-7xl mx-auto px-6 md:px-12 relative">

<div className="pointer-events-none absolute inset-y-0 left-0 w-24 bg-gradient-to-r from-black via-black/70 to-transparent"></div>
<div className="pointer-events-none absolute inset-y-0 right-0 w-24 bg-gradient-to-l from-black via-black/70 to-transparent"></div>
<div className="whitespace-nowrap text-sm text-white/40 opacity-70 animate-[marquee_22s_linear_infinite]">
<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>

<span className="mx-6">End-to-End Encryption</span>
<span className="opacity-40">•</span>
<span className="mx-6">Zero-Trust Architecture</span>
<span className="opacity-40">•</span>
<span className="mx-6">Secure Team Sharing</span>
<span className="opacity-40">•</span>
<span className="mx-6">CLI Integration</span>
<span className="opacity-40">•</span>
<span className="mx-6">Audit Logs</span>
<span className="opacity-40">•</span>
<span className="mx-6">Access Control</span>
<span className="opacity-40">•</span>
</div>
</div>
</div>
<div className="flex flex-col bg-[#050505] w-full border-t relative items-center justify-center border-white/20 border-dashed" data-section="faq-section">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.03)_0%,transparent_70%)] pointer-events-none"></div>
<div className="grid grid-cols-1 lg:grid-cols-2 z-10 w-full max-w-7xl mr-auto ml-auto relative border-dashed">

<div className="flex flex-col md:p-12 lg:p-16 lg:border-b-0 lg:border-r min-h-[500px] border-dashed h-full border-white/20 border-b pt-8 pr-8 pb-8 pl-8 justify-between">
<div className="flex flex-col items-start text-left">
<div className="flex items-center gap-4 group mb-10 border-white/20">
<span className="text-sm text-white/40 tracking-tighter font-mono">
          07
        </span>
<div className="w-px h-4 bg-white/20"></div>
<span className="text-[10px] uppercase font-medium text-green-400 tracking-[0.2em]">
          FAQS
        </span>
</div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light text-white tracking-tight mb-6 leading-[1.1] uppercase">
        Frequently
        <br/>
        Asked Questions
      </h2>
<p className="text-base md:text-lg text-gray-400 font-geist leading-relaxed max-w-sm font-light">
        Still confused? We have answers for your questions. Learn how
        Lumen secures your agency's workflow.
      </p>
</div>
<div className="flex flex-col items-start mt-12 lg:mt-0">
<p className="text-base text-white font-geist mb-6">
        Want specific guidance? Contact us now
      </p>
<button className="bg-transparent hover:bg-white/[0.05] border border-white/20 text-green-400 px-8 py-4 text-xs font-bold tracking-widest uppercase transition-all font-geist">
        Contact Us
      </button>
</div>
</div>

<div className="flex flex-col">

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        How does zero-trust sharing work?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        How does Lumen improve productivity?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        Is Lumen suitable for small teams?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        Can Lumen integrate with our tools?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        Is my data secure with Lumen?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>

<div className="group border-b border-white/20 p-8 md:p-10 flex items-center justify-between cursor-pointer hover:bg-white/[0.02] transition-colors border-dashed">
<span className="text-lg text-white font-geist font-light tracking-tight uppercase pr-8">
        How quickly can we get started?
      </span>
<iconify-icon className="text-gray-500 group-hover:text-white transition-colors shrink-0 stroke-[1.5]" height="24" icon="lucide:plus" width="24"></iconify-icon>
</div>
</div>
</div>
</div>
<div className="flex flex-col overflow-hidden border-dashed text-center w-full border-white/20 border-t pt-32 pr-6 pb-32 pl-6 relative items-center justify-center" data-section="cta-ready-to-secure">

<div className="pointer-events-none absolute top-0 right-0 bottom-0 left-0"></div>
<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-3/4 h-1/2 bg-white/5 blur-[120px] rounded-t-full pointer-events-none"></div>
<h2 className="text-4xl md:text-5xl lg:text-6xl font-geist font-light text-white tracking-tight mb-6 relative z-10">
          Ready to secure your workflow?
        </h2>
<p className="text-base md:text-lg text-gray-400 font-geist max-w-2xl leading-relaxed mb-10 relative z-10">
          Join hundreds of development agencies currently trusting Lumen to
          handle their mission-critical credentials safely.
        </p>
<div className="flex flex-col sm:flex-row gap-4 items-center relative z-10">
<button className="group inline-flex uppercase transition-all duration-500 hover:scale-[1.05] active:scale-[0.95] text-sm font-bold text-white tracking-[0.2em] bg-transparent rounded-none px-10 py-4 relative items-center justify-center overflow-hidden">
<span className="transition-shadow duration-500 group-hover:shadow-[0_0_35px_-5px_rgba(34,197,94,0.8)] bg-gradient-to-r from-green-900 via-emerald-500 to-teal-400 rounded-none p-[1px] absolute inset-0 shadow-[0_0_20px_-5px_rgba(21,128,61,0.5)]">
<span className="block bg-gradient-to-b from-green-950 to-black w-full h-full rounded-none backdrop-blur-xl"></span>
</span>
<span className="relative z-10 drop-shadow-[0_0_10px_rgba(255,255,255,0.5)]">
              Start Free Trial
            </span>
</button>
</div>
</div>
</section>

<footer className="selection:bg-emerald-500/30 flex flex-col border-dashed text-white font-geist bg-[#050505] w-full border-white/20 border-t">
<div className="max-w-7xl mx-auto w-full border-x border-white/20 relative flex flex-col overflow-hidden border-dashed">
<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,255,255,0.08)_1px,transparent_1px)] bg-[length:12px_12px] opacity-40 pointer-events-none border-dashed divide-dashed">
</div>
<div className="relative z-10 flex flex-col lg:flex-row divide-y lg:divide-y-0 lg:divide-x divide-white/20 border-b border-white/20 border-dashed divide-dashed">
<div className="lg:w-2/5 p-8 md:p-12 lg:p-16 flex flex-col justify-between relative group min-h-[400px] border-dashed">
<div className="absolute inset-0 bg-emerald-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-1000 pointer-events-none">
</div>
<div className="relative z-10 mb-12">
<div className="flex items-center gap-0 text-xl text-white tracking-tighter mb-6">
<span className="font-black">L</span>
<span className="font-thin tracking-normal">umen</span>
<span className="w-1.5 h-1.5 bg-emerald-500 rounded-none ml-1 shadow-[0_0_8px_rgba(16,185,129,0.8)]"></span>
</div>
<p className="text-sm text-gray-400 leading-relaxed max-w-sm">
            Infrastructure for the next generation of secure development.
            Pure cryptographic proof designed for teams.
          </p>
</div>
<div className="relative w-fit z-10">
<div className="absolute -top-1 -left-1 w-2 h-2 border-t border-l border-white/20 group-hover:border-emerald-400 group-hover:-translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
</div>
<div className="absolute -top-1 -right-1 w-2 h-2 border-t border-r border-white/20 group-hover:border-emerald-400 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all">
</div>
<div className="absolute -bottom-1 -left-1 w-2 h-2 border-b border-l border-white/20 group-hover:border-emerald-400 group-hover:-translate-x-0.5 group-hover:translate-y-0.5 transition-all">
</div>
<div className="absolute -bottom-1 -right-1 w-2 h-2 border-b border-r border-white/20 group-hover:border-emerald-400 group-hover:translate-x-0.5 group-hover:translate-y-0.5 transition-all">
</div>
<a className="inline-flex items-center gap-3 border border-white/20 bg-white/[0.03] hover:bg-emerald-500/10 hover:border-emerald-500/50 px-6 py-3 text-sm font-medium tracking-wide transition-colors backdrop-blur-md" href="#">
<span className="font-mono text-emerald-400 text-[10px] uppercase">
              Initialize //
            </span>
            Create Workspace
            <iconify-icon height="16" icon="solar:arrow-right-linear" width="16"></iconify-icon>
</a>
</div>
</div>
<div className="lg:w-3/5 grid grid-cols-2 md:grid-cols-3 divide-x divide-white/20 divide-dashed border-dashed">
<div className="p-8 md:p-12 flex flex-col gap-6 relative border-dashed">
<span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            Platform
          </span>
<ul className="flex flex-col gap-4">
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Lumen Vault
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                CLI Integration
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                RBAC Policies
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Pricing
              </a>
</li>
</ul>
</div>
<div className="p-8 md:p-12 flex flex-col gap-6 relative border-dashed">
<span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            Developers
          </span>
<ul className="flex flex-col gap-4">
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Documentation
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                API Reference
              </a>
</li>
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                GitHub
              </a>
</li>
<li className="">
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Audit Logs
              </a>
</li>
</ul>
</div>
<div className="p-8 md:p-12 flex flex-col gap-6 relative col-span-2 md:col-span-1 border-t md:border-t-0 border-white/20 border-dashed">
<span className="font-mono text-[10px] text-white/40 uppercase tracking-widest">
            Company
          </span>
<ul className="flex flex-col gap-4">
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                About Us
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Security Whitepaper
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Blog
              </a>
</li>
<li>
<a className="text-sm text-gray-400 hover:text-white transition-colors flex items-center gap-2 group/link" href="#">
<span className="text-emerald-500 opacity-0 group-hover/link:opacity-100 transition-opacity font-mono text-[10px]">
                  ❯
                </span>
                Contact Sales
              </a>
</li>
</ul>
</div>
</div>
</div>
<div className="relative w-full overflow-hidden flex items-end justify-center pt-16 pb-6 px-4 z-10 group border-b border-white/20 border-dashed">
<div aria-hidden="true" className="text-[20vw] lg:text-[180px] xl:text-[210px] leading-[0.75] bg-clip-text select-none z-10 font-black text-transparent tracking-tighter text-center bg-gradient-to-b from-white via-white/80 to-white/10 mix-blend-screen w-full relative">
        LUMEN
      </div>
</div>
<div className="relative z-20 px-8 md:px-12 lg:px-16 py-6 flex flex-col md:flex-row items-center justify-between gap-4 font-mono text-[10px] text-gray-500 uppercase tracking-widest bg-transparent border-dashed">
<div className="flex items-center gap-2 cursor-pointer hover:text-white transition-colors">
<div className="relative flex items-center justify-center w-2 h-2">
<div className="absolute w-full h-full bg-emerald-500 rounded-none animate-ping opacity-70"></div>
<div className="relative w-1.5 h-1.5 bg-emerald-500 rounded-none shadow-[0_0_8px_rgba(16,185,129,0.8)]"></div>
</div>
        All Systems Operational
      </div>
<div className="flex items-center gap-6">
<a className="hover:text-white transition-colors" href="#">Privacy</a>
<a className="hover:text-white transition-colors" href="#">Terms</a>
<span>© 2026 Lumen Vault</span>
</div>
</div>
</div>
</footer>

    </>
  );
}
