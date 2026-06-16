import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
tailwind.config = {
theme: {
extend: {
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



window.dataLayer = window.dataLayer || [];
function gtag(){dataLayer.push(arguments);}
gtag('js', new Date());
gtag('config', 'G-2M6V79H761');



        document.addEventListener("DOMContentLoaded", () => {
            const observerOptions = {
                root: null,
                rootMargin: '0px',
                threshold: 0.1
            };

            const observer = new IntersectionObserver((entries) => {
                let delay = 0.1;
                entries.forEach(entry => {
                    if (entry.isIntersecting) {
                        entry.target.style.animationDelay = `${delay}s`;
                        entry.target.classList.add('animate-enter');
                        observer.unobserve(entry.target);
                        delay += 0.1;
                    }
                });
            }, observerOptions);

            document.querySelectorAll('.reveal').forEach(el => {
                observer.observe(el);
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="vignette"></div>

<div className="absolute top-20 left-4 md:left-12 text-[#c24100] opacity-30 blur-[2px] text-sm md:text-base leading-relaxed pointer-events-none hidden lg:block z-0 select-none">
<div>Local Server:</div>
<br/>
<div>172.16.253.1</div>
<div className="ml-4">&gt; On-line G:</div>
<div className="ml-4">&gt; On-line H:</div>
<br/>
<div className="text-[#ff5500] opacity-60">-- You have been hacked --</div>
<br/>
<br/>
<div>Local Drivers:</div>
<br/>
<div>HDD 80Hz</div>
<div className="ml-4">&gt; Logical C:</div>
<div className="ml-4">&gt; Logical D:</div>
<br/>
<div>Extended:</div>
<br/>
<div>HDD 80Hz</div>
<div className="ml-4">&gt; Logical E:</div>
<div className="ml-4">&gt; Logical F:</div>
<div className="ml-4">&gt; Unallocated</div>
</div>

<div className="absolute bottom-20 right-4 md:right-12 text-[#c24100] opacity-30 blur-[3px] text-sm md:text-base leading-relaxed pointer-events-none hidden lg:block z-0 select-none text-right">
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<div>TXT     ___ Downloaded.</div>
<br/>
<div>root@sys_admin:~# _</div>
</div>

<section className="relative w-full min-h-screen flex flex-col items-center justify-center pt-16 pb-12 overflow-hidden px-4 md:px-6 z-10">

<div className="reveal relative z-20 perspective-[1000px] mt-12 md:mt-0">

<div className="absolute inset-0 bg-black/80 blur-3xl translate-y-24 scale-90 rounded-full"></div>

<div className="relative w-[340px] h-[340px] md:w-[600px] md:h-[500px] bg-gradient-to-br from-[#dcd9ce] to-[#b4b1a6] rounded-2xl p-4 md:p-8 border-t border-l border-white/50 border-b-[12px] border-r-[8px] border-[#8a887d] shadow-[20px_20px_40px_rgba(0,0,0,0.8)] flex flex-col items-center">

<div className="absolute top-2 w-3/4 flex justify-between px-8 gap-2 opacity-30">
<div className="h-1 flex-1 bg-black rounded-full"></div>
<div className="h-1 flex-1 bg-black rounded-full"></div>
<div className="h-1 flex-1 bg-black rounded-full"></div>
<div className="h-1 flex-1 bg-black rounded-full"></div>
</div>

<div className="absolute -top-4 -left-6 w-20 h-20 bg-[#fef08a] rotate-[-8deg] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-2 text-black font-sans text-xs flex flex-col justify-center border border-black/10 z-30">
<div className="opacity-50 text-xs mb-1">Password</div>
<div className="font-bold font-serif text-sm">guest123?</div>
</div>

<div className="absolute bottom-12 -left-8 w-16 h-16 bg-[#fde047] rotate-[12deg] shadow-[2px_6px_10px_rgba(0,0,0,0.4)] p-1.5 text-black font-sans text-xs border border-black/10 z-30">
<img alt="smiley face drawing" className="w-full h-full opacity-60" src="data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 24 24' fill='none' stroke='black' strokeWidth='2' strokeLinecap='round' strokeLinejoin='round'%3E%3Ccircle cx='12' cy='12' r='10'/%3E%3Cpath d='M8 14s1.5 2 4 2 4-2 4-2'/%3E%3Cline x1='9' y1='9' x2='9.01' y2='9'/%3E%3Cline x1='15' y1='9' x2='15.01' y2='9'/%3E%3C/svg%3E"/>
</div>

<div className="absolute -top-2 -right-4 w-14 h-14 bg-[#fef08a] rotate-[15deg] shadow-[4px_4px_10px_rgba(0,0,0,0.5)] p-1 text-black font-sans text-xs border border-black/10 z-30 text-center flex items-center justify-center font-bold uppercase text-red-700 border-red-700/20">
                    DO NOT<br/>TURN OFF
                </div>

<div className="w-full h-full bg-[#141414] rounded-xl p-3 md:p-5 border-[3px] border-[#333] border-b-[#555] shadow-[inset_0_0_30px_rgba(0,0,0,1)] relative flex flex-col">

<div className="flex-1 rounded-[2rem] bg-[#080100] overflow-hidden relative border-2 border-[#1a1a1a] flex flex-col p-4 md:p-6 text-xs md:text-sm text-[#ff5500] shadow-[inset_0_0_50px_rgba(0,0,0,0.9)] animate-flicker">

<div className="absolute top-[-20%] left-[-10%] w-[120%] h-[50%] bg-white/5 rotate-[-10deg] blur-xl rounded-[100%] pointer-events-none"></div>

<div className="relative z-10 flex flex-col h-full text-glow">

<div className="text-center font-pixel text-2xl md:text-5xl mb-6 tracking-tight relative mt-2 md:mt-4">
<span className="absolute top-0 left-0 -ml-1 opacity-50 text-[#ff003c]">CYBER_MONDAY</span>
<span className="absolute top-0 left-0 ml-1 opacity-50 text-[#00e1ff]">CYBER_MONDAY</span>
<span className="relative">CYBER_MONDAY</span>
</div>

<div className="flex-1 flex flex-col font-mono text-xs md:text-sm leading-tight border border-[#ff5500]/30 p-2 md:p-4 bg-[#120400]/50">

<div className="flex border-b border-[#ff5500]/50 pb-2 mb-2">
<div className="w-[30%] border-r border-[#ff5500]/50 pl-1">Local Drivers:</div>
<div className="w-[35%] border-r border-[#ff5500]/50 pl-4">Folders:</div>
<div className="w-[35%] pl-4">Condition:</div>
</div>

<div className="flex flex-1 overflow-hidden">

<div className="w-[30%] border-r border-[#ff5500]/50 pr-2 pt-1 flex flex-col gap-1 text-[#c24100]">
<div>HDD 80Hz</div>
<div className="pl-2">&gt; Logical C:</div>
<div className="pl-2">&gt; Logical D:</div>
<div className="mt-4 mb-1 border-b border-[#ff5500]/20 pb-1">Extended:</div>
<div>HDD 80Hz</div>
<div className="pl-2 text-[#ff5500]">&gt; Logical E:</div>
<div className="pl-2">&gt; Logical F:</div>
<div className="pl-2">&gt; Unallocated</div>
</div>

<div className="w-[35%] border-r border-[#ff5500]/50 pl-4 pt-1 flex flex-col gap-1">
<div className="flex justify-between items-center pr-2"><span>Name</span> <iconify-icon className="w-4 h-4 text-[#ff5500]/70" icon="solar:folder-open-linear" style={{strokeWidth: '1.5'}}></iconify-icon></div>
<div className="text-[#ffdfd1]">bank_account</div>
<div className="text-[#ffdfd1]">passwords</div>
<div className="text-[#ffdfd1]">accounts</div>
<div className="text-[#ffdfd1]">secret_files</div>
<div className="text-[#ffdfd1]">safe_number</div>
<div>documents</div>
<div>logs</div>
<div>cp_prn</div>
<div>crypto_secret_key</div>
<div>home_porn</div>
</div>

<div className="w-[35%] pl-4 pt-1 flex flex-col gap-1 text-[#c24100]">
<div className="opacity-0">Status</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
<div>--- Downloaded.</div>
</div>
</div>
<div className="mt-auto pt-2 text-[#ff3333] text-xs">
                                    - You have been hacked by _Crack_heads_boy_z -
                                </div>
</div>
</div>
</div>

<div className="absolute bottom-2 left-1/2 -translate-x-1/2 flex items-center justify-center">
<div className="text-[#555] font-sans text-xs font-bold tracking-tight border border-[#444] rounded-full px-2 py-0.5 shadow-inner">SYS</div>
</div>

<div className="absolute bottom-2 right-4 flex gap-2">
<div className="w-4 h-1.5 bg-black/50 rounded-sm border border-white/5 shadow-inner"></div>
<div className="w-4 h-1.5 bg-black/50 rounded-sm border border-white/5 shadow-inner"></div>
<div className="w-1.5 h-1.5 rounded-full bg-[#ff5500] shadow-[0_0_8px_#ff5500] border border-white/20"></div>
</div>
</div>
</div>

<div className="w-[150px] md:w-[200px] h-8 md:h-12 bg-gradient-to-b from-[#b4b1a6] to-[#8a887d] mx-auto rounded-b-xl border-x-[4px] border-b-[8px] border-[#666] shadow-2xl relative z-10">
<div className="w-full h-full bg-black/10 rounded-b-xl"></div>
</div>
<div className="w-[200px] md:w-[300px] h-4 bg-[#a4a196] mx-auto rounded-full mt-[-4px] shadow-xl border-b-2 border-[#555]"></div>
</div>

<div className="reveal max-w-xl text-center z-20 mt-16 md:mt-24 flex flex-col items-center">
<p className="text-sm md:text-base font-medium text-[#c24100] mb-6 border border-[#c24100]/30 bg-[#0a0200]/80 p-4 inline-block shadow-lg">
                &gt; SYSTEM BREACH DETECTED.<br/>
                &gt; UNAUTHORIZED DISCOUNTS APPLIED TO MAIN_FRAME.<br/>
                &gt; EXECUTE PAYLOAD TO ACCESS DEALS_
            </p>
<button className="border-2 border-[#ff5500] text-[#ff5500] bg-transparent px-8 py-4 text-base font-bold tracking-tight hover:bg-[#ff5500] hover:text-black transition-colors duration-200 uppercase flex items-center gap-3 group text-glow hover:box-glow">
                [ EXECUTE ]
                <span className="group-hover:animate-pulse">_</span>
</button>
</div>
</section>

<div className="reveal w-full border-y border-[#ff5500]/40 py-2 md:py-3 overflow-hidden bg-[#050100] relative z-20 flex shadow-[0_0_15px_rgba(255,85,0,0.1)]">
<div className="animate-marquee">
<div className="marquee-content gap-6 items-center text-sm md:text-base font-bold tracking-tight text-[#ff5500] uppercase text-glow">
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
</div>
<div className="marquee-content gap-6 items-center text-sm md:text-base font-bold tracking-tight text-[#ff5500] uppercase text-glow">
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
<span>[ OVERRIDE INITIATED ]</span> <span className="text-[#c24100]">//</span>
<span>DOWNLOADING ASSETS...</span> <span className="text-[#c24100]">//</span>
</div>
</div>
</div>

<section className="py-24 px-4 md:px-12 w-full max-w-[1200px] mx-auto z-20 relative">
<div className="reveal mb-12 flex justify-between items-end border-b border-[#ff5500]/30 pb-4">
<h2 className="text-2xl md:text-4xl tracking-tight font-pixel text-[#ff5500] text-glow">&gt; EXTRACTED_FILES</h2>
<a className="text-sm md:text-base text-[#c24100] hover:text-[#ff5500] transition-colors" href="#">[VIEW_ALL]</a>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">

<div className="reveal bg-[#050100] aspect-square md:aspect-[4/3] relative flex flex-col overflow-hidden border border-[#ff5500]/40 box-glow group">

<div className="h-8 bg-[#140500] border-b border-[#ff5500]/40 flex items-center justify-between px-3">
<span className="text-xs text-[#c24100]">term_01.exe</span>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-sm border border-[#c24100]"></div>
<div className="w-2.5 h-2.5 rounded-sm border border-[#c24100]"></div>
<div className="w-2.5 h-2.5 rounded-sm border border-[#ff5500] bg-[#ff5500]/20"></div>
</div>
</div>

<div className="flex-1 w-full p-4 md:p-6 overflow-hidden relative text-[#c24100] text-xs leading-none opacity-80 group-hover:opacity-100 transition-opacity">
<div className="absolute top-0 left-0 w-full h-full bg-[linear-gradient(transparent_50%,rgba(0,0,0,0.5)_50%)] bg-[length:100%_4px] pointer-events-none z-10"></div>

<div className="space-y-1 font-mono break-all select-none">
                        0x0000: 48 65 6C 6C 6F 20 57 6F 72 6C 64 21 0A 00 00 00  Hello World!....
                        0x0010: 2F 2F 20 49 6E 69 74 69 61 6C 69 7A 69 6E 67 20  // Initializing 
                        0x0020: 6D 61 69 6E 66 72 61 6D 65 2E 2E 2E 0A 5B 4F 4B  mainframe...[OK
                        0x0030: 5D 20 42 79 70 61 73 73 69 6E 67 20 66 69 72 65  ] Bypassing fire
                        0x0040: 77 61 6C 6C 2E 2E 2E 0A 5B 45 52 52 4F 52 5D 20  wall...[ERROR] 
                        0x0050: 52 65 74 72 79 69 6E 67 2E 2E 2E 0A 5B 4F 4B 5D  Retrying...[OK]
                        0x0060: 41 63 63 65 73 73 20 67 72 61 6E 74 65 64 2E 0A  Access granted.
                        0x0070: 44 6F 77 6E 6C 6F 61 64 69 6E 67 20 61 73 73 65  Downloading asse
                        0x0080: 74 73 2E 2E 2E 20 31 30 30 25 0A 45 78 65 63 75  ts... 100%.Execu
                    </div>
</div>
<div className="relative z-20 p-6 pt-0 bg-[#050100] border-t border-[#ff5500]/20 flex justify-between items-end">
<div>
<div className="text-xs text-[#c24100] mb-1">STATUS: ENCRYPTED</div>
<h3 className="text-base md:text-xl font-bold text-[#ff5500] uppercase text-glow tracking-tight">Analog_Receiver_v2</h3>
</div>
<button className="border border-[#ff5500] p-2 hover:bg-[#ff5500] hover:text-black transition-colors flex items-center justify-center">
<iconify-icon className="w-4 h-4" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>

<div className="reveal bg-[#050100] aspect-square md:aspect-[4/3] relative flex flex-col overflow-hidden border border-[#ff5500]/40 box-glow group">

<div className="h-8 bg-[#140500] border-b border-[#ff5500]/40 flex items-center justify-between px-3">
<span className="text-xs text-[#c24100]">radar_scan.sh</span>
<div className="flex gap-2">
<div className="w-2.5 h-2.5 rounded-sm border border-[#c24100]"></div>
<div className="w-2.5 h-2.5 rounded-sm border border-[#c24100]"></div>
<div className="w-2.5 h-2.5 rounded-sm border border-[#ff5500] bg-[#ff5500]/20"></div>
</div>
</div>

<div className="flex-1 w-full flex items-center justify-center p-6 relative overflow-hidden bg-[radial-gradient(circle_at_center,#140500_0%,#050100_100%)]">
<div className="relative w-40 h-40 md:w-56 md:h-56 rounded-full border border-[#c24100]/50 flex items-center justify-center group-hover:scale-105 transition-transform duration-700">
<div className="absolute inset-4 rounded-full border border-[#c24100]/30"></div>
<div className="absolute inset-10 rounded-full border border-[#c24100]/20"></div>
<div className="absolute inset-0 border-t border-[#ff5500] rounded-full animate-[spin_3s_linear_infinite] shadow-[0_-5px_15px_rgba(255,85,0,0.5)]"></div>

<div className="absolute top-1/4 right-1/4 w-1.5 h-1.5 bg-[#ff5500] rounded-full shadow-[0_0_5px_#ff5500] animate-pulse"></div>
<div className="absolute bottom-1/3 left-1/4 w-2 h-2 bg-red-500 rounded-full shadow-[0_0_5px_red] animate-ping"></div>

<div className="w-full h-px bg-[#c24100]/30 absolute top-1/2 -translate-y-1/2"></div>
<div className="h-full w-px bg-[#c24100]/30 absolute left-1/2 -translate-x-1/2"></div>
</div>
</div>
<div className="relative z-20 p-6 pt-0 bg-[#050100] border-t border-[#ff5500]/20 flex justify-between items-end">
<div>
<div className="text-xs text-[#c24100] mb-1">STATUS: DEPLOYING</div>
<h3 className="text-base md:text-xl font-bold text-[#ff5500] uppercase text-glow tracking-tight">Portable_Display_Node</h3>
</div>
<button className="border border-[#ff5500] p-2 hover:bg-[#ff5500] hover:text-black transition-colors flex items-center justify-center">
<iconify-icon className="w-4 h-4" icon="solar:download-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</button>
</div>
</div>
</div>
</section>

<section className="py-12 md:py-24 px-4 md:px-12 w-full max-w-[1200px] mx-auto z-20 relative">
<div className="grid grid-cols-1 md:grid-cols-3 gap-6">

<div className="reveal md:col-span-2 bg-[#050100] border border-[#ff5500]/40 p-6 md:p-8 flex flex-col justify-between min-h-[250px] relative overflow-hidden group">
<div className="absolute inset-0 bg-[linear-gradient(90deg,transparent_95%,rgba(255,85,0,0.05)_100%)] bg-[length:20px_100%]"></div>
<div className="flex items-center gap-3 mb-6 relative z-10 border-b border-[#ff5500]/20 pb-4">
<iconify-icon className="w-5 h-5 text-[#ff5500]" icon="solar:bolt-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-lg md:text-xl font-bold uppercase tracking-tight text-[#ff5500]">&gt; PACKET_ROUTING_OPT</h3>
</div>
<div className="relative z-10 font-mono text-sm text-[#c24100] space-y-2">
<p>INITIATING SECURE TRANSFER PROTOCOL...</p>
<p className="text-[#ffdfd1]">Digital assets provisioned instantly via P2P nodes.</p>
<p>Hardware logic dispatched through priority subterranean logistics network.</p>
<div className="mt-4 flex items-center text-[#ff5500]"><span className="mr-2 border border-[#ff5500] px-1 animate-pulse">_</span> AWAITING ACKNOWLEDGMENT</div>
</div>
</div>

<div className="reveal bg-[#050100] border border-[#c24100]/40 p-6 flex flex-col justify-between min-h-[250px]">
<div className="flex items-center gap-3 mb-6 border-b border-[#c24100]/20 pb-4">
<iconify-icon className="w-5 h-5 text-[#ff5500]" icon="solar:shield-warning-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-bold uppercase tracking-tight text-[#c24100]">&gt; AUTH_VERIFIED</h3>
</div>
<div className="font-mono text-sm text-[#c24100] space-y-2">
<p className="text-[#ff5500]">WARNING: STRICT QA ACTIVE</p>
<p>Every packet undergoes cryptographic hashing and physical stress-testing prior to deployment.</p>
</div>
</div>

<div className="reveal bg-[#050100] border border-[#c24100]/40 p-6 flex flex-col justify-between min-h-[250px]">
<div className="flex items-center gap-3 mb-6 border-b border-[#c24100]/20 pb-4">
<iconify-icon className="w-5 h-5 text-[#c24100]" icon="solar:restart-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
<h3 className="text-base font-bold uppercase tracking-tight text-[#c24100]">&gt; ROLLBACK_PROTOCOL</h3>
</div>
<div className="font-mono text-sm text-[#c24100] space-y-2">
<p>System error? Artifact malfunction?</p>
<p className="text-[#ffdfd1]">Execute physical return within 30 cycles.</p>
<p>Logs will be purged. No traces left.</p>
</div>
</div>

<div className="reveal md:col-span-2 bg-[#170800] border border-[#ff5500] p-6 md:p-8 flex flex-col md:flex-row items-center justify-between min-h-[250px] relative box-glow">
<div className="relative z-10 w-full max-w-sm mb-8 md:mb-0">
<div className="text-xs font-bold tracking-tight text-[#ff5500] mb-2">&gt; NODE_CONNECTION</div>
<h3 className="text-2xl md:text-3xl tracking-tight font-pixel text-white mb-4">JOIN THE SYNDICATE</h3>
<p className="text-sm text-[#c24100] mb-6">Gain root access to future exploits, encrypted colorways, and closed-circuit events.</p>
<button className="bg-transparent border border-[#ff5500] text-[#ff5500] px-4 py-2 text-sm font-bold uppercase hover:bg-[#ff5500] hover:text-black transition-colors inline-flex items-center gap-2 group">
                        [ ESTABLISH LINK ] <span className="group-hover:translate-x-1 transition-transform">-&gt;</span>
</button>
</div>

<div className="relative w-48 h-48 md:w-64 md:h-64 flex-shrink-0 flex items-center justify-center font-mono text-[#ff5500] text-xs md:text-xs leading-none text-center select-none opacity-50">
<pre>   _____
  /     \
 | () () |
  \  ^  /
   |||||
   |||||
                    </pre>

<div className="absolute inset-8 border border-red-500/50 flex items-center justify-center">
<div className="w-full h-px bg-red-500/30"></div>
<div className="h-full w-px bg-red-500/30 absolute"></div>
</div>
</div>
</div>
</div>
</section>

<section className="w-full bg-[#050200] py-24 md:py-32 px-4 md:px-12 relative overflow-hidden border-t border-[#ff5500]/20">
<div className="max-w-[1200px] mx-auto flex flex-col lg:flex-row items-center gap-16 lg:gap-24 relative z-10">

<div className="reveal w-full lg:w-1/2">
<div className="text-[#c24100] text-xs mb-4 uppercase">&gt; executing hw_diag.exe</div>
<h2 className="font-pixel text-3xl md:text-5xl tracking-tight text-white mb-8 leading-tight text-glow">SYSTEM<br/>DIAGNOSTICS_</h2>
<div className="space-y-4 font-mono text-sm md:text-base">
<div className="border-b border-[#c24100]/30 pb-2 flex justify-between">
<span className="text-[#c24100]">[CORE_ENGINE]</span>
<span className="text-[#ff5500]">CRT Emulation Logic v.2.4</span>
</div>
<div className="border-b border-[#c24100]/30 pb-2 flex justify-between">
<span className="text-[#c24100]">[CHASSIS_ARMOR]</span>
<span className="text-[#ff5500]">Injected Polycarbonate Shell</span>
</div>
<div className="border-b border-[#c24100]/30 pb-2 flex justify-between">
<span className="text-[#c24100]">[I/O_PORTS]</span>
<span className="text-[#ff5500]">Analog Video / Type-C Power</span>
</div>
<div className="border-b border-[#c24100]/30 pb-2 flex justify-between">
<span className="text-[#c24100]">[AUDIO_OUT]</span>
<span className="text-[#ff5500]">Mono Synthesizer Relay</span>
</div>
</div>
</div>

<div className="reveal w-full lg:w-1/2 flex justify-center relative min-h-[300px] md:min-h-[400px]">

<div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,85,0,0.15),transparent_60%)]"></div>

<div className="relative w-48 h-48 md:w-72 md:h-72 perspective-[1000px] flex items-center justify-center animate-[float_6s_ease-in-out_infinite]">
<div className="w-full h-full border-2 border-[#ff5500]/60 rounded-sm transform-style-preserve-3d animate-[spin_10s_linear_infinite] relative box-glow">
<div className="absolute inset-0 border-2 border-[#c24100] rounded-sm" style={{transform: 'translateZ(-80px) rotateX(45deg)'}}></div>
<div className="absolute inset-4 border border-white/30 bg-[#170800]/50 flex items-center justify-center backdrop-blur-sm" style={{transform: 'translateZ(80px) rotateY(45deg)'}}>
<span className="text-[#ff5500] font-bold text-xl font-pixel tracking-tight">SYS</span>
</div>

<div className="absolute top-0 left-0 w-full h-full border border-[#ff5500]/30" style={{transform: 'rotateX(90deg) translateZ(36px)'}}></div>
<div className="absolute top-0 left-0 w-full h-full border border-[#ff5500]/30" style={{transform: 'rotateY(90deg) translateZ(36px)'}}></div>
</div>
</div>
</div>
</div>
</section>

<footer className="w-full bg-[#050100] pt-16 pb-8 px-4 md:px-12 border-t border-[#ff5500]">
<div className="max-w-[1200px] mx-auto flex flex-col md:flex-row justify-between items-start gap-12 mb-16 relative z-10">
<div className="reveal max-w-xs">
<div className="text-3xl tracking-tight font-pixel mb-4 text-[#ff5500] text-glow">SYS_</div>
<p className="text-xs md:text-sm text-[#c24100] mb-6">&gt; Bridging physical hardware with analog nostalgia. End of transmission.</p>
<div className="flex gap-4">
<a className="border border-[#c24100] p-2 hover:bg-[#ff5500] hover:text-black transition-colors text-[#c24100] flex items-center justify-center" href="#">
<iconify-icon className="w-4 h-4" icon="solar:code-square-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
<a className="border border-[#c24100] p-2 hover:bg-[#ff5500] hover:text-black transition-colors text-[#c24100] flex items-center justify-center" href="#">
<iconify-icon className="w-4 h-4" icon="solar:code-linear" style={{strokeWidth: '1.5'}}></iconify-icon>
</a>
</div>
</div>
<div className="reveal flex flex-wrap gap-12 md:gap-24 font-mono text-sm">
<div className="flex flex-col gap-3">
<h4 className="text-[#ff5500] font-bold uppercase mb-2">&gt; Directory_1</h4>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./hardware</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./software</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./accessories</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./archive</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-[#ff5500] font-bold uppercase mb-2">&gt; Directory_2</h4>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./about_us</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./dev_log</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./careers</a>
<a className="text-[#c24100] hover:text-[#ffdfd1] transition-colors" href="#">./ping</a>
</div>
<div className="flex flex-col gap-3">
<h4 className="text-red-500 font-bold uppercase mb-2">&gt; Legal</h4>
<a className="text-[#c24100] hover:text-red-400 transition-colors" href="#">./terms_of_service</a>
<a className="text-[#c24100] hover:text-red-400 transition-colors" href="#">./privacy_policy</a>
</div>
</div>
</div>
<div className="reveal max-w-[1200px] mx-auto pt-6 border-t border-[#c24100]/30 flex flex-col md:flex-row justify-between items-center gap-4 relative z-10 font-mono text-xs">
<p className="text-[#c24100]">(c) 2024 SYS_CORE. All rights reserved.</p>
<div className="flex items-center gap-2 text-[#ff5500]">
<div className="w-2 h-2 bg-[#ff5500] shadow-[0_0_5px_#ff5500] animate-pulse"></div>
                CONNECTION SECURE
            </div>
</div>

<div className="reveal max-w-[1200px] mx-auto mt-4 text-[#ff5500] font-mono text-sm relative z-10">
            root@sys:~# <span className="cursor-blink bg-[#ff5500] w-2 h-4 inline-block align-middle ml-1"></span>
</div>
</footer>


    </>
  );
}
