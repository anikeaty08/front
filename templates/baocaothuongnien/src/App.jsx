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



        // Scroll Spy Logic
        document.addEventListener('DOMContentLoaded', () => {
            const sections = document.querySelectorAll('section');
            const navLinks = document.querySelectorAll('.nav-item');
            const navBar = document.getElementById('navbar');

            function updateActiveMenu() {
                let current = 'vision'; // Default to top section
                const scrollY = window.scrollY;

                // Check sections position
                sections.forEach(section => {
                    const sectionTop = section.offsetTop;
                    const sectionHeight = section.clientHeight;
                    // Offset by 150px to trigger slightly before the section hits top
                    if (scrollY >= (sectionTop - 300)) {
                        current = section.getAttribute('id');
                    }
                });

                // Handle top of page specifically
                if (scrollY < 200) {
                    current = 'vision';
                }

                // Update classes
                navLinks.forEach(link => {
                    link.classList.remove('active');
                    if (link.getAttribute('href').includes(current)) {
                        link.classList.add('active');
                    }
                });
            }

            // Optimize with throttle if needed, but simple scroll listener is fine for this size
            window.addEventListener('scroll', updateActiveMenu);
            // Run once on load
            updateActiveMenu();
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-[-1] neural-bg"></div>
<div className="scan-line"></div>

<div className="fixed top-0 left-1/2 -translate-x-1/2 w-[80vw] h-[50vh] bg-blue-600/10 blur-[120px] rounded-full pointer-events-none z-[-1]"></div>
<div className="fixed bottom-0 right-0 w-[40vw] h-[40vh] bg-orange-600/10 blur-[100px] rounded-full pointer-events-none z-[-1]"></div>

<nav className="fixed top-0 w-full z-50 border-b border-white/5 bg-slate-950/70 backdrop-blur-xl supports-[backdrop-filter]:bg-slate-950/40 transition-all duration-300" id="navbar">
<div className="max-w-7xl mx-auto px-6 h-20 flex items-center justify-between">
<div className="flex items-center gap-4">

<div className="flex items-center select-none">

<div className="h-10 w-auto bg-white/95 px-2 py-1.5 rounded flex items-center justify-center shadow-[0_0_15px_rgba(255,255,255,0.1)]">
<img alt="FPT Logo" className="h-full w-auto object-contain" src="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg"/>
</div>
</div>
<div className="h-6 w-px bg-white/10 mx-1"></div>
<div className="flex flex-col">
<span className="text-[10px] font-mono text-blue-400 uppercase tracking-widest leading-none mb-1">Annual Report</span>
<span className="text-xs font-bold text-white leading-none">2025</span>
</div>
</div>

<div className="hidden md:flex items-center gap-1 p-1 bg-white/5 rounded-full border border-white/5 backdrop-blur-sm">
<a className="nav-item px-4 py-1.5 text-xs font-medium rounded-full active" href="#vision">Vision</a>
<a className="nav-item px-4 py-1.5 text-xs font-medium rounded-full" href="#ecosystem">AI Ecosystem</a>
<a className="nav-item px-4 py-1.5 text-xs font-medium rounded-full" href="#financials">Financials</a>
</div>
<button className="flex items-center gap-2 px-4 py-2 bg-white text-slate-950 hover:bg-blue-50 rounded-lg text-xs font-bold transition-all shadow-[0_0_15px_rgba(255,255,255,0.3)] group border border-transparent hover:border-blue-200">
<iconify-icon className="text-orange-600" icon="lucide:sparkles"></iconify-icon>
<span>Chat với AI Report</span>
</button>
</div>
</nav>

<section className="relative pt-40 pb-24 md:pt-48 md:pb-32 px-6 max-w-7xl mx-auto" id="vision">
<div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

<div className="relative z-10">
<div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full border border-blue-500/30 bg-blue-500/5 text-blue-300 text-[11px] font-mono mb-8 font-medium">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-blue-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-blue-500"></span>
</span>
                    SYSTEM ONLINE • VỊ THẾ TOÀN CẦU
                </div>
<h1 className="text-5xl md:text-7xl font-bold tracking-tight text-white mb-6 leading-[1.1]">
                    VƯƠN TẦM <br/>
<span className="ai-gradient-text">TRÍ TUỆ NHÂN TẠO</span>
</h1>
<p className="text-lg text-slate-400 max-w-xl mb-10 font-light leading-relaxed border-l-2 border-orange-500/50 pl-6">
                    Năm 2025: FPT chuyển mình thành biểu tượng công nghệ AI thế giới. Chúng tôi không chỉ lập trình phần mềm, chúng tôi lập trình tương lai.
                </p>
<div className="flex flex-wrap gap-4">
<button className="px-8 py-4 bg-orange-600 hover:bg-orange-500 text-white rounded-lg font-semibold text-sm transition-all shadow-[0_0_30px_-5px_rgba(234,88,12,0.4)] flex items-center gap-2 group">
                        Khám phá Chiến lược DC5
                        <iconify-icon className="group-hover:translate-x-1 transition-transform" icon="lucide:arrow-right"></iconify-icon>
</button>
<button className="px-8 py-4 border border-white/10 hover:bg-white/5 text-white rounded-lg font-semibold text-sm transition-all flex items-center gap-2 backdrop-blur-sm">
<iconify-icon icon="lucide:download-cloud"></iconify-icon>
                        Tải Báo Cáo (PDF)
                    </button>
</div>

<div className="mt-16 grid grid-cols-3 gap-8 border-t border-white/10 pt-8">
<div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">1 tỷ $</div>
<div className="text-xs font-mono text-slate-500 uppercase">Doanh thu AI &amp; Software</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">5.000+</div>
<div className="text-xs font-mono text-slate-500 uppercase">Kỹ sư AI/Bán dẫn</div>
</div>
<div>
<div className="text-3xl font-bold text-white mb-1 tracking-tight">34</div>
<div className="text-xs font-mono text-slate-500 uppercase">Quốc gia hiện diện</div>
</div>
</div>
</div>

<div className="relative lg:h-[600px] flex items-center justify-center perspective-1000">

<div className="absolute -left-10 top-20 z-20 glass-card p-4 rounded-xl w-64 border-l-4 border-l-orange-500 animate-[float_6s_ease-in-out_infinite] hidden md:block">
<div className="flex items-center gap-2 mb-3 border-b border-white/5 pb-2">
<div className="w-2 h-2 rounded-full bg-red-500"></div>
<div className="w-2 h-2 rounded-full bg-yellow-500"></div>
<div className="w-2 h-2 rounded-full bg-green-500"></div>
<span className="text-[10px] text-slate-500 font-mono ml-auto">fpt-ai-core.sh</span>
</div>
<div className="space-y-2 font-mono text-[10px]">
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-blue-300">init_module</span>
<span className="text-white">GenAI_v2.5</span>
</div>
<div className="text-slate-500">Loading neural weights... [100%]</div>
<div className="text-slate-500">Optimizing NLP tokens... [OK]</div>
<div className="flex gap-2">
<span className="text-green-500">➜</span>
<span className="text-orange-400">Deploying to 30 countries...</span>
</div>
</div>
</div>

<div className="relative w-80 h-80">

<div className="absolute inset-0 rounded-full border border-blue-500/20 animate-[spin_10s_linear_infinite]"></div>
<div className="absolute inset-4 rounded-full border border-orange-500/20 animate-[spin_15s_linear_infinite_reverse]"></div>
<div className="absolute inset-0 bg-gradient-to-tr from-orange-500/10 to-blue-600/10 rounded-full blur-3xl animate-pulse"></div>

<div className="absolute inset-0 flex items-center justify-center">
<div className="w-48 h-48 bg-slate-950/80 backdrop-blur-md rounded-full border border-white/10 flex items-center justify-center relative z-10 shadow-[0_0_50px_rgba(59,130,246,0.3)]">
<iconify-icon className="text-white drop-shadow-[0_0_15px_rgba(255,255,255,0.5)]" icon="lucide:cpu" width="64"></iconify-icon>
</div>
</div>

<div className="absolute top-0 left-1/2 w-4 h-4 bg-blue-500 rounded-full blur-[2px] shadow-[0_0_10px_#3B82F6] animate-[spin_4s_linear_infinite] origin-[0_160px]"></div>
<div className="absolute top-1/2 left-0 w-3 h-3 bg-orange-500 rounded-full blur-[2px] shadow-[0_0_10px_#F97316] animate-[spin_7s_linear_infinite] origin-[160px_0]"></div>
</div>

<div className="absolute -right-5 bottom-10 z-20 glass-card p-5 rounded-xl w-72 border-t-2 border-t-blue-500 animate-[float_8s_ease-in-out_infinite] hidden md:block">
<div className="flex justify-between items-center mb-4">
<span className="text-xs font-semibold text-white">Tăng trưởng AI</span>
<span className="text-xs text-green-400 font-mono">+42.8%</span>
</div>
<div className="flex items-end gap-1 h-16">
<div className="w-1/6 bg-blue-500/20 h-[30%] rounded-sm"></div>
<div className="w-1/6 bg-blue-500/20 h-[50%] rounded-sm"></div>
<div className="w-1/6 bg-blue-500/20 h-[40%] rounded-sm"></div>
<div className="w-1/6 bg-blue-500/40 h-[70%] rounded-sm"></div>
<div className="w-1/6 bg-gradient-to-t from-blue-600 to-blue-400 h-[85%] rounded-sm shadow-[0_0_10px_rgba(59,130,246,0.5)]"></div>
<div className="w-1/6 bg-gradient-to-t from-orange-600 to-orange-400 h-[100%] rounded-sm shadow-[0_0_10px_rgba(249,115,22,0.5)]"></div>
</div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative z-10 border-t border-white/5 bg-slate-900/30" id="ecosystem">
<div className="max-w-7xl mx-auto">
<div className="text-center mb-16">
<h2 className="text-3xl md:text-5xl font-bold text-white mb-4">Hệ sinh thái <span className="text-orange-500">AI Factory</span></h2>
<p className="text-slate-400 max-w-2xl mx-auto">Kết hợp sức mạnh phần cứng NVIDIA và trí tuệ nhân tạo FPT để giải quyết các bài toán lớn toàn cầu.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">

<div className="glass-card glass-card-glow p-6 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-lg bg-blue-500/10 flex items-center justify-center text-blue-400 mb-6 group-hover:bg-blue-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:brain-circuit" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">FPT GenAI</h3>
<p className="text-sm text-slate-400 leading-relaxed">Nền tảng AI tạo sinh Make-in-Vietnam phục vụ doanh nghiệp, tối ưu hóa vận hành tự động.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-blue-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Active
                    </div>
</div>

<div className="glass-card glass-card-glow p-6 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-lg bg-purple-500/10 flex items-center justify-center text-purple-400 mb-6 group-hover:bg-purple-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:microchip" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Automotive AI</h3>
<p className="text-sm text-slate-400 leading-relaxed">Công nghệ tự lái và giải trí thông minh trên ô tô cho các hãng xe hàng đầu thế giới.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-purple-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Processing
                    </div>
</div>

<div className="glass-card glass-card-glow p-6 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-lg bg-emerald-500/10 flex items-center justify-center text-emerald-400 mb-6 group-hover:bg-emerald-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:database" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">Data Center</h3>
<p className="text-sm text-slate-400 leading-relaxed">Hạ tầng trung tâm dữ liệu chuẩn quốc tế, sẵn sàng cho xử lý Big Data và AI Training.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-emerald-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Online
                    </div>
</div>

<div className="glass-card glass-card-glow p-6 rounded-2xl group cursor-pointer transition-all duration-300 hover:-translate-y-2">
<div className="w-12 h-12 rounded-lg bg-orange-500/10 flex items-center justify-center text-orange-400 mb-6 group-hover:bg-orange-500 group-hover:text-white transition-colors">
<iconify-icon icon="lucide:graduation-cap" width="24"></iconify-icon>
</div>
<h3 className="text-lg font-semibold text-white mb-2">AI Education</h3>
<p className="text-sm text-slate-400 leading-relaxed">Hệ thống giáo dục cá nhân hóa bằng AI, đào tạo nguồn nhân lực công nghệ cao.</p>
<div className="mt-4 pt-4 border-t border-white/5 flex items-center gap-2 text-xs font-mono text-orange-400">
<span className="w-1.5 h-1.5 rounded-full bg-green-500 animate-pulse"></span>
                        Learning
                    </div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 max-w-7xl mx-auto" id="financials">
<div className="flex flex-col md:flex-row justify-between items-end mb-12">
<div>
<h2 className="text-3xl font-bold text-white mb-2">Chỉ số tài chính 2025</h2>
<p className="text-slate-400">Tăng trưởng bền vững dựa trên công nghệ lõi.</p>
</div>

<div className="flex gap-1 bg-white/5 p-1 rounded-lg font-mono text-xs">
<button className="px-4 py-2 bg-slate-700 text-white rounded shadow">Consolidated</button>
<button className="px-4 py-2 text-slate-500 hover:text-white">Tech</button>
<button className="px-4 py-2 text-slate-500 hover:text-white">Telecom</button>
</div>
</div>
<div className="grid grid-cols-1 md:grid-cols-4 grid-rows-2 gap-4 h-auto md:h-[500px]">

<div className="col-span-1 md:col-span-2 row-span-2 glass-card rounded-2xl p-8 relative overflow-hidden group">
<div className="absolute inset-0 bg-gradient-to-b from-blue-600/5 to-transparent"></div>

<div className="absolute inset-0 opacity-10" style={{backgroundImage: 'linear-gradient(#3B82F6 1px, transparent 1px), linear-gradient(90deg, #3B82F6 1px, transparent 1px)', backgroundSize: '20px 20px'}}></div>
<div className="relative z-10 h-full flex flex-col">
<div className="flex items-center gap-3 mb-2">
<iconify-icon className="text-orange-500" icon="lucide:bar-chart-3"></iconify-icon>
<span className="text-sm font-bold text-slate-400 uppercase tracking-widest">Tổng Doanh thu</span>
</div>
<div className="text-5xl md:text-7xl font-bold text-white tracking-tighter mb-4">
                        62.500 <span className="text-2xl text-slate-500 font-normal">tỷ</span>
</div>
<div className="inline-flex items-center gap-2 bg-green-500/10 text-green-400 px-3 py-1 rounded-full text-sm font-medium self-start mb-auto">
<iconify-icon icon="lucide:trending-up" width="16"></iconify-icon>
                        +21.5% YoY
                    </div>

<div className="mt-8 flex items-end justify-between gap-2 h-40">

<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[40%] rounded-t-sm"></div>
<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[55%] rounded-t-sm"></div>
<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[45%] rounded-t-sm"></div>
<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[70%] rounded-t-sm"></div>
<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[60%] rounded-t-sm"></div>
<div className="w-full bg-slate-700/50 hover:bg-blue-500/50 transition-all h-[80%] rounded-t-sm"></div>
<div className="w-full bg-gradient-to-t from-orange-600 to-orange-400 h-[100%] rounded-t-sm relative shadow-[0_0_20px_rgba(249,115,22,0.3)]">
<div className="absolute -top-8 left-1/2 -translate-x-1/2 bg-white text-slate-900 text-xs font-bold px-2 py-1 rounded">2025</div>
</div>
</div>
</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 glass-card rounded-2xl p-6 relative group hover:border-green-500/30 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-800 rounded-lg text-white">
<iconify-icon icon="lucide:pie-chart" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-green-400">+18.2%</span>
</div>
<div className="text-3xl font-bold text-white mb-1">11.200 <span className="text-sm font-normal text-slate-500">tỷ</span></div>
<div className="text-xs text-slate-400 font-medium">Lợi nhuận trước thuế</div>
</div>

<div className="col-span-1 md:col-span-1 row-span-1 glass-card rounded-2xl p-6 relative group hover:border-purple-500/30 transition-colors">
<div className="flex justify-between items-start mb-4">
<div className="p-2 bg-slate-800 rounded-lg text-white">
<iconify-icon icon="lucide:coins" width="20"></iconify-icon>
</div>
<span className="text-xs font-bold text-green-400">+15%</span>
</div>
<div className="text-3xl font-bold text-white mb-1">5.800 <span className="text-sm font-normal text-slate-500">VNĐ</span></div>
<div className="text-xs text-slate-400 font-medium">EPS</div>
</div>

<div className="col-span-1 md:col-span-2 row-span-1 glass-card rounded-2xl p-6 flex items-center justify-between relative overflow-hidden">
<div className="relative z-10">
<div className="flex items-center gap-2 mb-2 text-blue-400">
<iconify-icon icon="lucide:bot" width="18"></iconify-icon>
<span className="text-xs font-bold uppercase tracking-wider">Hợp đồng AI</span>
</div>
<div className="text-2xl font-bold text-white">Đạt 200 Triệu USD</div>
<p className="text-xs text-slate-400 mt-1">Từ thị trường Mỹ, Nhật &amp; Châu Âu</p>
</div>

<div className="w-24 h-24 rounded-full border border-white/10 flex items-center justify-center animate-[spin_20s_linear_infinite]">
<div className="w-16 h-16 rounded-full border border-dashed border-white/20"></div>
<div className="absolute w-2 h-2 bg-blue-500 rounded-full top-0"></div>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 relative">
<div className="max-w-4xl mx-auto">
<div className="glass-card rounded-3xl p-1 md:p-2 bg-gradient-to-r from-orange-500/20 via-blue-500/20 to-purple-500/20">
<div className="bg-slate-950/90 rounded-[20px] p-8 md:p-12 text-center relative overflow-hidden">

<div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-white/20 to-transparent"></div>
<div className="inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-slate-900 border border-white/10 mb-6 shadow-[0_0_20px_rgba(255,126,33,0.3)]">
<iconify-icon className="text-white" icon="lucide:message-square-dashed" width="32"></iconify-icon>
</div>
<h2 className="text-3xl font-bold text-white mb-4">Bạn cần thông tin chi tiết?</h2>
<p className="text-slate-400 mb-8 max-w-lg mx-auto">Sử dụng FPT AI Assistant để trích xuất dữ liệu, so sánh chỉ số tài chính và tóm tắt chiến lược từ báo cáo.</p>
<div className="relative max-w-lg mx-auto">
<input className="w-full bg-slate-900/50 border border-white/10 rounded-xl px-5 py-4 text-white focus:outline-none focus:border-orange-500/50 focus:ring-1 focus:ring-orange-500/50 transition-all pr-12 text-sm" disabled="" placeholder="Ví dụ: 'Tóm tắt chiến lược AI 2025'..." type="text"/>
<button className="absolute right-2 top-2 p-2 bg-orange-600 hover:bg-orange-500 text-white rounded-lg transition-colors">
<iconify-icon icon="lucide:send" width="16"></iconify-icon>
</button>
</div>
<div className="mt-6 flex flex-wrap justify-center gap-2 text-xs text-slate-500 font-mono">
<span className="px-2 py-1 bg-white/5 rounded border border-white/5">#DoanhThu</span>
<span className="px-2 py-1 bg-white/5 rounded border border-white/5">#NhanSu</span>
<span className="px-2 py-1 bg-white/5 rounded border border-white/5">#PhatTrienBenVung</span>
</div>
</div>
</div>
</div>
</section>

<footer className="border-t border-white/10 bg-slate-950 pt-20 pb-10 px-6 font-mono text-xs">
<div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-8">
<div className="flex flex-col gap-4">
<div className="h-8 w-auto bg-white/5 px-2 py-1.5 rounded inline-block w-fit">
<img alt="FPT Logo" className="h-full w-auto object-contain" src="https://upload.wikimedia.org/wikipedia/commons/1/11/FPT_logo_2010.svg"/>
</div>
<p className="text-slate-500">© 2025 FPT Corporation.<br/>Designed for the AI Era.</p>
</div>
<div className="flex gap-8 text-slate-400">
<a className="hover:text-white transition-colors" href="#">Privacy Policy</a>
<a className="hover:text-white transition-colors" href="#">Terms of Service</a>
<a className="hover:text-white transition-colors" href="#">Contact Support</a>
</div>
<div className="flex gap-4">
<a className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors" href="#">
<iconify-icon icon="lucide:facebook" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors" href="#">
<iconify-icon icon="lucide:linkedin" width="14"></iconify-icon>
</a>
<a className="w-8 h-8 flex items-center justify-center rounded bg-white/5 hover:bg-white/10 text-white transition-colors" href="#">
<iconify-icon icon="lucide:twitter" width="14"></iconify-icon>
</a>
</div>
</div>
<div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-slate-600">
            FPT HOSE: FPT • SYSTEM STATUS: <span className="text-green-500">OPERATIONAL</span>
</div>
</footer>


    </>
  );
}
