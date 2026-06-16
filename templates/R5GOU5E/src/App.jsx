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



    lucide.createIcons();
  
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      
<div className="relative min-h-screen">
<div className="fixed inset-0 -z-10">
<iframe className="w-full h-full" frameborder="0" height="100%" src="https://my.spline.design/thresholddarkambientui-v0gkZCfi6zXm69kE0wccy70f/" width="100%"></iframe>
</div>
<div className="fixed inset-0 -z-5 bg-gradient-to-b from-black/40 via-transparent to-black/70"></div>

<nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 animate-fade-in delay-100 bg-white/5 border-white/10 border rounded-full pt-4 pr-8 pb-4 pl-8 shadow-xl backdrop-blur-md -rotate-x-10">
<div className="flex items-center justify-between" id="aura-emdegx9r0">
<div className="flex items-center">
<div className="w-8 h-8 flex bg-gradient-to-br from-blue-400 to-purple-500 rounded-full items-center justify-center">
<svg className="lucide lucide-server w-[16px] h-[16px]" data-lucide="server" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" style={{width: '16px', height: '16px', color: 'rgb(255, 255, 255)'}} viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect className="" height="8" rx="2" ry="2" width="20" x="2" y="2"></rect><rect height="8" rx="2" ry="2" width="20" x="2" y="14"></rect><line x1="6" x2="6.01" y1="6" y2="6"></line><line x1="6" x2="6.01" y1="18" y2="18"></line></svg>
</div>
<span className="text-sm font-medium text-gray-300 ml-3" id="aura-emdegxrqb">Флант</span>
</div>
<div className="hidden md:flex text-sm text-gray-400 ml-12 space-x-8 items-center" id="aura-emdegxcrn">
<a className="hover:text-white transition" href="#">Продукты</a>
<a className="hover:text-white transition" href="#">Кейсы</a>
<a className="hover:text-white transition text-gray-400" href="#" id="aura-emdegxk6b">О компании</a>
</div>
<div className="flex items-center space-x-4 ml-12">
<a className="hidden md:inline-block hover:text-white transition text-sm font-medium text-zinc-400" href="#">Войти</a>
<a className="hover:bg-gray-200 transition hover:shadow-xl text-sm font-medium text-slate-50 bg-gradient-to-r from-indigo-500 to-purple-600 rounded-full pt-2 pr-4 pb-2 pl-4 shadow-lg" href="#">
            Связаться
          </a>
</div>
</div>
</nav>

<section className="relative z-10 flex flex-col md:pt-40 md:pb-40 text-center pt-32 pr-6 pb-32 pl-6 items-center" id="aura-emdegxn03">
<div className="absolute top-1/2 left-1/2 w-[800px] h-[600px] -translate-x-1/2 -translate-y-1/2 blur-[120px] pointer-events-none bg-blue-500/10 rounded-full"></div>
<h1 className="sm:text-6xl lg:text-7xl leading-tight max-w-5xl animate-blur-in delay-300 text-base font-normal tracking-tight"><span className="bg-clip-text text-7xl font-extrabold text-transparent tracking-normal bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">Комплексное
DevOps </span><span className="bg-clip-text text-5xl font-bold text-transparent tracking-normal bg-gradient-to-r from-blue-400 via-purple-400 to-cyan-400">сопровождение инфраструктуры</span><br className="hidden sm:block"/></h1>
<p className="sm:text-xl max-w-3xl leading-relaxed animate-slide-up delay-400 text-lg text-gray-300 bg-slate-500/0 mt-8">
        24/7 сопровождение цифровых продуктов и инфраструктуры<br className="hidden md:block"/>
        силами выделенной DevOps-команды. Делаем вашу ИТ-экосистему<br className="hidden md:block"/>
        устойчивой к нагрузкам и готовой к росту бизнеса.
      </p>

<div className="mt-12 w-full max-w-md animate-blur-in delay-500">
<div className="flex flex-col sm:flex-row gap-3">
<div className="flex-1 relative">
<input className="w-full placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-400/50 focus:border-blue-400/50 transition text-white bg-white/10 border-white/20 border rounded-full pt-3 pr-4 pb-3 pl-4 backdrop-blur-sm" placeholder="Ваш e-mail" type="email"/>
<svg className="lucide lucide-mail absolute right-4 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" data-lucide="mail" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m22 7-8.991 5.727a2 2 0 0 1-2.009 0L2 7"></path><rect height="16" rx="2" width="20" x="2" y="4"></rect></svg>
</div>
<button className="hover:from-blue-600 hover:to-purple-700 transition hover:shadow-xl transform hover:scale-105 font-medium text-white bg-gradient-to-r from-blue-500 to-purple-500 rounded-full pt-3 pr-8 pb-3 pl-8 shadow-lg">
            Получить консультацию
          </button>
</div>
<p className="text-xs text-gray-400 mt-3 animate-fade-in delay-600">
          Бесплатно • Без спама • Отписка в любой момент
        </p>
</div><p className="sm:text-xl max-w-xl leading-relaxed animate-slide-up delay-400 text-lg text-gray-300 bg-slate-500/0 mt-8 mr-0 mb-0 ml-0 -translate-x-1 translate-y-2"></p>
<p className="hidden md:block animate-slide-up delay-700" id="aura-emdegxwub">DevOps-сопровождение
инфраструктуры позволяет:</p><div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full max-w-2xl animate-slide-up delay-700 -translate-y-26 -translate-y-1 -translate-y-22 mt-5 translate-y-1 -rotate-5 scale-90 -skew-x-5 skew-y-5 perspective-dramatic">
<div className="hover:bg-white/10 transition text-center bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-8 pl-8 backdrop-blur-sm">
<div className="text-2xl font-medium mb-1">в 5 раз</div>
<div className="text-sm text-gray-400">ускорить time to market</div>
</div>
<div className="hover:bg-white/10 transition text-center bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-6 pl-8 backdrop-blur-sm">
<div className="text-2xl font-medium mb-1">на 80%</div>
<div className="text-sm text-gray-400">сократить рутинные задачи
</div>
</div>
<div className="hover:bg-white/10 transition text-center bg-white/5 border-white/10 border rounded-xl pt-8 pr-8 pb-6 pl-8 backdrop-blur-sm">
<div className="text-2xl font-medium mb-1">до 99%
</div>
<div className="text-sm text-gray-400">сократить кол-во отказов
</div>
</div>
</div>

</section>
</div>


    </>
  );
}
