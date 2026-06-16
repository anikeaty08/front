import React, { useEffect } from 'react';

export default function App() {
  useEffect(() => {
    try {
      
try{if(window.parent&&window.parent!==window){window.parent.promotekit_referral="1fd2949a-d22c-431b-92bf-02d4ad04ee24";window.parent.document.cookie="promotekit_referral=1fd2949a-d22c-431b-92bf-02d4ad04ee24;path=/;domain=.aura.build;max-age=31536000"}}catch(e){}



// Configure Tailwind to include our custom 3D transform utilities
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
addUtilities({..rotateXUtilities,..rotateYUtilities,..rotateZUtilities,..perspectiveUtilities,..transformStyleUtilities,
});
}
]
};
// Language Switcher Logic
function setLanguage(lang) {
const enElements = document.querySelectorAll('[data-lang="en"]');
const zhElements = document.querySelectorAll('[data-lang="zh"]');
if (lang === 'zh') {
enElements.forEach(el => el.classList.add('hidden'));
zhElements.forEach(el => el.classList.remove('hidden'));
document.getElementById('lang-btn-zh').classList.add('text-neutral-900', 'font-bold');
document.getElementById('lang-btn-zh').classList.remove('text-neutral-400', 'font-medium');
document.getElementById('lang-btn-en').classList.remove('text-neutral-900', 'font-bold');
document.getElementById('lang-btn-en').classList.add('text-neutral-400', 'font-medium');
} else {
zhElements.forEach(el => el.classList.add('hidden'));
enElements.forEach(el => el.classList.remove('hidden'));
document.getElementById('lang-btn-en').classList.add('text-neutral-900', 'font-bold');
document.getElementById('lang-btn-en').classList.remove('text-neutral-400', 'font-medium');
document.getElementById('lang-btn-zh').classList.remove('text-neutral-900', 'font-bold');
document.getElementById('lang-btn-zh').classList.add('text-neutral-400', 'font-medium');
}
}

    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<nav className="fixed top-0 left-0 w-full z-50 bg-white/90 backdrop-blur-sm border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6 h-20 flex items-center justify-between">
<a className="text-lg font-semibold tracking-tighter uppercase flex items-center gap-2" href="#">
<div className="w-3 h-3 bg-orange-600"></div>
<span data-lang="en">ANNA GAO</span><span className="hidden" data-lang="zh">高安娜</span>
</a>
<div className="hidden md:flex items-center gap-8 text-xs font-medium tracking-wide uppercase text-neutral-600">
<a className="hover:text-black transition-colors" href="#">
<span data-lang="en">Work</span><span className="hidden" data-lang="zh">作品</span>
</a>
<a className="hover:text-black transition-colors" href="#">
<span data-lang="en">Architecture</span><span className="hidden" data-lang="zh">建筑</span>
</a>
<a className="hover:text-black transition-colors" href="#">
<span data-lang="en">About</span><span className="hidden" data-lang="zh">关于</span>
</a>
</div>
<div className="flex items-center gap-6">

<div className="flex items-center gap-2 text-xs uppercase tracking-widest cursor-pointer select-none">
<span className="text-neutral-900 font-bold hover:text-orange-600 transition-colors" id="lang-btn-en" onclick="setLanguage('en')">EN</span>
<span className="text-neutral-300">/</span>
<span className="text-neutral-400 font-medium hover:text-orange-600 transition-colors" id="lang-btn-zh" onclick="setLanguage('zh')">中</span>
</div>
<button className="bg-neutral-900 text-white text-[10px] uppercase tracking-widest font-medium px-6 py-3 hover:bg-orange-600 transition-colors duration-300 hidden sm:block">
<span data-lang="en">Download CV</span><span className="hidden" data-lang="zh">下载简历</span>
</button>
</div>
</div>
</nav>

<header className="md:pt-48 md:pb-32 overflow-hidden selection:bg-orange-600 selection:text-white bg-white border-neutral-200 border-b pt-32 pb-20 relative">

<div className="absolute inset-0 pointer-events-none opacity-[0.03]" style={{backgroundImage: 'linear-gradient(#171717 1px, transparent 1px), linear-gradient(90deg, #171717 1px, transparent 1px)', backgroundSize: '40px 40px'}}></div>

<div className="absolute inset-0 bg-gradient-to-b from-transparent via-transparent to-white pointer-events-none"></div>
<div className="max-w-screen-2xl mx-auto px-6 relative z-10">
<div className="grid grid-cols-1 lg:grid-cols-12 gap-16 items-center">

<div className="lg:col-span-7 flex flex-col items-start relative">

<div className="absolute -left-6 top-0 bottom-0 w-px bg-neutral-200 hidden xl:block">
<div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-1 h-8 bg-orange-600"></div>
</div>

<div className="mb-8 flex items-center gap-3 group cursor-default">
<div className="h-px w-8 bg-orange-600 group-hover:w-12 transition-all duration-300"></div>
<span className="text-xs font-semibold tracking-widest uppercase text-orange-600">
<span data-lang="en">UI/UX &amp; Product Design</span>
<span className="hidden" data-lang="zh">UI/UX 与产品设计</span>
</span>
</div>

<h1 className="text-5xl md:text-7xl lg:text-8xl font-semibold tracking-tighter text-neutral-900 leading-[0.9] mb-8">
<span data-lang="en">
                        ARCHITECTING <br/>
                        THE <span className="text-neutral-300 transition-colors duration-500 hover:text-neutral-900 cursor-default">DIGITAL</span>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600">
                            INTERFACE.
                        </span>
</span>
<span className="hidden" data-lang="zh">
                        构建 <br/>
<span className="text-neutral-300 transition-colors duration-500 hover:text-neutral-900 cursor-default">数字</span>
<span className="relative inline-block text-transparent bg-clip-text bg-gradient-to-r from-neutral-900 via-neutral-800 to-neutral-600">
                            界面的建筑逻辑
                        </span>
</span>
</h1>

<p className="text-lg md:text-xl text-neutral-500 font-light leading-relaxed max-w-2xl mb-10 border-l border-neutral-200 pl-6">
<span data-lang="en">Translating spatial logic into digital products. From a Master of Architecture at UPenn to designing Web3 AI platforms and complex ToB systems.</span>
<span className="hidden" data-lang="zh">将空间逻辑转化为数字产品。从宾夕法尼亚大学建筑硕士，到设计Web3人工智能平台与复杂的ToB系统。</span>
</p>

<div className="flex flex-col sm:flex-row gap-6 items-start sm:items-center w-full">
<button className="group relative px-8 py-4 bg-neutral-900 text-white text-xs font-semibold uppercase tracking-widest overflow-hidden transition-all hover:bg-orange-600">
<span className="relative z-10 flex items-center gap-2">
<span data-lang="en">View Portfolio</span><span className="hidden" data-lang="zh">查看作品集</span>
<iconify-icon className="group-hover:translate-x-1 transition-transform duration-300" icon="lucide:arrow-right"></iconify-icon>
</span>
</button>
<div className="flex items-center gap-2 text-xs font-mono text-neutral-400">
<iconify-icon icon="lucide:map-pin" width="12"></iconify-icon>
<span data-lang="en">Shanghai / Remote</span><span className="hidden" data-lang="zh">上海 / 远程</span>
</div>
</div>
</div>

<div className="lg:col-span-5 relative h-[500px] lg:h-[650px] w-full mt-12 lg:mt-0 perspective-midrange">

<div className="absolute top-0 right-0 w-11/12 h-5/6 bg-neutral-100 overflow-hidden shadow-2xl transition-all duration-700 ease-out hover:-translate-y-2 group border border-neutral-200">

<img alt="Structure" className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000" src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=2160&amp;q=80"/>
<div className="absolute inset-0 z-10 bg-neutral-900 overflow-hidden mix-blend-multiply opacity-20"></div>

<div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)] bg-[size:40px_40px] pointer-events-none"></div>

<div className="absolute top-6 right-6 flex flex-col items-end gap-1 opacity-90">
<div className="bg-black/80 backdrop-blur px-3 py-1 border border-white/10">
<span className="text-[10px] font-mono text-orange-500 uppercase tracking-widest">System Active</span>
</div>
</div>
</div>

<div className="absolute bottom-12 left-0 w-56 aspect-square bg-orange-600 p-6 flex flex-col justify-between shadow-[0_20px_40px_-10px_rgba(234,88,12,0.3)] z-10 transition-transform hover:scale-105 duration-300 cursor-default">
<div className="flex justify-between items-start">
<iconify-icon className="text-white w-6 h-6 opacity-80" icon="lucide:layers"></iconify-icon>
<span className="w-2 h-2 bg-white rounded-full animate-pulse"></span>
</div>
<div className="">
<span className="block text-4xl font-light text-white tracking-tighter mb-2">GPA 3.85</span>
<div className="w-full h-px bg-white/30 mb-2"></div>
<span className="text-[10px] font-bold text-white/90 uppercase tracking-widest">
<span data-lang="en">UPenn Graduate</span><span className="hidden" data-lang="zh">宾大硕士毕业</span>
</span>
</div>
</div>

<div className="absolute top-16 -left-4 bg-white/90 backdrop-blur p-4 shadow-lg border border-neutral-200 hidden md:block w-48 z-20">
<div className="flex items-center justify-between mb-4 pb-2 border-b border-neutral-100">
<span className="text-[10px] font-mono uppercase text-neutral-400">
<span data-lang="en">Skill Stack</span><span className="hidden" data-lang="zh">技能栈</span>
</span>
<div className="w-1.5 h-1.5 rounded-full bg-orange-500"></div>
</div>
<div className="space-y-3">
<div className="flex justify-between items-center text-[10px] font-mono text-neutral-600">
<span>Figma / UI</span>
<span>EXP</span>
</div>
<div className="w-full h-1 bg-neutral-100 overflow-hidden">
<div className="w-full h-full bg-neutral-900"></div>
</div>
<div className="flex justify-between items-center text-[10px] font-mono text-neutral-600 pt-1">
<span>Web3 / AI</span>
<span>DEV</span>
</div>
<div className="w-full h-1 bg-neutral-100 overflow-hidden">
<div className="w-[85%] h-full bg-orange-500"></div>
</div>
</div>
</div>
</div>
</div>
</div>
</header>

<section className="py-24 border-b border-neutral-200 bg-neutral-50/50">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12">
<div className="md:col-span-1 border-t border-black pt-4">
<h3 className="text-xs font-semibold uppercase tracking-widest mb-2">
<span data-lang="en">Education</span><span className="hidden" data-lang="zh">教育背景</span>
</h3>
<p className="text-sm text-neutral-500 font-serif italic">
<span data-lang="en">Ivy League Architecture Background.</span>
<span className="hidden" data-lang="zh">常春藤盟校建筑背景。</span>
</p>
</div>
<div className="md:col-span-3">
<div className="grid grid-cols-1 md:grid-cols-3 gap-8">
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="flex items-start gap-2">
<span className="text-4xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">UPenn</span>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
<span data-lang="en">Master of Architecture</span><span className="hidden" data-lang="zh">建筑学硕士</span>
</span>
<p className="text-xs text-neutral-600 mt-2 border-l border-neutral-200 pl-4">
<span data-lang="en">Integrated Product Design (IPD) focus. Published in Pressing Matters 4 times.</span>
<span className="hidden" data-lang="zh">综合产品设计 (IPD) 方向。作品四次入选 Pressing Matters 年鉴。</span>
</p>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="flex items-start gap-2">
<span className="text-4xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">Liverpool</span>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
<span data-lang="en">B.A. Architecture</span><span className="hidden" data-lang="zh">建筑学学士</span>
</span>
<p className="text-xs text-neutral-600 mt-2 border-l border-neutral-200 pl-4">
<span data-lang="en">First Class Honours. RIBA Part I Certified.</span>
<span className="hidden" data-lang="zh">一等荣誉学位。RIBA 第一阶段认证。</span>
</p>
</div>
<div className="flex flex-col gap-2 group cursor-pointer">
<div className="flex items-start gap-2">
<span className="text-4xl font-light tracking-tighter group-hover:text-orange-600 transition-colors">Multiple</span>
</div>
<span className="text-xs font-medium uppercase tracking-widest text-neutral-500">
<span data-lang="en">Design Disciplines</span><span className="hidden" data-lang="zh">设计跨界</span>
</span>
<p className="text-xs text-neutral-600 mt-2 border-l border-neutral-200 pl-4">
<span data-lang="en">Visual Identity, Digital Fabrication, Data App Interaction.</span>
<span className="hidden" data-lang="zh">视觉识别，数字建造，数据应用交互设计。</span>
</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-orange-600 text-white py-32">
<div className="max-w-screen-2xl mx-auto px-6 grid grid-cols-1 md:grid-cols-12 gap-12 items-center">
<div className="md:col-span-3 hidden md:block">
<iconify-icon className="opacity-50" height="64" icon="lucide:pen-tool" strokeWidth="1.5" width="64"></iconify-icon>
</div>
<div className="md:col-span-9 relative">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight leading-tight mb-8">
<span data-lang="en">"Design efficiency and quality are paramount. I bridge the gap between high-fidelity visuals and rigorous development specifications."</span>
<span className="hidden" data-lang="zh">“设计效率与质量至关重要。我致力于弥合高保真视觉效果与严谨开发规范之间的鸿沟。”</span>
</h2>
<div className="flex items-center gap-4">
<div className="w-12 h-[1px] bg-white/50"></div>
<span className="text-sm font-medium tracking-wide uppercase">
<span data-lang="en">Anna Gao, Design Lead</span><span className="hidden" data-lang="zh">高安娜, 设计主管</span>
</span>
</div>
</div>
</div>
</section>

<section className="bg-white py-32 border-b border-neutral-200">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="flex flex-col md:flex-row justify-between items-end mb-20">
<div>
<h2 className="text-4xl md:text-5xl font-semibold tracking-tighter mb-4">
<span data-lang="en">Professional Experience</span><span className="hidden" data-lang="zh">专业经历</span>
</h2>
<p className="text-neutral-500 max-w-md">
<span data-lang="en">Leading design across Web3, AI, and Brand Strategy.</span>
<span className="hidden" data-lang="zh">主导 Web3、AI 及品牌策略领域的设计工作。</span>
</p>
</div>
<div className="hidden md:flex items-center gap-2 text-xs font-semibold uppercase tracking-widest text-neutral-400">
                 Timeline: 2021 — Present
            </div>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[1px] bg-neutral-200 border border-neutral-200">

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[450px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:bot" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">2023 - Present</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">FLock.io</h3>
<p className="text-xs uppercase tracking-widest text-orange-600 mb-4 group-hover:text-white/60">
<span data-lang="en">AI Blockchain | Remote Lead</span><span className="hidden" data-lang="zh">AI 区块链 | 远程设计主管</span>
</p>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
<span data-lang="en">Established 0-1 design systems for a Web3 AI co-creation platform. Aligned UI/UX with latest trends and ensured 100% development quality through close R&amp;D collaboration.</span>
<span className="hidden" data-lang="zh">为 Web3 AI 共创平台建立了 0-1 的设计系统。紧跟 UI/UX 趋势，通过与研发团队的紧密协作，确保 100% 的开发还原度。</span>
</p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<ul className="text-xs font-mono space-y-2 opacity-60">
<li>+ <span data-lang="en">Official Website Design</span><span className="hidden" data-lang="zh">官网设计</span></li>
<li>+ <span data-lang="en">System Guidelines</span><span className="hidden" data-lang="zh">系统规范</span></li>
<li>+ <span data-lang="en">Motion Design</span><span className="hidden" data-lang="zh">动效设计</span></li>
</ul>
</div>
</div>

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[450px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:layout-grid" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">2023 - Present</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Diverse Design Studio</h3>
<p className="text-xs uppercase tracking-widest text-orange-600 mb-4 group-hover:text-white/60">
<span data-lang="en">Design Lead</span><span className="hidden" data-lang="zh">设计主管</span>
</p>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
<span data-lang="en">Spearheading visual strategy for diverse clients including UltraX Trading Platform, FMG Brand Documentation, and the 706 Youth Space.</span>
<span className="hidden" data-lang="zh">主导多家客户的视觉策略，包括 UltraX 交易平台、FMG 品牌文档以及 706 青年空间。</span>
</p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<ul className="text-xs font-mono space-y-2 opacity-60">
<li>+ 400 Box Mini Program</li>
<li>+ 9grid Architecture Site</li>
<li>+ Melon App UI</li>
</ul>
</div>
</div>

<div className="bg-white p-12 hover:bg-neutral-900 hover:text-white group transition-colors duration-300 min-h-[450px] flex flex-col justify-between">
<div className="flex justify-between items-start">
<iconify-icon className="text-orange-600 group-hover:text-white transition-colors" height="32" icon="lucide:box" strokeWidth="1.5" width="32"></iconify-icon>
<span className="text-xs font-mono opacity-50">2022</span>
</div>
<div>
<h3 className="text-2xl font-semibold tracking-tight mb-2">Enku Tech</h3>
<p className="text-xs uppercase tracking-widest text-orange-600 mb-4 group-hover:text-white/60">
<span data-lang="en">UI Designer | Beijing</span><span className="hidden" data-lang="zh">UI 设计师 | 北京</span>
</p>
<p className="text-sm text-neutral-500 group-hover:text-neutral-400 leading-relaxed mb-8">
<span data-lang="en">Designed ToB marketing tools for digital collectibles. Managed H5 visual design, product functionality iteration, and created a design resource library.</span>
<span className="hidden" data-lang="zh">设计数字藏品 ToB 营销工具。负责 H5 视觉设计、产品功能迭代，并建立了跨部门设计资源库以提升效率。</span>
</p>
<div className="w-full h-[1px] bg-neutral-200 group-hover:bg-neutral-700 mb-4"></div>
<ul className="text-xs font-mono space-y-2 opacity-60">
<li>+ <span data-lang="en">Commercial Plans</span><span className="hidden" data-lang="zh">商业计划书</span></li>
<li>+ <span data-lang="en">Marketing Visuals</span><span className="hidden" data-lang="zh">营销视觉</span></li>
<li>+ <span data-lang="en">Desktop UI</span><span className="hidden" data-lang="zh">桌面端界面</span></li>
</ul>
</div>
</div>
</div>
</div>
</section>

<section className="py-0 border-b border-neutral-200">
<div className="grid grid-cols-1 lg:grid-cols-2">

<div className="relative h-[600px] lg:h-[700px] bg-neutral-100 overflow-hidden group">
<img alt="Web3 AI Interface" className="image-cover group-hover:scale-105 transition-transform duration-1000 ease-out" src="https://images.unsplash.com/photo-1639762681485-074b7f938ba0?w=1600&amp;q=80"/>
<div className="absolute inset-0 bg-neutral-900/10 group-hover:bg-neutral-900/0 transition-colors"></div>
<div className="absolute top-8 left-8 bg-white/90 backdrop-blur px-4 py-2 text-xs font-bold uppercase tracking-widest text-orange-600">
<span data-lang="en">Featured Case</span><span className="hidden" data-lang="zh">精选案例</span>
</div>

<div className="absolute bottom-8 right-8 text-white text-right hidden lg:block">
<p className="text-xs font-mono uppercase opacity-70 mb-1">Tech Stack</p>
<p className="text-sm font-medium">Artificial Intelligence / Blockchain / React</p>
</div>
</div>

<div className="flex flex-col justify-center p-12 lg:p-24 bg-white">
<div className="mb-12">
<span className="block text-xs font-medium text-neutral-400 uppercase tracking-widest mb-4">FLock.io Platform</span>
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tighter leading-tight mb-6">
<span data-lang="en">Decentralized AI Co-creation</span>
<span className="hidden" data-lang="zh">去中心化 AI 共创</span>
</h2>
<p className="text-neutral-600 text-lg leading-relaxed mb-8 border-l-2 border-orange-600 pl-6">
<span data-lang="en">Led the 0-to-1 design of a platform enabling collaborative AI model training. Defined the color system, typography, and component library to ensure scalability and developer efficiency.</span>
<span className="hidden" data-lang="zh">主导了一个支持协作式 AI 模型训练平台的 0 到 1 设计。定义了色彩系统、排版和组件库，确保可扩展性和开发效率。</span>
</p>
<div className="grid grid-cols-2 gap-8 mb-12">
<div>
<span className="block text-3xl font-light tracking-tight text-neutral-900">0-1</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">
<span data-lang="en">System Creation</span><span className="hidden" data-lang="zh">系统构建</span>
</span>
</div>
<div>
<span className="block text-3xl font-light tracking-tight text-neutral-900">100%</span>
<span className="text-xs text-neutral-500 uppercase tracking-wider">
<span data-lang="en">Dev Quality Alignment</span><span className="hidden" data-lang="zh">开发质量对齐</span>
</span>
</div>
</div>
<a className="inline-flex items-center gap-3 text-xs font-semibold uppercase tracking-widest border-b border-black pb-1 hover:text-orange-600 hover:border-orange-600 transition-colors" href="#">
<span data-lang="en">View Case Study</span><span className="hidden" data-lang="zh">查看案例研究</span>
<iconify-icon icon="lucide:arrow-up-right" strokeWidth="1.5"></iconify-icon>
</a>
</div>
</div>
</div>
</section>

<section className="py-24 max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-12 gap-12">
<div className="md:col-span-4">
<h2 className="text-3xl font-semibold tracking-tighter mb-4">
<span data-lang="en">Capabilities</span><span className="hidden" data-lang="zh">能力范畴</span>
</h2>
<p className="text-neutral-500 text-sm mb-8">
<span data-lang="en">A comprehensive toolkit spanning architectural software and modern digital product design tools.</span>
<span className="hidden" data-lang="zh">涵盖建筑软件与现代数字产品设计工具的综合技能包。</span>
</p>
<div className="inline-block px-6 py-3 border border-neutral-300 text-xs font-medium uppercase tracking-widest">
<span data-lang="en">Stack Overview</span><span className="hidden" data-lang="zh">技术栈概览</span>
</div>
</div>
<div className="md:col-span-8">

<article className="group border-t border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="md:w-32 text-xs font-mono text-neutral-400">DESIGN</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Core</span>
<h3 className="text-xl font-medium tracking-tight text-neutral-800">Figma, Adobe Creative Suite (Ps, Ai, Id, Pr, Ae)</h3>
</div>
</article>

<article className="group border-t border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="md:w-32 text-xs font-mono text-neutral-400">3D / SPATIAL</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Modeling</span>
<h3 className="text-xl font-medium tracking-tight text-neutral-800">Rhino, Unity, Keyshot, V-Ray, AutoCAD</h3>
</div>
</article>

<article className="group border-t border-b border-neutral-200 py-8 flex flex-col md:flex-row gap-8 items-start md:items-center">
<div className="md:w-32 text-xs font-mono text-neutral-400">STRATEGY</div>
<div className="flex-1">
<span className="text-xs font-bold text-orange-600 uppercase tracking-widest mb-2 block">Process</span>
<h3 className="text-xl font-medium tracking-tight text-neutral-800">
<span data-lang="en">User Research, H5 Marketing, Brand Strategy, System Design</span>
<span className="hidden" data-lang="zh">用户研究，H5 营销，品牌策略，系统设计</span>
</h3>
</div>
</article>
</div>
</div>
</section>

<footer className="bg-neutral-900 text-white pt-24 pb-12">
<div className="max-w-screen-2xl mx-auto px-6">
<div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-24">
<div className="md:col-span-1">
<div className="flex items-center gap-2 mb-8">
<div className="w-4 h-4 bg-orange-600"></div>
<span className="text-xl font-semibold tracking-tighter uppercase">
<span data-lang="en">ANNA GAO</span><span className="hidden" data-lang="zh">高安娜</span>
</span>
</div>
<p className="text-neutral-400 text-sm leading-relaxed mb-6">
<span data-lang="en">Designing at the intersection of architecture, technology, and human behavior.</span>
<span className="hidden" data-lang="zh">在建筑、科技与人类行为的交汇点进行设计。</span>
</p>
<div className="flex gap-4">
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:linkedin" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:mail" width="20"></iconify-icon></a>
<a className="text-neutral-400 hover:text-white transition-colors" href="#"><iconify-icon icon="lucide:dribbble" width="20"></iconify-icon></a>
</div>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
<span data-lang="en">Experience</span><span className="hidden" data-lang="zh">经历</span>
</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li><a className="hover:text-orange-500 transition-colors" href="#">FLock.io</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Diverse Design Studio</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Enku Tech</a></li>
<li><a className="hover:text-orange-500 transition-colors" href="#">Uxpie</a></li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
<span data-lang="en">Education</span><span className="hidden" data-lang="zh">教育</span>
</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li>
<span className="block text-white">UPenn</span>
<span className="text-xs text-neutral-500">
<span data-lang="en">Master of Architecture</span><span className="hidden" data-lang="zh">建筑学硕士</span>
</span>
</li>
<li>
<span className="block text-white">U. of Liverpool</span>
<span className="text-xs text-neutral-500">
<span data-lang="en">Bachelor of Architecture</span><span className="hidden" data-lang="zh">建筑学学士</span>
</span>
</li>
</ul>
</div>
<div>
<h4 className="text-xs font-bold uppercase tracking-widest text-neutral-500 mb-6">
<span data-lang="en">Contact</span><span className="hidden" data-lang="zh">联系方式</span>
</h4>
<ul className="space-y-4 text-sm font-medium text-neutral-300">
<li className="flex items-center gap-2"><iconify-icon className="text-orange-600" icon="lucide:mail"></iconify-icon> anna.gao@design.com</li>
<li className="flex items-center gap-2"><iconify-icon className="text-orange-600" icon="lucide:phone"></iconify-icon> +86 1XX XXXX XXXX</li>
</ul>
</div>
</div>
<div className="border-t border-neutral-800 pt-8 flex flex-col md:flex-row justify-between items-center text-xs text-neutral-500">
<div className="flex gap-8 mb-4 md:mb-0">
<a className="hover:text-white" href="#">
<span data-lang="en">Portfolio PDF</span><span className="hidden" data-lang="zh">作品集 PDF</span>
</a>
<a className="hover:text-white" href="#">
<span data-lang="en">Process Deck</span><span className="hidden" data-lang="zh">过程演示</span>
</a>
</div>
<div>
                © 2024 Anna Gao. All rights reserved.
            </div>
</div>
</div>
</footer>

    </>
  );
}
