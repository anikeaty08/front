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



    !function(){if(!window.UnicornStudio){window.UnicornStudio={isInitialized:!1};var i=document.createElement("script");i.src="https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v1.4.29/dist/unicornStudio.umd.js",i.onload=function(){window.UnicornStudio.isInitialized||(UnicornStudio.init(),window.UnicornStudio.isInitialized=!0)},(document.head || document.body).appendChild(i)}}();
  


        (function() {
            const canvas = document.getElementById('canvas-aura-emmabuf9700a9axf');
            if (!canvas) return;
            const ctx = canvas.getContext('2d');
            let width, height, time = 0;

            function resize() {
                width = canvas.width = canvas.parentElement.clientWidth;
                height = canvas.height = canvas.parentElement.clientHeight;
            }

            window.addEventListener('resize', resize);
            resize();

            function animate() {
                time += 0.0015;
                ctx.fillStyle = '#02040a';
                ctx.fillRect(0, 0, width, height);
                ctx.globalCompositeOperation = 'screen';

                const numFolds = 28;
                for (let i = 0; i < numFolds; i++) {
                    const normalizedX = i / numFolds;
                    const xPos = (normalizedX * width) + Math.sin(time * 2 + i) * (width * 0.05);
                    const foldWidth = (width / numFolds) * 3;
                    
                    const baseIntensity = Math.sin(normalizedX * Math.PI) * 0.6 + 0.4;
                    const waveIntensity = (Math.sin(time * 3 + i * 0.4) + 1) * 0.5;
                    const gradientBoost = (normalizedX * 0.5) + 0.5;
                    const finalIntensity = baseIntensity * waveIntensity * gradientBoost;

                    const grad = ctx.createLinearGradient(0, 0, 0, height);
                    grad.addColorStop(0, `rgba(2, 6, 20, 0)`);
                    grad.addColorStop(0.4, `rgba(14, 60, 120, ${finalIntensity * 0.2})`);
                    grad.addColorStop(0.7, `rgba(0, 160, 240, ${finalIntensity * 0.5})`);
                    grad.addColorStop(1, `rgba(180, 240, 255, ${finalIntensity * 0.9})`);

                    ctx.fillStyle = grad;
                    ctx.beginPath();
                    ctx.rect(xPos - foldWidth / 2, 0, foldWidth, height);
                    ctx.fill();
                }

                ctx.globalCompositeOperation = 'source-over';
                const radialGrad = ctx.createRadialGradient(width * 0.8, height, 0, width * 0.8, height, height * 0.8);
                radialGrad.addColorStop(0, 'rgba(0, 180, 255, 0.15)');
                radialGrad.addColorStop(1, 'rgba(0, 0, 0, 0)');
                ctx.fillStyle = radialGrad;
                ctx.fillRect(0, 0, width, height);

                requestAnimationFrame(animate);
            }
            animate();
            if (window.lucide) {
                window.lucide.createIcons();
            }
        })();
    


            UnicornStudio.init();
        


        (function() {
            const setupCanvas1 = () => {
                const canvas = document.getElementById('canvas-card1');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                let width, height;
                let particles = [];

                const init = () => {
                    width = canvas.offsetWidth;
                    height = canvas.offsetHeight;
                    canvas.width = width * window.devicePixelRatio;
                    canvas.height = height * window.devicePixelRatio;
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                    
                    particles = [];
                    for(let i=0; i<300; i++) {
                        particles.push({
                            x: width / 2 + (Math.random() - 0.5) * 150,
                            y: height * 0.4 + (Math.random() - 0.5) * 200,
                            vx: (Math.random() - 0.5) * 0.2,
                            vy: (Math.random() - 0.5) * 0.2 - 0.1,
                            radius: Math.random() * 1.5 + 0.5,
                            alpha: Math.random() * 0.6 + 0.1,
                            color: `rgba(79, 70, 229, `
                        });
                    }
                };

                const animate = () => {
                    ctx.clearRect(0, 0, width, height);
                    particles.forEach(p => {
                        p.x += p.vx; p.y += p.vy;
                        if(p.y < 0) p.y = height;
                        if(p.x < 0) p.x = width;
                        if(p.x > width) p.x = 0;
                        const dx = p.x - width/2;
                        const dy = p.y - height*0.4;
                        const dist = Math.sqrt(dx*dx + dy*dy);
                        const dynamicAlpha = Math.max(0, p.alpha * (1 - dist/250));
                        ctx.beginPath();
                        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
                        ctx.fillStyle = p.color + dynamicAlpha + ')';
                        ctx.fill();
                    });
                    requestAnimationFrame(animate);
                };
                init(); animate();
                window.addEventListener('resize', init);
            };

            const setupCanvas3 = () => {
                const canvas = document.getElementById('canvas-card3');
                if (!canvas) return;
                const ctx = canvas.getContext('2d');
                let width, height;
                let particles = [];

                const init = () => {
                    width = canvas.offsetWidth;
                    height = canvas.offsetHeight;
                    canvas.width = width * window.devicePixelRatio;
                    canvas.height = height * window.devicePixelRatio;
                    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
                    
                    particles = [];
                    const centerX = width * 1.2;
                    const centerY = height * 0.8;
                    const baseRadius = width * 0.9;

                    for(let i=0; i<1500; i++) {
                        const angle = Math.PI + (Math.random() * Math.PI * 0.65); 
                        const r = baseRadius + (Math.random() - 0.5) * 120 * Math.random();
                        const x = centerX + Math.cos(angle) * r;
                        const y = centerY + Math.sin(angle) * r;
                        const normalizedX = Math.max(0, Math.min(1, x / width));
                        
                        const rCol = Math.round(59 + (6 - 59) * normalizedX);
                        const gCol = Math.round(130 + (182 - 130) * normalizedX);
                        const bCol = Math.round(246 + (212 - 246) * normalizedX);

                        particles.push({
                            x: x, y: y, originX: x, originY: y,
                            radius: Math.random() * 1.2 + 0.3,
                            alpha: Math.random() * 0.5 + 0.1,
                            color: `rgba(${rCol}, ${gCol}, ${bCol}, `,
                            offset: Math.random() * Math.PI * 2,
                            speed: 0.01 + Math.random() * 0.02
                        });
                    }
                };

                const animate = () => {
                    ctx.clearRect(0, 0, width, height);
                    const time = Date.now() * 0.001;
                    particles.forEach(p => {
                        const floatX = Math.sin(time * p.speed + p.offset) * 2;
                        const floatY = Math.cos(time * p.speed + p.offset) * 2;
                        ctx.beginPath();
                        ctx.arc(p.originX + floatX, p.originY + floatY, p.radius, 0, Math.PI * 2);
                        const twinkle = Math.sin(time * 3 + p.offset) * 0.5 + 0.5;
                        const finalAlpha = p.alpha * (0.5 + twinkle * 0.5);
                        ctx.fillStyle = p.color + finalAlpha + ')';
                        ctx.fill();
                    });
                    requestAnimationFrame(animate);
                };
                init(); animate();
                window.addEventListener('resize', init);
            };

            // Execute immediately upon parsing the script inside the section
            setupCanvas1();
            setupCanvas3();
        })();
    


        lucide.createIcons();
    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="aura-background-component -z-10 w-full top-0 opacity-60 absolute h-[800px]" data-alpha-mask="69" style={{maskImage: 'linear-gradient(to bottom, transparent, black 0%, black 69%, transparent)', WebkitMaskImage: 'linear-gradient(to bottom, transparent, black 0%, black 69%, transparent)'}}><div className="aura-background-component top-0 w-full -z-10 absolute h-full">
<div className="absolute w-full h-full left-0 top-0 -z-10" data-us-project="FixNvEwvWwbu3QX9qC3F"><div data-us-text="id-tteptpjwhq1nzsnayv28p" style={{width: '5px', top: '367.405px', left: '763.635px', fontSize: '10px', lineHeight: '65.1906px', letterSpacing: '0px', fontFamily: 'Inter', fontWeight: '400', textAlign: 'left', position: 'absolute', wordBreak: 'break-word', transform: 'rotateZ(0deg)', color: 'transparent', zIndex: '2'}}>.</div></div>

</div></div>

<nav className="fixed w-full z-50 border-white/5 border-b top-0 right-0 left-0 backdrop-blur-xl">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="flex h-16 items-center justify-between">
<div className="flex items-center gap-8">
<a className="flex items-center gap-3" href="#">
</a><a className="inline-flex items-center justify-center bg-center w-[90px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec5ac4c1-730a-4883-b089-8d8c66d81f36_320w.png)] bg-cover rounded-full invert" href="#"></a>
<div className="hidden lg:flex gap-1 border border-white/10 rounded-full px-4 h-10 items-center">
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Products</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Solutions</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Developers</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Resources</a>
<a className="px-3 py-1.5 text-sm font-medium text-zinc-300 hover:text-white transition-colors" href="#">Pricing</a>
</div>
</div>
<div className="flex gap-4 items-center">
<a className="hidden sm:block hover:text-white transition-colors text-sm font-medium text-zinc-300 pt-2 pr-3 pb-2 pl-3" href="#">Sign in</a>
<a className="group inline-flex hover:shadow-[0_12px_20px_-6px_rgba(151,65,252,0.28)] transition duration-300 ease-out select-none cursor-pointer focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/60 transform-gpu hover:-translate-y-0.5 text-white rounded-full pt-[1px] pr-[1px] pb-[1px] pl-[1px] relative shadow-[0_8px_16px_-4px_rgba(151,65,252,0.2)]" href="#" style={{backgroundImage: 'linear-gradient(144deg, rgb(175, 64, 255), rgb(91, 66, 243) 50%, rgb(0, 221, 235))'}}>
<span className="flex items-center justify-center gap-2 text-[14px] leading-none min-w-[110px] transition-colors duration-300 group-hover:bg-transparent font-medium bg-[#0b0f17] h-full rounded-full pt-2 pr-4 pb-2 pl-4">
            Contact sales
            <svg className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</span>
</a>
</div>
</div>
</div>
</nav>

<header className="lg:pt-48 lg:pb-32 pt-48 pb-32 relative overflow-hidden bg-[#02040a]">
<canvas className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80" height="852" id="canvas-aura-emmabuf9700a9axf" width="1568"></canvas>
<div className="grid lg:grid-cols-2 max-w-7xl z-10 mr-auto ml-auto pr-6 pl-6 relative gap-x-12 gap-y-12 items-center">

<div className="max-w-2xl">
<h1 className="text-6xl lg:text-7xl font-semibold tracking-tight text-white mb-8 leading-[1.1]">
                Financial infrastructure to <span className="text-indigo-400">grow your revenue</span>
</h1>
<p className="text-xl text-slate-400 mb-8 leading-relaxed max-w-lg">
                Join the millions of companies that use NovaPay to accept payments online and in person, embed financial services, power custom revenue models, and build a more profitable business.
            </p>
<div className="flex flex-col sm:flex-row gap-4 items-start sm:items-center">
<button className="relative group border border-white/5 rounded-full focus:outline-none focus:ring-4 focus:ring-cyan-500/10 transition-all duration-300" style={{background: 'radial-gradient(140% 140% at 20% 20%, rgba(255, 255, 255, 0.08), transparent 40%), linear-gradient(180deg, rgba(255, 255, 255, 0.06), rgba(0, 0, 0, 0.22)), rgba(30, 41, 59, 0.4)', boxShadow: 'inset 0 1px 1px rgba(255, 255, 255, 0.1), 0 8px 20px -4px rgba(0,0,0,0.4)'}}>

<div className="absolute inset-[4px] rounded-full border border-white/5 pointer-events-none" style={{background: 'radial-gradient(120% 120% at 25% 30%, rgba(255, 255, 255, 0.06), transparent 48%), linear-gradient(180deg, rgba(0, 0, 0, 0.45), rgba(255, 255, 255, 0.02)), rgba(15, 23, 42, 0.6)', boxShadow: 'inset 0 2px 4px rgba(0,0,0,0.5)'}}></div>

<div className="absolute inset-[4px] rounded-full overflow-hidden pointer-events-none opacity-40">
<div className="absolute -top-[40%] -right-[20%] w-[60%] h-[160%] blur-[1px]" style={{background: 'linear-gradient(90deg, transparent, rgba(255, 255, 255, 0.15), transparent)'}}></div>
</div>

<div className="flex gap-2 group-hover:text-white transition-colors z-10 font-medium text-white/90 pt-3 pr-6 pb-3 pl-6 relative drop-shadow-sm gap-x-2 gap-y-2 items-center justify-center">
        Start now 
        <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</button>
<button className="text-slate-300 px-6 py-3 font-medium hover:text-white flex items-center gap-2 group">
                    Contact sales <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>

<div className="relative hidden lg:block">

<div className="-translate-y-1/2 absolute top-1/2 right-0 z-20 border-[6px] transform transition hover:scale-105 duration-500 bg-white w-[280px] border-slate-100 rounded-[2rem] p-4 shadow-2xl rotate-x-[4deg] rotate-y-[-6deg]">
<div className="flex flex-col mt-4 mb-6 items-center">
<div className="w-12 h-12 bg-gradient-to-br from-pink-400 to-orange-300 rounded-xl shadow-lg mb-3 flex items-center justify-center text-white">
<svg className="lucide lucide-camera" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14.5 4h-5L7 7H4a2 2 0 0 0-2 2v9a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V9a2 2 0 0 0-2-2h-3l-2.5-3z"></path><circle cx="12" cy="13" r="3"></circle></svg>
</div>
<h3 className="text-slate-900 font-semibold">Prism Photos</h3>
<p className="text-slate-500 text-sm">$39.00 / month</p>
</div>
<button className="flex hover:bg-slate-800 transition text-sm font-medium text-white bg-slate-900 w-full rounded-full mb-4 pt-2.5 pb-2.5 shadow-md items-center justify-center">
<svg className="mr-1.5 text-lg" height="1em" viewbox="0 0 32 32" width="1em" xmlns="http://www.w3.org/2000/svg"><path d="M9.438 31.401a7 7 0 0 1-1.656-1.536a20 20 0 0 1-1.422-1.938a18.9 18.9 0 0 1-2.375-4.849c-.667-2-.99-3.917-.99-5.792c0-2.094.453-3.922 1.339-5.458a7.7 7.7 0 0 1 2.797-2.906a7.45 7.45 0 0 1 3.786-1.12q.705.002 1.51.198c.385.109.854.281 1.427.495c.729.281 1.13.453 1.266.495c.427.156.786.224 1.068.224c.214 0 .516-.068.859-.172c.193-.068.557-.188 1.078-.411c.516-.188.922-.349 1.245-.469c.495-.146.974-.281 1.401-.349a6.7 6.7 0 0 1 1.531-.063a9 9 0 0 1 2.589.557c1.359.547 2.458 1.401 3.276 2.615a6.4 6.4 0 0 0-.969.734a8.2 8.2 0 0 0-1.641 2.005a6.8 6.8 0 0 0-.859 3.359c.021 1.443.391 2.714 1.12 3.813a7.2 7.2 0 0 0 2.047 2.047c.417.281.776.474 1.12.604c-.161.5-.333.984-.536 1.464a19 19 0 0 1-1.667 3.083c-.578.839-1.031 1.464-1.375 1.88c-.536.635-1.052 1.12-1.573 1.458c-.573.38-1.25.583-1.938.583a4.4 4.4 0 0 1-1.38-.167c-.385-.13-.766-.271-1.141-.432a9 9 0 0 0-1.203-.453a6.3 6.3 0 0 0-3.099-.005c-.417.12-.818.26-1.214.432c-.557.234-.927.391-1.141.458c-.427.125-.87.203-1.318.229c-.693 0-1.339-.198-1.979-.599zm9.14-24.615c-.906.453-1.771.646-2.63.583c-.135-.865 0-1.75.359-2.719a7.3 7.3 0 0 1 1.333-2.24A7.1 7.1 0 0 1 19.812.733q1.319-.68 2.521-.734c.104.906 0 1.797-.333 2.76a8 8 0 0 1-1.333 2.344a6.8 6.8 0 0 1-2.115 1.682z" fill="currentColor"></path></svg>
        Pay
    </button>
<div className="relative flex py-2 items-center">
<div className="flex-grow border-t border-slate-200"></div>
<span className="flex-shrink-0 mx-3 text-[11px] text-slate-400 font-medium">Or pay with card</span>
<div className="flex-grow border-t border-slate-200"></div>
</div>
<div className="space-y-3 mt-2">
<div className="">
<label className="text-[11px] font-medium text-slate-500 ml-1">Email</label>
<div className="relative mt-1">
<input className="w-full px-3 py-2 bg-white border border-slate-200 rounded-md text-sm text-slate-800 shadow-sm focus:outline-none focus:ring-1 focus:ring-indigo-500" type="text" value="alex@example.com"/>
</div>
</div>
<div className="">
<label className="text-[11px] font-medium text-slate-500 ml-1">Card Information</label>
<div className="mt-1 border border-slate-200 rounded-md shadow-sm overflow-hidden">
<div className="bg-white px-3 py-2 border-b border-slate-100 flex items-center justify-between">
<span className="text-sm font-medium text-slate-800 tracking-widest">4242 4242 4242</span>
<div className="flex gap-1">
<svg className="text-blue-600" height="10" viewbox="0 0 256 83" width="32" xmlns="http://www.w3.org/2000/svg"><defs><lineargradient id="visa-grad" x1="45.974%" x2="54.877%" y1="-2.006%" y2="100%"><stop offset="0%" stop-color="#222357"></stop><stop offset="100%" stop-color="#254AA5"></stop></lineargradient></defs><path d="M132.397 56.24c-.146-11.516 10.263-17.942 18.104-21.763c8.056-3.92 10.762-6.434 10.73-9.94c-.06-5.365-6.426-7.733-12.383-7.825c-10.393-.161-16.436 2.806-21.24 5.05l-3.744-17.519c4.82-2.221 13.745-4.158 23-4.243c21.725 0 35.938 10.724 36.015 27.351c.085 21.102-29.188 22.27-28.988 31.702c.069 2.86 2.798 5.912 8.778 6.688c2.96.392 11.131.692 20.395-3.574l3.636 16.95c-4.982 1.814-11.385 3.551-19.357 3.551c-20.448 0-34.83-10.87-34.946-26.428m89.241 24.968c-3.967 0-7.31-2.314-8.802-5.865L181.803 1.245h21.709l4.32 11.939h26.528l2.506-11.939H256l-16.697 79.963zm3.037-21.601l6.265-30.027h-17.158zm-118.599 21.6L88.964 1.246h20.687l17.104 79.963zm-30.603 0L53.941 26.782l-8.71 46.277c-1.022 5.166-5.058 8.149-9.54 8.149H.493L0 78.886c7.226-1.568 15.436-4.097 20.41-6.803c3.044-1.653 3.912-3.098 4.912-7.026L41.819 1.245H63.68l33.516 79.963z" fill="url(#visa-grad)" transform="matrix(1 0 0 -1 0 82.668)"></path></svg>
</div>
</div>
<div className="bg-white flex">
<input className="w-1/2 px-3 py-2 text-sm border-r border-slate-100 focus:outline-none focus:ring-inset focus:ring-1 focus:ring-indigo-500" placeholder="MM / YY" type="text"/>
<input className="w-1/2 px-3 py-2 text-sm focus:outline-none focus:ring-inset focus:ring-1 focus:ring-indigo-500" placeholder="CVC" type="text"/>
</div>
</div>
</div>
<div className="pt-2">
<button className="hover:bg-[#0a2540]/90 transition flex gap-2 text-sm font-medium text-white bg-[#0a2540] w-full rounded-full pt-2.5 pb-2.5 shadow-lg gap-x-2 gap-y-2 items-center justify-center">
                Subscribe
            </button>
</div>
</div>
</div>

<div className="absolute right-24 top-0 w-[500px] bg-white rounded-xl shadow-xl border border-slate-200/60 p-6 z-10 rotate-y-12 opacity-90 scale-90 origin-right">
<div className="flex gap-8 mb-6 border-b border-slate-100 pb-4">
<div className="text-sm font-semibold text-slate-900 border-b-2 border-indigo-600 pb-4 -mb-4.5">Today</div>
<div className="text-sm font-medium text-slate-400">Yesterday</div>
<div className="text-sm font-medium text-slate-400">Last 7 days</div>
</div>
<div className="grid grid-cols-2 gap-8 mb-8">
<div className="">
<div className="text-xs text-slate-500 font-medium mb-1">Gross volume</div>
<div className="text-2xl font-bold text-slate-900">$4,321.45</div>
</div>
<div className="">
<div className="text-xs text-slate-500 font-medium mb-1">New customers</div>
<div className="text-2xl font-bold text-slate-900">128</div>
</div>
</div>

<div className="h-32 flex items-end justify-between gap-1">
<div className="w-full bg-indigo-50 h-[40%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[60%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[45%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[70%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[55%] rounded-t-sm"></div>
<div className="w-full bg-indigo-100 h-[85%] rounded-t-sm"></div>
<div className="w-full bg-indigo-50 h-[65%] rounded-t-sm"></div>
</div>
</div>
</div>
</div>

</header>

<section className="bg-white pt-16 pb-16 relative overflow-hidden">

<div className="absolute inset-0 z-0 pointer-events-none" style={{backgroundImage: 'linear-gradient(to right, rgba(0,0,0,0.03) 1px, transparent 1px), linear-gradient(to bottom, rgba(0,0,0,0.03) 1px, transparent 1px)', backgroundSize: '32px 32px', maskImage: 'radial-gradient(ellipse 70% 60% at center, black, transparent)', WebkitMaskImage: 'radial-gradient(ellipse 70% 60% at center, black, transparent)'}}></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">

<div className="grid grid-cols-2 md:grid-cols-4 border-l border-t border-slate-200/80 rounded-2xl overflow-hidden bg-white shadow-sm">
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:openai" width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:amazon" style={{color: 'rgb(71, 85, 105)'}} width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:google" width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:slack" width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:shopify" width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:airbnb" style={{color: 'rgb(71, 85, 105)'}} width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:uber" width="96"></iconify-icon>
</div>
<div className="flex justify-center items-center py-12 px-8 border-r border-b border-slate-200/80 hover:bg-slate-50/50 transition-colors group cursor-pointer">
<iconify-icon className="opacity-40 grayscale group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-500" height="32" icon="simple-icons:zoom" width="96"></iconify-icon>
</div>
</div>
</div>
</section>

<section className="overflow-hidden sm:py-32 sm:px-8 text-gray-800 pt-24 pr-4 pb-24 pl-4 relative" style={{fontFamily: '\'Inter\', sans-serif'}}>

<div className="absolute top-0 left-1/2 -translate-x-1/2 w-[1000px] h-[800px] bg-white/70 blur-[120px] rounded-full pointer-events-none z-0"></div>

<div className="absolute inset-0 flex items-center justify-center pointer-events-none z-0 overflow-hidden opacity-40">
<svg className="min-w-[1400px] min-h-[1400px] object-cover" fill="none" viewbox="0 0 1400 900" xmlns="http://www.w3.org/2000/svg">
<defs>
<filter height="140%" id="glow" width="140%" x="-20%" y="-20%">
<fegaussianblur result="blur" stddeviation="3"></fegaussianblur>
<fecomposite in="SourceGraphic" in2="blur" operator="over"></fecomposite>
</filter>
<lineargradient id="chipGrad" x1="0" x2="0" y1="0" y2="1">
<stop offset="0%" stop-color="#ffffff"></stop>
<stop offset="100%" stop-color="#f4f4f5"></stop>
</lineargradient>
<filter height="300%" id="chipShadow" width="300%" x="-100%" y="-100%">
<fedropshadow dx="0" dy="25" flood-color="#000" flood-opacity="0.15" stddeviation="20"></fedropshadow>
</filter>
</defs>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="120" x2="160" y1="210" y2="210"></line>
<line x1="120" x2="160" y1="220" y2="220"></line>
<line x1="120" x2="160" y1="230" y2="230"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="160" y="195"></rect>
<circle cx="170" cy="205" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="1.5s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="215" cy="220" fill="#6366f1" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 215 220 H 350 L 480 350 H 550" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 215 220 H 350 L 480 350 H 550" fill="none" stroke="#6366f1" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="3s" repeatcount="indefinite" values="600;-60"></animate>
</path>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="120" x2="160" y1="670" y2="670"></line>
<line x1="120" x2="160" y1="680" y2="680"></line>
<line x1="120" x2="160" y1="690" y2="690"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="160" y="655"></rect>
<circle cx="170" cy="665" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="2s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="215" cy="680" fill="#10b981" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="2.5s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 215 680 H 350 L 480 550 H 550" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 215 680 H 350 L 480 550 H 550" fill="none" stroke="#10b981" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="3.5s" repeatcount="indefinite" values="600;-60"></animate>
</path>
<g stroke="#d4d4d8" strokeWidth="1.5">
<line x1="1280" x2="1240" y1="410" y2="410"></line>
<line x1="1280" x2="1240" y1="420" y2="420"></line>
<line x1="1280" x2="1240" y1="430" y2="430"></line>
</g>
<rect fill="url(#chipGrad)" filter="url(#chipShadow)" height="50" rx="6" stroke="rgba(0,0,0,0.12)" strokeWidth="1" width="70" x="1170" y="395"></rect>
<circle cx="1230" cy="405" fill="#a1a1aa" r="1.5">
<animate attributename="opacity" dur="1.7s" repeatcount="indefinite" values="0.2;1;0.2"></animate>
</circle>
<circle cx="1185" cy="420" fill="#3b82f6" filter="url(#glow)" r="2.5">
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.3;1;0.3"></animate>
</circle>
<path d="M 1185 420 H 1050 L 920 550 H 850" fill="none" stroke="#d4d4d8" strokeWidth="1.5"></path>
<path d="M 1185 420 H 1050 L 920 550 H 850" fill="none" stroke="#3b82f6" stroke-dasharray="60 600" stroke-dashoffset="600" strokeWidth="1.5">
<animate attributename="stroke-dashoffset" dur="4s" repeatcount="indefinite" values="600;-60"></animate>
</path>
</svg>
</div>
<div className="max-w-7xl mx-auto relative z-10">

<div className="max-w-2xl mb-24">
<h4 className="text-[#6366f1] font-normal mb-4 text-sm tracking-wide uppercase">Modular solutions</h4>
<h2 className="text-4xl lg:text-5xl font-light tracking-tight text-[#18181b] mb-6" style={{textShadow: '0 1px 2px rgba(0,0,0,0.05)'}}>
                A fully integrated suite of financial and payments products
            </h2>
<p className="text-lg text-[#52525b] font-light leading-relaxed">
                Reduce costs, grow revenue, and run your business more efficiently on a fully integrated platform. Use NovaPay to handle all your payment-related needs, manage revenue operations, and launch new business models.
            </p>
</div>

<div className="space-y-32">

<div className="grid lg:grid-cols-2 gap-16 gap-x-16 gap-y-16 items-center">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<svg className="lucide lucide-credit-card w-5 h-5 text-[#6366f1]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="14" rx="2" width="20" x="2" y="5"></rect><line x1="2" x2="22" y1="10" y2="10"></line></svg>
</div>
<span className="font-normal text-lg text-[#18181b]">Payments</span>
</div>
<h3 className="text-3xl font-light text-[#18181b] tracking-tight mb-5">Accept and optimise payments, globally</h3>
<p className="text-base text-[#52525b] font-light mb-10 leading-relaxed">
                        Increase authorization rates, offer local payment methods to boost conversion, and reduce fraud using AI-driven machine learning models tailored to your business.
                    </p>
<button className="transition-all active:scale-[0.98] inline-flex gap-2 text-sm font-light text-white bg-gradient-to-b from-[#4f46e5] to-[#4338ca] rounded-xl mb-10 pt-3 pr-6 pb-3 pl-6 shadow-[inset_0_1px_1px_rgba(255,255,255,0.4),0_10px_20px_-5px_rgba(79,70,229,0.4),0_0_0_1px_#4338ca] gap-x-2 gap-y-2 items-center">
                        Start with Payments <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="grid grid-cols-2 gap-y-5 text-sm font-light">
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Online payments</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Checkout</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Elements</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Terminal</a>
</div>
</div>

<div className="overflow-hidden min-h-[340px] flex transition-transform hover:-translate-y-2 duration-500 ease-out bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] rounded-3xl pt-8 pr-8 pb-8 pl-8 relative shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(99,102,241,0.2),0_20px_40px_-15px_rgba(79,70,229,0.1)] items-center justify-center">
<div className="absolute top-4 left-4 w-1.5 h-1.5 rounded-full animate-pulse bg-indigo-500/40"></div>
<div className="w-full max-w-sm bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl p-6 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)]">
<div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 mb-3 flex items-center justify-between">
<div className="flex items-center gap-3">
<div className="w-10 h-6 bg-[#18181b] rounded-md shadow-inner"></div>
<span className="font-normal text-sm text-[#18181b]">Card</span>
</div>
<div className="w-4 h-4 rounded-full border border-[#6366f1] flex items-center justify-center bg-indigo-50/50">
<div className="w-2 h-2 bg-[#6366f1] rounded-full"></div>
</div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 mb-3 flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-6 bg-[#e4e4e7] rounded-md"></div>
<span className="font-normal text-sm text-[#18181b]">Apple Pay</span>
</div>
<div className="w-4 h-4 rounded-full border border-black/10"></div>
</div>
<div className="bg-white rounded-xl shadow-sm border border-black/5 p-4 flex items-center justify-between opacity-60">
<div className="flex items-center gap-3">
<div className="w-10 h-6 bg-[#e4e4e7] rounded-md"></div>
<span className="font-normal text-sm text-[#18181b]">Google Pay</span>
</div>
<div className="w-4 h-4 rounded-full border border-black/10"></div>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="lg:order-2">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<svg className="lucide lucide-repeat w-5 h-5 text-[#10b981]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m17 2 4 4-4 4"></path><path d="M3 11v-1a4 4 0 0 1 4-4h14"></path><path d="m7 22-4-4 4-4"></path><path d="M21 13v1a4 4 0 0 1-4 4H3"></path></svg>
</div>
<span className="font-normal text-lg text-[#18181b]">Billing</span>
</div>
<h3 className="text-3xl font-light text-[#18181b] tracking-tight mb-5">Capture recurring revenue</h3>
<p className="text-base text-[#52525b] font-light mb-10 leading-relaxed">
                        Manage flat-rate, usage-based, and hybrid pricing models, minimize churn, and automate finance operations at scale.
                    </p>
<button className="bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] text-[#18181b] rounded-xl py-3 px-6 text-sm font-light transition-all active:scale-[0.98] inline-flex items-center gap-2 mb-10 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)]">
                        Start with Billing <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<div className="grid grid-cols-2 gap-y-5 text-sm font-light">
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Invoicing</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Recurring payments</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Revenue recognition</a>
<a className="text-[#52525b] hover:text-[#18181b] transition-colors flex items-center gap-2" href="#">Quote management</a>
</div>
</div>

<div className="lg:order-1 relative p-8 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(16,185,129,0.2),0_20px_40px_-15px_rgba(16,185,129,0.08)] overflow-hidden min-h-[340px] flex items-center justify-center transition-transform hover:-translate-y-2 duration-500 ease-out">
<div className="absolute top-4 right-4 w-1.5 h-1.5 rounded-full bg-emerald-500/40 animate-pulse"></div>
<div className="w-72 bg-white rounded-2xl shadow-[0_10px_30px_-10px_rgba(0,0,0,0.1)] border border-black/5 p-6">
<div className="flex justify-between items-center mb-6">
<span className="text-xs font-normal tracking-wider text-[#a1a1aa] uppercase">Invoice #1024</span>
<span className="text-[10px] bg-emerald-50 text-emerald-600 border border-emerald-100 px-2 py-1 rounded-full font-medium tracking-wide">PAID</span>
</div>
<div className="h-1.5 w-32 bg-[#e4e4e7] rounded-full mb-3"></div>
<div className="h-1.5 w-20 bg-[#f4f4f5] rounded-full mb-8"></div>
<div className="flex justify-between items-end pt-4 border-t border-[#f4f4f5]">
<div className="h-2 w-16 bg-[#e4e4e7] rounded-full mb-1"></div>
<span className="text-2xl font-light text-[#18181b] tracking-tight">$49.00</span>
</div>
</div>
</div>
</div>

<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<div className="flex items-center gap-4 mb-8">
<div className="w-12 h-12 bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] rounded-2xl flex items-center justify-center relative shadow-[inset_0_2px_5px_rgba(0,0,0,0.02),inset_0_0_0_1px_rgba(0,0,0,0.04),0_10px_15px_-3px_rgba(0,0,0,0.05)]">
<svg className="lucide lucide-network w-5 h-5 text-[#3b82f6]" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="6" rx="1" width="6" x="16" y="16"></rect><rect height="6" rx="1" width="6" x="2" y="16"></rect><rect height="6" rx="1" width="6" x="9" y="2"></rect><path d="M5 16v-3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v3"></path><path d="M12 12V8"></path></svg>
</div>
<span className="font-normal text-lg text-[#18181b]">Connect</span>
</div>
<h3 className="text-3xl font-light text-[#18181b] tracking-tight mb-5">Set up multi-party payments and payouts</h3>
<p className="text-base text-[#52525b] font-light mb-10 leading-relaxed">
                        Integrate payments into your platform or marketplace for end-to-end payments experiences. Handle onboarding and compliance automatically.
                    </p>
<button className="bg-gradient-to-b from-[#ffffff] to-[#f4f4f5] text-[#18181b] rounded-xl py-3 px-6 text-sm font-light transition-all active:scale-[0.98] inline-flex items-center gap-2 mb-10 shadow-[inset_0_1px_1px_#fff,0_5px_15px_-5px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.06)]">
                        Start with Connect <svg className="lucide lucide-arrow-right w-4 h-4" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>

<div className="relative p-8 rounded-3xl bg-gradient-to-b from-[#ffffff] to-[#f8f8f8] shadow-[inset_0_1px_0_rgba(255,255,255,1),inset_0_0_0_1px_rgba(59,130,246,0.2),0_20px_40px_-15px_rgba(59,130,246,0.08)] overflow-hidden min-h-[340px] flex items-center justify-center transition-transform hover:-translate-y-2 duration-500 ease-out">
<div className="absolute bottom-4 left-4 w-1.5 h-1.5 rounded-full bg-blue-500/40 animate-pulse"></div>
<div className="flex gap-6 items-center">
<div className="w-16 h-16 bg-white rounded-2xl shadow-sm flex items-center justify-center border border-black/5">
<svg className="lucide lucide-store text-[#a1a1aa] w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15 21v-5a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v5"></path><path d="M17.774 10.31a1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.451 0 1.12 1.12 0 0 0-1.548 0 2.5 2.5 0 0 1-3.452 0 1.12 1.12 0 0 0-1.549 0 2.5 2.5 0 0 1-3.77-3.248l2.889-4.184A2 2 0 0 1 7 2h10a2 2 0 0 1 1.653.873l2.895 4.192a2.5 2.5 0 0 1-3.774 3.244"></path><path d="M4 10.95V19a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2v-8.05"></path></svg>
</div>
<div className="flex gap-1.5 opacity-40">
<div className="w-1.5 h-1.5 bg-[#52525b] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#52525b] rounded-full"></div>
<div className="w-1.5 h-1.5 bg-[#52525b] rounded-full"></div>
</div>
<div className="w-16 h-16 bg-white rounded-2xl shadow-[0_4px_10px_-2px_rgba(0,0,0,0.05)] flex items-center justify-center border border-black/5 relative">
<div className="absolute -top-1 -right-1 bg-emerald-400 w-3 h-3 rounded-full border-2 border-white shadow-sm"></div>
<svg className="lucide lucide-user text-[#a1a1aa] w-7 h-7" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M19 21v-2a4 4 0 0 0-4-4H9a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle></svg>
</div>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-[#02040a] mt-12 mb-12 pt-24 pb-24 relative -skew-y-3">
<div className="absolute inset-0 z-0 w-full h-full pointer-events-none opacity-80" data-us-dpi="1.5" data-us-fps="60" data-us-lazyload="true" data-us-production="true" data-us-project="qEL9fV2F9wyNVirYjwat"></div>
<div className="max-w-7xl mx-auto px-6 skew-y-3 relative z-10">
<h5 className="text-indigo-400 font-semibold mb-6 tracking-wide uppercase text-sm">Global scale</h5>
<div className="grid lg:grid-cols-2 gap-16 mb-20">
<div className="">
<h2 className="text-4xl lg:text-5xl font-semibold tracking-tight mb-6">The backbone for global commerce</h2>
<p className="text-slate-400 text-xl leading-relaxed">
                        NovaPay makes moving money as easy and programmable as moving data. Our teams are based in offices around the world and we process hundreds of billions of dollars each year for ambitious businesses of all sizes.
                    </p>
</div>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 border-t border-slate-800/50 pt-12">
<div className="">
<div className="text-4xl font-semibold mb-2 tracking-tight">500M+</div>
<p className="text-slate-400 text-sm">API requests per day, peaking at 15,000 requests a second.</p>
</div>
<div>
<div className="text-4xl font-semibold mb-2 tracking-tight">99.999%</div>
<p className="text-slate-400 text-sm">Historical uptime for core payment services.</p>
</div>
<div>
<div className="text-4xl font-semibold mb-2 tracking-tight">47+</div>
<p className="text-slate-400 text-sm">Countries with local acquiring methods supported.</p>
</div>
<div className="">
<div className="text-4xl font-semibold mb-2 tracking-tight">135+</div>
<p className="text-slate-400 text-sm">Currencies and payment methods supported.</p>
</div>
</div>
</div>


</section>

<section className="bg-white pt-24 pb-40">
<div className="max-w-7xl mr-auto ml-auto pr-6 pl-6">
<h2 className="text-3xl font-semibold tracking-tight text-slate-900 mb-12">Support for any business type</h2>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 font-light w-full gap-x-8 gap-y-8">

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl pt-8 pr-8 pb-8 pl-8 relative" style={{background: 'linear-gradient(145deg, rgb(255, 255, 255) 0%, rgb(240, 249, 255) 100%)', boxShadow: 'rgba(0, 0, 0, 0.02) 2px 4px 8px, rgba(0, 0, 0, 0.03) 8px 16px 24px, rgba(0, 0, 0, 0.12) 64px 96px 128px, rgba(6, 182, 212, 0.15) 80px 120px 160px, rgb(255, 255, 255) 0px 1px 1px inset, rgba(0, 0, 0, 0.04) 0px 0px 0px 1px'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl tracking-tight text-gray-900 font-normal">AI Platforms</h3>
<div className="w-10 h-10 rounded-full bg-cyan-50 flex items-center justify-center text-cyan-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-cyan-100">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">Support businesses across the AI ecosystem - from usage-based billing to global payouts.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-gray-50 bg-white border border-black/5 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-3 text-cyan-600">
<iconify-icon icon="simple-icons:openai" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:anthropic" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-cyan-600 tracking-widest uppercase font-medium">Learn more</span>
<svg className="text-cyan-500 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative" style={{background: 'linear-gradient(145deg, #ffffff 0%, #fff7ed 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(249, 115, 22, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl tracking-tight text-gray-900 font-normal">SaaS</h3>
<div className="w-10 h-10 rounded-full bg-orange-50 flex items-center justify-center text-orange-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-orange-100">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">Quickly launch and grow recurring revenue with a unified platform for payments and subscriptions.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-gray-50 bg-white border border-black/5 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-3 text-orange-600">
<iconify-icon icon="simple-icons:slack" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:atlassian" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-orange-600 tracking-widest uppercase font-medium">Learn more</span>
<svg className="text-orange-500 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f5f3ff 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(168, 85, 247, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl tracking-tight text-gray-900 font-normal">Marketplaces</h3>
<div className="w-10 h-10 rounded-full bg-purple-50 flex items-center justify-center text-purple-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-purple-100">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">Pay out globally and facilitate multi-party payments with automated compliance handling.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-gray-50 bg-white border border-black/5 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-3 text-purple-600">
<iconify-icon icon="simple-icons:shopify" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:instacart" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-purple-600 tracking-widest uppercase font-medium">Learn more</span>
<svg className="text-purple-500 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-full rounded-3xl p-8 relative" style={{background: 'linear-gradient(145deg, #ffffff 0%, #ecfdf5 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(16, 185, 129, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="relative z-10 flex flex-col h-full">
<div className="flex items-start justify-between mb-4">
<h3 className="text-2xl tracking-tight text-gray-900 font-normal">Crypto</h3>
<div className="w-10 h-10 rounded-full bg-emerald-50 flex items-center justify-center text-emerald-500 opacity-0 -translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 shadow-sm border border-emerald-100">
<svg className="lucide lucide-arrow-up-right" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg">
<path d="M7 7h10v10"></path>
<path d="M7 17 17 7"></path>
</svg>
</div>
</div>
<p className="text-sm text-gray-500 leading-relaxed mb-8 flex-grow">On-ramp to crypto with fraud protection and high authorization rates globally.</p>
<a className="relative z-10 w-full py-3.5 px-5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-gray-50 bg-white border border-black/5 shadow-sm mt-auto" href="#">
<div className="flex items-center gap-3 text-emerald-600">
<iconify-icon icon="simple-icons:coinbase" width="18"></iconify-icon>
<iconify-icon icon="simple-icons:blockchaindotcom" width="18"></iconify-icon>
</div>
<div className="flex items-center gap-2">
<span className="text-[11px] text-emerald-600 tracking-widest uppercase font-medium">Learn more</span>
<svg className="text-emerald-500 w-4 h-4 group-hover/btn:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</div>
</a>
</div>
</div>
</div>
</div>
</section>

<section className="flex overflow-hidden text-slate-900 font-sans bg-slate-50 w-full pt-24 pb-24 relative items-center justify-center">
<style>
        @keyframes float-card-elements {
            0%, 100% { transform: translateY(0px) rotate(0deg); }
            50% { transform: translateY(-10px) rotate(1deg); }
        }
        @keyframes dash-line-anim {
            to { stroke-dashoffset: -1000; }
        }
        .animate-float {
            animation: float-card-elements 6s ease-in-out infinite;
        }
        .path-line {
            stroke-dasharray: 200 400;
            stroke-dashoffset: 0;
            animation: dash-line-anim 15s linear infinite;
        }
        .path-line-2 {
            stroke-dasharray: 150 500;
            stroke-dashoffset: 200;
            animation: dash-line-anim 20s linear infinite reverse;
        }
    </style>
<div className="max-w-7xl w-full mx-auto px-6">
<div className="mb-16 max-w-2xl">
<h5 className="text-indigo-600 font-semibold mb-4 tracking-wide text-sm uppercase">Enterprise Ready</h5>
<h2 className="text-3xl lg:text-4xl font-bold tracking-tight text-slate-900 mb-6">Built for reliability and scale</h2>
<p className="text-lg text-slate-600 leading-relaxed">Trust your most critical flows to a platform with five nines of uptime and enterprise-grade security.</p>
</div>
<div className="grid grid-cols-1 lg:grid-cols-3 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-[600px] rounded-3xl relative overflow-hidden" style={{background: 'linear-gradient(145deg, #ffffff 0%, #eef2ff 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(99, 102, 241, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<canvas className="absolute inset-0 z-0 pointer-events-none opacity-60" height="33554432" id="canvas-card1" width="33554432"></canvas>
<div className="p-8 pb-0 relative z-10 flex justify-between items-start">
<h2 className="text-2xl tracking-tight font-medium max-w-[200px] leading-tight text-slate-800">Maximize revenue with machine learning</h2>
<button className="bg-indigo-50 hover:bg-indigo-100 p-2.5 rounded-xl text-indigo-600 transition-colors flex items-center justify-center">
<svg className="lucide lucide-cpu" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="16" rx="2" ry="2" width="16" x="4" y="4"></rect><rect height="6" width="6" x="9" y="9"></rect><line x1="9" x2="9" y1="1" y2="4"></line><line x1="15" x2="15" y1="1" y2="4"></line><line x1="9" x2="9" y1="20" y2="23"></line><line x1="15" x2="15" y1="20" y2="23"></line><line x1="20" x2="23" y1="9" y2="9"></line><line x1="20" x2="23" y1="14" y2="14"></line><line x1="1" x2="4" y1="9" y2="9"></line><line x1="1" x2="4" y1="14" y2="14"></line></svg>
</button>
</div>
<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-[32rem] rounded-3xl p-8 relative z-10 bg-white" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f0f9ff 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(6, 182, 212, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="flex flex-col gap-3 flex-grow justify-end pb-6 relative z-10">
<div className="self-end bg-white border border-black/5 rounded-2xl rounded-tr-sm p-4 shadow-sm max-w-[85%]">
<p className="text-xs text-gray-500 leading-relaxed font-light">How can we reduce false declines for cross-border transactions?</p>
</div>
<div className="self-start bg-white border border-black/5 rounded-2xl rounded-tl-sm p-4 shadow-sm max-w-[85%]">
<p className="text-xs text-gray-500 leading-relaxed font-light">Our ML models just updated your risk thresholds, recovering 4.2% of revenue.</p>
</div>
</div>
<div className="relative z-10 flex flex-col gap-4">
<div className="bg-white border border-black/5 rounded-2xl p-6 shadow-sm">
<div className="grid grid-cols-2 gap-4 mb-5">
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 border border-cyan-100/50">
<svg className="lucide lucide-shield-check text-cyan-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path><path d="m9 12 2 2 4-4"></path></svg>
</div>
<div className="">
<p className="text-[13px] font-normal text-gray-900 tracking-tight">Radar Fraud</p>
<p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 mt-0.5">Protection</p>
<p className="text-xl font-normal text-cyan-500 tracking-tight">99.8%</p>
<p className="text-[10px] text-cyan-600/70 uppercase tracking-widest mt-1">Success Rate</p>
</div>
</div>
<div className="flex flex-col">
<div className="w-10 h-10 rounded-xl bg-cyan-50 flex items-center justify-center mb-4 border border-cyan-100/50">
<svg className="lucide lucide-refresh-cw text-cyan-500" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8"></path><path d="M3 3v5h5"></path></svg>
</div>
<div className="">
<p className="text-[13px] font-normal text-gray-900 tracking-tight">Smart Retries</p>
<p className="text-[10px] text-gray-400 uppercase tracking-widest mb-1.5 mt-0.5">Optimization</p>
<p className="text-xl font-normal text-cyan-500 tracking-tight">+$12.4k</p>
<p className="text-[10px] text-cyan-600/70 uppercase tracking-widest mt-1">Recovered</p>
</div>
</div>
</div>
<div className="w-full h-px bg-black/5 mb-3"></div>
<button className="w-full py-2.5 rounded-xl flex items-center justify-between group/btn transition-all duration-300 hover:bg-gray-50 bg-white">
<span className="text-xs text-cyan-600 tracking-widest uppercase font-medium">View insights</span>
<svg className="lucide lucide-arrow-right text-cyan-500 group-hover/btn:translate-x-1 transition-transform" fill="none" height="16" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="1.5" viewbox="0 0 24 24" width="16" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 w-full h-[600px] rounded-3xl relative overflow-hidden" style={{background: 'linear-gradient(145deg, #ffffff 0%, #f0fdfa 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(20, 184, 166, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>
<div className="p-8 pb-0 relative z-20 flex justify-between items-start">
<h2 className="text-2xl tracking-tight font-medium max-w-[220px] leading-tight text-slate-800">Bank-level security and compliance</h2>
<button className="bg-teal-50 hover:bg-teal-100 p-2.5 rounded-xl text-teal-600 transition-colors flex items-center justify-center">
<svg className="lucide lucide-lock" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><rect height="11" rx="2" ry="2" width="18" x="3" y="11"></rect><path d="M7 11V7a5 5 0 0 1 10 0v4"></path></svg>
</button>
</div>
<div className="relative z-10 flex-1 flex items-center justify-center p-8">
<div className="absolute w-64 h-96 bg-gradient-to-tr from-teal-400 via-emerald-300 to-cyan-200 rounded-[2rem] blur-3xl opacity-30 animate-float" style={{animationDelay: '-2s'}}></div>
<div className="relative w-56 h-[340px] rounded-3xl shadow-2xl shadow-teal-500/20 animate-float bg-white overflow-hidden border border-white/40">
<div className="absolute inset-0 bg-[linear-gradient(150deg,#0d9488_0%,#14b8a6_25%,#06b6d4_45%,#0ea5e9_70%,#ffffff_95%)] opacity-90"></div>
<div className="absolute inset-0 bg-gradient-to-t from-white/60 to-transparent"></div>
<div className="absolute inset-0 p-6 flex flex-col justify-between z-10">
<div className="flex justify-end items-start gap-2 pt-4 pr-2">
<svg className="lucide lucide-shield text-white/80" fill="none" height="40" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="40" xmlns="http://www.w3.org/2000/svg"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10"></path></svg>
</div>
<div className="flex flex-col pb-2">
<span className="text-white font-medium tracking-wider text-sm opacity-80 mb-1">PCI DSS LEVEL 1</span>
<span className="text-white font-medium tracking-widest text-lg opacity-95">CERTIFIED SECURE</span>
</div>
</div>
</div>
</div>
</div>

<div className="flex flex-col group transition-all duration-700 ease-out hover:-translate-y-4 overflow-hidden w-full h-[600px] rounded-3xl relative" style={{background: 'linear-gradient(145deg, #ffffff 0%, #eff6ff 100%)', boxShadow: '2px 4px 8px rgba(0,0,0,0.02), 8px 16px 24px rgba(0,0,0,0.03), 64px 96px 128px rgba(0,0,0,0.12), 80px 120px 160px rgba(59, 130, 246, 0.15), inset 0 1px 1px rgba(255,255,255,1), 0 0 0 1px rgba(0,0,0,0.04)'}}>

<div className="absolute inset-0 overflow-hidden pointer-events-none rounded-3xl z-0">
<div className="absolute top-[-20%] left-[-10%] w-[70%] h-[70%] bg-blue-400/20 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '8s'}}></div>
<div className="absolute bottom-[-20%] right-[-10%] w-[60%] h-[60%] bg-cyan-400/20 rounded-full blur-[80px] animate-pulse" style={{animationDuration: '10s', animationDelay: '2s'}}></div>
</div>
<div className="z-20 flex pt-8 pr-8 pb-0 pl-8 relative items-start justify-between">
<h2 className="text-2xl tracking-tight font-medium max-w-[280px] leading-tight text-slate-800">Seamlessly connect with your entire stack</h2>
<button className="bg-blue-50 hover:bg-blue-100 p-2.5 rounded-xl text-blue-600 transition-all duration-300 group-hover:scale-110 flex items-center justify-center shadow-sm hover:shadow-md">
<svg className="lucide lucide-link-2 group-hover:rotate-12 transition-transform duration-300" fill="none" height="20" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="20" xmlns="http://www.w3.org/2000/svg"><path d="M9 17H7A5 5 0 0 1 7 7h2"></path><path d="M15 7h2a5 5 0 1 1 0 10h-2"></path><line x1="8" x2="16" y1="12" y2="12"></line></svg>
</button>
</div>
<div className="z-0 flex-1 overflow-hidden w-full h-full relative">
<canvas className="w-full h-full absolute top-0 right-0 bottom-0 left-0" height="1016" id="canvas-card3" width="790"></canvas>
<svg className="absolute inset-0 w-full h-full pointer-events-none" preserveaspectratio="xMidYMid slice" viewbox="0 0 400 600">
<defs>
<lineargradient id="lineGrad" x1="0%" x2="100%" y1="0%" y2="100%">
<stop offset="0%" stop-color="#3b82f6" stop-opacity="0.2"></stop>
<stop offset="50%" stop-color="#06b6d4" stop-opacity="0.8"></stop>
<stop offset="100%" stop-color="#8b5cf6" stop-opacity="0.2"></stop>
</lineargradient>
</defs>
<path className="path-line" d="M-50 450 Q 150 150, 450 350" fill="none" stroke="url(#lineGrad)" strokeWidth="1.5"></path>

<circle cx="100" cy="250" fill="none" r="3" stroke="#3b82f6" strokeWidth="1.5">
<animate attributename="r" dur="3s" repeatcount="indefinite" values="3; 25"></animate>
<animate attributename="opacity" dur="3s" repeatcount="indefinite" values="0.6; 0"></animate>
</circle>
<circle cx="100" cy="250" fill="white" r="3" stroke="#3b82f6" strokeWidth="1.5"></circle>

<circle cx="350" cy="300" fill="none" r="3" stroke="#06b6d4" strokeWidth="1.5">
<animate attributename="r" begin="1s" dur="3s" repeatcount="indefinite" values="3; 25"></animate>
<animate attributename="opacity" begin="1s" dur="3s" repeatcount="indefinite" values="0.6; 0"></animate>
</circle>
<circle cx="350" cy="300" fill="white" r="3" stroke="#06b6d4" strokeWidth="1.5"></circle>
<path className="path-line-2" d="M50 650 Q 100 300, 300 550" fill="none" stroke="url(#lineGrad)" strokeWidth="1"></path>

<circle cx="150" cy="400" fill="none" r="2.5" stroke="#8b5cf6" strokeWidth="1.5">
<animate attributename="r" begin="2s" dur="3s" repeatcount="indefinite" values="2.5; 20"></animate>
<animate attributename="opacity" begin="2s" dur="3s" repeatcount="indefinite" values="0.6; 0"></animate>
</circle>
<circle cx="150" cy="400" fill="white" r="2.5" stroke="#8b5cf6" strokeWidth="1.5"></circle>
</svg>
<div className="absolute top-[60%] left-[10%] bg-white/95 backdrop-blur border border-slate-100 shadow-md rounded-lg py-1.5 px-3 flex items-center gap-2 z-10 animate-float hover:scale-105 transition-transform cursor-default" style={{animationDuration: '4s'}}>
<div className="w-5 h-5 bg-blue-500 rounded flex items-center justify-center animate-pulse" style={{animationDuration: '3s'}}>
<svg className="lucide lucide-blocks text-white" fill="none" height="12" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="12" xmlns="http://www.w3.org/2000/svg"><rect height="7" rx="1" width="7" x="14" y="3"></rect><path d="M10 21V8a1 1 0 0 0-1-1H4a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1v-5a1 1 0 0 0-1-1H3"></path></svg>
</div>
<span className="text-xs font-medium text-slate-700">150+ <span className="text-slate-400">Integrations active</span></span>
</div>
</div>
</div>
</div>
</div>

</section>

<section className="bg-white pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6">
<div className="max-w-2xl mb-16">
<h5 className="text-indigo-600 font-semibold mb-4 tracking-wide">Built for growth</h5>
<h2 className="text-4xl font-bold tracking-tight text-slate-900 mb-6">Take your start-up further, faster</h2>
<p className="text-lg text-slate-600">Startups build on NovaPay to launch faster, adapt as they grow, and automate workflows to do more with less. Build your own API-based integration or use our low-to-no-code solutions.</p>
</div>
<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 gap-x-6 gap-y-6">

<div className="flex flex-col hover:border-neutral-200 transition-colors overflow-hidden group bg-zinc-100 h-[520px] border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between">
<div className="">
<div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mb-6">
<svg aria-hidden="true" className="lucide lucide-pen-tool w-5 h-5" data-lucide="pen-tool" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M15.707 21.293a1 1 0 0 1-1.414 0l-1.586-1.586a1 1 0 0 1 0-1.414l5.586-5.586a1 1 0 0 1 1.414 0l1.586 1.586a1 1 0 0 1 0 1.414z"></path><path d="m18 13-1.375-6.874a1 1 0 0 0-.746-.776L3.235 2.028a1 1 0 0 0-1.207 1.207L5.35 15.879a1 1 0 0 0 .776.746L13 18"></path><path d="m2.3 2.3 7.286 7.286"></path><circle cx="11" cy="11" r="2"></circle></svg>
</div>
<h3 className="font-semibold text-xl tracking-tight text-neutral-900 mb-3">Incorporate your company</h3>
<p className="text-sm leading-relaxed text-neutral-500">Form a legal entity, issue stock, and start accepting payments.</p>
</div>
<div className="mt-8 border-t border-neutral-100 pt-6">
<div className="bg-neutral-50 rounded-xl p-4 border border-neutral-100 flex items-center gap-3 transition-colors group-hover:bg-neutral-100">
<div className="w-10 h-10 rounded bg-white border border-neutral-200 flex items-center justify-center text-neutral-900 font-semibold shadow-sm">A</div>
<div className="">
<div className="text-sm font-semibold text-neutral-900 leading-none mb-1">Acme Corp</div>
<div className="text-xs text-neutral-500 font-medium">Incorporated in Delaware</div>
</div>
</div>
</div>
</div>

<div className="overflow-hidden group flex flex-col bg-neutral-900 h-[520px] rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between">
<img alt="Background" className="transition-transform duration-1000 group-hover:scale-110 group-hover:opacity-100 opacity-60 w-full h-full object-cover absolute top-0 right-0 bottom-0 left-0" src="https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/4ab3e3ed-28c9-44ed-b17c-9e43ae22491b_800w.webp"/>
<div className="bg-gradient-to-b from-black/20 via-black/40 to-black/80 absolute top-0 right-0 bottom-0 left-0 shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)]"></div>
<div className="relative z-10 ml-auto w-32 h-32 bg-white/10 backdrop-blur-md rounded-xl shadow-sm border border-white/20 flex items-center justify-center">
<div className="text-center">
<div className="text-xs text-white/80 mb-2 font-medium">Payment Link</div>
<svg aria-hidden="true" className="lucide lucide-qr-code w-10 h-10 text-white mx-auto" data-lucide="qr-code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="5" rx="1" width="5" x="3" y="3"></rect><rect height="5" rx="1" width="5" x="16" y="3"></rect><rect height="5" rx="1" width="5" x="3" y="16"></rect><path d="M21 16h-3a2 2 0 0 0-2 2v3"></path><path d="M21 21v.01"></path><path d="M12 7v3a2 2 0 0 1-2 2H7"></path><path d="M3 12h.01"></path><path d="M12 3h.01"></path><path d="M12 16v.01"></path><path d="M16 12h1"></path><path d="M21 12v.01"></path><path d="M12 21v-1"></path></svg>
</div>
</div>
<div className="relative z-10 text-white mt-auto">
<div className="w-10 h-10 rounded-lg bg-white/20 backdrop-blur-sm text-white flex items-center justify-center mb-6 border border-white/20">
<svg aria-hidden="true" className="lucide lucide-flask-conical w-5 h-5" data-lucide="flask-conical" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M14 2v6a2 2 0 0 0 .245.96l5.51 10.08A2 2 0 0 1 18 22H6a2 2 0 0 1-1.755-2.96l5.51-10.08A2 2 0 0 0 10 8V2"></path><path d="M6.453 15h11.094"></path><path d="M8.5 2h7"></path></svg>
</div>
<h3 className="font-semibold text-xl tracking-tight mb-3">Validate your idea</h3>
<p className="text-sm leading-relaxed text-white/80">Test your product idea by launching payments with little to no code.</p>
</div>
</div>

<div className="flex flex-col hover:border-neutral-200 transition-colors overflow-hidden group bg-zinc-100 h-[520px] border-neutral-100 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_2.8px_2.2px_rgba(0,_0,_0,_0.034),_0_6.7px_5.3px_rgba(0,_0,_0,_0.048),_0_12.5px_10px_rgba(0,_0,_0,_0.06),_0_22.3px_17.9px_rgba(0,_0,_0,_0.072),_0_41.8px_33.4px_rgba(0,_0,_0,_0.086),_0_100px_80px_rgba(0,_0,_0,_0.12)] justify-between">
<div className="absolute inset-0 pointer-events-none opacity-[0.03]">
<svg className="w-full h-full stroke-neutral-900 fill-none" strokeWidth="0.5" viewbox="0 0 100 100">
<circle cx="50" cy="50" r="20"></circle>
<circle cx="50" cy="50" r="35"></circle>
<circle cx="50" cy="50" r="48"></circle>
</svg>
</div>
<div className="relative z-10 w-full mt-4">
<div className="w-10 h-10 rounded-lg bg-neutral-100 text-neutral-900 flex items-center justify-center mx-auto mb-6">
<svg aria-hidden="true" className="lucide lucide-shopping-bag w-5 h-5" data-lucide="shopping-bag" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 10a4 4 0 0 1-8 0"></path><path d="M3.103 6.034h17.794"></path><path d="M3.4 5.467a2 2 0 0 0-.4 1.2V20a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V6.667a2 2 0 0 0-.4-1.2l-2-2.667A2 2 0 0 0 17 2H7a2 2 0 0 0-1.6.8z"></path></svg>
</div>
<h3 className="font-semibold text-xl tracking-tight text-neutral-900 mb-3">Sell products and services</h3>
<p className="text-sm text-neutral-500 leading-relaxed">Launch a business with a prebuilt payment page that's optimized for conversion.</p>
</div>
<div className="w-[120%] mt-auto bg-neutral-50 rounded-t-xl shadow-sm border-x border-t border-neutral-200 p-6 h-40 relative z-10 flex flex-col transform transition-transform duration-500 group-hover:-translate-y-2">
<div className="w-full h-2.5 bg-neutral-200 rounded mb-4"></div>
<div className="w-2/3 h-2.5 bg-neutral-200 rounded mb-6 mx-auto"></div>
<div className="flex gap-4 mt-auto">
<div className="w-1/2 h-10 bg-white border border-neutral-200 rounded-lg shadow-sm"></div>
<div className="w-1/2 h-10 bg-neutral-900 rounded-lg shadow-sm"></div>
</div>
</div>
</div>

<div className="flex flex-col overflow-hidden group bg-neutral-950 h-[520px] border-neutral-800 border rounded-2xl pt-8 pr-8 pb-8 pl-8 relative shadow-[0_4px_6px_rgba(0,_0,_0,_0.049),_0_9.6px_7.6px_rgba(0,_0,_0,_0.069),_0_18px_14.3px_rgba(0,_0,_0,_0.086),_0_32px_25.6px_rgba(0,_0,_0,_0.103),_0_60px_47.8px_rgba(0,_0,_0,_0.123),_0_143px_114.3px_rgba(0,_0,_0,_0.172)] justify-between">
<div className="absolute top-0 right-0 w-64 h-64 bg-indigo-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2 group-hover:bg-indigo-500/20 transition-colors duration-500"></div>
<div className="relative z-10 w-full flex justify-end">
<div className="flex gap-3 items-end h-32 opacity-80 group-hover:opacity-100 transition-opacity">
<div className="w-5 h-10 bg-neutral-700 rounded-t-sm"></div>
<div className="w-5 h-16 bg-neutral-600 rounded-t-sm"></div>
<div className="w-5 h-8 bg-neutral-700 rounded-t-sm"></div>
<div className="w-5 h-24 bg-white rounded-t-sm shadow-[0_0_15px_rgba(255,255,255,0.3)]"></div>
<div className="w-5 h-14 bg-neutral-500 rounded-t-sm"></div>
</div>
</div>
<div className="mt-auto relative z-10">
<div className="w-10 h-10 rounded-lg bg-white/10 text-white flex items-center justify-center mb-6 border border-white/10 backdrop-blur-sm">
<svg aria-hidden="true" className="lucide lucide-bar-chart-3 w-5 h-5" data-lucide="bar-chart-3" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M3 3v16a2 2 0 0 0 2 2h16"></path><path d="M18 17V9"></path><path d="M13 17V5"></path><path d="M8 17v-3"></path></svg>
</div>
<h3 className="font-semibold text-xl tracking-tight mb-3 text-white">Launch any pricing model</h3>
<p className="text-sm leading-relaxed text-neutral-400">Offer usage-based billing to charge customers based on how much they use.</p>
</div>
</div>
</div>
</div>
</section>

<section className="overflow-hidden text-white bg-slate-900 mt-12 mb-12 pt-24 pb-24 relative -skew-y-3">
<div className="max-w-7xl mx-auto px-6 skew-y-3">
<div className="grid lg:grid-cols-2 gap-16 items-center">
<div className="">
<h5 className="text-cyan-400 font-semibold mb-6 tracking-wide">Designed for developers</h5>
<h2 className="text-4xl lg:text-5xl font-bold tracking-tight mb-6">Ship faster with powerful and easy-to-use
                    APIs</h2>
<p className="text-slate-400 text-xl leading-relaxed mb-8">
                    Save engineering time with unified payments functionality. We obsess over the maze of gateways,
                    payments rails, and financial institutions that make up the global economic landscape so that your
                    teams can build what you need on one platform.
                </p>
<button className="bg-cyan-500 text-slate-900 px-5 py-2 rounded-full font-bold text-sm flex items-center gap-2 hover:bg-cyan-400 transition-colors">
                        Read the docs <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>

<div className="bg-slate-800 rounded-xl shadow-2xl border border-slate-700 font-mono text-sm overflow-hidden">
<div className="bg-slate-900 px-4 py-3 flex items-center gap-2 border-b border-slate-700">
<div className="w-3 h-3 rounded-full bg-red-500"></div>
<div className="w-3 h-3 rounded-full bg-yellow-500"></div>
<div className="w-3 h-3 rounded-full bg-green-500"></div>
<div className="ml-4 text-slate-500 text-xs">bash — 80x24</div>
</div>
<div className="p-6 text-slate-300">
<div className="flex">
<span className="text-pink-400 mr-2">$</span>
<span className="">curl https://api.novapay.com/v1/charges \</span>
</div>
<div className="pl-4">
<span className="text-slate-500">-u sk_test_4eC39HqLyjWDarjtT1zdp7dc: \</span>
</div>
<div className="pl-4">
<span className="text-slate-500">-d amount=2000 \</span>
</div>
<div className="pl-4">
<span className="text-slate-500">-d currency=usd \</span>
</div>
<div className="pl-4 mb-4">
<span className="text-slate-500">-d source=tok_mastercard</span>
</div>
<div className="text-green-400 mb-1">{</div>
<div className="pl-4 text-green-400 mb-1">"id": "ch_1C9P2s2eZvKYlo2Cm",</div>
<div className="pl-4 text-green-400 mb-1">"object": "charge",</div>
<div className="pl-4 text-green-400 mb-1">"amount": 2000,</div>
<div className="pl-4 text-green-400 mb-1">"currency": "usd",</div>
<div className="pl-4 text-green-400 mb-1">"status": "succeeded"</div>
<div className="text-green-400">}</div>
</div>
</div>
</div>
<div className="grid md:grid-cols-4 gap-8 mt-20 border-t border-slate-800 pt-12">
<div>
<svg aria-hidden="true" className="lucide lucide-layers text-cyan-400 w-6 h-6 mb-4" data-lucide="layers" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M12.83 2.18a2 2 0 0 0-1.66 0L2.6 6.08a1 1 0 0 0 0 1.83l8.58 3.91a2 2 0 0 0 1.66 0l8.58-3.9a1 1 0 0 0 0-1.83z"></path><path d="M2 12a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 12"></path><path d="M2 17a1 1 0 0 0 .58.91l8.6 3.91a2 2 0 0 0 1.65 0l8.58-3.9A1 1 0 0 0 22 17"></path></svg>
<h4 className="font-bold text-white mb-2">Use NovaPay with your stack</h4>
<p className="text-slate-400 text-sm">We offer client and server libraries in everything from React and PHP
                    to .NET and iOS.</p>
</div>
<div className="">
<svg aria-hidden="true" className="lucide lucide-zap text-cyan-400 w-6 h-6 mb-4" data-lucide="zap" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M4 14a1 1 0 0 1-.78-1.63l9.9-10.2a.5.5 0 0 1 .86.46l-1.92 6.02A1 1 0 0 0 13 10h7a1 1 0 0 1 .78 1.63l-9.9 10.2a.5.5 0 0 1-.86-.46l1.92-6.02A1 1 0 0 0 11 14z"></path></svg>
<h4 className="font-bold text-white mb-2">Build Api-first</h4>
<p className="text-slate-400 text-sm">Create an account instantly and start accepting payments with API keys
                    in seconds.</p>
</div>
<div>
<svg aria-hidden="true" className="lucide lucide-globe text-cyan-400 w-6 h-6 mb-4" data-lucide="globe" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><circle cx="12" cy="12" r="10"></circle><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"></path><path d="M2 12h20"></path></svg>
<h4 className="font-bold text-white mb-2">Explore pre-built integrations</h4>
<p className="text-slate-400 text-sm">Connect NovaPay to over a hundred tools including Adobe, Salesforce,
                    and Xero.</p>
</div>
<div>
<svg aria-hidden="true" className="lucide lucide-code text-cyan-400 w-6 h-6 mb-4" data-lucide="code" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m16 18 6-6-6-6"></path><path d="m8 6-6 6 6 6"></path></svg>
<h4 className="font-bold text-white mb-2">Build on NovaPay Apps</h4>
<p className="text-slate-400 text-sm">Create and deploy apps for your team or for millions of businesses on
                    NovaPay.</p>
</div>
</div>
</div>
</section>

<section className="overflow-hidden bg-white pt-24 pb-24 relative">
<div className="max-w-7xl mx-auto px-6">
<div className="mb-12 text-center max-w-2xl mx-auto">
<p className="text-xs uppercase text-indigo-600 tracking-widest mb-3 font-medium">Launch with ease</p>
<h2 className="text-3xl sm:text-4xl font-semibold tracking-tight text-slate-900 mb-6">Low- and no-code options for getting started</h2>
<p className="text-lg text-slate-600">If you'd like to use NovaPay for your business but don't have developers on staff, no problem. We have a few options depending on your needs.</p>
</div>
<div className="relative flex flex-col lg:flex-row items-center justify-center py-12 lg:py-20 gap-8 lg:gap-0" style={{minHeight: '450px'}}>

<div className="relative w-[320px] h-[360px] lg:w-[340px] lg:h-[380px] lg:-mr-12 lg:-rotate-6 hover:rotate-0 hover:-translate-y-2 hover:z-30 transition-all duration-300 ease-out z-10" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.1), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', borderRadius: '1rem', backdropFilter: 'blur(10px)'}}>
<div className="absolute inset-4 rounded-xl bg-white text-slate-900 shadow-2xl ring-1 ring-slate-200 overflow-hidden flex flex-col">
<div className="p-6 sm:p-8 flex flex-col h-full">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 mb-6">
<svg aria-hidden="true" className="lucide lucide-package w-6 h-6 text-indigo-600" data-lucide="package" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M11 21.73a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73z"></path><path d="M12 22V12"></path><polyline points="3.29 7 12 12 20.71 7"></polyline><path d="m7.5 4.27 9 5.15"></path></svg>
</div>
<h3 className="font-medium text-xl tracking-tight mb-3 text-slate-900">Use a pre-integrated platform</h3>
<p className="text-sm leading-relaxed text-slate-600 flex-grow">Explore our directory to find out-of-the-box solutions that connect with NovaPay, such as Squarespace and Lightspeed.</p>
</div>
</div>
</div>

<div className="relative w-[320px] h-[360px] lg:w-[340px] lg:h-[380px] hover:-translate-y-4 hover:z-30 transition-all duration-300 ease-out z-20" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.08), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', borderRadius: '1rem', backdropFilter: 'blur(10px)'}}>
<div className="absolute inset-4 rounded-xl bg-white/95 text-slate-900 shadow-xl ring-1 ring-slate-200 backdrop-blur-md overflow-hidden flex flex-col">
<div className="p-6 sm:p-8 flex flex-col h-full">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 mb-6">
<svg aria-hidden="true" className="lucide lucide-users w-6 h-6 text-indigo-600" data-lucide="users" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"></path><path d="M16 3.128a4 4 0 0 1 0 7.744"></path><path d="M22 21v-2a4 4 0 0 0-3-3.87"></path><circle cx="9" cy="7" r="4"></circle></svg>
</div>
<h3 className="font-medium text-xl tracking-tight mb-3 text-slate-900">Build with certified experts</h3>
<p className="text-sm leading-relaxed text-slate-600 flex-grow">Work with a consulting partner that can integrate and deploy custom NovaPay solutions for you.</p>
</div>
</div>
</div>

<div className="relative w-[320px] h-[360px] lg:w-[340px] lg:h-[380px] lg:-ml-12 lg:rotate-6 hover:rotate-0 hover:-translate-y-2 hover:z-30 transition-all duration-300 ease-out z-10" style={{background: 'linear-gradient(rgba(255, 255, 255, 0.06), transparent)', border: '1px solid rgba(0, 0, 0, 0.05)', boxShadow: 'rgba(0, 0, 0, 0.1) 0px 25px 25px', borderRadius: '1rem', backdropFilter: 'blur(10px)'}}>
<div className="absolute inset-4 rounded-xl bg-white/90 text-slate-900 shadow-lg ring-1 ring-slate-200 backdrop-blur-md overflow-hidden flex flex-col">
<div className="p-6 sm:p-8 flex flex-col h-full">
<div className="inline-flex items-center justify-center h-12 w-12 rounded-xl bg-indigo-50 ring-1 ring-indigo-100 mb-6">
<svg aria-hidden="true" className="lucide lucide-layout w-6 h-6 text-indigo-600" data-lucide="layout" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><rect height="18" rx="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg>
</div>
<h3 className="font-medium text-xl tracking-tight mb-3 text-slate-900">Try our no-code products</h3>
<p className="text-sm leading-relaxed text-slate-600 flex-grow">Set up Payment Links, accept in-person payments with your phone, or share a payment link directly from your Dashboard.</p>
</div>
</div>
</div>
</div>
</div>
</section>

<section className="bg-white border-slate-200 border-t pt-24 pb-24">
<div className="max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
<div className="">
<h3 className="text-2xl font-bold mb-4">Ready to get started?</h3>
<p className="text-slate-600 mb-6">Create an account instantly to get started or contact us to design a custom package for your business.</p>
<div className="flex gap-4">
<button className="bg-slate-900 text-white px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:bg-slate-800 transition-colors">
                        Start now <svg aria-hidden="true" className="lucide lucide-arrow-right w-4 h-4" data-lucide="arrow-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
<button className="text-slate-600 px-5 py-2 rounded-full font-medium text-sm flex items-center gap-2 hover:text-slate-900 transition-colors">
                        Contact sales <svg aria-hidden="true" className="lucide lucide-chevron-right w-4 h-4 group-hover:translate-x-1 transition-transform" data-lucide="chevron-right" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m9 18 6-6-6-6"></path></svg>
</button>
</div>
</div>
<div className="grid grid-cols-2 gap-8">
<div className="">
<svg aria-hidden="true" className="lucide lucide-message-circle text-indigo-600 w-5 h-5 mb-3" data-lucide="message-circle" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M2.992 16.342a2 2 0 0 1 .094 1.167l-1.065 3.29a1 1 0 0 0 1.236 1.168l3.413-.998a2 2 0 0 1 1.099.092 10 10 0 1 0-4.777-4.719"></path></svg>
<h4 className="font-bold text-sm mb-1">Always know what you pay</h4>
<p className="text-xs text-slate-500 mb-2">Integrated per-transaction pricing with no hidden fees.</p>
<a className="text-indigo-600 text-xs font-semibold hover:underline" href="#">Pricing details →</a>
</div>
<div className="">
<svg aria-hidden="true" className="lucide lucide-settings text-indigo-600 w-5 h-5 mb-3" data-lucide="settings" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M9.671 4.136a2.34 2.34 0 0 1 4.659 0 2.34 2.34 0 0 0 3.319 1.915 2.34 2.34 0 0 1 2.33 4.033 2.34 2.34 0 0 0 0 3.831 2.34 2.34 0 0 1-2.33 4.033 2.34 2.34 0 0 0-3.319 1.915 2.34 2.34 0 0 1-4.659 0 2.34 2.34 0 0 0-3.32-1.915 2.34 2.34 0 0 1-2.33-4.033 2.34 2.34 0 0 0 0-3.831A2.34 2.34 0 0 1 6.35 6.051a2.34 2.34 0 0 0 3.319-1.915"></path><circle cx="12" cy="12" r="3"></circle></svg>
<h4 className="font-bold text-sm mb-1">Start your integration</h4>
<p className="text-xs text-slate-500 mb-2">Get up and running with our API keys within minutes.</p>
<a className="text-indigo-600 text-xs font-semibold hover:underline" href="#">API references →</a>
</div>
</div>
</div>
</section>

<footer className="bg-slate-900 border-slate-200/60 border-t pt-20 pb-10">
<div className="max-w-7xl mx-auto px-6 lg:px-8">
<div className="xl:grid xl:grid-cols-3 xl:gap-12 mb-16">
<div className="space-y-6 xl:col-span-1">
<a className="inline-flex items-center justify-center bg-center w-[90px] h-[30px] bg-[url(https://hoirqrkdgbmvpwutwuwj.supabase.co/storage/v1/object/public/assets/assets/ec5ac4c1-730a-4883-b089-8d8c66d81f36_320w.png)] bg-cover rounded-full invert" href="#"></a>
<p className="text-sm text-slate-500 leading-relaxed max-w-xs">
                    Financial infrastructure to grow your revenue. Built for scale, designed for developers.
                </p>
<div className="flex items-center gap-2 text-sm text-slate-500 mt-6">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
</span>
<span>All systems operational</span>
</div>
</div>
<div className="mt-12 grid grid-cols-2 gap-8 xl:col-span-2 xl:mt-0">
<div className="md:grid md:grid-cols-2 md:gap-8">
<div className="">
<h4 className="text-sm font-medium text-[#ffffff] tracking-tight">Products</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Atlas</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Billing</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Capital</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Checkout</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Climate</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Connect</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Corporate Card</a></li>
</ul>
</div>
<div className="mt-12 md:mt-0">
<h4 className="text-sm font-medium text-[#ffffff] tracking-tight">Developers</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Documentation</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">API reference</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">API status</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">API changelog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Build on NovaPay</a></li>
</ul>
</div>
</div>
<div className="md:grid md:grid-cols-2 md:gap-8">
<div className="">
<h4 className="text-sm font-medium text-[#ffffff] tracking-tight">Resources</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Support</a></li>
<li className=""><a className="hover:text-slate-900 transition-colors" href="#">Contact Sales</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Blog</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Guides</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Customer stories</a></li>
</ul>
</div>
<div className="mt-12 md:mt-0">
<h4 className="text-sm font-medium text-[#ffffff] tracking-tight">Company</h4>
<ul className="mt-4 space-y-3 text-sm text-slate-500">
<li><a className="hover:text-slate-900 transition-colors" href="#">Jobs</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Newsroom</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Partners</a></li>
<li><a className="hover:text-slate-900 transition-colors" href="#">Privacy</a></li>
</ul>
</div>
</div>
</div>
</div>
<div className="flex flex-col md:flex-row border-slate-700/60 border-t pt-8 gap-x-4 gap-y-4 items-center justify-between">
<div className="flex flex-col md:flex-row items-center gap-2 md:gap-4 text-sm text-slate-500">
<span>© 2024 NovaPay, Inc.</span>
<span className="hidden md:inline-block w-1 h-1 rounded-full bg-slate-300"></span>
<div className="flex items-center gap-1.5 hover:text-slate-900 transition-colors cursor-pointer group">
<svg className="lucide lucide-map-pin text-slate-400 group-hover:text-slate-900 transition-colors" fill="none" height="14" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="14" xmlns="http://www.w3.org/2000/svg"><path d="M20 10c0 4.993-5.539 10.193-7.399 11.799a1 1 0 0 1-1.202 0C9.539 20.193 4 14.993 4 10a8 8 0 0 1 16 0"></path><circle cx="12" cy="10" r="3"></circle></svg>
<span>United States</span>
</div>
</div>
<div className="flex gap-5">
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">Twitter</span>
<svg className="lucide lucide-twitter" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path></svg>
</a>
<a className="text-slate-400 hover:text-slate-900 transition-colors" href="#">
<span className="sr-only">GitHub</span>
<svg className="lucide lucide-github" fill="none" height="18" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="18" xmlns="http://www.w3.org/2000/svg"><path d="M15 22v-4a4.8 4.8 0 0 0-1-3.5c3 0 6-2 6-5.5.08-1.25-.27-2.48-1-3.5.28-1.15.28-2.35 0-3.5 0 0-1 0-3 1.5-2.64-.5-5.36-.5-8 0C6 2 5 2 5 2c-.3 1.15-.3 2.35 0 3.5A5.403 5.403 0 0 0 4 9c0 3.5 3 5.5 6 5.5-.39.49-.68 1.05-.85 1.65-.17.6-.22 1.23-.15 1.85v4"></path><path d="M9 18c-4.51 2-5-2-7-2"></path></svg>
</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
