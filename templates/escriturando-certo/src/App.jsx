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



            (function () {
                const grid = document.querySelector('[data-element-id="aura-emix92suy3kukdh3u"]');
                if (!grid) return;
                const items = Array.from(grid.children);

                const io = new IntersectionObserver(
                    (entries) => {
                        entries.forEach((entry) => {
                            if (entry.isIntersecting) {
                                const index = items.indexOf(entry.target);
                                if (index >= 0) {
                                    entry.target.style.animationPlayState = 'running';
                                }
                            }
                        });
                    },
                    { threshold: 0.25 }
                );

                items.forEach((child) => {
                    const wrapper = child;
                    if (!wrapper.style.animationPlayState) {
                        wrapper.style.animationPlayState = 'paused';
                    }
                    io.observe(wrapper);
                });
            })();
        


        // Simple Parallax Effect on Scroll
        window.addEventListener('scroll', () => {
            const scrolled = window.scrollY;
            const floatElements = document.querySelectorAll('.animate-float');
            floatElements.forEach((el, index) => {
                const speed = (index + 1) * 0.1;
                el.style.transform = `translateY(${scrolled * speed}px)`;
            });
        });
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component fixed top-0 w-full h-screen -z-10" data-alpha-mask="80" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 80%, transparent)'}}><div data-us-project="p1jN53nhB7JxvA6B9xxQ"></div></div>

<nav className="fixed z-50 transition-all duration-300 supports-[backdrop-filter]:bg-white/60 bg-white/80 w-full border-neutral-200/50 border-b top-0 backdrop-blur-xl" style={{}}>
<div className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-center text-lg font-semibold text-slate-900 tracking-tight font-geist w-60 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c42d811-bf41-4df5-839b-e197ea950520_320w.png)] bg-cover" style={{}}></span>
</div>
<div className="hidden md:flex items-center gap-8 text-sm font-medium text-slate-500" style={{}}>
<a className="hover:text-orange-600 transition-colors" href="#features" style={{}}>Vantagens</a>
<a className="hover:text-orange-600 transition-colors" href="#products" style={{}}>Produtos</a>
<a className="hover:text-orange-600 transition-colors" href="#testimonials" style={{}}>Depoimentos</a>
</div>
</div>
</nav>

<section className="overflow-hidden lg:pb-32 lg:pt-40 pt-32 pr-6 pb-20 pl-6 relative"><div className="absolute top-0 right-0 bottom-0 left-0" data-container-bg="true"><div data-us-project="p1jN53nhB7JxvA6B9xxQ"></div></div>
<div className="grid lg:grid-cols-2 gap-16 max-w-6xl mr-auto ml-auto items-center" style={{}}>

<div className="z-10 relative space-y-8">
<div className="inline-flex text-xs font-medium text-orange-600 bg-orange-100/50 border-orange-200/50 border rounded-full pt-1 pr-3 pb-1 pl-3 backdrop-blur-sm gap-x-2 gap-y-2 items-center" style={{}}>
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75" style={{}}></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-orange-500" style={{}}></span>
</span>
                    Edição 2025 Atualizada
                </div>
<h1 className="lg:text-7xl leading-[1.05] text-5xl font-semibold text-slate-900 tracking-tight font-geist">
                    Estude com o material <span className="bg-clip-text text-transparent bg-gradient-to-br from-orange-400 to-orange-600" style={{}}>certo</span>.
                    <span className="bg-clip-text font-bold text-transparent bg-gradient-to-br from-orange-400 to-orange-600 relative">Chegue preparado para as provas dos concursos de cartório e para o Exame Nacional de Cartório (ENAC).</span>
</h1>
<p className="text-lg text-slate-500 max-w-lg leading-relaxed font-light" style={{}}>
                    Vade Mecum e materiais atualizados conforme os editais de concursos para Cartórios. Organização inteligente, legislação direta ao ponto e estrutura pensada para o seu ritmo.
                </p>
<div className="flex flex-col sm:flex-row gap-4 pt-2">
<a className="group relative flex items-center justify-center gap-2 overflow-hidden transition-all duration-300 hover:shadow-orange-500/50 shadow-orange-500/30 hover:shadow-lg active:scale-95 text-sm font-medium text-orange-900 bg-gradient-to-r from-[#FFEBB1] to-[#FFC438] pt-4 pr-8 pb-4 pl-8 shadow-lg" href="#products" style={{boxShadow: 'rgba(255, 162, 42, 0.9) 0px 15px 33px -12px, rgb(252, 220, 134) 0px 4px 6.3px inset, rgb(255, 162, 38) 0px -5px 6.3px inset', borderRadius: '9999px'}}>
<div className="group-hover:translate-y-0 transition-transform duration-300 cursor-pointer bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full" onclick="window.location.href='/Enter text content... Tailwind Classes  group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full Inline CSS  Element ID  Margin  Padding  Position  L 0 T 0 R 0 B 0  Z-Index  Pointer Events Size Max Size  Max Width  Max Height Spacing  Space X  Space Y  Gap X  Gap Y Alignment  Default  Default Typography  Inter  Default  Normal  Normal  No Color     Appearance   Opacity  Blend Background  white/20  No Image Embed  No Asset Border  No Color  Border  No Color  Ring  Rounded All T R B L Effects  Shadow  Blur  Backdrop Blur  Hue Rotate  Saturation  Brightness  Liquid Glass  Gray 0  100  Invert 0  100 Alpha Mask 0% - 100% Angle 180° Transforms Translate X 0  Translate Y 0  Skew X 0°  Skew Y 0°  Rotate 0°  Scale 100%  3D Transform 3D Rotate X 0°  3D Rotate Y 0°  3D Rotate Z 0°  Perspective Default';window.location.href='/Enter text content... Tailwind Classes  group-hover:translate-y-0 transition-transform duration-300 bg-white/20 absolute top-0 right-0 bottom-0 left-0 translate-y-full Inline CSS  Element ID  Margin  Padding  Position  L 0 T 0 R 0 B 0  Z-Index  Pointer Events Size Max Size  Max Width  Max Height Spacing  Space X  Space Y  Gap X  Gap Y Alignment  Default  Default Typography  Inter  Default  Normal  Normal  No Color     Appearance   Opacity  Blend Background  white/20  No Image Embed  No Asset Border  No Color  Border  No Color  Ring  Rounded All T R B L Effects  Shadow  Blur  Backdrop Blur  Hue Rotate  Saturation  Brightness  Liquid Glass  Gray 0  100  Invert 0  100 Alpha Mask 0% - 100% Angle 180° Transforms Translate X 0  Translate Y 0  Skew X 0°  Skew Y 0°  Rotate 0°  Scale 100%  3D Transform 3D Rotate X 0°  3D Rotate Y 0°  3D Rotate Z 0°  Perspective Default'" role="button" style={{}}></div>
<span className="relative flex items-center gap-2 z-10">
        Garanta seu Vade Mecum
        <svg aria-hidden="true" className="w-4 h-4" data-icon="solar:arrow-right-linear" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</span>
</a>
</div>
<div className="flex flex-col gap-3 text-sm text-slate-500 pt-4" style={{}}>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="bg-gradient-to-br from-white/10 to-white/0 from-orange-400 to-orange-600 w-[18px] h-[18px]" data-icon="solar:check-circle-bold" data-icon-replaced="true" data-width="18" height="18" role="img" strokeWidth="2" style={{width: '18px', height: '18px', color: 'rgb(100, 116, 139)'}} viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor" fill-rule="evenodd"></path></svg>
                        Atualizado conforme CNJ/FGV
                    </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" className="" data-icon="solar:check-circle-bold" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor" fill-rule="evenodd"></path></svg>
                        Legislação completa + artigos mais cobrados
                    </div>
<div className="flex gap-2 gap-x-2 gap-y-2 items-center">
<svg aria-hidden="true" className="" data-icon="solar:check-circle-bold" data-width="18" height="18" role="img" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M22 12c0 5.523-4.477 10-10 10S2 17.523 2 12S6.477 2 12 2s10 4.477 10 10m-5.97-3.03a.75.75 0 0 1 0 1.06l-5 5a.75.75 0 0 1-1.06 0l-2-2a.75.75 0 1 1 1.06-1.06l1.47 1.47l2.235-2.235L14.97 8.97a.75.75 0 0 1 1.06 0" fill="currentColor" fill-rule="evenodd"></path></svg>
                        Envio rápido para todo o Brasil
                    </div>
</div>
</div><div className="flex lg:justify-end bg-center w-35 h-[450px] lg:h-[700px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/13811e4e-4302-4335-8563-d7440fac53aa_1600w.png)] bg-cover relative perspective-container">
<div className="animate-float bg-white/80 border-white border rounded-2xl pt-4 pr-4 pb-4 pl-4 absolute top-10 right-5 lg:top-20 lg:right-10 shadow-lg blur-none backdrop-blur-md" style={{animationDelay: '1s', transform: 'translateY(621.889px)'}}>
<svg aria-hidden="true" className="w-[24px] h-[24px] lg:w-[32px] lg:h-[32px]" data-icon="solar:verified-check-bold" data-icon-replaced="true" data-width="32" height="32" role="img" strokeWidth="2" style={{color: 'rgb(30, 41, 59)'}} viewbox="0 0 24 24" width="32" xmlns="http://www.w3.org/2000/svg">
<path className="" clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path>
</svg>
</div>
<div className="animate-float bg-white/80 border-white border rounded-2xl pt-3 pr-5 pb-3 pl-5 absolute bottom-10 left-5 lg:bottom-20 lg:left-10 shadow-lg backdrop-blur-md" style={{animationDelay: '2s', transform: 'translateY(1243.78px)'}}>
<span className="text-xs font-bold text-slate-800" style={{}}>100% Atualizado</span>
</div>
</div>

</div>
</section>

<section className="border-y bg-white/40 border-neutral-200/50 pt-10 pb-10 backdrop-blur-sm">
<div className="max-w-6xl mx-auto px-6 text-center">
<p className="uppercase text-xl font-semibold text-slate-400 tracking-widest" style={{}}>Conteúdo baseado nas bancas</p>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6 relative">
<div className="glass-panel md:p-16 overflow-hidden max-w-4xl z-0 rounded-[40px] mr-auto ml-auto pt-10 pr-10 pb-10 pl-10 relative shadow-xl">
<div className="-translate-y-1/2 z-0 bg-orange-100 opacity-50 w-96 h-96 rounded-full absolute top-0 right-0 blur-3xl translate-x-1/2 [--fx-filter:blur(10px)_liquid-glass(0.5,10)_saturate(1.25)_noise(0.5,1,0)]">
</div>
<div className="relative z-10">
<h2 className="font-geist text-3xl md:text-4xl font-semibold text-slate-900 mb-12 tracking-tight" style={{}}>Este material é para você que...</h2>
<div className="space-y-6">
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{}}>
<svg aria-hidden="true" data-icon="solar:user-id-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="9" cy="9" r="2"></circle><path d="M13 15c0 1.105 0 2-4 2s-4-.895-4-2s1.79-2 4-2s4 .895 4 2Z"></path><path d="M2 12c0-3.771 0-5.657 1.172-6.828S6.229 4 10 4h4c3.771 0 5.657 0 6.828 1.172S22 8.229 22 12s0 5.657-1.172 6.828S17.771 20 14 20h-4c-3.771 0-5.657 0-6.828-1.172S2 15.771 2 12Z"></path><path d="M19 12h-4m4-3h-5m5 6h-3" strokeLinecap="round"></path></g></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900" style={{}}>Está se preparando para o ENAC</h4>
<p className="text-slate-500 text-sm mt-1" style={{}}>Foco total no Exame Nacional dos Cartórios.</p>
</div>
</div>
<div className="w-full h-px bg-neutral-100" style={{}}></div>
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{}}>
<svg aria-hidden="true" className="" data-icon="solar:sort-by-time-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M10 7H2m6 5H2m8 5H2" strokeLinecap="round"></path><circle cx="17" cy="12" r="5"></circle><path d="M17 10v1.846L18 13" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900" style={{}}>Busca organização e clareza</h4>
<p className="text-slate-500 text-sm mt-1" style={{}}>Nada de perder tempo com legislação dispersa.</p>
</div>
</div>
<div className="w-full h-px bg-neutral-100" style={{}}></div>
<div className="flex items-start gap-5 group">
<div className="w-10 h-10 rounded-full bg-orange-50 border border-orange-100 flex items-center justify-center shrink-0 group-hover:scale-110 transition-transform" style={{}}>
<svg aria-hidden="true" className="" data-icon="solar:graph-up-linear" data-width="24" height="24" role="img" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><path d="M2 12c0-4.714 0-7.071 1.464-8.536C4.93 2 7.286 2 12 2s7.071 0 8.535 1.464C22 4.93 22 7.286 22 12s0 7.071-1.465 8.535C19.072 22 16.714 22 12 22s-7.071 0-8.536-1.465C2 19.072 2 16.714 2 12Z"></path><path d="m7 14l2.293-2.293a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 0 1.414 0L17 10m0 0v2.5m0-2.5h-2.5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
</div>
<div className="">
<h4 className="text-lg font-medium text-slate-900" style={{}}>Entende que competitividade exige estratégia</h4>
<p className="text-slate-500 text-sm mt-1" style={{}}>Estudo otimizado para superar a concorrência.</p>
</div>
</div>
</div>
<div className="mt-12 text-center md:text-left">
<a className="inline-flex items-center gap-2 hover:underline underline-offset-4 text-sm font-semibold text-orange-600" href="/#products">
                        Conheça o Vade Mecum ENAC
                        <svg aria-hidden="true" data-icon="solar:arrow-right-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M4 12h16m0 0l-6-6m6 6l-6 6" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5"></path></svg>
</a>
</div>
</div>
</div>
</section>

<section className="pt-20 pr-6 pb-20 pl-6">
<div className="text-center max-w-3xl mr-auto ml-auto space-y-8">
<svg aria-hidden="true" className="w-[48px] h-[48px]" data-icon="solar:danger-circle-linear" data-icon-replaced="true" data-icon-set="solar" data-solar="danger-circle-linear" data-width="48" height="48" role="img" strokeWidth="2" style={{width: '48px', height: '48px', color: 'rgb(30, 41, 60)'}} viewbox="0 0 24 24" width="48" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none"><circle className="" cx="12" cy="12" r="10" stroke="#1e293b" strokeWidth="1.5"></circle><path d="M12 7v6" stroke="#1e293b" strokeLinecap="round" strokeWidth="1.5"></path><circle cx="12" cy="16" fill="#1e293b" r="1"></circle></g></svg>
<h2 className="md:text-5xl text-4xl font-semibold text-slate-900 tracking-tight font-geist" style={{}}>
                O ENAC não é uma prova de memorização. 
                <span className="">É uma prova de precisão.</span>
</h2>
<p className="text-xl text-slate-600 font-light leading-relaxed" style={{}}>
                Muitos candidatos falham não por falta de estudo, mas por falta de direcionamento. A legislação está disponível? Sim. Mas não está organizada conforme o que o exame pede.
            </p>
<div className="bg-red-50 text-red-800 px-6 py-4 rounded-xl inline-block font-medium border border-red-100" style={{}}>
                Tempo perdido escolhendo o que estudar é tempo longe da aprovação.
            </div>
</div>
</section>

<section className="border-y bg-white/50 border-neutral-200/50 pt-24 pr-6 pb-24 pl-6 backdrop-blur-sm" id="features" style={{}}>
<div className="max-w-6xl mr-auto ml-auto">
<div className="mb-16 text-center">
<h2 className="font-geist text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight" style={{}}>Por isso, criamos o Escriturando Certo.</h2>
<p className="text-slate-500 mt-4 max-w-2xl mx-auto text-lg" style={{}}>Materiais completos e organizados sob demanda.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6" style={{rowGap: '1.5rem', columnGap: '1.5rem'}}>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 0ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-sky-300 via-sky-100 to-sky-300 opacity-70 pointer-events-none" style={{}}></div>
<div className="hover:shadow-lg transition-all duration-300 bg-sky-50 border-transparent border rounded-[32px] pt-8 pr-8 pb-8 pl-8 relative" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(125, 211, 252, 0.7), rgba(59, 130, 246, 0.4), rgba(125, 211, 252, 0.7)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-sky-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-file-text" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<path d="M15 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V7Z"></path>
<path d="M14 2v4a2 2 0 0 0 2 2h4"></path>
<path d="M10 9H8"></path>
<path d="M16 13H8"></path>
<path d="M16 17H8"></path>
</svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Estrutura de Edital</h3>
<p className="text-slate-600 leading-relaxed text-base" style={{}}>Conteúdo espelhado nos editais oficiais, sem surpresas na hora do
    estudo.</p>
</div>
</div>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 120ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-fuchsia-300 via-fuchsia-100 to-fuchsia-300 opacity-70 pointer-events-none" style={{}}></div>
<div className="hover:shadow-lg transition-all duration-300 bg-fuchsia-50 border-transparent border rounded-[32px] pt-8 pr-8 pb-14 pl-8 relative" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(244, 114, 182, 0.7), rgba(192, 38, 211, 0.4), rgba(244, 114, 182, 0.7)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-fuchsia-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-calendar-days" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg">
<rect height="18" rx="2" ry="2" width="18" x="3" y="4"></rect>
<line x1="16" x2="16" y1="2" y2="6"></line>
<line x1="8" x2="8" y1="2" y2="6"></line>
<line x1="3" x2="21" y1="10" y2="10"></line>
<path d="M8 14h.01"></path>
<path d="M12 14h.01"></path>
<path d="M16 14h.01"></path>
<path d="M8 18h.01"></path>
<path d="M12 18h.01"></path>
<path d="M16 18h.01"></path>
</svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Atualizações 2025</h3>
<p className="leading-relaxed text-base text-slate-600" style={{}}>Todas as novidades legislativas do ano já incorporadas no texto.
  </p>
</div>
</div>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 240ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-orange-300 via-orange-100 to-orange-300 opacity-70 pointer-events-none" style={{}}></div>
<div className="hover:shadow-lg transition-all duration-300 bg-orange-50 border-transparent border rounded-[32px] pt-8 pr-8 pb-14 pl-8 relative" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(251, 146, 60, 0.75), rgba(234, 88, 12, 0.45), rgba(251, 146, 60, 0.75)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-orange-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-highlighter" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m9 11-6 6v3h9l3-3"></path><path d="m22 12-4.6 4.6a2 2 0 0 1-2.8 0l-5.2-5.2a2 2 0 0 1 0-2.8L14 4"></path><path d="m11 11 3.2 3.2"></path></svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Destaques Estratégicos</h3>
<p className="text-slate-600 leading-relaxed text-base" style={{}}>Os artigos mais cobrados pelas bancas já vêm destacados visualmente.</p>
</div>
</div>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 360ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-emerald-300 via-emerald-100 to-emerald-300 opacity-70 pointer-events-none" style={{}}></div>
<div className="relative bg-emerald-50 p-8 rounded-[32px] hover:shadow-lg transition-all duration-300 border border-transparent" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(52, 211, 153, 0.75), rgba(16, 185, 129, 0.45), rgba(52, 211, 153, 0.75)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-emerald-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-package-check" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="m8.6 15.4 1.8 1.8 3.8-3.8"></path><path d="M16.5 20.8 12 22l-8-4.4V8.3L12 3.8l7.5 4.3v4.2"></path><path d="M3.2 8.4 12 12.8l9-4.5"></path><path d="M12 12.8v9"></path></svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Pronto para Uso</h3>
<p className="text-slate-600 leading-relaxed text-base" style={{}}>Chega de montar seu próprio Vade Mecum. Pegue e comece a estudar.</p>
</div>
</div>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 480ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-amber-300 via-amber-100 to-amber-300 opacity-70 pointer-events-none"></div>
<div className="relative bg-amber-50 p-8 rounded-[32px] hover:shadow-lg transition-all duration-300 border border-transparent" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(252, 211, 77, 0.8), rgba(245, 158, 11, 0.5), rgba(252, 211, 77, 0.8)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-amber-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-timer" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><line x1="10" x2="14" y1="2" y2="2"></line><line x1="12" x2="15" y1="14" y2="11"></line><circle cx="12" cy="14" r="8"></circle></svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Eficiência</h3>
<p className="text-slate-600 leading-relaxed text-base" style={{}}>Desenvolvido para maximizar seu tempo de leitura e revisão.</p>
</div>
</div>

<div className="relative group will-change-transform" style={{animation: 'clipIntro 700ms ease-out 600ms 1 normal both', transformOrigin: 'center center'}}>
<div className="absolute inset-0 rounded-[32px] bg-gradient-to-br from-indigo-300 via-indigo-100 to-indigo-300 opacity-70 pointer-events-none" style={{}}></div>
<div className="relative bg-indigo-50 p-8 rounded-[32px] hover:shadow-lg transition-all duration-300 border border-transparent" style={{borderWidth: '1px', borderStyle: 'solid', borderImage: 'linear-gradient(135deg, rgba(129, 140, 248, 0.8), rgba(79, 70, 229, 0.5), rgba(129, 140, 248, 0.8)) 1 / 1 / 0 stretch', backgroundClip: 'padding-box'}}>
<div className="w-14 h-14 rounded-2xl bg-white flex items-center justify-center mb-6 shadow-sm text-indigo-600 group-hover:scale-105 transition-transform" style={{}}>
<svg className="lucide lucide-printer" fill="none" height="28" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="28" xmlns="http://www.w3.org/2000/svg"><path d="M6 18H4a2 2 0 0 1-2-2v-5a2 2 0 0 1 2-2h16a2 2 0 0 1 2 2v5a2 2 0 0 1-2 2h-2"></path><path d="M6 9V3a1 1 0 0 1 1-1h10a1 1 0 0 1 1 1v6"></path><rect height="8" rx="1" width="12" x="6" y="14"></rect></svg>
</div>
<h3 className="font-geist text-xl font-semibold text-slate-900 mb-3 tracking-tight" style={{}}>Sob Demanda</h3>
<p className="text-slate-600 leading-relaxed text-base" style={{}}>Produção com garantia de integridade, qualidade de impressão e acabamento.</p>
</div>
</div>
<style>
            @keyframes clipIntro {
                0% {
                    clip-path: inset(0 100% 0 0 round 32px);
                    transform: translateY(16px) scale(0.96);
                }
                50% {
                    clip-path: inset(0 0 0 0 round 32px);
                    transform: translateY(-4px) scale(1.01);
                }
                100% {
                    clip-path: inset(0 0 0 0 round 32px);
                    transform: translateY(0) scale(1);
                }
            }

            .pill-border-beam {
                position: relative;
            }

            .pill-border-beam::before {
                content: "";
                position: absolute;
                inset: -1px;
                border-radius: 9999px;
                padding: 1px;
                background: conic-gradient(from 0deg, #fb923c, #f97316, #facc15, #fb923c);
                -webkit-mask: linear-gradient(#000 0 0) content-box, linear-gradient(#000 0 0);
                -webkit-mask-composite: xor;
                        mask-composite: exclude;
                opacity: 0;
                transform: rotate(0deg);
                transition: opacity 220ms ease-out;
                pointer-events: none;
            }

            .pill-border-beam:hover::before {
                opacity: 1;
                animation: pillBeam 1200ms linear 0ms infinite both;
            }

            @keyframes pillBeam {
                0% {
                    transform: rotate(0deg);
                }
                100% {
                    transform: rotate(360deg);
                }
            }
        </style>

</div>
</div>
</section>

<section className="pt-24 pr-6 pb-24 pl-6" id="products">
<div className="max-w-5xl mx-auto">
<h2 className="text-4xl font-semibold text-slate-900 tracking-tight font-geist text-center mb-16" style={{}}>Escolha seu material</h2>
<div className="grid lg:grid-cols-2 gap-x-10 gap-y-10">

<div className="group shadow-custom-lg transition-transform duration-300 hover:-translate-y-2 bg-white rounded-[32px] pt-2 pr-2 pb-2 pl-2 relative" style={{}}>
<div className="overflow-hidden flex flex-col bg-slate-50 h-full border-neutral-100 border rounded-[28px] pt-8 pr-8 pb-8 pl-8 relative" style={{}}>

<div className="text-[10px] z-20 font-bold text-white bg-orange-500 rounded-bl-xl pt-1 pr-3 pb-1 pl-3 absolute top-0 right-0" style={{}}>
            MAIS VENDIDO</div>
<div className="overflow-hidden flex justify-center items-center bg-white rounded-2xl mb-8 relative" style={{width: '100%', height: '500px'}}>
<img alt="Vade Mecum ENAC" className="h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/fafd6d49-b77b-4da9-bd21-8a201823e5f1_1600w.png"/>
</div>
<h3 className="font-geist text-2xl font-semibold text-slate-900 mb-4" style={{}}>
            Vade
            Mecum ENAC <br/> 2ª Edição | 2025</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" className="" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="10"></circle>
<path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path>
</g>
</svg>
                Organizado conforme CNJ / FGV
            </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" className="" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="10"></circle>
<path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path>
</g>
</svg>
                Leis com maior incidência destacadas
            </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg">
<g fill="none" stroke="currentColor" strokeWidth="1.5">
<circle cx="12" cy="12" r="10"></circle>
<path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path>
</g>
</svg>
                Entrega física em todo o Brasil
            </li>
</ul>
<button className="group shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300 overflow-hidden hover:bg-orange-600 font-medium text-white bg-orange-500 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: 'rgba(234, 88, 12, 0.85) 0px 18px 40px -15px, rgba(255, 247, 237, 0.9) 0px 2px 4px inset', borderRadius: '0.5rem', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 146, 60, 0.4), rgba(234, 88, 12, 0.5))', -BorderRadiusBefore: '8px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full" style={{}}></div>
<span className="flex items-center gap-2 relative" onclick="window.location.href='https://escriturandocerto.hotmart.host/vade-mecum-enac-2-2025-produto-fisico-d52fe2f5-d8e2-4f08-8398-9d86f22e3d9d?_hi=eyJjaWQiOiIxNzYzNzUxOTcyNDI4Mzg3MjA3NTg4Mzc2NjIzMzAwIiwiYmlkIjoiMTc2Mzc1MTk3MjQyODM4NzIwNzU4ODM3NjYyMzMwMCIsInNpZCI6IjI3NDIzZDMxZGIyYjQ1ZDNiNWYwMTVlODQ0ODQ2NTlkIn0=.1764186783401'" role="button">Compre Agora</span>
</button>
</div>
</div>

<div className="group relative bg-white rounded-[32px] p-2 shadow-custom-lg transition-transform duration-300 hover:-translate-y-2" style={{}}>
<div className="relative h-full bg-slate-50 rounded-[28px] p-8 border border-neutral-100 overflow-hidden flex flex-col" style={{}}>
<div className="overflow-hidden flex justify-center items-center bg-white rounded-2xl mb-8 relative" style={{width: '100%', height: '500px'}}>
<img alt="Vade Mecum ENAC" className="h-full object-contain" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/2b9fcca1-0378-4bf0-a391-32f986eb18d0_1600w.png" style={{}}/>
</div>
<h3 className="font-geist text-2xl font-semibold text-slate-900 mb-4" style={{}}>Vade Mecum Cartórios <br/> Rio Grande do Norte | 2025</h3>
<ul className="space-y-3 mb-8 flex-1">
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                Estruturado para o edital do TJ/RN
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                Conteúdo segmentado para a banca
                            </li>
<li className="flex items-start gap-3 text-sm text-slate-600" style={{}}>
<svg aria-hidden="true" data-icon="solar:check-circle-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m8.5 12.5l2 2l5-5" strokeLinecap="round" strokeLinejoin="round"></path></g></svg>
                                Ideal para etapa objetiva
                            </li>
</ul>
<button className="group shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300 overflow-hidden hover:bg-orange-600 font-medium text-white bg-orange-500 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: 'rgba(234, 88, 12, 0.85) 0px 18px 40px -15px, rgba(255, 247, 237, 0.9) 0px 2px 4px inset', borderRadius: '0.5rem', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 146, 60, 0.4), rgba(234, 88, 12, 0.5))', -BorderRadiusBefore: '8px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full" style={{}}></div>
<span className="flex items-center gap-2 relative" onclick="window.location.href='https://hotmart.com/pt-br/marketplace/produtos/vade-mecum-cartorios-leis-estaduais-roraima-17x25/L101211672I?_hi=eyJjaWQiOiIxNzYzNzUxOTcyNDI4Mzg3MjA3NTg4Mzc2NjIzMzAwIiwiYmlkIjoiMTc2Mzc1MTk3MjQyODM4NzIwNzU4ODM3NjYyMzMwMCIsInNpZCI6IjI3NDIzZDMxZGIyYjQ1ZDNiNWYwMTVlODQ0ODQ2NTlkIn0=.1764187050470'" role="button">Compre Agora</span>
</button>
</div>
</div>
</div>
</div>
</section>

<section className="border-y bg-white border-neutral-200 pt-20 pr-6 pb-20 pl-6">
<div className="max-w-4xl mr-auto ml-auto">
<h2 className="text-3xl font-semibold text-slate-900 font-geist text-center mb-4" style={{}}>Por que isso faz diferença?</h2>
<p className="text-center text-slate-500 max-w-2xl mx-auto mb-12" style={{}}>Comparar um material genérico com um estruturado torna claro o que realmente acelera sua evolução.</p>
<div className="overflow-hidden rounded-2xl border border-neutral-200 shadow-sm" style={{}}>
<table className="w-full text-left border-collapse">
<thead className="">
<tr className="bg-neutral-50 border-b border-neutral-200" style={{}}>
<th className="p-4 md:p-6 text-xs font-semibold uppercase tracking-wider text-slate-500" style={{}}>Recurso</th>
<th className="p-4 md:p-6 text-xs font-semibold uppercase tracking-wider text-slate-400 text-center" style={{}}>Genérico</th>
<th className="p-4 md:p-6 text-xs font-semibold uppercase tracking-wider text-orange-600 bg-orange-50/50 text-center" style={{}}>Escriturando</th>
</tr>
</thead>
<tbody className="divide-y divide-neutral-100 bg-white" style={{}}>
<tr className="">
<td className="md:p-6 text-sm font-medium text-slate-700 pt-4 pr-4 pb-4 pl-4" style={{}}>Atualizado conforme edital</td>
<td className="md:p-6 text-center pt-4 pr-4 pb-4 pl-4">
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="solar:close-circle-linear" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(30, 41, 59)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</div>
</td>
<td className="p-4 md:p-6 text-center bg-orange-50/20" style={{}}>
<div className="flex items-center justify-center">
<svg aria-hidden="true" data-icon="solar:verified-check-bold" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</td>
</tr>
<tr className="">
<td className="p-4 md:p-6 text-sm font-medium text-slate-700" style={{}}>Destaque de artigos cobrados</td>
<td className="p-4 md:p-6 text-center">
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:close-circle-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle className="" cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</div>
</td>
<td className="p-4 md:p-6 text-center bg-orange-50/20" style={{}}>
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:verified-check-bold" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.25-.59.25-.976.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</td>
</tr>
<tr className="">
<td className="p-4 md:p-6 text-sm font-medium text-slate-700" style={{}}>Organização por disciplina</td>
<td className="p-4 md:p-6 text-center">
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:close-circle-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g className="" fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path className="" d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</div>
</td>
<td className="p-4 md:p-6 text-center bg-orange-50/20" style={{}}>
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:verified-check-bold" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</td>
</tr>
<tr className="">
<td className="p-4 md:p-6 text-sm font-medium text-slate-700" style={{}}>Produção sob demanda</td>
<td className="p-4 md:p-6 text-center">
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:close-circle-linear" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor" strokeWidth="1.5"><circle cx="12" cy="12" r="10"></circle><path d="m14.5 9.5l-5 5m0-5l5 5" strokeLinecap="round"></path></g></svg>
</div>
</td>
<td className="p-4 md:p-6 text-center bg-orange-50/20" style={{}}>
<div className="flex items-center justify-center">
<svg aria-hidden="true" className="" data-icon="solar:verified-check-bold" data-width="20" height="20" role="img" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" clip-rule="evenodd" d="M9.592 3.2a6 6 0 0 1-.495.399c-.298.2-.633.338-.985.408c-.153.03-.313.043-.632.068c-.801.064-1.202.096-1.536.214a2.71 2.71 0 0 0-1.655 1.655c-.118.334-.15.735-.214 1.536a6 6 0 0 1-.068.632c-.07.352-.208.687-.408.985c-.087.13-.191.252-.399.495c-.521.612-.782.918-.935 1.238c-.353.74-.353 1.6 0 2.34c.153.32.414.626.935 1.238c.208.243.312.365.399.495c.2.298.338.633.408.985c.03.153.043.313.068.632c.064.801.096 1.202.214 1.536a2.71 2.71 0 0 0 1.655 1.655c.334.118.735.15 1.536.214c.319.025.479.038.632.068c.352.07.687.209.985.408c.13.087.252.191.495.399c.612.521.918.782 1.238.935c.74.353 1.6.353 2.34 0c.32-.153.626-.414 1.238-.935c.243-.208.365-.312.495-.399c.298-.2.633-.338.985-.408c.153-.03.313-.043.632-.068c.801-.064 1.202-.096 1.536-.214a2.71 2.71 0 0 0 1.655-1.655c.118-.334.15-.735.214-1.536c.025-.319.038-.479.068-.632c.07-.352.209-.687.408-.985c.087-.13.191-.252.399-.495c.521-.612.782-.918.935-1.238c.353-.74.353-1.6 0-2.34c-.153-.32-.414-.626-.935-1.238a6 6 0 0 1-.399-.495a2.7 2.7 0 0 1-.408-.985a6 6 0 0 1-.068-.632c-.064-.801-.096-1.202-.214-1.536a2.71 2.71 0 0 0-1.655-1.655c-.334-.118-.735-.15-1.536-.214a6 6 0 0 1-.632-.068a2.7 2.7 0 0 1-.985-.408a6 6 0 0 1-.495-.399c-.612-.521-.918-.782-1.238-.935a2.71 2.71 0 0 0-2.34 0c-.32.153-.626.414-1.238.935m6.781 6.663a.814.814 0 0 0-1.15-1.15l-4.85 4.85l-1.596-1.595a.814.814 0 0 0-1.15 1.15l2.17 2.17a.814.814 0 0 0 1.15 0z" fill="currentColor" fill-rule="evenodd"></path></svg>
</div>
</td>
</tr>
</tbody>
</table>
</div>
</div>
</section>

<section className="overflow-hidden pt-24 pr-6 pb-24 pl-6 relative" id="testimonials">
<section className="sm:py-24 [animation:fadeSlideIn_0.8s_ease-out_0.1s_both] animate-on-scroll animate text-sm pt-16 pb-16">
<div className="mb-12 text-center text-sm">
<p className="uppercase text-sm text-neutral-500 tracking-widest font-geist mb-2" style={{}}>prova social</p>
<h2 className="sm:text-4xl text-sm font-medium tracking-tighter font-geist">Quem conhece recomenda</h2>
</div>
<div className="relative flex items-center justify-center py-12 sm:py-20 text-sm" style={{minHeight: '450px'}}>
<div className="container text-sm max-w-full w-full" style={{position: 'relative', height: '100%', maskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', WebkitMaskImage: 'linear-gradient(to right, transparent, black 15%, black 85%, transparent)', overflow: 'hidden'}}>
<style>
    @keyframes marquee-ltr {
      0% { transform: translateX(-50%); }
      100% { transform: translateX(0); }
    }
    @keyframes marquee-rtl {
      0% { transform: translateX(0); }
      100% { transform: translateX(-50%); }
    }
    .animate-marquee-ltr {
      animation: marquee-ltr 80s linear infinite;
    }
    .animate-marquee-rtl {
      animation: marquee-rtl 80s linear infinite;
    }
    .group:hover .animate-marquee-ltr,
    .group:hover .animate-marquee-rtl {
      animation-play-state: paused;
    }
  </style>
<div className="group flex flex-col gap-6 w-full py-4">

<div className="flex gap-6 animate-marquee-ltr w-max">

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Mariana Costa" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Mariana Costa</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Aprovada em Cartórios</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          O Vade Mecum do Escriturando Certo foi o centro da minha preparação. A organização por disciplina facilitou demais.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-xs ring-2 ring-white shadow-sm" style={{}}>
            RL
          </div>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Roberto Lima</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Candidato ENAC</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Os destaques nos artigos mais cobrados economizam muito tempo de estudo. Estratégia pura!
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Lucas Oliveira" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Lucas Oliveira</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Oficial de Registro</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Material impresso de altíssima qualidade. Chegou super rápido aqui no interior de SP.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Fernanda P." className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1580489944761-15a19d654956?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Fernanda P.</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Estudante de Direito</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          A atualização constante me deu segurança na hora da prova. Não precisei buscar anexos soltos.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Mariana Costa" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Mariana Costa</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Aprovada em Cartórios</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          O Vade Mecum do Escriturando Certo foi o centro da minha preparação. A organização por disciplina facilitou demais.
        </p>
</div>
<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-full bg-orange-50 flex items-center justify-center text-orange-600 font-bold text-xs ring-2 ring-white shadow-sm" style={{}}>
            RL
          </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Roberto Lima</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Candidato ENAC</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Os destaques nos artigos mais cobrados economizam muito tempo de estudo. Estratégia pura!
        </p>
</div>
<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Lucas Oliveira" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1599566150163-29194dcaad36?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Lucas Oliveira</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Oficial de Registro</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Material impresso de altíssima qualidade. Chegou super rápido aqui no interior de SP.
        </p>
</div>
</div>

<div className="flex gap-6 animate-marquee-rtl w-max">

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="João Mendes" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>João Mendes</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Aprovado 1º Lugar</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          A profundidade do conteúdo é ideal. Nem de mais para confundir, nem de menos. Na medida.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs ring-2 ring-white shadow-sm" style={{}}>
            CS
          </div>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Camila Souza</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Tabeliã Substituta</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Uso no dia a dia do cartório também. A organização facilita muito a consulta rápida.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Beatriz A." className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Beatriz A.</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Candidata TJ/SP</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          O melhor investimento que fiz para os concursos de cartório. Vale cada centavo.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="André R." className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div className="">
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>André R.</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Recém Aprovado</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Só tenho a agradecer. O material direcionado foi crucial na minha aprovação na 1ª fase.
        </p>
</div>

<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="João Mendes" className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>João Mendes</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Aprovado 1º Lugar</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          A profundidade do conteúdo é ideal. Nem de mais para confundir, nem de menos. Na medida.
        </p>
</div>
<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<div className="w-9 h-9 rounded-full bg-slate-100 flex items-center justify-center text-slate-600 font-bold text-xs ring-2 ring-white shadow-sm" style={{}}>
            CS
          </div>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Camila Souza</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Tabeliã Substituta</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          Uso no dia a dia do cartório também. A organização facilita muito a consulta rápida.
        </p>
</div>
<div className="w-[320px] shrink-0 rounded-2xl bg-white p-5 shadow-[0_2px_8px_rgba(0,0,0,0.04)] ring-1 ring-black/5 hover:ring-orange-200 transition-all duration-300" style={{}}>
<div className="flex items-center gap-3 mb-3">
<img alt="Beatriz A." className="w-9 h-9 rounded-full object-cover ring-2 ring-white shadow-sm" src="https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=100&amp;h=100&amp;fit=crop&amp;crop=faces"/>
<div>
<div className="flex items-center gap-1.5">
<span className="font-semibold text-slate-900 text-sm font-geist" style={{}}>Beatriz A.</span>
<svg className="text-emerald-500" fill="currentColor" height="14" style={{}} viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg">
<path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm-2 15l-5-5 1.41-1.41L10 14.17l7.59-7.59L19 8l-9 9z"></path>
</svg>
</div>
<div className="text-xs text-slate-500 font-medium" style={{}}>Candidata TJ/SP</div>
</div>
</div>
<p className="text-slate-600 text-sm leading-relaxed font-geist" style={{}}>
          O melhor investimento que fiz para os concursos de cartório. Vale cada centavo.
        </p>
</div>
</div>
</div>
</div>
</div>
</section>
</section><section className="py-24 px-6 bg-white border-t border-neutral-100 relative overflow-hidden">

<div className="absolute inset-0 h-full w-full bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:24px_24px]"></div>
<div className="max-w-5xl mx-auto relative z-10">

<div className="text-center max-w-2xl mx-auto mb-16">
<div className="inline-flex items-center gap-1.5 rounded-full border border-orange-200 bg-orange-50 px-3 py-1 text-xs font-medium text-orange-700 mb-6">
<span className="relative flex h-1.5 w-1.5">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-orange-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-1.5 w-1.5 bg-orange-500"></span>
</span>
        Entenda a Jornada
      </div>
<h2 className="text-3xl md:text-4xl font-semibold text-slate-900 tracking-tight font-geist mb-6">
        Do ENAC à Delegação
      </h2>
<p className="text-slate-500 text-lg leading-relaxed font-light">
        O caminho para se tornar titular mudou. Compreenda a distinção entre a habilitação obrigatória e a etapa competitiva.
      </p>
</div>

<div className="grid md:grid-cols-2 gap-6 lg:gap-10 items-stretch">

<div className="group relative flex flex-col h-full bg-white rounded-[2rem] p-8 border border-neutral-200 shadow-[0_2px_8px_rgba(0,0,0,0.04)] hover:shadow-xl hover:shadow-orange-500/5 transition-all duration-300 hover:border-orange-200 hover:-translate-y-1">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-orange-50 text-orange-600 ring-1 ring-orange-100 group-hover:bg-orange-600 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-badge-check" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.78 4.78 4 4 0 0 1-6.74 0 4 4 0 0 1-4.78-4.78 4 4 0 0 1 0-6.74Z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<span className="inline-flex items-center rounded-full bg-orange-50 px-2.5 py-1 text-xs font-semibold text-orange-700 ring-1 ring-inset ring-orange-600/10">
            Habilitação
          </span>
</div>
<h3 className="text-xl font-semibold text-slate-900 font-geist mb-2">Exame Nacional (ENAC)</h3>
<p className="text-sm font-medium text-slate-500 mb-6">Obrigatório e Eliminatório</p>
<div className="flex-grow space-y-4 text-sm text-slate-600 leading-relaxed">
<p className="">
            Criado pelo CNJ para garantir uniformidade e qualidade nos serviços. ; trata-se de um filtro de qualificação indispensável.
          </p>
<p className="">
            Sua aprovação habilita bacharéis em Direito ou profissionais experientes a participarem dos concursos de delegação.
          </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-100 grid gap-3">
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Requisito para novos concursos</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Certificado válido por 6 anos</span>
</div>
</div>
</div>

<div className="group relative flex flex-col h-full bg-slate-50/50 rounded-[2rem] p-8 border border-neutral-200 shadow-sm transition-all duration-300 hover:bg-white hover:shadow-xl hover:shadow-slate-200/40 hover:border-slate-300 hover:-translate-y-1">
<div className="mb-6 flex items-center justify-between">
<div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-slate-700 shadow-sm ring-1 ring-black/5 group-hover:bg-slate-800 group-hover:text-white transition-colors duration-300">
<svg className="lucide lucide-landmark" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><line x1="3" x2="21" y1="22" y2="22"></line><line x1="6" x2="6" y1="18" y2="11"></line><line x1="10" x2="10" y1="18" y2="11"></line><line x1="14" x2="14" y1="18" y2="11"></line><line x1="18" x2="18" y1="18" y2="11"></line><polygon points="12 2 20 7 4 7"></polygon></svg>
</div>
<span className="inline-flex items-center rounded-full bg-slate-200/50 px-2.5 py-1 text-xs font-semibold text-slate-600 ring-1 ring-inset ring-slate-500/10">
            Competição
          </span>
</div>
<h3 className="text-xl font-semibold text-slate-900 font-geist mb-2">Concurso de Cartório</h3>
<p className="text-sm font-medium text-slate-500 mb-6">Ingresso na Carreira</p>
<div className="flex-grow space-y-4 text-sm text-slate-600 leading-relaxed">
<p className="">
            O processo seletivo público de provas e títulos. Nesta etapa, . A classificação final define a escolha da serventia.
          </p>
<p className="">
            Os aprovados tornam-se tabeliães ou oficiais de registro, profissionais do direito com fé pública atuando em nome do Estado.
          </p>
</div>
<div className="mt-8 pt-6 border-t border-neutral-200/60 grid gap-3">
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Disputa por titularidade</span>
</div>
<div className="flex items-center gap-3 text-sm text-slate-600 font-medium">
<svg className="h-4 w-4 text-emerald-500 flex-shrink-0" fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><polyline points="20 6 9 17 4 12"></polyline></svg>
<span className="">Segurança jurídica dos atos</span>
</div>
</div>
</div>
</div>

<div className="mt-12 flex justify-center">
<div className="inline-flex flex-col sm:flex-row items-center gap-3 rounded-2xl border border-neutral-200 bg-white/80 backdrop-blur-sm px-6 py-3 shadow-sm text-sm text-slate-600">
<div className="flex items-center gap-2">
<svg className="lucide lucide-info text-orange-500" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg>
<span className="font-semibold text-slate-900">Nota importante:</span>
</div>
<span className="text-center sm:text-left">O  oferece materiais estratégicos para vencer ambas as etapas.</span>
</div>
</div>
</div>
</section>

<section className="py-24 px-6 bg-slate-900 text-white relative overflow-hidden rounded-t-[48px] -mb-10 z-10" style={{}}>
<div className="bg-center opacity-40 absolute top-0 right-0 bottom-0 left-0"><video autoplay="" className="w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" data-container-bg="true" loop="" muted="" playsinline="" src="https://cdn.flw.chat/upload/330808cb-c91e-48d5-be55-12532f29bbee/VIDEO/31f1f74_20251208191456051_video_escriturando_parte_laranja.mp4?AWSAccessKeyId=AKIAZUM25FKLLQ4UTA42&amp;Expires=1922987697&amp;response-content-disposition=inline&amp;Signature=D4q81jAaPDkJS5sgUzu27EiXKmk%3D"></video></div>
<div className="absolute top-0 right-0 w-[500px] h-[500px] bg-orange-600/30 rounded-full blur-[100px] -translate-y-1/2 translate-x-1/2" style={{}}></div>
<div className="max-w-4xl mx-auto text-center relative z-10">
<h2 className="md:text-5xl bg-clip-text text-4xl font-semibold text-transparent tracking-tight font-geist bg-gradient-to-br from-yellow-400 to-yellow-600 mb-6">O ENAC não é competitivo. Sua preparação também deve ser.</h2>
<p className="text-lg font-black text-slate-50 mb-10">Garanta agora o material certo para estudar com clareza, confiança e estratégia.</p>
<div className="flex flex-col sm:flex-row justify-center gap-4">
<button className="group shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300 overflow-hidden hover:bg-orange-600 font-medium text-white bg-orange-500 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: 'rgba(234, 88, 12, 0.85) 0px 18px 40px -15px, rgba(255, 247, 237, 0.9) 0px 2px 4px inset', borderRadius: '0.5rem', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 146, 60, 0.4), rgba(234, 88, 12, 0.5))', -BorderRadiusBefore: '8px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full cursor-pointer" onclick="window.location.href='https://escriturandocerto.hotmart.host/vade-mecum-enac-2-2025-produto-fisico-d52fe2f5-d8e2-4f08-8398-9d86f22e3d9d?_hi=eyJjaWQiOiIxNzYzNzUxOTcyNDI4Mzg3MjA3NTg4Mzc2NjIzMzAwIiwiYmlkIjoiMTc2Mzc1MTk3MjQyODM4NzIwNzU4ODM3NjYyMzMwMCIsInNpZCI6IjI3NDIzZDMxZGIyYjQ1ZDNiNWYwMTVlODQ0ODQ2NTlkIn0=.1764186783401'" role="button" style={{}}></div>
<span className="flex items-center gap-2 relative">VADE MECUM CARTÓRIO ENAC</span>
</button>
<button className="group shadow-orange-500/30 hover:shadow-orange-500/60 transition-all duration-300 overflow-hidden hover:bg-orange-600 font-medium text-white bg-orange-500 rounded-lg pt-4 pr-8 pb-4 pl-8 relative shadow-lg" style={{boxShadow: 'rgba(234, 88, 12, 0.85) 0px 18px 40px -15px, rgba(255, 247, 237, 0.9) 0px 2px 4px inset', borderRadius: '0.5rem', position: 'relative', -BorderGradient: 'linear-gradient(180deg, rgba(251, 146, 60, 0.4), rgba(234, 88, 12, 0.5))', -BorderRadiusBefore: '8px'}}>
<div className="group-hover:translate-y-0 group-hover:opacity-0 transition-all duration-300 bg-white/10 absolute top-0 right-0 bottom-0 left-0 translate-y-full" style={{}}></div>
<span className="flex items-center gap-2 relative">VADE MECUM CARTÓRIOS LEIS ESTADUAIS RORAIMA</span>
</button>
</div>
<div className="flex flex-wrap gap-8 text-sm text-slate-50 mt-12 gap-x-8 gap-y-8 justify-center">
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:lock-password-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M2 16c0-2.828 0-4.243.879-5.121C3.757 10 5.172 10 8 10h8c2.828 0 4.243 0 5.121.879C22 11.757 22 13.172 22 16s0 4.243-.879 5.121C20.243 22 18.828 22 16 22H8c-2.828 0-4.243 0-5.121-.879C2 20.243 2 18.828 2 16Z" strokeWidth="1.5"></path><path d="M6 10V8a6 6 0 1 1 12 0v2" strokeLinecap="round" strokeWidth="1.5"></path><path d="M8 16h.009m3.982 0H12m3.991 0H16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path></g></svg>
                    Compra Segura Hotmart
                </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:box-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="m15.578 3.382l2 1.05c2.151 1.129 3.227 1.693 3.825 2.708C22 8.154 22 9.417 22 11.942v.117c0 2.524 0 3.787-.597 4.801c-.598 1.015-1.674 1.58-3.825 2.709l-2 1.049C13.822 21.539 12.944 22 12 22s-1.822-.46-3.578-1.382l-2-1.05c-2.151-1.129-3.227-1.693-3.825-2.708C2 15.846 2 14.583 2 12.06v-.117c0-2.525 0-3.788.597-4.802c.598-1.015 1.674-1.58 3.825-2.708l2-1.05C10.178 2.461 11.056 2 12 2s1.822.46 3.578 1.382ZM21 7.5l-4 2M12 12L3 7.5m9 4.5v9.5m0-9.5l4.5-2.25l.5-.25m0 0V13m0-3.5l-9.5-5" fill="none" stroke="currentColor" strokeLinecap="round" strokeWidth="1.5"></path></svg>
                    Envio Rastreado
                </div>
<div className="flex items-center gap-2">
<svg aria-hidden="true" data-icon="solar:chat-round-dots-linear" height="1em" role="img" viewbox="0 0 24 24" width="1em" xmlns="http://www.w3.org/2000/svg"><g fill="none" stroke="currentColor"><path d="M8 12h.009m3.982 0H12m3.991 0H16" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2"></path><path d="M12 22c5.523 0 10-4.477 10-10S17.523 2 12 2S2 6.477 2 12c0 1.6.376 3.112 1.043 4.453c.178.356.237.763.134 1.148l-.595 2.226a1.3 1.3 0 0 0 1.591 1.592l2.226-.596a1.63 1.63 0 0 1 1.149.133A9.96 9.96 0 0 0 12 22Z" strokeWidth="1.5"></path></g></svg>
                    Suporte Pós-compra
                </div>
</div>
</div>
</section>

<footer className="bg-white border-neutral-200 border-t pt-20 pb-10">
<div className="max-w-6xl mr-auto ml-auto pr-6 pl-6">
<div className="flex flex-col md:flex-row gap-6 gap-x-6 gap-y-6 items-center justify-between">
<div className="flex items-center gap-2">
<span className="bg-center text-lg font-semibold text-slate-900 tracking-tight font-geist w-60 h-10 bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/0c42d811-bf41-4df5-839b-e197ea950520_320w.png)] bg-cover" style={{}}></span>
</div>
<p className="text-slate-500 text-sm" style={{}}>Seu sucesso no concurso de Cartório começa aqui!</p>
<a className="flex items-center justify-center hover:bg-orange-50 hover:text-orange-500 transition-colors bg-clip-text text-transparent w-10 h-10 border-neutral-200 border rounded-full" href="https://www.instagram.com/escriturandocerto/">
<svg aria-hidden="true" className="w-[20px] h-[20px]" data-icon="simple-icons:instagram" data-icon-replaced="true" data-width="20" height="20" role="img" strokeWidth="2" style={{width: '20px', height: '20px', color: 'rgb(249, 115, 22)'}} viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path className="" d="M7.03.084c-1.277.06-2.149.264-2.91.563a5.9 5.9 0 0 0-2.124 1.388a5.9 5.9 0 0 0-1.38 2.127C.321 4.926.12 5.8.064 7.076s-.069 1.688-.063 4.947s.021 3.667.083 4.947c.061 1.277.264 2.149.563 2.911c.308.789.72 1.457 1.388 2.123a5.9 5.9 0 0 0 2.129 1.38c.763.295 1.636.496 2.913.552c1.278.056 1.689.069 4.947.063s3.668-.021 4.947-.082c1.28-.06 2.147-.265 2.91-.563a5.9 5.9 0 0 0 2.123-1.388a5.9 5.9 0 0 0 1.38-2.129c.295-.763.496-1.636.551-2.912c.056-1.28.07-1.69.063-4.948c-.006-3.258-.02-3.667-.081-4.947c-.06-1.28-.264-2.148-.564-2.911a5.9 5.9 0 0 0-1.387-2.123a5.9 5.9 0 0 0-2.128-1.38c-.764-.294-1.636-.496-2.914-.55C15.647.009 15.236-.006 11.977 0S8.31.021 7.03.084m.14 21.693c-1.17-.05-1.805-.245-2.228-.408a3.7 3.7 0 0 1-1.382-.895a3.7 3.7 0 0 1-.9-1.378c-.165-.423-.363-1.058-.417-2.228c-.06-1.264-.072-1.644-.08-4.848c-.006-3.204.006-3.583.061-4.848c.05-1.169.246-1.805.408-2.228c.216-.561.477-.96.895-1.382a3.7 3.7 0 0 1 1.379-.9c.423-.165 1.057-.361 2.227-.417c1.265-.06 1.644-.072 4.848-.08c3.203-.006 3.583.006 4.85.062c1.168.05 1.804.244 2.227.408c.56.216.96.475 1.382.895s.681.817.9 1.378c.165.422.362 1.056.417 2.227c.06 1.265.074 1.645.08 4.848c.005 3.203-.006 3.583-.061 4.848c-.051 1.17-.245 1.805-.408 2.23c-.216.56-.477.96-.896 1.38a3.7 3.7 0 0 1-1.378.9c-.422.165-1.058.362-2.226.418c-1.266.06-1.645.072-4.85.079s-3.582-.006-4.848-.06m9.783-16.192a1.44 1.44 0 1 0 1.437-1.442a1.44 1.44 0 0 0-1.437 1.442M5.839 12.012a6.161 6.161 0 1 0 12.323-.024a6.162 6.162 0 0 0-12.323.024M8 12.008A4 4 0 1 1 12.008 16A4 4 0 0 1 8 12.008" fill="currentColor"></path></svg>
</a>
</div>
<div className="mt-10 pt-6 border-t border-neutral-100 text-center text-xs text-slate-400" style={{}}>
                © 2025 Escriturando Certo. Todos os direitos reservados.
            </div>
</div>
</footer>


    </>
  );
}
