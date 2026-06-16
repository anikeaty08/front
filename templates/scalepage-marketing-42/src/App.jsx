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



        lucide.createIcons();
        
        // Simple cursor spotlight effect for cards
        document.querySelectorAll('.card-shine').forEach(card => {
            card.addEventListener('mousemove', e => {
                const rect = card.getBoundingClientRect();
                const x = e.clientX - rect.left;
                const y = e.clientY - rect.top;
                card.style.setProperty('--mouse-x', `${x}px`);
                card.style.setProperty('--mouse-y', `${y}px`);
            });
        });

        // Animated Testimonials Logic
        const testimonials = [
            {
                quote: "A atenção aos detalhes e os recursos inovadores transformaram completamente nosso fluxo de trabalho. É exatamente o que procurávamos.",
                name: "Sarah Chen",
                designation: "Gerente de Produto, TechFlow",
                src: "https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=3560&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                quote: "A implementação foi perfeita e os resultados superaram nossas expectativas. A flexibilidade da plataforma é notável.",
                name: "Michael Rodriguez",
                designation: "CTO, InnovateSphere",
                src: "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                quote: "Essa solução melhorou significativamente a produtividade da nossa equipe. A interface intuitiva simplifica tarefas complexas.",
                name: "Emily Watson",
                designation: "Diretora de Operações, CloudScale",
                src: "https://images.unsplash.com/photo-1623582854588-d60de57fa33f?q=80&w=3540&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                quote: "Suporte excepcional e recursos robustos. É raro encontrar um produto que cumpre todas as suas promessas.",
                name: "James Kim",
                designation: "Líder de Engenharia, DataPro",
                src: "https://images.unsplash.com/photo-1636041293178-808a6762ab39?q=80&w=3464&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
            {
                quote: "A escalabilidade e o desempenho foram decisivos para nossa organização. Altamente recomendado para qualquer negócio em crescimento.",
                name: "Lisa Thompson",
                designation: "VP de Tecnologia, FutureNet",
                src: "https://images.unsplash.com/photo-1624561172888-ac93c696e10c?q=80&w=2592&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
            },
        ];

        let activeIndex = 0;
        const container = document.getElementById('testimonials-container');
        const nameEl = document.getElementById('testimonial-name');
        const roleEl = document.getElementById('testimonial-role');
        const quoteContainer = document.getElementById('testimonial-quote-container');

        // Pre-render images
        testimonials.forEach((t, i) => {
            const img = document.createElement('img');
            img.src = t.src;
            img.alt = t.name;
            img.className = 'absolute inset-0 w-full h-full object-cover rounded-3xl transition-all duration-500 ease-in-out shadow-xl';
            img.id = `testim-img-${i}`;
            container.appendChild(img);
        });

        function randomRotateY() {
            return Math.floor(Math.random() * 21) - 10;
        }

        function updateTestimonial() {
            // Update Text
            const current = testimonials[activeIndex];
            
            // Name & Role Animation Reset
            nameEl.style.animation = 'none';
            nameEl.offsetHeight; // trigger reflow
            nameEl.style.animation = 'fadeScaleIn 0.3s ease-out forwards';
            nameEl.innerText = current.name;

            roleEl.style.animation = 'none';
            roleEl.offsetHeight;
            roleEl.style.animation = 'fadeScaleIn 0.3s ease-out 0.1s forwards';
            roleEl.style.opacity = '0'; // default hidden before anim
            roleEl.innerText = current.designation;

            // Quote Animation
            quoteContainer.innerHTML = '';
            const words = current.quote.split(" ");
            words.forEach((word, index) => {
                const span = document.createElement('span');
                span.innerText = word + " ";
                span.className = 'inline-block opacity-0';
                span.style.animation = `blurIn 0.2s ease-in-out forwards`;
                span.style.animationDelay = `${index * 0.02}s`;
                quoteContainer.appendChild(span);
            });

            // Update Images
            testimonials.forEach((_, i) => {
                const img = document.getElementById(`testim-img-${i}`);
                if (i === activeIndex) {
                    img.style.opacity = '1';
                    img.style.transform = 'scale(1) rotate(0deg)';
                    img.style.zIndex = '999';
                } else {
                    img.style.opacity = '0.4';
                    img.style.transform = `scale(0.9) rotate(${randomRotateY()}deg)`;
                    img.style.zIndex = i < activeIndex ? i : 100 - i; // Stack order
                }
            });
        }

        document.getElementById('prev-btn').addEventListener('click', () => {
            activeIndex = (activeIndex - 1 + testimonials.length) % testimonials.length;
            updateTestimonial();
        });

        document.getElementById('next-btn').addEventListener('click', () => {
            activeIndex = (activeIndex + 1) % testimonials.length;
            updateTestimonial();
        });

        // Initialize
        updateTestimonial();
        // Auto rotate
        setInterval(() => {
            activeIndex = (activeIndex + 1) % testimonials.length;
            updateTestimonial();
        }, 5000);

    
    } catch (error) {
      console.error("Error executing template scripts:", error);
    }
  }, []);

  return (
    <>
      

<div className="fixed inset-0 z-0 pointer-events-none">
<div className="absolute top-[-10%] left-1/2 -translate-x-1/2 w-[80%] h-[600px] bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] via-background to-background blur-[100px] opacity-50 from-cyan-900/20"></div>
<div className="bg-grid absolute inset-0 opacity-60"></div>
</div>

<nav className="fixed top-0 left-0 right-0 z-50 border-b bg-background/80 backdrop-blur-xl transition-all duration-300 border-white/5">
<div className="max-w-7xl mx-auto px-6 h-14 flex items-center justify-between">
<div className="flex items-center gap-2 cursor-pointer hover:opacity-80 transition-opacity">
<div className="w-5 h-5 relative text-white">
<div className="absolute inset-0 blur-sm opacity-50 bg-white"></div>
<svg className="w-5 h-5 relative z-10" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
</div>
<span className="text-sm font-medium tracking-tight text-white">ScalePage</span>
</div>
<div className="hidden md:flex items-center gap-8 text-[13px] font-medium text-neutral-400">
<a className="transition-colors hover:text-white" href="#">Serviços</a>
<a className="transition-colors hover:text-white" href="#">Método</a>
<a className="transition-colors hover:text-white" href="#">Resultados</a>
<a className="transition-colors hover:text-white" href="#">Consultoria</a>
</div>
<div className="flex items-center gap-3">
<a className="text-[13px] font-medium transition-colors px-2 hidden sm:block text-neutral-400 hover:text-white" href="#">Login Cliente</a>
<button className="group relative px-4 py-1.5 rounded-full text-[13px] font-medium transition-all overflow-hidden bg-white text-black hover:bg-neutral-200">
<span className="relative z-10 flex items-center gap-1">
                        Diagnóstico Gratuito
                    </span>
<div className="absolute inset-0 bg-gradient-to-r from-transparent to-transparent -translate-x-full group-hover:animate-[beam_1s_infinite] via-white/50"></div>
</button>
</div>
</div>
</nav>

<main className="flex flex-col text-center max-w-[90rem] z-10 mr-auto ml-auto pt-32 pr-4 pb-20 pl-4 relative items-center">

<div className="animate-fade-up delay-100 mb-8">
<div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border backdrop-blur-md shadow-[0_0_15px_-3px_rgba(255,255,255,0.1)] border-white/10 bg-white/5">
<span className="relative flex h-2 w-2">
<span className="animate-ping absolute inline-flex h-full w-full rounded-full opacity-75 bg-indigo-400"></span>
<span className="relative inline-flex rounded-full h-2 w-2 bg-indigo-500"></span>
</span>
<span className="text-[11px] font-medium tracking-wide uppercase text-neutral-300">Agenda liberada para novos projetos</span>
</div>
</div>

<h1 className="animate-fade-up delay-200 text-5xl md:text-7xl lg:text-8xl font-medium tracking-tighter leading-[0.95] mb-8 text-white">
            Marketing que coloca o seu <br/>
            negócio em <span className="font-serif italic opacity-80 font-light pr-2 text-neutral-400">crescimento.</span>
</h1>
<p className="animate-fade-up delay-300 text-base md:text-lg max-w-xl mx-auto leading-relaxed mb-10 font-light text-neutral-400">
            Páginas de alta conversão, tráfego pago e estratégia de vendas. Não entregamos apenas arquivos soltos — entregamos faturamento e autoridade.
        </p>

<div className="animate-fade-up delay-500 relative w-full max-w-3xl mx-auto perspective-[2000px] group mb-24">

<div className="relative bg-[#0F0F11] rounded-xl border shadow-2xl overflow-hidden transform transition-all duration-700 group-hover:rotate-x-2 group-hover:-translate-y-2 border-white/10">

<div className="p-4 border-b flex items-center gap-3 border-white/5">
<svg className="w-4 h-4 text-neutral-500" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="11" cy="11" r="8"></circle><path d="m21 21-4.3-4.3"></path></svg>
<span className="text-sm text-neutral-500 font-mono">O que vamos fazer hoje?</span>
<div className="ml-auto flex gap-2">
<span className="hidden sm:inline-flex items-center h-5 px-1.5 rounded border font-mono text-[10px] text-indigo-500 border-white/10 bg-white/5">Executando</span>
</div>
</div>

<div className="p-2 space-y-1">
<div className="flex items-center gap-3 px-3 py-2 rounded-lg border bg-white/5 border-white/5">
<div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><path d="M3 9h18"></path><path d="M9 21V9"></path></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium text-white">Criar Landing Page de Alta Conversão</span>
<span className="text-[10px] text-neutral-500">Status: Entregue em 48h</span>
</div>
<span className="ml-auto text-[10px] font-mono text-neutral-600">↵</span>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer group/item hover:bg-white/5">
<div className="w-5 h-5 rounded bg-indigo-500/20 flex items-center justify-center text-indigo-400"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium group-hover/item:text-white text-neutral-300">Escalar Campanhas Meta Ads</span>
<span className="text-[10px] text-neutral-600">Objetivo: Reduzir Custo por Lead</span>
</div>
</div>
<div className="flex items-center gap-3 px-3 py-2 rounded-lg transition-colors cursor-pointer group/item hover:bg-white/5">
<div className="w-5 h-5 rounded bg-blue-500/20 flex items-center justify-center text-blue-400"><svg fill="none" height="12" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" width="12"><path d="M21 15a2 2 0 0 1-2 2H7l-4 4V5a2 2 0 0 1 2-2h14a2 2 0 0 1 2 2z"></path></svg></div>
<div className="flex flex-col text-left">
<span className="text-xs font-medium group-hover/item:text-white text-neutral-300">Otimizar Funil de Vendas</span>
<span className="text-[10px] text-neutral-600">WhatsApp &amp; CRM</span>
</div>
</div>
</div>

<div className="absolute -z-10 top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[80%] h-[50%] bg-cyan-500/20 blur-[80px]"></div>
</div>

<div className="absolute -right-12 top-10 w-24 h-24 rounded-xl border bg-[#0F0F11]/80 backdrop-blur-md p-3 animate-float border-white/5" style={{animationDelay: '1s'}}>
<div className="w-full h-full flex flex-col justify-between opacity-60">
<div className="flex items-center justify-between">
<div className="text-[8px] text-neutral-400">ROI</div>
<div className="text-[8px] text-indigo-400">+240%</div>
</div>
<div className="w-full flex items-end gap-1 h-10">
<div className="w-1/4 h-3 rounded-sm bg-white/10"></div>
<div className="w-1/4 h-5 rounded-sm bg-white/10"></div>
<div className="w-1/4 h-4 rounded-sm bg-white/10"></div>
<div className="w-1/4 h-8 bg-gradient-to-t from-indigo-500 rounded-sm to-indigo-300"></div>
</div>
</div>
</div>
<div className="absolute -left-8 bottom-10 w-32 h-12 rounded-xl border bg-[#0F0F11]/80 backdrop-blur-md p-2 animate-float flex items-center gap-3 border-white/5" style={{animationDelay: '2s'}}>
<div className="w-8 h-8 rounded-full flex items-center justify-center bg-neutral-800">
<svg className="w-4 h-4 text-emerald-400" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
</div>
<div className="flex flex-col">
<span className="text-[10px] font-medium text-white">Novo Lead</span>
<span className="text-[8px] text-neutral-500">via Ads</span>
</div>
</div>
</div>

<div className="w-full max-w-6xl mx-auto overflow-hidden mask-linear-fade relative opacity-40 hover:opacity-80 transition-opacity duration-500">
<div className="absolute left-0 top-0 bottom-0 w-32 bg-gradient-to-r from-background to-transparent z-10"></div>
<div className="absolute right-0 top-0 bottom-0 w-32 bg-gradient-to-l from-background to-transparent z-10"></div>
<div className="flex gap-12 animate-marquee w-max">

<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path></svg> Meta Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Google Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M19.321 5.562a5.122 5.122 0 0 1-3.585-1.446A5.122 5.122 0 0 1 14.29 2.67H10.74v13.62c0 2.57-2.094 4.66-4.66 4.66-2.569 0-4.66-2.09-4.66-4.66s2.091-4.66 4.66-4.66c.553 0 1.082.097 1.577.274V7.553a8.97 8.97 0 0 0-1.577-.142C2.753 7.41 0 10.164 0 13.62c0 3.453 2.753 6.21 6.08 6.21 3.327 0 6.08-2.757 6.08-6.21V8.51c1.545.92 3.344 1.45 5.27 1.45V6.36c-1.393 0-2.676-.29-3.834-.8.506-1.157.797-2.44.797-3.833h3.504c0 1.258.468 2.42 1.252 3.31l-3.262 3.26z"></path></svg> TikTok Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.008-.57-.008-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"></path></svg> WhatsApp</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2C6.48 2 2 6.48 2 12s4.48 10 10 10 10-4.48 10-10S17.52 2 12 2zm1 15h-2v-6h2v6zm0-8h-2V7h2v2z"></path></svg> RD Station</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="currentColor" viewbox="0 0 24 24"><path d="M12 2.04c-5.5 0-10 4.49-10 10.02 0 5 3.66 9.15 8.44 9.9v-7H7.9v-2.9h2.54V9.85c0-2.51 1.49-3.89 3.78-3.89 1.09 0 2.23.19 2.23.19v2.47h-1.26c-1.24 0-1.63.77-1.63 1.56v1.88h2.78l-.45 2.9h-2.33v7a10 10 0 0 0 8.44-9.9c0-5.53-4.5-10.02-10-10.02z"></path></svg> Meta Ads</span>
<span className="text-lg font-semibold flex items-center gap-2 text-neutral-600"><svg className="w-5 h-5" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><circle cx="12" cy="12" r="10"></circle><path d="M12 16v-4"></path><path d="M12 8h.01"></path></svg> Google Ads</span>
</div>
</div>
</main>

<section className="py-20 px-6 max-w-7xl mx-auto relative">

<div className="mb-16 flex flex-col md:flex-row items-start justify-between gap-8">
<div className="max-w-xl">
<h2 className="text-3xl md:text-4xl font-medium tracking-tight mb-4 text-white">Estratégia construída para <span className="font-serif italic opacity-80">vender.</span></h2>
<p className="text-sm md:text-base text-neutral-400">Projetado para eliminar a estagnação. Cada detalhe serve ao propósito de aumentar seu lucro.</p>
</div>
<div className="hidden md:block text-right">
<div className="text-xs font-mono text-neutral-500 mb-1">STATUS DA AGÊNCIA</div>
<div className="flex items-center justify-end gap-2 text-indigo-500 text-xs font-medium">
<div className="w-1.5 h-1.5 rounded-full bg-indigo-500"></div>
                    Equipe Operacional
                </div>
</div>
</div>

<div className="grid grid-cols-1 md:grid-cols-6 lg:grid-cols-12 gap-6 auto-rows-[minmax(300px,auto)]">

<div className="md:col-span-3 lg:col-span-4 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between">
<div className="relative z-10">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center mb-6 bg-white/5 border-white/10 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><rect height="18" rx="2" ry="2" width="18" x="3" y="3"></rect><line x1="3" x2="21" y1="9" y2="9"></line><line x1="9" x2="9" y1="21" y2="9"></line></svg>
</div>
<h3 className="text-lg font-medium mb-2 text-white">Páginas de Alta Conversão</h3>
<p className="text-sm leading-relaxed text-neutral-400">Feitas para transformar visitantes em clientes. Design moderno, rápido e com copy persuasiva. Entrega ágil.</p>
</div>

<div className="absolute right-4 bottom-4 flex gap-1 opacity-40 group-hover:opacity-100 transition-opacity">
<div className="h-8 px-3 flex items-center justify-center rounded border border-indigo-500/20 text-[10px] font-mono bg-indigo-900/30 text-indigo-400">CONVERTER</div>
</div>
</div>

<div className="md:col-span-3 lg:col-span-8 glass rounded-3xl p-0 relative overflow-hidden group card-shine">
<div className="absolute inset-0 bg-grid opacity-20"></div>
<div className="absolute inset-0 flex items-center justify-center z-0">

<div className="relative w-full h-full opacity-50 group-hover:opacity-100 transition-opacity duration-700">
<svg className="w-full h-full absolute inset-0" style={{maskImage: 'linear-gradient(to right, transparent, black, transparent)'}}>

<path className="text-neutral-700" d="M100,150 C200,150 250,100 350,100" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>
<path className="text-neutral-700" d="M100,150 C200,150 250,200 350,200" fill="none" stroke="currentColor" stroke-dasharray="4 4" strokeWidth="1"></path>

<circle className="text-blue-500 fill-current" cx="100" cy="150" r="4"></circle> 
<circle className="text-emerald-500 fill-current" cx="350" cy="100" r="4"></circle> 
<circle className="text-emerald-500 fill-current" cx="350" cy="200" r="4"></circle> 

<circle className="text-white fill-white" cx="0" cy="0" r="3">
</circle>
<circle className="text-white fill-white" cx="0" cy="0" r="3">
</circle>
</svg>
</div>
</div>
<div className="absolute bottom-0 left-0 right-0 p-8 bg-gradient-to-t from-background to-transparent z-10">
<h3 className="text-xl font-medium mb-2 text-white">Gestão de Tráfego 360°</h3>
<p className="text-sm max-w-md text-neutral-400">Meta Ads, Google e TikTok. Criamos estratégias para reduzir seu custo por aquisição e escalar suas vendas com previsibilidade.</p>
</div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl p-8 relative overflow-hidden group card-shine flex flex-col justify-between h-[320px]">
<div className="relative z-20">
<div className="flex items-center justify-between mb-6">
<div className="w-10 h-10 rounded-lg border flex items-center justify-center bg-white/5 border-white/10 text-white">
<svg fill="none" height="20" stroke="currentColor" strokeWidth="1.5" viewbox="0 0 24 24" width="20"><path d="M12 2a10 10 0 1 0 10 10 4 4 0 0 1-5-5 4 4 0 0 1-5-5"></path></svg>
</div>

<div className="flex -space-x-2">
<div className="w-8 h-8 rounded-full border-2 border-background bg-neutral-700"></div>
<div className="w-8 h-8 rounded-full border-2 border-background bg-neutral-600"></div>
<div className="w-8 h-8 rounded-full border-2 border-background bg-neutral-500 flex items-center justify-center text-[10px] font-medium text-white">+10k</div>
</div>
</div>
<h3 className="text-xl font-medium mb-2 text-white">Social Media &amp; Branding</h3>
<p className="text-sm text-neutral-400">Posicionamento que gera autoridade. Identidade visual forte e conteúdo estratégico que atrai clientes qualificados, não apenas seguidores.</p>
</div>

<div className="absolute right-0 bottom-0 w-48 h-48 bg-gradient-to-tl from-blue-500/10 to-transparent rounded-tl-full"></div>
</div>

<div className="md:col-span-6 lg:col-span-6 glass rounded-3xl relative overflow-hidden group card-shine h-[320px]">
<div className="absolute top-0 left-0 w-full h-8 border-b flex items-center px-4 gap-2 bg-white/5 border-white/5">
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<div className="w-2.5 h-2.5 rounded-full bg-blue-500/20 border border-blue-500/50"></div>
<span className="ml-2 text-[10px] font-mono text-neutral-500">estratégia.json</span>
</div>
<div className="p-8 mt-8 font-mono text-xs leading-relaxed text-neutral-400">
<p><span className="text-blue-400">const</span> <span className="text-indigo-400">funil_vendas</span> = {</p>
<p className="pl-4">origem: <span className="text-blue-400">'instagram_ads'</span>,</p>
<p className="pl-4">destino: <span className="text-blue-400">'whatsapp_comercial'</span>,</p>
<p className="pl-4">crm: <span className="text-indigo-400">true</span>,</p>
<p className="pl-4">recuperacao: {</p>
<p className="pl-8">tempo: <span className="text-blue-400">'15min'</span>,</p>
<p className="pl-8">msg: <span className="text-blue-400">'automática'</span></p>
<p className="pl-4">}</p>
<p>}</p>
</div>
<div className="absolute bottom-0 left-0 w-full p-6 bg-gradient-to-t from-[#0A0A0B] via-[#0A0A0B]/90 to-transparent">
<h3 className="text-lg font-medium text-white">Automação de Vendas</h3>
<p className="text-sm text-neutral-500">Organizamos seu WhatsApp e CRM para você nunca perder um lead.</p>
</div>
</div>
</div>
</section>

<section className="py-32 relative overflow-hidden border-t border-white/5">
<div className="absolute inset-0 bg-gradient-to-b from-background to-background via-cyan-950/5"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10 flex flex-col items-center text-center">
<h2 className="text-3xl md:text-5xl font-medium tracking-tight mb-8 text-white">
                Crescimento real e <span className="text-neutral-500">previsível.</span>
</h2>

<div className="w-full max-w-4xl h-64 relative mt-10 opacity-70">
<div className="absolute top-1/2 left-1/4 w-2 h-2 rounded-full shadow-[0_0_10px_white] bg-white">
<div className="absolute inset-0 rounded-full border animate-[pulse-ring_2s_infinite] border-white"></div>
</div>
<div className="absolute top-1/3 left-1/2 w-1.5 h-1.5 bg-neutral-500 rounded-full"></div>
<div className="absolute bottom-1/3 right-1/4 w-2 h-2 rounded-full shadow-[0_0_10px_white] bg-white">
<div className="absolute inset-0 rounded-full border animate-[pulse-ring_2s_infinite] delay-500 border-white"></div>
</div>

<svg className="absolute inset-0 w-full h-full pointer-events-none">
<path className="opacity-50" d="M250,128 Q500,50 750,150" fill="none" stroke="url(#gradient-line)" stroke-dasharray="4 4" strokeWidth="1"></path>
<defs>
</defs>
</svg>
</div>
<div className="grid grid-cols-2 md:grid-cols-4 gap-12 mt-12 text-center">
<div>
<div className="text-3xl font-serif italic mb-1 text-white">48h</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Entrega de Páginas</div>
</div>
<div>
<div className="text-3xl font-serif italic mb-1 text-white">+ROI</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Foco em Lucro</div>
</div>
<div>
<div className="text-3xl font-serif italic mb-1 text-white">100%</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Suporte Humano</div>
</div>
<div>
<div className="text-3xl font-serif italic mb-1 text-white">360°</div>
<div className="text-xs text-neutral-500 uppercase tracking-widest">Marketing Completo</div>
</div>
</div>
</div>
</section>

<section className="py-20 px-6 max-w-7xl mx-auto border-t border-white/5">
<div className="max-w-sm md:max-w-4xl mx-auto px-4 md:px-8 lg:px-12 py-20">
<div className="relative grid grid-cols-1 md:grid-cols-2 gap-20">

<div className="h-80 w-full relative perspective-1000" id="testimonials-container">

</div>

<div className="flex justify-between flex-col py-4">
<div id="testimonial-content">
<h3 className="text-2xl font-bold text-white mb-1 animate-fade-up" id="testimonial-name"></h3>
<p className="text-sm text-neutral-500 animate-fade-up" id="testimonial-role"></p>
<div className="text-lg text-neutral-400 mt-8 leading-relaxed h-32" id="testimonial-quote-container">

</div>
</div>
<div className="flex gap-4 pt-12 md:pt-0 mt-8">
<button className="h-8 w-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center group/button transition-colors" id="prev-btn">
<svg className="lucide lucide-arrow-left h-5 w-5 text-white group-hover/button:rotate-12 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="m12 19-7-7 7-7"></path><path d="M19 12H5"></path></svg>
</button>
<button className="h-8 w-8 rounded-full bg-neutral-800 hover:bg-neutral-700 flex items-center justify-center group/button transition-colors" id="next-btn">
<svg className="lucide lucide-arrow-right h-5 w-5 text-white group-hover/button:-rotate-12 transition-transform duration-300" fill="none" height="24" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" viewbox="0 0 24 24" width="24" xmlns="http://www.w3.org/2000/svg"><path d="M5 12h14"></path><path d="m12 5 7 7-7 7"></path></svg>
</button>
</div>
</div>
</div>
</div>
</section>

<footer className="relative pt-32 pb-12 bg-background overflow-hidden border-t border-white/5">

<div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-full h-[400px] bg-[radial-gradient(circle_at_bottom,_var(--tw-gradient-stops))] via-transparent to-transparent pointer-events-none from-cyan-900/20"></div>
<div className="max-w-7xl mx-auto px-6 relative z-10">
<div className="flex flex-col items-center text-center mb-24">
<h2 className="text-4xl md:text-6xl font-medium tracking-tight mb-8 text-white">
                    Pronto para <span className="font-serif italic opacity-80">crescer?</span>
</h2>
<div className="flex flex-col sm:flex-row items-center gap-4">

<div className="inline-block bg-transparent">
<button className="shiny-cta focus:outline-none">
<span>
<svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path></svg>
                                Falar com especialista no WhatsApp
                            </span>
</button>
</div>
<button className="h-12 px-8 rounded-full border font-medium text-sm transition-all border-white/10 text-neutral-400 hover:text-white hover:bg-white/5">
                        Ver nossos cases
                    </button>
</div>
<div className="mt-6 flex flex-col gap-1 text-[11px] text-neutral-600">
<span>Resposta em até 2 horas.</span>
<span>Diagnóstico gratuito e sem compromisso.</span>
</div>
</div>
<div className="border-t pt-12 flex flex-col md:flex-row justify-between gap-8 border-white/5">
<div className="flex items-center gap-2">
<div className="w-5 h-5 text-neutral-600">
<svg fill="none" stroke="currentColor" strokeWidth="2" viewbox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path d="M12 2L2 7l10 5 10-5-10-5zm0 9l2.5-1.25L12 8.5l-2.5 1.25L12 11zm0 2.5l-5-2.5-5 2.5L12 22l10-8.5-5-2.5-5 2.5z"></path></svg>
</div>
<span className="text-xs text-neutral-600">© 2024 ScalePage Marketing.</span>
</div>
<div className="flex gap-8 text-xs text-neutral-500 font-medium">
<a className="transition-colors hover:text-white" href="#">Instagram</a>
<a className="transition-colors hover:text-white" href="#">LinkedIn</a>
<a className="transition-colors hover:text-white" href="#">WhatsApp</a>
<a className="transition-colors hover:text-white" href="#">Termos</a>
</div>
</div>
</div>
</footer>


    </>
  );
}
